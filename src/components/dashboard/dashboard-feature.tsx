/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "57uGie1FLJwPRF4LFyoU2BcjuKUVuKqG8h5MoogXhqAdM7hhDMze2HEarVYvdNDHCG4YDvxcLyYGjcigSuvev5mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sN1D1KskEq431uL1diHutsfsvEaLuafE131PKdZTZfgJwmyC7zayZ2sdCqoD9KNDq2SjX2vQ39SHLnmgQtQ5Wyc",
  "key1": "4NDrremK93T2zWxjRwEPXm9H5BME982EXaF4LUu9gk53CKKU9oQsnheV3PFvRTXYKDqNBtGDHGqPQ5L8qaxy2kZ2",
  "key2": "bpSLuxQuPdeS8YYUfb7zi4Dd4guxXimNJzAvHpPyprcv7Gvy48FT9e7APT2YFbg1n2Kb8WHGrUyWKpQ2HnrF7PX",
  "key3": "4ofQUjMa3b6eKJF7qQNEHNybiBubTZauHbzF9PGrtkL55ArgYsZG3fompx71JwvUXKR7EjjdTo6dDj5GmxausMQN",
  "key4": "5zVyuFWWf7cvbroxDSKmVRa3fntHL1Y5vsGGyJS8a52vFRq1qkjxAqFo3MZmQUqf2FHoMme6BxbvHLWiFoE4tcYE",
  "key5": "3BBXnXUuy7qe1weseThTsG3Lw11uCF15G3MetbWhQbM67Gr6aSvCrGSLNryykzkMHywHsK3BP5eRZUbee9geBHUL",
  "key6": "xkD3dgcfhcdS3VeNeVjZGs2Z6J8bbJQjVSBipMNmm2SmST5ehRkuyCcaGGLg8pr1R6tcjj6LRMREPnC6GynMsER",
  "key7": "2sYZt1mvGGRy1JQ7XUpbbNr31TinYuTQbVAkMPtv38ETmaZWPEjNYx1hCCoYh8qjMcrKutjPiNywbwiQ8bCYWhb6",
  "key8": "2Aos2y7Au4X2RjFf7iBv4tGYS4rRr9j6ZdxNPaQDVoDZvPBbwhgd8dM1YG323mwnFhQagCXSix2cADaXGgvu7efa",
  "key9": "5ZTvXkuQMW4wAHN8jLoU5vozxXufJUiS3gabNgzxuNaiiXJne7mL4Gkr7paLDJjupWUjA3UkqJFwqGFC4iUFsJ4i",
  "key10": "4azLSRsR3eXsH6CudWHv7kSGsTE1b7pUFtPNqLZeE8XoLizv3QYmvjvsGPxDWe1sJ6xAVL1wMSRJ9jq5sJWKp3Cr",
  "key11": "4ULtCt9zpLUiW2453GYxmFRfoLq7sWpdtXGKwTiFGc9j2t6ZfRFNP4Lryo29hA47Bt8VQvUbsKv8MJDevRgJFCET",
  "key12": "Ph5Cebvaxn6awLrqnGcsgXYMtcSbNNCLnhAi3cZWGWAqNddMfa3b3yffzZuX8wis7CPGc4Z6nXCQTSM3zSMBLzE",
  "key13": "4FQbycSYaapRbRXo2Gi16LLsATVMCCriaosgUuXhQ72omMKcysPNcUKkBm64LsFC4DquQVmM315EyKoSAaewJVf2",
  "key14": "4CVcHSZd9pXuiC1HxCJYd6dRvJYGdt78xHnbMcRZiM7q1DDt64u2uv8mSkqqet2whAYuV4uGNwEqiZXmRRDM6ZD",
  "key15": "XwEmyUXB4yUssVXV1BbpUT4gUQmT1nvn7meFCjJf3SVfd2km8RpeaDWv9itUqaV4m1W4PapfCsQ4z8bHbdE6z4V",
  "key16": "2NHRvEq6XHARUCSUSBUfk5QnPCJmuaoNJQfk3fumFYoLYucm8CPEbftm6h8Ujt2rCumSeDKFsysGumUeEMGpAxMF",
  "key17": "WGA1oxauQ9cRLMiNTsJGqyYCYSTiRohbiPiP7YuC4TLThWfcn4qJ7kPP1CdwmahZV6SPUu9Q3H1kpRQoUxYy8rv",
  "key18": "3CxvMMK8tTdK7BtDn2HjUxdhs7LuByP64udyCzFDmfRVCWbvEMvJTcHzbnk9irPfAQCTuQodYMXWHAWfq13w58tH",
  "key19": "3camAAotD4Z6VAJNneAXEQQpq6xrJ2CZx88da9EvKRWCRd6Xi1jLximnrwRz5UBRnG7Lpb2vvaHkzhHqvPinbqeK",
  "key20": "5s7PQ7xwkTYKWDesTEfzVbkKT7FKhfiAbJasmKEXUEzQ168gdfhsoMq8aFsSWXey2mUwhCfQbTRna5kQpGecXedF",
  "key21": "3G8yanjMoVSWMpxSQoGGFMPM239m9xfZfh6zNUHSqQLYR2VgR6M3kLwsqEM8wMusiiHTe8vgofM7YHTNHy4VN3x9",
  "key22": "2EXtATcowm8eC9AEj91uFvpqJUbmJj3BJX31x6QAydBYMZu5Z8etUw5GP4WuoWs1PXNqetVrdqEW3svep1kWCjGT",
  "key23": "53h35jEM1dBtpRkMHuboPHCkowcGBteAP26V5CXx1aXVAT6VkJ5u48NzcZeD2yrAJuravk9AzM5v3Fg3aU6YUerw",
  "key24": "2VFKNeKkrbUzFmYmNfvuK6W8MM92w7uTjSAa1ezVQmz3XAJs4Lm3Zj2PAPuSgiVncFxBKSEjJ1HA3BCZJMZqNzSL",
  "key25": "4JEYHHm6X7oLzKhP9mCzNtUuddhzndKR3BraczfXKm5Lgs3ph6kMkE9rjzyD1woN8aU9vn5wG7z5AErx3aerhikX",
  "key26": "5BD4kDMRd4tAvmBsSX4xNrKejcWBPqhrS9BoGM8emrpP3RC8yXqUpvxQWi8NqYnkhLgurHt1mY1Khs2t9Ukr2GTH",
  "key27": "vAtujRkwyWk224ca9dBNwZhHyfp8iGc8euTtES3s9DqUA7rVpnYopRqRFNNfPZqvZFy7TqPF8mv3tY8serudYcD",
  "key28": "5r1gwXMGbCarCFtJT8VxXvocxUznBiDz6fo4zhFW6y7N5AFLH4C4v88Vm8QAmiw3v2LuBDN5oSMw5Z4xnJsbYgTg",
  "key29": "2sZXJhBC6iQ5EgE8zKvzHjYqjJ5ZJPfGTcvpVQHMry5Xoj8EbuJu6VWVNJKKuJFRDgqRL6NBwdxmw8ftDPS6khKj",
  "key30": "5pG8SAeB58dwXCMYRtK6FSe5kcbNtUdvPDhC4amRFRRynWgWKU3ddpmeCmkuuPd8oU3veyZzFr5vifjntjEvgVXv",
  "key31": "KphrDXs9biVmXbVprAFUu7BJ3htqJ2hTCiJpvQPb7YnVs5mMoD7oAJjUnsrqF3WrYJ6Gs8v6JSL7cvUfmidAxtF",
  "key32": "2WuryGVNVa5jjMbtqDqWEv8dvN9BDwz3iCgrj4rUhWu3kaqCFzVtG9m66rZsB7esATDW954hq1ihcg5SbpqyzHEB",
  "key33": "2vTrFy4BLXveN9hB3wHxK4XZfVSfKX5WpQj7dHt8ECWGbC3cC115r5kRJBkpghNCmTSNfNL94ACtYu5zV11QiLPK",
  "key34": "3uddddL2NByjkf2FyM1XSNCkwEmE79LsmcgUeWRE2MeSqtXukqperQ1SHwf3dzoH5BH1ZneMvEpTsLFczERfy6LX",
  "key35": "ch8zuaynx9uFCHxsmQ6BKPsb6jJykfECwpQS7Wk3pCLzyad7o2mNwHgXMpfjcVEQcoXBkCiCwzfLzgyvYjPXSm3",
  "key36": "5xdRN1raEWtRT2M61MXdzfFunb5Wcha2nxcrhct438QRKE8irE1JZFvkt5eheHngrdztZpYUz7Y5P9CxJkKX6ytu",
  "key37": "2TRhZMAc3J2WZVA8DfCpSt9NgwBAbeMrTUj6VdXenNxcYDXTHy9k9UraGbry1AcnXBF9hDticyNUh5QYNM4Ex9MU",
  "key38": "4utszReTwJwyMFfNRCYHgkk5Wm6xQb8DdyNxwbL5UKFMj1haR9gYhGFYx1P8rs1646wtxWQUD51Bhx8v2HCbvxyp",
  "key39": "4JEqLEPoTuWcDw9tJKwtkRQcvtx5hUHnZNriPvvqH5W8PCVaWdQb82M5GLWADJ81aC8Yz9hVL4mExgx5H6Wit9vP",
  "key40": "h7xTKheJQayk6XbaJ7yUQEtXVVpzGqKRm3jwUzjFKQE94D1WBKyPzb7acMRWoyCP6cidazJtUZvwju1whoNB2c2",
  "key41": "2WMz9VVW9GDRGaHWgLerPqenbXrkAAegk6t2VTXnbtJTjrsGdrXdnAMBztWuQsjphNgbiP9mMciiHf1Tzu6xfrtr",
  "key42": "3JDSiiEbrak9rTXaMPAowrCxbyeyhafS8q5nhL8fYb3sQ31ZbwMyKU9aj7r6yBDZBsehML3BZoeAXLq3eqcTivTC",
  "key43": "g9EJifcwsWejpVPrX2z9pLscGPMNRdvtAexvDdBf1kvVNpGKaD5D3hbQCXm17s8YX1frTrJcT21eXi51wRqPLYD",
  "key44": "26LZht3wVgNEKFeTbwm6ftr4YxT4TyVXALMzve2AMFTP9tE22hvsHzC7aPcQFAm9TUicnyAhAom66iHZVGsGsNio"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

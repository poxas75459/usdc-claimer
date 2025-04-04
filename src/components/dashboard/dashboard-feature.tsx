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
    "4xBKd4fmVQnQfGujpJX4TTHXgJtT2Qf75gBXA8noaS21V2oVaL8c88oYnnVoJfJttbWDv7J33fq3HFVEicKfpn2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "273seHCSMQ7aJe37pq9NRhuwK2JhvCyfno9aFnuwKp8zao5YqissriTL7488KU5BG8MPe3qqM22yam9QMd4CfjMc",
  "key1": "55qUDY4kkGVb7E6onYJJqy5Bv9V5wceLbM1GXvRYpSidn9BKdohdcDbkeEYCH2woMcULhUmQSfqPUMDSzpxregk2",
  "key2": "3FzAjV9U4MfuRiCSVvDRqzK8gQ7DkvYqQpWknM7iYh9b9LLbvwrKvuJ8iERtYaUbY4FEtZUz3JJ9BAL4DY3HvBkW",
  "key3": "fx6DX4oon6nEg8SydagenXzbezc6q8WEgbNBLnQBjLJz67EW67eNKM8JGzzjKJHKp9EUWSZC7q2QzhTxerdYbzF",
  "key4": "5CdVwBDR6DumkUygS7VdQDLXaGd7mR9jD3HwuiS8JfUx7CYA74P89SfbchUYExU4HYFDjZQ1EXZGsHrxiXBcyq3u",
  "key5": "wARoZsLhrviJZzHnZhzUdNob1WsMvJ9eRkXNUJFQMmxWgF1uxAPRFX9DDA562xjX5tyLnUHktFvCn2DgJb6xMeW",
  "key6": "64zgKXrM88UQfXweNAwXZXNd1WBzYLwtLP2KvwFGAqS5dBN4ErfUuXbN6pi3WPDRCE879XZYqpV1Hg99MrzGPsVU",
  "key7": "5GwjwuGamx9Fp937fLKCsjDRoZCCXq4EcjCYkQBoXtuCpo9Wuw4217BtLKqWfbd887gY2ebDbmJteeZjjUDPSLJq",
  "key8": "2vaDnCiuCNNhSrLtRSepTPy6UHwSiStfFpn9MHcJ7fQQR1z2pYsHct4PfHLn9n5H4mGfPPXNsrjsixPMioVbRHCU",
  "key9": "3kq5TqBisEuAQCTZ4eLCGRhKfn3DRWJofVrzJtsMJir63ja27EVtQ6Nc4FW1kCSWkvu53RnWdYZQKg9GPsRqPgYh",
  "key10": "5wwhSAp1NAmK3USVyuy7UXvahtqig1ra5aXNCotoVNK2LNtbLcAxNjMVfKDDRxd5VksEGLE5n33xfjJVqwcdQMej",
  "key11": "eCCxyznhYzJvxoWdQEgy3oPFi8JU3i7hHTvYGhvur81JjKHy8CL5fSGre8RKdpt6TRGhSWJV7Q2TpSDPRzivC1B",
  "key12": "54Sc5ya75CSbYstCuz4RRU4mASh5rwTCgUX2AEbZSEB9PzzbamCQimx3dnfswqtoNBP7MBNeuVojp3UFDnRDCuDY",
  "key13": "4Ko1ix6tT7qBEet5mxEf9XJNM7szWzP2o7muuxn1vKZRw1nYZnBNMAgX3pk3oC2jvQEcbb6M24mzuJf9e6JTYYUa",
  "key14": "2nVQFS21RVLK41c43XmpbFtYwYRvmKvwJUwksPopgg3iGeVhXe6MnJLWR2wFDuDF192i7FyzfzfUvpVDjf4H9ZPR",
  "key15": "5soeGBpnBmt3Loma7u6FnuhbK1gGz66fPJcdoMADTQmtT5HUVuCK9unws2AcZqszGAP9HD8CYxv7VmrhBMpKVy3v",
  "key16": "uQ8EiaTAzvQxZqcrMk87XwvuHNrZHC1SAwP6ofHpwZfC8LCFzHK318uBwRdT4jVgRceSRb5xRH7snupVva3Sxbe",
  "key17": "2qPSydjeELhyEf3rQPasks3HJhnQfbSkq6MUuC78pcmJxTgDWfLrjzshAsQijPqmrz55KcLudobfa2G5MVw1uYwc",
  "key18": "4YsqVk7Nt5xdkgmVCgTgLqrKYoc34KWd9JWHoTZwqeSC5C5rex1AEomZsfJe4Vp3BUtWUa7Fna3zoD9ZC1EZFoef",
  "key19": "5REVscyZ2cWxtiT27mxQC5LeJa27iPBzZH5T9yCFKNhrMAgibMuuGWjYCbtW2d6fkNafUCMZgLauxm8GjTVoYBWK",
  "key20": "5vQTAsT3UAhnxhcso5WuSNCw4hxjtr5EL95CrSXEkpL4NiCJMVMb2NuKDCxRUghqL7EUe5VEsHnsEoKUpKMXM7p9",
  "key21": "3f3JdLCtrfAyW3MvesnwAwGNCXzLy4wNZpsQBKPaendd5exKrZ622WBNvLJ4h8P44292WdP5EEZMUvFC9jkwLcUF",
  "key22": "3r5jN3VrgMBYzrs6ZkL56fY4Bzwdzivc8p33ixAU675z8T3SJ7WR2a3sGfyf8QBLPZrn2seMvUHud8E6LsRpJLLc",
  "key23": "2EiVute4s5cRwwzbyrYj9FZfzvtjGZrpf1bV2DPAE5pLYRSopAHNPVdukMdDkwW4PHdBjQeAbzYCQLC19hY7DzV5",
  "key24": "54dtYeWkDdmKvPs7rgvaw4MzdpsH3xTm12EhNXyTZuVDZF6giKoS6Vo9cgBnPknSrmJ6XqVjhi1oMQ2oAsWcaCyu",
  "key25": "Mioxm4LgQF1vvqDUwmRy6rCokQsjADAUS5p6Ym5ZSqA5Tce9nf11KsN5YRWg7yZHSLCumywLuHkNvqbP11LyiPR",
  "key26": "4oMgeuACdFWHif7ewNWDxhemEELr4YcXR9osbWEpa2tv4SFLQYGJDVgyGM3u23NrStT9CohT5KvXxtw9L5fzG6FU",
  "key27": "yX4C9vNfS8iMRvNfXW7th47bPNuq9g4cbPMkhMaBSrFgHrbmNdK2ksL5yLH99sFqnMDkoZAeorZz5QvBtUL4Nht",
  "key28": "2HHohU7SUMA4UuBvgfSqhXEVaRWVETtvYosnbfFRyJLqEDXxMzLJHWPhCnQTFc88Yhtu4bRjg74mRc35vpTfEBEM",
  "key29": "3iJHMEWnpyNc7NhchY7YAENkhp3UweWFYgQ3qMAe9muQfv1y1N9Ei4Erdvss1fmbQco6M6CRmfmAgVTLpJkeKWKU",
  "key30": "5f3uqDro56xQknDRFtwUDKzj5cuL9pHuQm1wEKqGEK6MBJFVxefTS5uhxxGTBH3Tcuc8nPFz9SZwGvSNbxNehWm2",
  "key31": "5pCcQBofsFUKynf8JsMwraZd3b3tbUZetWnfNVxfgE9pdJxaa2qYPmpzKXM8793VSSnQjTHU1WkLCy3XK1eXHGeq",
  "key32": "4Myc4Wrs1sWM1oJWfGyh4kUmahcDERK1HDDv5TBoeRghdCposcayh9DCGBx6xxAf5as6SgDdfvXuzDxmAZqMoESG",
  "key33": "4rmr2UbCAAWnFLRQEkjqFrRkdDXUD2tXwkN3oWDNqvAfKbo54DKDnXvvawRbfPWweeWnNUipzwhKTCHt3xxU6k8P",
  "key34": "4UsBymXDrhQnuCjBjEaJybpyf4Gr4fFBLDWpvQHPZU8brCmhRAJtM97ew8UePWPCs34gCd81KDMVV4Dfm6myVFeM",
  "key35": "3gQHSAZVKGHC95fPAy946DvFv9MtPYdi9NSvJSJN9d48V4QECZe6xXh2op6KJARouMmeDPu5EWX4mT2RdSngSTLv",
  "key36": "53Yr4UBHibp4SNdxFpQaBtBVDz6a1gC9N1MqWTciNATZEhkW5KdQrC6WYiLJGhJs8xXUyEP9AXzPnEmbm3kudfLc",
  "key37": "42bhxGoiYEoWvzsapBQyab5o3nxukpgXB6JthmfsReGLg2XnWdyjrcC7A8fQ1QLA8VRk2qDhmMFXy9iHwuKKBMc4",
  "key38": "UVRz1ege4euwB22GjaxtgLrLEtdJMAWmJF9f8RkN8mix5VKemNaVoSKSrHXXiPm7Km1udtNxudZVYzzJEKNDajW",
  "key39": "2LxhXgrkDiS8bQVaH8EJQY32SNXRfL2K1MMJFAVF9XqbdywUmBSKv7ETYXXGRShyfTSLuq7dRVkpkBMxNPFdfEWc",
  "key40": "3o1frofy9nowTZvbs7oTV4PqoqRcUw4vDgPsbzrERuMispizgV4KHvqEXKk2U4BaR9FQevyDdA7qBVqSptz52cmG",
  "key41": "35cMPXqaNTvNAdD3QLtfC4hMWZneyC8nG73LfMCeA7cknU4DHUE7kbM2md1axAeLSsrH6Spog4iTKqNE4NdbLzDA",
  "key42": "3cdR8Fn21sf74bVkXyLAj96uVg7ovHNckBJPXyR8r6Ai6hPd7U1MCVNpWB8CRPuurJxJePoLsmZYWe6NAtaSBvhF",
  "key43": "3VKujmhqsLETUjMqExG8ydCJKGhoy3nW3BGcPsmnA2FDf8eFjGHK2uVRD6hgH1oxH7B1QQNi1GgRN4zQHP5Jw6F2",
  "key44": "2KjM5AYtDaQvQoFwSp2RtJbg4XCmzEsyj31HMFMSbUKgo1FECrPTTrBuhqJ8Nye3nSbqoBrZwQbRWwcim865YybA",
  "key45": "9pp1KdpFmTszbRdTPWRpQzUYpUqxBRZrGdN8yWN4vaaHz5KkRj2vWuhSPgRQfLysWziAwmhkU46HVyEVtyFttm8",
  "key46": "23vYLUe2XRXbWvtZ79tv8unECvUC8UGEdp1rYBPz2oSvBq1SK8YfQM5y4UnmxxpWD8BAiDKxvAKzP7TXRtRycsLz",
  "key47": "2T6bKuLGwVBzM9TNG1Vok4twYXGmyPuQ8a3tU4TxG6qP5LLQbV4pGr5cDAixhMZG67zvNXE3PNt1MV7P6Kvmb5Fs",
  "key48": "JaCaYWSJ2VhgGmwiJNj9GRdFdKapXBp9SdGa5KM7ns1UH3zNtk6e8DUhnGrnpEuji1uU6wT3GfnA9hcYPwuD1WF"
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

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
    "2ovcH7oaCeitm8eLLysBCGPPdh2ZYzQY9xCA7JjUQxu1YsyokpfYeWunECHX8mBiTQTEmuoJQSJq84W4Lt26AN8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aT4xyFsqxy4XRpk1CDwVWHEpHter7bWKTZ2XDvmsSh4a7Rs7nw9saVNUr4vdRhaoQ1qDhSTUBai79qPYJoGJZcv",
  "key1": "5myKGRynP1MV2W2eN3vWYadZtKnDFmUTAo1azLRkKoUix3XN9vsW6kbBLELAyuEKQZgd5gfNjmj8mNX7t51zTkPZ",
  "key2": "5gredKAzdeARWoW4RoVtcz3TBy4wVaDcze4a1KUvzVCzAFBKh8CH1v3MosrdjemnMizGQYL5wKbMLf9MQDnUqmK7",
  "key3": "4shw9rWBnVChVzyy4hcFChToodX54GZGLuBWoRM4aCsxF5RuVZ3kUwZ7iKVPGJmeM71CjcBQsHjwAFdrFnNzNLCo",
  "key4": "2j4dBop7rsDvjR9x1xVmzwZkNS1PE6F5G8p5nnRSoA51yGKAigpoMbSSf5HCadWFDAgw6kDfD8A7y9nm8SbHThMr",
  "key5": "2nBsX27KPTZJUeCsFCpssQHaiUaQFrHb9ago6ESpQAq4yT9Fz6C6AxvAwALvEdGCr2Bd7qDPTF9dSX1iQXEMAdS9",
  "key6": "cMePW9qvVesYewTYX6SU7ixL5aix8CHEbPxXHoesSAzCFpD7SMzh17WeBa3dGBz38gW5Ydsduy7wUgKVJmCsqx8",
  "key7": "5XWc4EKpdThYk7BRnJ9H512dQq6L2HfgSKexErs5sVKbzbvRbwZTpxjtnHVBk5UTQFBtGGeg6karxgCX3faJukos",
  "key8": "2qozxa5YwaSeXVicKHSHQDYXvSz5ktsDvAvpah8v4bBAd4CpzHY8nbtj1ZvNm5Y5QKewhRLZDR3fCMFCG6AqpPL1",
  "key9": "3qc5ZNZZUHAjF65G6SYU4F1vRKwfCxXQDVP1g3x1XwJaTofaTQVrk5oJonDaEScGiRqqpUR3iCuBvGatEqKRSHo1",
  "key10": "5ZXrfXwQYEEGBeyob8QijfS5PQXZ5cbW2nn5i7ZfeAj3VMSx5LWfscgfnj8bgLxj4vJJFJfbtwi2TTaMxjxngzXB",
  "key11": "5xcYb7ozr6FoEnTpxW7WueNm4DPQMsmgmRsLmf4Ptx4omvviFJmFeeMenwyCwHw4C93FrCP1gioqwS8T4QDnS2DW",
  "key12": "8kS5kxDJf2nuyhhyXUZxgrYmazcHxBtcfq9vkb5iAbPNYzhx7ECSNEthDb6Ag7dNWJ9fXEAM57yyRF9o8Fgu9VD",
  "key13": "4HUGcuRVwesGx58xrrzXmuCDKtick8gTwuCxdsm77tLECQw1AbXPh9GgpDPcc5iYe15PX52A6jk7G6BCDQLQkFuy",
  "key14": "4mk39F5oKY6FjpgALDUg9MX1bXe2QyYk9SzA8s1cxiuzFgFUyfbzpMdfNcwEDVrUdPYTS7B3iDiK3YDtiQUcR2UN",
  "key15": "4FvgEv9XabKYKmD7UT7bsWGMTqK7MRnzPbfweQWmbXFJGtbWm2oDZegcmvyYbxKqCNE2igUPUMNTxoNcK8KLFW3G",
  "key16": "2vf5BQvDnTNh9qugWMo9f31nKedmmrd6nRNHiucYSUHFurEkMNtTMzgFETdLGYqUbwnK9L5JfKFxH2RfxVZ9F2ad",
  "key17": "38EkGDQC1JJkyRf6eBSHSLUDADvSTAqPztii82bSNfmovqUm3Ahx4VJfeUTwc1JQvtvZgmMfQxuxRuwMGPEBZZ2T",
  "key18": "cyYzXwqgheDH774S9ktAM9DGASkNiEDiKc2zLXiC4jYTSXfmdu5hbgAmRf2qP9hw2L9VAnPhyB731EqWAtcVyFj",
  "key19": "WzqqhxRYJpMYSjDczKU3Maa46dyrW9qLT8q1ABKq2SRkbQdVY1Arw9XrSq3nVPq3RxwtS3Muw8umEkv5ny7Ju5N",
  "key20": "2qoRgn8qUNTan5ULGCbKGJeE4Kqfwxxy72sgjYddjcGXM6VSKGdQqcNwT7PbMYdtUWdPpR4ghYLVUA9oZEgbSKgW",
  "key21": "D4NCPqnZr9NwisrzJWMiQzMd8EJLjVs98dHsn1Mr44VUpLoveNwzg4TyN7xPQQAFgek1RfvTdEkFYEoesDgnA5e",
  "key22": "2UXMcresVWyfjB2KrTkXmr4KmU3Ch19ezrWNL48Wdy6K44e5XmNiDeMzyTs8rSMZt4R57qDEreeSc1tNSn1DRgyU",
  "key23": "2dWYEw3sc2hCG1kjL8tM1xorNNpKRf1yr9VFNhsYtN1CbsR9a77zmB9CQH83cYh9GVkRWCZFQrdTojoiWSwzw2ij",
  "key24": "5F3oUDAUoRTwYqaVLQ5Qnwiyxr8ssgTu27hB8ZTWeGpJncmaoFiq1dfMjxiYnsA5JF7MwMYzRVqEHauvgMxD9X8e",
  "key25": "2DCWuqAU7rr59dLreJNZAVTZQNHwJXjFLD8hCSbUizQLa1NNfp3mkgATkR1ZERmpvyJY4ykPKPwQcuoQaF2FTvEr",
  "key26": "5dt92o8EzfwJN27WbSWmarQnDcvaQWdkiK5NKDg5zvDRRNg1Zp9qz17wwwEPQ2EJAEVj96VXZ2beJSZ8fZiuobSQ",
  "key27": "4gw36Wd8JrWa4u1f7HbgBB11vsx5v9DgKf2fNFgRU2nLehjZQUddj8yWiJqLVRCdGnNdTWWaddiwHj3ypCHENeV7",
  "key28": "5CjdS76wtu18H5mjZSbzavhL5x14hXKomybgNmb1caf2SS8HHRgKEQuUn4vCCtSxWubhj9qmvTEyZZ1EUdW4CmrM",
  "key29": "psMZQnuZ6u54GThxqJUDANhG7r5Lwj6Ltkwpj16JMbVijfcU98BDcuE2bhoZZzoNMJzGuviG1d5dusPCs7ZN6RA",
  "key30": "22BzRXUstoLx2VfMSPHJH7kh7tqRkiqnpoGiy5ehyVsmZxXHyyowPb8xVPMYyVnzKoyR1qpWFkCE1s7fENBnsXne",
  "key31": "3BKmm3LpUuc1uuFD2ve23LW9689x5Ka1Aa2BEk5cxzBqVKbUimNC9FDHbpGXpQwQwLwhfkqxkzDJqT3xKbuBh1FV",
  "key32": "3am8m9jtGsfDmtrowMDPCqyx7Qyx3XRUQHhMsTSJy4SpvaNNkX8ozHhtqiCzrSy94TXpmXuzCUQUPnifhV8bBbCH",
  "key33": "MGx8L5Lmgx9zuxbrLDzBcpXzvjrmZ6ZTzkmXEaYo67SrDsSpkfyi2NT6vkgsZhsd3HU8hJ3dY14KecysetwaZbG",
  "key34": "4qnzxaHwkRag71gRkJBvdNHXQHkCsYcLYFAaDnxBdrB5VtrAz64SRfCBoVAXNicKB9NbUtZP3GoUkfsfJ8cA65tq",
  "key35": "hxbhFZ4PZQntr2awnLjodAb1FJgiCs4j2icpXCaDQUfGqcgCaFGjUPWTtDPw3P8ctkqzL7MeNzYa3MijGDRx9cU",
  "key36": "2Mau3o1ENA6gwbaVBv24SGitZ7N4YzSG8KwjYy7L7kCWLHXYRFJvDHVihFZpPHVDbfNjE7kfudKLVmbsWVN7bFtj",
  "key37": "3v4L3E55pDHpdRb66v34URHBnWCgLhTJRDWLx6fiodt9hAVjGL1vHPtnHWEpBxqDnzg15ccx1Yu64nbXrsymF5vU",
  "key38": "5N2v9fwWG3ePR1JRW9r2Seh7UfKFCpj2cL3znKMeWwUGsVtsYQSgBf1rFKwjR3gjX5HBCyBo1ei2Q94y9Sibf9eJ",
  "key39": "2EmGMqvMPH8ZAtTE2Nghm9BEwpW2x5kx26FqjEn1mFqGjPTh6iddB6To2PYxcP37D9pS8XNRZD9FXNwh72WXYEEZ",
  "key40": "5DVjKC8p6JfmBNC5dYjuXuTFmSKZnkUS9NTqeS2ro7HrMuQmURPMcDCmg28t65mbw1wx7tqjmYaTihmQw3Uvq48m",
  "key41": "5sRNGVzVRM3JcsSUhgPQban3rJboXN8Kkxw4GadmhKKbLHCKytZPcJunrJrNYzaQdRwDGxTLMNg5Us5eGXa1RNae",
  "key42": "vyTQhSTcRbVVphm4gwDLM4EspU3v6xUwPb1amFJxAuKkAbTLftcnB6dsvxxpNwzfRytsykVH3dMxtVh9TmwbwDm",
  "key43": "3bj129smasRCaYrutT62Gn96dXfaVKAdthvnhn4bmbuxDGN2E7rDHKapFbXEhaKbg1iTL1ZBBoKzwk4FcYGbJiHg",
  "key44": "Yyp8edSAwGLmVWY5qXjoMAvV6makCJ7fVYC625khGmU9BW8pQwBm9JMBqipwcowB1haFxc18m3pGTMD38CSuVsg",
  "key45": "53fz3AYogkYQV5udpXM67uzeELsU28rbPZvhYhQWDP7j5oUf7Vb6WEXqhyJgcTGL7V5AtwSYrynMbdZc1rXEPV17",
  "key46": "21xq9Xkz4MJLrCqxtnKKXyA3j2rpxJW4tNqWhLdmzv6EYeWrPjxdJnymAG6sC7Cd7GYJ38ZZZU1jwfF7Y5H4u6dn",
  "key47": "4M87KkzepPXM4hXkYaPrjwyhqjZ32WYo6nLyhjxbe7ZV1Mkg8Rbz4Yqp9z6v5aZoqBaJDCfVhPgWucrisH7Lib83",
  "key48": "63ZE569MruZnovaxoThd5tvrDnyEMyawWS1sCV4aiybn6LGQc73QMTFFKvmuBQ6AELmZ13nZNWXnyGQF6m3md1eJ"
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

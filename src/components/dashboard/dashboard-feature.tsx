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
    "W7Yq2whHEjJAtPUEvPzLp4oeXauoVu7qwX1diYk1jmKEdia4fchzFiaQfvHiwBhLTKah5qCSsC3DxcE9QQNTnB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xdnos454MDD7V5trHruZP2oFpNnFcismsSgAtk1zag6fGHhuVWzHvtjH6oKMGWcikooKWxTwVAjPbocLL7vfKKE",
  "key1": "4rZEPLgN7d37AVSk4W9qH6SBnAC5ZCQaGRb8K63R4P1wZ1KVyugr5AGNXVGG9E1BgzEkfn1chGL1SkTwLvmKagLd",
  "key2": "2dbCnkbGRwMg9GH55Shpjjs7aU7NSqdNbK3H9AQi7K8qsKfU8bC6eAdc9w9PLGeQetkNehVpLEajMzyS5vVQCrHV",
  "key3": "4d9FEiVNKoe31Lab6JmK7Ymv2ch8yj6PrEgsez4si98nyUFkz7EQQ514L1pPFVhBZ5BL7P2NojvSwxBsAuPYdKGJ",
  "key4": "48k3qKVvBtWhkDVhTie4gUEeiNTdZqAkTcP2vtydhMgHSFvFd9Pu3xtSCD5tWfEMqsvAXfC27jsdy1DaufaMnW2Y",
  "key5": "2TuLdcr1HPG5S84TnLViT1jfyXe9iMenUZpSrT15Xy5CH1jb9kYHydEFBQzcnuPpQhTMh3c5q5JNQRLkJFRMuKDp",
  "key6": "4S1pr4vkBV3vQdjtUc4RSaSv4ULqDBEPwmbs2abULwte2dooXr44LMfzpxF33BreqfsPPW3TuUkjFDtCXBgqPfN1",
  "key7": "4o4eNeWjQcY53h37TeiiVAH6tPdu3Q6gCv42Wd9bxMeVzFuz2CLibX5k9GRWEJbnoEtbQKEL1MjbJeaRh4Jhb9hQ",
  "key8": "5YKrVNfgwJVtsqojAHkAVgCLVnahT2sYLL1H7DroibeUd74qUJiNGNERQs84FikLLeFhGQMTbWqeYn61CVhwphom",
  "key9": "4c8rJyBxhPfMayMQ3tPW6WtrmVhjVxhU61exH723RZpkjDQ7D6FeEpHqqm9LUWmBRnowdpc7rCgmnrPdxREtpx2V",
  "key10": "4yCfST6PWQSB9CMyHPapEtv27kLAvwkYCWpNV6M4yJWtACHhZbC1QKa7ZVQ578vPW1WMG5YZ34tFq8cjESWNXCwf",
  "key11": "7g15veDTx29psFUoH4VWNFwBEp7ewfW31jrZBgVEqxzKuim3krgxFQ5ioT8FRNyxGQgcGeDAXosNHSpH3PaceaS",
  "key12": "2yU4AJiaaAvb3iF6Wdz3vgyYPW9nBB7wDpandhmmetMQ73SCRfYyTMhq3XptTAsbaT7T1DzNWvhZ5jHSagvMcnXq",
  "key13": "4R32NRhFZNLDeNKcDppUUUQPx8AWbVdGyeJRKST6XvCbsoXtcepS6y2m68fVsY8xNCeTM2NQcdfZsRqLGpXNsiCj",
  "key14": "4kxnCGS4i3UVrqTH9jRfugnuXMWdV8xMx42VzdRdzaew2MLkQ3yP9u6WyNS6coJzUdXqA5mkSGNtp7cpvugERk87",
  "key15": "3KznXxGoN8ePBEm9HMhzxEDKpyTvXd1S1m1Z8W15nGiKvnJPPbYVugRnxKupKeCej23W1gzxcj9AeAbWhskzLeE1",
  "key16": "4WLdot8ikLwhbvkhiNEEvrVfjTMiXWNwmMqZUXfJp1fbDPkjAsBfTf8MToqviXqZh1nnsheeBhib1xVBRG5vq7yN",
  "key17": "HN4tNeC7BQm8ZietMND6gM6SWnY5vW315TrfR4tpr3WqM2gAhr8qhR6VeubhYixDj2AxCMEMcRV5HrDRnHhTDQK",
  "key18": "38h5Dd62jZZaDwz6vjJAHp1rucRWFjye6nRaNNrQXh7TvPqkNxabe8WJHKVFZ5eBk4NJBRmhzm5R1UqKrEKpBqTY",
  "key19": "3NAaAi3tVQXSxCewZnMq4ytVrErpo7sTua7iBXeHKhufWCrSGQ8QTJGBkhXeZiYGjLkoLvzFLqaC4Pzzf73uR4Vq",
  "key20": "3r8gaBGdLgmpQzPTCPgZYE631QYwnx3KyLB8TZZZXHXTufRJ4GLpZ6JDri8jSFtTJxHKK1pG4YudFNPhnsM8Q96h",
  "key21": "4RZPEC4AmdWvyP8v46xmUm7ehDLpzFvL8aCdokGW8cBdGAW6WYPk4Q1VUNUSYyxEGWASDeCwNZBqzYZC2oSzjp3U",
  "key22": "4owpuJ6JsWywFGVZVzH8jobBbST96FfyacGk7v8BzxCq8RP6VZo3ctHAFu3LuQYfRv4hvvh69vZCZyYq8RDpDLQt",
  "key23": "qjkPCqaYUV9a55Xrtv29wtMAeb7wBnzorhpM7CvwTQubQ6G2SBnwsMmtGdZzPbc9V3aUB8aYxgMmYdPUQh1ZG2p",
  "key24": "3tUiMTa52gWgE85DUpoEULhWvbyqLzjMMQi9cZzZ3G1vwAjxLmkTMM2P4cuPSAhTkW7iYZUXuXkXYrunY6Dag1d1",
  "key25": "3S3a1K3ZcfVAraDXnDhCuXfuFWCrMVWqREKW9CRTKuzKKZaXD6xyViAVgjQu33eZ1jnBRL4zuxkq9PPaXQFK1B3q",
  "key26": "3cE7ShEwsdEmzRzpyjCAFSeg7KA2pJqQGNKKSvfxMo8NHPzrREDSgALgBRARNJiksNE4We3B2W8rV4XQRowZyGHA",
  "key27": "3x5JaweNenRvFy9okumWaLkUL4DtnpisyZDg2auKSZbh6DXLzwdDESk4daSChcNNurdeGTvNpa92YYz6qhMkiiRC",
  "key28": "39rdLCyp1VsgYUeoT4mmj5VDgD1VnecSyH52h4wSLKCzSZ94CtpsECguVf62fEGsw7LosysDguQrzJ3ea6mZNQ9t",
  "key29": "2HhQbQ8Dn2tHuzT5q4W2vPCfATR4xMTEVJb4pab5RSKtJ8w6t1ooq1AkuUhrrk4HE6no1zikH3LGP8Qs7j679YK5",
  "key30": "5AVM9mqea7Y7imdJzui3ccMbaPADX3p3p2YWqfLJzQgtu2yjX8hqYyu2eA3quTCjK3ifn11hZoWhdYwTyUDYFuZT",
  "key31": "41VPjxeoHAcejes6KJxGbJhEnzw43Kad7B876cXaXcm8EUPp4AbCZETFu1zgy8oLvoURJpbci69w9yPGLzj6fWk2",
  "key32": "3GZGx6q9mLZa2u11SakyxkP856KStnp9VmAQTGP418TEncqtfLkiS5gGxcDyim7Kh9nat7BQNm2UuEFCZLJ3KoYz",
  "key33": "4N1YkzqmBV3zCaeMtFpuubXVjRBRBTpditxibGwTFmVT1gXLPYG6mE1QErBAhgKBK6BUNkJwphVTiA3fXVkHQraK",
  "key34": "3odEUFaKBaM2ZpaemocWRAynAewynVZ2mapxj3srkyJx7TKWm3WrvXV9FJqLQH4LKVU9jaR4wsMLLZcYSfLi3TJH",
  "key35": "2vLr1U1vbp6z5r69UAYvcujvcXGxdTUxTEeVKtZX4F4snZ5UyDbVUwEwtJSxg7Z2kKb5rzUZn7Ni9MhdcxUbzyAw",
  "key36": "2KZ2DdGf9gtFYftqcdNqx9FWqzXXc7gpkfFiUDf8uZMTE5DFicXXzg5Tt7wzjmSGQdZnzRh7WaCSvXivm9k1moH9",
  "key37": "2yW7GXHNPPZcLg8sKL7qT9kFeQoxKXjAhCvTYN6UYs11LCCeUb1oMAeEpBfis3qtQivcAALE4YaBcqw98PFN9aW5",
  "key38": "2DhLgVyojWxRZS4nVJ99p8gZ1iatfG2xmJdcKkAKfwZKvSgZ5595B3krHWUvH42xDy3ihaKdUtmbCdqRqVnCMAaV"
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

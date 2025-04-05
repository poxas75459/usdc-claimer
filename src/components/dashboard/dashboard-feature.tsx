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
    "5tHwhGMK2dSPu9GmnuiMh2zTCzYQ19rq5HcEHsCFkgcQVVLBCCmKTNeox5casurXWx3DsJy8bxLnEw1Ty6NHe2pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KoGXnytuVyxhHozaJJ4euSvTn8PYzS3hm5j5B84E1j2hYzJe1JmvyErc9syNx4Cion6sDR3QaPN2Lm3m8eox1td",
  "key1": "4bm1K1B9C66hB7nvZk3uAkfZemtVMeLyrTwafzo5s2goHymADRpLK9xTDoV4sE14g6rBYAaWCVeVkqFcLez45jgy",
  "key2": "fPJXyLibboKN7DiKZgmsh7ehd1n1i6sgugx9JhDQm24XvD9MuSRaofdeW6gjuciJSYsjXRQcquzD7YSGt3xqvq5",
  "key3": "44LETnAkL2Xe8sQU3w32DWvCtyBYrLRjkV8jaCooiRAUEfVZdeJuSPuGY8CUP3rRuYQey7tNdJZJrWH6R6qMBprR",
  "key4": "tznceKdFScyGAPDvm93ayNuMgqqMyMHoUKSQieuxXYmPhP3DBEk66tAW21cYWmUDhVqE6DS6ZQSDgNtBwaHvLLK",
  "key5": "uxvRpAjzfwP4qogzzDL9gJkAcaccdY4qYgaS9LjigY2fkoQEZLvn9JkHBWqWFc48wjxyWAeNyVHiuWsJ4yAjsth",
  "key6": "3Pd2rLJFgxgZGJHj3UCLmdC73Xeqyohub5KHLL3UrbJY18s9MJbsCh28FbvUezDdrXb8BdkfXMmdQj51ev9WWADC",
  "key7": "3LAqPhbMA2BefwLhKXt6v4RFS29GbVHSN9vpZLDBC4vQJ1w5zqMBsV2taL1L5uNmC61WcvQ6Ns3mAFHZEJWbWAmK",
  "key8": "3dYR1Ndy82ZMsmuzzX9qNAAngEjpoyJEcannnwTcthBQtPoR2WAK1jJACp9BWBd14a6XrvwBRgZyRWrWsv6uRy9n",
  "key9": "9fHFJcVy6Lii1LHtMckgVEEWAzPF5epsDpAda4MvgmmAUtEVADAnNizqnGCmUrKq4ESL9kScJ2u8gy4yKEYycyU",
  "key10": "24usx9AVkmvQFk5wBKgYMfm9E9Gm3acSczNWXng3958G1Mg2NQavf21jWg4GR9BnizaYaUPHYBWcWXimaH3NPgCP",
  "key11": "4DJVUPeXmmnrYWRWfayAUKgxX2c5BnpeuBxdSUyCepkTf6VeRDtdbYRMkfUSBjpaGcuq3Q1UUKwbZx6TygSTSMRz",
  "key12": "5pdmVz3AC48ASZCiUUNhr5QcrHhyAYRtN8DSPoL4gvcGffKz6WJCS3cRCdQqNC1JHi9eBtqmunMVp3XHDMZk9Xyw",
  "key13": "4FMHXsMuKNsyRuvM2P5YoBsXvPQwKdaCNVpJZ9h2e8vh8yg2V5E5Kz3bWxHhMwAACf5b6eJgo7BomNEdmLj2zwdz",
  "key14": "2C5tjCgcj6YugxjsXZwVddTL6PXiFwMtMUHfbtyKpx2D7goi5TwHD3CcvQeWLU6yF254KxLsSndg7W5osGSYkdfy",
  "key15": "5K9kSASZFnh23uEzvVrMb3Gk1W4XdYHNQjia2fnt468wcosgFogTdjw5NoF6WnUqpt4BN8GsBGxsyUxMjYka2BEf",
  "key16": "2iQCnsuMDxgwPNsp7SYbJZfg6Em4AUZsqjyLNHDV74hV3F3aMtoskBdJCQ98EG2XrwxviYVgasKg4ZeRz5Sbnt5o",
  "key17": "44XfRmMmqczR2wKYFXNAssZ8vY6xDpQ6tAEMWhiSKAiqpAh5BjJDjdRxJ29sTyCbjena5SBeHuexiXimrcuoEbeQ",
  "key18": "4wwqZx3eM5rL5WkpW823hzJgUAzYzHbrtdK2dBXNhZwTMuB3kwUUvm2dUhrP4QzsDDBacoB19ed7D3siwNd3yQcm",
  "key19": "633ApJ8NbnNEKeFiQ2vTQFzwThvs7bgDA1Kv1xVQnqdXRiZenfptjoLkMzCy21ajB2aakpgM2rV4Ee4rpDVLmnMH",
  "key20": "3VQeVtj1xk5rJ3DZwfCTvPFXuUo521ksm23hn7616jfWGivTeevkYFq6ACKbgYVw9YZvF8AUSPKCbcFd9TnsE2nM",
  "key21": "2etwCJL2acmSG3WGDnzUdCnBZUFJTBnuuzyBkefnFWjkAyQBUadwp3vQLRpQAHcnN7U3y4QRP7KcGoCLDhvRHoUZ",
  "key22": "2tzqDg2yT2NJ4QvySFjRvEAgSep5Wtt69pQkj323XMui2eyeSUxzrcbpnP4Dg5oXQaqBb6GpjrTDMj3XFhEgxcrk",
  "key23": "3xFSJjSSf3z5X8gXdrovJctoGKigmKTpYjfNwLZi9fsp1tCzRLCkWGH69Y84bijDxRgLTS1wfunSGYBpKLnaMaTa",
  "key24": "3cfNFvWex178oHRbbUYuv5vbyqZqgDjse3wUWv33zv7E367DWbEWJDvmUem1JGYtDn3yZ9EzRXzxdSazfekvy635",
  "key25": "47SbAE8JoNcdYTtxShuahbUgWaofDB1VAsTAmuSLYERke7oc9gwxYnXjbE7Ju9gBFQpaiq3XiWQCqExGUBqnKsv8",
  "key26": "NgqPcxkdm8pnYPH4LMrjVYFL12ihME8b1HXNjvjMpfbLRbi3PbgnWmWAVwzFagRwYgPdzKW6ActUDG6mamRGaaw",
  "key27": "2zggUxRaSfeWB3k5guh1aGufJbxtzufDaKSVwD39YaJhyibt3hrmKxfJJLjktt5Sjq5LuY8ZFdKjsCF3JFPDmt2F",
  "key28": "5QLzJ2eKWkrRD2YYFxiW7wAHBC7ckNUrVzyMwRQQUHHXiKRa7ZLMTJDgEJVEAF4qCEHdUYR8obeaUHc4aUBnJ8K3"
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

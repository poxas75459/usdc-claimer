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
    "359BiwXAq9i2hyKkdFadpAfggmWLYh6BEcyxiJn1sFTM3NVb2wvjUDf25ZQLpe8Cj5dJrMu4TUt3tnVREucT87om"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cU3sZSMYw7s6CkhsQhx126sPC2cSjSU3KwN7bjLneGKgP8vmup41DCtWXqSH9yy5uroT2t8FAvq8ygiMVm1uzkG",
  "key1": "3WTafs2VTHWSY9gfYyhPuyqxxYocuBDLog8Ff5Gi9LWat5r9YS2CnSiqpMKaG2rFjAuAyv9ELtJhXjyt58itumdg",
  "key2": "43Ur6dtEr17P9ey6C3ETtPXeYnbC8UPaEwbRSAmmwithwFJAkzyqj6NVyvjwCJ9oDDK4UNxgnc84vLMoSHwtYQeq",
  "key3": "qqw78r8Z1A9V2FjZZvEygAhUECbQkya3s5yCG822pTMSE4NvG5ocq8JCY3AvnWbgsHmDzvox8nmqXKvT6sbHKB5",
  "key4": "5Ybr3EW2rXanb5v47yZoct9xVaTsHFXGx1HWH27tV3F8QytdQFfGAe6BderydgvXRE6cvKNAqcq6CVs16sLuHCst",
  "key5": "53ffNHgcpTd8oo1t4EXA135KbuCrnzvo9GmCgZUEraLrC12b9hSvGYsbUivU2Xznfju4HeDovMFHMULA54BPEyu4",
  "key6": "2SGRpiezHvE35czoWV5jTXsnDi6uDZFG5DGS34CpoF4aXWrgGhxQL7s1Xa9Ks3CNBCzvgQTL4rvNFpVH36do4kVw",
  "key7": "3frRoKeFF2mqgsWtquCXc49V881MSwDLEdWCJrpcWXWqUYi8tqZzLcrGi1wCVLnNvAn5yjHmZJPciEVihzMrN4J4",
  "key8": "3aY2Emjs8EJPbzLybBQSFBqecYWY6chvJFZmUZhQxRLFoVxXCLgpUwwzkJditzKMLHs5onz2RQKGQr3aisGxJjq8",
  "key9": "3t9RCK15UdBhNQq428Ra7Trithy9P1oyvbR2SKu5iAzPpe8tez1K8qoLN5wKMkRJHi26QsxCSivgMr2YjCagj9SS",
  "key10": "8S2QrbAKWYBXCMcVgG3B1LftwFKAE1aCtwKLvS24uk2PLaAg12KTYVBniZh4X1jTNmyoMB6iXVSbAmZau8tAvG6",
  "key11": "47dVL3PwDUChwJvPLgh6suxvs8sRTyEzWBMRTMqWeXYuhUthidBrwATRSBYdDLU7NMzikZbxwJP8yBbbYFT8x6NN",
  "key12": "vGcXVQ3urQ6yuZVC9JSE7kzMiDN1drFa49QGgG4gEzm55uCRFfskm26zqM2u73hC635cTsgm5x3dKsAJiHQHH6z",
  "key13": "3ppqQK47KP5paFmGqgo1sqYbjSXmLPDzLT9EFZnnDTM8xeqntKvyid9sjDCBovSKb2nzGT1HW7dqEM8JmdejU2Va",
  "key14": "44LmcKNqQ1YxKMnKU8SguJP3LzJvTkcTKX5bzXkexgyQpFVx2AAe4rP6mqp1kwBhqLikBZ3Vs9WG7rRPKsZViRyD",
  "key15": "YVdVGWVTQ7CQiVeRUGDWZdKzZpSdJExz3fzxKphNVWRkCNt2NjGWH9be7v9vgpgruswHuhAr9AqiAS7Xo8cKxSz",
  "key16": "3ZJXcF9jAzpBKLmg5C3e9Ntwe9oSoT3J1BSykH7QZQv2ntCZdtLqVP5VTNeNJXo8EgTxXBMvJ8DmbsJWCin8WHMS",
  "key17": "49Wuu2ALXf31gkuEn4qMJWwze7PssS3kJoxdmk7eLMqBF7vH7teBWbM25yGcauqbdtyJrULB8JUbg2RfT6EDEKVr",
  "key18": "3VR4mB85gLP3yvRZKU2BqCUXpviLAddLghX2zP77wNNai7mMLKhwuAeZqqKfgYuqqfBUhya1i6jspgHpYHe4iQBB",
  "key19": "2PLrfjBMPTWsepJnWSNDd3ZLpo8zJMgdfUyahtTawjvkWwn6QEPcBuJh3WzBo4SpYKp4xhRX4EmxjcZYp8Gsov2d",
  "key20": "4EKgoccA24twRsjKq39iq7pbvh2wYhXZp7h5H8ycSfw65XAJTKNPvrgimD33LjfHpVUK4qXuw8A2q56VJz9eaykg",
  "key21": "3ov68nFaUkYEJsTzrmhC9DRgoeMQ2vHfyvyJs2hmebnVGY54noYvQWv6uz1b3jTaeXMq8hG7TpT8otXpmQVWC3yn",
  "key22": "25JGCZvoQeEkniQ5iBB49fiKS4MEqMPPZfGSSapX1xyDK3u3uKjwwhRUM32YGsAVGxupVJxvWB9rBUohfJeAoxzh",
  "key23": "4LB6AWqDTBeBHEBB5qZ6Fro1JtyUog8ybGZJn9s8mifcsarGa5N9yVdGLbhikxuuNDJCEx1w64ce8QJed67JCQ28",
  "key24": "3Fq6iuSL8fJPvdbAnTRfyG69nMFjk4mv33vNRfT9yfFUkvPP442SXYqEhE4mRRQuAW6uUQG4qjMzM5uQEm8keiRo",
  "key25": "5Q14S8xrFj9iqorUsmAbdFjsM9dGKmQ8Kq9vZkzoUmHNaNBs2inHkRTee1s59jedKi68LsY95FtKmMm5jiAeUWLZ",
  "key26": "hNXBtMEd9tf3wFNEmD154bRteNa2QnVakbDf5B1Te6uTNvRx2iywpQVzBbnsbkeoUPAnnkZzpFpLyp5tsjf1kYX"
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

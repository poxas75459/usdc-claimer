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
    "36wfK438fC441XrdTsXdfF17NmVUtdFoCi5CPSXKhM7NiyybGY1tWyh89g5pE9KHF3m1HFv6f9yj1AApxKaVz8P1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JdAsiPuLDXg6R1SGPVyCJ2ZKPXwwzr9vWRisN9yY8Jkde6EBibeBC8GSduu9ZoVKjCFMv38x31GfXwgXTWSCHzo",
  "key1": "2WbZpGXDQKa3QqBufnjp6xkPsePsf5Q3QpFSMbVY6yzq43ioMcmSxPNLe9c3y5BfML4ffbssG7y8rqopLFo7sVq1",
  "key2": "3e1gxmbRwyVFpT8mTJZ5WbLhLkTCoEKmGZ2DdxVGKQhYVBQDj56Qa955FJDstrixVBPUeDksK1heVPtVXUvxveD2",
  "key3": "2uADzMQ2eQ5NLutZYN4SD9Hk6GyA5Nto53KH6KERQzsgZymgdDp8DMiYQMTX6D1uG4aezCURjNXFDU3H4p8Mc8kX",
  "key4": "LXmt9G9jk7UkBSEPxb3fGYWs9oTZyXKu3rVBMc8Te6kSa4haBu8s2Ye7JzX6SK56VarNUq2GpjuN3aAkrFa3R1d",
  "key5": "5AwCLEnGp5KM3qv5vFDjemxDYEHncs6UvfphZpN2Qju8kr9RFUpwdY4XM9hqFuD4R4qi5vYYWPTQjdCHh6ztY6Gg",
  "key6": "2BW9Xz9ZKn561GUr1DpFtMi2zJn9jK5LDA7iUVhcsn6HDvBrm5id6ZHhHdJL35eXrkRFVZYXrMs3m9b55YgQJD4i",
  "key7": "ez9vLZr6UKxo8QAGT2inp6pNSaKpdC1bRcygAaca4yHBVgsiHNkE5rYvDvGEiD3gCN1mPaDtYXfdenuGXABD1Rc",
  "key8": "3BphktCJXV1Tc6tmh1zfAv7CxvRfnh88DnkWJTRw3PSsaDXbe9CsWQd5CrYq3mV2Y3eKK8pCVrV3ueUnmsQy5TeJ",
  "key9": "3BFiEVLBkTjgm8DxnzNAQh8cHxaf5dEieLZHKzQZW5qT6kjrGQkWeSiqbKKpoRJTTFJZw4eXuc9xmzxwujAXBuYX",
  "key10": "e42ZZrpKKwRkRWFPRRhhjFGjYHfNtmj15REXCfbLFfmEzQB5rv2N6vcHZusXc2Yz1CB7d2SzhaPePNQ43CSNyW5",
  "key11": "YWdY6LxuiiidLtJd1HyjAmMmB3D8UVyPQkhZXRcCsFAqa9byL5DUsoJiBUTc8jawE6svhZfcSiQTrkw95h5pTwy",
  "key12": "22V41RTy8bgFfWdhqkFcCpHWPCj6qrTogShXhrBta4h8uytafU638H3oxHVcx3uTnQYWqkK4E8PFj3T7o1qeDFuy",
  "key13": "2AQiwzd6DRuvJAdydPLaW9E5JWsb7KdwWS5ZMPZD3UPH1n2vpG3xoDAGaeeteVsZwgjs8RNy3WT9Cxfy8AneH38P",
  "key14": "BTRDjw2bxVhA2uiDNXRQfkPw4GD6zZHwUHZBDezxn1tx3X6YjLJcMQS173fTfd2XrjF1GsG57b3JRzEzvE7j1dp",
  "key15": "4wYoNcxevuRcthUoaBLPQKjMAwSrQit6j4FnbGW2NZEHW9kdE9UBbFwkfXoKhSZPxEoe2T7dqnzASsyiwuZZYVkm",
  "key16": "5mqsWxhcuVDZBrkt4tZdwMtoZoZfNrJabfMau71nuPtpYa7BXAVs4RJXqaR7ivHnLTB9nvDDYoyXwyNUtr5PWKVX",
  "key17": "6497EA14jjjY7Ur2yyPEiFDcsAfMu8cAoAScT5KoAtAaNyyGeGbTeShq9WXypRija18V8PPZskSyiQ7oxD4AiNTM",
  "key18": "2b2X5Hj3sdUc9bDocKX4uaYZJngw5FE5n7jUS8poxvJMZE7ZJsL47HhTsa8F5ewTbdDmimyuSgmX6Rs3Ge28fMHq",
  "key19": "36vhQFjurckAGATp3fkuBMQN6jpFyqFenG4z6pAkiex9vwbNqGkgEq6TBX6EFxRPBbrJ67nxV1LU5uKtPjAWK7x8",
  "key20": "5rkxMYkzhbo4uJ19U7XLLxHheYun9sMipKsuc6WjAtFk72vacQokGtQdtXGikZDupamqCLD8YyEV1avAgo5yWcJm",
  "key21": "m6tmbKSXEY1WCgMBy2UQKsdrvQ6ScwBqPiYBbUE7vZLWNk2ZdPvFNmE2oY9bUesAUMnsrWNiCM7RDVDD19rFPA7",
  "key22": "5EtYDmSSWB7shZpXPGa73kNqG1XJBeFptQ8ZySznJfypxvE3rCh2vAbFQAE9rWb6eD3tBbKDWoENqArbbkux8EJ",
  "key23": "4fNCXhZMs3r5aFGNiHqnRSY5mochWGe4nWekBvaesqM78qVZ4hAb7hzxyLKzjbK1iJ88F3Kuhj442wz1mBG1bVQ8",
  "key24": "4Xi1EWhp2FhxcwrzzpySvm3UxKkcn8HM9bJ1mvcSXHHe1kE5T55KkCCNdbE7Q2TiMVXBWLjQ9CY83jBdHA2bbvZT",
  "key25": "5BFA7Z1kuMXzW8bZPdouCFi5jWkpuo5mqC3bE4okbCQQteSLaX5CqzBYBVYVFUZAbFY6uBxbortSGMV7jrZcqQeU",
  "key26": "3fV6ZE9EhoJJhzDNPy1SWKH4uuoEz3FEzRMB9rc6Ckt5XPraaZNCDnZm1HvAnVRGAkwEwQCkzQkJS4rs5NZcX4pT",
  "key27": "65hgp5WgvkJ2MjFDZ4YzpR2bmS1D79u9Fcuh8j5wWCsGgU1kGgvKZtvrmvvJyo1pj8SzHBUvSNS2K89EuH9AQ45t",
  "key28": "215UL1J4a8111ZT6PuX4UyyRuJFxjNJsQYc3NP41rgWF8TrwvJCu7fuP4X2KLgm4iGGxaYRZk9AmqLJ7kyRzcBNK",
  "key29": "2ThLgC6f9pG4vMuM9vkW2UtigDvEKmbJ5zzxhJs54gSSAmghFJjgraYhgqa8UkFrVeR6eNdNU7BnodSobJo8jUBi",
  "key30": "2cLFPtRLSWxTz2zva4b8YzDGEMWfcHy3d6joDoG1u7aFArHvR3apoKs8QUaqh893ZmpnENtZsAjB3JiSbSW46fzB",
  "key31": "4bBHu93VrgDguRJJjAwgfbgUd7gjFhyemuCQZ5KjXr3ku2xEBYhZCkvhjYGE4C957YtLTWitaVK4GBRK3eJeNxLv",
  "key32": "43HKDFQNEM3cWWZg3QgZDn8ZLAJkeTmoDwQCWNwXK38VQtXjdnxPZFc9ot4VVrfQLEB7ZLhXNgtZwTsheWHmaKKd",
  "key33": "4sXjMydrS4jqGkJoVc2eh1j11qusnTBxhLLyq5R5WsRGpSw6MTYgUnPxwadmQLNDhS4p1Cy8gnNVM1KDyLfepi23",
  "key34": "Cvy3Cj3B75vwHpDzHe6L6Ef9UYmK3fU7naTX9hLAfKCDutvTmC4ay7EkQUzUQyt1LoBCTy7YvjuNNntZxbFQzPG",
  "key35": "46irAo9Hc5BGCyEPnmjaCe7q4vpAqrMACVnk6fECKLma4mnRBDR9N4w4XTMpMpy44D5biVTtcUuTNp9QHHqJEwPQ",
  "key36": "3s48UnBTAiMtcG2yqzzMUX7o3dbkCyi2FtxvVoxCAmgKdkA2V1g1ooakG447LLVnDos2A9CuNxkvoqM42bGKRcqL",
  "key37": "fhxwRJ5tA13Fu1YjzzKUQhJ2caHQf8hAAzTZfZxiXn7bJW4eiCnGfJXgAr7CmF8GntJqeEVv3TSeqkE3cvaPbGd",
  "key38": "3McP6DjA1QSgshViaY9qTyMP65xb5KumsSdbNNxSymrofcRKDw93Ss7xRZMhuvg47gmBNMXCtw5FiWR1C3sri17S",
  "key39": "2rWPp66Bv4UojJTBKjP536KzhyKPP6dim96XtZnRN755E2hEYuqer2joEWLW4QVB2PqFDqGoDcAwfbBAi3g6CGFx",
  "key40": "R4ZSBooCKSnJuEwSFuUcGfCtmqYWaoaQRUhmLXZ7LNXrFzxkoK6TopFbMBF2Xt6s7ncbaGb7idXuQu4HWJaRaeR",
  "key41": "61yNCqiLJSA83yJxoYmaYiGcpjPasATnqkFeKiNk7H9os47bd1Lv1qfeLxuQe9WNmukRkzP1U2smgtznuBoPjr7j",
  "key42": "2m893NPq8h7XXnN6D9H4fBJi9YXBFAZsopL1vPPbWcM8FVDaitcT2nKxTPNDrHBU6ybAUefC5MyoLogC2RAKLBwF",
  "key43": "uhU1onYFfZSJ4gMwF9UCY7oiBTSQgwPh2UAZJHMcTNqfdL8rib7pfa6iSRKh8HdTRecM6JhnkPq8Nd2h8x4qEfQ",
  "key44": "UqRwgPLCErA5LGwkX9NC6QohGYgsuvPb4aG2Qagut3EAdQ8zgbN3kPH1esrebQLG9UD1aAQzhE2mB8bf4jrSnr6",
  "key45": "v9mCQSJnfMi6EWKUw9ATZqQvSS1LtTQ7NN1hsb5j55mRHFN94HT8fLzrHtJnY9DkZWqGG43R7JHJXpMSx48b8K4",
  "key46": "3MbgZcHK4gnepvzANHysK98sPtHW4SiokvUwdEk3eGYLYevDyU8JNeTY3bUZBpYhAneUsWP98AU7aK5gScZTpzcn",
  "key47": "5JLYvpok5WoWHacv5kiwmyxhp7fXaHiXAgJeAGhHXViT65JqezqSQvczWWK1UTJ4MppqVpgVqCk5PLA1Q49y1oWp"
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

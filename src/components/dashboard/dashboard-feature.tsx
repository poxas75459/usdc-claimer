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
    "5obcnETLozLbEXciAeMdYXUfGzpfBdhsoHYtuwzip9oSgS2CXAuXjsvEgN1HgmuD39gRw8LAt4HpRZX2yYuzQhmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnHrBFiuMvLabuN2Ky2xSVpyErsN4SAzjLr9jZbg2GLkQDMqZdjts2jjXAHrHoSqt79KW2Yrtk44x2KDbkA3Jdr",
  "key1": "nTkrF5Jepp68xSmTtkJcr3Sfr4f2X2M2o1v83mezGNuMJ1avDk1mKfTqAKpQbGWDwoTYTyg8E7tHeiMp26UeCsM",
  "key2": "3oYPosu5zNhpNhW5r2AkLTHQKnsoGT5pQBs2zGvbAXDNBPg2uR2oFKTCLyX2sHVZ4hoUXQPDobZZSKK2YZmW7C1H",
  "key3": "3ZcWKmVzyxQZccJWVd8A7fjoePJEWi3vXVMv2tezVDY3pwpxZqX2xMJEYxV2nJfydWZNSfBadV8bLtX7zngn3YJX",
  "key4": "5SMd3YYRh4EC8v5iGdHFCtRqYw2xqBUTUM53DzdGdvWKz5nnv5WBDhy98vsveZ1xLrF5WM9WpVvN6y5efDjWMoRU",
  "key5": "5XSue22tHZRsXDvadoNKsxw9EKCjtFj3qwFuzap669vh7uC5Av4sbgr3VkMnz4g7EPBeEdrSGSZdHyNgG9jL1KB8",
  "key6": "5xkvii9L2Qzqzg1NMZo6haUoEL7T4kAzo31JvCXMPgymYLB3rYUdhTTpEBLkJuJitugM7Y5v7i3gsWEnPcUkp8Tx",
  "key7": "5vPyby7eLkcXo3ngHMB1uBKxnn8ctkBhqPFuemH9DNMAHBvmKMUjbDgmshS1dizB1e4vtathWWB9epTwJxXbEFia",
  "key8": "2smJJz8h79o9wiE8P6b4SegLzBCKDXdqTTmUwSS5GPXKk4jNQ7nTf9SNjTRYqgcz4tuqoFYtfJhF4JexgrKHnxaQ",
  "key9": "4sLrZQWrbBy6Kft8J9CHUQLBsDHvrA59dt2Tmp8DqghC6sd5CwPtY1C8QFZYBxNVwVgwAuQQgodkpRxGzMEHkQZr",
  "key10": "5NbnERKWmzqD7mtymysFJkfMpMiVxYjPBrEaX6Ge49CNrXrqpx4FoNBde9e8Vie5Up3cpECZiXp4ZjS63RYihdAs",
  "key11": "29gVr9oQzRxQ2r14M2pu1RaNhn9gCvFvFNZqdQYRpY6pwcTakifYr1ZxZEy5vFsAdzQQqUFV2faFk56P87LWXfY3",
  "key12": "63m3MJ8rsi7uc7RpUoDx6gAmAPbnrcG254KTfP2rzrJ8esUDEsPbrxnskSUWdBmv41C3JCsi65t7p1m1sckasNW3",
  "key13": "2NMdPuSw167UTforCrBSZTq6Cig4idRRyFgGokgXNPrAsbpm6aknbDPMdsZ9R7mzQC8iL8vv9YwJ2bQFVLcA2vwR",
  "key14": "5dkf51w5PTLfnE1vCbWx3Ec6EzWvUWKMgoTWqR5tEVGZgSaPc51bEoZnyWkMjDLXjz3SugSLWBr296hzNCtTmJkD",
  "key15": "3pmEyVa9WsG66JWzTXggDgqsXhfZ3uiRhRpZU9f8JZ95mGAuGc6XoBMKhRnQShAEMRwA5qhMRfAeJEZbsoYuxRBs",
  "key16": "4ffQXUXkvfNrk5oZ93JGZvNWYTMF8MEqJ1puGEkyzPpjn3RbCEAbEYEfYteNQ3ujQB2cwZhMQJYssb3NEZ65n37G",
  "key17": "2pMZcG6Z1ZP1Di2XSvvM4rscGV9vQpUqgvFykW5wuihvjuXkLxgggwdKGHzGmoJ39vzAvnapM4E8DMQC3xr2YGEN",
  "key18": "2oF46cqAaPs7cHMH9uGeRdGeDH4xhnkrYMT7QJdTAsfNGt4f6VYjtSAA4YuFdYEra8Q7LUby4FKhpabkmY8FP4NM",
  "key19": "56A2CLKtDJspm7JfNKRP15GrG7qj664PKckeBK6Wat4ZrikDLRA5GnrwL75Tmu1afao26G3EhavvhbAJ3Xk2fHwK",
  "key20": "2bPAob1EgZbmQbEJGAL1jnAYUWKLZUoDnFC4iX4nTwNNaULHzTKKyz9PcdhwsNWsB41rjE5u2gsWbRYNHK69ncUL",
  "key21": "AGufXpJ1wU6TwozjSb8SFCMcSis49UtnfZfxru3yvgrSQTRzpeLwJrRRrs3AxNL1wmdabqhDaN29KqjyK9xcHqs",
  "key22": "ujsjqZziA7y3BUb7nwzdHjG6jZo6Q7Ra4x8DpychPUY9mo8GmTzwy1GoaLtPEXFJdbFMf7a3ruUYyGTi7AjczMK",
  "key23": "4LP8YrFwPNo44wzjVcwh4mK31j9CrwJ9B1vUCFG7te6SPwmC37goBewe1YMPpHmmZoW7Ntge3AcAkJuT5yvHxowH",
  "key24": "tDTcSsPp9VTWSXj2rY2qrhvapp8WTxHJyjYNokkQ9gcSwEQjtucnXVDuEStLMbHWKs7AB1QZDoPccBRBjbfkZxT",
  "key25": "4311qWqPnfEauZJKwkEmJHha8UCZcovf6GQBS4u4QPG4rvPPD3RFCpzowWefFt4krQosTcj4WWcZdLyTyCCUa2es",
  "key26": "41r5RLGYK386YSHd3LEAxMSQnxBkArBF7Wtrk8Chz7RKmrkzt2Hf79XgUMpA3R4gcfe2bSXNgReypt48d41cgEzg",
  "key27": "WJWGRS7BcQYiH2354EJ6X7pzR9LDSLqVzQ819Bdx5cZQACdGgiXk34LWVTGhEUk4p93oYHyx2NqPaUTKs9vnTWP",
  "key28": "3MiWyRjuBTLBXV8u4iNbq6UtHa2DXkHe8KiFt2Atmy7VnpfhLP4sTS8ySoRRQZqgDGVg8DtwrhCtx3keeLXPr3mM",
  "key29": "P5M76H9CVkrXFfkV9A8FWY3cPEUcrGfa7RNPLG1Wbj3u2P4sGsozU9FoU1NeLpFcNSoACkjoc3oYFYwQshpKBPo",
  "key30": "YCxAh74nnKBniadytBU4vixVmKDpViWpwhLUcLVPodWxcQrCxAzYFmpeKT4FsE3hFG3MXGLx6VJsS4WFZcHVCZa",
  "key31": "514LLPByvNoKdJZmJF4Bx7Zog7JzjgboBod1sHAFtzeLDwdjHiB13dW1LbNNWtc6MbAXnYLZsypggadoNhpnB3KJ",
  "key32": "4tWkXGJEmSw7ojXWu7eHURfX3kdFfiscWooKmjNwo6JEGc6E8JvSSCjZDzo2B63Y1T1i74GGJpQPYd9ntyQtrNJm",
  "key33": "3TqeBkEPiVNxnGXtArs8p5onDYK65eJbyzvUczk1yeg5X561jdYdeWuLTU2MXBUcuWWUxVuNXEiRAmdVUDuJmdJ"
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

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
    "295yccKdjwUdkivR3DhsYZ84hEtWBuiWkvd7dJdemKNbdNxQpPz3RsqKspyahDaMbMw9oDHs1LHhuxXa5yCJnCwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VtdVwMjaZTyJrcoTonYJnrHSpJ94afk8n2UBR1fP7ESzMSowgbd7Sc2SkxER4m6mYqAioVeskQfiAkxPXTnV6g",
  "key1": "5UWrNkJ2toT6Lha6ZFNEhr5RP3Kpqo7pG3nvvCiL12Q8UaCryZ5zFfEuFTXVtnD4jJtGS3CNUZpYKFeQ2vZDy5XK",
  "key2": "485dQLhBD9dD1kq7FGhJfDtGTh8s5x2g9sVNidoQGDqkUr8A3BeqQ968SHUHGcA8xavhpStwWtSPg4BHdmUk3bdx",
  "key3": "ZRzqR4KRKWzHPZzPeCKffE6qzABRGXh7P28bbX2V2sKYWFY1qfTaRZB7GTtk3iLHoQCtidqUvJPx49eXMA3ZZEM",
  "key4": "5T4N55qePp3wMKBHrW6t2WwvBpW5znxXygNruazK8RExgAD3ua4f5g4HjDxTxDzneFYEpg2kMaFtXTmRDXuXbNaL",
  "key5": "3QKAenhxEazGFVVnbegRsu6BjoXarMBozF8KK4uCNd2Ann2dCWj8MpdhWtWwtuGwPwNkHr6pmAFBHKQiwSgvkRW8",
  "key6": "2cEt6h4ZEDErrHJvmx4KHfTRxfW87CFqRCC9j3qbSZT62uT21K3H7iRNKQFsQHZ6eZc53vifJQzNriVgJrySJzmu",
  "key7": "3ukJsKYYPUDRf7DxmLyiL9U69rYvKZEDBhWvdfejrrvFdY4tamaZRrebEMQpnoF1T5jQhSx5Lzh3HpCSta7nxeCe",
  "key8": "Yn4c8TgeZtzzwa3A8Yu7PECq8L58GqdBsiN4fFVAFjxX9ef7zg9XxNpxDc25B5Nne8PReiW6ew4JAi1jRsqoxks",
  "key9": "4DoJ9TrprxN5ytaECHk6cGASTF1WtP4aGiuW6N5nANmbg9AQP28SwkjzLAknqLwdS1i3k7y56FvsKXieaMqXgaUn",
  "key10": "5Lw4DPPjhDQ75KVxeFVFUGCjR75Q39KXrSBhAH5wxQCqwHoFhs78odUbGwowkLbPNPMaG69qbDxjR2HnxZenJpDg",
  "key11": "67heiB66UznfBxh4DGjfJETBeSpTYkLiX15Bx1VySe6xR8sw8pWfRuQhtsN8qLAzQTYufvGmqtTJr9u1gyewK2gs",
  "key12": "3z8pNxArBQNQWLCBVebM9Hr2RYkdiiy6qPFzeXqACEFXSoDfV9JHEKMGi1rBWkKVPqXJDw2ksTUc9W4VWfxdeu1W",
  "key13": "49LxjGp9MXkff6BKp9PZuSmK4Bh4fiJpe5ZJSwdvRRqtV2pxjaCKNshaVAK5qJNVkM4G2GxHmDftGaJDJYfLLbx9",
  "key14": "RWbqj3Zc3NvC5h468DDiVoLXTWDPupzt3YoS4PZ6scuALdWwtbEFEnauF9aoGCAvtBdYxbJFyR5o75zgjtyq7CV",
  "key15": "3tdvSAsmvrUKTrgctZmhzGyww5VPREEovXWccZWwVo2KnRfgMCqctBifUbt21foptK5xQZriEAsrAVsqAYmpGA4j",
  "key16": "3evqTfJCERBZCR8Q6bkbu4SMXBd1oaYhAWwWGRj6vBFuiSFaYFPbZx28TLnNtz9XiMnNzanb5sVLxtzwc5Mkwz7m",
  "key17": "41wJ6UfajxyniBzdDNdB98x8nGSHYoLGH1iLCdvzVuR2FcmJHHsXwjFBX8XUwDBUPeigB8RMPaeMQWkEzaxCe7iQ",
  "key18": "YBNdnEBTE7k5MuFZDzSPXApFLezDP143wvsZYTwemtBXyGe11NGVXe8brxMygT376CEij7HF1mvRKrGzgMF8XGW",
  "key19": "2T4qqNej7MHq5FRveopzRq1kHDpzRT4c9qye2Tm4UptCAwfRZYx23C4mKDVNL5vrZB4fi8s8AXmB1ZXsM947PP3e",
  "key20": "54DQdA8Wfn18CFTZwLe2WCvdYCofC5sCokznN4qXZktYVv12Je7yiUJBLGKsoR2NZV96MHtoGxL9Ko9oAa57b3MW",
  "key21": "kyVdG3CEtQz2pWSC9emVV2CLwn3tDFsYihDRy8xcdSz74TJXLMn3KxZwAQW5meeASp6mwnsdD65qxVZa3XMYKMe",
  "key22": "5vHscrjrCYf2ey9yHWu688vHHvxJf4GwWTF8Cq4QpFS9o9GjBvwdzvwsmoP5oH91ajzGCJQCSBwLSNevuAvcGD84",
  "key23": "51n1bCjYEicgy9poE9tk2hvbdrHUWBvfqDDCzW9bjYat7siLUm3ZkEPGt5KX2Z25cDCXqGGU6CQiZzqeqp34xGxH",
  "key24": "ta9bgpRHs1uL3Dt65GLMas35wzQCpnF3keyh65YhXNY26BRVuq2RChoEkKmKRENXEFbSWnhxVJZyzz8YdbANHes",
  "key25": "387DeQHixhtH5QSy2SFHb1WewYqo4aSvSoZrKHkT8dHj3o6CymJ4ACsUy3zukptY5Y8JtfxjqF7o9HXvg3kfWn2c",
  "key26": "3joe3f6gRU22EaNaKWEbK7V48bK7td5SKpMzmUfW5eZ6RS1bvvAkmGhfuMtQvgYmBXUYkULYZaT972Rb3PsceChx",
  "key27": "3kEYqx6j5GfBAgFLutYCxZBYGpTceGi7bkXYeTn8Dy2GdqW3Y3EU1zAFtZ34Ep8wxQx2RM7WxNAakQHmzSY7R2tZ",
  "key28": "59PiTQimpkRxqq6sdy2JjcnD8mPu2VbZERgfSUqo4vN7QheJLLr8t2EGE985bYYfN192F3tn3gHyfzgS5iCbEhCY",
  "key29": "ad2iNXH8344qZesz5RgjbN42V9f5EBvp2ssJ1iRkRRbSTiJ4MonwL5y7rhVHMe48UvfMXLMihKkKhzcjevF8sTX",
  "key30": "4Gv4UDQkeJRm8u5NitPuHnDxntNeGyWEh6PQPK5ncPG87xGWRrouNo3nVYyPCN1AuF4w7rw94jAXDfi7LJL7Pkpi",
  "key31": "5gSxFqXsAuDKhm3X6UAtCMrWofx92qkZdfdd3372bs7fHLS7g56ymHAkt2WV8YhL5r4W3bdTdkWQKz89J7bsWamC",
  "key32": "5E3ybbEnV7sFV96EBQewxc4TtiB1U6R9PYpHe1DPhuFzyLeojtLDh1B8sgmSB7Rk3iNXYYLCRD1gWwscg98Z48xk",
  "key33": "44CKjnDSDN6QWqU5Gy8JrnDkDKJkSconT4fFR9hhtMZ3AfZTWaFegeP9RH2KnrZJmeFcTiTbeh1t6Dxzxe9qDwrW",
  "key34": "5U6Cqe4Ubo6Z5DP4mUmSxB2sguQ1V8idrtrDZxusG1bJm8ZrFNzSxmEW67CuwSnDJN5ALTLR8AoKGN1dZPzjYGsH",
  "key35": "5PduiTxfWjSTsHGmNEAFqciSFxAhqhNpSstufUcahR1APAsxoECkVtMvYC2S2HQRKJkZS2Jv7yTui57u4eU6QvWD",
  "key36": "4fH7tefzHfNbs8rGVcA5TjAnVwd1oaySjxbDZAJGG3Z7CJYS74B7kJUDKD3WH8uXMjecrSrJkaKYKW3NEU37Mtaf",
  "key37": "52kVjM8EvqcFHzxa6CAEp7ZkPoRzo2SsX4u18no5w97QkZXaUJmZNvD7W88zVKCkazQRsLiCFXqzhR4SxwoH6pZw",
  "key38": "5nC8gdi9MtGN17jnK2xgVHiw7UQ8uz97LfeF3ZmcLAuPwNkp7HHVgStVboGxND9jN41HhEQWNnbYhf8eJD8F18Mr"
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

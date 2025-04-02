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
    "3N6VVgbHBqjZxCqWitMFLDxsTLUMYgSJXdaaq8QYs5XVAMTnmtPCdqH5wB758FfyWuCUU5mJou95BbS8cHaaqdrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QteKawK1gG1wXnGKivZfgH6hCpXtyLBdAY4PSUeQAkWoJ2TvTzqWRUQv1ji7DGzFgMq26Zya5KceH2Nc6doKGSn",
  "key1": "4eYDJN1YtxisPGtfamFobFrahJTkWTupnzMYbLNPqA8Uzm1t4E3TQxBYeTUJeXwJDPhXnwZQoQvoAa5XsoZmmpwv",
  "key2": "2pZFZMV7B1sVLpJubr2wbCRkREuS2tAP3tEukH8jxVcYSgLgcefKhgd32p3jjKT2ECePBWc5vjw4DZL6L89DgBQg",
  "key3": "29aMEdBYb2WsbqssDauJYipZKjsNk7gR7wPfaDFY5JwEGh6jfCaGXPF8xM1g3Ly52e8YQc2LhZeXamJjv2gVzg48",
  "key4": "2tF7M3kL3YtWK2Czx7QTDEy8jmKmD5wRPwgfqPpcMDYCfrXZjiDqpqhRkXLTguXkfMZ9L1D9JrCWKzSDM12NRNfq",
  "key5": "2VPJ54HsnuZw2TVFWzGSHjbHRtH7uCU6AVjqsSXF8Gg97L4psaJnwm8a3AT5ANq8HLMn9ZTbpRmm9XwrkAbhuQ9F",
  "key6": "525Y1GZzYoVyTrfEQJBn7hqvuzFeLMMD2LpKBwuq6tJ21DHrJMexNyBs1FzfvnBJFQtho8VeFqHE8pNUPrGmPrKs",
  "key7": "2tdS79w5waw6vWwMrE9VsfwVvq6VB5CNtHHnzHmrh2Re76xo1FSKQAFSmSNGBVmcEkC8dLFYLfieejJJD8HvDCH9",
  "key8": "4ZYDszSupQ5ARQZJ4nsJgJaubfPp5cnSS1md9NTEnvJxDopL4nXKqi3Qn2xJ1wNjh4TgaPVXTuw3QzmTCBQiqVZ6",
  "key9": "5NQDWsoXMPchbQFbzq87VneDNjyJXtAeGyigbwbtnFCFLR9C7UrX7mNhYRY4qP9r29GPBMrNXSXpurw969hP8NKy",
  "key10": "8HppAEDW9syjgZvbnQHXso3opWEs2kgZr5vJrfhWhqED5BUJyF8qRTU6qAacn5s38J6Jp26tqPTNZUHMUQR3adu",
  "key11": "4Ucuqh1nZxTVsA8FZ9E6pt4D5b4mM1N7ufH7cT3WG4zYjAoZj8Yi56CLzBnRMs1m8L6qkYsZpNKT7vqRkXTBnbVC",
  "key12": "3WcghSTLHkL2Vt6WXhYKZkPBV9rtpKkEEGAKPDm9dqgEPdznzXF2WSAQZyHA1MTjYsjE2TCnjmW6CazvL9d4n8Te",
  "key13": "6BEV7iuRMSW3Q9QjjLpByS3H7RRw5gt7KmjsEo8QgjKKdt1UdYzGn5dJJ8PnKq7UQ2Hb2qcbymYGGZcnb2M5qpn",
  "key14": "3uCEEqZuekLQxL5i2ZWi8yzmnenZHP1jCbpPosWMzcwQzBWa3vmXvGpNs5gcks4mtkVR2FvaLFc9WrxX6pRs8EQf",
  "key15": "5TEpzoXr5fCrKiEEZtyodDHh7isMAMNt4NxZmATprFsZHeiWTwxGKBSG9jrpxQEjDj16mijdqAtbiWe8CUGe5HEb",
  "key16": "5hryoqzj6jcTRe8iseBxMFQv2oa18M31144iAzkb4N8ZXmFhTVdz1y1CDNRTzLaeXGQLMnsepne14mAT8yvxK1ki",
  "key17": "3XsCo5rgbi6aXAFCXKekzNFV5kXY88LjizapxoXRfTM8GTnMa7GAtAsePLMRv2zXXFHdaGkW59PPFP5w6Ua7vaJL",
  "key18": "272H3Vv6NmGRFgmMJ2bh98DBwpFhKamRKjH15EbYu712TBkwuwbX4Bx3pfRDXQ2Mh7sjd1e7Bmzmb9o91Zw5Hmuc",
  "key19": "xpSsLDiSSKynRh4Nz6oxyem9XaHhBEYnzBYu2zmVQmuFo4uYH4Rx4s7mEzYEZS3DZiQUvRr6exQF6fRv38Wvw7M",
  "key20": "31vAVzFTfemQSrwJwMxFtqqDCmR7CY6noAKdRHCzxuXDEYQ52qyU7SFuqKZFkgX1WWB8fFWBBD7oFg23dLCQriRf",
  "key21": "2CWQQQbUtMBx7AhpAmt8MDXn4QeBn9pqSWpfAkzALcbuNKCF8PH3tWYwG1J5JpNwg3r1XQe32NfXH517LLioRGnE",
  "key22": "3PQghLXSKpSGXRie99ciG15s7umK9Rt3Siks4Kz6Zbzc5CJcFFGYWsPmJ4qer7SspD8KatPo2SanHQDTTjHjT5E6",
  "key23": "4mr5pztCfwNrLVLbyiDHAwVj22YwdGrDmTf7FmSqcKYe6c1x2TpgKD5p5rmtCB1QRXpi917Q6qXLZgsUe8B51Jnq",
  "key24": "kbtYeR7k9kUgdPsupkgFdTehaJaw2Ycbaa3nxMERxyPji82oadxcPyxnEGBnYB9MzP5Vp6kz2NwkMweqMAbFU6U",
  "key25": "fzyP9phEzfRs6rgerzpu3paSvy5JwsLRpMvjusSubBNo57mWoa1GJLjLr97NZj2csQEv58CKEU57nAcrtr4KJdt"
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

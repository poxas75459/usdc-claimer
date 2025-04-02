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
    "5NRkMdKDuZz6VoxxJK9QQPHufz2tDFB5XjcvB6xwFaiDoD6rFVKtersSXNkpJC5PUFtT8YQ3NqxZkMKGHeCXj1Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFnQpm7eRmdti2tveGRMsyRdTcv6nxH9VGByvTn3rp34EEHjRLaZtkHWaChWqXfN6x8sp2UXP1xSiPZyB2QSSfj",
  "key1": "3Nm7GCZJVGTHonPBfLk717RsxADAQU55Ns6xY1dzj3ihCRiYE1Hej85YZ8Dz53kZAZK7jmb78ZauPpxTsaWmfob3",
  "key2": "5RDaBkyRu4C1J7mGPsWTgGkv3qxh2au8tk7Bx2tr3vLWzn1b3ubZ8Ewhz7n8HaqqVA9UPtbmjTMUbkwduh2pyKfZ",
  "key3": "3kLJYZjFrK3j84mZD3mxotxAXvcti1RnoCUqAwTWkPrj6PB37mwFRNBQf42mqBxwxvkyfnPfBgf8cpJ5NZiVmrKr",
  "key4": "WxezQLMiVUfyXSvyRYPJm9fJ6BiTq6TCG5e7MsjXWQ5jgVMWi4z8JDSnrmPQ2voUUmALJpaasEJ2uCPz99649eQ",
  "key5": "4gbXuK8tvDfExouhvKjdkvPRGMa1JVcy3V9QQvkhqieuKnrp8L3fhkCSjzc8vf7qCr3sk6hTutiVY6mgwQwWdajE",
  "key6": "XZPqkqHHWuXd5s5KRXNPDhsuCPRafNWLM92yf6R6mWWtYZdm3TyQaAXLnPF72RTbydaXvCYhzraMKH9BQYVEfxq",
  "key7": "yH6BtUZnpyAYTcjs2vn5oAfAihYv6hmSdfz24to9aEhhphbB8YqHrtWMpC7fW24N99DNyCYtGSJtiaeGPkUyssH",
  "key8": "4pcnp7cghxtaLLWJiVnwiSHjafEQ6Nv1fdgyoWkEd6hCvyZUis5GKoCqDeTpZEtYZVcyFi67eN8t81b9ZrngjQdR",
  "key9": "3kDEyFfnDShRRGaNub5QDFQe8TaPkbExo1DkXibHgM3XXrNr8tD12FcCSoqt4Lifr2nfUhiW55oVT1uF2pkTuqs3",
  "key10": "5rA6Lv4bLG3MQqLEGvBFnTvE9wZGLhuSjKbSQ99EpzmaifGvDFYuxJ4tetvhABYZo8hxFQ7zLz8EMPDkV6wam6Lg",
  "key11": "32676xvatMBrYShgqeV4U6wpVE4814AXLWnumvdajGtZn8fr7WxMiBzhwAc3Q2HSaCu2CJYf57u3MAXckxDSAjtz",
  "key12": "cCA17xXJaGjSMGWoy37P3fgUajPBtCZSa5NpAwGRZcQB7cPDfMkDLHvkuNPptVet9ovqmWij3bwEKPA6dCtEGjr",
  "key13": "2vVu7Y1qiEFzENPLe7MrsV9v7LHaddjDQL9FmMiV6kfPdh5e4pZWqs8eZVe4Qy3e2zvzhn4H2YejywCVA2U4EMzd",
  "key14": "32s6Q2e4m6NqUSUnMpzcT9hLeKu9DHao3m8M82q9smpAaEp8bEdrSyYH8AYezyc2irePJGugzRQrLf1DkDzmhJKp",
  "key15": "5GeopXzgdBEUE7VS5AtCMKzL3YPgrpDJcpfjLa6jK9qEwrT1nwNRNiVjMaxProaKBkJZJE6NAKsxUobcB3D39NBK",
  "key16": "5dV84jDXtH6r2qxtP5UVHxfTBPUPSLbtHYBkNKgVUnJsCkDP8FrfPPdsiC5JgdvFmsdPBKzF3Ncyrm3uqRvLfDgo",
  "key17": "oGuQvG81TKvkfHtYfLq69wBN6A7TpaukJtt2sJgdsi5j7NQdFPSRYRvVXQsvJsadFAZm7GQbUkeJFCSTRec2iRp",
  "key18": "5UrUsTJag6f91xf4A8xAkKTzDjScAE7VMqCJtXV6m4wgSBWr9TV1sWuVf3XJR31QPngp8EKvcUKEZMt6jJWgdmdx",
  "key19": "2kWLUdhWZUqf7yBbPX4uyvCP59EfCcWa7BNdELosqjotuavLCuGuL7m8hP6QXYGz1pshDcrDd1fAxEAx5Ve9ZZiN",
  "key20": "5Hc6mSGFTCPKtpxRXwkzXE8qxc9Kd6b49e9kvYUk5119mXFgAuo5eBwKtFTNaZFs4d1c29TprRrAxAVC9ep4M2tF",
  "key21": "bjcDDBSaqoncutvcYNH98TTUdDGm5vJMXaQBgiVn1BDTaz6qWuup2vmnn1cYJRCxbPY4jYWJxrWs1vSbj1cNPBu",
  "key22": "2BQBsL643ovSohGMnXpDB8VFfSpCFmNQ1s78FZWsGggcsXcBQ2zA62Jzt7acjvfAtng8mBDgUqcrJdb26CuUfB1G",
  "key23": "kc83FiWunzx5JBuoBxJGVF54DNi93SD6wiaw3Uj2wGzW1uiEikPpMr7S3ryRSyDwD4V6mdiBwGG5ufGuWFZQmQq",
  "key24": "46gPq3FEnbhWpbhGHEDM9vsj5K6QjSKjcou8MjbpuADjdwxwfAVnVGAz1Bikm73YYmNeR1jMNezEUXHVXtjZYfVo"
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

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
    "4Q88sRB2QiipsKTH29W3E36EXsJ3fpsVnLjeVrEbLK8zzMm3r7jwboBc7DhrRc9m5FJrVaDB5cuywYBbgqeSLErA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQ1Z2FV3qTQrgs2nRHNQkZ7iKxBYqNmZHsk5SY5j1RZj9AMbTcMssNYFwDj5qgsskPnu96xY1eAt4uvVZxzhrsi",
  "key1": "h1ksDVbjNTXycyQvQdKu2FPpaebt1X5YvmbJUmRpNajab42i75swkGKnMoobEkth2go7AbjSvjQXr3ZptTpF5j4",
  "key2": "4SAM6VoLXhVNg7fp67DJaYeShQCFJLboPmKZKqSCYNNmkqJgkjGRr6xvGxh7n7Ljkp1fmQCZq7SzKh4nzYd1dyLD",
  "key3": "2ANQEQTLBfMqESSSw17RhBtHL3DQRzmE7haAEeCTq6KzcNFp8wyyHkW18NnBdPFp5gk7NzLmnBimBw3BHo43LKWw",
  "key4": "2Yp7UPQTomN5UzobH7GLHpYsHijcxjPCZKHPCZZ9tXKY5HdzHFyCV1cYzASMwTVH2xnNi2GvJ9D22boiD12GbwWs",
  "key5": "32461kU4PbcM5jViUkLcod7zE7JyuPFWFbutfaBidQ85g45hewMMyBsszfqvbTsvnDAwozEFgmtDp9ATHQDSD5Zs",
  "key6": "51K312UdhNHNnPCuUztssLLyULNxmbyHLEnLHtyCT9MsJfTxs8JjSMjK5f4teE9nGjKPdjvXJPzV2RH9LKpFDBVi",
  "key7": "5QenF1YuEZWK8qnSnzgC8H6uh2CCZXsMDySv3edCgiUBB64vnj81xq1L2v2S3d16PXac7pdxz4TVnYotCLEeP3tS",
  "key8": "fJhRjMrSARhCGt4HUgEhd6UmnwUcZWe4VUkbzQTjJjF9EfxUNRTYy1MXhgVSWU2tC9g9LwmZcXNHZkVMSG9ZvqJ",
  "key9": "3uJmx38ZUMAVukG1UEzGbBpM7AFWJw74b59WfHat3crWEMmEkdDkSfXGs7xzpGSiZGoQcoiroMX2EjMC1wc14Dkh",
  "key10": "436SrYH65Sg6KrwVx894C3CgxXMAdyqxY66qXva3cC9dzkzRuc5wRT58tNhRFJpFx5ofJ9gsCDHsrK7cbiybKBhn",
  "key11": "2586kTbkHY8d53C8mCAWJRrxnPeyeR3Y1yjpJqL8M9VRBwR2GSVnWvreH48UiE1peKY4CtfZiemWtwYiCenSziyj",
  "key12": "2wU5UWV6xbu2DPsHQ4AKZWmifaMpF1GYMDka7Hdo4eCMtcZzDHZ3BoFSq3xo3qBVuQaoWdobYP6dYM8cSZwikirj",
  "key13": "pYuTKddpMj8ZXxRArd7WAH2khbYJ3oWhyaFQzzJtyFecKaNYe5VQyuyRAcWryUYb8kgQwT2Erzo7FMKXg83NdSJ",
  "key14": "3D38ogXG1y5HmsDBgwVDFDX7QB7XSkuF5shkWWKvRThW6BmkfyAmKF8ccAHryEGp6DKeCxB89vNygcCmZSJmrHEF",
  "key15": "54DE1qSYPjrZPNcmyHWF6q2CuNzpz6vriCVvkGxdvoEgzYJtJ47T1JLG3xc1h8QxLKTt1t3SRaeg36QjGEnGTEP7",
  "key16": "5dP6uFR3LEJw98zN9tzDeDFbSCjbWDXTmTP2FtQRSSeJRM76cm8xj9XecaJL2CTDq17t5dwzAT6Sw3fResE1VneS",
  "key17": "rDhtQqF3dk4cDQg6uKDzDEPoruvpubm4vLT1hAUhLB8NsYJyBRWNpqcPsSZLX3wr8UHXN7TDDFdWtpi6hgkEPJC",
  "key18": "128GxpuyZ3AGEXpe2f6mr6Jn2ZXw5uCmUEh9enkywYzmAjQELJ1LQTW3h6VC4E1vYdHMqLqWafTPYh79fuQnvgxD",
  "key19": "4Rxp4JBV9yau3DiWUGqSjWi5TjLkVGSoyyGZUdhJDrWCSSLx89sxw9b65RKC1RMKV4t3tvunqv5tCJ8uG9hSHdG9",
  "key20": "2vZ75FQiHivQ1fJDBeKbgrmfbCsyNB7ecfTrQ9KxTcWm4Y7MGBnP8BszSm95r3TwDpNtDr3eZ7auo3Q52zQrKPun",
  "key21": "4d1XK4UAx3awynZMPavWYVroy2DM6hV7cPCAyDwgwX2KTJh3mXhqnZGiSnBv7sWqMrABqgc24T79N8udd14zBhQE",
  "key22": "2F2unYHEb84LhXWppMXpzaGKud919aNdZdgFPKQ7J69QjuKhRXTaurihvv8bQZiLY8zbgZPwV7MTxMzGzsaraPTU",
  "key23": "2CxPHzWuKA2sPBHkf4aX225gGdcVQkLvnEiVMh8qWb9Wv4cpJbqCuaFjPcYoj26Q9wvArMR5ZjpHvUqiRV6z8sqR",
  "key24": "2Vw1mEC5VWqb9ezGrb8Fi4pjnTnhVLrEUeBE2U3rrY7wUkL4kwbUy17qhpE8hrLVjdo6FcYyD9g83noKuDYfgGgi",
  "key25": "peujMLNtWi46U58MJ9eMLXtokWCniENz6WHxZwifuBCxknZbKjXgW1gZTr2QmfyMPxBDNQGg16kAVYpE2pjdzHE",
  "key26": "2hADY8F1QMyzGN6xZR8ebiPqpVyzyMNS11gWt9LAEwLqspo9ZakmKQTcMXt3gwGG5UC72DUikx68L64JbCm4zKjN"
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

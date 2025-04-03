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
    "4Fh4EaY6aeE3bUASj9djSNUtFSvXZBSnnDDsGv4mZvFkwJq5xEAMwMC2mzVVuD3TiKAQV7uQQoZPLsHLhArhK6XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oy2cY8aZnVwKVj3hc7EqJpVMG7DR7dmi7AozgnujvQ4pL7baxPuVu9EGqaiBHL6PMXiYjoSPedZTvsMxGQgusQv",
  "key1": "5GVQbaK1moQU6cfy77wC8rRxghWgau9DJryuAPNSW3GQfnxsqVuv79guLtkmezEA7H5JRcW12fvj2Qwx9cfrdhek",
  "key2": "FjQRGyifEK4WRJueuzUuP7i7rHsTq3YoPkY48tkbc9r36CQbX5n4dZjEWeJxp77X5qSqtKm4zTp85FFKqYSeH6X",
  "key3": "2EJTgMBGHhjYCbhRR1R5H2wHj3Wsm2tx1avixqkkMwSEsyXaVd1CjW4dYSky9wsRhRVWZk8QVchZKZRvf2PkMm1s",
  "key4": "57nuRMcZ4NyqDiGAr8C5ZfKyx9cPfaCWKSLHiR592i4knqqV9Q427rUr5Wy1XwAVQMgKQvnVfsvxcsM5fXbGqUF",
  "key5": "5FFXZ1yJwF87ViPzCE1RQMAu4JoNU83FhMX5eF8g5LBVBGxz8BQHbFY143gkhJVsQudm1n8UabJSXBnNry83eJWH",
  "key6": "3fo7A4FSESJAveeDUCo5pmQJn7i3uGD4xHk3V2mDk8vMpvzW8np39j2QpjRCE1Fdx12aUFMzvzAUx5PBG7iBLTDx",
  "key7": "4jPYW5PDuRyHMzQ7KBhzuCbhbRQfqf2Q6VmXtTcGdSJWtpT5FLEA9QkAw2xocCR8AYX7LernxFiPaMi8FnZg56gw",
  "key8": "W8MonneL2Z7yfGuC1Pabyrga4kvshGyjnh3rvS774UaBJorbXMMv6yHaYFkH4NVS41Q1qJvvSE1rp9ymEa3vGLK",
  "key9": "2ZPTYBUAxeig7Jv9Jkfp1sKfTpr7MWrN5wMVb6EwZW3KC9uTvqKJJhE3nWYg8btKHJtZz3GpDKK9eFTTTPNNE3P",
  "key10": "2BJ4GX7f3L5qUE9gcZ5WQPmHF3khiFXyLzJ26rFwbwZqse7YVWDJRLmz7fyGqQxs17KcuqnvsBEA8xoEYw3BkHX2",
  "key11": "gQW5tAhLosn8Fy2uHdEPy1ddPAqdL8KDJHSNGuMQxut8YeoYTsgGtPpWVSk6zssCWFUFPpgSohhXHLwBLQKU7br",
  "key12": "fRTqzAU75AF8FTRcNo9UvcLsHcTv2uU3LyauFMtPxPCGwD4ebd32k9P5f1yUS2ns4aKscZDbkRkCeKxScdUftnk",
  "key13": "4oExNrAYT2e5jKNRXxLeseqcy4r72jNe1af3LYtWkuTgm236KEKeXut9gJzVXdUSnsHYu2aB6nJq5KJhA8upZKVs",
  "key14": "2Eugx7sCjdovUm65Dhwqjz5y6GsErkyqArVaPErAxBNPqK1o4spu9QgSkgqHE43HY6WHHMYNLoB3C7BgwchMZR51",
  "key15": "32mR2MqFeT8c2Rwzi8EkZxbwfWcH8AdwxdxTiRMBQSX5bbk7pqZ96mRvS4YDdUb5Edhms3bTWmmW6rPpkLuqr9ak",
  "key16": "2pjtetK2gNkTz418Phs8PEgSda63sFdS75AY5wtLwuS6eT415GFkFwiYP1TGRYo4MeuVE5wiEt7tzKrNA7RdjSwm",
  "key17": "46YNvQwJ7Dm2jwseAQ6A4kPGK8LcMngz2odeDBjo55zu91HkHZP59a6ADcaVBNWvp9ty8rGd6NwZ2mnDLeaDXXcX",
  "key18": "4cz4AzrJryDNoKcJ6JKdAksuW86UjoXehRmEJm55NoEQp61XeFLVFU3U99Vtc1AoDpW6srLP3tpXA2CPDuin26HW",
  "key19": "2caX5Fj2Hu6oJH5YYEzdnQTbQxBuHZ5BTniGB8gTYVBWeaardCPBviYgTuXgTaak4uQt81e7gM3wmhP1Vjfgzfdh",
  "key20": "2snmfCx3nJWVq4CrguTJoQYj9qNkxVdzTfpMa7Dx26he6MCFNJXnsDRA5n2p4VtV48LFDReCppNdGj7TUQZfcMmC",
  "key21": "3gTSfd4n2F5CmQTjiPLQStVjkxjdMBXnvLVxUG7pMBbAcJjQC5jbKfpCeZMQWojA1YsxMGKm8ofKp4rRgm98hwYj",
  "key22": "3t6jh2DdKX1U68RFK7AeXz67UA7yGPTx6r5g7BHp9ZEZygookriESnYyGTFLr2fA8wdtzrnuN5ie3oNanbwNZkjr",
  "key23": "2STmkL664zrcNsnQEvTpcC7vRmnfSBoyjUM4W9NrPqbsFxcqpVthgeiYCz7mVXaezscE1eHvPNGXVq6Nyn81DgdS",
  "key24": "2aVMxeJbbRSKuoeh8tgnCJfPSxFYTtfD53jTnxpo649taTB8gvjg9ow4UFNmmT1iGqcPeXqV55ZHZntuTFD4MhJf",
  "key25": "hYRUUvx5tndx29Bs2aHb9y2rA7pZZmmZubiFffwzzj1PRCE4FkNaVjkqG7oaJH3t3nyfnZm75UKomArwe3asmMY",
  "key26": "4Ny9kGVAsvMBTvYS268ktmNUS8mUNTdnKqAALWMHLBfdAmovF6Awavcpm6WhNwJxcUup5xZncEG2SKc9gAhp5LnM",
  "key27": "36Lc4ZL69RFzZDj3BpSoWthqSxDx5yrFyZkLnJRhpg4k9iVmrrJbvemgkwahDETXdQHRonPzGumSuDVy99qtC8KV",
  "key28": "5ysJ26HKM8W1bZDhyFZ8kWYw8DjpaKG8RYm7obrcnDJnBhWQVCHyvBG6k772mhPKoNyGuPjzrtCHUrPnBVLByXiu",
  "key29": "5EifrxMsNXK6VF58SnkCCoXRAgozHDihtjmYzrr9y99krPpbCYXqwXh6eeC7mmuBZasyFpZTtMd8CUJ6wJux5bmT",
  "key30": "3BgzLbLaioWkeDkyrS6eQgphsP3GRszKN29iLYcyDRNfn7rAUZCFjpFYkp61TCGe5DPgCzzCYkHWgkLEJtLJe1cp",
  "key31": "28ECyhmgH8r71n5FyoXiUWmYAhMn2pbd5MFHmoFbKX954D5VURE2FY8bFaWbU8uyt4ZppkPm6Ts6FoxGsUib6Ecn",
  "key32": "5BycY7uV2FLjAuYZuJ6Ev86HYx2whELm6F5vxoT5dy7UL5UsrJyxf74hpiK1Kg1xsoKvyJDjCgYCKifgCJjj6NWC",
  "key33": "pHsPKKH8pVm8X1aoXQu4NXsDLPDRPdsRuT1i7Ta9Gh1xhcd6Ay3r3jE4DCSp68i9WqDGDhNCaL3Lad8HArQjBEZ",
  "key34": "2KGbZaQvb28B9wsmqNFdatzi7BFC873uTJNty35SpD52g2DytLayn1cPmss6fpRxZWnqyQ2bcC7tgwcSfxbpYYiR",
  "key35": "SY21uBiENsPPyL1QZrMJJUmg9SxPwz9Qx7YDJgufu7YPWMRoMabgnBRDU2iQKsdjAiUW6h9zCkqdr3dEvKcdT3E",
  "key36": "488QC2445dyDXL6yQMj3a534pre6CmPPgsBTVMhegAYmwZwzKzyoNZknksbTeugT5Tb9BkwoF7vR7TSEFaczqoTf",
  "key37": "gzjud5Uro458vDsGBNHjP1RVrP86SZbSVa8rPBzo6eRatc8US3bwvj7hqyUcDsrBfPWh4Uho9DxX6ps5h9JH75T",
  "key38": "27eNp3WgaFqvtX97dYwVDg1ttFmHCoHiCyaQEzNRoD7Ej7hbmbvroawHVjptsDLHiVfpN8abuEm3gMZh2ZQ9uxpa",
  "key39": "4RbWvAsPchJoQLBUTg9vkwndFLAix6PwmMu27KTzTgYffRQ8Sat2yWRXSGXRq477jbJMtrjTeBv6zJfbAkjMvbL8",
  "key40": "2SJJSTzUq6VKGsuzpS3QRJDndhSDx1aYVUybK5dG85WYc3VDokNbxqo5f4MrLiGjfXGzeVHmkYc33NSAwAnkXjKe"
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

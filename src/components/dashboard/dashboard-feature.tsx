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
    "5gyJ4fHsEjzGrXed4ai3b8G2yBGKMG6SbnkeRGxEPMFuruGHeiWyS5d1Gn7hqM8WbeWi3qGLLt8aDrzpwVC1rkx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FA9cWzYsjUqCVqkxP5MHoD7vroNX5dfaZtztmEnkyjoyjFcYRdnPt1en7nAoqT8E5D6pgjnvqxNmjZnp6ejttvz",
  "key1": "5SFUkw6GAPJUVLdmwxMfLD3gdgnGduQTfwzyoGjdsz2MyrvrtsKxgq81r9aYV7y9qTT29uzMQ86A3KXpTaswmG2i",
  "key2": "4jmCkruU5kgtGRzac8Qm2XguhD8F1EAbVZxDCovCJC5aZUesfhVCLK4acCzdMF1UQzeTjUqW64kWjgdgfBU3myVc",
  "key3": "2P3PFF4fridX2DCbDeJNFP5QwdRSsaSbud8UUVvXLTaDjoNkKVrk14C9yV8pzmramJHaiWgp6iiVaFGMHxdQuFcA",
  "key4": "5UdtfAdpCFrPPG4VUwQUN4qG1s2RtJe2jgZmxHyhsEterfg8HyAc243KEcJX3L9pfGgVL5YNvDW3ThhQ5gxar13e",
  "key5": "3wvXgskyechQasWjE62jG3HAQ7Vjhreu5PHw88LudvJP4dEDmtgoGFyMRCuQ1FonHiiP58TzMfAhP4DHdUaFdBBU",
  "key6": "cuUEz25grLuEQ3qbfUpmzjYvRn6nYWD1BhrEwZbDjwAZ8jrGzcTiS5M5ssDc4wnDYkjfDpNmiSBdw9LBHZZwUGf",
  "key7": "5JJCYFUKVdtvpSc3JfuBVj8k4dQ7AtRSpCoFQStLgfbNrxXTNHEn7eYp46BttPL2qS9XEdWebLCaRagq3m67TPkq",
  "key8": "e75wigjoFA1GgoGvB1GWcyju5k6XLfkWeXBzHgo7CxysE2NZcG5xczXKxDiWHgcu4BpQoP1HjrspYn9T64kox5E",
  "key9": "4x86ML7tKnZNKHrvvVZuyFnepeG3mxVAJZGL9mJHFZQpjf2UQBUa4vQDtksLR6V82eoZyr6ehdrUverv7huW6ZDU",
  "key10": "4UYLAcuo4YA8iWohSRRt8BtDFGsz3bngNQBSiWXBnfNWHpwBZgULwrBp7qir3VgR7YJ8mRnSkxm1fLfYyfUAnWwP",
  "key11": "4djb7RHJSKc8tT56vLrKwYSv9zHmw87Y41m7MdznUEJxzhfX3bbz9wTSE4SMkEc8N4AaQANH5s5pa6tEZ74zyuNk",
  "key12": "4GnqvcJHsdAhSggr1E8eijqtYYVM95EYmBAUNRMcNMRqw2UtupvrLSY1vTWmGpc6Y361kCa1TYLeeQUBYJstL74k",
  "key13": "3DMLYDyoqHvjLodJFrCwyGQ7cbXzcPozM5w6oDe6Zv84tofDrU4QC5DJbMpdAkBkWx3vqAihK9HUjuAEt16r6iCC",
  "key14": "4S3XKdVH9JCdBghyxM68vDhUrM1iwWSnujLbvm4Nou4eBUmMGM3kBoTLvcsqahSXHuD8dWKESE7tzhyVZ2pgpKWM",
  "key15": "4wPEXFUtpAvzkCf1bcwBPTUNP6gterdCjAkbcnc6miMAzDQzbimk6ESgaBUBWxWxafPm48axmpAzNBaLUVYjCQDg",
  "key16": "4auZewHGVuCRhdTenhfDoWfzmBbXUSDvYiTRDvdTJjQAvTRrQ8JRQFyrNm8wf4ZQ2rdfyv2sApgL2AZ1ZuEMW7zM",
  "key17": "3rh2FgSDdc3JWohytWcKzeiTZJyMR6UPsJfgZxNgULMGJRBAZUcsvhH28H3Ka4Pr1w1TFcVcDkQxvSd5osgkvUWV",
  "key18": "43Hvx34arem1C2T83ee7Uh1wiSyPsWHiXp8YXMvfUfenTapJw44ZWN3AcjRR3TWQGD1cC6PrsvTac3PR4s2ZgW7E",
  "key19": "5QQVEDHaYW99T9x7yUtaEtkjEc2TqoY1BkvXiDP7pH2U67yPYSTkeHRtZywCHVTLaGBm51ymZnLj5tn4x6CUUrFo",
  "key20": "38FmQMusptP3Hw36H3aWDjHykuCC8Ye7MqA4RswDiLdHETeD7TqxPK5noqR5ds2D3jros15XSVyuLEhHVLhArNgn",
  "key21": "2bRNQv9KgZRzaa1vtTiuygj9MvRN2TxnU7mDAhL4NHRhv7xLrTbSKhJzagU6JFRuriQuJQKvRpxMWFhov8EibNND",
  "key22": "3SXoLFaarp4jr5co7vPNb72jq2j2LTDY1Xy6FNozpomyuUV3qt8gu2XRGnVbZ4EWqvaGPS3WRGvVAqYVevDyGxbG",
  "key23": "3Ry1j1YGXYq7Y4W5t7b3xuSEECGBBrx5GhQJsdBZEUM6X2DZ5PJkwKn5gWCPWBahsXaB4kFcQPxCF96PXt5bLB8x",
  "key24": "29QGTYrBWWuEmXEU6FZb3okNFx8izUShB72JPrz4X8XdX5fxNEq3ZsJRYp8NP3hJwSMLFt7fsqQWhCmVY9BJRT62",
  "key25": "sDreoMDMwB5Xp1gYPqJMNnrdVaFwwbgUU1ZzqTxhXEY9xRW7Ab9zwREa1GnBo5wDSECTuwh3EodpGQTgKgHFJD5",
  "key26": "3nEw5PoZaR81evh8fLMJtmLE1PwhuMUX6Cj4oHctUHgcN8tKx6bhfqj46RULB84vEFbGR4UiGKHnDpEmDGUwqfPJ",
  "key27": "2rman692nvdTbdxxJkY1tWnZWEGBd2r2U7ehY8kJMfJ2jUFL9jhaT6V6AY88Jf9kRq1TLnXSu9sEc2E8ENHD4XRm",
  "key28": "4PaC9QjLXwr8PfY8LKDjGfWqrUqSHevjDTx5UXBikpciurAZQRKzfXKvDRoUjkB1jPzaAH2zRUSkdeHTeLEotGn7",
  "key29": "7JgFxYEt2e3JGsCeuBgmdCPcBvW5egpse1CGUxvQPi5W9MHhTgQKddcHoyRwMpKkuTDTWmNzet5xDeP3mmSWxHz",
  "key30": "3cNTGP8Ax1B1wuiZyt7QTGorKLtvhn3uC9jfRxjPwyvSXKVt8UndCranmY8k6ST1GZNL7ELnWKNM3en9BuqXfb3i",
  "key31": "2QYdw5t2x7H3LdigzSksnCBtYytsCu5VjW75xNEctqC2u7KLnqKqQRuSTgNmVy5V7ejDXosMJpLP9TCw7XG1Gmij",
  "key32": "2G3TzuBut4y2egjcYoMEbAGznVFX6PbmqPTnWYw1UkwFkqVi3WyqFRtJaXhgED7fCiGCmPVLmJkzZJknfiSCpDbv",
  "key33": "T472GG7d3sbZv737fqwDSznkYKc7r8TTxjUKD9C9abAvBkdyGV6TbKsEfftZJzMAQiQsseuc4PmkqKUSYE6Tj93",
  "key34": "27NJ1MRDEdyuy3ARqfgrdRPHMmCTfaY8nCE2ggUVBCa1xaBDvPvsZ9GkWPGmha1gJENWfea1fzGcHwVPZVeeca9b"
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

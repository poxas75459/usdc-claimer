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
    "2Gzaf7QN7W2iZ43KcHCZqfPjDyQWFWQf4JM9brAFdsmmo5ZJ5o5A6q8oUZT2DwzNeZxHaYWfxogtY47tBRfPRo2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mjDL6vQTCcPdzgMuFPUm3FuDf9WD5yngrAq6A5csEbifqVkpi8wDnRYZwCGXVy7SgVUWJUrtvtvCpw4y4FoyK9U",
  "key1": "4uk4gjK8BfjjeqCUShsGu5XTTiq4oQtiPckMd3ZBoGF5DDsuHqnfhT3ZandKi6t4vqFnhY3pggsunDoiTTZQAjWU",
  "key2": "LU99VAC9ntZ136cTafq3KsaaQrdeQ1qxtKU7YBfbov4CGniJ7TqiLk7LE9BETsnvjEmYHDuybjorn9QjzK6uTVv",
  "key3": "5WxwwL55yZ8jLWnRsY4wSwbxVVXBJAXQN4Fij12BFqiEFr5h2tSLwY6praUM8Fu8WfoiURx9VZXWpr4u1VVc5Poa",
  "key4": "2UCJENGVTnKheoW2DDxmiWCQQiRStM8hMWigEZ5G9zjfkBDw75sVQsXbmZFMVUVgU2wtUXHXit5sxyZbg32grJ4C",
  "key5": "4cGeZjtRcespSaaZsojgfDbhHb8Y5yf4KX8gbGRNyNzDvf4C25yamCcQVv8j7UoEBTV9eToYoveL35BrY5KM72nt",
  "key6": "4TvLLuQB5PXd7CCXqnsCjmvXh6xojwHuNRrXmBseom9mABDWGeqjTebmd66TRArtfby6evYFPBodTPvQL8wkgCQ4",
  "key7": "41RxDh62dEZj4ySNMSF6NhKegnvkChVPzsrn1so9DTnVsLkZNvWBwMX7WzzQJHvS4eLbqcLfSLiQwgTyXxXo8Y9u",
  "key8": "2bvmpHL8qgLe73sX6gjxrGbWqVk8TE5tCGZHLvjj1x4EM43GVwhYzquwtJ1qRTVUXz37Yimix8kqaYqM6Q6ZDTmH",
  "key9": "3UPehTqRhEsaCHsNAahqXSCfNtBpKRCerQQxSTDFiBzr4hHjZ2qU7od9YCWFP3huJJJ6vAaa4Cb294DrVzsaAofv",
  "key10": "36PhHnQF1D6DTbpEzQrAUM6fvFW4JJMNJWXZzyG1S3QNggtpFMGFxmhobyQZ7F7vWnvL2wt7ynHpy3dquG3UhXCF",
  "key11": "5ju7Nh9x525m9vRhej8P5nFJT3iWYKX5D47hiDn9iTGw3sxKFiGikePzbJSdu4wWSgUWUaS68ptZuXDm2Tugr3AW",
  "key12": "2fnLPbmg8V3DZKJmsTXbpVHcA2yvxLXwAckVDXyZ4BKpY3EQhtVXpUdbpkDSwXz274trcFDApqtf7jFYEczNnKYe",
  "key13": "2JVbaZwnQ3Z64oVRyYaxRZCcbsTm2jnyZQMZmtnhr4pbxa48a1EURgL9EircjsEs7UwqZEqZNUaqywbQ8ndABEr9",
  "key14": "uHeQ3gaWCK8xFgBHaK7nKspJ3pT3RN5puwCaUHs84XdWhTsMNHPXmtXVtgjYLAN8nWX4NMCZymBnB5Be4dEYufp",
  "key15": "2Fs5gbNLjM9dN7wJvZraU4cr239QtdvMzorPApsK6JZf9swE2k4QP8joUqwcvuMYhBWKTrKJZhCj1AbRKzJb2XMH",
  "key16": "4HqWamALpx6hfkAfQT2y51pWwM3fW1Te5FKnFLdUxCEHKUrb4juJ8S9LWPpTyRRzJw7bcyJSnWNDH9HTq5vfNNXE",
  "key17": "5ZnCEXL8gxXU9daecaZN7Q4cgmkqmfBQPyjkdps1izVfhA52whvXAuJwUJ99S9uZKNsXWpM1fLrEYZrNnRtE8H7f",
  "key18": "3TJViWAAbRZk2VkkngiJ8W85ddQWAgXqXVc12qxB68JGfceeNaccpTo9zZB6bQRjPRjmQWhfCfaWLdmHL3eQ7VTf",
  "key19": "VTbvussu6zN6Wus7bkuFvRYVf9hDW4ApZAGTzfDfHPbDNkFeqJ52XhkkqVr1R2ctFmfjQPLbaDUeJnweHqmu1ai",
  "key20": "4UeeC1zSnv3nDbE5MAPV7B8BKdnobaiF9bB6Ui8FTB886DCppiuUxpyCtbJ3VG1T7jKoNC3WvFsYetHN6HNwYVCv",
  "key21": "5d9RmzfrYm6UgLQ36UktSJjQF2p2B2X5ubgy8RvCYTTZzcshFHyB41UaJi9TBxgwHPvPv98t1tDAAL7hk4mADks2",
  "key22": "33AKkhuNsq3md7bqPsPz321RQcApcGv33WtGMNvQCzshR2NKYLMmSpjFiVcGtVnwKhjkoc9Lm6AySdchBHFFQSar",
  "key23": "22ovG3wznsGJt5NLnjruE6fn23U4npZHWWjChsU7GNfVCcbf3Z1owpV1Sxj8xCMkTNN2QkomUb8DufnRBFeg9epB",
  "key24": "TLbXAoukuHVidCRmqXcApEZg85CS5ghBU7Ponss4Sm58BDazsnU9B3xzXXZABmqMSW7xvKPZxy1GCWsWkfGrX2o",
  "key25": "5tu79SPepRNs4prL3k9JGNMPjAhQNekXV2EQHGc55nBnmwbT94pHR9R8dHd15PCB4yczdeXKQXRk4Mchrugim5AS",
  "key26": "5SKB2iCLknaEUtKi7UK3vYwDvzf4Mu4PGsx53bdvyKvi45etPaHUyJ1RmonWawGLYm8wRZjAmjsd6JEar2eB1Ho7",
  "key27": "4YCQ2v7z2WrD19YZFazWyW9FnFDj5Q4VmCCwNVpjk5VoWS5jtaNhA7HAvEVNbnzrp6nAmsfmETqA2pK29zYKnX1o",
  "key28": "8CKk78U51U7CA1JLuqqrCCDMgg8vyC2oJQ1XA3jt2z7LTYAoFTpj1pUMYVfzvTurhEWd6E7o7uKPYw8HqWksR3N",
  "key29": "3FRNP1SFoqSNMrudh3r4a8R8rnsHe2pK6k9yJuNwFVT5TN4zyXcWL6qfREFQUKGCfQwszC7Qb9r7ZAfE9U99Tjq5",
  "key30": "2imF82gSyeBeiu68yj2Hk8iCaqBmFq9TAhhrLpEFJfdAqcB3kmgA4KZvPHDygMKt2VfKz1ceugm3NYUjV5bGSxwR",
  "key31": "4qgWuE3P2V1xxAzyiBqSgXn1FWJz642cuxgHEoC9qo4sHMr41Dw4WFkvm1aowTz8TcC1b9CDAgEcsFDXKHrsvvwg",
  "key32": "5RGNVi7JsH2bdns65VBx1Ld5Hb3Apkbch9iPeRnZK7k9fxZh5VJ6GRMdpm5b6iCZyushTJZJzQtRCWqYmU7jfXS1",
  "key33": "5WaNkETPiEBbBJwCaHdvu1GQ5CaeaQTX9eJsCvbQsYakVA5SozDwUmtoH8SrjQk8CsSWq2yPx2NUvMwBU5zZA3aK",
  "key34": "3Up8L7WFEyvtCnwtxhJqt5gNLQzYre2EEYh8JsogCD7m9fFdLVxmA2vQDhPZ3pQ8kKQ8ivHKskq5P5gMEGV9qmut",
  "key35": "s7XeV5zshpto9qQK2feamySGD9JYcmckQNP5yHT5TEd7nGHJgsgGwrvT6yS7BcQap3SDbcnhJLkSMPoS1NGggiZ",
  "key36": "2phKkaGkGngon3evRtrtc5V6Tv4y7UgwwUzpJt34jknPQ4PjhYSsbdqame2ekUKUEoguzDm3kN4qesv9wZvPtgxG",
  "key37": "4h3rMKGuymVSr5j4hvwigwA6YeWA95h1Y38uYRHzPRLw1gspiJbhpbV1qEzZTBMqkm8ZFSC6ogNsJ1dqVyArcQPE",
  "key38": "5iCzgh9WiGHzw9vaxcoBQDF3qDJmcUjtx5pA4V57Wj8zr5DRg9sFfiyyRpEe9fp73TXcwoYV94P31MSgi5NtLgVt",
  "key39": "3ZcmEHNcxtNnr7ANZAMjBwbf5m2KZxpxXJaUQcXDBwXpZKGgpGq4Rs2UvfhDWZ2jpoq79fTWtpit1rHMuPi1WV5c",
  "key40": "62riF7UJNtQTWfPzpydEw5DnVPyc4wjqdiu73SarDqxBoCDpaMb5vjxjFsnkHr5KcTYL3VbHJgsk1YT2RPYPokc3",
  "key41": "41gWUDoC3aUmdZ4gP4ughz2VHqqr8qmWPsTFygWdyRqTCXvmKt2T2wy3TZEtgmTNbaBhby7FiHpsb9HiTmLb1tZK",
  "key42": "PHHUU4mReGzosYxojyvndQSQvN1pGJSfx3MsrRcMpVE5BehR9CmoDZEX4AhYEue5XbEcACZoBF1xGhUW5Y96dfK"
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

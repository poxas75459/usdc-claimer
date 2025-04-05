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
    "3P1ncKP63TrMXVB5favQSh84MPqEq8fnbd7im7ZcNsuAtafaV1KL9VpYTUS7rm5mRDgfCxFPkJ8K3heBvQuTrr8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMtXVDgU6DQbNAAU4EMTE2YKDqwiaMu4BSqNf7UefBLLvWqA9wzVHMDVhmaykcjgYhpYaRMbU3L22gk9yXPpMUT",
  "key1": "39NiUPz2w4heBKBrimdV9P5wfEaZ5GrCJgegBRnHMft1dTKuDPSx35Hv4zfhyFRmGvyN2ks3ZywrXb6BhgbB4x2a",
  "key2": "H3wrE94ZED8nVYKxvPE53LnaLKrZDDEdoRcn2PwbcXoKMzabWkZYudytsX2Vioduqmsfq4Lf9TerkLyFZjXvcVB",
  "key3": "YFb9zNPMZq7MKiVZLZxVnspTYiha2sKkbMuzHKycw6fKCue6zK28Wt4Bhwu8xs9dHxaBJjRGS5WuRq2VZki7CHY",
  "key4": "63cchxGUwGb63jStE1rWEkLRCLUHPcw4C6ZLKWceDKwnXYAb15hDfjWZnu1w2ALCwKcMErMMVzgaDDfeLDb2wAzV",
  "key5": "2Np1nTadvVVM7RR4Kho5tFhAvHqQfySLjNwGBZJakxotNkw3j55QDraRAMbgqV1wL75mx5YcqPzBgK3RotQK514x",
  "key6": "47wfvZx9NvReeswBz7FoRrWH7jEszFqDQ9jbMQKeqBQPb254eTHAyVc31QhZ9gy25LstDcHGUcwezQz6wVGyLf31",
  "key7": "2r3uRYe6RPka7RBCbCDTmC9E1VgbFfRq51ksc1mSNjMuvKwCtYwTR8WZNRQprUNHoPSvP6S4T99zggRuWFZND4oc",
  "key8": "5J9xQ6Wu357MvgwjNbUygzR3HhEemn9intdJPg1mr5u2WL4rFwnU4sYx8a1HxjksnFTik1MQn3nCEv48m9Vd3gKs",
  "key9": "4y8pzgcp8pmfxEP3th9hHe8uXYQtkhThyE8sNKoXAqBzLf9tGN2qPx6baxUUwDZYhKDnqxSCffSyd7sdDjijPUfs",
  "key10": "3Hi4GsUAFXbRpfEgNKqv78sNmj2Djwp5yD8obpvbdsMAjfbBWzqBZEiZPJhTYRxU8dadxLFaYYf7SYb2ShpycH3W",
  "key11": "qrzX9brWGVKDMMTWADKL6EdjzV74ZWqkAPajNX93MWmzvhkzEA3CQvarwSCCsMjfXFMqGvuzmZmhEdLvzckhfKY",
  "key12": "Wdxam3SU5zamZ8bUWrsm9nATqTTNu1rX8AfC9vB5nWqhQLXdSTwZcmTUsmwbjacRCYo9H5xdYDUD7emuKJ8BKQ3",
  "key13": "5qVyqGBV4HH1KkqS6o3DcEhWyAADRkwBgVwGHThJBVRqR4W4Q1dGwhjx4Vgk22X1BvwZJSPMGinacWckQCYQaChF",
  "key14": "2SpYgEdMoq7G1tJNXGrZxY8R35N8Ttd2ZfiPcYTGgtfLYxx9iJK9RMSJ81vQrs3VFhR4izvp1yoUsKAwLZ7TMY4h",
  "key15": "3cvvMGz1G1oaYDvmeeuChgA7MkwMuuivq1NuLpFF2H64iCRWqjrLDuYVs2QgXmfEggcjcxiM894iSiad9CGHwkkE",
  "key16": "5RDjsGHgDyDPV4JK8QU1qu1YQiF2SuAmKzfSSmtdtUT3VR7NVvHXs7RdTh3ynvpDjZxK5HK8jvKCiqv7xZrVqhFE",
  "key17": "48y2Vfvto3MHyBr6Y6NY8zsnsSZdwU6fqw6y2D4MnKXhjqSUMN1VfU7Xbp3M7n9QhRSb47zmZyr7GDzPAZ9rMjqq",
  "key18": "4Kk4CoEc8bGmZnS6QCmVBbMiLzoc8WMQWNnmhKpD2CVtrsVKRBkw82Mo6Wu4oAdtRGMzhXicz9syqmxntXdn5Pvw",
  "key19": "3KUg7DKYEVQ3e292noFNKpbbiVc9jBitk29tAnHDcy6wNU1GYdsFTLVnmgpToDhsDFr1aDCVC9FyLPZ2JivfK531",
  "key20": "4joMUAW3MkSu73tYkKFwYxpAV5bxdezHSRyohx8GoR2VMpF24AuYkHDRezvYtLsaExyvyW64J7P9rX3oWeryxXGy",
  "key21": "3KrkpMCHFR4jvC7xuU8BePSoz6aWoHDrkq1yZ9KmVWCmyqwTg91qhHKPgzN3YadcadMsNNWzP9cVviJdPRjg3vUQ",
  "key22": "3bUouX5SLoAgRCWxqiAAPKZEJaXYM6HkmMvfL7KiSUTQKCNPxS4uFhdgBbLSWYTgJuB7dYYK616xVwLtwhUnK9W8",
  "key23": "5HouaYnTC4YCHLhSmHvgoV3e9r6hL2iEryitbVMJtDKm1yCtBt7S4Q32e3HDxenR3GLcn5TAxraVEyPzXyXXiDSA",
  "key24": "52hKhaZPsfyANAk8utt5wtPRmtnzhUbw11rSN1mYKD5YbUnQ4xjdHrW7je8BH5NKKzd4QmH8fYLd3KVLjDnUkuna",
  "key25": "4PztqVdMcuinNkUfasvEJWCTdk9KZs1ThvJ96G9xe7v2sXS2AVzYRYucQTzMHPhesDj8wEFJAgsTGfNxxqAxQ2dX",
  "key26": "4b6n5MbVzZFxQARMMpdAabHB6K9GzQBkrXxLh1QauUhysCF7J4Q5giSvWGhJSNzpVK8FfKD2wrAp1En9BbKQ4cS8",
  "key27": "2hryM3FWinUJNiBgUi4cGyWmFvN9jVnqJaWA4V8EvsP8VDpVCgjVGJFdYoLekm4H7KmuWMGLtAn77sGHuz6pgGDj",
  "key28": "zKiAn7Tb48hHrpAqSLCN6DfYgEggRW1dzgamuYDgxBr4gkFuhtuiy72kuQG6fViuysA3dqUspwiySvcD1Kka5Ko",
  "key29": "EJ2nhywjbyaL4W4goPQbWa6SaBbgV1DH49Kz1TpuZ2ra4S2248ffwGGQ7hGi6AcCbk2wJqJUsuN3rgG3GVwfbSU",
  "key30": "2BsXPwWZGPTbi7NKEwdkBakwPywkTd58JNkVa7sKoMpt9Ffn2ncTQs3sdyPNJ3rnj46np4d9wonBCsqtPyBXB4Jy",
  "key31": "5enr6HFVgrgoKXLhSJLWP6cipgCHFPq1rnAYiS2wBm6bBB3Uybr1V89pS3z7ySEnPaRfywP1RNJ3h4d7nNQahU5r",
  "key32": "5vEfKTU7gdLj4PTY97n1nKosTbQvuZ4F1bo561YR1n1hk1kYiogBVXm4RrPLKaLuDfKKSkXGDX31u78jLdoQ2qD",
  "key33": "247rFUndLDS7r6gybKiExNk1fi97rqtqex5uEpFtcVT5bLtS2LodUQZf3RvHkid6UpKSDkgSL9EgHAvh1XKy9Zjh",
  "key34": "2dmGudiCxD549uDEjWzSpjBWWvBAArLHHFRkW3jXvdib5s24egBF6pb89AxmY7RtYvVosj5bN1KJGUs1L1U1hmZ4",
  "key35": "2KnJcdU4QRjTqdC2ryCvVRjWc46efMDuQWB73bQQLGdSszaDrEgovuji2oaUhZVQdN8bkbWHmcE8attffNmoUBLC",
  "key36": "32zCv78JSUwN8UehGPpXuuWShDn9K5oQwPnzh27oQUrGYsJE1KvJZKDzbnWnDxjkcE2N364Lrpwt4cv17B85z6ij",
  "key37": "2EYr4bMoL3omj1Fe9N8Y414dsdDvb7NN9aXLypuMrmLBmGQhhTtrHx2wpCUF4Umes6261SaZ1xH4vZmW7iybwcV7",
  "key38": "3hc68c3SWCNMdUxYkc3zbWaJg9DUKi6QuTpynekNnSJ43numpQBxiwXA9RZL978MzZJvK3bHPMQtTi8MeQwnCcLr",
  "key39": "2WxyPQRGkDQrcj25uqG8zfd92i2ScGbj5wizxwp99U3wfax6iWAygUuqQ1a3SFdb2bBWypkWxaKK3fSeu366kyNx"
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

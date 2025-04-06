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
    "566RYFL3tHoGhEMy9JQXEmcpfD7XYbLMRhBai5oD4HVgHDh858CXxDLaK6wFz6qw4iw1hqTpMZABbF9fVXHPgVk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1xv2vXxXeKTDHMmdg5BAJhEUfCWz4yqpoiESddKjXXmpdMnHSZsXcuJbfLg2TTWb2AMbHXatKbfWucyhXre1vt",
  "key1": "3WDGKpm27FDMsGZdDELwtiPKoZ1q9ZBKrnSB91nSHvodMRoJCRqawb28mKPTcfgWSCMZ3TEDGFYRJoK74Q5CPn5a",
  "key2": "2zreEXLDb1pqucx2CqktZR7GFTDQs5J82vJT9euv9u93tJJQ5J7xfKWryBoRztGm6v5cRhtLPCDzLuwh9FUJCmA9",
  "key3": "sjtourHSw6uG37bNHtBYNhjVpBecviKxAHQSUuAunCkkDBBAg8JwXXWfaqQjhEZbULuQX7WPS6EVqSHcwvnh2GD",
  "key4": "aYxbHv9P778tS7MLAVZqMiYnXv23sUJauaE4BW42aJABFU5ePmRZWa95CRZFpv6Ht91ga7NLEBxu4ur4mvVzrJz",
  "key5": "54CbWHUkvW8WP8JvB67g6Fwp9niTW4EjpkniGkbYH8PxTZ2VHdVFtwSPp4Tn6feBoX5SYEHDrMRQa3s5Z9rYVorA",
  "key6": "5c1pKrkhkJMHg2exGqrxxrGAtGTEaqnRPzjJgGW1qSeQ1zGeBVg1Ag1iyVEga5qBrMimTih5qzMkgutDj3jpFdpn",
  "key7": "2jxZf3ZVDLK842YT9VoJbA2hphY6LswfVKa2C4Mka3wS2DUwFg8Y4c8ce8jFvT8kaggv5cq9hB3pPr2MXp4y9iUa",
  "key8": "2yqWbCVphuEuusNQMAkfYqEFRMmdu8ZkzkGutfC6q88M6TCJwcxgw5nfxXHkpCJseVgDHLy5oeCnpPkcLAEEMD5p",
  "key9": "2AGRNJXPh3fAynW5Cry85km1y6PfvHNhssdXPruLGu8AChtwazivUNrdqRjbmeuWgCztVswQ9WTAAuteeor6wXmT",
  "key10": "5A25HDtxHcpKjztQw154DHZTyZBw2WqZTBfw7SgPArfkcLjEFD4LwstUH4LMYXtU87CTZ7rXEq8MxQ2V9NkCyNVV",
  "key11": "5GWrdrkb63EFpxKtU5iTcSN8DdpxEUGT6b7hcTbu4PwhzVYCxNxoeFy8swr4du99Xqd5SNBRkFnh6M5srtTSquUQ",
  "key12": "4BXWdNG8BBBT9XGzKk5MGzRexUyMXsaVCTe6M6i7S4Gw23cEwAsdn5CND3S2JjF3GfKpXMcDREV8McabuKGFqHcL",
  "key13": "5SUGWTyvjQMfia9EuDx9GKjhUDLjfPwDBvWdCZUAQgPtUyTiWfnwFn2SWNqNsdwnw7y6k6eUebegpGWJoBGDVvJk",
  "key14": "5A9mcm2prJBaeUbwkWbEDGYky4Z1wTmeG9baF2mVaz7F16Cxyjmt8aMJLqFYT6mwx81S85oojjg9GocLN7LBsbkV",
  "key15": "4Rfmb2uiAhBpZDN3HaVSbkEcmDzLkeLQBineH6Roh7NKaKLZsSFeiKZycZi9tjxQuRc2zq4hkxdMFnx7TXdrNi9N",
  "key16": "35cjCjwaYXQsCZFQESgcXkS3EEu1SwZw2Lvx4rCUeyCpii3gCqQhHzgFJYbAsi816byVXVrLq3AxXMs32iBsCYFQ",
  "key17": "4hnrSL6LgwGaumoi5efCDeA1WExEiMZVCgZPj6NjMLtmkcjMSMv8T92Jrf6tooGFYZPeuEktYG2EQAkraXhYnoGf",
  "key18": "5xjGrJnSSfwnC2gCsJ62iURJ8NVjinhusyZ2eLwP3xtzX5JXoB5HBCYq9CSAEdcfXm3nUULywizLPBn9D41PEqXt",
  "key19": "51QLWu3PaNXkQCp44uWmXmuWvnZkJu28yZPuq3s2nAYu9xYK1Bd9jU51b131PswqZYZYgqufcKg3CkqiVi4sNqao",
  "key20": "42K23nh6zmZDq95NSdofpWqCCiPfvFGSs5Z5Lphd3i476zw1bZEjzbwXv1NA2WmoENuRAKQRkn7SwkRNq6PbVjWt",
  "key21": "4Jh5tm8EGpkTm61x9Q7GdXihN1Xd3jbHHAXP3JaE5koKhx2baJeKjHiRtWkLUXxoji1zhgMkuFyStUSGe2dacCa3",
  "key22": "4QW7Feqss8t9ij7sUpsrMTitnXzzh8NACXu1YybGT64W5Hr6jkUHxoyGWo5bch9q3fZEtXct7YfNQMu8jDSXFNHi",
  "key23": "2NstGYxfBy3DaxDQd2DbUSjUz3PgRzG4JWc8x73y5F3YsDmJhzx664c81TG5J1wtuQCfnqKtCT6PXSR2qaP8R5uj",
  "key24": "5qEah8WSwTnCN2zoMThcfXUToHRD282oEpWjr7jGsdbVvDDEoeUmniHABh9AW3SJkGgiEZUtBGtzFQ3jW5512cSc",
  "key25": "oVU2DT8Rp3L6N1zXg27qMBjQ9JaNjjqJ1TWQB1AUpHdbbaNN4EzQLzDorKfVUW3vE4k9iZDzZL9F4WdgUz21UtK",
  "key26": "2ns3bcoMAHuioJyQMnTKZrWYHVW6f4HPq3tU9Bk5Qfvhb3YTUTXJnvGsXKemyi9vYfuLzGXwfKgLkk1636SDp5oW",
  "key27": "5GLt57z8c2kgffjeXTKSUKZLnTesdftcsRyuvUDU9LUaQBEp7qBagVWsPN51qqfjSPq9E9c27vwuC5Uj8MNhkDWU",
  "key28": "SoQNZgLLWMJUJFvduVa5NsswZMGtCHmpPhmL683xaRjuJDYMN9g2BHE1ehgVxSooA1Ue35Qj8wySmyu8SpWTduA",
  "key29": "4No5qGRyKEwUtXvD5aSaZL2SUPQsVDMJNRCntYYxUo97bbZCRiGK7XTyu6mewxi2yJJ28qmvk4S4TfdqZM1QS4V4",
  "key30": "4S85jzgVU3Nrvq9X37ancsPngGskiapSjQTAWqCgzV5cPbgbT7g6Fj4UjBDed3ps628DpCtk2rKEzyPfo1deSfVC",
  "key31": "3HeTsYNKz1MAa2JtoCu97S4aBj3BvRrsb7F6dVUzmdHPXLBx3kkuUy5vyKo4gjPnJgF8sR6pr2LfjsT9jF2MfnEX",
  "key32": "5JPgDVxMCdQqEDwadkqx1LJRqAFwRD6PUYKa3DjfAKVu2HjRrmVa6xPrjTD4CWWkUXXKh2qJg8TrYXMZ7WMM5oKf",
  "key33": "34Ms3h93hHK5WeW54fq3KjcmLVgeuFC4dnwRsav54Woh1fr1ne8HqvkjwLtri57b78XoN1KBMvwNS8Z9QXpzDyes",
  "key34": "2yJWoM2i2csixiZBjC2nwKjJ8mpwCK1EBPrYr5nAM49iRc6jsp1uvRQMyrEzg5mj55PPX9sEaY9mcCkStrkaWdLk",
  "key35": "ndyW7uwaAL3PE9tVnWC9ycEuSgBzNJgwZP5pyxiLcAwAfkbKghc6qnmys4R48vkEQndzSFJdJzGouvkbLJYFABN",
  "key36": "EJxfKPevP9QTzoEkRWCw8jmcUxc3hmY5QtKGxaFLpXqB3w9RG8gds2LK5zZqLPYY7HkcwkERbjeWUPAwWz1CWXy",
  "key37": "2xKVv2zJrnZKCnxZjP59jcqL8kmxtRD8BMpEa6hYPcVcFWCH5GBsL4HhTdtddwqWudsagw2WPVDLRnb6tJ6LUcki",
  "key38": "43XsnYgwkA49224zUG4C3ZKGb8L3xSoLgSquniEQNNJVr54ALYYF1kZTWsoRJDcxTHW1dbebXnLdkn6k6cF5dV1q",
  "key39": "3vpCwoHXbWqnvAVczCmjAhyEcWz5NeDzv5ug6ozMJJbZeMiMmyL5img3YaHPRcdebd58tMekcTd7ojbZfCYpycPi",
  "key40": "4s5zs2qbRuBmeg1VWq6yNiBYm9KzC77g86mDdph1rYSf21YSE25XhywcamC5FDKi7Y7egWSRdri9DpmehGXCXRVQ",
  "key41": "5RAwLK7h9SnCXEasDX5N4FR76yvKsBR6WuC9VKHTJ4yc5CR2EmYR6Qn8ztz3PRBfTraRq8kNMJo5262H9efTHrSg",
  "key42": "2RDVtV71pongeccueiaiLnd7NbdzecsGK33aCy6EsA4AJ826GAyC5SxFsrXdvGe1BrKcQygEmoQ8aaq5cGnX5QqV",
  "key43": "2fyPzhQk5RDLtH7WqBdbGWjczD1tG3SuypbG2Ci9xK7Nqz1ny8tqK4mAwmxTGjjr1pz49rzL2kkNDwUmK3YQ3xN",
  "key44": "2i2SrVtsWFBXU6uaRjWeMxbDDxHZtFQQK5SRTr29QSZwVRv5z55x1VWkWdMVyA8FmjBZvW5xs67uto7VcHRdTVti"
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

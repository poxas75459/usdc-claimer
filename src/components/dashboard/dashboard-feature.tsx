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
    "66y5H7czrka6tYicGpuZxhcJ5EC5PM5zZrTASwypxKeW3ittGG4EMUMLS7KMcXXdFtEc5Z4ptXqXTBVAUUcYAEAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHpLqGzjAaEe816Y9N5WNqNJwERcV3c2NMpAFAM27Vtfid8UqCrHSMzNgXmr9ZQPMRxPwKUB4FDcKykDw4bhTz5",
  "key1": "39SuftTdCdE1CAkztbWUCECU2uUvFUy1F6GHLvDrn7WDSFCmVhGjApfLevDqWZTeotnWfpe6e7JnYFx2hQJtuCym",
  "key2": "3FXheywPesJiGC26SRW7r7q1gETbMvgAqR3r5DikByq2uTDbNmGS5zAStoabYwALQhdGKNwTrKG9KuVvij7Cs93N",
  "key3": "5eFoHVMi6pwpzX1bHoWsnKzNMnvMKT97rygBE5Vc5E38LE8VZj4ugg6sWEGoce7AnVSS7QaSnMH2pUdSCgLSZaSL",
  "key4": "3xMzmSDoRmRNoqsr118er4NMt1oLznyysstxGtWJHmyKhFeL44QZBLKhhgvhBpaZwgPwGaVkfNEwZQh8d6iY6Ewv",
  "key5": "2UDDJYwBzHfqdaJPLtVi5AKbKYzCFLwo6thMtppZmAtkjK8cuWoJfBRNJXwmSEqU7htXef7D6Qjj1kmFX2k7FMvJ",
  "key6": "3JfdUJuDvCK8DjHMeusxVKTGjphHZo7gXtThoUSYQh8X3zof4TngWQxtRkpJgAAxmnT4DcJMNvJ3wdD1UX4vw22F",
  "key7": "3Wgxt8yvQbskKR8LMfHJ91raKcf9nnXDmZ8PQX8o5TERj91W73VdHG7jB2RKdtcuBr3rq1iv6wNh7NravJCMuoWJ",
  "key8": "4zQG87AiXH86fMYehAEN76j8tjdFJinB3Mjxitv4iMvnHKY5wRuyYAwW2GPKAvvrCDGVAJxDnap4eufa6hSDNrZB",
  "key9": "4giC42ZsqBsiwUMEKthKZaE2UGt23bLwRPeHu7hYRSxQC2nUeJGb5dVmbfA4hgHvxdCfNp7xsbJv1a4HidVqNkbA",
  "key10": "ej4ryGRNMTkKQLPQ8K9sW2aM3P79zsyNWwJZFvxhGcmqN5ECRX5jfAwyM3ifKst2n5MGUcZC3rW5kneKN61oJfp",
  "key11": "UrkpYPJgTAn5zKYPNtTpmHNTgHt3i75buAKQYwz4a6Kp9gZAuWNRPmb2n7zWq1pALr1M12cTMukrMozh33EmZZs",
  "key12": "53EMpMUVcguS6Mh5qf2AHaSne5CBtJZJWt5erhQ6CKc7FUGKs6fdShvFN3xtrHj5FtuV75WE49zAYWLKMxT83huW",
  "key13": "4qbtFSY9Vh4uQRuoxnhywagqjWcxWWQoXregH6VJMvn1qX1SnutRqVHHhKjHutKSfZBkPoDxwjR4EsX36qKSQz4E",
  "key14": "5x7qZtfiB1LZ5GbCLHSH4EcMWzufUCKx8zsjKS21x3PHSE1Zs9Cysq1TZG18USpxL18tC1nqfBAA7KbWGxjDMgWL",
  "key15": "iPNWCUEnnqZTXtW4Ny65KKMnEs1gniE532VAP3vujkZetGRmHUjq7rQcyPdCZW9FeBSGoXveEGm2qyk2CuWkiSs",
  "key16": "2djo5u2cJPswphjSRqf8hcQXugqWpKwArerLAHtXCwE8sWMn9wx438SeQfyFa1diJcGJcWBDm5x4Z1ZmsFBskRxP",
  "key17": "3d8j2knjNAqgQaXnTeQWa11MAkCHwikgQfFC8juVceDTfRkpwMd5yxqZUwj9WfqP5tFDtif5s1qJ7La74jQ4B2Fy",
  "key18": "2vEd8MscKsaRjkBxH46VenYeDkqfpyokK4Xi5Hg96kU87yAuQgi7LNXQ7TbTStG2EfixyPzWoC82TmpDiKFTvg4b",
  "key19": "nQxgqKpLgPGHNtNTA2Ky2bZxqXVJFMRqvpuSDwemL1JU2WLzssitpetYS4atzPXHRLvdDuSscDU6dotyRwDFkgp",
  "key20": "y8LV9Fo6Vu2qqnE6287fpmHBwyoA9VECrJJHK39vFcN7Y3n5bQFSUmCA9HikX3XVayPcnzqsU5QE6yMatHiZkNF",
  "key21": "b4w2H4gGQB8AiEosGVZUwDezYEyRPzd89T1f8ndpvpxhpzuYVfNryjB9HmWsgsK3hsG69HYdZnH4jwW96TismS3",
  "key22": "51QLZpKA6h2bCuMzmbbHdzo7i49Zven9haJrzdAN2nEmVHSDzBb8TBotWvApVx6VnHQmkHxZuTkjHc7yZJxjdhQa",
  "key23": "4DXv1VpXgr8rTF7uzXR7sMLB2hG7hcs8VdKsRXoJU1LqNNENyzzm7VrUF3QoMsTQYzH6TKdf4X6q6QVExQXFFyyx",
  "key24": "2f2ChDnLawc5N5yLnen5HPyEoyEUwNhuvn23YLejrofSnUg7QBLyEzHXK4ykq1CtctSXtkibNWoA2bSrGsB922sN"
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

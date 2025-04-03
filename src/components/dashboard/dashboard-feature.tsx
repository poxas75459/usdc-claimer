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
    "3izo9YkR6kygURFyKurxmLvgn2FMh3EQeJWewsDtKJSuWTzc8vXzvyTJqaRHFg55732JbXnBx1nUVbd6j2H5Hvrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4pzEHJzRonYDoWCTTmwJqVKS4pmhQFkPE6CcJFh58jbPCoTLXZycyj7rmQMWnPiR4QDVTn43f77mNhpR1NLsj5",
  "key1": "5wqEZeN44QjvWeK1cZW1S9NT5UiZmRkyNgb75hfKGBn75Xgf5LBSQLgVGHn6zYtvoDM15kHevEng21tADAeqeSg1",
  "key2": "5TV1nTUQpRwgVtf6coHFKxy5FESEFyRJtkgK2jiKFVd4nYX5wqf59Ds6cK8nHPJRTifTp56gWDudw2Xg39UAJ3ra",
  "key3": "3jhHFYvrh6fzgLGWPQBCThaRSsYwS2Age1HTzQsAR9vhALNbcA1tzU8iW6a9rpXfKNkp4av9ZFsuF8fGkJryzgnm",
  "key4": "29ZF2JCYJDBBA4M83fdosv5TYDgryuhiqtk5jwdDaGffQfTVSGKMnWmR9tLkMcdbbfcyzjvPVodpdk7vJEg6msr8",
  "key5": "4qgZenosYTDeUrWUkTrBx36aD4Y919WLJDmG575tj3aVH59AM4RoLZqCEwppFYypJFmZNcVaqFiv8neoWYwckhTA",
  "key6": "4TyNrGUpVUEWegauV9JUqEtpwv6CdpuVy91cMw5huQEZ45hzH85d2fxcfL9dzK5KPT99whPthbyjvjFXbsL388mS",
  "key7": "oAaf9MYA12eWD6erSQgbLWPqq2Pv5BxDM5JJA2ckyu3suidT6zPTAJZPXgoBV4bCpeQZVRrHciRp79WwUzphTLh",
  "key8": "42c5hFH3zE1eHMiZ6RtmX4e4drhQkw4QJpcbn9ir1JYjxGLpsMs4DEFBwJhHS3av9uvSwNq5MGjW7djMdsWGT5rw",
  "key9": "64j4bMvKQPdUmBVUEcGxc4pGB6ahSfso7n1n94hgZ4FbJ5enSnRkoNZZnjJyTVHd8xJv2unc6uUTsRoVqbcgpH6m",
  "key10": "4ep8yzAVynKwRapAy6EScyVZPeh7F1S9EKiSfAmFNp59ESMmATuoKSxCFPgtgvsG3dSR3vHpzf4ExdFqCfKAcsez",
  "key11": "2RCFxti6Qa2PtpB5iZHWt3ePTq8wzoTDpjVyhtD8ehFVZ1domwWDRXYrRs9bu9BPVWSd9XMvrv1YvvCBi3GXzrrF",
  "key12": "61XabPWjZaFbQpjh1tZ5EuzpQmNx3kYAEtHgCJo7arAhWq7yY7KRMuemqcEL9zwtRGVHssEbXWm2s5VvnDVRu7er",
  "key13": "4eRSfDLq9AqAQK3H1H5QKqtvUb94v4Zap1w12cdN3NntVoTRkeRYVtnSPxkyaKD9cCJbM8eKiPW5E46D7eppzNBH",
  "key14": "26JZ8z78mDpJBjqwuB88g8iT5GQuHsuQmPBEcHhFEeXDmdTnpd3tRW3xbBqHdvG6sfj3HfmQLHz1EwUMrceVZn5M",
  "key15": "4yByYY6B4Y97E6cAnWzGe1b5FxnRakxCiASDVV5bwuu4wcwfChfY22LgNCUArbq2jVTRHqRCvgtV4RWJMm31SBi9",
  "key16": "3mkmE5KBb1bzQou1XxnVb4UJ1tTeAdNdiLamdw943fdcczZwwSJnvKQTMaRnvaVREPawEzMtRJXzkxBvJJdym5v9",
  "key17": "76KVMQBDzDyXk6bbmaDMgKWK58XX74UVSChY5CEGPWM3P9w2xs6LeKP4PpPcWDDWbadqK6WDd2kDqsv7V69yCGd",
  "key18": "3bPpTLNjt7hpzychw8hR32wYPtobDSXDMTTkLh9f34DGXMkaUA8X2dp4ms31MN9Y3EPRh6YqPf4FuC5eZbgwq9nv",
  "key19": "5rNe4KDuqtMvn7c2oaTgBMrSJjFYqiEEbERQBUxdhcnv2SkenjCaSRrziosEMfCjR2H4RzEeNhQsjhZQWXYHpLuX",
  "key20": "2wffkK6dZD6PH6PKbTuS3DLaaFD9Wka7jGy9q3RH1ADX4d9gm6c9QjhkxUSBzhCPex8fzxYLS9VhYUXYhUWnCZs5",
  "key21": "5SndSWLzNbijgbeG26Guv8H5hrfZkUmGSZVXYGV26McVsysudRyg8EKUYJLnFTK9zjkA1yBpckEbcSTr6njsySuH",
  "key22": "cLKNECV4Lfk7viix4sxJdxGTHVPZLwPmQxV5a94RweyNJT5P98oeruM3gUjD2dNDjPQnHrfCe6VKYu6rfQjx7uX",
  "key23": "2HcbegDxg2PjuCiQx5dCFN85JGsrSHageN4wub8e6hnxMzCsfGp9hHv2mexPqfsS5xkkHg3Bj7is7u2FNqGBCFfT",
  "key24": "3SdrXVrhQkotjVEZs9FPRa8jHBkR6Ds7VPyFtCvgjgMxRMY1Z6V7Zet5zXhNH97KRiQ16cZ1XXQMSTUbHSXshJfK",
  "key25": "s1wH3tKmC5a8kmXds5YgMhJU7BkUeEyj7ZXdum7u2R8ke2t5Pbg2uS5WKapGwUcMzpHCgErvCEKrJMzRLRGWnB6",
  "key26": "5LgAMyfmCtuXh2DNwW9uLGqPG2dwNrYJiKmJHeHaife3yZPiN8LdVoJZpCtdNdxCSy1UnuaqV6CR6Un4hdv5xkJZ",
  "key27": "5fc6jtjr2QKueiWqgTrPbabVXeo1dwhX9aTStYkuixmNi9AUK2fsRLEUMt3DCEfrxDmWp53B6Gmg27Zb4168CjFV"
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

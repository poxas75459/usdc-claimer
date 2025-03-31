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
    "4BLyK2pZsTymLCrU5LFTivvvXkWqCKeGVqeVZSnkkLxtHMduRGJ4hehgVYeS7dgynPfo59gVwGqkfdA7NZdoCzEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33GVFXNqEjQktKVn5kUzpVU2tQrmBfegKQWaVUF6we9V7zutpw9sDj2yXVAM6AshKMkaypy3XzMpoiwUYoubbwYW",
  "key1": "3B3AKoAXUtK5MhcQpkhvPaWvDHPUYm4Z5q9GdMJRdLpwNQNBEdbS5Q1dKJBxpTv858u6aXm4MeGFofMP1HrxxxSo",
  "key2": "jbMoB6AnZtdoMPjf24T6hx9vwRn7YUwXFKNhvDvNxkTvNwd4SFwuRtW8zJhuiSrdU1QvrwJPjAbpJiLVrqSkq6k",
  "key3": "62V4Z3Wd3XPv4aHhEZoum97T8p5oFCHHg5QxWAUd77ejDvDmweD35cydCPe6sg12yKvdtLoBZmYrz4au3aYBDdjH",
  "key4": "2SwsNGi6udszw4k2GTA1VsSf3ohT4NjGx1TtVqqMSmSicFq2wchQJdd1YDPpGvAqBXTPHkjWQCkboHEW9mFS18gN",
  "key5": "4zhFgYntbjyPzoxUfsfBH6NCzgBW1v5rckFMH2enFy5ADCUiuuy45dMEvZXexmYZKc5TseMTHMhbHr7JC6KHCXuj",
  "key6": "23iFDhEkgyAFEk7itiuKaRi8M2krvQVC5oM6bLAJjBh4Vt9zATgmdAUb5X4tGpNn6kMDUNqQRwxhBh2P34ddCgvi",
  "key7": "2XTy1rp6dDcXaMWsgw6GRXvmLZAqUB6kzEnAkG7PncWHG7ULxM8F3eV2jvkWnZw11LKjekXPf6ceLTVxp8rvKxXx",
  "key8": "2nx5VW4dGGLAWHpBnsPoXyuHoGv4pyfQjYPHBDunYeomKzUVq5e1pW1QKSe8PHL13i5bG3vzi5XmFDQTVZb8eWUn",
  "key9": "Meu2PVatPDe93NcMYXBqo6qjFBV4B8bo8ftNL1x5jfWLSqxQuM34DokJwgjGvYtkPLBRNFwiANRVDyTk46Utiji",
  "key10": "43tzojryZj7XFDCLZ1kdHJgDPgwFVtMEejtnMjXvhiXCreA5h8ovx3YgDjzFDEpWbEBY2627eueHRsBsvXGrgM2a",
  "key11": "yBpHSsWyq3eTo9FcNVvdWBYAM7japVawHdpdRmiy3s41vzg1YqS1zCs7UAUzt1cqt4FiP5is7KVwCZdMvV1tK6m",
  "key12": "3ru33agKm9RDm5J1dFcommNZxGqm5NG1f2PjaabLpK1iZFWEyjaUBuCSw6xwaAfGQYQv1fD8xbGvn2DDs5WhLaA7",
  "key13": "5PiUhTd5A9McvaZCPciWsWxZfXd1CCM9y6UWhutBLhuY1P9YqvE8KkpfeUKyk3VXUmVbjXHLTEisKcGnQZzgMmkJ",
  "key14": "3rC9v6oNGZGCnntW85HQRAQazE4c1bw6VLHPcaBAM68jqxWUyUhy35G75TtJgxrrvoRvaZb691jcnJx5KoqoAhNs",
  "key15": "4Zojb6AgUtF6D8Xvt2pfiemAsNQSC28DmNi5dr9aJiCMfWPkC8TrMsk8goRo8dpaa8wctb3CqgnafnoHBwYzULgN",
  "key16": "5bzCwhHM9d37pB57Xt6Co7nUELWSzTbyFTFaaPQjZFJV73KRMoKosxsbm2XbLk5S76QGNhPj6TqS5CgkrjwkLmcA",
  "key17": "52k9eyHybpQQJra4QXAXM9TXX92tqCjD5mptFfL5gJS9ptmAyK2fWyvh54QNscsWGdYbVEwqT2vJdLTnqQcc9BEq",
  "key18": "3ehu6Mn47vN41oFdNQK3bNv3KauXUUWu5JXdynwPYBgvH1oaAbc5UXziyZpGNm4mCaJDYUvJkFru6tLHjWgHT6f8",
  "key19": "L8EB8LEUoWFNbcXqtfCPhe7pTH1Geg2CqMG6dQQkLYywkpBHMG5wHroLWwDRxrVCSDQrqfcTtoJJ1z4DHvEnaBi",
  "key20": "47ZDPWvvMkJRBebPg9dpe22sztmTefz3A5Py6USqZ8gD42Rk3L3L4iWwa7LKaNHwxLLcjBvXZ2pyZgRjpJ65KJY6",
  "key21": "5C35VmQTrXQ8mZ2yX56EruBGNVDhUWsVpaPfAyQn38nZSTBmmbJ4SFpr26oDnkau6f9XfoQ9Dupp83fem7jyUT7m",
  "key22": "3zNKu37FoKyiMX9fSs6DFJrbjJToTPMV8W1b1arTYbEwg8wJKKoe4wxP3kKHibbMVuJRamJRR1bMt6qBnRLzEE1H",
  "key23": "26AmsHZpR7jaYPPZiXMtoKz7nm2A8PoVVjVRCok5ZJcc4ajKssyedW4hXC4TUtBWZWEdSr6GeCw6qqGymyKdfv5k",
  "key24": "3Nmeuqhy6A3V5GKh1vHXNE7VdW1AisQow4WWVnZ21fLmxowytxkdYsHrNUGE215jJvgvqpKFWdrZshzQ1Dwbomhi",
  "key25": "HvzWtjbww3cuJcqzaA5Y7Pwe8LiREmjkEKwTDHCqhfgikhC1UMYjndy9PmtVqvXFYwTqV3MNjnLePJJcsafZfwU",
  "key26": "5oaS8hzTPkpDoB5W5gLosyvSDufk3iFBFrLUty8BMb2u7M9SRS71DVuxqDrq62xN4De9nAHnCeJUCHHyemwB1fki",
  "key27": "3pE6BQsyi137bWn5z2kP4xJhRJ3TqzWRPXe1C3G47e6qigTseJhjVmdHYjcLjAxxNsccmbskmXHunk9dJ2NnYMig"
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

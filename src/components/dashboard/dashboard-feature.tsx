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
    "2r9NLKFjUgBSmjeAxeBurf6cazVu3TuAJssCbc8mbP8pCF6bKCAN9cJ6hBKhjYrAts43E6SzXqzqeqSPeGXAAZCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s88DgTXQqBGHBpSjLY2B2pqMiXqbuYXCnGdLdSiQeZ6SW2aiRUgfDhHqzJ9sLtCRSghjEHyNetggCeGeeHc2dnU",
  "key1": "4Ym8HmF6E6NWKz6MBD6T4peiBL3cwN4ChK1HakNn52W8efT6tPY28D8uwJGXZ3doXEtamQSpYLGAKAE6hwriL1iJ",
  "key2": "5CNSgEdC8xsis1bo689mC3YYF8jZUt6u21v9x8j9kj7EyrnwvSjJCDZ2GY4Dd6uH8uVT8Ma9mkjw2esWYjNfmvtA",
  "key3": "4FF6Zja2ZWHfk6zkwhpdu3uNcTm6XWWcqZRcumBVYEPuZFkN7T9bjs8Lo9GasccYd8XGrqSCxeeEZC4mU8bJiNnd",
  "key4": "A6DT13w4qc2rW5oPFbsoyFWSvbtrhbFn7fUDmFK5bT8dsdVig93UDBNZBi3EPYH88vx2QzLxHuNbnKFJQ4xc14M",
  "key5": "2mq8YBfKCoxcCqNwRyVYwPJViapwyDCJBaJhDektY4vrrq2LQpPHA1BwnLtD9UPjhCogUiFbY9nxiDNdLnjZKb7N",
  "key6": "2TNHqJenLWS53hCshn7Du1qxiySFjP5ky8uQatikfSJfykxsRVwagVf6UujVvTVNcoKGm1PqzM25yGLHqUdmFzCk",
  "key7": "5mM4S2S9Ed4CQTeGZGy5UJgYDGNftwkyx4gvqjdBj7EwfLQxZhZLsnMY9LfdKpLMgEoNzxonRUaJa4FbkjqNP1Dm",
  "key8": "322WHPRqEWoF67cEpDUapdrYwXyiHxYXiGmgnNfFYADqqgZhwcZ2RqAYzXBi7KVi48p75yn7HLVX8TMZJv1FkXmd",
  "key9": "4jcxA8fyTsfw2gwfKUZp6DJTSh9eMzcdM8ywobBk8cFSgJj7eBj29Uf7SajmXZsGJQFBADUfW45KDcPNgC7Hr7zB",
  "key10": "5VoEEHxqbPJWcEMuN3spxf1s3bwjYiqfrMWPpqME7gugDaMTKCcXmemuH9tmrTqm36GZfrbhT2gczNXQEQuXjSwe",
  "key11": "5zH1CBm6XMxefL2yUCkWPfVz7Qasa1HXFiVTX44YCC8jcwoobSFdSb9BE6akXT81CeFgDa6tLXc6LSEr2rvnE1Sc",
  "key12": "5xhkrrVM6tgGes45i8wGFnHB9dL8rHRj6wMXoe2s1t2ZD36NuUyZyUPbVMEjkPvxgMSrvr4kk3QQdMpQBFDMG9wS",
  "key13": "2zopFcnKw8F4mKneK1Run4UCoLwJyKqSgjAm2y8pRyDvYhrCJySJveDxxqE7am53hNZ7dCk7duj8nqQ4RAeAgZWc",
  "key14": "irA2cJknwP6h8mxyRYf5WAhJKSBa69pnrm9yWsn9SbXafPujknsokyv8FoJeaewe8XRqWrhnG62V1L8kFcnZXtY",
  "key15": "5GGpCr6g59ZFEdQsxfJEdW7JECg63JuxdQj5Z4DjzvgCj3do2du2VkT98XLPe2XikbdykbNAcakCdTLdD8ptnAh8",
  "key16": "TMPErAAoxuJY4NQkWvyqxj2bnKoeVmrcsehmxpYyF99jiDQN8YyGsXJvxK5dhXZewTT5JXP2jvZK5x2id5qEGNq",
  "key17": "zfKvwyRpVm2PPt7mMvTwcCbgEpbZmmL2LLAkowxULQ8qah1UvxzXuKuxRAgyhEM5v6mJxFJEAvowyPK9TbAwve8",
  "key18": "4ARLeixcFdG7aWaKrZ3DHoRvy9p3UZ5QuXmSvq3R4YV5JdPHDbXQAPpmrEMBYwhr6QMJeF3rJMn6F61vU4pXKz2e",
  "key19": "49xywUzqqLXt69tnCVNHF8VLZCy1swi6gEQw7bLGYWbNMhLAT9i3SSCeorX9NfCWT99mKTbBrc2UyvsgWYsbM4nQ",
  "key20": "5jc86x48hiv2SU9zF43DvY3U3c6HeBTJuqrM2vfc2KfmH1QYbat9ckijTt2dnwi1jCEfqakM1eRo4QW2yDXrsmuB",
  "key21": "3nC6J8KTcSWv1VxjqoCFWp5HGp3GAp56fN8UVMzyM8PfZgYsfUG8vuGaudZajXb2Jdf6j9XXXf2UsXdLqnjVyPMq",
  "key22": "24Shhwnn46LCskem3godRTxT83xy1JrDK67KSgyCTYrEbYwkUwXq1RPY6jgAfPSBk53Xu2g6vyi8gLws15251bBn",
  "key23": "3frbeq1avo4XGy3eucMKKyWhvPyJX76a7B5HSuQetSvNS8JWwxqnbEifBEyWjRuWY4b6ikrJYE2VvvM9ZHR189iN",
  "key24": "4wFg7E8Q5DE5FjSrdB93nmMvArYd2iUKskHmK2mgg5Tv4QVTomuvD7grcpPPvU8AQxMdfdg1rBvDjS2V9Go2LPie",
  "key25": "3VDnyLmCdqAaxQxvh9ReSBQdg4zNFYsfNsStuEYtAq4pqgTzQ63qyBk31LMZTa3f1QN6taSV8L2Nc8ewyDX4Zrjm",
  "key26": "4DWH7BqfAxNfBRvjMHfEtWDj8sM3utNmzqWnHZPUNvtfkT8u1tabTNmJ9s42fYYuxitBhYfHkGndxFQrU5uRqSqN",
  "key27": "5WGFk2LdMUBLGoYAicuxa7U6MZgfktgpiZxo7mfa5ZfJtwuf3WEZK3tHWHHzX8mvGDvMhucXws3x5jTEGqEeB63x",
  "key28": "5MDSU9hyftXZFoFiNEouWV2XBQ3j19NjcTszxhyeoh6VTrJZ51BYLAp3UjsT4DMHPGWhrdc22RVqRXYA64ZLwfD3",
  "key29": "5NgoCfJtbWd1R3Z27Wj9uzhyHfkcnG57d9FF4ENMjTdANCgn7tdMwAxN5eghENjc52bUFjGqs3hnChmzFassmudH",
  "key30": "56gE46RDrckFdkiasLqwSv5RdtaTVauNuyf9nBvg8aDA2JK8sYPTnzEDiuPpWzK7nAsMeLiz4dMYm7yx3fiWtywF",
  "key31": "3wUYcW56ZfynpY28ruqt2n74ZtshHa5H6tEWyjhnaG7qV2cKSDEB7vAGWEFczzKWop2Gj8VHQXBfEnanrtwUbYBf",
  "key32": "TunPJZUDfjG91dZKVeRjNwwrpxMnn5DRtiT3DaTNqdvi8aubrKXKDNk1yDM8nBvUkczmsTgHTd9rq41sURRpvJ7",
  "key33": "4Dew1zJhDieG7ZcTjfGz2uFUN1ZAsWgRxznTTKHpNdwrK8646YAViG7TBJjGJgm7zbn8eDLd8H7joCmdFHnaQKFr",
  "key34": "2eo88JHFicJuXfKvFQqJuP6RzE6qnAVHvyoJcgbUrF7p3zQcwommmRPJP1aeSgceHHm7h13x5CpaNzVX9ec8rBTC",
  "key35": "5gydLrAQ8utHHRGYqjy75Ys61jjwNA6ruDT7URRBLwoQDMFpx1R79rVnhRrXWvfXW7RFP9vg2SMcuJsLjNhVqHi8",
  "key36": "33qeCcEQTEVVvzEicSBgBAfxjGqSMtBW4cyujTA2EtzrWb6TrsJ8DTAVhVjP6Nc5u9jjCiaBeMKjSwksLTtwxLTH",
  "key37": "3Hbtq42CzCxJ3HRrRPcCm86h27kdYBn5R8SuMHtUm3e8gCGZw3g5rxkzp4U4YMQt4WuvspBGx1msP9LbYriFxLmj",
  "key38": "3gJzqTaXuKzsBDuZbY67s7MZJPGXoiVjUBK8TRzvqEpCHRRMSeU9JunW2BrCbFD4RdFiHh8WmiXiWbSpkQtjxfqu",
  "key39": "46Wo4GFQJ4BHUGUtoTAXnTAyRNc8hTBPyVsnTa96hVbV4ZVQ3xSyAPi66etRYzfgZkZtsnJY9G7ZkkycVewbpcsx"
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

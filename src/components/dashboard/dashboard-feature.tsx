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
    "5noAdR5aWZs8HVtapEZUJ5RJz5yiiSfujyyestUVcquGxqVJJNvZg6JFoRguoxwXgnwCQX6y7VXo41hVcUpQjjNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6VEmgQbMm43CoTfQcfUtvuV5FU4wUjZWUSyX6666894hA85ArHZGWeAbmpN1yWj9mxaaoEfAm4YfECQK3C8bDMV",
  "key1": "4qsuZU2rhDShzduaA6aLQEjQLueZgYgnV7sATDKAVnG7x14bgoFEA24nmUWSxmb3Cc9RX3qfR4w2s9ZQ52GwRL4W",
  "key2": "56xC6VHNJ8dkukmPSLpvPRDgYU4yFHY6V34MgyGkybxjG2xYmd6NnsFCsL7Z2un7fYxg5X1dHopbMZvH3RNQLiwy",
  "key3": "5S6McX7t23eYEjjbVCV2xuMPRgvVRnDis7Nreik5svvTAgUkWA3fk3hTqjmJj24GAqL8QXKfUbKenpxaJZd2fssi",
  "key4": "3XycoJnjhGd2JAgq6aW1P68GKcivRqf7DZUa5k1QzoKn9Uqk6f8451D5PUVBSx3uJSDJCUPiDw7EsRMisDPNU1mr",
  "key5": "EvvBG3wwxxS77Zs1cMwxbaZaRbcXpHxPao6DpSAj6zfu36QUG7uJid7bVHwFX9GcP3dncyG7sQZmnvU7iGGNEYW",
  "key6": "3yvj2yt5ZgFWF2b7LmpBHH8M5tYH8XouZfA3BJPu9SRcoWmWGEnNu7PY2FkaRvCC4peJphkNnVEoCrdiW4UWX7dR",
  "key7": "4Gzhhph8qvbizpw1iptBxzu8DmwkG1wucwwpFgEWUZzvK3JAdV7rziBn9KBMfjXNy7gip9GKwH7pwHggYxGhy6jc",
  "key8": "5oKqTxsL7mUzxdG5zVH8ubH5LkRUt4GXfK46qGkFMSZnc2W2evavGnHAbaPKc5cVYrZo7sAxbQhqNZGLD1fpbpq9",
  "key9": "5DyTaqZA7RpiPp45zNjDx2YVN3Vxmth1XYAaBNDxWvdjnz95eQjfXvFkum2zBLJ89jeThQHoyAuL9YsLgYa5Kp1",
  "key10": "41wLYk9zEaQwiFnr36SRWjYTMV2BBpMZ4LMbv74erodZPbV3QCjazm8872sNosXHGHYDrEeZV96k13GeeCAtGBp2",
  "key11": "4ibjTu91B9JsN6rgGUKssqSxFc5ReBMbYgDjDR32GSMHrXC9QUEP2Z2No1vewRHYofoT9aPy3ztCGZeAAzqd6b7M",
  "key12": "3nYWtNmMoSa17bbMnJQhko4hL97cHctajFfo1WqeUqQJ2dgu9m52ZJ7sZzFqkbN52DK5phA1kubFtpWAYGNbjjXo",
  "key13": "2mgi9aFeot12Hvor4c2ZyFsGSohJJ3deKcZGcVfygJYgA7TKMq5g2HkLHa6okGaJuRnQ2hXcKWiy2JceCxkBMZff",
  "key14": "2u37dYcL39byaU5rPPviT7KvG6q9tYRsXNXK6wCvq58YfUau2qf6Uuj8Qw3J935qcqDAKv93dwW8ATSP3T6sKrdU",
  "key15": "2pzw5BAuzEA7HqZsyJVNDKij4SdVXSu1HnxcXxSVjNeeFJwbRQ1M7gcv38qPTNfhJY1W8riZSgY9miLnjRvv7FCH",
  "key16": "53nvCEnQWEypzM3Zt77hYMjgtd6XqEwnL4WF5JvNDXF5VqJAL1e2NFvMSysTBkwU3bbnJwNcbFpEMAtqFw6QYVeK",
  "key17": "4tgKzotAizeWiEdFrBoyLd2td7iSG47nrFQskNkCnPEv9hTM8FeqKjD9VoHSRGgW8Smxe4WCTrvVDrP9tedGaiD6",
  "key18": "4u7ztd9uTJeCZe3jtTnwDQEdtao6bxdwWfjay7cAu82t1fJz62sGiUWHjgt43p8tbU233Qtqs5xxSYR1hxhZDfSG",
  "key19": "5FRfqpnXHmeT8LFEL5iWbCLfav2zaLGkLaRpePpRvkM7NHMdUXKD7Yxbevm88vkksiyx6feRqYchHg8pnyb5RRhH",
  "key20": "iVrTsQwDRe7SPF6biTHjncJRky5F5GwWBHVsNV6UQuJBSuj3LNmQaL4o9PWmcufLzzAyAD1J4fdYy8U8fVtX1P1",
  "key21": "4UZmg3DCdrF5JLkBaDgMEVLxi9XcJRhyFMGDv51BGWAwZp5dsf3V84DepLGUpi3jCB5ovVjxatrcNbvkcyZT6Q3M",
  "key22": "3e1nsUCFZZsRqjc5Xyd5Qg2faevc9syMUiZuPAcxbod8cSxzzQkBtjgwcN8TnDgj51WCVcPYwxKtt2SxpAMzNVDS",
  "key23": "mSTNCdkSqVgwvespar18J8bBn1MYCjtxgpgJcyrxtcFC6nfYvD8P4zPLvjqjVi7HkbYpqE1rXkRdTWXRgXzK7kx",
  "key24": "55wz5hPSBnuz1SDXpzt5XdbEyLcuNFBr6p6S9vj5eCrk1pfsTPNe7gqgjQLh7pcnJrKyvEydBkyGhsP9CtjJ8t9y",
  "key25": "4zRsbfd3xex7ikLGJNrXYM6juT5QYNjka9MhPfqacbjBfwukSYFSY3NaVpLHzLuwncqxTaEiMqdFVHfs7Cnkgjt5",
  "key26": "5XSoYvHPF9o7aXTvHvuKbhC3uhWZLj3ZwbS5tW3XDeb7D8YfbxGrC8XZmpqXiLcmaiF8Usj8rZMXqJuDXfUP8eyh",
  "key27": "4ioeC2SwUE4Q4sd8tkwpXfEw845EBqr4goWLp5U7waKrKxABzWMMPfwc7GXBwSeuWxJQxDWeJzHt1AqLFKcc5rys"
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

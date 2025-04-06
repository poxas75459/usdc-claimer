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
    "2GrY7d6Hanw6FFZQJ7QewBefXZR9TdKxjEQhSfwSxtSYKZNBgM9i5HAETUcbcXfr31Thk1xQC7HoSi58D8j3ERVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RiXXdhqZPydkt1jzxs2xrTPtFbLJRzQvqCqMk5cM8bGdChegd6CrRysVw9Nb1ELnSSM73RXTsGebg9auM7JMvDz",
  "key1": "3tQMebsQDH91fw839WhetVxrnZH17qe4JywR6pnAzWfFh4tx1R5uivA2FHeK68awenmSW3rcQE3BmZopoqF8H2UD",
  "key2": "5tNiuMeM7Csk635XcaE6q23Zw18qvfUuAQBBijyDGYQUa1M4eFQTANVTwn1Pe2yG2Rq1anpDJQSp7ZGT1yj6XJdR",
  "key3": "4sir6fLc6dU2sQt2Wyda1pY31UAw7yyNiQAxWdtZxSP9K3pTSqh61gXndtH1NBXv7QgzMnG43rcwm9MkRwQwkusV",
  "key4": "4aYQK7JmsmpTo2qpSbuPTCJB2WGCxwstkWTpHLte83bXRpJD1RPFajpDoZ3NGhdmFgCxYGkCbUjpAMmfeTeM3XaT",
  "key5": "23a7wUJ18xQGuNKKWzxrbbzJoufMmZnv6pXhYNznt61S3T91mSL1hZ81Skvha8Jxa2UcobEaQkjuhhzBF8MHCmWg",
  "key6": "4Pf97iTkYX4q4YawGiZbZDJmzctyQ3zxWCbavPxJSr1TwozjtKhcTM8YefBZFDrpHXtzAGfi8ZBXTwSPR6LCFaHj",
  "key7": "2GnHPLbZ8XfMqrrNh1VZXTqvg7FXWvj4aUUsx2BqQ8N2o4j4hm8J3QmhoAd1rvNTPVV2zCeYZEQ489XL71tenwN6",
  "key8": "2H6PCEsZY7rbce7LBGvH6guPqHMEutnafcEBJFHSmuCvtUu6ZYH5AYSHGgeTe4TwJ7DPZgnPSQp3eKrBGtRnGVW1",
  "key9": "3oc6U7yCXYaHvHy8gTiLah4L1U4WgY5hQfoS3YuDKFVtBNyVZUcFqwHP2zzy84bDGRcf9hgLNcamrXn99o4ysyxK",
  "key10": "5MKe4cGYwsJiunjEgpLz5c7AVfvMmxZafEYiHHSdZwt6zj4mSjNHjMN8YcDfXs8yHrt3nMdfeft19DkfhhYvosvF",
  "key11": "2LgVZvmRUCJxZBy6Fsp4ADTvS2X6rAXooZooPSuGzg5zrGC1uotrnfqkWX3pGE4u8f2vpLP8VBVpTrQJtJWnXXQi",
  "key12": "2u1u4EpNoptaystbBioT1wnPKk9NBxeMSUji5HVFQceWesD6ju1xhNkYCmwv68JrhhCzX7TzRT6wn9J8fJJ9TQN3",
  "key13": "5zGkFM8xDKNNP4khq8vfRCDgcyfqAVCbEgvFffBLYg3fYYqXyXpYwjVKugUtyMQv3koQXB891sTgEd5J3B8WBJVZ",
  "key14": "2wp8fsmRaretmTGp6mQMAYLE9o5Hk5oWdjHJbZbuqY8oKRbPvXca2KQ32XiAXjBTSM59S6jP5o7WFaviC5sLyDWJ",
  "key15": "2qDcHVeo85yvShUX8B6GUHU1fQNZgNHy4gNqypqUhZngE3kd2E7shaCYeo6iEmvExGTo9G7kW5FS9C6FHGkXd5uz",
  "key16": "A8sf8RXK1BCBVp49e72UvJ3M8U7PH139qmSFF5LtHRdcPMHwCXc2L2mjqjXJCPwPGsfwz5t7ihunUnd1UfvvkH1",
  "key17": "51Qo1AZmBL6cPaxoPQKWDbZa7ZdzXtM4gMPENx8QpqENwbuopUxD4c4WnxejjWjXprqr3p4scJF3iwFazvBSeYcr",
  "key18": "5TSYGcZgM7kXYFE7Hx3ewHwqYx89gQJGt9jYDmSGDYCZEW8Dxipy2hgKh7JfLE29nZtdNXoJrfT4KNuTLwxXNpxu",
  "key19": "7Z2mw6PzFS3EAMKCWYectgeF5pb29mX1ThMAy8pELDfmd2uEKiwNVfPTwBw1Ak6haj8qa43B3b11hnRtZGjSP8t",
  "key20": "4g8DAPLbWWdrhSwi7VB9o35zaLXB7Jf8tk9M83wS83KY6QDn5ZaiKH1ni3hN6Yh8Eo5QgzwhdFz9yxYELgEYJyki",
  "key21": "4H72Q5NUwgcx2Dqt6VgErFjgUukc6D6LdmAUYUXtXNE2s9a9U7cbN2ocPgXP1VwxvTAQrtz5dT1QAMs5dr8Y3o9N",
  "key22": "jaQHGCJuh6mVJSii9UoXYKkcS4QHeCTSekdHrhQUVHVcAsKS3GgtFttqtEcbBk9HjEnA4NQufYwLvqq799mTsnc",
  "key23": "4mk9foaQj9nsSJfhL9r53yRYQ6kPCBKtgQfPn4yxBbo4BLw61BVbW9HaJGF1r7Re6bgkRgz4z64zZed9UgdaTQcA",
  "key24": "495LpA8twGoHAxAo3UGxJgwMbsCuVsfceR4UkzJmB2PudoNyPiTzxfUxx7H844mmeznSZFFnKykWVLHZW5UsHLd1",
  "key25": "3nRZQGcTidepss3Ua5yU1MWd3WG9BW5AFMVUcsPTrk1yE5dVTMBekmZfHk3yz1b2EnUpHrqjvwKwhNsz9x28AY7m",
  "key26": "2zbjeZqPt7LEceBEo8JvwQRBYn68qDP4WriXMTaBjyDgho5rZwffEQXjzJtoqBjE3i6PhiPKGHaUAZwzn88SZRaM",
  "key27": "3741oDscgHYLwMtrfJ7XTK3pBPRxakJ5RHmQ5fWNz1FfK6nzua9EsiH5sph8KjZcufnhxvfMmqJTP6hqyhaikzt1",
  "key28": "4ZWGwXLYXuaVDDKCYt4t9VcrSmhftvYo3K8Lygb3h14PM83W6X6yArCxx6apcyWZhNpg8AxH9XcS9SQtz6KU9Z65"
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

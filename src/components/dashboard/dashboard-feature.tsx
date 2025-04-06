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
    "aigyZUFKcTqaQNSBkpwAGPzz8Shq4bix5nrFD91tQWct5UfromasqWWxX6P5fG5c9ryMDokkbiXXc9rCQWSPoBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFhovzTP4cHRYTqW7FKhTs3Q1U4TVDf1ivorEW7yXo38chKCoF9d29KzCoAyTk7Y7wbtovU6wtowxy3j73j2fCu",
  "key1": "29h4ZZd4qtef83AAicnZFuEhuDTiw4jmG7ncmtyVAEkLmFEbk9unuGaf3x7fp6hy6Eas6cpic6PVucgVBKHPco5c",
  "key2": "42dGgsEewBvTTKjovtSTAqVEPrr4TyqfmSvRmJfqbgWE7hhcg3a4e3bBrSZd2tgRuosAGSX6pibRcG9k5pqc7DpW",
  "key3": "2oGnmfaqX9TD61LJaBPByPb3KGcy3wzrw9BQKZmF4kmLSvDxbMRwkJg1FtiHSbK81utQMzK2mHKXgQFqfWiGioHD",
  "key4": "5G9Kooup39VEjGatSwSXzTq7Smh14JUmHos6zFZYnJ3qefs2E8HsywjrWp54smRc9NqGRfnUgYoJxmusHTth8Ztj",
  "key5": "2bNv45vnt8JmtbeBWoPGzgKqsYVcCqqPPCEaSiUzNJUb2XHB6beKXD5iJN4yyRj2Cuk1nqyzR7wKX3GGM6DEzGUp",
  "key6": "8tQusjzZKAAsvaHY91tdum8csjhH4hcY6x1Z3KN8qurRTTUbXXpxBtxHPuyuC4xWSLGsbRNkVYxsDAqRi396Ch5",
  "key7": "QWExA5huN4FxEXCkVC5KWRMENjoQpRAhTwSr9XweXyjpuLMQvFKnpdn3fttemGwKWUrarMZ5xrM5ieujegXPHi6",
  "key8": "4zM98sCeAFURHYfUJSXCYCTm6jfa9y5JTm2NiazpqDpjwygyabz2GYWQZkKzrYnKPnT9EtdxexsQzxS514srUras",
  "key9": "6DruDmJXk1z5WZiiXGyaFkdkqXrfy46KmUscBDCmk9vxj6LU5XoLTVmMD5ydNWoe6HxhBB6qawNKX5mu66rqVTk",
  "key10": "3ejYmNJtGU6mRTvxEEi7HxejKbH61YnjC6RgbPRX4wMgG4U71syjsraKBKSkxEwyNQwmXxtfttTHrbsJSrE1nGvL",
  "key11": "3SmHJA8jouk5LZrF6L6E3sWoPZLpU57MJd5To14GwVQPg5rVmPSKRJw6hcPyMxvEJMCZweiySKzC4dRoBwSQ7WQ9",
  "key12": "67Ss17Yio2qwpkbAGHHk4qSTAtk7Fz2969yxV4nYsQ5bEm4qsV3zgCs8EEFHvNic8XPHKVy3CfCrL7JBv42AbgD8",
  "key13": "5Lkrizyak2eN5b84WSa7Jx9NMiLtpTg562tH4mcLvrVtxYNit6Ypb5Tw7pVkJ2gzkV8D1rHdQDBinmoAYeTdLCBF",
  "key14": "38omVqbvPnwUYm2ujCvP29g4JSumZB7aRtrNDq9WF8fPDDw5FBePm4ghoZx3hebTyznzXtaojvXz4LekNNAMvBft",
  "key15": "5ic78TsBfGqBLFuF4b2uF9doAWc2K4g4QU85NP8uEoXQZpTeC2RPKpEMVfTToLGwHnsHhwsypGMLyLJ8cEwAYzKc",
  "key16": "R9AWaDRfxogWuNaJCo1BxSFD1HRrZXvHNhFyy5DruFAkyDtuEQDfLCcqcZQyd8BLTxsdaTDMJHxmCc5LHvYmNz8",
  "key17": "61sT2Y25uNKfS6fPtVvT8LCYbrSCz3XN5wBufFXzXihSo2jXSvEdF6PiTuR1h7R41eEb5eTkXD6PjamVSt1UQ2tV",
  "key18": "4oQTYQfpvWX4JAZbpmMjt8Mf4MkYZ6CYZ5JzhNZxewBY1k93qCgFxHxAeBz8xzp5PQsVaVnUARdr7Rt2ny13NdTw",
  "key19": "3JbGKJ77Kp8qt5VjJxhHc3fmR3hLXs5ssR6cteJrjrbiJts3ZJayX5zN7v1HwaefMEVPJrqmMCfxamCg63mxr4bB",
  "key20": "4PoBzQHVi4B1gxH2jatccXC94vnsF4ruLnvRri76Vjh6nCyrA6qW615ndSntry3B2RTA4FHu1Jva8NhcVNVNbQF2",
  "key21": "3Vfryi4BYFvFag6rTqBv4j2gU3edZSAxabUg1gZQWDGiaagG4qbFRpxtRsXB5zhbUyBaB24utE2tX5HBmHzDxCXh",
  "key22": "2wyKsr8pp9VfWiz7J9DaqZ3uP6GQAmiwTcXZ4MwMJ2i2JpUG4GdNEZVKRvGky8FebFeNwqvSZdDsHw9GcEFpjc1a",
  "key23": "39d51AANATJy7q2tRtyKVRY7MJiWQjdvxWHATtz3oL1zKpqzJaLQ6Pp6SFnLvrWLYT3arGT1HQQHEaRNLhsMDr2j",
  "key24": "HTgRsftMuoNyeautekvfAxPknyN4w95wKUB2ezrfLZjZucJciAWVapDJTF5rGUfmAphdQS6JhWeS1W2BUNr32i1"
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

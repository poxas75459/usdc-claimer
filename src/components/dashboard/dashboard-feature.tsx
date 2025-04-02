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
    "673WpjT1ZByUhVxQ7ejDQBQY8suEg7TnioCPSKSbfeeXzjBMmhPmg1RcsGqP9yjECBjhiJGU2W2m9bB74S4p1Tao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ivtvch1RvsbEYGyeKYsDsVzR4zHTP7m7yK2DrPdoqi66n4jNvTFKv4FtEJZ8MHMaRaoGXWfQUebtKuSMWVkmmUy",
  "key1": "57ivTNwrDY1ePEoNHLxB7yGCe51SDujCmgStTvjuKo8GsCiBwApGSsxzsm3pZb2EM3mkzKBhS5nkSiohM8QB7ni1",
  "key2": "2EoLR7LFnPQLdRQB5zPcaUj9e2dLmnG23o1BNVgrwsZSduH2NsH55jQtd7P8HL4P6voNbF8r12SGg3S9Ld4YTK9S",
  "key3": "2k4GsuBkuf1iNAJggRYqVgPzRHmgVxYrZMs1dRLk2giZahoNuTL81mjhBCz7uzgZxqZeaM5ym14GxdaZmK3CtB7y",
  "key4": "2wMzMFbAGgQbuXFpi6xa7EDmJajpasfTjVmtZ8jaBp9ik3XuUJQnSn8VsS7Rz1K3TM1pWpdJ15DDom14sAWj5FBp",
  "key5": "5n46g1ZqnQ5ASZhVmd23M39hdR42JDtthc7cRkNqYSZUGV1XMULtAM16EZemdv1X64eVCkw7S8Kcy5LAm52hFcr6",
  "key6": "5NtBHUBUHNN38J3PWezoPupkuF1Z2kYaBERUtDjPGU1n9tnaU3YkXDRvVhJnjW5ti9PSof4TkSTKBcP1tdN5JZXe",
  "key7": "QABscgj4UaAh9sFwVSvJYeSwpYi4oAsN1eMsqeDbhbRVw71Ud8Pbrzj7st1z39w5Y3db5HeiGiTnXYMwY9GtDkB",
  "key8": "5UBccK5TjRzEbXEvMNQufJukH6im5FmidCUg5SMv5BKss2B3XwGteBLH4L8cbFwCano6MFBBECtukyNehMTU8JD8",
  "key9": "ghL2VgyohhcAyZysqmEE3vda4K5J5aLmKG2BUetRsmP2gD4enCY1BNz8paSzATt81yJPrirCizc4j259EtPePnm",
  "key10": "5JTnYBzGQUFi9jdk7u9BSMYNp1gZVeZ9jFYJ6J4kAU8QEhcaVQsyhYx9EJ6DqM8GaY9QiFR868p8D2VbAWfX8a8r",
  "key11": "5D2WeEcLN5PXfR8TP6Z48iTdatcPM1dcPVbxmUgBXE6ndXQt46HZywwGNSQ5K5BGcfSu7hPcCNFeaXUQFvTJikBs",
  "key12": "3oLRXh32aDeV4K72KqVPq8D8g5bV2DWXktvtFZGRDxgp7yrqyxT4wyTLuzejKFurJQpbswSqDXV9tf2JGNtKTaL1",
  "key13": "4Fv3QYZYjq3bhkNNg74KoZBv7CUh3LKfWd54bFn3PTQ12U2wg6a6PNYHpSpBV7gaUNiphdePDdX8z5WwmXmgHNEe",
  "key14": "feJ4yapozSHgokBMHfU73CqYiXG3KKMH3rQZbqGkaK4GALRmpiDpdW8exMLdvGSdf5JKbE2xbzpWL946ExS7v21",
  "key15": "4kqDve4tYQnAT6gdwARLx77fB89U3Bs3aA16NLbHmQv4dujs1HVTTdvoyjSqjEcBP9PN8Zsr9y5swQKbju1FTQd8",
  "key16": "5J4HAXYpZ97PGHth2iEo2C96yDpBystLNYFwHns5DjaLBjV1LZ9eMJbt8r5phamsTxCu1b3EuZH98SKHUjPV6tpT",
  "key17": "5hVifygnFhY4ErUenJ1uoBdGn9kZqHxF5Ebw51JAmHP6Y6oUtMDfXRAmycmR3mBqB2GVGEi57NKgPBUWpFmKQuLQ",
  "key18": "5oYsp9drn2Sa2A4UyUWKthJC5jmeWFi7BGtK7qPorDTtqqZfzqS7zbsjFEn3GeUj7DnVfDFannNGKNCL8oeYhz37",
  "key19": "65LfHR4s8uKdxCYdvxXJpXsUoFccPsCb2zP9ANLsPEqqRwMPUhvV5jh7gXXXheLGKVeAGR45FNebXtiHJjuePXKm",
  "key20": "dzJXJTzbDi4ubmiELtZfHRGntz2oryuaYQ9husnYbRiRiAuUK8HDGqTjJtBBJMphCDW4yR3t7Y1xdDe3Lv1FWNZ",
  "key21": "5yShZDCm4wDpz6iKqLgNT6V4kApUgN5ghM28nyzoRf4RAzhXwnjENjac6vMLbBrBnRHFrANSHVKYnyCSoTNCntag",
  "key22": "3dcxvw7dqYokEjmc7D89qrDfUGQM8ygwPw9FEj6FkgfYEvW1Sd3rfkpG5hwRpS1tF8hM6JbusTz2DixVpbpFLtHS",
  "key23": "36vJpmvVPETFL1opCuyTnexigjAhGc1rRdDSUnWZSbwM4UTuGUG5ZjB8AEpGagJJkHGjCzqSTv6KLARX5LLwioMY",
  "key24": "5CY5NNVhNDy7FBRUSTnChZv3gM4QjVWTMFog6kPWjAgPdWQfcwj39dXQuR1tQreiUB6dKvVQNng3CSggk2TCSpqx",
  "key25": "5HbvnKsgwTZRiy7K72ERsYLMUvBiP8nb9ZrYpKF7SF9C6isYY1tnDAfK2qJVWB1gheLTPuaNZX2frzQiJX9diwcH",
  "key26": "4ZvSP2erCfN2Arg5Pgm44iN3SXRf16ZAke2hTNv3K4b1t9uBQmVUHGJynnwVGKNMgt3Tt8KkVmwK5UGkJ4itDKhY"
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

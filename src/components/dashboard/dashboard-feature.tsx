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
    "5sVnFt9LP5sBSLcAo8CCHeRSWGi8uqxaKKp6prRok1KoceN7cjhsbELZZwm2wdfaQD9yC2vTvFkLX8HwUVs6xAkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gKgt2XPtKoGgmYd4nBYbYdhhVbjcYXNPJ81YNzTAJMhCxRNZd8S9qsinep2Zrqg6t5x9RvKwGhVZPZaPnwVrAp",
  "key1": "izEezqMS97C9ZrKYTcgxypyQ8MaqRRtapbDhbEbQjCb9vqY6Ha4GZjFiL59MTHrMZhWF9ohYvuwj2X9s8FpqFq2",
  "key2": "3diZg13w791pfUzGH5HHFbQhVuFLqRzHMkymcnFpw2V9aktdACDqj1aeu9MeC99unydMaE85a95dXRPWXJ7Heva6",
  "key3": "3JrjJ9VR4mgFZNfNR7HwAGsVy2UCsGVVfHPs3vxMWj2yjCA2B2kfyMJbS6R5pqaViRp45zWPN58qMqCHxZrunGkT",
  "key4": "3nSCerfehjANZ8Czp78G2uKfRVDtM1Sd35nEiWwpcn2fVKp2j1v7ae71msPFhn2hk6873giNqUeXgpMVpFL8jtKN",
  "key5": "2X4nut26XQz6xqBgCGjpY9rgXs8TM7PRtgqmbwf28nrXCS8KGRiviFSfSojxMAVMXfQvedUdCR8JBsvdDGTEqojo",
  "key6": "BR5eD6WzhYxfyn6FfwoNw67AePqVyzgibEo6uwx8p6t5RtmVRUJW1mcb1HNCXtjwQPF2QH7D6vyytQaNDAR3ULS",
  "key7": "4SZiq2GHBoGzMakVRvJ1JdyFmrGZeSZTkL5Ltp8RrG4qnKb3WYMHaF3KDQEsStXQJ8jqXS3uC5LqNG8ALD7atVmH",
  "key8": "3y6BXaZdGhQsaX51MtEPFukKXSST8XYJYbEq7ubP2ZEUiJXD2akCddm15zi4mMWCyxeS41txmKvjEJN2F4iGrmT4",
  "key9": "2ocEzVF5r8muvX5QKF7qowqbyjeen3StvwcwRz7jAYjw5dfEMsLiUoBHKQxKeqE3WqkjnUENjKMGNLAjSuvfvKux",
  "key10": "33mDpexm5Q383s73DFUufFxUwYD7kDcofvve86LGjacCgrurgpzjXTyFYNs4gNaoyXAFiJoMtJmNupmBmZuqsPZv",
  "key11": "3U3zxyTt4uxanpeijARRXH7sfbp4bfqgPcaMyA21pPzNnypT6qcGScnQynYgKB5ZmXy3vfG8dC9pcyFFwkLD9h5U",
  "key12": "5UyUK9X51Yp2iAJhNgEKZub9KreBXPhiLHzRa4R68ZBsHBq4YYVnEWVYQDx1Q3pWFfECV5GSRUwwEB5gt9TwKJDx",
  "key13": "MV5Vm731zVbdyYHAj9vryLDNrKnUbdzYBwWQGMBRLfJ9b78TT2qRhdBPzzsD2RyHByzhJEwT55aSpZkHt7AE8TU",
  "key14": "66yMYyj6oRP9qCdfYusVQiwEP97GKhpELjjPbXAoumaV6cpNuGcixubJgSD35TZD9PnMbpfHGPH9PBsPZhJz28FK",
  "key15": "2inBBHgp4uNSgwZrSJTkkbZFN8v9prZtQLEDN5Z6YyUjfXMsVLNAGZzx7DJAkp97nsNa1JSMaS7vgsBDbWxqLByF",
  "key16": "61k3baAuoNHBmNTng7VhqPeB3BTBXYzHmiRDUE44dkD4QxHDpD3FUZdmwqoLA7TZn4dfEJS2iJv2koWgrYuF2Dwr",
  "key17": "23spLEdZu4PvdXuU7Y51xTtyYzRpht3WgfFTp5cv1C79E5L34G6jHWJRacR88CMALQkwqijkMiysuHDPzSDSgkTk",
  "key18": "3jrZWjQhYTLXgF6RbdGponzCpVpC1kYA3cvUbQu6Gg6uLfQ23C3N3XD4CYcojyD3bT4HHH73Jr7FGpi5w8QRqx2Y",
  "key19": "2fFEuAxHdiQRnjK1w9adxj2iBQhLCzKnn4U35P2rMuNeGuBxTWa6erPq1h3BHubjkzpK7KxHki9TQM9TxRba91Cc",
  "key20": "4C7Ya2aFifLaEis4fX7Hw4jjZqq9As3LzzzaHp9wN5LWHdSAsSMH77vYFQSMwpE2GvVKv46VQtzzCSkuvYKNYnQs",
  "key21": "YXwMtjDhhK6FibnsCBiNqr1u48nVay4Epm35ivjD5uAt6GB7Rj2nkYgdjuaVJC9fXH3uNZR7VkmcnAFiS2T7sVW",
  "key22": "28bF95E5qr3BfAj3esNkkehzLrFo4sjMQJ39o4JaTWDCiFkAxvgCwdSmZ3a8hRoAfDJtCRseBirdqG7FSQTPwDbA",
  "key23": "5gJqBKbEn9nvQqugDmWxcYuNKYVn6GyxJdy7jtbeqkVUbZmwZfHXpPMiqH7ApYppbXcZ8gQZ5BgQega7XJJaeMRL",
  "key24": "iuyeRjma2C21yKvmqbH7FNd4c4XQ4x5wBKJaWoprHjBtiKR8TSqQGWUHNXsrdufTiC2YeaivWtc7U96f2qHBTka",
  "key25": "3LbrekvmRC6NqyRmkhADNwZ8CyEqyjTDhGEscy4bUhJTRdxYQs88iCo5m6JhG8fwZfZ8K8tkRRPqERj18q65aPpV",
  "key26": "5krdP8o9mCcHUrMLexFJNSL6BEg86tH78aydcviPLWjqt5SX5pb6x3hnEwMNnMz8cPMNtz3G68abectczqgut6HE"
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

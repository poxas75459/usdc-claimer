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
    "2LzS1h2GrSJwAxmshT5vDum7APfGMtK1Y8xan82qkNPD2WZWCQhmvAM71VSvYb4w8QrdhW3zA9mC7oobDyr8oPvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bsr5gaEmV2k4qJqKSoBEmoP8idDTkh8SwAbf46fNtGxhZG6Ga7vCjXVxXVs4AgKCP5mEqVxAFocsgaVCQxj1CWB",
  "key1": "3La2ZfCi2uZaDU7DdcWZ2iAXvSg2Bj6PYV6ewY8tBomQXcoQzxuaq9Ah6a6ECMvqWLbzTydgtmcsJG3nMtdhwTKr",
  "key2": "2YQ6k33Bmm49FAWzbc17kGWypTN3iFv2oQibfXvTG3ffGuTr3rDxSkj4pgrZmomDsqpPZsFGBJvdfNP2GrhXq7jn",
  "key3": "3QEamnyarSJFTduQPMcvhvmmKAmDdjfoXGpgtWRzjoAfhoiTmN6iPwE13QxXMbz6kQuuDSRqxKWsaFfcjYan4u8N",
  "key4": "2MweWG1fEh1ALH5Ztp5f74sVgRqLJiJyMDBXBUghUJZtmMtoji9skFVfAAqnjR9p66U4aqnKRRYsrLxbwuVZCarg",
  "key5": "2r37hLNfZg7o7zEyDYbN33wXRFA9cbxcAXpPScxrHk9RNcHbWciP7WTYkFk2irRaJh32rx4oHHmfgFnDWw1XfLTY",
  "key6": "34pVwWHTNWgdJ1YbJ1DB777vPmdRZsgDBcHysFtmcTY9C4W7SYZ9dYXhg7X9HqFvPGqW1gX7R4EiW8ZPRRSLP6K9",
  "key7": "zRAhHE6qBL3zTJAfSHPgC1gQQ8RozQTDJb33EvKdCA2TwTqQMjuTdCeDC5kSGPnuWiatKa73qreYdgaWE8t6Av5",
  "key8": "4seXAgyiQakukkw9X6WxToMJFrjkybgbBREW5V74jv1XV4YEFkFFaNZ2NqvvNyhVQRTjWu5YeX4ENuUJ8qr6NPrC",
  "key9": "Ehs9Jug6FwvhAAGzSwdowVddyrMjgpgvDH1YTzCusggBLn6P7J6No1Wbuec7MZ6aceLcg72ZCr97xwbUbzj9Uyw",
  "key10": "2xPyJE7NsKjQ1fQ266gFwajxdfSWE8r6E1u7RMf2wxcXXKJM36PT6DrQRcujK3xwHqo8VEgjZztqXghXYfnhvwm6",
  "key11": "5UdDY8Nw1j4sVfL7UyAcwmyvQ6ZRpn65pW1YfKwhVaFA7YMtWQFc2inSuvsmup4k3ArozhxtDAroeWkFfjTf9jm3",
  "key12": "28pskTxWD24CNSte63pLQPKWdQ5tnyUjq2L1jG1jPj9rWHcFmf7fq2WwiSrjCnJ7W3DUs6WP21donsureEKpzQPv",
  "key13": "5qobLuGQqpTcQRyZfkvtYtV61b9aBx1qdX8K1srQ2Dykwqwkygi7nxN5Dc6wR9bUxAUASFquMRbZiQJVfMJEuu1m",
  "key14": "6iB4jRWsCQAa71Ak4k56QFK6pQn2phaa7MqEweSK5PZzHkLxyNB7aB5SBW95JAkq5xNSz7voyHpm3rPNdLn7fCU",
  "key15": "3euPMMxMphDoJrY5yHiDGiLbAYm1xVoBkRR1S5GRxxyf651jJuaBGhgKZY8BCcGQvM8LGYdNcEbzwg6ivHPwY2eM",
  "key16": "3piWLw6Vy5CCvMJWT4vGb4NgaehxFx7acV8oFVM1Qgt2b3B7SW95ugnaQZxeJ3915D73TXfujG9aFRoyjkFYzZjS",
  "key17": "52m67pwXBKMKnpq1Y8dZzoPYq2dSKBdi6TrXuvA4p7vJ6spbtE2qnG2F9YxrmcG8Ngjj3qF5f9YqSdFq1YyksArC",
  "key18": "5j9x4H4zC1PU7EMGXk1yLG88U8GnYZaqmJvFavuhK15DizGZcjcYFS1hEaKLgwzqQrqFKv1qiGAbRzutHUGceDGe",
  "key19": "29TsDrMaf7rKX2TZiqqyKQKZUekG7apUhU8KSgdgDy8GfLjLJD9UbLXk2SeJBgWovDyR6az2g6kpqQV2dtc28ryp",
  "key20": "3Q5WKa8bPL7eDSNh5gXsByBqycLZKzTA2xyTGji4hzhP3QNKujKJLDBJm3KVK9BdCQY6qFwQ5t9o16y4yeZmQ86C",
  "key21": "4U4jdtUwozNh6atFEY3C8cYjKpQbpbmetXVHtCvmZ2NeHnzJbxvSaj9R3U3mPMGjJm3CXqk4KMr8dZC8rVf6u9t5",
  "key22": "66u2ePwZBHWEbfJRyGwRSXVj1scwwsuP7V4iqVniJxgNMEgDTf9tSDP2TiFufWUEubKtagHpf4qoViifKPjpsfaZ",
  "key23": "4647xs568yGfubjyHWSYs5GaSvxeRHAankePK9xWGSHA9qqV9HDkMpdRjoapNr3N5FdAFv1QLLv6VyxM6dXnuVW5",
  "key24": "2EXutwpMS17aDaxcEUbFtCZddcTKUQ242MmCPLN7wwzJ87rWZbg2THtY4MM35MuQWhCfbiVnN8Y9GnqNA6iJQTUt",
  "key25": "3nUWJM7a1nNLcW6AQaN58NHnbriJapHMyE4nntLsrUmU7E2USKQrsyqNe1B99ErmYLzhNNwmGKhgbGsXdbf6GhmD",
  "key26": "4gzYCGBLh7V1TewDhfe6py6mk74d8CVJv5j9MJXd1oX4Ktr2DyhDswGwskEx8VZmhTTjPok2nD8Y6AWrwXFude47",
  "key27": "3F291UmDiRnoRAyHrbUr6PANPnfGXrqcq9vNawnXucGzCF2pptf8tWnDoWjNiBrYqnkEwEUn2SptjU2oiPiQDEAf",
  "key28": "5SzLGW5zFJohkBUa98X1RsDRdxawkVhJnRq6Q2RkmxdzAPHYsncQXyNo5Rgd3kmHhKhN3G4qFoyeUbWCWLHKzKUA",
  "key29": "5hj95D5MMyeu9NcGWCmNATeoMktpzHwYvbkYPE1z8zyy76ZPv4WSocjbats62xG45dFDmcH97mE8tQHWZwhWLemn"
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

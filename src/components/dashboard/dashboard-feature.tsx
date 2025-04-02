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
    "66adk45n57JZ9UPzb4PbpjV838NPAMBSmVyAwZn7tvjiCZpCioqoNVGXh5F4H2N4eBVZpzPv59SYfpePG7eR9x5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qfTmArGLFZR6NsW9JpaJUZsd7Egu2AF57fGpWazSakhdGvpfYhPyq5ro8LBp9LVdbc8ypRy5pHsRbnnyWc2HaKi",
  "key1": "4C6B2M7Py8udtXZqgxScfjcRB5qshgAJEHofDUvqVD6UZZR8wVAQAnQwRiUrpEYiczudDxpDuZvUeYLfmQ39sAZP",
  "key2": "35PYu315LpEewXAKq26SRq4rerijN5CyjkQLBx6Ur3RGM3CB755i3gG3STxg6NVSgLYzsh7wwMXEWJ14GbyR3LMU",
  "key3": "quYxwvvwBNqJrjojadSW9znxaBusfkBcrZ8DHdW7ngq7dZdFUXTDrzkdKdBBu7wANUJRiXGyNdDAf5h73H3apAB",
  "key4": "wgngad7o6QHjdHz2W8x3TQTvNs3axHMKb3qgA5cKSsjLwn8V5i7tLzGYycJi37y8tmN8iE4MWjM197SYfQTzw73",
  "key5": "3WtrT5jJJj8XmL4RBMrVJm1kwF6xDKrRRhG8CnRA7wR7WSZHF9Bme9daWVyMbEPrzHaZiDsMv4DnytQuk3nuz7MG",
  "key6": "3PBcwq8DRNDon7HxRPnNC7fSktjqTzBVCnajbH6ngTbYth8AGd1Zf9sT6ERtru9xC9ydZuDJM6k13EfQQwnYwYBk",
  "key7": "oCgkqbN9SgE6md4YTkWj79D1GjKSEf7DZithX6a82hAr77ug751NUi81WDFQw7wxGR3UaFs1o434CDrpASD8azS",
  "key8": "48wVPKdedn2T43dVtZJMAYSZmSQmJfuR82R8tyUpLYe9eCuNLr5FgLFSis15gXb93KnZrRcS9gMQM9sTELLX6fof",
  "key9": "7EZwhp45wH8kqyCmiTsNFRZ1VeiPis9pzLDhVEVgVjC7M8hURhBnmipswb7mNBykcUgB41dvV2Df8yQamLTixfj",
  "key10": "5zUShpRm6quTthA8shQ8aFSZmD6h7CWHXdY3P4gdvRsKSapTyW61KXLL4PgUWxPLaAJdsvAkd7KcLsii8iPEPaAS",
  "key11": "5VYs2ZME2tKKwvrJfRcfUhb4Qi4ceG1yH3ziSqWGHbFVH7CCHoW1FiwsgJKvgsbd3b9M9ZSw22Q9tySj2BpRBVZq",
  "key12": "5U9pRmf5Pp9amj7TnDjcGSAxvaxSw8F9kEgWeFTmhqYoqqAMQfMvrtpiFjyBU6A3hntRo2DRj3gmbpa4mN72249s",
  "key13": "376cwqjvKcdXryprTyzVd4MPozGFqwtLiKP1TsLYuM6PL3dQd7DQaMNzJ6yeHqhw1uy7zRrN4D152id9Hbi22nsY",
  "key14": "4M1wapYYhMUTfYhwXSpmhfuLbVUtnyNPqnG93e848LAxc68ASXsan3nksbNcT93igUnat1d3yhpFCQMP6zd7sFXe",
  "key15": "3WRmouAmMZzrkmupfEetMEsgn1MLQKbHsAnTZ81ivceaVqFakV8tjWyCKFsQ4PZFQp3W2WkKDtAVFm5qGrUE6PLK",
  "key16": "5Rxc7Hoe1L16roExKo9d1uBzNQeCZxp9Myn2r4g7xZsSKJyXs9hgMbGnpix61sZVds7hm45jPvhNnGFisvcpr5ch",
  "key17": "2q3vS4wvb3DCa6RkUxtaNDBCp1dG51UbnWnQv27uhcfmxGFJTw6143Sfvw6RqxfaK5HJ25czAKrr9KGrKtVE1w7E",
  "key18": "4twwG2qGqvK9ybcgbD5DifcUK7TSpJzEZqCY17QRhxh8e8n4KNAxj1rBAF9Zm2cgvquzRSKtMVLEfojBV5FpP6Em",
  "key19": "zrLV5n7eY7Zyfk6z3F1iZyNMvGUDaoPUB1N5hu8yScQyp8wF8owZfzTvbCYqvMzYkZhGZuUPC6QxuXaqmLYN7Vz",
  "key20": "4FxLiLYH9QeQXPgLJvVwXarzYuB9thL4CFin75y4YdzXkchJYRCMxaXyd8Hn7YnMGvFRQjij1t9y8yWRPkDFGRap",
  "key21": "4ra8QiUdcfGFKbh8gTLL117t6NAA4gJRYjZPBCmWeJhb5x5HeBvdmQ43pKLScZ5nyNHJhe2STSRPMBkUWmScSTDi",
  "key22": "xKK4ixBYVTk4trndmarbjbRqeREdtAcgNBvwoKjhpmr6Ekx5Xg9CQmNCrjxas5p7SENsX4SKbcD2MEp4xgMwePL",
  "key23": "3Qy4sMYuC9SPNgBzvTvyqrXZJcBRv9SnkZaDL5PuH9rd8LiNFBpY1tsq85GuJFuS6AQZjUi69Lh8Dj88PMXQqgaP",
  "key24": "2wXZQv5GeUNxZa3gyUhy6GzMikyKhCcybJcziXUZ65XYbipP88EtponwX4ZNcbt2hgghpg57S6qUy5Ec2d9NUeYb",
  "key25": "2syYAkvoX9Ti45WmuUavReKbPUEawWJG6dtFpCSxsj7e1szkJG4w6tooJt4N6mfmv5MFgjbQ7QQDmdPSWQuuPTPt",
  "key26": "37SAaiubxoLE8PsbCtnXpghWE1L7ZKVdKCcctohxsDXQfCS8nTkQ7Sojf1z7Hz2UMhQBDmCXmmEdKudJTCUH2kFv"
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

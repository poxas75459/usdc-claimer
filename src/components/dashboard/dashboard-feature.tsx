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
    "5NsTXK7w9RNG53c3YqCGXdKLZ88RR9DdDJS3biPzD8taT2AwC3biDLaFax6oH9ANaWN4wTs3RV7RCQRQizxnRKdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykDJzSZPyyhHwiLsPUcp6mwReYxRGXHou6YUrU5egRPeo8FRqrKujd2pzmzCHkDkjSj2nx1GBETQ7HDhZcjsBNP",
  "key1": "yQbU5HnBY2cB8tumpiSvRNro2WwEyKcfUv61ZwrsRL4A3YfePBQBCUKDQRBvKizWamsTzj4rsuQyR3zF9J3qkVL",
  "key2": "5jDkGgePxz1U1zW6MBVCPG4toomQSdSxbV11y1T4agn3JLEy28fkzsd3kcHbUpCVXKB2XEFc6D7iizHZACBatadk",
  "key3": "5a1Z3kjY9TKDzdNUNMfRqXEUixVgQAgCckqmZ2TpXCVZRDHJYwvY8TZn11PPL6Yg8KAECHUHX83LpLy9aC2go1rY",
  "key4": "2upjbFfMvLwY8xxzodfGMhGStXBVaLU9DXPhjhJGAZnDDe8r4iXjFyttWp6Wn1TbEZtz8pyxYZygVgLZWfFmWZaz",
  "key5": "2AvjcuCGNZAkLeqafmfgyqa3A37Y4c77hDTZbJ5qt2zx3CSG8thn8FWEn47JNL3U8LoDwKAhd4ytTGWto7WG3TNr",
  "key6": "Se695vZTtyaSacmTNdsXvpUT2HMVaZxSqk4KrMrNUWem5L5S44AcAr2ekErQFvW6DqHnQxyX4wAfQZ6hJ3eKgZG",
  "key7": "2XpGBX3vSZgcSRfqqGpDC4VCYZg3bzDYy8KMjcfJA8oviqebEtaQW98NE22su4a4SrbqYupB3CfisBQnvdjNLC3A",
  "key8": "5aega6szSMRLYP1zSz2XATpaE8mS4dnzobju8cRFdAo4QdEFptFaaF92SyLMiDiQng8UunyxhgdnmE8eWjiVxSCJ",
  "key9": "64qokTe1tFEWWCKdskM5v5Jmt3QMqYyc6vjA5aqDckaFRQK497cLcrvex9X9XtVeu67fZ1JTkA7NXCo9mWSMJ4pB",
  "key10": "63CjDz1dyttyoetYwrUgmLap9GNXBAiNVuVWczzFXQ3vuainuRya25dTWJLU7KZc33nzJqSPc5XFwxLbCvr5PxqF",
  "key11": "2SW8J1SA4sKzk5xm1KM3s2o61RBLDQVUnWthff3J6J6zFG3maeQCtHeBmsCeYQ2Nm3vxHvVWMb7ZaFx23gHpDjbz",
  "key12": "5jYaWNEnvsPekiWHYTbbKNjeZ5nM9cjxLRbGWmVJYGNRB8p3CB5WKbyNHb5vbXeJhdHdQKsHi1UftUareFpzqpH9",
  "key13": "666ZYg2XD7ZTTwUgMGkJXH34QsK39DZhH1nAZpMwvaRR5a7mcFEa2H3UAhma6nrj2LvGHiza42GFk6Cey2ybiUd",
  "key14": "4Noao8ynUXD8eNX1UZa8bcGQc9j6TuFKMVdAoa18mWGaV81pr67VgyX9x5LHsKDjocbfD3XNst5HMAD2yM4JCcxW",
  "key15": "ZYdeSiF4aP1XEXgWV1gVTRJqSNzJuE8U5GaKb7xvvbzReD9pbYpPYiJDx1fkoUJjp2D9woxWoQogx83rEYFs1Qk",
  "key16": "2EcSo3CAaMR56fY2o43xbMhWXZkMPsc9zSWT8dAA3Hs6d28csU8MivX4oJKFZtZ8Ft7gHwY32a1YhiUR4XQzZ4bG",
  "key17": "b9ntz13bXbL5qAWP29FrTexS7QD36rn1Te38zguGhFhmr6yAHCDDgRchd6GsVVRFnCFULkBnqXx2SH3TqQyRgF6",
  "key18": "NdaHnaBmsMFn9hmsnixRcWdr9HckU9eKT9ZHnVoMJ1cP257LdVpgMMx66SeaVg7yamk8opMXDrZjLgmvFn4wrmA",
  "key19": "5YJATHm9Xgpoxa1z8QTHaND6aCggGecwNfAJo3SpK9FA9LNvSN9ZY2c18ob5bMZXMcPSj74x16hXR9Z8EJYRQ8Ep",
  "key20": "5bbsFRDA8DbgtQtuhNMc7svwMX58n5tAKkjtTnbSouGo4oRhdvLfCBTVUWM6f1zhVEpSmpXuhRdBnN8u4jCx3mFy",
  "key21": "JEEeSZ6NfnjHS6pUntGxiMkP3PE8FxQJkGLqsQ3R9REFwNHpYMnfPAnrn7bXy4spmXGFs4WHqXcbEDY9pB9rWsM",
  "key22": "4Uxc2DAGznoVunstunH9cqY7KWHM9LvRQV9SgjMw8BdL5qzLJS9qD3gPk6w1h3cXcLvrD56JRvi4tTbTrUJ5PrX",
  "key23": "5o3oTKwMfa1NdwHTHeG92bbeWT1ick3RYNpCoe6NpR6bbFMPPwA9GKL8z1hRfr6N89UK9G3xrs9YGDeGerdVHYkE",
  "key24": "4Edpvvu6YMb4KEJvTHuC2qXtiYhgzDDYfx1emjcHHGd9DbCS5VDrJiD6CwYU9zSi7eJcH9FkFqYPZZbY6D4kkzwN"
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

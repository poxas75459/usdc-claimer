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
    "3QgGCVQTfKkru7u5R8XhtjLYrmKowDN2KyWvdhb58vSijKBSeEXmGv2si8pHKBBWVPt7zgdCkkd5Ca32rnhGDY3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTq8FVgtYUxnk97ZPrRwivhbYLJ4C9jJfFVo4uD782YB4aBJ6PZCzoT9HzioCmAtq7zae9b7J5PjepDuqnkjdXB",
  "key1": "3ZZLAM7i3iXA6snTGetgvsoDsdf8Cu3s2JoY2sVZWAuFwvJPHp3RZ6n8No1iMRfPNFmVfQ5VDWFiYtxZFwiqQtKi",
  "key2": "6Dk2qbWyQgAoecCadczSoX4VV75rNSwApVpf2o3jioRSrZHKnMV6VvSbPmQzCWZ68R7DY1ePf4DYE1fLYYG3szb",
  "key3": "2eZBMcVSoBLPHBQ9WERdNiTy4kMw434QAdmXgbiNphwAixYqRoxcBj9y3XpH91n9PNUtbPbXkkPBcU6RDKPFFu1d",
  "key4": "54PxtNRbgofYnpZjyWrGULo8DrgkU7Q1tq64pnKXGsv7tXSR4vnhont2D9QtmPQnsqpMr3fTdrZkq7GqVU6Mbe8p",
  "key5": "5z6LvXjCTyGBqBj8PoPspWTNZa91JZpVa3aaLgrKQADeJz9YThn8KHB4sj4gN44R1FNv9fsNqaF5TxroQCmv7MQC",
  "key6": "34FyChC8ufDxrsKLkNh5rTJKDsoqC326pq2e84jG1pcZZhk3FVVY2nGYmPuwFXYJcJ7WAoH89vJpVrxGtPoibnqB",
  "key7": "3KavYJyMZA9ZDsFwbHD2LUv6xmUskpuyjqSNredCxheuTq4EgbiKTxJ9GPLfqpKaWmBSrhK4aQXkeq7i8RoyPkse",
  "key8": "3jB9vHejBaGAwkPYRqhcRmynf7ppfewnaXvRmn22wBZeGTR2aJdEfT2d23Hh6TdKYdoGgsYFFoLgawzBJaV6v6BL",
  "key9": "5iLAzj9Dn5TD74HWCnQNUCYz52piZrnvn95t3TGskDEtnGfBbvqiHHxSo4RJNkTVL3i1E2zoLdxYYamKWuR3gJLJ",
  "key10": "3NuRNf2RfPNt4Xf1vKdXNvxcXHzBQrSPVPpjAX7aT8dFEezoGYBAX9mPgXhaXVpYxrKSyHbn18sYRAevSF1GXboP",
  "key11": "35fX8PDwcLK1kLfNS1i5Nmm1ddccq5cEPoxF3S7pmeAdcgUTqbg3dJhWEQ2ZJC2GVhJnxaJthNv747M9F8F38qe1",
  "key12": "28aWje1X9PfDu6TB7GPSUB5qP3gq6kfQwyuqn4JKbxKn6i6iQshmVwa2TdXU3c71LmY1gF477Xhb3k1pJCu13Nh2",
  "key13": "8ifvENZ4mXEhzJVTNsFwrqGQGmeapVeHgfpXmp2XTP4Pf3cvUcR8ESc9p5i3zgzMn2TQTFpWUt8qPjzwTNJ9sbW",
  "key14": "3aeTiKHNUL6z594kEmAZCEXRZETxw38dkM35S8oTqPK5K1fiYQxNaSuQwcBPfX8HTd2mDH8bBSbx6DK8VTWN7fTz",
  "key15": "vSeXSizfaCeB7C4DTE9v7wDJY8oPGcGFGgRWib9VWmdL6uDKy2DMvPSGtvjjmBKy28nWQFDePwwA7mv5zNvXyrh",
  "key16": "4sEFhoP1mGahFbt9sHu6Ye8b8wHH9o4VtukJyqJPGroxwLyCd8QFPqmo6atquSXvsnr4te1VEDbeq6r2YZP2yrGi",
  "key17": "4Df2jABCnVLuCpKVQzQyY8GyWsGwbLH1uwdzpXzwSW1gVqt1ozf6bsx9dk8upHyuvhhYFGBjcEdthSPtwG9oPpWn",
  "key18": "5DmMrHbGV49TRQ3pJdQc8ovG2xmNtU2P7DVo6MZJqacaJnEp4V91EDgKdpNCcXdc74oiW2mxNGuMSZhC29RVmRAk",
  "key19": "VJ6Rq9QqP6FGQgVZKhetpwE24QYkgjHfapbYXDVsZ2i7AZSQG5EuMWYfTdbVoTq9QtwjfqUvXcABwcfQWkrTNQ7",
  "key20": "3BCn6PHBVBmmhBveG9CNC6iWzct7CqHRWBazDpQPcc2aEmaGMLpCjanjfgVWooixXMUnQP3PJGT5jrz6n89NQ6Ah",
  "key21": "5ojbjFWwwhx5L8iCa3jtEktVVzhJf8aARhAE3n8nsf8CrqxyUfh5XB6AuNVPwEkAeZBmBVXYPUtyyQJtUrqSd3VU",
  "key22": "5GtjF9nUeBUkeEMVfiUkembQ7byqR1EM7BCf4VCh9AxjTn9MiKLwjf1kkeKiwAKVspDq9MFTvBVdYCpMbnh7wU2d",
  "key23": "2VMfC4t3gURaWageV9q79NcsM1p1wdBV6kda2KnFSJBbjnAuTAY1eWxzwvrHyKX6yo2Tc9H8meQFoqY2qWsqvhBc",
  "key24": "54ct69gqmEPWkMFboMPZnMudE1ywGJSxKRkMqD7MYJmcFMec64BDqbMkPgkjzzwW73cTJ3Kjbz4RQ8o9HovJWyMK",
  "key25": "4D4EVcnDiobD96gr4yiGW1HUspdwxDxYp42oe77GigGRQEonybGxTZf4U5gsU6qnpRNKchCFJMz2sgpEFtU15pZ3",
  "key26": "45krDn8yx2FbZevs6YeiT5wY7KMB5yMaGhaF6G8iweNT8ZYQ3Mjw66H5P52M7XeWQT6nhwqRRMyWRwZaZjpaqbyq",
  "key27": "242bUJ3V7pXwueySUW7DC2jpNB7pZ891FhN9zjeRY6NZVSYxSoCKUciMgXJftHSU4EwjBnkSznk9NrLEYn4YYkMv",
  "key28": "25YCvB3dhRWeZpG9jCRhc9kNaRorB7pwniAUojHBWsGaEq12YBhkkqLncfc8jrJofVtXxF5CyVsdKtZJ7CPkLgbY",
  "key29": "3jEpD6NkmDEMBsCJQ2wKQQLrJoRaFxJ4DALCEYtPaxgQGt7HowU77XS1wgz8qdDKQhCqhbCQbaYC86o4M5haybyx",
  "key30": "bwL4F6TW5bKiPEvx1dFZKQbD55GqsjJ8P5p87TyzezqujWyvb2q7xdaC2R7EhSYrykpTktjKqUMnymA3ansgxdP",
  "key31": "pTQhxotUF5wkxMUNoARhBy6Av8nnREfnHBodmL93S2jQBNXZzT28iV5ss4GSts1K1MW3ii4JYYjU6zWDVyk8wRz",
  "key32": "5KV3rbAyqFADWiFUCfkhguPwyW98LAdejszDqJum3u84gbcecpqNHuBSLme9cHZ8HdkUQawwcUSnrtnwaBU4UEDg",
  "key33": "5WvEw8srYMQkqh1DZtrTka6t4SsrQUqqULLkGeMFFA2vBHpZNqGwjwne6w8oVwVfC6McAbC7N19LE3UrNcppUMx8"
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

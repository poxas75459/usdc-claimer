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
    "RiAL8RgYKHoDxCUBgSeYUerhGyoEySbo25vxhRQ3AMregzLcbLLfVABw6LXrRryQjRAmRdpqJQ6h5zw2pvDDa9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1LaaHF2cTpEU1hhf5xxzC6n6WQ3XWs8bCPbvSyRQ4wMmdePF7LfZdVZtRvCunaxnFmLko11geBHxmtxksozkWF",
  "key1": "3thzpF41bFn25GntfMr95uWEs9taLzsigLj7UdgEczBrpNdgSuZxphYkh2fvxGKmv5wnajYFvQm2JugxisQBspqQ",
  "key2": "K1UT5yhsMEK3QLgsH8NxWmhrgGfg616LNvpPkB6ak87NcGS58e5fFgPBijY5afYxBdfGFyh74Bsg7gE8ajWKQ8d",
  "key3": "56hRqLrUdHuZ6dAZ11wpXY3JFY3mCoY2MybsTsAzAqw5xPmnUuiqqegyWWLu6QLZn69BjHZGkpT737S2GEViUxcZ",
  "key4": "2CPP6hVc9DgedP8KLBUbKdGdnsFUHMtQaQLE3Qgm7gmDj449zeUgZKFDiExu3H71jrbtwzrD21e8U2fR4VtRGMgW",
  "key5": "4M5PnAyBNvgYvAYzJ5vA2JTK3d55qUccadb57UiHtAp7e2DmB56bPYrZiXTUHet7yauDfxD7qTrJok9Cw3VhG4r4",
  "key6": "4vauUMR1MoqZiYGHcAfm4BV6TGtCKp4kXmfkm5PQaCFAw4uuY4784FqM5GRKvPrH954iWuuE14YZcDZNV81xMp4o",
  "key7": "5G73gS9bUySx36s5mrz72ib9gdBp8mF1diSQKTJQCZwqCsN7kHzWzqEzksDr3fNWL7xyeU9ty5zo7PhWV4W6fFPy",
  "key8": "2ANsA5bU5PQhQVX187EcupLdF1wP6WVFxgxeDbW5u62YeTUowavNH1fCMjKECDjwUAm6Gwua4vVxZnAgts48NRUU",
  "key9": "3MPBs5k47CBTcUR5P5hWynPvXPV1WFfbKMJUbNSJCgYSvLTiWRRVHQTXRy5AAvnsB8Cp5XTZhbn5upRoMVMdnsad",
  "key10": "FdeEL53Zdawao4tgpzarhx8HJmcto5VvTArpp5hx5YogeCjZfpCiVoTjw57bNvjfg6ntGnZB6hT7wWDU3sz7u47",
  "key11": "5eVuE2o1Zk3vnjzxj5befPHVYfBVwmDG2J7Qu8tNLmuANz2FcaKiehx276pSKoMSFFWxgnw7st8hyEoqHbDREap6",
  "key12": "ACa1oxLYQ1cX8DDvxnQBvopgurF2J8u22NVaGgm8SquzRBkKXXBDtCwd7vFGKP8zCK6MMkcFmEnRknZdauYrwjc",
  "key13": "VvMaNKvP2pPnhDHGQ7eX9daPRTwvnzvmu7sqY7q6XCSZtcqtBFH6Ucix8Ri8ogCg9zYZFQSbGMNsCXZn6ZKMPRD",
  "key14": "3AL9dH8uD49BC6LKY9XhZzvkceMG4UuxFK52M8DkkJ84uD46uTytif77DLJ3av5LYs9o9riko7UHmQCFY46biBi",
  "key15": "WrQaXrNbYfJvtVvvBLfLF9TP5PnCZzobEsLYgWeCmc9Qhw3dkdGBAt6QqTUk3SGJQ6D8XVtnG3L6YrY7dnVpWLZ",
  "key16": "4zSCydXjWWhAt1vEUwCoFNYLM3nJjVjf7PM6HskDVY4F5Kh5CBNRbbbxNc1271WNSkDET1rLgY53CayKt4g43Tyf",
  "key17": "PKWMejbsCM7FeWKUxFbiQUQvTr6QgdV4kYHSiMZ3Vk7qg3GErS1Vt1Hb8U73fQxwQazSxTiJbMTB5gmLMB1VEtE",
  "key18": "jfzW1FFVmXbUBVbQXatRfL7wnjXM7buHh73gkKgCgCyy8XJHnnqyBqMUQJPYbNBKj8W2ofC8RZWyLs8UYTEGvJi",
  "key19": "4HreLLPqyBj4bxqmzVngo2ubz7vECfhm7dpxGJbRq6dWvQjh4dWFhoodsRgZYL4chzhWdRNw5YXcgF57HXxaVUwB",
  "key20": "5dV36oBXrm6Rn1cUU2F321fqA4mj6MnRMUZEq7UpD7CKawq1CndwfQGmAuETbwpGeizqTLFppRNjfyRKWjHA1iCC",
  "key21": "32pxhxQEGv5FN39JneVx9cHm9UJnexGHsuk96d7YeoAyJbGi8EKABa5fS1qhAxttf2oBcqKKBAg4JUwoSTfwC7JN",
  "key22": "53gQVLZY5gXESwZvUAVzM3Y6BZTyBZN9hMamPC7KsKUoqQM7aVyekUFExk9qaGhp9s13dz89YwoBjuHZbFujcP6R",
  "key23": "MGmjXe1C53dXSzrq7mjtnLzwwVQXQKrxRVyteGSQzdGUAoio1Q7Xy8hBPFoVT3m7a8KJ7jVFQGZMneKsiowqw4n",
  "key24": "2K5HSG73NqLTkU3zePdBdBwYggFm7cfvesnYKxgWt7o2Ni4DWoVA7kqsnhWxXdumAN8rZv3CBgySTfsNKm43LxSM",
  "key25": "5HHf8QfjyeJ4A2eN2Aq4cteHZ4jKdmgY49BeqtyG7qM7b9PhGo1ettgcUaiNMSCMtf5e9YkWARcHm69RMNGVBvDp",
  "key26": "49gek71sFq2nz1js1hBUj9bGxQmJN3AyrV7J6T2XtNqsxgNpa3BVvVfx8Y2AtnuNBy1VSZzJacm51UtFeygj8HaY",
  "key27": "3WucRr9WfG71FoAdNpacWGG32dht2LgwtqeRvKL1hxKrYQgSPeARbDRBYPU81jKCjg2udnmR9nvnwWWEdfRaDcsF",
  "key28": "3JZQBewnoNcL3eWuRbXFYXHrfcsX7bxPuaNm6r6pt2EbKMYbfLbtJiSVMqFLQRAmhAjou9HnkuEkXCXMy8yHtU3m",
  "key29": "2LdKZbYfo7DoyktGqG5UiWuLmbuvxszkaXNpv3vhwAVeQNk2Y5vProZVXhfSFeBQLNpXc7UjbCsRWMMZMa5tgQHK",
  "key30": "5B88e5t3q8c5Y2Dm16zgjAWTgTRmL8Rh7DiB9wWeq6hXX5VDuYdtdA2PHAWaL7R9iHAqWkmFkYbtJDNB4aD52Sd4",
  "key31": "3PRJmMhp4sJRYK8X4sCmyY8nJ2fdUKjJr8XvDWBG8sFTZD9CR62K6GedZCZ36jdM9W52fBwwwccpiZsTo4AdrLeN",
  "key32": "2DD9Z3khJmRRghmvSzk98LfjWLkKFgnngZxrq8q4ZBLarsVSsaeFuKf9DCUWYWBWGU3ZimG5S7RqG8y33JbWEXDm",
  "key33": "4J6oYEjZfcywx1q9F5shSQXwg66XrANxbYowNZJ4gDV9LRH1rGZQ3JMsiZ3cGgisCZqTJMayap3BbmxMhQo51PYZ",
  "key34": "4944zCZXuVyeKda3qHQqBsyzEPtMN5RuMokVR3VMdMdBfCzBvRmUzKygJUUohRFB2fkkDQjWDBMdadGEdEhuhpWW"
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

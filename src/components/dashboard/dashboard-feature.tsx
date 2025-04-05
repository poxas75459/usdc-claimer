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
    "2ULasjACzmgkXyty5QxwzUuyXRztYyYeoEc8umdUaL9NF2opqWQfmMiiY9kawceTubm2eQTcngqbNqUEgdhZxi4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xivpTbFRdWuk7KYQyMqRCCzQNG7PYBD3Z5fR4ABiGqve33xw3uJfe4XJraf3dMMQnfm1FEq81E147byxWnE7UzK",
  "key1": "5f9KAR7wVVWbnf8eLLo6BSYg1D4pqeeqMCfpEF4ceYoCt6qjcDeup83de9KyPEUSnATsmE4DT94AvoF4FvoF49q1",
  "key2": "xesvw5fyxxT8aYFDV5baPzrS3SZ8nep7du1CoLa9xZqvJJuXpK51KkHq7MqhDaPMAtYdXNo1s7NX1td7WKFr6Pw",
  "key3": "38LHE3saeoTHM8fxBNkTZcnke8GPWkpnZ4WiaVAFiLgSoPR7mfkJuFMGTiP2zN765xDYMmwGWjY6pcd1Z51RGkeL",
  "key4": "2aUPJs4SNj5ahGCHaqnngFB4L7iDQHjB8kiycprmgFaUrQDYwe2zUV5axEWEPvTLYnfBoxU3mi71UZMWpVtWfzpA",
  "key5": "2C5JFkHrftR2iY1tEoXD1V64tDB4fVWHGXbj9AvagvTutqdcSMnHknnJJdvEvKhK1MH2gWsvk3B7eZRaVniukecn",
  "key6": "2E8MkiWtkgDSJbUdtPXCdb4PFVjpg4JkhojaqGtrVN3oevzbC9pfurDdVPHgRsjMh9W9KbTYGxioDPFUxLi7pWzx",
  "key7": "2naakvHLx1xyaKzBJjfHHzBrQmKSz5teA9hH5i84Hb4bNkaLY9GhZZ7wrmgjJGsW9fnWUgMdTDuGkr38gwUTid8n",
  "key8": "4ChmE5tdVwD4dQ5KnmgY1npvZDhCxPWcPAAsNC2kzsE5kEbZ2swPyVZo17deGVewEkJX5iz5526TyT38N6Ln16iA",
  "key9": "5ZCjzQRP99bb5LJcqEWjFJ95M4uySJ2qazLCq1gWniUPoVwiihwajuiAJ26NsacfVfTETVDtEX98oVGuf9bX5hXZ",
  "key10": "2TyzoZVBoEZep3X1cG9b2P7ezjZVnSC8wXkZuUibfyNDcHSJwAQUyrndY45ubNGQ3HBpLLMtVhY4XcB5UFKhVeBQ",
  "key11": "238dKNSnctRQgART21KPzfUHnan3u813SQ7VSsUVqmLdWEw36zR6xVwt8MXzycezDmWDfw5PzmFNBw7gLd3QfABz",
  "key12": "3puGpTx3mjxa49drPc1MubQcNtg9Zdk2xvNHYvdsr1pWtEtSkVat8ErLKByYArtvU6FwaGbZ5FzbFkVTioxNvZJC",
  "key13": "4V2KQ4nN6k61RVV8TxZigBFtzefbw3iSCU5oL2yCXwujJuXr8Evq6YgZWTGGurr72L2UafxmgMz21QBoNKh7EP9Y",
  "key14": "4qG8mS8gWoBsQnx2GZ18qoU8SkdMNuB1xrhooQuKj58tsxKsY99fJG26yckzosAYr2CEGJruqyj9P4PNm4W3qvkp",
  "key15": "2juc6XSEF9ev5kxjKHXQx62PRjjcs8YVgS3WNh3HErcw9j5h2oFU7ekHTcDMmJwTgWgTFzHJM6JFYKaDZ79bbLtH",
  "key16": "5ctirMJGMubjArL3VkiUqXEu8n1TUghB2BT5hAqw5yP77FbAaS655xYBNjDtwjVUMWcJGLd1KBEUActrh5vzwkwV",
  "key17": "xuLeUuF2SiYYZakaCFwj1Wsg6sCudyEtDaexo26Jqko3Bk12ao7LRuk9jyVP7ennbCbH4JchBLKSshw2dUsax4K",
  "key18": "2ZpYgh9H8H6tgjfUEJQuZkVK9CacymURHrJfqqvg6srQpaNAe7QubrzgkDNkpnoDubHXaQ2Q9g9gSaw3ax14jY1h",
  "key19": "o811Y6z2wyqLYZJMW6zVnp81jzx2hkT61FTatzHDxunACe9NpdZoVjiondzhS8n1BPMnyUuEMFLanY4BKeDkNGX",
  "key20": "3yjdMzH5vVqtX6Fnxywc99TvYD2WRpM1GDYjr8BkY1m1FjiV6b7zzQL81qhx6bJ3gd1d9fwT3y4YJSz9172YqUGh",
  "key21": "59dDWzFbDoGAd52xroZDuB5ridwht8KjsVyfxcw2xN51P9jP4zXHYZTWG4NVXiKapLMeUp6zbxTmpgKYi5LZK2Cy",
  "key22": "5QZND13U3C2jFJmRX1SMDZ8q9rHd3y1fL9uRyvgzR9HdFjScrP92nJ9cmaNH9qkmW6Js2PtQ5KExpwvbdnR5fwwG",
  "key23": "5svYUkL3r5nt6qw5MRN298vo7pdc83sJH7tCpDx4v2cdAsjGRU5rSZXuvrqevso5EErD2eWuV4yYjE3GbGsBSp5Z",
  "key24": "2vxaxJWs159SkmaQ1ZgCi8cie3XQLggwxduPZFQ7Mpag2agg66Lqo6GtkzDJBstsR3irom4LVMfZx9X5YziNTQG",
  "key25": "FERGhm2vrhYqJjLGBA3FZq6jJ5gWPRR4NuZWPipigjhhWmqryqeVXXMSwkm7xAnCbXMndDijtdBwV6Vxt2KVmw6",
  "key26": "3W8m2so1p6bNpuKYz2nNh3JrCiJCcHrzHc5sTGHbim7uoKvzvUK39cAbr3RMyvBVPAj5U9h2Arb84R7jRX86AS3o",
  "key27": "52aGcmC7hbCi7ojyGrFiFRECFPiLEAiud28hp93Gqh6HQQyHxdpwfoTEz4XWVCSAdoRoo7vA3WCBoWEAptiZNu1T",
  "key28": "krCBXfmvspuCwFu6Z6o9FAVovoxsy82a8Jti8v8ZeUU6pD971oD4EecgahgPa6j1n7jgcDSjce2Dwb2RUh5J6K6",
  "key29": "3BBfc4s52aGAak8ikHvRuArGA6AM8sbyCzXkBprhzqHi7xySUKUiUzfYwHtfF4eazftKm8APGMc5STr8aRb1HHWf",
  "key30": "5PcwsEXhgtwkXUT9mNQzKZvBuy1ovq11uYVdptV2AWEqkhWmk9VaEpeNphbxViQg4BBDWtPnCJcJENnf6mXGsThn",
  "key31": "24wiXPQuvvNUtjNLWCLZgY1AqEsWBWjF5umMKsBBfUWjoNu8wbpQ63SRQWRrCdYXcXWhTyz73vL7NXdAW55dHH7M"
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

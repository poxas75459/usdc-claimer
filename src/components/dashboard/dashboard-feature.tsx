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
    "4ctThMNtLL6vXztBEysBG6W8Y6TS1vFfRNTC9LFPyvPRzeiNuvw1ULLscHDmAarXDFCbKuhLk5R2vFuMq9mS1ufj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sakJfaarSWZSKg7fE8F2wy6v1yXod6B5RfPEchDmFaxpHWEd3ciix6n7YhGprd6e5cu5e9H7cxZVqmbgpcUGmSG",
  "key1": "3RSMM4ssjJp8JftASckfusJ4eUjGjLYTJqbUJvjxzsR2buyFi5vBDjRqCu5qzo1cXbi6PWfxG9DhCKdocm2zBm3i",
  "key2": "4KRpAmAZHaLyRWWXaVF3TSC4kpKzwYfaboATsM7Lo7Z8u7t31EmrxRWSdSeuRN4Z1nSH5jaNEvvoYXytYDkEJEFD",
  "key3": "37SLsDU8oe4moFvqQSAFvvb8AEahPtfdbDJoFinAgEZAn8CZYjd4NnyWix6qAd5tDKxUhxQUrbHqDGj1XMfVPsRB",
  "key4": "GFyJNkkYXi4tzDghKdk97XguHPtGCsttqZJQK2BozFEPJXtP5RRRo7pc4n69WBp4phcFGZRdC4YzVhzBom2Fecc",
  "key5": "4yVLDSEMCk8TKqkjj26BZMSetDUgDp9VU3SsS8RJLLhVoQbCdUsPNaDLakQx8dnoeztjsCcnwjbwKfJ9cfcbKdMR",
  "key6": "2YE6fAABWrw9xyhgWkHTL932amQjbEdZsp2QP6E48Cs54LTftY3aZqpa4VkqH1YwW9wyHg31mRtaxga3a4BfCohG",
  "key7": "4EiUqQEJWGwqhRTwyjhRn5SXQ5BKxJKtBrP5NPVaNxpWmcThVKicVggfQCyffg538SzicdVY9qiBo7aeWZ9DZrhp",
  "key8": "34yKEsvmqh4PwiMPsRza5P1rFF2radJaDVoBAVJhq25wdzyb4CcgQrLtV9ia4RZnRERZeK6wEfVzFa54j6ubm87Y",
  "key9": "4GCXwamoy5uo6LFALkqsLhupLxbMGsgVWZPcL6XRie6Eytd5w8i3DMQE3aPEvFXHWHp2KQSYCL7HEahoT1cYsbFz",
  "key10": "GGLAyX6FDfdH2Su1kHTd8MXKRPgKYFk568aFdYaFBRe7rzR1reDYcVsQLtBUQzfwNXC92fJKMb1hQJWyMKMZ6TU",
  "key11": "4swFNcByuk99PfihN93CnKGqWvermg8mVzKeEMXTv6FyLtEzUttTtbUxS2WuSgp2j8zKVhVucdNpegFRkk3pftSr",
  "key12": "27wkFhjfhPvdtZ2w1P2bPSNME2ngknJTiz7t3Gd458axuFifsAyYyHdTKiAocxfbSkJwGUf5hwY5ybgJiVQegwKy",
  "key13": "26UQdtHoriiwNWrCkiywtVnqYQ2b2jBYDrxESDwX3gBJ5LdWbxkGGfFuAiUPKJNkikGXchMzGr6VCtwUYiurnTzZ",
  "key14": "3DDrJtFodfGpDS3ZfGmwrMiYTsiwokyU2jP5smYqE2Z1MiMYwLctNPjoaCwTcaGjaGTwKAyci3M5pdYBBcDyDQNL",
  "key15": "27cnx36zd7Gq4iK6DL4rgJwwgffcEinmAarp2Ds5tQXpnjqnjydEbP1BBUhef65Emj7dSeoe4L1ru2Td3syoKJpa",
  "key16": "4PZTzGtbcdrtbv2hZboaWxDE5sA7YS4zTAA2tf7EaqFRHmiWKBnqfqP3FiVMwADruNKhdHSesnPro1sXqCofCnxi",
  "key17": "2T87hE37VoEcw4kWGhrvMoJ2XkG66LoAoC6KYUWB3TAZGhi5FJk1ibhMyiYx7f9zdKnWRdvuzG6mq8XxgNqWNjso",
  "key18": "3UckTd6zmdmFhKDHAHt9g3PixokfsUKJU6EiaK45bbcC7nK2mFUyF4wG6kgzmo9bssAgtUExiH6XCgRRYTsPPGQH",
  "key19": "kxWxNkdrYwFefvhhBg5QHLzvvfU9QbA9tzU1bE8ZKnA9w6RHhAk1X71LBuK2zSXrU8h5GUomypiTHxrsTSCN8oJ",
  "key20": "2sgMHPExvxRXVLzMgDgGYiCaex5zBq6UYW9PwG7VxeFRyJSZTKubWSu5Gf2wER1ujT7PWxTPkFiNiJEBd3Z5t9vK",
  "key21": "5V5ojx87HjgwjLWnXd2NCUhcZqk9tQjVGvPHF6CKCdNGBEcvoiEMFjXKbmq91Pm9dC5syhuf8kvsAjVBUoPXeA4o",
  "key22": "3Nje7D9bR5upLAtRGBgpgzQWeuwd9nzkyjJzYQp9h7CmD1PMeDJytV5aLjiEEPBsALr8rF7N1tDQ4wx689RVfa5m",
  "key23": "3epm7NCe7kQP8BPuUYtbY6EzHZR2jyGbmGPHMdEXRGYGmeCUiFLksrddvomiHXKHa3jdCnQFtYs8944DygMyXVnL",
  "key24": "66RvAPyZi4ACEABWUsPFnhxLxbVDHWJFuAj8DxRAQ97GyDvMwqbQErH5kNnCKgAnm7eN9DDft92QF6fnys2AWte2",
  "key25": "2dFwNJFub97Dwgq8ou2mtzLvmwMYMeFeEoXkBzS3p32igpeekX4XBVmkiVmn8Pon3XkzS2hcc4wQoWv9PNaYqrzD"
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

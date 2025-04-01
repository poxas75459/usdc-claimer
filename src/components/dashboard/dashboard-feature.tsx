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
    "QpeEP2w3wTnD9U5WSzxvU86Vr2FMWNbehx4aHHyHWrN8wbh39jyFwZ9VJ52PBzHAhXrU9g4MrYXfuzoNMpxkYQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMom1FFWnjHQ5C7NtGNG4RPFpykHCS2rcYw2zXYZdS886XJnNrAAcgujfah726EpFBjUdANTBVULZCto2AeCEfb",
  "key1": "3fvUVN2hPT5jXc2tCHam2iEZeQz152Ngvy9zx1PjU1deS4gkkSec8gSuzZpXVQLMN5AqFXZGsMFpPJgXeN5iTMbQ",
  "key2": "4acf4badXo8TquaNhhzs6FHNVwLH1D5HfFEWQh26vtpxRb479JT32AdMJ89VLeRET7afZcpWdVEfhCvK7UDJZn54",
  "key3": "248aRpaEokYhoc7NmsjH2yLdCtmWFCvSLRxUynjRZUxovKEL2T9zXnckuR7wRnaRyyQwbegXTzRYDnBzBTd6Fsuo",
  "key4": "2ZBrSwGuA2qCDbeqZg3PBUVMeKow15eNmkCjVP6RjanJrzstdbt8vxsMg2tXMrcJeXJxk318osuX2zXcJHwNJ8Ed",
  "key5": "3BYFoQb1SGZMsCeFTbrwwGWN7KHdtruCDkE6KhinizbgmNmN6KQsZuUu7fvhE12Ls4gmtrpTpejEehkabCbgW3Ko",
  "key6": "66NEoyRREQe4zLs7ZWMXXvinfzMAi4MA5DqoYbzQvgKo7euEe2TzaUYLswaAXVoGfPnf22k5tJwotPRRxK2BzRZK",
  "key7": "eBxisXQ24CDJUeLcVBUaRqQi2VENqsHsj4jipnBKXYARdnHiFYXNvktu5uLjJhxzus8k6RUjjiX4XkmcXExcDNw",
  "key8": "uE4PTcc1s3uwf8HgQcoohiBLHoTS3Bv8Lnp7CfTj2BUv9yLLZ5hKWynU6x2WWdEh5f1EPCSSLmxQ44CKS5XbaUh",
  "key9": "335fpVe9nQbkKtXRP3XWAkVbFZyHU8hvXNkgqxu4hudnRz5EcnDAMoL1teRCvT9ayCQBF6FPaJnJhenqvURrnNqh",
  "key10": "2Dpb4mpu63W4NXsGBknQo856vfwHQAo4kg1qxAt1VU6FY7DfPvAgae2RQGBZo8Rmwk662mDSPHJY6h7Z372WRJYA",
  "key11": "54srfZXkVcSTHhnAkTHpwTEj38sggwr9HeivpUzCjbHLMZnV1Azx2qWAkMrzd7FMiJiVya8vbbJZrxuT3LHdtmDf",
  "key12": "2uY4JErNUq9tiEjRVw9H8X3jMgXYDwMZRCwPecQ2ZmuoEduNwBisJNtqXg5MGzuvgypmmvo9vHvrcg213PgWxZTm",
  "key13": "2F31i1kqPMRuwvDqJAJYrn7KV8S8tKWsqw1ceTC3DXfB6r8nGg8AKys3S2rSF53MRsYfZcmQ3TwiYJRvNCSp6Vde",
  "key14": "3VbDNKkaytAKj5peC2NoxoFx24MpgSbFjbGF1C6j1Sexf7z9XaXTAgCdA4pRUaH3CsPW3hBsP2dSiMvyxxNFzZKG",
  "key15": "2ue3gBCJfJBnDu2URCFKWtNM8uQv45fL8o9VFXNrdV1bag8hNw8njjp3P6m3iQNv6yrjsib4xtU8wpjM4wuxkHcs",
  "key16": "5nFWL4euUQ8FYyK2accFCabGr2y47hm3tM7cUEgLFizkihK5eS1Emax6XSeycbcSSNuVz2vHetyxQHe56boN2xSy",
  "key17": "2tbTuUD1QXWGDDduGa6qdXYDfPHkCE6UyRF4q7JnBgGA9bx5SeqQV93fM9F9n2Ny6NSd1N6H3xYF67P5t8S9JH7w",
  "key18": "4Q8KzifVzMoG4HUxxTX4mkrfdgVqKQ2Nkc76UZ8RBuJZPhFWpAj87f3QkoP3vV8UKGQJWYDcVHcaiqRGVHxUBxeu",
  "key19": "4r2mLPChUfpPXmSTqSPLt5bBikzCmA9nex17vk9LhvK6LJANad3SnFoFvrcffRN3qMazve3F87ASb6YSMuCXQX6B",
  "key20": "38WMYahXuAFro5PvwS85QoNv2kLdkZFni8n4oAaaXtoEA9cozn3FYC62Eg6LBH6kkKfP3KcPaHkdFmhrM89XDvar",
  "key21": "aRQbK5BoLq3JwQaAjhuFwtzrEPsd6tymNnchwUQ1unYad4tRdiHF6ZeqEJo5ERUVL5admBCa4Rs21XUfQnrrVBS",
  "key22": "5xmcGnD9diYTStbvEybtUYoMN1vjSKSRj5JVxKWsgc7jFNDmowTHg1fgBcnvPWKdLP5BQbpTVNDV8ZPXaUtCENfs",
  "key23": "59K59j2iDDwr221xNKohJDUzTdCseqF4XYvNtSdnVcCMmG6QaU3PzEK4fuyBKCbQduqqFtZ2Kk7d9wEK8wjvx4Tv",
  "key24": "1au76QhveDta8Hrc7S2r6YkSQC1Z7cepgJunm1iW5hTr1bxzfgA8EKBD1QZeW8JvUL86mgKtpr7atyYfDuDrNzC",
  "key25": "4ysMmkP5zasjRQo1CE6EMahbEEsDrwBaL9NRggMe9Q4e49xtssLPigAGgQaxrbe3aTCNQhypVShd7kWUwN9NpLko",
  "key26": "3ijBgx3ykbAeSgK3uGii8UCw8jZJSiNEKEVnxMkj34ZMSykmJTyrKJsDMTCMEe7i2PT8sHGYshz5aVxkndhufTEF",
  "key27": "4QTmJccHumpTJQv9yHyqJJtcbGt3hMAKSaVQVCyU73WW7tCn3hFbCgNFcqP8hVmh2Pzg9E4XdY65x5g7DdNZgueT",
  "key28": "o16jQJqowzgdoyMFPL6npGqUkRgHTaYobRCq9iickWPqkHjHwtSVonoNaadzGzsmwUDTUhX2EJ2JuhHY8evYy4n"
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

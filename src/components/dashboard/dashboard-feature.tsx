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
    "XnuSLuDWkU87WLmSWqwut4JXToxR9m4QATMZooEsRutJLSubiKE8FGDK23i5xJSoxfnJprj167sAHLvrS6NXc9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R556TRKbzeVYb4Qvmahvduj5iQSDdQCzajw7CGLnnHccE3p5WgVwbBVPkekHMM6Ski15PkjA6rzN52SAAUAiEuJ",
  "key1": "3ogTrxvFwtZBjhm9aH89nY5xYv73rdsPNuJiWR8ZdkCzc47iJke3t8tdCcD3yn1px6WiwnSytKicE8fpQ9L8Jqhv",
  "key2": "5wVMUcY42TogwcyJVfkqWKumREUdDb7fSGx3cUzkhNCJC9npCm6nrQvtNSg7L7VD6tNuDXwnqjvpKA7X22H3QU3h",
  "key3": "5uSRswUswAbUJnRcc9jUJXU9hzukto4soc4RvauwnNqArXv3EhrTsetdQ6kNoPNxfdMfqWdG1wV55zkbZpbLojUR",
  "key4": "3v89yjUZVsyf4YaraLqUNc43m1WrtFWT65w5MpYqWToQYdSqjtBSDTaRgAG9NzJHviGG2Hp7ht89Z8FGGsnUpK6T",
  "key5": "2AtXx9AXfpdrT288gAxj2MWKrYLCwse9LTg7TSry88ngZshVv9nLkfz298jhrq5HuutdVD2po8pgaN9gCQBAAmDA",
  "key6": "2Zwm4VRu7RbJLwrtifudeLGEJj1d8HuQynaeSvPrq6itx44599uwQAp74VpsfDuu5xa3vY1QwsvRPaTfoqtNtMpK",
  "key7": "5b2AhNFw4fZvt6n6FYw3PNt4gz7boML5T2BPcJHTeckfqJNE8RqzV71ckmaAyRhFkvAwayvYfoa3CKK5pELDJpWf",
  "key8": "VN43hF3bwuA99fUyT4mPryJcDbyLZNZWTyRYR4TAdETB4RZwtEt29hWqVFoFK4Y63gyvU7pHvPwfggDiRaWZJPi",
  "key9": "2JhNJkLvK9dkTJstVWV2UJhP7CLuxNCo3v8ZtF2f2jRcSavEqcNYd1PFDcrp6rf54e9KWqgwuhoX7Tx5FxZops9k",
  "key10": "2D6AbeZtmaZA8kGisBAmPyQzu6MCRicaAnmvzxgcyEDeGB2qv9SJ4fUeDrUonCDGV8wK3vuQ4F5ShqeRXLGpdTAc",
  "key11": "2dQBi3aK16qd6xpRsoFTSqBa9kazZPGMNhYMoZpLkNJ5K5Vj4oCFPuARNtwfH7ydW9V7qMMwE3qn71GPMb2Zok1p",
  "key12": "2YvFnAEGs9fYiKdoxT5kF5cVcPQLr72J7AuSB1btHc3epag4oiEL45g7ffX7XSiAhvRk4yPZHg9BBouJZ3HQW9hN",
  "key13": "FVptorVEwAzfQexAB7Y3wHFFuvAYNa8USm7hQeovb57SCyqxVDjEMrDdTZibKa8aNowjcBARHHgR9ciUGFodFCn",
  "key14": "BYq5nyHmWbCtk91pBHdDwUyDQkgn9BqsCBjdxVxk929muGHSurHbhMJqK6L2xGZDycAB1coAqZUMeEoSt6NTAbY",
  "key15": "59EknwGpnkQUV92XMoDGCPdjFrTXK4RFjQ9fgfEp9GitkRGHAWmJhz6Kvpk6GyqRwEANn8K4eALD7hhUFiuppXtK",
  "key16": "3gJCsu4rZT9Zw4shJQb63V1bB1eudHVbGy8ohU1ggRk94Lmw6SLU1nmafesFvyeD143qT8hQnyPwGSo3uYNRknEZ",
  "key17": "3eeHpVzEBHA7F92BvEi7ninEWHTHaB6x7BKsmFJXj1uQz9NJ3iZRLEeCPCWgMXpz1eKXAXzKiB3vmhAkE2PN81xy",
  "key18": "4CRpoRmsLB2cDLqD4HFqCHbBaB7EUBsmHU2tJPJswPoqJPjewWcdqgtZVRqpNNUa3hYKvZRVAjPHy7ebkCGFvxSU",
  "key19": "WDPv8hbiSSN8sBiCYtCDSozj8RvbBHTArAeFaBe11x7wRsDzoB6HoGfgP5GLDgUToLajNxfKyEv9JYwrMc9S4pF",
  "key20": "fBvjwwnZngiRSiLFmxhaqAoAHhcA8x2HGfqNaD1aJHTbMVqeWNZ5FJwEn6RyYiFEzEa66trEL1ZFgPwD6x3gzGn",
  "key21": "5Z368bagCqnezv8cymhFNL9QhrvQaEd3GTR4MpymH7ALo3zLxF2Yixkd5eciaEup4DjPbqu927JELvnm6Gm8Z2t2",
  "key22": "3FjtMUe37CwyscqTmbps4afn6Z4TswR7esveviXJ39GySe46Q2gRcpzWF1nKWn6P6LRFTs1mUPNftPak6K7eoAGD",
  "key23": "45xtN2knHfFg4ZqYrXi1J47kebedzu35hcy4c2ipuBHzYvVxDVLjo2uBpJ7mdTuVDuYnnyT3wBi88SmBYNB7knhP",
  "key24": "3yn9bfzxyxTvKasT97xw4h3VEGEcgfDv1NVDDWLCWS2cCueDQ8vc2uke9xBV5BWuVbpFKeBj713jqjYMjs3wDaCf",
  "key25": "3u87ZoMLBFdejhPwdsfquNLZ7XT4MFYFb3yazPEsJs1mrcgqDC6KNvVRGYEHzvqwDPoJt4RfbFS89kEPHTfX653L",
  "key26": "5e7YahRWNt8iJ97JCVpxTvQvgJ9UWs1y3KzH82U9FsMPkiBUhKi8FDeBEvNph929DNLsEhu2k2z5QBmYWwR8xMDd",
  "key27": "SYG9EyDBUTHRdro5B8t1L7rPgwcmuTvEzr1yrEuiumFbx7NWJkGf4phjxuntdFLbnNqDwmyBh1fAwMGA34KqmJq",
  "key28": "5Mptb8mNBkVGBHfNPLboHbSEQYGSvxLPe5EqSZixXHD8Nu1n89VU135zgxgjzE2fqjq98AzWZHwP1LVn9aSgtPTR",
  "key29": "4sd8gihSEMmXGU1jQmAQfuhDT5idgZWapSN3RzoEUrHzgQbgbGeN7XkdyUsAyap55NCZe9Raj75kiZAucfcqW8SY",
  "key30": "2hUZPQYwLYkX8mWkay17UVaik38mHAeCbA7mscEBsa3fmZnsJ37XSfcGJ7hpkiTp2K6bWuMXrcoL3p4cyryGj9zF",
  "key31": "2D11dofbdHzZ7bfin97jCN3PUgk5ZWAnfivrGNoGJV8m7kCewZtUDcqYdmKA5TGE8qNG3XoZq4hg1FvNJnE7tZoa",
  "key32": "2fAxeLdpApK5YMNEJn6QUBQGtYNHm2gUKdAapYupNxna5TDtFgLsVUMgWJ8tufF1PwGz3amQBMxnD1gditWDDDT2",
  "key33": "4qe4ZAhymVSCbNWRe1EPsnsCyv9zJNTU2zaEfFpNbRFVRnt4eoX86BRbW8n2zacBChBxgUy3cEFjSEkU8NS7Zmfu",
  "key34": "PcyZNn4ZUhPXzABbAsKif9cByDkLDeSFbBzHRdMDCYk6Uv7WUr1o6MA8kov2vmYmUgJMHGyearQDkWxBiByFtQz",
  "key35": "5ddoUG27iiScDoFJyPL6kxngB7BixGvxBG9ag4g7ioA7ehQM89WPznwrStbCnrdC8tFnfHcWvpSZvYveTyitbAqj"
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

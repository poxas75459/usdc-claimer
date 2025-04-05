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
    "3FphTajKAEEhLbErhcT9vXMZ77xFMyqzjqxhaKMU26k5dXMvty6e8seaCoEbMrVizAYXRfRn28rRKDsAPD2kmrZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgE9ksyL85L2R95JrrFsCFbbW32mpLjx7o9Q4BeGj4tBNuxzXwmFnwTDYCdTms5eT7gm5W1kPPLjJbPTZ8BceMq",
  "key1": "7ScWVG6JXKwinZPgT3fdNQLQJuUT5KCL9XPnXVZ2jXkDP5GqcKVEkoD4nqDuVgPMZf9xGskm9EJLWbMnq5er7g2",
  "key2": "2Y1nSNVqU4x8GVB52t9UUDJ5u71eCaAUWPrg9F4CT4ef5WUDYGtQweLtDLwyciPEkUBYjs8bJSbASDhsWUkF5LkX",
  "key3": "5gdwa5YZ47NJjaJt1K6FZXsz1W15TZFCejp3sycEmXQZTZF8jh1zF7GcdyLSbovP6NE18whnsvLxLUMbfQHQzSan",
  "key4": "65LxFzhpmmfPjgx4jE8cTryce1bVRLJFC1vyHuzJqHYUCGPjAJhSvW41cox2egzEDLusyaKuLZdorPwUGJZJid5k",
  "key5": "532mrStYMMb3wo4UcLyYzFqsDrC4SNYokPQUd8bPVMrwN95SbB8qmqaaofKCRTZCZahZ8XmtEzyb5FQGqKzrCr3W",
  "key6": "2CYZeJ5wdCpVLAZfvxwdFVtM4fnVf4YrDWFTCbnN53DWB9guCZE7h1rTyqvT44sBrB1jxT5YxbEZWkMZ2rJSvuzg",
  "key7": "2z1nZyTLYTE4PfFrAAhPMxHVFGWPhiNgqanfozmXcsVFjhjaPjYsXzpaDY927Vce4BkRhRYtvgZubBFUJ6hUWLeN",
  "key8": "4Q4WW3oAsrbThzkC9wEVonUqm6X2KpMR1BgG1wNK6xH96XNCsDDy8QGL6n8paHKvLXxkey4uCgSu1dR3PwnmZYFN",
  "key9": "5qNHifieX2aPaUR2KLv4Xa2vZ8DfJcAqfUq6EL5VGfn9YmZoh3KmGGTryxEq6sqCqjcJ5KTjspos8jGYBtuoVoh8",
  "key10": "3oj4tCDAvrcz3UUHY8fo6GMbzy14JpyKMaPoQ5QX6fGm4EXgkoB1MoYpB1ri1fYyM1hUTriLmdb33iuW5PPMQbSi",
  "key11": "2qUShk79DQ897mu9Fvb5SFa7bQ5FZ8WM9JkXRY46TqB7HSFkYhqKfbfepaAYJk9XjeNXJugch1V4jvDSSFDVa9E8",
  "key12": "3TXQjRtJKteW2tYyebobgzZj4tMcComqTW2LzLyitPeTFzuYdqfKUHQXyhpQzAD5F7fxnBGdxdjgDtghki5rBVyZ",
  "key13": "NqoKqZ5bGvmddt1qBPQh56cRmfP4HADCByLzvD9FVZd9xEh9sJQLM3RW21dbfLKfPRsEBYwJy3QkdSDadoCbB4U",
  "key14": "4NJrs1F5WDUjxrGNKzoVMmu3MuarQKQXUWQPy1Aw9X7H3dckWRZS8wbsqCjBmYVAcCdbqHRCMQp9uCvcbgvNWuyb",
  "key15": "3dqFkXYZevw1TdFX6tbLVGvtXx8CYbKa9T7t9VdLuujx6vgfqT8F33SPNV63Pt8LXfsqTzLeBsJ17vfHTfBhFW87",
  "key16": "56aoZ8goYSh9nbCPVRE6yCh4Ry8ArEJjQTThrBXgq2b7xpyBnfHen4cZXX97NpUPzxojB14bAhus1htfVWL7iKD2",
  "key17": "2EvhQpQDdYjcrBviugvG5VXAv6htQXbKQeyw5rTCMBZqY5UN94wakixKXVRpbWb1ksM55JevFBMv4UaP9ySQjZgu",
  "key18": "4QvHxmrMfw4x5skd4q1nBzmBaJkDvp87WwjE4H4h8L5ckSTJtRfDN3nNWhib7LUHqWc2ca9YTazXFfx83g2Y7QTJ",
  "key19": "3caKRquAhj5waKecuyCMjjZ7wTsL4HH8XWjodytu9HbfcZK3Xm7NBfYTVyD4cccozWTmdvTU6UTHCgnrwEUxww3W",
  "key20": "4NLRsAB8Mc4MX2y1sQQdutmczsNhKuxRkfFbo3nRQVqCvACLQ1FojqY7Qo5kGocdepxorvHkTZt5aH48tiZufSf3",
  "key21": "3pSAz9q9A2Cu16Kw9uWKVmADedM2Kj6MbEcxg24MUBQNbiYtrqYbEdWSHjQSVxqFVCfXc1fLVWnT4aHNcKyvzocv",
  "key22": "2n2eReQk7UHenYX4HgftjcZLQ5BUH85sNagVPo7CxXTMG3mVd61omdL3yiCcrHcDcZUUyRZqjpnVNugYDDvEgMVB",
  "key23": "3XB96hLygBPVCmxC6vG2ziUjosd7SFvLxQkDJb2tpU837f92Psh26wEFzxf83XEXQ2Rt54uDKhE9puxGf3hzPPph",
  "key24": "3EkQBsbHCqksbgLDFNY7jwRSBU49uubuPgpxK4r7F3RetcoFktCFtp5fE9Wdf4rkDH8f9BaMPga5WpAeibQS8Fu",
  "key25": "3Xj9EGcSQbKtASwm76jgGBMzBqvYSP6JGj2GoCQWBYqxWuDFnEi3Di4mni4pwPkAT4LnDCBAaVRDB78LFLGxox4y",
  "key26": "3v9CeaseN2jgB6Ft3FKJFjtT1NCbtAc9XvQmFFvyJwXDwyzvkRShbXSk1DHXYzgGYzrvQ1BGcPZZmmWAUBWJmeDt",
  "key27": "3SmkXbcAV49tWNQo6tXTTn15Jy9yVjkAJxao9t4SCXwtXZkYKgMZBCvoYFWZRcdNPXRdueYiqytkTG3CrntQ2fPh",
  "key28": "4h738vQ9vRgzqLoh3umf84B8ztQJwftfzRhnYgokB3XdukNprAYWoBieYbxyBYJzh8d7vJC57NRpQ2Uxu8r78ZvX",
  "key29": "4tEBVecR8P9sXMsDpPmfSvVoGak4yv5rKz8FY3WQd5d3pb8PHCWPG8k2hbMdAFWvncf1KFiK5WYjTeS55ixUfA9P",
  "key30": "5qQVYrjpJM2YKw6hdwE6pQNUL1ebMhphg7KB2VcABFbJRdgDpBpL6BtzJBVqbd3Lwq86cWiumrvwGPbErXxbjimB",
  "key31": "4QdAtvkiipYwfeV14MEpGR6FgYfQHiWPhcRK9XEN4kcBcs1RSuKTsfs3pCERczi9GfWJCzPj3cnmnZEisApv3MPg",
  "key32": "49Udbhm4JWNNZvpug9XYooaXkxR4vd8yR4AT8MMxLQCs9Qc6nAQECkFH9tv8LjCikiMeGyZW8HGPSFhK1Qy4UvGF",
  "key33": "WdjLP2LTwkpBckkzy2qh81FAY4NeYce8gaoAfDB4noEWWeX2s7t87RpnWJUQwMMBYU3LufJZtM7VEUasPhoTNWB",
  "key34": "4ccV6jmZaqkysnDigBqzsqWQqtmCKMCzwp5Tiutaeou8Q951SB25e5Zz8wak276R1ytVRFu1p4gB4Un1t1xrXU6A"
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

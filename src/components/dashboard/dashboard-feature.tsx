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
    "5QaRCP4RQBamz1F35Xw42qHMZCwCbmUe9WCjodRu7kcVzTQXzgvzi1aTFAkcYPXZ1cmucd51xLrJHEnPXxoCKLCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRzMPRGU9dQt2rKHFe7nxJur1L4o3DJ5TMLgitVnnv78t3wwLCP41FpuvPUBN6V1U7HPeocvwKbzAo8ZyAeA84x",
  "key1": "5Q2eHLZxSWcCMGqZtajqN9ztN6tbr6p4ftBKvQxsCq8gjcZckgVNy4xWKNGJFbdMCDZjtEApD5mYiTzC4HkVLB1b",
  "key2": "mXAk9RcCwzgBV2QGzf9MdPAANsRZfsW8cAmSuAWgcXge5YwjzAWHsvbu5UtobVqXr2Qa1qbEe3PazbE71VyEwQp",
  "key3": "3PYYEb8PyxCFvbT3GVwgUxFYT5Xa1tCTHBJZWEbqaYSNLuQiZYKXwGUmjxBWNz17pdSJpA4UmRb3NyTWKxuaHW4F",
  "key4": "3gxA5BqftKms2jZoisn2AesYHsuZJKzXciGjjNJm7JbrrvfrRePomTJTVfmjjcWDHVHwtzTqE7ZH7P68oNTvNbMs",
  "key5": "4HhPYyyXpiXNJwCgdAPEmw6M6rbapoiwwe3BEZgrS1tL5Dm3WQB2HAtsVTjUc6V3QJ2MPwZtV77cJZax2hoZm1tv",
  "key6": "5sUbAZwSbG6TX9TCPFLzifd9FdYGtrPQbKYMMd2QrXaFRrUWLuW1tEW1a6jMBCssecgDtc8BjV4bBgKekVkgw616",
  "key7": "3CVoZCceBwMfnm24qK2EcCoj19EzHj5qR8BfYRLCRryT1R5rCVUvnFKo5Tm1oXRQ4h55FBK8rcHtCLJxa1qbR5F5",
  "key8": "5NZGijkwzRzTQ6jj7U7t8bBmCDXdKUwM3JMuhAJeGDFm29jJXnFeL6fogTcnRcZZykt7haretiHdDAvF1Ugc5bp1",
  "key9": "2meZK6TzqhHeHbFu4ak4iivS5RJasogdGJ9NX2AdDDbM88a5WEBj9Chwys9yCN51wKA3PncJ9ZntD4bZ9jASz4Xh",
  "key10": "3fDpPppoHLEMe1M5nPDBmQYB4pVFXrsCVEB5NHGNJ36Jmfg8HkbpGETZC4QNPbrkA4XLYfxfbxpN7HRQSyfF6z9d",
  "key11": "5Akd3zBu37YnNKBqd3pzrTRHvvqeJXEYob8JYpzSxCGcWNPoS4Syi1QG6TDvZ77jAm9v6FUKikGRwCptdv7QhW59",
  "key12": "3nWLGpmLKX1qFQwWDHQTvYvnYmuU4sGGfrKtkoT3usK6VJ7jb61p3y4jzEJ9zEv77EfTheh6gHriTJJmqUbqHSzG",
  "key13": "2w84mAoT4jTUoJP5NACZjuUSUFvDQX3sGWMzzySVsaVK7qRCiy4rxHN5T964zN4K91SVastUEGkY2FYXJa8idEW2",
  "key14": "2LfG6av5Z5fMVqLSxJev6eNrFCso5nseXWdfZsSHSH1DLAA9ziFeD9RPvNsAsoiAejd5sQt29bXeRVoNpZGPdvmE",
  "key15": "2Y1pj1ETfMRE6M4oXGhgL3VLXqMtJqEGrFPor5dxo2JQXwx8e5HMuSZxu5aTAYgQSFAfozQTnSQZLQd99tv1WJC1",
  "key16": "2xhnwUwM8LY6i7HTpkpTzzXhX8tyfMfaL3FNUwcGLQjiqWuzY6KwkJFs8HGA8rKgy4Dyqi8VZxVGooeGHcSpQjUx",
  "key17": "22mtYpgJsWoBvXvX8ipP2rAYo57RVnQ2EG4kpM5ML53PCRjVG8Nj2HJatwkRQPphztnN4qXSFcNygkacD8xBM4EK",
  "key18": "47KjXerBf7RYr8KtXMSzZrcpaVbDD3KuJeVdsS9BCpiGHp1AurCseacVbT4AL8fz6bRaF5A9kxpzzhiX9pDCZRsW",
  "key19": "2bVCTwLLAfqWUf9QjoWxPCUeRG8wPgGVrkvRrVD4Ja3t7kjCzmAeabpfExMsB5N8T2cs9QBKSUUnTt7PewPZpvtY",
  "key20": "5e6GaBGKjexDLHXqsUzRV48Eq9tkSWdw2u5mtXQiNuW4o2QpQdhzPpcvRnV5FkWzcjvEeBexpoSss96tnkenyiUe",
  "key21": "eGcpxRNPphEu3tJvGoAwQamRe3W3dEiT6et2yyxJJ6BpogZf1iwWVaLh63dMf9WZuVkEFL1NFCZyMsBagNKHECe",
  "key22": "4BnBfKCxPfFGriksdHMRe9v7h5rDiNp6GNjwwFcYunw4gGMatVDXanZcjeRFPkYRbeaxvrhSYxFwW8e4EhasFH92",
  "key23": "os98M2LJLpzgB4gExfahspBxkmGE77MCmrR43wAt5Fm6niUSgXDcL6RXMDLQEAqr5NXLfEA59t9dFZYgvsbA7Zd",
  "key24": "4B3VkQLPvtjgtziXXjVigTMernvbgyVP4B1iZEPHyMwrK3LfcqhKyYPrycme4UNfvzdkxPc9S5xvHRmLn85bUFnz",
  "key25": "4PpYfiqTQYMM67ccYHRtSgpwKsUXFHDDMnmAvwzK9XnAxL7fEsguDoayrfLvSZtwpEoNAigRWJNycGjA46BMvLj8",
  "key26": "41QwTubpGxHbWpyRcuqLARQ4wQgxHkYUJUujSJVWybnW9CVzGwkkXdLLshxQzzTpQGfZmc2e7g9U2hfDXee2AuMu",
  "key27": "5y4cCs73y63XNnh8yXVEYWQmk73ZQTqaHgbKtYLoaqC7FqxwHYzsNL6nK8xom4zTkg7La6GhpvyjPjiZBvRcVk6E",
  "key28": "qqD5Rjm99iWEC3Hfcs3BofDu1Pz3okG6eMPj5SefBawMuiisf1ewdEr8fxXndtPiX4oV92TMCmDr1eTFALt3D1V",
  "key29": "61HyzHZDKw1TK9myPPu9tfVQuc6vuWfeLaZmazfM4VcJ1wh4SjA4unCt8ySwbjwyuQYnyq8vy9RgcoqwnYNT4iCV",
  "key30": "2WeaFLcFohQzeqC5hLrJ63aDT1a5mz56Q3jbrvrNRgQ5s85pUvNBrgox6CQep6fTPN2RukTXNJSGbgANee9LoRis",
  "key31": "QoApWJM4gtStLP8gyixgkNgNghUuhRf9hytnvMCBh2m5xLFEgnwbNmKYKpxU1N5p2eF46dZJPqdsNpdAtYFBDqR",
  "key32": "5WUEdnduYzbHLw7ydiacLtB8RqJKMyb4kJpmPeiUaxVcA6dyKwupbgDwn8SaqAHhobAyx5pHsi83BWVVzFdBwUgE",
  "key33": "67TVEqsDCMYHLUS3UiqqAn6djtYQVn9m8u6rxB3E7odsj1gFbYxXWL4CxmYiDrr9kF2qMaDTQ4jcCzcyaAWM3eQy",
  "key34": "5Kxs52ZdTmHY9n4GooPn4n4faS6uEaN6NSYvqvZefCpyvRATxykFpHsinGWAsvm1tpLEWgqkWpZh9apfoaxaK6X9",
  "key35": "59Wqyk41RPtKbceJpAhihR6RoegNxpc7b4XsXgdBPG7UbKLjXQX7897qa9PfancNztYPZxAHtiZQFepGj46QhGfG",
  "key36": "Z5dpzLbd7je9f2Td6TYmmRGLgexhCPsUcZmjQ3zFbxY2PiQEJsGwXYmTnRDgtoqAfBz3KVSUTzN5qgcoo6ZgLZM"
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

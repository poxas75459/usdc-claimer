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
    "2kETm1WjnC9GvpE7JeWzdTATmUKh492Y3ENhrtf9ZkLJVWyXKA5zyAdyGrAPSv1gsVXGctdLbAjQxaitmV9UoEVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WpzxLV36AXGi4hpbwFkgbLCestgQvTCWpUWAmgAiSkmPYjNbQoPQAUFrAAkoWdNbiJGzT8fH3djzwAGhAZjnR3",
  "key1": "2QNoBZPMFvhEZyrztqCTDHtHjgX1BdYnNQoEimdiL1Xsr4VETmcnaBFAJcm2cEX4C3KgjiS6PqmypcCsLmStN2d3",
  "key2": "3m82nj4bA6fxiFb9phx1AbMwv88qFeiC4trgYwiKg5BvXyEQhRgCDJUzt6WUFphTuE1Svo4A5h7yTzzum5JyX9RC",
  "key3": "2uJXQ1weGuVW3xLD5emoFBUCeEsT6LxM844EcDDYKM4oJaxPTJSDxTF2GXHw2mcgHpyYi9WEhPr1X9ZG1gSHTL5h",
  "key4": "4N7qjRZT5Zda4ZLuTnERriCRHyMP4v1S9haPQKRCirwFKPhLtR9TtzUGGqBp6e661TLTNdHM9QP3epJ6kwm5cjgG",
  "key5": "5v2qK34wpQBpmMz4piu9TmkqM5LJmTHdPiNEPnG4AzgWhMqLc93jTVrLBxvq5MSeEBNcYhnHrqCAJ9NBb3LyUc8K",
  "key6": "8YKuQuVq6BkrHSdLWxdBbqxyq47Yj7jrtpnbU9Wu9EBohR2nGYKKJ3yHxbKg6n2Spz4Hj5DZdiKUKuhHvwe8MAq",
  "key7": "5Avt6FpdHuZR4msKEgGGftXPVHrRnFpeVyyJA2KSKsLMfqTjRndS3ahXV1Sgni2c1C9eHbnnKwPXkeii7opgk5fR",
  "key8": "3KyLJKnuxNWHrhyp6DgLv6PwRUE295A7ZWRxy6pZYiWQvAiXugykDbBsJmo6KSEaBZkesYLEedBVcXjRW5tJr92m",
  "key9": "3Jt4q1QN57ynwzjoGBR11Rffq9GsxGgYybvSd9zPaFE96uzvLF9kNQTL5Sy6pYmzTwWKN435KpAWvUChKysSSr2",
  "key10": "4wvZAWrH1pfURyLvXPgkrGNwb9BoxhWSbHia9FmJAuJe7ehzUWm39S9P9LujfZz6bQ1uAW2SoweK9EmpcrHXZGoY",
  "key11": "5gPzQ6UojFTAxbYFmZkqtwTVojHP2R1TrPZSgDWUWowxgYrt5yecZ7fRZAZHEhjMdL57EA7qoD73QRugniPDsdPd",
  "key12": "3L7fNiWp3QTD3kP6C4kxpK1MFzuerktXPwEpfcN6Qyk6wALsJdtBTkaEvcD7KmCNfhrnSnJq4RJtbJt1oCrQ1XNg",
  "key13": "3AAMwpsp5g567XZ8QwPRXqti3xk9PL1Suw7CNjKaDW2bt2ztsq39Vimz7F72AFzHNsfgx9MtyfyHKwkVEDN6feVh",
  "key14": "25VAn7s1KNFoJsgP2T7Xq5QoX242G4ahY9RqHtraybomFgn8mxjATKsGVBk93eCWSG3k4PM9w3KMDLDd3fvrQpML",
  "key15": "3TcuBEbLkL4vBxy4GjN38i1Pm3bWRykdoceC3BURp2upKwYjHimAjkDWqy5xahPs6oLJfVTvxK4355BUGv2PPuct",
  "key16": "4uP6dcFiKE9y6Te6wXYh3o1bVfhocYabf1TeQGZb3Hy2VZGUjLpFhTfabCdCsXD3KKNKBYeJT65ae33CxhFnf6tf",
  "key17": "3R1gEZqLmfrYaxhJwgwbFcwvgh6zfFrrLP9qnEeJYYDWQYQyuneDxLiRDBYKbQAQWaQxUigULiJsdgEMr8zApj98",
  "key18": "3Gu6YXSG2Pg55qkyNn3NJP611dZ2ybzfNGBoTptrtWvKLoCthZjtMJeEc3KtBQZHkDvHEn491vVyn7GKLXwKf4jM",
  "key19": "KZS7hyMx2dFUPVrAaLAn76VTLF3WhWV2q8ByKGnH1XX6e1tfQ4ZPRoDRZqNWxLD5pH5yNJ8GhxcSh2ni7CVuMcz",
  "key20": "5UsfuSRyR39oLLqQuU7Kpc3UhgsYK1atX5e1Hn89mCNJCaiaFoBXQiJfJAsddShfk3G3yhy17Bb9rP1GTCiRLJhg",
  "key21": "3uBzd5x5tB1zFeEFhH2P77ie4eX9CC8CKnLGTDFidNRgWMmvHj2drDheZkRTtd3c2x3aHMgQxPviusvhEGWnanVn",
  "key22": "5H7tdegWttunoNUJtkDjFRVatHTp7MaFijm8EHcpHUbYj3AqwGKeY1GLCZqxUJXvaZ6ypLAas5Dw7ZpcCps6fem9",
  "key23": "3v4w8pSkcW2pu1xHkCs4bRgNrub6NZ7QMp7YqqiHCgo4H3BsZri1eh4wWpjMkQqMAW3R25n52nWT3svoiMDGDTAA",
  "key24": "4ijUrSundUhxBbw2rj3bn425vcuzDoC2Kmcf4NCU6YJoJ1rJm7oFzx8paRymj65R3KgJQuZp2bK7gxtJopJUM4uh",
  "key25": "2rTjQNAyb73qLe4FmziQqZYwbYxcESBK58udkDqALoY5aDmYKXAryXohAN1wjeVS9ikTLSzgJWUBdhLjnupZBFKr"
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

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
    "VEFKFGXBi9R1Tt8muYy1op21fMFKScGsvxBeZhr7nXATM5HcchAtgnSGRmfXVjCsnLonEZXK4mxtqQFBKJKPCtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQn2DKTJu4JLaNeqhxQM2nWgZTLdqMveeEJ912RcEjkUqhej4wGjmZrrRs77jVfGDGhs1mZtE4ppWZuC53stbgx",
  "key1": "2N4CjufKf7kDmt4vD1QzcMGBtsRTeeo2D4Cb8trFFSSXaYZrMRRYPXvihV4HpUYbH7WDWcC7eiM7PQaxsg7J2QB1",
  "key2": "2np6LeAKdSp9n72gujd51UafCThpBCZo6FtXmG5AjpyntKPodY3iSdhitzUci3SysV2t3HiE5LgfX5o9gpm8j5BK",
  "key3": "1hK8D3Mv4daRtiQvWSqdvLzYgqLwLrypaL1dXQFfjDKtazwdiZuiR1fvE4iaXWu6Qzfx9z9dEsdJtaJF2vgEuhK",
  "key4": "NggM5tZLvz7iArcbEzM7fYpLGZCaVt3BGtL2bjhDogb45RGSbAoGr2oH1yZYedhewccWpBgjGBQtSBsLAwXuqk9",
  "key5": "5cKmbhJPoLL3rV131i5kszAFzyGrGhMVerpybv72ZV9pAd5QkTLbHiTzAm6mot9rnKAUBpMChwbNJVbD2wZCskvS",
  "key6": "2U1yama8CVWCB3e5pN319ajUu45o724yuV6jKoxGphYPxhivMZgJjzNHu5ALe1sXHpwqAEmmWXm2rZNvdCF8Tnku",
  "key7": "2zAp8VVM18Q1fbfkLjdvRVAzoVexPu64AumN9ypo9B9tWK86ErbC57avd22qhPnX59Nv1AEgmagqZmZGyzwdZBAq",
  "key8": "4SzysC8ecp3dtxzLGWn725UbjiQtGXPhMd2oQ5wWan58m1jGoZ4o9EZXnXx54eEZHjZyup2NjpaGUTF5v93HHEW3",
  "key9": "32nRw2xQxBKXx6cxiz3ih5uPqfNFT1xkpeod1vKwDmXRZjJNCQfVireKGpJFDnetNhKXRmJyugofJxHwQghqAQTQ",
  "key10": "txQnZAzpCvMWAZbLNWvjPoiSy1BMeQ2NfSFbLjG57w41ZCJZRTgR46HGeGGDTRxJybkPH5bjN5dwx837w7H3kBq",
  "key11": "5v2qwAHBUhjcEkSkVQ1uw6aAteGnqWWLAqswKPPBx8zhMKXF4CDdv4cr1usZuQgGz52A1FoAhU7yfvcmdA37sPiD",
  "key12": "3ryte9t477redT84ruXBHHVufahTXfPN3wso2ppn41KdYCqryrJcm2ENRNGaaSwiaj5VvLf6j834ozDAUCMcCYQV",
  "key13": "2p1hzevwPfgQcgT3aZbzHW9uJbVK7RFium9RXUC52FyFXV59zwGXnxF1dGp1q3LZsYwkbYAhapcXjNjRZfGGXRK",
  "key14": "4H93dTesHCXqNmfkEmmQSRpJETN3XAJhyfKCZ6d8mEzbBrwDSgMa3hZD55qo6mZgLjavz6EWEvj2DJLHqaW97Gk8",
  "key15": "2ZEjxd3nu8bnfTaaJje4rv38fYsP7YSHqaGjqE6jB9iXDDsAHDiovMvMLZ2uvVZS9d9yw6wcNeNr4Yv2REMMNWR6",
  "key16": "5e2E7uE8CqbuUGjobQNx8h6jiW6rfcGa3R47YbCYMJAgeRrKo2NR9rEP1D8QmRMymqdJwgxM5FsfUFjyUbd7QNYc",
  "key17": "5odRVy2XPaW1E3eX8XrDK8MBRzijSiNbe82nfngPrxtBuMXdpswUSYLMhcgHSkaSvVAtbuyo5v2CCiNbM8Yv48s1",
  "key18": "2DdzV2gCeJ2BUvL17HM3F8pYHf98BbpPioKCQEQQd5uDQcqf1h7fkRQvXEXb6F1MGELsqBr7wNhYWsxx4o5PESDo",
  "key19": "2tGuicQetC5tNuaGaoQJWo5tjTRvTmMSi4CuojWf3Us95hs11LK7B8rkPMxmehTGZppBFsMTFFAmMR9kdV7LNHJF",
  "key20": "5nfUNgipwvf2aKJ75xd6pwrmQphP5DWCuVAEtGBx2RrkW1pHbLiN6PX9jtQSV9K21cNjMcbAqRF8M58Qnj4mH5to",
  "key21": "5KVdqyLAzQCTMjue3Yojh8wfArU3vVVDb5bqtQRy2AEorUD8SA4AUqqmZLU194nTBnCSAFgqsjjYzQJWAK7EfGgZ",
  "key22": "2DuRPp1MFb97ioRxV65QopUL4x9ESbEDcM2R4ffXbJLJw43mAcyfGFdWUPEuKo4LKG9Hdcm73m8pTy9sExye5TRK",
  "key23": "2X7R4JveWYMaVExjymCycxc33rKRR5A7KDfxzNbJZMFEu1L52zGGPLtwzE1P6kfj9RvQKiir2tQdxYERY28kh2Fz",
  "key24": "5YXw5uQGsaTg7LiwrwvbrPRRANYBBgvLnbZLjxtJb6ptr327TzkUibDbMW75UfnBjsVri2XbhgixQ5VEc5WH8UZm",
  "key25": "5EVE9uo5QzYf8zkYZLkoRgC8by4YXu496RrjKPJaMs3f3niEvwRqj17tBvdKCWQa5c1hpawaTqvL3nAxXqQTZJVg",
  "key26": "5mygDuoWjq1CDjcs8R3CEQKt8eov4jBZs9DgUPaASxAxVRH6BVLpYjDWV8V1UmzFQSZfp4WqAZPsiVdUXgeDp7if",
  "key27": "5o9LGpYKvfxPq367pWwQeyZuzJvPg8UBEEKD1kHF9JkJkH597qJQGLtdjw7g5te6PcrESxRKDFnZmxd36tDQN6Pn",
  "key28": "35bS2zTU2pD5mWUmzRQEiepP5rnNnCcfsRMMcpPQDQMmcsa5GfWL54hWmDRMErXyzPKS2C6zWj96gCGfAkhKVczJ",
  "key29": "52inSjVK2qF6Tv592ZPNz1Etw8kwUBz7h2zaEi8cFi4V6QFNoqEueRH6NAF6KiKP3HJffeaqR8HJq7V5c6eqQiYi",
  "key30": "22gEc7EPnjDnxnfGTK9T57XnssYMziXKYQBehbHa2QS9s3vwPRURcA2zaLSj6hcwhZfRHfMptVR44gXykeYSHp3Y",
  "key31": "35DHrygR1p3akGuKEc3RtGhNyTP18euNadyUuoUW2JYsBWRK7nRWLLpMfV48Dgsdjb6vJapMwnZFdt5mU73ovupH",
  "key32": "4vo2hhnWDkqsZ9jDTCE9WBdymSkyAt1bnzZh3WCJqBdNK1AJSFxJ372PB6SXsV7z4o4cQbpnJY7MeFPhy9fmKwZj",
  "key33": "4ZjhjLEQMnn5rBWksfoqyeC6nQms7kP9iTRtMLSxgCu7NVDxiq9VyPSMkVS3Kz89YyhbMuwRTxhAb8Tviga9bXbQ",
  "key34": "2jZjtyN9tXYW9J8ErqAUCSLtrjhrnomvC1wLp36BuEec7ivjvvNuhpXcMepuFVPhTGcDpdFyjHHevUG4tJ3LNikq"
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

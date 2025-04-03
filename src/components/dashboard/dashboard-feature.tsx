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
    "4CegGcZEHcTKDhV2YePTeemefsXEsAHX2PAF1YsuitAdJeG33ALoE6ZWMBxNQDy4m4q9PJ74tgJFsbELvXkhDhRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t2NN5SniCtaCSeir2aopeK7z5k1UU7CSB6xsLPkLr12rMdLRxcC52XpJiJi2ZbjLncbRZwhhunhMRcofTtsEWC4",
  "key1": "45ZJcbkhzzQb6ZDjpaUYDGAK5CaFNvsbVuMEaMmXsVZAEKeewha4oLS16NzcoahDs1AvNyQsVhWM8UhYCkCeaa5z",
  "key2": "xMXcUqoW8u2TSrD98539A81XjAdEU1z76KKf51a3dVFF2YiSddzZfQC2DLUs4jZjUcUs1gPLm9ca49qa25AxAFP",
  "key3": "4xB5fwv76JMdksetptD6A48AsJLgzVhGAA81DoVDDdzR9uPYXNWQ5SnLWcQsHKMstYtNmQdN5EAo7sg48uZdUDrj",
  "key4": "2cbvp1QgJkZvFhRGkfENb7728ykTTa7NCdDv4AYyiCzshypaQRASJNjmmJ1cHmAeA3XB4DeYjartmeYsnfbLngPc",
  "key5": "4KigHUMTsRn3taBb9VbrPnq2BTU4o6qupRWvrRYXbsfrVdajamNQ2PwYUHwiXmh7sboNyaNr7mTyTZeizGgvBCH5",
  "key6": "3M6mtQRBYKh9wXbTxCLngA9aBTHK6uFdyVsnKEH4zrzbwdxGAHFTF8iPADyDZ35AxkdCR6pYY4kwT4cnyhiPuJkh",
  "key7": "3gzFxBs5YLGHcwQQbKEBjGoRA1umYtqbPTaQ9YXDUMXZuG2e29hpM1CvtyJgxkyx7DhAQ3aDf1t7K3cNHzrwwnEd",
  "key8": "5pcRYKJ5GSg8UYKz1adVX9eZdJ8vr2ezeeP4oCWSAn9escVUVbevpbk7vV3u7faDMXuWJvKephCUf3iFp9Eb4koi",
  "key9": "ix73NDT9HPXuxjgdGm1FApF2fcLoDRsrEUTcqSm4yZh6qHpVfYWG44zKnnZxcjvEkfA9RM4gsvvRygMAfzbsYEM",
  "key10": "4ooMThfqvXkA2g5ThRPXAfz479AF5gdBVGH9S9PqLrVbnT3M87ydzZJHASyxb3ZdWH6qUkHofddvht9mgMhJw9Hs",
  "key11": "46nEKZ5M5CpG1sQZMrPEexjoJjpVaQYDPNguCcyRF2X6m8ATw4mEhC6bMip6jhB6RgbZFyALW49ConP8NckM5cza",
  "key12": "2hysYmnXCCTAK4y2e1JtPTzSV4o5hYxkmbgL2fGTFqV2EqfNEsyrxivLNrbdsEB6jSYg4TusRGCkiYRcKgxGUfu4",
  "key13": "5kX9TyyiZnuAp5s9JXkjCKuXd9wv7JERtxtarNpFBcPaow89k2eAxV5tpbHkR5VgSMnKfANpwECp7xX5csFe1SCH",
  "key14": "3MLnNRysSXV6eC4NEt6FRw1fx2A7oyGMS9FJSY7JvVeqk415cXYTg8ugjTYXqq6jYNazPVPDAPkWxAzxpumToGMN",
  "key15": "35ejwbpS48xrYasZjhbgMagC1V1NLkS6sbemGsubXvS4QGcYLgVbNDRrmotTryWugXcNKX4Xn5ZAn29EraPpyhGy",
  "key16": "66Xi9s69HNPucNSSk8xV98nQ4qq3fCNcf3b7rGS9yvBvFWPcFeRukcH4UoKqZJZqAJdiZYDN3tDb6rZrXYcVyvHL",
  "key17": "3vLTF5tR5v2w1NTdjALRuUovHPWXTMWHwbJNKfZ51jPFpWQvkMvgLwJRoyyX1yfgJAFq8HxczKYmLZAthP2JNupg",
  "key18": "2zquh4pAbmQg3kzNtdfgPoCffpvteSzqCP3e2pgfcSpViqxWd5hCCqfzEYyC45W8kqL7uVfcGz71gecqqQcjDd4t",
  "key19": "37bbvriHwP1Jx7fx4AaZz85Mi3xfTtGD9sCUHyNJy4H6a7pJGgV7zsy7NR57rNUtqkfkKGQBnvaCmjKNBSujmRLZ",
  "key20": "5thWAY5jH6ygv8kf8pi1Rye2MMhTfZSMjFvaosEiyGqqM1Dky4F3LUZrGUCZwKjzdPysgTRtCDo4f9ur71Yn9D8h",
  "key21": "4y9jWwFAhjpVp8j6C1c3AXRCCyrvzAQKTHy8SVZ3ovcJNwr7s3Nz2RxwTy2htHJufT5PQ7AVgi4iZUji7p7HmMiQ",
  "key22": "eFcFNewhaKHbhPdgucNF2SzvpCjBJkDfdq1DPBbAcqWYGU1qbtijzEuxZtJGUwEZFZRCE6Lr9Gy141MWgmRV8oh",
  "key23": "3484ghR7Cx5aFjMnq5hpq4YZkXYKTytNdoeZKb7qmvegFMpNRumCCch2mvDCSG1sYMrLSNiByQwZJeVFTqcPPjAo",
  "key24": "4vx7NJ3Mt5S5q5QSURwN2U6351eDauAkbM4V2qHDmpaz2b2yoez1StfhDEzK14VUFTts3wMRokW2wVo9iaSiaq31",
  "key25": "3rSQ6c8bXeerhHSeX4kZ52maEhYy5BTxEhritYiC7bzoBe41yKJQKdNF43DFrn6Qfp6qYKViPFPwezjx6MWDiNDU",
  "key26": "4r9kqSUMfUKYpCS9nd1sDA6SzWnPZyRQZybd2vBjFreJYa34BnR8Fp93fDHLEyzkjsLSu3mBtUWQU7i8PGTPMYjE",
  "key27": "42mxefNW6bXiMUq3n7EQsq4g6Gjiy97CJYPeKHJQTJ4jka2WSnmfStxHfLMENsk73TJTDCcjfgKjFrqex93tWGH",
  "key28": "3Wtusviou856LMmAkqEityEkMHvc2aqRAZdoKZxSWwrY3rZZfJJx12smjJCQQoNuWMQnQSH3oGpwkewFPSQVy4BQ",
  "key29": "2gVTTYA1C4uAwTz8H2GbDFBiwwoNQd9c7LWoyFr1pUvuBy4CKCbApwzJfVjyrU9chkHRJXXAmK2NuQQVQUuvmvjM",
  "key30": "3CaShNf2nSJywpvj63DEeGGx9NPMZhGLWS36tqJ1QRXPnTNiuE9U4eQmoT3SUwQq6RXh1vP29cKYX93AkbTruqPH",
  "key31": "43ftVAuJNHPEoYkABND5fXDHw4C6zf4FuYCTjaFTTBTdnws8TEhWYdnfiFSbeDR9QTRSX3HQY4b4jVcjyDa1Pce4",
  "key32": "d4akZBj1AZ3DYZPfT3zdYt4fzzbFWRgUHjQChWRGd64WvHgL1nb5nfARzRcQpbX5c5hhhVEyNfQ5UBjRLEtq3SP"
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

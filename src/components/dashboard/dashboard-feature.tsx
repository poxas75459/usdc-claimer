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
    "2guprM7S83mZheEurv62rNAdfeBAhQGPEXj7CUZJunvBqGY647C2mEwEMZY34SHu5PUSz1Xz6mdQzDhFCjF22wz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rj6sUa6X1WGFyou9pN9EuFX9sE6VoBnfzxQsWJHSxBFA8SxB2hAamd3x1x2ZvUH4ffdjygmipa3Wy9nf9X9wVdc",
  "key1": "fS6Nq146ytymyfVv9kZZx8aXpQRC9A5HtdxvddATJhdW5j2Q6rjTQg8KVyx2CfKDLmiYQEyc8eMD1yrLtMojSUD",
  "key2": "2Hu7kvTLWzHtDmiUxgg3UfGc8hsKJBv7V7WeLQ525Nc1SvPKijVFURGAZdQexaWun3TRengNgpuGYNT5rvvcLfMQ",
  "key3": "1xQR6ne9kBMVVLUp22ubQFegNmkVNyyWeSef44TajjgQ11j4niqPmXHgLebjDwW2ydfp8TvtJLwGQM2T9vFUHYs",
  "key4": "2mHDpmE1ssBqSnSY4T58ErpxBHX5apLVB4i9MbR94Y85ycXXFmEgSh9PmKzq1veozrrezVskJBH6XcdhGSUEEnw8",
  "key5": "f1T7zz9dRXZ4DnPfbZCr1Ed9RcKGwnKMcMfEKUzn9qCDTi73ACHA1LomSxREMiBuoE6LopyunJ6JgGEjz4yvpyg",
  "key6": "2u6Q8GNTzfFJGrGaCsBqWihv9sHbhqoBGHuDAZjNfAytYo1SW1R8x8mti4qzdPxeWyfDARcmd4qSGfW7Z1a2Bzxp",
  "key7": "4muD6a1aWPfBiKb1caxjdgFUzv9UStP3TJymToxz1FBSSFYntV4vfwyCwrBkzVe4EZqJtaaQDDKgJorRHWx69sgV",
  "key8": "V8PZpc79jcteY2wM9Fsiq42YFnfwpCXJygrp9gndJFt4e6oAcDsp6Vi7vJ8zw8q2S5MorqBAhx6xHHK2h6qtk8E",
  "key9": "6gzhd4xi3KH9mqdKvK1VyeP87pCvgSgeK7J3yqCZztPG4LrHQSdBQDaCvM1uqZjNhVBaAbJUykMQcjLr6DHxQSq",
  "key10": "5pVKuB8zT7AVfa6BAEFz1vnXMtNKdpFXa1qJAvpS8FerTMXa7bE4vYu33RkJxmEZ4jnhGW1q5BXipN6tAkiQuxXp",
  "key11": "LDCcUuoibQS6DLeHihqFbe9vN5mV1ewTJ3AZwMZp9DqGCGCiKfYPYHHfzi8ktfXzdD4NNNquGPWruZHr4WaAfuL",
  "key12": "z5P6SHXcp4rNCkahQfiHWgWJZdCBGEQewRbKAsAZ3PaR59FBSwdDmoo8AuV36VfcJnhBYZbYJZm86MTRiCFUGXG",
  "key13": "4pjFnB8Jq6PUZc7rcUMRL2JKrFnpKUoB85ZZMXDk9dHuHEQCtjmFV44YJk5Hh2JndAvepNLUEHPiYP7oHNmojbXt",
  "key14": "5pst4R8ZMwX7q1AwncnMegBwFh9rET1gz58yeHszEaAX4vtst6Ma3i5cPGkHRWcxG8J4PQBVQQzHdhZAoXv7bFhM",
  "key15": "ZUFULUqnJK9uCgsxiYd6c2p1nJiEggo4S4fhTG25ZAoWzZ473D2ac7NAETsgcsnH1EBP6WiYMKT8F1fha6iBjKs",
  "key16": "4337FiUPFVTcNha7m1amYStZqLwkNnQgb2QcFDSGMnk1PAgQr7f41U1FfHSHGANAZRLkhoEDRDJrzJeSGFjQdFFu",
  "key17": "4hmmcggQuZ2JVFipmocWosTyDxykeiaWKwWNqnsQS3MqtFzyLdnpfUZ84e8yLKE9iDuxFe3XsZuCVdZin6sy5Xes",
  "key18": "5r24KrjUq8Qia8A2gGmH6Y5dUUgRmnYdBQ8dmoPRwkhiQeHXXhhY41Q3a1GAerB2P1jyKb39EM8T3njaUBU4qofB",
  "key19": "yqXPXoXz5dNE7k82NHyq7QhrnSGjYcAGnVVnqXvpLNNYAKMyYj8DG6pdGXtSfyjYDJ4tWryBZFQ2AMuwh9f2J62",
  "key20": "4JBf15v4TsCZuXFKaMhNFHG3YoRKq1RHEifzWndhjJv9grPdH5MLz6fHnc56LRNq94mUVVaNbyi4233fzrCTnvf2",
  "key21": "3JWeJtWURx671pztGkz3A9wor4i9T3y32QSCS6wmFzFvLj1bMMe1KVhjLmvyTpkqzmtBtvNFh1g2UhK4WS9E3Ama",
  "key22": "4BdnEBRXkyNVmuWEewqjSF2XFuvE5BULw3ZwVx1P8zadE9Md9HoNZwcKtvgRW4mSAFZHzUUka6Q3At7UJk8FAuH8",
  "key23": "2xJyL7nc2kC7AFjPBHDyBMaaziVpvWjzF5DU7GNjAKEL6njyjVtQ6aSzgFE6CFhxqckAuiSW1YzmSuSLzjCMbgJk",
  "key24": "2YXbnfkUyLzst7VhrxPi5V6c4ssZRxEdurKrDdDKYGddqJ2pBAWyuMZgiPac3i7x3CFSAA2D4KcydiwUCkJdr4ji",
  "key25": "3AmA4BFPvTfwg7qusNrGNnfkjyoAMmfw9tbSepm5JX7R1nb7iENbWeFAgWh7DYr3Ep7TaovmYa4755rvz7wDTsXX",
  "key26": "3Zy8n9QP5Bk7uvYtZfeUwySGyRcutAGzJBXLYC8r1sn8MbDb59NzynT3XvUxPor6L2wV7myXTEVPmmkLhScrep5h",
  "key27": "333B1QUcQ542qPX96jiL3JZTgA4ZdtbPhLkNa5sAmDChmVBgBBpxDJ5QazSdJyrTw5uSL7Ly5f2xzbRZf7uYR8NR",
  "key28": "2DqDz1uMAhMXxcdAqaSH918aJZvGpXnFTv3F4yDkGUSz7xvUSPDQG6ueiUsmAofCpNkCJv9Vy4bdSRR3SVPD6ycv"
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

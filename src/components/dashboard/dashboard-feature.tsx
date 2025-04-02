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
    "4daAXf92BpBU1b4xN2tAhv3LdehUnw5vNimPP4f9BfrPi19E87eKVHCzydNBZK9BKFZ8E2uALWWxvNoUWk8G1cY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghNjkniHGfmoTDy1TZ5TK6kKJsNrFhVwmnbKMCKncvSVF7GsE22u7VYqJFDRghgweCvcZLs3dfLhX8QLSwb3SK7",
  "key1": "3A9h3tBAmvMxRo5oeya7ti5RnN2jr7SvZ8JbHVZBFLkVU5hUz4p4hbZrkFj5u48NedAbGCDibHKQ9cqGkgoT7pxz",
  "key2": "373ZGjM3yVgHe2YpRDZWjB28fXkoDXkWbSNxHW4sS4d8kTFiewNStHXG4euUgnt1382Rn356qzYwF6DEh7qAXpv3",
  "key3": "4rrajeJrFoqZoM7KBGYNfUCjrQLn8ek2gX2PinZaa2sSKGzVJRuNb8tiM1DtzpaWQoweGAaRCHd5PW5oyYPxwP7B",
  "key4": "2DM7Q2348Pf8ziE7LfHpxqjAM4cBQbNoJHNBvF6KnHUMactgQqS6x89B12ZJbMaVEg7B71hVJ3evtfJ3yDA88p3G",
  "key5": "55mxGTYQgv7w5raok8Ab4oYVPWHC4tCcmEXLAJEiPzunALWhhTBD3PE1FLdMPdZG4mQvz75bZ7Lcp6X3FPMvBLye",
  "key6": "3u6LP3opJYsVgehajuZaV3jan3CzxRJePSmnbteXcN1JT4YQUMeuAgTvSsZbYxzZDwsYBUfu2DNWhS7dyq17JMaa",
  "key7": "5NbJxMQtCkqZbDLFefDogJ9pwbPo66EAWcKfZLsPAR3zBMcqtzG6Hg1dhwtLy5W1yEKdRA2GJSXvQNXjeHW9idin",
  "key8": "4f4Y1vmfGSQq7wA6fx6VeWogiWGhM3h2hufE4hVGj8Nbog4gsb25KnTN2Yyb3Y3iH6XqBCo3Yd6pcWZG7phgGGgX",
  "key9": "5bdJ1A3Nn6F9s7HETcQdQe1AvuudJuVfdUMyXx7U4cj1JsSWvna4WbHUpNe2f8r9rQuHe2xeEeCugiEh3Y4oeVND",
  "key10": "4RaUPbMPxfGCtXoFZpGSM6zt1Mf7bV3ojWmFfXHv211fgP5SotVZwb5p7LZyCcULSHQw6pB1TRho2QqvHcsENxTB",
  "key11": "3ZjsowNb5mzDRioJMUH3AwKHeFfC1cujZtYa3Y6P8k758h2UQEFUF3qfj6EwcXUmDw9zASdhdmDaCjYeuhKs1SRZ",
  "key12": "5wYcDRoprBiQ63JFAaQuGK7m1Bup64QSWLHPfseFkMwAGvdNWC97Ji7zRUetaQgCktifZWV9zDfCTd9YXG3gUy5L",
  "key13": "2R1PWAYvRYivdy82ja1c5GhAP1CbjWoRDDo5e8unmUKac9GRmLQr4ZvUh2iSrD8xjSgA8mTvm6VHe5riuAvPZYHe",
  "key14": "2b2rqKjrJmjXDLLPDhfrwvoMAWQujyRzDDVf23rbqbd2KtvUN5TJVT7VBHmpymxRuGGL1hjTC9MqQa8fh8Wz1P5T",
  "key15": "2kgoriDGxgwvMMyvhD5dqw8KqP9nErVDWdQrcZjKkW4dEnJft9EnVgD7NejH82315NbBnkwdqSoZMoTHZWTkyn6w",
  "key16": "3dmyj3iVGm5q7eMhni4kPnw9iALKeJn4aEssdekcZvLG1NuW9Jzk39Q8F4vPmAJB8AuTh5PkHVAkVzUGycaER5BW",
  "key17": "3j6Mf84axWyzuGymjtpXf9Vi6UTGkzE7nnhpxHCqLEntZ6xwbi5Asr92tApkNCbETizyMqoiALFPKScZufgKfs3A",
  "key18": "2LcocVgkNoWYXvw5ZzuEszQFJhciRDXMPz8Sx7AzbbjP3gnZkv5bLsTpdfMQpYKuSSKPDvHUePHkkhWs21cxwrJC",
  "key19": "65oqb36bP7DAn5KbpMnWeoHfyb1SSi4bqWpWAYzgfy53zhqqc8zw5uZqPiZrxJGxrcaf4HT9RPJsD2AdoYsN8PED",
  "key20": "3t1ZMEFGTcGJ5fKhvCxDsCUDRzk2MrpMMZMgnau3d4Ehhh9zu212bpV5eps15Tncrn6gZ2GbreythzoPXYwtnWdt",
  "key21": "44mFmj6r6NXg4bZUej5KnQtwnxQGSxPGZzLMqTMvbsgb5tFRDJHFfgTv1oMKo9uY9fpSHtt8zrJwQpVxqE7EesuH",
  "key22": "4CEFvoas1JaDU9FBGXK33EHNvhrBtXuH84YD8evXaJzbR2V3dSFEAT7xmHSkft8H3sHkALEbygJaKpvSsFySwwAg",
  "key23": "3FHNrXWMtRtkeksEQTk1RHNuxPuePPXeAfj3Rp3W3QajN6D41rpMVm86WcfYdqTCgwu3FPVXHYNjzyS7mrB8xTHC",
  "key24": "3cSWxTZ2AeBNVXuNUFjNzjBhfXXuZrTPxMVqo9xhn1yVNi7AnCP8KfsNnrzygxngWD1kuqYVPpjbu3dJnBBoMYr6",
  "key25": "3NR5ZDkhth6YHvwNPEZBWfzaCpa7oY4F2obP1ZoSUs9RLPh4D6T43Xn2EhbtY1ep9YcX4gwTEDqiggB3VUKt4oNu",
  "key26": "4WQ2vJc3HKto9NosWFSsZagGKBasijvyW5puM5A7FRrVRRVPmgWxNN9L9W5wCcQRmxsyyyFAGgvChJHDzLEf7F92",
  "key27": "33zNrhC1duk6s1KFzJqSyfExJBRbAeyLsaVn9mDBgqDJiuL9GKBicePiVDWzwA7gJgRhEnSCNkZLXV11PDEuEGv1",
  "key28": "4YoUE9kQPRfPPu8ho6RWTGTZRp8ma6DpdJiUfiW8pHVJRXUJSCHPXiSpCSkMeqVuNCxkEtWYjQcikZRNgTjFUe3i"
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

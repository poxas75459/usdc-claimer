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
    "4gs7RqbyvSNYTZwrY23t6cHx9SzoVNK4ySqmcUKaePGc4b1fKtaUcy8gFGSDDJpB9JyL8ay31QRwh1WcQRzBziMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44CbGpS3VWrrMzZ1L2tEn85fU2w2xcvTFPQoFAevEBTYYRXTZTZzRqB3u2BgaQ4XJ9URyktWuL44Pnnb6zeBNPBm",
  "key1": "5qxzHsP5cfqHBwgYf2TSp9XGq7TzLvnoaFrj6WQdmvcrfWzAMCQnrUtUTetnEnKgdME72daoqB8PFUWSr3fdy7Gy",
  "key2": "2VvajWxnn5tvrRntK8kPhx2uscMWNB1KYnsV2uWgtcB732Yh4U41BJd5Te3mKRPrkfJ4BzT78PzfPhHRuh3259tL",
  "key3": "2sq4JNw8MWkFnqBbQc7z6Gs5dBsn8X9JJdtDJFZLpCRBkF3mHHRMvUS3LtFjvX8UVHqQEVfbTXUufbeqkLPbfuKJ",
  "key4": "5vMttzxpfwphG95b5kpArxzPukPrHQdhzkKBBur76pUTKz1BnUYMFzFHXqiUe3JwwnVhwQUFRQYVDDehkz8PSLmy",
  "key5": "5w2XsVJAWs2DsAV93RkApC5VLiWbLX5LB91jWRMFQNXhfxbSVFqzJPypQ3R7EGQNsfVUBmZ5ZZ4xk3M3TsBJ9dQF",
  "key6": "5LVVN7d9sKvNqx6LExRUYs3rLpZecuBaHnRM1fGH6A5FxnWP7pcBTvg1X2BHAXLazQa3nUYr2GqiKcKdSaxKu49Y",
  "key7": "26VeRaLQhd3NLpo9frb2HQPkKHoFzNB1TbEktjjT5Sp64W2ymAu54iojBAJMa4UFdXeohFd4bSLhYKnw76SxX2mE",
  "key8": "3miequWJmtT1arYuVrsXPTziDFDSCnWn28tQ43UvTUEsf3R3p27FwyqZZwKbNVCUSGSL694V6N8HWnAMb3sHqKBo",
  "key9": "ddSM8aGsfhphCku7h1XWv8vKnyhBxiZDB6cYPivfQmchNKB9ieaWbpgw8LfEGiFYvMHpDuLrq9CUWUxqwuk1Hbe",
  "key10": "5V7euxAnzNx4sBFPu8uQ2MPC5dpxDLweZ9712PgSPEjNDN24rsAt66HYX93CH9fkbcPaLZ8Txhhn4AxBdSpgMoVx",
  "key11": "53Czz7WgJaC2nUVgfLcBD2AHzqdeZcAoM7XjjeG6J57ucexPRMELH2H9hU7M8EARn9MLDEApyTdqwQHj2kAjYMnW",
  "key12": "5Lmv2WD3DyP9ySE4FxP9icXyFybWVNf3tQWsAvVbMAh1pSTJHvik2cb31n7iGJpyh9HRKh8p4Jb7KFREJKnoMi2K",
  "key13": "Uwsca67tVdX4hV2KycAdmefHjbyqz7RPVawxbxx84ZXyXX2X9qWpjUmn35QmYnEQCCFLMGqa1ss7ddmAFZCBtb7",
  "key14": "4Z3z3oFuWZiY6MMbByWWENA17vWt7p6cDyk174hhta2uJv24oVgbDsCvzGGyHMddjZ7gWxjXZ1b2WP9ABEUqib5",
  "key15": "TFKXdRKjaypQdxu63c38ez1RjtkQXKfBXgdtkkcyHY14nhGNKf6t1sjV5riPvTCs3g5jBnbDcYB8LkXMRqmkEvN",
  "key16": "4gzrZKEcy7U9icmms6r4CQu1YmTLtmkbfUzEyMRkBj5PjGATxgXQbyu2CsG4Q6DzEWKc3TCHGpRNFLvYBR3U46Qp",
  "key17": "42PDSApcLxzKBhWv7s3rtJbva1DYm58d7LzWcefVcDGpQHs9ETSjauLdPFhfYMAP56mRHfxWfoH1c68dzng1nHvV",
  "key18": "5cCPxtpBnQYYkczKJuxu3xRFvpwEmGW1q954i9oiqxNEKfuTF2T5yQPFj2iTLdz3bRBj7DcXpVjirYzUDRYh889D",
  "key19": "4gaDKM8Hto4MPDFc5N5AY5yedKvqmBBpnj5sBoMoMfVQei8KLGa8Kt3tFyUay3ByjTg3cjzZdukZBezKFkATU8iP",
  "key20": "3G5rfDA4s5f3mFzjZNFeQ14DCdb6Myy7cLrU9rwoRfAMgb9BJDZt32V2pfHzsLTzi1ewgx7kLdzDkFESVakZgAYR",
  "key21": "4hcPssrqKDSssWRqk4AHgoC64ucTvEP5DXxHarwqpXZBD2VVujdbQ6UNfhRW4etmGkZiFjFpG6rURPiycodAk68U",
  "key22": "57ViaXHNrHtwYtfGsWVXRh55Fm6mPqoMaqT29DL47hgWz4WHfvC7tkSd9Y52bdNg5JphhGqresUudz7kqmpiquyx",
  "key23": "29NtfHPhqaGnwmy6zXQ3XscFsCzT2Wn8yynquAavZucAF9gw1uBeoETw2AY8tpkjbBnJpyYqguLjat9fxtbuUTRm",
  "key24": "3NcAh6oAHQffXDcztSXHQn9kLT7qsQSH5tsuBsNfJ6mbwo9n3ftH4zsUKLLw22ef4s1oS83f2Qu3p8ynYHx3Rour",
  "key25": "45uw7yL2JcCtjdjZYNEZ6oNJ9uArkArhbuGaDmSX6QvUeEhq4toa42HRxiDcaQZ6hHrKc4rHTCUpquC5mLgJfnBD",
  "key26": "qqa1wP6JYF12Bto63wTiTGdkRJDVHeDWxWQARo3wYKNwvTGr78nTL1TmXTWGtgHbykTevrMhzPvtU8tKJitYSMD",
  "key27": "mK1JXkp4cZ71JMbwb4KXakd7aYHzehBk4r7CpbN2rC7FyDBtQ1PhE26pdo3sgU8uHxoc67shxcNXmDSqufUchW9",
  "key28": "5iNvbZb86ve1o5LyaYyWCaTjt8T3Gb5V5Z8MqotGVKEmgywXpzuLMWgtfm4vYHj8pa1w1StuxWk3WLoEMggrzbwQ",
  "key29": "5heKdStzUJpSLEccBoUUWcP7kYQ9fydXFWDKYNJnC7PLhoWRzbZZcZTNGo5TEceBuijsCvdkYUWDbsk2FJFdEAqz",
  "key30": "ApSV56KqjH98o5pW2YAkkTxjZU44zfsvfykUouGrGgbquCBDsZ8LbW1jHXoSsHAmEd9DaLnN1RuJpWrvLWhnk3V",
  "key31": "5fjEJrEqTExaMRo5vRRaubTFP8A8pVNMaYFFFUG7uQvLWkRj9Csxdr3EG3qfyyhXGMkbZYsN9xpMSw3ingt5JPF9"
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

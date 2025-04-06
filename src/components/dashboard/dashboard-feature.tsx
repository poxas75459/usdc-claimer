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
    "Lq5Z7J1X9SSqc86EReUkdCFYMxMfJg4WPujbA3anzkYQUZ6dGboReWejM4LL4xcvm2sjbxGJdLNQWYfo8G5q1U7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23UcMYvd9AE9Y6JJSXtnv2fWGYtVjGVvXmd9rREbmCK4f2qT2bGEtsWp6WDX3yyJaQjETT4rmVUjzneXRZcwDHVc",
  "key1": "3zECLu7EMAhtQifPpB9rd1SnKfMmKe1zcwpBQ5ztV97eE7ezJU2arsERdVEsYHq3cqzHy9pFRba3rbGUZdFiAMr1",
  "key2": "3mvYME75yQKxPXLzTLaEE3tPaB4f11K8QsXyg7MxQRUDCJCp4HxANEdkPEe66DCNL65SvZgQJQoKu1PS8JKEHFrk",
  "key3": "3KzKhtXfmDNPd4ufDYPcofok3BSw3eocSghTmyVGzX5EHT6AyNHqKdZ2Za8EYyiMQXZBmcTMUXwPUz7SwKmkZb9y",
  "key4": "4B2UYubc1qs7Nnqw3qjUCzWHp4EX1zvWoGDbNdX5GfqMEsB5a1Yy3F9WetBDM7pTDge6ifEQKdhdRCoosENhjAUA",
  "key5": "3VaC4tzot3K7sMMUrTTrCpvvdGyhv1Cqa4dhwQLgVMfpLD5uptDFZ7LyCGEyZ46S1nvuNc3bLGk354Uus9moJxfU",
  "key6": "iSiw5NM9fPA4qrwSym4XkzY47S24DVi47qBkQ3HKgbSnXPFcfBs5n9cefyXsjQAUurg6f3K6Mfsxg1YkguVCqD6",
  "key7": "4c5JHH7jDEa2o3YRgSqxXYezPiNcK3wcLycfQv2Pi6f3JGEqFfRSorZkZ2Jbeh4837tbrFSRL49jkBh7BoirvNeL",
  "key8": "47f6psQqbkeASCKjju4MTNr98RqBdeDnYMRVRhNBMH5g4pqctP4Qs4BjYQPjz759gct3pgsofRysmF19zGbEcg6e",
  "key9": "4jepzq7S8txFWU2RyzJqMQe5FUnR1gZB8ZfmzLK8YAWU1c8upkrKigeADPuKuRLsRSMjhfc982U4sAeBwHZHu2FQ",
  "key10": "3S8iFzpPiXYXJSFaEi2ABiuFWBeuubPMm87TCNzP8xpcUU8CT4X1pUJE2SvuLW7oXkv8hakUbsRUPnSKbW1mBqKj",
  "key11": "5zgZq6xw4jWsK5pmqyqad84Vp11f3fMsHpMkUPHpa5sBgKtfMAZcusX4KKp6R9sYsSyC3RMuqRwAuRiaQMzrWJCe",
  "key12": "5whMW8q1RCxMnvowa2TxiAPy7Th9BTiFEBqH115i5qJdYoZM2KryCgB4M5KGDCicg8vA9KaHfNnojzi8r4ozSyZB",
  "key13": "29BYkWbXjadkZK9WYyNoyZjbL4U7w2Sk2SeZEvVj7cL4GgwhPAQYhtR6DKvpKAtMGdVszKfG2bBRyu4MJyoxqvAs",
  "key14": "2fB4xwdoMJKFiVBMiwW6Y56XnvRnenTZd1omenPvioQhpeWw7Nxo75Y81zhn3obVbYKuPMHLvfer4UVEiyCDyFE6",
  "key15": "2ZaeKPTujgDVetmHX5iji8qu3uqEnLeaT3fnXFaGC1Z9iy6sGjz6tMmQ1KjQfBg539tFiUBZFapc3BDAtGfKfggF",
  "key16": "3wV3XRaRcdM2CqvEEXfe7DVu3mTYUqhhnScYdCQYYRnwgriki4QGrsSZbQ2tiAoKaTKm1yQ1gNWnAzbAV47nEq7N",
  "key17": "3BiagBUzFhDLXXAtE7p2toKCbuUu4zNtmsYvyh72pdmxN8bcnP3zqMyT9R3xda1SppogcMwdFSxKjqMxadViFVM4",
  "key18": "5ETusuhK9k7cS4TW2UGiGb1kHRXQLRfd2viZz4smxp93K8Gn8JZ15eYQr6oyGRQPLXMwSVFvojRqku1i7jvmLaoM",
  "key19": "2iRQRTwc3Bhd1kMesyKtD3hQRX4Ze31xuqjf1tvR3wSPTVWGKPrdtJukAyKWnckoLn1wCyra5FdsmumBjaZbPBs",
  "key20": "3EzAhdSuU9mfKsXn4RGfi7Fp5n82Y85F1xwPquMm97AMSurF4n8XobvuqmTKUgzGLbBGYQvsZRxtrZrurZw64qJ2",
  "key21": "23i5AWhgVye11eYhCY2ZFgzGM3FNUg8DcrPprEieES4wxMphmBKzPZ5W4UpcVjfxSXpUfDdjT2eo3CKTQFRo8TBn",
  "key22": "5TNHSTzxvFsanAH6LDWjcYAJTSaJq72wwWLZadxqXmEhbXcYnrxgo5t6eP1xXQafCoUBe4cgqxE117wUsP5VXNtQ",
  "key23": "2fJvk5wG3y4UZJzUxGVXJ6p69nAQx4f8DAeLnYkPDu4qEAUEPUZFQctmpz8GEGtGfGAZ7tyedmqMx6nRTGAYxXX5",
  "key24": "LcsZrFugPoU9gZVUcKfgf4gJsmKBWq7Y5RfZqPCcjyKRZiq5ju3nKTVZHYzXkoEm8zciLG7rqUZvuh57EjroNSs"
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

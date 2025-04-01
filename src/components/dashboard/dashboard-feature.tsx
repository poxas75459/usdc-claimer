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
    "3wp3SVjvQbvn9G63KRSTYyRmmPzLWJhuNprimuueTSHq8zDMfDY1aVRMvySNAnMeaB9SYPdtqBxaZA3QDCxZmYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66VFxL3NwfU6W1aaAwsyLTx2thKc8844QpYEsL9YY3A5QCBmUq26PsG7REt92ae9rVoStT8TJZxefhfU5s8fvu95",
  "key1": "5L8QFRs7cqkZz8n6b58y2BGc1VLu2Qga5ZmecWiBXiVBaPZqJxP18jcJdcRywGghMC339bZrAazGEKMThaUi5rr1",
  "key2": "38yS1cq1HoZeDBiZ6AoW2o2F2udPEHobcFvUMujZHL96f2vfHYmZ9e4cRg4tewV1kGudDNCgR3A7UQZHjoxaEK81",
  "key3": "4utQQyNqYMtfy8ntYjApckx2onqc48WcyhjYoZA2HQ1USztg3BqMnYckSHSsuNrZcovvnkszpgSCZ2HX3cfTK3b4",
  "key4": "3dT53cjcEtqGPiiqSXcSmg3JpgS7KKfESPeSmZheegS3btbn5MduAJHK8kttpE6WMgJTQDPJquC6XmeqB9m3sMsy",
  "key5": "3AyqqsHdAbKQaPzawm6WinCgGRt8u76BimrrtPatp8nT9QTyMg7yEvYVN1jsT2mCe9PQHyHVEhoHYCnyVYEtz94k",
  "key6": "5eqZkE8PH6GEuRQy5MVWqZMhnKrYcR4JhACWDj7FYg7eDr9aBxuUF1QwBSdcrLLroaUQ8J5ZDZtLnSJEs4GZoHqv",
  "key7": "2CUeidytF6hjw9qiBptejCUAj7D8WpTV7WprpDZYGNJhYCJetaSFsnMeiMzS5TGTjvTens5iYcWukyK1kk9wU7qn",
  "key8": "2ZiQffNwLyBWuXnMhnGnPcyKt1yk1K5AVzy1K3rv7q1EUL3GUSMxCg2igUSggXH2WyFQQsV2wj2NViv3jfbb3aA8",
  "key9": "Mc4c8Vp4tyhcF87kUzxN7EtSorHaKYiNRDaodqvMpkHUWYd3kbDGDneUW7r5xYrwXEF7bS3KKUjorEj2ARMhZox",
  "key10": "4myRH7GK9h85Md57ofhUDPNVdX9A1yP9KH7QkSoqqJ6H3yxx4NAYcAmn3gWX4eYooQFoQFCr2Kf259NefJqFoF2V",
  "key11": "Xfs4wbp8ucQuGCWMmGc2hnEzXk6vecg6K7LTqEQ5p33rzp43Pc7pPG7mPHSikStPXSPztHNjeGEqjNcwzob1CMC",
  "key12": "3NsWVYD7jn61G89WqkFMpY1JvSvLgL7vPXosxxf9oegCr4LWZAZEvjxjju54Tsja2U2oUx7PQUpEx4KsuuW41NRx",
  "key13": "2XbPbNZ1M3jNZ98gYxVMca9yPDFRKCwPfkbhjCDjbHS2EhG1TP3tiGxRTk6XgaLvGoYwbkb2zAJihkut4w9ayy7Y",
  "key14": "49vbaqDjsM4uVCP4tJeUf9oBRpoBy8AEn8Rq2rKCW8UpEbL71iSKWxYzmhoJX2bWtuGfqTkzqoC2Y4536GeCZc93",
  "key15": "5CK8JfGsPsyNevza1jMZLi2Ta681inGueiVJosnythQCXCK8oeUWHwxWR3mB9VXsf1YRSjDBsvd1sfnAz8UBabU8",
  "key16": "drrqvmcUsVBrKsagkRV4cD6MbheJ3u82v7AFsXMwDiKdhBBMkFqAyJZ1iKwXLs5sM7ifubSCMXVETAJ3vAaK7LL",
  "key17": "4GRfFg869DFRcRvtf66kwcpmmgmvP7XYxk48Ansq5TMXXxCmkCKPLm31BLGkZNm7EjPTrwGPvKXCmB48GBomaQN3",
  "key18": "4A9RrAyszTiU31cLNcMnCGdeUrKFSazGviCcAfzM3QqjtcwPep8g6WFmx9R63YBfZVWdDGKPKJGiqALeXMDWWjN4",
  "key19": "3FV7bfPgxMoXCwVUtEg4XkvJLyURd2qPTERF4gAgarZRa9m2igg2XqCpBeZLd9ht7cyYYpzRjgjznSF7LJfMhh6z",
  "key20": "3it5imieGn3APjzwGth2gPRT6CkDfCrjTK5WcRoazwRsvvW9sJ3J47DH9pvTP8VaZSWb45x2Ecy9KEyAhuGDUidC",
  "key21": "9ZFxse5Bt924Emfa62kbJC9U5casA4sKc3m7Hhqn2F9QAHfJf4ehRUFbuYTB6zytx8oWS4AXsasfQmZCWQHgE44",
  "key22": "EXtgxMyBGwyva9YR5b5PfvQbzdvKXDAMvFeLuyH97F2mfKf47cFb9A3g3exf7YF67yAc2sG3icr8mpHBfVEhmV6",
  "key23": "2xpdhGbPHtZDyY2mkVf5C19FTZy2WZ3wN1YYMo3jaomP5nifPoB86zY1SseJ8VW9SYemVrbwGHjEcJ1qiBqhQef1",
  "key24": "Z9zpnw26skizfft4gSNs9coExYhAEuzkJ6Q7Rr8mSLMZiRGvciARrd45spQqv9GAo6P3vegoGNPynGUJvcLGNRf",
  "key25": "ExEMhJUqT1VjexUr6zau3cFcMeVatvCMzjmtZoYCfFERqXhvnRWuBPF5hrsWe3M8Nircx6rS48VFJ5H8buDS1wH"
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

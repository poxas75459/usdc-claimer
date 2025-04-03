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
    "3LxKZJXRJf7N8QTEa1x81K9BbXtLzrc4YFEAXesZyqCkorMARjYdu7dSNqJHnYP3tWdfZAhmcCL6xytGEVVqRAju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31FMzSZTnfNeDZ7757jeL5HXU7sYVCVJQAVaDjLLoV9APNPgjJDe1EkGytazvPiWxbMYj2u9z7Yw8gsBsA1PrSGT",
  "key1": "2kETYVJ53YKN6rKasfboSi4ZwaHERoaJ2WbBhASV3Mj1Ppiq8K3PM9JuDc8yknzr5N6n8LE4hj8c5sQ9RMUgPTrm",
  "key2": "rjiym23ucK19WVupbUTsuXDYzNufxwWzTGZkcYTTaj9RfBzt7ZuRzx3MXA8bGWz1qYWPWWrJQoYP8eYCqfChrkC",
  "key3": "3txCy4CP4y9KLStYSfissQx8EnjCL9FCNTKP5yScH3zvEqRRgSDQJbNGphj8yKxVyRH7YesJofXyjETJANFSsRkf",
  "key4": "4g1VoD5W6N433UV5PheeZUupZccTp9kRM9Phaod3gU52ysyg9mC6ZQgE7KbNpcXAVh4rKdWyWAzvN4nq2zTk5AHK",
  "key5": "PV6Fdfdwps9teedg4aHkZUybcyS4yAyBppinqaQd1gQ2c74NpqvrgnooRwqKMD1c8wNptYxf1Y3L9iCuHoR717E",
  "key6": "4An8Pwuy6FLr8MxF2TaRKFXjt1b5TrsLWbQG1RhyzcWYDsHzHaWyoYfrg8pE8j9rd3rKKbVpxwh7g39gxibc3t4R",
  "key7": "x7qi9A815wTKNeSyLmbhGMQfh38vnX7Um51WgqGSnBPtD7y7BnjHTLqAJ6wuHj7URYCPrwc1bgR6foRZxsSs2Ew",
  "key8": "bfgCWZG4EiGF7P5CxFmT9pSnU7GyVPxVHhQVSf8biSNMcL2b7ux8ePmDqat1wZqgDdQiFHXecJUgBRVYPH2EvQF",
  "key9": "5jZRze7C7ov2wGha3SdKjjEGpXQxiLNWVyYEzfSEVt64NuLLvQXYRYjkevMqZWG4wcfSsvSq4Z69ZReCkuis67To",
  "key10": "4GtuAyHzeGdG9hwK7C6Y977Uk3ic3qNx3LCopsZpFo3NUhGkqqzTFMpDVu8JyUc922gq7d55qQ8gn32nZviCVA63",
  "key11": "64u5oy17XUrQQ8rtKBxjWuzN9ciJEL9aU2khyviodQ7fR5XfDthVShXWvGCCSWuidpfRjpcTmTh6o7kkgmUMpQE4",
  "key12": "2ERqYG7mmjBbdgUZho7aNjDZRrzv9pc6YkJzzZRgWEiT2nWs1ZCDBvkJjVSJVM8Eu6tdrC7FQ15iuMBanS8QZSWu",
  "key13": "5YrgHAZAfpq7zLMePMkHEyZhcehD7Z3Lkeu9VBibqpfcpDxJT8q5dvr2Dki7Jj6u5Lsg5JddVGQrUr18UjCPdbwW",
  "key14": "3NheG5kp9rJgbmcHk5Hm3Y5cRWbCybjooGLoSwR1Ekf72jPUbqo45voybq8AGRpwzbDWKPwxr3cmUBfL1c1f32h4",
  "key15": "d4Gg83v7jHUNBHQgBErek33ZeMwJ8T9LPWCgZkB1T6qnCnspgHB7LvM3RJYKfq44RPb5HP4yxq6CS8AbocZmZ2B",
  "key16": "3BbzMUF5iNrASbAxy8BETtx5rr7DvQHm7jdKprAvcMcAR5MTbGANcheyznTKfnpiqJykuTaEESmSRtEo7dHkKUiS",
  "key17": "5qvT9UujNeXvCxHk6KCumRM7TSTrNkZS1dRfBEhBc5nJ61g1rp8x6xq4vR1ktTwaPdCbBhsy8ZVUyDtt1gLBoNzx",
  "key18": "4UTei8CxWdKyMZCrUtCXRW339nM3PUJBFLMrkJmey3J8fKg6Rzk6BLUMiVdg9qJBAChmesusStBj3UG1Eyc9TSZo",
  "key19": "5QW9nZ3u57g1QRUL3TgTup1vBCFR6tZpvahw6pR4YUim7XTZxzVA2RqpDaGfvbBXGUURrauL67tWMurDz3BcgmMk",
  "key20": "3Q5pKkezt2xgQ1jWvor1vhURBTuGPej21Xvh8JndrwN7S1mmZnEd4eq6cFzLxFnkfEMohnzXaa253BHscwojo82N",
  "key21": "5FfndiSAczphoNzKSuSSZ8ZQ4kQre4n1KpGBp7tymm2x9qgeGEyFi19UNLCd8CmiHYb1fWKd1Nb7Q92QXeKifTuw",
  "key22": "5hXy7XGjbuzqD1mXJqqnkjFJfxidnVuwPbeRMVX8tadF2LEmJWCXTjUVZJ2N74gaZfaNj88VdHhAGH6bUo3GXwKp",
  "key23": "4GffhdBeLrzqUe8W1HC4fijZCtvMGeBgzurPxoptyZd4XcnRAmuXbrxo841bVT4Tn7hz4bPyTCtNHR8EQ88WVnhr",
  "key24": "3ezZ4hdhpPfFd7FoHV8Fp2dbRbMtx2HTGNyHMS2YwHPLbUYFMjv9uSu4gw5UC2Cvfx9Pkvr8dAfuBDGgruaxF8Hk",
  "key25": "4airMSRx2bFNSwgvRMRnkk1uGZrHieaPfYsMwXB6RSDN5jeZdTqoUkEiEhT2JczjLUkZk9FDhZM9J1S5qyC6VccS",
  "key26": "7n2wNZFBqY17Ngd8Aq6Qm9suKK6i9mWQ7WoSmVaVTMMe29W6oj2DWmUrwf6SubjQj1JgPCCTXFYDMLnc8kg7vUK",
  "key27": "5JKtt9SGH1AnncpndhKjsm5xMyaFjY3GuWR6uEgUNwx6GWv2gauReMNkVQ1dkMdguXY6iuGcMPDSHPcuGXbbuqUi",
  "key28": "5xi6muDyzvEgSnm22kGmFRuuNLF1TQ1oMYMLRujWtR8aVq4MDm6AuaRybbNafd6q1ijczD6yw3BYDrrY6BX6uGRa",
  "key29": "2HYFmZSYK2Cxvxg1bTKWKb6daNuptpaigaaHLwgmScZRkq1F67UFNJ7VLUt9d5Ng2yfkE58pKw7WNt8cxbj17aKY"
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

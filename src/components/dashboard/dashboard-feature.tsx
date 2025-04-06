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
    "3ajDVerpxdSXAHvf7MEsZdffKUXUrDjefH1Kp2J8X676HbshFepF3ndj5ETFyc4bo1qz4NjXzEsCGBh4aynHn175"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jC8a2PxEpEnjWFkXEwzvG5irnR1A2dS2FCKv3GNRZQ7Lyv27K2Uuw7uuy7LUvMkRommR8ZfkWT3hjfGpYkEosVi",
  "key1": "4MgRzGuaNPFCShJymPYefUBGfDH56hbGNAbxLJipEDrwbaqMGwURo9ZvRiFbfmxyuLSdLvhAcZBBjgNXusxgL8cC",
  "key2": "5D4W5gmxZ3EAJoU74eWU2ss2hECuALmRJmUzEeVmFYfiq3yqEueSG4usGpjv1NdepcCyRfeiTTF6NaXEubYd7SZP",
  "key3": "53Qp8vyPSkpVCuCveN2zqYU5CZ9sWrhDcSLdAtrXBTm34rTUGtG7reT6iVcRUvV3JizTTxBNmexunYCDjtoz3yTP",
  "key4": "2d919u83QyBrDFTKdFjQd21HnEsCzHSEV3nwfgjmAzTmjgFMfBg8jU4av6mHfjn9pigtk5ZW72gwhkDmTQNrRv3n",
  "key5": "3RZNU9kanvhFBrP2XJ6HiXJDHwSPPqaC5t25LtrEchBzRry3WyUqHNk9k3D6nqYmWFVSM5cGX8waSJFvqwGwpguA",
  "key6": "5pzMLCUYvRZKTJkXMGFqCctkgNTyXHxvGwydNcVFEm5uEiKxu1YKywWK3PH6WFsSWwczHs8LE1Wz1HaEgAUZqkt9",
  "key7": "3NV7ergyFa14cC5hG611dGB13ePgNo56CHfUAuD3JTL5whcbqrXTyLqCvULqHmzjhg2i55SSx7YW2SEcUP4k2gNz",
  "key8": "5Y75D9g8RYAqo5sA9N4pjp6fgmHqRwz7Kto2Pj6Gr7obvyJZtb5bG8GL4DMdvennnR2bCjrH5s9s17TDicg8AJXr",
  "key9": "3RLa1bko2Mi1xgfo1yhtVYgv96TF1GBdj9FoxCXuz97ryF5FAfd8JM6kbHALznKmneFB6pWNBhd3JqL8iRDMhxPG",
  "key10": "rFwdZx8EYd6Po92J5AN9n1ASVzNvgpn9qyXRtx1F4BfegT5nos7F4LHHF1fmoYXs2KKQN5qnBRmwuCVJfRZA22s",
  "key11": "2YhEKok8m8zijNkLhHeBGdhmVhBL3aQusghvWiuaY4cETPQCZch1hqp7ZH8XSygYpVzKQVUbpkZYMicDsuxUKvfv",
  "key12": "54Xavg2S1mr6QNeoaTnppihLahnbu9LkxsagwoVmoVEkym5kMV1sxFJpoKK2poHSTy7XKLcazL9NzeGQSqC9EFK3",
  "key13": "i2Uhj8V8oVEpCtGwHNL72rn8D4nR4jiKX2g2ZcvusKYVx84gvWUj8375gLUqQUwfboShiBpzJQ5CUga2y86bydv",
  "key14": "5nFLqeqKcxMSwZ4E8bhKsCuafZkT3UrWkJLEG1uqjW2y8PEyS7S9yHXbwR7PmmVsQcd84ygdpLR4RMxDthwnpcfK",
  "key15": "3j3yzv6n8Q8YZSDJ8xDikCGQtSrg2sF7e4V42ebMuAXPcoVRdfggqhENvCvZcRcoLopEpoPNHfeqwLwHVbufEioA",
  "key16": "EFX8mAh2LXNoodPmXJcTPTs2kwmoAfUFRiEkhPLvfBtEGFotFpYudxpinhc3BXiih3RVPiCLKwvPY5i56G2CXcj",
  "key17": "4rujyurT7428SUJGiepKiQd4K2i9wnkRJ5BUmopuVWfGGdhXsS8TZ7vhxWap194gczXTE13eG8rkLUa1Wtn75dCh",
  "key18": "2zgtgLmMAzwXuaAUEkrj6dV8wqNP7Se2GpxnoksLvmFaBcSryz4mMuLeTC5ajB6ak3URKUcsBKMLa2MFdkaypNTt",
  "key19": "23cNoADiq3PzN2jTa3pvMmNaY5v5WKVTi4w9Nr3jY224ZV29ubV5iyzmHH7EaxpaFzZ1JtR2XZSXQuzGgaCbaYA3",
  "key20": "ovgGPYrdxw1wUjkSrjSNYW8Qv9sHVQjGMiLATKfEMZqXALwmLtVhK4BwjuuDVTus7p6dXTijAzQ4FiPLuh3XpJQ",
  "key21": "3g6LDuVuDQftm9LWWxs12aWxpRUY55bt23xZkYnnFGHX15U5EW9BfT8VALgXH8DrgjEkzZCoYocV5KZExQPrgTyw",
  "key22": "5ntZk4AxbrmDznXm8k35Yepzh3Vcer1u2LvRPeF4m2JghKkQyTjRKo8VWiqCVhqgocGW43CuPEDrEPKN2PZWzTAB",
  "key23": "3RkXTyoH9pb7w6stWgyr9gdy5Y3Knc1HHgGvxCyyD77xjZvoCz9PkfLgocHk36WCKNCnmbZzKCfdTgzGRPLrtULU",
  "key24": "5jJ7u8SLXcJgM9PoAy86CwFwRkrodLtJQ4RpHfSJJmR6nDwphDMGrp6NgMY7GjhP1JQm8JE1uHrfuWTVhCUeQxtD",
  "key25": "2ukjeDL8571WRL9PAGqKGFRd7ostPEaCDBac7QCzRBJLsaJvWNqWKKF2jFbyh6jWYdEq8mLELLe4Qa4dwEAu5xGw",
  "key26": "vrniggifDqeChtFiuFeLPRqJR7T6gycLYxAMnbC8J9Z3V3wFvBD2vjB57eqa2NKniFWYD9M34bwG8eyfimWoLJR",
  "key27": "B5tj4TCxnxnFHLakWZxwgUWfkC4nTPJdHd8Tgo8rUCANhhVAtV1iusMExNjmup46qk5oVPdeYBYZt2Y6CZRX6CQ",
  "key28": "4tS7k7Ay16GJmwY5QWs47UUbbzhyE6Q1G74KbJiitXRAwVdfLBDayd7o6RpkpJcRxSxswjE5eG7SKhP6cvjtXsgA"
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

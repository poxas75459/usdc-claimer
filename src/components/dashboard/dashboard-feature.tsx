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
    "Q25BdDVCKmJFDwNWM52K2JjK8XS2QWeyzN8Y6ZW14vn5svZR4hvrY5XBgvGc4yYwRAE1v32k4wBYX1DUYEW8BC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GZiCU5cSMVdGVBq1hGampfnVGTGPUNyoZJZFxoGR1JJApaSV3wTGnWUJvDFWeQZv1AMMJyHhyeuNbQVSA8r5rt",
  "key1": "2umv6uh7DVzjxXE3WbvfvBpRv5EqwQG6hiMuyiyiYU69ZseJRWY6aQLcunVY9VUeh7TPyGh5DFmTLsbDbLsQATpM",
  "key2": "5yUmKtaVu2Lc4E8XhtdPhnbJ65rCCLFyVQPr2JjJvA1dPgu6RBJ3PeGBxoetYaSJezokkic3z6hYUwAZWcW9iA9p",
  "key3": "598dfa5v4iqB2zubqfDePrPLwjTBY6SprCc2XXPm5tAgCR6tJMcCwVzjUKTjoH5vgbutUdqhErFahch596kAuPeY",
  "key4": "giiFAeoUockvVZ6KbMsBGR2cG524fNeahnhpJnvfFd8RLnRn6xovm6iQe15JgJwV6P1qQ7bBZ9eq2LdKX6nmFnL",
  "key5": "2Z8jPCxk4713NVPUuasuvTMn62fU9svVyWRxCjqn3ChjHVKruveuk96sXM7RHbDy5YVb5Gxr26kcqhTVyS3bqAkr",
  "key6": "3GvMvwWSdKnhVmAVb3BqnY63ZyqH2FUG4RkpzUjeCyHKYVz5ecuvbDMcfw9drCqhcEBiyfaEhRFyytSpHiB8xR8i",
  "key7": "2TKfkenC7oX6aDLCHAyjX5GR3Ts4a4RpKfMBdjqqygVE3bdDutHXy3kmPaUi7wcwe4GL7RDjoetbsDGzfZS3FkgM",
  "key8": "rnAkfWvqxdcAKFHaHD5akPdsFL2egv54gjY8XRjRBgZ7pu6S2Q1djx4q3isrxJ85oioQuWgdtRAVCmcR4p8ZNSr",
  "key9": "3AfRXJMjhzbJA4Xp2wfMQv8Dhyfz1ks3XL6zkytVoUSS74FXzj2XKVqXaejgabuZtEkt5TSjoPaPHgyaYWXXbpFf",
  "key10": "3JN713xXhpr6CTmv2s451XD6PVnugKjtbQbzvLSLE3mov28pqMwyD4by3wq9H8M2QKGLKZK2crKHu4fwLDjL36WA",
  "key11": "5yCYoPQT6Z7p5TPbNDerYSUgDiMbspNM3ES3SeHBWt4XQhRDsEq4TPeiyXYq9wvKAhAptoHcYepJhhEBAkurWww4",
  "key12": "4xAV9hjrreo2mmBht6f8yRkZErCsstwtzNR2yFiEeU5LuGuxqsJs4ZxgJXCG7UeBKEEJaE2Zwc4SBS4LyJBwxEDQ",
  "key13": "2HBgdgH74Kf7JNAMVCnDFvvsw3Pm4JCeQFGkvvv1w2XTXp5uRtieEkA4vnRrMLYd1fRFt4LeAVfNq56uTnhKuNEg",
  "key14": "2xrYB5C8FXYZaN9sUYeJ4e1tBfRyuUsfrbzBfZLmKCMQRkc2pTqZtYHesZd9gJoUb8now6qqpf2vkPrKx1d11yuX",
  "key15": "5FTL6S3ziDc6MjHYeza9bKK4MUgfnJVABVmkX4ParY55Bir6UWEHMSYyYrk8XLPcrWGhWBwojBYUEQRYhwbewErz",
  "key16": "3WEKC21fytyCj3dx5LhbvfEymoDzRa7pT8eyYCvnWWLASu4jPu3zV6Ts3jZCocfYPL9R8eJf9NfiHkb1UV5H6W9L",
  "key17": "2QtXvZiswAvwBez4po9FofySytV9JV2FTFESzXQNNiYNtPVrkJhJk7SS1qXgLdYAZ25dFkbzHKJKVJa9XgrWFcBd",
  "key18": "5yJb7emzDNu6JLykAK3fU6Lx4ALRZofeTEA5e7GRLGp3kERnjKG5dPKNLkrgEcLp5Va373KMs5xomMLzmJPvDUMC",
  "key19": "3njzv2fYfczPKG77apHtjqWpB6bbGGUNJ756JoSUVC9xrMEakk5YxFP1kmw5X3Sehtr71NWCSZkBveAuiZbedaEX",
  "key20": "5hnZTaVsMzuExoCGrP7WQG3Q24zZRttw2Ka1VjNVajVt5Ns376k6UyR3sYBfHWYNwuMkQw9UqmgCDajVEXo9aXN3",
  "key21": "3p7q81LaQgd8AFFTqZXhKLXd3vWHuZVvqhiqzMk4ZCDANNuo7WmKNGr3ChKpf9ttwh2rmVXAEbuRNRy2HTpkTvaE",
  "key22": "2evPhjTtHx5gCZxRD7A3uc1qfJeP1bvXfsmvG4SLgw7EATKEevYijyQ3tkaQqHoA5nahStps5WUERA4A83rgKzFL",
  "key23": "38qLVdtahseYxav2h14ydbJhcQasSoD34TXKaqrpWRWVQihHKMMyJTEvwYVbj3yNWGgwHR5vYgfyjeCQbUssudh3",
  "key24": "5gPGqVcksRqCdRuXn9mCbGo7eXhyHQwTGCgFn1gNqF9g1XeUJVbnXVRnDGySqCvpez4tdtijSFmwjiYGZPeffaKX",
  "key25": "4PAYJtbQeYgtqFbiojqQa56zChpmQgm1ZdWC1vKqnjEiz5iQg37Z6GTjTS2SXiQKMvwXxnfQE31k9ic2MqruudHn",
  "key26": "3uL215fpgHiLF6DgYKPr3MB15aZ8CNBH3jg5GRMDNcAqT1qqkBkp83MecwneH7LMP4cMW5fX3FYC8AsvXnaVoMZt",
  "key27": "5dudgg43VAZz9P9WbNArWRNJ59R7PQUhRufKN1McAUSVo5PHt1qvjEDa5s2f68WtbdvhbMimAaBvNcLMFbZB15VS",
  "key28": "4tLDYz6puStFcfLhCTAZmYcMKULYTDe4Y6bphKHNnUobkVoGoZH12Eqy2XYhRbVFyCVyoPm5M8nevfBLCeUZWHFL",
  "key29": "3Wj1wSspLu4wG2g3dTVhemubYeo9YUjpsz9bVNtnzGD13jj21Whh9wNtKgA69Fj7q8AxbqMHJVGaiRzVea4iFX5E",
  "key30": "3wsoKAYz9Jc9GbA1SWdBjvm7Ggdeirh1Ls57zHzB5rTmzcWyNpswnERbP5vqW5G1c1ZtJUKFJucDJzByZtuEh6vJ",
  "key31": "Fg114wwMKjBySCbc3SHUjoQYoepbxWaqTywZddtsdw1d6uAGohz7M5HiUTjoSH7FpPfwdi64weVCP8dQMrbse44",
  "key32": "2msYB4cpkpNNjo2WLwCtmGUUv6vJ4WuvxMM7cVFXcb9rHpaX1JPM3kydhURDBy5EgyHVnccC1c1WTM6Ft6jRLmUs",
  "key33": "2hU3LFfP42hSUSJWVEWPFUdqjH6hckbysRb6Mq9EgwtSxw7MgKkX6DMAFgUAaqX4znRKTBFiRrDug5G5jM1e4XiN",
  "key34": "2hkDtaUwsBDc8jnvNDCmtj3YSkgAHxMH7mcybNvVAMmaomp3m93TSX9rgdtn1gXZiQEEAxysVfB2sHTwbYsfofpb",
  "key35": "3uxNoxGuf1mfVhH9Am42fwRHjS5xtmtmeocR7XWgS7ABmp11jChGe3MNDCZQvGK2H6j2y4Aoo1qWLRAQuLs7zAJ8",
  "key36": "3WB4vvj1eSab2tamZ7PJAkQbgwRX5U2ax7kBC6y6boibHhiakwGrJLhoa5Mad7efmnow5aEXjiPWxj9b2LoVYEsS",
  "key37": "2icytLq9HXVxfEA8ShcxJifVAD7z9cgxLuatwPqypaTj6rRtk9F4QfAKU28oVTFjD9bACbZZE3iEznPC9Umx1jhq",
  "key38": "4cwovp86J1RuyH4J8voV6vmz4ynUrRGxMLJiEwcpbSs6236kPCQj2nHVBPp5V66o1ey5x2euXaqgRvA8vDuaskqd",
  "key39": "4Cv1FV9Ts6xf9DeaaFovGW5nM7z5fs8cJTFp5kFWpbHmJ7bWdUsLzz6LBc994vHdjEcyB3bmcXV5BQxQWkg98MuE"
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

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
    "5VtMBp5BrACRQyf78Af4s3fLr1d4ELYBicJAhSfX5GLFnbAaLHVsppKohJ1mcPRH3MpVTdcVnBMjRgJgGZ8HtMqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rvpYkJoNkYQH4C6digncHLcEKpJyE4BetLxR4pGVWXxQrQuAfghpuSn8JoHfTgmkesWiTaV68VazufBA8EttBGX",
  "key1": "4VdtmAtXsafkr3kyPKYHhsE7rWDkJwwf2sxS3mCkkdNaXjAjZk5Jn9271BTnrWhKfpZaATLejL8svGLe5ro5SpDr",
  "key2": "yDdjgFGTvq6r9V9TH3w2Fj73ibkwPWWv1Td1HgmzSeHf6wmskLjSRqmM63jtcLce3K6fVRDdiBLxYy9WjMxHRvE",
  "key3": "AFQ3fUAcQkEFhu5DCxsLjF6tmRaNSfiuc3mATqbNd88NXiHtgoVKQeFtCjPd7yxPJQR2P8F6J5E5WaxkiNGKzqk",
  "key4": "3C5mSKu3PmaX7CN8od2ewfXGz4jm6tk3bHUZe6RUNoJGJnRZssAZ58pJHcKRfA4enLK2ncW72ZfPndv53v8wTK1M",
  "key5": "222HohfoRVeNP9F7iHCLS13P4UPFbX1ttudKK9DCyaNJ2zGmXn7fgamtHvTLNSUHx2fZWxV2DeUNAXugBtFX3qoF",
  "key6": "5QD5RQEivfU3XT84qwuQ6qqLMee6midmM8nabWvvovEq7RJxZCkX8RmiP6PcSntRr6j2VNMQuowA7z2NqWtZWR4",
  "key7": "51UY8mDcXbQivfREzM9BedAz29FjFxsYswPEnk768KgLeBD35J4Lzpo55CFK2WBJypo4xbmv56tfkFqxZ22pBnqR",
  "key8": "2iEDFxxbwLCnSQcWanYvag6vv1iGgUaSPsUEV2Bx7tRH8p6LhnhaXLNVtCqD7VQ6QCotdfa9MdfawRvujt26iBc2",
  "key9": "4KXjSrGL3RSGfBVsErYnDiVLwoxSUQvW7cMufjfb3jDQ2s18pTuL8icot4EB7eLX2kiSMLju3cxmr8rAu6WmGTy2",
  "key10": "2PxA1792esZUUNDoktmp8WzZnURzCfCT8xiuAF5FBgzxU3mnRnunVRpomDLZmGBL9SkseQTDA9eJttKpGqqmvCzv",
  "key11": "9EWohAxFus5C8koeQMtcZRrpVyC8ZnKqACSDk6Z5GLAb4i3Jx4TWDzZxenouEaqjXshpbwZiVLPUiyW5CKqJXrR",
  "key12": "3JpLCGYvqiZx2iJZJKTbnXkQmUwwRzNrwHSLQH7WWnoioiwtR7mQGwX8HVr8yj7akMDoLoazCvfQVX6A8VnQJtuF",
  "key13": "3iLTen2Vd6jWb6QpSeYVPvgmKjHBhFyUw8YY4RVZgoakBBiJVmFXNCwk897YEQYPGgG1AsnyFjNVEnjQh8vjrNDx",
  "key14": "2oAvvjUs9VBBNEJHximWyCBFMMxAVWpp9Pe6Npk3QdUdsmMKyjRftUr5F9ymoFCPvW9UL3wG2HYHfXntJ35xAvPP",
  "key15": "4BSejDhGjZzaN5dHvqjoMtsCpHWYB9NS56yMjUeADVgm7vzx9LxtRUbJVsfkbx5xgWvJa4GtKeQmzUMZ3r8Z3XPD",
  "key16": "37CFkM1bwfuroLGMGuZPy7M19qpvfHkse1W97719JLTWDqz8TJHU6d3tzVrcTsTgGiZ72BcCKeM4D8V6jhjdsAb8",
  "key17": "2ezKHkP68ATmSbehfSu5mDDzFwdGUzZUQ4RBACHuQbQYmXqFMrqWatkrDE1NgHkNfdPyEyvwUPrabodcZUtauwET",
  "key18": "484E8wDjqKZKVwECHZ6YvH8LqMZwZuydwz2QhyLbMoVXhpkQy8fDyZT6MjXfXFct4np8bDjPFFsmLPcAZA4bSaCq",
  "key19": "4P1KdsNk7QbBqR3yMTrBi499esDLcShoo6xXokv6soBiwjvHib2ReTYNrPHFepTMexXLUJEfbRVpJDeWEThqYWBS",
  "key20": "3UZiZYTWMCXAEcuKN55f7YdsjWtegHP4kiKLku26mkHAtPWd1abrbfRVc17urQeMK7G2mfcK5X5n7wigeeWPFfu9",
  "key21": "4Vu5tbJdiHkEbgPqakxP19UHrSZA8kYMscX1tsneTouiVr6mmLGBYLwNP1dztbAkuBWBckFQXg8csK5jT7L1TaNZ",
  "key22": "Tjg7kGZK3qCxYgeNn3rRSFGKdXvZPprfgx8sTo2tiPC6WHTpUCTc38K8yDNyKHd6ckeDHRzWnJNDaudy225Xy4T",
  "key23": "446ykQVnKmekDxvqLWbVYjaVYY2YhmcaEi7BVFEBsftz4Va9QPXQ4KPmtqp7ziQVHutg32YCWqyDohDiV7tPTQb5",
  "key24": "DBm7oRsUHHnHPzGcBVK3WKnZ5xq8wJhegPCsCwJDo5b21cJJsQKBuVfksWJt48Uy4hDrKEBKqofNbJrKTAyiBRK",
  "key25": "3q55EtrbMJEas6afmEYjvQjSx1ZVcyJknZpZpCjVMiXWuv5HXnWdfTLjxx69uMyW1Gm5jE9FW8FtAsmxQW3TAU8F",
  "key26": "5yGVFAcSFN7Ait6wmkovXNnLNs9pTK9MkATVEuwM14x5Mf4MbUqinFE7z5i8JDT8Hdan4E76oRDfJ5s5K5aGTS6h"
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

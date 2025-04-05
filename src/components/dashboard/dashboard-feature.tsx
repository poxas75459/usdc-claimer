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
    "3uM6Wqe3VvQK27CTaa4w5sdTojzZ97gr3agH9YGDFd71a5AkXh6dar23rju7Hkj7Yub84QA3bMvTztk5YfMErwRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FnBrksSXNcUSWutrdSKcBpJ9NcBhZL5r5hnyKjhTXmJaj6PEC1mLpRK1D2ZT4P4DyvMi9D93e3zNzqisJRdc8yy",
  "key1": "LEJqgP15K9G9pxzk1tcaUH3t6GUPoRBwcq4KHHfF6qDX6xGEeEQSur69n2xFgm27MnyhQHfS4GLA3mhaLerZ5Xg",
  "key2": "47sopb7uuqREhQxy1jxsMRFNY5X9KU9JaHpHSBLXnNoASrZWxauYovhKYyJ1GD5GvqFK1KSguiVsCHZCNdTQUn2K",
  "key3": "3RLMEGpX9WrvufmP2eqR96XwaD56VzbYWhBAgkpyPxzyqwVkPtCfVSR1c483edseYhnCMbWpBruQgTypnodUeoY",
  "key4": "4hmBvjJTKapo1btVHvFYa8oAGA4ZEFTc4MDqDATP2SSSxxMuPL9n9v7NWcUQ9KgdSnDSaS2TXp68FuWDRraCUaNX",
  "key5": "2DDiMzftzRQWPBcPkUueDaZcgZoRHZQTh1RdEH4idHE8mkoQekqNEGYHaKsZMxTZUpnWx6W4EApU815MV5u7D46q",
  "key6": "sSoCRJfW4sZX9dpPmDeHrDPgPr35iGcwRv72Jpq5tZLAsCpp5fkqUNXdTe3SaPiRLgmEKrgFPwsFXBH1oF4ro5R",
  "key7": "5kEDrD4cwqgUsp9BBk6MW7KJWD24edFMwv9nya8mLTrxUguWM78y4kQnZBLzTCUTQ2UeyHzvMLe9ApeXZ3qfaVFj",
  "key8": "3dAPCQ9CHkcPfXFwUdAQmSS9bN3koyiCYf9FZVVdMnyt9Y1bzaAq6f4tiHHd9SYGqFhZ36f6iX26M572mrEgMVXE",
  "key9": "3BJiJGdBhL4G29S2TdbkT9vVAB4ZNzZF92AX2em4RXzwJS1BmZ2HnBKy8cBSTrpTCBBKBWdDV6VuJTGWsPmiaGtd",
  "key10": "2mGFaJBfpq6U3AEWQzBvMV3cf3xTk7W9R6h6ifVWQvP8jePcHjZRKWjsoL7bBwrdTg7APaHwb2MMb7sC7Tw5TeCV",
  "key11": "4ais61ipUthTNA7Eq28KEfkYKMdFbAh3vTqWsPDocYZidqTM3ERmgFSnxd3vpw8Wn7dpQ4JFhn3iCvhFi9GNkUC8",
  "key12": "6y8hzJL2xWg5uTeax3qaQtb9dPqWVqfA1MQCePx3L6Xh9dbSzhqeRdnd7u32XCJQgDKTCnssGDkcqj3xCrA4dyf",
  "key13": "5XevLUG16LdSGfLMqxfHsuj3f7xooESLB2DuEiFxDht3d26dbS8KBG2kgUJGNAh6waQ4ap4RucFdGFd6BPZheMD2",
  "key14": "WnRS6P8FG1qdp2pVsLq4PjbWmPhk9ErNyfkLF3T2bz1KQPsRiru9SDfVuyPzWBfLhwtokLMswvKEaZrgYGkW2s4",
  "key15": "4exzygVzcp6SUFcwpnt79RDV34V3cww1rcyoTnoTmHdrtfvc2QxhiCMm9kbDAiVaSLTM2X7oBLsmYRXDvC7JtHhB",
  "key16": "4nwfBongZHfqLJhErFFQuvpe7rgUsuDnBjHhQCJMP3R9ZXWanp1z7Vkd4ULm7quBL7CNUwXdMyvcRVjiFbtMxKTH",
  "key17": "2N81pjC9rCucJPuAuDF8Zxpsb1iyBoWeWxzwBcFpdDaCoN5EhWRyi8xgkpUjAMrpaeekFrkQVNWDsHZNSGndsaFM",
  "key18": "5uUTzwkJwP9xTA83ngch4EZCWtCEwA5prUsZSFmp28MTfNiKm3bh8TC7GNHEcXAMnTz1bwtBYuCyaTF1SzWrR8kd",
  "key19": "T9PuQUbiuD8Gc3ieYfLXHYtS4ba7nbS7GhGjfcs2wRqRLDD8h3SQzB6CPbf6yHLaFva7oXpjbgcyPsnWisE2Gx1",
  "key20": "3ubSM1wL6UvJgadL2ajSpyGDZyj7bu1zhqfZq4UTdvdUuV9zRmXscr2Uvs9Hn96AoXiEz647JawfFfFmWbnUTRFV",
  "key21": "3vh7udJxgkxEQ3QrAxYfZwTLZmxNSWLUvU1vZiYgHRnB6LjnyrpMN7brvExQzChaLXFDVP4Q7T1RY1FjDUJv2Xc2",
  "key22": "3RYyJQcpupnTcvoHoMASS8hvM5CSqNneaLpLCRbX7NDPTCJLThUc2xqxfYYqLsq5djS1HKBMsonFj2ospm2T5qHN",
  "key23": "Cn3A6JHjNMz8PaU7WSesknVQ3FeXfqWsqohs9zoMy7aCMrLkoT2HyECcW9Y1qX1rmUqRG6KTKFpyH8jA9BMLDeF",
  "key24": "5aJTMx5tJb1oT5tpkixbq8tEsH9YvgTdSVyTbrVEPDtvsMGJczn5P2SsWuKhrjAwnQhK76virSrKGkHUTfihffDF",
  "key25": "2ENmzYp6w2C3pqprT6t4PVyeLivVhKsizrLvdRU3CWHJtC6WpdN8KWXrGJrk9E5oZkLaJzhviEVSvvKcmvVZvDrT",
  "key26": "3W9qyLUP2fiCbXzpqqBwDgdEQC9as8EbJLGbuxAstLdzwuFvGYB6wsGsYobPKpZp8F9X1h9CTkoAyuUnvVTJvLVH",
  "key27": "2WVjfdy4gKdctkJvWynGHh7zCZQF9wXpyQVTuKjdMAiPgwjZiGouwwogasy67NTEk54LKeFGEauCoUMX3eddEsVd",
  "key28": "4SenxVHHqHDvzADjrkURfKbYFGivbzX77UW4i2Dtg4AtUHYrFBUEfmdDgwyir1uBtwhmfccfSjKE5bZX3ku49ADf",
  "key29": "iBy2khv2M7ZnFSHMgLvRL23AJC31hA8ck3gFAk7iR4TkswrJJe4cBTStWoXVX1XyDxJ5VH3kGwHfVhFU4GbpaV9"
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

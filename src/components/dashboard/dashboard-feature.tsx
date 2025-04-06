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
    "cdqPNJoxZii5ziLj45o7Jg4v63wBgnW9QwhTz9HZnhvvYTGKwXFnFchuJsgVYQvFg53CBniP9wEboZTrUmdTYZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W95vbS3wvDtd4z6R8PLuQHqvCpQNtCDdQhi3vyyuzASfygNwsPePMpb7GLjYt1hD53grvnaLxLJrbEXDvxvXa1J",
  "key1": "3CEW9wZpGJPmSadayse4nopao9ZEXaoFW9gFqxDD1p4eKN4aBTd9ZgjY6qtsViG3XtRroDL9apvLYZZfuNsztBoJ",
  "key2": "3KnKWcyqgknu9XLzFcggRNjtu1W9usLA9MJBGq2asCQHot7D2edk2amuHYZgVvVJGEKysWtP38NcFkwnx8okeRn3",
  "key3": "3BzeRSe5ujNx3QNK5oDb89HEwtiitc5CLmSjDqEGpthPP8QwGnJGaS7SyrLgiiTUgXbRHb6okfhRGuMYy7XFz2dX",
  "key4": "2FRBvaBBmKuo1egPHcvWPUNBaZKWHdvYATNpaJoJATUkr9McrqWpGb7brqdffrhTNDKyKGgdNHZEatNrjGhr7PBA",
  "key5": "4gU8PsCsGHnw9US2FTi6bYQj855h7EKEf6wuYS1U15m7p1tdDjYYTcL4ZsMNoLPoG7nbY9F1eiG86KtUx5EmecoT",
  "key6": "5U6gZUGD9wQcCJv1N7k9UvzD24CdG1HxzQxX22temVnkpKxD5saUeM38JmoBAbP7U72dgZQuWj4qixQy9VR57W2m",
  "key7": "2DZYPa6NEVkswMcrCywdMUxYfL9JvTDKMEJJoFer9jJaoLUi4uHtiRrv3zPxWvhd4MZGnxCYqvPHysxFD5eeFBGJ",
  "key8": "2pw8BKvMbfCHu7MW4ijzhyQVT1zDTA6x5tfqqLBaYH3UQe3MpeeQap94aQmbipAR4TkUsebayPpjAKhQ6JofdV3t",
  "key9": "PxeRimB8psq98mKTTFjXLPr6m1fTXgxux7MRcy8Gg9MGNEbdRgtWjCNoFNxhF6Xfh55qwRGXu1vXCpeeRXwTFK6",
  "key10": "Ud1chmaaKRha5C7JJwwFar93eWeep9J8pacoCJmfgHXq8ZdYewUn9PQmRrir1Ym4pHEQC1u7SasptPmp3SVTETY",
  "key11": "5vjSvGy7uTRRDXtXwbNWPvqiCHbxvHGe2WCxuHzEmKZMayVrdzeXhmqxHwZzFEQSJn4QK1GM8zM9uPzCV8N2fbgS",
  "key12": "5G9zooHTuns8p5SAj5BPcW1yie5mGJHC6uu4stcY44AUsWg9jkrf6QyT5qCsBjWDkc8Y2GkXk2sQvCqUu26bte5e",
  "key13": "2UaaHxewH8WAaUWNRVpjziyy4oLvw1e4djHF7XegEHLEbmrNBTgtDSMEquKBxEymAQhRiqGn52iqv6qFf4GXjtF6",
  "key14": "2ZMHH3Z46eRjA9XzkHXLFopzQ71XvjpcFKjN3Auyz7kd7DsJMxi8g7k2THWtW9C4o8q6FFX9RGPBkKCQtfW8HT3E",
  "key15": "29grJcYc5FuYzvrTGhHDPB4xuJvSotoTaPPMG32NGE4sVMPriSaNV8sCn1tcGm8CSg6yypwfQrYPzjxRJFPMXkKN",
  "key16": "2RVuHjV8T7uymgmk8uSCyHnE98NDzrZ8d45PL7NMC3QC55vkUNnDwUYqHGzcaHBsaQL6jYR5CcZjtiouaFKWbVZo",
  "key17": "4bUMxRp9cJ4Wvm1tXf6B8rg5SjFEm7SdTYB7GYqRpbCPriEyL8D1BKNFXTw8nnPdzwiqzci8cy4Ctxut1BU5ti4a",
  "key18": "4ZqPfHUu4Hb1VJcqNyyDTHhho3vxmxH6YLvQbCGrhtaVVCNKAV519jm2rJRKAdecL63ztLBNxMPvFRCitfMjt2y5",
  "key19": "rE3WtgoM8BxnwAvfHDmVtFG7wMCqne3XJkiRivemhdUpxfTXp4asWjg5YGCJWHkqpA4AjHMaVxHAQwCqC6XsBEj",
  "key20": "76YfLzMdfgMVjsTg21HtWx9tWXqZGgQA1Vu8fhKEMWu8d7F6ierpGa5CNKhobuspKBhqEYVLwE81wfdidSzPL7o",
  "key21": "3Z19DhkLxKqN5sivahjRRomzzN1ZYZNtepPpBuTxLxnmGARsXugRGZRKc4QHK82Veygy4Y3dV3pr4tM5eqKKL5gS",
  "key22": "3ygwfGR6AG3zEkJXSZuBe7q1X4ynqepvKpiEjmn43UQ2S7jtnSYPME7NNPuuFhUv42bvrATJRg2DZ7Py4vZxUQEi",
  "key23": "3qv27yUevDS22whsfroNcWDJX4iiYDf2ZzxPMLPQTTPXGy97sKr9iZYNh1GzPPWQPDFayYU2xMo72h7xTmkG8Dxf",
  "key24": "3kuQtFsiGJUwCy3tvTqabJQysAYzRiEutZj4QA2W7FjMoMgTjtKk5ZaGTb1ACbBMWavAkF5aj1KnAbSTDxvL7JzU"
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

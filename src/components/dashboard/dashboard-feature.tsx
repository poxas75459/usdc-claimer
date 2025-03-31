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
    "5SJLwbtPLdkMomyagWTuwPy5AiYJPeYQf5XF3ZRBhZZB7QrNqC4khTT8jpmMAgAHGhRrkDeFTRGBs7fdJ1QAF7Xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VyzkdefBYX9p3a9EejnQpgo6VPUC63CN2J5frYK2D9VxZdAm7PQSiXRRNz9eMvKGBWTPZbqh2GRURntg3X6puaE",
  "key1": "5T5yss4HxLYjHXmXPK2pH8Uxw5MP4TXjeCsqsk3zWkMUs3ZNKHFVsoUwL5vpzvfRAv7sbrxqKuEHaLPgtDx3srFm",
  "key2": "n43GU4vv7ugoD5danZysgEsf9MAuHtYi4BfhVWK29YU3NRa3A2J1YyRBPFwGhfph91ym31taRkYP9Z6GGHrWe9c",
  "key3": "4BkCcgkzbtve28TL7UzcEBsECCEdqskprwayCbjC9uPArgi4zNTKKwAPA9okBmHvLb8JofkjQZ5x6woCBseLxLpZ",
  "key4": "2vncijTjnmQ28MK6wrhihaJqCGE8wyaSMebprPs8bqkSisLud5hZ4NE8ffY3xBi78dkBJ5T6VsGJUgtXcw3ZVes2",
  "key5": "3jATkAmEpJvueRivK1gkqijmp6EpV2R9QYrVESJCAfW2H431DXkrEngjCraBG8oxPxYxi6Y55q5axLzh58HYd7qq",
  "key6": "3NBNTMGEKMbJBbNq2TbJezf3ghtBpGLUcfrTM7VTHk9d9Dt1rX3yD1KLpqWSAL1Sz7iLGYbLhyKA7rXizSZiZ4tJ",
  "key7": "MMgZ2jctaiB1qTieqsacGDkfVTM8PoU8t4y6nV6ZFsuL9jqJw1ZCu2Qzk6MZVkkrXpdqMqa315nCFCk7RBiUSp8",
  "key8": "gm75aJLnqWunVYxCXbdrCFxBG5tHjYJVKAaSw7PV4XevAd8jEcDM4fDpgZ9PJdgv1nQbCYbfefXhazJ8KtvBdCZ",
  "key9": "5xgqFoxe7fLcXSxpA7kmVUsEG8MjJDhGc9JZeKjohT2JSu3brP564PP4YGr5aZnCiB1KinGE7WKYE2B3QFZTcf9q",
  "key10": "2o9vU9xkkWsXkjuzvzMVnD4rqCRYCH4q3ZjUnDndgdGn5C2ZVse28kPQuhmAPdYTDwWqEMcGpz81T9TnqNMxL8vd",
  "key11": "4wiWUqUGUkxrnRhd2e2Uv8LUU1Lo1RkfDYSw6uALmJzfvp2h5UQrjz6CdqfKshpaTxdyyPgV5NHeJv4DHrfC7AFp",
  "key12": "MRBWP9xjduw8HahGZJ1eM9aEc97FQ1mx8Yk6BSLs52z3huBg1d3Y7519jhGkVyZcMoqsZcvvkVNfkdi9Vi3kSFA",
  "key13": "43CHn7APKYmj1zLMMoFsybKa5htM2T3xDJBM7KtNXL43eSa5KRL5WWVr9H5Ap9SuPT9gAGdomNKChJFpab76c9Ej",
  "key14": "4U9jSXRYZWy8vAWDc7wPLEuH3qm534imMZuZPBVtr8kUxonFpstSaBNhtmCRUMStHfFucM3H62RQP1gdRvEpSg8c",
  "key15": "XGRw9KshtSctZiryM78aYhjPCidigP6Uxw2N1MhaFqZie2x8WNay9pHwLEq9Cpz6F4Ntyqi53CskohJo2kvJxX3",
  "key16": "299Xre3yKmBTK1oQLv2mLJarVUR4eST5bJng6SxeFAgWc6t8DX6SMQQag9L8d7TyoAZ9YTnJhaALpbg7HBmSy4oZ",
  "key17": "2U9e7VPZaBMcxMXqGPRTWo2yhiRq1ui9jSSwkndHWvdiWnLLMsTsGrLedyyfLysfAEvroRgopJTCSx8tNYNpSPTL",
  "key18": "2HAGwR44mZUeC712KR8RRb4wCy9j722jMccAKUPEkgu6opaDdVXuQjdb35BdgLWCPCmeupCTQyBcKqGpe6b7LBH",
  "key19": "5Uvh8zX8UvGCwea1Z3Aw7GyeN42aHnCrWseeAJRBVjvB1F3A5C1AstjTWyu3Z5NS1A9uHtcZYpj2fH4acasyeBMh",
  "key20": "5P2XbMg7XeZo5YRQUrBaQcvKKNZdFoAWPZ2fWa5S9qCK5TZrQx8zSnPC6sF45dZ6Ex1YTmEifiR5Hn5aUAChmRcU",
  "key21": "2A4VWQ1tzU9K2W5dSntdWRi6GAUiVvwQ3YYyj77Ucm22n6DF9TQ6Cvwh5C6bsWLumynfDirFss9bUvG5Rid3sDmA",
  "key22": "5vLEbb5KBjTZJk6rnbgW38xQTAPdxRw8VscNyvbhCfzZVUWAMversB69VK3x7sXwkZum5JotLrSBNBmJ6k7JzKkY",
  "key23": "3NBCjryr93dnsVsg4rWrm1u4eiuJwMmXidoX28uZuhcZhwEfuXnmwr1F4oJ1ziK59T5HcmZhf7EWb7Kpm6UsAhzw",
  "key24": "3e74o42JMGAJn6dZ5pzAMeH8kXZwZ1kMVLoADv416eQLXCg7JYqy4yRcDHdLYjdwqWnMBoYBBYQ9SkJUYNfFaqDc",
  "key25": "4nr3LumHvjCiVchaC46L5iQb4GFJmFofq2cTwGiE3gNQLS1L1pk66p9J1KTnTDYtC2fnG3UuwzhH2tZBS7tjq1KY",
  "key26": "3JCGfijDrWpFRVFQqvfc8kBYwmN823gSncQ8sQ9oJA4uL96HuWfAtt8Bq9MKvUXa81Hgps8tiwPxuZLR4Syv8Cyj",
  "key27": "5UMVfKeXNd4TW9wwbtE8UU8BT6GJkpYJdHCixnHBATD24q8uLt1RWoFfCmBwsLrxQNrJCc3y9BSUGfxZ1Rd4G14W",
  "key28": "fLvRk7d9hTmUM8EFJzewHZVghov2AdKja6NRGoWHH7FiN86cyVr8icCNwCQmqeWa3GCvrBHqpLuLQcKZa1EXvDf",
  "key29": "2pMDWuJKfFBoRG7GNJJtrUPPZYbxAMNbBbzk1HScQDSa1zeXvWkY7CatrLMUhdWt8XFP2Z7oPgxL6GXpMmrzts43",
  "key30": "4yUR6itJ3mzdFki1AfKv9hiorh2iDdw2evgibGyx6oBCkKggNizaRpsHXNKkt6f9ojrqtCAAv6FY1v9rC1tPnWTY",
  "key31": "zSoFwqiXBaE13Fsin4UjRxkA6ETyL2W9zD3rzRcxFPTkAyriEgS5rh6JQoVR6v3TjHdiGoEMVuuHewNwP3Xq8yZ",
  "key32": "3Z1fRjnruM7hdhEtqEBxi3riw5rGJBVVs7EtGT594iVmLjawreBRWcerbDhKcub1o9z7e8dTh4aweiNMY91MXy58",
  "key33": "22M9nLxBrU5C2K1AhcFwzMLdVqpC1hTEY6u2174EyemND51RtmEyJDhSqMX2LTShbJyqqEimadqm46R2a6bjAnav",
  "key34": "2Etonzuuusw4M7vQmHT8d6hWYFiYRxjEHh19L6hPCCAj6JPTgSe5PKWzzfijmphsLY6gBJfQxoTDN1XGoehGQn7g",
  "key35": "58hRPmrDtZANa4LfkYtpcA8Sb4W2fYe43ahMwpAvriFQ2Hs2mVrF1UidW5xZZXESBQgJpWSsNjSZLvpxR6qktk4Q"
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

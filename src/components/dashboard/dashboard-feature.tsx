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
    "1CFec5SZ3AcFHLTS2kmKkdhDp1ocQxeejsV7GvFSvtSsiyabtBvUsR5rhH66tbudR7ZQ82Wgbgw2Q3nPxXgqW62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LU3NnXAnyccNamyAjqfbMCgpHPqHrB1iJ12UWribSsYYPLo224aQ54VWVEtLTC9Y5YGcdtWEstd4D2FZe4JRGdU",
  "key1": "oAMsKaLCwmnWSCZtkLpA5svg8xw2WjGVGak1ETurEJCSbwovARAGgLRrQGhRaE9Ju8HsyJggf4538YJJzkx7fS2",
  "key2": "2AVzswbK31xf4Q2hGkkwdujbw5bDWEJy3e7tJimgDYKvFLrSEG64VkKrc9PvPuiPQhYVbeU5xDXXf8QuDcKfRKrz",
  "key3": "32xUz5huaiMw7RkHaAfVksf4w2nWyHbRU3q699zHbkAwYSTJeD8BQdtwVut1KP16qrSUVrPsiZqNbkwrhyp3Qopr",
  "key4": "4eHu5a6jg27YqFaP3oEpUvfHdDAvhfweyamRHvFiA3tB7fLjgsGz68ZJSBiVEVDMf3srgFPjkdmr6GW3KHXxSvub",
  "key5": "3uLhmuyqMg9fwmszihPFRmkNinkxKjkCRakAufERu82d6mChwBtpJXXR7H2XiMV5Qy5WXfkY3ML5EeyE1SHG5on6",
  "key6": "3iQoDHm1geb49Dv88uvs4icomiVPcHTQyQqwC4kiQjpUHQk3RNoh5pnT6nCU7xzaKDnyynoxx2dBMRD5wZCT41eZ",
  "key7": "4n3mTkRGKbNnwYVCMQ52m6WGmYgcA2tzSmWtUMoPngKfpqJ8476sijvH3TBu9jShBAVDLbNo2aov62TNdhLDZN2L",
  "key8": "2Xy18HAe8Ppw1htX68bcyV7BKJ1SZR9Ta72338htw2iMxKo5bcUp8pvPHCDNtW2MiRk5EYPoFhuuoEbk7X1XJnai",
  "key9": "5HHLFcdLhkmCxn4K9r8YTeqH3ZRXuJn2oA2NartEdPDzpArpcWZtFrGxtQZTtGw6cFFZWSUHvwoJEZw6MUoRDpJT",
  "key10": "3EgXux5DmsiF2mtt3nweCVXgRr4HRmFMt8rqtia4tjcYXpsSmYgWDbYeEstSaZyJ2qKnaC3ENQPv1fnkg2zstw1V",
  "key11": "25nrxJM3ML46bvLBfjqLu6j3i6Qh5vGPghcBSBmLvqAqdRfavPhRuPfnYzz4KpcToHw7DHYSHCBYyHteXBtA21QY",
  "key12": "5sG8h5P4ji5PNAknv7Mj9mpfJTrVsg1uWCDe7hhNHQ3enQ2zYnYe8JQydA3Zda2kCuCNYgdqaHwqawShWpjuwMSt",
  "key13": "4omY1kYEm86mNzoPjdPYiiWzMew3WdM6PmeayN3HUx2FRdRsDfBhzJfPQJsCAqJnykjtUjnsfyjV7A3DsgfNmTNJ",
  "key14": "3NVx444v7oMWQULpqLsvnsJiK1xFVMStbTXJDTvC3B37vWMWLceVtKfPCvLHEvEQdoQEB8G3mPntp5L3eZ2wKh7w",
  "key15": "5j8Hrr9cDBcrPRo5GnU9cAQXVVoR8DFHye15iQYHQ7xua61cWmGbGmjQ16BBCbTP2xeX1D5gRxWH5ZUqpaiTbCY7",
  "key16": "2SAncyEa97eSRMZHgt4BDsXbyQ96HqywLcCN3J2TBzbDaX4yzbofT1iVWKNd64zdzMUHtxUJi9pWNjQe2sgnfKL2",
  "key17": "64ofkzWTt2xMgXexvUFs2TchRMJKAzkxi4sCxSFxQEtYBRoNyHhrYEkL7ZmgkiyzqQpNQs6AzCzAvJbi8QFLJ6db",
  "key18": "2n8iJhakAv9iDzhEWHhMsi9GPM5TKF1w3FH7XB6BnLq6tfvQsrwbBV4WQFzYoEBUFBWYQPiUN4JYph2e3FrpyqTt",
  "key19": "5PEFndD8WEZbXkQQ5dCLm1xWnrP96RvpiwzJHvM4Wr9QLzg5SeUT56yM3G1KgLKZUwxUvrGATXZsK8qXoYDVNAYY",
  "key20": "2rraZu8P4Aa3w2V16dMCZMB1TBEzNHkEifpGH4Lv8uDHnqipJhaEiez1RkVdMDeHYkYY5CfSzpxqXw7TaUEFFvLX",
  "key21": "4pU1zKA8t4ctqH3VbTbBxXZUDWoh8WPc8d52JVayD3ECX1SaJfjBPWiarXgNysp9noAStevQXenn5dgG5pXCPeuW",
  "key22": "34a7A5KXjx8Sw4vZNBxN7WvxjbGGr1xYDAxhANF59sxksyvXsRUD71TaSsriTUuBoDGRFefc2QuPnXd6jYdF6A4j",
  "key23": "4Exty3rr2rmCQHByMXMgHXPR59pCEnXP1GNZUrhQZDBx8cr1PTiozpmAxKWTDiMZBbTYzrTrqnwxnwjGg7URYKQt",
  "key24": "U8cnbvqQJqqwv4aE9pckSLS8qHcdnbg21SZmt2wJ2LEL5Bp51cTmQcunwJNn7ratTLbHw443Mvn1jN6CdgdwDrT",
  "key25": "2Q2kpjTh65JDE5MZuLvVKjaQiZJpBbW31f7qJ7Mq8sVnJd6GPcx7gpvPMmKj1H2LygYTEMHCS5BPjKAVj5E1ka2t",
  "key26": "2aB8XMZQemueeQ7fDRvWCecdP2Uj5RjG2umLV7b5tGcRiX2ikKCVhi4ouc42MQmxJmhmpZBmpa4UVptMVsoQNtus",
  "key27": "3baWSLCwsBJorLXmK4nJU8GtxovYGDo1cc53veb5jJ7m3QoPiWSWTYwsZ3FUv67hfgWe9CSkYsrhkFyhXUtC8wEb",
  "key28": "4W2hZR1cGm5Ke4nr8wjnviXezR7VUL8f3cuoxpj4rEK3PBJcNxEmprHYpfVhPgY55BT9Pst85pV3SKK2GuZBjMqb",
  "key29": "fLa3CfusD4mbQYgwuoa37WrwpUXgPrBWQZ82THFbnZUn6hZcHg3rv3QbS9Rf3usWe6EeoVvkpVLGp6fxbQJoLBE",
  "key30": "3tujvtdfgPXKZ8ormuZQvg52ArQT4mR6gimb6jD97bZmuJETgajJJLYgCtUYvMaLzo8HKgKvSvNPRWNX7CYEbtMk",
  "key31": "2T7E1KS42wCdHqcffCNhyZ86DhVu2SM6Pxg8rZGQ3PR98Uwkb8ok5gLQDBFGy8fPn6FzSu74exKUHU1SsygZW65U",
  "key32": "3kW1Guoy1ncvErCpnbfcikYmie954Gn8QDhhp9oHFxA6d8vAfQsZJfKrbgMTsuNyhvWPeyBmLCuufWfirZG3uM2g",
  "key33": "2gV93LzUgtdroypo9dSRrfymG2rVUfmd486Q6bYweM98MbXAnw4zB9rraDkcADTRnaH1LWjCFFeJRbTXXb3QQ9yi",
  "key34": "GodawuLzMcAaLt6S6CfZvrXmmoLUJm9j44hnuZuvHwExC8c7sDf9EWAEjj77U717t7Gn5T2XNHMid1MUYfE8zd7"
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

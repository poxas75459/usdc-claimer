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
    "2CXoZEGuz46dd4MVrx3M2vdUmm4XW1si3bz44bEbP1ih8LWbwpMhafEk95feBbppp3q8sGXk12WQjKtTudchWocN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYnyhdh69BuX6ucEZ7gmgYnKsh2AGX7pnG1tEdMoXwzcQxe5aVRvZhwhQsVReVCpD2haJzMcVW8NYZEy3e6x5v1",
  "key1": "2GoogZw8wLSmYxChZuJSoFpBL4ray9PjS9L8rK4hVy3mkvkz5xdsQVhKbi6LiXZDgebmsnjsLY1iSUnb6sqfxPG8",
  "key2": "3tRLa4wNPgZxASRMrS8Ek9ammiyTPa9xiircipxgTMzEAiEUdbMJA3dcDVNQcqwGy5FAXJEaU1y7xgoAm2a8ChSW",
  "key3": "481X9CeH434VGSqkfmbQ7FXtLd9fFGqQnLcXDpDzpcTLSn4mCmZHi5xNJWhNRzt5ZgnZayPyYcr9QxPZEgCXZDWD",
  "key4": "uMKmEkwzourWiFDZgRY7AvXFRupEPYPDk4kqqFNxPDU9z26x36vJDM5ujei1pSj1EvAjbac22doGM4kJjuD8x63",
  "key5": "4YEGuE1fALHnh1W9HjiWtitufAGAJ2huZ4yjSpY1Vcoxg1N9AauVauDWCd4QG56gZCEGNqxZfLSvZoV7VrgRbsi4",
  "key6": "45ASKUuKSLUeUe657FaqgvvzrhmV9E3HWbmP1xL9UACDhbJZALzsgCubT1QghQjPMQ7nb1vqzQapbsMx7dhthhp7",
  "key7": "4LLwxFdFytE4aYaT4EEu1ZhaMvzKYgCryNj3gZphLJjb2uMH1hcG744QsW2PL9Cz4DFCGgnBcWq4MYMNvc8vM7bU",
  "key8": "5Zt8EA7iEcqM2k9uMZxzonQ9KccjCFjKiHzDcGmtE1Haj4T2iiHSwfRCznWkJn8rjuUJ981sy3Mg4maeNqr6i52a",
  "key9": "3dxUisf49zxMbBKsKxzH7bSRqfBn9KzBgkpnVyxLwszDejEF5itJDB8PsUUehRU7nirrycGmWvPGhan4UEbkcvVF",
  "key10": "aQStY92sZJUEaBe9saRAbFa5wrAD1AECRypzvMGMZ3nEeckLCSjmpfydy14rJaQo3dqwo7tWz3Te1nrwbdHvpc8",
  "key11": "5v3mHkpjWye4gtkzwNKZiT6YWSz7gqvip55CWUvxD6iAit2M5gvsVYJvcUzHiFVWH7hfuLQUC4nozUnAHpxcbuB8",
  "key12": "3JqjfyvG7g77SVyS2XnQ6jb1MF1Hhi41dpzbvV3CLmLFFMduJnE5sPoReH755CKqFs9cwWxUfosK7Qk1foTjSYP6",
  "key13": "3rpNKfvWm5cpkgv4HpneFbuAAFoCaQtCpZpciJpE2z8Rpb4tyinbsjcP1hmpjX2ZEyqpbdM8yy5LVdZ1FvqXbjN4",
  "key14": "5nUsChrrLfibtdHDHU3tgUYD14P1AcJRLMwX5qFYgHv94qiDEmBTosxcWuy98yJN4zxjLrdvfegJU8wQ9nnhS7ct",
  "key15": "3BhdBDoC25Fsan3mxnypCNb8sgfP5h4Am52r8A9jK2N2d8VvRwni7X6nUEZg4n43n5sFnpYBP4kbFtiUVMR1AUMZ",
  "key16": "3SeJz61kFC62fnqo9g4EXnLHdJkuws7i26eeF32wFF85bYCLGvj62QWv9jHQoPnX5tRd4mpzTe5xT1HreVqvXgoo",
  "key17": "3emC17ZudPZ1qZ97jQeAWKcUSKP6Mn8PCCxGdBkZWJtetZCHxejrKqqNSPrEDhUL1L86yxS61zDN5heUrgCM2J67",
  "key18": "43sC4MfocR8o2cUvkMErFvEVVWxvUU8KyiVeYrMQJyXypLwKAxwQLDqNzPn7mpuEoGZWCzyMVRgX9cywqquaHEJD",
  "key19": "WRY7F7ph1Rn8koKzh8tBqZ8Sh4Mr97y562r9fUjbU3GbBwRxmoVSdQndGbLTGTdSN11XCt29CEjYxw9cp6ozhqS",
  "key20": "4CC66DsjV8JQ35En3L9vNkkG2KxFMbHxSeJhC88vf9uq8LW3Sr7nVqJBEeaNxVuZXcUjGF9PMGTA1TL3pnFyyTYh",
  "key21": "5m3KngsWMSBvNU7tu9cChBYTmyUWKkmbbh4V1drkzJHmjqG5nyHPfemMdvPP3cXoLwWN6wLSwBCgDDzhEwMCr5YZ",
  "key22": "4F2p8nAQySTXhQ42DfGzVjXXLcmbCMYGgfcSKDv2B8uuSU4uZauguv5L5n8zFnV3Lr9KeVwUjgKfgL8AZPLsPt8b",
  "key23": "4vmhgJJNumH3maWTEsrcwoXoKcb4k7JDeqAQvcEGryhZgvrjg2Ff4nzJVeT4oXaJDjkdm3gPHroeAGh7a3hmGFiA",
  "key24": "2gR5RWk6qBp9vfKrE6dhghw7FQWsahfzNRBeewD9cANNvoPLEjMmbgEVRPm5BvgRmMxmHy5bTp7cHUCeKEfa96Sk",
  "key25": "3yxYwhAyAbUBYX1fuEd3hBTY2XhFaCWtZX4daJbs12qSZLBSWhJxJVujZvTyRccRZvQiCjBdFS7RpUstbKBt1v8q",
  "key26": "2ypnNXNtCmHxDqpndV8p6oEZBct3siePzYoDfmvFQgQ56Nsnqazt4vBRNwWzC4cLi5B6gN9ZacMmvxAVv68PusXu",
  "key27": "33DfRBiSxncDT8NqFx57B19iE7DsQJy7P8V8iKCHm8JU9fbGRVpb7zrKXFnr2FuFo3yqrQjbY1YFo9Qd2HLy2Aw2",
  "key28": "NW4YXRpTaxAM3KvS3z1PVkddTsjX6muor9QbsjqSJLsEbeAsSepLV3gnaENeHCY8dBto4GkcSGEmE7ypyMsDgG6",
  "key29": "4NXSYT4SEPpA36tQKLG5xoKWhoVC7yeNbkKs4dzNrG7rsc12E9qH9tfZ5KR9QEF1FkmVUTRNuC2mnCpfyw9Pof9U",
  "key30": "5K2hYVLniPsYwGFixgYbtACKsZDxsGWcb9BP8LsWeCpWEHR2VN6YzFio232pNzwhJPbNGec4pAuZo6Aom2mUSezw",
  "key31": "2a1NY91LJSKcv48o8CzSsf33CLG4Gk2db7hPYaiuccwca5EGWdpo4WbtkxJuFYY62ca1e9aC42yqKbuDZnu8wqNx",
  "key32": "5X2dptyjqBHsfwioyPMnzW2q59AypYwXTkEp7PryDv92uuZES9HAdZUo2s8TcPYFuxgRPjBx2CBpkEM5Cq9VUzVh",
  "key33": "2RTUsaDRcDz4JQ8qVJpXb3ReZGD4Xza8bJC5uwp2tYhetuttZUBq7fe6ruVkz8pz4jfdmyGn2jdJzWcN2cytXZex",
  "key34": "2BgYkbUCxzvJLQkerbLiagLfzbnwomCjy61wDbix7im7DFqeipWMajSJpnrizoUtczpQcXKPUCBbP5yw34CwhVCf",
  "key35": "vPBLB6yZrpsEVH3HmZYTcErd677RH8hDqYwbyuT3t5Wd8EhaMiG9Kie3KBZDbHDFYonsZj2YqFFD8EXXGpK6DAE",
  "key36": "3pkagBnUAKb4kXHKadEXmXGjKT2LP98ANNbQpLJh65PSW9G4PijUXDhNWhRT6s4coGcHn3rjKmcBZGbjYBi6LL5M",
  "key37": "4PTtZDSak9SMpsY2YExKBGz1BUjSVVXXenyPboDbAFHfv1JQpZbmEaxMerTTqbzWCqAEWdCoQGPEgMteoDMgz5vL",
  "key38": "3myLs8VcPk43hoenjtEB2Eyrd8EAnHnzcNawLjKEX8Cf2TQwgMFyZo6P8nXXX9bZi9frLSFewjSELupzWkWChS38",
  "key39": "4vYqacY5Mp3Ey7HqQ3fHg1srXZhmWYKozM9onkNabz6tA69BEiGq6C5aiV8qvexsvtP7rbrxpQm77KZ5p2mP3c1t",
  "key40": "v6wS6hrWjTnnkJFkjP2nv5mqsrG7gHj9ct8S82rADG61AtPL6J51sSGuSYXvqYXTDzuCXvEJeNnwCvYXEPESqkd"
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

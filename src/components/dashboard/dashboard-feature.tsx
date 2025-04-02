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
    "6fqmVy4JKT478bnjCFcNiHmabUcrMBJYLSicczPyShkWCkthTkRD5B5oPRtUJBqaK3BLofz8stHxRnxWkkJDRwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLy72Th2rURdJQVzCiAHS5vLhbr3hmYWhXnn3qreDfk9qXL2KLBTuqGAuHHEkFrLkz71LZPkp4pyrcd9Fsw4466",
  "key1": "3SbLyPMBbJNUx85uwcyfYZVNh5CJWReaAvbr8pgdeFHuP8cGB3z2ZUFrqSpHxG9xLMZVTrZJFSWyEuLbokhTKmoh",
  "key2": "5hEQQTfzYVGiVrf6n36pFaRTPtCurBaa3ToRPzFYSeCfTvBgceK4xSx8t3mpmU6CkHHeGsNMsG3SL87dnxpAsFGC",
  "key3": "3jHuEgQ4QxKs6ECxHUVhmkXRfNnWShTvVVmYUrp4LRCQZZuzeUYkCvUafy5KMKLren6jFKL8vW5yEnn6VBkwKbZQ",
  "key4": "g2iuUXHGAwWAREmHLRMpb8XdD6eZg6FwbnFimiwvZLgESmqTkbhyXeDsNwKh3TxZDtZd1bJN6aidMTLGvh4qfWN",
  "key5": "2mnDDXqHp3VnG7ZAhkzEQggsVMjGeYnayqeUCVJZSksGSE5sZ2V229qNKY1GzHQqsEAvoytC567XasFVz34tBYFR",
  "key6": "4QBMjE7nGmCFi45sTT2GHLdqBXDpfVLLnwbTVcJan4BcTyDyn2BqHrxFi6rVWnCSTPUNzE8YNYpBjGtNXUdaaXDL",
  "key7": "a4FQgeGZA6xHogcoLVxwtMMCPDBrz9a8FWL9VbUAWz9nrw1MjhkpgnWUsGBSVEx6fA3oxCTJa2LGzi6XqasRFzw",
  "key8": "64M9W8YXpBgvThTNaYuJ7RZURRg5vLjzErrWSKkDBgUyHuhsnc6EiRK1joCwL3Gr3rxDmoft3xsUyaYbh8DVQb3S",
  "key9": "6363X3exw82axm4p1apc2D234v78Qu9GS4NanAbNhKBtf4GXcuNPfT1FhEuSnahSd6NafZiGkULrXVFTcWHCTj7F",
  "key10": "4nCMsxbFBDz6Kse1teoqiJqHjbZgtE2DfvBtxLJST4kiL4bQg9fZoNGGysMt9k9LcLDVjX1GmNMDrYcV7wbst4Um",
  "key11": "qubFUC5xHQazFUQsyWRBLy64vUJ43JFzStD8jEZUGdt4uPcXHkPjZtaUJ8A3PkNRPjcExScnZKqPjCU1gPg7vrk",
  "key12": "2Sf5kP2jLLi5mHJ2qX3C3LRErzBBmVz2Yq9MA5CYvJwbXKfQCZamCuTRspeNeroahyN8kGXvPPLauRcsEzeMHQby",
  "key13": "2zZJ4SDE8pXa7qRMpCqoBmY5vJZeb6T3rbj5ixYrLXgQMkktXPraywNSyhK3P5HWNRiocG6d6y47z1gewXhqgzdr",
  "key14": "2zsrCZBzaV4Ud5f5Fy8DwEneUvuDdFASqu5KPw2uE6YzJm3uxUurcmAV2iABnLSwpgKASe8UckQqUQky9N8hthA6",
  "key15": "w5tK8gnKhBPtbPEQtSFRwQGrVkY7DmdwSKwnzij7mrmBKCGega3L8MQh1PAhvWgsvpfa4wyucVc6ys9s9b5bAYx",
  "key16": "3pDqxcWhEPEd2cxoLjE3xV1vyqKh6YZNZbdq2CsYhT1Lxs7jidXiDPVLGnFgsS3nwSjeZtNVsTYnTNktKmSd61hu",
  "key17": "3jYsd8mFPtte1uuxAAcEeNakr56tUaMqPjX1BJQNexuuQCP3xP8dvvpPcNeJGm1vpu2TADZ8oKCHuBee5MpP7QQk",
  "key18": "4MToRUikLLRLh2T1deNeJmNTQsgL7qy9cGdZGBmEhMxCPQpgzefncYud8XpcqFVd6TULECGLZGbwYJ7PjBkMWimn",
  "key19": "63rvZGDajfnZJKjko5oDsrtv3GzCdq7wp4bepgtePvrrNyuz8GqXMXL5eosfrBw3bXHdowP6kcTbQtC9DWVS8Xcn",
  "key20": "J5ZHUNs8xDMW5dw6bW9w3zc7YUwgVMxm9mXEd71gZqJnki7zTdsG6QEwUQTee7e5X9bCBkk5QLbkRMfSqj6iAzL",
  "key21": "23MJQkKoaJVLpHeLNU4QFJNXZZk6SqWo3szmKJ25Cm9YxPoNRTjw4Xhws5EHCUMFbmywXxP9Cag8xQq1hvkGLHQi",
  "key22": "3yxMpWQqVH2rgoxnUFZejjfqMPHXvdRExpE2MLZjaifjcQxV7W2YKzTg8D8pxYqfKWQ1CjpVpcPRghbQ2zij2X8U",
  "key23": "2aBpUnm3r13ka3VwWhFzWtqhLQhWH1G6nhS4HF8ZHFkPymzo8bDEnCpYb1v3cP9rhwNUwQdU5D8WoFQNRqfSSasw",
  "key24": "3MUM5nZS4tRT83eExj5iKhU1LrN58RqcUCLYFpS5iWsVPiG7ArxvkeQkPvggiU7AJa7cwTqDPauZLaDuvifW2RU4",
  "key25": "4XMkWN7FwJpYuTGQCrj3P2kM6ZT783CDc8rxdcWhrcLiuNaYuhW5skcu7M9P1ZNJVUMMKQfBeMGGNo15bfTbe5z3",
  "key26": "3pEkSNLQaAAk7MAxxeqm17ju3j9nxrM1y8Fa26KbxCsTLeX3hci32scguCerFDv83Uz6JZvUH7im85ADZvZcMS8U",
  "key27": "4vp4x3EdSnQ4YdNdXvY3t9stcRLWBPAV8kN1nF1uCeVU1oD4FVaDvfHmCKFN1VennP1exmVP6mWwzRBfxttX74Wj",
  "key28": "4Qy5zSavnEyh5Evsf3YHQdXa6EpXu2uuNzL6CxHNQbpC6UHYC5TAmVrykC7wtvXDdnGUy5VKvrbuhaDwED8sMsgc",
  "key29": "2J7eyUCpyMrTk55iVHT11EEDqwKVybbHUGTPzkXgGmiiDGhJUTJK1nuV4xrAcuTB6AUmw7Swh2KneDGNty6f4mwd",
  "key30": "3FznuQEVCKVJYY1xWRrV2PLWFmQbx7mvzWQ9NwuVTvH6n8Sc1v8hmDsDjaWjj9GbDNSVzuavxk3pbh3p5GCHFmEu",
  "key31": "23StxnTtsAhdQMGmNDTLkrm9RDLhiukUEop6Ni6SE731JKwUrVqqWaCNpogHfavhheFCfEmoMnBtJU5qa6knMMXY",
  "key32": "hJ646txf6gAhjnq4RchNo7JfDG76JRHh2VkJrFNEpBwi1MTAPnq9FSMpShKj5Gp7Fci8Fg8sVxDpUrjEnE9Zhnq",
  "key33": "5LGA9ciiedNQesWcgds8PFzR87scY27LAFPT2wWzAvZtCE3fotjMK9X7VmUH9YAW9qY6G2dVVi7UBoqirKnnDrwg",
  "key34": "5jWnZd3hTi5fmCC9piNmWZrbv6p5NdPEsNiiV4epNCc8KF7qMWknhAXGgde2fyDSR5AtMGXztkwXnWfG46tNnUJC",
  "key35": "e4N5JqRsU3VRUNzTjHfLa61kT4tKKZcBHjrbgQhLT7sjqRjtNwFS8v7uAsp9Co9La6SdE1PEfC41DXW8zELhcN8",
  "key36": "4Gm7NSL5aoRp4C51jME3VS3H8uyoNFwbephFL6zoTY6vsz8eBRVoejQsq4jRLmrJdWD29tpGoLKEFXHzoq7Ehe3v",
  "key37": "3ZsgF9SVY74nDzNPXuQbynDJmiF4M3N8EZvTAak5EvyRycdMdbmxtps7BonFxzH7V48hr7ApJQgw3HdYBNvEstGQ",
  "key38": "5n7MBWsHoaydii8zvoYCGVSTQ4wupLYnG9yabn8iAqN7ZdNBqki1RhbehYjLLdHXnqAysz8QGomSBtZLorw7NCxd",
  "key39": "3N33btRz4zY4krGVWSR5KKthDHaV7iWgLqrYJKMQEdtwKheXtTzjtXQ98Ms3vgKuQahuviReFwT9gNHzdux4Je4q",
  "key40": "51ZmBSTusnWBcpa9MRCUUMc8tFeXd9n8KXTHYnvHTfQ6yDHmPHZrVWefBjPu4ZCRJTmfS4ojtWWmErok5u98wXHb"
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

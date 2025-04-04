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
    "54ccup9iwu2WNDnsjBh6FPLJuxk4Kas6E4M5Dgrp86PocwFKKYK4oBQSkNEPRPencN3UjP4N9YCcW8XN48N7f44R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VL7mfCDTeBSCsPP2k9fZsVZ1J6RDc2mPGbWSXfT3xphsaes8KMteJLgoF45S3vW2UVTLyxWcBzk2THvh9FbWykQ",
  "key1": "617GyeYVEBgkinhf23ZgFQ2VbkC95gYgcLA2JHjWv3xoLTR27A37DvXaJkhVwzYktWUbd2NMueHuoeENr8QPNwgM",
  "key2": "5obuK3kZa92o86hJYBx2xfmmqGmpgiEnMr9PLo1fPXFH3VUY1WB2SJGdZSu9YEhf8aWH8wywVeNMwLpkuKuDjMVK",
  "key3": "4Huc8PvFEwTQFg7kwJbbgza4Z2FitTn3gHFsN22addRrzMmcDrKk7wM5VfUJfvDBWkNEXsXfcx9VietN2SGhAep8",
  "key4": "5V75bBN1bUeNGDkUBJAgDJvd8HKX1qP7QBCU1rsxSm9ZNKsRcs2x1wvNfsYHAHiAgPEjCz635oiT5r2pFLdJA9d7",
  "key5": "5JABKHSzH5keF1jJDDsJ5zAvrjLUe6LZymWrRbW8874NfpFsFEYijSfcEwqjcRQ8g8SQTzWzaRCX4aW2wCSy88R",
  "key6": "5NTZkYoNY3h9vEkCJxC1aJX81k7oHgfwvGmVGTeroB3GBRoz9y76q46MuyX8iuvBHK1qZHnZyLWucronQbR7G9s2",
  "key7": "4fgoc6Rve8jkWUbreFRu37LBhW6pefukxUCv3poTq39YpanmN3PikDsvd54AenaA9RbqSCKQEu2HwJupwEtdUSgT",
  "key8": "bDxwV9ZeXf4Ai57huideGyUjNY52JLz2V1LdZCH6SA6fLzm41W8TZBCEVtrfCoHsSDbqKGRT7D8Z3x3vNYoV6i3",
  "key9": "4AKSuAeo118gyk2aSRmcXgUfABYZ9wpEm4ME2Faaadpo8ncBDwGSPVEW4dZW5BG2VY7H2qHBWWix9MVxtX7uHPgh",
  "key10": "2k7oKdXZGnVYDifhWkh7hWWGBYWXFeAapPdu1bF3vDWm3mTPJ91nKN5ofjMZTXMZKbpPKKCXj2rP65ifbaWcfUoG",
  "key11": "KhMM7HjpmJxMy3EDSFfcJA8dFdSfGjHupU7qsePUCDQ8aLXsePL6xaNevQGmPvBxfrDx1XWKPAGg9AEX4xMLSii",
  "key12": "43QznMPd9xNQTH8C33K36u2px3HHD29KJvcn7G2NxgobxcqqK2SsSqDstzsdbjBcm14dqJJDCNY7mNVGr4jEi2m4",
  "key13": "3nLC4wy7rHnZUDRYCmKWQKRihxdUKFwcfALwYdxKz38JwC2ETL1tG7X6b8nRgLkFwmJq1FtWVd7uLakfvmbsXir5",
  "key14": "3c9zrabqi15JPinpP7fEaynjCTDCd8uajqNZQDKdJkXusrmY9A6fX1HujpRmWFnyp9PDzCWvr2VB4oYgMzCQfpn5",
  "key15": "4PbEfBsn43vZ2ToxGnQDgQKvvVks6TagiBGEYDoXnNEkMSAgDjJehzBee8Mhhjg8miZynLojVVqS8XAGzUND2mno",
  "key16": "3v4bpqe83K5BdUhe8HAzTnZamYiAXzLXv5vCBGfveY5Fkqe5RmP5vPRpposUKCy5xDYnJzvQp1yNKy72nPp58mrk",
  "key17": "59HxDCaeXCh1JMb7ymGv9J2JVTe5qdz3Ta8T7YYL2mjkff1KcSsu7T8YaycGFv6g6g7itkGBPY32fzb5HhSFLeAb",
  "key18": "4LHEnzSfe74uEv1jxc9mZwxs6kyqnebPtGEzjSLYCJKeLaNYUnzh8K6pd5SxJLLnZmQ1HKmHgY8MBDHTW5nPs1tA",
  "key19": "2qAN6pSReSYSKc8fZxHSe4aN1GGQLDjtVRykisPLv3RGZDwrXdhs4nY17EVQX1avrqQ6mSBxsLALD5TcBzeNhpbf",
  "key20": "5ctkfNDcASquyccKoNPuFiajMTnWQufkSpMRdKWzFSQN1QHgGqixC4NihoeSt7XcGPo1HoQDRH7TAxwzQQzrR7qo",
  "key21": "5ey7LnzHAfWX5i1b3VQD76PYFykqNj2qvPRdvJuBNcBFrzAahL3q61z4SFm7taDAnmE87cicrPpyzBsAXi4gFmjs",
  "key22": "5ZWxLwok1UR6YxR5WPMsRBphz6EQbK7UtXFGaj2evr2U9ot8gmmFuHuoy5jLKJyXNBx894X22C6tfxgzbM2WKggy",
  "key23": "4LzqrgvoPxYPfg55rsj5SgB5hYpcg9eXpsbjiGEgEd1oWq3zLe88zsrCxRmuHCeKw2nyDUmwb8qNFEnK6FintAiR",
  "key24": "oRhypZuY6RmBVC1oyahERBGUy1gLn8eexqAkNFGwf9pMGNTHiuUaQwhufTakeuGZPHXgQQLdEQtUNpdVxZQTbFc",
  "key25": "26K83HougJfh1BBXxwhYH48fRLRAmezNhtDqKhE9N7Q7FycN49h8GcZWb242U6mbxAEHFbyQRRZtVhRGB9KYoYfP",
  "key26": "6ctmRStnZa2tge3XeDsC3kFug6sNwvGxbK64xZXFFrt8jg3RbiJ7MakTu4hXryN9TW3EM8DP7QTG7wLdgno1ubw",
  "key27": "AHmad7jkph871bkxZjEV9PpKKZ7YGBoM2YzeSFNdHn6qeozGN5NQBckXypMUcDzbbdVgGDLQ4mYs9m7vY9cjND4",
  "key28": "2DoWhxdEx8LKgAk4Khpu74ojWS4u5MFaQXHBjVTYQ7PGMBFEDFc8LohWpE7U5reTyeGyromNWTFdNWPBuCBSQD9U",
  "key29": "5NJekkSXpejLDAXndGfyZRWXLUR84omnwbxsnLCVwogdoDaLyT1XUEJhh4NLtm6xwVnFfp3WyVSk34zESsAvVMGT",
  "key30": "5wktCDCbkaciJipocRHzPYZFv2cyhmx4emqZj9mRZrBniw186k1MwTjwtGCYcMEkzZdFEPVUwiXFenF6cAbp2eki",
  "key31": "GYBrrAJADgzhtc8QUksq1AbvwP3T8N61ShEFCcPrv8VxZuSanEcVffayE9DhydqTifGuBUaKdwZ2HCuo1jpMJzZ",
  "key32": "r8QU1LaFW7ugok7rodJ29ywTZeSjg3SyyWiyF2HxDtJTd7kh9Xcigg3xjFQm4rNV47814XUSaYjS4qt1vXzAibc",
  "key33": "48JS2djqLX7xEuENjqXcdMWLULGzoFPrGLtVxV93vGRj3e2RQsLfJViyCnVWRdycTVvzdG6kHYXnzdwxLj516ds6",
  "key34": "2GEyc4V9vNqieMonab1sSWYKK7dZPX4Xuw7rAKdHKh3DV7pZztpqDfJfe8ELxDoduSMJnxfBgfLMCvE6uVWbGkH9",
  "key35": "3QMYhVTkmi6o8DscN2oTEv6MvrGm3dWikJCMyyijXot5vMqe2cT4rBFyN2Pmoy6pvF3SsrcMJPJ175XyL7C9mwQ1",
  "key36": "8pncdbe7HoHEb5eeUUui5snk4CYrZbE36kEGs8i75jY8kjZLU2m17JEjJt9rS6ohnmM4nxPdTsJmtXSYsrGXMEp"
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

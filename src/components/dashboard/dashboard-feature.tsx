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
    "4bBVKQCM89doA6vWUoJ369dJ6yvN35TaA8XmdGr47TJbDZ6R5qqQVkkeQW5cbPeBGc9ZRwL5p7Pr2me7MSiJDotV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615YofKnbaEyzeQWciTJwDbJcKVGdr7xUHPc7jFMUvb7e2ma1UcDaHRh2XVf1hxcnP3N8auwV13FX3pyhe7QZw3t",
  "key1": "53UAcn733Wv1MfdtsyBQbxJ1trErJdkt218saXD627mEG63tPPufaiTTpkaysmgUNT78incErwBrUd6wqEVVQe1B",
  "key2": "4zRbR9Vc448rx3EuaFGFme5UvDy1DYnEzSU38daUX1DcyoDavKkVUtQm5iS86aFPuPsfjQQapNUXk5LWQirCkSmq",
  "key3": "2rD4QDr5bGNLrVPZb4pvBR1Dkdk7oBZAHWFbj6br4ojUtDefHxTq2xuhrcBWbLpBdyoYNRW3SaLVdUowwJ1xBita",
  "key4": "Q5tyn4TXDwfabVujJEfPiM5hseXXCLDCSscYahqnzvB4DLHMw8PN7CExzVr6ntvhKdEhBmzSnSM1j4uKBSK7dkj",
  "key5": "5jThEuT9Yc3VvuA8wu2mWH5q67gZKiGqFC2YN1bpgKhVLwjyk2ZyoBYQuBQcNgvJ4VH6mzp1wY5eyJixnJipynqA",
  "key6": "5H4VuyDUdUwqRpwExKPioMLeuAeRRkwHaHkfqgHZHPxfDrqjD9Vy7tZRnxzbia5t12n392az2P41HpqLCDkcHPdf",
  "key7": "4XTkdawgir26pVoeaVEHMeGULA19NJtMUsGFLuLcwK291cJeFZYaGrYdPrA8S2ubr1Hqj2gWn1ZnbCE159Siyr3t",
  "key8": "uetmuJCCzp7xAkUe1q9fWv8WoexWu42HBLdSVQEBNnHSbQFMfTvQqZhSBqjPEg9tedA1scirSZUQW3P8LazXaCS",
  "key9": "2zMXuDds55uNbp5RbEeA6sG5Y1cRMPk7tVoU7mJEETASppE9csZ9Tzdc47emxiL4aGewCyRXRaTmZyVzsUisEqcp",
  "key10": "2kLDdMaLvSpR7RMiJDxoMNFtNXVja4q3P3GJSMGdaJHWCuBg3LvWTwDfW5dt2a3MNj3CAKbcYqrxEMsBc4fQQm5G",
  "key11": "5VUvr8F3bkhmGPz9uzMBm48CFfssdEAKiTmf6nvWdZCRYE1yJTp4ZTB4axebcb6FdzDtQ6DiMgHZ9Kq8iunyF2za",
  "key12": "VVyhUc7ik4kt9L8BFKbHWUdG1YiRjXYfoVyvRd4Jy2cRm6WFVi994LzP8shpbxws6yWwB7sGr2EsTyaBZMYnmMM",
  "key13": "3E6RbH9tFKUck4x5iXKAUA1bspTW9hKbHn3tJMV2i8g8WnR6BYNFgmp3yuyVyFYdeytPzGTqSj5rAnjNBYNBc2JK",
  "key14": "5oZFYBo3mLoPHRcTuZsuCFvejP6sx6ehfeZCViraSyJzRFmE5yJnnobpcdLPPvViMV76fXh7kAq5HqxYKS4wphz9",
  "key15": "4YhRMprH36twv11dYW1H5HyJe4tpdVEUm29PZJbEf1NW5mvSQUJQ58gSvbaxrFU5KvvroHHAkAHBo5MDY8X3xXg7",
  "key16": "25UawUCdEYXvU5Cb15PAWRQjv3Cn3eTYHojDpVXMjRaPFAnpEZsCSRQREiTXeTtX6k8dmDygNaHoCWV6WftuRAom",
  "key17": "3UoP6Gde8bkE5DgD1NoV6paTTWhDX1hKj3NFnjCQnQaULwNJPM69qXeLVCMAgR9RRvg2M6UyQuYMmBrHZu4eV7vp",
  "key18": "4mLkSRwUWrAYvCaU8Qs9hb9raSb7Vw5X8vYEgD5Rvp3jRGNBJhuueimRqpHLzAf3suwfSQBzqAAqptUYfQm3aHU9",
  "key19": "2haWvPqSPzpv62qKJqDxstyQJ1Vse4WDM4DvtqtL5tzSpqvYb7ALttqAwKazyBaQEeVMp3dpLFCLSzQjqr8JgHRx",
  "key20": "5JxEaSA18KvD4f7iqHaV4VMhKJvhGpgbw41aaYr4rebCwLoBn6ay1p6LrakCksaqiuW9smjxFcHMSnjrTjdacpGV",
  "key21": "29F4EbBen58DGXbT3Q81EtWPVBfv77AaAEhBeU7UshYLvA1buWmM96JDfeKP2ibHLhiswS46QWNxBVj9FG6fQuZu",
  "key22": "52eQNrSSSNZenfra4SBmuJq7ya3NhDCXunTzSRimBPBzJfbPmjbZVdJVaBTbPru7ZRACsbQzm2ZyXYfCRkwCqxAE",
  "key23": "2z1phBoVYcKXws3A8mpMS9GEq7tmMqDuTBLR42rtoZD5q61YH6LAghQJj4HXiaCcUXGekCN916xbCFdbJhWMKV2f",
  "key24": "4tTWWHMr2tG9WAGMUbBhf9y6bmU5kYu4PZBuAwPHEfRYEhRwiqbRAwAorMVF7dcAWprdXG2HnzPWktxCeAXVXD8s",
  "key25": "LXFxbi8FheaTqnx4ZD9XHYKEBpDAd82v2f3pj3L6Tkyh3HpNfPMh4NCY9xEMbqvu8JLxsYYpCTj3C4pxhLWbbod",
  "key26": "PPqhENuiWDHCpGiyd1dqntHQCck5zYj7hr7iCvcPUAj5Y7c1LvsoXKw6jWs2oEofNFeCiarKTo7WpVNA377xT3J"
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

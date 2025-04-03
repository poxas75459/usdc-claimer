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
    "2HT35R54VyYf1ZkU1PM24nbXYa65H5L6uNHKHq9rrS7oXwuiZFwxG4LYZ2f1ysrpd7LrrgdmfqNnKTAZfESv66Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtGLb6Upi9wy7X5Wuaf4Wgb8kX3GVmsVH9USzXhPApJLRGhizfpGswVLKX5v1QRq2hsNxstS8uEDKao2khCCSDk",
  "key1": "3WXShAt6FgJD6A76LZP4WmGpbiw2ovoHwBVM4C834eRRFDuP4HfHkXBBHzno7biVNT6Y7N3RAgqKaE71XzabkXTv",
  "key2": "3frRXyHUwJgsT6kXNDp7vxvTwqyL5zD534g6mTv35SmZWj3PptGeBJqEjry3eL5Z371RsDCHKy3DAiWB9GTQmSiz",
  "key3": "5c5Wj3rsK1jVCNsTPy2FwmdaNfWgCh93z6TK4Kis2GhQ1KHTAtNYYzj43sefV8r7v5dtb3NSYVTkW94dCTrW85zW",
  "key4": "3TafGCTRxhvUsos75G7CxANsNCF4crV9kxFY9RUxpUv8omnz1KBzN1xxmmJ1HGTG3zupTTmTioGgx5TREesyFg8D",
  "key5": "2Pn3PWKpbJBy9q42a4HWgNCzmfa9Ab3zTPFigv1LsRrJD6NjNrAd5c5Rdh85MKBRhePQHMHVNAPT27TjwnAbwiQP",
  "key6": "4t71QX1fHsiaUbn5d9VRkYc2qDKtaQ5wfAQGCeMCwEuy1bW9xdJ2YZ4UDky9KGXFq87cQwAaEWMTPUGnzCsSTKft",
  "key7": "2x7EPH8nKAj5oharnt9uiZkzHe8DsBFzG3fAga2bNqezLEHHwCZNhpBSJXbWM1v6gA1Fx1Yv5J8VBDUBmf9Uo51",
  "key8": "2CbmKYyPfAhhRYYT6NiJUfchXCLnJiGAEbHJBKgMnHoThH7An33jyM3khxaYNz45jmLrumjFb3MFrfAvxujD9o2q",
  "key9": "26iosuDN9B4kteG1HEBrWT3jSkKXqXK5sBpn9VDaer6v4XgnngYxNxZuC3YftQ5F3PU14pRKsYvVpWSybKnrshcr",
  "key10": "5bLE76q8WjkqHLgH1uSM5aCmMbTVX99VMbHKky3yvcMmfBpquCT1JK15TttmbV4QiL5Ppn8bMr4KM4B16ajG34tT",
  "key11": "4QYvDLT7zRvQpHjrC8hNYKSxXv6vWq8crmq42SHfkb5kjUsWW6cP5ryY8CntDrLjWRofUfG2o6bK43xXa4SgMV1d",
  "key12": "2i7RBvCAs1WZMEiScaiKdhegNjZaNZMj9hPk1v4RjFbjRwZoLyMDbU16hgT1fDYpVUuQpF9YP9DjJenNjbBJAHv",
  "key13": "2P2RsnExz67JuMPArEX6EFULB1R7xwUp2q14tZmJntF6R2KsPwqTuvBWzAdgeJXBsetVrfwPeLFztkZ8d9hrT15U",
  "key14": "2b5tDXvxNNBCbL8ZxGssMpuzfLcQGUpKnMNBTzV8D2CqkVp5GzVdnTs7WzNSU2YuHKr8763HaGa4fy4SX4SZajHg",
  "key15": "2L1aRp4LSco4BkPKWZcQUdT7mSq4aFvEX9zpPKqqPCBPTQvLNMEVLq82NjS25xgw9YhQ34L65VWGvdPVowBcWgSC",
  "key16": "5RNNoNLYvhwvdcMdAGGXsnbqCaGjZ2Aev8865pPxiGPTagJaHCnz1gobpeEHyN9QfwQyqe1wRuatAnx9xjHvUN7p",
  "key17": "4U6tLua1Nha32TtKWY1wP34A36Hinp5T6iVtAYkwSC1aXiySSk6Ga4Dgy3akGE5RYx8vmjryERSMGTMCk8uTLm77",
  "key18": "3Pse1dKXoXQbiBPjsh5iLFqxqwb44BdndCtoZfy4BKrHoseeE6RRTw3aJ4njtzuJiMNYnUjBwmpLnxSeP7HDSPiR",
  "key19": "3bhmXz3YRVehNzCzf5WWCqfxnPBTVuQ2P1NkSh2wTUSf8zuzsLRqfE25J1jXNuAGhRVA1tSi5k3pnWXzWSi6hGR8",
  "key20": "3wKk3x7iLXsM6D4wgtyiuoU8rbtsdTmHQNRp7EQg2eLgMyoLXSAZ8ThBd7SVAA5Tdpkj2T1ZKzriGiuADPEg2vgA",
  "key21": "5d5698ttNF95dFigfbMURo1yPMUgpJCVYAVGG7pQzJKzwSNeZ5fSXku1Zkc9M5GSkC8DJoxk3peEA23iVzLhcdJJ",
  "key22": "VqtyDhtnR7U2GP7pZyB7QL3JAkxgNcD2ZfSCXUWo8hkm9irAmVm4P86cdGMjb6HWkgDtHLsLussNVLCaWdEdeFc",
  "key23": "5YRuNKPVUZUXbU5kQ6vL4VRnwksrBWdJtzmKhn4cdFTjz5SHKX62FKKGm58N7iN7i2v8zMNkGcrxChEHnFmrhK4Y",
  "key24": "4nzatRM9hv1udhmZw1bdL4w7b6HneqTi6CXvi3MAr2z9CAEEo4jQV4Bwwqt9PTodvsnqeDHDF8gqs7rY3AUCqpAj",
  "key25": "4TgS3hKBBE8PquXDkh75dXcVTnkfdwJhMvD8fxWFmwTbG5uVVH6pt59DAfqW71LPjkJrxBXWPaGaXWSiCW3s2p33",
  "key26": "5SFkZPCazvatRdPFNN6FsBLdVGy9BbjRgwq8wePw3jn9nQ8iXkBfscsDy1aNEjx5e9Y1eXZTxdtoGtmXhAFK4Ca",
  "key27": "5xuEf27sp6m2Am2RHJS8UtWUCztsrRbCzbJNJJUeAwVmoffc6CBUVLVt6GqrDfmAQDrCqJz9uFEyjZYLwouDNRmT",
  "key28": "3QX1yKbqe6p382hGMp64z3BxSP4FhwxurX4yj2ehHB3Q2bftv1J2imHDCjNKogrUp1gEQ59Zz8Jo3g8f2Dysy1Ha",
  "key29": "4VMuSfwFfMSzPZgrb11e6T5kKGbpwyAsexa4bPoYgx7ts7R4MPK2bvCNnYduvjVxL4eZC4UwrJHFxenCV1AYRhC9"
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

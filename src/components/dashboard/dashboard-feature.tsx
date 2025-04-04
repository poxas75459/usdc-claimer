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
    "4oNp96yiD228tqTq77H3tv3a1P1YeWEbj8knWgZeSBzxBSY5wJqFfhJy55tJjeKQ2ewLWb2QGDNyZWQcnYXn3J4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NacdGVfRAx4Z3P6BNZ56NN7eiwv1PEc3VDgqmJxH2HdFddPVkGyGkKyrZMJ2t2nrpcUSY6zZkcZb3P4JwRwkBnh",
  "key1": "4rNBoQMBBTqDDuUZ38Tb1CNdhBhM1xRWenXrr97EeH3UbR83W5yrsczsZvPBSxhMPStqGhS9REZtstbigApHCkZS",
  "key2": "4w4uEHDXw4hFyu9HFVGywhhrH9xz1kFMEDA581oStCdpMtYRY4U36KaDMA5BoGaMxjSpunrfbFjjPTukz27VQc4P",
  "key3": "3XFzEKqznqB2r89CTYHAqH9qT3WhDytFW7Vj9Ke1rBS5EitqwY6u9GNGxyR68FxXgkHCnWycdUh3ZJixtNE3w5ys",
  "key4": "3tm1RKW8zFd3zxvFu5k5mrE6DLWyMACshkamAxEgxwzBFPABtamdmYoBoe9TjRr8QGrvsKnYvFU5t4k7sck5Lme3",
  "key5": "LQGPjqrFsXZC3HzDHqaLy781EGy2qfk3EvegrSZaxdobGj8bLfFTY3k8WEAMoMp3A9xnayvXWrXhkYRWfK4RqZR",
  "key6": "3yGPEpKMjH5cbUNV3cmsvcj2KwXDGb2WBQFhN1JBf9Cr7quy2DUjFvG7vo7Wh71ZK8XnHjo3Qnqca7Xh3iQo3VVq",
  "key7": "55vyBBbGGke38Cewk562Z1q1tZuTx2GZPzrF3c7tAdmX7axoqsr4p9SPFBDHPhZSEuMDhTPwgZRi83N8hDD6K2Vy",
  "key8": "25MHysVYLfrna9JNPcpw7ZvxTdUXAM3rLh8pyXY1oh3Adv96JzUMS7U8oJeof6NceufuTb59GYMVnT16AzmbYWj5",
  "key9": "3Td6TBsDWLK3ig9oFdV5bENJKSRPNdhnUpcNTCTBA1nAYggJyaNcUSGVYZM9gjspQDkRdysNCy6fvUgHBS6au3eu",
  "key10": "287x9edeUzGp3RtD9e5CY4grYCeyuS3SUrQXMoEiaHkf39fegYfLzpBuSLvCBpR3VKmuhdig3yfuLcuC2aSXzkSH",
  "key11": "3xg39YFG3EgoPrqMmVU1YkJDdnonbbp7BJjawMYG6dgw6GKSAMFnXCnG25SnrkAXPfFm6iBKumeGrurmsrRwxSnn",
  "key12": "4Yw1p9GETdHVuiF3vhgPh6V1hidYa3W68YMQQ1LCfRHPG4EezndPp9k8ddZ53U6XFsx7eKCKzJAhhjBkGnsgVxWd",
  "key13": "3Kp25ZZuuNezFkhP1Z13t5o9fVdQMfRg4PnwxwYPBJmRqWnBkb4Juay8DoUfJuqEWfLaE1Je6g7yRwjknKEBQ5vx",
  "key14": "5yFHJ9uDZe37KgHuB3vkJtp3KPPwsVMBZS7kq6yUJmwc5v7xiFZbL8DgyvH5oCTXgc8mLXyFRimBHqJMMuQDE5QR",
  "key15": "4LqxwGAGyPJWtr4PyJ4dVmsb6ySfRooVu1XoLm4p3cA7LeFDqUcSRFyGfyvi1cWFPGPrXuvoDBwigv8XJJ8mD3pT",
  "key16": "2HV2sVj7LT8gQeb31b9bktx3ppKMDnSy5GzFJn5d9hD6gjrZHMnNXgBdUPN1qkN94GkRiAJxADknweMnoD3ZrmXL",
  "key17": "5YGSPtufWjmgXinDWGCR2RVY9gD2VMmriFBWFbsLkhZM2uk2grkHa73wCSj14dB2ax3bj15Unyv6usZegFDvUYGp",
  "key18": "4KKLcHVukWGJbP7D7yZb6N2wm2TKQCB3RVXvHcqFBKqQP5Lop4iSww6PS6vxYK3LeKQzZzt5VHiHiXomcub3sujZ",
  "key19": "4aR1Sj7JJzkUn5wkG5WRZEGEG97pSeLVBzCNVHRtYdQDDrbBvjjVFsZiBDuqUeNjf6EBF1r4LpwsFJTFjpXfFB69",
  "key20": "536Ds2ap16hp9EmYRofpAHSPFAxSBTguQXi2RQ1w8K6GgGFFFhu7PyZoAhSU2D1KJx3Nrz7EUPcBXXrngXWaRvZc",
  "key21": "5tP5GQLWG9pUGx18gJ7Uhf7XAQUaM792wrj2zJPoHADpp9mvq9xHVrGcrfmbAbS5aoNWf34RsET4tAXCVEmoPmYH",
  "key22": "2auzN1nibFBdBq9Gq2Vw9zBcoZdQGmDYzA8e6zJpNZf5FhXWUe2UPP6k2spzahFATuZwXEDJTiR89AXxcEZ8Hzy5",
  "key23": "2XdYDqRYAraevuDNoByFeFLzRjHWnNvmeVvqyRYDMnt1rcfok5H3bVf8SQXmbN9NKSh7Qqpb65QZjZwbyKBd9Gt9",
  "key24": "45dayGmf2Jxo6zax6FD6DDidqXNQueYHEz2awu1VCGGkWw4FjgBy3s9be3jLhfs8YnjMrzcEZBYXbZyqxdg1U6i1",
  "key25": "39AQAxVRVgbeNQsyaqfRno7Cm8NmCZun4163ek9w1PdmTBvmhWg7UxkwaGuRZ4WUXbHBgpzFUatZKo1gBxVqvmk7"
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

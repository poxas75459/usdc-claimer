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
    "55UiiL68Bud5apJFsxBKPb4yuTAQNJZ1dkULmCFAGnTQHBm2HpSvRssAF4fpZbDsd2RejuATUgvXgJS1HtiD7krY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A93fyiE3C1YoL6UYc7hNe7fj1VSX5ZwbBCg6sjFj7A2pi1BwF2WzyfhwmZ1Zo2HnpayDdxi6dbvJZe9wqfbN7E8",
  "key1": "4dy44PSQ41ZLzyVUBu2k8WbE3QXmSGHm5Pa5HGDAWgqh3skLQr8PWXBx3G1WQcZE7uvWjsH4CojSGWvwgMD5Agrt",
  "key2": "4iAJAX5euo7sTX5GtNWA39WWpPck96ARVJf6kYzvd8VjCHxjkpSSb8oazWLRCaDcKvWif98JNnSqyUv8zwneHA8Q",
  "key3": "3gEYzxep8esbyqqNKVRgk6zpb34DH4PdcR5bvPiuYcZt9vKp7sCqvMG4rzycA4qnScdFYU33dUC9yPrz2AWeW3Dc",
  "key4": "5jkhao74dUT1TkS9hfQHUyjBKYy9LwWPJkPpis93euk548QtWxgv6knBDdyaScVKebjACy4ioUT82EENMkXF2GL7",
  "key5": "24VffeY2WtcYpStVXzi6Aer5xxwjpJKC18SdDuFzd2BS1YxgseWx2GuJ3VDHxUcpzczEzyLn1MRdteY8HbMi4JdN",
  "key6": "Vo4xvTUKbqJ3XLrngo7DbBuXeHXbfSRBzqSMcYhp5mEczscV2MTW53m76Tzav5TztuQxDXfouZkGqN4ieBrEURB",
  "key7": "2rDUGvJmpnBQkNfJUsuAvRDeag86XsQCojf84NWEFNBcdVzQUTcvQ4tiYiXu5fZWhPGDNPZ2wsJ84X4oKfNLmfzU",
  "key8": "3zADWhtToCYxNviFMkivw6fsy5DdCkWSJYyZJje7T2eZKoThTQNoJiDVAKzokbhGqbshj1jau74KUC98Z6EunzxJ",
  "key9": "3aay1kNbAg9CMkrsxYZ2oFPyKsYDaYnizKbCJonbzYb77x5zGDSxbshREy1pkVUZRWLpeJtZkYp4Yrbpp7axmhVx",
  "key10": "59HWizTdR3mjUeY3NuJstf66BkT3wnumQoRHvWc5UfGWWcQdY6JkuxhyGVCb2qUXjtUpELy9Vimu5VTjsJxqC8SS",
  "key11": "5FLx7qPL5YRWb282isUsdTz3bFsbybFUvdZhCTyGa5YFvSXSPeAox2s1Gr17TumzEkarwwVAwRct5yXE79jKptH3",
  "key12": "2xu21o5ukbZLa9ZCWc15jxmej4ATErXfr2ztK281vsmrVduyau2PS3MDnivB3ocCfYtheYnv8LmYN8zoPZuWu1L3",
  "key13": "Q5sRKx3Y3eShK2sHnYQRgaXV3BAtgLTniuLdoDoPfrZEFWQheFK5CBHvx85k3S1Z38pR3MoXacaz9S8WHW8KHgv",
  "key14": "3acbUo1CrjkcTcU5nWtHxnMJvWZkAjdckUrGdvHCPCMD3EFxV21VmUS9Wy1Hrg9fVXi4sUW287Ezccq4atv3mDsc",
  "key15": "3tLTknhNUpwgHh459MfRGMamphtzt4cAv6k9F7qiqgboFYdoh6CKzNppt1bKrya8BMpymyS3nyrhcwTwDQ8ZUzWw",
  "key16": "47pzbg6kphZgtaxnwW7jbbx2F977SonuDho9iJf73bhSYmBBKPdQzwa5WDrXy75Qx1TKZmyecmVdZ3mvAyoNgr86",
  "key17": "55rJYjMcgxBiYxomESUyaegZrdEZbNoi5jnvaKEL3UVUrnZj5naugvL9Xif1HENrN394xfNNyBLwJGaD76JUMwng",
  "key18": "XzYdW12nvmbSejMt5vR2WaF4F2vtCA7uYSzFG5TdX3vNovAf8N3qzKnMgaiBX8j8LjQmzCf3fCDDWkuccfprY7n",
  "key19": "67JhBXmDbjS94NG7aUoTpWLhABKjjiczKNdWPGfgQk1oz3tXBhoWvY7A1k2f4gStRaZF4X2w4FMiMGn7PRXXjHsb",
  "key20": "2vhnCPczpopqrjpq49gPyX5h6xisQMK6GVQerN8L4xYMMAWz7KhPMPfw3MYMK6bzRmVs5AryV5Mv7pe1Cnb1Jryd",
  "key21": "26aPT1YQM1e4uXTTYVHBUV3MHpfgTwSiZknjr5FAecuwxKMTD1wDGovnxNrxEoW3aGBSJPGNean1pYX8ht1uUZLu",
  "key22": "3wjr9ut5mQLStHxhLYjwWeEVCTHsUc5spBtStbtv293zivJZcnLpfuwpmeLwg82c1pDWErP4YRrrUxvLQ6BQnTFb",
  "key23": "4DkNizksZXBhyfGEJpJ5m2udqPXFBHmP9g9SpWZ2azbjKTzESDTszeMTcM3YLg3AV7PFocDe4uJ8Zf8ab9y9NrfW",
  "key24": "qzjMoMrHxjo73LoAYaZUXh4ZeAmNn7VTTkDvNfKMqNtu1xBivXjK42aW16rXstfK55ycjuuhWyQeYhxpkxR9xVV",
  "key25": "3PTGnAbmecvgfuPumqd66kr8NatiD8YFtwJbY3LLtDod1NCbg57TW8AHz1vp2Dke8zFJaVXX1CY2fCtFmk6uqrET",
  "key26": "55Dv3zJRm9g1uGCKXuPHHy3MKB2btKBmCFsZ72UxtGJeFeZgTcb3st1JvQKi7C7xaUHLi6riLPLiadNGRer3AXoA"
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

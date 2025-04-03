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
    "4wkQMm1ZHEw2fMm4SDFxttpYh4aAzuvKUgPeYYzZHsQcLpmqGTENoHxjiurKgh4KEGYsqFLNFdxiaxdbNzkvDkwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PMYG5dWhN2bwzTYghHJDrVX8nTk3ucvCXXgwn94EsbAEC3N4iEYRwnHeo9LvXTQsgP235nAi9m9YvXwVN8pQ7nX",
  "key1": "3A4aMPEEPhZBDLPdgUFTYmfqkxXV6j7XAGfCspasxvuL5A7qkXvW4u9eyhqCxzMbAJhgDgdEKvnGsKEmRBYwtETC",
  "key2": "HhfxHYuVqwcf7KsMJt4Vmx5p9C3kzw9U9osp3vjb5aM63dLyVQi4wk1MX444AawfE4AhmwZx4PhHhQ3Q5n3jopT",
  "key3": "2BMktAAJbZh618iKqUc7HneubiUTzYEogYJPJDNRkp2cT7unFat81khw5TXhB2PniyKN618nhj5SMzxC3HWTCohB",
  "key4": "3PAeaN6sAWPwvBLrUjPWenjeFEiatBCQqa8mesZy95xrRbRzLcP3jcNVEWgeXproz5bEaofezAE6vRdUochdNFT7",
  "key5": "5X5zuVAgYUngL6TsM34CJdZePPWpSp4mhg21A9sUz4zHyb34daAmBAMWcMrgDdUgvKgH3pyjxr4GdnsYnhZ2ivnn",
  "key6": "4ku9vHWi1v2kithmePyy6N6LU9SDH8tSNLch6dSuXwER2YwFvQ1Jy1DAjTXde92RwgSkNZC4FF21AX2TAkMi26L3",
  "key7": "5GzJj5PzASnSApFHxLZk2AVCsBrUQRMPn7vCtp3HStWpRqjjmRedRQnvh4Xt1y966RWFo4YkYNeZwmiNUG4hq93c",
  "key8": "4gUYTZbo8nCWzDS1cyF4BNRfkLePCxgQRsojRFCytcLxFAN6fZ7v8bb5z8x9d4ZwGtUpWHZ35qdeN5iwAf7tWgUv",
  "key9": "3NjwaV1CgmHb1nr7cMnczvwobwxffA3fAeAQR8tkqwcq6CrtRxwaUpkHah4dgfP6TNEiVXZL6K3vT3yLByZV2VWu",
  "key10": "VbY3aaSoLuGSnGDwo9MUnvEY4eKqgGEo8HUcd9QuLr34WoE9Wrs7NmfL2agqqqA6Mwn3kLPPZh63CdHwwC85ALE",
  "key11": "25mcSwCJtWxsoYLUzhBzJK6fQxkAVsRFB7PVXkD55LzBtQoqrLtqywoUmAQ7eTLgqLDTnVT3iVdbVAFgjsaj2qXA",
  "key12": "5aUjCDevRC1zVNjuziTBJ8VekxED9md467uxVX8NoVLKaR4SFEMCkWpwjWvrscokzpos3LaYeBqgdNTxbb2nAUCr",
  "key13": "5mJqjKFkywfY9EWzRJEpvKB6Tnsh6eBegwXwQYdJUo9GgTGg7dtniiNvtrxUZphp8TmXz4NE6CEhWsohgFQufvyi",
  "key14": "3LtTRwVfKdwBoaowyouPGGWfqKjAERMKyHcGoSdXBoWuyquj9bRpxERA65PQzLiPz2yfbrptnL9GaJ1K5RFSvCxk",
  "key15": "agveVvmcovHf7JzZGXHBqGXtZ6pFeeMgCJxytaKEMUK74nEHkXyVFrjXbDkuMSZDEAqJpUMTnooiitengKwdfme",
  "key16": "5EKWPpbtFjqYWwvm91KiDtwqZfjZgpk1asDa3EfXPUnUq8BpTJj4mjjKbkDwj1ayinGW2Nwae7Y111swMGy5qoRj",
  "key17": "4PLRqP1kksVct2PumWQfsyeDBvf74k3dtergPccTbHuVw5GDGQKYZZeD35DESSmnnapiqiWG7WRzCyMHVY5wdhgS",
  "key18": "xKq1Y7qmnuXLemF8QLno3odrfh9ifJ41UakY5RpysT6h5TmcaoKSJaYwFDby5jnLqorD9Ti5eoTuYr4Y2aaWkT6",
  "key19": "4pdGZzBDvTrpPPG5HZAMq9smahBhEvfCuuvRSxaadWjpgiVPcgSGXLcRLgX639Lon6XT6xa8wex5RGePuNSNAKRg",
  "key20": "5QoWyMxN2km9kwZiCspUWEaEJEfUvEQfeCKX6EoZTkjosJ2hVoq2baSyync5bzzyNHTMZDmB949WKXXhPAXso1v4",
  "key21": "4ndyWh5QUWVVSXUgytVf3BkJwCXTYhWi7NjQYyf3EpgtEe4NMC9WugnoMzCTavwViDSu6SeGXVPZjcmLKrHySSWz",
  "key22": "5YXuJRjx2H5tWka4ux2NBiPZLrsgydKq37p5Tty89UwNqhkesMp7Sd5UCeVTdEiQjfnpFwBY9AjMaXpppMgdzsCY",
  "key23": "2WzmwrgwNhwM3Anp4ZypARSya6vpQ8nTniNSqXxXCHJACbXuR4LJWrNumWkWuWmAmYp4BZzPeWfh29AnyCiXLcUq",
  "key24": "2XkZtWCJJECdsuKiUotbKHjzdp13NuvkgDPsBVJaVe2icA9NtFunjHwBq6Sen7EuQwiNgkDppgezs6gFjfKDXsh4",
  "key25": "uqhfSiKWeoyDQjKpLKxDevx977XtuJ4iwcXNfxZcgy2zcfCpMggaGpCm9eCHXwZoAoQCr74k9XWxNFxChujJxWC",
  "key26": "65hvoFEoWmRUQbCNgFUXpxow1jAu2vzXVtzkvTAzHLY92ea7QxM78USZQDePTQRM1QBrp6gz9aVwy8PSD5isGRyz",
  "key27": "4odervaqjhXPJNVbgvhByLQ5J71bjPwpAZwECXkgTkgL1ihvaFmyo5q72A65Gxfo6RA9gEgU1vxzRT2ufvppH52J",
  "key28": "5oESUfQVmrphnq2Vr933NEoyEQhCwcm2ijxGfQyuhyLquWvV5a9sayS1WxEM2C7RW2u9bnBjHdGQ8TWic7E99LEa"
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

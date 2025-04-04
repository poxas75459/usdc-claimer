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
    "2BW9BgXGZyUhUiiNBXM15nuuPsgJfumPphzn9YEyFAEs6rPpiwWLWoACP7BzmJtemwBH8yB6LPVp3mcTW63w7CyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qg3VkN8YFmLr4Ww8crjMXUiquT6hqyndJZ4WkbkPogi27n32LZMdvc428eex7YCsD3no1rAEYxZ7KCPa92XUKP",
  "key1": "6FGDSbQqgvEHnDYG26ewsjr9zWyTgSS1W53NVMybnWpzHqVsYKC8SvxZf4YhnoL2eeXgZUJx1tPhUGTZvWcoc7V",
  "key2": "5uhDEkzb9MVaBQMuFkGZjxCqyKXeoedcQTprkLnS5Yg3rUX2M5qKpcABTFtDUT1y1b3wMo3MFfjujUTDnBuz66zT",
  "key3": "5eCAocDyXqL1QtFUZv6Bcb6m3KcegoQt763g35D8FvyjirdWo3LA3pYPi19hjMLCPkZsYBdsdcZWVANik9QwZqg2",
  "key4": "3FXpm1gDCJjoPRMSUWFfy7gDoJdHe41WMBo9SuegF5jHWe7KYpQjAWhe2JG7aAmtrK6BhjqTx2WM4YVvayAM67gp",
  "key5": "HuBUYd7Sd4NZ6dqKqskmDwi7ox3rg4mgeN7aywWQ23VdHbzL57UuaFRWLYMbVxt4zcDj7eXWFztnXmtxEHzFgV7",
  "key6": "5Pm4j3QzkTS3uqGyPw49rbXACMwE6WM6xj3QyW3ZWV8TF7B7eZg11RRMryN86h6dvfVhBbiE7DGc2puc6EDaRFYd",
  "key7": "45EYRyJW1pWDqScVyksPKYxWJYhTM4e64ang2sJYHXktJjJzVauTeN84cZhm3vfb48fvqrQTfrz6fgkaEKpm82g5",
  "key8": "FCoZT8r8BrnPcDGia1bnkDsHRxXzqVp8P9r29D88A178beL6RBZJBN8aqZ9J4eQ1RXs4mDadbdTWnCsqUBUGhMg",
  "key9": "5kdmsSx7Ek2UMUvxHQt8bN4Seqdf2bHQS9UGK5r9DFShh164VXSkfLqpuHyT5a4uGEySUz3GrEqyFAeRkCDhc7zM",
  "key10": "3RLT7QJ2drhpRBcRFLJKCbJhnqupNQiKtbRCg2s9Py7U43HFwgFsVe72XWUJnQFSLwzGJSUDABTsdAN4u8oZp1wC",
  "key11": "MhGikY5S6VuUSxB1BzSjincEGn6KBXN6iCKp3V3PoHe5cAv3JSPfedrd5Ew1tZKjyP2MqydPfqgCiUsZBJ2mFN7",
  "key12": "4TxSdiFDA3dZnvv4agYydLJ7Efc5SK5x17a74fv1HtcurpSpVhz6xytL3QvhYZkVievvfUcKxKCbsinc3TiB5FYX",
  "key13": "Cwu1WEf8zXTybZ64ksr2wmnEsQxaYKcCVKVj8e6XBGeT2mtHgDUMjFVtVpYtzERxSJhNjkSzrMt5EFchQikWfij",
  "key14": "5xCd3rrefLC6zLaxj22c4XskqvAr6KTbKtenDkh2UXdDTTU5aThJKwPND4hcZtSRjL8wYYCdLN6F9wMceAbMjyAa",
  "key15": "24MF5VLNPmkxRBi9xWYFiLwQRBisFseXW173NWL7UiTtoPD54auyS8zgDhWgD9XfCxQx7SbVNnBN4uW798mWbuG3",
  "key16": "4aen3ucNRxHmsSyx3Key5MwZQL6P94Kc2srtmK4AaWZK2H41JhcVjH2Ez23WWmBd5xXYiAQgWq9R96bZYBL4gZXR",
  "key17": "2oNs3q2EukL8Agej66bmcWV1jSCvPyvYW2ywaphC1mkbi9e5zxm7CS7MxF5iMYLmjEWPsRQjjxYWhZwWyH2XG9th",
  "key18": "8oTeSBnjh3mYB1mXdPD5F4KtYn6VqGVMaWwpVEKoGrSMSXRFuELKDe8NW92bE1MAVYjetVhzrB77Au73gK2pSHq",
  "key19": "4CF6cZPB8pPZsy9RaCK1NuUX1EgMS8Pf7wF157jbYNHjkBMKe7tXph7qaZx19SkAkVtvMkTs3crw3iVUJAAbv9D4",
  "key20": "237b3Vn2GfBcEd4TPrRCGximacnMKmKnm1oa24QQK3f21Qh2uDDFb8NZCk3YXgcc97Sxp3GwdfqDoRUkaZSL1wDN",
  "key21": "2wPc7HTnjQCcS2vbjAcBKH5YLSQdTvVZB4odxD55f8GQr3EeYVZkdzcon5b3CaWVXrzrrmTx1Tm3ZTAjyT6vBzWA",
  "key22": "5Z5oRhXaERiRXiDbxcLbamqAES2AzZadBeHQwxKJwhYFVYifJsdoNxnpg7Hzaok9P54CjTM67EuX2eQdDEU35RYB",
  "key23": "4n7LBJhzkC5gij2BxBk3SayyUSh2i8niWzQuntAuAQp1owiNYEKp5k5NZ3w7NfwaCkKQxkPpQdz8x7TpCGCf4CNm",
  "key24": "3jxYigWRxKh41XLiY2cgxYjTMNmeqUyAMMzvFRDXCDWYNujuzFzuYwYZ8KdxX8wLpY7fFq5VBWm6rT1ruTSTmk7T",
  "key25": "7SvKZibeCvYeqez46MBLLWGpVPyrigdtwWJJ9KtzdqBREUWiD97wGoGd59TBxg5YrYpjZiVdyC8xSnRehAxjQiZ",
  "key26": "3xpSYGPxhLx3taMeSiBHZf6ofWvnWk5s9JRjTdQvNBbHqvNBMtZKipa8duby5DHzTeCEiraLWqDT9q8QPjrit8g5",
  "key27": "3Ta8EGNYvPcZPCpEUabnNtPi7gCQBpZfxLJxdbZ2TWsCGtArJt2McrpMGDgpEBfTRoHRnKbujz7vQmTwajnntH6a",
  "key28": "435Q6LSVVEMnT7oMReLbPFdfzygntdUsoJ6TXWPT9bHnarTR975XPLpQmwxJ2Ts3sadQ8dzPirY3ksi8VyREKLjz",
  "key29": "4QaYodGfs5KrEgdGHkthZLXt9MWeKqqGezPX9UXhnRaS38eDCxEcUjZuZCiv38u9EEBqGbbHqEZhchWSyMBkgH3Q",
  "key30": "Dcz8eGPCXVquFJpVJtaFSSJdbf4TYfxQMRXh1kCgrPxGwpyeX52BphtEktoBfiUnbksMPpTUJ6ZW4oXRCJSwTfM",
  "key31": "3a1uU3vmJyX8AGA4AeEc1NwsEiYyfhrgPjtu9J6AN9ofZU7Cei2Vg989FJi37oL9hznbaVvUW4j9pHd98JD4unMF",
  "key32": "4GkTSzbPdhw2P5MUKAHEJhrSFzx82qf7XUZm8VKd8wKR5DNJEVpSz3TqxbdEK5dxi8RWJCkq8abvgmBc7F3cKY6Q"
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

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
    "2dQHN8UFmFChweTVYFSG3VWiNxbkQqUSkmHUMSGPxUUSu18hotAu22wJLAijKd14iDZViTAKgSroP9ncsLXzLDNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpHVbY31pKHyjzDjEM5SDwbmtPM3Vk6FG1V6NNs8wy5SEvvAhYdBRteyvUAchS8FKgghJKaoHtvV1qMvu6s7AZA",
  "key1": "3VJpoqFpawpYCZLfK2GveFfgY1hx1GpAqZB6pEYjLizWEYSRucvsFhfSWq4xXWCQ3kyQRrJgpBKVir7wjR93jT3E",
  "key2": "GckcqZurfJtdNtk4PBn2iUYEUsuZuLP8aaxnH9bvLU5DFAnBXMATprarzReSF28QQVoY8wKvGBK9pwEdrBRWjJD",
  "key3": "NUWEWRpu3reVL7fg3hLzShcPhmpifJYfLK6ejH576xqGJnBnhcdocREo166kdL8ZpxgoqrcytaCt5vTwPvFJ5HV",
  "key4": "3oW4AiqX3wLZkTSvbn2QSxEXQy1MqH6XMKNHL1hS7CFfmrccDA6wqvPnR3RsfHvX9Wupwyyh3sjN8NWcpUKA6ySU",
  "key5": "2JEiG5zKCpk3o7BtT6xX9hhDvKW467pqqJmm7mue5r2QQ8GDvn4NDojqkSvbBKb7cp9zfxDr25C9K6nkkKde14Kd",
  "key6": "61mnRMTKTfeYhBPchP95g46b8qsWcpWZzdds1YXVZt83zJDgpfbShN47NBPmS5Ls5baGKmFatdGw1wuAHDfpvFpB",
  "key7": "4yN8HuUrR79zinE2mUa1UxiMGFecHxPSzWZrK9PfaLMBAxWRwBtAJ6zpKvcqZNok4LTyJjrjBvEaDoiLpVbhyVYe",
  "key8": "4zw5Dvdv2otZqZn1RAmAtHoYZ1asCyyqTb1hm5i1LVZKkZgKJHsTWzf9J3XvqDWXUdize5dvguxkLf3c9epozsup",
  "key9": "5nvYLRe2rjV2K88ZeL6bJynuTqwtXr1Sd42aev4enNhGezQYDbMoyg6N9E5RxjKiUwrZdXxswjgAHyAAi3UG16KQ",
  "key10": "3rivgtF3vimksvLWM5929MMTwEhkVRh328FdL2QhDMsbtqQ2G1VaySuh75B612zodtawdBisKabGUWgp81W4Eot6",
  "key11": "5g2xFVPQkmnJQynWwJhq4urQzdV9E7Usk34QCRqAuFVZxvQNQpKqiR5vkw72U9ThdNuxYJcy4S7JEAPre7sBnh8e",
  "key12": "42QHfbt2U1vS8sQ9ELChkQfyKeRqqbWA7giKxHb7ExnfNAra3ejoHTy51hahsdFwJxBLL8R4XFVzGVJFvmvbkTb4",
  "key13": "2wHqSXAYd7CCzPSSyDbyoS4y2Aaai34T78Dp5hXtxBRgcfysMJ8AeQ1KqLNH73RUA7oE2GRKmUBDRHycJjkxWbj7",
  "key14": "46V7XzEztnaeD2x5zsNgKTXU1UjxZRgemJWnS5YBk69X23hLT5HiGnkaoVaWXo2WKoPkHoUFsC9VRz12YHxXno2Q",
  "key15": "4A3ZK2usEwXjhRNVix7YbL2AzXBZnQXmx55PhBDgeEsw3duZh8HvYHmus5FqfpqyQq4v14AsWqHb2W2oEuwJnzda",
  "key16": "5a1CeHTrdDw9of5uT8yAZojGVKYSoStm1R1cVJTnGmabiAdLc868FdjkbWa1Wk5t8kEiNWUFQr3M37UgcbKas64N",
  "key17": "5n9g6b1XB95NoboR1UY9wypvZDMVyTUnbtT66YEkN6YjyNS822PX3taDDLmFBXiWeY2S6NYJ6R4XaG1iYw3dVFUa",
  "key18": "4rpZUgnfHAUs4ihvzUM77NP5oWqdWH4LvvhJoskYmP33phb7jKarLUT3ide5MwdnhKLuCiwDBJwZ92qXfuqtfZWB",
  "key19": "4t99HvwrPM2BCsHkuMxFPRt889jh94gR75i2bM1Nzgir4tpHpQLWpb3VQufmwQc4gdDTA8XnKyjnPqRZCqDZA2mx",
  "key20": "5Lmr1DgVNCMJ9cKWJ1FWi6jh7cNdLBKGmmP7X2SGvTVjEctXRT1X2Ufzocky6Siw4YyxyJxcT6horUz6ZRHqtyTs",
  "key21": "4ZFmBNj3fiyGKD1gLRRy6Qv8cudq4J1LPUnSmx8XqEy86ESGRCo1b4NuGiQ2J8iu8LsxQwxp1HFQN6MQZ1uzZ3Tc",
  "key22": "2it5GjXCJk5ZcQa4UiA2styNHAzGrKtSWZWgjiUNSo2ncSvbdVDZryVcDbqa2AXzAF3zCZtStCGku1dbtKYCvxs8",
  "key23": "2vvNxPX7c9FZnEDeYiVJt9WniC5jsdCg4VCMJxLvEgx45DxQz7mR6ZjiwcEQtwmkjEpsFg8nEi6o1aazsCxQmREE",
  "key24": "39mYHsf66YV52J3pC6tuTgUk4UUXbs3eZfUGfY3A3Sm2g5SnJyXvyiyV4CFu3nBSird6T3fezSBvqMRMC75N42Wd",
  "key25": "3MsBvsnKTyor7ucbn124MHYJjWv4TAi77rxJ9GymR65NJPFzRcMxHGY9gMC8K87UsDHALA7icgwg7MudnUBVMB1K",
  "key26": "5XC2A4HEbmE2fjwGZbUn5ThDCL8Z6daqmrHBoJ5KncP5MDWhM6sXrpfXPRTG1WEEezCXANVHtr5xgnxV6d446G8t",
  "key27": "4BmoL5vJHhdADGyW4QPKP9FBswiL8eD2RLbzq1zSPykp2HZNGJHJukPM56QtDppsHTMosuynjUqrqXcaE6sm4Epj",
  "key28": "5hHgkTsYuedmVT6R9MqJfbKcQPvzbq3omqVnMsCoV8Ekg6C1mPpMksQuYrwNJGT8pxerBf71Xgmj6SffwioVw4sY"
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

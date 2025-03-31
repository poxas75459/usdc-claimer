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
    "4cQRZSY8cAt6X48gHj48UtidqbZATpyvbUmyKEs66DyJpkbMV5X1qAr8TjVnKhKk9exq1vYWfEjQHBBsi22DDqxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bs7wBnLfANucJevkNQFhx1cwsApDShK7sdTDqV11m9aKR7PKtDT6XZ2bgUg4S48mTNT4yW3eJ1vRwGnhG8pgJ88",
  "key1": "2iLZ3SHpXoiXiJKgQuTvPQ4xTwWTtYa4Z9jGUsBLxUJRj4JCiwci6KxmtWjgwcNyiUu6T5tcwWCgGTqEXxQ5aUfy",
  "key2": "5CsBWKB2ieN9D4bfhBTTN9NeacfPHCF8perVRba1TZanTQwjx3u6V1jyjy4WbvvD9nKZ6FJ4Tn1E2eqqTaMtVv8K",
  "key3": "3uZTwTwyRQq3onLfGJtdMsdnr2qW6zEWd78vNAVdcraGHHq4r4WfaXPv2Kugsii241U7jN3jfgSPMs8Uv21HSd7f",
  "key4": "e6DFzCDVwQ8Jz424ayNKk6DSyTZXVLpBjdmguNRG7FSzniuqPyWNkxh1zc4f5E4gkuHrEq28ktJAxcQ3DGWa5Ds",
  "key5": "4G4pEh2gRFrAZiNiR1jjuXoPPwcxc2Fgv4AHRchkWK3k9ZQX4oLcLAx5D2LcnxqCSbW15uGzvaw7MPpYgi7pWr3V",
  "key6": "3MghZoodqPamzAoKJBAhjw28th8X2aUY3qkoTzmVCsMVYL1bQwaaGpt2UVXSaQ98TMHWbX5QvcWqof7Uwop5E41C",
  "key7": "3XeNxyzkvSExJRzpVinoybQc5k5MASKoSnZMwNHEXRxZD3RQdBetztWC5qoz1NvEHxVbJpLxnB4woBtKYyin7Vtc",
  "key8": "88UVCCiSv6C7pJAN6SXMnPn7p73j2EAJBKJAHfdAX7M7nLDgT49bW5EhdKmB28C3t1sNxwciUqbrFiap7XcTzgw",
  "key9": "2FGitHktHWX9uroUNPNLFN4vEp1LnSSHeo5KLDJK8Z4mcYyPa7VhHNKVmbdSYuYaqQZhnpv6GaYJQZEzU9ZnZVRZ",
  "key10": "SRo2rpYuEfy9iKzQyweDSxGwmVmmWZ4bujdkZEvWuY9oeYgKJ43biu5Fz2binKenxDRNk1J4bMM6CmUdkArktJ1",
  "key11": "57dDcmUYES4ZqkpxETmVodRp9Y3R7gFy7cquJxPSPxdL6NhJEXVvs7ah6B1VPgMetLfUCurCfdZBrLs5oUAmT2of",
  "key12": "2P2C4AaS1naA3AqxAH4B65j1fbZCkmHQZvvm8aRKgbDXqiUwrju7r9mg5CY9w4bbq69V9YBVYJkkf5hYQ7WRPUpT",
  "key13": "5BfeJ7JSH3wkFyKk7aVA7ZGKgo4NSVQgWTxS2mZPRCDkbbaJK98NKHTb2LEgSn9C333ap1PaxdB7mjaN85ZZxi24",
  "key14": "3QvNiLGXcFwR1wpitdFt7igsxRA6RFeDC8jux6VH8Pdfv1HR5gR7o1znG1ZoVseLeX8BUYpjVSC44HtcUiapBcif",
  "key15": "4vVnkdZZqNHKsj3veZJ2cxbGpqGPBmxZvukmJgLyPrVe9QFZ8ZWjK7y3C4D7FPBYn8XiLVkDCAogiN361TJhYyU1",
  "key16": "5PpAHcPG41AyMjgQLAm98ZhDw1Nh4PaQ2tXbptBMaeMnSBR9akEFu6zhEx17BSFRy2FxCZ9TmYGNERkrrwTeHKy1",
  "key17": "hmczdKCnzP6kTCD2eZm6akA5Wp8zRBTxvKMr9GrMEwUzhReAKuhBimZpKPSVRPpcjZNuLFXLpR9vWDn1eutG5y2",
  "key18": "3v3WgBV4NgWeiVgbA4chUHbAHpTeAL1BQGbui9VKcgNWrB9z7ubi3KxWBVrNtww13zdvzZfrLyLyiwh3ydEbsitn",
  "key19": "2r5Gmxy9LaRF9x5tANPX3UnDGPwj6EzX4EijnLfuEfw6FyXJyRp2yppu44DYNYsUcAEczYnW2Hkh8Mb7YekdR6Uk",
  "key20": "4BFPa3XJSQkMYBSZ9hWipPX8gprs3ARMRbCdjdCHUitbVCH3qzWSxvvF1hcScYpL9JKyozULqMBAMTSoqu3f8uZT",
  "key21": "5CwjvTsHgvYdtvJFPZDPMXR4LxuPtHG67PmhWF9xeRLb92V5QMEU5KU9FKE5WMV8VLkgp1jkcrf6RJfHcutxQgGi",
  "key22": "CArcBCyuoTtvJT78K63c96fBp88MQ4QtaCp4SEX8rDRytF9jTMakawqF7RMr4Wibw492MUz8PLWNvyCuANHEh74",
  "key23": "4KcrYMmCVk962Pcq5azp51X4bgNJ5rQtnyJiVwycb9Tqut1DDHmrVijFEAgRdNAUSMvyR5iM6VM1ifKTQByyo8Vw",
  "key24": "3p3GTYGdTX8Y4trxb6yRsQ8bBnAqVD7nMaa7p8dkRr7Tz4fAxuKajKNmY3w3faHTeib5tA7YW9mztKv3o86aropN",
  "key25": "CWz93gsxCSTRP3X5SiQjDM4JSEyMTTLDyo172Amsy55b4UPtAYhLgWfkENm4TbXpQ2gYm7JfLRXpYwfAzQSYDp6",
  "key26": "3ceupqLJs57Hbs67sw9wAjouZrwCwaQnpeMUsoB3hUygeLys5psbvx39rWeB4yqadA3TkYpvWefnQyXqaXFVbV8w",
  "key27": "22CQwXAH11MctaVgsuHEb8R2qU6WLVL3zNcityoxoKxYbhv7j8QVuHkdaxh9k1okHstGqTVX6ShrnJHKcWF5iGUb",
  "key28": "5pSUQNBXW6i16Cz72NsJsNLcxGPC1CdUvEAwyCsow2cuESzjRWaYNn7MEpZWdSL3f5ja37sdBpWMVoWVANxcm8gj",
  "key29": "2LtQw85q9XVpjnCPHsdU8itKD7fv14xoZoHNEC9fzpkcfTsdvHG6uadK3LNw8du9hEoYm64fDg6RExECkkjd6jj5"
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

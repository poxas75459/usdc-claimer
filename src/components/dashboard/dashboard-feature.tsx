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
    "23a8V5ZDRH1JUEZLFHyCjNzcCuTeQxXAZeezMqgFSVxpansUYLoZrvdSs6oo2Ud12DGeXset5mBQQneJnh3XGBMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4296vnLCfc1Djf7i25XDar78TdxaTd63WqePRPaGyF3Z5C5CfMyJyRc6RjKGjMSPJrtCj5RqJnugbbF1Rk7yYAYf",
  "key1": "2kb4ZfXQJF1h56adgX7XQHAWkrKxDCwGyJHiNr1b9UQNP3kh6E3TPj9sSFR4j6UozPeWkg4g7MBXZ9tWumoSLVBn",
  "key2": "3BYzH8ysh9aZRD5apXcqyBnWGDbZL3jSCScXaseheG6ZK9TsMDgJLAmJUeyWHZXzpy8YhKWsZ9d2C9oYiZ4muta7",
  "key3": "4DY21HVMMZpUsYB1rnxzwNgHCCaQuv3mhDMD4bQttrddMRttCKnm31huongrJHuo8PbBT8i85F98NU2Nii5UEZnR",
  "key4": "4f3Pq3k6A4ESH9d5xKJiaxBgzQZL9XhiKRtStYmY5U5Zh2NnZgccGuG1jfiHCMGSawjZmCNsZaw3cKfBSwRT1RFa",
  "key5": "3rkWFLBjZVenqkqhWweC6Aj6F9WsEhkzqicZ626M9p8vgTwb2u8fK8usV6WrPGzZmdGz154i5AuC8vADFkZHE319",
  "key6": "4E1BYJsyaPjh5U32XQXQWsnMXWrJA7zw8uQRWSqfMsMragF7cogCemAaYYZQYNpZuDWGxUm7EArHzWqcBiERxHDT",
  "key7": "vbFR9K4jEmvgrDEj3JzY4trnwWCSqjF7KrQUAUR6iExDMscFAXaJF1djagJyNh7oco2N2YiTLgAAWY1pLkpdgcs",
  "key8": "4fYcCteqFcrEY1JN4o3BGaSkicA4t9v17wPXXfTB4DbeJV87tGDuuDHY4rxDySDiSaTU7rRv22R9j71UbdzNX4K6",
  "key9": "2wfuCLFvpWTGngv4sv1qwVYRLFEnLErZD3Zkj74PTSt7MSS33mmKjj4Rbpw1ypDgsVN6oRg2EPMgaHyHSqSsDjjj",
  "key10": "pB6sZdCHWfYHWZ19UTYr2khw9Cr4pqZUdANXMgrR5nvqLmV2SANfAehe91Mwk7Wcn1wcVoRi4mgTTU6dX4bK4wD",
  "key11": "2iydrUq8hHJfzSf62csyajfuSVWKvojh3h39ut6NzXiUEyjrE2E5vNMXx5DJ224wNkM8sjtcEzFroFnMK2y4rECj",
  "key12": "2KJz1jypcJz2P6Xq4tYwTnNvHcaWpiUd1JmbJHTpPMHo9X2dEBEVMQLfjf58YC6uFpZsKMxA91UGv36qbvmhACTm",
  "key13": "3CHZvbXpRdboVdujfZgXtaNx1AQuJgAch7U26ERQoVrSdzhj19wxDVC2BYR4W2Bhq6d1zAt5NrrPrVSwGYyzxk56",
  "key14": "2VHu2MU7xb7UN68WzvJuhqM9YaVeW3MBkoYiRNvqphJgcpspi7W1fx99HZCLKHFepNnqdi2DSgYhQ2iU3x5raRTL",
  "key15": "4UrCsGwJFvu69kAbKBgV4wCShuF64SYP9qfaWi5Bi81SZQt5aTT267jtWPbZUxC3ETvmtmwQ2dy6eCtDT3JqK4rT",
  "key16": "5nFZwhZV7opkiH4Jbn52T53uv7Uo59ms2kpPf2QRX2fYnQcLSRuKDGRm9uHkJPtBpen1qGPrPArzpLB6dqihjWh9",
  "key17": "2yp3XSBapNc2YfPaT4gVgbD9L1Sw3m2DSTqW1kkscfQK3oKoPqXh3mmJB9EsVMZCTJnaxvG7WRBDi6369cKeb5L2",
  "key18": "5kYGZq2Jmu14cSXpf9RUQbHQz7kq9j6EPw6HCP8cPs3FWNJ21P6v9sddBxEoV2SfnfUreBTXwgjW6XUL7hYwVF88",
  "key19": "3tFZuAmGn8Sc1wHsAJpeY8BvsGaroTyN1TZAWmWLK2fp8pULWWavQzRJFGHMhvV1tJnon1cUGKVapFufi4tipefe",
  "key20": "2uPABXqwF6hiF8ih9oEhRCnB7ofRhPDpXdgsJ2mSruTvZrPFniYJBg8sTSdozXUpvfbxbWtcheucngKp3kCKUbjQ",
  "key21": "4HoZNCn9Xy13of5qeT858QDJhX1gBwvUNUwMGNFqNdx85d2S3RdcLLaxZ8S1dX7Czx9LR1cT8A4v6n63HwJAzJ7M",
  "key22": "3GPubp7tNKaWcVpb7q5cJ1UancUx3pbcaSKbjVhcZeLKJjzr4usBcgGNgyjGDxfb7FYXc6UZY24NrtKENYoSa7oy",
  "key23": "4ZdqG7jqBpvkJcXfeWr5HrJ65fFQuq9NHPbATG4iFFuqHX8AZo95FG5Y5E8DSLiBJFTB4ma1fNyA4mVQbi5J9v1r",
  "key24": "3qTPqwjQ2W4puBGQVP8xWkcs6jhXuRse6CFJ6dQScWxMCXhT2eEBB24sPqDGvNGEKudCkLfgGNcCWbdznGs1KCs",
  "key25": "GofbNcTGoCXSNwKJWV89YMPyC9eKbV4QcLZVxYvtQUgxLJRtimQcMYD4Kz6zFJr5ZjLHZWxx8BwoeaAjMKP3x9X",
  "key26": "5oXrnzTTGh7zP1jT39JS3DYLTQZnXLVbrqbagws2pmKVrEc57ZdkruktJ6yhhvgrsKhQ4NsdsCNrZ2aPQdVM3FTd",
  "key27": "36SEBWSp6gNnM3RMkTk1LpLfzUEKYGZXqVM2QptKaqLDVQKovhduPc9e9JNUoJKSUtY5AhXKXzWVhsWewVqTQNdr",
  "key28": "2PpkoNXEknhaJXHL9J6QoNmhkERBNEb7rZr8CNacYbngvJxu4PgxcdwsL353xEq5U8xk6cTL2DJK8fqEn6tfhg1q",
  "key29": "4sGcs1WfVeXS8oqAQwJD4HEdsS6WDyCpr62DA5dRH5QRiwfa9XWo9tc3y4e7uHhgHQWYmtRVRXRnTg4krfyBudch",
  "key30": "5oEr6UWCqmJe9DWKa69Pw3vUXYpkYnHeAYbeHHRN4mJWZwVWxcYpUCLnQ4uD9xUtZB15bZUKhTRzEfZUHRV5hsXt",
  "key31": "4kiAw6v9woWKQQPZufnu4Rz37pd3Em8pQhKK4tVJSfLPb54zKwzQRVAY7nXfjxG2S3VxBUtqtG38D6LvUy5wPAub"
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

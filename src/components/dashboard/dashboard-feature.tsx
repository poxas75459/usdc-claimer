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
    "mWP5UUdR2RfofmgQG4UChhsFhxte3uTx6MbwfvcT8NcgNCNsaRY8un9csJFJyJ6v2tk6fWky66wuTWuqKPGifq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H28hvetTTzmyNqwSrCEip8kwzG2TvSYkHsXSjdQYqoKy6YYuJQEdBnC1dWF3iqgagK4yWJRa9AUwxWKaAjfzqBo",
  "key1": "2zGL6pL3iKpjvyhiJAbeMKKyczMD1Q7JpwMCpPn6mqyPKz77C2EnnqkpUKk1AHXRwQTtsZ8rAv9yiJ9EavXB37Sh",
  "key2": "2e5oiwniapsm1tnRXF7QxXT4yino2ueNGAJQDZBWoqA5AhE1jRTNT5xuXkfe8etqqZzP8vQALjDSPWeo1fxmMVag",
  "key3": "3UWxLPkTGdKrMxpKFDg6YF8JqHQo4LWREyuvPp4Pg43b7HSNAK1WqQnpiZrukaqxhbwJQvQ7J3Lb7yLxsicmkbBu",
  "key4": "48AQr7Wap7TLpPxaMzSyLXcRkx163R73Rv3fNL8a3EarrYDQpPDbqarDR4mv7Dxjn6xGeJdDLRWBg6qYQCM5ecr5",
  "key5": "4FL3pTRhNJQmVR9WFP81vU4c936j2Fqh5Mk1ooUxihnwGENyvWmBH4GdNqxKYucAM3WBFpnjYMpZSsbTKGHFJZNC",
  "key6": "3AiZ9LSMYvvwcRNVw68gw9XDLxMkygJ3zG5t6HjhEUAdawR5FYGG2152Vq63dhtjum31HuEgmNYFGzocYeX4stmG",
  "key7": "vJNdZp5n5yD48cwjKxyBe7xHiaT8dRD7KZiQ75cL74kDU6bVgMt5fCcgXAf99PqheCu7GphKhkwaWBmNr4WUJaP",
  "key8": "4A5uLR1UZz7Rs2Amymr1N33yabuCKYvhcvZK1LJVS8gNzW3vujuNgknRidUMmpnjeZYNoUMwPuioqvZGMLtsdN6a",
  "key9": "28xrhn4iMF6d3FgeFJrShYoMzPQxYbHuMaX73AHdYamGwkQ1ySVKrnJbzgbySeoqEH33WaWWtYJYieZtAe1NSSEH",
  "key10": "4muhRP2zPwUQHUPhfQ7fvqhpFFzwsbGkJ3MAudXnGd95ow7nxZUXEcrSyZbfapuQs2FWk37wiLEvWgJpF97rjHtN",
  "key11": "2ETum9UE5MVgLpLgiyA6uQfHD7eNZrTabMudY3DHKLZ3zWTwGNhuRBwrfXPb3U4XeAFCVtB8nKMdFeWfEhmFdcDX",
  "key12": "3rFzvP8B534pYbGLUn8SLVs5fpDRcf1ZDtAvJUaErMdet42yuab7NkJqui3mKBZs7jna5qyhCmELxX1ziaJmaCRN",
  "key13": "5Sq79PyFkCp5udu7RuR3nAERBz6xnG1dXmeax2TVmZhjiUouFJcg6EhMRZZr1yBqZPCksVmuu5M7qpCE1Yg6eUVF",
  "key14": "5Y5HGFxKZN6fGs1PLnnck5qjxfv3Js4XaAaiPSkAMKqAe96vsaFWZ8mSaN9WPLS9hPrK8sea4zcRtR3MUNKd5RRt",
  "key15": "5Ntasa9MYDQRXeoPktC7HcYmmMnpAUyzUQFJpketN6FpxiX7wZKJyNkuigQAaU2oEewZU3P6CfqoXF7pEDgf8y7U",
  "key16": "3QZrZvDjD7HWDjWEWMRv8cQzChALExdQTTmtr9sfwCKVbGZ4dDg2ZvnNwjQ19zUhp2yiDLkWPyVcEShJSbekmpM9",
  "key17": "46eLqKgtH1vzD4cA6tAPqSMFvhqqyGuZgv5fwNv9ryxWA18ao3GDwLK4tRTecgZUqHW67qq4mdZmWycZagdSRYk7",
  "key18": "64pKDAvfas7PgCU93XJcLDsMXGNvJGckSCqRvG5m6Ro55qpSvvuChvHYB9Hvyx3ifbdLfppKZZJX3W1QtVRuuAVp",
  "key19": "3BkJQfvyx3xqXhjSmE8Vxk7AuoTMRsHEWev6NQGYnUn7nGnwVub9CDXKCpxskVjerQdMT1c3BrUwEkEShrSeYei4",
  "key20": "rBBKovEdUEBG1qQ1r38JYGKDNikN1vNg43uq49TYwZHsrGXdxE8BhpTkBf49AbGUNPHmhqupRu2pZw2ZTkzQMPr",
  "key21": "5Fo9wfxTctEsiiUTLgSxwpNPWp4Jr4bXdyfumuv7159CvnuhyTxsZ4Tv5kcpLUv9Ts1hZ7o5VQTUbUuDCJ9QmEJg",
  "key22": "Eh74B1C3n5C9G4Y9SCfUXZQs9crfGcyS3BVPdghhnRmxeiwuGW9n81Nyeun5yBpHNax9L7HbxFgizwLjwjJ4v8k",
  "key23": "3MHGBURogFv7VRjf3qR2pHyTQfxKMpWPECzxYcqpphSHnW5hr5b7cwSH97AQDfkHuEwd6jL1xjMuV9BqNvVQkoqd",
  "key24": "4rsWep5jzt38NhuHT5ToQQVmsgaSgLYhGg3esYMbem5aTZ9gefgHiEf5ip7ynGZkDLtDCimve96uLagFhAcjK44a",
  "key25": "3K39NJf1G9T7o3T9BD14eCPUJHiefATchoF5RqdFeRz7Q4Jp2jaW5YX4yizSJUTFazWkPcrhhbCzMUhSsv9Dz72Q",
  "key26": "5rpht8m9XJhbxS42hvSNHwPBvMHSPSuo4vcjtDba2qho6YF6BcC3Rm2knw2RGPetJucLR9niGuZmXQxAUV3psYoc",
  "key27": "57jhnKziXCrzutNmTtfZ2dREV2iZF7bFDsZzByjH61iKNTi1pfaatDxvbD8YVh2kJFAuGDNpJ7oowhK1oF5DbNBn",
  "key28": "2rjYdRfhUeyVBcnAKLKct7fPNNhUyFW8eanuibq2YnDW57WMbCxTp1HAddvUPBmpcDapsEnsTKaA17LhUfYR4VHH",
  "key29": "XjHZNc9cuV3jZSi2jHDDXb4itj3HwSqqp8dMyWryK2x2WXcUDQH5aPGFVxuxxiE2gWHAoSNQmofUho8PeCR4h4B",
  "key30": "2YTFWkP2bqDcH47zZUf1rY1YpZNe4tZXqAmzXthk2AdHKKfcSStYPk5JB4uiu88YiyhdfjixGLxxdijzs6wETmob",
  "key31": "4rYpcPZMrA9mKGEmMbb3DRViu6cqAGnfQNFNrfpvwRmsXnjSfiKY9YJhZQ8aAAxHSq2MjuYTr3vChUC7g2DE5d5m",
  "key32": "4ZQjdgxVe2jtd8hJ8tNRpXsnU7WdPvpmifextKetMxQnWJYaxaq9BLRBSyUfrS8EetV8D3MrfZUMLpC1wEE6Qdjq"
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

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
    "3MvKvuBph4CJpvc1UHrtQhpYskXTNq7szbo5962r11bNg51dWe2ipdv1JsrHcATszy84ABNRvVAUrCSjU5qdu79h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxt4yEnCgQ3GrY3TSfGcku3f5eunsAph8TeY6UbTYf2rE34R8S294mZBF1H87Umi4dqZT1nMpb5PJj84L7qrmLZ",
  "key1": "5hZr8BxFoxXSgJdZ1Tr1NrAtA6V1umPJVNfSxrTqQBQ6D6epkGxtmQSUfjJoc4H8VgBRZ4sg6TeCDG7Gbg5k8CN",
  "key2": "24Jw2TAG3bLLqdWMGesQXrDpAQ2EuB9Sfp17ecfEHJ1aKcpySBbiNcVoTMG1WVtvJpQp4aAHTBLnzop6Y13ciuK9",
  "key3": "5bMjoP2KJLziNiL26NxciJvNFYc8frsPuvhRNtfi4UMy374K9bYyXzVGj9wBYomP3tLKbT75fLy2yJJMCmzvgJhe",
  "key4": "4kQ3TfEBNAofGkTdkgeaLwESMMbZNQtMFa7hssyDt8F2qXPhV7aC6sxMKJKZQXoYsLaebaEGppvAib3AnrQvhBUH",
  "key5": "5DwGzBnyL7mYNuk92NXnkJza4D4GmYP4ftbcQeVH2d649htC7y3HSoLmnqq2ZEgeJ7hZENHKgyMF7wiMCaTjS6FQ",
  "key6": "62Ynfv9QZk7w9DrCRgMnCHzDchipGqc5N6F4X9HFEf5qVpUg6p8nZJKN45UKkRDXMHR2byS2K1vuh3MqBWxiaz5i",
  "key7": "44mvBLxeQA3YeQZgydTBE6cBALXAvXxjm6JZFxbktSXEBnGY4HRzUcEJ7yYN3jsMfueDpuvW1MjHA26of7gMaoNa",
  "key8": "3Q8cf2TfHXpPVGPqaHjAbkjiGurXk93bZG7Bbp3PYS8dANXyKUJd9uSjq4ont4rWMzaopRnMMbeStEfHAYnHepq9",
  "key9": "52HDULVsdpFPjjagqA9opkfZ2mCgf4d3B9rH5wgsY2qShYfEt6VAESvci4UUjjj5Thfuchwy3LG9VkjY3zvsE3yB",
  "key10": "52RweY4jPoRmUtfvs6PSaoZmMrAk4zAuGGTKm8ocNQPwK8KxNSpBCgNScR5uCGroDPa4KRwvSuiM4fjpZ86KqZgZ",
  "key11": "5SefqTbyL4B1RSyj8h24pMZRBDuUG1fEJGMgLEhDrzyXjn5VM5DsRriS356qzLGq2YkDejcMNspQk2B8rCA8FBdm",
  "key12": "42fFu6R56ENsJkMUgdyYKUpB7LxSURiQCaaMEzLPGwfYGfZJqzCQ2WjuehehfrgN7WoT4WFGSVVQMKEqVqsDE8mT",
  "key13": "4nLPGSrH6KBQfqMWpnCyP6EFWo6UKRC9W5CnHhB1aiFzKe3UBxbHyU9539FmqrTRc42AuYbG4ZPs2ozLkpZTcMsm",
  "key14": "4E91rgCABbwTAZh92WGY9BQQiwHNChSE1A6Rxuvj6K8MSDPecUXPh5YBqMXXN2T2RXvdRLoGpAJpYdy6XyS17yvV",
  "key15": "4Sd6SCXMeiFamL6LPfwBQVYSHXsMph1EXAaZJHwSGVkyYLHbx7VJpzuYPni1hzxdus3sbaw42ghqDnfu4nMvahsq",
  "key16": "5E6QN6u4ybQwVhaxatoSS9WP6AnbKSbWwdwvtzAXij5EPPQHdY9QjEXHFi4d83YAw4KE3czH5KPBHg7Qq1FQ2EXQ",
  "key17": "55hSxz5BXXiPKemPpkMrxVssDDHe2RHRndzJWfDGWgTFFWavXRBBoNoWKBP97AvMxBE52eiCfRGLUYAemktJPb3i",
  "key18": "2tXgLnfZJHXUFgNseecKzocZnqdoS2iPo2FetpinSJDvyAdKCU28irbUxbDJoJd6KxMxXQwcXecgqZGMqQmieZ8Q",
  "key19": "2YtjEv6zd37JT1RNqioQ5cC2bos9RZfVnudmUCC6pWbfwdkUjWobJ9WXAN2mthZ6mobAU9DbhqeEHK3tcc4q1b6L",
  "key20": "2YFWZqdr4yDvuUKyaK5WTKLe69TGftpwWWu2spuiEFRoV1cT2gMWLdXxQubYyfcBav7AikTUmxy8n9GhxMoXQWyv",
  "key21": "63WtDBs5358xed9Q5ZKMkzCf3fDAK293GUivQ5ZJ6g6rEaPE1tGh132gq3CpZ2JEPCR1cZDAeXYbBEAm8QoTWFSr",
  "key22": "3EwnAR3sqjn2eM3NV1th8qxNstkLN83446wkBsqVLBYfQ6w8ct7c85t5JnhrS3Sqh93b9U8Y829BueLL9hZPT4xe",
  "key23": "q4Q49pFrCRVZE9iRjJkWtUQJoEhYm8CrqjFT3QDa33uCfbAyvANs1ffXgDcXzQJVNYjKqPKAFLp2fnFVyu15ZD7",
  "key24": "ycrUUmPEuFZRDDVuPUwXXFyEhRYsn2aHLUCQjjBmGxAKNi86CFgYt8AdeFXVieBa57PM2zpz1Q2oKueGkuEzfxz",
  "key25": "2s6shrcrwv4zJPRcf9fxLDUacKUrVCLBix2m6SmAojeqa5ir1dQnv1Y6YZMnjMosf2nymYiWjKzVKWjmo78jWEDD",
  "key26": "2Qw4xucswNFKb7P3fdqFXEbnt37qKVdfFoqXM2isBwovtStpZev8DxbDjFoy5jv7ywyp63oBDUXvamaRj8rTRdTy",
  "key27": "38MrtuqBBuPY1Rds9LeJW1YncuasejDivMdmQ8yW1GCT6bzWHBz9nQvc7FMVcFBkpFJ9aF8VTsTRMKfSn1DfPuWt"
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

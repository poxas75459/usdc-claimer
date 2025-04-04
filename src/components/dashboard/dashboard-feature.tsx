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
    "4RgwTKzu7oM6LLFgT2F2f53ifbYtJ5buBtG7tqhtX5yQ1CMXKd7Akgj1S7yfvTYW74hAGWVEyL2J3Qovrb5auEj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nY5bo5hLDAou5UQe5x3PZiKpohr8oyNZxoo7f1Dbf49RJnyNXAXhaUva4dcLA7SecX2QUApcKfEgGkBJwSQq1Ly",
  "key1": "29mz89t5yqEfVg8f5B9rtregcdsUv1Dt1gMM17HmsKNFGcuykiACbJhZezNDn2hy5bKeXxpS2FBjbgM9tnfwjX4E",
  "key2": "5MrKPgjQKh7ZyUeGevpDZM4YVoypcsrJpuDqHQTWNjjihS8AYyAngKAebCoe6UjWQAtmpSTkAevez5S5ZwafJSR3",
  "key3": "2RvVxgnPs5H1nMQnXP8KStp2d7AnLAxvkzgw31w5DWKAU7sQqoWzZciHHfhyeQiALG4B3RHBKqfFkvJLTCW1Tu8Y",
  "key4": "4L4HxxhPnfXE5wwRJieeeDwc1wDouHTHEwURPHakL5cqtcQsimDDYMjs7Amw9W87gMQHNNgTki172YzfNq13hNrh",
  "key5": "4bAnD8J5S9dVFvTYEyJeTZirxWvpP4pfMfpEpCPXigUeQ2ryixP3LgH4hQLGUHvAm99q1avZeSLNeYYgKDZNJF54",
  "key6": "4Eo54r9oLPY96WXCjVPM7tHyYjJfKMne58jVKVDYtWPcQUtBreif624Fmo51G2mbovQhEBt5zpg4SbFQYMD3KqZA",
  "key7": "42rd6d4MiNqFFgDavbqTjDoV3VsqbXAT3btT2ki4Pw2DJmoL93nQ7RW9e3zzawpqmbChkbtTsb8qEjJ6NUr2inrV",
  "key8": "5g4hiDxoBSsS9pE3Knp8JNoNjnj3A5nShviea5P3xr7HHtm1G75R5N2RaB6NCLLBXg498QvfxNdD6w7yww73v58Y",
  "key9": "4hZbqyrkQqYrm6Q5SodLvuKkG9xhbGNMZCeDkvcJwsvq5G2aqNN5FLWc1eT4cBfR2Zu9VfCwXGmSJaazTHAiJh64",
  "key10": "4RGXEwgnNaFYuiVegrZ3bGhLSoe2KeLoqcPNjRvyCqZVSYkVw69FiEiPkiFEus3ssCDqQhMBs46dgvtv4FLKDqgF",
  "key11": "3ZQ51NqnpjTXbLVoaCbGirP3GGYUiaE1uKutKUxGHKW94s6Azy96WFWS11cpBCU18rZ1p6F7Yw9abSYLCQCgPu9B",
  "key12": "2nfatvEwwZZoAzg4viDzK2Zy4R7nty3z2JaJtzWi6Z3fvDRroqBoVfno5dxepXrti1W7XoKEx9FEKNydzkPVjcyG",
  "key13": "5X1oi2vwMsGubujBJzVNGQ1M5tKt9RmA2hg5zLseD9Z3626QdrXm34nkGWbnXMFfZY6fif56mZvnUCsDvreGPHLo",
  "key14": "3c5YKb3nofuPuJkVW6YK1QTwD7iGw2M8JFUgcSZy7Akc2Y7GHWFXsAjefPP1895kFcT7FPo7H8J7USotGJza6u4L",
  "key15": "3r8uLcj7QT7tfeVrEsiWbTiCHPkWxMoZgQwpncDpRVdFsqu3USR3DHMYPeXNDSPJFW1ntLRTq9WF2nLaft1Ng3Ty",
  "key16": "2pcGVcVJu4kb99JC4ZK96eQMejdzkwdxogYZDVUN2W19c9fmKDL4ssUqotBv2mCR4Lx2AUzSemBybAYNPMRRN1Yj",
  "key17": "g5MBsrH42NyEAqb6HPT5QoAV9JMZWV3gdrc4B2vG4GLuuDjEcykXqUjomRyrGy3tdUaW97YD8jLixQHUGtfXvkb",
  "key18": "4apXFyPAP2xDAxHciTN61XRRsE3XGVuFfxi4hA4ub3feBGdmxRg47W8sgkqhgXNNxrWreTwLPZ3XcfyJFLB4s9px",
  "key19": "G1ozhXhKNnfxxEEQrMP6CDpdxdVh3mwWhQHiLzQFuKWeBhbz3R53Wq6Ma3rRVpGYLmiE2RKirBiHzYKZ4wTyKA6",
  "key20": "2gDMe1yt4fbxjBgpXrYRBdK1ndngNSojY8o1MHEuXfus42yVPhLKFuJQNKRMq9b6q3GYp6iXFa3rkHDvuo4drYes",
  "key21": "3SxaaFUhD7mVzNe7PZzP57LLFmFXX9kAeAMQ1FXgNGY5Ep48Erz7WLXw9qCt3s6CH3ukai6Kw5A55L4ZMn7goBdn",
  "key22": "yzf6Rs28R5yj5877Xx8MHffTbw35h7ApuSrPPgjA9i2zs47cip6pmpSxvWGvzvSrKEr9jLYUmzq8crPP1RsRz9d",
  "key23": "2iXNQvj6QmTB3ZHSXXuBRz4kR6PzV8mPaT5rHaQduuHLXrd9VWCvGBN74Ui2yuoJVRNJfLBoy6tNuEfPjtLCxkB2",
  "key24": "42CoghHqQpQrPVzroqRH6vDkAxYbze7Vigc5csw2Z7o5LWJudz546jikgM6yvfv3u1GYuauB8Vs4uPGsyppstiKR",
  "key25": "2mTKmkeE6Ug1ZHjTZMTWUb9qDod1gvoSpB8oEXuN9xgusngvXfxYcmARKDZ8ThbVbXmwGWHUdAdEGAgW9tHVmVhi",
  "key26": "5eVHqMZAAmUfuNMv1eAqptZMnj5db631BQGSABoEjqVDBVxYkbakR1rYyBx1qht1kgZpGvNtfQPBoBGosVr2khnU",
  "key27": "4zAp2A9YuGTHckq9gZr3V51GCUffQasMcarZfhD5uih66EimEUPREFLG6nB1c5pDNQ8Cyga4C4P9kmrMf4YhvpGa",
  "key28": "3UEL2FgYF1hT68DoVMwVhU5cfQMtLX7BXvjTdFMddAy8NoWYsthB2Wm7jCKBE7W9TUPtinrYyFsA26eWQuhTDGH5",
  "key29": "2JkZk7BAtGarfrDAbmqfv1WVrJ2gT9WedtAiqp9jkG2ehaQpJMqYGS2yTBE4FQBXqfuFU2mcRzynu5TLDcAQgmme",
  "key30": "A3V2HHUVmtSzme4g8XirzD6bfkUbX3mfvWsx5U6Ggb8nokd8GvPTKCEkLMHK3sxaTNjgyCocwKEB8YQzL2F6Zrn",
  "key31": "49uqcSJBbDi6gzrTqpGU87VPmf8UheZeV6Dm15ikhPi9Y3HWwGkqVencRjkiyCbTMY7PmcabxfayafWxbqK4zgJY"
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

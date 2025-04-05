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
    "4KVmrnZ5SBcB7DvJzZa7k9g8GXDPx1z8LE97gwYiLne792rfKUNM5UXn6zgcTVFJSqma8PK6pmfMPg2cfNjckHLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTbhXyS6KmnbtW7kxtTtbuXihPMNAYFRrcRTjkEHkHtuCBB8z2GNtNiiKirrqxzgozcJRbi1ZYwKBBgE61hEYNw",
  "key1": "26Si7vdaM2ZotAQNgTiHvC1bUKsG3VqYBNykED7jZzdqvyJby4v14GaSBzsCD8qgQYXNTKZh5S7v5gLgWu4ph997",
  "key2": "37VqydXwrNZtaFmjTB6nugx2kRJx1CP5MoqraNRBQvdrnGjjQ1bZa9N2WYZ533WzpR2rmZhZ3J4m7z74nXXtMmjK",
  "key3": "2WkzBSRc5ybHWWjJXp22gtEiR8Sqewp1arrM2qT8AEfstWJPNsvsxZjVxAviysB2hYuAEWo57wBCpNECoGg41jeW",
  "key4": "3z29h2zvh9kKHbVojjfQD6K7xF4ZRhbPNFuzZPxkcb3hsqaMMtGfYxnfftPR6ULPeBWtoL8thNtmLqLArKLDSMM8",
  "key5": "VmmT5tYgUEH8Sbuve4PsvpfJqyj1DH8uwjmVhZqHD3uVrZvZfHH9WN4AzSUx7jd9QcMCA6ukCNxjbV3oRDoqBKq",
  "key6": "2bjTcyqD6neh5UQT6gcsEfbNKvqVBinpt1ZxiybmcHgu9cr3tmK4AKedDTs7psaeALLJhHpMJi5Da5rHUC8KPXfs",
  "key7": "YZcRqwpRCrDG1AEeiQmzCCpEq1qaZoXMfPT47bXuscJhw7phxbBUDL6YoMKp8SposeriXi28NLUMv4GHUs2aYEY",
  "key8": "2gXPELmYmGTvzK71uTx5GGXmZgTV4iQQSeYa1S4hswPUdL7vPY3onkxbSgRT9UUoKeruUUi74fq5wiSGbGRtK6x6",
  "key9": "z2G9gREFauAUxgsRShh8zzFQCjJGzKcPTMmDSQWqccrZEsvj9Higbc8DZvKrVNXUZS3xQwe4WAiTuo9V6ajNcjr",
  "key10": "4F4jZW1p49nmQM178dQ7UHehcopjgkcSsATw8VGmRj3w9tNW34vSrCo96ic1PaUrSfPiUXM4LenmsGPrrC2youJ9",
  "key11": "3xCzjxSpMkoTzSQc7Xox9TVDsnkHMqUBzjUTSb3Pmncr32YFNFhShSsxgWE4uYzPWLWLXraM7dM9XinushoiNMVo",
  "key12": "zRh2KYsrNMXwFpNGmeyJBZ8Qd4geUeu9dEzF4b1jNGidL8K2XgyAnkJwym7En4nWffzHp8cZ7RQew1kLnpLoRG7",
  "key13": "5hYFGztzRauWBfbsiEEh1xTTquvnmbdTgmYF4PH13CFM7ta98UZJML7zQtDxwLm1yfQaBzYpV1VPgyLHFivLw48R",
  "key14": "4bC2L9wv9yQNnmhjfxeFvrN8qeUabqTkMk1gtBHhDMhWzkqf7zEyXpjVSRJBHvpFsg5bJYC3gNtg7sdNFP9QJtbY",
  "key15": "4H4rnwtwVQCB5X9JBffMCXdpgRurunZ6ayqABjaE3kXy8nQpkAhiyDZp8q3wqqcBQCaFUmrDAuD4fpPo4yUJm97M",
  "key16": "4syCQqnUBsduPcFsGa8gnxuf1EctgkfzfUe6vBC1Vg4Wm74NmiQNniPWhBvabw4F8Jy6Tv5nQugicN7fUttgp7cZ",
  "key17": "3XGgsrUSKmB4imN9jS8PvTHvjAXpnWjgfzZLY8U9i5BbttbRMsvG5DduUiFrzs3rsU4qH51b1R2ivo15jgPPHmCU",
  "key18": "Jp3stDnTP7pBN9cp2irzCx4UzNxoLSagWUvosjPuSqmJK9VzZkxzD8ERy4LdcBogfVMixgXbRfk3Ej384GecdYC",
  "key19": "4dwW12uzcxTZoQv7h9ep4pvB92fecywaFRTaLPqm67v4BgBckHxVvfNC6xD6sDGpZhaHxBzDNnbM852tVDokwzje",
  "key20": "5iTwse2ehbcbUTocUwfnWCXtNgKi2gZnJBAHJQdcd5xFYn8mdXpoqixGUW9qL1m3oN9mQg5nqNg6G8Xi4uwta5S4",
  "key21": "3CXL8gAjxLxJMK1WaQmBu6TLTZ2RVo8jDo4hFGRe8pCsECxEtXfxksMVrw6V1UMLUpCpPyTs4TBwsSEe9JaacKtU",
  "key22": "4nqcBZKp6k5K7xEDdsZo5jbweK7ATDPDpuHyK1BpcUDrB5ikuXQ18tMbcmS6hnvuKMUTDPYmzb7Hke3RvaH945wb",
  "key23": "2UAzBHtQzQd7zui3Z8poMfyy1cGVpRyZkwcQpALzNg3GmGhxMxaTwp8nn3waRmw6t9A3W2vr1ETSeHq5oWFs6Tcr",
  "key24": "32K6FaGxUnNsVDPCTpEg1TJFWskRDdTypSrEjU7wXd8qBRMKCHqDkSv8cjveZfWyBBzNcqE1G35vkUnELih9bxMW",
  "key25": "mJ1FLiwHQPyZTnEghQKVbTaW3uvuYaj549zw32jzthSmBRLiiAt36Bvn9AfLzsqyS14MvCuT3vHMGbWpAnhSjgL",
  "key26": "3iZRtrdKZLWQM4dwzE6kMBxMf5buQfZDd6QX8rYtTaVUYUro9hBkwz9GKh1YRN82tJqSBsVE9Z8gyo4utDgX3zK8"
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

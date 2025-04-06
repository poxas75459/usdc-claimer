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
    "3ZLHrK4vto78TCinG7gVbYAJFtqW4WmsiCWVGR5czKFVubrpbFboNDJTdHkGU3MvktvNsxUVgSNbiyX7QfAPNY3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2jRWJNDMbqAQyyqbHHgxp3984D2TKvwjdGCtt5HeNkETHsWQQcPyivrLFm9TishBTjC2tZnqn8xALMuSxrWaqc",
  "key1": "5JXpMjLb2oMbomCPXeSUTX1P89XCxUqCwovaqFrGepmENLAb5ixPSXPECMjgowaXR4ew8upL72aerVEyvkt2GHzK",
  "key2": "51JzSiPMixpLWpyN4XSJJSvp86de4arcr5dkjcdnZpz2NKuJnoC9KTPyHcpdXymiKQC8wz6VdNrW3e8ScQZcRJff",
  "key3": "31oHvoc3ZgczJcrciTzfQMpkWtkVG6dR1F15Zk6VYBtegs73aSCT6vohWzrE8ZxsB2UQaFpibZz5sy4YV7PJ4zJc",
  "key4": "3bXtV6VD6hCwGE3xj4iU9mRbNeBPhwwfooofgdN9NKbj7M8peZTT7m1QrVhyVTFBKAVXXYbAWQjayo6X9KtHskNv",
  "key5": "5hnx3FYb4P1pKCrvm74azPgfMZZMwCiM8eoCWBvscDucEfLuZSTViyxkgodSLDVz78nmitSDefLhGTgWTuFnKHUb",
  "key6": "3cyc5PZzKmWYobNKLGRTN7VJ9DVgrSU1m7cTr7Jux32K8wX2ZEJiPXEuL2Qw8TkXpZHVTQqmZShMzb7nrg3Y28FE",
  "key7": "MY48ijZwyAiJgWEo9fMPJfaG8QbSonosQG6G7WbyRenoPi5Ypgrp6SSSjddYPTzMhsdLNhodg9jDiMcePThBRi9",
  "key8": "3VhcZXM6RzaoX4Trx83K9eVTv3YZAtE5vFz8zfM89qn4n5rVfEf8dKXQDxq4mab1s895K9gGuEDeSqpzbktZWMmc",
  "key9": "AqPte3vu5GVySYNzVoWe37YaZW1rg6LbbyBqjkmMo6rTPFi7ZiFnY99N2ft8iuhG2fdvMNL2csim2N3WazQm1cC",
  "key10": "T7wovVLiHRWmePCph2q91HxpsF7Zx6XkFRbSHWvnkh25KzSpTCfSEnMmwHJp35eiXT7gq2ybs6wmjmXnfvqn6Qh",
  "key11": "2fvgEa8KgHQ8KVJRS9xxc77bQpSnzrY9brzceuYk71vksGGKFK8BXjx68Fg33cnG28N5nawp5uANXCcoVQBEEsz2",
  "key12": "wcuArfP5tCvFGmoMYnHay45Qv5S5xqGyDa4kHZWfMgzFurfnFY684Lth5Q6MDaWrknuiUmsM8Rp1M23r6LD73b8",
  "key13": "2xKSw6QEbZrpXjJdZ1ce1vVo6KmuHvA1xHzSH7vCWX5Wf29PU2JzQNp2tWDndeJduNJJX7pWuPiBtVGS4UCWtDLZ",
  "key14": "wvtW5m3RwTkHUBTovbmQhBXLez5svs22SofsmgJbNLALtQJ3d6vofTkr3FFznG2b89WyNTjNtVE8ULoearBApQC",
  "key15": "5qErUdh7EVdEEFv17hFLmPZpDEe4sxSF5B3gnygFuemxcH7s9quhfAbxMudzg4hAEHrUc1sWDFr17dUo6LTgwarD",
  "key16": "5Y3TDqjLc12FLKUr1PMF42KMfVW7AP8T7W5tqxEJ7W5KD9ePPpBdz9KmYQvac18t6SCHXTBdt8nBReEqEcgCDn8B",
  "key17": "4MHVnQWezpqYXYepiMFu72wmyxRhfbcwhZmTiyPJMqKcQk2wPTbPofLH7LnrpyJ9XDm9d9FePeBR7HXXFVMbYMLt",
  "key18": "3M5TwA5vtTjmtYzmU7LCgtWnUjs7kopoYsCwdBkAtKwuE4eYkysTBq4snMxjt21v5FEwwo26dBiThKJSxQT3HDa9",
  "key19": "5wEW1arMnFKt4NmLrzqay5NuaJKtN7KXMi8LZUuztUZYxpBAT6BcyaWpoHxMdoNgjSiYxjUapmC73UUGiSTVLKh8",
  "key20": "RfVmJevQwfTaepRqJhwUDLMp8tzV5Qn2rdN2CDq4niSkYMGADESh62HfyTJ7AEarW29i3Pef2jTRsKUqZdoz1kn",
  "key21": "7LbVvBTGyNwvzB35bPW5f6UziwxfibGsoLsAffQgtMvhqqBXWqS595wHkkFw9jvMxfcssdYFRyrvK2CTyEq4aSd",
  "key22": "GZwdXaJ2xknQPYwMf41HXZXfmWoE986cmxxzMUoLhsWD6WxYHJ5sH5Dfxx1nQZFy2fk7nMtpy3V2JmLzqykU97u",
  "key23": "517VvX6Z8E6EbbFZ6s1daVAKVFPCbkKLJsi4Z4avX8Pn8FGZ8TBjuBBw7TKq3xunN5fLi8gnFdYMRne8esscvauf",
  "key24": "5t1edFztK2dYMPsGNqHNXtWYCv7zRUdPwJPh7ch1bBUAcUGbMaM4WFU5HnrHRK3S52cxduVbhP8NrK2x6SXk1tkT",
  "key25": "3DJXToqQDnevt3QsU7igK82TS5EAQKzLY6QAo3JYKh4yk83jtSwpuSXsBh1KK7pkXkS4X7kW5FmRQjWmCKzTHD6Z",
  "key26": "5sd51C7Ccoo2ZDmK1L3tKgxYcWgCy3UPqKHhym2QrH7ubdA4h2W5T5dQhm6F97VqEovi5pRsiAXSLt8Ap4ekvxdy",
  "key27": "3BfMKbkRQXFBK9e1RJfgA2agcxS6GJ4N4bHAcKyg252TrpUtM7CcDEHgTtSeusmneaDWHcKjbyU3hWhLX3psk2NV",
  "key28": "39xo896wSgKXTWSxE55FrDFjb2YvUY1YbLAAxtZzCs1sJ8QJpUgv2AjDYCZJTbGFZaeXAHihhjzgykD3PEQNijna",
  "key29": "22jjo6zVTh1tYUKo4AQoEzAVBUdUi8Bg64knBCEQj9xiLiRMWnXjnz3Ee2KnYQw2SKp7iUQfqAiEHPtnGa9T6XPo",
  "key30": "2SMjoYFxTYeY8bvKZQVqpJ456x4h5qGyVoQUtjdGMf8yQbZqimnxCEeHPSbgHpfuqtj9M8zd8umdQmvGB3CygFsZ"
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

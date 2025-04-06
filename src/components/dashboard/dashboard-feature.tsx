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
    "jp5z83AbTEoDVxkcqnVbDtD4u5dmA6vTQP9gxCXg1WyPRnMicXNzELnC1ihJags1kaqTwgVfwHQ7aJZ4D3Dawfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vuaw2BCnJbaUotmcSSqiHiqrjYmDYXCoqDJQDeiqE8ujHWEH64Gw1HN89sfDj489pV1wHQ2CzkJAgNeZdEvemuF",
  "key1": "2pPMVnK6P1LfNM6KzdBuFdg6zj3hXX4iPV2hmwKjBGVbdrQ983WjGB1jUNcYv2ucs7S4m3eb9ULnXKXsrEx3omJb",
  "key2": "4G3RXeUZMbmEtKPhsni8ymE1h9XBCYEciMEUiYXPPif4yM1UfiH2bbjHrSKExZDrgUrWZ9zBQ3YCnAYdRBCJcU5x",
  "key3": "5YQ3bvHeyUVn5SDG8MwCfkoNT7rPLchxGbrLyniQFe7gEPi4G2qL4T1GFj3pPnk1rT1zm7eXH1Na8DZwTou1xjUz",
  "key4": "2bLfT4MLbsnP6RjtjQTp3VexKSwXKKufNwE8aDyy1szCXKZoLJc8scjMNSaha7EEQNZUUJiThLg5GcoCLyHzoSuF",
  "key5": "3bJQdbyHXyXAwVpfHARf8T2koaq2x2aZZbxgAMhq9WfmGMTXX4AaB7nRYzyVU3uZv7eWvdiZcFt1Tn4G8DBfA9Tr",
  "key6": "CPYEZUnvtow3uc7atkdDXPsJfpLcoFC1wz8P43XxJ8gr3wfX4r6YbCwqcuKPR9ERiKtfsC5rmQ4NAzHW8qX5f5k",
  "key7": "4r35Cxg81frXef2NNCwzWGwmqccBhYGFcJsT1wupWgxYeKpwsg91a98VfnYA5VgURZ3fGHgbJbCkUFuBU2AHMfQG",
  "key8": "64Gbu1UiAEbycCuFR4hED4QZtjxaKAnqD4SKZWo5JZNaZt7z2kBStZGGNtucMVP9g6surLrmcPJwj1gCjmujHpAn",
  "key9": "3qZtycm8ZQeMik3t7wPPTeSJ8UA4xTXZ9pAJ4jC8VTmM9QyabZZYJEVYDPFUoqNeLTPST48qKcJdVWh5eVGdsW6X",
  "key10": "wvVbV5STEjeE9pvWUx9H8YPnPJtERzhVEAPjZtraGcmujnEgJWdvK8gtF4BctAnQJuZKpK9HNuE2x6SnoSinyLE",
  "key11": "5meNXmfMFAWFfyZj5GRB5GEcTuRhGE8Zw2gAMY5sF92DPDxfVXqHfoeXrPvWmXXCGyaPhAUb4nrs1VpPykgf1v5p",
  "key12": "46LrYKXbMTZufvAB7U6jDgEXo82mztdktHbgi9mahoq7HYqsUGUKBwX8j9VgxJFeCvkPMZ9rnKCHvVLFkkLA4WcK",
  "key13": "9NsXMDerQHDtCpKcfoZgr7NR1FJSYiw7L29yQNeDr7UdxZtXsPNX5LvMNftM8Za23JaNTJdoYi4yehY8tmWWeDK",
  "key14": "GgQpGBTmHVs1XwQiJufTKHr3Ncv1ysR5miqhZoFCgLAJ3eTqFuU6tDZhdRSKPNpFowiobDhn1JLFiGg2wDJc4rk",
  "key15": "2zKqseNrAD9iKwkVdbUzAg3CoP1GxhbbEr29e6k4ZoUB459gmxkCtfHqw9PN8HcP379gLB5rBDAE3T9Bn6AvACGq",
  "key16": "2icqgdpXQFRof1bTzFxS6w7KB2pfqhdTKyktM7wVq5A1Y59kCEPsjFYEFRe1y6TfyWbn1Qgw1QJ5fAVa4tMtASuK",
  "key17": "4wWub8BM44xYKLUPv2cRqzWdwFM3VL3hCszz2UJFan2rd9uvn4o39nquCFJkirpqge4nvvP2bnoYUeynjEqN69Gi",
  "key18": "2fYDQmpdnpnHap8GcMpJHiGXCLpGohk3PzGa14zH8x3QqMMabdCQV2eg5CDiyYqwScXiiK9dU7tKVUF8Qc5tsHes",
  "key19": "2pjU665Ww2oncdESHFDQVo29sTZACBjyVaa7ufuybgYoot7GVmc5Q8zdPDBSfUi7AnFChCapzdf85Ha4ceRUszda",
  "key20": "b1BKpnfM1VngNz4br6jG8XTpA591GcsAJrpXHj7zGjg8ft9R3AsF8FniY3PZXowbv5NP6posdH9QCHUE8UYm21X",
  "key21": "oubc3Ye4zU1oj2kg1qu21fZxrK2uUyVcffL3bKDYVHeyP2BKMX4aeWgZMS25ydKaiFMBTqCGgBnfvWAFMrFfpoT",
  "key22": "4RHyDwM5bhKmVJrTMPQ5iDz8BW25at6DouYvE6H3AK3TenHDASz7H9aGEvqfzmXeMay6hf8Zt5spbwwipozBsEr4",
  "key23": "5trdwPksYoSZL61HsVvDgocvpiaPiU7PRaQ3QfxfXFr98Cd65hYr2CNxqDvQP9sVWHZMak7Xhow3LgPxhz7Yn4Hg",
  "key24": "2jJ9k5kftZDnd4sv2peF3ez444DeYS44ptqrYvVwcNLfJRyFRCwHM2b4qVXPzEuReKM5QmWzGYTVqJ8G9oWBwze2",
  "key25": "2yiraQnD9WiZnrqBmQZBK1HR2zEYNiBjpYWfZ7JF2DCCHQMMaFqWwskpexCYaiVpuuV8oPMj1iVNf9Ckk6Hd8CTT",
  "key26": "2qyzjhaPx5wk86XuyxqmYYzxPSzZe1SJFKgueXrnAsByhM4B6heyDmZMKi4aKaGm1Xw7CRgY8wERXWQWnBXes3qw",
  "key27": "3mz9xvtHh8zcAFC9ARnV83HJonMQrWYRmfEFqgK73mxuTLAGFGgdvhN8LWkATjjoTctXQU8ewY5GuNdFUCULQcsV",
  "key28": "52RHNHPFx3ii2AVkbKW8oXGQ8qvwoxm1Xvc3NTtt9DwGNz29Nb2ktY2KJjKNb6Kapi5YG4XfLQPUoSEhxxP4s9ao",
  "key29": "4sLdVGdj1txg9AapsXeJcX7fx5WxAgTTbEsaibKvU2VhjnXw4w1fLELVAtdPF6jVETBdGzcsvZKgGGXkaVVhgVty"
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

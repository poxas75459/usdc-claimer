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
    "5V1mnGaP2zsSAprdwz5LefNxfN5Hj14vj7BWcTbzyyQBn86oaV2MzZbvUrj2DAWMxfnpbm9Timkd3fsVEFX9uezG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDypLR6fKSmSMBkFsuCSRVNwvnMGi4Ebf1BrWwVaM4nWjFoxy9W6uZ6BMYTvofwtjAHYiszxBgZzZFaVmmRDxZx",
  "key1": "9bPx2RVg1AUEjMcLoUJXLbS6XF6kdffjjvvmUhgQB7Q3yG94r1suXf8MVeJpZWT9tZuvAjF4NskVVownExG4jW6",
  "key2": "4oV6Am8cVnioReRtQAeyvR8jViqZAEFvMP4wzQ7uJ4pNCUU5sXJGZt623xjaALDCyY7gGNHfYxLNDbofbZCtNBmL",
  "key3": "3r5DDgLb96iJscAzwnPwy8uY7ExdY5JaDNEjSZnLButJTXXcpTuHpKnu5en1NWWcEViEuV6j9aDZEvHF1RbhZb5q",
  "key4": "28ZBieLiEaENssL1c6NhUuqahhc6of3GJ8z1VDQqepCciGbLAkn6Mwh21of87R3Uc7xhepsxjawxRLum7fhFK2E5",
  "key5": "2XDFoic53pmcn9obBB9aAJYpAsPeLt1FVzxTN5QYATWwycuDoyiPjHmgQcBRAtEmnSCE2z2XANvesLMd6cM2RBTE",
  "key6": "54xKuWV2bfBZj5YvH19GE3FzkgDio4RyQ4kMeeCPBXfaC6Grr3zEgmhhS9Sq5zBBay4G5whKaYtsAfxHxttLUcq6",
  "key7": "M8yEXJCbgo7uR7TcJjSRacKGkZwjHy7cpULDdPx1wG6w6hz6MVdxzEuPaBst5kNy4sT2iZ3gLkKPCFnu45w5W4z",
  "key8": "2Spr6JERKKVLgDcfPBoporwT76xRuWznrLNAy1a7AQif6EF2QfXQfKgwsEMakKQCknFEAz2jhE1R84Uf718kdmP3",
  "key9": "2gJ1dAj2xHULsgcLxA6jSaZYdSkCWAYZY2UpTniT82HtUEQMitLbYr5ZeKxCjy3q3JaUxfVSpPh6sj52qUHcYamr",
  "key10": "GGHhL27FbVZmaP796AzEaH3GfZYjS8kjbx19qS24yvEWDaaTHRCvFn2G7WfwXPG5kb4xK7xt46Fg7tyrvKywfq6",
  "key11": "4vH6JoKZ3648V7gSEuYH8nhe436KZABgLttChk97cEXJu87GawUjc7N42bwtKWq3J5PBD3YRPryuSXZm7ibK6AAe",
  "key12": "55PB5fcGeyUhyetNAuXMfii6NiUjkGCVk8DYQi3mi15nEZsX4Qz7n1YJiLJd9K732Pt95XsFvyXMvphjNZuAbCcA",
  "key13": "4QRo6RuYabnqN9ZnhhiEp3zRrqnKN2GptTuyN7JXZ5MtTQDK8FUmoUmVwcPLDA2iT4yCD9hUPWziBHepeEUm5B3x",
  "key14": "5wdTGgrs6kEnGzjrbuJKeQLZznbvWmBwChPDvA9oQDx6A3FeEnev3xZR1LSwh7tGy7eF8AUTyoyHugPy5JGPz9oX",
  "key15": "46rZonSEKydMFxhxsQyE9xCvDHsSBBGUkjc8nh3EpRh5Xrs8ijTYCjwcK8QvV2vtBGhfYyBTcq51GeZpjFfSBX77",
  "key16": "zWdU2cpttdGM98e7ih5RYo1ajxVz12wPDsVAT8TN3XbvztUjAVq9o2j8YkMEYPkftVYCNuANNeBp53gdy8HWfyH",
  "key17": "3S8zWG62fAXWb5ciqF2VnriWSGiJeBwnibLwMHWdk2gZ3FqjSSHG4dig3mMuawCyBYBq13W9Meju9EzmyXvYQrhw",
  "key18": "2ifWUB1CHv9j7V9Gbh1ociyf7QnE2gvwcUxqfuuRnzMaZiexWfq3KMj99kwFpnFmdkBGhegPrxZxFqXrayG4rdXP",
  "key19": "5TikgxzgqiqThRBwEdRY9tRWm1Ub7m4SmPEpbpzxXxam63ztY4x3ocTYspU1oeXbqiyS2m5m3aECEGor3nsbH7bV",
  "key20": "31ens5BgdRdcuTtBPBHFBwFiQ1dEMkqUpm4qxbHCMJpirNaSeFhm8a6dr3UwE9LNBauRm6TXmYdFeA76uiHs23my",
  "key21": "3bFLt8nwGGse1Q82gXgAFzmibKGaKcJF2hQGzbm6Drmphxy5xxcG9J8fN7Ldq9ZbfhkfRP3DT46omiW2Mr83EocJ",
  "key22": "2SnAkn7HkQLFZJqCeVoNQk5YKMHKrKC1CApJGxnxJEe6MYRgG2sBBPyuUGEyCn5iYruQhNtJzsf57UYQRwxV3FVg",
  "key23": "3et3A7bLX7t7qYtuqT7HSUxT1sUNSeU9QN7XDdwVWuEL8uH9btPEt7bERGjkPG3nBuUTn7eUx9oJAWkBX493ZpGd",
  "key24": "2Zj9oJQaoanV8WF3UbBSaYUYbkEijtahWfpuopkrMkhT2bHUp9eXtWqhaB5tAd92JCCbPSW8bZiQYaYpFex6znP4",
  "key25": "6586zWrNYa9oZTKE5C5uecsRD3zcrPxntr3CFZ2BwoDd7seFiE6oM5r7oS71YiQDUNggmk6s9DxE3bw2vCpQvmLH",
  "key26": "5YnQ7kvTu2G7tWNKaRnmajewucSVXoUoyD7TxYoPgmASm4xoZKzCwZ3Y792GbaSdkfCDMKxUJPzYgQ1XP1R56qVy",
  "key27": "3iGgJiuKJSnb5MkAovsLm54Q7p99am4pfrbeSM9pZ1mihQLTrjaWRLuHAkmSCVEbirTZRWZedhLGT1AEhJs5E8Bh",
  "key28": "k2AEHRjBeVKEZ48rTZvGnNmdMSHrZ47gDt6iqTJDF1baQBh2HqXUPG7XhGi9FK9nagZz3WXbb2CBo3JRWe8L7je",
  "key29": "4r1h5aJU2kHSRTMSgSVBA3SVDhUjsUMNgYDQK2XqKfJLugmj1PMb8g4jrphCByFaseR9FnFuXdf13UcvLXWXkJB6",
  "key30": "4KC93MJwbTdGMrtwqK1VG1jgWCgtVGG9XuBxDYRj5uicCUoDrFGKkM9A5G8hG5nPUFcAp4dD6gQoqDi4KEHWbpK1",
  "key31": "2XqdozcMhxTKeVvzdpEjNcQNqvuPZcFidc9aYTfDVMUwQjEpEv1YEQRnWNoDgjW494N6paaUofWMR2YSzejUFsbW",
  "key32": "4RgaZm3jw9uusdDqhGYqZd2N4CGpwWm4cG7Zkqc3ev2uyTjXwKxn23HNiXBaUHegAv4BDkeVk5GCEPDTnv3qXWNB",
  "key33": "3U9cUkre1uiN286wZkUupE6gWJ92XA8iHmx5NqofabHN6qhZFf5R55jDXx54ruZFdhrF71bYSxuuxq4D4JGK2eVY",
  "key34": "5oG4SeiUfqkxos6TMUCVnfCQVbaR1ebbBaadoLB3aen7XHnqE435gpJ7YGx2a9uPtjnoGpDVUBc4LLjueV96iooD",
  "key35": "4YfdT1SnmYHrhKbrC5upA1wfeTPBH5siNUH2PRfy5q2mi5d6qHEJ3QTDiotZyZW2HxF3ttcgCxDRv5GEYc9HrBWy",
  "key36": "3BfufcfDpB1YCiCUoT2CtiRgtXpxCCN6dn9wu9qw2fsaFnkmTYJ1sLBjoYGLpVSdovVmb7DDoUX2UCr6JvMo7jTf",
  "key37": "61ii5rCFbwG2X7Dm7fexBPWXJrozUdgBLsLsKmtjG5XbgTa6Fsb1dBURX1odxmdP1ZqShfbYJZiiFubiZ9qTeu6y"
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

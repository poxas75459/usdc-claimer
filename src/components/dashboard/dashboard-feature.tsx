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
    "DSDsbuuxUXc9DzJcWLqqZMtbvNwAWznVFgRYKY9ZgXSB8HKFfvV2JZrFBjPjAtHZhhLpfQwj8sJq7VamLe6g6pT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUjYnqbUJUsnFnEHt414JCFwuw5AYnmGdxDSvJF2gKjZqmT67jPLp8b5vbhdfmYU1x8eC2vwq1eZnCSFXBRkusE",
  "key1": "YxH8BMnJn6zZEro4qFzTzjVL5Hfjzecp7UHK8o5FAM3DhUPdF9ViZm8VY4QWJdyvyNRXsfN8cmYU9VqSVNoHJxr",
  "key2": "3hnaYNhtzeC2Q7yegL9QPHzwYAVdVybLcxsKwZ99oHBToTz8L6utQwXjBsiMuB5TnjvMYYCPySeDvGFgEPo1wHVZ",
  "key3": "2jXaux3cGAmpHrAEzJbbDJJQQAvwKauKjDqL7LQM1cXG6oR1aTBo75r6j6EE4A8iuzCyJm9qcGgwpkWrJW1j6SEx",
  "key4": "wJ1BLKffhXWL2MmvfjbbLSSZiVpPZujz4pSH2PHKTK5GKYT3Kf7VjMofYP7TbZjBgC8xjjFQiVYwKC4QAqoVATx",
  "key5": "4YrmfwaU7xvqZmnA114WS7aBSmpFTmzVbMLQLAJjBDDrdg1HzuCguyTjH4djdZTyGZiC2Bt3kS3hJdUQgXDDC2vB",
  "key6": "xvZ5xuHcVKyn19gEzj4mpvAsVk4etB9UjYnMN1VH1vtLEVaNoB7nUzbWA4P4S52ru8JusokBzB1dgE4Z1C1vxB9",
  "key7": "3d6Vc7ChHTXMNHpshUs1AAkZoWAhw3FiFjjEGMAyKr8BPoaHs3oYdKDesmXt7cvUPtZ2cNeN4VsBgcohWEeKYZtq",
  "key8": "3KsDGHggPrPYX2wkVja9qnAN6HdhCaH1VNKZx3u4TFfGJgNaDNivTs1aYKQS9z1iMXsdqSb92Q842ejJ1XMH3bfJ",
  "key9": "3hVUMrG6xpEEqHNPhvfLEF753mUsLtaHKJBhyDyeVQhh9nFtxz4gJcwAc2A8WxAiCLT8CnNs7dQBZsocVYe7XFQK",
  "key10": "5kDNTGXLcfUguQZPR42WaCNVzW54vXwHCZDSpi2kjahPYmL7JnpjDnCsQ4nVUR7nrwg2yzW7FpcZ3UextyYzXLmP",
  "key11": "1xpyrcYgiEYetGCHmEYwmx4d6dqtJsRrt9Go7ARXhb7fS5zSNTzC9WMoD7STD9Fu34QzbKnUwcudJuTk3PpVsKT",
  "key12": "xsVGT1LumvPnn7bATq88kY56SCoky8oXnxS2cQfacQ2gf58rLEtcrNuYJg1LBJWUhjZYxoKWhT6ZH9Xh1RRGmss",
  "key13": "66o2qxw5owmp13H7zic8ricDDU2NwxE37zh3CdRLouEsocMTLuDG3nRmbfheWZbqLzRzkXMkAVBxX4gkxbCbmcon",
  "key14": "5bzWuVqhAe6huQnPksyH97BLUXFdNYqxCK6Gz3mURxc1LUa67ea4ZZLJ4eHpTc9iECsxTFDKX7otWmRpz1PmuJKh",
  "key15": "4FCwvX5GbV7W4qAVQVSC23vtEHbPr3EWi32hKKSYZ71tFTL8Ktw3E5bvh9SQ3EVXHBZkVsx8KdKhrqV5Jcat4Vge",
  "key16": "5AjL8nvMLQzWBrKLCPUqtNueoifUt2rK4KhcWeFLyBzP7r7H3KvHTiXSXEiLn7y7yJ1nwykxY1jQooFV7J4Fyd5D",
  "key17": "4mTRmzXytxoJiBPnAgn9kWAwGJYbsTv1BHGzdgYiv9CfrhS6Abe8GSYZWKcRvxHugfUB3KqSp34QG4ZawHZAmySP",
  "key18": "4zzsRa1v3Fxuk87z8GvMJbcoG4RCReBvf6zQiQzrgTHPEvZWBj3j68VYcFnZyq3QXZDWTb2suA2Cd7YWkLeYNnrb",
  "key19": "YT6iZcUA9QWeE6hBFDLiZzJhboiCqwWP9UxUYN5ZPMkzqRL13XVMntbMmkhYgpgCzeHugsAVv3hjpayUzPRQS4k",
  "key20": "Cm9t2Me7nkv7iCzNvZ2ag41FyN14VRgYvHgSv7FPtyQh6jyM38v9pNFTKxJeu2m9KowiXYxbsssB7MCSWnkjjmC",
  "key21": "52EezvV6V3byZ7cHCytPocZfdYL6agZ8r6DvS9aWLNHzCQKoke7cG9fx74T1snkijz181XCb8kDeA81paWngEXZR",
  "key22": "5P92uYLKqJHAwV1jfwNTjR5N1UfVJt5ixg8oL8TLNoFy28ppLSpb5StW5v6yUVrF8L6FpnD6qE7tTnpy2RA3td4i",
  "key23": "3P7EgXt6eAyLiP8yQyqWYYxTxAKc2AWVbYKRK1scVN8i7HUZvwPFSBUE2hs9DSpLr5WWJvPEqdjLLfWpradEJDa",
  "key24": "2nGTusuBDqGZhbM38kvYWFHicDwouTRwk1S3tTxq7WM7M67VAk2SoB6HZZNcrApm4iisFvnQTd6BYrrh3erVzMKu",
  "key25": "b7LQ1qh4s2ZCdga8PcZWFdGpRdhoEsb9aom7cXqsvteac8JchYH5YiYKWDx2eNhkCnwejRTKjuVoVzZhRxZxU1H",
  "key26": "2jUFkuDFPeeLpRQsUHtNFfy3yYyHBvX1aLzmhDttgG62TeS26Nyqr9SGPYY1kdokuu7UPYZ3rvSqR3C9Cyhb84e3",
  "key27": "64UaqpxMPQSk4UFNDcEvikdLMeqAuZhgNsZhxvHtFuiajraq5uDMRwfKR2iYMpE1scU9kNsucggZrwobMhWcz7o5",
  "key28": "5rmGN4zY484bVPnaf3GopYu7Km4ZY9pgHsv2qCad7bq2atDXzhprswyMi394XgmWjoSTW1kgfFobEeChuXhHi3yj",
  "key29": "4Qraw7NFhRihJSgJLX34ivHFVtGSmXgkFrV96t5uYBZmYg6XH6uCpvaQYGHgTHsvrnS1G1DWt5Xcts8uaf8jNQA9",
  "key30": "62fNvQ3wJJro72UCtKdnzN3MBibsDZRuTUYNbnfwqv4QAgRXHEoCZbMHP3Zd47oZ5xq1VwYRYQ1BYx26vSP8M8ny",
  "key31": "2NakN47bDDiALxDDVZsjVrPeopR1dQSVrXwTeJV2KZDXp6qMjFXSpNi5CgTpyQVCv2dF2PzFqzoUbKBKdZhRREMQ",
  "key32": "2Ncpstbtfzwn7x4JwwXopcT6rN34dKCY5bbE6fGXvqMWWhm5cPuvxYf5RCAKE1JE7VJC6Qav6uHrFGT9q46qyPr3",
  "key33": "5vJHrz4erYfE5W2cYmVt5rsmo9d7rFr4cGGk2b2HkUw9WmKTM5e2RqxVzNkyPWuHVCurS2CWg9dDXSgCPDuHGFD6",
  "key34": "hvtFZQpWxeevQArSHXvDDDU45LakZPwzVQ2gujeAcFp5sFKHvmG5JsTEcSpDRjaiq3KfvTQtHJ6d6wWKFqssH8L",
  "key35": "C8K3bL2whJ6Sd1whEzSrshDUMmmK1AVmM6B9g3PEjaf3RYg2tke8bA9QR2Dh9vfFDdtJ4P1YHgRSGfXycy4LPuY",
  "key36": "hPennzDBpAHt5tjTcHNopoLkkY72PqQwtukayJiEsj41Yau3VsK9Ay8ZxtEGTGmdDvCcvmXhMvkiVS1y7meA9nK",
  "key37": "3AgoVXnuJQ1dK2xXUuuHe7uFtZsQGpghPNJdWjrZTFeLEuy8CSZ61zcGgyBdxTRFzVqhfJwFs7pfBk98szNoeaT9",
  "key38": "47Sjvszj8SKog8KpeN5rMD92P8tDNknAmYu3TPn9drSyqL9yH1bKRsPVijbj68PEbz5dKK2JXT9nwQcSppcdNYBw",
  "key39": "546CWT8u7wKkeCNQnfa83KKtuvKSahhffqKdXZAi4fYLqwysmCTQYCc9vwBSNRHX5ZN2DiVZNtCiebd22VyMMesa",
  "key40": "2WoSJLyb9TNAgky6HxmYJPJb2mqSzMAGjNXpiUKVagu4saz15orPvWnDjgMaGUsDS9kZzRCdCf7SN2U7swK6zF3M",
  "key41": "4qhtRwDKqG548GDFMVjoFvv9Ptys21Jxor66ETZi1wGwbzhxEV2m6PijytkxFZuW2fi3FWwjPZcSKypQAS72vHG6",
  "key42": "3R2YjYZ51LA2pvTgSjc5C1e2A2986h95Zxorpce8u1naPbXTnRmsUQw92HzBHFo4XCtu54BTFp3Mg6aXDZNQTLr",
  "key43": "2cuDU5PKFfCUT1U3z6Q5h7cpkVNbMqmQrXFT6VwZRE6Kg6B8tGYUCj8hG6uhAcJcEnycLF4woda4zysApbjcVSHp",
  "key44": "GSqrFgJsHhMf7gBsxiLKSBbhkYtXR1ikHq2DdiqJWEZFhzGcsbCXKJPnBcACeDGaneXmenZEaYuP3NMdk9FkGmt"
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

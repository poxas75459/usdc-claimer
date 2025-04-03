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
    "24CAZRA2ixPVnKqJ3LDp4p2Nq7Stx6RSBiqPy6cyH9Cea92H9926Y4GxoQvfXFjeafhvGpF8q9zUhw5QDWt5WJhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFPfte3fXoZfLE234onPd5jedL8KzRvoncLY9eBWLa4yMSMfdxkHy1eqGvJYQSsDyZMj8BcKnhzLZ5oBiGA2nqN",
  "key1": "4mtUSy2f6JWvhedXLxfCJg7U6BuzZj1Qf2stYUEHS9n1oP5KpkFiCg6oNf1B99HDjvdVMqmWC3Syovv2HP5h1e44",
  "key2": "qa66RGKbQmF5ijPobiXQFoVHrqiZpMDCfsMFgEcXwKvpePRviBPJCELXLSs9WKULFbmNwq6cGBA6xuM2CY9GA7G",
  "key3": "4eQMLWNL6hDg1UHJjXwADRDsDwGfaB9YMnQ3abbGsAhbJPS9Jig3DK2FydbLLAaK8Er3mv4WfmBEck6fMj3T3y51",
  "key4": "3SudMkh4g5KSKB6YAhdmgHSmN53GbZt5cjCzSrz5mHjMNkJpyd2otj5RoNxnfCjQU97dmFUuBWsrE8N8URjdppbc",
  "key5": "VVErgEySetV5pAJ1yY4H9WqMdaeRuVFy87XHu9XKdVQWvp8GZSoPhmRZe8RtyXEFPVLgJhC87Tq3rW7L3fJgLwF",
  "key6": "3WJ5WDYcvRp6EzkkUg5R4YLmczmPNUu3A618Z1K2U6ZTBU2UENXEAoNW2DhDtUGCR66FszA2Aw8WFvJnNbV7kwU6",
  "key7": "5e74BNaDwk3vBaFJVbht7mQGXnpjHMyFeTUnC66ojxtuJkyUbStabPkWp99LVbuMcmS5Ld3mL3FnWwrckK331bDF",
  "key8": "4ywYLLLxJPtz3XgMyDkJADnGgkeJLvTGuqFwsodU46nNrfJeVtCwibquvLKg4Z3Xj2uDEdMAK8Ue7WXbCY6owvoz",
  "key9": "4Shde9cT9oGjqYW817VAcWQQm1AmCkagWJjXLPVA4qUSkNtXn39U38h8vHvSvGfVKWpBAjmHbW6FPspVYYAsAesn",
  "key10": "8zQX1orBS7Qpm34XKema83V26NGhRUmZSpGp2ZAADMnGRG5AmjYSuBHnjqtqQEXPhzd1siZ8HNcKi3mgMxf5Hwr",
  "key11": "5LVdpPzv4QDfZVgyPXfymVuExFabkzbvkHL16x81k5HRXzp9ujwJvfof521KHbPw2Cr1EQDcZVxycrktCnYYFHiN",
  "key12": "2KV8EXqNoYZ1ZA5tC3goF34iLP2oWKN6UUjoXHoycP3gtWCfN9CB3TK5xYdaNfC7S6oAyZ6prjiVKrcCVA2RBMDv",
  "key13": "2FwaCvh3MfgfZMxihzEftzVVN7t3zL5XYkh8GUR5hhrFX2bnC8KNYweiggCL8q4rie2FCnHRiSRCi1KE2Z9qs49u",
  "key14": "uY89nPNX7vTF6Do8frTzm6DREDVegNKPU7o9SuRdhL3oFqPRxvJF5epBPdL9sCunA1qfMw6xk19MYqbN5HjuUPZ",
  "key15": "39C69Rrc5HenKowYh3UFq66encK3sgqV3hLdnPfwDdoQw87eA8GGYcuFyvFBVJ4pCENzKwqQsREsyEitDTbsh4zF",
  "key16": "2v1Jv1AMu6TgvkcUFs5KUhD9tPD5cwXS8dGkL2U8XxYsnh8WVAErTwvkpGVaDzVig7Q3TuvFfdVETYFVd12Qc9bt",
  "key17": "33QbwEnkHFfMRwbvjF1JTdRZWEe5pq499dFkopCspL8LQaDNK5A8ErdwPoscHGHthdp3MJR8ZfmKxik459aSF5eT",
  "key18": "2hg6o6jLdRH9uAxrw1cTSmkiSQEELfpczQz7uJAkghkXK8w7YXSohidzkC8tPW7fh1pjH3ZyPrbhRxZxfq8Y4UVC",
  "key19": "4eBhRUyahkgzkmWCm27NCRyKqvWktuTQbdaj4D6SwwY1PW9R9kW3zh37xPtSxQQh252R6mzaexZ3oPVzM94sXhck",
  "key20": "4E19q3m145o1D2iDYYScKwtZ6pjQWUgMRZwKa8KwDvCTivMSy751JW1PaEUV3JiSnFAdnCpsG7638F24zYpohebS",
  "key21": "4Azpn8BHv8yP6WZD2pZkjmR8TeXsBsnV4Kibu67zetd5rWF7Y5v8bnVJareLGZ1i6Cg7e4JrcpBYh8uAhsJtogGD",
  "key22": "ToYuxsv5jhHCSgNWpsUyLTBqxkBkuS1LeHZe6RqJ4ofu76M3ZwDGbS6QgiAzAQBfCqVoBppV2g6UcjrL3bgfEUb",
  "key23": "5HP2m3YFZfYfAkB1eQGXBMfnweWsQeEeKPE2qcPFMrqK47eeESjyBbqTLZBqjggqtyWM3kXKdhX99JE5iu16XpgL",
  "key24": "3yiuhYDbAV2XU5eEkQHG7idMRfzZqoNGnYQo5R5cLpsK7yhuCxGA1g2PKSnqNB7N19c6LcZdNzmtVtsGUafHaDif",
  "key25": "5qAoNnVrE8z2AqWfrY1RWizFBwzTMTmKJuz8togxpKWeS3vkvAfKKZn23KfwBXN1sTyAco6pT1dwAyURcYJuddRE",
  "key26": "27kXGsLxYDtBccGbWCgRgmEUE3Kybn9bCFeeUu2dbRNNNXKmhZwRmNJUCu63HePNHoaKMdrUd2xpPkR1M9drvV4e",
  "key27": "4g4oVjBqSVqXH9fNXs7SGSCMqAeszNtwKEvpyMCXCxEhqzQcYTWQgKEfxPCc5ikB18HFMoe6oCRDmTQrkkV7GSbH",
  "key28": "1UdtmswjSU7DVTqVvMT99L6DT6SyvXNY5HCiPM6Z1Z2HZ5TsML3vxf2Evm6mEfJZKxYbGZKR34gRQ9uH6zhQrhy",
  "key29": "DX1YFBMxTVUyxr4wnYSPbKDAefGdjihgiJT7rZBCHcXotpgBpeNd7wniGKeCN3EPtSNfVPqJ64go6Nf3TUR3k3U",
  "key30": "4p5c8ryZduwmbZgJSos1mcHP8Xpcp8ac12ksbkg8xf52VAvtkt93zERCRWxgTQ5jY2QSQwEkWQZuUHaykFf7ivud",
  "key31": "GX5qUqY8zWyztmvFMN8nYpP9FUH6CtoFFt5rp3Q2aP33qVFQMWRmkrGFhhvG4wF3D29cJuJRjKYti3MFQULyJmP",
  "key32": "3od6d2jBgkdNCDZoxr9LCjH4ysoL4C1VGj6QFmpUtMLZzo4oU9XKcWZLpuoi97yf5abqaXrRNWoi5sizf3TFRKkv",
  "key33": "2cEski4AkSeXXrt29mbWLAsN4Y5JdvCPUSK7xxaU3R4VhYkm3SZ7JGpYpbjwg4jpdMYM9tjkJ21zBG1PktpcDiXB",
  "key34": "5Q9GPgWyZhomZrizcMXTtBLkTpkkfuuX9k8Jzaq83UAs2DZPJUDr3eyExEDx5PKkYpvo5YtAAFsZhA3qxHr9KyEq",
  "key35": "4n6eFV2bPU4B49DCFqY5uKrnoeKA6t1usBLhiFHFh8RhUQnLUfQR25qBx8cZ3aEj1yqpAMAqzpZ7LpzHNJfSDTPH",
  "key36": "3s1LQVSzCmLfAjV7Rs1sUVnoDpoa3N2yd9k7gkAF9xKNepH2f22UiYRu7xEzGrqWq6GDxF2W5S5LWBQoWciekkfR",
  "key37": "4W1adw9WVjBhLoBPVTBzjnv4AHHyQrW2WPAr14HgBnKJRTgT34oFV833d95ogW8Sb2z6EqSJWHzTS23Pu1KmPtoK",
  "key38": "2bvoKoYdX2maZNVsFcjV5xBGLLtepFXusJHpwPMBg2D4x6ExoqRcUAW3pZ5w6BRM5uCg72FEjgGCbudgrCwdyLq2",
  "key39": "5toRkgRUwWQyjQSA9PpttAcU7L9tWdCt2Gqrzroj92Am2NX6pxouAt6BgiMHW5YWapfj2ZHR6fQ684kzkCy19ZHp",
  "key40": "4B3ggyVWHFVy6wD7MnFSp39jxuQob4GV4fvpbWnnxn6emX1MN9n35S5bJ8vkuN4y63Fy9Ehw7rerpRFPFQFKFh1G",
  "key41": "3sKUbCQjR7Jockq2Lm9QgtUaZ3BbEicxguhQLkUqhrXhpPqeqhqHBZj8DhbCi7qjVWS59uq3Tv5jk8VB36MtZ7b1",
  "key42": "3bkygQjTCqyduBw9KAyPMpYvc9CCSqRe3bcWxry1JLhK9EZ2JEQ3phnDNGMEBt1qkmSxYLg4iHmxxetfXCNs3ngH",
  "key43": "2im1iH29wsr6ah6LmpFquD6uiNeedspeXKBFjKw1e76kHeLKhq214Yr1vJD5L1dJLhFavee2tYmgzHQU3NCbULVh",
  "key44": "5s64ypaWRBqTYsr841ce8kCZokr6TW6H5bQzrQSXJ5ucjgkJQ2mdZU1DSoMEAC8CEAEDYhupZJ9gE8PmpxnwJGdY",
  "key45": "5iegbhy6oFaKfw7BG3Wpmn39BtXU8DFzbgktgaXx7SBrjP6gSPK8Hzag3nZFrVn7hShqJ7X4D28fLJ73k8VnPwPa"
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

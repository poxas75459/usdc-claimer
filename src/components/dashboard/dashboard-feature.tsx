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
    "cxabbmEEk7izriTY77SX9avDJnCXfp6t2hTf2VWvqTGNH1gvqQRFExnso4Ws5cjkDTF7vuHZxSt4uHXg923YA49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APUhBGYa6rESbe5hxcdTko1f4AidCJVpLHNwpN7tXeCdoM6L3xvvHQS7LGMXB9TTSiVr7PjFbs9Advh3cBM81Wr",
  "key1": "4SVAGwUd9u1F2Zic8S7uWKFRJCWBt5oNRWEtmbfUv8uj3KeQnwsLz4J5USbixSHukv1f3c4ftcDsKnDo47GzTeSj",
  "key2": "jjmC49o1BvGVqkR4ko5gDmkYkn7BkFh4NdXDebnpdzcH8bBgv9sy2iQG4cF3zcEweUBUEeQwRAoqW3ijDnvtdVn",
  "key3": "4EeRoxqJaq19myCraoSWTGLqghJetvK9SNf1ezqbJT5KMyZtCufm5NiLDUbnPz9evScJiM8LdnTdnhnCKj1x9Jbv",
  "key4": "ukUe6rXbzaamuGznTRxzB74bfzwd1Gzf6VRQSfLRK4k7Toxd3Gtbhf9vM2B9WuQKFz4GvTTJ2xBjFxtVGTYv3yK",
  "key5": "2iQu1oCs7pKp34tJ2hWFi7UqVuVbKQHnrZWrAKujL6hfdYacpDZTqMfNXyg5CwkSZHs3cqnkieEL4kiVBYGTPGf4",
  "key6": "c2aZppvUNHzLwoLdC7Caqk6NDMM6wXAEWWmgu7Y1hL9jnJaASoRwVaeqs2GkMywnsWqbEzjttsrTnmcrUssvfCS",
  "key7": "5qwLh68iLVH2icfzov4oUdWPHAnjho8n6dw6zTBY4Y8tSEeaoHZ8ZLGz4AZz6XC4FnbBCsNU9A7WjMxPMk3fHTdP",
  "key8": "2Bvx4kfACsb6LoyKx5PwDXhvJRrygW1Qdh19ArdsSgWJJRfEmKTZRTGBucRdaMiQb3mCNw57Ggyj7KZxqcfzycvA",
  "key9": "TX27cdkZgDXnV4WUfndf9VGEB6SrF9SheNZoWxNi9qU6yJf3YfqL1NRET8PeB3YR5L8ewbA7CWCY4tP3qxU8HCM",
  "key10": "2shuCN2eq3DU2KBqxKDB2m1BF7XSjN1ZtyW9FYB76J1TpsYHSvHbJfUsHKL2abTfTdE84gWdQu7jrWAD8EiuWXAh",
  "key11": "3S98DjzstijbwyLT3iZPKyDKomjjsDkE2UZHqMpi8mSM5oXRNhHPnpGU5CtCKAsXyd4GTkAPjWPiK59T92yHSFJT",
  "key12": "juD958aGWF5WB6WJJRj8NbQMBp6EiqCSjsXwKL5xTCPUC8ykKA6rs6NJNHi1yGU7spE1wbbWCjbAhAX6Stu2epU",
  "key13": "4myKu1Tbswgg385s8Nwxg3UQdxdyoJuANPsY6K3q9VfesfNqd55jaqcVmnsn718DWmLfmkXqXtXpqAnpgNhK2js2",
  "key14": "vXidGrDmoZKYiuh8WJz5BSBKoLLqDkSc68pcygncsQGBK56Y2vskZPvRN4kKZ8yQ9DFTu1QprXSQfuoyqQGJSo3",
  "key15": "3NWaR7Q76WrGbHdJEGDEXDjmJEr5Dgw1jXMPWx8me1W3PrafSszqaLnCqWxvzPEF7CL5e7RUggm23rgQU2Skv61M",
  "key16": "5iKByMd42H3LVNduh3aCFZ7AQ3ZFkfAV88LKPUrZGJApf8SeN4W4DD1n3BVMfEFvzyy8RqSS5ZEqYDaU89zp1JCd",
  "key17": "2ooTq51qC9VKCeffeDE6EvZKForHAyhPpuxGjZU6ZYjdC2uguqFgowx1i5FmizbvPkJQop8aX9k2uJqmp7BeWPEu",
  "key18": "47jyaC9VfcC7L9gK7iN1ZHcgFUVDcAptGSFKCVak6Ro5qmhcGEa4EDpznVHKKXMA9AZ7a21uWroabuhKS5QQ14sN",
  "key19": "2bZWJpzjY74dfK6fSM9r8wqT67CKW5KtDmLo9zqMR3VnKo9UfTcuM37fZ7Q9Ehbt4t6qf9EaXUrqCzPaJ9s382b8",
  "key20": "5xfUJ24sqQ31pEp36jjDjUFnmReNRxigGx811SM37noDEWeGonMRD35n6JgBo8vFFqa1VuQg7Z7cat9zvw4nsqN",
  "key21": "2JvYZArUEUBzuEy5Lyv8p7AkrqMZ1bGN3uy6YZznxJ7uT73Jmu4fnQmgKaPFwQApbVrPo5EwxR6ET8QH6bkKjPSX",
  "key22": "wdpvCp99Y93CRhgStzGgjfiMC4rEn4EmbduyWdTEmKAexRxBYeWkcsrReutVyyv4CCEjXXrYJWfQihpDh47W8PH",
  "key23": "mMfbsV5bX3MZiNDVaCCmFS8B1xT1XV7dUtisM6aY2R3riaEpWJWoFjq3AnUHBBvSiJEYyL5mW4uhLkJM6FF2wsq",
  "key24": "48bavCBNKDRWQEoBsjWK3M7CyiHHcUDpLrajmyr6W6bxdGJXHhQx9UbMLG72XjLjGQRGoST3Yoauvc9qkckK7bjM",
  "key25": "4Fj6ENCL91xRUbvryg2ftQ5E8DNAF3mmpS4TajfTEn4bRaagpFJ4qzZDn6BYSX6mLoe9kswzUdFxH1w4TgTZyLEV",
  "key26": "3mJJ5BU8Q9NyKZtRS5R6Zb4evKn3tuD2bk6PTBdq49YmNqg1M913qKErCM7AECqhXhCfsSx9E7XLsNxTrmjC5Apz",
  "key27": "2smDXo2XaFnWgUWoh8Pjra5nDcHEKgjn51LaYYxWGwkQBTvw1NB4dP9fFzUiuAV2DUSMC7REm7xBeGPb4ZVxoh5T",
  "key28": "4ABc1ZkiUJvivmHrFRuafaFMkZ9RQqdcwXeNxe1bTaUpa86GhBnzpvPWhkTXZRpL8Vq5MJGKnxXur4fUbNvLM9XV",
  "key29": "3h99WnY8h2jHVLCmVRiwY5w3219nxpbxWrq5XrygokjLMfp4KXLvSowCC6Pu1jJrKzJXjaCs1Bg9ZMGGYXoiNWut",
  "key30": "2eSgTcndnTGm8NSXxDxkwpayrSsPGH42eJMFAM7vr6tLLwNSUb37r1cfuxgk4WhAKmaRD7NoXEmMBm2r7unpa1wS",
  "key31": "tShXC1a3pNsRR47MCdhKWRQr1mQdXdYDYtq5e6apfeC1tLMym41yh5HUQrKJBWSxsb2ppGZsy1S2vj3d7QFwchf",
  "key32": "33NmTR8vxFkf2qyfgz3kpKE2Bh8ucEZbFuqaaacFrgxN8HRzKPJ8V3uL6RZrQ9Dbx6CpyycndgFUc1xCKX9PWK5R",
  "key33": "XNMFCm8nutQMKQTzbZAzmV4v3WQF6tsHrBy1JBkYBGtfu6yk69f4z4UXrY5nTNdfZ75ZE6JdUaqjteYMpk7pA13"
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

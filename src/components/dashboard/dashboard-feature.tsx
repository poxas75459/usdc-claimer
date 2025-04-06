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
    "m8Ea7JfxUs7vqLJiEGK1LJCJi7bsv35ZHkq7sF22PamEDzNT8DCU95GsxzEW3xZBsA3LEcaeNf5DkhFuUu6bLT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fp91J9fRL9LfN79dcTgDQPE1tTce8E1pP9eNmMtiwvDZpEbFBs4qqeW6BMAcbwmASrapPvPw9XKLAEgueNe6oRV",
  "key1": "3BNqgwLnkERkafo5M86zGrv7vpHarjozPA7iraUGBc2FFfYkfwFUMYp1KN2YSC2Hd4ytUVrMeoHs6Js9LsDCAy73",
  "key2": "3Prnu8uPaU7ho8F8MTarmRbSFcAHbcDhn63bi5zGXBxRgtajRxi1Hh1pYRweyMce4e2SkiiUC9qtJo6aJPhBeq7e",
  "key3": "9Cci7hUQ36cwVpy6newqfgrMQrLAi8RskxY6XZqsJfh9SD1uqkBu3FXbNCRdTNKvhjAoRWzWoK5kkwqCxWFaYwA",
  "key4": "4ua8eX9ZBPLArkRzD8BE5A8svJNSxrf6oo41srEGUjb7BBB6W924SLGuU6ETFyQpDDpdepVRww5UxaYjE1iZyAEv",
  "key5": "5p7H9jYVaq8SEcCoQs7WsrQb9JrzVX24zWzXgzDrnPp98XTd9WPcP6qrh1VZNYdrwHVs8tF3bWEQ7YMXgUwFCAFJ",
  "key6": "38Wx4oixF31Cuoovvrjgyw1jiQs96DKFKESYhgsxCwxnJAbbhBhd28wr84VvFdNSznFBNWWFvRyCst2iBa3va49d",
  "key7": "tgQJSCBC9e3uuWhbp7vkb5JSPZM5Kv5XpG1imbHV1dh8W32Jbw1YCYVBq4xE714PnDUrAGTn4M32QhPGYuVQc9d",
  "key8": "3h2f5AztPpsmrQCCBgChG6vXatyWakAbdpBdzepvqDNZeDTdpFR3XWbZUey3sqAhtDDi3z7Bp9QESxE2jgEMzp6u",
  "key9": "2jqUkbaDfKfavDGQEXMaERYBgU7Csb4DU5oxfFoMdwkjCMSVm7ix2ncDNJ7GrqenxtHMEJJ2KEVEaZxJPKjdpCX9",
  "key10": "2HF3NQKsnTt466uJpTqTFbNjbxeWkSWfd9rfJqhSwp71mWue9nBRFF3d3P9wgstUtQ1mBAPpQp2Srpm1bWCM8Ct5",
  "key11": "47RSJLjEF4MGSDe1SyiDX6zLWTPWykR2JASPUXzkVxd64wU4YdnN9Px74hnJC3J6yk44M2hubZzgAQKzp7xTJEVv",
  "key12": "3HjJtJAm9VFcehY5FetC6ZFyBQJ4RSZ7sQdU8ujFzRpFJEdXkFq9NFBa36oB77fnWbgVsuwMYYXTgGA3WN2k5jcB",
  "key13": "3jgkSJJfCoBB6xzNpMoxDCC6vQmGC6zpP3AisTfaonpHyMhZyu1zqrrK9cngCUZgxEcry3JE3qJcHCwn2E2z9oSf",
  "key14": "6FvyDFL7SThEttQNkGW5v2cJ2Rbs6w924TLqXkxJp84V6juRDsZE6cXhHcsmdJGAjDDt9vURQNYWEemyoLZT3Bx",
  "key15": "3jquG7xMvUpWM2NDj3CtJearPD2TSpvULMKSXd2HCnNGYFDBiyJNK128HdfcBmazhBcEY97grFEd69xKSvChsFTh",
  "key16": "61PFt3RLEkFetm3yewpuRboghVaqT7cDMNuJp1c1iexXvss8grE1ynfnC27hRCTFjz4iFYiKKkWVufSbx4PtojF8",
  "key17": "3cvYrBjQNN9xYxiXZ6d6TXekUg319imqTaDaDoHt4MKhAu3gfEuscFepjx6Bs17JfxcZ6uVdtpYPUee331bYGpYx",
  "key18": "2Y72V1w3UiuqSNmm9HJVvRSYyo7gNu2fynQuyKSMDLWKuvkuwHL2sfbv8ZLGYa5MnbjYxPv1KnxVHT19mA3wFckz",
  "key19": "PvtoWyrZftYgCdrSmp1wb4fSaxM5xxGjPsEYsUPmem88XJtWxrEyAVczJFny5WDc64E9rMNghtgPk4D21c4H6Zu",
  "key20": "3xMGW5LtNZrvQDcePnXEgpJzjXpVdHqiCcfXaMir975EofKY6Di6BA8x8xvXUx1Xt4xZ7euecRXkygspGrTjSnvB",
  "key21": "5m6LGPUtPhxwemynJsHW1Epy79LdUx7bmcaM1qjAUUkq6HoGCjH9pua83P6byUDhDWug4HZXLDMhigmq7cUx5Vfo",
  "key22": "2NFnuN8iFugz1y7LwCovAbNwJRZhvnGabMEqJgka4wJG6xPGkvcufDJMsUsf1d9SfoPbCjEHEbc8U7crc31FNFVK",
  "key23": "3gZpnaDN9ibuyRdiiQsnsyHovTum7wwqu8SXq2fefhdpRJXebcNHKyGH6Pvho7wrga2rpyXCd1SSnqXKYgEBfkK2",
  "key24": "5VRTbkcyHfGrmHZp5V8U9huaM3cDUdSWjthW9fKUhLipJ6qHcbCxCMwc3z29bNimNah9BsPd7DDERAMTRsoYRz8S",
  "key25": "2iBGDBDQxBjQxfko1tLp4sA5aN2F5BQmv96XpRQeLuLfa78pBB1EbnQKG2bJmLUtFG7fGt9nFwffBZhDFfw4nx3c",
  "key26": "53omBvDnvfbaAb1rg7NALcBwJoXEizGVVYxbCeettN9SmvVgjHUpgJkoeNFgtkymDPTTZK6DCCfQDEBTvhUKgGBP",
  "key27": "3kWmwRouPEgzmPHm472GiSqPUbHua2rg5pb5hY4zMxKdRD8741jbunzatD1cUH9j3rz7L9oxtU1MB4MYD4PSQnfR",
  "key28": "4HBLMrZhuf9QKCnfQfQjQV6it1GUggJip1MTRNQC8HYSQjFQCHoiJMPuWe74oxTESWg72g5X2wKzoY8rXBMLNQo1",
  "key29": "BV5ZVXh4WuNs7TjWQtMsUwwhB4CaKy9Fn4X6UCcjU77jaAYZyGygGCgsKpV9bNqd1yE1MhXMkvmwjPy6gubhXop",
  "key30": "5KVQg3yNYeVoXADVgRqjfep8Xw7Hs9dBcJC6hw3XYu6g5vxNfJep3TfU3MvRenpQdewp5bXR1Di1Q9k1Cu8trrEj",
  "key31": "4ndeb5oiviSoSRAouBXRRdxVBW3BGSvURPn3ModrKMoC1mBwKcQimhJ9ZjoAUPfTyMzCgnBmrt6NU9y5fhpVmtNy",
  "key32": "iUfpFZoh7euqGZVce2Yy8ocgR19t6H6VgMq1sN3AG7yPpRokyQMeB7iLkogpc5cFVWoAnDNVb5T3axhY1DL59Fd",
  "key33": "k7BMXBz4AWnCSLPEuVRcgEg1HgcU18NBJ7ZtNWocNTqrgWjFF1NGdnCStx1sfTv8uAx8RcayGif3oazvzNEniy3",
  "key34": "4Pjk8Aw4ySMamMSVLKmXjWGFRPp5f8UTftLLMDMuSDfkNkF7dz3Zj6C7aPUUoS41h6qpzxmSuMhmQUKCyDMtxPP7",
  "key35": "3ZCThrjourg9S8Cgdc85yD5h4Y76ogYuYTQFB5DSBma1N1GVci3UiZaGHhCHh4uoT8m3ZdEXJ4TGbpTUtpXeqQwN",
  "key36": "2pJaKGzUR8cxkTFT32MEMMiex1tQ4fUVFmpNk1d2HbTMZZVvsyXsHH7KvmMojZUxiA5STjvhqn8wQ6ffsVusehNZ",
  "key37": "qPEQtU7HKWccGjWFrjqkQTxr3AkrZXW6pKyte3npcotQmX819k5MbrB6mSZ24vuwoV1XDLzgCApQ9cjXup5XUMX",
  "key38": "5GRVb1iUTXXT4ie5RKoZVZ8qb4w6zb9m79R2ULHEEjhLGYiJDxqrhcV7aPaT3td3MNL2N6mHba4GN5vQjp1Yauj7",
  "key39": "3zQCScocHvgBgcbiqZFrpDa2YVYxhnAnhvi5VvRHuBMZUfSrCUVaxw4g1RJ65qZsbdudyjnNpbtPPViUyn3hZmbS",
  "key40": "64X5kmVnFfm6RqPm9D5xVtZ6nUzgMy1n9bAwxQrF8Guq99cATLokFbL9C5UbA9pjYTQpQEYsGmh6Q9bYFf19nxfF",
  "key41": "VU38w11Xs8uUR2X97SZ2n2WTTXSTz23CGqMdTxbFSbeC4hNwZYgyrtpT8Se71WKTVykou4RJh4skkS12fkoqs3N",
  "key42": "2YVxuPALWUMukmoJETPaKKtQPXJwqvct9ZR7AsRresDqhpZ326bf7dBE1ZEYCKQo69aho8D1RBGc9VqVXHJJgdVS"
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

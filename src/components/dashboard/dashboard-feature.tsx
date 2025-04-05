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
    "gHbmmZHE7BkmQew1FXhg8rfkUyPum77mK2TyiPvnfuTXmmKCS4ViJ8X2WQWHVYkShTxZEmKvTyNt5cag5xVx1eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPsG91CJDzAkRg7ysDWJhY115zFzAiZ2Nsz6WRCaSuW53mMLbERqYmYCwMGjZSEZskUSSjEsvBxZRPx9AVBAYHK",
  "key1": "3CiLaGtNpZPsjLYxvVaukHqWTUyvCho2vgecFn2HSKf9CPHfF1zKfChPB9bgirDec5Poq3v9WMcuVKeyXttz6Ngh",
  "key2": "diUdP6NEtrTD8SWS5H1tUJcqg4mKLj2PitWTkjb8DeAoUKksuP73jMxUk3WVzn5eq6BStep9ezQ5dQtwLZs2j5d",
  "key3": "4efgASyHg9Djpcb8BD6FNESaAoSdC9sxq7UBo9Kzk1eJWwWuoETdnsaAAcT1d4eAKroU5iPkhMgHWWZuveDAUEmM",
  "key4": "3g4Ls8k9g5j1znRxs84uAoAQB6RmeYaLusm9K5tQiPRas7rJcGb65bhAHssjLqPdapQUR39VJvubqeUB2kFWmRCy",
  "key5": "CZEDZUkkBG92yLX5S7cd8xXb1h6hWoXdnxHryQci3FsrXsW6aXujiue5mGHPKK3sn1QAHa7Ay9dWqyETAwyZLWE",
  "key6": "3petaEccY17WQuW9M1E2qm1vrhz8gWctp8chxNUXPBMSHTmXMx2nk61aa3LzLMjPwTzNwxkw6RTmBFCGUjhGjUWo",
  "key7": "2sMpg1DUQ1RZYaWtuyjXrENTj6r5JmjpbMxJ3qvqGvXeaX7xRvqT5bzh9dQHtfnon52QG1kEHw6Qe66j6dKHHWah",
  "key8": "4vTRpqSvsrw1xz9LHTSdJaMXQoEgX8e2t2NMt4DF4KDSKm5QDMvi1fQ8JrV7bj5HPxfw4tgwoVw8zx3KkBUtoRX9",
  "key9": "3M3PJ1SwvSLKJPxPxnp1VpMB3eRXeKmhvVR687CFeBU8Jdk48kv4TzEuzrMnjgYmFv8FnATx9KRnBxhB48EQcQzF",
  "key10": "5G7uMKJ4SV6ksi8HNf6ekamM4hf2DCojxN6RBAi5fwrk5L2dHi2dqJWSfK9LoK41qifuYDabBL1crmLPWXGejPAQ",
  "key11": "39jxEMBDDeNaa5psstP7c8wawqZxgZccRxDR97LYFp6F8rKx4XcRfsaEV2sCnjEPNqUetvFphEwbwFohWd2FhMbL",
  "key12": "5o2E9z3o1LoQjou7gsaGN91LCf5w72kt5uuYcQFnv5V6swd4SiJfLjYsBRWwsAhEqBJUic273bS3Lnb3yCraSgnm",
  "key13": "2t7HRv8PSJSVCcKor1NERooRUv1AEcrhU8fqzo2KSnpcmmhF6wDD55hUULxjsjc46eq58iKiQjq6rDmBbHgetaZG",
  "key14": "4ETeJz48Sh57qUJD4D9W1LENYAY7v3FcuNKcnJb5vEmPR3k3myFpbWnDX4KD3kBn65dX9ZSSkAhhZV2H78bedXS3",
  "key15": "4tzBgeXV6sCFRqyJ5dFSkGH7BeVpkAzd3WpEfhKj8p2x8cGpfddrcDUsKe7onPr8NzVAS45EHGFfqzHTC91ZqUNM",
  "key16": "3FuutTzd32hHL5WYYUaif76k5YvfQVVtJqSdoAsSDaZVQkNHt1XCAb34zqpSGYSU5eqSGThhi2XjRD1UxF7Giynp",
  "key17": "3GcMLAWM6JFw1to2timmhmmCqKNCjLnxQahyKLWQLau82GrkAw24VzvkGiAbDGHK7AXyQFkztPkRsbyUtxRrXE4V",
  "key18": "42RehS8qNtbHiateJnK949t2WFr9xsbjzYMaZYpADQcqeB2boH7CVrvSMFb9TBREE2mc5uAJrMez8AsSQUdoazTR",
  "key19": "35kkoSBz7JkSG2bWoLYvw9d7aQTMGt2e9XiRpvLggPsPCvVYq7gS1KgdvQW29TRzDgdPTzK9JBjEiYJM3trCwJyH",
  "key20": "3gLB6dBdKsGrh9c9g29QM9A1am8mfpdaaZbb8o8YhviRJagSBJ3bbz6iygHjJbJZwoKkVT1QPWMVZDqRWDRUGaSx",
  "key21": "3qeX2z35HugpkUJ26uZUGRTcUxTdXPWRw7aRwTQZgtdoLwR6861AgDCgD587ypHWw6HArLDJ2WaSj28pAS3gTHbM",
  "key22": "2AfKwUsdiz6XYzsDJE6mnSGL2yh8BK3UVKjwRHJ6Vo7qKsHaWqrsyZS91hRMsbGiF3jj2TybfRWMnHR5xm3xNZKf",
  "key23": "4N6ewNB9YRKKdARTfdBzK42B76aqHZxc9gs1kEYmNHhrAqfFLVcyzHgKQH5ypYKjhu9atzZDp8AXeeWPLSib2zd7",
  "key24": "5Uvk7fPPfFaCtKHyCgvBhR8mqQHVLdYV1Q1ieX97qHd3VSRwD7JvJuTZFbN6GQh5QkSYidUdvov8Xq81sS81RF4Q",
  "key25": "3Gqe7n2PnfRqJJY8YzooXogQXU4ZdLZzDuUxxg8WZMUpfrA3nq7RKd926DcdyoU4W7HsA4KZdNp2oVFaGaxXtGuP",
  "key26": "4jkraiaioHcstENspeNB8wfxbCqVhiUXm9A3wgUh9Loniq7bWmzK3SZMz77yK5DYbWU5sLdX87q9k6g6K1aCDF7U",
  "key27": "26aoVfRY8ckKPk68TtjWAoQsNyEU8oFfWPAHTbQEX2GbdvWUeXoASdEgD8vALyx5nrL7vZtvTzrSgF48rN9R72Qj",
  "key28": "sRgofnq5rtK2TipgYJUp3YtondTtCcBpHbnASnjTaUCceHcS6tXzMwaJZajjKBv5ReCMhDbnz557Yi2PJCsH9mW",
  "key29": "31jJNZQ7KYcQEU8RbLyNpCd8hC8smnt2s8RXM7LXAyuiVza8cQGdjRq8pcv3Wmb2AgUHeRoWV4RFiheeCtuwv8jM",
  "key30": "248KXv5TCm7MjJtALbqFcmH1NyZjieZ2rz3YShhgxopja3TyLkUaL8Qw3fAvbLA8bR52kpVMVMURMSkgB59FVWFi",
  "key31": "3w2TbqnNCfCQrbFdvjxWwySkhdA7eAJ8er3o6naxCEpEb3BXpuYxe3okh5cgRDUo2uXHjSVQXQysSHX9ZGPjjShc",
  "key32": "8uy1yCXLM7ejnokM5uAk6SLKyfqUFgwjoeoAUAyv2bySVS1Bewi49W1pp4eMUGaGR1m5ZbzDqugx7eiHKCGZFhv",
  "key33": "8PtQRVbJ7HJS1GovkB5rx68KDGEzFCBiVgyqyXG5tedm74Vhh7DiynxD36vr9w7itnuKPYNYm7bteD7AG2KmeC5",
  "key34": "4aVfusBaddJVYs65oFHqTGaZEMvaHDqCp6SoYZ1zgnp9RwakUh1UkAnk7ex8BiNk5paNGDjQzRwsGQNcRwqd5K3T",
  "key35": "3E5j44VN5yYHC7ePTWqqUjqJiqApvwLqpHCe1BRmG9fgKhFRRuUVQDiYwfAiB37sXdsEVL5qS7kE6vaSEY5hTzJh",
  "key36": "2qsaD1JasykYK4G3FG5GdQjjwzZkLGRpmmDCjdqWovNyn7JdHuHr7TxsM2VbuyGfLiw4DTnLEhkKdZQM8Q3j4mRi",
  "key37": "qoeAL79caD5BzrEDuiQ527qdCP4pCTPS9Cn2o5gTX9pRzUL8PjATWG3VGEAv6XKnCpTmZ6Dp3tDangDQd8fNHdE",
  "key38": "2htvu3B9n7nCB12eADatH5ogJ2y5vpsiQuQ99HVwMR3rmWmjXGhm5f3HjZxxguEeRbi3JiQXnGX7RTwBecn9yK1L",
  "key39": "3xkjR5K6GaBpdh7y9yeKbLQY3di5iHtjpCYToaGYKtcDCbEawhhgNpEw1jaf7vTX6unSv8WGQ3FrnwLaPULomPZo",
  "key40": "5GwMGTu1jbgWBFPD67YAyyexNUG7kp7Xpx4HR4KvvxWo5iBgApnCAd7iTxkrDPuEqEsAWF5DU8eNbe1URJgqu51s",
  "key41": "3cnkBgFKizxwKUNDW5sgxAPu9qqGyLQiW7pxBuESb42afTCbYTYFdPDSiTiD1ESWqz75dV8D14HMcsxMqGZXactR",
  "key42": "4xmoZZ7131uyV1CoWB9qPyNpHTkYmcyXs5hpEX5zS7i6sHieW9uATxR2fcbWP87B1LU7iKXJvNoQD5j2TV5S8uBP",
  "key43": "4gBcTbmwbhgPvbRBR3PieJSjaeHFkaugfcx8knbh8UZsqTpwzgvtZ33q1qUuPFSHDBKet9WMABbVBjTfKGQntRxm"
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

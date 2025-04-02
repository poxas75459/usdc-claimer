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
    "N3zJspyLMQsgxbv4EFGgHppt69a5tRvQNqP3kY6zdoeHKzspaSxFXcNpsdAcEd5Je6f97MSHyM85AgZfV9wqhPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Seg4BvVLpJ1WASJtcXbay4c6YMM1xkigLagPaUBrCyxdSLv5Mv5ETL2DMMRZ7ncJhMV3PnbYv4nCcmS4ZqfDJML",
  "key1": "AZNy24cnmxHH37DnhX2dA5w6XQKf15itx19n8An2wpAapAjjTZpPzyUqk5X62PSFqECEdNxejQxjpHedTioEted",
  "key2": "2ARrdZQkg8kwTNrqSiMJHG12AmaVNbNkP4HorJ6TiUGzAty6PeXPJ4Uv7DxTnaVzCntvMPt3NwUHntrwySqCkLXV",
  "key3": "5ck5iyXFsGzmq147KqujrhGqjKQ7gS7SRyNrhsQMaimjSuTz369fh7zyAejjHkfPtDwBjNQfcEqQLC3R2DieXHth",
  "key4": "31pX8jtb6matk54oGgN3fG7jGe2EAG9dhoMb7QF7vQZtru4fW6B5tDERK3AT7MBGk5VpwyLuXiCyrhwnYoagC9rW",
  "key5": "4CjyxtL3sbuW8bBi1K7fKQC4iGG4bJS6aRu5DtsfTq3F88tmn51Ygurg4u1yHkDvxUEeQPLGeVGziMYjLVyPsEbd",
  "key6": "48atmDWvVmpq6EyZ31G5JJNfJUxVNSBk5H1N1ppQao13rJqw8HQx69WRQZcGaT8BsUm6G4p1nv5J2tYkf2VJPBQ9",
  "key7": "BYJLuDQANAr8jPZQseYU8cg3ETsSY1motenzUwycM5euDxTjRcJjvzgrMLGzJutR4GCQS5HsL6YaQ2qjvaURYyi",
  "key8": "aHPYB2KPcy7VkxZ3M8mB69MiKtbF6NBKUU9GTZ5pz6NNP8g1KqGorRSu7AhZJtsS7Rv4QXd7LytRgNsmbhq7spB",
  "key9": "5pvLKLAWPmYc1FwKWHcjSq4wan61WXtnXy7Vkyxe2W5mgYXxT1SPYvJjzCK3bpoaBSBZStdtsGqFKEKjgxjXEste",
  "key10": "mGG76Jrde6HBBRLX2rRf5ZWNUBFW9oLn7Rcv2wapwYXokZbxFWejMcmd9wY6iHMnTrvsHeTw9nYLjpMmDcUAakH",
  "key11": "2bemx9HkAmP83ARzudALPEEBwXtJQfp6xGi7Py6PX1cPrs3QVMPiAcDXWBs8AqtEK1PRSujWn123R6VaUsERpAKe",
  "key12": "5tGAHHWMkWHWS1ADSrYKj947LNrdLQYDT1CWdktWYncwVyeeLHUknQi7K6JmTHU8gQ5SrtQ8p5wQ4LkQH2d4JQWF",
  "key13": "3osFDZ3dvgGguZYhWB3Kvr6vXpKHgq3A1Epxr6DC1xqM7b4oYfVRjqCjBMnuFvv3yFTYroL45Mjmo95WfDtpK1gZ",
  "key14": "34NwmY2MZxuvScNPyF5RPgrEV46pij7gDDeN1wDEs1XrHBc5YQqr59GN6hgX7zVRvAF7HyxRWexGg7nR5ot4wtaj",
  "key15": "2VgUn4WbsmYSCy75zGQNNsbUYeooZFLLgBpfZ1uAwAqpvHi2tsKi274PoBXSZmE7si1YUkEu8J4A2CUb1hgfPLjq",
  "key16": "g6YcUtN9RKqszBBDbxVTZeExtw2U7pVNnSUXwpdymmbbnCzP8bYvQhxEYFAme3MMjuQXbXaSVdfvcDhPppptZdA",
  "key17": "5PRid778YWjfXdRxgaJFECpzFe2q5LvSc8dCwjrKA5bAsjQCEmMfvw74PyzsQDXSx2W51THLUGSsES9yMqSSSGH9",
  "key18": "2bbwDPDVGkeiCFHvjfziVvPVqGsZ7prBpkjqWWgyYMa2Wf7CYvR7zGnNdpiiuwgQDbXVQ1kYxYsn7ARvx4LXkzBK",
  "key19": "47UFqDvyqK3zQyVmfPQj88v76cbQqFGznnd6EKDyvcoUF1pX43tbLKS9bjF5CscT9PrJuzmsDe1mCPXkaj2ujZ5m",
  "key20": "dX6gVrXuBzNzaUHUpAfjrrF27NVQnqUpooNLm7YW4p8szJM9VtRLnMZht4e2o6y5aGxrnVrX3N2AgUAd5AiY78W",
  "key21": "2W8qiUvJBikcYwBA9NW15LKhhZCsBYKwM3MPNovM5txps4tZQc4eVQAfR7tjEkNNg3kSLsHew2xe99adEK2ZZHBP",
  "key22": "6194DV6cuQyMjUhx4XKYi2KmPKbf7VxmqftsWXiu4wqPg728mk4ct8wxSzdTYpgXoZ1utp1fFAs4i1THJiJxCk5V",
  "key23": "MqhBgHfvrocnaCxhzx8gKAPVMcJjjYNsExHJoW1nTLT6cXBEJppWaaa6o64qNKwvo7zQgxXofTjFcfLxkZk5FGe",
  "key24": "34otjcSaZnnbSZ2B2mQavXPCswAnZZizfp9W72BYvamVbjYPWwaALEfhgZXUspUNkAqsUjvD1JqeXNDKXBbggpZD",
  "key25": "CweuWiovuARR8TjGa1RkXkjHxgWvHUhNcQQmnK3bxPjyMgRAHf7ysGFUMX1FwytMapTH9ksRKZTXsar5CNW15S8",
  "key26": "2JWcvvXzo3k9FT22VCALwoFx4Tpfi8ehRgBVzKkr8C982YurwaYwiw9tFbwUwgN4MoAYF695nSh2aerWRerMu78w",
  "key27": "yXzxfW6V44EZNgvH3wkDvsXEqjpDYFsFxmfbGM698ZjxfmB5WHBHeG92g5YMjnkYTzaWXrKJGGWFiGDUfGtPSFB",
  "key28": "4o7igGZpTKkRY1aoZdFtM9CUtnfmp2j9bHopDSyFSHTPawEDGmHNQw1uKgCDuQFcokpTVsktP6nya5pMdRbeZ1Lt",
  "key29": "53FjMUK28Mh2QVbqKRWuGGGa4at6auNLfYiUtwYjcnisRQyqtG8ffKQ9kd4nAZQhioU1MEDgyL3Wf3bjHpKitvaj",
  "key30": "4s5uYXzqUcVuuU6CTNpTKo41hb3ZNZjsg3kAcyzR3CFWE6CY3j82qvJrzfgtKFX6pbYboNjvSU3E5saK8VEEwfPy",
  "key31": "2waRxo13ukdQsiGA8xUQ4oCvT8u5AvghcempwnQusV2nfJSKPkF3jYNYsbW7pCme1tRcwVKv4DkvMMMcznsELuCk",
  "key32": "5ugMcrr3pDTkgmB2VNGzYQWfL7RLYpUc4JPVhGgFVVnjsMZYXUUPJKBg4wW97KqdmktyE4H9X35pREWxQxLMge86",
  "key33": "4JW5vTumXbxdxFSaAGUtgMuNENghrJq1n4kYftusFn1tgCnsTBKXnotRKsEwuH1pbdEmU5aeEsewX1zLMjevj9TP",
  "key34": "2drAVNtwYdHNEC7thEEcAfCXxXp7s5pJXc5jKBpNPDkEHDT2vMsBJp6Qc5fSctUJTAzKZMzpJWktXP7pwex5h6tp",
  "key35": "2KcW1PAiEWQCi2Zv6xpuPoSWMUm77r5tKCNTiGqf54QiRy8fokhkuYRvACyyAZAyuMnjc4LLKmXsaLR8G4QuioAw",
  "key36": "TuVWyxzoKtWNXokMFaXE3NekU3WDVVXgSV6Ma9fV2bxEmV1y1VqP39oKnHSBj6gwyoBrYmWAyMZJVJikFz5g5gp",
  "key37": "3a1enEhyajEseeP4mXCbgfD4u6Vem9EGz5Ns3VENBbctW9NSKuFDcEcQkUy7o1b7rmTGN3XrisiL6ZUxH8M5oWfB",
  "key38": "34toVjuFUzVk8aYpV4aSqJZGpM3W1z92jyV54haGgp9Gm88NisuogXSxVsnS83babVoWeWEPxqD9BPUn3n9Bp4Gt",
  "key39": "32gwcm86eK1y6EP8MQKs1EMfQ369xJ2qQfZCjDEM3GWWi7bAA69Ju9WUvtFrwnsRd8d7sME3G1YhhP63uFQT7bXr",
  "key40": "5mzoS8rTm1SUSgNVpvxKS3mhGT4HJevSGgDkwWKdYuPFEAv2wodCiacShXnbxmfYZEh28epPUgtBBpy1a7JoJHBP",
  "key41": "34TmtXyqxVhjpL159dkpTbCG6Jbw7za8Pq1w9tiAE5QPgTeiafkChNHGHZK9yLWGHZjhjgoowCvJbwQHzNVirP1o",
  "key42": "4Ri5DRwnyB8svdq3JvhpGFXgfKkGLLdCfkT7YLSaD5nzTSKPMssSwurxbVu2pcd4X2Qyw3u1xp1MBjjncCKvQ1Qd"
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

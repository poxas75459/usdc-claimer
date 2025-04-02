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
    "2Zyu1nT4VZ3wC6CR1pZaXGJ8ggEL7PQfBCza4f5rsoF7yRd8KNjxc7rQxfx2WSdoZrFGiV93UEp3UwcDS8qhGodQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hc5gjL2CfEESLjsbQsGhwthFr7dQQwio8q5Fd7dERSeJNSMMwZACv1vLbwCrMLbzHWecwZgpVV8MpdrUBCGqXr2",
  "key1": "2AaeMFmEyWgt4csWk1hsstbTZSA2mVLHhSVPJKcr3x4p3X4tTm2WeUgt5iKkEoKdYyrNMQpR8MjtX718obmu6ys1",
  "key2": "2CbLw8ZG5yF4z6bjZvzcb3Aso2w3szooSC7hPRKDj1BoixFs1wM1hNXGGh7bVd2gp6HpxCMbLXfbnD23EokuU8LG",
  "key3": "4uR67ujckFPRDfUreUXJzn58CuQYrzY8BbmMe6Ju8eJfREsiFDn7tfy2b9g9yT2WUab7pHkct5bgZt7HmD2PhEPe",
  "key4": "2bwPivHbVPJbjhe3SQiGAW7U1gx3rbYFtEHgGZSPeAkvTrcpGWge2pEW6KB5GgJ5kU8ueYJ1gLTxFAB2Gtk24LZq",
  "key5": "5kMyvtD4w5Txk9YwGjusr2JNp3VkFMeTxkqee5AwNvDDMLH4drvdjFak7CS7AJZ2UThqxnNcfNjSP4a4qwoHVQUp",
  "key6": "2XJaCDAcsZoFF5747gfgQami1nwMETwFfs97BjqxUAUTzJEcbB2sPftE59NDLsMFjSuJ172oMcZwb1EbXLb4mFvH",
  "key7": "3FLUuGY9WX3pXCmp5mWFYFHMp7PWY38Vm4bzYPaTD7LdU3YVEjAhPZtG54MQ8Px16tPvmGYw9CDtZixsnpag7dWX",
  "key8": "35kbqUnYjwsoYmGMyzNSWJftBx9uvk78RykQTTXZiZAfNxNYbHahcCDtBWuJUd9oCcyshiHvXJd5U2wA9gQ1Dbjo",
  "key9": "3XyEVFwDnM8ATUMWvq5WoEqgf7FYvD77mUw1oKBWtqSYbJHG8Zybc6SccP6MrLXWG3WuyQeaBZznA3BqtiMiT8UB",
  "key10": "5gLMiSSvkbeY9TXCxst8iLEJkWMyqUEhLcti7ibGURQo3MAkc1x1GNmXr7yssbGRNdFvEM435jJCZ85CmMc9nu49",
  "key11": "363VqwesV2P695PeVmCcvuBkG5dGy2ZvKb7r6cSAanaFMtUBo1motXRdpE7XzxUuHVF5cQFonQ3kF6zpgTnH6C5W",
  "key12": "2PUqWXU5k9nsBn4Ue7FMaNxBdk87WRf87EwtbhafgvSptTMq3bPZFZExycY2zBYChfibHpwCUSJ6or8LEa2oWgDC",
  "key13": "5CNZZXUKhHWiMsod6iaJyFpvVqzpq6m8HmzbKSNZJ844esSPFZ6eSHgzW9e9uzEVSmwiT38BuN6Cbgf1pHsK27XQ",
  "key14": "95rcb5dBUeP4uXrkxHjpxhyd2dWNGJv7FpyiJ65mre8DSzjvGMicZg5WpLr8PkxNnSW7q18Z2g5h9xwYkR8UcJs",
  "key15": "5npPR3KDox6AtfNdGLJQZVHg8PUgweJao3TMJFELiiu3xkT5apUZPzjYVozqst9h9kPr9j6hjrdLZRiYcU3Vrr4d",
  "key16": "3M7WMjoRdPrj4WPMcj8aPk37g9uJVczajDgVq7MYSNapgcGzBZ6XfFdMuXZeNKf2mWvMzNU56nZq6oVee5NXPhWT",
  "key17": "48NcjTSX45jxT7z4HvasG8Mb9rVzCHQLuNXbNA3GtmXiwGc1njk37mipoEuGRKuztfv61LFvEXuSBqsPHfSyB9DP",
  "key18": "4kApoTvr9puFswiwaYSmCwNk4oRmvH8zGJBLy2uTcBrX2TEJEry55wTozKwtegyateVosWzuhyaW6YgkP4jFJgVG",
  "key19": "Md8d8hh7DvNBtNfs5k5YLQtcncvidy56d4MARtbG5kByPuBe1JVSzseKyCc3JYezCRdJHj38a8dNUc9HHtD6BqM",
  "key20": "329RD1wffyyLhvuH3W26XXsacKeEFce1K3kQRsV7EEJSLRDw8stANwBu8gfuvky44NXWNaHZ7hJ1CpdGSTJ8PYG3",
  "key21": "2mWCAo3P2i8K8EY4CZFKWAKQbXiZaPST5XR8HDzkad7ZkgVrVg3bXPrY1kCZvAqPNDxbVfNDQgBzB7Zhzj5FT3Ua",
  "key22": "4kcSTYaoRQsVfjmZGrhj9N3knbcDg8qh1dXtNmmFvgB3W9pcSws1PM7LZdNYLkZATjq1wTzsE9B54hWvGbh2Z1Ex",
  "key23": "4zhxZ6g7aZSt7LdtLzMDyj7AJWqnQvRDQ6x7XsStuJXmqPMGWjCEeokwU8C3CHqoifEZuRgWE1jSiH3Jv6jPoMKW",
  "key24": "2mQLj2HFRCqKEP54XXXVNJxjLY4YoKHw7HGjKN2nRgFpDTtrHad7TkgHLSwvTvdT1TVrytcuGHeo3dowNvJoLUr9",
  "key25": "3bf7MAMzCVBzGd8SL4W7bKcQ5UUvhLWkooiETQHTRKVnyVfv26tBABEZbM76Jn8HMsxgW5hcFpJNXpRrEB7yuREm",
  "key26": "4hqrbQ2MU7WcQRJf8TBz4FCkE9HNp3Tvr7z7JLoXKFwidZDSEEVxmeN7WN9hx3MPWe2uejJJjA1jdt69FMV3g8Ub",
  "key27": "4LQxydXQeSs9yDcWAXnmsh7ZzDV8UM3KZXEa3PJ2TJdAmUxLXZooL3ex1jZqcU7Pt4UZPL3pKGpYCqYXjMYfM6t8",
  "key28": "4VAH4d1i4pDDSEAQDhsCmZRanh8CWKj84RyPJnh5ja21T6Rzvme1mvx5EoE4MB2c8ecoEsAqmz3yDPDVmrYGRCh9",
  "key29": "H6jRctVrxzDNtdY3JuBCJR9fgGPvkTCtjpUnRHRsFqkqKRRNEC27GueMHFaVQ3Chz6Dmf6ifqPi9yvs2DYyx7Rb",
  "key30": "4gsBohphc9bTCobCpSNoKk9bMBFfpN1M4zuAqV41Tf5Ci1wZsRcY5pcdo26pyhos4jqV5xv7ceSskdEf7yFhMbWj",
  "key31": "4fx8RERGciRTMCcXRjA9NWWim26bBdPy8tud5q6px67FRhezMwY1gRTFo9v7cbURnCmuSfbDuh7yWNXwPPtck3Y7",
  "key32": "3zvRoBiqXhCJS3ZRVschbVDLg31vwRJVu8x3JUTV5buoaZqNHQ2i3vDUXTaAFEhPwUdVPDWwhcPrbMfZSbmZzVLw",
  "key33": "55BznmNYfyjiXDHPScNDczrf4PPPt67xf6PQZyiUHCQPDB23yMkNKjyaU2udrFEeAtCbmhtiCsDiGJo1YkSwsX5Y",
  "key34": "5eAxr4sPa4WMCe41uoi6RqFQxy8DCdWeRqFyTasCiw3JZcmLXcZffdG6eNBchvV8RvfPAi3xgkXX4N77L2jb8BgM",
  "key35": "4F1W5m36SaG98ZJfERiigU8DcyXT4thcbuWcmKaWqKDjmhJJyMk8A9tYd4JKJrRvJkEiERCv4mFtfb8fjKACinEX",
  "key36": "3wJxn2ewJT4muaTpURv4feF3w7damrfr9BBy1aNcNDc8467rBADqrQX7gzC7TXcSTKry6YpjVckHhFy7dSF4QEMy",
  "key37": "5Yfmm8AfyKNJQEoLisyDZkry1gEtfnph96btFr7MZdwhHGSW58oDEdkH6QS63GDLe9Tj4FW9k1qKd1czjsF37c41",
  "key38": "5Byfxz5A6VGggwo2rELu5SaXdSTEUaZbSqf6BNwwjDXGjYh75aWtWGYcsEuwKauhpdm8tUvwx9qycrdtW3T3DPKj",
  "key39": "5yjFETYTGsKiJCfjQNZ3vUURBdrM6TLcsD8LKCrsDkESQj6TiMuvVHyWkZvqNDwTQrgwG3PQ87c5APXsqyQn67Ki",
  "key40": "39VFvtx7JhiEWR6hTrD8enEMahbHPPyXgWjSqFUMFpPoG9SJZUzXiUPSaKbEE8tVzPcNueqh4S2KkhQuc16RPr6Z",
  "key41": "Vv32jX9PdEe5hW6YHMSz8Uiv2gauY6VPDUaQGsiDbz9A3gxUzgF2ovTu61kedmDsNG1StUXgrDd97FRYuEMMyZ3",
  "key42": "2e35Z3fgMUxRR2wDdTw3KAhCnEHDTZcNKWMzH4jn5dTPGDGxw97HinPTaFrpJP4GixNqXQf5nH6aH9YWpXCZGtjr",
  "key43": "249FPRGiY4QhM81Qk5QYctRpn6FSYXWef73PkAuZtN9tHEzoUGjjEXrY92sWsVAXRQ3AUBWqKfGrosfKKA2TERS5",
  "key44": "NsMq7fyrdCpX8K5JsxFXDjfMjfxGbCZpY5otcTcBwoUimY999MbUpk7EFamFRLrURwxyScE8QVFWzzrfigqY9Ed",
  "key45": "3AxkVxFkaNikAdQaw43TQuyzw9HUgiUKXkjSX98UvgWzzL5zVDm91hsYK2uPYRoNvRn7T6Urp5FoA29AfsBDmL1w"
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

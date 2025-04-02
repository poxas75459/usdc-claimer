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
    "2AGBVoQuwhZmMZGobbpsGe5SJrMszSSfpVYxohL6StXLEUsEfm85Dcaoy5jrrQ2rTxXNqAc1Eqr93azeiUy4GLj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXfT1Kuz9m1t7JtNCsWGUXVjFwzWUembWFsaEGGffAoteAicjy8wi7Fphn8LcqFYuJswacUtJbh3EGn6eokfUMN",
  "key1": "XXpqWh1JknBQMHrm7KjKZn44qgnb48V33xnTghmqp6YQCPznhq7Uub4YZjVSyDXJgR4mAyFWm99AngD9d1mPMDt",
  "key2": "5zbsqq87wTruwKMpkwKkjK9bPkVGKvM1A6rRnZ5BWsNTax2JGW1dEGWtvuvVZZzFgCX9DGxkRqHNsmdRmuenU4iK",
  "key3": "541qAib7fwZiXRpWTKcE89KJWaQdmoPJWuXEb6hECfmvWYFNrvBhb7hP5hEQKdKsFJZrVPHCoPdirjugH2HJoxC8",
  "key4": "3W2TtN79u2qigMoouvFevLonjy2pkNC3aDH1gx6Bz3wBAfBhLi8jsVkjatP4Z5pDPJyZd6rbCo1R2NhsFEmGF7Wa",
  "key5": "3E9bnS6zYjHbfMLf6hvEQ92o7ydTgBh3J4VBKdAgJ655bbS2wUrTaJaMnLvkReWgtC7N4E6DsPpud9DBBXvRSkx7",
  "key6": "2mPEqfS4WnzkfQ4iaVAYrmJ2EkgYkddgyp4dAPK81fqtFEhF41xPJbLpvtrb7kZALTLf7C7FZkCEqFkQuqSG2Tjg",
  "key7": "tPCagA5CdT8ZbeLLwNCaSp4knnPAW9C91PGSwtGJqUwAb9t73D8Fp4wxae8nXNMGVqVF96gXwq1cV9X6HSKmFpK",
  "key8": "BgZy3LAfBG3rMMRCc69REeFiXjzt4aXGqwLnuwSDLaPRU2Jw1CcMuu61Kbkrci3cLfWSN6afW4z4FF7D3ZjgsjX",
  "key9": "2z3EjAN7sjbrv7nrUFvRejG9zRkRiFCd6cAbex6yL9MYBaK1fBr6A6oFw2fGJxqvhGkL9P9Eujqb5Cbs8CGr5ost",
  "key10": "2iggbLSPKQzJNxrWc2QrwLshBRyTjCTEQ1Pd9sw9Zf8ZPy8YTU79iZH1DeAZYtPotzZZjSBZaz69CQuWyJNXfGx5",
  "key11": "5DKk3SJrkobYR7kpaA2LUAPM7Lx6bBrLtiHYZy6pJyXRcVFEwFuxS8U4MU9p5LTwWdbS2t8Yzcm795YNZMmADfPH",
  "key12": "2ejPgVM6cq7kiEPYk6LHoYfDMccuSvXpVWXVtevS4TGm1k4yKDafGTb6ewDtUXQ5UJjsf3eLcUEvahKRniXirJv6",
  "key13": "juqcjhLqz5RADPCmSbtNfDbuyAkyUWqJHxQekYN1y2dsUeDSE7mP5oYhcoW5wMUstD3pcBZSd2TUYHxnV7XG1Qs",
  "key14": "26aNEwdARk2FXMEnDBo95UwxoewFe2p8MvRtUXm8mc9Q9jWeBv2LeHRS7ib2p97dp9E19gEkni1mx9CUE635p4Kd",
  "key15": "2Y9P91LetYysaqRtw8e6idtUw9ocR5fgfUEu1qbktHPDCh86vaxFDGYaNdiphivUhLifPKdbufqYubtEJyBk6v1F",
  "key16": "5hPw7odPPygPPZpq7n6icpiFomAHyaWkgitMb53M8qZJctoYP3jwWVQMNzCcXHtMNHC8o4sS3qqt8tjcXmU4HBBA",
  "key17": "3SJ4eUdRNoHEZ4GFoGZSEdtRKCf9sh88wEeqtCDnNcRH2pQHjgMgnwnzPFKxfpi3dUuTXoPoeB7ujHgctu3VAKrb",
  "key18": "UstqyXTspJiRW1NL22q8mUR6zJSoHRkNkqxNH8t9Sgit66FdiEeiF84kz6RsbMvHyztngDAN1VhKU9AGpiZV7SV",
  "key19": "4FLLbnehDj7rKQqXJP4oMbLsMGfmV8vkvj6bNuZLKfwynJHuQU7vMqeCYaGfieTDqFXo7HTKYAYvVKb4aWomAWMp",
  "key20": "4exupKxeVifezTFxKqSL2UTqz2jatmX89sTAQnnpCXGePVydU9ykmQByWjJHYz29AVDook7S1oxuxayKPuWEJVK3",
  "key21": "x8Sc4zEvNxBGi7QsyNpiZ92qDT8w7xNqvUJcmQSexQTQTSzd6eGQccGmDFBrdiB1U16m3sQA1DsncjYu9kUDTDt",
  "key22": "2mVSBzaJbWYs9No5X7t737tuTvXUxsGBrjVS8eBD68qNyoHKmXn5QbkVi8AdGzkqh4GpV2VkXFySWWMvumgkdm8Y",
  "key23": "5aLV24rW73Qy9CSPkYR6e1XJUX7CxVzw6imgYHyrTbxBSAeAK52EccUMNJUQPCQxMHAUHivbRFnZGsScTTqpA4pB",
  "key24": "3tNiqCfaKeWwuZ4jGHVPCUX4sX3jgEPwVDC366cvob7amAodysJNjUvK53sVzEsdaG5RVq2g82nRzLkq61JDdu3m",
  "key25": "3cxqfJ8q7hhNRmzuERvBJY8ek6TTnbQRF9Rs5cc9orShbnJEg1k9aKQF5K1ksCXAHxN3g1cJnGZuZQRw8CR8Unv2",
  "key26": "xvdkTkHHGBk2jFMQ87YZfaE8KYxcoxgzifhkWFiFYNoWXAy9opsYYHdKnb8nnJyAQ9dgCZy7oyPKpkYn5pQcHJr",
  "key27": "4JwPWPCerryJ3wTk1x8H3ykP3hGBiyB7oQwFsDyeoQDcEHVzJEDBnihcAzvSFoTQoquA16waWiBYuwUvTsv2W6AW",
  "key28": "3KLfcYuRc3ZYttRYSC1sk3jHcivYrBPZifDPMn9zJFrhbHGHuwztsvxV5Hh8e26cJJWV2K9qNxsrwBkNpNVoAvF8",
  "key29": "5N4bdGvZL5NdwiEof8LzbxrJwbCFxJNykjUmjtvUesLovpBr7sZa46tPvPTCiKWMQnz8Xkkin4oJVcGtK4YUBkGZ",
  "key30": "2YhqQUeoFCJG2bd7Zj3gGMxJETVoWntBJMQTVLS1Xc7AArxWHtBLunb2Ju97LxYVC7LgHZtXoTKrKKcSXbLQk56k",
  "key31": "8cvrxBizsH7NcMx8sxLtMCdW1ZwpATKcwkRadQfMhAX1VTtbkzvZAHEx5Hx45DbcXihafrnecJnGE1xyaaeok9i",
  "key32": "2tq3TxW27LSnmDEr6Dc2SEHA8rEvoFsitm8RaT8hWryXX4vxCZu8yauBcq7gB2yBzVQ5Yvda4MJHekpWVdQE1vJL",
  "key33": "8xkB4BwKJ4Bof8y382Mvk5JSH5CFawv3YJuA9AToHcBkmWa2R5uf4CscknpPVXCXpXLsA94vW4w8EToxXGMr34N",
  "key34": "2FgkErhi8N2vjvJvttCzNGLjYCWtD7xvRBUAurHm3Yiq1i8uEyt5qqqfL4bWRKgDa9s7xUkL9Z9pXBbjrK1UenvG",
  "key35": "2Jr2QfcfXhRjKgGzsMRGfzduYspfd6aFVYCerDHvnUmQzBmQpZh4AEeCC1hqAgrofiumGRKaDC9e4sKyo5WLdfHb",
  "key36": "X23dHDZZmemDqMGGpAR7dZAX6opBwfFqbsh9yEk2M7jzJv3vi8Wz4WBgfygGs2qXLDjziwLERexX8mgFVifMwcd",
  "key37": "3vb3yUQK4BUz1ZvTz2ncBEKA2HC93HdH4mG1HBcKhUe5HRShmEdzfEjmj28kndLc9xC7XQRaFTaUdnMZvfZCKCYM",
  "key38": "FjTmfmFtumRjaupzRwJYhFMAMbk2PA56RC5HXKYeDiKh57UGsFm2szfKzYJn1rrXd5QzbKCQMZKSoV7C95TMwUN",
  "key39": "2VELbPmjmfMCEkhuiQDVpdFML2QXnNw1upinx5k6a3GGXHmQV46j8s8b2C3RvbiawLht5CCFAGb6T85VBMC5hoH8",
  "key40": "2axKvn4ubf9RiELQ4DviLwCFVptJzkvtdedXmbnbD91B3HocyU7rvi353KPVVtRZVv8aWqnncZBavEwzn1QfghXJ",
  "key41": "5ZVEb5WXcNj9NCJepGrHj5Yq9Jko9itjv9mczarGZB9ZXoGHhZzqupyzsHXE9XxGd1Z6NVQKUBu95by1KUukjfQB",
  "key42": "3GVLdB2cc9U1JmetKFSuhCs5gZECR1hte4HHqS3MPpMSAairbKzW22LusV3yLFK9y5FcsbQoN5Vd1iCG8ewbaC8z",
  "key43": "3fCTb3WoGo1RSb7vv5i5hCqmxHabNcL8aPourfQH33srbA1WTyFyC9VBKV8WCzpTc7sSxMxKB4kztzGqWo9arP1d",
  "key44": "3VFZJetJJeVUmaJovZrUq4MayYgBPEeoEU1jtGPxpuBdH4g4upHNuddz7wGAMi9s8yVYfpiNUZX6qTJGhRBJZYG8",
  "key45": "4xgVjqdZwZMgErWj6TjqqPocE3M27LVNPNriZoHqo2a6xDHzdd39YBUcbgkLj6MoeyRCFJQSTTT28oaewMy3iXq",
  "key46": "k3sZo4kw8esNnViQnUVBDByKqRGvXH3Q6W85UTzGbKtW8yivUoMmtXbNpoFzaTesWJ1M2XRprifXZdACDJViL7D",
  "key47": "5KxRPj9CUcJvvvLmmNSreNWsfAD6KG77QcwGrLJp3jB6Lf53z76LcQ3ak8HCfmGERHB2SJS5S3oHGRnwkCVdVjn6",
  "key48": "2SZw6u9mnwrBr7wmGTrFpmLbG1E5T3XncyRjw54corrHdzvFHyXUErCFneEDzuJhF12ytiPLdsAzZbhD2kb33KnC"
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

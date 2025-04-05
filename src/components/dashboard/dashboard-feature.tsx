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
    "3FBDpAyrU4maoyorNVZmG8wb94ejz8FMn7tSsU7SNxLE1xV1UTYshJKkhYY21xd9eYNF7NBH63zGcR2LzCW6AEG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ybgudpm8ZnhsxgV7JK6jU8VxF8bvKoLDhtXAp9x61zT8RH9h8MMgvtApsS5Bk8PP2HSgMcGuCTbx4J1ZZFVedAe",
  "key1": "48LpX9xA8ktQBHfzhBrJZVz8GBCiDi99xgXDuRD26t9a4wZPuRsQ2q7Ni7dktXSLUZhorfVkGzWTDywgkAAmQVX9",
  "key2": "5ZF38gq8vFiwwYN3wAAtztwF3rEfMtorZhoDMDqhiCmzwHSXgyXv46v2S5Yvxn2i3VkKDgyKnin3cBAX5BtWwF6J",
  "key3": "3XY25pnaW17MWBtwKTue7Xa9qSaH2135rZV7gCH7NBjkn8xBSjWf7NURtfbMDqQQmeLfSjUgxpbHJCSYm2ALZ6NR",
  "key4": "3cHp2F2KYGacdefujY3DQMd1s213ofESsEJ6dMLGUfwr8N5vxmTcpYQFF48qV9wKScbntcQsLZgBLax8GNYndbeB",
  "key5": "44nF7fWdhiH9efECvryieTMUVfZ4BxYKX7qM2YAfEY55iZFXWERLmo1scfD3ef5UXSYNBv7ddiSNz3jQLJ2h14Ar",
  "key6": "4ySPn92XrGLd8QBGfb5nzBcYYhcBawnxisPs2YyPhpwNxLp6UpaGWsm5Vbma3ivfqKRAa82XSNtCsHn8ZnKJ1fQm",
  "key7": "3xzkmiyCKJT671ExWiChBCaSyKmxgbXNc5P7DgrrCaBUTyi5gAefv1yGLN7PTtAJBro2ZHnMzQ459JxABbRweoy9",
  "key8": "5Sdd4vxKGnxphM7PUTaRYP5QXX1QWRymcdPVZRAE71qR6QNygNVP7juUbwndyVXhWMqV52hpD3uvuDSrGZJMxaRh",
  "key9": "1ZbugjB4qALe7Gmuq3Uew6LWCMRuVcemnzHSqf3RP87EpztKaSjiVthpgZjHHRpJSHxapiKVBz9ef1ssP2eiQBG",
  "key10": "33E2s2bWujX3TBeY1XuxdqbuTSzs3F3ZmgebfT35KEw2si51ezF8NcLkEsWQ9kJbAxsbW1ZTvGLa3uhC8E24x6Fu",
  "key11": "2SGAYFG8UPUn9pTfH5LyfNedi1Ejb7LkLQ7cHF16vDdTfnzjaziqKfTqvypsKtVCH9Pf7bzZQjM7125AsUNdjwnx",
  "key12": "jP8JM4FX5tQWN3ucSYuEizsP43sXz9g6EwqomuHt5WdDbgsTNCtpuFNKg7Mr4K2RvTkreoPe6eVQXamRPMYfb6Y",
  "key13": "4Mo4tEkFZmrbZhQfEugTc6QnJtBJTC5R61Z567bjbNvT7UUJzLGj8SwWvrtVfSdgx4wLvCkjDSphvgYeF6B8at5Z",
  "key14": "6445bKfZqtQ8ikjjjZpk1P2UhswDF6ZLCpUdcTskrtsuXBDcJ9KMFN2fX5vUNaPYBoD3GNRxhTmAZ9Wu8JygqAxo",
  "key15": "5fBCYZGPMzdeQBoSi6Su1FrPAVGZeHSJdgpAcygk1sUJrHzbN7DhSQ5ux97uRJqBUyxw3VSQ13YPp8kv8uKWbbHv",
  "key16": "5SBRwP2TYJjqsaTD4nr3M1BjMYDqcWA9kymSVyxDt5LmnHWKBdR1914E5niyT2HHvdDqVTkpFxoHgSS4zntLe5VM",
  "key17": "5YXbi7gfsLUSNpdrZhzAxFXSspp8qbudTRDHhdAkbkVDD8s7mLFf5BNpK4Gx6Hf6bQjdy9gmVrgE1hrtRroi79xq",
  "key18": "4cn3wCr1icCT82F3XLEsnPUePwTPEWUNEDruaXktPTTaQCkSz5gJAaPDTjRmNmaKKhGuj6zPSKaGPCDfpqFJswpL",
  "key19": "Csjtv7sVANXbkfgBM1qC3jiLogkJ1zGK8ccpMcyANDtN8F6jHmpxMJtEPH6CnLa4uFXK5oKXfaKRkPAWnH3eqS2",
  "key20": "3gWUP5vpTg3TqsLayrrMYwGXY1VQfPbXvvNcL7sL4kab1gyxAFakLedDLhrcEt2MmD7UGPwW48dZpo7f6Qzbp22f",
  "key21": "37mMk5wsNvFexnB6LEbuo1ZbrsmniMDPTijfQcmupRfPoVApJZ5PhWxd8SEFHjRywVb51cZDziqkvSx3T8qHSmbB",
  "key22": "5TAJ5XanmPECWLWhCHNpqS9hJwkcQ8z41569iUYZ5dCD3PRCtfGySsxbS1TUFKM3hQ9J4PtkfKm34xbXsyDNJ66p",
  "key23": "3EJg31a2SeTAgPrq9P1kAso48sEcRZp8dpuYPti3yBz2ZtgVdr59pH65WkuUFWYBLRJXyueiVCEZ7aPwJXEZaqFk",
  "key24": "AJDhN6v9DfjaFaHSVGHzrBCvjrtsJGurAfKXu1m7WtuTQJPvVzjjaWzpHkgEBiDrHiKZ6pQfsGZQz788H4MZpN9",
  "key25": "36NKxRrYkSAAtcSfBsBtZSMMCcK8cvtLTxH9e5ikytuC9eRR2oCSp3LrEEDY5FEEVHcK6cwcDeUGgTid4peSo1Pq",
  "key26": "5TEuSjsbAfw2EbWeKVGxYsSCNe1jvrugHfEx6diVmm7Lryb3psqSrStDEvBeooD1tbC4N9dHKHvcS9E2eQQRu523",
  "key27": "5tdtEa1xYG5uFQQYNcrBDLnyD5sbH8a3fga6KVKNVngFTXbieACBJZGbvgRkmSnBjSy1vCpvrECdqc9wjvWir7h8",
  "key28": "32s3U6fdhmYisLowRChDK9sV24ZA4AqgjFk1rxCM2NB7A88G77zsR6Ap5QqRsFUi7ueeGUVL6jA541yaK2oSAQuA",
  "key29": "3aGocjbYouPgqGF7su3TPGfGG9QV4kEdR4GGKG1ngsahqQkS3HnQSYj5jhLHPDGBG9PVSxfPs2iQtprzMZZprqn1",
  "key30": "37dEjhC9KeZLQWX9gYtfbTXcAsSs3x6pG2R5BJRi2opyDEu5dHdGCnVMNNzhFWWVEsFCF2uDuG2y3HuSiBdQtotw",
  "key31": "R6t37rPXDzqGQrZkmyAmZX3124gpMqsCWgAeFdU2t7oSYo6ECfNKBRcJPY4zRQumozSHJ9TP1qG91QBmTLg5aYS",
  "key32": "5ZUSvB94PHjJxatDoStE9TsgHdCpnV8mzzP8dAn4C2kB5su38khQ27YtkDciSv3JVfNkEuJjx73bhpapaf829Vk9",
  "key33": "4nkGLnj2WZXp2xriiUL8vTAEFamCZkbfKmow4LvQAJHagbnpXQpQZiCqzK1DtPynVkNEKo6ZPwT5RcvDpwDbTJyQ",
  "key34": "4ua4M83LrVNNVWvvLKSybL1TLvg7X3YvijSU6TP7gpLBLW7NfyFvgK9VbPaJix5SAefVamp9UYcJvceFrxaRtU33"
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

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
    "5zjX7pgDcQaZbAHVmRTbhTxnbRoY44jdLsmwW5wEWRixzFxZDuoTdYTFdNGD67FG2jH85oRrUXJLs7x6X8rhARHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKsLfu1xm223F1gxDEPZYdA4yqdwFDbCDnQyKKeDTAWrwR2cBT9DB5iDzX6HUNpPJoNZHjE54LbybPWLkuxWsnA",
  "key1": "32xUCA2otC1dcZUWjzbRizFKe3ebzt2GKyDg2XhzTMUKA9av1qVfN5PXJJGeE881oXVGhpBZx1MrRjoQmUcENNg7",
  "key2": "2uHFR6dutRMibLsxR5YHv3pxJLhVtKnSA3Y9ZvAzJyztSQR14j7DMzUJocDx2ehJMqG2ATT15ftUEZ4MGbjsWFiE",
  "key3": "5zFouJ84QdQnaR12qovivbsCLGbwALKNPc1nJ5D7Mgr7qs8jUw6B62u1GLQcRnkhnCQNn3gkvHprNyVffVaXbZRf",
  "key4": "VyrhJU8a3QrYtQBQaKZgkzUKipW1vHSc7jrGNJ5QuDm8sNrycXTn9tzbThekWaN9JLS8nheHe6LTDZywpLP66bH",
  "key5": "3X4jTehfKowqxpajokk1M3oFk8SKc9bT2b6SH19eLJrMwvZi3AkJtrQt2XtU8YZxTwFiMAKPvTEh8NqtuzHKzt6Z",
  "key6": "56Zs5S2Gg2MBR9HXacvqgtmZm5ZiYJeTgG94ENf66NdeuXhKCoZUSkZdi7cy8AGEwMjoTPF7Qzzn1UMJFpeMCedC",
  "key7": "4RhTV6kTK8LfHeP7SvGmBkq21qDYjvfv8Fj9Lsu55qvkujpNhevCRuXJBa6NQ5cQF2G7eTCcjKtKV3xaMeMZ1JcH",
  "key8": "61Y6izMrySRU4nfHXxB5k7xnuj7L9Yr7DA84G4vQnAadusgiocTcgr2Cw8GYrkQ85YoQJuSpetdZnFfXDW3nXTSc",
  "key9": "5fYJQ9mXdfy2G422tcdgRBTEcDsEF8WHLRazgxEuYuj5uKaTU31XPDPYwvwsTBZmCF4BU4Eo87YF5tsGXqFsVWrT",
  "key10": "2TSpoRt7V6HEtD5tkB9moH5fto4jQ611onY7ETvPGDYzeNmSn4UqpdRK4XmR7x5S3rSLKdYja55U7WGEDJToekkn",
  "key11": "4PoXELvSaRVDoFcW4eSXk5s88WuKcoY45Ca8itxWeHaCCcrGFzfKuZrp1mzr9QiF8LLk2xvdF9ZXC51mq1bpPec4",
  "key12": "326CkV9N3s3cP269fQger4GK9beYdfcbDYfmhrjC5kGRF6cczXqrmzznnsZzcEvYgQPZdjwMcq5YJg8GJJ4h7uUB",
  "key13": "mRCxAxbrDd355Zr3dGc3NUbQt4qy5bBKJN6JnYfLLgAcBcS4jyNBuQdFQvjQ2pTYhC4h82XQjErWSioNZT2zpxz",
  "key14": "2VRGPF6kuZi59g93DXMVkLvYeELAP62vBUz3sBpAJ2MPKc6yr2qbECfzZfNLQb3MCsTftShMHCbgckFasCJucS1f",
  "key15": "2saqo4uEABGmHD3a3Rgx8dwsw7Nwr9Wkce6XeK4Dh2km8czHnYif7v2BJG7tm5SNGWuZBtAKSn5JbtQwPQeen92",
  "key16": "4HRpmRwbDcez2a458XnbwiBCRkPs66gDhxHUSc58aUwSWEkH5xRtLE5z5fv1EKhE9Zi1WfxozquGFoRbxH7taLox",
  "key17": "4PoenRRZxDT17j9LzYvojt66PuvwNAJWVvzdqfmGWBkcyLuPr5rtT8PJKqFHCHHnHmWy9VFn7JkrKB52ayAaDUPE",
  "key18": "4qCKU7MB1LEeFxcY5nZPHdpz6U4DZYmJi9qqf3wUP9dnTo52LaW6op5iYHTV4GUrvaVYL2ocgSxfmhWrWXfRA7mx",
  "key19": "56vSiEHijkXcZjX6iEVHPaCCoukg6UoPYFY8RLK8RpnESwLAA9LnxUmW9FDd2jGp3XxzbWV5gpcF1QbGfA7fksZs",
  "key20": "5BZ7ApJvzgYuRw4VcRgSKYCWv6BEzym2evK2ZaWnMfdoCm4PjFQcGkN1kQDWPEFBV5tDzsoAxwsZt4XTMgFXFpmG",
  "key21": "5SytXKZgsuudXQ4zdSZ4SmYPSTYJLx38gPar66HfCrRbutmFSWA4Y1VYcva8Ljk5PVwQ9yjQndaXsGDqK5G8Z3nw",
  "key22": "4XMzDG5NUJio1Y9Hf6F54fch1Ygipeeo5xXpkGyt9c9SG8Pb2YQq7G9gGKsnNXjcpHaMbv6zgmn3vYRFKSGf4th8",
  "key23": "2dkBoxy4JnsJz6ADRd739hoPMtMA9HvmveisHbAacXve8gAgiFre1gsB3qV74UikTSpv55KRMgJkrREe4aBRsibn",
  "key24": "4Z6hT99o2zuzGhE2ZTrjXaTZZagVDYjqXdH6oWJR3BAQ7MoDaUEA5CadBEeWpGjpNTNsS91oNHv9akVpJogQHxrV",
  "key25": "4euJiS9UHkZgZZB5ovt2SjsXEyKYRtQFkeDWeSDr7gQxq1efUktC23k4gjMs9krZ6Vp3JXCrwEJTAtC5RVNNLpQ",
  "key26": "5LjUZq59pdrxBSMhJPZYxHodjLP1HTzWUYfgkGZELUNTa1zYkFCtXVjUxoqHm9EHpNo3pFN4XuS15ja4DreyAMyn",
  "key27": "hsrX9SnArJbmfu285JEuweNztYVFY2oXPuZCThuTB4iK8go2mQ9TR6tzczJhwkrcYiA8g2HTuosgbpgGGicJix7",
  "key28": "5U3j8Jaov71uCxPvhiw3okTUwWSo79kNEZSTCxFNwtqcku7EssUNQf218zSBYFygVfB4FfsdZNTnGDymr5C7PBGm",
  "key29": "5N19Uc57g6EE7aahCvzXwsXVKq6Eini3Dnbnb3dpFrKAVkJbBCoLJqqAgMyZwsGufDeu1GdUubNVBtE5QR3pJSqv",
  "key30": "2dKP2EvpCn9Snupm3rGVyUC4mP5etfgNga5hyf7pZambJXdW5xWih3bK8HmF4vWu9EEu8cszd28GtrWGLRr5Zrii"
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

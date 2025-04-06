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
    "3LQGhqjCk1mpe6V9GAdaS6G5pKcMfCwRoxgu6xXWy4iDCajgrea2ZgQEurGaGHttyhReGbWHThumnZb4NiqRHXr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3srUYDSce8uwRsRA21XfqgQ2v2NyR5pFeqKdrJK2wZeo1YEnrLeqePvhUnHmmjGUZcKvBTixWyj7KVccgWqXE3xV",
  "key1": "4KA9EDaX81nfVxqNFhAb5CXaULsVCkaQhsbUR1mzX5PRRfsA5sFcTu3sZgFufM1jaCSDMXdyQZKr6Y628zN1LKrJ",
  "key2": "5uD3vJbiFXJWeHLzksK4mQSRWG7Hxtb1g5usGYfsZhmxFmpzCuibpzR7BwTXMWvJMoZAWGtSE9hgshGHXMuQDPdq",
  "key3": "57M4Co7ozwDGav8JWCYx48Z5sFD4DmkA4gQmg9K3BrPUoFU2hw5RNyXGhidWAdRucHanUoDDVRR8WpCX6dmDQFAg",
  "key4": "24zuw8Su7Kpx9HQYYWiC1W3xCfYK3DKHCkQyaE5wKtCarAoKseyFsN53EBzuw8wJDij1HAYztLwev1CJFGntD9u6",
  "key5": "3oeRwbQC8NkSmwde9YLTk3gMW9C2wDK2sFGxWmfodW2B26v9FHaX9MTEdRLP5UBKJyUgWA19PmbWxqaGkkXy5zHU",
  "key6": "Urtprp3BmNBeUPnvfpwK852Fbq8xkh8QQHKwkh2Wp5QRnHen3N1ga6djY5LkWJVP6T68MLMNSdhw17PyYU1bhE8",
  "key7": "nnTbkhN4dkiUFGtyfiRdCFkzgc7f4AXbAFCBhutxotM33xyzuA8uYYA1qKGKCxH9AbB7TNJpLgf9Y6p1P4Urp79",
  "key8": "3HU6oMYWdCc7kwcXSzVjGSQ5sMENfRFfhMLBYJMHPBvJBaiFCERFnwnm6P8xcTG5ZJrjK6CgxBfKWq5w1gvTMssr",
  "key9": "65ytAQ1YcypBcN2fTxTxdfkgCEmA8FV6ztGnoZNBZnVoPbfqh13ZUNouXVCWvVJ4x6R8xTUwy1rN66dcAMxXTXUF",
  "key10": "VsNM1mEFCnyTBMvRw3Ud65Umw87WrRrFq7SQMSQGHMSVwqUbYtZeLzLrRiWAPC2iAHb7cYbdDeCEVGcgTTcv46N",
  "key11": "2c51SJQREFwDwV9Vn1qf75W9XUHapoccYb3sBpaSsKr8aFaQy8DM8vqfM9wUxVy4d8Cx7tmU4RASNj8KHNrzzv78",
  "key12": "3Wao85HF66uXHqwUX6KRmVLWdjs2grQM8bbakxGqX6HC6j9wYMKFxCxqKeYY9BromCSqnhPUCBQy7RwPKpccQ8jj",
  "key13": "b46kjJ3sMn356LbDYdSTrEjQssqo7MNZEQ6NUxSBhitoGEUiUtLw7WrbXNL2AUxFQd7DsYYkiAxhGZnJuuZpqTH",
  "key14": "4QeN1kahEz2zX5Qceaovesgo1gDx2wvELsYPtJJ6WZ34iFqUp7UDJtVNREeh7CH36ktbW1WaHWUbJzze155Gmo76",
  "key15": "3ecj8VavWxaSHV2uWKa2SWL3captQbi9WHWWtvpD8Nuinj8ffw2eWaCNBqL61D1FUK36dMjVaQ4tKSBPPeZwLEaJ",
  "key16": "g51g9mbAwD5GQQEK7siJ8iqPEg9M7jnuMy14xpisi9TBtqqcnAUZZJfaZpaWTAZSwWzzfzLsyPGZo2gUvH75gtE",
  "key17": "3TxN4yCJkH22UHmVVCxdL7GWembJ81yDPfcuwZiuAXCqcGZjZTDJFTLzEH62csnzBrxtFXPV7fSHdZGVG3EVg8Lb",
  "key18": "8ZdeWU2c5X5pQ29YKGyYB9soXc5S1wT8hRB6VdsXyDUznc5utaZLcJTBYKPQiekG5TmspCttBatvziUf7ddJ97P",
  "key19": "9H4G2FAMgLJtL7EfvT9a8bfxc9jurEbbymAWqB6fWzRyqenf1p9o1HrwodTqpYdZotgSwgdLQekLNrc22Y5ta5Q",
  "key20": "54LSai9jcDLV4Twvw28Ehmk4GkEPQkkMWXFtFx7xcFZyonbckjkr62ZY3H9LiAyr2KhQfwBW6S3kggmSFFRmjJ2x",
  "key21": "5bJwifLDnKTPtB3189yRURTdP6hT8iwzxAXrxUyRGpx22afGCxMz4CGvdN8FJJEAKAXe1zFETG1mwrNGeG8Sa8Np",
  "key22": "5V9nThduXWSbUpqio1MsRGFePZFo2EkQA1TGKXBP4NuWUv1UMnz5SdVKL9eiJCFk8i7MJrSy5aX1RZJftpm6i1D",
  "key23": "349nbVYjL9yYbECHd9uS97zECCJ8XJrxZ1gyRHYVpkzDxeTyTxaVrQ5pf45uFG1rkrBzCZyGrfiRRZKhsbW29ZwP",
  "key24": "2nzeKxJUEfQJbp1YJ3kCFisYvTwWLLYPgLpB1YdZsorq6KKd2x19ioARBeRuRTKCFyAZxTTBLf8HfiMgYKu5aU9b",
  "key25": "KANSCceUcySEvTVDnpURexZ5VzmoHUPuJUwfQbsMdA1bHxyPvsTz63TEKTLzLAaRRiQ4EkTteXePixjnUvaKaeb",
  "key26": "2nTeJ6epkX9q9tc87qG7crVqsqfWLS3xAxRAQbntvTKj7Kt8sppwnvZLXdZobJERb49cyWkJvboLeqYD8A3S4rRq",
  "key27": "2As6S1CDhS4GYqH2RMF1jHAguN1H4gvRq2NTVghPJkJ6BzBaCyQw5gk5dRfPtrdJqgCm4CoCi9wcMHJi7JHKzyex",
  "key28": "J6ZCHztFDDZTD6DqyYGvXG4MxziCkKUBKkDR2anP6z21Kff5kUQvXWML6cj7bJArS3xC865jfQBeycBPvASRQ99",
  "key29": "3bf295fiDHBWGt4ZUtu9ohpWNKwrTjiyCFQCtwWHEnGqhgGoHcKBVchXqFtfptv4eTm3bhzcni3Hj4xtG9vsfKJM",
  "key30": "3VfjydGzfwXEtDGCvZ9Lc1aV2E7U1QSUceqWNew3wgcbXhGgLe25a8UMBzFKBKtwAt6yJssbxbQ2r1t2CWT2V2CT",
  "key31": "5pDUBgRP6rFax3oviUZc2796Vtsxhto8jiec2W7bKDMgb97bLjqAxAY5E78TEYJzzx6hMqHaugH7kBAMrSEQCDzU",
  "key32": "3qstLBRgdq4YWSMkSda2rtbdRwdQrc2gjA2HUuUGDKQ5SA4nk1PfzkhRQkKbHmmsBtBDE9NonpYRpQ8kSKTAkCzF",
  "key33": "5WdzDaFegzYsXdtHW1RnvrvPEGH97DDRW3ZsTEwhnLhpZi3v8gE7VV5moexGRLTKUNTydzfR3jAVavK7bmBMgir4",
  "key34": "47WbpbmP7zAWM8xZv3RFKagVYwfUg15nHDgsuDnaPpzUKRq3jDF7sf7XMW2X6KyStaw7PBesto72WSXSj6nnPZwZ",
  "key35": "4vmKFUNztKAeoE3RgUrMbYkEbmSpciuBboqgb9sKoyETPdZpm736pxGwKv3R1oo66f6p46EpQM1V8YLcqWUWVrNA",
  "key36": "2w34kYTTa9knXp3WymX7sUmUrEYtUVFU2Gx1SCJRpeLjCWSp5jqG9Lh96SoKherpwuZNUdhDUNXwUfCFAJhf7Thw",
  "key37": "5jZFQmG1Hq84XdeAAvHGVHCtfnjWiDUiZRSkNheScTS4VSUAe3spmn619cmHnrziBpTcxKxNzLCrLJLPFLiVrUh8",
  "key38": "4RCzHbdZ17rNgC7zgFnPhted2MJ7Er7rcYRv7dskC9xEqAwniVL9J1vypDApMWvGM3NKRPS6jqyJWnf8EnMgry2"
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

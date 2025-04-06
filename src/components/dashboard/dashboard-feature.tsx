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
    "3CDHfRAoPbqBJL6UvwXT7kEjffGWEemNRDQLvor6YJLBQDdTSfyyaLa1shP5DrpM2XkipPCJL3FucEKmFkKDtDbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58KRRWwEYgJx1ZGdxiof42BSTinAb5KXWidto6Rv9TnxTTnByjz4kaSGo2sP1cjfHXAi3QU6tdN2sYhPCxw7hAnd",
  "key1": "66zKF9Qakf4Tz7HDUKdJ8hVaSrmgMhBCkZjXE4WpH4ETATKd9H2wGwbUH2jBB3UCSLi8sMXuVspME8zn3xvkFFYZ",
  "key2": "2HcVH26getgrxGUvnmZDPvVmV1cQwMcVpUqamxrXV8CjLwL1fb74DB7PsoUJ9dM3UsAFUvZ29nJtVbb7uztdUDVa",
  "key3": "2sgGYWbnh9RtFeb14rPPQ2LEjqyMqgEi7bAxNPVMA4TycYE6RyWwrBGtnpQo69w3qWQxfxSckKB36fNdTQzKuSuD",
  "key4": "5f224GvHUoydteoq8QMEC7KqgAu2VyNrSRG9uGLdPxBxvjn5WvUhqnY5mm9hnwHvqNbCGBRGTZsn2QM7Qeku6idL",
  "key5": "5JTQcckLeJZj2BFDVTmcE2ryDTqpnLVix5jQdVGcseJQnVsPShY4hDwCRd4DR8XJEahS9cZE2CQQz7d4fNZtGyuc",
  "key6": "2PqseuiUG7i94AT1kJzXJdc16j81FheXtZRvmQtS9QaHbysAiAs3MouHQpRtueS6DbJ1tYfNouU8yKTvf4SFQEw3",
  "key7": "5gWzMhZsGUmDSJmRDqinpLhyVfPNF4jBZASw1DCTsHt3FvgoEcRKhpoYW7hErrjsS4x4xcdtf8AHpU8VATA61Pr5",
  "key8": "3hoXLakkapZu5XfFaWEdA267LTsH3hGREsA15WhVgPPKgzduLSYsdw7R3yeZHuU5x8fW4EDDhC8CAqCbTpb9bgyg",
  "key9": "8U13WTnWXG4RrxoAFqLi2WRphmndRkSWokWnAM8BbHHXyih5bmhVGshsX6WkxeSEzA4KMTcuntKbjuCibfeqMJa",
  "key10": "5xYE2bZzdinwPwRBGLJ5wotfdSMM6BqCFZgsMPGQrcy6afShnLCKNMy2SMntdBAsVyJ9ZWA2DisbPZsRfA7tVUhV",
  "key11": "2dtqwpecGNhYiXYw9vkdYjDEQS2nfek4umJEnspywvNjUQVnQyBBwWib911UeMPC8uGAovBYA8CLNGx3xGZTv98D",
  "key12": "5BmAwNT3Sv3an74N4ZY3phuvXfUQd1h6SuFJwamp1aLmxKXL9mVkh2Yx35r51WW1beuYBif1P4EYFfNn6a26B5N7",
  "key13": "3ZnWi7aPo4EUiQvGKRD1uGyZp2R9ak2czm5URuiuizVKXp3YwcaEgTcXDvBWnsbMNvFxQPuDJYRQbX8zLqs1JZFq",
  "key14": "52X4wwXDHorJEwb1waTubFxmQpSGZFQGRRLwhFUpcdoQ9Weacq3q3REtSAx9RyVgaPdSvKsEQ5qvYtR43VSPZFCP",
  "key15": "4762jUH8HX52zqadGLBWBY3vxWeBToU6ZxtkqvsuxAQ2nZya3wedDhzSq1DAwVsxySNisAZk1ojunNE6u9ETrDjD",
  "key16": "2jkL9fY3ZL1WQkh2FhkjKsSWQyrivEUuBjvnpc8rK9i3Y8rAZXtsV5o3qgCWU18QUTMeoijYXhwMp9GLRQiMRHQD",
  "key17": "1VgtPbiosUYwxBTvcu3rQMdskfCSyNutfN5S3HUZBAxP2sRWSu5FJHeBRbadf8myiZBcAn8u629Jzhc4L88V6bL",
  "key18": "5BmEnx1AMXsg6vhHMvV2XqgsCXRV8i1afqAMmFNVpyyKDZqNsCLNH6ZEfqAswFXqReVs5pcsZUorUAYs1xU9iEvj",
  "key19": "3CCVAMPTjhhBKvDDy6jCYaJ4EdoWMy6QdMcvrzVjMzToQbbeAa3DZjMUN61CdbjXaTaDK6d3Kcj5sbWzvSSQA7Ss",
  "key20": "eM3V11dfkibZUdaPQQHDkwRQ1UPciBcbyRx9i25BDgrHJ2cab3huiMeNZezqR75VCwBV97f2NVDCZDeU1KqeziZ",
  "key21": "59CFySKL7nGKmaJvespWJxkgNXMv9BCaRTV7vztLM4Enjrs7bGjEjqArhJBEWoQMxJdfxgbrmAqGVCgbkvv8E4Vu",
  "key22": "2cA93pqwgqXRx8G73Eo7W8tQyZQxiVC9PSEdVGoK3iLCLGFV6BiSDH64Cziiwge2w7Lgk3i95HPEnzjqXB694cY1",
  "key23": "2Nao8BSVevATKzB39H4yXaYYb5Spfw44ayYkNywRTPqjWeNr8cXBhETyKtCQNA3Bbu4i7YhMLA986ys9jPfBL1aE",
  "key24": "4uSHdvRB9fAxRZbeJdSq53U9yFH2fLnCMVMN26gs7SFScepQvekbvmvWyQuZfG7NEjYMWJLcT8Fo4TZE3e1kDwTv",
  "key25": "2UpbmnbM1hxbyrhqnVxshLYSENp7U3Msb8H6SGnYausmCy3J1Btho1NymdVKWqwMiSqvnD1t65z17tTmuPdWk4Ki",
  "key26": "5UzysNfJws5S26QtNHUejJ6o5V7NTVRRTEuG17NQF8F2A5jQVGJG8Cp1D5XHN58Mhy3eUo4U3vR2s4DTU6Bv3geJ",
  "key27": "36TJMCS3GdMSVhLszzs1Zxe3L4z6zrGCe6V3xMyBPowos29UW83XMk64db47iNNyCvfSQiCjnLk5gNGtddCFMzcQ",
  "key28": "3JBUURKrd5FYb4rcQG8TLLfdHW9kv4jhCijdnyNj4Qykapi44Q4opQrL2Y8AprgDo9xoqQJDbYbVyKJKnEzkjM2v",
  "key29": "3SC4A23Ab2f8Fzz3628eQ62prvhAgH3eY3LNwLCCAmsJUie6kotYBCdgFAT7msGGamySECjU3BZb5E3xqsPEFyjZ",
  "key30": "4PcKX6j9Fy7KJiUHS7gpykmgwgDKxZP9s8CugGBjhAHwqXRbquTnW9AchPEQSBHvtSFboTXG6V1M2AKkRF8JkURc",
  "key31": "3rtJaqdcbUfzcuGYTonRwB3oBeQfdgB8RRFA3CMSFmDJUkVGRqHRrS1d7LiAa8A9w9N95df5pnCo4eyXZkU3RHh7",
  "key32": "2rAyuViaF1PjtwfZp1RrNqx3RRYr8zfoe18Pj5Mw8xBpUKzEog6kYjbePrpPtfaprCtu9tFRJLLS55WnRJ3kRyyw",
  "key33": "3KwngmPTHq6yFyfAinJF2srMj1LDLyAbDknptGtxfy5szaGD39gPiMzBWhJGpArmN32Ft5cTk7wt4aifKZw2bBsK",
  "key34": "22nKpCQaRL4546KSbjUXcSKLDNz3w1JyYfBzBVLQJyZ1KypxqqXYRYjmie9JKx9wP1zrvw41qXfjYzts1iG3Kk6Y",
  "key35": "4CpzASvbpr1zUkzdRUBtUcfbGm93BeM7qYxTiG6vkUT4iuoR8bNdfbbACcaK3C5bzAthFAgezYUoT4zEacGM2sVF",
  "key36": "o65jFS5BN6hEYirYyd9tkyQT9zcjFVvCkhmNNNuf9faj4dBf6nqvkGZbzC7L8UiPRRyETvEjzRFtmChGZEHUxJ4",
  "key37": "n6SuWtr32STiwur8aH2CSXVUbUDpFZoZaa1MoMKWGnWDLNR4pwbaVYwknFTNYaVrmRtQxmMV5Qro2NRHKGFPc2Z",
  "key38": "3wYABGi3i9yKowYGpFGvaatNbkgGs5bk7EC4e94qF5fJ3jECVH2S1JAbs57pk46FaXdLDW2TLZeB4pd55N8iC6Cj",
  "key39": "4XZ9Fbcmr2QtfxVGyLFfbrAAgfrZ8z8PQC1STsrhMRujaRV38k992urtuQvfSxYKtGuHJnti1MMKuRf4DaeSAnjQ",
  "key40": "3AJgHsqAiyr8LNL7YPFJF58kD1Y2X4zKeQpArZ72oVZY6iN2XA1LsFPF4kw7orR9AEZdTAqBDEgLpJ6mw8nVx2FN",
  "key41": "5Xt69uCwQWBjwekzdFWBPdxkTBxxTgjSSYMJByaFFWZh5Tfh8wtAKhwZQ4RRJr7GAJWnTS1ovQpDtLdSh6X3w29S"
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

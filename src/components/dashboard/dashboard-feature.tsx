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
    "4EfEav6PRXkUFuDDSXWGVX1SrudspH16zk1oaZgjeXWKbi3Uk3snbmoA2X6CP3aaL1HM4RHPH54EDkfA6UzDWc7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aMrerY8qEAyghzjv8JFezjqSjgcK1VLbxivhjrTyNyR5RM5JAcKnTvxB9gVx4ZpqaEmZYoKSBUboyCRH3M21NbU",
  "key1": "2wGgvArPyjxGxugpPVo353NJz8ZiCqZFMZQKPeN8fQV7giA2SDGpCbmST7GGunUP1z3t8JV36GjMNnHi7oneXFHW",
  "key2": "BvGDSUZiqQ4gPLChrfkABVtTT3Drdoe1csVM46Pn3ckihf3d9jRP4mVCnXvxF7FYke1jdMp7NshNbVmh64bHvnm",
  "key3": "2ReXXhG6XLKSu6jaJZpgvEUErzH5m5n1U2khCqfdVGQkWTXyPE6f1vu7jfzd3K66bHQRVytHjn3t1dEHrpZVwWbR",
  "key4": "SYmbTUX5doGTRDPfbKgR6127EZP4AAEq2zRGQfyNLDxiabHgYqM16z7M7qAac7jyQ9kDJVev7n2fyZTWd923nGT",
  "key5": "33SuJzfvCQKVJ68qrgMPnrxiQum9L5a2aL6CunBbZFJPFRKcDRoh42Uw7NVQaFQrpfjPS79cNPgwDMzztFAcH3gT",
  "key6": "4ScKU6Uj2DGhKjd7PfbJDcoSsQ3y3SpfoHGjWnUrfoEwyQCWvrHgsAuRM4BUSdi2AqNze5mVxUqgyRv5DazRzuUw",
  "key7": "614dsHZm8AGgucafsLoJ9p2MLduXY4eUBePm62pJzB4ZvtBs16VMp1DmcZpTo7BQ8STWdMzErLWhnxjPQxTWqEjz",
  "key8": "5Avc4Q8sdHyVz7aAKVtbz9VDqjoDVLJQa3sbAehQjFkh5cBhtFmKs9qGznosQmVadVJwsEG6pqxGGPsfqGsXXm7G",
  "key9": "5iA7gqQur15Kz5FkLppJzMhL7exKoWAJ32JjmcE3RRC5tuoFxbTQd6oSsTHTRpz1Nn6upwwK5j7jqoCtswtK8wdh",
  "key10": "BSLQCM9UimkMdLgnKZsvnQQu6owQW6Z8gcKZDfUucNcEsEpb6aMr5cbuM5rm4y7nvDk5yioidhiAbTAQME4dLqp",
  "key11": "4bVnQseqJgfBKKam1dui4AJtNBpv9sgmkTeEWNoHaiWaRoXUiyVt8NDfAGwnH6nUnnRCY6YzqfeLx6YJCvthac5h",
  "key12": "5zo13JpdshKCZUBPtoSrJdvYNRCqmuqZ1RfxgcRVzcxrTBkDQkaRVR35QdQMkQQKCcZVjndy82AmDyAHsbCip3yr",
  "key13": "CkpnKWWuPykJPHo2zKF72HvHfed6Lqj51k7etByRsm1JRpMYHM4Ws1A6TLyGXdSCSmu5ZikSnMS5fctfxWGptgv",
  "key14": "28YoassHGTWaoZDmj1y9ciPNKxDYpmFbTPWmhZtqckJqEiNurDhjPgs2ja3nTxL4J5p7Tq8viUk649L6SWs4nHUS",
  "key15": "3AWAfDiyZ3ERHzPQZbc3Abgf1Qm62VhZ9qnrafHqr7hY54wZVW4SUdjhqM6hArqgCHNuyBw1ztqR25dq6B5HcYdq",
  "key16": "2HABPHn7AeeqdNWuy3qD7rqHSrqiTAvQkFWRAmnrrrYDTGkVBxunRBBghfyuXT5wZup7LEjpNSHBa7kiuTuqoZ2o",
  "key17": "4R6ygak7XbAfMKhQKAstCD28eEcXKM8FEQpC2m3UuYhsya7XqvGxxG9WTmPkQnR6DvAP71kNmBXxJEMvD9Z31cRC",
  "key18": "464PyKmBrmmJn8eHgGgrzBX2sNkXwUHk2KX5P6JdtzQ98sZ6dhs7qTW7WAV9tMcvLj4BqizY2rev18kAEz8fV4Uk",
  "key19": "5LWhixSmLpKX17JaMTzDHSez63s6xsaAzraP6j6n9w3C9qkJPKhYMd2s1XJ5MH1bYTLSFVYwSoMDFPrNpC41LXWi",
  "key20": "qhCvjV5NMvcuT2gG6PCHc2Cgnf2aQ4QRDPmA5JuTYnyV3njko8HmU8qU2RokzqwbZi6nWkp9NYA1jMYK7LEFJAQ",
  "key21": "2us5447Phdk2WPdfNeKQtQkaAjVKQJYWbGcsCdwfLDdyXDZh7C65ozNsjYgwcLseWyLppS3gmDiHRqdLGHr119Fg",
  "key22": "5dVgkPKB7TBQTcApMRVDhJtQvQgZi7zYZKKiyLfURLdp6pCwSNUWRTq964hiEz8YvogAc3TL2gzgTgGMpZvZHxPw",
  "key23": "3g2jFXkK1PfFiKbuv7pssMhX1GUqxdHUfP7auBs1b51AeX1WcAegxuPVmFD56xedKBz3vALX8qCoQjuQzTpBL75W",
  "key24": "4QYKtWHt3gmBbcteXRj8AEL3Efr7wbv93DZJCXPJVccZQyJbMXFHWZdY2XpPh7sHVMbzyphj5SfDguMvtPGeLWbP",
  "key25": "3RGPnz17ckX3moADpem9Wr1tYY9G8jtkNQri5uvytbD8LXWU5HQfxiEsHzKTohABnu7KhKnh9wtaW9myc5D4Xk5",
  "key26": "3kwCYEsQXXYJVMvprgQ5JHQwUPvHaHFzr9mwgfvCQGZwCEd624PomdaEEtg3mCwXKrUDA1bgVR4tbioL1CN8vM3h",
  "key27": "3y3FLFYxYHJf1AvznXrBNrjwVGxCQihkMkCsc8HngGxupfYE2r8ZUkeStKbwfNnFc4gr95ySurwwpiT3ZY5wH7Nc",
  "key28": "DbKAqE9Cny1CTraU9S7F5dmta2vB6emfvmkVy335sT7F9HJLxy3expCBuS3uT9PGasSDUBVcTqjgpm3F4569LKb",
  "key29": "3fyVZ8b2mAfrbqKvj3ksFmuRP7inmf92kHmhnmS1Kp5dniskVMBg6EP1nr9T3gScvo9vUSSXNQc8g5CBm1rZXGpW",
  "key30": "3xQ6RVzdU2g9PdhvABMnm9E3zAnYEhN4g5Dndp6iTfjWPBeTuUN45RdTn9dNXgFHwMzFV9wPo8SSuTfViUNLMaB",
  "key31": "3yhWWuMbLC3hRVEDWpPZay1gWRCPdJPXvcVq8CMtihpkXe5aRgynkoSMyyAbbpHQcrhGJmjpWarSXt7ZbpsZ3SLF",
  "key32": "3gHbMLuBCM4oEoARgdhDJwCeouTrMmE1KAUHJdmYjyherdThqKNtrjQL3zJkhZvWvdTw3XyfTdbykqTDg7T6Bqpq",
  "key33": "9gYwfU8hgBv4kvEpsxnpFP2YnFpFaJxvdbdraQPujc5kyj1r2ALzo9aG7awPrhJYaqkAa95AYCz2ifwPWFPGFCj",
  "key34": "3pCfhe36hKstm4zhHn2jguTqLvD4gwb5VdbE3APZKzDHdV5wqPUJAvCDkt5arGQTShARinvw3wGiAtnHqo7wLyFH",
  "key35": "ccoFxrVdkvvumrPvWccLLhNVsPBYhRTkiFwo8NnfXi9dy6qGnFtvLWGn7X1EBVA3pyNfFwKYzWsQ7od7YYqaKjv",
  "key36": "2Gi4waNRG4CgpwEmAw4UqQZJoAH4nMx7wWePzB2irPQBij2caqMZrHUK7wWKXrECzhBNq3A489PMNe66hAp1WtF6",
  "key37": "4GgSss3mmNMdnLRBNJBWsxrtQAkztAjisc5cekaHy84fofTPLyngJk7QiZbXGX1MUjm7cBEaLjdeienGd5ys1QCk",
  "key38": "4JaY3LiKyy7S3mZvhW28xzMy121roi2UgXtoA4QTqKDx7rq3P95XiEVAVLFjeVrv461bUX4F7m5z613TVeHh2sAc"
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

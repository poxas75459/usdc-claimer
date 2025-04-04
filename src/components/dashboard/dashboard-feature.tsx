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
    "M6NTnGHKbMe1kdMZKkEU457mpHpYH7kKMQC2mgvg67VpBMqBk6Sps5QXCDdFMFPgW836FoSySDtn4uEdeTY9kpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmARFCzaR6otJCs5Tv4B1vXPkrqyjr4SZHFYvPCPosnrv7zGaDrfsgL8a85wDtbhekaN2SdJbw99AyQHDiDrKQi",
  "key1": "LmTuEisDBhHFZd7dkd9L85VSXJ5dQhfczQfgZF81DJvqpttTZCvszC9kxdQFhKxkHhfArUQvgWYDaKqiLjAjumR",
  "key2": "M9TSdRYYqoEhpcpCGY6mgEyA726CD88gGZUj8MSSUGWweQ5jNjJabqsfbErrvGtQX1x4i8gCXF1aUS9KPUjiqZa",
  "key3": "Q8hbAS58h1ucvQrPiKYaz2cyQRe6sHk5xqX52Lvm3Au3tkJzvKY1SfQepQC1rskbyX5KUtcZ8L8LTsDVEh3RZjN",
  "key4": "1ct2fA9nJdGKy5URdS9LudpY7WwvqvfmuLBjBTubZPj5FNHsv7RwWdjqFLfgUfPuYaBYNzhAFq1DuRKaV9EZoVr",
  "key5": "mNXBbuxwG2ShuJfp3YktqDpqyTKsUH5ErtPhApkgiXkiyzmciHxevgxXkXUFHnCXhi27rGUrkEhs3Di5Y9wHbAX",
  "key6": "4ircJjdFQ29BSyuQm3CVRdzJCBdpyVDUuze1yUH335PB5Qrsyqwe2tYtqJkPMRoNt4fwK6pTjxb1Gyas7aqxUdug",
  "key7": "4ErUErjsbV1aioj6yYRZzvAn3aHLc8a9pYFofh4psbamH8N4uZZ2D7e1UuTDsQXhryW4zjnGhNL7qCVJzvewPU8B",
  "key8": "3DoVmdbiDe5aPT7aM69pazzHeuLzhX9ia6RzCeo1mdLm5WTjhwmsfX71TLSPt53LBRr42uqTCGf8aXw3d1rogXyL",
  "key9": "5TZJQAzV7jDkgUKT4c1QrDZ8VsHhwqeusGZhS26xvTq1L1Kmzijki844BEqKZRDZin4LYF8EBpMjwD8w69zaUqVT",
  "key10": "2Wq6XbpKDbsnYicd4nSyea5YA38Cm1fQNRNonGb7nFfcVWVftpFFkF6URMuPEcFYfGJdwuSRJbWfhAQ5aDhBfY7Z",
  "key11": "3RgniFJ8GSVHWBbyjALmdmTZu7d4ffNJqhKZo6j4A8VXTromD677U7pB8ioVte1RCPEQCxdbbpGoU8aKcZ6BkZW7",
  "key12": "5YrstNfA9jTKvcP3BxdmNdBp6PzV6vvW9iorbdRS8U8gcANr7ikpNopcLJmPvbmzGW2u9VdrpssZM9vVBTP6ZjQ1",
  "key13": "hUFYu1PRSNgxF2fgtQToqmDUjzoaS9qK5YsQTTpq9bNpNgB48vc4mPYQZ8QhJkqNatqczTXeDwLCXPuz7h9odQX",
  "key14": "3NUEC55WTu6xLqVwc2MvYucYCeDedKt13FCDpfMV9yEdhBwThGtfQsVcZ7FX5TP7kzmfeXwLcnP3ybpjMbao9Mt2",
  "key15": "b8rr5hzxXbb9pmRPVyrWWaSoGGsypaLd6iBSwJYJoC673LDoV7dHJRAEay7AGfbanL1bKoDs7Zc5J12JwDrZLUV",
  "key16": "5mMJRS5HDCSdANRDzvkvnsaBN8pErspNmD44ZwhZxgy7fHKwkoFwurgNyTbEJSoSHciD3n6dqq3LVjfvrhsiRjuW",
  "key17": "62hCYR25uRgFDCkxd6q4v6hod4GYgG3goHJzwDGwywbTWkYAmch6GXkGqVYY7xmpNuuazZCAt8HUkKnZNnJaFR5J",
  "key18": "3jXWXTPka2pnY4MUw4wjwFXMBXq4FiDCxTH3Zrt8FDF63F28opp5Unkw85Xk5yTcfwtVamnYhvN91FjobiRnEqRR",
  "key19": "2U5pAruXa6GWEzK7YrJY3CB6uw4zsSszPAuqyU8e2Sgm8kMyLCFxKeSeGjZdoysG14M89tjRXmyzRfsMweSVKetz",
  "key20": "9ZcH8Zr8xWCCkmwdKW6R2ZuQDqjocJbSw3HxmxfR5jygwBypbwTN5UpWDE8AG8RTJgJn9D5epuKcbnzpLiHKQWy",
  "key21": "nG9EDxBEzbWThcyCy17ujQSNYurm7kcvFgZc1124XLukieBTFRL9udropDmaoBDtS4Hdpxmdy8XLwqYmPj2DH13",
  "key22": "2vXZeeeRrCqg4XPpkX5jogzBPHidXZryg4wcT5azBVbm99dAwe15kP7VtwKZGQko8mo4WUTpU6RuSoxJpsUECewz",
  "key23": "uo6o7WeaAN68MQ1yMtz9tR6uRD2NFV49rgcgv6EHwtWyqGm7ZDwPteUS8xHM96MU3uCDuNfyAgbrNRogaC2zTaf",
  "key24": "4LHaaavGrUoUKSmfVEywGHMUayAWd7UgQHqhE1RL4cPfSRcrb8BcYBUtzRQZGj6SCnjLqbojG24yxXZFGLLdmPyk",
  "key25": "4YHAfxoGaGffjBTcg66MDPZwovcdrESxUtScRHAKFbn8BgFuYNfrzsssRkians8HMiL52FhFD6DXoZZ4SuMnHe2z",
  "key26": "3YqFgZ2BjMi5CSP9AU6FxdkXV97tFTWmkQH9Ejo31VQWbyf59NTmV9GPoEbrJNyHET8u81zuCo3LW2spidsALSfo",
  "key27": "4BaRn2e3FPDqEQL5LJngcW7o5fe8puzm54ZruWGnSdSMbxTYFoJuYQw6kAApNZR9gJX2aJRcuCCN93JYJPUYNid8",
  "key28": "4knnYWmKMFawZ2giJ6NhQye2F5g2dzM6jiS4aFnfxwdisFLFdEwSGhSocTCZeHgUXtTYk7Js4WY4vfFNKpi5Q3Hy",
  "key29": "5DmmGi5zGqdDJgJ77Ju5RKLJYA3aNtds5MUT6Z2ABsiRmigbu99RX4zuEtvBHCoUsMkntodCPREoCq5LgDEpNBV1",
  "key30": "3sLs9fDJL19m182a4BUPXPch6UGK61XoiEEJEcZCsyZwQ84V3GEAPioFtHzrHh35mVtpw9ReiTJcUB9FmzQhWpwo",
  "key31": "3E6ZLZyB2978UyCUQw175SXzuxza8Fn8jjr7G9ooYiwUKCakS7vcNU8uMKBUqLy3CLZk3xzKLjDRk64VXjikbqYs",
  "key32": "5TAa4MPHQFaGthyMRtWXjXzkc3fwhoH22t4XXUajk6FnwFDuwPvC9ZyWH6eJbFkiNnfDPJaewgm4jauuD2aPu8pq",
  "key33": "4eTf9e9oRrJxkSjCMA6xxLoyN5n6UaRkhPxiywjUkaM8B1zWXz5XChFbF9VkPdidKEqbKw1G2UsQt1qeiQnmCmD9",
  "key34": "CgjXhg83LieASau3X4NueK8EvNG5sdPLxuzUU6JEG7UBaPHCGMkabvi59MRXD4RgohxJQixSb3Upr12UNfa7xFM",
  "key35": "NjQkTsHrnWPUZ9GBPtvttoT1ALSfrZHTZjz6iS7mTfQcb3JUM4LMZuHR34yoUHqioUSP32Me66NhYPSrSDfruHP",
  "key36": "GZMFUUXdH7Ye8MSUqD5AcfKMNTWuThmTkMMheR8Gjx7cg9QR8nhFcKBvf2SFAHgsVmJAddth38GuYwdZxoNFU6T",
  "key37": "3WJE1YGuVWNBtYmLzeMJTto2nbXphuBYguqjHQAFoxvzsPSHQKzkDutYRSq238XHLAqBCGhCyyWtVCPBfaCW1CN",
  "key38": "8xqzLmNcsbAMzV5xGeA8Q9c9APnCQP4bqhoiY33uayzD9bP8MQLfdArghGHYupfEXyEcqc4GhnRqMo4vzgqAxsH"
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

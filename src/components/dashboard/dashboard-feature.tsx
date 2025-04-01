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
    "21Y5Xmoqv3YWw8WogYDHRNXicrGim1xLmLaBqWBqsMosTrx3PBcue8dfGWj7MTkJXGhQdzMcf3jfJfv1s8kRZE13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svXFZxPcvyqe8nydd4x57tsqUYeX9FZofWyfidNEBySCXz1vwYyYryGpeK2m5zijbWagXsLsYBZ534L9LtEdfcr",
  "key1": "DTquXDxbkgkL8wd12oFCwJUd7vYs1QiXV7JvBv9VgtimU9iP7mNCgVVKcuXJcM3wnmYqtoyGRfMscpxN7bVuSFQ",
  "key2": "4apvBsaytdCHXG3Mw3YHB4u4VaoLBQ3xJark6HT3dWCgGN79RyfvVbLJWEtWit6Rss2oWKKBoUwTxSJu2sKLv2nt",
  "key3": "2XKeWU6qV3qKf3uw69GuaJa9vRDMUay5WfbKtpCXVNWRjKsHoVt3Nkjwc5wcw75acijDcMxPFTNnJ2yJnogLzF2A",
  "key4": "5KvgCp32u3JRfdLXXAtuh39Nz8Vgsx5tXYRRoFSGwe1THGuB9ZC4oktCzuE3zZ3eNc6UkF31gLb7JRaND63wE3f3",
  "key5": "2SS2PbBAvZYgEMp2rMA5C4sUyBhW32tKu4oKQ8F2bYSzoGuXTPDK3nHGnLb411EuouhSP5T5tqsC87FfDjYnBWEK",
  "key6": "3A1iTwDRrkc5D63kch3oxkfrvxRGpsVHGQzbjbn8rYPW4aSbm3JmkFFAYEz3BC3FM6fa5cefSaJgwe86Q55uGTxY",
  "key7": "2pEkzH9wKmsXdgSTetf6Qo5K64oXGzT7pWMcUbpXYScdHPzsVM1DifHsbePq1JvY7UwVUcUZo4x5VsATLVhmdGrL",
  "key8": "63WQEr1FSfnZwbyZGnXJL8dDhk3iMi468o23NDLuGkX6E36CZ99cGmhrhvipY1bvihVN7Y92WUWHSzwo2HVuAKRG",
  "key9": "3MELSSJXTAzqrWGkgFguradF1YEnVB8wx9paNNtFqZc1Vtagt1Q1eH3goGFs4iMV74Z3MH5NErqC2RAnZJRTd4i9",
  "key10": "2HQ9hmk9DpmnC5zGjS1A3Jsfrrbso3Rj3SWszeVSFHGoMZqMyZJb6BCK9Ku8pyk2cJurJyt4F3puBpGCsivfJohA",
  "key11": "3q2wz3hUkb432GowwnC3YgyjKcB7VmYTzLw9DHeEfN3pYXcNt8D3j5y8NLY5Ux18Q8XKz6raS4yir3QRWYfwQaSu",
  "key12": "2NCrQjbApvLGKoCoASqcfPnxWeBJyUjUMFMNXpdtzXXg6fsAnG8hDhaaKGEnZGA9HqQZ7GhjZjBs86Aa19V4eW72",
  "key13": "3YnNk1C2neVJt4dLLpP4wp3z7GWi1JPRNdwohjNy2a364gyy8Do5AjiBqp4u13BFYYcNESv7g7xcc4ifzmGnYsVV",
  "key14": "4Gs41xux9tGefwHL2ngd2DNSxjvf1Tgr6YQyvvCMCcruqQbyjTm6eMLFhoGXammKenwQi6STnuqtWu1adNGurfCM",
  "key15": "5zQxKC8euPqnrdoV5S9kL8d4CaqqYdsGrFSxTxPqvon8EpHzjN7JcaoiPjrcHcH2MKuy2pXousXLVPQh73kKsPMK",
  "key16": "3waF6hPLisB5U7qiCfquNB42HQntY5MHNzeaYuZFk2HGvHquqr31JuE4uWSjWmi2KPuoi64hNgZnBENx14WsRnSc",
  "key17": "5H2iWMYpJGv7ZmVtKxbMkscZ3hTjeMvDXVUBaDrMnG9omT597Uc3T9kzEgbTTWt1KZSb6okUDpgoBi7bg4R8g3rk",
  "key18": "j6mn7wwVJVtr73D5WbgSUC5JRSsGLgQct7M4AwrvmWrszLTnjNPKUarPQeTWSgLRuZQyTSy4FER2UExcKNNUEz5",
  "key19": "5NDSoYCi7MAPVX3d1VzVop9deWYxK1EPbMooaLNhnmTHGbQXqKWRCrhjUJ13TJUyYsrJ4VMERUoqRAG8Km3Z7jSX",
  "key20": "jcLsqsEDXX6H2iUN1CYhbNB8iWvXBPVPhBZkMaLVFmrAdyABYpMa9t9nPyCXbZZm87mcYdEGtDDYn7iCmjvuCtx",
  "key21": "o27JNwJ2zy88Yibp2UwX9pqtXpd64xUr1NZvBa1DyEHf4Be2QQhUbkFExrTjsKTjCBx4PWGf8sHsBiLYc5Xa5dC",
  "key22": "4U24wVDVaqPNj9p5qaK6YJSFcnFCKPDriBmvZxnj3W5DkLQnBNZoBgy5DouRniptx6uSbCMxqZLKkj2h3eqAne9s",
  "key23": "4TKAre8AGjvWjssDkAxtu5jiK2QsoLjKTEfX6fXb88eKLC4DiA55Q6jLUidAAGwDodnkScMKU2pWMq65nunYuApi",
  "key24": "2obkZQ1P6k2qki1W5m5nevaLmBar7Ze2EKmmjvAWU5c5EEfgYiEosS4xstPYNpY9cLHzbkYtDv9ZZ64ZoQiD6st9",
  "key25": "ihGP13FHS88HQp3qzbtAWuEKRUC8413yvboX2PM4Wd29ZFAXZ8k5QURbh5rQQCxo7TGAyqP1enQY3kHdvPjS59K",
  "key26": "5ohbvGFXwkFBk4Bp5CN3w4SUgZBYXujCEHdraR9kMeWfyrE74msDyTQ4MGvfbWXTWNsZpTqDsKVUnuCwrVY3GFj4",
  "key27": "3EfcYRikDL27i92Uab3ZPVs6h8PWiWvSLLAziJDgZKF7TACSprPRsh2TFThujmxX5EKiw7uNszBfFDKDQuxwGqhe",
  "key28": "5YkRae6uztZSdUBaAt8EcFZ1TfXhbkoAHJ4HsZunXQ5kgbSwaxcmzvcFbc5UvJY5498DJjRTCHzD1GPJD1kudwMc",
  "key29": "2nyRLqydpKCWXSfow3RaGkTipuzd31EmSvAw34mDMwZucrgPExfHBr7QKVxkzHsjpgSMmGGRH7JpiqxXnQbviRHJ",
  "key30": "52JYTJRYGRJBWmMQE2j1EKJ3CDvkeuNMMBK9HFTWzwjng4LYSadTH9rTQRbsGb1ErtEU33pv4C2WZuXzHucxN9eR",
  "key31": "3DLwMt4iH1VuoB4zPu2uoF32wvNUu1jnHGdzYAgHNU716nLRunsXyZ7BWxYQDw18wMgU2MQMukMtaC8H8xMHkhkS",
  "key32": "5H3A1JFf7AvyWF6KgJ9huT8SmhoGKsj3mzBKqV79fz3m3mQq9ZF961JgRAd82r8A2Z5pEgdbouTG23ZZngyMDYQ1",
  "key33": "26Snb9UH6Rj3MxDpEg6uzQYzNCTwDHCBojxiD9mpMRZGWRN4iX5ct8hAYNnC5EEKuWheJLN1GD2ZaCjMocYpYc5T",
  "key34": "25JUcAgGWv9gHRyeXvQEs4AQcqyLfDiz4rZXiCBJnvqvFGAt2MKcw63h9F91cBnF4LvscJLToUYuWw7dLFGN6PAH",
  "key35": "5uDjhpqceYdcjJwtWEAV86LdeDMRwV3PCPyjXzPznfP9mx24HmaLQbU4swvQ1mSHdMPaVVEZxDcJxLYXPvqDzPmq"
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

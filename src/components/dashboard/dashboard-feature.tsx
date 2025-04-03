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
    "5VirC1Zj9xaoLeF6xMxx7ZmKQD3jtUiLPTtDDJKHKBkaQQpMxHVeQ3KjdxUCVQ3tNRhDMHEr3uNTaknyiJ9aum21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rPjLnbAxtx3T4vd4WQFveqs3yjaVhNKiihsBqrHUhvxtDMKJXFQqWrJEQafjia8qQDP1zHjpJFgxvWa7uie1a1",
  "key1": "47pqHbxm1k4jxr7dcna1oyLxRrgjDMg5LdYUE8pyYXosV84NVUdoKihjT8F1BihdtQh2Wbb4Ro2E3RXqXsRCVPWx",
  "key2": "XnWAw8iA8Xym3usFJCW3xJd2YHmAmyq4WVdjJFXcduUJWfen4JdN2Pi4HLUW5yLtDLjSdJMyo1T9yq8n3EjcnEq",
  "key3": "5xCKtFpHwzhT4JaCMbtRFy12yEo5mnqM5kuC3ozfu6zzPirurcVg24qerJu27Akygy8SHYZcwUXZCH8oid9kxUrf",
  "key4": "2CbMaH7HMZadr3ov9xynAhA8H4V76Lcrm1VGyNg8dPGKVPUBshWVpiNKztW3HBtrWU9rE2Lj19UF7HREVAdYNNnj",
  "key5": "5gb8TPMEeb7mtJ6XYiHghMvbnh2Y2R7GYGcCUDwANHrpmcU6Yu7zpCKf1P6nUJa2aDXUUGzEfGzb8QngxSYyKHef",
  "key6": "4jB7eCPysbhNwxAHQ8ryTUA9EYV3RTkM7zg5n9yVbL7dFJHNydsmYR9ZDLMx9t7BCehdJSPgjZyR5o9bmb9AstC1",
  "key7": "4cYBRvkVARWPpEyL82yQmSFNBhkKT4kvSQWmhG9xfG21MuUVDnAdXHuS3oKqKZM9RDKXSv2Pn58sMwPVCSSM32LJ",
  "key8": "caxofQMbvt6TXhF3zWr91fDFGuxrkKP6UQwoTVC13amxkYpTdQ67P8xnhSNNWQ1QvQqA5XKydpJFgQFHWbQDS71",
  "key9": "4WeuAaQkmEBQz6fJn3CnxbPBR9QJM6odrevBTfaRa552H7EZ8zpp4MLuUuvd99V3nhqxxhmgcTpQzmc4GDr1c4jq",
  "key10": "3FXzfZR6wg3ffatRDwU8nEJ8ReUjPLeo46n45xdE1cTPxY1j2mhHW4RH2n5vDQcbo8UpfyWj9Hy2EoRa6GY6ro1D",
  "key11": "KdqujiVpZyNWkGtsF1bCkWuy7Hh4N1aFpfbg91dAG69GqYvSrNEd5w8nN7PJSyEGR5kuTd8xHQ9o9SwehfV23ta",
  "key12": "5erUbofri7jtmRbqnqDmiYzURLwXfwag9hB9YHmV2Bt9NT1yyTMokWpppDwgbhMmivkn2fn7rSCEtEd99SMMuVfF",
  "key13": "2DU7yvSGL7a6GGF5YbMmPqQ5SYCAeWHUfYk11CGdBbZxLNVdWxbPA3a6VneMGk9jMteiPZESNw7TRuKGY7JqHaBK",
  "key14": "5y5wrw3vCUf3Gb6N2obxGvJXaS8PNEEM6n2DwaaAskRHrs3jCroYcpxsMYjByUBeocSp3rFaT2Ca87jaje23PkFH",
  "key15": "3dyWiL8ugvF6RrrSdPPMNkndT75TH3FZKZXQxw3Z9Yjp58tECXZcEF4DeVVwbyhs37FVwQ6Nvz4t4fLuhhqs5qrA",
  "key16": "44RQh5Y51fnNVZWNyCVjihsnZjkaXFkPKPpzPu3LSBPmgNaXqk7ACNQ7NiWa1XpXeZHboZ7nDfvxAPRnoQpz7oPi",
  "key17": "5yGmt3AsfuVyvStq5EJooS5szaAsZkDWLLKke3TjGYJoieAAZFSNTNgds5ceujYABMCYbKxC44b1BysTy9J88qvN",
  "key18": "2rLe695KNGoyfzM7WSKChNs8kioHGVzACUqpVw11oMcyvBt16LMc4qRKVtRggkQ6K58kENBf4DXEBAiVohazxNGq",
  "key19": "hgfcpbYvavMjwjjnKo6XCpUJ6au1XMnUTWpbNJ9cdXDwHi6UG3i6yfZjGJQbZpWq7TRCy7izYa25xsBWeMnH1bc",
  "key20": "4aciqgmjhUJZux31tnnuqGZWq5CBGHT49AWmKQkQhm6ydWC3VGSb2G8LHF974PpcaXxhfRD1LwaKEdu5cttKjsYQ",
  "key21": "2FtgTu7vjUsKUG9bWFGPXEyrjVJ558mXtmzu9wyekN12qdfJ2ZiQCMCbb1C3Hs7Gr8BVjF5m5kaD476ESi8M42o9",
  "key22": "2tnBxVEDK9888RXZTVsMD1HwRCwzzQYDK8q6atRkANMEaNyqEB7LF2Wda84ZLSMA6CZV3jazWZzCWzXsTZZeXV2g",
  "key23": "48fCPZFYQW67zVqbcCMKNCDLo6HyVkNeDnbSsvCvBkTHu93odGLQzW1mngk4GJtRVM9AjoWLs2ejCUDSzEbRqUZi",
  "key24": "3KGSJnbfGsK1fr7RucL4WygeDDXTs11oi4i6ZpPgvtuQ8jnmLCeCh9ywmuWKKASuXfwNrwoam2Y3MDCjm2i52geF",
  "key25": "2Rr3i8Uw5Xc6GUxxeqmWSjai2mgcZbXns4jipb5X4yvhmHkNwVVhBUbyw5fRnBE7QeuwNk719qc3eGdtsm4FeYYG",
  "key26": "nZFLw3TegKRucUdWZce4isKkNHTxBEekdLUKQJZ1ApK3WmVYghsvgughQih4YCyjPhA56KgBzVYdo68P6ZnLg6M",
  "key27": "5nZWtsLLWBUkBiHNhA3Lq8EqJHcizm2DbpUMfVhR8kpveD1zXoEdNxqvHjCQBak2gr8m46Sb3zZnJyHC7JHQUiwY",
  "key28": "5grDpf2vPn2vZ4quuLvEQkwBWK9yYHpAPPt6eFwUvGEyki68nnHEYMAPc7jFoYmYvfEvTjoWh5gAHqRdrS8kMRHg",
  "key29": "4i5uX2M8UmkscD5UsFzknMWbbyA4CXognwVGTzGmsyCPssNXPjesu7XWgfzaq3MyM9P9W2zBPaHat1eNt57mRh2U",
  "key30": "3NspMi9eyqkz9BWq2Mfhpf7sdvZg67tMQfFqm3C1c4BZEam3AZPE3CuBQsWTsXD3c37eS6SYLiUJDNissSyv6Vno",
  "key31": "2CP1DHAiS3yGU71ZwqSdmmVd9WVCtnWmWsRa2rjqzwgZQmQJ7yreZVzikHKdGQyH9CubgxRi4n8N6HSjJwiVV8QH",
  "key32": "2wFjaHbtrtyTYMWiaKWqYiJ6KceUm4iQTBvhBKqcoRAejFHubscDb6ttrmczutNiwQ5UPfvJqY1roWYYnJ6183yj",
  "key33": "4rUfezUybwfLvh8rXDFP74R6znhcQ5z4ngMcKVqScg9NoRUDWtJ7tUAfxCkd71RNyaBCMAWPuLFfRvw1dYJNNe4z",
  "key34": "446qENjySNiyjbUexVVqhPFWARdtrZraoToZ7wPm9Pp34nMmHbWpWEDabR6HLLE1VtGK5RBzXLFnG2wkRQ4UeDXC",
  "key35": "2DbVuBaTwa9Wsvc5xuwk3pRqD2aJM5mpUMGYFGtNtgCFsgFyYPXbcQSmjdex888CRdzW7D6R8x6ZRQoFDP7jYpbF",
  "key36": "1phqrvs4ZhgJnamvFyNoHyCnVFqPFxfz5XR2tyk2X6ULiX7Pwijq5LbLFT8DMzygr1CMHdJ3HhPPWxYWJWR2ueR",
  "key37": "3ZzkTHYr7LV4gz2FJc3QXSochis59HNVhxXT7VjGN1rZEiexHFpxiaNdq7ckvQJHcmFokD5YcwCZm5kb5uvCcCAV",
  "key38": "5jHZxLHGV2FmK8sLCPGxs7Dv5tbAcSAxvxeowdx4fuAhvkwQqscC3uWghbF7RPvU3wNnRnW1c81q6bLq4DaAYm1E",
  "key39": "5zYmcVhdhqa1m32nbKtX5wDEZE2dChnKaSHvDRaj5T7hcxgE84uiWBdsLUKHYBxDP2EMtZgE9H28Xqs69WtNKDd6",
  "key40": "5YuumTHVYED3hVEYUbHKrr9yY8aoTXGH48iiEn2UFHZEJpZ1PaUh5yjgjAmTnVwhbGHiVqrWMESgXzffZ61Mn3p1",
  "key41": "U2uiJWTwcr6PNsXRURSZVWj6B6ifj1AMTQZqAZ9rGawza86p6C2ZZH8paBT8jHVjbA1Fofa3Z5ptKxGAWg1gd6v",
  "key42": "5RADFM7ujwSFK7ATHniUQw9VeAbfR46ot7jhEtS5HggNL8nixEHfUCCW6FVUdzLaDfdNhyCqs7iKAEYWdLBoDFBj",
  "key43": "3zc1dfSm1m24yn9dGFofH5UCBznvs7U4HWKB8oSsy29r2J3D6VjX3CuEMstGmXWiq38sxxxALKixkx7JR8VcSe8S",
  "key44": "4653UoNpua7XRVx6B1XEAwYodsFL1Ha6ahzstaFousZyX5Ar9duFM2XomynjLDXAeVhLiY17keC54MJC1EjYZ1aX",
  "key45": "5xfpt5hNEkeJLjdXDrEaYnd1Xf6De64JqdtycWuZDU7grWarANgDMUaYCWBL96vZ7djeMkSuDeYpgqaQkHJvkav6"
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

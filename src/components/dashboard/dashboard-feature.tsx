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
    "Kzy4dvw6qeL7rLuxs3e58oAoEbhPSLQoTP67WGeHkk1JTQevEdHAqGcN8hxGp7CHn67raDx28JhnP3aWuDrqMqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zyFFtH3tWnwW4cdtT3CNV9aXF5TTPNsgoPf4gLkL5e8MgUPn69YvyCbL6GjxyBvoUupgNRDRQtFyJcbsE7vRtXq",
  "key1": "TdW4djDuNcodGndCz5oSGnhDCbvUZybgHJ7XVdLaVVrBugupsLwfsX8TarPqDxxuLXJNEDDxdJGqA73Cv8BjqJL",
  "key2": "8F825hcJYuy4JePj6Ns7SYgFoqLpjfU7CARtp4Zm7LYLTuxzCPya4f5HYwdNrDQmNfeSoGFfAcLok7sbFWi5Qq5",
  "key3": "3MtDR4GfQ1UHYd4peyRpiRqo5Mb7urH7TUQkMiPckCHayxjauiH8vJX7W7j1ffYbeUV8Kg3GAdsptL8eD9wruUEC",
  "key4": "59yFagbeMPUvHRjUcfqnQw42cAk7q9FnMb1AWuAnB1hNQW8aQmPwz8aRbz6Tef3AopbVqEoQLTMJh7tQgiA3VJaz",
  "key5": "42yfJghvMLM1ekq1MM4Xcby7n24mnMG1BLvzrtwb6UGv1cBXVvfwmPNnndEM6xaLArwXPmvXyhHB5jqfri5nYAQ1",
  "key6": "3umRGpwQrhqfQ9ZDYEYJeoUmULowfXxWUx9Rey2WquA4zh1Fzd3U3BN5cLgU4a2PqwmeQnaJLCNVA6v7UGFLiRwb",
  "key7": "2nQwbVNJkDz21o15P238Euprc9yvjqpvx5e3U8oDkPeqeEar9up2ZhZibcPuQSfmq6XGQPwQV4drWGG5c9FXk3fa",
  "key8": "3kV55FeL3XYsigiwvTGv4SpzoKQXHveU24q1Vmf3DucoUs5HLCBAwWD86ZVzhUFUqQiZndvJviNAs1xjewPsNBJe",
  "key9": "5YnUmpnseRxQAYsmzAHgvTbrtELvcYfozXJ1eUc8jCAGJhizGLA4aAsRn8FeDTv5gHVi1iH9TGmpoFzLiGhBuckF",
  "key10": "EG2dXqZzr9vp9kiyYm4W3QFNCMDewSY3oCqJ2tpQFVxbpkB2jk6un5GhB9mCd9C4i5NqhbgeJif1P1W8oA8RP7M",
  "key11": "4gB9qF85jWAdA1ytbUHxEWDPebevgMmT1xWNZPyrNZEAfAJCRdUaVsYFHtvjGcghm92FoLA3MQbdaFQL9k7Y6831",
  "key12": "3XGy1FD5g4TZ3o7cSXuKR3WJZs1tZkmzpnkUC6c7edd3csJXpcFguYjJSZyWfBMUZACrpcJSsKuoM5KJfyRGjdGe",
  "key13": "4mgGfFiEkQx8K99wzLV4xhX6H5gufxReppvE4dkLg5qb5FWdSaV59GswW4MRvVtBJ1pxGp3TtwYPebuMGytak3SQ",
  "key14": "2HiY6YL4D5zTGJwNgKekyo7Kc4NT9f5RoaGfUPA2X4Jy27VKaT4xab3RsdgEkHE53F3rz8o6mxzyy4LkPm8EqMvC",
  "key15": "wWKf2KhEb2tzemXaH6YhGGydxo3j44N8qp2CFAm1p2jyXQ43J5v7Lh4cJyB1SKvtzLGuXQqAUj3gzaLEXfUSwS7",
  "key16": "3J4X4WwvLVN5cizCAQcm9kudLjbA3ZX3mfvrDeM2df2gddCi1uxAotQps9F1GXKU8UXwaNxMxFbfmMPb5mTRrpoS",
  "key17": "3DNhy3nBjG5LKDKos1JqU3jSGk6V9s3M6x8nzRof1Nqikd47gMYmdjjCwfRrcxV7NMwJ6vWxdk9NVwErhnoyPbFM",
  "key18": "44Mrryma4Ek1iuYUkWbhS7SniCWwGTJXCeDp15zBRbhaWAq7ZaQLdQYP3EgaASbBKeEkbAFWuufdTMCEuws2PUQ",
  "key19": "gsZW9EeeWJGPKvzFyvv7u9yWNSphDBzjpQy1GbSnRmfcaFQVTZqgXfTmKx2SZLB2tFyHvAhvajjKAPusydLXNX1",
  "key20": "5J7vGpSRzWArUUkd352p9FAEERh2JrEKk78UDdBFbTHK2BQLdWneVCjCFss4CbsnFS432ZExgZyk8tHmk71hw16F",
  "key21": "4f8da1nykzEx1v8rQ7iXRpvXjEr6n3Qbf65BXB3rb1ZjvAhP2KrnziAjevj6xVWHkrApzGXqLfZHLEdDGaa5jddq",
  "key22": "4QrSLrGzTh5vKf5Fe63zbBDji87zE3ZMDHVfcEPY5L8egWzrVkXrLcJpnmbmPA5htwFiVjcerHfNjpDjeSkzrvuV",
  "key23": "3QGoazsHr81XTFB6UZHFtvsbNqLWwrp84QoJJEAJMVu6J2HJqycSvCxHvdVSuPVPGdo9simtAPgLLZtikMydZzoe",
  "key24": "2z8gsF1QwGSx68SoVSDZNBXTuruZbdTnR9H1PGFkXWP3voWKuQevyfcd12coS26Mk85H4SwxnWjd1dq5a9mkZmVk",
  "key25": "5td8UFaVvLBxB2NJeAWmakUCYYMxFinb6RUj1Q6oiAYosBiQCLMoWaXHodLhAe5XxGfMGyobodXFu5A678n21Pbo",
  "key26": "3wfRwH3zwg8LRAyXkYE71fzYgLBvCVGoHCw9GnkAT8zuUy76M4pV2Pj9zrvgNZu9iBeW1ckae7z1rjmaJRGhBhS9",
  "key27": "3dVoetCJq1HscZo76ayVr3RcMKtgW7WYmvX7nx6Cq3RgirMxVC51tWhGPtrTthuFQTrnzUgRzN91YnHxbrM97puX",
  "key28": "5j73nVcBn6cpraU429ncfQ75NbvwxVJXStB7VNMNXATeaCdX9vb7saauchXvQRMM5f5QqY2kZZHtopscoeUTXjcx",
  "key29": "4xi27kTU4rEvdx5NCpv1BhvEBwtYUiN6S1GZFUhm5jzDE13mxM37PoExUj8qADzbQHm9wyhKVNyztv4xd6N2kybY",
  "key30": "5LH5yd5pwjenWQETdvtoUPPGw141GfsvFeZNfVRxRMwZJ2r2eXFNecCHsRmGbBsN7uZCBfTGQZ23PN2mY79p8Vnn",
  "key31": "yia2DiLuak5ky8LpV53Mz2zEu6gsBESLBgEAHh2pUSpmYNQL8exnq2kWXiQFEX5Ef4w5UgPnngkgaQg6TPZMcyo",
  "key32": "4JXDpPcD1gshGCYtKgc2QjkKe8PFkR1oyF7Uy1Gq5Za6bBsxxqs9rfzqv35U4wHiBcnSrwSS7yxRxnZNo1Tiiokb",
  "key33": "4VVn9eVy8om7wYYCqttdx7LtykT8N2oeuKhiYuZhnyWd5ddi1BUGSAEPNDm9x85tkMzx1htRsVLkGhYMrz85Tk81",
  "key34": "4Zk9Ho5fwY1FqjGpST3qCCzxxacrgqnveYwqSq5FG1BxL8RCZWjgx1ZCmhoeDTkPfZ3PPrfpUL1KTUmbhYvciD5C",
  "key35": "55nQdK3EWMvNDm9fc7MLcVpjJM9ALxcuYe35QH1qi7EXCHjbGchfWuyqSDgFHLwGnkM8jqLDc81fnWYzKkadwYZV",
  "key36": "4F2cx9wVqkgrUN69oNsHxAwAaYRKknWatLgBsLyCtTHnbiFRDDnZRQcrfbf5dGUwCoJEtSfCKtFoSifjyuXZQs8i",
  "key37": "46U6taSePC3q7Rtj9awHyFVBKV7MBsgYyuhAEMF9Fjy5YE11t5XSY8ZtkajnKqJrMu4Bg7HEP5Zm382NSJdr5qZ4",
  "key38": "5FTAKye28XeKRrXtB7qr1qyBBxXKxzFtWoykn1tA5UHN1ydat5k1quDHCkHpwAc7WRhmHVP9V5tAaeHwB1EfuhaW",
  "key39": "3zVtycYWp8tfEwB89Ghg2VSU8Mtp9UwTacEkDUvDK5aD5tmZ9r2UKyCwY4Ye9BvtrW2qEMJsq8CxxQB4yeJ7znzr",
  "key40": "3fMnss1TActzqPyPyDy3SjepRzYaE4naoqscSzFyVSjFgnYB3JYCgQyf29BsT5ztDicUNTv56FY1kNoskt9e4npX",
  "key41": "3AyjWdn7YJ9tfLXnoAnUNVFy6BWKYZFkmjCBXnAbDJ5sAXykeCCeks4zmi1DpJFw9biyK4tKKcAV3Ya9fPgKtJ47",
  "key42": "5gneQQvPZX5ZDbejS42cCjCUGv3qtRMbJ9tYcgRW9P6qFcFxH8HKNhB8qrfPyp7TR9ZD5YuFGwi2zrb5CF3VpXCf",
  "key43": "RMnj2FZoyU6ezfMik4uXHCQ9HRvkX8XVdWgWSgTAnqxL7DAqYrCdUTi2wsjuDTQzamUFFqQQ22ujar3Zr11T1Nj",
  "key44": "36w9CMfwLZAJKWGW67EEPR952ySqoCsxRDSQAn9252ivAbeDS61yYCgPAtvfZwZTLziasjezMyqLrhUQ7nAETC93",
  "key45": "2TBUWbSsT6cK7VJ2qUXgocdVKkyJTBYA7ttfXt84VfH17XWTZpGXyzFEruHzcDsEgfRUKhM5DdTRJGXfUz1V5A7T",
  "key46": "cJWdy82LyGTxUW6Vs6KoUVK3pRxPijvpDEXgsfpKqeV6ugy28bR7qXSNdYbUsZt4LkZswQJBNJrQZeinUvXhxYo",
  "key47": "5Rg2VTsR8jL6yLqJUBRemRt5gQeJQXB3dxscpm8WzQpQ5W7J3yCddV9Ap6Yw3bthifbCv4zzyrAFtaPRJ6964hEy",
  "key48": "5tMyLvPuYqR56HsBrHextVxRZK9Rso8AbgRp4GAcTzoSnu44qfFmuaVsm5C3zNawQB3NacrMpsdaCVrPswPKqPrW"
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

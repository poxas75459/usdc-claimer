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
    "5UMwaZxY8w8ZsTseFyjN75677yhr57gjGCTLbh5wz4pgQoLvid4SFdEkLGHhNk2pXgD3iVLBaqHo7rwQESF3Z4G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yHbDBaA3e7W6UFTK5RLqGBgTNgxC9bLr6arvnTXXNHD8cPwNBLCWGUfDP3nbEB2QS4uR2AEs3BK8wqzbq8KTAwD",
  "key1": "3PL5x4SxkN1HExfiQoJGFTSFAwUXdFoRMZBr6ocvVmYExQDovxyxnDETNBHUbFNPbNRpF6jFz4iieAmBpZMd7PQX",
  "key2": "3vybKYYsaYXhVrb5Uf1jiN7B9xQYRfh4ZMiq6PaEQN89EG9uuQbHrH4mfeVRK768YQAUaEtuYJedztx3Z3vGD7xC",
  "key3": "2ZiU7MrQZeSboh76R3WtKQ7zMVdXRoPLTAsoQVXzvveCwUnb8h3bbUFE1JmtiwCrjEYqS3PfzM4rUq71wHadXffG",
  "key4": "2MhhYMPvqppDNqPtjXJFFTLsj3Q4AZLcd5PJjsgVhNtGryGAGvbcbqqAJUg82tqTRYAMBwEycoFfE6RvciHt7cRh",
  "key5": "5gSZjUB9HBAcV3DjqXmhASan4qj3Nn4XkxjkLbJWBFM1spr5DMUSZTfoqKzbXr4kCTMezN5ckYJbeWywggqudhsU",
  "key6": "2kirjhWmTEj8L6293qSebisC8KWLWCjywLnkQfrkmPG2TMwRhRkQvxDeimkpRDnKBAnHK3uEEvxuhtSMYGpvZSqZ",
  "key7": "3xrMaCX8FyFTmZKgnw4y6UZq7hhwTYe9cxtJHiXZgqteaJVurmNqMGzx5Grxj53hibs6ZPyis7AmJpaRFEW8mUvM",
  "key8": "3rbywnCTW6vdFHiDDLsRbVwUvSdwhXrLhbc9YRwKnwAgUyEf8i61a7japYL4s9Ty99FKwmnRZj3iD5isyjsvdJWg",
  "key9": "4nBWsh3EDd3cfQgUskFgjSmU3muswNxjM21UnMhrAny9258TWFyhtQBsrcufjQRtfm8HKyDNM4sZb66uDmpxxhCp",
  "key10": "5W6fSC1knFhrdhTM6djf8VkHZea1t1Ud6kb9qVyfccpR1HpfCg8AnxPDwY6DhRRCc1aDZYcJoXJVCz3GA61i1Wyi",
  "key11": "5pnz1RNTsJBk6z4SneQCRgMM67UstpHfx6LwAUKQNfFv5Zf2fk2s91VEBFKLnrHvFKxLZHSVsYGLtt3JECBpApWy",
  "key12": "Thj3g8LweUXG9ZJxVyaSq6RZx4AHEUromMLH96c1hhw8CAsrPKS49pMpNQYzFwzJi1AP8TbWLi5QiFwitdvXCEA",
  "key13": "rxbLzFJTePfhj93EYczRb8XBTUqLHagnRX7qaUH3wYeCGyew4pv5zo1Tur8hkszX251Lpf8JteMgL1tC7VZGBTt",
  "key14": "kHhfxTRzhcgNyphfrQdxjH58uo6tT3taXAMSVHUMRsprduJ2E589qTi2gbudhYk6UBNtJNwgeYAJ64rTzPdAxYd",
  "key15": "5HHUnsvjGiQuDn3G15ZzYcimeJnz2jK6gjXyN4nkcCPKWHSzevNd34zAZjWgz9kjAVyFQcATikViTZ82V4xApfcH",
  "key16": "641ACARpAr53mByekzRpiGerziibaGdQYgzX5e5dVfrAvAdA3YfoSVyfkSqgNSzt2ZkwVkwt6sxbDpiJ7KimzKbc",
  "key17": "5CvqMnFRYEUW5vjAmGJ7QSFdLYUafvEFjBuozgmyWBuZ7EZGVnt9MLabqPmoty68E9w7me5h7yTEaxzuAmmSQuZ3",
  "key18": "ovFUG35R1XHHFMJ3odtbfNEjGmxyY4m5m54Wk1ESajXfPFuN7yg2numEJKWDjYm67qc5tbCZ34BVrqUAkj75r9B",
  "key19": "3YW8E2d2giKWtZYuvCK6jqnVh3XeeBhBF8PcQKuaPg12Kc6errEDbwrM7QQbqMoMDX2NfxR6HHs6KrCYw7Dc9Ng8",
  "key20": "65mA26PeNt8zCgYJN2ncXrS3y9C9bRfnXxBgSKELw1BxedGMZv4ienkjEWinp276u9HRgPwwdkdiSwiQMRe1un4q",
  "key21": "3wZbxaZq2Y75gJsnAAyrKt5tCRQqmWkzD5b1HPPd822vTiDRXn9fHwZPXKYTXkcQRrvFuRQF31Ck2x4xrUSow37X",
  "key22": "2b6mYxqzCNkfji137kg7JzhKmP1AWrt362A7nBpqfFPqS51M97hH2m4W6t6k6b1YKuPMfNtvuwZ9s24yL4sNkaWu",
  "key23": "3NrDRrPxwZpN4bz47eNTpeuvLp2RNVrVbgXkfELpB46KvkVh3RgFWw6vfmnpMkvpWRyp9N1f4jRfs172EC9YayQA",
  "key24": "5WzAzMC1ar1N4JErmqd6fvw2FdmPekNtBwxz2prjt3e5iDRajr2qXAhQjh6E8fdumRxY16u3dXJ3u7tDjB1xrk5K",
  "key25": "5BUfYzQpvcy2PFB3JM4D64dQw8VsW2bwiECTtBSCjXPaK8BxnjJqLbeRXC6i6cw5dHzt63qrfhwJrbJBZKvrSnAn",
  "key26": "3qU5MZcgme9oHWSdKMoBTT1xfybGoP9RuyhCZvAXD8FGKZA6yeJ4bZk9CdWnNRU6kswiZzxEUVREJRbGhVZQY7nv",
  "key27": "5LDPfqPZ3CnErHLT2hcLBCs488D4AhtGw5BxgT7KRXMb2aBJjenGCbhYbiuzgrkk1QZSeEy1jT5LiLXAREsGYKhF",
  "key28": "5rnQ7Z3kYVso5j1vHNPkMNFpyBd1pXPSGvUU8aVxTEL61DE6dJdgBHpFTsn5oghxR2PWndodBnbrUxkaNGbupmVV",
  "key29": "4YyzZpHr8zmMgaYC2kcGqXQKoRR3GQ2B3sQsssLsBS6uPGu1hzU6eApWmsQ37wqzU8ESVPJTHf2MD1PZMYUhSh1e",
  "key30": "UjcJiuDa1emjBNfTDQ8jyfme2esD2XVTTXyGPMwVH9yBxHP6CtGfpuSQj3bBnHfcGddRkrjVLb9VXqSMbhSzXCx",
  "key31": "4dL5FVwiwAawQy2wo2mrGL3xq61K9vxzrs4LinMPYCZWxnbYjwTFXtthzP2ckfm7g7vBhQFLz8iQ6yDMdy8bGecS",
  "key32": "wL67RZGuSzhFxUrCt6UBV8GUSN3fDLNycK2QVZ61D7DxXCi1JgivwQQ62Ey8ahfv8S9J3rAoRJB97y9W5QKiP31",
  "key33": "3u2p6eoQkxr2yeFXy559zWU7ydzZ877VJiBYoNSSZTEHMK7vyinVNgkzBNZ66K3XhLEbGPgdSuPvpU1tHFVRry7M",
  "key34": "4qzeaUfvbFAtoReov5zopji3u4cnZu2wHd16WEHhZrLy4h3kQNu44c3s7DJfEhQdb5mbayjwwvVBsLoVnrLvePgQ",
  "key35": "3nVcJZgkQSBebCbfHe9UbRLMHV6p8A552srW4LVSjvCAfAyDv5vXwiivw7bzcreAY14jqGMvNaErd4bBhtKC4YXF",
  "key36": "HAy4ATR6pHKcZiG99WWmgjZ76bLKDFd9zbNnvEbe4cvV4A4G5oYCguqPXvoTjceJV3cZFrgjw5ixmxbNhWZJ8B2",
  "key37": "2qdjzhw8SPVLsSdQfeiFRc6tPA7M1efWgTQWCkVrg16ExNDC4PsUA6SgA2tQoS7XoruNRStcRuUCZV3qKhHadvsC",
  "key38": "2FB9HNjgwsGB2tMxxm9FzKtoZooK4TE6YB44fDe3Cs4wkEVGEEsFLRj56viuKP6QhQcNXvANCJD82NBuuR1cKwpN",
  "key39": "3TsDJVBbJYMJmnNf9L7gErtNek7MSZ3xYC5pkovEkwpRWembMk2QRxeAAjYaNqXUeLEqDoNo1E6Tv99UaYdzRrhe",
  "key40": "5Jb5V82Bu8PEsVnNSJambdvg3pqCAH6Ba15N2QixKbmdzoLKjc7CNVEy3sFR2UyiK9fidiGtiQWp61mzmPL7e3nd",
  "key41": "4QKusRVNSkdi4bF36JwaE1gmuHeJMqUJ9BWfyZiQL9DkfpTUnNyBHTLzPH1gXpp2TZb9axDcGfMdqWjcjmeAus7A",
  "key42": "4gzcXwr1N3Lh2SwLrv5D1A8gXwDfjgtuDyvkg5jy4RBo6nFEjTrJCure7yJLG5At1Pfu9KkKHDogHNWVDYtUBajo",
  "key43": "5iEb3rb8gS9ai3B21z8diLpSKDT4BufN1oHAXm3XAKEzQjQHXehBoT8q4J7kFcHmeMqLwnYLpQP2X5WW9zau1vq4",
  "key44": "kvqEBQ4R3y21xWx3oyau2nVJVqksbT4gegfGC87Xt91NtbEKqE7FsbSPw57sAtekaWNnUEsRUuKPxHBw8RdhPKj",
  "key45": "4wVNh1NoDnqpX96QA7gk6DUXc5UNyf3zFCcbySCwpLqvc9AkdhDuVbdp22usAej2zHPZA1gxGMEUSqMwRZFFdcTR",
  "key46": "5ozYX6SwoQR7fymUaL7YjdLbv7wkUynnWs52SPWYHKxHMXZXqYL6Qf4HcvYRH8TUSPm3HBk5aX9AJzYsF6M31DiF",
  "key47": "4MZKdpau2zH9D9TiLF4bBzwhCNa2e552baudLL9eQT81uZerTUeusTnq2wz1yDXZEKqcSGAJGWbTjGa3m5SXakHz"
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

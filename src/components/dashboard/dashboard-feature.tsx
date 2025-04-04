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
    "37Wc9FzUwrJyWHr6gF4jZgxNGKXai4dApH8EXHDSXgZqCZex3tKtGzcNZzQvqZBVfdDciXAbyuifv2MdJCkLTLvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XKNtrkyMdb5QLCWCTRhp44iCYQRWSHgFH7BuiQZYGZezYMWacYi65JyaVLM1G2hEbG5tnLiNC7ashBEeegS8476",
  "key1": "cy9w3N349LaBzuTZx9SSzq3Yp3jUJRUEwkQdSoM4gcQ3gtP9mkADVWpmhMgMUmjYNicd6MxVhtQjxt7NAiWKNEB",
  "key2": "3oCmeNdwHJ9cZ8xhczovjHVBJTjYXBopS5RnyidShNkucbirnnTDHKezLX98zUJmnWybMvnh3bb4UaVKea18KqYM",
  "key3": "4SifYUEVmihw4iHnELHMbrPzaJgycpzgsE8EbdeaWLNbjWxfaWQuexjqxeioS2Be6ZZrW6SvGJUrEV55CggWTQKX",
  "key4": "C4KGNBeupyJg3CFqXJyhkX2GvT3EtXVh9RXZvZRBHF7iJFrZ6MqArfsEDQ84c1nApwmWefxRwgeNATqCAcF1saY",
  "key5": "3pAHKeZCmz1C93cdCf2yuuLTzcJsoz6z1LqKoTvT5tHnZ57Akgb49N2bHXbhYBxVQwkPjjeUBW7vdGXUrFueMWw4",
  "key6": "3wn86L2DY1Ppkcz5CvYHg3fRjW4PpPJMLB1YLH8SiDnncQYKhwFHXDaJG72QwbJr2mTeRKNZeS8B3dNrgdcoU2a3",
  "key7": "2arhCoM1ABC4WVYLxaVUHUeeNjJGwmjM9vrvaZnKLbJ5uUnUF8AxMKhbHh3gcTgCuWpvqPnCGEEfzKoiW2vUzDLX",
  "key8": "4k2wKXqh9fb8urTadtiH3YDYqvKirAyzuQCufkpZWcPjaZhhVXh7WvS6w6fFYcNg21AUsZrhR72ZsgJoZuGQ1JiP",
  "key9": "4tSJcJ6C9fc3Fqy9oWoB3EtTeCQyquXx8HpG1BmD8rCUWYNqx6jmQYhnyLUEj2oSnfTGit3v2UQc1WLKpoEs6eJ5",
  "key10": "n2NyqyxH5zum9RaBonFTFnT3X57bcd5dVogU4RYjyUQnoTYiUQ1AqWLxBPiuHYWHV3wdb49hFG1JY92a9cofdfE",
  "key11": "4MVXEECmPMCjG5PBhgJe2WnRvrHMYsEJNhTNTrvVyTvdNLNnh8EEn2FeGs5fPUtUZfCdGYGvA9LDuMvGisk4tYnE",
  "key12": "3BUtNfRva9yFMrTGgaYSa86JVTQJPS3c9NWdaECtTPfNZ382PPqkLinaBkvLXefkH4eeZ9nHLJ3BqALpzRndjTgs",
  "key13": "4HgeknMtsmF12KfFN5on9wyy1fDsS5RgjB1YAQiLqRMqDLAJsDB3F3VqmHwUPKv9kEUwFtPwkrsUKMPnoq32Q65M",
  "key14": "2duPA96uL9tphb4AtvMJi82gKMwXecYb8GZJZNhCfsYPHirmCUj56XmMR6vVrnvkGFDZqS35m4grPg9L8iRuf3Q3",
  "key15": "3W2g6eakZTv2MoUJHCyC8axSsEQfYpYbGtePGNEptCFVcg2gg83GQ4WLBAW2pT8pDSxQUVardybVNrBR6zFRrUYf",
  "key16": "Fp2s4AnFhhPrMwEyxvtKcT6ggLyTbcSXRjfPxp8SdR7WLqY9u3hBSJWhjmgMDSZyJv7yzZJ6pZZ1XDZqjiAxrSq",
  "key17": "54qY1GaECNa7JmBh3St9EEEfakyCTM96sVSDsvXFXxdUpMVU9RKyrHH9ownE6zjLMxmc4MBMtmXh3vEnJfNZ16nP",
  "key18": "27Yc6V1SCDujxMRPAEAWFLQNztLVu16N3UKvvrcXhmkWL4Zi64p5xNvPrSDqg2NufzxYiXM1WXEGG3XmMHe6mkfa",
  "key19": "5qReD1kEZxFpEEJ71Q695uxAF5JymoZ2MnHEef5FToPdQVV1QdTUtnyAXFHMoZYoJ7nSiyWPA2PvYhmsWUmXSRPx",
  "key20": "2ahrq3uxKkZebFwyZTPs26LDnHCoiCe58AvYpXkzoRE4HSKKbRFWrxbFbrqu8u98vChFeXBM4EbVYiWTgQZiEsdV",
  "key21": "4b94vKg4ZfNCadyyvHnraYrdy5NH3EW2EE6sW2iMC2pgNDMQdhVf9DGNVXRh2vLBCDkb8oNv5Z4v4Tz6jYeFj3CU",
  "key22": "2JcAAuqk3yWwhcXy14kCBxqfYYuzJWdQr2x4cw7rPJvjYbdSBBaMhk6fJM2HNxxx2M6AzPQRb7KaSF6Zy9ZwvJgF",
  "key23": "4QrfTLskUt5jma65wDtQqzuNpiFdfTds36ZZGn88AgaHqTJ2ZmJb9WVUJLmi18v9sxQKtSfH9LncwWBuXuYnUkNa",
  "key24": "2rBQQWVvKSaZp9SSht3U6D4kLafu21kvJNdoGXsG1ad2jZyB4USdcJwizZJaFgQ1SCQVvDUCyLyN7V2EKBMaQ5U7",
  "key25": "2qpzgVnqQg3jH266f2Rajury149fMUYQyS4KeSLwm9NbKP3LF2QjLPqiR3DNGuRS1QTCq7CQ38pLCpzRdD7WG4x6",
  "key26": "2Tmu2nnDeoTZ5jh6RpD1kPo4Srghcwc3xY7cNJmoaHPe29F2uR3oeyfySbfbNEow9b9b7Ybpam3QP7AxFm9JSCSi",
  "key27": "51JC4aPRomrrA7Y5Cak9f8edjEPjShUzef3B4Lfvswq9GfSzYRKnCe7WUZRQPwQVzrvRuHXPgyQ3yfPbTGHARcsv",
  "key28": "3nQtSkYH2vYGME2SmQaxrKRmHBVqxPTsx2z1ESoRqCHbxS5SZ18Bm3PB9WDsRsbyudeAKVvWkQWXJfxE3qad8KVD",
  "key29": "3Qb766bLT3mavjBVEdUCX7z4C63XmS8sAMgXdgLLhPZvos5ucp4SmEzoyzi8CERmTmXzNq8FmWYfVSA24J4VrLjC",
  "key30": "8acUkTLWpRj9A5okEt8MHsCjKywqUXteBWrd7FmvHboX8RuNTZw1XTDuQrDYDgV7MrHJwks9rzGPJL8X4PwXMho",
  "key31": "2byttrvjZj3JCfsbT3cTEygVKHaGB5pbhoxwoHKeGAyA85ErWy1whsuA7o5eGkKxRWL8zBbGxrmYWGwp6sSdFKLQ",
  "key32": "2riZ4ssuWwhaY7BDhSDBkYBGH2DPwDVDyPvN5UaeKZknfdysHBRnNkLf4gdfj8or1z7p1hB2YBjnS1n3u2mjqiSR",
  "key33": "4B52qzeoM5Vm8iPxGqnjsZtXv5q9YMVVFvYJrdKVT3nCw88FgZ6fRrfLYu14hQZUgvn2YcTjycExKA9CTsr4DFET",
  "key34": "P1UPQwaSrGmoZpERJKASToFmYwN9UxLW19jZR7WKWect27vFyHvMujTPmAgpJPGWxEcR4QXKnjWSuhzv7hHotbE",
  "key35": "3q56Ghnn4PEsANAxsR4nUSxPxGYFA6nvi3gWJjGHTZ4NowEnEYsfsfqjYgHTNi7v9XxkJGU7vSpsmPNSWovcknYq",
  "key36": "4Uo4feRzbCBcbvWnv3kXy1u2pfMUs6zGprdFGDebk4Edgk7Xd1BLSqRrSb9tmVeNYv5AFVxpvUUTB3ixtCLyBBTn",
  "key37": "3HqLYysbErv44Mg2C8VB93SENM4ZzPKkScMkEA66G1jLnbWVeXRpBgUDW93M6x9BitfesAtXpautx2gLymndfL4D",
  "key38": "2W9kZYySz3389SV3qQ8JgL7TnPWT5rjF6LWnCBVegvMqMdXKH9zFqyrrRmmdJKtMaZGuFnDR3kR3XGmYpXspVjpt",
  "key39": "2aQsSnDGQvRHJHzGASJQAGNYk5thSjCSww7kPDLStxqNu6FcrWiTCcu5DA7bmWBKHD7nw4mxQm638ayuvmTRwsXZ",
  "key40": "5AbBhcxciRGp8FN3dmTWJUwBFpfTtXoFateqhCbuCjRkRc3Yt9mikZDnnm1XyqhvLvuYuVjwnyRzss5S13kksDCn",
  "key41": "4DBy5GmBvsNEGrjU5VPVtYUGtsQ7HLsevN6uLTbNNMv1ocbYrJLiRGh4um8fNFbWa2dVwRVwcgBBJJx6bgGrwGUx",
  "key42": "fzXTjTfYcrTwCKKqLGH2nsf4ErwFTwJReWmvKLmXV4Pjjaw5TH1x7b47dsnNXts78CByUC2tPBLLNsLfR6LBhdP",
  "key43": "4ZiNHY6um7uowGoa4Q7zu6j16bJHr9boXJH7yJjdmpFYjdEm1US7CDSGuXHDzKR338JNbYxLEUgfNMDhcF6z1epW",
  "key44": "Q8VVAebGaULd2aQM9S3TANS1qrHux7GFCpdyh51d1cUbBhtGQ9aFfosXfQV4ZbGUzBGvQbpRbz2pWWd8UnchGFz",
  "key45": "4LDEVpFCbZ2X11zZuqTAHcsBr75Xeci57k9SRbUNAfSyyEDFKSqhMJGNrD2FXYadhBTKXCgTwGCQVNEHti5NRgah",
  "key46": "2aCPC3iVtqrErPkEKwNyE46myems3BfzfyVd63Dp6LixaiARWVYxWQ7KT3ovoubexLtYBZMvzXQ5xK6Smm3XMvFD",
  "key47": "h3VR5JmNf1ngUQ92WgVXVsAP2zH6tRutth61zve5vcAUbxH6PeJQeiF5RHkB3V5DpnNy16ViwoVRPTYjT6jxWY6",
  "key48": "2WmuE853JdWK5GKMbY8RKBQWoFY53oeDdZ7Rks7xBkBhT7Nnvu3FRPCixX7kWmbFrk7op4FtVcUcCCGxXNqNfQog"
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

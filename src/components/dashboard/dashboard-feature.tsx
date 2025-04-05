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
    "4jxg9QkumQuLJTQj3K6YnNpDMLi8TqXnP6Szn43NspNzFXBFKzxVSZCBULnsBzHFZ8KtrC77tSjTNCo3X8L3FaRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5JzwNKkZbgzn4X1fL4WR9pAsDRGuzx1A394cEjx2QoNnVfPm18HhVe36Em893UTz9ZoJos4JTN3sxtuV3u4EcF",
  "key1": "3LFijXGNEcTWevQDL2TqVWPJVgaCLD4uDXMtZohANvXidNnNECfszZ2ZpRckaXACdA38jvNvZwqYL5KLNuznDUF3",
  "key2": "5uHWB29HorGcyq78Qm6Y7PPDkoQcenTfaStvHczPzQ2g78menMZAq275AkUKsqAPqs7ivVRu6nXt9fTSyiSmNi9h",
  "key3": "5G1XxVUqa5hj8RFCBmXn85iZettyLXpDZqb5KTYd8K5rhpEugtMtAvnjYv1tgkxktr5rFZTo8QYqg3CWz6dJR5oW",
  "key4": "2McigSx4E7VgGMEuW8v5fzbQ3bunWgNyAGyhxb2SGbEiJZnbbU2U6R9dyt6iQj8Uzhk8xHh1sYEJ5BmcQXGwk8P5",
  "key5": "aRiHqp8vwvJCBx56nc4kvJU6HR1VWkhSueQQ8NJ9KdsMPthddfBpDyvZMtu3gSQRUZ7Z2DgA87PyrKp43E2jfJt",
  "key6": "4SByHaY2S2GcJjud3kJFzUESrmyjKvd1WsV9ATok6zoiZ5bmJAPHKZLv4u7Ef8v7KiBvoNxGztNmivgjntKHB3k8",
  "key7": "2jUSENnWkknKGHCeB3sDLXFS3D8fRKzyiQ3iFUD8snMyMNvsTSPu62zyGXg8pkFhHjhBmdkUu44WssgAtydSLEaQ",
  "key8": "2e1CSL9tfBGcWF1Dk19Em665pJRfNDrA7YUCmC1YyDsbJgwRqvEC58G1vN6LeH7ZfPzJYWrJbtZy6cbGFGnFS8P5",
  "key9": "4fotgu6kV41gqKvctFQggQ54UAwxiNj1pm6WtcQkRS81TBrpa8ANkVzfk52WdTmbGobd4Nhwq8f7i5pw2nZKbuJR",
  "key10": "53DuafdiYBXhKxGhxEZ7FLRR35XCSmxd7DUpphey3gR6mRJMMJVmsbjFk6Pi7K5rQn7VpqvofA1SRmzxnnnR5KVU",
  "key11": "5LGhtoYLPJqNGrFtot81E5aaRd37agss1s6xe7sf4WbqN6EA9A4tM4cMDAfBkiyRXR245qyJKcBei2P72RyiE8vd",
  "key12": "5Roqg4yiNba75EV7i7djTadFicEouX5yoAbCvoD93FnUBkQsXsUrBhdMceZgMqgM2NghQRbwAXG1EdKXe2c1xqqN",
  "key13": "4ojw72mHuu1yigdAk59cUrtYKWtg2JTesEtbt4Snrrj8vcdp9Sy5pb95SknxEJLBZXMG5nUNqt8CKgFXbdSYeX5P",
  "key14": "65m3xeK79CYheoN5KNaDrqR32HhuMEnaW89oCCy9k96gXsN1McDsR7YmpiyxJcFcDcUa57KjQfRhCv28pdSyhrj8",
  "key15": "4GQGeCfjbC2663DTYouB9syvUEUZ9Cd3tgrPZDirZmv3JP684zqSvetw76qTK88XgZvcuazFgNYNCpdDnfPTrZFd",
  "key16": "46c1f7VNRtxdEAfhLRnya3epqbCtGtAuZDh3ouZNWV6C3DtYN7UmUZLCSnwMmvUEMcXbXuqn8WsoAnFoZLzfAQf9",
  "key17": "m2iRn4bJ4ADnRT8Z6dfmjiyH65oi1HoxC6DkpLBmCUWUQpm2zzYs8R6gp2S4AeaMnCJsDdiCFG4gdQi12fNMTPy",
  "key18": "3ocUrDgD7Wgh5BfNsjAQnj3V4W59rT7jTZvVsBzS1mWq2Rn88q6VYESUTgCfsNjU8BaZoF4CJaN1FgyojkVbMZMg",
  "key19": "4XSdMdQtGKBUB8GMg1ymgMd13tVooJ7K2xsUXxpc36sPqYyFtvy9m5rryqE3ZAD73TFHbbG3Qms8zvJZhnV6mVgu",
  "key20": "2oUYJJUncPVzPCDwFqmvQEcA9uY4P9DXHsYoqC8pYkGREgRUoRGuPQYk6jvxTPYBEmngn6dh4BkWcEZmtfFVLVmY",
  "key21": "29t6tUCXqdK3ag4D4uUbXDeanrHqZ5QxcJzb3qgoQejrwhFR36uMCybdBpyHfSZvpufNyGscrtcZP3Yhup2w81yZ",
  "key22": "3bPWyryQNXXLzH799TgzQqRqKRD4pBWavgmPpZM7HDAcHyXXSGv927S9ydwdVkutXTzZ73K18zCn6TCgEScG9Tgs",
  "key23": "4kHPWASLT4fzZkL25JxVBkGxeBvChHKWqJXfBm2RzVbAUeyGDvmsCxFjGmXXZawmCauBKpd57SderSK1HiFx9S7y",
  "key24": "2X6P6g7U9geJT7RSPMqhVyNkdPgLwvdkUZaowQHXbbWZXpPptb8VFUgYwvK58vBSdos56SAJavGri33AAXZbSTtZ",
  "key25": "5Y2dpDjkKjdnBJsNyMXchQx3mnQ9u6s8W86M76J4biXtG22SgZMpKoRX1YgSwkWNYmE7mzYqTabYeAM9dvcMvnoy",
  "key26": "58n3k6HHNCQZ1vBCEco5kyuy1CpLF3CQCEy76uP6D3eGmMqRGxBWJAGFFwtHSaSa6njgdULhfSkL1mUJCpEuwNM7",
  "key27": "5ZhjBKNFtYHs8CxDhbuQDfKmaJfdxok9JNr1d8aybMjcZwaHo9fXWQF5FKTUtzAVGf6pR2GwnfLLZbQGSRLD2VQB",
  "key28": "4cMeNt1U9inzL1Eu9RsUBXHK11NopFiN6GDYKRoWZEPrW8gFySuHDRzmYNMpTSSSTxQwHbiySZhLYNr5Pr85YpKn",
  "key29": "eFTH6vTwRUGUYJA31Pq5GTSPLhwQg6ghdcXiwRbFU4FwvCc5ePGfLifezYaisgFQkZVyMY3L31noxe2gTRmddBA",
  "key30": "3FfC7tkNQu35GjLivw5pBnt9EEs3yaY5FsLez82RSipjwipnJ49RPWAzxCXm2MWFRU212eE9rE3TmyWzADf4347X",
  "key31": "5SvdDGVB5daxbUvfpvV8g11wagct9LVhNppGbVYMqbx4eMW8znadwpL4Gp9irSreVJD6rbUmAPrrSpiqsrnn9Hzz",
  "key32": "3hxWaRGBFzJ4NwSr6cvY2FvF8hxghPA2nHssaQTC89eYTjZ3t8uRkcRQgG9UghwATQ9T9w3RewJDmvMXSt1oSfqZ",
  "key33": "3Xa4Bht5p8jv3YAayCoU62WkXKxTSu5cWMk4hWCGuiFCKhsgg4SvcXTgYMMm9m5HW2T4HrZGzVEeYLGcQLZZNJqK",
  "key34": "3yNmrZRkif879xa1JpfKrzXuyzsRM2pQ3o5HnDgZfdZjbgCvx3aNrQ9j3HUR9vm8QkrpzvpqrhfPbg3jnZjbKP3d",
  "key35": "2uiJrCedDM3mm4oG6sREo6JRMA2kygbBkvbjEt3pLZEBgm1Ye2D3JqG5eHBACxFskNm7hFNz5TfWZuJ4iXN8gtqc",
  "key36": "3XLCyrefxQ1tN1tAPpa317JRQBThnCoJNyHHMKTirbRYBaCJpux26pE1QFZUFcU2Qj5GbCaPgHudwred2j4JVrYV",
  "key37": "5CheGmxZKxPVjhikSXms2YHA1cCCTgq6cDWKbuX4EKmtfZAX9Jo2bgRfZpTc28isVzpoVRfeD8xLzNujNKqwu4wZ",
  "key38": "NSpkpDZSP7DsypaynjB543wrgF3FPdjsUXK1Uva4DMcviS7v5XqyBMpvmnAoTKbdKjhqcpu45TdHjacCBvkDfqU",
  "key39": "2fAtWau7LfFYQMubByP3jzJAxdVnKUxr665eMFL4MxWXLgqky9za8LsgofgJS2YYAXMAawAkYgmLdqZeTKjqybS5",
  "key40": "4sxiVU37YTyhd86vophVUxDt8dSgJukfTi2NrThDiEk8DDrKzv2SFLAE3MtjKCSwL6VrwqnNjP9A1kqLpqwmFddb",
  "key41": "4EBD9zZBf7eDYfGYLf99VZXrxg29sn4V5QWw4Bjdv9N8K6PoVGwCUXUxbiMooJHN72326hGfb9vgzeH1AhsPQwRQ",
  "key42": "2MSMwBPXZZT2TkKooepbB1XutNJHcVLfaMd7ZNFLkzUHh3wMqtvqeFrh9UmrNhmujWVX3af5DKKjwhVfDYgt8wEv",
  "key43": "4aVmet7xqioEUxqCuS6tXkRgvTd2ijoNLXF5HCYuiGzZ3DCv9vdCasZfBsRbakJ5FFwdwEPM6BXFuwVrMZZk5NyQ",
  "key44": "27scc5MNhYZeSCVSXmuAJmSBEoWEWV4hUAEPevdneqG6TyEg1KwCJ1BpCpjYVfFkYUP6QjaoRXEn2V7MEzMH89GG"
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

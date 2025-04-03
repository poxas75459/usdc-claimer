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
    "6emongsVRQoaVGKRU6ngUDVNnWoPp7aWmVfZLFRBQCreKt9jsQJvxAh8NKTNYTzoEhVcDE8jZhKWB5YQCLciRDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kR2dby17EkVwoKsAEcTUERESUjuoRpcyEgRTFwDt77Fm81FhTcjTczaYH3h1zeeyrsjiKxRt6ihCWUN2p5hemqR",
  "key1": "49wB8fk8tS4v4ijU948VKMYn3855U8MikTaMVZsse53sGyqHYSeTVHB8v7g27Cx97omxs9t7ComUHT64iFxLcFHx",
  "key2": "58nTNMaWNLLbtcCmB8SMZJQaHB3C9d6YvbtYosjJPX8rq87G4f4Lp56mPT9sDpqBSYVvub3tvgATG2tWrtzNFg7D",
  "key3": "4Ze4ewEH2ohwVokjkBzFV2CLYf1313Tv29qp1S7L4XJLJA3kRXWxF3Q4zgBeYydbZ8NgdunxX2gextMfQot8QFvC",
  "key4": "2WTas2njiNU8qE5rhxrtyqjHhmxuibqNDs8NdSv1S9HFLBp4W8SGohNUtiToPW6yhktd9WZzBLoU3r73kfXRART7",
  "key5": "3to8Ku5SfpMZM8YT2X5SP3BU9HT7Zdfu2bRQo7kUACHbBv4MW6wj2GhWNKUbv9S8QPPmRdFyoTYmXzYgy7ibFxMK",
  "key6": "uHJWejMNyELrhGad5t85J6JEhdo3aX7F3D3PqCtMzhoPycXEZYpUVzMXJ2DhsD2XmcB6ncPjdoMc4Tmqt3NbVUD",
  "key7": "2ZaUCTERbT4LthArLY2JqWP6fQVy5Yu52RQkVMtS3q9tyjqpN3xA7HFHuYdWjn5ztgZEr7VxrYyj5ECphmCBtbLC",
  "key8": "3VATpQLqhDZtUL6dx5p5Hn4XXLkdV2K16HX2oD2GtxzNrCgXyL361ryUrdQQ1HvNFyoSGgtv22LfBK7GB42jfR6K",
  "key9": "2vrhF5qjzWb9Ek5d5v7hGRh3kqK3P5uRjQ2s21oAQfq1AKPKnFUkNLDNHFt9q8Ars7K1MNwVcNk3oGoTiBkVnpC7",
  "key10": "4XHd35ZX4XQ2RADVGzLJNu4zdquGvA3ggbnRGtSSqpzjNW4fJrPi4N8B1fGqvTjNmeXWBa1nnm8BKbp4MSkVQ9xf",
  "key11": "4sgRkrG9hwBoWUNY5czPcgjeEidRJ9CpT5XqoguHpMsN46KTTGa5XqPb6GzguBkXpJGEJn1Yr5nMEisFeoVK7nXN",
  "key12": "vF2WWfXGd1zrwdF8TtXMQjJjSDSCSzQHNS1aeNzfqhmkakVre6PPrmxADcw74ZikkxCziq65wsyh1Pgf4CCdwYP",
  "key13": "3w2XkhtXcwcVmyKCEJ8XfswhjK1NaG2xJtSx9ksgThDrKCenAE4vRpiozkhfWcmXFjwRjPvqbM5oxhRDxVCGZwfy",
  "key14": "VjnijDJ8wJEarHKCreUtcR72qnZcZw2wNtdT7NiZaYif3Pei39dfTzSvbMb4dU7qHMibAJVqjciw4UCkYQiKP7t",
  "key15": "2fpWBu3xG7B6GKPSKbSLzfNGxyaqsZbmFQCSBARPJXvhXBofrWYSp9GEZqGXrZvyDCrxEhL1KRsQFG8unVZFwHs7",
  "key16": "3TUtS5jKAcuhhAZbaSwwtQZcs1t679qvicfe3rswt4WSnKHKcFQaoBYZSWcjhiwMnzjwhb4Zfkqd3w6JEh2RdMJ2",
  "key17": "5Trc5U9yn45weqfWGSJo8fuRDvduD1w7XFd3pUmGSK3rhUKKUr5y1Hqz9G2Fyr95o3ycTwtbY1viRfJW3PndCXK5",
  "key18": "5kB6TQitNJM2oHJFub36gCu4XxyFF1NbBpky2BWaY5tyGnDbz5fSMRf57SAR2Vb4LvWoGGZkCs3gKHGD3Qcc4LsK",
  "key19": "twPKy1jkNqh3pEnEzdwN7NpzGRcTiRP9G9oNaXkFS2h6qU2R5MdGdxnkbtn6fPvJifnyMgF6UE16sPbSxSAfcG3",
  "key20": "4cPFGmsGqNEsf2wMco45vNHTntMhxZASmbWDF4w6m7GGKg6vdFrb2vjWiTTZwPB3VryV9ojxLsDx84sDcb5mExnc",
  "key21": "5FLyVynKpz1v4CCuUB4PvkiZbTqm4fy4uQpkpaVomoTpPeCMThgBTDop8fbYLQndUHXHH9PUi4Ch1LSroMpx2cy3",
  "key22": "2RsdLhWtXrkJFmSUg71cxt6ijC8Zp93EGbuBEMfzZu4wUv2XQhHLUScTK1koo1WqDv3q9pnJ4Zpfg8HHg1Fsfwrk",
  "key23": "3qrMprrYT2B4z38w21HBS1TVeQ4MuCEpyVzE9Lm8iLZbD6vrtBpjEaBVurW8tM9iUKMUmo28FLKybmSbiyeErJoL",
  "key24": "2NdYwjgbmM7KAgxhuHXd8EAfussb7dJZ38Af8ooUSZfsAeF95EAvEzwQSqMWUzVLidhMrD8hd7S1yC4H89AyDYXX",
  "key25": "4Es9QNubco4oyNaieuii5B1yEnfHFXZBFySUGY7bRrueud9v2hWEwntuAn9QgKx3HWvRLTc8FHGbDvfco2W4tCxa",
  "key26": "27fdj11JDWXYSzHVshdgNuWogFLWm7moN2pDqqsqbXEJ8edTLWoDZ6hVAMHw4t7YhLVdjfjwcRe4eDx2NJKdFmTS",
  "key27": "4ptd9YhJsmB3TjeRL7ogjjiE7mxxoaEKTSvQqfgCNMLynGAWjj8XMfvUSipmW6375r4mkZKEaapavEW9oxWvcFd",
  "key28": "oZz2tmyYxv7KWUjuRkHtRZ9di3uSycu3PKMF2nzPMjBMVrv215796MhB7nCSa28ojFqojBfmR5BQjxzxPvXAeoi",
  "key29": "M16PQme1SbJBXmbxJPkLt4CQoTj91pL6D85cEp5K6jKkLE86GjL2S94xJQ93YJUqyNzwKTvYR9Xj6TLQDoTg3Rj",
  "key30": "2cDm2FyJwJVergnwkRYDCTDHBr22VaBYSedQMw92BAV3a91Nv1YfmCdkUsqTCCDvNSdFqap9yHdX9B8UnNo7VpJo",
  "key31": "4fMtnQH9NtRgNUmJAurdowfbTMR7ES4vZ9jqzSuAsQ73hiokPtY15oKXvrRcHsRZ1VeQHAa5ZkPVfUSeFbS8g1Wv",
  "key32": "v8iCiwr23aEFqcVZWjmKExfopehrrUrH2JBCCTL16p5WQCwwixoqJSDnhDbasGpVrkyKr1eqZo7zNiy8UgisciM",
  "key33": "47qLgH6aTkHKZraYKF7yeJKQGpJGyN48f8MCvr6iAS2jVm9yHqzThnc1gjYtCBHWN53EtHTo4D4wGx8aL8XZhiM6",
  "key34": "4TqtsRwG3rxv25SMSbHksg43sUwaJekGaWS3Jm1rHLA6jVRs8qXkSPjad9gUh48wS656phUojD3UMGzqVd9opdkr",
  "key35": "2aCWmX79Tpk29EmumLohhJckDgLxLL6CPnMbGQFBAK4cnX84VQkexzeU6LWf7drhWVwwCwRkEMJKmCWNy81Chcjz",
  "key36": "4nJikbjvQQ5xjrAvFkRSEsajzG4PjggiokiML9oFipAViG3uGh2sMxKgnUhxLo2DGEbq73BLVyA3SjywJMwKA33f",
  "key37": "2oENUg4GKD4Xu4hwLKhb27DVZP39UU4vpncyovcKQijbM1ivea8MXxnTCzfTHqof83beaX5GUYMz6sUXqtmWLdda",
  "key38": "64maHMToarvokRZC75VqG74ibbDSep7XVDPQqsbeBcMzS85ahH8YKswMDTjJzqiQhZWPagXaba5ZdZEobJK1dpFd",
  "key39": "7NwkPHjpXvvHKU8nzaRpDZNGkLkxGEAhatvazxoTvKz6hpmd4E5Nan4gHSNzA98tBF9Wm8nyy2pdZAEizyeBrzo",
  "key40": "5Z3QsiiDWU66vxC6vEk5wvSTfC2fwNXRV1R23erVKqrDHfyfWpyLb59xzhzvvCknjKNPSurD7ktavx8vVFZN9fDj",
  "key41": "2k7YVcsbfosyMX8F7Nq8PEQshWWbdc9UbnWiQRwcbtoBYSThBKBNd8VqP685Z2ovHSk4AEZe3eXNhx7GP3AZDYB1",
  "key42": "2p6SJLiyjivpHUT4aYmsMK2esPF7o3ppbNS5mrqFMc694VmqR5BzkwhQKsg3anuY6acJSfYb21N8QqR9bR5N5hsz",
  "key43": "2J1jnrry61dxkGAPxvhyxeTKVTjnsAnBScPbfe74EzjzffRkV6HTd1sGjW1kL4ZqfYXG3Dy22P4HXLeEtF9iQkaU",
  "key44": "uRPWyVhowo6Ryt9Vi3Z2UdNsPMfvnsaVZmHm3qeLFGABAKoVCwFhAAcD3boxuPTj2T4HkSa17jbr6oqbgjEJqN6",
  "key45": "2yQFiaAucsaoPCqeH6GwHhWJsge4KFbPHbzZapESi9PVKGhFfimi2Lz2V1tbc6585tktzwn7ZEZVyHCu6yPR7S8A"
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

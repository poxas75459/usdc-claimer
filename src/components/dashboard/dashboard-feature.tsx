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
    "39qyehgXeufYLMrfDB6AoZp9ppWESCKzAShBFzAvxhfVVMVMxbuppTxxNjocJHBM7Ucpg72C4aAVSnQ2AN4pWmLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtLcdWkhhyypQo1kS5gaujZWwaZxZZTxf7D7HX1jeqiC1SegXQ9a82gABGLahWDvi3tmMbCZ9vWNPP3FvC3u9TY",
  "key1": "47J96nTHdax91vQkZyzF33ssLa75uEm6FVNVaLtg6VgzBAJJ6JCGUmMBrdeJ25gLZjeL1j1bt6VKmqXG9HELUtvq",
  "key2": "3WK1naBJbDBHtha3fdboogtCwS4Weybh9Hech1PZcUnvFrYPJge18swoGTevaARsHNaiHw551BECvkFpBAeGYbQ3",
  "key3": "616o3UN8m5e49Ay3ZNS913iCKt2ekEK6XjyPUd17XvyvyXHNdKABUeXmdp7ACnxWHDKDLDJ9fe2Uf6DjL2iVCEnW",
  "key4": "44nsyX1xfLUmBhpshfh11i8vP79uGtnptxTL9USJh5tJiZMhCWxeNjsfoCzHb5b5VCKuWMpyXJerZFrhbcvjR9oN",
  "key5": "5oGD6iJXrYzpM9dRhYKN1FAk6TrJb3KrwnyeKDVYfXL539iGwjQYjhnCKZ4DZA7VeNoxunPonts2J9YNVut5JqSD",
  "key6": "5TuLBtDNx5WZcQQfgja7MmwqaD33qw46YQpvck6gugdjoY9HTpqtXtvMbp8VWLZ9VXtvw6WBQZzYetCfURcSk1PU",
  "key7": "4aaaLCQymUJR6ZrhXW7euaS7y6uG9FyskwjJFzqgxer3rkn1rKkPJ4i6YYRkTgNxyxNLYnAHTXVesZz3qwKdAjvr",
  "key8": "39KkNvG5bWcmpgjZiupHmzy69AaqFd55XMJ5Hw5JcafuYLVqX7iWctZd9UadnQP5kVi9a53C993dwbMWHz2r8tWw",
  "key9": "3qWXq2dGdfGSRJJBNa4CMAnkQ6KvgRaSzEEwzA2iCimvnJP3s6tn7tvSHWxJjJbqNH1BPPshsyVDHjfdK8FQdnWP",
  "key10": "62AtN4n1hBSfNkanaAygKX5nhmgy19qFDbDJcupHdGL8tyxAyDgkNkGweZ4hcNPZxiozUh8w3QLpcy2TtsEGgziP",
  "key11": "3N8KXzfjNRLmiSJHLBKmUWDF4YebYD6GfKikjeL58GiHTDSa4J1spK2HsiPRVXWbFcLpvGwLkFFmbqippMEyGVeH",
  "key12": "2aLmTG1kNUMPJ1w6suD76nAUPH9pgzYDumGB4HRh5WCGcStK1KQ653HArEJoKojgkeNuFruYFpNYY4tCXfu6G4dB",
  "key13": "2BenCGsVfyUXArhyW7pCN6PZcenPnMde7QVuoXH8DARCqnecnd8RpWRhcu6PCUDbpt5FD3mXbLBA5dsLHUvA3WsJ",
  "key14": "3vRmdr3EExBmzTwmuxtqZr3Kz9JmkNJxDh6LvqCsgynh5dhZYzMPdCPxjC293BsHtBaTMwJxo1jgsRoBEFVXhxwF",
  "key15": "2sYKAZnpNMPV8fcCwMnB8YSYTrT5w2MiMrMN2Xt8Qh3JGAZtLJ1UjzPACUzmEzffyV5KmbWpqxp8z4WPxR86sZTA",
  "key16": "3H7NPsVmqv35usVwfzESeyAMxuSy4zB1nduZjURqhzFKHgoyYrMckaCyB1q5SsnSpWWoKUsT3Cw39YtT65NddLYK",
  "key17": "4y2WCSRtR653qLTqKvpVhzekbbn3m6o8wgSCHHpDpoogLfVBtv4ABoQeSKGfA37jw24HiUbVM83FU1BnQRpz5TaK",
  "key18": "2ZmEWoVHbQtbonTS86hfF1BoCCABwYH8N4x3HKYcgFHoHr4rjs1Zo6YjPiRSMRwLcp2kkz2v8V64epczEkP27kv9",
  "key19": "4VdqE13hswL4ELSAVZKq6zmx6P2SZtAm3tyKRbpRftHsM3xhwCHFquTA7zbSnbDfJipbPjvZHNUALwP7zNRHvh5q",
  "key20": "23pRZTm4ELPUYRY8ynACijgXYFfsDnCohzvKcaM3Btj9KmCkKzhMZ7wWrVoKwN94TPV7zi4Y5WPWhTxCb7AmfBdN",
  "key21": "ZAhro4nSovme4aA26K5HCLLhMxp3DJfLp64CuwPnSHVRA5CMqzPjPvYaHLKgAtmEMwwmKYVLSRRahtfTHDPnJ22",
  "key22": "5ZWaQXGhGekLuTQkgEn4C3AC4hv3QC46WwwQ9UzJAU1yGDTSTTGrvH6hTVrjT7mzmYPgjDiNT1p5L9Qod1BiopUm",
  "key23": "2XomzfzV8hJcxYCAT1tQwmvSgMFaBoxLkxpm5anuKu6a58trLUpxjoBchFxfeC18ebPNWbhxHbC3fAobyNRTR1Gz",
  "key24": "zC8FsEJwr7tecuhMExAHgChDbmLJHfNxzGGkLEGgGFYjk7AksFDwTAUJNY7q83Z92nSaruNkHBcSzPFV6MG2GDf",
  "key25": "31yXrvJ3FNtuf3u5PHKBh1Kw26R4EuSNXfbAmYytEeTJ2piN21AHYea5jGs1Egp7oLduk3D2tX2BSYHv2YDhwuGA",
  "key26": "5fVZD6afjsn2Vaqo8BRKdV4hTtFGVjD2mGNw8vW55o8oVG2YnYtPVVDFfN3CF1SZwSQ5WMg6a6XpNnvzXh19rFh3",
  "key27": "2MEVDCrs6TJ8ashQDD3xE3DL1f6kaVwE9VTMveZV2tp7unsRCZj4ba5mcpDeQq6B5mHUR2qhkXzXfGydbZmK8wPh",
  "key28": "2TyNWEJwvmt4ymVorSxZSG1Vw6Q47WYtrmfDSTxV4KMpDT7jERFvjefwdBk4MfUbCExb49oEsxFUysi51wPCnYwS",
  "key29": "5Vgesydxip7fAwZJ2yoacRxoofzL32U4LQcqmVMCUhbCBzs4qZrCdqfcoYueTkCHLz6C7NJKbnxtsCwypAXeS9Sm",
  "key30": "2a98y3xMXMhB99A8uDi2CHhz8LkeBZLJU4Z9X2yp1gVw8UWiK2zCs9TgXiZVKqvLE3vbCLZ5T5nbmTo1Jv2f5CET",
  "key31": "4SdYYPtdRJWzfXZTs3o1hL6cfoaxt6G8hnNBoPq8pBJGYhN4jVCVrmAaCNkZhTfDFFHoXiXPdqLvZDAfMmhuunH5",
  "key32": "XfJv5bncHnVB9Kh9ncMAwtxQT6yAQb1iS5ERgjr35afWY4xMX3YvJQNbbMHcVPP4JWL2YEZBBEyyfZpLxwzrrd3",
  "key33": "27Tf97cSv4ZuQxqjLT5F1pHuMh7T1FFdEgKmCWu5St7ckEVpSWoovNNkqFY9PAiGhk1CDP2XMvMXRwzJ6466xHmT",
  "key34": "VboDXk5auRnzXRJoxzZojcL2T4zkoyiJXGh5PZb14ENN63AecjropikC2UmdGPxLKgvvjqYYhXkRMB1Ua86uZs5",
  "key35": "nVGD7pYpg3THSCrQHKJVFrKvKxjyV8eHs8RUdgxL2zHurbfhnuXgY4WctZGFmCdRntiq3ZScBcFjRns3rBVvqjv",
  "key36": "2Ui616sJexHqXtCaqH3fvHfqB7UVBDSN558meaTV7fNxDR7TL16zazQUggFU97kcUfzSqgJaKBLp8iqWVhMtjdRU",
  "key37": "qKxLK831URNMZi2qasE5aFCJGTcwMfmn1w3pssBZRTGwXEGoCLipzvDVeoms1yKDcgwsKGc1KYW9QrQXu3ftToP",
  "key38": "sHZrYSeACUQrmXAuvcbMSHHm4qABmfKNVpLuX6KctbDecxayUz1JrZhTpDdUKmRs5uZYDLbsmQfZq4ujk8ujYwG",
  "key39": "JUfBYuDQpJDuW8T8wen1BGF7kUUot7tmemynZTsN1bsCZemGK9iSQyaDwcrFzXNmp1RVaQZhs57EmgJ2RYiQujw",
  "key40": "5MZMpvLWMsxuuvTJ7FKdSLEG7yKqESeWvhAVQ5VtrT9KJo9PfhS5dLiKMnbf1s8pUqjHAKRQ4uPPVRARzLQekz45",
  "key41": "3uZLGzFcVZ4cPSSRjBfxjZKi1dqTUo25UyBCMtaFFHpjf23tR9rXyyUCcJMQEm7w24XCXQHja2euDcQ8VFvDAfMH",
  "key42": "24nSQUChA5gQW75TmDW4ue52mRQ3vReHU5h7AHTQq6Pax8emNMU2iDodCTbLJNaxESUMa9HkquD9YXWy6sbCRw2A",
  "key43": "Ru3Cb5GHAFw9kHxSWwNSgEHQtcU7eBJVjPCRaEbNYqok15H6zCj4gLan4jjTjPwypNjtyTcqKDa2gLWeiMTxE9s",
  "key44": "4ZgSqPTi5dJMoHx5AZtdsAxD6E9E6QJmgpiXoktBzhNLUJgUvGU3bCByBoRW6n6CUEahefMYUYrv8V8VdiPv2wL",
  "key45": "38NAWUUAUDCj4oTSi8tLvUsbZfbtjZMicUZKH7Qvy9WHKSgyuH4AoZp8gZ9pLHGWCmbw2CcFxgkXS5BWmobvvBQT",
  "key46": "3j5EgJ4a5bAG1dbe2V4UGML4vfuWdBnxF2BDxNtvXohacBiPGNEXV1VQuuFahGMTvy1cTZEEXnS3y5KEeqGYUidR"
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

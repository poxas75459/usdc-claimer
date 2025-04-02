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
    "HvQThLn5AnfRou1NC1Kw9bMJErbvgW8QgcG9nMMhB2NbUmmNXHJChwJsfbAxM3nV33y18H5xH4bMPP94MYqwPmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BagBWNFdMZycyTXpHpHirdkCMnLbeL4mdqvVKoDA83L39ugp6KDyogweZuK84uF2Dg157fV6owMLNsm9EMhhtGg",
  "key1": "5oEqJUjNSz3nKwDxbG3AH5mYmv2NXhSEodTECYUP2cae8fj21ohC3TSdC73xtehpMvYL2LYQrsi6ywx5M6dwfnJ6",
  "key2": "7TKjoaA3QsN5ejCJrL3xDLRdA68sjjUmUSCNkYrko61ZM49w5RXx7rNWMfKT7tLkqHz5W9jRArN5KadjJkM1MAQ",
  "key3": "3wwEPLB75Vnd7MfCv21U5qHEy5JAYSGFYj5Wbn9bzzaAHv1CebGeXa4mvdRPQi91iY6NJJ3eaEsvFucdshPcMMKf",
  "key4": "8RKrio5KN8agBD6NwdZgCqpsuNv9WGFU5mTAEy7VhYKY15FZQpX3oB8izLerH4Lqm7ZF6zKqsNJDgkEzPNCDhuU",
  "key5": "4tT9Kod6M1wt85GG53eGT3GfKcBaMaYeWCjkkfvFytzkv5uNFmuthmWBdgweAKXKcM2Jc9wWEd2kQ6Aqci2hyD1Y",
  "key6": "5NcxA218vfaBZpaADkwcQ4mMcE7rbPqtSNbA3bwnmCGNBTvZAVUAn4qLCHk1SY2efhx8G7k64FzwaVhp38RXRjqz",
  "key7": "5uZsjNav9taJztHYk7bRrvefvz1iGKnDboSqDB5CaeDgeaFK1yhCiC2YxTmfYfdhH7MeKttDpYogXXXsFVhemReV",
  "key8": "2Aib5u5kxHNTQbaUgwMGDtNcnMLLAJyShETNV41cCi59Hu2FHvazCe9x1XhGCLTetsWiiGneSP1UTMpCYRPnoFTg",
  "key9": "y8B7ucHx5qfTr9eCVuQq1dkfJGA1j4zrnZM1jLSHFwJ54t2qe5iyUxCG7ZrkUsDPZPa7VzZKX737DbHwuvR14HE",
  "key10": "53JVueYebjFEx8h8ckPTvN6FocfjjoT8RempCX7TL1tQvnESN1PgVMj325dKnuMi9QN3pZdPkrDEqgYuxc6PPxRq",
  "key11": "5F3hXEqh5gZHxS9eHpRey86vTkk73ZMDTiCuGWrgSa2fZMB8BVhQjwinTSDCxyuVWoYgJGFsdrB4evoRKUMJddWA",
  "key12": "9zXBKkeg1CrEQLaiASg7jiTnpVrG4f7ZL34KB4ZdzgY2v5wJpjUdw56JjvGts6VUzYrQ4Gs3Tj6ocGUpLa2jzXc",
  "key13": "31v8cEvXSmz3DmpDfPAMiwXgfgW564WKA4UYXyZaf9ExRtnafT9TP94yUrbVVLXBiaeQuLPCyRT4Btqa4KZeoGxA",
  "key14": "4NEHEKmuzaJDVxDF7nd33h8VP6FGNwPjmjGHD4tC3sR3F34zNBYNP5m3G4bdWEs2ViLfF8J9NQHHu9JiSpsbnD9L",
  "key15": "4cQ1yuC26uZHMCTq4stjggNhynRRY1jJ3GoM6EW2LM2CUSxqPXa7E76abiiNrR3NLCoJd7DktG7vyJNQTJyGcuAw",
  "key16": "yNudrqgY5UA4dKGQp75LyPrUDHLtE67S3emYpFgGdPQuMDTgGii8zfAwvCuR1KtmSXtJLkwh54mZU1UzD2htcuU",
  "key17": "4Mmvw8wuVua7ZYsDeY9ZG2eyTstG1dEQmfrKkbGEwL6FAEiBXGtbPWvyaGC27xyfMSbCtkT8w3WyEmmB7mihpGCZ",
  "key18": "5b8dC2dReEfX3UoWGQQizdRnXeRnnJBqNTkYMFmvW6p5KJqjdYCRpXrgRkhAUmZcXKyLc12iabAf2a3hqUWSiALG",
  "key19": "UaPkc7vggXvAsc535HFYhuQx4BhdUZ8BST8krPo5UNhM97HX2BGiDEVLNK5tNnPTzxr6USHY99s4aWJcYKEQa3s",
  "key20": "3BNgEcdqf3VU3bePndpSRT21swJ8Tsgp8c6DtUtpugRiTicMi866Ao5KAZXfp4VgFtuj3MoiszSKRdUmfN4xU4K4",
  "key21": "21baU9WByRci9mFd64vZNoNc7GZDcMkyxtFWY97ZKDV3JiVBEtjH1bTLU6d9sahAy1fbNAHhsH5XDiFPrMxF2Mi1",
  "key22": "4oksnTGMVKryUxAM2Ab9Yp5nmdJzWdEH6Mc5UcYBHKozEPwcgG1ryFEn5avEvaRKKpnKoqfKzM94JjSg3Yx3GJDC",
  "key23": "4WpuVuEHXJfFnQdwwTgaUGtPZYkFr3fMaT2ydWLxWbFZ3mPr1F48jXc99L6avKG2jec1Xpk1kVriqM1DnuQz3XXg",
  "key24": "4sNjPfquqDQLpuU4UFsFvMfTyUwm8VCUS3FgqVvmuu9RtBYPgPvTxDsFZ4Q74PzHCsBDY5dfyvrbnG4eZvSEdMPN",
  "key25": "5z4e4NR5zbRyBLtJgCgFbhK5j5yap4wzxUMR6796RB8dUw3NZSk3m4PmyA5UiyUZUNc4dMUJjaWHhFszwGz281y4",
  "key26": "3zK93n6tgE8vBFfTNYtA4PNhSE1iXs1snNRXDHoYLFpBVXQ4v6BCVe8FJPziNUsrcSp8ziVRBPxNMGmAJRGG3Qpx",
  "key27": "5Aipno3u3E4CZF5MGPdrAn5ELyvwstXFLzYfm5n8bExpAZsFL3tay7qSGGqGfKv9iqsFo7R3NuZ6zbPsXwHCM22M",
  "key28": "3WV1E4nsWfLCPmxA3Zux68WWwa5vgm31DwMrM2wLSyq4ETDBcwou9hTNCNX6mnv8rFUwjqemcJjQE3M3wcVfEPZz",
  "key29": "29emQZz3Mi5mVew56tmXPDiD5fmULGy5Q5v4ufGiXRtDXxqJ6dUcPUZ5xpFYJguJqZxykt1KAX1dW7zXY7whPmjP",
  "key30": "4b1fatJpcx4K1xHQqHKkRKyBXG7jeYLcPCHCfkgXHdU2ysmX5QjY5aCp4DqLkEomTMJGppCtf8inZvUL5BZYnsb3",
  "key31": "3hy7o8B5gXvKgN7nhQWjMeNZK5zWyXgfE8WGaPbYWWdGxjdxSCi2VmTk22PZ9oKvZth8n8dhrVRQKAHZzxAqgw4H",
  "key32": "24uR8UNbXcdBPFoy4PWxJUz7CuYNMuRSxo4bjyqmpQnMMxmBm9Xi4KJcMMGXb3PvKDkN1Vzss23x9XEkiaRVQmiW",
  "key33": "4yzdBvkb7nUUCespLXU3hSn9iQx4DGFPN23LkkZFU4QU8HpMhDa19hxYyXEhZzwmLm87TNcozAXNQq7d9CZq7bTG",
  "key34": "aRUdzG5Xb2GdVYZtRXgD8FaPKpEhbBfGxKbUcJCNjBEf6KSRUZTB3rR8eqqGNi1xghoJTTPabK9xhb76ueWKxpg",
  "key35": "4NRwB3nmBmthNYN7JKzyCuy8qXXmRfAtKKTHkhodtKUuUGWZFoaPMLjCpddewvh4Mr2kafZJJ9A9r1xkiAE8DaXm",
  "key36": "4Gr49Ypd6CWKgVEMWN67zrj5CjqxjUJr7HJQ6TEKFFXMqdUPH8BDAJg5x8v1T8VZQr6gRYNdamcjHXakUb6SGtYS",
  "key37": "4nFUazxQxyVz85JAcFAKWR5FsaQCpe2mBheiECmqgq1B15XmbnPua6ShVSrtsn9LTPsai6nk5Toqt6ekHmpHV2Zo",
  "key38": "23zXy2Von7qzNmbJDZWuEQF7scZQehCLFhUtmVhzZysVAhPT3RcsmkDFmS6CeKzfNcvZkvzkcMXP6gNqUmU6WWeE",
  "key39": "28t5aJsKXBbXmJyAdHqTaHmHdJsKbBcVAznzEosMTN9Lg2Si7ANmBde4PQdUZrvRNAyw5DPQNnucZRmwZQjEkW7f",
  "key40": "4zGVKsVh59cisDtiTKjxAD8iw48wdLpvWtTTaqpvzvLitv1WAB2tzWBfngWwb5tzeSb2Ew1BpZLSPne96VeYr3WG",
  "key41": "4bj3xHjBr7vgBGFGW38ioK3Jr7UUdKnkVYu9eTAFJgRAhjaLnmKuFg8bvmz5J3S6SwTfCH1vKodu5fWwzxEfRjHt",
  "key42": "5eKzGFwSasukE7fGZM7WnhuoHoeLgSDHQaiHcPT2KdEpyHkhCPwEobpTRLtvPnXKe3tAh9Heiyp7hDx9EYsxRhuQ",
  "key43": "3YxdeG8M1mwGjNUqet5EWnxFuMDRaUJottFDW9CVjmQZ62yzgxLhBNmAYvfDN87Ub8g26bMHwbjwVKuNHBSVtEYn",
  "key44": "r4fhjXQTc4W5e3vx7tw89uKudJ7HavLmcYJEp3XP6AKNk4Yn1p8d3gh66UZ2ZkYf8i5F8pLYpHeJyk9v5oRdUGx"
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

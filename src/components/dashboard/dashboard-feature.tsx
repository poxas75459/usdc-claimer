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
    "5JqWXda8vy29QzaEdpjuALr9Hht6XGPDkUYmeTHqE6seHRzP7h478EXcNv3yrR9V1WjC4HdFzbkVCWcDx6WmAWJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7yHzsdsnJdPzXueQASL4U4K8Db7kb3WqqyoUEuxm2RdpsKxN6CVyKD7WVh1fnofNCc9KJ2eU5iZBfbWkw1VCQ3W",
  "key1": "tHtqyz3KLQbhLPM93PNgnMGNx5xzzJutNdUwiTyVnH9HqZnGS2JXCn8Gd43Lv9kDLhSpptvsX7ivtrLFvxnD21B",
  "key2": "2fLkYmKKnCqmLSnJG64CesPZxuyLLFcPpwGfxqi7pnop8DkP9kQGTKwoqCxUckHaNN3wfipfRaR9zFjiZk13cXa3",
  "key3": "5jRLgktmgDqyd4LFUdTbxwdn9ut6BB79pEz46UQMNv9v6tXEHCagvXMYEwv28Xs4cWrC7kwJppx3miU6jzFEeZpz",
  "key4": "4mUFFDfCh331V15V9hPQTx4ruJ7AMZmPT13VR83nToSsGQKkDpAcpAQucdPFnrQEbP8TUZxi5dkx3B7Tu2rVLhkj",
  "key5": "zYFeJTDMFMWySySEarkK7MFiWDEtGrFmMMizPDPT3mBPfFfCZ4e79rpgpBmMxGzUgt2dq1S71p17a8h4xf1WoRx",
  "key6": "fAyyhme1oJmU5ht3WqXD6dbruUhGZBj2PrVKZqLU5mfcrRZB5p9qKCqeWz3r65T6uQNyQK6nZZeFhtpTPmKD9h4",
  "key7": "3Bt4CJzS88VcJdHRUg7qBj4SaAASDCEuXDWpSUgHWy5c1cZ3SEM7Hi1EWQPDa2T7vUovAKkg7xLdQ24qfVbuP1UM",
  "key8": "39HdbGPSj3EwLdiYLiw7J8fh3PKZN9a7N2s9jVwfqTmGNY859CuqWJw7FPPV43ifwvwW71PrSjgJ6vRrgzg1f8xB",
  "key9": "3kbtEjgrVdX7aa7Ks22JJ9kHTjQjkH7mE1eoAYAVhtXiDXKYPmR36ThjP81NwofeCr93i3vftbkeyM2etyGconzM",
  "key10": "3L5F2nxhuaPi2tp1UJewdAv4JQ4qpanSe5H6B92Za6joyE3V9LbfmtL3Go6743tacmrFA4uY9duEurWjPBJeLE8b",
  "key11": "vfwNMBjVfapPMNT8HXomDv96995QVp2EWiF18U2NHPeopt9GX7xy3M33trzr3bg6quywcJNuPGvZCT3upUfL2P3",
  "key12": "5SkpuKSfvLKirtRFFGF2g7CXXw2JDZFiXm4yqaNwVSwt2fP54EH1HjQzNasyN9T7RhR9mq35vm9FjiDYfKJPYWxG",
  "key13": "2DKz5CQK9DYswJWDF57nhaZ6Y7U9nq4T9KkRstYjH5z7sacgNNui13e9ZyfGg6UeWTxJLZfFin4JTa1jRBH8BqYW",
  "key14": "5NwvhzxVJBxmFpiY8xjJ6jQZNBmje2HhxGpE4iu22rvHSTjAAzjTJVaPLhWrC14tWX2VzQqsrtX8xvuem8BC2yUe",
  "key15": "tTrHnnhDfEfZsFyAC6RfwFyHa1dYPGQL7JjFFKP1mLPMuKMVcvx7MFryeUuG9mpP4nyZmx6bmkKapmw88EWbqB4",
  "key16": "nU8jkxQyn6Pm6LbAiGCbrfJGJPDiLX8us6zQT5geLZtamfBbfKM3KGjqXGiUPAuM7eqqhVeHpzZrq37heeVATW4",
  "key17": "Dd8bziRT2ZUu8EYmT8da2hKjJpwDj4gZiBmukGRQNTGXJ3yuP6jfdFfwuGxVZbedTaGCfPQfrsK6N3DCCuiJ1J2",
  "key18": "mMJ22tfUQZxCrRJeT9kQmHAxRjqM1tRbr1zEojBXux463ua3shBrXzs7aPahppAZbaKoAnr4g7adUWzrya2pZ2B",
  "key19": "3MNFhVtb4e11GhgMtHaYxp6T9CdL5hpqDVPvmkxN6ERr3aopTLuHBV4DjjWuJLm3cJE8NunqVZr3kQz5DtueYfVN",
  "key20": "idaoAfYCvNW1oBBUJfTVRAmBQpcD6iAduKsScMZmpDvqawLeYn9v5XbEQo3KyDw74iQtkovnHfbJUweyJXHtxEs",
  "key21": "2CBrLyuf1nkrK96MazQX7HM1bXjWjriacdK5qUYG1nAcgaVCQEE4ndomQkbUxz7nRRMpzzPmsFrVhJYcQH8zruRN",
  "key22": "3iC2tbWCKnYwfAf9qFdhgh7tmesmak5PKtv3cKzu2Wq3DRLsUrpkNHc3THpfwGKrUhpH6vYooY7qVQiHEiQp3Wj2",
  "key23": "5BYjMfWAYiWa7S1nGz7Vt43Mxafr8tQ8qofwzxHuUQuCHgj3TnDQxUU2Yp3AJVV5JrSPmQNKXwizHMXt1R8gqiNV",
  "key24": "3e6mif5Twcwuehq3RYw3bDkDZMLosCzwy1Z4cn7f4RtYURWifFBXJSjBkPS6NmRyg3uKEe9cqwFe2Hna4XMBrmiV",
  "key25": "3g64FNV9UcmnVaPBnBNVTSRAw1mHbXwsuYVJ3Y3CWntahbA94pY1Fwo5fBU2rDqxVtThBJvHH3oz129ntB6q4ECt",
  "key26": "25BgZ4ZL9vGbk53phVfcTSaCoHHMpRCfG2k8yt6hxG4PDBJtr4UcPWAyf8P7MthRkjK5YPwNJ1GndS524QXoAchK",
  "key27": "246A6xJbKKA5NvBcEYJZdfd8KFdVA1rwWVpgcAwjDWyams253Hbu3dWegjrTYXZQ2WirheP63j1W3qJSYPBswP87",
  "key28": "aoXF5g7jknyvhbTXx1ktu2T6cWcu4B8sh8pDzrBoWqRxBN1WeaVB3v7DV8C8vQBxjns891VnN1pBXxhyqpgr5Lh",
  "key29": "29UqdEF1daht538KtEC5xAJUzZWYBzNo8h5ekp7YaqZdsWZ6vKoVnyVwqXku85t1hW2VWvcTjyWMzwd4dRw3fjSW",
  "key30": "2BSjyTZWSX8LvmBeBocau1L5QraGBmDyY271cHUsNk1z8Pyyit4TJLv5rdrUULHbNDbqgSBdWZNUryzXvStq5TNA",
  "key31": "5Jw7cyRbjYaoy7shFitjMohzJN77UkWfyV9dNKWaK3oF283jRTz9axXhygHSvp5VvEZggGujoEfwGcL3JCoNzpCF",
  "key32": "3DoCNUEAjmYW19fPzMf7FAzcrS4PtvtNeFBJGT9hrWrXr6tHwc9SguYUDzgVDxNTc6QNBSG7zdSPCwXsSYgkp5fX",
  "key33": "5cDMRWEMitmBgzY5W86buXR1wiUHAHFaB6YbvsKimC1fBipBRbVYAVtqAuSZ6gZSmLEGA5jttVx9We3KGa4Nsjao",
  "key34": "4jGY9uVZWpU7UPLkPpafATNzsNWuoPbKFAfoFuE5X8D8V6ZKjxtJjAmpZYpTE68JAbYzo9s7EPoxAGG43yFjtoVg",
  "key35": "5xEuLs1m3yrSFwL4daEg5oHRgbYYZConsYn3GGXfdLpusBoi6SaRpWzDeqRBTZcKV3J7eqnQvtHiHzidCCvH5LoH",
  "key36": "XNaJtzJTfFGuvLfzQEihKSGcxY8Jd5Vu5vHN1M4pCjrammc9fsFacREZ51moPihRj1aSEb9Q8BojrcaFEPp2GZR",
  "key37": "5gSfUhAtTnzcJBQbWu19829i1EfyvtWdRWajo7dh2TadFUAYLAkS3VGRhCGsx43zgQZAs49nPhtr68J1eYBYohq7",
  "key38": "2eqYwXYykciqRoFQCFnWo56gEUJZY3qDntUVq9FycPUrcW6aojKTkfgvGtZLWddX3ut3BLG4Qtn2zdtxiVfzfj7v",
  "key39": "4WEtwTuTMvqe6GbFeLKXzu6HbY4EGmQgMjcQLPmhfdwQrhvwtmD2HeY2ugu6znzr73ixYTQRdeQiSGbto3r91Vgq",
  "key40": "5bkaf6hdKDoxigiH13Fgg4jwWMyYmEEcpY7ZaLfvp5dgFysb9SC89Pw2se8fDAhj6BAYDDgiyFzaN8FQU3KLPARr",
  "key41": "29MwrCM3pgAVgTXpkdhsxTT2Zq5wSzv4rPot4N6kpg4cRpwtwtxu7v5NzBu4cptR3ejXwJLV2T7sE6iQ5UEgxnvi",
  "key42": "3H2ZLA9sPPhq9wQbtvC5bZKi3PspVx17aMphsuijPc8qLLPu6bbjstKafmuH1SHpit24mAQLX5ifUR3zdLRVjxjz",
  "key43": "5HQCU4jdrE9jgcSUpr7Gy8QZZG1UttmF5MBRWisD4Cnnt2AwsrANGh2hL92dAWwTn6MT5KFHc2iTnAZ1wZZRD8y1"
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

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
    "vpYjTgX1jggXbKAyhRRgpzt4upaTT84Yu6TEuEh3o5vZJ6a75njYTU4fwm13cN64AweZgxwa2XvdXE1rFDFU6Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYMjq9ZDiPm3vQ5PSiwbfHwtPNy6RNf8awuHmr3QNHZg2XxkTFEsaX8CYLSrn9cKwmZzgnAPRuwnfa6US34obKn",
  "key1": "3ohLs7481xsVccvVeSVmf5w7VgyhYQQv5oT1zN2ZbF5QacekJJrfywrHXLcAVn3vhBJeH3Qu7X5qU4cv8X9MEmdj",
  "key2": "3Bsm6grWJae5ukYJHZnrjxctr7tdybZsxuVd6T7NK7x5P8nzMtJNSGP8Rfo53gf7pbtzStgZFJDDAQ7yHEUMPkWF",
  "key3": "cgKXSYiCy4aDEVjVVwLrv7FUwh9rdzt6QrnUrby3WNvRjAubbFdTew8PuzCgJvMJ5T2suULdfrcQoCpN6jb8J4j",
  "key4": "2GykQ1X36f1WDR7y8FjMNH3H7KMeTdjVsr7LWAVKammT5SDrFX1myScxDZDFWA7uRKMrbshHVP7VaqZyPd91njLD",
  "key5": "v61RtCkBSCdsLmuxCkWyhdaEQpWEqQp74KATxMYKTNKMLBe92csjUnoyPDfPwNKWfYjS53CcwoMnP4qVJm2urHW",
  "key6": "5oKNUHEd9dA8jssdhaHmRxJuUUdUrzdebGzS6VoHxzF1LVhJr1GxAL8t6xbPFM6ZhDfqS75dt8hphaG87Qv5pAod",
  "key7": "4Din3WKGLSkJweUKJ9JyybtgPGxXQE5XmjbzVKXMmgz4iyHURvZBYXachXmb2TDaibsgjvCdAc4cWNf7nG3Vfjc9",
  "key8": "4yd1oqCLV4nhj76m5GbFjNrKhYBk8B34CvLUSoQdYcFjUP6h3sgsbbkXARtDrCB1KGUJAvfjASoFecS26yhdP2nk",
  "key9": "4ViaozbbMvUAfZyCw9ctgkH74hUD4wKNFJoHVbjDZ4bHvcVTG1VKt4Q7vqfy3xygDXLAPSeBdr8XVrNRCT6LwyQC",
  "key10": "4HkDrLQX3fC88q5UEha9bW1iewokF1CQVnrz3SMf3UbdRnToL1xZUDmf2avjBj1pK4JZZudhBxGhVnYFKDJM1Gjc",
  "key11": "3HWbUgcX9HqLBGZNBA9LNFowsq3zqdfyjFxsgYgcPRYgWu7fH8QbPRF8nxCcMDoXH5ouwj9ccR8sWPMpgDLbDPbK",
  "key12": "2xiNGdL3gGiy8yEhuMW6BYVYv5di7eB6NCEHAos6iyG3rD6QUU7cKrBufMosySYJLAGqzw73ANZFHMfdeCddXhtP",
  "key13": "5AESfK8My7o2fmkY2mEBAo7f1yhLZiw38A4KUGd72xwq4T2Ygpfnj4tCCjF14JxJVdStEC9PQTPupAcRThV1EqUJ",
  "key14": "sx2p3RiyJmXEuLVZUPFhg1pVnxfcy6qoDhXtnmfbSntDYdpL6PNjkDLX9sRQRYgz9N3pQWjNgvPUtp8hHqW6XJK",
  "key15": "2qwujwgYpRxPC3ifgDRMgRKdzWqWDoUx9wgWmPfXv2sxBVAs4Q76JtkGUK3XSv2QJTsgy9s3npNgoyZBjzpAgpQA",
  "key16": "4p7FHa6DS6vx7T3kgRqtW2xQgTwqsLNXUzVfEr4HsR3ZsN4xzB5Ls9NBQVfnFK3qE9KsiEAJfCh8rVUGePVHigGi",
  "key17": "23fDJyyF6DvVXvAxhd7xHpFAfxYc8DPk8TuYa6uWc1f8wRFNhqJoYMZbc4W1BDAJoC4zFBhhpjNvrgbuJvt3BkBM",
  "key18": "uCTyMpbcVo9WpkDyDNUYr8kCdsaJPpKVQkM4qt2w9nDbck2o9Ad1dQicxKy7EtMdvtZr97uQUTZyMaZhgKoBHhF",
  "key19": "rVH2CofBhdMWzpjiaPNd5HoCv8k5jkxxmgmJb9KvBhtA8LeKBU5tijjLtky6LaLKX66tbvqTLn25GkYN5aK98xB",
  "key20": "2X1PeL3PurEJPtmw7w5mkxiLCu1FrFx9931rGSHFBGCKE79PXTbrnjW6bo5RBxgQp1qRGsZJ4QxtPNiZ3Z5E2ASP",
  "key21": "3bvbro6kx6kbCuQbDu5hHfdgEfW4oT611b77Lhb6WDcau3qk9U4yPgmoNgoK1q81cKHatEUM3J14Y2uNxHKZMkW4",
  "key22": "23E6q6EkHgm36k1QPSrj7oMMhNMhFVVwMhCu7unvovb9zXZsZZu5GsTgvsfcr7VjtuXRxWTZBhdgngsZcfGgKfYi",
  "key23": "3xLSckk11KsWGK5ZLhsuJbbG67zMu9nX3fBtZyNTXxTashVfevnZbUe59vUujenKtJkBKZ3tCBhLtSn2ZuRnQxhc",
  "key24": "2myvs1q3yxoJ3fE8biYZ99An9TtiqEJ7T5DNGgGWS7dzt2UFjP8SRSW8fQV9UtqPagSbNE7sup8qRxkkrtFWhFdj",
  "key25": "5kZ1JsSszyRhf6GcQcxUnT7Skx16dwnD27fH8mP1cN6XEBkPQPrw6yeDBdFPo9UbGRMvhAoGePxr5K1AgaQKDTFf",
  "key26": "qRpH4L7WUdVu4v7xeeD3jQDCkmcwLvSMDbZxrK5LKyndJ7yPdpN4915GyX5DkZegLsvFpHQhbGn2s98VpRkXrjd",
  "key27": "2Uj7s6c3493ytdhS3cEE43CF7nd8oeZXHvAxD2BpdyJJUGxr6HtccqfrLTLAy8xfyEmQG2pnzVSbKH1RM6MqMi7o",
  "key28": "3dokqwb7fRy6WmWnAVtZBHewewen5i8r6BCGHNWW6j1TX4ameEzTp1nHGVHypACodULS9Kza2Gcti8b45Vdid61j",
  "key29": "47rZe3aRdwqTTh5W3Z5uNfPkaBVHJxSPe9wPqfWHh8bXWk2UcfhBXUaUmix9wis86xt3DmXWWej3UQL5YNBBU57M"
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

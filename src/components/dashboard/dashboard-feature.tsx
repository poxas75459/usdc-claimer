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
    "4vAXhyHGy1A6baeGEktEwEdm5xEHg4XkCo1Dx7SQiwkDitQSXxPQwK2vttXoWzkwLwKj2KBrxbNhqoAB99xKxjD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YmxQfeSvE5M3XqmZDvrec9ST43e3ZnALuWURYP1ie82EC1yCG9HTr5qMwEUwK2EynBZcPmDaKs525v9Zwvit7oB",
  "key1": "4imCVzDkBDzTfATxo47rUdncY8CG3B1UyzPc3riMjaTE3kjUTTPvs63wX97fSHnJ42LsNDwp6hV78rdXVur3pPEp",
  "key2": "3dV3LTN2XSpP6YckRde63eLwH8Cb1XPjZfMbG5AYZVCbTnoq18ZNEfqR89HrxVHsyePNT2TYRUfLYNo6NK3v2FiA",
  "key3": "3788HDyWiX8qMhQNVZbHZgK3BPBWybyo3FX3xNQJ7PUfqEJV9cufT6g3HCzJpJRbnZdfQZS8yNiwpuCq2sLCQJiC",
  "key4": "5o4EkoaC7jJtGLqDGjZmVTXBUo7eT9sL4ztQU3Fop8KJc8YomyJRTuGEeHZGSka4dy8tddXUiPVNaPVckBxJq29F",
  "key5": "2RnukyirYewzkaEKH5TQrWFuvSYHce463u9UY66vh819FdLRBHZTcRiEPEuHAdXqsBFd4xXt16PKjshNoywD3Utf",
  "key6": "4JQdc7AqkrNQebV1vxDqrFRBVEMzZqFt47P8EQ4GeCyNpnfUtbRtvKGFjbvRvQpextef8xWabGzNASjVJQWKVWEm",
  "key7": "3BWX8yd4PMmbce9x1mcyHrVYY4Fu6ESmeJdYxxbqdzTY2WmLTPs8aekcuMpdHu955XzpYGL3KxMnc3UufTGCo436",
  "key8": "4cHGyQXbhCoRWJLdU1M9BUwPe4VdyckAQycPrKVNcwQLYp4mA1oaRjHmBxMbKDguD8ruiCZsJwwWCoeN6uivSj2",
  "key9": "2doK18s4mMqzTFuHaWTF7d7YrbXiE8UbgwNaeyRXtNBWnxcxSiC6MaM49DK56Fy5HATiU4ZxswuKk5GC2nGAcGar",
  "key10": "5SPUHQ9BHbq7fFWiEyfJ51XzCEoevphg7yyVZm2R2GPzjdB46DQhQsDzYXTWksrVSvKA3NBZLvXqkvUDaMqDzeUH",
  "key11": "63M6iz1TMj5JpwYJaMBRRyaJC24EPU2LMZaJFr1TxxcxTfk9Xis9FLSN17u4FGtTLNEp55VfcuXkxMtxryriPjBK",
  "key12": "5XuA4skxA5nBi2gLAz7W5wZ9k2CLRJcjw2KtYqTCQ6npR29Q5x5QnSFhXdPYbVcat2RcBeBdjEqzdHm8PayLxTAe",
  "key13": "5Ssz5vQvcLEDyuRvLA41fgVm8w5sSqjmBewLgrEftaJYLCdpoz3YB4nHH6KEtR8t32usqpExKXFr6ndM1nDXFc7r",
  "key14": "sdWCM8xgjxdjqSmhGsXwAU8gf3xtvEkzn9NMQruYePB6DRpaA9sqxdFxc9W3vmFWc2Z1aVFj87NJed2AxPfPDAb",
  "key15": "4hZUCL4PGn7HuJHDBZpXNE9xjd5cJHncpjHZb6wn6dy7kiReVpMz3XYvEV5cnYZhAiLgVGNMMm7TnzDcXCZfhfg1",
  "key16": "1dcmPpev833RssGhe2qHYspKkF1gx13JuLGm6unMpnTS4RJwJ75pt1Tkg8frEXrtUrTtjSWcSTPA8f13RwE4Hjh",
  "key17": "2Rx1EHxTTmuWynN5kXQM9cCTrvaKWgqNWXWqfrSewD4S1mh3LeAu2UUG4rDyfy26VWEJJVQA2qJzn6o8573mhibW",
  "key18": "5J8ReWBDDXfsDNmEBsCT5drc3W9cKPr6JUAPyAmEAMT6euEjcBPD4AAVZLthzyS6VkFLffHyQZhjr9bemzYFsG29",
  "key19": "2nH6vHdJ5vW7FNjuRbaoeqYTjLgabX2oY4QAnRoJvFhicQX6ivPs6fWdoUFXGCMrDCaRphvyM9wcRZygTiSFpZT3",
  "key20": "3cmcC5Qpj96PABprxBM9SnbdYExmCeYNUc2Sky9VMuBZeed7W53or6FD5xGbzsp3Sfo7TTrPqqfiAxSP1MQ9fERr",
  "key21": "2fTVvR3YD8a8nbKoEqojTMLsokg4tUXAJajGX8NxyYeBuEAngE8ymMr16zrKYQiBifCLH86SYKDTtFmyVEvCRA8w",
  "key22": "3YtWvXCduRXRHpAJVhAiP5qJT8NXP43KR3ECGtYN8dgVzSVxeyqywscCia5kuaBA6gP4aMY17pSjXtnnBxtwYDKT",
  "key23": "56vmueqiFKVtxQ3hBc22nE1pnKwTGLoBiFh9idVnmX9qY4MkZcBovrQn66gGzpSoaxUDrKBnbNiazRwVtRxxR4W3",
  "key24": "2wFUrtNRyCP79Ro1fbNqQckDQso6QapmVSpTZPTtgR4WRLedmzfwE2HryEhiHEKhpJeDw8BM9P4WjQUXjSCyQPDQ",
  "key25": "38RYJuTJtezXM63msEAupH1NUzKpLLrrRXz76pc9srLNfKiyvCc6ckfVU9v8KwFUN1hLTgxAjMTQKiM82ckAutFR",
  "key26": "2V3jafmrJMs7CtMR9UfnNN4JzoQZExKePqjiKmEZvNJf4FcppqkxCjezmuVsLEkD8qgjpbxRivWshYvfijD7S3Rn",
  "key27": "29o4bQCrL6pKEFjrHhfebQ29in9LwXnd2SHYLBz4iruDxtVNAzcBrnKdgYN4eeNye6gHFESJcey67n1AHnmc9rGe",
  "key28": "2t22SKpXG5bv6c1go7M4oKZJ8WaQ7169tugWa78e6vcnZv59C7DngHhnGFz7CMy3ca1Cc5YoPf1yUF4jGFgQGwVS",
  "key29": "3jxpQ7m45xvGHo287c974nRqx4Du45StNvG5VUUgSS7JZJ4HsAJcRqL8PUGciriJmh9vUX5mh5Vt7qUyw974ULoe",
  "key30": "3K2bTFS9wjWphNLP8oC13trE9kRZMQFmurQEDe2rwKYZvs34SWXDrDgeaoZtPnAbFzgrk8wLZDGn9npuLmBWwGwW",
  "key31": "EMkWkcv8waG9XyE2cr3WPWFVmE7nTFHYCupm8x9LYgEx4gbzcgDKLgMQJiJ3KJuui8F2ZYvXoovJ5aFvAFfnJuR",
  "key32": "2KqKdCNEdaBypqVPqChXRtFQDPUEfmRXVH2KEPd2V6J4w5s1vNd7N7D5rv66fBR2sWRQBvgmgZr8dtBcC2f5f9e",
  "key33": "5sfRkUoq9MKRALFxu3tqmDvgdFtFkuQRBgAbmHeG8Qav75LiDxmnSTfjPc2aHX6C2VQcQqyZarGqb2EtJJmPVMQ8",
  "key34": "3MZeb2EnQnkDzASt8VMRE3UovdNNmiv9innY15iKj3qWk4RVnZELzQkWvbmcJUDGifLaCZC4DoxCBGB3FxT4J1Yh",
  "key35": "4Ykxb4wRqqbPkvcCtRFEDKSxxyojptpt826J6ekRii8ApmyrCF9Qq1hQ8BDLwr7Pke3qPC7XjKJQNDFiLspUrEX3",
  "key36": "UrzDLYLK5SBKZdfhs2vzy5zDYgtwg15t9EJ91mb78aVTqZa2qrQKdo4tniCjAzeQXBdjRk2djScAckymr8UX6rT",
  "key37": "3jNrZdrZYt3THKSf1SkQDL41w27hHh6sS5ACiFGH1RjY6uEHmW9Z1SiczEXFj4KhsoefMAAM1W8piG3M3Ryf7ZS4",
  "key38": "5BxqxHBkbz1RhZBt8iisZAV43fZMcqd51kRW7q7YRpt2GBvewfNc522kyNuRtkCbRCxHsgVnCvqFGRwXT2Jj1z5m",
  "key39": "2y2CkQupd7D7AsNrd9vRHcASC6S3yXUGeQY57MQs7SJ9brvzs7A3jpj6j6Mpd3CXdEfR8p12SEjQPCLdakmyDsoj"
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

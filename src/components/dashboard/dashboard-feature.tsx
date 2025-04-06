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
    "36s2Qj2obbGvoaNs63XTdZ4AjwXSMFq91yekbBYdofbos4dY27uxDbZsP23RUwkqXVqyJmyQiXzBrf1kt4KPKc1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qqBNnq9RyGY7Q9TiCr3M6pY8oQCjbhcQEJx4rE2vtLjQSJRRF1P5GB242XaLitdEZiCA6VepgUFyCFp6CeSKCNN",
  "key1": "4fD3bzxE65aXUUVM4K6TZEvaczAVCp9wrThnhKxuV8TcoPcdYtbEnJrkfz39s4aiXjZDjo4L2Xoo6BTJUFmtGocd",
  "key2": "2kUiKudAftsA63CViEF5V8xQn9fr2G9So7Z4bi27Lr86TXvUh4p8UfcN9xkiS7mKzhmJDMuEHT44hVEF9r9SGF89",
  "key3": "R1dtAT3oyG8QCGXYM9KbLGyBBZJC1rmvBMd6WwH9PsAfnuG8rZYSgvgoS6QywfudZuruUejXAeqtYw3qYxSuitr",
  "key4": "5ZHF74cDPSdFeBdpvUeE5SaLUkV4SQxvUELBTiFyZk6TkUc4RoJ54Vt9G5ZAWW7aYTKtcwbgmgXrRz2cWkS41itK",
  "key5": "4ZfU3d1D5CJuqgoLnthqHHx4988AG3Ns9ugpxga2TGUJ2cqtJBpTRQsLkmNY6GesYAXyCwbNMzXso8vvtv64yDpJ",
  "key6": "eUhbDq8xbnafpqAisA7U38GHTVhpSi8Hdy1Y4dvjpP42gXMfxBdRkfENdWsfr1gAuZCPJz2KoJGAnSpqbdd472E",
  "key7": "57DTkazXE8YkF6PzmUEhAJJYKKzYX8ikx3vXHpRJZ1FAuuRfHuxtBi111UP2QMiisV8TQ6bmVckfAx6ns8yNHTGV",
  "key8": "2nbQvFWBHPNGgeayCZTS8unPXrQEj5ynZ6jhD158fQ8yo6hcH7BvdV4Ap4XUwcz6ERJ6ekHL4oRud9m6EdyPtFLx",
  "key9": "3grCxHdwJKoAMj4ijAWXhy2N4uyAmcVCCTsgPUJDD6aMoZWZ2H3AVenSLwuFazDTCgYYqVRCYp8BrtwBsJXqg5uW",
  "key10": "4zq9JnQnm9yowwa8kXe66EQ4xk6wQTwEgDm9GLbQWyg5Bg7tTo6nwk7zohki64J6ZueJAS8fMQq6JNxkRY9nQ6ys",
  "key11": "5q6buePZrF4TheQZ71sjjn1mXms72i1CKUB7iM7sdvCYqpztRfPb1mfEkCPE7CgB22e2HEi8oP8ZtTAr75vTJMFT",
  "key12": "5SQfEbJtkxQtzUibecZhBZAq38zRuEpXGxjp4pHm16hKqWZzutqxzF3zSeBkYm2gwcsLhnmWTcPkJGiDVauhTJRU",
  "key13": "5z9W6PRN2nV98RAZLiQwqWnSNCjppxbTFf4jcGf4hkvaPtLea84Cvt3F38Q9VdL1dDxzB6qzmgS6jrgrywg5N5TP",
  "key14": "fgLjX6nLiYsM9B4MFa1gGyHz9oqiMzMLEHs6AX8LxQcKT7qunSEN8eaDJAnNLQUsojUvM5rzneXxEJ2hRKakmXL",
  "key15": "61kua13HpzuyquMseG6fQnBi9ynzrLy7KgKwRvh34xHuPcxdwHvrfuLZhgruFv3NYXinHKmtYNaDnSqPEqF4uztv",
  "key16": "5hAjrrYDDNKU4bbt2EWKp2LhxHpu3o3NJFy9LwT9mqKEQRK3caCNmgjDzH29wcKustJMZmLXP53zgtRPu7rexfFf",
  "key17": "2hw5vwjxBr5gnrMUxGKVLV9A4Fy14cNuNEENJi4hwGvUjjQEw26G878RnmtznhffxRwDFvggbimVt2cv3HMgtfx8",
  "key18": "5M3DGCPrPyCEwvy5vuHTZBB2GeeodERRww8vxxn5BAVZ2fqvtB83f5TubcuXuM7JBA53AzLzwWqELEgQNczw15bH",
  "key19": "3Nch72PvB74tDfJXLpDkWHtrCMViszrZepLzTxJR1nGuP9sRVFzdz2SVTk11BtkrVeoHUkWuLqbgjLa8vY3vSrdV",
  "key20": "27kS6ZWq2hCA4PUktPvXh4kdkqjrQqnb15ZBXx9nmhtjC4qUf9FSvPYwdaH7vBPqZUT6GrMV5ajZuSmQ9Ni2CckL",
  "key21": "2qwo8EaL4XRntNKvpMKoaVsvvk4r4EW3xJruX2FcU9QzPPEjicbL4dyPAqqik2AL127YDJHj4pc4vJ9DznHskvny",
  "key22": "3CzkTPejsuQ9gRk5bqbsm7yNdeM5jPuUZLUdcpGiPMC2hygBfyBWaNrofk3yzGUj8tfhnNuwMKdbfEW8b17bbvik",
  "key23": "5tHCTmsy6XaenUcihZo9H7nLvkXvSj4DRMhtAjYLxF4fhtp57C6U9SxW7x7ebFb7HUqU8xpxWUY4rSQRgAa7qidm",
  "key24": "67LEm6Qgx4KX6CD8uK2nk6kEr17CjpHTroB4KD4rbyUutPHDDQC61nEmZNWKf5GjSUzqDK7sN12gzYNXdBjHiBTy",
  "key25": "2ZfA8dDvmHgJzZv3Q4DNq8q7tqBRMAtfXgfJSvxiaZGmZrDhVdZ5YugrZMH4DGBWvrRETh7811wDWtY5fBot5Dtd",
  "key26": "2YkDg6CMwd7omp3Rex6Z1ZpWzQ9nmVzgEj5AVCKwaY1xh9hudAfyThkjpNJ6oJQ6PF1gpiLTs7NT4tiDxsAtGA3U",
  "key27": "DGUM2D6CMgSECUFmVd4peGKVMC55th6sKwmNTm6us8s1wXdwbz4kYTmZGVNPSiNqLvUSSSXn45XdX84gnhDE6yX",
  "key28": "2YhfgkMSe7jLNE1AbqrDCxZJm2uELHqrGh28Se27vPL9AhbSWPh7kSjGqJGXTuNuXjgo3W5VMmSbqAATaw1624Wq",
  "key29": "4EMBK9dcCedeJhiETDb6tpSoYEGWxK7c6pjooGziABPwR8JUph4GNcAmGMjkaop43ZzHAg3nKJ8xmbg1i1bkRT6g",
  "key30": "32zJekXXk89Thds9poq3m1aKsfR2XDebKWGXoCQCWdCUgD3iFWJF3R2XQ3c2AWswaowpGp1yCpWL6Q6r7a3DKLd9",
  "key31": "4PkY8r9oWRMH8D1Dz15fUbYf4Smey9xWaBsZgSBH8aP1RKcDvx1Xrks13y3gBxfVEX3nTbDWxcKBfy8K4uhaN74w",
  "key32": "mh482Tq2Qc9ic15kvLVpCQXjjjwdLyuJ6tNhAgHbqwmPXJJjFYxv4yVzY6HV44KqDtCtKJPCi6zgiwnN1cEzNyu"
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

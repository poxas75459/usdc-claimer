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
    "3siQNmJGziwJWHBxKN1YitWSyzqVa8S7scVrmVpJR7RVNF5eANHaRFPMgzhzrPnKWVpNRudXv36ndEGbY4h3iAiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzdV9FpewjE3NAuNk9q9ghoU7hMTHfboHeL61PecRip6uVrvfqfFCB9pU2xiuKRfdJj4XKNkumDUFiSjGyk2BAY",
  "key1": "3LnsgrgFYVgYDUB7jNkR7BcJ1xmEKaMQvZaouVCHm4CjWvmTAvfFf8GoSioWrNYs6Bf2rxvhFoaAzFb1obzvPxBg",
  "key2": "5778C2LSQ3waS1r1TR6RFmgfPMm5V3ayc1G2xZDw7gxaaGYhdnc3dBz9KpTChERSc8puRtCUt4boXVtRCHkXPCG7",
  "key3": "3YsGzh6zPzKVg7N6238gSBcuJNjsVszEzKsmooA8TdNJkoJ5HJpjNUfE4252nkUKZEWDmmvgkXDZhRqP534fkDgA",
  "key4": "4P9c5azyPV35hajxQZhxyYepVo4Khx42o9sBZeT8hoVp8i7ync74rPcN46VR6goNTfBgaEy18kUtYD1eYdKRqw5N",
  "key5": "3x6DJbdNE4GbixguhzyA34XRcoNNoNBt3B6QGQrgZcVdRwr5L6dpnNSkyd959LRG1ghLiqhNxftR2a6gfjhtXsot",
  "key6": "2BbYqqNGX2vqSYxYnqDCzEh1UcEBRrYSgkvRATiwgsb424g6JxBSsdi5NahQBJotCm7xqQvJpYP3bLbNNn3huKkK",
  "key7": "54wk9HVdYQ9KfYbdimzSZdY1UxVuv39LgQYAAWxhTtUhicyrxwtHSVqVKW1ZjeKvax5MTSMEV22c9Pak8MxG8UsL",
  "key8": "2u8zSS9sKZd3QzayWZRxgAjX2bhyBkPTBSprzMPG9VP2iryZ85EA8A3Wu1JYXUgrWnwgTEHSGg5BfdsBnwx7ovJ6",
  "key9": "3LRVyAuEza6UDDqasw5s8HnhQwGYSzTBaeLjne2FQeveqc8sWtH5yCepRe3mhyXwMYUDB9vgsfVwPHAgxmLHxTS4",
  "key10": "3VzZj9xDnKtsTCAwfnV7asHjutYTDeDtpQuAdNjDRq3mSaKv5HuFQt8k8N84pUKAkX2noctEWSv9wmYPpjtRpu23",
  "key11": "3KLKzn9sXdKPEDLoQULmgWbD75CqgMxFT1rc5i4a73PFeM5jGcA5FfypCGf13Cnvccgb6d7RK5jhXBAmPVkAEv7X",
  "key12": "2LWV4JYMC2QWPSZEW4d1ugXAUEcLya2q6mhsTWB4w6SfuTaeNZsamCiWUi3tfVLSjkHVfK6zaRB7vWyAAzoDAi2b",
  "key13": "2aCdjr6GFqD9G4u3m518RseySoBKho244vt9xzVxdbDGztFQu2DoYKQnp6ecufsUVGSfWKp3V44Qqg7eWWBCC5uy",
  "key14": "2hSYX1eyqsik3CwjKBSBExpX1nkaJ4KxvKyZdyiMirdxTRY9PUCbceDSeLMXWfX3DLjMaNiAFB758fK6groSQ7mY",
  "key15": "4FhKZrQmfgPRWiTLiUkFAPEHBAy9LNHa8ThQE8rfDfePi6JsHhvfRidjXe9F3dKRgdFDSG7DgLVdGjLiqjpJcJoA",
  "key16": "4k7aLawKraNzhHsMwgYugy7KbbCkBZZDq7ta37HG7ZvJWFb2GkGgDhZtECzcdiHQB9pX1pJ2JXGhFp8c29gWefUM",
  "key17": "SkK9d2fhbka1nkvnMWd4oyTeXbKL2usoKJjuBH2imKEn9vJQrWBVSbnZi5Fb2LZsrmVxLRPUED8crERmp8bBuiK",
  "key18": "4TN6rFhYBPHkqce9X81c6SnThpQTiJG5scoN4PtkeUgjwJsyZp736GUu1VjR7BvnMNEQQbvzgMJacakToB5mpWXg",
  "key19": "WW6bdvBax2kutoxDBrU4ZMtAWsckg5SEA5wp44qGCvF48vW3oQPFHoktvUydM8GGS3KCagECd7wJxgNMuHWBA5Y",
  "key20": "5fHfbYSUcTHnoHhgdAMZoBrGw8Fky3EWiCiNR64LfBAzLCRUbGS66GoM5CoCduPLkejms3rzUxKtmagx7y87pNv6",
  "key21": "2aaXunD8G64GvDVKWUxkUYCK1zu3EUcU7NPUXu19FVUJWrTy8LjBVZjWBBuLQsJxMsuxQbQDdAU8QmP34eGwB5UK",
  "key22": "5rAJttxDE1X8nZ77Q2PsTuhnUG2jrdroPdJnxub2SWXc2wXoYG59vB6uK1Bd2N6psDo7QJLqh1he1DdxCR2krSW9",
  "key23": "12A9AGpfDTRqYkjkvk1jEfaspSZLZ5Pf2rJ2wfj9TfZfJACSiAgrruYwKjC9ezAGEb2YVyzmQ8MXRPx2nQ5drajR",
  "key24": "cX29qnefe3q6LNMXMw1LZ9wLX5tr3hbgnydj23yqL3Z933sakUkXcZDBFvrF5WmgFerCrwFkXjKN8S3xtH6weh6",
  "key25": "2YGxE9EkHoxoBSUim1vse2eaHRh9pbmBZqJfM3QSqhbQ1uAUbjyCEdM2XgMHZhAHfaEdh4VNneniNZ7Z7CgSHJHG",
  "key26": "5GbsBeLJ4z9dzQ2pYe3vFXLRtXhAQSzZEw2nvDe8CX3JKSw1C32QZHGrRRPA9wG4fhccqvxxYux2RDoyVF63Khx6",
  "key27": "5Cbe28rxmLMVKMTLtXZ8Z5wPyUshL8kb6YmEDvWU8hjs3NNwRK6aKvn1CMXKWYmch9sDBVh8mxjhy9TnwZTNmqPi",
  "key28": "5SiARkEErr5KXZoHh8d436kGcuJ7u7vdQd2hSXUN7BC6UWPhJjHGsjUiZKcienVeuCHawzHqwdWNdYVaVEtMH2yE",
  "key29": "2FCe4C4wQMsr5bJPnfdhYV2iHX2bCQW8KSG8rEXqeQBX9AiBQCapDS4XE6FQP2tNFga68B7w3mC33Dxj3TFhsK7A",
  "key30": "J6DNXxgq6rmqZ9xxJRsedWr4LJKFJgoCaLzHWmmGtjFy2g2oMJvCqiupJVoDQHu6bvzdPHzMYfa1p2DFQBMN7tp",
  "key31": "4rafnKMNrWtm4VSjC2NDWKhpUNdtz88XQUTDticXjhZhMm9w1xNjqe9SmAotqedoKkJWBorRWAfM9hjooQquSGkG",
  "key32": "41EuymHdRxN7gqfD7RuZWKmeyfMHcsi6kY7qrMUcnnhUuXDWvnPAEKmEqzLNhYRjXYpxdQs3rtokAGvPCHaHuenX",
  "key33": "5QrtiurRUpty58G33gHQTVBvZZQQ73eH5qiQdbQckJadXRUHrrDos5oQ2hN1xQ6nCPJ13xEMmKsaSaniK56AjueP",
  "key34": "3SKSpfiwK64N4GZkcbzCnnChy5ZrxYVjBi9zxBGGt1F1yBu2aqkPTW5Bf5WPPs22ctapcUiATQncnW49bKtWmUHE",
  "key35": "35XFGDMwmwvkwk1qHkZPzrKttih2XSrdtWQQ8EoteMXyR3PoYFEudkDNcvzKEFATvZquzFDWMwSk7wf7Cf8CVo6t",
  "key36": "3xaLHZiPYSWhtG7kxrVRjXi1WVonYiyABK5UBjL9kmyfVmC8HmWvmLMigVWPjtrWfuwrBpFE8qxSguUoxFmqNY2E",
  "key37": "2YvwBtyDpU6GH7bAivBEnJGADUugaJQ7QQtnxAs7BA7oxfFZA1kADozHLhkjLyndrnhygXgfNQY5m3f1VKUTXyyD",
  "key38": "3nme4LGphUQRNaqNbxdCyMpvbtcWu62cvF1oAeoZLuHZGxWjABjCkvZW2on7KZCX47ZUgpVaEhvkzLD82i9aSxga",
  "key39": "4YRgMAkDsTFoHWGZJ6sesKmiHLWRfxodwemzWWy6yjQDy2W1Tim89Hr6ahuoPcUaFppQWJxypoAV9Cz7iUfSwEoV",
  "key40": "43eCUvBDPR46Y8vRQZ1b5frQcJ9TeCbbX5y8cVtZAiRspgxMh4mHR6vfqeFyvVY9tmo3hRPPE8VDkx9vsNr4VrdK",
  "key41": "3bxNV6zE4wyzfDCvmkPjhTYPKCmk87vMVPSAJ4mV1t3h1fi1iU7Jc8p6U6Y4GW6NN8HtUUqKxHS9FFiQQ2nySkZc",
  "key42": "5yb994hZUvYAzWxhpbu6f9PabC4krMXYia19C8Qewr9taaoi92SEA5J4nkW8w9cnq9zpqowMGquziuacHjeJf4q7"
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

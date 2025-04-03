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
    "2RGpj3DmiSngTe3Ba4gLZDTamomktjDTyufH9c2Q16DyJ4Dw52GMgrWXQPxo6HsGG6dPxFDLtEnLVcqXv9GrRAEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cGPfpPW7SPUQvtwTY2Banu3oHUMKmmofuQqvmUmLKoeA3yRsqDGyozGQDW8GBW6Sf9TieKpU7MvXEgKb6cxBwYb",
  "key1": "3TnhGMUWBKVJjByyPo35B6ooHBmA9ZPcCSjnf9WGD8K53zqs9xyXcp5gqikMQNgjiMiTct8nXzfoMNisUAx2czNs",
  "key2": "5vjL7U5BeJhuwddwBczevH1ziacwxEXD1oTDrvCzL4dfGeQjLjo4rHBQ9FGGSLaxMsHa93tpdYvRu5tG4oNERZxX",
  "key3": "f5ShiDiz9eNbF8z2QgMGcQxi24KnUZRrYekY4eA7hm6xeKp8zsSRntqy1QPQHUR79ZULsgfmPNQPzpK3njuRLVu",
  "key4": "2WqDA7JW9yqGNNEKeH2JeCFEzH5qh7Y9iTJ2N776DWCYRP11ZXVDxyrwHqx8cGfSeaysrHznf8Q8WtijjgWDmknn",
  "key5": "LXWrJr2i8p82Bc3HzpFSQzFqvqZo8JRKifLi916KZmfG4U3Fucb9Sv53U9PSd7m5JfrfQThz2rGnfj1ua27hTg4",
  "key6": "4S2MiABkSE2JUUBdZKLP8qwsJCFvDrN6qkF6S1wXjgMt5wGwGfBXMqM1wgY17zbD5dchvtEi3JR4sf3eSdtuKHCZ",
  "key7": "5zmb5kWCBW9xbWJxkXE7QtcFkhtiVWmK6ER8Wj6aUZteGh55g5KT6HAe61bFpXNdojeM2kT2UEJrdvSpM3ex5r4N",
  "key8": "5SruVutWPFchVd5STtQw4iGmKTs5T9tEepjDkqnjvZXGpbMH4ysvq6Q5xzicgdFPoXo5tkYdJYRgWzbrN6gYX8ka",
  "key9": "46BMYxgrJ9VTTeD62C1pv2dPyC4JBWgKN3NFKq85W4WxwxVvscwcDfj6nLHWJkbHsMKtM2DpbiMHQkmCtfH15vzZ",
  "key10": "3826u5k1yTxZUnFvPxeyb2cgeGm88ptLJdWYhw82mHQMEzrL8XDJN9sYDkoAcESdhnvj9LYg13ZK6hDajrp6cbST",
  "key11": "3Hbqqtu63mu41swcLR1fqAxcLJUdWvGLL4aCSofYa4FrAHrtcjDtYzs4rftumm7vSDuojR3qJPd4Kvs8MFn9Ar8m",
  "key12": "gKAqAsxRRPnRNadmfyY8y14M2EppW4wzmDQHhWfA4LKMJ25XXk3FsKosxgEURgRndeLe1Nx7HDtviR8BTcHJSma",
  "key13": "3MM7623jfZAuFraCxRGTUatFqhSdy312paQbHdBNRG2EtmCKqjWG6ZrLBVFxTjNAd24MqLr4BYhbu8mgdZxujcT2",
  "key14": "3s9UMTw9bZZZN29c4udQzur7zoYtFvvrvqedHK9i9ekkaHqqwfXu6LhAg1qFpvsfhnTAKqaWJkM5jwkYbpXF6Bjh",
  "key15": "2mRoqxczpgH3wPnke7jjQWexZ9HXvUfwnSRq9bkhp9HKrJwAg1UGPtBXr4a4ZwZv368mUvfQsxJiVmvx6Xpie3Rs",
  "key16": "5kU36V7icAEMN77nznXpZbeoJcrcTFp8jcgEEWKKbVcQMhTAKFM8pxRTGA5Cq3y32Qm43jfMVXA8Rf5jpc4tEU7L",
  "key17": "yNVhsFGx3ZbbEXiWgup9UWp65pnyCj5SpnDRKRewuZ5HEvPNcX7HDDaQMchJEsNf7XMMA6BedXNtzsFekMH8gVu",
  "key18": "3fY168zHraWhtbeTPcQspwHKY3QnPM4xYEdqJ18BxcoWAh48bMkaT9hDa1gSdAKqKVL18inwSfoCyJmc4iWX4adQ",
  "key19": "kGnhLh4VC4PUm5KQVvpnrYjNzysgiBkkJqkmZSGQ4m6MTpM2uJWPKECD7qigMDKu725A1wTA4foVRYcKnoYkCVQ",
  "key20": "3GX8LwWR2jY1D33kkZqhZwE2X6zi3AkBBwVADMgGRDKjmhLAyn1rFWrUWup9zaumdbuZcFXHre1Q3xNcwa8n7osQ",
  "key21": "4JTUXUE1utNyyfjQ8nmwEWTxMdBQrFBe7a1unZSKeFLbKNz5HZFQaHkfHDsioAc8KBzXH7TeA1nEbHVabnq2gsai",
  "key22": "4o7mABTNaQrFABwaPgCQqJQNzVG7b9FwgSKs5HNekhMFLfMQn32DQEhtckP2vmpAW9zw5xr1ruxDrreFVUo8fYY7",
  "key23": "3WyDzGjz6XEPUUtnV68iXVQjUTYT7DwUm7KTq8c12BRLXu8xyxqDhHAJswvXVdtj6dJaXuE8WSBMMDs8ptcfMmD7",
  "key24": "4CfYKdWJxxjnnUkdJwBXvquw9pWJchJsvW5GEcCxLBEbEF9XmQ6CcuCEeqdyEisvTzTA17bUvxbxpAeZfiSu1TAa",
  "key25": "2guju3Z9yPLdpTy8hdKWgUUZyjT9Zxv5FiATZVBXAFH16Lny3hDL6XkpU55EY9aMruv2HgEHnWgfGV5PpwWEJnR5",
  "key26": "3oreiQATcSScPSCuHiJmsmmcx3Yigp794oAvG3PbZQfFG8xMWxmhPADTPDrB3ZKUas4Zgzpf5vfnKdG43jo24hZQ",
  "key27": "u7S52uBg8Nbs1HoBE5hmEZciEMfGeYYwb6ejmVarNP6PKisLn7wJJtMZ7EAiqmn7a6rUUx7vvRZRseyrpfAgkjt",
  "key28": "HBAqF64CxpjVLAsoUWuPRDbvGYgoGhmVo1WCpQEozQ6S1hcAGv5598semacUoYZR2T8H1fXd8oAMU9SY2X7Ffgr",
  "key29": "2o1LG8pABHGy3S3HBpCQKyQTuoHYZnEuJQEL8eo4JSHr5iFm2e3BL8g3f6URhHwL3ZgvgqbVbv1pTZP539nNFVQr",
  "key30": "3cb8LcWhwvDnTk2Vz4XLNE6rYfsqj968pW4HnFdbtk8Mq9hRp7L92LaTzJQD2YyzGcR5ddig988UP3o57BYNzAH8",
  "key31": "2uWcY7cJRGfWP2kjFResGEZ8jf3U9nhz1AFZPSzxxjieitGkewYVEZNytsCVEH2aoxsZVHNyVSeDtzmnpE49YRuZ",
  "key32": "4zMr3RN9VdS82fSYehpUbRdpbRLT6csW6LjBjmjcM5FuhUzLZrCzvguJPQ5QpcD14EV5RLSkPXG321LEHgYkYeRE",
  "key33": "gJcPHQLda5xhA5SKhXzzKcsDf82hcC9fmgMxeDWGNxm9UoFBfhtdvG5fjzNJZBZ5Dvzy7voPP1EDtvweXEyUXFM",
  "key34": "cGhsL2WY9k4q86hPXRT8mu1ZbkvoT8CBLgRcPCDrUERsQQznsR3H9ZuGfvsGXetVESNRiH3WbVA1eVvQJbprNFy",
  "key35": "34He8QLyf7w555AFxYH7ZPozL9Vy8QWcxMLRZz8uYBGMpPUjjRNWcV96uQ3XUC8kmbHpeZ9CgJMh6Hp7whbSABLB",
  "key36": "3YGdvRN4oujnDHB8EZ17j3dTTCsiiEPNx7SMYaKi7tFAcXbaWQSfqmPuPne6k2bFUgesPXWjG6svV9LgUyYwQ7ii",
  "key37": "2fzxPs3WBWZDq8RwsrD4i5d6zhnmes8CjvhMtqXVERbEL6aea6x5Mv17J9aLdJ94hRTUQG4qSf4jddrZGVssU7Vj",
  "key38": "3tcnwkKLRKHRCFXArGRhrgusLy5jB4msULAmDfutcPsB7YyfViEtKZZE36pWgDw4rauyTWmW73A8GyhFG3AnLcvz",
  "key39": "5idHCw7wr3qRE9xTk3kRgnJzr7A9QgdhTi2FBychGbrQXCX8dMnCmJkdqwaFS6jxtg6kFpC5vpE93dbNqrUSqVXn",
  "key40": "3tob5fPRu99TUmL4WSfeUiwPGHWhouQhbc7tpgUQfeFzVsD7Wb9qbmcgNMotrbYqqskoNFSR3U5JVku1ciQdDLdL",
  "key41": "297fYs4yaJH9JS5KhcwRo1FncX2PhiGgStkV4vmfAMzpHYV3WMYVJXdxjwLDuzWW4FwMYwRwSWM5nKJ4FtezMseJ",
  "key42": "3Bfa98Vnwv7ywzNriFUnFsXmWheVj2kdd2FDCRzEfw8v8cuw6mRHuZn6txr2MHwwmhJhxP5BFQEtJEsWu338HoYn"
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

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
    "vySxyWTdj7CtVMVs5L6m1BBP3qKgT9urQHG9sy5FAuyKnwKUQ3damTKrBC5xQQcNqtLfeNGkv5JNgQgmfyYpAeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5rELvCC1zzEPxAVdapoGHtEk6ftxSB4XoNKV3uFfHwe4G83dixY8xaCbRXXb3HRZdBvnYthkkaNsvHKcKWvd8L",
  "key1": "XBHALnmKuKe3LrGcQmJqWHKgxPx9NSo1wukPERuMQ2JvWhRgXtVdxgMYoxbDECQLYam1uckxQ7zT8qQVFtQvhAN",
  "key2": "2KP1gZtjP2YyRfJ2JDEb6nyEtrBPNQEkf6qjZogHQnnacy8AuwFEFy1pmMKcUFk6iscEEGLcsx4WtBaU3sFwYSoc",
  "key3": "4awY1cB2UG4HDHFAWUVZkran8BNaTaYhBjDKuYe27UYmsP3bPx244sLjBv3FwFZuz9GRaBuU7tSwaFDUJVtjAEiN",
  "key4": "5Hs2rLsvPT2hMYvxJAWwmRin4Wp1fqpaULqNdpiG7erd6Neu7zCRerHHz5Pw6WgeeU4Mp7DrrpHSrWBEJb2dnEYc",
  "key5": "4kyWxMF4nj4nSBQvc9jULGsCCp9X28Fxmcsseo8FRNmqC4iSQptSvn67dovmHDRYjJWzMosT7V2RVxVUfrfyqFEA",
  "key6": "3fNGmerH3rZdQKFtqzCTXBegr4jECgF2LMDPpMBy19yn8VygF3Mqsem8GmpyBJAT8oVuHrd72kve7b3KiHKruPJJ",
  "key7": "jQqXYDa2EYGXHeP9srZUALmSBBAe7j1isApCENWJQ3xHAvk2Dr4kKYozy3izcgvxDmSVRWiWBckA9LLtw3Y7UKr",
  "key8": "4vSpvWbWofg9Sp8eHPg51ukVuXnzdodwRJpayNWWnxhuVqKmvdVpKfdaqsPqPrqHLnCiNBvgZ3JbsMNgGZxizCdg",
  "key9": "4tHBtdqh2fz7FXVPSjVqoMXv8cNN3oNoJ39uwVmNm9nstfDAinbCZGxR5WBfbeNCcSn7wasN717p2z3oZGQU3e1M",
  "key10": "57JH64Yt6Dz9HnknpNvagzov71dya1q6BCDEJxG2SAB97vzfj6DybMu9d3aj6PU6q6x1bCH4aNbfwruZjqqMQ4k1",
  "key11": "4rdSH7gXtemfr3RVLrAGo8nmDm84dRPYKKyNswxyvtmxcYZj7SfcHpyeSzdYkfvE6cBPrCtLKMrGUXkj17pnSrJ6",
  "key12": "4kYv5jaZxcKVGw6vR5dmCUuTYzNoopVfhgZBuf5nrtUN38wSHJyKXRDu2z6PzBeUdFTHSdsVkv3H5uT6wiYpaPbd",
  "key13": "3mGNXMRvbMnbewNYRyHm6C6AW6Xt5bqGgucZQE3NTyb41ckxZSpiasyVCL73JC3u643aScd8ao6iEPjHcYPfxJBE",
  "key14": "5Qc59dQbTbBtSmxuNvGPCUU1ZMV78q6Q7xJZqn7pJbXqDdbvo1gTRr1TbhLPr3vvhQfeGxbNAjAWM9ByUqokDfze",
  "key15": "4LXHygCSjLYKfrbR7FMdxnwNXg3PxpwRGcpWov8piL2YfgnZc1u4g8L7oiKYpxmXje3axuY33vttd59yoCqb7P9o",
  "key16": "QRqQkgfap2GxdSAaen16nfJkyiQt9QEJokduqHf5WxJDX16NsU2EdjryvH7oevUUL46YfeejwTf1BjU3QhoLPXE",
  "key17": "4xzuHuGwjoqMVU9JscdEYUpQduPuoj3vrDvwya5sWbjxUXxcKQk9WkQR5c5UsZSz646f8GDspsTWmxtjQA4otFJV",
  "key18": "2ou9XfTuAhux7Akt4gah6GtY2SmiEnRJ8rXEYgu9Siesa4ghwXp6VgVuJgj88dP64wRHvreFitsYvwaAkCFn95Lw",
  "key19": "4p9DNPedqNrKd76n4LgRrKRbqxeQhuR3WULMeQyjaSvLSekF7eqJePVRnaM4bSfgxttCRueYLdFBXPkxK2hQcETc",
  "key20": "3LCDMWhJ4poKNWfpqzN4CenW2WAz8zdtfZtLkiZwUThm2bBAwzijZWXYnkdp9ECSFpAjCDMetHufDiJwJPM3H7Wz",
  "key21": "4j3jVAFTm7qU7qJQM6hok6vLKfnMRcEbQdyJt97AffuPhWGtRSJ9Gzv1FYySwEGBsBS9sfWuoEKZFxorcA7grcDc",
  "key22": "38bj8XR99TDxua8ePvA1C6qHVHEyhR85vNWBCMRjodLrkmgnYFnvxWNtYvvgCiSJJVvLVZkaKmoffKk8V531ajmY",
  "key23": "5bG3hB25fgA5wuGimDt6B51fwyzz33qUcK8A5CZF64gTtNd4rLoQifs8KCGXWxk8tBF1trkX9j3XW4BAihg6G6Tw",
  "key24": "67YyqCAQcfNkdX16E9RLpyJxqVMBfDM9Cf1Bez19fTvN5bkmCfPJ8BgnXK3xHcUL8Bo5cQHv1jZNmLRs8hmSGVtM",
  "key25": "2gBVQg1RT47vbkcmqJDSGvnpX6md9JXAp82CuDJghPPRDHiipiKxq2YQmGbUXo98yUiY1Y8AEVgPV75nMtV34fyn",
  "key26": "4VT9M5fJSHwKsMn7t6K2bCFxQmo7uDJeFubLx7yoqwGN3D2c8TsQiLbjwj5zmWDXawAiSWZeLzuG1KGMwheoVB6i",
  "key27": "2X1SDHrNk5qnJuSWYcEAi1f6JRUccKsyyUBKbLJA79RDhvubCS8K1MGk3zk8t4bP66YuSTzHwRomsYijoopxo4sh",
  "key28": "57MWGrShtBRYeCqd6XqJwL3jZFAu6h7u2nuQrKxjSm3A1vE8F4TgZpLPTSK2rgyQ92T4szkqXX2nSmnJY4iRevQ5",
  "key29": "3TxJcvHkcKcVZ1CNwxY58e6jtMDFSFoL46cCUmPDn5qL5tPJngMjrygDdZEhQksGx5AjsmPVQD8B74RxxBijz5dM",
  "key30": "nUoV3sj14bzSFgxZ4aFqc69iEaCWskB7z9hgYmQ6XRDeQWvktbEA7BTHxxGCyeavsw3kr1UiB6BYiDhzG6fnjRB",
  "key31": "5PTrhajavGFrnZVgpAkWN4B4Y6tMsYXLQkkwBBwt6E1i6ZbTwnRojT5a2VhQ3KSA4rxprfcM2PAhey1GCQnMVQ9v",
  "key32": "4KnnN6s7QCotPukf6Ci4N5KJGNrqMg2f8hxTskf5VzgD4L6rxN38XjQdGAhW129NKn64T6uhqoYqAgXWoBLBVEBU",
  "key33": "3HgVFL6SBzjmh1exY8VYcSJMKq4bipatAwm1v9hDXCMrsEqciyxdsHnDVFB5Nf5T14MNGe3DdANm1ijpfokizvUp"
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

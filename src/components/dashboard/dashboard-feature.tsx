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
    "BjDqg6tDgvhBK45oXCLNFXVGESgZvnWMZvsQw5M2Q2eBRB3NjgNB9y1np6UmK3BmaJVP6cKRzE5ChrQrMVqrK4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57kQheHarkh5GWMRxML4rDD9VNHrGAzYocmyXjPqawpa6f3YLGTu1h8juKyjuYF3S4qMCQdWuwYbCw7hXsrHMrtW",
  "key1": "uTa1x7XtY5Q3evW9xA1j7KWZXy4qDXHxa472iZJp49wZbCFuVNV9qc2PFcFY9mGZysceLbK7wiAk6gvzC1onzDX",
  "key2": "jgDz2t1u53Ac77vntaL8YHozPEv8cJi7AyUqcfk1o5zWXgY179wxRobDoZUzqrcTx6afRsBqaes1m9ueCcEJ6tF",
  "key3": "64FVUcQ25zKCerTnBJfPbAHWiXAYu8YsZBwLdBBTQd94Ab23vkueJzCWaMjBXKmXnzQbMHD11iEsnz19ZJpQzDFy",
  "key4": "5pAN3CG356spsWCbYT6a9TQCAYNr3SCbGVRqE3Ynpwmd94NH7r9dEDDBrYnXtqui8Tz83rGB42QHFSoZkdQekLbA",
  "key5": "58KcWiMeJz4v112EVsahcsuzEw2i24UySvf4YH8jSyKoK7xXg9BR4KEJxADhzxX4WMeQHnKxSZcnMp5sEqziEcWH",
  "key6": "j3xNFsn6VLYuxwda6dSKHaM2xV5B1XisNJ9g6R11iLug8zrQiJ4qfUR4E8KrXcysiuFK7xgaiTHbr2hq4bxEer6",
  "key7": "675x77eqopPYkKcpRH57rHMWBUAGoRkfQVMKAmhDEKxDiLBf9ywSQumszLEzMBjVpLPL5hB18Fw9GVryM9KtbtjT",
  "key8": "4NDnGEE6PWLbdD1hisrS6vicKnV6bBgLLzFpn1wi4wJoScXTSV6z6NMkVEnFFPiVtDzdRHLxzDv7mw4cvjfSTwcT",
  "key9": "YRTJ8pEELAsTqXKkJxzhDSusF6c1meiY61JNhc5MzTc4fBGknvjtgXsAVh4D1DaNA8npD7k72kLpJTJ9mKBzwyR",
  "key10": "4P94apu5AdssWXkXyf4EYWgxJ3h9Yu4mcFd6pMkbfn21qn6C93KgfTECWF4BRUV4qJ15LEgietZT5yemMTgLZfGD",
  "key11": "2PVedF9czPaD1p1HyASzDUbLiwmPoBA3FLyPsLYHXTzd3qsxvus5V7nqNhnJwwUPd3mB6hEnywqPVFdJbRqM3xRY",
  "key12": "2kcTuGMo9WSKKNd4rm7a9pwXAhZvv2SsGFxZkHeJ7D4q29NqLGfFYsMbuLg3UU7AcS4bYSPjfFjuL6CLDMsLAHLJ",
  "key13": "4xaYATiZ2Xg1DEatNCuomsX9TL7wZbCN2tASSramXUx1iznp4RGfAGpcXgFHtueLUwV8Y4GpuERyFGQ6YKcne4sz",
  "key14": "55yqkMjhLrbXowTE4xFFBfQokqRNAEi8HBwyHWAYoi4QR3dksQMpTpvFr1LBinrUiHS6scaxJzDR1G6GFRe6m4e4",
  "key15": "2XkRpgBsMiu9ewXNo9nrv1MWDbHADrL4jdoCnDZ5ov11MX1PnLtY5YBbPbS1uZtY8Qkp3tJhfhnMPry72PJ17RZR",
  "key16": "36piY6C8SyJ6ysxVWfRSV2UC3GY3X75Zr6xqVEmHobw8KuUHmDbnAJbY12fditKhaCrHRmoRv7rQrAD59tSsV7xr",
  "key17": "5ifcQDX4zFgEcA6zB8bv9Gf4JzniSe6CuJKidAua2D41yKvNW9WDgKwEKvd8P9uX9hzXPovFgBURLmYkL87od4BN",
  "key18": "5QUZc38Vmj9E2PAKfxarTPSGMqwj6VsX9n9ZwWf2PEFmYFVqJUJhwisv382Voi9pvoBopWmbaZFzCG3sGbvPSuc3",
  "key19": "AyMsq27FNA8PgfEsixXdkzAsN662z12Bf9ctDj9p8kYqoC8RtrAdmQByv9cHdiexW2XwrHLymbQfLTEc4ZvVXKM",
  "key20": "4PXu2dLHYHTSTE3eA7b9HZdohJea8PkJDjV2V14jmo2y7qt1vUwExSxyRGrfUhikEC8sCFAU3bVUGxt6xCiqk64N",
  "key21": "2RrxiEuRLwe4r144CWqgkF8UZtmdCjfhSwaPjqsYkXRaYBNETB68tbfp5XjUsVRhuRHM6PKWPdMe3hTYGdnxFQ6u",
  "key22": "3k4kL13eu2TLX8wT3sfAQkDR9b7GZ6iSVzfpbprqugsmAkSnjZkACHrrEpm2sQ73hJHAEzSf34uRsHuVS6atfXFW",
  "key23": "akVQbZGmnFf6XY45MP7NPeKATdwKjKnX1XbGdPdokC7RipmT2MjsYit73iXap1DDZFAoZwcG1pwbP513Lb1eunV",
  "key24": "3wQmAgYDuNrkoXoyGTketFZJaM7zWkz9xSkFp6N18Fkc943BRZQz79SJBqN1z15vRK25eKLTJ97bAvrU8a5zegxF",
  "key25": "5cbSya487BLfJPiPMY1bbxs6Quhe71NRsGhjdmWoucLLxAVTyGL5UxS8zM6tpLiSFzwx3rtYbWrPRcqCkpfpbWSP",
  "key26": "2ezu79kk9ap9JADoM2GwxWtWsnjYb1wrtkwsKbNEo69eqauvrtWuxzvkVbGv76i28cNM7o97hAe2PnJjbtvccbGa",
  "key27": "4UtCsTFfcr59qPkm2azSrkTxVxVYFBnjDHBEuGGyeeJa4gWfjBqhaGhG3FHCiGQ7QFfhRJnYDHDShmQ2oQcFPZva",
  "key28": "4RkFtu1Tf2yFcrEAd6b8WR8qauWGKsdXneMERWgJWnVJvzHcEYjqT49Ro9MxJNyXjyAx2ECazuou8hTRYNThzqbT",
  "key29": "2HJQFdfCcmp6dAnCMEZZp8sbPSoKon4GtTJcikQiWuqeGp8iEufh4rsMFjNf4iEJ9jEx7yg9hSZxStSsyi9VRxhx",
  "key30": "2o3SnV4fCaG52F2hzTaEcfbsiAgmPTiP8AK9RMAHgE5LBjC9wtb1LukQGwX4J5fJqL9mST7FyS1pSnr2iTsoUKbh",
  "key31": "3XgQMAgrbR2dxGR12R78k8MmvexRrrCeZBWqnSkQRfRmQHeGYxQN5AEgVSCTg5LRd2wm5DFQjr1Y7gxSzuVbCNep",
  "key32": "44ZJ6NjdNkMsiHqm9m5Vd9nzUcNCyzvg7K6zQrsXdjekRfvy5uui4TacmP9iX1yuiUMwS4UFdxoApicABDiJr1T9",
  "key33": "3vdxX93QeYqoDRiyxsiQmNfZDV3K6C8DMhKnkddDjW8EyNN7ybYCx7NqGrnRf3TEW8ma8zjAZejmQHCKZibCYja",
  "key34": "5HWiNcNzx8xB4nL7JfHdcFac7EfgWGtqmUHem9zCCdiSfHU3usUFsosAoYQkYsFhFTrJgR4eLqeT3RemLAzJPRLs",
  "key35": "4Rw1KEENzvxc7QNuT8tgbLpeqYHXwCrknPaNcfLUQA8XTU7cYtWVPiqpbRLePdJZcwr9nvTAL3Pp5FC7qnKkcsiH",
  "key36": "4fDBMqWSi51dZSXXo5FbU4LWyiauVfwBNgvKgk6CnHLjZCxJPNdoGS4EkbKAG2uBVXnghnfZhGVBx3NnQGpJbqwY",
  "key37": "5Fjourusahk5L6U1MpNhzaKoPDvvHhM2YnF6hfLVeBPjELRNtf8gJM2vMPDK59X37SgBNycWPgiv3bMCoyDRQ33w"
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

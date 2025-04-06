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
    "PzApUaVNRyx5DLj9E6wTEaeauXcvRLEXR1PjdSAxxecyNzhaoUPuvrnMLeXEW1jtbWKVaPsZxw5VwQAZQDWP9LG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itMLpNi3x3hymKowj6EYzv7197ewB2tuigtZD8SpsWBm3i8NCS8X77WxpmAoXUo4SwSWz86YsFnFKvSut3Uadoa",
  "key1": "2GLxVmWN97ob3RsS7RjcjXRA3iNpGVBKubtkh8bL33i6xhDpGUzbyPPCJHAMbSBBd9ZsjYanxQMcJByrhqcPF2WL",
  "key2": "34ne6ft4DF7Uu3ZYav9i5aiDFt8ics7tPXtiDuuAGPHZV5cyuwbVwuxHEMWQPKdhXa8QAqm9p5a7ZXq2bi5tTKMN",
  "key3": "5B2nmBQN2VqrKmJ9vBw2ZUYziWCDbCHJuneVsAoH3C7FgEWWZybbjWyh3gAPceZ46PEPaq1qnXY6rJ3x67215hg7",
  "key4": "585Mc2a8LWqiqkcdpMiJHDVcDebjU1SftqPibAy8Hd3XSE9ipAJ8Rg6NCDCikDSRN5SBnFkQB9VLkM1RVEBVLnkF",
  "key5": "4MJxMzRRw5uNdn6cXwbWnLcRwZro69fyKUF9jMWpVF7w2zFtUAZFSQ6wUyfaHHAF8CduxGGGmKjRY7HaTYaSmmdA",
  "key6": "JVuxbFz9EXs63dgG8cAyUbFxjSoFBsnqT81jUVCcZVDX6kZ2BP7vXD2VH33wgfjiT1wuJoEnFzA1J9HYpbGzmf6",
  "key7": "hnKczkUvjj3ETtBpixHDKtUW6XZYzGMDWXFyJFaSu81QHCDZetVzS8zaZegdpkQjwoF1444vjyxpsZW3hFTVPyn",
  "key8": "4yb1QeGZ2VCFi7PRvzfTYBZh5LEYN6VStjytbh2rzsM726DvPKhEXbtHf46byQB4KQx47Sy5UJW5FJoph5Z95bXZ",
  "key9": "3Pqgyr2RLJzgcqngZXybwzJUbtge9VcU52CMcqd7Ai49sWHG3fGwjPcsMhufKKtXDTEKyD9gFRbtH4gYerwzqcFa",
  "key10": "2SFuQcPVuLxsrEqiSdC21c1Q1rbVXe3gU26Sfgevy2GARK7MZxY9BF77oZC9U3Rrm522NvXf6yxdDYyhiimpBVM1",
  "key11": "4boxtjSWxM7s8eddTH5t7K4987vZkQ2DwdWrqkdFYYfsKMmVwbHPd9R5ELjBqEcsWFETtS1rbYVe8Ge9tWMRxjzc",
  "key12": "FcgUVCEzUEndDm6XSjgqgn3qgwqZe7FXCjXKY8ewdmbyTosBC911wv4LGuGNNiEvNr6F6hyDEPiKniGd4QUcS9b",
  "key13": "u1193Xzu69chVSZFKvJcEK94E28UGNd15NTQuscGmxUt5n8YLdTqQbhzHqkc2GEmMJ9S1TzuiSn7ykuRRCjf4fT",
  "key14": "3eAh7mdEqwqhjBsUtwvXWjCZPnqNXL1FXE1bEAwUfJmy346PyHH81u5jMzw6d4eENsa9rtJ3yJbUnLCCah4Ftyme",
  "key15": "5ga54MhpRDrPzMDwdEDkKEmcQYThGN3Keyoy4ArTcLiSkUFSSF3LvMnY1wz4b9w95RhKsCPU5WRg3MWzWq6nM2NM",
  "key16": "3HtzRgyYKeafw4gfsg7G1iD3hjnGjsL6G6PQ4kmm6QJLm7W6G4sRjTMz9XFu4XTfc1StjYMPq8wJWqKSdjxtFMPZ",
  "key17": "5xzbtTNpr8gaKrmdGzT4LPZKNboP6jRvxmxeNPzvBsRR8x3gPuyXBQVeiNift3jRrG9LSwoGb2z3teXU7BXjiHny",
  "key18": "2zMNG6joeo4SWM6zr6tZBeQfsxwyuaANq4qKkCyp53dL1E2zdL7o3VeAGRWxgTHaeHBhNd8xWa21PVq4Rc2kGdye",
  "key19": "3me4Skbn53a1hpJmSiSF6irdAkyZMDJz2cyPj85TofRj3Lp3Vk2LYWxrGKpesQg3uW9E6untKWeexyJDvzpJHCYB",
  "key20": "oBSphw5QBUDaEGEpBEhimMtyXDimagVV8Y2DbSf4M6mocoU9ihud6rpJ9v6y7xBjNu5K2bYcrfmk5CVgmg1pF9n",
  "key21": "43RtEqKC2QAmLEoeEkSFCDwXaa5UcvRZkoNTnJzoxY9HR4QXkUq8d1W12zi16n3ERMPR6JruPYJ34MzqePD5pnrU",
  "key22": "iMGuKE6VNTWD4HxHnpo19P6rc4bjc3thM2Hs6hsfux7oUEnpTHUm4mGhW6bJBxcYEfwfjtWoJxSSGKEJ9RfLt3h",
  "key23": "219vbswfEbninhjNpWv5uGFCvcJzWYDK8bhzef2NPttUuWQvycRQQu4LqFpq8smwtDdUjJBGi3pt8GDaBBRZP9gd",
  "key24": "3rzDCdMbkHtYo5YBYnKQkJidKcZxvANE4Qkp1hYNpFaYKi2fKTzTaavLsMUMREdy9ttGviNhaAoUF8LAyRsdtSSc",
  "key25": "3FugRqpFbJpkcnokXuKFfuRp4qUP335v38XbuRz7GHG4NCarxfkCEWnC9JKR4EEwFU6oVX5fCHC53fZTgy18TNNs",
  "key26": "WPsfPpGWzQh8kaW99HNjBpYsdATVRY44XQfstrZJZ6eBjGXdTf847CRti4FuHnWvo6fKSAC2B1XMFkS691T2s13",
  "key27": "23udJnqTcEHURAMqkhHM1uVGLERHGzKw6bxhgnZpMk1e9kE9rojaVUEMfg61RabdjpbCkvNiJ7kxDgXCTg6mSgXf",
  "key28": "4rBKosJz4vKHdSmXwdvtF4e37mPibWL3Q1R7HGbqn4v7F5gHd7EjCeX73CZMssyoSsTp11iyAkjC39HkdRk5vvqS",
  "key29": "54fn4CftrdbKiPuqeBKgwU6dBdmqvhy6uwM9XymmN8pW1KqMRjnTqEEsp65QTta8zvaoAAsjG4ik7ZyEHcAngx4r",
  "key30": "4SDMCmxRwxXbHaCHrdymxE5SfVgEXVPJG2tMMjevkGEdwyZ7zmdXZTkT8e1UKNoBJMpFe6XLPqmdrMFxgqoyomCj",
  "key31": "kPowjXVun1B1GrJ9HvTnVpmDxXbVxReMHFo1xkmrLv25pkw9dB4Trp523wL6kuB89sQ4wPpzRAeVP1jSdAuVsxc",
  "key32": "2LTx7tNpXJg89a5F95DbXTgYeEwGbPopHMiBo64P5JP485D83LPsWrefqz5ACekMjAqXRNu2cSYciTuGWcwuCGCB",
  "key33": "5bpnkyzW6pUrTvN7m1oocMY7X5ypby3qttd5k6rkJ1mHbZZLvDG3VpBNpCXacuLA54UL1yNJa4yrEbxTSrFy1Bkg",
  "key34": "66K5p9Zoiw6NxCQPDpig4D9KMKXiNUeFVwTgoEPJ6aLATSPDR17DvqPcvjFv4rqo2rksZAZHSQXWUpEU8MLC3pvT",
  "key35": "4dFrdoYtmNszVvdECpVviaXGe4Fo1a4ZyUU6L9rJWeiSptTehR6YoNKdMmgWKMrt1bdyGUcVb1NPvpzHwB8d14kX",
  "key36": "4ji1zn4ToVgJ4sRBbsVFD3sbtXqAq3gbDFXiDUjqxsDrhYpj51QCubWd8DGNT6LVzDsY5oTrvpbvGzbFzL7HZVer",
  "key37": "2vqJ31aV5Z9Jt8swr9qg8HF4iAbFV1XpTb3aKwZhCdtKSAHeWzZe9tMSZtPMjW3vZDVpGax1VHKLryWqv8MfPyRS",
  "key38": "ZaYscdap6ZFu2KXB4jAHwxYftArm25RpW9TgexiyGWPTFi3hcRLjFEJjjiFoQ9LU2h7NohkAstdyhF48X3WK1Qd",
  "key39": "4FoePv5atGfvjm5BGUGg757qUZu2GwL7uGiSCjHWeR3m6Cxti1udKMfHn65QYfTGEgSTFpn6VWzmAH6K1T6ALLzr",
  "key40": "3QuC8yxbzSQr7robnn5AxgwHJXhkyXbYKHGxyPkLhXQJErLA4MterYm8nzEeQtXnxsFw81esRdQKWLkPp3XzDMa9",
  "key41": "3pVmZbdRoMACNiARHY7bev2rE4YAgY7Q9Boooj23XWZXZit1BDSnMppR7ADMeR6gYDWCStWfaiVFKn1dSGVvfxVV",
  "key42": "vL37A91hja4hyV4LvevVX4foyNzYWmLz11UvKBuFrKWpr9PbNyDeSM8NVFaXGfiFX3Cpg4wniArtjRW3VHo1xjj",
  "key43": "3DGZEveTKgbUACcVSNMzczABRzKcsCFdHKQQ8kVZsHYHJowExwnTn4ecVQtzPyvDcvUtsPeEXF9AYTuxzvnZ8FMk",
  "key44": "5nVMTirx4K3SJELRgdHC1YRUJj6XYLC4zpeyiccnA6NLzFiqF7FSzKV9TFiXb5WG375yyWegjfMCvPHQ4NARgc1w",
  "key45": "4kUnztwWkHzs2DCghPpvquTB4ecFPj7GXgdpWED27oWxiRq49eT4EZbWhtwdUpCPsXDjESfLPRnf8hWoDwYqiUA1",
  "key46": "4U8vnf7DMnf6VTWZ2iwPfGXhpXtPTRUyLJe5qzXrBYajkQKGoydmHkbP2qKNYFVYQ7NoRbMNY9pvaSQshkPrhMqg"
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

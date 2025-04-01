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
    "4eAd43gcNsTgXnbGuwia7sFcGD3F3A7J7G1nZ4QPyRvkFXu4G67h7FcQES2j66P8VvisUCboknbes7ekZj17uScd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACz6gcUKcSK3dR9yWX1hdqtqiiUV1A53fqdr9Xh3dPE7N4NdWDRbiD3Ampvs8iStYZtGKzMfzV91qFrEsNJfUSt",
  "key1": "4MLw19v9yv2559mdkxcdk8TZZL1sYWwKLuC1Fk2e5uyQfBu1sqoW6ceJXuY8m3Y7wHNJVBSBG2AgKcE3GxNFqdiz",
  "key2": "4Qxb5R77PpvGvz9ZKmBTcJAFVakrzJRKyD6k3YgjkRz2MjekJ6GQhqePbmzgBXKT6sddRPszjJkTuGx9fR7Zh2Fg",
  "key3": "4y91sBcvv85sE6S41e4KQR62aHVMdhczqYQ4tehRzveXWviLAocXnMQxStvzQdyXUJURsYtbdrM53P3Dtcj61KmV",
  "key4": "21a16ZQw7tqDRZpDyfHKVp7DcqNzBG85aXFbQcjL3LpF7J9cksek6XMf3rBvkVFYhCywLZkKhvaZsVdLuVFpCW89",
  "key5": "3AM5CkhgtoNUzAfuWPACWcpu2HZgtDE3kPDxnsmP4FP1vpzQHU2vUbL7gwcFvanYpwvtcxp1Q1qaynUHfcDQuCKZ",
  "key6": "5eJzpUv8PqE6F3hbK6S9syB252ZHxJq5MNL9xPSPJYsuUBJWEubavxvn7ZP2W8hWfy3qXCWhmJDSsX61GjiaStZe",
  "key7": "2K4UUu1N3PLYaBenQfnCP2ukfwuJNM9S8cc3Ls1t1GGayUHLLyLjZdkv46bp3xfEwPrZddGUKR3FNTjJ2ELGB7Ux",
  "key8": "62tEpijr8pBQx53LKL3R4zGuaASpG1ZZ8PEyy5TFG6uhyjSot8KXmLzjTqrGyp9qcyLT1WQy6cyNoDVSQk1fsGdR",
  "key9": "2ycHrANwgJL5KU2KpZPsdFoe2sJEsXNCCiqNxd1MkiyVuvZcpZFsw1ZLpVCwDQ5EvcbNP3JfUBgg6NWvd8yMgBiy",
  "key10": "uubcwXz6QuFUKSrwZGNDpSfvHrFytH6XdkaPp91Ez6MdoDCcJ18agTTTXCziXyTcuXrY6H1ZoATAe9UwHbnpTUa",
  "key11": "5c9ViTV8x8WHKVUtAwbe35nG8W5aFhjjDorzu6B5jisSpdg8Aj8TVeL1vMNL3G1JKBWTSUByBLFaviKeoAsxX2Qh",
  "key12": "23dWdN2LKgB18HAzNc9GayAuuJTJKZL6vqynCa9pDUS4WhiLnBp1TDzJV7DSUFCbqUJgswjxk2EdcAC6KAz9vTNZ",
  "key13": "5RESjE368vqz8rSJWnhQyN28BATmtPcpJdvJqi81MZPF9XMUpoC9N16ZszR8ckNDutzfcAjpvKGZmAbAMk7zGun8",
  "key14": "3i6RyeNWgXYzwJFG4XjGcb2xqbUYzEAjttzZXYZ5nTbK9cucsZVXRTvwY6t9yLNcv1G3X3LfzjgRZAFzT9iDhkps",
  "key15": "5825weQGE8SwJdPrgdcXGSK4Cha3kUuHTScDxugrnyXsVxEZcbukq88Kf5sHPz8qYHQj36W7SuhyimeFV8ZQy3MT",
  "key16": "2biDKoBjCLvo1HwxL3ax6ViGaqo6x4zu3TLqHG7auYeSEz9CKvBrqCtcYthnwqpSqh4RXdfBAk568cdrQx1W2ZN1",
  "key17": "2XcHuNy8mCGN5axBmr3uFYXF3ejWdAuE6HCpY9xfa3HNWsRRpcCJTKu6PgAqd8GsDqwLhQFrEwKAg2hDario1Jo6",
  "key18": "2TfxvmzmMaEqvdikPjyYx5thTTxhnxMEXhnaWqThvxNZjDbJCrX9wakutY7Mviq4KqXQ42Az3YbtbJpY4tb1j1pK",
  "key19": "4puYwr1LQ1CdCXJ1R9nSAfdQsHn48d5S3BxoLxdRhdCSAJuLERfRtdVnmtJjZegYYypuhcbQLMGW17a8PoHCJqck",
  "key20": "3Myg1FXAdRxMwsCdrMqnCo77rD4YvqdxiufbJUnWY2s1CEUDzDLJe69s5hZ5NLcMch9ndQ6ZAr91evWq7rUsLCuT",
  "key21": "52ZwKT6GgmZAcqoFL3QLSfto82FTf7XoLXdfk9gAUmPsNJSMnT3LiL4f9fTwVkQFbuqpqYBw9Zejf8W8sMWUGN7E",
  "key22": "22pofyZ3psGkPYXy2EGhGn1Qqs6y1Vstu5REQViwvGafFbNK5RF1pSR4X73nX8tKZ9SrMBzG88UZ9r9d9pi1krtg",
  "key23": "55NPfUDp2gYj6nnSueaAMT5vuaHmUnhztnRmomEwZMp9YgXrxzp9sAY6rKxmda7143pChV1WjeUMEsYaAEZzvdx1",
  "key24": "Die3bjjcwAW34mtdGEtvEdbmJcBt1qDhuvfLeg7CwBuqYQVMPvnaMrU53vTFNP9NnMYXNLxKtriCMU8ZjzN8qjf",
  "key25": "5KugofamqG46NrgcN9tYatHkzueTSrvv94gH6jUbS2kPbDejME3yxrnRhUGcbvLuKYYddoi5jgurdJZphqPNpg2z",
  "key26": "4rAmPNEdAdzjfo7AxdMnZdoRbMpx5nnxzXB52WsgCSYFcCY1ciZ7kULBxmLg7eDxj9BdincuFnCJVVVHk8L9hx7q",
  "key27": "5SW9p548Z5eBD7DHjKzFNk4TMDQ993gohfMrgHn6s9c9hoBCfgvdftxTWpBGUvfU8kqnAjMGEpZAMTzQ7Kkmo2x7",
  "key28": "5THHoUo57ndUfAXRemxfwuguZ3mcSttf3PPas2M4orHgm3VpA3GM2SAXVmY1qdHRnm1Ne7RnTsidv1Ado3eaVLvR",
  "key29": "yBsbN3ev1zLBbR2DuQwKcMGwM5dfByPbJfZ4NdYEwkXMm7MDe8MrEBcjPm5fM7KnJ8httJPHW8PKUNSFWeMWHtD",
  "key30": "25WEgepTSxMUfs6XUhyBVeJ9883QcXBuK3tVRZxaDVViZCBugkmDKGmPXSh3RHQkuGujHP3GHNBWtYWERKnHxawo",
  "key31": "4vTYGtCF2wrc3D5FgCLbPDJKfzkR8B8vrkket3Ny9PGsrnBNZYjBpHfUZjApkaXvAWrWTJAivYyNtAxAKGja17eX",
  "key32": "9Rt2NpFRhSQLbEgaPtG2xYz5RijVWLqKEi95dWu6rs5HGzgqFj6ZUWMz2LNCptZiqzCyqQbcQdyJKtRe6PpeXbn",
  "key33": "2z7K3zPsmwWS74ZW6yo85DRKBtSAPgNX1sCcnnwUegdxyUJ4K9LZHWgStQ8Mr5YdgtGGi9yndoDPDX2EFowLncXX",
  "key34": "4aQAqVBnh3S3s4UpDKftxvNJBypNGAW8wyv4Y1wXZUri5iZcrzktZaXAu26fDw2QTcdFSLn8v7j5xSmhSTd7yyfQ",
  "key35": "4dEzgijwpbZuwBCEuXmwbx1RjYNo3LrYjH5cqA4gPKzAqeVNKmxMtmr4JRRhfPeZAi8soQPe4Y8Sor174oPUt3RB",
  "key36": "3eWu5xHNc7FByUWiHTNdAdkKQ6SYgAEQKgGV2UUz5AjrRuXxrUbqt9dD1U8oRcqu2CCHWYVjJoxkpPoBXnNuWU5G",
  "key37": "27TT97L1AkJYjJTryo2Vp285RSQeA9TyZTtYWdBNza1XEe4JPdmD4ig6RC5sSrNpZtFSfjrSkHmZQq22uZdvqV3A",
  "key38": "3wvAC7gV21ABkkjbhZYczGdqyFSxzmVSR21jZcexRmCQmRfi5RCarPGbMZkv8qes4nSLYDxTvryZAJ8EFEP4TjJE",
  "key39": "5HVjz8WwkGEGmVZh6E4Syni2TXtraiPNFZZkfP9LXE7b68rWoqwjTjuKPG1EYTFx9TK3tUGZAziTri8zXmfJxbsm"
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

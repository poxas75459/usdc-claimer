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
    "3AFQ6WkR5ayx5wbbqjnFBpnwzjSCrLNt2JQddqZNDQqg5VkrUW7C4VfY9PwHa5anw8BrP16Vf8xbZqNGyg5J2eoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297zb5bbZLXWBF2JcW2hjvkqYLzHeRjCLxZDFvV1vKxBp3boWQN3K7ui2wac2KreA9juKSxASiD22nDsnqpYUuCF",
  "key1": "5u8ZBTLVx6t3aZAhgAmoiRLuC8xZzYWBPfYeXRgnzkH1GSZ7Pa5bzsAkrmEhmo6UFopF3ivWzCRbEKHaiQpBm4Uh",
  "key2": "416ZBoZmprUyhotiags3TPF3wWTdWFTd1cUAXpRtqxU3UWStksPgQRj2jWaW4oCm72KzMLbjGH5chxMHyWvUzYNB",
  "key3": "2wMehCZGX1ZoYeDDwnmxEAke69izRHdsGpooqBSFheeXxKszZ3xkiEb3aXC4V1F8WHbcNXNkPKgfHiseriSEHTNY",
  "key4": "36ENXJJLzpsAbHJajRKwhfi7XvyAKd1136nBUMvtsyz2dtKmzrc5WCXxodBJ66ZxAWsp8iEa7nv65TcuhLM61PJB",
  "key5": "3EJPYzW9UYJBiFSSsziLbH8z54exq9NqKvYHcMjFyMo5uSdbUSb4hJuDBNKLCo7JRXiV3TbJLudFxsomAhcAeSsy",
  "key6": "5gEJFZbJ95V5EjvjupYSWNYtmwg8w6wG3TcnDJKbVmB7LTXQVea1StK8T8VbEb8hYNd9yqNo8Mdx4yVufHTTaJWn",
  "key7": "vHd35zG1w69EvrsYXr6q3PcwDEqRvRgBWMJmf8NehcVYy21VSHosHzJVXSrJERrCwdMntEuKv5ZJjgPPCdGChvr",
  "key8": "TQKBMVkF4o5Ba4gn7PemHJ2FU6rSdSZCmzh83oTVaKRKTJhMugt47GgWCZihxgcY69k9UjsFCgyyFr6LkaVLjt4",
  "key9": "27HUkfTcyaWzwX9Lc5xfp2nNZLGvgxbEWi53jJeRiA2QVGJ6uqq4ZNuSAvhhpajzmcnrKapX8KSJQKWhrPy9eXhh",
  "key10": "5wHiPX9jgJCs6iidDwrvxpuz3zDxPTMfiZy7Qkpt4GpUAtozQNAaYo5don53CB9pCssbwm7fL8T8gapgxDwvkyj4",
  "key11": "yFNEHqNSBaFrQbQDhYEQLowRg7GhMNejeArF3mBnZwnZzyFtTCKyJbowc544mPhy8kXXeFmV7Ts85pssri7xdSv",
  "key12": "5Lc3BCdAdL3zJBgAwM7PRbuJBXAEk3Je5L2n8zHWBkNipjNJC2nEZkLcEY7Ypwdbk4WGYrMM9yUXgP4WzKNQNXxf",
  "key13": "zGSycTXK6jw539CrJsFeH5TMxoHbekGwWknBWVdDzWtExTqkDCFmiQ9MVvDnNdkHGuARufGmozuCxFGqoLwcwn4",
  "key14": "3aFtgaNMxg4yhJGKd5RXUFLBYWzHCssaxiLAeBJzAuMWyU3zhqfFpYuq53iBqyPJ3kYmAw2S55fUo8vzUSTjFZXW",
  "key15": "4P1FmsZ7GpJd39HQghzR2w83NNDoRUy18dr4V8BVgheirBVrYfwaE9kkgvcxXPJPrnKMiYD4p6qFrRxUKjCLwiLo",
  "key16": "5JG5KT3S8gg1SkvEKacBUHXDTxoSJdWbVMny4L7H17b1j7bkVdVpS7pVjEeF8PdYB838479GefLsUbsoRexFJqHy",
  "key17": "4k8pKMAo9kUd4gQ7SnfbsLMgnSAWB12aWtsvFjSYsT63uypyjtwVVeoP8ptEU95YkNJQ64LjwyiPArDohCF4M27f",
  "key18": "3w1GLDKQzjAG7DJ8LebnCqW1fzaFVT6GDQfB7KuC51oZdfUNvGUowQAHYfio9mvAaj8XVg7SuE2XEoNzuUTcgmen",
  "key19": "G6HXfB7XnVERWSMoLvajh4vLN4ZoCXo52UpvAYB3cNyRkJfXWMyZtj8z5dgVCG8UV8rVqNryLFSetMkLEtMXcaK",
  "key20": "2rN11ovrw8HCCgEhuZ9gf5CUJ2LftGcW5KaM8xSGF7hEgzg17oFzGmWmq8E8KTw26EFMmsD3QJWnEvForw6BXdtc",
  "key21": "58G2VSbRYYoj6sDc4SnbuSZga36Sz2Mcw4Ka8eThanFsUE1VzRoTKxzHVQeptASpwtJ7qixifzjZQCynsCdTch8b",
  "key22": "2pzQDiEN4GLcLnCZ4RjEPrFvJV2P5Wr6YVdm2rcVYZh9Nq2utuGBhULaxMXHV78mML4Nk9wo1cy1vPUka4yTM6Hm",
  "key23": "2f354oPgub9uzK3BUYHEZMtjgBL1ZeGuQ8AuHFgAQf4HF39e9XE31n2agYDRtfWj8xWaMR8yZA9bF2fnAsUbnKKG",
  "key24": "41jFyC5ABG8pu8ig7m4XchKHJW8jot8LBnMgZVtS96DTKmNzQN3oys3snFp9KZFy62tjVyTsrRYEPfv5pzEKmFiC",
  "key25": "44f6nkds6NDDr6W6uJwFpTQxDqiq3hiSSBPXmGhn43TBhWjMsLpaehshCu1yUXZB92zzcZ8P6jw8VLELRJefnxrX",
  "key26": "2MKJckgxCBYxskpA7R9WUYAyS4HhAqmc6EJF7BtsjbP7yHDLoaTEZqaWTHDrh639tb8w946eQybqeFWp2SVqx774",
  "key27": "492QFBZ3ExNALhAY1V76qrGKc8WNKYMg4Ehuxd2vEDpLdD1etnzy5fCdHhdLR7PakN29CWZDcP1KbJYeS2GYnVYW",
  "key28": "2V2PEmrYiKsMcpeDbo6t3TzG9e3M4wA9QYHdke74CqySamHoEeHhYtgfJKZMpD8BFHyzuc1iPWiXK1v8gi6DLyHJ",
  "key29": "5jmyno7WBhmPNp1GUPmxiUgxNS46P4hWDUw9ZpTHjrVtzdZ5iJ1trHc2mjviCoGk3Q4SwnnMUErCkvvox1b19Q5i",
  "key30": "3Z6Ck23yTFKCzFxxmUnebXT4nTLamY3CakFbYcNkgVKFWGJXhXGn7juqC55M6eMrFPb5xQTDckdGEpdBeKqK6Zbq",
  "key31": "3f8cXe72WaUrnSjvHFoNsQ4f9URc5R8ouZcqFBdE4Yd6GtqqJ1t7SKSnPzFzFAmdbaQMcu9dAS5rZkfd4J21dqrk",
  "key32": "4ZHabpzKLThB4kD6woxdrt88QQZwLdcq1fZYK1hBvUouiHA1fLjyC3SusWqoTGYzf6xB7AXR9JSiuEV5CL7z7DTX",
  "key33": "3eDzzAhrfbW2qo2CWsdhAcZYABZixjFjZCVTRawxyNgsrRj6E5e8yEbFCfbYLPAJsV8kfLWHgG6537YMPJcwxCG4",
  "key34": "2cVJUR8ymBVHibRBwMLihJE4w2cBmtS3VZLsbmtgp4rKTYA75JRth2PJDsUUgZNxNsbDA2rAC43yEMjsyjDNsCUU",
  "key35": "2iSHmhApxUA6eQh83Mw6G2kJoi6oLSqwNXrqWtX2NfCVbrJTWkb3DddgvKBCFKntdLyKEDcP2KdUSQuC2M4WifSQ",
  "key36": "3H2HaJ3UTJ4ZXA3ZactxWZ6aMex45eriMP1gD7tLYXkHCrYemKPsmEKXhrz2sYVtUnpSLm8YdWRaWjJJugU7jSHg",
  "key37": "g5iZn7Gp3UELW2JnsgUaGCDHVY9hCPj1WEEpM7KHbmsFMVAhyvdhSkvLwKbyQxikLUPsmTnUW8HyRiQshZB4VGq",
  "key38": "Di9gdnguGMRHYGPXSZ7mJa3Xno9aHBr3UY1wthjbcyP7WVo5yQMLeFnSTu8zbf3A5RRWEcvHSxfTx4bb4nt4YCe",
  "key39": "5zDpbaUakatMvUjGtBbnQjthWye4VEurogg55562GxJesxjLgikT1cv93YXpq6dNponFty7MVCgKTNkw1fdV3ywx",
  "key40": "344vX3RHK2jczyAY82BLyzBVQ654EGFeH9aJugspfphxdHfVwfWPeTUGW2ocGa9ZehDbshyiMjQGYkhYpvJnsSnd",
  "key41": "3cWDs4iTt4E8FSRNDCmiaGC7uVXiFpipr3TxAHcKFivPnArYY3MGLQuexbN9Mp2mZjriVGbmpoFFQHLbjbKCAHT5"
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

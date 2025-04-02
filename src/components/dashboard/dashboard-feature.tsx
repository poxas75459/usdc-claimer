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
    "SXc3pGE5StYQk3pK2tmdgfYGNeP1XSSUDR4fD17ANd7fBWrJz4SW62GpEsgjYTJCdnnX6wLtVvLbY77zmnpPCYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zyidjw7SrsqqVhpEWcuZdATGyYwfjJa5jfaUU88AEqTxbSxj29qvT7TUHG7noAJEAioVzfTXJxkF9T9boU9iijP",
  "key1": "4SL14RV8HPgDiY9KMeitReXp4DqFA7JGEEfuL6Tg4G179PyfJQUXwZsZ8Z3yMDYKxB7Q3LtzTnv8NVcpugWX7ZZY",
  "key2": "4mRySNacgsQazbEGiUjQEaU1YCtxPNaVAPpoSYpJu8Pvur2JoKiEDq54fiZ8aTsdfo4aQbNQaQtvFTCpYkvVLBVu",
  "key3": "yMyDBEKzgpgXTYmVx3RDzpj3R13WcYaq8trWC9y56bQUgNAgJy1gckiYQXvcKSjEC62rq7RGG7mAq51SX2VJmC3",
  "key4": "64SezyNj6GXaV6wEZxkKKAmZUvo9fmDZ7Fgqy8n25hJXp5s6UXqD9jEgHnhb3JMe9VKVKBf9pFE8zvscAERsdhMF",
  "key5": "57ZpRcRummyb5zDm8Rxo5yuUBp9QJj3wckRiEs1h3YwxC5uxQHRjVWkQ4iJ1VD9ztgp7CZMckXWKMErYuhEkSa6o",
  "key6": "4n98VFgAE4DZTFkxVUKkxVVmjxqegnJbAEghZ7Hw12Uq2EEAxciirVRQwsZVrjtLKaD4U73CSHEqfNe4YFoP2Hvn",
  "key7": "2D7XaxqCzPfY5mucUa34eypjab4W48X6rXT2pkhQE34S6o16L5h3vQrp5DZ1hAiUFwSCR8wdXiNoZh5xYJ8aWg8D",
  "key8": "p17pgx51ADVArWP4TVh2uzC9LsqHma8bBhTeTgQCYU5zpXPaLVtMvVvsoyP4oARNbHFDd95P93PuCvae7mATyAt",
  "key9": "5H5NWkzpUp4VBWqVeUuWKVRFBjw4V313f3eCszfh47R2BJQHCXWcixJftPyoXiYWfLCoBSZNf59hc6Uzp2oRVUiQ",
  "key10": "5XWxFd9yD6qLTryRegZ9j1mRWX7Kxo45Jk7udWwQoj5Ks6nZncDrU4sWeKADK1PHcTnqWaJqgPP8K3bJ5zBCusQX",
  "key11": "4yPRQyWYfQjZC2mj2rQhueHBTZpdamqJZGVfQc48AnjETEuSmKRvgR3TfUiJ8mgPr6XvDFM1fNp1AXPbKsURz9Vo",
  "key12": "5tvx55dHjTWNW4ZVdzRWaoSVyT4bh6d6sTg9YMvsn267ejJdUXnaLVHR7eyY9Zz3EK3CsSjKtGea3m7AEBuvwX8n",
  "key13": "2ANJJMcK58WzRmX6mn5MYmE1S8H1rSvu3Dph36MEtc4JJRSn6wEXb6u5chY3GjUCFvpkE7dArAYoB3aZcziTEePE",
  "key14": "3abUpmSbGQHAaAGAWa2wwCBjSZgc2mYdz8u4ouNBT3LqNiCnuXfkcj3foXrFUZvU1JVrPqMkaiCof7kYhcpjK4oW",
  "key15": "P8EWPdVhhoHKfCir92wxrnTKy2ycaxuphubA5uv9Mi1iN8bYPochFm3hLSkDARrGQBpwXRkDn885aXJnBJhYrnm",
  "key16": "5wUaciTeSPqpYBNYFVhuudW34tUpvnFbki4DnJqozomomeBMoiXViUQjJpcDj4wXNxLiY9MdDRR3F87pHrAyj3wS",
  "key17": "22mVhZ4gBe3rq4ceKpwSDc8PiHyeVU2qfSSGvk6haC4Zv6kJXNFKQXLq4LnLdpD542wDA3W4dpSRPRDDE7Q56VNC",
  "key18": "rte2LpXe6L1NgfJrQBAHBizBnatJBh1g31n8PzDSpRUprEXa95n8MRWdVUmgs2xmiaPXzGp2dvxRvWcJunupbqu",
  "key19": "5rZLHQaPLkFbR1Nuy5BHn1SKWXNeDSQkuxHUdWaWZEZNqWVZFBajbzNzVRf3ZRkwxmVfRGfVzNpNvxPiXaDs5ZcA",
  "key20": "2MFNRJUWtksKNdxc5F7anETF4ppTMecwSrJXAKHFSLJtTRypqKF8adAHMMGGUmC44yrMyDyZq6Kh5QWgabR8Khux",
  "key21": "RxX3fvZXbKpNiATq7gpwPJCpk6khwGyYakfWpi4Qiw9Mdx45BZ7ouPvjzHaxTikdrwMCKoMoNyS5UmZcaC6bD8U",
  "key22": "54DjxbFMDWmBCnpXnRZ9KoWmRjSBj6Ym4TXyA7V2qpUUPT1b2YsWkgzybPLaYFHnLeNz3ZxuzoxXjNtB7nq23MTa",
  "key23": "4WDr7C8NU34NCXb6BywfabWVANH6VKYsCoT5vgwUJVHD2KtsahwerbaTqx6ryE32WSgWdfxda3zVZTvzcdv3DKuS",
  "key24": "4J9p6RDN1au4vTwds1NEvvfKP4Ay3Ep1Niw2getiAR2XkxJeDq3m5jYCb1aeXdfnDjAN19pUWzn9wNgmomZDFzpL",
  "key25": "3sUfmYLP4TPaVVWjSGCJRLAbZpgdBCe2VCnNKrwL11ZFsKSWoHUuznLLBqTxrvjTWB13Gof5qurRNTL2xHHTFQbZ",
  "key26": "7VUfPreFXxdFvFj9K9Jd9CujWGujAxjmD5FDjyofdnNLkzBV71qZcH1VNRHE2yDD53YsCgJimdbCwzTCaDrpmcT",
  "key27": "2rLos3h5WZaEUGX4W27RKUr9eyACrwfmnbSsYETHT57zQcmARETPUeDNFQ1yA6FtXXh88u56DPjBB8CnsprjpBLv",
  "key28": "2nZCH8HMs7MuxknFCV9wZxSWyComECCjQYoRakzQdhD1PezS6dJJfQBkePo71N6NMaRuCbSS2rofeFGPAs8QUi4X",
  "key29": "5MgVwCZeaz1vYGCvoPTFHdewk1LtYoiiAmBQvZEaEE5j4Sofj1q5ekcWzk4qfp9qPGd1DB7R5Ep59ndmzmgc9fUJ",
  "key30": "3doWLEvcFj9QnR1wFMpTnSNkn7kqNHEcZEs9o1vAjG6Nm4fa3ZexfhxKahTrbyNDRmynvkE7oz7EsDaMnqJgoTV5",
  "key31": "3A9mXQ93zRwzMPVMSihKg34H9gViDh8hXMdW2733HeajDkqKPzgd7J9WMFyKteFoFjACoFBoRpdK5jAmnwwm4PPC",
  "key32": "52FxbwK2NrJ6EjSMp7ZUNFV4wKGVEmM6GQnnaGdCdqNMHQgUvBSTgmXGLesXWjqa2p1Ht8YnF2d5gG5K5Uz3bm5v",
  "key33": "2NYGVMMGVX65qjgamgMfrt3BijfYaXKm6jNTK2vYtxz4wtFXKEm6shSVZUgXBCucVKbsygvSbrBpA9atLLdT8BHV",
  "key34": "4mN8sFdeqaaxQNf7ZQiNKGz8icBSrDNJpR2wKWGZavM181xjztpgwVRVUJ8b9fcdgcwSh3ddzCgxckSSW8CTvZtY",
  "key35": "4VCRqAhS62G493KzQ34g8sySfzbsitbjxah13W2uH4HTSJQWDLv7CwGEMebd449zHfwKQPCGgWi6Yd2Ltx13ekW3",
  "key36": "3gKTXm3S1Y2Ccrd282Pbhuoj6cfXhBZ56Vfoxv8tj5xq4VRGrBxPPYPPrMHkHSkamGcCDAAXJ7LHSKk8oQNf7THA"
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

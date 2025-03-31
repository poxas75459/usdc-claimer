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
    "4dvSBCj4uYZ7PiBANN6rU83WwAEkQzRCkhVAU1y6A1a2UhmUHXHc8Lxp42PacErg8gJftvFHdUQ2e6PHN3NfUnub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4aqDQjA2K5Vhmw9eNdNT4WSKzm7dhRqhKvyVFsFbhouyQ1BQwRyjXwe3u4rwZByNncto5FsD8eMNwYi9cPMtnk",
  "key1": "4hjSZhgxeJJKnRukdhMnXUWCDCQKsTctehxe3cBHYUCwaoYstCwS6RLcqNYHfxLUdfgDAub6TqDPKH9Tis1JiL54",
  "key2": "4DXUcwT91dYaq11nhyu6Cws7bta7ViH15eQto22tkZnZTFgAW41hVD8u9TvUhgSe7JAdKhegvPruzoF1JPU6CrZh",
  "key3": "3vtjmNSkEgEwSyPPy9mDntTjhnGCRJNPT4gat37ApKkHtSN9bRPNpBeXPJ8ZBrVnJ35JLsPHAsRtLhSPC9ZTw4J9",
  "key4": "4F2AirWKACPnXU2XMkhJzQyhRXVvJhiVXbsbrVj5729ZAnPhysy2UpDgcLJq2Nsrnf7dvVpKckNZNuWYhM4ZXKJM",
  "key5": "3NPNKufLhZGzPNk1SVCz39ytxdjtvtUAMPpVSi4MdrSzgCZVZbnsGkT2LgxF9twNSaugZHvgP6km4jqhzBS6X45K",
  "key6": "MPUdezEFxMdmwQ3tgGop2YKv1uDqfu1MbcGuKE7xXmQX2vgbbz1ru6ptK4L4uRP62T2CromLVJERKQ5ypSxP4io",
  "key7": "3HGBg4epoZ9frgMAMiVY2EPfsTRVxLCjX3wxmSeXC32Mh6cNyf3Z4C13Ns64guRKBf2RX8eYbPmAp7m5uFkbZuaP",
  "key8": "7dQgkYEiwPaetJYdu86sJ8pYgsjW4Qfq8jsutNPrhbx1KPNU3ZFqqNk5nut2WwCnVw6ikcsvwgkwim7NHxKLpUi",
  "key9": "5UL9SFSFd7ZSuEwkx5mJnb9bYzwqnVDxcHTuRf5H4doo2NjTSgQDP44HVox2wfyQP8ZK2ePr8MBYZJW8dWiJ3xeE",
  "key10": "4oDdvYkVMqvoqBbGBiHZ3iTvbpWWYCkTFKmZ9A67z4u24EbuXjEfJg7CJf2BMTNTroAXkpbkQgRjdkNcHEc4xMEp",
  "key11": "Fp3Awadybx3GV7k7BXvKkZ4zogQGvvBPoSSbsZrb6eqMKWitwX2DEY4XDvFxxegRpaHBQcr8gTk4Ns5TmbH5N62",
  "key12": "DJxjRBkeHy1cHqJU4zySJcLHU9EMHy5DBnZRUvdu8wr8D7pLDM2gx6QnH743psc567Akj6HwicGsSuNnnmmY7D7",
  "key13": "RDcLVJVpoexVEbQ9CsG1ZKFma6eki28Rd5VbiwVNGgtipZVXKuqr7y2p814p2ZYKmCUGTthaKboruJBsUXZuDXM",
  "key14": "3MenBTYSYJY8g8Qog5YvKcyZxGB66UumsnuZWeFyRG9LRvoosigBc8h7W6tL8LdnKLqWsjGiGU6GDBSwYWjdv9ym",
  "key15": "3fvXNixozkzh2aDuuyo7ZcfMtXEvvvxYDvBZehZzx9ndU6TzSFUb8zj2ovbGMJDZpuo6NJiepeL1i7UBZ6RLE24q",
  "key16": "4qoHLpGhMuYaStd2D39p9CMbzmvbLdypQJfGmzd9EtBAL51EaKeyPX3b4YPX6ztu9ueztUbdTUowRCwEh2hBbbP1",
  "key17": "2RNpvaYD3GBi8upKqreTKSv4JwaVPSwAcofCMucKfQEkVb1CVX5nfUeSFsvbDhkaHtBxQZK4dbDoqNr2FGbSs3mn",
  "key18": "4PXEgzCRk59uZxjsFr2GAuq4ATSbWh6JJtGqWBEHgcJst2GwDtPoB6SQWNBTzSrofcvJF35D7USt9qX8VoBR84Dy",
  "key19": "5BpiSgHSxinXbaUGGcJDxoi6i5vbw4xaZ97o7qQuEfqJxs8YByUv1higY5NkorbX2AaC6xJMrQq4ciE9NXXofM24",
  "key20": "2ifQDQXFkY2F8YmJBftMprUk1RsWhgghBoT5ovSP5MRWUgYGufkGU1nfKSrP8KbTf9DevzuVbH1YG1UeJzx4NPEK",
  "key21": "5F35WqHxBHbnugfgtFKR6d9aVoYqzBFzja8dvNEddVZGvGRgmUesmmf1Gtr7twtBXPQLeSUDEMCgctbHgDh7cn7K",
  "key22": "qiF4bj1UmRRvGFRAQWoyh5wF3BEieLniTB2vDuXvNGXV8MJbZAGdaWFBassBRxGcUbsjqVoKr74XA7Xvgxfx1RC",
  "key23": "3q3vFTfG9HsJs6N7Sjnc737FkgadmHdeY7Wj3zpt671FZ3BW53D7U6UBDog3MTu3y8muQQ6t7B89vYorXahPT8X",
  "key24": "2cGQ1VDYF5QyCyfASnhN1Bh5oGhtTk9BVFhNpMzudTZBEDrGGaCHdj6is2sd81jRZMMUexfpZoknCEtTU6teHEZ2",
  "key25": "2bNCAcFZD9Ssru1NvcHm4t6DYobdf8XZ82eZ3YXcYBa59TSUcPwJn5hi4tpS8vWgP9yDLtJvJoXXjH9FEwr2FXjH",
  "key26": "22vr7iQV1Rw2Ee58UkMTknWuU6RSNFmvJpGcVnLRAekheDAtKouDaaehrBqsFAWPx4L7Co2xqFwf5LLKLhyifFHE",
  "key27": "5GxGgNM6t8BnvkxjZkALoq93ANH1Lrs5ZbHcM8jQYTmKpqsquuX62YDgLjFcXEB1JEcfTa6QVRjrrhJs1ik8BrDQ",
  "key28": "4Z41S7Y4nwsJCumiG5ypKpQjnuY6SGMrznogaHRTAHP33ruRzCzEYu7ismfubTsdz3h8yqpN163i1mdDB1UDdDPu",
  "key29": "4v4nSTWaQzvux9jyvi12DMxM7g9mNyGuNkuj4q4C3b9Xt5GrmqSM32adMpDMzyxxTiFRioaGxMFoHNoPzRFfpqXh",
  "key30": "3wp1xMQPXTo5Tb9KFrqDTtdC4TUpKtttMc4V7c1HvwpK7EWGVC5Yd7MwZQbujbnWwbNXyBiqFz2QNCuwfzGihZFn",
  "key31": "4b7LxeTQpK8iFE9rAEjZcvTLyaXSz9rP1Gncx8H5xZUw5JNeoY2gEGE2JQywgVMaZq1gb9DyRnxJenSxxzQX99o5",
  "key32": "Rv6D7fEKjk6BYySjT2Xg9ow91KGvWVnCvPLEYoAmyk88rf7ZjGb1CLmtT2cD4suqg5LDsvfBokRcw53sWiANU7G",
  "key33": "3E8G69YjvySBTPGHn8bGUgNgrPDTnLw6ewFmkjKmY9KDVF3kwcdX9EfwWvMyRtLTHkrBF4bXx59kG2gtMgwVFx72",
  "key34": "2fHY31uxa6hr1fYGimsw7LQaXT4aM8Wa2V4mUtynnqkqqRTsSNFkbbrGx8jafNoc6esCmCDu23CrHdcckrKpHYeH",
  "key35": "4RdfNFBZvAd8wjwWW9RCSqG9gVM9ALYuhY7pFXPh79CC6vqZ9dnWHBScXZsyvuoaNKZR37LbZceuaEfjnfAyzcey",
  "key36": "AEj8P6EpiZYVMmeLrTFsMYCPqz8PBMGyeJDN6cFpZxzGR1vYhheaEX1B3w4a7i7J647b4qKDsJhGouGDLua1Cca",
  "key37": "Zhjcmkr9s5got2qQm2LTBa2mow9Z4GBnX13MymEnWNSCA3t7LCimSJnKf5dxHRHMTXxqHXu9XrogdD6m5LoLLE2",
  "key38": "37pVDZPxn3iMe8DRzc3LTYogSVbY31xL1P4haLBLAdXjZHePjp4dEWDUeVGjRv3cKJpUq2bapnRUAyWSDoDHyneh",
  "key39": "4GnQdj85deF1y1qFjSZ1LAotbL34fr6UQqzuGdvEyLkaX5acmenAVz6gT36bZKByPu9YVidsTC8X7Md42gtTByCv",
  "key40": "SsRkQemsNv73ohBHas3ctQktjQibGPNkXVvPQr4SiHB1mRjjE2spWtQHLZdTj3ZfGvmw1oZEzejjYpM3T1Ptqwf",
  "key41": "3VzxY2jewyZSDXyChRwZE4VNKtbqUrZCEvFCEigyxUQoT3WZJLnD8x5D2YUZAf8Eh2xLuhyacGzPbcPhUuq19kk4",
  "key42": "3kGSKCCgXkCJn5VWHb97A1jKCakfTkQZm4rGssY4wgn1mWA6hoMwByQQ7qCC4htHmwhnnGbPehHALxxLsgcciwZ2",
  "key43": "34mi2ihmDrWb3e8m6GwnNWT75NaMCTfVvdzBjGa5q81ZnVVmZQLzHuzNz4VFQD2dXW9Sk43NsFJNpNvXD61xvpDN",
  "key44": "4yq4PLB9kCXu6kS6i8R6LaTEvFjpdju6GPWMrogamKjDCaurAYDNfn17GMhLdtyyNkETFwNzpQG2UJzc43JvHH4z",
  "key45": "4i6CkQp95Lu6LSEbKjwWktta9ZWLfgHVATUSpEzge8UGW6cLaazCysYxsxEUYkAq5jPq1e3MGSh9Xz15ptTv9HZR"
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

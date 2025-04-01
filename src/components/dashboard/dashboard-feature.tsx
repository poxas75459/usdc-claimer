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
    "2WmnqmEFaBDED4MLj8MML2Mx2RGjxJC3WXNbZqFDdiHELPgJDNVjwRgtvFFEdnkvurwHLKFYevTJ7H2xLtFDrXj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRi38JfQ5J2ASuHZXvKbGzD2GA6osbkh11kGLDuGnkc5uUEb5PWPzuARMcg2K3LVsci48bk1xKS44NfcZYSSkYp",
  "key1": "2UAK11my95E6ZuPJRKWQCuW4bJdBF2edHiFi4LPrnL3eWQPfiQBUNVxhyocCnZzqHXK57aMM4ksuNcw4thQpMzER",
  "key2": "setjAwpYEfnxydxxorRUS1M3ZiyUG3XUai4dDVUUzWLWmy5y7n8cTB7Hkpuhc9qaJSyu3fEF4VCvtY5GtpwnPnw",
  "key3": "27s8nYKF7HrtNgpvL4Zwkp5QQxWxdnczUCT78LiW3KQ34PwNXx36MZNmRVjMuCQYaxQEiv2kVibsDUeg2WYjuv89",
  "key4": "5tNKnXC8Zpd5JpQtdpiGW1JU8g5krNvy9EVQDLZXJraWeu2ZPLytXKs2QcURJBJc9MTebtG2H2pi4dD332UDGHzB",
  "key5": "3LVExcWXw6pPCcSMv6LWSpSQ7Y3kEpyAQcgcmmoKLADcqCNui5s6gtqEDCxJWh8s7TqgqQUtETZJDXD8zTt75rRG",
  "key6": "2se3NMBijaxCDLj45rLdW5WGif4C68JkNHJXuo43KgHR4TGxRArizQPs8Aanj4Ft79zE7VUkmHLYUAUQ2Tbw9BxL",
  "key7": "25aAoSU8xCK6R8oLup585NTHD3NeowkdTAUGmJQXJBmVzdQWvBFc6eK8tMBKxgFTMwzNTGaV3CQ1LBbBLiRBdCar",
  "key8": "wjxM9gMQFubkZh5oCBqyp27NmqLEGZaPuaDJwUVof9LEXQrAPRCj5cBp5cVn5PABSnk5Jzwmw54jUSBKeXkFLuh",
  "key9": "3bqiC8ZcyFf4xDG3VXfe8ARaHEvmPbFYAkUBiG4DDVqU4eQ7HmmL5gvrHHD5ScbdqzqTKrbcVhrGzFvGk1Uw2Hn4",
  "key10": "37vuRnJRG8dJPTjT9XuUJcZg9yiir1xxPSbiwEZC4yLCtsvnnq9xrUtBCxH7o21Y24UHEdi5odtXcH2EDMuwhGeD",
  "key11": "cbo2Ceo9gCZmvzbFUtsdE7ydRwsgH58TCWGFpWBhAq4fnMaitEgZ4KbSaSAx3DU32fKReR9e8KeVTmJAjxJXAGt",
  "key12": "6whQDhKRFrs9cD3CzAY2UwNMaJkVj9NvUHjM6BzLqq4ppQCLD49oUoVuDe7fxY96hZwXwkvPnPhosENzFpXuL7Y",
  "key13": "2bapvxyy9JCVu9zDVdeXsHyEZc73dGv9s9ryNjq8gyjgka57qwSiAxuVH2dU5sjSbjf5yQ11acuu6nq98DmAR8Mt",
  "key14": "5QWLsSwrPVvQ2pCkqHyG5QFaovUYpg3qAbAW83buMsDKZKVH7JywkTKQCHKsBgJjRCMuDvEfcU6BrpQLBSwHwU6V",
  "key15": "2m1g3tvLfVjJzQoSwXQ21BfrhBtP3Ej57rEZw4gjk4G5GX1sriRjhbRyJLzC3bEuQr17Mq3YKJYTm4r5wLgJ9KRo",
  "key16": "hDeSjzmfkJQEEXyCLBgSGwRBV977eDqZn2NondTifpwD5acCWooQb4AgouAzjEeu6eqDqN9o2J67sH2y7Rv5Lm5",
  "key17": "5ZBPRneUh5srKWfbX7XHUPB1MiMzS2rqSpVCemYzAEhdpLsRS8MsEybjr5S2j8RnbaZr1ntrwZ6PbD8znYjXPREk",
  "key18": "3ASRY57BXAtdw1DggfyYSRCtRFdvH2SJmv2x2UPGdtonsqs3F3HQqeHGtJssL3K67QjE7rnziy33GKhNNJrhoogc",
  "key19": "5qrSzJGHffuXwEj2cmjYQDnD3rSpxzJevSysjEUpks7gn1Z8MxNaTWGazgLD7q6bqSyHxAGyF2AttXTZCED3zjfw",
  "key20": "3RFLjFC4L3hUngPaV8wUjUYRz64Kzr2mMiK8LLgT1hxGjDXvw4fjg4ea2gT2WGhhQQ3MytbYuXzBSoVvVkMWK2DL",
  "key21": "4fvwxcQCe8MPjMzXm1yRujQJvFkw1iyH5Br4JFfGr3autEyKD8U8xDLTJB8QZwBmE2Yf384wpiXCizmhYrA9qLLJ",
  "key22": "3aiwhzkrKDXLeeyTYoGTPpJCLjo3YvendSyKVPbnCovRoochTp877EBnd8Ji7wFQeLWjcvWEWzKPizc2AocyMpWr",
  "key23": "21wEUDG6rrT89BF4YSnKzsicXcdoyoFBVQW5zJiBuFNSwqSgkMVoqfDCZFDNv8S6fdf2TNKEVNSPMzpbPfQoKq78",
  "key24": "63x1gGcrzBmE4exf6q78BKtLWyHp7NMv4XfvyMVr1f4ch5CDTFpv5xMVDe5eWb5Rx35yTHeakRjBxPxeGEhFo7AX",
  "key25": "4uT399W7kXDxRYGHcK8rhBkfDYEkSNWrpLXcxiJXNJyEARNQ1rMBX9VziFbX4rAUD1KK4P4UfEa16ocx3xuMTWfB",
  "key26": "g1TMsznem18AMUMs8FGsLcH1oYHBmpiCJE97dPq6gqJ26uYXscBdSVBp4ZUcsfW5dSEq83zD43ABiZLF5C1xzsS",
  "key27": "4ZkKmd8yXH2qwkWyRZKZDEFtDDMw6ZtKNezC7wCyV6QnmW5j37vWuBqau1sQQ1qsdaEsXb8XpQQsTAeRExp4VuWn",
  "key28": "2fahuZt5RSmzeyQvYVoBzQbS3sWZs9TroU5kETmXjCTkgWXRGGPkuJu2KHZxNo6XD85kLmUqe9mp2anhnnfZtcs",
  "key29": "64E7FutLxSuCn6kvG8iPXhRBUvcbjuZYkU56mgbcJRFJwg2P5zQu1YgARNuHSLDNXp6UKUEwo9oPo82mBk4dPyQ8",
  "key30": "WwCz8hbhS1DipzUgtigcVDiTLdLhCnaG8UYb9ahcqGue5xaaHm6VThBJG5mDcEjPmp4bq9UpQzFavrsEgqk4kvU",
  "key31": "3wJYQ8gTWpSbRCK5eDnbQjDUoVD1ogs87ocNicnhViKVHWwxGUUv6jBXRmpAT7dXKUtMMyfDcmmjXxXiDqXSUFya",
  "key32": "2H8cpyuAMipb4qgab4oc8LhqtjPkPU7LpmvUJ6yE8wNztQRdcZx6H5exoVBhSFTZ4junXGHRX2frJrGfvE5PHqoV",
  "key33": "3roMBFPDBX51eJDzduTbrqFSi1w6bcAWuitVy1UsZHn4LYQvUEsooxK7JVi39TqFueq4GFc6iiWYH6p16TcEyEs2",
  "key34": "4h5o8rSomDczacJ6TvUvnpvRcM5h3CYbpJPK7s3xfhC7wAPx7pFoNbjjodhitRNs1EQ8gcBxLKWfgcGNxaLVxRmT",
  "key35": "cAvHRokrrSaJnLeNZGaRPwmk4pF2U8szfZrbatSoLnQQk67AFVbAWxS74xviVbht3orf7ccT7uX5zXCnr62N3rJ",
  "key36": "5WnT8WSpzgBG4bBXM2wbuy9KhHAe24UdQ8QTxAbVdSw7rvgXERL9GxmWCJLgDf6dXy2Md7uNzSE5w8xuVKXnK72n",
  "key37": "2cjL7LzdH8dPuCWC2w1ZU7vBUY98Birwbpm7GTunDxS8HYKeiGP1DgnBTN8fSorK6ybYtBg4sUQGZFDoSLwMokBK"
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

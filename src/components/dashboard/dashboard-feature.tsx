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
    "2dyaHtK87r6ncsT6MVEFbcTwBwi5MrHufAbUk3iEhy7q3HLKNXpMHk7d1BtsrSbK2PguEDjsZJu2vgwnx4V6xfSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eGyvzQEbH3dHr4NdBLMRGWctqF548bvToenpcsnRKKGf3zbR7BBWRxS3W4F9SxCPWJEUTvLY5Y2DybBUnTXaCoQ",
  "key1": "2gdXCPwvfaZtBbgXuzhkr4VReBSf2v6D2SYViFXiTutWA4gAZrs5XuPXQUwBkDdtJtZ1qDRCX8CAi7dNWUVr8dKU",
  "key2": "5eoqPp4WGWVGJKzFW7P3sGv6d36F7tYYKzzJXjjtfa9dTnHrwEiHZbS2qV15XDjoPPeW7PwSYoeYbkKDoagjU2zM",
  "key3": "5UV2q4GhdrZ4eAhjCQHBq8f5n9TZPfxXiXQsTpuF7FrHyBK7egvjXH3p6P4vVjq4juDQqKhTGZFo48YVg6b1ggQe",
  "key4": "2XSgHBvvmb2xyJQ7HAc1sDruC6VgYQWeG4TckKh7y2jbH7X6eY2TgzWt5n7JtW47qYWovF7mKQy7rLxReyajGvke",
  "key5": "5zDqQ1q9M1FCMD7zZL3i14m4Ffrgsh46BHT1c9BwVGNMAsgFT11UWWPZ5ZpkMwzP89A6y4jQFxyZjjoqDxq9qCsg",
  "key6": "2HerRknm444ZEzZrwZ1Kqk728FZYGuSxAfeJgS7vzenaCpxKRo41xZm9KJSwmrziAfuwot6Q6KRdD5857DQZmsHP",
  "key7": "4BEkhUMMENaW3DJvtoxvDxF2Dn92Qb3WVJDVguCtLoSpZqwY4fuHRQnxiiSENCjzA1KErB3zAF6ovNjeV96MyfS3",
  "key8": "QnnDFWjvHuPiychxLFAh91nAMNhc23fGUbjfsdJJEyDvHajNiPnrXnLMByTY7sas9KpFMey1RsuyQRHNiYAHCsZ",
  "key9": "4oQChqTpGw4bT8jAL3U3Kdu89aF5QcXcPDL1fo1a7dUtg4KPJLKHu1R6dhNSgpGxCUu7ATmzuoRtzkYQHDbmJdq4",
  "key10": "2cjSnjb58aW6G1Jr8y9eQJZn3UEzFrG2ZHTVbP2EKhSSMmQcqwrBSFS19hLoNtvLu6nC8G1rEXKCUA4Sgv8AUpj2",
  "key11": "5o73pb8AADDFJnR1hZ3skuWxdxrS8pBGnN8h79AzLSwAZeGpD4f16cbV9aiVRVcGda2JunPAhRVMPT7WcQWCM3MH",
  "key12": "5ZTcHXEhiwzubCtC72UNH8Q94Sb9DiBQ23WqNL1xGnJrMsj7eWm2mgVnva7kJm7WjbCJuxNbwCRfQ8P8Jszvs1mF",
  "key13": "5fmN2ojgEzL5u7SxAbYnG7csTpkHVm6yBxJKLYTuKHdEW2s3YSFvHxT54xp3yVMuHApMcnQZiKFqM6fJSF2MtNuN",
  "key14": "waHBFuServXoxRYdrDvs7CMXzGwroXxrD9MHcHPSptUMxWo7HFD7Y312pGG6wXx5bxRMXatNKL6oEqe8rnW9Xjv",
  "key15": "UzaNVkWRiiNU4NWmTBg4n2x6q8eNNGk5GrLCsxpYa3wdqYtCKhBcug9q44vpbxhGgakPX1tmMAVEa2gtpmeMZ3W",
  "key16": "5FDu7ngcq66KEccmHfAdf5dggEShEHuuAz6SaK32qWhmd6adzfNVfkF7kxyWsyqSFUC9vmUyoRqxRxLYzNo6To3S",
  "key17": "5L5CRoejZzJbLH9ixj3boD5AcVq2iYnqrvvxoyoobdySuAQJRSWsYzHBic23PVkGFUUD5C6DzWEYsudbQrBwH5Ln",
  "key18": "24GJjbhgT1r6p7sa1kbWqtmGjb2HGm8o6hjMyQEUh89A3u9dMuJa8URWNWp4m2PCX3ovR7WFd4t77r6QAHbqT28e",
  "key19": "2YhYaTfuSAnatVEQNyMYWLKNN4S7iJoTj8cWBgQ4dEReUuC1tu9BeT5QiSjhsmefU6tcsG3uqsw8x71YJdVGX78m",
  "key20": "2jhiyaEj5yqfEXePFQAi27UjJaSu791TfwS9YYgXRbM4RzgExXJmdZeeMfTfGSZECcZYXkELGTXSmE8E9cjm4DAu",
  "key21": "2EcnJ1W2H4fCkYN2aqSL6NamiuYikK1wxruEYdrNmtY9fJLx86yabBGTPWR6qRYZhffuKTfddjsaLrTgWzDqmsVG",
  "key22": "5atMgRJYedSu7t6fy1Tyj2mtGpKxkgBZGLoi3krZrzUXXB28dw94TvyCb8NY3prtsSjRaf9VEZKKfZVeGdfTrrM2",
  "key23": "384xtXJrQUFJLXUVqXHzY9Ms9GDUyCu2tQ3PpcsGUddqYnN7bxhD8zFpxkCepAaEtsZbEAMy2pciQB7yXokoqLfT",
  "key24": "2C2LmKbgyjMzemyVumo8GKHiQwAWZch785qirDu9WHQTpu9gJ9NDh14zbALjMRP243syQwrtMXTW8XRzzxtF6xst",
  "key25": "4KiEffqpDKL5xqQPGip5BuTgR5QddGZJeWyVUsskLkQJNpwsMM1Y5C6z6mjzAHUwvPCWjSCXnpzQ3zeNy3a54Lzd",
  "key26": "4s6G8pE7YcMYai4gg4B6eZjicfHQtSboXQVBmChyqEqkj6TGrNmgznfjjxvGnZLC6eppF3eStVmcmLtfrZ8gbjyX",
  "key27": "2i5RLcoqqCvsXzfuLszuQnvQw2bzBk1b1Tzs9XmVYFJprTY8u8zic43nHQdv9w8rane2dPp4QnrQA1iZYwR8MnRA",
  "key28": "4KcL7xAutDrurdWbyWb6bxskNWrYEqpWDinHocFfTjjj6EkiZumFHihG1njVjUuiE5w5xbPQffuTd7KNSb56mLeR",
  "key29": "RBvdMJVcBHXannS1ooJL9Hs2PdvcZRsCbCUvbLvj5ZRadZX6grjzgrtSGi4Z6aDTL8pw7spqyWFYSxCEzATcDzf",
  "key30": "3n6fKvQzbnK4XrvkWRSWSVeNvuDh9oQyc2k4JE6fnQed2tAComPL4rFEN8Bb4Nms1fTzMh1vhbJi6f2xYk8em86a",
  "key31": "2KKgHNMZQz3QNYAEJc6Uak523b7ZUhekNNMEasMZPeV55QdVL4z8YQiPeGjEwtiDvpAMyy6cfcyfMkudpPsWJLXr",
  "key32": "58FFNK5cC5yJVPVofKMY4FqwZ1q99XN9FGtonchQg82FnsWvzUZosHfvCd2ZTJQqsWqzkd29ujQwB2Lb4k83MSr5",
  "key33": "f8xzqJnPfpJQ2yEsZaiioL4j6kve9mESnC4z7tJqCK53ud38xWhFLx2gXZsoSyqvXQuXz9nLarn43hR11gzq2X8",
  "key34": "3tDgkD1zK4WEo3yb7iJHiKy7ttdMTmts1pNyoJkJcrQeVu1o5Jsc7agqXPoVibgSXNPdpDi3KMDssGyiepANajip",
  "key35": "4uJCww3fF8rGNjMLxbqnCCoHwDZMBDhLpfmkAe6chCXNQ6Czv2oMv42H3M5uAJzggQus55EJytYAhTubDU9QS4Ss",
  "key36": "59gLQynaTwg95QQokRagTZh4WuxknvFT6MQzhUct6zytGEH6rPH2nZsNC3V9SawdbSQNpHevJmngMMfBAhQLnNdX"
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

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
    "4SCZ5hWbukPymUUdJt3vn68SPvdEsmYS31KHiYwrKYcF2KwUovFhTmMpb5F5yZdYmE7AEu2GLpTMGUq4QxHhRNAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwMsiy9uVjdRD724YMDU7vxNuvPsvjFf3oPZ6DRVJZj1ZCDWbhS6Ku77YkqQtqoTqGhLXKfanWFYBkwsqQunJVk",
  "key1": "2UsLYXsVYVPLEF1sgS4qcSku55yARwqvUz34pucq4gLU4gjefRVQp3Vhtn6QjNedonEnTSqDz396MDwTnCszvu7R",
  "key2": "1iJbCmHdMVtjbtzh7VqvdmC5Fn3FjjoabY9qYZVLwhNrMKnjwn5d5bRRASuGpTYKd95uTi85B4Jg1iy4qd25xMY",
  "key3": "5NSSZEF6CE7nn5cLWcv6qp9TxQQ6ou69vZYaYDrWhLCN4S3yGgczZ3Bpv1WjD7wKxbBy7JEqMtpjYZrEPCRjPJWc",
  "key4": "2XVEkcL5aYVVQFpjQwhFbdSnmym8szL45uYESGciWYp3P9gR7eka5XjFYH7uU1my2x9CRNtq3igazGPqXhLvyJAd",
  "key5": "4892QNvWkE8AGeAbEJZg8kNBXaqs7szNDEqP1wT9mEJbmDJa2YLoPcE7Br94B3byrv5qiGkoDXD7TG7grDhUY48B",
  "key6": "5GCsWLpRWwas6owRunzpjzrCc4Pt8kzyREZse1EQ2vFmFyxeys7Vi1iWZpcwFVHy8CU8HLXe6y1Ffk5gTapwn8Nt",
  "key7": "hX1Rn5ZQWhYJig5fic6zegpYRGKPJMf8PqkqZdF8XEbvwE1jTTSxjDs2DqTV8vYEXEZtFjX57QzycZkPKZP949E",
  "key8": "3TCdQTFaPe6h8LaTzhn9zbCm7hk6dMUsqwoRfcL1NFumbVNdifVJuvfbu6aj59ceBpuHrt3HKVbTPx6bkQv36F2x",
  "key9": "5GyQaL6Aw1VhJ2ReW3U4ruDzQj8gnNGxYeiropyakQM9eQAHhvZK6fJNDUXoPdZTL1v3JWmTWmdge1zsfgqp5mMK",
  "key10": "2teetrcSqUqwb5XVwQqKk6Enyg583DXiGgvuiRGPc99iCskYPXKpbr75AeAus8ZBum31CBcasPjWxRhk4N8Xe5yG",
  "key11": "REmQNpQyB1kzUA89VF154fYgxtYBtSXHLNHYcmLK9HmLbTFa3HGYfg9uiG2Pnk7S7HAGoetudcKAJKqMFCmndL1",
  "key12": "2CngJry9iN3MvnhRU8qTTCFZLD8SX7KUeWyfW6fNhj4mjQWKqgxhntipsCNYsSMyBQmJq711D9eoKfcuZeX9QbnH",
  "key13": "3Eg69nmxopeu46jNW9hjriKfY8EwbL3x6UutYkGJAZvFUbRdyzAKAVqXjFbTWwK6tUhpo22pEquEtJvQ4t5R4m8E",
  "key14": "1HWB8URfpDLEUExvGjQw6X7XQ8K8Lg9qjxxDxiLLgnriPuxy7rW6Tw4YkpMhnpbKGqiycHtvESdHetGKXXwTs5z",
  "key15": "2ttPuHHzWcdLASLGneqyXe8aq9W4bnrdXbTTm9TJhPxMqFmg6Vdm6xWn4nHXayaGSE4ggKKPc9PqWDHmFBrU1ypP",
  "key16": "2vW2ambmsHcG8jWp2Nmve15JwFSyz6gWttNT3jrNJpmLFA56KeJAqddsGcJYpA5oghHd4RvdYCDWSRd8xv2CrsYc",
  "key17": "aYAkEhDThS594pXbfkCWgkz7oVqGDHQmZpWBinXKMeSYqygzXWvJGQgadehdAi4nA6Xw2Nb25q8P6X6MsHd9Py1",
  "key18": "ZqbtAudiqphRYqTrT95GJrgUyZcsmmUCLTaaJGrhJjGrnKL3WQwmxMsqP6WEQiTLrAEMWD99kz99Q4Ee8wKLmuh",
  "key19": "LcGWKuC9uSw2FYrsuEmDmwQZhp4uU3hZVG3yxotuj87sWYE5EhBXqsMF65fGYgqnPQMH3A6cyjsXPfwnAsiTxiY",
  "key20": "3Y8qLUZV23iQnb6tKb5xPKswEKkMiuaX4aFqPTQPrhfj54SHQJC6Rk1XLBsQepxZJ8RcaUmbJbWsUm3vros7aktE",
  "key21": "2mpqQ1gq3ojTetUnBtnxwaSHqDWYmHk9ZbtR3F69bycPADnXc9A7rRGEHVezCAA1dZBsNjzZyS6LSd17vaoXog2",
  "key22": "3ZymesWCzUHj1Aqwh5o82PEUCfpjd5F5F4TSjXSJsUiR34fyhd4WjW5hJnuGh3CSeSEDqBSVbMfV2NbAxcZbAwVU",
  "key23": "3CESWHKsTzpk43cGgaxnZ4jyAzEoJSJTxQYUrQwASdtsVAnqH2maiwT3bYrKgdqCALDZgPdDXkCEKiHT7VfngHoD",
  "key24": "2qoShUo2TCWACCerqy1j15nyMBxGuGiDcHnSq4gugJNQg7avXgSYbZNk8Rc7DHVN5wbzSUhfXXFzkNkSg6XoGEei",
  "key25": "w1L3viWBwamxugSb2kzf9yiRuiiUUSVoxUMhGR9Zvs7fHQCY9YUncZCGeq2c2rR8ri1P1QDNvJHJfkCfUAq6LhD",
  "key26": "4gPo7z6BEByMWkxRUzd1qKzfhcWUC69GgmkAQEdLQd1C6m6U4rAMo7vfpJQvtWfPSa7en3RqKkcbWgekppCDwSZC",
  "key27": "4v8tBT9U22J22t2hhbUyCaie4YTZVFSD3aZyUHy6gEuT4eDwtY9abdBLzH6JcNYKJ8KtWnLQE21yu3nYevm4fpR",
  "key28": "EUkZmsZEH1gYdR453fgpY9MiDi5UBaJKPaNHftqVJ4sTQrBCGTP5aFW3fy3S7iCaTekjGbPHdUNbVQB9CVwHS1H",
  "key29": "2X2cMv4jpH46fnGUDYcNqJvUtc9ckm47CY9EreDRJ3frRCVhg69hf1qg9gmzoK5UfMHgFSAgx4i2dgSpKFYThGsS",
  "key30": "9Y5htKstQHXpG4sVoLNaDTHY8hioGJER1CbQ1RKFnnbfDxhgnyp3ysiJZK2BLzRk5QpK4qRHHXmvdYYySHiyNse",
  "key31": "4Vmy8wxDeYJ2q7M4yfanqn6pY7aYjA86BBmaRSJHeWPfkhKQoSYfF7yQs5jHoxu6tBFSGmhiLUmRtGTrByDqKvqJ",
  "key32": "rBFfYbRHbJ3afZHQ172PEZtjkMDs1fNPjHp6P9scjSKMYW993wcDPwF3qSPdoEETEcHxGjx9zk6BUjEjmKVX3PS",
  "key33": "G9ZQ7QXuS5RdYFM9wtnnCpeataz5iYUtNPxibzemjGnEf4DABWjQSZ6s6CncV25eg7sehSFNrSih5GfYyrBE9Dx",
  "key34": "3YLocF2fjw1mbJpmwmuEvsckjjeeEeg4RmxPqzaXZgBnhDcnHDpHUMcrFGdeqnjmgnYjjzmgHHYga3j9TfqQCjxR",
  "key35": "2iLCdQd66eHH2U5jLpcDZYLYbWkgonyMNM137iQQJvHgcJxP6zEYtyFEZuzA1vHKGGbVC9WbgC8sHgNTAdN8aFAt"
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

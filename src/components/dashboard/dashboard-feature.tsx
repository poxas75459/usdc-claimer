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
    "4FmxckmzPiBQdEJvC5B7yYN4NgtFcKTErsbaqU5puL1QRe5gK8FYGJj19iiUAftgtXBoBkBf2QvQJk4L7TmKb4q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9QBMYJeLQ1tfSovQef7Ta9FfjsVpzk1R7vf6hH37GXQG8iMm57rTWyWJCJcCqoihxQsPcHVHvE7AmDn2QjpwyE",
  "key1": "5CFCww7vAVzACS8Egz7m99M4HzVXfk4sVuG3AYBbbeE8w2TffrP8K5Tn9JnwHdXsWN9ooqVoz6ba1VQZQSFSdqkB",
  "key2": "8iDmPe9TmHcAgPmFRL2MYgrmpNTf6Dc4L1VFwWF5ZZbSQ3BnDuK3VQkAXNPjyuygASqejtu7rdKKyp1oX18K23Q",
  "key3": "3cG5JQknNpebhAHUp9HxCJsVE11uxntp6NJFiNQcTq1Kddkari2uxgSgMYrG7E55trdYLi5WgM8uCSwtQU4Qsm9a",
  "key4": "4gvXvBdPK59sixXPJ3Pf7ijdprSy6SC9ZaGU3AFArdCmwo9Uh8Cu1krVoFx14dc5sL3HRYZoaicEKHaii3zcNjXe",
  "key5": "vBgEVoFkfTZwQhEzx6xWxv1NgYrGfSRhbaGXoTdAQh8pMwPMYZW9dsmpJAQwrD3i81pF6TYc43NjDEUVSkbP9gZ",
  "key6": "2rWDCL8uSJQe8wMR2pJJ4ZJn8rmJMnzYiMx7fiUmBt68z4WvsJQUEchRsL49SQjYTqLbMaM4WfDLWnPEAKB3LFs7",
  "key7": "uFxerjZkbqMWMt4R1vQbwLHEBaCYPJKs4v4d9mybsKTNhGJHCTUV3A6wqdGrYLsrZGQe76JXC951MtnFApv7EgN",
  "key8": "4CEcC1a1EXm6Y731EGMr5YyGtDYqTz8R6UihX7cZAcasn7s9Y62fapVXZzd7U7dLpaZorFhtBi3qj83BEvtwwrK4",
  "key9": "3hDLCmtMyrapzpSbbjx9XtVo87QBrYTqGpivAT4v13XQ8Gk7kXenza9Z1qYGrJSjjHXRU1r4ikahaigxkMEWv8Xy",
  "key10": "2MBpSBrQrim3x1VeQBHbPVZLaXJn8dkmvLjbrFgTziYauFpMPFwbiXESFupSzMqpjSmFG2o7gQYURjLhJ4geJmzQ",
  "key11": "5aNJvESYHa4Mfh9yZ1bvmtbow4JW6DEe4G3HJTFBuEFnGikJJnEL6yXVRPzW2m6g9C4ELdBQ1RpqTUW5AWKLVbpU",
  "key12": "5bia7nQDU2LesVSvskwQvQL64ubE39vHtUrFiDUmg9AqL8iZfMCqVyBVpayAwWp6bG9JZA4GxJEDJTYrQmgDJBBv",
  "key13": "4hpHMuLGA4rMyFNGgEZSyE7zXt23z3tucJxD32bKskmhPUdnjbMHQAnFQ6FKFsfk2Z6yRny39MpJKzaNUFUnQ8eg",
  "key14": "4w9v87uGQpkGNv5EM6QW3n1oQgHUNweqRMu8XWKdwqE2vpCgLyvGibCPU6YsbyjHu227jEx348Ksz5sbDQmCRqac",
  "key15": "3iuTPynyeaCntP12TVpNRXuxD4CQVwcx3hnKbgaAM7WRBSE64zGuyNPdwM6BmJpJHyHCN2nzBxaCG2AJY9zbVeUn",
  "key16": "4gAkNvykgseChgK4qBA11UG3tw3bsHf3HJxfAwfEUbhnQAD6n5VQeQaUxyajgEKGmLfPFgAkMB9Xe7joGeVQBN5P",
  "key17": "4ZXeGpCAoZiLCHcEk9KZLEubrADqw9XX2Py6EwNawMrM7XJx4mxWprk9VbyNCxusDamtk1dw52xNhvpgsZgFvKjD",
  "key18": "TYMubqtVeUKdMrXK1YbX5YUb5HJEHr1HWvdaLfbQ2anPrg7mnDbBgfxVmwSkH5jDxH6JSGowCYmm5EbWX5dG7BP",
  "key19": "3qMDHSYuyE5UMeaJCc5D7tXsnp53DrmD5t5NWe1AgynvkKW214zE5Q6VwsiGe3MZ1udnsqx7H4Kq51iNawMcwxrQ",
  "key20": "Yxchb7GaXyaTg9e1bRpXcs5xrTFrZyq6X2JK35pLyUaJCMrzF7hFBHC7JzTF2GvaU28zstoP4AjXLFz1HPSpNR3",
  "key21": "3omCaVbGXWgG8zHoRqyZQJ3EFPd5o4GdigP1GPysqt33yg73AYTrpacPAJEGurwHSyQScjTWkTccAeoWEZGdxmGJ",
  "key22": "65LVF4NNUV1uad5jmnqnwY8tpH1kjm4FigWymDsHuLiwzGRfyXiuNjnNvtUPknM9UWW7tQPQ9ngzUQoZZunwmbxG",
  "key23": "5MabFLLYpzkk2yq4KGdyjhV645ngQiN4XZVbH1sYKppvzEeRMNQC59fkLiEe37VHu2Eer8vStrQQHtV9MXEuK21M",
  "key24": "2jiZiXRPfZixNV63gDXQcZZHWN3oiibFufHya9fA5cRxw1YAeSKEY88cxyfyeKxd15pPbrnPhxFjQnW3aMe349qb",
  "key25": "25rZMWdK6yu6Rjj5CA7kdjbvLSVP8mH2hcp6jqrmdPVMvtBhLD9qSTJJPjMiz8c1Xg7jmHytV341rsa1tU33Ynzb",
  "key26": "5x5RveU8TxRjvcd39QM7sb1ojK9pj6KJwB53WPqrPRssWMnByabHnTrqtng7nRnTNB4hxHL1mZDVM5KLa5ouL2QW",
  "key27": "2w49mnz2EChEwhU1mXgdFH7w5iYGqFjPnvBiMfGU1iTVKC1DvDgzUvHYGL6xNabVsWW66Tqz5fVD7zWitzWnwVca",
  "key28": "z8Pc7wiWNCj25PNFUHxa7wSAfkLKo6uhVNXYKAyw3zsxucRbnioMFWWzXUZt7w71QuEauhFQUTCeJttFskwBmZW",
  "key29": "5KEXN9BhC57tmxSxcRfraBd9AAsXssKi9jav9zMiFJrG1jKX9WdoDyVVmhELuCvJiHnjSLo1xN6K9roKwV37SF8E",
  "key30": "23HPU2672yS9ogFQecBuoVFXSzHwn21pcmuj3oXJpzv8QyW9EsTPY1PWxgEHZrwh97nge2Tc43zYEEFLG2WtLZN3",
  "key31": "2rijxLWxWbfxyV6uoGGkvkRUWoonb35WtvoooBfaRkqKPufcZ8de1xMgh9aMrazkb8iLzjtwJzsrSBqyL3obT5Gm",
  "key32": "252X2v8W6HugtayXdH2Cj7H7ptP9NBoinPZWeVT97jxzCWTf6Tq3GpgfDUUNgM2ng4K7W5cwZhwB9BqWdsg6yDaV",
  "key33": "swCmjUVZQHT7N77m4SPkihF54rwxmXPt7DPCPot9CYPsXYdwJbkp1iUphcn2W1utSQfUh5GTUa8xTtAVN9MMLUh",
  "key34": "2bUMJHJCLke2oguEoG7gMX6pCVaZsKtg6AmU3CUbiu1dHEH8bR1QZQt1UPQABPv2mTCBEZy8gUS8yhHnicfqfHPv",
  "key35": "2jAGmdU5rafzmiSrvgxe4v1AGh63jsVN1cJcZ4rM8GAf6tqBpHh8MXkdEM82f7ikoG3ERX3ZdBgarT1Tiwq4Wx9z",
  "key36": "BJ5zNWtnt6G8R4cVfHaP2KrpZMMwaLRDHnPt3A6MT6YDd4m88tGE4SP3Tu1WHu8cJ9jnoLM1uRiwQmrwGDd8D2v",
  "key37": "5Ns5Brx5DNbvMbwaMYZNUojyBFBzeo4Mmo3muGzsKSsBwYxXGbqdWg4WBV9nbYJZdaDocTrTdtxa8h3s4aZrQsfv",
  "key38": "2CyWJZwRvqrD2PwX4WSaXMFE6UL8KTiRqiPdzGyKjDEMjLgK5FFTJeBaR9hgRScGm7Gh8iAprnUsdLzGNBg1R3Sp",
  "key39": "3SM3nXBo961xYTVi6v3o8FTouZdQPT56i2Q65cLCeMUhLTEmaM4BTr1WarYZAUKVZ2qmejGZgdigXm7B2NkZSciQ",
  "key40": "2PJG7XHJfnAEhmZxMpJvrQsvEDEmbz9fCZzWPxvBPPdiTaxPG9Pyzc8aGhjRMwA8qxptegum2dNLzFryS7ZNi4B",
  "key41": "3iXbRytPxHVY5n7QzPzRzdpQA548LhWEax6RbsG3RW7th53U7qmBnYmFSYek3qHSjGER1k3kPNUNqNXJ1i9oYgCF",
  "key42": "3uYreHk3dLqAvRW4rGCup1SKaU2zhzRfS2Tm4XRaQEDrpArBPSyDVgeYncHAWnzKyjMdo2uP9p29Mkw8JnAxiC2j",
  "key43": "3SsfekwEnY9GuaDfVjHzAGRvUhgriEVx42EykUAuqoLPF3ednfAm8BFDFv8T82bnR383PDDdMnckk6M7kzyx7Qoj",
  "key44": "55u9HJLr2SdME15Go98MR8cNouusPr6uzuc6Fh8QzuPrnA95G3K2GgoXrUEhB6mqqgCKu43HCzuwsDZM8ikrSmMV",
  "key45": "36zPep92NZ7u7FH5CvHVp7W82WTnvWqgXpDDes3cjcwbAqFeXRpQpfbYdZHDqQyt26uhRhYiKnXaFpdCAkfrH873"
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

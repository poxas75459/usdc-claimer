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
    "3HiHYGGNwtfPQ71uZGZduwuEhKnvoUq79gbEYkZdJR34zEbm8iid1ohaw7ifLFYrbmwAdH7FedPw758fzrfj2Zxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NhH8W9k6548LBE89sbLKobtgajJAx4EKJQt3LgVqmwQH436DZ8CeXsvBQsURxFnvj5dDF1UEFKR4JN9jmxFxqzJ",
  "key1": "3ox2UunjgWxL7RFnWjvS3NRUDBB9jxppQHH1T6gmgR5KCPKPGGRw23JiMvEwKtNKjtpr8Pjy43Wgp78hTXjKNoXH",
  "key2": "33Pcd77GnSfNyoY3zR4FjHHvJSkFchMuNNbrgkMJKDCtwdqZ5kegsGeNAjDpaRbUJjBenvdY96su45n1bSHihpAV",
  "key3": "5oaZuyQAefE2JgCwHnqEziJgpKwDU8ZVBNhYiukNzKnkrUi4NBL5CcEccS6Kwtjavm9XCznPFYDdhUhUKTxMW2WP",
  "key4": "BRw5Gvm6oveEBveCsNEg4xTBETSrNCNFxPubEANVGoSdpVaYy6DHRbB9bhjNdW34nkgRWLtduME83yh8EJMjd2X",
  "key5": "s3EpQZjyZYBvozpbtinBq5gAwWn3BrGP3Y2PWNi6i3rb2VDpkSp8TavKiQyFRMcmULi48WvxA8tfmM6c4MC4d8x",
  "key6": "riGcBNX7472R4PqdsQo9ch6LaNzdmDpkinjncnBdJdsRS3z7XACahUo84657FfHPu6PW33c2bZgxFnwUPLuBGo2",
  "key7": "5FzNDGcGpnZ57iyxY3XompbpwcWpoSxDEXDJgstEbueg5RgxcoPJPTFoG5fSTAiGTXmuUueASLovMGvf98ZCCTjr",
  "key8": "MzTiitGbBARGjpzRyBFxdPWAwUh98hsQiqjGMSXTifKVFyG76A1LmobufeCx6eGDifRr9n3kPuXrnGsE3EijDCd",
  "key9": "5zZKpzgAjAF9bBKpwPb9Hu3VqJJgbZph5N3SNocb3xVpQeEhYRo6Lo2UVE9XJiLzygHU8YQh5t7Wx6sy5Hv7PhDB",
  "key10": "4vftecfhF7FBXdWwpqfPjbQ2krv7VNcsNaQbQEowMN5bfgsJznM1BNfMEH95RRxUcgTPuzcuFoaYizEwpujvdh9m",
  "key11": "5BHBn2yX2rH1PJoSLdzZzsUxyof9Ubwm39jrSiDxhsBQZ2pAMewJyhJykVYzkKEQi5fgCe2D1FbKvCQzBHJg9EEu",
  "key12": "31HcfjEpypUjpc74x6TULNnxQq9aq5wyfZPD3yjxjGcHpZhU6K9qsJaaoNwTKxdFvCvgjZnpktBx6hxa3baadV1S",
  "key13": "Q9ECyWcRY14aQWpmdcSd6QV8pcsanRYJ6iifFFnnxuWXW6jM6ZPEpXcJmWP6aHzBpzLAtphxivGdLK9Jwk9Gwns",
  "key14": "Jc4MoEUu43Kauy3RxrDvQbJjBgWtemerTQtPmH4dv8AzkBjTHBQnBGMh9dfdJt6FSgeNLJBmaP97XtJaozTQ2yf",
  "key15": "3b6sqDT66dYmtW44UX7wiRbeBR27NDpnjDmg76Vs6VnqbURZqKXPzzQzbsnfZDa4ckLw7TVEmj1j1dVcRYCxW4Hg",
  "key16": "DMzyzDaHxJ6zVPiJo2FSoFcGNYHEy4FPTpRM62GifBrMWWRtidUux91hrznXmH1DES9H83cDHh8zHx3XQcRGkXP",
  "key17": "23DJiNio3DZDuz1c5tNGJbNqd2sTVM2iiVM1DgFUPAvw5jTcqPqbqkx7CpNnHmVfD1kWYNT8E7CD3WH7W2dZGeJm",
  "key18": "5ei8KzxqZDA2fy9fWPPY3chi31RjhcaxCWocmHj5nmkgwDbM3iXRw8A2ffeNMuTfDyYsx1TZzn3wdXtDRmKgUgw",
  "key19": "CWc9srqQovgkQuKF6gGxKaXEi9th579Ew12xS8bVnXcgMVnjyCVeoQWt7XGXLYwqtNMx91j7vYE7BWhksrvXERc",
  "key20": "4tHPFTuaWKMizsKd2L7Bgtk7vtUjHdemRum3vq8PVzdaih9rY9pe89ydMEBAJtgUAcadWrj7aKjjw7sbMAornET1",
  "key21": "2aDGNnJsyNbfJQ1LD5EpMJSq3poAAopZDFjeZYqwVGFZUkLesvP4YfeZ823TZ1o4nCeXV2LEbyUAzMHJfbPagLfQ",
  "key22": "2gKXqMPRhu4bFkWsKj8vpfu6ACwnkAAKbzB1uXVJyj8GHTb83mfrvYTAMQjDntZ1aNy5umoJTCdAcBAmZQCE9on8",
  "key23": "3ZyDPqtE1cc2BfwbEjUteb6Ey7MjfzS8zSo7x96cwWbYVLbCdLZUW9KNTz9rVeyLto6oFFPncsiEHtb966PBfUF9",
  "key24": "gUDKgokUFTAuTCEJceh8d91Y7sRVrfkctN2dAUaAnGmBLhG2yXGgrcZV18QcxaG3KCnM1rCnJ2qQxnqfG61iQct",
  "key25": "5PN1T2YCxMNa1r7YLFTznx1CuWHRbx93XS2VYdhoR32qs64CZeUt7kMa9XDudcehfge5xTr7XyQDp2GuiQaqeFHM",
  "key26": "3xLpmTwa6R7ZuYfutGRaLQ4o2J2QrgMpTtx3UKyiDCMGiFgA8Wh92JAaZF2Q1zFCF6gHj3QVhbfmhYVrp1cURbTQ",
  "key27": "5MU8ycBnsCVA32nUaiWsrnKgEWq2mAsAEPLrkE6C5ADrrQKe8AY7aeCaf3TqiJVMnFEWN25wtQWbczeTpQ7FrnLz",
  "key28": "2dgsWVmd5iftL21B84cnJvHa6JGmwgaM1pbbqCBb4yT3BNJpuXrJg4gQnBhcLnFJrqV8T2TErCfkf4yoGqGAEqjU",
  "key29": "5xoSBk8GuV9v7sdkbRFPG9pam4LSDW4JYHNL53gkKF1HSZiVmPnjSmXa44i9TMeQ5C3VZQbMGNgXozaWjWgRfZ1f",
  "key30": "MXvrEVgfZ3LRmsMty1u4M7PWDc4pjR41oXKuLJFtGXyYPQP2Q77S5xjFRDpvyMymhw7KRc4zTTe4d59wTwwWrtN",
  "key31": "29pzX9h9LhieVdeM5srNexSVkFhSNtrGHwpQ9QtKnvM9EhvqaSwKtaA9LW4D2XqSXeCT3Z4B64qkQyPFMV3JaJBZ",
  "key32": "3VDDURo9EsLgxqfYLhmZ7BRAwRkbTF3mr3kc1jzDtqJSChz3EXX9YiUy4cmwjT28ZxRyCkXDdo6pnbZbWEXomhfj",
  "key33": "VVa9qa7yCUs4eEbwqCrGuuz1SAwjvKJCUqTsdZfQpPkyGctsGqWCYugd9vzan8g7VHbYqjVm63PhLB1JjgLCZWj",
  "key34": "4QESodyKVqeYborrJJ43x1XbxabeuPzdU7P9z4TcUoo8oU91xjamUSHRPZaK6PRZJPwq5MprMkShddFZ53PP5FXK"
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

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
    "34BCL7jFVdGZExCZSrhfgxLF7nPzocHtD1MuMd6TBhzzJmcq7pM8DhnkF7dPtXP6SiTrT7KkPqp5jJaGkT6BHzwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pw3HD7CHxz8hLSRBKpLTnhoWMpmwcoJuxjEWiQQohwm1TGaXzaK4jRGLyweABC9UuZvzD13YWXjy4mpduNXhQvq",
  "key1": "2BeZiZ2TpDr67e1iidd3KaSuumUeMJZNkku24wZXEYofhsmvE3wmFeDgc27vX2QVXSN4uLh4jCuL5qTVP9G3JhJU",
  "key2": "MKijtKfKeC5Ry8fjJj6mwsRtoiActYogCTmF7nHTdZGCdQmy8JqbVxraMSxgJ61VoV2gLPLZb6n7tPcHWhqCdJb",
  "key3": "4yLJmTLhmJ6vgdbw6y6UzeQEwdDANKBNq3aReFyUCKtS3DqnKzFzGRxAjNb4cfAYPJf8vMCKMgXWyz45yckF8DFu",
  "key4": "2eAEZR7H23Qxna2GVUFag5hLsxMKYVwXxykEd5C4xvGc1GzWXiznCBqDpFNidgZLBYY16iv3NBAPHNBLLeLcqrb2",
  "key5": "2xi3ZP159LgCWcEzRk3sofTycJpbimh8nkVnxw6dMNrogtUwxsMD8T4LvzbYDXXgsFuVXpEi3ksMqyNy8XUjKp8c",
  "key6": "M8A51WJ8Hivz96BXJCJRuPtbHmmPcVTmJQXkFBcQHKmY2NZwFSPhSDgVuvoQaS18S9qUWKLPh51nQAvLMVxwCSF",
  "key7": "PhbXumtxiprrhr1qikujXgZMPG5mPiD1tbxSJZGtdGcGNdt5qHzUp4k7nPwZDFKoU1nFEL8pA5ZQaMcDWddWnmC",
  "key8": "8VwyqvV99TALE8YGAmcNCZm8m5JaMu156z3c8Y9LFY5sAnP2bxMQsSGpxZyyqe8RBu14ZtdM2n7wVsHavFC3qE8",
  "key9": "5FW5X4afz8FteQuy8Fbz8rj9PAvpeTJUiUup6mzW9FF42LKUgMAGko1sNnQLJ3vzXsxauVptboZ2VEy1YF9Xzt8G",
  "key10": "2rgQ7Cy5Z94jHtFx7PZvQeNR8KUznswCv56cMgYEwe8RCtrGS36vkLjH48QDkCkk2ptGiuKWDkgwxGQMmZzS6NAE",
  "key11": "643K4qVXdda2zguxwHCJPEnmzMRR7P7n6iVEzGpCKfvtSZLZ3phfPJonxM1GKeXuapUfPcP7pjNwMNuwUGEhJUrD",
  "key12": "3qN2m8fX1EGEHQWKCKj7jReavmkhYiBnyPgSCHmmx9Wz1iQ7QxdHBYiKdriGybtGD1eN1Z2ygWpZbYxB6fBrRVT2",
  "key13": "43TJmjLN4FSkeM3cXEJbmC2yNc1bsxBTDkBbPqbfWWtnNvg8qEsG89NsQE23v13Ky9usuzRUYF4NZzrd6qp14hJ9",
  "key14": "2qZNXsT1oTRgWFEfZDXM1t1am7MXjsqJK8zzkQNcBuwwmPY1zDPYR4sgnKLyfLvf278GmMayLrjg3HFA6w43MDye",
  "key15": "41JHmvEwTfnrMZgWiLnu1Htn7ixFMSYa9VjPoNPchajf38zrouDKt5oAME9hWeexPiTKTtzaeSenMkq4sQiPeccJ",
  "key16": "3XaF1xkBfdATHQ6UjD3rFT7eGv43hxFPv45kYzjD2b5We8xDjHobvosNR1NrN5mmWc2j1vyqF9UXKbrczupU5Bzi",
  "key17": "5VTMc6yaqTViQp1TxvPgKNfR7ZFpBEKeJdxi1ZQndiW312rYRLFbTF4GjapBK1U5EpGN2e6ECoRWFQc6BAnKdfQW",
  "key18": "AH5VRXCJ4rCkw7Q4iKYYUpHXDiLiEUUhG56Uw6x9yt5ui4eSodNohVwTbkY9pvSysxrKAGZz69CR3V67HndKuvA",
  "key19": "gHQcnWLpGGEAi73uVpBu9mtRoh56SdZ49DntjEtJyqkyeSmWpW8YjFjuD6nUxMte7Dw42rv7f1SKh3j4WiKB29W",
  "key20": "5N5N4eGhZLCuGsrN96JjhaiLgfipacGUu69JaUPBM3Kog1SUDa5rbDzore2iWmbH4xLSWWePZJCZMoou8XqLQd7k",
  "key21": "5fDmrT6jJxVcvSD9Ggq6gVzzu9opc7EsYfRGNpXphDTemrvR1yajDGeSuGhfWjBNMCanvk6UFqSWTA4mjqwENoip",
  "key22": "4QcEpnJ2r5DZzdsUYtYZ534UFZqH9Mu6ApsWaNkUQTLuJ8Yifho2HCqpUpBu26tyAhMyZb74HDiw4urty3QJccLW",
  "key23": "3t9uZjhmdruXUDY3hsXKkFj9m8b3rjScfdCNz1T9TQa8m942nEYLB75dQiUPa7xxxtFtR1f2CfLcgzBHCouHaa1g",
  "key24": "5JPCp32sTjGR796MpUY7xaB4HJ2FPac7448pNo8B1uGbjxkgVdAHAr6PPMfU2Nywoiswwuan6hrMjU5AQf6zxnEZ",
  "key25": "UMREVDCvPsZUQHrXb8mPXaLd9FVry7E9uVYt6AoNDoefdX5ex65eJH6bRoJJ9AHxPGEG1S8Y71DbwHh6cf5qLCE",
  "key26": "2LDwePZgDiB17FYGHokk13VPs8wmGfbAS2LunHgWvdq3VVvmDFycJeUSTYTdq1SynkK8shhLoFfuZ81fvTBC8AR1",
  "key27": "2EAfhUCo2CLyZWxNGUBCNSUMPUW3wqauHXJw8jBUk6ace2T6keEqW8HsswfJqAapahoWNeoTiTpY4fcf69fDfBMs",
  "key28": "3JXtj3gjKsHvey1UVNoSfu5FAdqkFhj8qxLYuLbUmm7bjK3yXjPhJUcwAhteJUSYR8jdEbvQXUvQ5Qa2Ft9S9hC7",
  "key29": "3xNngcgxU9kBxR1LjABU6uLqHGmA1Z2En1LBy2bFrw1DA1KC293UZdR7WTYQRumreR5zVSPeKeCcerBvXTNTNWyH"
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

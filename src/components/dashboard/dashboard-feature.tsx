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
    "4d3KbYtUYnsKgHJWEF7NS7n8uoRRDsL5p3NuEHHnHuLAxUdBwRyMCJEqeitk7DzR9UTHui1PecZUXj5AxcpVEQQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rs9koUapXKmV8Cj1MkMcPC5FiYav74rHLmMRmFRLu3Rr8mSNy3B1aGMH5NtPHbWvQxqGkf53urB1YKHGmG34bcZ",
  "key1": "3fni4xyuSNrjpJ3URkBsaHn6hCBAVDynAxAYNFteZk7Trd1RLMehD3MVnEchr5GSrKkBHwhwyyq2yrNE4ruYSzV1",
  "key2": "uR1x87qw3VUMKEMP5YHwEz5YjzMmi9F8o8cfJDvo6egyWGrd9FJx9X4AVsmrFBRkkbjVxWFdZuMqEKCu7hViXLn",
  "key3": "4uunbg1gbhHuo1nJoD786HSvRZqdk6JCMvYsdQ2L5LVRZUM9Xjzz8Q5ptyHSRNuG7fN1M4eHdgmZ6epXHXj5qNyE",
  "key4": "2o45ehoVpfwbKQjpFtAXPxR4Kn2j8z2VX6fRkgTAzuP95GGpcXC7eQhuZezhx83ZmcdZVEZwiYyMSxGfYQrv2tBS",
  "key5": "4LqobHhfLM7fY7wA1rNch5AFwt6C5WBjW377p6QHTEKxMxbSuUZPr524P64tZxTZgWvvztc3gQEBH8MzvvNE4Ycy",
  "key6": "2KMtLcxq5zgGuqDHQT4Nupqits8MWxS6ymfPHVUzanBQM7sjQLMq7GW3KSeGgCiX96fy5Ae4fPmky8YUCRtMA5Pe",
  "key7": "5yW2mMVYxQ9JbMW7ezntHWZueaJaYPmJgFLKkCC57viHGMCMWawPzuRDwqAajf2fm9kHuaDgRc36GUocXz9hCjJa",
  "key8": "7KVp69m4HXu92zFke45qet6e2Fygv58AytidhgiACheszWz6oQSkLe5C55TjjTEJJDVtr4HkmrhqGXH5TRuYV1v",
  "key9": "4Xf34UETod4NAQUia4kieR611QbxdKUhRxyaKzC7zJRL3aJN56MwccXqo4cJnak5jX92qmbD5xLpqJr4EKxqdSAo",
  "key10": "54aJ1uUmjCeBQkTT4N7zF2QxTu1mp3MVo2QTWKim2TzbHynYHm983doP4o3uN7Va2h8RD5s3otxG3Gu6p4Vesae8",
  "key11": "61TSwRzKA847eg9bQ3EW4BFeQsxhJf3rcqKA7RxvbWWkjRun11MufhgE8WcrKbFLLMb7NykkN94TTp2fsNsDq7fe",
  "key12": "4LfVjxnPrCLRCZtyiADATgo2iq6H62sE9FAyRHVRdoWFjgnGWqfWK1shFgGLzbWXDys3rcCQKGuH5uNTUcVs1D3M",
  "key13": "h7TCmzM2r3t56qvSb9eYeVM1u9itiF78QmjXpNU2mh5CQhU4NWWHHt4ZPSLzA33j1BUD5YhSPzP8W3pbx7MF5XB",
  "key14": "5p3HznfgFcpSTF5du4xggBFjFP8nAEwjRE69WY2K5YitasBy4BdiPXUsbq4NXzWBi2VcUJ5z2agggWER7F5FoZYk",
  "key15": "2EPZex3fYnQKt4kk24kWVHF2WfpDnpt6z43UFYWpovdd7DDh87BqbWGeNL4xMB39bWwXGXASPnjMY9uZjoedDxCm",
  "key16": "499gQVxrDnmy4gfCfKXuV8i631LUTDvCtFr9HWEGmcgMNeFqNdrCifyo2ffWMWqJTGkfiLD2TApA6vX5X6XWXb7M",
  "key17": "3Gi5cUk9kA2T5uokYXQxJq5pDo49SkiyktwuMWFPp6hpLCtVZFig3GwRm56bLLZCLYMN4mCQ3mD1mfLzrPXQouy1",
  "key18": "4sJeMWAkEsdSWqs42GYqqVhXHAXEubo3wFDtEs42K33ZhHGA1R812qX4WDFkAesrnd6CWMdQCHS2DnjjZWMaHbmq",
  "key19": "5p6oTL8cxwetxyifTozAEZoTHhPF3SbBAjXPA1BT1KhFeoBgfSmpqBRV32kz1MPhPj8YYgg3h2PyPuQziTtDpEYN",
  "key20": "4daYcMTGnhfxTQk9chArcYHA88APySV8MXAkB3beuL61E166pJZpqdB7jdhTqd8Ajw3QxaLvhRn5HY6AUpNmCFCL",
  "key21": "5P8X7cpgNzVwoze4G14qdL4SsynSy9B4bfnCD6AvksBf4pYt1NCvzPozrfBSM944icLtByvW87pGMdkPJu8cDRey",
  "key22": "5nHeJvHtkhpWxtUGRgxKsxdqPmp934Zrg5LgwBfNmMc49swHhAmdq96TcnCfVsDWhRXfrgqkvdeNTgVcXn3fQeWw",
  "key23": "3wsY2zXsFuCK29Q4rgRDXDsViLHFjy8nLEPVTtYBtcjS7XXhLYKRU5mKvScrRzJhHNvBxQXXLwJYCHZke4sbUJWu",
  "key24": "w38hXFxMe9d5WqnwK94vHU6YphmhkNv7MiBzCRFoWLXKW2UTV4tHhwWqcn6uaa8WGKqdwNVa16pp1tatXHUbhAe",
  "key25": "3BURNwKZKLNeMiVgbLwqqVTi47K5QGSWc3T629VpwcrPD9VQ8hVCqq8KrikammSgrbT3WrPcQbwaPErGYFCcqTK4",
  "key26": "4TesSLAnnCViYptnbCeqpGCEko27ez4SKEmsbmXqqxiWeKtgQ8GSqVoxM1HrHsEoVtgLXzEGDWMgy6pR4hcoDh6h",
  "key27": "5eaX8qRNJpQfAUc4EeW4zi6KdKf28dX7iXmnfsRMLcSPbLP9ETEeT6c2nBTegnYTV43Ebq5kD5AR2fX7LaTn4cWY",
  "key28": "2G2EpmaH9ssdn3mhFGjkrLJ9t1sMfPbWCnN8uHBw3QdtbYMsVYgGf9LoiAMbf2tkj3GkKMHkdKNKCs85tHhRrfpi",
  "key29": "5zp2LBVqoDFJkgPdo15hxsPPszEvZzbmnA9aait6LVm24WZW6F2dWQfYHyn7dFpVCJjJJRizGWCn71E4qnGZdsG3",
  "key30": "3cvpwRNZCPx2YNsAZGSVBhShPeWNMimjJRp8iAkkMf3s276SnMbYVj2cUGANaFt7YerTTjBLX23vwiWioU5Pyqsx",
  "key31": "42hjjuMipfe7ceDnJU3UfFsuPZZjAtvo9EhQvTimzkkipwZKJqRwokAeB2eWvb6MQxUzGN3FkoL2g9UVsrFBxwAG",
  "key32": "Au3PVSFfGYf7d47ovFcem7t1peCBWjAhGpf9RDtnWahoiZ8aMYRkupYzvzitt7DgkHpzrkJRK18AVNmnEuNuwK8",
  "key33": "xnkDAnMRbeJneXc8ioGdyxDJmqPgpn8aZ1pHioSudHNyZbAuftCfvEwcYBZejMj8npBBrTqPzuvW1oWRSsFXQC5",
  "key34": "4QfEpbrJZrwYNEZbv7gLwtuapPhogKAL9XPtkNkKQtjViZe7ZZuxunrhfbe3euehyEDbULhrddV9iehzGZxZjGEc",
  "key35": "4CpTVvY5JYpJSLNQ2aG1bqEa3ZbosJyxTetNXHoJqw5G3rYVnaebqGqGst9PirJnEQSvrHpZh5BJVo6vVkdEs5eQ"
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

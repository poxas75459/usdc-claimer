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
    "3HsXVFGsEfLFjHZpzxaMfFbMqtkzjnTHK58q9YUbcTa2B3Z65CfQgFtGiMtYLkBAe8ufPzMSTgNkitu7kYfZhCBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjqsZ9x8CWU5iFY4mggGR1gSrf7r8KpNHGLGZDXEeQe5sqty5Wj4mZMarK8L2iNbSqc1kBaFXX1ezqvbevmRN4t",
  "key1": "5N7GPZ6j7AZaedD3CUNmJekka56VbxYYaC2e3sgq4Zg3ryRkeGAaaBQvFx3yj7CzZeCkwZMnwuV31njAYCe2rkh9",
  "key2": "2U7sUnekNAyz5sstuvUNeAvuTfwHU36arA2oNUB4o53pHP6fMYkDaZTCMkRTfU6P88BGCCBQEqCGn5vdv55Tc6nB",
  "key3": "3k4f91nQDbMstxHxwKJBpCKT6sP5PbYTq7RCnKBtTWQHaPJSCiSnZ48hu9jHqghmJPP4BerB2JdWnVUv92Fo2qTn",
  "key4": "5axHEjQumxeNGdwXdGgG4Kr5j7WgGSsrxEAgtbUJP5NEPYj8qjo8YFkAy2dxjY4kFE7arPAL2ec7WC6Rfp6G1wUs",
  "key5": "5EffZNidpgLeyy277Trf9gVN3sW8RSMwgyGczZLTVHXNeV8MKx6DdccpKxi7ZgKKwyhrFzzmkjecSvsgG8H195LG",
  "key6": "43HFkBxU423WHA7uyC5UVqVyXpNV1mTNkRgbKsNDd5T1nzsx7gwVrohGRoZNCk2Fjgyjg4DFWmSFQBSvA6yiGsc4",
  "key7": "5SwPAxdsFReNHkWUHX8TkHxWXdBsayzgzBerbZQhz6pPNoAYBfbLh4UeRc5ALq5yoJ7zZxmCzVkkCJsY1dmZffbb",
  "key8": "2y1WDPp4thonPyLpvGgvUoXudftpYXYNueUYQmE4vdfVXz7hbLrVWAVvxwpMWZmU5RxjBpvKBPU4ggoA2cESpoZ1",
  "key9": "63RrEJF2jtUghmKUtdw64iWuF9o7yvdbmtRYPpHj1hWNjFDSfSfjKkTQUDdeh5GhkFFAusuToHFcc4zFbxD7qLeh",
  "key10": "4tkLgtG7r9qt5VRo1X88jCzeax2adL2cjrrcBHffg1WkSh3d9v6QuYSQQCWcb2FrqCizuA3KhZwf6p6ZM6Gqio2L",
  "key11": "3q8j7sjEGMUi6xxDYKDaow6H6SbWLsmJaZAfpnN6FyBNHG1E9exLzw8R98NF4Jmu2fGMNiLFgeZVb9K9KWHEJA6c",
  "key12": "3MbkKiwUjevaPfsHroZb6HUQNKXrNwRQMKkRUcWe9Pv7VxYm4xHCp99gyHuDfactZWtZzLXtfo8BMATmnDdPFA4D",
  "key13": "2SeDn1ahHNDSHCMrKzgfLMEAwgvhujoqxCW5ox8QCDjvWyuztfjUw8uSnZWbFrt1tm6uxdGWTVjSXKudhc5nv4oY",
  "key14": "5saXbzPViKENkVMVxDc5E3D3CfifvkBVJ67WEdHqYR2usZfm3u9XXdDVETnUB4N1z51rfSTfPnB47sDKSTYV9Zaa",
  "key15": "3Fm8qch8DU4vLbSdnGL9fuP79Q1dG7TU7Siz1k9AmKThcqi69mBa7k8c7317yF9B96JXSMJgtnai3757x96reTp2",
  "key16": "65Lt9a154tGXins2nCrFKU2Q7t1g5brYeHinxb78do16tFjKniqfevs2jCBqdrr2e2YK5c1CtGS96uTStSmCWNMN",
  "key17": "4CJE9cFHMC4SaGz5GU9ugu9eSccDEVeLavpugWFvWWSAtvJYAZ5K5oxgLRLz4q9JS9UodNvqQY27VK58w7yLAjWd",
  "key18": "4kR2PpbQEcMRcwHRvnayVoEBHWdStJ13F7uzrHofYL5fXxK4nMgMBxeHpYGmtNfc1sAd1vm4ZY4Yt8jk3A4VJHmp",
  "key19": "4N6ndwVA6c7ZdW2AmBF6isqyP982NkeJxLy7BkTcBVBtyG4qM7aCZPAFvVN3NcxoUuB9umTPo4DqczpmG2SVMSmC",
  "key20": "3ex5FovMFXjDEADnUuseeem8MPr6HAEFir6rQ57yWL5N7Y85gtSyhUmhAuggts22wUiMmSDfcVkJVAGyztddFj85",
  "key21": "3h6bQUZQiKQVnSmvnDbpXxrKFJKjqH3VTgRRaAKEeu2wrpTDVQ1GKNyBSV581G8HJM5zxGmKhXrZeRS5Vkr1xdV4",
  "key22": "3DSqCdUp14aX8yLN4BpxpBtkhErKhuA5xAjjCkfFqMJzALNum3Ev7HyrGQ67GkMWEXftA1vSdANDZDdK9jbX97AF",
  "key23": "4xBm7NBofR4SfED7q47KqKPrMctqLty8a1sy71iFdsXGzQWLmtfL7pU1uQXpGCrwdwsHWHL8ezJcd8cgHhFyegsV",
  "key24": "meiq2ny25sUwzhm3o6ZyCV2YpmKZhf9zfPA4LzsBVCywJvUQeptFMMfE6osXJ1wmChNHokmuzKJdewDLWo9e8sR",
  "key25": "2ejc8gXQxr6ZauAazvCbSNiBwRZWubDbAAy4FR288bsYhZFmy7auiGT3pRZSyvb7MgkGAfnRDa6iFsyn1Kzz6fV7",
  "key26": "5q7DA7jUHEFiZY1Y6AZMAhK5CNkK5AVeRUPYbeLtvjrqZWm4bSTXb5z3kyxVwGmySitT1RQnXzoN51BWT7cJkw4P",
  "key27": "5rqkWB72YoaWMjWofxWrwPZzyW9zv5gqQAa6FNoGsQBdioSUpfWXHvCUN2LES18kA3eAxoaN4JUmhs8Ab5TwhB9t",
  "key28": "35jE9D1t73cL4rcxT2ZvbkD2Bdfmmv72rQfWoF9DLfnmaXmEBYKSzyUKiQCqWQKJsqEGMDYy1VCszN7cwReu23JQ",
  "key29": "5Dhxbypq7JLWjaYoXjTWMNThGQgBisLpJ4npoGScAxZrLLBZaSamxaBHxdHWw1JuxVKhFwpn3KtsXGtKEWaaXLH6",
  "key30": "2FmV1KUUtHQ3BWWR5sywvY2YnZs38aGV7uc14x8GNBGCgcBi7EMib5hw2JAfBYUWQnXQFatTvpZbk1e2piZjWtyV",
  "key31": "4gBm2QaHSv8JgKTEArsRcJsNPDTiJgn6PsTRkZwKL8Q6fn7rX1BbSrcdqP5pqGb49R9Gaxf2uBxMi65UkBWi3Lvd",
  "key32": "5QxswqmjfHV2YXdVSBCgiYzshbhGopmdRDSCU8RuZXtfAAKn58HKXmokzg5VtuyRN8DTXESUV1Hvqom7d7Bwkcy",
  "key33": "FzRGTPXZ6foLdM1N61He386XSDrAwWWs48NCcrn9x3iJfHxrudEHtY2GEDedC9o8FDVKbUVciFCa1DUeKYvyTFU",
  "key34": "WAe5XUFq58QFu6kyj4PXmgUuUzDvqMLtwX1KHLDdV7HTLGaVZjE7gJjY3BNhGmBuRnYPkUj9NcyTQqJCDeBAut4",
  "key35": "2nd4maHSNh9fs7yuJT9hADmG6AMf3jdCh4hyA2rJMqxLijPFhon89nbQyW3EnKgCAR9PP27Cf2sNQeForyRp6dZe",
  "key36": "3hpJ53QCqiQRnmSZPDLQEyP2QmcWCUHGSnT7k12isVHFuzFwQ2PQSAnFTQNbLT1o4Ga1cWgYHcA6aMFftkjLEVMu",
  "key37": "4kMuWb2V5gxMQ38tTHt6fcCf1tkUZUir95gm4RtiuisiQ9N1rGHYQGkZUp4q7xSCW46ZLxKCsiRTFzRHKYfuS75G",
  "key38": "32AtHNC9MpCvLNUPk59HoGQUZviRcb1qCMc1Cn5eGfP2tTgCvV7MiAvZgWfnbdooZSXBPjBmBowzWxiAzzQrs9zV",
  "key39": "3jHJ6aiEeL7ULBy4MumxNkETGKqVhCJawYawkGsLXbGJue6BJUezyxDUb7RyrLiDqF3XfujyH1PEWYis6U5GKjz4"
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

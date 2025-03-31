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
    "27uxVcpZznaJuM5Sd3hn7V222TUUgxLaeuae3SqF4PCbMeXw36pShAWHQgYj7KAZWU5Db92TKeRM9J8e1YM2gzso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Si7uBce8vc43XuRsSZLLFkj7r3dBzYbayiVH34QrFDozii59YkERaLjWdfqoA2FmkbGhVmDRBKdxFnNxqvSSZQ8",
  "key1": "ZVzJ2tiFiNZjTpJUx82xbM7Xgn8GWsi97UbXt7GWVLurNpzvGM6Wqyn8X1JwuZ5s9H5fzzn5EoFB7j931aZxf42",
  "key2": "3GE2Di2JNUAvW57v8o3XHgwdobZBE3fPjemrGcPxCJF3fZ8uWCnHKtTS9hyJXxUYydcWdZp91s9nCwWrXdav3DqQ",
  "key3": "2ABnx2hsG2A5vqHDLhkAyteHuzGGPquBjaePu1MJz8scjXwFsRLch1FVQ7yNBSCSdiuBGx6uBDzUfUJzsTBHka3r",
  "key4": "3AS43vqDhDWQ4CWFmdX8Q5pciRiyhdqFJHs19Y1qppQwXj59eFEe645fb8XTXLvYXt571DcAu9E88wQPaMyarG8V",
  "key5": "51wtQRq3YbxFQ9eJTxV2wSgg3YV4dkBttvoVbg9jZohagfg5VWLHYH11iWNwNCdfzULYyHS2zCcntLbPpZfn53W3",
  "key6": "QSPUSxLJKv1ATbDhUVR6t44VJrroRPjxg6ViM3XDQWxUATyPKiPxp3ysXpHpf9gBbq3ksDXCVjSCXwcYo73Ujoo",
  "key7": "b1QJ24wqFomxboXFYQCwLAjU71mKygmFmVKEwW5DFosMZdVj7AFwSFbxzSWkaAnSTb9JojbBEB2LrADKH7eeKFE",
  "key8": "2YyoKifmqT1JZ3rSuUTV7CNxitLFmiGZv9WTzLvksDqBc19pSXRGfH448gG5erL6nSQxypq7MqMQ6i29SvpzmyiC",
  "key9": "2zGC9uLo4vEc9khWu5PYfPHaguy8B6XrNtZG9us4JqrMKWDT92EE6HK4ktFGZUCqHhGAjiVNbWbd8nosQrfe73bU",
  "key10": "2FEabDXAJXJEcmqkyaCbMvZktaba51EjGthpH9Wo8NryB2zs6rzKCJWXvBnuidjh1ENVdYzqoKZ2sJicMVBi1d6W",
  "key11": "nqDxm9wYGy3myjvjtLGg36AWwG16iWEgW1C4bdFcDnRjYovizPGA1xTAxqNhB6nAbyr2adHKyoBtH6KEQEqF7b6",
  "key12": "3mQs9PENu8f2MgnufG4HvHYqNQMmutXHXa9Sx49P3vqyXVS9YCzwumdBi3KJ58GhTGWwtaBa167vY4BSiCcoHTk8",
  "key13": "2483nExJMaDhE7G7Bq4VTa9T3NXV5MAuzZbwyTNAkrNkACcs3JQHso4jRF2TTCDFiGqD5dv2RwdqaYzyFRNcipvZ",
  "key14": "3qvJMdyiaKhCWJUWPVPRzHQsmRZFryjMgdoZeH2bbPemggE7iGchdAdSgQfC7MjEsR9UVh9SviytK192hDMoZbb2",
  "key15": "638ja6SKA7DaUa19JQBchjdShAPbk8yYVfGVKC2ufb1iGqQhrAfe9rxWRJ6ANdwVi3FrEovCQypKLAPik4bSXMxD",
  "key16": "3nK41kErEYhu7B2EaKJ3iVCNGwW29Nm77BfYAP8bwKTCG5uzPATQBvkjyRx52tkRidNG5WaSLNTVCyPbaj2bmZf",
  "key17": "5BZ4M9bhRrUHzf1z11iXmCwqxHSy833fL9MaNk1t225CE8CL6wNQfgvdNwTDMsujVUfRA7pWr2i4ZfPWEGBTMYdn",
  "key18": "2i1UyYrWHYYrh4KHr9N8aAYntdUDgrNmzoAeFsQXVSiQdNm5B8DtwCPk4wK3WevDtzpY5xhUV5toBi85WHutG8qM",
  "key19": "5jUBQwY25inWoNxkappdnAXnu4334JfZkn8ZddPKFB8p4gB5QctivkyfUbg87QduvEUNDR4ETJmSdxSPeRNtYJi9",
  "key20": "4unQHndLUokXHaycdn9qHEqgm6xYNCHRkkVcccN7FaF7kSvQrzbhnHhgwV57T3Gs2eAECUSGeybqmy2egAouHdCf",
  "key21": "pGn2Zp32qhgJLdSvkQQuevzQdgBuc1fgBKMPSNXjWfDoZ5BBG4w5eNaFArjCPH3Hr12M77Hv5aV9LMeNScNUnqx",
  "key22": "3h9x2h1sqGyJRhzktpbyE2Ceeq13kbGzK1BxVBvJYjCDXUXCkQtAeNfQXaH2aFnL379msNLUHEgAvdbNjXW7JSNx",
  "key23": "57stYnkigsqT5acvutJjsiSE13SmcTZfUiy2wessfQHTzZMnEXVpMMa4u6ES1zDPJmCDGgXiK8aDERucftZ36AS",
  "key24": "65yQiQBFQ166862ZFccBW2q2M7axrvCBTzAHLJa6m5KFozzRVLoiW7jYpuD2VKQf3TRxKBukc2WKeN9MhWfDNfBc",
  "key25": "4Qof6Ti3CSKYWBE4MXMwp9VWk5zXKhPB5UnrXtt2kWfLvARBfTPiwn26bpT4LRsrzxW4Eqp4qMSoFQf7caikFbbY",
  "key26": "2vX72MqXQ25JrSmJb8iMSErTV1iT8DQUpHPiy8wGqRuX7pwzVDdLcVWgi6vUSGwa6XXYu2Fh5MjiCLQgihcr6c3L",
  "key27": "yRkGVxT7QKHSFnwEpeLEgr3fons7vYmb7C1p6dPYbwMSPBALtj14ZzQ8MJMTDRGUesR5aP1DPXHxV2SXst753eG",
  "key28": "q2twRPZLHxc9nzPkwxTcrD1aypLrmBDannLwjbjn9AM23pa5NKZv67yW17qqgEv73cNYpCQeDjPSEErDpN5J7ke",
  "key29": "4GdEWmX6qaEaKRXFGC5ykpQ9q2778ePgAzCwCSLYhrc5aZF4vp22ewGPsNrAXQjBcaNqusiCJkw6L1yF2z8n7MzW",
  "key30": "5uwRRXvPUyYJPTQvR1zE7L4m66Vk1jwvLkFVit1bYQxXVnr3r7Y6WnqMVXVkW7XnZGaBV789U4jpeyJGzL34dSZa",
  "key31": "5ArX8E8BGiXun65mqhPcD9T3qP7E7B99RZmEXNV89njKAJK2wxDDTWP1Gqo75aECNae7QgYvkf6tYQL59Wv1CtPt",
  "key32": "5gKdUw2RbtXz44ypXXUDrAUogim4GYUsBgBgEir1izvSXderXjnHPSUZu8Pirq2FsSgZThQRdh3CHG3jZ8Te9RUk",
  "key33": "spQQRrQAfhuCZ9jCGxgeVw3wnVMwMdHUoTmccRQdmcNY76wgB4Kpi6AAEu2gHFMMMZ5YMDfajNrbVEDVsWFnWcr"
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

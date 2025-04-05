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
    "3hxptK7Apcgz3ga6ExkrVJUonSPTrjTZTmDH2AjoGXGDg9F7xR5PncyQFG1UGqXNLYTZipWbyPXftdu9kFENoPjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBmycwvQNtZrkKWNQtQHCF8q564itYfjm6aRBtEza4ZmjanRRFERJHdAaGDxVw5poBvEgf4byB7u4bGR6K7ruXR",
  "key1": "2gUD3Jx6E3R5iaeKyg96SFhAfcHNLPm3FwbmqGdaXo9H1sNWDFRrfZYomHX6MYr7FFpKtnjHuKm7DrM5SwfxpLUG",
  "key2": "4hraQqvwNgmNLpsw9NFUzYytF7rYydvGZAF3A4aKy4HjmBC342cpyCHdAQamY7HWcFK8msqQK9g9pdGxWoNCKSX6",
  "key3": "4KMkLs1WhdFUPATHJTKZEQ4CxBc4b6oWMcqXTPrsU7SbypUUkHNnXDEqprNzCMGNqJ7w6FsrvKMxhfNhxcjaPfd8",
  "key4": "5Nebzxh3dLmcDimd3f5HNvSHL1KypCaSGYrvJ1pYSmFGtZKMEF2YPPtRoPPRbmTCEeh5RBBg4i1Fye5WKFzx89i",
  "key5": "2nHNFpKFRECYrKf4P87Xcr3ba2xkg7CNhnVQ2neDjJw4ArEb77KfyejhLG2YB1qbrjZhJyKnzx5nxj4JPVguyamT",
  "key6": "5qJQRXpFQQ6e2QSeERrqqgcX7Xz4qDAdV5eiW8d7AivtPrGx4yQ9m5cdaN6VBN7bpupxxjHBtFnNQhUWHLTg3NK7",
  "key7": "21SE7RtW2oiPs7jQMtAmt9sU3zKvbKbQofstrP8eZd1dEGwT9a4hQCVQvisYQV73tQYR3u8YJ8e2axvckBBB7fVx",
  "key8": "2TbYgdKQ1U2xTZfwVV9LWL7XM1nUV46zfk5b9QeHg7us7jKxrptnkeEXe22E1FxiWMV7xJ6mvr5eZiszNH7jjqY5",
  "key9": "3uWff25sAG77Fvchicscva95RE5zefgpBBwwWuCJkZnkAM3W2GazpmsaFx688dc2diKKddGbhJmabD1oaVaL3rQR",
  "key10": "5zTBygMHCBjEs7dAE4C9Ws69hqtiS41CdSUECzKdTz3XB3Fra4kxiw9rjmsttAB6igQuvKUW7VVt31EtLhSiTZZU",
  "key11": "3xsptePrKiTLZVBeXnxgETHy7JuCcjNVc1UHkU3VSbQqNbUf614korW9pXPPV16M7ndGSnjxurHstKLDNS3jBeCt",
  "key12": "9B8LoCcD4bCv4JaYcKy6khEr8aTaPBeEx29AWH5tQQvhnPkFzEJVFr6pQrsUfh42PZumPzAZhCzSZsM2d4v7nZQ",
  "key13": "2ZVmCFquZpntMUVvk5EuQDMZkAhBcyMNgNehxd7ZJVpA5P8jXMYC4i8cvf3kazj8sKxJtoBeTRDdm6AVd81PDuw6",
  "key14": "48a1ft3EDQR33QtuZBLfPnhRCPFvWigXnMnEbz8KtuanRcfozCzQQFo4T7LKBgyjobv3m5vBtefLHb8qPdUmgXeW",
  "key15": "3QKHM1FaQaeoY2X2kTYFpX4NaCfchY7xSBFd1q37y5wEFtVCJRn14z4DgQg574gqhNcx5QuY5KY9V9ms5ft6Xc1Q",
  "key16": "44CusXh457F7Cz7V1FD3MuSjJk2dPx1A2MNmmrMEfcf6Vs8yfzjNqZH3ZfZ6khDQxwLoQ8z6EKsvZdYr8ZCfsQeR",
  "key17": "4nHCrggVdpiHEsUsxkjjLM4SswvuGnGJCLfD9JqYDTNpGQUAb4nv3hN2TbsC2sJp7pEVcZxUJ5n3zfdWj1sFwStg",
  "key18": "EoEoNwjFtHDvWhT5XsoUt2MGFBHgu4hRkbH7xKu7bKshAVNBmZF1Dx2yqHsguAtG7DrytssiDZGyeapHmLur4Jw",
  "key19": "5rbS4g6hGo8ytAT41vQLLrSWp8oS7W5Vjh7hmjhHaTJzaxggkG5759eYxsY418LY6Fzwx9Zqju2kcVavVNForpAb",
  "key20": "syLxGbBrum2fWLnxz7HpGrcrSuR8YM6F5yUanQRi52EdVyhicLpzYwbrAZHCNXJ4MhxBu6gHAZ1MtQaFJsbFLEa",
  "key21": "5cbda48A4ET3bDrAQFc7ubkUh8RXA3XneBtN8XPCEjwWUhgW2g758EeYHyxmAr9eksCG9RkXvu7HsmyhYnjhJzNS",
  "key22": "U8mkM9twjH3izjiPRwu5GJfUmHrfP5ptbYeJPwLKG9vRH8Wc7Vf2ioiGDqQZAULJGZJ4Th6FadWAwiUW5H5TgSf",
  "key23": "5RAWVY3uivwpyP4Kj2ZowESp9dh5eEZZPzisz8K6Ryea8qAtRruiAn8XYo33k73jQ33XJsbKwq22cqAAPMB5FrLm",
  "key24": "636N9z2iCgSat496mmD7PJvC6MmTVoaHtDc8EVU4iULDsvLnNyfJ1TNqRbpZF2LCZBBHekdEZGmT2odZ9UpRSEce",
  "key25": "6goYNmfRBdnWGRzP9pPUmGykdPbZTzQ8arfaKpgCQFf44j2Q1CP2D1hQNNM2SAiy5cD9X6X373ZAUDvJaP1L1Xt",
  "key26": "2WDaU8L9Y81Pg88THpdtyZWHQREF7QYho4fRL8nWppuAhnXJG5xwEC7U4DJg9YPrAkJh9aGn5FzuvKK32bdeeHEm",
  "key27": "NcJfKkr3wWuMZtcfHGrtTBe3NEdhWoA4xPojbCgNanWqmSmBa2cYWvq1JbcAYvw4JkZwuxhV9Ak8Ngp85491NFq",
  "key28": "45VVBevzVPmkNtHkRurqBLWF78WEpsijYEHiMz3bH155zyz3uUtzVJDDhjk1MeH7tWDqrF1fou6WWZheKKfFFWTa",
  "key29": "4jA36tx5j3bieTrbh9KKfDzbXYjx4FQnQHCpPPrG9GFqWx85Me6nrnGJKCf32ckW53AEri6XUtinygmwPAyP9Qh7",
  "key30": "3UtVpJdac7VapePHkRahwBoNtY3EH17x2FS6B4ofWaR8e5ar7UCw39srCSikX5AtkgPKGAugEJRBwZ9ajP8jYXQD",
  "key31": "4YcAt1GTC1c1wC2deQmE9ayhchAWiwMp2LPj8AAXEA8EcTunJjd1k55XM8Hu3Qyc4dbjuQBopA9D3hF43ySUGRs1",
  "key32": "4h3n2ArjsJx3Z4aBgXPndNo9Yr6ptFnuhdXNJuDoL8aGNkeRhFVkahy8tytT4fN7ENFPxT7TVyutAFwUdQJuhAPN",
  "key33": "4bkc46iGJZ8ZnZ5LpsZd3rfiarTyQEdRFEf5twrvjhGmGc8sM6trUioWp6CuEAVuW7QNLEijJb3bMsa2NKhKKcom",
  "key34": "4wHrsi2gnN3HhRWvTkyf2fWBVpr7Yt9QKHyKDJrY4DoUVAR7mTsGZBsBceGV5k5yFj7DbK2a2RCPMXbbwV5U7nfo",
  "key35": "5s1oDgRCDoQ8niYnGiAQ1AHjxFd4vJrNQTNT8mz5C3FqDd3LJbBePZX9SqKxYFuVh6aKbiQVRRkQ61sgFncGCvkV",
  "key36": "3xoa8fmQMpJtk6bNDZKzqzDoitGR56xSQ9UajppbpgZnhQvVMJfm7sFuxZzagns5H8ANpQVFJuNNvmpg3AEWSieW",
  "key37": "2RhLdyzka3WrAP4zxDUTspZkMwYoExsWq1JdD5zXbP53dofjBZCUVa4odMjf4Esz2epEun3ojM4dNxh2rL5TXdHV",
  "key38": "55eXUkYYpuMyts9uVRVx1EHTKckUG2AB5LBJNe9qqmuS1irV16DdVZg2FbmjrZn5GMFHUY2snsuzDRT9vPXQsJfC",
  "key39": "2GGPQbHjVPJMDLS3KnWD8drWGDS3er4zL3GUbjY21LngonnnHz1RwDzuPv6Q86QafDp1jinhhgYmmktVe6iX8Lva",
  "key40": "27EfqMA2D7BEXniJqaKRa49DzUxn8AHSz5L7TUzBKCxrfURqz5WEqRUWtU9QZscnSsnUtzH8MiR22QaSYtL5j6ne",
  "key41": "5c9WvYvDCZwsqbyUpJ5N6DDwyqKP3vMwrUtPvEAsdaPFwcTetNfNhJiZSXyDUfXUjKjnjqRvXqKrKsP9BEejxvAc",
  "key42": "34PUirPpEQjF7jjHQhPufdnLkySVeLXHiZrTpWhHReyob9nERkFFnsatiGfJ1zdkpicfq51TwzZySYB7BQhUfEmG",
  "key43": "58ZQKLCbYVyj9ReHwmkfbBG3zLAhBTbcTih9uUf3pL91r8o84LR4tdGQq9J2unW96eWz23DKn3VB3Tb5GZActCr5",
  "key44": "3SuebAWmRhwVq8GQC1Ax6Kmmh6EoJhhgUWKbb7bnqHQgTPUiy2eau2dg2wosvubi6WhTAZ4qGDeeraqd2173RjvM",
  "key45": "wfrKAJ5i8iJn5EJDEShoh47Yim6AaynddkZYjiULRZYCPoAjTsn7t9HSscEC1Z9kekJfkXL7NEfQkBw1LT8EiCS"
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

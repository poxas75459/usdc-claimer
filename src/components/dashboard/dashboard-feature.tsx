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
    "41KL1MXXh51JK2uU8h3wRPerP5sfgePfP3ZoY3ZsR85tAH51CoUPoawAp5KNcjHP4n8JB4DcbtoeecrEkTR1dGtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SN6Ks7ru2hUjKKpXaNrydDxU2c2ohKkhP9HeP2wbgHVcej5pMqgVtQnkfzgxeVz7FwGkDdraDbnWPJzY5wvPqLt",
  "key1": "5Cj2mBncmRboCwriBXeW9cszVaDHqH2tVbvkCFKVUGPW1yMKoe4WP6NvoJdscq6Km4pSz83TPXtZ9ZNELS1Azkzo",
  "key2": "2qugy9YbkYrqBbJLgNMgzzu2e9LkcpoBuaAtgkZMpVeboanpt8eNiLuznitZ2cpeC2a9vsyLgPBh75SJ4hWA65G7",
  "key3": "ztkenaZuHvLxkAEPVW2Mp8Ey3yWCPrBooi3guGEf3gxHPvuRD7bizTDYxkBW6MPXybgPN1ivf9AamVkwmpNHaJF",
  "key4": "5q6aZmHXYjXYNF8wWY1hdNz557UYC5KVPwX1XMnV5GVohTc8ZLDcHp7XDZREKiaWzSQzh1nZZYNp6yN2wGkPSR3M",
  "key5": "5cmm4VwGfzi2JhembrnwNzot5x78LJd5puosy31kRZuqkm1v9NgrymtjMefVPgxHJhKzwVPDQ817FH9zGQGR2iry",
  "key6": "EiggsfSCtivVawraruVTYiNP6E3nP38gAERZb7WZmatgg3AEHZPHv5QRhJ1QAvhHRMpUSmm2XrdpPnwgyoQVeXx",
  "key7": "3Dg9gLAr9QUqdAnKkZ6zcJbZGAn9tRKbAaeke5d8pixSDwpuC1vMJuKrzWiCHkCok2vqJSrh4gyPqr88aN1Aza9H",
  "key8": "XUVqCYZmh3JLKx3zoJAyfmK9ty5cFnzAMoJgADjVs49kJtP27jmM5RisM2g7D3HnzEra9FPyt2yB47YnW8zmg1U",
  "key9": "4yG51wvC7Rqmd6QJL9YK6rQoAj2wCNWDooLZDGUnELiYVp65QsL4KPmmBXoEJZtn3L8FfeCZXtEXgQA4kzEumxwS",
  "key10": "5LyxeSzR1cbQp2LBKyuzN5ByNXrgw5t6wXbZFgy7s91ojLi6LAhxBmgXRN6Swo3eZmpkSwvjDnJkjJX9qsCwArkP",
  "key11": "2UZZHs4YTsPNEbxcXc5gV7ugoPW3Btf4gxuWCX18dhU8vRDj4Cd7y33tLnUyuUHNe3QnFFDuLZXjzvZKJEwmYtd8",
  "key12": "E5eDTyEcbBY2dcq2B5nACvVruSuCaYFZTXSKWSpzmD7LbLrnRUc5PWY3VZkb8n64uhjKGZCfLVLKyu3wZuGbF3y",
  "key13": "5gaA4cRGXfhkHeCg2xdj5iYqS1hCTB5XBeAp9GGvET9h6ie6gSy8zmaAnVawnuQ6KeuQwxYW5HWrhr23FbcjW8kn",
  "key14": "3GuvudrSJp41BQUG2ZjTV9fm18SH1a8dRYN8Kcg6VHiTDNvZ7BN61gwGoXzUaoegHFCxbaXN9HB5FpCuohKnKAYD",
  "key15": "5D5V8zSEeqdgCHKMqbrbaXRDTwP38mSFJAvYLMajgRjmF2DNdLyBGyRLrcQM6tKby6CBmggA3rqejYG86fFvKr8G",
  "key16": "zWWDYFuPyuPEJue7MYFKUGo61gyUswCgkPv6JKbawDdCK77AbcoPLbLiqFizGpjxfgveg7xFthHJRZaV7W4K8eU",
  "key17": "4E9SdhbzaHtMFvqWfUnHenPWvsxXNeom4bSbES3ytZSYNoKXWffZWaCD2Qcsimxaw4uwnszxuoRSiy7Akkjvzchr",
  "key18": "2k2Tn5ySGfJjHKBxYmAk4MrMV6LD1TWact4F26QMEiNcG6pUTr7etKSijP97yXxPRBj9gYvTxUXAZED1GVC45SPk",
  "key19": "4MAEQT2pDvUZY9aCBNow2eZ2FmnrdRXfRFcH9V5cVQhTJqV6E5W8PpGQojFHjJbhzidonn465ShhHi27apCzDeEJ",
  "key20": "28FJkHXhniLbYu3Bffe46VAZm38kXc45QnVaVEjZ24hh6rrCBZT8x3Wq3GUYEKthVQCsBMXnvQhbvefF3WHbKCLf",
  "key21": "3vbaBFNUjhZiCsBQ6NiSgXATWgVUw5W9tYqhshXHQ1R2GA1gFVrUYJEh8ph5dGY86UwyAUE8D6seWRgfwArRBfQo",
  "key22": "529CT3e3bJe2P9Hnpwr43Jn4UXUbL5kn6AudkvKYChkfuR5oTp7QQrAqdHwYVcR8sR2XRocSYHhjdEuf4Jz9bwii",
  "key23": "1vXfn9pbCG3Q8b3rY5QpRtr9uMp58gW8XGRz6i7GQE8RXYneFAJ8rp98ukEWkZqa4UspZHzPwAaYEEWmDQ9QoVp",
  "key24": "5pqre4CKyBnPcyH5UAa98cjbx5kmeJw6HTwL6ps33iKu2bG7Z6i4z4iLAM7gGgVLn7tqzMTUiuFhhpu7QZ9DEqb3",
  "key25": "CfkLr9mXczHPUyk3CagcXrWWkoLXsycAwWPTqyWADowSsmpFJUiZVNbh8FfwEZ5w5QrAAXmntab8rrruGpQNa4U",
  "key26": "3Rjg7ezYtrwxqgHa3Z3n8vPdQcnwttMRtdgCA2pmMtrcdBJXsqPJWvW7d7TLDNMqRsPHtyMyQfc2BCrHH7JFNJCB",
  "key27": "65hmCGVL2hoXY4cQMKygqpQ5oPB3FqP4Cv2CnPUgJYgFkV3RqEsMRQPvXeDVpwvwqA7njz3g3wSqWMkSgp1et9Rc",
  "key28": "3jCamC9DxPb5MJguHS6p2FdBNxgTgWG9J49Pcx5T7WaBzd6yzeZVrz3BkXytYNemR3163SN9xGPntZTMf26Xwfg",
  "key29": "25V7i1WuGDKpbjk69MHwpNMqjmKpj3xADX5AAdtGn3xtkZGHhRoQbBDjfgnrW92NSB6wWLsWaGCBxGKD8kNeRF8j",
  "key30": "Ka37dtrynq9DsSVuRdn6nYrrGKLrYvyfwGA5qRcB4GWWPuAfDZVPaf2rsuSqWN8RdqLaAFHek3gDhEq6QrcFKKk",
  "key31": "NNEcbdPYhaZigPK7SSymeku5gdNsLohqsUCjW7qThovqFtCFoAmSDFfNPopdeanNTYxyKsmeAVaaQFpnyYZJVu8"
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

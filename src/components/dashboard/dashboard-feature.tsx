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
    "2ERVjCdhhuwZLGxav3dE4zFyhRK2FmQRuqr42XN8SPyCKyE99Sz3SmFd2BGnvMCctppuWRTgK4Ls62KQ2PUx77DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "254XRKHnmubhqEjcv4Th2CZWzHi4tX5XXP35bVdEFoqVS1VGjj1Gb24WQqFUCxo2xBad7yRxwxmtSh3y6QpBLUUf",
  "key1": "31SZVW6tMWAdh8YJN3m36paYX2K8wZbBvzEVuKR4VKEejsBTC649LcbV14bMYJ2nWDiNXvboRFLLabpqymSWhsTb",
  "key2": "2XxBC1b7pjRdjYiMFrraE3vCobe4JTYLt494gL7tPdPeHrePvYYjB8R66AzZ2gz53podubHwUdgUb8YxaygHFUQZ",
  "key3": "58KXpgWFDiFLizxPeGBbY2XsgYeNMd6eLXsinfTdo8zFTNrBLx2fT5kuAnHKpWcott5jRcRRf4Y4iZR996LucQ4L",
  "key4": "3nhH3Gnurm5jPvcPTqVkZmfNE5Eza3ZnmfXbts2tTeNau24p7usSwRuCkdtAYyYcfiT14TDcKW1fzDiMeoFzwtXJ",
  "key5": "5HLz3WGKDcWfZ25ARnzPAiiAe1Vr5McU3PSia1stAFYwoVFc95BVPwh3RuaQV3FBR9N8CuZipnNWrEGuBmPJotGT",
  "key6": "37zyNS3xYcgfNcAFEPnvXKmQFd1nuHfPRawH9ZPZYEvVxSmJwrTkVbvtUhMJE8tYTsxWgYxuvc7AK2bJJrbpzSfU",
  "key7": "nhrxhhVRZyD8Pm5YVRuojmpKZgPUoUWHB8Z2Psg2HcAnvAUPv2SXMxaypah1LEdwrJCQ1xsftoXBTwdUQnU5UnY",
  "key8": "5KVbTFZpy3zz86A7RAeHrFh2fvR5gBTZ4FDgBv9S4cdv8gBTwiH7YdURzswGnXMbL4g9EQv1cQXGz4gwJ7sdHkqt",
  "key9": "5117hP5DT8uzmcLZMRQvMW86y7hqq6k5fZ2sTEsuMhRsDVZMsqohhFjtnHDGBNrk4wjnQYsuj8T6HZWaFDc1YnYo",
  "key10": "4ipBz2F9ALP1KTqcqaXEh9mHnpG7JrNhf8EBnBzhcaXHNGruo7arbqLmYLcDScNANdzSo4GhLWkz5KhNTFDpod1U",
  "key11": "21owpcXKZswCrFWt2RBB22H63HuKZGmBKQ9FzNtKH6n6bsdtAGjebrSAMpAeosmmNF2EeZf9a3coQhuEmfUAxbsx",
  "key12": "21eXxmU15TqP9cBB9q1bp4xBWMB8CvaXGrHXPzDia44fnzFog5RY55wKjRFcsS5ZWUVKLNGVNfmYZLxAQL3nnFcU",
  "key13": "3qtC16PK9QX7v9G4oFVi3Rd8ex1bXVnZEu3jKhBEgHhKH111TSsHoTwjzf5ZVCgTYp1DzVfQ4rHTjrjk5DKqSbrL",
  "key14": "4MuAeLUqUCAXJ3PTDqJCZghG7qgxZWWMCvjQ2aXUKzzGpGWWiziMLmEiSVY9UGSBaogYMg6y7uVDamnVZYYM17Qp",
  "key15": "3pbjmDGezcxRKs97Yx2dt2vqUeoDEKEe6erexpJc4g1BztbV62doaRTFWWXJxJFbgB5UUn5xQqN2P2yqDHYmXJnu",
  "key16": "3AqCfC3GmuUmBq2wzSY9DTkv8tb7k8wsFv2EBcnWFUWP1HhY94xyX3tMKpctRW6VjjPV3Dk98aicx1rdJfd5yog6",
  "key17": "5sm5XcN3ASJThCpHPtQiDnPXaZJ9Ho9auUJVDWs4c9vLvm5ud1xHWbJoe5Spp42qW1NaA5vQucF14p7icbHconbJ",
  "key18": "3DGxAxEbVLYJC6gtLNTJa9zskXGA5h75S9MAFFrKa3FHUeLgbYpig2csrz1qWH4Z73EMFD4agcQxbvKxPL1hksYp",
  "key19": "5anf424yqctVrUPt8zmdugDR9ffGaF8Aa4xabRJZ11TcRgUpZmP7ethCFqJ5bT2pRVn2MsHyvfWUvwmQxxdZ7XtC",
  "key20": "5X3bpzbVmbotcHEWQJ7MXtt8NNYbuQdK41rhYVFC7Xx7rqaZzfnHdhxr8UzJjU25byeNW2viTmpcqtUgEdkFrkhs",
  "key21": "4Xk87acArAGdhYSeArpWQ1YXoHSxXqHxcW1TQLArNJWmKNrHBMTWhGXyA7ExW2477LTWb9452kyZwfNUhnkatgNj",
  "key22": "3ZRZiZy7g7S24iRbYdGUEhL44tKSXsuMQhKr4AU5dQdsQnxHN3eykQj8d9cEBwMNkA9W6QZqhAw7f3fNSVXRsqDP",
  "key23": "4DzZZbgcKWrjtcinB4Ju6NM5GQ6ZmSoZgH88an1irXB2iUwyqMJgjD3QVDHgW7SjdZj96Lf9SPBYYuczcAndreLg",
  "key24": "wmjsbWRK2BWjvL8UqPUKsW345tx5bZFCRxcPoHQxNiDXWwxrb7HppopWVztRCc2JiTvDzHLV1Ji3RsAt6bPLuin",
  "key25": "5ZyQHgyyY4ZELdk38EWkYqEWHv2MxFM3A6uDYVu7rMvYqwvb4ddZbTKSAyZvQi4rz2mw9Fh7c3FdWi5UnaoD5cde",
  "key26": "5fWeKh2myEgU376MWnDgH9Nz7z3CG79JRR9HXtNFEcxQiQ6mPLQvCojKzqCwAFm3aBeM5cR5vTSnk2rJMUgos7jy",
  "key27": "5ZW59stmxaqeZz8QFUtQhadP9mvx8ev6qjn7cGQ79ZpdV1BG2DpT3bqWd1G2wR1jPML4du3HfgbyHp3GaSRXRWeB",
  "key28": "3hv6MaNbLtxePEbDNEWyRADEiABQBCop3Lzw2p7vjr4EENVKL5FqBEJYNu9QdqZNeoZT3nK6ZnCnZDWDH9C79rpD",
  "key29": "2rmF5Qxx32GByoE8PNDRZAJ1VdnPr2G8S9xDRFiKwVGJoaRoMS3d6H8FSTkb6JZF14p1q6VE7zWUbLYjZUWmB5fQ",
  "key30": "25A4SmEEdFWcttympzBhvd6AKFFmKMXuGi9sXHzvDD27yBnDiCVZ81G8QC7KqfbSJEC5uXHK4bkKsDYwo6gEgKxM",
  "key31": "5BKZ1rkW7oe79qtFpxR67pgQGYA4czajKsq1yvLFZHJh411ZGh9MVdprcjTc1GjxhZugKGhJ2mdy7AYacwDW2mZ2",
  "key32": "4ikEJcM6rqkd2S2jZViUm5kT5Pui6ZeYbifm8gDU9hdScbjVSagHDnQSzhUHSdc4g3JQmYwFN77xRkoFwxzzSK88",
  "key33": "3WXprWgrX86ADghc8JEzaQXLsTkZo9e9avyRmNXMwqz118CEYytRi8APJLnQT9rXXbriSQLM3TeBKwun46K3Di4o",
  "key34": "2MvZJRkbzed5xWQnEywnZyxbJpG85QcjxrcBFY3tMgMJ2HMbwKSVTA1QUJCzBCxfTiMsFAP6fpZPAVwnBUvXVDJb",
  "key35": "2zK8vNujruWoc1KKti4TLkrpc2mdXK77wZKAe8DLzmBQfmg2nqyEmeLvu2m1PVwSMdGGJ76AtsyKH7bbEJcwa2VB"
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

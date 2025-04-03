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
    "fBsjZKsUYz6zpHhbLNziYCreLSErD9fwdoM68Vvi9gzUZ6LAzNBcsVsAgv5riEMqTxYqKJ1H8GatrPj5sZLhWm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YezDQyGbrYJBFdshuiG959ZaPybhir4mVcaDtKVx8HjAb5FgDmkJkVx3o12w1hw4B7rLjGHra5atCDUASnP1AS",
  "key1": "2rxczBirZyt1uYSNzqkeNQFwT4QsyT8k72BzU1XdnkpvkWqU5poPYqhGp8MJhEQQD5uxpogHErhwJHJJFhhjksRK",
  "key2": "6D2tnMvuE67eVr2J4sZeCx14hfqDEVMVUzMdzRpMeC5xdQoAE577Yn63Pi2See15rDCkE58yo2f1qDEGbVP5EUP",
  "key3": "DneSUM76BuqDJZ83X1HxzcwxMUJ2AKnmReLJJZ4Pc59ERgSXCnq6LvYGSgyKsf8dufHA6v2mpoGeCyWUskfVhbh",
  "key4": "2yUeaswokdrPpp2etfrDv8Nv5XD738R4shQRJ7cN8Z3Cdh6GtbQ77QgrsDpJTzWXFTPSmS3fgzQ63NYH5QjVEQtR",
  "key5": "PAck1a9gzQm2ncLBnbVnd63ubyVh7nD1pNowdfLhAhJ1xvPQfZUahH4YLg9UdzQzTgepDrx1zmhNko1zoLLToVZ",
  "key6": "5KJfvVWF7rnZNQcVmM9C4UWfSi4EGNA6oyEEHzmkzkeqUHro6wGGKAEyDTtGHPgGRraFggM5MC8vBWyPYVWQPoKW",
  "key7": "2TdbyJjSxS7tkMmtGBk7yFaSknXBZGK5BPTSFfNtYyHLVKWy9iqrF34GKXjigxyKvaCviguuQRHzoMrvvejTqvB",
  "key8": "5HymdSubsAhC1XSzHRDg7MCVvTSSS4ipywN5CfGCa4VGZWA5nBm2qiaEAPCrAAUgameFNTR9f2C6bQKqy8pD7wn9",
  "key9": "28fd5fPknnpbC6Cd6WTjVYiBZZsWS1oGHS8aGy9eERwwjBscBS9h4UpcwccVR7Kx5rXCe95XZWWqKHEQZAGBn7RA",
  "key10": "3goCyZzLnxCoRj5FCSA5uZTsCXrWy8ux3KPAdujUWM7h5Xqk4EuT1daFZynxi1NUW97fjLzkbnNczUhWoHMknDbT",
  "key11": "63SX2SAmJZxRk3a21HKND4tEiQ2DT6Gzdjsj5uZHDW4bmw3iNxw3VskoSKPJLqjVWtai1ZETkwwHVy7fTosvjZou",
  "key12": "tcym64ifW8Lsi9XwachWpYaFLbCxZzG5oCmvfEeVC58T7Msb9R1iHcnPzvCB2GmA7s3P6SiBP6y7ntbfKk8dmNc",
  "key13": "PA2LSKVMbtybstA36c5GDkF6L2tgnbCxhW38RNBmkviaygXC2qg5T2U14eemHTh67yY8vjSdjY6e4sXf6cbzxne",
  "key14": "4qxAg44hCGS9JVH87Nj6b8Hoigdm8dDvJX8ScmYQVYDxEXV9k7eRpqXH247DqZobkHYF7zHiBGEZWY9L5CC5cWHR",
  "key15": "3axpdqZr3gBhdiWjoevt6SbtjgbzJxqWHRmxBA2C3235oE4rePFaHUUPZ4dAfro58zNUpQ6QQpgH2cy1aJ1BXEDp",
  "key16": "3nZaQzEDV53oTfDiH8mQ1cpWH4nhPAE7MUv8MK3a9k7rmg2bbpZzdPpJvwhXpkHe5xqrQ28TbnD7tVEFWNn5RvpV",
  "key17": "nw2An1fgRUjhaFKZiaG4WGvwSMu2BtopvjT8dwtGKA5E8ABhv1UQzVADrYEbLmJfREyc6grn23jzgqgbDiYJos2",
  "key18": "3k7qmux4u3XhpwYvuiURy4j14XYKj6eLDvGZFEmKB4n6BDqVKdUeDXoeayUW9BMjMe4uQXqxoMaXZQNdwV8VuUYp",
  "key19": "5e36EVo8x7izPE8bpeVo39b6jfqZqo2HzxavsXMH7gLsLLCmwLwvqcfShpZi8X23aTfs9TKdvD94voJvJbAxYncJ",
  "key20": "5gj2S4oZNJkafLD7xpeoMvTopUmrFLUEqDvUJv6CpUtEKLqXMMKt56y15cBEDnNds5NwE3hbCMKkLRsRnTVLhAQB",
  "key21": "4rqFLSAjnfFFvuB1zH7Dyh8QY1KySHH8MVDcmYKQovMCpjoS2BvZjEEZ5d4hSbRTrCBMTf5cJuVifAxudEDTsN2E",
  "key22": "25dreiQwqpAPvAd1hsbxFDVR7wZgDDbEDhzfDSWuPeunPJqb1Y6fhTJQpysPiwa2fCKy4TVQ7W88NaVosbjzmyq3",
  "key23": "DdkUNGBsbmhppC7686bgSJQ1kuMQoq7mLkvtHJCTm3qdjV5DPETdP54uKofvEYLF7CdpbnZpoNLc1pVaSUHVrLP",
  "key24": "5529gDfW1KMP1rZrYk1thYfqRG3sHGr2s8d6JD19BTychpT9NmgdjcQHv4NBD3pY24xtr9d7TCQhm1D2CjWY2av",
  "key25": "2iKkVu3AAvnE7iETjHJgpmWdyZd3yrxRRMtpUXhyjExiWthQFzuffUjcYMXEW5rpUKJV9Qcwyzd67j33kdtBcyMf",
  "key26": "3GWUWFSJSKvMYWSL2Bnzx24fEegTtsy3SmNTmAC5NonJdoAtYV7TEprWBoctxh8JFDFxhPAwyTHdjAheSXEd4XYH",
  "key27": "3zs6zUZsj2zJYAXN1DRVMpHPQDt4DAivFHHFVo7RrpEFFG5e4UqWmHEws6Fqywpm9YMfMVugs8WAKXPAhPFduQ7b",
  "key28": "5dYwWu8wq3V9F2WcJaUY5UqnfQ9QxCNdwJvcaNRa3fUF5Vcc6dNJbVNZdLf8pW2MuUvCUYjRnPzBVWUbRN1PTdim",
  "key29": "2DWYmewQx9pEuSBchvtgoxDCmUn4qHR8kF98NGEGJ1joCdEwcSzTT3hp2221ECQm6HpzRNTxf8sRYZggMVCpGo7i",
  "key30": "26CaimpDXRDCLe9PyqqucKAvnb8NJ4YXqGkFAxegnQKe2PUtDMVgexcNyhNKLmKFd4nXGym7ME3SxcTWvqQEf651",
  "key31": "3QDYWFN8QzibdfMjBaCKuogEKWArGxGjr5aXUUfPia5ieKbFe4geqUebZrSYCrsDccfc8L7oFDtAgnfwxYgyTNv3",
  "key32": "2Rm4mycrnEqzPfQJLFRs9ewPBU1tD1xdctPybkpdNLWgCCwuPrfpUMzHBzQm8PpkexwRLYtKeTKZVVbEojcifvFS",
  "key33": "GJdH2zMPcKUZvCG7pBNtgoePcYrYe2XZLHBREN6hBrmeQvZR2EQyThNszfas68dH2HkLXt3pKQXrG9SL6S8jx6e",
  "key34": "2XESt5yQaEidd7kBxq4e873d5nLSvcqbFSjRj5LfyTkDjexdP57y13p2Wbgbd2tcKTyxg4c8P7amgbjFKzLTKjyU"
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

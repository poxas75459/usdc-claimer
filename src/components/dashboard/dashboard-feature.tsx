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
    "2s2QD7mgMF4njZAGtfJWk8cy84jm73rm8s7git6BYbVUpb9xC9yRd83zuF9gEVWLHsPS6wi5tS4njLvxfv5hoZFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LBpFaAaFQw8LRrpSGHnuS23zKDtznkiytT4cVMxFi3ymGscobEBSDohHe4i7YNbz1y1nQJrzTx2F6fDzbNtYC3L",
  "key1": "5YQa4kEpsCmHxEesKScS25kBGyshh7H4djY3k13JudwiX3k9Qhc9zT8Xx5RmkPq4L8x6jiJY4JNSyUA61YBwuQLk",
  "key2": "24WUYhti6b53C6PLoPtFyNYYxhK9zPfaJoYsStyZXNvjbnyEDVMwBzGVE2bdcHWaW6Tfu34X91nS3JnGGP5aCVwf",
  "key3": "KNT6nFyxisGoSaR5ZgxJHnTarwDsmxYY4dDQWbT77awJ2nQ3CEQNMU52iwsPopXYJyQ34ydraKi4aiB6Y9Q2ddx",
  "key4": "567zVosMs8wvabjDWhojuo6jGmgrkuD3ZdhQyxG6WicHPYQkqTEsCLxnXFau3ALf4jkeWijXsPC3JkSxPaMM9DYC",
  "key5": "2JRmCNJw2HM6Cb5pxng5r3WKvHRDhJXeVeXNi4KHSPhcGRHbDxfJ6ixTEsjCQTaRkMQRqW5kwPSCZU5C3BJxNLTN",
  "key6": "oQopk1iGze76bc7fVywKrB3q7vZdoipgWKu72wfdxNpp6Gve8vfGBCCDZTssTRmGRFRmnEGpt9YadSzx5xJhXCG",
  "key7": "4AXVdr4sAd1gbRdLdYAL46yuwbm1znpsiGLELQKzhX1rKgTFDWknkeMuwuWAAd5NoSBrVumZzR7JjSKAggiLLVRH",
  "key8": "53qSJu1WZqzmg9seTSXHwQe5eBSx75sDBMkpPcTTgSfGSELGLjA7BHabqd1dXcnkM3eQBNmW15cQBRA5c12fKHn8",
  "key9": "8Ku5zQ1Tk74EoFNKhznXmqVa7zFu5HMbtKS5GDECYDyS1RpdJ4BiJRNNy4pMqruKhnPgA1pHh9zna9tF6fr59zj",
  "key10": "BXL6gYUVoSBfZC3E1A8Z19EbzbgqAU3ZVwXaxmow647h8Gjuiw1V42Zr4wodP26qMKWPwry6dHrmwMtrf7XfweA",
  "key11": "3emwAHtG4kCUXKjgWtxme2Xzyn7Jvw1C9sJAyZZzH4gAhdbT8UQpzD37cyMd6e4QfAeTH59f3XsqYkgqVx2SBdrr",
  "key12": "4kkSqrWut6xKRYiJp2RNxWdqWcCVkJcLAYuBa55yq5sZ3aaa1DjxdrMP8mLVJCnGrVndMkTdUhq9aqrTKBtTRxn3",
  "key13": "39WKnpTady4HFedfhxvKMXs6dviZ4tYhHeSk9vL5NtzunqH4k691BJE8HRnZqzxGp63FcVQu8Jc1nbvCaywngknN",
  "key14": "AieLszw2dicArK7n2D2tfNHouiX9hk5PeJJQec1NfwXYxNYLmbEEbn9RZxM3f52boG1mqujnDtWbYxWUFYC9XUL",
  "key15": "3RRWasrqyAzQ5Sp3JUwKgg85oFFxUCAFgKqfGZ6QQLhYm8XCevQDx1uKNQVAzfY6XKtty5mAzUxsNUzdtvjNyRTk",
  "key16": "2BzknPupFAPSNWWafBsqCHNhfcJe6KrYio14Zo9EUPKKfLeWUK3Ht3aArvsiZHuRbppfcgRHMBVCQE64uCryS8wx",
  "key17": "RZFJWsMy2Bs66zHu7fEX2NuGKK5HGBb8cBmMxV1NYdx8sdLhGo3nNgSJRvbtj6pwr9faprTpe8dEdnyn3yCNVnJ",
  "key18": "2phZG2PoXFEEAi1z9a3Uxmmrrjh7HLw8Qf7ftV8fyH6F2AGoarNuvXj1VtznRFd6kawKREqS26knqUoLQWXjYdJy",
  "key19": "5JjZSuPddKVSrRF5TjcRNiVLHZVBapyrHwefoeYQK3iWeTxjP57hmLXTqv7FqJd19vHNaEJfTwvnG6tZeU1ExRUx",
  "key20": "4PpEh3svifWDrEaxE9AajyDaLqvwCMChCypr4nn9wHycdgYRzBFXixvM4RuyiDSHw9KhLspsPekUznx1abecfbGu",
  "key21": "3ofPjkPRbWWoSqBR9ATjEBfcT6ngPFhGLcFJ7k6kz9hvrFjS2KJ2hbRk1kgyE37keF6KSbBeRpSdxTE6dFPnfEZj",
  "key22": "5q87oUsQiXQNRbhDc7Ed3EorQ8Wo6aBjCg8iucdC74gzFrkhyuwLxBrV797MFRTyDdXHRrVWT2PFn9nhM8hqZtFs",
  "key23": "2YQZQzjVyq6cTwHZh5fSGk8PaDimeAkaU4Xta72a4Q94hExuqPjzqtxGDb5ye4oZjRhKXtJVTNiF8goBymAVoDKy",
  "key24": "2fxFNTv2H57yL8M4BxcLHCPjenNQuAqXdMh22yoGinyPbNno96tfbBNCAZm7Y7yf1kcbUQMnT5Bx53YGBhUbg1Km",
  "key25": "2SHq82u4uzN8Vp8toKgEvaXTpKBUbVFPXc2RogBXSRMig99bN6rHaDVKb6tKqz2xYKLswHYfzRT2QAa45jfSxn5T",
  "key26": "q8HQjNEZ9pupL7BFpqZ7sVSYuY2kJEmFff6xKTfLQUkZ5pR3kDCsinmcueUwSLkuGGyp6rf1G76UdkLUF4VXhWo",
  "key27": "4z2x1zsq3DfhueKwReT7HKcs8Argk6stug6iokPRs8fSNcoazNa2UEf8ws8XJQwsBjJH8s4DgpuKpzSnZqBjAtJW",
  "key28": "3dJPeV4cf42kv3c3NwpLZteRow6WeL3V2ZYBdWQqUziGQ3AJMaEe1yA3xVoZXh2btXemhyYvdv93XgeyU4Nvq5eZ",
  "key29": "VGPg3nSy58De1SbLMzp2z6Qqeb3LxwiTQ5aiqm8nQC97aMzuAcXwefxHja4xsMsVbzkjAqkpJ12BYsELJcsvAPJ",
  "key30": "4x84Ag6en7mLdDR3EAn2BYTLsUpnr5SQDF7wH25eB6KnKYxZ7ng3P861TToro7ZsBbPiXhkbN6VbC77GCqMLHS73",
  "key31": "4PaV83VMCxmw4xea7VKr1Gh2PJxpu2bLGvVsjX2YuuFnxW5oeKn6a1V5ERCr4g91LfSo9fJpkZzPJQcwhDLdrc6q",
  "key32": "pJ4JpSM66C6gWSJsv6Lwe7g2FU1fPP8nW5pY4pkcSbX3mxpVzqHZxZ21MmihfiCRLbYcuuvNsBhSKpAJbn6NnaF",
  "key33": "4gxDxfCnuRFUqj7zjns3PZjR2AtunootPgAa3rs32h428EVjeyRgFW1TPrnZsH583GmKq3VwYrAsLSVQ7JhZ6KPU",
  "key34": "5aXLMss3uNJSZLRQ8zL2DVRJXpAaVZr72Vqi5yzBo6bKBts7hbMkELHJJ5XVaHtFNi3n13ZQEde6zYP3JpzYo3x8",
  "key35": "XmHqgXXGtTiQmGDP83Gx4RZvGR2fT8CrA7z1huWYon44Zyyn2gFsJmo8vWdu1DFJM6wkvoXgJFxHDeASJU34gab",
  "key36": "21NW77AuVoiXxP6XhpCAQJx2kwFLdRXxgPaGZBr8xYHm3Qgwoaw3MrwRGtNBDDgsS1ctviGoQLhd29CiEb2obAwy",
  "key37": "2tFkCV3nXTytFXUQ8K9S7YTNv5DmcoL5NNuqS6b2iyivhsnHo98fogPAL49rBbQqbPDYxSS9cD4RAcaKaHd7z8nE",
  "key38": "2dKfsR97NdQqZH5nMMyKJvEAzC3Nr72FXxkfeBi6cMMhqoMVXkek16aGLCN1JSRurttV8C7hQzbst4ddJyfm3nBL",
  "key39": "3w4PKwuDfFC987Tce5XPuy9pEAKfA4vcCiAgEW3DLyqLS36ckksGPUndz6pRetm8LGWw2FXvEPjS9APWeMnZULTo",
  "key40": "4rY1d5EgTAC5EoBmPsBTuQkjBC55R4y5WwL3Bpqkr2f7G269Vo78JbsYsYN1tnGbjyskEDRDjaNTGrAcMsGJfttC",
  "key41": "1RKophJopLdJe7ggm9H4BkAPUPKoY3yKT4YtFgQncfnzLSvNAi8P9JJzSdzbSfj5mhMN4JRri1kyzR13KY7JkND",
  "key42": "3YKZHCnUqU4m7KoiCtYS83UrGv7n5dFjaAmYCqmAoHrRburdf2Qok34zp5jFQeHVtBMaE8NAgGejFFdZeqkNyC4p",
  "key43": "2wMfAn8W4CTNvuLcCMbeZZVNkaYdWXpyXKr9FNNs11eTNfvkbwYN61obRQQ4mE8YpQ6sLZhjUvCqMwywjdjYQmiR",
  "key44": "4fTRbFUt865cVXZHwZhferufhXnQsR7Y5V9kVrYtkCF33tdbcyeBUxERaWa4FLPAMVkNchzmckwGmJ1v3kHrQYBx",
  "key45": "3E4JYKGoWDPTcWrNXcxq6eyqjYGrYN7UoHEo4HeQVfMCr6HQ1aDQUdQLG5sQ2q7n1k2G5banx9R2ZtGmUvbc6EEN",
  "key46": "GuEgPLh4Tn6zqt4D8ufBZYPQESVfpSSuLt4mXSUD2a2qT1W3Ex2U3skyPDEFQnjvina35LLPuLzTpsmCsmGGmoU",
  "key47": "48K9WPAUjhHNshcukHk9Z7SAhQR42HsqAmF9Lax2cDX5jEcxyKyVSHtQZHubmFAq1Zb539w2N3ZxLekQUNXHncbC",
  "key48": "416ZJHCtctM1KeGhsTqk4LBGfzhdCnjc7TZ84SEgdfemEo8NMXqZkYjxkUD7Hu8UgRkXUrTDFryAiwfN7V2cVouM"
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

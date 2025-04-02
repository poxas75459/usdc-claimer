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
    "5QkZaAMbwoS8cCEPwH3xcVQbJh95ATBhAsQRL8n7NhbcvqMjUWfKYPakkwtTqR9bXTptedq9QhpVx1ze5HZ5m9JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUwpEwnr78Srru9LLpm5RzQP3kv7EwzjuejbDrnsrU7YBgwEWJwuc3EpWMCbp2ti8Ms2zn1GeBmpHcSdgmN38FA",
  "key1": "27pTqWe3fDhF1NDDFsgGwoBtKLfyAu2SEuQhximEsEEEMs67DhmAoLuA5yCxDDzc5AeE8TYSVUAhUPPMK8dfa5WA",
  "key2": "2Jeau7YRP7mshYY3nVbQnfkbgRh9ttzr9GwCkuWAGTBGctX5kvfHGvGaW21CTPugMuDDaNZZEh2VM6mhtiFLEHuf",
  "key3": "3bqDE2fC3Jf1DABV9SvCQasWjSeUjGdgJEqW5EVco9Pey4p1E4NTcANas9XbiUC3Fm9HGX1ZLWyzUown7Mj23kSP",
  "key4": "2cy3be8tiRddqyS5sLe9zXchf6WyTgfub6bqgmm81uebb65fY572RvxU3s9ZcXGuBQMzUd32UC8WA1qkAS4XCKAK",
  "key5": "5kbL1xMcU6ZjEBMtx59Aqo8vj4MfWs6kECnQW3efYtkzdyQT5B2f18xzA5jhUT75wcipK8Dw4EGm7XeXeUamQHmK",
  "key6": "2MrYsLr7z3nvNEkVp6csZQwNddCoakimAYbrjQHQxvR5m5HWMnVTkwBxP2j41NjZjbKfMdo4Lh6v4zseVM2kk9SK",
  "key7": "2fKQcdyfsEVKZeEc1esgkrt4c1rubgyazJSnenWjtsQaceAVThMSwUE2ueT6HX3bKzanFDNzs55rJW5hKrNwf8s3",
  "key8": "5Lvunar6wxr6DpT5BWJWTv81tzhPPhm89RdG4zA11DirnayQZif7uebVYUa464YHVCSbATmo1VXkzmJQLrB2jWHL",
  "key9": "2MrWp4eGCYtDGcegzeTB3bYvSe5w5RegVELT3gvWkkfLtFjU564rCMxM3QzGFeFBuhwQ2g6NQq58WhyEjLxtKAAW",
  "key10": "23Zw14AhFbKzmZN1nkJbqagP28mLnRjWNr77hTB8D4smuPCedy6xE2YwwFPFhJLxjd9pt7oHjkpWtnC42BwurotL",
  "key11": "4QKtufHyq1rEhyJ9uGkEUkByswEPmotAV1nxTm7honkrfNrp4QPGGnCiavYkfU3NgXRsm1pVscSWMhhNZDVZzGna",
  "key12": "JJfV2dytHvVXGtPjrwLAKjwRHQcPwRHq27oU32cJ7p8hU28oLLbyaGEvhApev8VFLCuS2eh69Arh2e6eayXrSQ4",
  "key13": "qrsY1wLzjTZcSwuynwCBQdTYhXhzMKBuuvi9V68oKXbNDYb1tVPbRrGkqvxK6puuLJZgxbM5WiBBNoEpf2FAs4o",
  "key14": "52m586JyBS2KtxGkmrzr91fFVXro9z7Kcy9JiQS8EBzaD5Y4c4dxLxDrinDZyGPe4JnNspuvh4cBycNo8SkT1UoZ",
  "key15": "59UCqPW67bCRcvLgWCdCtreuLsQ2BL8knkhAYnGzo4TNmzUsxYYizUo45LQ5tHvBxZgSk4fo22sHhR4noFKpMzhH",
  "key16": "5zamtgE444ukhB2mD8vgAWKQbbvX2Nbnw4XuK31hCj8MpRHecuRAFvDGwDQveMAQmtNRcmkyvjScxzQfYcLJVNFJ",
  "key17": "4RM4cP7tPgANRKD3B4mw9wCSPYVQreThNkpxCnMvTw12kp8DLKsztZ9JUc3nGLByMT5XhDqkht2SVZE7irt6ifiX",
  "key18": "3gxqUzYfTSaxC28uoHNhPQugVeA5GZ23onmmkTyVdZcZbWE5Xb89imeB4xAvsAx2hk2YpRmjc2ioRw6CB5p6skMP",
  "key19": "5vnbHhy3GjZowjD8eBdQqfduj8LCAdLRa5TCdGTQuSmZhFtiiVCxhXPpQotqhMhdPKeCwNWS3Em5rLxvaw5QSiVr",
  "key20": "3VWT8K5AceaqQpHKiyhnAHLKGthqGLHwaVUGh9R3tfXRYxJeEKxr9RjHwHyCosYv6p77tNL84PgPKyP4jjoXP1GD",
  "key21": "2ovqJoyNty4mB4LJHRCd6REMDd4qV3qt2dQbVbcYE1YymWy94mqxKtSyRz7AtWamRmGp4AiRR7AzVVjRGPogf2Pe",
  "key22": "5XfiHauzcyBzWDE4zPsrretTBA54tiscM4KRZfUMaXsytGwXysaUQVWhwBiTJb4vJJk4GRn8jyr8FEFnS5GUPj5J",
  "key23": "3BCF4XvNF2hWFJtpVwnwbAgdwchZboRT4qTFw4CtFLMyFG62UgGWWzarfuVWYyK216fNDckbQe9ovSBdfsUoKNgz",
  "key24": "SphtHnmJoyLof5nh5LWJPdtbAg7MdHdKBz8srSYjgTjCjoLjnpWq9w1UiK7ummTgVsLBvzDEyHVZnHtTchBKhug",
  "key25": "j7wtjepizkPWaVAqd92a95tvetT95KfYyFqJYj8YGEBgbz6AN8dt4UeKeyeL3wRzCwR54LRCgDzX9wLy1WWGv9j",
  "key26": "5GoyE5qTrETayZVzmSyXyiT6auYeKjfnpue4N2TjBDNjr3ay1rzPqr7KFL4CJeBE8xuT1yDeyQae4ZQV4JHUkLyt",
  "key27": "4iodD8Zxa4p4cefSUnFcqv4ynD36VXaGxDGuFiaLrhk7Zx5eFHPGxfCXrM2nUSVYSasKnfG7KCcE6eW494JYE8Uq",
  "key28": "3KW3wAJjFshFwnEPM95cuvPYj1LJWvLVDhUohZJAjkhxGTFdAvAf9mLm91nGEWmVSVJt9kjVY3HpqoV7uFiybuE6",
  "key29": "4nCYckHmmyP7zTnvRFjig1wxVwa7B3v8CwwgcJp9gkrrvwr12iW4o1MWfZ8Jr6krJ9pFAQ8k2EDKhd8dMxxTALoz",
  "key30": "59d9ebh1f33UGvV2x8pL3YwcfyGjYSXRhLR73phd4PPefNJp8Cp8Zs22X9GKMv2KpMEtCTouxHpngcdFeJbu1iLo",
  "key31": "2THuJp41GcTyhnTtYWQmwfzE1AeTDRWNPxY94QopUk8wLNPQGwfmEDEGH36yaJk8WJPs4dCLH14gPwq8epFVcT2a",
  "key32": "pQjfoFz1np87HjDwKxSjekRn4o2mg9Bgh9SaDcyHTpjtk9gA3WWmDFSnqntUgdc9ZFS2CUn2i553hFjiZp9kWAG",
  "key33": "5Lboq8sJhHA9q1Y7j6jsqfVzuQi7aBp32siVmHcZYfrGgzvFRugDucHn3fRvThfTHKLf17NaLTARmJvQ5Makru4F",
  "key34": "2S2EUM2stLmT4BGwEHzswaiSLSynJLKdKexF1wSe55TsMEHoTPbwJMRsme8n5tQPNZQ3rUF2d3C4bnrqQd35dvUX",
  "key35": "3t7RZp8bzuvPAyLCcuJHDEbVvmKHppgeHgwsyf77XT1aQXeYwvm65oMSXBmNayt4KHWzUVdNpKJqQKe4iGH4KHcF",
  "key36": "3tQnxLzJKKu66Zc97oNAsFpwf7TBoVk1kRLvGF7zhD4oiooYE3RZyeBkQh8624VDpVC2rymc8j5HUbpXJeNXAf1p"
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

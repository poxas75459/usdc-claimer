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
    "3LpEZ27JKpKRavrebhog2MA6wwnjmfy2VbZAH34SJ34nQV3Xu5FjNgD3P8wrAi2bqEC4mtcmQKwvDvfRbwVSY7J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tXnu1PXnNSxPSKWr7bkKuesnEF3EtQWmNh98yHmVFHSNUHFHF9cAsmoE8yxUbDBtoPqxa8TVJSAjomiEVfWbaqf",
  "key1": "3mEe86rQz9MayAQcdvxXNseKM5FooG1SvACG5vNFb4JE14yFd1aTykpQcwauTEEZx2EVmfujRPuijy2mTHLSEZV8",
  "key2": "39fZEC8sABkZRysVvCwfgv3T9oRGXspQNHAMoezYKbmt9kXUaDnfAkbxmTFf5RNJhw7Fto9TsTaguYJGLJRSABCS",
  "key3": "5shFXEj478by6efR4vhCxFH2JDo262NPvprx7rGkRFborEFGb4DyY9U9Y4HHc8zXEdJycJ7d7x7L8a9WLMyJzHS8",
  "key4": "5LdkrWKCNCycTP51JhmLNeDn34d3Hpcd6QgdJf4VnGmtxR27fnnfGQ5nSGXfzQtzAgrVMz1ZHQFgvaMnB9mMevxC",
  "key5": "2Zydez6SpwcC5ShbjwdEVw3inTGSc2mxH3eUfy7bM2z2ntuyCGB49pzLxuSDK51tgvPzRiHEvtpFwXbq3hSjTnk2",
  "key6": "bN1rXcVLogzQQvZfr2ZpyJByFNJyBiauXNWcuLH5GNvXSy2kzUXrkCU67A5DWTje6aBpViDjpm3Wz77MLZgsAqm",
  "key7": "ArXUUe55PesqhULqViUhG7Crm5VTzLSAistGCVBTBRmpbXXLgpmwXNHPwgpdRzqdfUNwrG3L4HXyqhuVCLtbWm4",
  "key8": "4WsFRZ8ZVTm1xsSXW6ZRqZ5dCEeKak9xCsAdUVuAHsgQeZuRZKKHQv4wWSRw4cpy8ncDnCMJEY4f7asYnwYuHp9h",
  "key9": "2XPo8dvR7ndqY4jN4tshnkgkThUbtQvBDysKdu5PAmVEhZtJsVgjjuRFDy2SqzLeqpEjcqnqDvYZ53bJNEPMeKGX",
  "key10": "e7YSAQara7utaZexbJLBKud9MRTcHSz7GLBB85ne6r4QTA6LEoNR6DREDhKQJ4toTJVJyKk4rsNrN4i1CMW3KFi",
  "key11": "2XcnnLCJcLAF1R4oyd1GzHhh1x26Ef2utAA84odGMTabUzSP2uNGdL2aLsiVuF8SLM5FfwxNSKu8v7istXbqPFRa",
  "key12": "2LGiHJxgBsDAQjzc7Ey6PmjFeiVxtPvtdpGzBS2wHRu45NheaSY8GgNQqaNoEeQS473LDmWpZ4FmQEGV7Ksb9uYB",
  "key13": "4MCpAkbuKhBprwhP51zBrvWKssqvt136VqRSPhDn6pp7kUtz8EXXcwkW4Tz5svvhvMeGU2WmWqmybwuqfmrHnVzw",
  "key14": "AA6cMWn4gWxZB4XkWtKcCpYwjUEzx67fkg85aUYxysyyCkmNB2x8p4bXe3NofgHnK7jP3Rh5DsNBkFC5tatXiCv",
  "key15": "2JjjHyDJJABu8613ZUVHm9svjSHk4eJyFjn2kVCSce2Ew6kc7A2syGxJRgrFkDX7PHxcSHZBLQBL16g8hXRS3RWK",
  "key16": "5dAbZ58SxEHzA9KwuDy1ky5LBaZiqhahVeSm9EtwsT3rBNGmyidyQwRt7ocCfUbRZYsNL6a54Jpzu7NUm7Pwjfx9",
  "key17": "56PUtxVxR6Pc38mB5x4aLhsFmFtnBRvSAiSvZG5wMf63hDbyyYABzYMm9W3311HHmuVQjmsdtmNJhKLr9CAUbPDe",
  "key18": "546f8NwvnezsHAihj4pfg2crLdTA4ZQLWhwTSLupBfRttRhT6zL6tgQTkuTqJyNnLSrBBV8Z2MGGBioZNqxWaSGK",
  "key19": "ZSk1gBwtNU97La9BD7BrLkjEArEQjowNDR9bxTcLfiZmVWrPp5GGy3zF2btAxAAGN4qYYnRq2hbzsAG5E5yTBTN",
  "key20": "4tjJZNohZk2aaiGFC5giXNA15YBhoKcAtgJS2Vd67XhqDoh9isdEr5xDjfWrNaKCUAqvaaRgaz5YHM9FUWyy6EtD",
  "key21": "27D6qMMpzcBa2nh4nVnNzaFSNVX3DXn9hrgP7unqwHnyE5b6ZmdTF21HhWwwNELD4jEVwjXWuVWq3wuXiEgP5yxc",
  "key22": "3Q8cVceWMfSV3MVxC9g7hHEuqvbYDhi9KEgTLSWBykiRDkU6pGSHLaprYNBNgLmaSHLcZywyqCL7P2HCCiNdffCs",
  "key23": "2PebHqA2Tr6Ks5Q5GKUvrDN8tgTgvEB6Rxyi6nneyDdTgHsuBwH3svx62XF5Fjqi1GNF7rLet3oQTvUdBvh6wt3C",
  "key24": "5FG1Yq7oTr8HLT5FBDi1xNDEFToqumvvfv1wYpeHGzYKsFp9iWPEXFq5kgR1jAtZncPQfju7vBm71JZsNZ4ddFcA",
  "key25": "6io2VE1YnsFuig4jYFSHa4AJsfZh1SwfWTihQrTqy8unhyviDzov8edcmLCikjyiv9zb2nTg8E9LZx24c3ap82k",
  "key26": "4wh2X4xZ4y7bpoGTtDay6wmbMnBqN8AhfFWMR5YVUjc5MyKCPcVtHynrw37tuznGxQdKCviVPjJ1RcYtwsySq9Y2",
  "key27": "3kuweqLHNHUJScaHzsiFY7FaUN8aj4i4YyDQoVmvKPiG5z851QSpwB2jBhKqp5RDmpzSqtybaxyqf5vvh3KfKkcz",
  "key28": "62LgMR7RjZ6Yo9e45ew4UHDV67ErmZu6kgr7watybcGfbQrLg7CyuTYU1MGc8AmTftpZn1SKntEVHkGxMpGkLymR",
  "key29": "32mZQgnU1FadQm3GF9Y3F29LyEVUxeFD8yHBpoW9Vr9hzUH2FvKFh8uA2jHa2xUjcNuGify327JN2WmWoZ9NLRML",
  "key30": "HtgDN1NVbdYAhws15VYmHU7F3o9GGnEv4uw6XFq5F5aVj5XHytaLz2CDuN1f4WZjM9NubWfpyzXGyPDgQMRwyJf",
  "key31": "nYN6N2LtbtA8BAhwpsDgkxakDRxqYqNKWg3B3WPtuoC3eKdG2nEAtMhKXm5aqVAmnSH6jYnrnNSQkspuCkBck7P",
  "key32": "4SEr7mMZCT8absCdy1Y72mCA9DA4pcAFfenJTBBovGusHSq5pqYQnS4YYzHjzfTRB5XBW67mfPurCzeGrz7NyZic",
  "key33": "5GjfypiaHVDty8NksE3JC7DVvZyGD53ADDjzMTYXFec6nCE9WygUtW1NXmrKecCnqfYdbapzU5WLLSAk5Q2626y",
  "key34": "3wasJDw9iLhLqg4Tzo4P1NtP5n53DeaEiLG1dCtwacDFaahutEtbaene25Bx4kNNBkN7rETdetarHXEgam1hnu3t",
  "key35": "bcoQ9JwACgZTo7fRRBpN4UC4nTUwEg727qgecJjoU8TrM5H5Q9P7JSkvaskYqDqrHb6va5C81oG53y6eAUaAiTx",
  "key36": "4bUdAqJ4KnCxDayj8GLy8Ajo2qvHFw1L59zWKv88vJYnCCBuMxeyBvMaPV7SNspSANx1utVdkwkJNvvZU4oQNb9w",
  "key37": "2RvCXJgNih2QM4jFNduLvJxt2gSyFpVg45eTyHjypeViTP8sCmCZeEBnEg4qwmBbBNjuEqsSCAnjB5eH6BNBouDd"
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

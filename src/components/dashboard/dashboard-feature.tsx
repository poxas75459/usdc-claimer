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
    "6525a3JjwSCjzcAQgi1mtGQLishpZYSi1kRp6HqoUiqWkuepP5Bmt8rU2jVTa87SEe5eF6tnJAvfwjBCjbLQpHaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49VCBsBPyB7uUQBnDeYnDJ1iL2FKdoWkyV75apqg5mexPY5SejRbRF4V1Z8vPnBbQWGQMyx1Dh3wmHEXr8rbM5Qv",
  "key1": "5XjM2zYNDdnsBSvpqb2KL1A5zogDVRXHRSjTeSXQ4ijXE24F5srq9ymkMS64LoAe8jDeocxNbAMUHHiiv3oHqaW2",
  "key2": "o3SyoJJQuEMekT8sovuzgViSenmZDKR6v8zvaKtqtY2nrE4jCWoFtNU7ooWk5tz6r5uSNUoDoma2qi5kiZNttLY",
  "key3": "39Xj6GVXcspjiTBLCYxVHy5XiY9E3fyDWFKbj5oX8ZjDLSTqJSPfRihhQb3bcGbgeQ5vFmiw6KH7PLRM2WJC3X6n",
  "key4": "23p5j72HtD9FnpvQvzv9sYSrsLRovzDfdSH1j2xvbF9HDCy3BvJgZc7bQTkd1HFtu2iJuaUEHsSkpMvuA4yHoQHP",
  "key5": "e3bZhj7dWqyMZGYWY75apKbiUzqvTbgYY3wMDmfaJEyttTFX8s99Mwi8oMzQUpwERWevXTRYxX3TCAHdWukVJbE",
  "key6": "58bdK7pzXJU8APMRn4jRywpe7Tu2NYMAeskwMcYXwgZFoTATfvKFbwERA22ySr766P2ecyUkzJbHCdweNk8j5rjp",
  "key7": "xwLECu46DssU7quuSkAAFrk29VgxSm8gbZvbarCPCDAjfN6UhrDGy7yf98KT8rMiqHiHvQX9SeoxFDZvpFGcEef",
  "key8": "2PFQ3EsFbpCGWEDKkfps6kfEKgp6nn9BK1QMGs8db5pu9izzdToY1PDcSHqQzea9FqhZFD6fdjHXzimrEv5Q6qwt",
  "key9": "5LQh8gPjzURxuLv1JZP58Xs7ZWpjagD74d6pMwjJaKmdqj5rYDYAghWC7E18kuXw6yneMaLVJjc53nvYBtKibbPh",
  "key10": "33J1Bd7g7UFEtPbpEgqSKR4q6Q7JEqDY76ewXh4btKKzENSKWUvycj559Jxbo3b6DKpyzRYG5MpfYn6WBtjoS1EH",
  "key11": "pZQupKJuHDqWVGZCg86AqYe2Zi66hynRQ8rJup3Mw7wkgeiES9fNhkgxUmxAQnGt7Uzjk7jxDutHdCDdzzFme97",
  "key12": "cDiWAk6Hck28ckGU1XMcyvFEN3oU4NDCu6EqHvFBYGz1cEgH5bvetLJF9TmocSkaKYhDaUynttsxkSUGSmLY5mW",
  "key13": "2Tsx8eakJ3XWvMc82SLqDt3Nxz8SNDHR2oyQNSrJDFA1iV7rni5RNnBBPdE4uzfWEpTq5SJNnM4G9bzwDBvQuXao",
  "key14": "UQeCoUgr4xgS8Q9o8uZueMHeZgvSyDLCsH8HmiW5ercAV9pf33EJX7F5GvhKdruK1QtWt3bTEAQ2ZUtLK88ryFp",
  "key15": "2EtQreQxayThdyUMyu5LATDBsg8mK6qbBK4URoMUGaUYb3VskM4hx4AGpEBJyThs4E7zajwsnWLqVL2dmJ1YvrjU",
  "key16": "4rCELg33TusJC9mMx6X46VKJrXFocqaU1gu6TkTRKvJ6Hswu7LE2Hg5vKi4uptVUfd4nHKL9utwvUfV7hFq2L3zK",
  "key17": "nbEKuoD4T4uJZghkXkizmuHpCCiTuHru7QvGPNLF4mDFiMwVKNr2DDQrPJiXS6r2E98G58ku8XMFtn4sb4Sy7cm",
  "key18": "UupKWJjo9Ws9KougRYa6r2V9kAM9xFppH22yUxWakmBFsxDoonqr3Lk1Q2vv9DYDnb7BMWf7SvLhtnRWeAEBmVL",
  "key19": "kpsAu7hrqLGVzjEE4RvLKeLjWb5NMaMTeeGMbXbnu2evZ44CmemHZddFRftKTmTDRUtYxVATx3rfyXyT629SqGB",
  "key20": "4y3oLKKLxjVS8dcx56e5px8UD7u3dCuTMAm3m8KbEnAeKbMjXvpewaHzy2HrSPpjqTaK29bBn96hR6DAcpp6WgKq",
  "key21": "5LUkELxgHAuEjnrrzHdx5BMX4RS3DsKC8g6RwghMkxvNwT8DAriQ7PXoemNvhUinw5yuTkUeeJu8fQPmYW3YLdm6",
  "key22": "3HNrnJWCfqoUur9DfXLJozXZHMcp2aeKRBFcMYWyafpJa6Yf71JDvVpj2bxQVkxGGcd35sbpSokhJJEZdMrVYrjh",
  "key23": "gVfk9rFgSQT5p2QNCcCv5PD7RjTaXHKPYeqmJ3c24M28zNt38usqNJpCrKKoTW86Kg9pE8aUvc7KfaEiFGzbLv1",
  "key24": "3q8CTEnWQ3L2NYswWemrx1Rbv5HzLc78Ch5b4C5KScyuz7RLcbK4Y62Z5gzhWhGXr5kGxzhdELUEt6Mx984prkzH",
  "key25": "2h5eNNCaMU2yTYXx2R3iQyJzEkaf61Nq8FVoF4pvWW5Dzw4wkGiqihQogef3uk9N1CXjxjGW7ZpdFTcrPxkPbRPf",
  "key26": "3KKhcABraPkp7ydVVbBV7WbHC9oUpwSt7PaG4UcWATZoUECMbewxch21BgNgnRY8YboGVgcFEAybtpFGivEVvvKA",
  "key27": "YtCVdkXU9FrXkSZogRrbGeJRt3K3GoTFmwBZDEUejQdQVn5i7hGg8eAKbs6g1g5RHg4siKaBGsbU4hm1oiZ1TrK",
  "key28": "rjdaP9qnFKNEnHVoqLhkTDxgUNj26owsqmnag49gkFJxrX7gDiy56rqtsmpWPkNrkqJQtsJC77fGsQSc7bkL891",
  "key29": "4K4W1SN2BjLGdv5V4HyBVycmHAMrRizmusKp6Gc1dSwi3CMwRhgf8KzRDiouGhAd6YJZRULV7qeVDtV3x8tyT8s8",
  "key30": "4zSPS7kqKQDMbzxRHb2ESfU9Pa7ua5dAWdD3RLSm5YQZsZH8W1bjDEG2YRHRKDWK25weNKXiHNxT5fTr6N1AWXLZ",
  "key31": "4Rn98LTSTsqutKXMjgrVYxNW6AHKA7YuWUCCjGcbV3gkAV9mAASxAQUfcU7648NBWXuQFiATtkH4PBTzZeZkjeH"
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

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
    "DC2MwP8me3syKzJVQiL5aQ2EwxTZZZGQ4QLjV47CgL1ri9tztfAjhjAZLFnfPMmC78poAian2E8N8FnGfc3NSf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CcHuCQA9aEHcXYjBfA1WdnnTnGjJQ1cGmpYeXF8SpDPeJheDqPZvW1Zpd9qHibu8XwX2hpxutvyCdBLdL884Ktr",
  "key1": "3Uj6iEFuMpFvYBDsxuP2V2VBGsNLN9vxF1JLBTsCawpozNFjhXNuWcocrX65iJJvKy19gyqhzvmCYpfNzGafEfFx",
  "key2": "oKixKKrKzJkCqCsHDH2iFEtT7to4n5g63WChCRbLPjHNosn3dyucdSzPbSvzUF6GhbHGkpWyPDQiGT2PsqXrsDP",
  "key3": "5NKwczJqA8mtcp9mH2UsvijN9WPKnFaYJS7FkvhheiNM7SWZ44BXCLRwWHoWJQyF8XRdeQYAfsC8d5RPGGAtLNxj",
  "key4": "3dtESCpsaYr2afJHskfJ9NthX8w6UJX98FoEC4AoxERCQHMZRhse19Sttu9rLAFuNi3QVLtANBQGsg7dL1Ccjmvf",
  "key5": "3QTa92GKUHgudQ2gbdVsqeYNr1vd2J8w9WhGjeRcNUmhFfVTEphm4DFQMd9Yz88Jm4BYyqaRHvQocxroGXpfbsvo",
  "key6": "4QXzvRDtKHvnukn9jT6Z6MSp4uGkRrRZZiknoxpzd4MTB8LTUYd4urgTyggaYQum1GZmxwkVH5JfKq8NfmYUyU5y",
  "key7": "4Qwj7qMCV3TgLmxVGnvXRdWrzmKga2mB6HcDJPrHxFTyKTEmUDcEM4FhUNPuvtEPL8AyhrVjPwzgcftZnGAJLh3c",
  "key8": "4zgLxbA4ySQWCZQHqK8JUboejw47p6QJFaQJBVXzphvSFVReiacsen3z6GVYWToMsDbSsSfXLc7RYZac1Zo3Ymcq",
  "key9": "46vFxPRoSpGSNBN54FuGWCkD9wh5MzoMNm4g4AxdPSDsF22ZSv3ZNYbejd3YcjW8T3pX2AwiKAGECZhmoFSa3gUn",
  "key10": "5tVbFS29tmTUTubmS9yXyDkDLD2AuG7sG2D3PkdGDXmCm5jw7JQm4GakNpUu7e3RjYxNGkrQxMfP6BNo8UrTN3Gu",
  "key11": "4M5D6eUrV7KNirs6tC9XmGRqcAy9UGgVJMHU5VDDtLaoo1GntT7DzdVrSmpBUiuAfd1pNqiTmcvk6AThgjbR1ftz",
  "key12": "5Kr3pQ8J4Vqx8jPY7M6XBerVeGSWDgknFZdz1r95kTmb6ruMWQoB7CPUa8ZjFzigLmsN1nLfZfckBBTU95bgeTZQ",
  "key13": "2DsNFEDyrXN6FkrKbjbXQMnpK4S9x8XBsr7WcYZnn8jLPzY2Hj64p91UAxvnF2eDjnBbipThnpvE9u7A6PEQP1Xk",
  "key14": "5KBEV1w8PVDVkRpFdUJxqeKry7sd1VFj2h1UJXnk3NmQ7fwMrcYuye3BxbzmDiqXQpbucyttGHJGR93NYTrbpPxv",
  "key15": "3fLsT5W6p1VuJwf4YxHQoVdW4qrTVYSrqohcq91LCGVgsEmV9766c4cfdGorGiVHL9K93nhqr14oJucDGzoyh3DU",
  "key16": "3vZRch3Pt6dSXWQ8RhJabmLUoRB8ycmjzoPKoeUNH4S7ESKjY5pcGjTUgWp9iNFjBs9R9VBfoTGJiJdiUoevx9KG",
  "key17": "3p33ZbheHusu2RsKF6ssD1m2bTY5LTA6SWoV3rZtGVdKWpkWhEY3A5xKXfXxanDfMykFZcVEetnhmpoJU5HBnrB5",
  "key18": "45znQMJVGxzBzKhwftUc5jbasEnzYnuUH22ohgkhWX3xmvVrqGPtGkx5VukoDjiE65fa6gVKPnVv75huY5fHknw3",
  "key19": "3BVqkfrVrxUvs5gWbXgQy6YWSYrRjaxfzCp9QX6wSdeJhd2NfzWjFXFzJvud97i7ioxsd7iZ3LEZRUxjk9JSEg2Z",
  "key20": "5uT8mfTbaKiXhyVwJL7gVU5MFftxY2owt9CCzQpd7Az9Gu8yr5Tu4QaDu1uE46Mz1orMFYWThuTbu4qothkuDtS9",
  "key21": "3Yr78kesmLC2iG4rGMzTjomES4XKdr7pYHUvC5DSWVKX3bqBdULHEop4HuBiGBCCxobcNN1yRoLzSpqu1qcTDNSY",
  "key22": "7VwrDu6uDGPDJHsU8fM5hourqsav8iaD8F5vyATPmL2ttTBDv5ppKLHwqRk4jgVgt2ah6T4XwGj1Cqn5LB4mACB",
  "key23": "32qvEryEhQqML8A3kthf9FJHbJZ7AQnJdXQYi4BJvRhpP6ziTmxETo9JPEu8GGGsyqsjqhGXEL2dDVqeVbsaCHmW",
  "key24": "5hWM7TTLRFBGQMQga8xUUuopTJ7kQrumwLpY3LZD2z9QegZXEvrMVKRJ6bPzgwqa7fnWATeuGYguXKDxZfkyL1Y3",
  "key25": "2LhVGiHADXMgaie62X94Ks85GBrZ7x8KvXCrK1Viy5ZHk28s8Go1QjE1hUqm2K9zhUBGJbMX8FBcHaBPoXTfXHMx",
  "key26": "2AdtDAp6YM7REoe8LZFR16fWWy9zccf7ia4uqbTGpvgA2unV77BtUZsqB33u9WgQpUYfQ38VbrAchpGt87ghyka2",
  "key27": "3hG5RAYW4MTF7tSQhokyVjxuftYAgKu8j5oTU82yjzB8N1D7HJqTsj422VKcRqVkxvW7V8CTjVhQdmoNixAU4hdT",
  "key28": "3erHP5WhwMQKugduiBZwmvzZa81KMPPKHeXGVBPqeBDxC2rRyphnaXCgsKwu2rppbTaFW1r3KNVq6XxFeVYMm3Y5",
  "key29": "2hU4TdBEsk2m7HfpfH9SHW5c1nd4117LntYuUczM7cZ9TaFz9WsxagAyswxBpBC8QF6yG12vewZ6LTBQR3taVkUa",
  "key30": "5kH3exPA4g3rXxFLVGhH66R1JSqQihszE8TdSQWDkUaMZcZUn2SDoQp97P7jPMun6uJHrCz3DayExUv1v2br6Nk6"
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

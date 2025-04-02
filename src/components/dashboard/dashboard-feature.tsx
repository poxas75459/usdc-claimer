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
    "8XW2YdKVYBSwypqNtUfLaaSWz8G7yqDwqjVJ45SpxXuCTPisr2kJZtP3qUuBM5jcr6UddSYQk7z8YjmVsssjiF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5csmTP8yQdNsddtCyuYynuJG9E3osHKPBU98NsDy2dhfP4VcsnZgWMEpNKHmeqZoRJZPzpefPijUNNvp5QgBHMgK",
  "key1": "4px1XHGSgDfWGnhR3iReAdx2qGNTz6y3XVvvuhnuKSjd8TQU29KTkzwi9DDRZamHesW2nx2qKX3hitDCbZfdKT11",
  "key2": "3nh8mJpvBw3VWNb7fqyoZdTbxGBsj7ebh4aLiui2jNxuM1ZRF47rGaqCBXynqZhe2ESLNevtCMMwiGYmRd22qzzK",
  "key3": "xuz7RbKaMRiNX54mXcEQqVEgzKrMKCQ96n4sJyXhtb1MgwzYC4SGdWBMeBj8MFt547xYbH3zXyRFEZUAtbxuDiZ",
  "key4": "5GiLteCchSTYrCpRs2Q1q9nc39hqfZqvqeLmHEAbfn9YbGLuREke6embynEP8h48gL97SQW1Yp1MHLnY7jtMK8TL",
  "key5": "GPDvcERzNCWWYMvJhav95YiuqUXdH2iZv7dbDa9CHYGo9nRxnoz35waTqfuuzA8drvYnupMSp7Q1tNyL6vuDczz",
  "key6": "2AFnBiW2o3wbT1gMLasuggjF9zNrS541V8qt6mrXQJX9gXPQfTSnc6QcKaW1CwESHM4tXbu5VBWBeq5bfsZnhiT7",
  "key7": "4QGYUv9DswfT2fv8DekRSicKd4b9rZxZTWv1hcFPq45ReXqU2zC7wGEXbDSwj5Fv9zUhqnGWyGApkEuT4DRqQi9H",
  "key8": "25cZDcthqXLcfUdeT3hyA8YyuyhGPW9mfr3fp5GYg9Qn92rAkP9w69byrE2azMoAbdPic6jJnwbssjoozQ4AzUXh",
  "key9": "26gy7B3Ub6Yna1xXvtJGxyRs1bv4oaUK5qci4jbxUkbpnNh1nb5STbwZn4UmnNK8fV3peyFNvcRU2G9qg6Kb6p6n",
  "key10": "GLnrw4xnpfeNYVHLJVejV8QwNGQ6cPY5s7JumysZwVtKWHQA5RQfckLfPYw8hKhSod3CxSnvXPfkCzWV9qMKbzY",
  "key11": "AXctz5Y6kEKZvvTXJX2ooP93rUmD85SdnuWzCKXrdN9KTEo4vUb8Kfy3qEmEEmQcB6G2rqPrhzWGA9dQk8DZeNA",
  "key12": "5dmmHJDcdHLneRyyUcp9Y12DqBbaJWa6qGcFXGwaK4EkNVyXeAfBeomBtKyXwa7v35a1HZxbAsg1fWxfc1aaZeJc",
  "key13": "5Vs9guFgJR7z4jbKSpfUZtx5Niv85gLrZ2ZQrtgmco5tpaGRWFF4N5nxAtRYSCL5ryVokGNGkJyx7ya7t7ZKxSdb",
  "key14": "4CZ1dDdcjuCwE6nKc97scVdCzSbLfUGG4fRMvJwPs7kidCtSxqTfnGoiH5aF2RRgBeF8hteHfspcBTAQ2AB8WGSo",
  "key15": "2EbJJg2RoZpbH3VDj4DdLvirccEDynSgx7bBrZqLLoAL49yGfSNps9KyDo9uFhkS7sUaQvWdmf2aK4exQB5A26rt",
  "key16": "5hvmxyF95a4dicLodAmhAKcadTDGYqKgcejxbLtXg8tqydBkkNCU9mHEaUHS7AMzsPtijxhfzNQUk7SNkyxthSRc",
  "key17": "5Td9vnsmPZx7TYnTjY932w6YeBaYjVaPh3JTL1a76ZQ8QDAHRF9Pg143fUz7CKFsghNrryNggZwjrUzcEcxTE4tw",
  "key18": "jbAS6nSGqL4vFtXNZsPwJ6kbLJmLZaAK95wDBF2e6LTtuVWr6S2fRJ65m8Dzr6sfQSrXMEiqqUcTzAFkMhes4xg",
  "key19": "47Q5SkP3QCY999mW3sYvenApnskbYk73fGS8eb5hiu3teJngwZYVQJ8Vozwaz4fMx4wzjkboUUhCpmZebpKz1hRn",
  "key20": "4kMeD6uFcJfRSdFMLLeHiLbRcxFrWNmtyZSU8mBntcWUMDt5miDQseRt9QVePqM14gADLc1Vn49fHDj1H6nk5MP9",
  "key21": "ZQRcNR5oHwA9S2zHJJXBk6G7YBYu8iejdjpzWbbJLZo6emXDas649NwfaoVsZdrw2meGj5mYrfq6vbih16VGmF3",
  "key22": "5zzMJmHa4cW6fC7pduAL3dw7Hg4GeYx9s4gyfHtL2wkBPFPA6YUu93VA11NoyEUzTkY8rWs1tKi2ApnWQPLoxnjK",
  "key23": "3euuddHW6B1XR3wT92Zn79u5ZRE2AQz2rB7PYa8DAfgYTQuKyUpVTyiLSRSoGmPJqciFETLNQzoftA4nEeEBCfgR",
  "key24": "micGeepbS7E8WSrGCMp3LDUEYp9EW3cm25ftgaQKmUFJkxLAPGUnfTBomeDr2FV5nxRw3kBPqs7dbccxUpsTTCq",
  "key25": "G1bRdTK1LcVq18vZbFir77NTvAPzT8VdMMhHBpYjr1hYbhQGB5f7sn49Nj5sdMhirjUVH17jZxWuAqJ2Cho3kva",
  "key26": "2jUwFKeNbuUWPDp46xL76sZKS2MnAPcEczmDGqAbuYgT5ha42PodMqhTuzVcz1ZNm6LZuMqmzJYZcLamnGQ4HHU8",
  "key27": "56G8x3hQgB6JAeqvwRBM5sqQZEpNoog6S6kGnK4KuTW4q4mGSiLoPeNXoR4YP8ar78D4fu52135Mfd22WXnTYVSz",
  "key28": "3FgNc4aK2wftjFHiSvYHTXUebybqCLXveb38yJAdE7m9Rnto4qJf6wyypTfyxBFFsZvM6Vy93geM2wreYGzB2Qtf",
  "key29": "3TqtYWmfDmf5QAhBx3LbABXhuB4JDEfkbRveyG3ahEP2B6rsLQExda4Yujn6HtW1yResrCR3L5NGzycyo8amMbxR",
  "key30": "64ZtSFJT4fJYWXde1g6LQ14EY9sHEGfXEvXuKbj3KQUquZdhFshU4kSFJ9QXJ7hYaWnyhaFgbYj6Gxivp3GhNNhf",
  "key31": "4N9KEZAYAGMwsToPjjKnGgLMzxQEwmD6XiUFw3wnDLwi5tXRrZFwejKxqpTrisoTeSoUUPJQv5742JdW6VGPHrK8",
  "key32": "5M3fPRjwH9mLAWNxvnvSnDGavBMm18GRQzDC1wbspsWsNca3q5oYBWsbUwSjin6nuonCAKtddbdHYfbRfEmZkz1K"
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

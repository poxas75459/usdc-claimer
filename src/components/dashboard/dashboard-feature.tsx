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
    "3CsSq5fDVLZRywaAPMTNenQtJMg69ToJMnHt6yo8VUzq6xuBDCQZtG5nHWswwMWnGLomDafRNorNAE8HgaL9Awki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRRYJhDrvQ1hD2Yp8ErCN4qkuG5b13CAmTZDuL5vKuF8dYq5ji3Ym2mKCTY4AHzo638qRzKaNijHcjkL4dCoonM",
  "key1": "Y8mNYhVq3Pg52Eeokj6bZxRaViFHk39NkbhAxynTXovd2pA5VQrZNcKhM5UL83SUPmAnGigr2zZTLvGz6zqbTvr",
  "key2": "673MJKXtja1xYcY6sqfuKnv8gpXdUJaimHNjCyBeVvY9yMKSkYFoeLaYf5oK9iRbK4UTC4Q4BSfdm3cKt5NVmejK",
  "key3": "3jDnWzncwcnkJfJFkBuMqhJtM4515Hk3aY4ipuHqJ1Za6iqXCaJDoAxMwNLsWE24y7wz9KHXpEhyaAgLtALkR2VP",
  "key4": "37Wv8Q53wtWnxEUzf3vqjVLiCiqQGsgbjx1oN3w8C6ERfXdLR64TBn7yc4DrY3o9Jhbcb1HSz3YDMv3jBP83HxBS",
  "key5": "3bmdvEZGaayMpUjjYNSzEFrxXZteLFcKyme4ZD9oetGxbseZGMKfhytkAnzDjGjJGwJDHLanrzR621BGxsY1qG3E",
  "key6": "5FdHPeBGx1MoXaUtGD9zgQQT5uJPLxh6drsJE2LEG3U7uWybytCgymV7TRZH9zoGgUAgs94ymPbQgG7iCchtS9kc",
  "key7": "4oJmUtqsZ8GoWAEUpwGbPrGm9EkiB5xyJJx79ossk3MHCz5VD8BivvtdiNqs1WVzw3zjEkc9VDuxir1VGEJAevFc",
  "key8": "2UFtas9LpuLqwQWzbVKAxyaTf1iHiFYv3ELMeZmSaR5od5EGpthcms3gjvUZrGwhzDwfmx2GhsP3Rww3oD84GoMd",
  "key9": "4Sc55bGmx1tuZNxDg9hA316mTBfq6eDYEf3ag8svNrUy3sdwKP2QpzZUfr2d3vCKBa1V92KwJUZFA7CQuMdT8Mm9",
  "key10": "6235uRBrzkTUpC3sovU41R66UbM5qnHx8mFcFEccnkVxVs3C6U7aHZPeTqseQcz6jCKDUifz6Fw33PmAJ5zFsbY4",
  "key11": "3MLzN1S1LsYKRWYiDBvBfvtoiBifgSjrJPCyKS8pKQXbc5K5ZkpHkhKej2PL7iTh7Bd1tMDk9PSWuxhtjyLxV85K",
  "key12": "482UmC7GmUvVHxEpkZFQnT867wgSkMXvZmzKzCoaxvu439FHSSbfcekUT5Z4QX2MiAAP57hr1ydDwEPXFojS35a7",
  "key13": "P4HGrVYiwZtqGAMt8Q5wkDf9BFpEJ6J4MBhwMNreq28QYkf6KqEa7LzqoHYz7uv25hTbEqNcGC26fzY3UhJvGHB",
  "key14": "4CRw2aFJGWb52y2AgvcybNwjLodJnCvYd4YoGcQ2TfsLZC387Y9LCbNng2G4RkuoEVQdpk1C49U53HzHSM82JtDV",
  "key15": "3fPmvayt4sCyrV97wX9FJugHx2Stnza2xgrZQtq8SDGTF5HjpZHzD3pcTP8KvCtBBSuNi1YGHnEtyeyCkcdkMg6a",
  "key16": "vrE2sKHB9MaaH6dA41bkJorK4sP2mZ4W4hrF8nkuzP7y8p5oSZrMyQJCgW1e1FG4bsz8kDxrZZreDAvLbaTmawN",
  "key17": "2M84FuLngmFnvYtjyZUKxWGrsnjtS8iDBrT7LCJbE2tghQkF1A13jVQrvmEnBFxzhL3tYk4LxKJjW8C3EktTmzMB",
  "key18": "3CBRLg8kWQREgc48pmuJDHYxFR2wiN34BUNiWUDKHdG2x6GCic9GfrB8pB3mJT5RtJFXGbFov6ZqfZY8JXNDDBTs",
  "key19": "4BNzdjQDyuLudLDMdFphcX9YxPnx5tYJvmDmGt37E8rAYCuTWZUojscytwvwADJwJtCr4dbK4fSmb4Gy9ZLxTMgx",
  "key20": "ZVyobG7TTgKW7Lnm8SLHcF97iLQkbvQvc6o4mS3C7CsGsv319ddVRD5xcnSTqTX281zazeiuYTKWQchLdFvosxp",
  "key21": "2RCC1CosT694W4SD79htK3ZusCMbnYvo1qnLr4mjtoMY7bhUA3Fgs1ZSH1v7SSqtavA2YbJsYcNgcDZBEu1JEgti",
  "key22": "2vQmK6UKPoFHtiSLowNfo3qw2BMX9P6Hsg4c49KYyq3dyt4BFkU2p7kFCCcBSUybyoLczs26RNA3jVi4ZoHdDfhd",
  "key23": "2v7NvJ5PnsEAfSsPrsCiC6rSKUgvR9ph3a2Z6w1ztpzD48tM9NxYjjmB5LmwqvUozsTWUx71wNZC4H9mS5TW7upK",
  "key24": "Luqikif3F6xWR4Ap5TT9cK96yKTedk8fHS5ggVtU3TdAjDeP2fDtMsbjUX4KpLso2m1EunXNLBZ8LPqsvu77L1x",
  "key25": "4SJ3QUxxtqqvcn2QmaMFZE3CADKGMKFpJVP46MUGPVSL5GATgTi2X8Biwm6w2Vo2fQZwsCsmF8ovKyFXnSXzDEfZ",
  "key26": "5LnzwKQKHJoUJ8zdvFjH6GhWAH4HJa6VNk71EDCkTyEydPrYCios7xor9bVdPVvAZBJCWYtUNJaii4SPWg5J5EAq",
  "key27": "WYixqqpsaNJFMVg87hNQHNTVCDYMVNkxv2njg1eKpdKZJrJzQsvrbMhvngXjig1nYjEnpwFwsYhomvPRzwNuLFW",
  "key28": "3sJ71bHHDra8e8pnhEyzi3HzrLoSm78rEyh3ffdm7P4NPbBYWz4y3SuuYwF1kTqQshhgbFSPxVnKQ4RcUaDKTogy",
  "key29": "5dkvLX1GYDb9zneKWPfx4k2NLQTbSTaVVSDK3itzNB7TMFP5Mb5gBYpHGHWFQPCQxFQu1EtaNasWeHnhfGpJuV6L",
  "key30": "5Bjp7bGGVv3GXrCkSzYr23eQ5Ra5ZukjBRirRnDzPvUpK4LhZuatRjb1zbnoLh67agB7ZVMrRe4UcCN6EdN4zg7f",
  "key31": "LRq9GGr5smsCXHmwmM7C3QKCKBTuXEPzVBY5ZardsHLjHrMRnMMVpuZvR6Z49tQmAxF8wS2xLU8vDBsiEyJMfua",
  "key32": "5t5nXbeydvq6R4qBdmPuHEkW6PeMUbArJvraL7hoGpbCSLHoTTXpTYo4w2TEmFMNCvYTMfzq7pzQznH3uxDj84Nn",
  "key33": "iSuuqHfjo2JnXNsbyrCevUFdUZhevLTkDJTrsbjaEMzBwVwLtjKujqKQkhnVEbjsSvze9Sd97EwXiCNTqsw5M7V",
  "key34": "3jBNgTFywdyWuCXuThBbaip4qrwg46RZEQ49wSB49WythZ77KyMnCZwPCp3m5afZX87YxoLzC1oUSm4SA2q2dYdi",
  "key35": "4Q4AgsDmjXYb2ZC7EkA7vw61TMacoqVmXRN9R72kJtg89PyZCcRjekeXqWABAGLTnS8CPr25dBgMoL1kpkonXKLM",
  "key36": "5kPBUnES4fHTdRVVCs5mdsP9Jkm8Pdy6JZeNHRFQ6hiNqNdJZMTeiP1agGv8vXAovi5bHX1XQuv47umpmmVLnhFe",
  "key37": "28tRjKaFrzdJUue6ZofHr9BSgPe9GsX9saXJoq6NMnzuqovsUYHG99MkXYxVSmYYHbhZFbe7coN8UmMEAJjC92bz",
  "key38": "3R7aupxyx9ziKFiA94e9HFkXDmBqzfajr3pXtpXhrVbwWDLLxf1JRdwNvR9fk9BsP1vjDGTbbv5N4FjKLZAgCAKu",
  "key39": "4PUvtwaCpM9JTbWgz5uXgYXxRwDmcYmw5QhcBiTkccV4ZVEKeo6QPQkvRsN5vJJnyato9pkYcWbqLVZPyfjmWP7J",
  "key40": "44MmnrEcrcZmtsi8z5sQMi4d33fti2n5jzmmY8yQcXioEiUuisrvr4oLqQtdstTU5Jd5TCcXNccX9ixasYQ4JZsm",
  "key41": "2p9KkJhQohU9nxK9NxUEnE7AXXegdnr789o8K3RWNBcThmkDiXSUsyY6Xma4KaAGFVgSpQtPqMkzV3Wtk9WT9tZE"
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

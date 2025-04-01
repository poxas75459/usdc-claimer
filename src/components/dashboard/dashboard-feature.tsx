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
    "7YzLGybBrVqmmEQmSGmJkG5ijC4WrsJ96FGHeDikfcNjvaRPtnfTpGXHZBXUUudQ9sTMsfYirBLNQqxVZDrLMig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEPTx27h9d5axujNnhrfn2SGWnzewCzVHZGWeWbS1HM5k3UxaWqALJcZu5fskn9kWsnQ86XpcswoB7qqpKZpmww",
  "key1": "2r6wUjwtTwLzEScKYgxi6epc5Ws72YJauMTbXrd1TZDma8ncrR7SiyUydvYQ8FRZBhZELqsAQ9PjYAdpvjehvTXX",
  "key2": "59idznnJ6nNx1s3z89icgcAaE1XCkkoLNKzWQSay8eQL1t32Djr86AqEiyy1zqK3eaHGpXmdfV8VUZapBQSZHGHo",
  "key3": "4tDixsRVfWWRtxL6JuNjgBx3MzpmW6HCSs7CqU8Sbobfcnxjkk8BRjjaqHXPYsSjXdTkRdRcM1iK1b3KFMTf2pi3",
  "key4": "3z5VvE3pKzohXrHYTdCGj9YEBpik1ascnyjMpMzNkENpwfMERS29x8pYisPGU63BzH68bprAz9phTYMHWQby1qkr",
  "key5": "5zze7ngNu9BYUmWQCFsn3aocUPCKqwaergBvFXc4UJeN9oJNH4bdp6W4Ts2tjenqDeGwsmmuTozpNCPP1Ncn3Dm9",
  "key6": "35PAogVD6YKRTRDxwBdZStd9Ytj3FTUfsS62MPFzLhGZK2mCTaz5vHmLeheJNub5YgyiD8dZLnGqacdy7iWeunH3",
  "key7": "5f1z5NGLFhPxiEGsZNu6papDxK2A4BTEXuBWvUoY4XwYiZiL3WfoB4CWdcPQwbzFbBYGdepKihEppSBky6VeU6i5",
  "key8": "34sstC1MQZwDsD8ic1bs4ZjddYaFV7Wn26jr7zV1vhbBPLjS9zVvwn1hYYXQjieK61BzmywKqHDdrcycouTt28Xg",
  "key9": "3dBWcbrDiemcP1GDaFpCAAtu2sZ8QTPDbhP69mnxFDsCQerjDefp4p59xkWMojM9zagkEMqfodU6seWFk6qdGaWN",
  "key10": "5GVc8z64EbjQkXLxFTiRkNXwtshXpk5UmjGoP3xrzfsQxn5yQpVe4Dhay5jSq76K235bn6BeRhfKoL9tT3G2rDUu",
  "key11": "4i8RGYPi6snbdUc2LWJGNWvb5ALCcUHkdeN8bnnLCenk9VNguC7iT26on7WJwP6BUCAbDvGe1SqJjDMUAdf3AuN",
  "key12": "M1WVEhi8QVQtQRR9ibTA8GuzE1bUWQqbMgqHpH93rTp8f9tyNV7Z1r9aT3bAQmLYL79ism9mnXnMjdmcujVRpLY",
  "key13": "327KD5ekVFzsDFV8wWRF1mNvhKp1ATiUPAZ8uXEwq1vZs3eUWoUiSsyenHpvSS2buype6tRLRNyzTaP8WYDpiTff",
  "key14": "2ixVehPgWAQvx6rEAWnLt5vsPkLAGt654U8X5bpYNiKrFJKb97dZVF4Pkf5jJ6G3Pf1WhyBE1miwdJdxLSFRLSoT",
  "key15": "ZNVaxrd2a6ZfysCddq6vpLtntnptpvjKvb71EV3qKWnqu2DnB5nWU1jonF5h8qxvBmE6SQsRaeg37YqKjGBaDcW",
  "key16": "4hJZMsCejEe3ctyBbxyvSGshAAZXamF1Te4YMwB1CpcXrZDeG5dhqPc3n3AC56eT1zoga6YQdbAEkEuBG17r4dwL",
  "key17": "2fcy8eAvToLEiFPzooCn2RrgA1LwJBhqfZARrbjes5bVSKpJBgeCCvw7hBPR579zH71eQyoXGkQyTfjr2cGYJZhN",
  "key18": "4KvrpxBiM6mpnFCYJstCPVquVSHsh7jc4bWn5SDBGrobWbHz42Ksb9tuDgVCmBD1ypoV1vNiVg2AZ8CdDVuEjjHW",
  "key19": "5VaH68gZJpfzdVw2PibVd3CV2HAqBjtGMexJhydATvpLPHs49KT7hxHoBdUWQSMFkaccG7ivqwC1MKnrBjEcWiQQ",
  "key20": "rbRb7Etm5VKdAXojiyv9e4A5ciEcNCdxn79wZqDGyBBdtiCbQMyhasVULCsm2SWpAPJ92aYUQLJgdpHS8jC6syp",
  "key21": "3XWFSNYUykUKWKLcjjswW3mWCerCoSDdxBhXBCRvTfQW3nAEPqA98pSA2USuyjT2anb5stHaogH9cXYuCuWc5twk",
  "key22": "4LPXCtWhYee3DfWdefFJ87dx3c6A6b8P9ZghCQJZyFgywqgcgRT1eBFpbGzbHyBxAbjzZg2Z16UkUrpMf2PyCvHH",
  "key23": "mbhtk3mKXxjgWArt7MCpF4ADyYi9mG4ddr2bqfLa6nySEPendfNTCvsgzgA43m6cbJTmtbpdRdkV2zmkrv75PPA",
  "key24": "55Q4HQjBxNa7QFmyJUivv5LSpmrVo7GtoNEwRKS67JiwHrjr4vVkWtyA9vuSMcaxaKugavKGQGMPBjQPT2kreKQg",
  "key25": "3kPEKB1ttZetgKxkRVs9spDiJQAqpQwc8ZdeAdAVX7RA9mdWWF3KZodP2UergY8D1R6WD8Db14vWStkiWXGqJ7NA",
  "key26": "5b2yUrYUKyJhHXNYLRaK6ppa8qGeXenjpjaHEyZZuHisRzvL3vAMDDoTW194JHMPkKmZG63tMXkDmaXzLRgF9gqZ",
  "key27": "3n1y6Urk5H7v5pUByFcKxo6UU2qLGN7DSCirvkvkYSW1fEa83pRamLbrVMrNFzzC3te43mdmwNDPirGMZcXoeqaX",
  "key28": "2Pu3TQxJdtnFcXUoCQfS196RMX2CB9UJx4ghv92ZSm87U9KuTeQYn2VK7FPfpS7BR6bp1b63P1eSFJhUta8F9S3M",
  "key29": "eb8F4MvqsvrCcnJeWzgK5RnjVYFym44QnibeUqYMg2o7bE44onxu33RrTyrG5KjmCAJkAVms1uZopFpGiRpaF5x",
  "key30": "59kVfPjuKmYDoSSMaRqYhvUhwmHi5rXf6nMpVG9EnXi2eXJsPNkSxgUJsBV56PemMwx1uvB73wqBmiHfp7uHzZxe",
  "key31": "VhWB7CVivaaktv7X4XAVvNQ6ZVmQxVLbksjXx1ofhhCxPLPm96prvYg6T2hD3eS8vb45NEfd4uudvdAFs46MDKg",
  "key32": "23xuxEGqR6gfchgHxqm8qvNFGJ4a4uxW9Tn92EM5TN1yvKt72NiPYMt75kL88LZqKfE72ixwYnazsqXN78YrooEf",
  "key33": "4XiYqgWvMqx9MneSHHXiyiHXn46LfCArC3wnb36eTsR5M2oNpt1Keb4Hz3rYYZYUiH3Xc2ZySUqVUvjf2vFrEtzq",
  "key34": "5d1CjNQANyZqTm5QbKWJf4vACTwEMQiXjKxFJ4HR1NzT6Lo5AyhwNWyhfjX5Q7K2oUv4czccUKMy8dZj5GHLDBWf",
  "key35": "MY43KnEG5fYavEx5B1pZuMgHyGf7TARMc45rmjekToPyZNw6yDfSu3AfY3pN9WLbgprBPkGEe8nyKh7TLSMpYX4",
  "key36": "5ZZJCyoQjkpK7RvqAVF5geaXs6XjFabwgBrhpoKyiY4k6Zus75zyhXX71muKhqFkCrmkocYyaPidWq2gJQdD1YLP",
  "key37": "3DY58Ps7XT5JVnHByhFvyicyGpR7uoeVGEMy62SnBhmFDoknLFv7jhnV8TsJAuyDRUsfZAvgi84DjTg4RdmKBMa2"
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

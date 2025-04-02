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
    "3XhVFsjmiGdrqrz7GcGBMkPgFLuaec6ykidg5bKRZF7tTtC3HLqhNfZ9FV42DZMrLA99LWfDQoixaq2RiTW8CzdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hXAE9G87c1FQT7iHziLzBVY3ExHdBQBCnJcxkgSwjFDFysNL4jQSV2DnjCXh6289SeGbyHYQsPx7watF13Pqvk9",
  "key1": "4AmdoQqTsJf4o6BLGLz999ZfDLS36iuQKRJod2MZNJzvmbQGC1roZNHqghGKe6HY6f1RmRevWjKHKNoEmbqTBS2q",
  "key2": "52uqvcvjdir3S9wdWa1efX51GqQ7ZM77HiinLwkAU2xvdJDaxu1mVMQYdGcaQ8ndNzSeuzWKTSTqiKRAQo6AQbdN",
  "key3": "iuFvzFLhgJ4v8rUxD8CXvUKSBMfpvcA7zpGyJb3PdbN1jQ91TL9ktANbYn9mE8VuSgSJVfSeQCGimR57hmF5Afy",
  "key4": "5fkvb3io87cUYMs8bsSLmvGwvtkJoEXnX5PaqEPdRoy9UrEWot4vd9P3xMAjRufCP69pTiGP6sFgTQcEcSiMCqZ8",
  "key5": "5HSaqAdcjgRMfZQNnhG8FwgBto59UyCSD4hGeUnwSiEkdyPtpJcQtYWPRyqLnUxPAhn7Tyu2vtnEJkEJH9hcbny3",
  "key6": "5gArmHrUQrMfxFWx1ovR9CjZpc71SoA4apqgmy4JX2X8DndkXUyXpW3c1cvYEWLJfGvjNxpCcpeSvAAinEXaEs8E",
  "key7": "UUnTBKLa6EacdCD7T96CZsAMqgP2GTgos7ce1XB5aEH5V8ife3tCi4gurf36bUZ71BenpyoEFw1Tw1ptL1Ku6wC",
  "key8": "24yh5XYrmS3dQNGfFw16LVUSpr3oaHMAPqsz1CU7Nv13Z369F6oz5V7VSeWujXPP6AK1dCHgCvWWUhZ2ouecg6RR",
  "key9": "5BfcKSqBh12ACRkGfEgKG9x7X9t8AWyGjBECUTpsPgt7QEtfX93C8zneJLetuS6otfwhnFnA7Xbi7AxEKvHWeYpq",
  "key10": "zxeA7RFpybQW936wkHNfQw4CM6rumj32b1sarsZ2CaUrutdMyqy2TKKQiWkK4Ym7e3NWU4ZZb3iB58wvXgahNo7",
  "key11": "3QzcUNHizXWg1UmSAbASG9CdKYLCHvDCmS7Aj5mdft8uDxCsNS2EgjvKze7rrmeX4a69aJHNNLVDsUPLaWdJE6qo",
  "key12": "vrXDD5f8ypVXNgib8DJyM751BNDd2mxyKn6PeMWtTutbohg5dKrXUpKoYnuWKsS61BfiaV6NEt64vBKJkHQy6wi",
  "key13": "57czHjSRpCjGBDGXGAAYd44KjXJEzD2eVxEDkufzqHsmFzkGrs8Qnb5Uck2vjyE3VZeWvV1ai7SMbKB9hiidWQp",
  "key14": "44RYvy9hkWtXpoRuLjr4xkhrpHEXovyPQxdiFP4SGPZiUVZvD27uvaNmKoXnVTuAEHDBtfooA5frHLuTNMNDDdiH",
  "key15": "4bd8qdKD4PsMBijJwX6JhQ6UbyFuScuDkfTup9duYgTyRHPvPPJtjTYgHQRjshQLerPdeMA91XFUZMKKcQnQT6xS",
  "key16": "29ZK3Jm8hiy1TuRFZd1oRsnDmpRimtULw1oqZsrpYEy8CoXWkABzrpUHhmHLG788KyKmesJQhLzAqHWvPtmfBUGM",
  "key17": "5XRBV7bXMs7kNjFQ9KZ3pG9z77Bs3Wcz8FJA9ikMLc9Pk8yme4iYasanfWw5fqSynmQyhVj3xAQ9AtYoNra6srFE",
  "key18": "5pScVGnz5QPh3tuk7F1uDiFJWSQGnYmGWC8DB8t66bDE6CXJvbu7nsRcF5a4V2ky1x8T7bpFuCN8zKwmsPpXCkZ2",
  "key19": "4FtL4Hk3kJ5LdZZBzkumTj7u9M16giH8eST54TDKHpXcPtScbaaSFMfq7XHM8fKWSRc71Eu28tJ5pAimFHa1ZMwv",
  "key20": "5JjFwUFfgw2TN7weZxpvGD65MA1imQKdsCHWVLS6y95sKkXmzQ1s7rpA1KpnRZJB4S6xb6HAeSwJu5qdem2CCHxf",
  "key21": "3gW9pss6hHBNHdtY3KTBrbszt3bLWf9oFkp1pEkdcHuGgFrvXXQ3LH8WCZstxtkcLJDKetqASCEY4EsbmJ58fPWx",
  "key22": "37JMsHXWci8gRJmKuAVA7qTxGdDYva4dMmh6uGM81BVhw1XZ8FA6LkVkAFhoHBM1DpxjwLE5X53FTEuyvWmLLYMe",
  "key23": "4bydz5MA7oqakjxYzxrXCuSaVMNgCS6iR1KGHhnGWXbQAJssNQsAVBHqXkKte8CjJmxDifzM6oyzPfA1Dz9CyPHs",
  "key24": "486xoD2FLFekDMQLSZs6mRFGFXsMMnW7zCXwVUikaSPUm94XMMVR7fMHfTDbATqqaTXWnLxZsHGkURKJNMBxVaY2",
  "key25": "3Fu47BjPdMSCsomPCNQn6DXSZLB2wnuuHBkJoWgcupvFV7qvrziMLjxbUynPqQXVXiHHUSSN51ysxn23QVyfbwKs",
  "key26": "3RbWAHVZx9HrCtKWzgizo2KitThrj7bosxTKQ88yBA2cXF91RX6Dokxim88GrJo4FEjNjwsohqJ4X7rGqr46hXyi",
  "key27": "4Gy3upuwJ38sx1H9KMDDx9VY8mTTcPKZAqYP6Lchis4eY9q3cznbe5zHPePk7z3GiEDZ5ZTEf52onS84XWMjcspn",
  "key28": "2Y9gqH1ZQB8kVVxgQAm9qfJcHKra32NLymjyEkjSqaYr1x1iibE31D2Zz3ApgnaLDi7i5gsV7DPAqCFKVLgjSnQ9",
  "key29": "5d7p5mdJdEZFc6mBv3goeZSHjebvWrh4f5S3mkFMG4pgjR8ZYaYYer7mcUn5tTeTCkzkXmEKUtsrgf43r7Af6QqY",
  "key30": "4JV6P4GTnCXrYXyAqc77CGGsWeN1xFksG3znGinGKgZ5LMGJEorqNdA2k2TGSjxNnrgDBVfc3MpKaRhXgdh9YHGs",
  "key31": "4rs6KwJqf9QMrquD2dzkLdn5Xwv3MCQ8gTbu5rXKhRcvqEKQqhobG8tzBBhCJcJUokBxJV4vy3fyahFGQanctsm8",
  "key32": "8BrpwdL4FDR7ScFRzUw5Qgf9gXUC91qdbT4vvz2iz4ZLboq2eoYFRQ1gQqYyeYvMMLrJL7XBqApYBQpP2EEW6d3",
  "key33": "xAdnhZw1ujHk6qra9V8y1TG71LPo9MGjVKGq7TnWmHifybuiTL3kp7zirwd7QDhVu4uFLCEeyFNHv2f4Wxrg39D",
  "key34": "39gnKtTyHrtRMEHhVDa7YxXh6aPHMMAnW7K7c9U8x4ZBcYbrsmjiznx9XhwkqyZg5wJxNR9WbYf39Npb3Yp6muHX",
  "key35": "3bvwYazmKXkqowFj9RtMGgU3UEC9uZvbjoaQrhqjuFpb55ArEY9LNnfDx7xDTAaSDoMrCX5JF7JEp1818AKYErP8",
  "key36": "DTmTzs3fzWMCEpp8CDve9wtxxfNwZBbQs7aL6sA5T3d6gHKi3QC6WPyHCHVMG2sNJaBXyzRouxJgx6HnZ13GqpT",
  "key37": "5tbP8QPxSTatgPAqPMg2Y4c1kPDGkAS18tEELNqECtN9cdW59KAHHFiE98f6AZaJvjPMfrWet6VHb9Z7ZUZBYzc8",
  "key38": "3mYgWBWs6XqixpYL7pAsPouRQxA1DoaQLiLWEnw744sxmxozGb7rok5Q5FCRr4Q6MPdmSRM8z5S1cUJ5bgso41VH",
  "key39": "UrnzsNwF2HYsR8SVqMk9FVbDJoXwzshNebobarMftENddJGzaQjCzEd6i1nSKm4Wpvp6ApbmYcYWQ7VdchXhpMA",
  "key40": "R1jUxb5pgc5sdWLQLhmLrvbnz9HCGdqBW1zgDwdUtCHuMKxN2mqkjfuc2wqx5BGQP71Uc6bAY2vtf4nq4yzca8N",
  "key41": "Dd9k1pRWU9YjFgfa9NnRrRxUW4ZTp25K4uwN3A5Buy25yXziCQLYz28SY1HwNpgUxnK4Y6fskdcUMTH1hzkhWzK",
  "key42": "5tXTYcH6S4pqDGNSiYYrLcLTUaDc9NCaZ3C6UkeSfbLooahPqE9kcPqSqNufC2tmNG43gaRFi29r5Wa1MXwjRy19",
  "key43": "4ZTuzNm7mAUjGqajq4HUxQHxeGS1MNfg9HcCq3sm5fJ8KMgo3q6jwaGwijAS2J1eyfNZ7StUzMaahiKs4U4iWB5Y",
  "key44": "3Z88XDnQ8Gdj6vQp3PMBgBqeqZrh6iuEtC3GyVFdwXpenSKyXpd5RBH4xDSRXkuEjUhCcyfbb4syJxyRW2VBXjSc",
  "key45": "3JzmQQLmWU4PVECWMa7UR2nD59uP491LrrQurPZipUwhXiUxNuxgkdrQ87tBZuKCL8ND3gdgjTompHrHev1fdhyU",
  "key46": "4zTZiY4AttTBT2Hff43UThmKJh4cbrfKp3RM6V4kVcfYFBPQ3PieuAos5q4KtHXpba3R5qLcHW1kabTBTUGqbNR1"
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

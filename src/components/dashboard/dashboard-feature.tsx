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
    "61gBjv4DMedvfMfEDSBvQDEktWqTmpvwWgAM3jJpysBmZZHiC3fMKhnd4eWxYYyD8HsZp4rT5JijtnzkP4uuM1Qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACZDZXLGiBuE7UtBQt4r4rNpadhW5BwMuDtDEV2CqQbwfE8JN6xpxUjpVnKvkpdkYvL8NLvzMcuRR758wE2BEqb",
  "key1": "2LQUN52FPzTEt7NDLUFbC4nZnNeUARBVxCZTqYuEuRcTqx3J5BHg2A7x72gcrLFST4DKSg7ax1EZgxkCbsiiWRmz",
  "key2": "41xL3Y8WyrTN5CCJYGc3RZqVK91kj1coGR6apEhFd5xDavKAxJG9HHMxqFE1fDDoGvmY8MJgNoBG1a75pd1DxDxH",
  "key3": "5TY5EBhdxWMuoa9RV6SnGbfYShSHx3LHxZUEZeNbh8JywCVp1SeEnTusUFsMxwSRyY1HYX8SrLJwYgbAHnXZpBnj",
  "key4": "45jTqfoPdw6LtRMuRk1J35X7nMLyV5mioGTMhBLHZpNvqvGwpiG4pXDFmgzJRRNT6KFxRo3FgmoT8hktWeXJT3J4",
  "key5": "3iJbjvANu5aaaH2EAvfNzHmZF94oxYeKKMfx7hThiVyz8RxswS5Z3CDnEootEUXH5c6xJUfFEeu4GxCSXnCbjXV5",
  "key6": "LPU6qe4wb4QUy2iU9NDZXmBAN9qYLkt3sftspAw4ATaRfN71ZDF8HHyYydJm5zfy7ot3gFDLhaAoME53zCbTJzG",
  "key7": "5vqiHyo5kvQJAD1SCf5DnSWrL2LZaX25uUBGsqUuESF2HGfQBhzypjtmn2ffKXfKJJSqWe5q2wiroeizQqKwLtD5",
  "key8": "2YMzKEk893SqmxaYGod2rTMDQtDRrchApV54ifRFvqy7EMbn6fqscnVoZFWxM9vAc3z155XpyJESL2dUmTCPCntk",
  "key9": "4Bmd318kkt3dvC6LHZsQPjiRNUXbBjZswXnsR3SKprw5sZx5SgBje8sYvG1EpNKVxMrGsxKrL68puNaG6ggDF2oD",
  "key10": "tyN2fDuWhSRUsrfJeVJn6qvw32nMRfm63hkymWbeRkkDLZrbWxJx9L86SUR5GhdBWKHpvkegkkjHoUSYKSP6fFs",
  "key11": "4cUjABw3dcQ72XLRcqhfXuc5knzMtT3KoeDbA1zQD2fENrfSXHdKUsAQvoMLjhnHxehhgBmL1WPGjAzdr4ywWmLo",
  "key12": "dVTRDABp8pzy1cosgSSnbQmmAAQ9PCk1dFQTfhn7Lxv3D4eRMLZScB4ASa2YeoyMnWAfjxomSE7uwsCqHfYvfjB",
  "key13": "3S8CKUL1BkH1dWR3SNQrcgUy88myFKXJ4Pq9xDN7XUyeSggKtkjhL8amMKrHL6TdZdBUtzLNcXsmqpGS49kSu2zy",
  "key14": "2RpZY26U59SMx5WQzv74Vx8JZvFwpWQPsCAYvVpMWn5T38KfYPfSn5VpuxvPUMaBv7M1XFqzciGS2Czb1pSHPc23",
  "key15": "EVhnhypR3Xqkwnb3ZrVVaULbfRmn9WW8Td8GKKhSqTyTUBeuUyCRUspLsRQvVhEFRQaitxTaeewiAzLnt5S5YRQ",
  "key16": "4Q1bJwc9BBLTyAYYBGkogdFVrE2mFMYVEGVnGQbNQCCwW4g1diPMN7aUXmhRwDGguwS4LE3FKWpQj3yEkpdvVq9G",
  "key17": "VV4WUYjeei5qs5ffmrM5AgQbkvmamNiMJZzUHMSV5eiDLfxyrcp96j62BauRFMXzLdo8wXtFbRixx8jfh7Ed3Dq",
  "key18": "3nUUjMjB46MGHSJQoe8hxJAbzC9uyUHAJy84Fs2g2tcRf4QiqzN7YpVz622RU99wN5CknwcHWmcCm4bTTTgSa97u",
  "key19": "5ePPAt26BarQyFjveadXHkonLr3wYxTfcCTp9YFzN1qjW6FJJga4qPZeSP3zQFWcn8Xxtu6f3fK9D5uRkYCNMx9K",
  "key20": "2qxHnkf2vvGyKM5w2ptsBqCsC5JNXEjmAzd2ZMKTo8ZnrSBsEhZf98iqkwpeWc4DQxzMk3vn7Q7a83xdi3Y9LeMs",
  "key21": "Urs9Zg4hvM1VMF2y28214jBASUyybRnnxTyYit1whXegNt8yUUrWxrXvjEnKh9bUsnBv5RrENTBcoSbSf9Z4sJb",
  "key22": "3mxiD8AyJiaDfL1c33H3BZA8FTUoBknWd7GaxjWVpBn5guZwJx1ym11EU7haF7CUmdHZotZEMKjwJmCF7yQoyCCM",
  "key23": "4WH1pZY1PCd5fEptU2Vp32sowPxBYEegr37ZB37V9KAVCFhkCCp3vt6vvrVE8euSdBsX2Jorg7n8ccMPvHoAQQVa",
  "key24": "5F1RsoM8BUudjeUJiz5ZrbMyhuKNPf6Ttt415BdhjJYaJTRVjYcX4eShcrqxo3tbm6GTbmgCKNcjoCtNhLi9ZeoU",
  "key25": "4H9XEWN4P56GwS4VRTNxxe8msw9kjR8k7N3Y9YDJaHcL5uuMTsw4HpWcemAujVAaLgy1u85CDV5WAcnMvWnEZakK",
  "key26": "27U2ztQ8o6gAufqFaMRPF97trmFbym4HQkc7P1cATXwQKV7jZHuUqioW7fHLx32wMBTdPeSWapR8yLFYZLZ3joHH",
  "key27": "FbpJHUFPrJoeddKQ9H6Nr2HDLFDA3Guk7qoVNe36y4cAgiMp69DQm58rYt4pKpqdjv9Hox4J2SJ7e127P4MvJD1",
  "key28": "251wTAiwz9mNvPWcCdqkuHcj6ZotcX1tvbH16opunVzpjzECaPX7gBusvxg4h3NVC8yNQ3HWx8uDBpkQZxuYjwg1",
  "key29": "4pa5DPReUCgjxLTKbNC4oH5XvXMkfiZJ46ZuNeY8SoKWHZv1kpL8nTMHNDjg6EiGte64SdCKCLwrgShc6XYVs6H6",
  "key30": "Pd1SKjckqkXggM2tteW8Ne8UWQM1F1W1L2KqTh7nYSULri2BwzuPg1xtWBkkK9S7gjp5Lns7wGhdtYLhjoDsuTW",
  "key31": "vk3JLNQVSsXovPwPrnB4nL1BnXykzqcupNqHJL4ntdbSQD1Ag1VqaKnHjHsgq3kF9DdpFnP7DHPA8FdJBgBxm9u",
  "key32": "65oNkauD9V637rVxciX8SaRJ8KYdpJm1xWK7MUsjQ2z1r4Trc7YPNqb1J6dvs5cCs8Y1qetHPSi8xR1PkSpxjxyh",
  "key33": "3qa5Yox2dnNNsS3VzBocL8K6oz4bmZCRR7KBnbWP5hW6vH7tpjz89J8B8T56SHSZWYkFzKSx2dKN5kuWLc7xViHK",
  "key34": "2gCzLQRCsMMCG91BJwoaVhi8fqDoj7ojs3RTLYYQt56zHJtybSULrpcFP1hkiRDKD9k8ktGWMWBTj7DrRXTCA3bP",
  "key35": "22KnsXjeGuLshdv85AFaFGmreX7npvxLdKQS7sbCY4gZjXt8jHkCPzSsQSBkHpuUTKfeKPdCBdv4zUE6TGavwH3b",
  "key36": "2LPfc6U61QwCtgMNcz5sXoZRZyzGyCV8VVR77HPfB4qce3ege23inN2DdTcapqG2LLNArCa7kAdPQ7JKunbjzbQJ",
  "key37": "3dyyFDqoCQ2q76AgBd1yxD4ytPDHVeAHQuhovLHcBECRDzFa8L2Qy28qycyMrW3HABD9gVoXgr6i7uoVyXnXSstw",
  "key38": "3f2iGH5QzxKadMDc72eHWFup3yY3RRjpyMunPGjM6VQeRGw4kkdid3672KFPdB8ZyvzdaAeuDpJhYgZqPC8i2Fck",
  "key39": "2dJ5AKcNgVNAZp9tTC2PyUD5KGKLFUNr33CL4F3aad7WvW6TabZhAhia16mjdkWU3mzQojrX4HdotRVi4smKenqF",
  "key40": "2SUDGJNvSQm8WSd5hsNSyR4p7H8qUkxFYapqrDtJSFG47BsVK7aQpDp6eVxt2b3pDWNDMty7GYsE3ZCyvyUUYEsy",
  "key41": "nZQAkbbdLK9HVtzbjpCVEfoV6nZkJArpxgs8HBRD7rzYWiy4rmZc7cX2n9y15t4zyF5AVnV5EkKfxQb5RM1Fvyj",
  "key42": "467AVtqvv2Qs1gm7nXTvJ4TFtrgJVCttJ3G51rdCMF8mGwwwjnqFFmdGNNEBosGLeTHBaPRTeuXa9amnCH35WJRy",
  "key43": "Erw1wwAyJ3xyy5gecJKJijEtLPWVucZkZNS5c86ucgakaaB6praD3155vwYZLHf4iFrkk1juUWr274kWfgVKwtw",
  "key44": "5MvTPzGviz8h8eNSh57JbDdEAMrDz4mr5C3yfLCDoeLY51HA8oxgZsjQyVQPRjLZKJSEjX5bSPhmRC5UJ3LT9A85",
  "key45": "Dhgt96EKzk758ojhiwLdh4RW6p76P7gy24YqcKZo4vwR6BzNuZYt4vtLc9xckypk2WJnss6angNY9scDu1LoKRc",
  "key46": "3N4wfS2ms7HGgvorieB7yoZZF9zTBZGVac4rdEsmxeu3uhgFGoLDAZ2JFowJuNGgq4TjBboKUtJxc9RwxVdAx6He",
  "key47": "5egBEhh4JiUASkpWBHVKw6EQMAi6K4XxGxs9QTzc4hnDfG9cdHLYWKgcHsT6sUmcwLiJZ8HF2mq8Zxvb2ZSLHXkU",
  "key48": "34kZaN8Nc1fUnmWoYmG1yvkPhKPVGpMVdkxAYeJDo4UYyTiLhUGqd8kAFeWoqf1DLzUVZS2bj6SqJbXPJzM4nZu5",
  "key49": "3gsdLdCTDGw3DbKJQ7kwWMrAnZjrxqQaQcZX4nrpw5PiUfRYGh4M4a9YVHreBJkNSRiRdfAFxns2p3kxrUxqUWGT"
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

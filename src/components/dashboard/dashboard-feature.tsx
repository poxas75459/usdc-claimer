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
    "4FKBfbj9q9X2LSEJeRaCwJzamM2kSFjwzhf6oMnXQXmBeCLPKjxHU2XSf3imW3UT5pRYKwnAqctJnAUW6rFkwEVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smpva36z7rDEQiUizh8wSAN3FjbbsZtiTWBD3kMuyZnHpsp2MRWniFKTPGgcab21EJktginCB2z8teoCHgY9FD4",
  "key1": "4Hdw3ujhLqhnFYNcgHnyRmCxsazYQqrqpgh9AEkVxEhRdTo81Q1NVR6FQVXotxEJY6S3ErTBmPtucWwsuBUPqsgb",
  "key2": "EjTe67zLMUZKw45AGs3stfJvBULgWi2bqbQdNLP29AhJQyDhTociewNXv4MCGLDd6wmfgbgzyMKmZ72yHxpU4so",
  "key3": "U7Z5p1U3H8YrAZbVAAj3E4T8m5icWJ7knQsgfv2SJLPwUfBiQc5ggWHKzvv9R2qP4V4VjTz5VgqWay3b8nXo2kT",
  "key4": "3yoMk7bJeWWEGi1wK4gcyRiW1LUzkQrXJmA7zhY2tWKrZCarCgtCfc26E3DaehuFXKs8FALiYktPU9rPvrNKghbY",
  "key5": "hNQbgTCTQNCqjUoJWMqybxCDBPymEpUgogCz7s2mBeQs5ymU14BaB6ds4PSDBPfj77p3Manv4axbbZUZ6B9ChG1",
  "key6": "4uEhByYrE9owqernjyKGjV3nseDrWhJc6CPnPHVgnTFL8Nh7N93UWsc3yTJYQGFkws9reXnQqsuuKpAuHqKs2D3W",
  "key7": "o4y8vRY6ijQbxfP2tNQaKQtKtAMd9z6oXUg767aUFxALevCLrHUntzmzvqcGgaFdnPauW4akfN84RLp8oqVNiLV",
  "key8": "4pWpTv8KVnfm5MNVckH47JemVxKZM3Vs32PDXzuq6DVmyshLdHqZBcR6jPYxe4poX1hpm7VvUrwE1N7gewiFUvoi",
  "key9": "3AnTpYHS2Txm7CcFoTgDp3ew2Sg1DJhY8X8Kaj1oDYWPxGemV9gSmj9A86irpLbFo9Ae6mupvkvtFkkDaQW6ah1",
  "key10": "5ms8TjjU3Ms2BBMVrZSBfXGHqWYonQUgk74Qhn45DwkjJrLHeBRcdbB18aZarmXncsGEUu8GcXHcfwg9f9EH7jh2",
  "key11": "555vdAJVHYPdUFuEnhNAEHtauaDoryuuSyHKY4zCUy1snW5NVfiWFNbgnNNH6gi2hQqkpdC7BwCskuC4gURtiSjU",
  "key12": "3iHNfHeRbVJYkjakB6SBKCfEqwLcFLYMCead6L3o6tXCRCk2pTAfiKAwx2xGy3Xbmk3dEHPsnVD71Ux8u8rM3sSY",
  "key13": "my7SGY4uJz7DiqCey7zyej7Lr6vmVVJ5vLjMHihDF1a7SvqjMSisVvih5cFZP7kS5GKRnJq6KBijaNyodB7VbWc",
  "key14": "2qoFwGnmPo9sTpZd5VeE33J3p5NnuPoZb48iL8ELppjhGxEeaLMLtACGLd4YKKJkUS8wrdJZHQibbrig9X6hETZk",
  "key15": "4kcxz79aEEPCTtn2j4H5rz28NxNovtpjMY6VRqmgvPymaWTmYzvNSwACegF2ED2jibHhz5ApBCDmfgmgaST93qL5",
  "key16": "BTPF424rAwZ56tnbSJoWZtCrSkoNerjW6ewUG1BSW6qp4GkJ9ThWVu3c7k53dqF2DeQv2WD8SQgGNey2vYQ8UHc",
  "key17": "2D481hMUtJmv5mzdTeFriXstqchuuz6kjmenJGJLq1yKUH7xqsReXN7o6bo3Wuzs6bKd43m3pGM3cVRKDVeS9Ffr",
  "key18": "tmiy6B94VuTGnowFYMoThwPJuCHfaUWpvHc2V8QdPCmYDpQx4Hb9s9XE6a6ybYAKv6WJoHLLf7a8WJG4qh7ocJ5",
  "key19": "Uy4c2n4gq6sUg3V3etXz3L6mgXaax5dzRYiAo7rirVk8mLoxzsqW5p6NnMXCuqBvbnXsMGsm1Gv3b3Dwx9Z6wWs",
  "key20": "5qWbcJLw1k4guHc3KXWTzibRDxAq6M5tsv9DZfGE72YfWN3oDwdh32J6JPdCG4j5aSY2z3n7rmRSf55XjZji4kbw",
  "key21": "26eupUriT6edVLNKs2ztNhoj8nWsWw3NudsxwmBvrQa7FTqHBLLHTpJXxVs5yA4p59AoB7gwvZguQ3YdxsmLGnaZ",
  "key22": "3DDsUU8kBsN9jZApkQiyZsa4ZsyCVwbCJU8cKhhnAeuQAeRB5G9KwVQqAC7xtwuZWNzz1dRzeRsfrmXgtrsQK9cs",
  "key23": "vorTUhRwiueB6rDpCHWSE1bHthLNbh5x4FYLrMwmb3gHHxqsAdbLYckEGWRyrKhCb2WpquCfo8x7kyJAWM1HLC5",
  "key24": "MNuGt1upooYZcSDy7saZqCUYuXyCA7K5XQnPtfXMAE5T2YaAZQeF1ucewmrZY5iA65RukbdjPWr8KhmSva6Q4mA",
  "key25": "4SVF9jJB1teGdsQvAymHWRCvarqdcerys8dkKxUdowk34xG8e76VHLZU8t5qMgkoCb1pMyqPXwb4q725f3NWJhUW",
  "key26": "is9ELe6gsdPDxUAa3p9hfgnuzBcDWzTpFstF95tb1U7FwPLqF3MjdjQgE6fFmxZwUfdEMqyEUMAwEsQmMjMMriw",
  "key27": "3rxpahcypyYoTYdY6T71NfRsqWSSiAoGEoPMx3d5b8UK76qAzSigswriMAFZAu3PTCFXdbbK3mBMRSTZtJbGfy5i",
  "key28": "2HtwggJ6HT85yQbxSTbhT9Ek1Wh8TrfPRW5wT6pbDtUzANoPP4TjK8wGM63B5WtuqpcA351wYtdkjPRW1XVCVKo7",
  "key29": "iBPkg7KawvfGSsSskeF7S4eaCzX8ykj29FJkrHULQZo8qn6ghGd5xjautiYyw7NxuNJLBGu7ynwvQoEDgG6f3nB",
  "key30": "5jxUzRqEiQoYHCsSpoGWM8poPVU8tnfH1dsgU8Res8vqQhydS2YxDxPJSmEaecUSVoVTeHaVSNYWtxq2V9mfbrBR",
  "key31": "5Ztsgc8L8Fgd2DAQPGbcuju19Et9eS3wN6PV5ZQEew2yLMzFzJLxQxdA2Ds5YMdacpwfmr6sh1N6fsZWdWnYEvuF",
  "key32": "GfCTePXNTYoeJ8xiuBjWm4FPDtgFhoMXCL77kLjDNzYQkpTTVvYEeTAkNnpogVMBVS7NYckLrAuwsXDJHFuHEmv",
  "key33": "23XjFE8MY5LMtUoDmhAm8hhCxJKcnNDwbe2PHJqXE3caaLhifx9BJ1XHYxdYRzMukF9rvH7QC5n9pGRAuXyaerZT",
  "key34": "5VjKoWLv6xubEyT2vJx6e4vUUmYxuHhUrF48xRbabPL3wemcNMVe1DaCC39pT1yYTmqiPDhcVuvxmzeoWPJ3hv1T",
  "key35": "4TowCCfEi49VSCa9RfqUCScL5FTJLkJxBgC2nG8rYWPYsVswUF6onQXqU44VTCmVUJJAUHRs7KBnHFMkuRx6L6tq",
  "key36": "Ur5wy6eVxnggha4bWe3Pa5zFxqcAPJWBUoAmL7fpLRuVAnH8Lq1fVNsaLxgzhLkX33M32vwjqT5PeqN36wTMAGo",
  "key37": "35paGXQuU2vJYBrx4JCdPGhDnPBCm3cgfm1Cf1iV9XL7HH3zAY86957CX2anu5q5rimo7GhwBFUYkLkZnEkQL54Z",
  "key38": "3vp3cmmbKm4P5rapkumaD9VJ2ysJKvfkmQ5rStfa6u2Tt1vtqyNADoSDCLcd6kJ1L1NgfBqyx2VPRksRiFi3UF9N",
  "key39": "2N87Hx7tYNmGnWZ4GTnhzFwCj4JGrE6LznUVUyVXxSeC8x7eurjrPM4aC2HgiNFPttDtQ9aBdBLU4ZJ1RSxmBbA4",
  "key40": "5o2pbqEc2PGPDPTWQbj5yqwYEMFJWbPKTvu5Rjy6Bju4iAYCd8gn8n6RLVaBBa8kDDU9RnzwpYgcPn7i5WwdEjfo",
  "key41": "3YcNQh1SoCZkcZ2HFLBDWo5EwdTqgeHSAyrJGe8wuKtvJTdyp3EVsWyNXKgPTSBTAnqMiF22ScXdiL2gF3RVZU7o",
  "key42": "54i1VwQAC2BZLGPptk3jkeqNA9encyt56dVMbadqnCjafFhFhppujX5y7GBxpUycc6BYstXFYoC2JN99ASzUnPgj",
  "key43": "5Q2xRdqLtmLLdtmksWtsXfpk9zi5K96tgz7feQCjNUVFeN469DckKXM7govfjuZKYqLGW9zR86ZA9kw1DVbWX9k1",
  "key44": "2GLxa1z6Ysc1786uv4WexpQNHDdfdgBvd83kEFX6xhTFLM4WsybvpM8ffLzvRWSccG7ajopmWjKo1kHYDVuX3ecQ"
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

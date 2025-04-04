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
    "2ih9KMVedfKgffDqe1oWsrWhvYzmH3PGhDb7tsGca3dxGWbxJfwYhUBUCH82zvMZDQBCYyurHTUeqvY4kXoCMJaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pG1rEqabek11rj9RhmDFfdWfo9xfQvhHnkK6mvujLNBcacVvHKWF9qafeDn8c3RYzkNdhB8VwLvRfVzYbakHWP9",
  "key1": "5abL8B2nchQ2sHJ9Netey9NcSxNnts9EfbgCPhUH1XpEp5mrfhSaWd5KMhd4YS2aG3yDkzUX51g3FGxPUeR6tATp",
  "key2": "3F98h8kWtv6chyQEzPPdVazVev6VshHFpx1xH2ggFw3g2GQA5ThyacXCZYGZeZ8Va1v46SjrQGg45JCSHrCrwAaj",
  "key3": "2wk3xiWdhpaMzDuZqHDTFBBxEm5imCe2FgU5hvs9icZmYDJv8MSwebnhERdqfZRvQqPGvmM2VpCcrgD7Y7kJruct",
  "key4": "3mYN77eHo5dhpn57ExYHjn4ba8JuvgzLgpuyQuf5aaDMGCMK72oWDKMqBk2gRtU2ajzjXduCywAnpzQXj3E7ww1z",
  "key5": "4gAQzazQeXYqsCXu8ftbD3eF4TssafwsKsHGGW3iT3aMV7pWRaQayx4NAydP7v9xLXQnS1XHcsYnpccCwt3CRucs",
  "key6": "JU4gRK6ov8doyQc8fksA7MGEathfvbLyTsM187qWuzTQrCk7YGkw8vo9j3dD8nWjtHhQuenhs9JxEbeXjn583Ac",
  "key7": "mP89Vu2y5rTawTemruwUkefTvndYWXyU8gtkfjWJQPFiAXTjpM5mv44HZDThyTV4Y5ek4XRudTMhaDyUbqnkVi7",
  "key8": "55MTPcMepoWuHa2i9PZWQ2dQQcu3GJR7WosoeHeAQED5iS23BnxNDohngAYNBTsHE91XE4NwrpEA1QTrXo5nRvY2",
  "key9": "3hXcKu67KojswmJE9eBCaBMTA4pP6PQ36oPtQP5z25sQhE2UtpmHifAhoCBwJKrVjyaDSpeuenZ2SuxBmA6po6D1",
  "key10": "5QBGGdbCwSDthUaXckx742nk98Q71gnmeocVXrSFcAQQk92WRjV4csyZ7VbQtEzcHWZNxd8PfsM9aUsyib1799bH",
  "key11": "2bwNYTrEvqif3tn6UQuov7r41zwdJcNAtsrWfzh7oyj9odQ1rMz3oqqTf7zYrB7kGismrxY2eP4DM8N3ARcVpqeG",
  "key12": "4BK7YFy3wDDyvSt8itt89ai6dqmWDPPbvDoqsnJaGttSCpenaZzEJNS3wfRHHuhxtBv2bcLswchys3u9gNn49sP2",
  "key13": "3b1NcRgxRBFMaZdiVjSCLgeNiMED3PJGqtiTEjx1MEBQkvBofFRGd3b39xLp5iXg7njic1DriHvMcafZMTe5UkLP",
  "key14": "4gR4GygeWNj1fQRZsVA2RCvhdsR8UcVGmBSdVhgEVeDsfn6C5HY4HEMfxw3gYZZFaWh9W1kHZDML3oF5gxkkahn4",
  "key15": "4ffqRSbNebdwuGV3yeRR4ka2j5t3RAmue8nD9gaTwiPnzcs4F6bKEfqiU5gqodYUv5EoigJePZheerHVHxA13bXd",
  "key16": "2RjTpABbjiXkQhPoKY8AUmMJB3WcHArcgRExbySEzr8VZeDZeDkJkPFXX5SsiYPmgTix8JpXTyyyGwswUwxwdX6Y",
  "key17": "53id1uAREohSusDcVF51ve4f282B6XQb5zthtmsGWcZaqTySkKuU12wRWKyYdeJUGXb3izkWAY5DgqH8wu93bKbB",
  "key18": "37c2wQn4mo1aZg2KFtiDoPZJuT2TffHRUMoYbzrwjEABDBvXvDp8XuiNqH1YeyUMcUqB1ZFvbtQg7wD4tfC5oA8X",
  "key19": "2Mug4exmyuuxjYMJQ991bhA5sXmMgwddzKiBanUVbwuL1fiuw1fY3233oLCTBUDCk3e3WRcysq8JzSteWZmPsUsE",
  "key20": "dQwDaSE3VZF6fZrgmFD4yWvy5ZXZeuECwmNJ8CpZxEfEZf2udZKiABC2AHwxcGDNn198VL7NLUAQS5uPkVxhn5Z",
  "key21": "594wpM7wr7wF2wa8BWtL6Z583ryQ9yEBgyXP9aBMdYP9TKYuSNbo9y3uJi9VAUZwizNbazZRAmFJv7oG1LvaNHiy",
  "key22": "3XVvR5oyxhwaYckR2YY8Yg1rYqGMmfC2Knn8rnD5hbqcnnYYLHiQdHMvyiGdTB8kRK6kfSfYRukEskZS8XX84MCL",
  "key23": "4gtpukCxPH1hbsKSBgRn4Eszbu3GSDauhyAMF4dq11KQndU4UhjVsmc3aXWUCBGh4gMf1YKq9kLz54JzpAdXpeZv",
  "key24": "4z61nNL4URm6oJ6arTnoTF84Y2Uaz9yzWbx4am9X9izGGCzahqWGQyPfzyABm8krF4V3cqkFso7tDKHg8ktJrwo4",
  "key25": "2Gdy6Cwo6kF4tXAcmhxLV8m2hsMyuRrgu4qg3kNXYue6bdY47XbJyoBrg5Z8KPCcYcA8UQXU1ZNFSkC1puyXzJ5Z",
  "key26": "3JnfhwpZtkz5otBiU61RSZ9ascL45goSNNQbJzcGado6QZtJ4HBwNa49hEhbubaQAb6XfbzaUEEfSZEdgfm4uLMo",
  "key27": "2KZnLVpLVP2PCoBAf6sxuVgXjMZRpvkrNQJCM9szSym2t6yeXoTfQ9FWd6expw8Ek9xk9HXopCNGLSv5dwBPTUAx",
  "key28": "LZzDE2GAErphV8sKNKxaVRzwfuF7xe9DdKmHx9DpLic7Qnc4qm4L4q4hKp6mGC3nXykKxnjsZdGt7hP3KaFs3J6",
  "key29": "5Cpz9645TTALyG2QVNGRtxMyPvi8dgu4nybDfx6P9pfTX8C72VbPVjHazhQdRRVtYYJuC68tf8xWQ7XQQidjrBux",
  "key30": "5eUnFdAStavvh412EXTwm6nEMeryk7Ed8jyxDpAKnwdFDgQvg6i6JzQMooT1dC3LBMoLNo8bdtPTEnF8EVyyK6ug",
  "key31": "5AhSSzWLHxANEJwwc3E3PQu5qQPtkcRinyn1LL3q31Wr7V1YHpTxtGTsHvn4aEVqJPtz2zfoTxUKFb3RjmAuLdcM",
  "key32": "2M1Pmo2qiLVvPECS6LZWkit56odRLeEo55pQUZpZVhAsPMsM7gmxzN1ECdGkBt2QL1rpgFVYm3CqXKbHLMc5vQFu",
  "key33": "2TTwLZdRX5bDyJh3C7xhqow2AQ1MCrVGzESou3K28K2tTrZzuRQWj6pfizab4bvUznJFJtLj2UFobw4uXsc5wfn",
  "key34": "2L4JTgVXmWiUr8QN5JYsrzxzahTzZfU8VXh31esi5pEVa4S1SK6bF3GpLqZQMvty4KkyziV742HvUuigbtVp5Be4",
  "key35": "xzgrBkGMgV9imxow8SqBEKP7rCJx6ehk4PmPqR2Hr2as8QuvhQ3yHoMemQCeNjz3iTXcDiSev2ANRJBcrRLb9KT",
  "key36": "5N3sM6cVwkCmBddcUmdXbdprDRLG5zkVLcvb9tSWY7DhHFYwDepDYsMSMcHqcTpBrKBrMjDtjYfKuvBsbvv5oFKp",
  "key37": "yx8nz5ESwqaQkW6XdEmeMYkHiWcfxFShqNyfBwg1NCN9BsH9ZsW4B7ASjb2hCCso23d7TJ7Zzdi2m7WD8X3TPzQ",
  "key38": "2FapjG3HST5vPKriQLCJWeTcytaSfmZcrGYm6SHVrFxHsMH3xkiuub7E6BHUxrdYbfZrVzrCWxFGZyz9G22Ppor4",
  "key39": "2RbbnPH4TLXQ2HB1pUv8UcZeSarwThahKieoo8WjnSkKDB2LARMLip4gQhw9RB32RYnmqZStKBxkmCA57SCGJg5n",
  "key40": "4vcpoMQKwuSKMKkC6BcnfUtt1ACUGeoZ2hLLvQsGMcygwKGiB4Bxt1gHbFsRcHqAChRUGG2wqVmLmXbPQHmVoS1S",
  "key41": "2VK6HbagByxhVoUTzSRS4ymX6J89JA98WjCoNZYNLEDvi54XPLuMRPDstT3HdQ74bHu6KbtCBCqqSZEoqH2pdzaQ",
  "key42": "zBmQ7g8gexnPmWZmi3kKozdSCGgtSuMJmvifuoGHVWRYeqFZDvAFPwbnFHKxhJsciZJQsFUVY5bJSgUvzRgSqPw"
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

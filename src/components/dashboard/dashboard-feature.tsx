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
    "4EuoGHudLTRsYxS263tFMMV4oQNbMCVe8he3pQzyuaRgV5q9GPUhRoPha7ZzX6rKbjdT6RSNtfaekWEmm1W9RAdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHGwenSBpfJFnASNNihojxTWvwtdyvo2GAcB85KLTHcBUf3T9twX4KyawUEzRhecBmT6TjtSUswJLU4p34kwSfZ",
  "key1": "wRrgAMnPZuNmJwfFcgFPVknunoYdbLZVtDsZhebBXgE2t283jZFbNYeC5DuAQ5Kydk9qvrc9hGZbMszNJpGJs4N",
  "key2": "3bLpeS44HLi6qn6onhbEeAFJCM5PDN2QydVH23K55Y69bTGgjnzkmKvs88b4s65w4Suv6kdbnxNejovzzHVMFGX4",
  "key3": "BBhG2w1RFA2Ugv3Ub2KqmrPCt4q2ZZkJ8xiaTb1tGQikg8eJVDjGBhewFGy3KL2jNMdtqZJD4MPemzBrG9varKb",
  "key4": "4sFEjHYSrHdmsPBMPpdN1GTvmph7cz3MNABWJA1CyH8dHCUKGfMT8Te7YuGxY8jroQ6mGK9EqF6ihsUUk7Fotwsv",
  "key5": "2bQjiL7pZQnwqFX1RCRb5GvhpSHYJTjY1LLevhvYyMgA29fr8VhrqBpC1snkoD8NDm16oqMyMnCXKydMjxr9adkt",
  "key6": "3UQB4YcqE8snb7yg9TaVLsj4q8AD9BhNCJ9NjBZtAgStp4m46HhXTMMu8E1cVY139idJ7qqKVpLvVV33G1SLifU9",
  "key7": "2WMkSstnxaAYi9Mpoi6gbUZhjm95r7NPdBsAEkkpAtMc3LWFhrWS7Z6Ht5WacvL69sguF9qVJTVmagNiyhNKUcLm",
  "key8": "6GW1gRc189pS5KnkpaPwGsUr6Gt49inpR4LeJKBpaVxah3pd2uE1XUMCZzX8R2EpK3kzQTqXNGxH2JYbwakDQyG",
  "key9": "4ZbtfLVQfXecDqm4fV7ebzwviC3GPZqQW3ykuYbphwDhcAdk15JfPC2aW4rZbL5MjGWvg9sXRLuTSn1VRidccLS1",
  "key10": "2zW7YckakxUpd8CeTA3ErhZdtAJPbknKTv8DAv2YG1hDgHdydKRKiM87jdJgR4SJkoAQAVbK713xpyM2y8y8C11K",
  "key11": "2AXVYtoUJkq6KLTgTW4HXiqHsvyHpMfmT93wasR8pB9eyA1f2AZ6PZFPsEALpzk4SCYpfRDBsXxiicXkfx4gaxHe",
  "key12": "44WoPPV99bTgDhDaBxwRQgx5fksNTbSUAC2Lkb9pZQeHRK4Bq9U8aczmU2zcugcUqKewxHY9aaXTg8GuJRQM5y4a",
  "key13": "jVBQKKP7syYaUkmPLKpZyF43WGtCY7dinARi4gWPYrWsRH4qA9bhBpLxXioWwZYnnHdbDxPtmt7KcN7hnkaAEFM",
  "key14": "2gjpVJzPwnQZhQNTQ2VrAzVj2TfjfSQy89Pjf6PY36ev4crkLvsMpGiBPwLWTvCNQDWf1UF5vUv6Efpx6Sx1efbp",
  "key15": "459NYf4RShqH4cAYJMGaLMrXxN8TMSGLnxjstUjkcbk5G9oZVDoTVw2FecF36ogPJnupwFitNakB1b4FfDh5Fp2n",
  "key16": "4cWrtqU9jdrKAxfPykkAcY7auAYAdqKrNypixmcgmNwDHGcCZ5YK63C9uAfPn3Dsz83cnC4Yeda4kz9zF7KuR3Wj",
  "key17": "52z3u8gFgjQzEJYznRLQJC3KBnZ7EQX8E2188DMB5hkcyvuGHXvuJpqzjHJpoHTGkofCx6a57ZLVzod9hFACfhxw",
  "key18": "32AG22VzWgEQkmdUS6xKXYFYAdLnEagujUmbDZxV7tZ7XE8jdHkSQa69scsxVd2AD9BEm3UpxtWGD9b8CA7CcMy3",
  "key19": "35W5ZYhpFrmq8meWCXBFMF5HW7rZQv9MbJrA58hTVd5fr2tW954JvYoKfiR6ZST9SLsLeYomxKi4mrAqGLsF3rud",
  "key20": "36bMCxxq9G4Vc2kaTzwGDCDozKUNgHRK694W9p7eLobsgbqHw7BEy9YixpWLJbxqtMFrfY7DjPEk64yjHm9Q5kKr",
  "key21": "2ZCv6TtqRcwkdSQXH95RduVf1E7xsjhFTVrCdpQrxnYoRv6DWhnWBPH16N2dZy7VDyMABTDRFBzXWDa9JAoLP1vT",
  "key22": "hkNDcSAX3ZBLVvwrQVQRGTSVhXdibYKD2E51bytFFK8aknQzjYyj9m4aDgRH2dht53JmFhsN4gi6EDQiwnwsLEZ",
  "key23": "57AsoMBMzajxSc8YLvspNGTVjLQFbEenvndRvxUG8u4c26U9WbPMbqk5SN3xqbvJcBLq2KNJLprxMwmyEJMynxSj",
  "key24": "4vGVGg8xh3TEgPvpYKqfuWa8G5J48p9YjTYdqAdxdhRn2reRB8BPDwompoHkWWbQ38uaNMRXG77KrhT1eNCHZwVk",
  "key25": "4ZvNYEWPTGmNLBUd3AFPqK8XdXLwGePrRu9fnKcL6iLktnaSSi3LNy4tyCHGateCrA8cuQqk9dezmiHMNbTwEmVm",
  "key26": "41JuGKnVPatDXTX7tBbPGjSqe5bYRL3Mj6U2jP84jK1Wzuf39Rh6hmx8dFfASM4hCWUmXoUpYRN1vgiUoViARk9s",
  "key27": "tVrQuQUAe81izArB5nz4RZNKfuo2F2bWPVcuE3AdfHRShBPhbZQBUjNoDK9Pg6JHQffBkWBkmXxWK2AGcwDzZ3s",
  "key28": "2h3aZR4eFkovmRPVQ1rtbMoyrzAfjWy1AS39L9CLNZWW9YTeJcKmbT1DywBP2LBZtLjq3Cc8r9vi55XvXAnmPS2f",
  "key29": "2LTjuyWrRbLJGhMZ4Ah412wdR8qjEb3R6DstZ6DiPpRDfYU9wCSE1sGHd9G3Jfo4dhLPThwmSZWHsMEDQVhf6WUy",
  "key30": "2Y4wpp5fwu6dWUS7Ccq2zxWqFfJV5WDTRriYxSDDidq4RX7a5528z2X9AWbYTDThUP55aADsrd1XanY67RKCtBZC",
  "key31": "5sV7sYZZXuq5Rvr6676GH8DPBPjWZKsN3WrK8Zk2RkFYPcDdnN6gVs8M2RJ4E7t17GyvHBonmG5n7GT2sEyAML8c",
  "key32": "38uCdTi8m8nBMTkHH6haRBRUH9mrvdeFT9Ro5v8M3CB3zLjtMpBC1Z9ffNZy6w8Z5m9ZfK2WSLuVEoNUR5yzTMb7",
  "key33": "3s67czYLd9iNjsCP4wm2xk6NpNGkjRoRmtU5czdBxLXkgsH6bvAbNGrzmMTD5e5LvAR2UjEuybui8bwupsiEk9ZM",
  "key34": "xTWNz1m9wHoGXkFsTp1j6uPDC9mvA9MnH8rhuj5tu7CsarM4GiCzYwhC9AfzF915nqiUGZ572dseo7mNBUxz12D",
  "key35": "27tqKbCwrLFnxUfJKto6scWtLxjzqLBiRY5ydLpQxnoxq5HUQoVJ3Ypi5L4zMmrMe2Z6CatXuGaCTMwVaPAsTGPH",
  "key36": "41tuKvfJhaqjyboAC2rnJRLmuSunWr9rfmhZ9D1ToF4fxzNe3tNCbWYwWoWDxxrAQNzY1bT2iHj543qmnWT3VDeq",
  "key37": "277T7kqppGCUwn5914RgjnUwsXRqW4JE887RBRRhjjsVLTayrDoeSAFBTtdXYccgUx2GPGJaWYR6ZexjXzKsnvT7",
  "key38": "4DE5EkqaoQPHRF3ELUT8pC7WaxFTSKuaCnp6ArDhNdB41icD5v5H647f4LmmweqAgEc79wZTtc624gtAJXVzY5d",
  "key39": "G4NhcphqFE8tHdv2rT6GcVrUYBaiuFNGQk4jCmxEJ8Uwv9m5X2CuWM9budUgruc7cSR4uvUCuYvvVEwyFfu3mhC",
  "key40": "4TCmgjfB3pdE28Lh1CcDS1wqaj7Tjd4sK6LWvDoRxHp7szHjNuL6uoj7eeLG4uzYCVkUHcnSmPZovm6uAgWg1zPL"
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

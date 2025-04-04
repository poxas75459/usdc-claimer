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
    "q7e3Z7JuYYKgNgYKAqxDp1ggMaxPDEANrQxDWp61Lxi6NaJwXCBdbGqJk6dJtJoMnHc18KVzmiRSdPXgjAwVCmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsLrW8XqPHy3kkJtBw62fzCKE6ndjtrqioVJWCaZZWXWeXSncSDPE4UGHM5SMAmsxJDVBgmZjvYLxdS5Bh2FGVe",
  "key1": "3XUdyvXN66W4gUJsGrQQRMeVo21LxtcxuL1Hvd7b1NjgPWGP9hyYVc4qRu2JQMdm9mzvEtgFTj8n8H7eSvShAfq4",
  "key2": "5CAiE2vP7QdHyJwzHdg1aaRLuWhKhcLR1Cjduza9U5q9wGBPmj1ovzFCT9U5EXzhnrabwaR3Js3NCZdmbtegUxjj",
  "key3": "5KDUhqLFA3ShtUwrYxLXSsSZTh8pyKnU8c2jMaiEEmytXMsF2tsNwiN19PAPfPtYE2xDFkQ4B8dKwgqHRPbbRCE8",
  "key4": "4BjcJc9h59uJmsrfC2Fh6u8aNm859AMkCcG3deYxQxu3eFgm4UgqHcExxUV15bXcL1fFzTYXmMvJvP5A3zzK19nb",
  "key5": "ygkS4djE2s8VuQzWZBsLBT85dBCVeUbx5BgmL2h7V74ivUPFBuMRvR2LHeYt4w9XXobGejAyzA9U6wJWVY9ru1b",
  "key6": "3LAi3of95CTabBf1TkRt3tnc6S794P3BQsixBwJsyqoNMKxYik2gXToYFCwbV4iK8a6YW2u4sQs6nPMgup2bk1Bd",
  "key7": "epeP4UF1KQuK9WzokZV2YoSUB83GjNg6BvSGMarHn5j1u42w81w1cr7KYPZpLWZkWHobiSkJyJ3eUaqxmjVsWXB",
  "key8": "5m9dLtNji9nvruhCWqeBsaftYQ1snDtdFyewBMojfFrQ23SSw5nnhdi1oRRXriN5BcUkznBZ3io7ZfFHELt2Q3rm",
  "key9": "5g1WFCExCrENXAQd4AtKDjS4GsSGUYd6BNsxgwZHA1XPJ3Uo7iai9gNiTLzKtig37Edq2j2nhcCHwTJeNrnbcaK2",
  "key10": "3XptFfs5X6vrLSH83JTvbWyeGXcV6kCGD61va9LgJ4y88LJkkNWAkpyiK4ahw2UKtmSZQZBrTRsqHiVPPBsYnWsX",
  "key11": "36cX8uWcC6dUq2yCymMTdqoAMpppcoFX7kpxPPbZk4en1hqh7HuUyr6Zgv4V1brdDCnoDZpf8vDUwUdwQMuoFTnc",
  "key12": "54At3Lz47hnY4Y6iJz7HDinX41ZNn5Jpz6sYPVjvq5gGmonCNf5JGHAVquWQD76gJA5eSQ5Q4Tav9bjsVN5Qt1h2",
  "key13": "5YzmrB6tQdUqHvr9uCgJQFwUJqesW2HqmxPWpj5GXeZ439VBFLm6jWwuhAJY43LFQbRHds7MNp7KKBN4G87QmUqx",
  "key14": "4WaCKymAXwNXE2j16vyKdbd1KeZe9A65Q5MgtPjTkBK89vwRDF5jwWqfMx1V11iz8fq3TQWA8oPqTMU6GE1AbFzK",
  "key15": "2n23uBXvd5sJwz3bxUweAgCD7ijrRY92QisjBTS5yjo86Mtzb52N2KJZ3pBwzK2znEs9ca3JYhniRv2c33WUFpqf",
  "key16": "3YbZGkBqVn7NWAFTcAqeeJHGQzkygcV62BFytj88M244HVyisPdN215bvekUW7SrmBgRgAKj41VHGBscsrZw1Cgz",
  "key17": "WYU1bs6pzSqmjwaEZkUL25cMUfyyybwHzSphQhv4Z91MwMpgmbAg9TRWScbTXLksEs3PdBjjDRwXhncfR1ZC5VY",
  "key18": "4g2toWVdqaYpSZL5en7vsKSausFg9rCzy45XFqLpZAK2FtzNGryMoqCBcBrjhVVivN6dvRMDmmjPUsoDWUUH5pBb",
  "key19": "2AejbAWJhmjYVNEQAs6JJ9FxNGL4Q28oQWVmEEUoo8WjGvq6YBs75Q3GSxSSA4JijUSf3HNWJM8tm1ANi12Sizzp",
  "key20": "XwAX39NCKaR1AXxBzyp4ci3tZHnPeEojVFB7AeanQ2w9ew9fnTCZi8BagQoZ5B8471bPKQEGNduUhBKzrd8mRS7",
  "key21": "9p53c1j5FpyzHbBWbjj6nGqCHhvF2pbNkmjJKUAmWENQ2CwF3mwFtiXeGaw7cBj4cu9o2yHhFyqNwu3MENeXUAC",
  "key22": "5qkhKE85KriCMnNPvTWG5FwZpoMnkvKJBiQUW4Bp39mSge1gmqyJtt23X2RYU4fRRXHZXZtqt5ZE1fefaJ78GMVF",
  "key23": "2YVP9DfZ5S1wbGvxWMB46YtZhYJDJZuBSpc84TqUghaBiGogk8zak9ojmAUqkRLegVuJe2zzEdJpGzwCz57HAoiN",
  "key24": "3d4URrZJg4wR1KLhj51V1AQZxJ157PjFBLBsVwAFejbQ7djqZi6Wh27srTATXjDMjKFnURzmMhympoT3YM7PxZRC",
  "key25": "2uR52kdwsPVxLJJQJBV8VrmEsBSCTFHu2daK37rtffYRxujG36JkU7MCbkQCbBinJFckGiWvTYAhWG1j34kfCRXM",
  "key26": "ab2raU4mPnCEkHW9m9yAfGHUxFQgYdtvpo35qhHnQzZqvww2p2H5rUToPMSAA29sYekbqH18XeBwjjRWSNhJef9",
  "key27": "5NHjk1PFEYGDjxKrstwWPMqgo2RAGxq7Z6ApSyX6Ew1pbppmeGKgYK7AiHPa9PLcwjQHTmaddUN16bZdGTTfKvzh",
  "key28": "XyoHvzBjmNwEQuas1Vvo5ju5ky839S3knSUAnSzxZLwTL6e6jT5ppTsSavzvggyKHDpnnRDjDjMFSMYR7THV47E",
  "key29": "2VEEGQntcwjmT6e4QAYqxvk1YcWQTf13JcxnzigHjXtabAkXrt875LhfTha2RqB4AcJ7qzsJ2LZ8R2S3wV4XesRp",
  "key30": "33bBxeaj3UKk5eRMAnZ19L611znGenrBBZyuX26jE5t2KF3ViozMPPVP1EkEYPHLV772U1rXmDFEZfyzwAeHPL3b",
  "key31": "PkoMjoiwfwuCCtuFbB3meJF4DFuLQR4ggn9713bwygzH1bjpZfSDFanTrEXScmPbzs45VH6sP2sebzMJkf78hhj",
  "key32": "4vNUeqZjmGkwdNaGtezyzXSw1Ws19fLuUwN53Qmun6h9HX7WGbBueyjMYdMCxWP3ZFRJP9Cwkbd8dK3CXvzcC7AG",
  "key33": "2pKqUngmfsbVeEF6WQB5M6N3gJZNxnit6SwgM9G2MrRZo7tDx8oWqu9q6ek25NaGA5A8kVsYGeVjh5AoDTwcm8p6",
  "key34": "5jxkMF81piEva34u5mF9nrd8JnACEfsWVWhcwQ4w8RZ5yQmojSQ7LcJTC6YXTT9Qv7DrUik2k4vJyB8Lr7Dqbnxt",
  "key35": "66LEBSxUK8qX1nxGZ3Xm9oLXe3skGcSZaDfFM9o5MM1hAALqBNzonASd3Cg811gBdGVy4VAGcwjXpXNwKzEuYrQz",
  "key36": "5aMxNexT8SStJrjunt2iqbaMt3sGyRPZVQ6o3RscEuqgAVeJh9yxLr2Mp5iLSKADYNa1s4QQk5x4Hsa3rsWPHMGK",
  "key37": "5e63PYUEv88jMv4cPZT5kHTG5Vs3GWEPXTwVrw9tmpkKM5nhjcCy2GHS2uzUCteWxxaHC5rtM8wsC1gLKZnSD17B",
  "key38": "4LdSL34w5SADbzz373a419cN1Xr7nYzZLRYqxX5uwcp2M8H9yGfTtMDdwvWVyLQg1chVhYcjXNzJPZCT7Kgi1EUK",
  "key39": "hEKH78BPQ2FHoQ5PJ3vrpPZq8nzkiX69f7rNfLoHnR2NzcZ9xvzEBn3sJLvcK4g8gWKN4Cgg4EX4V1uRVizbU8d",
  "key40": "2kdUbka5jwTWhLgymL2rB34KYbvB8d27yngofRDw3tJgsqXoYGW9dcaiTbrkb2EURE2U8LPTCaGzWavxxFsMxsNU",
  "key41": "663icK8LVUePrmYbbHsRoYDW6jQ5JgpRPshW9j23C21HY87vuR18QDi7MD6oHhuCANyASMY8DCbEki7BLYtWpbug",
  "key42": "UyrCiT78amSh59AKY6WfpjCrjXRuX4Sjjw3p4du325wfnqzLXoQWMgYq5ZeyyLqca4Ywmbd6h4cjFQJNQhLmj7t",
  "key43": "5y8DgYZuGCFf82fSBQAgrkiTA8dm9Sdr6ozXMH8TrpmKpvW4JJ69qqUqm3wtQxXyYx7FNzPvFpJkPTduUf4j5CCm"
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

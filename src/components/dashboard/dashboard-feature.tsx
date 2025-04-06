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
    "bJ7ekPwKHUmKyvKDLUQ7T1C6S7NFQm6yxF6itnEDtYcNvfgUwFYRoHPwSP4FehbBY7oTyphrodrMNe7ZmLJaogo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V2KLsmp7BaJbsRTHDuKeghhKrofXit9AhDoQX8HEjpNtCBU3RWHZFZ4LLccpMarS4Th3szB9jzrXQXqttwFwdR8",
  "key1": "4UvGm4s98tCGCQibQAN6Ypw1Ev8zVDnsMotL881kfv1XbMfasF8eECHssgFcZBuWkFqaHcxFYxyAQNSV3jnrZ9g",
  "key2": "4WhWurMz9NPDRvadWYTyGCYvxnbGub82hzuiU9T7nWu82WoASfdHRyPSNc3Q6q7h46BnjAmvB6BB7QuXndwdGqgh",
  "key3": "4XFqyYmDouyFaPFBYuDdz9dE8wf4uZf4ZtC4CNYDCNPt8aD3tRNbYn1yWVehw7bG31QJ3jnr41bqmoS5GFbdiDG4",
  "key4": "3PyRAGz2NofArnt9UxQUFhvw5ZffHURbsUcBQ8G7h9F6s6PLdYpvcdLeM81RhpKw2WKABMcWQV1QxD3B7eRLMjK6",
  "key5": "5HEK8GRzmryyi4CUvdFbiWxCMAF2fLh7Gtz4FGgtsR18SNp2YUcLChzo3bEAeE9iHyGtBSLixKpjDhvhqkWav1RU",
  "key6": "3EVz18GkRLJDJt32iHaXPm2BbonKynp2crfPnhDsrNwCyvPuAyFkwLJ6ZfrHHs1Rh1kQDn61w3qaMG19ubF9C3p3",
  "key7": "5UmKw1btJrwS338vDGNDs6LTb3V6u4eikzn5TiHingF9SawzhbQnzmZCSRyTAKmvmmDRhcV8jLywLJ1qZ5zjux9H",
  "key8": "5ZoxYgzkRmgVLLM2sHZx96uXjLHHwLJdPAkKmU8gEGw1AZpCVMunBTDRZZmpMMeH4JEzFAiYiUJycczTkvRqi3K5",
  "key9": "28LPFWJuoxBDF1GmbDMPeXM5jxwx2Aw9EppUDCG3A8uMtpeDpX3WbHsEqrmhBUsuFeEUJA2HyFafQ9mBwqypcx6o",
  "key10": "5uU7TMVzm76cJikNNVmvFF9Xpbsj4g7m5g8i3VMoEoVBjF8rhiLFBoU1PSTefyCQfp4PfcmSkWXpGw1PAamjTB1r",
  "key11": "2j5tqDff98tZ8gpqxvtVojmsDqh1VyEZmWfg2E78vgSXHMCyipEr4aFwQ9nh3v1huJyReRAHGnDfDg5u3Jw3CP6B",
  "key12": "2MY8xW1MJmRJkXGjHRVZgDGTown34JNhUkew9HgNEVf6q4WmXHjXz8qbBCtmuJJyGRKECGwYBNGbnPyw9zkjxA7X",
  "key13": "UWfwFS6NphPw2BJE7YPPPBSdnTXhNXv2Z3U7LXpG5aL4dtNbZsAgKqcK5dfQmeGB5HGBxdTTHWh9KcN3SK8Tfn7",
  "key14": "3gPLDrDGeKJGBCjEMjGq6iz2PUbFRzXUFP6f7gPPcUk1TfsmKiZ8YW5WaH8bRQZSapom9vNQPJ8cWKRar7pER3st",
  "key15": "4S6LAz6AiJdFs7SDP5LsFMztbtSEuyCwCZvCAkK2ZrPCUmhNaKdg7Q7nStLgZbPSh7716cNjasYsqGBPy9XNgnXJ",
  "key16": "QqtCJKenp2sCB4TExAiht6xka5z518bfrGFaKi5pJ1jsrdFfJjHJsq9SdkUua6gUw3zNc3jpPe598Y1xSxN59ze",
  "key17": "K38zX1sw58VPXeVVLJFSgRNy5FHgsk7T8PcaL1N3u6GZb3mAkV28So3wwMTkP2aMx1TvH5Ehq7WhqM7c8LbF5wq",
  "key18": "Ki75qpPVoyrJgr9dNC83eG9VgvmycMMJHbkuLq7CvdJabhu8sgp3dZWm3CyToTat41iM1m5BJC7cWf5MyqUmCHV",
  "key19": "GTZWPUzawbR1m5KwURpbsKxCHYN1R1BzFidFYmuSuqLgqsPg2XXDvybcGVns44PkRuuykJ33m7TAEXP2moyMkTg",
  "key20": "CaVR1fsg4eFdxhcsAGKnb7bkdDg2EUvDPwnAtUUY6pVY8Kb46eVURVrwuGh5c3Cx7iefBeC2rNnTMABNQZCM96E",
  "key21": "5VvhQt66nvsrpVeACfBxXy8SNNQ2QDHpu4dFdwsuzY8QCtYsNSMRF27kobSVyuPtpugTt3LtDGaoZybnymfnXYcQ",
  "key22": "3ioxiLxWsHMpAUaKRhE2a29ay19o5fTtJubxUtzwhWQY16oubZYyyxCQLuWXTV9z2da8trAzgRgNJPH95DnXDDfz",
  "key23": "4kQH5FMGmVGyz9kaHLnZJSGVjhPdEUxnyGV9g9VhVemcXiw1Jz8WDCqbyXZnDcHnWWMFzLF6Kj1t91SKjj9vthBD",
  "key24": "3uKfWcKvDoWLuD5omkKGxmqLEHTav8YYDWkzv8v2CxEusivSFjGJz6rqtWrAsxmctAENFFz4ndxNoWjzQ9AKdYy",
  "key25": "64xshTJeGzBT8HKiTbvVViFtrfZicoyoaRbmWbZ8Xy5Zidr4g21td68FPtifk46y54XLc8gwPzgsoaegb9K7wqxj",
  "key26": "PYkATzwgffQ1EVYLE1jhqbVmZcETsPkBbk8jdh7F1N7FbZgzw4ThXZF4g2C9f8X78GRkEJ6MFLMFQ9BgRUxwWkY",
  "key27": "4JqTF4CUmp634ppiqoJLDeyG9M49MAbiFULXLa1KDkVLeKTdg9fTJmhsCKPF1P5TAmGsbDvqjaxnxendCZREmjgP"
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

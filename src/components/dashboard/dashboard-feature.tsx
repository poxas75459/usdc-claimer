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
    "41USZd21teRy1zdPS8HLtiL1ULhzePGqiKX9HrKHcKwHV6S5CtZd7k91YibQhdssjYuEPWpGp3HC1ZrSko3ke81r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBJmEakvry92Xq3PaieBdmrzPBzdvu9zSRg7V7JvNi4mHNW9xh11x4hUrm2EctGV4J5sKnx6YAx7rh2EMx4gRwn",
  "key1": "4YB6rgACdurDZPL2KX3zo7rLKz7YpW4yZWZMVUiT8pJognhEpQ8ufGwAbrGq3bRs8yedz9AyQE7y69vZg4kooXTv",
  "key2": "3AtM5Fjemo89zNKRwrbGizJGM7Yy8dkVPt8MJiRtbw9qpzZAvm1nnTaXtkfeCg8yMJdoPR2HXWyzER8AWCm7Qivy",
  "key3": "3b9EA6dK3SbfXY6FojBZF5t3tHctG4Ea12fzhPK5BkWbYobwjSEcHnGdy8PFpB2YRu4QY4EvgycRMVnuoFAiEyKL",
  "key4": "4ac1w5hCrEwmibg9FAW5wZRk2oKmik2a4Kgh7feBoiR8U4nXASmotPTh6hoiZwLBYZQ93jbCrhUaCvPW5HFwQzqZ",
  "key5": "4HYUGpFNRLvmS8JWfk6D7DCyQKCrxHv6eMPdw1RKqLJVLYh1HCMsPcDEtFj4ripqeb2LwAvjrboc8EXjocggabt6",
  "key6": "4BVpdW93cegcRChrjobDrJ8P1QpYJHGXA4hgnugzfgq8NK1ujGuUW9ckXtWw15gDXf75LwZeCPJfCNWz6bHon5ud",
  "key7": "2BwavtY1tPS1NKSxMcndxiQVA4nT7WqhC9FtycEhgqA5mgvbVgF4UsTidpMZqAzCMabdAda2q2mW639PfSKRGwDo",
  "key8": "5fSnszwGhQWZpCk3DY8armdraV4bLsx2wkMKQXthcVKzz9zFpEhi4Hi52fvmfhL3hXJ3tWsUJegB7iepZirsjSsp",
  "key9": "2xRx1qkWJocZoAEkcammWdirs4LAJBmSgmAbM7LSusmzdxEASwAyJD6wxSkcMv5k7bk5Fpzqs1WpLBN84ruDBh2L",
  "key10": "2ZaBzY6roPy9trv9DJEQEmrLmwb21ZremntANf6Js8LtMYFKtQnfVP3FJixobdrDcz83UFXXRuBLecquYhCCJ6i9",
  "key11": "5M976DzVx3GMKicW9GQZwCH4CQsBxr8radyBFPYK8eAs9ZibTGn1Lqs4BdnVMMLRGkakX4oiwFZc5Md9ChvChAQn",
  "key12": "4LS4kvHDiGji2u2dJVjwMpefDXEfaWKb9ig3PtSVfyfhaRAQMxuV5MuvG4Z8A17KV1xiyKrN5u4jGUwaytctLF48",
  "key13": "5Q3LB7UmsYMNjx7apYLBA9ASQ9XYjhmPRFkY2UirxygGEJ5DS4zoCNG73WsFctepju2Y3Yf3KVAo2vCCPiSfaZF8",
  "key14": "2KKUjc2qkEx6eRCngGEhfE4bF9qaCSWCxwgRWGvj5sLshPFCgrvSWsNGHTj9j6sMFQNFmLoQNAHAFqUJPo527Te7",
  "key15": "213waBb699VuLJJosJeefLYaRcXWfpCZw3JKeRTWpbT3eK8jWnfJ5yPWhwjdjh1GC1BJ5PLg5WQe9VpEoLm1ssSN",
  "key16": "5pjN6gyQVFyPTQhct4H2YkXtJzzauSVeC9pmWrarTm79mG6ZjkbZTEntMAe4SH5AaSThQjvopZJeVncVKRHorZDu",
  "key17": "4DgpecTeQTYXFi1nj7QYf1fJt7Xvr8Aj2BiV32XX5RTjLQkMgoaGXV1kNQFRQEUgzLMMbHsN2bMHzyEf1oWSzfsD",
  "key18": "5sAEfgkMEbrc1qrkkS8zSNiqz7nfuyyB99ZZAXDfNgEewizGg8YGSZS8PsLPpDMEFbStL38oDC4aoHFCq4CmtLgn",
  "key19": "5167SDQqn85LMEQhWgjWPbj2ugWUkk5e8g6tfzNYWDJzQipB3P6Lp1iagRPNhvoJUrAErSJhCZtq3Ug4Yg3AQK6f",
  "key20": "5qSZVkqGy3cTFpu7a55usgo1WKuazokKa5baNU9RZn5U79fRisQZxSXrzetqBh9SsdGFweYgLYYa7iQ4vMy8NDju",
  "key21": "5Rcr38zXtTvxZkkoARf2FmcwJhbtDqFiUfff7SpsKSNHVFyhvdPYMs7fos9uVkCnZbgi6fV2paeMWNqLJHhmyu2W",
  "key22": "5iMA4WQWVYHHE8fKub4RwBaNmgFV61xAdwKYmTggLfQ2WzLHtWP8hEPW9tQaeqjrjTg98ANhjgTqyT1jmkLz2kCk",
  "key23": "UTMnUmfTVuPmSwLqUaJJCVNVuFNtFUHpdRahrUHnSysW1y3kLju7FehQS9CgfzTMGDpBu3cS93WAW5rSWe8N7af",
  "key24": "4Mj5arGJXX1Z5btiMdxt3j8XWikAR7zJegmsskRTnhaMyZAkE3feDCaYQ4i9iJSsLNYZv5Mbr6HafF4yWtoatmmA",
  "key25": "5MHY4L3vzFYqVEoVn8grrQ4EbW7yza5GMUwG4EiNfWSrisJpXQLXj8L1ivQZw2x5HNge1cawWsCYX4HSKw4rrqRc",
  "key26": "4LmsqHsZaR5BBnbnBUmhiKXCthVhFPh44xvfeDzWbwHtUja38E6yYX3GhPyvMtHYagQ7ScqeAtYq5MAFwsp6muX7",
  "key27": "pobjqZmye5w3ssgQDgn4TX7aF1KV5mdrm123cyyxo2FzrcQYNwENCMWjDPRphYzWXN3EGHRNLfAeAoAuzkL9Nvs",
  "key28": "HW5Za3t6Msg5YyD7USwXvx2F7QiGp1PbnLtM5Kc3zgqJwRxW3Ye1gPtmLwWj18UXoc7w4cJo1cDLv82pLrqNtS7",
  "key29": "4Rn72VeeHKxQkrAK1VQn8hsWyayp2bPMX4nFoP6qQXJS2jU13cwrkrSH9QrZNYSBQ6mFSKHYGN5WFy2AsjBBnTKF",
  "key30": "9DchPUnFMMaj8CQe3DdLMoRvrdC95wD1wKTmRzp4NtA9HhtZLXxaS6Wo79BUA1cpcxcKQSpFRtCheGN3gFrugtP",
  "key31": "62BGJLoeYaaLdgjqkmahbjDd9GqG4atdc7zGqBquRsTnub46TPQ51SAX7xAm6kqpgAyhoyNvireWZQBCAyhYawGF",
  "key32": "4LXTtVFdCurWhsgNxhAEk7XuS47dbwfHMHippAgBPYQjqkGA66Voa4tQyZsbN4GXYni22aEC1jZYaKyJJ2APrU6w",
  "key33": "tMDkY8XqdtdqFGSr8Z8FQocqX6jcd98aijZgEnBn3UGZ6JFkhhqw1Lf8MafGMgV2nW6J165V3P6PhQoZWqy4PtW",
  "key34": "2j8USHR2vqf84mJEPmKLoi4yfmVv3TKeTWbYmhnsNCugybu2WDyAphCeDL9jZHH2UCMMgtxcgxBUeT14bqTmdjy2"
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

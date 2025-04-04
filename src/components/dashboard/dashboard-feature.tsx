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
    "2FZ84615579UVZ59iWTUxdaLxrkUgFksEvmatcYLJrAuQmi2L4XUgY9FbygBrCUdjm1kDjnLyLynk6sRH7bqmsWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xTgLnQpmQM15k9orETwJU86vS83J4UZm9zoLkhELtT6KwcLuCg2A4juFsUsoXBpPkUmcsVWxPt3wFs9EvcygrjN",
  "key1": "3cBQoBp6DZ61KfDN8agUiyHzdeq4pKKSM7N8Pghps572aRwdjp2BEmrVZhFzVzfFgehjTrMYz9dmzeKUoZyXRmCp",
  "key2": "5HNqW5KtuXecPF5hAnXD6iFVzi1CpiAP1APc1bwBBy3DgjeH1dRKArGJ1XQ5eiBfXPFNrRV9vyPMcpfTgXtM2Dfx",
  "key3": "A2jTjELczdMaTFhBjo4b1MTNisNM7gu86CQTGq6LG4o7G7twZXRkGdEyCvPfr4j7ArCHfjg5XUiSXLZegRmtRsG",
  "key4": "5qcrCdrok9jMmbHoXYGxrfAHSDQcpTZxqyjbsmz6MF1vDBt412Nh284gsB8BGP6Wj99UHkEcNQAd4oeQNZEQ6Wy1",
  "key5": "37RTZw2YWH8dRZ9TrZK5JFo2iZ69LYEUifkzubytAHZeuXvM1s8CxS7JBW7vLQfsSH6pZpEe9m7nKxpLVo1tMwjP",
  "key6": "24NEFLCgqc1HZ6y7BUkmVHWxsUiuACQCPcYkWJ4YRdtehN6k3eUSq8UqXnX7pEaLacu2LnF84e3dawAkAuvP766Y",
  "key7": "528ddP83rHXEuqzuFt74cHVf8e4J1YrkDpiqeYRLVx3LJZZFMbfvSyPNLk7vr9ADyiAMgZ2vdGyVqMHLESCBQ1E8",
  "key8": "5QwFTWACUmdkAaDH8pQNiS6roTNgkBsU1zyRDLrVXV2URsdUbWaxDVWWyZ14SvyyEtBMBd1fHXS9vetA91mY6PzY",
  "key9": "4SDx7tGHHZ5neL3bYvtsBTq1Kwgt9a8t4j1kHpK3n9qLm2kWAE122nozRHZJBHPJf2ZLcTWMLQjckG4YEdY9x16W",
  "key10": "3CL6gBX1RBG3jXuBJQ5eUFMWyaDknaCGjqtzRT44JjcaVaqU9AfD3wvrPyiLmc49om49jy3HXFG4k5dy8c5SpjAZ",
  "key11": "3oPG83tLVTFiRGxFQLUHAVrqzNJNQTb7DF9DEczZv6ZkC7wZEyAgg7rMCQ1dUaLcicV5G9TS26YP9w7pU7TDRNWS",
  "key12": "5ETuRH8Gxp7sEbqvc4zHPp5rB8Gxorf9rqob42BQ8zRzEypt4F14z8xboMLTmNPkesFJKU6aTJaA1vKy3sj6QGMP",
  "key13": "2TM9fadetWENPaxcWRQEZvJJm2vUYpTx1CNGbAwa8irjJCWWRpSLNbsqvyqAZFbypbZnhPPHyHn1sFr7HnqpGY8r",
  "key14": "53w9wVDyg28is2HP9FYXWb5MZ3ZuPojpabjRLHvA4mdcXX4bXMk273T9foJQ3VGpYzGJ2ug1Xn5YsLGw6y1aRwkd",
  "key15": "HN4ZV6XMYHnNakbhp5HhENXmDDxTkj44EESiBsJ7XDnhnzfvP9sfTgTiZ8pYGDs2kYteeJ5bB414Xu99WtJ7nM3",
  "key16": "2aeWEE7MkLcY5CFbyLibjPxbXVpEsebYFmdD2Bvd9XSryRzptbTzTYmLWy9BcFF3YuXzj8r8tYKwjS7a5WmQonVX",
  "key17": "5Lixxhj2ZYtprAda1wa1Vxoup6WzhCwmXf8bH7FWTMe5vygjR66vxSb1HDT6Zepvwr3erPJ2tytyL8g5siYC8yi3",
  "key18": "4cLDrNB95JoqSE8UAzyV3S987fBWok5vRyadRtB8CS28LoKVNz621Y4rFCz6AEzaydP2zPsurCVn2reAddWc6Pzx",
  "key19": "2N1JFUD2wnHDF6cRBq9QEy5gnkCXAGHqc1HnofMc6G4oKpDTi9xaqUzSTfZxrWPkQrSpmqxWRYtMar9tkpusa7m6",
  "key20": "33rWnxNYrRW4EToWm3wRYVGkQai5JMsaQnwExGdKTfAoEckgcxAXjWf91Gyq3eZXnFuTkustEvpoZ6BhpPaCgwgE",
  "key21": "5SJqi2Nm94xYvkgJCkAKtBcThXPHyzwMpJK9ZBLPmunSUi9tBUgWSefoauEBKSCuFUiFoMymETiR1Qm45sucSirH",
  "key22": "5VqhfwajTPHWcqRNxsmcWxuLTGJdnEhncuqoPH8jafr8vsLEsJLibWAaDi3xa38KoomnRAHUEmuc7kJXtruNCDJt",
  "key23": "3YUniEzut1KyZCQtn36EBr5GXoT3XtZFy2wMiBZYWkEccHbBf5ZqCTmG4UCdpMrc6SVWXmqCJwfPqoYaAqYEkDzZ",
  "key24": "2yKy85LLTEmYyrXkBwDkexNjp4ou5sKRK8kbzXeu7o43tRv2t84Mza944JWuwAL427a4Fy3DXxkWm6XZ5AoRLB2v",
  "key25": "3QVxEGb4fahFrqzxGpfCqU62Aeq65yeSk8aKvPJxvfBoKhRdjYB4iPij5LCoHUvckeQsG5Cw3EF6gbUJaenG4XMe",
  "key26": "5rj4K41az2d1Bs3RFhJZbsY6SsYW9M4XQZqVeCwJAQTLbiMWVpFjfsbStQwbpHrkks6AFUT4R3uCwumct5TwVgha",
  "key27": "2hj6cZnSBtme3AtDSVPUd5S1cjac25im8dPu4hERCJErgu4r6UWvuSLpAkFb5FJfiZFXUSF4NYehAJZmr98ht6Ju",
  "key28": "5UPR5JxnFk1SHfuwN8r3YZxLQL9wtZDgA5p6uG19AK9XT23Xzv6xgVjtXYWSSikUYQvvoh96EJtPgossfvAACXQd"
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

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
    "5gra7xcyU3RbzsE9RYwtUiJkJQzcTHaM76RquGjg7M9TCbUYS8S6eVmVxNWSjC7Rr71cmFeboXrLS3wky3Y5KzKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Quwm6uTxc8VGihAbQgmJdD5mntKR3sdf9ihmfx8gHQEySHdALxca2yzajEyqmQdwuwF5qCejxSixMGNSXAPF5E",
  "key1": "W4ftmvULxWGRgcBueoUxLHRM38ePzMe3bgwZgxtDbzkUkjhZsX4HoJRG62LPzRnb8Q6eFpWTDN6P55wUdJGQywb",
  "key2": "4L51X1CvWdhwSutdozA8zMBhgpdwhyR9KwDPUqoHijrQUzWvg1jCdPrCuxVN5G2LHyGQ1HoLqSu2VoUCTnSNbtiP",
  "key3": "5577fBviTYJSiJgHdoMYyDaRcUjLVrKidvveCBCQ3HjSSoFrgyo5Smb2tGav1HBFZmfmkxcQwTpk4T1rj1ecgjuZ",
  "key4": "YWu31QuJLJ5HAxr5TNVXq9nqpFbmDGQJhj4TN4sAtRWdMJoaPvLV16KB3KqPop9ygcKr5G7gAqn4dXjw8aoNnZ3",
  "key5": "ZReRSDQzGseCzQeSpiiEu6cx7HX3UzMRWc3pb97cNQFaK5dZMzqrRPxLmm469pbbzVvNuyXKY7Wj43tgbWR9Wt3",
  "key6": "49VaVCMktk9Na1o3qgN9aqQx5W8TFYgF56jPh6Ax1gL3MeQY41b5XpUkDrrtoArxHmXxKndTRf9GcyRXGyA4A8ps",
  "key7": "5rZQ5pisSMP2tW1oHxEYj6eweY3oKVX8rLQvxz9kvCyvnreYb2CHRufVghXyrV8NMxZkPttg3QLP7k7NqdrSuHfN",
  "key8": "6oyfQPKMMs2CXfr2Swz4dpnSm9hM9qDjkMux4jRbaDrLDKw13JP6GWobGwLAknHoCv3gmSmjR87iSZDei9Q22jr",
  "key9": "ehp4ecnybm9cxRv4amYo4rMNRyUREgPPn8Ec3Mz8Li4aULFNCERJfPuYc9jDYfcKXLrWBCBfhEzkbmSPw4nZ3fA",
  "key10": "4d4gNr7svP3LYHtyda9tf4Fa3EDSjVVYtTX7uDnvuqg47kKgF7Eh21ibN3fL2cRBzFgkb5rWehqLkPBbdRieA3Ze",
  "key11": "2ELAdLptV8diT956H11v8CiUbeEo55BsSsPKHGrN2ttcc84mCNtbbFkjVjc3MwHxjtazDeDb1qvpFhBEgEEsCwbX",
  "key12": "2RYx93aTjk3DmLwEG8ZAyv2cCGDxaqoj4ZgBkuGYVzHho9wH2WwTSaJS9T13ECKtzLuiUMuJe5m9eaDURQB464od",
  "key13": "4uQg2bvkbDawnyyQSKcTpQbpmyuMHCbyaG6F1pEJP8hsHh9XusFCDt99Api2wmizbGbEqePRbqWSTGzoTGtarXGz",
  "key14": "2FQuy8zBJobNU66tTxyEfgTUSofA9PN66CY5fVYrhrVGK3oxrrSE9NHKiR9yid8gjYfyRVXzJgfEsXvXTPoTH9a",
  "key15": "4i2rNPDNndYv3VBBdVs7CXSxS4t2FXNKrmsk25KeAHjYDt2PH966zZTuspg8yjJD9WKAi6hqkLiGWZkkzRUYKMsS",
  "key16": "37XovLHFLtos7Z9abE7x2MX62awaeq7EgDGih6svuHekxXThx4bCdbss3Zq2BFnABrSvnwiMD2W3J1kgwoQ7dXUZ",
  "key17": "3EdVLBvzq8o66Wzedc6gspmW3aaCWG6AiBGt2punvYA1byiBQpyU7THKasixKGQf1dmUwFGFXM7wgdhDkG9FGAf9",
  "key18": "4qDAFizMiodCuXjtGZysFXwYtryhJaCLZjNHxLDnwvC4yHtn4ZCMgZcYrxtud8pj8zLQy1X9weVBkDbhwpDAs7Rz",
  "key19": "5gLQjvM5Dv9Ast1N1oZdhwb7XCFheFm5FQvFqyGXgcDbcnix1r2ooGVxxizWkceaFjC6D7k4uJWxp1LNH2143Kvy",
  "key20": "2hVwBAqosYDosebikMUQC93o38PiUcqWJUe3giwnAts7UPGJdpkdd5cW3rduuNsmFnqgZMevhWUFuNR3oWCGABtM",
  "key21": "22ZeAurtjqBDDUzgKipqVhjgoC3ZFNs5gB2jNWgZvcijvURa9Q3swL2cxeecweEgH38sqmz1V7x5AE44cBSuujaT",
  "key22": "2dotWQqs32wguiHHpPTs5iMnKhrPJd9iiaFvYMLtzCvXtLQbymrCrKeBuGrfChiMNdh655hvuUx5FsmVfJYYpRMn",
  "key23": "4CjMeRV4TgAJXkdHCJQAAXjqigxTDoT4RsWJRR2ErBxKK9h4WNUqvBTd9NkTM5134HhThyJPG7tHH3xf96eNxpV6",
  "key24": "2dC96EGQP8nZh1FVGB6k2QcwbNuztBK24wZxTT2HBiRZPn5LzWp3tu7cNKnzj9pNNLCzveR6yYK4kmH31CBi6S7v",
  "key25": "3rSN1JjXoeeducHyQQkMUzQUk41Fb5pJsAVUiDCqpYxJ3fg1LYhGbtq4HVwjnbmWZnPtDoSL4sKyosjDMfBh78Uy",
  "key26": "py9WH5fj8FwrcWo9idgaWSfALp18KJwLpU9JSrWxt7xymHaHvSWfdQt8dhckHwqdHjoBdBJ32pKxdUzrwTVKb8J",
  "key27": "4EZVvXybZqioTFS6HNhN4fvKGffNySWSMm1WJRgxKorNSuW6iXbJf6U5isGy7bUJuv5EqUsp3oRmtTDVVJBhJ6L6",
  "key28": "tnJpTeTFXXJSpsTq3W9yJuzSDgh9UjRLbtp8pWenQoGTp2WZee7aBJUmcoNg2NSsE4Qa7HxjQFq8RcnGq72MjJo",
  "key29": "4YkUZveX35xJ1cvM3DUhnsUcSUYVsc82jnoiVvbTRyRLCTxMzJL6imHmjye9WPdiWmJGfS17j6vuNjTmSXa8BhLf",
  "key30": "2uUd6sb7RrvkuRP1p1Vweamc9ChggS1mv46U2qNVxV6WjZ4gpmtMExibLskexxLRAsYopfcpz3qzCHWu9nfr52Dy",
  "key31": "23GBdhRT6j6S69jxcz639t3ZLE3VNFENFxb6x9pMdANw5emPhir89egY7Q9ViUe3Adve8Xb4Sm3GFPo7Z47rVqH3",
  "key32": "377ShbTawNhBanxCDWVzVCYKMzWotg318ncKtuBu54XyFL6kWrvmo4CnST9d2GmD9LxpB3VrvaKFSUBcpDQnfq1",
  "key33": "q5xBtkrBayFgE4s6nxshm955eBePXkjesnEJoihiixweYQc88zheNq5QiSnZepBQhxpofBybbdHTHyxzT9btKDJ",
  "key34": "3z5pamKfVReEmWDFP6to7wGYcEgjBd21TSBJADWdTsjvaVct6ZaeYPQ6To22GJTDttbxpgtePMXK6AHWKtjfDhsP",
  "key35": "2RWDvXrLSZs8mnNSNpR5eFt1qEpGDMM5DBpoQq5tXb4wM3FzGUhcHCZANygWPGRq4UywJJr6wcN7RDFDAg2h43VH",
  "key36": "47ijzWPMSYH7cnfQn6wZGccPFu9Yx13oH5XgsJbDyn7YZA9HJxSahwJqoRN2XgaKd6ZBr8wt1vHrhey7cqF2LVLw",
  "key37": "AiCeHMeV3d8xB6QCSHxfqToiManNJYLU9ZeMcp5FapCXKSgXk6dMJ2qPKUBHpCNxKZpuRVBZq4tvkFMvqxgf1fe",
  "key38": "4aSLvurvZytG7s7wCUfgkYYMHFuDsMoE5WzWajKnmLQbwAT1BY1kkEoBMwZWAfeFHwepoC6LSsy41vDxA9Xj5ZdG",
  "key39": "Jd1oE9t9vDNtRrmYmmqaUjM8jWnVgsPaRWqmmgNPJHtn1FCGvcKJenPxeK7X6jMfyX5heHLfYK6tzXBzaAy7tYA",
  "key40": "5V1TUAdmWVkRAx2cUNfbqCUudpCxAVe8o56PBVTMDSVh7cgndvEYf6CYpTzJmhsjj7Tdoy6k6YBaqhbKSB8Uza8n"
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

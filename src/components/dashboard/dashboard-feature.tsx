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
    "2juKrs91PF9j4zz3662m7YqaZYeNe2mUYhrAM1hDcqktZ675ZKbuaopQEi4dUqGZMpyG3s6Nkq27kKn8RnfwmdGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrTtgzEKEuofERrFac3amMBUzXQysLYnEM5NynwnwhPX2hnY8UkYkSnUSHYbCpx5pxGc9td5Y24efQHpVSLRDnd",
  "key1": "5aNvMfqNZuHaWKT8u77a7Aoi8kXwox11V5xDArEfdzvbu4AtdJouQXksYupbrcJRgNwLrmhoS5WVzPLM2BF46cLy",
  "key2": "3ifB5F3iw63VVvMaPTWbY1AytT6YhNgeBTNmLB749BmjZRn2AV3myiuz3La8FkJ5g1LowKxqFibBUg3tjvYkyFuc",
  "key3": "4s5ysRcDdH8LeEDa7T2kSNwe944U5uyY3KheD6ahZbDgJdbeGDrge9FkvcAq9L6RwdmFNhnbPob1tnQLxzLgF73a",
  "key4": "gHrxyWbhau7WKWWuZwJcKDDKftXhKBMjZ9xrUa3Uft55Ui56K5B5vTJb9Uuj8EZWcKvmRKknkvse6E6bd7UNjGu",
  "key5": "5ZTUd1uW22p7KuFeBcndfYfDFRzHFcA8uSN9fZaHHNbS4i6KuVDHaF8hNngAw3mzKgnmgP57cKMn6RnVQkYEFxN9",
  "key6": "3fpaqaCfWTrrdywDgDBHykJUaJWBpP5uLgYN5SCARY4ryDopGbEtGH2ya4HwPm5o2qdK7CKtgw1zHveWggJ2pXEW",
  "key7": "2KWSxyRHSMTNMhgz13ZvpJHFwNvFXRBkWiqw7TbBwjvVa3T4sDghkBXc9W2BtdLz91JTxHQj3HhmBjUpehrtraxD",
  "key8": "ktA8LZ3Rk9WJf9n7L1y9hoPSTJtTxtZEsPxiretErSPgChSoVBuVFUasJsBF8XsCfrJVZ24M5EzVdTk7vSgVby7",
  "key9": "2Lc4KgwVJzezXZniXBgcyDsqUo1hRZi7EYxFAkTDMJrvRxSdDfoEvndc1c2p4aqau9JHuJKCLjQhsTbV9s1MVqWR",
  "key10": "khfTdpJj4AQNjW54mJLosqxEZ5K1yQGKMNNiugR8n1GK9uuEAnHxaVSZSBZ44UZ6z7egBgC3guPJ4TvVDPePTyx",
  "key11": "GmQGY7vdbuwwi7mEygC4TTuqTSPtyCZkbp3EBEfcuXugEmAvqDfNgW3a8EYeqQL6hpeEsKdJ8kcWmAjCAhvfEYQ",
  "key12": "m4yrnpmaRRi5ZwsAeGjYuoEgKBm7ihLMeMuVvoQ2eagmkoheNVBJZPYo4U4VtxV9pzRa8aufmKtB5omKwrLwy6o",
  "key13": "ze6nkgKsVGsbhVQNm6wwWXGAmuKWa99NpocF8ouxnDKZPK9B3zsbxFLpSk1M9Gk2EuxbDspTrKf17ePC88qT6Rd",
  "key14": "5v53CuqkK3PJLQD6HNtjLmEuND8BTHe8qRX2LAVkA5tbGaT3nVdLXxZNaqb8mWwYSnLa8gq7iLh1ZkE78BWiZscm",
  "key15": "2LNHzvsuHZMnpngt8p5yRtFjhwaZVmkVUk19cxr7ihZWjDyTE75ywkGxqpefk3wFV5vtDYC7DCGo8hxS77Bbfoc5",
  "key16": "5DYWcxywR8dbRMbv8PQwDK7kWqFrZuycwJ1YZfkmA1Yw2ceyxbxyhuZYsYWjYHqfBJTpe97QbtGms8wJuf1bm44p",
  "key17": "5oiCUofCRNbE3yC59h9ZksKrc4SubphgUpxsqdbV1A9PNWXCr7r4LnJL2AQseF1rmowfEceA4ugiKqfvL9GjMhxX",
  "key18": "c4V6P1VAx59DdPWjhH8X1qKh73hjLnXjempt1inXHU2cLGdL6NW3aJyr2dE4SBSvNWBZzWCYZSSvLhQuqVF2SPS",
  "key19": "3TqJEDsfRagL85VTXUDfAHY9N8vJpzXtd3zzpHBg4povZgsFSywPPQoVJzBhdtBgR22KRGznv2BFjGssWQPSTbs3",
  "key20": "44Hp4BqF88x9pE6smGKES4eQqZTHh2tLhxgEpsegrdQqGu6KLqXHcHbeCaQrRu8iJRsMAr2XTtoyZgvuGf1As7YD",
  "key21": "XCGbQckK5gTecnyA4njr1bccXnVjiyCYqqRAXVFZynjcKNm77TTUuQPyZGWTDXmRyB6MxFY1Fr3uQhcCfshp71R",
  "key22": "5JrPfy65fWcKcG4dTN51rVYUwfYMzL2NiSoVbsqEXzcdYaJbZiWNbC9mrYiHhtBVpBqPt5C8L2TKnz3Y5ZkZhCRk",
  "key23": "5xhNZkCWKntiVWgQUs5DxKSCZq59RdhrT2hy29FEByW95X9q9WnGjZLDaKpHcWzf4ccS8SvaNop6FNBoy6tGaxwo",
  "key24": "4rQhWzJdzm93yWFmxL5WtQiT9poMngnDZgneodoNg1RXvxvoCCgUKzfg6wgcAxFerEpvb5unC2Htxx2sE3Az36to",
  "key25": "5aS1hWTxzYCA5HEctXj1Vgdb15TNqu7L4Yp9eRgeNmKZVd7He3oeXxzwo66yvYcNDARmrS23iunG6iU756swZvC",
  "key26": "nRMWNSyAJhznJbcnBQvwNTYbnv1Z5sgrWxpgvRBjjsm6qXvp2UfFGEdhbsEFDkmBGFr6jMtVpdmhuGo1PfTcYyu",
  "key27": "58usdhNnbsZ2cn9GzED5UyKgKwWTcnwNNjUWuzxU7Pw5SByCUVGyxMGZPmw7K2CiXsqQMJffjvFePv3V2fTEPXXb",
  "key28": "3HjEmaGehBiAoFF7BzgWBPNUGwqkGQFnSca57KtWc4X1Qth1GZJuxEWZ9SvGjicbhz9jYAgMJAn5jNJEeJ6FCsaz",
  "key29": "2xNpDZG47wLaY4vyPij6j1APoZgp6po4gXQ5zVaTuEwGc9XwFtSXgEuKMvokKSMuByyCLusZUZNdhgne3MPGhjSu",
  "key30": "3nDfFf81vE4mhZvygR2iF1aPjazSWBwrXdhgXyFTWgTC7r6ctDLZr6BQ6PhaHVeQdkdoyTkDY5DzRqMizL8j3Wi3",
  "key31": "2gJnxNGuMsorCouRDKAPBF49rGvwxAq412kSp1zpgngAB9DzxnhZq6dVcZQdTGeQwiayFZiDeLJFiz5ir2RnZqii",
  "key32": "5PzYsTRqnD79uepATwBsfnyKedxQYQe23ncyesA4g9uPN2hS4sHSEz82rUcFdDvneEZDhzeNFPtphh6pFjCKFWKf",
  "key33": "3fHhYZF9uaSWq97MRTK2FZo4QUbeK69G3HNQ3kbLFr77DGmjwGF26oXwBUxyBQJGmnra9pEPs9AWGpM5SW5WDZ2S"
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

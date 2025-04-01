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
    "9KTG2VVaAPCQWcW5PCBfqw6xohBtzsrxr8Crmf52bQY2XLaF5UhLXxUcofqWLXnjkhBQi2nSA6ciC8mxtAvUnLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SscwbshKGPXESu7W7wT8dQVzMgsAwWB67b8G2UkiUN3C9frxU2DX1DYzjpDagYCtdoRxDEZm85KugCq38sqy9bB",
  "key1": "5c2EyY3i7b4e9G3FQdShBN3Rf2MEbzpGnjbAtMpz997Rvd8uYja9wx28LGAWQHjPJQ7P13NyNGFemzpoUCHiHN5Z",
  "key2": "3hzn5W9C77xGE6VGPFofqQ9hwRH9SGD8e5842wZJWLx42DsdTmLEzqNjs7HpKW328kkEZdknNamKjx6v1ZXRAJ47",
  "key3": "zdjpL8UXeWVdCLgKVNEmHieTwhueahhtN1nXDZVvMtemNbgRsd2xDJJsz1ZQqrHkP4gze69RNPha9UFkbizAG9u",
  "key4": "2sQiA7BHoMx7hQSazuBEWwdyPuPwEsGBd44saFMksrCRCfk8VYApRDPZQbu3Dx5nvTh5owgrwtKC9ehaz9WKaJeX",
  "key5": "43Rityq3yMZ2d3q4gfRouQ1PQN7NgHYDDyyvH4oAX16dSf2W2QNUsdvB2v33D1XPo6hWxx9LGWEh83qBZ82BziLx",
  "key6": "uMTeGuYQyGJzsBbu5TcVCPY47GPnxhLStMmdDzccTg3KnNwXvM1d9BvXM2NBJPadEvK2V8GL5AyKkfQwfZGfA2u",
  "key7": "2e5bojv3zzmv6q6wvkP4docVdyh2UPT9NyasF4NKaCjxbKQXf5vb5FVWZgwLgrkM5k6WYMHh3tNp29y5yDiMjeEE",
  "key8": "4maUMiYiqtd1nXYPMrKPEsi2XLgd4pHDHseioUWtuP78kX65rvYBVZkWc7wBFVqF41zvJFF91eYBJ8DrFDg14gP1",
  "key9": "4ky4vwv98xUdYe9e9JoTE5Ln2zGkNAmXHJEk36dd7pAyqaYbyzvR4Gq6geRToEYFipE8PWvfgCc6dy3KgK1rKpUc",
  "key10": "4i7uCkHRbrpNhRVx2DhhMi2L2KK9Z4mdRGwZRP3Xr4Gj5vEmtKCyxcBZuQ5q7LHKZYP1U2ck1tPqFxrzn4i4SfmB",
  "key11": "4naW6ZpQgFSihmcR6pf7KSDHwMNvg1DfdUgpmVUvX7tVuqC9CeaUwR8qq1PDYGBVfJ7UHuqUFSe13kMNE9Jjd1Gk",
  "key12": "5WE4LzDu2xzZrh7WJf9oi4rfqPcwTs5FLR32LrMUmpo2gPPhrJ7r2bTxk5LKP6EMrGKyUnAeqhUQsAGtzqZeFMeT",
  "key13": "4fb4sCof2VZtCDkdjrTR6aaTm7rNgpA8TSXyPqSkrugcyAW1LqwDXhKB89W494j5y9p1aVW2Un4Z5EXzXFmDE5zC",
  "key14": "4a1rGHZ2Vk7ZdyGWxquSynYVp63JUDo7jgutfRBvSgruEzYRcFs8naXy1hyk7GA9fRVeGL1DQcxKMXCycPP9yUSD",
  "key15": "2j18PhFZpC2Mqe72w5CZJiB6hbvb4kHCLUAD7FQprf53FtmiiqRzF26V4evPL7oDsp9gQn7kDSMDtfTgSRREW5qi",
  "key16": "2Dix9RGc2Y1aDjnmcP1JJXB1NwEvazT1UXiVmkUoHRdBoKuMVqGQCthrNRffxNSeacd4ZnwGebyhjpwSB9wAZFDg",
  "key17": "32shHRhWghPsTosi2uzdZycuua2qZDFqocVM8mAJvemWG4mipnVxK1Td6EcVqr33ishKhy1apjRHcFhPmuQJxyYt",
  "key18": "4AXnr9qwM8MvvJDHBT7jW91qR7v2BeW7P16tGYgNaXncso9neUrV4WZjaxYjySYweazYKB5BAR3bvjNWKn2GCrmo",
  "key19": "3By2K7c36WVjUA3nfWgZPMnZCihaidGGSPrGe6xMLv519rACzDTZxwLE4nT8939uHRnzXvCviKQiDwMEUn5RiP3K",
  "key20": "2LLSkvuAzVq77DvXRHXTbxkL3yq4zQutUNg1VBf7wxS2iTyUXcGeaQgRHMh7WiLnRND6ygBxF8ZYbS5Mtz7tGCXQ",
  "key21": "ZUSemDdYEZCqJhyyS9TVd6WZGWJX4JoBdfgQHPnQExEexQ686YbJY6EQKxQiebuUvjYY6X3B2FeznEzCR4b1iob",
  "key22": "4jmigYW8BxCMx7SSsCbWDExFqmKcq6ys8YfisdgMvT3BEpRoRTcJXxzwVKtPg3CdiJSd6LKtX3zD2HkateNDMCJJ",
  "key23": "5gCCn3STcTag8yMcpP1QLeiSaDiKcmdyXWh6wykce9WgVq7Y1FBK9YakN8QRXkR2SmzcKDURLd3U9jhLp69AhmPQ",
  "key24": "2hVwL3mPLooqHQzqBEFqtZGrjVU3ni4nL8z2QaYwabUYYFRQLyh4pTYX4CXdQQyJhb3C1B8UH1Kp2kcPNt9bwx4z",
  "key25": "2WRyFwwX4ogEnpcAmmWRY5VF5HJdygV185S1is2Roky7mrXHJQ9L982TnBHtNZKbfvjqFbd5QocoK1QK83vJapsp",
  "key26": "2ZuVKBDPDWomchRq5aGkSU22Ks8vMR6SuQMhahibTcGHKNqYWxgZHco2kyrzt3PYxkXThg9VYJN9gdd2zMotL6mr",
  "key27": "4PMQdzBX1gKsJotA5aseqc6gR3FTKUUR7GRfdnEhFZNTkZezjUSqN5NGvo7hYnCJ63bsEG55NZd3MhBrWiov4oM5",
  "key28": "4eR6N1wCHxadsTw6DAE9sFp3izn5ZTuYKDrLDPpw6NwLR4Y9E5zsqQCj2tr5EqbguuZmzBi1xEP3K32vYb3Wim3W",
  "key29": "2Bezr3fkp6YYN6G5AAnXE5ZYNroX1y8jx172n7hkviwXojYSJrJfLvCaAXhCnZyPRqT6hg3RsUd1ijeVyfzjkTiz",
  "key30": "5MgeBszMZ1PgZaV4jvrTMdAmRfrbrnxhrYcUVcwHheF7MYBDob5P91f42JJCitDuWBgNyJk3jcZ4N4x17LnC3YRZ"
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

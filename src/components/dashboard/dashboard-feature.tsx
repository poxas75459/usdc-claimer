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
    "6esGVxDRQJFaf1Q1JN67TsAHpeiWH1ShkqjsxizGnKJMpSutLYXzuKzJPCBZEi9KGYLeQS5imug2fx71WcC44rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zmbPD5bWqLLUuB5cWhMpFqjhCDDbtBzPMb3X7LcJwWw2zVL6F1PEQM6hFuug28r42ATJZgBskLkidN5Nb2UjVDN",
  "key1": "2gssDCe85YUYv8rFCtbGjuooZK5mBY94Qgt6PuVoxMm7Udpmkhqr4Qrx44ePHhHtHjLL3i8KLJU3VGSpWQ6CPSw6",
  "key2": "3pnWimFETFwrLCaNPf9cjJKu9k1HHQnwN2TUkoNiAbMRBgCk7qay4QW4mFMpox3q2yNUpqffBXxtjb5MfCofutZe",
  "key3": "2SojZBLWitmvzkEGkjFQWV3mHUiiQQhgQn9Cg1mCJTGNcBKYcYpXM6KKjKW49NYs1RMq2SKGdYUCPn57HXUqbL6q",
  "key4": "2D4uYQJgvUj6pduCZgAimcojrmxRPuLTS4PLsq6Jdn3qfsxX8U9PMJL2zE5UW7Uv9hscUpB6iWUghDKLnER2Ey9c",
  "key5": "3VmMDwNqgxEoKRJuFotMHY4Lne5JSAbSn5gN65Xb2W4X3oDVziRo6J92nG51PurF44nAQWD3MaDPeFNsyPERdqBD",
  "key6": "5W7RTHmooDmJnLr88iAPa5MfYpFcEBJcWPh6pVLHFbQXgXkW1NvX7jLvtTzBqHjtkezJcwxLXZ1YBbJpWNWUymwe",
  "key7": "59ZfirRyWgGJyEUAvDmyVfCYfv1GYZFG92z8sbMRHn2PfWsW46ps2SnTp8c586Q7WSArniAF5FnQXi1Kg8YMJrAj",
  "key8": "2TzqbnXjhA3ak62k86oeoNAU8ysuMn9zHvptkMt7aR2wyR3p6k6TYXWYrNuiLH6dyARbdAvtDD8QpGNGXsMPJcUG",
  "key9": "5GvmNsR5tTANXUJkVr9YaCYgvzBweg3nUnLpTvjNbpeQ3H56UQyJ2wyGUxWp7AhAPbr7DDzr8vQrpLCgFhWAc1R3",
  "key10": "55ES64ScBxEBUXng8c5E8RxeQ8pfeE9gWSKARYHgdXBs8xpq3ZbdJrW37LChLPXjj5KASpJRAHFAWXAQDiCrUfRk",
  "key11": "5E8Um7tMU1F9iYYFZ1ybLFj8T9CgQUKzKm743ooB9SjfPMyhhpCeBUzTa14dYCv3zuyqmWrZmwbwX67BhaCNY6Mx",
  "key12": "w44AJ7RLrKjRVCxeuwzwur3YhfdST1Y3w4QPVe4TyD2obdHrhutGV6cWJh2XausW3mY8jiphCAuzLSBP6xj4Vaa",
  "key13": "3ZriYPt5KE5QbmGQanxSM5yfSw92T4KCnuF35xEsSDUCAAjFDBnPf8e2g3WSEsVT8499K7CTafQeZjTEUcqhGCP6",
  "key14": "3N7JcVN252yQNzN3ab5A3BfZEMfraBRYXj2EyBvFZ5F9fvjRjFhJdj6BJzyN2Kdh8JvkezdFdXrnRMnR6ixg2iic",
  "key15": "4msrHjqGiyDwnirmRykLHUgBC6GYego22j2RMrSUkuiemjUXRf9rP4vuz9Tfe9ZYmR1T87HJsCbgyL8yDpA26fnY",
  "key16": "GE69ZKC6u6LSu382RLkrTvh7FZTySUwt3CgYKdVJAquRNhDVGYjbQs9jMD8G86y5B7QMVV77vNDt1aSgi7bESji",
  "key17": "3u36r4HioTCYVv5hURQdtxv71TDYMcVYaP7LCaHmhD1KLbux318cz2yWrtCD2AFSDY18pLboGWVySR9ha6xzfKxM",
  "key18": "51cpZ5qsq8pfjHGc2yqNe9HumzmZSDWhzNyBkWiWdLNcghMaucPTgFsaUENxKoDLeks6PLeGzP7768CXNEMkxwfo",
  "key19": "2PQ2hbrKrvwiTb4RS1fAquJ5u1NVVNRQes2ZWhjcvV19iqgZFskF61ab5RRbCQb7iHJH9egjXwVWPdNMPipDWvHV",
  "key20": "37vnmPPV2UzVMNUh62i2RAvTRtYJDb52XEJRCL9o82sgNxFVx9HwJ9m6AFi8VoxmgHMa8mNoNZ2nFn5woscCWVgz",
  "key21": "5hdFA6CGF7LakM3DiCQNuj2VbLGbpsi29Y1JgGrw72NM7h9tvQhynw1n1TqMJ9bH7EyQ5DkTycE24R4DZMGQdBX8",
  "key22": "55oYPPiLU7Z5af7KNer8oBK9YktecCEya3C4H2uYnQxP9hEugA3bm25K1wmd4REssZMHziDxA7w4PafgWuigLwtg",
  "key23": "2keEBZ62jt8WT28tKdxTSSfzr8fygSpRMYDRHticmiVD8oahWMwsypgZZvJW5mZjSEqxWKEdeo5hcCBxFVVgWctA",
  "key24": "3MpSpq7W6eYogRLhWsHgnY9fpwGUL4shpnb1vaYgesUmBQSaigX3ycExrJg1LstTn8yVVCvFoPprccaMnrhrNvvy",
  "key25": "smFu5w7BcCnhmF6QHVeR7f1dRsRVzCLMuf9gu4Z8ufeFJjGq2HxrC2LLfbApa3Q9QJRNRgD4Mt4yo37L22ZG1U1",
  "key26": "5p4bGr9sR5bbMUEEisaqrNserM816ndzfTKfcosx4V9ZvANj899FRqVPdz5sJBukuNcGRhAGsra13E7d2WyQ7sYc",
  "key27": "3BgdY8WUi61Zk5KWYkoXgqwQawzJNjipucKo9btYeBt6oq1CcJ3s1o5j5yUnHe9irtTE77uzMcwjjW9ATq9rZK6z",
  "key28": "5UcU9pW7XZrjgNeTriE8AoB8PRfwVon4paXaNAVxnuGCUtor5PgV2HmgossYt5MZ1qVA6CxiykNwEWdSvh9so55W",
  "key29": "2kyEgkq5RLqzi3ozHKA5VgCHQhvyHJ4HYnZXFbewZ6RZvMRbzYE2nEaoQSqpFmoqVWqhESzavA1ZWdK9neHTrwGg",
  "key30": "4Q1trBqscKRtpTPfYsvxNjDLhshGBAq5wUbzFGaNJMpWwxqJVgVDRpWqvDZxNxTWNvj2D13ymF6yvzEoXRTtiXzy",
  "key31": "2MN28QWjBPxjUuAs3hMEXywL5gjnDmzWmzBs8irNx2wR2P14SojUKuSe13bY3t1r8QQpNgYR4CV5nb2bnZbK7VGS",
  "key32": "4M7gBhz2EvpxvWzaooxoBaPrxWRjguBhkMYqv1mBbstLnv2ynFa3WW6LfG5YtQCfhmUgTCd4m5DMb5jJy9Jz2Xqn",
  "key33": "3ch2mMEfTr2Qhk4bujxVYnUNk3JqBDpmGV7NkgdUcdpgJ8AqVyKU1NvnnSGpeJdeUe5zEtG8Ti5UsMP79h2uziUz",
  "key34": "5oTvaNL4KetMSGXNATTSZD1bLZAk2oTQHNXE67d4CffSGACyGZvCfEnZY9n2qWTa9KfUiJFuKeJ15qTmk3jHs6ZN",
  "key35": "3G3N3cUZNfNuuDZnHbuFtiXHPoetyXWuXjnUpNzsVrj3yHgNZp82G9UT1YJneiwGkCNwtdiZNMdmVEXSFM8FXSmU",
  "key36": "5BXhiXRpBfFa8iro3xf6jzcYhiMcLsX6hs4GKTaWf7qdB78zxae7WdjnZTRvFqgZ67ZKebRkFVZzTRoAySY1vxA9",
  "key37": "41KsyQcyLdMdvpYdn47oj5J1441FWNkSJnUQw5bbmL4Ufz93ugBUov3xMrRAxbdrpubh9aEYYB3x2wVzbiTsS7nQ",
  "key38": "3Xu1BiEWMDgBsZ6WVd4DZmgH9so1HYjA7cACUczoUDQwG3VUBzwqdtKS3HsJgXiAxDN5b9MZKGZec2kBdHYAVKK5",
  "key39": "2ih7vTMDbG2tdgYDNqqKtmvP7mY8pGSK3KXLN3KBvL4RVyLfmrXJ49RTbrDCPQuxgtsTvD6NHFxhvJtD7Gb7hRRb",
  "key40": "2Eqd15RQjyENSPvJmhsjmKmt9sVfC3omdW8Y7MjNMpJXy6jCWZGtB69xunwzb8Gw6aNa8dMwFL3dTBbAyy1MeVr9",
  "key41": "3fquMqc7AZ6wGEhVPUN9zMC3iZkC4AEouAyoSXNeFLwthQSdHqMuAixfF1KHfeV2W2rqu4skG9QdjoQAvxX9vYQm",
  "key42": "2zwqjwvih5cQUS8JPiACXRuFaipCDZMrM4MtQDZDmwfyWdbFcJS2zpfTD2GtzrYWTEJWrG74qisFFKSU8dAv9bz7",
  "key43": "2CGRAkk6PenFsuuz6MuQ7Fu19uRaGJaPbiuYuCCjrn8fyi3LWjQNogGXtGgCt3N3J3xWpdvEa1jsbDGTDQAt7nMS",
  "key44": "2UMUM8EK4eaqBfmwcY26RoEfmeMsFpUJ65kHFQHLMnYkzaArADEiZ9v434iTrry7Wd7T8nG9HJeKiub87XTpESWx",
  "key45": "5rngDDvBTkRbvaMkBcWUf6k9hMSsjruY5TbcPZJ1m5enKZj3EJcMDpAHHKbaLv9G5SW6MRt6b68HpJh5V7UCiJWR",
  "key46": "rKuSSwNuA4MUn62Hx6S1sTFSGDLxkSTgT1nxmhDMrangz1mVHsnKTkYxkEkdcLQQH5puQfwSttEHbSFy78sAhK9"
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

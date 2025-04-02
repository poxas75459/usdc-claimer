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
    "3eC5mw43E8EmKaGEM7ZAfkfu2NbRTnmz6SSHNsU3TimskyHqVTHcYsdLkmDvFdvYXSPThHgfKDKRoyQQUiqbzeGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LTCQBNaXrPBKEgGEa4UNrjLUxRZC9A5589eEgtFb6MXbr3tHT8TGXfCSM4q4C1XydpZGS6NoELxeySJsYJXnNzM",
  "key1": "3GCD8u22pb8e5bggvrmKCBDgZaw33KHyN4K4gUJJxuAWDdpxux5HPxit1tg9oN4bVjkj68YGmeyzNwmsdeqojS3Y",
  "key2": "4BhjXHLtuUxqqwuu3hrFKFFPhXeC2tXA9U9M8ErcyCL8Eg3Yz1QtZwMDwCWD1BF1SkuUshyvCmPmkpoGods7FTMY",
  "key3": "54Ni3DmsXMFyy2nUTqhw2DRxSjMGV1tbgHkxP6iCNGEWrK59mTh95yEZ7pX5YfmKpYQ9uoy8FJbyWkVsQJZxSZ4a",
  "key4": "5KFJsHSrRepcC7nGDQF5oNTu6bMYJAXB3WNMcyhS6RBFkxybxPzZJy7ncJbdmJ7Ge3F6YtRVCvxEyJTrkmrEcmCQ",
  "key5": "Zj9y4ke9dTxh1w1jaj492bEomtBEak7zH6X4qvvqsvK21YmYFdhn2aff15Zb9Pw1LJWhsMwzS4Knaa7My1f6TXw",
  "key6": "UbtNcUsC3d2GeGVT2YbHrrtndpPqtekhzCwZQJzZ6bZMf4ZvA6oArBsjU9dvj3E9s4MBUcHDvbuXeMqNuifZRZ3",
  "key7": "iKqeEYses6FENF7P1bjnoL1mmLszHmedsdM7yynenQeyiMB21HbS4Q1CWuVX1Ndg4BUqDeWYd5tALXZNw8JurEY",
  "key8": "4hsEzz4EY2qSAmRgcRmESaFZaj7ifs3Nk1BQNyJhzo21hKfhrqFN4VSjxKav6rdw7zycema58AB7Q1u9cGKutR7n",
  "key9": "Tr1uPhe9JbKHYtgzy2W85sUnZbcV5BX34ziE1piMb2u4Wr9L7Ps1pQFmFrWPD1J2GLjTsJhM71C9Dh9nQjBdYFX",
  "key10": "4o6uWzNd2d1crkZEkEvhkZxwAnMCCwLYWPV5CR2fi5rDLoYC34m52VzVF5gZTeySwTULFQ2CtRGc1AHgBGnJkmPe",
  "key11": "3k9iCmCAumMTStvXHvnZzvxKKcnRNaPL5WQhAMmKtj6UCFroLsu1TqdbE1NTbLb2vqaZESDasMYiyvCudLdBugGU",
  "key12": "2JoaXvso2avGQgMpSBVZYMe5TbubuJt9Vzmct4MvaZ6tKP87N1xUh8F5kFNK9mPnqDwRtSCDHn6LMmMTmv4ph9R3",
  "key13": "3DF8c43UhhTeRAAhxmHY7RAYPA18CSmriS4UA9iEtQhHmQN4ga7m2Y5aTh6pwW9U2bwvjTqZrP442oRrGQLLPSbt",
  "key14": "4mjahw4o4ycDYUv87WHMz7cQ5kC9qd6Ee6giZV5erwgrWStK9K6V54KJJyajviuFX6SzioRjnSvLRjBKdqwDtzaV",
  "key15": "3dVELB63oavF4uhwLwQ1Ehq8cUWw3dCGcghGpJ78sQpF8DBUsYzF2NfK47RM45UD8SDhZ6EY6s7FHfEwL3Wyv4cD",
  "key16": "3V4PLo3subRkfGGQdXoyYqUA5m8YMgb8pL1KGcT2VhUM6xrQ6N8KprKVXv4GdwLYfUWyoUKwuUkPwS6btohgqNsa",
  "key17": "2GmGuwWfKZbSwB4EQUxcFZvxcJMLqT8rhTxsK48DQgNuR4GrLkEdf85waLu2NWKg97TsuFDhHyzCQWyqoHmB4jQ9",
  "key18": "UDLkP7Lx81EYA9sZw5ATCd5nDA4jK1wWVwVjj2CcFM541CKuEpmMYFavaTn2AVfpc2qy8HgyTvuNWtWARk8pX3M",
  "key19": "LGQNaMAH1ZzZMBvorPUA9hVNTUxfFTrQ3tmQLTFL5DPHQZSYWzUtpD1BVtjWCiRUNrYujaDoEdVtzMWaBu1hhtn",
  "key20": "55hK8tgfZPQZvemNcEJrtKj6pARrWjRApwxVqemyPfPQiiWjkKs5RZgVYmFpAcPytjX6xiJCNjCwJrMNvrCrENUu",
  "key21": "znJf6sPQ8sX1n7ekkRqzNs8zoCSYLUuPHxGUYFmTLfJcTEwwJDG6Hnbzn8X9sSPF2Hw65oNbCMoZbKmV8JkYfvN",
  "key22": "3Y4UsTcuBf6zN5fSSDf1HmU6zBCm3ayEgu1CvUA36Cz9dbcBxPnMqLF2yQ4zWgARPPd7qaKkbnbsMvniCatK6goW",
  "key23": "2LNyci6hms3HZwHg2HHFA3ALgSLtaRGM7qJ2H1Qtqyk9XQJ2y5UHAarG7gDoiDGByjxESQo5uencRDXf6i92fVby",
  "key24": "3xXUJP31gm92D9vX9prUTdWWcXLW4KiJAoah6g3qawRLdTmA8B191zzUdBsgSdPUUHcscmprRPXq7L7Cz64paKMv",
  "key25": "5ineWd9HajReZ2FesjSPWFUgrLNg9qkR531B5GbJMGS8LVzSieDtEotGYuTx7APho7imaNwqwZCSr9nrnpgUrMT8",
  "key26": "a9J19x6HMZAJC9x3JHmZPng5nP5b7pnDoH5aCShGowu1849Z4j77Dni66ysroxCDgrsjQi4jmTkY3iZkmzPERVh",
  "key27": "32K2EcCT9ETMuKSV8Fr5bV21FwFVdJ4UKKjp1a29kyjtLuL1m6YZdz1vSkSHpSi2dnVFzL6vvXPGDLbghNdyM9x4",
  "key28": "QYiZ871ywFoN5A5RfRajSFykxgeZ4LiRWYbhsiXJwhmDAWRXpTjogCJLStR919GEfzcwitFYjb598QHZe3E9Wtp",
  "key29": "2Kz4C79T6iNP8WbSCceesXmQcMjxJcQCeRff2mT1wTuSFX1VPkd5ZC3Ww75VbNgcj6VTUGJFSfnS6UKzpYKWBwHg",
  "key30": "2vbyQtXRR3ksrQ9czrQ8uDEUdrWBNNbU6cAp6EdodFzAJQ1FghGx2oU7YpJ2XkzcNDRBSb4Qf68wwbRBjJVLfdqE",
  "key31": "3kmPwuTUeHB6gqhBDAbMB73q3phtJ8T1bKQbfBWCDWXBn2haSNeMJTyrUWHsLTAzQePtf1uasA11bV5RPi7aGSUv",
  "key32": "4qLvTpsH4Ym7sLSjLo5vwsKPLWNbisuP9gHSP9CVGyo3spcDZSJd8Ym8fpX8bmbgAYcQfD7cJpWpCz1Waq4KV586",
  "key33": "5BNpB9SCSBLzuWWYRzuPLkg3uG3kzgtNk76GFDw37AMFKxPgyQCiwitDYQy1QuDipifwxQh9jgwEwi5CNVqVytcw",
  "key34": "7W8YoLPF2MF2QatqsESzSRziF28r9pCDUJNwuQm8ZRUKPCnZk9xC8RpKF335NsS2wvN8CBRJcnf4iE1vZP6Fb5M",
  "key35": "4gSGrfm7HARSbNRyn7BosoaARitGeRF3WoyLZefvZ61uBNap2rwPqsn4T9zUgdXg5moj7j6Uj5zPBn8xJSKUASZJ",
  "key36": "9qciwgFwjSr6J71gFs4ffEf5E7AuiTWyQNnvxtvnYNKpmQGqCxrzgGygAJCAwKKj9BfVGVNoGnUZAYHpR4iuSLw",
  "key37": "3RffciRcxuf9rBEzGH6iz12tKNqCaFfMA7nsq2UQtGirfFfoJmDZ56VwbZpYcdBb9utJsoHvd1sMMf5fiwkEPDSZ"
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

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
    "23AAHaAFBvP7RmAWDakA3g9LrNsFjH2uTGSrnrbha7sYik9NFoFHRGngfzYLK9QzQh5WjNkoD3PneteuYEjejbqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtmzXQ2GzvqCrtPeEALtytHS7CxuxunqGEYgV31Fkggmc3iHEYvBUtm6iXEKHsrxkz9PyphXpovZsSS1gx8bY9k",
  "key1": "2QUmEpeJpwv3VQSQ9BFXDzJjBymNBvbVTsVLAjhWtTCNh8SWaEgXeuXeGN6RN5nDsk7GgzjwqyVWXyWT35iCFzZ",
  "key2": "LLkvd6xgvR7W8nKpfQon9fKpyAx7sv5wZePWNynSM8NbBSM47PAEYt6RhDHp8YU6W1KMkJEY8YNNpx5WiFVVLEz",
  "key3": "5ChPaQLkByPcmhKUC7d41M57VSt1wgdPdsXSkbtgrRbZkyh1ayzKrpMVSKBwHEoEFvkhXA3s7ESQwa4St3cq9Z3f",
  "key4": "2RZzwLqApBCpVbjSMJ9J31UGrY7LUgbPTJnYyLgCAwbwtC5ytaFJ9V2H3JgxiMygSz2HBB3MD1muLJzp6zh9Pc2R",
  "key5": "5B4mfGyzG7DDyWrrWUK3hbKYWam53uuedVNUBxj7r3hayH9ufTdKBUzz6piDQPmh7BNkAqHkKaEpHmbtAmoA1Us3",
  "key6": "4z9BsmZwFsc4KF25qciss6jnfhCy8EoxnxYPKYf27RqZVkQbY5Df6ehXunWe4p7yAs9oJgvUG4hiNMcbUWQH8CCd",
  "key7": "3g89nwvYrqYw7iLPDdPxxK7L8PhfbVhWnUhyBKPQ5zVVyKoXMSDfhSXzV6eTbU1dsGGk5XzWXE63A2LheEwh2WrC",
  "key8": "3W9VLrSjFB2PwuUks5L5fjHwS68aZ6PHtBzWUYAocPfJfdRL5FoNeh7FeqcPo52tPYuL7bYHC2iucYhyKUbTxSc4",
  "key9": "2wPSZUdwN3mR9Vh2GYUCfBy7kaK3AiesBE3Pbqj6XR2JZBqNsnMMG3pM3V7pYRnC4BdKuYAxAsF966FptkPkuBC1",
  "key10": "3Y6s8z76b8YCNvmkR3oESfeGSfvCvAMALDTALb3tHcDAy7Qa1sT4VKTrR7JFfvccSMesvTShN7WHmpGH3L95aPvy",
  "key11": "2B1BGTWuuj1LVEvwf2B1nmDmPbjz81xH7SH9KZZRNuyG8eTNCbZwiudh6YrHAHpwo9JnciNakB3ctPumar5LhLrt",
  "key12": "31LHEta5YfLR5DsdxJtF57LJctsQsQw3cQt1jwMJJnSumMqPUxcyxCq5wNXEn99aGDH2CVC4NYeFrLxVfLFJf9bV",
  "key13": "afpuJW7ibs5AxwATymt9Sm1vF1i3bEJQNAP1o98CevYnYaMgkraYyXzwg5Mzw1FUdQ4srPqRqjVG4jYUN1G8JBQ",
  "key14": "4NDPLesodTPRcoNVkbD3aSgjYA3bah7Wdor4yaVtkwBSVfNnosiKsCt61h2EpnY9adKCem3EXMqBDCwo5JedVoDx",
  "key15": "4aSfanpCo6Sn3aNJzgAetQwJnSmwnkP1neUa18dRLJaXsZ5QiaFerJrUn5cb51GAEj8k5s9cruPrTKg27CTS2956",
  "key16": "59rDQokmbm7A9pY8ruTWnZsSKhSm2u3ubAg7Y2uvgiMCsqjxJb42jiNCJq1TEYHj8rmtTeoEZcCdC2H9NZfm8AFm",
  "key17": "37i8fkAWdzJHwxqPjNZTZZ7ibjFx7rFChRSEbpQbt95mWDuqda7C66YF9L41awAp6XixtTdDWLyw42NgMwGXtvSc",
  "key18": "4jU7Sg5Ttv28wt7Shv2nFbezzyn6KQCDNh5PVPi2L44WmLaHopWKsLeAk6SNQPNhH4f2sP78PuJJ9Mb1WN198Td8",
  "key19": "2cDrYAEiwzNY8LRsfVYLeWFez5wZC2NJUSEJe9T5ys4EfAPhrJQ3aK3gEoZ2jrb8GZky61nDEd6b34vmKYpvDBzh",
  "key20": "2KncZKLk2yopRNSMhZUT1EeBs1v1K8LwXce5HtCUonWSMcdApscdqHKGGDyaYWk8oEyNkUXdRXRCfkAqNjMZSGFH",
  "key21": "4aQ7ts2wnJGskuRxuANh9fkkCeMovpDHoYGjtANwHpWReQmFyafQQ3QAuVEkTWpTzHS4RSapGG8g5wAGhpuqMKYP",
  "key22": "3frMumr28KszVzqy2DaBmtFFJ4gLaxnsfUneTn4iKBJF8Z4riCX8bmzZtK687zS5cDoS7V4ssj5Sgg4WoLbKGQ24",
  "key23": "53mxJFPzxEaJbcC754cTNxX8KFn2DjfDRpCyHoUMYZfS4KbbGa5ivK8PUzGFWKGo8HuoK5xSwB1ztGmd3pYw5G1Q",
  "key24": "4HvWiadNQuVny2ikkFKgaDwxpm18XxvJFzpzrymKcTMMpm13pPMz7mJVB3bmDs1fawqChUdnWarbzL5G2jPCBGRh",
  "key25": "5LGe9DwVCJYWuNmi6B5tGErkvsfKXH85Ci4hdKYSBKQbQQz3vPKLJhxd3buSDa2kvRnzqFDmzsXEkb1NGCisHANS",
  "key26": "52oQUYy6PSUhBuSkicHe9SFFvpjGLMpckDBZmCAGk94si1qkoLnUihojTTKrfNDcpKivASHq6rS7591Wun2EQRta",
  "key27": "gSEwmirJzTHGXhpiwhqA7aEQcN3JkfriH9PHJJgDwC3swr7meXCfVpvuq9Rao5g8DQtpqsmi1ti2pSSEjbJx6bR",
  "key28": "54y6An6rNyxE5neSAbA5LvZt9dt8rphs2XV7eYPYB1K9hA993qbq4BM7bk9pupyJ73GRKCa5WjbAUmSAsmZ9QH1x",
  "key29": "6V4k9Jai7u6LjMvKxAfXuWkSBPQGEBob2PaLdSqFHXPnox3VaHyg21X4ZoyrGNH38PffoeYjvzdnvUc7DuoKScH",
  "key30": "61TZhToNx7Cb78ByUNynbfTha8LpJNWoCgZQpGkxePo6y93YwZMjR6a4CoaD5omN1DMX3NaDNHnM971pKAgyUMaV",
  "key31": "PJzF87GwC5k3g7cYfYXraoNRCgXznzgqK7yzXoMPosJoEYFCRfijt7BEYrdJzjXWNAVPc2wUjZcQQkLsHaxCMFm",
  "key32": "3zDnD7NUGmhJHHC21gMJW1LhnsCqMNwQQVxTdZzHgbbyJV7c6CqfBnVaq5qFk6gsWbc5FpM5kRo22fx6oC9Zo99k",
  "key33": "3RSTBGQNTRfjKJQhhszRTfxtHE8nmTUbXFXXQNFtyRAi15V3gYMuJpnzonyKsrfJ6WsVVrpEMf1ds743jobGfSqJ",
  "key34": "3Yrr5cwU9x2MJBtwPNHG61AetZzfN73n9Tyd25jLVxqZFFLA6kb3M2tPzNxFTod1ACWsuwD7vPiLURbV9AHKpQsL",
  "key35": "4q8Cu2ewfXj66NCfR52eqwXE7qbdLqTyE6UhzyyL84VbHP2E47atkZJ36H4nWE1ujQnwB4usZnVFyMNTFB8cs9MW",
  "key36": "57UaQ4GnnqaJRCoJdry3oM4ThiNJwsjpiAhhDovpShXYDJTeg3uCrXnNYLNoQMtZKMto5kuu1h6tSbZBU3B3cwQK",
  "key37": "3nFbcDeBCDD5L5Y6ucBPCC9cdwbUGRbzxk7LmwKEu2Fh2j7Kpzg1k1g8rFpN7LaWkQ8fXcVoNB2cnGMz3cT9RAJ6",
  "key38": "5dx6qsZstxidAD14xuhwhyQ15vJQkQ8YWz9RgtE9tUjKufF3EpmNh2KG3tz1D5ddpnNroyhTb4XqyA2r2DspPg6H",
  "key39": "3dSDZsrvQbJRcpjgmZCtBXyfkZ3UXjLBQAEe5dLUy9cAEJLjDe5uL66RYc3tUwgHxYgfnLCBQ5RXv6pzPuR58dqQ",
  "key40": "2mJVY99CBMUEaiAUmn9MGgAUa2wMrrUFtW5nhJonByCTtxftfky5rnccVcBUGz4nFeYu4kGKT96AHhv8DRB8GaTQ",
  "key41": "5TCVFJs6kZaSHQiTKcffhHJXKzRYRP3NaeyPiPfeQpFEoz35pVm16iKNXCV7S5KzdWSDuN9hixhW15mZ6a21FP5Q",
  "key42": "2jxEFx6mLoF4VJ2QezMnFvyFWN1XomkQ3Qtb8scDEJs1mgsMa3WhiDhuUXArh3LqnsZQ4dUUGSZhAQ8aWPVLN1xy",
  "key43": "5mwkmfjQ6ik7615PamYzvwZZy87jqGVxQP9muqjYVJm2SJtyznSp1ZxRNpWAYvGc6TNw91W6pjxrgpG3PsGj8qCf",
  "key44": "5NMNuqBjAgux9n7EzVB8hDZdU3DrEg2VvCJAJGp2PTjMS9pk3jEe7zztUEUG6S9Xjp2rfRKdCKDJfBW3qw5c3RDU",
  "key45": "2D8yxDooDbjmX2YpfFVpvoaCX8MK6XjkqZGqC1JBiiyRWoCDes3BrTxAwtVUC5w9ze95isRsUwkXr2YZLoecj5P9",
  "key46": "455i2mn4Q4HnihtJeWJkzk96JByZdb1Fj8BHFPhThu5Mr6MAeBY3iSQbovdrCPdAy6SMkymSp6PNY7pWhotGh3nw"
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

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
    "5iHCeyQxCgcDkJC3Si8Pdko5uFyM65s8BEJPyB65a57suXLL4hDmh8zBAAvAhDF3gqzuikJFnXEWdgW2i3GiYo7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uVBzGfBk3fN1T4hU466TjPnA8MyCvVu722YLNyXQcYhW6FETiUkCNciPQRN8vok7H3LUPGdshEaEEb1v5bbSdNb",
  "key1": "HS39G5urtQRSoAmyg8vt3gvmGFBue5ZLcjWxkNuXzLp9HNZ6efwKSSGSYh6thjkoz7DmCMoK5KbEteWnxaxABGD",
  "key2": "63EQerA8Uob2Udx1x5AH2zbwEgwR3TGeXPCKsoYPDNoNsHk93Gpeezji7j8MuZV1nBhuaRebDLmdvMpeYbeoYwb",
  "key3": "W6pHM9UNeGtGqWu2SmTuyVmFs429z2MdB3ia5rDKVYXoTr93oErFAfKMvdjgsPJvPZKKygMyp9puu4TFzmQ2tJq",
  "key4": "EQC7Qzd5xxPhngMCmbk1Nwk1fwjE4n1apV9W3nSnbzDmArQ37xNpkueYs8EehRcwj2AJhQo8WffbQG2TR3csyr4",
  "key5": "fyWBe2UKsn9NQeiPvNtdstBhDA5dWay3PXSQj2D5eoT3u8oE4wYwxn7BSjBiaSnWNFS87GaNKn1NNZUoNyiYU4k",
  "key6": "292tx6R7bkNUXa5f2yzUzbngC7Fm74P8RUpujXorUUGHK68Lkx2rNSx2YrnBwqdbGmg8x5HzRzLxLDAbkVbrkH6e",
  "key7": "5qKHeLgSSgxQS1vUh21tE6f5cke1Wu6mmZUq6kauGqbDSLFmdHq16EZd13jFKEDQt27WUYNJeg5jAQo2xJDj1gvA",
  "key8": "2JjfdJcaAVP1YYr3abW27kwGo97x7ZwXH47Hw6AeBwWWVkV6q8t7hwGUvVFTe1NLjbR4GAGxq8d5ZXKeUgdVGd2L",
  "key9": "4mAAWpxoBJUWmcgvC5buoX84W3AUdweAGHan3N3V37bvHgutR2THL2ugLuQS6zt2Bj2XyfZVcsF3RtUrcmgPoyFb",
  "key10": "4G9nmVMBCYhGtCYpbgSXw7zcxhYfn4QNrb7WK72a5Abe3LU5ndjf3kvVbmC55J2GvJLnstLN6GY1VMNSiDBLoyuV",
  "key11": "3RXAbypiS9C9uDhDu2kmDsjci1zsZHnYLWvSSsinjMF9DtndDF5woRP3cMgxDoWsEX4RwgccBYsoLYvnewpHeBwN",
  "key12": "52EqHLkmsbMVWP9pE3HhhfFe9wtJ9g44tB9w1kQynvprxR4Ek8JNoye1k1z3LJnSDe9GBD3zWch3QgpRngU2wpq3",
  "key13": "54Exy6X7pDoNG6icA5kRB8qTyf9kDmy9roePtBTdF1xLgoQRSUDzL1EB4dhktd8fhe3ZKq9nptW1iBsz4Q8C3z1H",
  "key14": "4Xbg8Gi45rCNwZVsGHvfCLwXLtxaCX1VW7NSydJStDZstErYC7RW4CFVvsU5J9XEpJ1cX4EhotuqbMPBGRefhR7h",
  "key15": "NTZc2grCmBsZKWLZmrG1neUbC3Lex1PYEMwbS7W4FgQ33iBSchQUaNMEfHFxihPqCGCGWkwr5Dx3UtNCVMCfQbM",
  "key16": "4wcdrwL1NaztxUuSopsPgFqtAUcAaK5NwY9UyEv5vybsjZ5YdGogevX4jR9RJTVUN3Wk9TEGDKBnSctuBrpETMrt",
  "key17": "5JudBuN1JSbZAPp51G1h2gDNiuUggQbzie29sK1idbfdKsmEH9QGjEYWyjLPfkRPjo3VPQy5Mirbw5qJRxahi5pJ",
  "key18": "5g5Z9DTGnis7xNukx4M7yegcM3GsCdYyFeMgLzbQq7P6ouG8Ud8rDQdqsWHZhdyHewqRV5zceY1LZNn9Yg1uFRJA",
  "key19": "3P5wtwKUiBPauaiKF8KhC9ALctpdUfLgGMpvyWW6FiEMnv82L6AqrjBpsGkMnyYWdcH7nehusA4CYVFAe2AofLxG",
  "key20": "4j4SkEEWQt5ns3T5v5FfUEd853ArMPNf2k1Lggh3Uviki9LLqFhKSHYgk6enybTgbG6AkdVHp7iuDZ8EtcyDv9Jn",
  "key21": "2LmjtaSVQeoJCZhK3w44R5FAYJ5xzn2KyvwV6KK7c2WxWpAMTNsujJczSxQMEbxXWcW8P71bwGJtLFJyheHCZfrh",
  "key22": "5GK3HXc9nPH7xhQyshFo9PtxreoDxAM1958Nm2WgHofHqFyStf8ufbZWr2KwHwB6mZfL2qrqSfgPVqsGeSscFqPw",
  "key23": "3oKjb4xja1Wskz2Kx43hLCdrw6uSUz3RmKrknEqMqXYZ36mWqVyUURrMH4godGHtgFMa2U6hbKeiJbQLVpja9KVg",
  "key24": "5tHyKcN9FBRMohWNe1AkYNQCDV957u4n5RqpBsLxeVsjSX1FGR42GFMCmRRsVcabJp88RvuYP2sZX4Xw6ohMx7FR",
  "key25": "5H23bXZ248a3Z9rfb69KmuY7fZknmm9tqNBs6MAb7ejCz3fKk9LLyMDndbfddGNvQfd9hPYr8qLMDsz3wD88Jyre",
  "key26": "4QfqsdcvUDFSw9KLax84iPkV4Ugbifq3eECovbCYkXj1h6W5nhZcG6mv7eDum94etM7aEELVHbKCN3ba18Td6r41",
  "key27": "2YNfEX33jtkbcurNPEmpRorVxV7CtczxuPrmG4ACYKVfJdeq5Bas2gFnpoZHCmZyLb5d53pUxck2Eu5Dav6i66ad",
  "key28": "5ja4qKWpmyxhaPYoCBt9R2MTdxMpaYRQmo7SrHuYdJuXfvXmmN5DFW74R1vcDhFL4UtSFzzTtvJZGSvVJF8EdmXJ",
  "key29": "2jCSKogyMTwfxtCQozzH7bzRWjQxkbXgkn44zuhJdDk3tMJAH1PidzdgUAVJpZ65FgLXMV87dyvraDQRRj1H3uXr",
  "key30": "2YzxKVUsWrBmH6Jxwm2q6ELKvcuTnhB3LgUxDpo7QpWcJkk9PTT7eynwdXrR48RRqXgZKddkd9osWPKznz7Uj5op",
  "key31": "3r6x62AK1aqqDfzD3wCYxKrM66LN7D9KfEws3E3foEaDJqKFoBCnbgWNXTdL5ZHgsUmNbaUngUWzfoHn4FPnphse",
  "key32": "5ZYiqp9xGQ7eoM26pzg7Z28FyuqrSmyGpBcUuMoTTRUv6gw2txHK4Bn2xs9bAf1mE9twpLLwSjQVWt67GU5SNghZ",
  "key33": "2HmKPA4pBZ3QBYmewwfyfcKbAcb5MMjWmgBb71V5t7tf4P27FgNmrcfdXHNnWnDJ6je59rjkGmiVP4Pgdnj5BCKx",
  "key34": "4NWXY6pR6LxsJXKna9ujS82K4RKfMUa8N1JRiBP4bJ3dA8EvowbuMgcCqVbgbrCTrDayhcj4ykbAcyqXET8oZPAx",
  "key35": "2vCoSXX9YcqW9fdTp3v7NnuurwuQEqLpVdG5hqgiwCPZNfXMMjWtifUU3qAekrrLgQDw4Cj3CNzuznPS6zGMyRo4",
  "key36": "5TBg48t7KQPuTsTWZ6ewvAFkzwpFwPzhruFxLiGLTYgyaW5LocYZxLSLhrcZmHnTk6fcoM8hZM2McEBnbfP6i5Hf",
  "key37": "2gKMmJCJ74ms23PLFZB8eXKBVCrUZmXPudc4UKm9yjujbHoA17jZhqyEJq579QCSsz6uRfK7sPGfV1jaN9quefcA",
  "key38": "5XfuwaLXmHMkt1WmVmJzGseKGsNqBjGwJFjaHUaQcJMnFm5ZNaZq5a2JdDbebzbSwzytx4xGTbFgVqn5dvuS7k5v",
  "key39": "3H6MviNnHjCodLPEUJrxEtVRQWSXe2YSv4Apf78F1T5YqMhZSuHpC2nfVwjo9QFEkXyCn8NnLtHHKVrwk5hLbJAs"
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

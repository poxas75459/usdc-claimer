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
    "3xZH68skMxVU8YQPehW6yhebiZq88mr7vsxrv7miPGNJMR7KC4WJuYAFXJGjJ1Z6qjfoZ7v5qGWNmbN5FmZzUWUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjQqQfhLNzT6rrEb3ipEMgVsNzJjsEtZdefNAx6qXARY31hFcqh4GEG8MXnc8M14aa4QPWtHgSe7F8HtdLMxCG2",
  "key1": "2xZVU3C2L4t1otZLctQPBDiwEtSc1L2fmbg2YPCphW2zAp12PemVXyMBnW1UufMw3ygCCN9CBc87DKdCA4EqRhJn",
  "key2": "2nrcamVjf3gpfRRSMa5vnLwpUfdmvPq33v6sizHeRV96C5XRuY37beRLZXzyp41R8gTk9Aar8sJRFmM3rnfvN21e",
  "key3": "5fM2yDsZF3HtadsQU9Jk2juPFz2ozgddxNqazC1BYVkkLd8dTdwfVUvEyqTtnXGJDmzzMtqr7CeCQLz5yytbimcM",
  "key4": "3iXYQ7UdJRQyBD6x3HU4qwepxn3MLC1deg4yx7zTCJUFY4hbBJmRmg4zXH9ZsBRLLuqcLhKXkrHj13XSg3UDT3DM",
  "key5": "37seHRFUUGRPxaYJjfutPPagJSWPb9jQwUKD5fGgFhhe2y9a2CUL9hJaGRc51qQUbB63keduvFmXcTC2W76swhaZ",
  "key6": "48jYdKFNf5oZgUPGNh9J3zPYCJf9VYK6t9ub2LqcCroCt9YgzTYHoYsNnsfcUDTeVUC1tM9unwnphRvypycj8Fq4",
  "key7": "2G5eNdLktwTBroFYSMW6MYQBScnrcBW3totG93xM2YGPY57NwxrZADGaZjuWTzwvGL6txmWx1DvLAUtHp8UxD5h2",
  "key8": "3xw5mKAtnGyPxu4odFBaHymTo2BWVQZZtYZ7bNoFKhXskF9eF1HLhAaCaf4T4bRYwPnrCyAdJPtuX3kisEEf65Bc",
  "key9": "333EpNGpbSsmn5ujjn5sFsEfHz5BKmEXsmyxjtZAAK18gHFCchhCd5b9CXkphPdNNhGoYZ6q8k59e9WU6oZ17yKr",
  "key10": "5uycxUVHDXN9gkzjoLveRxJmiuyzFFds2ubwCoWgMUd1WaroxSPx3gNNG8Vr4pHtZMVDqQD8FBMRHJ2xfPuZczWN",
  "key11": "3ULzTiZEs989m9h5d66gk5xyCLrPQYXocf42W9w4VosQuNcS3LBbHHYowhXcZ6sNbcQG1czLKXKnzWDaMQ45wrah",
  "key12": "4FvqgM6gcLEikuJzXhvEbrVsqKMk3kRATwsggMYBzELNSNfmKEwzP1kkJui7JUKX4vY4qiAtgChVmMuCUR3KvCfX",
  "key13": "5bSVznY1n4ko8bLVnrTZCEMzV5TC7WaUtxLSZooTyfmBAH9Y9JLRBsJBwV2p1Mawm7mXJ17LEpL8tYcshLNAxpc",
  "key14": "4Ue2RnkQMxWDZTXsaELPyGi4Xrqs5z4hRZ9jw9dv17Zez7LuxSZMFEsCFt1CqZESDnS2k3rPjLbG5Kw4m8MeujNU",
  "key15": "5Yy8kLPnM3ypv8ZRhpMrQvGDgVa7cGN6RQbbFFiyrXThYjpNd9xJdzJfNHQbgN1yGk6NH9816f3ukDhQ1NDFHfXj",
  "key16": "2KWDkrpAjdw3djV2PeaRiyNpdcMgKTxFREaLzM9wCMF1c4GZ7yHBfqMoku1D6p8Q5D21xFBmg5oNMj4P33WjLhfG",
  "key17": "38XV8fisietyiEQpDWZ6pU1p7XrzeMM5sL3epnevZ5uSvYpGrej3Ggk3PqvDMMN88E6rhZJfEi7gvTETHjvsA9Co",
  "key18": "3p6Yh1woSvF2yvXaez1auXGhGfMUWC41ixfPwM9w5hppMfgP6dXwdQXc72SdWRRNxHrCgqJTY9goXS1cCSeQ7Wqm",
  "key19": "3FEhfGU2zqnbGQANmUud1WVxxUfR9A29zn1PCYxD1PTPpWZP56bqQqiaxq39URfTVCkGfduqtka1G6D5khaooqDY",
  "key20": "3rEc3Zges9GDfsAy2tAn4Scq4uNoKKHVDWp6avQdhWgeFGQ2E2KV8A3Fb5QPRezqcemhqZkPkjrCqyWTb7nxg9aR",
  "key21": "6gt2VNNPTAPWvRoWsVj7usZZcCbHRu9qDt7FfPfDm1AMCJESVPUdDRL5WWuJiFAS8NAiraqS4GWgv5NNZAekiCj",
  "key22": "4eBWcN573yyiwsuftJmh4Hpyg1hwxFxraKMSJtZ1J4gYoMcDAM7axTRdfZLFf1FecNQaFvWSBJkvQKqVt39oNkgf",
  "key23": "yYXgZauM6HmPAgfVBfVVEDDm7vQQzEcmzzA1d7saQCGFrqQm1rStA8FbtDGf2X4kY3ddxX68TjWZ7TbHLyEXRcp",
  "key24": "4bhBYsXmiMRWmj989J6kWbPshBqKpu2CGp1UVx7KCedxBBYM7ASjg9KVWm6DLQsffmECQgKNFSYNcgwrZQVwXP18",
  "key25": "4nVJfWGyu7s4WUzirGURJ8oNb79KFJoydYY5yUWLGuDFQqLnUyoFv5udKEk6MFXszoWtgtawKTMhYSr8pnDcYdHd",
  "key26": "22UXv1jYVbM991vUhpfrkFQrXv4SgYsLoMJJj8eaiFjr57QMUCGUSatAovmWERnJMU18z2x2MmAeiUmkWF28TvsS",
  "key27": "2EMz8YE19SHHsWH2Y6NhNoBEztNAp5BvSGpYDhC6ASWuTGjbrmmXvJmVNyfWJ7SgpEtWxjpLBLCVUt3P5Pj3d61m",
  "key28": "2SPjghCpXSQLypLFWxXEPNfFYQHq5d6M5yZUgQkJmMa1e8vZdq3HzVz8snddxwFh6WaGcdGDZcfKnzHhTNxeSZyG",
  "key29": "3LBcamRZ7cEe91HCU43zREryEigTBdaXLSKbABU3kK9HUE52GRSe1ScZViepqpdqdaAoTpu7wndJa13db5xEZBPj",
  "key30": "3842AgFAU7RdNvHgRewf5fo8rMNvcZfVLeWrRENEja67bTXhe7A1D1FqEK9mChNw1ebBKUVMnLqFSebh5xeoSyJv",
  "key31": "fdRhXF6m3CZEiuZXuMgtwVXLtuda99S1Wk7L3o4ghun7odJYBBRidiWSmiwHBvPkF5u2hhsmjUmp49h9GU5N6h3",
  "key32": "CUr1oqRhtDw8knTfocSfuC3JwApm53dBqeLsXGGnj4tSh4UsYVoVLoBMT7t47LHUqRfUJWwRZtNygPUgqsYBcXx",
  "key33": "2kK96hK8LWV4LQbtFxRiUKjC7CR497KEVcFihvwvqKC4RxYGk2T17fJzwkqN45XcnwBQY66JmsCq5sbCHdVgPis8",
  "key34": "4Pe5uBC9P2hSs14BEveT4EChQFUJX34LUyz85cLXrByno7zYMxBYRAWcskuxutiM2jEwBMBM5KYymPCZDWREfpDi",
  "key35": "45zcJhvSxAVNYsrJmzP2qTp6WeDE2CZmdW1hfLeL77CS7h8jkyQoLXSZxRRozK7k2VhspFRyKdNVYTU8Fr2mZEeY"
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

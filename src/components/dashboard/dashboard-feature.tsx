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
    "2prsZLUqKGUP6fNKXA5bGbiCjVTCndoNZinMaVoPYuPgHHruw2xyMt8jiDjQNgwkiE9nw1kJSDQ2iPjumDnrtyev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KrYoU9pvQMtu8hv2vc7NMF86sQnS27TgaTAC1TkzvkKkZ821cu6Bc87oDNkcyy2KZRsduS4ns7tRsNVEkoptgMw",
  "key1": "2rY5CEdQPJmdTEhHokgkLEQz1GJutixr1FSS5cxMfQpbuinvyhtR6axbPNdZwQvW8R1zMcBEUkXBH5MyNPasfQNB",
  "key2": "3Wmsqy3VnZn47nuJLjfLzSSrxorMQNe4XCE78Z5Xop8ZZrqWdFJmpSthVdCD1EnqyZT9NKbqK3RXQiQbwXW1WmMN",
  "key3": "2RTzaLGh6ZNXkQwiMxit1Epwp5MqSW635wxU8svv8MH7y9SD1r2KqW92Qpb4fubsYZzPSVph9PfWJJDstet5VXFf",
  "key4": "3ycHkRKeUjnZNBUTzfPbtQo8X8jJ2qezZ7efqfVe4hmNqPnt7kXd7V3Strz6m6v8bJkcLYZHc5FkykfLYt54oSww",
  "key5": "2LR3Ns9dndmPqpJiFzEsKzdaodyvhXgw2EzBVizRrJ43gZn6tHewppTHWDRJrdJ8AGfjDb4rtscgSEPg3KMScBSK",
  "key6": "FTCQRV4acDtTjtDqtA9seP4c5TYP8skBz1721WbFwuXxznFrdMiWeQ9j4sYaYywRHkFLziVeSM4wiA7W5sTKfGw",
  "key7": "4EmdwDEkubP39jTMqrSAjwMHXdowjKSuRz9YqS1wzexhfTkepdUQdWu6WHDJfdaijaoC92nnFw8kAHuFm1RMpLiW",
  "key8": "28ijpTR52jYU24vr5SLYufmY4yd79Ahf8UhEQ8JdLaGQUSkcuNTJzYKQ3gnzginfcDiqcZwsC5p1QWPQiGKy34Dr",
  "key9": "g9TfaY3nmZeNifc2oGhf2aGTkk9jv2eyeDTgn6aybHgVsxoaLVBQcwjF9Dm8vgNmwCyCBUVjq6s8NpjS9F4ipJw",
  "key10": "4UJ8ZC2T3YjdkouHn3boqbc8Ur7feBGgVbWyqCGhEejT7XghrjiBiXpjVfdkKHuu1Fnm4HaWZV6YKzLzg1x6Ghfg",
  "key11": "128nMQfWmqHC9XCiBZ9sx2LW7y3JCwYbcoECjQfjyXamR523YDe17iFmvxHbpMWD2s2YKY3j9auM9GQD4hmBjvD7",
  "key12": "4Vb1qQVDuvvBrpqG7vHtu7hb6jV42MEXMTxz5qakKezxFv8Zt9jjX53myByTLLzfGosrhg3npVRjNuyyvDm2d97e",
  "key13": "3r73o86EmCZZDszr1PDaXZJqhGpicfU9YMQ8oU8iKa6PcF6bvrvZTHAh72Zvq1ivEjzCXNqHcngaR2aXky1TzqJR",
  "key14": "pZDYDDH3EnU22ZMXtAcA24qvzrzVS1xMYiLECo4x5et1dgVkXWmaxWSBgSQKDCFhPSaR34AgAz4hKWcC9rbzeyG",
  "key15": "4uiSn4CoRLWin7q4Wno4HPtD3fph9NenGxHT4ZBuaYsQZA1R6R8zcVv16bbJPHRS4Umf27D8W7cFixkYoq5qKeUn",
  "key16": "TB3dqA1EMdRg7dnwpiERGg97nrDQuSALyrHZig8BJDRkRpx9TnzEQGWXTYSDTYJpe7pCkpavjtqqRdfpYyV5seW",
  "key17": "3ZFq8F8B2wDyEH2a6g8XkyDWqPG1GJBVbT75cACBzB54NP14MHAE26qHbBiuaQdARXTWrYfeWgUG3souCBmLx7Rr",
  "key18": "5e59wT11V5SDdFFsWiMo4dWYJseizM79tXF9sYHs8b848iD535a6bjSTiDQD7CAjgEPAZF2LSbKKkVF75iTKHg1w",
  "key19": "56bFBYrkuFrERhJf2ezM9YuLyYxQhpaF36ixRNu1mQ6KhRF9B7fVV6x1RQvbNrrpKNmLVntG5z7Q5GvKgJxNLZyq",
  "key20": "2YDPwnfC3Tu7r9ZeYsHDh6NyPTBey44TqaAZtz3byw8SAh59PJrNUQaGVeDxBEz46sDW7KGUvuifbMUhbovzGYa7",
  "key21": "5ZLX7io55cLK3tjaxxuJUHbThSmKp15zh4uQgx616R7xXoWPQds4EgQrUEgbSRzwqFtxRYApbB1UQHqgGiny5PAK",
  "key22": "4guRgJmBmbgzK2GVc4nn4gMB5onETYjEGBhm3sDQQA5rDzQWXgnjLzrf7fjFqEqyDfJuU4HCEzQ2dLuRs3F1MoMB",
  "key23": "2MVNc3pDAWTHvn2LyrYDTcrJpaPSg6zXJRvuoj1E67BqZDAMzAmWPJPdgdHczdEj15TxnttLdzun6qR1KVKE2FSS",
  "key24": "5kHRsBz43WZLYpQeXFzL4AseptDKMAxTVUsCmRHviHyQ7CqyGdvSkFFjgbDzHRoFsxVFfneYmpcdHbUSHkY41ywk",
  "key25": "4vUUSLq5WqFHCh4TJnMU7fRFJm24zwPkzzQYsFSYQtLqph4bKnXW1vmQM67b6Ewquo2WQWfFvfjRiW9Ln6U2GnMW",
  "key26": "5Q3SxRDa8fuwjUCNFSMf45DYaYaAd5X7UNQKMHhiqcDsRyDZhzMNdRFjwF9TDsngZD6Ko8sDbshYW4iXbMhLnnRg",
  "key27": "2RxbFyE6t75PbRWE5THC7V2oNY1Y6QfGb9qpMLffDd6LPYV9eWCCwDqdve8KVnA7fVsbn4UakMmDx3ststrwZRRZ",
  "key28": "3WftiRWrsYhSxXWhF6FwSHTApoPGHcvE9Qk1c919KqFnek7MuAWgSHTYbhxrZsSeMSFbvfBj9f33pLPbD2eUMyy3",
  "key29": "2oBDQjfTCE6rgDgWVpTEgU5UVFGpAYN26MGbMM1BcKTbmjXhuZXuqFY74YkpL1uZWgTGaCpBt1vfQLFHVkXGQ2GL",
  "key30": "1yK23s3du7JrJkxjNhkJZQF4A8k1vvJBZd28kMc8aXXQpgPMvnyH11E1dYr9boUcXRPnq9J5G38qP9x7z6SRetF",
  "key31": "47AufiXsTsMZHw8AuYuWCoVCYKzUgJa2zCEYvkC67z7dvw14oKRuUssmFKjRpvpLP3rjExXvYzszYmkrPusLwsuZ"
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

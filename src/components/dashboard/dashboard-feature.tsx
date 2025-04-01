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
    "4s2MP2j51yuDhyTTSVPY8RWNXHfEb86Bm122ZqWroyym1kgP2DE6z5p3a5BXU54bKxQsPBQfLWzzFn5FwpULGYTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgpFM65i7omMDEPT3b5Anty2NdJccEHvxM19XFucUvFDpsTVKMT5bDeoWc5rYNwhzvsMrUFgLC9jdfXrkiVJV5z",
  "key1": "3oS43MxPWpxpMfk3xEdqKKG53EyFyockcF5dsSm5JSuYhLCD4XS1rWEYPackc75n1KDz6VpYFHRfeip6929NeXgq",
  "key2": "3T5XjuUXJNmKtyBELniCeQY459peuzt5ahLwu7YvFSXDyMVugxervs69qfnwiXFGFfGdEJKLS1DTJTpiR5ZTZNDv",
  "key3": "2ueYnYf1cpTUCzQFYfo67t7KRGDDGJUW69hJDEXDXtXUTtynDZHqRhabrdVgmkxtXUHzwfzRM5eWYiYR1CMfnnQb",
  "key4": "3YGjVC3zPnWo5mbtr6Ga8H2w9655wXjPgbiUcmepua8syLHYQzWScQ4xNjX1sQvE6hpjLfUn7muSiHYSYmTPKSKD",
  "key5": "2ou8ovJDfGNzCNrGK8tshrRv8hUH8wCZw68idtfFpzgk4nUdHbkaKBec2oe5FAVrPjKjVPsgJaHgYGy9e8J1prNn",
  "key6": "2LcWf94hKW5sUMEbimUPcrD9cDLAXTydEL3SXt1Vt2EfeBvUWBijSQniSy6x6kYrMrKwMc8MGwRxx7DMkCRCMcUx",
  "key7": "nfTcEeYLVcpKKcYwC5zybKogBKUBeE7HCkk3ncyHHMAjTrRAToAChL5KBdvfo2tBKz8rXMbB3RvrH7eGazoD2Ap",
  "key8": "5w3rvaPhBbFu5uZpew5SvnCeQQhg8JmnoZ3KSKC76vhYHUPspH7UFPhJYbwR4Ziawm9sbCbmGE64NNgGo25DyiSn",
  "key9": "4eWiXr3oBxFqCf1bzXdauRhbEc3tyy9yZR35SDksixdfzcFfXZq5t3YnU8rCrgTKj5hQ69z2aYJT3k43VJXUENNQ",
  "key10": "228AimxyuVb7XPWN2hEgxiCM4aopY7PSFjQ4ZDvaL7UVJffJzZAEoYKUWsUdmtQj3rVb55hui8nj8AMV6pFSBHk3",
  "key11": "24CSu5zz3CoSaPYf26jtvyfab8qAisohVz9qa4vuoH7GNCMRmw3spDHkrn2vZu3MjumeQR6PGwfmzMT4zYGdmZky",
  "key12": "2Xw7wxAGtcvqP8mfj7CNZuMVGFPT7vcXvAvZWV8LZzJJd76h8fpq3RKmboDYytShRwJmBM55xtk359JnJLMfWhk7",
  "key13": "3XSd2iktH1K5FHF7iXd7pRBcocDBrdAN9KRC1LU4829EPxEEsUKKjWRWaoB57pHZyLB74ujejY4HqGJAodMiujBQ",
  "key14": "3NCZTikCDvQd6Wf5sXrQw5tciP8ESMtTq8vdK4tJ5sGgWxU7UUu7ppCVnA9rpnQPVQKcRuzbHPGPF31KRPjMLc9H",
  "key15": "5Uu2vuyh7BNmAM9WkSLRBDHUSfdLPpkxscuWsQnNZFLKJ1gaiGSJb7QHptwXWoDbFhjG6TnZPWN5tbPdV2uufGw9",
  "key16": "47qa1F3HuBHffTBSSYFWLfgSBhpYcUxmAJU9sqAobu9dS7WtcBuG39x6htA1c7GW6QvSGcSUFiuo1nwRdKz44KAk",
  "key17": "4bQLYWo6mVBvvAFaioMsc4ws4uVDqraUcSZcrvDaLNgeEMc82BVhhJtmmZQxrpX2kxhf8J7up83SbcRMLrHaU52V",
  "key18": "7ydegr4E2Ed5LR7bHLV2AFL47D9M1QHameMna2Q5UcTS9MXdgGooo9RqLXRduarHvwiStfFNxG8GKnXHpwKpAi8",
  "key19": "2vMGnYEXPhuho1UCSNSGVjakZkWmP42KewuH55vV5yYEYNGLMJinLnYCmUqRcdtVnHFNm2TrQw5FcBVMucgPiHZC",
  "key20": "2jmnho2vwCan75US8jA3g992vMCWEXoJnWAt9zm25RnVe8q7xoms44eNp5omYe8b8m2mgGJpoGsHDBrK98y5PjGf",
  "key21": "NVgyitJTkJhQAFdB5FyhFTaELsKFpoMeoTEApgLGT9i8Q25Bckd1Tv8SGjN1UpdmCYkJMLWQvJ8h1QntduzoMpe",
  "key22": "5WDtvQ9tTabQScMmy7VjAMxxpiMKNn4dvPgvE76CqhVbvUTMPn2enjmnEXFkUePC7zED3S2sfiEYhahELBU4hppU",
  "key23": "4PuLrh9VrwaphDJhBUiQdgHbKTAnmQhzDwWvbcj429RNS7PsiMVfFYJ2z3nMqedrmnZEzGK87htPygZCM6Aw8MQS",
  "key24": "u9CA9mrMx4hoGspkSCCiRA1CDMDUKaiW3kBmapp2D3uwEQ27DKzHQh7fMkvzpNnkdqgg8JZVVeHJ7VrXc8t12K9",
  "key25": "2Amt7SPJQXpNNiKzS5ysNwwW17J9v6ZjLncXXQ587ECEjJnfwczzUrNuDzmYM4F5cH9B4Me8k8XBfzQSgeZHkdhM",
  "key26": "3wzHS7bjhNgUnCYhZgePo6R9KSqDg42ZgK4iAYCbgpjRzF6BA9vTowd9gqfpk9JFN7ZszhSyZGewwZsrsYb2fACz",
  "key27": "3woMsgjn2Q5J8xELwunFirzxPGENiXwBqzeF23GfTL1Qu1AH6GJA2XHJRmHLnwv3ECcHGySa6xFvsygFJwcECneR",
  "key28": "LNsc6oUCzJJRQwyeRKXoCiMThw6t1tLCnwyp1GbYLETuMKJqquP5NgdfykbYyk8VtdW2RdDTSpsE2t1iPkCjooq"
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

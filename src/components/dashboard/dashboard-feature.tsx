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
    "2YEyCqWJQouESXzjide59u8c5rxNceVnJvKSbwW5EzWYBKdZgpRStsVmnzUcjmzaozbevaSTcBPRhVFyActc7DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DJN4tiD8Agm668TwcRi7HcmzwCdW38NnmEvsMQvprowRvAtmZLCGFbz5vJDytGMJp1go2F1junkWQvE79PWxUoi",
  "key1": "5jufjXki7rfvBMq9e1yndp5xRgyAv72WMHqbi5tSdYUTqGvpeQXb9ThwtTjzDBY6tyKWGmrtwtLFcyRVWDxAKfbX",
  "key2": "3W9iTTULMs212hMiRenzUrnADm86s3G3kBbc1MgnUMVmQSm4JmYA2ci6wpU1mxusXv4TNVqds37mYwHvm4m5fkBM",
  "key3": "2Vhk7araHAtwoZCiQEGqXHwu5mWYqDQzVUvZRsz3LazxUdW2eu2LWCbL5pLAXyRt3rD2mHJrKs3euRxosiPteZsM",
  "key4": "5HovCjhRzp77ve6W8vFZJUcYQCPpB8HFBtz6vHp1zAMsydd7ALUCZAYDgZAL8yL79HjmDsrQCjbfYH8cKreBh6Vq",
  "key5": "5kpQPHdaNkwSrSxZdfBri4mxya5EXe2pq7omV2EgsU26fAbYkq1kdAF4845AJQcuNzYKfLxTx9wduJ73rhBqx4E9",
  "key6": "3VXYzo9rwmXqUnoGFSWR2cAvrPe7G3dQxY7RvshumoMED8eEwCGZeyars7FskuweXH4m6jZn6Pzz8YbuSdM2yQ2J",
  "key7": "5YqJRcFKErNgh4X5qXXYwehfNeAEqRMfeYfVBpFtheRtt663fS7cQfWZ3ssWjoa9486wsFwswa5QN7yavc9y8h1z",
  "key8": "5nzBaKJVcDCcdXdqtQHoTvZa66kVMQEsxtoRY2APXSkjaFj1gij9yWvjKTzjw6Uc6686vbuHs2Ebzn2jYu6PzrRr",
  "key9": "zfndG1mqkeTPxn7dh2gkoLb8a97Y8ZPttjhzrQKv7hf85U5AGd1snENbsKfqtWAUoLvRzRftNZuudnnvyjdnDuK",
  "key10": "4HiS9efobDb9pNamYKErVfqDbWCzGm4P8GGrskc1kWBnPR32UfptCepR9QX9sWYkUwnUbAok7nboUB2UBo4CbneN",
  "key11": "5tBCQ1EkfJXVQuLuYnjvBaADjY6ATCnqueNpPGZEUnia5mEV8cJ46gtz6JDW8S6TQ1rYwc48t2rDsh1zKQYAZVYm",
  "key12": "35SeBLaG2DrLVB2o9YQ9arkVj4qTVNLAu19NoFddyMTZTKAtBYLtAoKyDyseqWddqtLbDs6Z8bUrRpX8qfvvhK7r",
  "key13": "jewvPFsqn6pxnT65yFRWyz4mrBT6yiVFeMw43Xfnzjf716Qac6P5SFSTufi64pZ615nWPGy5jXfMx2MCXTrwMmQ",
  "key14": "45btp4YNwmLCopu5VvCAPndUKHd5Fwvz3WxtToyx4Ta7GhaTeavT4qc54kGa9kMm2HcQ7TD3YBVYFsp1vsoRoEm2",
  "key15": "647TsW4FZRD4nRBJhX2HcjzJALUE2CzVycrwK99kXY78LrPsD5WBFXcW118bHBv8tQ8ZDUZTLxCURvYZPoaVm8oT",
  "key16": "2WwDHikbp8BfPzaUkJEEjjfhPapv4bqNaFxQbeJh4Uv9T8Smh9DaxwwabWEMasSa2ZK17XDQtggEDKchCE973knZ",
  "key17": "2mwWDc23xnY7G6bYX5F21wW4amLRto9Vrrr8rJpjsk9UgduG5G4DENc5nHbrS6kZa7zhVTAgkdxAT8nnSsZzY2fP",
  "key18": "5F1fG58eqmsjKAeTuBCtuRb2a45YTRb8NQTLgnFv174WQXufyDTJy4hsGiDLgS68mgTuMcKKQ6eRoeSXKdbGzCWw",
  "key19": "2YatrzDqqmrdkMnFhNjLNwFcT56ATsGicxY9gaXJzUrfNrqKrN1sMWZWkJURkYWqwQpqfjDhZw4rQLCFPbLTpaXT",
  "key20": "4wqPpRZL6kJhaPMXzfQ6vVTFu5gB4JbMtdujpySUJvrc6Ru8dEkohaHWtbZFNJeQB7jQJ4MHVxJmw4tbKUfXEQZH",
  "key21": "2EvJKYTogw99ezvvwLv278E3jK36DWU4j8fp6top8rvfJvdKqFQxUbN3NLS6q46hMfdn573DgWR3BQfb3EUYPrGN",
  "key22": "4gLur2vrP7unGeRFers8ivgWwYG1RuwmG7Sz6ycXsYqGPLHxiGvFfQq7dnALLPLoaGUi7aYx83wjMrQJYU3Z5Zax",
  "key23": "3NJX9nhjW89aF9p6gvTBn1eto63b4cA525Y2vT91nPbhZWXgfCRwGb9o6JDZyJz8HRsx3bFWvoc7f4FSV3DuaF8T",
  "key24": "2bY3eK8778pybR6CmrxRB4QD4Ur6jdEafLuR5uabiXrgdGvmCiJx4mamywriz2p4dZAaVv5iVVLtSN2ivmXuqgMC",
  "key25": "uAi882S6SoSDqoQAndFstb5yj4Mj5ZGb7X3A7zM45yzmKosNuXoNWHWpytcp5zQQ5AJFd1LfqN46aF7aSJXUmxA",
  "key26": "2DNG43pDdzckZxDiJQ82gdd3qG2u6d7MnUc47H5cvVXxSz1wcnMzKntvRrftxcgbeXFa1P9VdwJ7jU8ukWD8eHww",
  "key27": "5vyZmveiBdsDPzYSokPqo15auivGEEu14dipDpcuxM2KSZ7L68XDTqd1vTrM52vPx4xkdLGJ4Zf4GctpGyMWwRk8",
  "key28": "2DmMwmhSvEjQcFcLqDEe7wyzMMX6Ebda4a4YcTsEaij5V7Myz715nrhivvGwgcbnmk6et7YWCVDuK6CQbQ8NmzEk",
  "key29": "36iNbW5rgiXGjFBeDDMYjbSHsb3oQCMNrc1L5XPQf5EuDf1tsyUGeNdhhy1EQ7DmoUzMinF1iLQMHNPTxRNLQnuM",
  "key30": "42YDcjSCns2qNzt9vzYvRxpEFjBzbNEEzvXrBW3XH5BwMwjxWaoMWR62grguwAoTnYrjwHNMiv1XwVG7xT8eDhyR",
  "key31": "rd33sZYCJLzQk9HHYgEJtfbDNi11JidEA5eo6AmiWpFdeVDqnyqiWXW7BeGygSSKT7q1cKc5eLCXfGZyGQYS4DG",
  "key32": "4Jz7kB2syrcoMAWoL9faszxwd219qRxgo1dXtGCFB23YHcnvKmwk88pQh3mGxLRFjEFVWZ3QkR6UUHneh8fHj4Mq",
  "key33": "4gWr6C8e8scF4W4Ai9GBwDM74TWFicu9Us8wPtuvud82ZUX1xZfhRcA2u4YKAEXETt2hCktVnkRVTaZHjb4TRnEn",
  "key34": "5hdsEFaTmRVArtYevbnM1H69uZ2N8yuNXEhxSSvKGbG49WuBtDJUrS2bqLcmZYhLfpogJZK9FAASTDuspGer8PCc",
  "key35": "3frw4PDQhXYo7jn6jQYmQ3oYpjNFnwjRutsQLr9wgDeqyiGpRKZPXFA21vUqsAQFagn33tc8dMXTQkkUPz2jYEyS",
  "key36": "55PXGq5mW7LaLRDdjYSiTVjYyy5byB45oaKhfDm2AZ9JRyjYV7uhgGUi2af8igui4mVVymRHYM1zk5Y8F1BQ4wT1",
  "key37": "5yh8f6UUP9T3HUGpwjguG8Rdnd4a2jx3ys4QFveaLtTJWcxrxt1nET3kyxcScLBUAJW1Kqd5hfXRmZDaapEYw9aX",
  "key38": "3ouXdgKwHNgE3LQZp4a4oKe8MLxyS6idnDCxMJRakwW17xm3tfzf9csBroto3v8fCcaUmLS6ZWeBZZ8LXErZ7h4g",
  "key39": "3ah1a5b96JVZYXaLELHBMey4neLd2gdn1uDTQVwfdpSrDx3yi2bb6mPTk9cykDjieTkXu96L1KXyX4B1ePCW9naH"
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

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
    "2GbAMRe81tEP1acujC55We3Uhny68NxinT8FCBWggn5bsuz9oGyFfyGitXMW5EGT1QnV5CgUmfyHhYiTjAuha7Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFA8YTH29zr5rmSgTqqHSqkdcCpwDMzyx3KGscD2GCkyBgQ5AC7TQsqU6rxUcxbWscxEkxqEn48cwGdq3ruishq",
  "key1": "52wF1wcg2du6sJB51ZoPynZLxDTcn9k4r85SQYWdRXApQ9X6JQp2FruH28HDvU5BhB6ciA5uRjog8wmm4kLwnLKs",
  "key2": "2EZqb9jYkNoyLZRqmAMrmXgmtWBXmeDDVmDAegfdgnvW88ukmuZQ6bMhAeTZT2pr4HZGtdax4enwz47rs4sohkwB",
  "key3": "5gCPwNchbV4jp63UpkeXwbxGMHvEeBmT15MSqGmEkdSwXq8RiyF1zKLVmBJkpkV3o4rHd6eSCP3VmS6gwnKR3AJ4",
  "key4": "23EmNLRnfu8RGijcRQYeUBPyv3AdvpG4TVaWLrdNKtShmqCce5EWqZ3AKTuJSRZEP354njqsVFa5JZaKNykPv5DK",
  "key5": "2YffhzXHacQgyvGZYgsXHPjA1by1vT5A8XQEkUGM8YQXimYFQkrBYtZW6vyZfrVMr4G73t8fvfUCm1ASx5ZSqMJq",
  "key6": "3HMCQyciJC72JaMzSuQHAuYd1X4Tg1AmtKh2QT51KkS7bWicuTnzh1hufAcrEFkm9qPZuTG9tUWDQLNniModfU9F",
  "key7": "LZPcMDd5mPCFXFACe72e7YLyo7RpAz2DXeNp1VYuKHAgmt6t3p4iUike5LAZTyUXKpx6y7zhPBJaMgW9svg1zTo",
  "key8": "3qAHju4T7ksrZJm8XJxULDcKMD2uoRQpC1w3BFyNVhjyb9am7RFXxDyAB4Ssbs4EPTbFPtPjPLFtPPegmQ9PnLMC",
  "key9": "3FVUuvBQPFHBcdfnJ287qT873dhQYxDWwfoKXJFRx1AVVR4AVkUuUmDkHG8wrUoMYK5fYeRJDdzMxE18Tcg81pM",
  "key10": "21Pbfrs6gaEqETm557a3nL9fJsQBxdsC8kLkJ7WPx8pQtnmRVohM5xyT3Fs5g7iFePXWTB1JRwkxkR3LGeH6kAZ8",
  "key11": "yR6UopcA5tZnBbGzLvwYWbJuUJqNCrdxB8K8iBCaZvwrVEaqtxzcTuJe2aC6jH6aZpyGywLbkMe9niacrkzu8sV",
  "key12": "4vcxXJnGEcozK7J1pU6zu5PNXckFnNARuLe2iWJGuyBTfYAMcs5W1e98Dw6c5bPmyunDyfafNe6BL1oPb3E3rguV",
  "key13": "2HSaztFLbbm17zU26Egj34EsECQsn5DtLDZkfTuvxpJtbjQDaUTuLFmqM3VzjvtMvyhmbnmKRZR8jdWf4pJiYQxu",
  "key14": "4zmsSHRhhhiRbh42pDatAaExq5EkxmrEdZybxp9WfreDUpurPRQHjQkN8BnZSkPU5hsxFczAEBFVGTQ4f2ZLDd3Y",
  "key15": "4NtqASenvtqVjyv5akYM4uaQoBoK2Xy8hHzpNw4hFbs7CpBdxN9VCN43zsgdQitnrcdh6mqCaAUQjYZZytf4q1nr",
  "key16": "2tWWPqfZjvmoS6pmetquWP8BJf19oHCxcq7e8pDv4Z5a8CWF5MvuM9pDvAKkBzmz4NapMX99LUW1TcDsadNsZCGE",
  "key17": "3N9T1wXkMHui8JEjSvuYfZrWKyWsJQ29McFoiSudGt2M3Noy46qzG7RQQPvWwcqJGh1z5F4hbWqQ9YEBvaCdx3L4",
  "key18": "2bjwfaFpsMHTL4CfqPoyUgisfXawKHTZ9KWF7hfz7Vz16eSUzaxGxSjqMhvgh1GmhwmyKNWeFxDEWx1yhDuB2z64",
  "key19": "7AUxBrKVa3o9XKu4wpijyvLGTJiaCYTyzNCvEVC9bKAQ56s7BNrzFiYizzUXcTvLVVs4pkewHnRK1Q9B4sco28A",
  "key20": "5rUPKro2KdYLRhohyN2ytmReNMAUsgP6L49yfZZijy3HYqJp9aMpf8KMn12WnoWrKE37YczD7tNL324dsqwzEKch",
  "key21": "4PPZ3yfkdsgGx5thaico766XWKz51sc8LTDriPrtZxR8MAhpkSuG63X57LpRWNrYVTfG6rD1PC6NEQXwWby3hfsq",
  "key22": "5ys9m7QGvMD98mhx6iCv2aLLr3NvFHVzVni7GanHcXwp9iR532oq6TGzY1WrHT3Ajh9X6q9xeFwfJWBmLgyMZKaX",
  "key23": "W6JCvHAu8r8MM3hMAWGW6vfBC2pcqob6C24mZYAdM8A8A8dWuS6aky5EY3TpTyekQrf9UZXhAuNFZzt8SrMAx3P",
  "key24": "y7c4dgScqB9UJx5G8TsZ65CUFFD9U5eF7LfRsgeKkr1GYHEtrXheqLvZ7sVtWK9wEQURn9Npwmp2EfUjqznopEv",
  "key25": "2M3DxGTT3Ka6ZLvX3GVEA4CbfzkRQZpDnpbYHNSqzXV27ytaJC7KVSjRwEAR8PWFb3kGM4zGnJKGt88tDVvYAzxe",
  "key26": "54DzxXmD2JSAuS11ZS92Bh9dsMjfFSh2gaxayg8FnjmNCjFkdxfVQMSwwg5gwxTvtPQFHv4z4qW8X7984rpyzqz",
  "key27": "42M5GE9PVDaX94ctr8s4VuY47HNsUjKfwC11xq8uqdQSER1NjYFzP3AQep5DVp93LLNzJh2Hc5KuF9ZpZxQ7U3H4",
  "key28": "3kGTHAYburzVjPjTL5AaTUYefihdhNAjEC6q1hJS4VCDo4bm5WHRw25qd45KFZaQRvP61gqZQD6Vu4VoDdpUZxxe",
  "key29": "2wQF8fWwu9wcLFCdY5Lmr7Aa1C7r6Eq7A5e9FzfLyL5DcgqzYby22bt8m9jutTkaxsDK83DZnuGQBHK3tWanUru6",
  "key30": "2JBQxBRnf2U95eWZ9cffCTf6BAubfk3uNg9VyuhQZomHX5D4KPZR3mL8asfJueMdzeY4z8Dxn7Ye8ua1EQ4Gn9gT",
  "key31": "2jYjwMADD7cSQ6Y2Mm5bd9fJw2aJ1VbthDo3MrMMuuA53q2PchR713kaUHsQfr6mxfrvmP7s8q6UcPWQjcabVbUe",
  "key32": "2JKCQXHLZvRKn24Q8Jb6PDoBLqcf9JhbFQYBziLr8wsLf5dUVT8zRdfLa7gb4534VAuAAwD3xZXjzA9ssfYmzK94",
  "key33": "3jZngjv6FbUB76seF99D9J4ARLe3PEWksSHZonsYf4drRfDbpiEKFgjXcTMvvDMwcpYNdrU4cEchfNo6bZdTyt8p",
  "key34": "34kaXKRCkmyGuvpsMW6Pyotnqx9pJqsyCVZX1nQvN6xM7CXTGgqz4gRumbvRCNVToAdD55TLAsVauC87uLmsveAN",
  "key35": "RXKLYX53ut1P4gFBr41N89aphXpZQojKYWm2eKpaYTxf6msz2XJair6fhNJkaFZdsgTChVQH99tH6me3XN6Raoh",
  "key36": "rbyJUBQSwXRWYJosZr2GivSMY7LGH9QMzPhrU9wk5EstQdXat2ase3iXU81PzwZsSrhWXRVQRXmQntR5wWnpboA",
  "key37": "5Jvn8dPHqnRWr6kb555AAVFTxtBzShuHUGdvRnZovVTZbCMALsjXDFgRzQwmcGgpvAPfQEGap17cq42N1oWwJ12w",
  "key38": "4M8a7rm6BAkkm7w2eSFBAYw5MFrsyXxVSyuLi5Q5yXyqLkXRUWC78J5tHVXQgjpbxBRQa9eDQqKrdxt36TAs4m1d",
  "key39": "3BKTpARVeZjRVVhreeuEhQXw7pYU7QJ36AvvnFWo6L4Y4Cvf8fgeaDfaTvjPt5gzpxQptTHESUTsvRBgaZ2BUExB",
  "key40": "5281MX8zEhc1Zaj8hcdBBLZhyEUAgeife1Dq8tdKrQzR5khTQaqZzBKxtu2V8bi1xRRhYPuQZnhpUakVvigAMk5D"
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

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
    "3DNMarDsaPWyqtTsxdRr2VB1cdM1ZfUEC21Sqo4ietNFdkzbGcPYZ6G76qfr9LLyiLHfrDVGxLRww7iAZbuDnBTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5amw2gPFwq4DxUeLPyrN3MAfjXowQSTeZG8yAjyqHCCkomphRhtX762kSG8Z4TwCsS5bVXaQvh9ZkaZXWubihPSX",
  "key1": "2pf9ZQCaeXgxBcMXANTigLzBrS8afsDntYVsDZTAKCtG2fQVeXLxd8eh18oT3YsTkMXvsKLRv2T1nmLJh9eZ4FdB",
  "key2": "5ryZxqF9SRMAaTfWbQLck4Q2XSYhF8Lm6ogNBDc9i7AtGL15G7iVzthnVPpd7faMeakwxaQbD8c3BqHX8XguHtsR",
  "key3": "4j8oZrvTwcZYcLhYNtaT3QeRigszCaZxPrjZZnapx3dpprbGwx1V9GKsZB7DvPsVvSMtc6ep391Ezqm1Gr7g7hM3",
  "key4": "3YmFc97kCcHgJQxC2Kq3AVCWenBegxb1Ae1RonNDvQbDRpmABEhDdrvKQv9MvFC3yMSeD85ig38CvQpeTU4aYTfN",
  "key5": "3NbmtJfo1bq9gpn8QjncMY9gosQuaWNsViXveioTQwyu8CoWWJARDFJuMdYVsZp1XaZAghgNKYcKdgwKTk22Tpcb",
  "key6": "3t1BN3fGzhsX8JjvrDhXYFDm8GJhqe1fATrKHtZkz22hdDMENqNUNHyyzpbj5dPRPjhXhfCdfgsd45qzYh6wd51v",
  "key7": "4o7bzyXhERLfG68gAgpAQwbRmL3Ltf3TJGVcjPFBspMjNuwhUFoTExwrWhj7etknEzpShFZUCm3TBpN9MKNgtcBg",
  "key8": "kUvsYLQH476N8wSqf3o52jFrasRaQyBopmrdrjrEdX7SYMngTW25epVUvKrAaUU2Fq9ktHiqScHXdEy47c3gsRS",
  "key9": "5AfBbrAnvXNg9sLTpYtkXzQDBtaDQ6Banm5S4J26BJ6bqjweVG5RPF1tkBMWaGRd4zhPY4MtRs9qmZQ2KoRCXLie",
  "key10": "2BF3aCMWdiXNEa6s4kQQ1hDwgs3F8oWk5YYCVJp1mgTfHibyDLDhzVQYkiy4mUR1Shv4D3ciQnMVKDwZ4jZyrtP7",
  "key11": "E3ePPY67rZzKM4ynrQV7K37V7dGnch9Ha3ap6b9xN5MaFVdRWViRNNQoK8whZxxsBN9sejwVdvNXB5gpzFLB144",
  "key12": "5DNkoo6o5GphQdT5cBRFv17D4w5Q62YfvCavb8nsHPfsboDWT5wGTfc1u3bwELgXKC1VfuNKNrEpuWeAyPFp5aiA",
  "key13": "jHfCodgYbMCy4wWQ2zaZ8k8vNZUXA5P8rBpSyTxevCwKLeZrhveAGCxoM3VJpLMVVMNZV92AKNKxqN12pvTVErg",
  "key14": "29RnNnYPenXA1VgUFPTmkkCeJnn8SxjdUuLS33ydsmUscBysbk7DEUATnRnRXGHFGVHk712kAXAXgauGBdLXjMeK",
  "key15": "2NM7VFwy8RDRd9RtznEskGk3sftLLPB9QCQyPf3NfvBBQcE1qHqU5H1SQFyxcLarZRxGRBD3SHPkSEeZBG18YRqq",
  "key16": "4g5krGxQhv8vsErsMEWNHpnsN8phcuinAa6uxhtwucysVtzj9bWMMXmA1DnVgy5k9h5Zz6FLQVh68wup87bjZPrz",
  "key17": "2TdPhHJXFTDf13eeArBAwAeJc85hbXhVGCrYMFdvNQ98nWJ7z3igahcNR4C22jTHcY7YazZb4gwWLWVwHNnkMTm4",
  "key18": "23eNtTQZ4Co99LiABz3ETqEj6eWWeMfMuvKyzod8cL1XSDeWpAHHKav1ZxT9rMyKjvMMBprJDLcveJGmsagfbFcN",
  "key19": "58x9r9ZWYe1qaWYeGvhv9pMsVBhcFw3cxRc2JJQPRMWwFmYDkfPzTBgmHZyDtmQ4MhmE88sNpmYqJuPzEBNrciYm",
  "key20": "3ngva2bAxG7j2bAXeHwjds13mWwmuoTdWZYJqwnATwnMib1BfKAfEjYFZ3PpY3jVticeWkk69owmNbN1kKzA9wNL",
  "key21": "gQ6dnL3RjknJfhFqrfCEyGwCC1Ym9rhQunDVqTFELh2PPyg98bBBQcGHDmpmKTYW3Q6ZyRn8dRL7v7whB2Nsswp",
  "key22": "2hCMyBsmox8hJvS2FupV4ZjRY2wwQx9naDi3rUT7x6g138rLWcptZWQ1qAuNLm7Ytz94ikAkG85nq7LHRQ2tYrpw",
  "key23": "3wDRdqsumoLaUJy6gDceFNvC7WLNKj4R19hoKk6dggEWKCvw4qBvBL4iZBjTNWyWzTJLU74TvFqE6E6HDSSmJ3yQ",
  "key24": "4S5uQvBA3TSrtfy3hxoT9YiozSAz7KkDUUt9mJBkKyCRRSqYM3MCoenfbKTZmtWhPjzvPCEkJppUrEcQ7T9Z7Y5G",
  "key25": "2WfS5wRnVqsR9aUKJDFES8TCCQSZC4gouxcUVqstHMJc3EY7yvsNWHDevBtbpLLiWfAWaPGsasatCnAtvjnRPj75",
  "key26": "5dB2aPjZssH8817mKSZ7JxmtnbD8VL4AXKFHTVwwcQnapAq9dMGjivyA8uLrU4xEmM4VdhwB6BLm3ftDtZSr6hvj",
  "key27": "2ZrUyXAB2tokGLoEBQxrMbrxacpxF57pbZvisn7YRt6utT4J2ETUek9RjMbBvVshowCvvXUzY5M9NTkyYH7k756T",
  "key28": "3Jh215Re8wDmJPMUMdHdNrkFNk1Byz9e2g7HS2RHK8ay34JtXXtZEt5rkcBywa2mpTWET4Wywb2PG2pCT5RtcZXf",
  "key29": "4pXbnkdQpcPE5dubMTYj4j5niaeFGUD9cksXRMQKV1Z4QpEfCBdUp2wEQCdVbnYJNZagcDqrRcTzsBxfVYX1nFpU",
  "key30": "4axnwMFdyDWRKUvNY2mPSnk2BBuegZfm2w9VnS4cAFkU8WnAby5dmwQeqMtoaMY86rS5MRKA6fHRERs86Mb9RU6p",
  "key31": "5xkP2tvoxi3nBHwD7agjYFP1c6CStpxHBe8yNyXYQxPwGaLaiZNorHGEKHXrRhCgokiscTYbjfLeRNSDMWzMcQzx",
  "key32": "3tbWb5xPY4BE9KNvGnbefLwFL7K6kMJmKUh9atDmvy2U495mkFFJMnjWLTwtTtB611VeHRz819WUiBaj5hJKc4eq",
  "key33": "2NnL9rZDLfocpkCpe9mWdG9sDKxFFpr5JLPAikabkwZbLYeCNJBX5gpH7kveadyu7q7oF7bHvpufo39iHPf5jrzS",
  "key34": "jxf6SzsSgTG1vtBAfPn3UbKP89j4PovMuM5SSUiJkC9BXyvCHCQUxq19rpbaWCocG8Duy2DpCxwJhkfJRyuQiPD",
  "key35": "4cSWvQeD5H4VMgLxCXLpAcgZX7CWpqyYtuPBE8EvPYekrcyMhmWmYTXewF1nHA2hJtopVw6mNf2JQM1DThX4RGoL",
  "key36": "4zg3SDg5JEgia8EyqCM8Mfshhff531TjsiTVyjEJJ9pW6ARYS2xu1ahpHwYJJvAsMmfUWV6ReUhKrfHAZz5jqHZx"
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

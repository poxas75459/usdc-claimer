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
    "2QQhZkQMEDKc4pYcxStGTBg8MeTHeQaYTQA87kRDA9D6nKmTFRbrqtZ84woEkxcTane2TwY9odj566FH9vPMmSuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHxbvKAJz6uN8g4e5gLG8L2CiMBQcoatg1YNnJyCsvv3zHo8879wTLWdj5KphetGzSDbSHGcn3rFs6UBL7QoFB9",
  "key1": "41p19Fddjfi1JacR5nijBNBy69Dy4GfHk9BbhgFQxgeY6hwH7zydcnHmRkXL1Qp9wfxqBcs5GrVeMuuEDVE7j2tw",
  "key2": "3F27HfvZJR6t1Z3kgv2N5gb5E5p7bAz7Vm1fyJZcK9YSqdQnM1VsMe7CNWMz8fvtjVaiBwyR3ESbn8Vn6wb5ZBES",
  "key3": "4h5DoXsU5NQkYxYJBnZiJcQ6uMvsdssvbmQSYv3kAh1q1P8AcjKCV32GhmDWzHnyebtjTNDFANvRv3y83AxpGLuU",
  "key4": "2RN8sXkmG5r9xugAqpEer98P1V1Lv3f5Q8akHE1pdpmVjUXg6128Y6HdkiuyCiM9gRMeaaDEQD78qSqDBqh37C5o",
  "key5": "4kmzLbhDrhLZifDkZ9sP9yaJkFFh7kJ2D5w6Nb9QjsURtfRYT6ziUNCiAz5Ze3aYQq1UHm6JYpuV3zRvRhxGasHv",
  "key6": "45BvmhBWWE5rjdj4J6kGin8dxyE4NHRynC6Pq6RSJA1qvxZXqLFWZ59ZQRNK75QocZshp6UFjEdjfzxFJ8EWdmj4",
  "key7": "K4LBwih1euNBp7gwKwjjYD2zTDRKBdJ9ed86MFdfBpYvCXrnmN18w4AfXAtR3mCBRfQgW3UjQUjeY5XmRnovxMJ",
  "key8": "5WKJRJpcSjcAMLfvUaN7ho37AjWRLJdBeWfUfVuqREo3FG772cAMYbMcwjF64ZUJ7Ubyf4aaMtZRGE2fV8cyxHEt",
  "key9": "4LqE1PP2BUoTzFgWFWLRcsAqnJdKkDKjwow7eNcNjJNAPvFFH56kvbucaSVtn2pnAZTVdxff1WdYPvz5pSLUQAMA",
  "key10": "4SUNGwrFjuAoiur3NaDeibkEG3sbkwTKbwU3ppNChVeJd8sszExmfwyoRP1PGiobf2Nm4QxvZ6zvNSTToLadZoBr",
  "key11": "4ht6pEUed2cFSGQwpr5qRqnvWngZ6ZAUBUfFZF8mCv4N4JnqGK78gctG6PjPrRgbMxY5Dfh4Rr1jPBGCJui6Cdyt",
  "key12": "26bJiuTRBVAcC8BuGc78X4WGg3zfE3aptkREo5V8ja854zDdVzD83bn7NXieZTVVLmuTqctjmBXPnr1EMVfBgKzF",
  "key13": "41JbaSGe1RNV3gbp2cct4pNThtWpWbBcxwKSd4vN88kwp113Gz29qad8piFFjSimGkd1LK2i5uau5SFZUpyJQuo5",
  "key14": "3ST5Y922MDwBqTpKRApFxffFTxvMa49x6eMsskJefubnf5wbsCbg1b7SPePHo49f5uiAuh4yWn41bfBu9jAZEYUL",
  "key15": "2PkQYSgmYV4cYj7efcNLT9FoCQKVvW5JmGuo7r3NkB9r5xivjMa4coeYiWMwGcgWH2zoRSVXFFLJzc5XK5Bu1ugW",
  "key16": "5rq8BsZ8gnx1NrGZ6SXjFpgf3fJYroXpZBBZVSg5UhGJLMWoCLqPHxqAMwbBEFL2UEMS7zF2w6Zacq9FDcwUfwnW",
  "key17": "7hpgwvbwQCAZEwyNXy2piXzsypi32StdRopN224aovKN9YrCd7JCrHhpSFCypXMJNKtMUAs9wdgTvKXb2XoVsdA",
  "key18": "3rAsr37UWFS8owADFKcVeGuNLG6miC1VX1G2xFSwBFo8KP3wG9aHXqMU3xrxgvgmy4jK5PK93RofDgRcjK63ZmiW",
  "key19": "2bKTw57XAb6M5ccetGzvfWEbrcFauhxRG3i5XVyJyumLmaqCSCCqnwMaPC8dnzRN7NyNkfhrAFLzDTkP45zKL897",
  "key20": "4Fhtxt7kavPAWNmyuQon1XkFEg6omfYeHzpy3sRdKAZmYoaVKkqYNyqQ6ASMskEaSp4j8pyW4Awj3FDSs5YAki1m",
  "key21": "2CNbY1xQQBuMHSVVsWhjkvjnbFoeS9HJ1SMt27525CuiLeDuuLxK41R4z29GjmZCiPDgAjmBDQt2yqv3rSwYMCB5",
  "key22": "evP9zxgPTkPAeuh4ss88KQnh4CgyCtivQZ7nMuTEJBJauY2etvSKaVeeQNG6Dz6CLcQP3sXr2rHEcYJDN5b9y4R",
  "key23": "4hPqZRJSBchZyVKbj8CeSUDF6xGJhWvi7MWjyyyVV5m8j6NqK7q94UNyzMSKYGZ8Do71YAepK8VNnqNGNYvvqHPX",
  "key24": "4ixUvhxMzGjvPHocB3H3jNNCLs1xs7rFNduqxQD1211hxEnAoLfEcDsDS4zCSh8uo12XH1T2C2ik4QBLBCYG3V76",
  "key25": "7oSsYjr7jmwPA6EpBWyniazt3Ww1V7yPm7QnMd4XEroZw3yqgAEAmzvJouJAa1pJwVgJa4o9DEqjPfCR9YeDZdi",
  "key26": "3Js5sCdVjj2krkKT8bq4aGj2HCMZhqNX3iFhsUeHcw6Ce8PrM34oriDYxWvoHquagGtGLDngj9yUKDxwPGzTqSfg",
  "key27": "5izVZW5tGw7fajHepmVjW2xBnB1H6Aa7qsBTq5AajawwtExtpVhXs5QqjQ9mvDMv8TjEatyxKWJ1SJsQihg1utmY",
  "key28": "3TCMWXMqN25bHfmcFNrC3jd7DTgeuRQZmCoMMkzFL8ycDsm38JafaPN7SqaJ8w8VL51nw2iikPABVswe3wx94v4t",
  "key29": "2Q3YCN2UzKrNTKa2axmrJ6mtTd72f7MFywvg1XRPyUbywrQ4Fp8uTcAS2WdtNmDhzbeen9XfuvT2gcme37Tyqrr9",
  "key30": "5muhijTbj36J76z7mzAgEhFrn7vESgfiB3k3LeYhsVnGqvc9TTPqystPKo4ivgfRde36RtNhAUP7torrcb5DHr8G",
  "key31": "4jG7aF414XGoHm2zfyj5kG39wUywHnmKsg9FWZuT7dXrXdLDhovVhS8rcjcFZ2Uco469xvKedD9eSDL4YZxUN1bJ",
  "key32": "yrrQ23tyPdd8i12mhYCWzfHynWLqzi5Cs8Fv38JwGUGCxzqrE2hT4B132PiG5q3rky4nBGEV4VrehYD9zLK4m4t",
  "key33": "4XhFNzi6rK61ZwuKHVYpUssLzGJGqofGCj7rT6CAh3NgWfrU2DGWN1XvX215qfjmSEStZTuJJBUUBa8gFDn6892E"
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

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
    "475FY3xDy9Bkxq3n65naYzBMciqiFTrQWECt4qH5TfRN65ScCooVHJ1aS7xdNBNw4pdHedpeq1WJVjP6u57Ai6g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKSZa8cyNaPHUhxUWzBcqDwQhWyN5nHdZYDSNoW8tzDoF4P5uaJcJAo41bpW4yYFdfm72m5a9Kecmie4Qjx8AgX",
  "key1": "bBtwLTA3a6ms2zURnAb7NFNNaTF3PM3dXbSdbnu91xBkxchrkdkhXtMjjX4nQZbke891anvN1bSnwCC2nKtfr6b",
  "key2": "3HLxcuACiAUVRAcbtwUHbqfXct6BEB32LW2oopKQyTTyE35tc4EAY43ZvZtDnhXvwrR62Kjn6DiAxq4SKXUg7abH",
  "key3": "4zecSv8df2n2znpvB7uXCcpLqogepuM3T5sWcH1vWc7qeeF8anu9nwwse36MVDoZCWTDgdJq5rSZ7StQ4bqw3Lyy",
  "key4": "56t6JztthZBVy65JcT9nXVgM5TwXnPgUXBhMyoreQvFUADoWueX2yQ5sptm79xdLiDucJgyhy3j5y268Pf3xe5rY",
  "key5": "5D15PtqtQiu4yvYSQHDzvtjMTLtGk1MfYmectrZ7eW9npLb99qzBLuAXA4eXrUzvZ19MQR3YciNA3k9D2gMGd8wA",
  "key6": "3mQ3tHrJanz8jZskuJG2vKGNPs59ZRpJjxogJ5Fs1wTwq4prNBoocZspyoZWrh53JsdCdpstU3Q6Z3XRv7UGg3vP",
  "key7": "5yZFemk7V7q2kLWmfUEQQJcts5mjfwVhd4bbaWxuM4jRwN6wjQTPcv6rRMnQea9Zxp8kA4ig8miy2WNXjtfRgWZ2",
  "key8": "2Q2iG9mGmTutW4p5gyCZotjFUwwTfoQvPZieYcmfvvHQN18mEQ8aFJS1js7eYRfbVj5qtxSNvwK4Jn453TrrCc8t",
  "key9": "HBY2nKinnZqko6hJQJf3ud47z3N9o6ngXtToSGEARs5BNnLBoMTE26MUt3fS1M5p8YhGyWHpAV2BgUUavCJSmzt",
  "key10": "4RDSV8rEegehMnM4T1SLRx64Afp3RYoSiquuWEbTGq3HdRRuTrsnFC9aWJCWN9iM4xCbfHSTEtibj4MYrPfrugi6",
  "key11": "52f1RCRXLaMERijSboU6wupunVJ8MHArkAhA9yKmQuwHvhm1vxCwGmaBDeR5pSCG6TeSg1mbpsWLy8qm4PoAbDzC",
  "key12": "5PvY1VtTy8n6zQSshxkxNzezbFeY1i5knSuWWdr89enaAGQSJUoF3ZXD7SivVgphLnkhfH7oyPeNfXAay7nR1xus",
  "key13": "2i9FWPGTJq3Zx8kQBdvM4EjHnxAiSypHHPuJ2imzdNF5V62FYf22M2BFE6cEf3Q37B9nynPK3uS3pk2v9DKBpFKE",
  "key14": "38bYrtNjMhskEXGGDrWNSwRdxPMG9A4WVCeZVrA9db2cwZ9wok8SBnpTzN8xvnnDbVGbietD2EzxEf1MXTLPT6Go",
  "key15": "5gQfYmsbsqw2Za91386mSADtqb2nB8j2Afj5ph2Z1BjbrxXVPdneYTVcX9ywiCxvZFiJGD8hECXQC5trkYDtvU2j",
  "key16": "26GdCnK5wpyP1nFfMywnD31uTy61oxCkcEFjSxgh8KyZAC1sTZ1jj7yforRfumn5t1i5BST89JhtsLM85rub4cwU",
  "key17": "2UtHV2yQHssRaBHm8c61JVTRASZppCrqor1u46zq97LZ7qjBMfdaEDBepJjHz2R9RFvnZocToig5wpQSzS4tgKnw",
  "key18": "2gz1rzd4X2xqHoTTEyjKEgfEuix6cokUfVMRzxgT19Fa1oYpsDncRU6spNePxrZZRDhKDKiCum8auqHknS6R8pd7",
  "key19": "66XkxtMkhX9Q5e6Naw3VLzuTYZfaf3E4v2M1ygjKYqSKBPUds5as74CBdZYtERTWob6cAAbCJAVMZbxypC2JBUZy",
  "key20": "5UqiTL2Qw8AnSfwX43cgwTm1zNGYNz8RSraYGQ8PHkL9U1gwXMbf3FqhfA3wFjvB6u2Krf2mmYebRXjiDoqLvHJd",
  "key21": "2HAnSJ3b8kpbTBZMCBv4MYDvZMLebf5MStCeyamKxpF41WakwYUT6Xuad89x8WeL7YcuwKTgKcp2KhCou7RZysqb",
  "key22": "4N6WBin7TTFF4CKNrfeTn4yXTuq6fzCixb2moKU44XM73yB5CfeB11ZUqNiaPtw8LCUKzL1sAkQN2yuExurHHtXx",
  "key23": "4i74GR2spdsjJf96EPnH2EDY3EuxUEC6FRrMu2nmCxKSD9mNLLTP3UYvDro2Sad6ff9cqnKfUYo71oFTcffXsHfm",
  "key24": "3Xhj14DZR2PNGwogsCBfEFMe6mwHgGXPF5gt8Kf9qmD7i3oNjwNh38d5DRAJyXA5vcsTob8ow1JpXGTgRKVi2oZY",
  "key25": "4kwhPAJeiYbY9SHhbDMDLvBrMbR1Z7BEwX7DPdqjKSqg9qAwTWpmbxPGnTXzSSZ47h4JkGhNnuUpozMivANv7eCR",
  "key26": "5wBbUsLzzw5JR7VA2wLWF2AkxRAGxH5HXaH798x2aA1G3DYopr3E1TtaSZGJo5FEqBAi9iziJ7vAbiM5WBNSjRK8",
  "key27": "ueDPeeNYw9aiquUNgFMHNyr8e9x61U4YVb3TXaCkaCjcDB1bV211UvCS4RBKbRRS8csHiphEEPrrueUfZcaGLVV",
  "key28": "4eHqbA76b1kRZCbxFdgx6tu45qUKdFACE1WURPHqvdgJ3DFTatUyqWyJo6CFQXSrFScmm8E2KnXFgsQ2bXGq6BcY",
  "key29": "2kUma5m1BXTr3NEHPxXUa3nuDd5WEFDS2H4E4tVq9YAWc76SdqL6kRRxUST5JFyxtyNjQN9VEoQ3UNa7PWxr88vM",
  "key30": "2T71WZUAx6C7hevA9nfJXxd7AC4z5GAzQ5jKGYaSMRbgfueNBnNW5u846UBQ2Mwrn4oxtVtUP8f9ULjbwBjDrDBh",
  "key31": "351rFG3CbBbfccHddVJZTadqSvrE6WuFTvDdqPcQX1uKmBmBiigFPob37rCt9HypvnxRQY8LgSz2vXVEoM6tD7pr",
  "key32": "EoYMumbZZiKm32a9HP9MbSdDmatgtRzcKo6TXcUVb4PFh9JrASmxwLtGaXuukrw5TGqE13PgYrk7tJcBwRzBvaH",
  "key33": "4YRErR5XadTEaZkSqpZ2xwbYTaLe6V475p4Aps3JZfTNpFbdL6Bb85ZZ7dw8fWJKNBTPYnrdynGoWvYipP3uRtP",
  "key34": "X8LogEnrP7t55Jq45P8juwx1VkkTSXKtfyiD5CJoMxgLVDifPCKP6t2mZ6AFMzzUEPyxBAxhZaMDMupTRuhrNa4",
  "key35": "3hPaUHjf3KnSJxw3o7xcS9seRfnhe2MGkSuDWpdM7re91HgnN2Nxeqws2EJnp62EYXZYpMy7BowV28syC8vPuto4",
  "key36": "mhyAwfHG4ypB3R98WcabEWWTfwrryG8osJNDXLhioUjsAT4VM7eARYjoQcE1qV4wqNS9a7bgeJuRZnwwi7FaJUD",
  "key37": "2qxy2FrgUtNinrwd6uQD5bnAUVWmRZMomUGkCaGcSPjVW7TzxQ31UeYrkb3EQMWYHyeVZ7XEyV8smSobiVux8B7o",
  "key38": "5nJFCrKqPYjiGifb6444HbnuMyCdPTqPhpVkzENYuREiKNm3ZncbLxb9wH9FEJ2NsCdSCYcPn6CVyZHE1ffiikT6",
  "key39": "3yK58DMWqkYpZM7q8uqUM7rF1pmQn8mtNHihF5nH1hWdBDtzaPYzeWeEApZUdpguFonL2apcXvoYUvsvtgTRU23g",
  "key40": "2ZzjdT2EW8oH8SMwq534hUsZcdGs1Bx8L7Ydvp76exSUdBFLy4mGjvb1GRwhrVJqxa58sbHkHZM42RiGTkuN5Bu9",
  "key41": "ZmZBwMUB8BzwBmvLN8SE8DgCky9PCYNYiY17ZDzRMpGMLKwmZT4Tu3vWvnb1aZ57dHu5DigEbfNYjihqRCJ5NXS"
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

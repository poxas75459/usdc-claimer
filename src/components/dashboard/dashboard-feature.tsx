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
    "4BffzWfnGMyd4i8uJ3jw33hc2quvmm7x8rLdR2QBnQ3hupVcM7DRxkgmHwritqaGWHyDvNAN1K5PMaUH3MRLREsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKEJSBrmtkfqjhDM8wmiprSvbwwsCjF5KAp1GCaFBPH12GLk7WNDGEUfu65M7Aa5CBzKXreJQsYXvz26R1LzoBP",
  "key1": "28qMeKH1Nrd1wqrLm2Antu4v29nKTG97aSmcWn73pSeLCzeYPo8sfGPscoikRHLGSWdKM16SWXwSrU1Sg3TvPZCj",
  "key2": "2KnefcXsk1HA4Cdr1UbGmBMaJkU6i92ZN8sfCw3GSrKbSr8EbqpqoJmD1h6Q83ysZGD5Tya2KRa2A3AiHj7FXMLP",
  "key3": "5wF4F5uW2cR5MkMam12AB7Lmg9JS6AYFNUoudBjefRToDN6kAucggf5z1TkaoSFnDCXdbdsf6sfowX2eicHXYoJN",
  "key4": "FvwHKfJE8HSrHkNSTHFCzcPL9ViN5nKKY7BqzJ5BA63x3DaQRH9aavm1NnbyECdmxAmMqACAQBhAdjebUTQoDxk",
  "key5": "bckCk1CW5oYoA2LZkV56jveLMg2CF8AJE8ovduXZwutNjyfLTcW9iS7gC6myB6TSiWi3u1qxud6ZiEeoZKswWcu",
  "key6": "59GNYpF2choxgPmqkogbx2fJ4TjFiMpp8ZQRA48J2UHaUhzi9vM1CoC14E26jmgdUFzjbwXexwi414QjLXjatbrV",
  "key7": "2uyfkAsji4qAp7QLwmgVgoL36yd1a7BLeJKREYLfjut2pmcnc5HF7tBwmnrPoFokWYNwEe2cf5MN1pPunafv8bba",
  "key8": "1CEHh9weuCufPxganeoribfiLgMaNXPCjNopCDQfh8iYvPDWEbqEd47asfXsymi6UJTa9A4vHUBzRuJWq6atE3z",
  "key9": "geVWFmmtmJtYb7UADsz8jfptP2KpdJN1G9go57V1KoAdLKL35kymCzF2XZrHHRgyXoS2oxKQfPA4mfdBGRD2BA7",
  "key10": "3LpvRRCT2prKqsU8L4nPgwd5MBjBLupz6NvThQDaCsGXXkCrZwi647Tc4xFbDhFGeT5ABYVEcQjNqRTRc8FTRcBC",
  "key11": "4GYLdHxPBC2sJNi2h9eZyBa8bU9oXUqgcCiYSzXFXH3HsCRH5QPBxR3qtrfrv3EiqAjQkA6zq7rQ6L1t6mzVNesm",
  "key12": "3Y7dgt8V2RpWuAauxzVoMzCNAER6MYW5vwMXV1sVjzVv6AYWR9XszbyFesrF6wE8T75xrh1us9kD9a8dYGrTrfid",
  "key13": "6H3yskhfH1uuj6tspcraxWgUayGWXuor5rogAjmUUob58qi1V1uvsYx77AvSBPQHrN6ddiiTtiTdfSP1nDSWWgL",
  "key14": "51qzN4BA2zT3GsHUrMijw9xXwo4LoZsjyRiFWjmoAZ9Pwm7gKnp8oEYt8TGKiGrpSqks4ekUHAfEvtA4RuLYRUDj",
  "key15": "5uKg9DyamnMSmeBB386S5yTAySU4T8vc3PZUNarhc5D7bdAWd8jqt3j9zJTcb9Dhh5dDkVwa4bmPyf6zVx9MzMpB",
  "key16": "2k8qnKt8zGtHTSFvGDtN9wEaBDRXxXCX2Fd9Tx8SFWX8rXwVPotzX8tJb5VDBUY5D6pk5KKsMKkbb4tsqHCQCtuX",
  "key17": "2cprJFVPRQtrKqBbQXoMmiPccDyn11tGbkVbWhs59Df7vR1LuSAtwPsWAgn4hsp5Sjy3j8QHTcpviWKmLgD3urjX",
  "key18": "26ByWGoR9ssutTwm46X7wMoz49MbL67gXkczH97YxnXRRzVr4fatuKt6gZdx4RHJcHRTWhTHjYYKTagDxXBpTBBM",
  "key19": "42CSJcVpvbsgWQFzCZRw71uxUqfLYN7eWT1Y8P2spH3QCM62M9JJRP75YBN6kTxGfkCrgQw51Bwkg3r9vpmfLM5z",
  "key20": "TyCggu5hmakeDD1qwucfwjor3xPRC15qYSGsQ7uyE31JKmojpNgy3hdeon7rLjMpG6BBnnFkhrSAgJvWRyrnkzX",
  "key21": "4wYhzHnmcKF5bS6Ms9mduf8gMWXFf6xkBNj92EreUpQZztsATD7bsWqrd2qtdFohJk9W1vj48YszzkNHxE2TN9KA",
  "key22": "3xSctaZ7WxnkEoePweYd7gJZDaHc3CUG8MFRNBGYg5RbwvgmCYCjvkh9yyRJD3KcamosSb7HF8BHuzt3WBPRyNLv",
  "key23": "FGqJfVy3PceXepdTjD3VAKQMEFmmM2xLE2KisvEpe7SEwcS72dL9EqujN4whGNBhnnwZHYnVy3jNvqy8wFAvUMv",
  "key24": "5YALvNYczwtdABDUU5bwJxZMSFLT7jbhsWNRX6vrT43x12EqcMoVhTY6omypVHeAHWCqayoMvoJvEtq5MGVgZFyc",
  "key25": "MvzhGD4xjwGvMFHSY4fzBaNdf7RSyQdXFbc4rm5vhvZDSD9H8vUdvdsbt2S8JmzG91uJAeNiCQa4RbUheUVxAgD",
  "key26": "3zj7QJn6SE2TVzJbFSzJAR8tSpR5yUw5dWHDCjteNx1YQVhppQsVMzJybxUUUnLMdaNxSiMkvLi1HBonRHBdHQ4E",
  "key27": "zDpEvbNcozcupZo2xvLaeR79DF4dnuFwaUbv23aL245fjNiJQXA2er273hPgWSBuv82Y2GnENEkykbuhjKubvFJ",
  "key28": "63ood4ZJUbaxDoZHGFdKqbNzQsVx6vsce12bycg5tzwG5rLizZtQ6ZNJ1xu25pZBtraEw2eCCfAiCTwea2Y4qxnB",
  "key29": "4atGTN2uPrcTp6k5pDZKhLx1W31Scdv6nMJAUoSpkv2Y74WmV8E7xRGnDEWzicUgYtaB74LLp6ydwbtECaUXVv6b",
  "key30": "3TiYJxLbhniszqiCs8SYTmef76zoKdTnwEjisQwG8Vfk58fGHkzunbvywyM4bWqv822vK6Le7EXYbjPDYkZLUb7z",
  "key31": "4xRBpUwDaFZ5UG9bgb4vZHw1FThE8u8CRfSFybmkfEPrcZC3kt9XhZEF3QKSFacD9H8hcwF4yukV2P5iDFaA6jwu",
  "key32": "2yBwEqgeDVsJxa7DNRaJnsqnVkSRe3NS4JF5aDXKp5hDjMQFoyxzevQMGPb8yyqmfi91YgGgK45BLgFbZtuA2J84",
  "key33": "3ByPsAHgNvgc2UfG5dvYjkFusYpK3CuP42VBiUZZJwFfF4X6USMTXuQqkMqpL7fpXuHvt4r4evNTUWHZQJnyyLZc",
  "key34": "4hdd4cK23XqKzyopbbTsAgqqJJHThVkxauuYLn3ptGzTYXaYJz7sB1AXYy3PsrYkQSGR9172wab2bARNfpb1qeTk",
  "key35": "3VT3LQYoAs9SC7kqnXcutQB5SV9dF9sBTpkhjfbXiFDyf5TMSR4pafZr9a4nXQ8Hq9iYMiy3dPVKeyWESacmU3sM",
  "key36": "2CCQmzyAazBpPk4be7k58GXMtXyTXWupcjm5qagkqDEZyZRiSszPFhpaWSiGvDQMgWCMoxdH6Cv4XP4WHbT1mwYU",
  "key37": "66tgd6dPXg5g1ihLfFVdZ9RjGBo4fhhuUZ6qNFrBWhsak1ZzNWbMYqrb7fQB2m3v61UhdtzdRSD6mS5iURaH5Hf6"
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

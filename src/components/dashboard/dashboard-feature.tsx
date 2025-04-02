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
    "3AtjSXSLRrwfZgReTBpsjHKtPGCe6ZknxNTvKvahugS7uxfrVMad5cSjfGP5bpzPtgHmvXaHFE1v3kAMdeHhP3k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CsN2WwbZ1mdymHFKpe1Mf9r2Ea3EVCDdgXHBxZfBKZ2snCDzauLsHthTEdzhSqACkt2Xkw8DeFf3sNsMhRo67Qs",
  "key1": "5ukArAfoPQd7AJ7VqZ4pSyWpoTHbcCtfkN5ELYTntfS2B56gP8X4nfD1aqQaQ2tyYLBn9oUvBVnNB9k9Lg52N2Qm",
  "key2": "1LQHHeRvscyzLxCrQ4VkS8512RTh4VGCfpq1CyomWXk2Lo8GY2cmq8bwcMdokwgwSxVsmwTRSJwzmLiMcvnk1eP",
  "key3": "2mqxhZg8sh2wucTcSdFASp9xTw5R7MWLM2j5fRzwe3yfg8p2gF5St499LnxJUtdaSuozGHwpZFdjpEpWhc3vQ1W3",
  "key4": "5MTh3XDRGToA3xkUrPUP1gHuw1m1CuimbiXoTXwK6LPdgiaX8DSFcijrVYXxUgJLcMpNYR1Wm4BXJJMFkhzmp1Fj",
  "key5": "sfgD7p7z7erSL3qCu8WFT9X36gKbc3K4MuW8QoKT1SvNaGSzuCuC6UiWwwMbebN6Dfqa2RXkBEHrukio2z3uY9V",
  "key6": "4cNTL92n6SSCnNKzSFpRL8r7Ab4ovrd6SuxLqCvKFNau9idW2xScXJaZkyP4qBgEAF8R4rLS5j4BpYybRCL63o66",
  "key7": "3CeWLRJGVts4gkWUbDLLrmCypvMLbd8sThxY597msSdy92NDkE5bfsPVDsMK96vrtkFVaQqjHLRBHQVPrenFijon",
  "key8": "2wD4r9FRY2wKxcFfK9pQ1eZui91d8fjLHxvRhFx6iD9SrXk1YqUZP8i4ZqB1YHj6NjtipYVbEg5br1k96J66ZTv2",
  "key9": "2PNnCu8JUgAkrMJc7ikGkt3MrAuAGugGuphG6YcaNq2tb4qxRT32m1zbCGbgrjfk9o7F8N4udKnrNMBUFNCeC6Wn",
  "key10": "3dqXk4BpWDZYsunu6YbabHusQ38exrwp7V54dBHoQBieNsvX1UxFqK9G1F6paDiin1QNXuAinAKhD8e6V9XUaxvQ",
  "key11": "gJXM5rkwEhqHEJCWofYLxBrz4pUrDAQE4ctGmS8mcVS2RsB89GfQTT1r5fAg56hstng9daCgFazQyPMckz9JBKC",
  "key12": "4Ei99SdcnwBbgBdaLHPw3RxRGu8r6iXm4gG1om5P1FPN7t4tbGB7voxFQP2Nt59ZvrMDYVdepKRAMtdtwfixX2Kg",
  "key13": "2TAfNp6F5c1jS9jaFqxM3a5jYzWacC7yCkVTWCPgG7kXkaKo5Ep42dzZ2vKcBt8tsSPHZmdS14YS2dvd3Tom7xC1",
  "key14": "6QExk2EKtm2aPtif6Sm2kYMyF13qvXRSn8BjFsy7UEyeq9mhKc4zYoFqVxurPMJabyQJvJCK2ko9Tg7Wss8W6E1",
  "key15": "2LX4qeiXnio718nmGgY4reKQXWP96bZmjEdmkW9N9oUjEJ6z4DVq4yhnGCruzxyMDJxeKpQVacDcZ6E3yeETDdqJ",
  "key16": "3siAxJaiwkyXkAhr7JnLydnmXPi6BFxzhZ8FahcS3dGhmNS2LRuPx3NdR4Y4mBSM4vF1q1aEsoimqoZtu2jz813j",
  "key17": "iEKZan5WrckQS7zhuxEUodLp7tU3r4kFq6wPKGijHkEf3Rso46cfveoGdkHT3MVhCaXR36s4t99XsKhdL12Banc",
  "key18": "36CkPxH2J651PNiGwfkKUvgJFnZbgwaCLv9zK52TYUa5MnLMV5WbDRGF7cxJ2WiUQJSq6DKs74THxn1Gt5FDyLXm",
  "key19": "3J5PW9f9arrSNu5EiecVGshdzLV3RJPZwZRD93QNrT1oduBJBxsdSLDHxSukNVaqvuxERdsZU8s8ekouf6jkXHgC",
  "key20": "2Tzh7nykgciRQioaUxmc3XAbHMUqYtVpb55GaKF8U1mMM4rLopajUNsbKgpEDK5wnYPb9tycoccBzWbqSCRNP9e7",
  "key21": "4SVgR6qUbegaXh48ox28PrJD7BJy6McEUuSvB9Ajw9MXUeufP5fxMafi4rA8zFVAxXVbsxWJFqBporYavtEZHteW",
  "key22": "5mRfVtCP8dvcm5BeNT2jCs2Tr4UrofrcUQTm6KCKQvQ6UfVJvPE6vFPxahZzRDBSLPuWC24xsjBhH52JyQ9eTpwY",
  "key23": "4Yh4tDTPJpgEnRsnro8wbMvR6Kk3M8rNRDzRHmkiPXio2iqb8gEZbY57yXF8rJdyzoPKvqU3sjXjFtggxMivSqFX",
  "key24": "67ApNh2nScWVsccNEr7TMycuUS5CaNcRsTWMAf4L4yjbn1baftV4gzKtGEmV4VnB23feB4bkbKuwNdVrqoNyyths",
  "key25": "4T6EGP4JhR6ZriKhTGn6iJ4sshLsrXxBfaVqEoGR33ehRBfHhh2GJfUxgkrHYHbsTYkhyoJudc4MX3oFma2VwjjU",
  "key26": "3Xf4oxy8M6NneoeKgK9QRG7hS7BqVJo4KkCd67hRKiXeZ9mF8aMi4K25fb26jUtNqyrp3YPZPUx2fDF34DivaQkX",
  "key27": "5Nex7adUMmZkhwFnfKHu8sCQsH5xnkfCnrhgmMnL61zeggfQ3tPLH4xBebsDUgXQFuw71BSrVJZ81ayf4isNnssQ",
  "key28": "48VJ1cRQ7nsXCkJZnu6m9XUtbHCCgmovYnjJsNV3549KsoRLMdHUA2izrnkEuDKMDEkeS1YdApLsfwwtRnN3XgCa",
  "key29": "5oNqTRNouWiHYscvkaCjG778pL44wrS69XSoJbAH5u1UPTMsMwhHuxnHTUE8RLGVd9XRTURBp47DXgm7NvzPYoSh",
  "key30": "3HF8UnvxLiFgyJMq24jFi1Vvid6Zm1p1UD16xfMJVWNLNqDaAsHUdisBUcoed5NRjqRntpYn5S28cGpeT77GCoN",
  "key31": "24PWijvjvA6xKzT8aewjqgBSphWzft3c1buwNBodnJrFW93gJs1DBUCV79stomave16jL1bcqfUs41U8iGx32UQh",
  "key32": "YdjiGvv6Cnmv77Bss19wng3AFb7mkDQuL4gbiNuhCaz15qPHKBW2BqYsMyJiz2bGmzbCSnfV4mY5UUkFTYcWthb",
  "key33": "2hgeUigHPrLjsQ8biBj99VnPGsHZnpCKFrBpaDAV1YXnnCrxqmmHSXVD5B8LozYSqnEM9L3BrbxpiFaj4EpKPhrJ",
  "key34": "8wsoh59hEdF3w5ZPMbJgC5Uo9BjhhYNYZaig3fbELuJnq5ynr6715dXoiPut6QEVEcvcXnAnVbkKHrCy59PUzAS",
  "key35": "2HLcNQWH6SXV8eHH5iuJ9jWv3qqdyV8NmbPC21iNhckKSsndVK2k3QxmqretSpSW77izWyt9pTrmvTfvY5fzYmRH",
  "key36": "4VRVh4yq5Nx66CuJjyMdKoF5H3HoGEjMr59GnHWFDSQn5UHsCsScZhCFbbk2qPoWV4CUUxjJ9paEyDz8QqhFqEZj",
  "key37": "3TLAFEKdtLRc5XAj1AREkDs295WSGjC6AMkWphej2Au9TrwB1NjiTDuaeieo85k6HNi5geutrw1YJockS2zv2g6u",
  "key38": "5SmFW26r6ZJWCvNZbTJ8bW58Myx5HNe5b57ZzTQGMLP3sBDbRJZhdBhi6epfPT6gF5bryGXUBA5EwahvxRYQNRZa"
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

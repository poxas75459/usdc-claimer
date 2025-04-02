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
    "5VoxL83rri5epPFWgj3nBdXG9eaTfjkk8DiNH9gbZjmRkAk3AfjxiZoFrZuaceQFW84oQq3maXJZd9UUKBz56epa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TXvj6Sbsndmx5qsrzB2yaroD69j42o1p7bCFHYe1bXEHT2t2iEzLdRSe2LtNJSAwV1Pt9Zi5Q7HAYLe2dnxzcb",
  "key1": "vNi3ynAbwr7j2BKQyxDoUxqrgDy3PNHRymyctDtBWJZM5AhLuBmZyNmqS98g77RPeiDxvfNeqj8oLyYNf6zy9k9",
  "key2": "LkWdcSds7sA4w5Ns4gnb7EDFk36TJ5WccF3w9AJCptz4CYb3pancmngPvqAohRnrgXSuRiM7q9SUWRqxmXwDUTt",
  "key3": "5S2me3ZfqUPJVxh9ioBUh53qnXioPQP4ByYA9N5TyteLe3V5xLhztrV65UhdAKCyne7G1RsNJ27hy3hgwU3KqjRP",
  "key4": "L9R5KF3fu9WEvNF93xbDU3c9FbySRZNVzS63MC5ugEgy45m1GJk7yLvC4Y7R4nY7fPKLnLFfu3sQD56uBHtBg47",
  "key5": "5M2xzsLCwgwasUCMNHoqkDLBVkaPXCzftGdWwUnvmmW7rZa15ES4PrpkxtPERXgx3sK9jN3s1JZX4ND92bcSKiSC",
  "key6": "2DttbkDy4yAc9kKeqLqcWYLdBPsDiABbi3ud5qRLPuH8aDnoxtNeosgL5LXi7q2Dqr7Wy1msjPZokEnPZhHyg6w6",
  "key7": "4VoCZudHu1vYK9YUfTBdqhSceJ4dH4FiTt77P5KYH6LunmEUESgC4vfZDN5MgkBjyn74pEQGqTyjuLvB2k1g1D5V",
  "key8": "47V3QgnJphtkzSa5eRW5YcNVsUoS7aHXLiswD22xGZsb9WFnaht7W7KE8GXHv7kF3HQuApnEUoaGdke5Vt9fcG5H",
  "key9": "5eogwfj7AYNEGyxJtYS7QQVZtVw7mhhyQ5XXotXwo768iWbz6CN2NtJZbNJAGaTFYMe8MHZtyQhgDbtjSiv8bkpY",
  "key10": "7Dw7PN3DxggKkBh55mnQfcR4Za2GaecRjDZZsEoE8yg1fBxGyi1MMr1TXnKw8tBMY4jTmxhhAwdNs3z1j2mPfGw",
  "key11": "TqcyZCmwZzevcWrQsy6FCk3R2D9ApRzcHryiL82zC6WuHXUyMSYdsSbNGDZ2ynn5msUiduCzxc8TtNmoUQDiS8Z",
  "key12": "3DLHWah2Ct11LmoajHtVMseDrXmiBnhkepHC7Vtj6dTg9TCZjJvkxtzb4PfkdRmKhCUSYJJpR5goNLaKG4PLb7cc",
  "key13": "gXTd7MyHGw8kVN4yqeqyDFsr1bXHP3uJVN6K6Ywah1jSZMaAHt6LB68VVbznJbAYmtr9e2xYVjj7D9oC5CjPX3j",
  "key14": "5eajroYoPRUee5oJGW9VzBo6VwZ6XJZRD9SP5ZUZaAKCqv76xRzky6fiAzEeHTxx46P3AfhCpNrheC3zKvx4VCHr",
  "key15": "27Et7cRG4QMJNLMevq5cKVXEmzBtekZqAjo5Tc14L9uR9jZdnPRcwYro67dajp5aVtpk75TQzMgzgpqjoeoyLfRX",
  "key16": "5dqcFG6jAkfo9nptETBXUKhbyHbUP2ibtTBLuiGemFs1KJK3Ljdn2ACcgeZNU7J4Nm53MoC4d7uWcGz12BB9yDgA",
  "key17": "2K5MsTtJBsJ2wguUZJqQi5v8T3My14MJMJFhzGtXqLqT8cp3TMPnuEve3ocPCkGzVDAYW3t3AqFrMYJkdMJ9YbLf",
  "key18": "3y6hxQRK1XNq3xJUGZVpJyK47B9o4TTF3Nt2MxLjaaDzv31uNzzGsS9v2yTyixCMzTXkB4z8479pBTLBtCrtKdzr",
  "key19": "2zXDy3K9jWz98QCYE9o2pMPYb9WXJv7oBEMbXNpNGbNevMN1SNTfMQBKdGNiAGgiMGReewSfaBUUbyuCJ5DfLwJe",
  "key20": "2pt5URJq2fGCg3L7TXz9UMDkT8MgynTznbi5W7JVcSwP3odCVRBhbLzNvqzmJjUxdCpm4CHsmwDteEGWUzyMxzHz",
  "key21": "6np1aF5eSV8JdpAppAAaQ4hZdRLs5dysfRBkDNvBWKGwFKBqzBc9c1cDF18oN2kQ3mop4WoothQ1AsV7Wcqhuaz",
  "key22": "47H78sqhFhJk2ibFQBrHGEU6tUdzvf75DTAmnDq3riGhiEZEAPjciCFRKZXN9bTLvESm3dWEYLeeNHRs4XqYVgcN",
  "key23": "334pLmJvwgQqYpztAhNRMeHeNkAPbBrHhx7vaX22MaVjSMxb5zGtYD8UyNhEw7WamNjYwqYA1a291xYaTccu4aKV",
  "key24": "UQcDdnF2istmGg5CcpBS9RWsDU7RatDpptsw8bfFnVGuSxUHBTE3A1sFHX54ucoqp3WgXcDHCZWZuQKMgs9p5zA",
  "key25": "4sRC56UGCDHUPxypBhy4NXzX56vUh3aFCCqfqJcc3MPeT3VKPaqFDtPrP94um1FECvkUGBgeMihHv4ufrTambQiU",
  "key26": "2pSRgXaYKk12VophPboxYZznLybVF4bybZxcuFJb7zjStbDiq11t1e2Bgd7ELicqbeVvLDRrLkoCPWSVfqBZJihg",
  "key27": "3bV2yBDsaonrdwS9EXHANE7MGkcKrPGEGpA4xjhd6Gn1zxBTR9yS49JBKXx4mwaoD9jKWor1jxn8V3Y8kDjDLF1F",
  "key28": "dDBVhLuj5sNs1j27DwYB5EpGGekMNW6YyTTwY2BPKYrMojrYdisy5E42sZxVUbSEdCQofGXNyFdKSWbTUSFTK8g",
  "key29": "52Ge9fZXmmfsiHjWdPAZdQ1uvRShkQhctJXPiHa6J4JEM5mXAxHXp4sr2M9r1yoZciMQwM2mLmTpbZVp2WpTVxxf",
  "key30": "2s8djApNNhn1dFveLcik2Ar6b26Z5uJfakqtmXf6Z1RCMNTywCrWsexocgQeviYtHDZpDmF1JpHJVRteDQnrbDPP",
  "key31": "4tpuswbW2piqTAU2VjhFFvHPnURwVtchJVcg8UBWMmCzAEejqLhtozWaXixDLRRj8V1EpsqJXHw6Y9ByGydfK9tV",
  "key32": "uQWwrcJb4FiLZ8spWAcvQqHfhd38ggCaKXtqKJqv8iJoPcWdx8epRevWArKuSa8Bxydke833nyvpsi5aSKogmLY",
  "key33": "62WbeCKKY4iFtLFviYwdomg97nArUafiCT9PHp8esFwPffaGStTJVSdo2W52iXxKuWyrRd9hbf36JQfuFNnGxkZg",
  "key34": "51DymsQtkXdBPvQSeDnpsAWLotJcpt6AHg7gGZuuYFYKwDbVjV3LPoAfk6hNk9yEJu5YT5ksxnG5ETttZzpReWFk",
  "key35": "4ndceme96BynLQz9p3wRsFcWgNNVXY4vh4hrngynxZUwmvCGAn8B4m6ojxs8Bj1UsSTRqMZG9TH1qGTvPqR7qpWy",
  "key36": "4aPQxzsfvPin5dfjvmQ8N6iZ7KjCx858Ao5u34ozNqjoeCQArupzjFpoQnnZgddshmdaHbecC5YJwTbYLh69JsGH",
  "key37": "2mQWPKpuo3jhwoimb9ckwnZiCzQvtdcFJwaMXNadQQ35cZpwrLPoHaakTztD5vMSK6LHM8HcX2dgSmvgoztepqdi",
  "key38": "3vW5fggEUEgQzKWDfFRfC5jryF2J8gTbe233HK9sHHTXk283q363qv43gv3yK4iM556ED8R7ih1EkEn7vXQF4o2g",
  "key39": "2HS6fU4quapcCbD1wZnFw4W1DA8ryADYG4i9ihFC2zj57aTDS83oio5kUXc8pM6SpTpL8p7a6QjRovXDVwducBEb"
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

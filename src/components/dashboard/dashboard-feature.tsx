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
    "3ChTxyDCcxNAHRZ7zwKSq3cHxVf3t8hZXgZYh92NTdY9w2K4mj6XimCBgtDF86jDMFusjjGf8cwnHfXXV3WVjBhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jb6PGvkCtBbNojpbRghgfYzi382csHGxgwkjVyKpdjkPJcQHUvp8iF2MvBWSEzdDsdLacMcFphj3Vh44U1GdrTW",
  "key1": "2467m6gWxBTFcAiFTgM8rinuzc8XSi31NeBuut5Y9qWvdk9UDogEfuqiZoadgcd8Wa38p4aDAaogBgoLKR5WiXKx",
  "key2": "28Lx4yo1ymaN1HaDaMnDYprPYhiRqB24YFfKBKmeDLoRNSLkKTq2fe8iDpbWb2WAn8PfRepcPGhfKJhgVVRrh97J",
  "key3": "5D6VBERCCv7yDnL9RNDqKM8up97PYxU25zTTizd3pQqjaAc9BgdHznMA8GCWggG7AhKwdK5Etpe4njrEY9VhBdnn",
  "key4": "3Qwt3LjuXZAu1J9zsv8F2pRwM7tzw8ybYXvTb1QrCanz6CqLNe6vt7kmQqhntwfVbQNLhjnR7rJnSvyR5xaa8nAB",
  "key5": "3WLyYSwZnL7UapkyHiJfwEvwCGDHbo6MXS8W99TFa52VB6eUjCoeZENZacAnduNrEG2g74u2KSsA34nHyH48WvMv",
  "key6": "2WqiV8Vpysr3crEHLf7dM7wjFzyEARDB3iX2MpcfKrQ9tFSYxe8qoeHemPNmXyEQ5UHnXKB3qKwijQqU7e6trraH",
  "key7": "2sCbcCPXaDWyCx9g1LhjZukEB4HVfFna3F532z35nXiQUd8qg4SaZ3xyjprQm7HcoKmavfN9JgUuEojgwTQwVhzf",
  "key8": "4yPUWLsqraJTidvfCYtv7rxstL9Fpoh5jaGqFmJ9wxh8AFKuV145c2wrFBZ4uW7tR7r8LmQNa3icQbL3CbdsrxUD",
  "key9": "4y2KqyiMrCiNkLJWeWUtJewWV7uce7rWz5871uSvRNRiXAYRpRnSySqicig1fW6ViJF2VqafuHAecJKuNMuCaZAD",
  "key10": "4stxmvLsdvB2KGCghrUmkbohsp4zJZq8Gbq5gM7JidayykvH12kDG6kRUL8FsDV4F16ynRTefecHR4R8XjniMfYx",
  "key11": "2rn8aNEDh6Pi4Ps8PYRUDXicrXQJr3NLUCzJetVrcBs7aEyLHr7SmS3oSTroAXGJwHQ43mW8tTDuCxDCyxwzCYdV",
  "key12": "yn1wKVxgBYrMt82esq9qLva3McV36KUEDnNeAwTDV32WsKcsJfHDfZZQyWrExmSS2Br4xUL3twBKcuRcqSNPjDZ",
  "key13": "4HzU7po6vgJsSW3XhEZLkdrScj7AmvUC8wPTXMg2ijsw3yKF37N6pmavfngq9ApJbTVFuHRUaQun7etmDk2WKTi",
  "key14": "58GA9CK8ieQfGQtcWQ69kAvdnCwTMNeRQvHkStVn9sFvdc5sWDp4d9xc9ZVX5jhYWv7KZm81TuV6kcLopz9vC7wu",
  "key15": "4pKrYuDi8NcWG5ttkfWc8c1oJBvEZ29W2iPTRvv5pyexr15ettNbSoMYJjbuEYpuG4MhEpbbLUMTUNQ9bptsFt49",
  "key16": "5ZwXJegbXkHMMi889bimbdCkCxKZXLe7AhGYc37SLsDzNGXca97ZUMm66tmc74ZMUCeKabfhNJWwj53qYHA666AZ",
  "key17": "3orwL8SpeoVAvN2gofmaq75C1TXUp2b6u7TQPZAzNwwFh1niypvuVz6qRAgBHUr82e7Jr2CwMZVPoRQMjnZEv8Js",
  "key18": "jqn5fTmwti4JStXNLRmDwLaFy7bfKqMQjG9mG9jss9C8KmGsvsS4G4cgX6x3VfC7Jn6TF5wJi6Fp5ekscdAjiNa",
  "key19": "4KECsK3NEDs2GRjXPxkiJDqsaTApVnmUJFS27NSrQGAkntBnpVo7PrNmZsodh7UGf83kQ6Q2Eg8JFjN6gq7rusSX",
  "key20": "4ho6DwrbqCfDi4pKdTA84t2VmwN782Y8JFMMqQRD8dVVG2P5jyqZtrRkATcNisrXFAg7U7yUjAG4sCZYob2shDqK",
  "key21": "2x6hra8Vqi1TfnX5hbW5UYL7xWw9qBkVNKQWRxxS4TVsp4FAAQwNzL21HTUs3doTqadja1wT1CB2a5eTAe3qbhGH",
  "key22": "5NCG9mbCxBCVVcnCYoqgTo2gTAgdUUMhmNgrb7V8JjQMQFjgrzHxct95m1MQkb6fXT9qtGw9dRG7ovMeWD2wvRuP",
  "key23": "2Fe9ZXSkRVtLgRcBqV1x1SS4oDFgB5nfMsCn7Ka2PxQVaxW4XGeNobe8bc9n9xjBWXGY3eUTRbNe3ETVWaKb1E89",
  "key24": "2ZyQnjePk3dZjmcvnzsBauHrGNBG72kAtZ6CUj9L2fpH3k87Co1JcPThtWzDYAU7b9Az4E3sdkKP4LS5g8Vh4K7Y",
  "key25": "ZyLjetd3nmmDTPLR7reCPuK2g2EFvRsmmdFgbLdUXRUP418QVNwgYryw8fuDtxa6DbbgcKcaxLUeATVGjhB6Ncx",
  "key26": "2C83pR34agELMcRxMnAh6vGUeSBNFmuvSx1QHkaLs66BLuyr3S7gMg4qnbJVa7f1TW66dKojWFp6Pd4eBdiA3chR",
  "key27": "4qf8GkqbogbCwnnFMi6PWNxRPZRQceygpgH2ndxgiy1sjntYqtHNCY6xtoErTCRCcUbhco6dzin2nFcHzojjBhkh",
  "key28": "3CqjLUHkoPAe2RtiXJNunyDw7zTAVfA8TbDVW9D5V7PhbCVCQask9EYA5Tt7eXbdBx8KcbwHH6VfHWZtJGTZPi4Q",
  "key29": "2PAsuAN6Bmfp6tpiJf2YzNEH5PMQBVwQKKZ65YL2kp3A1TLFYEXGcGsi6HNpSCDppELuZPo2T4jesk7EugpoBE7H",
  "key30": "9RYzEU5qa62nwJsW7U9KDymyW6PV6ro9nGDZqYBryDihuQdhPYQcZQAoymAtR2MCbj7H71RN73byH2w515TPE6n",
  "key31": "29XX2LP3uXKexRQBEhAr1YdYE6ZPRV8x22gvAci2b7a2pMrGNrH9D4h92h2SQGeXzsygoaBA9moSnWPU4Mi7rNDm",
  "key32": "4NQaunwsnW27MaqNYFPY6uhgdgvaFJpiDjskvKbpZPxbuQYH2p4HEs6kenJKxhXE3xvaQqjA1E77UiYqKbK1C6RW",
  "key33": "2t5KcftrXo2HdQUJQ4Do2hdBCEKK7QjSxLx1No5Z7dRL3SrbkRXYSW9bBLtVGLAAfgvuE9WDnihNyeuEUTDjcRi5"
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

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
    "5hfKUUPQ1q6SGWzKxicWmWAxxBYKj9EGBBBL3jvPEViPYr9yejYFtzBa7g5kZxV73GYV8w2EqbbSUo2J2i1kengZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLpDbh7DEf1pMDcz7VrejiSGjLtUjPvisiP2L4noPo8v4cMKi2d5TDH9KBKkHhZXCjPBkeZ6oSU477xghS8GUg9",
  "key1": "2FrvE3M3HGeWSfHgJNV8zoBuvyPV8KH1wKF1paumvoezQhi6ThPEm3r8BBM4o3butGWoHaRw9u3rf7AyTo2m1XV5",
  "key2": "5bJ6WfTCbEpTS97m36oLdv62VuFt59rweTpBrR8HqoT7AGfeXkafiTbgeJHP7d2dUhz7VwJtte7oXHuP8rkn3jQA",
  "key3": "5Fg2NgG2tcZLt4yoQFaE9w9HjcobkkGiojynZL1rgHvYRubFLbDF5WzJwvxg9zhyojvVwTtwA9g3hkG7mz9njR2G",
  "key4": "5WYCdV3UAJgTSN29HpExFFomUXrhH4JXC92pKnfRFgWxMh5oM3kcgyNWkgqv4DyTQ3cePEZn5rmx6RESTT4ZHLhb",
  "key5": "5oZb3hYpoeAtXu5WegcTjxois9zxAwDhe2etrkqKUnddv5vF9ReswTQAQStZ4mbgbbS9FUvSBxb81mJkRTsz6XaH",
  "key6": "24u3qTgZxcySdvwcrfsHXmC6afLCJjYVdheiexFYGQqWreMAsttq3zE7f1vBdUGvbvZ4eFGWnHaoB298oJ4gDXrc",
  "key7": "3XtMiB4skdBjZRZqCeQ1otiNUDz4xSG1DqxkDp3Kox7wrXwoqEhdxkqTqvxXJ8wcMWKgeoR2znTxcRUXp414cFFp",
  "key8": "4ajGQLqBaSfD6H4tNehiznGNtoRVC7rnNjKMEZA42X5APH7NPc8vfkam8cBiBJzdBRAsXePGpbkvFctmR6Uy4AoF",
  "key9": "5H53LB4EZuLjhUdP6CPHcTKxRjN5WjXGEHKS4nmrF8q5giKFqdmvvvMthUBmXeYiCHraqvhvSJtsPBG3odNQgahj",
  "key10": "24G8ZAbEiwPnELPhNcz5X6BidnymksL7otpw2QWDN3ZbuduEcuBLEzw3cuWGGrX5Y8f5Bt66z6fEkuqj9cuwRQv3",
  "key11": "2hz8QEgTDYkcC7GvBo3GmPNi39g7QbApBTQ31S4ebcW9xNRzivK5HNAdxmPfZLV1eTnwkShQ2MmCjQGaLTjmKcit",
  "key12": "bsnkUBeVSj3rDsJxjxT2hqV8RMBcsKiMpFqs2u8mCDCJbv5WVBaPkFeYRp4xKCZWZLuDZPPkmuUxzKLbZq78c3U",
  "key13": "2nSXKUfcTPd7XnKLCfLSFf7EVXRvnmd51XdXVBRyYwApoP6L5WNt9R8QkAFsoMtmpwdwfpJKCvFrcdZDrDQhUkfj",
  "key14": "45cPucGGUuuef2WWVAYkzVp4u8npyCZXB76xYtJ6Mk2tDMsqE6XH6TWtfvi5CCKxeXgvJMUu9dMCrk8Pmmmxy6q2",
  "key15": "3VVzpDz3hL1YwC5U9X82kbAzP65A64AQqbijTbvBdJDHgyEA6StyWuCc1ffXrHR3t7rSLdE7W2Nfu1dLZwHPJ5Rv",
  "key16": "28TvxmqistLeEmhvEKGppUTtPrKWkd3SxpoX1EJNKjzPTwSkMnAMs7vCDVek5VJqVGNZh1F8txU9SHowBmQoqrtB",
  "key17": "4bt6QyYdUd2BUsGmqVs6W1qvwwDDb2Mk7wayFSWpq4FpbyFTY44sJAQnzXR2t47p2uSQnFqLaYDewqFkTYNKiLnR",
  "key18": "6614vjfThJdq1iMSSzR9d4dYm7z4eF5qAvv3RvBqGiVLyumW86LqsTnNTDrFWqjEWUtBH5ZaowbwEh3JMvbCUvZq",
  "key19": "3s83L7HZoYPGwyHaupsRmdAViSsTim1p8eKRgo7SYcv8f8NGNLZ2fiNCf5atgLK9Ym7xWp75TN6JsZrJoLqvM1iH",
  "key20": "5nUSHdW6fCaKHykGBH8ioGmLMD5t22TEcwSx8wP12coZPxqyD9Mift6Pdd4NXP3MUugDAJohq5gZt7H4aFYNb6ua",
  "key21": "3CPBhPprHuFATMiMA3u4AHSic7mGNWHCVcZmCT7csm8PJ34Tv3YAy7Vy9YibSB5ihfT6YLCc33JTJ7bdmA9marxS",
  "key22": "2hBoMzXY7UFRuMzaPJ8XbXfwtm4dXvb9a8eLgZw9X3awtqkw8YevcvaykpeseYxFtTHW9kUtR5oVwo8x76PSfweQ",
  "key23": "4C9bmEofnbXJ9fGhpQpy93sJfe2JP929Wa3w2Du7fcLvFUpf89DMJUSn6PcmBzs5R9ByHrSFySMK6EkZqmwWhRV",
  "key24": "3mpq3itWi6wTKw389J5Qz5MWnzHmpZXDqWuCSAXU7oeNSPPTNVucQh27ouuH7497VnGDPUAbg3CUeXTXhssuNbQw",
  "key25": "2PNQT4JM6oURd7DLpfGd9kJ7org3YvQ2HfYes6WZQDiDibF49mrPAvfEN1nyWViXVMvt8hG6PUxQcDUtCz5BJjQJ",
  "key26": "44Z2y5no2pbkc9wskkYiu3fJb7gzZinYnaqoRPukriQqMB1hbRVinp69oo2zX5VTi6JHWhCK5n4dx3QJZGXN4qfJ",
  "key27": "3j6u59sT3MskLPDQTh4QTWhd18vCwWZaLPCM8NPf68ooBUK7iVu9JoUQzsmo39KeD9HwT5ghiCz447jZYigmKEtA",
  "key28": "4hEKgwyc4vt7fF8JcxmSuPpULPk93sUPS8rCWAZvQ8X8YK72VFZKBTExsUSjTJpFrkcGp4SXeisEQmheea8gE2yr",
  "key29": "3fnnuGuefMjuT2iwe6Q6kk3wX9YcaLAgP5Pn3umjcWP2uuWfpJM6RLGUFPmU519icMZgabcMvNrK8zjz8KJ3Qk8i",
  "key30": "2vG9g8ZsJ8CdGmkg2kHvCMXRDZSWLa7V5cKL4NEp61PJu25d4BwtDqSukBtzy5KYHGA1bEqGjdCeR1D49Waivcti",
  "key31": "32XJbp9grLbgRFFoWN5RctThADdLrKgwVRo2DAjM2rGEx2MEoRNmWWLBaf5K6JbeEFiczSN8k97B2BokP8PdUGEH",
  "key32": "4EyT4VhcsvJQqZxHdFyFn6QzCn1LCkjHDufPu9kgv69AmLoWQbHCkT35nQfbEqqk5nqg26V8tJQwy5kQvPv9MLjS",
  "key33": "dHBZ8BXtfUp1sjPMKpHdqN4QE2knjLXvi3NwQt1wJaacQt5dMbPLEcjoud72NaZDg62p44AfB5aBnjdyZxJzTUk",
  "key34": "5Snjsd1j92kq5UnpPLznqqQ6D252TnT57Wjn1BrpcgvNR4PLJ3WV2xcdAskEzWPNEzGLSUzgR3gF6JDC3YcwPG4j"
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

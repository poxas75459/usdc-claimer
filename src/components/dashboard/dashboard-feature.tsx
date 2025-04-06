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
    "4hqa9PFqha3dDXTXZNU52WW5uvB5TVFUhfKUrSvfkgCJmaUmo4L4F5pqrN23NUhwDrPxNPyPNPK4g8RafTGt9YgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2h2PMgo7J4RLGBEa2usUTz2B2FbXZpYDdCunwhHJHUQjxhCdyyS9xCNxtY36WRrPRvsn5Y4Fek7UhCk4ZhwLem",
  "key1": "2e6XYwB6PUYPTTBw5N7R8gr6V5G9oNpVyZf5Zf8Zn8DBD3v9txXVDJjbh4WcUi8p6Jex7TtnSAew2U2jcFHDU8YG",
  "key2": "pv4fHpozhvJkP6kuXwxkWuiU7sH696ZaYS8514qGs9gVneqhWTWxgJ46QwecuHncZacShUZ27bvxYR1bQFzu2mk",
  "key3": "MSbcJY7YqXD4CJH8TRBaSYBJfZmJKyHaqE26DFmDrc7skQSFTSsrargMpEQsARyB3NH7KzfJkzQwJh5VQMC4csn",
  "key4": "3csLYAispqixPGxrLtVdamhT79MjoNU45Q2hBiL3QAg68mVneigwpvfEvv55LQWRhjP9xKVJURwNoi55rrCk7Cru",
  "key5": "GZ5eJt1FUV3kbikN5Nz4CS8jc5zd3WoGxAwBDrfTapd8ewck7C2np9VkortjFE3yGPpEuFV1Ttf9GugvpXEswXr",
  "key6": "5y8kekg7sFG2i23gxomGYHidJ2zvmN7Qd9k5zxHuzM9nqADKY9j5grWMaB3RgfQZTguSX3nd2Sor3dqT5zwcWDp2",
  "key7": "kqZ2SoJphjAwCmufcwvaEtjaU7Yyc4r875b2VpDQphF7Ywm29iAbXLu9tzHLMG7i3y1AW1ASzX39RhZoS3VvuXw",
  "key8": "4cLN456eu3x9KNhHbjWQTsZQcvzzDXwtj8NCm9iiwHiV7yRHqzeNknHgitLNtuoArTmS23PvrXuU2z4QRBybXCA5",
  "key9": "58ErytMSz3RfW9eAMUf1MxHjNLtMmX3vuYCLcuWZAuafGtdL172UP8pncWuf2nVoVmJm2o8iiRmdBb2poZLSdczo",
  "key10": "3vHi6Bb4SWXZP9CBSvdyEvAuqgkLfeMXquSAL7jzxFYDk6LyaCsbxgEF8quqDmjj9P4AWbZafjBAwZMpnK6ssMnU",
  "key11": "4Kbq7oASQhek9YXBqwcN8UH1R7UP8bvZYdxXW5dd15Y8dZRi4MJHFFPymabqhnmUtbcvtPAM65ZPCAKAvJraA8BV",
  "key12": "4mRt81mE7BghehrZnHsDb1tHV3gAoMDdu6w19oXbdYPw1Uk7nHfoLNysdVoW1Z4XxGxpp8NcbqATpyvBXqq8v3do",
  "key13": "3CkTGkWmeyguabaYFsniV5V9SBUFfjm2tAz7rk251A3rU3E6XiY1pvqoiAPsk4ziLtJHcUmxTZwsVZfxUCAvsraU",
  "key14": "4cZDke4FbLQZJaW7D4hkdK7CjWtwkwNoVHZ28s42unXDSgTkX5qFh8NReHjoeDiPx6kWzAeYTdZY4arhng6BZDy5",
  "key15": "4ZhLK9hbNNcEDhHFHBcif7VSkRZ52YXATM85cfZSsfYDHkkSqNnb6F8Qgk9vvMNBUs4QHBQEnQ2wnong1n8jrpJY",
  "key16": "4YdyFW2J7etqDn5EvB53AcqqvPCSuht1tQQzhuuKuAnxekS7G8pRyGNtGSHPztJHyhb5ZFYL1H4MCL5LUN3Y69tN",
  "key17": "v7WVhvsGqtZM2Ztpq7jTW7papDSdydS7qgtdUoKc9C5P6tv3Ym9gfW15g9CQnX7fe4hAmZbqprmy62cN619EUJT",
  "key18": "343dvNqH2akXhnzjn3jh2jMzQSiwHecBz8FFj4STNL2QQnTnfH4kRu7qKWtv6R8iKY5pZgSWTLNjxtKEUPVXDWCB",
  "key19": "EMVTQmAAVWrerBYYu86SQzAFBub2JB5hUJqm8DCZJtu2B5MG7QambAQSGxppSsGeibwsfREy25VPwLKGwaAACuL",
  "key20": "3vNY66F6eZmwGXZ2hDwjKVVDgekHhMjLeqmz1MKvSpodAsk9vpKkDpxvBEsHaMcb7Wcg1JU4R4JktjUNcWKn7LQQ",
  "key21": "4ZF9morBN6fYx8x5sNJZCSVwURHsVTgDdhPWV5EUTYnB9GuB44hwxdRY6fYB4xRuL18FQ3nRS9dTpJDB6GqWKR3f",
  "key22": "5cterApcAieEzAhVJYhpTqyRyssVxeDrjXdtrEaYPVPVQitnGJjMtF7fCzfgRkUa3AEeDgiyEiBuXDkxt7EtQvGY",
  "key23": "5BQW4pCctgDBquQpSfAXZf9wnHJhXPEG2RGEwXH8rQS3R2SjYFSzKKHRSSnXN1JL4PvcYEMwFAxSNHF3Jzc4cM1S",
  "key24": "HjTEfedjSQ1RYmKwaNH6Hv76RyfDQYdKN4VgE72Lu6SAWioN8BtYyNAnb9gJEfxxaZ8wc2P9zFsWPk7qVYsXHU6",
  "key25": "ZwfuQsRxr5QDbKrZE1H75NPhdQHk73xpBXsFZEfU3yGHMvGJSKEvJQgQkXeiLVpz4yeCNUbAtzQwRvTcLeazpVx",
  "key26": "2A54sHbLq3bjKz8ws4XtMh47SquWtKxQUbaQ1NSDna3ttCamDb1Dw17gSitCYNJjXpyyjwwAozffTnnRjVNMN6QG",
  "key27": "44nkPzkJWhjCm74MqPY6in6PCeqHaieXdcNsah1tnUnhxb7n2ZJHRKqDM3TAsKpKbbUaQL3y62nCmJJ3JYzfhBUd",
  "key28": "2zGpkd794J5pEmo9yZ2V9Xpo5swSBR1YjoqVvMhM7GjqNqWfRuC1QtG2AZj8VjhYvhWQLRxDxPyLeaR6gGfWcerw",
  "key29": "Dku1YAvCQVNEySprvKYdHgz5ffShweWjnoEtvZycXeZokfge1h4f8WPEiNcBYr3jyRZiA8cBWRD4JjvS7W4xQyx",
  "key30": "4x7ovitCXL9H7UvwNS3TkiZKjqf4K4BqMb9cZ22ovPY1Fzg5HwgKuqKZhjWV1DuTaDhe7tL4QmM7k7YCbqVsfDfE",
  "key31": "2TvP4fij2LmJf4V8qj6n5qxVFe4jiGtbzzhYpGvooManjyaMUvmSgaPGu6ngoLJYJPdBpoNBk4Xzk7qT43oJ2NFU",
  "key32": "3DPxQ3Fnt837C7vj7tNjf1TpDTTPhMWgJykULBUFhG1xzwGXFQ6Db56F9utY47H9ZBBRfw8cEN4U4qSXxxD8M8Fi",
  "key33": "3YS6ntBS6gmakXduptneMbfE8r5kXhuupTqhM39PvYxsZUwhd6QfGLEAwMHyg2DRp7gSkTgXyNAdFuxZXn6dQ1ui",
  "key34": "WEnjyuoadxkhZypTQLbmMo1tFQKv5dyG3ysJwarpiGMpvxEuG2WhTEVSxb1NyWAhYTimpqrLoayH8vs24q8cu8h",
  "key35": "5QQkeNRV4QZrSHoLoqJognnPQUhH5649q5gVfWQFcKrqjMeQnmKzx1XAnWzBt9eXz7yR97M9bbnpQYKqReFXguPQ",
  "key36": "2L7FWy11HWKFnETRe4og27TKvg2meySrFssbNXMHAGUTNmBF65CGQHnvThGywxWDaFeU8VLoHQCPQmoo7Z4uDkBG"
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

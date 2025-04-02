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
    "zv9bKFpdG74CLJMVu2quh28fy4YYSqZehwwgmjMvVZvL7t2mau3joTP66RiWwdGBkRJ2Jef6am7B7Lr5o6sA1UN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZQtyLHsY7nuonGD3dKnR2CcpXyCBo56zKHTDdx2MY4EDevja75qpxmrXmhMDk74MQJpVQ9yZzbruC1HnTieBeK",
  "key1": "226jSHzvcpoNNVPdbtUHkeq5SxHAQLFYCaen2AZcoTdMZRCV9GkQDY67yyFRQwcFrWbXYfSuYQY5CneiAUS8hrFW",
  "key2": "3RXssVHvUVmxtcwEKUGtgz3JndECezb44FvpQKTcoVQ6Zgm9nCPBhg2KGEP3m8XrWgBrrgtS1KjcxPvTnu24rsaW",
  "key3": "3M64d5Q2Ujm8QTsHnGQ32qihvrnbH8ZtjP1YQ5UivBj3rzBybUz9Vx9u4m7WVk2bUTMfkFzXQGQQKMZ1Ws3jkYxL",
  "key4": "5p7saSoLFeugucdRv5Njg7dFnwj13y8bkp7psnMF86diWj2oS9x6WQ14BWjNi4uWwYcWfX2rNXerGJK3wcDQdtDt",
  "key5": "2tASvGV5ZJYVQLsFB2DVhHQFVJjJQ5aUctheFVvniHBJiyw6VvDr3wpU5E4t2kqMN4JYKYqnevnGmXZF7Pk9y1ck",
  "key6": "5Jdd3ftwptaUcFPf4g3wbhBwDKxq1UqyY2NHakto7svDEjFvDd6WQxGMzigYctcWoUtTrt9PEaxAAJmJaq5zi6UW",
  "key7": "wUzxTyJv998ZdT9dRMpeU184LjSvoaKyWaSKjezhiWFrqdC2zaqkWzaMrcmr5fGevgiFrF7M6ewMJx8Gs7nYMJd",
  "key8": "XWkeHd85pYLQ12VZH7xzbyfmeJDEmgJShybCLBVeZDBpDocdbpkAtB7VR1izEVtjLxwHgYn85UEY8X2FzrA9uEy",
  "key9": "3tXHcZNpDt1uTSuX2NXaPNWK5Y66dj2cTnrLnS2yKuN5UWPsHPwCHMhVRuQyjEzmLSb4hS3VoPHkPPVXtQtvpHB1",
  "key10": "3YZokJ7tnq7G6xBRKtVMcQ6Z86MgJWEsw3gXNUbegAk27LTnGK59roXqec2i4vsz3RfRAHHML8sgpYk5whG4srcj",
  "key11": "BFsHaY6nXq4jhm7p1CvQf5QamMYGtVXhcjL9yf1yFHuZQx1xnvo91n2Lr4Twp5a7UTp8wWBvzqCEnqTZTaRcjXH",
  "key12": "5R7Uw38DPDpXg8dt7D7jiWncZARr8aUr7cM6pjAyvZnmyfjgGdZEe38GZ4D5B3AipczrMcTZvQ943qGZet9k8kF7",
  "key13": "5VFGu2au9vEehVNCfSg3gRGGi9EdVHV74EWHvy2f7ujfXpJ9F85AtWwCUCd44ZMdeQmeWCA4o1sqM7khXv5KAsXv",
  "key14": "2W3CPxVKUT7b3zaRM6RiVXiFrdMhzUtRCaNUrGgDwnqYTX8ykRdPwyh12DFv2ACJkhFi5xvGPwL9D1MDyLSLfjBv",
  "key15": "JA5BMySkRftmjMgjnBjmBpHj12nsvsR5vu9ejGZXdij2skZB1en14uw3n6ojCrNqNSdHqHFPg3dL9SX5D4w15sE",
  "key16": "4VWCyqNwGnPsQv7FqQX4xssJGZaZX8Pbrsa8dKvFsAU84HSzs9Eks4su1Cegzttb7BRbDW4M7xcaJeb1jfwDNNyc",
  "key17": "3cUPYRYS9QoXAi5zwkrZwXwTyXpg5jBvLxAWjSJqN9BspCEV2zCEZzkiqpwnwy24DmyZUEgeTS9Ym4WiKhH3BNna",
  "key18": "2Lqm6HknA3QsV3PcqnoRnqd9TwKBj9izyUtPwgP1dgiqKpFLdmsokjAatdJskAk95qmsQBNT9NSDr3eCdzfVd5Yb",
  "key19": "2JUr8PfCBaapBNYTCVDtQtpt9mwdgwXDNtCQsu2t3yk7qFwjW8FbtmRC6RLMJsW8ofPRcWBh5X8xLU9v8SsQLYh",
  "key20": "2AWdeFEp3d85TpU1dxExXit2koXWRmo484Zf4H58qfTaUFHAWTPQ44m3Ty2c3CPFCJtYCTPpyiYWucXuvZo4qxfz",
  "key21": "3edNZXKRVGhYEzbqMoPctYurAxgKeHzBS8N7X2EqRUcupZunzdjNYh7DwQnntCDUp8Twiq3zrHoG4YqXeCDxuMNV",
  "key22": "3WWgvoEe9yyYre4PX1KPYC6CFVo9xDEknUyH9QFvmVGJAqdqVrFWSr9K2DfNVtJGQjuYHpBbFyZSpZ3AyCVunvsx",
  "key23": "43jGQ7Lr26oc4iyD35yhjvkZ739vvn8rsCtaDdHXfoiNdn1doSVa82AxM8YGnMUHk7nsF9kSYNVjyK4DJfQScHzp",
  "key24": "3dFTZpNrmeMp7dRK2oSgPfbZV31zg2x6BFr6em8SEWgUYsAFApd7M6RewuJLNi6t1d5Msz8TVLGdYnoZFW75hd9o"
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

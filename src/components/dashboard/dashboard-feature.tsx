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
    "2hEwSvF2dWwb1hsrTdX1UByWEhA2zycQhG4rUErUhfvMAu9kww5cCL8SgKQqWeCsJCfHnmjigWnvAXZJUjRpLap3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dVZmGDv8H5DmL7ExWDTiufh1ALnCaTSYH2xgQVVCCbLc2hvsedmw1r1kQR27TcTZywbt7fRCb5NUGbSDiUHjmd9",
  "key1": "39wZ1EopWZcszMNH8dktjL97v88kdky4yJkL96HwikbYyBz9Qw4oL7z8R4kQ2o8MhZqheg4W5Yd4VkXa2hJvon5L",
  "key2": "9h8EbpJDDzz78QBSURqXK1xiEubQ7SQ3sEsspmnyx1coRrSu6rHGyCXdPjJ9JPi21t8Q4kYjBpDcrBcFUS32qEE",
  "key3": "3vY93rTsu2tghk96xwp5BtVyu2EQ78XN45x1U9q2bJDkXZQ8nZEZe6KREsV5x1FdgtpLXKr65WpbLEM37x5CVtTN",
  "key4": "5Caah7PB4HVkJhX1Ax5iYqJHgkukkgT3VbXP9JZe5aZBVWmwYaCXoE3akYKD4JjQBt3yPN7RL4BsEV2cxRkgbwus",
  "key5": "26B7DWHRnY3QSZR5Gf1mKhyqrNea4JDWL78SSsrDGLPaarJBZzcJu8LrxjaWrUodNMn5n37qrVn3PsoZDmDK4YGs",
  "key6": "32LuvhmwNLzPKXF3zz95UwFSUCyjz5kB1Hy8z121RrCyZ7cbHfMWojcoyF7JXXWwLHCFXZHsFioawgJRH79egWqs",
  "key7": "4ERVAcYwE1yiSv7qWwiB57fHyE6D2yA14iiGvMp5ykAbt4LjgHCzfSBZoZzvhZfyqM3wz69hLTQJe6TStWmVywXe",
  "key8": "5CRMUHDfvRUqbY8kFPyXQyHA5gBTyx5DnUHQ1ZLDA7JD5h5pZ1XiP8wobhPHhkcC1VCy87EMMFxgxgNvr3adv5ND",
  "key9": "2hnzzqLKmQcng4xBebRYs5NzaKUnfuUsgvp7F8w1BuUALpkqMjZ9XwEyRZXPzkbvvYgPdrQbc5ynboRUt9bTve18",
  "key10": "4vjq7AxUEmgcyjpmVxHXCiyrQVfHCbpf79SzyJktrqeuWtitFrNTs3621xk8Rj69REBh6PM6MgoMUcpuKc81JxSU",
  "key11": "5DzuBcBPdC7hr8c5EAWzP2mLcx9cJVdmHwmNMS8i8Z4idbEbB8wGAdfg3qp1kdU8HJyQFYQ5Vkp2H5piAoW6aoWA",
  "key12": "2KZNBCDieG3zJLxVyNjU7a5tdELvN57esLjbPUzyMBh7osEtc2QX21zMLtdNNXhYNQxZ4beHuFQxhjiYhsWp4ktJ",
  "key13": "2unvjUD4M5hx8FDznSG9X49FbWCCPYeGvmhdKRtKpPndJdT5VEsJxCo148yZRQTRmerUckyzdZqg6ZnPwW3EWjpc",
  "key14": "4NcF1WmeoKdhkUdi3cXS7SsfzYnrRnEqwEGPtojYKm2NHikWYDWQ4NGs2Y3xYmCut42Uh3pRuCFzFXkv3AKVv2Ao",
  "key15": "38cMD6GPEg8xbu5oM7cPoR62LvkKzUFxegFXZuQYXZftFzFjXUZhJ5UAcYGz5JuNuLLWETnz24EQoVRBbRA5PGeg",
  "key16": "2F6dhDHx5DL3omwnowEjgJxoLdF1ccbbuckNVeWoxVQtmHENXzqDFnurGWeLzrjTgDwG7ts6MYzv9ww5yVVvNNMJ",
  "key17": "4k3UE4qJNY7o8cTnqux3GMy1DARg7D6Yu8yyXR9mQPMmwYEkVuBLkmEjAZVJ3Cj8goD1ijTibLagpU8F3sJ9TriL",
  "key18": "3h9MwPPb8ti4mTboBzMQDEK4jjTCPGmLNierhoZvGxoBZQQRVadWZJHhsu2yhfKwqQv9stmJVKSNKpnppbkPXXeV",
  "key19": "5Kh97M33xc7koVtXzRgthMCwBfA96CjS3cvvPNBYA4QLa7fomuCgw21esYYWwCpbEhhpQfmvEbbmAwjhLtXmCiD7",
  "key20": "2Q4FpeiRhABeFAAxak4ZfmWXWuCuoNcLaviD5QJpmzmHcDMK1iATUtfdaMznKgrz8xgjN11gRTweZjEyCagLSJ6f",
  "key21": "4J661dDDqyrtKKTVKsaWbdvbiTNjoUendvZdvqmfMtxxtGwkpgHfSRBJzsN515swmpcGDLzLosHGbFBmyfTK2ZKS",
  "key22": "2vSMv4LnLtHqkJZCzsBb8skGGXHbmc1CLUdkF6wo1ygBTGL25E5hLLzt24GdW5Ktn5jjoAqCfrmmKfHCcnxVQR1D",
  "key23": "EdiDw67eAD2iSitigzRGMw6s1tLPmGC7GSHcvw7PBbX2yob12tCXETyqmz5xse4FmVLFbbwhGRs4dAgagd9uUJF",
  "key24": "2o7yhHB68TLNaHzCuirif2Kx18oquo238a5BReCtMd9uVBb5cRJw3UkAT1nfLqhpNn23khrgYWQEirtQeeKQxUL7",
  "key25": "3Cz44yumGBf3vXeHzCKWrq5P2zJQgaVRPe9fvLRxEc9LLT7oZ5X1mS3sBY5MLEs4kZh7B3UpATe7uVTC91gvFL6H",
  "key26": "58FR7rvhRbhc53bactQ8hdQ27rV5sFJJb4xAC2F2rKhg9FMCS1rZyePoa8SSuFVyTgnGkfM6rQTb2EbTuvak1wx",
  "key27": "4pgEQQGFaccspZW4CAoAXcw49UsKwnHjikymuQR2P5DrpYPMDsUgj7Kr8xG1sereo9D1iXEuj5KhPVhymRbqGy65",
  "key28": "4NuauyNCZkyNNDvknuNTzA2qYtkpcM4BNgw6m5dHU5hefe6o7bTEuE5qi73auo5weeM54A79JAN3WjcP1JPjSf5o",
  "key29": "2xopZ6di9WhsomnRmf1HtRJhebSyEnKixmXr6M2mHsVBJAuT3tnCVdZAmbdddNkCPXPGG1nuBNkeAyhYtLELKKis",
  "key30": "2LU9ahsEWCvyvVNDqBUWH3diUWziSRN4Tey7L7PgxPuQtDMHbHAdzMB7XHzk5uiXnsm5BavWbofYTV4TXY8qfhJ4",
  "key31": "mvkwrLf6jD4RTRG3qJmNeCVprzcS5wEM2E6UA87JLC3zMnkgDpgPK3gAQgUnJPys4YsogxbyMqv3ubTEGu2kpAR",
  "key32": "33ruTcWjbXxRDALzVLJzTJq3NKvXwph1UcZXxdrsRPyfY6XtZbRyGAJHnegb3vvAPuuLcoysyVikh2GLhTWZbA3n",
  "key33": "2RcMWioWRX93XWz3nK1A6PNzB24Z9xjnuJB7eYgTggZRwTBw9Mfz9MdZFPd6YEN1stRAmVpDCGBbxz14tPof2134",
  "key34": "3cyGnXcTkp4qge9GP4zozto7uBLrimWxmpsKDBgbXaUCBHbjtrZSTrP4pAtTD6CXnwXndKTsQv6nBG96fJiEGoro"
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

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
    "J4m3YdQVUvbPtwLMYYwewaePRbqrvvnve7vHoRJdYQAtNyu7TGtz1WZp9CtzyPZZvca1xKQUgBg8ceWEfZDa8s9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xTqBLH4do7VHFDRZ2DzM4SrxrkjAk6NQpJtBFjfS23gfSkm3gCEAbHTKEemnhsdCEjQisprURUmqqVVegL9aPDV",
  "key1": "5goAjERpSL3bFDAcrhnARgjX37aGQKAn6FjzjykeS8uByCZGuXTC1zNaQNzjxU2rAXUeESTtfrYASK2uivMqKpnZ",
  "key2": "5tA19h3zQBNaNzKjxvG1tWSq2NJSFgAEdNzpufb7zv2pJnu5HHgAChH16V4b9RkuhacyTQTYV1JiytbRM1UoznuP",
  "key3": "3FcsFg51UUe5fh7eTbgtUPCCG2AJbuyXTwx58o691CZGGu79Pgv2V9K77QamiL5N3LT9a4EJoPqJYhTWsJciJxgG",
  "key4": "2yiCFSqkp24XWP86R3KzeWwuXdwvjtRQw4KwGcGga5FKhd1BfVB8zZjcbuzeu5QYM7z2YZ2yALmLRWtGaXrF1e3X",
  "key5": "3epLM1VPP2e3tbYVEo9miaaS3c5yEivT58KMXVzQotgCQeuikW8tWbwj4xdwtbH3bsU7xPWWmqcC1La2pwQQDJhV",
  "key6": "22yeKjvmxThedkiywzUt5TnUZJx144Sty8xPLXzXNSKhb5iiLrhz1sskz3eyRw7kUGf4psePwJoujZ8JmiNW6P9B",
  "key7": "531mQ3Gzs9eMFr2n8HyrtwcX29izp2a3xR3eXEgKZGn1HxUZooTxL3Ezach4gmpeauJZQ1193QeBigrjQzD7jddA",
  "key8": "42aPhaiBuczHWDMeVk9CvfgQHMsW62tsKWnFf7geQs1wschGx312Venqw44N2WxE5kPKZi7hEJVSVZmgp1DDpNs4",
  "key9": "43Zgz26QQ7Tqt3PByVrPUgB6YJXShacEUFq4VaA1fNwjRFW8adDBeM4rDFG29E8o3aJeLUyexkH3DrbacKE3m3EY",
  "key10": "2X2EiikkS2VwA2QSpGLtgvBPBiKteDKh8HjKszNZ2eS9HUX8LEnPBPx4Zh2zrZrhj2p8oGUX1BgULqc4s6pSRWTn",
  "key11": "3Zax6M9uWrg8o4JpNAD86oFo1fxUrs537LxR5CfY2YngXj386BiTtZoDhkGPmW1327bBsHE2NPFuZNRomt7o4Cxj",
  "key12": "5hSmxbA7A5pqoRevktyrf9umh3duZQ6riHD1pjYi4KzfS3eTLkSepE4iSiNRwUd9eGGoMc5HEkFKbkLBYuBUFLhF",
  "key13": "5MMY2sJHQ3uPapqQAq1wArDzzzKQBxsVrXocEU1szcbgQZDTuCQwrKczCxB4mFuPT1dHmnm2SxYpfby5esK5pLpt",
  "key14": "3EoYyLChztj1Ljk2zH7tJ5Yh5epUS9th7teLLNX2Q4oRrF6YueH4dFkjKsbTnMRea4D86zXRJ8oH623QxcAxFYfL",
  "key15": "4z4xonAeK6GH18eNXVFNXbiMMWEEizwA1sCU2mqGVXdVckLqtKoutr9RgsXPBcEVZXsEUmc8ymkRDUj47rgzcsvw",
  "key16": "3vhzNVNu5DSs14GZQBeTdjTUk7WPVJovzybKzsJxjE17jgDsTVgJBbuzDNigjhpNRbmEUNNVoJ7jP9RtYKQ4F2gy",
  "key17": "5qvk6Uda12395hNGD8TCSZJHAVgeeQEvZ4qFPVDBCG3pDJrFaanjcppxZJVxo71qbqytrGUNzryu19SsoagxrxNp",
  "key18": "5NPF9hkpQJXET7y6Ct1GB7zqJngEEkEn95Hcz1bToPtjhM9aGpqZi7DCQyGvgXb1RwhSQYk43t355Vskbr7DQiVV",
  "key19": "5z4sptZ5SY5VxyQqsLiSvLtFxjHX8T4aLtULcVKxAgZe5i2eRdaTrRHZrjWcBBHbWv4x8PVZ7EqvvGJuMhjUfeRB",
  "key20": "4KGuGdX4wWvgF6f8qgMMVguUjwK24WedSUrRnfLq5XD6m23MkTiaqXzvxTDSPxHzZ7jFe4rTydQfLjfYCHNqyCEa",
  "key21": "64BDec3ibMbyJitCRybd2o7kRLzFwJhTFmB4ztqBBP371g8kWNrtJsS9gD3by44d7SZrq2e4poy3oat5cZiuEqyz",
  "key22": "FUrLQykb7SW3Ai1ZiJPtJXGx5btt9obBhwkuUW7fdpx7fK9Esswm1wLiRbZuUVKmQaAyzaVjeyEkRfxMJArnUpP",
  "key23": "2KYb4AwDxcGVrKsCJUNTSu5z7PzEJ1GkfsWrxYCyBRaz3v5yuqtyvUXMHQCLHw83vYXpeZUyKCPUhf5tke5v3AS8",
  "key24": "3XuqbjS13dx2ZbeeqSc96nvQZxMTzHYYu79zWiH1MAdWmpd21Xjo8VqGFC4ofKEhzJpeJxXpDo2yjxpj8d7qQaon",
  "key25": "5Q16JdbrMRkRv3xLs2kHKHWwwxNSgQJDL9ZURLtHg6HsKMNt5SSEGi9khXZMwb1LQywhCt1ohagLVXg1KJofgf8b",
  "key26": "2a8oaHwR5wL7cPtaEhyYvng4KaFrr26gwjrvAdkoz1Jk9DPYY5wLTRbD2H8LxDUKeQcGMdW77Qug9nxqzvwUu318",
  "key27": "2cCYTtrGj7qzKPh8WKCM3UtffVDKDEQ6wgoMS8wadUssbRq9T5TVLwT6cpsMoaYLfzep2tecdrhgM4yhtUZ9p487",
  "key28": "5PmYZ7DGPhePZqieBQh4xWfq8m6iTinHygPioz3rAMcNvaove4xckhdqS8C9pA3E16cVoHuZeP8QKKsCBMK46sMR",
  "key29": "5JSR6qeL9h2dj9RU35ArUH5EtwYYwrTkvDXsseA4VA8MpvVBA6Sn5ixyanhdJEQk8n1zELSrPkYLrvtBZGNwHJAb",
  "key30": "49JChTEAMiBxMgCRdL7ZAD5gaAn9V5G1HdeLfSo6jSN4Srx59xgZCFpb9epkPeG1PMuKmJExEwvWb4jHGRCfq7DB",
  "key31": "4WcWT9Vxj1HbrZA4Vzu4DKbangVJBvYaCbQKfor66bSjZz7NB1SCighPfd6YGUBmhJBpTtkKyy45tFmVHqjvYYud"
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

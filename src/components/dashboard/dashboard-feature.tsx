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
    "2eTAqN6HdwZHCjnmAX4CGvKMytLrWY1yCMtq1rKoc5eQZBTcbBCWg5UFHQuBYx7EvSbhXVnQiDp2SfaMwamG6aNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfzPT4ipSfihCWrNXiZJAJ9V8Sm4sCZZ7k3tX9LCSf3KkAFX2J6rbUHDiFhhK5J6eYejgt5fcNcWjPZCMYo2ien",
  "key1": "5ha4Xi3CDeYnYKXh6g4ngRhaiNTjb4UnVbQAR2H3Dh2toQxTKKpafaMWcHoxRppB8E63UE3W39tB4eWeQbdtgfzz",
  "key2": "M3hP6sP4rUsvhZTUTzE67x8zNndY27sjmvLBGECzum794YqfcWDGnSKk6jcynqugt5QVh6wjQXtas2y98amkkpU",
  "key3": "4eQA3P2gXeR7pcSbEE8FZivzpr318UyYKSNSmQ4ehaYc9rpy4djCQTWoEAx4Nw5xh8kwQEBBJW6VWapZFmroS5Zv",
  "key4": "9jJNATby6MfjDMXgQZEfrGoZRBULz9Sd3HFzqtcgerEWPvrQ9rpy6WE6WxRFLUeAdjiCjQ1Wm9f5brpPMKx3FgZ",
  "key5": "5ykXZ8vsRXBRoMmxRyqKJWHopN8b19pfE4SFETn1jYFiFgmSZQi36HDnj9dnGrzEAw7NU54VUC7twLcZCR4JdCT4",
  "key6": "5RwpncL6Qymujiu1ZGZkED3Hit2ppALRjikCUQWwLGgQ7EZ7aCVgCXGroQpn4KynhgWXMrVcETikQJcpgzw9jWSG",
  "key7": "tdNGJwza1BFqNGGQQ5UY2Vm27sCsbcbxCP6nJTYwLChgrD8wgZuJgAaNU4J8KqzYpkgxoTVz2JDH92Dz2TgJAw6",
  "key8": "5QqLanJ6rcFnE7dsHvP6a9eEBgUNWeQWrxughbnBeY5uXicfrhR2zgLRPXAM6gyncLRzwB7QaoWMrfpZoyuEswjK",
  "key9": "2hzuXY7FumnnoTLjRZsWwhwogBwFmDh2FQ5igGMB783SV64EwMwUcbE126KhMSe9Xwk2PyA8pLx1wnzgvSjSaskx",
  "key10": "EZeE6aRxL8ZQyCfgjwQViVASgnTwkLbocP9YR84noNWLr6reSyUdanCgfSebYEkeRbrKc5CQFk7suEyVtHKShvZ",
  "key11": "3AUQ74hT8ytRWtJuqToAmQnBXdqsULSkhuvega17SD9zWCQcL7GdLDbjbRSswegWEsn1btdZAhL1rtj8nCynwpFd",
  "key12": "5mKCgYT8uXNNB6RnF9VpHKQkiiQyPSMnT82Ng7GwPhHcKSfNbJyin6cndpomwwmVPXoWVG94N6TGbQJUPXjGwhp4",
  "key13": "5pRtmzcbcNZjwDGTDAAZ2ajPLbnipkew1hgjpfKRrhfMv3jxvAgDGRBFXuj7szmcbZkYKLFt9fzuQqwP3aV8Awni",
  "key14": "4JctkeDvmcKxmmWDiP8GwZtduWw9KNSoLLQ8ufPyKtuzair3oqDEvUKhxyHvG4Xi3vYVJ2uXj5M7FurPq8YTJXxJ",
  "key15": "2qomaw7VT26KcMpaoy8FAwjgpvcEycfMV1pJwAAx8wrj7xLPLCWxXy1z8eBeHfnAsHccn4BYAGjW5viHJwnq41XB",
  "key16": "372UquXRGjKfaAdwoVNMAG5y5Y8RN9gjyLSpExwU5Up6cfTPWHYGqrwTCTko6GRm7f7JunEyAm3CyAjm6yiEBtU5",
  "key17": "5Rw1p5NvzMihuokQDxAzwJ2nn2wKivYFgeAhWhZ8AmSX3aMMcL2xN2Wd2J2MuVJZxSHvoiz2crDxB1VhPdx217Yf",
  "key18": "4GkceQvPb5fpSedycwYpXp6JwnSQ6NTzWQ9yBjRXKANodxqyT6B6duAwMLbPDA4TJrbaMYPLJ8tA6Tp6cZbEAepv",
  "key19": "23QaNstQtFWm7RShvXrScayMu8Zvc5jZUiBTvXCLkdAkmvTvfHo6wfqEBKh4NDcJuZxWs2TjSh1UFv2NSe7c9Z6u",
  "key20": "2ynWHgDoT5dfUf3LKoRmgKJE81sxtoPoVKhtH9LHWaK5CppUzMV3EzrsV2z4n8f3kzA5cSGJDFGqjNPhiJSfakR2",
  "key21": "2DPk3o2nQE9KsobfQwT2KVkoJ2p5RvBCag6Znt4uwLieu9FM3WE6GRiVCvxsUGiVPFqUDMUTSimLzhMTgVLu6eUk",
  "key22": "5Jy63ESeJLN5q2raveZrymfSEM5kZri3X5J6oUJiKsoQFFv8NqjXKm5aBb1pUPtf3gjfPdyiQy9SzKoWPsdmrTkB",
  "key23": "5zPkoBJKk1is1doFA56h7drBWuscMVJE6waTyTNRf5ve4wkaNM3tibYA5EYc41dX5EFEw1iaCyRTbd6esZKT4h5Z",
  "key24": "5tD1f1kr18xf4qqpKHdfUvi9zB2WewoAHZtefFJA4zai3Z6Xmu1P3F6yohk7aaeP3GBLfk6cW71pdfGYUjMsg9f4",
  "key25": "4qvXV5WF2Y58pWhhgbWoSKKye5szgdycqWv6xujeJt2jaX3kPkaCuHVN9QPSi9Cn8JkwKhva4MGNLsSwyze51kb8",
  "key26": "4avZazraV7vsAmEUFpUFCvFhm44gizPWJXNaMeQbuWfBwtz3HkRKPqsEtEuhYXgfa2xW4RBTi6sPu28NVgMrCS35",
  "key27": "2faVpuSpQNhqeW3n7nmuXVRHmusL5GbLh3PjT3GU6yjFgxDuCdi834T8Rrfb1rpXFZKAUGx86A8kM2eCqkdVJr4R",
  "key28": "5HYutWoj84QWkaUBjMsszYoveWJji96DcNCcdomPxf4SakdRj8RPvxmJwobFCG9xXWRHsuAaqyXYPgVyzjxDh5RE",
  "key29": "48rUaxNh5vd6YxVuSZFoNyCtnDGW7Yzifxq1rDP3PtFEQZJnFuCzodFrB5QsNq52wCWpGLwJUdqEMSfmoEBUwpN1",
  "key30": "2abiWj3ETi5Sx9dX7mxCCzHs8MD7VztW2fjbvi1m9JGJMqAfNjxf8teRhSuKkTPMBmDRFpskdSby8VGd2qJeKNW",
  "key31": "4TmfQH7XKakbBgJFjPNYBkxqzee87KVPbZLhXVrMGqXkCJban2JHfGktgNoBbaKmCBA4BmMooXDjVhWtG2tUNpDy",
  "key32": "3rQuLuMWHXbepAr2JeV95w6WENAGJ63RvXf9LoMzerTbrPmah2ETQ3jbhnBoggWpeovzh6gXDsYNgHwXhrR3y7zj",
  "key33": "4Sx7TWyGw828jepoz2KEYQWy6ERFofYHVa3bwhsWBA5jUbepftY2J1asqTDRcSRXmfPfHaohUzuNR3k3u1HPKQQ",
  "key34": "5R5T2b7jAiFDkZdvKKC8Y9h1JtM9JoMP1esikY63JV5xGZHc9JDDSYyaCoLSZQzuREauKUjfJYwphfX8GgBrKxAc",
  "key35": "2TFyJhhUQva5Aiv7aR4LuinsGYiuLE1du1QJn1iT2ozVVhu4GZoA43Eb6Gsntx3z4F6tDsCXY2gcATANm6fwNbys",
  "key36": "42C4csWCa8RWBmCyrHkV84nLRehggQkcWNAYZ4YunwvRXBXhdCZpS4XXucw7Ge3PHiv2Wm6Tjg3puUCQMQGfiRqN",
  "key37": "5jF7mm5AGWSGCvUdM3UgR7u4oA4GKMJbVJMLxGx2U54cYvdvv4PH6TnaVh7eGERiP6UtjezXnXut1BmCCgFm3rSm",
  "key38": "23afa583QiDXhpimbXPLyHLnYaF1mYFMkFtcWUx7q3CcErgGVPVWqKX4B6vJqDVfPPCzSZ9x2L4Xi4qBJf8HnNgJ",
  "key39": "5aHCnmA5nnK1bhMtWTDjqicm6kQK9YzRZCV7C4ehdqdWnQJM5AoFucVJkDqJwJxT4psCTaqgNytMxesMprqFFGUh",
  "key40": "Qo3R7xhfZMGwj7tQGA4tVEkcPttn9DV22poT2fFsmx1LcwWZ497tGCDbYxVJCqwKqoQm6tzo1xpQQXdbMAP9gRk"
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

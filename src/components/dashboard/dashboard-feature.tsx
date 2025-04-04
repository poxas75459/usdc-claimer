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
    "32DBM6iQdzpGm9wpxxnpfM6ktPvxAEbKer3wJVvzaK2dBk3TettyboNXggp5LmRLBov2989hp1oybCSMaPD9ZmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mC1rJ8EUgsDXW9rMpwmq6m3tu6xq4E14gC5WzkL64AP1xhpZ2Ai6rrGMjk8nbKzysEhaH797LJTRueeFPgc63wm",
  "key1": "ydu6EvJhj8LXv8kC4UZ7jutTUym5F5cjPZ1GqFK1YatndZW61kiQDCpEzKpHpcj1hXSCuqefkw6ANrNBn1RdMtW",
  "key2": "aVvp8LKc4bsTnvnc9FemVdPWCGBrbCNmcgitkoj1nX2hSzxBevV82MWKQy8vEQNvCQBrbuyyPiUJfwzqgUWAr3N",
  "key3": "4t9hpH1HbECBP5VQmXibh7RpEj4vAMzr5rTeS1wdNjMxzTb27gEqGihjUqWT6xaGaNAVN4kwfeWVQKQVpC9iAWYA",
  "key4": "YZo3Hjg5oaCwD8BWbNFdAVkjgRM1CCBktBFWKVxdSs7kjAyk8rYvvUhiq8fTgEp8vMQM5hErPQYSas91D3MDLMW",
  "key5": "4AJFaSEM5fiSiewg2ctEVo523kfnAodLdQVS6tnDFHuqDainpBeugi6hzXjbPXcipnkEJGKVQNuEnctqNwaJrzBy",
  "key6": "NQjqQEbEVNWhV8uJRDhtkS4Esm8ZdB6S5of4N2ivqiZh8DcbrwzBEkyDJQxkQGLv8pMFfBZnSDG5wL88kFKLEXn",
  "key7": "39LsgvisZkFrPmQ2zKJz9rK3mcj9jSZSJu1dFYT31SscND9pcixSuiehV4H5kjCNRVTeCqm7ADYipUgQYRto5TQt",
  "key8": "2chQhPpGuHHfsVG79HsDw6Qe2WM4KB6i5h3tm23J2sMyms5hpdxK85hR5HLgnBsqGgxhiUidhgRZZEAJiXk6t3Kr",
  "key9": "uS1MV5nD8R7xqoAbnihc9MVir5MVLfVnmxntPSUPuEvxSyL7fWHDEHyVd1X6n7mLceUFsKtfV37C9XtLNnKCSgV",
  "key10": "5R2jYQnGYuLpwGgfTNn4dD5kD99N7hXCjSKjj762AhERSHaVvEMiKaV4NQARwLDRwyqUYZbkwpYmX34FCiweAmBr",
  "key11": "5hPAVb8ZSmQNSFKVrTQ677mBZxycWyJduadiMcW35N2ezpPQPUJQ1ubJ2dwi4ENwwrrGoCSNh2J253ZhrKrS2Mzy",
  "key12": "2HWq74eBSpK5aHHZHfC7YjZK4gfUGN9GCe6Jisk4GV3EoGWuMvCiQ4RSd8bdaquGiWua3MkPne74czUZcGVPHWmu",
  "key13": "4UUiP5sqcvkrW5bXj8fx55tqeUYpuQJona4Mx8KLEd9ChT3ygyS4sTwStQBn7QMZvnUxEQoa9gcf7P8K8jFk1EXa",
  "key14": "2ZPvTHasTUWmsJoKC4prZicKUuueLmcwT4RCFNWZEZirwVZP6PbtE3ymnnqSJucJQALfvstPsCtZQid9j5v8iEVH",
  "key15": "4zohePjqe4fxxXCwNWLKHhYoNJesv47w1jTpFwTo85iuTy3zoPkHJ7pVxm182jwmSYXUdEG6yLc2wM1aenfPFEmT",
  "key16": "5JAHpK57whFoPNCzCf3nurZbkeM36eL3yxqAXDXZbqLeoxfn3zNzZAJMEFd6qSciBpEDS114XgocxJJbbBBfFt5h",
  "key17": "2AaTUK9ozpkvWUVX5G6SyDWamBq4FkSdavGroBfET6B4LoyMjMzDK1NLwyMhnYNZmuBqehZzgcpeRr1ZmLVsx48M",
  "key18": "5nULujF5W5CGFk1BRkwoXYXac1VMcBEnpW4ZRtKhz4WZhh23N7iZzeMVrBDYUE8VVgPmAE35zv4Ro6tivugYnKUE",
  "key19": "3zZTyTwDMVei5Aa95QEc46c7q6dAiPEQ2tZ2LALMQiSFUCwUFWpjFxwRGyajeK3ZqcaDg2pFSnfZEWADn3x8tTvA",
  "key20": "4589Fuo9NpSBFArm6qLKSTJHpxhLrBvVezFJSdfsavsK4tAQF4qxKhGErzTsQpLtJSVd9MmBY3bQoV3n4869R7iY",
  "key21": "4vDrYZzBTC8wR26r3X6qKYrTAf6RpSGumw5CFSXb5BjEkQXShT5utbE48UL4JJ8zbcgTZQtU8kFdAVsgTFhbfemg",
  "key22": "48F34Vk8dvscxoj7xy3ZrUAirkdUASKEq6yYmndeXtFLeJANFHqzXCeioa1qPfFQspMeuBEyLZ4iS2km41ykaGct",
  "key23": "BMCt3CS8tkamPVBvfK8KMUxePR48cNyMgr1NvzjJh3vQS1svkVYvgrHZng5mxwvbS9TQ2rdGabU7rGSVAhJjYfE",
  "key24": "3pMaR5L923V4y5aYZQHLLwWx43hNkFAzekBRvFSqKSPnT4MiL9jGG3PURrG3DHTrcn8qpUpzTU1o4NfJbYjX6okT",
  "key25": "qBSGdpkAXPafDkHhYaS2ChTKHQk5YwKv8MRojSqDYmjPwsrcYFGUxkDHKhxrVyU6zfD5qSn27W9pvDpT5pYQwPL",
  "key26": "5CLY6HBsxmGpSA1jt8GuDQgzbL8WZQuCqtor1qjFZCrRmQny4G1WHvYupkWQPK9Dbg8bV8ZoqZTaosh9CwfMeFtQ",
  "key27": "8qZVw7r1uCAyXF45p9S65qmhWRRXfNt27m47GJVJLVQEPVTqoD4wkkBSkmeuqhGc8ru7AigUPpY23sa7P4t7Nkv",
  "key28": "k4ZvevXP7X4sKt9P56qfUdkQ5D3CwXpfZWGsSAnS9D5ta5zDd7UgmFeLi6QGwRayihKWZSs8Q7PGmgf4DRC2etW",
  "key29": "62RXQf4UTrwR9cZYPj3xX8ERVDEGjSTLpUovKnottiGqEDPukcTdgir7VnYusBYxdBtq9QkHhx5ZM6Q283LMHWDP",
  "key30": "5QHPB846MumFhScEgjveKDJpcpWnfTZRKK5WwwB5XBvAth5nsT7UcLnHF31ZZ2Q6S6qmiq1nbLvHBBCViaK1VjTW",
  "key31": "gFktTXmoWpdh2o9n8QxdfaVUgfHuTWWhxj6eWM2YdNC5Mkj5fiKjXqjdqmiNb5QSG3B5N2LT4NpGDwskKTpKA6R",
  "key32": "2Gzw1447VMxBRtbHGTFJszPpixPP2qMN1jQbKVyC7WiaxUMd4DPEVWBBDdrW4R68BL75k1Y54Ub8UJoLJmAw6vjx",
  "key33": "4391RPUBivuMiujD69vmjQz2QvMSHuTbYZjVRC19uZnQzXyUTwf4wGYsjaJ8JBVdgKkqCGoP89cS1m1Pv2dGw6ei",
  "key34": "2cqPufiHjnRYACLL8i9zgLg49z21eKKuBd2v3Sfg9R1S44Eq5QjbCPUprtPyM4kX4BMuRz6qJRLai6h1xW7p8MZX",
  "key35": "zgJZQE4FAXwcKLvqrDiBUTe553CADLtSqNmD3EfquGrdkYvh8M6GXbGmnsp7Vsq46f386WZ5rxTTjF4AxYCqkwp",
  "key36": "TPXBGdyhvySU7uYbutoKfbc117xBA1fnrMdfAStkJ2H9ycWw8xih6k6786tfyXRkjqQoijPwPQm8nJAo6eLDF6X",
  "key37": "1CYQXsDb4mxekvgmzsbHfhGQNz32DJfJ72MaHe6721uyEWgULgPZNWWs7d8VsTnbMEm1SYX1v2hbzJkaCtBKJGB",
  "key38": "4R7MUCZ52U1WSgWoDCiub1sPHQpdRoj9s45GndEACJPe7SMTiCf9WK4UmbxKVS68XKrT7FR2L55CM28TUsXoXwrr",
  "key39": "4tM24xyA3vzMfA8asXc8PPadSh73Poyvn6qBBaVn6w2cd5cf9XSUZ94X2WHFbtgrrg7hx6Ad6oUh8Q1QHwkRgZHa",
  "key40": "5kssX3y8vBKJR7J7xLHqXS9w6MShf2AfECbftpiJNiuUoFwEgqrGJiXngrnhuGm6DpthETXjyjxt8QdtfQsQ9pEr",
  "key41": "65BRPZ6ijdLWS8ZC8dwEVmgkH1Pegs6dAECBQGag93rrc6opmgMhwxmEHdLaRk8iYSZSZCCPrEY8cL3aytQjn1Y7",
  "key42": "58QdnnPb6zcmWjp7W4GRppZzDV5PTjuZB5Jy4zfvrrhTkfg7kx6bTeHLxsGko91zBu456NTSdUVfE6rySJnntBDo",
  "key43": "5kdPJFPSS4skj68TmH7ve2onJeqeevQptfoMR9591dBbG2CRs8ymFYPuC3JdZ92acEEvFLtDwtw1qFxtaY18522C",
  "key44": "4aTqztzcUp1dPRLqUZCNi6hdeqjeW6348brHKdGn6dnhVRojaMo5UqhpGZD2528QXaQvTCa5QCDVRwBAfY5adwXk",
  "key45": "5udE3XA4M1bGUzWuhj9jApKJ5CQoSCfSHjpksxyrFzix8ycb77iy7naiQW4NrpSceiU847AuCWzLKzyka58PPDHY",
  "key46": "2LsWxQewMANpVWCKREc1eb9vMFJ2SuT9uR54bZpMksU8m9zRkifLAnZjNLDAX4WFfidmUU9rG9SGWj3Yys9764V8"
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

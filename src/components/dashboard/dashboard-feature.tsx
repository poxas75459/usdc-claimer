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
    "mxfiFZm9J7UMwpN4YsxrfRNEVso1dJAkRpJbg18QP2b4ZEWZZGJ4VR83gBaBYVZmuNNyjU7SxUBowxmjQeR9buw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kWyAnYC2tqg3H9bMTxtAA8izB6eP37SW8sxDHTZaRYLtTwQKPwRERU94ovVPXpCMLkTN1fbP3CQZuifM7PYrijX",
  "key1": "32FPwBjQkCujTdsfeF7Lr4KmBPJd2fFoinZDkpwAmEWbXXxDXWjsPYpwr2971T2r9RoYkGXdprk2RqS4wJUi22zj",
  "key2": "5rVphn16UgJb1Ds3ExFNekdiJqEsQjoYVfdRBuZ6HaLgDRm9pdP7dvYU55yDxLq27zxAMFVV5Njbvqu2yUSgX89C",
  "key3": "2XdPTmkeXxjPqbVcvsC7iQ5nRwqK8g3C3EDDMbdg33FTVyC2WXcE9Uu7g5ZGvQxwS8vn6LRApueC44tf7oXrGGc8",
  "key4": "3eMoBjdrAcSvUNdnT2X7dDskZ9HLXErL3hVRGJpvsML4W4UwnDW84tzX6Z4eog3iYJ4JkPTbNzyRMJAuh66dzcMp",
  "key5": "4gB1Wp3KQrxD4oHfRjA3HdVS8cZhTq7ng5LYmiDJS9LoV83Wvo8kGuURpvBB3J1BNy81j5yW4Sk4HqdS2kTJVW6s",
  "key6": "2fRpCgM7TpY11vvCLTAvm3CCUC9YPQTVwTvQK2Rc8wLox7bBWKjhaQ6fM84VsubbBu17uKDjucGD7itU1JnjXqdd",
  "key7": "29gzWc5QpbpwtV4pRcj7r3mBKK7M8wxpr3i85NYj8H5H4bAg7P4onb7u4y9WXqHvEcqrfmao5juUu3efrxaPCGcB",
  "key8": "2mBcdkyuSQMowy1FSVo28nZwocFP3pX7w9dwWdibYAcrwFQvnL7yMvyJ64Ts6ncGPdsxjtF1w4qkQ46VZB7ipePp",
  "key9": "NmGDNPtrnqcwokxtzLY9T6tYJZJrMiqjEtZYmRbSGgXgFJpyjToQKukZNuANngvYXb98gEZUQwUESkz5VsPdBTL",
  "key10": "43U7NdkQHtFpNvNZseq2FqDutRxDkvNw5ZJQx8B6kQTC2KxaP5AZXPKw7RZemrPEtat62yPCbV4nn3ppVgBWhuAU",
  "key11": "21CkBLahpLSJPzgq6Cdnjg9zpmZ95QmCSTEUrKrS6R2bkLLKF6xCjm7LZEtQEgF9C9TB7e6WGCtsTpSvXXaS3yMM",
  "key12": "4J8oZy84mXePzs1vXrAMCbTJ9iUCuL6mytnpQNCEWwgJ5mmH9HDasQFWXFm1C3GLsbqaojLH5TCU7NUccJyyigcu",
  "key13": "64AVwy2vCY2fUB2UEXbrNdfYNA7MWeV7pSaJd2e1ebdGx5fhxyfW7XqVMTJPFFM26nLQsLVVMUxE6ChzeWnNmw2C",
  "key14": "2HCtuUHETxzW3Ncoi11RMQt3cZn4AXzGisxtG1nJKcGsLDuzw8VF6rAau1rSkmgcUZUGRWaj24tGixd4dntqk1CU",
  "key15": "3swZ3CtJrGB9SMXZY3BXnET7WmVdKxiCTGLPbwggd5fAqVGFWwjRsPjcBDmwhbRR5tzaenVKbqGU4n9k6Kx5HYki",
  "key16": "2s4EWizPrJHZaPsAvCjiLRjGTfR2jekRqWAd1se4prDETDqeEevvdUPR6swxpenv2XdAEbTSzfNyDwsMCK581XQE",
  "key17": "2VuqcqzsxirAz1obZhpMTgY7y91GNZZiNSXDTNBdfrwrMLhW4HmVvauysgPJjSLjjsb2ip91J1RodXHdyvyPHBXQ",
  "key18": "34AAkMgZ4SJXrHswYcb3wxt354swpDSNyubHVXNm5chtcs91K5hRxEyR67yDXKwH4F4BQCP6Jg5NjUXkgPimawyD",
  "key19": "9PoJCsqo2FsY12foxHJSQVNoBCviYAhyv4MGMQQSUH1PLRGg56AdFP4g95i1FrUTcdvr6FYfpxPL9oqiyPWWEAR",
  "key20": "2wJcHgfUYstvzR6QMPBdG8uQC6tBZ1FV4iB7YkrHLXE7iRuQin7Kz57ePtoDiLZwDju1aWf9siB2KqvPKHLEYzUm",
  "key21": "aU9TUdfKMwf8aoo6BrBUapPT1MejKcbY65MnbQDszw7UAf3xju5DXs9VMAQavKKnefaj6quhqFag2A3JvqNhdaF",
  "key22": "5THtuFt2XaHumQETHNtRCpfwBYJqbcKxWs3ttySGRxye9bwVzg6cdX9FXthyQzvRkcfrz9gBULg5Q5RjruYnM1Tq",
  "key23": "4K6nnQXQZN4qfBFBbaPCrQLAhhnbN7Z4UJUR4jKEgfRkycEyaMhzpgQ2S2Vx1t8x2bRP1MZxqpk6nXp9PKJPThKA",
  "key24": "4iJhvLUKGgA7aBktuDBC45zhymqVV2MB9rVePAh9GpmXnaLGFacFneUAsRVR8xJaVxbeXCQQ867UeXzuPTBx7GrC",
  "key25": "4daCdDoNwZkuU41fwNLiNZwdhPUBfBvxkrQvbxGeSQtQnSiaJoJf2wiiVzd2zHx9kxm61ruviDPjeC8oRsmSSP8P",
  "key26": "2a4tS3qgDzK5VBWTAm9sLtmCvYuVVFEwnofbgRF1Po8okeLhJjk97mxt3GyDEQ8UUnJ7PSLwEyFRJtYco18xsECx",
  "key27": "5gcvp7fxiAp524Hz2w2saCiPEcjQFFJ3Dpis3NjTRLe8M8ndBoKU5EBgucTVBo6nPfpDcw47TGTCHefbPDETvAt5",
  "key28": "2fjDpWs3bBqPdxBmbmp1dyvtcUMWMqVmtwHuHd1C8FkpToY1gqxtp2dL3sF4ANqamAL521qrus7vtFsWuPYDaKWz",
  "key29": "3UjHrRmLSmdjDyGfJt6RwAEUSHSRmx8aXTYgaEsLgv6tDw5CLVDZUA6BogKSmV5qAUTFMcCj3cmXypKP3GF4p6Bf",
  "key30": "5E3tWjfkonxRko4ZctRKZ4Qb7MeGV3ApbAw2gS551sqSysNprouTy1B3ukoYqzcasA7Gg4A4JemiXiZrpo457Z1G",
  "key31": "38Cm811VHrGqE7fzNd2q629oxb5Pd2A4iVCbJspXjS26bF36dJDXpHpqTnzHQ5YtFD1ba5RFZdUe3Cpp47JAAShB",
  "key32": "5jmwLBQjUC3Jq9UEo53pMGdhr19KLVdMn7KWdqQRW3wt6pqBN3Nj3hhmTqDpfFUCL51sMt2Bv21CjLfo9EGdNEVn",
  "key33": "5g2jiNmQyBdnuYkajSoGsd7U7FhmYetmTKbP24hNb3sQ3Aj2rJkN6kqKH2x7mQiZiH97dV1JP8M2HHnR41DMz2tS",
  "key34": "2X3yemYtnNTckze5GL69NUpjpKa7BEpoqE9hiHJrQNWXL3SKk9nY1DG4BYq2EeA1VeaQ771oYUEmEgXdmCGPXjmy",
  "key35": "5WeSRoa9Ehaa1vL5tdDdU2CruSRscBBtf8ZeNCyhDL3TM7MRERbNsAxDLfLwYwrzvVFYCmV7WjtNUwDXM9H5cTsQ",
  "key36": "3bEGx9BSy1e9pDchswQRjBwgFFHbMLK28SRg3HmYDCkeiGu4ahSeLaVhgAJWgNw1Y4t5WFY9ErbgKBpLsdKZpvP5",
  "key37": "2FSH1ruozqnQtq46u6VPKDBU8NrCb2Qzxc3SPijpjibSs65McArBc6VDRHhEM9d7W4EgGPLeGHBxKYVNjTYZu1SP",
  "key38": "3pSvUGDytmT7HwX6k8X69UeFfpiXe2d9Ju1iv9kZtFj34rREGmHNXNvVvhHyxu9xsCrumaMDmfZhAYDsfXFso2RU",
  "key39": "mP6625wfp3GDWwCn1u6mTMcVxRpihKRyTCc7hciREURGa1W6mUfdS4DHq3BwAVwSFgzxPQmwnNXoDbwf4hgZsb9",
  "key40": "5NYJP4PG3GAhJCzdoY5dDvAnKPyYGFGggSDVERLCfdVzzDgsYHG3wC63v4SwqSLzutdLCf6H1SA5d12GdKHGQXSF",
  "key41": "2BFaQEYvPbxYoVhQUuWD8LRH2STpkL6cbLjA8ZNEUEBGDhhssLtA95GdayHnNeizXYv5LCZo2EVGXnDJTJAptKXa",
  "key42": "5baSXmy7kpM1zMf5LBLqTYhHk3tJnhoKq5YJ1C3kUBT8G8aL5WZquUqKioW5bMm8FzJuqc2PzQjzPkyYefDQLU1U",
  "key43": "kXV1HiUaPr6Q1RoiLB11aybN9GzRjto87GdESAvEzqeDGpeXmsSaWvFdNFGV7Vcgk5HNizpafiphmruFP1WCsHg"
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

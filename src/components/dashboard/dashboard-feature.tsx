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
    "2ioTCcdQtKZ2dBBpSibvbTed9sMbPkBDADsLvbd4Kd8be1n5Y9a3C7DV3h7p7Yzx17kNFP97q9x3zZZFsGbJyvx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQVkBXNM2RWaqH8x7EvZi2ui7z7CLSKsyVGkZw47BQYA92B2fprwK353obf85P376ZbUEDTNYrfbjWaAnuUoXEg",
  "key1": "5fy6ohGrqeEghGBfiZfVosagcXTj8Xg9E2VxyEWxwyNuM8m3hfjYs4BCo6YyqKwyC4f42G3vsy6izGeVQWpwKJ3o",
  "key2": "2oYMufLfE1HY1rkzAwAxr2f3tRTUSUEjzzuxfzniw2FyYuBdFk647BXGJiBVS2MmEipD3BQja7VF4kztCoqyDMNL",
  "key3": "5f87Hn5J13JK7UxofkDF59QmG1h78awWQWfmXQSM43BPGrja6pzck2LtjNP7CBNHfCKjcifQ2JG7tfJ4dzQRzG7b",
  "key4": "3cDisZCo5s1h2gNnvmJrPXCvhByM57qcCrLV5eS4hgQ1uNJ2J2K5MouwAMAbin4ePEN7iLFZBndg3sSNkmuLMCxV",
  "key5": "4Bvoct2AzW6Xz15QDwyMbU5ppzZvLQJCidvJKcaBv2cLCY3PX9dF6zAUK2fmu6Eiaio2NZ9EBXGkQ4stUuCfa2yw",
  "key6": "546EbY2XpgzcFtJPXV33JjWMJFtWwtYE3FkywdNWtkFEFLeARBStVyzN4rJDK79dRW9ekYHgp14LVv1YqgZWkh4S",
  "key7": "45E28QDu9xLCnSMijep2sDJgQj5jrUDKoyAryeYcZk7ckvpHZsycBpDQg3fDE1jkDomUEsVZWkT2BrCSX56Aw3eP",
  "key8": "615Qednb37UJroGyFyzMpzDXGoE31j6h4p9F69bFNeE3V4yMHc6EdXAKb9izModa3oGKLmSCPQDNGhVu7ULMjRad",
  "key9": "4bbVYo37hUMwnQ9pJ4PX2UBr8n7TaqsxwQLW8s7WYf8hSzkz481BfR7Aq6j8YsSfWcFUrm9xjLiBFE3RkRBRgXgd",
  "key10": "3SYVkWhHNaWxuf3FUyQdLqFqCFvE8DDMEoHvvY59vVGhZPvSzDe3TBCFiinQZbz7ZM8KDPkNaNXYjfE4u5GChmdG",
  "key11": "4Nj3skUBP8zVx7mixJBTmY7X65EkyYRPZdyPV7arHDnrUNytnwFHZWstLtG5igFtnfP6Xpa5etic5bVjhzn14Yy8",
  "key12": "oxt512bKZpZdBmaswenSsjbzNgwAkXy89BTsbyaajAfzp84KKpnDyvjqRB7CrqpsyWuBujWjhj2n3XRTMCft3zX",
  "key13": "32RSoqKRGTB7wnGTZNGoh4TsYc2NNMxboa4BQ479GKctuS3j1wkZj6Xi34XvPe4cMEeJ8aK7kSRC9YaaaypaCgmj",
  "key14": "4zcHNMTCcphSqaSJieb8h4AxpzbU5vpSLVfNJR8j4HtWDY1VsW1syEbnYWnVBoeVmm8ppZPibePZLjMogssd7fhd",
  "key15": "3YHKJgKtNfZVCjFjpsDLqsoXdPeygC9SwXiRT1HB636TVW8Ftr9KA8zKDTqkczSec7KvXDBW9NZvvESbX4hb8qV9",
  "key16": "4EvmLpT2uT3JP9Cj9ycA8tmvxcUpgY6m1QEz271BUXpb59FtzPALGujZLc8EWQU8KPnrLmGnypjB4h5P1U7FRPUx",
  "key17": "4W9pdVGwMMvNnsZNqAU8nsmtLNEawP2ANtK8oFdSPS7fLQpHQcJvmx9xZdNBMYLsVLZuoJbKamabNRtdKufscbNL",
  "key18": "kQADx5tDMVjhCmNVeBY7q5xN87ppfGe3NZqPuTgfedFxnJDRnTMJVqDccd4bXBADpRvWCtm6CMR1V6t7fZVUcUE",
  "key19": "5oEGDG4z8uV2GFZj6khY4ZwPk5RAFisw6W8FrN6Pm8QLoNYWK3s1TB9bA1gWFvrjgQcAwPxSxofGpGZCGLmMsR5H",
  "key20": "54JfQ89TkaGrCNMEpZNzUeQdxysPpt9s4RLMMVnixVp2kUGD5HVLHTjQzt4QGZKkQMnnHeQcRNy3WNzRNt3V8fzA",
  "key21": "4YKmMyJW4paZtwAQykdSXfwiGeSWqj59Qz5uUMfQgTkjuNVKXHFtuVimAiHXWr2a74tyN3K1qZLwbJw8zC3cMVsG",
  "key22": "39yXWYPhaGTDsDoYLvhRpzueM7iH3dqkdHRZSBb6qGMyFPfdGCqaxpQfyNAvGbDYGaZ52NF7svGkd757KdNZy9mW",
  "key23": "4QjRhF7PuJApUpr2wA54uMteAi6tiwTB7WUxxeh7FwovSjwcYFDNj9UkU3ZLWruB742EMThTiMj8jRNhtt9hLUgj",
  "key24": "bFrVsB3Qo4sKPShbQkH381h9MWku1yCmw2bpkoPWjDNkRzssBdHJCh7qQjHgLdCtYhRUr2ietFjXoYnHLrSaede",
  "key25": "3X9cUAE2siFriwTS8Vgc3CbArnNbqDj7VKuvn4CQVCyrmrvj8zwvzdzWSeZiQTbQBP3T2oEm7rp9wjYm1SdTTXRW",
  "key26": "2r9tTEN4m6SzthSooSKwHPhesdKvv755ZyztCQzH8mauQi9b3fVLunwN9ebuDsE7tWUWM6JGsFf919BFvBahcw5i",
  "key27": "3FsLZHScRq9EVTHUXrg5pxPAAy6N5yQkB2BJ4F2cbjqwE1TsBGvrg7QZZKXfGgVBcWxxYnAFZBTb2rVrMiPKCKZE",
  "key28": "5kbwAzEWfNx7vTz3w7n3LDk5BxzpU8p612ehkpMh7rLNbZnyCUsQAsJ5L76DQnhmUXcxewcrY4m8g4M7adM3Ckro",
  "key29": "3ru5hoBxWS1i4MgDd3dWryMRaF1udkK2wqE7ZFHEBpgpQhCg33C4kbfQNACbnpChkXM35vYhMXg2ed9ubGR1v9a2",
  "key30": "4JH9Hk9fwKuPqB1NmTVApks9vN5AL3d1UTEwbRM8EVZwuJS1vZNCuRqxa9jvCZ9cCcnh9Cg47gKWCbMw3D9a1fiP",
  "key31": "5FBdnyKAPPypfHddQWrUpACbhWHs3vWu95crn1tf23GrtFoHnctcAy7h2CyBZUFu6v7iAUUeUcms6niHSKqP3Ywt",
  "key32": "TFwKeyqPYLjfYo9LJYHRV3jMHGe1p2HZ235mtgsUQGw1R8UHqKfYqAMhszrpgz1ZQbXqsUmkc4fwstMpFB54Mm1",
  "key33": "i8WaDiSW6Asza6TrutPW1bh9Nyuhrxn5V1CgkpB4Kwfprd8ffAW2roraMcqDBTmBQh2nj4Tyy4h8AtiMgEM9S6E",
  "key34": "38HKzNst9PUHcMrKMvekmccBidaGnJ9wYWGUfv76Yzpi4xPg64yZbVe1ux8d1wThBERXjYMpYuWKQcExbKP1Dn1Y",
  "key35": "3U6L1NsUUHNjC4fsfvcodMvnTfPXjef7RME9g8jae6pNcXLjznpvn6CxLGEJYmxFR3TSBuzorAAWQtqcDua7fUJt",
  "key36": "MtzP4cpvbEdYejwvNdx4fh5XqMd7z1yeAxVnfjxAsHGN6n6J9a8bNrxcffnmTGojVWxzfCiu3BCbCZpcizgW3pv",
  "key37": "2bpGjztrMVBRhRbFXuwaXMnvhaXK9DGUbZXFHLYbt4zA4RAzh42aKCNZfa6oEVYZKnYrU4fRAL45wGk9oiRqDbYG",
  "key38": "4TV81DSeLxBV4dTS9bhvsMBB5VEPrsE9ab4xZG3D6aEQrfTsqR2fZtCLMeNKGbBrEdwLRcxSmPMNzT37yn4RH8de",
  "key39": "2vxRCPfqSTYCgdHWo9bDR2m8YzqNbDWMRu7M78VR4NkJXeDVuVenLRDXMJpEZVfoZdmhbTsoxMCPK8UYNxZXM3tK",
  "key40": "4BVE8fjhePRGjdB9kmCDYXwvu2PdhhKz9iuhfL9XwZxLGZukzZxVx2xbzpsn6PC3iamwkWjf2gZin1cMfZPYUtKf",
  "key41": "64LdwWUkpzvT4kbwmXjouK4WroLoWykb6FHyyo9wTQMeRY7RJHcjTUX61FXZiH2c2FkgMamH2c2FZw95BBjj4i1b",
  "key42": "buqi6FTbmYiwdnJnFNeb81D42oBDvd8JQQHynbNnKvVzLNPcNdLvD5gn125qn8rHc8BWzkuCoaLNRoCLqjYHVkj"
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

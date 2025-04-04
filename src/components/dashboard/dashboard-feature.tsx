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
    "5nTmE31NMbx37885otMmgZdvgRA1u1YTeiQN2CCPR5E6AgQGkS5j1FpsxjBdHnuV8iTE6sqpEkgU3FsbBRgMfk3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dsCpmV5LF5DGa88HepeE7b24MKvBdSHX9GFLaZPAXLos5PAGxKMyykwF4Cry9mJ9Nb3DbQSV5av5CM1tob4KbZ2",
  "key1": "4azuJxBkZHKeoXtRJZYVdCq49VtphH2pnP7QpF14KX2SssZbjuAwYyaTVub5pPTvCVRJxDL4Vf66Eqm9BXBABfhG",
  "key2": "nQdhz6BpFq8U8cCtaeErNhTw93dqtfpXBXaWwtmkGCMQ1gxxWbZzRwQDHN5NyD7bdVyYvdmFYFEucdBygKjALNq",
  "key3": "398MZJWaxsYThYfUF8m9YhMPihViiyibGVoVHgLGnUkY39qk7tYBd6deSDuikerNJk7hyZcDjkiSVvFY3rhWysZE",
  "key4": "5vHSNHRKGkmtdYPnTZddyRW9oBY4NpiDUkrjaJEj63LNoNTHf7WxEbHyNQoPr7vZ5AZPbBhFJpvCdzpMaS8vVFgJ",
  "key5": "eXhmvJSrhD9LXhgfjEmF8w6BLVB9XzDnVY4izrW7CwvQSpdz2qMJ8M5EC18bSJHepJRYBpBArarxCArPguxuJBK",
  "key6": "5ecBZxLPuN63ACuVRwSgejjHoce7Y4kQBms5JFCHfi4aGsAfTFTFqMwkqLF2EguK9wY8EFEeet1aUA1SQSwzGC6c",
  "key7": "4PSAtzBykFv4gzrvGR2Ko1MHEfEDgNqGiCjEM527HqdxctRmiR8eJZAS2ZYRH7ywsALFLH4cgrxJ3BaFxbWHueUC",
  "key8": "52uATTsUFThy3xRKPzDTbr9Pj4XTWbdnaqhs6bNbJvxbYVXb1vTpW3MvF79cc2WQyEb4w1ppgPEgm2fXxJKQnbp6",
  "key9": "SquWyjtFTG9vR1kVHPF72x7wm9XdPr87u2pr5yfa8Apv3cu1YWB1gom7bco6WBdAsiiVEKGY64hAfvJotXviRLM",
  "key10": "4qFjzwgmcgypfzznXCQF2SNJzLCmPu2LPjw4ets8F5PmgkoGWhyARiiueX8TvgLSm22DVDjgEqcpDYypY7rGRBZN",
  "key11": "2YwrNaaFfxd9xZCFfHQCpy8ftuTihnXHYTjgSQcs9E6Xc467E4Bd7Vo2PXhdRvSLBwxZHn3Mgym4E8YUy1pYrYxe",
  "key12": "294YyivmHcUPAKGJw2eDDvkurKv7hypqyRLPAyfoJ2db9E5UgjTJKsNG8jcWHAeYrYbhPCtJ78HHaS9DvVLavSa7",
  "key13": "8z5U1ZcTT7hZqjMfUtvG5iFUWYL6wb8Nyc2aWohxgpVYVqgRxc3TgHerYd4GT6xntPgebpUgNbgFEzAJeefGb7V",
  "key14": "2UpJjYgtw33D5ezsa5SXmJfgVTfZgApHag2DcJdFpvzHbNh7i2VNY9BGq1kjLg9v8FB64cE1whU1RbozJkz2gZz1",
  "key15": "4g3sGf4LJkJGvuF1XRaY9r3ZhdzpRbyT3nLMCrbh9AxZQX2vN4cms2vTS3HCbxwMtFQkLuDKcjx7QcjvG74u7dNQ",
  "key16": "2JErAjVAozVh4yG5hMWTPdQckC6hr596yJSa62dyoaHahLcSatjucGMJFQ3QE39Pp63Evcnrk8992MGu9qb6Ea2n",
  "key17": "M17mfp1nJiT7Wh4Bg74Si3DbanGHLwtjswivESPycNwErpZY4uBozja5wPYzyaTdsra5xgPcjSsF9u1kqScFmqS",
  "key18": "46A5dTnoRVT5gHg5t3TGcwyrzjcBhVgfR2B5MvPfTuCTR1V7AZUbPkpT9TQzo27fy4N8NdbrAi7PDn1RTXkkLy8s",
  "key19": "3vdfPUc8ssbTGyQkbRkitUbBuZzuhGZN6qGmCX1v7KzJNYGhkkWKWs3J4wd3d5xZ96L2Xga1vtecaRaSbfqSJYJS",
  "key20": "2wjf2fqM1CJQJWE39bqQiHiYA2NNFvyXamzgpWuRcqWKKmDYcjSvbPBtXsVfQLdrk74HMthPYoAwsEF9vQuxLM4f",
  "key21": "5aZU6vJ8broJHSGyiQNVE3mBPMEXQ35JqUHtsRNT2gakkXHmHaRfBhN4fdfDGAn7aRFU7VbCYA5TrdbhX9nFdNhF",
  "key22": "oF2TAisWdAqBcyDHQ4sV2VwrRwQfPMwWB9MdHNkMXiEsm49jS9yktK66EDgpFg24jtijhFSqqn9W8QLAX7Efnns",
  "key23": "2jje77RqTvGSReKK45QAkNdaX2pSMxUicoXZwXHZKkmErQVZhePpTD76VbEpgyacoTAh7qcAKSUmMP2KJg4VosFW",
  "key24": "5tA7co9xR5SPXBz6YNzp8KJyuSdhZvN6Km2JEJHYeK2ecA1iiPaREio6mTqPNdzD7ziSGdvuegToG4X8xwD9ug8W",
  "key25": "5YBUTTHmwzHSURKDQd5Zqu3j1is7Z8jwjSr2SHgQbaPpNoSqjNEn3qrwgykC85gKd7izTZX7FB9XTLkm1tBgtaMG",
  "key26": "2mmoALhzQ1j3mz2nCenMwfNu8HJCwqSJG5JG2iVMWMARViPX5EwHyhAYMVmwePDXgoohjwbHjQecoveKhbjukrnq",
  "key27": "3nYm2QAbecPJ8rZBFVe5czQ7Xmi2B6kwCmAAQ8W3DbyZF7vAwQhMUyC99Y9wqD7ysY4si98dR9U3CAaG4mMDUN4k",
  "key28": "NTU7nn2sz1PhCC5GK8UfCLqCiLrxVAdZsNBmtRnBRurCsbTAU5JkoLzmaja4vYQ1An6yxp48eMDjUoNZFJLqQni",
  "key29": "5cQzEzkfbsSBTuSksvFH4jTwd3CZryFqUGS51DBr5oNd9SaBkYFD8mctQRTD8cztjf83Lxac7t59YfDDYiofVW6w",
  "key30": "kePhVdzmy7WzrN9DQpPnmARYpUsQuT78yCchyothgzSBQ55KkubJTdwyUjrUj1BqjqaEtFN2Z1THpfSmK91uPfk",
  "key31": "3hD2swXJzNYjHr5QvbqbsCuL3kc29bMLvuFUNgH25zLabCNjpZAzVVS2kKQmZcBHnidsn3ebJnybogrkWLwfb4WZ",
  "key32": "5KgKZpQAZPt2rULyngquWy9HmR6fQriPPvFLxVQW8omL1MmjqTz4gBJTJQASFdE6otupxuT7h4YxSGZzBenqA7g2",
  "key33": "4EZsvJKUGLzKJHZjXXNNFqUiJjPypgenJZsRuqQMpg5yGPrxZy8JwxDD5x5KhfVvrJTHRM9bt1xorMxLwCuemFNQ",
  "key34": "2nwRmU5yevohCCayZwfC2N5GQN69sV6VaApfuNXrmsXWUq6cMGC6LFbbiCWt2AeEM7sWdXBZ4iokH5EqLdzdkyer",
  "key35": "4s6QJnc5fJiXYLNeVNxH5sBebWagUazo91qzk73xHdrdjnRNX3kfrXgmnsxg3DAQwg2rVkwRpCyXxYAh5K6XG6EF",
  "key36": "3ZfnnRwCTfVU9HRBMd5aFq64KUtwXzHbYAEdyLC4H17mhHcUE7zNsBrFM14gjPwf7yQCivhdVyNq1axMyfuxGt7M",
  "key37": "2ugsVj9GMA8KhziUiu9oAhFnVVBBxmZxZS2eUv4NKeEdckCGmJ4fVvvi2uLxmEP8Qf2Pe132okA27iT3YXUcygUt",
  "key38": "5MAUnGTN8XZYC3nU12sEmeYQo6U8nFb4ggwbtooW9huETg7qwdVeHaEa9xAwnC2z3jgUnQbZzYnfWbC74hYUkQh9"
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

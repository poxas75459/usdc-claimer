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
    "4Wi6J8jCpk7YDwnfkUV1PRGwtsPKjJpXKw7cvQRiaxdRBYHQ3nmh2tE5xHouCnG7tx5khRQ3BMzRWcbkz8jaggpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHantdkXhWFh2y49c4JyXQzp1EiNLkQRmdpp5wXkaSB8phq2GCKX7F8Z2tFzWACBApSvWUKPPWyvmK9Uwo2frGS",
  "key1": "28JQ6j7tLscqFRGwDLEjXk1rXrjBiK5awGnKgJZEELqAgkba6Mq3vVyxfcVEV6twij7ApmndsVySR9HixSAvHQ5W",
  "key2": "3hzUJ7mxkQpyWHuWmMuu1fQGy26KJkoV8P2rQjwvieh5RsCoYrQW2fkBX3LsGoz6ew8gtQHPzu39utnK42qmfA5",
  "key3": "2tA6AaDcwGktNmPS9LuVTDoroVTjqFgAtZHPLd1iUciJhXCUgTdXZvFt8u4nLe8HukXgT3ZZqUoX1EsmCeA4yFdz",
  "key4": "3P7MbhpTgPFweL9PXrQayHvF4vdqsKXFEKno2uzbvxeRCDzm3RdW4RgZvfVtRY1ec16oWwqqHqALVW7bMoV5weRQ",
  "key5": "3N7PDFVhTpbGNt1BhYMJidGXyqChfuKmPxgtDzRVfqpYqqp1g1bhjzTuMkk1pS6t2xtAzdcRfmBL6fibKvLJp4H9",
  "key6": "4FymsqrcMJbcrWNThu5EX9aLJ47HSt4D72pBzd7u8GrXtNPcamzYwPvvZquZEH27oS7omdd7nNBQnyTYDEGCzoXr",
  "key7": "3pCY3yddPyGReiSgGKNXmDZunbwZfDsNQGnYKUGVjQDHxxQnudAdVdoDXpYaJ1WMP6GiPSjTtZZvL5sPcWsAFqrX",
  "key8": "3U9Dstae2cxQNQ93fB1MrWceWKGQuibLRvU7kknkude4qtzLy7TkTNbkNdfTL8MxxUSwzmDjzJZ6bHFDiKmhiqSG",
  "key9": "2TE95muogj3zxrMq9D4JXAkGtSmCjRTJfkhDRZWMtXBJYWNte4PN84ZQaGjCNzPDRzrdjitbVnG3pHRweyywx6Jp",
  "key10": "3qBJBSWHJ6Ccu4igS1CPLC6PiUL4VTDr68utqTd9vbN8ni5Zz2qKXifVoFt7EQe6qhJHWKpYX81Y4WbBuy4gRzZy",
  "key11": "LZrHPW4uEfLvrXxJXCLiyfeXonTKyCrvJt28Z1yppfGRSJM6iTDweFjpR24wyUveDrdJz9qFZzUd9tv4kvs5Zye",
  "key12": "4hEnMGyW4PEzQt8UF2tXkssVnMETMRiRfUg6mSYMMbCdQeyoce9abKKd5JCdoqtQUXWgeZd1ETR3PrDkejazMw5E",
  "key13": "RcFEVqCdL9LRYn5DgeRbz8kkhT5KkbHpSx9ZXENEJwHTYHGB1rFMNgUCH7zPPbjKjtb93B4qVxCzkWH4DkSaYbp",
  "key14": "4SiBTid3EhtoLEUkLQ5czdt9Cj6obfU7tVMurVK65kcgqzLFCTinFe4sKQ4hvu7K54bvozS6x9KFo6gwDF3Hs6DA",
  "key15": "gLadzfLjMPoxicczvw7tXnwVeg9RskD9t9VVsMJcRaWn9aVT5huMtaofiKeBZ2biWtAsYU9Ro9tsxpsCmPNhibQ",
  "key16": "2FMMRy4Y2nt83aMd8xErkfpNykBzj9K2VJ6MFwVCJ9CjqS9kUcS4UQEhcY1Zjfav5CaooVwWg3vP83WzPQd8ak2A",
  "key17": "C9uNwwELioVgYRuJdXkbDN8VkuwJxD9FC63sB8bRJHvhXxXxtgzXhDneppFmy5yhkK8VM5NzRtVRQvKzVZyWp2j",
  "key18": "5U2GaQWmKS7YyyL4kU2k2mDSU91UEi4bywJ3FRQNNTmTGdrmffSzunDSGpRzRsp2XN9Wq5x3xT68sr8j1QhzzNNs",
  "key19": "kT85ug64pFcigcD9Gf6xvKDuzuttu1rQK59uvFgAntRtsWNAtfPSD6rWnQEfhAm47o6vt9MVi8w56ovjvmu1mBP",
  "key20": "3LYqBRSrR1uWmYABxXx37Wo4X7PStm93E3wmzVaa6fWtHNPWTNXxhBWid5GG9kwABr37qyBHuq5wiS55jySd5RhE",
  "key21": "5yhBKoBnkktRKFCMyDFk3TcLcM2ioA2M4HepayNc5qPrXJ1kdke8jfDJizvn2bgCfLN6chp7TfKwdvTxHeXfrq4",
  "key22": "WMEVCCYF1G59kbJJySjduRke4jcbjeEoV4CDduQum6PHXgidXnem6o7Vi1uc4Qs1Ue6gaXVdYpjHAN7uAwrD7FP",
  "key23": "2sY45iwTUDkCpWFsqSvt7yB7Hb7Xc8yKVzM3q3FFDEjKpqbtPkNQGovMUUdxKDNsRxXnKJJr5UzCgrwrLKaHgDYM",
  "key24": "5iYAwUyrA1FUg3ntSF9woM9ouegYvfCL9oHXnhUyoXnP4T718yKohqtE1HFNfhGpMA3EEcjMozQS1XRPDN6SP5uC",
  "key25": "45GfRmBmTULn3fNnajJD9u9omLjeB5B69jiqY4E8dbkx8WpCUiyVhVHS79TZTyijTLW7xrcfwEGXpJwzz6Zo4Yxd",
  "key26": "2mrkw1xQ4eudK9tsHCQk1kjeu2eVBR7MYvhm4JbprN4gxr1FfgcyoRxYZYqGyjyT74HZZ7AkuxNraQVag3JNbK4A",
  "key27": "3iBYt5sNvfCZhfMNM6cF7341e4LQ416ZMPBtCjhEJvPbf2XGZkUiVihmjAunCFrvVgjyTmfw8cBiEGyVW3tYDqpC",
  "key28": "4eNY1mDrzJkCPoh349sW1XXbZxrEDP7y9fyJBhXwPs2SM3zn6BqSdFqCfRz5CNR7wS8QqxFqgEZrdf7uuLBgmfDK",
  "key29": "44Upe1QffJXuxKsK9f1BRRHGTjscwMZAgwo7SUmS9jQsNWHooQQ5tQQ1VzqUH9na8ZuAV2nHLYu96iPNWdiEjE2i",
  "key30": "2cdi9NPBZLJASimNU8HKv3u35e1ggivasFeK2NgDS7nY73nDvJttkq19LtPgtVeXafmDghzr4f6F9Z83y4fv26Eb",
  "key31": "5reg3uk8Zc1ewheN5aEq69RSKHfmCFuSz2cj3SMSFYW6NqWYmb7ohr2zhBWqeJaXdFeU3ge6iRjtRBrh3Gp5CNmB",
  "key32": "C2YisMk4Nu6d4bgxeww1ubvnq3n5zrjBqFYdbsTmZFHoa1UnUH4vPvcdL5TzZrj67BAwrpxribJkQGGT8XuhEYr",
  "key33": "49oTvediboUxHGPvExPKyPwG6fdJ5HzxkVyiRuUWiuXi6Y23ZXcT5vSCKzbhVi1vcaVLneUyBh9P4FGpto2wEXNo",
  "key34": "NjFV1SciLFYtDxJZQdibf8K8YVgktmesJ8sAeBXtD6ZiXEikhUg5ijV2zGhC87zLFLQvFfcr2U4uN8Hxe8t3ts5"
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

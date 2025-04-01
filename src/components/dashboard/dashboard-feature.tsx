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
    "5pB6FvStRktHrzQDUPs29mgw12REWqFUwURTQDVqn9cUBnWBaNGgcmsNR83sn8VhkBRn2PNwGoYRWWbKNtzdKRze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqGjA1kXGW7VhUUNaWmYU9tRHfkhzCWNM5N2oXkJPnoMppkjezzkSvtWNVmiAk6y8g6i36sq3Y3bBptJ42GWvge",
  "key1": "3X5D8yy4crSpdZDvxQzXErrKwDbdqpPx2FQzQTzUUzKXbRet1Vex1MCbRZQ9wPmKtrvB6tsKUcT8C4kfeeage8Tm",
  "key2": "33SVae112UhaC5WRoAYYYEGYu626irma5dks524VDG8Lepk154ti2mdBq8GG8EDgPThZoPuHL5CwnhyPEHksGDsg",
  "key3": "fuZLmJXqXySwGTbmQ42Ttr8uVSptzdXyDhq9rVF8o1GnbgeWbbUMbG5G6aQsnKMXnv1htmG8PM1YEWNkwSapJKM",
  "key4": "qogSLcNLCaGnMdSQb8qsF6kfHCm9joBMjFYTwKmBc3g8pifhhxf6wL1B8zsEvdbDVtaLT9KEeM58Y6fVbUKZ3a8",
  "key5": "5SZkF9XKQvbhPdKu99gjBX4nAp2XzqEN7Ze4CneoeRq9qwaM9zYNSwnV1FMzs1KJPkYBfMC5cc7248egWMiiRvZq",
  "key6": "398L9pWkhP351jDzuGJymgzdQ6uTXGSe4peodBKNFTc38Fk9WmXWGJm562tFkFBeUUpbxkNDpUew3v2RGC2MeWT8",
  "key7": "2DxuZXWvr31ahrxUsVVHjPGZEtJDW6dWTEAx6w2QVTkgFxVL6nBwbZ1asp7mZYZAebZpsbFN6kpbyrkPakxDkwB3",
  "key8": "5htpwhdbTA1Cg3H9fXwoHAkmRWSw4p1i59TY3Ewcga48NnvZv2hokTCkd6gUBSYG6EDCKwxqLrzLtv7a4ywhUUM9",
  "key9": "2Lpf729gAbJhLNngsowYh8dybtNXdSdB351b8Tr8Vniqv61mrubrn7pvtUVBQCt7AjPX9ydic4cZ8RkSDvcpKc9J",
  "key10": "2qyjdKerEm1LvWNFnCTrsPYdMoYNiSPiUmj2dSSZY5GWxS4T4FfHmvTD4ovQLL3C7fbNwJB2CbTqCeLJAzPdGdmg",
  "key11": "4yvWPVqeykKWe1MZsmWVrJ4j3yzWe2As691imj2CFSSnoL1x1AWbMV4JJYPTvJBxaRkEWjfDFr3d3svBQ9mkEwXc",
  "key12": "4oRNq27w5RVZkfykFn1ySUe3GKL1i4hcKE8K4i23JcW3QZZ1jF5S7DM6AVFXPhyFP1reWUQGWyR1wGGo8pRm23Cg",
  "key13": "38DiTScxNVigUajTeS3qaXeyiuLTEQpPQkAfeawpmYnwufsyzFdSWj2V1kr86tebvWfY4p9w32VTuvUbfUrazoJt",
  "key14": "4pcaxGm7nVAuoW37fSxWoSb5rkyYwebeJAtf9mUYfgYTKxfCA3hLbq3MpDZH2zCx94RPuNxR5PPE9tFagFsXUyTn",
  "key15": "2BNoA8mQSKUH9RDkPMmHoVQ2XVRPDo416cXxaPML68JzQydnzvw7Ti6WUEGw6aqVEeFskak6QUZBmrP3LYrWhqss",
  "key16": "KFh4QnWzvwmNxvucT54rfYKqXqbQA68nmBJsCGnUK8Y7zpxcGNbFNhR1ZDhYYNdLTNxuXfdBrK7u5cMfDLyZhgQ",
  "key17": "62bGkWJfCFuTrGUH6CAen9ZnSbrrDNENoTYhgpk3Ftg41djkE8jz9wageSxdYpeouFtszWGnCpVc6Uxv7CpriQX3",
  "key18": "4gU6PUyzoGjNiSDMHR8vfip8wciLM43Fa8M8KGJffU75Lv7HZKeMAAu2Hgt1Ya2XK5A3aVyHjE3hyAhtc29mp5e",
  "key19": "43sktTr5mSEaXhVU7g2aUuGvNyRkdiR94Az5y1htbJAnr6vTP9KG3uDCrLDWoZJkia8YWZ7BLdbcDG1z9uuAB2Rv",
  "key20": "2hAEVA4LazRvhvYUFMj1Q58DJUokD59dgYpp5Cp8YuThHpMbJHh7k9fe44NRrZNsESaFyWH7WeAxmgVZGqJ2LJ5",
  "key21": "4Y82zafie4NhwmZ5QXXcuPn5zxg5sLGMTsD8pSspR8TuRPewQHpxKrkNvqS4QNsm6a6X3iYKvypBbmrPRvVALJx6",
  "key22": "4EahQV8nf87c9kYybsqSZcgaVUEd2UvSjZVaNi11rN4wkW5rjgDzXhGAUkBvSFDWVPP3EoxYRhbWjAcPtu2Qe8JP",
  "key23": "2Yyi7LhXujNYWL4WcyEmdGw9wTd9ECGstxmgwFCC7UtL9AxMY4qyt6d6Fur1nxD1A3ctpybYCDXivf9neVSYfWez",
  "key24": "3bK12LUnahmy8QGQUNayvhgFCtaXZdejaBHL8foMB3JnTk3CuyUEZJo8Ta92UZLunGKB4HjSYKwJKEyhE5jpbwJ1",
  "key25": "3fUSFa65VwvkKHXEtp5QpCJQk5TdfHu92ZEgj3ew8BrPmGTWzyDhnNXeVNsUrwvnn5QSjWbGgXq6krTqHfLW9me4",
  "key26": "2aWuy2LrE77Tc6WDA1bJHMpzpU75kWyA9bsr5qPLRa3GQ6B5wjG9e2gL6JmTzfdNawQHDGYWzZ2KEMcug7fecdnY",
  "key27": "2LSNZqVWfMdvGNRuMAiWy61QfPzR5RzixfS98u3H3WwWLUoMhByxhpVErNRAjCry9bqDpenRmuQ5ua7S3Uzkvomw",
  "key28": "3HnoCjvx5bQPABVPRX1BNBZVmC6sDkWoXfp5rCfnGAYYpxhDHZ7x1v6nQRxqhMxKcmQ1j8DTW5TMgVGGCZWmCyYX",
  "key29": "2pb9DzZf4xK1WxuX6sGxaRER7ETgE7cqK3xXJ4oXbcLSi8AgsjYRy687vn1FrZxxLcP1YeJm85gJ7MbkgAnyxLTD",
  "key30": "25qGvRdegSK2EvprF8gBPducqEunimmbesvnZX87HWQsANLD3iuBjPYeB7LTqgFBnJ4qBJYRo6cftN43w9rJcSfp",
  "key31": "TYV1bLvjyJc6EvJ2j73FLna1YM8888LwoLXudyx96RcpzV6suzcA7iRjYwRjmYS5G6bCB2Pt5vcBRemoRLbTuJk",
  "key32": "3Em1HngBg21g8R2Pf9E1Jh7ry8jANMEuZprX7MtMk9cU6PMKQALUmnWb7inFjqdPFXtHVqz3pFJnaKGe3wyPpR5j",
  "key33": "q5A3k8o9hkdA38oeJQAftXbeeYpwjTt7qZBMknEvcRLL6bzGYzRxCd5a19AwF9dLSf5ecQGgJGKcDkHxFguUPQ9",
  "key34": "uzBpuRgJK4KJTYVnjcLP7xzUU94n2udKFKhNb43cWz2Q69Hd21znFdcwJ5y5ePCgx6dReYvdqF3SjQ9hspczB8P",
  "key35": "3FdpzTT4FHG76BiKZX4FXte1GKGJyWyMHjb88KZycfcPmSLPCNou6xvhFHmTNcWNFGJmHXivWdUddr5TM4B8QtZ6",
  "key36": "3WgPZncyUZZB9yYCiUvA8S3yRyVPWMvMV1UdPvFw2mqfqmkkW2if2iu9NUo9gbXFHmcUG2KPdeo1uX8x8ZsJ1R6N",
  "key37": "XTXKuAsA1s5ntcYDfnzgxb71QUfD1eMNGN5jbiVExaHtSczcn6ifdEcUfwgY2d2128fTAMokw38BotFKC3TZt6S",
  "key38": "Rnur9TAL1ay4ZXXjVkyKhV5xK1jCQqTptgo287M6wKR4XKmrBqFFSiatHXvkV9kPe9f4Jj1vrmLK9tBDEpjCVUn"
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

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
    "5rTUDmX9MVPXvgkZUz1w4wBeEDtzs9VL6j6pJFMjxJbnC2Sr2fbaCH5ESJekHHeQ7hX31aYxwTR7851PBte9c7Gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zc5QCxnRfm2avNqCdHqVS8BarMysSkbjzXn7bcbhcMbJZtq6bS2ixMp7BxYjnmrtntcB53zhwK1ECmN8ynEpRV5",
  "key1": "5PuBus21Wopdv9m6XnhrttWYEhwXeHrqHEh8ypDueibd8cFK3ChVX5UJAZEg7uTSRh9YSX8UKUvJCMyL1oHGjAcC",
  "key2": "5EkG3iT5vyJM9sE13X6n3M7h1PJwDgAgRPsvtcyUCzwtsjgazMD5TKCLuuxtAK5BQBXSniq4qn8RQ8LGcCzLLrbN",
  "key3": "5SqXpmDPZvtFsXEc3uLFv4mUYeKNeFckGkE35v6hZbsFnGcx4N32JfrECRmBh4iP2RHEhquxXLZwfNuFjtxkgM7N",
  "key4": "3166svb7UzRsQMJsrHr4zYfZsbyv8fEiEtupJdxpFsbDpeH5yJRUF6hvLij8DhNvVAkE3WpncegX2gmwEcJaNZcR",
  "key5": "3nV4jqeVMEFx7VVEnjmsJ4RbMZRBjVTNyJMhuhb6NWzg1bPrFmjDAXYaHcQTPgEB82cdnxuqG2zjZAGnNcZ8r8Lr",
  "key6": "2rAjAb9uy8DiayS4H5oFjYJyUimiMzZfSswcEmr1PXTqy9z1hJb1K6nJtr89jT2m4Tv9thqgc5c1eYypGKKHsZSk",
  "key7": "5H1MYzZbzThnpTcx7CNVu9ZQig9qTcV2i1R8QApJL3cLZZZU23QRXbCSDct3SJhvZnQDa2wDiPRseqBSmrkHt89u",
  "key8": "3qjdrYbE3kawCmBmmixBBwiWq64uyMWxrkVQLtyFWyMGRVZKUMrhbzdGDNmGwL5Ce7Sbq6ZZRQn3bU9ofgrjzcmi",
  "key9": "4QtLMK6QPffvEUViDXEes1Ci9jh3QEC6qUcodQyJvVyT8fbDUye1amfjDEuizCjWnN9zEPpRQhunuuS7mFtNGtQF",
  "key10": "3cXX3K6krP16kt4b6LLJT4UnMbJ54RbubdUQXmHJKJBWtgGoVGfubT1suqv3gFpFyehaq5t9bu5HsArsT2ozfExE",
  "key11": "3z6VSmNDm7sbAdLiA85ZjNcfkby6Z9YSKQEHcdaJfMuEJm3NL7B8vCJTya5suGeSUGSYtHWDVyygzUgjLk49vTUn",
  "key12": "3iyyNZPWbKfXzXoPfvHecQSnG73KvVgjue5c5eCkAspcXU5HDMC5EbBBXaKVXuF3eqDMzDaN4kdH4TF9j9vEcvmD",
  "key13": "FXcEagptbpDy3YQY4WiURDsyQWwM8HRbJtjSBWtmaAVH8u1eJq9jqHeagwrRrTCtLsHqX7x6yhKb3h75eQWvTRE",
  "key14": "5ECwQD5WuqUymKqU12LTGVRsYEBSWYXUwsRWjngT2tdnjQMJfJMFhmYdb2wkrrw3G8LNUdFwqWaeaQMTkAGUeQGf",
  "key15": "5jwig2h9tn6yLVgbPnpxp8ZZDHbtzyPCSRf3jXGCCZWJn7cGxBSTwK4CYuvRppEVpP4ihUSyR6e5advmLKex5M5",
  "key16": "45LBq6M94gmHqFYuZwgYnhvyASxTmPSPuqXAbEjvpAkGXGnfLRz2dckjWoZvbeJAeCMVEMYqs2mMbriiyvfgNGni",
  "key17": "5xTjX2K5HqT64RN7sG2XuvQeWRkp3KwXog84qQqrDPdGYzuHVZHiPawoBSfScThnP1XF1dVZ4VK4d7HDiJrWUNzK",
  "key18": "241m8baqdduRuM5EQfyEKhyxuBRjx7X9tHPongzdani8nmpaJdNYdbRvGjTBTSZCwoJ9utRk4QswbhdBYU6bAf5x",
  "key19": "2LfStdwzW3vaoZx5JrpVFJyLoXPWNuKHdd1jZAujnEQwFCBJvAfGcd2pprThCY2fNZBeAmEc5mRgWqNA5sm78Bq6",
  "key20": "5RUJdM7NfkRHaebiHnrpZ11144YaNTHGTsDnWpebfbJE2GfgSVC9onCHAEL114an4WgFbv6hozTxNhibc5S6GVLY",
  "key21": "4iDyy9SsVwyrkv3TQAuYzt7HEHerQuYpNFdUEhcomWZRsr3imPMJurcG5xJ7RPXGX5nVKbgdaFiu6AjL3KdxQhwH",
  "key22": "29e9wPhSWhAphtfsSjiaheYaBr4fvC4j9AUys98tXU4vj3FRfwTztgL59U8fuyoBuw6BRZmYkB1jugxKP6VRpSoV",
  "key23": "34qvxZ5ean21bGYFtkmcd3bpLTGn6vi8WurCT6h1CSxUcuqqAjXCm7pExHhGxvuveLs2xwnr9i8dirZPidtXVzsK",
  "key24": "41gueSLL5MTA3wzrcXpfEBpbpbELg73pwFLe1PeXjyki3DdKf417z6er7DdBsrtzxfwcJvtoVAT8bFKykLHrvGnH",
  "key25": "5wuvohBjg9XqsGJ5HLgKh23RJEAakkXfy7vMj3qMUTV7fyB7Sw6Kznh1pghSbqdTMky1cUhVQ5puBXWb2oT5ZjaZ",
  "key26": "4m74mP5AB4ft9ZpcCpdaDLBq6Z5UdMz8J3QshmoAYyhyQMdvLiNt6vPbXr5oYCyDq55mBrFakm8D2U2fQR2P7vV3",
  "key27": "5ndfhK5WwviYXdgy1MSDvsJ8LtTo2fGGejpLVnfHTp2vmNM77RpL5w68iUy3o3SZ9FDf62Mu71WKjPeBW8AFJ2nh",
  "key28": "3WbRqG8TCJFJc9LpqmnL8y25RCuagteSK7aeSZRLXEgeGT4cvJDr6WKQuFjesTkv255wwymznm8VmdppuWQ8sHio",
  "key29": "5VUNvatBDR92MASucxS6v9qaepuvyta4DqRFsCURLH739PbSoyNbJgXtKwH8tzsGHs8eAB8RmRgaEgkTqVYL4VwM",
  "key30": "1HpvRNe22SRvHW5N1A8jBG3DnLQDDNQNc9SPU84vkkyxDWTbDP9h5SRnagkAt1FTLMphrtEQZSXA6P6smQd7ybK",
  "key31": "CwexcwiVcmdHic8YarAvXh97ntofhpYLwrNntGXCd1tv1Av7GQG4GqZnAaRFq8dqB9avJhCP1GWUrDM5kp9Ngoy",
  "key32": "KhfnTfPgogvM5McwTx6EBjAHQnfwhHnt8DPPjttWEitovdVBjv22nZF8mEBR6ucN9XeBHyzS5hvvRRiyDrfQfeX",
  "key33": "296Gw17xhYESuQeHF26jeGuJb1TRXYCVifYrRQX1hVh1fkTn2PLRCGiHyrmUT4H7EffCNrgQ91jq2kudLASABpY4",
  "key34": "3Qq2BDnR21PH2UagnMXa8bHT4QTpgq8mvMDSVTXybvKV2GdGh9n5dPCiuV4o3K9EYFXxT1nLEuikpeJWDNnmSARr",
  "key35": "ZPVMRNVW6n5oM7VAbYksPm9okpncBMf2pQMeEeUAPBfXdhMgE2mBKi9RmPyoSQ957ezcrdt2khfz2YgFAkmLQLZ",
  "key36": "55ztwJMR7Pzyb6gxnuZmK5varHqpbgZWN6f6fch1RwTNszAAPwPhjGej544F83FWcLvAPiNUd7tccP69vjZ3qDgT",
  "key37": "jK2EKHon65nmEz5W8jQ5QDpa5fXFKT5ppHzip38UsTThv65xx4CXQ6BYnZ7JkP92GRSCoVoosyjBNbQj2F5Vq3e",
  "key38": "3zTCUXqtNpb5tr129KXqCim5USDAjs9djRY2Rzgs1h49F8PFNfexfJzXDfgPCKxueBqQeGVBkXnBnSDdeBSPq4nB",
  "key39": "4Moh12uBXmRTheHPAJ8Vsz87vHo4pR7hdeaofwGK4Ape9qX3wtX3UXGWs6oH1V8LFS76pgZ2G22cnrZxX2KLDaL"
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

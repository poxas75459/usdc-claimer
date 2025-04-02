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
    "4HLsAgVJHdcyFSU7484sc2SxisnaMiE3hHMUfqAQxx1NoHtuViBv28XK5AeT2Hycngo8yyHWSfFijE3BYNpf1NME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pG8GcaEGMTxEeEA7fGRLvccQxY2cJKgQNebovsokooJCyRGfeGeqfKvwrMrocTgfjKYUoCJECfAmY6KmuEMwc8K",
  "key1": "2saeP5jCyYHgmho8irH1sdpuGzj4LqocQ1Qk19jvQ8axA2f8wWGAGtQFqJpfbfbHKEQRNCD4hwUJWfhaGDpC8FaJ",
  "key2": "356TP3q8KMES3kFzvrWTNF6wnRwDjiHxycay2G8b4MwTY97skToFXEwbxycR4rq7sErqGRzoqwfr6VY8zEQptsHE",
  "key3": "5tHUdnq1jC1bC9S5UaFPdFbWwrCP6f3883ZYCVNkH7oH7PqeNgypWvzJBZbEdNgEqEnLvtJ5Sv4jTnENCUWtQCaa",
  "key4": "FjuVyNZDKPoNXc5QgoWmuKc46bsPPz5XNLFbALbS4VpUWwVBkPDFPYqcyrBtQAAsGhYoPXZEtRwqo9YN11sKGUY",
  "key5": "21tJm7x4GaBHUtsGptV6HpPZeRAXApAkSRGAu5TUdaAumVEaiYFR33Q73kaooNnvTK9Lmu7r3meN7xavD81Y9Et7",
  "key6": "63hYPBULAysL11MvAHkuL95CdrqRjUT69onzB2sDrmwERFMTMRoDXHSjwuQ3ecBqSShtwPrdLL42mUc2gvWd683J",
  "key7": "2fkAAGDgYsYt9FyH43ECUN2Ucc96mhvxUHE32brRzC1q1R64gSGYWMCV9jCW9BxSjhavckmurApKNP26mm5DDAqJ",
  "key8": "UsQKgoVB365cSQ2nxoafxaZatAWcEZMGEt75KoMb6YBRiL96wNxnYi1qZyixBhry2JrWRJpypT8n5aef3xdxB6A",
  "key9": "3DWh1eknB8szXcmiJu3C1bUmfvYubLfpac45XKexxsbAJ8asXhVD54JARwVdYWAym17ZHRbW49iyVxC1aLsDbiE5",
  "key10": "245SmYDp3MGKzFRU7fZdje6RDKzqYPkFnUwZsnz5cCDiXvYoo3d86oTXiWNeTC8HVe7YG9QBkAfxTBbQiVcugsX6",
  "key11": "125kK7VPirwtLgB6NqyxWTso1VNKUd4m6mXgbebtUvcXUp4riiiRHECBdbcoMf3aDCgr3BdWNJA2HrRrHT3YZou2",
  "key12": "4NGRNQuey8MFFRRwJxmi3RGwZUHPFwrcpeZ2gjLPLTL5BtNtsCbpCrn4TdfNEegka8caQgZRHRqRU5vNN6FKo6ZQ",
  "key13": "4eMRYvKN7wHe3JCmUvRchqiDR3DTUigZKidtANEVTh9Vnr9dDF78Gsd85ZHD4CHJHeJ5jqh8EwR42x6sNuWB7sW2",
  "key14": "4YWQNoYk5YiwBBkzDnznafN1zjKfWGwrQtuT7FyDzMwEZiRzHV7hQMpt6bCWUesThe1RxHWdHMjqrMAapToP5USC",
  "key15": "3t5S6gZsjR1D1fWs8YdhuqCr9UHjoGrCnruaw1eQSiRjZkgFtvwvreVBnceHHux2VTFyHsthdSxqDYDteMftfcbq",
  "key16": "3DLexnZQDGdpi58FHJWT45aEYYXzvBweCo3FqrrEYgMZjXeSonFYzeTYGJck7SiR1hGtzjyftPMn4RvnATSd1sC6",
  "key17": "8Zy4Se4Y2fmWnADKnnAZ7UniS36GNgfFGD6kzJ8jatEdAgDfJKxwHjArgsaUu4E6UaBKSZCzGrwp1Y6eARVaTDw",
  "key18": "3XKv3zXNPcgGV1LJcZt3PYjdVnp4BFRAopNrVg3q1qPrxs8bUsDjVJzBztgvWf7SqQWJGq2s1NSYU8K4vAdJcuNU",
  "key19": "5JbEDG4KnaUnZeDt1gZd91uFXiExbNzARYfsXquZadBgCwEMmCfAdd1YCVLF7uBBJj8JR3ksxhx6wxfMf8bwMrt8",
  "key20": "4XLzqVQjTBj5Pjkv455zPGBWN71DPsEozcSG8ffGSV5B8NiuWgG47VZSDLkvBWT2RbqCjhZ5XaEfAurgYVcHfnxC",
  "key21": "juhg67J7Z1924bjceoovH6fFD6TqsrXN58RYJFVxYHeSaKpXzJxP3YjhU6nhmRra5y5eBrUJdczkjtJ5DxmuiEQ",
  "key22": "4dc8SLkXbYfvDUVJdv5Dap1pnXjUN2XXEVS3agk1SBhcMxpT6UHqmw4g4FBkQgWCEiqY9NgDNYHy2QkPSgJSmmZR",
  "key23": "ryv4jz94E6w7LTHtyvVt4ds2hAHmCKtciFTs58V3qWEBbNdj1T9twCHawMxBbDHXi2Eg8a2LtjSiKeN4MK8kwVo",
  "key24": "5oQLyf9jJbeVMzEtJP6uULEFtTDvsv1KRjH5aLPVYepZZyQDJ8muUeFVARkLhYcAwFELRPEHC1jsYfzWYb6EkXP1",
  "key25": "4447jy8d3RYeB2zFG91j1qrpXpxxSbg1kMLT5edJftTymHTwCgLoSqexjVWFTQmTMVU4x2VSyVkP66XVj7jG6pEu",
  "key26": "3okJhqazMApQuEmwQpXAyL5v6TsEUxAoesYLEZJw5QzAJigopYmAn4Aykyf7xyFyVE16GPsCQzcY3SkTnAQHNDbs",
  "key27": "3CtEU1AzJSf6F7JBY6T9kpZSQuueA4CBbVLgy78ELc7NHFjtZ4Yiq2is4tbZtFkQqo4J6V3gtTNAkRFwuzQfxvrq",
  "key28": "3oB8fcYWM6w3hZBuqpcsv54kUXfTzzewo4RzaW2yQHUBt3pRz8oQJtR7TRE128injK5KwjPYS4TZCyvdW19zykrm",
  "key29": "45LH6rksHBN8sRK1w92XJvZ5hm2ifRB9UAU9WyFMVfPVVLgiVXrKAJcVCfiayy46jqnyZxaWnp5rvzUrQQCZwkcV",
  "key30": "5zTMbY9Fd7BimBboNRZcTLa8NiS941KVD4W7pBrwo3De2dYrw7CbV3YYGn1F99t3Km22kQD1qjd5p9HHLeA8RedM",
  "key31": "4Fcf3zyoCVJPbNWmD4PSxqNoNhi3hmD8Cs1vFekRkSz6C1t2NY3vGiMDjBUgsxBaXnzDsn7DY4TRJgnKZG463yPA",
  "key32": "3qAMEQZaFqKVgekX9AGHNVqcr7aYejJD1ovmbsjpx6pzMxwWQJdkDm73Pc24t1K73J4ZSadUT69FLiXXk2FHkahG",
  "key33": "4TBnycbsmwgTXTt7f2gRZ1bYxgUoFjea9yTQGgnGs5bsWXGFeMUTgPBoKV22v6oJrySjZyDUQoMTdiUhdkjkT3FV",
  "key34": "3WDoC1ygD1HBoCyYK74WxRszip8Y81G6KUtjzSQeyJ7a8NFU8FrwkKtkj8JPjx7fPidgb4rKUdhPzWeE1WSCAe5u",
  "key35": "262cQcGm9YSA5c8kXNbYZbmMbrohGTXV9uFDF159gix6eV8qyFvxhJyzSCndypzjee5UrUpPm3Ysn1sowWznYVNk",
  "key36": "UUd8J3obDjysmSbUZiCsKJ3jnHSFGMXhhuKjZCq3tGNu4Q38Ami8AycUn2AbyRGGv3mGmRJyHW5nEA8UsJGnHfS",
  "key37": "2NxUmvT6tuMg6fsMt4dxnPtUttrotKWnsoYh9ngynfCiYAK9QM9tbtNhRxgzFvbmj4Q7QTc6anaexGhfq8mzevUo",
  "key38": "3bkfZcRGUdoF4nKBga3Z5XxYo2SihMfjEU1x5AqCAx6GVf1T6VVvN1hUd1BVceDzS3VswLJztoPh1PjeoH3j1pia"
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

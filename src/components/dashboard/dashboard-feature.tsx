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
    "CnMgCkgerkXmCmRezGMubEja4KebsVn6vPRZTLQZc73Et8UHyac8KEBU8XqCdS9eCw4tyguisFnv7HoSvFaA62p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARrQQJoLE2V1w1HDUu9MJgMU4Hoqu7qSQKFCJysMnqfM7pnsqVjD1YdALdnNjFFC841B8ydqZWYdJTyg9W1BnuG",
  "key1": "63GY6kae5DGPGWi3WxcNpeqiTwQfpd7yAxUEJeTormaeAXLUk6ocytumyghK9YM5VKbCUQBVmmQMrjPtpvu4JR7W",
  "key2": "3CthbKEpr6dmKvxdbyizBBWQjSFWNheaVrx3Q32WDhxBd5vTyqmh3n3JPha6ntsp1jesfUAtKQE2AXLoT2qVy9qN",
  "key3": "5PoeWejsBMDByPZZRMo1gJVDTGTKK1XDJcL4rxL5Je1oRvUnCVy95diUVskbYC24m64ktDz7GjZMGAq1D9k51Mbe",
  "key4": "3PtwR2CbNLBhck6xR5JBgFwKpAyTSrNMx9qKgnhqKFp28rHHaH7JnqmCU2q6U5kodrq2mPuMzVKsuhpLC5B4BnNM",
  "key5": "3LUBQL2cy48NbTiMvnNR3WbtMutABEuMjzPKtTw5dsZpcad9pEyS8JYVtMMwAFE3F4cDDjE3j7MEej6VF1DbUnfi",
  "key6": "5hrh6Y4NdnQ848SXbaoGm6P44jeQsTVTFAC8A7bUdRcLzxiXja4cnuLn9HFvmGFQW2UKVsNUmbGh45PhAWVkjEP8",
  "key7": "5fCBT8RY9haJmxsMqsCcLJnRpgLfQVXX8K6RiCtwkcRZ1d98ueSBTd3GL2pDgAQT9ueiiA48ZDAEagcHGq914XmU",
  "key8": "53xRZgXvfvv79v57mXKnoWAgbBucgeB6aEj4NTdimn2oA1QEdMcmjRUuYZumDGDbMYquhQiBVB95WCBdsT8BN3Ps",
  "key9": "2NasThDd9D3TecnBM2biee8VHLGT1paKKu5KHYk1rP96YJ9Sfvs85PLU1HwhBu8LJfA6wy9qihEFRxFd2u8NK1Hr",
  "key10": "5ihxztmT7FrofReYEmhEXgNPAGa86n9F7BnsdHFzcnCPjx5UnMVneZHyBoLZhjay4Hb7kVnnZPmGFUJ5cSSr9Tb4",
  "key11": "3NPbSNLmfaseBghmiaFHqbF254fCY8RB2FDxiP5rWr75JqnpdUoUxUbVUYgJKYVUrAMbnjtmQFbh1CtJLEVQ9vGL",
  "key12": "4iJ684bYEkWjHM5WaDfBEJbCGEMehug5wqqbUyy4qwfyvwaaWtCUGm5ZBLVcAH1JdMB618qU17NCpwziUxL5BKqp",
  "key13": "324BpaAws2qKubZ8sQs7hmLywmeAyUnp8Be5gXf1GgETFT5pwwyK6ZscabSuBi3EtD5hiqvGkgEKaHuuzZ7roMua",
  "key14": "ZHBEVtKYatvLwsSBxV7u1evnteAbfJXZNZvV63jjDzWAN7xVGmEXAMjWp2rvpYwF3jzxtMih8dFTk5zboru9EVr",
  "key15": "4rgRBCdAKeV6fN1n4fcesziSY8ZxA84TKRV9Df4ct4LaCuRBtZvJuAqYXjTmWZb8pQxBaS6cTK8SR8fV1PM5KAwN",
  "key16": "5F51D2HxFPGZHqQj9CeBtSkXjE62ecWHsd71BPmxnsxuBsWvBoYv5ENXb4e1iNz6LUyXvMCCmPwgoqrcF77P4T24",
  "key17": "4qn7eoocmmJWTwQseBZyS1uKHjKF86tczmb8rjzoJqsy5Pk6hAZkfgXGRuuGPwpHzfMNkBUdJz2DgoP5NvbNx3tC",
  "key18": "Zfzrjso5ge2tSszjyy3aLYYJDvryoQ7yiPLKs3dDmdVmu4MxSU51BxoeDr2Bv3w4R2zH7dtfSHAZ4scSMkwWRNw",
  "key19": "4TSwVFVRxTCp7BVTDbYRqgmr785EKGUujfSfvH4ce4yrhyDGZPMV31hN53CxRRBXB2L6wNSBmBSgUGstZbSA6Zx6",
  "key20": "3gfDcL9BCstVd3CQ1JhE17ednNEMPJJ3QUdmSj4i7UhHBmp3yjQEewroixe7T79DwrkzLpNsS11nsdHExAH7Aauz",
  "key21": "L95pGsxgTL6o291qqHFLsDvkdeZLvdF6K9CDkR9SgxMrVYAEuGG6Tu9Px2cewSNddUpdm7kxNnvw9pGLNYvqVfM",
  "key22": "3tpYjT5Ska6FBmZRobFNigXqURtLGyew3rneoJhBDUKeWh38ktvxF2Pw7ZXQhFbCUcqjwMqgiZZEbJiPedR6CKiA",
  "key23": "3eqMHvv5F9qcjw5j65PxdCZBxna76BYXUseHnfoeBXpQ2fQcA9hvbAbwJDNQkMJqkdPgPwXQdPEvX3FXszowsoCY",
  "key24": "5xCFvhiCkYv8d7vnpgQj644S8otJFX6Kknq8iXHoFGgk6Wb5czHnfCSqsf4NVTQdVZmEhCK4LzhYQ2JqYLpjf5Yd",
  "key25": "3zyPzNve9nbdExGZVHb4SW3wmKfynwfzDnu7K5RSyzCWyrhxbjMWRwyAGgAkiJGgM8wdQSAFto5tewcDK5ZqPRbs",
  "key26": "41gdoUW8r9YLnwcwjRb1YxCRNrMbBFaA2vCgQC2FHHchSQ1cZpPdSo13qq13Qi1iW2uWyqMYUFAkQwGu6zffiEcP",
  "key27": "2KjNGnmGizZKbj3NYYbF1cvrjpr7vry1WVG2BrMnt8sCupKj85vbaPvnD1wgkUtLAeP7Pt2o1eeZiFGvwL61Hpnd",
  "key28": "2nGdr9FDbNmMNDS85bUctqn1dsNKDarWh4UgiCLibujxvbQ2fuhyW9FM9LsJXFtc8p7EdDA6PNdnkENRNAvLEmoh",
  "key29": "2w2PqBbzHGSZGVKebNj8apnXjbbwhw7GFcnAXEPFTbKCnHE99LivHjiXHynnRuCxSCLNdbSYyF2ewgroucX92hJh",
  "key30": "252caFhqJST6Wdpkrvnv3x7iajS5xWxJaiuTkgQTxg66SKL29gFt5ToZP9ZV7YgNt135VhAxot3vd6e9r5hJNQvd",
  "key31": "3RHmvyvtvYXP2edtgJBCkksAxLnoDXDCS3Lf8GaHk1oiEozCYtHa2kmRSTX8uY79eHHAbbFGBrGi8dbwt9hUZrrH",
  "key32": "2F8Tb93SJSNtFvjT6jPf5pzFKbsTqczNVHK1pJBPYQruf73hcrmBEi8R8nrKPSz7JSneRdMCmXnJ2vvtzEsZJbM2",
  "key33": "2MvF5tnEg3xaHfufGHy7fpcLSGbY74Uvsc9hKHNjGh3qrSoNNdSubbcmbxxxWXJZJJLvteLrbMfh7ucTK8WsqAhu",
  "key34": "nNVfQj3GnPCoUvJUydzwwiQ9HhYcVLSt2Bj9yhdQxWWR7kzYAF7X19YKsQKWMm1gHPEQfRupkb295aZwQ2uzxGG",
  "key35": "NsC5nLtf7EDoKQgdHSqyDgTfB6JMCUbUrY7jFuWJvmi5GDV71UBqi6tb5sKdtihnYrWzAekcoPHDAnSntNHDscz",
  "key36": "3WyEvwHAV2YR4hBggaukrmFoN1yCKDe9JRRGU6m7ReidpGGKvayCThJ62RASWYHx1hpWidrgSPYazgmMs23gPwNF",
  "key37": "sxVN7r2YgVrxiFviD5xuFSmmiiYDtkyAKmXdQYDDBveH4qZ1BW3V4efcXxqr7dGLiuY75GuDmz3rYjrAxbBW13t",
  "key38": "2AkLvZHm1Ltg7akemgJTkPBV4PNShHBbWqkHoN7JSmhQL7ER8evGqYkj2WVfnH29QAKg9cQweaaPNb6zSvFBHkcq",
  "key39": "437mz4KCdmASGdZaHG2GimV3RahihACGkgPbpwrVH8Gsv1GYEnbtEpGrvYvqk3ixEU6hvFYSVefoQ4hVZfrnAitF",
  "key40": "2ebVqE5x9qip6M1HXcKPFZFGVbeDJmemPmsqGKPKVXqhtwCarR6p2bgkkJz3QTgk6J3SEsQ7f9pLfhHpw4bx5fFM",
  "key41": "2UYxkgAcaxHVvwTha7BXch2NexrH9QBN7bFVsduLBavJ8deXynZ583WetKFipsp1c3gmEiGUL4D9sAEu2SXYHU89",
  "key42": "5g5sPR2K4aFVeGuxf74JCWmhSWFz1yaJ964X9BBS6QpusGNt4iV58d6sdERUexPpJyHfmT4NzW1JGoVhpqXpaACE",
  "key43": "2FRGPD6yrHVpZ2nKZJkUEHSbSS9DxhhZiG8dM1Hg1botC8U17L4TfpWVKP2FgQpDtTMBbT6YLTs1MNUoNaceLSpv"
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

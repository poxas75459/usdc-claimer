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
    "5bgPDJrz6Ys69VxYjkyKjbrQJSfCH24s9yevoh2xH3jesiEYFdgFpDRVQaSuwWrr3PgEvCRaw6kpbdnjyW6AnYas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owZQ6fP8hCZPwRUj9LDEyswQky1k5jaEm6ARZ11rBrnPifKynMeySEaBwHa4RmLLB5JFaJ4SPECq1dLVTtBkjcr",
  "key1": "31iRSwYeysZAJefbsM219e7UoumS5GdsCUdY7HXVCQKidcQtk2LsRdYYDpVrLKgmAZzVCWT9mexBkLiev4x7vkkY",
  "key2": "6EdCnycLuQHKXY3QLAcxmkutGcYsrTemQvwcWgcfwEgqGaXZjt9Tyn9LkuiF5BYyP9tx7xFcz68HC6brj6L7DQa",
  "key3": "oMZYsyJSSdJPysGvKV54WUtsQCy7cNAvBGcXwU7t8XyD3A79Hg1pz1JmxuBh87FeuGqUM3Cgq9bWfiXZc8FaxF7",
  "key4": "51twrMn4uSVRR8hvbwXee2p8m6o2xajdqstbpSCM4VKYtoTPXsZNC6HphJx8GYoa3zYroTiST5NoB76zL2xNMF5n",
  "key5": "5Up9UfDFPA5TauCm65AsAEFvY8NNT5BvV6eDgkbRej6C6pKLVNRm9XjqHQpu2pu5UooG4RcV553uoKcPNF5JwhCN",
  "key6": "54JUp4wEFtqLqxNKzzkC4EMg9JkNGHgWwBRT5x7bVbC1RwAXw7t3Xov7e21smdqDS1aSgzUQe3gVATMDH4drc3kK",
  "key7": "5T3kD6CAaqnjCJfd9KKjT2ZgX3pQVoM1mRZcbdBtHDfaJt3781xW6jN9Lqu9N9bHevHNdeatxBERt3etuDRgGHqc",
  "key8": "4oWHWrCAm6oM5oPVos4ZQXbxrSE6i6VQMycCpV69xNGkv2bmspUsaJ7VwPf22FdgjPAZe1WHngxotGeoVgAqwLxF",
  "key9": "5PqYFRtiU7RjXFzDXm3Mgop77tZgwkJg8iAx6MD8Ax2xcFhbsVu58sb79corsx44dBYJxDJKSYPTC5bHS4gznaDc",
  "key10": "jw7xR7P2voTmhbgSVqKD8E6fXQuxeug8hvEfAXvoTwUJRPU5RmvXUsDa4ErFJDNS4UG1e1gaUpuBeFDLUzHmtRK",
  "key11": "3fDCMzQYhUuU5aBAr7d18Z9o1dY7egUVwq2G8hev8shrc5fTA8FSnF4RsVRhWznFXEJaM3VehQBhXZrL8vr8vTP8",
  "key12": "kYmd12sMsbxNpZJWN5njmfS6NPvUMRhgEHiiawdkgFXLy4P3QLwzoKcyd4a2SgUjrRNYJh9zAUCAq8DeiV1pxzN",
  "key13": "337iHJ9VK8HTpPE7iLV83o7FDnZYrhs4f6C4iq7fVdCJU6ER2AVqBFJjz75AcsWkxKnJ2S3RM7MhW5XhsSgCrnxf",
  "key14": "3rKavLEEXSZWMuFJpPvd5D239hyteJpGdxaXD5aa1ZcnTMMqvQe9LHWrtT181d1gcGnTYau7Vae3Rp4YXq9T7DMy",
  "key15": "4y5eG3cmjkR9KJ3Ah5YWqKgiTsATvxNnaCzXybh39RLiKLLDL6Qx2N9U7GUCb7tU879ZTrUrRwDiYfJm7B2HYVUk",
  "key16": "5datcPaC4qi9Mzk2R6EjYT4wymgftDttEfPuv5Sk23NE9tFLYXWhXB69nbB9v7fbGNzyJ67Tc4Qyv4vmUACC391U",
  "key17": "54JSsJx3SMkoE15jpdKgXe5KUk1UH8Mn2yH8QS1eKdkaKUck64thjBzNKBUEj32jrcjhDg91cwaqWf44oXayBG9q",
  "key18": "c1JUXUrtnJaYX5Kz82YEM2howtDhvkAnVb5sZ2ehaj5na1LHtz1LQYddMaY7xV2QgepiK7HUN15oRnouJoAZbNA",
  "key19": "3LYPFDcoNmvHavqxEqroXMZk9JVq7ymkbTmkCWi3Eu9F6ZFnZfYCh58DQuE8aAMwuWp2PabGstPxZLeRq59r7jLk",
  "key20": "4MyTkRFB5KMfCwt8afAQK6JKcd7gf7Cqn68eAf3SWjwgLD641cZXBRmsyRSb8CY2qDpy57chZHqAwCCAVUqvGs9a",
  "key21": "3QJQ9MwGAtJ66ifnLkkjT65EQdUAzzcEKfSZfLZsf6geU1LKSRCKRBFAaHnix5CN5kqiFHzvCwVMGUAcTtVvruYP",
  "key22": "3YVk2cFS5igqRxSDeAaiBNWi4DoGdkNwQv7f4dhNF2dxcQZpXBhAYcZ6iB8wogtQkurnP4TrxygZLG7MHH6mk4zj",
  "key23": "2tCtkLC9nFaHQXQXK1Hqu4JuUggZp938wcxLPYZ87vWGtsiTHTKBJ8PJCGnEWsytwLEm1AsbZz4Tvr4rZsexbaTC",
  "key24": "5epgqrHZF6GCBMSiMwFK9dRygCkoHEUcbjjoPdHCciDn1KTDQApNb9DthvG5zs2nKqEHCpime9HrmwLKK5Vhdtd3",
  "key25": "4dgavDdL4XBjWe4e6qzZFaBmQbwq4tbtARnjzYgdyk1uGcL8p73tma6gR32xkuanhfWuVT4jgMNk5Z8JvtcB2mCn",
  "key26": "2yBmd1UgstS2qiUhpNKsBYq2WgDVXaSmN3ADJK9jN5cLCoE4n9ojMiaELF6RXhih5HSF73h2C8jAZaWU7JwBotN",
  "key27": "5XjvtCKJjPHmw78MoN8c685LrH52mxFgUXCCM3YUyKXny5kU2ftvU1zY5uHNAjoKcCDo1tFsbUzvH7Sizum19Aym",
  "key28": "213xRBWFGEVmg3CMZaP4993jdHQNPCiSXEVjKv6KaktBL6SXWrD8iMEKrbKivB8vzyct1VRn2LnmqT3bM3aJJBtN",
  "key29": "5Y1Mef2WuDS1mXgH2fXkxs2A5K1FMSfcHPrt3rNCHsJaMZoDZkFdDLGEZaCFH7m9JddW61Mw8wrvfGigtKd6WBNn",
  "key30": "mxdkGFAHiRS28hp4VTJwjx9aAZoxBE4tiKub6KF4XhsDRWycPiZifTRTdJGJ6ShyhsucjWHnuspEagmMBUnSYoN",
  "key31": "62oSMYkCCCUFQTcJK9aXrFWcraU9LeN6VbvyXjqvLk5Na1o2j1hwKSyASs4J6vdd789VRDxz2dUNhqr9TtuBNjd8",
  "key32": "pyEh1Hh6SBU1qsUNez5xCSKFYVj2TFs9C5ssH8f98RhktcEDii1uUSFaxMjZpz6XgpJGSJ3ye6JKoAP6Vj6FJfE"
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

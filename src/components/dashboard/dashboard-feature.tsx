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
    "4km239DKC84z4BEzXsrNF4YWsm8pn4sX2LHdoHUZQorfU6zPUEcu2xCq27QPKXWrYXhtLHAybVDBVMynoAJqDKmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2PQqZwWtkpdf1hLW8Qp7z9wN39QTAf7hVTc9LuSjavn1fd2AbdaAU3kLfs84Ve4wxQzCbiNJ6QVFHkmKQDcmbQ",
  "key1": "3YrZ7aeUmpDxh6CaMcz5U6CDPtaMJNp8NkxZx2tEU19eZN9845uCTr9UQUAncyLuGqjDSgi1oz3aX5bCW2mzBSqw",
  "key2": "K7qut6ZUEConGWpRJkSpvSLZxtjpAJTedZpMALSsmdgG6k4wm3fDYXVdVCEsLupTFASth3GQWsfJWusjD7L29QB",
  "key3": "MDnSLdbPC52b5SSWcfNsSyDxiaW9PQuaSQNoCDoVrSy8Q4xFJ7h6yyLmHwZ69TzV84QL5Y2kKof1ucSaT7mQQtH",
  "key4": "4T8PnD6vj9d2LJxM1w9Uf7S6B3fsKEz7LME63Lg4D6qxikLfxA985aXwCrLWHHu7kpqGwJBPNFXT8S2KxVLnKUWs",
  "key5": "2CXro2vnYZJhmQDJqhJS6Pv7C2xhX3f8XRgnGeRyRK3G97RdcErHTvT3uxFKNmkm7QQDXfU7YvSCy3vSttqwgTKV",
  "key6": "5T9gHcSPtAxvM9JoX1RZWgxrRxXKvbytQg8JrofDtfJ1c9xzneunZWcgrMtp1XMDV26k3gA92pzWS7nqr1pdZLEc",
  "key7": "3WANvJtyxuNahnEM7DS5WnkfgPHLR36Jtqpqyg7iB7FMDNrU3pDH2G1yRap2GB9gcqHKLXMjhHXeNz425ezG3JLb",
  "key8": "5jDq4As4BjAanbasdHbPPh6LRzE7WKvGj7M2KSTBTMtrCV9n7PgTd5U9naJrvimYcJ78DGgN5JZ5NtUv43wvh2jf",
  "key9": "2ecTZNRW216xsNxcPZE4FhoygFmZXHZCwvLtCxccH5eGAd13McveLQvNxosBiNVXyxnJPhBtfhwe6heFtGLRWqiS",
  "key10": "5R3ysVMxvyGNEGpw7GQF4HGZZPo4vGWyJ3WjwhTwZZNYmM2Mqk3CUmxuTs8UUeg7m7ftMXgMiG3xpPYnBJ4uY4Jp",
  "key11": "2ZuTVSAoSankQhVHp3C6kj1tcPUVS3rGxBj8LHtZYfgnT788o3ig5acJy8aAeCUXXFE7HVfDz47o9QM2pUus1Mpr",
  "key12": "2MJihM2b3eJiGqpy2KC7R9Ws2xNp7bXyJTqrv3gNGrLaoXPXV5MpzBRi3miat7uhj29Zm6CY4j4NSEoxyZ3rSg7F",
  "key13": "5tXCsnB6tDpQspYLNgkeiVKHprD7pemQrNdzT3tJHAXiBZLJQZTQjwEvMQTSZJRAhvnriNfLy2NEtT3Lfsb3KTjo",
  "key14": "3u47hX44KNNaFHsdwVfQdjU9JFodTx1NRJCaMPCTmYAXxRQ4Acv3Uuwc1E8ykZyHS4ngch9KTbzUy1w9jVbm86xW",
  "key15": "5hT8hXtp1NnpDBTWPjBaYGoibVhUWwL7mUDoeF62s5kgCdi3VVNZSDpMCz2EeymGnPygtzKhVBp3kaSNEmCwUUG6",
  "key16": "5bj7ueottfk81yk9GRSzRijriLhj58dE6orHSEGi3nLKqmpcJtgH9PBSipf9CEf41jN4dJ1PbkvATsEM2vh7M9YG",
  "key17": "XgPbW6eM5WLgFCDqoTNcvF2AAqpTgTftu4vmAhjnLL2WPvFK2UQfSNDw7QAaFsAapvaWzYrRZHqVXRvYYQxBV9t",
  "key18": "2emxYiHriyUEsAj68bdG5AnUNVYKApAPTSi3X2qPkZGoS33t1pSzugwdcb8V7czeDd2ie4X2yMmkVgQ1NrRBXWJs",
  "key19": "49yv4vM9dUAELskAohAeGJw4YRERSCCTvhuM35Qs2ukT2Vs5ZVWtp6EKgNxFVgsfLDbjbdX2GtX9mh5nGZpo4G5S",
  "key20": "U2qyEitqjknmUcRNUrXBT6Bx3yr17LgBn2mqpL1vSKicmtXCxo77MjpMrRNHN6MPhC38ffiJrb95Xba1C519PXr",
  "key21": "5Fyporim8y7Cvt2BAfk9nnFV5x4VLitsSLjUdmzQKBrqnGMxMmXn4b6dg56Yrb67BbNNadU75Qb1s4bGpkA4JUWv",
  "key22": "4QkusGp7vJ7mqLiysWk4BmA1yQh8ymQCv18VrLzecRJfpQgXpah5fV8nDwzqhnCAQbnTzNuD8P5JLsXJ57QpPsYz",
  "key23": "674xoCf6NbZ8cmEtxRLJgdET9Msj7tgN48oLszYNgvmURvqCf4aUZ6Nmv9hjzsFE89VsEfDQh4dbD3EnJNoa6FQ8",
  "key24": "9n7rgXtgx4QnjK31zRMCYtEmzLgT7LsdJo9a7zMqS43dYspG124WxvLvE24qp5JK7Td3npKz2BBHMLDmfL45aiP",
  "key25": "5UqFBm6Eq6QpnEdfXT7CjszytXJN78HKjsBnvU3TL9o4p2gGe5jjpvcZJX9FEDXhBUekAxBGLskUHwk2dgSp3CXD",
  "key26": "xbgLoAkec1GqzsdVSUNQE7bM3mvSjKJa5oXQUEHz5cRca2QqPETWzBtHjzXp9ZK2nj5GyzcbyMSCvM5YFEDDJ7G",
  "key27": "3fJwpGjzh55vafFvwSATd4i2yH2Z5SbbtKP4QoNk2tahfvxYfyfHzBznxbm5XZou2bHi5WBZiCzoig7qGCRTi4xo",
  "key28": "rchk7nwMKZYWQz6TXeMjFay7zP1pMh6YDSYrDdY5ctZGKDNReb1rPiuXcxWWimJiQmg5Pch2S52BGSMQEeKQkeU",
  "key29": "2whuxkqGhTjhfmKHismNagK4USTuTDtG94TcEjLMHPeWFXWNLGVXmbq1NNsgSvLdaJV8XWfmQtDP5p9pyfEBaATs",
  "key30": "597xifCLWJDS5M36KSDd33u3x6X79WTAFRYpYpKpJujCrUnUGxtVQiM7HLM6UFnoCpGKpsw1vY46muUp8TpKC2Bs",
  "key31": "QDa2582A1CSrNv14RmZtP3FSuPEHpB5Q1Dj1bvLEYZTkw8LLe56uJTGicJCUhMoH3mTAZPnezxteJqjsh2Cps2C",
  "key32": "3EjtdP2uBjThajwVkQyjj5zLM3DVBgRiFpJmBJqnQt38SzpRkUr4eMAVyVVb6u8nwk5bHyuEWMEXPSJmMMGcfHcb",
  "key33": "iRQviwib7byTnNJJcKc8rBfjQdChGJ2NjrA7t2G9NXzhDnXWTf4UeJMxKSsscxjyZ852D8pSonVBUJjYTracLex"
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

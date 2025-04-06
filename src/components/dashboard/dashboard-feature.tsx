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
    "3gTNmMfYEM87r36U1kAKxvhyZ2Ax5uE8PrNTDhhcGSdHp6utU9SRaL5D2nhmeoVaaCVaCb6dt43LhjTEsrc3LC42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEejyqjK8WKethP9YdCAEL1rn4zMuX5q7cKAWTnPZsuv1RqY4cdKdMVPr9jb8LtoVecJDWshdzWMvmmTvnqefLs",
  "key1": "zoGnoU9o4eNuNmnkkgRpxXHhyiomeUwsyq6YJRzsDWde1npRSuyQLub4rwGsLGku65TeJQifMxQjeUfrj5eWfFL",
  "key2": "2Vxwwg6G6B7sWfCNCn6qxWPtAFg48EznzvVELes8a3nsssBYewWRSjbAsj6in6F1pNkSj58UVgxcVhbJEaYqXhY",
  "key3": "5MeQtKUJWfiiEMmd4eD1ibosvs1e1kdiEMGFKarCiCcGTVK4NMcwo9UxRcgQ6s23E6hAYFokeEuj6qS82r2FY5b4",
  "key4": "3FE8imQatWTLsm3QdL9uXw9Ls2qNpo5bzdW3bigvsYJqfw3n1wbLcjiAJLG9EHwnoWrHsjfqACHRGrVGG6WYHvny",
  "key5": "2MwEBqm1NWCBWf1vMTQKYyk69FQfjfuatEMzV9cL3JQmpeQHtiS8JPQLcQxVNJzCmTdcDgBzvs7EggqTr4cvnorR",
  "key6": "5vPGntU1x1TLYm4b9BhsdCxtNa5pbiesoxM9m5p83hbt1cyQhpN6Qj4v9EFSDhT2Gd8swomyAb9zV9NEVRKWq6Fn",
  "key7": "2eoMF9BXvJxf5r6s9MLB7xjLemCNRkpLTWw17wiumcYyomc8eb4XAMYG6U93cgBDCsLTJFAgER5PraZCrte5j1Zs",
  "key8": "5GgyKUyPzJst6APTnzUphhMTfKsPJz1TvSo5GPKmJ3okaTKpaiSzRyDijY2ShiquNTp6SUsW4TaSwjVP79JEoq5e",
  "key9": "5ELsRnykR3TKnuCQyuMCGAau8otJcQ3prYPbpGwErwmL4Dw6jV3vJ6ZQSxagaC5adsS1Jcm9g6CKC4ezRRCS2bmH",
  "key10": "4eN7UgAwgy4VvfSr8eUyqbQajhwXp64RqKgLxydxaF843XbF1B2TU1imRoHTvbjtoZZXA2mukgon6P65dKwPGBNm",
  "key11": "2uwpm6NDStWUaqS9XeLgFWoJzhWTosYoyAYDfBzxyZhQ1pLbsQxVTUtpTsUu2X8pb5UyPfPPV6cs97m9dSMKN6CF",
  "key12": "2zc7Wp4Ar1S8Rh82rfgGonT7f5evRfM6MF3wst9VyJAdhVAAoYwUGBgk2pXnsDqyn71um1d7Anqc1wVv6SNfK6A3",
  "key13": "4B65nxJ97BhFrbaCdU9EGfW97Wx1ad8w48rdNSf2grnEJ9bUW8BZHdgtrfiuBCxFvvwWqkz9CvvqMXfA2RspHyss",
  "key14": "3fmtqWCGXA7EF1eWU9cJF5uJEMQNYLC7ZFVmScPckjn8uTAAAtcF4wif8M2nRHq5NSMxUDGrgcxMWCFjyau5JdpZ",
  "key15": "2iiWQSBtoCRTrSDQWWJVnZJefQC6wLcuz7vHCpiFrZ6RvVxVP5prZPoJ5Cb1WHpqZM9254T8axmAHG6uRQ5tECeS",
  "key16": "1ABWyEitkDfYuk3dKF6yJMJvR6vL1zFiP2oDa3nFe6pyYTtd7A8Jwb2Wnov1GUdfbHuyTiD29dZta72nEot7CLp",
  "key17": "51Lr5o4Db7dkAN6A1NYcmZ8e1oCz1s8GDG2QGBrdpPvV6HKKjttmq3EDwbbZwn3ogquYiPj4AbKu1D8btpHX1QcZ",
  "key18": "3iCxPrBpfeWABtg6t13DgP6hr2gLXdKWyMLwmGXDHKkbgGct6dVEZXfQhZVS8kBcuGbPTHpLxXfdD2VUH7PHsv3f",
  "key19": "2UfwFkBE1ZqGuvvmEMV8P3f1FvQEEwttVsW1CpF6vhURWydC57D7YE7yB4kbm2WW6YoFBusnSAZRe394csz4kTGF",
  "key20": "NsPeF5XjPQDGMJubksQ6N9ZqimqpWdQEBFQmsgJyP742EeN3Bv4VC7aRxR2Dytote4MLE84QRFVQKqQtAUpRG62",
  "key21": "3TNpEmCuhtVbZkjq7Xr1UYsmorBDTyg79jj2hpstfpnR6TzDPbEwRQaGUvW8tkZGQMVTebTv5qe7uRxzqsEYiRGg",
  "key22": "oLhX1Au7jx8ThNno1PbCVQN6b8jc2LcDyk1N7WzYWvkZQ5ivhdwQB5rzzJemmT27DHqhRiqvruiFQ7SBpN2EYfJ",
  "key23": "2dPeYvsxGJdoGV7fXgDuj9sBGfnoFDRBFeu9HQn1XYWQRDeS6mTQWtPVXCeviapNvqfCTvTEpYbqGJtcRvqMrPQ3",
  "key24": "2MAMffSoz1gJ7KbcxgAFghrrKsSfFswGC6xmivgU28pqGSAc13eH6m7NG5DJqAmKD14uPu2od5utWydob6cH8npQ",
  "key25": "38CWqgW8T1416vTysgYw5YuQ3sYt5kCk5FjdRp3YzkBHhEKeFZRKF5po1qUMa43zcAtP9kdPBcxyhwiXgBgqG16G",
  "key26": "WD2uiQ9R52zv82wWa38D53FG2Z2uRqhZKCwRWoscNY9gjvxxCEudJBGgyycYnozi3iN2G49MLViHDMZW5PkUrbJ",
  "key27": "2VfHKNTv5s51KnbUNeypvf9bMk7JEExHn2ca3tDc9VHcF6HPwNAn3J3g7Ft2fQuR1dooTHrZR59CxdrTyyeVpX2R",
  "key28": "AwceqJ2UiY3muKDLADPkPtkHSjVLQCtfZAYKWjriydfdxQEkJyG4afzR7qJNBMFxtZ5oNcMS2aZKyfd8oCvMx3f",
  "key29": "31ykWzzFDApvD7H8hqnctpG8LtCEfAVmBJZ6NyULs2BmPK14DbtwqC3oLe55oNwqDymS9DF3gFYHarBuoqiQ7Yxo",
  "key30": "4JsFXmTZGJhowqUB43VVVM17As2s4TVhuSkp9zbEeSoXLhpUhFnjCFCuaqQ6tDerq34ub2W5UT8RJ5rS3XAiVSxK",
  "key31": "2DmeDbicTvuBTTEu8Jt3ho8K25yoqfR2piStrB9sXPLQGSW63p8ZcCaa9qonw9LkhP9jDNV5sd4jyazuRt3UKhF7",
  "key32": "2BpRJ7keZcszRPzbSeFc1ZrAPqnSk9xRMKTwsrJJV7p19bSVRc8mw1sW1yUtdj7FFpwfnTZT54jH61ijExjinbeV",
  "key33": "2WChLLphgnJx8uCPhxVLnZhMXCZN1HB6hbve2J8CAdFtLizhAdpyQWUJ723ToXZuKRHXi95QAmnyCgBd4TdkVbEQ",
  "key34": "4tu2iezbbrcGYerNqqPUZooVdu56ZJbRofge7q41sLgQ8XbXMyFRWorwLWbJQJPP5ZxDTy1khrvixcFcnGG14ipT",
  "key35": "Msa1HFi8AM6YKBM9atcfrZ3jvzRXCY2eThTSeWhNexWd1YQjjAgzGNrmmWdkBNaLN6WJtYoK55ipkJPqhzGztAy",
  "key36": "4ETrBxExag1hX4Z2DDCSwETBZQSGaZEvYeLjz66U8aQaSdUr24hjWTGh9pfYVHBkS2DtHNGprEGVQe3pmfJR3haj",
  "key37": "5KJBJyjC2jZsNDERpbDXTpkQJeqiuz3mRGTq3nkchNFf7yTfjqYCjs6uzqNcTpXpYqn8kH216Fhn5PGU64kT92tD",
  "key38": "3L5x6W9GLeBH2Gmao6Dgd3xmA1AkFqgLkvntGHppD7GXDfuVi3Bs5pQjVz7htdBuS51jsezj7RDBWctoBdMFL3xL",
  "key39": "3PM3aeSj2EfshWqu6obCBqcVRvw5MEn1pRR5Svwbput5LYjRcdKg4fJCEeHCY2RVAQJSDtxrzFQG5zjRmsiETx2m"
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

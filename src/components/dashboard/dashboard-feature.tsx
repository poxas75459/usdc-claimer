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
    "3u5BD8Gv9qKLkPjxDKDgnTZGRRw7dpjibFVvbpFicPyd3QL6AE6oTKDqvUSQJfdJXeicDfpjUNGPf2Xm28TCUAEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrPLuu7UXfPbU88J8qusx9XkwKCw6QHygSdaW15bTuQ6LmnwNNnEt8Su4rPskGbjTeNSBpRTbfUL1LUP7R6bYQX",
  "key1": "47w5w9u2q1DAB7SojerkLqU9Wvo8ZAPqN7zdNax898GrDFoXBz1cziQVvyqjnHngTpW3h5yWZiamaRBfSyWURG5m",
  "key2": "5N3ei27GY1cDguNhmJHezMWspsbMdCYaNj6bWrnheBbWPFwfu4M5U14uh4U9h9ycEveDbSMiPDVfs9b3GxfGXFjV",
  "key3": "5brHygoRrDC2RBqG3nj1KrhpZLVhV7sjMicGZvDmQU8pXtNqrxHW9bdZU8yvgswbq3zswooN3WEizbxseuErqogK",
  "key4": "4fhYmJ3KaADfNtjp9h6ywV551yhvjP6ycMyAVbBFkSU9rwNvqkBgwkzeqqC4A9kEss2TA9VSFtrr8Y9FBrcyCwef",
  "key5": "WHqWGHJhtGE7qkZ1G5CwPP1GnkCWH8bfm5V4VHD1z7wv9S1ouegfv33kLNtESQ2iyAypLqcgELnyyk6UeiBuaw8",
  "key6": "2zMHeotu8tVgYmBLJQgU6Jsp18jMcJtmqN795xeo8JVNjETwHhUGd62oSPJ1Ho6i3WJGMvjuiwcn6W3fSy1YkV7m",
  "key7": "4mArYDFt1QfqjjRWifbnigD43apob1BW8gyGxpmrf1YLR8yVGQYQLMYUdCJjSTZgVmkwckSvrQjt5JWAYhp58JL2",
  "key8": "3JhGLDJWLTNjTZEHRndyjXNfFqZKHMF4hxweAUHiZ9uhEgE8BkDe4gcZ9SkNFNKf8cGdYEZ6jk3erUiYnzJVAR1C",
  "key9": "61ucQYQJPHzfdYvNqCRzsvvRxwDx2qZ5aa8Am4iEpye3wJYa9Y61TeWzzKJmH5b3MYmkyThzn69GWgUsweQCNRyd",
  "key10": "2AWQdhKTLBubEUcz8SpaTNLW18CqKtHRSHQSPGFYKvJ3BQCTRDTwJ3rSrseRmCYXHa9cpdH17v2bWWGiHitutTxJ",
  "key11": "2gGJCcUztezgm9qBeair9rNTNaecDFHPWREt75yxy7VefG4euHgSgWG5U7idnAMY2dp7FtQRAm3jWcofxgadqH8F",
  "key12": "CQ14KbECMYKJ8683KmQshDJ5w5Voi6LztiSWDT1WPeCBver5tbMWvuNFczgeouSmJjmDb5zKiRZvE3Ps2UAuspS",
  "key13": "47C3eHa11V5SYzUabtetqda33D1qvQm4uwVX5KdGxKZDA8axXFGfwvN13pCAUL78BNfy5sH1ryQUCVH7jHcez6A7",
  "key14": "5foN2Eyg5bvw9tQqeu2SKuGZ1qby6EqYo3chfRjWbnqzRYG7BCHd8KGtACS39tZ6ApUJN6e3cRxuKgtx9Q2KodXW",
  "key15": "3Pxd8FB4kpcff9nfMiUrj26Q1yiPC7yXJLnjPog5jZpFBmHVD8evL57oSogG5qrVJdPVyyiXsvh2MAALmN8CyZPz",
  "key16": "55zSRM4vKybgyuyRekYWZRFABxjDGu82exFL5JTnFrc5o9abXTbp6aF9nMHnCNd49vVw1oYj9xpSsqmLPcCiy6aN",
  "key17": "51X6Y4165KtDeAeZ1WHdKDAWZG1te1dYAsoFpv2p7Phw3gt2scZX66iUZAr1Pyj7nDpxjWsW3RAgYpFXhaMrHnDK",
  "key18": "454oJ5dwVdXkMRH3suqg5fS874qufsDe7hCXNZdCShMVaSaudhbA1u6jkUytUa1ZSt6WXZ5aVFhNfdHnbwfXB71n",
  "key19": "uUhGGWwNwCWZ9yyUGn8iLEp4nHfJGhBsPmH125hzuUPB2B3ZZeDrst8WRttiYfuD7XZLndWftwTmTXVjZPAcpHP",
  "key20": "3rBC8PZD8E4qnXvzgnYUBfiXuAu7AUidiJnpEithSiKTvd3yE98UsdS8hz3VJeoy3UPLZEeMZq9aAgaZpRJedBDF",
  "key21": "5oamfwbp6d2dZ127qdBuAhWqLABUvZeGRWwZxpXpehuEG6VbRv4U1fpb8856Nptf75idWasvqJdPMVJKvwWdED2j",
  "key22": "28Yre2frj5NyeZ521QudU6TrRmCn5Hugq2ySCSN2yXibFYfr5wUSxr4CwDveUPDY8bdBWLLSE226DsJuGAGaoJ3G",
  "key23": "5zmv3yS2MGnVxUdhjWsvdrTQMtgA32x37cyLDhRiuQCDo1fC9WE9uQm2rQMaBMhBxn8G9E2CfJKseH7pmJGsbB6C",
  "key24": "SEtuQT1wJS83TZwXGFaSVDwymC2Fp6RzhHb4hE7uBnbRKkc3rKVisDP8wXa3AT6DW6qWM44iDMAeXLqKwzjpu1Z",
  "key25": "4swsUDV1QQ7j67ZkaxQxWsZFg9QdC2zcF1qQnGvr5eT6ccKF8PoxrXhogvVwChXuUj5LiPbzJ9gdhL6yfTsJsGNV",
  "key26": "ZqN6DYeNRsbvxxZS65xR8Gop37hfSRG69mGsToJEfGWyZ2MHi2vPQ3CbmSbp44EQkTseEYt2sBMrUnA8dvVNy11",
  "key27": "5HRU5PTQXnK8VqZFT5CSKwknK8jLaD8PiN2V2D64wNfZDWum2DDNLnADx18rwSHNPPczrmSXA6AdPLSAPMNEdP48",
  "key28": "3LCi58msv2rJZjSuDgGbkwVwzvcxXzo6urH9Bu3StUrssJqBUWKtMWAfDh1y4M6cmiyHNH9nPzgHCsav1Gu8ceVh",
  "key29": "4FuHfXx4UfbsZvFNznAhvGRt392BgqYQHCBHjrkqn5GJqCBYsnFMyUfXNhSSATqJASWX7FD1VMhB1hcmtyHiwuMv",
  "key30": "aY9eCCxfWzSpq25d571ihS4Yyb1xULw1x9GunCiPgoXQxxNSU913ZHt6X44u7PGhGBvMeUchuVQ2rvDagnqTfjb",
  "key31": "5WXXgDbto3GA4JQmBBV1ke4PsvFofUxXw6z11tyWKSkCwMtx858qZnk5oVmEpu5Rf3C8bsPKoFbYaDCAEVfAjkvN",
  "key32": "4yku75KY7rD2y52vnY7xJH2JiGum9R7ESqwnwCkWJRkA2AsPhusMWLha6EVu1oEtozDCGjQbsupTxJiz2Wb6LtKE",
  "key33": "pLKCgnKqtu8QPtV6no82hM3wMEJXMY9vhYMwmPqpZSYTVM9LR1TUhA4HUzdBqDZ6teLkHS9sxsM7ARbbdgfUNMR",
  "key34": "5xBuUermcMdMX5utPA67LWvQw1gbstHg7zhzd4r9ywUP4dyF2PT76bef91ieeDZRTFLHr6szi9xrjbHqMv4wZoR6",
  "key35": "21b5E9S1Ar65BMDKsgk8JHYdZhhHyH5fGCCYpNEtWkXct2hKVckivaa3q1NDCjMrNAzyr72ZPmGMFxKnyj9GkxFv",
  "key36": "4o9Xhfg8fL5niSqz8B8arXVe6LZnS4zx1WQqzEV96LpxE9M3jfxR6JmoEDVT2iiEqae8FctZxweXsQ2EzLuWRQuL",
  "key37": "2b4oqyTenRBKmp3xPuXsywbMSXbPiHKTd7zTADRCnRvNBkdqiiA4ixp4NLauUQDMBFK5Qf9U9iS5dufmT6VrrmLy",
  "key38": "2344ckSsH8otmSZFoXmzBjjWag2AwgPXYC9CXTYyEWLvUa4PwF4NidsKZzeKEJHsDnj6HTvoWi3baPS3Q5c3edn6",
  "key39": "2VN2PDDzKDYK2uywxx2J6jn1dLyR5EkywzGcFQizDuFBABQ5cLRCb6AFLJ3sXDJchrbexTKL56Zm88Ngnw3iPS2T",
  "key40": "5vqPKMivQBuZuVCqBarGLXEkf7b6oFCG413ZQ2dF6dhUxxq3ywN5ncxC1Fbw9CXP8YYWcdyzW4jv3xF39Hjqe97r",
  "key41": "5Pnezz8NiEjNn6DGAsHuNHNm76Vgm7vq1CxEqFh1ZzPEze9A1xZxqEoTEAjDxLbJg8eAbFiG4E6RMLUrfMLB2TpJ",
  "key42": "MjqSsKQpzCuytNkFx3vLSYFGw2EtS9zY8JRLVvLbgA6K44hrYBHBYaNqLiKeCxytt9jMGzouu8tnjTYTnsYgoHf"
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

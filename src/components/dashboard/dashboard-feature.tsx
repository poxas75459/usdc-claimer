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
    "5jjbTaDdghtamxAbeRWVXVFt86ed7ywNgv29fx8tUoACnw2yrMH8ed4FyieHzFQaJhDCEdo1jyVhc2x1geqdjevT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EcoAfgMj4TpvKptwoehmxKZQF9eBesnWYowShTDx6PDrGe1i6CoCox8enyPpLB7rmxsF78ayLuDzcAnhv61QgG5",
  "key1": "4N2JNZAoBNiStXQSY53CfkK9b3qa1uuxPUHgK9rm7WgHp7FYcHpraYnoQDsJvkBqrhfCWYuQP7irpEZLxCNWXQrY",
  "key2": "5YVZ64e3R5fcooRYmDP4tSpKXGVBCKMPCeyRmfSnXQdw8R6HgMiSeoLJ9QCbsthawoyKeTX1h17VHDoVuUfR9AjF",
  "key3": "gD7bGdz2dc6q2w554SVoMPbjTvXw5Gw8wEP7a9vvi2EAaqRx5kHJQhbKajFWXtzQiarxGnNs27vVsziKSrkqgnP",
  "key4": "4YzhAFQBXTsaP1uTm2bU8rpT2bWzeTdqF4HovuTdCDMwQ2CP7Nox1gmgYA3SUaAWb84tV57QjtuYv8wCfHqz1VNz",
  "key5": "4cuuNqU3Whqicf7DVAvYct8BpqwPxXcXYEHnyir4DFMkXbk6jgHNdRBoacWA8F37a2252J6yBYSjTGtP2R3ycJbo",
  "key6": "5EAvi8GnUM5Y9cp7v99exLZyoAZHxpxFU4GWp8gxEZXHArfdMWR6RgLVGttLZ8jHXYaWMgbKgMswGB1PAxoaChiw",
  "key7": "39FU2bJJUuEmeFxv9xU6AC69bkhUpPKvBS8GupnxRyjTeG5vZFUjzVUS8ccrcWZSSYNuCrKwQopztAHk4vKdZYgo",
  "key8": "4RTuZ6dhZAAAAGfqF68BF2EaMYJsSYKTYJXJQqkvWKwDNcyFrPv4DB5JoqcdLwoyfALqXxSfT53VDaDZ17JZXxC7",
  "key9": "3TqN5a8i2m9p8uHqHKC6Wm2FmsdBdoTgChXirp6fvR9FefYap6eTyBfujGwJKwFJsmJ3FQJGXL6eq4aTHj35Mxbn",
  "key10": "21GpUMtdnCR1AcDX1JaPU3MSraLGfQX2KraRar3Dn498VNymx3iLNkerFL8vxnt8SsGGEj45BPSHsNF2bWA2UzYh",
  "key11": "5SRrobTA9FBfoXtfKWQc8F4pbCwa81RpPLWKoAGjFNRPg6ffpDNF7XzmGCYkF4LVNUT8JxE1S96TQdPDaWSgECXA",
  "key12": "4V9RTqNDirUHGuFgUcemUmt5LFSs3jWF7WuUoHpD4h1TvekiEX58fggA9yZrKWYNTRPVwZqmqByX2FDPK9gfsuhb",
  "key13": "4AnNHTfSj9GfsbqXfcKBeMT4ZoUGwoGXG1nU7VuDeCk6sw6xhWVKBYK2ubzVqMKdzwYywzTiJSDUfoDhH2tzTFVv",
  "key14": "5tUBJU66nQvTejjR26t84tG5kHMWxF5Byios65XpvVvDboX2g9GU8Etw8AKNjyx7TZbmTtcqy6yMxAQ8gJNxtd19",
  "key15": "4TchSvGDFt5zk64crESmKPBhMcGViup32wSbw86vVybX2QF9vM4W8HC8EVSLZ25cTPhTAaeDWNSKZ4Sk8hDPZejo",
  "key16": "3HoEmQVSC9zWZQNq6f9TMVN8fo7f9xnTZgD38eM3THdiGfd36WHfcLgaHwzuxbUMRvby9Sgdj839waLDmCQ761AB",
  "key17": "5Rerc7LarAGaq3Y4uMroHJ1fuRtfzaLMXEgLHCDf5XcVFCDVADMhicnntKoUVWWj11WsaFWnGyGh3PpVgZgAPWeB",
  "key18": "s3q4LRgwBdMLcBugwiHxNFQetmTS3FsaCSsmpNfMCCnMkbbYJwQKhr5fk89GpVXKtFbqws61XpTLGgv7QdJ3jia",
  "key19": "XUt7soGdj164gPc9hPqJbe6aCgn5iHdue1BtRLRX9nruBS8FJ6Sf7L1HKUgn77VvErjx3iRFhCNVM6EtNBbWu4V",
  "key20": "4VCGbPqsbQB9EZ2FrvEG3kHaLy6psHSKUCFJA9qkbqYfCb1deiCKEhZwwdpdmRpjE6te6Z9NQbtumXSbANkVubEo",
  "key21": "5uwsyQRErooPpRMA2Q3HamRJoLmydv7Zvmm58MHjeASku3KwUScg9FX1eyr5WCFrCUSeSNRr5RRgrmruR1TNMd4F",
  "key22": "CUETGLhSah5ysPpznrag4sgfwiTz6RicTgvbmuB74i8uiUgTMVogcprAe4jhujLN5w54DL19a3kFA3grTGkwHfe",
  "key23": "3bXL5h1pLD7bGZZmGuauk3X6drYSAhAcX14iFr6cXv9qNSziMhrcj9dTNMctKUaxpximXgAnkPbjjhSXtdLhSYqU",
  "key24": "eLt924dgphXJMKiXZCdLfudyJ79Wa24vK8f4cFV9wa5AUfDnK3F8Myq8JjWZ2C7SwURFixDwy7CZ2MVWgNWJ667",
  "key25": "5B2udUkugM9M7JYxdo8Ra7V5Bcuhcn2Yd73s56EojZLCbL8nYqU6Y7HQfWyx7HMhbpH8d7ZTiBKjQroATBnqae9D",
  "key26": "3Sjy6hQJPgPMRwdbocmqbx7SZPX3dVgW5scUjvMvbK1chbGKTydY7EVDKSkTKPCBVoHeE5T5F3vmhhXE935QBkvX",
  "key27": "Qj1BHigtVQxV8KSBATrTUGGHYyN8kc3jexjidvFbRPQtPwCkTgJ9Vw9Y3toGMX26qEwyeRPvxecBZRUyfy3vpk7",
  "key28": "39yovvG5rsxw4sGrwbvmj6XQSU3k5emP92QukqSroNoTTuYXCsJsQpF5cWSHgY9hm7JBqQ3M6r5T23NoacUeRBNZ",
  "key29": "26uWhssybbUZ357YPcdAheiWcwhEsVee13wB82HX4M793V9ETXv26tecq5XhcoLdXTjJs5xu63RXsNeYNVFHUEZn",
  "key30": "2CVjP3Sj3DHjavx2yWGTWVdQdzKU5GNNA1Av38u5fybS5pGWpnyZxUVqv7W6j7zz41Pbj92bheDkMJmo5mBUk7io",
  "key31": "kVmWF46KoJBVjkBJ6aAwFFaeZTJQXo6wBhbey2b1wJE7FCijBxKSbA77rJ5pKt4fm4BcDi9LJgXPScggTMzNobX",
  "key32": "J7CC7PCMtkmYWFtMKrbS3TxWXbPogaBGiYsBxQiU1VCNBPqM2EfKoqGAQ6S8e9s4VrwaMVqUQB3TXjCQ1ueQSu9",
  "key33": "4nUuSok75UosW4NyQakjuu9VextEpg13vnZXaQXeV66mpwkJRNjMsxh6wJDK3kSpkHgbPtqhjKRLXBrYUB23KArG",
  "key34": "3oSecXWktm6hyWDuBk76oVnDesKneoZsRnnF8XfGwv1egfHXFDwd6KPUHDh8AbsXCLdUwH82YnM9FhP9c2SQSWyo",
  "key35": "2Nr6X9gHc6QjXAentonTQ1TWfUxENtDKABn2r7JDwp7ySoFD1VC7FbVi6UGySgZCKtntzWphTsXe2VS8bHwkkSiQ",
  "key36": "29D2yBS3x8Xo4mxCTYbGMjh6Wht8593DY9MBcUzeTtz9C7SkFwoYCRdv5rrAr6tHzCx4dKUTx51PTdAVjrJQ2P9L",
  "key37": "5fecrU6n99PHPFkk1h2i5JPf1mXrQDuHKrgJh7RUCsVx4Gfot416izhmtsYykL9Ex49tnMWeKRLcejGw49PHqPfz",
  "key38": "3tFzsRyxyKpZCB5FnvXx13ok3JWjeaZYXGEofMLFWH5aLkWabA22GK64LZ4wtqs6f3wCzFs5MFs1JyHVy9SrTjXu",
  "key39": "5sdH7w9JDYnFBtDAmyJ12rqapsRx54Ynk5Aj8Fv7JwcrwJURZ6pkBLbPLYrSu7oGNZJg9Mr7pJnEYz9yrxFTHCHw",
  "key40": "5Y7qReg1BNFAsqLUKobnLooV9Wk78gsAmMsE4NSf8w14MDaabSve4CygpW8B83s1sNPwjyzJAvzGY19BibZGWt5z",
  "key41": "5sHJsjgjmuNTFjDeE1bd9J47F7vHcDt8XfwguR3qsRcxKdb24oJVKCV7bMtc8TNGWsmUECQiRqjKshifUWvFA6NA",
  "key42": "2mfecFgQPRxKVXKTfNHwarso6FygQ7f7FYx9aF1QD7oWDtzoUhW7mhroDHXogNa8dy5PPncYCVJ3unGeS9QRgTu6",
  "key43": "5L8w6howddohmEfu2QS93uwDaRuZtX7JaQUqMBQtEbihp9nnWoXJpFpxk8uzyeqFFPXL3k9y1fSJGoY28Jub7EmA"
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

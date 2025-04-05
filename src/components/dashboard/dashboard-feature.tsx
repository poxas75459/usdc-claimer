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
    "cgnEFySkPgvzyd2AxYf8oV9sijM28yMNPmP1b9hY2pzBRw2wRPJrU7SgRg2mcYvzAvR4ak9E2vykphLiZ2X4Lbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvwGA5829rHezS9XJ1txuiPiVanGQ4gRBJ5hfguCcoGYibuH6Ei783MBP521ovQAYC7We7SCRJNfaApBAzVcAmq",
  "key1": "2HAmfjKPSrSuFidVQDtsu6PLhq1nFKejKVemmCwfAHjEmW2ytgjEjB7TSc59uf8L5N11YaCCk3zziMvbBZQRfVUr",
  "key2": "3eDUJhMRYgen8KdXLuzA8sZnRAG7XarVXEz5uvK687xtV5HYLbxDbWrmM1RDYyirRnviMyhejXkf1xCJsife9egq",
  "key3": "4nz64C29UAFLVYthxFMkHWR8eVZM9dEx6DaCWXqAPK6trQoFYtPvbQkSaCinwdtUthshM61qspREZgLAfZS9LxfL",
  "key4": "56M7DY9AkGiYzgZN3nXLcMdQvrme5PS4LPt792vDqgXycYnNoNfxfgHiXJrTT6Hk85ZoenR9wtcqFvUDRTTjg2Li",
  "key5": "3MudYNTEhe4YkSFz6k2Ysgqsza6z4aYKoUrSDqyhVe9pnLZWWNSBzGxUhVrBdmwJR3ZBirubMM3QC4pBrTC6V5RP",
  "key6": "5Y6iHEGfmVZCprD97JK4xSx7Bj9T9ddq1GwVWTyUq9fPf5tFNyP3EW2hCZZz1mt11n1gTbCHjTZebyfBYJxuzGZs",
  "key7": "4vFqreGmBPxmaoYCWuVyNNpiMtUkX92UQ8QkTi3nnJZxQzft1PLBHhWZXBSGXoBpEebvddC76KR2ZTRBEjhv3S1c",
  "key8": "5JtdQ2b3Xgh6PUfiecUUFuHi61b4CECoVsk2BswdyfHo4GmgW17n5M7QqaVHi6DQZk4qaRn8fN9kFe782REx7W7S",
  "key9": "3VAyiWs8gHXjvs5cfkexMCcQBNiwGCTVygS4k8MnzGtpJCXoN2FS25x6qHvAcSGqCkZjUM3SWoXHoh4CDA7Wwo4E",
  "key10": "5RvHoSftJUgMWi2beR54EBywquSVECA2XCdJwCDFoe2h9V9zM4ptwm9d7uKUdYcCfFmRTakfCNqggstZHb14USwJ",
  "key11": "aHxF8GcdMxRk4ULsKWG3WzLZidRYUfHwB2JcmnZ122CNAEkHdTAfySgSZaQojDsrV2qEbY5hZSzQrEVaPD81SMF",
  "key12": "3uarYtCZvyTf376TqMmNRRJwDPpQghDRHbFkQssCxqYK7oTRZmwA7SvmgwTjV8RkQ79sHCzEB8WEt3o8wRYTUVjs",
  "key13": "4wPHuqTMtdJmu3pNbk9WiLufBp14iFGTKLfhnbPduUyiZ6p6pq5aem66iPtaHSDhxn1ZNtjfr9eXh7Hdu5MCsbWb",
  "key14": "4MRYnLUeB6LVLWtXJxzY31ADQBTJU1hnqsGxcaFLPBN6PLV3mJFfgttKPRNx375dUhvStkXvXzpFYeU7C6JWCBqw",
  "key15": "5WzckfzLtyM9No1mPvqo3dVT5iP4L81mbkWz3yRA4Vyq6qDCaAr1A4y7cmA6DB7n5EdGWxjndrAcdvShZqmRXRgr",
  "key16": "5JnU9HEYVsuGFgZACi2kH4F8Q6MjU8oqcs8J9RuPhc3keh6H5CXGc5WQ9SbMN1oRf97Dh5EsLEn7fbXvMk7yfKdi",
  "key17": "28CcyBhEPdEACTUxs7kDiLeZCqQQRz8DsUfhDoJBQJ9FCUb9epFnusVr1xMHQC6acShP556ckZTVhfKQSpmG2SRH",
  "key18": "JRzsAPSs1Js1sz9CFH5g2nV5Pb7BhHKFLbwyca22iagayKekYcmHrAPpszU9X31MkK1TuNgWhdPMbc2fJvR6fgQ",
  "key19": "4ydnJKVutr7xu5xXymen7Cjz4gN1ueYfwq1u5q2RZsopckxUqp8Afaogvw8qs5Pd6QXabGqStta2WXUd4BUAcJdh",
  "key20": "jViuBuP1HbEZZS4a7VEjscurBMRwfmfBzCrKrCs95MTYvS2qzm4TW76tEdcmX9JLbyz61BpqTgvsf3wcXso9mrL",
  "key21": "5aDEwPjDgmwdXzfrdyMsRyNfv7A2Ug9T3hSdnVSXeWnEkrt7URxPikRasF9WTJHPbZyEq3AnsAHz1KCpffWiYPcm",
  "key22": "2NPscjeS9Zh9GV12cE4RbnzFiN7AKwZ7kvUifMJeLXKa7wncAzo4XckXJpDDGHKsdnqnA6EhN7R6ws6uNnNcgdpd",
  "key23": "2uxS3ZQboX66qv1mfZuCW9EeC86to9YzEiJev86f7bs89F6nspEgDdVmH1izfc1ybszMAXbPHzb5BxdfXJEGJSoA",
  "key24": "5RzsvhaKBCnjwDShFi3UjoNebDUEfKEhvwWS2sMPp19Z6YdB6js6hRTJ6vEwZsoD5M9yFb3d13vud7swPoUyAAqz",
  "key25": "2dw1if7eHyKNJofy7H54fvLoejZaXtMc4rB3ZbA6EfGBfMnYRky8SyYX5SGT3dmFB1TU8xnnSE8iSUhVmyqVMaUR",
  "key26": "5cV9eURn5CTynaY6UoCNoxvadDEVrTPWVp6fhGwnVYHnSRgTgXEcyYydxmCA1C6tSdM2GyvSnG3xADRQRuXkZpKY",
  "key27": "4kdEXfWur8rvDd8Hyonx5qTzCZFS5WmovTEGt5oocWFy5CfRD6bvLrUjxCw4KuRozzZyWzyCFBVSrgQX9PE83tjH",
  "key28": "cjwXKr8sxW3xQv1dWDMmX79zMsxorPDxRxj1QfxvMNScStgniWM9q7qunK89NxoYYQjk33wf9brXm8Lm1r4Pamk",
  "key29": "25hFqADKHQDGJ7zqAFJU3UVBvf1GyYG5aE5zC4HHxaWpyHdr8utdsytKiJhBEZZLiWfs7Hs4N3a2uYPNVswENHdQ",
  "key30": "AjxcQFhJEf49nSkVNQGWr2c93XnHMEYGqQC5FsxDgJWSZypRs2nrLAJvxyEusLbfKM43XRVePniMoCXrkpQRATe",
  "key31": "3S1RozcKM7gqQjykYg8tZHw3EoSQeeW3h781WGieLiHcga2F47euh8Ybgpq6cZaGEX5Vz9b6X5Wr9h9LwEDAwL6C",
  "key32": "4bcesPC56G78kBFcTaiXBY4mHic45Z5PJrgMgi6FfyY53ypxvQgNJ3sWR75KuhBUsrzbEFQkExkx6FaydG2BNRa1",
  "key33": "5YuQAdvg6ApsJSGzyKACtCmSy2uhx3USFE4hqcZYiyr4SjucEY3d85G751SpNka9XN7zTnKBCEJJJe91PhFXujmU",
  "key34": "JjHDtHSpWxrPECjs11A7vuZg3yKNoL93g5pWXx532bXK5zVshauFia1aNnX5uzpffforzzK7jN5DiZLwfCdwmPV",
  "key35": "2b8XcYDRvsHFQ3hNseUjRJ7VA5jXFdiJ5KzhLw62SWm1rBLwxZscnqZk4TeKB9W1aFyijmNGp97AE8jva4yUd9h5",
  "key36": "4usSYmH6Qs8rpfR56Cgw6qrypJFMu5psiitKUpjD6x8EtPJR662qccVMevceP591FzeUEoCtzc7gAFicqnoiAChc",
  "key37": "wijmNsz4QpPCdMJhxYkFfeGrnAbRZxZXud6RdnSY4JKtdzZBUrRiqffg3Wo9vgedTfxyxC4N3kBwT28FbJyKxHa",
  "key38": "45J6cetppNHD7DCK5f7fXDousud33h8w4NPJvTbDjBboQQ8HJ3s6Wk4bMX19HcDtBVpzrptX1TKFc1RAYxgyrAat",
  "key39": "3FjdtmXVXiUUfpdQ8eyRZnkU1NSLSdoZadSMGtAhtAHU9UQtiD9N2djvBMG2AhL5xBCtrZkU7JoALnDJ3esUiC65",
  "key40": "4cxyaSUJj6VMaCTmX2SQZ9BQFJKb2RYva6Atkx1cf8ZqNfFA8Q8w8BwNZ5TKr94uMeK85oH7tkJFnbRYB2yyxfN9",
  "key41": "Yms3whdFfAzzabSxZcpvpSkF2ijjtPM7oinpfB4xNnRNE6MFJ3iNV81thPQWd6iCiMsPzqMJUDZfDKwviymwMVh"
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

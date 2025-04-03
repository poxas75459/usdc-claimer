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
    "2Vo6ew6desLZhaiQc9sjDNpbuGKvaYJuSpubWqXQ8gCbDp3oQdSesh7DJ3eAw4CyURRCAcezK1C1EzqTq4RZLpch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVyN7tCdiKN7inX5PJHL4SRKURAzaHYRcR8ib7Re7VNRnnbtXpbPHdFHEQAZFsQh8eP9MzjJeXbzgPrZRNcMJSo",
  "key1": "4PGjfGwXCzBPe8h8qqZp7MatwZFwHND7uLPhVioqYYHuLZdEuwkV1ALLaYMKN8wdC7Ep1zJ1ZdvvuNSYTJmwV8Ki",
  "key2": "2Y2gz9qS48GWjzA4tExhhi6EfMXVoRZrXnecMzGRw2zNwv4EJgNBehaXgDwrxg3DP25bYuBQbqn7qNmWzAeL8dTc",
  "key3": "2GLGusjQ7jyFy8hZryC1zh9Q2RefmE5UDrZ8pbh6QkzLx6EfF1MDg5g79UpEf5pzT2Ccr1G8MXqa4mjt13NxPUV6",
  "key4": "2VJrzAsHENXFhTsj3eaWbmQzja8rNuy4zh6Yds7YQ3H57PjMNarQPF5AzYC1Ani5sxDAWk5HYZHMiMXaBf4696hz",
  "key5": "3myoUTJCq7qShk6U79ghjUoG2ant7xEZy1TDKkwMiFP2BrtN5hXC1jSAtpJJgrgimjmFJDp6Mr4mHvM5h4wV4yPi",
  "key6": "4UQbCMp1818JWBvvBoZ7zDytaQdtViiBeUd9KGzfd8uUhep2nsjBrdTpXv4GtqFwogwepWYKQAGXZ9A8Hq5yR3gJ",
  "key7": "4dm6VMW2N9n5ZCMifacNVCDsmVRtGXWEeXzyU2tsJmqVP1kVABhGaTndbnkDGt5maWt8Djgr1WFhN4DERhhxyVE9",
  "key8": "4imK96RfpyzP7g3hJ8vtttLhL3Ph7WFVNiMMdpPcaED8DfuL86V532Mad4Hq5oNuAmX1WfLBK7Nqyqaca2hBbgGU",
  "key9": "4CpeDGXbUxggMB5tyC6eMiEdwLJVsCYg413yBwEJvpyCmTrJMsBcZJeZd7KhgZYQwB7tXXW117ywMP92MpRWNcij",
  "key10": "MfFxNfiV4rjzDbuhE5phZjoaJUuf8XrRvkQs2VyjXVW6FPmPBnDVqBPsJZjBtY1jfMz95FEpHSiXnnerWq2wkrF",
  "key11": "cA7AfzJwT8MEnKEvmFj66FS1YSZML6E6PsDBhWxtXxX4e2bNZidpgbPcq1WHFjgrESV8ZFaa9qsuWsTBmjVgf9o",
  "key12": "3asYWa3oegMmfmq9gktEJVuWgBQJjzZrEWsZnBDeNA2brxUtzyK6xt9EqfxEQ6Rk71WwsPpZsvC1mqGSRdVAQAUh",
  "key13": "2XA1PpEvKQCP9LgRidvnQ2DKJHSkixRkMpGBbv1twsfvGw8kjE2BRxJsKWbetycabdfYe5Cu3zQUDV2ie7yJH2Tw",
  "key14": "2sa4ggwKyKjppyaiFAtuPjVMuKn6EbRRbouNKsF6NPK7iLnCK5zEfAvTGENFRokVQi29L8xBpsRWc9uruFsRioyS",
  "key15": "33Urodfov13SCDg1qE7cocfC5gd2642rFiPw9CPPsAcCZ4dvUd4vhabML1RMGnbc2BznNuokhtrnSgTPfaRdhLkP",
  "key16": "49FwgTiLZZodoWrpr7vJDEDhCMvwZ7sxkRuz3Vgj9cBju5HAsrcv62WPwA3YvM2akengzNxjQAj6eTawXNA8gX1o",
  "key17": "635MmSJXtuRAhCEjHi2VNUYh3vV6Egkx3VJuBAwPTjsJSiNpBG9giHuVrn9hmkcDVpnLvgprW5RdHY891GTAgR9M",
  "key18": "4esurfKZrxH32qkJFs4vEZ4dQrRv7Lfv9wHd7b6AdAPLq9mBBuySx8gZ1xNduNGfXLoVesJwtoe1MAkEBeDisDCe",
  "key19": "2VWkPT4FyeKUw3uimxnSFmNYBXPNBPt18B6DjPquFNwP9GLzncWrcB7Emf92Q6ZHBoXrWUvgKkccuGpFDqVHP4Ki",
  "key20": "3sGkwKEgq8cMfiyHPbYLxVryy1tscFw53dL7oMmapDtPigSictscoWKF3D24ZrrU7K6L4m7wwTHJxY9qozyi7ug7",
  "key21": "2gQixd5iDYNfcRb5szUYkGzrEmy5JokMW7iz99JpcEZmMc6vt5xs5zidnw85yvrJxCUirCeveNng1jvJH58QyXqV",
  "key22": "8Uz5XA2pLFMEiZh36TrGEkwTQC7Dke6HAjSarPty9QdSUAqEdmhXYYit2WFmwasFEqFrd5N5ZYBdFx2H2LVAbKb",
  "key23": "SCLvjfPuLXaEFkbiQspWTKtzaHMhwM2YCinSqndeL98Ls3aYGm4mwVyMSNbFA2MGpBaKiLqxLwasVUsWeoVSv2z",
  "key24": "1pdVAWaDr1CEMgnfgZEuvpFKzntvtkdYW3Wy91z4zAkzoJjUEZhFej5m2jzNNFbDJAqnqkamXrq9afqU87sW4ub",
  "key25": "468pozbmgYJiDGiRtom9UBE5QD6pvJVLVs4SSgdBw53kDYLHevCSRsB1GhbycSNwBYWfUtUjdJi36HW8mYCQZbAg",
  "key26": "4kvJn5r64JR3fsxFd8LAfwXnr7oRRWWHLtjeNQbLbZovBckUaMmtUJjRA4S5cZkwzmKsNHUi2b5hVxeGe9ga5bFf",
  "key27": "3pZji55hrFDpKs9mupUBiJNpuWFA1FXeTuhTRX9EKW4Q1Q5jiUWnQPDEegAbmE7pVgesM8Nw93AK12qutN47dDEa",
  "key28": "1WLZVbCr6UrTw4ZanPSnQqS9XekWGEPBFxUKiBXUU9j5M4EP1q8EDgGa2aghiuW4kcEctL4zKg3BfNWCqyUzYe",
  "key29": "3cWSGTdya9oBC9wnV7CbLTmXFTSwkZyUPXUFtNCENNVv3QjLxYT6LrxgTg5nM936LHY6w6PwbUVBWmtAkpDhuNuq",
  "key30": "weVuvDoHaekyk9g9MCguTtjRobdcTZFW4gc6QVTqshHfs5mDEWtiuQdG1zfpK8P6GsGT33FXnzLtaxbTNdQTkcF",
  "key31": "3EkvAffG3EBbFXCnwceJVdfTrygfhb1gPuNzFHeqraQGKmNJTkXq7tozMxSi9TjA3QbXw6HZA4wwKR176Z73Uc6Q",
  "key32": "3K2wP3yeSZZkGr8VYVB7G3ZnKHwxWusW987oZFR8kPMbSipQbVjN8dasBbxwvCaHPtzFvNegjedJETENbJRuL1WH",
  "key33": "2kWBQ1dk6c9xamQVdGFkuQSdJ2rmTNKYQJDEcnsAnCghbHVLDFaxvLbV3cQ2fF9NCNe5sMmtRTwkRby4QjKBaw3d",
  "key34": "5PrjzBFdhD6STGFCehsamz2et5oitz3TdkTvkzUJnF1mFdHQTpmvivWm9BgAP1SWBYWnzkBtdCTVmzZQeL1Ah4Rq",
  "key35": "2SswaXwNn1sM4c4NLY5rscFfBx72nfUB5Y9ZJtXkrAFQfYDjXw5wvwVVdRDthA1kxUV81F3K6fJ2zK9MuvUAr58t",
  "key36": "2sx6rLdoRjYgsKncnW6GmiLs2CoWkGHasd3DUQ7QejMWfr9kL6WSzThvKvvh1A9hwP366PL4s9k2whovbfTLnEXY",
  "key37": "wVLdQrkHxXZmregF2v8j7SxAjcEsAvaSd4zgmr19n9fcGYtPFk5xzwhzTghwSQw81Cy56Rui2UURs3ah9n9UJds",
  "key38": "gaNkgLr1tBCBBUr9ycDkftRG9EUarAgPHBoGJwvQTKHm5ATBPgmsoqff4XYzafpgG8mUzcquRA1DYMnnFyHc53a",
  "key39": "3zfYEgtgCVwEWBJ8cftiWJvhxpRBtErtubDxGTudiu9cVJN5yB7D9itFAv1qozdhRza2inmrq9NQcX3pqVHatXas",
  "key40": "58cPLELn57JLU7ESaUz7gaczhQsuWQWMURyQrycMuiqsbuFCbPrYFWgPV4Q59bNdMGrUYkhwDBhd9hMHEPqy8hw1",
  "key41": "3QjDHmR3sFAru6y2hQHnKLFpwKQQjJZcuhqEU1T2xmju8fAbG8YcPfrfG7UjE1QVmFYTCUcGWDhLk2yyHHUx9zzx",
  "key42": "oKcG1WYtNpSsKmFEmofoEUH15v6MhWP1e6a1UVriBAxToskKTNsJEUYRzYHvwBrZDH3ZpujbqM3nwXya64GY1ZS"
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

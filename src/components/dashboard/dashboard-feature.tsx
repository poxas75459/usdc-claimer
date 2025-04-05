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
    "vQe1GqopZRK5TaQ5vMLXPeLDKSKo86hkz1sb6sMRJssjZXEf8WXyB3CXE1h3RvdMdjvaNgFGuC2vSzHbkWDJ3bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCocRghhp8HpuqZvSPmLtPvN1ocHzMa9GpBG6XVFeNtxFPNMHCJPv5ewG2ZPC2A78yPPb7HSw1dhhX8RJrKQk95",
  "key1": "6X9ucDHYyoLH8A7dTxHYJa9UD5tUyibRTiAJey7Sxz52xVdcKDnrgHvbonLMjASwzhn6BAvmHcqWN1NrT37qGJZ",
  "key2": "38xy5tVp2K9dauUQ6yKQWbP5YdK1ankRi2oXKpdsZVWVzc9r85Quy3KhQ176znadBY8wQMvMuBXjCy3C8FeHsGii",
  "key3": "AjXCxPnATH3FroySdk1nzQJsEsiEz9zcRE4WpA8T18vDAfTQ7sPpkzYTZ9ztimTpSpwLZqJZbdXEECApLPA6NPp",
  "key4": "2udMzEHwFgwP2KAVrcGLjVekVsLTprJvLTWWQS3bBYgtq4EetRC2vqMZQJ9o3jriMVqp2ARcNLttwZtEi21D5ejA",
  "key5": "3LNGLWyRKaqKUr8urgpfnwjDH2um7QA4yJzdQZxzirWY5YX5QyDymzi8RLUeABBaD2CJTwDt67MErPPdPHGB6Hts",
  "key6": "2bTNDNHa92tNT55b77eUo6qoJsMAtxTq2XPykFjaQpb4wEnYHVjLApEzAmDQMqkbDFDu9CP9V92pN9ke2ViiXuum",
  "key7": "5LbHabqPFrLGH3vgQCWTyEiBh1MBjsD3TNm6WLXWejzdecGATMmR8VbDttP6YTyfk17TqrRYZebTbp43SEHPXpcv",
  "key8": "oWaWw8bU2zhYJmDXGPpjkV3tAePdMR2fPDzZQU5CyLDKt1KodUZB6P3kuTGb44hPzBKZpA29Ucv8W8gi41U3MNX",
  "key9": "2iaeDFfjvNX4HGBgtpNTHjTYToT3YrFFmFohg7cNygL4Fs7dmUJE8XicgoW7fhT2ihkUaVAkSgg9yeuw3GSi1rrE",
  "key10": "61ow1UT5ayd4mLmUxnAHk197sVMJ3zUBiQf4daqduthUs3CpaEQ4fASTTXfjcwDfXS9HRBJVPhz92RztRoUAAsSd",
  "key11": "3BDeoKLfMyn5RRX7Pd9FY7WS24vYU7G2BpqGUK9FVywLJJwv6HJoFPiG7hBiE4fzUKT5119Z3EsjmhE6kN7oGLjk",
  "key12": "4JQfzepSLGhVAXBSAJd87knFvJrEMSxbMBncVYLfcBJTWJVTkyEtbQ4KW5oHniMN3sKXGNcEs3mTSuQ5xb8SYFr4",
  "key13": "2dqKVn4sX384sVc7tmfawhxqhS4Q4gjsEHLeL31aAWZU2nvZNautDieEuPmjQ1d14sAFVCca5MjuU2pdRRuE2Kow",
  "key14": "5Yy1EiwPuz6Hgi5rrVyfEx5YjvVrYMAhJEbam3XiNQPNVzvRxxPUYCq8qLeTak5VgiqAoaNV9Lq4rtUQmTtEaMCx",
  "key15": "4o4Nu1d5iok5mxhynoF8GeRaeMgm6Wh2tYGmcZpFmRx35pQHrivFeJxojJsMbmGygteysQLEhV2vmYP6TR8nn4TS",
  "key16": "2baB48AhVELSYyuPEaG99wRYxGicRStrdsdmChu69MVAHyDHKQZ1FSmbDSCkwYJf42tp5vVqubCVyfR1DrG9xNLp",
  "key17": "5BADX4CNgPCZ7tjhLTuCmtnzVb7uzHyzpfLnDegGcFdsMQqjBSAsGpvvSvaXcrCsR31Qzq6VNNX7igiqMKsLxY8B",
  "key18": "5nF5ityuHzwSGt4aZkUBEqfgs7dwHjFV1rCQQm4WHE3sQiGJPzgBpFR6j6mC4iKEiqm4ppeaqB1WvAZKzVPJyHg7",
  "key19": "37zU92e2mS3SXtp2ZDX7qZ8qMd4znsBUFkiYW4yVYhMg5XRNiyVYJ3Wv5gKdoJ2FpyvpWSS1apnN9v66N8ECqvYs",
  "key20": "4yuoHzePVrok1boy5ehgWwviTsakseeyKmDCKTwfcz6EZ9H5kjerouEeirYivjBzDqfmm7VkxbAGbHrVYJre54FV",
  "key21": "3uCXCyA7wbZ5C2KM3THurNndcDVCny286cVJwEP99ohFjzYTT1NT7rSViuwk2GvNFPuJL6XWW6npEAVErcXyjdU9",
  "key22": "45y49jZd66dGH54owHgxfHJ115dtuDfQEh5VbV2MtK5CQzmzruiYTAVA2cNU7xTLGQUsJdidvW7biUZW4yvGxEAj",
  "key23": "5X7YmwoRqr1xqwxssTEMh76DCNWcZcGyypEG88MXCm6m9akDadsoChWryVKtZckgSFnF6HfrvGTf2MRqqHKtTByD",
  "key24": "fTSTxSAWQSNm4mNztfaUrBD4PzonAfahBCwZcFe2dYK4M2mrwSRqTsJCF4ehKP6ojisW2hurmww6ioN7YTetuqD",
  "key25": "5azVjD35ZhJGECZB8TP3D7ecov1LbGZyysQVWwDL9PKdg1nPqSQW9KptdyzZ2xeTqqEaRjvXNPtEPLtrAr27Roa",
  "key26": "4juhUFj384zmPLExS27NTrECTsNuY3JJDuWTT8rxMX3YhJu5FLsGktf2KGqGaaaQrWiayViFvCuMD1ZvRqP1cWFE",
  "key27": "3JtDw1E9g3Hf2JAD4WqMwac7V9DSr1Sgncs6h7nUiUjJjVfizJJPdTUuhh2dytUr1bjJBLKhq5W3JeYUi9rqw9Fu",
  "key28": "28uo3SVzdYHGYUKbmXVncXhYnTZsyES7YXucpiskzeNZzeZLvVWa1tFGYEPZctQkMuPseK6mXhQK75e9Qw5CcFvg",
  "key29": "2J9v7JL7pAcauinSYiteDCFbs82AkcXTrFCCHZb5wAdQSaP55vvwUAMbkXdfBbVV2qQWqHLXoGusmZxumGWH4DLP",
  "key30": "3mLxpMEvirwYtxSVjv6iirFB2sSpaQd5f2ddJTtcYyWLGbEsfV7dM3dXnwnwXTeRg41Yd73qZUjKUSr788jYcZEt",
  "key31": "2fmSNr2E5R9KaGTwa16fVNxqpBwpbgL5F8CgZCVJU8JzWYEPjUggXnrKX42LdUxBmUssU7q2mvRWeosd34JGR4JD",
  "key32": "3EHCCF8t9J6XVQPWipoN8um7NpXqTJB9CmGdFN5s6ooMiz5nocF2RX8USEoAP1TYrF8agmbrDqDdMvLTRbzLPkFD",
  "key33": "rAZdwFNPnXNhhPr6w1M8iwooeTHYLY2tqKTqMTx5uDCptztvQfNDacuNA7odVm4RQqNj4WFnRsu4nqzAB4jGvWW",
  "key34": "3Dp1VQ5ahNXULHhK6nG4S9atyGGMhXrGWd5etAquthuskvSoNfmSAJYnDVDn55Hw6jxA1tNj6w3WPuKacM6ZtUdo",
  "key35": "3LF2v1Z1CZ1zX5rptoC43zc97cbLKwvXncVMkZMjKtynU9VXUWHWpsY4evykNm3kb1ErJs1nRB2YhAvgXP2mnoJg",
  "key36": "H25jNrAcyyY4r2kiPwPHSg9Gaz3pmuqJjjpCfHZ1CEufbC3Qz44xFsWzUUQmFecPAkvBcBXa3eKsW4YCSnkv8TN",
  "key37": "4vAx7ScCJM9MgrrEudEkSVEJqzU3BcEs6VRPZL6R1XJbLryLiUX81krez9n6ptY2Yc6aNTDukz82RnS6bQ9zAUQn",
  "key38": "3HgccXudXVmeznzAN9WixbPUAdpSbghjCBqGACpAyCkAfr1T67x7ww77x2rmvfiQw6R82E5Jz6jbZtW6rcfgiWdJ",
  "key39": "JTM4DaYm7pXzjSSZPBjRjuLyiRmBHZ1do1XxxmEfAuRa9dQq8pyjBpFg8vmTaX2xGv73ibWjgdFAj5qWL33YbxL"
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

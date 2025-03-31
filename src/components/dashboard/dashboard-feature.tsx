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
    "FpbRHTCNQfvnegXBZ79gijTCB7ThcYtXM5zndHeY2a3XtHo2UP5Gd1aSmwDdKueMUWeyVFSekVAJS5VDmRgMUdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23BxxUJcukAFx2TZyu5HpSf48VLRoWQEg4Wuc3NX2z91dmpyrprkxDFnm4eurYAprKeFfD5ra1qcY6x6o86f3ceU",
  "key1": "JGtPJUwsFihGWgjQ2pajFs3xxf7YK1wcGWZUiVMvB3cC1pPR7f3mhSLVtLPt7WoBSNbJcbNNcdZDafy1pwz9Qsg",
  "key2": "2Wup335DnXMHBf58f79j1QW3Cbb8DPoF4VvuyoVGiHNryxMttXYUbV2V5St5njTxpFdKDY17JpdVebXsDZsdJwW2",
  "key3": "b7DuLtHntbNABqv8vVF72EVGmVmQj99TqfYxxWzwKEyws5an33KwRgHCJv3oRkKxfmDH5vPrGw2XybUgEpeWe55",
  "key4": "5abBKyFYVFFynuBoDartLKS3pebH8YmbWrcrqduwaSwH3CWxnJtCg8C91XRxFd8qKAzCf4cTPjipZX8eKDi7CuCY",
  "key5": "5vAPBSHw7M2Dkyoh7cHAewjKzM9Dg2q3NxZL6XZxT2GJxmpMzTKGF47tgUNBBxcRTF1wFpnUeRzaz47BKpyNpifx",
  "key6": "35TzqynCEH6oB7HkhDaM3yWts2W5rGmqjbReRrCRnYFmyzRuFjuXkeJ4mEGmvAudmBk1tSu5skigDEgNVq1s7BTq",
  "key7": "2Dfm5LEmTd4egwS45kFp9i3dg2t6qGxNgRzUdW9tpQyaKVa81cPb99BCTcJviakNGs9huYKC2QsDjTnZSupaqwoY",
  "key8": "2CrUQTYzLCCmGjHK6RJC6iqLLvQmmBu1q1ZXwwLT2Ds5k2L4DwDkDfLQK73iJjGBB2oDLG1d2pzorG9D1E6Zfh4L",
  "key9": "5XA9B3vKLvBfUGsBxLceAMLL2kEqKDeqrqekJNnLCX8HbeTiz169BayAvWdXujXND8fqqjvBzW3x4xpW5cdcL46L",
  "key10": "5GD1AJAD8rBb2xUDoxDpvW7FDVEuM28ztuvKuxv9EtYRcGWStDNrRwktFc3tP9khuEkcgDLm6MHaZnwJ9Jb4Y3uM",
  "key11": "4R953Aw9UY1mE54JqLBvRjiV7RfpdwdRxWihJXyAVmHfgr7U7w1N46SAzmew4bDaUAsPAe5fK1BeNB8VfKzG74Qd",
  "key12": "5XphJd6uLNf3JhVaGi9maXTTJa6xi5tDAKxmv7uZUd3ihmKU7rgfXdTHCp1aqxJdCnNEh2nkCH9X7aBtnJkWYo9S",
  "key13": "4vtV5dpv1DUNfC29wosLxPiXfwpyKNmhoQSknyzt1VPnhPrzWLHsQtGGqqtP9M6cDmxsAdAmbkLihrkN4MJGVkZa",
  "key14": "4d84Jd1mfaK6a6kZfhkFqxkENvnHwUKeityQVeZgxB5DKiVG6ffMWfXvvdLLnw56TcP4QWrAPWrKzQZjitvEiywZ",
  "key15": "5oBSbwreHK6TUDBrRLYnQSPyTs1uwsAdgM5LxKf1CreyUMbkSWKRN6NSGmun52zv1rWbRNc4wzvyFgx1L4qdARAE",
  "key16": "3Z7Ho7b2rXhz3Q4q18Q52RFXfjA4tBkBVxArU4VCq88ey1B7khMHSuA7P4EfgKUCo1afBMKD3AAGwzAnCyP1A8Td",
  "key17": "3cNyC79yvJaN9N3dP1pk2FnG76qPTMFZ24RSLe8LW3VaZgeabnkpfLsWbZHg95wze54622U4J2FvK49FiX9NSH2n",
  "key18": "22bRBJWmTjgXjtPCc2WviaA9PoqoC6sUjUCfr1QddCTDCJvSyJmMHN7EVr4nvGTKH7t6tJKiusAKi2B8uFLC7rcj",
  "key19": "45kzXtwmHEUHAZ6h7Bj6ge2jwkP5mQAwjehe6sRirjExQh1G9Dn5A9cYX6EXm4h56PirFpUtEhGFTa5jQH7pmzZj",
  "key20": "F6qVA8Qk9baWuHLaBGSoBykH8DC6FWPL6prgcR9MmjCj4faYw8DUy8BdKyc93sWFQA1bLUdMj5x1AAigD4d3x2p",
  "key21": "37DKsYQb6vA8krqzUdRC5ptv7L2fu3K8mzYRW9C9UeiWVChQX1Zv46X3Lb4mJ7Bo2C5B24PgJ92hz7Lu8kcxPQMo",
  "key22": "2dcoRd7iu1qApXNSoVQZzbDhKLJfFhgosmzZb3oF9r6FTQm1WiNJHvgmrNzXUJZ8Ehy6zBjMvPTZfEmdHMCc1q7s",
  "key23": "5QKmNhdHoB2xbGnP8tJoxnxME3Zt6gAZX8yTN8McQiebfsmD4qxu8p2C7FZKiGET9WMScdyciZKeytowq3j5K1ZN",
  "key24": "3fCFrZk4rnYYTYUaTyKtFzT9vzkaZt5edMjpoGtqXP1LxpNVCF4Hr6Cfd7U4eDSy8j7VUBxytGsH19NhbeJx2X9",
  "key25": "2ak9Kew3tBLix8dn8fiawhkAFgHy8uKVhmbbEEVRmrtHPD9QfdT3zbdogeZTkUzp7E59JsUZuAWWFcNLM2afkR4N",
  "key26": "4CMCNKF1o6bzLtJhcUW3oVDMMJA7LkdKN2KKBU3CtJVEzLpVsAutMYMqdC2VpjdnT4W553qjDUMzX38jJ6tDsmuH",
  "key27": "3Cfgje22N2TY9AueoGTHj4KwPAKST77zXG5H71edEELHrbx6hHXV6pBJsa6pPaw9AYEvx6SLRN7k2ubzmr7VREWy",
  "key28": "3phTRKdJcq8BnNk4aHzxeCNfguTbxqwMTDnNmQAnEDKTt3Twt5nr3HRKZYejRuiUdDjk5GztTmhzTN9Tx6nQHbwB",
  "key29": "4H4WvLpPC9oiEj1h6ziQG5biPNbScnFf6UrzzHxrLJufq7EvBazL1SNkuam7buebz9fxsLtEL8tKGyEyTvY8Ewk2",
  "key30": "2f5YeWLwKgC4wBKmoSkNxL9GPUkr6XKAD6ZmUq1snxMTkCeFxWAiEFQGJHxVaLDbbULH7c8z1FV6X4vUkRXBajns",
  "key31": "51HifbzJaVNhxWfTZb7WWnXTiuHxE5hr8KLKadQzhGziH8Rh898XAaEDJVNxWxzk3nmYdBbavYEsAQsbcsfg2Bmv",
  "key32": "3k6gf1D1v3bWJxJ2vemYzve9GdQwjYVo33xRPNKh2X2ch3fcHZRAndQx13tx8mYbxPUsZpXvxcP1GwprFde595hE"
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

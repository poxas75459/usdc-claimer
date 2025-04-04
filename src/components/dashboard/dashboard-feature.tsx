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
    "4gbnzDhEWdbXpgb1mt8Afb1mr3cPSUEGrKnuPmfVuTq4JLnnUbkPhNMBiKgAw9oLkx2PDxD1BMtYPa87Hdg4QKAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xPZmaUbmBZkqoA2rXKYMq4XztWwMxhU1iVzMkhAwAuEeFsW5WdT2iiXYGV3SdgiCcDuZWs5YuHm2aroJLcsjEJz",
  "key1": "32j1dbv1iAqk4gMMN6AukC5FFTyijh1w1WjLR88n6JwGo8CJJSn2WXKC3j1cZNbGh8UkqYyy8bpF3LB5jyG3mW7Z",
  "key2": "4tW752YdggNXJvK9Kanf5CvgSSjA2ZVLEvckDbHtuuE1e4pJSCxYXhBF1sBGXUtxJ3ZfQF5r7K4aUuYNdV5RmKhT",
  "key3": "5cLgLmyzK6tNbL5PBdCRBUPRQ4LB5KFS6RTAR1Tig6nQHnhkLazAD54nSngtfDpEbQ7erUpCh8G1KYki8GoMYnfo",
  "key4": "aeusJJFskZdYSCXyz6T6ZmJfu9DCDxFZnTStJWdHDUBP12vtX2gkwPULixhTZ1gR7UFRAkaoD2uzctUAUqoxK6M",
  "key5": "mK43zfAFaAoE9h8ucCZ45rB56qyHzybmyRe75ZNH3kGy22Yb5EoordZK5ZCbZvNDPefEmFSDZhh4rz9pFJZSwWn",
  "key6": "4KjcFw1aWZKozfwCyQcVEEaPNyRE3KhbvdCuhDE69KXxsJHHc5xSgCLjHJBKx7jhiThKfaGVsFCkuZrtarL6ngkQ",
  "key7": "2b8pJrVf8sYfHvorEsRVGWDHedAEZP2PnFCCEcMknpLXLbPnEBMK4GuxERoQ2UxdLJGuYPwL2JigUwpEj9eVaSMw",
  "key8": "QfKS25SDpBZdjBZdLjQqBQEM8zegjenL2RDTjsjYFCzVUnF5gZiexCXK34oq9npdDpimLn775pSq3BoX1JFGB64",
  "key9": "SMB94HY915ngmHkCUKoP4gs4cyhFxW6drjUK2eS9HqwX3ESJLXMpfGyL7oEUncepgno2vg4Fk9Sb3DU8pCohyWL",
  "key10": "44LUoNGC83m9JWprkkBqxppfGpABsZ3TrwcZ7tZ83pgkwLWSy2Cqp2otzHusUXHua4UHcGFCzH3HJe1UtpxKCvyz",
  "key11": "dK3XduYdf2BZMzcyvqSG1S4KH5Ln2oCTrNWHx4ko2pMLZvj4yMFFvF4SKMAiZ3QnY6diAzKbNDh5Dib9GE4BTM4",
  "key12": "em2w4STAnAazRLWiqnqQEc93RyGRdCn7j24bXyvhjEyxP653pbf1iiQu8SZhTNSbtH64igthczsZd3Gc5pYw3Dv",
  "key13": "32dz5JDoULhbv2GQZLuyHT61P3MXL1PaTBBKspkyH5LpDnvb2u7PtrhC4BdxYgXoXNTA5PXKhEaeAfKVX1WyfnRa",
  "key14": "2mUFYbBQjatqXSncRMLBrgt2XKEgTD1xTuDkwQ9yVN5BnSU7rxm84fxXxJ8WiwZgFjMwGUgQP3otZw4yyqSSUeXf",
  "key15": "CJjENLZ69LeyoVfdXpq4Cv3Uz5y2ez2iJxNScqDJVFXPgi1DsQ3nbU7QiiDm1yzPKUhQ4yiKsGrJY9VZi9ZXhJX",
  "key16": "VbHFDCjBDKP2pFqgmt9NsrZ5b5892AozPoJDCYDx42qvm3wXHoRZH5iEZhV1ifsJ4ojoW13Kk2fj81rfQ6MSKpZ",
  "key17": "2Bpjr6zqfhc3SBxcbh8wQivLK1vkbTju4SWsM4daLH9iTqCaM3V6TNFN199vmBVzf2VAgdcN2giDjQQZUZ6yv7KT",
  "key18": "FsyHkCgh8xMCikk85XMMvJmigLqnZFzZte5A9fyyEwL8Le2ra1mmaMrVqgLGZqJpK1amUzjNmq3cPkYkoWC6ELg",
  "key19": "5grczNywVrC1mhA6Fq8eyyR9E2ayF4zRbURkTSWXWPUYstkmgraUnsJXmABLTZ82dbonVnVCYaSCCbtcraK3j8u4",
  "key20": "3Vr9TLp6r8fFTEfCcVZrMkTZkEt6uXayeEN8X84xNjkiusAiocprPVh9GpwjyN16wFabpqsevqVc1CCqQzH1Gruq",
  "key21": "26pCRVrnz9rhYGh283RCneS4ncT474sT3JZ26Q5tQfDHR3gzcT5asFo5VPp44frAHsiBMZQE9Zaq7xF8YPFRWFi1",
  "key22": "4BWBnT4EHQw32WJEuW1bHQ9WTnSb3vWLxrsjnCnSKA6Y5hPNRT5EoxrGPB7aUAa1w2yMSMLiYxhfUGe56yQAEsXV",
  "key23": "4Fy4LrRdjTtLSdzEcjF2m9phMmGQr8abTWTpeQBWYndUDZk2kxFV7nu2TGKxLAwqvpwXWBqthYqgYWBGXs25NBtz",
  "key24": "3xJHhC1P68gwR6BKu1bmhQWmNWrs8FmPE1Xnpga1jsnDgXSv2KDBXDf7UTkzYwocXsahp3WYqpSJLUGea7D7NMq2",
  "key25": "2chQZ5CTiKBXey1Q5jy3xvkQaHcjorrqatevmxKxHTAUggnH8PBa4WyC43SGZPC4g3SEianFMSedHNf9TDQKvKNo",
  "key26": "3Hhta8Z6Pv47jNJd5q2gFgT1Ja6rtU7DTwcqd73dHvqFQ7yvdgsoV1d9puRqyAgi3M5GPQMxGerUNLUYymfxtPyg",
  "key27": "4rJVCWW9hqJMNMFMWP6PXo9opmrTFJrdiSQqrdsEywfKYiW5FgCwsosHoWKEmoGz9FpZeLjERw3vT987ej2vxry6",
  "key28": "3ca54n2H5oUkHsGAXujpYec7qbmXP9RLcKBTZjDNWLZJgpN9NFQAQ3CX4R6fhZ3qkptTHXmeCWsRbn1cApbW6uy9",
  "key29": "27y4H8yt56G5aZdG9CwKUSWvrXCpmfQyeRwSbupKF6LWtTVDzYMoZUdbod1fGiEqEn6LbjX6wbfU3mh4aC6zrwfh",
  "key30": "2bMbFbPTNoRHVvmaNHzTSKyYvAZqJiikDMLuYE9QxFc4LsBzuuGx68Uvb7rgqFhVoaPJnsd6A8o6PtY7qKxvprJd",
  "key31": "2EwA5mZSteqVkhFd2dDYxgG5fNzY17eUs3MWyWVyNsWawSy34qnLxET9kmWwv2cUowj3Wx3vRVnxCtcwNUXK2Db3"
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

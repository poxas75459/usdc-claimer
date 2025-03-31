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
    "36po4XaX7wSBGo1jehosPHiGirzCqCqyhPAdV7Cyhi9JHk6pe8i1yi8DJyqaZoeJ2awmcXx57TK35MUjuYvNno2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iDrFHMMaWWNur1aF5zC4sGaRWqSk9CDVt9qtFNtkUb9jgsiV5LdB7AEywmc8rKRT3G4YeFxik4TzJzXfihQ89oH",
  "key1": "4g8age2Sr7CfWiCiSEQxDubKF8QvE2ZG3vymUg9t5H8GTZnenRPQeDNn3723FS2fXpqJeg6cHc3foMDQFhXhf5nD",
  "key2": "5vYXZZzL89QBWPtASoEtdaiCakNMjKRk95fJT7QvGvWRgXZajccgmAiAGuQ91fJDgADvJEVVxxEiR71Mmzs8rUaD",
  "key3": "2YFnRkW7BHkNn7U2BrFqsi7Qy8XevVxyw2oi3BuWcLmFGoRK8nZr94bDcUJw4XYgu5FcsUyvtMMAmpFe2zABe9Ej",
  "key4": "2UFYS9Z8zEHvkqyb2AHMYdkcitdPnj6CFTDqVUS3zXBDSafBxs5aZ6F87VjCHujqZt1yJRQ6S2bUQEyfaMikj6sh",
  "key5": "2oxkxS3c1rgKV2ydsSixeZAHDK7AvatrtG5KdLbmdscCLgo9CxMoXTvBvfbgS3jbRrC1pZZvgxiH2PfSe86eh9Km",
  "key6": "3ms3EqdoKKkNd8rwYftCZg34WzNc4ajXrquDiL7qmJYxw3e77YKhiJYXXFLzZghjdzH5yZ9hpkNjqGVEsXE2B7yM",
  "key7": "5nCKywjYz6xmtWSqjKiEhsbeUE3QxUM9pMRjh7vuw6B9zqw4ZtjaqtkMcRLgkW28zyfaCLoQpU9rvTxzsEtkbyy2",
  "key8": "5AKyXYzzvL8Ka3EkjTYtbVGFp3vtjjHBkpRs4hPCCrBgHxbVoggh6oYRSTsEKKEtp6SmuHbo6BgGubNTW2mHmrdS",
  "key9": "2Lu9ej5dU3tw1qqMtbNiBD2Lrbpp3KdxWjTJp465sSxGeW7k7iiXVHJVq1ofBAohw5QgwybsTgKgd5RQD9S3oYUi",
  "key10": "ZHUnCfUuV23KrALBAvdVntbJ6hCF2psmxnKG1GzasTxNn9KpbMtKxQhhDkAoRdEsRsfhSgqfa3Jub8TVwvhjHjh",
  "key11": "2RtK3QhAvQjGnZu7s6SeUVRVaXC3JAVmtrB9qgLHWbhwAgZVHJEgBYPpxcQRu5ZxNWg1A9T5cYTvwtqnUtYeaB6y",
  "key12": "Fibh2dFDJWkTf6fLe4LeBoQ5g63RdyrUe78VMHPXg2W9eYFqbz3a5aj64zYPcYJmjntAVdf2CaQRLEEMQmLG4RV",
  "key13": "4Tb8fGiwgYaL5CoDGRRYaYiNhEkgctmBPzoyP6nv4C3wSEni6BBHCrEoG9jWawSGFNa265RicUa4T6ev6nbSb3hp",
  "key14": "5XqofGUvGXrzcMuFn8DmuCR5Amh5L8E7q96tWoxT5JVhkrzs8Qhw9MCyFDLeQAcPP4BSU95nkMNoFAXS6xMBpGaz",
  "key15": "4GbrudkCHijRyYMzHjaoeQVJRaT85owGaVa1rCd26Bcjs4nFif2yzipaNtJExNhqXe2D62huVgtfGysrsZTSaYmE",
  "key16": "3WyrHVfiQAdty6sKszK5NMbdNM4UujgzPbDXURWRMAYMHaWTsF98MZkjVzrvdNkgry7Y3X6dNVWvYfW6dba9EDyD",
  "key17": "2Gy8ctC1bDtGLFAjST5LQtiUUaVUNphN3SAyswRwSBK71UE632wMEAKZE11HfJFrrpZKUk1kcMS9s2FZ7A3huvFW",
  "key18": "5e9RA1ztaBqT91GMtDAEWmoWDfs7znXWPWpCDRKgkM2cnCeGoMY3ytCx9QxBV4XdgGMp1FtnYQ48yybfp5yjz8AL",
  "key19": "2u6BgYNiNDHPjaR82mdi5YkyBWtYXpyeuarLwQYHuK1kXG9GDxo5h8xMRyjmFQGoHXptCwyaZV2eGT1He2rF76n4",
  "key20": "63Jn9apjvTRBraAnWF3nA3LvojxhrbXk3trX7omBDR4pUdiCABayQt7eQ7e4nRXU7noTL8DGmvgcxBJDyzuxbm4q",
  "key21": "2NsVJqEaZWhMbxYCivZ3ECAynBf13bi6shbsrkeydPmqeSC6whwHWK1QC2eaPgapT9Vj8NosKeKvVR6peqMfs68W",
  "key22": "3oFN3aqVqRjFUi5PEUTB5tvDpS6wYAfdQJwENfCFrXo6pQhkUZhfT5jd3zVbyBbeYxCBH6EhsfXeRepJDMn5kCLd",
  "key23": "7otju6s3K6tCVoTpKC6aBWZ76vH2cavDz9A6tA8M7LLNqkKQbDdj6pQrSr51jmKUtHabgLm8DBtEvqFQWsgGcEK",
  "key24": "2RbwSm6PKpU6WmxUQpW6bwn173DiG1eCEiSnWUsp8abkvzy6MnsEqdb3wrbdUvkGf4qYAPJihWquAfwLn3VTDvUp",
  "key25": "T5QUmqiBi13i3j1bWhWVu1tfWULD71xogbAAJavBGKfLxSp9QRmfndRDYsCqDFQ9gQTHDhCJZ3rFGuhwFHEGuKW",
  "key26": "4Mz2LAUTnamrL85yca1ovUAXNPRbdwZPDtVYb6KeuAEZe1KkFaaRNFU5nUGiuSmvMn6ZfgBP6aMNkEZVTkVzgsuo",
  "key27": "5MqQtPtovWmPqjRoNjppGcPXHrHFswfonkeiFTt4sSGebMEdQdmwPJb9wUnhjsDEWkuPEVyyHyUn4JGCBta2DqTk",
  "key28": "4TkaBiGtvisDmmaJs2FgGGo9vUiMnox6doXkoMds39TAjs9Hs69vLKEqzwnjusYcRBEfx7mimR4hzUXEiLs2u18v",
  "key29": "3niW6EKDEYuTH1yu6TyYnmR1NWkTTZhsX7KWwpd6dsCpJ7c9Lo6TdSujBv8eoUWjbEYDHLCs9HfEuxs37XQDpCEp",
  "key30": "8TVzzziqCohNQmwHDxgsbXHhnwJ3Lmj9NGLiNwcC6GQv7ujvX6EQ8iB7oyXYYjwL6ZFwYVpH9YUghD4pdW8EaJF",
  "key31": "45tnYPLDe1HP8cyPZJoHJwtbojwvygWpL8CF81gtfZ4XWFChbST8XBwQaCMUmKJAcEqgSzuHNU82Kd5hLSp1mrNN",
  "key32": "73ApRi2aSp3y1iER4x87MquAHmsHUTxBWdVj6ooywZLcPZaCzoKF6oxPVcev8TocSobSDmGB7nSSZHySsh5QXrj",
  "key33": "4ic8CppzvKrafTDUzF7qUNznKEcmKEAv5DLkZrCcbCZAqddv8qU9hsgSZgrK7LpPaYosBGPM9iMKdkcWag3niyMW",
  "key34": "fJ7Gp5yPYr925UYFY36A6BYdN3FfTMtiJhsyxn3czGrvvL78RDS2LPUXz43nZbvdNKS45bZ64a78y8ndG9Ed4rc",
  "key35": "49frdYFaqRx8q2ZcuHKd6vVWvwaUxLp9SoecpTBTcPyEGCzRV7zsh3cJYa4X5y4PmVWyP9HBW6s8RD5FpJrBFrzp",
  "key36": "49yPcaeF9GRUJ5H3kd6L1MhGqTZSA7xeJvB5agSfwESpiKDZqk7BU9g4VVdjF1XwaVaqrEswVEf8Ck4xQRUNr49C"
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

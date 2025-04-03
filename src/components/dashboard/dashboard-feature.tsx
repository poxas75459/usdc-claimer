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
    "3Qns48mh4eR8HRyXQ4xKc849rM7d8aYwCi9S8fEntusUNRpTWpKjPjfV21miKjyMvjfm9gvDU5oe6xNEtAGLz8eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFT7DpuSRYmg6qptV29doiaxqEapTZuY5jHxswS9hTpeD3gimfYbbkCkxnZhsLpMpdMu1qP1iYGwp1XxcBCrmyB",
  "key1": "FTixLhkGLY9JkRfdq7xCAp2SfXrrfzL9rVoL5A2BiYV8QzkWiXdqgV4ux3Lzn22NHJSRd3tPBKUNq91n6QPy1St",
  "key2": "3tdwTeSPPZTwKUDgHTGtRB1HgqqxWJENFyxE9brXdCoDmhMFcGTa3bxX3HpEgPydDt5BaWWKPic7WiMCNELuNqeL",
  "key3": "4ZbXFLffTjUwbREZYx8QcW5yGfysX58P2FQDD3rEVSiXnHdrzdhkaFCHNQPfvCMTrQm7tspMof7XfPEn65DuTTEv",
  "key4": "4WJtvzD3gPj3tZG97QjDfkVv6P5j77VacjcCnwFmZET4tJQMBnnaXAgMQbgGKn4Myw7PqQ98gczfTpNUaaSrX8RV",
  "key5": "2Q8eRiYKhBihgd2JDTb1mShNZHJK1eYTVPitjeqRDfvNHiX8f6uiyrYmivpDv4YGrFUVHa8VqBcLCVSPJKZAhu9z",
  "key6": "RsqcYqHv7Z8PEDqhmHxL2CyKco3FQVBPryyuVdL3AVndQJntLcn5jibnQDxSMd8VN1eRkmUoXj81EpXfgj37pDF",
  "key7": "3z6J2PTXGb42bf6heY2VoCQ18ihn2RUynky7cX5UExjDvx9e3LFhdLWgcua9Kzdz86GV54pU58VzdC7BkJNxLvud",
  "key8": "5CKrjBeLUbXLgUaunGehPQxMXcxNHDVWwavUaxPcjHY4jAbmrAybdTNXGdcFYVjj31J78p6Zpjji8iEv9NsmgKk",
  "key9": "hf4hpkFWuAc8h46f1mDLtzjLuNqYMQETzxoZKqgT8v3bS9ZGce214V71btYwMMUiozQGqSpas14QvbSFehpRfb6",
  "key10": "3ce4sAnAUNAMsdEC7ViGuiByFRC3Bx32SYED4jPQNL6LNqu8WkHCaTXRBtuazdaLrzDw41pkUtZX16ja55dEHwYr",
  "key11": "5koTKGj5NtuhXBHE3Q6PutGfbFXyNvJ74FwQeKcEZg85QvMJQSg6xLh2TLNDDLAwHi7XTfFtdLVDz2wAF1iD8JEn",
  "key12": "YBkvucwytC14pJpvVBG8NNdfYjszPvnzQAopx8YK3GtEJENEQmZ49d7zabwbRJkTUZEbN4jkRHzjpbjgieKmXNe",
  "key13": "4ucXnN9H92RkGhKGQux47DEt3bmZLeNZFyvrF4SqXFmPYthssUknnFcdpXM5As5gSiM8vxa2yHZcXRbtzaDa9MBm",
  "key14": "5ctKMmT1v6Y1JmFzwvAaMydSpi1n6cr5KhBxx8rvwMuE6oNea5DyuhUrjdzNsA8pzvMbhHkK8L5h1wbic77DLe6R",
  "key15": "5fP9z4R5BCEmc4HiCC5Kk47DjCJA6h1qXkHH7xvtMq2Xe6Pzj1DVASzKWkigw7BYoth7vmTqSfFAzci6PnWf3oPZ",
  "key16": "4qcxnDLdMvusLDWA4Ba3PY78rsMAr3aJ3X47caouQ5iPBqAbXKRpVnvwsLw7g7AVoksa3PC3Lz68wJGkNoubu3J1",
  "key17": "2pnqL2NL3rG8fnMcuX7KNMtDyPD1UaHf17iHA3D1VmZzgTwSzedvBoqVKeVnFJfiGNVr1AJB68myMAxcMhNRELrz",
  "key18": "3JqLTzx3R9wnBphevLaACC4EQGSRpQsoeektLLGiVexieip5R3FufRCdBFHoUCzbuu4mbGmMGqmSz1TXnWnfm2fm",
  "key19": "2g8hkchw3AApS6MniSoXWunfMdX8AHXN5KCgyZRHB5yeYk2FCLxpzCjL8yfnceE7knDVKodb3K8RJ7TFRKkqL2pR",
  "key20": "5g5SvDBErG7zxCbQ3inJoKYvSHkarkWrcGp9Ft6tEWA4jeocQbcHHgmRfThw1UVWPfoMTUUeoor4iBGwLq9FJDXs",
  "key21": "2h1mim7YDpoXU9FDFu7spfYcxdGPQG5pU3gQTBt5bmwcM9vx7Woy5TfKqCbaCqwN6uY9a7gegtWHzKDHaQ1Ztw2A",
  "key22": "3AXyghzghT567aAiBNojE9ZFt8JuEAwWVN9VKKaj7TgSPgG9p7Pu8j5RJxhfYJiN617uNe1eVHkxSWeePewzBMtW",
  "key23": "KzoQQN8F1xNYzwwKBXri8swH7NcUu9zfyxkUYkJAsAvqMmZffDb7BaeV6x3wnT99Pdw38RWxAE2pyEQ3YLkRku5",
  "key24": "5QbTgW35n6LvqPg6oSVg5gYP5JwZZMZA7SxKcuatCBD7miiLGeYsV3gsV21vwnd67faeCU4xJrdE6U5escwi3gFm",
  "key25": "31QhNxptLTHuXC21ZKhEsNcxbqwf8DQM1fusVug7EPeciskyUZM8PavuSmrorAZ2ZQWqV5qdT2JSmN8cFpLnDg57",
  "key26": "7jfastPqn5dHX54tw5xAUqRZJsS91pmG64AS7qBQxH7rcD2c9yQrLNAdNnpcuiqRTb6YayLnJ5S6Z37iqXe454H",
  "key27": "4XYhW1Gop6GboygCpttQn2zT6sanNvooHo6Qq26yFDk9aCV6cWp7DFhvU7BL6SdHh6Q34CQ2kvpxWVQVqrZJW2Up",
  "key28": "54ZnpTXA1qAxhyew4K9wA6FHEmArVCsJyzk42nt7BEJS1qjtu6odxgBVwMF42jUQXBoHurvmaRs93ppvyJeuyW9z",
  "key29": "3Pawe5hWYpbCkVMHH72ZpyFzSUWvT9Ebu6PRHe4jd9JuGXDY5JRUrH33QAtrx1ahdrqtpKwETSqrAU2hGrfcszrs",
  "key30": "2qiczBbkBy43umvtx96rAdHP3nbmrjK3MFPaetckn3GbZWfv94kwNgpN75JTJ2wQR1b82dqRyDmBeoA82cPwxpTY",
  "key31": "cK5G64BFB3jisK6ttfjxycFm9nDVR2e5pU99bhKCEzfHc6go4UQuQfTMfkNosFBTccq9XfSsiueM6yQ7rRYMkCr",
  "key32": "4M6QogXdsBtPe2TYMCkE4S51TEBxEsCSavxUyRMJfrr1Uy3CtwVh8wKY12g2SbG7LxdEF42ftQUf7eeFSFvo9Pri",
  "key33": "iMUAfUf5uSo6az4aGf1Hd2mrkyz7RqK2hG8piLX5ochJJdQSNtvvVwGwAvBUDeCTKgX4iUjo3S2j1X69oXkNPQR",
  "key34": "4RfLNFoZXBuHWfqHUbf8snsV9QAE3sgryPnfLST9siZUk24RLXBEB27k3KQTbWJ5EtKYsrnphCnhVTRTbxidxJH1",
  "key35": "2LQpd3eFauoggNoaiFNj7XassFE4FuvBQBdUhMmX5ScCqRrGLdKeueXauTitNgMeJX3PuXThx4fnmZhjKQFucy2G",
  "key36": "3PVrYDGcfwVeT7AoQqjgje5bGGdiz3GyeQmZ7ktp69KoTtJ9wAEKkPrCuFtcnXkEAcZDWyyzp5MVUtHy5ENEUYb3",
  "key37": "5DMVuZwYw6qrriRidYMSpsZRqzAuuJvs1xbAUcDY54o44a15HZ6c6wH2ZwNtDiChdnWXzJUAVBS9Xvu6QkbLoUVw"
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

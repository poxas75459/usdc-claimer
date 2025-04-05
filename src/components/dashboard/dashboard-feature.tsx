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
    "6Ec8C8iZhP6iWUVySvjFffkvUY6xF8o9tiGW9JwwVZXUFJiBr6DvHUt4JcPAcaNNXnKhQvpNXkbe7KR2sdY9Bun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57sZoKDVsYm4WtW8aC5eg4cTT8VwE7nrjUtMTsdCosUahV2RhGzFbqJS6R1FB5BGMgWaAdC2edtyK94F9gzmmsHg",
  "key1": "37B1K13HTZAGWmNHuaW9F53jpAqVzcUeuqersvE8XDxFgGkFTBhzohBLLRbuJe2uM6MTGesXuG1TPbPf4X1QYjs1",
  "key2": "5J5Ewzcb7HuqyUMUcQ5JgT1Lv5qLm27inQg8YpduZt4gBd6PZDr4zSeTEHhzg5vZ5SzvieJmBsuTekKcGg2Vj2yp",
  "key3": "5nX2PB2yjibHtXzbUoMPD5jvQHUoxjxNfDc2vBM45DY7Ximhf5fWfArgXRiyccyTt6vFuNaHRSHUM2h1eePhzCLA",
  "key4": "4aytpdx2wNxzVy3iGZ5w6MVQDJ6QPcjGuAMBWfBCL7zc7y4dABxcCK7wp4UXgfdbYpbsi9h2ub2LWkrXqzbUY7Tc",
  "key5": "3fKpmKP8ZAVaTC9Vtns1sc1vqQquEFkwmvg6PU8u5ucHpC47kXc1C1gQpRX9CFfyQZnTW3Yeq21TuaW3i4pdqZsL",
  "key6": "9fzMENiJZNQZV1G8QhipfAcytUNaGnVVYZKp4wY12Li6LmFHfHPxk33gavqE9ffnBD5nUpr5mGMuu9cE8g5tgWz",
  "key7": "2HKwbh2vPBKRvzVqTRwsSW8YwU2oujTmK2HUW3c7s1AJSMWgtSgphMb13dcTLQR7UTaowFRRnsyv2cpeP2nnJsys",
  "key8": "287xonfQENGmJDmPc7zpSadzXWbQnmKBXdLEofbmJ4TtxbQwGci57PC3TBaapg9TsinF6yC3hoNQdTBYQLfBV9Nx",
  "key9": "5d23Kk7is3768easMQc2aaAA64QGx4PXFymLcgEbm8ezSLChRryNBW2uRdjSN4Kd8CbLA1YiL7XtrDDkAvf6KWn9",
  "key10": "3UZbyKZNtVeCp9DGtuyyJhtDcf8nCrSwwEUXZxXXyCwETJkhkUVHyymedfar8LavnkX249ae2ZmsRXYimaEnfqFK",
  "key11": "4EW9qLxsoq6b7H9WrFpAQUa4hyfc5FUJJVgk6tM5GTZuSrEAnKGczTuYJTduuua6uW9eob75epkuT66CYyVLusjB",
  "key12": "5PDbiB976XgPpjkJXFwrgE6aqbrZrf55oxttuF3Tko7BMJhG2c8KnwJjM6Cj1CWmwfvAEpV3s5VR8TkcHCirBjPe",
  "key13": "3Pge3LCcFDoEB6Qye1SpvqqarsphZ6zFKi3hYmkcYe7kKFZGhnuJbspuoBvmknji5nPWdmEzoFfD9WbfLJva1BSG",
  "key14": "2GxiRwEErjT1vj2Q7BQZMzdH45iT9EFEvKkgzhtMXzJ7H3yuaUtW6Pj3GrBKmjruHtcWZ87SZzjYSaSMRgzDYCJM",
  "key15": "2Et4RdGrpowsxGyvSNP2BqAcbkySdycG7AKz9SWJkkC9dvcZ1Qe7HNzQdnHyRyuZQT1VUXsouq15eCW8sztehzT6",
  "key16": "3bHkpHz2MannbpWXNu3BFaJz7166DHdhpz5w5CNGSoAoqCg7bo8QgKYriC65HE6yT5nbGfpHC1Qapf9XVyP15dzC",
  "key17": "4C1yrK3zE48MxBR3Rxnr9iks1k6NZVDnY14Uv9jQhsWTZNUrN4j4c2ouMmWHQu4DjbQvwQyGo9AoMS2LmW9eq9RW",
  "key18": "Uy9ibVWRZBZCcxEZGABCEpntZh7s5nxtEhWG5uc3YAQ7YtZBkjGWb8ixrMd8LJcztmA1ZJ2s1boa2X7T6DdfTME",
  "key19": "38mEYdFia27C334HPCKXEbWv3EBR1MbkK2SuZauC4HNFvqhB4PDSDpqbeNyecWQ6SAYwKEHVZksaFsJPsHgDQfjf",
  "key20": "5E5XSNmxYGqssagvCaeRNTEQDzRFkQCr3xvN4U1hrZiGXxv21UkxKc1ucqE3QcBLb9qNLDUwW3nPZGBCzXYd1C8F",
  "key21": "5QXaSiGHWJfi79roxdQxcpDxCpzhHhYt5AJXwJZLg9Tx9uTnbAV6xwtQ6AqemYHeJH5y33wTJKdpA4F3nvpz59Zz",
  "key22": "5kd6ijhZpaxZ6znpD6caiAjwtuWcgoq7qASHTk2qvgPKGx2a6vAhWREP7zeVruBCVLeHVuvFWyUm1jK6mKpJNvyo",
  "key23": "Uy3NGVDPyrYmrUf8SNnuwoVphXZ1nDhPgZkW1DgqZumXicqoNNs7fqkd1fzQcuDeywjCsTZKM6zAg2A2VtwqcxQ",
  "key24": "4XaDa6ZJRxAg6KFY7KRKWrh7CnebpEquqBH4gpQgVq5r5A7EeKpXHuwMki2VcCUWTuukSbEKKc9ZBbUHe1SmBRYd",
  "key25": "65sxDWbcp9pXLavXSHuJf4iqrrk6vomF8LB4c3wzagEaA9VRejGd6i9Pybi3HA2urNNCAtJbKKtzLi6VRQ3zeBor",
  "key26": "2qaXqHfdukcrN2NZn37UpK5GeKSeLFnaDa62Rt265pJYiAvtPbTRhZYQ7Fim1SMxyKP9iQTTBec4SGsAtPj926aw",
  "key27": "3ZtJzapB57qrLS6m4cBYTLw8eCUQqsiDoTthrk7HWVrEfEx6ZY1rRWgQmL3y1ni6ZPyZSkuadgQuM39eWhrzxtGt",
  "key28": "hWZjMS68vcswR4PdtFGMcjiH8zqVq2URBCQDkAHL2YqgG7nNhZtAqNwmaMXXiTAJ9paF7XM2oXECvt7YtVwPRMt",
  "key29": "CVatNzcYoz737L6VtRpDNnjkftuUmobcFuzcVtu12E2iusZrgTSWE1oYypXoJmeNhrZrSj4NmECChYPf4VdVqHM",
  "key30": "3YsQbvyfDmhLHL7AiSSmF2KoaBTzqC1zrSvjnckZ8awa5gZdkqGHfUED5aTAefHgdgZREK3zQooQj19udkNQ33DV",
  "key31": "3Z3k6SEn5zHE4gTfzakZqynTxY69W5ybFhykzCy4Cf3jimgTxyq2Tznkz3wvw62xtnYfBFCvKtRb8aaK3DWg7H5j",
  "key32": "Nxq5zJx1BMGERAinHBGKqsv7Hf8LGty9ErkpzAQiHbiYnGRDSGeVZDdvtg2ztEPAWEKwhuGUHnE2auFWwRg3FgY",
  "key33": "3krEb5FXmxwv9qfiPSmKiKsM83tyJfUS9fo4sqcDy2jarp3NyGrf6mGyJ1MdjsJar5s2LZgBnkTUb13zU8PT2fuT",
  "key34": "3Nu9kV7NQ68c9grPzSnqm7utdmESvgAyWgz7L2gg425qwyq38fgg25X8jHUrAeo1Q4wSpjxJiEP4Mf2ZmdtK84Yh",
  "key35": "2KjWushyAfCUCRLMxiQpZAUaxt4S3DQbJaWTSakkWg7fnvqFoRw3nH3WrC6yFDYMRRY2SWS8kLzLdaUCN5mEg9nv"
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

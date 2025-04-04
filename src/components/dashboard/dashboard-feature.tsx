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
    "3EmwdHxEU3WpCFpAcXccUAXfajXFPyB1pv83Xc18bbLvNvcdxegDHoNibkApkqw5pMympjBWZywP7roeHRPApbN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgTsa6RY5NNef8fKRMAJtc9ytB2qGuXddznzSwPr23VwUEmUmc6suxiNrwnzR6QVg1xGFPBHG6VpcJp55L1D7hu",
  "key1": "2CNqkqPQoh76N6jbfjYsZCena8bZ5DmXhSwkMSz8ZF5bYG483TexsyFXc8TVWQxGPHwdqKjwcnqKPtx3deSNouhR",
  "key2": "qmtQsXrYRxTASg32QZD3wYp6MFAsJo33SifKtKJddA2tfNRdYmjkcMtNXd4qbeQnHGVTxH66nRw9rKtqRZPatTF",
  "key3": "3fBVgo21kL7WRoDPCChobreRSu7HKdUwmf6BkRgmaxh3DdinVJiiaZD4s74C4VXLwT1Prbwn5fj8NSfNYeJgcyR5",
  "key4": "jMgc7oMv8SSvMTgUscrv2fBMPk89uJYqH7D1uxdy4DA8SZjKPzEoKL7qsVqV9jUemPLRcyjzDZw5dkzWeNi8Q4k",
  "key5": "2qE9gijCWMVbsKU5vjUTGuzCCSpD9rqWgihckh9Devjz7SH6T3KBMgUDYYZZakyqpvrSHmqhy7dNxrnvVYxxuj4e",
  "key6": "2NGkmjW3hSajUg7G6q9hu5CRn5zH2vmC7gyXsnNQ4gUnQgiHKUagZkRJkHEvgYBGrGobqGk6G5zyUTxUPfHdcEtU",
  "key7": "3H2Kbq4jkK5GbDDBCYbaCFwuGKucYmrz8irwicyXZDabXVE4gaRjKLCyTZMxdLvsd2FvxqBpqd1aUYqWX6XRs8TU",
  "key8": "t2ibDTbAFH6TN2oykCeLA9qYwpFWM2bZ3npdeKq68hxHYxZePvwpFUH6Yqn9wUnE6q8mHBb45GoxN2HhfGDHP2K",
  "key9": "bkHTygToxHDSVJfdGjbRtHAuzkGMAJsMcWpxJqSZwuTkDwVQfJFmFBtTtN6eAjTDZGsUW8i5WWnpbs41Sbk7nLa",
  "key10": "2dLaeuBkNg3GfDYYyXjQqjPXx6nDmsDZmb6VUDWYcndkRX3sRL48GAinySNDUpYELGPoU5SeXbnkHXUFPGQTSEtZ",
  "key11": "3Bfsrzg6pYiDygE56aEVuaf6Z7MP5csUa3xgfTk26MQTFDu9CK8wyNrehr9v3hWQppswHZPCaTVBtHWiJLkmbPdv",
  "key12": "3XQsTNEqbADNWSezCYfHiKMEb2CEdLbaDV7x2mg22Dcg9cNypuvrc6pEgKHv1fTvGTGqPjJd11y9Qiw6huWut7cN",
  "key13": "55HfateHsG7GmodtkcPzif5srjeQyNHpXDxLJwnVRoVZkJUU5hQqiqQDCbsxBuLh6QVQHLVGCCQPVV9rpWZMsRG4",
  "key14": "4fnN8hqZjthiJiYBLp8kiTefRBehvnx1KibErvmz7LKR5ZpC7ZQ3Xftcu4JhVjmbeqRbvpURLDEw592gh8JdygMz",
  "key15": "5mNTFqvNb6ieneGaERBVnME8jBvZjxPaK9nGuEB3U1FEQfdancgdmsg3vEKpVgAKuE4FDT3NL7hXHfAEH5Ffg8iC",
  "key16": "2sitNkhPg8MRmg5wNudk3McEG7BMkkkBgsX1sevKgnunvG6fHs6quZkUs88vofPd1m48T6x7P1pwCG2tErDRZodd",
  "key17": "3ZgZchXo9nnqARURbcpwQB83KzWxMRzKVexY9yyC1fvkaBRcAxSvPricasNrU1kcmfdrtXYCBxyhYUq4iRkfzXMx",
  "key18": "2bpgS5kG7NGvYa1kQHaogsG2Spuqs8Qj6KVBgm1uozxBKijYJC9ufrJWfGM7E44uqHaGRtfGL8re4a4FJvRjW7CH",
  "key19": "FXEUYHeWCcd7XvTweKhjS9UKJMj8iELuAJBhqYGEXR8Kd5rotkDyYVihXrMrdV9mUC4koctZt1DbCPGs1y8T623",
  "key20": "2X4LPXiEizL44cdsT9bBJo5Cbkrh5GWWMhxTERY2VRBxm6fZyQ8XGnPVvKZnnUUbCnf2ynLvnyY2hUgGPcQ5goXM",
  "key21": "5uYLqdYawmmfyY4kjt5yBZoyaVELRFAsNMDpMQy7TAkcCMDEEpR4kgoKqAi3A3QkneiBviJVM3nC1Ty75ADW5De3",
  "key22": "46Q4sAzijRZVLiPVvUUBVEWYVbho3eNEEG9t1yf6nMGtbVddsuQmaev9E1eFrpqgQzBJaFLVnt3k17VJvMBDhoW9",
  "key23": "4FYpPpWzFULaUWvUFHvosHA1fT4SpA23RjF9Fb2vjiSHfWkt4H2hrupcwZqrjBxcjzXDvXTruGXrsdxxhjNhe6DV",
  "key24": "41iqmRAmkpJruw9nVjfctSFVTs4icnHjSSYTqAD4Whb8V33RPjUhoH8R3SYfwDyisNvf2DCJ4VxtXaFKo9eYb8Zv",
  "key25": "437Xd8GJ3yyi6BfQ2rCwyWg8QhAZ8ASQvUsBoi9SBSZ2SqVnQbgcsVVZSEtjwJmkkTPL6bGeCnJ4vHMB2GzBJJGu",
  "key26": "3KdJNLLARUiUuyjfPhcza5TweWYXUyfPjKig3qKz3hANqUXpTfnqpWS5Du8WzLb2mMdYqPXD24fsM3eFa9WTKAwf",
  "key27": "5fDBYn8ZoWKUVd9ySCRtcMHn11VdNW9uFZZiyu2A8rBFyu9WYgATAMiYVFov1hAfSByF1xzAb7bj9tzUcSaip3rs",
  "key28": "5ABXCeZespkUj1RrRhwDmRDTm9ZPuyzLzPbG9Z8HyJ2AZQXasE6fUSu9YfBGHkuoKsMaGs6qdSttrreVSNCr7jp4",
  "key29": "42arw1e7SN4H5xsJhS98fj1sQsqF3mWfc8qxQjSRDkQ4E8EX2gVPBTU8iXL4kmbGfGDbJkEAEsELqcdKpjtsQsiD",
  "key30": "2trv66NQXzUQPzNRkFsAz3Js7BJuEmm75mJR3V7hzQFGTCmbdZn5HkHmLTB2g9hiCAEVXvgc1i7Z7aVTEd1rActs",
  "key31": "5RyJLEMN9AUaVJM5DJCwuBBQJbWw3EVRh3iEYcDPucFki3ZP47FGMjWHX2siSsUWijcuaKVmgdZ8BMLgxLXqJcxZ",
  "key32": "2emfKUEvm4Gew2WvvsPgyP7frcavqiRwy7295oRu5DTQ4g1qm5HZi78EjZ3Caim5DmENPNBS6wqnEM5y7Uv2DbFY",
  "key33": "3X1Qt3XBNmA4NoMFqqQvaRZ1qQMsgMx63WQNfSq4xXCLFtvA1foc7aYLTy3gKAkdiSguepZn3xKrgUkxbZcZHDA"
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

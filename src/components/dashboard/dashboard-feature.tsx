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
    "4r8UCy4q4ukJKwvDCNzEovATZyGMskBoNose4qgAUkAzv3rX5sdfj1fK2BLW1SjuRDUhWWFfcRVxnT4kxDjDW4VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D9CiwJwE8uExcFkDqXKHQ48DzD1NcEy3pskMvwNvg9ZwnXZB5oMa8vs98DoeYz9dmfTKasbeHJozpjnATJrKHB4",
  "key1": "3mCPi9rgTLom9kVERapoY9CSciasnyhkaMtDxHvtpD3YuymRXUg2ByAEjNaQm2gAHw2MPWaDSxm3Wq4mrp2GEzEE",
  "key2": "5xgNT8NzASLj5j8UAbhZ7nUX7LzxfoUw164nPfSDo7ktCwXwdKD2FjkBQWz94j7rN3QCfdEKJ5Qxc8zrw3jwmEhJ",
  "key3": "66VLP3R45PeoGbKcxfrL6orLGgvU2DaBijHYG1ZeTCeJDJGrjdjm1wK1dY37o2WAWS2kJ7jbU3wQpbyjC4MdoBLz",
  "key4": "3AAzvrKxi2qz5JTN1PxgCRcGPfiYjFyDxnBQWikmHyJxziuTViNqhHM1wv8dpxjLoCvMkhrWmQyHuR9tPcbcTmsk",
  "key5": "2mHGV1mvRseUe9XGABteTLiPy3Qyf3xKyzgamBaf46gxuj3K1VhD3KpD8vrDW9AnNk6aeT2KRcrrc6PnERdDudu",
  "key6": "54we53DZkKoQqFDNJtAuNyba6MxEf3gBGeqi7VecbALLoKbAWySmJGYaHPnBBCJEaYistjVtrbSdj3AJauibByZx",
  "key7": "3FiFE9YL8a7AAv4tMDUjJUvPqtcKPh5r7iYPnN1RSpgvMuTm77ATfefXfJDdxjqm4QkTRk5SEgDf7DuGfRAHmJKN",
  "key8": "SNr8gisxy9AHcbwqD1yBKB6tmoZTXgrherqF1THBpgEHHk3K6n1ThnY4jtu1oXRZiaqMaKkkYHWeUgwD4armger",
  "key9": "48bstS4aNGnUdbEuw1QJCiXW4zpNYZuJSLvJnLdoBUmSBPEGd1rD3pXpPxfwAGEYyMTJZNVv9tg1h6cNmVVoycgx",
  "key10": "4MqoE2S2sawsGXEKYzxSpQJY5wFUWeJ7f4b9MR1dmvyj4mJSG7RMg3hSjmZNsA4ULjRiEPhWrfWa4SNV8VxAC1Pz",
  "key11": "4nktEuJbd8CgxJMYqwGWsEfc9JkTmZbzDoFgZsy1Hdxrgvx6abgTRyAopr8Cvb3GyaJTQDktG36rc46sRexYMzw4",
  "key12": "2Q2So8p8n6n4UqPafxc8X9pLtLGpTrX1AxVm8ucXwuTLo6Gm3xvzqw8QxPFHgh5WihRGNb43EaznJvfCW54UwwrB",
  "key13": "2oAQShHYrBpnn9GCzwrkj4RFYSWkDGsZPzY89bCaUp3CU3pXWhUMjGeZw2ppgDApaCMYXsWoM9Fs9Gfw4iuukXha",
  "key14": "rxMPSRQ2UPzdJXdaCRc7wB7P6BzUKouHAM7GFwaVRvMC1TdE3wt4yTh2W1RiW7anyMz6EZRh9xzvLiE455sLRTW",
  "key15": "5D5XBHXEdLQwf1k6o9GJ1M5VeJgcGddGFfjZeKNA4hgopGi39kWpFEg6FxBPnFYBYeMQs6zPrtsMKcBG3jUPy5ok",
  "key16": "2mXRvWC9CMhWKSosNh4FWnHgaZMdKuGDBxBWGHbUNiM5VdKrKqMRhjqQ2FEVGPAuc7r2CaCUTFQwx3huzkMW6FYk",
  "key17": "5SsBpY9raCRaKHST9cnfcVENx1M3JkH6wewHNDcaauPupppUf9zm2HzgvYm6K7Wp3obACvZs7zDPWyYG3ZygYv5g",
  "key18": "5RDy4K5ptVxikPbCs5WDcueQDT82AfHoJ3wefYim7G3yFiTYrKwdrePxyuLbPLV5uUzrP2Hmdukqn82xsM8Xgn8h",
  "key19": "4xc9qFm2kFR4Y3bUpCXtNGzWAVpkK5hXjiYp9YR5NRqiB4CtsH2mwHPaToouXBp77zRkKmT9ut1z7RjmiHcx85rY",
  "key20": "4gPpWtybcDQsKoHqGfT6SyL7oDLg5BwL5TstxoVLeQreN4GZ1yES1uehLsmdMG2nDqQKrrCfJNtT75Y7XHQVyF8e",
  "key21": "5opRAvyoAdeQy3VbeAze59WKmr6E19zuYmSfjC9vpxPz6mTEGsTK5D9wKjBKbndWvsH2HRXLjJ64uwvmVYXa78a1",
  "key22": "5TgCdPzwXBhZnb5V75MsoCWg8eTWyrXSLZqJi82Q3th538SQGecBYJViH5S4SiqFahXNJq1iHo39e2fPBN7Aw21s",
  "key23": "k4UZdqN8FoaRCu3mM53bqTNtUpfyNuqsYuRLJxZUGGNxKiiwQPnmxzgrXyGPMzSR3dT7yntJ7PPgToVi1cUpwV5",
  "key24": "AgdPT1W6JjcZJPkuy4iw63qgRjRbRCFVZfhVmQV26EV3Li7ETomHuGLq44CqNYbadxkhwbKBERbme2r8GZMtjfk",
  "key25": "3jaREpBfiP6jNUwiWAUSUZR4msGPtUsesH2THVf2yx2dofZ6TsKBSzJTCMfpaB1Mh477hDw7w9b6PVUgL77TxTob",
  "key26": "27VPkcKwH95MTXXeB9DdktnYCuGeNBVSTbpUMV2XcrbVJWhYSQhkdwV9NKxHFkkTV5P8qeQDXLk11G24ZuyKFc2p",
  "key27": "5sqUVZ74xHcfJDg5eR4cbFjgh4GmSLnjd55mVvL5Ma28FwbbNnWthpgVeHuZdWw7Ze6J3imxDxKVKzwioowRCU2R",
  "key28": "2EYLZsUfK5s5LYMgSgAfSkN2PsJ7WRGrqNLkwJWDDqpXccJtM1hvuULKnMdpsnsL4kcq9wUjnJZy33oR1qLHAk3y",
  "key29": "63HMCLxy9kjzTtuGNhiscvbwDGym9QMRntVgSa8VyshQq8pE3SKyWaGCUbtzFZhLtsTTSk6F9sXLQYt63TqNVzje",
  "key30": "5kpDKe72h9nfgDn8cG51iqsekrH8CXH7eiC7BHrpgZnyBWziFLucYKQ9MoUxzjozAJssQ1dPqC5TmdpyxZMiycGf",
  "key31": "2zqmTMFGKhM1eSAXPiapLvwJkRkTWwChsw7F1kRTB58K2yrFwgenKabaMiVbKFywYurwDnZtSD6FtVmY1SGj8ZCt",
  "key32": "4c4nYYchUupmYrrSoyQY231yGxWjyTH2KSuPGFG6eTr5d4XQbLMuVRDVD7dSLwJ3driEr3MDb6ae7FGPAKDfvTn2",
  "key33": "3b9qWgm4erErkRSAkTKGR5tqqNVuwNYQr6kB3TsZqTE5819nkwzv2RDTFDqdsbXzRrRENY6o2Eteo62PeigvjYzX",
  "key34": "5epxgFeAVSAZtN6AhrEuAFFrf4SDqMJQDEX5cMgoMc1pbpnuCHyuQqqXgBmwoACZ9TEasZo9LD7VdrghdAUQyWw7",
  "key35": "5SVfpYYVAz8wkaCepwrYEDvTxzpWreEo2XaRHcjsyt8fXXHbpWv5541Jfv2wwdBoXAasKfDUahBNVMKGcGqYowEp",
  "key36": "2nXZoz389fwt85Zwuefs2Cza3Bu8UBC7qXpBDEj7oKF6fAXHoEisdkxuYYr1f2qJz4EnqWpijVrazPrTELkG36me",
  "key37": "2UVMULWVXdNmNUwZevuh8hZvqJA2GMZYGJRsDo4S8f4udRNXXQGV5WcCVQzmPRqbse8aTgxzXcSiW4NRWLSChXH",
  "key38": "2ZbLKNMRUDkJfwfs7bNv5f1eVXiFngapQ56ozddQ6yNeU2z3smMfMT2a1L2i7EHxzbEM15GkkUhnZuBbLUd7sA7c",
  "key39": "5wpurM7yerVZCMwmcpyPkMNFuTb9Pnm1Ez57zNojAbg3khmzPyJWP1KzKS1FwWsKnUSNtx4g37aLn2u3x6K2xRR7",
  "key40": "2PsHJVsXXQhcHPWAafRiNf1uACPfK1vADEc2SdmxYYFgV6gtfFoYAwJsHWLiJ3sMfvrfZpsjf1Zs4dZH3CGmAhnw",
  "key41": "4Re6HtNDCQx3GMWG1tq5mpatEJDgXs3namPtGq5mrdd8kHzsRNumghEcF24dPXCfjvC2koUBMCtZWVVFkYgD7A3V",
  "key42": "5ipGXuwiFjrg348q6GdiiqD3aigYDjHMnim84i2rr6YvbAu6wkXSeQ3acmUbXU79xNuhyedau2wXatdPKRHgp456"
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

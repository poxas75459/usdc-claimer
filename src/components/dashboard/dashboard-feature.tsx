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
    "2CuKojMVtjppo19Kdkuh18SUsmB3DEtMo9JsXxfkiV2ZJSDs1VgrGhxMa4zwBm3YuA2M8Yku63jWRL83nbzfY4Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kaCcyhj4K21bujDLWhjpJR9vrbAEBqCxt6WD6uKmwKsCLfPvEMp3ujEPQHXGXipFaftoNy5xVTVMdcPVpDAFbQL",
  "key1": "3xRhQqosW2n76mQAn8Q7MTP1bmEoW8oN3CyRnw9baHzcGTyYozv6jfAdzd1VLZSA2po9iKwv7x5uHBByNyUFSR66",
  "key2": "4PfrK5mJuTgMviEYdrdmUpxK8JdZcSJxkCUwKVPM3B96uu7mjRURx7brhEu8sapa5qaimuE5XKvtDXnx6jqTPpop",
  "key3": "3J5tSmkyRxzkVrRhrp5FcJkty93uMatApXAeuK2eCvSR2StywgUy3P317hcVwJoFeRSHKbaPj1iKyweFDfpK4LbQ",
  "key4": "4KQKYcnDmEw8hCX6YrdnNAvnm8zvQHzBj2ZEw3GYuXpTmxTkey9Z5W8AE6fizasiEWZLsN9objqJpaiBEYUvKT7E",
  "key5": "vKRk1eV7hnZV9ZEhFXt1hPWKttr7zi9p1HuKRz9s7HqaQTD8uJgPGQ8TGTBkLeAkGFHLYU78PHbnM1wsaNCjHWQ",
  "key6": "2cYSDAwRRpZosiDKnXdsnhwPeDApqn59dwXYY1DEw2j5S6kyTMhTMqS2rjvUMP2tcmZ5YssJsSNDv33gKrYRXV9k",
  "key7": "amM9ExKeHoEwvk3RtFYpmMtV1LAcGeaJPfUQPgm81g1cum1tWE76U8mHDjCaTVeZREBHbUyNuwcJdNnR2PDSdfn",
  "key8": "2tCubWLPMCoQEbSaupsXFe7bVU1rSjpNqtGTuSCaxZqoqMADVwA5hnER7ufCwCKU8aPHie57MWEYUY4nY2WUkUjv",
  "key9": "4Jbfyc16LvJKt4AE38yrA93zn3WNQyTRox7asJS8xoKkmuHDnowK29BQyZRJk3HSGcsvBPdmDpCF8T7ysLSNjr1T",
  "key10": "dBhNVBrt3x8HvHfWmAX1b692JjbfxGgmJqQ1DezLU52XHLYBphun6BhRZN7SeUYhSLMNjMhVeXviSxkdeKdthJP",
  "key11": "3ty4aDah3dueDPLM1RKMZ4bK1mjeLAT1K5NQJ2zzYzpi6A85QSLSk1fnezRzuvPtEVasuxNW47UpCCEHdHRK1DUY",
  "key12": "4Ryh1KtnDdefsCh7Kkg3NNJ5VAvFLzVLnUtfdJjCG5vrC757iY67edDRVqrAg1SMtw141RP7jCWNrtiL85neJjfV",
  "key13": "5f4oftxa7NfYGsRvJNzKSiidBFYUxjdmfzkNHzaivi6z2P5qahVbKsZNV5PtvrQ1LfpZvTeYPopJzEuACRYYkW52",
  "key14": "2yrrLQ76gc27tsuDgkT3ScAkc8gx4mNmrPFfgGgBYyzL8rAdA8VNF5DHGGKPhVFKNFTLGeshrszuA9FjbBLZbEBw",
  "key15": "2fRMrrnDgYQLUSeXDrmheGCheN3iURBhBcGNdcjtdVyqrSqVrko4jZDfKh6ngTdcTZXoMRTiPMALwec5wgp1JRTJ",
  "key16": "2e3rW6bDzjehSkdonocDnG9XTjfJCxQmA5jzMy2Sw6xz3XbXqucuShPXLjp2sUeyXHNZyMqviNZYY6JdbpBMkSaL",
  "key17": "3ASYbsD1ctJ9nVEkN3HEL4G2JcxK9mFFv33adXzDci6TftFRBrq2v3jxkCkTgFjScHf7hBePm18NukFociaWtGfB",
  "key18": "5G9Nm9qeXvqVMfyNCkC37DAh4KAHubvQEeqExZZVcsA7JWkfz13YWE2Mnp5SAtmt9JJh5oxqQr4W6U6tNRVyQW4t",
  "key19": "5ELpR29gosAPKLSrCeSs6FcEU6XSZi8rsziW7pouEHNVuipdEujr2eoRXyYPyuoXJfa9zNKbitGCeLPy5dnhcvqg",
  "key20": "7QB5rqcyFEEu9mR265DadghunjVP17dCwdSVBeypkT2xNiqLgBEP2KpEknUBVmnMV7NPTrHq8r5XTu8fBgq291r",
  "key21": "2kw2KGWKm57fpeyh56HRn9iUGdt8EgCvMGUegnmLSBWDLZqg2QTUJX9BnngxiRtBWTkyrJP521CceHqNGiJZy3PR",
  "key22": "5uKqQEtG4UKPyr46GXuT8rohCL5N6DQt8vjvDVWHm4ZXHGkKq7sTN8cwC5Ps1VnyCbF5vzRongv2K93cpWY83ESB",
  "key23": "4HA4h5RsJwgyaQTN8XCqzrydwN85KupDkG83jQajTMLMdQD9ccqNgkbRakk4QtHyR1huhGmr5eEszkaBPPsFGELk",
  "key24": "29ve4vb6Mw3a97PJ8EJMumJVW6oTqttQdzDzhnNQ93R5rLztUS3c7N5rQaSaMqkDUBD9NCmLtkLDbr7osgKk9XCg",
  "key25": "2SJNyZMDU3VuMkpA45SrnAdneNqia13MoZ9eR6YKkFW7QmdkjwWZhez6Ko2PE5QtYw8K7iLLm28D6QiMfafpffvW",
  "key26": "3SRVNYmxAjygdHm72e3keXK7zybWQqdwViGMFLo41SuT1PsxPZX3gfUBCVLeRSYCndxhDEfYY6b6peLyfZD9Gd75",
  "key27": "3GbL3zea9mJH9zGHHi6Xwcy4FTPDV9DP5DKJhbcq6dgrbRtQ3txr2UfG1Yc3Rbr9k9rpK1B1VuB9EYYy3PdxU7WU",
  "key28": "338sTxnFP7uidNxUbJ9ikNjhAA812tnHPNSBEnsF7Z8HdCFETNFWPQBHKp1pwgJgUNpVohgPMDMLffzgWAy4qxrK",
  "key29": "JLg25LRutVht6Px2TsQLe4dcHYNQ4wCXBP5kPGjgfWgZx1vRTpwGx15Qk4LA8DM8Qmk8NNZHKmif62B6stRLrnp",
  "key30": "8DxU88wfW1w4hqLzwZ48dFUvYTu5j4dg8kvznxfSwDhSik4my85gDtDThnRG6bXummNNqdF1s8E94XLc3hQ1ZbL",
  "key31": "4SdfLRie3ZBKs5wWMrzxzY4LihgvM6URFY1Q4y6CGmNGos1u5f1Twzc9NS3R1hoXrBo2fFgkgzy7QRntYWqm72CZ",
  "key32": "2AFWqfbsv4WJ4W9f2hLcfiB1M446iSHMygBzDZ2M2kLMkWNxjQESaNLZXQqbPXsDfw5eAm3fWCxYDJBjQknuvoBy",
  "key33": "fhZ6RXXRp9aQWayhFfzFRG3oQFoAYyW5oqEVgF1fPWEhkeGVyudZnC5yg6iV5Pw6a9aD2Gudj38jCUywJ5mXKnh",
  "key34": "5ZPgjxW6GrDzLXCABUAEKB6FWBwYfMBS5aVujtV8qeCZJpVtbuqAvGK14Gt6vTb6kkjAEGPLBeKTHU6yHgAPwPpK"
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

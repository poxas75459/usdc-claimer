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
    "4XcBfrZdSwmAxSC9PLWeYHH5PhK162PNYG3Mu2cUyXFLfUdH7TyDR9iuRaCkSiqMN6UnXmsnfzwvYbKdYh54WYjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qt24xsRnYpwkgnwrbr52bTVn1VCpLmNEt1sWGEjCpZzq6AyGNF6QchLfJBFGghfNUhhTwy48VHuxRimYFBiKUmu",
  "key1": "2XUGpF29cqBSjx9v7XyaNx7kTReYvm1jsDWMmbNWN1VdZGaQ54eucf821r2RdJBhVsuAoSXzJ6FbAXoqgWza8hs4",
  "key2": "5gViP6jyihhYdhHW44LFSHvmWPMKSQWXkaSCbqtadoq9eSYJA7e2LpZdtEDQmmDf9uyB3ynMthLAhAiPCe5ietem",
  "key3": "5PeAQxagSvthqwbZd1dSfhD9LBFzZ8yos5PAUz1rhLoX3BpqfXNYEpnjwud3tumwxejjWTSXesUoMnRqffqvrxvy",
  "key4": "4FtXLZ2bh7jTrRTdd77J6FbwRqcPcLC21eHMrYbyUENbLmMfxTYqdsudLtv4d1NTyQq86vzdfiyKQYMQzm9xtEwd",
  "key5": "4CJcD3kBJWnJmDn5WSbd3KP4rV2SqLAZSGdgieSPawCejuKZ1DtAtyK4XyDPMCW3R4CDLb88nwf83k9NvHR7WKnG",
  "key6": "5vZnfdxMS1CnBHSemjudWwNgBmZSZ62Fu3onhcaGN7N9XzphKNifdYhxTVGqABLfbC94iwaPNecHoPotTN1DkZvQ",
  "key7": "36wd5FVsZazZu9Az5rDEmu58SyickZaAknbDeGGcS2kSpz8SQLSB53rdog7jqbXsdLfYqXdJ66oT5ZhJW54W6Gjf",
  "key8": "5fCXamExWjSsCpmCoJe1tw3gWJL9ALsWBBZo8Md2eXg6U8xvr451mY3KyjxSGw5hNi7KTAUPMUZV4hBtT6oEFDFZ",
  "key9": "PMVb3crGCiE2cfZ75XXJniYRB33mnekTPUTRdK6XpfvcpY3TVdp1gmpvGhC7DHk995NTxjwfdgo5i7f1XmpZU9U",
  "key10": "2Cd2UN2jGXDjBucVGuodbZNPZ3s1MR5Ae1QqPwTeMVPP88Px4qNuErEuebPJKREdhR3JXy6MvJvYrTBG5pkgX2d3",
  "key11": "652SY86n2uNE8fNUwTqJhYaMGdfRxo6fQezrm869i7paoMHDhAnq26EZemL7K56ibSuvQM8GLdjxs1FJLKXbbkrn",
  "key12": "PL3Sp9Tf4nGi3MafzHxxaPkSARx4SsDcBN5tnvDEeJ8VwJUo3KUq3jH5TWsN5C3ZguFALycsF6KWor2pcEXsZhd",
  "key13": "5D84nwZ4Mday4ZAjzV6dZAA3ABCG2NpaVNx9S78btrRquYVpSWPpUD3daGDmbYmUdmph8EKUyAZzBBXJBb5KZVi3",
  "key14": "4bZR4Le7Rrfi3C5FSPZkRNZFUC9VUgZNd6u8UEfMEuWzWH3ia2ujzAoME2kcx1AMc63wHLtv5GQ9GqirpW7ocEgB",
  "key15": "5b6YbGACfhrUhmgkU4KLPK8dXDispCA4TvRB3UFmHU8PZ7JkWh2uz129EkVK5nBSXZmRBGky5HGsu6mLsLG22jfN",
  "key16": "5Pkb1TscqQEXg9Ln25E6HMwmVapfrLfq1Ehp9M9ZjPMYmoDe8ThiwXz2hZ24R6WGBUxVALs3hz4iij8DAjGe7Han",
  "key17": "4SoeAMMrhoWH8p3KDHBwuEfhcifWRG6SWdqopUrbo8xGFkXTMPCxA9FYiHm8Wx7mSc5GEuYiLzz5V2T31zWZVaM1",
  "key18": "3rabFLdv1qdeAcsfoYaTnJgHPuzxVWZ91gjFDW9ME4xN8ZR29d67AxaWGhY9ePdSvrfSz1tcvCbJvNJ85oZgCkqc",
  "key19": "64gQrjTMqodcoCVBDgs8v1NR75bQwEe7Y5m9BECdgwARCCKxmYNtK2gtcbBpRSt3g1qXCNZq7MvuWQLBTzfvVxxT",
  "key20": "37AoChLcE2EQt9nj6S1HL2oF9SWsA7KCrvs7wVKhs49Kb7P2dRjBB1rWcWdHH2S3Rf23ZeTaEzwczqQ1LwE2Dcjx",
  "key21": "5Y2jJsd3vzgfwT4Qvn8LPuS1drcAEFQvbxy6hG9UnNFQXSjmhjjh6W1SPk6F1gfK1vFfjzop2mVDXoGygM5R1def",
  "key22": "5uv4awezwtUt5tj9s7yBtU2gcfaJde1HReE1iTTkRa71bMRNQ7vperRBZFtXer8LYgUUw2PkShMcKm3KCminy77e",
  "key23": "5oKNZrUaYcQ82SpK4Pem9JRMSq3WZfPrxgghQGax7PuF3c6P6GR8k8skzXMnkF6vuKpXKzFzXMSbGYoK6kUwgezD",
  "key24": "3XxCE99euioix1g4jAT24d5LPNxEqZyksWy5oNyTb9rMYqatTdXyNUKjeX7ReHrDiCCj2FYHfYEwV9wsv3mBkWRe",
  "key25": "5UmcDckchptbg9DJkzPsLFfhH7nDvX5Ei7NqiHRt52AV6xMoixaf4JQnWgbZ5XHR85NExNVsy9zwQ2CKteuoWuJw",
  "key26": "3HKpHtZV2m8hkQ71BZLtWfNuzZSKRunseeFRvsG9dQUJ98qJTpUeVikAeWaDfugPFc14KKkihduB2C9CxKkVx9UJ",
  "key27": "2RwHMU6EQVFEZUVha6ETqbQrNNqyCo7VDqbqRKCvjXr6YvCo8Lxodex2MyBaTuxbLmyv7FMjviUmEwKFVQ2dGgCh"
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

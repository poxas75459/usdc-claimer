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
    "4CCZ2LsLtCYYmqNFgtH7fLR9fdrEDNZw7MwHL53pbvCaaRDV3CszZnTpaboCvS62nUSxCdkctMnU6GyRKsBRV3W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369zif4Lrsz3kp9nADuiQhKCKBemENcXsZSGsF2T6FxTCgpJs9Tk1yonF8VHYKku1ETFiGVKeoAn1bhqmzfsPQUZ",
  "key1": "4xAeQDd5E2vAsB5s6zDuYEmdvDyGDUWqz1AHa7nxBBQDQRsqu46JwLmDV7azDcm6GSEwzxcdDNby6D4sxi8uwfUv",
  "key2": "2ctQ7b8xqZ4P78zhVYKNNuLHEWsjZXMoJwZRmprywjioZpcaAaXTnoa94mLJxT6mwQkKAP77pMHBGh6CM3mirzU6",
  "key3": "2K7buuwMNRjAKTX6Ehah4tBrGfQSNHFwJ7jd6pKZ8oTDCEvay8YPngeJjoDwJcEwP7LiTjWUhQY3wEsA3szCWXPd",
  "key4": "2PCwgJ1DQx7ea1nhdoe1HVWabDdD4PDT1iXees6nqqZhNoM6Feix3db1CpDm5C7fDChcg7LXMLKQwTwT6db5s2Tw",
  "key5": "4KzaUJRz9AzKPJfC9hwDrR5wbxY9vQwV2PuapW3TCw5Gdaj2Dtpvx9Y87P6AJS2X7RrVWLhRveb6H3zT6ioHNEw6",
  "key6": "5BD6ujkg4kvkyJujD7TyYFJnQcNjnzmzV21xF1eBU3dLKEAZaBNxrNjVDaj8UXeSntpgQ3aMKu6aw9ZinQ2cHctp",
  "key7": "hzUaC7LUkkixcVceAFbSw7hMWLLmevSNtHawtAn6PFmbWmwRYzq38zcuCy1s6XzCsb8BVPG6RfBNi9DUcFxaeEX",
  "key8": "4qqDzCALaUuen43mxmUKnFVHZkBc3M6WyPFdsXFRL2v3uQ6KW4ftG9WKsYF1MkEooCUGmKGezh72Kd7maqnunMBH",
  "key9": "31qT8ws8jcq9BUBYHVhgUPTSvzTxRyag8g194VcsRCEsUwDPXfzXouUXxzwukHHc4tsELdWtn8akKWhDJmHs4dEw",
  "key10": "26Pq6KYkbPyHW1524k2JWuuNt1NDQx6PuYB3xrEwPxPeHzqBVeeKPkkLcwXT8GthzJgPwPz46JM4LovNFMg1fJXT",
  "key11": "4M75nznHFuyVoghscsF1VSGfwafjfVX8Sc933hj4cyMHM3GqUS5uuUsJXJeKmHUdeF6X4dhPFDQuvUiLHXBdnyzq",
  "key12": "PU1ZTZkEpNsSukj3KrfuJQig6tc6aM5FLNRoR8z9N5LDELVqyCQaHAA2TTVY4FWXv5PH41nE8SMjbg4kgQTusvC",
  "key13": "oU8pxd5GRtrRFnWHSrBeFGVFyeU94pQtXmLysTmvjmAMoVq8aQZyQzYVWYxuSswSFH2vp7sqCFbBe9UrXkXZ8tJ",
  "key14": "2xukVWgnSxzB1VmcWCVuE1rLfc3Xui74BpGiis4sFjqd198rVq4mJun3cAWoCqT8f9hDgTT3qFtac2JF8aKq67fk",
  "key15": "2Rh7e8VoZZVssVzpjkXWYAFSXdQH67wboZnfYoftMzP9zQszCome5p5NdoqPiCsjNEangpt89diLAHidB4BNHmqe",
  "key16": "gMArTC3vZQsZ8DqTVNXQGYMh5LaQFYcQpcQ415cvSp3ncSVEJYCRMBmdZ2yuDcKj6qddyqwfmAEUJSp3Tm4TKr3",
  "key17": "4joMkYHqZsBUHMNgDZaaPESKAMiJLQedArFxBz5GS1nrDcDGpFyfmfyHqfQhBk23cyb6ZV848jjCJmac4k9fCjiH",
  "key18": "34ssyBqJUiugCTtDHP7qDrg6z3aq32e7tJsMP9z9aMESKWvSurU6bUtBbzxQ4EJuPpAA1WGVgYb7WYotLU1HDFzk",
  "key19": "57CvEQ4QcmsbhbqU4VFYZboxhS1KEN4RLKi1NjjYVkYRi7utAi24qtZL5Uhpq2NQhxB3ZygbChMmu46KJovprSN1",
  "key20": "4ofhokLkYNCnAaizUvX3mFrGCdwLxg3vd4CCQ8uEHyQVu2oyri64nsMHUCz2vA3DCtiH8VQEdFMtHs3n5bKJkLXj",
  "key21": "5bxi7TrrYiQ6Akx6vjuZyjJbXaDM7EfowqLbRgQ4CCWbLAZL1rjLmv2rrwn6RdeFbCgyPJ8JuTcG1wYRa4JSG8mW",
  "key22": "3VcG9FpN4aWDUmta5yxxL95wURcgGqht13sN514RFkJuyjcBUnS44j3ZAPbJTMzBCWTstVk2QTktz9BvcncJkxCZ",
  "key23": "3p4SckzBiTkY1BwMt8hsXaYidmis7yECiZehP4U72imhERkqHB2rvrMbu76jnLDq3hpH1zVoY18masvkjCdN6KcC",
  "key24": "2CJWAGMpZH43aSNMtfX2UReLAmYmXiG6HohQ521vDVPRuuAcAM3NbNtdrhssa1z92thYSv7AvD66YmGV3cKdNYug",
  "key25": "3bsFXypCd8YPMR7LB4xnQP5cN1onH3tjCJHeF6HQf88SyJe1gw4HKesaWKRGxGcGBjHfogA26szwaP1NweAAF7K5",
  "key26": "57y2g6pPqt3im7jLCbTEjW9xBeFZXTmtvJvXocXgXWa7W9chuSrgoPUUh5Jh8zPWFMXWxLjoMJeu2BCELtd6UHNE"
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

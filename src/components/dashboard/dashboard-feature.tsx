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
    "4GEbMubeypcUPPkP7rToJCYopyLuMf4DWTTrWCoJVA7Z5hQyzvZpwJXbCxfgEgwpsq7yrqSpnxAYcBPuhHza53vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tMG6vADHeFyAf93e6tKUisHE22MmikvEZRhX2d5Rgij2AdPJgjz7W3KV4GijvFGke3HG4JJxPnFjLEKnjZY2JDc",
  "key1": "36QWbRkbAB5JiqysBnAgBMAdrKjJW55vqZgvVGagcEHvjEaHs5T3dCa8B4QcfYDGuJHCBBJbotThNUcpvcph1bYT",
  "key2": "29sfVkZddSd67Z5nUAqeLo6xovKQwZP8JvCxfk3Ra9Ygrqo4tCkkaBt4gNFU84ygaDA5PehCeZGB4LUfTEztSio6",
  "key3": "3Bq5wo1mcQx4RzYMdGmpfeEUEtVYuN2izjRdm8FECNxode9tSpf6sPq7HgfG3iq1zG3chUYYPFZQrV36BoBP6Ady",
  "key4": "2t5JKPDzXuCr9oTDgg7NSMkzmjFBiTFU9WWJEUETeL11qsK7E6svFuACK96r9sm1wecnBZwrBEnVnrKtup5uV6mQ",
  "key5": "59W3TCgWWJw5sTLmmAiJtaDQTX3QBrNPUZX2QcC3cfd2ZGbb5Pzj1NoNYQDn6Y9b1ry1rHbcouS6tRytdqimXHud",
  "key6": "64V26M9Q5D5aBPqmr1jyFUQbbLcThtumMEftGtBzDZZoSF2fTiztUrf8HqhbTXwrEDTddnALhAv3WXZvV6yqJe34",
  "key7": "4p4FuPLBV2nDbDNDeGZzQAgGSTeDQwnBBScbzw7Tcxatd2D43D2zWH7RPFABmLaQtVL9hgwE6hHitLo8mkypMQgj",
  "key8": "5w6ogmtM7Q3NdUDhHcuQi7dwcZiY4y6y1ad6wR3MbMX6jAP7PFWACLRwKWWy96uhjThehgFLrdufXNjFtDb8qLbh",
  "key9": "2LkurhMyPqo4KTQiGcdo4wML6CzA9LjkcehuUGSpNB5eTryNH5hVSDAGTfF4DTQUVn6rJkPkh212qqtETYRNAt86",
  "key10": "XpwdADW2HgMeVG4bVoH3mCErD6nq9wPWbbp6rkBkf3nJqdwaLQL4fMyWsHkBxH7XJscj2We6Ksb2f9ijqXendft",
  "key11": "4T8JrsCyKiiq4Pyo2DWDQw7h1kkNMJhKpPzuEYyavYk9GnB5aSfRQDHjDZ7gzw4ioSkjZRAvLuXZ7RRvNStYpz6H",
  "key12": "5kfEnNLHyeXrQErtW5Jw9EjbAbeSfgSuATNJ5wWdLDyZcphfhUfxiSq3W7sxNABjG9fFWfEWbkEs9FFUay2crQAQ",
  "key13": "2CidDz4UBe6SkFcJEVrBdKTMgCYwhgCFQgxumwpN4qJ2kpG7GqCju5X4chbUW4C5t73kr5zM1cEbH7ArcG9VP1EB",
  "key14": "4bCcw46pVXN7jFTnSj9tm7pFPuj3ZNZQGSr7Ukoq2b9JwoWUQzpxS9amuS7i6H5ReiyPLDGGqCxVXHXYNUUQgoD2",
  "key15": "413bqVVr9UGCTxCwC8CTaWoy6sfh4c6jGSecijgdrHKWgCaa7BeAbZEtx3ZGvjye5S5vaK8F1JvaJDt5NQzWoiAZ",
  "key16": "4qRdk4NFeeD4En1sTPJYrsjW53AJyPCecjJeCrCxT89fQ15XDCMuvLy5RKTYVTqtqdA7afgWhFPXtM4NJMrsAbcn",
  "key17": "x7P1zQwkoUCr2kCutFKKNUNFTxy321Vbh9PiA9u5dr2NgXEYatuEhFzLSxV3DwQieLB5GcbS8eaE67pm6FbcS4t",
  "key18": "2pJvaTd1g8GieywUJfZSuVvmvzyGqXGUEWzJPfKWR1vfKvPdMkM9Yapp9ekpB1ZYYQpgUhQF6yGK9UkVE2prFQdF",
  "key19": "4wq965svmaL7pmTsD3AwGmoyhgrDLdV4n17o1ch3F6we897mCjsLNeJeRmHkMKdsLN4XCdAQri3Ts61ANFWBnzCN",
  "key20": "2atyjKMxs81Bcuj4BMNkUnp94siU9NKTWw2pym3uUKD8KGuJTLKm1KykZ83i9L17L7tjUXhCpkFiuG2zLtT5mggq",
  "key21": "4SKr2dVxz9LvcyYiJxQwyfjaPn2HET12M5f3MQSMmD5kTWzu9m3s8aDYazpGnzwLLZPEnF1CAkam5mKgF8gYHsDi",
  "key22": "LjT3DP5w5NdL2SFRccBaPoHf5LSPyqCYaktdaL9QG3xjT8a28bTGZR2sbYp1d1iWrK3kQCUDEU9KLuGaxE6Akxs",
  "key23": "3EFhsuDqUF5GittQmae991vSj3d9m2xqfqBcFLygA3H2uFMUh9n7xkxzTuZvB7EgQqxnopL9njsWkU6ADuJBLQLs",
  "key24": "3hQ27sRQvoCdVBmNEqKe7e3SytqQXaSJ6dpdjhDgUz6rBTSYsf8QyoucEuZvNTn8kMiSLnafe8H6PD8ckXyJq3nG",
  "key25": "3Nw7vAGAppeT99nYV9DGCZCRKw7NtvFwzP4qzhxTPV8paV8PMd6r1d2GrZZMe3YTGWG6fqzF3UYMvuF452a7J4DB",
  "key26": "4MWQDE7STibZrVJXFGTY4vy99K5MmVi1W7A1jzxUAzjQ5xW5Hq6rF6u21cDw1UaAJnxGSussoTqNomRkuZTeoNFb"
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

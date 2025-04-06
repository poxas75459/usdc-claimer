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
    "4Lpeg5dqsEYTuspYf9shTSueNMyCHeQVYqaGucAYVT5hya1tjUoQK9nJXzc7mGCJP34r3hJKkpXJbfPJz63SLcCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Thbp58hjuBGfvBoN8y8G1hN37C93xKRaZz8agmULcJQpdFfFdmqMmiEydsxUav3oSs2aqNDK2q1XGm1786ARinX",
  "key1": "5Gm9JR7kow3XWS1FBdT8hNjQ2LUkMKuL5hwjVtYfNbbewiqUyTpC9iN4deH5LnPihjqs8DMvM2Hy4dGpgsGcoPx1",
  "key2": "3Mvbyi9caQyUKG3wJ5oyNJt2sdTYgF5hoN93bsK8Er2Y7nXAfADzyAZy6WibYS5ZgKRh3w2ejpV4kZhyECQKGTNz",
  "key3": "2Szbkaj79X2BNu9SXhrc8TnzZPBjArsZxEp85V2fXN2QPMASHnZRkQae2cxw2JAtGptKqRffoGVDj1HCgoVk2a29",
  "key4": "VydtQ7jDVJMJ4BM5hVy2K8miG79M2w1pYB8Y8UGh9tezzvgmGVPmuNnnCY25HH7fCNXTHKCcTEKga3wTycqa4cE",
  "key5": "2Q99wWsn8pXdaDTgDVeH117VoQ61iHRWnc6aAnfhM4qZZ1XpaGGbVA7bTRWTAQicHP8rzYZb17G67qwCmkVaiL2L",
  "key6": "5ZpEiEyzfVD62fCCLiqqSYAkogYRtrL9b5baEMsnPUBhQbyhncqrxTW2pz2ickgUYz7DqMkeSHNTmCZJXbHRsQtj",
  "key7": "3DRFQEfyy4hqahxx4K2ZLPDdsTBt9wu4GCoTjRmNxZLW3D8vFEcwtZQETmXDBAZs9jjHiBAdZMTqN3ppxAnxLCWc",
  "key8": "qStUdX34VdKGTWwtpRAyojKKJMfQbypNvYmg7ZKURyZXwGV1aZV2TNCDmUQQQtXsTyrDchG63Eajs9g4DCNcTjN",
  "key9": "5nK5siKtFHxvyaitv23PNNHbq56hZ1yoMXRc4h5GfmfhYNgZxiq2vvTHxUEo1CP7C5AiScgKYQNmtgiakYb45zDM",
  "key10": "RwmL7Ar9XevWwvx2WES6YBNvkzDrsuSWKTroHDoYsxF24DFJY7fWihxKAiHXySFsicFXikgrULUaYuD5xDg8Bky",
  "key11": "5qvDWhd24iiw2wp2bPqan1Pczb2PmphcYxAAHguY3e7MjnT51a1RjmPANPwhdG9hNa8zwSduGEKcgXRyd9n6kfqD",
  "key12": "2KtUfKcQg8A9TYsho6SeB6NRWZhcUPd2DL1smJiPqRYQbB7DwKQHRw7ivZeCqm6GjhvaSLxvDjNp9NHhh8rwT2ym",
  "key13": "3ijnNuQXbFLswEmHerJj2ANECnaS1sp6xPpMUpQfx4V2ugrwB7hZxhSxu288PrWzWWaYY4t1f8AyMFZWZ8W4MiHx",
  "key14": "2Zmui1BBSQ5o9SuWDUmLJDuQHpPKqW9XSNLkrH15AF8Shvf7U9VdaTDQ61BuyLUQf3bRp6TpJ2T7GavM5oQhBWes",
  "key15": "3r47y1iu8yysHRdQvMUVwJZ6tXuZe4N513QfmJjv2RivVYiknhTu5JDcdVZA2TKpBa3ZskJ8SgcoJ8FHELESfVAY",
  "key16": "4VPscZUUHkDzEPQucDN5k185bopUp3YPNqK8pomvQWkXzmgy4AXuNddgnEEZbJuUdqV7ZMtSx7ryBsKqJua7dttr",
  "key17": "44xsnvTwmeQpqSm3QwXz7XmkwDbrgn5XR1uT35uSAW6wWX8HNFJTQVEEwETAG7gVmaNeUvsC4FgxcfgVbBRVpmdG",
  "key18": "3LnyVJXZmhCiX35M9mVopq79ecDViwosnktHy9JnzDhUfPkH4UgdTDNgTAEZvXNrS8pxx3QuoeuEqU3GfFhSyFPJ",
  "key19": "4rLoD3c8K9GjeaRGmqcCjvZ7xpsvag4Zopyp5spj6CbuEX3uZpy9qC159Gg4cXJ415YGXrdGyAsC88K7tKmCrPRJ",
  "key20": "3LtEA8sRfd5rZw1TigpQXZB87N1DuwckgWaYxiooKBYs4VVFJ7BbH24THpvFoEgZQZENN4L6gx25w1exc64kpxrB",
  "key21": "2ybFioQF15gzua1EBU4p8qU1wf8umTaCRqm88Z3guBKyN9UEVk2694bUe7bLhE8LtrupndPZRMTCB4ACLdryw3Te",
  "key22": "4cp8dP4xSz3z12gUesxpPN2A49E9Zr2d7vPVD6rDLmip2B2JyRFCc5A7qYxEwU2wVwca1fWTKLo7AsSqHkv2wniZ",
  "key23": "551BwRCNXQeSDgi8Uw7GUb2FXXyEQaD7mEEBdnzT2MLATS39CybD2WGrxvCBLo8BcPHqUYCswFtfTSXC6zqkPULt",
  "key24": "2n6pJ6CU73NWocm3KmxQd8tz8co7MHGzvkSKf4g5nZrakes3Ftqz27bmVQ1ZJ4N9wAceCp2rnHhFQsPPWS429PjD",
  "key25": "3ubzbRQ97xjc4We55TzFqvRtWBbrNDk8H89UY8wRm84oTkH5U9VeNg2rTQv3FimfhHQsaf6H9m2TbVcXz3Fez3WC",
  "key26": "3m5ixoHDeWz2hJxZMvca84UU2nEzbpXmA9HBxR7sHC7JBH6js1Z5kVbMVN2MzvNqyE8HvPqm9AmSsuGgxLuWYcwm",
  "key27": "31rkWJ9Yd6Egfgj1EB4LETVc6uWafBspw8JkbvsCeDiQhFb17eF2T9CD9rfyntzUagX5k9s5cLa9nue1QkgLRVQH",
  "key28": "4KHf8v6YMnYf4nutMwyn4wpMm3WL8NFrT7thY5M5dDnrwC362CESSMLmVNGPdf9PCPrT61wxtUMst5KPJ1hPEsT1",
  "key29": "56mwNkft5vf94nt4YGzeZww29cSAvvDjzqE1kxreQRAkkJsY6EHnnvek9mLQphTYGyS4uLFtV1tcftNv65bSwi5F",
  "key30": "2mKqjfRu4j4oar7S2v9KLerLFujTiU9h8zD3ikFSTX8a9ycF6NfG3wYYSWaw42hfJMt9opCVNJkodswnVhKCdrHf",
  "key31": "3f7WSa73tnRzQR25UUgctQSRb5LN4KBsUqJQvW2SPdv2Jbe2DDGqzXgXPRY7ifBS1tKwBcrJAzXED28WmXdMqknQ",
  "key32": "2XYPtfu1Qmu8LV2frUN3dUBmTgGJxWcxxYwAUcSJSQDmqhQP4uHVA15BKHmNXmD8i94oDa1QigMW3JGQ3xtWS9eW",
  "key33": "3au6TF2aADxhxo1h1nWn9dzvi9Ntz9oVULDNkKYrCzuSpPHvxhsmqNWMcuzihL2fPcZegsLwnySTszNY4TGQF45h"
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

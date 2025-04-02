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
    "3BuWXhYFsviMYU2hSFuedv5BoH5VLDDeeg6ceiWqCQczw8SXhnnJpMSHj7xyCCUV88vREBu1rDL5LtuimCNzvwvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qN1DXqVPkv1K44HNdmf1DiugS4obhystPQTcPS9KtbcWogaVybppN7mqgwKHb7FNxvGDfFz69ejYrziQhJUxkvu",
  "key1": "5AG2aRR1WfumPLrVYSEp5qDYKA4vCmrwrxKasQPBHmW1SSsGwpQPfkSzPCCNXKNQtRZcKQa81Y8mt19wj2stTdqd",
  "key2": "4wceMdJuGVGaVfkjWcnMyxV84mWEQgs54Qp4XfHgjrYBeG4cPfsGEmrQaevuP2sH6tMxbfd1ffttkEwAneKVCMr8",
  "key3": "BUzbFxJJWoiBrutjGijRQEKHD53BrXKG2ZBcwrB3SWkKtcVJUsg1kwYz7egU2UeEk39GiDWaf7cvNrSMr2SPHCD",
  "key4": "4HrreZoWsm2tr1K9d13ea2KpZHJpRYJpr3cwHZbVHPmETtGPGYiue8aK6MLk64eieRLxKbagXbk86aU92st9PtWJ",
  "key5": "3jXRpYbCKwmNuN62eMZq7GfcV8CfKPnHXdmHC3r6tT84zQutMoLhf72S7uun1Wuz12zoo7tB1n5UavSGdYqraRPJ",
  "key6": "3S76VSs5J22mD3Yaq4dibpnchaxgAtG1AhNn2wbosfvT8cCqAbZZykvR9YeGQWYhFBS5WE91tcB4dD4uZaSYjqia",
  "key7": "Uzy6JH6MjPwBLuTgY8JKUKeHgy9b6FtaVzSYfTUcsfTWiPLy2Vkgq8KqCLKMG4eQTrVEVdQD2Cq8JPfT7EySA4J",
  "key8": "5ELFHFaBN2rqjq4ZHgDz6iv363fT3Eq1Apxa4EtafnCd5ns3yLbwj9JM18XNek6wGuEGwwLPCUf6B1Sxs66VXQbp",
  "key9": "c4kMBMzdiBoPp2zRwxm9SHBfoUL17eC6vtGrQW55DaxgAjSTykCo1zBBiskpXCMe5f3FYkvy1a2Qmf6GqKPJUW3",
  "key10": "2JeWAVewvVfjbE34SqFE55DWA7PpcJFmNCTigtBSojkhbzBvbUNuANXfrZ5FCJmRj4tQQP8N6xVvrGn2wLzNXD8i",
  "key11": "2sJa7wn2or341g7uZ4fpxdo39tFriQwU4eL3ip6Yx4CH55jLj5tzbQQhN9esfRCGrj6bbz5yghhwMqptCvAzyfkT",
  "key12": "2sSk8jy7czpMccz9pqdGsCkdAvszX3hCqrsTEkCftmZHzLT6cBUCX59kPUtA6U6huBiQVYSpnDN9vtj62fNqaF1d",
  "key13": "23Bqw2bB3QJmszi1sUYw8ncNY2J34M84HFCZu9uA8Qp723ieHjCuvsdfkjzirMVVy3vuYNsXYMPXTtd9CJAzgyc4",
  "key14": "kut6Ppnkd9SbJw9JkQgygcuj8qESXsNxPN2RFcxtMQqfYvdVAGZHe3WPP5TEUi2P4Z2jk91qpYwWQ4zoJvbpj6F",
  "key15": "2RcSDLANFeSkhd3iZAL7jaeF78KyZDQ8NPmyovKKYeVt6prbEikZ9ZErm8Ss65uN9JJ54NCtiG8XbXyyeiPt1mnv",
  "key16": "38M7aUYRcE4HQzUTm21Ahovn2cZH1CbJU7WP7msj5Cq4PjLWy4TCZhBRpAAaNGtdcnXiUEjJhZwqb2tPUqzG6YmA",
  "key17": "AG3DRrgr64j1V74we31wTgvSMfJPjAHpE5VUbkJkwDFmjv6bLXFgnfP3LxhZE2FTUZgCtpd3txsv3nhdSTSrgUx",
  "key18": "31xZG7DjQNGEVd1Vu6cW2uvCtVuDawZXUtTYEoWAmsUXJVif2EHWpsSqQ7vDJsAr9WizeD5gXrgfzf7Zf1XUMSH8",
  "key19": "35uwyayfZfg8EjfcvfXAqANELJddpxmNqCLRa5ZYi5ShMqgeJano4dDux9uGf4qv7dc7yV87kEhE8gKh1Z3hw6ZT",
  "key20": "4HdTSXcxdmoFhZsJKPASApJCuCzFR9E8vnraswv38uzC3TS33t5tqEYHWjTfvr5EHxfju7rJV5P3k7gEnjo39be4",
  "key21": "2C9pNb6HBpV9MU4tHtmCykqRfxNzmmJ7ogGGF7H7Yxv2zFbCtr8rSSgivqpmX4JoybtzEb2cYra8X23qCXdm1bRa",
  "key22": "52PRir5KfEozXzFKyW1aBKDpahebtMNivjPxX1TRSTH4fPd6ZnPGMBLbXhzsap136ZbPXRY5SSdpjzX7ATtCg2H",
  "key23": "2vuZPm85yaAhoZBZ4opyS9dSHv6uWobtaZBqDxHnL1kpP8E33T2YsqdFimgw4uTZkGJHxhjhC2FdnwVSYcvQPGTA",
  "key24": "43T23C9VbyMCPWKR5kc8c7Q2qroWpWryi1fdD9Gzy2ycn1S7KkYZQovDKLRLtygGGZpwFDzM9M7iozAN3JmerdcP",
  "key25": "3t46CNQvkDCqhRvumdXEUuVpUV1FLFyzsnxbvKbiVwzEr6DhdQ936fmAMKapxEcnAa2aWNiDTsGWHKUM8eUGboYb",
  "key26": "F7mV7KV6yM5vRiUEVLJVgWPLZNyabPbAmrpkL6wDj595BeiVj4Z9U1FgfQaVsowqpuzhrP2zfgZ6nDP7BEB3tku",
  "key27": "5wwB2B9Gx88Hu6kUDd26bLjsq1eca5cjR6Nbtfz9xtMceYiw6b1uNKFjGiTiSXr6v9iLvNsLLhPzTooegVGaKHxQ",
  "key28": "3eTjbxWcoDdmbHZVupmQyjoFnPaaH3aPZD5iN6QoVVLVRC65SQj1nDePQsNcDuRtkitDNXBiZaov4qKmXUvBV1zS",
  "key29": "26F6QZULLNXXAdtKYXZjeLuE1NDEQceWFeLQi584QhTfDQfMUN3VRxwtCckC6oppG9GErDepMUDyJ7m69HvKG24T",
  "key30": "3q36x2cmnXkZtzwZej3nRqVdaouRaBqUGKaSiowAbtKsJPCfFdAYkbCk1NZUVUeeVMauP6dPAPRbgqVZhGm6uFSK",
  "key31": "3rMij963VT4erz86PitTDsqkDWR21S4kgMWr1AE75JBt1id6M2oBjPo3tqXFGDhoW7u7aeXDgezNxa1199JLorpC",
  "key32": "AfnZf5TTVFnmjwaWzCZHt3yn9zdyeLzj6hnedcdkLG5EjDUwN7hqosGoWs49kxHWULgJCTn1Ynvbe7DwMpm61J8",
  "key33": "4b9ftGk41yMn65N5QreXxKHf2QXFBRhcPG27iLD3BDzST2nvXhnco5A8jg6qrAqoVhCvK77gvhWeEnagbaZVW5vo",
  "key34": "3NMSJGXf3cSjjyznnHkjrP9w9pZuyYpdgRAeVPXkLBUWFzwWozETV5xEsxCEah8JSkUrCHPoxhwNiPMzxTWHV1dy",
  "key35": "4CzY5DPV7YZHTA7e1M1qTo1HhoXB6CmpiuqPD4dHYFVwkDm7zQZwYRYdQ5eFCePYewst4KTEb5n9viYDXJeoBqr",
  "key36": "26oYB6ixsgKVZBcTsibS1M2DpPNQnMrKfz4aSTXetHxqJXymnehE9DaCCXdydYaXP4Gbhi7NpRj27K2urFKj5Eoe",
  "key37": "528i3jENE7n8PMNPVJS9Sa14BJSBNYzjqeJ3q1Xx6Vm9kWwgaezxXzozWde4bNJimFG7HGDpoJhTsJqg8JWYoc76",
  "key38": "YsrrDnEoRPEFUT7DksHT8fBhR4dDgSiuwMnXmCdogtmuUxfB66Rj1Ln3kXmor1cGZE8nuiA5BZoXWqdMQCXyoso",
  "key39": "3Wha6H7YzaZAHxaYWtroChq1gmJhw1LGsFioy2RuyczaAZ82EgWtNVRAniCwqXsjegvdwQQorpADoYwQztWNBKf8",
  "key40": "2nhAjYtAQPNPCYPbauTDCQLC7TEcKjGyu9r3gNQYumhGPE1dgD5egL1bWEABXLrYQ1LprgCmcbnW5VPB6Xu4xuA2",
  "key41": "rJjje9SY6YifT7zhnRn7kyTpXzrjhDLM2AW1gXhyDBX2dCMs6h6yDjfsySsFcsrxpddFfJNyuHykHmTW9xecRKu",
  "key42": "4i8DJaLQ7qEGyNcu6qJg8ePRZR3cpEM13BcyaczYemxt1Cv8o5yjTMyTtve3TnJtxYc4U47TH2XjL5xb6kgGAGEr",
  "key43": "25VSkPqb7eEq7uNDcXFpah6bC1YSBBwfhyGwiNFGg2L1bvdo3dhM97uU6ctN4uaJhsAyZ3vGrBeKRCy1fnRKs1aB",
  "key44": "474nJWEzgSwxMDGTouLxZnyefvNftMUXfdW9wLMvYUMjSgcDyRYeAHKaKwDHkWyg1Aj2i2GFt7hfpGDh5uQgPxi8",
  "key45": "3GTdwCcPgfSf4HAHpZbsr8SyexZiECZHaWaRpwJ87252bWrQuWBW4iJUkfhXptdyCUzUvAC9NXt5NT4KXyxhbZgA"
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

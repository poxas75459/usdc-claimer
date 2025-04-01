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
    "uro6FkBCXEnespN4617hTtf38GhV9Rpc8dsfSwA24rhCJkRmH24pAD1LWwsMKHLGBWRnXAwyxbhcnoeAFvydCEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWfQYe1zk7vvPqgxeSA5kGGqjNLWh9yfxvDzjdZgy5zdjiFSrH7MGdf5uAmx2kniWdtXcQWsbZn7BJ7ecqcfE9M",
  "key1": "5Ecds397heJhdkTDzmgchEwkr43ju7zsyXQq68UFRDFRvPV791rExYSVih4zkUzKfhPqq7RJZ1eYn1mib3qUHDka",
  "key2": "5Hw3LGHcwTLgauqUp5mSWCVh6wskRiuMugiHCBeu3f2YRQqPpaRBQQMfrktMfQzaQvuKnBVymkAKN2uvyicvYJNr",
  "key3": "32rpnPa7MFGtLYb1X9WiLYEustf5BV4VGW1iH9tKAn4sekJu3YagNXMtyzpHAV5gyJGzxddxZnrBuQBr3qsBZQA9",
  "key4": "5DmWhkqd3TNmJEfTP8E3UngG7HEk3h5aWkVfpoByKCMcrseGqGh76KzEHaWtxh3EZPEjwbWRJtyNfBQ3Gp61Cyo",
  "key5": "2MB3yaE4giVq9h2kEZZe9nsFEtZ2sNNh1p1xVPP38Z71HVFjoPkgDV6Nm416da7fDAUyenrVsxampVFYiEQ38XKu",
  "key6": "5Mkpuo3cD6copyvdMKrytisud3JycqwxnhHqrp9cowNPBrF86qVp3qw16bGLW3m1g6pgAsqnxdSF211hCqgZxzP2",
  "key7": "4LHZ4br4G8zquxtFuHif7HUo4ohoEWhtB6RzJWafZ51gj7BFLYMVkATV1hKQoj2Y4Mb31m78ZaEF4HAhv23ZrXik",
  "key8": "25K55VMZD8SvZAvaweikxskwy4yzZgf3DVEwmbGGDM5nXn4BQsYqx6Vsrc8c8WJKVkZzHqG4xHpqrodyyc1RkAyA",
  "key9": "4gncLCnKDDcm7Q3uVSjr4zkHmEbDppJkeNH7aAt2bnQavFNRrwcp9bMMmoyZWW1Hj7e1CYjFp4ZRna4d9oYrRf7y",
  "key10": "5fZ5BSpHoYzE6h94KD5syqj48uRLzrK6ccLUXVVTPRCg1gC8erttzGqiV2y9ig87Udr28vgfRZD6ivhUfPfX7wwu",
  "key11": "3QgSixa2swny7yHGUTH1Qv7gqA29rx7qqFE7Ufj8FkotLLaV5TYQzTdBFVvuDm1wxdEuDRmCw9Nhx9hUYKcHGtJ2",
  "key12": "414Cs1JxYdko8mx32QzqGskibijDfFHg2G9xGM5p4FBjGBGvMPphQ4boGxAUenEc4wcvqpPK1TJVDP8CtYwDVGHj",
  "key13": "5ueuwkN624CS6fwMg2XGmGewbygTGwZMAmW8r882iEqVsJedtYo1WcdiS7AYuNGtjeCvoTGAhmVcf3XjRghVnYS",
  "key14": "4VJeBkcUcmK2L3hfu9QdzenXoh7ZU4Q1Yr6tvjqbfpCeukniAwz6oWwgySTubzAfgf5R8tJX5mYL73variXypKAV",
  "key15": "3FCQTKxUfFR4v2XFDa43zLYJNL5oerzcwzcgxoFWLaoYykhk9NW2qdg3bRbVv3K2mmiHrw5jJeksZEDrNJsJCcYL",
  "key16": "3D52rgHprAuVcNCigmsJqnyYYC3VKjgr9UiXzX7imAvL1ieqoYFc93pjnqk4dTavLg41QYZL6ejsKN3PTVqQxyQX",
  "key17": "5oUNtUepitb2ZhrFynGRCGpfqxC73ncWgQJ7brK6c9UcawtkpgF6BioePiQ6BiSgHfyLvrjEnpfLSR7qRzqPrX9F",
  "key18": "4JgqHrbTau7ckhhT6VMMg8n2FBDA6F3S9PgxVfmb2xkXmF3PJK1Y9j4gxbcGCE83itz6xuZAf4kd4hR6ZcLuDvC1",
  "key19": "27ZwxBprrYDVAoYrVDiFm5BDSrYbh1ouwN1Ymbff6LMnDAg2QF9iJXFc5apZwCQ7hLoSaoFQARk4xsz7UF7zpbnK",
  "key20": "qg6xmJpU9gximB7HUg8UDdMzk7KRyZwWnYedQFHaz5nKSKZ6ajRmDghE6ZSUJCiW4TP1mf13XahejhY1Up43CzV",
  "key21": "4WaCFBuotQgRT6Ss4T7kTut3FzjBFobCoBrzsu3Hd8xPshAy9pyViAo1jHCiVTzappaKufwzoduNiCnyKeLPVs2k",
  "key22": "vQhd11PYissAaVwCtU51B4sJz7Th1jyMBrsiD69CktVE7SNWj2CFpRRrSWYnLvV1KpYfwCNsLdcrAP6c4RTU8UG",
  "key23": "318b5EPRZYxNemsEDdbBXRQ5TpcG83ncwHj4NKCQkeHiUBMswWpt4PZfwaTzZCpdPsWK2sa355uQfNVzbdqn14x1",
  "key24": "5Q2qHPdJh1yW6MeC11MFryYGELAaapekyCmq24PxW8CU2DK3xmb4cNHz1JABGELBEsF3jP1hwaMrNNck8kbkcZyp",
  "key25": "3axgLb8nU1WS5NLzQn3wEZ4YGKFrgbLGxKBuMprzZM29JcmQZG1vPhNVrgrLZ4yzTqCUh68TVkoMBkJVjx9WB1vb",
  "key26": "dPA4198wEjMfw7319sq6rbdmLzd9AoisUEJr8j4TCXGhR6CocdnpXVt1B8KjD7YiwXAYCBdne2njoETd9ipM67X"
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

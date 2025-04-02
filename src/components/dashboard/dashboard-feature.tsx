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
    "3Z3sgkfk9aWPHUAXK7ymrrdjfBVdbHS3yRY4JiWhgWMo45mZR6CmbjjzgCHWugLHpdwcZDKYZiiBsZcZYCFPUsD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJusqGNqU3dJGzgnw3KCrdnxoJS4V2RzDRZRxrPvMpfnvqdoApUSZmwDUhsu3cfUkdRzxnoaezTz4UYMWzMTMD2",
  "key1": "4foc5YLRs6Lj5gB7PU44eVoUvpuNgY4CoXgxkxSdcRZGGNRS1wQeeU3owJ5dq88NUtyhteTLVqzuQGjiaUsSCxJj",
  "key2": "4My62ciNUkvuVZ8ao6wwpKL2wAXaEtbF3rfGQVXiC86Eqt4S5vthoe5zWXMaTiPxDEB7bSm241v8edkndjqCqxDf",
  "key3": "4QK6gCzQimta43C3ngSM3GNhZGA3DwnMesDx2nqWyRpAPaSGwswf8D2szgbXu7Jyi14nfqPHnXTvUdF4gNkWr8Nq",
  "key4": "5jmnAeMDtZRZVaTd33uN8iB4wA2UfuRG4P36QvV2ycEr9QS4Xtzhm5FQ4SpMDUkrhaC7eVDJd2WrBsqxQ71h8WLC",
  "key5": "467BEQXVV1J66U3jfcsctZQ8aNowvxUW1DV8rK8mh7Mn4gU182FX18TMiPyXzPh3qA7yS7WP4hU78NhJczBXd8q5",
  "key6": "563o92hPvqjuieCWKpgQo3J6iLJVZz2RifRWBWyr5eiJY31MZH4cgKPNHByzuRRkYk9NWRHVD57acghWVU82HDW9",
  "key7": "4zQKKfmNrgasDrr9s3LdeUyzG5D3PkD7JfDcPz8QAvUqo2jVSXkr924u8wrF7ewcjFKEz5QYKxQBdizjHyD6MvSj",
  "key8": "3TWeHpApD5b3ZuP16LXAUvLec8C45MSX6UM2AMh4ULqVoKnG4UESqezMwujzequR4xTLRApmCaaVsA3SVmqMCYws",
  "key9": "5bVWEkHrdUFTCgPccYQ65mMesytMemRPdS4YRtKNH94JWEMjNVeqncBsKBXUYc9fu4WXUnHX5k3RmnL9yULZVz68",
  "key10": "vhQBpewcPWEEhoRB8eZzpdsrJRPMpVyq6ip6H9dP5tV9ABc5ymA3gtK8xqYtSgsySJbSNrhgKW2e99E1VcaVSdY",
  "key11": "Uk4hEXEAtb9VtffTjSUQYFPGimk8CDjjvFQnaBQ5MCdoZr3WAUJpVCAZ1bDaenxme2iGVLWQUMMLaugtZPrSVMv",
  "key12": "4cdxcRdRXoTNeh88gjn5VKYKKySvPFo3NZMUfGC4K2aGsvo9Tz6zgwuyMweMxD1f2kckfCPmgbQqWLuA9fJVZGEF",
  "key13": "3oarG3n9y9CKvtAxCmWNt58ayfiJfxMGPpsvUmTbT9JCZRAiPLdbwpEVr1d1XgckXpr1mZNor7Tyy4dPgks7XTda",
  "key14": "2LzWWezkiU9hJDBDhfF7js7NLrdNfkcn4a1UkxtJUs5eKpxS5BDF6VNzVq5fdzbKPYnh2Aqxnfo62Ya3Mz5bEkre",
  "key15": "4K3y6BhK3D2fkG2tuwQZghSBuYpFwytTfDwYeRrAWxmE3xApZGHoh2MowhLi38452GX5ZdNMFmsUcr1CJKEzsr4e",
  "key16": "2q1yKU41NonKbibjJk4ArGsRJX1Y3A3on3tJJiRXmjdvTjsF6M4qEzSKf9sSAC37NBtre2LNrVbDCjnzvAciq3xV",
  "key17": "qvUfZt14WztF7M1aGKp4UnvzVVLPpLhaDdqQDhdYnp9xnNLkBi1BYib55LZM3hGotxz85WnrUFQ6iQ99vQHomAG",
  "key18": "Fr65mbTpJQks4jzRWFatHGb3pUJKPHaRigrkHPagUW9ZiFSMYMNQRngqFyFE8yw8arTDvLVuyB4mKNTiVPTriMJ",
  "key19": "fYmti3Dg19vUVdYvma1P2GqkkPMkBLHnHaUjKndhmEVcRd4CFkmHv9XyvPAdXBqEEfe8MjRxPiXvL5u1uHFvuWK",
  "key20": "xDkDrwhQ4tU1yMruzmrURVHdscLUFFPFXRCAALvbvVVRbX9Sw7eQeAmYZLdLKAMorUTwFvynGRAck4yb2EHS42g",
  "key21": "gESnB6sC2QQxknHNivHGVW81zRXa3L8wLbiFZMSJ3MRf2FgB7hikjAvvpHzFckUPMxAPEZYDxwVFe9tUBzv8F78",
  "key22": "LB1NgBpiRDufoJQRZY51NUCaivKTfu5tmt3drQbPMKxXrVJHsy6mpjsV3ChoSbVDvoa1KUxNTnszmr93ED3PmVZ",
  "key23": "3xqAvYUeyFNXRk1XQHaX63UhozBLwnvaJpHXYLzsndfZ9kpvm7Q6JCFrGzSFYFjjLbpg1Ba1nzCTwAkxaqHSyrqZ",
  "key24": "3qkD8ULYg4EzcDTpDF9zCKVXWae1N7meY454TD8o8bs8WXNFWSKZWGZumdN6dJkZryRZH8g2duMeqSHQupiTSGhN",
  "key25": "4jRe6JjfTJUsp1yBbxbR3MfVY1jRmbP6bByjrg5KVfigaSt9hMAQv4Lw8oYLRkL9hCciQD15QJrYULJTDrtDdrDj",
  "key26": "54kDNz3B14FkqmZ6gXqF1P32V5kUqt62o1PAnsDMCeLJnUEuH6quZbJAr6tJQiMuq95T37nrP3VssZ4CexBSqtg1",
  "key27": "4yZ5ziPzdYzDb7imPmNei4bhpcT6ZVydDbvrm7ByXVXYj9oMzHnAnjktK2Av1BskAEJY4QDXsZwa6eC16iAirF9u",
  "key28": "4PiSzdpQs4NvMmc26BTeugLi7X2S7Ys1N7HmURqL2pmsS8XjpYQHdzkiyJKzeos5hPnMgd6QCcFyJW39aKpZEMUW",
  "key29": "278Vpa1dLRw4wK15SLUjtCpLv5kwFcLS21ecqFPX7qiFt9SuZQkves8q3n7vEYXcbyNAtddW4SFr7NsVc3ZYtZbt",
  "key30": "pDuPGG8QpfkeAiW11MfdbrjixraV9Dw9qe5WcKFwpx4Jn4niGB2NX3zcYaMwAepwRbh2k8brX5qSf8VXzw6PP17",
  "key31": "ofYq2CyGtkhJeA5zh3dvWw3wwm9mnPcvakUsyw8Ju8iybx3ra8BGHfphzyF4ZnqzLTFce7jKXZvmkgpXM4AyoBx",
  "key32": "5Yn9br8ypPkWxgNGD4VDixoyQL1XYKF8upK99sXKGtqAT1XRxU4FzaNYr5HUM1APEnksyfSeYisccNxr2jLjs31Q",
  "key33": "4yEL1MF64CYGiWGN2hwCzDkGxpzZzi3BDDqQfEZRgdHDpuz6zu21kLKLpXoQQbKtLzPburkmn5jdeUiFVhLrZihp",
  "key34": "2nbHScFvQ6h3YSViVihQCcinKuikpK1dQpFYKZmATT9xNpJmufZLsRjBmK5CinnaM5irkdETWfZXYQ6dLcchPasb",
  "key35": "3KR8755HDbwYMksJKmArww6f2uQkevxsUGgDuN8zMJeBFye9S1SKxcnKmDJ72RNY9pFArp874xj2wgsK9863uPay",
  "key36": "3xLsvuNtKt1JKFTQiE5jzYtDBgF5zQHtTp3iKAovwjZKUTr2BChbW8tXkXVnVWXFkhTDTPbV5vhngCJwo19coMKp",
  "key37": "2Y1sf46yAeK7Wsfcrcb9bogNhWMJKPjXNiUuawuBauqk1BibegTZ6nzcTrXrivY2qwEXfa9fB3FWgKST5CUdMzTP",
  "key38": "5YBgFdracF18vmqnZjXTdGytHjw4PxZ7HX7Ag9uUZndo8KnRtj5oSGpa1pfHat5jXGaJHyPwNK7n6QTyCSr2CFAG",
  "key39": "2yonYarakT4PtcqqjkT2ZjB8zUP4vg8X3s7hvnh6YnkPPSCPSusms4tbZvtM8MA6gbvPwW94x8WCUgrWbH2pMdqQ",
  "key40": "2T5cc7eceipg4vJ3obZcuitwHMompKM9PYKBDooJynR4gNcr6MoiySNzevWJc6qmhoqmd3Rg3GJJh37rVZum4x2g",
  "key41": "54s5UoHT8ufBZCjeK2XpGqDcUy2ao4gKrsr8w56C6FwPYTJHdYqo85W7PDRGYU9vpwmRFpjz7zoed65QLf6DVxJS",
  "key42": "2115sySdNELwCMsKUU1E8GHBsc37NwfddMc2u2FxFDyNsJHGyXSCuM3acxciQeYWJqJgj9kTT1XTkEQTdMtSLmNS"
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

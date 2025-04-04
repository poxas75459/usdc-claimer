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
    "4EWduTHPvvVACbWhrU2BGGyqTQvLQmT92vec73vYBDMxabmT5vd5mc6YY6gPWpugBk77SVoYNDpZWbAZ4TDrkZe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXrH9NjAuoPXH9LcsnJe9jccqiieYguJhPuecenj96FnLnUjyXBWsNSwcaGH3a2PTfuWs5We5Cpy4hec6fnWv5i",
  "key1": "579QKs57y3V3HaTSdq3wswFAYt3J6fRAFKChYRtmi4iDKEBjEXvGk8CrP2nHjJ9PEfdVGjauADrgrV5hu3tDBRez",
  "key2": "2C1giDuhe72Fxedw2dSrUf6xuYhSBBXMB12fnBtaU2AAFaWbCmPui9wpDHnRUu1zj4BWnU8gurxzqiR6HKSY67e",
  "key3": "PBUG8oWENpbfEZ81hczbWbQozJ2JVgpr1KskKYujH8wXYJrzvhDc9GSyzFr2LEXaNgRLy2K3ouUjpxjbnQGAQXC",
  "key4": "sXCDravVbDJsRrcp3FAwtDJw9sLFCFxZXgjW9YqcGtGcrXSAgXgLSyL7m5SaLJs1SQ1RuN29AZmNqU9cfN7iDmQ",
  "key5": "3LMSvqkEN5XqX7cRvBg26KEpkyvbnb9QavmvtjbToX5GGLGTzRLuMNTsCL1B92kVVvck1JxCVh5mcGjuW2DQUD7c",
  "key6": "4LFNEfZ6Q1G7MY3cxvPs893PmedP4Z5Fd32emKvDKyYpjCurfxiDidH734ndtjp2PTrEmBcbu4kCn4xKphD7KvoK",
  "key7": "4kBk4Gt1L2vD17JmJ6WCo3D4nm7WopgejPubDYUxjzimFBqZLvhLxJbziLNxNAe2ry9Y2ooksMuj9NMUtuCxeXCN",
  "key8": "5fMvPNsoVKiUdJzXStmiW9dmFj3EuKPbL4opw81cJZWWJpRnViZwLMRBWPb2LSkEPZFaKH442zihCfdUFR776Ks6",
  "key9": "5XmcUnpxmEa9nhkHfRKzC74z7FReW6ux5BMwNPE4BvX7yiDddapKcpdUbWk6P37BLtREeYcfurqnBDMhChTwV7cJ",
  "key10": "4S9YBWQj9LgZCwTkekNqGtLEKZVvchxiAppBt7CrL1hxf1G14dfo8ut8y4YubpuJmW5uw4xT5rTyDv38GuuyiDDD",
  "key11": "4QtTu8F1SJZkuxZ7xWgtUuby3pp1D9odWqVPT6QFc66rpekxVwDMY6x4aqC8XNfoGjQg8UjY75a62JP1gzeSogT3",
  "key12": "4Zr3rMtmGZbBAcNTfTS81gYcRQwBAHe2LPj1gfvLdsYxNzKdF9bvg68BFEtnNdQMA7QpNX5kiuAETrSoCHVfShgU",
  "key13": "9odyPsALLYefPnTgc8ycCLjKutLtZk7E1FwGpLCdXnkhQjz2iHxpxK2yjVyXn2YHqJxsktXkrbbVDxQQ7Nxz98U",
  "key14": "5Wc8Y9iYiHPSMPecGHUR4UHEJ2YWakuhvXN5gupAz1iZi6iVUTKEJoEknTmg4MCd5GXuou9zjoiVmmYPRrb7qLmR",
  "key15": "37sbtwXiST88ypEzsnytwJcap9z7X86ZPfpYsDPkfZMQpY9dzH5FxybkQ7c4d2ziRZyVDPJq7GSktjNnmscTU9nb",
  "key16": "2Hy4MNwhB7QwpqiKXDCm92xkENLM4MCmdQx9rXG2627mVgArq9doxwHZrQTQHDjgziaG1WJTWicfVyXRfLai5MmS",
  "key17": "bU9ZV4owLwu9zc5fKyrhZNU4eYySD3NGNdMxjbPeeqE2XqiQnqN7veHmg273kRZuyHRsvpBjcuxf6ps1QooZT3B",
  "key18": "UmMjiusQcjFbMuR1mg7p3fTH8zRQRhb1JBdJim8Wenfx5nrgHQxg4wv6GHfcMdCzw1aSZvD27H8bUnRdrbKVozz",
  "key19": "5JPVRMcV6G6fUtZq96MfrcFeoK4VBpTQRu9wQVnr3yxv7cKwG2SvGjA7dV1jytE5mnVMuvriqcBaaH9K233Q1Ah2",
  "key20": "3rbq5o2H39xgoU46kVfRVdMjLNeMb3s23DGWLXhUWLmJvhjXwXoZZBp5krysVeNNKpuFSmgDWpN8Ltp7XDaxXsFg",
  "key21": "LvS17jJ1ygk7GnFZx872DezTT33dxLLc4Y1UXbxnCL5MD6j3Ev9BkGJcdyC4ZzrJn8g3nL32kvEWmNVTehGuzGE",
  "key22": "5BnQv2AwWp7YwFo1G5wrD1F7djrfqxUYKSTsp5FJqhqvTUkeY4QvCUhmnSqezf947Vy8uy4YhrYxV7RwAYiwqfKd",
  "key23": "RDcagRdcnVSkk64xjNB32N3v9PD61cmbDkKEaqsZMcMKkVaUYTTAgX651WjqtxVgGmK1Ygw2vsSzwDY3uq6qopa",
  "key24": "36zxV5sgBrKsjpthDH7suEc5KHDUqdafF5CEaFQt1VKSHm18K89enXrghJJk6Mue5z3m79hTKMBJHQbSHbnsMB6c",
  "key25": "2coGdMXPeHBnW9wpbCckkcVzBovDz6p4h7Y9hsR8THbZe9aTcSHsa5rsD9YGkHpLig6ShVuM8YdCNfB1tw1Nbng6",
  "key26": "5qqv299nxmuERLUmyAjPPxR8VGmpZxeUJzdXGZCKLFihPv1oZZvVqHce4LGbPNQSh8ZQBtnnWeH4eBft44tKnMNY",
  "key27": "5CTLTAxGK8Nyj9BFzJQZkeCAKfSj4eFdjxT4k5LPTAnHMNTmQs5REW2nHiEp3UAUvZ2HqjxAXj5jpqhnoKYngzE4",
  "key28": "5TtqiYumYQoBDzKUc2br5r6VGGZ31QSy39w3Aje6nVTPStaveWgzqTF6jWHW9DHLik8mTFnxSjK2ze18goSikzr3",
  "key29": "5PGwMoGXNVXsTqXxFfKpoddkRMxwSeihxFrNPbgJafNEXEtMHMEA8cZEb8mruRPVXKAqkt4Z3f2SKBsQfwaFZ8fN",
  "key30": "252yvfaVf2FYEF67LMxjEQrvHjGNBze3dVSa4Y1KDGA2XexA5H869WeFGnJkvTWQcWm76eBZYyAUw3fBSELGttb5",
  "key31": "44t1MWKDKjokNm2jBqmG43efeKC2RanWpUzyh9mws7W5rfAapsupdvngvNPbsptQQL4JWEXV5NbngrLgXwMRdq2R",
  "key32": "3YfpXZ41d1YYJSMdVEkgSdLHo88nbAufYcfPSVpeg8giagzZpdU6kc4yqqQuh3K8zrYBD6HCP2CkTLN7hygQiLNF",
  "key33": "4r79ZicHTuFcN5FunZxkgowemhtxwGj5p9Frd24PweXRsopEE33nSh84FH6GuCQxfbiSGsADB2B5pQ5yoh8ABvQr",
  "key34": "4R4C6N22Yd6A1SX3mC1HpbaLYtBps37S5uLunMMHtiJeP1Ch3f6D1oPJCkW9HmmBihdpahkAHqmLevb4RgsY5T4T",
  "key35": "3P11n8ZUsQ1aSGEss5RqppfXxg8v926TLgbT4wdiGSPDKc1e17oW6nisJo8snaujSoHfSL9i7wrwVQrsS3heWLUC",
  "key36": "5TcowcrJDq32ATwRymTqae3PwnSv6KibdeUXhd7kTZ138Qt8snfNejEoXVLe76H6wThcnmui6DofT3m5pptvmAWc",
  "key37": "3Ga2i7AbH1Gfzj2vGwXn1rBjSnHqQPYGetYRPupfXRcNPkAjA1yQVamih8rrjWQr7tbXVYFS7NS9u6Sduq7jQqx4",
  "key38": "2zLAL6yYREfK53tbk6ST3ya6CmgWfH6gt4dk2ZfQy1FQEz6wXxCcZupaVEqzv1thnm7i5E2fHSc6sMNTFdsJhr2r"
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

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
    "ozoeoVGwxtHqLxmjt9y2HPXDTSAViUPjidZ9x8khhuauMEMSKbZsWZqSYz7erAFRodRGjieuSrHJEGThjUjpFXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTtgiD6rc76VbeAjLz5ZRjeXn4fwZMtxgbJbc6UKYoF9L5ze53Uru8Rd7GtkynWwUD1kQRZsSt8fgoKuNdapdoT",
  "key1": "57xwxdZH6iJaJCFPe5CzyMRr3VCLNZznEWaKCKK7iuS9g3ouEqJYmum1Qh2rivMTHq4tgt2d3fM3VyvXyuqqNRQ6",
  "key2": "QVpzpJfWxgEN4yCVLMV2jsaQwaKbHABdEgCvRXFeH9m6vvNXGsrsDjVaiBPcpwfsWcx4MxKEsYq4EoP8fZy727d",
  "key3": "2LJUQhhTcTLTUVL6xkVRmzfN6t6KurbX493hSxkfgmVi3DsWykparrMkQDLqoAAvpmNdLbjhnvmzjqMUHBERi1zs",
  "key4": "2RyksXksG4QURAWqEvzYK1qGCjmen35edrpoSYtP89JLfgARAw9XqQYPXyEPcXoxkjBqZArKKdtTEc9Zq6TerSbN",
  "key5": "3BmVDTtMDWPmeBKq9w1vSbeEUB7knSq2iWuVFoneH6yk1cbZZexJUKSDJmtiRA3SNf3JYfH4GESVqa7y7pA2LVw6",
  "key6": "5q48nXhZwD2o77GNXYioWA18RTE8qtS6Jijj9GNJS1viN8hrTLWKkPeFSZZWeaWSSBc78RVGcgjgjHduWaAypYNq",
  "key7": "5Dm85EF6Tt1bFENRngm6rvb21jQ7dsUFtN9EjJWuowujEHfprgZR4h6fQGkry2QciDuSQ8FogGrET3Qe1eMNCHcJ",
  "key8": "3Akzwf4BDnG2qwV3iVhLEZYkCSQmGGdf7oC2k2MXFYbYC2UgvASHbSGmk7ZbYH5FBrK98SiaD7LzBrTAbSsZCcVi",
  "key9": "3res8vea8Jtk9cu4nv6iHwxzBdhkmXKjFXCP2QMJj8oNee6VPTUj81E7T9YHAwvYjAq8xUrWpyVoSs1RxshPjfHo",
  "key10": "ZNzNEvBC8LLBK39fWTzKTGSkSbXrjdUAYZwzrx82ZQh3gE9SbnEEnkKhW5ZMTWZ4UjyZT9fcuyZrf99hJfProFV",
  "key11": "3nDRKhGQaJERV337crkn6YPAjLuCTcFESWT2bzZp8Dv2yGyaUeJeD9KpiLHJV9DJzQ18QXrnn4mHU8UmccxtWkKs",
  "key12": "3pe9sFJ1Sfpimidd8wHjSbS8vqSgFKPs7c1d7PG3sZoNT3rw6jG3oxJyJzwoGtKqTcyL54UgdyVACmeeuWyEY9J4",
  "key13": "5M96pbnEcerbFe7LgL98p5TdVi696aJqKVmartR3omfAB8FGTio9AhDGhJEC1nQqYNB4LtREtuJKcWGVWBnAPfee",
  "key14": "3oQ7vVeAKbpqnT5ZRHW5pL5FeRnCn2KfaA7gsfVmCPUaY1Qw5Hpr7EgCfafejn6TgsqfhLqAC8gzCFthkHFR64yr",
  "key15": "2ushDDa2CMFXP8samd519JuCBZBSHN7JSz4sy8SALRHuZWdiHc7UtipC21zThhR3tr49GMgDsaJEZi85QJ3AUXgT",
  "key16": "4odfap4KyGqP8vJ3jAdqN87u6a5jkZRJ3kcGUwUoWtGZqhkyaRd2CP1kE4XgRHv1zXfwxgGaA6V2qEGVRzoPEdXq",
  "key17": "2Yo4TJANcg9diXJN56hqqBdEiJ9ocJBu4rvTvaZG7GnvNRPZ2edBi1sxQKXRrbQijZKxsHnLhTiZic2CfGHm2KTD",
  "key18": "2NUJn2vbdAzWcr3KgULkJyCu1rEzo54wezdLbaLo1TDqYEWYpi84hKk1jfJ4FuLu8vnGGu6T3ypbrRSqdDioMsmA",
  "key19": "2Md4Ld2UzkbQEo8kfrZR6Y6e72fxQWvzSxdN1PeTF4JPnW3eCpHb3uZF86trVtw1XpzFeWZqUJcg8ZtHkjKx17Tz",
  "key20": "4752ua1hLjwUSuHaDbygofh9RwvYLc3BeunXa3tA2xCm2TdJpx6DMRrSJRXtYxmBGZKJsJXkLfs6EeCiALnisbLw",
  "key21": "5MLUJECHFckaxMB4KibfasojjWCo5qhfy8AnvA2GnfzmQoootT264HNFU3NvZrnk3A4xsvERNFN6CfXJBgDsVyjz",
  "key22": "2wQfPwRxNoesCSiLb1Qkxf46tyuS7QKDtfzLPrvCbA9CiYm1w7MSAkznKjRni6iTpWahLCyYxWPdSDyWhTzcBdMv",
  "key23": "5y1DkvzVhXsN9s58bNrGxj1nPN9ZGUDdN2mVK3Kv5pG3y9r2Y6LqKHF3RJQGRkKioMNewdZGJh2yKitWJSKx3DQo",
  "key24": "2YqgZFp4Ta42nFhqYbYJ7oWPjAbshkhDR1XDvPwAW4x622yZAR7RMSBp3Qfaei5byGz3a192VySkD9uLuJo9VY3k",
  "key25": "UAM3WdpPFgqRYVsvkzVb3phhkTaRRL13tRX4RYYrynk11svQJGer4AVX1iwa6J9yDWdwkqtn1jchu8nibF4qodn",
  "key26": "3AfF5e8bkCE5Soy61QfBFfuE1XDcp9BLXgoas1GFR4xmRfXSQ9P3tPn16FJqbXccgMk2Ae7iL9cMqAPeDNE243kk"
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

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
    "3AjmY5a2NgeTAyiM1QBr2y8xAAf8zkBE5LxALirLjzHiF1FWw5E64AH1KzQCnquEHf7HGU7f5V2JEahb6MjpjYpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57taPLurwjaDqQi3rk7Jj48tGBsuTcmEfeEBXRZJgYQmarSBvg6yH1yUbFJaBXxdbd4TZTr5vymDHXSAW99UciR6",
  "key1": "5Kt9NVsHnym8WN9xCYaCao8deTpG5WfpMJVVAkimvbSSuhKeNnyQwkCRBT1Q2MSaWTv5kSPeFmzhgWU2hbpBEkZv",
  "key2": "3M3UXThszmeF44nb67jQz3D8GRza3wKfGjqquDBsv6bJqyhYzmcjoJZbtKvZoyiyXvMkoGqmv8Ytu1j9jiMqLRCr",
  "key3": "3vEVfd3bfGcNcWBCsLgNg2SDdvWL44docZ2W9LDRvGLSuhjAxWN8RQKDqNXKBHJwa4THLo4kKxquLeTeYZqKtMyG",
  "key4": "8Z4dBo2q8zSdSfHdsgpLGgQo9LGTETdC9Le2FAVNxJcGNnk3AwiWCJndqxsXNC6bAComKg2k3WeQDqHhAxnpfc9",
  "key5": "4UpneKEfWmdD6P29xwesoPVmoogeN8buCFsQ5cgrRkmUyZvBotbDoTTgkzesjJwfYUHC2qXS7rWoQqwnKNkPSpSL",
  "key6": "4EURv6mejrauNUu8JubiSw4EbomW2sqtwejvhTtdUdrz9J1Xwp1Px1s9PukbAnkiYSdyW72t29Ly4mTGKZWaGFrP",
  "key7": "3kwzjyZ1QdFQGrc7nU6pN7iiAqVPGyDxU92a1MHSBwp9BPff2mwQtxktRfwApyCCcCGpi12k8v8Get1kyEwRmd8r",
  "key8": "2GUQP8WZVo2duoKVN3jGdVQftUNGt1m8XBhzKoDyh295aFw3SJygDZ1zFyQeanzfn71hufg7k6yYoVjmdQgHzBuu",
  "key9": "5mWjVxYF77cY4ejkPtA7s91dNBJtAPi2hxSVCpwrZjz59TXxxJYxwGP6afK6y8EXHrrzXnA5m7wrorShbjAxEVhA",
  "key10": "uYMZnUkQRp4PUbE4y1mnbAAjYRA9B8ggRZkmhksagHHsdgzvXo3jfoXU1sD4G9vt7qqy9iVJK7PjdofaVomkRKA",
  "key11": "5NZtR7i8AnckQcgmikszgz8fTLJYAdqLjBFVNCHEhGCVmBdfAfSEz2XmxxNZAQfMrELwgpZ6ZUcXDfYs6dnKtQtt",
  "key12": "2h6WHvkgViSYfAP4LZdaupP2JPno262yHkkwYTtZYCv4fC1KjfBMMgFARD8ZHYoeKpJmnauYNAh1qcjNfFP4nDuR",
  "key13": "388wVuD5gUgztMv9wt5iQo1uWvRSTXkQPW9vt3nqWaP7LoCshtZcBegMrzzHxKiybwx5VU29epYoQGCRSKEaJhJT",
  "key14": "5tgcWAYrQezfSvRzDEqriDe9v4dLmy96WbAGg8rxDA3dBSHQgNjMzo6MkSwViV2QPftqpQMytjqBSUNV5hrybtfz",
  "key15": "3MadQkTLUffSo64GoS12P4qFLmzzXAhCpcTZagvNF1AftbRo8q4VEBeodvFLocz47XrByy2Va7RmWqVcr6LtL5m1",
  "key16": "24bmmofgcBvqLEB8jqMs5VS7dTtaZwKuVCiuvUQiJi5RsnjwjjDP5uSAUYhChh89dZgyVa1iphiGZ5YRKAmCVyed",
  "key17": "5Bm8jD4vk8QT5LjJzah7B21UdKd8etFVJcpsAetUn2qgboToVp5NXQE1BJkAhG21ZEu4erbTfJGACN8c1Zvfyhow",
  "key18": "3NaEVF46dqqBRudjKBSiyv66HNoUdmyVTgvheEWHxNVMwH3tAhewG4HahoLXQzvNFUANCi9zxQAnWsEY9wgXFAFq",
  "key19": "36uGPSa8NDykA6oz1ypZE3t8e1QNGv6McLnNwbDB2RKtExKZiPqFvb2DhGhk178LzgucQDP9Ja3pts9SAqGEv6jn",
  "key20": "33q2M8UyJAsHKx92vGWC8mYPhuT3RT3XJeTGzs4AtQBDy21zBCp2NjK12TMQqxunA9ipnyvaRs9uEAxUiQf9dyTF",
  "key21": "Bd5HwRrvxfW2eoJE87dbaNZbevSxwMJrWCEaZhBkZNNoopVMLzqXss5Ed6ngM3LvmjDQrfQKNnjG85w26PmbkN6",
  "key22": "5P3x8X7erBeHEFN7CHUKuC22VCTQumtHbHhsb6i8t9nGN6Qug1cWJauf2TcWZJLMuBgQLiTbWk2zTz5j2ksQq9Ri",
  "key23": "5naytqSJfhN7BivMSak7Fh5gzUnSDanUFQMnop5mszTwwxrpyJNK6aWDnR8gCaXLGwrhFoRrQ4AS8SRvb27TaJGP",
  "key24": "2Ej5kF7jEbP1ZAEuCQpFW1S8ENei6vpeinXtabpUrdquFht2C6GHm7NvmQ52xkCEMcMixvkLGcSPNGER11rp8KfX",
  "key25": "M7XnsQPmkT74xjxifX9HxrPRyXuhrimPWitLsdH76TC5qj7tGTLKxbDCDPgeEXYV18pXdrXkSqeFjTLvJ5vCVVb",
  "key26": "5G7PRibMCYgZzu4D8Utv58VwgqhM3pW4JhLU2y5GrhYWzfsMnQUrpi3Aiu9SfGTEe1YsZycHdF5VDwpsV2VmF9fy",
  "key27": "rFJ1RCrf8nBo6PM4RL8SdEp1vzcqEheGtH5dGQvwkCzMnukzFpRpJ5KaqknMwAFCrQoz2moQxENvyN4U8vYMTUH",
  "key28": "2dP55UAEMLHHj4STiCdxVi5z1cPKSE9AjMVFZvhP1MZ1FsDZyxaaRMhS3qsjGkL5rS6wCrFEgrZWJwzkD2YQdchp",
  "key29": "3UPao2bqN6HZd3PPAoxeftW31aHViN7KDdZAyfyH5nNjVqHJbUiUkYfJ4Rn5dSd3qsTEZYQqMvjrn1v9YFf14ooi",
  "key30": "54kbP37h5KTcyTq8mqdv9gQgJzzpmKd6iwC92KDvbetVDre1LD6eUvykngfKthPZZvgeSwj2PGakzkfnLrnXrPhi"
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

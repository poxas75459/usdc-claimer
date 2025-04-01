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
    "5NrVFCNxyidxAzGmX9pFx2pdEnnJQ4bMoCvho4iPpfryyuexgYTzBvEPXGWbBksjxaAdkAxWm7aRGsE2jsBXRfz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bne8Bq2sbuSab1atk8noZkMqVqmFNw4tKadiUZ26Rh12xZ1LaeoJFqp9TFWpxpuqfB2UGJzueahruTcEX2gHLb",
  "key1": "JHwgxnPxj5RVtxm7JZwijd9v5D6urWggv6cPVEabb1fbyUfUfiPB6fZGGzuRergFVigWy6c4Rk9fJ9LFJdeSs8P",
  "key2": "SwQSbgZRAqNmoHWawnNEiSbTyWKykQ9Zv2BhgCh49DWDdZroRiMnQPxU1NvVrTjXVtrUpV87bmkrgYnsakBsh4V",
  "key3": "d5nB2xVkUHeWZ7w8u3QA6bX1d7V9QBukyzX3cfWgNTe9ncL8WdGSmXBh9bs2uTXoDqxD5neT54NbF19PMn2C71k",
  "key4": "wctchfcpBFgaR69FhTAZE97JmLbEDKh8bRR819wsTAiJMdY49A441M42bbmjWzLP3ha1j48X6HsTcjYv33JSPF7",
  "key5": "45npaPTVFKwWNRh5Uc524fxgrtXqFFYXmDmTG9NSqVuzXuyYCMaz3ZS3AHQTFTu4oJF84a54rvvZ4761PigTzBFm",
  "key6": "59yUjz4XVUewLhgaik77f143qExBTCVTo5bFQFzpKAgxLHiYuo7iD3VJuK75njc5mELFNWW3rSBr18MKGHdEGcG7",
  "key7": "2FpxRScTzYw5XwVrUQYrcRhMPSmdPJTPvq8RBuW479QQc7S2Tfgbcp23SUfMPWRJh3YaVDXUSe7DdiCpjENDvuAY",
  "key8": "4fqpqmwkpZQK7fPabSUCiufXasX1vuCqf41JKxM8B5y2TtGbDJ3vSFXsW4pw3Qp4jorEuSxTMw3bdWXPXtYB4TXj",
  "key9": "2G2iFzenc94CcbVEyKZBjMYaqicTvvVSq4im33DHDRHRtXHWGJQTNfCxtReewWyU42hx7sA5zEXYuCbP3BS5pdqi",
  "key10": "3pk4isrM88fmhMNLb1QB96vvLS2QprDvdzEgvXidTeATAq1zcoBT6k6rLjLoq6Bx2aJrJKGTC5xGwqYkBvSf34MT",
  "key11": "41nha8F5GYArrvxQVN3R1Q6Ey6khjHwF1TS63coPxrZeQe7JUnJNXrZnCZszoRBdwLW78CqwFrLUwXTf9k8PyHxw",
  "key12": "RdmddrNWGRn6zNP1Hd13AAxniCQSGcqiPoyEzpgo2Hem63o5w5NFUhchZh3YsWMQuqu8JvgUUUJYqTtABDQuN8S",
  "key13": "2r2BmPBJaUZsmsXs7zskovNq4XwcY6wVFvMDS6doPk75SB9PDkesLNXAMbVCsk4apaqBEJqV3xSFZkkyinyogNVp",
  "key14": "2TofsWDdAP6zBata8X3ZAgukBSxG5FWRi9pWC7xdGeZHpMK5mFf5ZxErS5asfgaQMMnsmoGRgojvaTHigoQf2UF7",
  "key15": "5JKmYmsuZD1mn4bYgDkZBH2AcZgobT34n5JopNedDGNNK1H7tvkNDM7HVZ8vWCktzNErtz3Fnk8RWwVxnF15t8Gj",
  "key16": "3QMLHyXPWgNRCJ3tRy2NFuqCNgpGL2QMwsSeEB2vC1yp4bSuqTPQynsEtWfeWWedbZ11FcdMmsYFVx66ph6yDiuw",
  "key17": "3hqaL3fcWCF46NHi45JacTDVUkYR2o41yZKz9dEGJgAZvp3b5HVg8H1DNLSy6Wq6AZPVtTvJNBMeEoV7JjvbYkGm",
  "key18": "2Gj4DmTSyn2dQuV5QGAfyRwDbwxv56MVz7JiF8ec1YHz5DK7KKWbq9V9t1Ehyb8HupFVfJvJqWcSu9ypj9bUmUPA",
  "key19": "5tcykcsevtd84PfvvViHuYGcSQEpK6vgV4THmjLJmyXkYRWYtTdw5ZNcHU8wpXhXjs8omAQ4cMqE8xMZieYGr98m",
  "key20": "xortzzUN379b4nPpU994D7UiefDw1zNnCWqZPw3R229XqcxiSuhQgMjvLMJb2nFsqAkYx4PLqBmwktmi4HfuD36",
  "key21": "Mqq6zcDvYDFCD75UXpTgAVn2uq8Z3K5nWvHVWkDTtiiddV5Ph4zmCg1euySDJqcEHxhHYK5y14Y1XKCDTCLJeAU",
  "key22": "fEeQFYECpu71kzi16WoGZdxLZndesi56cHYP531KDhjkTpSMwh4T59hBeRqZoweZRHwaUjX29FoetGtE5iqh1q2",
  "key23": "456MSapAjrZqPaNhRVTq6JCmSJSRarYAo2KJJTMehn4TWfiuGgH3xN5Mv1TVWyDcZjFjMx4A881ZTMpiRDHYFvCN",
  "key24": "3yFV3mxzkjw4QHCWxn4qgX5Bk4xumkrrCzNpr2MJb35FhCNkd8djsES37i9bobYSZZVXHVnGBE6XeD2RqnToJep9",
  "key25": "n9LKTir8Mp4JDa3B75iMmhfsqmTFdggL7vNRr1WQJ6FNacTu52K9mMiuk1wzpo9MHvtQ6jxM5pJXnKiS1asXtNr",
  "key26": "3zDEQpFcNudzBa1Dz48ysB8WXqhdhXuw9gwGWhrczGKUtDy3Cu9MJraHAWdtxhYgx1A2EtPkunrWkFAp8fmkX78q",
  "key27": "2jcN7br4Hzrhtg2wJfWqTthxTCJMfR8w41dGVob1PGC3D67A4tyG3gcKTnKtkeU5XaEGPyCxPMBNQFmiApWe5h3L",
  "key28": "4sd1z6SoKXq1pKdLRLbQWwkni2angPiWbPwnYMZL3SzC2bgqMVVUoVm8WKD6rS7X9Qi87XGsU49qjzWE87P7gEc6",
  "key29": "HL13BQc2Mc8q9F8Npeqq7w4UNo1Un1zNhtbzcSUgG3x4gg3ZXq8pbzEhvvKHzMWwGCSwcSw2xrD2HXbk4JS6zZU",
  "key30": "2s2HuNGxoMWPiEwt8KS9VQnnVq6M6WPLMz7ocetmZM3LeehnKuGub9vijjUm9WXKngji1RSmKe6tySxrgE4qwoQv"
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

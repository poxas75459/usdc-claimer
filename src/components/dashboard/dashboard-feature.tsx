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
    "5q7s2eixqPPyLAgs363QZ8u8ZukYXTKhhJVCWmV6S9WmXMAZvWmhZsKtBmDaXLNNEEqpxkZiPduhEDmeAieoGh85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3NUJvDkKdckAhDDgadxhivS5egwpX53Ypb1rCaCcftaL2N282Hmu5TsRnP8kC8gAan8FzUNeJ7L5gJKA44o6v2",
  "key1": "2JJesLfcmZSb4RJ37hEq3D1uNEKngKBGPYC2TX7KdbbLk3VkSgsKtZkuq5KpfCHzBJgXPQexNLjEZW3r8i2bTin3",
  "key2": "66uvNozZFdvagDKaffTq84zyoM7w7XqovXHDwqdxkKnoBS9kzt81UYyodZme9YDdTaxUq38FPyUjWUVnBd8biJvg",
  "key3": "3B6cktw5a7Y6DzPQdqrS65Vig5rj3hh1b3epJZqhdt8QjuWGNzyyLPWXGzLrx2dXE8hZszJqkUFRPP6JzCwJCSxF",
  "key4": "27zuUwGxu92MZX82MobydRiEJJkYJWawMwtBzqh2uor5PWwUQrY8gtm6PwWWzrAYEYCfS9TKY4SLf1nMuhC2FHRv",
  "key5": "5yujD1sFBHCV9ZSPw4vuBtdeE7vxKpgCaoDZ1HFZsGe9JnKZF3QC8sciAYcqYZKnra9M2ofRdjeMSS28a5T4SdJe",
  "key6": "4enpdSfPo8V9iDwyCdCc8FUiPLTdfHgA4RJNWhBbKt84VczrzeH1dDv3DhQLKSyAEtkiMWQ43JSh9f6r2EhczvPY",
  "key7": "2sUowfqaUyuBTi3iQTfhemBMwBvu3kLwAr63UWSZq9YAUbHaTTsHb2ZuYVYMKBq8HEx9w9ZRfb3Qak2GEtGrbAiq",
  "key8": "3t4LFVTSCnUxbCDkDWRNu3qJkwFYpR3qZgmAEfnDRCE8cwhuWGntYjdY5JhVuw4BWon7inSoLpNhHcwnqiwbs2TY",
  "key9": "5gqNSENSUULe1fqAHPAUKg9RxugJDHRKBum9ED6GxLwBXGQQL2iVhabByGRzmEtHT33zw1Bpac9qXHGfAAcKGk8U",
  "key10": "5P1w179UijDjmdZWAHniUkHZh6aqc41KjRMkLkWAQ1Fg1YHHDPS5b6U98znWaBx9ThbnE2kpDY665QqHV8rNGMnn",
  "key11": "2KUTXsyzkynntvoS5um8z867MMkckaUJ6EA9CehA5g37hh8rZuuBaAR5PrXSSLfy49K1t6wSTvviVBUB5YR8CxrS",
  "key12": "5FANBgk9Sf7UnApXtvvLy84tPmgEgjeSeWpkVmxsnFX9SzhNAPJB3PLD4KYfzSGfHExENqgwA8RS5prpbVFNqAKZ",
  "key13": "5kRFCAqcTmwmWz9gpkE76LaF3bp4agao9YBVPQseA9tkP7ToRhHXSVyCZpXHusY2iXfKxYT8TjK9TgACyfuV5zNS",
  "key14": "nqzy12BYiX5go2t6TWErta4JpKyiQLrWhGHSUBr1NLokywj9TJnvFHnF3g1J4uKiinqf146sV8CPBcoixtef5T5",
  "key15": "4AaaC58P3EvG9QbBzSe7FxdPoipCZMP1dGP7KzK59xy3WmvsvckXUCoX5sZymLTs5sMuSBGJppS3b9rd1ymMLrFi",
  "key16": "rytyHJwBBLz5H5ZFmkXjdVDSewPLHJ6HCFTsHNFUGZXMwJ3VNUsgzbjn75ycoaCNGbfWRXNBoyjCDpxAFFjAKDY",
  "key17": "4zsB73QicddTTsKP9eAdjUK83pZLG3GJbVjnV88NF9F2rAnthFdEXzVj2GPrpfHG7Pv8Md1YVotHYHnBAkHbHinR",
  "key18": "4jw3D6H6AqWPPsFJkA4odLQr39kCAymuN1DGZQrRUCGDU5HhtZ5AF4YvwWW7sts2fnFNZUb3wDN5NDGMN8QkQ97d",
  "key19": "5xw3qvhVeriCtTjFJcGxr1XkHYTe7kiqUuT3zKJT2QsC2JUrrN2jLAsWKky49QSF7snLwrJNhiSiMahWeYK4n1dP",
  "key20": "2kzNoVEnQLFT9C13ps4y1LTHZ4qFMauPk83HmXLsv4md5EUJcVDRYCT6BrAFxYhSfYySNqayaJSv6cRcdoNcHjG5",
  "key21": "2vV4HKchw9jBxzhsRgc8jqFjrRExcjPUV1gN4v95LAav9WSi1gf6LFt546qBwKf7TN7js81TpWyj4NdPzWKBEe5M",
  "key22": "3rM63qkqjvJyiLj6Nk5hh7dF29p29L98WooVtp1HhBtr7AjEYZiYiQ46r5odd99AC8b3qm5rWVZ9uwWXbY71Sg8S",
  "key23": "5kfsJx4gMjmUGzi77yFjkx41DboZbJReL7zYpZy1mRdHKacVUTAM7AL1xgiLkdKvnvEbVruu4pMvc8P3hxJZPkRd",
  "key24": "5P8zvNENNb6nBDeJDBEpTH5vw1q4F5asJtro5hsJFbA9Ty8LK11RmPEWLUjHgQdwVJdndvQ4tEGqG7oXQELihDAf",
  "key25": "5xXmsUTBWKeHCXhCd8FngzXZxgEW3chBxUkn1Uko6FGDs35sgbtaevKPEAK5H9fGf517qfZ8jrmtERBApB1dakbY",
  "key26": "3jUkg3uPosDPtZkrLSaenhnb6BVZMt4e9NbMwjbSnz3pJvs4Eh1D1L83APJsgHuJpwoLzaxH9hNgXYd4kx4C2F3p",
  "key27": "61aJ4ghVv35PHdQt3Phtd9yUnVVuR7gGo9wgxST4DHrWTJt2un1ocHA7CaGAiqbm4D9jMYRM9ingTF3SeihZZtZW",
  "key28": "5GEN7eUJPA8urutafLqTpCmAm2KCsDFu9tSC5dqYkhe7pv2CaQRrvEeTPqzDaWfQgACNLS165pjbkAw6DgmMGe4v",
  "key29": "5quKtj2BpgdGqhXfUoqxwk5mWpZj3SwVHpdnsa4EXEtjk3R2nZLYc1kEZMLv6RUHRur8VyvT27gsmgSpWYCzMkRt",
  "key30": "3NBDJVCPk6sa6CBaGpVX47fXRUdoJAvWMB8zyk6uqKWE61vTzmbfJ2T2y4Qs5iQ5isqx6yNb1qLr3arNFR55fKye",
  "key31": "2aBEoc2DfZc1gTJSz1AHf8SzGDabiytvbJz4WYW16wxrjj2bTAZY32YCoupX7NSh1M44fnmhoRtVu6jUyQiVnB4e",
  "key32": "H1VzQNHdTTfKmu7YJxMJGgJkJbGqvUoXr15Q9u9n3GrcR7K6hk5Y2m5Yb8XWb4B5gVtpWvrmkAMr7wpYRcwCK3d",
  "key33": "54DJqh1XMVFXWknzZWtZB2eSN1ddXuxMiK8c3tqjqjyDvwNPhwCThXu2A6AsDtjUbbEhARMswC9CjuwCYpSpqLnP",
  "key34": "z6NZtBvVfoeo96nLuphFPLfsYmuKBKXYfMvZmpHyFxeB5qLh5QGG6FpkwvBBKVbXNXyn1MV4ALZLkpozNq1sdgF",
  "key35": "2pzGxmTUovBrG4vkoB25cPeJG2ajy2rZwH38fCEudigMZoBLSWHGWJGfdSRzaiXPswaMyuUxrXkLXwdC5D42GU4q",
  "key36": "2bymViyLingkSAhkEVD2oDRAdzGSojvrPBLP4QJh5PeZZUqWTV3hBALpTLn7rAQUwJJVyqwibXTeGVtoEjFKFryq",
  "key37": "5Ny9dJsPwLJdhEuPxSoV6XvEtRyHPGeEqkkhNvzcScu8T8vSHvsHeJc6rEsGdUzauTh9EtNB622k8tkrHjnCgc3z",
  "key38": "4RRyJXrcL3YHjnv1y7Vsc3iv9MYawYFJjvN2NAqR5qDaD6fDN78eZtodt5Pu4sW3mJ53MJabqU3yoqYba4Dsmhj8",
  "key39": "46vbnkWPPnDi9VNd5A1N4iKgR2LnhoJHhYNSprPxg6wboMmyZtmGGWZpeHhaxnA29kseRDZq5VbcyXV153kH2q2M",
  "key40": "QR4cFnfKDaU4BQ6e5oxkMhUABEMryz11iutriMxbJ9P8YcBVp9v63bxG4KMhCi6bdcnri6eoGMFg5FxxKziaywC",
  "key41": "2keWCMjPNRJ4mJr9kp3J2X1gDZsqSZXH2WFkP1V3gjBdv3c2e4fUpicd6VC1e7UQFCgPmADpSHU1DftdnenWhHmy",
  "key42": "63z6ef9YwqqhLwuPddTUTMtbTpLuV3r2v9UKiq2amSh2yVWiJjKBjSacsGYDpfiFkvAn1uDUPKj6k2cszaBjmHi2",
  "key43": "5csoPQoN5Mnb364FKK93LtkNYDQot8HKgm9F36nezY1Hn5M7NPuGNn6dfqMjmdaH4z8yLiLNUm2MJZaPYRXdjSLy",
  "key44": "o17UDnYSKM3CLbPa9keKB6N1DLNC6d1Naix1gqesTuVXD8muomPyQ8qPDVrLcRjJq4KatCpaNUXLmTv9k5AA9bV",
  "key45": "6XNzZKmshbWteEiFEAntB7cLSEM6J3VT6bWJPkR79WFx4Q7JVUFThjkNKhQzAjMGrGofi3aT39pfsjsPz6PaEZw"
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

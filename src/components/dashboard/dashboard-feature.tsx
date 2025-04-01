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
    "5W7p9unRd3EDSUHXdgvbFN6SZxEZhP9XB2sYuk5AXuVJRQnC7MCoohEb7W8F6LmPgoUX68JNX5UNer6XdrLSuFoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSFw7ZxM1pZiMMK1di6yKUcTHz2P5WWtPz5AhGjxPFBrkcisE8QFxSthRPAqYLUDLaX3ooaeZHve9hBGZAmqUnu",
  "key1": "2GRk2GAigb7s4VGseoY4bEuvRwijBia6QxKgA4i8qdYiWDexvsRDLyWKh8QMqBZunvtJUtB4KfUPs3eJt1U8oNf1",
  "key2": "3XUuNU25n8hXD2HZPBhryGX26dPseQ5MTfED3EFU5fH714yEh7cvMcHb4gJDJ21ExG1m2kRybaefYfichzkRaKwe",
  "key3": "5o7hHB6FDG8aA1NvTRZbyzwDJAbPmKf6ZzJ4jQucuBduJCGWZTQynjmmX6s7iFSMUs4owr5zD7AKNSnkXcfMRi8w",
  "key4": "2ZK7N2C9xPNPRy1xUmxmJrgaBvxbbytWrhzoLC6c7WdYJ4UjKPynenNs8wUQC391tXEz7fRe9fZn6cvttS7YUzX3",
  "key5": "5j3NYdTxSKC4sRd7rFjHgZMPBEeno81U4vEo45RiWq3EadkKTg18T2wsYY1S7ZN6gzGXqP7c9etX4pbS425hNg6r",
  "key6": "3CenrdCqUsk9vUuDJEuZSwpHPYdDGU4m6Q3g4ZfBSgixUEv8emArLeviQ7Hx9itPXt7DscV4V8B2bgvg3pPWbGuq",
  "key7": "48qY5iwmWNfsELqb3JFqg3jCeUfPxLJXov64KQqwFhRNwqqwbwv6YcK8qPjst9WXxsXxZgzyLgkqpCxWdD2uYPgC",
  "key8": "3wQqJinozgozQMKWkcUQiqHec8JWmhCsnR53UobE2hNEFdmp7e1JDxur4jfTH4PXbeP8AcA81xxW3ECbNjW3Q2Fh",
  "key9": "4tCngy6M769KnEpRPYd9948iTZNgwmYJSHQWdLAD3ZzrfgWA4hFU3PxVAaTG5AiscgD3yrxJbVohXTPKxCYftWq3",
  "key10": "5ZuSnboQUDS3d2Scm6q6ssqkjpWrdBDugTQy7cjWvwdbbyaYtceHusiGsMFEUxZW3ERKnzm2Fhx1Mr3BCqZrgaTB",
  "key11": "3FcFptFdMmfSyonCyPkJWpq8dNRihbC32UR95eJvxFtpD2q6JXpWTd7Md8GB3ubsPVsENH9ve7u4pjW4RY3Jja26",
  "key12": "2DffxHk9YyrVXiRPmaUQHXTLRJ7nuEkWu1UUndWhuzkxXjtwANNJUkcrjKyZJj3HqVrUyaN7Urnj9imFENEmpxc9",
  "key13": "4uUuF1AGVy2E42XLwRAdNdEt4eJWoHv9N3YEjAzvA2eCTXvTRGPwmWPGFEAdppRZyR7Jk4ySk9EVwEHYqd4TKFVW",
  "key14": "2i51RZbSCm3sxjfqKZeNKmYDqrcHyGNEKserc2DwWNXLG5VwRWMd6RZdfqv3RxdZLbfhe2BiBGRin9wy6oWh6Lga",
  "key15": "48VMYTWkPh8xADCRUrUSeJoRD3j9s2Y8bY8AhC1xEnUx3vS5PVFRxPjYCkpeoJPEmoCgCdDPJY62p4kg8qPzrcnp",
  "key16": "2UcZx1jDEDq9sFH8Ap4higsVhHxV6axfxeUCJz9QyhMKciCtCMs8LKCWJLhktu5HnZu6rx4dfQSSetZYXPShuwBM",
  "key17": "J2WLY2RgNqTVX3nRv4sGAxhJQQ8MKW2qFPrCk8PcSSqamevCoqg9CutDQodzXxmiUxSuHnpdVJWpHND1oMzJMP5",
  "key18": "3XzUnWfonQLcFkJSM5JB8qzt6Vvu31Bdh4zvAWtuBUT46LAf1Xr6oQUJvmjtpNUnLZwKWTgVZeaF3jQzr5nu4uP6",
  "key19": "3KkvtiT9hRg3nWPkTPpW6C4bMmhXjYjVbs6Dd13MLx3vZGZ6aYWLj49BmnRtyA99uZdANKUHEzrVdGkqzYe65nQp",
  "key20": "3X6i4UPdxjZVSKHtstZZjwHCd99U5ALyTQveRkKxoGorv5JuBCVH1p9eMsUwgiLEvq9ktF5guqZpaNVeHxP6gK4P",
  "key21": "2em2J5hW4zhMFzNBQ1S993P8oxTuXY1PxpkQjerDLghKHcvuXMqfSPuBQQmHH23V37dN2pJmQS7be7QDNRM3jWLi",
  "key22": "4VvFk1dr171bF924vbweDG74X2DiatB7XVaUG4shqjeHcrAARM3QiSiaoaFAxVdewHzwG1W6uUnFdusVTHpaYaeV",
  "key23": "2nsQrVXsMyKKXr7Jt5FaMNT3vgnNFFQ55jNDxSYCrnfNrDjmtGonGd47B2Lb9EULQE82SdPYnVsUh1d2PEzMxpcy",
  "key24": "qUCJf1RZaZrzLPHvokoxrrgEa7ZQxK7v8fi9C2CY7RUWewYQ48jMaaZEUzuwyzDe3JLkAKsDbNNFhMMqsEm9XrP",
  "key25": "2sq87nYohweheD7C1WG3z6kkZVb6bn2gw8bXGzFJmj946hMADqVqUW1HQMYqnoUG9RTZNWERfUKKoEYs8fCBNbPj",
  "key26": "3Mj7z4kGSVpVaMH3xdUuHwiYiB6xGa7fWD1eekiK262Txr6EuNop8kkdmH1SMDi4ANn2CXTtvoznVfYQToY5CKkz",
  "key27": "65Tfgu3rPGZMmfTNCwbsFLsmWTzUpue1aC9RBpfc2F374Tk4B3QXGBTF7c6NWqYhpFqa3N4NoWtJe6Fiiy1VrnXu",
  "key28": "4vwZjM5SidLKr56dwg4wEFA39n3fPKGHjBAkUvK3Zz93DjpTg5a4DsUHwuTc7VyTpaqR4R5tyiQDv2rmZdHkR9u2",
  "key29": "3PvQAa3DF5unSGY1Tmt6VH96CEgeNsWNN2vB2VGHuy4rfBTJPDAkqf7vLuVuQty2GHvbPddJQpL79xmfJEooN1So",
  "key30": "4vAvtxReExLgJgTYq9uEUA1xGm6cHk6Z1sqRXAd6wbWgABMA6JpZkXkhjDNt332phJBfxHLgcYF5uzT5srfSBJ7F",
  "key31": "5VWzJqcdBvuqisEcPYJZvNfUFvW7bgjaf8KqK6j1MTB7jEZMSV6yZhNDmSgTekTjSj29YX5sMVKmtZQu3W41b93s",
  "key32": "xcxR6VJ6Sffih4xXoQTu8oxBGjRve9kaGJQmKHi5cXcGhTYCC4BQsrigZURktzsN5nAgFuvj1FgxVKeJjANVzAT",
  "key33": "3SPJSnHcELThjMHVET7F14VGVnT4tgX5KGaRPx3edcb21fWo74sEDuCNJ8X4VAKxdqKfzJ1RbCvTwztnwmaVUr94",
  "key34": "4fEih1T6HMV9WZRphNbavMB8PyoPBpSsdTCKEwri4RTENzF26424hSs1Aga3N9Cjn5nZKLH3m7iRPaRWBRq4oRAm",
  "key35": "5tGbY1rhLkMELQyTN6eWfFESBNoSM3dqH72xL6127BEnDYf3UFYywaMMAhjjuYSNSZVF268vM3gkKDSxUaC1oyUk",
  "key36": "4SAej8gmE3CW8fqoRCZUJXpYAXsqXvkdCLYUUgJ8YhqHNLgVBQqzAG3Mt31pCXmdrLKwANyxyQ92QahALpMm5a8M",
  "key37": "5HMgAygtvMWcqrR95n7Bz9ykeE3NoLWRUpz8WByGPdwkihGgfYk76zDxYrArpa7PgECc4xuuNBkbotK734wCCWJ8",
  "key38": "3iepsdifxQu3QTJC5PSSctjsFNhaKgqJygPps9x9bJqdgmLzpUviMjCCmEb41qxYv23Fw9ADxkQ22odcSCvs1HjK",
  "key39": "wKScjsdjiiJeYGhhpB6PN8urdxJF7KkzpMryxqc313aVAD9Fq8Z46sQXab9RREKJWxzKhcE8Gx364AdFcHYtR55",
  "key40": "4qsNv2ikxuHZ9EQFHqHCpDwY4T3LUjGgZt8G6oh5Q52d9wsDFv8Ndku35pGWb15HL9J6XrseE9avHhQSKfiVGKXs",
  "key41": "5P7ubKayv36pLumiTSq7gsct2cWxY9jXPT2eVqqCKkLcjoPsJia6Zxh6j6r5dCPmPWNFypEQ37x93XV5cTU7LKci",
  "key42": "a1te91Teq9ABru1bLSPwCuQ9KXBBrrSkYCuNhgaBkQd4v4osqtPTH9nF9W8GJ9Svhk8pb4d9661JVpEqNjT5Xrv",
  "key43": "2yhjdRmBfD6Fct5u8rvFtn8DcZCu77QaEtAQM7CaF9xzJT1QHkrryyCd4BjwLyp3TVKhdqC9qhMJvhcYsXyyf7uZ",
  "key44": "5yhTBpZF8n78huFqzF5FBd9bUgurmtzoWfFCv6sSuaTSoPGweQ9LbEvwWQtVHJR4e6hgL7RhJ2Btn44bPt94EarC"
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

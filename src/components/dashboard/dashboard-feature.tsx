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
    "4eeuMoCX6mGa41yk7VkKkxLVYQd77CfTG5HgjY8y8eWF94MKTSu1MThrUx2pMhgr2tcZefm8xj5fbxiRoyyuTvHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttKJzNXHF8VvNXTikGw6oH1D9BuFW3VkarFUDHKC2mDZaZrx4KWYeC2XZnoByDc5zwZ2UJmvug119iCcSRhNjr3",
  "key1": "5H5N99XdCLQTYMmA2ipyKG9x1yyJA9x8joym3sgFhjEUL5uR2UtFHCq6JHBVR3d9WmCAv38XigkxcrQujiMPnfzJ",
  "key2": "53JPFPjX1VWfZDVZnsiEKwAcqGNx9XnNPA8j7KUrU1nZ139xsUPjGhUoD7wC8j6otCsdFyjKt4osAZ3MnGfK8QVk",
  "key3": "5WQEdHUbjBEqAKLcq8rNNCtSsVcrn1AMJKCaHRBNRyWB37qxmTHfxqbJ7BLFbXMEuiy24nskTTXRNV52iQXMViM6",
  "key4": "5qavS9L9hAEaQ3bu5WUFESXmr7uJ5o5LCrASmmEsBrv93Y8Z1tomaYQAVr8P9jbXLVtAqaxMa7GS7ZwNLmhahNxX",
  "key5": "2AANAr5Pru4swtFakgBDev47E7sU1p35HaELxm2YdycKCFRDEhzueoLn3XPwrKwzyMmoSYppzWTGZ5uuqPyS5Qc8",
  "key6": "2Bhts6NjZS6QhGLYdx2UrJbyJK8VH3yAEY3tHQ7kpRcV4gvqhmZayQANkJaH7LpnYmiccfqU8b6k8zLHsiyzM4Qn",
  "key7": "5BeLjapkpGRmpS9rhsohwseVRbk1mQcxCAYJNDobXtLm16Q1zwseeNuvwDSwRZHuJb4caajBTK6Wj5hxGST6pnSJ",
  "key8": "3EcdJtBDkauHKzuwbW4iDTFgUuusdFV7RLRMENAoDkJNuaj87Q4HL6ddFoYE6jnd3JP4oAxPg4kZKyXBTh758djB",
  "key9": "3sLScgcNf1vxw7c61ob5fKEUzUeMYoRm4h8vZQWvzhZL2LakCMHbx2XM5gapkYSK4TsFqwR6LwbcKhSU381nRrv8",
  "key10": "2M465BwMQ9dSjMwYmhBjNdsx7cgvZSKcagBPf2qp5g4TFty74qY9J3n1GLYeRJE2qa67Hh3fuQEDz7KsPgcxomZd",
  "key11": "2gDeuULssAGFh9gRyEmmBkjoUEUihDekFHJn8FJ3fcTbWMJwFm79WafiV5ZDFAZYvwqsfpacAw6xvjgEnyRxcwet",
  "key12": "4Pk4GaZcuSz7K2sNEsAXcMbU1ddVdGCX9M9UcZHBPfX73vepqn6P32SyjoFQUni388kirwWH8Tnc2pJsQxkis5d5",
  "key13": "33EamrEQAKT8bD9ZWuXqwgAwhGaHNEnX3xMY1DbwkSo4i5AyX7xwZX5bZvnZNSs4T3CVAewXw4NFWcWosgkNpDuV",
  "key14": "4chQfFqBabcy9wubwGDFkU1FaCrAZwE9LGzPcC3ApbTyfc81UM9LHgJ6o432TKh8uiSZQQA6tkyiZs9kmcwVNKpB",
  "key15": "4Wv6rkVAyJsiqNH878WNjYW4Pt2SR8kaHUnUatMS2BN2kawxCFbW9UipV9DzWeBFpvE8ypgt1H6oYCb1jfMLC823",
  "key16": "3MtuHHEYF5fRTT8fZxZtKaWgzJQkrgQGuzd5Y452MwZDiAkCoBVrZVBn1FTYGnJnd8eTMuo6zsFLPHkQSAeTbvHH",
  "key17": "4p5f8jwbwsCu2GVVdXrdDCLADz2TBa6CtEqgjxMF6C57Ao6cETTSoR8eDsAwvQHJSgLLN4CLEE2zYTQwcx5qxaC6",
  "key18": "5LtvNBFfqFF96MDsVzfUFYL7kv8HkNSgkrMcjbgKizqc85zP1Ko4BCrtehVLP2T9aQTS63VStpjRP2Z3gm5n4kNg",
  "key19": "2NUrq1JSgdswo9LN5xnVehvW5GdgC8LWzTLuvAGxJ2GSLC7tcii9PVyVuWwjSofPb34n1rDFwRivY3dWsq1ssMd2",
  "key20": "3XrNW2PbZPQtqTEQJ49vXSFYi15d7QvTdXQffd6HUmsbciSzUd1vfwX7DPAUX6poKuuCxwdUnDnDYPqeVwR47tMr",
  "key21": "5FEJKC6Uw7Qccepad6q7CveLEycAx73MpG6xLryvARvPMMeMV4MVVoixg5KHRUEjNRafNbXqfXQJEy8mCQ4WsDSs",
  "key22": "5fg46jgAN2MgNU3sCrkfi4BceWXChn5Vimi4zGybj3yn2VVAv9xGuwGwAuDZvVLk94mrpcskMK6fbZVN16Z5YquW",
  "key23": "5De6VmycXYKDavwserm1vVwLA3dHTBzA6fD4U5B3j3A8TfUogbN88UbopGYAvMdvubgi1wmzv1ZbASKLx3VKm1Et",
  "key24": "2d4QVHaUKevEn36qSNU5sy1S5Ac6vB5Z2oS8gEbuCwiU36EReVxvfwBdLUCko7ENztUDZiXJGKXppEz9a6mEfMrG",
  "key25": "BU4LaApC1WCSw8vpveyvZaKzdnJBa2VRGrb99EeMJguMNbVVegdqMxqdKezpTkcqHd9jz5wYv9DMzJ5xoZ7AuNW",
  "key26": "q2JbXM8xUU3Joe8PaKSk8FKhc91jKmLEHrFk76b26MHN1AD7BQcCQFmg2D5ahiHQBckpAdDXLVxWAJjSUanJMXQ",
  "key27": "ZmnY5y1qXRkRhbrBDjZm9W1qo15Zh7uCtJ1Di8WaCqM2qhVirNYRM31XZzMGgrRYdtoVtJD7X4PKxkVQRikUYJj",
  "key28": "2ixGi8fZB9323NMH7UG4WiEiMhq55RhDQzJjM3ku3daJKc4thv66hnZDg36sBKkcyF5E9AjQvHnXjZgr55CNfkuR",
  "key29": "TsE9gdynNHMD1cQSsZEYMd3UqcAweyMULwfa36F55c1G1seCrkuPypQELhhwRbCug3RXJ9bxdjJCXf1vcqsjy5y",
  "key30": "6597Yri58LkXXmHc9QLQGhvKRM2chEKn3yWJRDn41HpfyJG6AKV6yJeUFT5KTF325o6RzvVE59mqXXk4nujLNJEs",
  "key31": "2UWintpja1vSGNFWnqCj9n4AZRs8cuMhgsKFSwqzSNRfrTpUmq1XQXL1P5keHsbwJyhm7aAPeP8tfNqYWVpxoGVk",
  "key32": "28PJKUMnX2R12pToyEW6YzaBeQndAkCn6jksJrgvbiTeRkr72Stg5Cdawc1uBhyTfDNYctekUYMGv8jVRqhSkDjW",
  "key33": "2KZe23E3GmpfA9CzhKa1qdJQKfUaRV8BYTeDi6tnABHAKFM1KpS66AygpP6KhVhSXWVquv5FvDPEGYMuMMRLTF2y",
  "key34": "3kKnFXmAHCZdwpVpARtwWHnhG2Qj4cX8gYDsfu7DQ1kHqARudUbLeQBzyKfx51av9t96TJy271sjyb1iJo8ofosC",
  "key35": "5rHWvTdqKNrr4DMu6TKxNd219WMh7qt8oQu7th3wkhPDDbbEEytF8bWCKXyqtM7CyLqB6PrHsEMZN3TktfpZDZPC",
  "key36": "RqrtwkVqnEF16YemsZX1Geqs2PY39eXSefDHgoM4UdaJ11bxwJrLCC34PdhB578CvSzwess8XUM5DaW4VJZoAxU",
  "key37": "SVHYvJvEfDvVyPQa7Af7LMDTWQShitt2D8eC5wipYmP2qp54VqohRsfW1pwFSao1yh7KpsSRacZX9aJbG7KPeek",
  "key38": "26h8FCphBVPYSqhzaEBoP7L3ia9GVZmRiAgiZF2RatxGTmSTycrxLre76DE2Qfg4m8u6ZhmgTKH2BJNzokw3Be5G",
  "key39": "5vkvLbZX8QCeC3owm9qWdUyFoxK7jmGk7S5LczSpVHEGfGB6rxRsS5G8fcBctwrUjBTEL1A1DFL3MXYbJYDiZXnd",
  "key40": "5zJtbdU9r8uCf8AwjsFuAbBv3CBXywC8qm2SRQ27Zd8n5aYkAD7bycP636vqqNBhYEteC7SSPn8Hd9w43zV2ShN4",
  "key41": "TnP52KjMSqThmwAnfPM4sGbHWGphnaqx3m55ktePDhoWb2dDBRPPK74uservRnaCjrk8mTkVtHZDJLbnZHKawwN",
  "key42": "a195Uv5RhjqUdHQmTsRa5XDyzRnKj7zCptBELXmVQdwWNCNLprXSUZRbEyk3PkbagDRjG4rBqfAAaAjf9ywR3f6"
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

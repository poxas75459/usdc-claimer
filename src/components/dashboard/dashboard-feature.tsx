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
    "WL65weGF5DXG2u8tQtM7zp5bNraudT7XGLwwSc2Up33kmrsnojj1PbLwuqKkzdb99ezX9GDFjAMy52XGeUotVr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCbrmfnM9BLNyo94T4ifPQSoPR7z4dHtftAjnyxtYQy7Y3Ki7wBQVXFaoNVj3SUAveZFutznHTfn1i39PopVkfm",
  "key1": "5Y5HXx736GRWmMLtGUFp1qjWSXgZ7zusyTx9nyhM7Wfs8ECvGwBiA3dVG8bCYD4Hw46BpGMptg69gx1tou6NnxSn",
  "key2": "2n3D7RvSHZRgagtcABMvSJUgJdoJmVymZbUtmk7HZXQjeGE2k2LCpw5UQNKNCRC8beKtodKLXRFUM5FqVeSDYn4p",
  "key3": "26VU9VWGJxmTz8tytdYnrwSiyDF2h95zyNSUDRPGJXfXXDmutGgk7twVnkfvbXqTb5bAWPsePiUiYrbaa5JRURqe",
  "key4": "2wPEUSxQ1L87h2oHvyUjBkr4NTGMSd5xxqwMmHCdxhBd3NDmUZ8FQxgFJwGNwaAEYDsR1s8197JfPh1pKpde8he5",
  "key5": "2nVu4Tc2KwDFRZAFaXc41ZPPa8jRJNCwPrPRbTHP3NtFSYQybKnoz4hGSGHFdbVQkHvq2FiNrCwyXL3irKnf9vTT",
  "key6": "5cLP81dgnvb9x4n6nf81PXrAjAw3YC2jAmNnf8LSv93NTzdo6VG3BmEsxNiw8WeZxKcjMUwUNeBm4uF7C4xvQ68h",
  "key7": "45Rg7LHup3jPVEBMnFrkqg7iuWykskvvkxqW3mBrcF4dRazvhkKxdzRwh9DVTZoa9KSTtbCR6QMxbjMUPiy7tRwE",
  "key8": "CyyxnYw5ZeJQcQ5fmV8ViL79eXYwUGgydvpQJ5LN3Yzf5LBUA2dVGNYvaz2ZQQVRzMt7XShD9vhVwytqH9CdsMr",
  "key9": "5i7MSQyxGPFpsWUmhXdKTBudRPFGhw9MHXmcCe469MdkEYwNy7LQhDiw2TK36Gu1Trq5Y6Di2qDLVYE3VLQwfQdh",
  "key10": "5uTNdiuSa5Pf3HdQ2nuMD2Yb56XjSQDXhnBgFvwKBv4df8jT64rujMc1q4DKKdLYnG4uPWUoqmRxnY2kdtGvoat6",
  "key11": "5kJKm1kiwPWCiWMrFbVhynCh8ZEZDe2zvWwfzBKmBEHdfuLiNeDcxfFTnYwV1BpqXoMgVd4hMBp1aXfYxZJNj1QZ",
  "key12": "2dU7Pd4L2ogj8mCdAEWzxUmp3yU794RW68qUgA2vDJy8yM6y4bsMSaBp3jaioFrbD5gtaFpEixvsBGhcGC1W4p2R",
  "key13": "4mPMpCLcnpSmtzm6sAsW6f3xfTt5TpFXBWPvotmyx8sWbiAaPMHtR25JmmMQq35jckbUQ4bYhTzFzs7pTP71JSot",
  "key14": "2t8TzeKJDyCMxnYVkAybyQpiytvzBbFcD96kxy7VzmSzmY5MJ3LbQPtZyU7vaXuLkNSziuVV76AeUJCbaSexAjWK",
  "key15": "39y1N2YpoSyqWZxDncefyTLKkvDkGppK1VZ1FwCPmEpjqzWPbqAY37Jtyzq2HSRkNHDKNcwSrBtNj7zyvU4vdb5y",
  "key16": "46V874KdeUiTi9z2Mt4mHsKM18xk5aLyXgs8mKPss3WLHr31PNSVmCMYpgVwrTtcoMvteAAyGWHqySGYG8LNsRN3",
  "key17": "32KNLHQbXTRw6UkBDuJaHQdNdPf41N23MF6RH4Vd6LMDnCqspyi3SRdEy1BhPnEx9CyrUGT2JCxLJ2LSYdbdiUeL",
  "key18": "3Z3CDL7fTmDUUbcsixBGataTn1QP75XKg1ANbc8pozKqnJ9gYMMMCLV5uesjhMiDZ8hiJYrag8bjS3TWxZRvdqfH",
  "key19": "376WRJ8AfZaNbb6fUbiuYSQ5vZNGHE27M4ZEGDYjrdtHat7tZqZ65niU4EVVQ7ogFe83LDMQpM6TAQiHJyyt26zk",
  "key20": "Jut6Pyb38W2nv2XLttd3zyQyzVv3P5csAmmfyPmMRnueu87hzLgB8Hiycd7ftoiydox2js6DdNEtAcDHsmtC7S6",
  "key21": "3waBw2y4NSz4P8gve9U9pfjX3Z96tLKurnRAkA6kaJsh53w7aPZVrDZZmGjNfzvWy2tVmboZreWj1oAAu4z8Th1h",
  "key22": "58WTRnuqshcPKX8fqFTc54CartDwwWnGSYnfFw7D1VJrduGSxer3AngEbuL6PUVTJrTM4ykdP6UUcuiU8djsArTs",
  "key23": "5xykZcgJq4nK1Yr5MT6iZqbJ6S9WYFLqrwrhgAmuc1tNShrFPnfJN4kQbCyPSyfyn6VNgXagidgWTEK32zoVG2Nr",
  "key24": "3Y8ADWHGQ9Nrxih2rdsAv2b9moBM1Mg5FmUpyUVydeesY2Va5RCmMu72qbeBDbagxH2h6UR7sYFBj2iKdsN7phHF",
  "key25": "4a8hUH76BfmrCYdskya8mF8eVKtHnGu86u1va5WEBrUQErhfEEH9uWfVreNGQAgDGiQKdmHZtWLxYhApbKJRrCos",
  "key26": "kxeQka4R5t59z76qfGz91iYeh6c7ZQRPBY67pGvzZDCZtqPfoF7zrva1a2gnF5sodVaJr6tzFrSJkbMJw4HwsQA",
  "key27": "4e1rWUCEWTBz7cCvVeh6LwammCQoMtcG9G7nqw5RJVxuA2jc3VGMVp1XiAuGqvwyr6k7YJLSQDRw662pqpeeb8uR",
  "key28": "aCaA4KPV7ErAg8FXTPdoAQJXEgB2Z3uoS8rJ3RCQsDgv73KEPLEtuK1ZYfMY1bQ9HTR1cpMUtfTCnrxizFzTyed",
  "key29": "2jy5isE2D8SNp9vvZfgJiYQkGwyCRB5JNReNW3dvjk2ei9prtKctwgaWvxbUvLAX8pzvaFpu2P8GjRcXyaQVYvSL",
  "key30": "242ALzKBbL32GAYSKe2tB33E1QaWpaaNkwFGtL8yghAe6nzRy3o4QZSeGwK1adUkGvTMwxjHUqfP5Hfwt2rhgxkh",
  "key31": "2jbV4NznFHJ4gD9WGHGxVLeKKHwyKhotXCJ9nkfVtXebByNBuWkJcmPMyktoEPzMVms28vpYgduRUyZZyw5uR5rC"
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

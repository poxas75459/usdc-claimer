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
    "4bXsrv4vYg5wQ9CMhMSLtb5iZiVbhtZJ7Fbu8LUQZX8vcTQtne1acDYsiH23CP6366BvbAhRNsTbpmzP2aMPVaaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGSKoNteFqeTtGCarJJQs55a8uUBWkTWsNQqU13ySoHeszK1wmbyRvrMttLLbCF9ZCL2XnrPYQCQr5yV3w2cxDX",
  "key1": "3BiVzUqqrWHB94zds5tsxKV8joki4615TmRoGEQAdyBTtwQCzb91dPh7ui2HKNrJj2LvVcn112xJMhTpjPJoR4mt",
  "key2": "2Z1V7dUgE8SCswGHfVixNKKpBoUr41riWaJRGfivAozkA7oiPjfui21dfNXrjDcJRnR7HNpFmVBY5ceoKto9QLdw",
  "key3": "4PEhFjg98Y8NbcnX9XWbWV7dgPC298GHaUj4rmX1SjrNUkwn6nnSdEHDRFZwCPMiD1uiLt8jJsbamWc9nNNk1p1P",
  "key4": "b7jkkQJitVatqJPyFRsGrL9TVC42FwNKTxbeeYWpU4E4v5vjikFNuK8xzGHw46CdCdDoAuubLsyRDhMAfqmF7Ht",
  "key5": "3JPB1jXRYZx54KSCNjmpD59siFpCuMMqhsLgTuqWtoaCC9ShTQ4Bh73zqyejRKfGAnVSFAJeMvzosMbZyBnWE57e",
  "key6": "37e3x2VdbbYgSL4ooZCS83Kioj8wW8BY3RTz8pzptRWYvYs1U8SFxvuKcZNZbMSuFpMzsQerQvdD84aXn8QcNaaq",
  "key7": "sEQDDsQy4WsbjqsAR9CV3SwAXVqZ7DUetcPnqXpFk7XBmEd5rv2WRA2F6JbPMHwM6SW9cr8bUJheK1KHdDSzNP1",
  "key8": "dnaEMBXuHciMju8vYBmrtXsQ4jJ374X4RB3HLJFvD4p136RXVcahQUAhbX6mWUznzQiFPC8s3qzmSvvLAvUCdPG",
  "key9": "RKT8swnaWwJGpA2PdEPGNGz9W9xCLf78NBszKt1kxCF8e3pN11e1YJn7rvtYzXPXYNZsPD4ZnBmotLUqeV9gNTJ",
  "key10": "33Y66Pmh6fzcn76JWpmTnwHUhowa1JbRUaNHkQrwPFBRE8fF2BcqzXmKw2uVWvfKhcYQ2AoWdVAShtMtzX6QtJLs",
  "key11": "34UdJTdWTTSm6p1hbiWVmh1dcZ1pcfpAmvcFVf1NibW61saG5XSmpd5AvsE3KZVqszkAYrrivGNCEEkVLaqSGYfP",
  "key12": "4ATx8Mii1QzVbkBkM73C3xorwRKQAZ3jVSam29er4q6iqwmd3qJZLBaZq65ARSYs8gwRsnfaCTzoZDtuB1EfXUwG",
  "key13": "4cv2arsx7xiqhGqrxdzvAapJ8Xp7iCFmLRKRvho5S68ZJW3zBw58YYDZcqoMoHkdJ9KDGYNHgZhhk5Yx3v1BDZQ8",
  "key14": "3RWHy2CDZVWkkk8Qm3xTHjiZkPiq363xCyhFtH6qv2zhNHPzNFD4mzvJJH3qf6SNsnvjNZdFj5ChDPt4QEyxBH4z",
  "key15": "5HcYnqkhtVWsGmh3FZDCqa2WGVVnAw7Q2UxgLLFq5mfEYfMNossogjb2i2gLk1UTNxGKTfvWdHaYzfuEMjxvcdXg",
  "key16": "4LWTSHDT8umbBqh7YJBmtxQhMV2KCQJmSw87DmgsMGLbNzUM23rCE8iRb2etcQ3dWwTskoUZgcBhTDiwbWL8QDXA",
  "key17": "5HpThUchmBxWna2et2fVFamyfSeZJEwL5Lk2acLpLzPaLyVqzZe9G6QhyvCd9TS4jJaRh9isUy76r8LJUaJpB4g4",
  "key18": "55t5X9XcEniGBFqvcRcz7dtj6m9U5nyYkxaXJ9p87aC25uH2t8kzHm4HbsEbRhP3XTZJwczXXB4LFb6LnexNNZhq",
  "key19": "3bTUWFhTeKYSGtZmouwsxyCvh9GZhucbXdkbpcMxgSTcHHmh82dZiBhxyVnf8ALj73DDsrXNrRazRFxqKEoW6DLe",
  "key20": "2PvUhgYj58AuxTPnE4VLRFiwcdfDon2i8yShXGzUUm2CQchxZAV5yXj1iN7iLxE8rwmDep9rD2c7sZrE74wqwKrQ",
  "key21": "5juvVhsWVK1mpRXTWopJTnAZh3T6MufZzCkLFzTZn4FSFBpmYwcyvmjWFGttzgi8Z7ayW4QLb7dP7c97ojrwPuJa",
  "key22": "2iYc3BYiCnfCUQbd7oz9tiD7i5crg6YYmSDvVBDUP7KxVaapdHCpqTwZP4jqHrPxRKoJYQZYaDg5bmzRQnbTWvSQ",
  "key23": "66E6rCcgvoL3KkyYm865N1cQyDBg3RNT44fQPQ5ofq8hNtUppdZ1nHRdKqUNof55zZVCJdnVmRiQEgvUSUpfD3yU",
  "key24": "EYHF6eF7LJSXP79s76eUkzBhpBd3k3fxpQM3jpBYqV7BFmEcX5ux1938f9bKQo3sGj5dezyEEAGSVpZcMdWnq24",
  "key25": "25FULa4gXEsy4FqnJ9jUyy8QCFZdURRQweyCVbKTTrssfnWKoB2v59URwfak6ZxWEJAdNZZ7mMsHv3guat3MMrup",
  "key26": "5YoFYj4WLgXvUD3wUMCfKAJY9S2sT7eMnbYZWAVHcRYBxd63kmkNfw7PLP1KGGpoqXoWqPnfnp8TVcAiMWYk1GaP",
  "key27": "39dqFx4aJLZ5jHWuUFTdMPmu4bcK1qo3Cg1DdLAAeDcvbju9YEAnyMBjQSJicuohqnj2KMZBHnXWK1f7oNPS2qew",
  "key28": "3XUMj1H32mpi8FhH2rjN4kJZSZQUnVZyw4w5gPi2g9vfFjVKP55q38raQaHnqXUeBgiHWdFtPYACcstbMbdzBfPb",
  "key29": "3jBaPujNQETXhjJEgXhnn2NR1SWuisH59H5XeRWbw12TMmjbFAm6R1XVXF455JjYxQsBCD5vEAsK5vD1cggB9sUZ",
  "key30": "4amoE43KRdsGptja144EKTACh6zH7ST3cdiyUQNQsP7QTNwB4aTA1b43419esAoQ4MzrbyASwuUZnzUBwNcGeueP",
  "key31": "46h1oCXQrPVbxiojmbobKe2hPbHTkQR99wXDsMtaB9riTaF7mZq5fNMTMX76t8Ltt3fv9F2HyZCTGeec5XzatMvS",
  "key32": "33RX4bdE7Jap3Ykt1nNzSNYjbM9A6fdr21jkmgwbYZGMaFdUisfwykY8dVhtedbUGXKfpmJSDAHYV8X2pyPyiN2X",
  "key33": "5qPeDenpQGg7Xq42V1UUTjQGxWiq8KKqj9Ww4qtuDxkZwuPMNEVRrhgj7aQhQstoAr5ZToyj4Gffo9GZG9oDs4U2",
  "key34": "5ZMiXrm4mYcfphZdEtKNJWWvuVwS3aX47n4Ct6Z9PrGyNZQDDyq6vpSvKnMhno1aW1FQpwKrm4bq3SeW1uc54Qa",
  "key35": "5jYkv7SFVtHs45R3RwLatZ5WW3JEMC2WjS5VDKQ28ve2x8U69ttELc5AA3L7G7SvgvtZ5JCF2vfjt2qxqzuNcM4y",
  "key36": "2fbXRFTdc5rHgy7oy83axHC5f48yhmJYfcsReFGRCTb66Ptjwmy6nyG8Y8Xf73vTgEAxEf9miWi2YkmmAWfQFfwV",
  "key37": "38sFUese2FJ4K3qCqjuXkC7Lmj9Dn2KWnRbzwhLKShuSU98twwTUve2aswCu5DuJ8gKYLPPUVdY3dnMegeVabHD4",
  "key38": "U8kXAwhk5byJjfaDc1eaJCCceGET53g4f2sg6QymcoWNdioLkiSL3Gd7KuJcJvUPT35ZeRRjPJtPSYmYMPJ3ZwU",
  "key39": "iwrQN71BXF3AELU5hLtAezFvVi7MfqM7CyPFH29oYp2dfJvyS9f4SZn7oTQPzstA5tSxxZZBZtoAeYghmxVZCED"
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

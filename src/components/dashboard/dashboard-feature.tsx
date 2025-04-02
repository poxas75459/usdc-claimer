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
    "3Z87KcFHAerNfQkELEMhU3iixuev9PP98kkEgEHDTgw63xJGV23Mm7mJ7Xge2rf8bsFhaTGNRcLU5XjkCp1FSaXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yx3rJ1P3UYBPesZBG4KLWwfjmCo8Sshjd4VyeW4E7UwupkvqVdZTg9aovGJNxvJP4kLUk4ULhijQeQbygRNPC9K",
  "key1": "4NjmhwriRx1TfyNp8WvJEtZ7kGoL1G2VpaLKSeFqrJDtKPJwpMZfbRhCLPbuSLUrpbyV1o2ZRxsLHaRDnuaKggYV",
  "key2": "3rNG8aaCzQSpnqA1wv6jKo2g4cME6rSUwVe4stsyGuQHgFSVf5XBBBbj85jYb1iWxxWgpavYGWqcgT4ePwM9zwwX",
  "key3": "5Evdq7bUUhEC92H8DopCNnR2SJarE8JfsfyTHMkUi3gBaSsMD58TAWQ286yjMKxH2ZcgtssDhkd1sj79Rdm6UHXP",
  "key4": "5Rbx8pe98QL2gjRaqeaAYeRDCZCocWReLfrtj23qZaepEixcv1GDYhrLfPikBEath2RCZCBEBs7wtjbvNTMc6Jrt",
  "key5": "2tGT4GyyMTBhUztgMVioXX9Ckc9UG9ubpxv442rcjhaBa4Q2B9UGYabPyBQhx6vjAiEGgDwccUg4NRbDfdmRkd6v",
  "key6": "3PcYqx5FAoHh1oyNprrXJMK5ZqSesUwvKbu1tKkJ9XuiYdVK19CbXpC4iM4sLSQ9uxz39Zk2GMmYxkrCk9HuKcEM",
  "key7": "4Ayz4sodX1c4kosNtanxR5dBhEu7EEFmuw9b48ANybshwswa13Pb4C2RARKcnSTgKRHFkESfp4JEJUztApjrZmXF",
  "key8": "2VuKBZGMotAHFyUdJUwyAAS4hdCnfDPoCFTmMFUinyuBNjxkmt5WHE5Nb7TGtgNTViuQ9yWhSkp6HhfAhyL2E9Ng",
  "key9": "3b6i98sJHgDp1JKXqgU24rp2WbxiekUzFdu5giqM9Yfr5JRnQhNk57xj8Uabz4paQPq4y6nxqndinANQS3cqmgsG",
  "key10": "2ykLDjavbsDbThvhS1Ri9FGYNS2Qguj9nhKKNkmcP3mFRoYao1AV8jnZbk8JC7ah3c7dYkVVektG3iCXRLqVXtH9",
  "key11": "4hzPyLogHAvSXNGu8PMyo1nivLmFBRr5iNFaHznJumZTxKSy4MpfZkMXDGJefHdMGGof94kk9yrn7RyzkU4KBpRY",
  "key12": "3HH8GpFyDfgqA6ZPJNCKDiuaSNbtDW4DjxprqroWhmhy7gGgKEjTbuUwYqMGi9ugCAvQPbTwGjeKxhNbZycgKPt2",
  "key13": "4q526WjrADSLA1GjnKd163Z3djtL12c1Hx9gG6EJBThhcGzbpdEf4xVp7Du2DGCj9LTzoPQLCo4mwXt4wLnwqXMP",
  "key14": "NqnNULwG13DSyNKz3TvmPXFcprttSBze4WpAdRm17SaBwMssDyb9fQMv2BwApajBUYRL6tQBgrYkBkpk9uhv7Ec",
  "key15": "3cD5QsjtTJaPiBsHRg7XbkPJfSVWTzbgYmkvtNLDEg3URcarSLBJW2c8Z79G6vtQhWvWbXSVK7rx3LCPtCj7aeqm",
  "key16": "4Txgh9dBTJhw8LMBkHAVCMpjg7fJZgLyMitfG1m76iZgLKBGPmsZvC9Hm23mRBxnqeWdJZwywXMeP1dAhRponbhM",
  "key17": "VcDdnvKujkYNggUyct7Nrgmcsmb6dT3TisJo3bcfkg1FsAoKzAjKocMQrmodk6tSijeH9hj25XqHntz5jWEXzgN",
  "key18": "5uUrtS1gWcvtvzkX2firwKkbTLp3unsuWCPp5kqJ5VxcngyBxZEdnsyhuVaEe8ifFjtxp93Tj1oqCJorMsmiG21G",
  "key19": "5NBTw7JB2kWPxs68CmuZk4c3yLwh71EvUYkxhYaMesj97Y8bqQshmDNtLxSGg8pDMoTDbYnKfbGJBtiVwj6ter5K",
  "key20": "4jEdv8wdzZ2BV7wTWUrxSbzZ2ifVjEhKCJX7D69Gvd4GSiBcgScEQ5qUAbRRzjsiA9HnrQZJ5NFP5T4ezb1UPSVt",
  "key21": "4NxCNhyWF5MuGFm6YrKFbJ9R8LQiQCJWxy2GQjTrCCsjtKRTJzcVKZ2yL43vrFvWG28iAQR4MCeXJUSyCaCffgwz",
  "key22": "obqBLgLqbK4SYUxt9KRZTfbg2BoNnhXpwufJNsCmUSKZa134NY77fE5SdU6ZcqX8UTQWSHm4ES1qhxyrDvbhhSB",
  "key23": "bVv3ADhk9b4Ci8VDpsA6imYZouFtZwWdvV67eNf7tCbZN4rMDe2v1DtVAPoMb75RhSviWjEmoTT7ARY7e2e6njC",
  "key24": "44tYi942eZKnKjbHZk3ZgaQhTzy17QS7LJGVs3xa8iAgCctAB45cm9P4uPTncd1Hv4tLZhkbvToPSTGBH1D1Estn",
  "key25": "1raFn1VsJP232rdEhRF5NA5qoezC3mdPmu17kdLQEiUAbe2fULynr9qmmqZwTMZLjtRH831TeCYKbTxFM7QxySB",
  "key26": "MXhnPNLZ5CUmyof4crsAn2ucGu8goqHFzzPX5QmD4QejJre2Fei9BRPB1GbYFjbfUfX85Lrypgp2T4Ud9NxD6k2",
  "key27": "4jszCe7bx6366y8j326JaqNebX3J3UA1JazvLCZAdDKdcgqB5bm7YjpocLEm2CnUxNByS9twZTKKRJLcNMSciSEj",
  "key28": "KBAn2XyMq8fjD31JxraJzop6KyiouRBA47Fr2vQ1GYtD1dmQcBf1G4PpqcjWejQMJPy5qpFTbk21mzZwaqSC8fU",
  "key29": "4Uq9HW9smLztBw4S4ii4iKaYZbPhXyB7c4Gd3UBAPZnH4mjNifiWrgDahGudyd3yKAQcJrGB2MrsQFh1HbEfHLxn",
  "key30": "66jZwprp8PpXvwQnHhm9FHpWFoTwp3DQ96G3fQxrArsgraCBTb99t7veNK4RCEdC1qYxp5QY62CxhCr8LbtpJKCo",
  "key31": "i8dj7FQq7k5P4rX7U825YVikhHUexg8n6KwVvn29oHDcXWWbqLgfh8fyHTP8jf2M3hzLWeuYwk7N61hBytJTpDx",
  "key32": "5TM7KWK8gcsmA1JyY7go9TuDrNrfWwtWZxK5RpBz2A75xWe6QECRv7Jqks2jY9TxHgPXYozENsqr7uM2BuGxmvQR",
  "key33": "2HXMMTHvnir8Fr4ADd9FZbShNt4BpEk5HyvvrbS1Kp6o4pxgF6EHVES7J8AMCmNLAPLeS2XZBGepauyTqA9RXc6r",
  "key34": "uGpVz3ABZSs8kHUPa9JUfNAEa1avdSizMTNG9guZ982Y6tiXMnrAbPvXANMcMPy3YKoHuXrJQ8RmbaSC45p46yf",
  "key35": "2dba4V2noH5JrRAJoKTExLY8oy5AhEbx1Z2R8hLMGzwmzeGUgJkALvuHMZQ1aq93q3pvi4ek2F4aZMqbqYsvUAaA",
  "key36": "63vbCwtZsbTrQDNKB4bmyu8w5uQ944CnAyku7M567EE63Aad7jZtStjmRgCVtJPV4bAJxkrbcd3V7RajuUJsUX8r",
  "key37": "3jPxKVxbj4EV9kCQNJ3nGpZJVvMDjfS1ctJJzWPfFUynDU4NGcWubnafYgBydw6iM7ezpd7MEvsQFJpopab71Ljr",
  "key38": "2qcejdcyMLzAvup5VxsaaW7bJknmdqC2uapUtkHDNcAK1SKv1nPrkqKmH5qFgw3iZFvrrVjtBmx4CK6U3rk1tNpz",
  "key39": "R4CeJtMg2J3dfzj6zi6WJ77Y9AsLXUJZGRQkBNXdENhMvARN2sHYQ7xV4GeRbTTCNpHccWKSfuxSZWqdngVQpvU",
  "key40": "5KggTBcjzBfPL6gyQw8c3RKxPKVZYvYWHRgbfLvkk5XS3gveDWtwGc4BEGhF1KVoLobhriupbofvDpTTzHSo24EU"
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

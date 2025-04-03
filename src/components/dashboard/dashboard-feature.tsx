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
    "5vydZsk8Cx3U2gbN4RcmiLE7gLgokNvL3PgrvmvrUEpT6ecjRCBsBLditUQwQQ7pHUj3hFTdNztn3XuVUMwnztio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JAMzsNkEnw4XTLzcMkTMAWjmBKkD5W4QhyC8Ky99ckSzJW8iKv9V5KLQcWzCcHaXCDteTivsqQwLinVUy8fDY9",
  "key1": "5LpKFLtTxb1sDGw3Ukga15WwGD5nAHA4KUB647b72YDDKCDKFV7QRHdJC65kDyEsNvXcNQHBWnpZTsqQVPMiKiRi",
  "key2": "3rCyLx1JL6wvpqmxxtPi3SFArMspCornFkbedzvAKNW7vFyVj32jmczJjQimNqjp9jpjAB9M6r3mxeVzUP6QF5Kp",
  "key3": "qyg5SobMAiYw8NjqLCai2TU7ggdoxadkEEwCoNCUrndY22gP2Rf3repXKgsNYiD7NXNC9m3LhiU2Cj8CWTGgimv",
  "key4": "5GaW5LegY6cH5wvXCfzqQ29pQ5TW8UazKRaXhocgoiSBsTCTnWMzdy6gCXVkMSPG4CV2QTfQP2Jk5KJUqqMBRRpR",
  "key5": "2AYJ49CHcrAPZZnmQ51rfne1bDqBiSLX7xRitYrWkUpM9CdZEED76kq6QJCZh5s4SnVDdVn3QAMKcz43Tsh6Dv8e",
  "key6": "a5cQ7D7ERN36NhURhgWEKmZsspBsnpBUnzJDkePZfoTE9EJvPHXNq8HnGrwyvXxgD8i6Feo1A28TrSZnE35fEGZ",
  "key7": "5EzoXVfYnbfybe4K3kAsnD1bXLAiert3EDufj1BkYBUZ7Yk135PJTA8EFRVLuEGtF8pLHzKxfexVvWxuhtx2pbw1",
  "key8": "4xDN2u5TY7zgkLmc9uYm8vcVMWmsScfs5LWE9bZvCEYyDPuXF1XWWzmpvLGDvxfPFVwB6mDwVkRGqcadTQLTfJqA",
  "key9": "LJmSmZTPRyf7VWBrjGhFrHTccWiZfZqa55PX81DkUd2JATMn9sxRwgECcviX4pgTUwzHGitUeDqaWSjSQXc6xqU",
  "key10": "b4s8j7QGnB9fQUSQzkyRQ7yXVK1xKuj86cGTYBoag8mJaRDbrx7rzcSkztWGvDmkaXEDzv3iwyoPtkoA8ZoPiT4",
  "key11": "2nFZVc4sVygs7pp8W4gSEhChRGnU6FzfG6RVnPPTtbvsRgEtYudXsYY3wyNWpRsUoMeGZowxMCXNUmELdkbwd4k3",
  "key12": "4NbBSNMW4kAnuohe3kDqm1UWZjdnW9rcwxvKaUMArTUV1hFXweiKDSZXkVwDhmHJCtmp72bHFFn8Ci8T5NJSAdGg",
  "key13": "56enmS7JqiN46DWvQuhkoT8pnBXW9hp6Zi8aHAxhUfyQs8AvPxJfNNzHugw2EqgYkJSBJqD76tiSN8j7sPEVneEH",
  "key14": "5s5mYFk7uk7dfDovLaZZgGdUjur7yu2jdENEMiWVEa31xSWEkGri5TGi2WQNMvrHHNaQZDjyJnwkpBTSjQeHbQUJ",
  "key15": "5jXLw9DbzaR7rrevgXZRDDYvQXwoP7kYWMVqFuJduTDpYtbakQLst8NpG4DHc3VWZJZd57CtkVTB34UFMnj8NMvY",
  "key16": "GL9A2NvgAJxz5rSgjndmbnzJkdj46HHo86kxjgJQveuZKfUd1qYFHETmQ7GDGMYSpzxpX2rS4LNMKU1g7iqBnNU",
  "key17": "5n56xhHSh1qhsayQYBJeJoNyxsqVJtCEAAxgQ2QfgePhirKxxDetAuWmfwuAoUsG78WqmzNBspESovJpJ2AuTbF1",
  "key18": "5hFvpeEfe1ed5bPyRwRJsVLPxzXs4K1ye8G7z7Fd6RqM5M1coYhmvNKjZdaPpqE9PdcZsso73neuF3CoYDnFNKr",
  "key19": "3LHha3hhjL53zgJT9Zji9fky9GXNXSocY14Aw7MwChemvbwTVnXneHh45tYqow5sKa4nsFaCfAZ2aQ8uvyXq5bwF",
  "key20": "3CnEeQPYTPLKhuAA9Vz3UfKNCkPpeiNDTdqDj9ME57zSV5bxaYTN9DEsJD1pTzaXtaMFq4WnUza8ZbKbi6bpSgQw",
  "key21": "5SNfpzZiMf9pkGnGFRwg9NkXvCepxpNJLoMKU4NqrgLpjKurvsywWFM5enF8wJcUo77zHrJojCX16Er11f1qkkQk",
  "key22": "2o2vu87ziE4otRuCV47qyBPe12Cas7Pyx5HQ99ojYotMDfAcai9KKWiXG9YMWaURDsBKcysqjmJXyFdXJbe7VAF4",
  "key23": "36Kq6gVXrWsLYCaBnEHNG1iHAtKD51zj3NksyLJJj4nKm3MAEz1GR86zaDUCVyDEmc9ySNHVh4TCEmL6WFFB4xyw",
  "key24": "3GXMA11C52jDWjTZmu8Dsa6kaC2yiQ35KZm5og1u94P5WyD5oMKGPT1EXPtQNJVetj2D25jZkPubU6FJA116gpXT",
  "key25": "5pQxVkw4cxjNwXW3DFLiwKAm6uXhTQUjfMa4ukS7qvQawzLv3Qgw3Mc3RmLCmBvr5tboiEzZugeQ8YqWs5BBCcmG",
  "key26": "4XxeqyGKeyuQzPPiE5VhN72DxJ35knhkXNNnSbyvq7pcqRaGdipC6WviPJp9Wq8cw44RtfEbu6A2QUxwgYY6MKPr",
  "key27": "36Datk726QTg3dicw2jA6E5BiVDJWP8F1GpJKCjWpcpjGxa5jUPNx2hLYPk5QgBbeu9nTUaY2vMATNDrEmoyessE",
  "key28": "2HRNVaDUY1kBiWtAfBDaDfHUxRawAR1vGM1u7fdeoKU6MiUNS1DbzzyPZKtp6yjFhWNTn5NJs6dpn7qDwTbQgWCx",
  "key29": "4EX6LJzCxa34pbUP7DR1t9iZALQ2aFx28zCfcfN1TftDuWw71C3buRB8igQk6Jfs8GAy4tVQGpNaSka9D6b82ygT",
  "key30": "2CNcURxaPUQA4c6D2ChuqYjV3KeYwQ9bdcFryZG8V2NSHEpMC87XpBAQbVrFMFRTwekgiZJZfHQ68863VSgzt4zk",
  "key31": "2AkPDHMFNZyGdMmFLWt8g2TQzDAJUuKVDTRtSgTyxKd8qqyqP348qgyEUvy3qX3UJDcVC7PrqvYvPvLdN6vBzn9b",
  "key32": "63J5LGK7VmxJcFYM4PAYWbPv9UK9XBLkCjiqL3HG5V61UfjNJhgrsavnQskiXYPPzxCNvNEfqKT73JhKvrd6RfAZ",
  "key33": "39XTb8LDPanm5cZsVjrDqzcJrJASMzM8fYEaLUCQcSV5UrodWVE6CxoQkwG13Dy1RdjDL2ZHZFr118CtaZMxMkgW",
  "key34": "64EYgKDXnrW41sADbYBow914bvGvDWCc8qrwpA5KH5P5hmQMpAdkVXMhNp4RjusQGEcDSEDLyx1aBFsXSLvE4WPN",
  "key35": "4y1iiqTQqq1ib1q7KKJoFg51HUTTsHym5vnGhnGKSiZDntNeGqzqUicqnJA4ocoec1GHuao2zRxPZx4wd626ZAtf",
  "key36": "4SQpULondKGPcVxo17DAG1P25HCMN8rbVddsBt166LP19L2Wh5PNj62jba4wPQREbWq3vAR7ssDmBo5UjAkJi6NY",
  "key37": "2B8nKHUtEei5mPFXRvYaoYpeBCf3BRALjtaTJCEmj2yfEbkPw54ruxCwR6fhux3ko16tS2qhH8M7zK1JEABb25uM"
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

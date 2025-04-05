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
    "5PG75UftRdXXi14UD6QZXfGQBNo9HPZirhB3ME1YudhM8HKVrPnVDyCVk4RVZo65Eu2sVNJE3k2sBuKM7yZ1sNLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M88ZE9pwSe1uJgYbbH6bZzH5zghgwVxMvjRBLSHZJXNrKfGtnEv9sB3DGmFUfYR6LxEXExZmAk6ftipFS3FrTh",
  "key1": "5QRnFXBitFFXYDBNSemyB6hKenA347rkS6sQbnxMhutwf2oCDDDiJMUYNCtCKmUswwhY3jyBBsFgRdQ8x7L71QjW",
  "key2": "43Z3BNNeamYjhtT6T4jvd4SzMzEbW2LsmNR1FqAKMCrcj1naRD7va3HYsUmqF599ykMxXJ2U3xfw31HZ22aBkNPj",
  "key3": "3wkRozu7NYviQ5TEHY2Tx8zM9g1HAYJ3tqaveoyTYEhvV17HYoyjohoA7LcUYkkdBq3Qn8WUQzH7jxFmA5fgKBb1",
  "key4": "2Y6cMUfAp86VxPQmDqcyX3zkzHS5fk1RtVgxyuWkJEuNnMJr51mLETd6JDpW5q6YRgPCMYRHAjUhL5p9hzXDwkVy",
  "key5": "5K7rmL5rP2wgNJpGTUHs1XFdDbfFBJ3Es1ppY39sGUTsEL4Fy9jobxjbUvixSjgo1rC5Z8RdJdiYmThwS3xxbpdA",
  "key6": "57iyXFbfHFZ5m1s7LVw9JBeZDferGUjUoXVWyY3W1NfAVRoaHjX6HVxtp3jTfWgqhvTyqASvDmpu6CsA5D62YEtV",
  "key7": "T3df6VVSZakSfEJxcmYNr4kMgVDKTFrADezBxNpgxsbAaEmkEc1uKmESstfGJryb4n7rdL8xMA6hCeFCeB13LMV",
  "key8": "5fuxUxt8StvvomiTvWfUXK9UstwYDQRh1N98tMEYmBQRwTya7ghdH4HkjoRzQ6p7isHfP3zmdMcy7Up51um8VpQF",
  "key9": "4T66Dn1LxKHMcU2E6vkgwR12qvKYiYm7RUYZa4SRbiK2m5f3U3dJqoERa4ip1dFax3njBoCLV4nCufSjafxDBerU",
  "key10": "DCdj2zUS9emK4XFSzcmFpUE1fGg13Q2XVypxmTEpt1evSpC2zKbYn1YkcKY1mnioGR3SS6iWcNFqcACAgvhPrrH",
  "key11": "5SHNvUjAiUG189wt6Qgvc7rtYHPJQKyb9cBcWnJfrkCfoBh8kGD75meQxRZFcZVkBLAUnVEzcCQAR7BtJNpfRNDG",
  "key12": "49qThyM4aEyDEpCTuWMNTfgNj6tqsxmYsGLcqgERtnriLmowTRGiKbuvyzeXWC8GZpAV7CmFdChiq7xbTN52iiTN",
  "key13": "2QADefQXNXLiD5HkGibWfDBcnFrd7BdjhewFRA3kahEzrLANxGirzNcPXuSXhwryBXfVuW1S5dNo9xjgH1sAwWxu",
  "key14": "yhNcEamvBW9gr37nkucqBCY9WhoPBvpywKRy23XAyR8v576ge2evr5DZR2rdNLoEGphBGuLZGKXUAEAXqFsKtaj",
  "key15": "2FnLje3fDmG7oLYEhPPhXWAwL6HhMxwHG9gLQaAZkQuY7Hz4717cCbMbGKL8exr3dNEyjhoLMPy4U3BshExY4xgD",
  "key16": "58TsTcFk5sFq87DUmtXjqh5CUBpEfe5xkAzQDnghqRAGQCKebUdcqDV1bBbovQJfT7hotnVArXFHaiFtSEDzMHBc",
  "key17": "sReEBqVab8tMH3umJTRyWVfudttWeHEKTrGr2izG9ettP6QXRGWyr2WZc5zKfcc6UAKzPExXdCoWkiibZ4kffMh",
  "key18": "2tCtqrrgxxVGEZ7SHT7rP5Zywrzfzv8UviAW523UAGTYapGnnfrPpH5nZXumRhq5ttGr33YQf5kbSxVtuK9HTky2",
  "key19": "NjbKXmyUebZ97hTmeddyboogpBZNQZL46NrDeFEyRMtCQE9V6qmjcSSRYYKwFTcv9w1e1W3LLoDsui4Q9W7FJtk",
  "key20": "38bWGnFQmQjXyCM9gtTsJQsqZJ2vonNJWudCDemeWUEceXQ4ECEE9fGPde3RFmfiRUNGWo2zh5ZHDgkRwAZtUxTP",
  "key21": "3Se8wYZRrc2rTh7YULJGSk3yhgwrKvJFpKw8aQbtvna26E5gYt43n44CRAfAbUv7cYGiD37CmoS9R1T9j7op2J6T",
  "key22": "5Q9TPUNqQyEqiyV2nra3QTxGkiRYoBcDqRa764sjrwf5wBecHYQGZyYK7XdJmFrhjtnkSrX9qjyCF8XMyKg3cNH6",
  "key23": "2kfWturMgdh993tZU1LSSLsAne7Wmeztk12uNSCcABzQePo6MegEDCZcE5yJ2wjjrJCHLUgFcLHMkeTtwvYJcLjy",
  "key24": "3Up4GJWJyUJomJzo45B8yFs34oGCk42ux5rGXXTWDDCnYKFQJr4AyADMHtTJyQSVzTFs7mRMvUHs8JPZLFyv3vzv",
  "key25": "4u5YHUmBDmQiWwwYk6ePAp1Wrdzr1ukmegWTuqU4aKT1BHrnPTbeHcn4UWxXjBEL2CQ1EvxPfBFpqJa8GzQS1uzq",
  "key26": "4UACfF99Wppd4ML27gwKsVJ1EV8fJvWrjUfmZ9xLcNqQKX6bi8PQMD948DKoydrmL6Q1ub1aLv8ejv12JQDzGXky",
  "key27": "5MNnEfzVDNeXYf3HsWUaykW9282zWHc6GAXmeUNrQuNr3cuXypmtPthuFdVV4dtq2L7sBmG4eqLAUyZRbXRHjnNT",
  "key28": "41W1LY3Dx5L94UG5dSGYBhVth6165h9uGkgyj2LPLEC1KGKggyWRXNz88FnZdpbb9ouig87KznNpbfcT7bTdd1Uz",
  "key29": "c6ZVDBAsMckznCQyFhCitLJb6EpBU2o9oZzfstZxenhLDxn91HrT4jB9b1vD1tLfFE3xkRD7TQcoNWuSjLdkVdH",
  "key30": "2GWb3tAzj1xNxc3RLqQYtfFTyBYgieCfPXB2gJK1FeCUAiXTLNb3Q7AD3YFwKaCb6Lch6mcrq3HhSmnp29jEd6sq",
  "key31": "2Uw45thJn3fkxJDr6gxNBTGcfJmacJTxEH85wdkXbMpkjycyjtMt4fFWksoa9cRaAvfyuZ7y1jNe7XFaCFYjrDBb",
  "key32": "42HCVqM2GATdZoeZLUZp9wX3Ur6WzfmYVEinU24U1JigwSbJAJhzkYLXVqS7xSydXtEish527Fm9PH7jo2pcQpPS",
  "key33": "45nmgEQ28vTmVqyfYgUFzp4yyXQTVPRah1exDUz6WcHYBhosUxfRtDrAukC94q8GVPCA1jHSXTg9Gn61wfdaCvbH",
  "key34": "4PzYLKyQVSHUEQXTWdEuNP2Lk8dXFXqtQnWXdSBc6RYmfhxrmTXFFgW3g34yyK9fkLSBPbNKM7Mr5dZcArRRfPUj",
  "key35": "31Gh1UpiKvmi1CoSLPuWAwQTZ87L2f3s6k9S3AzoWFxyDq2HyDS6VxBs2VZo2YEFnb55TYVHJPTHkTmZpJrmLD9o",
  "key36": "3Paga21Q9h2J7pez6cexJ2UXhqn9KAU8iwQRQs7WxM4aUX83izqyQX7BCsryvugoVmQEUvKUNwgBohAbuRG8CR1J",
  "key37": "kW43SpTUcuriNxg9owSf4hQxMHCqsmthGQGT7Ukoma4pAV2XE9wZnUbnivHfGJEieALyCuBC9kw4FHPswj4S7hf",
  "key38": "3x7mJDo1AJut1C5SuTsW4AWDbog9o2UdUHejLrNuamx5Dvqa3YhABVvWJwRzFpzMF3eamjLY1DnhKNA8mWBTW2wi",
  "key39": "3ADgBxN19pXK2dnh8WVcth61dxYzgL6UxBf7tJnusqVuqKWeQ7iN7PUSwHWUE2oZcSjNMrERrzQu8yJQ6BtXN2sr",
  "key40": "61JWj36qneAPAnbhtqpuXR5Ph1BsgRZhca59mkwh4Rur4Hy7gF5uMyL1jNKFeWncKJRxK328R21tZUPLdfnJKatd",
  "key41": "2VaX5v3H9MrynGiPfnqGT4ZQKVwpqi7vJhtBLMrHnMDNCeoTqpB56J7sshYXqBgzcZYUYRkGJurv5g2QC6yBEJby",
  "key42": "5C5DjdbXKPWxLDeKyGTk1KkgdsyNAxpPCGxjfGRLyVSG7Z4WkrD4KoyDz4yCWTpuum98QPh3KPpjKW8PzdydAgd7",
  "key43": "K2QA9AG3JoQCkiQKc29SR63jRMmyXhWTXfxLcr1tEh1WLr7atvAfyHywxgChY2UquER3PW4r9fEwDnXbJv4qoKe"
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

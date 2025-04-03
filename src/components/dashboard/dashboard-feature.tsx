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
    "3DGFnPLYF5PyP1W4FwwyQuzCgW3WZpDHSArbatSk4cJKUvSneNN3pqpU6h6Fdt8XFPjbTr4GAKLkzcCoF71xyi4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odi2LwQNKMuZY5y1qDhFdpgWA3UAzFhnGZq67VeQZRED43oEZNtSSsZA9GjrFeCrtv3rrG2xkR5shqrHHL81Cxu",
  "key1": "5GVHZqPvjH57VdKukJV9zj8QPejsVwBk3BDskZk6kuRpt55PC2ne7pEcHjXKAXWnFKKguagQEZ1zqXpHV4ndtV7o",
  "key2": "65ZTed8Qks4SZAWoESopJHyh5qHRiG1gc9Q4K1Ha5U9cToHunWBLRwPbqsMc8TCRY5WzDVtfFR4HGQFAFXkPmtvi",
  "key3": "2Fdqjek9xjw9Q7ePh9Y8442i4hznFjXJtAQyjYhuPj6ffizEy6GTzrehEk7vXu6yku2A4Ec3SWjB3r3SdbrtaaQy",
  "key4": "3DHR8i3Exw4CohCvKHg3SEhxJmqJYwe4jYyd3KbcDRVs7XiZDdbBJYshFvmCStC5468nHXvEQiNoAoVxESFVsxoa",
  "key5": "2PVHhD3ZzDA1sY24CrYXNQe3VUP8rJ5x3mzsYZx9wnYL5hZAt2rEL4CwngEn9nkE6pyvwsorJPsXENJXpkDz7qu9",
  "key6": "2ePY1eTgYa9UKKX2hWLjaAB5JLo8C6qR7QLBSkPq8tq6ga5ZJPJ6T6ruVYdvDyYoUdZFh7yVbxPXMRaEA6PC7Xrw",
  "key7": "3aujFFqoUUiyMNnd2cCrYxys3UtBHz4LoSZXN9BPoPZY6VPjxfdJ7oYhyNUhZJwdoqa8xn3QRQaQ5qguTeirQVYR",
  "key8": "4vF87dTdLNtNsMnNX8cDpE4wPPvstZkUcnqiT74isDse62oD8PBDoy8aaACbRFzLPTc6jGuWV5pd9fKFhZXvWAW1",
  "key9": "2DaxwH83jaJ8eGb6CskDqCT2eQvgyQLf55tpF6AFKjbhDjzJ483qVSM8houdaGeVKVi63pkH91GqDPqvFgyj38pT",
  "key10": "4QtjaVqtvTWVGFRjsS44LmLtH42VNG9A78EcqdHYBm3Z66aPzhR57EGCcS9bTHHtJRA8mo3UMPxk2rxvLg1TEF4S",
  "key11": "66pSf8Z7CLgYgRFBLorSYzKnz4xRrdq4F6zxiYrGt9uepPAv7ZjVKxGphg3ns59s4xroLYGDgobLgh2RYkYYs6wE",
  "key12": "2KNaLum2fWhMKQU72Qa3sdFJcEMiwnzAwjBi4Uki3YZ8d4bxzKREDRx6VPVjQ4EWmDrUWa9aC6NzPfkFBqwWmGnd",
  "key13": "66ZqsC6vLbt3G4vLQTPnB9y2nNaJQwx3DPjaM4P4sKAEFU64bz4Zrsw6it7srxY2rzwEK9ymW2C4XPtHrQ1axiSw",
  "key14": "4oVdxXzvroncuXfvxny1s2WT3wdT2oBEwR4fS14d7p5ruoXoKXiGV2w6nTDesEzQhtzMt9BMjLPrpToxaoDhPJMf",
  "key15": "4g3nzY3a7Zi7nVRs3mpfbGbQPPN63WwdnXYXw6Cmjm2ukTCg9vgyzUjfbmpS4coQV4ot95quPUjxmuZyFbEiKzDV",
  "key16": "3CyzaPG1umksUVgyAAxTeM8a43CKvZiyxv1H2gGHyUwYhV3859Vb7HVXDgn4CcAVDuY64uu17Fact8vQbwVmq4mU",
  "key17": "63tTkme13yZmgtAxmjja1m2qnDa4PhcLKXd5Pe3szWXGPS3Rzmmmf5ouz9pND6SCrfYAaKADZYtiDLJe8o7ML5Sz",
  "key18": "cRgBYzhMYHnRMYq9LWatGzcuUnAWGWaMiXaecTWv4zwY6XhtofqVhRURgmmbRjK4hKDJTu3ZKDJFDtR4HzN9HTZ",
  "key19": "5i2sStXvfv72aW3CSLpnoieQwe2KV5xdo3j9pt3pkEGNk4imyY7B5nMMGsYrB5A2pBUV1gvySyfLF4D9SHuS8e3p",
  "key20": "NNyrUA99tffBn6EV8uqu4Nihn5UKhsEfbMfKhXQihVuqtQb4WVYs8eT6SCVwJWnVVJqV7jyDbubNjd6gVH6Df9U",
  "key21": "3ofVJxLgQpQAjPD2FwTYJRHvi4B1pQLx8vJUuMuthBDHViuNf1sDgbCdcVBuVywUKQrnLcgUihEgFaGhFE3HWvZV",
  "key22": "39ZhmAaWx5ixzF7CH6xGBKQ2i9AZMSmmoET1QvGLNQsWE5BYj5Vo6iAhFEK6S1GvpKpJ3f7Rz3kdKUHuin5eRr3r",
  "key23": "59un4A6sC3MMZXQsaQMLMX9Pi928r7oZFwVb2FpWtZKnkhQd3aBKqs5wDiYdkwz4SLQiawxoTy4qTE2dwEstNCvH",
  "key24": "62B1ZFdRCPMBc5eeMT3EA9gbWNu9qLMV7uPAp5h9cwS8pQo4gBKaA5RHX49VZmPShESFdADkQJLoDNTHx2Xerivg",
  "key25": "3t5GVe9c5hUqYUQGbtdRspETTnYhFsZmtR5FnFJxS3FsMJGopLyM2vsYdRQu47xdNrpqgymCHrAUggyDKF8jug6L",
  "key26": "4ANXzssG1dTYQieRFuZHGPsSZy1Nry8RrPUvrFPPXmXH2HbYKAByhGFwjsEbrzJpk1npWTgqwTsX5iwPN3Jd2LKw",
  "key27": "4MFJQtRtCCFRn11niuTnkHJNsVG1suPqmRtLeLrw8ca2k8eEiDx12TpCE3Sbww6R1PAW8z6yEC5e2DBXnScH8jJn",
  "key28": "D8DLUoaXAJbUEfAsuZRPJj9WSoLAZbkbSxCT1Sn3dk6Srn8ey4rrUagkwqvTgvVNsx8druSz1Brc7BRpjvDudBr",
  "key29": "5JR3MUzbpQuGMsFjnPsQycmM96oDxYAGjs4YDytTakDGY1xii1feubYR5jtcgXqtHuxALtgnpeuzb41TVtgA26nX",
  "key30": "2rZY6njhV4JvkJBHJ3N3RswWjpfUJQ2yiTbB6ktnFSyx7kxatRetDvGpFzkSa1tQtd4k8cGkTQmSfouCZjw1MLBC",
  "key31": "ffS4XPYKfHPpcJGSSAPbGGVi2Wapsfg2kMZJqCZSXGrQW2ryo2pk1vpFwTno9VZPmwWvspYakQpCoTeJQdDCv3C",
  "key32": "5qSBkNPiAxbUKZ8JW1WcYv7kKCBfGeT8CSNd9foBzmHQbcjBu1J9RVUkTka8fQtpFB6itK7MEXrxHDvQvMSC9JpS",
  "key33": "2Xvzqas8pdPgwDcCpeKrQCL2jpRRrhJfwEkNabMfBi38GhfzkE5LKckBQ6hnJGm4dHwsy92MDv7DEDjAHnnKGfWR",
  "key34": "3cS7Q87SckQC8cown8NgtDTcPJp2z9gX41NBa1RoEmAGfaDKiDKRc4eboXgULAixcrqDZGQbmYpJQjqqy7ci8e9W",
  "key35": "3zoWshEppmShqwnbrVCBvDeN5WvoDohqKCEYKAhYjcL1DevQpUVDMC1ZRA7bqgTV74Qai7dRR7NV15BDW5zc1brQ",
  "key36": "5aGYcgeyzR1RWDU9h6bZHwvfqeGaSVexTjB1QUFPh7YhUj589QKSH78JShLhDMUE28bAzLzLupS4Z4pM9ojuz6Jm",
  "key37": "3WMPWtaWf39nCWQN1SQ6GoJ8hMsbDL7xW2tMJ6fg9Dy89nPQuSBsWAhM7C49NvgdktyYebpoLYcETq8xE68Vu3J1",
  "key38": "4vGSTwjcivSxsFy5CXsBcHFyhufbT3f7BWQc92A9VFZY9pANoqhjjz4edhMbF8jedKevg8BGafNgjogNwCrGP4ZP",
  "key39": "mDUA8K4fB1RSq2H2V7bQpaQUaSeng2iKbkvtT2ahW5oh34UdDoyguMs1eq8jFaVxMsSYYNQBNUmkdFzbHrweyah",
  "key40": "3YrAp3KUPPm1Nxnav4QVM7jRm4ey6AdoFVqh9fvmNk6fsyGQGFpHWCC9urFpUFQUAc3YJd9o71Hz9VW6WPojib2z",
  "key41": "4i6EHJTsGAj3ADJvZ8GGAgtCAwQ3EL8L3TAAbB9NrkqhcAXmXTyufZ2SUkx1DdMYXZCEhnHgBhYroHarRWYNDVrC",
  "key42": "5rAB8bzRDpptR7D2u5w9QB3kqKfmxkgZotPRmSjxLzLWG2SeULTmXmNYNZjBKFSGdrgzA59bgXfcoWUZSGbAowE4",
  "key43": "28oLWntCozS3SYjPiEZ16mYXGxPr2jX6UV5QpMukGv1uwsbYzH16st8d8kTJrWomHo4iKUR3WJhdjk45BFk2a2Bk",
  "key44": "nymUtbRRk1Lt47MxzaWSYBVwU3ePLLZHB4C7onxzQWt4hgivURyWefM8YLEJubfG2AgNoczfTyMtkfPEG4XmgeY",
  "key45": "VzEYWP44n2maFMwDFGsi93DqaZYcqw4C2SmjtBawMBwbWwMGrdp86SYgLUiZFnzxvDjz71gN89DKoCgYMNnkBYv",
  "key46": "5DdbFsY1rvt14MvfS8i1TrYq6AEMBq6c71sjX9b9Aj1Nnwvff1xCDuWGvc1C2JrjVzNAUwmEBbuoAL1pR5kx8vQ7",
  "key47": "4JbGDH3n1VsSydKtE7KoDDGPVnW6ou1U5HeFnqrDgGbyinL9G9bnZ7ekxri3WpMA5ejTpwCpDmQY6YkhPget5KCc"
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

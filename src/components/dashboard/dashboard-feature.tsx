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
    "2fLXxtu5hudKGFSppsQ7HsQDRfwyYsxCHVB9qomNkKRu9oTxCrHU5RG5ZQwwu8duDokxgpYVwLtQ8Vo5KLsvs4Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QkvddNHhqeFfwzhg1BfVKJccgSSbNwLbhBhvb1A8BpTctmBphkuM9bL31GGJuqogcw9orYBEnDNQr4wnnyMWAvE",
  "key1": "3ucu7NiteguFAe6cnwp92bexx9MA5Cvzh3Bb3xqaXcTeVznBLf8ztDcKU9tYsBpZo9z8sY81XRCiLYv9Seg2nXbq",
  "key2": "5wAdycDm7Mx7AAkUGGhWapnLMCmYuNrVej7V1D6jXkTM9zR8ztMxv5vnMMZYk2FvzV1KbqdjKkpzCP7vmn6LTT9o",
  "key3": "2ND4WJZEKpKYfFXmJNRHUwjgL95rTiAAfiyXPeBXbPACGtZxj2cxxJL5HP4eU143WLoRYg7xSkcKKHmUR9LmoMNr",
  "key4": "35wzGWuPztT45pb948EKxyTzgc6a8vhMyHkMoJg35hwiPmv4WT8BZxim2dzX9LW6d3NooGo5u9xCqwjbEoe6g5rJ",
  "key5": "28zMU35zW1JLhH5yE7kr94S6JJ9ktRWQnX2w3r3mjQJBQMzUnSfhwcZhJsxCEytLpAWBRMx8RWgs8zG7kDeEDoLn",
  "key6": "2cpnz6ikZuiN46eesCXX8vLyWU5tzpzpfRtra6nNLVw2xCcL9q4LkFhAygjxhAYpPjhgpKAp9oZEPrQnzq7BUg63",
  "key7": "5hv3mbWCuDtKNPzJVTue6fhfSfx8spgGSGTSn2FDkwcGWqbF1UA53tEMSY8a6pY7b5TddNYnzGxzvmgmWWAuqVzH",
  "key8": "34TiUzXwUB7Bx9ayPfUHq86kWy8Anof57RFPW8Jt8aQaErTUCh5xpvWqZ1F84qaUETMsdEPfqj7ZxUbv59DjCgGD",
  "key9": "5xVTLAyafCFKbYa7cGhva5jCcVKcN4wJpLzjoUvhAUdsW4198srWunMAJ8wdtwKZBXj9gDHtZapUnr1kXofLEbXY",
  "key10": "3E95o3dsc1ccqMw6q5Vd9TAxudxs6KExiWF9CmYwZX7m6yptu9zhdGG6eEtYzkLYtTpY1Cex89b9wY5HLNgXisDD",
  "key11": "4QpR7jbxjb8B8L71XXFmQYPziSqimAFMRXzRofCocHqWYpQ7uKU5QsSqkqBgTKs1tPCvhQzTzw7ocY3sU8rNuZzx",
  "key12": "517pb4snsrKuX6DuTjxdneLhuDV6P3McXDPupbtTkPQh61jZcqgNDwBHXFLsEL1b5pUAqAVG4en3WahyzT4A64gz",
  "key13": "48QKC96G56w66MC7vfbeTPseVDgNApghPM4vf4n7Mei2ftaXSkp3yqwLTdMvvoLojmMnReoFP6jFza5hYrwER8rr",
  "key14": "2WKc34Ur4xQyQjXvrFi3VHPQRhf5G1BCrtrzfM3gSsH4fFtLBetVJvnefSCUgeYeUhKL5q8Bz8yneFXGHRVynj1H",
  "key15": "3xfYFG8c7Vk2YGosqLkPkJLmmsCdLjnT84nFiwpBU9qxVgyfQFLzxLeqvvHeFw5RU2vrEYxq18GtB3Te6cNU47os",
  "key16": "3pUmRUKjAB14X2bVwwdnvfTai1kULQzDwYo3FACD9qPyPxsMkZEz8hVidRVNQymmwx2tUKQ1sKQeW8T5r5bEpFXj",
  "key17": "2nWG952wYjDPTocnWwGzVJ9919qfZq66RSMmBy4TcNiv8mZJpbEATitcfPgcKG1CveSuYKi5TuXBntACLs7yKTQC",
  "key18": "27nF43TuVJRidxyb5oRQ6L2mffbd7SF4hd6CbV6GjVHHsRLHZt5tmagabBJDvfEBB1vJtkuqBYUeT2JpazawSBSc",
  "key19": "5HZnF5WGd6bfu8Nxvo4vvWEpAvQUrqeuyYvhDPYBVHuTidzhT2iPc82qBhrSDRduDCARSE447aFvPUZvKfiQ6XCF",
  "key20": "neBjxEjr5CWyLbASGykCcSjQJjX3X76rwV91uUgkMDJVWbJa3TaTh9DXZo6cgNzCiZDqSvUFxD9K3FqDrTzSxXd",
  "key21": "2cPTwUUGuh1h9hmnhRpG4tK1RHzGLwUd8nqqFmVTZhgJEX6Mp35jmtTBfj69dc9xvzkgHo6LWoWUgqBqK6p3TeZP",
  "key22": "4sPgV5XYduteAVQpMNUAMGjaX82721LWJFPa3k6CDPwVuTSPrGKfQYdHqw8dAs29BFdeJi638Cd97MZZruffsTcr",
  "key23": "3Jej1eMfnmkCQ9KrMBgdXD77Yt92M5JH22Zs8MbNH1K8Pu3Aqe3fzzNz88ESVd1zcPA8cFCujFysx2jovea4XBdk",
  "key24": "3QjuPJWkNbiwNw3E9L1zRPnpiKq61Dk1hNbVK8g9qXcBmsxCs3w2m4D6rfaxBJyJxn9aKMnMNsCeJ7AmHpT8gUgA",
  "key25": "3TYxAxWgVNuHotQeQGrBkUcGgLCocrTtnLSfo9X54ZiMRDqaVMoif1WbT5bfpSDXtQY6Yp3ieSFcZNfp1ePbcYKp",
  "key26": "4Mr5RXww1EgrYk9JZyAGyTocCkXfighoPHWT39VKC79qQJZbznr3CUXhRuo5343aTh1zcHCS5jZA77fdSYo6tSah",
  "key27": "2r6QjWzBUwFPeozAFegxUEBV2E3qveMRrSuN2v691YyoxBnWprWrefuCH6g3vU8UcqUT5r63jF4q747Zexc6mQzu",
  "key28": "5qdSFKG2c2xKX5Srq76WFTbVuZEJiYgroPU7qW1LphtvKBAgvWTQRH4RTbinnh3ZrVGXnuVrKSfLF8Uw2SRpbaJs",
  "key29": "bFuLqGgGiUdsVS4bcwTbDucYtBame8EZ1MWLzavgu7p6wy2q9NAvmZosM4x23fa5akTKqi33bdH8fNcg1mjL8U2",
  "key30": "wvDhXf1oZFLM8L6Sj15wVwjDZcuSjH2ecALmLAHE9oSTenArVzGgRQt8f4ZvfbrPvpP43ws2rJ7aVdPLRBQxABh",
  "key31": "qRGDQcWe3kLk2dBW7qFXhLHafUGFgDBuybCeu2RHs4wzA8h3jNmRM2bSGSj2XPVDzMcUtNHiyAcqW5jTNjXGCeY",
  "key32": "4953vBYjn813Drqt7syo6N8uBCEceh3bTL8h8Ypr4ffydVttMxtbeyhQ5LbJSVdPjnFif9HzHwbhPfAJQBy1ZQLj",
  "key33": "4TyBavNkufwXPgpPkviC8StAVsuSR4DurABafCq18hvs2E7UV2wp8fWNSKiRmexf1TEfSqmcKcAhtfigEXntDgPj",
  "key34": "4jUhBYx3rSwRpmS7JRgSEUP4zB6ShnHUU5uPtCyAzdmM4fHT1pmE6X3aSCs4wKQKi86zdp11krQt4z4NsjRDvihL",
  "key35": "4CDRXzbZFsKRPhDa3eiysDrwG2Wk2vCFGLd83cmEjyEhmBiiC24uBc6hghDe2ebiCdFwWxHkJtemPxp6djhYEsqu",
  "key36": "54zNNaLrYZLW62MFg3cF447yxzCxSaKGujkuoYZ5WZ1qwQ7tnDUPFK8oauHpfYWm9d3TahazNVf5R91DunCAjW3",
  "key37": "nmXPEKBE69i1jST98jzLY8w9gA7ET4LHnYRAZ3vB7qJ3vQKM5XNuqiqnjonsjy892UrgrPyvAc1xhNX7Tk5xtjG",
  "key38": "5YcsT5CzjZwe4nd6ookrrWe747mzdXvxfCXAfr9qSWPvgaReJ1JVdFudBrg34JTeRsyYy88GcMH37ZauLCWggd6Q"
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

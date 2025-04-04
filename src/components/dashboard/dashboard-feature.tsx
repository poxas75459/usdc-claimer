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
    "oA1k9o3grapdjjEEyvaqkgu4jbryFQcLRGgV9qxbSkWUr9Z5hYMPGd4vFdZA8ZVUXqa33uBQqpXvrX9hfQYSjga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUtSUjsHfnL2ouqDsxonp5Hs2VVxzAG5RYryC8tZqeAve7MGLJFKSqbtnJZvDz9SAxj5k2fnp52bu76hdE7RPsU",
  "key1": "5ysPz4GLd1qR8bPVA91Ri4ZNz6RhyDpSXK4SQeD56Ck42k3kn3CzixwCcBq1TA29KyzrexNRYDaShma92bteRAhs",
  "key2": "5ooXro6E835tmRmaKytdoLWLsa5Ap7M8CVzoiSYWsTB3v4GJc4W5DQn6LBAva8UsEDrsqFQBiREt4MeYYwRmzNb5",
  "key3": "L2vfFRu6u3mBxaCpjQ8USDFyYwhwc6BFVRzRVp9x6DUCpPtz5waDBhcc1r8jS7qGEdAQxWRstjEFFtjEKLiVJZW",
  "key4": "PgAPJ1oNreUotGKv32hg3AwyQSvDNSgEKSLdgy546uQwui9kDxX9yE2pRwCyvKXsfZpAMNXo2xdx1VmeaJe4j2P",
  "key5": "4seThzGJU7BoxnLri65dzvYcN5u72fmsET6YY5dPiRrmfmnT6ojyC1a66aBSJGTZwWWYKF5r4HSwVCWhAe35RWHw",
  "key6": "2PYojpLeARCfayasUj1E2W2QmjK22cH82vGxBPHXUHTuh6R3rqXAarAnBpXyjRHT9Z1oDT7VJSxH4htkbd7Xv67h",
  "key7": "492WQp8bSXioqrkoG1h87uRW6L6KzNeBNW4YkMXwst3JbsaYn7NZqA6mbN9foWN5auXedHLdVi6iVvGm3fybDzTN",
  "key8": "5DjtnRZ3YPZMJ35jwefYysMsiZNYyxCoCWhGGp8bNme5CLeE33ZF6qwjF75eGffje5X7CYPvFh5R2khRCmKD5om6",
  "key9": "4EUpnxmiJQNZqH52RedkL4xbh4GFm6v9Tu1ArEMpsBtuB9a7HmQVv3PS3TqJAjGq6c2viUMnipAPKb3N8aZAzV6E",
  "key10": "3dv87U78x7sWK9xFDpwADEjCv9fNZaCGcjjYquELLDeKYJpBuVahCjuMpYNDiX1LP1SAtnJr8TFrtjCy2u4LBdfQ",
  "key11": "5An4634JGGN7LS8RXEArymvuCgqPcjX8N44FP8BEzFVAfJDxuKfSQDb2rqCtx5hPb2ab5Hrm64fwXKRxDBSmGowp",
  "key12": "2tVvaH8wX3qG12vh2RQ2EvoMxuJ9Gwzbo1BjaNNHg9f66JsApS4Vc61RxdATaAQMGKQvga7QN8SFWecRA9RJrM3j",
  "key13": "3RBeG5t6RhZBbZz9YVdFJqhED7yEai66CM1oSfer9BBZsHobZn8GYPmdAj3PYfNKwQHSNXdibNHDtVSrRmDfEFY5",
  "key14": "5UXDmMdrv5QQYToLBQXR42xCYnGkfp5ff2QCPkdUPcLrHGPUaLhN9MXczQW61kAhAcd5DbpC17YdR5F4GTwHe4vU",
  "key15": "3rNmo1o86oGo2DYjim6RBNt8bGTtBBhs4dsB2DndQGJwzPfiN7tTx3uvjK8sg4JSkz4G4devBYcgcpgXrzhPYZqM",
  "key16": "4wLpbi78rXqThin5TxN9nSrc3VUaQLoVtoziS12aV29KTRVew4FJie7nVBBSFB2sELLdGC3ZojLWagdb3tUvVWyc",
  "key17": "2cMdKqWggMRDeoMbQGu5R7ez8vibLZVdHctb6t6eisN7qjXe85Ej9z3sE8MeHYHW1YnNscvz5Zmtz4Tg1wZkQtoP",
  "key18": "3gCiP7Gtpmf5WXNcv41qePmcqACuPru96KV9F7JAGctiaMMWZvC7bYiMooZLALK8HWyQiegVWWSi8mGfADZ933uU",
  "key19": "aPVmyXGxTfyv28eZfewSb3gNDu42Tj6gHHcvDaPgs27cHDYes7fc9sjANU69d7ENqodeaMShHWFyc1eNJr72k1S",
  "key20": "77uTRNvrMNvsMCqVseMHaBuodTorMR9HN4DFqxX2QWJFbRTg1YcHidowxX8fy48jgXPVsQXFnb726eUVgFBmJsG",
  "key21": "4vXQAAB2CkMPzFswqpuTDSdh3qZCc6hDYXrcZ45Pwg7kvM9PdgtCRzsb8HgemArtSo4axugkGxDiH8HGi9GRRwYZ",
  "key22": "5mgGePYzA9HZ8saed33ZE6KqEZdn1K3ZfRFcHg1irUgRt2QeHkmfW5poBQMWsouhLPARcGgitm81R5VFum67VMnq",
  "key23": "5tewSWCvXbBQ3PR6idiZ2ho9uWCEsLkMQG8ARzom6CWPR5BVPUFvobeZykGT4Vqvu1Fm23KcYpiE4aGAYxw1hXgy",
  "key24": "6bdePYgDbVZnGnU9scUjumk5tPSk9cG4WYcp5mvVte49QMMQjggCCVr5JjFwfKQXxVgNLh3jRsg4a3GDEEX3r49",
  "key25": "54DGgoAipzhsCDimNpr68gD9vrvADjDX11APjwvW3ApbSufwbApkSh1jKQeokdTJYkHhRfWJKj3MtaUGqhGbRkJg",
  "key26": "3s8q8Bt83vCzH8BD4EuhK44aneTxAus2cxNYPDKdPBJZrghLdDrsxRV1jTGpV2SRUqR3vf583HHZwPekHafrseBG",
  "key27": "5w7LbSThSg1mEmPSGJeSV6s7gDoYmcn3JTNvXMosQRwmohebkmmvinZTtnvDx1V66kj5Csog1uBr69wJcWU7uitf",
  "key28": "2ur7ECPFmFGkNNigBxo4Ua1qK8TX6yPMGXJKFp5FuvhDjtyWRnHC7Zfd4PK3ouSDPLt28gmEok9uMXqQQhbz2YNP",
  "key29": "31efbBV1BRV98CsL3RT31VvPaqGsxuQPtCy1hUPs3UzWXPy8Zm36jaQGkRpNcu1GH1KPpbPMc7Cz5BeNTCgf63RH",
  "key30": "5iiEGhhEgXx2xwqY3W3HQs8gT8V1X7tFLr6v7iQ9wznsVAK7DkNmxnQRxkNxrRCiHGA657ctTbaP51giQigZTJom",
  "key31": "2WjLg9E8LD3M1baipCK8ZcuAbiEVQpj42HF6FN8r7Mx7aauxTyV8PV59DCybxpwPCueRGQ4c36MmMewdveGxrnh7",
  "key32": "2wiPDcev6G7PAE4PBBp7bZbr1hW1bDQRbVhiwkU8Gz3GV15JM12dFyNBZJURjYrec1TJVyhLRfQ2S1UJvnALsQqM",
  "key33": "5y7DyS7Zg4Ruo6e3v1ryWfzNbUVZf52FMhuqaY8pf7VLrbgtgjaqDbhR7yFLZ7Xosbyhvt2XRnYesbL3VNZSXn3G",
  "key34": "4x7LynwzZZPUNNCbZ6xkTV5iGWmZnHBEwBGP4WkAyGgxm2sZP9bJVM2t5c28E5iDuT3dAaRw1gVYQdR65S1aTjNu",
  "key35": "5GeZjGMLovA6ZprzVvJHQS3VJJzq8kDgM6HH3FWWu4kcBrNBhuu9Hnn7bUz4BN4m1w9YTymBJ7SALe3UdezUugsW",
  "key36": "5wYdKMjxVDYYdxurErj9so5B4kznNLp1Zti4FGmjm63v4mJeZ2WWbrLqb8NHdZfytm7Dxv8PXkd5xz3pkKZbPTWJ",
  "key37": "hLxbEUQEMQeSXfTVajrSiV4FBaKVXbhnacgWURKkpdJnfdJWj7xgBbLHAr4mr8t9fXgRuG1FDw9MktnvnbyuUDu",
  "key38": "5BCAVVH5RWtDiNsAadNzEZgSyPzMRFKB6JqazY4afuP9UWTc7nwuBNf8snB5i9YBcqa2LhdQP343LF2opyysJXz7",
  "key39": "2pRV1o14Tqzv4bL5ZnsgVQ4CGPEvQNQW7g48T2QnfhrUsC9jrBzyoic6dVt8MsmAkUQFz8DFBYuBCoYcQZDv84wy",
  "key40": "35QoU9CsvAssQ76ZfA4W42QWuump1yBPHQK4BmNfPJzJhsFit2nVQN87oB4rVBvjdcxaHLKpdXdrwQ7E9Ru9vQrj",
  "key41": "22k3vhhugDa3nATC8wHJyZpvfmL7EFEXmKZFUu52YVmQN1qasGJohVdqcKJwQo6pjVfKByg92jy5EAokkNPT8HYm",
  "key42": "5NhjXchPuWADKTqeYpAze6jwAb5RFi7FsT6Nw6NNihhaw9qrczNPkUHHAW6vCnn98R4ZiRXrjd4DqZQKK2bcoPPY",
  "key43": "3HbepiKHvgN1GZGPbttRECRTrXiik2qdrKPTd3Ds4TXqzpwHBGUGFKPQghrfsKcSDLYjiazZjxUgWbYrnT97hFrk",
  "key44": "dRMmJQnvb56q1ARyvZjfWs9PzyVhebSa5haSaFG8AFyeraSYVfGprHoFv4zbjo21wo9yLmXsBhTPnBXP13u5DGV",
  "key45": "3NqdHqW62YSq1NKfHQA2ki5TTk8oad9twEH1us8smpwYqGqx4Hsq5a7YbqVGKbNtgsnayWoCAn6LY6vVSphKEBPh"
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

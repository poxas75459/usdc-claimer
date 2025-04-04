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
    "3rdRvtQmxqF4Sar1ecBqP93LHHyQXpMiz1AQhycuxk9EdgHQB1TFdByj74eEypP1Ub3thM5e8NhcsyB17FTADLEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pVfFmQg434J624UwGJqAXVg6Fhsi3h8mKJEn3mBi2UeNbKGngj8TPFhzZTKTRzSDocYPNjCJ7dG1yS45iEMNRU9",
  "key1": "2mnFWBXpB4oTngWVZSjRP2hFHEWU4KxbvtvePUjfextFbkAXNNfJ4LxUnbcKhGt82hD4Zxb67mf9badn8oTuh1o1",
  "key2": "4BwUghBbPUm3Ce7Fk2MBx1fKW8PeDRRKJQXWLNZaC82uxeRKmE2uE4vvDSJZ69riafTH64x3n191bxwspHGEmdKY",
  "key3": "3DLqgzATHcU8E7qzyxdkuaJ7rLPx7s9J4XZSXzUJVskNQwxEMYKZdigCxjwx3LYwTEHZd46vzhdNixuN5RGT5GmW",
  "key4": "2Q8kTzAtFruxxLAC9BeC5wSq8nshtR2ezd5fiYQCXxoQgsucqraUWbzbTGaNtn6kSV4pGFF9LL46yhbWNnGH9qC7",
  "key5": "3wKdqc8PoUoaTa3pYhTTQoAUSMpoAxXk3B8hVQD1BJYQcE2dqnGsdcPupnHRVQRufGaLywJKc948oa6YT75njhqT",
  "key6": "2KsvGNbJdaNjUBuxPmjegJ6CbCXRG5qpigFv1gnnJg6ha6eb61poy5oWMwe8ZXuwQtdMjQUdW6LqSvbkRR2BMPCx",
  "key7": "Jxqr55XEEZBwX8nmiRrd2RwEGuWiQRSQMmLfUUDGdrtqcKCBbhKjGcSJKQaxzudReTBxL2M4bAvhzTMfjjepij2",
  "key8": "5Ncig5rCdcAoi5sHQ7iZiCmeGWnR86Xa8JktHBJ7hrUKrW3n9LWGMpczeTyGvzyF8Waj6n877QnS2tDBHHmvFPtr",
  "key9": "3bNArHbkzxsPEZCKUZf6Xxx7ga4e57VusuheUuyxTk7Sb3io7ofNKhfjTPEEkN2YTnisSjR7Cvv1mqNGMLBgbjoh",
  "key10": "39s6uTseyzwmCdRLHMgpnbBMrUomUUu8SLwVDK7zEW3Frmg6BLi9XZkb9KZJo4WUA5GE5AT8r6GzHcqfZL538RY1",
  "key11": "UTfTi4yQ45KYfJVTybDCBRUvNGXqF7mvHWHGoXBgMUvqDfx78G5HXMPNZ3wLDFzUmsz62qdsLR7tL5GKqywgY7u",
  "key12": "3pqB3Y1Fph2wdXwJuNAgfdd1vqBukDRWLeM3TQP74MNV4Md9oVWHVzpgof6eqNZg7gTwpvYW7KzWZjUka34gtnuE",
  "key13": "2XxtTtkSL9SFV1VX5umkyaYXhiLSF5fg8426zcmns4P5Jf5yB6iz1mkRyJTVcjKvq4qLYf5PvTJsQLzUV4vL3tox",
  "key14": "drx4RHRjArQJB1Kp1MPpgyGo2t9WqKQH8DycyvwsG2Fwg7CWHvpnu3fWSh47LGjqskBLPSzE3D6cG6ok8phZgY9",
  "key15": "4xZeFpVJBAcCwFFK3NRqnCevvmEZ6KxsbsFrgZHjxWu8xAWfgWcQvMDnQoBnJpYhji27RWzBtqnFs4CaJcG8Tvuk",
  "key16": "2uanBCUfhEL3opW14CjuBJr4TABtzqCHQyqfHptyor3edF3sCmdbbYgCjwbZJkrnc5MtKQgNfzSYSAZPAYk7wGBC",
  "key17": "2tE77YcdsWoHNGPnWpHaq1X6Z1hyiAnGH22VUYeZQAWeZCUjppznKLRRZRc6NgGcWR6AScL5YoMuwz8Ay4nPVhiE",
  "key18": "4AKH9e8wgDAGx1wnKEdCCNirZAfiRzn6ycax4vfHUXqa28P6xCT8EtJYLGg1vittfvTnn5fd6KjRCwHP3eskQrXg",
  "key19": "4MMx1EgeNLAuKZH2YMdvhkpJkfhLpQJjqSX4766m1QDqHm3VzMSfjhf5tX1zqJNnbuDMe2yrtg2C3xXTn6PKKFyp",
  "key20": "4h3u1UrEvELXYyJ5hqmWwBW5bKnRGVYzy7QA6hNw8XyF96AxDdpWq51BsgdjgGa2inp4yyTb7WsqHP8kEXz8w1jF",
  "key21": "cNevLpCYGeeuuEMtzSJsR3tFyQjWMJUVj5gYX3VeSeMcAFYkzgKwvpwpzKsQPTe6dfyG8aNQZ2AEp2tmpsZonaW",
  "key22": "4cZ2JqjcCjgY8tMdWLvVYnUeBL6eYNGuVTFUmqE3BrnSmT1gmNK7Q5rRiLrs7QWWLBbnjFPnkPLJtcnzCKX6cDfv",
  "key23": "B1MGxjwxJiZc4eTPdAfJs95b2iur1pHtnmzXkcmLw24m68xpXzEWf3fQn2isZKC9qcU8vZ6iCGVQSkZPuFpSHzs",
  "key24": "EwZgJ1AsYzXTRw1zjFN7vAmvwr7qCky5RdY65wYaRVy9Uqz96jQqnBJisTSzoGbVdyCkNV4Fiw5QujAidYbMZtd",
  "key25": "66sBjMYoGLPcPWkibfjE4aDYjXFFGHbLxi6SqYWkPTKUKqVtASpx5PKJw4oU8BBwvqXSksKq7JqFD6Jgz3XfxYmL",
  "key26": "U411ctkZmP4129c3ysEL3wtAmaBBxesRQjtjqbbi6rFfM4E752GdhK9RSNQLBX9JmjXP76n6Sh5fBx9tdtja7as",
  "key27": "4ZTBMJtwZCFzSg93KEJGrTiqkYJP1xusVsLRyZUxR8BnqMEzq1bvcgrSFZCDrZSCZ5EhUfW1UMedgDTY2s9GRLLs",
  "key28": "5e8DQNXT3kKsPgu5KiFp7Dtw8SMeGvGeJXPyCcidoAxfiaF9DfF8eVLpGGQDDWkHR7w6Saf8En6CyFCnPX6Ky69w",
  "key29": "5Eu4JCjq5DZ1RGnXxWcqrBKXNAyHcfSpEKwp82SpkpqXugdWAwURtDD9PfFQGq78YKV9crzCTRaJvT13M5gX2wAN",
  "key30": "2f5yAVY8nfbgq5XCJZ6YxwN4sinhgLTQggaZVrB2JUen9CSeZWQhDgnvohumypHgTp945hLiK21x3gfrRg3Fvp91",
  "key31": "5KCLaQCfkyKFKod6FVUP1oFTTAm9USGUTBHeNYpF4RFDZFGZtvvivnMpCMZEycdokaP4eDwdR2HEhv4UNeafKoGa",
  "key32": "2pp94d8qfPRK7dCNbbdafPu5d8j3CjDWiJe9QkW8EXmPnbst2jGA7YLaqR8Fp9wgNtPquWVKUPcqAg6jp7PiLFZs",
  "key33": "3qG6ZitwL7mEvgxgiFwtkWeXSVbXCAb9kzxBSe7KFPRJbavoAC9d6wwTzgTB1Ar8mH2L2fjQScsXFrPEeqUAqTfu",
  "key34": "4h6RTuYgqxdnF8fBiFrKdpwTx3M5qDtXxCVgvFrCzyqjsE53YXLnyFhDVxuMeryy6awT5SRQLAPhCi6d6JpYrS3L",
  "key35": "46Ji7i94mR5M1rTbW9RGsHktL742CuoHBUrGTbYGbV8v88CaWxtHQxPwZCWhnJHT5ktWfmJjPaoieqKVC5jTRdpF"
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

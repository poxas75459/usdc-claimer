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
    "37HPfpFdFsGeqGez5LDy5VCSWKrXK6SZTGpyvRhyRsk1hL7v7kHfhq7zowN3fEipM3wyznYWcbshhWcZktdHtpFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ma63BiWjmDhHXG3vRVQcbTwJypRWPYLzXNJkmAp1jTjnLvNh5MGw3YpzuMpiTB7Keh4SGHuiQZi2tR8PEjGDjjd",
  "key1": "3kDeiKVpREBkZCBQZj6tqeogXYz24uuWnH43YzUG5y7CCoVBYwjDJvwkpBpWnAnwph2jgxj3NeAZUxcJZyr9wkZZ",
  "key2": "2CrHtrvqBKXFpXdydxc79kdy3sJNEaWDi9vpieA612mj2g6fxmE6myNk6RRaSgAKmUcng9YYmTk6AVGfbW1itjFj",
  "key3": "34YcJpxmvpVgmamn3pooohGbTLf7Gcx2eBMU2Vq29kpttW5QUQZQKffiKztcaUaWyGq3u1LWZsxvpmqKUqW9sDY6",
  "key4": "5taoHafEPyKD9DaqciUtBDgZkikxGa4FBgXyvE5PFetbqaYvgTBtoHDCwtjZC68FZpRgF32mWYt5Vbr4tBwrwf4i",
  "key5": "2WQYrYd3c7ZyoSqJLdaD5nGYwsM3LxNwzWhsNLTiDtXncXPY4J2QqByxQnjqtXN3hXUCNXvU69GvUg6qs8kPqfGK",
  "key6": "aCdoKXRzmEf3VU9XZyFJCSkUrwJVF7FtfEmaSfYCKGxswzKdj7LumurvMeHbJujmBotkoTY6WXKpNFWPZFXTV9S",
  "key7": "4EZF4kUJvCuPifEUbvfKs5amN16iTPHtqrp1negEFVkWk736Qss5dMDew3sEsHmamngWuaaggFLfuy51QmqLxAio",
  "key8": "4wJQDr3g2oR1iURHCe4x5bbww12vTMLT5Ppmeoajdjt4xicpMNdukGBAtAp5LAtMbgFwBof2pjJup2NKJn77LBCA",
  "key9": "3ZCuRnH7Ah3eVZkGM3XiQDYg5rRE6wbn9GJAwybwKi6iBg8CUE9BX4GxQF8Xz122eGVSGqd9Tgpe3T4ouAaGWSUa",
  "key10": "5v5XqXsygB2NpcYGtAqDzS1aJcBMvPpunfGadKi5TV5PMfiQd5spqMJV9VDBfVy7udH9Df931Dn28FnnXq96CJJ4",
  "key11": "4cn3wFVoAihMsVPr3DtrwKGX5JG6jT3jGqCHa9Sk4AVZWxudtEEjqcXHoFWjSJta8ivkMeDpbmU2Lgn5gxnYDzrP",
  "key12": "CU4NkbqMouWfyrMzgYGenGaE885nUTChQ32ZqneRZge3bTfUmVkfCFWb9Adr6xdu4wyuxSxGJjqnxzvg5QcXA6M",
  "key13": "3Xb2SPPKGLbSZJj9L7zPUSNAdYvK9vxJ3KXxoRRYfSQHo6qzhxp9jXx4a1mHTmrSyY6LZAuQrZAsUGy5dHkMnMG9",
  "key14": "2xuYkD2z4fJr2mbJUrTRzXydALTBAHzA3Vu4dwrnJCRUTSgxrwGCp6fT9Pnj2wot51KUJKDCvACtRjprR4NEVJoD",
  "key15": "Fr171SG4UJQYJbQ6yaxdJ9jZMmKNkf4DyDgaPFthk6eRoqwdqnAsfkzF5yjQ7Jr5aKAbFZdBpJeUeKeJrPy2a96",
  "key16": "2CSu52ECcw3PqprZung8qQuMhfDHFeCAT2HisrYiuqunZWswkjtm1gB2KxCqRH89kWBqJekZ1LE1ap3XmezzUfFg",
  "key17": "3eutH9az24tpginQ7RBnRt6ovmXqtJv3bPSLcJgs7A7gcsAJCHUkn4skKuCFsH6QegKxHMK9y9o1BN7S2yR7SuxG",
  "key18": "55WF7fLfdzVoJKfeZ2Dn9zRGscgVPDRWUYn6XLEZNr659VVmRqswtHuNuU8KpnU1ha8haRkaVwGp1EE2fmdWb6eY",
  "key19": "2t6hTqQaDagpyFjPePzPHwNQnfvpE4aXqgr8urZ3hecdm3heKdpDe7efRtxJBYpA8aN41cGBQX1UNjVcqu9CF8We",
  "key20": "23oXr8SP68ms3gMTc6WDCd1PPeVP9G4p6c1o1d3T7gHGTg2GqREWaicqA81Xzh9M1aoib3AXJnavgcB2N4JhTJgt",
  "key21": "4X8quySvc2244a2mkFNDFLnx25HktWQnQ6oftgpeoHBfHwVtMWMwbHvLbbnWo6u6qnpDER5HqMGNRiZKrpMNZYzs",
  "key22": "FoAJTjfxd7zhw98oxuKi46S6FKTxF73hwz6LottKXkFHMiUv4uGRPr3fJHq2dtWiAU2faGMobwb3P7SuqbyA6wR",
  "key23": "25U5W9oswLvxkPUhDyzs1iVz9B6bsBGWjHQkJbnKdUx3AT4JjzMR9dvwjHsdKKfiyZeHw6gxXLGR6YZjN1uzL4VU",
  "key24": "9D3WSrQ6m1UUQTzuttfL1UcBsYVm4mY5UqtJNZBcRQQNsVyD4aomc1XAr36eotfoixXwNp1pPFLF6r8xyV8Xcdq",
  "key25": "3oWKRDt4VA1RFvacxCrZDiz1cFYq3nUwFbUxQ8R1u514yGtupD7iBgpRwyUJUfbvqKr2Vshz29kTrz6TAfNcuKES",
  "key26": "2gtMckQywxc9V3X9TVjVnDYHeZQU3XCfsytYSJosRrhNCDT8NQDA5xxrnxw79Q7r1JsoGjd9JF97kR3MLZe9h2i",
  "key27": "5gXhgD1mqVMGJTur4SV16c4ceQDRrNzB1B41C3FX48yMTaCrPjHDyT9dBAyQ4WbtcEJn9GuvbB787NUAU4BBPazP",
  "key28": "4PTyZdodvdwZXu7dTpG8PGx52ksDQvXVYar6fzu9dFKGAMRYDhbQtw7b62HG9xdzEy6148MY1SwutHBktcaDej6C",
  "key29": "3nwzew5jdjq41dStduJiV9tY1y6cgP3rc6K22moeN3YT8V9jbqoXY5JpPuNr42Ja71Z3Q86drZjnjxbff2sxVDtn",
  "key30": "nRCN3YZ8Zbk391zqxXS49rS6UDLyaWPxjBCu5XDYHDMPt2UEMoRCx9nwSBXFRNe5Ayy1f2HdLvWiY5pgKkQ6qLQ",
  "key31": "3dFU47tEJJDwDttykeekyF4ZvSXEbvdheJf6QGmcAA91QGCQFxvhSCP6uoaU5LBuXFwBh5D8XPC53cAnQqELYedi",
  "key32": "FKQaNsBfmVqpJYJiW1qc9hGhWtcENbt7nJTUGT5N6U7xwW4otMnUdaWgVj2LR6gSaecDVi8MRrncu6GPxQsfbrR"
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

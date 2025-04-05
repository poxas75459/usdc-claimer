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
    "46JLW1A6reE4Nn8NQwzmi129Gs4EYbFVH69uKKLmhnyReMSGZNddypvFtKJXZmdgxKvwFoF796hyTWoL2q1rCZY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9oZAzPVEVnmdSdcM5UkWTP5xJKRhqMVgJMuYGBKwodroPpqCippxd1HVVmbcTZiTXWTAkbShkHe8n5d87kX4FHR",
  "key1": "4rN9PdbjtroztEUfuSZ2NYU4G25t84D8EaxfB7UjMpuUGvh4JKnzRLLhwHtgAq56a5iJKS3BDEsMffb9cht1mUxe",
  "key2": "5mdBhjLSpsNfj5ha9eBJa9DY4jgbbiQeBYXTEVErnwYgNG1q68CjFEWqbdNP8KGbvHBm124M64z1SEMjXhwp9kS2",
  "key3": "4Nu39FoArAXz2ziACercM53jWzG7LRkN81J374nXEfSpJyrdY87RdbDPJBwckHCgUAjivKEnBuo5PLYaRjiPBttb",
  "key4": "5pXMaoXLt632kyow2pQfDRsNaWYNCS4X4oCNkDriRXdEFNe76iiRa69kGyMxVJpEc4ysKbg6j8FqgFdZLwmBHAFu",
  "key5": "5tMZ7LABaotZtfL1bLvMMVvbNgt8gjjdkRYT3MUx9kMNfyeh7q6x5biBVjDMHFbDVmLxS6cLrSft725BNaH7MQpk",
  "key6": "2qwmmVAo6wBJDYStpHr1EDxdMhbZemCCp9krRLBet4MBMoAth9zniPjRYnc6uK6Qy3Krs9LPXTv92d3rHiicY9fK",
  "key7": "3ozR4n2zMbpPArUVdmjvwLvGWdUzbtnJZtenb7mDcdQVTL7nX8d2VF7DuRs1mpiiMECpDVXj733iJcqEuxe1YV5y",
  "key8": "3xdvdJ3ENZ9MEQV3qorVjH3LzALzWE4cYaDTTeYWPUFp3L9FA8UHSkPHEbXng4npcukAf9pZL7Z4nRAecs48LPJZ",
  "key9": "5p49dwJQ57BUgWcbWfffX9rkwo8GEQHV5C2KppZxk8Noy9iA7Q2NsPmkEx82kSDj16A4yFXAVbhRu6Do8fCGkHZi",
  "key10": "5sQuojsuH6krHnTf8J6WChAGSp6jDHTidGfc1uBrYBacbWFneAm7YhgBjEaKNMU4zKdicnFTe9RfWxcq61dBuPKm",
  "key11": "5VRC43yBTYmtkQugHMdGHfHJjb6qjaFX3Rdfep7NyFpXzxBANqv3X6yD8Td6vzezsUpS9gDBHuJ236S5ti43KJQ6",
  "key12": "5jFtBj9A9jeD8jBombynwffJoNRqsJeFbwRAzVTRHsb5WbDiu14yvhWv2ek2q8RZDFPptyqvbwpNtw6nCTCok1De",
  "key13": "4BV9gv4HH9fTVXHJceTaYnxJETcquorRAXouaasFME859QACP9o27Di7EHVtBX2B3ermWSyeYvXqBb6Jn73Xg2fy",
  "key14": "8W1atDs7eCWZQATTFQmn4aRXdtcEa8vM1bN8kYzN9CG6eRivzUNmSc4i4ircSUBe1o28JR3YUbTYWRrWk4XqWh9",
  "key15": "4vS2wRdKKQtys9PGR5qm7dqWPcyx896sqsLVpAsnwN1zBbfV5uDSasPv2jAxxFKC2egdtkod8RGnzHLQxvKgnveE",
  "key16": "vnjQrn51oiEiuhHzmQ19LGuLUbh1k5oDsvVNyXWukWmfuoqYbCYyyrnucczXUSnQt1s83EdGpFNquTDEwc28uAG",
  "key17": "65TGexKcpmLnWYCXFFgKkGtwiAd3bCpN9eZHfYUQXhkS7kZH7iMSQikPbViH1oHCVAwiuNc2y54LKRfHd6SBJsPb",
  "key18": "3h7xmyLJ253RrGFft4L2xsyNN8Tvg1GD4muQ6mvQB3PBgEA8MrGnVBwBjJvgzbDThBouhfUa411pg9mr8PSSJeV1",
  "key19": "V962eGwEBDkrhWJuHD8qx6EvipTBM4pmECfHbgk6ZDkXeU1zHPgK3fvjotffMGnidfS7Gc4zFtEBYqNHHKZmnzm",
  "key20": "54t7q1LsXvBat2pcJjFnMJ9cM3FvCGM8rmHZJToCym1y46QNqDLMjQv2P4JFDH1nS52wWBTZNzMzCvMuLvRuWLMQ",
  "key21": "2Kz1VGoGNFcXVKY6CSRN8mAWscveL52ddJfxgcngb9B4YdeBM5N53rvXEWogazobfzxxAtRTqgCFgpLDwyR6Csev",
  "key22": "2N2XEGkkS7d7LoqLdYwa7Czw9w3wD3JZCGUGjaGifA84qV6tgnuX1efuJBmpbpV5on1beTR8oHTNxtghQ9St6M3E",
  "key23": "53o26HWBDxd8xAF3iWh97nR5HNtBcHuj61f7vf44FbiS4qXrCuY1fmpqv3QM8tQ8EFrnoAgL6KMhCVKaCLpVVpQN",
  "key24": "bZkmiaDe9i422b2ZxGet22wELchyM3S6PDEmko2pcqt84gXeW5VYpoYqWbTvf6TdNXcNfNRVKXvEAyfMpFAqykP",
  "key25": "4ZQnneKxdc3v6P1vsn7JNA9cG4FTJMyzfJyD7Q4ggxN2CTUdUMiJVP1FguNcS3ULfagqrjzHH5SMx7LAtzh9uzkd",
  "key26": "4xMpFAbjZfnKRRhtD2s8Sd44J3Mbr4Uv6gGB7Hogg7w6zK2Jaz9DwtGiwzvTNvMrmqmwyM6wNTRGdrRNnFGNhr1p",
  "key27": "4uBtDYvgpYu3vXvNDzsxFyjQQHTkYG4DTq6Vs2Qw7Urmv3RkQPCwUhe7auwjyaDckRAppeq38ZieDEtuYXYMSzG9",
  "key28": "xCwPQbEJmuy87HwyCyMx7Cm7wq87fjCFD9pdw59NBQ72uZE1ePkfJGGznQfRP5EZL7DtzSsWBGd94uCBmCXttHX",
  "key29": "sCBAhGYPtidGpwdeGZTxpZhRd7FsB62VjpBcvTmeoypcGtnxrNxvjqgXhfyC3uJotLpSiY4f1BUerzRqLvcSNiy",
  "key30": "28UKqTmWPeL3MzEL3uvTqL2sMqXpGwD4Pmv4GZoyemBRitB8VMAs6FSmCTCi3xw1dLKXF6nwpGpeb1NBmFNKMFvs",
  "key31": "5qi1eUu4w6MmDcNeSArEVTD1NzcxoNUvW9xfBJwAMsQcNBNVvR1FHGFtvSX1G8LBYpDWso8quYRpwTyGpahSTeZG",
  "key32": "5GmR6VMRU3Xf9GLKvZTgBUkj5RFa5ZFxKwo5LDgQw9kUGFjk7C9gRDHSbvng7RxBqovSaywcmwXckKh6d5qmv92i",
  "key33": "29DGHjUSDjekgAXr6EtDLhRLTajCci48Awsjv6dbvzE464Y2KhL7vzx3SRLUhUdMo3WbiUip1Wr4jkRm7ZrDHXiJ",
  "key34": "444kJ6kAu8TMLxRB5DihdyZum5qKZDsx1JtzjZhCBQfixLDdNF5k21xRvTLaJ5WXQvXLyPjeAbZFye5ZxYY51K6Q",
  "key35": "sHK3uRKixJxQcoTojsMs8ncYUev63488Xiz1BUQfAnhKoFM2v9tLPbakyDCyyNBNKgeR6YeVsZfmmGubjJkg8dw"
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

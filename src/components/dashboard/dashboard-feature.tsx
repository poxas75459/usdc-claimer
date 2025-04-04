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
    "5NL7YNMVZ3vb4eJkeGY81aH2LCSnU1RL2f34bUhAP3vhWcUZWPqqENmmYozwSCzhZdBGHq2cLSBbfvdLr6AW7JoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZKmDY5Rf5fv8HR4A5wrqtUUZenTC18DiUMSLG1N2EJjgddE396Vtgsrsm7htTZpEgHFQQS3jxy3PDQGBvDNDhZy",
  "key1": "5K7sQV5tYvvT7nrPyTGLyYUCeQZ2odWFQPreAQtkfCKyg1rHYHQBCZpJzjAdhiEroa3ewF9ErdDySCZpo8BEzifE",
  "key2": "2E4BT6Gspa4EQPJiHA8SrLRDpURjQFhnKu3U2iyvfqg6yoWPrVroibg43o5GVi5NTApSQQu73WBYNNRaLESFfewL",
  "key3": "3hPYHiMAmzeoKzKSgVaVAqiz4aLH694oBrSs3WCsMx3714jZc6AMjiG5uGKci1bTmuhDzeZo1qK8Yv729x2RAg56",
  "key4": "CtjnKVB8ZoUaFRc9PQwcKX6svwy4ADDxg151Dcvc7meh8J4pY6ykeXmjw6LX75Zog3KkW1uodBVa1Q9WomVvywz",
  "key5": "5G945X7jqYe4J6V2MHr47bB7WGeodFn3k3mMYTxqSa7hobocTbxn5t6NDFGaqELKtPAF7U5ZjhrN8mfNqkyc1g5C",
  "key6": "4Az8PCY1AjWzqrLDRPtMjyQmMEFyqMz8ASE4EdjL68umdGwWWccMkBC5c3YpZ7T7L2uH8Tv71pudBvXXxBZv8spb",
  "key7": "4GgopiK6fGuFyRvakoPyiQd2QpePXkL8fBCSNG6re3KLZnAopUf8hVeEkR228sJw4JQxEkUeTuVBC27ki9oKoNUi",
  "key8": "zPjf2f4TRSd56e7CCedHwcoTeawRtxMX25eTQRTaVR7SHY2u88fDRPUxvKDHouP9YziRTJNxka8L1CtGgBS5iCG",
  "key9": "44VQQQ8gF3EhK3Qm68yRP6seD8hPRKSZNAuY4R6chjctPLxPHGL63m6u2FVEuM7UEC3SEirRt2bS56U62nPen1tA",
  "key10": "545DWtxE9gaCLabzpkBAhwZq6pVcR5USxbVsBsvmV35vHnDJinQfJzKgSTNr7ZEEKDvK3tDHmykE4XumjRVSspQc",
  "key11": "3vDPcFt1D4xfykJKxV85UcYaD6V2tfqfzssb4ocrXSCD2wzFNrJKPJydxN5QBtwR12aTgo5hmsehB8ud1EnHnsmv",
  "key12": "5qupBBd9GCtmKTyK9yUytQcD8UrbQgf9f3XPGT1vVD7chCd7MHezjkqiaU5PTCHQRJtsxgNsQWFUwFj9w2EncwBU",
  "key13": "5sNe2ciFvVEZkEbDEMbaqZCXW7uB9F79Q82kwiGeCgDd8A2qnKEEvXS6NfbmkWbuPApuv7NmAz64b2vifjoPFnpy",
  "key14": "4ydz3TXTatv5ypKXLvamEeTiKEoV4BPkodF5pA6v3cETySc545NLbL1M6obALzXJb5wiTYMhuKvRyRJS1EVYrLuw",
  "key15": "2LjSkEHumRHVS83gS9Tqim25h14wy5N49crsL9oro8hUczgFz49wqYjURaiJdEb7hkabUjN4GKwmAf1L2ZYHrivh",
  "key16": "UdrAWe8oKb8KRzPi6dACXZv6cmKwzm5W2RfmqopTE6p96aaFY5Qu3h4349piHyMku4VY3oNWXkdAiQvzV1kiZ5r",
  "key17": "423V1cNXp2Rhf5oCXEKBTkixN4Hj6zEzEHihw6n3xmNUnJCFnbU3VtN2mSNa8QvPgS3N3UpbQp8SBWW141dH7ZXN",
  "key18": "5u2gyT9NhvEXKsFo186CgMPLWm9Q52qpgquSCnE72M7cPxms8eQLadpRi7kbBhKSm4eS9FQWNugw7pt54mUYuqdx",
  "key19": "5UEKjUoFeEh8iCaXG778F7XCqkfAsqsXGSCBL7BTm6sFdXZB1guQDmmAoKMEeHJNPz3a2NPCfKxSr238omokUsSX",
  "key20": "4LcPssyAcUSh8VYoPXquUfZQbjeDtx3ps97MBiZVCL99wGNHC2L3WmkpP4BqrEYB6QyMbMmZHLpsdigDFLm9DfWZ",
  "key21": "5QNj1bkustQdWPAuMd2Nn1W8se947YF2g2Yc7yfUVpPvQk2RabHJJXPjwCEiG5p8jqBEn9FLz2EYVGxpHnf36LUq",
  "key22": "51yKbjotyXX1R4ihu5pAgAh2XSPVGwEGNWrtkF7ZqiE7nj2ixJu5W4fgWzGrY7ry4vTrYvVuCaZ7q6FbVgmNPbRZ",
  "key23": "3WZSmUMd2hV9g684Escy26nZxowpmdkDS1tvtuXuisfjdfNWTHQUZwimjWPaArvmPDk1XLPY13nTfKnrwa12Xv1Z",
  "key24": "4c8g3QTrR2oNny4qLteVDM4WaogYSx4URV1aT1Zmewu81pE9rY6rinUbqW8nUgvzLQsshGT5DjG2t4MAo3i8Jw3D",
  "key25": "4ceFGqRnyj6tQ4j6o853ztU5nFJ75tSc66trzQLNYZTV8zhJgPk5HogQEb144JuKJQS7UayEhSSj6z19P41czS1L",
  "key26": "3WCTWnNT6gS74CgkrnRniXgbMhbCEFpG7YRyjUTg7Tdp42uoaauYd3gfhzqURdYMtuxkaHsmwYT4pz9UwW1eT64T",
  "key27": "262PAS7Jmdost3ZjhiwLjGb2csDPwefvD5vocyjn7RaxP6fBtYGAhM1F4NFuLcVqyXGZew1PxpeswFBrDyhd5HBz",
  "key28": "3UrePF2CDW7Mk97SVJrUpzuPBsF7mp787RmdpKnzYr8uzZ6ECEVGugNjAUcvnMkqreCVhuCGWNhRbv5J3rqwKGZE",
  "key29": "4f9pvZR6jbEfzuXV4TUdD8s36bFCqERHwNcLM4MknVCVX5QvV6XpUWuGssQYyA362GmrSNFkWWGxBzuUjPhP5Nnj",
  "key30": "2BaVRgtCBpanDmB3CS5VXCCtMqDytFKwUJathN6dkpHfX5EamXPMiagRs2Xn4esJtdSKBcg1XfEMz2R9pMsLQT8r",
  "key31": "3DgyPBnuNPPRtKN6SiibmMEQtAQhV7PA8wxPN8dNPjNUsqAzXksVb9eA2ET8niSooy3nSTDsy8va6eJkLCGCFmhs",
  "key32": "26CAvBf4SsDkkfWZLqSUwUAhy2uqr7XELdug3DqsiUgDu543FikMmAxz4XMUNpwvnQPtD8NjLRy2SpugpHgoVDG3",
  "key33": "ReH6psZs52cLx8xR2LTbyxiW7SvR6AMGHNoJLyX9HcdiaMKyduS5wyzrmsiZgfygCfAmzny7T2AeWMgTmgRxpRR",
  "key34": "qzf8v9rmn3nGZ1PFd1twut2mLSjpqZopXrbzmJ8LCddGn65r7PMdyzePi9Bst7KvAV8vAgr5m3nMas2mrDicfPx",
  "key35": "3hExQAvE9gHqJud4UNRmhsL7BFpNWfidXnRnDk9tM9HKxQ53jAs3DhjfSycu1xXJbMYZHBu8zbEgMav2pm3Lh8ZU",
  "key36": "3yop4a6SzJQxDqacwz7iKTyxvkWdapdgVWpywKJdP8u4NhwGN3ZobyH4uhXbPioqGE8Ng6vBNJQyEtUJcW5EGvfg",
  "key37": "5DgzoUSJ1toYn2zh2exGv2Cn8AT8QRCBJqC9sdbQGSumbtNo9Sk3qM26twDWfPao9zSPYCjXF5ZAVEtRQCKfucTK",
  "key38": "3jtCicuLhyEZpYwJKpfxSPFtauQp9WtYw4raQZs6eJzyMo5ao9joQzrN7VF6Aot5YbVTTs4RBn3jgXXftH4BT3yL"
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

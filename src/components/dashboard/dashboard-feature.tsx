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
    "2KxoSG21fHztT5vK8SWK5cGFxVjsHdmMYTGSW8qF4wcdgpa3UsrX5rFq28nToPo6v4dTQQRRF1yJawHxBPD3Fkt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ag9TAw8Aa85yEpeYdsfRFZeoP3XrEtsyzRuHJNqpRGhkoMjCL2oPvRYtktmGh1wnghh4w3xV57FZAYozuLMGeU8",
  "key1": "2vQ3c44T6dEhqsEkussWWPMEw1zBGRx2LGCLnghbrFN3qJCBcXYQDdRuJPKTyiVMfnGLLyqPvBVyDJ7Y5Qk1Tbg6",
  "key2": "5SpVgdaK7GKi5c7D3AAqe3tJAbcs7iijzYgW5G82k8mPcuCoYMCEA9Ycp2aZgNApoSaiLgs3EuJPd77Q4bvELAJX",
  "key3": "57nd9GV4Gt4M8tRj4BfhXhHPPn36V9HuNkvj2F3X5zaS7jmtVEDCRFp8vfcSxbBbfPfaxcZyDfFj3gLmizDso9vK",
  "key4": "3J9weUnnoZzgMGBGTsRKdou5AG2g5hL6KFJAJkoeTtCx1phwCVx2hZDrF9rCJX5iKeUS9WsbmTTTAAmyxdB51shP",
  "key5": "5MRJXma9txEpDggVc1NtZLxzEf7iWEgzE61E2LoqMP8H4baatPKERPQCWCv5igFeZkWK8SMrTkUTosNF6yka5nMP",
  "key6": "2Xhz95dfgbVqj84yqTbs2NAQpmWJ3cU2kHjPWNHqUZFshvSoAAGnc8u6kjFazSJ5kcmuMumtnbaqYSFvVB6xAcrB",
  "key7": "5NZM3PCndSxFgKxr8VbWKyNJ7vEZtrPAU8URcYvY9qkjWQbgKLHAXhkweKLjHifnz2H4eTqAHGyst7gPSE1SHaxk",
  "key8": "5wzpSxmx5PpkvUFAz3eZvUs3Q2Vbssj38i98gCxf4gPRHAZ9hBRAxSUhjvDoVBHNeQQGqQjE2CxGkYK9tejXMFBe",
  "key9": "2DdxN7Lwr3C7N3SheZbjRvuPkaVPDniRFKWtC9PeW6adaUuDfokYGrLDxFZmSJxB3e4YpsKAoBoSRg2zaKWM3Uvr",
  "key10": "4oguGcK6DbgWMuAKM1HkdT1f97oA3nzgGJRvdCNUUcrNvygFAsd5MG972SF1p8xkoVeFMe4Qb7aJEXtSqQodXqnX",
  "key11": "51cbjWRrrgKxExGk2xbunhZ1SQYM1vqW2Ci9XR8tSMQfyReKGCyQK8xcztqPh9qVZEyJAcCWvAReF3mgxycMXmz8",
  "key12": "31WTe2fYcESARxLwbS3XEsCsFW6KuGppDUk6bSwtNrYw2HgwVUbbSDbwFXKtq2YyYk6gGoyLCsovTKoGE1LgAAgi",
  "key13": "Urh8B4KYw39qR3VLB9bewvLAM6qYs6jFocSqvcCuFUiSyjXb7GU4Ys3efc3vf85vkPQyH5ps3xZX8LHKx5mjVea",
  "key14": "2c1mGtDJr3BuzwtyQ4bpniJHgNjAyEphh4WzcSqS4eRoeg2TRKpxfQeyodHhFJHRhz68jSYzfEAmYFvsRLX1Fdmw",
  "key15": "25UTzy7iLxgMPkr46RZFw7PzDvdd1vM43aQp8BVWqJjVForEQxCtohz9mQFcq4YNrV1XFsggvkX9mbxm952UTjer",
  "key16": "4ZTYPxdJ8bLi8K2BJNPVBzxfyK7JRqhY3THkguNMVdiZec6cpT2Fu5Up4UgHEJfMGSN1mHw4YmhWGJdWPvr6SL65",
  "key17": "2X2bZHnfifSQxMFLhPSWTchEepYbqciMWkkbrjUmZAkjmDFgZjxY7zC4DE1CLuy6VQJazFhd1eQWcfDowuVmLpZv",
  "key18": "4qi8syFmtKWEvQTQuV2DyJSWmVyM7SSBSkmiNFhvNjWYgHGaeJWvCD1GUQvhFTMcghNGWDg4T9pRDvVfz1jSAHxq",
  "key19": "4N7pQcoaiG3nBs99DVtmfGePutwSvkhogDxgXHyHkBeJKeUQTxdtdRgotcSp9vapsZvrvxGGwJdS5WDXmr6gK4jj",
  "key20": "3o2KvkVx1StfLUj1C1h56PVAQZb1odaKugZ7faWLzTQJxiFc43Kswv1SqX4eMFt7ctgZeaH6EuPJWDAsvKGDYp7m",
  "key21": "388XUX5Dynq1gHv3QcNr5N1Yybnfrb6mbeZUHtYajzSkfJ3XP4WEQxGXCnBNe6mdneiH33uY2rtW7oBXJC3nPhiF",
  "key22": "5bMdcwtkrpfdD4kAwdASxYVbvmZQWZzqgWWiNCbEnY7HNEiW6936CvGBHPgYkBw6Ys7kVhSnktGRpMUGgRqUzrn6",
  "key23": "3nGzmqttmna1VKynYTMerJTrA5Aex3mbqK7A998FfCZvRyKNVU898HcCYfGqEpYrVw81diAyGVqqTPw7m5Z4E11f",
  "key24": "4uifaH3MPAEhV88caaWrkDDpt3EHAebjWLXD4j2UbD51FbP2YV8DfcyiDwHbTYdr2DuduWFpUfRekmhwzuBihk3m",
  "key25": "5MDHR9RHHr2TS4QbDoRYMLVae6GpYtmJPpUSVZCEPxkWjG5fCWJhqNfGsk1iyh2ow9DkSPMM5VuxW5eRtmZV61S3",
  "key26": "2iFAwV1Ar5KLbsesYSHKWAn9vKxTPsXV8Nonot4KqMuHpSZQWhSKKHPQrMokfmF4NCqLeUvYBYRo7bDy4dp4qW9o",
  "key27": "5dCex8gFAWs4wVj7BtygonwW49whugY8xqXZ1Sk2xKqAPiaM1kULPnBCmqHXupKRpTTmt2uSoRyk1ESKtP4HDeo5",
  "key28": "3w2bC6ba4cHtYEHyWkd6X1fxEQLaaBMthBH6ddYWa37TfgcWeqFtarxgq6kcWHoBYJ5B36oBW1uPhG4Fu3hJpJte",
  "key29": "2AkgppmwX5EVavvmpzzmPSQN3pvpXJZ3piv3JqkJhzgfWz2DMBQpufVittfDMrNuvusQqGiYTqt55uvFKvy1fDWd",
  "key30": "2MzKeKZBrfztNi9KeVDJhoKwYbrFJaj8TVsuHk6be13BSJ9Q2SwktL9M3gmhpnmC83AWhHtLU2ZUBymrTE1E3bdA",
  "key31": "KahGDZP52Qu9GXKVdGL1ZjDjoujKCsoCdsQaVZhPVK8TBaTMp35kkgRAmNyLGtR9PzfpTJ1HD3HSbwZAisBSHVr",
  "key32": "5dUni2shaNu1FTpn7iZdRJzfFSjeCN51vkfDhVFVmVJNuWdSZ8pBpGBXrgVmz4j61rSxZxcEoUBbz61vxCR1pK41",
  "key33": "rKGvQKcbHcAyDXmEv9xPnFagd8mK3e1zGs35vzBW2Sw2pR4LCmbWyVgzD4qR7V4WTiqUoJ3hURFcJAfSB2w19ZV"
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

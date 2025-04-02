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
    "3acxyuJK48gompgTQAPSFk14f2nEpYRoUERbHfzQG9ZjuNFAMvjHk4E9TYkJSKrjPkMhNbaUube65mhhvn4xhqgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKgq1QkSw1HksjsCu2o68vrsTUNVZfiA7yu3bjzEZEKMJSy7TivFre7RxZbbvMofVQqVGPhV7cGDSQwd5TtU7FW",
  "key1": "2v7aDuwrtgw7NFbwHTsqYdo5U9C3piVJswVLtfVeM3C77MZ4RKNTmisBjMVPBGHpj4eJKrPHwjKk8Q1Mbu93HQsJ",
  "key2": "2mYrmQTmC1YrAKKeZECidEkGEoV3AihcXfAFwz7Kr5SAymiUZ6Ccs6hqsuVRDh8kosbroksg4hq4y76eMbjk37Gx",
  "key3": "3KGX433JAKvEDVYEHLxmxorDr3CWimanXtW4frrmbpaiFESFpSNe1hPeBV27piLMspuBLJvQ2mKsehkXr8A58DJm",
  "key4": "5T4V71e4p1vW5kxvm8vV6RaGFiTnLEreqokteJqU4Qtb9DWdAGupADoKyWSz91G6gvLD4Hb1zxDRNS6StL4e7tiw",
  "key5": "7Z1r7EBPPCey5iaqcjiraHjknS3ADEDA3buBuHZw1cP6cezUSxx5yZNFR9MyPxj35SFBHFbsYeFW9jahbWhfeob",
  "key6": "3yPG2fHSKvKuRf8YWUfGzWHntBWm56pamXRU3mdPCGyWfkjdUbegXMU2fpWfwdjT3x21vZC7Awm3GVcxhbda6kHP",
  "key7": "5Z2XT16ifEQeSW5jparoL6rJxjS3NxMDM6rtRTxCFZ5yhWauqFfNGkNyY6kpi8cLVpbe2ay21Kd1tdyvV2hgG8Zr",
  "key8": "4Qc4aCp7zpcwcGyWxnsde1HfrbdTCExKkptYqaXMvTsitAUCPEDKzaiMoVW5kNXGG2iikVh2K8F3yVJeVRZzABA4",
  "key9": "4BY5qqbmiod12LdtfKZcZjrU79JLyuVQEEkX4boDTTi3mrewcpLyyXCyozkUNXxfjMK81cQS4unnLxFJRWuzg6y8",
  "key10": "5o5jMTNkWuL3BrpMpqu4tkNhF4ESXMu6cFey9JGp5Q2ksSKdKHnTcSFbkWG3meQaR28LwqkNcVJnzzFe4avHxN1g",
  "key11": "3NLzjaVg3mCQFftU2HguKDWRGEeM6HWSmDonC9u61gu2vVScGh8cu4jjXEn5WcvqH1XHvs3BBtjku99Z7Kwoo4jz",
  "key12": "5b6wWdGhJoHguMgfypbfN6obp5r7Y4HLzGFhTygkjQPMRpBsUwrCYSFoJtvJeV9cKUUeeSPan55uUNvAXT6UzXam",
  "key13": "5bLnCgHWswEY56VWqvKUvqYTPfeUdfSvZid85csrgUAknPuPXqaW5yVViEBLXzeydC2CP5Cm7FXcw9ndNkLRAKbA",
  "key14": "2jF86wzMCe2oxtVjwuguNFnP4V4zHrZSgZ8oMAECHbngDytXE7h8MHbeR59LV4cZ5xQ6yxzSv1JfEwWM82CnyCLL",
  "key15": "3XRAyiZQs1RQLn8xC79LKibV8E3QFLNjheBgji3uy3jVke2vxXWp5q6a5XRTSTtpUF7Pqkns4eXoAZYV9dsrDmPJ",
  "key16": "yvPYDRKXZmfWV9WuEELhQNk7J3yKLRcyV9rnz9XFtkGzTgiUe9pxqjCGUpHwJhUoaPCra3ZMgJwsASjMwgkfPne",
  "key17": "5YSHfwwxikbjZAUsNfWJvcZYx9YzabGHWgr3M9xXumfgeM68FKVAuDELbWHnS9zfLqVFpm5pRPrfua3X8JNNYCXt",
  "key18": "37zdLXfKDbjJroTfZ2n7ngw9QdzgdgwAwrZhAiQBJL378Uzq2uJyXVohmhkCV7qgBNXdZKXDXGxEnUv5HgL1vNHG",
  "key19": "5MjKjQHznSkxbMQHgd5yyAR5dip4capybBR5HPb9CxjSkLw3jdYvsGwyWGGyQyxG1YmoH3VBXzB7e5t3W5RXNxK8",
  "key20": "TuDDkY3vryX8ZseSmxsdNCr1xr56yvyJxET4qBfuW5zUvx9smvocHRRbxGaQL2uVPwVswZgEa3RWoQ8tWF3BLML",
  "key21": "3BrBCaTpH47pbVMRFsuwtFB87d3ezJjbSiryuErJrgRakPaDJswd24iYaVcRt2i1L1DdEwdXtHKn1cVtNdnvVHAD",
  "key22": "4KGYp2w5XC88tGetdHFAGXQBMJegjrvrh7y1i94nx8W6UQHqBXBZQty9k5uaPKcwHDXtQbqkkXHxuG3XdRmsqXx8",
  "key23": "5n2grn3zkDsbm8Auk1sp5MEe8cch3dirHjhvYeyfib8s2Lyq2Z2vvswoYcGrf2B4qqMqmfBYGBdtWdUwh31nU7Pt",
  "key24": "2KH5VbQB46z2nkdZbY2oMsp396VCyVqRmrid42ua7XkANRjQLv2oxv34UtMCVrkt8SA4MYzxXU2kA4kDog8sgkwq",
  "key25": "2CGKnUXTrW6QyKv38QJHp6G7sjgxrWA7YaTWip8jJXFvs69gtrkLZSnyr8FBhCtmTkidxnMzDrZki4uFwiHzTNzN",
  "key26": "2f6TQ4odKqnPtn6tmkNfAVNbZ19knvweCceTwSdyVhy9PCnAeA1K4pKyGuX8h4ZnVkbMztmS6WBYg6eVYM8gsH8E",
  "key27": "4vCLmad8PVoQtwmqrCbVKW821N9w521nmh893WMTissGwQHdbEmgYBSCfZG19DHjpZ82MHJ54L4umbJbE6DXub7T",
  "key28": "4AxCjaGmUG3eCwSAd3bohDjwyntKwEPRrJJoZ7gvzhZKCHL6yKhJCxzUwaR5GnYppbBiWDhjh5o6h5e44ttVFgzh",
  "key29": "4wLMDQajmFZmp74Dp4oeJ7XeByNX8SvhSSZq92vqq3vSmQMCTgRjJYqjSk9LWZhp7yNkPM2vXrC4KFx1snoXQtEy",
  "key30": "4rkVa2DsrjrnSmH72DSdX3GostW3AJyZdsx2QW66KHaYHBUuuiAg77ZqVRfejXN39kLdPA51je8srW6J5Zi3rBcn",
  "key31": "3wS7N8hCuAwzj53oUdbM9sEwBotRtY6fVLiVFyJj45oigzXppUWgtpeyZ57zpvpgWK9P9pSc3ksANjoAth3Nwa1F",
  "key32": "4T9mgVHQozocsEjrhEZQSfAhyXtB7e2ENMbXppHd6umPAzNyzHjN3L59ZW3eLYZXsq8JzoRK1F1jFKJ9YwF4YUzk",
  "key33": "3fe3AXxZ2s5bEvk8YTpK9VL8UHKZZh91hktMoz46iKD5i2UF7jTw4Ezzz55Wu3ztgzTwiGotp7wR9baqTdfPzXmR",
  "key34": "45fYCpr1MeKoi4P7wArGd7U9cEss6fDEGLptcoo2BKeu9aBwQBLuvoPrmUCDyseMdF5MC1W9QajbDoGZKW6YEH5n",
  "key35": "44KHZbyLc6yNeRBJnM6pjovsJ7kWp6hsCEbYqhp2epgjtmdE3pcuBKUpzQqDLbpykHYHqJMumpPD62TbyDqameMK",
  "key36": "Rq6CLnb4ZysLxdYmL2Lob1kChzFbV17aKb19wXjDNZ9Qvb1V6wPpNPfnzHv9JT3JnLQmKcsKz1C2QrWvEMCtxdq",
  "key37": "2ao8Vr61WqjksoxrabCbTvnrEp5vLVuinRLvv1ynA2Q9qtPsP3v4Ls9vK3bALcUUMdywjTszArkXRWpxVYDrWpLb",
  "key38": "7uEg4qvbS19tSsgdDz3RQbQxCs7KevEW4NgdrPf51trxPbYEYie3d8H9cAV65W8ofQcjbWkvZLCuWYQNweMXMEq",
  "key39": "225Z6Wm151CqeN6GjFSWtcWdJQAHHEi7LpRECdobhCezNZfe9yyWvhpmQ3EnuZHdtyJMrZ3Nas5nVtHMPbRLzTLH",
  "key40": "kWZNzZe8q5joQYyJny45BCXaBRYohfResdqTnGjE4Fi6NpCW5eupAxNxBZuUmzjCyWTbx6fdinjXNwTvAjdv8hg",
  "key41": "4ihvmtS1ZV5FE1ZieZFzUdY8t8Y5gspGbM9m6vfxcK7qmypUd4o8x2wdjdudRoczniUPX6NMcedy8YnaJ77gX938",
  "key42": "2oUrxMG8BC4yxGGjHXi5UNfU4ZcryJdCTxMAZtozANWi58weBHHDinXR3fFHwfxum7Jmpsdwbn4vv6dmBJcLuWTj",
  "key43": "2ywxgnwYcLBo7sCo7TrZxNRzV4XiM5Hos4nZtPrj2mZ94DRF26QXj1VMZ7BL1vYc79fFnokfz9zNpc2dfcFjEd6D",
  "key44": "4CBXQMmgpra3L3icGpxVbR6Buj6ZTetJYCMrW2Myoi9UWWhsHTj2FDiTpyYUYzjyzMthtC7qEDS9eeRvvbh6adHn",
  "key45": "48acJn2s74Fh8Eq9qcsxGbMB8GRruKXGddxXZk1rvLiDVfwv7fKLQfes1m9zEHyr8ucTYR6Cn5NNizX6cCVQUNZi",
  "key46": "3czo7qtqdQu8gVmZHRCqfo4N2GicNuU2ouL2uHVfQvVGD1kDEX9K64QbxXLe2Xs6txhtgWuc4qT9ZvvCvFh7q6CX",
  "key47": "NF69oiNdp1wgscD2Sy8jstruaKiSd8VxmS6jwSXVG5sQRvhpgzNKehLbmQuqsgrmmEn6Cq3L3JRMASVnyLGkZkt"
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

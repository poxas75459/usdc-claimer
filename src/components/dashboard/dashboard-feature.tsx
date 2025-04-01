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
    "Yrv7gUXvJHM2r1hrQAD7aZywdxZRP9LGQaZdxfs5YrswEwzgkp35NAzbMHpNvMPdPQX9t12dAp4zk3Gk8kTU21E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oEKtBvrtLnCBmSjkDkqTYLZjJz16V2y74GQ6nAuvL5Mte5BWZje7ULzsM25odoWiv5hADZfdciTYs3xrvJmAYw9",
  "key1": "3ftqRZjwaKWinEeRABY2ouNttQwGLJkr9qPc1fn4u5Wi7JSpDmJ1rQviRkCisabFur8o1w9V5wQ95EjgynbRCnn4",
  "key2": "2r7EAqPK3i98HgAYZHJRc2NdangAmVoghFHskXCLWtyFMkLKiC5FESg9yZb8QPA88xQG5vrMvw5C7SWE2ES9uUpZ",
  "key3": "4FmZJKL1zyK8NVMJ9qgzFD8odqL1a5dvj9qQQwxaPEpNKvnnJmhR7hXaPVkNtma3jp7qoQxxqxGKihXAJCVH8xcy",
  "key4": "2LpBLUuCePZ36drxfQUfq8uW3SFvWbzF2dECUAmBFPjMQSbGbmhrgxBmk5QwDfBgBpR7Unc91ZKxivsth8V4GqDV",
  "key5": "62FDKBtfScnx4rGFYmpCAK8pxMrzK7YRc6BZ3cgHAYk7nkSmrw4JTP1FVWrQTbseEfxQwATTEED84bsVp2kMHLA1",
  "key6": "2fxZEwN8baTEuCeXXvSiN4jF1Pg81JSafabhY2cKMesJ8CJ7p5q43EbtMqTPDfK7FCZeVtBmxh5Nud8exketpgWw",
  "key7": "5VFxEWsDQfkpys7G7o8KA5v1m8xUv6xsQQJAk8or4nuGuGfNYGS9ecWydxX8fpVsikwopetCTFYpmVjTuywhPw2o",
  "key8": "3MYLekct9gCPEndEevZ7CgqsGhv9gfwCnXmFzN72cRgX77DiajHdzkJ7TaLTweccnygzr12NsLsDDCRnB76aMX4s",
  "key9": "56Kex5WXM7e1qDYmAwvmsgFyznAjpEztV559z3u5vFkdBoJpyTCKRjDCbTMDEBB2QrCz4T4jnkBbufzJXxmd2Lbm",
  "key10": "5WL12Q6VQ97GMkDVYGB7mN1ceknXAv3UijojqdxufxL38B8J9Tjc1QV4fuh9ufBjD4tRgzZyKgFxcNcCgKXvrfGv",
  "key11": "6vc3gVkeuj2t3z3HvRV5jL8MuWyQM5gFPAkMHfqwJvHYvhxnxBPaYtnQVL8VN42Vduicu9fvovfenX936HmGnx5",
  "key12": "4x1XjQjmBLizQ48dP4M6CA4mRocoRiw9MkTRCmGfLciQwgXXjxzWWHCbRCB1ASxkeb9HtmetfQBGJ7MMQQax5mmV",
  "key13": "325bmyYDDe1FQVpjkLD4sncX7LSNMtfeiXS5yLVrXWE2shca8Vten2NrjYHQC7kpc1km8NEdgVi1HbiXapb7BD3H",
  "key14": "41TxrVXNjBVyCWH4RsDCs6EK44JtKTJwfjujr1rnMsUeAKS9zrpANrF91TyfNTuux67euSR45xRwVRzgQgyAGs4n",
  "key15": "45D4yzRvtAZZtGLbxm5GfTpPgLQtT3YWhRwqwAGBLsLpFuxqVJfUBahGHckb4d3LZC8hQjyRrKa2WRdr12TNgkhY",
  "key16": "3DtFP5y1At1TreanhdFV9BuR8oexM7wmvkwRXMzKRUpCPvtbsKD4p1qN42vRda9p8htkDK8ZktPaYKU8SutCotXW",
  "key17": "5hripsN9PkizHuwo8AdL6yWexFXTfBTaHnuBoy48HaWrZagypHzE2M9ZwPe28FazqZG81k6f3JCWm93dZGAHa5G8",
  "key18": "5mASSauvJnVRpi9288LsBhBo7221oDw5pG4d3JZ6wNdbiDa1NiV5VaA6UCDDjBfZ6oFZSnFGCjHmXQ8yF1gEift2",
  "key19": "44wANKmNQi3p4WifWgFmrfJ8xG1JN4GmPMQJcjpaVsW8P3eTrkfCwwMZR5nzsT7T2TgbdBkeAcKJekHjx7i1F1QY",
  "key20": "488mMFcLPFWZEEijN1qL2NzkSHJiekR5aNspwcV7CofAgnrapSuatwFPQPckQPmsJABG4N22L9pxMRzHpMniNhhE",
  "key21": "2QfDW8MuHn5pgjPoiDgJ5pDowsJ4KEHJqSCAkE57uFaaMTYk93agqK1kbJscybspN2tPgzjzQZZW7sjFRbFBRQyC",
  "key22": "DWRP14qjUAbwUQPSnrgU5U4enq71rinVqS8XFTHbovoC8LDBYyzHzpsSAJm4A9CakayRhMuBDKWF4Wy1SNtW5zc",
  "key23": "62257MzGcj2uNohUM9HgviMHMKt4tjNpJiAQo9mE7LqmguAYNBEZguqsSyr6N2qumgFHg8jgpfBsJKaT6aDPqqLy",
  "key24": "6THVvvC3LhmCoKBtEQ2eYavzVdGaN7Rfz2A3hfEVgAuc8PYFpv8UVg6CAsa7gBhiA4VgBFZkeAwsYP3zhwyBTK7",
  "key25": "59MkWM4KRCm8wUGVuVtD4jLCSDgoCDzSoQSZLB6dxZy75whQhzpJYSvLgUnGuvJ7egB4BYfHAji146cnCrfr6r6X",
  "key26": "hdGgcADq9ffKB1WNJgvaKq3WuEhbLGpyUfisdQXh6aFvYHZBXSZUw2jo7M3LkQsGuKvUbWPHerEjv1EwzSzaG1r",
  "key27": "2xfw8MHu3BKSPfnCQs2BkbBs9ZJeYH9qRiz542wpYrbours91ykkSmh49nJvE5xn88S13B2G74ChNy7vVDwCvBrb",
  "key28": "3duNb1fGbb5zpWRXRJG8UVdBQ8D8cNoj757dfYU7VyjEMWjRzVaMjx3e24hxFJvHSijbQg1MfnPJjg2dfsAoQ7Ui",
  "key29": "j5FsBffEdLDw12Ayn6Qvn7kr36a2FGSFkEuQri1Gi3wuasYBXHq45JZ5cjeQquWWLDZD3DM6Lsx7B5Hi1fchTx3",
  "key30": "46YGLmNt8idMtpPAeGdK96faPHYgpeB3nJuekNW1L1tbEv2VkDs47AtD4g5pVcHfKNZTKhbp5RJcd4d5RqjDuNJ",
  "key31": "5ULFA6WJodpa6rXGxyJvrLmNNMfneR2i2ks29HL8uEnEDb2TtG5YjgpHUYVyY9BCwLwmLCUeGdJHdTrCH33QXZ5J",
  "key32": "33HS1wBMbp6tgpJsHfTeRT7aWsp46FbUs52GA7FH6iZutF6C46TuZbSnFkq7ZRgpfi1NsWc7BcDXoamq93zV45Sx",
  "key33": "tPanNPdV3oYXbpafBv15fRqCkbGLFg4ErhfwY4NZB5Awupwz4fEAGxaYG1EiC1LUNPiJzh8u26GdzQGMFUfg147",
  "key34": "3PTKukh4ZJFmFAk6MyBmjrfMhbmjFe2avJxt6KYFvyc31q4ureGde67A9qwC8KNyeFFNNRdUguM1vRWSTSEcYB2X",
  "key35": "99dxjDjeEtKUAGrkG8W5MNeBX5F4S2LoAfHA96BhdQuPf6WghN24HkV9ByBy7NxAZVVW7vKGWxLtcg1cJwfiV8j",
  "key36": "et4iT9zKQr7Ui4qv6zU56koG3K4hyup1sYzoCDyuBMK1TLBuPqhDhKHGRZpJzWBzBVxhU7kVMhpafuqxChzEemc",
  "key37": "ETpGnoBwLZGiVGgz3w6QYkdU8RRSBcaRfo6UzKCfUU51gWHqKJkf6zQPj1Pr7faEes7spj8VYnVpEhXw6Pcp3Gg",
  "key38": "4BM8H63JrRp3CFeBkmu54yCa41jZxvT4orqws1rj2yHCj9Xt9K64jAVRmToQKRuz79rcmHvDs74cwKxm6HPh7Msi",
  "key39": "GcczyeXZpBxcMU9jRXEMobCaEbeiBqmTnrGSzNx4uRzD4iCD6Kksdz1mJz19SjHPoudVVp5MYb7xESZJpTQTwZk",
  "key40": "3yQ5t5BPqUvmWYYH2Wj597rmNupWqFHESMBaQBe8a4Ceqa53Kohy3XCs73vDU5mJ4tbKhhzMH5qftzQrAddLWgVh",
  "key41": "3x33bWAraR3pgzjV8TrqCR2B6qHBetQ6oSYtk9sAitfYJTaHgy5sSvX3pacuomFJNEZYZrL1jUoA2hoYj85ryaby",
  "key42": "3pZrrLoaHKQg8xjzc83ZAJhponZZUWHgYDeni3powpA4K4Yo7wsfaqSWHE3iWaxFGqTcnf3n7ioFbTiifS6csnC3",
  "key43": "5J9gRcaCLwtRQdL9rvrhdHTw6PiWwZfoNtC34f92wYdRPTSvUH5MRAz3MZXbDrniGXLeySAeCCiWLrB1zHpJcqj",
  "key44": "44dzp5QNf76R3XuMMsaN4GYpv2V1nP9ZCmSkHWytfWaZRVzHAUG4nTHQ72ceVY8LCMVVh5FMPR9AqpEBgSyKQkn3",
  "key45": "47eAU9EEAsoHqtK9YZqM9QAsg52ZFa7jEXHFqhLvXwxDFycpRvRopAHow8J3nKqh9hNLkASzu2zsUdnoVjWqfhmw"
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

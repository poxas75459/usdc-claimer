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
    "4M6rFwwcUERXFvhvGsj8CGXR7q1ktbrzQDWQBZdQ5cMDTxDJ5adZw6QV6sNHemTxSFhkDgVzt6Xhv4n7w6sZfcvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rihG9PoCKgEw3KqkH68KJyyKeU9N3axETCpjKqLCyvYvN4JhQ96hFaYgZkmKcFLqHjrG6CmTD1S1KeN2jzeJMUb",
  "key1": "52LuzfBCJ66Jyyytf1rzj6jjRhB96E9kdhHAXdFqgVNwfmViAzFyqxbc7XgfojhbNwdKB57AktcvYYgpuhtXK6mb",
  "key2": "3jMhM3hErAy7bAN3HBMK12uuHHcWNyhPUwexoRSYNRtdV7deyH5Two9XWpF6kbYYA33X4Geyv2g75RQCsNrfc941",
  "key3": "3WWygyWKt4iKMj2mprUvEmEBZfk8NZFmJGC9avnbNWB73bk5vKyejgbYcsxZFWXzemYgmecowtg2fywoUdyr78cm",
  "key4": "yWzZr5oNkN9JNwQ8WyXnrXhT8RD9SUdNVvfraToSSjdVH5ZGrbKe4mRWEce1tL193WPfPG7cFrbe3QXpBNV7GbP",
  "key5": "vhV4vRXFbncwnkLfDYicYRnTuKbNsm7zvB1cnpBbtS384rbCGMf6GGHN7LjmpzNhcZyLHvXUgxi8Nuo8dPQxdHS",
  "key6": "3ZBxtChJUCuistk5nbuWauQZTTsxQGHKEmSeaUZSxQGpcyi7DGBRjHw8LdyhGor9mpxifa994q5kLE1pb4NgeG8j",
  "key7": "298wvqZnsv8MZjS1AJ4wEs26iaHAGCchrEC6kPkwBBQDP3S81XZUqCjyzVEBpw8baxkjW6dsobNf5YyEr3bQ7HxY",
  "key8": "oX76HUDZ5SM5GNKsYsjK8bGgzuf1CNfBmbpUmoEpDF1bHPqfcywDfYKuMeCjaiRmxY5sRPs2VbQAmYSVnH2o17q",
  "key9": "jBXV1e1B3crhtgn1KYVMfwJzE3Yx8AFVt3Xfwe3wLqJJfj41kndSWiJLvY7VWBrpX3cjMaPwF4UB1bxPk5c9pyq",
  "key10": "33R7pqyJr1WM3KPxS3bKUXsh5H3V4n6gbSndq3AZBbH5dAD1aZkJk268MctQJrjF9EM5AZkKxjMsNtcSEczRF3rj",
  "key11": "5h2yfs5bBYnLaTxdj32iiz85AnoSAH2XxR6aAqqbfEJcZ58P5hY1MWhUUhQX3M2t1sPtB4GxQnv6R6JxRFmoi2E8",
  "key12": "43f9Ja85zfYJHCFkavXHPQKF6vaCFHoENTkMt6y6dtwCH1bssYvTzMqGQLZ9HVhqfRAVvHHLfWeayfQ2QP64GrMA",
  "key13": "5rYxA8oPtBxfJpTbGEsyfsqpiH5a7oUwzWbQcPuKPZv8kvYLtmUReYRuxx64dCz7G5ctyLPzSbYyeW9cob18qJQU",
  "key14": "zJr7W5wNZWHZ6e8UrrdVryJdsN3mzjqg6Y3bAuQBU8arYw2Cbexh9f4y7cVhpfFRrXUxP4oGoMcUWiFGmRMGEzN",
  "key15": "4TgZr6vv7x6GrbZecmAckUUcgS2pPXDb4eZjfc97fPhF3K2KUV5fgpEGceEmWEtDMsUAnRjwn2MD6X9mEtmvhFFf",
  "key16": "5eC5UCx2n91xnqTRRkqtAamgcwUkTMdQCFcVzY7Gr6VvbTDTyxTcc8WWPDijXyzrgvFekPYv4Ko8QFKiDeyH51zr",
  "key17": "5EE8Bo74QkndZgn8A5XmAhvLmRNUh1ayvmZnG1HFMjK4MnvFh8BF5mP1pVZVo8K9xjUfMuTvXwBkDTMEkfqZKPf6",
  "key18": "5BJR2nYN9UqFqnqaEazc9wbiePW5RUgCxU1WthtNiJCHZe9XJ5gz1SQh8sSdcecGQCV8DtmGP7pHMSSGqCHyPr6H",
  "key19": "63ic1EdYPea5aJ9vnPSq5rNksA5Detv351gVLBfLYGZSqofF6rFghMdThMgienmMsz1XmQtMbZFPuNe45mEpr8Ma",
  "key20": "3gvoNSybgivXBCRQA8icf8LpN5H23XWATbtcN4x3FNjPdvjctU1vcVPiyr7V7xmkiTNj17AKSoveqivHAy2MSkxx",
  "key21": "nTrc7XrweGSYyL7NXNkD4b1EvQpHonWn1183wnwGK5pWFpcgqdrAQuoYxxXX5kbmAAgHyUDh2ZAjoaFEDh8eXx6",
  "key22": "KL7xpgMhwEnz2xvcCLWzStoFwpBSm8DY4qXCTxowLNAFSknJBrPKkM4QbEH56aMXAtZbeYgRuf92rc67tpyLbbZ",
  "key23": "4xnqqBh78Xgs8xUyV5mvJR7DQLa5zjsy62R3rAChADRpnPFHRWZEvEaky5F5FNPSkCZxYtPvW32sT97kyoRcjB6m",
  "key24": "5u57Ct2dPemXKzCec3FyfLfeAC6DK7TotD77oyP9zeGs6UPSShoYR1VeFQBJSSx9SLCV95oEMn8fnMeix8ojCGYx",
  "key25": "8kxYm7u6QUhGJUVzWxTnPqidNwu3Euhi6ZsFuQdwgRTpy4nRpB1vPmBAUJKzWyeE4MsAYLwkaNuJGjAETAB5ENz",
  "key26": "5CZJNctzwfctWdSEF1PtUJpEo9CiW4mhhwsWF7Y7Lk9XerceNFbzydr5PETqqUwoSfXWie6Xj3DGkCKN1S8czkNm",
  "key27": "3mYtpaCxyaa7FMnZYaA4GZCCv9v2YMVzBxACSaGTiFyxzuUyEY86VU9dDs2PwENAAB2gDaerCSzWMXAFTGCD5pf4",
  "key28": "27rZtxmcekN6EkvoZpLMzXNo5CYbwJENFH9uYiPfLpHcpKCzLmW9wRBjfGs5BtebeVNmYSCZ1b2Pi5LskqVN3mMc",
  "key29": "2CJxaLipMasxFBKhUkKrAxVxz9QLB3qmbK1YtF5eCMJdK6367urs3FYPduvGGL5hJtSteJLxk93nYDDSzSua1yva",
  "key30": "2jgDwQbNsAay3XecbWN4NyLnkjYjgpPaxSjFbtoZeaU4zz8s9kkktKV4FsyffKJF5kzBXpkzgwZG2bZb4BNSdTJh",
  "key31": "3jXH5XNSpQMRHZx6bP2kFKMjdrq8d7zX1ndhjxgKrai8YygNNdRreEyhH6gBRc66PYdZkBYqppMFUDsBPs3RVsZ8",
  "key32": "KBFsTrr4uhFA6qhJyV7YJmNMJDZTWuq26YDFfZSZdzrFdF5jvgQ25nKAzXPDaM8ykZwFFYCqug6odq6zL2KTyMq",
  "key33": "2Hp5yB1FWh6mZd4eq4MgMFszuAbRTC6nKrWmFTEnR2YFnVX6fLVbQ64kcDLgPVMEsv3M33WnQg64eUbU9PBSDQm5",
  "key34": "5DnGDtKNrFAQ6TbWQRsP5GAiJjPXrWUe4ciEfYGPJkkZLCY6thWjDRzFUEukDnRc5SDERQTxumQvXeM2nLE5NePY",
  "key35": "3qLbwtq6yTpxwjhkk6q9uNhf1Hz99gddB7CGTAkCgJ48hsyE61Hj3YVLp7sg51dy8Cfu1oeAWMKbx9kmFN1dTTFh",
  "key36": "2eVGN1Eatr9ibRvPXCxRzTrks1po3rrH1KA8pDVhhMj1hazkzG7pBjR38z1Tx1HVSVvq3son9n16bBhk3jLUwBgY",
  "key37": "7hQ8RkBU71XYbZQBnWqh2geaySEK5kX9BVxieBjhGdQuHmiTj7qUj8MToENYLgtJDpEd2R9tBgRL2fAa1P5JfBb",
  "key38": "394wwxJiXLDvRTrEMu3n5T9vyuYuCC8aPUQJg7dJ5pRkNdtbbLLUxQYtkZXhNusmKW3WKJ9Egciju3mUu9j9mNew",
  "key39": "8g9EPoC8xHdKN1dqhXhMFbzVmmvzgRokuFmGoBwPJkH4vu5oDhkRWtn3jBq14et3zpxnuMigmsYPq8sE2gccWBT"
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

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
    "64JDmuD48w9m19NhdTV4Sjkg5ZMWLtgx1F9zfdoi4J7ovvZH9XtKnRQ9NRXYS8o9U1xfaXBUtsRD5Bo2CQYb4UHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q5zxAMX3hwxaHGKUWoxbg4JGdmSkLGp6fRS3FuHuHVVEyHENyBGxLg5TpBJicHJBSDkxbBgPiia6DcAi4kfqv75",
  "key1": "rrFSCA9PDpJcZeC9ei4XtK9usKe9Q9rTg35xshUjGebfVjYnDLsy4GwFUZr8jNHB1XZyZB5PxWuE7uLMffTjXdW",
  "key2": "4GsGbP8gHP6SXvAGtctJxDnsKo9qQHH56hPjePTqaTvLnJTmcTQ1n5DZYYL9ieDroHbLXXLEFiLbQchGGiz1EC48",
  "key3": "VYrVmP3R2Gx2uA8F7sbhcv46WBzCtwJkZZ1Hyuvm9vvqwMRVviBSfztWtLHnbxqSExD6Rpb9zhmy5GN2AJvkACz",
  "key4": "2hEQbq89zuALPNwAcda5KExSCpSj6QR4FVmbaGZ1QHUZ2iCZWYxeash4vGcecePDZBYjB84VH9bbSq4vsaiZMfAA",
  "key5": "4C1G9gz5D2Wz8X6xfjnuQdoo9jwXiHEU5hLbFDX8A6A32tdPzPBqWcqbTvR7gWa5gUDmEVoTjNPE2BnsNfhWKt4e",
  "key6": "5UoGHvuCYUeybHm9GwkhYUkTJ5BJNHwHYkoyph3ng2MW1FnNKCRcTqT3M3DN1ZZApYhsv1sSg79YtC5GBeoXZmo5",
  "key7": "4zgZkEHySnQttfh5HJYP9EmoCREn3EcLwyidMfWLb4cscy6np478WehLNEXjyKJc1L2ssBUVi8dE9qq6ZEs71Afx",
  "key8": "3Ro722cQ6Cpx4qT8xkS69WX7SWtT1TBwGEXj6XUqcAgSXYy3CjwKwnpVb26GPmaFitixvX6ziVn2KinGmJnVp7eq",
  "key9": "vWywenT6mzgeXVDZvHw1nkVAgtKZKseUEZoKbEbj5UmJ3oAA2LWe5TcRpRP5hzm2QhaDiiPHfnA3jCm3XRU7SFz",
  "key10": "5qfSsGcRXnfoKN3kiVyc1o6akoYdhujrb2oL4hbduvMAd9fKeF95vyrEmG634BRhcgEqyuunnBcCE7y5rzSTny9K",
  "key11": "4utAghPQGYzLzYWYuNHovMYgRM2VXk31msGE3Wv2T6kUyFTGBFDZeddungHiE2hNV14WJMfie3ENamAKc1TKbo7W",
  "key12": "3wTAXg8w27VBTMh7JjzsdFsxBCF7AdgwFmjksNEyd9tpMWdxmapaBrJwGGCBaKXkfp676HU6b6iXMsziNcV24RFR",
  "key13": "2jZPg6u8LhhzeJivZU2acRjMF6wwt79q2V4Fiprn7MwiPdGUkXVmZCYB7qzG5hF8pXoaxHpG67FMciJggGf3oZa3",
  "key14": "2LFJgP58E3SBA9HwY4xopaATRJHQHLZMtEhSVPhMxWtou5TP3ejgSi3fju1GVr7HsPeGrCfutN1QJxNAL2ffhSVU",
  "key15": "3CyTf7PKVtvbAGbGfrp7pR4t7SFMemaPzFWvfuwtjAn8uPEgavPkD9D9t6nyprtrvgoaW3Ki2X393AWA988JgxgR",
  "key16": "4a8RyiLFBgxg3cCRAN1SQEMAAHe5NLQt2gVsEdD7L5kB5zULssvdsPWJuq6YCEbDMoRtP2kLfPcC9eSCb4VF3GH3",
  "key17": "2qdHPJqpUQ2YHZLQnrBephMddUawTZBZU3W6qVBUhGzVPKsiTgMPW7MEZKhA2Vjeq4wmFgEJ57CQAcSYCABTVH83",
  "key18": "5nmSYh2cjRMyvsUEaLeovgMNr9ug1tuA2XL8zoCpHtvKf7K7FSSpJ7xWgjekq2g5dEStphQU8nJXwBKqb3KvAUw4",
  "key19": "4DDhxNsT3wKGq6GDJ7X9JdFi1cjVjTXXA3p1E19aWuLASeMU7Q2vvrdnfpCbra1bbDVRXU4tVk8JQCRYKALC34Gq",
  "key20": "3QtXy8zkpsLLAqzC9BsCRY15MEhqafMnCiLk7WfYtxrd6fWFJuQnhER3FpGyfmSofkN4BMgu9tggvnFyQ12LCsQ3",
  "key21": "5V1pdXihHH1EmTZxxu3KNChnsenhd2ha6tefMkKsFBPiXsw5rewgwtbzQxSxew4xqBna4UJnxhpx5mLkB4cPU8QH",
  "key22": "4P5jqhF8p5XpSLQSvWwdPBVZuVr9KLav1ySyqvqsYad4KBT1g4K2NQbPv7LwQG9VE2PS6LMuc3Tb4iuoZzxDbNnP",
  "key23": "2YaYe27DYxCCck4Js6fh5UtUJWvmHBy45YgfemvF4krgzunF6AaUi4Q4ywy1KLpRQP2d29WSHhMVdVU7ShLQ8N3r",
  "key24": "5mNZe9JowdtQPrywNHm69a7tDJ3MArJvcAZ7zujp1g4Vabdh3jyQVwaXCX5YTyQdr9TGCTPFJAAmTVSQnUus1Fcc",
  "key25": "dDjQzLg9Scc5sUjADG2bSHCo9R56qz9nUF9WzDZNViugMHhywU3GoyAYN1N5Kiy3KHRn8QDTDbf5dneSLQgBGEp",
  "key26": "5HCSe8bzGUmZ7SunXYQDDMhyxt32B5VpyV4qanzBYTkQkiTmPtcNJV6R5DBBDfteYpT9APBPYZLX87Ypa9cDbyg",
  "key27": "5B2r8DZQbQz2CpBKBLzECgNMKizTyZBEjaoR9xmtJWeiDANvgux2qH18tobPKZynjAikVpqX1buvDgY59uTFodz2",
  "key28": "KrGzpjCvHJFJ5HCzo1caMtrsZi14KfPprE6fXVUGndDsT33z4tQFSUs1Qk2sRSzP9abBUXMYPKuGsYM6e2xJQvx",
  "key29": "4b2Sdd5EjugzGBuu4WF7unSXuG6BPk51PAqqvNi99kTspMFskTuT4LsjvNZXvGrGAAQACjoGdeqcGu1ezPvet4Kr",
  "key30": "5xMHknnbW1tbVbPzHuEAb8BnSFq2h8SS6BGdnt7YwQJnRqUxbrdqYLkbHSmBdJmpzC9vyusWD4dxy9gDULZXgYRS",
  "key31": "a1A3S83FxwbqPfXRehg9GuB7BASe32Y6ntCrMLXQaApZ6BYqB16QAjRDyDxT4qZpCqdkD69JJMHPffTngWanewR",
  "key32": "2id1owKRMf3D2VufmWhGUFmdsw3ZGUpHJRETVECfJhamcnysprdTRwdoCJS7kWGJwJKvKBsacSJvydFtNijBLy1f",
  "key33": "3yXuykGhDstZ3Lpk3zhRW2NrF6wahdVbuNggxBGWJxTKn1wvVf1g4QB2q9LykXATY5rpevoqLr1to79Fkg6Wo2Uk",
  "key34": "5tBKhWR5HzsLWkoUngcxjPDWucJ7GngQMNbLBxPnmdvBMeyBKba2kTv326QfyprahB4gXceoRBsVRXDVRyX2h2AN",
  "key35": "3LnVhrJGbBMa9pesQx6T3RbqB7jdfuoYsdEmwuddM4rnbNThb4zpPyvEMSB3LGKbQyJ87h3YvSegS7TiohJS9mbD",
  "key36": "28jLvszcFFmVXpZVBN1TAwnuEQj8QNYtNgqH9cXTYsU3tvLUjDxNYccdF4kvn6iE7jMyDuWnwUvi9NpFimibAqZD",
  "key37": "34gSiYFLomgJai1KUn6E328UPt5zoVcLcDsNYpkbr1N5vZP6L3XepMi4wBnLKWY9xTEJYE6EsNPt7RjJaQdRe9ib",
  "key38": "34Cy41RKzSsu58VuSTnwz72nNJAv1ego3LNgamek8GQb22Y556rZVtKeVVxYppfCbGVr63ugkRLPHiK4yT93U7QQ",
  "key39": "3u3mXrce8bYvD3eUJd5WRzDzeizh6DaKq3CQzBHVGwcAL1UMpXAwPr3zBqNeqSoHzmJmT2PEK65s9Fg4v5LLdytV",
  "key40": "3eDPpYCFHFQgzMFPXWLiANWxC3fpLiEsSQv144rzasZB3EyAnmu2LoKSf4hdKWGfxWZx4racCVaqHfB2cePcndiM"
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

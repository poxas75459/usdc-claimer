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
    "27rcY6U78Wk3RWwnCeStFDKc427sc3f6ucujxZtaEnfWpAN2tW9QqCZWuNw1eD9mcWoMN9UTNxmGakEkDCkdE9mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FzH3xBvX3aVif5N5nKAXHMbeDcBYgBP1b94x7ZK7XCJHiHPh3PzZZnPKBXzoXgdiJfepLzVuPesiuPguwpKVVbC",
  "key1": "5kMjzPkNWpx2wXcEre9ELPpJxAD54FBZTjJm25AXZQhXNx7g9QjBCjcvb8TxZPv8wHyGRypyVoXnx3mycZktoCEu",
  "key2": "5AKTfdRK2ewk9K3QRh3yjuhGbfkdPzfAWKA6d6spmxA3oTe2tMLXoAUEZLiQov2pT3sjLr1nimWNf3GXANPyBTw2",
  "key3": "4vDYxqAWipqYh77yrdeXrSYkLtdD5GABe1aKpw691yhTqdzbbjztdLuuQKvYiRoNqsNyHcs48rCyby7nrH2z4Fh8",
  "key4": "5SLuMQBr3nKHxLiWLtnCycKE3KMTvLBnsJX7Bn7cvt62m76asbViX75toQ5fpUdBKB4WfEzSJGiTakAQoQNrf5fe",
  "key5": "4qC7wP79pXo6GXYqVPkEBDtPrjcqq97oBTGBo29c1UvA5T7b5y7AJg9aqZ8ntzhAoMz7bHyAhqt6ca6G326t6hbQ",
  "key6": "5a8A6rJJZwiR1NYvr5hQmHa4WWLaTxZqKA3wkpRJKDPhzC5C27tGYoVP5NUCL7r5cdfJ3tzCKQh5yhECPnmJkTfF",
  "key7": "3QC7vL8evDFnH3ecRG5bhfvndXdD7CBoCcFwb2bubgDRthb3eJ1G9GAfPiw27nWNUf3CwoyXmoeBM3cQf3y1qFPE",
  "key8": "izyfwi6GML9MALEE2dvGsLRbCvDkuSsr5agG96vQ9eJDaEW7DiHtby8fzQBoeKUyPoZHwe2ErD6qK1W4p7eV6Lw",
  "key9": "21CYxJBT216N87WE766pip6qmpdU5ZNf1Hjb4uqaj1jyTEJeGBCUDUCRc8T7s6TXSnDVjkjMMXePtSwkSzbjctWh",
  "key10": "32nYSHTpaqXPx7txnbLiG3RDSMD7kGWdGiPFaN3XmyZu47iMR6DwFy1ZpR1PF5dKWNNJcSNU58ikSnrETtguzShX",
  "key11": "4Td9M1x4ht6NbB5qs6CB3Qv356gePqmXnBn6K4HiRhN1tgkDtPUT3ybB9drohH5xK9KRRvJR9c8DbyA7RcSAA4oN",
  "key12": "mzxFg55sBxCxAhp8CdunF8ZwVCiy8bzfyTnmKRyrx5TJgEAaNXbrSAPgbDowsWL5Rf2Ynsb1adbCLa6TBTCADQs",
  "key13": "5AWeRWg1GFYVuERrFBRVL3hwjqxtXSXN6LZ6qgfaFFEZVwGSjCdB8E8zFf3DbibqYuqpv3uiscxXVK4N28oLZ9yW",
  "key14": "39AoGqoEuWEvbs7aWnV3bjpf2NNZWVERupm3E3nj9PQMrzMNx4yx4VFM5sH1VuWBriSs8TR5pMf7DYLSikxw2w6c",
  "key15": "5hGsFixRroTCdMStHvaUr4tVPwZ6kmrBT8y1WYkvJpMNS8T956DJgqDunVn4HtxzkQVyrHpqjWTkgTWQsMR1NqEr",
  "key16": "3tYs5tdwmTjNzmpaJURwhubNDTnQLpb4HXyRU7qTqKUCXc4kYKkkrkVH7YqmnWGY6SxreuE68fVRFydTGx6EyN39",
  "key17": "9AWnHe8jB9S27nZHobZrwZWpoj8bv4XscmpE8CwaFTnncCTN1RWo6W5tvUWf1RvXeDx3TS75SD7RKoRQUAPYMP6",
  "key18": "KQERnsGWVoYy1EWwRekNNuaSBrkPaf1TmgtJSYMJFSjMt5iGqm46GCZJ3zeCoq3fSCfvR2oa2wbKtvfFQJL63sm",
  "key19": "29Qf6RG11vytLJCvHC9FHXiXwVh5Na3HMNW9qj7faq3E9n1p387dNu5VEazR8PM8RBrpUu2BL4Di2vbKmEPFEyHe",
  "key20": "3mfYEQqYorjPbVZX4iFg789d33weCD1aZ7UC5stDDbvbxmjDDEY9RHgGdkNxbPvexXtne6j49HGgLfG46uhV848s",
  "key21": "47dEuvBkbEC1iqAsHChGN2aXqfyRMGC84BgohkkhxG3cUn6QBugdxb43eDVgCQCKgvNVfdkZjVTuW4DDoWEgVJbD",
  "key22": "2HAuQafBNa5jtvpD1MnTtQQZfZqgLcaKBuyjPdqo8MM2KfNCfhA4S64QrjZdyxE3ovuxX6E6ssnDsHANmeVgwrxb",
  "key23": "22NE9qrqEWiHy1U2XyQZ9aWzyNYYq5a4uzmwxw7gLRefMjXeGWdSUu8grAfWdUn31KfFYVuSVoA7A7gVdoETCotK",
  "key24": "3LmhrkTvwd55fr8o4vcBGxjSrUrH67CtPTFSPmLtcgbRTJ1TPBud6JwTFK1hbCbKkJap682evCEzNsYbw9eZd3ot",
  "key25": "35JiSL5X9Vc84YKFz87aM1r48oiKac2HqeGQ4QtuZXXVrtbE2dnDJVc7CHr8TKcX7bcbuj7CpbQWeWNBx2SMDPWN",
  "key26": "3YFyshj5RV2tuw1q8Cyu2g93E9kScY16jRTwcrqYDaiCE7Vbjxj2LKFcU8RmM1rFj9KTY2oufncf8NC7iNs8wLu4",
  "key27": "2MNBL9yP1Yi2dUTk2Ph4YKeYDLR3NBxKfFJ2VMPcFW9iNPmuCbGGJShhDSiCUn2bBnjtrUuMjwpuGtmg553jbjfF",
  "key28": "3UQN2Ue2TJDRbReT6xFoxMoEGSi5j1ua1v5BwPiuLNxg37Viiza2eryLXyyaGzHb6aWwumVBjd9bUZBMh48rfsMk",
  "key29": "4oxwaQzqj8CSkvC9cQV22DmZxUdzh8iRN1gnhpAd4m7Xc1yBvaUDUs6sRopuG2zs6FQ1GJtKR2d8TAUYtw7XhMCw",
  "key30": "36TvK26Fa9SUwSwQdeiEX1dced8nCftVyQDCZR2UCJa9qXmvdg62KfuHGMozL9QJhuPGiiicqjrgQnFWVk8oHJzH",
  "key31": "2T7PsGEotNGqZUPhME9cWzaqG7L8nNpNyZqg5Cp3Mb7GDAGSjejpzS3zjSn9FoxwWVYt3QWA5Y9KFdVdTCRBvq14",
  "key32": "38FVwabBd6vuEp38HtgyJjPwcu71QnGPbpid58hAuank3RogWQVCr5da97xeSh9hewn9orf3ffHwwwJy6iyTbV57",
  "key33": "58gt9MZVsSxZtFXWJCLWc52G1HpkAQnS7xzuSXVqACZ8WeEvpc1jsQNHPszMc5arLu1SXKb4wQdhBBZoWLmD2beR",
  "key34": "5myGy9ge36XGwVcSgU7sQ5B4uuvZiJKZgvpB94wYwMBYefbqgF2bFjsqAVg6v4i39znYChqQAKNwtLfsULgmeE32",
  "key35": "4EPVBr3gyRx7U1KMTNZhjTcDYARfuG57f232NUup1PSm6CkKfsUtjPrbX56sW1JPhK8J9fr715BoevvgBxWCBs9K",
  "key36": "39yQ4c95J7hCJQJi7DvySta5jQQiDguEpaTUSyhw4yYgty8sbqqTJHPJGfCYeXRkqvCkqprS9BXnXfaYnJz56oVo",
  "key37": "4cqDapGmst6aWsBjDCJ1WsaVTbDwidQB7hx1aPYy4Eho5mP8pUw3k9dehwQsm6RVRL43QXDgBUBGuVU1PwejnYon"
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

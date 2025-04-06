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
    "67CnjvMttekseaedwaxWjxbuebXocaE2JDmPD5tCM1yYH7sLsCifvziVqBEMyf8ct2r15TyGzVmJdvTkBYyANdTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5SkwM3NnF5uUwnMMW1MhZ3A6Eqv96UXTL9bCFPBjSCQxw6u4GgdPLecJgPjH5sVfM87n8W9fJKC27KtB9ebH15",
  "key1": "43GDdqTXtEqKnhRNvXBdrRNJJQE7rR3MDsVQ6H9HbLazYsB9p6gCtZQZrfZQY2ksbkufvhN57V3xFkRckkDvc4co",
  "key2": "2RpxV2ntWiQoWjpUe9jmCDvA2JNQBYrjdW4TrkDUqfjjzEHwfmsTdWaCaCzeDrBwvkuwHsgNYiz5qk7RVKHWUkyg",
  "key3": "5UkpB1ScNYHidzS7mneptNCHKy4W7aJPMtfi3vLq1TNcWKqNVegdDDSeJaQBrrTYXS2L9Wf8jNBwH5R5vJ3Qs1fd",
  "key4": "3umgv6zLtLfadaCUBE2ABdyzS9C1pzd8zxiXZ9vqAbWFEMFCV6L4hzmQH35451JTuAZj7GqrjjpGjPkHxDZtiyNM",
  "key5": "24sHqUHL7vSVrB4g8PrEub7L9qhdKNJn2xP18vyp1h7NNr11i4RaonqFZPQGQ6XCCx4riSGwsD7imPjyidzXBPff",
  "key6": "FdzawnGt1paonpumu1wBsVbgpwhvVh3WAgYJFiHHxrQwov9g5HR4hU2VcSYs6PXq19Q6FA5kqDica8RtrwS6J9S",
  "key7": "TGjYptP6mTvmmA7YaUj3DBPh96QrBekECpZTrsTW59TyAjiafLe2phaemKb7Ee7LGXQ7F7o2eMTYj7oLxHDiJ89",
  "key8": "2nrnGpLB7cRkSbmy674sWJpHFejEYKJgrHagiyUF3GmoDK3uZ38rjtYAXJG6SxUGrys24MkuJFPDtzRuANCKCqTf",
  "key9": "342GehQiEXkvZyS7ZpHWKK2WGmL3qQLQKkd6KPuVHWiy4Q9HnnDB28JrPshg97gmWiGRJaKBatmHEpWzDZSsjJ7B",
  "key10": "5E7Ea4iUfDYMF3VjXr4g48sVdn8WXwiomsugwtcaVnANShRFgniaGKu56K4oHVZkbiVCNTbAMXxvm4swPZ9dyL77",
  "key11": "2cXv2hCtkgSuMZ15BZbyt7vWpiCxdTrV6H1CJ2oyf5si72sdwAznG8PZP3qC5Cp5kddJunjRSB7dEkDiTcxxdkMk",
  "key12": "38AmdNVxAmQ2UJfXpzEDkQvVidKoDkB3LGzYxoh4C5LeFKfamyEJSbx56BBw9UyaGVBU9qSTgVHXexEmFt8Kg8xM",
  "key13": "4JNjyfpLsJ7VWdDetobcxaPpZh69tnYRypVgAbfW6CXBS9vAe3JcdkyMJhAWWZphXqFpfiAqvXCHMkAsC1uudfRR",
  "key14": "3xcmpwKNt6cZCtWw2CUrnJkh9fhdL26GuSQEWDUH5EQccfDBsMZrqWRTxwMAPG1AUAfgyaDUzj1eytRub63KpbmC",
  "key15": "2mEnH9YvfD95drAE1rY5YHXksR9k3Sk2Q5xVxLNnLzxiiBHkH5ZqytRpdabW8LRk3PYXrfdUsZX2goGpfGBWpfjK",
  "key16": "5b73kp1da1VuM5bAeDGBcAAnT7AAkhV7grGMVQMzdm4KqQVy2iTHMxm44YcxsriVcsbgCphtxYvUnuZPQZvKBYqs",
  "key17": "42oDkrrFzPWkRKeFYLd2b4fS4bVmCjyn4WuWDw3nhvovZt8tr9i37QpJhzWCukrPrWbfPyFoWLX3SPFipnoEbdzf",
  "key18": "2788trToqz6gDVCbog8xaPpE9FeG9yvUosn99uANFHvYf7iJd7N5dggLeLrFpx63cfH2m7Y6LW7fbJAaNFnKH3W8",
  "key19": "4ifTN7mTcVaymB4qpzr7sZkU9sG3uRPQ3jSWUhzp1BhBwd1bSS67EhsxTubApT6xanTvptiLGas5urPD8kJKhgk8",
  "key20": "5tovJLxRZdLaiWTZeS81JGRShidWLXQWDWCvkuCRKSgCcQodZcVG2giELt7QC6mWrcKKLJ7e9m5isGFxvhr1Y2Mo",
  "key21": "3bDQ4hgq6cmDLExqxN3GBj5KCvshPLJGjaMJEi6otjHt6KRNK1FkWyvkhinMB7YMDBsGpwQNfRisxEC1tC7DrmrA",
  "key22": "39bV1Uh9yikNp1NoXstSVzfUeCbvZbNESzHpCPnJEPWgqFoUCAUeuPKUGZmuhmYb4Jmx5DFXAWjbMMSfsn7ALSrt",
  "key23": "3RbWGD1yVYFXsKtp3UdLiZLYEhTkaFH433Wvcup7iEA2UzaJR6KVkFrYgCU1XXk4m48aWc8DhmWHQx19NkEh9GEM",
  "key24": "2Mxfz9zuv7yetgY75gViu4htA2SJtkxVHNfxjAGLmhfgFZ9wNU3ia4QFTxwZbiajGzVNzpgBzXHdZz86mfYnBMxk",
  "key25": "4E6xcENRsUCExjYk3VNfGsABxuSM6ez81FM9hyuGdtSmf73BENUVG236tKcpZaFF9DcAi6hna5Y5hxQpicfqWGm5",
  "key26": "5E95Sp5fCswmCmQbHYsRNNmc6g99TGpubW5ET3SijQgXtFLUxip43zta2kb8oMiNXEqdjmLz44t9xzcT6m6DeSDg",
  "key27": "4MXkafJ4Mxj8KC4VoEyz7TtujsHMr33TWbPxZ8PDofwmAaNWDGW69amgGgizMoTUMNVPwBeGiLGQT4PnDoWRbaMG",
  "key28": "4EPdbQBGNCMF1iHGZzpQ7fPM3Hgqns1C33Tdw378xMFMSqwA5sAym9yvTMD7XXtn5p9LSNo6T8kTTNpCCZWVmCbY",
  "key29": "5wchZ9ZEJjBsMNsq8KKd8aVcxfnf2sJpi7tmhzowUxthqs2Nfy6dKyJdiVhZZrn1Dn4CwCBSCuhZ4to9bKBDxa2Y",
  "key30": "5BJHPkBnWwugm5XDjFNgzUVKAGboM67fz9i35WzWW9F9sgWsk7aLm3tXEhCEABPW5aeGE3LyQxTE1RAkDbF8QsBH",
  "key31": "5jxbTVJRRKZub4wZk2L2vn7A7KGhaJPG8SpkKaRoezudKbTqjtk6DRh5M1E4wcVuD1xNAVAFx73Cr6gAMZvwdwPV",
  "key32": "5xM5kVUawf98wCYLxhj446ZAjQmiNMBpXTC1jKBJhps9apAxZXVu9y81Rh5KVBbuwpVqjpNwhs1ucEbzy9ApN4Ep",
  "key33": "3UwmZ9dnoHDcchC25i568xX8jB7ayU2gwUgsXHBio4b5F5f9AnAdPEiBCsZwT2kuErSb6aQesNtBDZ3FFHi9uP5T",
  "key34": "pzWjTJ3UQgn4rZMAWHDuww7LprZpeR2CGv3GaTTdnxfdbfFso72n6a95EvngZjoZKUmncKtjK75ew1fnAPop2SV",
  "key35": "5g5gejbLtCSBqQsMYzwS5jtSVAbfr5dhmMrSnpJtJQcYnF4HHzA9NNu4xhiiu5RpckXRBvpGtt2kxDeuvXK2MqnJ",
  "key36": "5LJXkwTyA6M85A7KJLMr23YUi3Tq1FTpZ16JiXzQJSb9te3RjhZ1CX5grzgXryigimFD2pxwfNmFpZW2s34TNExi",
  "key37": "2cBREZBr1SKeTTZEcu1Rnc7W1XgYkfgsc6D7aD4MKM9feABUdqCHMqXaCJCqSQQWe4qEYpr7P1ZnEpYkyRDv9F8e",
  "key38": "2rhaEdgMHJcVLjHxd5C2hNL5Xga96RqM7ti5hAUadjFkkCmYjKFkwzWdPHcFXm3GJVRPcWLE4KZwE7gideExoeWd",
  "key39": "zBKFtfcAgJ6EDpKAYgaMtKRCqp9noNSckKvHekiaN5x5tQHw8FpxoZtGGQSYHZhZiwTmPkcFQFkSjA6oFrSzoSb",
  "key40": "24j8ujaKqL12YmSUszsp2CFMTnL7pPpuxw34cB4QmBqFLY5VuemnbeBqtrFZx6sucR1YombJRtAhbcK538JtBGmZ",
  "key41": "3TVM4UuRaS9um9YErt8bWFWY6g3JbpQ7wU3k5PAZDMfbxeFSdigphy1FWYBQ9M57xyfHZzJpHSqMv2mwTq1kEhxG",
  "key42": "Pmn5kkxbG4Jvr7RDNnrT9CwMnhzySZhygr6Tmo4GtboWELUf4qYFrfj44FtengVJiF1Cqj2QdHgGBp3x9CQtWtw"
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

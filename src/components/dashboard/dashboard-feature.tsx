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
    "4hFnHVhR9G2rbnZNzQDVKiBCymdoHMRp82iPsbhAkR5hW3sT6JW5gCh1xjbzfSXZD45u1SYrZ9yWUdsmtuwWVoX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yshzVTTQqLEsU5vubkE1DrcgcbpVA5oW6LyDMKXnerNteWfzjcpFC2zozXJfHMMnJyuKfjgj9fsZeRfYCRCWmSq",
  "key1": "2aSVNmzuDJvrfYuX5SHba92mDZBih5KSkRFKJEAhUUoeFT3vnJwUwNYTsEFxu2ZMVv5wayjEoaiVXSY5FhE6aCs9",
  "key2": "5y43LNoaCM8u1C9wygDzjiwhbZGqSDzVscM7qWyRxaNuqCVJaE25PdbhjKetgmEiAYFcaQ5qBCQ4dUQw81aFqFBB",
  "key3": "3jeeQnaTQkb2VTgxTSSKQjkkRheJgQcVUXN4rKc5qXx74kU5o1wfbafk5co29en7qMkizy1dJvxXKwvf49H4myvv",
  "key4": "e41fSGSbpdkkK1CaAu8T94om5SzA6zvC2YoPrpG5n4s2ujGGo9MYACUNteiEkmxAEpZoQRVyMzachwbLoYQdbdk",
  "key5": "2rdaWkUkTwqhjocPmPgfq5rEiGShCnTjDRE8y5tD65mhs2ptLePVChgTB9jmjJP1jbgofmTmrtn7zkXP1g1tMQ5K",
  "key6": "4zHzB5Q1p4PKWASrVxDmW5KNmqXD1kBFeFBJDkPFXf5s53jpaduczbinBSM49yeyJbwohtxQ1D23Hr85kmBGUYLG",
  "key7": "43fXXtjiAQw37mFEpgbnc2MadF7bdbdaUsWF4mknLCW18mRxBUca3bZncuuvLkZf5QjPfUJcMezcHzfqyT4TckDc",
  "key8": "3LHVe17TKSPh2YVZaKfnM13fVJvsYBAGRARjaguHrRSVBXobAPjZvCx13XwGcKX3uc9FEQLxr4h4of6nh74MUfmV",
  "key9": "3vxbAbMtWRUzU3xdhyYtddgJsydvUPKPQWJXJHeYQx2ZwGKeZ4sLax9ScWgXmu5vvHt5JrCdNA5e4MDn8hAJqUxh",
  "key10": "5LEEV9Rw2NPWijaLfqG4zpmrGU1XTXk6rwcDMtLh16bQRnNxtUwpT117ycgzR8m6N6se5orceFXcvYFqG88EPiTY",
  "key11": "5zEnJTXfmdtDWoP8inbzeWyRYHUYV9ZB7yj4sN9eyxXbthfieEUcau63FuaN13db94EgVoVUjBbLSTk7K9vasnuh",
  "key12": "5949jRoqGkvDkCcccsoFQhWtiTFAjtXr43nZuPNpFiaaP5xFK8t9eSLQ3nicYNg28KK3xKCRGN5BQhp2aDh18TAT",
  "key13": "3AbdHBPnYAYGwQjAykDWhfWCHjLv87LA4L3MmveasMe17daG29uXMLqtA9TsStajxVA5VzkeJL6VH1jiHfQscTMi",
  "key14": "b2EZnPEy14pjxg7nEKTuvXrk8YoBWk4BSb1v2wWXAoRkC3y1DMLP2v5i1PF3ZiWecCbmw3kpaGFfpnYn9ZLwf4c",
  "key15": "3APghdFC6rfumMSsAGrnoupaShtWq6GpP92at23r7Yho6fddnRj64oD9z2VwzXvJ8EU4VyBaq1yhVtNDFwwoaZvq",
  "key16": "wg44HaeJ4fW2JQR5vkPtb9DXWP7WjfXt5wX4gwGPQ53VjQTsvUC1ESmENKB3qDYbseyVaQKFV332HgFR3tmc9xE",
  "key17": "3oezd6meJCMiPDRrusk2AqWPhcwZ7JjQUtj8c4ThbqzzKFydA3ZgCcCTty3td1zLGVA8LTW5JDs7DCaHLfhEgQrZ",
  "key18": "2TZNDsRX26FQ3qNdvrHtTCpGvGpQEwcs21cg1RnhBMDNHzcA7Knk94qp4WJcg3eoF4Ey17dmhcMtWrQxqT8uNZXC",
  "key19": "4M3wUMWabm42ERLSGKLB24yofbVHnL42mi5KGDYmxevj18HonJVgdRuD1NdvsPddZyjmXuSmq37McWGAYScvXqi1",
  "key20": "5Ua67QwWvDNnbBt3thA2xF8krJBUxHasKjrJPsT3apWDXXBu3z2ppyFc81oa6ktU85bWrwVWe5777RGAiWCcXEnp",
  "key21": "2jyMbiGqXE114b3ErqcLWumj9a7w8uBCQHJP5UWsWig1PWCWGEXMmvFyuRFwpVH1erTTjRr6ST8DWbesrZuh7kUn",
  "key22": "3kLd7K9jNctuDCyE7wM3hcRVPVDKuZfpnPpmfPcVGgwV1LKRXWhGom1UZGDR8QRMJDgpyTXo5dBCsPhLHA53utBi",
  "key23": "2cJQT63bpifEGWSTi4R56EbpXVfUdbReRA14TeA31ya4e39utwqwoY2T9hVqH47o5H51C6n341RQY2Hgxu1rqdA2",
  "key24": "62GYauRcjfhkvoouQk8dA63eZro2cbvnKLJVkhdYx9rC8XcEPY5KJXR1GhrpVsgwmHwa2jS2kshhuKcbUquS79M8",
  "key25": "3NBNSzvYb3dgsC7P7knnXRqLMzHsXjxaMSTNMAmRsvUFDq9VR1Sc85JgpjEam4jjgkHqHpTE3H3Brn1RHKhyntTj",
  "key26": "533kbTqosJQeQ2Wk54MxNDQtrQGhUh9TPsGtUVrHiQVx21z2cSvesQByDxG533EJvFZnHC5x6NiRBngpSCMvZiti",
  "key27": "4wBj4mVL1NnWzgCD81P9C7TSWnW5ruByXecBSxPgjLQLC9jd9ZDD1s65nifkGKUaACMTWuse9Ycv48oMoQ8kDpGr",
  "key28": "4Hm6R8F3c18R7KnhYsvwtPiaVwDVWdqfb453r4xqZcpzeFWmQjck82Qd65hWyZsbif1Rvd2gprTxZi3KyCLEPBy2",
  "key29": "5M1rUSkPWEWn18isqYJkLkTzLpSN34L5UJhiGPqAKSTRsaHJMaREwEyXAX2YGGVuTmMWV8JQz5W7eQmMfbRQd92K",
  "key30": "2qfugnY1vFv36zWE9LHen2yGwsHh5uHUEtmfKkyJ6D9HtzypQjNFDTbvtXAqu5dCxevTZvGuqfqeTAFsHWSZZqMy",
  "key31": "5dDnUy9JmgkkHVCRqfu2pTW6RKPxCAZ89pL3Aii6krdrxCbsHZzH55pJRYdBZdraJiX47fuWrwcGiFwp91G3nU5F",
  "key32": "5TXTJMjdrZWSAvqYyWxQN9pit2X5xKGEG4jGrU4tMZ3W8UiZHdZptNtxpgbcTdQLAxotao4hokGxxgMQ1bCDUKBN",
  "key33": "Rweyif5ULCnvfpdVuZyy3x4BYhbDu4A6ZyygJjLSXibBdLsNj91YpdQ87X68rjA3nHt5AzbUFSijCHWV2WqGqti",
  "key34": "3eyhBCo5y5Xs3FaENpQpa6qMnQCYanxjMdVhxvVtPX95MF5eoWpYJ3Pb6MogZdDzfdb6YiWu9NbYSSoGBygfpoPu",
  "key35": "5UNzoN1pBMTKNeVwCbin4KGfij5RAXEqWUvUfSZLtBn3A6cSjQ2oGkqVXPLSKvwaexy4ikRSbQfhC6iDV3Danzdk",
  "key36": "4oGwGguLaJiuWtkdRmqa3dut8vpBbzAQyj5CWtp8VsKiWo7aSATKDdtEdsJ4PspCcCBHGUyMvP9RhfwrtXXBuHHZ",
  "key37": "Qrx7eXCLVT4ALSt6bC3U2bhJ4VYwguerUFuNpjnygnnfBh4D9pB8FxzmbherYpm1CePPkmfMeLYRSfM5mwSn8iG",
  "key38": "2S1YYy57XkYBrZqAGRxLSQAMtAQLY5BPugGcqjeiYUrLZ7nnT33Y7CbH7J2B91rF7SvEpwJSkbsvE7eH3weynxmj",
  "key39": "52mt58Tf3octNZpqFJ9uEvr7RAeLXJpcaYP8nrXhcYnZeduW89G73QWpd1keXC13i64UhQ9nY9Bcg16pjy22fQRd",
  "key40": "Ts68tTDciZ2ZhrjWwFZ11JVAbjvvNqsQfR8Xqhq96ivjCTEpyLP3dN3Y45SnYmSBUgsgE3tHtg8NR4rfkw2hsyw",
  "key41": "4iYxLNKj7EWbao435nGPWH48Mo5wXzZR9hTYnnL2PUaPuTom3fuxL8FEPdWLi4KczjL88mZbf71qYc9qrcSqeBWk",
  "key42": "21Kv821xxed2yJmvutqfyWK8ab1iyFPpL72RwisCQALid82XitTTiVmY4hmp7c4DBfnQUoWiP7BVCXadrFJYy832",
  "key43": "5ykgEcpAjmBuXFrasTox4vUyKopJEg9Y2soRAjjsz2CvFGvgYMTM5ycwN9vTXZnmjAQEysxQrPTRgtGEo5VUCDEz",
  "key44": "XXBQXpyUCdUi1ADVk2csCV1tZtH2rDuFfUT91ayNPTkMRWMFUT5HqGHsSUx2QA8ydFT4dCdn8UKa8rJMpSp8aEL",
  "key45": "4b7sfpPaKkEQqrw55CXywwhuNffx9D8sC2ZTKP1hSqZoN4vt4aGK1jqSMha983suGfR981ST3UkAFf51g2RgSJfW",
  "key46": "5KNZt8cVor32UuZYqQwt1dnWMFXiVCqQy5vRH26meE72uAVcUwHTzN2B3Mmx6XLLc2LZ4YE9S2vzuZv8co2ydKTf",
  "key47": "gVasnMQz13NJMFUrK6NKeyeJFR7dNrFeUqdHhNktYvSDUNvwR2QtTqSkY6Tge4MExKW5fMc6m3TqJUazfXcan1C",
  "key48": "29Shw4CgnBSHtpasGCxPyyXN8m3hcWRQ9Yc1PUAAGbnzDoxKXEuS6vMHXdYotZ1mxsmhjBLg2iSsFjUHRCtMqiY5"
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

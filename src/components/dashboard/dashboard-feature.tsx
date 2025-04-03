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
    "4ucunGvmcVwCeDR1VWp7dNzuEqeoMvpwSHBugQ7XcLD4jxbERADfpp9v2ey1zTKRZo71tKq561PSnu5BDZKoqVwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWHghD6NVyTef9Jh7nNo2gaoirn76kTL1xV4i1FFbNaj1u5Cj2tUiYQYRpDNDNC8aQnRaFFUQ2SCZbP7Q6XgJhk",
  "key1": "deAL4g6XNkwiUmeNqf3gfWszvyi6wQhYNCSu5neP61m9n75s4kg6BQ9eKXVDem4gy8jNd1KGPi5WuSM57wUoesc",
  "key2": "2FucrndQ64MLso9iVj1XhRGLxx8nX9f78Kee3qjVN138Yty3HStMtkfbuAMK2AP4n6XzaxFqBtUJVVzM1GPg6gU8",
  "key3": "3Sz83jh3tNgYKujaCNa7gd9GKS8dUqSD36EUVbc2rixakLqn2EP1uJDhyfW4r2T2VxHvP43zMmqcx5NAxcaC2P14",
  "key4": "564qtGkNtW4Tmh14NCwZAsa6PdaVSicsxJqEXaau9QooPgubdZdUJk77zLieGf7VBieyzuPNCztRyD8faqi5YQAm",
  "key5": "KhsFBw1CkHtxkHeeVE6FmRfXFFgyKCUtVfxZY56pwe4aVzgMXT9aWLY3MYt19QZNhy3Y19ZcFmCH7aVoT3hYHBG",
  "key6": "3eQeBvXP2WcZWv9GRaVaYHLypGDEPjWUpc3TCdxhcfW8A1kjhJxdkUvkERpL8vtnPj6aLSAnZdsz7MYRwcfRsKH2",
  "key7": "2uzac7rjcqRUfmr6GfQFWAUjcdn6iQQ2ephHAEELoiKMDUiKwQQezh1aUJZGu1ahcNYUfj1mdWR2tQyZM3xSoFTT",
  "key8": "4695AyBDec1YQeySmfEPLZnvKFtF3iguZTQbsZTdoKPv22scJYTgPkXVCca3oSj4KZBMY7uhFq2WBq4C8je9fEeR",
  "key9": "4GFjCWS4pVskmPDyYKmX6Srn8eE6T1wTzF1w65eqB84QYdeGPghMMBuHsigmjSx7W4nZX7E37qPCeSVUtSpnEt2Q",
  "key10": "3dYdnJwrEDh2KpqSRLeHnVoeBG1z53y4AaZrmWNdTeHR1W2M65jN4K3tykWMwHf6ghErU2kZnDJ2tX1YNkQToua4",
  "key11": "4Xankhd1gnqQ1K1m76vnakFWy5DWeavWd5Hj2S899ctRWKJdkrrxxRsNZvxYPUhK22SAAvVqUQcFY1Nemkvp1Ws",
  "key12": "hFVLp2Erh5qTr9b1budwnBYKdyiMproSQr8zynuA4A2i1a956jbQjEq6h3t4aLPiEpsNsue3HGC22FDPJrfSDbR",
  "key13": "48jd67UQTp3f48uz9Zrzg8TLhpL54hBXtBAn7sVv82DMemaN7JGtG6ncnfC4dpjyApBYfew5LgXKj7KNpxJ844dy",
  "key14": "33Yxcmsdaeu2WJCzudMUNnm3sHRTn8jvjYSDmAFT6qGT8NG8KQcqrwwAu8uWbaRwmhhEmxUzhMVe6pG5b2EQc3L9",
  "key15": "x316U3xM6zxMXYLajW6HMc4QcwuqwfkSfyRQUEKibtJvWtSjCxg6KeLsKxsHDs7RbfWiJiMceFcS63jr9VL1tMP",
  "key16": "3iPziHDkddXZ3eH6wdbE3dqCYbuR4J2xxC63E8NUvmvwryrms7B2MNmNJ1Fvt6Y6Y9gC8GaH8QWXPS9etfNG52E5",
  "key17": "25ec29EGa9Qzzyue47U2FCXuC13L2SkdxJUhPkM58yZRdgSx8gWcTFNQTu9ghpQYQhbpS2TqQgpMQTDwKAjr5beQ",
  "key18": "UMwEePA2xqi5bLFkCnGdxGPA8wQcSLyGLntE71iMG3B9WCQjYsAPEHPHT2VqwQPGp57ou3czat8nt5XzuNpv1K9",
  "key19": "96cRcAEPc4RKLwP4DZNUdPpXQRyc2F4YMKGtmkXdcnrCv686mjyX4saeuwD4Aipw6XmfcKZN7Veii1Q8jfnP24v",
  "key20": "3c4PVfiAGVW1NzgfSiWxBGQDLno5iPLAkKk87GyJX2KgqRVkJe9Ncj8hFoDiNGYbQrS89JMUxboJhYLdjtsRzKiy",
  "key21": "5y8BMyzw6mnq1MYsyCLe4ks2vzfRRy3A4d734b8xdZBrSD81eJB3GczXpHj7cvpZhWuzNnNUMcsQbehduxU9kYJi",
  "key22": "5dQrPDsL5WQ8VwHqWZRtJGaAXyPy4Smv6YHmEo5Yf6Vwg1ZCW9kGVSYE8F4SoKYZKfeFdVn9JUiDDcZQ7o3xE55w",
  "key23": "tsXd53rEGS6oNwTxbSPNccxGuZFDjBW2Y6CdoYo6ySkRUSm7wz6yZPuUmETJ2H4tDzfy3DoCHJVoPKPM7mUfxCz",
  "key24": "34sxxzKW25uE37cdWwkssuq9J1XHojWPRcZM7umfwgtXE49rfzYRPyPuTEd8gfYpPx2bn6sjCzte6yn9meM489VJ",
  "key25": "Pa7wgKgbRfUdJg3bBiSGjkLJ2xqzyfGfbhJu4U6bwGAa5oGuJ27MxA8HVUbJaC1BjvdHYdRNsdDDpmpzT7CC66z",
  "key26": "3WhD28pMb44WvjL31WYqTos4HWnMQkmHhw1oF1sYwrzMVcJ5KPusrhiGxxeqip8kcTh81GarfGg5FTQsaczDf4U4",
  "key27": "4iBTMRFS7P38uMcZE9kcgSmbdPEkv6Q5xuQPzWze9frKszta28uEmtfJcSjBoVJVqrtV24V2NqPKqSLYaZHidL1B",
  "key28": "5H3npWwzGo3jLaSHw8ieipkESWnmqD6hRVYSwdbwpdg1svrd2WqnBmr7z95EmcxCf4UYxEj3nzkUyrsVjbp6r9NB",
  "key29": "v94Ksy2EeFCPrLRCLYQpN7ooozchvV1DPPm8uftRdyZZTq1NJtqxyEsq7u6YiSXUSfmiwQaxPHTM7DsdPst9vVW",
  "key30": "5kgPaK5dCz2KSgoT1VPZbffDjawF5vdVVsk3t2qdec6RQmchREGLU3uytaATy3qNWZEgoN2UaQyS4bLXNoEBFBF8",
  "key31": "55Cp9fHy34GoFwBJNqD3xqHPSGz9nqfSDoQvtSy1Vd5BFzePQ2w7kJAxyAtaj1rPRntPVuJPSWaA78HCocpetE2S",
  "key32": "5qrKxtw4iPfKLVNgmpt6Gcg3V3T7raz5NDwV9Ej8UrDwWnJPxSLPAGzbJTiVqr4BwsKvXUP6WnqSqy4dH9qp9FiS",
  "key33": "4d6cc98mGsHR53gBrfyWqV439WzKiHK5EC7SHTZAvGFgZkeMEFWrpZMPk7Z6rS1NaWBy5Gn64sMtQFhWXXU3Pqd2",
  "key34": "2JzF19cPdYcEv7LDMMxQc23UnHekP3whRRqWY3mRELt2HGSQu5CH5ptdr52i2NmyAaxUuWoRa84z82HouRj85jb1",
  "key35": "5KpT8PRNiGFguKhrebFQk64X1euTY1fCvKHPA9HNqsRHRNs2qv61RqMa8ry1HTMeMfzLdoXfsjZvdiGWk3Jj8vbu",
  "key36": "aCa5ybk6oNsZZnUBvUDj9MrPNgBQMNk7pZZ3U993WrW1kYKYnNt6tHfty3R5rKhp7GeheVoEMZRMn1po7Lg19Gj",
  "key37": "JoEbNtaX8srmMzyqj6TaprqFQ4T8ivm2NeQuvic3HjKU9bo5b5hVqdcW9Q9CHCn2kjmaFYFucqs9fqPJQHKeSU5",
  "key38": "658NgHimzvvaEW1TBLWj9h5QsVSBH8mrdCaUUto1Q23Mr6aqjXgoh7UpFwxbWpKyYz5j2zQvDy4UqzegtZkRzgG8",
  "key39": "24Y3bbAtXfCSkmjbV2b2acWybvZ88RSwQU9xLZkKCdivK4BZ9cnNMmPEKF6Pnytp9qqi7gcuRvaeVu773fJvJkQd",
  "key40": "utsokeUqSPAYPUztJ9wZg8UxjLGzrPx259XtBp3MvBa33HFngTm9GZ8Qz7YLLmFDg1BEkcfsJutLxQUxLK2xFVH",
  "key41": "2AZnbQG8q92DGxJTFQEeGzZMBgXq2J9aNG2xjVTRK5umLpy7A9ZQarFrgCBGZTH8agxZRWdaxw9o7J495EkdLohM"
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

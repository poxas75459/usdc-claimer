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
    "2vzvY8XCivdjQWkNPDxhFnC7F3C5CmrDrmMSq5Hby6eXCAK1W3gcGTP97kSwJEzGxRGpXWqNhp5UBviCuxy5yVwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPdnv7j2CGd4bwwdM2Fbn3X5R2rUfo82PDxE9feAR4EbChGRe563dbSXm218y9vSTXLJtZKjTKyiVKP1x3wfmW1",
  "key1": "Y421w6JGexiLvsZwP41Ki6j8HfiXKqBsTN3XL9Unxkp5r35aS5miceJz2Js82pHWNC53eaaiqQDTAA1vTPDG8Fd",
  "key2": "5DPBA9fSjeoNucPeMGqHmS8HyFevFxVZn9aeRADvBvgp7AA9CtZgLw7JRXxXb4bL1BsUUexx1iMUokTTPsbybgnq",
  "key3": "3g28om1tCuqYXy5TfYKpNtUvD4oPYY4dXgpbRk5snjZyrPfy49pVfexHxi96EcdrRCniPyb4qu9MPVG4BFw4axBd",
  "key4": "3gnWENAHPaWaxUDSUPwXTbiJvHPJKoUhE9do1KtP7PgPnCXDcgnM5AweygXZvpqGPh5T1dkKyfBogbKzSUBEqaEx",
  "key5": "S772nHqULatrM4ewMd1MacbQ2J5fvq5cxhRvUYtFxpR9PDPTQw6nTvfBhY3nDZxQ7gY2tvkvSeTcJY1pJRCLVAJ",
  "key6": "5kGAzzHYY6vA3jZKcAUX9bew3YGNoJTuZESLvFo7rSQXWjLLeYjHJsG3jF3vRBNFyEdyCCHS3rYm84XhpaHj76d",
  "key7": "62T4PAnmMcQRfXSQGHbn8wsMC2gF8yfr3Frk7yGXdwe6takCVq39noWUn11yxt5pY716dagq4zH3uyPdJvUUiYPY",
  "key8": "422ps2qVW1kNXa2EaZkZ2dvxkR5gqwhnjaHTERajcysdYBZLAVsoibCJ3GdNawZst8Yw3VNZT5AdSi9NCPQSgAVM",
  "key9": "5DtUZvGLL1at5gHU52NmpiXdoCX8AiDPMcuw65n3sGGrQCGgk8tfNRNFgKFYJVcKCEWBfNFU8LmH39XizUfEhk25",
  "key10": "3sBGua7ZTj4QiRLwZ9cDWhgka4k8vZjrS3SCJenPYK4TbbsS6U7NjuYV2YEg2MxwhJJaYNqKNd3KmpaecBpNC7hq",
  "key11": "5BDUgZXMQzUjxSwbhX6Nca9DRzVbnfCPwhP8DMYn5nxSuiZ3RDp8wK2QZhQXf76ntA4ha9YpDyQ2JPoKUHoGK2JC",
  "key12": "CFu2eDe8mZ5LmpUNqcwbv59VVTVXaPxLM1fiKLZDUoc5Bag1MKJ4a5xHb5YQEKroS4MNpSKHDpN8V3N5CVBtLje",
  "key13": "3jXdz8ed8VSozGGeVwP5T6n69W9jpv745KKtZP7DxhYB2pq6GU1rtwpQBE1VJqY4auDCC2twi2aFWYWyWuKqYSZg",
  "key14": "kHcDRm528YE8tAZvPG918JGYNG8dotrKU5U7w4E86PWQ87cmGj1NT8VgDo4xnHrCNW4qvfuhixEyaJPn43232RU",
  "key15": "2su2vLfSMbXHYi8RmMAYhsvrcJ9xAd12EFAKQELepbF4Q81jDDMttQ2BA2MJF5wLkneYGD84o8BiyLo6wm53VmiZ",
  "key16": "4TS7pQ5thMM4m2bR4Zg8De4YUSdCerQCBJBRU4phDUeMmDE1yByyKpRheah5X8VyR3b5rWygHcQRb7h9nyC2o5fr",
  "key17": "62ZzbMWPbcfVS4q1UT1m1t7pWGbZyn2WprZj282F8iEY56xHPk5YNumtowbsuag8mEnRLe6Yfqt7YPBTxKW9XMwv",
  "key18": "2UC6UPqqa5bmL57Rcu222rjE2BgURnWxECumXfYxofoHrvTnov86HBnHLqFohcSGxVZ2wJSmJD1ywvHSyritTuvc",
  "key19": "VGpdUVvMtuHa8DagDRaygQezDDN1zxEMeAy4eBQbDXEnLqLEKy9fM2epcnaRnQu1HmtpZQGJquf7UuURFJLfN3J",
  "key20": "4UxedBNYzMGquS1gcHecHyNnMEvaqZb5kT5fpHeynFRYtQyXCKwaGrgmZrJcw3eLjX2ntQyfoJvYikX9kF9rwjWR",
  "key21": "2YDVPtNpLE1GUrYwqEYVZw1b6NGMG7Lf3XSJkLAJXeEQf5y6iweDFTzsBXVeP8sZb3sxxnbx7NSG2SFRHsEWygoG",
  "key22": "2kKoRaJefRSSt6vRGaRx4YFGn76ksQL5j7t1k6B2A5CE19KrUxxgvWk8X9ooHzDttHAwRw8V6pLGumuWCnZjGHg",
  "key23": "3GDRnrtcTT1XpW6Wbv5Emy6qpkckNzEBnWEvadT7xo2TpBMqTGWj9L1fEVh4DcJoCeNe5memNCissViBdXBux2fc",
  "key24": "5myBKH9oCh4nDaXkhebjSTD1Cmgwoq8NnQm7tNjBTrjWzzmZFmz5Rc1CcwFqb4yn3zE252a7heb3QimLQuU398H",
  "key25": "2MDUaiRnSbQxQ4uqLvH2i2jrHGiQdaXP2HgMu1UBEoWDcQq5gKKdjBC6RrEJXQ2kHj1p8dSy1tHieDmPFtf6cQn9",
  "key26": "3qNNJxyGyS7LdmSnRzTRkv8WBKLL1TzH37hKBPj3qgCP9RPcnHpML2KkyM2vRPj4XjxL5amytFwASAo8UpopyCnX",
  "key27": "4A6WqtumpRTvdGjNuAfhhuMHmB5zV6vfy8fdgbTmqfJ6CL3uKPAxtv1XFxXbn8JSoGax6dtvrqYnT1a7JJ3iTDJR",
  "key28": "43Pxnyk3ftD3YWdSCK1LHfvvE1EQJ2gCqu8AbLbqeRFcYChJLePugZZFPvvxbir1Fznoy7o1aQykcjHZmStkCvSw",
  "key29": "QFSVy6BwN5wMtZPRLhmYGGUX1hdMuByT2S3DzwkGJAVa7t2bkpmpyEEHgfp5dux6Bwzs6Uk6aykHqt5ShebJyW8",
  "key30": "5FADGKi4bm3Yosx1DRRXzdazhhwHgvBvtsWMvFvLxzku5XuiBpPaERNLkpDcqUCRJakpeARX8xrskD73XQ8EyGCr",
  "key31": "3LzLSCsKy7yMkKQPzPmLRFLbyDBrb1CmPYuLpNZMcbmR41STg7rTJfgRZVANPBQjuzj87mvWSMvfoNR3iEW4gxDR",
  "key32": "3QjvTVEtjdamje4HK4TT51RhEnZkSih2EV2M8rCnsD7EJjV1qyL79ku8Z7zxF4ZoFz2u359vigsZSBuTmpSyEevX",
  "key33": "4j7wiWLrNDjSEQy9qamBv7YvxTWPmnqkt5jnZoy7jxHoABYUpz6zz37gMPK1SGKtBhDSq2aPSm6yVwv5AyrDPYy2",
  "key34": "5B14NX4NqXRVTXCR8sSAey1aQt5bSmjozT4D5FUTe7Tam9SV1bqN4N278usZegiPkAqDwFEb1XbTFkUpYw6VMqSc",
  "key35": "52xp9YKb6fBo4To9ommaUk4PkKRZ999ZwBnSSF9Ww4AWJgozeSRh15EUPUaGWabM5hpp41xtQqfkp4epXEaHg8HS",
  "key36": "3tMuU3mZQ29dSC8HcpbJ3mDwYsRcRMS4PWTnwVWE9xN4BUdP1HdgEYDGDs6fy2Q8UAbDFfra5c9TgvjWRV5vKgMr",
  "key37": "5Fj1PZozeaPdNrQ19A2R9YyH9Kaj8L2gSwiJzJYpJNUJniZq7PUFm9QVnY9LTncYgVkycyHG8LAz3oNtoeH61AYR",
  "key38": "4zCJbeFFsxJefcmR3pGYTJ4W62fUnRonUjZiYextg3kCqh1HiZRintmjric5r29eZacdMuQd9uZFPCQpkCsuTU8Z",
  "key39": "5bWYDEv7tm1idQAeHgoyVrTdNt5tH2ots68FdT8zuVPaAef8jwkjH5acteotW857Hq7A7hEE3NzBQtrVATc9WgSv",
  "key40": "jkh4zS1rv7mbsrg3ddPXt7Fm2RCJ7p7gDA5NJ7fhGv6nTAzAVkfxMRLaqUDyp9k1qdoWxVe74A8WKhoh9LQcjou",
  "key41": "59ucKu9xjvyo4Fra7gn9j9XGvebNi4nuBNsnzmRiZUnStV5VNLGxi2xLRub6TBGtmmgwAL8LDpL8RjfKquzvbjor",
  "key42": "5TB5rXTFveVNwxsZeDd8fHqzpUgwBk4bB9RgDh1fGbhpdk6WwF7t61qkVNZpqhGcdBTjBz6NEQhkX6ELLdaPH6xL",
  "key43": "3xsHTsyYcm17EUG4kfSU8H4xqN37DGRTudqgKa32CNriU9QhbcRrDGpDnfzAM4vjMVi7aqG6mRLXWv2idvKojkpG",
  "key44": "56t13HKNXwVZFAV7j6MZBfNwwHHtmGbzHM6tpPACVwNJf6SZ3zHCaMPuknC8msTiGtVFUc9F635UJxybbbnE49EL",
  "key45": "Pdqq1GAYZiABSsSv5G9CBjroyMyfxE7tCR7QtEQHFhwtfJVXeULKvBBwXfk8wK6HQFK7mKKZJKtMQpwjxQzEMr9",
  "key46": "5hSajSQ9wfPVgt7waArGkYVfcLbu3TiZXCAy1a9LAZuGABf4rVVBwFH2hfbZaoXwWKsKeo4ki4syeddrMz1ki8z9",
  "key47": "3Tf9W8zkd9Z3TwZA4reYegGcxD8KKrgFdRjFqGzPEmYZXCd1xczo2o6q1duJxXQxnBkAJAoXCfHDgZ5qmNTqGqrb",
  "key48": "3WrxFm8tyjmME3icTtPykg4uYR72pz6yvHmwSwNu8dwGNwfFmJqVv96Qh2swnyLzAnCfiH47m5mHp1qQCWD3D3AP",
  "key49": "WJumLsrGtwRQEM8sD9yd5yuGGptyn4WKwdmHeykyQuVhQ72Nwoo47J2aAgvBZmVErG6WeBvMdLeHgYV3s5P5CHC"
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

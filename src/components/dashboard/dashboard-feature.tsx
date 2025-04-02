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
    "494AqfvEnZLcb3YrJezTJe8QJpstCks5JtAMVPj8ZvzL1mFrgnqjBmp2tftA78jfFMuDoesRBXbHefSqEnxFpaUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYjXmDLeCqLp646NRvRJ3i83ocSa8B9Q4r6LaqTAmpup8ocRqG981e3y7tZEaZw2j45sh2omPvWYDZA1pLvMVC",
  "key1": "2Riy2aMnGnG4w98QAhRYJEmSntpcdt5DxruZwjgk373GAAqdRDQ1PuYdXh32cecAzgCuvZ5HY4VT6VuqWiNBAWUn",
  "key2": "BFSgRH8DNcyr4r7JDRpXv7cF82zktu76RjaN25nHvm21SXr2wLfQtAc6nehxFqjRpqqMv4utdbcwje6R2zKRR4y",
  "key3": "4uwZfCkiPPtLYS85VjCFgGcoxQ1WGKjsPp9jZHjn3LBgGWWqtovMCor5cwEKBof8dmdg1h4Vk3ZG7ecgLD3UNysB",
  "key4": "5XcAogYHEdrA4fRaBEzPsfjnEmzaHf4hVDcFCT2E5mNoNkVJbjzme6Wh6Eq3haQidp5BwVtVQP8FJ9E3NpRy3ybA",
  "key5": "5jpDrJNwEV9RfkeWcUHJt7eWadATgho22ZuacvY3jyW96bpTEXAaCUF2FUKgqywZFjTRh2fQLZkCRBhHiMuAsFUd",
  "key6": "2u7bkFrmnS7XkkFfSoGgwpvX2mEvSveCxLS2dQcVvAssnKZoWUUeJhyhYaTygiEokoszAd65iyM49bpbQcX5sCSU",
  "key7": "2a6pZbTe5mqwNahSu3dPsPxsLtkSCWiaFAHNsWfNnCGLfnJ9TUQs6ihtX58Sk6WpSQsyg3jHk6neazJg2858r51e",
  "key8": "4bGHKSfiHPnQypEEPFyT3vPzkpyhG5uhkmsniLVgWkesVHmaPS6XNbpErVZfYxBYhe4Hi95pF5KFSnwztm6uFLn",
  "key9": "4ctX7QsgfuvdzDjQNcgRGihmanqWRDN8eBsUwmQbodWYF2nRbcv3mei5ztHfgcF4utG3e77dCibPEbAzFwKBBVVH",
  "key10": "5SFcj6anoEUSgFyFg44UpK23PjrDsyDJKymPouP1r3Am9d46feZhJrkJafnzReHK4wH3JhuttkWa7tm38xGLzffc",
  "key11": "3GFaiTjFW4jWJ7Ve7BSysEuvu8rWfW9hepEYYKqp6v9fV2xDChH1R2ZYuqS7mvLTLoTdBw19ru8MrqEM9FjDDyLT",
  "key12": "4nrgTDQ4ByPZgiaE1rqw44SpkAtohe3MBB16HHLrG6ieGs8vBTKwYiz3BNNgY7xZRvRG3bWxtZotSECgUV27ifQR",
  "key13": "3pKfgjZk4YELKhoCWD5gzT5eUj8a3aEC5mgk5Wh42qgFh72LQbrcUNo5f5vyYFDLNQPzQujR2AcYK6QqxQnV72pz",
  "key14": "2Dqwrkam77Bo3afCLTN4k81Roccq7R25K4zsxPNna9TmJUavWiwG3vjHrcdKSvYidavMR6XSGUEfML6LAML2FbSA",
  "key15": "4u5oiyfePNbAVgZggiRLYvRb5N6u6zezVUvtQHFDQ6jUEgzWRZvF9D9acx5G13t7hJwtvaiECNYkvCjzGD1LVygx",
  "key16": "oeB4zGLheV9sNJpsQA1W8J1jpNARToAHb68EwGbKo6ESB4qSpE5ba6WXJfddjAyBVa493aCttuLnnnVBrM6qVUU",
  "key17": "9htV62cLeu7ANntDivmqmP1roTGuVAjTVDwfS9WSw1E9pqT2M7nQojZBPbnAWwGoxmYKiXEXYxwQRWyiNBXfPM5",
  "key18": "5j3emScWgxVaLsvkG6LBU2mH96RMKUYeKpBCuD9hLuy5oxxauNiEbSdpHF1oHpmzffDU3JPubaT2jBRuPk1WvkYt",
  "key19": "2v3RxWvfEuJDyQJfrUp9d2FDP9u4Rx4oZfRXnWZpkaE1fkCE2Sb1zmx5NNoCetmFRMQJGLJY8nFKWfZZbpwsUk1D",
  "key20": "3sHvyH564H7zi7m2bUZZX1X8o6avfb8BKCV6LXAzCvyuD4EgNN1SLdonx8kcY6ARc3n8WJMqGDDYs5rk9WZGHVuG",
  "key21": "4ChFF81uVFRC9wJ6c9Xup1xpQF1mbg8YDKLyeNypmG1fBzexoTUQaQUYxN2a59p5D7FhNB1To3x5hCZNPy75qTj4",
  "key22": "9SRLAbhWsWrPasDRNgL3didJpce2F4xvb8NJbK8GnrcikraF53Rq58FMbzuA2ETeDGkiP9b7fdCm2wQWikfcv1S",
  "key23": "4CAoHbza6hXrGz9mTAg7EguS7gPJbLsaSZ1AdpgXSknZNs28rcvuAhStahCBvyGhXQd9L5adfHMfS78BubcBsT6F",
  "key24": "CQ5VXaYYMUyz8MupzYzYQUEuxMHMpw7LULrYbp1zNWkq6u851XHXQNKdvasEL2XqoghRmk5FPv4spDptsizJ8T2",
  "key25": "3Hf3jRCuX2QFUNjU26PRiCJR27H6GnoaiGyh6rzhABXHJ2oUsks3TrHNtwtJNdK4jq8oT9UjqCWYspJW6yKfkiaY",
  "key26": "3Pj8C3FxFsZjLGzRvGozyd3gbHp7oFRum4bfENXeBq3StEfCaEunZQpsCpQuZQieUXT1bTrjfGgDhpetCmbBJ9hv",
  "key27": "4W8U4eXFTKYMdu3vvH5r4tHymYhxkqqkZk3Z4XkRgQ1DLHgugHVrj3Sq9SNMhvX3TVKUUzTGMQFNfpk9bMqKpsYE",
  "key28": "3GbmVZKRzz86a3YQ8YLwYr1btmeVyCGiu7dxhnjKgMEMZFufgSuh6zo8Nb7n7iukoyxM8jkrn14H4v8yyWyE3GkJ",
  "key29": "4PrSGieLTT46hYicPHNznSLbz62iJh6z8fB8BP7PkbRZNGxgWyNJQWQDe24DgtYo6rpGMAaXZKsZxp4QdGTWNX3N",
  "key30": "3KTTR4cwMoySSr5inPXx3Mz9eXHp5Lo6UjruQRS5ZayGAfj1zZ8yYKbJnsLkjNSGaQZG8wdKmbAM3XutMt7hS19n",
  "key31": "X9ZM8NHEg6fnndmSy1NSVY8CVuW2kyZehRqGs3Dj5mSuPWu33NYUpdCEtj62PZnmcuc9F5CxPSXtAnCQ13bpuh5",
  "key32": "32VNvdgPAx4VTvn5qiRstUqr7kEnoKtEHh2aYMGgPwa795jCqnpXAHu1avCmbCJYvDFJqUnW7GxsdMMBy5qpEdfA",
  "key33": "5x5cMhKALXjkpYBWSH3HoAR6Esi8gp7Lf9ei1JaPTuEbtgFLRzFkD7m1bqAscQyHr1jqB29YPWXrsRYrtjwRXhAf",
  "key34": "26ERHDEki5ZJvZu7crJKJc9B4nVkzCJ5WzPRNBXbese2eANW2JKWe1d1XPcc1FigMyUdHia8MY38rg7LFGius5BB",
  "key35": "3FvQgpuTm87MoJHKfNgTJm4mwN8KRhEMQz3uHyUtAbfFUpYYvQ1bjZTR9YgtRGM2MNHNz1tDUHT4rfyD6289arNZ",
  "key36": "2d35KMH2hxkMqrUdN95ysUgdwCJApRwJwr4Er5fGf1VseAvFSi9UUccdhJkKDHJ3N5pRhNGTKpgsY6Jdc1bJScx5",
  "key37": "4QLpDKaniskLM5nG7x38FHtMnC3Tjgkc7KQC5AXCb4WQkrYnepq5Gg594CvhNJfUJJYNLY1aNGT7EqNZ3KdWMoKe",
  "key38": "2DzHRXQ7st3wR2mdYQ3oxFFtZXcBpvBD4NNwdmpWwiTMrfi39TMMzjbhJ4RTAFCHkkQfp2DNRfr5m8nnLTvcg3ou",
  "key39": "3DvmdLorbDL9opqvcQ4eDPxTnY5NALGEjN4XtEmSEE7syabbTzDXQQXVHgDf4GYVnq8PcVxDzpdGQoWf5oaru3cT",
  "key40": "2ja7yJTJHSGUCAZ37ctfMnRFyyNTW4HbcJui8vP99T2KbvvGRjSeJPHMrpbnvfQ2rCo2zYtgRKfWZoBsEP4L7TcV",
  "key41": "5Ry6sVWhjvUKAoVcASKX3o4FkN9hduStU6XFb3kudTEerZkjCrVLWDu6MW3RUWFp9f2U4vvdAUNv3w5HBSqCvXsr",
  "key42": "S8TYcosYKcea2Rhb45vd3S4uYcjGswetc9QaFr2t9Q4yGJL9AhfE2aQP7gMmFQJTWTojcnuHHGMgVXssXSFWSEL",
  "key43": "5fHdhuCakBLc2GTumjtg7LXsEc7U8vZmsuBwbaCUxGeFd3WgGheM1NBK6XzcEdwwJZQueH12PjMTFwj2qt6bzZrJ",
  "key44": "3FtBeXhvgHudaLVLdxwekemUpXEdQDqvhazpEVb6pA4LEC6bMrbR7dPXKfknKCxNdz2nf97EN2q8yHJ4zWfMqczf",
  "key45": "4yVtq3rDjDndZjAsnJNvPWCNdNuYupZkSMooL3BuFzJpoPySAY35uYx7THJDRPKeQ9FU3fZxFXXhuxnxMHJ696QV",
  "key46": "2t5wmTmXiMsSaGk4j7CUtALo4evZhD4FPFXv8eoZXZbdABKacLQ4J8S5HS5ApxjR6Mbp932NtRWVVTDRFX9wsEQx",
  "key47": "442YfnLAMoCbac4noGKxTuPXDhH7hsqw8KarA63RKD5J3ABgxHitZdqgeVBpoWfDCYbKdpFFKpqtKpdjbhfvVfAm",
  "key48": "5x8t3wtdeBDjPFSNv2W5rwc7PvbKBvuB8Bijy4Y9ts7A8HkQtWXvqotx5sK8ZCGNQY6cLDXWREx3GMutiNnhQ8hT"
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

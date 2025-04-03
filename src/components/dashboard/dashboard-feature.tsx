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
    "ZzU7HfCqKdA93aCd2SyrFZMurYQ66C1b2qXxgbLENVuXtJNw9UPCMNNY2nq5ifU11BFmnr66oyxqDrn2ETSaY6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9nc2i7BQyVtTyWvBf1asF9WGJBGVohTJoxFtCbVgJszLRPCqdbuSmBQKHSfJkv4eNqGtq4KQ35RpyvCDnzS8AS",
  "key1": "3ckoUvnBnWwmHk2xU2hNqrrSyCJPxL63aekgJsRRQ7F4Zs4G3EKPPZUEh5U1vS92SpyZ2KnRpE44UsiNGXzFmNsF",
  "key2": "YqzwN558HAGLXktRmFH6tvUAmG9nBqMVH4GzsJzhTYjbttVy2kGhFnEVhL9sP84pDtUBj8HWb1DkaCtZJJbbGw6",
  "key3": "5eX8YcmdNuxm4DWr5ZSR6BDWpNvwmTdRPUkFxmb4g1CvLkJJe8CAha63nvTFYXZn9vPbqoyCtYo1EgSmmUwXj25v",
  "key4": "2n9G2B7ec64ubAhaGS8DK6ckqsu5VC4teqCe2gWEUuDsELWwgc8Swj5NSpviZaTVdWouRC7Rgyp7MjTq8aurHbXP",
  "key5": "AVq16kUiPe5dKJ6c3MZGTVp4uacxhTXdmZJEs2RLRPYriRcGNgtxehE7R7fqadD95Euix3DRU9yeXEniYd54J4K",
  "key6": "4urAsT57bPzgJyGiTL9mGWoufNDngaqh3DBMYRvU44mPyoomryt2n7Dpp2aCC8hdKShq9HPNcRdy9tN199DpHsXn",
  "key7": "2JbVr46kdtdFQTkmsFH6KpGoqTjJHLcnV1R9rjH4MZHTvGndbonBxQtKPghd8ptcUHN8jyjuXNY9LAENMmyL6H1B",
  "key8": "59bxrRxfU461HCCumHt7KfWQdMBrTiAuoRNrnN4Ch3L4DYxzGoXHrbMCG3RGE9JZAQwS2R9Kvd15rUe62o1VsVxk",
  "key9": "4NDKuBJ3mJHeySfqEuQMKhxNN4SjNGNnk3YaJYcunewDyLwGNQZmGCZ9PStibUW6o29uJ72PH3aythb9JErvAG18",
  "key10": "2tFgJMX2SsKCbp96i8CCwoQZiUor8FUHF4PUXmXD9RaogHB4rbHSkcN6XuCqKmy4LRDPnez2AN1zoVqXsFTmnKvF",
  "key11": "5XJ7Syc8sq1wHSBnC7SWgs4MFteP4dCpdTcXPFg9rQfaKVeVPAs9875zQZgzeskUJjPiGz8qWM1KF7pQywnAsYc3",
  "key12": "3A37sjos3mEf5m46MC5p91YkKaF1ZHio2zLBxw42et7pLguLtspGNhU86UmNmvPmwSFTK8hw1zc7vemVgQSLvaPg",
  "key13": "5AR2j2ddjuxDZSFmmq7dxqEECu7Jxr9i6UmH7oZnabntdxQTJM5wRyC3DcxvDhGQPh4KU3vjtVV97Ki4VJwrTvpM",
  "key14": "3mk9o7wtj532fjYPr6XC7xDUytBM6WVVehf1odKXu5y3Az1UP7Mqo5v54bKQrM69UKxxnKn1jsC2rFvSqJYcXBb5",
  "key15": "4ht4aGaaFUEtKqHLo6qrxh6AyjqCbSq8oYQCLrqjbEpbF2sA1Vue1UhgvqLgXSQnF4wbkpr7eYPb6YSt772bQXq4",
  "key16": "5Dmp11JLSquCJntzgrroX1ubL2EYYTQJKnbgvgVcoG6tr94pLd4SVTMx2tYbuCLGKkREaqMKP5pnbUyAfEYVxXoW",
  "key17": "w2qBxshDBhd82Zk53kEa8T9J9eQxg1hnSnCUUY9EA8y5J8bkSK5z74FXN7cVDYr9qqnm9J56SQSFpKEvSAVzUKD",
  "key18": "2vPgprEHbj93pyAMQBgSbgrGBNVT3RKEYHNBZVGTFcNsUD8uzfxkevpDqLvHzWgnRMb9jJWx12Bz5Pfatzsq5JUA",
  "key19": "4PYS9GDGxBjrs9sfKRyrFQXnYcNWBsHjQLkvboKbXL7SBupdkeKGYCge6QfvfdBX4wB3oYUwCHRjxvqa4huaFF6y",
  "key20": "HPAD98ytDtic4vHpYm8tdYkH6Ff5G6RaizvieQcrYqE85MdFVzRx4AbYRHFJe2vJdVm389E6u51fxBzgXgMimSm",
  "key21": "52Md9UqQerhTfrAp6GhhEBFDiKzbXKVQbno4dXj2WqNvPTBcYy5LE2i9dNcdizq1FWj1yHbgFzm3QiVxrQRxwSEK",
  "key22": "5Yd5qZunaoQaaZfYgV3oX9LMsLeaFb6coNSEkkKMjPpqH49i2cc7rNzEvsHpfy6buYjuJphEJpX78463nRCtpPKY",
  "key23": "4evuwdFt8Ageac3k4znTPUd7biyTqkVkQfD4rCtBC72GFZBuRKYRpbYLbzzk5EqEXP4KjArm68NRdRtEkjuWWzct",
  "key24": "4GA6quZkyGAXTk9qJPW5hBZ4J8ActApDf1SSd1eb4ZASFnVFK2efQxNn9Cg3RwHcvDWjdaYhFydC7SzGEGhrsvBA",
  "key25": "3z3TTAnkkQ4gt8hgS4reBrNEZ35DMvb4nhsRrd4qzwpECd4JDsiH4QdQM2AwDdSzxiS7uwxoXF5dUDAsXSF5iMav",
  "key26": "55S9srWKhMvMbnws3Tp94iXJRJujHzxXhHjFiETKvreGiSB9QYjB8rWgEJrcDDcJUYfTh9ryhwRT1UCAHfqXg3A6",
  "key27": "2D74HmbvNe8EHGZfriQ9mJfp7oaY3GhmCDkCbrayGjBNvJXrGBqsebwFYVsdFopaTLedqcuo4BRRrb8kfhPJo6Ax",
  "key28": "46zfhKypsUdsutwDDtffgZDLUYaRR8kuSybDJ82mUcUSe7TtpWuMt9kX745CR8DFYczL6bFycbA5ANwNS6NGEv8M",
  "key29": "5i6iujU2jWRLnaKZg8atK27Kqqrx9F3WHaoSSPCY4DxuWhqETaXxDgpxTkXJas16t9aKMnEp38GjKKqtkmiqD1V7",
  "key30": "4iC4dseCq2ysAVyYNqg9NvSEyMpv7kV4DtwJYSFLwWQAfWufihntYaNc5kdi97GViT2HgNx5iHijAd3i6b7RV1Gb",
  "key31": "2mo8kvq2SZa1jdXXTkh1s3bucA8TjLVitdAh3fH7Uis2g1acrYmCbagQZyGHckZvBLz2HTNfd3zrYskPYNArkByu",
  "key32": "5ruDrnVYwnCmfZubDN5jtbTPN24MLo92S7CydkDc9kWSyEc14ar7u44X3B1TGR8LEpML3p57EgErB9s61Zg5uFhW",
  "key33": "2jayZNqfSxhyeMogoWr9Wk2pgpQEQ3e9uWNN7TDz6uhrKm5Ykf68H3wuNQXDb7Y6xhjejASApBVdUn63ttsv1UbP",
  "key34": "6qG3vCirYrerjRmBeRnRJHTaTLSsyVaqTvuwJs9nfFofQMBmGrEdUjFATLXQQePnMjjfY5sbiGxRcAjE24P25cj",
  "key35": "599DqMcZ4DHHbUnfa4n8pQgixAgpUdZrLGesLah67MyqnuVAwzLMYKkjxoK8kv6naHcXf98oujw8Rtobq3yQFQZh",
  "key36": "4oxkkNvVPuN6meB3YT1m95axL4ndkT3WJY33mm5HjxiipqU9eUtP6r3myCPGNGwVvzgAaTixSD6MUfAgCZHbaNsg",
  "key37": "2UVqkATzDGH15oMKHBmzDG2TL8jBe1WfFm3exYDf3hQvjUZfHSMWiw6YStfZCB7HjQ6rn1BWjU277o5RgRWMixnQ",
  "key38": "47xoQq6tYg4LuaxEJDs9trAkq7bt4QSi2m6jtBG5KN6Ai1wnFTpU2mjUKbbhHFYpHEG1zqTcZDn4vGxT2T4zUuBX",
  "key39": "A6aKw4oKnLertE2nGC4aewGebHJacfpXDzZT6DAbWJVoytZikvSoU46SatQNx6Q67SygDK36Budf3wvdhqV7oPN",
  "key40": "F9zMGNnxhBwmruaKX1j1YJadGZBJL8aVqpkRN2FXdNUPzAhisiWmirTkW8seNMSebiSjxVKxCZFBrjMQBg9jzW3",
  "key41": "4rmLzqiXjb6xKnFyxcsbbccvXBLi4sKWxrcBbWfAAT4STdE6pSHa2G3wbfEbHwMv8zvjHYU1zeYeBHN7d4DCZXzW",
  "key42": "ykt9swsTG7fmtYUULbbLyJ2ruWD5cmcPvxS3M4Q5pE1494qXUdhdBMjZ4yGcM8SWAqzD78xbJxnuHretKvNnbbm",
  "key43": "61xdFzKMmG9aNgz2MH8dQJfVgvRKPN8fWhDRkqKRKCs2xrb8uMYjuJuukeuoD4b8m9B3PfSEPBGjxvd59nBibRX2",
  "key44": "2RzcHWYbyPjT4WATgBQcUqfvSLWnDebrsxnZsG9cbRentkFhEfj31cXgHiWFByUtu4565HXTDQoumrmBbowQtovE",
  "key45": "5K2JGTTuAcJVVwUooE2Fd9tSvjA6ovJ5bfontXBiawfLf6bb2Y2ffvZbG58XJ9yZqAK8t7St6qFoXRaQApAh1aer",
  "key46": "3aFLZ78fTyN9Y8WDSpjoii597dhkbyUjHdTuYhejs7zLoeo3c1q35ozQc4TYJ9wa2ssDtZA4zGNA78KKDjozusk2",
  "key47": "5DkBxhf5riSpeP1RgwcYsVbmeADYvpyoEEzw4jcs1mYNtMx81MZfAhCwMjRzyuSmrKAtCE6URrSYBFoq77Z1Vhaa",
  "key48": "5ckZwF7apUi24KwTyNpskBP2McGJqeMygtJBAxCHQQVh5hMHCa8nQc57WDpgiS8W1zVuARyni5VuakMcb66peQ1d",
  "key49": "4mna7uHeNKZqjYLrBvW2cDL5FBZBrqBtZetdzAjyhYXgHyDPUfFtSQdfYiYFXh2uEs2y9zCvYiYKWyhVoqPFP2U3"
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

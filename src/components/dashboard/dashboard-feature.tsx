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
    "64PxrQsP22pDBusFhpkt8Gg4UgSLZaaJ2WobmRjDGcEvGc6XAxtRTADZKhb5fBZyK4Ys3fb4cTH3A8AEQ3mUDRPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GE3cr11BM2z3hy7JcPW7jurZGJVidq6TytHti5Q4hd7hsaJBTw6vbg2PGodSixh2xs8muiiVKPtS5k8foqLkoci",
  "key1": "YiE1aZ1FUB2Vv2rf25vAgdkum2nkmmBiFX3HsvBxxwxc4FvTSBLCWJUY7EWGiCt2x6713L8i5wsmuJFJ7HcjpcX",
  "key2": "4cax7iZH3PbusUTkNwaXSrnoFc9it3abNSmWsU95PzZoNqMgX92RW62tQCQbLEDG38gcefb3nmoG3YAhTnN5YWt7",
  "key3": "2zyyoFPxiE6PqhC7Rg2MXxMH4qyKrskZveNoho48iYrcaX6zSkVU3JrPwnNXBc6HsMNRi2huWTKzuci7QF9avYBw",
  "key4": "2CuBxHkrMArcoc6DrmJ9LZLQDAXm6wGB5w2saisXmoKhD5KgQgLGdFNYBBBDHPfGR8EJdc4NefFx3S1GjFKsWc8q",
  "key5": "8CbSHXddeqdxEYb2wCZaUcXa85jaPfzXpnfhe5dW4efUknMYn64AgbfFaatFYd98K5JrD72oKqLCdzBdKRwyLQA",
  "key6": "HP12rumXMaxJrFDxGDkXdC5M3XsB9FFhRwuhbufY8h6H4RVkS7vJVh7oc2H9YzMkdRPJW3Xm9mKbSqadg3GGuzC",
  "key7": "3koegqiN2eNCqGbEgp6TuMyZp3GTvEECEEJMAv9vKGxpZExXyC2wQuBP27jggL5Jh62mCo7wzZxVKD5fTahTv3CT",
  "key8": "3KatkZfVpAKc5S65HTbpdJqEq4UMcV1zNnSkot46TFuQ4ZRdFQgWHat6RQhvjsgFp9eUtfAvt4upW3trotQR6wEa",
  "key9": "T2LPKFbKdMat6WoAVeRjCoEuge3u8UHq8funypaDGUzqMSjBkThj4tK9Uaw6eKpqLeuwfj4gaSmjq6SgYT9v7d5",
  "key10": "4G7MbbzLmUAGPtJpfqqxpmx77enPt7PBxArkXB3WvvX4BvAVQoSSDB2UWaJWQArG5T9sKTrwRnt98VQaamxX53My",
  "key11": "2rt7smjwPmRvdxmyAswktUdiirZ1PasMrQPmeTm2zUvT3sJSbhDTep8X62YuBfgdsPquzWkBeoajM5wUpq8Z9zDz",
  "key12": "5dEmdpxMsfGX2ooMz3wywd1taLqrXXfjZoVSrKwtbjUPqaoEvtPqvjhfqbeJ6iSVSafefbu7ZeUeKNiMP72DfPJD",
  "key13": "bpnbVxszTpJycmhnS2pVDQUMbwhDzo9TynfGUnFSa2e8BoD4CHkH4aKY3kALqvr1L3GBUpY9CEJLMECrTJpDr1m",
  "key14": "4kyT6Dk64E1wLapQwau7D8bvz5fGFFm7fLQZjysJJMVxfVJBnTkCdS3sTy2veUDoiSNH71oDQmnHnUcT6iPTgj3r",
  "key15": "54WKvY72C1hKJngRxDBt4JVz6sw5Ci28cPS29Ed6jeEoRvA3nYVk8HTzMs2hc4PejUeQQV5xrnpxTRqMS5kDyrDB",
  "key16": "5BhBo2bCi88JvHjJbNfEVbD76CdHQ9wFEwsxdX7R8164zorEfxk3vzV7Qdse5mdm5u38Gd4D44qdj1kmgqG8tEB3",
  "key17": "5JHXezfHBj8R3z8BFWEVdM1tS6GXkUX3BKDu3gMhjhJTQGagWzgtWDBUFJQcuP2FHBFhBGko1GsDZeMBJ71CUBoQ",
  "key18": "4mafbLK8SDQJU3YS9Pf6WSofXXJUAcQkNpA1B8NjDDkzuTudTfkwReKKMbgL24rAshNFysRjcfDnXUNnbn3m6qUK",
  "key19": "217FbToEvWhyaYYueBr9Pr6WPGgA7c7c7ZU1fYEx3sAxfdw6tJJoGQ4bMBqB7wBTWQWEVeiXSryHp2GKUsprpWQ1",
  "key20": "2suCqTwTJJBjjEZs6D8FfgiVnpjdWKTtsc8LhA93JzPJGwe2U5ntuzSUYjy4vzuu4p6QWAjNDmDCyG4JUbKiGLps",
  "key21": "5SJ1YJNqZicvJFDuLtHrD2uBjDfgBaqQj7j6Tgir8VgNhLYYPFNLbNrAmzpHJn4y6k6CKDLrks9B3wFEKjLLHWNN",
  "key22": "3sT9aBF9WF6cknJFCoAuiYgiVQ6rRN7hckCxmg76ANzJy9B7P5tqUtJUBm8pJhsLfVEAUFx9Q8K2h4JX9H2wJUUR",
  "key23": "4UEeZ5hKLi4stGCTQ5Szod1k7eD6bDUSji3T5NSMZqXEKMZW9Qd39aKKgezpiYuLYGMEY8Q27YQbBbRg9Yn2eXeh",
  "key24": "3MGLc1tYPhzu1XWKuSkNjuRekBC8LPyGBZkaTC1WjUn8rNxkUkk537VWNnNGe7vEJ7qkyNRXyPz8rJ13wvHFD91v",
  "key25": "2QspAb2R9eFjaA616zeXQDc6Ru85CuCw1iC6tneydqSkriB5BHFFvkUByQLp2usdqMLvgshSrUJkiJCyA4aWK42C",
  "key26": "ZDfdo89AMKv8bLJGmy6LPibWF23ntepfNBDkE8y2SvCM8XFRicoMWN8X4Qz2ZTmuHizpb5GxKBjysj4nAwZCUwi",
  "key27": "5MhiJjbG8JbBnqZ57vxZTSDsevwtSSSAMWdMY5rtDs8hLgg9izVN5vpbxwqf5dcwLY7wPN8SkitxnW4272DFAiB3",
  "key28": "2NY1m1S2655BKUKcCZdLmWzPwcAEobAydEFwdBMw57zPaLPwUbT8qXqtj6QKTqthWvegz4n3ZAxSRH3HU2wBWbTA",
  "key29": "5vvYJP3W9Lho7vo6U58XJYeT9jKWBBJJTZwKdYFjmhEGGJ1iQdodNkE91s77QSVqKgviV6735x7HspWgoQBrfnKn",
  "key30": "32QfsCcEJhkxws4wBdTBAHzzDwbxPxuW7cWQW1mDtWMzbh8rMHGLFRo9nrixCQ1Le1QaKq6hwtdgPCx9cP89peqH",
  "key31": "527kmZ4efypEFkNwcmRwMkBCATUdH9ixKyPxWtGu51zQxNBwWYVvXaLPMQSuLvtvKBAjt5Fzg74RYTDneEat4wb7",
  "key32": "5MAjoD4HmmtXmJXs8GfuqdC7LLdEcUzNAJjy4yvBFDHar2XA3H5z4WpDGWXkEt8izeAH6wipyAMySoQU89VgXuc",
  "key33": "2hhsKfN4QSdXh3hRtrFxqbeBLhJQfMUeqJ42AhK19mLwYdLCxuZwu11nUh2fpmvW72ad8piosUMVF5ZhyNwZfL4v",
  "key34": "3D9pUKdWjZ93HT6a81GzT6TBAJ6EPJRKg4Y7MnB4cUnb6Rt6jweRve5AgWVntswaS3nBJSz65ayudLodb4DWifkr",
  "key35": "2DBQnwdNfGEzNdyNGMhT4ZMWUEtdo9eEVeoGdfYqupYKZ9iKqFsihSCYDWJs4GccseAX9VTUi1LWqfRk7H7pg2mR",
  "key36": "Fmc383BXR6skWRDna4ytdB2ocjC9kFwCRdt6uQDVQ6RdWpvYbghH7gSbHWHv4RW5uJYnnSjyPn5kdQtAZp4egNa",
  "key37": "5sDyHUKSTZ79Pg7UJm7VzJh1FiUa9bRQmS9woJLnzXEfMGkxh251yU4uYHuE6y394YqwFWz3vXe8mH13kRJt2qNg",
  "key38": "4kvCHobAnPQ4B8e7oSnjuT14Hy8ynm9CsMstMsXaJF8DqtLwLMhgCuuEYNJ53nqPfEHgNuxyQLLt57V6k8S9sAq9",
  "key39": "gQUEGDwvisM3ePKYFJJnttFmSKZiaSAuVvP6uReGEfRRTCHpAb3oLbVQSuByp2r6cptwohuzst6cLcyB4PMnmEC",
  "key40": "FJdXMVepFynjv4fbfpqFMr1sFoMHLbpuBxnFFXeK2UvAT4CaN2asF5TF9UZWPeLt477ZriJrjK4axaXvCWiLrug",
  "key41": "2tuhv16PdYXuUNNJWpoxdyyhCgy9oWiK3kLNuffRDCKTzrs9s4F4KqTfqhBCzbgXVeLbyqPTpAmh82gxFKJPaao7",
  "key42": "sRPDez6fSGV5BNASfX9MFMS4ii7nxkFXrRcmJjJyEXwdVMy1ZEgqJXMu2RpVcvTKbR4ExLoeTuSzoD9ya2AsxeQ",
  "key43": "2hKUp7KGQQdv4Gwb9RkWQUMZERMdEk4FsNZVM8XJ2fL5ZZF3v1xGSmP7WVL4P1wj7oBm47GMcyfgc3dUKMJybMiZ",
  "key44": "57NLeu3cmqhZBphfCRSdYV22FsmJ4Xxp9ZNj3K41rxyatUubiMwQMccZcrkG7eet2hQWARVJYLFckmwmMarQBE3o",
  "key45": "46k3jGdNyzLP1mn1kvQXxoJmmvcTChNujEovyX914qs27Mh8edZmhy4Zxs1GSXxvctXhVRczhTz92t4ejxfxsWSp",
  "key46": "MRna8CvQFNyZdzuaTef6AHZPwPVF9Ldja9nsiaAhZfCy8Yyp4wFR7gjxTwDwoWry5NAnQvMVZiqziCg1RiUU6DC"
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

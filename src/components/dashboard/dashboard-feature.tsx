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
    "43NewVVLSxo5wq8GDh6QUveFAnHLqtqju7kThUFMEm9bZCZa2gz78t8TJYbq8pU1LhG5HWbtnKTuKpBLN2JZUH5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RASAKacfWfc8csDp61yisdjf6obbrLpkE671JQwnLskhge5VdYVnK1ZpJC2kvvQskHBmVvF1VQyFS88Nz5giRAP",
  "key1": "wd7W1ZhhXmgjMeJdtj7wPXpqrbGEDudE71gU4bSb7DbLhqUbnhtsHBy1tHqHd5ugrpMQRGPpHdLv5i8dbCmL7Tc",
  "key2": "2iEfvrpFk26qNhC3pWvsrvYFP6UK1sqkk1hwCseqNYhm81zrhjxGhtNNiEbbRZkNoNYvRHc12aWmFrHnmnpLDE9s",
  "key3": "3Ji44d69J7JxhkZJTZP5jsRmtYWLH4gFUXhi6PJ1x7euVjpBYwnY8GMmBxWnz6EUyNmFnbr3i1ENbjotUinaLoLq",
  "key4": "31TuoAi3M85cJsLWdoqGSLtEprKZK6uRD5vBzXs9e3qmpYpDEAkZAn3FjPTuCyuLFLwmgRoLaTcddTCwJzuyFYdJ",
  "key5": "YW2gnibTtXMyb1CXxT9BHVYAfkoRwxihneo79cK2QohJEU2iLUXxRLJ5LS5UEivDCcEL3JbXVuTzftLonttwXMS",
  "key6": "JCwA8ryxdUSavznibrpU7EFCqGVXi1QRb7bEyKWeHtece82KMaTuksTwfscVXon81dx1izEsVXg6nD8XtGfLr9t",
  "key7": "5YB2LA4aqSauCC1CPJp4RiAmG2ZipwEo3zBHqsE9MohTrBUhU8D55mgwykKHS5eXtR1eu47TfxYussagtZ39wuav",
  "key8": "542eeENnyBQ4wa3E3PKhyG2rYFvjBoydE7C3mQbDUM4fAZ6d8BbiCaJC7yE7Ez2KGdwcs8KVZMmS2Hruk3t7bUTJ",
  "key9": "yAEP8PtWPXT8wBkz7V5NKQBdwtJpVuXym6SfbqcTXqkF2ZKPYbBtqnRJF6YY8JQiUUsjdH4SAHVYuZ9ZWQJavM1",
  "key10": "3tr42a3rs8owiNqx6akHPCMNqaxZeNTrE9hviphAow2Jz95uRT75x6fjRUM1uahYqzBbwpRBhs3LRCvMGMSDa5pf",
  "key11": "4sEnzXyMz7qHgRDRmULQK644y4KhnX7wKdGaP8Tve5yTGZDCvu8C5bSQw9NsUSgdFsoHgSYhbjEDuQ7tTCaUR475",
  "key12": "4wAyPLNzEHEWJzicQsgLZxf3Rr7vYW1faMHbAhWpWWWTLqZtzZdTTFMp9f8VD2XWcjHMby5ebVukctHddCDfn22N",
  "key13": "3FySsxsJGcBp47bc6Kn9gSvoAcf3fzGJgMTeVENjKBL3DPnce8qAVT2qB3RVGoByt8wsiEEg8WcrcsF8G2w1pcyU",
  "key14": "3mu3jzcnrWjrynu2bbLKLLyhF941b3QnYdPB5gjSivQrQ9xsEo52BeSpMYcLtbLesasLdCcUdcXaaadj6JwQn9PG",
  "key15": "2YkNCvceAC9iokz92k3NFTtL98j3YUQvR9bC4cb1SFqU8Rikeryr7opGn5zpuWtkS8PZnmQnDHoto5EQsrFy55tr",
  "key16": "3TNGKtG1S1eXQAaoTge6fH9tKQJP6bk4y7rkVjKYvKnwYMzwAvpYjTb2KxQAWF5nufAHoRvy2AEUJ5m1FpTg3ycS",
  "key17": "2PJhTxvzoLoJQ4uirue4943Nbu2VRzbMVdfN8y112WY5gdzY4RGvSzfDA6LmhhofyPvtFwKUG6ST6WcBHE8UiLf5",
  "key18": "4CCbyuszepDSnkZvUgQ4An3UhM88hTDEYVFYsJ42eYCthNbJyCbAWH9SkViFku4xTuZ5ByfhSFZ857v2wsGTcBKD",
  "key19": "eQkYEa2TBXp9jaaqeuV5FPgej5ip15gfc4YrVyWaZRe8Sz1957izUx3PeGhhFFAGCMpjdBfLeY3X29Vp5SoPyXV",
  "key20": "2feUV38d6b5mXBkYztKddjiLG7opXWSABUrXDkdNhFNf92i2wXc4xet7TDSN72cn75eitGfWfzJqq1vYa5CS4KrR",
  "key21": "5G9dyqHANAy3FG4UXJEsYULEBvjxJHY1KaytESWfFGQQwixGRDE68aEbEKcCqTQUb3mR59FPoKbXnJdTE2sFMDwk",
  "key22": "tN5LmqPy8GT3NNevNxTCv6VirH7VHBX8Hn9gWtscfedToWKZWqLRghtrMzQjWLrSUj1LvmSWU14aPEkPzMyYKo8",
  "key23": "uMYwRArRKqY7nRVnrcadgFBkVJM1mU44f8kgxzQb7McXnKoViVDB5sfXdvhXv2j28Gdsu2fR771uNKs6ZU9nVtx",
  "key24": "4yCe6YBp7Fuw6Aj6f9PJnv1gurGFBYjvr6kTJA7hn5SdCbC3tCjKW8LpMnmvLhsJtiYYvuAjZBonMAYC41DbFE3j",
  "key25": "3iAUpeF3D7Wv883w7dZJtnc1GKBKTRhRrNy4Vss2cNhrrN1AVEwh5hdrhoCb4V4bfdBBxp8oAQbgv2Up92KGTwUv",
  "key26": "2jbwEff7cP9m7EV7KPPjhiHDUncfiRTk6uGxak9wFjmF8FyinTsFbtjnaieGcYU1PVe6Q2tpwnH473SHfZZqtFLK",
  "key27": "3HcHv5pqwCbi5yXAR5SR3Vx7meNqUdARQK4oDU36fYXwq98fM7mkR4grshd1VG17tMNzBXQuSgY75B25hB6yT5LP",
  "key28": "wTRzrVwy6oC6cM8B4rcRZxzxwnyPQ1y6Z67fYSE3bi8RbkPbr87wYTmiSCvD7NtrWuDp7DK1WEkKoqo1gum72Lz",
  "key29": "4P2FAe1tFA8Q2xR2HAYX3bnmyzRdrhDdhfP5x8GbiTMigVTyUviHeKB8WUcT1y5BhaQmmirSjGBo1cv42fwP2GDz",
  "key30": "33yuW2jmdhm9g5Nw3VEZpEwSwy9fADgKvpU3bHDEUqA2bqrRuNsJkqiTRFEbp6ZRumbitrbUwzNwRChzbgEEvaEY",
  "key31": "4Ytywp2CedZSsPAXBWAKN42JaUTHTx6L7Z8Lr5raSG1ZRTEA7nELF6sEUSGbhjAmSUzB3JAJ7pVCkgRYif9VKTvm",
  "key32": "EfeXRDiVp8YoAMpYZxmjxw92Prk19zfjuvHgnUMwE9Pinme5PsjwXDx6FRxGgwHt7aAiwSa7hzAJoKKhaUWCXhL",
  "key33": "42yVduaA6HDY3ebncHJnoHLu7ENXCcYpEUCHbQQEtEvfHnCdF2xE5eJHT4cfnWQuhuDrQR83JNAYp6aPBUvM8jHv",
  "key34": "4V7FnNvLnjDk9m24uG4tJimRjv7B7d5VUQF3uWtuab67dv6cDRvotmQ1wE29fNSGqmZVw9XX6zukxLhcmM8mMtoU",
  "key35": "3nuJxo21CBV9YCBzkCyDp27p8r41XVFnKZMFpWTMWaLi2DybFgpSniH8BC7JKD8jss6kMjmCQm3wWsxbyjgh718Z",
  "key36": "GAd2iXwTC4tjm9BSqXdxi7uN81vb6iAnZg4aGHoScWBvWS1kp124xPsHdP6cdPHUjoQFX2VtRjBuxjgFN6yCxG6",
  "key37": "EaKKj4FPv6HYMXpKUAy9zsveCxdz4PrdrokkbY1c6bfxUx55G2RWReBkWMNdNoz1x4DHzPyc3VVazpeLKHCBAgZ",
  "key38": "4xfHMkxdUJe4R8CRhXV8NwkqRaxa2E5N85yfg7DyoHGPAtvhQXN4cNeKF8RNWqJkBD7nicnNLDMHgNEhEd9ta48m",
  "key39": "45o1ddSuk3ptptdZux8eNXZNWkAeyerJhe6Qu9rGaPznc3Mqo7rx8EopKd32is1t119Fz9M7Voq5SaLbqe7WyDkx"
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

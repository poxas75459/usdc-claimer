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
    "2F2CraMRuJNUsQA9Z5LcmTkw65MsVveSQMNRfetZd4RNcnNTchWupp4PF73nhsCd1KKScsUbgVqHyTFd5cMMCGk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5Fzc52M6EHLhEJSbcJzTLRxZAGpfmxaR5uVoufGxtfSYSunkQgYNFdaomfNfetQ9KjasAjcYWukrcZpVQV9ccn",
  "key1": "3d6XLaSK5tVNimUiQ5pFAG9EFVanaELKoAQwuCoVcMhGVUPZdFnF9DF3KeA6bxvy8TEdCHVguCppEjQPb24uTXHh",
  "key2": "2oE97cLmWmzcqgLxpvc26iJycwogbFjDmVejB6xpmReVufPjtxUNAAgwaL1zGACKsiuGFW3qv7snEAWePrDLAPeQ",
  "key3": "5xktvMzncshYyNzUrjqQREUTG381WjAv3hbNoxdPB9HKmozh1BjUyxj2NsHoSoRAnmhD3AxgZH1ABzW431Cwv7ey",
  "key4": "23SKXe2fLUfvR1EU5sCKeJGXLy1zeEt8StfCZXTYRzWkx7kdLuWj4HpLVzN4p2uetMULZCrEsCLEtQZB4w4y23zF",
  "key5": "4tmW83UqhmfmX1haNxxYQ1UyXj7d2dJTuFhLrJXruY3h1xnAPPVK436bUbGMNW5Vr79Juv8ZsyDEjLS5RMg2zWqz",
  "key6": "3rfmJPJ1vB9fjLmLsm8RPaiibC7CuwMM9LHUk4FmMjMtQJpMMDb1X5jM6Tb75LpFKBjiTZXnQwUntdGcC2tZNz3K",
  "key7": "wRDXbEFVwgwGUrVwmUfiGuhcx3so3oRtzZTi5rQALUo26RpJkieqn7xwGnkHAnDpbF14BYHrHj8qjXvrsvKeFmP",
  "key8": "47v5yLxe6AxKnRYs4Ai5pDtp87JG6oLgkHuFnnTiv7ZXBtDxTRd49gCJ5fkqdvNqJHN9bPD8mNndLHZGFPK4NjAp",
  "key9": "5tHTuWrkiZDRys7njqbk2iaw6Crk4Kf7XxCatFpekrh4N81Cq4e9cxkmq3kqyBUfZXdyJSmhiLyKzk9LK7qToc86",
  "key10": "4SLrENHK2zFXyEb2wFtR4mfXwxtCD8VBBu47hQrdGXSwwnA2E4t1sMTReA1SL9VuX9tyHYqL5DwFSSArUaNR23rx",
  "key11": "45L2DHL2qYpJtZH1guZ83xufjoN5NKh4nf16xYFz5V25CFVb6MyQDhU9UPXj1drjb6K2NJq5kVQxYNJALyWKZZun",
  "key12": "4ASZsbX6CgKszF53PPAhx4j8nR791u3DfGg2QmeRKq3PNJUvNZVzMUTDvdaezrnPbb397MpRvzVFRXfzya7cjrpc",
  "key13": "5TM14zRtKBXcr2zNBHgnadhUma1tyVQYak6PHJUjrXov9Cqhe6xLjnfDoqDG2WhWPduYZ6cupe7YwX4KA86aN6R2",
  "key14": "2bPevzXq7hPGNTWuYLWuswKHv7ckZMmGmQW6st7h4cfWJTPUDK51fXu7dk7j8YcGZJ2NSzBirdZ6iu36SYMmh6LJ",
  "key15": "336M2616L2oiefdnj4J5UqBYWFLCLrXmSJCYDS5YtrADJWAPBzzsH9fyJHcFJk61msKWSoW83Rt11FiMhsigCVve",
  "key16": "5ZFzHgJ2E3yY2ChFarofajj5Pw1fJi1GDBnMKSVJRciRdC9ptmbGXjo7he7xXALGN7hiD7FYHZ3g5XufQRx43oph",
  "key17": "3Qg94AgeW8KDoyafExmdxgT4zH1Kf3qxfwWorwKA12XFCZ4FnmDiswRrTLBRNWqgMkGEDfjKerJtQj4hSgL2zzy4",
  "key18": "4a7eYFjDp4yYjK4Bbznnqqc1V9AS8TfbM1ptoRYC1CSm4cfjvzD3KrPzKs3iwWqfXssPQMLKL9UbuCcf25rxvsU9",
  "key19": "5yZwhvkUkD38WpiApDZXkjDXEwtbMWxXmXdoUVjMotWwgVZRT6FCKmzJCyjkFECsUwm4BX9BEcuuwM7Pyjf4TVqd",
  "key20": "4mbUWzLiG75Ap2h6Z97kghXyPixNt6VJXvqnLFf1q2fVBKj8XFTqP2PSFcnx43ZpSkwCisMQzmDDszEMaYqwg52M",
  "key21": "5EK8mF2EP8LqAxddqysPfdJRJ1ggMWgHRsLKPqPWq6vUJEU24VR1qHLw7eSdRKvAcZaSbbMM5vPkXQpTLBD37kf6",
  "key22": "4Wdjd2KwP29Rt2JoiqNmq4diAitYieFqAJuHgTJHHwkr2B4MzDe1FaUY6Fz7UmwN56G3nxnQ9UNfZHFgy5CLpSBD",
  "key23": "2M5dPeqSys6rDg8NVtns7Jq6E2CmKCE5TwWSA1xngmJDrAC2Ag3vf4ffcwRt7mq7Twwnq3XNQFebzJLw7mhAXMye",
  "key24": "5JiANoN9vpJ5etNSWHLGQhGmqFbZz7oCivS7E1Grf524z5huFMNnZJVxazsRqALYUpovhcy7Mfi7yV6H57sBYhLt",
  "key25": "3nbtFJBE5gfnHVa5WqEJUHE8qXB2hqmdAZrqZVXseoG95RuGQDqyGdebh9DtNkQ38GsMbikTV1udj5aXr3ESJB8j",
  "key26": "56SngeZG7ybR4g3irhyBnBx7hzhoaCnT8bvoRfaVLGsJx6TLXMCRj7MjEH7JbtqguisVEsr3Fb4miwiT9ra1jVVy",
  "key27": "4B5Hs2SPFSkT2wEmTvvUgChwkitSuExxy3wpAbWLBEM3iV34qF4Rrd375sCUVZUccAPSAdxDjNZfq1gkkZc2XK2D",
  "key28": "hcSdVgHgb2oTTcdi3cD2ee3mS51averuWDTPTCrjCRWpqYy4hoGRN8HLzNG3DkmNpaVTm7tytmXnwKcQjvDjPFY",
  "key29": "66KvRH7S8znXHwHRaKzq5N4aBBP8htExpc9qzW2yXsNASUz7aHf6cMnAwfUwGJCvgixuu7RoRE1EfF2Um9Mt8itL",
  "key30": "52ankmMyB1YWtJ4pybiXwPYgQAwn9zxsv5814KRsnmYyXjEmrZjw51LETzf87N1Z2tKHf7am4eo3ZUVdZkBJJTu4",
  "key31": "3zxpFQnRviuW5hYoGqpCR8ziiXwLRYyGJtu95UZZSEs4tX935fhJgVegzdnz6BzNkQqS9nKguVgv171qt2NCzLkn",
  "key32": "624FTbY4XbJMoCRjrfdgNt8dL3pB7JLUfr2XJnoN3Tb3tgoYSyNfeEsCiFZqSLZ78uLugtw2CidMH2bpe2UzA7w1",
  "key33": "2pbxDdVsHNULsDT8uj8AVvq8jYAPjNy38NNE8t74cQqdMLW4qqhX6LNfGLQizuUp2etUr7Wcc71wkE379YCUk4Ua",
  "key34": "2enhuV2EhtTq6jaEm5QhNxgamM7z6yJMNvRgJ2KpReaaBWjYTfVzvhMmh8ZQswf47nLLdAMbVwP14A12B6E3AvGQ",
  "key35": "5FwMy315WVDV8hjgSJpAtEhMMg3sGpJwdR1QywXGV24sXSvL4m7KYaANrK9JcmWtgT7anQGUSzUyE874MrN8XVYS",
  "key36": "51wBeXMy5cDWGo3XpWfdWkiS9qSREE6hatt2LrLnXmXmzzwUCBGXwMUh21hobBXnSz3uwnjYWRR76nwutXZZajCc",
  "key37": "3CauEx1GPngX34GbpQHqDsd5jEtY53SNyabrePLPqqF1oPXJBbJwYFR9tRgMcmVSWE28ouXJLr8YFziAPnsgvRsx",
  "key38": "4ZTnungdaKQWu6zVEbK6uvX7MMHTco4CbuX9tPSEHgm2y6BNqs3Toqg8RV8aj2MfhthCg3FCCf68btbzV6qiFQdA",
  "key39": "3CsM8FFjjrWGGwMpULXZuKKMzV3oSCN6JTaoJx6HQnrjbzBz3RqxbDHMZheGjpfYhAuCNf7J2xUT9gwSgyHaPqxr",
  "key40": "CE2GJ7LPaLpGDvDcDtwpBwqk68qhJp9WpuGthXuS82bEWpHDbtZaU6oh25hfHM89xJEj4qtw4rd1uAWzxgByYMq",
  "key41": "4T4RgmFaHRJAW2cjFVWaXrcXwdBeDe8FUEyJcQ2CZZjt6rKKeitBKGoBGXYMpWLtT5Px9bYeHEKoTftaGpNceQhQ",
  "key42": "4ug7xh14n2iJEtYTzeFF7aTwNcwWZu1PAPcPpvMLcK3m6JqYqaA5UH9b9NrzmNVF3iv15ujeRoT8QTaeA75W5BdT",
  "key43": "4kBrbtgFssTFe4RuRQkmu6brNCs9PMYt1K2Wdv3mpaSnCz7Xyo68kwJ9LqeAG89JnATWjAE6rmwSjUKApUFw7okK",
  "key44": "2fx1qxYDpPrX3Cvbz8f6At7zVARPES8cjUSQDuDmgLosCsonk2cEBoVhBBXvp9Y2v4SDr2KaVbB2oio1EvtoMhuT"
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

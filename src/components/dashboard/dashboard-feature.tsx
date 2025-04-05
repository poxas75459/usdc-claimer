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
    "KW6b3EuxyEzBrQh483QsQtgbhyy5LYqyt7oSmuRsmikRtohBVsuMxqzCh3yLuvytvZpzaXAM6z4xpFYaH8j5nbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiAyjc8aTFBMyFZBrbknNSDFUTzr7f7qqhLMHrmeDcBnvtTAFpGGkZNQo3n7kmE2B9FehWreyDiVDJVAN3zYP6h",
  "key1": "5KzYn8m4jojNseRTXXWqGgkJCfB2vdLtfS7TKK9ucC85GZh3YnQpWQb2GMVQn9qvdhWN1SHBf75MYb88yJ6fuBNo",
  "key2": "2RH2upS8NRcgsT9Y9xuMgnEh9svHFnwL5H61a65FbBMBfF2vjHqPExkERMpExPEUxPeUCAaY6tNrbeMeFy4vPHdg",
  "key3": "3Qro5Z2MvvAuwLU7hs9SKshZVM7k4SkUJWSVUgo947bT3RQjnvnybkSD9rN3ArBCEpMNifVqF97R1NrxTG2eV2jp",
  "key4": "5Yy2b1JSU53kKKLCw2XkqKTuJZXE47N5NX4iwKNNxovnA42NyFsJDmxAcKqf25H5iAn7rktGeAABjz73fdZvxct9",
  "key5": "2jWYaegkuCf4BzQXRKtGoQEDaZv38MbocJxHNkuWLnNX5M7NHqDJzmxYHKDrkS8TmQgwELnxdAtpAjkM2KrtDJxp",
  "key6": "5dspWc1s8RDeoqpqo8suKP4J9nKibDcMR7jiDDdYdzR3pPiirhm8KmA7Ls2mJTHV698UuauuzZMXGeMGxfWdTUD",
  "key7": "C4jTxEW6ERUbL4rah6mBPpssmysizRhCxnJcfAjHsDGXCRfvVVmXBbh2tmS2Gnxx3nHV25nxuocZbhxqwXc4QDP",
  "key8": "44NRXMJpvStXcwLdQGKczjDSuxEVkSFEM5vMHTfd7yZUodKCs8BG8wEBjBrbcDxg1QLtDKeCczTwoHaqcrJuWqS1",
  "key9": "2WtJ9JYK7STud4kkg2HhycdUkC8vA1FHu8R4B3b9MYsTa8RJRFxPHbg5BB3ro38zYkrvnM7qkuKkADbcXm8hKSwZ",
  "key10": "x6zWTQtPSZRTWpaKdTvN257WMZZMDDVuAC6RAZfGJ3VFhBbgAcLydgZGxYa1HbXamRVU8gjCdyv4eJMiUkuuDG1",
  "key11": "72d8yiNc3FwLQE6e35bJmmM8mQwyxs6a4euDsSeTL7e1znK3BSGkvuyQeggnAhySEB1PviQ67wQz6BLRtaKUEPi",
  "key12": "2GMhEAteZamQDAZYfGYqKxqa2RckENAKAjuTuGjggYGMY5C6MFwFK8dPjrRCsUm8X6Q6ZQsVLWm94YJPTJd9EBqf",
  "key13": "4MXBq7rsg1pHCPp6Zd1VUHo6YA4qx4o4yFHq8VETgh4oAgWYgdwZV2B1a9Ta5Qk859p5xnAMpFZk4SkXg97URbpN",
  "key14": "4AS5qHHKYrdvC5bfsndRS87EFqgMLqQvnRcaA5bnhQkxfLZgdTJMmNbsdiKEGdRLxXofx8BtnXsWaBc74kC6JYQt",
  "key15": "3ZbZGxC7pU4vxRepaoa4srdtwojQoXzwDecXFCpN34KGzj7LnDJ2kFGm4qG6ihicWgcTksuiMrRvNJRz2zVngTFV",
  "key16": "5RujMHyoEUxs6MJZJ1LWcaP88G27So4M9Rq4hmLK1Q156dykGGsQ1J4M2w8MwCaz2Nb5oTaF3DBygZrxX52aaw7w",
  "key17": "31YoBCgNiGCdU9BdVaesoFPrDQ8eW1BUtUdd4ciykkRUKt95iZmJSW45PAL1J8LNKmRcBwC4QcPBXqHf446wxPi6",
  "key18": "5vFMDJzGT7JjP76pLxbBP8GW6CVDv9TvGvKwyj4JJBKhhsVEWXVb4BWjadrpAMbRDnmrNJYtMoFr11J4NY8bbauz",
  "key19": "5p1XWxp9Us2GkskBrLW6JByTywWwQT6ZhNZb1XE6rwYPT2su93C8dqbXabo9tQ6ZepkF4kMYDZ5XzJnP58ysy5mS",
  "key20": "4ud2tVRRi2suoAN1DLQh44L1pTnuj1EQfQj5x1K5JyfgSHSj6DC7i6wPuqkqWqZiFv1vG921CTAAcN2E4c88ykiU",
  "key21": "5oNxGXLrAqzSdVrdpfaFsV7t622NZnw6fAkeXftsoNjp1fSPEQJZvoN9M6iH6MyEX4vQYCkBXp6ELfa2vBgMHkpV",
  "key22": "5xuR7ZcEFuhNrfxyPSecpMCu472uCZFUhjf2wPP2Yp8toUnGjhykzVHzn85CCR5occ8ieekAM2bDUuFY1JNWzyun",
  "key23": "2krEEbimftmWeyzUL227WV2R7NYfqZeasuygS6XJw3U5ouptpBABLZ1SKH2vwiLsPWWzbvA961T6Qwqf22DZTn5y",
  "key24": "4sYQFG4WC9Xt1rxmifg5s91SMB5PNa3ue3ujoa8qDtoGJvBP37iVDSodgveVtBdSweotUNGUyauZCxy36R8BX1zr",
  "key25": "39bAASqakcaEufexuEkTUCC9s5m7KyhSkqS8EvviaFbLjpKcy9UuWtGV4HLghAc7jdeTD5itttj8rcNoHfw145Ww",
  "key26": "a9viLB3KiTh5u5f6QnJ3MAT7dJafQdtZYg8WiMubxJ5vDrXD6qo63ABmedqW18LU7yXqsRkfEfTED4uHp578NEJ",
  "key27": "4VSNDV4vTRNxJPHhwZFhDsQhWVewkWJbVypFMTGPrfoATigJW8koRPf7a7CDpo9pDcVMLrRZqSgEFwTPrq76Ghi",
  "key28": "29bwanBiyh3gWzGhC7xkp8d1tKcexyQchjcx1geqvpZYcATCENUkBAA6qtneBkN9yD9agv9nmTcfMXYV88DqizJs",
  "key29": "3Tc5TwjCDXWjDbkyzqxcA816Fb9d8AwAejJaSnKYbR1pCoUHS5aT6C7R8DA3YhYFm3sdsJHNjA5Q8Q48s8DB7njb",
  "key30": "4N7YUWbTC6MA882bQEr9XFpCXAA2MpKh98qHmvpcnK64dSMMKnAccxCYeH2rYcxQCkkzDtnKv7Kvq3Kv2hZxz9C",
  "key31": "5UfvwEnEKAXfbW6kdteBNTvYBYKyzjULDN5gFwenbx1MGwM7sVcSy8Yut8UoQRcFTez8jKCYJCDK23mDLquBDZZf",
  "key32": "16H3yWDen9bpPbpRJN7C2hsvbYsA94xZ6AvgPafayrsVxmzNiD53xVnroM1SqAfoKdoGXiHEUXXKMHwbkZstLHm",
  "key33": "ivzYgrg8BKTnwbj1TDuoE3cAAE84zdQAjyq3PCqsRPBUJ1RZiRe9waUBcWJtanZhFhUfK4MjWJYNerPHk4Yvt7f",
  "key34": "51z6zWCdP14d84ToJqmsDLifrWjA2CVK3PvNrHHWyqAxczZ6qHcAcLkUnQd6GJCSTVfr5WAMn5ZQyQaxv1eWfDrP",
  "key35": "4hE3DHaZRNo8bwok8tBZSkki3zQ5QvDYeeSAB3oM7fDP61CrUhwAohffsWeKwXaXv1SMeHq9htAYK4UPpTp9Nf4t",
  "key36": "4ZndGjNqJugNyMX18s6xG8fAwuM77GtYjZAdVzEoFuFvzCo31APddxQ3raHN6SbjyQM6Nahukvtk4zGTBQrTkLdF",
  "key37": "3d3jXoGDTqGNaweAmkU76XNYT2oUrddkY6fVKjBxXPGMNxdJrZ8Ax9A6YDgPn2MBBWELH11nNSe3fsftJ1yWZn8j",
  "key38": "4g5w8mosRoqBGaADdTzo3Ke3fa9t5sdZ3yMk2QMZahUek3t3jzrpr8f8naedCyJX7e24511oxUpfWgtTaD291ENZ",
  "key39": "4Vn1HDwGX4x3jnPF4AivHuymoop8Suy9P2uirDGH8nWC6htYugogFw1Qm7VzowmokiPvagqfnQnYH1tdMvXGf8de",
  "key40": "5aRxuHRWbPMo8AhcTJDm7ecWSZE82JCzJJxiHfKLxrH2Kua2ahpWk84NBGhSfJdLo5sWqjeSFE9xPP5oHh5sb5hH",
  "key41": "669beLvk6PkDrKXDXmqJa1M4D71wWrBnsM6SPDExzjg4hedaLXNUzjB4VpEUpvEWBN9pZrRc52AjeJxZ7ore9KX9",
  "key42": "3Eri8fGnFNqK6pyYnpNa4YXhN87ks2urLonJA4etCym3JNZphHxyidMw66QS4duXQAWL5AgYJqkh6UKNebjURPqH"
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

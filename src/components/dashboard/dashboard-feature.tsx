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
    "R6yBbYq8jRKA13DQoUw8zPu7LGofRHDREmw87GiDXVgmEeuPLFPmQzGnxcUQxVofFkbVs5sxMS8dQN3G15ySBSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrxvp6raFYtN4Sm9r7jcUebEBBtbqJ4Xj8K8LDRBeraLZeyMRnQzdm8Km6a8hguARyxpackskzTQwb8mhbSWp9z",
  "key1": "TpZ3jZAaWodiLS5Jp4xNKbUCXHxyvDzHVxApZ4FDUL7Ttgq8Mg94ELd1faCEgEa7mSnFomJTF315KpZR8HorBir",
  "key2": "5ya1cUJ5HZyRqbpNVbCbHMd1wDoRkwJC5EBoiQ8qtMiwyRQaySYGnJES15E9YxrC9QGLgH6AqY1Jo8iNZBJQtVxa",
  "key3": "xeHAiCY5UUeip5mu65YmUPCcSkVHHAhyEQpSJKfdsw9antETyKdZyQgVMoZrY2JweKXrsxiazRwYkyC9M5aSNEL",
  "key4": "5U7zE1gvvSG3oXdp85h2L3RzfK2MX4D3ncW8bd39xx5GxLoHtNDPREkgNKbC6NTtQ77dR4s4agARb52pxFtCK2hb",
  "key5": "4ixysPkmo1Ad4Mp9Pq6Wb8msSTDziv1xqbmT5egmmwM9n9aff9RrvoxBf2WR3qLtsQqVjrQMiH82ej7tbbvQXtY4",
  "key6": "gZSMoHctUZ1xbjAZw42ywMRbiFQ7ckmE286pU6gTUbdNim3uncFiDMXfyCZPKC2jwDFaoyiVw2kxxyFa5Cw5UVV",
  "key7": "4JptYjHjzmmngmgnNQwz5eWTYKZhdnP1abPC6jurr3yaNeQVoywoHqCU5oxmyzAWgfwTCxbngYTKJqtFpLRHr2mU",
  "key8": "3pViWgS8KzBUfeB8KupBytJ62BFNBQKkY2LX11GACYCbcNuVXHsoXeBpZqQ7QZNBJQNxySWpva3K3hDXA6UCJ9Rs",
  "key9": "yYwRdkA16KBuRruuDJ7Vgy2qv2rDBnbWz4nBLWnuzmgPEHx4xyTSYbcoSSC1Yavs845nLF5EwZ3DuFJvMdJcCfT",
  "key10": "3wTM6rNpL4DcFVWoEgAqdN6GkA3SCnkP1sF3ax5RjXT38Tgyz7tMqA1WP2SCoDn3m4wkZwjSycXEH6jtoRwTjd5T",
  "key11": "5ojJAdzChTD7mHnFThFPHL1CanBffC9MXYjLG7XtgNpLaeyoC4upa81uWQwMwrFSpB1gw4NvuBzmfVB5vuyV6LJa",
  "key12": "W1xwSvz6GEgKXTdMUS8xNPWpkcxS6N2xR4jJxzCBTDZvTHpTk4qUJPCcrnkYxkJztfMgQR3wX8iowVVjT9gp4mH",
  "key13": "4GLaBdNByANpLPKTh6dZtqPWwc7gcFyfQg4TQQSuu2fnZrDGgtns75XWvES53icE5dDSsWiGj9CdaxbYnnLfTqij",
  "key14": "4CGauzEUyiiQvsNjRoMBnfkb351atqBMKweEbasu71LPG4DgyrefBBmdpbkRMNqmYJzJnnC6cFnk9eNPYpYKjLoJ",
  "key15": "5qz6JkqEk3e5u4DFdk2LFVcfNF3yZ6Zmb2TbtEA87XoM7noFaQHvmn3itZKjN5MwehFsCffceDD4Ro8F1pfQGUUX",
  "key16": "2YvRuWHw9VyRURU7nnDgTBAjwkuBstnAzq5ELd6fCDLR1bEsr4EVuZrmmarP1VdkeW3iNG1cLJ9TJyRLEC6pSW4h",
  "key17": "5QoGf7BDxfahun6ARuZkqZqBgT1oi5oxNDkxPSANZ4mdZpiUwM2woYFo7Ts5xN668gYGsdmzbmyZ4bqAzxzVfNXG",
  "key18": "2qvaLXWEBGiypJSaaZpe6PJCqBQva1JFavA3gV24Tv6QHqydGvKJawPRgmqDJ3Gs7XqmRRaMpJWFoNWvjtz4NJRB",
  "key19": "3Gie9RQwMoEKXfYgR65qAimA9ZHsp1YAJchLGjbbcSfeZ72WrYAYG9HXLx9DynqrUeWEgqBMZ4U3yKr1GRpV1h6G",
  "key20": "4Z3h76DvVAQPmaDdiMs7oLX8eoC6o9g7k1b1bCPFCex9xgWVEqoQbWU6xRArqeF3vwUAZB98qSs2PjiWurkGQMBS",
  "key21": "5fqLtNv7Z4fo6UDoSUUQwvtkWc6pPpJri1dSQ4vYdcCJjjgKKciZZCHidsyCewEcTYH7PHYBvnu1JgCQpv3GvTB7",
  "key22": "62nsd2uzs9woTSLuLNwe2qPUbDLXk5ZtoZpWWQMV7xx2v9Js6gTReX2szbRZvyViDJcohqwNAxUax2s8NtiVaAhL",
  "key23": "dubfV5yg7rgSZ71nCdj5GEJeN8s6WyHmWYNzLwKBkBbXFWCzuSWbaDLJXqJGVVSovMWrYMSBya7VGvk6Y4RVqqj",
  "key24": "2Hfy9UjS8VuANekKznqjBTNUakLiaH6MNBtq6mW7KsEWpx9rjBURD3rseeYQahbBh7J5BeRC47qC4zwAuVTKRTXr",
  "key25": "mdepJ7AH3qs5MbRRLAUvWzLh4ygMMFKAwgdDa9wqxQG8yapN8SiN8a5eKmmsUzLGe1PB61rfnigxUcEFCvQ7wNF",
  "key26": "5AViMB4YET1aofnywesAMxfjvjWJknNceohkui2WBbUk6AH3oTKfWyaEg9Umo6FiTyHftmPHBzVKoEm26vvxqvZH",
  "key27": "2MqFsz9jvQnytrpW13WLXgtxgRA7GTaUBMdw5kLqw5JLGJBZABJaWzQPwoDxwKYSZBa2ZbYbbJcpwrXuGaaRcZw7",
  "key28": "2hz1t1fG6LUBF51isWab7VqfnGq4Nv3DFML18R2F9zZqHbUwmnoL8z9zGfGgH3jGqcPf91KBZLQ6x83DoQvkhdnm",
  "key29": "2xVjzQEfz6887HQS6pNdBN6KTPnViywFSHSR2Xbybcic9zKWKoXRNYmMRMWchsdv6JmVDWeFwuywWaKRef77F3k6",
  "key30": "2kvi8AgayxaD2Yo5xc1RJPFBP6W8bt5skfKF6AvvrNidenHVvSR8fLGaMmKjHi2Xi6X5PFzJPo79CxjtLSnC7wZ1",
  "key31": "2SPmsJqaYfystw3NNQFBuKupxdx4pwtBbo6q3KjeQQw3c6pstMkmV8GG3FnC5PAfDDXwpCsrMrnCzDK1d3RppeEE",
  "key32": "RzVpAwxJVVotdg1j3kLwWiQpx8UPwChd5unGnF9zwG6aBerBMEWsnCVGN95YS1MgufUMhaKMhF9Bty8AEHaFPBS",
  "key33": "5rZtNLUmV6ExJKbxrgS6P4DzZWQvCtd6gUm2kJw5T9ozeQcxnAhwR724ihx653436ScbVQvY5rKyLAFR5qtizZpj",
  "key34": "4vPd81kFChbPNbTMPXhk5SGy521zSrfQh6nvybJYdZkKjbUQxwuqagoUa8uci4NCyjUzsds5tAWwCUFojiqYTPF5",
  "key35": "2F9T4hfwCjAXppL8fAx72Yo5PsKHigLSNcADMRxA6mdHnP58rezKkXQiisPFYdJpKYrnwnaW6dfiFvEJ8iGCKX5",
  "key36": "tg2kQBuk5s8CfuwS54eFPnDEh889incfEwjPz2r1goDM7iiX1BW74CbhCaWa15dnsX21JKeXX9mRsCMsexA1xV2",
  "key37": "3T263iwXQ7rwa5L93doYSUUZc86eZi1XDbpCEYWFgSqYSuKF6KJSHYAoJ9yCZdPLjERseVVWJD8kiFMz3iQ3DEDA",
  "key38": "3rc8pRqx6hKkw782j5Ys2StENfJubjo4Gm1uC51wUEPu38Huk9teZKAttfdAgLvkRmnEnaqqEgjoh6xt5y3efnJG",
  "key39": "3YmiBCMCquLK8iwwqVW9pUYL8opeMCEw48NULkHqSU9qiBFmageD7g1f3fgQDW7BJAHguSDQcWSc9H9ssZ3QqmUt",
  "key40": "2xK1F6VuxCkQ3Bcp7ooV9cbWPg68tdTXkgBYTgAVUirBUSCxWAGCHKEDjNrgjiRraGrUiB4j5U83cqyiakSJPwCS",
  "key41": "2NCM6D17xT9xda9yL4XMQimJfXEeJ1ctukKBwi8E9zL3fGTRC3YvxhQ9wD73uJrKV6pvSTsZ6FvTYNsPZKtnVaaC",
  "key42": "55ot7Bs41o8Y21WA27tBCmBGDjXuTUv4SzbjYanpdGC7NAGdLhqD2mNymjB7jURyKfGqXdX64nscEQ9Sa5yWbtNC",
  "key43": "piFwCAmbE7CKFGtJZT2tW67zg8jZ9AFaMwBqg7MUA3eBZXETNm9Nbrsgx4oNNrH21S68rDscLD31sgCqcF5S3hw"
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

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
    "4BjU1j8B4kRMm8AU6t7GGCraGK3BeYVHKohHpLLqLXfvTLnoiQeX5SEXVkdmrJRiWpRNXwJjoEDSpArmU62rgcpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7BPGcvsroeo9Cr1YBseqo9LiMam93RGDT1xPMJAvpLeKPC56k2MGjCqMcwxaL4qmVaUwYid5EaQhjNiXekREjdC",
  "key1": "5jC8VvUW9Yme54KwANMMa2cRLreswvBJ2tfC3zgxpjmJzy6m11VgVKM6P6DEumyaJAjqdQWjHegcsoVA8YUvjq5B",
  "key2": "3yJtUTGBnSsMxFVjg4afU3jMYWbVZd3Sr6d9i9b7VXJ7BrnUCoeJofpWpr2bsLxS4YDVZNNZTnKGrgwfqd3HYeA5",
  "key3": "2cAzeF3sQjNX3ika5of1bPFiDTkm3FinH98RfbweShWoejWaxaMU37YjvYC9s1ySgyRYnPxEvySnmU6PtRoxt2Ct",
  "key4": "8Ys9nkhMe8qrQabneuiqvce5fPBbFwcTzaThEaSTE7bbmjkDi3TNBuHMKj45bLVV43aBmfrxAPHsAsv9nc61mRt",
  "key5": "5eLWpPhMEqMwc5xU1G2nY3VBX4RaCdZmNSsc41QUuWez2t6os2rz2uSta7gMN2KFJVeVb9jvARAzSQc8GcXiiFRy",
  "key6": "4TR7T7iv7txKJ2P2ZhFrdShQfib6i5peWs9DqVK6mF8eeM5E4Af5weLu8ir1aBYUfzaNGNJoRsjSnTfWth7zd3fN",
  "key7": "5pni8Wbjk6WJBMHEKgnHV1k3HqtnGpiE6Z1JZCdmorYThNDfST6xo5D8susKYjcgNyPZDNSmTychBR6bGveCCxVN",
  "key8": "SYvVEpv2o1ijnTkF9CdJywhUFAmEkSnK2cFKLzv6jqvUjLWAS6hzU32UrJv1GYoY6DZ7XpSUDiXMxGt6FSY3L5h",
  "key9": "5Nxv9e3TDXmpvrgLBcwNecyb7XRXurxdcYvpJswLTrb89eqAPpaDbHRH9ExPZKtRuYXMQ1APLYmrnsrBnYABVq6w",
  "key10": "4JS9ZroA7gua34tV4rWqy3gFDmh6Cr8UJ2t1ZsV61HEs8pwnKqve4nwZQt7ZV9GmXYg2ecSDJchsjEonkmdBke6F",
  "key11": "UHpo7pLAjMbs5wsnMdczWsutKnnPgdWByBzUot2jYy5RwstGSYsrRDYLWq8DtpjkTegddpekuL8uZszbk2YQ42e",
  "key12": "2iMxMidXWVuYJz1fa94TRg5uqRxAHrry4mPWaRQzgT4t4hXVTRxrjSWE9NCDCFgWtFTtHVPhWhre2RUfCVh2NGDQ",
  "key13": "5d1xUxinmJeqmdgMyxMdyy3teTuaKRQkMYUbiW9ySTg1uwatDxbho6eopAt3MKbXstYJmgrUtGgLbNhLUea2hQbf",
  "key14": "5ugxMQn8nQ6D8XZ1dJRv2WS6GK7b9VLBUxXQz3FCvnQQeBoEVcKJK7QdDy2FsFrrQ2yAvh7M3LSoGDBtJmmyTL4q",
  "key15": "3EJvkvgqbL6K7tKyTuwdyzAEh2ebyZTKQqfpixu9F3D9Jcuw7ZB8U5S3p2SbFUfRfz4wqEuTvKm8pM2uZ8rzb1eB",
  "key16": "qzXpJZDWZpwotPvT4utgWRXE3yaBn67kqVC33aZJ2yDxLJeAAU7o96bXS8DNCDKxEaoshER13aDFGUxQYjjkuvx",
  "key17": "3PQkCKRKjGtYNRZi8bd9HRPg9MJLYhEEjvXQPkjhXAYtU26XReHjf7KUAJZwbanv7MSQZbbSUgqpiqP4qggN5jMJ",
  "key18": "4exKpEYrXVS78TDYSfKekfAXERuvzaVpaC6K55mUtVLq8mweDgVGuneT81D8VMub4cyWgdQttPBMqNGJDy46zScF",
  "key19": "4u7ExAQm7DAVeZfUczL1ctVgVir5LjKtUAVLVEMnB7nw3h4FsBqLKXL8tRJREXcyMQvJU9fnffz9iTSZK3jxqWK7",
  "key20": "6twAXN4WfRXynpF1oU9x73QqTsLCrHvzDAyVucVHNgn8Ki4Bw7yj36MHXbXaEJyHGRCgrG89pcrRg5oQ21xaqZr",
  "key21": "5LbcDRuZYRrDntcgEAapyvfe9BMRiQZFJrtkkwvs1KDCLF5sAaPjx4UKea4dQdMvELotAJBTNDekTPBPESBrQxkg",
  "key22": "4yrUCE9HAcvuPPgHbKq2z1XoBrrUBnxR8T1GiLRMU268LJ1kohRmakCP8BH1P2CT1dVXz6TnVA5Re77MGguvxd5j",
  "key23": "2V61GfMxFD4K1GBxhP6XAJH3inNELw8T497WRZhCnAzZVunsMCxPxgTepYTThnSsQLcZuTovwpHXVaCAwNWjpUWW",
  "key24": "5SBxubAsNPToZ3EjTRK6CzMNcKWkBjuA7CWuWTq518tk1LkMkypejD3vwfeqoRMCtDdr4QNULC5byiZ8e9EbCFLA",
  "key25": "FNrT57pmCcVcyHN1dVVrJspFJcqSxHTRZoTqwZhDs2ST2sJ434DwMQsSmyxa6MpDZBNK2ERPDR5E9WRzCBFPeo3",
  "key26": "499fwdDSSoffWZLANhhj9oEFewsnQEXjLJmoWcHLtcgC6o7g6FQrpa5zMoS8bSeh9eny2xkMNKc4bUfrdFhj6upE",
  "key27": "3kNKMakce9bGy4XC8DDKwKTZMLM7boQDZpgxLyzpZ4emAaHxHz7fYMQ2dasr6FNV94H1p6Eykem1wuLYNHan7FdV",
  "key28": "2A2eakzy1NpyhAPnn1fmfQRWy4Bmsg4ZqyWgReWTzp5MWAXrJQ1o9FAabWSYjud6NM2GkHY2U65Aq6ACHmU2sz7v",
  "key29": "4dpz1dtWUu2aAdrE73rMWrGXsc65AJxDktaZ62DEJm5qTNM788ouoFgkTYMD6uQg4kh1uVtFGUHwLUHVp1HmeC6N",
  "key30": "TS2LGKdbub4143T55dkDnHSeTAaxLviuJJLF48hkwswW2cmdoWKipQJPJ2hwDsWVrRGV6P548ZZ4ErbaaF8WcYG",
  "key31": "2RKSxqo5Wf1qELhedFPW6g5A7acD9Htvv8oWz5Us5Hw5xu8LtMN7JrVqktgmgmJJTtXe8t3xeJk2YxxwM91iroxX",
  "key32": "5ujeivphjGfPDiPczbTAFJ9oU4T1y5u1zwM4fayaa6juBbMGNp2v4N4YGVednMSUQAuXcEXcnadnTN341Ws3bBuD",
  "key33": "4nfjrjUYtxzkxCHYxwb7ukz63XDRvUDev2XGQSak7ba3QhTtH6n5iWA9pp6VWuZazKzSB2jXNpK4QnTDt1YxN1rZ",
  "key34": "3a3ENHNuL4cLLbY3aw2kqWCXkYvBfGgSYsjvh6qTHarFoQbgsiUCxygiCGSxVPm5uaHSWMA363BoHhBXhWqFDqnr",
  "key35": "5UZCLW3XzdxikcLgb5jbZhZvUbGuZDtbZUmjqiym9tdjCEt358A4HoE4CyGjpJn41mhn6Mtx9uCGrXDUvegU5nQd",
  "key36": "5ApqQgD3CBmg1oshVirtq51tcNHEtZLiC7XyEUCmhDfPzoNF7bMgCHcRviYuYfUtfUhUQbwB1HoMiLDgjMnBVWZm",
  "key37": "4UEnfUpB5ex4LwkvhLxHEShVXmzCToUheHi2Fxdb2AkvK58krRLokd1F6tbpaUzrAzFcZCdZPunyqjpyV7NHyo2P",
  "key38": "q9qYUKivqAjKTJ4xBFGRUKjspCGdtc8tJQ2jMwpV9HHsoo36j3fQJbNwy6aCoRbYcD8z7zQpqG58NexUjqTKCk9",
  "key39": "4FbURRb7bUx3yGzhh745uGafpqBxy3gWZwUwhoL6RdRVMbkkQho4EP3491CVyFPCEjuUq3QRGHg54BnvkAUxLAtF",
  "key40": "29VZSq4k2UQUhw7XdgcNs6tJDxZgAXNhDfDkU7RPPmuN7GVWgeqBKME3xCMtJecrFAN9V2HKDnmPyZjNycEdEHui",
  "key41": "4JCzco7k2jWCZYAP5dNhv43ALtY2VsezWkJ4RbXfzACxVviKQWkqxr4aCqRyfEhZXxdEdZCeC676Sa52mbjfTyTK",
  "key42": "5LcnMsojTEDXPdJmTMbYrUE4qUoYF27N7neFYKuYsXsX9L66QPHkyUjUcHE6e8xEVsndNbmqL6DqtLktvZojiRSr",
  "key43": "2yXmNRg6yYSYnM4NiePYZwHaoVFJPBg3estAGaQxXGyhx1KMaVcAYkQPVJKeHs2kRAGJxdvtcJ3AocXdYe2NW9tS",
  "key44": "yaUeYfBscdcUyyJp2JVaVSgsPajjC5ccbpKbeT9tUpKKWswj6sjUMgVEiStneCkjyCLTPMPec1qs8KzXPiDy3fU"
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

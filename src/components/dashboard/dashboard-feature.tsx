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
    "5MmWX7VA47Az62thVy9XFPtNwA2Krg8wSm3brgSpd6cE7AV7yRNb9JysrwgVCifyvzuUurihRSrvRzDc563xd2dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjYvT1PEUZo5KcR5ZD5RfAENMw9kyZgMrL3LSuZwFWfmsXm7PPhQGdbMhJS787DbLpuKt8hDMoqr5kMWQLxmXyx",
  "key1": "2FosoFrXnS66rkXDsNKBBPmHWVLw8r8XWm2zENKRXHHRcvgKkpbS7YGPLLQzdNiaEMw1vcwGfttnvDkjQmgxXHZE",
  "key2": "2mVg2oacs45g8mmC1Lkrd8YPdgyh6T4qq3qUrv2K66XjKro8vzMRa1ex6iy6MnzvaqWz9wuGLT9i9dkKa34BoKVu",
  "key3": "4a2pgZb3kz8FrL5MJaQv9dP8L7jRqKyibDxSuvS1CiEmZUuUd3MN1PURiniaaUQf1TGnf2rqhRB1scTmfCbkBMk7",
  "key4": "417HgygG2yqp7mqWXy66yrfeVxDWSzHBvivHdkXzVW9xxLHMkPJt54WR4zTyyvjBSgbgCEm9VQMSCodoRFyQMune",
  "key5": "3eYyk3w21CRnuhvvRUNZnQBHj2QpsXEK1ZaJ14ULh2tkD3Qd4sgHuHMYrUcXg7kkqkb6JbTnFovt5Q6VdBHT4tSK",
  "key6": "2jU2qM2PVQmAGA1hbX7TSvWosWN3iPEjaQgxmJhnuzxYsYAZ5rKdspuvX1TYFYPNABxZg3CBoJNEmZPGB645ZjSB",
  "key7": "5gUGukKqZHsYtzXcTbHf3cLAzJKwn6tzBTvPNXYAZNhqZnGKm9Mgzkr4QmnUYPYdmtgmXYgNTYNeLoKFYGUWLrts",
  "key8": "29nqFmusp8e4WsPe5E9oHTWvHZt8JxB7K9HNNttpHHmWZQYMBRTmuFEqekR4NThPisiMkQVZ6EqEq9FwvRrDtzqG",
  "key9": "u26eF6GScHLxDkNaw5xUWHKDoVNWZJVYVUtS1Qvz6LWH6gB4myD3aZkvJN7SKBaY81LYWPjJJtkRVRNDAS4Sb3W",
  "key10": "Nsaxf6JEa9vJzz1U3sgAQxRRzAweqv7f4HXx2JpfxUtZPWW3geeZXS7xvWWqVdWw1oS5KrJFFxDoTzFk2GkoUgw",
  "key11": "B2b59sedfoSZ8y4D6yzbnBvVUGNaDAtWydWUUJpvieRPrst59t9PSRhTpRLgRQSN6q7LSHwyETyd8Jv8QDjRs9R",
  "key12": "36cfaP3WdupR4hFJ4WvWK37HJJiafs2qtWmtJfxsVRhQftU6FxShDURvq7wWaZcY4hr8ZRAXhZwo8BNJhQcPdWun",
  "key13": "2b33QQuLrWQgVCvo8cVtcasQBRoEhX83rsZgGtGyAatic3GHbQQ7rV4FPKGqUroxuzMz3JUCKLB9mW9nawHK8pds",
  "key14": "3DMscDdVuQhjSk5nNPMidrrDpUSMF9vLDzZDsjHnVovxJZg44ZNBqHPYV6NXfVHdBkyRywE8hWJbp4kEubU9ChKi",
  "key15": "3eWStKXxKXKwMVjiJp1FzRa6J9bSonjgi7M9kgsMPEjpaiS36r1ENVgdRArQjT2ERV65g74jrUwB7b7f8Rwe5jC7",
  "key16": "53VbJubCLLAuCnoxUxLyJwisGPEWmEjMjiy34BFrWZ8JDJZUEDUuYFFLXhBgwiS694vDHbpgUqpN11ZWzEWchwVy",
  "key17": "SVh6rWFBbmjKJvtwY7DHv8dX9jQEE3Px2cmkFJnZQf76XSRdXRKvyxLaQ5tUjGjoou9EzsLnigGHAnfb3npvsFd",
  "key18": "2vCRVf9mq57wyFAqfvJ2MsT7GgcSarie6MA2eYjZhPm2vxGakkQLYC1A2REDTrazsyHC5FYzagThXg8eXs9Cs3CA",
  "key19": "2TRmGhk6rLVs9q2jtHY4ys4NBTuejkzVZS8NPx6Yuhc3Czt9oUZe7zewV5NbDocLs87kVXtmW4aXuZYXjgJQFuQM",
  "key20": "47szARJBiBc8AKFjGE823ysEPivG3sHeiyeVY2DHHZzk4QTVmq1mmKR3RF7sMnYnm9wNEgUPZMUpASBRy5ss7D2g",
  "key21": "33cghzfzsnEDKU5DuTKYdknuyjzTjvrfRDPDcNz6MRmgVwjsV3b5qdasDk244NKRVAM8F9z4txAqAqUFAFxsS95o",
  "key22": "5tuBW3m1MF28MEsKQyXLnj219kFQSgT2hNCb47MApqsgYXxcdPGokea39TL87HkbLqrTURDUX6TZCF4nN51LeuHc",
  "key23": "4oDjcmYjkLqe7NgUEK8qKsgWsdczMLBhTdiRvw55iMV3uKfo9ZsU6p3C1Mw4RKurKrC9YszP5PPMcr1AQ2URPvqY",
  "key24": "2kJrgSC44BEydY8HnP81oxnGU54N7esRPytpSHBJeFuc2VH59PNdSFkwg8bPwH5eRrTaNocSpEq7DnRWeW5M7DE4",
  "key25": "4X49waPsQXTRbfzs1TSvQrCGwtMezfhd1hdjLSahKVuAT346eT5khssPYjnN37PYWt6i6P8SkncgnRznjeWy2Tou",
  "key26": "64QRpoGA2pvmJ4DP36JcD2bR8rYCTtDH1tsUkqq8wdUsjqdhSDMZqYqxfq1gZ9ovQDXFd5ksSdWAX2YBEV63DkHx",
  "key27": "3qng4CwzHxrpVYvuNfwxEGx4j91ZH8U8vvRgBKKkXEWgsvLQTRQyFDwS9GWyxHVT1fDTwXY6eKzLgHMPJaST7NJD",
  "key28": "2jNHRsmi7RWjtSxv3sJA4qM9L7NNM9Fa4ZWoJt4ziGPYb62mwmwKEUc6Bb5PxyVJAbdfURrzauUPY9kbNvU5SwHf",
  "key29": "VUtaLWZ6KGnf3kQ246yLsHmTd87EvuT15C2qZJf63b461tRNGJX5GNrAMuiPpzajr6aaQkqEkuPgRXfwXSBnt7n",
  "key30": "4T6fkQauPUf7RC7wpFeGm5zrrcUfcheNt3WWs843oik7GDykMEmjFTw4hcNFKLSbzBQTrTLQBCSSyMpN1StmLAk4",
  "key31": "U8bDjP1cgi9dBZxrMhAB2mrCTn8cQvnDiRhfW6rJpvkR7tWf6CnwQyATtBkodhc2Bdh4g4p7TM7YuXdHfeBj9a4",
  "key32": "5oWS1dR5vGKV2x8ZLWFaK7qP6pDDC7hVnNGeqx7puHSWyz2FNXoJ2K3Yp8Hkuhpyxooju3t7dnQesLkGJ4yNsJNy",
  "key33": "32BzM9R6b8a9Qk97pXaortnJPBZ7SRorQdNqNTzGJDHyxu9mbRd9DBXhtBFzQzVqB9a343yyjXsht7t2oRRqMjak",
  "key34": "4S8fETg15pTi2anhSZhBLbW5kP8Mnnm6sFVRH8sLVbr7k5QqqfWcQW24B9RAaZrwWnbMRUVCedPCgnwek7KAuJHy",
  "key35": "57GcfZZ3iorEoRmqjDqi61LUKa78xBiZAk38Z8D2AS9Zh7scdych7Nw3BQSHyyZswTHQ2os5M4hXGMAPmDMjah5J",
  "key36": "2DdXNn5TaRhYBbNL26s3VtyzKKGJk2nSYif2g8d4BJoGzUJnPDVLNMwU5RzReEFQ4UChthVDZC43wMUPGmaD2JiA",
  "key37": "3GLK5JMEgoxeGSyAQFiHWxTx8UkSGTi2uVmuAHo8Huc1s3UQfHLnkkGwGpxwg7DKtdz2hsrMeKax7orWmDevf3q5",
  "key38": "3WcWDPhNoKoBr62we54p6QxHP8AnUVkLP7dqZwxN5DcC4PKW2frxqmYho4GuvNRnnWdBstnEauMzofEmmMvDF59X",
  "key39": "YirWdPbSPn6XaD3ZYYUstq5rattp2BAfiYsuwD6RY1MWa7g9igfXhaX343XWHWtu7GKzuDiyEZMSKQyC2w3wi1W",
  "key40": "t6bKPhynzHYkHYxEH6biv3aDHCrrZJJPQdJqP13jvNcQmSStsXcLydW2uscK2DNevrFUmPs5SJDtroQDALBCHa1",
  "key41": "4MxjasgSTU2Z4CDL3nXeGg51ZYTdU69Cb7M2WVgAc6jHPCjZoWkuSMqFnGiRx5a6YKVc4JHi4VWeFyrCL7mqQaFQ",
  "key42": "59jtk4kzYcQjZGcMJ1gVPuagQzXcByGFrERGakzigkrvZEdvkZ7gKJhJys8q99aCGZFt4Rg1hNZT9yDVz5v2g6b8",
  "key43": "5vQvfjfqoi6QpJu8oSwqrnUsJennASPWv7Bez2cQVjvdjnuCcxwu1DH42cQWnX6PM9cumivUWfQsHVt9XXSr8rgv"
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

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
    "5FWiSqZYjqrTmHV8qMbZhV2fh9XvsUEBWYF4eegNTTvm23xK6jjbTKXie3Tgxg2NrTw5Kvk2JFxcg17ZixVjqUaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmmhCEZbL3huVchDpV6Q6tYrENxckhYNPhbCNGAhyMggGa9YFGGGZGet5HU7ofmWeeBGZGh8vgVYqyvFDdfWcHv",
  "key1": "3KptidRirFNheBQp3xUDQGGn8zhDLRcrDo5CGFn975ohEDE5mLu7iTkVHSVAvptxf4WgLyZpgxcQtahCghF2HJQr",
  "key2": "4h1cHgd5KMnvj7DjCstPTfBRMs5L2VjTguY2bxNH1JUnNLPAYvsS3PacPhS7kry1NMTXMoJ34eeBrSMhTqVbg73Q",
  "key3": "3JJW9wWVmMUzAiUQhRdmQTiNLLpHXGnVLJa5HvSEzJ26v3w8YXVNMHEaTadCvRcUReg3ndMKN284XjdqBoheVwxT",
  "key4": "5jKZpdoKRUuUrJqBmMMccXqFvah4i8eWG1DWT9att2Dw26DjLit6wbnxitE63bApTS9dXexdBYoXGZsbLPVfBBLC",
  "key5": "cKu68dCTqyEpBvzU7wcsbAqdnNybetegwmQPFzMz9f8PWi1DD2bSBPS2vaBWgnvmTuqGhiEsZavsRPsSZkz2QJn",
  "key6": "UaSiuWWGqxJs5TKoHS2tKnGES5pEYyj2DpSWL1JEu5FAJtyjyJ3Nn69roseiyQ3jLqwUbowPdFuB8JJy7R7zSvo",
  "key7": "49XNcpVyKBovd57fkm72aCJW8i1ZcAVmqNz1E4hAyPQ2Zu3ypqAhKBffaAmgoZ5D5hhKs7QVfzeRyey48bcGfKVb",
  "key8": "3zbk4Ge7AnW4fZ5Fi3eRdEsVoYdcsdtfkPPH6evn3Mqa15dRABPcZc8qAKsRj889HernYgwXgUSAAuKjaAeUNjoz",
  "key9": "4sKqWwWZwUdyJDGAgHMySFFkkoVuw5PtdtipJMSswB5x5HNtinC5KtXrzeFFdmzSDhn4G2BcmdugLERNR1CMk78g",
  "key10": "4hPui4qKt47Nu7ZGirw7w1etpx8tagaCX3kSGoJrz67ZAfDBWSXYRDr78sSyyeeyvFUF2Yq6byk5uAqYnT96AUxX",
  "key11": "5cqDYgsuT5ifGpzSyZgEQJHAz2TRW1KVD4oe8pmGfy54fnerc3t4CaCByaGJjGMTWZrG1zDjY23m4PXzKKT6EAPT",
  "key12": "3N1tp2CVjGhevKt6XhgnK3TCSfCExQiNuN5xYQKmNFXokyT48gEBZN2PMSNM8dU8xcKJev7yEbaG29d7NMoceALA",
  "key13": "oBEFp8mD3JzWN8A1dpBB42SNmJFFSrkDe9kmnwWm5ZP8UdM9bsXv6wNDVMwEkG7oz6XRdHuwwQkb92T2wRPCp9y",
  "key14": "4aAuQKZNX88gBJt86Nwwkq6cmMXh5e4vfKVdi9SThcMP74n23XpsvV7je2QSzWsyuJV7TwiaEvTtnw1Umtv1ZLoa",
  "key15": "Woc6yxdNsy22BWDL2iu6ZuVEXtR4JyYYixtv5yS8oY21bwbxvyrHGZLFJ4Djw1Dtyhoh6qVBACYeDbKDqFKQ8e1",
  "key16": "2i68TLVDyDqZYDR7jotnx6e6B23Q1z2HWvfiVS2ZxwmLaDCwBVUEg676uuWfXov7LVfj5xd43m9AWvkhGb3rqjBV",
  "key17": "3zmMZKF34PrNY3qzYn2sqM2dfKuB5hjJSZtJkcPymD6QUTFMafALLVvNLtAteSL55buwoun5daDoz8D5pr7m4ebf",
  "key18": "FKT6kBmfqAdkFFp2Qp8LnhA6HcXYaGDqM6yBt85r9gzqSNCYt14nhvSoN4ECDRYeE6QnqcwTpgBXyr6J8msGBaq",
  "key19": "4tHc6Fi3CwnMsemdosQ9XfXwnMrgcLitA4DkjyEMzfvZZfkEGcz2ofu8y37VbRNXiwcGVHwXZVQSmpbJLEt14iv4",
  "key20": "5RVDFC37VHfMFMumjm3jvoeQvnvrkJK7ngnN47EB1nWbGArGBMeVCoxM4JfccSMk5yRzRH5LUYNKcZ3S19RdUX3B",
  "key21": "2At8gnj1jhHVwZUPorE82Zmjnta3G8QN2zw2JSFeGsPo2WRdsJo2vquYrLCeQAnNz4npLHuFBaNKotsv9EMCpPYw",
  "key22": "5mXiKdCrsm236arikjgGK294w6GRL9RXRXowY32GDnz8yVbwyXZkvEY2DoSsmbKGrtoJ51PnFVByMdVaE1WK5UzS",
  "key23": "3TeLgzNirRBEs761vtS2TdXf1sb9gaehe7QwUMfEGg72QnztR9s4HcgQzKjNBL2LMZbVdm6VKRz2s63b2yNmQMdi",
  "key24": "31ZvnbFhmpToaepvzzivY338J2h49AUJfhxsJcL1ihjUoPmKvGGPJtPSGvUfQDpCptzDXdYh397ZEnueQtYE1bEQ",
  "key25": "327otTguQZPp7BbhopDvmXb5aBcAR5qryrw3eY3iEVWeF1stResjUtAaKGwsRqUqTZqS6Qt5yneD7QS2DxXb2jPm",
  "key26": "QK6VAnMmfcreKoG4j6wkHZVbGRNW5uCQRN1GBZdRXRX9UXhks5g5uXfJJ3PG5hL8KG4DXmr7q6eYFnEuUYngmuB",
  "key27": "BsKKiujaKAcsuU74DNahp3qTdE2ar4YSoKQmJpu2jZSXuRddVX4cfHLLiPvZkaFEgMK34ozGMBuwa2ArrSL5xqG",
  "key28": "4cArFKxdDLRsgiFLhQhqSNbn3ZQouyAZCR3isqPRN6rwggCK5XQbG748VFDsRmJCFu67C3LHHedNgREeYsTfnWFD",
  "key29": "36xiTPNkSoaBnGpbNg8rSTje4rBELWDXWMgrsvUSKSgJibCG8p1m2Vv8wQp8KoiqWwSUPvG7ZAnMe1EpaTU8G1X",
  "key30": "43z82b9NE9TwvMNzbAN6Yhg7dqfbVY85ScHKwMX5EMKtJ4D7SoWcquGue2ZhXKBfSsbc5iVuh8Ni4Hv8tP92ZMG3",
  "key31": "Z4nVqpxuLXXr4f6mYygsFb4ekBsmo6TDob6QZeNGzwziVncc1BEin6vvH4NVdts6dHKhNVWgf4ZatH1Epa6jZdt",
  "key32": "2XjpoDPL9qZZb2rcrCBKvnQxgusZYP8oHydaUWCaCeqL8wfHH3LB1Y9jWCC4LGbVinQxkgDrAi6VtkGRFpLGn7YX",
  "key33": "65Zuhi18f1LmhxMTFEiUAqygAg91tK6yU5eiDnySL3GtwotURfc5ptNG5uXDFLX9MfRu6HX3mxoX4fPGjuLGQbvj",
  "key34": "7C3mEjobiPe6diQFQQpzQ93MR8iMFNpg1zobkncb2N7H54sPvW6QzKc5MhE5RUwGzeyrG6KpP5jxo2BD9NsM69e",
  "key35": "5D4hyTTL52QUcsve9Ws4YefEhmReQzqTco5Tem5reEFp6yeLMj4dxfzVbk7UcPZkfuFVJJHcttrtobpSBPaEMeuy",
  "key36": "3qn78PZWSW7yFcfCHXnyAKWmmUD8XPsPnzWPBkcBgkhN2YzUP7BnM3FVwqEJsexV92fqNTtEbSEMTWkQNFcxVgSq",
  "key37": "zuWgkcziLWeM1PPJVbJ8fphWRh8VBuT6GT2rKoq6fgVLvaTPJJTjpyJxH8PA1A2LLXaBSrUEQQJ3x9Rr1wMVibP"
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

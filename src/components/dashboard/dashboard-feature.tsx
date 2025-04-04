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
    "2r7jX2ua6xnK73RFqZ19wmzABSnvd4JN2ZM933EftfYkBvoh1mccKQ6VrA3rtdzjyBSnsfaws8Dv46FLKyHu6MKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLMqixjgKpXDcX2J8iF5QLsnxujJB2JEf6Fawz4NRH6wfDjcjJehzUAK1z32kVVesgtE6fSofuvbrLr17DVBX1D",
  "key1": "Y6X9eogf2Kzpn1MpnSVfZ476a1PBJEpra19sGJZGjqdg7kYEAB2Yi7xSLhsohfqrFn48WFZPpGPcF8mJFRjnyzK",
  "key2": "2TFXqAByY5cWLjr52ujnhXxjJgPDXuwC453e6EFdnfq27aMJTiYa6p1FmMigqeH4AFddpDnmvKPtr5MvebomohBY",
  "key3": "5Q7JXDzPHGM5mZR5mvqvFmMNwYQTorBAHguFSPqjZFoVP4zNuxCPXBxJT962xZLZig5nhxPoiVQSCcjDbtRxu3gY",
  "key4": "21zCCvFQudtYPBhwghPVs56qV7UkuYiywrW8Z2X9eueUkhjfYukE5gW29VMi9znGAuA8vjf5zknLNTQdKs13NwRj",
  "key5": "6soNiLYve12pywg7iEfMAGziyJkP33QqVKwYMee41JnA7xEVqD9JJLb9pWemSjZKiEXVWGYx5HdBGFzoicRF7wk",
  "key6": "3FdFrPh7QRVTAXDzWmt8ZyUZdpc9m3i72KNmhMRUQSVAdhJrbaNFQBgQ632j3FjbL9gSjFGTXKLfyXpkdvE5jpDy",
  "key7": "4AFvpVizt9DtqUAq97AozAdJBHBmvFMkujXVzwYj7u4GzYNrVxUVLYV46b1mm6bT1phmqS9ScopAptEUV7oLUJK",
  "key8": "526mMMuSfN3Yaz651rKurraFz9XTLVT2DkR8oswKNysXMomTiQmxfEFm7nad2mNPRuuURbJ5gkr911bZ1d3Sjk55",
  "key9": "562Ha7dvv8erfbF8rnnZq8z5ZZFZqQknbPEAF52S6VodA6eu6K4Hix3Fm3dQUT1N8FMvCSn7gRtsFLP9WEQThW8F",
  "key10": "4rvUgNA53vQ5hsLRtPe8QRM7XkHsHQMTinCS3ssiQfNzTu16HG1gnTL3f4crvj9i5k7y4NP7CGqpMj81Bh8EDoPW",
  "key11": "3BK5SrdMbvNzfkbV6RSoBexPDJZaPNRTs37mWAERbG8wTkoMTtxtUu9GEcP2AUX8JjvADEHcUydBcV99xB2kZvYR",
  "key12": "2YjESaYXxWQrSPFSnEE6zQ14dPfx3qQUjxrfHDPw2vMFJsEFiwaA1rCAiqgcG8kH3YL2DDtVMhteTRAMoffUMdjw",
  "key13": "2QdxpeFtd6eTBZ3w9jcUdD1JhUUwo6Tjq42WZUz63PGVQMH56DF6e1oGn349orEpYxHfm59m8sKRTrcymjaJYE9m",
  "key14": "3iXsY7NkHuozX97b3XNYDyQoHsN6Wra1EWiNTd8BCdXVXNSjGSAx2RcGaUYEjQJYGtFa6gboXrCjtFiiMe8b5mFQ",
  "key15": "4tx5vm9etPAZn9MBNetFnR52AKi6KdWH7Qo3rv6qTF54XzFnM71BE2Hf6wrm51d1rhZzSZqhkVgmru3FYNPqLjD4",
  "key16": "4qxL7bzXgb4Fty4s8Qr8ysvSmjSArKTkumXezXTUQ761q54RStntsytvhh6vE1yaiwY5JB3kDMJCV9767hp1mxt3",
  "key17": "5zTYcdjmjmQQs9YqPu2YpjLzGKm9TeDpPVz9QXyQ6qYnAz36CYrWCzGTEYidUw6Vki9QLnxY2TN5L6gx2dHa17SZ",
  "key18": "5b85oEw4CZ376GQE7dgiHgaDfNu3z9Myq6i6Ne3koiPTjBwCkwQHpa6cVLLXS7Z88QZ6UR4hAKNmyu95hWsQDifF",
  "key19": "55nAKuS2eujihDi931Ganqhk7PbhUmpKf7zZmfUR5AE2uygo5SBN2eEbbKopPLQdBshd2Tz8ffZ5nfLuv3xJhLSc",
  "key20": "5Kgg87CC2xdyj2yagowy55vF15foi4XUKNJaVF5spQucBzxkLouJLw89JgWfgZZPkndyBZaNsiF93NXs2c6pWrpZ",
  "key21": "4XqSJBucxSnqpAYQmbBGWgcRwwbqMV2xmz4Hm78hefVtYPbrdpPEGnNqk57KB59GKZ8i71McBagKjrdF1edsJ4QY",
  "key22": "2ebk5dQ1HfSnNxmQLF75dBZfo8hwKy6p5zqGcQjEYBkuQ5DaQ18U8P7MNST4dkrKtQSvrCFHjei3nM4iNxT1dzgh",
  "key23": "jwvbF5GutvEup4ppRARhWbBFQvRS1Ar6co7hn1tAkNBHGTRYCp5cUWq6Ktcr6pDQiDPhDxnGFDM4cgojZ8EqwJu",
  "key24": "3CxxqgWoyngHsbCEkiov5mPkFY3mtWUFtaH1RhdoLc3x56WiQdxQZoJ5aJrLi7Lpan3dK3bNHwrpHZgjFEvT2nXU",
  "key25": "3onidGJPJjD2NYwWxM9Jhbz4NGdLsh6fNVUuzFNZLwLd2bqvfXopdk4dbyTQv5LXcDEE1KHc5tTvsKBhvyyUXFPF",
  "key26": "6EZAVjtE3EHgUHbs1SF6PLiuBZ7DAAMx8GZYQKv33uPp1ghaqHesYjDUakmTuU5HgLGe5MTGirrp67cvTTekY6Q",
  "key27": "2Ht9SfRAwKxJ4zuRbFN1UT6ZNo9666GRZ8foe2nrqVu4hn15npVnWKxk4YvsV5RVp7WxZ5se1cEJhLTJKVvcLByM",
  "key28": "FAeMhk3yYKMBEt2tMgn38hBeoVNuJKrwj4oMNeu999YimbKAiHZ19AQKYvss2uTeGdusbHW5YCA6rANhEhyWnyq",
  "key29": "5j3jyCD2odp8zhCKSoqeNKmNNx2GubpsCXLTVXULYkoj2cCJSxN6Sg1bztCPCdY3trchdmEuEEomFkTcuvPShWJh",
  "key30": "4dcje3PdVWJ4ttZpSDz7gtKfgG7dEicNt3xVwwz7ztxjx97T1vuwct6xztugfsGSw2HnHb6G3yncgqcH5tRbJc9G",
  "key31": "AVUszFjGU2SAiY8oN8WrQYUd5eCAFbTxsLgPkNDNRaArbghyHZ7FvTDBPxrPfdDBZDZsapnnA56ySJuMhCQAPry",
  "key32": "4yKU6B3PpkDhHWXvawHBuDWz4K47uKYrEbJp1WTEbS32K7CJGmZqYTnsp3FxWKsDfMJH2aLrX7nPvXmVBcswjZwf",
  "key33": "5r9s5pzZcD7hqH2vMBRiGBwXnUcjjSQqBHthLEeLgANj523qT58feYiksq73gE6NXS7GyVLd8E1WmGfUvZ1o4DNP",
  "key34": "26VfrTxsH4fvPZjwJGTt8kcBhX5S92e1E7DVmkZN6M1AoqF42EqoJhdGBh1TaTdXvvsqFrmQBC1TnCkEXZKdh9Q1",
  "key35": "N3zux4tVj65xYmWqSCvncPE2Ad9wd8oht5mEjTt7xQ2cJfTf5zXaWLmaik9Bzeg6CoQ1XgsWjfjKHxgcWeN36aG",
  "key36": "BmuEPK5SH8FXVzJrTwCAADkM7ioGUiyJdm3GjYTMS6eZCC6dh9XHXmeAA8a7RkTR5wk1WzvE3USHTHdmkSaYCXQ",
  "key37": "Qsthi4pTzgUYYfTsCJVk22HKhGg1rgpSHT6TB9L76PpBStVFyGqiPhn2Yi54UVPM49z6zwgPXPeT2LqexQi44EG",
  "key38": "65yXM458osHyM7SgVShwM171mFdrXNjzekrREmmNtPdaZ8RRHYvoFAu1fGVMUf3XEiPL8amebafzxiBazbVsCowJ",
  "key39": "2JxMUKk6guVKzDkZoHLMBjN7NUDr3r3RLcYe54w646MDymF71KCvYM7auqxHKBAEMDZbnASnrqQ5SRobiXS14dLP",
  "key40": "2fzJd7gmPx7Y96K3KxS61g8ypQtz9Xc4A8Z6Qemg7XC8kodsQm3T9VdUobLQgt43kbWN4YQiod8rr2VziogvFgfS",
  "key41": "C7tXhos67jzE67oxG4LFUjRFiZZHhYsSWcVzF4LZghzBsCikDhBEiiBPmhPrLy8tnav4VnZU6YDgNXjEoMSneje",
  "key42": "UT4WP7NW77wjab7qJrH53kYTZDraH5RBivsr4mt41tDBXFCpTtQCKyBYHkQfChj7JZEjnngwc1LRe8jhAhYjQ4Y",
  "key43": "5nftwWmZe3GiuhcQDpMbY78o4Wr8pykNc4b1fx1x3peyj9tHPbgXb2ssmRN4cL8SCgSaqNwhjNGySTcULGjLkRpf"
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

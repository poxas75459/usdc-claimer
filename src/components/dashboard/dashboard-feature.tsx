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
    "3xAGyJhnu4Ny5hmFwSLYopxhDDJF6wRkvNHmQpfnGU7j8aUGRXBz1dX1B8JqhEoHyQVtsmPPjaAzeZQXS8EtqW32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BgTcNGj6S2N4fAJ6T7sGRN3GZPELuYaGYmzjboHpYjF1giUMu8JJBipDq38LhL9tA8yrm6KhAFK8QqM2xnbVgFV",
  "key1": "4MD58aM1Sie2CNBq1H3JhRDfrRGVkmwsAN17PmTnh2pZTqFK9BguUWRqg1qzJLnJT8esAJUmqMdntm7eFXwgQiGT",
  "key2": "33KiUkaCrPuJgRc9oAwpbULNCCnmKRU2FmgKAGW6wxQvBMw8m6cQARyzrS4Z59RQPE3JKx7xaUZSyJ7D1DGyQb4S",
  "key3": "4g26DZ3d2v9HYq2eyPDZ4DTo8qqkLWAoRb7Tn6NfFNyBikCgCwbWZwMC1Teas6uJyjNK6jjSNWdxyutxUKmLofcj",
  "key4": "53f1bjhiyx8iao6hn8EKYdoY4Wn2fqk6BvepDDvxFTQCuFfdzmhaW2x1oJXuxnEzMg6fx7x77DfJctEgBbYEzEZk",
  "key5": "2VduurvbePi7DmZZCoTRLvwEnkDsL7pbEkP98GcLgHG8gqJba5wnPLSbNgH5jPWiPnADvZ9KTibZeeBTGbLccYY",
  "key6": "CWNqahiBuAbf1S8m54FGTFq9Utk1HVurEzcVXY3v7acWDfsVMBv9HUcrNfGcVcZgpsFrjgjh3MQoKgSH39F9c7B",
  "key7": "5pCH1AwUKbm5MCZmpMqsNuiDf7mLnAvJvcWtvzhBTRTbogJ3SFbXPhSh6Ubhqg37tLncxeTToGtJNPxhKxtqtakr",
  "key8": "4f1MeWWuCUu4PzKWnkGo464o4xGCTEvdb9S3vP3e5oJpAbtiFBPWNxMcw5KBejwEgoxrwNB9E5ahEcXxdFGCPq8i",
  "key9": "4dN5fXf7qw6TJXaLTv96Njaoyu5XsGVQb2ynAmPj8bVqCNFfhCV78KoMykT1rwSqCEaZRRLwSejMd3ueAYc8Q8iH",
  "key10": "2nxyk4if5SrwsqMBUS9k7ibHWyLKsjL41qGcfVcdfbxovJuakCrzTPPQQT5hQMYNfwrLiV6EttDKdim3Qod8qrjS",
  "key11": "5rc5u2AFpYgUdtm1u47yvSb3jbzEHruUyYJFtc2JJfSdUHdzgFUW6Wu8hMPZzEuS1dmjiy5z9yDxPH342YWfmHtT",
  "key12": "46sKwSF37TXTyVxsqHRupBT83tCi7BNnB6uSHb2PK2daE9axAPMFBmPbtJ81XJ1fV3u5i8gXCNJvgyM5tyQHobnN",
  "key13": "4vNVhUsVpn2rdc9U7YaAE66d8VeGEcR6tCp3bs8KWzL44XGfCZQtaEQDECS9ocEq5sCs1WNPX5h2XDPFygGC3s5P",
  "key14": "wA3F4wUuvYxgP1dQFBd9Zhn7GC1Nxq4XTryfq5wHcUyQZgntpWZQoxGznhU82aERTsTP6VVmH9oy1vZNWBpc5zw",
  "key15": "W4mAcz8oFBXNQK3ovt1WesUATPyYbQFDQNkxEQPP2abcfJmktkz2N9Kp8JonGrsqt4xLhdLs3mEcVhtQEDfZQwH",
  "key16": "2YYUzE1ViJzbDg35opwCXB9ZveT9JKGSDVPqo3n4g1y1GtnFQwYsusKPcALTDE3U8nSJzfkDr4tfS9FDeKGAFuEv",
  "key17": "2xpk3W8rY2qntShEQdLxV2SuQ8zUSy8zojwNF1Z7uTj6fApThRzRddgJ5b87tytQMbwvEoaQ4ndBk72DJfWCYLtd",
  "key18": "2M7VhvkqUceCQ7PQFrZPnA3Z9wVJ6vFd752A8UkSdZV2bWTt6q2r6EBosGQkh4tcn3qJ67GNS3qcWDgewSJJ3vqE",
  "key19": "4qny3C2GAA959w2ih4VboF6DxGi8kL9wFQ6DDMQnc9XTajeGntCBD84trcEUkbedP9fD3shQH9G2bG9MTkDPL7rb",
  "key20": "2WtCEe3dr5r4XsZbNAy7HR342YbNTS7h8eyj2XT3WUobz9mAqqoEe59VdTggxSaKaYyX9EjBV6P2bGeahoC5669N",
  "key21": "251aKafWNZV7NUvWmShHc7e56E9dzbvDaWvvK5bNCaJQByXFeJSxcozNPMdiucU8UCM347TLBrLKq7CaMAYDD4xF",
  "key22": "57GJtyCD2hkcW4vJkkdkPQ371T9k1c8Dhzk2ojKJnKEWX8FWxUuHGyYTfcuMcLj97Bj7k6JSii576k6tqaEZbSV3",
  "key23": "3CS61GSMxhbo9gSGaSnMCvoHRdcuaVsNTkAyuy456aY7jR8yAspCrkv7oxMppAvNRUBfKM2rQGjPuthxenr2qmuX",
  "key24": "2KTbUwkNAUyEdCeHBR7TPu35mf8X3Bz66dbSZDprm8b1h2VLhGa9qVctMx7kvdaqAt1d9Roe9P73gx5VFe1RnPXr",
  "key25": "3X6wpLFaSWM2D4PR9yiq7ruaHhvZd4pSYoCqKZ7J2epHZieqJNTWzEV1ZBWh8mggWATbYugycLC1bAf7h6sVQR7u",
  "key26": "CtT9FodBc3nCeCpvzCkd1ta8L1ZsnngVKSoUsFos3igZn8A19538t9JTDL1hcQzd5NNmCXiLkJeUKa7TJfrZkn4",
  "key27": "2n8TzTQp9iW5EQuykZTSkY2BKSHJ899PUEABAMxRadynevnsdDKhYt9iu67zZe9xMiC7afUTQa2hgCjsrcSnTfUY",
  "key28": "4k5rjWw1uAYFReCqQ5Lt9tFX8aBYnTeBdTkKpbQLKF1jWwqdoq34y1V4uc7vSNQ1fT4pGAx2rzzyKsgaXyvzDs6e",
  "key29": "2ix2u31oBsNgquvE5gTgj26VPTdn7puXqxJkmkBB666efAw6jbdyNy5aBrqtVSudrUyFV7nQmJwqE7escZ5xkvme",
  "key30": "44Ubgaj5BXedrfipbByGkfsgGoVSP92hSAV5Fbhd1WTA4ZSVVYMhshc3H35ANVTLaJB4BWETuxdSKUxEYkoCMVNu",
  "key31": "46qqNPzrp2Fxo1LoteEXNjuPz6V5NGbRwuGZgcWt2i1nyPH34ygAug3WVborFrovjrYwW7j4bsGCsTqfuqvrZtcn",
  "key32": "3MRUByLQnjMHq39ZjNJktYpVjV45N4jdTHFmDCHLF4F4cMNtub2jwy9TBkw4FrRk3171T7WAfvBmmDnKGXxswH7Y",
  "key33": "62ytLowFdjiyiRNRE5FkjJi3MmbiPLz2TrBgXqybcoCRZC2Ze6wj2CkBsKuaJxnXGiwzrn8w4nRPLKCrrtf7Vx7",
  "key34": "4PMYawM72gyPVQChby8BWtu7S97tQaJaNP5GNwDn2q8WwyxPUfjMnqAUUumdU9ijunVK44sKsrsrYGg1toApPzM",
  "key35": "3KbFDADTLf82GctDCjGDHu6PB9n8upBqrYzUsxjpC4g4AgGsaiM1exTxTrQFe1aDT4jqetZEubiT9xPa1kzsuQaw",
  "key36": "5dAMZKRgmLQFZRrf6FbPuGxGe5ZP2iHfsaFNaWofBnde4xZaitZPWdL9jRjuwv1nPQaGn8f1tkA2FszU1hf9h1hD",
  "key37": "4VavxRd2ot91ikTrYnv6uht95fbhxg7oywbXdmaAWMfQsbXcdQBg4MNtoX1zWi8oZRwFGSGfRaK689JkPDFaGdKT",
  "key38": "2nitPrDBZUFRvtBhpqgdrG4uWSftKaNSRnD3Q3stjknFV7H8nnZuTMxnoxZDB5PNUDGjK1Xdrg57disEhdXiaFBA",
  "key39": "miVrfN1RxxZ3mU3V5xu97EW4j33K4NQ2rmFggcgSK1Jiw8dVmMP6EYGRGhS6869XZtJtwugvUWVrQ5wryDXnPDS"
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

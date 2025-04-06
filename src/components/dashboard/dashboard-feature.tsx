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
    "LRwybvVCKZK4mLdr8J7ThuPTZJMufzdNnCdDW8oFVN9c6UfjbdoBE31si8bK4qEUT3mdYm7mjsaTtoxM2Fb9K2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2omyjnsP4SEFvzMGuXvSxg5C94dq55DZfRfaT3aYCTJZyAZzVs4x2GTQAMzjoFX7ixB6AF4VLAwZns6ZVdFHr72v",
  "key1": "4mWgfqQf1Q2y6i27DBifJWANKhRJFqC13wiDCcSTAsFqgJkd6wPXVLiq4cYkH593VKJACQbumuh75J6HEG6B4JKg",
  "key2": "5Xm9rdn3wupxYHcKj5TMqQ3L3shcgea6zTbgaWnQ3v6ytdLGG2RHS8SkomCc2Do9BrdAtC8ALNyZjHuEJu1UAUHA",
  "key3": "gg2av7FVVMssm9eEBGqy9QGCzMaDe6sJ5yA9KCvMDpAT18hs5rygcm1WeqQ9vi9T2UqD9C8PWy5UznKGTxuxN4Y",
  "key4": "35NKuuAUhYQ8sEBpTfUNPvWX2c91eRdtAzsgci3Dw5ByYh7FafnZZw3zotqXkccANkcKmPfKmh711B5MS536dBdp",
  "key5": "63ATyMwjssnEpkCtEKjmKji4HTEuRp2WKfq7T5MkqKhC8NoYLMFxxp4aC9qbp88p192CHy971s7GKEAepjzaGuo9",
  "key6": "2faMnKcQbzxsxZFsSwhK5RDjUkN11XVN5Vxmzmxh31gka7jWh1pqDMSBT32yqDmHqsjEgwAMo4FyBw1UExxwxz6c",
  "key7": "4yL7LXF58birakY9xbTzNKKko67dakM4E99Bw1QfyyyN7b8qbtUCwsCaaMrEUaMuQteg2d3yZwC1ASg6CK1aNSCw",
  "key8": "3PTLahyPY59V5b9DbWAT8ccdpX72bz1BBjuNApimvdHTyJua9xAAxYyLZRDyeMRegzbaC9uYjHEDTMPe435Rc2Xk",
  "key9": "2ZQdmVLQkbZk9FcCWFv4XGBJrNyuyyE1VG3Y2eMffFTrjsfdu4HgvaEZTNJsbQoXptXD5Cwb5H9fmxGfMYpSXhcz",
  "key10": "5snbVZzSDi9pW3WX8MgeBZ3iS4cV4x6k7Xbx2yTWBVDtc6QVetfRSauzoEAccbpPG3mt7ooo4CqcpNvuCMiFH969",
  "key11": "3EMZ6Kw2PKop7x4FNbvgEuXhaS7WYb2KCbQh8zbnoiRrFCwVsU8hZxtJRa6i6tGN9HS6pN3uArrdSVaqQPUjLH35",
  "key12": "2BF9MMqVXJHJYS6tBa1jnJYargGcrZQiLeMcr6SYkKMDBCocp8AxRdsH9tgRUBdoU3ZUdVQm5z6nCFkN269PscCU",
  "key13": "28AxeTeTaLx82VYDyi44Eps4NGS8TcdWLcMqLHC44KuaWfEAThLn8czGPX9RAAVmuNBjturyRBb8xnJzGcv4jgK7",
  "key14": "2EGWjwXzGBoBfGbp9g9J2jNyuvsgBkrZjZj6U6VcfixzybwtopFcy1T4isgwqTnVgh6foV6Q6cXFU73SiFAHKTgN",
  "key15": "366XZjrq9jNnz2ppz15VYN6YjSJ4d3pihaLxF4qSuEBRgBbsTuNdzNK4kyD3dx9ffWEkYQdDpyvfB3ZnogTLGEBm",
  "key16": "2pQa3mxpwfaKmwCERn3BGiTheL7zjauDYAQj2too9ZhmK1A17kLxWuKcNfwbBx9ww4LstWr664Y7goHTYiNXCtK4",
  "key17": "ecNDxFRvbuCfs9ipiDx1PaqNgtG6RKKbfbFjDPtrp4RWAvSNTfvqCNPT2EtDukUnr1EqzBwEF13hc6U2AMbVaDC",
  "key18": "4VMcYej7bZMpHvVYZHkxCSFSai119kNmKH2L16EjSjdrWUyq97dGWfH9nTzw3SSRjS7vbkVNaxW5jeXuciWHVzRB",
  "key19": "3E1svY2jWH5BsPvV4JFk22RWjgEiPRBnYA452oSXVxYYCaQRzRpGZ4zz5UeSchRFdUwBNR6aSLrb64uQXyNfEwFX",
  "key20": "4ZSJsrpzuisdQYkVd6cLKz25zQ3Hj7nacYQ9XKWPUvh3qejmjntbSkoma4oHDQq46t142fuDLiCFvSCw6iEdytux",
  "key21": "3E9jCGKCwNUUw5CCA9oeZjfRopChyEGwZRPCCScKmFzDUZJCReqCv7GGwrScEs1haRgZgnN7FTHLwUhtztEhRojz",
  "key22": "3XFrm1zAtQAhe6XiF6i1HSsD5P3qp83FG48JYTMNdN2iHqvq6ApA9Ku2vVPb9Tk6iHB8EvdHUhXSodTwPn9d2H4Y",
  "key23": "4wiDyjYgBhGp939tQLpEnFLCjTFKRpYNEpNQe58BaEbaDtU1Y4SPfnRQmCepLS5NZM8vCrYMyzzf6hUFT3PqhvTS",
  "key24": "328nku6Fn1R7w9ycVdJUdH6rydU5HzUewH6ox8aaRBiDFna82xkGNtLxXtNYUG8wAvSbhDdkH8KwscxF47hBHyr7",
  "key25": "547Ek5GX2dEb5E2FyG2McQ1dtEUrZgJiyBCz34w6EjWf5amGUfuL7UWTChGnu929CgitjJB93LjzApBQ4fi7XzqL",
  "key26": "3m9T4K2SnbgmR9aL1Dk4Ze34iSuarNPToc2Juc2S4S47bTS5bwehKCo1d2wtzWEm67caUmbydjPVLCjEsD7R7Qzn",
  "key27": "5kVCNNkcvP44cqKbvvCdDuEyDqeyo5DonbomhY9gTVfv6ZcWc6uyycUJmS5PyonFw7VXKUCmZuXFwodZ7wehrzQ2",
  "key28": "3djP4H6ssPRUe8jcMacrCDHz9oUmoyUKWrqEZrodyWFwM8xZgP3d64i4KbXpcECfSr4G2BCG9tn4rCBTxD2fHgoz",
  "key29": "2wEVaahkyMk3fi8Aq9L2cm4Z5vhXiCYL8KQdY2tsbzbnn8DdPYkDxTJ4grkJwgcRALd2SVNs9CXFs5kBKCui4Lbk",
  "key30": "Q8RWYNdQ6xR3cSLs3H1ejEG5cveQr3xhP1EqD9jaYMAchZWnLPaniCCM5WHW8rrq2etqMmdFmxkZXseHuEtoEGq",
  "key31": "4TErHd8cxPi8RuBsBFRfWuAAhor3UqcKb22EKEmvJJyV2eAg5fZBE3wsJeF3fHwFqFKvT9U68wS5ko2mgB4q7jYX",
  "key32": "3j4VxmPTPGKPBfNz3CRYN8GuHoBzbYNDKmUWVxutiu7GhsHBExUc9dMPNHmJ14SS4anQLeixgdhLfavLTi3sdKR8",
  "key33": "3P9TkYb8DdabsJGhj2D7noVaG2kqXJBoG7dZNR51hKPq1UdXiNa329xMUi2Mp7azGVkTMDDFgvxeo6RZsSYtJ6Ej",
  "key34": "2Yi5ksSxrina1ZA7NPTboJhGf2yqMdRBvzQ3PgJkUBUrjAxzdtY5Gqj8LZfm57f7WqmR3yaQ8CCXVQeidT1c7Tbb",
  "key35": "3jzVLMeTnM85VWTzhdYHQStWUvFFHKhGUAKfyhfPDam7NaKta83U5FGKd71rUNhN18aFJ8BTdpseAUUMwkVMadvC",
  "key36": "1rRfiw8XXPKJurVMGw31mkLzcz1mSRAvHhGjsCYeUoU1rL4EbSgvogoEgdFW4k17aKwbRDVwefWX6YtVPpQzAM8",
  "key37": "45bryQKZoTvVtnBGM1YfNx5eJen2NetZBEcA3y2M3quk5zgC33irVB9qPdkUATB2ihsXTmRxH86pH8X8ahUfkpFy",
  "key38": "4WBqbnZSjmssym988sE9pCXEueFeopCbdcwafPKNtazQJG7VimzexHjCwEZtFtdBGPVBFibZvdbGdga7fdUrR4NB",
  "key39": "342PvXgB8NUzVRWqDWXGVfUaqxzBvhiafkypu4ALgkgREuPezKw1VQ1o2br8dXtkN1DmP949q6hswwZtFzu3Ly3A",
  "key40": "2sRgkmrKM35XA9zuDXmLqJZmmT3m6TNXZoZf5eajJFdmV6UcGV3qqkTnXgUBa7zUVsF4wCs2g6KtUJRQVDoP1PU7",
  "key41": "5bc7ho3ZjPNJowtaQwAR9PApoJrKWFFjEoEKZ4YEDGGR1AD5KbVNJgn4uiUGgk1tP4m5ZNPLwqYK8w5nwwSNG9b7",
  "key42": "rpjWytTX5id7ysoLdtBgwoDG6pdP3nE6aSoFauwV1QQoH9GA8vDfp31SYwkLv63xo1autZSccyFPg7rWaGudpey",
  "key43": "zTrQ9DLg9JR46w863x17YpsL2ESHdRpazjSFZTHAKeCMKCgU2TF5dTKMtYnQyMHX46xqk3ezZK2z1ko4X6QV6Dk",
  "key44": "2Svq2RvNr23ca75kJaznAT1PZipDQzMYw2FUYNnsP2KJ263XNx1UKiFuraCkXbtpL6nR7gSCRMbmcWUZQ7525ZGx",
  "key45": "5foZHHQ5rT9RX9ELPFFmTqjqzDCY33uP4A7QH2SnZw32gvqHA5rPoVo9BB39HiHwdvCAdvDdN7pFQ5aWFSQ4RFa8",
  "key46": "3tdTHXkxKNHG6aVLYVjtYtbF3vEnTsCcksf9PGRYYFt5UuDnDp75byE4uZUFyDtD2MkVN7Kqnv1cqpM5QfgVxohj",
  "key47": "2AwpVhKhATC5WiuvPH7iEiP2MAkmJueoKZMmw79MjDVXB9DXBTetLqY5JyXgp8Nt8ECRoN6nNxwx5phP87cp2Eir",
  "key48": "32kLDScqdZUwnK8wHaFHVi3vL4m7SB89jeKE1o2qzu2YskmkNzgDxwXtaJ8qQDD29uHq8nqr3fjc7JNFPAgADfPJ"
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

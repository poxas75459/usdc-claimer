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
    "4WfiMoGE8r9qJRDJ4wx2Y3aaKgtACFkUi5JrG7HDdy2CzE4AYainzePPnwzSUBEfC6MgzCnc8rLbkcGP2LxRcjcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F3BecRsWNZoDWLgwKShYnjSNwMXjfTEFEKwQ8aHBwKnGwJErnNBGoFS8HVMfNjZ932QJpk96UMxN11QoX6o187c",
  "key1": "4NuQ8DWNiUZt1DFjCqELtVTh6EEGdHViVncKdmJA7SprUmYjPqFR4JVC2E2J85VevgAZR4ubFrfLRWTpCy44DZ7H",
  "key2": "4qbujLLXQ138Qv35cw7tXowDSY1xwDv1gweH2rCrbJJJjwyE1PiRGWtmXR2XS3ctxGgPkH7tCwGBx7UCpnBHRwAw",
  "key3": "2JpZEjHyAyURpbGZHQDxCabqYXA8dN9bCEKzPe48b8sCFWuLLoHexKw79Q42m9HzkNMsNrYoBPftPyMoxsyrA3g5",
  "key4": "2UsyNcx15fgCs7fFvZ1enhpb1FM7uwKEFYeax8hLZxuN2rjsHUvaNL9QJog3AHvuKh8TfHqzXX2tBeFNZVD9EfkD",
  "key5": "4oMdnLBZFbAi4yBvbDTdYmQToTYRmKNLnYiTDYpyvZyM3yaxRGc1aXKycGNcszWuunuTCmS4rcNpQVeqdxgMHVTp",
  "key6": "5NkiL5gk1efab9tpY9LCeZN6YNSoB1r3Eg7SRDwGRrXvTjjSQcvR6PMGhbFEZfvLfYiksGQDLRJZdKk5xySxNNLk",
  "key7": "2idFuqGn6Q7QDTnej9EyLZfTtsZiX8enNVS8yQse9A8b6EDEPBLQtcEDv7MrhPhPgG9Yp9pJWQKsk7b4k6M9mzZN",
  "key8": "29Ksr2ddSeCsSKxSCwp1ti3iPQBocEza9KxDaicaRTQB3q4RjAXsAKr3CE65EDoNv9jAK6mnSnZ5kosAWyzFDVdf",
  "key9": "5TTWfaiPdxqzsLBDeSxPa7bKf2fKsiPrbxs4X75rrMueLC3AWgGNEyuaiBZ9Pntwd1yXXGgGDZk5AvVa24aVRKPx",
  "key10": "5F4rZ1cK3RQphGcpgfcA421uhu7qYVjggPmD4epVSwsHDspUJpE4JYBuxg3aBkk8H9R9Pg3sGUF79wXdBDA8Usnx",
  "key11": "4ZC4hCwgifSS1JSbBvLGGAbDFNmZSE9rPeXTnfYiyCZMAPVzyPorLNp7iSTpbEakQk8Hzkf42xKhuwKSffoyiMqf",
  "key12": "CyU3MB3NdGoZ5m9KDHBW73hz3ujN9VbSvegT9Vdc5Fc4yUEkeHWadkZKFtFanYb43W4onhrAPuJ4V7N4cGrXfZj",
  "key13": "3r5nzKMh2nZgnbghDWcTScLmgPxqfB74iWfandi8PJ9U462W3hPKgkKXPvijx2WTVV6pTyDhBzmuU7B91wh5xtPW",
  "key14": "4WeitNQ1fLxkL5iXnub7nZr3p744YP3N34x2Mfxs4BiCSd8LYMAmVDo1VGWS2v1WUWF3haUiwNz1s4e1JfW8uWUX",
  "key15": "5gLvJ26YeuguuvL9LhcLqrX6pZEwGFMxfgG59HBMzZRmT9y78AgPejgJn9eV5sg2eZP6UqPhHHKmAyF8gPMdTut",
  "key16": "2F1XCzqeA6ewKBaaenmBnGjCoAeiYcmLMQMx3PUCfRb9HoG4Uo5vP3MFf9yxoJCJ4sTYT5J3GbWXKsXS2dEGK1jP",
  "key17": "5Gk54tKxMpYqrKf5nMMe6HRALqurTgVJD9hsMHqxrfSY4ucfxAZrdkPe2suYVi3eUi5VYZdXHv7zamiJrefPJ4Zg",
  "key18": "2BXCa1zQNY9JeYMY6SUDwf4YcyATxRD2ER1zo94NgY7ph5UPfxRt35kQ2SxDBzGp8EhkWVepNZSS6Nnat6e97qrz",
  "key19": "4yfoLyXACo6JAkAZSp5aXocugzGaWtJRx2xXnus1FgBzuFh4dT1NHp6Y5gaTBhPZECwyBoXhGs5ZTSBAKCFPKGUg",
  "key20": "5hmn9qJGgxXU5Fd6yRwWdsnjU6ex8ymi6tgA6jcuAdEoYoxs5pDNTGfx5WDk2uAwXPyVDcyjEVyfL5C6Q9SjPLwJ",
  "key21": "4mCHb374RJo31o6btw7KouaUg196TezCyGUU7S5gmfjQhaY8925CNVwDnyomKQLnaunSXS3fJDSJ2NcgA4pv8dQp",
  "key22": "WaugoF4LDsTc8ZAL9W12kaywuWWQniTbbAhSsJhJHegQXbmQ7KQhSwkDnK2i5NYnxFGxi9kY7Je6Lnk1nWWRFQC",
  "key23": "5zWS3HByWpTXxBy9borNWFKVkVD7P1PqUvU69Ujrh4UyjpbHyJpQFnCpez13PmfxsA8icBAXSrLrq8BCRH2kCcR3",
  "key24": "3wTFEfP6oZno86nq87bDyqyZgjVSx5Dd1rVWyHM7Yv4NVSsFUGhaUZxVLp2f9VbVQvaiYXJ4FUqPrp2nma9NJmXh",
  "key25": "2PCpSUrnUA3gGQzn5Yug9raLVuxyjvgdsWbrPho3DpuHTBbMxZya51jR5wkYrtEGqA3oi8JDTyozYWto4sc9n1As",
  "key26": "2jiP57eNiD7sxmXeTEq3iUMyeM1rxMTt5tjqPfufTt2g7vVnpuscfqmDxW5AHq21SDbMRsriXcqSNFouNn9m8E85",
  "key27": "AnfPieii4cxRnEzLgVyjNFzS4MZNMKoFuck6ZoUJxYSXRzJ8REcpXYr6bRDaWQnAP6fWUjfqcw75hNvhB4JnFvY",
  "key28": "YnZTVLkPekxU1q9zc4ANQCNguPpHR5sS3zJeTQeyRZH6e2zAVanT325hH1nowHgHXyKJWg6GYcnDkCbu9WJRTWb",
  "key29": "jdPCMb9mvmojxyp3iBMFjc4KrG9GaT3Y6t12qNfWuQ3gVw1WRVBe3FyXmxagjFm1voM36y1L8tW9gh15iQN6vtv",
  "key30": "29wkcKWpi9Z17daagg2FBx6dPxhSy3aKqUMv74kPuAK26p7boaR1bTHAVq4Z9hFXp3XNo9njeJTFk1ui2r7EgNG8",
  "key31": "99pPU41S7Z2YSeD728aGyP7gUxg1Zuu9UBfbh9LgzsWXgMeRtswpimsFX8dY2eXZGiJWY3rB3uGXoEHpLm2tzU1",
  "key32": "4oHDmXNEPi1jMBqNoZB6aj4H4AGyN7NWczPQtZxpc8bE8mQBxuBceNx7KqJfPxN91sYRvP1VQiekV52uZDFTZajH",
  "key33": "5KGKunJuTbxmu3w2bgF7uToo5vPuGotWw7D9aGiDw8LhqQ3L1Sy4ptB18pSoAQ5PLqy9EBfysJRrxV2r8nQUq3kj",
  "key34": "2V9rsFzvySu7nQwFp93yR6odroED9AWuwzLfjpjpwKuVowjcDLZZHrtC4KLEAsRWcLscFSHZzRyYsWy4Zj3nWadv",
  "key35": "4J4jZKhLj17JwgKecMt8Ah54b5JwHGFmqsF5J8BFivLW24w41kgzLmhxaoFa3n85czt5FohgENbC3GmHR8ZKrLCs",
  "key36": "5ZxE7rEazMALJYQz5kL9Y11ryJ2UfJWuiLdtDV42LZMrFRLEePWWjZFESW3GEuWMe4CJZDKuoq33hDPHAWiCoiDh",
  "key37": "3jQk57cEa3d3gYHvrnp6kFHFBCJgVxQ7UWVwiUBwmU7KxudKFvHbYDSe2tHArUS2Jrte3U4WqxWwZMmrgJWZ1FMm",
  "key38": "5K6mBjz3GMNVJK4L1cGwgpf3TeDba5LqMFjbimkGUXbWbVMdSopWehwoB2BnWptpzN8PKafWRyqnwgU5djjoFcSV",
  "key39": "4swK3t4vf8y5CLbTGfpcZBJ1chgSNW1oB9kiggnhoxasGguHpwVSxgutyt3P14j7gnUXmCpixsNyZGdi9kvMfPsH",
  "key40": "4cRq4cwiLNGHohuAGMkb5ba3rvvyGFThB3Mf5gdyMcC5tmW56PGeo9k7mCZrAFHwzWa92jovauXRonmc7GNBYVqm",
  "key41": "3FFkn5drvcswG19Cc8G4bDF6NbS6ukkHEZ5bbhrThb7yb8GjT1CwF49TogAR2bsT5h861cssbikA2CBu5Qmsdj3M",
  "key42": "3S9tzv4B67KovfHNhCUswJfTJ3zJ1eFeJADZoTkNeUfdPXBMsgUpLuDu9NMAZA83em7R9c6fqxnbHq2y6dHvp24q",
  "key43": "5UqJzUJ2ZWbVv7Vuny9Yd3vVSQDpAE6jr2XwGD78fRcKF244DrX1eoeaEss8K94jF2P6EgUichHarcrxinGiU8oN",
  "key44": "2r1cAGhaeNJv9whJhUMAzRLMNE9teNCjwtHPdg2GnLe8fdn7uLz8NMgnQxN6XvcRQ4igLxtofDZv6TZCZRQNPpz6",
  "key45": "AZmqfnrW1QGBer9gdy8cr3UGDVtALEJt8SAh1iHEofGWF2g1SKHFGjPk9cbGtBqCVdKSwY7JJWhQtGPvB226rvx",
  "key46": "5BtxXWo5fjK4ZdwUDMvTkgFEYbiHguqs7VujixRqUs7JCzhF49QGjaSHnz9YQBa38oaibwvSPuWuGzCoBArKJk7a",
  "key47": "4zPVG6WwGsnRyg12Ydf1YKj3uXuyAzJBnALS7BowixLX3fwBLrLvXxJQsN2kCehkWBquqy4fe1oritxjv6gXHqpi",
  "key48": "3uf9WtfSL9YoWLcX6bJ7HiNSJ1BLwWzgukmpzFwtNPDkmZqT4QTVheiAeQ1dLav8fHm3ndna7YszCfFuAUUitmnU"
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

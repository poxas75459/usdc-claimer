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
    "22dXS55Dxc4BiCB7gieea8P7cUcTAFwsSdBt9Lpn2Yvr8QneyZjyLfkCUSRQkyRCNPtQgxP54HHtiAu9UiitRZ9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFh1wTBnfXqQ5XJrzLT4xZ9kPQHKrLCMzRW8KhGjorxouwp9DxYwpoxtGKG9d53vt8cut9PgQS4tTHhtA89XbiC",
  "key1": "61GC1Cg6FRd935bA3hkpd9iT2TYPnFLhgx6uFBcqR69EcL5mLx8ZCpoUJNv9LaqVRiMgnctWJSGQ3c3QeTVT8yxa",
  "key2": "M46in1PWt19fk3uBECFevbNopearLiBos6R468oikauotdM3Z2gHsBtgYhBi5pv1d4wEtbCTSoFzBXhiD8ffcLR",
  "key3": "2dzYyzJZrUCJfwETvqBSndt733MganBrSzNzpMVSZXdRLrbhZYrmSu2Mod6a1qFvv1YTAjaCXJ9C1csu2dkpbBYz",
  "key4": "3RP4nKW43FCPexjr9zuy1KRmGQbdijfLTVBB5X65yJHEhPw2pJdpua7MsRNkwtGnyw8y6hi6xa8GtgxV2pcggzWk",
  "key5": "4UXbUFpxLd6y1RvxdaSwvRuRx1D5aQAPVP7TJexqbeyHRJ2Srnu5s4XQZEMn7ePk7XMrexGMYnUhUV7oMLQLwwf8",
  "key6": "2bHdSnZVZiK34Df7makJ4ZYGUFgu74rbDqND1H1aeGqR4urtQMdTvS24przVwTApYegSPdt7mZwBYTMaMEmkdFmz",
  "key7": "3jHrV1iWUr2K6twuRxqB8uLF7J5raXwE7CFgHVoanR4wsfYeei8Z9ytKkEvFZoNVpgJ1a2228CacQzGckYVeL1FC",
  "key8": "59Qz4pGjy5cqi75U4M8vj73j8rGoCTQzvJDPMzrBzNHtLAmhKWo3LXQJDWvgM4paRFnQNgT9qEK48PTz6Xt73MX5",
  "key9": "D3K91771mHY6TKbdUzQhMcQ5frR5S7QmzGNQKpbFZD4qncQvAYjyghmGaAxBRn1ZXsxHHNNqrWMj1De4Ny6f7no",
  "key10": "3oNLdRXAp7W5TKa6QJ5MMZNYAM5LFxUq7LqfeAnA1aF8gDAdC8phQnK9MHhHFKWmiNdpssPSttWDpXNxvDfY154",
  "key11": "528B9gQD2LEwk484pbds89EbPkF71PYyiULwhkVuzCEGqmXGiHPEuJvWfXgGeeCpSPHjCLuuio8t1eC4fag5ba89",
  "key12": "5UzdUe1NXHkE5vgS94j9BZKQAWfvicM1tuteLfgYcJC5moU7rg4q2Z7YArtWLtcZjCMeyA36fP22JfDf1gdqtbPL",
  "key13": "5DHq5o8BxtokSoXYYykndxw4cKKtLFByEc8gD36i75cMnoozPpXS2BBmyX2asqPMf3eCp8h9PHjcRvdnLeGwZRVC",
  "key14": "631zPJ2Ap2ZYFYfM16XuVKRT6boaL6vuHtFkQZakQhnTrrgpe2QUkn9DJdTkSjHVqeBVn1Xg9kVC6FZcBY66N8xy",
  "key15": "5cRhU8HeTZhhrUvnAncNUYfgHndvaLFECjSbzb3XZhw1zwhQqJFxaX74Aim3K7ooSQy7JuQEJSxuKDqhgXa7YPg1",
  "key16": "31zFp62GxGmb99QcCwmJChSjY1QZFZVaG7dHtr4UDvZgdLo5356WPerqLC4bUAoqbvhgFLwMWUMPxGve8s6AUeS4",
  "key17": "2u3mYaEqAqFiok7L1QfWr5arpvbqgFMviTqHhoD1arofUWBzgu1KxtgR3QsHnJjzqnNqRv3ELPurRNJ6Bvna9PRj",
  "key18": "e3VKUbdqrQwuYNr7JHv7ZHemEjKpMJF3ysEWh2jWuGK5tFX3iqgFpmR5f9ho7QVzBqke2WaaNNTMzmim9FVuPGY",
  "key19": "pmdC19ezfrdwaDEiS5BZoM1H6DFFg4LaKcp2csP3XtsaNhMwePonnGZ4KNSp7MFxQWqUUzsCQhNDcyNu4Wergib",
  "key20": "n15wUmVqm45RePa6b1yt2pqtr66RPizgA5cbtvF23XAmT2vSYQVWPdLmFemM6h5QW2EECw2iJQrDVpAcQxG5LNF",
  "key21": "3djBSbVbmqwmoZF7DQLYmZidzSXZmeUDDbQMkXc4sdkKinaehGPsSVNdHRHHsougvtUz3auiUsMsnFYxnCMnNyxv",
  "key22": "4UhLTha5DJXxh8LyA84x4jb8zoGPNu9FT5DbeV1fvUE7H9vboBnijrSKDhm8dbgNkRKXcvaqxygqV6fmWpRuPtNR",
  "key23": "5aevap1YsC49ZHo89kiCqd91xZS5ymAsxDMNRPJD2hhgeAAzDEXXBVy3v3hrai62kBZeUbZfw9z7fyCzbx7Scirb",
  "key24": "m2vz1jiYdi1F5SQFDPAsxWq8FC6KeswzWkjfQ8baiCQxccMvinMEdn2FusH3Curqn25gxxHsayNmcjPft4wMfYW",
  "key25": "3bHrdjPmja3maqpZga7avFspgyDi13CJvi7wYVf7wCkpnikGDJoV3uNw7Du18vrisXhiFKfXbJEFpKgXgNqZFmPS",
  "key26": "28W4KC5nkvW7aPy1ZHu3U62crpbWbRwhJCfgFMAwH6wckArYyssDVRLHQ4wRiUX9Cj7mdkUmjCuBJ7Dr6aKWLhhh",
  "key27": "3q3iZtJYmogkJNJs1NUwZRJGekz9FfVTLb8oHyjFnUDSfgqbRghAxNNTC6SBMcEoPZZZmbffFXkQJZHWVRTpJXvZ",
  "key28": "4uscdTH4Zm1WqgG9T9YD6zPWhdpCPWzjJKnot5ybAbm33kBb7rDw5aujzfvg69KH2Wws3L47LMqsxfJRQT5WPvb2",
  "key29": "HtTv8n6A8zBE8u7qEfvacv9eAgVYdrAB4cmj5MnefJV1Yb8w9rN21HjYmEVcVbTgipBYrU3o2oVcMR2hik8vxqV",
  "key30": "2SpaoEFoqUcJk1nc7nABM5zHoVnyXjy7vg3CpcoGv4V4gzCiLfgKjfk7NXf6sme2AvH1XVefHaSJXcGcbofZNKwX",
  "key31": "SkWg8Tg4QE573xZEY5d9ZWfLMMzqRjAVgvgswMF5qynXWXAWfVPynkbxNrPKohxNg4ReehTtv8cFXUGjUi48DGD",
  "key32": "Mc7uyV3SZaDZSPNx86n4jib4VzQkXTUkw8gsrhw7HWKNhkXkKoFEPs6waScHnKmfv3ycpgMWFNGrzbQTQ1ohpPq",
  "key33": "4KRfeWqvFQcAgcFCmWEXjTDpbfKAG7b1AfpiRBBUVwHJkAkYxsbtWoEZMys8uTmT6butYrKoT4qkhtDHSvn636Bk",
  "key34": "5JUnz9iSsTWW6EueUCdtmnxcUPXYpP8wCWppHqUYWHsSoq4xFHeqkzYRh8sAGgTrRVavVLyYfyriCYSNzPj8Nvm",
  "key35": "2KE7Ew8gSBeKG6hjF2pT48d4bpBShGi8cG39dSy13qoogRSGaorCj9YLLqGjymbtgvQCDzdcCNxFkk1msLmzaKto",
  "key36": "2JuRHfRN9uefSzs577aibCbMwMGWK8DBCxBYCbJfUf5gPG1j14g6viRgAd1MxHxog1XzXsHPBLufjSh7Fv34jhtT",
  "key37": "2yDG7fUorvpGYk7cjfpavznxDn84qDRWHo4kcVej8RmFpbUgT4eZBW58KrwUSZR4e6VwdKtaQV2MLzkwbgrBDZFv",
  "key38": "yBT9x4JBcqTZUt5TqcgrS7tTiRgv55cc73qii8DZ4ZQCodNPT2bB9EU6WVq77qYbvs4XYWgmhRp6pSYWe9jCHFQ",
  "key39": "631D2LXyjaTn3oUSgWHGy2XcErLmgGxcX1HdcCjqXtZTt2qnwyGq6npCxSrJ8txPCFDzNWGq1xnpWjjKjqxjJokQ",
  "key40": "47uzRcBY4UhKPGF2WeXCwEZt4MzqmvhStFp17d4ERzAFEWAgyMaLB5CRFBAUKpNECLKBPkN2veesRy9uWqXR8Zw",
  "key41": "583D6ycS4N6nRVo2YPg7tDoxMSjfruPocHqNwjHQX72cAhQX7KNVqJS5jtthS19HhgUWD5b4jgusarjoHb5EEmoy",
  "key42": "5EApvMjZfgbYyHTMDeJLFHQzyV19CQvRVBCq9bUXTSLmeYcqtLriuXzTrKkgai215EsxybgN8mEHr7PYkgK7e9mp",
  "key43": "61FdJiu6SuQba7bg5QYgZdveRzdNyuiysjC2omBV8gUi7Kq2CFFyMzzxA8U77vDoHiqUsYSMnmst3hdB61KWMQou",
  "key44": "PevJkscY3jhx2yvZwadnb8vxey1GrhDkTb5iiiD28i6duBvJEKKdVBC6faDb1U9TRRNHpWcmGYgfk3uZsYS26KY",
  "key45": "3igwrRRx1Y7Jg2mncRbSWMowbVFdoMJnuPhZ5LZgE2EWxgxM8c9wNbjVZjjgevmtG31yXWin8wv5eeGqTybyF3vV",
  "key46": "5SDdem75xd5woRov8BNvT3hv83Db5vnXefSkRsq2TTcbpNSBYNmJ7nPpeZufwRrN1E2zNq7wEcyTsSpUrzYXJdZ3"
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

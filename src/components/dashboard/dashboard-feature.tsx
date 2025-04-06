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
    "43Kv2Tg2RVRZEciEphDuPJTsJxxrNjpnZqEeDkAprPmjfoJStEMiKXtQCP3gfWXXxjQV4zoRQYYmNazkKi5vYZk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yBWfWMKVPeJHedsWJbqRiDbofJodR1hy4vMno22aCh9bYGfwE3jKxAPjQ7CpDZiaJNf8WHwYuoDFe8WPi6XUtKM",
  "key1": "4fvQnLapTAKMMaen2zo9Q8W6K572t7gv9NcqUmG1TrMDkrwU7U1bxHArsd4asvtUsBhKvEPepWi48NPLBYhTJhL9",
  "key2": "4P8qJhmdrWQKsoVU5HPooMA8nkLafK5vsUe24oKH9rPvRBHzgtnREU1Rf7F1ArXk4DdB34cFEhdem9Kq6gZNupyo",
  "key3": "5FvXKkeydYkHwLeodtBuN12SCeFK71oweRDGZFw2M57zSpwddSkAfQM3oYSUTYxswuQ9Xvmx3RcA2dsi2ZkCxapZ",
  "key4": "5zVH6A5Mmiv3vg67x4gT9F9M5n5GXZtt2cMoaR7gKEJi1a2KRvkm88r4dVQzUcpxvgU5ggEa3jVu7qqPJsfD8mkr",
  "key5": "2GAHDFCr87NGjSxfw65GcQ49uPXEoxvrBH2ctDe2NZ9PehcNH7VbBGrL31wNaSkJCr5oKzq5c6HjMsYFZUsi9Si4",
  "key6": "2jeH2T7bK5eP4npKozchojUmVkjhTYPb2CCwxoqCX7F9pzezYMdAbQw5UfUvS2BJkqN8iLyUM6DzspZK81iSQby8",
  "key7": "3VYWWf8NEQxcdudaDjG9GnhK67LrCnBHH1r7RKb3aBvPh1fPwK2ZSUiAnsSCsxfRw2xrmmDJig2fxbENpDVp1qiW",
  "key8": "5KJz1fn2fqRybz4w41ywrMGmToA5unzmNwz6WAHnqEzcJMTyWwKdEGaWViuS3XHPCAzD1zMSmBdqju38b5Hz4tkg",
  "key9": "pcEmo9zyjdibr15yDWqJ7UWAsy7GSNBquFxzpiSm6KHmz4aYubBH3CK8iKnFcZcgzjrMqYf7bVsm3eA5toHeLwM",
  "key10": "cJ6G92Yfw6TtoRGzfz3erCE57Tqt93peVoY21BcpWD1DrprJfcz8RpFSB9ppGYaLd1TphMD5ap4MReZV8fqu6x7",
  "key11": "2LsxvHbMzb8gVRKmguMPuPbhF5iAgcBW1TpYHddb29sUvKBZkPSXhvJsskApXm6Kuuci8mHRmckmg4voo8gkQQeQ",
  "key12": "49mGsPmsys2eQxeCnU8oCQVU7GjUjePp14ZMKqeonLkM2qtW3NpiKT4FTLMTZGf7E4UjEUqs6sSepTZHfbnKwyTj",
  "key13": "3vfRmXd89Gw1QtRSDoeuL4wG1DAMkCsvM7dECvZG3ESG1GTZQMmCoJseUUG3kVBWXujHxHwxrcDrMMJj37eqRb43",
  "key14": "TpxsM6RFgyj29ox8YZTDSAwyikgBfZzq5imxoTT5Q5gDHtpr7kyjQmZYL5f3imxfCXHB8Tk1SS4fxeHKLF8PFNw",
  "key15": "2osr2p3kan7LVnZByAvMdrRWUqeFpNBpireE6qWoQUnvH3VDsexHDVeRKfk9eVRFv4CRQoKdfnKjXvTxCKhWsrGo",
  "key16": "Ht8KfLo9Uc3bH2NhHeSUJK2P2prVJfAL3DzBVFy2WQKLVMyGe7MjJhsxruVS33kJ5TJ29EKH5UPxpG8VTtkrcgs",
  "key17": "4qL8cz95kW6nxyE2R6zX39qpdu8MfDLQ9dzgv4GkHmDgcXDCFwNbDrBvtQxFU21bAeMpKAwXjUmyvEwK8ZGX8EVJ",
  "key18": "m44qL1e4TMJDXmdCqmkfFQ1TYz7gefuvtvBKHNk2TtYqd3MjjfQjt5LqxEAkr53FygwEhED5XH71nEQwYGe3h1y",
  "key19": "55XbNN4J5XW4Jg1N9D4xd86o8M7W9DPANj5f9ykHhaK8TqscTGDYhzjPUub9QywtspHSVD9a7RYuPZQ87Rv8XwiZ",
  "key20": "54GbZneHNS1j7Et69EvZP18ZyH1VBz44kdcxNxbC5wKFbECzBoZQM1jVh14GnZrBkDDsyNLCi2dRYDt1SRTjGtgq",
  "key21": "4YYxpXxmpSfdPkT7aJsVVahd6NtwhcD3S7uRsKoairdbVFTudwKnEapniRgUXWuwMSEcDUB5Vfsj3UZT4e4x8VwF",
  "key22": "5ha2DFA5yz6vbcnGbiTNwNheWujAsdud6GRJ4oar31f1DMPGHCRzs9QNGEdCSZmx2wdM5aTB8K58TjquCYt6FRiX",
  "key23": "3LMYzQjd8fVQzbxuXSQiMENL6TwPuLH5MV4Snt4C6tWYBjrh35MFiWnziC6iiZbC9iSuxFdHjouQaQcyV24d1vAR",
  "key24": "2wPttoLNzQAqDTPrUvbHQemnsZ1VefqwsNGh6xrFTPaKTgr8mCWnEq12VWo3mj4RfhTSTiGixiMoFBcCmHP66NWW",
  "key25": "79NoZSVXpK6AuNcNrfSCtpCRD3q5a6CXWJ6GWZAWJtDxjqY3svnpuoZceEGb1rnf9y6heP9c4bLU7MpzzE5rSa3",
  "key26": "5a8Npa5ufZgtj4yHM1XYU8gnDXa196jiUwwSPmwp3XBBAwpm9RarZp3mKpPF4J96pdyeiGpTYsHbPftHZqJpmPei",
  "key27": "2ZRj5Qydpppk6X34F1PqC8gDXbLDp7LS3X3A3Fo3Dz3BrZqshvQfFk8kU8w3feKCdTYjYTg6qKArKARSqbEk31VA",
  "key28": "zAeKhowuzRKsSPwY5Az3cNops3MTyzkv5W8SxbMiXRHqWa4ygsC7JRcwSCKP3XyHhCjkNXK43BgMHeWw77r9xkB",
  "key29": "67Xboi3tCnXaBX9zMs2VTwJmWtzvNpvs2WWoGaSstwDCTqWw2RcdaHLxqrdf6YWjr8qxo5wDYcmd1s4wdJWXWg8c",
  "key30": "58NxypHSnpnfXvSUPaY3K4JKsxG3ca7bznYLAKoHapaiu3i5UrauQwpvKvJ5C178hnrrNTjnVjKtrFpb1YR4eghN",
  "key31": "2aQVvPAk8RuDvdfoFnqVC4NunrHJJi5kpqXDS1Jbx4BGKfsnGBQngBn4uVfN6R3vVd8FymrLtwVWUCeUsNA6uR63",
  "key32": "4asv8f6L85mwQoSYJ1fzL327zJ1CDjUWWRbmJnmWSkfoSmkgd3fqmsq4VYcLDdcYvFdfEGc9sTJ5Emzop57UZKqN",
  "key33": "4JsHzt7SzfzqLUdY6Rx6w2xFh8zGGUgUKCWyK9TZsSxamQTR1FHiEAUMmiN17fBnnhstAZJ4Xxi4Eja1j5FnpCwj",
  "key34": "yauGWu69VnGtzEkVDAiMtaw5RFtzAH68xFuL87eEoQWxynE18y8W9z1eY7G6anA9F877Y6Fka7Mo53Vzo6xgZU6",
  "key35": "5UvUAQoTHF78jTuKKUmx14M8MghmtQmZukcf3u6HZwn6ysXdidTj2gypCqvzykKe9V9wV4vRWgz66TMK2xzLVcgL",
  "key36": "5C4sf4voWkVKypM6zoAoMeVjopkG1dxYssKE8FFzFFhhRwsDP13WFfwuhSBhCppUGYWNRJcfTWVcHWjfmWSbnnZP",
  "key37": "5yhFT2KWcxsUK6vEcAYJDUZMSBt2sD6TgXRdfugaRRXWtkxVy4erZsH85TWMZ6mmdbrGfcEwMNWkmkhHD7KkqT1v",
  "key38": "2rTZuAjnzdk6kAQ7uKbc6ZTsMhfDKEqUPZQgcMRLVcEGXZWQAqF92UiFuTJrEfPDtZrhoH4voq4YxtoSmV1jSKjb",
  "key39": "52bbMPm8UGEftvjJLkq17EpLRfgonuygXUmkGsqh2zpgwWMmVbH92i7uMYyhxUyiwUA2cBoBjqiXHDUQa8w43KhM",
  "key40": "579bKMH8hNwGMh6Jn3jhYStGi4vwQaENRPKdvbW116rNhxcyBXqU1fmZRBiiHrcJVonsuoCGyf6f7wLP5wRBmm6H",
  "key41": "4Zw3mLKNCtWuKmbWoxt7BHd4i5Fmq5ua7onYJi7fKQX9a8MvtaQAB2Fmqms8v4CagLemtXMX9Ptu6fSe35Kwtwz8",
  "key42": "5MhikM1qsM4rETmCy7igRhMU4DfetYK97aYXsQqHqX5iW71RRFX9uimf2wZjsmMXAaLiQAiiYD97Y4D7KCfyD8CT",
  "key43": "PaeQnQGzLuuww274GjaTeCR4ADnq9rwCP92mdqgnAXG6XKVRnuYUD3zP7UkeSDwUjrZJdVEEm2rMrUdkn1s626A"
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

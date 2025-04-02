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
    "4zrtLKFUUwdygyYyMcjCc27W5YPi58oCzwim2WGDDY9QwTtF2wULJ6QAdav3YsdWQpQ4FH2h4bqQ3XpREWNhhEjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbH5Vti1hRRkfzqs52Fk2yq1ovrsFmieZNfqepvekJf1eaxwiuTCdgBxE1EHNHB7sU9HEuTdKXY8UwWaNCHE7CD",
  "key1": "63ut9AV4Kc5V13ReKTv4nMqdQyNcBzjtvaMSrZKdQ6E1caWwrR4YyD8yoJVfARP1Mzs6VxThwRU8fEH73EmmfKC9",
  "key2": "2nFNbHdSLWrXyLRT1YBBAQKBva9XGsT7K7Tsq8gQEYw8mqDmTJsxmVYmedKRjybmRnpLSWy4EyhzBDEybypxSVUi",
  "key3": "2s7VXkPEES2yiv2ZdxLhpXABZnsnsP5VMp9ECaJKxChV6RsohPtTrDtZ9Lb2dvxmrF3uFd6ZuARJVBv7ZQ53UHzp",
  "key4": "5sg27C978btamRA4mmkgcKvz2PwjB5StPnzPKiQk8AqNZ24YLjp9nJZqJne9yzjoWbm6DKUD1miENEAWUZZoKUCZ",
  "key5": "4TDdPnGs7q6bEc7SxBzHEfn42KSE34Q192K6K9XxsiFgbeDNRuhtLUfFGLnBmz358GM9kqn7NZwvhgCRpmLkEAsh",
  "key6": "jvwndMveKGRKcG6ZcH1M8AUSq4jZTw1D2eYvP5T2oQFp8YPdciRrWhrdNGoMFFXesYcZ2tDxCgBZpy5HVoRF6wi",
  "key7": "2gT1wGAvV9WoFksf3x3JfZuKBYXDNwd9mScrWygj9WtCMm85rzqrnQtFGRm5a2ppcge6bZgwtQ3dAcsHq3dWAEPK",
  "key8": "2FKbq72KLRJTtQcHEureNArVLGyhSTUJKsd5HTKHu5KeHhYkVHLXiUn2BGmChpHcqiPZhmz3osuVjqrbV1FLffJz",
  "key9": "2KBBWPaeFWhJsLxnyHZegy3s4jBpV1Q5CEajdzFVDyzsiYxeUz7QHks3vgGqMhDN6KFeF2YtAiPwkHj7jptY2HQM",
  "key10": "2wQUeNirMG6jSN9CVS8wQMezAkYcn9qswMPCepe18g6Z7RZRt2Adbyu6W7foFu8qniNpfEjSCkb8EdsfSwEDf18e",
  "key11": "5dfCA3yJukqewHNnRSCKxioiSMsiWgLGN5UycKuRdeE7cBdG6VMX4PDfBoLeTBUN11ZPfgB2fMoGamnawzJUuz7",
  "key12": "3XNK62KoZ5NU3wvYUnoDmsoXx7BgG18SVmrMYSuZT9c8HZ93KHMv1McvENfw47GfsTG4aUiBTM8cJL5kXFpGegcd",
  "key13": "E7Ks6LE8NUWjRuCjNLKeWtemSiFZVDwyz7ujWijFwU9NirUr5XrMkPDjk8B6ECHphSBpHVAzgxFSC3ta89AXtG2",
  "key14": "5AB3fNaAdPEhFtaFjHTu9rsaKtZyrxT5bDMXwtd99qFomkBKfqnzS52JwawjFmYr5ZeKkRdjqtqnJyPKd1p2eKW",
  "key15": "3cibYyNv16VAqqbyZQ7Up1ypN6JXkzFfvoTMkkBp9GdJYtaQBowjMnVigz3B8ms3oB6sDZ8eyj4vX1Gsd336YhdY",
  "key16": "2eEf6JzpxpL9XNXtoGuRfrEmW4pWXqfjjtUXVW2HTZvek5qwkmSmK7cCxF5byFqgScoYR6QSFPBZZ9MDge5hD9xu",
  "key17": "5yLXje5jAL8TabbdZinochxoe4EuLXZ25hKMLxQY3LhqvAGsrBCcWbGM9avdVNQiaSt7ENok24tQjbbaGY6XAuBY",
  "key18": "4Y6QA2W55A9qunCguKZREcLi7NGAKRQDVthxYbA4gv6XwNUHGuzbhQ1tFV78XszvdL6JWhrkQkNBAWaG2yZyHaax",
  "key19": "3wtXEBf8HoAs8oseEQmpEAodcZkLWwTx5kDhseT2PyKQyMr3V1aqSstZqJzDfp2QHUXJeJonhNjQW1Wzy7DwDozz",
  "key20": "5aJd8gCR38VqMr1xfwZFoBX4VbDiFWfiJdgKKpNx4WSC3vWfVeb2y4VgkyxGvXjEz3KjjuMci9uKKhjQzQT1S2DY",
  "key21": "2REcpJeHZdLFirSMDiy2sgnsDbxChSmrGf3gRWCGp4qsZ5Gyy7j6FaTx7thnVdUTPFDCZsaeHQ1WxVcnL9HLvoKd",
  "key22": "3s9Vk6ETVDaeCX99gmtkuNEsCBXfFb9tcdkeTbiSXdHCeHSyeNmXzWBqVvCKGRsZPCgmnSxLUhv7Z1jjGTvbHenJ",
  "key23": "61YBaQzZeiiPdTzjynvt2N6w5JuqTGAxAkoztPt26y4Y9QMpNMdr9YseL6iCWupzZyXv9phTHEt411omjRuZXWFE",
  "key24": "4bpqxuGhiAH1X6GskUYSU3izwLgQPZmxuF29Pj5mmafJdxAAa4aHxKyUFZKA2E6EAGJ3D8QRn5QSsqzwzQF65F1E",
  "key25": "cwc7XX7APZz9K9gebadjLAhEEHRoYyaFGWcPqegp86XSQJgAd29nGXiYuDqzLNpKBvqM3WheMw9A73CdycwoJkB",
  "key26": "55uNQqY91CHrHEFrvrLyA3TnoCN9BBQpfk4mi4Z4kexowEwUTLUdzdQ5KNcNz8PWM1t56TfYV7nkp5xtsbqUoVbN",
  "key27": "3RtKyPnZojLv6EbWK6nTcyJD9EBXWGL7R6EyPQSr3giAhaXED688th194rqpCbQRK7z3WDNewC9tBTtnTQZsRS59",
  "key28": "3P5tWfsnwGkAru6DeCUke6hdah1MgR1Q8y9do4PJXbEkPbj76mujCfREDcktfsBb5tB6VmbNk8QMYXyhcZe4rPgi",
  "key29": "SApRAqp8fBtx97qAd2Vnz8812oNiJrhN5yU55Q5w9qdfpWqf7R4YGgHzyyS3KWWnY4VqJdW4GLa1Eyvxib1Uk8Z",
  "key30": "4ZqcBXgvY3oiwRSNt8wwmugKC8ZQHCJadcvpLhNSAjBk89GakDbWmr9tVaTmJsWbYGWVC5NsxmV2rjsmBcP37LZQ",
  "key31": "5UVK3vLdTi3nAoufFXBqc9onQBVz2XybeyTYnMboLwymgSHstbJtoxQtNvyTQ5FU62mHE2B4ZQVWRwJmhkzfQemf",
  "key32": "zhGe8eVBjw9LonAiysHdJGxYRv8gHnPbW5FBkt7wnVqQQhhJigoMK41ZBeFT8YkNwbGaMEXWqT6YwA4fKxGYAc4",
  "key33": "2sB1Q9C7HAU1aHzBHFCw1WXhf33ZQ5oKVTYgFVEYxb71jqPyMN9uv1sVVEAMwwkaf1f2xdhEE3oitf5PDqp5ZBwJ",
  "key34": "3okggjvAQKztLt4HnYbcWH9Dfi1TYJAbBXrs8eJNLnY9wDKnx7czh34crQiiCLGe1KExU3HpnSVperiKNCEc163B",
  "key35": "48SYRt8JX3fbEkF4BHtuUPyXJoXeRiKAJaZLdcNP7ZtMvWc9YCb6fsrtdYjNHzQ3AYCnGmcXiM5V2xiKCU61DF8Z",
  "key36": "2kzKJ3XNoHzFPHZrg3cD74nTqC4j9Tnu2tW4T9so5wSbxKd2ZVSwU4MWQ6bvr1amQ4XJFZ69345Avogb9TMMKDju",
  "key37": "66cPnF11vGyto42NY2712Bwmw6Di6iLANHmKnTfLDRfyXWp1eppGrhp33q8r6PjjnJWRFsoNejunJ1f5Wg2xybzJ",
  "key38": "44TUFVBjWQFQSorMVYuo8YQzk6N7m7KdScrX8bxwcGcafRiACXazxerXRBEjbbsT3VH23rMYXs1QFDjSyTsBT4mM",
  "key39": "2BHSPvwwVFKPbHSbqjXZd4fgTSX29APDtKJLKm6YvcbkV9dt4YQEaBimYSpwKA1Y8BqZXLpaGzqnCPGNnBYEvTcP",
  "key40": "4iJ9DiaUjLBYDf9pQLffPm2nYsr2MNizBUrUNT7F8a67ZsvEGB2BG4aTuRV6RUedKECdQZ28AtkpJWGhcQJxME5P"
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

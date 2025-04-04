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
    "3ZeeF59JUkTLpaFwgpsCWtstawFyzQ44Anw57LC3BoDK7qw1m8DsAsLyWvxgG2F53qTbNFzs7NjKui1mNZLgkzbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFR4By7vFviE5qjP4Hg8ErSAxnhKGCEbcaaufiUsEi94eJbKdc4by4SFBfwoQe3uBoQzwHeweuXdPVHPPD84frq",
  "key1": "5VY4wkuRSHxkytWrVDAjQFsynTFHSXUhqFigg6LYBw3bofHheAzRCgpN5odcBXMPJTW6bPP6rHoSneChoNnCZpdQ",
  "key2": "5xKRuim2xHzK2HFh37GSNFREkGArU91Tob5Y3G6Nna2Y9PG35fQJoPtFbQyYXRg8KDfAnQfm7oe4eZgYufVWhRaF",
  "key3": "27hsKSQqf7RoieMbD2tfDePzYHbFAPtVX4TqVaY9pzn3ecuCmM1NYUBf9hgJ9GMAeYcEaGGsomaLDSvA5YLMnuGE",
  "key4": "4jJ8BefEUZ2TGxMSSfCjpE8p6LJX4wVPkwCnXA9PsVHTQi4b1JA5gbhYo9zg2qm9DoghFc5pewHizMU5BisnXoZr",
  "key5": "2oeocfSvgphzVXKz44u5CnEy4gxtCQMmyWHXrinB4TTbNRc7j8EZbzAz1riAf5qwcd4YdEtzu5ehEN4vEbpSUv7b",
  "key6": "5NyicPQWpGkUoS5ojm7DurgxGaXW95XFEt6EUQSQ2VEDuU9WNHVpCMr3WA2mLPJG3b8GwFAPFdfuALoBed65BoRu",
  "key7": "QbZ5G378KGDbYugyTqzfdMDbjwqgMVMAQbPm3kreNo1evB5Ud6kj7GFW5mCxH5tw6FMG7Xzme3iRAtbYMqgojFZ",
  "key8": "5Aakzm7aAdqkYgfrpf15NiQVU9dgSwdT8rFWTC4oeJKW5QZuRTnVPFoKoEpjsLmn9mk8P5bfSzmebzaF8AVjoo45",
  "key9": "2T7W6z12Dej2aDhmxGN3EErZL6PUUK5PvGsen255sWd6gfuqZcv25KG7rD5U9Y6bYwkgmP9esgfP1mK1mpQ1vZEU",
  "key10": "3yegLNvpqnnEsPWakwfQ2ZMYvBzLWAPQiC5ipXkYzSfFb1QtS91x5MGc2fNZuhreWJicEL7xHYgMBrivaoKkjsYh",
  "key11": "beHLWtZ1FCQYXggp8nr5Kg7tFLXYf1VjJM8nfUtgaUhdyLAyQaPRvGQKYmDza6wpcwiBERones2vfTzYmEvgoKx",
  "key12": "TJntG1dWiSmhkMnbTmPfLwpyVcaBLf2EMQ75acA9UgWTzdhSSAcLpNMmoCecNCfy6BB7b7zoNx6zjKPHt2tq7jW",
  "key13": "4ysVurUk5MQ6HYURrWArf7yKWxo6ic25BAnHFae27jEthjGHSeWS6L6CJXEw1pzrLEepFyW7JEM1SDgXpBwTVPtH",
  "key14": "27gc1mjVDDVyDrFer8PJNGCwF9ixfy8SyMb9WXuuAuQ993J1wYrjQKmj2wCrfA5EV5Po9zY3KpzSpKskd6AiCnfe",
  "key15": "4zcffBZFpBccuisnbDh4TKHeTy4xfyxNKkDWGjzXGdnBP5cfLcsSa8wUkMimeokoHQMhLwUN5W6e1b8dzG68atY9",
  "key16": "3xHebAoH5nxNQDRE8UdgDdd3LgVTMebqQ3aMiKGGn9mkGL2p9Yt7h1sCgYzcYWtjdfGKyR482RbYj4Kru37bLH1a",
  "key17": "Q9NM5KpUxL3hFBYj5c79Nk3VJZ22sq3zTg8P8ofSYgq5ZLx3AoyxLCHJ4iPVrAmwyP2RNSVpePEkwzGdM3cidKK",
  "key18": "toRuJDdsSzRyGtHGVf1xUebJf48gMNUj52ppGkQ1n6o6uGavh5VVh1ePiVLx7sE7CvagnBqPqjx8b13jUG4kYwE",
  "key19": "tJVVZPoUVqfHKYFNeaVhbnFPnA42XpnJaSJnurTRAeJbB8T72vz97Fd7enaBh51BAcuehest77DWwqSKMRSYgef",
  "key20": "3NGFAGQxEkiDbg4y8HGppHhbNwmYuEkPFcxA7pPDQXsM6Ca7RuUcjb21JGd7QUqL2AcT6hhFcXzBQYVRWTHe9n9q",
  "key21": "2Kpm4zAB8VaD2JPQaofwvPaEgzNxdPrC4eoVCmUP2FougERpLPA7pNUZYEem86voRJw9oXZYwD6Ufxhj8T33KoXX",
  "key22": "7kjzL2fk3Li8aonxb7j1wToCvcrzrkzVXDi7jskJo4YhMVbH2YVVwG65Wo1cFyvPJmbBwM8HgFYXyKPkU1jujyG",
  "key23": "3xio7pvTweDU8EZxZZMBC5iNe5K5eMFZSRxnp178pX8jyaET4LdWicVM83rry5oNtZYA82JQCUDHK17hRHU66Rj4",
  "key24": "5DHAuPHyh3WYUqghN26N8AMsZX1QpAvHYcg99Riq4sNwm4uNyev6VJNxBPhN5Si6A1h1Yz2DwNpWdxP9wLcfxVyf",
  "key25": "4cFciFURZ6GDevk9UgwxUNbF4zmkuYoyukdKpwtxZJTv43JrgGpvcpSicgTwWBBuXLEyxJQa4nq4oRgQUtpjawd2",
  "key26": "3TMdS7WcYPpdEmHRCJjWZev1zF52aj53PVi7wFDgDV6RKxoGzpXcSh8kR1e2ewTzQ8ZAipJ8yRN34wWvUjDiE7MJ",
  "key27": "5w3829Lg43qn6scyWvTEnpECQvfcxpf2gDC5LtmcL3CxwRrfjp7Bjpuxq4tkQ4u5xy3HDFYrDWzsoAvRrQ8fhHu4",
  "key28": "5SjPJaDjUPR9JUjPyPBsoJzCALQZiVJj8uJ4LEJemZh5J3xRgAaiJo3knTkKkw2iHKu2ssjJJUK52MTv8jvQJHZ6",
  "key29": "BsmSKAi3u19m7qcsN5mEX9hfBAHrSjZV1yHf9ApTpVFBi1Q5dseZBEnKHJzFBuLHF3n6jDxsAB3yqcCk4Z2pnhx",
  "key30": "4Yevb3XSHhTmG82X74YEJAa3Jr8vqSTAcGo1ZPaV4V7Yc5aGb6a7FzSwyP1wegeSuenceMjEAGPmkKdUSirwTKG9",
  "key31": "5HFqZwDnc4boiZ5eLVS7oZhZ8BTY9ks5eNHzLP9mLh57Gw9XSgwoXLpPt4Pw38ezVPNakCn4zyZzDXQwZNQZNHbU",
  "key32": "azD5TbbC6oAtyu8CZwFdC7mgCZhH2oY4mzVAZmQMJV7ZfftMSFFtTveTRs25Zupb7tzrd6oPXpBX7S13VoqMJWK",
  "key33": "4gan1EzaaZFaJ2gXhKGY6UK91zHvF2d15JduRp9k1dqAhN56BD3mLRKVWPx3uv9uQLY799NBVdesqdSvVSzsiG8H",
  "key34": "RAtRyhxfEvqioWBWtjXMrA4td9jKMNxSaYwD4xU8GcEycgYGh6Avdvb4QvasMs7P3mC6NfYWG4f2nwcCtzvpY31",
  "key35": "3Q4Auht2Q5k7wDPzHQQ2sUzscvSnLRo9gGtQiq5cEBsoDU2p4eyHUHrVw3N6e9mtU36jKB2d5kL9AUnGTvm5cUjc",
  "key36": "4yrY95EgQPQSQvjHVBBzhLbNTZB6rJEGaJc4foKrewJvqwofs9SpYDZaFiY2a6w71y4KzYWFLgR9DRJMRj6EZDa2",
  "key37": "4LGiLYbPj23ivCqmtrw8gzEmnYdKQ9MJYL5Mb3ELL2dcrVomSHERC9vqD6NFR24XrcuHwcvnoPy6hL3ujrgePQ4B",
  "key38": "2DaQrDoxBF1sSbAbTEQQT7bR9QDWUhp63GjjSLr883gQhCKEKuMxBnH8B1sdniQaxJ46ws2f3heQM4kzYwzTLwR3",
  "key39": "5dAa3CawWhjTCMU5aKyUTNRGkEZ8TvgEtPxjquJRXNcxYRhXKrVc1dP7rZTyPXjRgn2KicXQAbRgoea2URNygDwD",
  "key40": "2cmeVqqKgD3f7tFjoYwPJ19sZtZjBGZsau1vpWGszajAWpKfoqRrkeEJ7PDJWUftJNNMKSHJpKMuhxopW5N51p54",
  "key41": "21nacpn3hR4Awb2nUF9qzoydNXan43iD7F6xZp9RyK3ewzDBJi9MdZqNHdc1eHWUZrD1kfZDgRqfTXAYregxUvrH",
  "key42": "2ggW5AU5omgPYGUXM97Fiwu1Y4u8hHy4EMmaZyMSx5ULfGEDoV9cF6h5C8ktcnZ7J42zFE4ZENgzSsA25kJvF2wA",
  "key43": "Sj3Lfm3bKVYENgfU69oCbVqX2X41iDtqeWGbBEmxcxNwJcU5FkWWSuMv4TkGHm3bDFvE8A5fF7ZxWGZiCL22zqs",
  "key44": "5cqaRn1dPFVXvEmo71zi7Q4E7J3oJCAyXH92bt881Zid7sFMnqugNzt8Aw7puoj8CYWLp8iDW27qgAdj1tNsRE5h",
  "key45": "5tiWz1ifmvwXjozVqzFgeCqbtiR1H2SBCUrZDcXVrwJ6SpVvCDsHYDPsKv6ANfyMtuWHjmxkSmDpGogPJmiPuQ2o",
  "key46": "2zjdQcBxy5p8q8xD1AH1pPVH1EV9Voa7JaBsJaXu1JTJeHXEK8i7XMER4yiWJfpsYaMfBaWFmqhLPfHzLPYeHpqw",
  "key47": "4VRT7rZ6n9CryJiGgHcJq4a7jHKc1N6h3dnr8h1TKgtHRvSLsQwaNgcwBW7e91921Srej32uN9T1Y3rcgFFX5EYQ",
  "key48": "Wev5KHwQZFTPnpfarPA3gXwxv7TYfQz8tfSvET4xAmNgY8bycvsEatrckpDMM5XNfaUphEs11Pp99hBBRBKbXWG"
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

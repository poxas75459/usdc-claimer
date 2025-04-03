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
    "5R84fWz85ntp4BqCKV21E3zTFNeiCzgyKfx4LguksSwk8NbsghX3GMqhnPhLo5TTgULAPCagw7G5qjmdwLCbGHXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDRHzAsBZLdaoJSeJ3wvJBJtLGFXZMZxoY2q4ctbbYg7op5KAHKBG4TyD4JPJfbqCyXVVS8eHUUCn97iS5AaAxe",
  "key1": "23BSqj5ELqkRYF8DgT4om2F3SbfafzazpzkVLMWVZmDQbKQyJ4rwks2xe4uGFrpwakdBPiAnqJHjoMQ53TKicRap",
  "key2": "4wVEGEwJtDHp7g1aDeRLtuD4qeqApucgynXuATiv4KgprZ9yF7B9bqrqafMnQgFMKm9XqaqY3G9yeUsSidk3qF2a",
  "key3": "wfCtrAcmqrJpTVbKqBWR1cKH2hcoYMLYVCdnmtp6MSL1jQJsG1x2wc6caGAYjXfyEGt8VJFfjdoYR3xeYxonKo3",
  "key4": "3zzvrnmV6qt8MeSy5Rn1dqJVH9JCGAQXVWFEAbuDJWyV29DDvJtx5rnPiX7dwMJpcB9FfjtzV1ApJfMPH6Q7e2xw",
  "key5": "5g6pmzYfpi8X6fDE8uHhDMSE1oLS5m1x9a8GB15ab5VW2NGwkQSqPtjD1n9GTywuJrfCqFH9NzLEgJcoGLGDtweq",
  "key6": "wuYpYsMw4yv2KCBMedq1ZHgYW4Gn6JJe45maua3LJgj3ERczd3vpyUd5J8tppDXughzEjC2c6C2Uqgoq7AwQVmg",
  "key7": "5rm4fHXhpE2oP4Bwz9a8FKSnAbpzmstYSGdVBKvWGjwqJcyQQQ1c83QVmZin7vWyAr4d7aj4dAmPGqoTYMnso4Tn",
  "key8": "PpcE6jXCkDtBVquo8dJPcfcLgx1qgtPgJYYEZ1TCkc5RQeQQL9yHSY8FiLF2i8e74YuojL1XK9SZBfZdZVW7u8R",
  "key9": "59oXpnXR3qFbSE6PRcbApKsizuJFuAdLtcjwNBD9H9x3hqbJgXYeCEYJ1f2PdXLFsPo1RgEkz7EPYH1bXGq164SK",
  "key10": "53xJt27HnK9MTq96fPibFhNjbpU51rXvRKAAsaUS3Fgso7Y1V8XUEUy8WS1fCpxnsZb3jZnTjDCsPRmmugQcExUd",
  "key11": "2dWo1Wxx1FgFt86TEvsXFT98p6ARkZod7vUbBweTHGZdBTkUxECLiRsiQUzwSu8THmbspPVJLvnE4xy1Zmviv2cd",
  "key12": "KeX6jkNLAEM5jA8MXLd4NrquZE2KAJr9DBWFscrCgcb53mNv7BSrwYoPdk3Cnd1y3KhCVG95pfXNuqZd3vjHxKF",
  "key13": "5zLXzCezYHukdaTirBusMYYbJnqLus3eL1H1vcCxpSJD8NApq1t4tx7jRwVTWDgji8d6W275ZUVD7ggQiYHfV8Tv",
  "key14": "5r333f4hRw1LUqs6yXzpmz4JdV49VHqjw6RPTQYMvXY2gzFosTyp815L8UEzqGbWtLzgHkwrFnwYMSgzGJv3NrkE",
  "key15": "2pjtCe3ujer3DBiPjMP6K6U2mHU1XMZnbTYcv7pwXHaLF3NFmbhryBdLAKwCcbVYthefjtX1NNoqj75o5bx1uL75",
  "key16": "2Jhr3v6SzPvhEvcpX7nqi9fnGCq5A9HDMLjgfYMn5ZpazivSnhWz1La4hqbt6xQhKWRuMTUKwSRySneoT3anorM2",
  "key17": "4CdeRuCHUfM4sMEpqZevfnvNnPGtvsr9xQtBnkGTudKN1tZGTVuwdegMfLuwYPiQT9jqg4dkkNmg7APh5ZLBrdTH",
  "key18": "xouC2FYnma6ffykUxdgXrr5QEnfUE98qAg8E886pEZ1yuG6jT3V5aR5582niyyrfMxtjfdQ9N2MHUGbbhikto5w",
  "key19": "56d7KGGKxyAfGXawvsAtuEuLZP6NVC1cmzu3EEYnD12Z9Tks5FrfbiecbEHqVWnqTuN7JsAcKovvdH3k6uGpp3xs",
  "key20": "2Vib4kTEubXRsZoDrSkdRvREWb64VgZdfzdRZRwDbKAvfmJHn1rCS2ixKH3SnWt9c6QDZRnAmmmfknKg7VTQhTVP",
  "key21": "2kmbMHx8Xv3qM6kC4HFro5Q6TcqdWeZAM8GFjPbvjQQi2YytUAnihkJmE2bJHRNffv8UQbKZeSEhr3RJ3rYMj4Bk",
  "key22": "4qiCS2s8FDGWUigvhjBSrWh59Tedo1W8DjEmSugK9yaGkwiyJShZtnXMs1r6J3CCSMbJQvfaQVwLCNKsN1GJY8ak",
  "key23": "N148ku2mN9QTScwcyjBDGtUQGewTGYA35nh568HhtcXTTDPwrmearpPBYn2NwSDEL48D4Ajui2ibM1Epwm5VYze",
  "key24": "2Dh6YpGbvd5xidymBxjkDngKYzKbbsYqi1vsM8p33KtLZTKE8XVtuSXvpqHWpYd7jDAgwDZNWpwU7GdCDwCh6Qit",
  "key25": "49syWGvFoKu8VrRfn9xZbtSRgHFZaUd4bfKv6ZqoZ2utn5Wz8fv2NspkAyNZJbuqQMsCGNkPoAaZWVLT24EZvQ6s",
  "key26": "4zKkMX5DvEUczd3UZsXA9cd1ymxqpvzooqHiYBaADsFjvUEpsLBqzrwFMTHaKJUDkjWkTRf9s3zHTqzQnspCdfzE",
  "key27": "8EK6PCZeSpX54cV1bjz9o38vJBJaYFidJjQyqTWEBJ3X7JQN4pvLCZ8414GU5V1X9pDsFiTBZdY6pAZBANw8Gic",
  "key28": "3cPVTrd8F1gisdyQWVd6ZUsGaTfLyG75pFFZjFrHmvzRF5TthgPun4L45Gxd6XQcb6VMeNwETjeevLtD9KB9CY1a",
  "key29": "3iuRmAQnmKK9164hgCB18fCooyk5aUPzaXZDqW2HZM8DDrMSjVauPYsVA27APvJnZteQNdMYaQmHnHStUcd7tPcR",
  "key30": "5TKRBrmCkSdBhW9LRTuF3wRbhXDHvtnnNpURYgjNhNfUr38FQfY89ZaTq4KmMLUhiUKW5UvtA5sA2wjLyRpi7hH",
  "key31": "bMkxrRDUYvf5Wfqmv3HzHH3yTuhh5UcRPQT6YDUddvU3QAZQE3jdfwsAVE4y2V81tvCkU8m5EuHsmxzMcA2rEMz",
  "key32": "5DMKebyPp3rxVSpVq1nNgcgYnoVKTQdFQdz3EvKNsPSU54FVeKrMBqVLXCitirBFuegqtjgz2uSsqKXBE9UdWiMy",
  "key33": "37f8FXabbnjk1eNm5ZBUHFbzKoAtGXpmFu6gmkhA9uSPxGmuNS2hmQfw1bMY8V6PmWFCANw6pVTsRb3bYZmcgsHs",
  "key34": "2XLX7b8yfa9iGTQL6nbvWxtWWxJpVFjvnwXjD9cPwK8KphUNFmY26Xe1tAkFFnbQx741vnrRZAywCz7QpGMoKUQK",
  "key35": "55wXfyH1BHE2CyoVMgsYqCh5ypvyTz86f8tg8V8Je9DhXkGFVHSbWXAJk8SRx4MAosmFJzRvvQQGjXdx8kbhcVdV",
  "key36": "5Do6yvH76UjF4uGWh8sXzhmnZSAqZNDh6HuagSPzVka2rJDBMgFqthciZcCfpikxd2G31tYMxNx4BHoW2iuK7dc2",
  "key37": "3WNJW7VP2wJaworuHQCZSwVRUni8UeGxKsjN7rV9CyR687FZL4tRHV2MSzQMcmBH3nwRcspLUkFeKffP8zYPYXxv",
  "key38": "5GFzEtmVzi3noQUWG5sBnwwh3PHjDPycYZRQcu8XNS81PXg5zU4VsfmbBHscoCWwwq5QV3R49Fui6R2eM8aiAzYH",
  "key39": "2mWjsrAuDUPfAVEbZitJwhm2W4wdiuA8FCABeDcXhiNGayweRBrPWmmNyTu93HhdyL8xPfYAHyjBrKVufPEmf8t5",
  "key40": "z5mavSxF4ESGr6NVTV2iNaSUHUXMXMgMziFzopYUeb12L7foMBB3TjRUKXNM88TKogKH9Y8E9KmS6MyPt12KYiE",
  "key41": "2ZJbDniy8qsyCJyN4Ft53eQWkzWN5sM9WCzC3mNU1dwzGWztDT1SK5YZ8AWVyWqqW3ZLSMeZcqEAygBor27U7ACZ",
  "key42": "4ZPEjFpmDafS72bgdid5DEQoFvfX9cWLyDtwQPDDSR9DM6gUSMqGZqbf9h2gUKVXcmFohXLYyjs6SrRgFfRxsHx9",
  "key43": "3fcGWg17r3Kf7yw9Su2yLocUb8KcXdU88wypjgvTBQ75g7dfrLNujFu476t2uRe4gbwv43iRzC2qPvAmPkBAVDr5",
  "key44": "3f8vvpYKsivYaPSVb2RPHVGrxn1DQjHgjvycgWU6i2BqdRfY6gxnuWW8BgNSRMoz3XPPwHXTGaZZ8QbUp9rDdhhR"
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

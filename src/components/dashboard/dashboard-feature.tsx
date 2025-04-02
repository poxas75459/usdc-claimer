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
    "2c7kAbDjb86tPrGdfWGNBARpEX8TBkXR51hppqN9yrqkDJGcZEW2BCsbawymGhm1X5h7BU1gWkQFymx9yjQpPNod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z7T58jr2nn82sQoyVvasd41u6qi5u6ogc1GU2hiAcsCbhRHUnnnwEekWrJSj3cFZPnt48sW3NGdFLhrgLfnVMpC",
  "key1": "2Po6NU1XDhtoi29n7nC5mRKnk7wRbVxLb5E3GbnnNUZpSYqCJKCRWoJt3uVJZhyCJwrUXh5KSzFCMwXppmNCgdZA",
  "key2": "4tRLDXerydoo6keMj6Hbn9UbbkxyhteAyrfKJVy14DMgXvF2spntre8d4X5Qtd3bujSBqidVQH5rz2dF84eyQoA3",
  "key3": "SWLR4ufK9VPemhJ8LadSrgcQTkZjw8TxFVcwXiwtWmXiF52JqJ6fHnsJzta9CeEVbm9okQUds1VATTQ2P6ri9KV",
  "key4": "1fmGX7PzEEZg8eDsCbSSArXMjXahdJMqJWtXkYF6vEG3ZGjXJqNQR14NmfYyqRjwc8EDKstwAPFRa2DU27scXdy",
  "key5": "52qV1KyfQWyiFaJQJZqwREz2cjb1dmnXatJBt9gAWxn62qd1Ucokr4M4ZCiSN6fnaEoRZqpQdgydfAxvXnszn58R",
  "key6": "HHcz4fdatVaRjwwnaSAsrcPUtmVU8atCN4gewfCM5jdPv18kqFJWCtWC6dcfSS4hkWbCjxYWq9QwPQnR3Ltvbkw",
  "key7": "4SUXejAkqmcxyLoFAYJjzM4BfwSw5UaSHKC5NsoPHVWmg1J5uxX6Zq5oBq2HUVqSq29G11BDr6mfhUhc9i2zepw3",
  "key8": "xZUV8MnRxWdxoVqZtTFkaY5RoLCaFNuXrMrPKvLhnriFXXqvxAqyByGhxTidLTYL2LifUdWovDQzPkxzoVPZab1",
  "key9": "t1vagch6tm6uQFrymqgmhRcUz3EJm9WjTtCUdstYXFtsVNJrxPf1hGS1b5ZhoowovrPdYhACLBL6YLULn68rem6",
  "key10": "4mY3vN5eQsRkL1GAfqXX2xwZ1nJGEFJceTpQq6nGRU5dbfKgHJE5L2sy67Qd2HGEtXTaK1mNxW6WuTc9QuJiW5ob",
  "key11": "4j7vqXshMoYJYXsz7P9hiqF4HkRWszWHjP3TbXcdjhvskzvEADvS54vZ71LLrosGitQnL2NKD9oQTWU9nMp9bKaS",
  "key12": "TT1zAJm2v5SvvSjtYskZE6mmibeUNLNUxZrDL3SDw3utMkQhiJpffJEfsQyzAUbuFY3goRXT7Ho6LTF6VthYwhd",
  "key13": "63xqy94f4e5cFQ8HnJqVwbnQwcFf99Y5JNUJAGdordPsiAkTTrQ6hdqNiyWdUVCbRLHpSkMAgYC3SxPwEZLnSJUk",
  "key14": "2ks1ni3fMQLFWMCSx4fdXzMXc4BoyPLHnJYHyrvvagLduSvj47YdhiD9hv57NmRiAhEP3wXyuBcaMwnXpnBZi3ZP",
  "key15": "2GgBZCHh5AzmKAYfWraxHZww1snwbxrZphCKretDJyK56P69E37j7NAK48kC72zmzyC5x521GBaBfzQPgG34DfTn",
  "key16": "3ufjXzov4Ya32Pzw2RAM83Zne1pe1PQ78juncA11smxo1S3f5JN2ozyqEgfWepm6Un2hxQs6hxfQZaUZthkYEzWF",
  "key17": "VS3LTQp9Mru53j3cfYcQYLy1yGqsTnMpH5UXEdx6dGVpiF8MeS47YwS6nhHmBHfzN4pRi7Z4aaVL6WvHabYP5VW",
  "key18": "5P18ErdFo4jHHetLieWV9GewRrfdqGoGJLkoC1bVSsuYb9Tdr63au19UrXi1CoRLLM1rNzhuoQGRBXV5WoaXFu16",
  "key19": "5kKA26gaV2P2eViso3r5hc4qoLaLw8W4zn4QBywRX86JEFSHJKgyaPfWGX9D1ESbGPvC8ZHUSVsEPbpyi6YKPGUZ",
  "key20": "4avb91gpd62X41Kj56kGo7Msjxbzje1Xv4ezH3Law1ZYcnvu5imdVN79QxLs6Ji9Cfp6DH4Sx5vTQyQNYB21kcK9",
  "key21": "QDtfz7LTZ7vWwogjcnQpvpaF76HtcbrQbeCC7q2ujL9yqTFpBfX4Sxi9JHzN1f7Lc8HcN6uBuYCVP9uVV3tgRuH",
  "key22": "4FXsZNKPj4hGzFAQCWkW9kNHQQxiZ1XXNPDu25LZnbGQY6d7YBdsy1t1V5VZxG1HHmGQ76NZwHn6iZsSJpxX3Pnb",
  "key23": "4ei4RefuQFTztf7gkaYrGKm3xw7y9K2da5twkQ3Wy5e9Y73fg7J9UNPqCDuFaoo1D4tudAFsLYD9yetx8L7h4L5u",
  "key24": "2oQFenVrEifajibgd5iUxUeB4DiKvV4YAST9tpv76A2NrWVhUtBYJ31KCtNfQCBV8RTCB2VvYprLzHDVqxv7utiK",
  "key25": "3fDt41dVmRJSntDRzyd38Q4zqdxArqdzrJSi7Uxrkq1DKHiDNoigk4PNyB9SZBTheKh9riqFhXYJ6xmbUoQiRDT2",
  "key26": "4pMYk45WTSSxkxsWZUN3t8LFeqyS8CBvxCXeM3gedphwCWQ6JHfSVeB1ktqaDz6hxty6UkyJnLV8dZBoZgFUyFZ9",
  "key27": "5KczDBDCC3xXrdN3qt5gSoXyMYkEY3YuAqM4Q8amcs4KLep8ZqvN3ThVmk8j3bdXLHWjZS7rE8mLv98UYmF7yrzJ",
  "key28": "2WDGt8cWNRaw1FTH9so3LBkzYF1H9JrFHwGsM8EBfgUqdnfHzdYitWiC2dbFXs1HwHLTDv3v8y2YVcHCjWdVZTss",
  "key29": "3wrGTqJGL2GaPz4eZqKNHMZ8MYNMxfiV3t8qtUuTp3GmCESw7Z341z7tGZJ9FR3pUZmaNdAg83FWatR1fZUCHgJh",
  "key30": "3NfFv94kVsMccJoJoztA8ZjFksf6JeBpWfLck57RQ7PGeRiSCG1RvKZYU1TXrVSyJrNFVY4KdbShw7ZEdv45wezf",
  "key31": "2JwpSvm1U7wRAGQPqYGC289h4kL7RXczCh2WC7Pt7M1drSNzxLpPL3eJiw8BUNX6SyWxPaAHQvWsp6UpkivyxJqr",
  "key32": "xReupjYQtY6uAqG2QBEYrxyK4jbV4sZAibmucP8iwGn36KnNtD61A8FdBYKLpcbMXPJYD3QwsDjMWjbGDRqJ1Xg",
  "key33": "53mfPTSJ2pWZGRuwWyf8Z9KJ4fTouBDE4DvXoJvKwtNoHt6U3Nr2w2kWyzCmHt9cBz9EAz2PEgVD5pAMerKeBpTV",
  "key34": "5v1Ro2eTZAXrPS3FZ2WKQ9pnwrn2bboafdkfc6szyphPLaBxbvnTjExvzDXhWQ7AHnLR9a6pXs7zDafJNGAaTKRt",
  "key35": "32yfL6onwuZYZad9rg7M6QE8QqeF3yQr4bdjxBfMYEzBQmeDQzwYPHsLtRNWz5buT6xtJZb47mdZgXPbK4iRmJMo",
  "key36": "5gF93Rmi3oCnmsLnT9LeaAkHZ4rarHNCQzo1NEWFEBdx98oQyh35oTjcU6shFW2NXJTC9eEkXSHKphi1F5uGgkGf",
  "key37": "2DhedXh6y5MogkrBLNq88RXGTLsRjfyCgjBZ7N194aUUHQSXepNm2RjojwqpogTGqjq9Z1PHr7d256WxqHEHMzGX",
  "key38": "3MKe8NEpzXJHVKHQgxVw5Mk323av9N5Szc1RMVf2aovrhmThkEfg2x5KjRT9CySFBsnGMXDNZhafJSL2g6rRNpR1",
  "key39": "255xzCW12mrQNoBNAncB2ZUiptuJxeP41btDfDLTPmrTfxMWmeEi2UM43f3y8pSRSWA9WSKYEcD6NGRdewwArH7w",
  "key40": "5i42xvPM9NTTL3CYr9X3C1mozoNRURtiezskBwyQgC473MBF8WSrGykYLpd4GpjyF7dMaZz3Eh9oBFkAyTJQaE1L",
  "key41": "3LEukWcRg9rETvrkCoqeb4AbUq16NMSzDjiuC2HrdYseUxG84TKe3xrZFJM5n8d39LWHoHash13mRhpBLWuWLPQ5",
  "key42": "51FFZi76fB7a4MAcqVnwQ8m9AboG2fmCnqbgBE4vxdxp34B45HPodYR5dyTnvDXCisMoskFRfJmZmGAJ3J2X4dWm",
  "key43": "2Qdx39hCBqwgm4MPaoFyxAaFQdadK3Gg7kuRA5eyZ6M2P3tedLqok5gi4wDc7dzo6ewUdWTiDo5E2RhbtTtwL4Qw",
  "key44": "Caz4ZFMoa4rQNZPAEABjFb1cohT8b9wSgxD3ziLtu5qNtPNe4RyFBaYm3X1UGD7doxh7jus95eBxYkkU963XmC9",
  "key45": "5hQv2itRr6tkFYgKCGw4XdLK8MBiNd2hFbAZromNAtdbwE6z9fahRdRzNAXJJDxiMtawJT9TgAC5VaudVPPV7fyJ"
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

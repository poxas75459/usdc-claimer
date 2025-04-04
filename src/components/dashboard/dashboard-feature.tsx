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
    "2eumtqwPZnCiKEKMHFc9hfGce1rgnxhzc9BZXCkpXM4PNv394GnjNEiWwhHza2SFobP1XpoBFoV3zNv7BNcLwYd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDo2aLSe914Nm2CXrckeyHDqEAJPWSPcWubsQEjb17d6ro7dYJ7FhSxRY31rKBCW1854VJdYgEqk62pJ7BPrGiW",
  "key1": "2ZNb4VcT7dQhECxaw2oJ5PRqKPgckgK2h2eqwZDP9C5SJKUQUASgPypSRACi8XhJgc94pJYcsVStFaD4nMhozVW7",
  "key2": "BCLtoNzyw7s3pRJXTxeZ8i21iktfbRuXynP3k7bQZUVNt1MCoEXZKQU51bcDA7JvNiGKanozvtgvt44XRHeyFBX",
  "key3": "4zFoz6gzBeBTa9Tfd1za8EcxGopUHsdhSBrJX9JZKMzzZargTUdosjHihRSDK44YXNc2LuwndxFag6RVkyDxzBJD",
  "key4": "3vLU29znCdn9uEZ5ykhuUdzvzJeAjosgUVext9h7BmZs8iRG5dW92RUAF891h6DUn22PcpAAPNRDd8gQX51zrMJJ",
  "key5": "FenHtjv3ZDGGiDPR6BgDUszmDoRdfiRrvg1dRSmMSBBRpadG1Yu4LUF4QC6aLfanLDM8P9hjgvFM4MzT4J3yrhX",
  "key6": "rNSEoZv1jXewEobCLsdDhqEji1erWh3QwgHDvbX8L2Tpqbwb3cfkXC62rkTytTR4JpyanSCAVG2RWq8zk4B3h1F",
  "key7": "2mT7QmK1KFrUDmG6Spxfin6oQT6BkrxDHHmf4eUtad3wv1m9euf1DifmqvVJorwujzQZrfWe8nd6XhHCMSNeFHQo",
  "key8": "PqKL3SdBcihkApFnreJ9pzLYFyL1qJjSrgcTDA4FtYRQPCYb7zRidU43E3tkN4nrf9xjAqprpxsCUUpjbt3Kohc",
  "key9": "5t1rL1mpvSL8TbKMqNq8zBvA4wcccEnNUEBhbubnvjUc5bWF5QSQBZisLjSNoaHF2JpqBMen6DCCFwpymFf6AUTf",
  "key10": "4Bidi8fYEo1jBUPSQVcrZ1w8ygQkqKEgosSTAftmEgwbivGvM6N9e9crsheka2vak9bN4SccxenB3s1dT7GxuPxB",
  "key11": "63TUTnp5tQ4AEHQGbWJ1ACdKpQQ7vv5ref2UGYWHZeZNCiKPd7CFDREg1zNYvEARdyyeUyvcqqE1dh6xrkK7wnKN",
  "key12": "5cegdm2j1c8hU4NgR5mFNifa7mTywSmNvhm8xJeZEgso8ZmZtzEXa3KNM434tXEnbYQ7sCg8w5akjzhJdYJQVN7H",
  "key13": "DsS3qU2k6DBRTHobyMUwA91fVAavkCVfB42UMfwjxVcnkrjqdrR2433u9VqsKXgCY3D2LSAe3LATguUrgbXGSZw",
  "key14": "2rdw55R2xJ4Gg2wkt5iTPg3xCFutqihqun3YzRUYssKjvVR98CRderosMPKEHJCQd73GPTzTg64M3U4A4N5SWwho",
  "key15": "2AMJsn8T6wpxMRNCRtqPTRiUUx8QaSYzQzCyLX5rwWAA5MEsJzgpE1xYj4sr1RkU6a3gjscfjkJJKKpzGnkqgNGF",
  "key16": "5MWEjqKpgxgm2sWux1nmWtNi84Fuo6kYSQVoojHyWFEkgmGkfXn21uJ7EkdpDbhp83NjwhK2C8wvBFvRnz9Akb8i",
  "key17": "NFkqc1N87ndbZrxMPxnfSskPHSUHSYdLjeRYdMEDX1pW6wYUnqd4XYV5wbtQtqxrgQ5hhoDFNWo7gS1nYTgSbin",
  "key18": "32bq5vXdTfxUpn5oC2iVDsv6ZsPskkx9fDyf76h4eTp9ySkcS5JjiZ5rveRGF2RYTJyKs3xa8L94BkPNMeShDpjL",
  "key19": "4vwbk5z1K3d3HfgVPY3dWB8ruFhTeB7MUgZu7VFRN5UsFjDU8Q9eCQWzJSpRb8Kni9EfLc8Tur69QB2T3gq4UQBE",
  "key20": "5RYitKQSma4EYyroeqpHtfSVsdgUesNLqHdragwFNLkuUMWmPGE9qrfP5x5kZW52q2TBQyUoueNJE3K2RLisrE3y",
  "key21": "2Pf3fJAjyJ1hDHpTjsygzCcqvMtCzadMJ7S6AEZz3UxY9TWmJbey3CR8xTkD2SNYzGfRhbEaM8cL4qnugU5nqCCd",
  "key22": "2sTrChSDFrJEuhKxjjj7WMKm8qdtM8S3pvk8BkWxrHD7rj6dTD9Jnm9J1AsLLPNVenPPGosFhTqTAbe4rmUXk8gr",
  "key23": "4SV3WCDenRj4VCY7YRta2X2XyChVLTgqbZAoxhdjoP3c7CqWbpVpVeC1Wgq96RowWRE4EAN8iW3CXVhx85PvB7oR",
  "key24": "5xK4HD11yLk8KaxaayRorcLmZPme4mrn8DzDLdAevgeizoh7ZrXKaD54SnK3bw3trLYd4qRuzfZNbTHEia78unrv",
  "key25": "3mRu9qivDavhGevwFq3jonQ8hhhVDxVFYqAEFpw3MnJkWX6xakJQFntdgDraA11Z1fYJyMpE4hAUVVX8jvKnzbBH",
  "key26": "5UgufbEwzbRCZpryHBQBmZoR2TJdL9VwG8HxTAHNMgDHnP5sAVcSsGQKiFVqD7nZydYNwaKSW4aj1YEJEZSJdhXy",
  "key27": "5t9jicQNvk7XBXp2kb3HG54UPdmhZxtxR7ze8zyF5tqx8kafKFMTPWDFtxUDWNEUxwBFAmgJ1YyscQRUwWCeSpQy",
  "key28": "3UNsgU2CAWz47Lowi3WpXchnuqVvVmvMRAGnXWUNKm6DsHdcD41m29zMcHnG2Rbx8KP6qfPfP5WeYZMkGV9d5uqr",
  "key29": "okLmBC3J4tPMoXdCRHHM1dXmUkDsfvReRhHTz6LM6Dct7qAT5cPVQsW7NGxbngirxFCmw6LM4dFtnCWGvoykENC",
  "key30": "HRikxpisp4Cj4E9V2UczLgRUjifwQxb9bMD85XsaqQkLXCk9AR1bX847phBEuuQg912nUNL84uDBDcs3uvjGsDy",
  "key31": "23yWRdgTf56k5PoJaorwfYwk4okxT5DHYKcvR7vH1LTbdtfRfih93m2zajmoPmCPUR3Qey2xw9RwSCApsHT4EfG4",
  "key32": "5Hi7kKAaP32au9HDtRAioAFQEwmWxfX4rafxZ8KdAfWZ2fFazvZC7bJVRLxcY58R98hb5wpkFmJGgRrF3Eq3AVyu",
  "key33": "5Y2kFQ2E4THbRzT4ydvrAQERURJCH9z8hC6tLpAxfV6FhBy1zaBn4HzXWz28m1riXXucEkPMB7qUQxpZBWn9bY23",
  "key34": "LYx2oxnX3rbJTdu5F83PLD6yyJXLbErqjMCmRHLrUmbiZc6SgKQxG7WFbWQQahTzmxvWzDNj4LVxfqFcjB6AJS9",
  "key35": "4CUFcBBPrKXNJwmPChZf6vdGFhuHBm95SkCJe8RcetUafDdo9atNFsPgWFy7iFpRcdneoSeprCCCkTwrc4YuMojG",
  "key36": "2dGejZdBriNneLZ4GHpGs7ZSeRiQTio9nPiugFa8S8VSSoNvmAVJ4ZNcdDqbwhvXfBcAV6kBcXRYVuuTnjtt2q3x",
  "key37": "5tkJZXk6Bou18ULZnubBHjEBQAqufxyaMkimFSUaRt99ejDVQYaUf7zcSnwFLQ1jbLcdHUADipv4Kasw8NhWvgfW",
  "key38": "5nQaCGfXzNgDzHR1u8qoLcBQyvfD2zZ3bYDGVNjd5EGwHQqXRyg9qyESi5mHujkyEYx86bF7jCdGEmm64QrnRPXW",
  "key39": "3gLqf1kz5MzcbhNm5y85a1WQtUDgHa7auWDeVFim8NGY74o6e3TsMLnFv6U7wRYEwNELVLXTLewmGuf3536B9sVR",
  "key40": "2riJ2mGEKbR2pYjBXkhE2AuT5gxhx1oZsPxms8SFficXx3N5Aq1PMDyyEjvfSKt4SKCqBqjcajJHnJuLbYU2H6YW",
  "key41": "rkUZNBVjg2Ao9F7VGVUpDHBurUyBHyP2Vg7Jb8gvUZknxSoAN9FCxYndxy2wBuH7udRWtPPP5dXU1m97LYw466S",
  "key42": "5tMtPYZNX9E5pq3JuqL8112VQFw2oLqvTy58dj5AFYtfnoLwHQEyV142DWfd6s6NjAGegAH74NALSLqTHPER5xVt",
  "key43": "43kVqErBzb8fRa8Ps5rtriBkjoXMRS825RnRjSNnBgQJAWjsVBRu3CBJDpvFdSFFyHBBcJ2sHD5GMNtRthKNgJXi",
  "key44": "3wQNijfnAVtpXBPcbTUhTy1q5dxjhq9pvFdS8V8Tp59AKoSWBAN3eGo3i35GWpGkUETLqB3Zc2aSiL4ox2jYZrae",
  "key45": "2kUpoijW7JBsTbGk6TUt4ossZoKpvw5GVzuqMJMrbQRqDHDdrnfcAPLeNMNvkXZpgs53rYXPfNLMfAoxeKyTQw4o"
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

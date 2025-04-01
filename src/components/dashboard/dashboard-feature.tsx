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
    "45YmNSZZwxoDJkSCxPwwcWvw9osuXpHRVHxpp99ffJdz7yRWbVX95qsungEECJhAqXPXfTHou8PjH59pufD25xtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hX3SGkHWcTKMopqA6o9PjhBvCfeJ956JggV7imzHE9xfVRtrFyXnMs4tRBz1W6xLW8at6YXA7HvFchFHpyGPh4Z",
  "key1": "26XhiTGEsZeZPoPZx5HSPqvauBU52tV1maB8Lmax6skG3wwmvV6ZAEk2uJenkB35HyqyHuVBuGxCMcMuDo6Hyn42",
  "key2": "4EXLBAUF2pBJoMyeKse9Gw1u2Xi7Ap6WEFbmhmyyVoJdefqCDsoXmNnZUBq3LiLpQ7Bs3V1CtqWRPBifKShaBskV",
  "key3": "8ysHsTZLSCQ8RXDscdwcrcTUgtnfyQ4YrbKaHeDAPLiozYF4NbrdKJ6kYvBgcWtv9Jn5J1GehwjJgdJ8P2oEi3q",
  "key4": "5HgyyUwvohAxP3hsaLxkqdzgpwrjVW8xeyNfvgwHQM5mBxntUdY3RHXb4aEUreceHMaXuq1uhSva4kvb9o1daMKU",
  "key5": "4LAKHJBkvXbbTeAPikCX4jJxpGnVJKBmWkB8MeeyCDcQ5qsPHHeuFQhm4ufd8qpa8ixeSCRLk82RdrpLaSE2XysK",
  "key6": "3ZGMNMrrKsGgUvVsGzF6gcsXRyTN2Jt5rVu6TrYuE9Ge2264bqdJVABaac9Pn1HyN2TiRaWCzwSbbMZjig6F8asX",
  "key7": "aSbAf1vjWowwwrVva1pG62rU1TEunhpz6PW7BXRDJCPCxjJZFpeUSnNrNywwENXUiYdCxftG1QzQnj6uSzMvT46",
  "key8": "5WrYDidvH6i3VuBjQECuoawxwBznhJKsrewCofqmRQhAUy63e3XBNzEoGgiMwQRbtjjd7Xokn1fsTXuwC5qoMkrQ",
  "key9": "3F8DaJYcKkrxGE1ivK1pfUSqp7f4QBFSiR5bzPdFZcSLWUhp4RS6wnkwKCc1SiHv65vGVfkz2Ss5aDmWa16v1VQJ",
  "key10": "5tLTWvAbnP91WmHCaMggoEZa3YdddekXmww6whyK4NqPEGBgPmPneFrKDQFs2fHx7d4zEG3AaAhH7fcaSUzhEz8X",
  "key11": "47HNRuKGN8so4VdMMxsE7t7wi8GG2m61z3Ez7U7aAbXZKkfs85qFgRPWuFiEGKNwaA4ZozQr56t2JzpnKVoZ4KY9",
  "key12": "4FNC6rASgvsmrjDAGtexcxELJkRGMX7M8ikzsC7fbWD9TkdUtescRkTqVtvzYf1iSJeZRhq6RSU96db44wSnhP3c",
  "key13": "51PribxpTdw7oY8LsT7uT37PZmL1nRm3PZdJvYRTQM9FfpR7zAd79ys47bhonSVuKADjfeTYjRwpx9LweozoQTn2",
  "key14": "kYL1v6YGeVLdrkcVEzM2LRs8NaCAxHGSswoVNG3ZV4aLtYS8VSUcXPgnFGEfujdSv99BAcxNRtsKAW7AkowubMR",
  "key15": "jsCYEbAD15Fiwdnvi9dH9bFN2dfZYxH2ZEJsiz2RFy6UwtJHa4wDJhvx2vSBMqnvyZWdYFkjrzfgqTsExejzcHB",
  "key16": "9vXLgB5GUu1E5Cy8JVQzzUExLyYSExJLH5Udh7ScfTbu9uRpCVrCJZ5o5PSBtoUjMEGcg9Fqv5a8kYJUPEn1Hmg",
  "key17": "aJMRWsJF5VHERTxqt3UKnpX74GvAYV4mMfmyQLCp4UobDVNUDXVKSHVDeNEogd2Uyssy2HpsEmTW5v1a4jqFvkF",
  "key18": "xbBCtMcJh7KtrYruzALf7W68KzZwDymowaJEkoKGKxBrz1GmJryZXwdDf2Nepe3qu5hHbLM2TsXvVAL1Kv6u6FA",
  "key19": "2PxH11J5RtDCfsHjm9XYbzeSJ6uymr1GLMciTUUAKFxZbdcJrCzUGDqJ99seWHjxBj5ZX7g2A9Upjwsv88jzrha4",
  "key20": "2w59mYnPQriUyswSTunfTc72yY7b6vsss2ubZQa7gheBJaYnRGoWGHPHJZH4ZCLuBNZHNkBh6Dci9o6RY7yrcq53",
  "key21": "5mFZVnASPK47eCpo5SE8nTDrab9BkkNZJ2WsT8TUCpXp1LzsRcECwBxyjpBskVAHJRHRsVPbETmgGgi139KUy98t",
  "key22": "5b6UJ7cskKqexjnn4zgEjX85gdQQHWpX5KWqaMiWaToZmxWcqM3LraizteA1pLEPBX5cfcJNN2BLK6nYqdzx37Lx",
  "key23": "3WyPX7JFJnFaUv2yoKjh1Jdi9Mzva3dQPd311cEXTYzWzxyeQLLJ4Ej1VsrtUPNc3VskLSxZ7M1iXCTj246d3Xhd",
  "key24": "2pdJPug5PULn2UeB8CXZwRswPQdZdYrZVUpQbP6DkAar97WkfVA5AoiQ9tBgbMNMhKPkhohJQTtVYvP8q9yq3i5t",
  "key25": "214CmsPK8bW4Bz5xxFrGs8UhkLvwWKaZtpeKSy4pExsvBBBrMbgAoY3aaH56Q8Uhe1UZvm1C2jZGHYM18qcJ5mUX",
  "key26": "3YpRUn31Qj6GQpDLLiQLkzv3xBubsD7Lf9P8c8dkQ9UGScaGnFKnRZKktjGtd3yafqsj1unvC5WBBLzDGZPbJMQB",
  "key27": "2V7voqchFELWAumGToLU5EitxR8dZtL8WPgWfr3g7XSacQoGm6U9DgDKnBWwipL9KNqm6iwCUpESHsaMqQPVv3Vo",
  "key28": "386MSfMyFoCSa6Xp3pqSrjioPBPnkafiqNgC1kbfDoFRcoEvBPA5eeSVo5s3F3EYDSc3nWNqydbzsvreoACwZAHw",
  "key29": "Z2zpi1rQ8rBC5jAdbiWXXR9VxXBQMzemDGW2VoTMpX321N8fTFcaM6e2igsXFxe2BthZ554eMEjpx4LMdKZK6DU",
  "key30": "4HHn8xBBFzZdc7CiFz4TVL9VJspMNFkRPdJzUYWm7gfrutcz3obQyHfL7spFF3oFyykRPBQm1qtZvWnskkDY5uMe",
  "key31": "4Yd8SgwfvKKWF5zU1aXffVfvEAy1FVBMxnUFysXzUJ3p6uJPn1KkrfhbeJvFAF7kB8fb9oZo2gwdsUsRCWLFWTHf",
  "key32": "5rTjaXKfGSVuxpTcVfxm3T9TKGFHPTLpLhfXaytn1SWQqBY1dWfaE5hsnrGDsumR4JDvZg9wUR2PFb32iGADvFC",
  "key33": "5CJuU7ERFbY9p1jMcUSVY6yGs27g2t3PRjyKyWRaj55wTqDywRqVT2gyRVWGeQvRU2F9pnFAktzvD8U4T9pE8EXs",
  "key34": "ThQsFiEkjsKH4NabdqPe5pTPGH6yUjppFsbJxqLpx24RPAHiEPRsfoySsNBhMn7m2d8aiLX7UCVCP4Nw2XiuW4h",
  "key35": "2F6HEnWXq5LJw3XAe4ZhR8MtRRjuRadq1acYtb4bHKnuZqqxgw2h3xDnPBw3ZcJat6hbWgdyBhs56NnfhfekgF7v",
  "key36": "4fC1mcg6zWAahJVxHwrmjzuvPtqAbR1twtw65xtKG7mdYYpPuQ92f9WPPp4s61hNBukshdwgD3kx9tJCEJV9yq21",
  "key37": "3bB33NKqyM4mVxitUWLf5yKTpqcDPgTPwNNajP2Y8WheFppiMpYF1TZmmr2hqLzoqQvbpCsSUGbrnc8b8n5RfFdn",
  "key38": "3aoGeiTFUy5BhJR4EEFK4rrkDqmXVLrB2syEHcRd8pPTmNzVxB3Xb3tDMrLmCjzoUoDDVDxpb1qJV8Hu4RZ5L7Pm",
  "key39": "5MexBouRxBJBMBx1qojx881mRgUAgNv6ch7AziWpTJWEvBmDPVb4Y6VMZJFYMUwwmqxEhTFgmYH6vXiX5piZR62B",
  "key40": "3WX12GRmEhkevuNyj7RsVSNfaNtmGGsCd5C9qkjgnfreuAaZJiJueLhw8KyV6PRnbucHaetGTVHrR5d8nvUF8zdU",
  "key41": "64pRgHUPMN43xbpaCjHrYj8gk26pxxpKE9k3wJf9PTxpgb3BBZXAmogtHYQ27AzXKorWEi33XJ9sF8zh8KLb4sBW",
  "key42": "2mPp8Wvrpcf3zpzWXbsVB6Rc3YGXHvxWfiE8nfJ1bnnYvhbWB77EUKa3xNyiz2AUw8G4xzNa8nC7SsVHVY8kpqoC",
  "key43": "4hjVVymkr5JAUkW5txjpZfKUjaKpYcgW5u5n2fEdt4cckBbkVoGr27e5GHQo2SdUY33g1deQsDDimVoSgMfX3tEj",
  "key44": "4SdnpLTf2Ks8Fqs3GMiUMWj2JgFLYeugg8snzv6iXi7W87fvQBHvipA8t3YwbDH4gF6bgpYCHQgRvnnXjjgfie76",
  "key45": "Kags6NYRJDL9G6C8HRJkiAcmRio216x2aMs5tcRMZtTWpe3rRLWyt6fvVvaEgxN4zwcjWLg9Yg3etDRrBxAtY8F",
  "key46": "4pfoX4hT5v3bfkSPwbgRZF4ZjbwAynDB8WbMjeR9YTNuxUSzcCt3pyraCtJ7W94LJ23p5GreruX2P42hBhFuyaYg",
  "key47": "2cREeQRy8mt5VDFQzUxvep5PJbPbeEzsf7XWME2h83rhqgTbn1gThZHDMT573z3GGgeQ2KBD5s1eZss3zHpYuLJX"
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

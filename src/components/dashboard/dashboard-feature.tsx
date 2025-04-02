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
    "5zShevVjNyMEKfRMEi5cN4c3LgtA4XkwpSzXpmALCx1PoADmxqbdHENb8DzLN4fZa37avwFc8y29a2R6ck9LpagZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pr2hsfj8ZCpqhBarXHducfvx3H5i43P1N3sUKfuZzzMDJh4e7x1CWyQ6Q5HwPTxK9XDFBxTBtRFJ1fPryiqHkTi",
  "key1": "pE563jGdo8PpsN4ACkP3NjtAEXRHJJ4Ctcas6WbKhfBtMAXSkAG84D83rkfkoZgrNT7LS6xSCofF7LfYfX5gxd4",
  "key2": "BWNjDbgKAgxTtzutFS2qzSzWEBBF98tZ6yGXocSj4jrKod3tjYrF8KtEbDspqZvrupi1SGeBQo5JRfxLRriho7Y",
  "key3": "4f1AWsbmAXexztuiRH4sxsAdABY1p96FLfvScJ16mueDhambaw9xvLroHktHvMxAkPskkX12EWY9euXcZiTmAkt5",
  "key4": "3KYiMwijiYn3Pis5gGjENXuBzTsoA8xJ8MLMvZoW3DKA4WARnueN1ximJAZXXc6FU9QcW9BGvPXWCxJFXohMTAzj",
  "key5": "2yurg5tD2sd3ngX4522tc8EZcW8CHWFMxGVG12kta8X31UqWvrCNKNuKMVYarpDGHnB4kd5b7RRQnXsnMmwRomfw",
  "key6": "2w5EbEcdTGg4zjUP2sEDL6Y1SbK2yVKMp8N5X5hZUebH5TvcZcHxW9hfBzpjySt3jZJWCy2ERn81jpb3YiXNgEmB",
  "key7": "231Awx2GZzDRBPjanRRY6mD2sFUowAxRMuRUi8ZAmLxEK8Lm2B7wiMdpqgBRjRscfudnB5xm4k6vdMVEELgTUj4b",
  "key8": "66jUcfyts75axtzLPewkDhjmHz3QK8BSDbdwuN2MqLej2u484wzRVQsNZUq26cLDXDjNJ3GCZ8gbfs4SL6idQGhU",
  "key9": "4qedCU5umTJZFWwfgBXz9htfGDeCEqP5TV6WebwVkPDXvv1hYM8iKReu7YsQhgUUsPvfnEuFoaY3TyGqneR28YfC",
  "key10": "shuGUQvBXjehF8uooqDiJQwgML5hXW6z4abBEsNGn8X3YEzB2AkWpWFRaGLFpCUJrdSnCaMpi2zfatazZKPADb5",
  "key11": "58uW9bv3v1WF4RAie5JZzC9Xs62fsHnNjWFcNMmZZ8d36ti4JkKsVm1qyyyHG9nszcyzC5UqNzDTSnCQSrnVnhG",
  "key12": "2jLaVVxU5v4pNCexnBxENKeJGbHtXWFNRFBW96asCimzwQdaso31Y6HHD6tnwyFRFMHuMsyk3ceieauf5WBwzrHF",
  "key13": "5DKxGVt2zjLFAvnwueyZueF3a5GuGmF8cptswbn6kCnVqedvf2gQ9SkeaiBHo6nWokn4bxfda46nFJyuUd1tB1Yc",
  "key14": "2hSgJzhLp5VyNT8egfpkQrgUdPwdi1rPy8Bp4c7Fg13y1j6Ny5s1i9ash7afu4F2QjA5xgF2Q254LnX9yjJy6ArM",
  "key15": "49mTgtJC3wkXkTdkWtnc8rkmZutc8Ksj2NUnNCL1VQpu1YjKD2NRGKkqcwAtJonpcxDf6NXTe2deQJo5RXehX8BN",
  "key16": "whScxxqpfTvBdZfRyghc7FWEiVwyV8K5B2bvuxbseGijFhcwr6BZKV7DsnjiQJXGhb8CS92VB421sqKgZbidWaj",
  "key17": "3xPDpZXubGGYu63KMaGu6qAcEzb56h8gVcLnJ515J2ERwJLrqx97YgkhoRxsgXn1wNHnGa6Hif2NY65A6dxMpvm3",
  "key18": "84rJyypUrkyT5nZFsZoWWrMXAzswewmtpLCdhdWQhARJTCamS5LMpoCQMa5ZUS2PY3LhUdyywotQragaQ7L4c8y",
  "key19": "2Kx4ZYGbVEKLfNkMGZhxSt9Wy8eyPfufH3xEztucw4oMhp6GSoPtPAqkAabiBS5uCF1HX1PNm7CybfmcALa4hhNU",
  "key20": "3JLEruNFJe1WgYMY6NTvSXGRxKPwqZD6PvnMiWdF1E4mGr9NxTs4X9R7yB6xtoGKfsm7Br76UTrCjFtUNnX9irMq",
  "key21": "5szeCqx7QQUbEVg9HdniNQ1fEjpLgx78YSVKbiUB83yigACFSVig548zxDx159cJ9VvZfCQVLYJ94AFnU5KtihNC",
  "key22": "wkHEtWxFhkbAoScgpyCqU6gXDbpy6g1BdMxTN9UpXB7F7pAYevvbcA2gr6rKC2Wso1Cy88RdCrZjCVYNHKQtE95",
  "key23": "3EUWMKEsZwnK5PzK5YJVqM14hfEmTYDJ2wdj3bTc8rJpJxjgHScRadhDaM6kLEAsqXMy9HjBwCG1EBCcydScRM46",
  "key24": "3w2hxMxtkTBzQaLnRtCYVAFagKbsdAsWryFXwbXwPAtrrAPKyz5EkA6F6YtbBS8WtXkgBCi5bovcQd3vHzaMmwDE",
  "key25": "4gUoj3JSNmp1nXcH2WXcJXhu3LXQwuPGYHRT84ug4cwbAHBbG8arAD3cyfXA3jU6Jdu3sPKAQ8d1cLdVnxGzyeGN",
  "key26": "3NPvN3M6kzgCzfCfPSsvHnxgHrTFFYhM5hQcaJo6LMFdd1m8jsJunCqJzNSpmLwSecJ6P28u9DZnEUQdYBrfn3Ge",
  "key27": "64TFAw4J5g4po9vkA7nWsXRbzTwqdCiiQuCQQpLXKitjYva6t9aFhnujejzVZTY8DxBSc5vpnq3E9t5qQQVBpG6b",
  "key28": "5ohkz66vRZTyEwTo24aeJ2DsmcbYqUbrNeWkxKYkMqJp3Pw3yDsAcxh7hPiD2a6e3Lohmj6mL8UcdYwpDvghQHbC",
  "key29": "48Xcy6p31rKKMUxcysdCs3JRokMMFQ3A6WP6nriSVjMTRrr2sxiprXUstxxDv1ANT2g4oLefZqzZyRBp2rqUDnRk",
  "key30": "4qE6ZTXWeWPcUxyZfuWtWGBy7ZdagjvZbJZavfs82hHyksWNxyAMjvwtS6itR34W3bi8hXt1ZeWZQSL4sR3LRsb",
  "key31": "qu2PqN9f9vyXrYx8ErdZfkHXuoCXXiNMxGNxMB3iykBgwJThfxwXK47zCNQ2embC4NrYQW43ibBijYQaZ7ftvyV",
  "key32": "33DNPvSidkdopYJyG9HsiqrnYPgMxRwaoniyDRRCq9PuNonvpPYkjiB5xD4TZ1yMxNrBtxp8fL6qNEHWv72NWJgT",
  "key33": "hPzhkkGK6GeUYDjgpG2ywDirTP5FW24DFWapy5dTCQyhNH8vK3EUGwy2uZms9izWjAkYXoLkCNXn2XTKjdihexe",
  "key34": "5SUE2Cjg194RLa4vFfnXjNu6wHzYPPy2MUZVYRix5k7fa7ZtkoCpWHxjyFseExw1LDb7pk37EYs1axYXSy9Xv2Cb",
  "key35": "3NdM1xLorV7Do2MmzrJA47nHfr3hj8exycgmwQ3WnC2xLugk7SLKTQwWDUowJDebvqSz7Fw3yJXGS2G9TWAv6Jm1",
  "key36": "2Fg6VHCRh9eeptc9abgUB9HCBz7ZJY83DPzDrauhR24LKEwU9SuKgbLzZv1ZQmWPyqhN3L2YYSEdtFH2Mp5Tn9aR",
  "key37": "z1HT8sat1Lg1Rz2StgdXnFoJvtwBFT66QBuqag73JPJ2a8zwnjuTCp9ruWHyruje2qU7thR9NNAqFVUKb2tkFG6",
  "key38": "5FBQbZD76rrReGfMUwUGvRpk1f3UvgjGS6dUiKEkM9LbdPDDYBbPd9ceXCiPcRTsVSNojvpvepWTg11wZ8Kgu73m",
  "key39": "5Tg7Vw7TAQcrgxmakVhRE4n1x3BFLCHTAkP33cvXUVFXXGgMdfpbPKUaGP8VFFgEDmNGw4MNHcrY4JoKHN4yJqQ8",
  "key40": "3qC3yC7nxmByyqUGoET6p4yAMSAZofbr5ntcVNmCh1Aw68bVCDc1iKjjfX1RmoKJwHAyQDEpfT2bJcYSHdtT1tvA",
  "key41": "GpPyRKW4ArPrQw5mCj8cwEcMAGeABDKj4GPA11eJiZoGYBR62m7xztdfsYyasPk6mUsYzh9MPkRF884EW8bYpZa",
  "key42": "5s9ejzRGXoz17ufa7Cne3AVfyTFouRrqA4NuXEjWFbT9rJMf313S4NyMUge14dPY4FGuLRv8WJwxdn4iP34guPZA",
  "key43": "52Arut6CU5e7GEHwCUEynyfp2RYiPUg1mCWqMqVYEieMqdWV81U6roshzXyf1TGMj64Hh49k6uyGuNB86LJURjaY",
  "key44": "KD5WTW6CvT63oxqGeFUReEn9hDaZSyx845vahTnU88n24cPN2V38K1TXxJE6QvXFToYBVjnzU5fLdNV5KBFNoa5",
  "key45": "2rA3raWui2Ni3DnqzYukLgj6u1k2NQ8fhyw8ZhKYCwbPMg8eWcttfVRZgwFfjgxaYpEtNEYPBL8JFJ4tfRbywvNW",
  "key46": "4UAr6SceV8y2PU9CFWe915bxJsG1YHQ9YHM3pcfYWnTSDeVuW3AcvYEu8vmoZW4tZ1YwTFu9h5zh4nAiFrkGmMQW"
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

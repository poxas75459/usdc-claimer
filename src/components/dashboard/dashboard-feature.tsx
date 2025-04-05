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
    "5jtPjVRyhKWFVrXArmU6qP4K9sSkAyaMMAe6M73tjnFMGXx2bMoaNaEDj9i8yA2xobsrnaLp8eGzRRjRr4fitoxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bYRy5qjUBAm3aWkzDtwqJbLJKz5r6Qex8FKb85RA6YXijHWNt5aLoDcC8XXmLomm6L6q6AUrWaoy9TqwTLwDCu4",
  "key1": "4p8eqGaNtLt1RhRwzESDKbGqC12jPrABsk2wCvrEh4Z3zu7tS4NDVFEgXoVP64FHR2RR9e8tpckkEf9V7htW87he",
  "key2": "4J5jNNGQqzjiXCimawFHxt9GHfoGVNue8WQc3xqPq4xxkdiquGqUaqgEM1giB7PWFxw74dLdbP9QUunJ8ic6KXcm",
  "key3": "5A6kfRuWWtzh3Z6a6u8H8ygMMpZQzf9mV78Z4FV5iN3A4JAgfzjRCnVT7RPUmzw49fQjWz7ALNhvPJwuiDFErc7y",
  "key4": "5frbqr3iRi6Kgh9PggjLxfnxo2NXhN1oMH341e1KLj3sypo1yG4dxG2ubbkUnpCMJ2waaHxCKgd4PJwhWmMFFiWT",
  "key5": "4tW4kcyyiQmhXbmPcNbCgy6vTbijrxkkaozQmCh18z2ZCaDyXqnfbcxuCWAYExpmbv9omgELYXn72zhvf8TEDVwd",
  "key6": "45tQco2qBywPKAsXbYwRYiABaGFj1ifYkFgXp65NSYgsUjXq2nGUweaSNypwEXmvtrzY7R1xP7LZJN1ZzwRqvcaT",
  "key7": "4d6CS1MexFor563DWunVvC8sFQzpTNAqGd8rnYS3bhboai1jXVHAmV5Bf8A8gJUPDiJUXF38BNg97U3iDAvvGpcx",
  "key8": "33urjngSzN8WrC1tTFhSnrJoeJWPzbVfK7QEacEitAz5nVpw2B9utTEecZJBSHB7GgdXMdGuSL6jQYrouCjD4QcR",
  "key9": "iKkVuTXeCJXvSNhWazqLu9eRrx3esd4vRhe6BfDoWwiwYhmVcofo83BQsLixcSjZWAZiBxVaQYQMmbkZkTGsuAe",
  "key10": "fus7R3zwZfp5R4z8Ec8uytFiZMASjPu8XZCUP2aZcTEsBpMVocVpJhVY9UkTnodgAiY7iPboLcYhEa6CoGyosza",
  "key11": "EurFsPUg6WwfguWW58wYT3su8kph4SXxUAcw8mzcp8uquwWuyZY2bGKSMdsnLpnxtbednpQYJzv7qFgCoXWSrb8",
  "key12": "62A8Wg5hZQprRHAFvVZgqWrxzAK2oHbPgVA4kBYbePEBJgu8iGcVRsALbY2WUn1oyQM8GZjC63j7diouGoBYgzJ",
  "key13": "ePpgY3m52d26wxResBoJFWWEiTjDSbCc7cX8JLAiBPmdxCFSA6HpZz3X8f73CgdeJZDM6k7swQTmQEpg8P55Gsq",
  "key14": "2ymmTFR4GgbWYh8TGaTstyZLzSTRZoPW7MGbd2vXMhP5ujkBewwHYoot1kwuh2jA7xg5mu18WdJghzMp46N3LZxC",
  "key15": "3XT16Zq79tj99yTGnna9mnjZQoHyW8HrpP3kmo9SyvPoZHA3EordMFHgiytLDsgWf64z6JaxC8W5Rvpd9b11nRG",
  "key16": "3YTKUXfe1A6Niq9HSTA8YmqhbBwAgM7N4q6uVrXfTNzgio6wYuZDZAfHLimh7DCtwzsiWPNF79Mbkdu8pzvuQu19",
  "key17": "xKJHSvkimh7bMCnCQW5ZW3sJPx3eY4KM5QdKVfWWt4Q54TKq92e2R32eRsKyYqD4RHijULX7hzyj8fXzRC347dD",
  "key18": "VTZQXDFYh6pEV4NQprENw1Pnf19AL7ipTnD575WCSyE7RaoQsW2edHUXCQSEidBeBHxhihbwBJzDdR7Mbs86P33",
  "key19": "5GHT2dB48s2dGdtay2y1gpPuesK3YxZU5p3Ei9v3xRbuDcgmJefmyuJvxL5p3Toi9ezLwiKjBJFH8JhqUjELnzgQ",
  "key20": "2Rid9g6CSpB5dkymmTgTioPUnSujnoo9vsV3jcoovrBGyxQqce6ChpdFsaeAYi9c1r8YVav286PbVgdvyCcPS4sy",
  "key21": "sq38aZzXp7rbZXdpYtsuXLLYUX1NvsGSEjgtBPktysKFfNQnneYcY8sMCrordn57BnRy44BZxrAKHw8RDGK58pJ",
  "key22": "5rd71qNHCWKHhxS9YpGPv1q2syWhQUy1Zrfb1DcmobqnsMZHuKzNmejZCQagK4KzDMoJRdoV9hZD5KumkkUmP7XA",
  "key23": "3DVuTSJCF2yXGbXkBddsxRLTuef1JjNMsKxyACErkB4tevTPGFFRQNpvLZ9NiuwaCdQqBwH5yR93oaT8kUPw5V2",
  "key24": "2o7Vp5qi6C1VM2dEU2VbPABXifSPmkWKZbJAt9ByMhfHXA4qkPJ6o3GEs5GCYZzsuDXbbHkZCLVr7wZXVKREbfmY",
  "key25": "3qrdSsMUYGVadjdvjfyPPYkp9xyY7j2mSNvkzgtRfd3hJak1nmSr5dqxXwuhubsjzppUvs9x44KjH9ZwkUuvVfGf",
  "key26": "3DTygSxqLCGAofuthRqAQE2UdaTH9iD6nDC74YpiSy1GYEiq3y4YxAk1QrYfm9AY1WWdcPPxVXGfJRsQ4BBw4kFR",
  "key27": "4gZT3KSZPcgGqmETRJYQgKuVvgggkj8Tk2T1B9KNLNJu8uqBZ4VqqL7XxrQu8YcRDbTX69wG3uqjtv1aypJbN62n",
  "key28": "xJcLTHW9hgxyxQ5tiHBkvcn6dUkmgaqpcF5nQb3RtLHey1B7h9XgQV2UEctrEVrp36XmUr4HAQj99tEeiZmcaqH",
  "key29": "4Jj3xzJp9jzJ3ioatLwmus3qSrKYxTsTea2qAFiEaCHa662WHJmSE8RBDRuiSp5JD4fYHNnM5r4LnaHPb6LFuR7M",
  "key30": "2Dgaewahq2smcrJG8QPZiURK23R1BpvgJtE4PedTAbYj2ukix7xNxCj8WtzHMzup9Hyc5iq4joEHGjKa6QDKFkje",
  "key31": "3iXT8n18BLecvfWtaUzScPJKgqjwajJLg4UjR6CYJayuHacKGrqiwUnmBVyctpQJkBN8NwTi3XqTrkqzbXvGMHgQ",
  "key32": "2VQKLPQ864LMXSLeahJiHQuUsjQKM6EE8wtv9wRRP8tPe7zKn7KajTeFERTcmVu4RkSTQFQ3G8wP1b4DkvDKC1x2",
  "key33": "nCUVGvPS5eHnapsggitzY7pFajVp7Jg9f9zC1rapibjozxCfsAiMhqYDcijk3ZrUH8v4q8QyvmMrbxu3r8oHRW6",
  "key34": "Fuftvs8Ufjfprmi89A8MuzBW87bDue4nXPJpmHiDVi98EWSnh4sZBwDMeMhYNhVeb5PG3dhYb2rNMp9j6fhzVFa",
  "key35": "2Z1jcM6Wcjig3irXXDSjxWZXPmrJKMHThTT9VYrRa8stPubBTk1QE8smCngF35eaByc2q6TsdtMozT1NxWhXRx3g",
  "key36": "eM8SF9dSsEndH5CWmff9rEvhkEUZLUu5tF8txNZRYQEHGaRZLG32fzaYhfXwCXE7R1U2S4rjFbvt1FLKwKbSc2H",
  "key37": "2tuFAcSNvYHyrwDLsSmBzST6sTyx4hzVEgPtyTjwyY8WU7NC6mUeKq3vB8S43F2QT3k416Ffpn9Nf24ycnjSLFWg",
  "key38": "5rxTWvBfx5aPgMEStoADQGDbnTX4MTSUUnGPQLrpGg32kveXJM1SDane1ZFWPp9ZVHsL6dDWyQVnZfGhJMi2qkWz",
  "key39": "98KmPZQe9uvpz7q6HUNMJD8mgzxUya45dMfNTotXPQbcyWwNtdBosA5CbHA8jHF36yc5YAJDPSv3NFuNvZ19rML",
  "key40": "431Bf9ghuqH6J6ytfc677V7F6iM3Qjj4rcMo3jwpMennQr9jjwQEbq9dQRwSk6bcCP4oLCpBP3WFueb1MQiJ5a7p",
  "key41": "2TTnBVumaownFRfmgsPiS1TkqQdxCZyMYwqi8JqafspZqEaaSwYzKrVBBnU59LHFJrh5nD5zcZsGQw3gSBWvNp7r",
  "key42": "6pPcnr9YRBCf5SpjkTuQV5XE9cyUywtRr9euBhwL8dmqHZ2MFV2i2W9z5auh8MF2u1BKtZMoTMgxvHdGmhvMWhN",
  "key43": "3SeTntnKWup5rgrmkh1pQPXcx7M3FSZaK1hCfFiADCSwfFef1kjqnVWzWRyc7WAuc1P2innqcjjVFmWKo3WEY8Hd",
  "key44": "5J5pMEAr9jcaEn9wguPtyHFjMXNknWcdaMyiGuqQNpK1UxgmSRUrz8hfjS1NUJQbU8d9Y4DgYXSHEyteutFjZSi1"
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

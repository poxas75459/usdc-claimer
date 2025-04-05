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
    "5gszwb6BjMnv6Uo6bT6s1UxKibikTQo5dafC6Q22zcVy7GPHW1Zve6jaMX69CFHQdjeopp5djxvXQF95eiTs3eu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64RrbywEiFHoKJU4MJ3PYYMU82rPfEcELzuNBRpiAGG46xXU1YHnWWEvPgJhmSor3cZ4DRaruNxihk3XadWrRQov",
  "key1": "3Xr71hhd36ambXbj1HNMJ2RKwjFN8eYoN5bXabBjssNkAxLck9y4apWuZK61bR5QShw9VU8q2FuRqr38TsemJCXv",
  "key2": "27186evrrujQi1yALrMsFx1SdXubrvJJsoyZYrL2JhMX45t3LikGLEi1Zd1VyL37XbFCXzpSFFDEWvNX2evHWTWP",
  "key3": "5mszEhqKAwiSH6dbRfcphdDeAAfVSbBALSLpxErUydaLKmAVHqtm2deD9pAexhDuvuKyFSZp1ThNEMjBs2DLUtHL",
  "key4": "2PehgMZjp1hkLPFrKkYDDQhxZd2xHNhmXX3W1vaUCozGdMf4HBTgT9wBRVbqjfUvNQ7FsCSvNfhaN2pK1QiN6uwt",
  "key5": "48TZDHE4qKcy8pUYFwPjSXbvM7u3K4N7Y9LvSvJotBeJPcgXc3V5DHie4Gu2BtVYpwBedKwuFeZjfzDN7zhDWPKx",
  "key6": "4hfYBgR6tAPqNqm8bk6DzCtsPTAuEQx3Ei6aCbpS5cxcFZw168AN4P8YEfPQufDguLkLSoUy5NgrDSFeqNGrz27N",
  "key7": "3xAJuhNDBounENim3zywa1d2BQpnjHX8GWmxHqKJV45zyAsohqFpZQ7gTPFVCYqwNrphr3J2mA9MDCXrMKbUqwot",
  "key8": "2FrZdWJrgwBxidseSShdWFXDAMEX6C8jnbaDUjvZMqRhnSeWJnTADq5M1q3SvEtgzxFGREZ3n3TH8WbHYg7BhhLP",
  "key9": "dD6XgUAd8A4uN162mLFk7REntXsBVuMSFLNC7gGhykNcNmrfN1tS2Mq22XjDJpzWJLCauPUTKPyZkYE5v6KEzjp",
  "key10": "4oqNBtkKJDyTQt1krCkkc6ts8Nb3qEb7ypHkf522VCTCPwUtg3SyRPj6SZUaizydNzD4nyYwB1ArA4g6aPGfoWZd",
  "key11": "3febsEYMqC4SEjWgUjeE19bBAZ2T12Q1KGaNAHbe9miGDuBGowWLsba43Wq4Q3PJrgrUgSVe8uyYgcUyaqhmDryX",
  "key12": "4YH23ZDR2LEES4ykcX4UTqauWWhBZCtbb2KCjjd5nFX276U6Rug79cW51BW3AopyxJ72kMGRv1BoMxaSSuJfoqSZ",
  "key13": "668mXMWkjhiVEksAWzxtPijuYxs4VWcWkBMR237P1C9xLim6pce4LNa3s2SRnu4hmTS6kNHjMD6QrCtngxKrD5RN",
  "key14": "TcVnF1mNBsnTn5THUd9Jy4dZHs4Grc6T2pufocCvGJSci8xd6BYMRPhX6MFkt4yK9yMLijGr1RbsXQuL1eKU8SE",
  "key15": "4JrjfN57rEzsfgg2vM8Q7rNgNBR3RyWmFK8E9Hz8yp9ecfLNiLmreZnrsmidurp6yKzh68VLqjKPbdp3zBhctuVx",
  "key16": "2dv2snRXdo9mkavtdMnPcoPD3sqgYtutpTFndQ6pKA2PfC6Uk9tjAqf1U2VLAVwA2D1A94oBo8NpKbWA8WvfqUNC",
  "key17": "2eL8VdbkXeU58rsdycrH8rqWm6uqFFdofGz5FJZYFXq1EdexNSnNKv6y8tCXsB2ToJxeb4SsBGNVTqtcSYdcZVCP",
  "key18": "4x6Ff9gYBdhJTF6uG7Z62qio6CYdBWtBNCHdXyNFgoZiuozP9QBtf4vsEVKzgazPiR26DySb72CqHNRjMYW9mTrf",
  "key19": "3gAydRyab1o38MxM5tVY3Z2124njsnHDjqzd2pATKLDwQUzJ7vHESZyVtpqDesEHEeyZTd2SAM1nbCDnETpuRZnT",
  "key20": "5Pjs8dLVxo3n44y9zQ5xgUgDp1NVVVcoq2WuTUANxykwDixurSPgfngcchPsLV6TrqKCc8K6y9Xrd1UnUDXUxSxA",
  "key21": "5qQqHDNqruLeADD2DQ6PP19ULqdKCUp5sJCyVkAN4TrdCpgZMxeeZcuLR9AXQbQuzdkNJtEMghH8DAqDDB86w7Ug",
  "key22": "5BBS6jKGsihfCqVZFMYzyzFsTZb9CBv1DzBPBPM71ieC4cyHH4Tu6qVZbs2rFVodUM4gsD6sQZEfMKeVQSv8Zetq",
  "key23": "2V32VdhSQZwBwYv2ELAZ2J5gjWWfNX87nvygit8rE9zbU1PRMMiG4HwjKkVQkRkTNYWcDCAfBGcUvL3iu1YGf9nH",
  "key24": "5sh8GpKVTFpzRGcZ79KCZx8kkDFsywNX7WBMbVXfHZ4hxasssuy1HQ7Ug1CZQFmcBHUjnL8x6JENhc1HQiqGtyg7",
  "key25": "36i3Hq2JdcbyGNPuQECdq4miqbMNf5Motfq7jzF8mFrFWdiNRtrYqdm9joatJoe3mdCRAwaKcR9JAd3Phtcc6A9a",
  "key26": "41yDZXpAGGCUtjDxp87USy2uq2pix5Xqq3ozUjypAEnwTteCkFTc8a1FCQyHtvRzbumnq4FRtuiBVjBAywRjeMJy",
  "key27": "66xdXcynBinNxoEVkYBWXRnnwheoAng21WZNBifjxuDNjxAtRisN2djqAWf5X5tDGJK4Qv3jSHDTaWu1KSbvfiKa",
  "key28": "4yZCQnTR31RBCyGBaWkHAYPpzoMoY2jbnSxMU6r2KV8Xf6uqA1HEoPYti1q7GjbYyuRo8Z1syJ2JhZigJzTUQ8Rf",
  "key29": "5WFcJXxT2fh5WUS7iXJfH5Yit8WSY2SSvjUt6KMXjjVBUPNX6frAWW32aJq95nDBo5GrEvaR7rhHfTHZxTmkm2bS",
  "key30": "4ExSqcqWyQsb8RWXRo3WnEG54rheM4fWNPGxeRc3etYwsPJQ3Dc24prRynDVrasVWVPp2f1VLoUWGGfZmPHgGcSE",
  "key31": "4XKer6NKrHpjCkYhi7u8UPHMXu5FiVgeGr918RCRMzwVhCQCjQQhTr8Zfnau7kvPCarWtZTopGfcb6f78M8MY1EC",
  "key32": "VvUW7wjzpsDsBvSFBBcThVCmmXBPsJnraRfz4evywpDGFsSd3wVUmXfHASsMSpvRYDYrwEEqAPtywhyxCD6GRhk",
  "key33": "4yj4G9JMNbkDNCYZWTV2NBbb3xGMjUjVQCNJ1uuus57g8TxqarXoiQuG7h5BH5Xr6DTKBVmxPjaB5NHcEWz6aran",
  "key34": "4HABgydubCqaAMkT1HcgUUYUVCAy8QgyWPZRwbgtvQc77bzvtsd2uyiVguNcv6VZbcAwc3DztFdsVSUCSjJn1LaW",
  "key35": "4LPXbw7xGL44H9u4zKmLj2W8NBz5FkXzmCGhmbcduTE26bfVYtC9wXPr8Rv6sUFktspr1oDWKV7TvuHJV2L82nsS",
  "key36": "2FZ2cu6p21e2qqFCHwiGxR3SvRX7ohFALXvrWXB5Jta8p4iHorW62McoLmVUUquEskihsau9i2N6CNwiHEQuisDv",
  "key37": "5na84oeexEvQgDux8gty3U8VvwUMvHLPZxRQYwaHQhMN3QKYQFP3akfMbBDyYjFW1Wq3wRjr2e3yepv8M4HV29nv",
  "key38": "EhMuigd5hUwUEUqT9ti3rt7PFacBukaeVzo4BACoqCuuauUNXhUQXNAuBA2skeSUCNKqHdD9cu66shSXUvTWDGo"
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

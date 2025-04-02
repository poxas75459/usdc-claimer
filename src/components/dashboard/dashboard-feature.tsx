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
    "2haNqx6vmXxAHSsCQ3DYVFDwEs9MVuGVQnpdhQEx8ZKq9rNyyDizPXJPa39NsCTopX1478n72NBh6NA5p1KQViNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QthBuwkt8YsWHcttnky8JXDsEuAtsgufHWL3w8dEVyxzNZM7mazN99kZfqo8udjoLbYJJcynufXGWDibMpfMRSA",
  "key1": "4p8GKQQxxLTHnMfMcu9uKz9aydDkvNLULxcZcFwwLjjWgNaxriBAbaq7YGpNGsfnXkuyuABrwypLWJBsJVgXsyNt",
  "key2": "2eHry1fnjmFN3M13VFMPy37zaitpKXnCUiV8rYQoN6X3EqsJg9YkYEdFUMKxPdt15XmCf93wXAxagT2knGwgg9Ci",
  "key3": "3hW12oXtefpTwuoDiqK3QzXt7SoEBQrcoWaykJyY1TDGy1ukyNhxHzjfTkUouVSfGsUGrB2C36yjsMU4TrmTR8Et",
  "key4": "TAPsz9uLFw433T1xMJi3CCiJpkggWziRwQQarAX3Rw2Lu3FWfLRH1AmN5AgS8mgnWhDBGKBTiBANLJQ6WvXKaGA",
  "key5": "cBdKpT7qH1cBzUMWAW7Gt9dNECDVUXquC8LuHdjdvoxF4XVQdDycQGVFrFnL3SLz9ihhjQakRGTPtFCuhnnbzW5",
  "key6": "5ZBecG4EMFGAMC8fJEhYFw45AzHyKpeQdMCLSQFZ2f6LmyGZg5UkZUY9rTYBtJXNJZrLRSQUExh42xzypKHKgTLc",
  "key7": "2TQSxwx7thNxXBtLbYfPbfqDRm7GFWFLPbAh8NcEC8NpLkoMoscGhWjbt3JkN7nR6nwc6PS4SbYbnkso6vuTVAfR",
  "key8": "pey5YWLc8jQM3RbjxqWpBYXN4pQpV7P1GqoVNvacz3bZ1Rsp2f12W78u5oz2qYJwjUQu21rphRtDQivUs8cxb7k",
  "key9": "TBccYCac6KAkUnJYKB8DwgSBTJvoSQ7bCqzjHgqLBQK8wunH41e1wyTY5nmrrxUfmekrEcZyvbhRoHV74ErUeXx",
  "key10": "4dnnKm5cbHxT14KjGm5Enu1sgpDB3n2Jom3ypsL7TUQC15XZCJ85C6neYcdt1xQtqJLRtkpqucXpnyi41L8zHQXt",
  "key11": "3CxMb8vQ99rQw6gk4FS5txeWiMKBgWCzXh4fF8LuKW6QhEwMeDHVM7hboD5Yccw96y8S38UYkEPTeaBcVhnfycuN",
  "key12": "5xwaP8z5uQcfGEvV4Nz4mQyaV1uaJCyCfV4fxTJgK2Nhucq9AqwqQ4TmChMRd1gj1TbNedYJAT87NTppxPPa2Jaj",
  "key13": "2EkrieuC5RnSM8WHW4Qx8szrvmY45EV2ZohmVGHiMM3aP9MXY6p5CELqMnx8F1uG3fdYz5iSZJAEbzVjtqKovVDv",
  "key14": "5yKC8qoGxQf86G4yBAianSPC7VCHBneh3VCjw7Co4Cqk71oV5nFZYvkkbPcyRwgUtUodmxY9Pj49WhyWipWGFeKY",
  "key15": "2QiXh3w9VE9TLZEXrMmBwTEXkip8nZBV88JvFhUemxBAKkaK1nSUbmZvFBNUnKWqEg7sQTa2aGmqPBfhXykVpiij",
  "key16": "5G82o565SEWhEp6dik35Dr4AXusejsLrm6yx66LugbuAQaDBhxrr4vXTiHSSGNcvK4FgVzbrZfw5d1HoN4fnMgDk",
  "key17": "37MiCXRt6r4eF4BT184nAJqAGnD1dc3pcQagj2TAffXCsyKBJULEaag42pgu23TtjTDPsLS1C73tDWVCpxPZ2W5g",
  "key18": "3ejLZHmsxu12C7wKuJdcmFoBhepzF5VV1VtZu1Y6pBMifmYqUT5cH9whZnAwQTGPtcfHSutAuKD3U4QVukRkhAjT",
  "key19": "2kA2dPmHDEnx8UteA82LbgAvQ7GErNJZAS1irWbyevKoRCWRCmAUxMkCxeeCJopkx2WH6KMUCPrSAXxrk3pocCn9",
  "key20": "2EwLkNtYsqv3DnrDkhY1CfByzf56u9DQwfqwAa288J55nRKQw47dhFZSeLQbedwWzQmuoVCUgkmsAAeAeP7WwgH3",
  "key21": "w28qcudZCp1SJEyVjJ4dhgTz2dCMmi6vSGZBKqe85R9ta3bK1DNmBHSJ29zKsuvQN33UjL4p14BJw2MJ9RdRuTk",
  "key22": "2GuUtrkm16H8ZioYpP9q3UFgbgRZRjf34VVn1UA7iyAw8hK6zx5oVUtrbUAW7oLEegk8nyqd78qxQdLwZGfTMmwB",
  "key23": "395x8PnPxTEoiNVtRwnp4xecKaVhtLcdpXGMqqQ3xQE3PoZFXGRpKzs2SnnGmxsH5UQMNKBRjY2yWZebnXD6agpa",
  "key24": "TXY5bUJk5oQCFvaH86np1edb6KdEYneaRwF4s8yFkpjVZk9we8UWGFBRfY3AYaMMpbQrR87kngj7xmmsp2FQRKw",
  "key25": "3VHxjpmxQ1nhXsbYUKzjPrmkhvoVrNivanxFzhMqYAkZuyUuxgje7YJ9ctAMMW2CVJTWHQRBiPK3BHbqQXTFezyk",
  "key26": "4XCKJcTNMoP7sQtbjikq67ZeLTNUvGYh8A6me6jRqePrW8V4vdErdQx4RUCuWcc1LCWk2MtQBSLmkZrcnkqodWYv",
  "key27": "MEECEWNSeTdVQ6wLq93Q1Qs2vE2zCndidFEMbraQpVuty9R5dzKvTFW1BvggJ1atX9AnfqYRC1ajGANpNEpewRs",
  "key28": "66UWGxjF1bSwBAadZyRSDjEhX2wBQRZb3KcyiUnquRV1HuiFAoVN37BS9xVH7NsRiMdrbSzBEsEPQChtUmohG7jX",
  "key29": "GSHtrLbX6u5pGTZnzkwKcp2FjYPyQzaMHP6i6uYb7biLqbA5HdgzzeyQFaVUieCWjghnGv7yFf5B11iRMGRRgzj",
  "key30": "58FxSFewpcQdZUTMJByKCCLS6nLKPB6nBmDT6wzVXfmzewz7T6S9rg245ffUfTs7vwHBk7RtMT4gVL1GP5Wwx54a",
  "key31": "Ui8dmmxP41uGJuNr1HW9nPXzWBYqDBZEngrY56LapHAmJF4SZ8HkM691cTEXCJifNMPcXFXpKVuX4D236jHcGRp",
  "key32": "3QQ2JLE8T51FjxmT4DCfmC3TULACK7acMohcJeU8qRiH1yLaSdhggRjY957chWc2YPigY82vK9gAbcmtAAqdQoxG",
  "key33": "4hoFBzAh7SJZb4gtJ12hhvCKFjqCPEmtFpBMbbnbQALsg3vNmLsBH7pQVcc2FJ4RJMgPisPwJD6GKymYPgUbXRqp",
  "key34": "4rBk31RyBCbbg2fj4eyFc7jMj9V2Z26Dab4rXVWEk2SiNngkEwwGRHEn9sDAAJLsyB4Ey9VFNgzgAaumYRVRYqeX",
  "key35": "5MBu4fmDtQKD4b5x1yQZAi3UqffKXe6iWYHMbkwgXBtzbn3ZJ2Kijajp2HMXJ5abui45MKXPnAPwyDzdnGwvna6B",
  "key36": "3WZufAYF7JiWH3ET27L6d8fzAkamYpsnAQoQpc4Fav9gZufcGM856Pix6GL8SPfQ7kSJditySLcsSApgfiSBRwpm",
  "key37": "2nwxZtWNgQJhdR99oLrqzBBU1pMWze3HM2BCvVCCHoZ3a1PgJh7j6wvbTDaGyBaWQRTqNbURKF9NvQwJZ7eXa8wo",
  "key38": "5cSJest4wiRBLRsPkA6hh4iYxr89MM73ogxKDzGKUUVutGJWCiFc63sHd1okpFfyi7mNuSaH1Eh3f9nZpxhWXuLD",
  "key39": "337GaTqmWamfCo2x3CjiKFedem4TYqwKUryXLmHaPKt1A7DfhHLKrL5pQZZBXWYopcEWS27dmnRPoDmi5DMtZSu7",
  "key40": "2udJ5VP9vGxmuE5CAn89LfnMnuGr3cCfbK5wLgEeSY54j4n1iopMos5b8hgAEP9XCWNnrbHABZvo7iyc5tBhjx4U",
  "key41": "4sRFyRCDz1CzZD4B8kgvZYcEk49cqt4r816xonY8PEZYqTeW27w3ChFp9fijzk2mKJamPELzsCKBuhNwN5Q1EofP",
  "key42": "waEeDtWqcUQ8Si8NGsSw2msLbbnyEhXoqas4vxZFKhy9JSyXEvaizy9CfkaJE7H6UJPrX6tsYTUcUaTrLypNm6K"
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

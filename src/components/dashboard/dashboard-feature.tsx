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
    "1eocC5j95XbsoJ8TwyqPewfs2yuCorz7nzcHhWo4HZRC5HfMexzhBbhJKfpfkTS18PDJYiG4YSbjHgP1yTGrLNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqJPvuiABbk7es17A4oZ6gEZnjrhadMNZXm82dthzbcnkR6dSw4qftjirNibbbxyomH4vkphcAUvNtLYGoPkZ4s",
  "key1": "3h4Xuo2P8dKBAtUNE9dmxGs9JnBZQMM2csHrcqkN7SKgWajnbPJdTh8zPYKRVYF4Vc53A4eeRjNeiqgkpf65rQQe",
  "key2": "4XU6NVA7Gv8U5gzzSYezF1hUYCRhrx8hqTXhz7ieDZ1Gty8znCBEX7zeTw1YNB3yT1N9v1Rb5DNWZBcemegAqgD9",
  "key3": "5i1fX18WANAEkCcXATi9sHNJQ6mNUhiaWEXvBCig9E5oAfFSma9TvvQqnfAa8pAowuqEWNkt8jxwkZYHzp4XYoMg",
  "key4": "2B9dT4VDAT5yudBpZjQS9mVSnpCWMJwQJP4dK2usNFTanM1UGJKKaAUZgwxad1nsmHzc2yKN99MBAqkEsReRuYjP",
  "key5": "5r1QMXQugN4SRNG8CAqCYytM5i8kqDsDcTCqGqusQ1Vq33hyf53753SAkpChi4Qfk3QS4MhUSxQqT6U8TnHP1tnc",
  "key6": "2wW87dvtxTKDKgwpANDGUxoRtCWaygua8zxx8cF4mYct8wmxSexanTq6xL1aVFztuUzDtQF9KqjP4zVKMQUh3oNk",
  "key7": "4zSRiP31stymAHNdzub12Q1zJS4dZEkwYWJEBW4E8ZiQQfbGbKY2xwbA4oVK2QF32bsskAvemHTZK4RdHSinA8D3",
  "key8": "4UvU8SxMmFChufqdR2dhLNsygk41USiK1TNcPhnxxYVD8gJxV2uGfz4kBE8DuPH1drYvubHGhMtxZEQJbdmRqBVu",
  "key9": "3m861mVYq5j35FreyEWhRF4Fn1Lr6v8LWrEnfTTeSe3x659Y4XLtzX7bhLKyJB4Hzo2rp68ePwNJcNvCdNX1v5uQ",
  "key10": "2t6RKTvjAiYy4JDv6vGerdKjt3b25HpgHvNipL37jmXDPsK3EdC6JqxxRLs6KUHeSwPp64hsjxHS2i5z9n46Dbh4",
  "key11": "evYZsrehg75Vpyw2k7nRyKeF6BWC7aPvxmyfuUbhXXV4eCyYPoMVVxohnBf2nkBF7z7GL8hKGFvibD1emCKo8wP",
  "key12": "UAqhv3dkaMfQUp6deaRBgzmZxg6UGCzidMZs995SPW7vSHMpybbFbrACMPbB4tKVoZG8t9wuCAPUUSiNczvx3vq",
  "key13": "ZRyZafkZorH8hDjFmuEHw87CEycMUNGumWS194JB4uoD1rNkND2SMyqRUqZGh4PLTGS5hnPANsxViGuwe6AuRPT",
  "key14": "2Pn1wQS9jKtyNFXFiqbrYKK8hfiryfmXrkzW2VziZFVf4wBFMpxenzuXyb7NUxtbFk5Erv7Ai2npFHNVF7Ewe1W9",
  "key15": "5Mh42DCsXkAvnnwUNqWfiQjjiDJF5xsbc9T4NqD9ZKYtCNKdzccSzbzdsmeffmamfgmg2bQ8aKyygHdBwS78gpxY",
  "key16": "3o5ZhH2QVQJ3FS6nCmEJ6uPDo61dwn2PtjDrZGtVJyjjgrFTNXNeo7R5QwtrDzQf3xu6jpKVZn4PYcEtaPu8kwrN",
  "key17": "2WTVSEi7NLTCLCQmghvMx3D45MMDvpoeowowTWUkLZ8bixKQAL89ZK9HmyEiFDxNLrd6hr3oNneJF5nA8KFu4zY3",
  "key18": "25KiqzXtMbhG446AfMmacpvvR3uDoC5JpgB6FHbMC3Xt9uPMggzfiZFf26iEn852kTEQgkK4CqK4PcthvSJqxhED",
  "key19": "5TzwJ2qaBTuAfA5jPV42Gn8p4aaZkDiJs8676Tp9jcSVVqdMqhciypaqJ6moJTi1565mBZcM3vyT7gy5RZqieZuq",
  "key20": "31dbbsrjRW8MXiG1xJYfosVxV5rvrZhn9c4WEboRH9JZK8Ch6urcxBwsJBCvvvNUHD7N8D2Lsft5qNcnYsYWfbmF",
  "key21": "4odYEnTy1pauouh3sMddWq1HNnpqnGrSS9XwUuPaLR2surSmELKgAsDt3M3oi5J87xfQ7G9J411ZW8qjSKAEHayv",
  "key22": "63kqLd2zSXggBAKLT9KgkGa1dYQAuP6BAachApfNRUgGNAY4FFWsnEPTjPpin1qsiNgwUD2cC6jRzbPM14HBXexf",
  "key23": "TAdW4AVycgHhm48S6gbP4Fo6mJ1WR5s5zWKdh8WCLqUp5UXRHnpcgi8JHtzC8a3LF5t7EbUeHc3iN8AhYzdKkw7",
  "key24": "3NfDsigavNoEhRF48uaRNgS2CyHFk7iJpkooJkpHvmhJPgw36fCdG4SVk12B1df7WqpaGy2XkcKJSeJvseLVD1YN",
  "key25": "42gZw7i51gUDTVjxvZtivWF9MecLTMjZt5TVthi2siPW3C16J5hjSJPkxtiJDMXXiYdHfwXyC9RrsWnbbLqQkQr6",
  "key26": "2MXHSnHfRiiBh1gAyckLP3Gyc4MBUwaPbo9aLCqyN6bZqPLEsXcM6Xyk1PFCp5QqTR8nCaCQCYFQ5VMTHB2fesSy",
  "key27": "Cyzjk5mVXjir9fdh4bKDmWa4YAWo17DCrFUFXLT8qExFaXtyYiK1PmzfA3WVANry4SqhA19XB1RereZkLRYYDuG",
  "key28": "3fDHB9tRQhPBfCjG1EnoXoyeAhADWbDQJCw2pfwr9re4AR7C4rpzTQKLsotLwL6aGu1oUS9AsgdCp2xxHZynAgbW",
  "key29": "6176fM2jKE2nqTyyCChE7dv4SrAzpqTkfvCwGCGqmtbxNfCakYvyrE9F86biossnfho7tQj9wpPMkV5WhTBq5Lzu",
  "key30": "4yk8YmjCpCbxW6JLeHjkfyKp4AcEDZZEUqZs7FrEj261t9Y7s8U4tW6ZZVdyxM1VV9JoR9kTyF4M62SzYB3Jccgd",
  "key31": "ETdgiMDBUewsk9Gpd66FiCaaBjRaPv9ep8nrFb8S7zpCZzV7JMmyRKJtHSc77onDjkgnjksFPxMrBhmkvR5BLcP",
  "key32": "2K6PjtjNqi5Yd69jo9D69RX7ECXgY6wFHdaPnjTeya9HBYWjmer5Mu8T5eqB86khj3nzKtVZvfbAGWuGsyVpkD5Q",
  "key33": "WEezfdczZqs97e1cgfz7hzGgwiafwzm4mZX2USX6QcQsw4h96jJfBXgzfFpoYsFGhZiVyMS7orAggC3vjFUZfq3",
  "key34": "3qsCwtuNVheTCGmkUewWP1d8HEP219fVtRboaQRNQ6XW5gAJpaBCmMwo7RXEHH4hphSJXR5L2UfpRezbKqfKhrgi",
  "key35": "2b3Pmq16otWyimX4vaX6E3VZvUeaZALgyvHX84NyYURkKKZHY1QfgtKkLSFeoDYDaSxDwpFu1jTTSBmZ2gxdMJ25",
  "key36": "3SsAutWD7DNzeGx69g8v6tfEURbWdKogReo9y3GnWK3xd5NRr4uV56VE9F54XiLhrrokMs1ageXfgdHv9MBT4yPX",
  "key37": "zKD2g21fXHTxQr229keATeSqdAPN1Wv6oDXNkXmMnVNu7njGonYSurzyydD9J2zJSMCevMnhG7vWugVuNdEhDM9",
  "key38": "3gJ4Mihmhj4QAozVRZ1n1vsxVG5iAhEJKk674MxGbpbd93FUgW9qH94ammBHMCZyttB9Br9Rrdw9MksQsKjHNSP9",
  "key39": "2NyRG69xp4LXGqXZWC5UY73DX9v9RVb2UNhKWyHZAsVyNMv6UyNRk6xrkZCN1aoK4SefC1afdvjYvQRrejMbBRxK",
  "key40": "5V11fkWAL4ZHzeHQANhmzmi8b69L2GCjuELzuHiYuWfaNoynC5JWFv2rrwXSoWhwyUz8CA2XrSPNNxa5h7jP7Sqw",
  "key41": "5tCzZXaHUTgNxfPYhZsqZXrs9BUzgZetHQTzPmWG7esFuxzEFwrcChDg9UV1jF2mYRUzBecG2rtQeAG8nMHHAzeN",
  "key42": "5Fr8knjemH3obctj7LPFa33AEcvVkTMdJESwBRvFZH1bDtrbWp7eFT9ZY9hRANEJPQsCvNgEiT6k86gw3hh3coE5",
  "key43": "3KrVMYuZFmNXRXpGg7RyH4z5yjsCUnUhz4DDRzhkR4rpurkprsCZvioLnS47SG9uSwQBiQ6LnegaWc9BUjPQM7PW",
  "key44": "3w7LEabaxHsirBbNKZ8VvXNjsCsMkPLUcp3xjgM7Jwd1zzbY2x1kTLnTerveYi9FAaiRwoBRmteebUnQ6KetwLwa",
  "key45": "3PVium2tDB2erd6v3KuSXwcXSaUZgFpWrRwdAwhwsN4JFHJCdbkZGAhhU9DM8aT6X56WHdJw9tdSaoJRFHV2rXUW",
  "key46": "5QxivPVaYLJeVJ8QXt66n9vcDd5nPpRduyHT3ptnCBh7w48JcoLtypfVVfogQkNPmsbyWh7BT5uk6D7trMrofLib",
  "key47": "5zzsp5XNaTB1TAZwJnPA1WcfA8eSKkJwyij8HT7okTqmER2ci3d23AxooRExmEhmsayk6SedUoC9MJVtkqVPMHqR",
  "key48": "5UcpWwpVS2nNpFDXNtbCnZyZuoXD33CY7m5fMpkCvhnD2uUKfTPouHvGnmzufTJqHzJe8Yi5CCQfqC2rCAgtQgf3"
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

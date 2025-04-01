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
    "oc8D5to7vmRssLpWZJzsUTZTMQqVpnLWyfmeYDcqHyuEYkKExLqakqxTs84y93LRNnUCbpNCagE6jQGm1Q3Gyq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X5TcVX8exUhMNCWxeQgWnFm1FRfjU2dNG8P2jUDYc4JRs1afaM93qrysU26A2qZCffiWLRhEgCG69RevPAgXXHe",
  "key1": "36hf4JU3fjg199bHZYcmSHrtHSoFA84Vx8nTrc6Av8nJY96H63vvW5PNP34KWigqgwzKWPYHRKeHVUoSThHDazxm",
  "key2": "23HSiaVVoMBjZYnahq1NAkZMesRXG9QFUBtrJrZGefXMy4KHDbjia2aqYHEUEDZdpi4RyEUk4Zr6c8LKMD7EJY1f",
  "key3": "4D9MRMSKL8cUQASk9RJinrkwVdSs32toDLmuh6nH8WAuR7CbKiYVySyExkqHEg6yidiae3YcpVrc3q9gutN6K5PY",
  "key4": "2yh6ea2oMTR2J8YrWt934kDiz5tYVUYK8ukSJA5xBC2Pm2hCv9wr5kPDo7pYNxHdLid7ac8EsB7U2NRXtXyRLn4j",
  "key5": "54i4z961vGHN9mLNqApdYJdVWHs8Sw7kvkFwY2GtqtbkJQwiQYxdc7U6FLsBcaKyfanR3QW5KzSr6rct2bauLAEc",
  "key6": "5APmna9AtCXiEpzny7AmNwrWggwxkui24SH8AAFY8jJNUKdC7BAiskpcH85zCfSiL4qWqvnsqRLhM2Sv1mBHqaiP",
  "key7": "4LTCWWuPaDKUstYiyyEYXG5opRnvHi67tnd7qorqYsfZmThR7qu3t73Lbhj2XFfqe2VzSG6fZ3p4asWkd6H3YuMF",
  "key8": "jU7BhvN2HC3vnjkAAewXEqhPt2D6zcFEtLZNKxjXSMNBcmfbH6i7wngwGXs4JNh1F6eB82K4QYbC7whtDC3AzPv",
  "key9": "3SzGRUqoCnDS1c3YWnffP3MYwsfAEZagEP2WgseHR68XX8KimTbDguT6KVgMJRgVkBTXir7yBRWQDsiXyL9q61xu",
  "key10": "M9eGBmQ5xSBFtrH3ypos7ZzzrMVRfixsbYPSMwsG2ZtPv9coohnA7ncXTrvvHberd547i1gyzgH3aVGAfjGYKLq",
  "key11": "2BEcK6jHZ3uRZZ6euuMfNBuTvL7cGMideK9ek4FyGzJniqG1dPfKUBcRVDx6w8TRrCPgPXZh564t3mC4HMKPwKDT",
  "key12": "39SnFr1Zz1vKGspG7P8Azk3DaUwVQGfpRsMqkkDRJMnAfAqPDAkc7N5sFQLwScS7dkyajie34xYnTknk1G3sJZ6w",
  "key13": "2drfwbC44whJYk4bz94i79Y7fWZUi9N1yVGhV9LccWk1FDFGNnDmbm1VMVKhkfc7xgJ4gPp2UMMPUr4Gh4pKTnoX",
  "key14": "4TTYoyoiFN7punRYb5S6io7U5rFz6nTz7foBAL4vtwCdh7NBHzJmpzuiGeYH2WGfjf6RrMX7DH3BzeBeh2ryRUJ",
  "key15": "126v4gTZ6n7pkpN3K83UvYMnuSutCo59ovhywui6szp6B9K91549qMc2ScqF4kZPumxyfDqbe6LCsncmxmtpf3Z3",
  "key16": "3sTMxpVCzj1SBtpZAH1xLrSXtYyRaX1NXeStD1vAtrQFhu4xAy3F498RaCogJgFf6tdcUNh7NFgzyY2Uws8RPwHV",
  "key17": "54GQtNRdJ6Zezn5hKuDkc3bHKQ2cZ2JYJS1RmcQzwwhA7bxgFQfvjXWFDxj5sCnw2m9Tep5onpHSxnPYbjSVVgeB",
  "key18": "aJWjjaJ2JU8VwzH5hn1W9jxcqyKxYKksb13PFHSsRoaW9nhw5a4xufBtwRrxThxVXYbnhu31EWBpkwGL5pQKCgs",
  "key19": "2TNBmk5N7emP8dEDvG4MzZQd7oN2kvMEaJxW86CeeJa4GSaTGCDwmPfU4u5XXKUNGeXtcbaw9a5HCLiHHdryRSb9",
  "key20": "32NwKsgjYfKy3VR7HrMMY6qS2pAAQX97szutw6uGsqSZUiGXXDxRCafqmfTM4VfHTBRS48M2qD1tCaCSfJAU3kCY",
  "key21": "5vyRN2xieg6qs19rf2pdzCbFsQe9sDuv4DAMgueBYpRKziQDRRWW11y8Wjyp5ZBQ3AP5PbcR6GZtmbRAYQUoYHwD",
  "key22": "3Su6jpryfQGb9qoPG4DsDEu695Y4dPB3o24pBr6YfjPzEPTwMLbTdZTiAaxz7PTgyamkhMFUmHaZvbfxrkN7KCNF",
  "key23": "2pSBjx29dvWrkw6GcPAkJ7B3PaLcwMgAxhorFeKH2yy9Vyff9jucgpcEYmRuDCA3Mowaf96rUFEgaSaC5vAxXMQo",
  "key24": "2cieGYi3accGiCGG4LAszC5SZaZwp18apdNXGUqn4pa813gvUUPycXgUPjasetRQADgyAYtpDWw3z3KRXYuDXTeN",
  "key25": "2mpzf7HxK1bNXx91xBPdVRp17bto1249AQEv9GYuTzhWr5UD43zCysWkdp3aUWB6n5SxfWy5zVfSX9Eks7WmBHeQ",
  "key26": "hNQfc8T3UPwt5nDWXGVwNdVKSY3gMSPfPSB1KiVJ4WG6gbJgjx7NfqtSY2amXxeYVMCchV97C5n4RURVXP9xxL4",
  "key27": "5qayaBnMdiFjDG49tmNd4dMfQVdYuLhGvxLeyyhuNx56axQjo7yMWeLs3KDrwJAK4UiSKqMc3g8UFXMruPtNC6U5",
  "key28": "3NdM8JYbDadXvxgY6btTC3z4vFQC95kPX92aEiQaJpXWkoYYUyx5kPyPvwjPHAdUWZFznnokgdU5pc2KoDrJ8B6g",
  "key29": "3WGFUWdj8E5pjSgHLKqDcXgq2nEjYEVs3EMjySswaofeDFHcdZvQwPjpg8BnehuubzzbPy5VbDLJryp6ioy2bbsg",
  "key30": "cDq4o23gN25WVxCbPDs5VpgfHvQiSmwCWQEPkegHCnA4kzbzBkCiuG99jZE5Fobr1bc41TSQJp7XhEKJcVFpaZg",
  "key31": "3vCTUPWmehyhpnzHfSH2FyzHRzysuTjHHN4fuv7U4wWiYRors9fdz2jE3ZMaLkh2iqJTSpFLqke2VuWbFey6RAcL",
  "key32": "3sCPAHiAZsGF9eWooxjTMCBpwTgA4VNLpZ2Up3zB2xuvjrFPsr89s6zbMNLtVpqzYE5iTJEC7pxfz1SfFajCjUxF",
  "key33": "4QosKf38idDFm9LLgJjkZugKxDp6MV5wihYecDs6uf7jQxiz2tgZSK72dGRgsWmZbxPynWt6ccqXrYuE6tLfnKws",
  "key34": "3nNyKhj2peNviHDjzQ775XBw72tFAdMGTiTmDJqbgScSBDv24QqgN3PrVS3SJ7g4uQKj2LWwiGSNLdoSf3oTSKyp",
  "key35": "21tupQKrPZ1eLKwFzQu5JPM86n2iNLuE81VQVE3fmizLC4uh5Z6QgqPMDsUJZxuLYeSxrFes8TRBjDobVMFxPBv2",
  "key36": "2cKBfq6qZ1421KtXbnxKLDSK4ZEDsnRDbj13PiVm3bjmY3iBZu1kuQowF25hhv3PuoiGMSzdvxuz5p5DsuyctVfK",
  "key37": "2osHxkRJxee1yVdFCkGYZLamWvfys3Hahiogmnr4APLAXNCs9PcX5WRFYcZNn6Lt2Zp8jEjR3m7YxhvHm5wjgpQz",
  "key38": "gTjCgDH6x895tsYXimFNgEa25KWBTXoJwW2JZeUhx8ZPpHFPsB1iaiqtoox6u42rZnyWFuBwTiAShtJNnkjwQif",
  "key39": "5VXKvvLwfQMRkXE1GkptKvft947ZKW7Z211KnEX3HNUgtu47Vgn1AuktWiZL3btgzVvrxpCtKNu5xHfiaXp8LauB",
  "key40": "5zhRMEKCR2D4epp7Ndnvu5XL8nRiRbg1hRPLRURjQGSSxcRLYJbB8CBCCTvXni3WmXrscTTW7mRPVSwUZKaeyXJn",
  "key41": "3Vf6DZqVyqLW7ozto9NpZuYmkFRVmYN3kpeJJbYasK1CWcxUMs9Wc1Y7w3rMUs7fFqpDrJ7WXGSGoVd5fwe6Kubj",
  "key42": "4tMo5qqRTPZtXDjK4aZ5ztkXsaPS8uaxHHK6spsgoFVukLAkYkHcsK4W4nZT8QPP1h8SjFVEJnvxkut5tJAUz2N9",
  "key43": "3jZtnkBzFBr7AJ3mHr13LqLyV9jPzf8wTVk7mBeihmFdhE9L6WptkVa91B1RirLq3omBkii1qYSBYr6pP9TvBuKf",
  "key44": "4gohSvDQGiWh1VqbVCjG6muB33YxKFXzryECGxXMP2D5oSFGCGwkx4v6ih2RbReHJq1mQsMVv9ZzmAEmyon2KfMp",
  "key45": "2x4ug7RJtHjf1jn7SwsmgbXoZViSVrR5pSoz8WiXTqHJgo8pvEJMzSkRJFC6nDGojfUm2iJJ1nY9h1TCVU3on3cr",
  "key46": "3TpiQFhdHPZekTFPGgEpD7QjNHBN5Kgtvx6RgNhhi9W8xtXktcFhe1WQGuvZtEraownuewUjL9euUfXwRREoc1Ry",
  "key47": "2VwmChjy9GJD7weQRWCYJrr4saDfYekwCyYjSD1PuH4QCSkZk9NxxV81bn1SsjzGwYEsRseVpPJHasDQw55sz6XK",
  "key48": "5P4iVzEkwg8ataWyhxrtiG4vjE5LH31qPgVG7uUyd726WuYA4cRRVQwcGTJkPDkKm5Q1FLt5z8rHbfuG5h83qsBJ"
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

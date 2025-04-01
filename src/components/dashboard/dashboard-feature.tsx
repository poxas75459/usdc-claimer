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
    "44FXMD7HPha6zFPffhFs8R43hY1GP5TQkwNBsBiMc9Fefd3FCWnqMcfKTAFctB8tJRQSkY8FTEGYXjcJ5kjQYF4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWaPoWtwQXDrJVmeRiW6fu4UKctq7MSPyDq3ZsPt2hRftdJqPKCzQCDGe3prUKfvrtzS7U2539BgQaFcJgxjQdJ",
  "key1": "3a13t6o3tSub2W8q2WucYSLVUUcMWD5FxRe7DBDgsZLwNhd7LEdud4TzUDCRkPrmHgtgL9oLbx96N7XitX6aVZhJ",
  "key2": "3ZpvYf9u8iGeuqMfxiPqTqGfGw8mGYEmBnU8jcXbC3aNoQubBhgTW6HcBMxhtKozTPux3JM4czRYqKJLgEPkh6zt",
  "key3": "3XLbdFoAbMjukBV2vbwMikbLrRniyZYNHXo2mj5UM7gKhDDeri6PFT58EAtxHj6z81aRresFKrgUbPRer5AhkGXo",
  "key4": "WjPr2PGyKTNp93X7a5uSJFZSBqkuZzpqi9mXSeLJDfBKwGqJQH5iCuLVcb291Sep3HiGEshsYRWXLLBLq7eKEpM",
  "key5": "4qAjSLEigMjrWUPkRK7dD5PcaoYjTcJ7Y54HvNsTuuKgkyhmXt9Y31gpPqAtpfvpNhvbssjhN1GxWrSkUVvqPsEB",
  "key6": "3anfaP4Hg72UxsDGatSeiZWDfieDCiyHELdvPtbV3XXzhC6jPhQtpNKVDcrUH2rgHmigVPSJoyHqZDDHUX6LxDYF",
  "key7": "4cZoi84kJxymSQ1GSDKyycL3J3ofzkupPKvYwnMT32a4Uzsfu3YG6nhVXKNRKF6KsfA5nNdv7A5avjW71LtSZkHS",
  "key8": "2EgjiY6GAPo8rRBp95j72KKzuqZq9WdmMpvqeHqMsS5uxXNnCGHwFuB1fEkhsq7NPdhbh98aYSMa8c5jKrh3TcBR",
  "key9": "647Kks1y43tE8dptxf3mb1TZtuS1yH2kc2wZDCuNf6AxdfYRQHt2ELT7JrzcjXmCcEQo9DKHjUVG476CDX3wjAnJ",
  "key10": "RTUWD9PLKKVj5kVBDS8XpHi3wU33i7ATV2reZvUYuDgZjZKufmK63Kep9bUG3CgEBcgqARib54DyjH4gfFxPWre",
  "key11": "326oDTd5j76rM5T36UD5gFkcX2CqS2oeJTc9meBDmQkZfifewxhv3gq4xhV4SAV3suJW2JXirPzEamaAyrmUa26M",
  "key12": "5wShnxYymzyGyiN1ZYQGKVAqP62NLRmDoVr3E71uVqRdpAcdxHKdxjbvEK94kP8b19PYLshbCwk5FEiD5rcdyXey",
  "key13": "52WvE86dWRtZ8c83aKntVqyMfESoheLcwfN5Xv6QNvoQyNKcnV3wm5E5rQkjw4Cw95FWrTLdH5nkHAuoFqvKtYrg",
  "key14": "31FffeTKgq4hVWvdvSMbcwnWuxTuzcLmRFA1JTLuKSuErxPA4pQihN215pYd4VwpS4t4WW5py4eNkqLyfPuBs7Z9",
  "key15": "rCQfzCddTRukmhVAyLWkRdbfpcwyAENbLTduSUWLs5hLW79HQGEmndekuHcGANM2Xyp1FjGxbpvvrpMafeY96Js",
  "key16": "5dcuSecn5f7EWJJqB7UDKV6bwGqezo56eXQu4xY6hQFyzXDhCGM9rc7SkTpJbawFVUTwXz7CgbidudFmPMCuvpJM",
  "key17": "3hw8m5gMJ2s3Ri4K7sg8Y5dsPn3KZTMSdbjE2YY1SLBk7fGsrbbTZY23aRQ4aruGHyM339G9F7iF1XseBqeRj6JU",
  "key18": "4PwRbfmifcsHvS6QkjL5KWufgQWACHqhAxwbyeHzmtCW5cTvCXHjbNNz6vNY3sMKBa8niL8Na4HiB27wU5xVitac",
  "key19": "3rbvcchWkNqwfiV6zq97ggv6TapxuxzbECkry9LioQpkefdtPcYM8cAayP26TDvEMutm24NscJLp7cGGq3v3QEUj",
  "key20": "VhCwgUphHzVARQYjW5PiZaTDvQwhLyzmDGbimwh8wpsEKCCekyyWjWDp53apDmzAn71H17cTsHwtQgsbeLnffDk",
  "key21": "5supUK8YnN24cA4hTyv5rRB8Y9GU4ZwbfNsDW5Hy2f1fu4sd5XucsjQUvLAoPsYmUFHPEoupVr5Yr92ZxDuWLFbh",
  "key22": "4xNt9LPCQdioARikyAjpY9Cvsb4SPTVYYRCLyh6mXzdVrM6Mf7C8693qvN2YfxYTm5qBcdLiMqtofZVuRVqv4tme",
  "key23": "omsNvvSpivdnZcF9wUQcwVRJMh3HYC16njx2YPFazSwd3DRw68PrNbWhsweDGtad1JZmXwF4XuHnfu5F7YB2npA",
  "key24": "DqeDMJZAfdkf5D3vE2kjKGvryXqPsBTHB8RxbgwLTsyiAUERWrW5gXSRxNrbASMBbby2q8hf2TE3gVwiHFgeL5C",
  "key25": "5jExwtbbiAdbsU3tQpikZLxEYPRMRLbBE3Yw34B2kTHpPCeWiyZtGTkBqXAkYY9zeYMMEcDyoVw6HACVFzphDNpR",
  "key26": "5bS6uEj7vVh7FEZBWTpzgtQmdFS25KKEkjTbPU5SsXckHjxqzskEFtxxAMov213k5TM8qMWWLKDWTrXpfSBU5EKo",
  "key27": "tfTZiRkiCwYKqwAzoNyyv4gPE85ScFZ2cHGKdsCwrRsyuvVNLs6pA2y39Cpi5rb9pMTP5hykjav1qZGwAAJGbfu",
  "key28": "4GDj6ipbaQ2S5eV48oT28XLFcbHYf5Px31qVgireHtYAgT5xb2HpEXTzT4zuhxNUJXk9xuGQfVXWNx7ke9HKcRQp",
  "key29": "2nFJFiocX9veYFtC4Gx67yDbvtQabZ4onwE92asVKVrTCKzbTbjUUekGP8E6JiUQneMccFLtr9Tfa1rcegBtxwtQ",
  "key30": "29KZ3rAPdKaZjhB6irAFLGsJwDhvvwovWzBrkY3iAeutUwoB4ZVH89iXkwNobfRwMYwts2yLhTxF5jK7wdPCMig7",
  "key31": "4dCaweMcjo991WbKyEAvgZWyHdCrba8KksPpB6Ve8kenm3cjAtbwMQfszYmLiuFeYKZ4bGiEd2wJ1qo68cJvzSyJ",
  "key32": "4iydCpvHU1jD5R2EXRT3goLH3m7s8ekzx76eBz1n4zx8q8BHkuWDesz2XG3RsgTPNHtoPUWc8sT88RGn22L2xRje",
  "key33": "53VFLdedwd3qSjnF51UumR64aRoUXmWCE3V732R6xtZQg1JhTZ63Sc7tzErDQTPugbGA2VxXeJjfmVWAn7KHD8VN",
  "key34": "2rK241MBDeEzHtFHiAwbZYmbd68DtAtdq2CdMj37DBnHpNHhbjSS7Sxy8mB1M8TDMmhS8sPzYSSK8CaEAFVp38d8",
  "key35": "3eSmqXKft8DTK7c863XPrRXdWuw4JarDTuNHoPEgipSC3hVSzg9FRvyxCidbZSMFSpxf1hWMwsAHwRdiM1mgtDq1",
  "key36": "32jvdsYb6RMZT2qa26ZgY3M72RfRGpzDDFYSTydrEhzVckfKhvg9fzvBDZYdsNADVR5845Gydv52errwFtGUcTLm",
  "key37": "4Tj6qzveTiA1ZhkpxncJeHxaYGoHbauuL7Hv3YobAZWQoNC22pn64LfwfMT7eKozeV3qCodWYC3QkRC9pKCgRMEP",
  "key38": "2fJH8S4YVK1FY57gn2T1CSPjgN1QbVeihUKYWUmwAGf8sS94hxi6FmTYH1vf32gPek98h8icQFGi9mCY5pe7ngYE",
  "key39": "2HHwSauXLor1LMrYFZiEzSFwmj1P2V833DfKFFxjB43qQwX5ZFSS8dBxnT6boLbSrxWpuu7nuD36XXBqRsMCupET",
  "key40": "4XiVZ9oAgcHcsLDozXJA6UYPB9NHAPQrSMHuEuDF923WHzTTs1foEWF8w1gc3kUpANMjwgafHutbqcwnKJAArvFs",
  "key41": "216MYd5pQ24DWBGZrJzypUMJBnkEBbo2g5Tq7p6L9rpqTaA2t8KphqJ585vTY4v15e4J1LX9HM6oLmubQvcuPkr2",
  "key42": "3HMwGwFUSDsDHP65ubzVuE45SJEqFmZpW3AE7wq3QPAunHUfbCqtKsQV2uJh53ZwEJhjHkTBryRE9gdisJDAiMeJ",
  "key43": "3bG3wr2boUTd8EqY2n3aoNzagRadZXMWusg9RnjqDK2fW1VuiNsrt9vC7yy6GoBXJaoyapVmY3NkvgD6jtvCDXjV",
  "key44": "237Xbq7z7SiACVW8xLNSft8bqhxxi8nv5vwTAxkNqef1QgTDkz8nC5mfKwEysEw6Cavyyso1P4Xqfvn6wChVwVfp",
  "key45": "3avthPh6TGRuT8pE5HTfi9Tv2TNpWfeqHW88y3ggExLc8dY9LeQdrtQhRhGzWCyN3zQnm8rTmVC6G6US3bcNKDYj",
  "key46": "2qtMaCUdc3MSxWDromg6PLaQaV5Q28dHfWBytgEQNrfrHByCe8NxdLBDACqGMisQyPQEhUQni8BrK73wdnbsV4zw",
  "key47": "4zmEJyhvpHcxPTjG7hZ3amRYMKT2ae5k35MtRa18XfTJkiTaA6Q3WHffcBUfVjCthmJWdbhunTmVhBCF6yCdNYWB",
  "key48": "5knVvaB8YYG3YEe2rsQkekWy8majp7K39qw5tWw82bbh3Stq8Lm3gkoKfvvmXP8HzRZqTYpZqEPuXJihh8fpUe6A",
  "key49": "4tYhps81KBaPJeZZHqKw8hmtxEpnGiqq32dWn12YJGGfRhMHyjq6ZE1yyHHiRtz8HRcg1UNr7hxuWoJ19tYCWq4v"
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

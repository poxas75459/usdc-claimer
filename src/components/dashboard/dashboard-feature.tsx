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
    "2mqWizDa1UKSE9eAMjcidNZofSFsCWrF1Hscw7DBBz3v3kvik7mkzdNH6UVe5QyWxYPosmdShi5JKM8hkGN65hjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4msfmJFWHJuLpEHWH9JCdjSb6w2vsQbAF6vanxPzv4XDg9ehVVMABNfJrGr9fVDbZJafKqEhrzuS7cEEHAe4S7ba",
  "key1": "4qoquSPSYLP3Xk35Z1qhJ2EvxHjmcLsQV92tXjqBeXUk5XaVidY5iyt54XieTQXBUtaCZJuT1AdsWDSEW2aQF9DP",
  "key2": "2xMvCTPH4rr462La67zDbokKAb1fBL9zxRNZaHGNv2q1k7urKguirgatWdj1MerKNbSuazwt4EZZBdy4NQ9StVN2",
  "key3": "2d4ZQ1x94MVtVpJLsdWDCHpbDVhbsWK8Hzm39q9DMGbTFJqS1hbd2uMUU5MwSEcnqaQWHF51hAmfFTHqAkyxRgn1",
  "key4": "2tQ29LY4c7vfEnTVUdhxyDnr2qcVXJAUxAyBNJ9VmVsUABwqWr5P5eES5N9nyiMTuJfmoE2621vFybmSXDPVfqiE",
  "key5": "2iCEngSaHLkC5ABrWUZMydRazDndvBw5EvecnQb9mNa83aS8j645PL5WjH8siNT8e4UwxAWwhpnPG3CYsd2Tywsf",
  "key6": "hDLZ3KQiKviZhgQ3Md8f8f8haEe7JhwzPma5TFdLTpmm2GDcya129e5v5ZLtVDk3yw753SSph5bk4jCcYTRPqhV",
  "key7": "64USdzV73Kux6YDjpE9uEsYRi7ewZxLuVDsSZDJ5WxBFNEsESE16zBnR4ri1Lm2Zdxow6SH7x6jibEsyMyWTU5dM",
  "key8": "2iaJpTZY9XBkgQaSii9tusUEBXuvf9YAccZk5prdd5pvBERDLGGBGTTn2T31vgrAc3rPyRyQezn4taCvjKbyRoaP",
  "key9": "2oRJk2NpP9A1VfWZYgMhrqcSJkAkiThxT6stasivEPaZvxTckfy6spKdh7mWavU5KZF7fuk6EKrAUe4i1PkSTFTo",
  "key10": "3J5Dnf5uMDjRFDo41sxF3ksbNgvN7CjEejLY26t8dapYMsyU8JQ27iKzAba8ezwu6KUnRZkgM3QHQvWQktYDoGCp",
  "key11": "3udNjjpyDMGrkPHZsEAVrFRuwn19YyvXrV4mpQv1sYsry11HSEVWMzTxYit9GtUpyj4nV5uGVsuGEys5C8tAD9qg",
  "key12": "5fMA2AveGgQmTzfjqT6j6wKqwEBs9KcuuChs4EeCvxAGV78RERCaVaZ4QQ5saQaypNWUbF98Fk6CGrorzexH4kCV",
  "key13": "4BEYX12fQxLvSUFzj7pJK2w7MpZseoJCVvJ65Rp5CjLsDZbJcY6es5iDNovUxDVif3pDkNPPficwhXRng4TtVYSG",
  "key14": "3d8qcdWtixUeBihTZ5AphbS6GoXbG4n3pqhqBaBQbTKpGGRbBB1Hfqthp9SWY2rnUnndPXgjYBP3U8xZqeEnk6C9",
  "key15": "ZHBMTcSPceNRSG5DKamYMKPWVBWGFy7smpraHotQ767GhyN4H2rBvfwBq11qaDEAuFo72s2cRETyJw5QzkGnbM4",
  "key16": "rQgKgd4sjEh2bK14uHLw6JxM1MeEDFThAKxP3qSeBVnkXrqyTCRdrJ9aKjqXxv9PDt21x5PASd2kPU843RXp6Ay",
  "key17": "5y8U7BpmHpqSx4bSRp1u49g2SLdm2NT4gRRXUHgUZbTdSr31PaVzdKsmtn22YDCghLgPrXak7s9oUa5ejg9BSbgH",
  "key18": "4aqf1oRNKJwZpcFXa1YbNXiawdMHdSjuLBWeeph6YGeCbmdnWbnZvyrrV4CvmZFcKdBrzVCjH49SyEJokbqGRTjM",
  "key19": "4uzj9hUsmxcjwr9QEb2iBSMBtHPTwp2azwVTmSfrHFiNp7Pbs5SvDsNz4zP4xcxcLzGh3RDYscfdNTUF1ZtpDRwm",
  "key20": "RVU5BofT1GjEA5ZiTJxenNr4hVGp3kNbVJRo4vVf57VjpUR1knXuVAS5pNj8GHZ3k7QwvyqiKXsF1PgzYiTHw9q",
  "key21": "5sZmnd822SbZiWHYydbX2vPggvmmoN2YzxPsb9LJbvS8EoFxxTdqxFbioz8FL5h5oZ8LdroXbifB5MeczZ3T4VXW",
  "key22": "4Sb42tyxkEqwQUqT9hsMoP39jLm1qWaRnkTpdivy6vGMr6EwG8oxenq7f9Gtk32aVL9AdtQBrcXJTJsKru3YxGCc",
  "key23": "4yzTNATkxqjAEo3GeaCqtkRjCA1RFMZTGtW8VZEoKmTmRx5d3h6wMBhtogkGPMPE4U1G8hXFuaT7FwWn2sgaTTBP",
  "key24": "2Bksg7XLGz3jwHmj9FJDVfYEVfMbhE3wJUnvaoGmUe4X5sGKRqPJPp1VJnqXo8G7qP5SBGxFYvdxioxBoyXTddDW",
  "key25": "2vgk9pXQrbF8ckE2vphfiGHeLUGfGEBwb6zV4Z67rGiynzYeiUUZvUHY5NpK9eqwJavKTbGpSxwK8sfQQRAKyZTp",
  "key26": "4C7MfMuUGtuVnoGDttMM3xc3KtmcEghPxoDGE8zDz8NxU1J2dxFrWf1b6NLhk7YQpvKwWKiC6Mum24dzPJtUxXZb",
  "key27": "2uWnfTWscxfdcLjW9xgnoPKrLnJY9AxxGrDuSzFTwSZdLiXN5JcnPWTWUjHoPGJPS2tZBeouqUpAvXcrGoqwci1x",
  "key28": "3yT1HkkMr2SvahYNPRZhtfGJuHPnKXwX8yq6Qwz9cfE4JrYsh7zAafTE3QwpUjGXCKmgWJkikYcaEjuaXC5S3b5i",
  "key29": "5tapYZLYWV5AmebDuXB55ZUitKLVH6874np9YM8h5eitLY76tteyNSiHETDAbpEnvHwkG93mQjTHBeERCZLjwbjb",
  "key30": "5PiQPFCkXpPrQhmBL4TFmgJJY1bUHQPpU5y1ADncg4J19qQDph8oeVLAQPF5ViPJTKjeQoTFEicMe9X3XvECQzVC",
  "key31": "52ZXsz8TTYEzHWQjmbEshnYtntX68s2ivPNTnvhnNUztb4WDxDvBoRhYiGToqw1ebcHhbJ1pdQGKoaGT9SP5mkyQ",
  "key32": "3Q9844yqCk8c86PUkE2SKXQcP1G4Uwb29Pvm1jyfphpCmDDmZkruB27br5mQjWZYWFYX7TWd977htW7hDpxZ9mx2",
  "key33": "2wm6UTApzQzA1vPPorsuaQq6mBqkMzmHDCrDHgAcxB2vzDuRTuPuMpgQPcz7p29NRG3JPhj4W5HKrXnyXBGmQ3YE",
  "key34": "2q4aa78ZNXvBm6h3BRCvVKAVoVTaWXKpZnKb4AtzQkyCzM4zkdMBufoCTQavDxUJpVwVvqaSzD61MbSVwoUgxpEP",
  "key35": "66eUS61sQbTR3wBbQJe3AKauSw3q4Z329YtUkhszbCEG6LhbSWosG3CRd1zqijAVFtPcpvviiX2akcumx2Hvmdhj",
  "key36": "5SCSvQEv8cWxdzbiUzEgpsdkGYkWE7TqfWcFWdHwL3gGbep1u4eXdoKVfgfi8bCVUyx9aUz6SPTBxnYeqe8Dei4X"
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

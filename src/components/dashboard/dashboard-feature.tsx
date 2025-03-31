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
    "2a4dB4ajiw7DwU4e1mMWuk2Cyohp2TqMgNz28h4oXCy3sibvumY3g8kaYizHU11ShXKZB4CchD8uBXoABGFPQKAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f6rBwSCkU97D39F6aTABRj3sswhkWTxS5AaTdzZyFiJSFFsq2P7YWSL3ovMAcVVap4JLuGb1avN1xRsu42Bqo3q",
  "key1": "uH8novxjc3TpuUYpdDWumigTtLA5Ty1nemH2HMapgSjKhg9YTMab7RPu1bqr4mBthacHLDJdjJ9q6Qcf8Zhs4Vg",
  "key2": "54vcd5L99tg5KUv2CtXRPsxGoLGiUChs9qtrFLxLWcAXk7kwHsunPX4pPnKqFk3HrGiSfpHW3aTjrLuNH3uNcCgj",
  "key3": "2htbkCSyt3RsxTBPwn6E6n6xhbx3ZFN9DK1ai3fgiYVaVxgFZNvDxjQHuGePUTp2toPcpsvL3WtF2aWTujhPM4Uc",
  "key4": "LjPzUwJkbMm4ZauJRZnLu2YoYiJ65WrT4TMFS94ntb7opxh4iQfe5zfTrkCJHZEzPSntqwf6zi5HJVwTHiBC1Nw",
  "key5": "3XdigAaxjxCLQPBGbuBkHi45tfTPQzfUQrG4vRUr6hwiiExALNoAmnsT7DChaj5HPWEj6CpGQMXqdXpKKPMdDC2W",
  "key6": "63hJBPsg12ndGhdqQWp33nJFW36CtRkwHC9XrUMNn95ftSKcr7uVV3PDskNTsdDxME76uJ1aeKZuXMGNh9KgUs7V",
  "key7": "32BeTGsCwTE5BrVLgauxg7e8Z3PmXzV6tfo3T58QeFA3XLnpRZ9LyVEaeoxU7sqpsCw5F2G9hnvozu9agMcx8vJD",
  "key8": "5PgANhAMsgCXivw9Xppi5k2gDLx4jCD39G6yGMfGo32FX5AJJC2DkUAUxT2haPcu8DbRAg6kqVCtv48QMm5hrTrZ",
  "key9": "3qUvkNZmnK35a5PBx3ioAF9wT2NevF6sUgzuX1xw244yTidhSY7qZzN2J9qvkmkjKyKGDeHSLozK5tMz6QboJho",
  "key10": "66hMcGWVgv9zqjWe8pMPTsN8abfSsMzp2vKXRBLKqJC3KSuT2Y7pd42dgccZ9S7rx1Pw9LmKPtqJBEJoAurRhiwW",
  "key11": "4WWDy8zo7CEgnDwL958pj8waMKVtJYF6FznSqioVb1Lpq9XXUDYDYR1KYB2eVoykdS5LH3o8uGePbtTdUG7AqmoN",
  "key12": "4teLJ8tDo46ZtyvgCseX1N46eztUp9qZwWwYD7PD5V6ozX37hVtMwvZoRF8BDvUHQFJJh9smqGG1aM9ZcU7eR7qZ",
  "key13": "CqHF6X9KRT4PMbJWCJVuuZP5XDy1rXQjDAnUrYuHmrRaWTYkzPKZwvoandkTtkSRrqTGmSWNA6NFzGjfPpqotJq",
  "key14": "5J4txqHjSgJJgyh5pNCoNWPPaEBUYQtVtLwdw59PHjhhY83kjYmR7FpiR8iwgtJVPuVCWABYiwYWa5hJ8CGugpaF",
  "key15": "59qxieGx6vhZxthqd12TkLaSihv5cufEdjQ24VNxdhkdWEBz885985pNahjwF8Nn7ofrWxyCTB9jfhiNF4zPEmUu",
  "key16": "2cK7XuwicHmBB3iQxR3NZKE3tRBm2UdmoZPojXyagqbeKfQHfACmPs9hKqUHs8TmQzLpakyh9jMd5iwJfd3wwaUc",
  "key17": "5QohNL2zVLyWEH1ngwhM7o3RwjHPn1rzcpsThvqWuPYi5WjitFiqBCVCCXisnYLTW9QWR3VTTZ9zLtb3FZRxZ3PE",
  "key18": "3B7KQ3QCD5W371Vc6gwt6NzNBCqR8LN95WXHSdfNcsfcWJmBdH4qv7Xa6cReWox3bnBNMuiSRQmZghftUGEEpr3F",
  "key19": "6aFzv5xV6Mj5LcfLn9JgwFEUZ9TX9yaqAHdgyJZDn5nUQLe5Xm317iJ3gdCRsxPcaf33ZgHNc8EtDRCo9t6vu4z",
  "key20": "2gymswzuaaBAEpFypzp7th59szPuVBPGN72sSDSgNvUQpUTW6FZYk7m9z7gShHJCBDvtCXPTFE9qTyeC8ZwgfWGz",
  "key21": "aoy5x8GaDSW7thRfX4G7mWAVrGtiVG7SU9Q4hk4a4G6GYeLE22SnsXUNbjSjwrvx9Uz3q4zbnZCUuvgC4T8gQRf",
  "key22": "2xT3Hy2Rq22d7LyvJQcA8yrmHsBQD3mm3gTEJzvhW1sgZY4edErQKdFFLmgrLdRB5HLfWq4JiStgHmhkeVoYcQFV",
  "key23": "HquXdcgMxcpuVNvHrVUARzMj5UjALDykra4XAeTXFNGkx1jeGpiFn1TByf7kTKfjDMhcajp1jLfce6eS5sv4UoS",
  "key24": "3RH8yiMyLd2JiSBK75db58hhhxKCXExrYV1CKRCDnaxmqWi8Qct2qroyssHMCpTL3AiXmwKrS17GFVeE6pCx3aXx",
  "key25": "nsZc4ix93bLMrLxRmurqtkLzeq4KxrTYDesNEcL8CLrwHDFDw25m22faecJM5r6rbsndwuwyPMznwmPQCCy7QPW",
  "key26": "3T5PZe8aWbsezHtv2WvZJh45MLV2rbM4QWCvYak2d3E3VrqDgo19595wJpgkc5TxPj5erhCHknN9G7vYiYUevDH9",
  "key27": "kLjA24xp4a5c7u9YyBBv7KNK3L6NUCJsZHWYzFGM2vQBeVoeGmrYqFjkaS4cGfVShepTik8ZqqDyyzYP7pGw6dH",
  "key28": "31H3yuaMtm4GQ5oW1741RQLvdKij6yrii2A8ujRMH3p9SyaAPLZonqx3FbRDod4MEa3zAAmjHKGu8Eom1FLELpjf",
  "key29": "5sDTEQUyqoqi5PLKpy3jPocU8MbaQR2RWuL1WbbUjCF4vqGuq7pWE8JUXwoxpeBELTRLbdZSaP8BFHE2Jm7Q2Mzg",
  "key30": "3JmKLmj4yokLUVvs4RG7dXQ4mLYSFAhUyTh3Mm1HixjquDxFWVcTbGd3GhHrbvaNgUGZu1CBgWZqT3oAFfqTauyd",
  "key31": "4fBMGgoDDWpsthSXi6FSdPcHxYXni79avYq5xy7kZUPQwqF2Krqb3Vn7M94ZDdjT1GH8w5QBqLQmc7yw4uVhCD61",
  "key32": "3FLatNpPJ2Q2oTg4tKAQizW1XoEx3UnFwxyWxMJh1eY24wPgRC6cJ2ASoZaLHndEiErfugTgzDD1WhHVwxRwqz37",
  "key33": "216MG48vJGGvdXAx17obH3EMUpcUAzV3t5AWgZfGHR3pCriojzeqNGtL2jj1LidweQSSLS49vdUk9o7wVfTKxFhF",
  "key34": "4E2D8xWMYEfRSxh3WnvEkULFmMPLkSfgYJc18WrvfcF1Sq2UWCfAgam6FNBmBNbLMekgxMY3eGnHuGyeX6c5eR2x",
  "key35": "2mGcAjmTVeYgBsn7EMQpWH3HtjVEqZLKd5yHhmYvdaLv2r3CoTsB9e1RB6rcJ4dnwkBmHMfGaBqig61morPokpdr"
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

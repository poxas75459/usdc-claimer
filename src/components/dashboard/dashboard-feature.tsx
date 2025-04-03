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
    "3isE35BGgD88hBRyNMY6DEDt49zHaZLfrPZ7FpxGUK3RqtYmY8UNgkfdTRVbicmuXXEzopJQh1zHFyjniajoTjYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ja4AA8924JEAnV4z5wEqQU4JsKLaGuzdKJ65kLp13vBNv4MmgtzjNdBygUDFoDn5m4kK8pwbRKZjuxFPg4ZSikj",
  "key1": "5H51iQorU9puKzLavrLNJNMJSqgsDKXqh852ZFEmT18x1LBtfq1nT6Qjc5VePkWDitKFbDfXB7mBSjajgJD4keae",
  "key2": "29BprMw2biF6hqvuMcTWChfKrM9osFzhoZcqxxUZ2c9boc4moCbCMo3pZ5T3shVY6PnQrKYYfr1YmuZUacsJ6Xw6",
  "key3": "mhDrj6gzjHvUZKtNDbxer2uuFTS7V1RGv6CuqRP3y8wURkToragMRNUV2vhBZ8VDZzfMxYvLUpfbEo3uMAhZ2Vo",
  "key4": "2KDwSbS6v4cgAUPLvc3kTB73gPy94uiEG3tK5RTQUbxiKjMoN6sbfPigcJaUmsWAAAdA9uZ9XsFUaHzPdEee8EZa",
  "key5": "3nTGJQLWsy3LFre4yHCRiTNWp9rkVFXrJAjeiwVR4DF4hwAg24MahRdcXJJkaYNo7n7wLAYnMmZgWdiqroECvcFD",
  "key6": "5WYmgJZ7mCmfXtwpyozHfG16yXaST94qRj3hGAerA2JJoB3cnCWuTMtg7amggUqVDaLELmE2k2Hye7jaYDNKKBRp",
  "key7": "4cZ8ZVjZjH78dCZxdPAUsbJmv5Ntv1wtbjzJJvpqaadLFKqDGzPWM64KuLGtB4aoPLk1ibUU42qqS7zgPbXGxXUg",
  "key8": "5BgcmybKyqQsxxRFnhfmi96TFkQUc7daus8d9kDzZrvRGXJoAeSiGoPyVpRUfgAsBGE5B9LZRmnjRw1qtBegkvjE",
  "key9": "4rfcEbRGtRkdcpytfrJTDEDrfUBC6C3tRbFg3kX5vyyhF9fYBUJCUTRJSDv8k22go4UjegQSRjD92KfvcfNAaspS",
  "key10": "52JQJpS6Rb1tMm216HsKYoF4kMiQK1BTQaECqJU38M751XTapoBFiYqukGMHyCfNFCA35zdk62tCwRPsdU72Wnto",
  "key11": "voNeTfXd432nWBYBfVGXxwyrtKA9WLE7wCARf1GPkugEf3VqpPo3ajTTcLESFkf2xG3Tkvgr6VCxuPgasp9yWe6",
  "key12": "3MNc34HcztyMvqmUiGQHXVM9X9GLHACGtZidLijQbDh2EVDPaA8dT2UCthknJEsJKkr1ARtwNkZU6U8NKQan8hDV",
  "key13": "21CfWMQf4MyikWCfJKisjH6jz52kyayrxFJZoPnzmenTpQq7X9UFZBT5ZffGs6eTuJihoUDKktcPthX4GGjXNY52",
  "key14": "3Dw8UzcX1d5hLmdaQxMB3PY3Mkv1LoRxbVYCdaqS4x8WNy4nMNUeQRoZEQSWTrFuwo35c2ejGhTp9GMwko1yTdk9",
  "key15": "4ghJqZfcEYZSwQ4xDJTefMACmS8YjXHtXvJAyR2GpQ4w9eHKxzPuuSH8MGoMMu4RXpfbpCehunb4VDWwve5hjfkY",
  "key16": "bMGKyt697QHK2KkB8kPDQDxv9D811T7fXGXQWKk6KB2JYuqr6ZC2mLa19vbjHXpchhNGVSTzrhsQgq1amuifXuv",
  "key17": "3FWJTpRNo6TXVXLnzJsL5AyTE7qCcAsJcxycnRHAjxmZ3ofcmHkF2heV2RfARREZQNySiWh9mUP69GpaULNJwWEP",
  "key18": "2VG5Wt6MUG6WZcRibEwdxxPdgUJUaxvxFtv1mb2e4yYn4JCfwo5GMCvKfmxt7G8v2datYfM6oqpBGn1XYTMUgqh2",
  "key19": "3bedjaBuxKxU78gyH2YiVVWdhi5vK5W4XJUyBT4sRfKymvx7WBigE9AChTsihEE58uVPuxHYUDfs7TRHerNrNQGp",
  "key20": "3W7ceUNKRB5eEyA2jdAovGYdp8vW8Q54GtTSDFyDXjy7qBmkoRm5SS2mnEwvvwNZEBoLzMP2aoq7tSh63fPVyPBG",
  "key21": "37qSS52445hKUceWzyLgopofkQNYUZ81HzTHXK8XpjYpGbYVAUcEoYJdkret9wdoaDnqejKjnCSP2jSNwoMGviwf",
  "key22": "3s7tontUKdJRNFJUMYKosS33gbMR2DgePjYjeyx6zqRukx8CDwQiHLM22aLXpr8F4BWgMG4Jb3m7UvybVTEFiKaK",
  "key23": "J4nWiqzzPCe6Q29nKvvTxDqEFfxUvxAkgvCCcELdV3UPFuD2pSeEZyn6JqUWHhFdeWDDZiwUudaMXLMuqV3qDxD",
  "key24": "5Kod4HXGYnEVQXRo7MzkyZREexodubggeENpUPLqX1UQirYCBUnBSK9Q2a8h8egWoHW98ZygQtqVfouBaS3gVVvh",
  "key25": "chAa1QYwawBxam2jJFpsrDkj2qZAB8UdXxBC5gCbR4S6FdkfoLCbAhmVQ4YzTgm6jXALzhnUAPRe7FqseSSUSWc",
  "key26": "p1xVPXNB2ULwzrbHjyAozdSyaACzVnFDJkAG4TwnbAm8jmqhszPX9N4KdKsWz2miNPdX1veHRBj9Si28vRrT8r6",
  "key27": "5GTWfrA1wt2DtZUs4yVW6zGY6BbjHCBs2bTNndCrSn61WAeTgdpRAspYqFM8DDVHCBSWRpyNXfQUrpHzrFGr3KSn",
  "key28": "dxBk6jGsrZMoc7Xqzifj8R6LD6iCa1QVuVpPTWVBg2AR12uMTXP93ESwsH9DVRywRDQuyBaak8i8CtTCQHxhJ4z",
  "key29": "YAJnn2K919HVhubbv1Bvaad8ifaSp1kdSwdtgALcLMQt6DmGux48LxZL3rN2DmFGhx7YXb13ojDW8fQ6eTNqnCD"
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

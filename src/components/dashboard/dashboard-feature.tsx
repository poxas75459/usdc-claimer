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
    "5ga3DUNWjUocZRoLua6ihHHyi6Ggp7wK1KDapDpYC1db3oTi6WWuu4fCSVCwEGSK66c7qsS95usg8AquFz1fsVg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwWvXwgWV8DDGcL8mh8DHPzpqjNKLdd7Ms7ozV6PAWQiDUKoGapotPJ75eudCAsiHEg9MRpeWjGoY6uYbZAVSds",
  "key1": "4qoEs8JPMn5z9MVR25ShmqdpDgmuhSGTipT5Qend5taVTXCuTR442hT65Lm59Pu5KmkrmeqsbmNbNECAPVfexRU1",
  "key2": "43UguRs3R5vGKYxfh5KbQVHFMqBUPu6eeXR1Mk5hzhoeDZkHXs8VHCA1A4E4Psr57BinrxdtpJR9Ha6kkgN1DiKT",
  "key3": "1vtXRWdkA2BHTCEGGveJsZYC71YM3FgZyLjzJsk1X8xjyXunNBtxWwNh4Zvjnnst9T1JfSNQjKpoY8Xm9vyq3xv",
  "key4": "dHjVk4ADWZ9UdYbRXW8SiwyX7jMLrp65BWteJzUqiqH8RGRjdTsdnBZ4dcse64gDFMNXyfFhWm3YacpwsjV7BBH",
  "key5": "iLZphdAuFUo5BY34P3KGic3PhdDjdguVgjw66GK85rKcXJiqhqYNRma8ZUsYGTBUDo8qTmZ451AY1Ddm5eipHcS",
  "key6": "Zr5LU5RuRWKMEi22dBni7EbtnhP3dywNMPGHH7beBzuhH37Cy3hztEEar2ssns4MJSfu9DwftAqspZuQkftGZHW",
  "key7": "2M5FsZue5XpDMem6c1EQ5rQaz4SnB7WzrqiEoWir46aGPGA2Xi2qFEaENZHfkCb1arTSyG4iX8mSgCgXpQRXEE7F",
  "key8": "hnDHfkTkqJDdGWNE41RqUEuDG2ZQyYaovuNa7R2iAvnH5rXyJusM3EUNFtcgUz7AxwninMsmMHGJZf5LS3366HJ",
  "key9": "32NCgufUTwBt3U4thzKGRziycRCTY2F4kNsbFrpwgnQD2hY1x8cEPSmBoU9aK2n4JQjY81Gs6QwTnQpmBmKestUs",
  "key10": "3Jw9bNkGqKR3cqUbNR239APoy4iovivnR2UDz8mw2gksrrZMkgg99d4nxFrzV9MgWTj6eM42X8WDUhGyLwLysvpu",
  "key11": "4q1mYB2z8QdvN8QxgM7A8FKDYcNCPKqDgFgjtykra15kwyJfZ87wzVX5QjbPGnEbpMCAcMnNnoGhvfRKdRdYMHLn",
  "key12": "2A6ucgGrZH9X2pN99w88ruRqTVUkTm8HshWKfBBadfxjPwk165HJhrRkzBfCEzCr4KgQn1XewikGnYfB32utEW9U",
  "key13": "5aUcVTxGz8He9zrH5VXtod1a78k5MzVwzaHpZEGGF1TjTjN5yiyzgdvYcrtagJjJU8GiGfAbQRHcFZBKyuxREVJK",
  "key14": "22yvLXq4C8KeWbBi1yHT4AE8zGQhPVVhkWx6LMFqYTpMxycvuB32iMJ7Knf7kJ2ufDWyNaKRxqg3isH3n4V5UCrP",
  "key15": "5ezc2CtS5srGYENesb2J6Fd2x777mrFC11UuhNxYsF3BwzhrXttG93NuvJ7g3uz5bzZRNQyCe1ZESVf3hN6oB3CC",
  "key16": "3p3baR2bpDsDuny5ycLZxAnH2T69xpEB4TFo2dRum8i8EzAy9a4R1gvkUnEwL9hAd1xFuQ8AfmGMs2g5k3sg4pAo",
  "key17": "49vC12cEWUczW24HrX7kJ9aCs9P3HTzsmNAjkYWN6QmfNer7WhuSBiEfV5iSqqgaz76py7Y6ex6QWK4cBb2UR6mZ",
  "key18": "3VN6LQZHok7WDTLC8fQVEmGbu7qcWUgumrLSXMWRUPa7mWy9uoZGWUK7nCSLv8vaPBV2xBvGLim6JePRxvxe2rhx",
  "key19": "UV4iwnmNH898A7BgWCPLgFVicMnmCCTgXL5uANimoKQddDDctJEZFCBTMr72VbrvD78Qqqc4a6cipSGuyQJiojC",
  "key20": "3HoKpHp6Z4w11fQ1BnpGNSnK998igiR9dPEQKo7iHJnya7WU3PaVYGRfmPHmrNtf7xHsf79VgchnqSxqhn4MqSL7",
  "key21": "D82moXDzfxEjD2UtXTE6mvWBoiyYQ9MmrzTHLgwfHqbFGhixVxg1hHBnv2y3v5RNp1hTc8kouCrbS68r2cjx82H",
  "key22": "2k2kwHbMZBxwjBH1Ea8bQVrqBkV4JPLE8yiH3BFD7gfkHbFBANSbj4vaeMK98UWFFa1VCEnDqi9C8nDT6SwAnHrR",
  "key23": "5ntUeqWy7H56mRE9uM1Pv8w5sNVK15YAdh3w8cPcsYFrPLdeMNCWrXw4GaQAdDZMciHBMyg6UabqQ3K7imFm9wCy",
  "key24": "5xvBoASyPWHyifCZhe2iriK9m7Dd4XLSCaBKPFhJ4jvnBFUw9d5c93TUixnvJbMfuZddBFqk65ZwnSPiE22ZWhZN"
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

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
    "58V5asdmmahPa1DRdteFVU4TjzBfzfepUkyEcNyW1mE9njZ2x6fifdvs2n5jwnneWSJePMU9DXkRSeMTz2ypg9DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tA2W18gEEwZkLBcbSXx2wMaNFxKLFHZFbgw16NZfeE112TLMH5kvNbmXuA1RvkmUhWgQnUhh8QTy16K3hBvoS4H",
  "key1": "2n4viKZqBhHpHKLJvDpxb8SzCZZ88pUYKdpQsmAi342Sw1sQbM9wDyeLyqH2SFp1mbPynaaR6jzLDHgK6xZCuivJ",
  "key2": "2X1FE7PfeRbVeCGwxSVqacXDQ1uV8vm6S41hmVFi1vNBNCC1k6ihiXygk9LKo3fjFPoXuxbHJvSDebwNPtpBJCgC",
  "key3": "5dAvZJJBA3TFDikFg6hvHDN2pYMS5hb6cJ37G1rK3LjDux4ePumMnB91MJiTUerDoFBDofgXttrCz1tqpWhWis8M",
  "key4": "4acF7gmTQ9byCoBn7d37xL7T74SowX9rj2tqLN9PDLMro4zacNFgY37NXDwwTZUCgL9V9uzLUgGHM7CEvHeLbPJT",
  "key5": "2zf8JCvZES1MpgC2WH3w6Bj2Anu97bL6oQmJmNaEGd8WrjeujdbKFuCJ1wgXx5YzPEEjbKy2A6hVCKuLo3BR6NQS",
  "key6": "54ryMpZ3er5aCHmJpUY7Dh1VCaJxjEVgYYxwcayKnEKpXU7L9Qq1pVyyyAGzweAQQLJiGfgiGstQXi56MxU43RHw",
  "key7": "4KkjSA4ia1vmnx65W4NmehVViyPTgTLN2iWYHwSb61dR7qGNKdDn642e9EeXR5ooL6McbF59UQ83RSg9Aisk6cPd",
  "key8": "5i2sUbEwDxiwfg7tfJemZNQ5XQ7rzk8nQoJBz6u9KAtpUvWMNiwjEvzcPVUNYdW1RzC3SSHW27LxiRvfgziPTWRC",
  "key9": "2PWFW4acjMLKAP6J9zvoeRFVUQMMueF9QzZeFrZWbaMwGj46XMgckZ8vAh1twFH1pjZrfwu2ZgGT6AkjT7fadtRt",
  "key10": "DePcJeshUAwbrWY9c9igR15k9Wap96J74xeLZyYudydJJ1NzjjAZZSb4bgQoJbSKMVpztNrAxeBsj6ybY8U8cpq",
  "key11": "44iiNUoQTsuZWnfmH4oKjaB4YedJf8mXUo54JV1HoipgBxx3iiPjdcMyYuY79WcjD2T39PwTLAjGeSGaBGoyHoZq",
  "key12": "53B5YikTYmrMu2Hzi7Hw7MNssMqLZmjQVSRA5VurQ1LS5WBnAtUaU5ogXViQ9T6ExV1si8Xcsk329KLWfvawBu3e",
  "key13": "gw8ukQXpsY8Duq2P4urvxW2S2iFv7MLJAv98AYMQyAKBmL5cUKUTXpcf4XNrGMQp9LSopLvpo7S3rh6zRm1NBMg",
  "key14": "2UJ8n7Y2MhwvovdkQXa98fLziduLNGXd6KUkXpe7f3T9YCKrYNRxKSiKi1oxqRDkmhDft3wEjJVsY9zY4qamG3Nc",
  "key15": "2EdKFUYksiDwYAY1hN9GfAfpG9DVwHoaB5DyqJfD6MsUHmScYjVtoDMpMDvvfmvN7E8J8doiUrGzaVYajGKEVEsr",
  "key16": "24K7NqBGVBj9AmRgqwPfrN8p4AirNezVDdf7BqApiZ3wcdqJXgZbneQirJWfpTmpL9LbFgHpbfDT5AAiPGfLmxeA",
  "key17": "3Y3xFGeDn2AvXoj8uvjhaNNRXwr98hqNPMn2ewEGjAjFc7bAc43ePUeneFfTYPiDc6NaC9GN4C21bY78xRp9hwT8",
  "key18": "4ANTZsim8C7ocqmFYhQRyBteZfhADYQ8CWnysvLi3qFndqXtaLymdb4v83NyVZK4vZ2WGttfWjtvKDo6GXUK8sf1",
  "key19": "5SnfZFVSfA3Jc9QnULeAXCDN4gSVw87yJyN5aGTwrTf2gWj3tKB2YvTc5vd8BhGZ25UQHB18tsKPFJiuvXqu7ezv",
  "key20": "V2rTnsdGaoxNmYewztErVadcDXfo6W8iUVFdgPKCvQGDAcWkDvcy9qcoC9LCM3XHXMr7WuJpgGk4x6L1eLpQadB",
  "key21": "3vToyJ1RfqAJ8hY7J6mL3uKzkcSsS61zL6BBL2i4uLu7JY2xP62NFm6jrx8hGPKYtMb2veDAxKjzJL3vGytaHqGD",
  "key22": "26sAX4TguX9kdB55nQmAtMMzdD3A58KCGvYjbJTPT5NeLCYS9cWy4rp77UYvThX8c6uWroSMZ1L8sbELiJFEsDg1",
  "key23": "6TR2ZRiDsPU8vcxQZg4ioYtELSFmfPuDzCQwibFsCxBAzK4vBu4Syxk7SkgbEP8wkJFcqZ4YJ5jzSckR8S8JtdV",
  "key24": "fywDDnVycukTdPjkhpHnyhAas6PsenWsshM3Sg9Mhty7pKx9u8SAzDSFr33g1u9H8v8ruk2k5TmKUQ8nVJCKFDG",
  "key25": "52aMtNbKQUjnhgddDiEw4gKp8BfM9uZjxDU95CyEDUcJfZtnhPP52Ca5Ri4yibyDEzwXGnoS2w8WRX3TYucCNSfk",
  "key26": "5VvhX3sFGY4GBcAodihW5bnFdXrM75nGqjJWTuUGbHWDAVSNaD6qDg43nArDbAh1fmLvcFZpnEQ1J3KYKfGjR2ra",
  "key27": "5ZeuBgczQYBgkqrfFomvBKGUdZ5RUrUq16fRTxXmQc2ArYZXR4zrZ3QgdaiZx1yyPe6ee3XdWwXj9zunht1HMMwf",
  "key28": "5c8NyRTsoHotfFDUF42Fbqt3xgm6Aq1vDwvhyoadrwjztsNvEMdV8wybLNjGQVWtkuwfxt8TxD7LFW5rfA8cMLPL",
  "key29": "5A1YVkm47FCjyXViCZDFHPZiVFTYfYCLhDKpqiaHhnQoRBv4rEteGiqm8cdy5P256mMKcjE48LuxZi1b63Gpp5h3"
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

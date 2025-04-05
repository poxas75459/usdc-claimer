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
    "424f2JwEioUv74RNtKiiUJQmG5Q1iyFLXSuCHrk7nQnmy6hBtKmUZpJPHvi69iJG6ejszDkyL4mFeBCFmXk4aF9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnTkMDFewQjvYJ4hh2Hu1m4tLtBGMEoDfC58QhWn9BVtUaBqnWXHtPL6hvzRSJsZaQ2TkkkJCfQRtpYCQSUhsjB",
  "key1": "z9uNwJgMReeJPPEpCf24BhvQMCwwKfkGTziNS494xLarJkee9EgU3VyhjgBRfXYfK57mr5YoxGkXg2cnEH7gRvw",
  "key2": "2myPCPXF42fyyUCe17rezM7xi6ZizHNHCQeScW4DzN6NXcrwvmkGiz5JU4fFAjW5w6LSAvy3p591WLCcop6qsyVR",
  "key3": "5mY6Fm6PCXD1YxGz1boBssU2W5EZdXcK82ZrM5cgTrDbeFGdbHRwnKScxDgcErz9kR2xGpAN89ueQkRWWk2aVVTc",
  "key4": "25HiZJFch5H859sx28we1VS97xvYsMaaP4iLUxiBzJqpDWAwh3NwRQiwNQX255sv1m7mHjg4bp5hXf41sYuoBBi5",
  "key5": "28sjEDEtyYV95Q2teNSR3gvCmjaSSwEeHshXRa6PCGgqYrvsttgdLpA1t2Cc3afbWFCMYJpGfK8br4nPosaWH4Y7",
  "key6": "2uNvAv1ovGqXdsYeQ4DpYWN49saie5qJeXnV83SM6dWaRsHgA64V7aV7q36TDg5gqE1XcvTAdSSfTTjiWCDgxQBr",
  "key7": "3JzQTBgGmQKVb3Nhhk2J3zzcJ8W7H6WqcL3NM6W6cok2nCr5KSkZLgSnURdEkz2BLxiahDCSyYi8R3aPo4NM3pSf",
  "key8": "2kcGPkWbvmi6TeaoMP2Ads9DnQHnnNAUFvaQb1aQce1vhYNYXczvk3tsttEwnQX3PK9W5JZwGBwFab2F7f3VZPSZ",
  "key9": "3M9gXRgFvpRc2FwNeLzR1zkyFds57QwqNVkxznvcgfRWGoG6Myt8UmKfNW826ufZ6sGewJW9TGrCmLEtUdmJ3PAE",
  "key10": "gorCB9YBZgzq9EWw5PX4Kz9s7h4fVXxRNTFUZYzCH9W91fEYGk3csDKzxvcrzdxiVExvxWsyUBCJWRthxy1wahc",
  "key11": "3b3EK3tdje2N5CuYA4281EqA8nTpQT9UYzZ6LrzyTHj37kaaSzurMPH2caEmCViMjQ5reZTfAMvZEFwsKyiHLo3h",
  "key12": "5dRAxMbtenLT3zDRMfistxLRkDPPu8RRPHjG9zMCw2cX8qkbzWM6HiMym1CTvBssNYGtmv3ccf5K1twGkpiTB9bY",
  "key13": "5JogokH4rdHPCqc7Jigt5wLxzbetZwy7be1ui2Knfr6FwiR7Ey1ZrgC8hLYSyNcjrH3SwHFzrdK4tRF7u4nbCJSF",
  "key14": "2aSzVnjoRx9wsT1nV8QPuvP9P5e9R3GWYVwvUEafx1nNrLhSZsECRHALehtyXUBCiwZXoYkXpSU26XuwiSTJoby6",
  "key15": "4nG5A6PAMErrgZhag1eTLQBmiY787XSJ51SkKwCrbKgvgsfV7HQPGzYVWry3j1NASBuBP7L57m178Tg4gDeHzYT5",
  "key16": "4C8f31qDNMkRyMNPKVXhG34hZMiBTX4Cx1jeHMWDaL1nuM3e7ySY6Xe5WuFg3qug2RjmSKLLkcHwv9RTUW6pe4CU",
  "key17": "53H5FjgEpw6y5MmrZf9dxUyWQWjq9GEUK3f3EpyMnLFwyDDot9KPFcr6w71bnrE98KdfT8pc7D8dRNxo1jpmhL6M",
  "key18": "3RXUvXkF2PoU4tecsUkbAJC5VNEbrToVYS1UnwUpDvPPQKVsbVpAtq4bXdZJv19q61v3LJ1PR6qfMvAQJF2T4YdK",
  "key19": "3eYxA55jHVhhtfURLwera9gaES313HR1rzcDJ6VzVNsEzZW1wRoHE4aNF4wEC2Cm6i268qWZnZYfibqbepVhSVWd",
  "key20": "4L8T82xVfaQA6xodE5T8uP1vVpeHncpy5T1gwXUvpUXxnqJGPYz3GxmSp5x2xFPDn5wVYgFQT7D2L9CKXNpzwosj",
  "key21": "a6EpLHRhrXVD46dQ9GgYQnvbsTrEgc6DFXtZJscdgRS7PdWJzhNAvSZqxgWWtiL86LesKW6V1BmkMg8yu9SWHF4",
  "key22": "3S4n81tzJq9zUD1MHfM6Uu3kmxYBaLveQPwhDVCEUcjcHxaRThZF3Lw7MVfvTmQ18ksduyGkXLHd5TJC8YxJwAPY",
  "key23": "4ugh6UJNSZiYiAYR6DxsrraWEDE4qtaBmob2RdgUVMidH5JmDbfVXEN8f5yJtH3nhEXai59aAnnNQFPjgihwuCPZ",
  "key24": "4aVtNR3w3aVVEPzPHmf3GDkA7uNB6ym8RpTg5aRT9JxxF5fAEXgKotLUxbqyvG9BRPtLs991jdgF6cUWb5q6bCDx",
  "key25": "4MVE9hyJGgQJBoz3ZZj5FPK3SFEVXj2XJnxP3hyA4C4ZDfzkFQdvtpxGyJDXbKzk8XGCmgy465471vkUtSGaNMh6",
  "key26": "3XAU3Gw8strQogZuFfQcD2uQB9dju8kEMiDz27qisZbq82jRsaDnAaRaBvcAieRBKYfJGSuM2NzrC5XaAYrwDW3P",
  "key27": "7tRW5cHFxPQKGjMsFMpT6ELJyebcE3nniZYhPT6ARzNSgmR54cHgdPBH3h7P7rWoC3aQ7GG34PKvHKyVKPiq3nY",
  "key28": "KnbBHEx3GnrXjHVNWSMmFjTiJJYSqEWqVa9q98zJVwjJMz6Q6Dk7ZF5ukxYKsNdrneDKkomfUi97h8CcNEchAHc",
  "key29": "2jy27UHyVQMZjRMoQncZZSKD7yZcnXN6kjNFVK5bkrkTree464CrjtGutJJ95jktgxmUvYyKsyJDYXEibyARRePH",
  "key30": "4upCLRPVPLrDqDwCphGLu4jyNUxuBuAcqNU4342bpWMJKBGyKVCm2CGCYLJQ9mUxNRAwbrzYpeAXc6QB7Fu8sKdM",
  "key31": "3H1R1fBcCMwGoscfj9gh6h4vnL5m3MmQJfmC9Q1Tto8pvtGZBjuZuDUGGbLh8VM4rxfEoQRiJAAXFvmJMYq1w24g",
  "key32": "49yBtB9fxhZEEDh8QrRPMWo9hei1G2tmZJLzaLP2oyHiHKBtYtA8FEGg4TaDQrSWYkJAkmnDJVGg7uBQ2h6HXKL",
  "key33": "5mMT7qJoxfjNPskNCi41Esc6X1eUPjtrRUrLod78hUEbDWNAhKuGpMN5Z4HNMQLsMEawkY5NrN3PUZF1BRJDMZik",
  "key34": "35TDAN3ZZ8za7iXmLMj4Zk7zj4534GfsQ8sShgijuMSB6WGms3ShqYNQdiHMikv479s98tRTCXzwRYy6K951rqoP",
  "key35": "3MnXRKFHk5Pwcaqc678uynu4YdhnrMRDoEHzgtPJnNCTNSr9DFT1twV5Rr5YUvmQLFtktowS8BS2WcNw6z7WFwmq"
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

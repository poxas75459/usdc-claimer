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
    "4ut35Zu6ikfyrrnNuMnVeKYwGotXCg3FpuEXVCxjeJxhSd51zCq4ayXp3ZZ1h4xKWP8hy4Djz21Nigaz6BYGjpdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHRYT63Et98ptiaFMFw464dNucRN1YjUSEgmHTeJzjmkGyqPdEhBxrNA59SLjq2oJ4HQArex8epCZL52tWH6BM7",
  "key1": "2ucWW9RWbpE4DJJpgaU1zubJp5uK3GGbiVkndSdfgeXJZLDWv58qNVfh6P4n8sdTBDCnCRqdUMugANifuhTzWsWb",
  "key2": "4mNZJoLLK3Ek1ZqrUpAKEeqKrZKQueqs2gjd6uZUJKseiB2Y5KeFi5uowbMRhUbawDL2ZALHDcQztzc3VKXNySWW",
  "key3": "4HM4TC669JNYSJna8q7Lb6e3gJkLn1xxuWX9ftU7UcqD5JuBnWxBV8LYJrLAZ5yiAKmJMVow9Eu3N6VnjbYU2TkK",
  "key4": "DMeKhi37aJBC28spxbp5FYKF4SxBg9hsDkqCJRkoEJBz86AHnDmyRzn8aKnc3B9e14PnT5ep7tZt5QtcdvNX1bX",
  "key5": "4vEgJdKQh58Dg8dKgmQydJJN4jhjjzEt6Ypb6j2uDA5hQSSiCiezqVVNhAR3SHncua59u2PraUJL6zcH58YoNqz7",
  "key6": "3ce4YzhY14uqCKewYkxf3pY5hBmDXRaTiATbiWAKYPUBqUsqLqPAy1xY6qs9Q6BGSjseP3Jwa2KmetqVtgzY2spZ",
  "key7": "HspjoD4gwaXMwKvFQ4YKCx5mfiAxRrndZ1b3i2FbbAFX6HfzrCSTfvVadnTmi2iBMCGYJphFJyYQPsysRjJEfAY",
  "key8": "6386UDriudefXF5LJ6os2aT4eKwF9rZzPeXsK1xJdoLuSRy9ShqEHMQ4FBrqVVViRUW9wQm5u4rfM6dEn1Kyvyxn",
  "key9": "43NzMWG6d64AVwNNY7d8Uezp2wMifharZviGFyZtCDgWNAC59AL3ofZ2xq2xM8JzYBhTrmnaaAdhKbZf4GGqAAVm",
  "key10": "L4ffMLuBGv8wiJXaeQtpYcSyP4gVeHnnj6J8Rkj1bW5xPBzyzUezk8hEN196h6wUhXK3MahvgVKeD5M5eTChVcn",
  "key11": "3CgibwiMCdH4fu9qKipGNS9k9vDFEPf7JA3uMdk8tptc1Eee9h98ZvttRPYzSJqi77J2RHwHeS8Ae6zwiZTLcxA2",
  "key12": "372U3wCfZcV2sXmXaNB2ZgScgsfCkuERYqwmkc343TUFkYYTxQ39rPZo6VmVZQHrnTQBa7LRAvsEuE7hZhRpa2rd",
  "key13": "PyApmtoT7AtjkgSuFxw1tZ9Zc3iTbXRF9XC2W75ntDTAHJ6JyYmoXv9ra49yw3HJPDNSJabVGEpnwQhVNzkbtJc",
  "key14": "4KVRQveHc8q681Ph19WRCSL6i5NEi8Kz9a1KcNuAVKZdcmBFYY8axYZmRhzJQtB4qpQ6LSCqtbp5xccC7gaWACs5",
  "key15": "5HetUpjtC4as98xozP5wPhNce8QiNbBSnUjn1Gdki7eRqk5PuGHtTQAEnKin14on6VnZaHJE5jAgz7tUfXzvyCWY",
  "key16": "52LLEuW1o3fRG32krVY5MAY6eTAT8DpWrzzi8XpTDcMrpWbiQC58uNwD1yYS7JVGZ3GGmSCHjZ8RYFraCSK9f67D",
  "key17": "5o8niXkLSAqkRRBGrd6CWEVrEnq3hX6ZDTsLBu6dq7fXP2KUAkW6oPvc2Rexn8tWTVxfPRHuA4zPm7N5KxbQPMDt",
  "key18": "22XxLKk85bPXutYfFMDkfxoUcTHMEGkQt3f8UFrEry2PWmH24AuY6cd5YKrVKHC3AMKw5PYBDNhQTtsz6buMMjRw",
  "key19": "jcgRnrj7D5EEwTXDZDaKJDiyRSvi3R9QoahGXr8gNmGY6qY6kij7NcmfNK87JBn1UEwZS22xH4wibLjN5kgfK2n",
  "key20": "4jALWVeZCUBe33eYvBwACdSWd29cbbdqEvMPRfLWmvyLsyFYcUiPbrGkbagiEKALp358bqKHfjKXtzVwrNRjd5jg",
  "key21": "2WaZJxyK9T16qWRr6CLFLJgFVUuvifvZpocAtuc3we8P81dyrWBVqVVtx8EzKWLDFvYjC7hASX7U7ezKQwmbEyuL",
  "key22": "5DuJgQZJKJm9kE5VFJRKGFunev2ZtuqfKB5tQVTzabmTpx7QZLKAcokdCaHVSxegCTVWg9wkuV9Dr55863L11eQG",
  "key23": "2syyMAAR1P2ArVmZmPgF4hRjvJG1exH33yssiSj8mSuySaAfYPVjqEvYrjX3YsG9fpBf9bT2z9K4szYdnt9TFt6n",
  "key24": "63hHPqvaE1pXBNjPEneq9p1m4XtnGPsuQhrmdaFyYM14doz7U67GSQRY9Hevus8fTDFEGUUyC8zdDWV71x5Z61uJ",
  "key25": "5E7hD1cCJmZbqHcTgy5fxnjmjThKoyjkmYiWA4NEweUDhTfsxMpPkS7w77GUk7JTaCajnWEaiF2vtsxazCPydNGW",
  "key26": "wWwg4kbNQ2hUrRcEGjJAXHSDwHdtCfYMbEb8CzE8yh1G8vMhxRAX9TaAbvU11QBSXJFJxi3s8ogsUr8gY3B64Jc",
  "key27": "Xh6u4UV1ZSv3ZsE1Br9MCoTXxzYKrvHJXUnS5y9owvVYvVZnHUYkZcJWgpQjNA7eX4BLUXSCz4MSJUT3CavFNbE",
  "key28": "2juWPLtzkqMBPHGhUpyTqmBv2pAJ7oPryBGfbPZsntx2xUyKFSqzyULKenqGQtLqRpvLBeEiBHLQxS96GqhnXAx9",
  "key29": "2R7bwC3RNsTzygTbF6y6jN47dxxkYdsTz3hWxWEDiMqjiYAWzU7uscgNfbyFhQXZSzwfpeCwCb6yLuhZL3tAEgos",
  "key30": "5f3Yp8BQ4cMjTcfM3SsdAuegnJgnhZEmjHwtrSnBZ3oggFwTAcPqwQGFA1wiS61qVFCApKZjHJDXVchizE2MGAkv",
  "key31": "JMdmmo2SPV8hHz4aYhxXRz9jFanxk6ZiNqJSzeMKuxEh6vxoyTV7vCaWntRZVmF5HfMMH89irPBe8VatkfAThuF",
  "key32": "3kCmR8TFehnAfA98FsgQRWvUykieL5Zz8GUwi828v1Qn4JA3ZmYGMau9AzPbQSwh4UBry1nx8nEXEGeCGPScPZJa",
  "key33": "2QRNBrFcxerR295LF2sZ4nraenDp827GjAZvpJWXis34EnwkwLsobaJfHcPDqxmFovqxMpQsbvBxHwtkvJ7FPMeN",
  "key34": "2X3Q8PLjAdrY886kuMzTkxQtoee2KuCy357es5qNd8MnkDTKEDzMqHsJfMNu2dVKRWV5qkxwV8tMPvbtmDjhcmmR",
  "key35": "4FKCpPyzsoYQjmhruj4bTXCjyvTkAMT6NyJnUGi9RFBduovbGgv2xDQAqN8U18wnVN1gQCRLzTYdS2XPCo4yw7SS",
  "key36": "3KcbZ9ua9NjCD32qD14cWbWWD2yoNSf7Msj1EMqM7KXSHq7qeGvmVTaDM21a9Sur4YRDpNfhwYmEWsVtcFskph1b",
  "key37": "5Zc4Vo9r7tkcEFiAApBT2P4wrHZiiPdVdfPrCjPVfe7GmGV7YGLsL3ocZUhpmpWuP7qbNcvFp2Y4dD6jjHTybTx2",
  "key38": "54bhnwKArySWM9aze5FE9togGZrvEr5vnoFHwhwWn8joLjHcui5sV2JhD6MVkNdCEMrerpy2ENYysQ7vG5bbuctc",
  "key39": "57kLM5hiT92qnpSDrZU2qWMDUmfCcyWcyyc5AFmiYSGaEiFf6jmrpytQwZcr2E4dCpRY9w8ALybXjjpykdqNVioM",
  "key40": "38ByJrW1UoX3nykmQQgXUBR3WPNsTTuZnVXN4hBQ31a1XsyMqmCDwJM7gdm5mm1d1p1LpEov5YFeESLPXv8a547y",
  "key41": "4tdGZX1GM3rEHGhwqzZtdQxQb6GmQvGU31c4EN1y7d4WjTt6wqwFh8Ukon8xssSQiKAK6AbmnBAEU9AXbr2PJ6jh"
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

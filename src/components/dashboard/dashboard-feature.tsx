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
    "pWAh39j73oWFjdar7qcbxCLj66xTQfaddXigHB4EggPpTW99F6jToM5AT64u3M8q6NEFMKBja8JEV3tfoFMgu2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YL78msViULLGnAtqrFjfy9HU9Yr6MyGF41SNANiitkLGjQk1PKKRNBLCJnJUwSpLvtWUDBs6H8rxC32bn4d6uh2",
  "key1": "3aqEBM5aoKCDJHD8diftG7jzK4XNr7K6LDeaBX22r4zPFErfkzHVBjMDf2uGy6ymwYASNLap39vNCxFSguEMhCHd",
  "key2": "4p2CNYtoyF1oda92qrSJw7S3Ywj1QGSggXZSvLJ6RPz6EKrAbsWUPbyikMZjXDmBQnoEDk7eDns2AxMPuuF1ZH7",
  "key3": "upujYL3i3LvqYUiP6pafuDwNMkHPyuJzbybGCgyLrFXizyMR72ztbPkVpdA3uHXKnLPNn7MT3Sh5KFyPtDqiCv6",
  "key4": "61bMWFct3HPEScD3U7RzPhoqC3nkDUkanD7iPb6M53AghEKYizywbH98WYof345h6VhcUe58Hkp63dfih2DR3eWe",
  "key5": "4RHkMqnZemXy9RAJ1cvifGj8WsS33t6NG1uQEC5cWdvfzvVhf9Y6vSxF4a3HLY72rzcoXE4vmSRqH8rhjuiZj8py",
  "key6": "2LQKntCo6pJGkm5Xrm9W99158ZNgWGsi6p4MnxjAEHSMEpKsurU17o5TH2ibMZRjFh6yL4qHEyh1trwB6YkCEhY5",
  "key7": "rKFsZqeeJm5AJaPoa9qdMWApA1N9RKAbNhFXDV8nZo3mWkAWiTKfBXTKSfqxrUHrFey7E2kERNeWrL9ch9RPKVp",
  "key8": "4K11DjsVjxvh26wNZgGKRKEunVSdgm52jsnsbGLBpoJqaDYikxjWRHYx1wmanRNGdntU3W89NMTZjFrgrAZE5Hjw",
  "key9": "2sK188Smj58AdJQTQ5QzDDgA1yC16LKv9kWnnJGbbP41PU7iTSdkNtAoMFYKC9bnTz2Dy6x1jyCVaGCMyT6V1VrQ",
  "key10": "4se6L5yLAXPpm9XYxEbJqF2EEJ2WKfCVDCmLMvd5YeszNdVq2tnPSjgotHpNCeEBbNwZqHjfRDRTyMTphEzk32J9",
  "key11": "2XZh45PFGMsPqMQui4nt8fUh7Yn9qKMuWYbBQRhtdRAzdA5nRewAk9tdPkB85jXdeg7EnAcANAQJELeYZhNGu63y",
  "key12": "2jjFmJwWLgJYmUYTReS7v7oiQE3Jw6is9FWtDRB5XkNzfFQnbfk4wYHF2zBmm9wdHZtypsLDLThnWPY14Tn9SLsm",
  "key13": "2fg2W8VVZRR2wsNM8whf8hyyXvhdgX3H7Ek7fDSDerAH9i4QbibUT9wBJoArW3xkGEt1UmyRKnZddMSHDRsaTvkF",
  "key14": "5VJqBfrrwfTeTw8s3mpaGLLb98RSeTEcXhPS4Yc6aJUaqWwgC4P4rg1HCcv4zUBCcZnL7uuUYkjbJw5fsXBqBTyv",
  "key15": "2b7X9cxeMko9fnG4NHDw7zoBbjwDcjNyReL47N9itgRS1PusX24ToM9qHSG63m6QZFVJBq4qFhbSjRNkVFxAKM3f",
  "key16": "3UQ8HMBPnkV5axR12QfA1XFwBRk2TGK9euChNhSUshSbDfhUdX6GZS4NYRc7EMoC7y5M5tfKHUZRzFaFt2VE8ygv",
  "key17": "3m4E862HBkwHk4164zExXNPhMFjGSisp17x6Qo5YahHi4RpLEMvTCnz9Sw8kMwqxF8dW8gi4gycy4SZYBdbXZsDL",
  "key18": "4RzccYW2c8y2BB5Yq9jm3vsFVYrRHtDgnWGSHBkfkJF769Heuh85YrZxULZrPKCcpB21ZRfQvPDwUHUZTEEGyg9H",
  "key19": "2NAtushHjWuqfvDZ9ZmWmkUNMvTNod8shr3dr78ebHX9wefBbL4DqcVQ9qWfB2owkWeAnaBdfM4zAM7T4adnpxLK",
  "key20": "3cgFZAHto4WUu1YXoyRwtXP8hTyAEyhsNcYZXApP9sekxEMRAzAR2LTkuN5bxmHgERAGtHZ5mCKSi4GiCPX3GzcM",
  "key21": "4DWuAKkPzdTF8k3GYYwgK957USyVPvYbeArFAh1hywt2rWR27hriVXgt4masYgxZxpDwdwUh5Z7eghVa8CyJkca1",
  "key22": "3h2h4fDQkiwH7JLYm55ZU9R4zpdJuMRXSdVcHJW2eEx8pi5yg7kWtKzZr7Q3YfhUPfwg3ueZji5oDNqq5tiK8wnd",
  "key23": "5hUacRKC74QkcWrA7cXmxUuYPN5CDfHPoEm4eUTHeMviz84FQ5SDqo5s6ccFY5BUrWVCANVZyyceeaTm56fyZKyM",
  "key24": "rQhKXoQuqbUH5NW9K8Lnm9npY9sVzLL7aDJms2PJW3qPPviEJEyXXujDRPHdQpvQhKAoGvXTimgErXusafhHjMb",
  "key25": "42o1UzcfMTBMTy87cqWfDsawtAsfVF8YE5D49W27NFjfvVmGEEEcwudDJXRxQYYXSfCwLEetQ4DbuEuT1BxMXw2G",
  "key26": "3zATae5Crfi2NomTxpUtqSTH6UwYQwyBoWePQN6kAwynRcuGTxuomfewjHmfVcMMcGRuz19CjQswdU1ov13KEks4",
  "key27": "3mbmiEbBzL6NBjjtWe9s6T1WX9aSshoivSh4r2bNp3nNraEwwphov8n3Ufkorg1XtPx2KwiqksqJZsoUunVy7V5S",
  "key28": "AQzPL3SJT4Se6JHYsikt7RAwjV2zFxuTahAk3Fzbb3RF4y4STa925hz5skcW1DRUzCTADkUKZbrHcvzWTxWrBF7",
  "key29": "34emFFC6r1jxSy6ZiCRMjKPGGqx1cfvqPKV2PYs5sP8YKsUGYxrT9AXGjNQvZq49n7bQJY1nV3azPFk9tSbcr4BZ",
  "key30": "r5y68LA7TDJ5vicZcLLMX15ckvhnjyyoTsYcRAVh6cUiM34HY9khFjBWXz3EHi5aDyDrJB4tt1ob4cMju2WmfCU"
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

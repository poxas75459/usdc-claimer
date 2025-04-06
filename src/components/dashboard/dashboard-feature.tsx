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
    "4FAp9Zc7dnv143M8dWFs2rQydHMUEQ4K7cYsjajKSrTkhr22hTuF2nmbMu99MtoH4CrNXpWM4ucmttdmU4ce27eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfhSCP1S16QxBybJ81T3Po4E8k21QM3jr3UxFtiA4nmCD2iWyqTokd4SRXtYHmhok4AQDsq6FdzASwLKouNhJWk",
  "key1": "4SwAPEhez6gM9uj39SkhJCTEG6nkJ5KJrZsjQMrthuRYmetZGLK2W9UphoSYm9Ene4vTfMghoFwJW5fMz3oC1RsD",
  "key2": "2X2F1ZEsKtiLXALpk8AZYXkvUB8cT4H9yUGDw7WtgzNX1mG3mUJQkbGKmib5vrJMyj5ZVTrFxbnZeEfd5btHRhZU",
  "key3": "3Lz56qUybxZvSgQt9zdcc1eM6pz1mM9xrcHB4bkV8KoKMsoPJ8qLBQDCaJPgVvdcUJf9hzaDn8KF9N4az29XRh8P",
  "key4": "2JiVJwe7gSNrWiWcA1PAQu8YcwxCXpcRGAZN9woWZbrG65Et3Na3ULGbfLFD81pai6XZNksZGPxrpkAY1qGSdkKb",
  "key5": "552BDPBQTMAVKFwS8fqComvnyoEdo8snBU5UCueLsUZndTZ6q5erj4M4mr8bXteVWptavUQ2yFx5wHsdgLZx3d5E",
  "key6": "3quJoZYfmmiYt7HiLaJLzo1XAQPmKzAtv6GaRqKao1Y1p7QBL9rPgGwkk2WkgQtnPsUKvEhTpEdFHeJoMYSPUsgC",
  "key7": "2Z7HK3z1ABB3u8AHPuaT6ueLpvGSKJ1mWrY6wPyuAZEZgfos6LRBJfUzV1jBoNG2QLZpUpPbr58en8mAYRayVpfU",
  "key8": "2iEZ9eHyxSPrTKk4ocWURxcajdLrY7UzLviMJEHc6JFFsiSvNwJ3yXysAPjriJwzALfq4GaBA3FaJPw5dEfPuRVA",
  "key9": "4gCDuZWqoqSgCjH1uVKU4eENGaqfF7AcJtKQQH8YoQJ7CsAwmZiWgssmXmsrRsgi1b3hCYHyUHHybEvMhrRNkAqJ",
  "key10": "5DivkhFcB4X5bf3D6FgpedJovTqoTnp41pqS2ZSQ76t8zNzVHZcU7YTJcM63zJZMAJEzor27ixt7UeQbBB7d2GMo",
  "key11": "56PSbtZApDHhiAEV13fZmaFTXiaoWugMAAMvTaCYXx8vX4B4SUKphhLSDcqRbqqzBf919JbxFf3PUyhFpct37Mfw",
  "key12": "5k4YLX8NfEgk6Bb6i89uYZQeTxoN3z8kJF6f1JdcWzgquAK9aW9CaijoTekw6NfoFJe5khxa3DksQZdvG6GQyd92",
  "key13": "5GS8Wkg6YR5XkrBA2Uxg1XmX1g4jgiVu6c46ZLk7UmVQse4pfP6K8577aZrHoXEZdNNrUmdrBfzNSrPiNZQ5GFc6",
  "key14": "2McqVuuUiMRXCH71KMrJqaN2vsxvCFGUjyDTKp77hiKYoNbPDwZUmJWnsVRt1AQNcNBHVX3XEcKac8kgTsV3FzWC",
  "key15": "2vbKExF8zp6qymEpmgGdTqVgcUeuxxz37mPhE8G6suJwhWcthPSmaqw3cNhPJdm164kBrkZ4qcme7Dq8guqxfhg9",
  "key16": "2aDKLhU9QYX8KQ4HXBpwKVWgorZrpJ37hxhN3QeAgBaKz6EEJBxbQwpyKZQMyFHi3WVowSQhfk4w6Q7YRB1WqDjp",
  "key17": "59n7iHso2gPL5vHA4ns7MfE7HsWsLxYRMqnZetjPxsQJHKmCD3t4XXrb7ATYktKzWiY3AEJhv8Do9HudbwxgUoWG",
  "key18": "5fJbxXsMJHfRqAwEsNfM1cYaCBrwomPG6usckzH4Ak9J5s4AiMJdqUV4zZG1TL4fStwSiL4gPcUQGjcssAJiRPvz",
  "key19": "3xUFqGEMomTFgVkKq1ywpvknM9pJ89CkwXsxFjoRdVubTg3Egpc79xFQhpUxxafbVbUPd9VBZgppankks6cdnatm",
  "key20": "3dUATao1Evz3XcyPtmVGcESMSitQMGpcWk3nnWeF7Lre3HRs755AZywA8yRWbSNmUVYoeVhn8L7sJCjesHdJ9Eb",
  "key21": "2LEVYeRdUXmEL93jCbUC1YMr3YFn8jbE9mFDNy55YuRRQ447CWd6r9aUtiQtPRiJpCEx3YMkMuMgfivDfeFocALH",
  "key22": "2hqgzTkmoNqcgBksd72o2YJX1AouL9fPngALM1TaqAZXiTHtsAW1ARdcqp4pwT3VP9hWwL11XGwizkEFQgqSZYZ4",
  "key23": "5qRaq3WEgA1p2AjqrUZ3gSHKYX5tjmcK4jbGj5c1jFSqE5MNGzbvRYDZjNyd7LbZ4yTS6TmcN7sXSy98Vi9YYEje",
  "key24": "5TKvoz8t19s9gPGK8LDqytFdQgG2htZrKZMX8YA8JjAmkTSdeuXYWDXa1JraXM4zpVjgc83WuRFpgHdbACV46TzW",
  "key25": "6jTcj1nJ58dYxR1bxHipcFWNcTbk9ZNWppcRZBFsZnjHbR2oshEaVT7N7SMtQ6o6EWNZA9NwpUvH4eBwKP7JQb9",
  "key26": "5QxYAgt2Zk5FjySn3vuHR1b7JKVC5DrNfJLcNJgYKU9C4acXywhVVJjJiV71LsVcp3ZPiELVcQjX3MqtRoxKB4B7",
  "key27": "56pwU57AnNgzB6yXCit2rwXz6PDJGcMZgyDC6S638XZUydVVRn4o8TnmpoU1gBZT3em3GknDCZbv6eA3YoakYqZf",
  "key28": "uLtzLNsUJuoPPrK3RsX2CJKWgUSyVhYp6UUb8sENLpq2mAtTKRSKHvgpA5vwnMnKEfFGFJcSmcB8boRsTht4k7L",
  "key29": "5fLpZPr6umwyXGRDwpc3eS1TUMZD2U1dHHWoE26QDpQrT9e7YgfHDNqRXoZC3oXpyFCjdb7wB7TNpGsTmu1EF8eu",
  "key30": "3Pm1QDy8VZxz8Qn3yX6wsjyceaSdL5P8oq3QAy68MijsQJWXrjwC1mcJVnsHSq1njQfoTvFXQY6CDa2bqXTtjdv7",
  "key31": "5qfqekuT5paMtfCeuj7by97bntrhQNb1apTmRMwoBvRVhKaewwdSbSTFwdSecbkfMi2snNr8x5yvUdLFhjbkVXzu",
  "key32": "4h1YgCWpD1GWmaMxjfEwfTH7uY6yRPZRatCfiShAM682P9NmGwE1LUUNWExTWntRiMJAm1yJ5sGNurDW5uTm64VS",
  "key33": "9qiKQwoSTmrYqwVQ5muUw1qBzdMxZnV8yp89zDwdpQNVf4kbd2TM7o9LJ1gnCh191F4w6VN2u8tR5vVCcUhHLDF"
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

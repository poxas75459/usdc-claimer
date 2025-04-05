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
    "4UGwp5sgmm1G2rUqnVtyABLp3ze4E8o7A9UL61AvDEsnNLtMieursyTtm4Cb2ScZYkj9jT5ftYYhLPH2CSMFNdHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32W6EPq2YJCHnposvqPQUKKLcp4FQ6qZJw56KNSpURKwJ5eoBXkGWRBN62UjvmkxcFasQozT15V4XBGDf7iP1Bu2",
  "key1": "21AXvaaTa8j5TJ2nZqsXNQyj9h9mDVpC96kNtSKjvjyNo4tHp7bMX4C1T9TesUQwqVZnjNhN17YGGY8NPUQmcE3J",
  "key2": "5YoDRj2widnmfs2SdvvFzGnCjYStkq11g8Cpxor6bmhxyvd5CTWoa9HmJDTZbaocgYgophbQp8qRcgZSHNgjmcDH",
  "key3": "4mUmEntDaERhvnyVrLqtKtVhHYr749PnD7MoaSLU8mY3unXLQrEpk3YbzG4HGXbwzm4WMUzbk89wR8R2vvukAgNY",
  "key4": "JVPhtbUmEBmqUiXGj9PidXSU4UFt2rhShiMBCkXoNWxrfL9fmY9pLVBzqB2qwQFgxGJ71fe2tZ9aJBPBVZKjM6K",
  "key5": "7gTPsyUzfnnPknyoSiqpsrEiYLdeTdiPCe3psx5y3T4Vzazakbmb87snnranPwhyKmFAQPtCstAocNuGKPTBhUS",
  "key6": "2LUF6MxoJapA87sQP7qsdckqv5XkCADeC557wBf1AmtiA9JrJDvK6CtFXuJ9nAg5ihsnZhwCqK8m25iJXMecHLgB",
  "key7": "4E7FLWkAfvDDeHKBU3qKd6hqzL7iyAppEpGud2qwwXKjsxtgAuArBJSXwDoFtPRCmQTpQbELpZa6N8HNqT1P7NKc",
  "key8": "61CAo4Kydv7nPihWktPyGvKqwPxAxMxhknH5Rv37QaDC22C2eJnfyeaC95CgxVXahBucgYWiuvuRhHsqAgu4CP4p",
  "key9": "3zBZtX1PSckTGMKVYGAwx1trzMYs8Aq4rR3bTNj2q6SAG685UYrRqUBVNRD1Tj8oFqLBwXUjjiuZcJxjiaqP7671",
  "key10": "4HzJjFPw7Wk9ykQNAwiWvcHhgDcCNRDPPjbwrNscNoop39TSoGBeZbtu5Sxk57cYPuerdc7SemiSfZ2CzyP73w2b",
  "key11": "2i1THXCMna41kVoq1ucJ4uVd1KG4j8r967QzBUycjPNQP34Poi3Bkj478XzMo4nq2kt1oSekY9StMtZEUTpD29ax",
  "key12": "fc4zQfdpgyS2CJMQ7ZYBitxKuiheqyKtNsRHmt5RzaxByydeNsCwDaRmKKkrsqTH1SHgRjeG3iCmDNATo1fyWtY",
  "key13": "4u1abQF5iRKGb9ntxrS2m8GnYNhXy2eEFoWAb4PjSPEX8WP2KqfdQM4doEARM9hDNtA7vvzRvDtGTxr1gD1HQcF7",
  "key14": "3gsbycu2F4mxPHhQwscBdiyTv4KFPk6H6qD9sUvPJgonY6V34pbTQNDsn4g4wpQKpLfJJXUbmqrHyC8gTsY8yqok",
  "key15": "4n5M5yMhMgGrzrWNyptgajPdQk6eLDV7ZAGNJvcYVQXbu8dRDLnGV8ED3SV2psHe1QWMu66Xx8ViyjzcEUQq1q13",
  "key16": "35T4g6th9DmhaxTMQZRXEWjJYWzGG7QUpFPY6DJ3tCBgRHN2ujcuGBoo65MDDrojGBkwV8pdioVThTDg1hU3gQCQ",
  "key17": "3QjkSwaS1mx1ARCQ4mT3uFgKg3YgbSJs9eHhxCEZZkinhAFmK9F8b5344mp6VWf4h55QgwZq6Tzos7W1FUjhXhYc",
  "key18": "2tyyzGP7WRuqUYSexMJT7hRDXkAZSt5vUG99rRcbNbQSFpXNsX3KtLZgD4sKwYP6xvjtGPcf6M7MYvoEvyoJXiZo",
  "key19": "b5VmoSWCorwVQ2bXMULqt6j57KSW5KBYZE8Fr5Jmj7V2gzPiS986M7ioF6cxWxKnzV41BdC91F1MwP11jpj1xi3",
  "key20": "57zW6jrYRDnn2FqSqpUCBSnAcqD7xBRZdFcQd8YPYRye5GLJKuuyDTRSjTzXxzFmY37kwbgVZmGrU8WcLDEdWddu",
  "key21": "3VJM4LqT9uEgQcVF3smfgofMVP5dE1MGWx9sqbREbkx8JhiU1Ty8knyrEskrzhxjj6UYi2mbHfMboScMYJrT1oyK",
  "key22": "4KqHEHNrdVT77q2KyW8VjvcRWECNcXzCEf1Wm7kcPpMDwiXz5w1oopZJfuix8BBBKgMKbRz6WmApaQPJPqPbzEiT",
  "key23": "mxe75jzLxkbzTJW1hQGv57Kz8tohfa6RQYWZGpGAAUYFh89Sz95uS11azQTtCQatZuKRY9tSqbnvzBPzVA1RT9V",
  "key24": "36C4JkpD6L3dKXLwsmBLKjGw9CAxEVKWF6kGfVfvW1qkewkdhhkgH5oHSMQgt2NGxtTjKiwdyihhNUtNh96iy4Mi",
  "key25": "3bDXDQ1UiXPvzYVUoKApgyA6WYc2iMH1ZwhLzzF8kEXjhJuuda92F4oHgqgdb3yYhpsyod1vp6voodQL7sbVhxaH",
  "key26": "5oV2VpTuSaYn5nbHwCBvjhTBqS7XsuppEAq3i8JDcFdiwpK2WQDZ7jMvbY7yC69Dh12jpzmLifowV3SEjx27SCNY",
  "key27": "4SYv5tD5ja2CeTaXJUXkLiriMZoVKXzLbUD7UKkrRUGEqxQ6VxcTACP3Qh6Gg7C3F2iBAKZyxTdXKHNgG1LwxAbE",
  "key28": "r12kNta361bZHMJvJHT7F3e4sz3tSqpQEANf2QYFyeKWeEd54svs1FioJsTYKT7BEpL3PdajXT1Wc7U9NKrKPHY",
  "key29": "iGSMXL861pjkj9KHoB7wtgNvCqR9e7yg2mfDHgrqchCZYUmqQ7ak8Gdiu454VT9wE4kR9ygptf3jsk4PnYeMhYG",
  "key30": "3YN7hzeuGNc3grWjAAyfeb2e5Bb7rJSm6cFVvnfvuLYi8ocX7tHpnL2ybTaXJsmLB7bNgA8M1CzGCbfMKmsLNtYP",
  "key31": "4xRxG4uafFmxxnFqrqR7vFzUoFEwpy6LyJrpADohv7LpcpNXfbN9jG7EcNrCXLyQaUzuvMRTadP7HbDPCqE4cpae",
  "key32": "5j6AjCywq8EXw24vcjXFipK37tHQ4AmGdLw6FngDowBfHYvcN6dJ3Md41NMN1wzTeCgSq8aBgDtsvdnhsZbwRZH5",
  "key33": "JgadDWFFuimfujB91Z8Ef9iRgMdnUg4Jft7WdMZc3uzF4cVrCKtcbWWyrcggmJkYK7eiFv8e6fwsUAQE7CNwVeu",
  "key34": "5Sf2kE2pkM29QGRbwPU4qvTRxUiJDyT76pqXsnw2A1V3x91oGLAY51TzMestXBBBGxn4mP8v7rCjhxv2dC9usoPi",
  "key35": "61xdLi9vSLbQcyHh8tNBVeyAchUbzobbYBXnLBWMvNdj4G2CKEx5abqL54RkBe4QwBBasEtDzaTRGAM8JKf5hLuf",
  "key36": "XZAsvFjY94kJP5mVwnzZjRePCpE34jeX1HvyGp2rzQmpWcsoxqkKqrGzJYQVvZ7q5wJmxRFr4h6HRNqTzC3L8Re",
  "key37": "4wVUuP5rQv9eMk1Tbpw1VPj2ySKZBNkuN2Z9HSwwRvd1ZuYBiAWX9AtJtEtcJLFWnpqAHzmjwipQYPhZD27BRscf",
  "key38": "2NSvadVmMyXzueseD9ZocU1oQryVTZJDCMvowoADKerUjiJr4VJjsB9G7rtdWCk9sJSNvf34spw4PixgBMmGeUZX",
  "key39": "3tYnjGFYsUmoUgXVzRm4tXxdCmLwHZMPvdQ74iMgA7rR8EfuAPdnfUre1qMo6CTi6QrwuynnYKMRtp6bUiNRN4F1",
  "key40": "5hdCBjdTcUbf8UmxEcmUrxJZ2iTg1PAHxURq7CnBwtGv9dB3Fq3B2WniA4j9iT8XaBBgd8DExk6HDF4jsmS2VyTz",
  "key41": "3bqKHA4ybXFu8Aeab8ss2FDvrJijSqB6soKsskJkJ9hq2RVuiJLAQAvZKYMWKch8rSykj8a5pTeiNgoosqmQmxv3"
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

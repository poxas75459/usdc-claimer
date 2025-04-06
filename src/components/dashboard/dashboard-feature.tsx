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
    "2HZfp21p1BMai4Nwck65bDwgjDMcudYbtX3nWdBTn4X4F8ENdwHUo6HnKMuUJTTcxmU6LD8VXJNsC7byGZkj2F8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCQmPZvoF5ww6jhjdBKsgjrEAhNRzuGNQHwnKnsnVGpF4j4LKU9YXZZhhXLYBZueKLai51MyShNP3ztPaur1pR9",
  "key1": "Wo9D7E8x5qR7dE27xzA8NC6TTQQcpfj3chtMbvwGNmcPmaVhrcxA2HrGnvZUe2g7dbkhhR41TQ5jy2ctYwoYG4G",
  "key2": "3DTJJCweVZQuvdM9X3GiE1KCdgps3uwPtmtkzSyHdar6GJ5HH8fM5zDFh1gHk7zphsouP8vhX5Ub9RRoTBJpRkVy",
  "key3": "4oyjS6K7py2LNKGb2BqyFNgphdkfrKvNswb634bUprfWxtg4JYZ5g8nMELJm2z9Rm7CoCttbefDZkgYHjFv769kf",
  "key4": "4eXyagSNxXKNm136sv8t2mueUyrdzhb5NHJrArE5MZwQtU3GYFtijXdBgJZzZoqFVNDPDddoC25a1k1hSZAd3M6k",
  "key5": "tMhXJLsL8jFNNJmvzLGM71cHaEG5J9AzBx1AnF6e1sJGWRFYLYaphgpgaCQjYvCHqV57xhkrtu3YftfyFZzrqV4",
  "key6": "4s4mGpPCsphzRiYh1waw2QepBEkRJjXGrh171d2csiAh1KEzPe7a9PEun7PFkVeBGU3V2hdV2Q3xS6fnPEoi1JnH",
  "key7": "5WQq6kEdhdKBU7MphDJStiu9PbYAy4yZrJQEJDkG6F6vM12rzog2BgzsyZUvTDFyVKcbiuqGGQ3wb3rCqc7PgHTJ",
  "key8": "2yNjwRjVTgzyhHsp2RE82nSfA2oFEjmjh8HQuPsP53ci9LgP9ns9jay87zuCeUj1SD3ghMj2h2YzFxURPb3zAFWB",
  "key9": "2mQLh7ezUNoR1xwSQQ6hZ695i2EDXmSdCL1AbTdNLC4KJG8JQU1nYukbFrTF1DYfk86WRn1z5M6cEUsBcqwDUVHw",
  "key10": "5WdWUAVJrnMGo3vkou6Z5iFuGoC4mDp7y9ikdDdKV9zCDxzPD3X7RnLYcJvp4jmRLpYizAeZWLBivhSY5e5GpucY",
  "key11": "2RQFtrbtBk5rDvZWM7TF3dSea8dVR49MZZCi1FA49nLaNjAwkR1qNW3ZoZYjYyBRo8dy4m63raKTrsVjwFPrRwC2",
  "key12": "4rsHfw9VTGWdcwBBfDWiQY3gWTSHYzmn7U56D1nSzsdpDxS43e7uEYF7cbQz726RMm6L9PiRCxFtUWQy1gRqCi1n",
  "key13": "2G8KJFvL3Lq5uUftDH39e1n38tcJZwMikmLw4w31twFvada6d6asySBBpWi77pfgvo93bVmk81MSZdQFw5snjLwQ",
  "key14": "3VYGv7EGz2HN4AgMV5ffzpb8WN1JxZWKqyP6GHE62wSNNjLaZUymn7eAxxnQNveV7sdyKwdhxvZReaxrArTSNrr",
  "key15": "4yFUPReXSTHigrYAFnmWnKnnyaXtyFmqS8HaPiqFbwMfZ1PqypkSVVnYFRjazTopRKi78RgurbD4QMBuAu8sWSZ1",
  "key16": "2ag9kvsFaq2japApWHm1emQcKHffk2mfheumqD7paJbkYoPHy4VFTE6MW2ZJA6nSw1wZmsNwhRxiX7AZiSPj4p6t",
  "key17": "X81GTmxTzMMu2cFW9HKLTYyoYTBp6Pa7VRTEMQhnhgHifEjpyjGxjofHKRhZWpEtfG3E5sL2PaFREb68bZeaRgu",
  "key18": "2mpUPVBwEv38Cfpf7g2Mfcfrg367i666hEGfiz6eQFqs5Q37GRboJSvCmGNHTBmpmtLzvdHDQdJgSpdDyNMwQxQw",
  "key19": "4T6zaTSwcuCF8dpR4CgNTxkjoTCJifRcDAN9Fs4mWCMveqDMAsTikHSd7b5EpyueVRdtVtkkX1tVVzYB4peVLeL1",
  "key20": "Jn877WE9JEbftEnDJ3KXmX7RkqhVXCJB1KwUSjJUsf4zxjfAnS1iyGdPCxc4KL17mFgeBVUzLLaVAr5mUftgNCf",
  "key21": "4f5REFEjRsUi25WxbknyQdyPABeShA2SweMf8D4iWFC8XB4HEV5tmEGsUVbKyF6Qp4R5C5FVGqVYALDFMuPmyj8Z",
  "key22": "3baBxGymwBVuzz3mvBF83GJGqHqKjYMUwFt3j2myssxxCbJ1VXbjtXZTan3NjLbyJs4AhrHj8jzxHa9gzJMkfec6",
  "key23": "H6MQ2Jt8kxuh2JS5Zu4vnw2dGjkDcsoYhoQEt2Za25FSWcdq7ogHjz3LnfqjJFQ4cUfRWidYGfNjyjGYmqtFSeK",
  "key24": "pRLkjHmCqQRwf1ZSVGrbTYsLTJeMEY4TLnNFQCszV8xF7yztbQEEGa7tL6ormAvjDXNqdbFZPwoz5wmXfEW1sPQ",
  "key25": "hE5APcohpSAWLh9wGo5enU3hFoCYaUXEhffbPJskdsLLXExxMLUcogzKcK2Sap84sV8oqAPkV35GaAYpegVerVt",
  "key26": "49mBCAyb9SKTd31qp7jizNFCGdCpwwYTd22vT95VmGKwbqekhecXiGqJ2VoajmhJHxsPVb1kKnjoMez4Xh9A3UjM",
  "key27": "3ZWLhXAhC11CMUFEnm7P3AjYEgABGAPutYdnQBKVSkNfRkKq4CLDFFWkPCsGdoqZs7dvZJWpNNXCn6LpYdnLCGEw",
  "key28": "3i9VQPj6hNBNNPsDHUbha6waqtxmgwqTnMbQM9XJUvm1ueMSx1nDfdDnK9hD5gZT5h4LhKbbunwpMMv4jgVVkUSX",
  "key29": "27XqwaNsNGZkiw14J4B8mtbaAJzJ7LN5mvdmD9fA4bWiB5cVWevnMVYJUpk8CPs3eQyjxR6nChWUWsxtsXGkLfaP",
  "key30": "3L4SyjkKvYah12mKcDLheFrMXtXDse13e4Rx5mVepbL2JUGXXxKdHitiLY6s97r2aCs4qWpKWDbojvh4uW6zioZs",
  "key31": "52FjpMSQskNJ8JkH6QaGxhZLpqer4cDwqSLStF3gNKCZKAQDMBGeDZfY4oGvBvZagWBxDU9JxefpyVmGdRcjPokp",
  "key32": "5N26fR3xenDLKnmryGRTjd3WCvxCztXHV2XqGPaBTf8Pmxao9wHtiY3Z1SshafHgkpp16KkMwoFCTKtE55mCwest",
  "key33": "27a2YJPvpVWProESPfLwpQi2ri4Ym9B1DZ6uBJu8DFwAS7tpKqTM3ybM5YqeLLQfCoCTGrh6Sh5fQR6CvRr2rzMr",
  "key34": "5nbgW8xhMhEexJunCJftKZ8JeBh4V4m4wxfbmETpmx9Hfr5dQ3xZQ3NNZz1gWJx1uGFvrBh6Tn4RNXLoYm2kaUtr",
  "key35": "2m5UTzGzydrQbJ2rH31DCDhnxjtw9wrwLxGzXaXQBpLV5XtXLZuVHtXrSXpGLpJXkhhZ7a4wbHtAB31GDA3e7Syb",
  "key36": "vBq42wEkW25VQgzHPYHKxVNccT5FwLRKmXyseX6KQcLNMsDTbXXADQEmqfXeDNSwnwBxwLULPDgUxkN1whjXjRi",
  "key37": "5Rfzeh3vaCUXhrbPCznmS7hADqkQhELRXAeURHqkXrp5aFgNYrUFbkckpzRurZNbmtXPY6qTUPzDvU9gQtuuTooV",
  "key38": "UjHqdPfvCsEbep8iYXvePgwnJmv17wCmGWpwacWjFpiqENQz61BiGRNVyzJowNE8iUT1XDHUeVXm6V77RG8QoTx",
  "key39": "4WYd73TRDdJynvPCBdF9ijwqqXLMtrb2ww8j6LtPP6F6DTBhPkynwxQjs8h6wN8QbTQmjxrpz93HGpaRnZDao1qg",
  "key40": "4GoH9cZeKTMyqzT7sXpDoet4kFmqoJmXwCxxgxKhuG6b6effpridoimREQ3Yr94U6y4cTFZHPbo7uKWjqobPQfKu",
  "key41": "3cysUrzhmP7aoXZuHZBoqatLuoBNbfCLTEgJ5Zp7V9cJQW4tKjZxY53g9aQvotGp59qE92Z1rfo8ETMS8SNsoL7e",
  "key42": "2J6A6gHBHEkUCCY5tVCVSyyyq7o3WPjmFNxyL2k9gYa1pbpjChJDjtvdbo55o5i53uengoyQb7QLUWxZeU7jnyox",
  "key43": "5hfoWTgj3s6ny1r6xoMTupLRNEwfm66K2tZGrM9SdxQsruyeLCGd2zkZFmSh16BdHZFkHt82Nn7V32HwVTZaP8gL",
  "key44": "3d7p9hM9jukfJvQxi4XpAppovmjAHZ569AN581wXY2dccsPc9exge5KB2FvKTQpsdBYGm9JCMBfnxeAGtmPyn83E",
  "key45": "4mZK5pjTGfzjZZALQFZn7tyujF5gpUXzyR3WEZESUYHtovfe2o1CpS1QEaZ1s1aEqjiSZpQCEMXRbx1oBPjsKMVg",
  "key46": "3itkLdm2K9uDKQ6UsZqwR3aQBZuezBY9D51DZWgSjArJ7zW2zCWTfUE1DbMWh2EUpWY27fHsPdRvVA2MBcFtJYXc",
  "key47": "TP6MeBMP9pQZ9QPfBN7taBzAYMojfMRm68rE8a5wjspSrnKwBJ61Zaj5ZndZq9AjpJhnGMtyqnVUFecZ8XRqnvx"
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

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
    "5DzEzzsJhrMyk12vbWFy27VCfjJTfBkDYJ8oyH6XdinHPTMJKLU3kRpkJkHRMNe6Rvz5F8qfgaMYqineyz1SCeeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGHiJi389HqMVroryePvLstYCJqU56yYXFvveiPnYF7wuYUdqT8u6m28fByuxiDTLqHbFLbjBKQDQMzYbFm3eC5",
  "key1": "4ZgVZsF1oGsKzVbPFgEEwwEApVxsyfmdZdrPduNdUNpEBWuUufKv9aSngttxePYUvXMfJAibvUrPfzC1za4PqJaC",
  "key2": "64GjVfb94pQ6gAsGdMsFZkb43AavdkkV6tb775ZfnTd1N9DaLzTQA9H1AUjSfaKbQU1bajwfPiiEn6N6zY97zn8e",
  "key3": "2HVN9CLvd5qVqGBeuXRDZKDcLwi9fYTGbVmDwaPyqyAneddtgJC3wVE7tpDeX5rd2T7GBgA5g5FhbSozwPqF4RQC",
  "key4": "2m6c3wrJmVfr56zW3ReM2tPToocAmxYutQZnTCfhqSKcb9RbGi4jhb63etvFjeMYRmYW7d2zNmFzXhh5uRNdPyTe",
  "key5": "3sGqvPgdAFesvR59RjRgAvCoRpyBg9Mpobzs9YaR5DcgGxgPVQ7yoKFgpXkomkFhKvz8QSKwFBa7Af5xFS3HcNd2",
  "key6": "5DsDVPovouzZYzFuZXuVkwkrWCqH1fHjGZcZBneGwirpasNmmxiSGWaYMoW1MpgwN1AmTcvsSPAwSPnKFQCYYdaY",
  "key7": "4kzA2VFcSqWoYcp8YpbQBVsn5hoQeHFPfryfcAA9AiRiLxP2JPPh2Ng4aPWM3DahHTyWCcv4scJSJy7dQYKBdmLs",
  "key8": "49eLCLzTzZsCTsNdPnmQqqh3TZqtvu1psLwSoANi5VZx7WMrN4s3FsimSK2MfqpNxxpXLet8f9TYYw87mujFMLiZ",
  "key9": "4qbfJMEWb1TbSudvpAJQygPnxwbaCx91BoEe53a1JJETfZnz5QFEpfxXLEhV9j8RehQGy2tN1AaLT23ZoRUjjER7",
  "key10": "3TPBVyjCA5aGmYw8uk6igEA784sqoA5drmBmNJpmHD5USNmFPAFAyhUrECrUAMgJQa8XcRZd9iZHGDgC512h1Apf",
  "key11": "5XtRJMtaXAnMzJawBsbLSgiu65Q56MXAvudsPPL78Vj1EDefrNjb2PxABqivfD44m6TtDoUrwkezTLCoSxEAs6iE",
  "key12": "3kYsqet64ZsoRyWVjnyuTcLiJGSWDw2uN63j2TT88c5aBCWcAyixshViPcPa1TnR1ism2sNVFjiksSHtfMKpyZCh",
  "key13": "2YhozMf5e22kbJDm1F2jWDVZagvKt9nUM2Q3X2oSfLfxWxW8vZP2n1BWo23Yyq3vbKevozrwGQS9PkF6J2yhPWfJ",
  "key14": "4fxvvQJLrbiUcQLDGLQmU3eS6HS3P7jKU4e59SPg8Gc11xuwx78kJ2FtqCo5tXZ4EhjzCMyxru22WbrJaChKGJfJ",
  "key15": "4dpeWnqz7GsJaXg4vbFoNEp8xmbXZbgEfvWDTjMSSa1SQJgP2BPhq8m64YxtpFkWjPjARz8kAb91H9R6YrSFyTEk",
  "key16": "3YfLEEvz86VURzxPRfUT1swoyudJX9UiH1w6LyEhPs59EU3JMxRbKGr3F4rxKhnpJ24SoX6YkwrT3fLg7sqTKvnd",
  "key17": "2JEhJzDXiPFGdh9x3Ut5mv1JoPVan86R3r4uZZuZGG1XDs8rTAVHV2iQHKJHs2mpk56ZG2ydbMhVQ6Qv6kfwn71M",
  "key18": "4GAjGG74K66781mQzTqbR6kYHvoL7m1jLoDH7FECahPBZYjm45UyXhVsvM1X9StWoXqQvB7aTZ5aoAnoq7yaUCfF",
  "key19": "56kJfhsUBDsUmyy6ppJ8BcNQoZVsrY5TrYzfx8EpPrtPNzHqyVZh4D4VdntALCznAEfXsozWRdie53wqs2asShpf",
  "key20": "2pZxYvrnWxEWeFb2sqDvJzN3B6A2NJh465Mf2fPAjbCsJLwyxmTKniwhFgANfH5NxPuKUnEtCUiDDuUdWMGoWf1r",
  "key21": "2V94pDQBRuw8guGbY25ThM1X3TzHnkujutAGRqMZyktD8bju2fdKA9QV9KgUo4kRuP3D8HsrSobZfSchthttHXDB",
  "key22": "CWy4Fi1HoXNjuscQk8VbGN1WkFn2TidZmUmSzsd4JYTVvP3coySau6D5NBXEeNzfuCLiitNb7d7wC3p3NenQbRK",
  "key23": "5q1JRytpDqtGdpDk4V3T731o5cPGoGv4qssmbQGaW7RA8dyE7YZgrUSp2Uxk4g5SGpgEQWjH1UCY2w7L3EsvxqPp",
  "key24": "2dxPnPG6ZSEKJbCh9ojsej4aBPDe9oujjfGaevSDGE63wuggiazXxNw1cGbB8TWiDLzszjR7MWgCpjPqqYkZQjbW",
  "key25": "3SyjAn1vZzqRGwo1UYPU7cxy99kQE6NpPhtDEfUeJQofSMvtoJYt1oDozwCoudrkn7BxwtsJSPu3XAH2a5AV4ptq",
  "key26": "kVymAXYqGTrnweG6LKNvPgjS65V2nyAPKvGmasQdK1WnraUCKj4ZqS4CYbKC9Cwq8bsdh62Aa4iLeiCKjpcpoEL",
  "key27": "41eJygF6VmHPoeqo3wD5nshPhGb145212AazZoytoGSaAbgzhjQZLbMKXePwffE5JPN8JB5bZJJZfDxzgZdsGw6T",
  "key28": "U5LiQeUkLgBwdmERyuGtCJducCjBtNRrt1zU6uPYpYZaM8v65NiCVdAWiTXsmXFJ7DW8snTEdM6S2NC3HA2n2MP",
  "key29": "5G1VFWo1AX43LXpnv9BiChKJdMSDg186ZixNyAZaZ5bHmCNbYsr7UNEW1VFnM6heP2dAzRwLpATrDi8gpGMMU3mc",
  "key30": "75YwiifoEiBYXGwiFR5drXph4QceetyfF8TyB7bbdMvVoRoP4qXCguTEMMTk4MAszyo4qXUhDkgbkvNaUhXgSHz",
  "key31": "2Q3eMfCd86nt97qwYfwLxo169HT4MUgh1YCmv6XWzAd1MGh2iYUVtVP9WCnyCiDFhWx5TAanrGnPk5QDP3dkyFCL",
  "key32": "3V37PJJcKvMCW9dn6SxGf3e52H5FTKBmDGRreUzffJnWHfyjG8dzdVA8oMXAtWVuNmJvG5cNSUgi5vSiba4HTxAd",
  "key33": "5yiWZRkUXChuHcZgnXkbpEkCWJxhAd6q2uc3gxtCKrSbyiFhZtE9BRpoCGV69vHHS7dByrdijZMt1esWJBjHmjqS",
  "key34": "MLWpeohDXLLaiWWJUKZCfympscXHecMEoG1WeVhvTHEuHbyYGb17Bbag9eHCsiQGLDbyDPvxHHunypnyh3ELC92"
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

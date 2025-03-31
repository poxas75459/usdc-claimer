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
    "21oWJ26EQr2hHQr24oUFBfi3SmcY9tXezm4XLmvQhfjECiw19oXYDJsUQEY5YVTesBLwXEDiqHiaGtueLFfEd1MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kiU5UjP31xs2DYvkVbjJGsfoJ4Y9ChykprJU8FwpL4f76ztSHmiHExEoQUvpr61fXN8KTVsPutaA23qvkixj9f6",
  "key1": "2eYYEdNpvchTEFuJpb1dboVFSioSGgEsW1b1TVSDvMAfWqUimsAnzTwVLw6hmf2oHX4gBD1DUbU6XYM8ahewZEhg",
  "key2": "3nLH2SYVWNQ4X9aVfVu9woeiknr2d9twopW4GDSAZBw2v5c6LgAvnHgZif4ziRiB9TZN1gUiVV4YJbGmtjE8B2uF",
  "key3": "55mLtFTeZgsi5qX4QFMcRXSxDRKu7wYgXjTHUuW3uVvm88MkU8rjBCMMUpMwQ56E7V4m6JtQUijnR7TnBfMFySBq",
  "key4": "5MxJkYsNXS3yNZP6SQLptXmJBJtU3m3fkp7gGryPpAje4U7XF2L2fzhZ2NmnebwLUJs7j3QN2AgpS6nSXtghw3oq",
  "key5": "4j159dyjs1c53aMSMSGkNGTnpkuKj9FuUpap1dokEQQUhhqskhvh4HD4CFuTSwYyBXNS3o5Egkz2DkSy3pXMaY3D",
  "key6": "4x6HaRgbPb8A7hEBCvodDH8oTCryw985o6NCGedmo5oaQDScpQ4XmTpAstsigfDv5Df8QpzVWJc7wHJJdvt9Wiv3",
  "key7": "3gG89cV2VTVArm5fA6VZ6D5s787MWBFsbvNrCrTMwqTStn6VAWmnvL2EYfLNKuPNb8DcBE6cEzN31mXZMBCejfD3",
  "key8": "Xuue5Yxt8ESn8fCaooEmYKpgBmj3vfBvfeRTm6gvVBvnc8TwFBBcNPMPqPJmzQnQ7H8j1j67FouUdw7DazwFZvx",
  "key9": "2GVcAngSxavDv6Rx4VeWuRtnM7YgvTfaotUVdb8fh54C8Z8rWoL38ZUzoYbCrGxJiYChDxfuLw21h21YvGKnMVnY",
  "key10": "4rzwLbGKDqY5YQu5D7ncvtzeVcc8x8UFyxzK2PesQ7TTFMWz3P8b9ousXSQ3rk8ksibv9nTidpvEmw4BMgeqSUx8",
  "key11": "2bTFdkYo2fUvi7QqauQTgjRtGkHgp8VxowBKUYen9GRuC6Vi2Rs8xd9FaUuieumgjosjUMuTkiFGD41J3gvTgr99",
  "key12": "ruxABwdTUfe9evGQhkUNgeiyA4LeQFhr26gvsPacfNAd9ssNX7xrLHDXrRaGZHeEPCcHMCQdNrkr4k1jXrzxVJi",
  "key13": "4Dgzg4JADwA3jfECAFBE8dmgxBKMWjf6ndR147CVfVpH5rDenruRGYJ1Rx89MmGKjPhUrqhpyuLobCqa1fALedye",
  "key14": "25HS1KsxCq3nKoSKo9BJjwLayf5dk219FM7HbxvctoYp5igYaB3tSc2jXhgTUt14dpZSarBzUxQH44Y7hTArb93E",
  "key15": "xYyiLgaPA7u1JWsuynGd5BrpDQT8w5KGX85YqgNDNs8E1XzVswaaZG63YzCYPZwryCHnnbyg8RSKWAFHgvRzhLx",
  "key16": "4jLxdvLThemq1fYZt8ZnymfdCriBQL3117CKKVxV4NtT978LbQ62kTLj5zvbscE1U4YRbTiCo6mY24sS7LZRTrGA",
  "key17": "QkQqVtfHHyxB6XrbqniE9ZNq6YpVHpEywzmKGbCoEXQ3DsjCPW37qPbU5bpj1sn2nRSp4CB9UyWFSdTkyhgt3zp",
  "key18": "uge9ZahE9m45sGGdLPpyhhLzjXx27WUddgzY1GUKiTpBKDJrSDVrdFqZD8VKXFcxVy8tpmwaH7jpbfmeKmGgkZZ",
  "key19": "3PPw5Qkq3fpUd9ij89Qq5PA59rXDh5x3DQGYjAMJePxbvNpVykkTNQLMxYBEcXCXHDQBENknZ4EFeVeAFgM6w8aL",
  "key20": "4wcnaK7iJk3biJAVSBk2qbX9g78f4e46H9zrbrypQkhfoXX6aVdEeTKVRcQa2jseHFzcdxaUNgneLjxvMVbZRd9z",
  "key21": "3cbfim9DSycyFcKu1C9raXJ2U2XqTiCzkBaisYkdvMwZkTChzCf7KMvrBPEECz9hY5LCMCVuU1Gn1BRjpgtS5LAL",
  "key22": "3ecZsoVLszW2atcRXSVfGinCySoHcFvu4QEo6ezt6zwKtvisPt7jmXAQm3LWiuQ6yBX16kYxSBiuc1T2KNmVKYRQ",
  "key23": "wNXKArSgbW6uazVWiN8Cs2wSyhrBT3EMAMwCfbaetyUvfDQm2HcCFVNy6nvFEGQzJYAuD6nvYk9VZP2QBwUHAHf",
  "key24": "4VQp3tVrJLRDVD6DNGDJ3VbRiEMiCEhDRfbbtEHvtQz26x6rya5gsaC274zgCbUrrJqf4jyGfegoU5i8EPGMwM4V",
  "key25": "5BeFMxFydnWHX7pXHqXvEJ9mJeFFvBKx9K93vmUezX3LaoPNSkAkN6nVNaz9nmZpgyJrWNjZGg3QUidBEh5p6LqM",
  "key26": "5wdNggcP5cFMTLNWjaEoRWqK3Lub49FB7E8XmWxQj6hanRvoM91vLMkD3RyEHRVPUJXYwFSD5DSfB1tCudMj41KK",
  "key27": "4CfZ9xyWY5nqLopyKReaUfxYQa3C1HNWNVuuNZMamNLHiVJ3dD6cL48xZxsJXXuEZwQhsqsSaUbfez4D6QYgm92X",
  "key28": "e8twcDwK63csRdQa2Rzcq1AgiYd4oi3TXb23Bof68fq1KLaC5DqjZ4Ukky8WuE2Mh5y6Nm8aXHvTMiNWdFAez6h",
  "key29": "2jf9ZhRvcRXGSQnqgPU8oaa7HWny56zdRfNdZHH7kBssWFD5M4N6QsmZkRjytEzsmVfo4TSJQ1qLzDT4ixzyeDdT",
  "key30": "2MYZm85FvM4uBJgGUpeQNTJGH7RnJBgHtypHuRE9tEBrVyL7wuqEay5kDSQkoWb9oNQXoQkoyDrimeigtxfUzVqw",
  "key31": "5pp6zkgN5Fb1BhpWzndm1z6XRCwgSqnuqCKQJQot8xTpxHYG1Sjv5ZwuWdkbVZABsNyZPPLC1Sbm9PikPBroYXLC",
  "key32": "2kkJKupPrV5C8Zi7sHxo3jxURs3o65wPU29cvpVrzXFiazCNLfcAuyD9MvxKDyej5VNRJ8EmNwqcDeciw7VpBcvi",
  "key33": "2PvZkMgLRSn6gSJ7oj2wwgpiytT2FG3cbMo6USwKC8GiZKmT3ynfb9b1B9UZcUDEq7uMQFqeQnw5vri7iCippfC6",
  "key34": "8dAdq5cvWk6wAsv93uLN6sixMXaTgmbti6HY3WDChmJgAP9tpfjX2CPgC6chwPKcfni1Nn8W2xoWmUnUrgJW7Ny",
  "key35": "n9dfY1AvsRXgUjmy26tyy5tDznznojV6GH4jxoDBnMYhfmjUDBQ6pHDL58YBtFBhUKyf77oasfCNxExzckYMN8s",
  "key36": "2JokjuthFhFx1nSXNm3jWadL7nL1XuCf1JGeWjAbZMtZthvu6JBqdgoyaiwsqxfn4CheLdeycifbyCNpM4rbEePc",
  "key37": "66YPy7pfanrCS5EzqfPwi9NhMZEgTug9SakF3tKxfsre7L6kvoixWA1mWTd3K9Ke5iRfa1qiNrvFHYLt8qsy9m39",
  "key38": "3pbRAexMxaGCxTCuinyB1xQT9KrmRLS85nF2zCgVC9EQpi2ujYpWL1QoyK6a9bbGcY3ZUsvAKtSQj1JTN6p6YJgf",
  "key39": "4hsfydK46u5ANv5qSM22YkutZZVu7nqqrxZt8um6aVeCjyqeHfUDsNbaiudm1oBn8j5sebK6hmCJXwHmyAGNWGcS",
  "key40": "5WdVheAuPVMkbXfqfY4DCP64C6q87cQRaj84MZTkL4ZCKgpKaZzfWHCVc5CmWQ6unbFz95iayYT8eaQLsaaynU4t"
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

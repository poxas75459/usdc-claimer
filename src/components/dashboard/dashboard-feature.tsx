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
    "5GY9vmKvum9RDMDQh8Kneq2iwQmVivZRkgZCotKcKHtsmoUELGkoR7oKApjDsfN25aABFAUuzMvEqKyGDhiPhNmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VWy5DAhyhKbV8e8TEN59JBaYHQCt3HSRqhVmpifHamKUNDXGiTpSVpnzcQ9BdjMiZGdDtp8G96BqQaP9CXHGYs",
  "key1": "tMgq2V2uKbFpixoAHLCxswStbiqt1miLgkq8DcUP8FYtssdLJPuaB9taGJ6mnQDgTugHWGc7DWa2FaJtKWsDhRp",
  "key2": "4e35b16bjTqQ95ULCoMsGJb6g2sauw9xZCXR278XdZq34A6zfL8mjgSXbSuAYS9fBzMQjHNnVakbYXDqaHd3SGrb",
  "key3": "4nDtcuZyqd8WMSaeQPKPqUkJj6BNotdacarNdSxnthyVhu7D3iQFUFKstkSq1XgJnwH9vW2cnRPGkjFEVkfkqNuW",
  "key4": "QNanUAiFKdHCD3u3tGufGVX8ERdRubLemLnPkZDcEfHdia1rcENpBgcpyEMjWph6b35sfVGJpbBATM112YxM5jp",
  "key5": "3rfnQFSjAuv6gGXyKmLM1aZjT9X6Czxf8x2ZPVcfL1Py2UBNdP4WFxDNMjpwRPoKbZHgHY9krvNmC1rqJZNKW1bQ",
  "key6": "3BaxDds9ELyUXbMf9oLzrJJLoHhQWdktk8MbapeCksYXxXEGfVdrKQxc41NCM7uQZpspKs1NbUwfsGSZvNQa1fwR",
  "key7": "5ywABoACCpoHkeLf9ZNTrxqgMx2gqjvxZDxx2sYufvKD46UCHPscNtbPrgK5c79cJDUuoqMQfzzUxaEe2ER5QCe2",
  "key8": "sVgJs8iyzx5s6i2u8eoa6tDtQKMtJV5LphxULSUcLy3DBSyPwEkrzv3uPg86MxPcLYR1r6YQaAsJXRMw54BiKY4",
  "key9": "mTAUETm9bWpb1qBs6SvbceWZ9KWoVNcCoW4voksEmmpEG7GWoz3Q7xQ3jA2eYVhvRjdQ4Kcr2v2rS4GZC3fJud8",
  "key10": "64iQbALSHBLQXJVDgVTCFRJbgzzscNQoF2mypLVSkRTqf5ZJaEcdkznB7v8ML72wLEUes8YJoVzpGranW4FwyXXa",
  "key11": "1YatT5brGi7CH3TCB21awLoXRYrZnBpKSvambyu8hcb8EdwXdeW85u3ZTYWFFkXtybWhGahpPDXB2uUdmoggG53",
  "key12": "8qQ6i3ywD4Z1oh2D45v8SWcaJAArG5Jvfx13nRCKMjMWEGn9nDBXEykw4a8piF44bQKciVtuWwbQ4QMAZnCAmZH",
  "key13": "3advDP5gc8544xpqcDcfBRrNG6nMb6THPgNUo6xnpSrsHtfq36x8vGGrSofgxspc5cQY2H4XfFpzG8Cfqgf14FZw",
  "key14": "45gkVcV9tmE21zG7eDoWQ4Nsj8eC4xaQ34iSVmXHoMTyfSNiMFqwbEJvkHCWAsgmUSVwCUzLetppJ9x6uE8a9CfW",
  "key15": "42rpNfxhYjGAejRkFSSV3XdFbEPzF2iMV4emFJLk6mfKB1SaJqM7fvyf7hey8Wi9GQth5XMbu8Gh525o4TCbvnZP",
  "key16": "5k46AzUedAbCW1VZZHa8g3NDCU5xKZjxxXnm1z5UjvyUcZbkDop5yeAXczy1cK77GZ1quys84AjW2iPowWc7RrQW",
  "key17": "d2omzv7hqkF28kHGRY9SzCizA9ANw54cMZM7wdgXcSYe4bQvrpi64MQ4XaBpptwSW5B3Z7cZVetudTtzVnKQNXf",
  "key18": "FWQgqwvUxJWXSqWHcuFEjLthv67p6THwRbBd81iC6ggMk9nNoJSxXQspVt3kwryKa8L8LChDobX1QR7recbmV3T",
  "key19": "RHqmftZjCLPg21dyD2jzX9wppiqhJ1Y9b8VawEfT7jaVAB8qySmVFH9EwezsUtB24AKZYLUrZegrRPsZW1ZjfXf",
  "key20": "2sBRgo8obYqpw2CffHUbPCrmwbAmtTR6rX9fJU2xHkf4yqfwvVhouW1vjxSkUg9xtVWP2zjEm1C8wwRaxSWHi6cp",
  "key21": "2GMastCzzn68sHhWJKzDEPQCcVgDuEsYjUXf3oqX7pB49hCqbCUyqmzpuGtQ6jBQFWXcb5379d7ojAPhUZ4YtkGy",
  "key22": "58NWedm8pBc9tekCcGdqnKgorCEAj59L3mtQkwyyhjwrbWmD5dTFnaDyhSzmv5ksvkvg1NKsG7PzpcgtEBBDLEoi",
  "key23": "2PMiYkk4oYacmWom2fA8qiF3nvsBDUJEuCa5i1SCmX4bxBpD1L6ZCfegFrwYFAokqPDqVhwX3yUt2dC4p48eHL64",
  "key24": "4eWdCMMDwVHGssKttSeAJRA3x6eb3ivSnS12wh7hDsxBJED1aYGFNjEaARD7i9MTBZVy5GYnZt8iWVrqEo7FYXAX",
  "key25": "4bLXJWrnRcjh7gMnUFpjQ92szq56WZLG5RBAN3mDZYhdgFXooAaSQLdMCyxT8nCuNkNkpChLZfNPK19gfqRQnJyL",
  "key26": "5AMdzTHU3pY3xnPTBfQpxtVhCWec2iuTubrANqmjTSQsFhu4MXYnfHHKutnLtFwyWpePfbG82Hz3dFdkz33RwoKd",
  "key27": "4Nmbj6CctP2aHfvagDck33Xur5UAs5mJUykwHeK9wjyEgBT6R1j1VhkwnwBF4xXC9hbg8mMvPZPoi4BiX9mJ5uJc",
  "key28": "2naxhv8NMLT3rwMGws4ZUW53o7nbGddf32dHBDeSxwNyzDsQ7Sh1goZczvarmLqTfZ2K8C2zU7Ewvt4pofYMM3D1",
  "key29": "2swGDnWzhCmHSDnXBvFke5Ls2XN5ovUqF4qRV5sKHwUfAEs7DdGBsqWrrAGtoZhySzSrVJyoAiqfGhPtQHeUwMgZ",
  "key30": "2PLRn9H8AHFxY6qid6dxwFdrEGHRj9oWVAqfH6g3HkGvosgwJHgM9sG1sRJ3ByQZHEr8qqxfxQcub4oR4LuPPYZr",
  "key31": "625nmKhx2BSnb34ceyKfH3sAH2faJVfY5r1pwHXSfjmBJMoVnrekJnezF7p3AW6bWspwiRsJRCQv25KmzxaZxws7",
  "key32": "5KqxHe5EhcYkxAnNojSr5LAtSBH2qXSSxHBgJPfsYLK4wZg346yj9rgaj94f1roMXWmuWP7tRfJZoHwj2pQ9nhDz",
  "key33": "5ErLvSyNTZqbeuXzbP8ALBsQp29hqYn6LGX9Ls5QXA1vF7go8EPFqv3ReGEbvqbFcpZeeZ7nafDwexHow4c5dyzd",
  "key34": "2EXUXReU9mewLQ9563qEoPuvhTD6FJXHGfshSh4avXw1yKvRqyZmpqcXySmsm5SY2YL5Zoij4bSF7T9wJMh8kUgQ",
  "key35": "vdqxeW3RqTtKGaZc1EY1ryngNoAvmETUxbxN4p5bU22ZmuPowrAJrfPrzB9M9wtYc5ibWYfeEYScDdtNNCXRxGb",
  "key36": "2EMJhfREBN37PXd8ALkKnmSxb3dtt6jYsKf3DcrPDKY1CmkV83heP9xQDRhvXXj4G9vZqucqmpMKs56CTuiojiF2",
  "key37": "PpzEDU3BxLXR3qY91iWmBN6JMhqNaZhavyWQeW7gdinbHhuLus1bZzyzHxmkLuUGEFT8DQdsQySyhBZmx3tVcnL",
  "key38": "xMBD7z1S8DC4Zzn7LZaiVx369WPXNFjPCDjLiuc7xkoyBu99sivysfm5q1KpYhLtNkRVcDbSUTRBztCEcC2VgX8",
  "key39": "4LpMLrLufFeXjTcuHfxiLyBm3QCWF4zdAABLiMucQBynSYvNU2nSDd5s8Hnx7CKxtRdeD5AYASo3EGL6eYUjRTPb",
  "key40": "4dAwVTDBHa1GfAgcCZsUfcz14za7tW3RH694yKuc4ht3AvUMj5d4nNtPQZ9FCZfdgmGYuq2NeC3TxR8p1n1MBG6y",
  "key41": "BQqJuGc3Q8879hFdtsn3N14PJwG7qrZck2NwsLDntXSwXDr2cDDXgAvMPxzqJv8D38LNY67y9JseQPZSWVTb1rg",
  "key42": "4LJ2VSdgDma938jvcmfVuPRHrERzksV8yN5HEWQiZ4r4a33pWGgg1tKwLGM7pKA81zA5TokLfSe2Prme31EYyFhW",
  "key43": "3U6WSCGb3Mf8mXyueSPCnyqwDhghCU2bTKjXAPxio8Ve8p8rP8eE27MStGCvs8k7poCLizF3DF9DUxNoXgb5aSYx"
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

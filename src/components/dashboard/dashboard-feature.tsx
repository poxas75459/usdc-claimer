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
    "2QonV7HmjiGB5NxbiVS14TWNefWu87pnmRHsKzfTkbqjrKeeUFC5sg7V2ZUVDBY4y3f7TmPTwe7GmECWgdPdVzhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtUAzNQn1p9rHGPGDG8YJe8uxm9iLinsdgBJQS6Q8HAjMqdKTobuG2YkZodsR7e1ANk3AXZjVSVFX1uYZZfTm4",
  "key1": "26cuiFub8JDJkCuvPno5Y8gmgUcYCAd7AhQojtyifM72SjVFyPUAjSzCvGwXjvKbLir52V4jd4D8KGt6jVcMRbdv",
  "key2": "3Cb8jyhm8UuTiEqtsiZjFspPGVDSHiBB6t6cGnyspQfnJWRh1Tz1gEvZjQtPCRGUSvd4dCTr1BLHpwabrx3zYQcf",
  "key3": "56zAicJXemGaXJ7oCDgoAtuo7gYJsAtdGrdCqsfSqrPeDhZ27aDT3A9RmxPQasPGN1gbwbXE6q5xpJKkjgXHoAMD",
  "key4": "5XbBGNZTC3S5J5xsEPZrLTQqR4uD31m52Xs1DvBrxXPQdQ6XYCVECMh3E3NPxXeg33LkYaAL8iyUDwjxbRbS4kHQ",
  "key5": "41K36W4prsonkMiGenxGouFBakufXLcKYRMPEiap6TncWDs9tBwy5T7Y4F51QAkxNkdhBpPAEof3F5Yo7YAJXE3h",
  "key6": "47rjh4N2t6orgPnj6PC4qjJUziRCbWC8SRQRgkQU9TBUHuRuWvSD4FNyyYxi7e9KpSVkGZh4yAfy9prLDqfNpWdv",
  "key7": "EhSJ4sZpYzqTLGqK3FtXKm7WUoSK3j5rfCpdu91MRtXTrwehfdCxWrHetvn59eVkHEiePfx2Ma4tjiQyqXU3xTM",
  "key8": "5DJFXNx1UqavVPSbthbQaVX7GJovemNkEj45F6JZSw7crcN4iQbFdbGaHXjLJCshLYjaag3cwcG8ek5UMHuKwNs9",
  "key9": "3mHmLmyxRvhMwQFoG1Rshzy25mBnYSP7TJFZHKrsoaNxFn2wog82aCMfFVusAuKbazp8DZ2sgLmdWAsJc9KLtcra",
  "key10": "2Lu2UUDZLaYw69j3TtrjJ2EWzQFF56HNjQRvB6EPNjobUCxufK8h5jTPw8xK9sonoyReCmuXyBUxbL7QahLV6qhR",
  "key11": "4Y5FJ4oCdUavSCPqTa9nSmGGTfpm1cWYnrTPAzh688zMBErHDLEXX5vECMRonLyuoe2HtBZ44QMo9yt4ecw3hgg1",
  "key12": "5q5u7NyJsyL6kZW75X9kMYFzA6zi2amhGnu7BdUa6fe4SibQuLuHpG4RFXecGXAJ4xuHGWqK6emDpwES1NoqWQJW",
  "key13": "2srMKaCR5mk6hYbLFao4t6nFFARGp9BbAXxMmVYdsnJfcnMexb3Z5NEHUcPBVXca1cPbdFhqv6fdMcXbkuYUT2JW",
  "key14": "2NMUSrcSifkvrWbXHKLZ9N1G1Usp4VUsuKWLNkh3cB5AQ3Apc1FVUe82SBr6JpYsSa9AoGPQ99adngPdnehSys47",
  "key15": "5mnYtfojDaKMVm6LcuuchZkpGnpnxLsXntcPnNEs6yBL7pzZqaWeQhX3EQXPAPJ7NYMdYNEVTsUhokccM8hXdYoN",
  "key16": "4jRDjqwE7hqN9ZEzueVkDz1PsUZZWpsbgyXpp6KDY24RiWsU6rYfqB3efygj9z3NcHYLzbUV4fKpMd4oW2MXy1mP",
  "key17": "2vx5Dea9ZzavpBDqF3s1Vf4v9aoKSy23VLsjREyL122rQFeRyU2mAUpBtJ2qe3mhT7Sk8HUhrVGwhhQBRFqB8jtF",
  "key18": "2WedECCVpQDXexQTyfbi8VySGJq176x6PRou4gyjF6JKkLV3FX1Lwjr6jxmweEWjg74A1DQuGEnD3jHnTUddmMfL",
  "key19": "4yifQLu9xxLHjcyspDhSMXC7f47xyEbu128v5YGzDHbmvhjtDJQoU7NGEBN4QWRy8mChX4fpy4bnUo8HnrtB9RSz",
  "key20": "3DHi7zRVFqaNa8qXbn7Ypyhkoc3JJBiE3KHoYqBv2y4REJj4x6w8siCXboYYDa8q3XnGqYmZGD2zkvUvAao3uudP",
  "key21": "5Ujck6nbgcYcVZp9s4K7eyyFX9sPE66SxvBHgsum2uVv633CQ5MAk7iS9mS3ezQnQUnR93vkC5k6rYb7XEKU5YUC",
  "key22": "2zJaGjtDFhchNhX5KWwfRUmBifP3tyzymGKkZzspmAPFjR4m6ma4dF86HK7jRw4g1L3THQr9Y2fQzcTKJCESKhMB",
  "key23": "23HYxr7PAQ6cHRiA6GeaRvw65u6vAFuAetFKaPiYSH4KjoY8xZ4GFYU8J8QWrRDPkjRa7qHKtofVbRXFKK8gXZFq",
  "key24": "3PNPKRdymopc6pdmWS4bamGGQUwEqGLJVUVQ9mTZaoQN7NvD8Lm8KSPw47ssUMWAwyz2pHrB52FMtL94pJJV4pw9",
  "key25": "nPDmdeb1EXHMhF5CmorBrBcb2hzbgq6kgPyVaugLDU2DKpxMqE9tZukg9UUZqmMXD8eQLT2VBAkRfXkVnP8wS7V",
  "key26": "2XxgcF3NvxccqtYAdKExTrna5Hw8mjpW6ed3gRPLgBGDL534ZR4VAiaCpucEjUjRs1srh8QFyH6KorEdDJ8VsXSY",
  "key27": "3iH4gZvdJs65erPb5y8ZvbReftg7v21JzjnEmEMb5rMdeZSWuGkFcxmkJhfmsJzgyv5FK3a7bBQKjVXH8o245Njy",
  "key28": "2Sk3JXs4uHUY6kij54dMQuZpQkquAn9AmqUd5ovqy7H1QJvCWVJE8mJmwYY9VdL5vLdxXcuXVvQNhcUVLt1QUC2x",
  "key29": "2bKj1pQCdv6TCjgEM9Kj5542urXcwZxQ18HJWmJVdMnvKEw9gAjhfTcj86W3wiVUYKndsE4JXWJvXpLXoBBuYQjT",
  "key30": "6imXESJDLZdS2uHKGiY7mENP4VhfgTieFwxJ24LZRH64mzQ69VDSUpwEzigJGoeVbDbYAyngq6gegqdeJMazNoN",
  "key31": "67EoiN7PrY6HGi7Mj3Ui5LszUqEKsczoRRU2Wrg5rAD5633VkCvEPgqzMXyUyLAUihneuG2nLVBECkwPWDga6TKt",
  "key32": "pveii2aRq4346Pwm8VqfkUgxNHaVCx1xDeXw5wWVZCEt6ZMibRhtGvKmpUttkwuV8UuGGnzgW4WEci8RyDgdMow",
  "key33": "4oqiFRP23dWGztMhXzhm9QShSn8EQanbzZMcjXc68X8JA192U7Ljm2Pqs3fTmx54T7eMX8w5bpya7NBQFXyqH59Q",
  "key34": "2vDC511QwtVB2zvfxGYkWAaxMbJPRFeQTLBBUtXN21ZzZgfzad7qZzAWvHtpsJM9PxMswNEGkE19DUBDBTAHaZ7a",
  "key35": "4XbWa65YLp5uECjG1r5shgnmyv8tAgRpgFs7Wttqe4YFbtCBKsMvBFCthh3D2p1Kq4v4ngupS359RJj2n3KGmR3u",
  "key36": "3CfL4Z5q32xhtSVoR76zwVwVqjeixCngM6zSvX7JEPxeruAbY65iqSQ3L9muBNmSpeXw1dTqobFRYzJhRJngM6F3",
  "key37": "figYLqMwcsWyfojvReDwxbiZ6pauyrBwhBSzYpX2gkQNqnv83PHiENxiU945pQfuRJZw4wgThw1bKFT5nxoY4WD",
  "key38": "2B5yv4yiwLVjj5SwUgHa9yVzbtKe11z13W6sRjpqKuA9M23THuQZEx5sQRvQY7EJR3XAVth8obqirhWsw7XsmN7B",
  "key39": "4ccbvjPiMPurYhifoQK9GokRzh5CB98ZqfuZ11ifNrs1wAEAw3XnJYDByAFWa4oX3WgZCoB2mGsjZpjFmvpUHX5u",
  "key40": "59D9TgxtSg8ffB2qFCUnGvruSArm5FU9pfUKyw7XSPmC9u3nrJvnQcumCTM1YamzQBBxXrDpQV6Eg4Y5ivNHFBXW",
  "key41": "5orL64Lifr3JkT8V1hUiENHT1FK1vNLm8UUxnskNqqCsejY3tpwzQGnt1E8djH7brm2pB9nbzKwYKmVgX13TXnpG",
  "key42": "3gYbv9gv3aD6kU56YDqrgP1TpMNUxALsSJJtRy398DwZSgcZaDJpWU1UVAyoP3RWTgDRgeb6gf1iuBPgg9Z76r9P",
  "key43": "4ddHb5oY9xJqorCQvj7U8r21QRdZkRwmXhVfJTC45EiLsFjKxiV5n9QnLZdU4wxp7efeAeMnnJeH3S2SH4y5jEyZ",
  "key44": "5gzpmJ3647bjXiFNmdqqsHWBwKWMdCzUAJMgtndBeFTi4sUffGZZywczhXmnJkhQgcuiTHXquUVvDsC6KtgMc1as",
  "key45": "2GEo7fT5Je9gQxMDiVwmd5ZLerXYVUgGeDqCJCeSPdzF42jJvEWgDRzdXtjr6mtfMTyTJLTr2c9Qf1qvpoiRmeon",
  "key46": "3rGRbv8kpEejPUYRPsExiqw3wNe1vCwELPRzr9be25SRgJG4zmB29aDCAFVtSfhkVPAh4HRoNP7A9Xf8aqzArmT7"
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

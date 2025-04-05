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
    "4fohaMpw1GTViGgSrZHGE8YHkgVdtVzLDcxerfsq8yqYSk4nxAJ95gRYDtpay6duq5bubMs9uRhMmWwAAEKGo27z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvCfxujJvrevnfy4pM8FDXU2m3Def1xNFdg8tLvzgZaj9BUtR4YuS7AzKgz6kxeSrPY9cuTxdLW7PYGWvd2TAfr",
  "key1": "3zvst4YxAwywm6arPv7BvUE7TRojnuTzpHLMfLrBzW1mKmWkU8GdN7gCGCuwjf2yueLvjkr5wCCCFfYB8Jnztpyn",
  "key2": "49VKwxUvSGX1g18UvsEppo2Cc4JD5YRdoo14vE1bdMLdaRveweXnDZhzaao2iL13DNzkW4XDqSkLfzhkChHv8z9R",
  "key3": "5oiYSXSPTryeKatXesN6GGMXoD1m6i97BYG8Y9oYfLhmecHGUPAyCjkqguKtwM67wvnWCqmrWEWmAhpak1WBxAB3",
  "key4": "4MaFDqJ5z5ESEvJ4p1EGXRFRkj1fWtxA1m2eeEXw71NNQism43rvZy9DXpZpSbUqLQ9ak2UvRQA6wuLbSamkuYdQ",
  "key5": "vwYpYVLQSqT4yEaohGPpHAZt49FEsGZFLHkzZpAPjoTs4ernW9b2uhZEtmbpMdwA7iBFNpAXYe5fDug6rLv6BAR",
  "key6": "6FU43aKcebsHf6zzy1teRVcntkLe5cnhnbbqNyjbbwCpagpkQBdyxdA87akvifdL7fjXkN1L5jVUWemQjPhxjeB",
  "key7": "5b4FYFECnqmahDxBk37reNXT82LCEaQagH1faTop94vvMe61mRkrZPfm25FXunweog68yGBiWJZiYB6i9i8q6way",
  "key8": "4jCtTMfNA2bAoaVqaQN9ZQdSxewxBbKD88zFMiGH9FrhVratxdJkoJoCMmQZpeGHEN8UhZ11tDJsU1jccnr7iVDM",
  "key9": "4KYc8W5BRArJxvu8mY13en9sUr6ZzVCdqWH3KKdQWTtHRdtXkJ2E2QNy9Sn4Dsf7YAXCAFBXjifkbeW9wYx55f11",
  "key10": "5yJkPg8JG7zw9UPFdTCumCQru754jKveqYCDGAQbutjp7uc3WWW5pV156b7Xe2CVH2r23pK9NZUZ3ndkPSzuDSRS",
  "key11": "HjmLjGLcBZtzWvNHS4Ro74eZHPZ76ZiVKMjCFeRe9eNs4ZDoCgg22KmLs3FtVndqkiaa3cJ4RmUUWP2bhdnTTw8",
  "key12": "Nvru63mCVBmTmZrP7E7vWYcf3PP6JHMyCxLCP1eZ2MdX9Y2NvTGfhpNByUsSmDt7cVMmoosXGWs1NeXmvnBe5oY",
  "key13": "3XSvLVthcKQjUzJJXXF4JhbZbaBWgJQpjVNj4RYDoJ4DShJNogi9fU4LUe8JGEPSAqh1DjYhdjeJBhTL8yPuozKA",
  "key14": "3J7q1hWrpw4YmpL5yV8WHJEPsPkqWQCnuUaUZkJgzCaLhiuwSwW6cb5CQKCQQkU9jN7TKZCPwNbAUWuY6tYvaR3s",
  "key15": "3DU26a3PkGsTCzzqAfdmubVgXyuZuF7qwvZzAN2xUipyuexke2Vq2VwsZw4TLxqtQzay8Hut7CnU7X5mX4UXmDLo",
  "key16": "5gx3XKCa8T2bMW7DXgUrvLu5t2xd3CXk4K1HM3t9YB3npbNHrLwftQABHqAp1MPgJTauf5mU4Yj2t2q2DMFMwdYc",
  "key17": "5ef7py1EjxwZQC7yTjxXoHkcZgApQCbKBmjBa8xaWmJPkd4UwUmXAHJKPyyZGmVRCM3SkNm69youZSRJ8JMKXfTo",
  "key18": "4j3vS8KpHtswGExmRnDDWcbVNBf8QybQUYWswqHCAXCtwx7cUKMT2ifavj9HhQ3WsWxos6N1XspkGbHuKzrssTWU",
  "key19": "5xN3oFHaHPKhVvD5N8VWhvJF8W1fh7C6NNPnN6MEU1yEyadTjnbKEsTofagLn5yHcgSXhCvhWviC6WVRD1QpCBYa",
  "key20": "4pAYB5Q48V6jRdYcJAKnLik8miEPhgRcF793tx7G77nc8QMQqpTWKBQHTc8uPBq9KGjqRbRX5vq5SBxqSyTR7HGB",
  "key21": "4NrBEBmJJi277DdMs1URRJzLtq43RYTH7c9uR7gMSLqMt2FgkeZLxBptVTmk126wmCgRU7Y8eGZEs66NXcCpChXM",
  "key22": "5e4Cq9K4wNS8nPQue42cphTeVxpvKRctmySDaEqFHGLFsLjpraPmkDEMMxvQ97TwGof5khTf779aA9VhaU1cBRsB",
  "key23": "LjA6CKYTv5enm7pfAmQ4zsYwzQCMqZpRi8iRQNPDtD5Jcva2vGPv5ujzHYNu3G8fVWrfxktpF8G6Q1zPDoZYLpf",
  "key24": "4nKR4rQMcqAnyBDdgKzVTa6HNqPDPGdv1Attrvb833pVWGXfwBMtQugNULdGXtnUKQz3xsn42hXMdktLWbFsZU3n",
  "key25": "2MDCSjc7G6oJ6QKbcigr6nVaWrU9QCwANdZzVZvmEbxUnkhfu1WYNg5iJw1h7UN5PtEV1hfKB6QjupQMMNj9bEHB",
  "key26": "KxeNuvpAWRLXXKaRYfHB4JM9xSvMPXB93bqnSXv4pDdNyE9gpN98YhZhgtV9etLCJxcmfSpGsMbdSFHfoa6pHdn",
  "key27": "5LeRXRr16psirJfQgPwkz74fid43Fye8uBQhcPHuEBF7p99ZVkA3zgYvsAcFZ7S6wZurntGaZLAyWXXMSqgGfNt1",
  "key28": "4fuykvoLpAvC4pEgYUgESQDDpa1fZ5imuL9Y3U4T3MMRweZEtMxWqDsxLHscTAyJFMrD1kcY5tPVYDVvWyWS5Dyp",
  "key29": "58pBz2G3zUdKo7cApkAPXky373mtEZhSKcozkSCPR9DygifvjqW3t9wAVkUCfZcWMMdfTVSNofbsAQT8pNNmTJaA",
  "key30": "4ruVr4xhLPWKTZqwVF4L3Xdo7AadzDvFtnd3bK9oY2WhFZtRk5yMteQrpX9W529k9esi4ChBcnN3vMpzmfYta5ak",
  "key31": "57M9YyLNPvvaXkJmJUD8YQDhBuqti6YWXvrfdL2mcv9CQUriyA7hULL4XQ7U8G7TRj4sUoognJJK1brDBZD1HVbg",
  "key32": "rTusB5V3W3MVjZShwitJvATiUjehUPZMDEj652g2i2Q8zFkLBDNe5ddxnhE7ftKXoQSgCKAtDTZ5LUecjmVaLWS",
  "key33": "3nNtQu7WndfeHhBgs8RjWMBcD85sNeGY5jfan8YzKF84oS72pHZychjaRQ9pa28WJBQSzoQdx4AH1gHswh3AEUgH",
  "key34": "31SJnx5gCU3PwbNQ96ojqPnQtbdVCEMuiBqaAvdZuXMBexxx87uYSK9Sbbj1buvNpnYTEDaZ6P2H8fC2P96RYe9H",
  "key35": "2G25oP2oASKT1qXm7ZvJq7AbQGyGFj9qNxPM1yBuaiWSwRGpe8nbZijrRPTv4wjPL55ZvbkqYPsd87vNDdPXoNer",
  "key36": "33Gqjb7Rq3jWxMmReatpnopEhxJyGAf47cftWXUyRB9U32GWpiyfxNKVAjDRzZwNG6mMZheWD9e4w4pWAHUZesnL",
  "key37": "3kbgzarUFT38fi7DeLwVF5kGrFbkbSB3yJSiJzZJoexPTP5rAPxPairodCc3NT9D3tR8Mtm2WbG4aGLt63PddU53",
  "key38": "34cHoH3cSh6Q3F6mcxAWKu6wwHQNqWH4YJ6YiUL3GezLpScAyQBfBymPnWa1EfTe5C633YLQVGVQFuePUB7w2Mrb",
  "key39": "4Hc7QymUvGpKrLn7F3AANpiMrDmBBwojRmKodUTjvJkaRwNr9jdHxxBENzttAUj27hxKC9hmYi82cQtfGd5FJZWp",
  "key40": "4VCV36zV1CkMwfoLJBNei2RKD1Jt52qDLsWcqUxFepCdo3C3rbSfc3qqGu57bR2pSWnetKNAHYErn5YZyQy6c5dN",
  "key41": "L9DY3CNUnYWC3hbXMpL9NuFBPV3piSCBtAkfpdw5DgXg4fPnugHMFJx44c2uTY5D64N4NXAb9yTpNM7bRvEyhdN",
  "key42": "3A7PQMMD7QtkzZT13RRepXjHywR3acbDrCAV5eAXvzgQV3rjx964n7VGj1GQzwqm1vMQehRAoFnqUou9knmnQ6Qx",
  "key43": "2njNtXVUgUyjTpbv1cvCUS9zNgGJrHUtYuNVVXV9pKgmzp4cXvWUPZJ1udzzf96cQhtjZnXxRFYocDe8K5DGgmfx"
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

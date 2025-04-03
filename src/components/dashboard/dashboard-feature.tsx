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
    "4BXYiSyfr7m3V2AiHq6izN7QG2RtmqsjF6FKUn7EniTCAbyB7tVaymv9ig7XMZb88qRcm57SNV7NCUznnEo2o4Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgjc5aSreYJifJm6sMVK3nxc3mYn6LJMz7otF8RFaY662RpqkgoRfke3pssHCLsmsteQsoqSkfzCeqPsoR5YZbs",
  "key1": "4BM1QbovMtcY6bwiYd2RPfGGSiQL5v2hpcr5US17o71aHfz5qx4wD749DyhpCGqwwK15UgiV5bfTK6ZyS6ikgcXr",
  "key2": "3e8TjLikaZwWRXykazt6zt6CtbjxYxLSWha49qoVos3X5BFJoHS1Ach3BXXnqPzxbmPRn54kAv1sK16eE5znPpXo",
  "key3": "3qQeAGZGVTkJqA3PCP7Fs6SZXt4v9MzjneUQW2FxPV22H5p4wL6YhFpiYrw1sr3PRgTu3yJKMkxTjKjs6unNdJZT",
  "key4": "3rRzjd6kSGb3tD48eu3RaixUDWnhVwGyb1BRip4P8kAce6juUu6GZ9yRpYJD66APQSEYwykYeV2eiGR92igLrHyu",
  "key5": "57X4Cqk8NkF76dfRCtaobjN471ygZmKyghEWyEtMgiufk4wku8y28XPrvYvhB5q5Uq7D1PThVWhFxTU96pxn1WPR",
  "key6": "tev8PjmdLhp9qTQji3LnRhhDtHHRkwq2nQ9kDviQcERYYDr5EUHbYPBBuJueY5Ybin1Pg5gphUstpammEiFkpeu",
  "key7": "2psmAVE99bPE5fRtzQPM9DDQEPfuf2BBjBDFxk8TegbFXURjSaUhDUCRxKm5gfWqHhDTBcSSTrhzXa9aqMU14zVs",
  "key8": "QT4YfCBaWjcvP5Z8WuXn983XHyKorcjiwN5zsW4z6FYuUzfGo7xMBHMcQ71AkuD6LbMq35sH6yvZdmK4PaxsQBE",
  "key9": "31fRFxibqyxFL8L16E8mXzgVvPPHzY3oFXZb2vodDugq3yA7jey7GQQi4TDRy8V237YCqCeTepK34LmvU9HDdWq9",
  "key10": "2YDgcnnLXR8VHMsosUM7Qk5Jk3iX8Q77iHCaXVcnoq9CQdnxieRjNB69xe2o9nodXL8erpmLtdgo7r9SeWP8i8Lk",
  "key11": "3xir2JzonmRFtaoKmyG4TxAauKwRJLchTzdHdKpxj9bqfRVttiLw2csTLzxEz7iAfgneGcU5ZRSomNrip4i8Uvg7",
  "key12": "V1H3K62zRbt4mWEp4KfBPmUrmzVsYZLQ2BQYmSS8nEQg95hHHncU6nzFW9xTPAo4N1VBvVvKH6jrb4Bbd9mkfEd",
  "key13": "b3Ykb24X4Fu13BCVYqV2RCCe1uRK9vtbGV9JrRW2C4VWJEiGYJV9j5fsKTPYun7ogMDZcgM397mNzb1ZXdwVeqj",
  "key14": "5gWngTjda4sMQppDsMET2ycv87q14SheeEUtWcpRxvnawUYtnC3PvAQud7hLmP48t7QE6mdygM5ofzP3jiyhzdkV",
  "key15": "4UQBseBV2GwsGnTpj1rjLJ3hTVzeshjdpVeiprvuwB5f4pjLQYYJ4vp7rWgUqA64K6YqyKJUfK3b1GE15T43cCqq",
  "key16": "3Tx7nYWErEW6fJJbAzXMBb8VZVAMLgF5jGZCF5g81eyATd3fRsg8pzikhovo3faemT2ow3TcZzCAwGNzVmE5PY3P",
  "key17": "WvA1Yf4sf6RsN1Eo8DE2stmUQoAj4NKq5PrtBQUvvbjUBdFks9yA2xFSSCrQ1iqxjP59oXevSob74CFJTk8ojSE",
  "key18": "8mrLo5wb7mPk2f8DWsXNBhDusvGus3vGNhzjxjxxmhkwCTXAdbwyXZvPmW5CM4AqCDVtR9oPgUsrawQJ4snXFiC",
  "key19": "4pCosj3og9ENziVjsvj5TrQmE2phPwTgvrkuTjt3sxU7erkhtxq62eiYNq6b251HSXu2kYH7dfnMgLNT9GyHaFWT",
  "key20": "5XjgYeMr78ZBbEYLqwH2ncRD6fLNqnk7oQGYAzx8ee89HuaPhUYbDE7jMmmtjWuzRaskVChgoPqML5ZsKPbMbKrF",
  "key21": "5ogjTd4SJWCXxiaE9F13FE9MsTXkgtWUCR3AZ6wFBTUDZ2KZgokkUHgxhfcgss4iSzf5kNf1nr22EgwboDdvSU3z",
  "key22": "2roBgp6LPtRrdinymkzZntH68WHThNCfZmcnJdH4BehcvoSJKpWMf4pU8qYQzw5piDwAY5PK4ESgm1eGVkjGeEQU",
  "key23": "63tUDvYZEgsQYxxXdC2mXgnJC3BHmsKVtgXrpe8rufRMzLfDgXSiJoDChUzHn3dK6rD6oYKzGSnn92EyKg8kAoJL",
  "key24": "Uz3s6MFF6eggTV8KG2H6RraQR5zt4PTrpRSQA6r5Fnn7NsZGvnCGFrZHXjNdLmo2y4j4k6cc3f6chSD1MgB2gsN",
  "key25": "3PUMYGMbfFcH9hJqLsRebjnX1sNAV8toDqGapYMkzBBmiFLGWE1gFwWQgjxMpgD9VJAGfLYGKQ5KAyg54HrU5PPe",
  "key26": "5yWVXNtvSdURFSJHg7SQgzSkj6yjF3FSN4V9iyVjaxvoDDYMZhu4Ze2WbxL7PN6Vj1UL7gNXvVgzPyXANsTGWife",
  "key27": "3K95pPxdVKfmzPgBbKMZsJHpGvVSycRdixNRJFsH4hUrZwpEV5mKSXSxgRWJ6uffFDJNgAf9BZzJze6oUjvGkufY",
  "key28": "3W2ixNgYtppm9PKqhs8HTyQ5J5t6EEr7DA1U9RDHUMQtxWDWGCmwwwvRLx8CeUTkgRNZDdK18JsrKdMacqK4MN86",
  "key29": "3VCyveQxnzyG8z6P6ban8CwaNBuoEe4HRbuV1Y7etrd1ye11btKPiVxhR5EJryd9qkXgKZpFEJagSkUboEfxGiyG",
  "key30": "2XMJBuQvyoSNeAiLA8c1j2dE7Gai8WbwpHjvp6eVYZMK54MyScepVH2qmxZAW5kpcXr7ekrBrjmpGsf5cBhoLmmY",
  "key31": "b9ECf6snEnHeC7wCbZpNEt79c2x2ruoLeuFi3oRVX7eqGb7sqrXoFmHGTaEoxPHnEGf3bXYe6LUkiM6ZpEnSoUL",
  "key32": "K5mmLfsCMZSNJyc3UJm2Pr8hhadUXT2PPe4UFBSUZjLHJ6KnmPcKriKjhh8G1P4oPUDAwqaAyPFpkXjhcSAAgvM",
  "key33": "2rFMXSuKnzLhR5vWVEZU5fUmkAoMVwnSCV8qXUWHAL8nfgpu7HBTnXsRa1c16f1r58EtsvjkRzdaRKDeWA3memwt",
  "key34": "5DK1LaNJ4UHTV88i5SWQXgjvoidAqGL3wrKAdjVUrL3aaU9xbHov2L8wgN2e9Xc1mFvRGYiGFn6KmPg9bCEkWHNs",
  "key35": "tNQzATcor1RTT47X6C7872aow5S54b5bdVgKkAPzziL5taMkqG2igB3zewDkSg4hcFDrFi4PGPouJ7XUF9HZAbD",
  "key36": "5uXxiqKg89ajmdu4ZmeB1T6N9HveUGvjxLUfrEEeTBxv6K13F6oHxShq5RZ8VctmD2kfJ91TJvciUzxsPhfWgrFf",
  "key37": "3eXLinKoRHBactfLgx5UK1ppgs5SkUY1Fn6UZPZQsz5aWgrvWPQMxxR1JM9xAB6RfvhQSKf7XSZR8gJFuT7utfMM",
  "key38": "5GqcudfY4YpDUJxobK2hYV2HCFAbwzgfVd8C4PZ2PtxHyXmU7hdT5yPZjdRcsVKLn9VR7GPBH2NWngrzNKebAPi9",
  "key39": "2xBrawSDmN2shj5xEWGDnu8enZnkkaKrdxLF5FCPz6s9Pmir7WLHgitd68sQppNVHXZXzZNJGgtGysGocS4BeVL5",
  "key40": "41fTGyQ5vKyc7mqaZZetzzM7kikTx2wxwrF9QQVF2KmeY2Dtr1QJaCbc61Bk76CGCa4RqDSjZxT3jFCx3d5i71i6",
  "key41": "wBuPCPgPrKRWwpNrTwP9c3rA5zEE6Um4tgn3kU8viyxJmJEGLvgYSMAAEDYfkZwkNp4eq9h5EgRrzPhfTWGkPy9",
  "key42": "4Frzk7ZLAASA4RzqMGSccsYkDERdKiEzkF96GkeCPWupob6XNJrQBz5y2arkT4fKwnSSdJhVpMpogYwxnpwv7v6E",
  "key43": "4sKTkvdPpAARkTkKstznCgd6ZXhC6cKjeQQjwz1zD2uUzDWCznqsBD98hzRVmfJi6wTdbLx7w7EnLRVzS9GFvda5",
  "key44": "3gAs9rGXavJn3QPze2pfqEKMvnMP9gcypWTHEkgsmh2EK4MpdS6vebRMHgG8CQP2hobbiJUkdy35DrYhwLdMCjpE",
  "key45": "5JRkHSHBp3LE239CnuMNzWCFeAD6ijjBfFDQX5FkAqqYrgtHLcQufhjKPoCVc9xFXmJaekTEDbRZnPNPak82BTxB",
  "key46": "37g86KJusLbr9SQA52ix8q62XWuQZvaEAJMbiu4WuWuagVGHFwa9q5TRxAbYMEUXug4EPVhLHSrxJdnBYkHAhajC",
  "key47": "4g5N6HFniTeuRZp1trsvComh68cx7FNr4nw7Utt5Qh721JmESxFkorGywPsF86dK7iSGXcsGCtqUTyRiv8vH9pHi"
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

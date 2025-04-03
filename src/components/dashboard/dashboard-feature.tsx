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
    "3kdaeuy2x4QSkJXg6fB7ywKweVQfLQ7GtoBL3sG4gCmNbMZt65MP7sMDz6ws2Pi9nrFwc1oEVx21dQ8feFXK5TvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wuZVvN637oL93WJRH6zAg9DVPBaz8tkS4qy3Xx7qcMYC2TRDodsXHEF2dChXf427NRh7kAqB5xW3PzT7URx9JzJ",
  "key1": "47GxhJDFfEjhNqUGRjHEm5DCkaJCqCJKZ7EUztLFby2cV6xCrDdStHKfeXsSavSnxU726YkJV697kDZzwFKyjQY2",
  "key2": "2x5DDMTCXRd5E1PdkdKeEd1LSKn7cxJYuuuNTiEbxau6tWy4A4i4wiBbzLJSTiMqnJbVnDhRNZJejq9UTZwRPmwr",
  "key3": "2ttZ5p5KmcTjQpP6T8c4VP1afz6ymFQkc4ZgT3VjtcfQvCHsCcPxfpQwgWso36KXL7B9iA67W3Lugo9NocT6jaaP",
  "key4": "45E46qQhLmBitwLy2zbKFQ9AGzLvSteTChCmMKWqWerUrf1dCpNBMpBjX3p7KeY8RTNHqDvV7hCcpuNrKd1rPHVb",
  "key5": "TavWAvboJB4mX8aYfATuhkdF8L8xfosZVFQvNCyias7tQzZaqPhDnjE8f7F8VpSfVJRAwZAHA3oAGEGWrCpDrjQ",
  "key6": "3TNAYH9tb9wmmAFumVqp1Xnb7ZxJ6se3wxCh7cmDRA3UpML4LC8LLgwFoWi9he6bZ7TaEtpusDNv5DnHDod3cdnL",
  "key7": "7WpmPCmSwQPdQVs17QS39KAjNXVVKgwiUU1KTmRX5915x5psuLGgvd2YUxnN6FnZeAtgvsPBhVY3e6wRUdaKdhL",
  "key8": "4eLXVgLtscMrJm3X6Qvf7aaNursYeBa1g6SDEchhPeGshTSdvyyMofka8SVZr8Cei6Ung5mXWbo3rg21ozboemDF",
  "key9": "2yWsP3YEsYx51oB31QTM4HQP4hV2rAvbGm8toiEvzAWj4zFZzJLWEJo2VdJpg7Fg8j19pKqBsAZwrjSPpMPtj5L5",
  "key10": "5tHnuxvLZPRo1XbWSjT5Rt38gsc57dyzHpVjbnANadvH3MhEKU5dcH8nBF9B9rMLxcT1qvE6c3Y5HckWiz1ds5tC",
  "key11": "5wamaXC2E8MceR4p5cTSC5EeSDpCpq4dPK6otxHFXP3SSZa2hQWoe4bN3KE72cjzVWcpM2ug9FoHW26ZzZyHGpYy",
  "key12": "5i3fAyV4ucvV4oS2EgM2q3zcw19HFzki2VQGsLX4QDJL1TPtUBcmAoc7K3ehuoGoXrzAjig72tGU8suNVdtsPTvy",
  "key13": "5ngXEmTKVLBuff9xpAUdAMqESg1qSLpxopGcM6Kx8BF9hs3hDYewLGsPYg76kr8Ek7gRadNTizWwB5Gp4G1rhM8z",
  "key14": "3hsxBP2mefjkDgLYPM3tnktSodBHrMnadMgeCq8aNtNaYg63YZdWdmJXt37NmxKs2TUpz1rv5PWP8dTBdvSN4xSz",
  "key15": "2XFUesQaEJU1DLDNUunDz4YFhNsz7gpThKrbFXmKRxD98tuDesjgid2xpbvraigSpZZ5GqSQhsiL55TvERSYzaiP",
  "key16": "3iVbFSxdDCzq44uUQ1Zx9mRFQYXUun4YgLvaZXLtPp3Hw7rnK7agFcQZ9iRZHMEx9Uffg4DphRJhVnF2JhsTjGLZ",
  "key17": "25mFfh42SpDEd8ioCC9aJnYrue3yUgEzDcz1Q3o5mriuEzwmRmKTChxqVxU5CWHTnpAVRQVZL1GM476sV7cczpCN",
  "key18": "23dhPjgGj1P3KxvK2yyB2WP36xNUVJnqe8ZxPrhvZ63wTsLGXphFRpx7pGZ5rjiA4v7rJYVAFnuG1QuiXdHotx1R",
  "key19": "3fEmsLnR6QUmpGbf3DtHHJ2bbY7PRfZSY5zM86519s8YSF6AH8Uqket3FqodV6PvuzkdN1vHTDb641YyGYkE4F1E",
  "key20": "3RnFtYibvYaHxZ6F71JdFD9CdZoUVVHfTMPYF1HuhiyN5afs3vXo1hgpPLP63oVNQnfPqPHTKTptnR7rwX6GX1E9",
  "key21": "4iRj1qKuVN8U9jvMy57KxNqdHmV2DezJNJn5o48PjnMvrTRJSSa9NqQnpLgWSjFPT2Hhh91uV16kzkX7eSv7Czrs",
  "key22": "61HNcMxvixRvAdpT5kdAShL6Z3pQxJmeshi4b9EPZ9Zye3kUM4F6vunb1o4ArAEbzQ7am9G7X3VztczQAHQRTMoW",
  "key23": "45qwfy6dLoE1LWzNiA2bY1GjWXHGPWbxt2nrfagqYjy7aBL4nFZrgYw1ANG4YYsbJsTN3qLGe9U13h3HoHgX85PB",
  "key24": "2VPJ4urdiF3dcVykbMXbs5iU1AaVfenLMZfkNrVe52gJmJ82KC91emZevLMvPmtkbSUpfiwHCicboN9MN3b6JADP",
  "key25": "EAsRC5nGXcUTsc6EPrWETfEmk1d5C4ECDDH9AAjPCkYKKf6XVd6rQpy9YYUjAQjfiKrLy5nBMYnSYRQDgPS4gaH",
  "key26": "5ZVtkrN1LZYCKUBMwPowfGtb8WidnpwTb5W9kDpoynM1tqKgr6RJ26Dbdj6Uo8zd9cphDR3rB6f8R7UxQYcymdCE",
  "key27": "2sx5u76RxjejJ9sgh5av34PUr7M6xXqCbmi3mFMf2GyVPFZVwtzn742dNMU6dg15rzF86T78eD2bosA73Er8xxxG",
  "key28": "eZcoPHVJCHJwB3QtQhuiXYzYqnomc8KiPDAW7GJ2ZXr2YiPMBjxbzSSqtp1iFukQC3cFevW7kBA6j7ZXGHWKZwH",
  "key29": "5yBNbgQ1NogzpuCHwP28X5YE48iKShZhf5mAUJ78EANWKd82imwhFZvJbWWpLgMQQqwgVfadqiW9xdHVr9QtEtQy",
  "key30": "42k5bswWu6RmNoCJt9ydwjYm5CFUwtu7PG1cH6ajGh9XfuCrNwud6Sn6eWtyZuJpREL4MUhF13GUFGUwMGqhvrU2",
  "key31": "ZMbR1Q3Tgwq6c2Vs4vYw7UtZaTxkpofQrVLSsRCpjrADqwa1vk1JCaqWvJH4mAZTQKYoRcrY1NPe1Y4TRkhBfeW",
  "key32": "4KPDuavsfVWUrjLMqEouFptKMdymLrXw4BkTo93JXXbSgFFGChwp5M4cgWJuYozp1zPvpUU9Pq11pRXTScQWYD4o",
  "key33": "2uvYH9pFx3PWSPbzBgypQEo3j1ejsUe6nJR6XMskHLvhuscmpT7ikfdRQbszW2ncuv64mNsoDFq6jFKgypE6DWie",
  "key34": "2Y6gdRSq4CAa1wmSkvaGn4c7nZygHkEDGJua8vF8BNNaKDKLqNWZcHe4twbE4mUFnpAYN5MhZbie9VTc5QQ33Hje",
  "key35": "2zC9gigNKRbTkunsCPkofmexa3TAp54HjWi3fCSJZTPqPDz6KduCEZrBE6zBiFdG8YWg6dL4A7ak9PzW112CN8Aa",
  "key36": "guhd3F4XFP8jgy8yNBWa4jM71Dm4aAaSfHN81VhGRFmvNu1C627xe4ZfZWgRmJKySei8qWzwVDGwX13tQP3Zax3",
  "key37": "ewy6jcBZEviaP44bBgMVybkEKy3BhhCXguaEDdigfZBNv72jSE9eMSs7BDn6WiNyuUPrJbA97Jxf172DnphJS95",
  "key38": "uFCEuHQ6xyHeAcHatxUZdKF1RCNZYFo2VEXgGDgc2YFgTqoqk4r36nbapsZuVGVvrzKMEtPdtER6kD4bJ16ASpF",
  "key39": "u6idhh9rrJ6iC2mCrVHd1sKz2ZequRSpDP7nxB6Cb9RuchsvLz2fFoLa2kUiiHC4RG2cY1BDdUAzc7zsaS2TNk2"
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

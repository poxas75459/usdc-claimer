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
    "25GKF3Kkb53wwdP6Ktn2X8wZ6K6iDP5c19tesQmmR3eMUFLhBNiece5hU5XuuXAPkLmMUrHs4Q3CL6JES8frPnkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "boDoSWmRFwrUUcV6KNTM6m2sCNhFFGoviPBDPEDxMGxJrE528ap3xyZFLng5QPoQaVyKojDu1tSYXFRPi3VkweD",
  "key1": "2CkmJiPBVCsigY3gLvR4DZdAMxiCzZ1ftBmaf4sUJcTeJK5x6UT7Czng71qvZTbBt8H6NBBfxrMA1RHhdCMkrMWs",
  "key2": "5SkdWJVLGiCSUqYnrSvB8gc9fa9LBeevjHK7BwkUesmP1HoTFYeERKo84D8YDALLUb35sCmt4dcFoYuV2wgEw2NU",
  "key3": "53Zr2VQ4yXNz8gq7eVpJRZUepTDm2PECX7dgRWkB2rLBcRdyjPiGMutviPecowMoZqkCigFe7cq1yoXEwFgHZSxi",
  "key4": "J9ET1FH9hX4n5kbKoHUw2tCdSxthxgX7AgpS7hdazpsQ4YzxouEFMCZ9ztGdcrLv4PczdQjQLTd75Kukauev4Kc",
  "key5": "3VWAzipGAJHJBzBq9KhzDFPLwHaRumz4wpDrbeBdjhxZ2anRzYBfUhiorVpx1kQ5C7jB9DTMs9aVn83hYRzDyHxJ",
  "key6": "5JVJbya2hm2pJHQx4nFbsBrEcgkT8z4b7UWj5mA1de6YagCdNaK3CbKBMi4VMSLTcs2XtS2Tp71JccWuJMV1c28J",
  "key7": "5L6XZRrDB8SsofAmnfHa4KpzMCA7N93JTzGage22n1uBZja8Lr8Y8z9dQmx9c4Qx1kNbt6mHhY5SnGgYxG5e9V9F",
  "key8": "4RgK9Gzo1N16yXZV7aVczpGJxj6nrSgDhv8G9v4hD5smtZMhrbNVDenm1NmtybhHsoy22vxnV89ntPpJRX4SuUvZ",
  "key9": "v7kCoVyGRBC7Fn2Dj5mDX9hBC58FyPxjbCt2ngBFns13Sc9qUnyTbXHywoNHeqM6xJiZp1GhThgX5PZVbxHy8VS",
  "key10": "63UV88E9aZaDYATjCRB5WX1DUqLjiFJFnr23t1gd3TgasYLgmfGRu5kP56vVGRXhVfQ16Tvhx3ZTmctvWkHq2zkJ",
  "key11": "VyYgSx6nTa4KtyATHCdjGtTfcoUoynTmEMpbrQo72tkzaMgbvd6WRsUdS8TobCVL1Axqj1aTQVaGsk1vyeChdun",
  "key12": "FLcpiS5vkfuqHrYxVJuS7qcL7VogZCEvjcf23dT6Q5qWHP1svimd4fip2fezPP1bdtgzQxPC5Zqz38MrXEn5i3v",
  "key13": "N6Gg6CrYkfiWRGdUAcNa6KJKVnAJXt2iP8MVfrqjivQyviDsMdcJTKKrCgtwTdx4xMdGLSxsCCTaX9DmnpB1fWw",
  "key14": "4YHLw86MqSe5p6jRYEhdhTnagXU6cbBDu6rPnnzPtHHBPWXdcxw88t78j3FBrd4RN5z9AYPikG8vgjHdTgyEY72S",
  "key15": "4xv3mxHBz25LfwzAartT77GLMJJv6frWbtQ4PJ2YqeHbKnTWpeP5nQTpY7ZnyCbzoJuvjdPGx38yNKcu3z1tPjgx",
  "key16": "3KHZ6aW9nBjARihMmjRh46yt4RGqgMmyP4TRn8fpQg68jCTg9Yf5C8T1G37tmcYX5o5yVqJ3V1zPhoQYZf1EVU7L",
  "key17": "4gnkh48BiHgKBDzrnK1ovYLHNJmv8HDkBFRRNf94eSP4jKxfRav9yVTVgTJXX7vbJ6Sku3YQpSMrGHjQuJERYYSJ",
  "key18": "3a4oeyyPnX8AMAF7UBvZFVaTvUtwv74bqBcnCuXYm7E7JXjqBbg8h8nS5dvdzqT7HNQD4EBQKQ1sciJzzm7AMGG8",
  "key19": "2CVfyzsSy23gdu2g9hZgFWTCuZBzdSHdqvx9xyBwFK4RPVgGizjCtQ6vTaUSYG1K9juC5eEKXwPRexduG7iko62d",
  "key20": "2SuuwrR7HvWWDaWDAQyr8U97xrR5zP8CRuXYaPe7zB7fgX9vwc7BAPQRq4xmcYSHyjYUPgJA4LXGm8Kfdm3U1EjN",
  "key21": "5zjqrKJM6XeQkXgg6R11wsDXKtUWTApX671EoaiuiCYmgqv336yiDhfuCDE76kpv88dPPdDgsNPngHWKbxvAnuHy",
  "key22": "5gMhzkz1pGx7QphnYGsAPBVYDuQV1AkzDpcdhRgQ13Djd9KpU8WD16FNBB3aHyAfY9PSXTWdcpFsejCuvoqf8mF2",
  "key23": "F1tJfLP7aQSsmfgm2sAmu5bVF1tGc2ZfE6Bke2dJGjdiEy1j4teD4hsZZd2WcDijAu3Ho45WWECqNRPndMHjopR",
  "key24": "4J7GiwZuvKouPZg2gpHgN7vY123jXXeEqeYvbL4rrKmSjmK5zDyNcoMFFv4zdG1svmouFXgMPLyDp6FEi1fiRrDn",
  "key25": "uEjtVtWuZXku43mP1SiJnTtRjR78t8qakVjVjKv4m3tzDHPLFvB5FZoHENgvbPkvQda34UsFJ7JdAUusjuiwVUJ",
  "key26": "6gqUPYvzXondPh4JJfVTvfPg1SrmLwFAy9RLp3y2rAJhDVXSekhSj3P8jpEurgeuHWZjnj73q5AjKWvWarDPD21",
  "key27": "4PyHR8ZTqXAuJ387qpYQyc7JM8NftWL7QWuNcZUWiMaGXMDxBkfA3rH1ZRYTDKNuW2E1t2SVRiLDbuwA6azzHPZf",
  "key28": "2QBS1xidy7UBFSFydV3UXUBX9ER44UN8goud6o8eomWXbYKmFToFvtrknPeY9AoenbDvbmnixjwqGbtXE4YD1h1y",
  "key29": "3ueHZ6s3UdZ5qhqPHEn2bMETBa5XVxb5ThVATuJ3NpDRibzY8mKu3vq49vAy7vPN7U2b3yZsdnWq5gKnXFLDKthw",
  "key30": "1PJx45xMvkZHexmc5L64qXvfopDccsZ4ienuKzq7dNY9TtELifDSCsfL2nmMMCfLC5fYtRiT2yqReQoM3yKE4Wc",
  "key31": "5WRajGZdQe5fh9GTUnJGtRUqtJrDi2SmqKVCSfNawdzWiRCzs2Ty74cP1BuJnoeQyD9DhFUddomN9xVwU6dmSTqx",
  "key32": "37TJdwNq6qCCy8En4dC1N4bjGyVkXEot3aTiV11BzJXARHw3cYiHerqiWvAhabRCVRqT6XH45YdH9PygSDuA2YUU",
  "key33": "5wzqa1nFzn2M4FMZrrz1uPaKtqv37BGt8wSN86x9MdTyf13oEJtfZoHLBNan3SYbmvrEMsk3BFfzLKChGpZrxvy5",
  "key34": "46RpqvFPJgx4DLL3dHofTJD4GgWRz7TGjBk6NgkWRyMaJQPocQZMcFfsuvF7UCnByXRw4L2HgS6mpwHXoeVvGsW9",
  "key35": "3NkzCghQJwBHKiQUXDVecz6Vj2yDAiCvcREeRb7s7s28dpsdDufLiKP8cHpqZnic1yECtnP5tn1kUaTS92A4dE4U",
  "key36": "66fEEotjvWMjtwr7q5rzuobu2sPnm7aaPMzVv745yEB4xZxXS3RrjCMy5bxuSiPR9AF5Kbyoo8HnwS3SY1K9CRPk",
  "key37": "2NRFNN5EY9ZBhXMfFCTj2UKJkhbhQD2kUXaegeyTWvf7jdBDj52aEQRD4eUq4AZS8DcY2Dbvuw4h3t5YhfWWPubh",
  "key38": "4s27JTykF1uMDcHEkm2HNurVBmocRYptYx7yu5jNKjaoH1cjEREXNmt4MXqaKNcgpD8fPx6UsQDF4CdzgSov8mSv",
  "key39": "3Dxtpec4bd7cqm1pikitiRDbAirBU8RgQnFfnJKD3Hcj1pi1fn7BrUqJyrfYtWSApmyQwkrPg7PoXXhsPpNfTXS7",
  "key40": "3t78hEThAm5McbnFfDS4xsm9BQLdCKzFLzApiCAhRrPur5RzQ6j65kg7Qr9st2i78HE8oHJZVX4MmTGmQzXucDEh",
  "key41": "5QL51E9A3VonsZgCtbDLVqDf3voE8aQtTnyg6uGQwjXqTRsjjaJiAZfr1jAEr5tt3WJfg8zdXQ9q5r4YUusHRqrg",
  "key42": "3PXjMELfeXA3gw8vkixn5ABe2nLNzGzeRKzaBW7DZZn2DCXk7CXcFLV3tMNjZSvKNTEoRfQ3o45abiZeM1Lg9xsU"
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

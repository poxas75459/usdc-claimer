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
    "dbHdeD67ECKBLjztcv46orf9EAw3zqBQHQ9KDXnrzKXpMTHVvxi6kKw9UJYAsTApr2DNfW9VWafXXp2oNQVaT2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9uUJiYw4REAQcTLrcjDJPzjXDt9WTXqHjfirEN5LJxFE8vvrTy9viznjWFr8Abm7ppJsQxKh2kcQQDxkmrYNBh",
  "key1": "3arE76vjjQqYEUAhdmPmTdBFufV1Ho9eVc4Xd886KKZEdtFojQabeipisbaCWu2QkEZRRcy4EMmrVdbR9kUxXEB3",
  "key2": "2QgiH8acW51SqLZq6jnVxDRxwJNjz9mEFuhf1hWxjtqFvFHeLCE5xioXvAut4iydiaQwcFpmEZW5UsRimLkctkcS",
  "key3": "47uxcWbJNmGh9FwiWSHbMic9QcZeVegFZfqTTmhwf9AsPET542Qp7yqBopFYQPPR9pxTkZR1UaPovFS6dbZwCmjd",
  "key4": "5E4PY3EwFjfRiAHM8SDckmwUH3PnrfLdRRux1L8FQkPJ7ewgYBiaCzECPKeXUiLrec8ANoFrsj8bueuzfY8qY7vw",
  "key5": "3mm4HmRYASgaAAMgdDZaojtrC2ukbdA1Tim4y8ZEzTas3i2ZSZZPoQcwwLAs1sLBwsHkfTCTEdkgAcFSsA1RuzWb",
  "key6": "5T9Sibxh2vHLcbmcfKvG1pcYA6xnUChNAWJupAVv6YJmjdrk2D6hdBDtchCb9GsCXvPfWJRCa5F2FPVcw4okywPw",
  "key7": "3himuWCg1Z6bM6owDzSUzgA1GhFoQESYCWmGQiAtvhsW6ZGyjCZZ99118BKUM9ezbdaWXZf4raussxBLWygz8KXQ",
  "key8": "vpx4FbkHo7o1AqgQUNMSBhLBvCDJMJvrpzQWraudLFRsjDJd9WvRjpAxYwkt7dN81icg246KRhE5V3C9jPeYshS",
  "key9": "3rBjCfKeKJZ61CYxt2Z5p42xWqjJSowuz4HBvAdwNNFn9iAtwqmT9dBVvXKukyzPV39NMEX5SUFtQzJpcKSjvWVS",
  "key10": "3cz6b8uvbkxaqrPsCqFe7JzsYZFKshmreGCtq8HVF4fNRUGDBVy9tJkf2jHa7LTwUbEyzzUSsVJprRY4rGtxDfEU",
  "key11": "286NUyz2eynwVmPLVUxZJfu1JPrwHU5C3zGHhZ1wcA3kJet9AYCRvBS2L1DiYAa5FCF3fiPQt76hncTVmt4N7cL5",
  "key12": "25y7anvCoDbTuBZoxZNwYPrTSYFSZAvzBa4zDbxAXSHRUuaZxsCi7Gb4GUGCbYRijuh5SePLKniZD3Zcwe9SAvga",
  "key13": "2pzouKR6ia5jHaptJS6u2EmyFDZKCrXtodakAcyYm2skXt36Nhhipy3Y2fPEPxuVu951ghEdt4HmfjkRMXFKf7QS",
  "key14": "3ic1KLjt8NugXjVC796vM685bDLuqusMza58JoYXGT5fQuMk8nSyx6Sz3yQVGqg936Cis6sx55T5wyrL7vzXfftY",
  "key15": "fzbxZbBmTrUC7Hb1XiaNsKWs8j7byx6urLRAmX8RfGoPzBfNq7RaAHUUTyZRshzKFEs61kd8b8FgkedoLFw3mMf",
  "key16": "3X7zpHsTqLnXgKuCKJ4E5FFBP8f5upFSXbbd4oSNW7xxMr3GBtzHNVmx8kMCRZ56APE63Zku4EYW3s8BrS7Xqm88",
  "key17": "66SjjT5A236uybEMVrzeGpFrYVWLryCKkAaUcqC1noRy2DK2f2VZv84fcE6SimniSD71W7xd8DNvpqzbwPEun9SK",
  "key18": "3B74TLDzspKZHF7CckjFAGHztobS9kNkxp6YDvRYZ4kHxm1ar6gtktpHnWWhembevBjAVNW46YMmENXk66G8Uyva",
  "key19": "4Q635Rw16pQNisxry3yFQeQzNrhMXJJY4Tj4YdNCgY5rnyL7mAnCcZHTGwZsGSW6AP99sw8hC9eUZ71LmAAkT1uG",
  "key20": "3fn9VuwkS1Y6BjHfixuSaXHwG16tHBxAnLrKgeepxrhjFvY13iha6HuCXpiey6Tz66i5PBdngsN9mTykmKtcjEZ8",
  "key21": "2RHpNWaBsq1KQ7QecLS3cwHFeph5zoEQFHmvC7mqgBq1VSNc4gHPSM9LeoWk1cX4fgNcaJ7DsafcEvXpkTS8uuhP",
  "key22": "mu1sWmCUvmTg619wvA4rVFaEsxQXWBiGofjMcjAe95DpXKKx66DKVxf1AbiwJHNErB4uj7CSvTE2kmSQt2YGtos",
  "key23": "4DCjrcJvohTF7B4WNcY7GWmiyxT4xWUHFGCbo5AtWm37zpHEsBXMEgjjHyw4iDXc6d34pDGMNqFwVrrsCWkK8GXy",
  "key24": "3T6mwvUa3sXYQvY8sTjEXzdE25PKRtttCTi7hSi548VouTpi4A1PPG95LUA7FMD53X2GGJ82jqF1tAa8xy2D5Gez",
  "key25": "4giaP98hKhHdUi9eSRTNFQMEzJaVJNqyTiuuYgJNxM6oYZB9QKLaNLoLDYJ3f88x2P6iScsYY1Q4m3XiZVDc498a",
  "key26": "5FSGKGk7hG5HF7pZbHhUco87FR4MvWpxUP4htGk7YCnRXR6UuJQDMKgAZ2sUg3dHwFETKNz3Fm2jFBGpGa1gxqeA",
  "key27": "2GbeYsXChL1uLzwdPvdGkAQgJDi6rzsf6rtqC6HnREHco6fqa25StCbu6ycXcK44XgM1nm88iwWQTDCtsBRCsGhf",
  "key28": "fGEqMTy8bJ2qfq6NC7rz56iMjKLvBybraAYFCkoqfMmhMDBxDTXrGJt2nsc9LLwpy1DH4HRBoEfq2YkA413bvpV",
  "key29": "3TwmuV7nMUV1SJTecE9ey4SV4RY3CY5Wiv8JLSQdVV9eVXn5UBBjyLxZho3ocrhnUEshAuufnmBg19yPWCQfemwW",
  "key30": "4PCjxCzJKfFW83zmte1fHWAkn4bpfRbkrJ14c3uDFyf2CTcDyF81GTn5Bh4YCPbsz4nz7TJUw426Zzn9TsTd28Q3",
  "key31": "3EDXLa4kDCLNgR666H7e4gCvovsH6x9Sg44z5WN3UPJk9EUySzjHYptcXR1h1tuYa9ywrDfvUdWmzPoEZAjEKStE",
  "key32": "4H7MW4DtT1GbZW9hRnFT9BJyLUd98nFuvvGFJBRk1xxJmULr95ydoEKmM8Kfn6a9ef3W5KFLPzEoKnjEascDKLZF",
  "key33": "2zym8FyEJYJZpJxVmuoxVyWiv9181BLhGSZA1yL6myueDSXz3REkCVofAiRNh9HtNzyAZ85jijyEeS45mXW3Rxhp",
  "key34": "kvrCKFatb9ydaiJsgb8zN4YdxrWRDS7qj5gtDTqAYYTb9zpNYfA3wp1RkEzdAfgB5VwtP3dxvSyuQNMx31Ju2c3",
  "key35": "4fzzUTpJG5uxbJ7zPZ44GowcU7GEvZKACwASrBmjCCECWT7yB4qmHGz7WkqEcwWehuWRpJdpM3RuStP4gkYhKoAW",
  "key36": "62B6dR22iTiQwtqQg5YxtvjcAZJpCjmpnaBZbGeRxUviZFBPcAQcPY6BJMc2LPRYNxoWSUq5DmdiMDP8Zg9ZEvQi",
  "key37": "5gA7k3qkPABQpagJ2sxKrtcdm1iQNnfrehws7zKKAVR3tmDNW5kNB8wU3rYPAKuhVyDjXGpbPwN3jdtjVBGm9um6",
  "key38": "5KJ7HhCPs5nhkAn4v251wKWSWMsV3wbzYgmv2z1zqzhy18AWoMiVX8fWA3fjmHqPWAjJZmNrKySw6ZSySfFvVgGA",
  "key39": "566e21ViMLxfDYNF7oEdJV54b1b52qK22BSHitW2NJKCVXeoVnkVGG85wKycNTLCUDhekXEBeu6CmYdfqPTsujE4",
  "key40": "3fcCJUJYQ5srPt3VvRrRsM6UBdHh7UtxbWcn42gBJumfu1b4whpQzYP6cqskb9LxVmQpZdc7EJnxP5AuVMumnXGi",
  "key41": "hgNrP3tAm1Xg6mhzdSzZqBJVwhVrpHt8pXpHKRYi8sb1B2PTRQB95iKPyD55oZaCLNRPuEYvoULK2NdAAeCuZPT",
  "key42": "2bQaLys9MaT8tD44RUzJLZK11dae4zmhXTizWFEJoASXpm2fGYTERpUf6VhTQjRqji4ARPsbGUq921VdpGbfonQM",
  "key43": "yWV3dAd1wiZEUcEpGL5gsNkmSpUPxC7rW3eSh3Lpjk3pc35HZhvi81pKdbN7uZ6sfdDk4LvFVY224q7XhjrE9Si",
  "key44": "3iz6MCXZHg1EbqoszkVc3NsZoFMo6DKQ2HLKW4mGaFcSAVnqUXgLjhwyMXo1bsXZNHrzA1MnMbe3Hxu2mXqWMpw2",
  "key45": "2bHHcSPjYRCmN5iv9qaktMcKxPMMmJAGnEu8NRTe1QovtgBxP7wNGLpvMkyLhS8C9zyrZt26nHHutiAZpS9HWZgr",
  "key46": "UfnfACjKtYsoi5RE8QpxpL6MVWsZ6NPm8pgz3KZtGn3s4vHa6qqj4D9htWYgHAPbCNvHFm1YsgX8qE7GabzxeVY",
  "key47": "4fkbZ73DrQEhCzsP1Ek4U7nCZxU3NUqABUAk7j2xDdG3GLGMNPN1cTf5nWxcUuaaeZdWqh6YjwfWpKLQSgTW3oAE"
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

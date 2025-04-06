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
    "4kAex9fijrx8GRDwnSPuuFLe1KyWZrSRpF4rwM1TPPJqdPocqqxGNmtL6juDRArhbPdE5miBNCByQGHFZKJ788xX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sofPZeQVzgQowo2y4nrdie9YTZE8nxrAZ2LX7kw499ryhgwoP8VMLKJazDrASF2SsKt6N3caz4n47YK8DQfMJ6a",
  "key1": "5WL7gMSh7t4PcNzLZbDAgtshCT6y61z2bJGz1BjCHEa1VVBPVFgKdUzVxcN8wh8VTMShbKDS2UhyD8Yr3ihh4BLA",
  "key2": "3VdSFPjzSajt47g45Z2Ufp1XD8Gwkqj5yEGCfnBzT13fS4AbKhRPfDHaSiLXSTGdhu3qfFUr9EndDNMzEPsXNhis",
  "key3": "2zuYvJ9Sbsv7jUt3T5vafwN7VVVf57JF6aD7pBvcbKjjNTxLJVsXkS6tubDgkf1UniVEbR5W5ydFK3UyRMoPn6Wr",
  "key4": "2zt4yyFVXMdduEM1nvVL2QJvw3Td5DHQMwhoYcW1eaN9pM3fakL5C5croexsB4z1cf2vLJSgsrH3TTgAG9YEUhBA",
  "key5": "27FFZKHtM876kksVhF4K5fF1GXtMm4yVGsUtmr1CaVon4hNaSeuif8ko5Vy16V6Eg9G4S1heRnskXiZZyBCJEfZk",
  "key6": "55bkWrM8TrcTRXFKGvLdwUeF9dA3bmcWUEMyH6JQugRSfV3gAh6Ad9MsT3hWqrHEXpU5DJYYCy6Axpah92ZSTn79",
  "key7": "3V5zNwa4WqTY2FUKaJLeznkzehYxHK6A7WRsgMmwuMwzRgNEfN93WcK3R6a1r76JEXFQewLr8KdeeGsTpxzgnkSc",
  "key8": "L7mMWzzDBLaMuNND3rqCW4k6HJhGyDeoJvK7n7xiwugimTz5uv5jApssLgY2gTj4MByKkmAu5ekyF9EVR4STSxc",
  "key9": "2bVqVssVXb4Y3rK6s4WMRMRh1q4ZmsWMnbpA6cuQ99TQ7jA3Jqy5sCCNyd54xNoU6D47sZFSZLU38VPkGCST6Gyg",
  "key10": "5oD8mjZoWgJo7tj25Xy5JiRxstU25sMV8G9RNwZeMseYHM8V2MtH7MUUENDoRjRLoKJGhbcZRe693HL7K5d8iNZ",
  "key11": "61FM679L7JRomTsWRM1hUNr9Y8hwZ8FJHzMYXdpQyxpFjanbqTxpyiW5UTqERSD787KVHwsrbP8mzxcU2KpoKD9G",
  "key12": "4h8btMoRsmkHah1CXudASjhgNxCVqz7D9LwvNuYtZqMem15PFatP977G3XCzGcNgNmTrwgu1Ga5VcjnM68XHbJjk",
  "key13": "VSgbLF3wTmuZzFosqkr9SjTVj5n9L7Auyci7TAmGwWiEGwDsnZrstZrsvMVzye3Kcdcfb1Wj8EWAQkA7yennV9F",
  "key14": "5gQVuZUKHBJ8cT4yuzGKhpxDB951ixEnAKimaaoDJSnShgXF5EgaAd6ucQzxvFUaK89nAnnczQtpcTrFvCngcuyv",
  "key15": "es2FwRtF33dD9jEjX33GXszDFXe4MBMZpdFS5PhDcNGyDWit8F69RxdKg9aL4rji7YfjngN7ixDdd2SR6y4s5xb",
  "key16": "45DTzDgitiyUut53A6HbeTyfdR67zaCGd5bk4SzY5bTYS4A6FMtodczKRxyguoJBkMap5Ren9Y7K3cJJQowgqj3S",
  "key17": "2MpCuYpSHvC78zmhrgBQqk1diaLDZMifSJ92ngch1B3t8TGn9NXGJEaW6NmfdQqdfy1oFEhaaGxWJpTmGz3LLP6q",
  "key18": "5fX4X1h6e8uqq6A7cDJ2kootX1gnTofg45NVaL6ktLiGQavfYJwnNwP1L2Q4xCyjPeJJCNwRWm83zGfZzVPCHH4M",
  "key19": "4EuHV8CK87JmWC9pZ4fGcsmXy8STbrYbJSGXhKVQ2DbfdpPQAjTjCrwikVXkTuz21U6iFWJuTEmwSsHJwX1hKKu4",
  "key20": "63yBcKrV2UywT2r6dc6JaPo8LpfgZ1wrnb2ZqYXcra1yx8PUqSvFMAc2UPenBi567DF3nDHaF3TvKLfavUP1reCf",
  "key21": "4NPgJGqiGrpKFXtzKZzL6pt8XsvD9Jotdh9ci7JMGhk1FSFw5CbkGgMXmiv5tT3oEeHs8ovg3JwCrDZa2Hi9YvyD",
  "key22": "22K1vDzkQvvbugjkZ2oRNQUfWRVuBG1zh8JCjQybHE5P1rNJZK8hKdvHJFNDPMqKKXjJJeYmUjhf7QBPThE1yQcX",
  "key23": "2AGfPR126s7a2PFj2gJFUhEcEDLJDyNDjnQfBmxcU51cSQ6EFyEwoHsruJn9XuXQp5Xoj6BVMQLJyG9MgrvR4ZyQ",
  "key24": "pE3ByqsEDM3Zc8LVmrUtKWLAU9Xjw6GV9qtH9gUa9Ugb8vbcCcbZ1fzUDDYMXaw8KWuNjGbboAPTQUetHmfPuMg",
  "key25": "5y6LzgwUXrk673NbKCoNiFnGx1Du7urSo6fWD9zU7oLf56WdNn1UoKWqntAkSr2fwoiSpD9znMpfAdFLAYZDaCmk",
  "key26": "2KirpMxjZLrj79QU2foihg5orUfZj98Ffgswhra3zMTDkS9vdNa61oMzHQW2DHWgMG9R2vT4d9pVHTYFqJ2qk8gP",
  "key27": "2tzHoBgddLYwFuRso4hEoXJhWUXVHXcRq9gRxdiouvYaLbQrcZjzQ9qc6q2rq8wwdnq1yYvvQU9xXZ4fSxCtSueX",
  "key28": "3fCvJwWNgQgdXTADwgq4chNbmrrPoqu9uPADVqDKna63Cppi44TZ5ALaTtLBe5rAyGWtunuVLEfa1fmwC2hZQwrG",
  "key29": "2qH8t278piKxMYAqRa2PVeKaLp75PhR7ibk2FKoJbqX5jqKCqoAhYoBrWTD5NgPetF5zQDL1mePHPTQzU3dcsyAq",
  "key30": "58ofjTB9LRvt1a59Pq1iaPZrBDtnPQDBYoqo8NAEUeF4FUxu1yZM7MvH96cAXUSHPhj5CMPdEiSdTVWmZ1V23WSe",
  "key31": "cVHqyMg5p4iM1DKRbr8LbFnuLckZ4RzjVt5hVbnWDpjaknAkcXoNTFEbmu3aA9C7Wg199hj1yPewQFR22MTr7bC",
  "key32": "FpMAG17rVCnWdqp6P2Mw1FTjEAX6XDLcthq1rPU7sAqL1EFqGnjJxsF6buZVvhKGxZHuLL3cj6wzLya2Jr2kwth",
  "key33": "3uBMZFJjcHmdME3uvzE4GL52snXW1vAwo7w2A46xrqDE7SigfGiBFh3PLrxsWPQJWkcaS3bQem7tPR9ztQoDDBFd",
  "key34": "2WdRxjSXUPMjLvhu5pyNDV5dwHehiWfp3iWSs7GrZWt7Yz9igLz8JfkJhGPSLFKepYbXg1Fpr6mWNySBDs46xdXo",
  "key35": "31sqGQCUqwHvchaQnvJQJuv5SFVuUZDfnyMTfxo8tKtQ26YzYx8wx2gjHfd9N7sxFv4nmqE3CypiWw4HRtZEjm9c",
  "key36": "5wd1pk8W6CA4ccoKH67TCytLhu5c5LHhTG8JoBmDznbBxgUVj3egqSv4RNLJ5nQpkCGxDkmoehT9oEQx1uw7pwj8",
  "key37": "4o8GPBMaG3Co17CP1AX5cUJMgXzXNA1gBMdCLTZjsk7k7f9zJG1QhLQVwZHFDMRqAfMZDHaKixKXsdxnH9XXeRT2",
  "key38": "5GrvQDkzhVKnfadxovwBx21eXnA3Pd2fSDSuctusDHEAWjNm6WHco7ong2VBtXEjTKwa2QkN3YggSu6o32xC9rFY",
  "key39": "2EWQguJU5cgufBTmuTQ9RsnWRpjqKEyYrFBPF6J1AdqfM9Hc6JJ4YapVnJuDhpvzeCyNPp2qWW33Z5eF4J9J9H79",
  "key40": "2h4EhUTY5CtbtZFT2THj4QwbhXcdm4Thsx7o6oZJzgWjfqkyjYdtdSvTFDFEojb2gnkgXksNaDguSX6feqHrVT9q",
  "key41": "1wnd58iD6h4fTP4KuQRXWULR1wHzXTf3sboumKTTcmE1ejiGRY9UVSE2cBvYBpWq7ufH9fxzJpX8PqdSEn7X7AJ",
  "key42": "5BekosdkQzCMNKSurEsxa3hQdxG9vyB3RYKop2Rkrsqs7ARuW4oPF15hbZs3BhY6y9p8D4Y41UZrEi4HH7u1YC8o",
  "key43": "3Unoft3qhr8VXtRKTah11YPm6E27bGivvQKfcBHCdrrYVTGuhacSE5SY6bcWvkRYkZZk2DQh1ryh4PmAJbqvLMG4",
  "key44": "53k219WjGTkxvMJv8m5EH9BfgYSpJpQFrw5VUKDWRX1AkiRdPmB5NHHSnf1mqpVe8jpLwPoynqSMpyZ1sBXmFo82",
  "key45": "5gxWmmMzwH69YKjmwPBqf6GtCrNr96Se989iwDrRAcF1BLVtzkwkfQRPN3teD25VozY9a6w3JKQUX1sPwGEoT3dz"
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

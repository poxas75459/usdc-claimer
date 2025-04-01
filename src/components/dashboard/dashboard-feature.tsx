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
    "3CZ1yjo9KN3LNpZMRcM4fZNFCfnF95GMTGCyGcAzSeNRkAfFp2DN6GXwNYDY4qYsQurFXTmW7jqb7Z2nX3rySBb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57JuL8BtUzmkjR5EQ2FW4WWnA1qxnYAF95ADpEEB8kWDPjpiQtBQX7QGTnkrv3PJpdN2HgLfm7jHmgT5Vh5c8kzZ",
  "key1": "4HJSxcWZmPTDmaVDwq9zhY9XYMQp74ruy8nKDHgPZQ1S2K5AydqR7h8QbJR3Z83mzwdQEcgEW75ZmjwJHWqVvft7",
  "key2": "4dqmZvKsvnHXCMzm6XsGxZhU314FEXyZCqw1192u5nGydQzU4FeAeF84K9NCoN9CVbhGivu31986dbbbh1bsVJk9",
  "key3": "67GHMQLwjX47fin8QQMLvUKmpE5GMhLT7nwXaDFXLYAkLAPZW3ycidWQmRYxo1EwQJWzQtmRNGZ1yrCexxfWRpf7",
  "key4": "TBEY1wKyXvRg3T8C4acGJGAcc4cpfcQwBdyKLeEk8xKW2FsZ6NGVdL8E9u5nuvuzRSSozp91ANCSMCFcUzd6fPW",
  "key5": "5MSCnpKTFN63qiWvW3AGboaQdbX9dTCdWwBaePmWEKuKCGHZvLxLAkF9BETk47codbEPMChtJXCsmhZgwKFYTANh",
  "key6": "3PZL8WmwMBeLAic4UpXPC2iiy83HLsGytVrm5KsShw5XLxrDNZYyLnvHhEQfyNBnwamKNxHB8i2ddb93zc355sKE",
  "key7": "5UFph9BmCA462f523vTfXaB58ArRQEWYrTdJosTqhD2KPc1msXxP7NHQtT9zZLdwVYUamv3HQ9vDB6P1wkeLTPw6",
  "key8": "3nyM6Yd8Xy8u2zhCQYAnWVcRQuUuGaDbfJqULbyg9pdDwjoZhytdsWQQEN5M2RocPZs9UJTMovrUGwoZQ3myESdZ",
  "key9": "5JUSUQXahLirAgswUW1u3FBzdqK3H5jyeQ5dsnWeRK3xbuUMg825zX1FiBg3A6MbrcmPRiRCVJ6AUb4BVNScoGMa",
  "key10": "3FnXAdZcZAXqm5jddF8TfBKAsRjmbN8jaoq3bq5vHyYu7r3FhHPYnVF1bC4c3oVBQftq8DmahuLMzhs6LDigevyW",
  "key11": "5AizT9487Xo9u738sH33FZsTuQxVGodnuvyzNMDE6ivWYKqJio7KGyN4CzvKoMNiWTgLj6efDysihkURDw7Fn7E6",
  "key12": "TMBGscz971di9VK2WBgrsJyV3zgdo9BJ8hDR1EppzivsuTTfoqfutbuSrybX7orRco97jrWSW5awNTeUQm4YdGp",
  "key13": "29PTygqiKHQLfP3sEqPhgDdnQfMGM48kkdLwhbGwNBjyN1xxGrZjtXYrj7zguSqe1HvtzgE1oiPne3khdKtLKSns",
  "key14": "96xyQqhLYBsSVP7ngYR7KdPC4VEiN848EUaQufekqtcjqzGKSwVUQk5wcLPiFBf3sdsrach9GXZhWGACWu4Gy1Y",
  "key15": "4XYh6u2opRqxbcfXTG7tr7tvSU1wTJAB54AvTBKg1xYCSEcv4NdyBDQjdmWZi5hC5JVK73VwexUJJenTquRajqpi",
  "key16": "5bB1fh6soYb5uz2CENJc84GYLi4W6XSa2nupoFFcc6kh2FrmUMWBXHmEgk6dffECAUBboRjbA5mo9Jd2xxfEPCBJ",
  "key17": "2M5W6YYPBkweuXXxXerTgJtW3UaLyPLBCMdu1fjWiuSZFHgtTCF189CxNdace2EjSAEekF95mraT3qBhnPAzTLHK",
  "key18": "22QRRvn8ph9abp9ZA6rP4s7TPSgXcFvtZYdpe4Ykp57YXJSmFQWMAYNaGfenXpUh7PwW53YpJeYHLqaV5A8dc1St",
  "key19": "4S3x69vHzchnV2bHmJEJHcnWQ1UGcLxt7b7s15gp9gjibuVES7edvhoJcwb7XFoinyw1vs5x6YvRBguoNeGSibpU",
  "key20": "4zAmQmUtQMK4tAMeiCLuEud1CeyPJ8cJtdkqSSWr6q3oQBR7fuWW4zKGfhgqvP2HHb1wDXvAJLjGNtebKh84jEk",
  "key21": "5N4rr2fNt4i8CMZFC8sdqTteQfuZdx7t41dp1Qihs8WDdWoVuYuvArpQ9iDeEBprgKkDtyJtQeg3vhdTSctoA8Xr",
  "key22": "5hD8asDDY1Djovbdo5PCdzzVKjwsUcKuDJV96bYzG8Qmbcq81YxNqe7Ewtei3JRTx2mATtHAzFP4oRgwQeAq35ZB",
  "key23": "5YjeNMgN2MrFDfwzu9rJXcJMEAVy8eJkgAaJZcG8kiioRfpzDznovnZGw68Qh764Axu6HvQk1WWisNqbBV95ubp3",
  "key24": "Sv3FT7bdBCLA1rzY2y5bkgHvDt3bGVeU7LtrrWx6TKH9FjrckwDG54J1usqjduCmvQQRCyiU6q4LJ2pxeTtaJP7",
  "key25": "PGMwFsjTKLSJ31136dq6ptzzsQTg7i2MkDVFvuYqi5EPvNCQrWeNDuegvzyTKMNu6yq5Rh1tHnjZAWcDnHwYrJp",
  "key26": "7g49JSWG2RmKAPU3nFvbHKokei336FShKpwLoqLjgpJZDzDX89zAVazDZCdyJdt3xABPG5gVNTLSJbrjfKSA3yU",
  "key27": "uz1jyKtB22NdM1B1BF3tj3WVffCVGLJJbvyRKT1xoBekDStNV9pNtjtCKMbAKfHgVpkcpYkhsyuXBoQTadk3G7s",
  "key28": "3BNQPif9sgDHmq6RqzeAXJSiLFAJ4TJyiVqTHHsdCpKJFdFSCWJnNcJHA1aZaF6UfkJCNUtphFrpiR2DDdLA8saq",
  "key29": "Knvt31U5FM8u42evPSe6Tuo1oUsmZ5MZGWdvZ7fcCYZ3V5DwbtBiDSWYXP7RS3Hxos5LN55pFwymj2Nm5vGy2Xp",
  "key30": "4eao5gac7zLaKrj97Ds71NhFRUb4QaqsRs1BzTDC2KQx4gYnd9GM1NH9h1tDopc5iTipfqSFHiqNMn4uXX4H7irK",
  "key31": "5JWQm4QtGT81nY8J7d2xGgFgLwgpnw8RFZSSGVtbHVgGuCv7qbTGDKDK5gqYnm56kfwte6LGKJgsRY9DoLCPLkvr",
  "key32": "3EPCKJvK4joP8poGAF6pZrttwmc7F4NAxtkxGZGLriSvDHg1c1kxPYrVRDzdZkqU6W7UyK8ZGMbMPagQUC3dg4Mx",
  "key33": "2PY51ppSKLh6peYNKo7jGuby4YjmTAumhe1UpmaWD3ZDutAqhvMbqQDHec2nhFxeUqPRTVowAhrfrouDxobxRAHG",
  "key34": "242QG9YoS84N1p2HEdD7Wac5QtSs72k7V77hZ77upjqvkeUiJ2KaNVXNB4eaX3PKf9fYwxjCpoKza25Mg5xHhQtf",
  "key35": "hH5foc7ZUEPydEAcNJRta4i1iJi8h8Hqf8vQZkbKALbYW6gdZ7MZkNykxmR2ekN7FNFs9GxHisUYxhZJsw7VnPi",
  "key36": "6731sg9VqpzBNsFz1F1PAKwsQ5mDtN9J9Uri2qZrf6WNS2oecaRr7LZa3rPAZnsdHV76PMzBNk6CxKWHkcbRTYJM",
  "key37": "cEsVzYv8waNX5UayBzQ52LZvAgHSuWnxwvPubqCGXTRikkCgdmn8WnLkFXcBPTkcjxbjt2mfUmvA5UnsP79Z9Gk",
  "key38": "436j5SU6UrsnhifUj9TCJBK1NZ4sDQj5idYAPAyr1jSGgMfuMcYcVv6Ti1sFpbnafcGk3hSmvjYyJkdxrcwDALih",
  "key39": "5qiQdD8z4aTFfnAf4EEinutXWY481yoNcVGs3e1QDRQZr6kYtGFnrqvRNYrYq8se3cKc82CXRbNF7qDqQ9udJXoq",
  "key40": "4w5AWVUfs9DeUDi6nT7vwYoTqxJ6UhZk6fjDsNjxUc1sWPT8ZXtwDzCDDRJSMYMJHSNDtrBMgrjpAMTr9JhV44r8",
  "key41": "4zWVrDaZ4HQcW3k9nc5BBZHT6dzcHQR714TFDvbV5RNgyDK1fviQQj6AgsJT6DXHWb66VsJS3EPGVfQcm9UpSgGo",
  "key42": "ded36EjYktBo6oDKXWGTcwoDcMjMskgsDZwSLCV8kWsLeMbuzpLxTRPzw91uXH7Mj2ciGzzYxi1CKwDmA6dP4XY",
  "key43": "3W1XEG32amDgHxtfJ7Mg4bh3VXnbp91HHqJJL4yVRG4JMGgeiMVJK7EbY4n7q2ezxhRiyk6Z5ucmrFfQuy3hcLvs",
  "key44": "2DaPicimzfsGC1Xmco8WELBA4HNUpkqdTGhuzu7TJswvXSfcWZEBfVFzFmeBiQHD7h1KqaMnHvGjYBS5ZkqTvx5Q",
  "key45": "2rHqjZctDNjLJoYiFRBKmrJUMqcHHkCoJTt9y6PUMcGaezwe4Fqzhmf5qVWPwH6xty93TeUB1ZoaZjvMCCEdVWnu",
  "key46": "24ronEM754VDRrTR4PhPa3TPM2dei1G4vsnxh9JPaC4exs8oQY327Leaj3cwRPf5T8XeWXm8hErT7c1MjYjvKQXC",
  "key47": "5fQbnsKbVHBYu9LUW5W5XcLyoi2rQtn8ATC2z3JxuP9UGUWEBDjXitbKw4P8TmNP1AevyhDS6cu4k97ersEbxPgc",
  "key48": "3ZsvjgjV5z1A5XUy7R22HNQnsT9PeNTn6mAAr5UrndkoJfqBE7mEZ3jCHjN626F4ecWfijRvHUoNrzQ1FicxwsnJ"
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

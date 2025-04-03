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
    "W63hksArp5k8bNJGSNb4GVtHB3pQ5Eb93KpSSUaTXZLynKYnZD8Ge8mrinoA4nJim4nmStTXaQqqxyH9Yodtytg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SG4aws2xsDBZiBiKnzcScVngfJNiogkLzv9yVRiXKorLMwL4uvvJyCtfkqEbQSoMCojPJEy6VYwFUg9eXFZBJQD",
  "key1": "4V9q5W5KfqTT3BqEahnt8d9moT4kjThnQnthaKEsxYhqAewJ1AL5T3kdFXcyHAyEPaeT8wzMRyqh7UzwY5j8HQr2",
  "key2": "56qSBfz21NeWuSbgH515d8KCxnBtA3HyvzdnVvhnep6p6y7oM7kfu6YD4pMiCNdL9ZiYjcKfvDuwZa7cGUx76GUR",
  "key3": "35CqyJAAmDn5BZ9GZSAyBbQvziymGbuJhTWuwY2AVXhtuyfAATyQKgh5JxkbWgwZjkzhjR3RmXjtJXA97AfPzBR4",
  "key4": "4pBJo8rinuCDRwWWRnadGRMZVR2Ze3JSnp9cxBd4HYvGcuGudskzesw39UvkeHZDWXMigy3UrJDZ1pyP9Ah96LMc",
  "key5": "3Zvt48mf39JGjW8UabdsvR76ay4xcGEy4ybyr9XDozJYyMxJ9AA3vdqv8yEXFYCfJ8gjZHmVdh9i2b5PNb5gq3jt",
  "key6": "2L26hBAf2VXQTcJUd9E7kp64eo4TMHi3KxTAzrZE8sEXnKXHsg4iNXefEKbPPpHUokpzcUib13BsxNwp5QSYR3P8",
  "key7": "4pbf1H7hEh84v8Uf255JYThZSrtLwi7evKU2KaN9Jy9vJSHCYgfeJv7aRMN5PD8Ryd2RqZGrWfABq2sqb2HvPhyM",
  "key8": "5owD8YEW4uTxBYvjdjvm595959sqJy6y9RGzB1Bac2Ue4WvncWwRb74rXmRBtrtw8Ju4W9Nc8f8mrr3ohKHGVmJ3",
  "key9": "tTefFy76wrsD1GBziCQbKZCdwDcVrQQwGeqh7CD8Lv66B7Xtoo8YGkmnPLpFB3EDJDS1VcwstdqcFpKFe4Rh8KE",
  "key10": "3wUa1cN63LXhS5wGuxU8LfhjwkNg69dW7G4xfCbKmwcSUq54ciPrT37DJsjvYSDMv8zUrPXc3uDq2XiYFV5sifx4",
  "key11": "27XW95rzVjR4cTh5iLZz9NsCj8venNuNfKTNHY9dbgDj2yvQfCYhF1Q9M6gpyLvzXAtMRE5mc1iHET7qYQHcUs1m",
  "key12": "5CrmrR7sBheFrjdf3smf7imVt9Dmgd2cSutZkjaSVv4JjJWgotNDEFxYtUn3sdYcUZq4GdKXamKSjBqocVWL11pm",
  "key13": "3F5oDNWrk5SHcnaKBebCuyvGH6CriQRRZDf2ScBb7UCFhCk4q45yungMRkUJ8S3iGHjqUxTgud8t8cdy5ymNB5TU",
  "key14": "8EeDHJjjJTXzr2aUamRVrTin83MHoA7cs8aynjTvX6ehoi6FRESN6VedNk8HRs5vtjs8DrSBce3SNaBnhFPPHRm",
  "key15": "3gAHAVx8A8WMahooCkYu18gxRXrbhPyxUh7d5pLZCpvXcsB3KhZaoBGf4xqVsD4SbNn7sfmcjzxc5oj6Qzw3B3gH",
  "key16": "p2cNcn2Q2sQQBJ2RDEAhk9Jm8jiCP9jSTQii9bUq3aRT2LwaJmWv6CzcAvygxkECcfh6mtqoq86s4ZrBs73NE2x",
  "key17": "4Gns94EuXKgX3e27fvdGzgFjiZHPbU759pM2i5e757No6EDZz94ehgKGuayDWiD3UoGFo2tWkHV5GZi2ADzxzgZq",
  "key18": "2D1wx8hBAoigA8dwj1eXLfdCAfcq3QB1LXVQmgQFQHtzqhhopGbtmtPnoKS1nXRXXoR3FBJJWdhwb2zuMz9WhUDq",
  "key19": "3r9nLsdh27ETd44tSH7dChEPUHR45xaxD6ujLdQgth1fgvTmxvoLLFU5aLsZF5ZrEyvSWsSR6fTdn4JsfPnWuJck",
  "key20": "qhW6b5UxNx1tF5KBHkrgQwjQV6XFRoLhvQ97gC58W1bugS5dD4yPB23BV2xbqDjL8V1uQD2g4BokoxHifpL97at",
  "key21": "4Cj3TszSRK7p4iXGMWnD7Fieh7H3mEC2Nqee3BhYmKVNKZ9cKxLyPSR9YeFkSvUnNCQJSQcTqHqMVeUV2sWggoRg",
  "key22": "41cE1toSAMkGpmFaV8Azaye2fgvi6yK45VqcQBeKxx8LdFEsyzrLfNefse5zFX9UaKDd8eVST2GQwucfdAstcCRh",
  "key23": "5jeoWAKc6orsjWxuhtViCMHpxgLKZjktdxeNG7rTTxiWjkV7vNTSeJYJriFjnsrQbyBXP14C16yYaone3LKWiZ7V",
  "key24": "2LzGpXyiFUeUsjrDethzb3f9UqbYj3ZrJvvo1jNjPUnQgknBaDV6uuRYDp7Ub9VzNTdTQM6mPwXYNRy3PwgB7X4F",
  "key25": "2pKbUK8Ln4RSgGJnq2YiEUbhLJP9zhbMYcA2RNhXTV6upaK2LNcojrGrkqxmTUuEpSGvYw4i4dCyi1YYZBH4XXpQ",
  "key26": "4wTnwc24HNK6YT4BQPKHJvMZFpTA3CZdPrX1k167BMXYQamUKGr2wbVQRhw9e9nkWqAtrcqGjsEbv9oV5mG2S231",
  "key27": "333EacLKFqnFqZLgcqJwNUbtK7aqTyZkpp3hyD7Mp9X1oAgEikbnrM4yjBcw7D74bSwUdxsBdphb6P5QQvTdYPej",
  "key28": "5YT18xzsjxtGQDfgUZQBfLnkfN37Vp51XqYhD6EEkz3iRiVx9PXyXZLfrq9SQsqhsAsAdHMZ2nzXeu8SbtBSWmsx",
  "key29": "5QtKTzxKNRzthGca66AVxCtVJJcxo2iXrfT1g7nWJTzdY58itQYH9mtHdeqGi7SFBFBQJW5GjYNYLMa7jomd2Jar",
  "key30": "22qGPGWPsRB1a4sWzJWYp2ztyBChba6A7CHMhpWPq9YDcRt7Qzorp5KxCi2nfQX5i3MmQ7EvG9XwBQLtKvkVkd7L",
  "key31": "2R1DNypJixFjDVq7CqJNTi7qYMzNxZrPzpbBL3t4y9oLfvGu6QqfaDpsqkeQxerr7PZq75XBpG4Gi2rCcgBBkckd",
  "key32": "59hyM1yZyvVvqGiLAKBi2J6wiaeb6dBmYFD12z5vsDdvLJJHr56xP41BbreajQsqf87Jibznwk7SsJGP1HVm8vfg",
  "key33": "4AMs4GDZ27g9hfaZdgpzHxfBVtpxEjLMQ2DX72NdGyfxaYHZmgDHtPqjF4ekHLNwAACAyPp7NiaqpCdDiThkYEVL",
  "key34": "4m92a4KKfGGmgrCgvM5eboydyNnV6YXWAquk34ZLi3JoM5iw4nRyL5G98qJACDVeYyhg8rEpeendyYFfgZS6gysT",
  "key35": "4crrkQ1pNRUW3CUTr5nJbRyJKkWt5XJbrBfvMHgoY2YyCH7J8u8VApmJWyNzBwMPgnXFL69HbxCnCZHz5hGEs8uQ",
  "key36": "4cywMBocxCfHhL4ae2hPQijebC48URX2m1qo7PyRNmoyc3yEpXfFmhWYfKSCM3bY8BmYPqScJYwoZWStGqwv5krz",
  "key37": "4S5C7VDi9ztyT7vu6B18T1YJbpXo3upaMjGbkNqV7MYrA7qgNWQqoXH1BGcRn1NTM8REm92UPinU4aeCnig2VrwK",
  "key38": "4MWrwuB41eVQLa1XcKtz5ph22PLfSBr6QER7QcftUCs8Qf24ro6SDW8ou4noQRP74SHqwicEjVqXogmEGompZciV",
  "key39": "2eNz6K6oWuZz4zsmKJ8JcNxWkRhJw7vmgabe2tv1P7vw6FCrprEJ6qic65ET4PA7GJ2z45mPuMTAT3tJFa55DcFe",
  "key40": "itR5hEVf9AFmx18byLaxibEbXoVFAuhjFiS3HB8UzwddRUzriQqsmgDerjoQx2REYkMtkv792d34smijhoLgHQ9",
  "key41": "4ABns5Q5SC49CZmtDjYR9QxKLyyjjUEFJ5iwaVXkjj2Az1qCfpduCARpoqnP6yt5yV9niVMomiDe3x9DhytPX4uG",
  "key42": "355FsbjBLuLrngdc8E7G897kzRBYnTCB2raphEzWkouech36VWmMfxSZJ9sww9pMSGjryYiHrbdBPs9t7uGWep1h",
  "key43": "4ixsV7jZq7rjps3Qf89fcMFWXGFtcXn7F1x6x5ih2bvy3TFRgMRQHNRDyuw4aHjt8acGQGzcPzEgiPQs49CLs3er",
  "key44": "63wP1YWhNn1tJNvHipJgmBowpZH69Tq51hHvkHePw4mBUZLJLA4rcwSciWzULGmpV41WaxR5CFnMJwg2FnbdWzFr",
  "key45": "4xUYoWFqVkFp38sccdvdqo9LupgatKmPS32pYhH5TY7GjnTynDPFzWMRxAFea5bjJ9TgLXDf3zJREEnwfjeYj9WH",
  "key46": "3xHjcqD7fprTGwg2E5R9yr4xowqs3LJiYz9dUKMcJz8g9uLrbaYYDD5aPHCEKK1SdCMKtLSYSrSakaMnYnkaAdtt",
  "key47": "jbj8rvjAjzhGa4FwezJsLyLwB29EJZnaU7qzd3P7TDXYXn5JFyfPqQKhSR9xAtsovyCQKJBftc5hNh9bB8HZbnW",
  "key48": "41r6n91RrwDenviwj8F8YmdjMMU6a4G1knXAqtcWVw1W3ojZDVM2b5LGUsFyko5M1awcLj1yWa56ZTSXSZruJZgX"
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

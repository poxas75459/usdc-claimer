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
    "5wDhcqfYWV8wnmzvUuJgtwv3G9dGCByCt3CixrjkBF8jSNsDt4dFYKcxQVw1EeEShGKqo3ursCXX7nzXHQbC9qEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Rp1hQRWRXX74VguJSXkpQBF1xCSbRpvtPeUPfMABoZ3kSk7NuDjKRLQHPFLskMGvH6LNXZgLLpFJesu1gPmCbp",
  "key1": "4jfrL7szk2Wi8puFNoCx7AYn9KfmCtAZJJoaE2sKARJ1qufXh55dDeFbpTBztViQMDiwgTwNoEe3sGaQWTRX3v2w",
  "key2": "4j9FhgzcgwtBNPmtFkU34Hj7fWHEUoc8HLaZD3BX6KAS1G7QnZY9Ehx9UthpJJKKk3itY4AcKMKnHNqNKDrV7cVM",
  "key3": "5hMELYDgRAZ39CvnZQmE5tgh6svyQMuzm3mmTyoa1nWbJ9JwCTqnzzrAjgUguJApzCSSPStDZjsze7z9w25ncZh5",
  "key4": "2rwLYxGsMANXR6YA5bWJiAhH7YXAiG1DyNcsz5K36mX1gK1CBbUV4f4Lys5VeDJUAh6DA6LFBvbH8Qvhc6z9NR6G",
  "key5": "2KBKkdX22wuTH4kRhUN6aJPKeQLPzHQSnpuVuV9YxCLdMnD3wjDqtoB9DqLFD9zt5hsWb5N83DVeztEDK53fubVk",
  "key6": "JzZB8tJwGvcANwmwLHvZjKUqyEtYuHhLgGZaML3sojHqWXpcHgzNUKriFt93f9pqoG2heUJ3N2hmBUnQbhuQbDx",
  "key7": "3AeezRyJKqedeQSFhAAYw66m4697DXvNAHJ5cYtW9BeLpYigZyRfNpHgg3iwtsfFDAYoutXibnsKEpk5ooYZTY16",
  "key8": "32qnkJgMdFB5UCuC76fgXNVfG3pDZobQQgSW26eYJn8rAWHh12LPTn9LhCyBNyxx9DWoJj2byG9csKRwBh5RCStu",
  "key9": "44sqeqPgFCEvBzJQATgALJkrxQXXoDU8gLYS3T6RDv6dZ8VH1acYXqMuDmWZqa4khYbXE2M7DKnjfHmtGauWqzpe",
  "key10": "5jsspNWoRvEAZv9Aiqb72myahgg1AkM4jFFG5szoJkTEshngCpo3mjoFaXD7vDzbEjDsE4xPSv394c7aWS8LSVgc",
  "key11": "31rtuXQGA5wj3j2dppb1fh3CWVJDsvhEF53hEgL1FjRCwZ6TCgLmbSYWnNJggfhLbmu4guoUYshgZjDfJeRdwoRx",
  "key12": "2DyE91YSeBZGroJ6iJ1nEFRZuHfHwYDc43jS1T8RMoSQRfXzNPcJFWEmY3kcZ6UfjfkYXeMjASmsBkL8WnPoDB1y",
  "key13": "vXMwKm4LZAxGFfTz32ahp3tET2Jz5UaeSysEjZjPYCq5LoM6iX1xnd9J2X52PvZL5Q44rutwH4Smc3iwpdobWW8",
  "key14": "YjFqKeLP5z3Mp6h72ae1Ygpn443zGGFffuUudHJJcwodtLqPg9Lvjhi32TmcHTVE2hdTSYgi8zoVr24vbQsxuKv",
  "key15": "459UoiGxg5CRCZ46bFj79WdUQ9529eSJGtFUXTahorePKpVbGZUEnowhsfizHmL6C57wMB7YtthrJZLzXubeEGnf",
  "key16": "9Ts6sdcdXJrj8MPJZB4SKugA3NZwLonWpm1eXQzX7HhjovtEM31Qe5SG8t6rPZh42qtBaPHyyxQW8CYJzbjjsoE",
  "key17": "2VQpCAFFcqswS35UXcVAMutStrm31nk9DwpWrMkV47sG2FDkdZX6K15EFacUpCYpzQATRMBsaMgaWJ9gGY7EtVym",
  "key18": "2sBg26d57P4jCpZ19KpvkdEGmgjXLednm7YtytSHHLpPziBGYfPeXTs9HfzgYTpMj5bN5XH9pUvwFhQ1MJ7yLBrp",
  "key19": "3urm8BitWgwuZUEeDbvog86qcuZD7Mxu7Chr6i3qgwi1QArYdgnFGiNE4U5G9Hx1HAMccTrj4ngzqgEW1uUqiwg8",
  "key20": "38VVDXKk8pTJPZZp7fh32Bd2wq3PCSNsDmc6GDGDRvnyed6i6xFpoJrJA1qZ58CTTcQu6tkF28YFgEqRwBpyJpwZ",
  "key21": "2JPxeUo6BjyYh97rS5Wd7WRhnKBV8fXLuuAyE93TwdW61zJN2mUA4p4kbtWjQy7Sq5eidsUy3tHtm7orfcWt5Hbf",
  "key22": "48jnjh7oreEqpduqaXtyR1CMucA59S5uZvzhPE6fpYsGTEaZ1mbfEGszLKNrKKdCsKRHNHV2mG9y9Vui3z64zLtC",
  "key23": "2cGYw4JZsca7VaniGpn9T9WiPfPMjh87Z3Fypcmt1xzSA75oEJbj1H3CLGwygKGFC7jCAsELNbjJhuCCTNmjKt5G",
  "key24": "5ThvmZsMykbZ9e9zafX2bbeGsLPHancy4M8b3i797heQFQhQkfkfPe7Kwht7RpVw3HRCfTnyTJRjhS6bZxuFpkfV",
  "key25": "pzgZqGi99x66Xcd2AjihitSEkpBaHd38EeLd9VGbuPjZ6XtRb9JCM22X5K88jF5mMUzjnYyZ5ekkqANkcJk5bJD",
  "key26": "33px7mEaQuk36WsbHuK5YzJZEgihyhYR3W3DwQpCBB1SrLJ7eoqDcYybW9UAjowqmDJ2Q9b21Q53vUdsuJhf73Pm",
  "key27": "3dKfT9jE8mBFD236QMtrRFHdyCXTk9HiR4pU1crCtXVQgc5Ze7Qe9ZqJjvmKxM6rMaWE2PALyxGk2Cs21vehYBNQ",
  "key28": "2xxwgdu7fwShMq6CwdwCnhaZvYNgDw4HJuwsFPo2j2MFViHngf5E2WTVo7U9dwonzvMPkur3sfCgn8cFqXAsWSbG",
  "key29": "cMyNVVMzAc7kDgHfsTecXAvL2jJhJNbaYdSLctnJ1pdvUsUBZRrUzpHY7s3n4gzmiyxdDLpdt4MZ1sgTk469WUW",
  "key30": "3YFfo1aYQrqSYLsK5cWvi2ECEn9cjMVfPfasJxDkAQw8ibQq8eVWz58gHFwymegSfYovbFSCvvdXYYt5qEvJ48hd",
  "key31": "4KSwsUeQXkq2g2fdJa1LFhLWkuSGr9Z7EK9uMxwkqs36uq9UbDMWe43CPpBm78jPMiihbXVVtiwRewcqo1Tvvi4i",
  "key32": "3x1hxr5iDwQDbeAACXbhBqrE27Bevkhfcjq9ex5Ewi4UWbuEKALBtLnNvvnLcGUbDjYJdbQYExJiZzZxJFAKWq9o",
  "key33": "3XrfeLFEmCRS5bq6vjLcUDFuftJP4Z9FckSwz5fNd4TZibfnWUbPCEAeTzW6ZxtbwJPk3fTxDWKoMTiQGBHRKi1w",
  "key34": "22Pb7JFpvtgkjqeaLbmQTpzYizoPgvgnuywNAiH5HkVLSCziKkYjqMQBA7aC4CTA1WSYQK8oGeNdG8Gv9C8ryqnj",
  "key35": "2VqRUHcF7ajfZjEWhazxX81AF9H7wvByLSRjaNQ2N9oysRudN5rvRGhbGqdbUiGcLvzSgVAs4rxRw61nqrv77uLL",
  "key36": "4WNkQQZgHbzFR5i2rRRRxogxMD4EMpoj2M6DAQooTgawAqoPVu6aGHVeGd1dsmjWyezb7393GVzYsjrN4y3hsH6a",
  "key37": "3muMr4u8tJSKPv8Yd69JANdmHNVABrUYUE3esqrP3Ecr2DLkd8LkGGpsQwPxkAYKMTb76guDjtajTwbbSSauWf9f",
  "key38": "kSD9QRkRVYn3NDzu4eP9QTbCeNJQ2tZc4PAxRaE6ZCg631sN54rQrVNpgJNMGvQawWbocnYn4hhA2eKg8paY2Ks",
  "key39": "N7YkSMx38PEVnQvTivUEzwZkcFj6o5gwGKyN398kXztMr8XJZwa94awMuo5MK5VtCBywJfA8PQBaZchTbWqSDh6",
  "key40": "5FxXPy3JD2RtjwQnjdMiaEkBkesJwjutB3Jxg9J9ppWJRAw8DnU2boP2JP78hTu73HYP16r4N3mk8ARBw7rFHCY1",
  "key41": "4n2LuYj5WeQzKGxqSewCLP1nYURKQGuJnVTBq4VdpXYd4thYNhQ2DcoaewJCiFuBhSX1NSW11He7GWrWdQAWkfdJ",
  "key42": "HdTaiC7DXADRitnG3JsEqdZy5VTGeWuevGi22feDsfCi1xDpyVBb5u1XVuV3eGtXAQHp5xAyYcHMMruc9UGvGBh",
  "key43": "2dwggsNnSjuFQxaBDbSFXeASZGcazPntHdJd6T9gQSAhxBHZQi1q6BuYe43bVw7wpiBYirfTzGMGSGhLtSuWbHWU",
  "key44": "4KRyLP5Pi7WUjPvgYKxe8KjYczRQyBBknY53GKcuynJZ35QHXn4hhbdjBFj4Zr6HNBmyWHJNzR5fVDaoPWRb6rsU",
  "key45": "WHfJQgCT1TLCkntqP1nQwmNfwrzQhcKjfZpKUiSPYDP7rSuEohBtPjSDcm5yeXV6jWAiYvqxLFRM4czgvqR3EFo"
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

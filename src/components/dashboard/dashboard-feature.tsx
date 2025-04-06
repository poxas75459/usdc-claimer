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
    "2cZbY9GnJfRxbAxtj5iAPHCkCizMpSHFV7t7NEjDxsx7nBisSBZMR9UkDJQkCcEBTUEViAMZMRNtPZUfuLS4ZZ9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yF8TA3Ko7PrLL32yt1QJC8Y8evu56qtx1pxAcL6eqSi6zGPDg9PVXzZZoFuyFg87NgrymGPRvkEZxSz74Zkgna1",
  "key1": "39wpzax9Jxe1b2ww5rYtcmoVzDDwDDfBzVVSceF4fcBLe1f1jqp1ELgJgv8P5PYmneRfRWX9aYSb9aw21Ceg8qvB",
  "key2": "61cZzGX38YgR7WyeUwn28zWnGnDG51d4qeiJhZUgjbNh1AU1hHCT6t4cvJ6yqzG4ZEK9iU9EFM71AgNQ4SkUsr8x",
  "key3": "6328dALGCztDr7hnEZYVyP7weAAPr49Tiok8LgQLfgoveMfiq7Fs2NAxL3indLeBLF8t6ibutWpZq1F33Ct2tgBA",
  "key4": "EwweLyb7RQfWwuKJFLkvWymMcrNErVpeJHyLnjG47uZ44m8DWBbBLLv2p19VPYQGvNJdkWvpzWrihbEyue9jsts",
  "key5": "4UGw1NuL71fGTztsagMLDdGEAyGNHnFgmVwyUCp9a9c5edddjQxSdfHoaYZFtvvjpprKhA8scmfQgP44ou4h3ead",
  "key6": "52FsdP7odVMqG9BxPkURV6F5zochQvQeBepwcYwWtL2Vz9GG3VJ2yxU5gbZstPDjGpkRK7UPAa3u2Vjt7wfFCqUC",
  "key7": "5AH6xSrn1zfvN1xLF23ufnCfbLCj7KNqfcP52EQ5ntTkAg4FzACrhyypHFUYxjjVa4aywFmjeStLWTAWNThsCCod",
  "key8": "5zY5EpQLqWxWzmsbm9SfasvrZFgZx9sfVAmpX6donMgdvR7Z7V7rDZZD5hoXGXQtTForCU3Yf9Lm6579R2dwyWKD",
  "key9": "4NSQGh5A3YdsKhPQSBGh9E8TMjMM5uTUnfGvkg7EWb4SiQnG91MUbwDMZmiwbnCtHmFqkJGfBcJ3haoFGzmjMFai",
  "key10": "XsqNY7sRxb7WpUXD8vbjXCPwY9NyBNS8CzA16BzJdUvANy5VT2udHE1oeSTMx1PpVkZoYycCpMqJme5sj2t7aRq",
  "key11": "4z3NbbrnwuPkw2iHdF63HCGxeRimQeS28gkRbmRnnBEf3DE8KeoYoExMdAwag9UZFtNh1qrT1WH2BPPkTMNLhLj5",
  "key12": "4wsZUqifR2U1iCkQ23hhcqxijjq2j5Hgt6JbVtGUBSgR5EPL5rUJWZAxee1rT9GAJmpCsNRv8XoxMPLq2xCJG84q",
  "key13": "5D9aXM186FJqVJY9Zfx76tqKiMsyi5DVuU3wtJ4jiQCFuZW9Jb5uWZssUei6vDxoXktWKLXALC81P2Ntkz1bjAnm",
  "key14": "3GBMXVjyGNP8tQ6qEuyEy33Wcw3wUcCgeu68EbCNZFo9eT3gxgKx4413QqTUW1V3PhM3xzYEMappURp8mqsEGGcu",
  "key15": "3ox27SpXVMCNrdUhKLQjckH3JRkLp4A1Ddgt6yBcL73T294SiC9kaNQauKxRkHEH1HFTDFnrgwPUd6cLKhmmfkXy",
  "key16": "5RZzyRpVLhvVY4VNFpTNR3UcXw8F8X4GKxDAYSymUjrU2UMyzvwoiKuDEvcakRiq7iEf7iE4anGwwP2KKQqo2R21",
  "key17": "5GTKmycQksSaSt9DqncVPpXjCdkpZCALYcyvQYfRFfwVaTdp4yJkchRKkn4bftEbM5LWZWAn6mPL81q6veX8j8iQ",
  "key18": "3o46Pw4xtsa8PuXYz1S1aEH8b11jLVrRrmsAU88RDgNc6kAg6JwWKijaeXnNhSH73QzQW7w8Lwbfd3bMYn79LJhQ",
  "key19": "5CcstQWXwu4yY6bc7HvSR9uShsGS61iUXV58KxCperVv1pTtiZjyDneTQyChrycWH5FHNqAjwNPGj3faSo71qBkZ",
  "key20": "Jc6QFrZ4TGX9QtxxC5VbAA8b82yf2oD2Lp85HeULxr3ZPnVQN4xXwat3AMDicESeawzoKr88esSVuzFJGZpmBqk",
  "key21": "5fncbEaf8HawXmDpxEh1jtWd8wyACbPiFscgu7QqyGjFuTaYgTCvumXb6NbVLUNsVDaU6jZv6KpR7cJe8Zsk2z3o",
  "key22": "BjmTQQDK4EGZWrqq21EdSUzNzJhiWKwi4JuK2rD6Bv23zTpFp6VNZVr9gieAHTotDZfFe6GmnzT2YBx2ChUyVwq",
  "key23": "Yq4wM7r5hP6XE8ucAGePoDHJ9Lat3dKVEZ4orr1RK8HSxXGBjsrG1VJJdPgfVtWgYvZT25GQ96jYkFAgxxWnbk4",
  "key24": "2kVyvTWkoGDp5tfbFcnDUKunNftpDgLPnvgjt1khgiL49jfpQi1BxLZyB3rx97eT4ugdGv27cs9L1oTHYhkN5MHU",
  "key25": "3X3gD5aJGrN6VCsXedGkqevQ4ZZu2yovmY2Lvptwt7TinpWqPKKGvoTHbakiGNxTK6EgGAFqREVgYGVDoPoJgPdG",
  "key26": "4EAfTrPQJSBUH1iqb3R5ksv3u9DEBgcUBYNPeg2AGU9Xj6dti41y9rerrbgdBD6ymCZrEPiy6mfUxL3MKeqCxgc2",
  "key27": "5GhNVHupJKThfryTAwu57UjyVWKx5vc9BA2QHtZYJ4N9Hd23QWCuzaGFKMp9yNkpgJ2jhL65gjAEAQddQ4bPGYNv",
  "key28": "co8jfR99NqdR2fFXLMyNYeiYzByrEp5G6R9jPrJRutJUP3Rb3uoRgU4CuGb1TGnUxYcFgPBKD2mfuhZ5a9rJvCH",
  "key29": "5HbLXpeRd3zC1hAjcGmx8XcKf4msB3Pv9QBdeBxxvBuZkCdqrpWfm7jYRnQFicdRPpDRX5bUGi4AWgwmnTRHzmXq",
  "key30": "3uFRyQsQvQgFKZ1qPAKki5p2JymFWDLWZSnkv2BqVctij4HkWSpHfxHup3c9racVQgmh1HxgN4kYSLGfnCtf3FSy",
  "key31": "24EXvWLSSUfWDPnNqaZJUGqL5mS8aKJcZqUpTo84Fzk4Gw699BWAaULC7y1KCqbsADupqaNJSM1hgt8ia7nZRRun",
  "key32": "44gS5Pnq3jFTZNGRWNvXJ9BsZEbBtDu6yBfHztMgcapwijhgwK7hk5NXQcXMFFJ8H7nQ2ViRYeQmJYCDCJgybjF5",
  "key33": "SMW1XQg4PUNrfztwhJLLDUsRb8eceUw1PBUsytuWk6oYG1mWVAYQC13WXmXeSeKehFj3SF13nUsoxSzcgAwpmCb",
  "key34": "a2RQDgmSUkW3ut8mfw1qEK2tgfFcXJGQrSh3fmVsZBuqoTEQ5hSZUR1F6i82W9qbETCXd6yjECrYXrN4A1Es7qd",
  "key35": "3iLXTqxuMzeuWQC7pLMz8PAhZqJd8LXaNzwkz3UZNW2f7FiAobYUh76m8oRUXJ1G8kxmsFfo5EfM3hJ6esCdtfLJ",
  "key36": "3gmPfeXTqZJ1yULNj63Ecoqd1QHaDeamsbsHq377wrJj2WSDhwZm38KdvDyFUTEq4MVzFjGKdqK9ibyDeaj8zGeV",
  "key37": "TrewfptWfSeGnktLwAySHuZBmGm2yZJRgjwhUojCawpx1eMYH8WvhdntkktfVkjXVXV67bLCvUBigKdTCSeAqAB",
  "key38": "5b14h7Jhw9Vb53Xm2LpyPkC83QtwdCn541KcULMyBy56Lp1XqnxqJ1TdYuqwCJZsdf2Hp3s13pjznevVij5oRVfp",
  "key39": "26Nhfqcew66n3K4vCuJbzjf183wBxzose72Ub3Ux92ADLkw868Fjgnt2HWJUKYPbStjEEHHYWk3U5xPmgu6TC2QE",
  "key40": "3dzMctLLgxxP7L7zfQjJf9YgdNPk3DJu3DZXStyg9jJ4iVA4tGiCsRu6HCb6gKipmTs869fHNP5RWy3ZHE5S9b4",
  "key41": "31XJ4ic8fWSbfjGgdj4n5qdjB9pZJYcdtNsLSM43Rxp2CJJEMFfsJLWXr6fSJun9aQzenayE6AQvzEftoHBQpSEf",
  "key42": "3UzCpXNMDcTiBvX3RdApWKxzRXFmt7sr9P84bBT2sCoGPS3mFexqh8ZwS91zFYYnFgYfkdbbdXWwNKWimddMoERt",
  "key43": "3ehr7NpEKM7NL5P3KsZ34nmgeWzQuxLaX9VfoDtq6Z6QNRJ1ssR1VioLpGGfVW8cCUiJGE8vEuGQip5cbFXYGoEK",
  "key44": "4X6nrXPWGc3h57huiGBkaYS76X1GNRr5PdNKenQj9jiKKSFU5pGK5wRykU5mkEkkT1CaLPjEDWpADWv7z6agfvhe",
  "key45": "4pNfVtcvNTu3nYj279xQfcZ3uBxefmWJ6qL3AfrQM9kpBaWhE84v8KBxMvS8NwrMg9XEQByeiurKZxu7i7dYPF93",
  "key46": "4TpK2jRn8cCEj6iU77MohCEwzeNMMDXTDoEox8HTmPejhZfUzd5hkDkCE6Nj2V2F2CK1aFfRfeaXQu43TU8zXN1K",
  "key47": "2ALPmPa7vTBaJ7guz7WJRAFHjPXATmvt6gDj87v9q5tQcGGvWYEPuyEn3JertWs6RjNizCnQELePnzkNS2BFhASc",
  "key48": "2DLm5sK8uUhuw4ou52pZLJECwd2fTUMGy6nod6Lh7o8QrHP9UCMkoBP4216ERiU4pJpe55pFgR9HfdFAo1NUT7GF"
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

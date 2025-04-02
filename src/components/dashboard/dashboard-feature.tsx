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
    "3d48icni8JX9tPAM8NDRLYPusv8cfF3iJ8qBmEFV1gm7v2372V1swetow5tZu6ZLnBV44csdiCdihcvTJ6MYQ4gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5ocsnJtDqUrxqtzapNkumRm5Lxs6NQ65chG3jpiPwhkn8msetsmEyqEEZAJuVjZ2gMnWjT3U6eHexjBmJkmaEp",
  "key1": "KpBXSDU4PTHSPjo71xm8FLn6CY4XD18U6CxyisYKsHTjgp7L8PJZQ96vAjFfcM3sURn5KsqrjuEnMhbhdmKNRZn",
  "key2": "2dTsa9yLww67x9fnDQpZG6UCuB4f9zicN6VTPwGCW6E3JuM9UenLsPkntnSsSEUBYgF9niMf4Mn5zAchTingQGwD",
  "key3": "5ozWFcr4XNNC6LHEDP93cVG2crPtU5ih6MLEkS3GPHk2AMWB4KXMpzewFttBCCVfPaLupJ9tQtvZRBFeyJuQwxrX",
  "key4": "22thyR8kbwQiiNfMpPiJa9uuJiMNXwYTZzYdBYu238k54LeS7ceUUpuGbHPhgfPzG1ejeputNQAq8UaSfdXjVsTC",
  "key5": "2sxtevFZFsUjQtCf9nHS1hp5fJokBw8qb4z9ckijbn7GbeCnAdWGySiyDpn1oLz1YFcFiMGZmduopa1eBU4KMjkt",
  "key6": "2HW4PbpHZnk5u5SBZ3osddMEVd9kkx8dbPem6McpNe3XjEobuk6qi8LE77JWhXffU7jQ8S3ytbAVu5egJDas34o2",
  "key7": "2qNwGwyiWAGMzpvskwKCQ6o7oKoDr7Ay3yE2s2Wh5ATL6XxpAJzp3bhDVAkwzf7qzR5s9FESNLwVhtnCsGjuCTJq",
  "key8": "3fBRSdWQcaTGgchGicTg62X8WdCttejWjmuHqLdTT3C3CN1QXkgSxjQpa7iTQvBFK7eA8ehKh4n5cSRMrp1m9tsk",
  "key9": "3pz9zoNycxgWLup9VZriCX1JcjH4tXkT9JMhMB5ypmSkzTx3Biic265CDW5WvTY7VbNHe9fLiPGAN1rgEcLLRkEJ",
  "key10": "RafZFCYxjFHBfNvV3hekivLzoRoBSLs87UHcewZhqfjUoKtq5VKHU8ZmUacYmDX9Ju4P7cGe4iA6QoEs9DK15Ue",
  "key11": "4uGr39YE2m3LisDRPmAsiw3o2CWpHUayo8YLy3k3uEbgqzxyVK2CCNe4HwPvrSXDZ92BCuNTssXiYaEYUzczATQE",
  "key12": "Y36JHbJRE8zxpB2qFzjWYmBiB4ddcSGy867TfNBbmiGcK9NKSecLz2ineWpfXW4f9GifMF5eRnocTKbjVATww5M",
  "key13": "5Acm7FbLX6VwqzKHhnjhAfBzZDsiNo7Nmae6QGneCtjzv6NuvMYrdjrCMKgBeeTYHVohhQLZ1DJ6WfCQ1ZAWT25k",
  "key14": "24NYQU6BtAyabeMbsu25vDeDocfvekzovc1UrqiQRTG71Bmu6sP8PZnHMmMsmP6hUEc1brRy23ux63tBZPBwRcb9",
  "key15": "2skuSaMW1ruPGGwdZwLSqbFAZVHUFwegZy74draACDy9VxmamF8svrTXsfZjLDCKJffeWtDhBxX5jgGbytor6g5k",
  "key16": "2n9s1v2iGo97fUWMqvyzAQgDie5jefj16fHsrBvi3DtPsf6nuPNZHXE4gLyYMa3FKahtXLJ5ppHqoonBB9wz83Jp",
  "key17": "4bWmkNu5EEgY2xsc1ReRWeWBxv2GKM93Et7SFZzk4FQSZb9UwPyFt5DPAwQEZvj7gmip2eobDtJ94iHHidmafujZ",
  "key18": "4FhcMvbf4vFtanNkS9FjpNT4F9AQkinZwd76VXRSiPYv8u1cK18bzXQ97StWTYx6ncvfh44LMa3S3tj66DhHKmxg",
  "key19": "2STppMAsg9xnf8q5rCEXaw3QVzVcsJ6Bje8G2QY2NAzroFttaxrKkBpmRX5Ww12jWubkFWZbthnjt8dzny5p28FM",
  "key20": "5ijPzmyxkqKzfuwZM8wGTFccKnkXWNcE7xKBmxrCaCRQMWNfeoUTdsF19E925qZp8FGXmvV5PpkBZYmsyCHJQCuq",
  "key21": "2EHVMLYCjaKvtPreXsGgPYonLEird5MiJL3F5WppWNriKuomVyhZRc8XZjDHMLL1WeAq9vWCvT3SLon5LiXRZUkg",
  "key22": "3fYvkFur5qYXA8gLB5AgWUHkZuJtg94uzbMivUaeoCkxeyt8PTHUXDwkpKqLwEPohwhQKNAJPe76rW9z5DuxWWGY",
  "key23": "29KgDDpBVMmxYbwtXoVcDaSVTih2zspbpyCQfgyaUNio8YN1mJqxAXKepJAAsxx6oTYHzDpciA1kpnSwiqWuf1qD",
  "key24": "3o3DHgNZM7grFqLQxaVhkXqEABpteNgkM3Vy9gkM2iNJUBvYdzpe34tQJbUE1zKNHayLyn3LharPUhkf3Ky6JKWg",
  "key25": "4PfmvULbcqydEkXoNAPtMibtQatKFWkd6eNizrkrizNWAa2DZ9rbw881S7byennRmuM55mqkqkU4xwddvjRs3yzH",
  "key26": "4YCc9R6jHC5TXdx52sUm8ttFvb18rK17Xyr2yeKdcYAueVqhjVj7EUmTPRKgyKvQUbKcVTUko7qS1yVvjH2i3TGB",
  "key27": "5XTVPJHqP1pEAjryn9Qh7raJj758iQC9fqVhthqjk9ex545somLXGWnXMvvRbYWNe1i7PmXswZCifnVMBWvMqDPK",
  "key28": "2Tf78NBc9yQtV3HuzrjKr2mi35r68pEt279Djr3gG5dXBU1PqaLuPMr15MWaVr3tnufH4ciFUafcBSzNV9qwT36a",
  "key29": "3fE95CL4o7eFb5PSCaL1xUG8zYsXy99Fj9vPJkFGASdz5Yz8vecSVGDYRXiKQ6YNT4Yh4GxQCjqJU4UvuejHhyvY",
  "key30": "2A8NFgfARcAr5wzY77GyP77afoXXktUG5VhkJyS9J7c9cEsin6tuD3UoDWfMjZ2mQNuSPNABaSkzUcu1mXL8w2C5",
  "key31": "2hBrwwrtW21TuzS8HsNHTfTxujPrkpTg444uDrGDx7FwHAEHqoBhgpkDTRGegBUYRBmzgRsSzLwJGrafCmgk4NTU",
  "key32": "4XrYXekHzH5hyvWqqyRvzsBKxuoHx2KCrkYd9EYG64C2oXBhxDLVXTnyQxduH5sfiTRszsSH2E9ARAW1LF192d3o",
  "key33": "3ipqRdCqeucNwLq6Bc9zRYZ196VeDRHTjaRxrxLwkzgNxsP1hk6yLi2WdSfWCDbTEJQXoVhvTTfoF9XHsp6tUSRj",
  "key34": "2zoS7vZ7XxXRE88FreMBbx3mTQ3pVr2nNTcW3eibcXKMcGTNPn5mgcf7i2kBiUFmrMm16fMbekqTg8yAaMJ9agA6",
  "key35": "5PspKAKWpVV1kbipGYu7cdtyCB5ez7tBXABmjFBLdjrSuvZN3nH2zvevSqhim35hmfkW3iDy83GSHsqZ12bMp5Qa",
  "key36": "GwW877QMiZgvVmpQ5nPAScPcRdgU1UjLWjdduo7hDpqZZfkhP4ZzyqX6xFtqqjGfBCyNeojUBMDh6tw36nk2xGK",
  "key37": "3aw1nDeAyiXjQ8jWPive133sxCxttdEHmzzEYgDEqaM3uA3Fu11e1BtCaEowi6TQJpNdXhUGdYApR23Z9xcMoszx",
  "key38": "DKDtiMZG2etseCQZg37iqaeiCoRwjPVpw1yKJ2fk1hyZCrpoMAJvFNi6ZCBW9Avo4cPoimVWpwbQGJUbHgJ2iUA",
  "key39": "2AujkQdE6jzDRKB6KG3wvonrBDCMk9hthHqYCU67sqQijXNn8L6ZZjzjawEHqsgriFcVCTqq79wX1NfuqGZt8bPK",
  "key40": "51WCZvDrtHMHC9wBtbbhDyurghwFqY7DeaQarcuHCDEQ9FfVT98dgpRKrAFPs463Mv3CVkNk8GYyVNUF8ApZhw6S",
  "key41": "3PtuScE7F3niaZUZxvt7dLheVNifw4pR4cc5ZugQKX1twSd2GBRckN9mcip7sqMviR1FJsAgdVG1ggwizpoYp58J",
  "key42": "3QpgDJRjiQtLXxg9xqHUyDuXgz4jj7rEavHdz2pwVNfRJYCPVFgYAVAzinfypw3eoUgK3QtkvCDUJSVDA6RdNznu",
  "key43": "SPp4TYtyPTdBt6PhbyWsCWTufz8CnrttKhspPodGDzbTV3huZrwA4YMECwzFvwqQeVCFCA62WoQzZYPkJoXDquZ",
  "key44": "33h1m5Rt4WsX44T1hfTxt5CHSsnByQNa4fofAcEHUVZBuoedj9S3DFnJrheswD5Z8tQpiVas5q1dnrMcsAn11PKw",
  "key45": "2m5Q7nu1Ae9cNvpckby9QZ3MnJodFrjn7hG9n8FYVH8D7ES2AhvrVzBpPzmfU9zWXST5dSq6EEyZtC42uawWVxga",
  "key46": "4ya5MKitQ9kV5CSrJPjG2j1oUF6rZp6kNMF2NpVvz8EfS4FD8uRKT7Lc1VWyuWVossTqnXgpmdfMsQcM56owT38m"
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

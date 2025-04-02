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
    "4z5NyUR8TTAWvri1QkMfqQrCeB4Q1RV8yNk5fNNmN35empw717M71wBfwoZLa4aChS1kRp5UiWY3zwt82KwhWce7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCQdWN2DtnGAq9oyJVYsSm3iEGTYc6MPEkHGm9eanFT8pFzn9o962Fkck9p6UWqrVbsqQvHtMe5s7zqtQTn4eB4",
  "key1": "3USkY7wYQHRUzEoiTCsBR9xxswdEDjqv7pz3frThqHxAWVnsvdqU3q6CvPDNomg6rNGph1vJ7GmJMybnvJea4zPD",
  "key2": "4TSx59yAM17JRPtbRvSwFZBdEKkgSikSMWuYgim9oNCHZZGkV8uByekyP8DbmmFAC4kziL9cpaHuoUkZQa4zFpqd",
  "key3": "5zvGnXTNNcyWgjziPAAbyWuurQWVkcMLMoKKkpSk4aawQrvcGfauNiHP3aUWKeEGuyp7pcJ9tEQeA5iFbVG8HQ7a",
  "key4": "2adPNZ82umQ2gihH2hVZbwx4jnXQESZt5SJHMGJb4ZcptxbgwjAq9jujiMnaaqUuveGF9BhYQj69UAmczeQHQXtT",
  "key5": "4SYJrsFwFHzhV1Hjr2apPWxe9jUVVskoaAXAi4bJqgfUXFEQkhuTdzGvofgnceBkEZR1EFUTvuNw9bxTAgod7mVK",
  "key6": "52AdREGu68qNGj1NgrVkBmHNAdYEcuMSB4NAxhLaVPAV3gK9WyaHq4s7RGmtEbPM3bZr1Nr3B4VUuH283fgPmk43",
  "key7": "2xBwKndMu3B6owuTtw97sR2T4oBmwPn8NnzcBHz7p4d6TuBkAokuDnSMVsULu1rZmZUBvJ2Rwbn5aCXyLsvT4Fr4",
  "key8": "31QsTU3Yj2wb5UuFexYs5nnEPFNQSWjXTrgh17dDXDbeNvhPnH65ny2Sn8dBaodwLornqp8rzK9Hnnvr24D3g3UP",
  "key9": "44LVdsuAMRFcEBTvtgrxzx2rwVLRmPYANp8rQL2b5uMUCZ2ySTbgSZ1Zj8U11UkbsJfaJ68ThShzGBYG7n4re6tv",
  "key10": "4wLm3MPyf6dBhrNcY6YtKjSHvL5tF6d2Pp1ZRLHss69H6KMttuc5o6yEjPHwti4Ee2hZm8f7z2ThWnkEdREqQGBc",
  "key11": "3PsdJybWE2Swvek77NioTyNPhP8fLbFnJN3xaAwFzhQgpqmYhxPZV811gihLC8xLk54VEZKeNnu4abxek52rqrGn",
  "key12": "5kuqrJUhuqNRo3eJNNAuBjbxfw9ULBUxKBhPXN7KpQvfGW7HDG788NJpV6tbfJacFH1HM7pauugt2gHKfKh19Yt4",
  "key13": "3sy29i2YEKWDykiArP2wAinoak2CPRmwhjBQ3WtHz3t5LRXyFffometTdd7uUYYaDBu8Qu9zr9Jos6Ng13MRrwfC",
  "key14": "4coyWAiWCHGaaJe4U8sfkrnfTQdvE185wq8WHboGAgDzJDzxiXPPbz6YQseHUYa6NK9ESfHzhiahEBxnZKH58LCd",
  "key15": "3pVDBRWuTxLqxqAj3mypDWYZdp5zb1iZ3TnywJGmqztMKqe6PeN4FrcctER3yB99pxyHZJJKGhrv3zN5MktqTBvt",
  "key16": "3D1usRxJmrEZuM5Z8CRRr5kTKCQsbhvYZFByAkyeCB1pHs9wDx2rDB5NUFvBwA34K8n5JGytgd2hvRcn78cWFHmi",
  "key17": "3byYhDR6mWQxiBvuz6AeaJ8v66RQ7DPhBo8zvQWEUH1jXoaBuz5V2ZC4R987EfHwiEhgjBGLwnz2AFL4WCymCCRq",
  "key18": "4yDAd16zCVrFnngnLdMFWyg7bWQ5fM2FuxGGboCNizesdNAapeX6U83KZS42tNRZgFfveUDfTh1NsNm44MgCh598",
  "key19": "4CfNk9X6YKnKpQws3tFfMwf41tvEUozL9eRwjrpXpWsgvA9v62nXFwm6C6tfWnVdvf9XTUF6bdcSpviYdmkvkjje",
  "key20": "2jKL5QZ4PwpAPWTy7xHosD6fJhqp7Qc4fWwdnu1UeVF7NzrdADbWbAp8qRqnBgcMh5gZTSYspton8EHXBWbpbAEw",
  "key21": "4qhwbW37aku8nbD8nsLf4y7fXJGqMpdNYSUEmJqQJ1eEr8NDtdveEbchm5pcN7eiep2ShBN8HX2EpqrHkqk3Kc9b",
  "key22": "51aKrhwBsFPP2paTvmy5bDqDo86D8FEWqXD1ExrpjkL8MdMhuETKRMrcy9mpjvzmfCXnue6p3uW5BsC4awnQmrFE",
  "key23": "2NjmurVaWaTGUi8XYKuhrasyosB8sKLYHx5UcD23nPXSMpocSt5rMpSyFirdxsdo7YwfDNXAMG8R32Y3HAHUu8sm",
  "key24": "2Das1RrZtDSWNqrdA8MR3XB5jdQnpWMsGgNxLcsKYy47hminEfdGXiT5zUQMsWoVmPe6onJboz3tNSFzywsAFWz9",
  "key25": "3YQsfTZEESAS12QCdSL4FoVV6scm8gdSRZzuwUbG22cbyLYQvnZ9Pq7UWEWFmWPdp6bUjPq9m8Pi4HXJS5xuWhGH",
  "key26": "4bP1QCfQ3LgUL6cVwqk5NwevyqfYta3ZEq2WF5jSSNGjUDZUr8Ruyk98JL3vYiHwWKKzwFuLC97VC8fWzXvdwL4S",
  "key27": "HJbRrpm88H14xp2qCwMt93S1iV1mEaZFkTETeu8cXo5P7MJuJ1viTT1qa3HVez58WJodyKqWB67N24Zrtk4p8Py",
  "key28": "4fzxCQetez6cTxLP8m3Ejg7ogsdazjRTGriz34z8vFGVF1voJ1jkXqmMQJZdTqcPm1Zixg7LnZ3AUkMKAWg8TSVm",
  "key29": "2R6hpexGYAdbnHGevczbBqvRLMX173QjNj5RMB7spX7WSrnzjT6sr4ug1Asnj2LL6nvPXK87dYuDMDuT6Jh7PWq9",
  "key30": "dfW8Z1paz9Z3K2Fbtx3RnX6V1rWEtRu3U8L4E7JZ7mcK9DY2qjM6f6nN7VNXWBcdCjyJjBcNm28giJ7cSbBzsF2",
  "key31": "3xmf7auCZb7JMn9xjTnBHYpzKarWw8FxqFTDuNikUGWSano9bZPe2FrrorcTiGopMG3EPgcCay6QNkXQ2FmP4efy",
  "key32": "3cE5sjpqu4j4qJBLia62yobGVaCf2YaiHGMjUntmhE7AwM71YLgdKS6oHY5JATh4QHgScboVPiFEqsBk6k77o4vC",
  "key33": "3SKVqPXeyWafpzo6VYkqKtSjFFNXb4oR8fqR3p2eHhbUsmgHyGEJh1yZmYciur3WKrK5hvovtLBpTsxk2PEeHmCq",
  "key34": "kEVWdogZ8UAyYMYuDwHs6zZmXtNQvfqhnpCWoF4rxbYytqLTAgYuWZHNrbkjCdJ78UrtTSZGXKoJbBHcZaP9ZgQ",
  "key35": "5w4XMJKvAHyJX9AZiaSy3Jpu7BW8tAepc62o1U53oYHhA1dGqvCKHsMeJMA5NLYG4yU94UtQnW9sR1xSD5fWRiPA",
  "key36": "cnEziU9ruT5Ey79dZxb97osVGcgJK1sEvfTrxvY1r4jRvdsGyPe5aiQSmiWUe6cEUDTKH3d8hw1FsQRcSnEC12F",
  "key37": "41cMcP6gmybhrBiFiAee8Q1VUVBiK4Kk9oJVfKcrcFNvamtxDqfDgVTHzBNDxrUqxzLFCK9gG5TWyzw12mSo6Hnm",
  "key38": "4ykDNbqJ7vg9N4W7jNV3ngxorrkyCzu2VVWkzjRJtLkj1XrNAQ6jCZJ8aYTyQEGdxgLmbmZ8BgEaZEoSe96LUseQ",
  "key39": "61uevYFY9HwbGwoP1vN4D6pcxc8cbjjydrgy8bBpMJLoEozDqFwnFiv6ZaVg6QR7wEWh1RHdK8N4B4RBEhzcztjo",
  "key40": "4j9EiZZKznD4nRhx1Sig6tTNgJEubrn4am5XFQbQvFKLPXePT3Yc6HuRu1CYrQvokQwKHg4McdP2uzZnTdcfKMJz",
  "key41": "3ggAdSVHv1jCDwTRbev7oCxNvXzDLjxWJxYxTgr5RMR8BKUWNDCqE8NLeyDAHg9vzBHQ9eQoNw6ALtEagG9i4AAx",
  "key42": "4kJP2hSsAgfFpEZ3XZ3EkupbatmQHAYD7xAQ9DpzAYWLN8uD8tDhp9f4hNp26DRd6j9PH3i2m1LVXqcRfAU3qC5j",
  "key43": "3kRcafhZArDN2TSNA5mwrVrgGc67GxJCGzkQrPC3k3Ns83oGKLBr1JPkz6MiJnQVn67Q2E56hSqPQL4hNuVLywKS",
  "key44": "cCALrkFH2m9XGUwgCYswbWSi97MH25suPeWwibGQ4Xt8hAHAgBhw4Eu8V7GDKze1CN1KJ4Tx38BVG722AaGhFFZ",
  "key45": "4HaLFVb82qwRFM28fr7ouX9oLiY7TpvQNK1wpjNTGpuJRidHiLxXXVqLTTMZjkGEj2M5W4FhYfn5P2kR7ufymMhx",
  "key46": "54YbSahmVTJFYR7Yq4ER3mffPUVRjfcMVLU5zv2Qko77fBHyDnkpCD3WMG6ZMEmbwHDiyTcFsUFmZykKdrBk7mhC"
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

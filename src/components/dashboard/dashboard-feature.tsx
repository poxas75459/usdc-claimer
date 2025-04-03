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
    "2UGz9vp2fHzruK59JM7VZxdbhy4spGZQwZvSW14qriJxArxBqPZmneNxr1BTkZaArPiihtNCjkcvzy2cLphECqxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W33t2YhotEtnTJNS82B4xTpFaLRNgFa9nBQ6dLjPrkH2dYbG9W6fw9M7fDVyzrKnFjqB99Txb7whDQ3aPzhbK4u",
  "key1": "5ULRUsRQRi1y5dDkYpoza8YMgjKvEzebXDsSYWdvscXtJ5WGwP3yNNo6RxcbfuY6wpQrMwv3z5MRmiBi5ykWV4xk",
  "key2": "4t5j9PwYLvKqdHphHdTWRBuUTH2WcJ8CTEWN29RH9RgCfD6GEUbtheqTfeFzZRh2z1ms53KXWvxjLau8PfLbfCH7",
  "key3": "5vPMztpSeZ4GpurPpZbXUct65RJyLKD9UUL94DRrnbcYQEvmJivKkJvWfoLcvdiB1XdhpSjXAVse5rA6A1C4GB25",
  "key4": "2AiNpooEotBXuK3aW4ECYJGg9ajZw3ao8zPbgmoEfoREo6USx2GJSubRpySRZiV6aDb1uG4cs7BZQCbUWvf8VCqo",
  "key5": "4AToRSUSM82vYRHd1SDQr2RpWvUAzXDsg4ja7Stwjq12BwuFvQDy8qCA1YMk6eQWiKaf7yhYpuhjZ3q7JergWgMW",
  "key6": "22CPkcUmYnx5aYBksmNR7aJ3NUa57dCNdg4iwbDabQoThxGm5P2hJ6S3W4UBgVvHqrG8wHjBdSrhLquB9EhNug5p",
  "key7": "4TCAZoRifhTymV8N3kZLzVPodU2dwkMAAHpUhiB56KW4XMAo9PFdB7GTMkVsSUiSuPin5rj9cpiu9pCqtmHWtAgF",
  "key8": "644itPERmDzuyJu4viFb8b47KBFgoiEpQVhzS93St5aAw6Taqf9JmjrufBL2FS6A53UpQ2Ap6XrnCEmaRKEoBKJ7",
  "key9": "5hYFhZBnEFpBSsDDPEPQuieMCaGJMmTQKR3ieSdHjRJFH2G6wZqZRBsan9iaj4B93ayimxt2av4X59Dpsd46G4yA",
  "key10": "4tgb197d94k2ZJkzdiw2cU94eH3hWkYJrrSeqUPYzwuYC1DNcBNytd4qtuDEJtveo9NrdkHGQDsviMvHJDhUCbbH",
  "key11": "LysStttP8THkQYzzxfZgJPyDDVFfJNJVZgdeAhQhAowjwSdSwVbofSkDLWSmMWVjveoGLTZYbDsMsbmcNSemq7L",
  "key12": "499bPBqXAGEZRzsXBkh6nYejCSxsCCpyebiynPU3jCkmdo6HNkuVVrX2ZMUXJFHjhAnb4SfygYNtUeopPMc1SfV2",
  "key13": "oL6HVtpYBMX7wSgd7mUu5uZWYALSESvnmby4aCp4TTeZj4atm5wjWEfGeMFSS4y4AUroh2EfkgDMPAxPLbqCR43",
  "key14": "3D4DgKw32BLHFqrWsogDVHGHUCFAxgrmYyt5eVBAaD5jwwtbC5S6dqCiWMDf4Y7LS8vRCw37fyCBw6BspTwLvJXL",
  "key15": "5wNs8pgy8De96Ym1N2dqNGRRps4EGr8qBJvTYW2Vs7iagYUWKicv5TX4c4KuLktrGtvauykGHtEet8Q94reeGUSN",
  "key16": "4L6JTTcJdiuPUUZLMAa9qG4fsaUKHyLSkppQMGeZebcKHGWoLDNPz8JkTrFBLdGVcQv5AzupQ9mNpaxQegGaVvDW",
  "key17": "2STdzX75tEankn1iYJGyVWtzbRkhqpPjsprXwm5XXvAdQAMLz8Jzk9e2x7ZH8b3MuVDzEh8KE2YxQqpUdvd6Ba3K",
  "key18": "3uu6Pxr2ZWy5Pp9X2WeGXsGH2NaEHwYzbyJAr3Pd2hzyHVx1mT4BAbgwjaHTmA5YGD7sibprqpR5QNhWgLB7AXG4",
  "key19": "EDsuaZF4zUetrmXT48V76dBpYVqYzXw29h9sCACBzuLPQoAh48fUfXjN11FUoT6wpLaXpURsJUVRwg7SAkYoTm9",
  "key20": "LVMWoQPp8yPag68Y88mE2UtKy34UewrcaAQqWo7wCGTefhSAeic1v4Vg4DesitV85Zqez6ozLnR3gWdv7LMY7EJ",
  "key21": "3mwz4HoZvnUETb2V1PoxAWjnojakYELr1Svj6WTK6caYQyY9ZBWPC7uD26GZsTAjKXFEpoaTUPzRx81dbR9HjyCF",
  "key22": "AehyVzsMEPJD5BJPhcAS1d9bxt66NJ8kw3zcWnceyJ9PwLWBit44G9HfTBzaAobibaUEtU5CJTXXj2mFoe5hZcn",
  "key23": "5eFNwFqKwJCvAZERTVzFfw97YbWJs5byZ6qQW5Ytf46epP8wMcV46CZ8qFMpSvMKczbZvSpJ5G4FwsiCs44kneGS",
  "key24": "4HT4uTJwfFQ25pTH2uJM5JEY31ULr87TAp1WBD6MVBccxVETTTQ7gPNnRkKQjwrBQQKZchfYJELk7qWoR8sBerRE",
  "key25": "oY6TT7uTdebjoQ21E4ysqUbJ3Eh2JxxMnjDu7E2jy2Q9TaXHKVNqcCsB3XNfdpwsFVigzVTtSfJNUMEDgPyVpXo",
  "key26": "5ysvGPrmWrq2Z1i3xPq9DS1osqYhpbeFur16YTjRVdhkJXud7q5XtMviY3V1ivwqvTyJpiQHxRVN2m5ZZKWQSVs4",
  "key27": "29uuDKE2xN5BBj2c9RfXZTuirQinRojn6sdPg3vA8EeoiqrTE1dc28YSgndW3vk2kbtzCr7pEvdgq965Fr3fZ7tL",
  "key28": "4Z9jMbmeXEi9jkDe8EQf8PVRmusxG64Q85Z6GUQ5DVyufZyWJowpPJaY61auJbMkvg427TTipznURiELF2JfFtJX",
  "key29": "47HKr67tGECtaxShs76gNfHYPTBJG9N4D7nvkx154pFzqecdnGnbq5swyjPy6CL1XdZABNZ52TN5CixDYCqgeWYm",
  "key30": "38P7UxqC48HbLTFqmiwa3kfFxSuXDtduJBERmH9LHCm7QpZAuA37tY1SveR8NB8g2UzUeCGPGG4QogyVh3hjsdjJ",
  "key31": "5gHw9g8UeQogM8teuopkZcFseZqf9uVcjkbdtXe2WQaonCoBEL2Z4Gv3XGGqztxpgKUAnUU68MhdUcd5Wb3z2KWe",
  "key32": "4PkWrzM9SEjBc3fuBiTAkVJbqRFFcWPR34KmS3cgMxHHivJSbMS6ZdKroY8SJzKaqsx8hDrQvkcdZZ9DGFp3sKyS",
  "key33": "2JeyPZ6WWB5gu5PTvF5WUz462jZTCjuih9erkxhvgmCLWar5o3TDV7n9in3WZQmENjKoXPdNGefpoemFGo6hATqZ",
  "key34": "32zE7R3XiDJJSeGiDBGVznfbr32GW4uS35bvuFHNsUab3Ty2gMCUe6ibBT4mDvYx24DmSxjuj1JwKuqt7CNYgHJ3",
  "key35": "5W4jqwxeLA26npESH951DrAYT3T8sB2BFvcN38DXHMPXvf3oUxtUo5FejifbAmwKezDXHVk7VUanpEk2DjMfpTEp",
  "key36": "3ctxXFp4KRKjJnu1juuU828vckRxQFNVafSZAkwcZ4tzvtnViopAygNbE7xqStRXZEAzWDsUoWvTi4xjxaG4Qtgg",
  "key37": "2fFDqMm6eU2VDD1DdvnQgmDP6y4MGJdTjEt9vJJsfU86eRSVzMzKipa92DRvyAxnbcvC88komq4CiVDXzPXPmdLa",
  "key38": "2GWEuJvPL5buV2goRpjk8MJrsyhuL452HMiPcyj1Wfd8hCn24xYNAcu7pPdC5MiSbKJ4Wdn3TkhcCxUVycd5wjBD",
  "key39": "ZJNYp2vZNzf4RdurjS2zezzXkeNFoQYegMn9f11W7sqKqYJD7KujoVMNkrjf8BmeyHHuPjtKbNMsfW7ciG4rZpn",
  "key40": "5xZXATuZTLr9KPscRdCuy1ZFuA6f86Q9zmPNrCtvRhdQnSbXYxgMwGPUHmJcRmSuLuYgvG4keLKbyKnas3mJ84wY",
  "key41": "4kTFkCiiqFe2FamNbDj4mWTpZhu29PtqT2eHvwzauqoRdQb8rCTu7dRDzfudczNasgLTeAYzyppGpWcie3YiSkda",
  "key42": "4eriGFkfL6j8g7VjEJBybnZcjHTq6yFH2ijwqJt4VHuPdeXc9mSyMxq9etvynDU7Q1GdL3P3SqZmc73ZbeWayuHL",
  "key43": "fSEKVy4NYwQhVgPEcM3XKUh6G4kk5fEXUELuaBq9jWCLtYytwUVdsTNhsnVJUagiurmEjQr5ECpgkLUr5xSQd6E",
  "key44": "4h8iqyfYg7U5YcZQgx8pNANQpi1smCKomTCMMcmPAt6b2KH3GRytzaNo86Qc7Fo1KjtSfUhnAQR7BSB1drkCGuja",
  "key45": "9bCcygcZzwCXHKLaiA1toeWHJnctX8UHbdd3XK3oJeJAZ5v5pmB5GKqK59UvpeqekNoyJ5us5GQjfhMhtYUiiXh",
  "key46": "4rGCNGxUmkMZAdPQmHkdMVkm24kUJ7N6iVrtT7gGhio16AXspYNs5dApXP6bBFAYNuWPVax7syTFA9XAZpLNF9S"
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

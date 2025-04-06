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
    "48iJ1xZcJdANh22ujuy31gsdWvwkkGsBk148RsTYXVQf7C5dweX4YMSSA9YyrwW6izRZ2T6oioEPWDzDuDtMRNyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KZtEHJcTvY4s4ZgZQf9aGvT4bsZcCMcgWXaA2jtry7Dwq56tQbornVc7B8hkCR5VVXfCHcgYMMdBT17RdSoqHco",
  "key1": "5qvJG6MeADX5ZUhCgY9eVzUHmcNqsZrtUvT8D7BJooD9Q2RWF8GkoH8aMEkinRn6LKednjBadecD5NU3DTUStvJs",
  "key2": "CJw9U2tgWYJQsQnyJyuJCZnotqcsT3PHpYLe8iPR4T2cJzAbAFRTk1aSfNw3mmANM3o4YQsRs5NoxdQjeeNi11N",
  "key3": "41k73ytCEnXE1kdiw1jVVxEm3ZPEtKoSvoNEecY7krTZdX85XPNDUenYDUDc1pBBVLcz8pS9nyWYt3vWXFXEFVXR",
  "key4": "3XUej2xmk9rhhpHSyVshUbfoqDX51cxdciUsgVzQanav5dmDrEnKxjWNnQ4vhHupnU4bn83gwqkRP4tHEoyBLxLi",
  "key5": "3UJGmtGxWFB3ksM2JFYSoKZy3Se7s2Fix1BQ12t6yVSNW3gKAuGHYsNknp478TpqTx2VDm5A3gT7FH5GGEdkVZDk",
  "key6": "4se3NYgRy6JcUzVcvC3wuVsbQDJxwwSQHBo1LrKZ7ndZtyJFzMudvRRBXwjcHWqRu9XWUW814dZCGtax2K9mxeTm",
  "key7": "Ek7cCs8KuSW5QL7fgJm6fiaqmk9ja4izpHXfQoUk9obiuJyH4zFYGS6XwfhErG5Gca5gSTGf7JHMHRkU4es3cBC",
  "key8": "3Qhpt3UGqn39keZ9kqed7vzfB63QTTuBjejErwLMLfgGzbyxENYBz4prGFZU4ynkzS8y5PavSMahnkKgnZ8q4UwT",
  "key9": "2dUpUMkwGbKtK6Z1rbkCJqCrtbfPNyb1wusR2DB873tym8Ymk3WNZdM8LZZTcwNxxGP1SXe6MSgimTk8R4vY8Np",
  "key10": "2h5ijRWKDnm8dW1TMzmVUYcuJeMBCh4wNYvgNJQUBE46kyo34oMmKnfgG64j8kDyZksdvZdDiGQjfdMTCbqoDi4e",
  "key11": "65mQrTwPQ4ytwPbzwrYvLV24D4X14bV1AYVMmH5i6QihpvPYpvrxgz1jN3hzSkksHCzfQt554viB9MYXx2quVrVk",
  "key12": "5mAGTfoPiqsXwGvgBBvHNyQ78Yjx68kNyTYzSkCAGbr3GzVqC6jXRe82RSbnsGYr6tEqsUpkfU1sb4Un6QC84UHu",
  "key13": "5b1rk3jAJX8Zj52Uu4dQ8F2iiouzagHse1iQdGNAma9wfVHidSWsPwb3Wr2GBmnA3GK7aw346fGfHa7yUGspczFt",
  "key14": "2eBhRasVviNMonMCzKJrcsdcCggeZC1ih1CTPMWfm89pQXPeZcbVtwUX3QgqVxSRmVb3z2sah7F8ohiLXjSEp5nr",
  "key15": "2ARVHZFMyBqoZv8CtSMortZHNTKDPzDoGhwsEirZoHgCcwjJiaDwB5P95ooQneUvBmGbM2Wzr1qmxmx5hp5Ya7z2",
  "key16": "5UvdwxWW7dNzrm9Y36r7fK21VfZK4rxfWduVPB1DD3C8rfVKvfpm67GxjLJiBLsT4fZn4cAU7hLsuKH8qb5V68QY",
  "key17": "21wNZ5Mf2ytVyRtfJ76oiE4hLdqXH4qiaDfpN1qwP4r8TgAFv32qcsGRMkrGffbLXq4BRi5Zy11U4pHhkhVb4ADr",
  "key18": "5TZBp1tj9v9DPd4rXxurWE9iZQC4VwqsFY5bxspeNywhSh5wRUjAhCaByLbM1McepaqG2aSiA4agM21n8q8o4c74",
  "key19": "4GgQRhz9T6Ly8vZd52k8uYAPgM6t1xac7RP7bL6MbMcTXZ53mtyrAokN8Qtv99VHndpzB4pEGPLU4Txf5HCDmXR4",
  "key20": "2z8qz9hUeGaFirgUzHYegV1QDZbQuVAy5Pg42XMuCQa6QgzrE1NyzS8PnwWqPQ6HkDb1zT7m7SX94qmbjjuZmZ1i",
  "key21": "4kYZq3LxuH5J37Whej8pCiteK2vTwFep6eARH1xidTzHGbBC43UkZe2qGRaZPnf56QP8nBzoHqSVBC77H7WYgsLX",
  "key22": "27GQ1ESLNfYzs9RK34TVbqSsZeVr4YhuWY22TsD1CW4vXwVjaWf5c1pZdU1PSLs3Q3Wr2qn8GwdPLXy7a2YJmuqX",
  "key23": "2Vg9Dn8bvGWiRFtAqGi141LCkTdrqRtTWgQZg2EjE1S8Kx7aSFbL96Zu4aMRDkorQd8GCRmGj3eg5YaBv4rDYgii",
  "key24": "3Pnvi9a5tZsFfVCsZDnUQWfXhq2cwHFditBshbJkZmaTqeEhNP8r9HaBzAYuDWzbxGjp3bZsBBPQzXwDGSMRgZUA",
  "key25": "4ZUvBpPSCpGS94rv13mDGaRjwiXXqByQm33H5F2L8kzJu5Nsp8JeZxKf3NYA7cvdpikQNmyBEMeUG8raYb19bQAm",
  "key26": "2iBTr8QrDj8WMxN2F7ex9L2nW8MewoDxwSoZfgLTYpzezT6cvrBtKbLbpGDbc1cWoDwZQ6rSsypYcsC8LcMAuxhy",
  "key27": "2SU7mAMLXQmpex9J3YeWm7Zd9mNYcZMPpaiud169amiGpfeV8WsyBmjtkQGqhVYwxWvpQchZiEbAz32kJhNemyPb",
  "key28": "38vRhmNwxCfHckUm739rnS6fPD2dvyUpvFon1xajAF2zCtGEHHZhyjyByGyFu6KBshaRQS5hhoKRyiHMAF7q7HUr",
  "key29": "3azzh4q2hj3GW1vYPGywYT9pDwM8dFPY5xB3tdpwyoWYcfgVbkfwjYmPGFo4sjPZ1zoZsrJP9gMEBRjGGZ16KSSw",
  "key30": "2UxFyaefjSKHUjaqK4nXB16a8zcJk1bm5u6gerBLi1o7xNe1wh7C44zMeKu37SNvAKBBiN7xL798sDU2QKGH79Sb",
  "key31": "5tUJGKnK4MKTJZrhcACM5mdXSV912Su72mhodzzVJNfxodeqjx1fBqBho99hV2JQEBqCvprNGkHEiVpuRQfpMrqT",
  "key32": "5yKgJiTDcCC1bqZnpEmyCjeQ41M6cwBSdPUHj2zQ1he2P1gQGKsYNRZescHD4wQycEQrbq52CQNUpq8aRXMkk2yL",
  "key33": "wcS8MJFktaqe91egGD4SKUz6ziNAC9mEqpZrhgkvSgpHsN3DAqvumRTFG2JK9qNRo7RAg88WtryxwSXRF7JsXxE",
  "key34": "2uYhApfaLX8CKjCtbYgRiHSkvwLPV1AmW7D16x9tibMpN45kqxB9HXP1DHwtbjFUE4edkA6NRkeeEud2BpqpiTLg",
  "key35": "9ty5Fs3kR9zecGbCJBnf2kASQXCnme8LWVj13q4P7B11pFL7VDvGo3n8m1gg38kKV3ixPdRTnskL49PFShDMJUd",
  "key36": "5GiNSFZ58an3xvidFvAWrBXWKmJJkfwV7qWC24RW1uPqp9R9XTp6tg5f1JvEZoyisxZaiyw9a9ZJnABLxJVkC7Db",
  "key37": "gqmiW9xCZ6xTYZfrX68v6XCps6EoYLfCorQkSCzbGEEbHxQV5k8JZ5dbHqGBpKcVtKPHsKso16XDhgPrBT7NVSz",
  "key38": "2rZeE94Y6qtYw6gEZkvttK7LK1Y3DeuN624fg47YGAcpw4EfZoRxBt4Wd4fcqe1wAuA9umXsNMedSckTbAwWwGuF",
  "key39": "5J9mAwuGagEDKMRspAwnsPrj8BnEezxQG9dpM6iiaFkMpZtt82NkWnq7SUWvr8z6sBJQvoPUMqdxUn7zD2biYfRQ",
  "key40": "34XXi1R5zRBmFxuCsTnN5QrzqE2jrGYwQK4swfsGQn4eEq2mxfLnCR8M7uie89iJgtc4ezGMw625dtUbb4cSzHXV"
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

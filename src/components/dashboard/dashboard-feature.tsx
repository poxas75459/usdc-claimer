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
    "4qR9bG4CsDiUD7ANnz4u5nxtcpXANfLA65u5a8vmEmqFbv9RZP4c5mRqN5ZqBs11wBLy7rS2RQt3ezxdeNc2ZfFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwktqKBvoVtn1kegGJNR4Gk7P33eAne4sT7tT43Z2pobv32XM8zsQZH6vW9yFmCNoeL678k9A5o6uCjVEMeAt41",
  "key1": "4jr2wwNmEzwyP1epj8qXDZXTVc8nbYRYK1zcXnAayfHwyCPa7Tdj7yUkUDEUFT45jiKEzW1gFLPKMskbWSYex4b9",
  "key2": "39ynvUwuoTmDM5qmovr3rebHjPscV6HzZUDEDs5P67BDsUw4Mh9HXB1qJD1QETvgfe9AhqAYJZBdijZRPyxXFu7m",
  "key3": "48jZ8BWrSnFh8Lc1wy6Z143wrnwBFRUErYdC2CUakxgJ3UEXTVfC5DD8uUrnkc1kuxeXnYRzJ9SmmeLoViRvvBPT",
  "key4": "2sQVXgPDeVy2exAhH628FTeZCq7T2oBqqXZhaFMyug57Zs7PLbpnaLUz4baKeeabJndQQwqsCSTwrms8s7sgPfd8",
  "key5": "399GuuSvkXPpxeRwugAnuci6MALYmF5PXkdNAwRFkQahKaXXHHDU9icZtsSzYSqpVCEDC1xXauN2f7212sXkAcCu",
  "key6": "66pijdgJvAHfWzy9sNCUohsLXmGpwss3p3dNjDyN9Zt9ZM1WkWAqDPLHP8NF8b1Vrc2Lqch8w6XrBi3HRvtP2oG6",
  "key7": "cWRbNRRGhCa7cSieuHrfS257M7E8Y97akZbGoQHm67kiXRgCJLgX6cfvTfipVPd3hThExU5vRbaD2QaD77bDBSs",
  "key8": "4JM9KhdoqMaN5jEKwQhtTmDVkjdRZsvNoE3mqfYo69zsxMitgE8Fhr6dfc9CMnKcsUnDMW85JPndR6Tm3JbToP1E",
  "key9": "5XDVZEMz2LcUYnYCow7AwW3SCiTWaLSMFCw4EFJ1yYS44R1FTYzW7tHqedkxH6PppZPV8LnSrFNRqAgtAZgGSuuq",
  "key10": "4t9wBuEYXaNyAetw13kgDzjj543YyYa8wNf634fq4wb74yHoJk27VNt1dCXgyCUi2BxsdNWioQS8bEAbxRE7nuS6",
  "key11": "rFDk9NpRbHM5dXRwBSdHLpPiNpp5e76z5S9Mt486JkfWCaKiwCygC2uMW2c69Y7P9eWTsLxHGb43ZM2xnberCoH",
  "key12": "3WX3NHjN3F6zuBVCkZUf1pMg4wEBuApVEPUU5FeE7GDH9T3PewJJB5SesN6MFJ8AZeXvj3nYfMNobCNxJyVJLxBU",
  "key13": "Ech7XkWMEJ3KEXcsNocR7fQngViBksKnR813i9fKH8bYdrdkzYxTfLPMcohCTNT1FqdjTB6kepDzhdtZcBCgGmX",
  "key14": "4XTcH7DLeGKpnsi8HoTPAhuaiVcCsreGeuu9UZAgH2aFugr1DJFhY1gREESPThiqdZKVskY8bSamUXyoeJ3kkLhQ",
  "key15": "2rp8EmSZ4i7YvvZrycxMhX6Do2Utk2iUjRm1VpuM3XnE3Vf2bqogjhdVkcFhT1RQDtK6NEBf3uFRcdGkfdqnDhMk",
  "key16": "5DwVtPDX7ZVmULmnehHZLefoBioFdw56jrueGuEEcqqb2QxeZLBPxQBoNQvfa6XSENVWk761n2xvZ6CzE12M2NaG",
  "key17": "2ERURafGMCA3q8f4tJVGzwLAfmktbLajoQriCWNhrBYRPVppRx8cFpVdui5DRb7A7mxExkttSPVmhANyn3FXD84q",
  "key18": "3aUHeDRKHVUWQ5bRrGY6Bx5NNnknqsx3RGTitosVfqBVG88kTaT4BrAEu3xLcWJx4gPCj34YwnLTrFWPHd9Fjcyz",
  "key19": "zAWKYegURuEZbgG3pAxWWQEPyQCYJQk841JXQQWM1Lyb4cvbDpwPPyDHuYituGpEZyYXc2p2Qi2z82L2EEGmZHh",
  "key20": "2HwwBJYN2sY82AtwSZeGSAg9DUvwaLVn6Ugn6rakqj7asD6zQaG71eVkms6kvdt6FaHhVkzGcgpnbiFbP6qLBFPD",
  "key21": "tQJSnytk9A13fd8VAtoJpZmUM29zZPxZc5f4d8VisdNuYUYQcUpzxiFHLhs8Wu67hFrvhs4R2wX8WQwNBoWmAvz",
  "key22": "3hzoKYobsaU6mh2SQEPsWqHpD8VyXv8BpHMaKYedNwvvYbivv6WhWdpTFJoziDv6ofLLkTFBo2tGC6bsQ7XxCewo",
  "key23": "3pnjdTkfMBh8MQbrZgJqcroGXLhHQM9EKbfoaK78NpCVZ3jRpa5Jm6fZofEJW7c7DAJWYu13KKuoGJ4VZLN6RXy6",
  "key24": "2z7VmeJcrA9fuUZGWRj7Q7mrT86LqNn2342PJeaj71Wf1Pj5hHc3idGm7AS2CQataAmvokZo99swhqDJUS9Q5ZFa",
  "key25": "SwThoqBZYAiRgZ1fXpTeLDZjo6ckLP4Lnw9Cc3MPUAkQGBpvFtQvkiQVxYwBq1QMkhgGCPGEoUuhWJiqPHdCqoY",
  "key26": "5PTet8JPwmXZdJqs9g6HXR2Dub8BNHxuk9B8JyQLw2SuavKxvcMgK9jM3b31zbD8pzWgMdH1bbwzpk25hc9c586j",
  "key27": "2Hh8x6G3qGqHYYgmR5e47dhtdtnryi227fdiPCzH1CKz9ebW91EQRu52xGg1Y9JBKhHifCqs3JfinH4vRD7jNt8d",
  "key28": "betKbKrnyarac69nGnrzz9xn1G5jsAJJV9ank2GiUmzTVsAVaDCCQ8A43GmpDDsjHu6Xdv9r4ji7t1h7ZHWsi5A",
  "key29": "4anGuBueAPcSXzzzvLo8SjTgmDWH3JJ7KJkCXdamo6retS1QZjd3QvhnXRGL47g1ZsRJLgZ9nJJCfkqg7a62xD5p",
  "key30": "2zRadPzZf1BYva5HVcGGiCqqAS4u6FSD6RJR6kq5ETj2eJBrTd1RMyv8v5JNvBiDzquyejwuWB96xGq21fTAPiZh",
  "key31": "5QLaFZSaydiZJ4U7YKh2aCrd4eHpYjBpfMXtQuiSyVzHoUkwuXMF1dQ7fcSVfKKEGBBWVPS3NnGnjRuq2i3oXzk4",
  "key32": "4LWd1j1sEe5KBt7JfrLBpCQGqoBVqQVN5WkmpCXXUKpA2rNyK6HYJizTpjoeozAtZak3pWp8haEX1RzqEUsxRU1L",
  "key33": "2UsExvHrCmHshiKTZ4a5qwxAeJYco7oujQH4EGfqq6zGHh5CoFtzd5esk9cSrajGNYTETCXdQZhpNgoivMD9us5p",
  "key34": "5S8A1DTJBxbKr1kcGJ6UweWD3KE9VxeZ3LRxxwvRQoviQG1MTEGak4PT1DJgZ2sGEnxgcfFUKfA3gvxArc7YZdK",
  "key35": "aigNm2LZZZAzYqq8ghjawAZjGdwcRJGSx3vAKTtmmPKrJHFsmFeDMZRXqKf3s1wxxoN6KNcmNDorhd9NebbB8ej",
  "key36": "j4QkvBSqj4RcJkfMmXFu1paadquqN37REG8ZPoU8QoPQvAQAye7H4N2RgszM8azsxfNEVkWut4mqjxkzh858KTX",
  "key37": "2T4pUEXA7qQ1x4FC8uRZZZbUvZdpiHjsp54xXKetwWQthsFZgqSHnpmyB5zYMUpQKm6UiZY1oBYVu4c32ksuShFS",
  "key38": "3BueKCRfvwihTR5kwu3gqithDgJZ2AYpZGyfc6vejQZoozt4owywWXNkAyVGYfzHuRpH8MtabxQuDxnSVsjW71aR",
  "key39": "1NjPgdcqixigVEM6z6wtfrxUkWVGmfRZtuNsveb7LScW8MTfGDmm7j1r1AMCHHfLhYErZwqHvZcNqzPiRjwqVu7",
  "key40": "48GFE7wGwd1TdXB7RTVoJGTNUHUVQ7kJBQDnpaWacTPRhhafcz9DNjVbhJ6q2JG6UpJTemqXv1eDNeheznyScqmN",
  "key41": "5Rd7hyH4BCHaHgq5dCsQqy4w2tSR3xYwYtkj3NLDSfaNnJ3wKnboKQucS26dqTQE3Y34NgpQwgtAAv3o7RBbv8hq",
  "key42": "27keTqR7ESngVK2pnfSqvf7hT9moPCSek66SeioyjXrHq2UxHVRS6SYN3DomNVXLXUkgSH6TUmnHYxbQdAwr1rA2",
  "key43": "2XL3u2ZDAEC5Sv3fH3WvMsVeVuhw8by3AyELqbn8mqUsXFEudUv5YkeQUcpqYyfrBbb8xBCXJ8Tvf6CXV7xTVMjv",
  "key44": "2ZExGVBYUoTAsdHk7rNLcS7GiYmYoE5ktwpPEXGsAUArcVa65bmrENcBSAGX539FRELfiRJzAevaNrDak896X5Ew",
  "key45": "2TnAb9K5AuvdmgeqBpkdCXkZ4sEtDXcQqj3F2hZbj3mci2u5qmQh8Agtk37dg8iCb61jFQXjam3LbXecdfhdQR5K",
  "key46": "24ahzrzN3KwgDB1MQx7tNBCeBWtgGNgPa1JsNEGZu3foYfb4pgCLScim7QJRH3nTcQK5XjhxCnxUi9Ncgh1ZL3XL"
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

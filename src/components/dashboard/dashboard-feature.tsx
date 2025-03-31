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
    "4652hnAScDDnt3dcfcz53Ba2Bmm6m2KvXrQGCg9bqrFn52uAQFGVsrZYDmJMZj55xXxKFuBDPCYnsUk9KP8qghxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63E88Vvm5Qa415W8EtH3bs98xPaLipRiPd6wwd1z3xFt1WLf7d8shBqNpRk6CY5qucBdBtVk3dXJhwxsQmbtZxQL",
  "key1": "qfphy8kQSUfi433khzrAdMYukwh8E7fhsqps7FqSdA9AuVvRsiLT5SwaJ11kHXRmQE1LZGMT6TbBakHSa3WHcs9",
  "key2": "3aKuqsnwmn6wXXmz5TixE86gGFDAB4DN6iyxdpr2eidryJVS7art1cdLBL3K5BLoZSP7F76eo8eikmKTjbARpgyQ",
  "key3": "5DCDB6BTPVxS4DwaRLDUcdZZvDxxcP1Zrwf3JdbFxzLjVjK5Gqn2JaPgZPKkFEnrhykowyPXRZ55xTvyvJHFSTm8",
  "key4": "45HmDge8Sh7LtY3t8Hy3zHwogJHmrQpEQAuSMimXkAh2DAjHMYuKCAhY2cEY5n2RzVY6mbtx5dAF67G38YvML5Es",
  "key5": "5AHGqBgJ44jRnfJV8raHewXbZFukzjhbk3rVSrCgikgATCwMbLFuNYhQbsYrkfHS2FmJTY8busADqLSKBxBhMkZP",
  "key6": "3LeGA1PofB1QEVjacwfReQKSkHg4rvzeQEd3gVGEcd9JsiYRbhqQAzpiNBNA5ARmHgEDA9yFbeab9ULpcdBEF1QX",
  "key7": "3Zn3abZG89xbH2ruxwNGF9P9R9Au3MvGDHjhdtkrX1kbzYBC5Uu37FhsZWS5p1bwybGqJoxjnqW91eXDRi24G877",
  "key8": "2JsP7ncvwj4MSLEXNi4qXRY2uRiQ4zXXgM2jsXbR1zzWpRLkwkWaoR86ytS65RF329sGsreMFhG6sT25Xdg8SRWB",
  "key9": "27U4G6TEY6rj4XM2oFsi2J4pEqtsiC5FQucQvH5MFpe7w3hSCaD8nuvZEG7bv1r7ye2649eJwTQa9TxShYAa1TJR",
  "key10": "5cAdDbEJpenJdDhGWubxG9dgw4ivT4cD9XFXQJSQevHkBhGJ4SPYf7MroZ35kdavo4tq9TEMncX7pCZvZgFBZvZo",
  "key11": "4ygfEK96J32jGf367nV59CoXyznUFrCTqELv7VNz2VMFp6ZUEQgKqcsLfJpdrxUiqf1ze8EjMyExzpf1MCDSLYQA",
  "key12": "5X3bhXPqLgKKfr5sjKx23WRZnup263oqfScXRteEVfJcf3xa5YbHQNNSvH6xxjwgRUtsoz1A6tm9M4L9Xeazrn9Z",
  "key13": "48dLdPEvhEJgVR4Q1bn9jC43vdUNpScJvytkdTbofw8ueL194PhyWVpa1ha4saTKXEy6UHai4Res9c7saXQFEM4z",
  "key14": "3tmmQJUzP5S85bEqmPVkSgT5zXEqcuPGeNKDi5k5dbDTqwPfGWCTZCJgWoYaNHSgTGp5YGS4J74i9m86qPe7inCK",
  "key15": "2V667bfBZki2gZS4pffNyyHsPPFDKXLk7rGSAZstWvMgcAjrwxUdeYyaowi6TFSYcX9qPTNEbX3YWA6WqHLX2Xw3",
  "key16": "chqDcTTY6XrghwE6NQea6LySZto4yCgh9GiT12aMKC2JVMVa5sXjKrbVKUTYiBoWjyG5zBT1Jof8MgGG2iuQ1rL",
  "key17": "7Na3YBbbBv458zZZ9PejB53gAfGfZWh6mXVP8bevw1BG5zbor2khAwCKPLEayACKTiVwWhLipHDZbTMBifCvP6n",
  "key18": "XsFzRTLZiXSLdY5aM9QbnHZBkiwoNzk1hFJCJDn4ptkJcaJsxzdRHYrkvbfQfF7as6qt3WfGxRgsW2JL4jqW9Nr",
  "key19": "HsVHa71MHC1cCNsVdEo9JC1ipAA6FZD5ZeKzZGie1YxiUKSPvrdbGP1nGxbQLWCVJ89fLDLtGCM7YYGhh3xPcUE",
  "key20": "5MULxRmT1XPpYhGnKGrgzZKU3zumdYEWgbkVMcw9hpsLrq1CkjivJ8rkoqoYU8GcqzyWN172maQZQ5S717G6WqLp",
  "key21": "5ZurpJRBYdFfBgGUL1c68ZkEeLdRvzj3YDegLjwsehrUsTTS74n5xijCta4LqhzryUEycb77rSSzm1SyrnHjR25A",
  "key22": "4QoEHKdDfZF69hVcth29vhLG8kYTYnbEYG6q3DHK9u6PxePenyA1Ehc4hqGWmDDw2T4uPGD1H7WvVqps7xWsxKr8",
  "key23": "3vGNPxcfKK8S6cQUvR36MSRsJHXM8FMWLDAYxSCVcJd7Xb2wEPvnxw7zUM1dD5hRbvKkdPLJ4KPKNP66vTmoiybw",
  "key24": "51ZmXNd3T9YJxyE7xQw61qMAJ6epSAXz3sYLf5w7Lqipt7wsPfT3avhzspJjoFcSZ4ktrJjfRphR2Jxw657E18R4",
  "key25": "5mTezLrrdx4d5PLuEwWbcdmo9x2pw6Q8pYMkgZJnPRCTF8FJ6hJNfxHYaHiq2CoCiMa8fWD1w5CY5bh6w971CAqC",
  "key26": "57wQbH2qCjcYCYcFeNGjfPzPHjFaTZ2X9za88mjXKdeNrTr7YnfYbZbbGsqeYs8hfjBRfezGvgvszmgeS8WSbbtz",
  "key27": "2XZjEweKh7D8kj1aR2RN3pGytH5M1zwNGR255zBoGxfC98ehYaamXhi5KBYsRto8LhnsqXtfJaBgsuVqKy8vbrkh",
  "key28": "48sAh6hLe75AWBArosezccxaFfMm4NUwaT1ZAMde9DwDJfH3UCzdYYHBMQH6As555RGHcFEgN3xPBRR8X41RsT5C",
  "key29": "zx4oTkSfKYqWQgMe8mRWf6TmY8cm56voHTZbxr1PqHfrF8mynJwj1F4Qsonz6pMvodSJPPe5VQJYkmfpiZvPnY2",
  "key30": "4j7QY9SeUbK47uGgAWpL2uBE4bqwu4tsV6BXDY3ftRderbSdi24LV1R3Nss7dg3aHgw6mCQmhK7DLFdHn5VkJDPn",
  "key31": "2r1XA6LaHzKqwYnX5Eh6Nc8fdxFL6tf6btKBz9yT2RAHbB6fYYwQQ8frSsmdYVc6xNEAqHsSZoiqT2bBUawsPxPo",
  "key32": "2mZxMbL7x2M7XYkVyGEC6H9GzqtgGSWV9VqYCwZpVXmh4R9DLNoDFpbWZZpePQsbbfRBbYVUW2W1od5UFTC2NqEY",
  "key33": "5FpYZFPpmu5UcVeNiWTpPHHUHxAV1VT3tTHyTJZ1XwjGgN5mgV9VRCo3Pq2vumrX32tNP5QSSDbZ8ZrBDS24wrng",
  "key34": "GszCMfwtSA8WgtUQhuxDctCnZFZd8UoReHuDd44N6mFy98TJevBpXzufvBks9mwQxe3hu3TQn96qycTAqV7aep4",
  "key35": "3aCL1FvEckDyaGimZ1Yr2CqVkASWXbncEyYV4oKhmZm1LxjJvwkPw8F5CRLtmLFVaRqoxQv7G3JbGhJkFkeYMr9P"
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

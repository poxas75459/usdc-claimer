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
    "3JYbewEyhs3gYf79bx9GGS24MRD49kKiAHooPTMXAa9ZzF9PvqZyqXeuJ3DKDj3nwNitQq6RgANV91P6mEwN6VHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDRh64hqeTpMJeKiw3JKBKBM5QNSjQMTPRWHhfzBoTcKdizqQUCG32P3jfjcWj6JqcY5Fz7ieAS9YaxDZ88QSM3",
  "key1": "3mB9V5yJebKHeRt58ameJ8UbCAy7ZWhCmKYsF1i4TRi5YvU1reXJ2Wb3gcEWYvXyQcx4zQzdAZq5vRoYGrm7T5af",
  "key2": "s8VqXj2bYG4H7nWXFoyQ45sVKeuEuDSu2wp181TLXpU9DLMLZi4o3qKbH5aovg3yaps3LyQbgAK4WgtA8hRYV1M",
  "key3": "4iL3PgY9bvesuqLxwQn9uNGQEwysxjWna63DyhgNpiABZphWZjx71Q65UgE2GyHUHBkbhM7XijfPnRS3hdebthJf",
  "key4": "aXV9hGAX3XAfWQ7cscRNvfQBWB6u38kTFJANEWtdeaN8zFmLZGvSfRdc56HquH3HGhbzMvR9i4oXyroMVJJr6Ym",
  "key5": "4jGAwCrcSSrRpd7ukoz38mxZWGWHLbwtxyaCTAwUs7D26iW39wNsxckDKAHgmw8Pf1Tpgk8JaW8mp7GL1eX9V3GL",
  "key6": "cdixEbxMUFcg5aJN34ee43Tra6bKuZvRz7sUh4CSqAs4ufMwqov5vebtodW5M6SZkbKF18R2FUgchaSkmSs6BWF",
  "key7": "55erKGSywVTgEwiGjCykjqbXCCKxnWji6eymJVbYsvkMt28ZuwsXLg7EqYRqhLFRdXW7STh7t6tZskMeurgmVyyF",
  "key8": "3kaJYgme96eLQHyQxWkpfMaQmdDgoLGxuXvkhxoG3xJPEnXL9NwJHnfMKTQm6Fihqcr2GS6HSWcVbpd8L9RDK8xK",
  "key9": "3zYgAwmRQNYNWmDPENc1RNByCRrbY53CdY5YQVjF9azSs8rbU3ZjpTtKYE1d2ty9LGvbD9CFP2VS8HHMNUAeUdhX",
  "key10": "NH3NkmqBaqM7ijpCbKgE6ib6ZXkaWmW3Vk91VdZBxUCUJTfyVRFm3mPP1c5txbgnsNpvFbkkXqmJAnKBJJoxhrj",
  "key11": "4D6zZVtAGj2Zu53VssLRwVpmdTiUPJy8zQgJLBjPwmRQUNugt3zymboD4wHNcRBXGhwU4S4as2MmkG1WRiVMZNsC",
  "key12": "26mEEAqSCrgdWXMk8NranujQjgjBG91JXzU3kCCZ1mXwW3sqbe53Lv5VUGt4hSmW2Qo91m6kE91NrGs3dQjPR7YB",
  "key13": "oaH4NnkDc1LEDjj4nmxphtNC6RNg491kxv9KytAvrgRrc4Bx5P6RopsmhVA5KGF2VX3QeJjnmKUtzj6WXr7qviq",
  "key14": "4k5dp4Dtq4SeDHkFALNmo3NgdNU1k41vvh1NVC6rBG8pXxT9EX1vwEv9hz6fVmMJQ4JVMRQWZbPYjyKDCTAW9Nhp",
  "key15": "5AsdE7yh3ofAYG9fz4zKPzoaCjgz9P2CKnMg7onUqmPd7aNfYUV8NkifGQAH2XqboK6rt2UuBA6DqtYz2VXSrKyW",
  "key16": "nA9X5X7JGzddEW4LpeG5NG4ttqzmHTnv9JLKpTarTU2spv72vKNX3QhihDpmAWhWZfBoKNF5b3F7UDPJDKDsRMY",
  "key17": "4Ltq5SEERquPY5LFT88HzuFouX4ui4kDQadc4BfmmiwiUykDCmCkEaFEvS7MpDFDRQ1nkau6xuWAeBqqrX4GSsAa",
  "key18": "1FCyhYmzmndbbZUtV75bzSNpzT6nCW7eVkLk7oyTkcJKMXXPoXtESJxK2hYR9dzRPZgwrzkTbMqGZGC3BTVgUfr",
  "key19": "5tNo5haWkN1bL7jcM66v2dttPUU88S4WNBntUHGeY7FVz9MviQzGvcUbUXBV1U92Z9Df9y1YYXP6xXprbhK4Zd7U",
  "key20": "2JZsYJJ623EWoft1ooknALzbkcLYh7viHgxQ3i5hu7GtwDVEuGG242Hds5zqVyHR2ka4drC2Y8xcqPZSE8Hiw6cj",
  "key21": "53Mi9XBTsdKZ4FRw7Z6tjumMm79b16Etc84kNu1WPvHmEeiDsYkSehQCdYnR1ctT8ja187HmBJ9xMRc3DqvzQt16",
  "key22": "5G3n6jQxoBYtQbks5HrY6S25KHf1ViXzTr2LCU6Xkmv7i3gr7VD7vAzxzQpW1kWvpeh4fu6cu7Q1rqCo4HJES1mx",
  "key23": "5nadEK79n9mXPeGQDo7F1X2tfyUkkqh1NpVQN3m7dB1ZDGTLxHQvYcT9XawowXhBnbPXQkUH7GnGcDD9etrGFCbt",
  "key24": "5oaEF4WPDkWKzhrmZFaZS5cEneZfwueb142ajWsSAjcA84f7jakHZiHH9XTj3rPzpVVYC4VT1RMp5Rn8hXgU8v1d",
  "key25": "5L4Cad9mUAaiCNFq23bbAvbBx7RzhARR3URsba54SLt9Zmu89v6yvHE4HWa6CDxwm1NU13F2ahBGkeGZavbXAdbu",
  "key26": "3DnTXVhyxrVDvEAXVe7N9d4QpKAkGiFzb9dtzpcCvPkXPJ32wp2HCk1rhXBor7LV5vHzbA2Wfz3L6yaB4pJu8sxE",
  "key27": "2VKs6LaTSsV1ubhcVxfGzE5rg6D6d6U1mPFYr4eUV5i1NRZoGQAHupjmTAT5nadguLVhtnXpzr7xbDbYYpbvcqPg",
  "key28": "5TFdn8mVsTzK3gL3PouFnTdAMfcWbeFSA5acHnE3f74JbzaieKqTVcQx6Cs9YpfaEeMe9HteoSiUoFYF2P11MdnF",
  "key29": "3sgGNgoASKGwNdjjSnCxdHtKmPkSwdiGGUGiLoRd2QZaPYUAzAyYdkp5AEopf34ZVFNbg8zXkDKLZxq3BaJs5M8j",
  "key30": "Bn4CsvucXocR8RxMUVvk7J6Fg4Vy4aTNLfWuiBrDbvCL7sc7ZEvhQh1X47txpM8ohYSX7Ah7ts1LMr58ySFTECd",
  "key31": "5nof19ymA2kEaZ48bHe6rSBnvrKJfwPFZUTrqynivyj55sn8PXbV9LTeZR9fCsNQwhCMNgohbon25fgXGgiX8yKd",
  "key32": "3ZbvDZPj3TnyvoeRYCufSu9kEfCZx7MbdYbJAbsJ13ABJUSbPyFaLr6zxBefTXcqHM6bUTsPHVG9JnePQ7uchPkB",
  "key33": "4pYcN35d9iwmrKvycnQji44eCqK6bdoLRStVoJ9TqS3WqxuF289WcWtCV1i9g3CasM9G45PyptF9bVskwfeno22y",
  "key34": "4uWwkTKs26XbiLiEX44tgvjcKWiSH2C3cm7PpjZNJdcqL4MvWaKB55aLqrSk7XJYAAVoXNLwcPhNrQpu9cTbmjDW",
  "key35": "5c76iMuDJuE8fmczvcHYEUQ4pAsc7dTorjLDDNQdvXp7AoCmkexQuKLR73ukj7itmuRu6C6tuYSbyveQRaLUPoK4",
  "key36": "2vtwc6wyUQivQeLVKxtdQZe9ZpcBph2M91htEua2QiFgLV28hhsACayze2PcJVKkZCb1AdExByqX3JxUGwcGJsDP",
  "key37": "5pkr2zL1DiVeFTpWJc93PJea7zAkFqBDVc2kL5iYimGKfLf78dowDT23Q1mmm6cWRW9ZpdFa46CZoCrLpk2HxjLq",
  "key38": "39Vy1xBJ7nCfqT9ooKc3kTnirq9s7Unmc2rMWxFcngR5fbtAhYK2RskZHCLKkjRhBQMpkYFZBTYKkfo5sKd53mmM",
  "key39": "xoQYV8LBXPZZknpomNbQ64kqsYdZvFipx6vVoxbvzFPFpjop7eeNpweS7xcGTVPHy9mymHA37qQRZ7wQCQ9yAui",
  "key40": "39c5KgvuNEcsHy3NeFBMF1Vhstwg86o2Xhe4JDaCtVy3ri9S9x2PEEr7CRcrw8Hs2AdgX1X51tERFkHS5ZwPr1rL",
  "key41": "2RZU2dwfyZqZEPymRoyaTtipGeQTidG57evsj5ddYgK75XaaXvLoaqgdRVNiNXf1ew2oHeDph2aDeKjDDDsH9Ujf",
  "key42": "3sLtesSzye4WWohpp9V4yC9Wv9P6gHmP6uQhwwuvktWxnPhea6YEpGd2kwjZKw7THi1NDUvi3qMaboQy2dWLBKam",
  "key43": "5uu272V1eYgxSF8GUhkYFBBrjNkPrfVGuPkRxGLCYBE1eVm7qx34279ujrJeeHMKUSjo2bZHQpTfLFyxZGL63FEG",
  "key44": "2UCR939SQccf6mDazTdWzcWyosHssmby8PAw9Caue1YsE76PMmaSH5jEe7xfDyjUCXyiPxKg9qCa2eRibugMDd2E",
  "key45": "58m4HsjoRRu7ENrycuocEd9Vf42Ne2SzEXpSnhzAzo1rJTDQHE8ULNgx15mL6GMpexYmrn2ZhzKn31d6Rc8yc9VZ",
  "key46": "2Fo4EdReoMkLpzLyvAtncuTzw3y7j3SawbZrX5VbWFsUzFvgMZBchTKosS3XyVHf8t1px8rYEThGkw8Qu27Cbkp9",
  "key47": "52VauPifiRf6KAhZNjktzujAxyHeApHG3ega2K9BhSiiQwtEff18P1hKjLgcGGK9RukHyLgJ924fF11d2uBDe7YP",
  "key48": "yY5LCHtogdk2XiQJsWQ8m8qNLa4XUNSUGseA9ffgku7gg5jJeh6LP2sRC8J1ifaVqFQrYQ4mGvzC9TmndinVSe8",
  "key49": "3NcdzxqghZGdNFPQhXbF1FGV8arvUqFGThmFSz2YRfJ8XXz7ULTJjPTLsHJiSaWfZWer8YQqqbHzcpJpmqayEuXX"
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

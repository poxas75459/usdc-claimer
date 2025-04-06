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
    "5TFBPK9c9RjwU7hjbur7yipg8s6GqZonkD93KoWj9HQk5cc3f9DyhfLdfbv9etzebtXgN9GiT9EQt9Cf1DCmJV7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63SVfarnRFv69E9yFmpMziQ4K2ZqWaDAaXoB9in6BDTDr3eVueWpoKi1ave3QugpZFfL2YzZn86VBFXMNSghVSgW",
  "key1": "4JLWoRoA9MnACQaxnJTwXeaostgds9bSndwQPQ35jFZ1TLGFhUDMQDDxbYUdaN4nPt2v1hKrLfRLFEWGwQ4Egp6U",
  "key2": "3rjfr1bDgvi9tj2yBMnZfwh9ZMywdpMnEmY8JgYbet363j7J9jaLwoW6LVJsGjCNLvqguxE4UUBh2s1pF4Uy2uuQ",
  "key3": "9Kih6LiW7nrxMxq8bbYcjGSvesFw6s2TQk9hNPr9mBrnqpWanYF4Yu2B1Gr9MvYSmeX19kjK6urqnDT8pzB4VEF",
  "key4": "3RN6tWyt32bhZKEoBe8R35S65LdTYLAU6fz3YHH6r7nXqGNfQP3Tn8vwGrCTW3gsdDaTMGXurCs6QrQsy5aoy6Px",
  "key5": "3nvZaJjT9DM77ikK4zjF3R6ewvz5CdtnsGrgTdtYZqd4vqkPgWLDXL6QRFTtUvFSiaRSKj4HutipbTkWZgcSyqia",
  "key6": "3tizNEaXEQqt8Yu3ZV95z1fNrhHdn2LqAF4t3kKMmHd9LAxL2XqFJe2ipdxbxpyDkPa9EGcFAerYYm3puysndDij",
  "key7": "46wPRHyEH6FqbjimrfJMoTjcL21zHXn3V5MZAjnxHQ4Fcnqm5sNo36yxhAVk3SAThB4gk7QLAH3pJWBBWH33EK5Q",
  "key8": "4qfM6uqk8PsE88TKLQv35vGaQj8F4X9tmSej14Q1BMzZb4UhMSzLBRdRoEkydWvgfsxFj47ToLXs7oHK5VBtP7TE",
  "key9": "4tf5nB6i49FvPimz9hsju8Ck5F1VucRyED6ZyVdh3xwrgw1cSA6N27FpKjbYpqHQo41y8whSJhmYdcexEGRAj4Bm",
  "key10": "2iDibDR5vXqzAvTY4VyBKLU6RohAdjyQm4L96qTnrGy2TjX6fYgtGhyy6dNBom1zaQzd6UADV5AWrxTnfLZGQTNA",
  "key11": "yabioDBo7MjriP2SbTNS7tS7HRzxkdFsXLYQqk4GqcodLZg4Y8FEwYDLKcmAP3NgtDbf8W18fd3McU82jnn61Vy",
  "key12": "5YFeDo7gkw5J4SoYUD6xWSjqxSfSqDSkAWUKS8jjRyi9jy1YStnKbGzZ8v1UqiRM7Uik5kxuDdbdS6dcgJXMb16a",
  "key13": "2x1uNEnmd3sJ2Cs84yMiUq76B7LmPpYwMW58TkwM4are2Xvw1tYMp4vjA19LrFbXYt7ubi9PsG4eH1WM8suCqh4d",
  "key14": "3if3Tdw4NhEuFth9JVVCpPQ5nHg5dNJZ7ikmQkdbNa3SSzr2dygQFxL53iWFWUSTy5u5eVnAEaoryzzfbrm9Z3b7",
  "key15": "35X2e8gUVePVYL9BqmQoxQDc7qoKK6sEuKXberR6LFQbC9H5qDAK4jRfwHb8gG2Z2roDMYtTdQGAdisC5azhV7C6",
  "key16": "2K5C3y8aDhLvY2wsragEwFF5amD6jyXFWhXXf8JobfuaCoWUXY1X1XTWvTt8i8bebuit9rmeKgjXHZcQJTqEbyw2",
  "key17": "qNkUE5U4fQWa9VjfZo3x2aWqYErN53bijzQeNA4BGJf4rsDhPje6KL9xjM11JgnC6QYo4aQ4nL4NP7BabMyvPmo",
  "key18": "2YWtVUmWev8w4tYCANW81kuuzQ6jWMUynwMTmSKuG2xmKGmqVLiRqPPCz7BoTHSEs9yRgNMekwkvqcTATj5jwSAT",
  "key19": "t4Db8cyTSxVwKtEmsPuaoeRcE7s2rSizxVD7d8wrd76M6LF73QSEwDzfELXk1M5Y1t5szA75pFtaKjVkTZY2frg",
  "key20": "2S467NxoXRFo5WKWR1XVgEGQyzcVUqWbGuHvLb4gJPh6UnDYBKN5vTvtsF6FiA2mHmWuYt9cNh6Wqx5Qg31Y6pH5",
  "key21": "3MVKhEXzumdhh3hh3XWmyNMYj2dcsnsBTMG3MqbXzo5eeh23ikb8pMYt9yhZQA2SDu8ckr8N2QxvCQk91JpS5FBx",
  "key22": "3t8Aek9WHzVoXBLNuTyEMYiYyqGtttj2ysrDFposCVuiJKCGTk5bbrwZGzwJDZJSkByJ7QpQuZjiiBeMWmUjbWLh",
  "key23": "3uhZ5kxc18YpeqZXviTtVyd4ucKQ4hTqa7Ycnaezb9o2tLFYFCF6rx7qnC7VMp4QhULwe24t5inG5MhjJnB5TWV6",
  "key24": "55KKUEC8q6QSevFYvG83VYpDyTCAc24dHDxwVEEAJD3g1ZjtgtkjbBunaj2qcrrYsUdaVQXYMuzK1aNaih3yaRgu",
  "key25": "25ShBRUpjUgD4uzXTYeNeF7Do4QKvPq3nWYF9Jf6jS1Lu6NibaqZwP2ti8PkAi4q7asNT9HTS52SSbiCZGFVRsoc",
  "key26": "5gLiVJg98SSFvM939kmKZL56ap6ojjKytWrDjEPKxCTo736czJEURBSdLn6xxhJuLna9mWdjfRY4WCbtP11rBmM",
  "key27": "2NiRLo4e9nYUk3ketmzRpNXW1xXxqiEsWAUMR4BATawDVR1CXuEPy65ZsZLQjbCYeVphyYYXZrCXKtmX8cK4PzgX",
  "key28": "36aSZegJdYV5vTHbaeJAQRKrKmzJAVjseyWCP5o9DW5oBT7WK2yWre2rXKUfjPfKJfDAs8p2qQuTDtQBiBDdDZ7t",
  "key29": "4LMH1PDdDcoWJVFXmcgLEJieVxuQRAsqYtkbsmTExMPPStcs2ygqwpnqzyvGvezhCtrU59yvjLfxc5rnCq45AY5A",
  "key30": "4H9sJSHesbhReu7U8dsiVhRfJwom566uNoDDfx6Us65gnfXfs55NumQ2f5YN6zSTQxrMnmDuaBrUPouuqz6zLDtN",
  "key31": "64RXUu6vE1qgAbW9Nb4yJoP1JYHxSGQ1dhH6chsZtxgN2EAoomftftGYBu8mb9juuU54VbBSGnVwu1Ut4mQ6t4UG",
  "key32": "36mYr16eCx6uhGPTA2nt2349v5mz6NyG9Bv98xSYSPWg5GLeoHCUZcpyrHR7iy9kVyoCXw8S8SsvNkz2v8nUQmhN",
  "key33": "4nBY2HvGXqRDvEwJzZEpy8mzxSktx2ahQNEfsaQvFLimqMjgwQgm4UTh7TousqxsWXchutpVq6MsRtsYNmSaQjLr",
  "key34": "3MbhycHXE8iyt7UABSebXqTzC7rbxDkDMLdMQc136NAVb9miaktme8gXV6Ct1WDSmeatvjeaLnb5QiL8uzTiPzUy",
  "key35": "42Wo3C9fs8AVkNqv9RBGp6AWWWmHsXvs4QQJJZzqRRmnSU4Zw9By5KTmj7mttRZBRLySSdNV43VECp49ZLe6oiNA",
  "key36": "23CXQZDHfEiCS1d5Lwm6bTxE2j8rHuSyf5pepsN6TnnnXdgospNNZLg2gzQFMNPoyQJkpxBdnv6sqTfaoSKkc3AU",
  "key37": "3UToJ6ibDNYpfX9n3VZVjAPNmiASsFXNBnya9vVUovSYVnzXzSoqkUATFWVcEVCaj6idRPPCMueKCjwuKiJ5uLR8",
  "key38": "3E9msEWVwYQ5GRnhfUHrf7a1huviemRP7KesrYWpjY5YsgQFLA5YU8T7BMuHPRsPZJupnRPHyGSVJrhXGwrzkLsm",
  "key39": "4d6amK3SshBrzubD8LWqTYy9PyXs4y5exPgDF4qabmT3XVbdMU8HAReb51NfaTvXfuiwHhBHgTcqv7ozXNhzZt5N",
  "key40": "3gZ2yR4AEGf6EPX59EuqXXqiEW6YtxmAxqwWwpqxcmhG9kRY2A1PUP5x5qRjqcZ7esDr2ooP6WTz2W4zBydqTmbe",
  "key41": "3Gv3d28hT6kB28pAcpfvgSqvJNqZSv7VtKmxFjXrCqadY7sc2GcLspYeNfJBRiTiJAqD6eazZHJiiS9Wni8Dopwi",
  "key42": "5MB5Z1ysgpEmBYFntXZYf71xk5V76WvZyUr44QnuEp6UdPrrseMB3jHLYCYt3rMVS8EWAn62NK5zpNJ8J1tsXuu3",
  "key43": "5h84W6pW6L6ZNHzoL7eaAhTwyzoyb2LksTbX2L9Kw1JaPmtJbiXQ3TZoQQxjY1AJ743SnoCH9QpjDx2ueDGAyaFV",
  "key44": "65JVSYjWzLmxAqeWfUnWpJhEovVNQKXqw1iD9drgsJjRmU4EpQ9stqgWZRs53RJqzMJsRMWbgXXhs6djgqMavg5t"
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

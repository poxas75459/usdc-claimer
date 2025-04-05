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
    "XexWcvUZ5GfQKjZpxbGxS8DukoA1gSAsg6nHjHXZ7fAFEcjz4W5j8b6hdj9ysyJpaXRZumdxjMBc5y2sV5bj3hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XeDxpbCeKEZFQkJRT3kFn498qjHhJfm3mnByAVio1Wy3nJdhAFupBbbjQisGNeh915EXH2NCZMj98ZULUmZVVaq",
  "key1": "3XkQhVw8dXCdrguCpMsumPmFvrU8zN1xWyEq1gmGwLk8EvW9uFTJ4PUzjKjvsiZwG3htveormFtka6ZRximAx8JC",
  "key2": "3bacxng4XCpXX9aW7VnVhn4SD1hSZJmB7hVcjqa9FZD7sqvr7GnKxcBjNX2CEf3cZ9JUZPsj1cPsFL8TP297Vt9U",
  "key3": "fLGUiLLTMt6ZMEG8rjYBFkNvEhhFxUE4HMuFoLpbFfCQJqs1y1q6Y5owsk61UHA1Lq6d7jCvcEjfFqFAwomX347",
  "key4": "2y7YMGXkLSVSqds2LTmh498BuaxFa16GGmq5sYMhoYprQuDp3GUGHdpp5wW7rsyZjTn4DunnbHgP2rrfhLdkehea",
  "key5": "29VZrLnsyfv3mMdWL65JBwyszLz77hh1L6Yvb2H5GSR8dpDzH2SKHQhAFrVb41hS3LTzu5TYN1N9FmRuA1CKVnFU",
  "key6": "4dj978MMo3JDcTuVQwTavJEBNFEeTvE2WHWuZggqT8SD77da3MxBzx8tfurwfpHF6kzFnnRRJVTs5b2cuah7Vrqj",
  "key7": "4CyPKU8LRZZkiLWsXqnJfTd66GgtsopKmxZDryAgWd4tkHnPWhteXyDFfENpFFRbX2N9RXR6y9eM4WvJQpvR26xS",
  "key8": "3mp1P4pNW6NfEaM8QsPKhq8cp4qXThXwvzSPk4ShA7yA93umH8Wwrcv3ed35xXQSz6zzFYPgmxtoAfzfNU5v65sw",
  "key9": "4LeRohR2ezadg5s5iXRTdoqNpAc1PHEZQnRb4VoCTj9spfTDWU5UmYhPXxxe5a8qi94Kk4uFgSENTQReePJc7hbm",
  "key10": "DFR1SduKTTbd8NnboYuWWqxBjiUjYw2CdV91wZv4QyLei4rCfUs9rUqBY65W7edm388Cw4jK2KSR3gPRh7oEGRS",
  "key11": "31mSsZi3SNjwzh6WLh9eT33Uidox9PKuspSMXcMZyPAPRzuvYryx4YjB3xWzKCkgm6toNj1LgWGcnCntnTCQJDQe",
  "key12": "26WvCxcEyRfM9YDorCUXjdBYgTAUAVwQcgBRSWk4iir6ZANsWc4upnZvf2HWTA9HgvJK8RMjh4sc5YDsMQLz5Tjj",
  "key13": "4f133YYd2K7DXqKBcAE6nDZvphfShCycZMuvpFdUSrixZD8TxNc7pEXFpsZyNyAUhFycK6bZsna4ZP5SPpDAwr6s",
  "key14": "5a6ABEKdBmT7o5jgmDFE4qm1LK2rAm5NSDqDQ6qVm9rP7EZMhGfd6pViq4xEnFJfgpMCseKS4axGdJx9RSuQp4iF",
  "key15": "CKmJsn4p1fhu4dagQD55Cy154gVgXn1szikjvb7Rg3DajGaFyRALjs7ELKwWJKZCqrj164NpqChvchuHghM42aF",
  "key16": "5Qgar8aKb3BoLEkAoyQ1VQ83KkuPqSHLowpv4hNPAdRQJ3xSGydA5jg2Fp3g6tau9aEfbcwmkJgf8voccwoPCB8F",
  "key17": "3ZhquHZjqqtPwt5Fzy4Rpdgvg9LKTQ5r4VUNRehnLfdQYFrhztJajSbNUeoDa6gPrB3BLrEhgHu5bBN3eTLEE5AF",
  "key18": "43Q6dhVf6dhhix9yVtcaPea6nGymQ7vjsJ2f8SSTV6dSFZYXYB2S54mspLwmPWfdYkxZdR7DopxiWJs7R7Q94qBT",
  "key19": "5ytsLuza9WdTUmao3JbftaoR3nkYdi9cE9Cd6mAzPTj2xqmRFKxdxMGFyqEL7hDT3YoHFJFCKm6XjRNCQUFD52TF",
  "key20": "4t5UGR8Kv6NgCLPbKv2v9shFga9nMa4DHLfQ6sdu8X9GR4YxJq1rcN2NomQbPehmACzkK4Bvye7o88feJ1f25MVy",
  "key21": "Dnrxw9szUTUcQ8BRoEAgZRSpgkSBB4mJXzWR9mZWPnXi6i3DAQLdHqDvV5HZ5HcBegLjxRS3sgvCb2Q3XYE1Q7k",
  "key22": "666azU4cbhyCQnY5FQX5UjyW128okLL5TpbHvgbQtXNYS4tFGkh82Tp4M5LNkX7BuRkkK9R8FGoRpjfr8UphwFaT",
  "key23": "4GWHU3d4nBg2E7uqRaDvKzTCiPmdnE2FXAFJdWx6cfRkj6C1qyQDRivRhRAjC3Z1GdE6D7EKRzAD6WG8P5T6nkat",
  "key24": "39XyG1RsGjNktVgtj4qAGBeRqUzA8jWBTWtEan4nK8dYJn7MG2gPfLczVJKpVgMAcGjdJoaErkYWrAVFsJQ5DaQ7",
  "key25": "4w9c3tqXerY3c1usovtTKjgVS6xwwot89cMnmXHKigYv2rv7hqAs8M3crpi3qwri9cyJqwahbTQyPg3K7c82n9yp",
  "key26": "2kv7H8wBa7r9quXocchDSmqcseDV2rXoa2FntqMUBNA1po7R4G4PQ7N3djJc4AvkHyVFAMaUhSHZYcbXRKrdCxsT",
  "key27": "3HzUR1SEHnSLuX6zFgQf5YNBCLuCaH44H6G52o6SAqvzHdcyoMNPxaDnYv14BHnFKhQ2zV8PT6UivVQ8MAJzWFq9",
  "key28": "511cMrSCi1bNjHFhcHrbu9Mdu9GQ26bpc2zFq3fXSnDTtipjFxpcXEVesoBHdZx3mK773oERyKRTWrXvB8Cat7UA",
  "key29": "2dtSDctwEDAzX2x2mKMSDRfZgFzvzY8Je5Vza6MU8CCWNvLqdUFCcyL4onpUkDrZu6c8quEVh2Rm7Yr8qbsDTXfs",
  "key30": "3UepyGnavp9mcezoG3yxe8ekpDfrRCz9R5jGUbntavgE4Ci1AJF1B3u2Em1ViMiEmMHzwY8RV5sALyvo88YD9K3L",
  "key31": "5Y7ZbhhzRkFKtZjerGh9cz5PQ5BTgPH8Dd5pgpF6WrRZAWaLr7C1nZu9w7y7hEzpE6HeHkfB6nRNA19VR5Tsbe2e",
  "key32": "2vyvbH2d89mJWWi3tYmx79aEaLGYigL6oipzYjcyZBsU3GpECmHDqCVrMpU5ftrropgvEepk32RsTecroqGP7Nae",
  "key33": "4TN4yn8a8oV8njEJGnoqYe5NRGxJk2isZm5XoWUXh93zE3HLKjyJjpyvuBLmxZrdnT5k7MAZTLTRRJaJGB1Qsqub",
  "key34": "4dt2LLHnEFUsxDHLetCRPPM381uF251hmzSEsgbUwcrCdk3gArW5dWUpdiNbv4b491NhbRLhzVLfH6KtvEivTXUG",
  "key35": "2ALmQu11377v3AYuXxrodHMgZztqSpqtgV9vP4dbfy8QQGwLrWWDATUs7BoZ3RoEaMmsP4UrXWXfpdcSs1GPnrLf",
  "key36": "TK2tJr9t53ppCxfcHmdqdgEGB7AZTWaqp2Xvd3UmMKods8aiQzLGWsJY73YwBwXqkB2DC9g6Dugg8EMzeJrz5iM",
  "key37": "5sT1WkgFvJ9MiRtHoHhnC7F7B6DN6HPspQzMJp9MMEGY2mkHh9goExtsM9hdP5Fawh2VrC4pLdfP5vQn4CwPkZuG",
  "key38": "4nzvUUqJC99iJfL8oGTS3rCynNJWiiMBRKoJGwLySfbqWEhyZqPUgu7QetNEArVfV8XK6qGXB4KgybfPZgefSPW3",
  "key39": "5jAkBoEGcSeyRaERa4KidGqZwsSf5sBA274gbWo5sGszSG138uF2Pp36weTPs4Nvz6MPcNUdkwNBnncnNFBihjKt",
  "key40": "35PLGXhpyLANXgCnHzF6SNT4ws3N89LqxqfK16hZgMhFec6ZpjRBPgz84esnAZfiwsNe2sKguCmcx8B9eQTSEkuB",
  "key41": "2u7wyyyERneUcXKP7qVxVMPKAELg9GTH25vb3JiMH9d5ZzwVp7qUQ1Gu4qLbtWTSS4kA5agk67nd5b4vK61Rjz7x",
  "key42": "21dejSLGMupkbycKgMVZEdyv9DgutQPP61p2XoXFRFLwweVnKD4RfSVqwcqPJk9q87yG5KAJDKJuq8oMPeRJoeSy",
  "key43": "2scj8qWirHhwMQdp1xo8NAPtgkq75re9HSEJ57ALWPMsqwYbTY7sJRZg3tUu3Gk465vGfybs5RSrEVpVVQ89QvGK",
  "key44": "4cvoQkWoFQUbaLiz2tjWzX5iFcDhKw9ifGAS3pndLNbNGiUcviEm6XxJKyWM3Yd5jUYehyDgnS9BWwFtbLFFWMAT",
  "key45": "kTnoi4ayKkgeyMzq84HCKfAuAdJwLbyB7a2rxTghZMSm6JGvUXm5UhPgouLQT68cMpex2PfQA21WxFUPrvfSCeB"
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

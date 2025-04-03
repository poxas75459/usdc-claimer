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
    "4zAyWQK1QBZoGSXYSwFpT11cPUEsPF98p8AFmX9QeFzzztBxMSFk4644QWbG1GmYwpwdjVax2T7NqXSytSe99PJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVTCfdLMS7fEkiKjP2ALKNiWuQUdavewyP7uEnaGNLgn5Tkxuzp3LWLcH1hU3pNG7dKjpfN2GR1eAwrV4884Kxi",
  "key1": "5E8kmxbtNrPAxPMn17Fvz9Q1DiJmShKwPJdNcjKG9KDs7aRJ9eYjSPevo5BU5TLpRBvf5UrQUJsMnXDNC97XqLkw",
  "key2": "62XijYDXG8NaTwyh1UDTFC4U5gbZjYmDUyt5FUV9Rb8RN6jfHqmU2m3veqn23RYSC8ButXJj2MAj8eRUNymZuPmY",
  "key3": "65j5JFxxMvtrBuZuFn4RkXvU7myvjEUAxmx37SV84MT9ocfitYMJ97rfKWKmRuyg6tPByMkkrYEhXfvBxWFVftAR",
  "key4": "2GSGNBTCVMLqRira9EKE8g3YtvQT5MvvWcsbHae7K6c2LUFM3qGhBBiRkKULJS5jj3CUgb8EPuUVHcQYXs6szTz3",
  "key5": "4VFkTpv2hc1QK5XyFxY9t4nTSM51q4NK9sT22M8prZ9e5cvYFF4WYyimhq4sJoSD5CRsM6FL93Dnr3zEgH1T7Atv",
  "key6": "48wCpwmWMSAukUiZJ3AanhNEJ8kpLVw5C4MXDmyoLG6rRnNADqAAgeSRsSZNvC3x3xbrDMLo3QA4RbAHRJKEVKaN",
  "key7": "4UEijrUZ8DmopG5wQC4GTxHCPtWLDWHaRapS3S1ePowyS6gBPQMNyQ7dT3ibTWteMZhECsggXMbay4ZHzhMLfyFQ",
  "key8": "67QCPXxFsvSCDkYbDtHwfbdFRXnQtXRULwN6jB5june7iic5qd9xoeFrVeyL1X1LyLRjN69GG9y6uHufQGXhnN1p",
  "key9": "2rLLTQndsSJmXJnfLRjkvvAKU9Zm51yaGEXHQNBb6nq9WX8F2ETGkDK4FajcsH32dPyC5nuvudhN8MhyzgB7xFia",
  "key10": "312Huqf93Fm37RFY4qz43f68WWZEAdrJJsYvyBKgKt5j9VYtrBnfcdXvy3LftKvoACLreGFWAo9wFshdwDWwTvcD",
  "key11": "5pw4JzEmWow2Hu8WDXD6jQP6EoQsSTKZqsgvYXHEQzVp4uSujr2mZD3ejsW1JJGYxBWy66ekbLJss673owroTvq4",
  "key12": "UuB9TLErfd9B14MkzhtZEhT6GegWQFen6SKoJz2v7AKtCXVWxhixN2d6VWSqjf45LUeYK4z8GiA9a3UVmWpZk69",
  "key13": "v6s1FjWfcGXB1KPDDogwrcYz2mv61q9mHgXoZiFFApYyznStwdG6o5Zj1cc7R5YsgQm3114DiuCL1Egw3WAt5rU",
  "key14": "2hLUMM9FpAGnX3D9ydP92BRCqUoRjrMSUQD1nqtzJkT9G6DhPN7GrtfdTx5Q34ywugLwi2kV3aRvppvGZV2NYzDu",
  "key15": "4hkVQAyjvkhwCxFCRe45TBbGyyk21FpndpCHjMXQ9Fd1ebKXbqZPxYZAJAU6G3opth62YEeK4bfnRbMzquyvGntW",
  "key16": "44Wd7qE4JtV4L6dY2B3b2yTjDMPRQ88MZYYGKfJY4SZQ1SVgWLafwKLfXRg5L9iXxmoxj4kGf3oqRzTiLF65XMRn",
  "key17": "352XevDfYvqUhHmgH6423aFWdaWxmToS3oG8QRqDvi9V4ctfrPVpsG9nXyeMQEo3dmvocM2gG1jMiTpiRrbPmVAk",
  "key18": "3DsxBZQzwkAeNrCzso7DtAdXeWcvVLU9VvZ9DNeacLcUeJ1RHrY9TakNBeJEwXhrPbQfnwisVWSmK7ELawxeUshi",
  "key19": "4o6rh1QsgS5P9xCNUhRTN1LMgAihwQ6y6zmo6TXjJtrXG721MxwnLLE1RRuGW9vjT3w6JCdp83Yna1pmpftQJqhG",
  "key20": "3xtt1QgpYyEaYqbP2LNezMNBQg5v8Cy8hsieEcyMqUJJDNsQdjpAhRweJ8h3nmHR65qfisM8LhaMqFFBAMHP6K8a",
  "key21": "28Gak3Mv1bdsA4XFNDZXA4AmFiDdDsqChubmkw8dQwsFSNKFyYZCm9x71PqrmUZsY22uMX8uofajdb14P9QoLhbm",
  "key22": "2aGj5eP8irjng8Hz2yBphCyaP7a7frAtmKvyNVZ2wEnRZTkAbYXVsLcEyhq1njUmvgdoaUmDTHZKKsHk2o7k4pW3",
  "key23": "4CJ6LAbeu2FherkwhTNFv5vLVWbJdNYqvyW66JgngpprJytLpdiHc7rDVgat6AZBpgHyXN73xny71Bfnfi6Bp3e9",
  "key24": "SSjHfSDQ86xho13jtwqysTGBozVhLGxbbeFhmantPJvPFRxKYdh5qesY5mdEwLTy5s8qZaX51cbh2Brb5keAwcN",
  "key25": "Aq5JhKDWPPGxqVw3zucdiZ8MmZNTH78T9i2FxKm6qLm4yESEejGEzLhNvXboKQnRyTjZTZDGaZYRid8ufDjZjm7",
  "key26": "3X34RNTMcsmPZdS7drAwSLK4vTZ421psB2xZmh6h4H7B7cspaoxvfZ9L59mdsm1FaCZmFkte4oveAZpywQFx3qQw",
  "key27": "4mxmmptG4utNNbVTTGNBgj6MLWLxsyYK3wZHJxgeDB8NArivxcY5a5CSdSaMDZXPQ8YbTFkuyF68vGJqPZm8cZgm",
  "key28": "4kzDftXZvsQQRpUwBuBnciMDuNbpZKvk2tbhe6KQtKXmGjiodBW9Gy9CM51n3FyRkQjEXNGsvx7ewaSmsPeWxPq7",
  "key29": "2JMfVfkbMidC9p9B5wNFtsXphBeL6ezVE6RXt7QrAydpzd45XnY8WyoVesVD1WVGkAwVasJhEzuKPGjrSnrWbNdn",
  "key30": "4vgLBQv1bZQgV558mzm9txTP5d5BfY3rdYu6ypQkpZDPyZqYKYGbwccb4K1JoQWCyRRrAtz6oTTPA429KB8zEZhV",
  "key31": "2vCaDE13EvAtW5eLi1vzxxpeu37imSAaKeiCSbmKqkUfePpKdAtqrdhXE7EXUqwnxSer1VV32Upqn69uATMC8yzC",
  "key32": "3qPqhLJH59WRnF5N6P2EEK1Eu3LR6cTG41bMBao47ZNf8duyBHN9UY3yiDfdhzNH7VQdiXZGYWDqC7vBi77rWorE",
  "key33": "3u2YeemiC67CPMMxoeuxWMUgSAH4Gv2djTNCyfko42rFpk6psjqbuZaaS47eNxrzPWAcZsYFmnpBTF3tuLXPno7C",
  "key34": "5NiKv22FicYMm87zZLGZNUGNz552pbxyJuLtrZicE8EQvYe3E3dPTRdfvTT7CUrSRJN3MV85FmeYsZQq224j4vfU",
  "key35": "2uQMKdsVqQonMzJDX19BjXyKw28DQUh3UbWhNDLjqjCkLbwXVYDgE1YBCKtQhgyVhQwCqGKj9sLoq7vb1KfYQbj7",
  "key36": "2ka1hnouSKUkvmM51pF4SNCkEHBRnxgfLMZihd1tkwP2hpQTp4iVyrvvWr1We5eFhngVKN9E74wdkYaAMiDys8cg",
  "key37": "FsrUc5QxatVv5fJ4dMusTEftmVywrufPZGwGtJqv38Y4paWM9zDvXEnzAHo3MG4Er6VEhQMDyyG8dMPr7it7jeK",
  "key38": "1YNdFZ8TCqc7UC5uh53gcB6qKVW4uVjx2T6Louqq1i4rDQychaKgmHz531Du5GAdqXqanojGWW3XXPViCA9pYPX",
  "key39": "4syt527ivD2Qu2pCuy1VyNwcE839dZocxQir6xovmbw9zBKVYySXzE5LsYB4nRJ3sZpXGGHU8NXtA4iaA9MtxwZY",
  "key40": "29KMdRAkhdHXM8BfsK8uh3xrqTMyD9rYSVZGvNiUJykCp5zGjTyXPFe2GEvuT9VEEaDf8MWn1QDgE9jpGSdeNX2f",
  "key41": "54xFt9FjDRUpMpC3TP4rpLTc7ELGpnbAM6THgtCJopTFHfaiWxCVSByRWCuM9yMyUAuiW6GSmju3ZKdNuFL6hWPK",
  "key42": "42mVdPqMprNHpgLv16B7VS4NP7S4be36nTW3vDwH5x3dpFvXRR3Btq3gJKP1hMkdz9d7LoUnugbGiZUfuUhSfHNN",
  "key43": "2ZYF1YHnbQFVKdadxZcurLTqTJ7VefdZvPZ81RiFSVzuypqyZCmQr7zVL7C7E4poJN6NuLD9wsDQxib8fNHntYdA",
  "key44": "JQ4JcqMpKLJ7Fvj4ukadogqPWuXGsfBQ8PB3d2GjvhfaTuaX8hASW5b5MPTTYeQxa48ZW281cpP3Q6rEPpBTP7K",
  "key45": "51XvNeXhVV15qC4djY5ZEg4F1GijnUKkk7LNo7kSWKMsU1nihoWfvw2nu7X3MVhzfujCBF8xtG4jYouSbsGKMpnq",
  "key46": "3k6Jfm17PD8HXvKG2umcWNvKQyakQgCZtrbGi2nQkuBDu2ZJg2EiWXL8rukybdk8qvGouXkquMtxvekfodRcXBge",
  "key47": "3TvsP98cVXVXq5a8bk44eptf4UshGxjnxtbyxPPq65zzGBh5de4pLjjJxC1qxuCR4KRusAse2o7Pf5KGDdcqpwaN",
  "key48": "5CWNLe676t6SHtJ3XxZhjYQciLA2EKxUNkW6mXnXZTViniuFEu56Wb4g4fS8NxiudSxgTrRZ9HCJy34L9dadTWfT"
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

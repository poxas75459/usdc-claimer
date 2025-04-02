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
    "6NGVNF4d9WG91hzEsCoGjHR5dXsxa99bBuvb5nws6sbDRgMSVNiH3gLGk48qDXURRrkxJzVqGXq88c7gLv4gREH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37t6aYBy1eJi9MDbV8UEDcAguE6kNDyvqWbFc1rfoTRSao2b7QzvPzqF4zfQ2MFLeAy1dBmc6mF2oGj89MJUknpf",
  "key1": "4x9VeujNmp18tgefM5RLwY7JonZSqacrBCFresdxwicjxcmqcyWrbQhB3smBDKMZ8Ncq3jdDCLQfy7Pt9AGvatQi",
  "key2": "2z6Tu5nkb7nDKfoHAzEH2JcbDQKdwaFFa4ucHH2UYDuR8Ta5npqqdSFphxT5qLgjVDjqNhpEjHPwBKZdUVePeDUt",
  "key3": "2JeZv5dQZ8kziAKShEf9RAdgWduBpW3TNEq2SWqCEnaZgvvRGpxMMdJKCDKFTvL4x4P12kcsffAKTy5pg17S5HPs",
  "key4": "B1ijX3RGanswbjJ1JoTo4THHTz69aLwmbwhxfKBGyVJgfibWksaXw5Pzq9XBTs7rDJc1e5trMbKvpRH4Mh7XY8f",
  "key5": "5BGSpnsk2kQ8FctRjG45hXDGG4rbQC6sxBLThGj6XxYvPirSH2ukrqwYEvL5V5hyAQHWJCVWCUqyt4bVVGyzEtv",
  "key6": "ZBSNHQDzKPL7m7yoZTpxmwv6vvdz9EdSeYXBMsMQaWSDk1ooGq1TeA72PRKoPAwsHVc4CcpXeLgioEeKmmUNZXm",
  "key7": "3Nr9g4DHtSbeZc5oqYm4oJgURW7K5xEYcERcZgXPtca6xfXDefwfsLQYomCEQmWbQos751afV6T9M39FKXoZxrq4",
  "key8": "2iLNp4KcEF1fJCftiUULss25k2jgf5A7Ar8ujmZjMcT2SXbnSgzZLrrQ5m2jKq8UxTHUSUUb8Kfj7op6xrqxV2EU",
  "key9": "6wwzDeoL2qyP3w6empsBwWVzguCN8vQYFmfxmgMDBnH6v2R6V329RGreiCACRJGmHQjL9wuZjVaM9vaz1uGh2kR",
  "key10": "3F15DLYh1Uo5qXpvxdp4WZ4hGqbbpvREcEh1uFnWQXMZrRSDgLEVgMMyKai3dE55jPW9ELSfxNknvuYnUfaNfZbg",
  "key11": "4VFdgeEdNdQDUbU3DhyxkhrefDWjCp99yMuoRFzTBLTWQeERxg22FqGHg72XocUgK3T1Uy3y5nmC28oyuJARpZES",
  "key12": "4msHkhDiJbte3qNM3iZoXLSPKYpUx4pYzGoqpkVV9UgfLHN7p5bed9V1BwJBWCobd61pHeLPCRguPCtZ6oWq1ajH",
  "key13": "4hCEKRUVGVS2bJfUshzrJj5561fZDFUWaV4mp2nhNFmxgUaH1KZVAtHb4jkUbu1LepzA7Ej7dd9L6Q3f5L6MCraV",
  "key14": "51L1iY4NWSpf2CcHZPf2oEZ4jJeLJPGfEnYATJndGSepuaCB7x8PS9yF2vjjvz4sHppbhqrjKVfaCdGgjn9cSiMD",
  "key15": "2b6CnM36oUQNiuW5eyrnfwfUSFDtDAEXta6Q2vzp3LmvBQTEjVje6gw8LNGUbmjgJLXyMR8QjhqBsVHFawKvN1vt",
  "key16": "4SwzQ5Bc5Yao2RgevwkEMyxrVXD5QHw2LyAUx8MdKZvxyJgaNd8avw64zxawu1gH7f9nfwBYK1EKs6EiwXd5Jw5Y",
  "key17": "VYK4KLsSVnT1FBGLArbA8JroysZs13kM6je6adidw7YEtWooxGHdjePKCw27zGsraC7F5R4BjxjaTDLNSATQbU6",
  "key18": "678YEtZDJffyUr7wE8M8nqGJJENWSEV9meyKdyb58GfBbNzg9GbBEnXyDzWc3cqiFN5KXHsCJX16gy9WD8EdSoDv",
  "key19": "3E4KtpRMtArTyR5CBVwANChqgnfYvm3cHTHHX9kvjM1NARn8zUfp6FMPG8XHyixqpBLG8QEHB2zL9HsqAH4Je7JW",
  "key20": "3Cae8PkiSyBEzo7tpk6TVuA7NTRA3fyDgNsLVg1a4FKFrvj5XesDbdSxJC9aLs2QE3uzJmM5fCouqNUXkQsUXUsr",
  "key21": "9yFijFoSfAQ3HNK7v9mF4pzeqp9LiAGLBsoezMR26p6ySQUorchiY2HmgdV6SpqmE8sVGZQjwWW3z6B7jFsSM5N",
  "key22": "67J5XyiFL5zUbepzHKkBcTWeUWciVPvBrMZenmstegm5iW7tgayKzvD54sYyUTZP4s5KadVvejxmqS9WRB9bLdFf",
  "key23": "5wkHtaVoP8hqeED2yX668JBtB3ZMUQVaFbs9KxrJexixsMLrbwtjQViXxX3KmqPWiKcML1QuEPR6Qvc6KAAeFtGy",
  "key24": "4sUYT2Vq1j5odr76bDPcBUN3yHFYEYk3BLxF2sz5zAkF5BduE1ukqR9iq9xDnw5dDxtYBNiHFwsauJXLvCyjtnE9",
  "key25": "58o8uERjtH8h818dRR4gvvxPyqiVni9Dxaf39s1CPRmME8nMC7c8TcYNdSVpuiHqqKirYQLM6NGb4k1bLr5CVEMs",
  "key26": "UWAmP2MkmH9tbgiaZddhUAm2mmLky6jGqfP3GdG8vwbJjyzW5MFeuwDzMvuqSzdJdrhKHMERkGvMCL6Y3WE87di",
  "key27": "Yuv9rDuHLFm8VRahkfxP5i97TnhPs2J5RUtvby2M9DXrqZ3mUWP34fSU4vpHssReaeJ5sEGa52DvRLMyQoMyhfn",
  "key28": "4vn9g6FNszG1xVeSaYLMNNVLmkjy9X4Wng6ocXbttohaswi6feC2BmuDnTfEdnRAFevVpKA2z1xjAptnbAdzk48a",
  "key29": "64evJ4BJ3iTvixRK5koMPRR5XXPefA8HwCNbrUM4ufAZbf3fuAymJxfkHKNB8dXHjpZzGbwy3WyxT8Xi9knemojn",
  "key30": "5SJ7QpLkRkvSumB1UiDVJK1w9CdT7B62EqRgqmZWtt9HEJuW7FUcE1Jz2N1NnDFek54CB2w43dk1cMATf6JzD7M1",
  "key31": "gGxx29RvnKdTdQ1MW9dgj9gE1bqC4achAmoYwFmrQK3mQS7ZnFXzZFGdUMr42mB66f9fvAK6qhhTsoGxgphaq7m",
  "key32": "5LWu7Z4hSq7TdWXmNyGfEfeYbLzJenc3EWaSZFe9uBHPUHkzjiLP5rdxK6rubyeM68N1aVBqK4JjzAC1Mj87YuvS",
  "key33": "5H2rPmksYwUiv1Ba5zvzVzPBw2ndtRCMxxjtNsd7zPvhEcRyGXHY4zU5B5dfxoHjMupgzjSEYcHphfDiupspJnJ6",
  "key34": "5eXKpXnhX4mgsttd8iD6HC3EmdrF4Ng14KC3cyuGLjrtSet4HtzGfG8RmzeJqne39QvRJeStY77rarbWMFJQqUZU",
  "key35": "3pPC6zgnNgRMKYsAADkN8bT1DT6RB6pv5hCwmKhukxAzPvJsRw1s7ckvTiwH32DvAnYapNinYcYWKxpJroity6Yx"
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

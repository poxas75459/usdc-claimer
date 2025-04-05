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
    "gRr92CrUq317heiCgjtUrnkPwQS5Ct6ohxEUuqEWV35AhLMmwqK782PcGQJmj1ExhariyV2dHRdAT2FqPdzGZCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUnzL2nUoDGA3KX5hs54DXwMVA76moNw5AftE9TmVhEjsBqERF1kUFDTp4SFVk1AnPekggF6mhuJZTGqUeR2Cva",
  "key1": "4uVau5V5tWPgXVxNXaZXWLW9hNTSGQrU9UYccUqb5aFxXjc8fbbzC7zYKbczFr5GPurfKdLkrvoMx7mZz7J1Utoc",
  "key2": "3GYrj839nrypxt5W284HKDpp48MqTfDyfYGJT5HPUo1pdT843snDWx5sJVHJbdnDpc4KmBDLSDgXhbjuRVnrYzsC",
  "key3": "47sgbyQaa3rThnJ9MdNMDJj2CAyJwbYoKgvQMgcThgxzJFZKsrn3nxFAcEvBLCyNmmVGtb46GewABw3NaatsVXX1",
  "key4": "4nSQeoh6AqgfQzaoCzzVh2oHGtebYk9yjYf3Fzc4ox4xCqQXRFCvMhMDdPRZEQCV1WSbFCDCufwEzKYdumH1Nap6",
  "key5": "3eFNcKgaJ5aC1jnma18XdRr8qD7eoB1fuLvNsPyDdi3e5JU6RNGuWnQkoXQFGG3XL8LuzqXCy3CVYZg4syPg15WN",
  "key6": "3y1kY7yKHmo3cNYamvzAvMq2MJMubVGoNAaxrd8JGzdqFx36sXSPfowXEcNHN93shTvf3iGJR8tEniAouna9t759",
  "key7": "5krwMJMUfLVas53PUCEZVKCqZaWrLZbKJRvzXaddzp78sLkLcnSAb83NQV52xMNuoWAucZaLVhvdLYXETSaKV2kk",
  "key8": "2xPy7VARhXckgup8XMkJEYdmMridZpwjoSWUrX3oAPpq4J7BBxt22AqBKUJ5t12tfZ1bQJyfdaTC9ufFU7BEctB9",
  "key9": "3FdTSRWG72gweZse3LRP5ymSKv1WABfFsm6589LmYsfLT2wGnAyuVswVnUE5GgrzCbQeVvikRVGF7WfgAwhQyfsh",
  "key10": "NENwkN5BNN3vsrsNaTfw4eVH9ZMGqq2PEK19JU1zLjh6bT5sfMa4UcyJytGFgYVaoj351yNfHi3atUq7EE2yWmW",
  "key11": "23LfQ7bgEt2JL1JKoHYppNLDDVQijtn421N13gUmL2AMzCvX9Wy8oERbrFmBjpLHorW4w9nxncbU39yThToQY73y",
  "key12": "4M6mzb5H6U3bihhkDZiwrKf9Rbm32t4dYbtc63jwDvRCzRzSXcE1etvshiXMe1v6x7D5ZWM32aEfeQCEUML5m3wR",
  "key13": "sUr65QwSRoJqvu4bc4oK1bAPqe1A8S7jGsLPY6A537vKvdp6mp3JQMG4AVoML4BAc6RV9XTgoXGt5wuNF85ePtg",
  "key14": "4QVRxz7fwNC9Tcxxw6pVVeSqUQErVvcT6DkpR6THbBpmeMLkYkEihEhSuksMfKyoFauTzmnmyXYNcc1yEkU4AfVX",
  "key15": "4ViQXj6ws24jzNo3HvEt9YTYUx19o1yApABADXvsEP9VwYN7fKAbii4YLh5tp4mATb7huK3b3hCfdxpbbMtzq6Da",
  "key16": "2D1Ui8C2RUx9EsZrc48DrNmwYU8r1WQnxnXHr9w5dFhhvygHybq3Vvt5GpDNDkv6ar3MF4CKXmy4JnioBApWjCQE",
  "key17": "3RLhvHCgY5vP399cztu1UH5ebjH12hUdnvMBFc6FAgdLhS1BN5eP2HUB79c5xEgfC5CTZwyAiT5b9XmNMCq3jP3t",
  "key18": "L7NwUsrqWcrnqDTXZ6tsazY3SPBiw3x7facepiSW3dCDT2ECPwZzTbVXMYQxVWWMpDYkubNaYE9dMFMYm3Devk9",
  "key19": "4XV2hf8jNow2ab97gwkbFd16gBYALqRvk99ExNLj7KbdfxQ2UJfEoTrg4ch43gGTfnoDigaj6yjm7QbQqA4vojFP",
  "key20": "2j1DjbBFTdh1J7AkJM6gJry9byqGQJreNfBpo2YgmRCtcQn9uPmikSwb2GCWie3tvpRwjVQJ1wPQJTARztr9Aiyf",
  "key21": "3t4KRUbsA6DhwVAS4SmZa6mtMCtGtCqA8cMubCLLEKH4s5VHsXc3ucx4KC3wZF7B1C5ojLC9oxEeZutSyixwEVTp",
  "key22": "3cuwkmQYCLfCHHNg7hDjcVmHFA8ySeZ4SFDd8pKCVZWPqegG7w7vJKdYQN4hAxRhXuiJmrwJr7VuXz2Zf6u9ncRL",
  "key23": "2ECUivWLLb5WkYstUfE1Mt2tcyo2mEXcysZrqVNcnxnqvQDdmZb2MYLQZ11Kn956nuPiyJF75v1UvETcsd4Ahtme",
  "key24": "4zLGfxyG2gT82e4zBQ87YATmx4Gd2pHXqjGPzUG5cqB8sL6jd6XqG1cE7FhtsMVbDTEZygQsM2NJRnqfxHYapAdE",
  "key25": "4ywfCvg1dYGgUDHuR1k3Zz9V4tv2RyTHBnStF6TEPh6dGZykZRRaVQNmFCHKBVYvk6fy8FYHv5sH2C6DDLwJEdFz",
  "key26": "4gRmYmL42DhHkA53yAZNXuucj8rSnr2akTFkBZJJaZPqbm8421eqMSvdYgLPhSu41U8iK69bjHiV7LibdrtoQ61K",
  "key27": "3Anuwsf8d6Gm8CMiTQjAdMmkw11fYvCCv4Bifi515yXZu8e5nSNH9xxbbo7RwSA3D7VqXEVNBqBcYkR17xsdhQev",
  "key28": "412rswL58VhGiGHTWayUA6tr4eZPmyDSTo4EHo6jvEyVMZpnhKdsRmAE2de5PetGf9y1qivpgkWxcekD5NuaogG5",
  "key29": "5EfFE2YJYWUKghGWXZucuquD9uPQzvRfaPqo9LNZCc9AK1T9Er6yuzbgWHay5uk83MtveeX2hAgt7iFUDBA6oWZt",
  "key30": "2dbptLt53oLb6m4H65s3FVKtADPntvo86FEJCsnG5PsTv8VQRsfegUVsYeCtfR52XAvHqPXZPRzu1TMmzSoHkTY3",
  "key31": "49LSbYgjKbo12o3HtCUs1Q51izCSJuu8H12hEjwN3FxDJAABh9KRhoSN4X4swe9zWsMq4w5Xtn2dTbMywFehWq4d",
  "key32": "3AdeS9beofsDiFYwxyWJz6ExN1rSC4xXYCtCbRdRsnWnV6ea5Rxs8cd9pNGSogwc6mvSwoce64knjwTP1DnJ8YFZ",
  "key33": "4qU2yKoPUTLkd6adrsPTL8EqPgJTChzqWvo1F4BY7Wk2qHXTWWgbDddkPBdPg91rrwJdhtS8Qjv7aEqZZcoRM2Mn",
  "key34": "5tMENskERoE1pZCyKzmKjwTtsRpKWQxeSD7rQG4KkAuvCCrw4TfwZk5Yke6b8eBSXHu7wgnr1Sdhpg9ZD3jFBPK",
  "key35": "7SF7AegLk6z5r8uxCoZXNZ5Z8cjUd6qf1BedmRyLDVcSWAe5MipkNdhTWQfLkZHy5HaPkwxJQ1qks31eCdBUp1o",
  "key36": "Lr2iwNnNvYNgdiAduxTUTjqDuHLaUauiLVDr1kYfddspNmq42dDYhqzYqGaqMt7hP7FJPmdoTj18TsG1AgWVaGC",
  "key37": "286g8JuEKZ1AGjVPpzE5FrqkynGXXHckUDLuPKPacK2sky54heeJ6K3QzufwdxCwNKXaKkrwc6kaYduwkEeEeqMn",
  "key38": "3EXWoNTfmmb4XzTuPbvZPGYgW1CgLmmkXSh7BCuyMKbTb1HWbxe35qqzzwFJ1c4ZxzmL3X4cbotRhe5aYUBidb8B",
  "key39": "ZXvLW17Sp1uxyVxdvSRpVLwThfdGRH6PqnGzkkdTKhqkKBA29ws2VFWzFdr43VzCLDYXrJAhUDZmZf6yYpxUEvi",
  "key40": "3hPEpRZ5ScU6pBXciDJ9a4EHLy6iBVnJTmiqqX4ey5C3vXpRtdhvHcGWsA25z72Jytq4jBokgK2D7YkehyKDsbbu",
  "key41": "3PJPbxi6b1BcnPb6W3qUGV6Nm142dYbHTdVnnzfR5jXpdjTEHRZW7XZ87GZub9BDVftGcGRemVCQrLeqLLgQK6g1",
  "key42": "2DT57mGfKFpAnAkWGw7VwQ4A8YeiHr73KQFbKFfRnZjPqriQzhCYnB3X4GuF9eFV4dJAskhwoQVYjFjsa6K8RY5D",
  "key43": "5FetnsgZ2SRYJj4zbJmUDFv1skrBkFP2AmN8GeVrcnzPJdAfobUiFANLqTB297BPg5XBgLKrqUeqiwDC4HCwgx2g",
  "key44": "3pzyckuCVi1F1mtWuckGtVRJ6rx4U8LGwLZtyySdFRFyfzdmxung5VE5pCtBzAXhtDEjELyyL6VNeerW7MoC49UM",
  "key45": "4F2FPhdeYUCkfjmPUbABQJE757mwWc8YRHPwUbwhTJ3XjZATWpCYaHpjgE2Cfi9Dbp4TfZuj4vwtWkf4eFbpr8hq",
  "key46": "5UgeGqYJhqKYPM3KTvogfbv57CyUTbnRdL42kqcUevLEj83efT662pjUYh5FCJZ1ZoAzm8Psj6UQuyXApPzoz3hL"
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

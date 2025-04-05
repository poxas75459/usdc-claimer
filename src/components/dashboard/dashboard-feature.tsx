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
    "4N2VTFaWJAMaCWbeowNHs1FTB7mu2psepVs8MnibsicdrQRkeskNez4jHxx6JzJaNhd9twHvHaC5Jgj1GMKNi9gP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdGvbhTxWz26RqrcBwWaguXCHNhrk3WySiq1RNrjrBASrEfqkngVnq21kv5fWEPyADN2aUW8i4CamNChVCx1PDW",
  "key1": "4HSYWPVmK2ft1jjTjdfYZguzr7Ga2coZG9Jp4x6RWtGqLB43p9B8nYyjAZW92rxpycH728ZoViE39rMUisthguGQ",
  "key2": "qsZDPsY6SJPPT4T61HLsvJUbErWfo9JuHLDwYHcRE6mPXXWvPDEggEj4ZStFxVSZ9R54fN5m4XNDfCxg8Qrma5L",
  "key3": "3GLNrnZqKPzPvR5nFzwZGsFVZ4r1bXqnKfrhB53MJ9mqvH47UrR2bndC78DEQTVoCUWhpqmhM5DhfVJdwVa8okvZ",
  "key4": "443rbCA7NMGDCK8XUSBZrQPNcofnpi4J95rJqwiU2fqNpQMsmM8wuJxLpiKW5WWvpBToUtPz3XzcuXc2SpEepLXW",
  "key5": "61LuvJ7fqbC5PBaPuoMQ3eFJqhtCebQkNBgmjUSRCMtmvbWeSH5DJEo1wG4Ndz11247hggw8UAzCq3qvKau25sJF",
  "key6": "ibDuGXv3vTdA6aLSZq7ZpgSWT6M4RWXFDZkkHGUUZPyKvAh2fyNSDKT7fy41XhwNNfnmx1zZUvFijhb7WELcZcX",
  "key7": "38yr7R7xtkwxphxXfFZhX8SPd1vfHyfemsGrbPJeaQx6K7f38dJkiDJF5QFuTB2XLg2vUFqRoDJvAG4aYEwdC22F",
  "key8": "43QwrWrvbFkiHnhh9Jq3JsJhtW2QFH8srMnajPs8ro3aS1wz1WnqamNusjV2SBeuehcCut3EGESRroVQvoeETyiE",
  "key9": "4ZLkvhSz8yhphSFEZGY7WFKgFeQZkCP9yYuJtr6n7Bib9sJtQPAsLeyZoeL9kuEpZFNZG1cfsq9NdDZochvQDEij",
  "key10": "5JB6QpPSFVtEpd6oerLXzzdyoZPhT63TLquWESKHCtQPVTH4RHmT3YzKmDSzdkfqcWzD8D6Txejj7mT7EFjKZzgp",
  "key11": "31jKTBcdFqXK4SbAXfoSk7AwnXnxMB8gx2QrxxJvLcgHzEMNbta5XKe9cVfuvhFPdj76gFFnQhoxhBv3ejbaUt6p",
  "key12": "5L4ebPRUTE18QvKqSueYLrDPbf2aQt7htKJsfBE5wQXC5BDgoMZ6SKSttLp1B99afQCrkMWbBHFThdonE8URQG9D",
  "key13": "xG3cPei9jWXpGgVEvYe5zEr4uwwpCJyTvTiDLCtA7jvmcrEeh2z9gzoNHUYiwQwg8Je6rRkv2kDd6PrQpRq15VM",
  "key14": "4Fd4b5QDMAhUxvXaBS2yThwHSoP4BkUiF6VDshmynf4GTAvF2PYAF75BCwzkdZAyb8XgkV6W5EThEbDiUZzJVwFy",
  "key15": "3Pk6Yr2T3LC63fPtQG6R1aC2QV2YrfVtpQRUyqUACibEj4sMdx8ooJqvTW3KS3qyrQ5xqoJSGknuF9c98VTPccnD",
  "key16": "4bwca5Y9EdDgJr46EQSuBisvzy1Nzvjrh8amY51XaP9h9qn5YZfwG8xUnjqB1uXZkEVcsTZteNB1eJ7MRNduayLy",
  "key17": "gT4t7Tam4b5gqr2FM8Gn14K7broajoXUY1PdtKvYaeZepSfAoLdHcW2CFVGfsaVbzYYsEsrgNa8GuHo9harUvj3",
  "key18": "4vDww5oJzQACaZJBq95yhpLVddwaPQX2NSmqyW2sNzJbKUHjEATvTnHGMAUJB4n6qFhznSLKEHcejy262B2YREQC",
  "key19": "4kcj3BAWKdfyzqevBaJhGzdHjPDze6NQdS5nqqfovQMdn1TRE15juLBeVmH9GPszh3uKb5dg2LLBZnF3JRoKuhL2",
  "key20": "37nqocAjGjBVkSwJvi9UQmphs3T7hY2QUGXxUoBcJpkaTrCrxRkqLeob6bKcsEE6F6sWZRcKWuKBLN7vdicCDqTF",
  "key21": "2w6G8YUgDaQQX2iHKBVdGVXF23zNNbm8TRrr2vYxd6bqRkazMDY8nFVgsQWv8ZZmZVuborkjgM4PHUn1ik2aoUhK",
  "key22": "2rymrY5jdV7P92kwDcC9EokGD8WZov7aiRtoGJ6rEypVopfHPRtWeycVTWvVYe23KwZM55DW4xZbZ46jUWmkTM2P",
  "key23": "2g7JHCX9yFFJMqkyRUbW9nBMzGcpzqyfHU8kMGkpm4PHyAyDK8vsy2vTz8YJm7TtEfnnxsARU7yW6SFXYPRjAvYs",
  "key24": "2kVjbmciRXN9cm2H4ykAHKHuezQfWkYLKqmxorBJB5ngJM2ZihspSqweMnqftAaEcvN2N5DALohM7rRqZK8qYSvH",
  "key25": "3Dqua3EjTSb7R7wxt4EFRat5uc3p7gfsn8WRzqvni1DfLsqdxxa97MJqTYvnZRmEY6CQFQr9uwpaT7Bor671Amcq",
  "key26": "4iWiaheSXR2BPoBwSbqg2QSyLrqRpeQY7m2Fnw9B7t2qjpZb3NaBAQG2xrnyc9XjzerBJccUjJHoLTHAvghQfR84",
  "key27": "2GaxbwaRyhb8Pb3YC48Z4M415hCqx6CJSe86Sjv2ecAS7tL4dMfemCS1zJg87aVsiLvETNdhEodUyL4VH5mLkSy",
  "key28": "3syg1EcT7a4EcniZjVqRYr89oMtxdWsFrrz5Z6z1AxeVPieDrNmJBKonpVwTV7hU9KBKKxwchuM76hC21fgARNxr",
  "key29": "2HTUVyqeUhVJg6CJA9EAEiuT9KcCG5A3jwkovL3D2X2cQzKiYSNNLK2eduuAs5HFf1rmkfVDuXfCx9WnQQeHjW8A",
  "key30": "5ZqFs7dqt92uT6xHcY5A986x3ShxGGHAM9FpY4ZEfYcNNVBVriBYVrJ1zLU3NPsqP7yFa8BqaeYxY5pAT9UF1XmN",
  "key31": "5rfWnvFzGdYfw4U8s7KKf1BXRgRNtiPf9Q46LpsWCMV4JweL7uZaeNtq4NU4E6SrnQCsWaYxSE2tVbcGtbjaZMKc",
  "key32": "ypkbYpNLfb979qaQn6yDL5QMRmmKi4qCJ7bjWck7oiAwa9Ma9vT3n9MtfrxTVefFwoz6xaydsNzJbuNvV4bHYwc",
  "key33": "49cWPtk49twFFo8gcyM9GGx7U88jHvHEodx8AtefSfAKmgwwurwMHHabwYfu9VrLpu1x7D7XxbrdYEvJC6ds78TN",
  "key34": "2k2EeUXHfKHXBnh9j7eM13QfRmJkx52kHmwM1f7DVD7hVsVANbJyc9HequRXZ5nPTz7Vmq5fbyB7rkFHAPNWxzzV",
  "key35": "4qT6Av8LuUFTZ1xdGNRANReWWzFRRfUzgC3q5BqzpyCA1RUxVFL87uLGaWD8JpSV4DtCri8GPCk18DYZGMhHNLho",
  "key36": "568FcEiTJLq4GexyHvYiRDxcH8dGzDdnpouVm9Vwx9XTPcWQP1tCtErRr5oNYcsTDDRQfiiuMhbpqRXtVk6j2VK5",
  "key37": "uJMh1Boy1hfK1jfhZGkAAJf948dJxjTHg26pJjuRtMDyJ3xWUxSHk3P4UfVAutJ3y24KmzbKJp4KxidZMBPHB53",
  "key38": "2btcF77LKHr3KhfmaDETJWnBRwXa6Ct4iJJZ8wSGm3yH7y2kBUPVkMTuLUk9hJoMEG2noP3HRrnpkipgQbhJeXya",
  "key39": "S5a6RYpFgAKq5afpWPzY6p1jkWon4UVA1q67U6juJPuhtLqwYKe9k6aCycG5gHtM1dLDSNTuDryLdkrpJSyBQ4X",
  "key40": "569UvBq4WkttcKK89Bm5P8CWhcbbKPGZ9L8ZdU5DkCH2UGronePFHwghPKLbUkmxyzJ5rt5KtSsmPJUmtb9ucQok",
  "key41": "3oYQukbKgNMyEhvMbQkh297i9moM3JczCTm9wG9WTYS9jJAwsPM2R2mNiP71cSK6ARxTW9JqCZptdCpi9VaPwhQn",
  "key42": "LmwKrcXp6xqmch9PyDZMPPyVaHxAvK7zCWzcpwVbskafHxvmBSisGMddHTqEY6264w8Vu4XQsPexWQKyy8oNm73"
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

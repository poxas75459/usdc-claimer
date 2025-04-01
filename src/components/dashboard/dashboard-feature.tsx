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
    "4hs2i8DMN6CrphhRMUoxibpLgTdWMqvA4Y7vFJUSM2NY65Y8FawqZJrw8KQ2QpqKcUFPZs8j1ygV1xJw8E5ykbDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfDmJ2N1UkckoSKvtvCEJ5GZ9h4TDH7DntSsc17pKdyUBrzLhsH7k1LvRtBwq2yLjT9Vry2Sw81vggtJW8pBET4",
  "key1": "6osvs2JvJ6LvwKgUbWvgSYU94KiPv4Cra17hTF3m5zZwRNCEP6eX1oXbP5Y3MZqzpH1FGayUftsrxKz3wDTKT6h",
  "key2": "bTNdSSDZ9Axk7okHK5qCfEgGigNFJog6fH8VEFEaqRGCuXgwBoBoe4RLjsCPPSir7Xzi3sWbQVE8yJuxUzFEt1P",
  "key3": "3SfWvBZZQTMeaftSgHimRQto2adas1vNM9s1HvVV5RC8eHNzEA9oGQznuitJrg9E8JfTDqcCSs6JxDHzZTmKyuAh",
  "key4": "4q988Lo5Zxih9zjNR24v13oXvfujCqvdf24o8bYU6U2ZPPVu2DvcD6HwFNHmXtw2Yvx811Zw7YW39YLwb4KgsvBc",
  "key5": "Q8bsYWJGdqVDaLbsaazxzrGtG5mFkqi1aidAcdXg5dwJHP4WsdivezG7Zwo6jnAerckCZocUmG4iBmpy1kkjtp7",
  "key6": "5YBe7Ej9ufRZzaUNJwr6vTfD56teZVEZujG5GFa6zepWcP5Rg56XVKyCsowTjw4BmFyUPtBj4wEXipezb9CnzMU",
  "key7": "4ugyV886oK8N8A5M1WgzoSwKANZx7fnP3Bwfo3uj8pDU5oJ4PufoNmm6Y4XTKJryYLTNpgEnutBVcQnBK8N4AkFK",
  "key8": "2TutXfT5XsxYsVdMykdbiq7VovgtJHGetdT81snXPHhkQceTn1de3jLyAwei25D9ZugTBxCHdTRmXACa2xtVZbeh",
  "key9": "2g5XtPZDWLe7N3zDa89f9ZX6qUEMEXe1NPUdRGU1Hvn8kaUAwW1d1TbQPbXed8obxzs5wG5PURxviTWStyTgmQBS",
  "key10": "2NPHUmX32ou3vCzNTdtzfSdHCrWxHEgkmrYEQiH2Z92ggezHSaRBmhTL91gca2sgLw4mEcy28Dmu9DnBGkuvTjuR",
  "key11": "3ho5D5dmdFY4GEukUTwbgoyKxZPYDc1Pv7XqQ3ya3rfgFWyz4gEpdgkCm13eVV7goDXX9HzC5RXLBVj39w2GKucK",
  "key12": "3MXBHwBeX5dUMtSJqpTSpYR38ujS4U8MGgXPqThuwBuXpNrYpuxBiSegQ8E5RnXwqDEng5Q7RqUYzjwLPje3pVVW",
  "key13": "4dchrLciDgWi85NwQfsBhtjPDVzZ7WUVSRtUtwjk8fZHqNTHmiJrmAaxPEitw2Y2RioH6EtF4nuhmKgureg8p3fy",
  "key14": "nFiJxT8erxnuSonDXmLVwtD7gRbDP3KSWZc9HVi72LXSeBbpsVtAj2qdGqjJCpK8RoeDv9HLt7qQ4c8DKeDnqxF",
  "key15": "25eay5xfPWhFYRikXtR5FBzaTsGgwJZmMrHCjoBnwuLccgcKfLt5WbbSVpyzBHzEUyf4HW7SGiuwABNhbhopEYrd",
  "key16": "3qNWWYTvKim9Q2JwWrKaWN1tJ6eZ11rqrt6tCgpSYYupPD7qLjUk2RPMpkCaz9zYX1T9MZCqMgWFr8q4Fr5VY8FL",
  "key17": "4V4BTNLmUnpbhHoYwyN7VLYzPFKahJxukjcB1NDQxSxDSFZSU9KTJXEG4ZL5ANH9Q38v4Cssydmye3YsS3cb61SE",
  "key18": "3bYFR9BozNScANhVoauMJbVTjg9AfAG7SWFXqas3acv7k8ebfU57FeD9yyTb1gonvhetgry7oqfLDVNZfuRnXg7k",
  "key19": "4kwaafo2gGNvQnWR5aJY8w8EzsvReFJ1BLXDi7rYDeq3Fgh1jZBKDAhDJpeiQtrzhi5BqdfGyR6EWN8f9FFtiXq3",
  "key20": "4wPcHurG757JpMVgrPUZ6j8qRdMZKYHbM8zrcWpzTkPCq6eYgbro75dAXMRGF2DFUQKkBRz9T5DntiMHEDBEbPuN",
  "key21": "3tizSoh5C6d7LtkiRwXq1rsvfd24SToYUM6P9rdXuDNSF9K3V5zmFQW7kjgPfg392qnWd5JuWhtqjcJpWb9zid1L",
  "key22": "3mz66VTjB6Mpa9kZWo4asB6paWUPFJyLFgKav553xKTsRbw5fzX2Fs6suuY9hPb3ZMGwuDLecuqPHpVeoB95Rbzg",
  "key23": "61kTkGakjqFSxQKQZ2GGgtTjqxDR3DS76VbypLd2yHRK95zamYrdLZ5kjX7VEUvNqLhgVM1dvhg12CVDH5Lg4pcb",
  "key24": "2f1zAMWwiKk6uzWM5NbUg3geCSy5oSTXEQ8QdZHSzUMqfjSThyizm8xjs5ZJNdMYqLo7XUEA2ouB3x1qgZsHZGYA",
  "key25": "3XvwYWtW4EmGHW6ZvMquV54fDsNpMiFFF8oKVyBgGYvDZP8PFSKExbikYWxjMuXr7nH6cv54mbWaKgfGN9MEhpQF",
  "key26": "2LE9M9XT4yKbZnDJ4fiAvZ56qcpaSPoPj3h4oFYVbqXfSrGhYxqhAb3yZSRGbhNJ4qQwk8873HL4fhNwtAKdyHvV",
  "key27": "2TSU99aumZrCw5c5VX2noFmSnk2bAUZa98LcMw2tTjHvyEVoxm3ddk4ZoQYUpUzFVt1CHtuH1DiN3fy8pDTxvSFM",
  "key28": "nC7BKNDJc3zcoMXvQ2NJMuDA4AtQXMWCyf42decJzyFqn9shBeLV7Xo7sabxYup2Hyzj5DcpRkvSteJ4Urfvf7Q",
  "key29": "J8VZoxzccpkkx9YiXJ6Cc6iWTpBGqPp4ojRKUx4zHDiL1rzxT6kHwMjH6hPzCXvwAoo6MgZK9UrjWr85rSVrJ1c",
  "key30": "5Gz1KnbSBzVsgGn7cNRn8iD2LaSv9F4jz5t195WTh2ecTRjCfyXfsfrQsieLzyENxGqXBMT8ww6vYM5WyyXp315x",
  "key31": "4KGFqjA4SmwZBHeJYMj7SCYW1Wz1JKckDfjxw2YpVivKM2DmnQvYNUuwtFh4EBbAN1eSUxzbSBwUXZsnVNBn4CAg",
  "key32": "3BDFcK95FfZGfUvr6Ar2s7SV3ygmLKsBqTuHh3ZpaLvYhariKSJ6dpEVXzSkheRUwy4Qe2gNwXKskjcjyJv1Habg",
  "key33": "uNNwuHQqgdcp8bH9PkLpiJbVbmWDkB7Eiw5VaPZ7898B8hkRySD4hxpHRzH4p9gYg2Ah6FYZV5uziejzmRLWLbz",
  "key34": "Kiy5ti9LY5GRHNxXEYqV2gi8tFZEuDvCkCQFfBuptJjBSC2vnovCLnYKq3zyZPabncRR5sHhKVHQsFXeFzUDAjQ",
  "key35": "5VBT5sMVWzzKEHdJUk1Y7AufqhZfYrhotutq5scdVqb2RwXdYcqDUP1SsmQsYsYZxh3zaecnL7fwPRdhYmLcmo6E",
  "key36": "X57Z9MNSRpxCgSkRcXxKiWuAdyccqbASzw9QEbujYKNGpHbwuoBHTkXyJukq4JnSqgEuZT6GtFDHQahNcURAiRe",
  "key37": "42KDbewTuXb8fxqoMwGi7ZM3yB6wamarMFe15d6En5eWszXsWxMgb4AgzAPpde1w6Yq8bhg2gSfaGyAknxieqRP5",
  "key38": "3D7LwaubYid1BdMqnZm3Nr2KcYjVLsitYGTZGbwuTaRYTZb1sTgx8qAzp65nynrvfLgbWQd7238UTo6VxDE16HEo",
  "key39": "2wGjta8bdWwXnswsebDKbu3tjGgXRp89B2Q61a9uuDbv8GpEvQNX26M5bz9a4rtwSqAg5tUkDhS8i9mGvsdfbk7V",
  "key40": "3Qza9pe3YGgQb2Ew6Ny7iLyuPKVNnxVspLna1JkrmFiCRXx9vFzXLz6wqYiAfS7g3Fp3dQPNmmzkRv3ubjzQhqez"
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

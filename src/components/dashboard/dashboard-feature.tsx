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
    "3KLdLkM3NwMsZaeiW6Si1RtwiWh8HCEHY7kBgsJozqxwGbT7rTfxqBktvipKZuBm6ME39s3tXwfZERo5vJZvF36n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkvPdQDtoLD3BUSzyDGPsQvVUHA2H2GGGWqX12eCKEScz4Dhw1XjxRHcNwmYJbJaJhZAew5HcJhkYWjH93wgNde",
  "key1": "4ho8dCjxTTQg7M4p6MdQuJrEQA3rzQFBdkB2Thp97K176T2Mk6eDAKKvFSRMeDseQYhytrUbhneNRfD4u8B2MNKk",
  "key2": "3pRagg3vsN7r3CrrkqZdhEkYS6p8JQA6Ai7Z4xMwpiLr8kojHqwQASBxKUtVjVfpmWunaV5ztXKemux7gU6fLrU5",
  "key3": "2EuoDFMc68zunpQkpaCXRc5mqLstpMkExN9mZgHKoTVPgyhfT7AKU4dR7kBhW2NdhQnmM9X4hWnZE3SbFDciN9f5",
  "key4": "T5euACazWC7ycnpToE7WQPTsJPDgGiohSjHRrBpq4PRTHiec7uLeR4JbECLdei9NWpitZJyGuE1HxEbcev8inZM",
  "key5": "61WinHWMkim4het1zyNZQc5foKG3j8KJ5M4wZ7YohuZm2FudUk36oz8wBexp6Qcs5yKJAGsbGYBgxTK5PFpJ5FKj",
  "key6": "2miTzM45Dhagj8XVNB1dFqjVcokjYUhv4dXYDTNx3pGpGaYc8Q3FNpyZLBnksgNUU8jMSkptB2FD8zV8TEQZqWWQ",
  "key7": "2d4Ef3aTsMH6XZi8dCTo2X6CZRmymaDYH7JtATkb5cdh8dJyC9sfwJv3ceim3YmgWpJNwqjaUUDDVE3xjXwTQPzW",
  "key8": "5wGDpTMJanjjcidJ15QbSuARzjr5togd6BTMoFheJWJLQhf2D8TDL7zm43Y2FVH2jPUkwfzxFvPsQxa7P8Dfp67w",
  "key9": "3d7GkowjPRWWirgL7qeWgduRN6HUnQ9rnCo8RaU8QfcYXJsuzBtigzTmGvXPbkoX1ikedotboLZLGBCvJ4jZnZsa",
  "key10": "5hsGtj9fqpX9RCrKQ4xiJi8t1vznNE3MLfHvPMCYvfG121xftodfwK1zLmfEojhMTQao4GGATyNnZUyRm1S1oXGz",
  "key11": "3ZA8X8Xik2PLkHs1VZPn9EmJBQ555t64uYbaopZX1vFfj8NucWHoUQspeWJEbcaSSvcg7u4nHCXRczz78cKZr9Gz",
  "key12": "2GHfwHLMkAYVX2u21WPwgrKzjwC8FYvphrVkv7g6hT8XjwYPuLGhQzsYovjvYnkeJRYjZEDYd4VtgCXiLNPTiQGx",
  "key13": "9ADaLT4vuFDBGHNHfkYSxaycAq2nzUfpWQwsWdLHznnJM9LXcQd4mNg9C5NMZ9Ev4GuXtXMexHA9b965s8Sk688",
  "key14": "3JwYyBEPQYtowWFyZbHqRcy8dsFzhr8fiUvUB8pE3cddrREXpp7k1rDgRY5WHJ8frV1Je3FiScrKDaXja3GJHVYa",
  "key15": "4Q3a1RxigcAvcq2BfU8qL5JFc5cpdQrgohKmdv1Qw44RfuNkKcKTkAs3FG7qnmSQMiv92QzYtH4ns6YXvSm17xvu",
  "key16": "2WZwWGNKDL2CKHYU93kADiGPt1XgCNzoAiBb6EofzFp5M3sfZ7AGj3LgX9kWVmsiyaVQCNKNx3ivYcYLJ2odCt9V",
  "key17": "4rbpaqtFnZdWPVw5odYarZPq8WNnmLSKuqD3TudBHDurwFKBKr3HCeQKexwwzydNQMgHGPQUzWsPdXUh6pViknrx",
  "key18": "59iF7kGL8KFmHYxGL6fYubmRFyVSa3VxChuZer9XW6DRG8MYibcoRYmp7a9p4pW8FvXcqSTvPkLirN28LvktGkqe",
  "key19": "5a8k4jJs4EkRwrQuwX1s8ZQizMZeUTVPDZ96r52iRm54wAmTNP1CHqQLjFfVeM6Ut4xHeCFsvSAUD3wk6PPNJqeD",
  "key20": "FiygRxk7h1vr6hYwUWd3ANyyznp3cpgLcEmJeUbWc9fZ8WjfWdkb3gYcw4CXgTkVDbShxxvMc6tzbnmyorxrh3h",
  "key21": "4A7rdicKNsntgErZJpHe7Rskj8dS3E8drkwaKSLpBXJT8uhufnbMpGDc4gBojmcnxZkxTJhhskPLHWA4ALSALg93",
  "key22": "4EJGwsq9fqDsGKUndUzyLfUv5EmAi9GaQD4nKu5FxWbmshAEomFTWf9DBW34UQELzntEyoet8m5SRLwtFArDp4Fm",
  "key23": "4qTu6iwcoaR8SXKCQ6bd7xPwmS5udJj7D1pAEmjN1ZyCP6YnbL4PFYu81FCjKU4n6eMyhb5aFiGbWvENaS8e3Yc3",
  "key24": "XByQTgKsG9TCnPSm4zyeBtin6KdCNpCbzZTnX7B2Qz2ctcA9dNNnnw3uYUDiJnNJdgencctGvGCD9YEUAREaXm1",
  "key25": "3SyhVr7GVSVdhNbWhYpSz7jfWUMStQzH4NSFADJmZmogKQokkXTn7y14qBVsHEJQeBHEEFjUC2nGrTzf5ge1vucP",
  "key26": "xi5LZmszYaRY3Gvs1VKVswewjGc2ys6CSKyvvMfuGfBkSkyYKj5k2iWBqRQPd9azRwortqsiH3Adh19zSZG8s2X",
  "key27": "tebVTF43N4hYTGEsBwZPDYzJM32DDZyPbCNxxY4NzjaPcfCZfqkvuCHg9q4MrN1E9k6R1GHub1h5hstQpj1qLa3",
  "key28": "zYUyG52a9obY73Q2j2eGBx7R5aH8AMGPVyemw88Y9RQTqxtnoi6AWfneTy1KZtcpyqJj93eQdeADi1ddTNQZbam",
  "key29": "2111gZrWQMvzzswsyvn2ryHh3KqpqZ3vnwE32jPRgwAv1rsHUEg8rUsBC1P9KSCA5nvW7Qvbi3gxpgTG4v1662fc",
  "key30": "CPjHTXHFpFd3LhDQGPMXQYtjFQydoso5iJXNvSi1VYbjUcv2ePKJrgbPdAwbanvkmoKhdzXs3pTseZs27Nb5Z3L",
  "key31": "4XBn3Tq6uBNcvvoCSjKBzxmu1HncvyLFjppYdK6xhDKnEBJH1CpJZLyFQEPNf4DT9nZZ7dGZvNvEMCkkq6nSd69b",
  "key32": "6Kwch9DESNWoxLPMpQ4787bXEseeJ9tbTzowP4vDGCsWUtcWUruD6r6yUaHVvcwd6JcA8rWD3YrPVkpx3DPETBZ",
  "key33": "2oeiSHfrkLRFojZnEbqEZQ1S9HXjGCgGBwJr4THz46QuBaUUfvujgiXSRaLo2wTcMcsw13GpyQJKBnyocktfA3y4",
  "key34": "2PJ74om55eaP2b9jECCcFvtShBqgKkEzJkbEAPPNyTaJd3q4Yw5Bv4ijp8GcV4B82VSzKbFo2HzzLz3dTEsjQRw6",
  "key35": "5CXc22JSucwusX189pb41RXsRUs9FsQ46Y2dWCkykwnsGy4itQLbeD5RPwt2y8pQm4CgD237KLQUyH3N3p5J6FHJ",
  "key36": "66QXozSBe6oTSHaQArWTMGsipa9tgHtTapsMj9Eb3R575btabZKWtQiqd2LEpdgTSyatHEScmFfeq7jhbNKzsfQ4",
  "key37": "pvp8PySmWpR4SYwHrPKoedkdKqUbQvRAGSZ82NEHQnpLfJxW2sKVDZULq8oCzdzfT3TCdG2cjixUizWbNHtiG25",
  "key38": "4xTm3toTJCFwxgWzNfXYz9FbcKAEjd6bbyeGFbvVYgCo45ZAmZtgBdHdWwqgvUp9DY6mekKsR6xUZ4E3VhCfyyhL",
  "key39": "5rXgpiw7Emcs822P3HTNNFghsEydx4ek3UWgotyr85ELpxLuNdnuDZ7h61i9tm7p346xjUwF2Fumg3ZpDiaUgqaf",
  "key40": "2JyvXmqyNDWHeJvuhv5V5YHDjDAq5hPN6VQnMbH1UFrag31CxWZURgGPPu92Md49M2Coi2tyC322ZwU2vczPTuqe",
  "key41": "3ZrXajY7oJ2SeYzmXPQXFup8zgfMNQNfdEo1j3ov56MEZ6SBtp2ahWyaULGUwRYC4ZQtHy9P3oV2wLmBtrfQarTf",
  "key42": "5LGxFxyHDT4caim1kaDin47bG6HAcaAobZ9sCiWDyv3bGqyyGBM97tHDy6r7hAjG2gMG6fY6o7s9ZH1urEGMFQLi",
  "key43": "3FNrP9JU2cTrWLK2HdRbEDnskXVGgnZX4KAGd94Mt8CV52U36jzAZJyt9k5BSddDTySBnVe1NE8Gdv4rYXyStrgz",
  "key44": "46Ls4nQJJzL5FTAKRrQSZ5PeWo2JmvuEAGUxQ7bPkUfoLXVsJjobWz9yeoPHTgttDyyvBFeFJWvFhySngCcfdpj2",
  "key45": "4DK7yZE7FFh7Yx7q8wgbV93f3tHYpdeVuBHiK5CNCrTHzc3tCbGDc7KRoD15wZsfChpELXiAdGda2TMrHXaCyCCU",
  "key46": "54PPHFEo6enk9XEUZxQX5skLXVBTDFr7SRAwoVVZqw9wubgb6pu4iQdmw8Gjj5hEZWgALxzhpgusaCFAbKVKNcAV",
  "key47": "8ZKCQtmEkCcHxSjE5hJmgX3tnKwQZuGjsszMahvvLCTAvHtaGqPFWL5r4irzsVhCVzj5bhc49RjkdefFW4CZoWa"
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

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
    "66BgX9ddcvWCdgH2eR9zAP5AokXKbZPPf6VuyvFnF89cDqYWq9jrgUDvTekDi6GviPiX7sjR4tjVxFh4DTaa8WVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2itgjAeNdj7bTTKj95diTLMLqLweArKiyssXNbMfsXiFfgv1AphBfRSXwmrf652LyeHKiVfLNUdziP8h45cFQtqT",
  "key1": "2zX1ekY5mz75tr39bbeTJSNeEm5qJahpnm8bM1NfiEgqaWpzYqSYsteM5MW9dvvDzTgSm5rtAdsxQp8mdvP4mrav",
  "key2": "MnHDMefieL6RvocUFSPbDAUhHpXriY9coxWG8EoxD884G9zeiUHQT8JaQhdYp5ykmxqJ9hFZNP9RgfHGp3RwYYe",
  "key3": "5UjHUbuLcPhhxAdoz8VWDwDRmZYh3yRGgKrzkcCdooscPzxN2LpMeSpwer7oSJiLS4NDCsQqtXR9BB7cmD3kEn2c",
  "key4": "59Lstz8nR6c9XQDkV28AftKxHcfFdMvrWHPNZ259szvUuT29JRvaAruYsdqa9qJKnXKZnPF7B7zS67c96EEvVswm",
  "key5": "4TDZSBP2HexJoWmXk75vVoEoFK6Ms9AzjsVBpiy4N8Du19YFah6Tkve7VBvD8XCHsSxVo7mxkx2MEfQMU73goje5",
  "key6": "b1Qtk5j572v6D8cMzvwssmbuZySEg1D5DV2kFqDRfgWftziCFQUDVASxPJeofmKkXR2qvjqucBhFY61iuBcENcn",
  "key7": "1vQhzEps84KmNjVw47oNitfCcpSXk1MdyHGhmMCp9E5HNvKbGpokkRYx4RoSkDJJLWa19z1QXb8DTEqHorU6q76",
  "key8": "CAqmEq57yesTi228dfNLNehRaMjXg5VovRnGm5XAGsTDUm9kw1qvsRW1U3wEVcbKcBFqjstzg4mDLXp8Aa2AMBF",
  "key9": "4MLzGDP4XpPJ2YSgXvr22FvRLmbnXqUSgD8NG32ewC42zhjfZdFpdF6iG5qUMAmMP4Za6nNv3srrmubVLZLYAyiU",
  "key10": "4ApyiUXX3VCVui4fk7nR9ZXqin8kwnYy1Rrx9qQ9CSwXUNUUDFj91Yb6ozFhgPGYFNg8MiGP3BbXSf78uRZYHrgy",
  "key11": "48kdGPYo86pyuTC666xAgsmaDYjW1CP4Ld46SfHsj2t1ii1LUAgberX5GxPSVzugM3sXgQxi2kAnLiLNJapuazgT",
  "key12": "349AaVDxa7iX37HtULKNHxMFu6Q35kXnqCBJZ4D2acvvbyGmKGTZxueHNXkaFATHLLarhupEpN1fqjMRUuNrnq8C",
  "key13": "YUHPErn8pQrm7cqKYLpiRm6rzpqiX5GZra71PGH5ARuqHGJDjZn8uF15vxvbqgxXT2xYeenD6TjXbGV1LEw496w",
  "key14": "4DgyFWYj11qsN75AuRUD33divvhhUoa4ddX57NBzng3a4YP5Xf32xkRqHKNCpYt1PRhuQFgbrtGvzDacm7R4YyNo",
  "key15": "3kWu9XgTkDeBNSe96qz8Agk9gstMzqfaK536CpPaAeBsiyQRA4g6GRXZWdmo1KP6PuGNCkXNfc6XgNpk86n4yNFE",
  "key16": "3zKGihhLrDZ8G2rsmeZzLW3yY1q3KySCtF8xNRiox6MREiv4PUkT867u66SZ7G8WjnA1n7w84NxrbT1AFgL7ccV",
  "key17": "2sgpD9f37F5tn3bzfB2LaMSo9nC6kcufzN5r6T1BXFZjbTdEG2BeoN46TRopuj85fvjnKmZ1pTDATvcjrWkWdTfw",
  "key18": "4Bgc6X9ZZFn8f1jscZ9bgRc8rYow7R8KHbymqVhjpqwYZin6dUTBgrNFD2GyQ7Frutp3tKvGkYj7nGRNEfGoMmL2",
  "key19": "4JMqkb7gs3xE5UbBzCp44QU6e8bmZABZhCdJUZRAFH6NY7ZgQ9N2kAVN1eQA16bbXzGte8v5yBMBrA5TuPDVh4X5",
  "key20": "2m1ocxrHDJeX7AQ3EDDZRreKUYZLH528mPQWN2ymx656QfoCrrQ6nLP7Cfza34gMPoMVLsRUqDosXfrJuvwG5qDM",
  "key21": "3h9GksbicDeayBGwfQqRygQHFJq7hbNqQ94C4CE8VA4G75wzrSpbTwYcAADFHkdCZT3khL63VewowNmXVS7c8CdF",
  "key22": "4f3SA5AqXGS9NtLcE3y7RxeMGvPc1PeJAnBh3FZZy8CKJDosAQcEvNEJM1jkkxR8e9f7bgSZAbVYmsVvfG9fipVK",
  "key23": "5YAZdp3SKPQDdHi972RC6rxYaDMznz49iXxtjKKeVhHeFQUjf1Cqv3QpQJP8AsBm8ap1ABnRQT4GMXhckZ9NKcDr",
  "key24": "3LTrRAVDaBqF4Q5uPTZHdRMsAbvMFKnxrUxfw6zRyMYzFqywaurBekTHUAT4tTJVciz4Bf97dRhd5bdNaWxz3Qhk",
  "key25": "66TrPs1S9zMwBYAP6W2dajHtbtxjLfT3AKzcqJEMyuyQtbughPaaP2PacuiTYQDV4HeNxJwg95vMw2V5Lrh4QqEb",
  "key26": "4Hqf5iyCFXJTDHA4cmntR3vPNLUSVR8XrKDDU8NSQkNu415zR3gizTtbTeTkTfhcKjQd1Kodty1Vek6yHp7jGqxv",
  "key27": "ZiiLJeARSijW7cbwpLznHZn6koGkrL6fmADBWZTr3pBGPJiCBp8ch9pMgJej5EUaBN6n5iPPHH3AyJ3UtLn82TV",
  "key28": "28RgB8nptao1jYxggx1rR5Ec4zsnp1PrBWR7kJ2iDey9TQWvTpShV9ZDK9gFc7nBvyoHXPDQHtAc4XrvP4m8WbM5",
  "key29": "423naLh6qhH2PapJqNJ5Tfk7aUytNWwRR7UtwdN5E4uGY4WysKnoA8FxVFNyhPmPx54dpigxxQdrn9iPp4fLYHvy",
  "key30": "5dUFc92ZZRe1CU6BMv8d3FBjxXL6crJxgAp9B23dU7SFuHg6Ayc1GqAAan7xfYtPRuxVyDfXzcyhENk7XheYLBrE",
  "key31": "28jabErAdb1VpwVVvdrpoXnKUTzSQSGxKeh9t6zPGv2JDKBaV4cMtKWqxmtkyj1CZnvDuPA3UDFQ2Qa5asa1Vuod",
  "key32": "2s4YW8x5PhaA6mjKsR6G4A2EszaKwsNbVk6d5d9c9TnCqXDJbKjy3SsLqNhJdmP7HU7ZjgbfSthB2FDZXS6WNGAr",
  "key33": "4mQ4tSdiJVZtMkMMP3ksWDk1XWqVJdFFYzAGj5nGnPbqhADK9PyBJPphJpEv3dn4jiPNZJiEgZ2SssX46kaQUt9Q",
  "key34": "4ZpmwRxUmjNL7cNMYbWcif2rcUk5JL1Cp6Hh7SKVjBwdJhWDUtQjwhESQgcfxWU1YekDyAFtKm8KgS5XUa9d34Zz",
  "key35": "M9CDVEkwXd8NvAhQQxw5zETfau9BhGqnH88Ye3ttoxvR5oDzbMTihsriat4BtBACJjmiyLriFGSdUY3uHuhT3AJ",
  "key36": "4cgyiT2bGyfKnJEQsn8voAa9cJnkAitKGA4XXPZak8CrCSPi91dKdK3qXATDH8Ra53fJCVgRqRysSB21Zi76hTjj",
  "key37": "55A3BunrUEBy2fhWXM6d5SyEbNRKYsj49daTZWZ9785pSXUNG6wBgm1guicBavJVyJdtFsEgQNEp1v1C76chyPGt",
  "key38": "55r2XseB3wZQX17xapzjthKjyAzi4rgRfUZvbKwyL68n22cg3wEuuZ5XESw4PKFavcdjH5NqafttA4qK8cK71TrK",
  "key39": "2xZD3m2pg8jBXir1tTk7HqsyRJGBtppzpezmm5aDf4Ja9D9BjJq5Q7U4SdxCQk1gnPQJoyU7x6RaUyFuZBBiKZdp",
  "key40": "4EJ48R5tFXwi9ehVSygrz3aJFz6chexEuZPiChsCZibdNhJhtHcrbUY3tawvVSZwtbJ65DJy5s44mEMZGwa1vkwt",
  "key41": "4ArzTVa64GgFDxnJmUZqhU2XzuPVTgxvxDXp7Zh7bS1WW2brCJpeRWD4wewmBRk8vJmAcEHfqitbD8dpwwHPqFEh",
  "key42": "4DB8jBABfxepU9xWaHDLwws7UF33hVcWkAsSPKNvcceCjrxbYEmPSwg821sEnhvSX3eY2fSStq6d5cZAvrpRT3vx",
  "key43": "2hacBtuWjnM6rvFQWCcUHmifuZKJBDnZhARoud3dYAtcrKQDeqXpFffSbsY6uXzyATykcjwWXz3aHwk1BZWTuQkM",
  "key44": "3dh9nMGe523gm5mPvLyj8Ybd36p3X6iNNiRUSuqA58ZNz7VvfET8f14MhRsEBwd3eEKcuY7tj5jaSnMGJM8kWeqG",
  "key45": "58UsWowej8qkwrK9JD8AQUqR21YBqidtKrQSaMBdnXMCEiYCQh66SxcXdvUB59rPk7noTkrfNsNkJsLovwV9qEdi",
  "key46": "3gBJugV4bv7UYUP9NEPmxM9YLq2FV48BBFMxh5jjfJfyJ7BHW6j9AyridS8bBnVpGAYa6JTn1R5FSquTcwWT8ski",
  "key47": "3MTe7ypn1EC1VxgNzq12JB5EFaNt5smHDdFiMLnt7VbGAtQupFtZrTtFvjCKKSMnPPm3g79Ljk5eob8VET6SNxwS",
  "key48": "3RHyJPmGz4QtKwRoLVF5FTCWyie6YN2S42GKfXnfwXbHZH7VyXSQPjnXqCqsVUfMsmjAefh1djz2AnjJcJY4kyEf",
  "key49": "uJduwHFbEyG9Ffu2tjikFw7zGZ3WU6B4exiNRLiCJMywmi3PQ2NvXsFvEeNU2vkNxJPtfooxjtRnZjFaMmox2sk"
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

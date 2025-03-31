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
    "2jnJorB8iEc7ihh6oScX142hNLbxXzL7DXscA3oh5QecYK3G1pT9YWvjv6s2psz58cLoDHUdcCy45JSHsiMH4Pmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sqz1FHbwEpCRmSMP3rdZSxnaCC4Gj41i31mWwZeXvmcZGrTRqrsy5g6cmsBrfLPa8PkxMoyTmfCEoVQJUNKxf1D",
  "key1": "3qiu5NDj6Vdmrg7Q4a7Tqt4aC9waTBfQWJ73X4F8DRtHxkAroA2BqJ5pXUT81HBV7a4f5kTugzGxX48ALuW6ixve",
  "key2": "5PdevT8TWUF3dLsxv9jYS5G8cimUdezFL8gpcTuEotdee9pNFVsnAvScS95YdrUL4bFd1Qz3GzC9DQXaAPxyJdHA",
  "key3": "38biNRyQfWU66DihELt7Z4Zu4xd7jcyamDUDEn1BiKrttVvhyksRyH1ym3C6H8QBJ37Coxaff86HFwRjof2w9HFR",
  "key4": "5xRM246k2YHCbjC3ULcfi33VZmBJFwvoi9ZHVSi4Lc982H5yX59fFxQKCnUxudHu48npNHEzjr7P9LdsJyLDcjBb",
  "key5": "5A16LtoeYV5JjD8tFhKwDizc8qJMCr4EzG1pqdUmRxSPX1xezuLeMGJ3JWReoA8PiaC1q7FrH6qPiJudXst3DxeY",
  "key6": "Yw6kJ4H8iW516iTzk3PogGPx52BFbkqhcfH77jL33Vg1bbtTyH42VVdoRuv7xuffsqgQ8YzSDVvzHBgmpS9MKiH",
  "key7": "5fDJjid6yRCZGHiFZyCQG6MvG2rBaYw2iqSkc85wYZZMFnqKGKKmJ5sVApHBFJxBxFQMmAJ2gpuMH3FabkAgJ4tg",
  "key8": "4TfLUbeiRWmzwYKdNGu9ngF7nu6f4DQzADQ3Ai8GizFmCyFrWsce5cBxv2GqP6dFPBZ5HDBGMSf5bqiCVhVDmnJo",
  "key9": "5agi45sqftrgr4nr5NXCX5knh1Ew3eG6MEmeEN3bDDxneVHfP8AggSqZcwfqL8w1GhCcmpeMmwFYMsv771ndCiw3",
  "key10": "4L5fCBRjANUi22DSBfdHAjUL6aTELnoG2UxR8y9gGnjAM5F5WNNr6VAsZGEKGTfx7LoKHYSxU4kzPGgQAXJ6wGij",
  "key11": "2KjQsc8ghHb9Yq48GofbrJA59mZ4qE8PskFL3Sudjt2wDnyHthALpWGpDzwNASmTDyb44EZneGEuRoNZDSBzS7ET",
  "key12": "5hxexTyVPXU3ZWQ3onKwDjErENXRa8FPSRat8mxAm2AfRF5MWAX4GYtuh8gPMP1wqLF5ZQP6QBkvUfLSzRMzAEsN",
  "key13": "34o1iDdnAaqAFYzWnR4ZpfKL7FySD9jteLerh8Eqr9S6hVAXjwC5xZAqh9xNo8BLpqtjzetMTH3P8GtVYjRGZwXK",
  "key14": "5MRpJbWcd4Jg121ELTqDh3vATfCXZSbCkxkPAGmXQDfURLg1pQMf6Cj7CekDjj8Li91t5tjeBEeUepcjMx5tjsP9",
  "key15": "3h8Gd8CvdEGg2yRmFVdEMhYDCtc7wKzkZpgDuP25eFkUyY6dKvj7kqVt2jYmXxCVeRyfWPFqziPSiNKJHDqC7NCc",
  "key16": "5CXTnRhHr3hNs5RVT6B7rSZ4Nn9F9xe3EuYQAj5NqT2MUyg1dL363U1VvfqstNwFrng9Zy85xFKaNmrUiau4EhkG",
  "key17": "2ifozn5pm3STLWqvCi7beZH81Wz1xg647B3z6cceP5KH1FbDvqfR1RweahggGBzosG9zqBjkUwZEZnqZhvzP4k4U",
  "key18": "N5uSgjWAviLpaDSX4GXWpYKbUG3a3UBRQVmtTaGK78SENfkXx8datDHm6Fqfw5iBsVFXfxdRUdpNhk3DZjurW9t",
  "key19": "fFJV1ZT5ePovjuYtPzQZgz83ZkQ8XSYqhSZfdhmtoiHPKA6tQosmW2C4HR1oSqdXyJN8DxRZy7kNotxdHRbRSoV",
  "key20": "3xrkko1QKyMVyMp54SmY3NP7ngkVmp4nemj2ATm9rw7iSZgLzizEfxXxX7KjGtxbK4okLGHDyQwpay1WuAjPimMz",
  "key21": "58ZbENXMW8KXpzNzxJDSYaNeZPVg8kf97EcgoywTKD6t5ZunaZJCPKNP25XWP1Kzco5TDMiHXbi1JjGdCX5UepWD",
  "key22": "5Ck7Rc6yJdvqqwqGkrR7qLdSEyUCxja5fNjZ39dgt8jtCEMnUuRWDWikJ6cnYEiZyyQzcyQ49CSsYWWWfKnmpJ7s",
  "key23": "5xzJGcaY1rK17LAHQRyacrPgAW3g9avBrCWS7XeYFGxttKVzSGasfrV9c1DsvfidUS2BtQy4ppDJm6wdHAPtk7KB",
  "key24": "34nbKeVhfoRTN5jRMREBkBrjGn8P1Q9y2kyGRJoaKQqmxBeuwWT96AghKucNNj1Nyfxje1L7CN4neSCFvWE5J6Tj",
  "key25": "UEHC1XULmqJ5adp211NWtzoLmMj81kHLYV798JNzVfYWuK3nnRm2jhi5u8gQRiedL5tVb84sF24hT6vvoBC3xht",
  "key26": "48TgvF9N6Esc1yiqvdvvnfxc2FUcCxYnjBmDtdaS49sJDgPMnDY7QNoi2JfGrfXhGR5Ts1Ay11HWQPrnC83LpTTU",
  "key27": "5NJC6sKrE6Bbc8C9F163gyspNWogMUHXAnJeqZJFGcY2bS5AZ2DGzwFZd53DbDchYFVHsLAQ8vXFyW4RV1fvmK4T",
  "key28": "4SVwdNLmPDjRvxoenSEuRfUtGhL9usp5CBPePaqvNKsvzyTWATyyksHM1vBhB6L1Xr2qXzE52WGRjiDsmoCnRYhx",
  "key29": "58QuPb4RmVnsZpKsJvb7d9pSbFSWZabN9XSCYaeas6aYviaMhzHctPHGgZm63gobJ7FNNuNVSpgySGvg5QSmSqGK",
  "key30": "65DfR1VBCK3FUuMXCTh9ziTUSKYCYm1aMcSsNwC5pouQQJ8m362gSHcUzpC2d9u279XrTaMtAxxCap5Bgd9oXY76",
  "key31": "2wXY7nVcg4P5GVig4RAY1XwgLFaFsEV6jni9Xgs1ih44qPEvSTsnhRaZgu1uRSjwPBh8yjEWdsbUr6h9dsc1U2tR",
  "key32": "5qDKw6Ydh94X7QHziWAdTCaCfAJMaaVTmsFotCk8t7PDm34feC1UkNQaARA3qdhPswaPn1KagcSbU4yY5nSYgaGh",
  "key33": "3nyRkbQLagN6mJ71eB2hZkYHDYfyZDpn73FfNXJDczziSGPStHuHnmb2dExPzrZYrosF3Cj1ZAri88vNpt9xLXqq",
  "key34": "2YKQ3ViX24nL5YQVEiC7EVcBpJrio3VSPKq8Wuk4b58Wbov8mPyApFgrSN3ggwBncsoD1MBHKLKfJ1iZeVba8M3q",
  "key35": "65zcuNGs9ZNGNaf5yymovABkodeStGK3o1EgGFJJaJ6Hrky9TaUs8bH7YzBrBysFPP8Scap74Ux7hmhCMN3Re1nW",
  "key36": "SUAtfn2fZrmx3dG9ySpvnKoAK33nxaU5cA6UxcbRe327PCKC5bjnj9KFFZixdcWJhsew7vXnme45CnG1KuSqNCC",
  "key37": "2D5DiBvkGDBxGNMZAG2kS59ZmttqhyCYy25Fqc3E1oQbE8ryDwk66jzPA4D3JwALdn9ZZvwGe5AL3NFwAXrAU4P",
  "key38": "3GnWtYuevJVMAT5Nc3ZY6MCh6Yu5pr9Y8pgmtGQQ43cBKBukMC1Z6shKkp1GMkoX4sFGR6yUJY22APhogdkFJaKS",
  "key39": "5pRbLDDeZJbPEXtLvEvR8z7PxXndTQirdaH1jUzn8uFepLVgUL5oqcStLyfWiFcvSbBuhT5zNwm8gA47CqjC4AZK",
  "key40": "3bDHdhB6WGpmQAQXhg9vfLxjeyYchceo14tA3deeVx672sfLYJexKktUwxyJsysdNckiBdhCrEY2Y21s7aGYUTLV",
  "key41": "2HrMnDYsexDosSN9FhZNr4cWNKHy3VbPFcX8SckoiGoZbyDuBoH58XztEih6gCPQTrm1nmdLu8UTACzzTpozoWQD"
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

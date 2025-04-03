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
    "DWYQeVxZB6fKDJCsxj8rVhsY9oKaVvqZ1SrQgNofxoeXyNHMSxaLSHi93grJXL2irpYBbhoUVd8hyPBjCJDe5g8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yb58ouwgydycgnFReLtp8KufgZHVZKwTrhiSGzRDzUTEvVhqu55WJGHjcsD62xb4yiMRnfe5nrL9Qdu9uSD49Eb",
  "key1": "5kLENRjmCu2J2U8rGpFfgHJDf4NKGnUFoyvucM1b6dGPcsxfzAk8jyJzpoHSxBpGKP5dU6Uim7ydd5Px5mZR5coC",
  "key2": "2qZkv65skNHv8PX44L6ajKNGrTkKU35v7sDTCUMnB7maEr6cSEUPUqfnBRyjq9QG3nJb2K7LQuNDSo9C7t1ooB3u",
  "key3": "63Yre1NSyv75CEfAMLmHXP3cyJExNMjhDdvLRLcAW2xe3QjhXfRFgM8owXuYswv4rupYttdnfrpw8mRSGACbBXnY",
  "key4": "9U4CZbRo35fRMSrkmaMK8doMBgzbwgxNYi2CjnP4rp4yUpLEg3JYygWg88qnUM2a6tDZMXiFvUNrep7ok3M5PN4",
  "key5": "4XVWXB5LdysX54Ltgqtam5ZF4Am3eqUHa9c5UvQ3a1DgLNC2g9A4KntTygWNr1bTpt2fQwSg36YRAE6rKGtGMp53",
  "key6": "4yKubgxV4J1gEYQgPhGYaSJqux4c1a3gBxNCX7rvAh59F3bKa1p7VTG1NYZcV6ChPXYqSmvg8tpCatpmgPULrUCd",
  "key7": "3wHQKeRvq4thf5xfF4AHhaP6JhREZ9kG1xdhF76bUs5sZVBHavxqDipe1nNwFMzmUTq6MX5e9JeVrtFqhp5ZNXPg",
  "key8": "5FxyQL9RdWQdA2sgRqRJ7rPLssjD6csUvKh1M1PGZUH7eEiSRtAd7aRGVa19s79kEEmhwc2mfALowPaRp8GEGE5F",
  "key9": "SGx3dhhPcRj7AD6NMozQ3a1V4DN6Z9XqBu1gS2ZpC9gDgxSdQo4HNcVkqJhf8g3JygLmDwEwKFFVet1pZtmYLhK",
  "key10": "2TLBEhu2oZjn1CC975WN9zdtDYi7W14jXRydMgemH79TgPbsWKjTWdaGUzzzhGA9GXmpJUSbTia7CzANUZnpknGG",
  "key11": "2wvkaje6FnhAZtpWRwSieGGKYkNb9iJehwhoDMFgEvniX9LFXfLhkipcLBZLau4UkNaxEF26DBY6zAfR8ULWhhs1",
  "key12": "2cvZuwL7fK5mL7FDY4VaHFWRkcKSQooQGDNRtdUYoeDMk7AheCyYWBDqWT3ZJ9Q25Wq5WMq6efpViwTdUatDcgcX",
  "key13": "4hzkBjWb4WpSBgxFkh6cNatCq5WMidWnF1Q5DuvKgHxJ6667Wt2JYHvXNDfaUjK2trggCqLsgwWvZ3bDaDBaCdgM",
  "key14": "5u4Mrnr4pCHZ8ihRdZxnCR9CKVMehs5iuVHP9K7B1gwfmFfdrW6v9ZTHUTC1TtYqveJVrMatJwe8pP35yrrujUuK",
  "key15": "fpaFJQ9iSTSV4dP62YCpDFPD8W4uf8zS5QvAK6gPqCHRZk6WiLrC26kwzo9XCTZa935T8YBWhquHT5rsvnE4i3m",
  "key16": "5eohTz7fsbufAprrSPabPKuRdvyWRUughxASoS7R6zLkBRr6gCSnB3j7GMN4B3Mf6yidpE1FFAsg1ceMiuyk71hG",
  "key17": "5utmqqSwDmThqSaMBBHMgh8trnSLECC2QzJU5JWWCtMa8NG5ApRMEJ4xMGnuqNPs9wg8RNjRtCGS8k1gAnY1hvtA",
  "key18": "3ULBXjK8PMVw5pbFhG9W7o9xwXpUJ4yHUMi5S5CCNusMiR1gm5PEpwSvWDkdiwCM4nviZm63c1ykyJ8RAV2V7vdf",
  "key19": "Rv9SXgMED89QjPM1KpuerVx8eo7mYbkFtLiDdhYrNnrAYHSAPfLcwEa9tnRuH8GJF5rLz7LJra6e2YfLZcL5v5s",
  "key20": "2P1QfxnGjeZ9y4SrkNkPjU1Dk7oJVjzNNy2AuGzRjbhADk1NMFQLw7JsqSe96V9BefAVNNXJbmz2XFD9yg3CUxES",
  "key21": "W62hf4tFa3RhDfg4aN5fDuEXX1PEFnust4kgopdMduQhuYTCBvARkASP7Hr6vensSQ8NfcRobVekkL8AwwmzZEq",
  "key22": "3Mt3F1CZKpfNg4bf5JV1XBgKet3cHr1Yaatg8JG3iFQzzrWxZPWdPCuZmjNzwzUiwzkWfPP4QKvxsvCHoQAkUMAq",
  "key23": "2SAog36WtmcuhMrAkEcYgY3p3Nyyw4dhdDVe7BpLQenTwKMHR8RGpA2MVrVTkxkea4SrnZ6YgDeuKpCbrfsPMkny",
  "key24": "5EugN4crhDBaAL4gPCK97HLYTesgxLyfTbJGWNmzsgFbfYdUwv6hS1jb8w64E7KQSC9s78pEw2rsBnGdE5vYF69V",
  "key25": "2sLhif99aFbR7RH67yq45uRTVFi4MRNRZzjCqW5pqgr9DeefrrSmLyBHUdaZDc4bDaHMBthkednwvytocmmWsWpK",
  "key26": "5rUC9GH4p6YL6p9cp11P3TMqWsCQn8X4rp594oj9sgBPVozkKsUhFo5SKC9WLckiAN2ARiD4BfEXL8K1YVpyX5dQ",
  "key27": "5yGLDnbnuMj5xGBGehJujVXPnfLBwzDUTwGwQKoc7zmxSppn5vCoyYStq9zBokhjDj8VjFjphdqsetVw87Ukc7cs",
  "key28": "27FyexcTtL9KFHUG9aqNYGQwXHYPe14M5kr3nk1LsPBhEqqgdt4bcyi1aQUrHb14W8oaaMLdy2hQcQuxFfJKaXSC",
  "key29": "5JKkKPb6cJZ32GQ6QncNaRqNFnpi26YsjADKsnpfuRR43vEnRG8DSYUTMbAzDyCgE2vvewCnFtcVzH2vGSgviMuk",
  "key30": "3ihMPy6hQoCGcWeRJipzVftxZic9scyHTM3uvAq6btfzbxrEdQEgWBUeFwnnGtA1BySTR5zSWdx7fcZsCAoGcwq9",
  "key31": "469vm3GMgZdkdrtxr5jFPDgy3t9q5f4eqWRJviGY6UsMxt8pB9rBUDFdMQLqZVf4onzx7GQygH4J77iBwAc2ydne",
  "key32": "52FssnmW6ZaLaK7uFQc8RCuqAfeY7EZwdciVDEhktEH5g8VJeeQ3fzN7ZiCf7mnZoVftBkwAqUNBe3aNzgwHs8zk",
  "key33": "U4UnAQ7EF6ePetqr7Vi5eWXhwikdsJpKWQsqhK8zc8gyQhG3ggRCTxcVud4rghpCr42JBN3XAdqXaZSJ2ABN69a",
  "key34": "2yru9fyxVfHUuFgpvdabFaSmn3vmm1UKwCrkE4W9Diho4nMpJhtFioY18uPERveKKzup7zWpBdxqvZFHW5Cu7Ph1",
  "key35": "2gZqtQuhrLwu2GqqFvHSrH3PKZZtY23tTYTKRw2WieV955kU1YhGK2tZQxWjbPbwZ6GQDCnNMv8BDT4DbKLaGAzT",
  "key36": "4jX3NKcGBmXGitkbKMqke9KSqZw85Pwa5D7NCWvSQ4tpN5gu9JWyzktWjAy7gtz47EH7zoui8fA4BaJ1QsG7gdbf",
  "key37": "p5qwd2qqJHYzd8vDsX2Hn3f16VHDydx7Z5WrEc4bf5gPu1nCbJ8vmG5863AymscpGYJXJKUTEiTxRaDrUiPk2aQ",
  "key38": "2XrDzcjKi7bb3BiDF4VkXPSzbXafakUmHHptTadDZdi1vV88WAJbgVdCx8Ambpfv74Rh3WSPNEWxjHucGtfW5z3M",
  "key39": "4gfKVcc6hHMdroGK7393rAAD5AgGTxTokuQroDYFVUroBdtp3WyxEQsvjgMU3hQRAxuJPjYXD8gvMoAKJtGUr5Vx",
  "key40": "4TXyUQJkmex1x5nXSU91WXstQCe1LFJaRjKSSGSEw3sdNJWiRfvEBMyp3dhp5nRBEmSHbGHRLUv4nWfePfyUekPS",
  "key41": "5ZrzpdWgF9fqnV7NYuVzo5mSuFT8E6YG4Za8wWxYD48BEFb6nZpnYSUpFiEknSeCubkButeW2urzamMDrzju6pp4",
  "key42": "2epMyy368GtuxbhcootqkJnghrZrog8q81XqnR5m6Wcyd9qm8gTjcHdJnT55YvKtw1CN8X2dA6cqJvX5Fvjbsqkr",
  "key43": "4sJv3LjiE7Cxa22xoBxtmVKgGwReGzHTuaGVXmdaoh7Ai13GLgH9N3QPA46AevbFZgTfoyVxMk9iarKE1jHAGc3n",
  "key44": "YtJLXijCPRYicqydCcy1JeuJ9Tu3UnE7ZjC5ayT7RrVYBMYqaw68qjpojJTrmA9Ao7SPiqoh6U5ZRbe9KNj5a17",
  "key45": "EAYtr9ZwkgkJtU4vABi2e5Ue2TjRapWtgjRehKXAdHtDynEgoZvfv1PVHNd7PXcipz2ttz62AJT3s9rG9fA9YNi",
  "key46": "LLqayWLVqRUSiVVxXh5YhAMoKTpGn6D2BKpNDWasbmPk9nrfHSaHRr5Y23Uvzvhi8Buhrr3ez7h6HNqh2pCB8gx"
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

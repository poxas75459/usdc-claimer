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
    "62WSC9JYXQGRhS1Zbo6jS4bsdQcYhWAHwTxeKfsEPxPzpwzbY7GBVe6McZ8rrSL2wSXS4ySqC5CjwjPacnuwTyDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MukVt9v2BUtm8NE7Rau15MsJN3jntS3WwiqMH2cybP2o9XviJqTLxAb23GiECWgE8n7LqUEfnvX8CvkvTPEZ8D",
  "key1": "4xyf9ndRPePurfjGbMGi2U4mqoYfm34ZT8LvNXMBkrf1dtJTgyDpeTZnu3uBMYmTsPK51DNeiaKTy2v3wCnDZ3cN",
  "key2": "4GV3185DXmKDHTJhBUd7T78grrF7x9eYJBRap82LcCJn2vvRgrmJiULPzFSK2rk3BP7oM2UuxcAfj9g5e32CJQEt",
  "key3": "3smU8BcMFKYrtWViMRhBjMYChchWKsw32ijEW2FBfrdM42YyNNuPbGR1pYmevVVGdhjhmYkmKCxTGRvGYtg8DpWa",
  "key4": "3WFat7BbDGroHf9WG8UzKxrieZERq56i8oYKyQ72VoEjBJEM76fnceGrgKXH7TgUQErpCbkvVQ4grjyf88SjuM4T",
  "key5": "hFRvsdmDerwPyJEYXLR5pvgF3wBvdL2NZ8eauXzMxfPxyUHoxGm3MS4MtHZu8fGE8jgkq3pLRnm9JmXXbnEwEUc",
  "key6": "55Hr616AcSKgXseaFKq4dbiXUDHAoXhCbrjbsXqy5wrgYbd132BDkgdTjUB1TaAMWTKTsmMeCSbL4tUfWRxrv8od",
  "key7": "5ePdbTNZj5ffcNz2XpfFLik9R6Z6GQYhkXuhGTsS7XhH5NEwF6ecbuhu1ZNB2fBtUiEri5g22Qhu8nW8NnawuoQf",
  "key8": "39KLNimyJiEz8mQcPQHi269V2jevEQYDiU6DZS8kwHvQ8trGnRzvgSQHyo9bqNkk5oirdKSYSCqvY57LF1kKB13q",
  "key9": "55hyfRKc1G1PscUWxBackHDvHrMDD9Us1LbPUEDC6PoQywdDCsm79Dw5UncqVuasATXy2RGfKPbtfKGqEA2QivEi",
  "key10": "7B4FQVKrFthxFZpjSUy4E58DZk7FpzHmAjSJhXJ4msEfiZQjdyDsxNs3pBZy41nS4EkfsuF6MXZKWJJDoCk5Vvx",
  "key11": "2KyFRU1hq5nEiM9vK9FFrDDsPbdx27CL6yoFx6brtu28Zp8s6hqyifQ9zrHDERBA4SfuHXbXLWqu36eDDaejUT3e",
  "key12": "44ZqfyfmaXDYnmX3dBXUZpxz1d9oTqRScJADU8Hc9mnJ1CLRqxjYhkDL8WpCdL3JBHfJbe5Q8VdiwwVwaQsnqKnk",
  "key13": "5MiBwpMRjVFmVy6EiwHwD2K9fz31qUBAsB3fyDx5UhdqgpY4FQfFJPP8RwUpj2Apu27JGBzuznXmzFY7xR9j7MWP",
  "key14": "3cdvVuxktZ1a3pqC9gSikv3EE4a1RJtPeyREiQiczb96U2Ge9Sny78JTYT1L97mtQUzhpAaTpR1THwzgVjZhTeYr",
  "key15": "i29u4QFJB5hufyTMDeXby9AcWM5E8KrendA1MoxnUxENdsazc6AJwfsKNaKyBXETSZfN2iXAHYEnhCxtkrJ4pz4",
  "key16": "33GzbQaXVQ5ckZG4yqndAQggADwCny19Ap1miuAMjPJ9ocUfz28WuQrFvQGVmiNSAzL4DnSQCKgCAJGHdeLn9jV1",
  "key17": "5PFAd56218STKNjskEGoUMfDsEUxs94PBLwBKEp6BoXBMt7g3mY3NkWXyoLG73dyxQuTBzikJXMvDXd5wrk5d3Fb",
  "key18": "4xpuhSagre5bBBBxk4gsWXzBXhw67PKwfwa3Y1vEUaCcNYmVEcQHYwvdqafX74gDGyfQ1ZXw62AhbATCVUTtkQhh",
  "key19": "5vPpBzS1P2dJT7FDgKffpjSgKBCFpnBkXGeLev4s44FBa29tTsJ6eFKTDgjzcCA1pCG2rvqAyr74Bj8imusirxvD",
  "key20": "4P2Wu8nbpXMfcswBqTrt212J9pPzvtDJcVmpzbhzY822Du1vvQ8aer7tFQ4neNyzcTQ2X7bD7Km2RA7GEQXaPCok",
  "key21": "2FDqmpJsUy8kUrgXtf1eXBhEsWneaUzX5nYKpXTNRxkqibzSAXUp6ynsJSC4EJbEosbSkNqLA7sUjHyQrxkanTyN",
  "key22": "injp7YG6K9hnNZMHJouJTWPs1xYzKK2onH1KMCUcmLnowh5jgZyEYHiBf2MmmpVcq8NQbQQfvjwamTfdw8XPYvk",
  "key23": "2yFqEwBrPF8yrnG9dy2nge94qE8So22zX7omX7mgdPWyBztXY9VMUiatsokfJNbqbPKcadxst4HpoQYEture72YF",
  "key24": "WJumAXf3AnX7wDGcCHEqbt9whw71yXVhyN8Yq5hjmnQxA87yfK6oZxpfpAT81dQHyF4hZVFZtbcgSeiwFL4sV2e",
  "key25": "4y2UntV9EPYygRkzLg8mUY2QAYpVZ6RBEaRxQy8mumAoqfZBVfKxkx5F4188E6DuvnMG3izgq5nLZtqpbThsJFT5",
  "key26": "3Qkgqf1hJ9BjyZFFyWmMcBDJi8CkosvLGE18NTyR5KHQBRwThfGe57PCtTKAmpCVj7nEu8LWAr8x8MkZqXRVM7rZ",
  "key27": "5b2AHi4o7CHDwYFk7iaaRvJfxrACB7BPHTdoEuk2HNDKiR9CTU3HpfKYWikHYf1pGiWNeP7tznQxCVK3B78xsUT5",
  "key28": "BnCsjaqwdNuV3Wiin6ZRr7SX2XfQeN74QjEt7LoZHpzGgVWUoirwF4oXkGh5uXHTYeokwYhWEGQjaAF4EbGxBuQ",
  "key29": "3kDUopKtJBeJns4q2wjToEDyMsvjbrSVg2AvTdYRodep736LQJRnSdq1QVeQAXF3YtiUNghLPq5NuEW34dYZd9sv",
  "key30": "84eAx2H5mcWMPAut5pqg5h347JEnYQXiRjmyWhn1G1C4zagh6CKtXbj9XF4jQyYizor9BAUCPss9MUQ2GC4afzB",
  "key31": "4RKTt1gwNH9XSxaqtotVfKEtvXjyQwzW5ek5cTQ1at1HJm9jjUvzGy3Ay4QVoM7mmVGqnJukhMqYosHXXN1cafdz",
  "key32": "2vKPEMGxo4LvS2923FHEny3VG4wvD9qVuHzN3XoqsRRxhfwG7pqEDtGwdXB5muxrTWMLQhhimo2eGXF5townttJA",
  "key33": "435ZNuZktRS6tLF1LpS6a5BsVjTYoG7tdhxwaPGziiNt9G1o2GbzmwHdLhyexH9K9rK1DEzbfEy5UBLXnb3jbHKr",
  "key34": "4oZ17Y7EygNwkVtFCwsLisV9W2VqwzP6q3d2bPPhxp1Kiv1RuFsjJ2xEtes7KSk1v97dAyEjSQAWaSTvGBg6ZVKZ",
  "key35": "5jHQXvm9U3b8umhoh1okhpyW4MKtUFmsdxuuuHKo95Mh321yVjBf5bVuo4MW6DKrHSAXN2t85EFSwai7zKziLjub",
  "key36": "2hTxWXpdvKdcVHWqeVvjux72rcgkVBTs7ZCjaoY4N1231JCitFLZxGpa6cFLQGxPUvcZEMaujzaAmfFjaq25WxMT",
  "key37": "5zRszB43eiPK3TLzLujwfNCoUuRGo8CDCDmXGv9BAzucJkYFDQkcXtyAz4RUGZ71ik4VXJWrdJDNJbd2cQfMvFR7",
  "key38": "2CqkiTinkE5EQwJsShdXdFRJkFYcQvB6be7gZE6E8Cc6BEGyQrA6Za1EtySK6xwB1FKduFdcurDbpJe44i2ExGk7",
  "key39": "HKFYW1i7GkPy2fjr3i8P7k5BvRcgy35HtKPRpzp94MZtLSwChboAaTkn4GBWkkT85QS4bhvi8jNnWn7hJxGaEHT",
  "key40": "jWLcjFsqwL3C4CYVZaKVSrpdMfvEwzZbVrPopuvWvc3yzMKLzazueAtsCmPmgSUefh1Ptir68ApsCRNdKKBzR6W",
  "key41": "56A4jLpCS43z7Eb9dpTDtQG7eCFHRpfsVygap7rD9z4V9i1YurVbnZci3PhbxVvXiY8997p3CqS99NmQjWRr4ZYS",
  "key42": "MyqjxThnBdgfBaxdairstrMBSE5159i7gC3rWLw3JzdLpGKCNjksnyaQnhCuhTZu1U5CUzAErryxSNdwLwgikdv"
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

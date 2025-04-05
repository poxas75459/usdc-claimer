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
    "3qYxSgdCyJoWmQwutonc81Daz5LwnhxPT7QRR8nzQHMriwX4hTzqhe9pQH9Kq8myRy6684TqeNV2F7uki6wCVkzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWRgyqtEcXCydWoDDzCeU8ZPX9BiJG7VbW8sFiznjtYM3RqcJ9g5pw7ZQ8cZ6XW462HfgwabeJE79NQ6j9gAvnQ",
  "key1": "3scWoTBYJ15TunHgPzq7eHMMPHZ3LSsnTuLfGt4NFiqffnS7p1YQNHnhGsCK3A29SnyDoaYYuDhaWC31vYfxJATT",
  "key2": "38Ues6Cewoovo2WoejtZGQZYW9W3zM4v6v6zudKiW2zPZQyoZaMeQ2GP7D8g1HdM54dVeQimohCjHGuXXKRoxrZ7",
  "key3": "5duoFj67qCcyCfrf4qVDVFMeYVY3oMnSe1bG2bbHzQeTNhGHaBd7j78bdT7RN6XWYtqGqJEY4aKngbVDQhcDTECc",
  "key4": "YRxDwBzVyFMyGRU2JdhPZtsXExUZGTq5Ag5hmLu7ZesuWHTnDNrXoZQWDHeguD8WmU2NR81fA8C6Z95RcmsJ1Su",
  "key5": "5Pe5xtASQfirhkxG1BFQr4WHsTL5LRfimC3tKTWrZPZEQDiBwapGx34zjAu77Rd111wJCotbR82aSzxgrfLtwUoA",
  "key6": "NVut8xwSLcr5jsmpY7KWeJUeDnq2b12E3a1odvQoz3uUM2wBdyppvSX2W2UZ78KMgYZWRuu59uSEDAdzhS2Yhr2",
  "key7": "3TGLKL48qksvQbunUGKNEQh2STDD41h7rmegh2Q34PYXoGpRvvHoDSq854Jqbgg1guPKLqbZVGJpSfVUnu2M42CG",
  "key8": "4MNnKPgRhB11ZcLoLQUXnUqqET25gBrf5R7SxmztADD1JpATbUDxKoecCUQAjjbgXui67gXG8mHuFDGiovL2izYC",
  "key9": "2RDpis9wzAzSzaU24mEn5rRMZYHpXB9CnHdkKhDd5beEun2RgaVU8DcDSgHwEr4RL5a9h4TRjS727KFi4dfLknMF",
  "key10": "5xTfpsxsxAp6Xpx41ZprjgcJ3NmYLSGw21ffGRNa1tkHBPsGFCgUGWsZV7bSeoSLN9XFtVj656E87wvnm4AcFng9",
  "key11": "2uphxDYAZGfJhiyLpLiFCii3Ghjobmamp3CgDfYFVjM9uKfnDxgpEdTNbCaPt8FwqHU1wM4NZtVgLkqb3mKnyHaH",
  "key12": "33Gyk5sZGRGDw4f1AVoYQZQJygLEMWZRmD6jHcCz4yW5W6eCuGiJjsus43NjnskLCXsx13GkrBiaARMKmz6Li2Du",
  "key13": "3U4AkXLqiM8CGsa8MRrT5MNh3b2AKhrdkCM8DfUnpfm4TfgBKx43D79hpfhDPeVcLX8aeM7YfNRGhy6nAfj5TBQj",
  "key14": "2k4n9qQj4D9bmezvsy9a7FeSkrQh5vpyqjPjkMp7AUW5HddqJEnNnFRan3jJtHh3iKz8iNnEFAaaJbrvKZJnzGny",
  "key15": "49pibXma6EmDY2T9ZE9CNAVVCbp3oqBcAYmeKe5mEXC2NSoBnmQrYiBp44bLZhj8F3FzsVGHqbpbVvewqkJLpJPG",
  "key16": "V6CeYYjFCFBak9z348igJqoyvJjjMfB9xvtQE5KkiaL5kZERwAjAYH3oQ6xrd9vofP9VBdB6sFL3wW5yK85wR9M",
  "key17": "rB4byqbwexLPosqj5a6FEBrpjPDct3Rjm4cz8WoFLpKWxo8birhepvVDLxvut3uN9rfCr2ZzmL2XaWyRiyc3jCU",
  "key18": "4j1cD3a6NbjzGvDkUv7RzAk7r7NsXYweAdKyUvLdzuSujKgVGjbqUYASMKqvdMxe1ZZPMoiUWDhivEPyfWZbFe2r",
  "key19": "5f2VXMSgdEc6bmcYcRDLeVLGYxuBB8w7w5Uu86cDa9qtSKjn21MLshwhR3xxUemQi4CujaUSP1NAPkJYQtzkDKa1",
  "key20": "29adRoVtSzX2H8h5MNPzTpU9xM6vaJngym14jiyYW23exHkm5dn8Luqapv1b79227yDeHB1D8BVjoBED8zcQjVDm",
  "key21": "5pd7rmTobxyBJqgbrD3K3neWL48n7HcWFoEEjK3govx5o4KDamt6wm4JUSjhkwRF5Y5oNz3rYbyVX7nrULQU9R9G",
  "key22": "57QT7qp6gvkkoBX9QuwNdxQQwBCkask7UT1Cyp7xs2U8WDVEaEbqY3Y2amWAbzPbk8UK2HyACfrQmxEbVhtDsX7k",
  "key23": "2hQDJWji2DGGqpC5Rihp6dbi4sAy2mzfhUmiACUnjFbZSk9tDkBMi5JUeUvvzfNKvezzuKV9RXx4t85kUv2eonzj",
  "key24": "3nqhi3kvZEXeCjLXwraESi68ii3dr8LFKYAEyE6nx76s2YqxdhDafQ6zi61Nx2W4r2c4T8MNSNFLKft9C4SJMU5s",
  "key25": "5AUe6qVM9YNdskUa3bKzXE7JctdzRbo5RCB3Zpkp53U8efq4Q1ofGi8KqMFf6YCFgUnhj9FnycKFGJwbAetFYHnH",
  "key26": "4j7QnHdJ9HdAJo9yEjxXZrEvxcpKcMX7rQvfczWUM4qS3UHMZdpdCC4gDrNVvozHVUV9GHZL5hfBCruLs8WpuP9L",
  "key27": "5hDri28Xd4Mw14tTmCSzhoLS5fZd5frbXKveAVtUtBa2ZbWtmMf5zAg6rFSfHNXr8JYF5WsHNuW1qUkVgq7KmuoV",
  "key28": "2T8rTgn33GqibUzmTPwARCP3ASZWW1vHw9uETfJXGo64jmqwMw8BoCAihUfSMgyTWtiqech1Su4Er4kkZXHPr46K",
  "key29": "VjFJN7tEwMeQxFmC3uiRsMgJjd64d8KvpbrcerXsZP3aZ8kjnXanuLjxTquNeBd8upVdGkUueri3fEr6uy4Jo6r",
  "key30": "39TbDW19VhzymmwcBV9rurHkDXMV7RB8XxyhqsZUQKheP7ZWzyzyd52zfjFwcnZQTBsqajWQcXi8Kkct3DSYC2xQ",
  "key31": "oLsZ9j1uuPrjQ5F1jhxAwf3F9Rw2b7vQjD5XwMpEhFUWwG9hWMkCtXCuJStd6NKbWEFqgkWqnnWSVMdGTsfUDtN",
  "key32": "stgP4WKB88nr11SxSUf3RAB6qKWESbwP84pHUuYTrNBqL1ZbtpiYPRvvb1ewuqdpQTMvmPZduLr9PmjwhfhvWDU",
  "key33": "4ct718KoNebQA5T4agWq4V39jNhF9ZsJ9exRSKkCfuxsNyU2yHFfBrrj9kG2ToXKHiVBkZQXk1kBDCPTac8Nwvqw",
  "key34": "2wnLekN5narcKGVLia1zSb8QhH4KzDeRJD8KhqRj4bYqc9umKFxo8cBqApfZA7CBGAPwwP87Y1DjFmoQvej4RHTi",
  "key35": "5S6bMSQvZs68uCA6e8c9eq65X12MsoShhTSmRuoZhjEyqKThy57ySWeaZ7tKVF6yrhRTzrFHMhToX6guEc3rqgts",
  "key36": "3w2JsnkSrNqKpJGa2eVDW7w8UoJXYqRGRs7GD45KWXRhuJdDACdsof69CYF9bxtS3w6pZ4FUWrQqmo2E2cQ5ZKvA",
  "key37": "27bRhRSs6nW2SV5EK6RAaGj5NhobTyEnMi2a9SjsnEK8qG5Z9HB2R5PYx3BRJFejpuDVqvzzFxPtjjBY89LBUNZ4",
  "key38": "5jYYypFqovxkE9tCsSWHoXibyQRUP2WqcTKLSoDmXgbsW8GQuoAyify1yLbLvXFuhJ2VS4CdgPXEwzqyVBDFengd",
  "key39": "3tmvyA2jfidhJB3qpiqRziWrAeerXeR71eESKvm4tqE1Gru99JoFsZvxK1JVafH6ZbBHYzPtHnvxetNUnoymUWVM",
  "key40": "4MgCicho4h9gq3Au7EjtQPfLwPuH4Gxy5uCSkHAQtt8pYNdPyPGTdh37baquk1yHQZu9F8yCsPCDLkfbpUMhKdU4",
  "key41": "qLNbmCdwMMc1ukiuzTLZ9MrdjcvMD45LyXxUVpnAjPj1J3EmxsZT2M39qLfetTnKigLGfGwJUG2CMdVwfGGZqMu",
  "key42": "61nt1jjP1tjeRS9yxmVDYi9KEfULou48mAogxaX1mzhCFPNEwupUHPuFQnvYFcuHv3GotYRnWTdAAHtkjLGxpN38",
  "key43": "5rnk3etbLFWzd6t8a7k8tMsC1ND6tSufjyvX5FYcLduxp1PGXusNoTqbwZtgCE9Wt6BZATSYkrxbEcXupLwnYxWP",
  "key44": "BSgEnJaHgpffLFq2MVynz9FSYaH3AX7v9pLDa4jVKmFWFWfsEiqkorfovxJbxg1c1rC66FR8FkyZh3MtjiLz7Vz",
  "key45": "3j9n3XrUJMKangWRkD66891SC3BC1P8A3Ft5eyZ8kQX8q7L9yj9z4EBz7sQGzLRrfB8jSwFy4AFQPwYreqV5RBVs",
  "key46": "4QMynRXf7fGfYorprUDY1pXeCfwKc45zqZh3qFTzTgYQweRYHqSbGKWHxL2oeaz8y44ddm7jyr62CztuATJ3VAhk",
  "key47": "4NN7Tg7FT3b4J3YJ2ozmYuikhfSs6zVxuZe9SvU6SuXXZRjnknmzBw56X888cVrAj6HYZYLJ2xmDePe81uFYppsR",
  "key48": "5ppKed8xRdfky9WDGCQeYtHVTsWeSwqvdgzsbLmYpgvH8aGZWXFvgNUBap2Uz2KycLZ1Wh5F7V76qdkfcwNpAHZN",
  "key49": "2qg4GtyRH693Am86gW8XtVJcBKgj7DrjqBA74wF8rNu1KnVcnkhmjPeRP4ADyfeZzfVDYxkDK3XXiq8xt9VKsXuG"
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

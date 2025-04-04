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
    "2Ga5jSt5cs6n2y6Muw8ndf1CHgn3Pagfk8eBDANdKXp692YJTq18UTzpaoNT3fEuz4UpEqiKYHBvDPhs97HMDFrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9Kw2LhCBnEchKtMykRyxgb8nphhB9EYdNRMLGC3rZaZ6M2BAfpP57d4jKWUeKifaQL99jN4zAdpsxALLaanXP8",
  "key1": "5szUELJwzNCAQgFoN7Z8NMcZA5jpeGGN2tqcy7CHLobyJbSCHNV1JioVDyyvAccUdACSAsyEh3meBY54HKdKNvbf",
  "key2": "2cGtehX6Y4qhXinn7iE9ENXU7qKizFpP8HJXgaAT9WjRktdTSJQr2Zv7QERMhmomyutatFAxac5rZ4cAA5pgR996",
  "key3": "5zDMaGxyZWrxLpN7SKp8graottaofmZxR8VGQALayoYuVm45V5SyKkpeZFYXq4ewoH87BZh8hCDND7QuofazLEjU",
  "key4": "3pZddeKCBj8MRhoktPAwvFprVXTc66bEH9MnCF7TuJ6DhEemegaPAAWLUrdhJcdoMENWeVndafHFpVQ7uKVNucRB",
  "key5": "24rvnGWNEowUUs7iT6BEQrDUJwEMnrj8WfAZYHgfvfPaBDRaP4oBVeGutdURRbf6DLj66XSjxnYey7THih3moPRQ",
  "key6": "2XFRqszm3ELcBXjt7kcu8BXdg1ztsPzjDk4nkSSWzxxvggqAXbyeyWGg3DXzxgGKm5LzuAqcxGmicj8SnzEvHrrC",
  "key7": "44npJQ99FfHHxK2U2eav6QwyMDc1qnG3MWcaUUXvUpScUrBLV2WyAwoq356m6pEU7nHViVYuomkJ7neU27t7YgeQ",
  "key8": "5XwpVM7ewbTHGZkgCxngFVqCxrxm4NwWXYMKvXAjzgk5wW1Cuu197oTJBbBt4myRD5UA14sC2t1YqQCP4mYDzW9D",
  "key9": "26kBFyaJ3dRCaWwFG7ZcvTBbSadNs8iALrpHiRqy1od4jukBUjwif55UcUH4G6eYFovCmUKMVHu8DMEqWzQntv7h",
  "key10": "2dfer85jdkdN12w76aTfLKUsRUeBL3F1vKD6FwEYHQdM6o2xcz4AhBkii3nUB3ctk95RFjXpVmZFNo2do3WgnCN",
  "key11": "ZPYYhVyh9EtGnXhfk2GvX9B2PGDT1ZWdXsG8GkdEWwGc6qM1zBZs8LNkxUUXGwFn7VEnFp1ABU6rQmD7UYhLgNh",
  "key12": "12ABwuaePNFpoSUQXPcKXd3KMLwQ3rvjW3f6RHWmUcF3VYEohSgaBpjJip1Q9bwH7jvnHAdYzr2u2FyU4QdZcbB",
  "key13": "3iD1czi2bkk7Q7vH8ir1cNFKQNj7yVnUvdD2GetXtiKeoYb8CHfgGGJGBHhMwFs39in8ttY3LvYP7jEmYhkTUbvD",
  "key14": "45d77yZsgJHRUDaVwK5YF9vou9vC1Pie8ojjSd3ianxE364Aa1C4ywXzLYAaxnBCnQyFn1Axk1S5qSF3Y9o19Xm4",
  "key15": "55YVdJ3ytScXdiB4pKF1DyCj1KKHbHoBKHjGk4NJRcqkNxx1ag2ELqqTGJBV2D6vvs3Ptj56gz1MDoMeusrjra6t",
  "key16": "537N8jGWd6RAZPE5qACsW3igwvC6ysAH1Pm3jeT1jxEfWZRw6YeJHMSUEsyAu6FD8vacpTJRESJ9c4gDutfjSYWd",
  "key17": "2BuL4FsKtfDJ8KkvZtzpLUMjw3o1M6scxA1Rg64KcWGNgrSjanjDzgFyBkbEd4Hu7ZqW9hZx7CdSaJ1KUx6GZiSt",
  "key18": "4dvpeKbM4yPMuVxU4mERPyYZh8GsTmES9bkSG9v7hs9q4ymCfrTHWNH5KXMzHP6z2xsjs1TxEae6xXuY5oMN6xyC",
  "key19": "Yb9LJvzGn55ND25uhVgZus3vadvmGypwoLcWRaag2kwyNxp3TZsR2E2TwE5ZojFKEK62U2eHqtU9CfhqvGtk9Fg",
  "key20": "6626T7DTi7o4DnbPBgejpuQJ4YWaQKTARcPXm3yH9HxZx2UTWeNqtz5ExCyX1EJEnqzAMkHBj9eT47Fo4FwGW2Gn",
  "key21": "5Ro9FYze3ut7dZ5mpQjktzwmUk1atp35WDVkhvM8KBZxQhZcDzP8nKGTm6mcPR3DzfdNkDiHjogHbCAeeqU2RXvZ",
  "key22": "5BvYS7ZX73MmnEVNfTVhMdvyKAZunm7K8kHSok5QzX1vYiXqC6PUddY76qYfKpTUuCesriehmNdsXfAUBFmH7tzw",
  "key23": "4pP8jkmxfmUSqdMKUKMwMTRsfRErQauaPtrA7epsRT8cEKwYcaHvTmKte5Vgfft1d8WBgh5Jbwx9Kvenw6piXv6Y",
  "key24": "eg8bzUukMT6ro6q5dre4SBjpA52jbQGQssQzXkduwcSNWmTk8wCQSMKV5KoknAGBUk1RWC2oM1n42uQUHUF5sE1",
  "key25": "3LYVzm2BjWwNXYktLBQRuaoHTwSfKYRc4d8wCGWHZz5idV3GCuZ6zJu9WtWfshN8o4iEHxub4hSFRrgzRHPm7MEU",
  "key26": "BFKh3t4dGLjfiDPvjJBcuUNDgaVAxbAfGXTcodEeYguoQRkyP4nFtbz8XHy6dwLKdhuaGE7nYG7ai8XgM3AXcsJ",
  "key27": "rZjvzabbUD9bf75dT4CarZ7NR62vVxL2sEzjAmzNgnnrSBSCr6yMns2kaBcQFaeegNAFjehFuN5Fj2RtUJDerQX",
  "key28": "3823BUQ6uCStGJB3ptYQGY5NkkpojMkUs5SWq3nTsWHGnTakMHcPZonvY5fuAyfUuwL9x9HkLd25deKi6oFxSwSA",
  "key29": "2GBHnx9kwyicrXysdkbHaZezApkcJhdyF2x4oQptU52dvdL6WpLNfW1DbtDbXZzUFgFfwf2ExFrRkCkN3vssMm1t",
  "key30": "oCcFSZQPz2g1N5KEmetmjXa9oVYx8YKA89RJEi3BZKvNryY4LbFrx5pbqU1whDXT8JdZGbvo3zuZjYiSiewcZtc",
  "key31": "2gD45MRm28Zn4mBsnkbbfKEgtGcvTVVag51oyPzrPgfmviXbfmgvU7prJMni7uGpmZAJS86yGExrAex97wQNa93F",
  "key32": "5bANfaUdjvXxtsxS8ACViRMFe9HV12F263WfjhotmAgopezome1cUVBwPVVnUq5MVy5LDcKTmuKJjBFuYG4rbS2y",
  "key33": "51yaa3DdoACs4eag2VxGV42amKyg13hhXGA2fjuwwJ5P4o7rG5iynR9KL1F2WG7S2XfSHQhN1huysYNadomgWkDg",
  "key34": "EUJU153Lhp1mSR2Fv3QwVDwVbYXw249pEPSBJQxTfWoUuu2qnBEgXecjqkasVEUtBcEYRXBMw8rA3bFamnCJbLF",
  "key35": "4wV4qbNjiWMFNBAV9DbeyFmAEjN3yAg4e26w8c93j9zcshKnmXyoBp1sororXmbgRUNyQ9a8At9eHPazm5iikEPS",
  "key36": "2Qoaa5YFcVurGc1gu2MCkD83cj4jF8ef9ab6B3R36FrXsRvfzMKrAxU6LdCack49aAAPeGS1PqhSamZzqD1RV6Nx",
  "key37": "5ZZKWMzbY19imeTD1vtquUgNe1Rwt5yKdqEQEas9iLCafdjrVPYkm3ucvbGyyF1UJyXnUXxGikNqLDzcHgHxfnYC",
  "key38": "3HZwLrRNqPEsDBWS5Z6zaK8Lkf4tCistHvnoodHR2EHsDFyoH2qu9M8Ri9Yw13cQfbRBuDbgDRCLHWZ7UxNRE4c6",
  "key39": "5tvraGbUcJhmNUwnEadTL2qW8BirNJNhTCxxRQyRwD8VRPnnEfMjahYXokNLe5RsztwoRqbS3qU8cdyVLCEAgjWX",
  "key40": "3CSvBMKeEkxfQrrfXgxepxzy8ZBujugFzjU6fCGNooD44jPLcD9JtPTtQ8YDAAe5JP22qqY2GuDgviDWVgHaWSpP",
  "key41": "fX9RTZ8FFDeJaBqY4eEm1V7c2WXbZLo4MR4i8sXAWyNxrVLH4GqAKKQa5r7zYWYFUYT4ahcTjkLH82SEfifDHNX",
  "key42": "dBWQ1WCKibFUUAACbUEk3Y3RCLJAdBfFmjsv6uNnCcCK5ER1pskD8Ms5q5xNZErJ9AGyjY9SwJpT52WvxJQg4TV",
  "key43": "ai6mRER6xXeNNwCM3j2fGwDLkar4omLGgoiWeAYcx6mhcq5Y6wUVVnt9LycWqAct4xhJLgg6zSdRLUADiNemQCH",
  "key44": "4xYFDw2sGbPTGFusZNwF4dDgWTf9jjN8ycWM9sfD3tTStSYXQpoAvKHYDuKk9MtsFABKDBEJb2aef7aBxLFkSga1",
  "key45": "2kWky7LqExY6x6jLfjwuga8S76xkm7QywjkY6GqpLpTpgJ1hS8s9W4mwrnxc6FfvTYmUe3r8Z86jzomevXUy2ewJ"
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

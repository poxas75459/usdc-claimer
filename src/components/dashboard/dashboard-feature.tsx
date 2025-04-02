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
    "2vKiQqmw4upaJPUsy4EhaTKuJpTfkurmyNcSrMmKaAWAH8PJ2THdumj4yHtadjgLDgYB1PEU4gG5rec1dZnvFGYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8m9rLaY8ftWB4fYz2EGMyhf2CugYkKp15jozb48BYHg8tbXf2TvYX1fzvwJ9xAcCJp3xy9sCJBrJkV4YCUamK2k",
  "key1": "3XCXEvK6hS7zcuKqk2uziqBLv1MNkZ8eZ9BUJKmJFgZD9gB2r2gDMBDugCStKG1zfaWUZFeS5JFGzne9WcxT5dod",
  "key2": "4eHRkoPDKbg4bkWfWMCmCzFBvfxcfdvAKxTCpWY5B7QTQfxZ2xo9Mv28UfsAvkisaV719iLDBeShyLXAu6yafHAE",
  "key3": "32t8iuN7jXkyZNPddJ3jZ3ABo4DYzPT4wv4nEd1gXwrm7XT5u5xrxY7cj8BYV4juJfV7qKd73nbQZJaWpheVHibf",
  "key4": "2F7ngfGTRZ3iTJFcUyp8GEp8BvMt75LniwZfmsqTURzRDbGgaFVnn6nUZmrs4YzL3ckCLmv9gtMrS3UVjGJcoD97",
  "key5": "3chjumjDvmgfARGJoz1kLYuCXyhjcemAECLFJjFgC7JCKiuAUEvX86N5fBuMxtMiiEDAXteRMb6xWKC6bq2oFkcx",
  "key6": "eUyWSXe6FoVheNz98RW8qMP4FWL42r7n2xq2oz1DFYguU4pB1GmgbFUvFrqztaYtaXkttwoLPmmwbsZNxVja8xt",
  "key7": "tLBShzB1k5FCGzsj3aq9sxRFiFG2FcCPx3Nf7Bd7zq7keN5QKi2pUhHsDMmXNM7QTaLVdjHxwsAv95rfN7vKMpJ",
  "key8": "5AByMbtKaaY1bGT5gkY9m7QdEzFUCjYGbjjLvPaqjae2HQrC8XeeuX7AeMe1iGqWQ6nVZSRA97CdYDuuABtT6yxP",
  "key9": "33gd9eKbNx16vQ6muk12tjWNbGpiPrbQod5xcJMEBiyB8mAiy2FYg68YCx6spyni2ReM5iK4kLCQHJenaeoTYaQt",
  "key10": "5xqCQNf9MG4Q4qSsNPtQf8yHZTXPbEztyLjpR2nBpTTVst288b8xvBCTLUaqPsSfEzBmXASoMfX7yyvp2AAZYAv8",
  "key11": "5gSffMsj3KcguDjdEDYrWNnXRZFsfmCFc4eZgPmDQAjVpXYMv5UiZGBgt55F9gQ2BmotRAXbCTNXb3Zh8g6XY8QB",
  "key12": "4yxzMaZ3H35nSsykBLxWQg8ZRJoxCsNZ8FWFELnMEW6wAXrh4CFhqLtHDFNDUSt4JUC3thSDnuoZiogiceP1jFEz",
  "key13": "66pSNKQNH2YRvoF2WUMkJFqCjE2kRZTVNrYpH28vvFuRjNmpyiZ6fx5EjY6WQEUz4YZ3CUuBPe4w8TEXL92QoNAE",
  "key14": "2i361zcvxczLMd7UGfsUb7LNv142mxtr2TwqQPrG2NjbKYCYVZdTMthoThwVhTnPKLujRHjdbHXUm6LFz9Uqg8bh",
  "key15": "4ir8xLip9pWbWqHKJf3eTM4fpbvF7ywdFRsXVoDEfpUqeAyRTZdFcbMfdQwsri54GhamwAP73uLXW357vxxcujq5",
  "key16": "31fFvU3oB5aAqQeSF9mnCpjMVq9NWfSSpLgz6pQVBeq4qG1X6mmw2ht1fn98nXkoHt1n4Amwrjyqr5X9SWVhxAu7",
  "key17": "sUWVr2NrVeQYffp3KRJC7kExhzPyqcw67auf1jT1TuAaoSCxBWhXkJYQGV4avr6aEkb247sa3kNHT2sBUaPB2kM",
  "key18": "2K1GcJM9Th5J87o6wq1TnNJ22YFun2YVVvQm6idzZxDGKeCUxBt9fBgmQt4aDSkNevKnjcKkMUdmJvDtmCY3UM6v",
  "key19": "5DWyjXq2rJvtmMdtjHQRM43EZp5HGvmws6WkhNzFDxiYj9C7Ni9tZUi6s7M9bEpAC2pSEtNN37siahM1WyzXdZ5J",
  "key20": "3zTRehGDM37q1fSzMvfpe3piMycipcNMKfzCt1UYPTuX3g3sHjwrXPzC8MSCGiuz3rqkdDTkxdS3sSPN8N2D7jw",
  "key21": "2iyaAcm9kFadwB9ZgW3HjmdvHfguLLu7wWaWfLreDRyQaPhkyLKPEh7XZ2WziWr7mRvCcaXrwfFb1NWUtCko2PjL",
  "key22": "4Cr7G1jvJmm2ZQ9PnzEkiVr4DTD1RtZuwhWdevfyjbMJYGsCUKyfXyXtujjvkVyJhooyfp5beg6EyrRYScFsjv8K",
  "key23": "29d4WVsvsgVTPeAvKzJtVzmjUjL6rGTD1McxZv4PzbPueNHsAACH7euLCZmG7E2GpvJsVMKXocEyH7TumB8Su3hd",
  "key24": "3EintaEdtTh2V3VfMjY5HevDBzTRs7uGP8R5zppWxNaLKdLZFy9qjYJgCECts6EwgtpBJsXk5a4yMnnE6Tg2wD2n",
  "key25": "5jWzik8kHnztfTKUYVTKM5ZWCdWCX7BqhCKXfZ1D4zLzUuFJrKidww9DTi9nd1NXsnJ2ghuzJR7rnDzTacb7LGBG",
  "key26": "25oEjEeEpC5vzNycvGjBLAzGMCrxJ6D14hT1GywB62xUrXruu8sask2QwW1ktNGht7Kkf1dEo5TPXdv1nMH7HTeR",
  "key27": "5AuhRB9i2k5MxxdRAVoPVk29F8FeYZViuRR2d3JVrB2CRtkShPwZEPKvFa9o6GDFB4iGYJ2BLjq3J7bLi1oeyuad",
  "key28": "K2RwJVu2QyJx1tLVfASCroGCyyGM87oMvAcYyEP5qJqCYjN463VAfY2c74GVezrWd4VeCm4kdTdabtAKCmXfK3L",
  "key29": "2uptLP4iX9hVR2Tppz85BQbPX2iqg2YsWFtoJeZSJQZVYcdkV7VK5r8NNfdzgvC644BS6GUs2XLbkc1mWzCRnfvZ",
  "key30": "4c3b1PUyKwD4SuJ4nDR4qq8Pqw7s5vLeesdwzUVgtaa2RLC89yqWQi1ztg6XSdiLrFyG43JVuLkC5J4dudJTdrBz",
  "key31": "goKpa1dATrFUMrcNKBbh8Y6uPCrSmNpFcd1FCJH6Uih9bRCtnRwpJQNuxD79n5g4ikR4hC9biGacbLWXUY9maV2",
  "key32": "2VQQhDVE6u2mmsfUUtwomq7ThB3N9y9GGz5466Je9gq8k7FcBoKrAgNR5iKwmokDXj6YhbeT5biFfhiAvNmtEjo1",
  "key33": "32R27kfYC54g2TGETWZHgZyysrbG4TWoNwgdxdmor7qfvSXSWtQjtkyTpu1q8hicLdMHp9DNm4TfSfTCVDK1xtvh",
  "key34": "62cX3Ayqvv7XCwMAGEeDsg1fYLjCxBYBU4512F3MdjX4pjrx5XcCcjYcWxb6Vss5KhagPwMDj4GAHspUA9L6zHXf",
  "key35": "4a1DM9sQvn3PYdxQEFkcu1se3xtzjf8UKBnEKu33qsj41vby3onT1878DyiAua8XBa3sxHPEdoRHhhCksK34JnEh"
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

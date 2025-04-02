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
    "45rZCmo1KZUY6DHiAhqjMAikyrnJ9SuVnA1aK772c9CAKavRktpkLiFhjhq9AZmEGMPnSUkMwv7LB2uFJg9ChGFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ALQbaRMmKJJ4Kz3J7ifq8EaxqLhBgqeEWy3UhwQo14XAD27H9XnKFBkYRnN4D6YPe5cx8Ny4DaFvhtytSzS8Z9F",
  "key1": "35QzEKyXV56vgoQ67kcdFh6caeBWL3aA5uEErKNrJ2qZ2f4gAUCqXDBvRMdecaRQhHdn613a9rraFJM3jPydNVZ",
  "key2": "2iwBcrRV65QxMWFMBxHwtEHj98vpZK7drh6HRToLAbhbMx737RWMMcYsutqtYBhVw4MS1GDQTpfScNqExB2DN7Gx",
  "key3": "3k3ZC9ZHS8wXhLL52wmd3s4i84AQdtg3svc3NphHy16WaUhfgj5NMnLYCNhAQ6grgPABWFVH6f6Qh6q6WwMvnsaN",
  "key4": "4m2gB8fPxTupdv9HmUuJtTKHZVWwxNj8t19MAoPJq1uww4KS15kzkSZwD59tD5rf4K2yMFTVRcYhfmrmMVaLqo81",
  "key5": "3GwfHuooTp2gtnt5RygcRqWZqyhS43pFKgY4JDPEqp4xWzGgMQRdFoeGqPvGdEsAczhpBqZDKMB8DvRzbU1s1TeY",
  "key6": "3AjNFzJo6DCzqLNTox2irGdjdyDA6apxXW5zxJHKPX9LAKL9FgbzV7ukdLh9cH8zLjon5AMaZr68U4kUkedLfvRB",
  "key7": "j9FPMKXGD1wRRd787QU8Gfhpg7K5KwxUXiz6FYQhr8pYU64bfxZpiGvJxVSzRHJkaq1g1YrUD6zGefdjHQNm4UP",
  "key8": "21AFHiVn95hUSB3Lj12LXLycPQRicMV9uzMjPiuoQjDqZSnfuyipwmK7H8gcin6MoV69AzXhgYoEu5FUwewkUXap",
  "key9": "ey6gAwecTaPNVULKxWpq9GbfJyLs63dscJZaP2D11gi4Lsb9ryo4LJGrDSXkqWssMckTW7zLfMznM5JfVvXP8oR",
  "key10": "51nveWzjDnHZPLZJBtQMFFATNjkucXaCbeXNo6KjJkQytxV7fKEnQYzptThaHooqzg1KfU7riJc7UeqWP8jd4oFz",
  "key11": "43ash6yS7PPQZH5rQ6P1PMRxWuhau43Kedo9Mg9wLHRukKWSEUBf94CUiwKSmnnKRN2oneLy5N7WtUT9zAYBZmFk",
  "key12": "3zQrBbwESFPhkV7orVnqrXY3bZpTtATXscs1ApGFTTPdNyvK9kgjJjMRHPHadk6TQVmFR6QBLtQ6tnS3BBYWQ4ND",
  "key13": "3CpDXSmZ5B7U91Mj27CfDoqyzoA4ZNQDdQAtNN3KvVfGScwu251H4sZbKULbhAJDxj3i9MAYpJkr3ohZdR8qKM4J",
  "key14": "6381x2RrC5zVoCKFyTXdQmmvPsEZKX2Ej11nwAZovPEDKLRyX6HcNJ8Qbc6sfzgMjq68mEup4kXCTSWDmEWQk8P1",
  "key15": "5C9NZ1YF7Zp89FUsJePtnKUao2BzAits8wYQciUjsxusr3pSqeYitViiRzM5onjanBcZACEfgheLxFw44ubum51V",
  "key16": "2ZuwG2yRkC73LvVAfnnfNQKmdGJqfh1Jd8HNzuqw5RwMNnAfRr1psX66hdGEj4CB4WgeUuXLC1Pcim4V67T6YAg3",
  "key17": "9rStyji8V9HxytpcfGgskhHsqVqt2F6DZAzh8toZDv1hb5mrZezvpUFmvn1ZsvBhnfbizDY8BXoWAw85p7nGEgf",
  "key18": "QRQcgS9VGoGeFiUu7rn5uzdmWZqxFqELaeENjbkfuKb1xskzdjAfLMAxLk1wCE98yRaHJzbNTAwSUZoTV1JrUF4",
  "key19": "2YnHy2HEVTzoUrzeCj9rSjjwJtNi1sndntXa15BvNh49Ut1bbtR92G7UJm7kugBfdLVTdFciJP98vkEvEKy5SNqM",
  "key20": "4UKqtM699fLVYpNJpE8fjBDPwLUTsoxSgnxn4HWM7YqaSrB2MmKYugFSiVrefK4D9AHoP7Vn16YmvtJboMXRPjrK",
  "key21": "MVcqqVrAHHcP2ZCCpmLEBaJVpHDGH1tNo8AtsytfogoKcMnsrqAEBAWpis7oc3Fqcwt7eTbo6dM9vHH78a7Rh39",
  "key22": "3qtYmF2sm4VHAiSwGqumNhUSuDdSkzV1V4LEwp5xqPnTLG54WLXRmyMqWBE3on4f7hN44dAFcmhvUDRGWFqqxxue",
  "key23": "2PcHepdrAYPvj3ow452FgBNN6gic7ktYrtDGmziMP3cnAxFfqacBs78J1Lshi9UJxjr8xRmw671wv1TKQSGtPMx1",
  "key24": "24tr7pPFnKaw9DicA3yNV1BYd6GzmPQrCe1uLVVbYQ5mRqeK1TfC6RztBaddBkuUuwAQacfiPr1tboPFnWkHR9eF",
  "key25": "2mrrVZT6mi5q7gVn4sXPrhJUUT72xFe4hhGYnFnNT5of9enrjSsXfcJuaQSck3bNZGcinazvZZKK6ysbGZcjztLs",
  "key26": "4BAKAJvSJG8q5v857sUr2thq8UAh4wmX9aFP4Bv7XKi5xt6bNQ1zd8fRufSStcHvVNNir8ya6HtRALsqTqWS33Rv",
  "key27": "5DNmbTCzN3SJPY6dg7Dh9ex6bFUcLTk688Z4RpEXwncn3ZZt8NDtkZpoiqiLkjY8ESw2tLvBD3ybYfzehdwCAGmY",
  "key28": "4fDz4VVwTazeZWNi9M28kzfysxvAbUvEhgFAtPEveeaSPtD6Uuu8nKhaNMDPZWXRVohWAhdr6EeZqiBGtfJ1rzUm",
  "key29": "5D3XP88pzHMVZhkA9SBqnfBdtMH3iP2KxX5aZ2HSFhaGRUF2gjPBDCwNR5kjTbA7Am9BjEpWZX4ph3vS9TJUAkgF",
  "key30": "2fFVLiMortsAfomEKTh7j33ArhBEfsUiMVi3DCvpzXwKPKpNoFSzmk4xtcwfiBhyC5J5arvvzyqBUuhdoCQEKg5q",
  "key31": "2bjszro44tHXjGoNiLeS5WM6upRM1j3gB8o6xuCpmTzSENwxRuRmsqtwKhPYexW8uCWfkvQGKZeN1EsxseirgE5p",
  "key32": "DNnFfNMo3SX1qTUZnRg51Eg8eg19Tdgb2eHbHj29KqsT577FWnjuPMooPwtoKowHSKmgt58tTQAHq87Q14suFbx",
  "key33": "5Nk3QA9riLaeFSuaN5BRyM14sjJ3UKoJJagMX1QorVK41rY5hmC22hXbJAfA21nuDSNy5LBNz84AV5EsxdLRVWkY",
  "key34": "2BYCrnzQtEQv27Znyv8fo6bWwFZR92TmxrbYt9nMUHBpzd3AqJbD5EFAvw1pBTsNYbxG1qYazsoMJNZbgekjGfRa",
  "key35": "3ULzSRE9z79NMmt4bJRfaYnbpgv2ZuAk1NnzTG16pcSFaPm7HvSB5iuLUaKkDZSbPzydTdp5ekpygYWpyzCKVsCV",
  "key36": "4Bn1twXJyje3XwiYvyuoyNBnfA2ceUgY8ecaNdgHBQFTHzDQGeciHuJjG7SxhV2gx2iFNJbqoaQfkED9iN5Aiubr",
  "key37": "2SVVz2WakwAzcgjxwYfaRNuaBZUKBDSegpb7ynF36Gyfb9aeVRmg8VKcSiQXEkpPiSmspMhpqMZMkjpLx9pkGt1E",
  "key38": "2NQ4kSSyWZn3rjwGKuQq2j9JCG49CdJbAjGebmNughCkq4JYq8jKZ87k1XrDxiuN7ExK271AbdVfoS6vZ3BeGNir",
  "key39": "4t3yvTCpnDyfWp2xVHHURMZeYj9275QoU6GVE9Cm8TVKTdBGofg2nMhR89vFsTvduTFQ1poGtRbU9ejt6gY5bmhn",
  "key40": "4FsKAEU1VYLmS1vJo6dp4Z72ug1NEyLj48VfGxYa3zs2JWmWzWKqHsTWn6LfrGcomJN9mmxsN4VY2kzcd9rh9rT",
  "key41": "4mLxs9M4AqnkRsEooQReetQduTuBjirEQ2thubmBietkegVC31AURhCbDFNfqCF6sEkMXbw2L4uEsusLL8suTYNJ",
  "key42": "3qJPpinskjkfjgcnXhxs43xtxZo4ZDzkk7xtHfizdhebZmzFgAHxehHr6JuzhtJQpKhQbt9UcHSci4SYBziH3ymC",
  "key43": "3EWYw8iFU3MUfYbu3s95v8YDi2z9d82obwxUhkRmGHFvvGCdvFkAo4iis8xACaswBoHEFqYUr46RTeyckyXnECWf",
  "key44": "4d7qQ9Fwp8ATQJguTUrGwEXMQ67MY4kXvQwS2WHjZhb5qeTYxV4cbWeYsLEu1paKGixntX7UuuGcDi7kDVvKc99g",
  "key45": "5uiUtb3wM75ApcaLANcRAZNSFwjKUYoxYdjtDHdMFLAGEgBKBSppdBP5G9oTfqVB74K5u5K6ZSV1peBkRs8GWrHf",
  "key46": "2DR8yVZ4bc6NGmXX5yptnFikx3mW5roPWZNZdWbYJ1qhLCALRSEcv98qZ2x5KVivwwwQ45L3DkvhNdM2jN3jGZ7f",
  "key47": "65LvvcbhSc7uySEPZUNHXKH7drSYgKYo3CPbnenjBimMFQk6ne7F61s1xgJmyvRFnEp1qgEWh85V4Wm7tgeLiRWq",
  "key48": "HPzHnHfg53erq5S6ZoBFuShiwypgSZrrQrDmGUQZBfVNiyywdx9qzj3LE5KXZ4dsZBoV14GitVXsR4Ym72xWFRL",
  "key49": "2VvVc4X4MaWjsmDank9M59r6WrHjUBSC88bYeBePkcnLKWgCZNgihwruvf2oY7VQ8NSw8xHByjW3o2QuyD6wga8i"
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

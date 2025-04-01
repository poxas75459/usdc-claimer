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
    "Qx7TLUJXHpVvTAt475Zbgp5yKjJU55whhihAb3urWyyvMnyoWTaDihhqemmCgZUsNeCN4hL7yc8Ho3JQwYCrvcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAsLaCQMDKheu6fCzxKpbaCVW5zetSGGqwPJXh68barjgF6hghhsvNnk7JEUQZVE9SPpd8WHdUkCoX99GN8cz6r",
  "key1": "2nbh7NcRLqsHDBu5oJ4jupz82YxtqQi6mqS2MHruup6nV6asYhgP5wxqLhuru8rtsj3bYs86eJxfvtBAxs6yFU88",
  "key2": "2B4XWxLxAjz29NmeLvNSRMKohqgFVSvbHAN8pAVCxkywiqsahFK2seY41qdUBBD8t5LzzL1LkDjfEbUHEJDNVXvC",
  "key3": "4rTK8yk6pm2SeEQPQw576kH4uQHR8snZF6fdEvfvaJagYnpCea3TUmVrXphL9hoxfke3twpkAe9sD2QNdXbR2irq",
  "key4": "4g3rhy1PVtjhU58ZHidFEF8G9BiTSD6muDpCsKGBgWkczzeAQjqLw6ioLNDEjKfVwr9mqarqDgAXVDZ7kfhnbb3i",
  "key5": "2T1Lr44ZhynvGYCS3H77sEHzRmWSYG3xFVQVqWMbguD2YudEs48F7PabjL34KuU93fTWpuV8HZYuvo3hpp8taBvm",
  "key6": "37cByNgPJ5dBejqojW3X7nNDNo8hG7prfnsHYK7eahnoU7xrGXfeMWGevE7JBYvCfFkddqU6RYSXABbbz7To42XA",
  "key7": "4RmwB7G5Z7r64m6zNUuFjKGnfuPQaFspsoKBTeYbpkLnVtNuUJHVQkgXmyEYbiJw9Fd328j65uGVGu9PtXo5mTjr",
  "key8": "3DeLKjDZ1cByC9JBKe36DzpG9cCRft6AjpVxH3rWYiNRGMVF9GrWshVix9gLMhpZ5ZHogkyxBTCM2BcbKJTrsq46",
  "key9": "3E4tsHN5c86cY9p9MFdoMoPLyCPxLN5bZNGfWFEK53bHqoa3reR1uoUnH8QSYaaQ7ozU159xoC6aMeasWUpmEecv",
  "key10": "27i2HELnY4GP7TdP7FJ7sBy2wPmmXVV6EuQKXprzoGJwtGQEMvNuXV2g3wzEpVuPAu6Va7ag8sen9BfqipDVC9yp",
  "key11": "qckCja4M56ptLzFPscsrB6k4kRKr7sJivowKZBsAigGCGs7ybrnVkxBJaJWRdnt6MRxqRkkebH7xh5tFnaEWxrw",
  "key12": "5dVEFo84M779HKAcwc8BksiUGjHAo11hVqgMk3vdeuhTPoNp84EqEeeMHSugTHX1QMjugBFj5KjYpWUJ2zPLmVXM",
  "key13": "pwHtiMbYdayt6LYhABs4Sdai6BQVzENMzfEEWXtkg1SxdrHgpF58WoEbFUncjoamJFdetczQAg4psert6ZHwFSu",
  "key14": "2LZ5v4jQGCE3c4hYBu47eEJbbEtxqmZaZwdvfyYWxjnJUBq7cgm3MDcZ1pUSZa7zVdL9t5iraQou3Q8yj2hiapug",
  "key15": "3eSje4A1oDUBFCtFg8nCbfhwtZHHXJtkq43NchyvFJV7oG66FUsB1KarTyPURcFLo4Y3HYVnWtgGar4n2xGE5jDJ",
  "key16": "2cxkZjiH1QsnhUs3CZxaswT9W1nBTEwubAC5x5emsRkm9oAzXKDR94tjpgxpjpH4nmBtV2TmcbMEqomq1q8bNzxV",
  "key17": "51FcsqQHDUGxavfW3GUH756Dwo6xhANSTc8W82FYLky2decCpT9JYmyLEANwcamVZ2WTNWQqJeGu1Bb4Fw3beX9H",
  "key18": "2WmCxnrmr1tqja5dHte9BpnM26jQnLEKxqrT1rS8Hj58MSjJTx3UZfy6ek86A935sSCney5kt3rvbGzSkqkAWFjM",
  "key19": "66TkMq5JFhNc6dKAAYy1ftAPgoJwpx5q8JLvBWSTSAHrRAmBuSvRnyhMNkgBR9fM8KbBL44pNGEcNkRnjq669nAH",
  "key20": "GrvoQFgUr4esAUb9hkLZS11hwA6YtWu7pcRM5Fzyrr5JNxXXWNVQ2fj4CNBYXcB7iZum9ouhTRCMMGV5btWfp7B",
  "key21": "2uX1R94CCB5PTxqEbo4Hf17Atg92MJXsAq6qKA3JKcaywSzNGvrTmkGP8HLpmQVT7wpRbCwGB9chNB1CAV6LmaJL",
  "key22": "3dNS52FD3YstZUf8Tk7MaZm6nCZ1Aa9qsA9398YnmZMMDLSPcSVTa1ujQ8aameUzQ3h2TgD9NkaPSJ3mDNVbdgvM",
  "key23": "5eeirxkgwbwE8BXvyjMLYjNvGTtnm4dVpa9u9aNHgsceaogN5TZ7mbESYTqxLMgjQFvSYQ7z394nVoHi8mgRGmof",
  "key24": "2yPgwvuVNVvvjBJxshEUx83aD22QcygjWdaqGuP3d3rvDKB8XYxtKaJ6h4tna8VaNAyxmSfXdpQ9tc5WyJ811re4",
  "key25": "8opDV9FswhHMNMAiGXATuPH6PR4t2mLdfNUiVTPPRkcRgjJE3gAmu2wmAunkeEhJ3JQPT9pob5CSNZoBMQ1Ld1r",
  "key26": "zyNncenESELcqsvCEAWWA2NskiMAY5r6rtCEHKi3c5Z76ke83hNRzvjgafbQGN8XAcChC2ZE6JcqmGo8PpFgXsE",
  "key27": "5wvHuKFz9dbKrG84Uj1WpqQ8mA9eLbEd2UxDjQ9zyZU1CfpCnP1365znMkV61R1pNxQnvTqw2H4jZJs18m6NBWve",
  "key28": "xCoeuhJyXuFXNKugzJbBZ9VaKmsRFqFAC7A6xyqJJdQUXqwUnJ4aoaSqyc5V1PKsoxs7KZZCQBTuGT6NeZgGPtF",
  "key29": "2XH3T68KhLq7MhdW7BLdU2NGxhwWmgDFE7jzNTZScVR2qFoXB3HMJDExRdYaa1hEVnJV7RQBU58jmJMZzpksp4HM",
  "key30": "5bYJFYXk222BeA5fbqu1gukXzBBVGq4NrgfK1EMmi3wsZcndzF76k4y9YvYRmV1fAuML4g5hxx87vdk376NAxxaY",
  "key31": "2jwj5frwxs4pWZbgNagi17UqkpDYh6zDNNCMigSU4dEitHzXoTNdsvsWDRhghCHUCDaWFsTRmdNy818oyUPDQrxb",
  "key32": "3vK9tsY4bwPcupj18hx4nhoZaZ8vPbWofSZ44aDFicTBSJbnjY4kekgvcU7HRWkHYDFvL3DvwfS3S7D9dnKL8S2Q",
  "key33": "Ha7XmmyF5M2TRBSFQ3a4LWi72zducFC68EG7doQarmLEWKs3diohvpraqKVnNEuzgrFtHcHZQeQyrm3BC32hov7",
  "key34": "5tYAAS36zcCJ6rKCMUPExKSXepvT19jkUXV7C7dufk6pYtCRCcdytsdhuxNx7yGyMsWi3jEmenr6XTVoTSZCXF8o",
  "key35": "5VZxrV7tuEkMQVUwFsLoU6tTSf4kmruZzgecAAjG6Xx9xoRgUYJHYjFq1u6xy5f1WXyA4hCmJYDZq1AdKKG7EPHF",
  "key36": "5DnEuDDwwQDZD5izkSoeEg15wpmQMPKfbUnyhG2LFUCLYmKvaE2t3YSa7g6P6yDHSHTTRFUco5dkorFuPhUUuUsh"
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

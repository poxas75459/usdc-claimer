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
    "21Tm7tdvAYrGbgyw69e9DzreCxREsGa7aBTRT3ZBCiW2bRUhBGXPiVGmNVwjmsz3v2hy39613fNmAF2w14epbkLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38n3YhqEPBXuCTf1dsVCidxxgQGEThJyXGBYHhR3TFaorekP728uX6m19CoiL1BtGaax1uZxi5Zuf8NasUqexRmv",
  "key1": "5Pv3nasdz9gQPWUKYgHyfRxJGr152qhVsS5Ay7sibH36HUeMjwxndmBgziq9R9pMjuAenYgyqpCT6CbLWKF4zRzo",
  "key2": "4AZSQ7nZjEHBS5runhxBw16MaoHoqPdcfrJB1nNNu3iefmSk5SRjVBkuXqNYaMZ1NVxwU3ooncvdK87oBjKjqJ1r",
  "key3": "5GJMrrJu6XUnLKW8eZvo7LUi1zPMyNN56BX4RFm7XrRatgVsG1fPu5TZKtL4Vj53Xm72qWgWfnZBSEqKw9xtcboB",
  "key4": "4Lrf2cBFt8NzUGXRfEdskGtS2Hp8Fm75ehwHkDAbsYw2NoLBM25iGkbhLMNTZtKTnEbkJYdtzBVWozuxoMGRHs85",
  "key5": "f45GWZx2LVD5KDSUUXhVDGRAi8zCs2PpaJHPmijYW5uByLBuNYoUiH7y71DtCqVVJgMgCNCwby5SbDZuKeNGJHL",
  "key6": "35y1VgrxTkXEh6GMrGCFoCg4ximZ7x7eqMG73YjJzpcpqbLKubbevcvvraRXi4aMYNEzZQVnRz8w3vjmoJGFCXQi",
  "key7": "5hwpyt48s6RYYhrrPoWjZPHEfMYnJKLb4w493uJQEcojdCwBVu4JsiRCM5R2zekbEaE47zfzZQQkLBUgbbwQk4ZJ",
  "key8": "3572vqpXphH3RJyPiJaxPfh8FdyTboWhcqdJekgwcUu937FETEtjKpZ8fkVHcqxqxnGTAkf3gBTznx3K8yhFfejV",
  "key9": "525i45WuaUv8bgPyQsx6GJY8wKMJmPaTvWRoepWESuLHsta2ZQmE9H4a1CNuXx1UvHTcwfZ7Bh1GmCWAUMe7LzjL",
  "key10": "32oLKiDMvNGfKXthQ2aWZUgN27TiBQkHW5obyUWoethfX8Kk5ypQJaSLESDuxeAdLKGu4oyST1TJW3CCgHgXkBXP",
  "key11": "kmBYxpGHM5hoMJsyjqZn3BGV8x9SWZUczx3qV4b8UYLWkXnhBHj7q23Zrc5iaECmSR1MChD9wBAtwFBTjjgJB7e",
  "key12": "DuGp9kzGxDJzwXrM7nUy9dNaftAuH8AvvJmsHwSYG3CCTTcmbYiKktUHtuBAqhZK1EkLyNufbd7njgnbdoN1uYy",
  "key13": "2cdAaamX1dR4iG6cjbZTTLzWWzKoqR8iw4DZEub6ASJVPW1uZ9GgSycVpXWURKi7CbubiniGwNmbvuVDm1qHBxV2",
  "key14": "oT8BrsRsnBQHeaKvQKVC6aKpXjfND4e5EBQ92KHKuyVqjFcqTt1kiot5WsSEntJgrobFkgkJCoS3kQXWQqYcEWA",
  "key15": "629o7T2NHtsDxc6oZ4uU2dJqB8SPgbbaojNwMt7XDhtnwjc3Xms4ybtBZX4hVc2jTuWrmxN3jF8wjLeB99mhfJPg",
  "key16": "3HEjvsaFGZfWyet9vnF8nMXYPGHRUmcmX88ni7opzJH7XDUsRPi1KhKPx3JCrMRvpN5WGK8RxuB361E87nG8msEz",
  "key17": "2S4sciqhjuJgqvTnX7buP8dsGVcmueVhT4tkcQf2dr4q1hNgoDi5pZwZnyY1D5ofmY2UHDDwytuX6vKjCo5omLBt",
  "key18": "4nE6yisFJxnRoj2XYAy2jNQ6gptEUJ9oFrKG8VgiwoDfMktDLzRoLiCb7bC4PeDg2jNaBPbqjkZFVihfqiDiH14v",
  "key19": "4VtJUjUToXvjYGVPQE61JVvjczj88yCxLJ9xCfs59Maef6gZPycd41muNYffgBockcuAeZpvrxfUSXGmGN949Vzm",
  "key20": "3WYBCtx94pSuUdLMKCTiJnxLorpH7URjpvDvuNPh73s4JxU7mntg6kMhdZJvtR8HhwYpw9qmRDyLEb3aoBvKMmoH",
  "key21": "UR7mDKKiVvG9Qbknru9rKAAJkSBXd837DS9V7xgAr4Szap3nyUTWRApfmbwLG3d7XANQg8WNAQjWqheX8vvpfvA",
  "key22": "2AWrTNYCoai6T9giYXMW9HRU9cEmSgBCQPJfvKdnPAYwuzosruSrXWEieGr9kZczz6A7jXYQ8ZXTRF46mKXNx3Uo",
  "key23": "28qPP6sDZtQpKmN9ZWys64siYo8ztsuzy9vMccEGN3biutk5z4y8KA3LQHPxSybzFKBuFWZ7aNSXqoSBnqqG6bSp",
  "key24": "2MSKPFVJqJrBRMQ8nFDLq7AYksr8hiw37RVofaY9s1bSytwRbLf75ZD7YXd7um2V8eBgp5Ep6tHxVM8AmnY7MzqJ",
  "key25": "5reTLk3N5zBDKkbygocfTDw2pjKnPkWbpta17Rt71RNqBF4hcfGbHZ7iQbDSHXWkJ5crbThxBVvNzqALk3yMazBJ",
  "key26": "5uiGhxMPPzyqjXnuY8AG1ry4XjWmWxYYEr5d4J91ht42NUJH4q6iCSKcEBvPYnvLfYsVfdGpsVo5BkLG4AUYE1WL",
  "key27": "2QuSW4dKNgcbXEPN2R166h8RBRwfeytbVU7Va5YPNS2MVpVUsG5YJuCap1KVN6UTxsidkLkzfEqbeCNTN6vctzKp",
  "key28": "57oNKa2bD8oT8eCDs1gRRzbHkQMVJ3XgpMRSkBLPcczthbhVzF54uSBwwdcywaFSd6VmrivQ6uTPRd2Y5Ja9EMJd",
  "key29": "3AhMtgfxX1wz79aqZabffTnm7WvYcXwD2EFkzYsiWWx7g4aJ4CsxEDWJRDExpTjS3XiDLDfmcw3gKaUBY4q6uPkM",
  "key30": "5zxBjcX8VjnfsRQJnXPz5FgQ2fLS1o9zg3ibBzUHoCtaPRzhFm45KqmCZWS4HN2cYMNC9G571dAfk1UXSoLa7t29",
  "key31": "2FufEat8uzcYPc3Wmav4EtmnxzTQLxBHenT78j7DA5uAKTJqPVku7YvouR7DoLFHLs376Wr7wZq93vZ7jZi33fyx",
  "key32": "GXPm2HUxvNEjqv2Fw4HnAJfWMNRN7U9hFZms2BH7p6rsoVGHVBRPAmMrjtnYksFMPjvFS6JGQth2CzHoFxyVRy6",
  "key33": "58F6ETUfrCXZnZSdwkAMbVGKi4kFWzQ9o5ZaNDLe5DKJFYHhYyavX5saWykE2WWhAvaCpovCmd9EPPGf9neE9PKw",
  "key34": "4as8hPhcrBZxN2mnxXyeVo6DV7NZm31FN17bAB5RNt9V73idpA2BYqMFSFsrRiR6MF8a1k2AmjzCMXugg8KAAasm",
  "key35": "vcudpMnYpuWYkBiCzYotaBZcZRnnoEsTpYcxP9HyUaLvZB1RzEEXHoK1RSddDDoApighe6ZNa3sFzAKq8VHQRv6",
  "key36": "2Gd6ch2QFVeoCRiXbsHs3FfFQyFFaDtKWt9sVEqiGEQe7iKNhyfHjQ5KueM5aNSm6Cga32D6rFUQbRpiC8D7LVQF",
  "key37": "iAsbYLodjmPwHCVZJ8JbpRsmeJ3achKHCJSboLGsm9W1vqavrXtJHqRheBD7WMnWsPpaZuVZQ9bLMLCnoK3rpZd",
  "key38": "4rYTN7CJEmfgVbsfTYYzqZ2nbfGja1AcjJd1sWZ1vScAhLu53rwgnwHSxZ6SrUa77TuTRHU9F1ZrxPBLywVAEGXM",
  "key39": "2ELBxfGSEtcocW9WPHNYZkVTEL1AmxfK3bBN2spvT4Y64hrZ85ihTZKimoZW49bZN4ZFvSRUtj5twZySfMTfB213",
  "key40": "5xfUQ4RPGpPsCMdfSKS4Yymd7FuEdGVystkvH752STVjmkevw84Uw9aDnYMGxZ61eAQEwXfaYT1apcsCHCfMT85e",
  "key41": "2AG5gr9x3zTjVphB9z5iGVNc3juc5MAVG9ZFEA1dTkVrX5Jzn2YX6GDBzGDKjKWyrdVogMG9BSs7nKaZgCp4zfS2"
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

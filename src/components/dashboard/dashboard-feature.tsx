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
    "4fQRhiWcjRNDf1EFrgj2tJd8TDJshsATGdFnnCxTPMHBvDnV6CeR7JLKmt5gXW3p3XgvR7JP9zSUZb1aGnmcdtGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7UcffmJyC3QQQsr8Nk49aPya6JFC8f3rLj8GjMPqmXGeDi7FYTpEqDW5UxedDaseFLFcUUmP24d951Bddfk5ic",
  "key1": "3pRbhKj8hGsVM1phs8kb85yG3kf6xdiCWLYsYMt7hE9tynv7tAY3fANwCpxkaSwBCPqDq9Ehk5zsmdaVQAdjNjks",
  "key2": "4PsYUQ5FNwdE9Em2SxtpsjeMetVJardPJYSMD8VvA44h6dCARLdznBbwXhRWYtWBD6N8kBFgeknUiwccpPDm7NfK",
  "key3": "3LcPkw1mttZHGP8RKFhs61uao1LG3GRvZ1kZ3RsjHWV4dU6tGqGyR7S8DjcTnacADZkjbLnVyhM2aZtdyadMUevK",
  "key4": "37tz5n8bZuPsuSX5B1qcnutJEbt2uVtYWVAWriNpdfmRssspXBuDspUSFaUiwxjCAMv2bjbcnmbQ4eqjEYdVVs52",
  "key5": "3e1QXX3WipEVukzL9Ctw4b7HiMoNT4XndMDj9JqjHJRSFKyUzDp9hpFs9feyRXrz8NQB67GLBSPeyW3fvoQ11N1W",
  "key6": "2eLwKRZjfiA2GLKy4dXUndr8Ee4KwzNXWaTFmssqYNbHpWoz1nbcHe1gVxQjaS1gs2WDoTANDWQRjGCfxabfeEfW",
  "key7": "4V7fKsz8Xm5e3Uoy79ZUyeQdiRUWJqacFz7WJERBUuYG87HcNCxGD9warrhwcdKCgQkpWZBfqGJkYvz2atukf9nd",
  "key8": "5o4nfLZZCLFiz8qLh5wWWSpPBCKTwNXvC6bWEBt5bqR7RuzRDYXL4jxS4V3UVDTaWnV4M9wtuwraR7nh998h1oFB",
  "key9": "64k5XiesCXfZ9G54cHoWVBYwoQbioN9dcXzy68NZd8VQRe9312oQvMAp9j3oYDHuyx17eiJgbHnZYQtbeRJEUNh2",
  "key10": "5fo5bFcPdBwdN7gACrTxZmtAZYift1PQJto6oVdq59KzBoagdPKxxtvdJB4m8pU7wT1F4GRT9TvUCMsZang4MzWr",
  "key11": "4h4etiMvbY9u3Y1ZZX4oRxu5eEVZcT1m3hEpjfrALYj4yZfZuevmoZ3MuKkD5njo1tnpEq4aSHUp15JnHo3oFEAf",
  "key12": "45FafSrcxmr7pAjqWSdq8y22rBheYNAfGBAmw3thQLY4pkx13ACc12uuti8EVYYWxcWx25BGb3nsd9xhHn6M3XAu",
  "key13": "hWBxjYTM5namphpqM5rLfBTjNdU5u9UjNjvHCa3r3Ze5BbryFDeCJiMiq68irzTFw86gpFTbmPY6xms6GwZvBMY",
  "key14": "28ksVFsbW7deCjVFbPZpdXNpwG2aosMyWZmazFQiaiRCfsmye1ur9n5sF1qyKaJYKfvVVJzTkRTXGisCyyCRvLAR",
  "key15": "3AGwc2UaugE5mWoAGLyGeg3QVUaxcHYG78xHwTWMcFvgMDZ7yTyZywGvrE1sqHXfTmoxH44iFunReKyZhCWWTd3A",
  "key16": "2Q66A7W8QLn5xNbACmif2ksqvuwuRgdGMDYB1JKGwcp9LmiDiMZ7oRWj19qdLE4wHLVEi15UqgShWPGBkYzjB5Pf",
  "key17": "31FSY3LhB5CrAhk6Mmhx4pixMi9UvvuCPfUfhHksbrh42bQS1eEfeiZGjJtPbYyJ6Mo9rEyrdgvCTpE3UinN8mfe",
  "key18": "2HFBuUzLexibiAdKhwqgfNJi9Kyh6d1D9y8HaUaGy8LtWzJzbe22CyBFf1ZcTBm9Fp4XUVfXWcvwGnHV88vxhcjG",
  "key19": "5m3qjudZRfGC7jFcVy7VsZg9gfu2HChrm5qNsDcHMUmhDumBzQmb9jjZoReA1qzuuwiTNAnm2rrQEf4cVshb3Ar7",
  "key20": "U19m2w1Z7Yyd2BZad8LNzYQ4AfutJgzbuWxrza9svEi6iiMRyonf8coFQhWdYDc8YVw8S1KjknEVRiMA38bR34x",
  "key21": "24jyu2PJr2sQhmKxm2Sk5eHYLaGgL5NFPauyfoWKwZqGu9qWRTKffYPcP56ffF3XBAT9oGwoRBAUqLsWjWwgKNBJ",
  "key22": "5ZmgJzzmh81hz61h78QZ8vjHgKAps6x9BtjicZvdDrMxDqhjbUabEQZPAbmGb5D2RGcG7bUQFbaofwE8naGZm47u",
  "key23": "Yf6hjNaZpCNUyKZ2HJmoBMepFMPemC4zuu5LomE1hqrVjczdAQJw7pGrYC32ffuoZC39Bi9aL2broyh3V8pmsvE",
  "key24": "5mWARRWWt9R3Kji4Pw4p1KiA31tC9zUfKwGgQcdyoQ3oHYxUP34TP22dW23jFTZkZKwvHwsac8mpC2fRK3vU4nno",
  "key25": "497RoCdikHL3XPvpstGWA6aA3YVRwLCsuS6rXbe8RQEdQZoipZ2QwcferT1dHboZuWWYf4xLEiihrSVG2RU5Kvmz",
  "key26": "5oMASdS7coPr2HhAz1nKPA4SLhe5MYwXjHb37os8cXT8xzFRNJ2efFrNKCE31PHDSifueheNHtEUDjQDEuqRC936",
  "key27": "gsJDuL4TDp6G4AN4EBZ6RdJ3aT4TrNE6QLt2EBPAdNJ8EeF8CkoJWY3GSBTXnJLeNVKFNVMUUmsbbthYRAXpKME",
  "key28": "3kg6FTSSyf5xs7mQkCGX9yvFiPX142aHH947Xsh8ekTxMWJGsh1Xoc1Fm5RBREL8RJPApbkQEgTQn4PPkeR8ETcu",
  "key29": "LxHEuze1gSPb8rRpNVc95Mpp2ff2mB7rgTb6xfwiFGUUthv8wQfSDDRiktw7ys6Adrk6MinzsxbQ5KG3iAi2QmV",
  "key30": "3wo3qYAJEEe4pusNLrAFvm1hHb1aa8VN7hKYYzYD9d83mvhpBGwfjiR975rU8BKXqb3kewSKBTCKACyJWjDYYcE5",
  "key31": "SUFGBYmFW3Y9v2kxkp2N2fKHV4xFYDLUNbNNR6NMSXRKv9YFhem2uhdQW2vwZtM5MxR48eXppQzQHHpfUiebXHH",
  "key32": "5MoH7qTGVdvA7tqQ8jZJe2zQMf9MP4xg1tSvryQzZusTbr8CimhSCbk1gZHtTEGWVZRctPQGuiRYGcPuEsD5LKAA",
  "key33": "5qXehpj43dFmGNubq5iNmL1MiuBc5eNGoU52dYKZNMKVqLCYBTnJd8m9oBYE9PxrcqDAD23verS3sVemn83kwG2U",
  "key34": "x7XUdFEGGjwp5qrG25wgGgfeB8DDg3EySSBYW5MpwHJfxg7tVbYDqGUsTyLymNJnZLJLahyzzBDweSF5qLTvAGv",
  "key35": "3hsdAiwVarQkMGyvJiZbRF47CmK6UpBXp4Me49eDf6kp2rNrW1ApNTMgSCjF2j5w9bM82YaGewAHd4pkLFxSb8j1",
  "key36": "4prEd5sHMKgx1Wq9AUjrkYX54DxaXowjQDKhrosZQ6f6wPPtZQkU6VqWNPkHgtkZ37R4BTUK2GCBqdt99U9P2Gw5",
  "key37": "Vf9Jj9JvfqqrpPdrd6Jipas5HxaAbGA9RAkTzst41Lbnzi534vyaLf5f71aHFbUs5zwfSt8CZighnYj82GJeVaj"
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

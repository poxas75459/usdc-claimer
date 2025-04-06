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
    "4eWjkQw7fLVFpvvx2NsrGgh4jzK7TT6PzzKrKZ6HjPNKrpgSb1enWD6mBpMahjFDWCMNJ2VvbE6tFfD8H2soVui7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CswaW1vtgX3aGRnei3qGZQjJTzAPp4mVspGgo6ut41CpsMpSowqSFSnXwW9BXpHJeDnhiQCMdHjsw8nyFyT37ZZ",
  "key1": "5Nbch3zMqLJedBSnUBVwYh3H8UTuYj5hU7JUftzhqHww9Sxy42X1Ge4QWBsSonDSLRjMEM3EdELjxFbcTx68TgKH",
  "key2": "5wFou6pjENXbVUFLhBxqsMwGr7YpxavRPVrtBWUy6tkzy4NzApEKQX9c2JGmvDx7L8HaGGzRJtsPSpKpVoG3R3a4",
  "key3": "KKgh4UXdydYNr9u3QvqvPZzLa4sy1cVjPLtChTEHJm6L3b4Mu4PvQKtzive7dwiydYm3Tk6cH1c3VSqZYh8reJT",
  "key4": "52ryrQdpjJw2U9juL7eSPQRwNdAqu5MCyEdKy8evtc9MY6zf5gAka9jga2oVdra8PwSE72EjU9cQPjqYtZ5NQyJJ",
  "key5": "2ynoYeUshQHs8ozzGXA6Lsg18MYKhS4EA4BYUYYUVSeAivC3BXcbdB1nKFyv9CgMRBkFyW8prgtdkLmQtpqBJsFe",
  "key6": "4umfAE6Crfw1ziN6EM7Qaq85fehHirEebrKxHmEKfJtshRPSWiwGpn5mkGjgk8aTxouT5fCaV8Y595GGnrjzAjsv",
  "key7": "oVjRoG2qa1xUGMcCpppSSUGFDe41ykpNkztL1d23ubQb1ubUzQGccb21vFzqeDv9kKu3abpSmcPNtjm9EzudkuF",
  "key8": "3jbZAtAcwkdEw4VfHbHD17AYUWg2Wu9GSz7nPF1tmquj9uXDt8LrgRp3g46mVAuHS6YGopLsuMFVLcRb7vDaLB31",
  "key9": "HNt88CvrEZdKudCVknhBPijffjKwmXNftzNrESn2oTVFCy8JbPKmUopdDBi1vmiay5Q7rFRKKohZkx9n2WPTkCy",
  "key10": "4cbWp9FDirqcKh5cAtvJKD43abBksLcYkjketJNwWBdW1JcapVkD3jooN4WvjRTCnkGJTXz83rJt86T3M4xdAKjn",
  "key11": "4pw8GX7tm57wFCznTz2dCEvxXf6umyNgn7jY1x6PBy1K1nFueSLkt3k289CdGf9j5dSqhCQu4C4AJ37bDUyHnPHk",
  "key12": "5E4Tc1gmpJ6VTAUEhUKxN1Xrs7FKgd8ZScRcaxYvrjNW3MtuB3MLN3o26SLkU2FteQk3uFr6eeJG2zayydLYSvMQ",
  "key13": "2GZU5d5iQrPLNYbGhqMRct1KXL15idQw2e9bfkHEm6xc9soi45UcMstJT6NGjgyGLPjtRW2XGWYFcXEfMLUPSDsT",
  "key14": "5dxvH8xYoT6T7TUYJ6jQqwNzAEToYbiuFzjUcATda3N5N7fhrXZ4u2kcGcz64529BrYkvnsUnYX6bmUoPQjXAN1L",
  "key15": "5et3DgG9qYX8BFZVdPuSxm3ef4PE6XwPkoqvvbTcKXZ25xDqWMU7FgUoeiqYjmMC8CorWYj47kDokEZDGET33qAs",
  "key16": "3qSMrjqz6QZ4CNzFZJHFzGjDpWSesmLUCEFN5cYDcbuiyNK7hyTbDZzohWrjj8tBbG4TXWwiq5xprZFFUwBv2Gg9",
  "key17": "5P4K7aa9Bbg2JjBvoh3mCvqmfi7FucyoTGwF7b5neRQWpm7946Tp7vtRHrLRE9ki6vERVSrisCYfAHkdQLq5zSaY",
  "key18": "33nNMR6Ppg79tbQkn3MwKTwDF4dRsRhSBEXVoQbPmVK6Ry8AhZ5mgPCJRzbc4jRn2vMeS1gp2XCJNud7TSkaMmB5",
  "key19": "cRSNxkf1dm6tqQrVE3mNjHQdrDgTT2NeAkAWoaarzxS1VrvckBe2wAZqBUS9DKYnL6h8kxVyenpJLaMXnweqLNU",
  "key20": "2eK2xeeoHGvhAFoVek52Tsmxh5FKyjgt31DFJeWYHnCftaY9TtAoS8JhLJyE2o8SrMKGjxM58tYq6bPDMfwtgZr1",
  "key21": "48znuP6YGgFunFRKc7hEUYS2dQHobZjc9iWvDiNNsgg58a9NVLLBmf3XTsZEhqGRkLP2SnvSwDzGcpCsJ1574rG2",
  "key22": "3HVRvcR5X2tSjmBQDqAqbXw7dX5S5r89DHFhMDFNcNK2rMijnMmyEG565SPzwkhNK6XP2CErYo2kXdAAkKJE33Jr",
  "key23": "48dk7PSGkHGPkQXkpNrBLEKLqenkVt9sRJWfqAaGwty9QXc8EoWHRc3HTGZsy4gt3apzz1B9JMaueRMH6PbSry6u",
  "key24": "28tnXtARt59EbHba6JmJYZa5gZyecjgCisviP8sMARx7wPtqVq8feCLtENTXQQX477UAuiwrHh127xKyXcTtwmQD",
  "key25": "5GSHudytwDjj4XKJoSTREMoR9vomYDqU87kqpyHShA2SDURC29wcDyeu6wbk9Y2U55CAwva8GrMzWj9h3aEA57Kq",
  "key26": "4hU3xhhU77zaGRVtLVxSymgxHTcAvx3G8EWwF6kX82EmJLwUpQtdTLfAr4MUz2tcABkVTrdittwDmHDkDAQ2h8Fz",
  "key27": "411dzGVAUuwFkt3vE7NveKK62oazedm6vYN2k1vwqSLXaPzsMPE91iDeyievW1ycifGs1XMz9evKHZ81WLnVQNMy",
  "key28": "4iMKuL7pSv968BmGiYeZQ6Ufx1W97J5rGz7HdJr8HvZ3Szw48otLzHZDwmBVBzfy7v14D4mNn9zZVzmbE5ULat83",
  "key29": "PsSbjYUn4YopYQHMtYFJrL1rb6QY8HNWjMr4Tx4fZHuqggko7H1Y43AgLAP2cC9rJFfRwpsmqyVK87RoMVobZDe",
  "key30": "3cVmstHaMnNrynxufr4YHAzjcxqk5oFYfvh1yFhRYHcwEaLdRdFDSvQ49HX3sNkzfuG4LDHDpgvJG7nUJehUoQtu",
  "key31": "2cL2DhLGG77eynVjuni6ks2u9ZETd15bLb3c33ojmahRx6ucv7MbHjqRBdmBNwBwB3q98cJyC4M7F5vBW9mcaFZj",
  "key32": "5aELJAPj1XZM39CnEpcRyzMAN5s899bNYTdERADCdqf26d6FyNi82ysCXjkoGFtQp2U4YAmQ7GF9vdQ5du7sRsSE",
  "key33": "GxENkqg3pQT5Sv1kngegjhZfDFxcougPNEQXFuLkDXiNDFntRXN8rx4hHjdLZnQvBn6zVxTWA8ihkazG9YtQckJ",
  "key34": "aASkBZNCP5zL2E95Xwd5xoCgAAhLcot1whXLn9S94UkmHDpiNpUUSXAJfrkrdhdvMTo96bW6fy5kfgGt4swb6R9",
  "key35": "52qQMrDzgxy9QiG9mzBehPa4QgiSDCAT3eu9Ko1joWMVNjUpWM2cSNsuCWGJMJNXibQ7morF3fdzbCmRnnDEBzrZ"
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

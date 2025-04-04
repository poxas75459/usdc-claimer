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
    "24VveWN3g3Sxv1y49bHYb2ucJ68H7TDopXdv2qpZeb7p2G1JmQTAuabDSYYzzmXLxPMougUxpzYPekdrG3JsBPhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nkZrjsTnKjmnfwK3EMqJAqPWArELx5YAoz6vs4ydYZfdgEwsK9ZKdMqmnnrgkWEnX9gLq5momv9R5LBVk6EpFEe",
  "key1": "5dBFhYkryWuGQaDAAvN1gv2viv6TLd5wN8W29zsJKhBwiYJiHHa1mjVmBLXBH7DGXwc2wc4KMoikzPfTcnR5AkMt",
  "key2": "4RftSM7jcFYd3rHHrzDNrdQJHknLK6G1Z1BiHhHScwLMz3etW2GtbVyXzLc6W1trZvuminVZja2gw7cjuQnHWBcJ",
  "key3": "PwKDehrtppFZ65LPNRpA1tYauDui2JxYszaf1JZYHHkd29pEqbACMsfw97znDvcpj2kn9LAFmEo6D4fVtg65XxT",
  "key4": "4MjvS2RzifMhnkTd9wWUtwS2iSTZ7XtRbFqeeguh4dvRFV6raSuxAuMjPd7JePPvF4mseYx5JdMEWyZipAURhMBx",
  "key5": "28jB3tSHKohfHb5L1dkAj4yZHctbS7fndQcoz6pu2G83LyidvJGbhLknvxeCX6Vjb2wqm9PtDAiSDZkavAr4rbY3",
  "key6": "35qgnkzBeZ6hDXPpPRgTNssMfMh4UuveszqBVxM8VfZSL5kQe6zpEehyxMKQmzmiQ5efpyrQSxrhEctkRS5BM3HM",
  "key7": "5wf2nKL8rPi8yQWGhsPZGTU81BzL839d5oQAooU2x1n1FJAYD5sreV7xk3YkeXNJMMvDkZA3Wv4jA8nt7Ss1FXeV",
  "key8": "5E734B6MTx867XuBBumPGnEtn36TamdPAHRjQyR3n7KrrGqNJAYpqC3y5nUdmeZLwVeuW9u4z37UzsfLA9ZF3xNM",
  "key9": "5LCoomS7eoJxTNuYbk4FqqUeSJFJKUqzUtpJgJFCmHDK4h6hvZhjjot78cZWpEfqUSaUsShyPdKrwp6SHsPMxWVA",
  "key10": "5NnT1CNJbFvR2mTrBQT1VAk7mqUbNpY4Kd9gmWH52vbUo1vBv286szmKLd2C2QWXnEDmrx6jsRCLrquKUu2WXL8S",
  "key11": "42KQEG19uBUrRmT7tCEYkfsPSmALygN1AmxRxvoukznWVSfFxe3CV1BL8nLXoQrDxYfVUcurkSd4MMkaYoktGRwK",
  "key12": "5aQ99FXhUSZzvNGw17qLZcRCyXtwWyJ5BY82xM2FhswWHDc1FhtSNUSz63Rt8XdUEWsCfZSU5d97QBZsLjMZJMPM",
  "key13": "2hKi5q6aEQCDUYgbMT91nZwkkQ4qY9hZZs8c4XBjqVnh7MdhKPqKWQLFGJTF1qTVcQfF4PAKHvFWj4PdFXGaBKfY",
  "key14": "JqisMfioJWZhEft8sshYZLCGcyAuUUsbHXX62oXvCpYRgYSrDNQTtKovoNhkQuDndKQEGgs452q1FqtYRzcZjgj",
  "key15": "MGbsTVJ17Vd9EB6xnBjPq6i5rd4g3tDwzsKMUJttjqzoYLBWvQmKY5Ft1unvwRQhDkPW1C6BpRnzxpY8AtfLHGQ",
  "key16": "3RcfKBwSTG1Ck6476f4H14N8mYcoT5jLXtNUKgzBBBsxevi5GjMqzpmnkQ8oBks5t6vGazmtfDRbWUpnC4xWgM8d",
  "key17": "3NJKFceNasXQWwTRAEhPt2itwHunSwPrRwZpKqvuCnHaAz8PsuMNDZJn7rv6yzv4HehK5tZ2RyR9a9uZTG4UuL3E",
  "key18": "3ubQ7suGH4TKa6gj4rMMvbGfjTJbk14EfWr2Wzrsq4QyV445Ej7WD8p9kMnpCbULJawHV6r3zznpJtA1T4c3D6PZ",
  "key19": "4NuQwCVWcx38gawkApgsRV915FPcHH5XLR9wL6g6Y5bh3sB1qGtTS6ihdfSdspWvMGJjV8EctMNEuGHXTfWDn6LM",
  "key20": "4Ln5ogkEtM9rWC8p8RD9A2GXFBQShsUywgsqkoAerGdFC2sEM9p6pvYwyaqMN3P6Lv69jc7s14TN6qChMntxnmUa",
  "key21": "MbwjhxmbE1NbNSXo3gSBvPwvnJLCCUf8v9M9oWZnH6f2DkRAhmcoNLgiyLuwhCc8BgSsSLc3Jx1gxmztRWeGx8M",
  "key22": "5wm49MF71w4qVj7eNgo4MLQCdAr9EXJBSwKwJQouGBshpWsVvdtuEvcgygJsS7mb9Bi2uRBYzaVyGkY9uB91n5BW",
  "key23": "4EiEGF5j4e8pcKWHiiUZtfNb7Lt44b7Y4RSHNb8HKZfE3JrNRaH8KJftR3dTShSMZgVuND2tG5whfr9MM1mCkudQ",
  "key24": "yQSSN9XhMU1zPh37iDe4TzV5DqRxLHqBLFh4BD8eKxuwi6E3wrXkEupEJ7ZivMxSyt5bgnha1XaypziTznz1J5y",
  "key25": "2tnxvyMnHYfwJWLkaaBte8pRhdRaRBSzUv7Dn8Wx9PpCifpPJb1x44CBEmwHhSFz1caSKgJiLe4kXwuniLC5WAi9",
  "key26": "5zL2qifkerPMagezffYJfQm1VPMHYS4D2Pva9MKVLFexWDCiWoheoCudA2t7nYKkartGoKYjjQTUxgKhTbKLphYE",
  "key27": "5e2nNFAXH2FQ9jMU1uVPrE1MzHvDVRtQeov2avX3rPEfsGFJCeiw24uiioaVNRLVEVLyeGVTKSAy4EkDQbyCfTxE",
  "key28": "mWASEvHejrSKAohbZjZY9NmmozqNUxCvPGEmtDXt577EV28n55Y5Qd5Mc62AJ6aC4UDZLzz1RWSU5vL8NJZkhb8",
  "key29": "3WJXq9apArRr2zzp2H3FPDpatNaJMwchibNrdfDXz9mV3beaW5k84VYVGN8d5mdk4Fhw9CxDtQU5Vpffn1XjDFk"
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

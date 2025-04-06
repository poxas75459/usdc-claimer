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
    "2uDr2Yar6wTWwsLDz9wv8m1dJNhd3c6P5DK7KKhCDDT5MaXfCksy3BShQgESaSWFNLM4QWQDfarj9bjZcsjT6ozf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QEW5qGRsrW8cLQKD2M3nDWdAqRoDhSjBgQ7GhRZRCtwRvGr6ryCABcbtkpF6XmH79MMVAca9QWk1g4wtsB2iuqt",
  "key1": "3EMbf3xqg6mXYXX56KDLt9p9o2QWAahBrrF9u5mhSBdY3gKXVVfwL6yTZNw7r3f7G6qSMHjQ2UShj39ioiBk9z4p",
  "key2": "38eXKrEQZ5mZbb5qZrnQpEQvkHjeeUhzHPaEKnWokCqCRk6yvkpHgTXAHTVjPFhHUicEGdArHXhWC2nmMQhCVj2C",
  "key3": "38ztYKHs51yZLg9EHrTDXyDo88ejVbDvw9JuLagxU88UFYCWchhB3rKmUf7Ziq3FPnyh4SdwrWJmyzgku1eej3bq",
  "key4": "57mQaXdNGNueNwceNpabVrB3R8YNzYMYfUzxBkqgU8NpQQ5ifiUcbujLHdcrzbgvisMGMDYNkAaCmG68aMH9ThPc",
  "key5": "2uEoQyhiARJ2at6GgF4xH7mvD3R7YaGTWypeQtSgjTqUz7rYJyf8gJ5gUG31fSnzaeHzM9HPiduvsRg8PDfPPWVt",
  "key6": "2x4yKp6ppnaXDYhzSYwVz8VrBvunupgstukRWb8iLi1eZcwHBTPAwSKKxm747tWXw2zDoJRvsoKyZY339Qu9a6Zo",
  "key7": "4nZEmuX4bSQjSJzEiJR1FBdKoY4F3TjrWw3Y8fpsMt6PpefsS9UfRBfAHD8iJmEyiPZmq1LArp7F9eoC32mDy1Ww",
  "key8": "4ZobnzNNrATNqVT2noKQtMhaotKEwEEQgXjBkKg5QcTFDR2CKfX1U131KQWXacoQkfaNpycygzdg2b98Lzvkt6Rc",
  "key9": "2rcFEK57LSNhCQcpukWj554FuGq399dL5m3AyZVFEy5dkK6o84soqVEsnke6DDpEXt6Gk9qJurinx96Q4ekbLQtb",
  "key10": "4jE41ao3XAGgGGi5V2TAR1VYzgnpGPoLACN6jXWYPHkCm1c2KCdUAGJXh1bbuSy24quDYwpkmgLk7eij2TsAfX5i",
  "key11": "3sVZ18EpyN9wphpcavkLSpwxZb7NLmALuVdKmiyJGgKaNyahFojTm9x6oxL5z2pEaV1hPHfyMquLwaBo3XsaC4fs",
  "key12": "4xkxpsVvUM46525wkeP3h6cvKg5rbbarazRd2UJLkA61L32qsUMDX2FtNwWwEx8624njfwEDxdNuyCZFqvam6Vax",
  "key13": "3Lbi2qmr3pLDwtGm585DTXkbW4JAYruY8hF7VTUrWtaL2ioRhUXDoWWwAj6AYgPd6RK5LtKj2r1BYNVcyt8TyC8n",
  "key14": "k4wDmxDNSCNjM2XmEgSUdXy92wvGtRRxMg8hQZ5LhfhCZnSrdpMASXsKfsnzYwEQjq2AWivenMY12fFQALmQmVt",
  "key15": "46ZiW33pM7DTjBzZ7yhyj9Tm1ymeE89npz542riTNtjYZsiieSB1ggpPJGY15e61Lf7t6pk6idiWfd6JQyY5XXye",
  "key16": "YDMAEZsfKLxxvCuwVf8CQDwUxMuSpziAhYxv97bor3wRCZAcnWa9BYT1xDsuiWsoueGbGipUndb3KSZpZtg9YiP",
  "key17": "3L7mfL2zmik6Mb5P3TQvB7KgYdgxPFaXSeUF4YgCXfAD15Z3duAwgRiF3epCTQp36cyt6sibwRXdw25QsPn7Ben9",
  "key18": "2b3H1PBKJpBP8vBSmY6R5EUSggxUyT5CaGM7N9iZVjQMmFxgUDXr73XTMEPuPQbkj1aQV5LYDJvfYzBDqdcrDQ23",
  "key19": "4hV8NjfCtnRvVzLw5s6VYxJ4paz3wj52JECPL1oTXewnvqhJatFNFD1hH5Wm2GvLQpfuhB7tNeqX97f2DZn2wTTy",
  "key20": "2ekeH7YvSTTQrW8ca7qMkjtmaoGsc9sPkUMg3wFhkLbJEj6WTrfb7fGmp3YNSigsKEh2GDWQBEt5WCxQvmvi9evE",
  "key21": "65hJ67diTpnfH1B5M42CKJCftnSz17jaEBHYwdoxd6rK45P9JtAjnhBZP6hY8tzzv9yS2MhqCpHyiMNe17MDEtPU",
  "key22": "4xMwbymr23vAu9SktZTfkaL6BhgsBX1zZrM5NcbdsnZD4ieRPEL6RAApqBZtqFKkDTGisZJ65cGTmvDPPyERitDE",
  "key23": "4pEi4CnMP3H6g893axK5m6AyoXqLFWWPERsyw6KzxXJaKUopZDNnwt2Gtqq75RCEhXudFoVpgbjfTdZSptBjXyCT",
  "key24": "7udEzy7DHrBtgjwj2HuiGeWqR7iLiDy3VRYoPBBu6wwQjewWGurFhTJxcbLjC1J44GD12s5Pq3V1NMtDhgEnDUd",
  "key25": "LAxsQDRVQnajMrJ4Y3oUrcqqveevPrPitS7k9LPpPHYfCi5b8WZES4q35PpJ9gMi6vXRNNFjkt5b8NK6FScfnqb",
  "key26": "49hw7Pd8Zkxam3WrqYwvrpxHfLUZGwNPMV5ZhZfbdy6VTpCm9LK6pZJ2ZS9uk2wEqo6AyhtZfEtzC6nX6akNaEzB",
  "key27": "3bNvzDGzAbnrsmqUJ2ooD3chYMzFdnqPba6As95Zq9X8tNJCBAfFqJUHWDBrcgsUBDKMmToj64RXbh7cxDBE1T24",
  "key28": "4XdHSnMqCeDbcSvs3M6efTZ6CJRZWpCAVA2MW5Q3mMokWxQhAboDieT8825ZMUEE94izC4p2mfxJofowiWwbBn2b",
  "key29": "3ddLpYn8bZQNVKM5bftjSjaCmWNiCJVKDyjfqWE8D44YUaMyZWQvzGFFA7sbyrF5Zw6aC7Aho3LhWwV1b8LqhyjC",
  "key30": "542jHeRiuHRJWwZHmrYYQjCtRhuPXcbcSvZfJb6MuWeNXCjsHiXDTSdbPFo9JfPWSNuy3eP3y1VXMdVPsG9ooCrv",
  "key31": "tuWrmbH3Xx4t7uo3o67shyYUgxV1hWNRa2wHuSjGdnCs6iQ3SshyFygKXibcaVBXDbGj3WRM9zJm1QEvcgb8whg",
  "key32": "4euQUbczvYZhLr5niErQLk36fmAd3z4km27PxDJUphJHCYnLV66vFWgQvxfyk9GUMTamxig88durRXze8U8zWe13",
  "key33": "3QQALgCtrthDAZYKuQHhbHEgTNfQb5XZiWRJ1oRMF89UbP8ygHVdwYzFbQWQAGb4yJrPriNLd6MYkRP4s6oksCXG",
  "key34": "59rVrRDtWh7G7xGQBy4NQocWauw4xFEJV3ttFLsFqxJLvExhdMd5ZNu8f9yh1B1Bt5jnzLiEj1r4Uqpwbaukqzct",
  "key35": "2RRYEfJoqMt5kgUaLfebGfo2Hy8iwyF7PZ8W5fkcaj9kbPu4vVXXWnKZwfHeHGmkCqo9gLp4QtM2FRkxdJcqagdA",
  "key36": "3VaAwF1YK4tnUopW7mx5Jfe6TENuGAoKi6R15eYhMkwXSecXavqdVKUtti8zjZbcmJzwyrczavFZckanRzpnqqrT",
  "key37": "5idL6nnpkbY5iEkS6QcK3gX5SwQaiS1yN19DLEebhGdyJatte7rXVDfyVsb6FJgrJCgydtnUCyFDzQJbQEnBoMSW",
  "key38": "2WYkoS8sDWTi1fbJViicFYxerEGgisXxJruTohZURCtGjv9k6nbTVCpSnoqLnZriSoa8E1idRtvhHagtTJsJwQpk",
  "key39": "38EufYuSgkJAZC5KJQgr6MCjs5Q36Yk1RVZaZJ2Zyoke12gTTF5366ABreXjK25BFvz1cjqMEaMQHfFmVNyZgEai",
  "key40": "5F4D5P6HjQms1YLtGMoVePB38c9SKALTmzBoKreum5F1WxHo4hXJJ1bkQ9op8T5SHpeQZEyvEGd9mt1i42y3tMhL",
  "key41": "5GEp9mZ6mKdbtqUiLm2GqTqbUeshzDvYqgrxoSHfEvo8jqcSCrAVJUvsk9N7wgZgqMMb5wu387EFiB2ikeR7Q9q2",
  "key42": "xN1Fc311nCdSCFHeJQYD7YNqNh4y9LxriJk33oeHyiyLyLkLDsoGEb7s6jWW2L5HLkwakYWJv66hDQWwsRAABXN",
  "key43": "Tzz23iCwH4s1BSuxdHiDAmtzqBetYz7GHBmrLxEjxVRw4BUr588C3iAykTGmEJDed1GnhYudXMBmNifgXtDJeLR",
  "key44": "3H26soiMNRwLjnqWKtrGsJJqtvc8xA1BjaU2hNm7maRGyKSGAM8RwrPrDdEkbHq69kNz4U5rdz44hVmsXabrBw6u",
  "key45": "4bwWm9EfW36ouGt4bb9eepNzCw1v1ixbdewfTmHpfknBLxL3jpVDXn4FkaqN593RL72xSf55YyJ7ZbEoVZXtZfgH",
  "key46": "64xr1aA7MkbHdJ7faHdiqn7QBdLdgff8GsWKhJkGATfsXhkhzi2Kwcbc34ZEKseELYQ1q7xUsqtMGUWFVZBAHD8B",
  "key47": "4N4sD9WTVNMCz5ruUPLRgrKtVxsDAZBF9vctYCRH3U2Ynbr7a5vb8VLDo7EivhFxhnChYMcoSDoRUsiaoyPdHqmj"
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

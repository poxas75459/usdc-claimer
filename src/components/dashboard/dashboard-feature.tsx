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
    "4jCkyXtNtDytRMw4AS1KwCeXQMAr6CAx7Aur1xMwkmemdYUAz4d56vHTYy8CVCmKP9MazGgnjrrJhrYaC5t8LvPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8KnRQaUbrHFJXbebxk9FSsiaXdw2ZXfWpneAySCZAHnS5Zu9NeV7WK7V1e7rh5kpyWmYcNbrG99KvrAyyREnLP8",
  "key1": "QYXTEh61y8osEfUmujkFi3GUHgrNjFpJuxSWV6SJx8QmSgNyqRJEFb5jAQNmzobLMAwKcWmzcdkXFi2nU8xoun4",
  "key2": "Yzw7tyS4kxPYonaaZXsLoM5yy1HHenkbxpNmcm9MaGvFcPDfFFYFB2A8ms6jg8rhZKHejT2a2qR51ZSffwY8BtK",
  "key3": "3jYHCQzE4sXVVbA1bmKuermLxRceenc4VyQawKyZZDzhUrykAdg4MBY2tjvqRQaZ1TqqGR97omWvRA2qqE3taxWf",
  "key4": "fHJrAeCLWz6i9uYuxj2CixNJgJzZn6Kj2XC9g8mXbbU38qEEHSND1Xt6H6Qaan1wmayAZDaQncotfDZzwCDoMbQ",
  "key5": "4Z5RNHHfENrqXTT6Ng4wid1hkv5UPC3azxzrXx4Jp3PiM6taMPtphTVkoeCL1L9pLrThxpqwHVXE97io5pBHekkh",
  "key6": "4Yaogioye5EUtvkWJ5YypniWrVbHAtpv8pggEjxG7GXcDmPB95tsv7SBZxpFBtFjHaEQezmJSCMZG2gHXm9nTM4x",
  "key7": "Qb2SSB8Tdaob4rBPbYw1BE9W8maBaJ5oZvpoUq3o4EpGfsgwvovKb8R436NitX92CswEPUXHJ32rJyC6mtHmWmE",
  "key8": "47zRz71X8ZSvhW7bBbnwiTPLpBrTuUwZdrtBwsgp9feexUXJrefxLF4q9xDFQkFbDUjrP7r16Raxv4BY2fH8hPLR",
  "key9": "5TzVNk2PSQoBF2mSTTTdUXcveUcdA5HEZttB7mGG3TwXWRcBdweBpCW4LHiPKux193znSuf3jqwWkFMD1ra7UpqQ",
  "key10": "3FndFrZWYt4Q9AHk7edM44xomrBXsowW1deErXhtj3eDpGKtFBykmUEpfBvp2Ek7NixP6VMguzs743f9pzAq9J6v",
  "key11": "U9N6BxgN8bjLbMLUhZotcA4Q24DQ6hYHUkhjB71P1CqQUntU4Th9JFn36yMKbuaZMAa7sVzQ3Hu7NinanoUuDVa",
  "key12": "34dooEgUSrYXzsKBRpciAnZXkHvkHmXkCkUECKvvrTnpFJRqJMRvdTpikAg3g9PXoYoNJK8bMx86FT4amY6jh2Rd",
  "key13": "4eD4HN2c1Ny8RPeyMRySsovF4qhbZ3hjE5bAkQg1JLbQ8hCXgg6mYxEcAgkfDMrVF8XA9FugSb5ekLLxFFNru1Fo",
  "key14": "5cmyDK5NjdL5SCnTbJKn31yWrsnhKeE4PtYUcnsWapS3sqFz6xRm9yF5cre7aKESWHwj49ZaSLcE9kMjWZRaBHEF",
  "key15": "3GG5eTzEgTBJqP2KhxVhtfbeamHLM53inDmM4ytzBiP1LVtZbrQXwt21LDQi3ab7GyKsRGUXJECYmRq1ax3H78Q",
  "key16": "41Yv6c6FuefYAjNCKRVviciHWAWD2x8VMdoF3vWxX1eDSCoYXKFhFvYE9QMRjgVYewiX8b7sKUt3EZNgRU2Mnvou",
  "key17": "4PGGfnURHBdZfRgRBQApZqGJvsniWf1anv7fCZrKw74Tr44P5g83a1DRjxkSiponNPfvMx5jzLrRAh3jL7XauV3j",
  "key18": "2km8KdWPLaSSW3km9rQymMQhiDbcaiPmMnq8mDSJaxQnYhh15eae9Jb1GnbZwMnJLQZjkAToe6TjN3uTrnMPaLx6",
  "key19": "VuN887aHQFqyMP1gJmhdxtmxJXaTjZDa2x6CPLtQV2vZpyTQGd8YUBLdrxgDK3FxyK9wX7T5PvWJuW9bST8K8mB",
  "key20": "5WzUtAqP11LXWhG2HLEBi4ExoJameadRjsU2ZfYK1LHVGMFRtXWVMMn3tfiZhGnZAp5jyAARCs4ag9FivpooRkky",
  "key21": "CEQwhYQhVG6G1HnMwjP57KxdeU6XRw7hiJoX9m82mieYkU3xEiq5u8AXHXJz1GFHdmthMk5KgobEzdPNDfvJ2dA",
  "key22": "3sYEKFuXJSYCPQSoEcZ6MpGnbDNjQm5Mh8KN7it5upoGpAPaUXd1FtRMKwtHk2NJX9hUjgt4UhL9kJogaEYBtbkf",
  "key23": "5aqyhEZntEsKLZoe2LEjJbo4yh3vavyX4UdmVZ4w4HkWVhW7bko6YTXw1ratsb4DSXn3N7aPLoRRUoJJKnHBx9hZ",
  "key24": "5Rg6sGX6DFhAMtaDfg6LaSH8NpfVH3p3X5q4mMMHjyKq2dgBQQ7efrgYwsrtuTZ9fYZUgLniFbf6ufkr5Kt2asaF",
  "key25": "X5PLWSY1XdW8LD8Zo4tRVp1AbRmYLzUwzSKZCsscC9UzRQaTaGGtmqqG9Pj2LZnnPasNHb5j3mYPz8GXSxWEXxi",
  "key26": "61tg5oiSQfqiaVgQAW6ynbtXAELgemfFi2nc45rZdtFr2zM4XtKkejYTraKgLA1jKS1rLTmVtb4pxZTPfsKMeAuR",
  "key27": "3Bxfx8XPpDwVYTJEZnwLnczFkaK7YrcsbeLAyPrN8qnSt1UoJkNgFt8XwC2S15a5EaccpsUW65bjSJz1LfXK8tWk",
  "key28": "4LMoPneEBQ5XJdgJCw6pkAUTwvkFdRw53w3qn7JhmXKTiJvsJmjuNNJNjxhznUwwdNehy62xAYNaXKsVxG5c6v2g",
  "key29": "3wixaifHYCaDW89UphweqdNPSMXUjj1ujbnrVMXAFXKNXqUuXDDc1F9AiaZjxzrKXouw7a9UFgQUfbWHENhwZkgu"
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

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
    "5SWuuEzBArpT83jcNUm2KWYeXWuZ4ZqRFmLAwtvPtQ7bn2vD1DnYQVSMbYUBoA4pwBuMVZqELtYwC5SvTR3eF7Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yeUBhQAsa3N9G8qoFb5zKPxDMLZ4KSTuYYKkXzUrBgtFEmBwYphTaMQcwp5jTGehXLWBJdBoBEnBLMbDETQwM38",
  "key1": "sPq3dcbgnZJz48DKNpFj25y3afn9uwsoZTnGhSf2WMHAFNH437HUY9hScNuMtqQv1CSqdVGeYrHSL7U44L8y7GA",
  "key2": "RYBjVjB6tr1ee7tpyNQhB2qxsfxcjKcSjnuywjGZEXusuYeoAugChVSWYWhs5wJzgPZZ1SxQ66UT3jsu898H2pt",
  "key3": "3rzZFWovARFB2A3hUeivJfYQFaBZZxh7hh885XT8DKeo7KG7dmJxL2CTaE56vt9FqT6t3FXNbgY2EcsY1MRZtaEs",
  "key4": "21WizyMsn5Zuczn91BRURgRN5TEwhoUmMds5vyxw5K5hg2MnYtVxpoYf86tYS87txFgNCkhbK8fPMdPehmum4D3g",
  "key5": "5QJUFhomxpBrumugaP3CTK28gGNQ68RzjG7TN97HdM82oyH1FRGayPmvvAVkNSHRAsBGcfV6LQd6tBzTi4Cf47qF",
  "key6": "2qUD9eZhaVzyQSTtt5sn6AdmDyL4uCYhncP9abUiPyTivkWfBgJ5DT3tMcHhCzqTNXqjNZXougTtyBQ6gfx5UnvK",
  "key7": "4smuC8no1bCjE31mcYvqTcukvYofytW5aTnFb8VDad895bNW6XzfagKGZ6QrhrA7CN8wMgBsSvnNzm4jerPdALYd",
  "key8": "UiiFUPgbUBxPMZhEMZY7ueUFA58UJruxz6GrLxqbHjqdDDFd6x8A86sWTwDA3VZ4f6MaHi7SfEsWizrxQ8sLv7H",
  "key9": "2rJ15dbzu8hNzGwHTFXLiKmHQoV84sHLmBWHdj5sFNRaxoXMCK8xYZdLKHEwBMtRESEJTJHZGNN2LQ3mVsZxYPH3",
  "key10": "3DmYBmhVfQqqiLchn1QnASZfkXb3VyC1RSvchrFM5zR8JD68WhfsNMVewaaqGCGpry93ytVr12r6mYzRQAADpB3K",
  "key11": "4FiZRKuULLMkkoooXhdsUL9uaiKqM1UAfm9XefSwjKvDUbLdnjMf1jhoDUJHTY2VLvWyJQfnBGSNxwYAYYZzfeVw",
  "key12": "NLVzPifuvFSnVv5cpF2FHPNL4ti7LhACy5XVTHUB2euG8CL89UCFUDG2CrH31JU2uCa9zKcfsfTsnVKHbDo3fxZ",
  "key13": "3xvtVJUK1Y9C2x7K2rL6heYmPim6hDXuEzfBY7DNz55NhBXaLguF7kWb1HZc2ziA6Dv8yWxXW4Gz3ttQgBNFUW2W",
  "key14": "2SxHHN8FG2QrK84e6kiKqGAzukK3tKasv4jueY5gEsxnvxscwSmEnt2b28ZXkmiQJMvphFvH44cWeiYVuRMFp9ve",
  "key15": "3xJvRLaWxbgZcNCztp5kvHApY9sCTevzhKbGrx8uTKzjkPU3dAeGShn8Dgrrs2sKjhEQbHrCm4peKRxXHhP57zd7",
  "key16": "2Fb62g3mMorUdENcJQrjr5MPhknESBQnxvw2P3ePwbYFSrJ7eHPwRKmkgmUQq1MYyGj9VESfU5phns6L15jZ6M39",
  "key17": "474sRn4Stb44aZxJgKFoAtdU7qN8iMQhLKvTK4yLFCo6MZmvV53Hc6VHhaCVr1JPP55HdapHhUm4XC6r9WSTBFYj",
  "key18": "2ZX1cxxZdkreRwKeQRnumwGFfqCDbpoDkW7LmU6hS2nquiV8gn418nrrn2iDNLNs2gG4r39YzHNnFpw7BAW8PEmX",
  "key19": "QUntwXWYW5Nsb7Fqc2vTuKdBEAXQ5x7dxuTnMNNHUhDJqqFQJARpyeXnnetznkEkM52SSZCubd9HPJUgeTrwNYo",
  "key20": "3dhfdvzM6YDkuM1F2qYpcSDGeRnHyWR2XvbQXf9epJGEBBsC8rYVcT7brbagkkkZGQJ5763Ut5vK2nXEiCwjAUJr",
  "key21": "4St3tp7fBRymZXJ5TkfPuPcdY4TYGyE76bg4aAYjDeu7LeaqJkEGqWAFwArYEjWy7pDQt5f8LZuf4q1zByCGFf6W",
  "key22": "5N5EmZw4BB8ZL5uCEsUJBo1jmyjYGwKtsfVGykwmG1zRm9GQmc76Jvw9bT2y9zznXkw2yTMVFUtP89h7yLQPrHH1",
  "key23": "3crLJo29fAhLJqqyK1W2pyH3pFmCiDTLE1RAx2PDqnk4SHcUxwxV9FQGDfAyL73Y1th7CfXsJ2qDmM7MWrwoB2b9",
  "key24": "2fETnCc8DE499GTHtvTVdmNtvPnhJLkpD2bPJcmuPtvzq9wEUBZfhid9wuhuDshN6bHN1kveRS6WVcF8HqpMTDPz",
  "key25": "3fgrMMzGmHULgHYYyrKGkmLsMe2FNz4ymusyH2B3cJj18tmm3XCxhKubf47FSZxubqQXhCu6fsrSB18P35yx3VNd",
  "key26": "3owL2uNTd7sP26p1EgdyfqoxvHRVjLZDK1U2vGo8E9QxPkz5oMDYpUYADahXzPASxF5X1fqQwQeECxFkHasu7od8",
  "key27": "27P9HmsoU4QMeAyfRA836Z8ajs4v1YXWoYxzJsvix2N9PGkmbWu6FeTSe6doqRv9LRVU112kNFcp1dzyRyJpH6N2",
  "key28": "43gvJvKwGxkEsEVy99p9z2cd3Z1gJN7jFopymXFHDKeoYwVqcYibDyjENoognqUefDq1WKgZbo9LpGd2AVdVW8vR",
  "key29": "2jdFuz9rXnE2arGi3qgaFoGZgb5Ut7K3YxhyMoHLXXwhFW2HkfyzCx1MpQ9Bjn4bxX2hd3UEzSqwMbppADpoMBXQ",
  "key30": "3vcXrW3E7c5JUYj6g3KKNvp6vHBfMQ6WVh7bERA9V8qFnomJc2vNfkFdqWBAhhRRc8R6SUKr3i3EsLFtE8SPABZ7",
  "key31": "8mq2JtZRW8CqjSS1cMZwsvMmC7gEiAHZXJHCmvu281fNP5M2UZjWSU9K71cYaAw1yksdEKWGa35ECmvA8iBitx7",
  "key32": "51HQGCZwxGpojLqrgxUZyJ8qL6Mv1AHsnmsK1TdoyzTsZcTRR367CuzMNNH74yNjRtjNguc5XX6KqrdaK7LN1Lgk",
  "key33": "3t8bfghenQoCFxBQupHHjNvdj6x8GeFYwnrkem58dCifQ2jvSP9gxt4JKQ5yU3mChFULJEdbTuYWAWND2UR7JAFA",
  "key34": "2FKJVzdPonRatUfWctCbP2GVgZNneCwgT4y5H5vdd5ME2ocSYdKm7EcVKVqrjK7Hg4TGxNu7eEHcVgyWAWwegHvW",
  "key35": "5gzSdGqNnEQPAMaz98QfeWaYmWEZS21JLQutMgdyKGmo3TFYD9KgfmAyQ7ZJgRFZjd3thdW6fCsdRu143DQKvG3m"
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

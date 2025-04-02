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
    "5NkqcSRi74ujH1VPXLmf88wxbtJWDBVLUkgm5qMVTn9BXtYpvGAR1DNGAPB1X5v2VWXF2eCPYLkD3cZdPDEd4cAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFeZdmyN2eZfTVJEQoD54QT8PhZypGHWq81r2VGynBbpDDqCMdybMoi7QkM8weYm3hBBhBhzWkMEn5CYdKBdPHn",
  "key1": "2SPqBWHsnhJun7waN1yVVB3Cen7ueBhsBxSj4hEVX6DdWkVhL7yU1e6KbiBD4rM4kCtaHuxFW8VeKE9ZRpuzGMZ8",
  "key2": "5udpptdaKL1sPYMcyJZq9pDJ3PGe3PgUqnbmp3n85uU89rWVk3jXbgNJ7DqTUoekkCNb7vrH5cCm3TzedL8fec9b",
  "key3": "41BmyDFU4es2j2mM47qHmuqpQisXJiyQ1uRBSmSk4fbKdx3ZLu338HiH3cAozfgvAWgtsysCpAJgBzbk8uoTGVQK",
  "key4": "64p92BKR9VUZHtM86W8AJ2GChffjoMNx8erBer9wEXb6ussbCchGDX1SZsmrssx4XPw53uWezMFhXSFeyC7nMreE",
  "key5": "46y2LrT8yB6nXsbgUusX4gcEaV4K28utTZu1tVqjhtLHn7sM6Krv1W7oYJYDYBebVJMeVQE45yyHTmoq2gGt7Fye",
  "key6": "5tYv3BzAQRLC7CYvFgSD2Tpr6F9cy5U6fw4b8MFmy1Ca1zGDy7wgoB8zhctFsGFN4Lo1NVgbyD9AHRhCeaFGNfpS",
  "key7": "4n3avyCVvPDri6DRU1zZmEAbS68ck7ohZc1RZAZq4eegWFJZYjS3E8idzeWNKNaKhXpBvhyKQ1m6aYbwR75c7PUM",
  "key8": "f7WUBeGvjVjztPjTDTJttFS8FWjd39Tzkaewxey4d5jqtXswnTFjpT6JYrF4rEMhW4ZBM4ufxxqrBxhvtJFVTBs",
  "key9": "x8JQ5FEDRQV2Ur7R6qyxJ1B8VJExd8qweciBzpZUdhyhhoTbhWBdExezWedyCUDedbEBXarfr8tBYwSHSCkJHda",
  "key10": "XAbDHck2z4hK1xDapvSigzTmgijz3G7KjZ421j1h5ep9raJF3dJX7r1T4UzuNeT1azEL99jwWjDXLWWf7xTGwg2",
  "key11": "4A2sBrwojNcPRrS4pspU9DXjmy9RFejFn6iBHpYgbnxn3Z7LERZfwUqX8CHDRN4opiA48Cn17NUhfcZCksQh9bMH",
  "key12": "5xra2W5uwgzHn1RuxKk4Zy5ioCYwpqaoVATYXG7BDoo8LyMP7LCZdumK2QYgVXAKDLJz9q3CoSVvoFvEXuU95oXa",
  "key13": "3tUkv324WVWVRRiffmBbNrghVKAvWdmBVYZ56SoZsxzyZfJ2D2HER5mWAkH7sJrwRrkPKZkYRWABPb9NcqqsQTtQ",
  "key14": "m5MzrVE8QVruuwdVFAf8nV5ppPqtZYQ8M8d7ToJykwJu1Xmur2ouCXwK3y8Pr6NYivxHAbgD5uYDCKdhBhhjGNw",
  "key15": "5xH9temVbxdGGKfXpR9wqhaW4udEPnbpVRhKvC5C857NWQJQqt418tKK3qCDqR8hGyVb94PCoWHfKjKmEFUfi5eC",
  "key16": "2Fzj3TofemuNX1DdVDVfqJ54p5XD1wu26NMEgmMGtMYfYDyZsoukQGH8k8v1UJ9BgSQz8FbBCEM2YB9RDHEpxfEM",
  "key17": "976EgJzMsSZU1Ubbk3k6QfVWAQeBYfQY4cLNMxENDGzFktvxA1HDAQc7dhR1mL25TuXzMNXEy8TriCV4haEe4fq",
  "key18": "42EcknfG3pSWpAo32A7cU7y9mMc8C8htSSeuQRAob44JCVqtvXa8TV8GUJo59sbQjbDFSE1HXbwS7yb8JAYxeKSb",
  "key19": "4LN8LdkV6AmEFewn1rBERU9F5pwVYRm8Ux5BFzGCsoRZjyRQfWbvAqnAQQSgaT83UTQyRwVS66E2BwiG4zJLdKYq",
  "key20": "4YFXp9bZ1uLzNyHTnhfP5E8q3GaYdA8Myj5n7zQz8EspSWzRwQ4fyMP9UbBqxZ15ze3fMgYofbvGhFy7RMRH3tgJ",
  "key21": "2UFpmehNhtY1JjS2PRzoXn5upydoYog8hG1guRBLEPpxWtaaNsH5Py7nJPnMxPhhKcUTTxccDj3hTfuqBSrqVY3z",
  "key22": "2DkAZuwve8UfZ7UXd6PqakcVVie7pepmJkhEtDwFau8kmtXXaxwBhozeqZn9YQwxSeT9MAVZgxdbCnbPjPCX1yDc",
  "key23": "3MARWYDfjj1d7oWM3QXD826cAiuh6Fi4Um5skfjFQfuMTnhcawcpjHpFg3rpgm1aKiWxWSATQ8BK1s4AG1sJ3TZp",
  "key24": "25GRVSDh39Q1CybW3ak1scTvM8f5LCxZatvrWJ1K8kb8ZD9LKa6Duw6WYFtLHbrJQ93C6pvbKjxdpB9BSVYa22VT",
  "key25": "4e1yYkzLAv4GxA38NaTVypYk9ohrF1ijZTBSqvZrnd5RNqzgdpGwJhsBUM9hX3rRo5ngFtWLTJ9SKq96RymXvLtw",
  "key26": "2DWrfCFNHXTRKeGor56o32gP6shfSiKFCaBZa91xMC21v2XAp341naRVfaMWjSu9nUzxJ7jyq5xNHp1jG4KnEQio",
  "key27": "2fNbEFcsDAFDaSPfzieUgDGwG3w9DuCMFqFPN5YpuixPrRnb58bVid7oGv2zdzZH4fUyhqew2pWEBRMeTgrAQawg",
  "key28": "675YRUJhuF3GVS2PnaGZpEdUs8tizqNqVkZvirrTHYp7UFX6s22aB5iA4b43JrgFj71kSdnfp7dxeMKfA8PvQv6x",
  "key29": "mfPXmexYFDDu6Ep5oGZ9Y9KeRuRsreTexgPMKKYjts6NkFQFEGQvhXsawwsD8V56sE3nVFwuqEB6tFv9u5K1Bif",
  "key30": "u7Feg2hDNFWUC7vfT1owPA971bW1xwPvJtfGctUYxiKAirMHBbJTgMxUzuVbMAXHf1XjQGqKMh98ZuxKyb65sYZ",
  "key31": "yDGrMnao93V6MXqfmTxi8vPf7kXdVdQ5q57x5MHxQqQZQPZZVAa2c8ETGMYwQLm67KPym6wx3RGe1cSzmm7BLFx",
  "key32": "AB5EoAuCwvC4JESsLu8uNDMjLoVZcC3qY2YjKnzkfuF6xZeqbJMq2gK79d4YzNdkipKASqYda9eWgFfx8uPeoMm",
  "key33": "41nDzrEektPwpLmXrpeUWJd8KkreMtb4KTHbxxJN49uWoDVEnEx2qAFWCt6wRiCo6dFnukjytFz6eJYzVezXQ9TV",
  "key34": "36asrbWEVtFHbqkvjuasxKf3cviKW3g6amEx6aKMssJAJ7NYsjnVJFP8zycZnF8i11MPUv8AqtmPesoAD548fNie",
  "key35": "Ma76j3bXwzPHbWGCsqC7eSY8iUipzsFFRzm42gfvnNjtDwUVQedGRdFUd4kTgVeiLT5r1tEoeMVzZrnJwoBSuaC",
  "key36": "58FzhVZ8BdxUMhZrB6oQWhz5Ztba21Fr7QP2nhGtMQcT9sbYjX9by8EXw6LDT7xiRKataKCdFKbZqKFiN4UUVYLQ",
  "key37": "32oGh7fv829BodLmHCSynV4eP5BecWjjnncLgWbTzX6gYg1v6BRGypFqWYBMb7vzNmjGJpbidD9zrxZG6bHSH5Ft",
  "key38": "4Riqp6MQQBw9b6bPzcS7FtMgsdu46ozrDx7HB56NdPUJwMZvYE4xiZSA3nWXWZf2H4J4SFfHm7hSrx9BdrQ6EKUj",
  "key39": "2hpeNhwynLCno33FnC2GZ7m1ZNctaDfGMUgD64xYDKjbKYvyaH4gb6FBQYYpmr4bkx17WLfx8NFaeSrtWJ1yVoaX",
  "key40": "3V6rm9ooTrbda3PwGu4bSL6dByUKfTb5uUhQy3aYc71tFBTdWoncms6r3Yec5UBapMm3CNLgw3uxG8cNr5c2PNZB",
  "key41": "q7pZj4RUgbYyPiNFVd11r9stneKzP1FfSwPMMvWKupezPorq6YCghv9Pn5oueBZSfGNJNzD6xVWuBHVJftRjQPQ",
  "key42": "2t9qNxfEMSEs4BFKsvMjypVSqhh2my1gH859L8eZhinS9DQj2YvfHiaNwPciTYEJQgGA27S2xxKefP3Cmiw2v4mM",
  "key43": "23S8ythosUA3aiDkhrtGDTcJXstRUJLKMe8KC9uKcrpeeYxQJdQSyMitGUW2JKrYrf1LGqvHGxkWozUkk8AjZNdM",
  "key44": "2uSsmPoakCLmPUDb5ekF3SCwqMgmXCiDHpmca3PDRWb4nGs9t2rP8KncxRHJcqHUQoB6BzY6QCPd6ngSQmpXu34J"
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

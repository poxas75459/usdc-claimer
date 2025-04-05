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
    "39CpZPzM2zuLp5j4LVtZs4gbPpQ9Fz9PpukasFA9a6XzrKdNruuPeBm2ZiuXwLSXBjNzR1SgGsgH4JVb4VXywua8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1K8QaKpKC3vAUMzKSTnoJFD34ey42w3ZcmHUy7iJchT6k7bGtpPKvZbrH4SHiNVXV99QVRA5415XaGWFVDUwYvR",
  "key1": "ivbGxJi9yFawEUhCknacX2b42kzW6GuQwR9G5FS4k5C8oU5xdojU8PSyp4Tw9qq4i6SXwpfk4dtpGsnnmBVaPpK",
  "key2": "ShFu7zihciGjgR4RUt5YACnhVH4yLLevC7rjzEDApEyANrrN6yKBnb1JYhVgjLryEaHs5t6oWS3XvmRHS6KrkTg",
  "key3": "3ffstZNkAvWtD1duoZ2Pn3cz8bh9kXzanayHZYiYUyQ1yNyTECq1jcAicAhm9L4XnJFTtDZWiFiryTCwJ3eagsj9",
  "key4": "47Z6CkYgUG2Hzm3YvFxezc59LwyUFVxhPN1P7i5H9qiezeTfxvHsZKeBR1AoiMHL7w3j1ibYokF3th8DT33ZyuZg",
  "key5": "2LBpw5PQxZChVNKfuYGYhys2m7p56FxRgC5si23inzLRUKVmzyXGegKE11ZC3Vvtu1rmZk2RoTgHRT3oFLciYnSE",
  "key6": "pix83QKqZ5L1uMngTW2kKpVD4tiiEccp3AUp2diHQKxNkP6jQztToPWJQAjWVCDWw53bwf2kmUEVsTFFXUgG1zo",
  "key7": "2bcbXJyQn6WB3anP8fhpZxtZzmVJRwJ5o2Wq6MDyjCt5m2rWQ445TyKLpp5QL5Qd1aEqMcxZjbr9qh4rMSG6BMWr",
  "key8": "iwW7DqyhffA4qEJou6bQUwsS6uxvY9tLcCKR5hj9nG1oXGQTaZJVrQNL7mRL2v8NfwzcnuAegLCLnE3UuTLyjut",
  "key9": "2EjGFakSuPbiJhaubj4ccKy3cuD9UC4xsMpzVJpsaghQWyfEeNANZHHn4xn7viyPDtuKBUjCFKPCgTWdp35DeMwG",
  "key10": "w16awXj6pAxQarV1ojkjYZL5S2PaRAGdbkLQoYDeEaarpvosGyEB7tZ7feZmMdY8dz5TyExw9FkeTyiPZrXB5nk",
  "key11": "3i8J9DCKXzwYsRDhDqoBWfUz8xXfCGhuijfUWk8qqoMCTrVbWZZXJ5XvjEr7QcPyxUQPbTZgXdRwJxGbBGN3h48R",
  "key12": "5DWiUVeZ5FNHfMHzQeqkaVBJmatPG7JiHSfjPPQegvRFpurqLy7eE7UUdauDyJBnnfkzQ3jBNTZfz9bduhXS7TsX",
  "key13": "5TnULQG5dJA7J4iGrQ1AVY8J9SZXGjYqsXMGGyPtqRAd1X2y7fKTxpochHAq9yjo2TwuKyFSAbHyxGrcroMv5Gm1",
  "key14": "4gMNEzKZ6bDfXg8RZ6pfWWvYVSQvMaKjpJEDhvteA1hLScvH3sdMG4hyzZJR2RWVcqpRoZbs3v6Qh9JxWUaWsXL2",
  "key15": "3eLko68TLB7PoY3RrrhvgXaHaD9A38P4HNCL3azvnsXxCSNMWt8YWdyDBpepVxGvZW3rGPJx6NQNV9LBzquqybua",
  "key16": "3SQHh1DqQ97EPFzNsgv8XDNxF1Wb1UFQ8cyW1Tv1Sk3gUsqqPnnUbapsMNWcxNsYfCgCkGgZrJkJK9n2cqTUtMhN",
  "key17": "2CpyKYLcf5DYTg9v9zac8wgFUaDEicJcvTvwQUM7VxAk3jQdisTCTtERaxJECZe3f8mKRiVh8G9aEmVVJgbjVJdg",
  "key18": "5PWY8KNMKx3c9Rf81k5HPnRMnXGd7CeA3w1eKTX9dNCRsaDAryzJ1BNKhtvs6RX86wVS2nSg4bfi9SxK2TYTn7t4",
  "key19": "2Zet7cJ1DjtEHCR6wRLfMEP2Yd8X458y6BJVMDo4W87NiGFTte73N7WN6GoUFxG69Huffyub3Ay4VrAoqd6v7V6n",
  "key20": "3ovDRB63XRLJyvL9HBV8dnTr6LCcwF5w6tjWNuukGhgmjruEEdzGMwJfNQHA372hHCokc3DLvY3AAKTMRTVphgYV",
  "key21": "4rW2rgyK3YENHyjq676QwqNwQiiHmFfryVn4CHD5AtdzcoucqLUdd9xhfppJD3FwZA26DvqGnD1ZA3KmC6PoTg8d",
  "key22": "32KMGEdisH5zYpbKdbeYHEDmQkUHbYJ5aetA1g3S9zkqdsaDbi7mzMkBZHV7B64WxaPE4uDAkd8Aeta6bu4DzM68",
  "key23": "5iPQqJpdNggZBbxVh4jRKYn8VqXruEHNh29bNf6JxUhfEyS4iDRDUtADpKNrV6tG44pmEbhfc1j5jGQKAXAdnZb1",
  "key24": "3phQcFbgdJ616452mpo2kN2nJrryC4NwVvZfwbp6DCA9es2iUECMdMXXA7xZm69oeNYnReW6R84bQytSebZcw16J",
  "key25": "3t49WNgftkDvE5HJasvmyysavdhS6DijPirzP2gTR4jEtV5xr1tjnfiRDjvdG6xCVg77rDrSjBHkFUtTLkFXMe6N",
  "key26": "bZnVBipfo2sgP2JFe2bqHV3LAbSGJj9afbrNofN73UStPT5HafC9sFNpkuNBH5ehQWd4dFpGidj54WCXK35fEYH",
  "key27": "5Kmg7RhzY3suTZw8jYGxLrRUtgAYpyx9TaWg8VANgX7r4ziwqhi7HmbbQgXVpMvsgSmJxvos9fHxgDUyRQnbr6Pv",
  "key28": "3xQyrf7t3U3T2dAXUXmMZYBUDMBBJoJeivLkdtcLimwtS6LJVRWD5Q8G24DyqPyRwZdicmrNiF5iBYhDV85Lugps",
  "key29": "3Z5LUohaJpFQ7kgp6bARJmmkc94hYmVPkyH6TodPjmHrqLdUKAjUmPgjaiMBjwXUgQHPmZp1Pr79PaDN7L2gYrTj",
  "key30": "2SrQUZgTcoadPpLMbdgSgHAybdWb4kzZyvY3PeYoGEMXcFPaYMoeEt1kqLYSgosLDjFjjVmHN4sGMqntPpkX9tAg",
  "key31": "24A24MiYPMpvBc3GBBQncuiB2c8MFPHEphpP7nSq95fUFRGJ3bAJaDa5PniEz7Ni8VsShufWHYq8QdfQ7Luv4E3J",
  "key32": "4fcXoEsTwVt3GqXkgueSFe4BXWoUQ3iqC8cvSh1Tx2vVGn3JAyZapwqyN8CAhM7RvYD1tfMNaQDL1vUZARCLMwx1",
  "key33": "5vby1HVAFTS2zrsH88P3xAiVRRRtpQ9JYnA6MS7EEsVRwuZvnbcdKDXyUQe8u3xMmVkdLe9z6AbnzzovzTqFUfN1",
  "key34": "4J1uYCyVxu4dghGBtZpckwYTEHh12pWZWJqAiEe9CpJxTrrBQzJTNqcinAaEE6A1RricYd8PHKw9vkbqgWWAapPq",
  "key35": "2Y2MCEr5s57UGqcWgF18cJt4m91g3z1TpqKhiwvuxYTzEMoMFWtYuvySELhPNe1H7zoLMQwbdffcPWJ7Ez4ZjWK4",
  "key36": "42Y4xHKSwwCyU3ciKrujdnKNWTUo3Gd67T4siYzwW12UxXMzEFCe3uxSsteRRVoi5iTyMyDxeZRMNDHNNXC338Ae",
  "key37": "r2cRhV6WLHUhtwjeaJVVfWrNLFTBFvZYxPU6A3kKBotoedHfLySngfuRdnGhfr1RY6KQt7SJBstBu8h1ktJABb4",
  "key38": "3tEwM961SrVnzqKRn8bHTiCLubofyCvnLdnp1Acx9W42KDH3Bp2aiLgwPrbP3HaepSwSFse84HmuZ2QhtdTYWKV5",
  "key39": "AMtirHGowwWpyNr5QTzWPkRSngkt315VmkRHdfu5VHNJeeKf3ySfhiGW2TXjQ7ZNxpr4spL2y4B3KFr9qUXXSUR",
  "key40": "126VdcNThW6fDsbbwipCEiYFAzCVW89DqEtv7yR1tVc3W46uLqRUh8wAvXMcvdWEN3Z95kk5ih9vYTyM1qoHjbFV",
  "key41": "3LRJyjtnxRpMkGNANkyLm6DgB2LuMbpyBy7VqawrcA8Tu55hmuxKMjW2uQeyJj1EJc6JEAim2WQffyf5MbgkJD3z",
  "key42": "2YXoGWyvZvvJDsGTvYLn1WqdsNH18wWmf8kGKRyxnvWfZCMvpNaq6dpxsTr9fmWRAHznuBFVBFRzxTY73swHmDWL",
  "key43": "PRi2KSfqtXxgHSB9awUBTmZLbGdADaokJDt1UArr8ExdnQJxkRJW5ExKn8Ya8P8HSUnsZ2RXPAhXgXcYbiHVVn6"
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

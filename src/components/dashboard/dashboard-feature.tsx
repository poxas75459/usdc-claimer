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
    "5Gep8J8aD6XentxW98SchXmM8uZXrEGBYDerhzBGQoXm1cfysFfeiXes3iDhQT8bcAfwNaV8cvQEz46UxDoRmhU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uEBRMQWqQWNVTKiyy42eiQk1wCNimabpxrnMssrTtJmRtWjpo74AemrLM2oeLyrY6r5K5X8jn1B2SM27XjDvJDe",
  "key1": "zUyizMwsh1JqAHADcfah28rowbqjGEGNyvV8eNj5chfZmLrMSA3Q2kR3iupMvB2UcAJ766WAiuDtiYdVjnaJS9E",
  "key2": "4kKE4qLTXVRRM4aAWLNReXnJZwtPzNGeaxbsv67NX4fhHc4AyDNe6BSWKymZy9sFG5HvpcMC6aJ4qBj1YKfreSNs",
  "key3": "5drP1tWYdK2iLHaEASyG83CNuoa5nsiEcoRR3kZaSyYhEp2Fuvo5ukhveHXEBMDBe6Akh3ankK7L1k23ozgTYHZE",
  "key4": "3nCFe5xpQ412cbZfEjzvCjFfZW2BLmVWciofzbYFJiniDrv6VLvp53LvE1Zkbe7buDBUaYVF3k8TkaFK9QPyQKU7",
  "key5": "5ACT5VoeFtpcsHXV3ognTVxXR4uJ6bWVq5oJSfuSr8SH3mdF4GRevVdwS49TvXQb9ZBayyLBv7VpKNisPnif4HGZ",
  "key6": "3YT1p3UDSa99yiuzi7RRSjgQBXRY6KQV4zFXNtERCNv6QuwJbCxnXixwV8XZiw1T6Tx4BEwyLXVfVeneMxjt95LQ",
  "key7": "4RkatgvyHNLkLMB7TnXVR4rBDjt9dyQLBTvvD1FtMs7vBcKfR9xzfruJQ7NCCWNbY2LDS9bLwMdejJwA8G12RkHE",
  "key8": "5oj8ni81Jr6enJ8JCEqv6RuVDxe1JZbxYMsoqJkgQ64LFjBHEsdesf2UgLJ5KB2p5MvkhTnvqM42w96ZtHsb8YBz",
  "key9": "4A4EEEUrm6RhcFjpFaidiLg8hBZcf4wZDFct7X95PKijWyMRmzKEYZFroWH9aGP19zY5KkmWELcbpQpXmPC72uvN",
  "key10": "xe6cQv1vdRbbv98dhmqBHbHHj2eMpugmLWgvEa2dcKvCmht4L2CHgbYksNAPMi8LgEvPor3KdcaVLvskXZD1pWD",
  "key11": "5nKoGkzuwHKsPXC5MRLZZ26wz2EWgDds5JztBcq22L9ANFVsRhuveRvkXSpDQ5McVpm8rSZcgLf6pF2cJciMMAsj",
  "key12": "2DozEhi6ERywpVFokynNpxgv8CqcFRyu5cMV3iqmVe8teUBBZvjVFhMts6psaoBRCrdegZM9mMbhaz6CCJKoRjNk",
  "key13": "5obzYSFgsv1m2xdSzAPbTHK3HtLc7DTVXe7Wf5RpM81S1PkHtZHNhqcJ56xmMYdsZLS9R5WtKuRWCsBybZhGHV8u",
  "key14": "5Bhwt8PgGxPYNyoZHtA1sujDYJDyidSHnsSEfGAkk8q3E2YMv4RFSWww6oxcppyvUbDQhX9zD1phKn1KeeCcAJr4",
  "key15": "qqfcVvexwnibNNrZqQebLYsD3aWw98E3Zte2ER1Ayh9DRyXR8GGRdvRVbb8TCnNwwQ2ygzt4QkGbKjNDnbi49b5",
  "key16": "58Xh9F3Bd8XaTKaQkXipVXK5SeBdCPbifVamzZ7Mnp9vVoKtVSaTWpUEQQauvmG57JK8Remjwvw67ExEAGLubAfK",
  "key17": "5XnsKrimTCesmihWzsvyk8md6CcXuHkr4npZij2jZyt6u1EoUXTsuAoedEchyWqPUWDc1BDmkvZFmFy61VQNrixJ",
  "key18": "mrz8rCmTomxiM1Z6eVikmyJstnEcaq6YQQv8XtJwyKwDB86zJ9NhXFatEAvgQjxtZzTouGgxaKUFEruSuieTanv",
  "key19": "3ZwbGCAF4MNUvJdLcgRgAG2z3S6EAsnEXtsTFqZiJKY9uUJwnCziedizqDgqDWhjn2S7xaorMCczJccgWRpi8Hab",
  "key20": "3ZyFRE3md5WSEk4J4JeKioFfjWC1VLnV4ZbYfUjuZvWihT3PodbfpwtwDGt3tYvhPXmsqLjS3en6PDMY2TC6u7wj",
  "key21": "56fEy6jSV1strSHD9vq88G5HvSpQPjosSmdVp2HxgHPbUCnWkRN96azFennuYDXErkJhmwpmLsmpA31dDxRBpsYe",
  "key22": "UjqpFRPNpKGid7pUXahYbjeRLfKZQKUuMtpQBSFgrDtHNhKGWon6uESobSM81uKCw97Hzmf3vigieHvkgpSR2vr",
  "key23": "51KszmiKAPpNyNdo93GszYAHsfLE3983YwGNr1ugGRUgoewkvfFvo5Qb6QdUkJGTokSWKC7mbXMJXvEYotQfHrUY",
  "key24": "487zgEEwEvjzEg5Gt1Zc1xdoWuYSXMWbxTTotg721q5tgphPfSUa3TPpDo3rQpCUmT84JcLPSYF89obSSBn5bHvn",
  "key25": "67NUqWXA5u6pkww2pLQvrmECKwbMEkj189nBLndVMHofZspWGEa8nnwLg9zFTmanErNToGJ34N8TWY7sYFBt4dp5",
  "key26": "3nFLwQ8gS7CahNNNATi1jhDG8znWpGYRmPMCcJRECpNKjgBBquRaWrGZrnwRdcdqSKtSf8jshWaorWmcgAPzqTZZ",
  "key27": "2sgJxkSUQVPFfmVHc5tKDUiaLnBiMZ3pcCKg8Tb4mnoKXNR4shhNk1x23qkP1wxnPZfYvnw8dW5pkKWSoyS3dc1r",
  "key28": "3gdHSDbdpcxVu933CwWzs9gpBLj5XUgFofidhdybs8o2qCP1xJaC4wUkZEyKmLNZPpZmQAT4ucDczZ5Bacffbk8z",
  "key29": "Q3pxitRhTBCsJKnuUuUHwYsrrszMgnWvpxaTgau5gSq6UwRvPGvfp5QWMCtctQchXXNgCsZsVFRsnbgAuDA8RNb",
  "key30": "syYp2DPrGaLB5D8NgAT531Y9RHMof5zq4BRDGEyg5K5nDA7vDBvXYggBZx76MN8T9CtZ5MUG7pRnTyFCLniE27B",
  "key31": "4NARyn7xhSJgYDHv8JZGtGTc2gM7ACt5RneJkjxVtetvZbMMUzSnGGCda3apGMP1EeUxG18nbddwBwvczWuT31pR",
  "key32": "pjgZqUHXnQqLUp7khv88ZpSDRYCBbttJXAr4t6iwiUvK8HsTHWQnQq3dEeNZ49aeacYqHvBhUnK5kNdpdYnduhN",
  "key33": "4YEFzoxwyYya1Mf7AQXbetekCHAKKNzRXwmNH1hCDjhs4XpbeFukMiUE33UkJMKwYYzmQFq75ETdoucFMY3J7sZH",
  "key34": "554aAbqxvmPjvzkFDnQBG63Mp2xsHkZSzFd3Bzeo9iD97CmT58YUeSo25amj2azPRyPRVpeVJDhxKxNEwhQLBpfZ",
  "key35": "Tubnnja66xmRrj2DDafmp57fv6g6JuDPjrJPRX5Y9mhmPmyqaHDVQ9JJS3xgezoya9aJrBJBy4mDu52LLSiRUgu",
  "key36": "2669F8diXJX9xVetmUygoj9cbxTWwikN7Nqr2JCs2YnE32Cpa7dw3NaAtrnFRfU4hQxUVtWwqvw4KacW3CMdQ98z",
  "key37": "HNyD2sL8fkJuPs8ymC3GKVa2jiJ7Cgu6HQBabbyBCnAN6PMu8EpWAfdthyKPEJyafL6xMZFjgv6WtvF3awVQsPt",
  "key38": "2p6mHfEmJ3aK9TT2LFwZhVBR8JoRRCRQfkJosHAkgzL8mm9mrLw2BtApqLcvCmQ835bGygr4XgYppkTPoZgqGf3i",
  "key39": "3PbSVhL9YkRPP7LNLXmuJ3AWf46JzvDhAGUAUu6ZjRxBLRLZ6Pz2M64Y3AsjhEz63pRMq4vFwR2hRpggTCv1RGfM",
  "key40": "2k15FJ45857pzChxgKruzVwUWXegw5NVahXSBQzwYC9viYmB3pTkqxmDu6xBxQBiymshkdAHbs1USHfvzAxa2ZY1",
  "key41": "3YjLdPz37A6yd26ggJ2wqdMspU3uSkNdFzzQrbcL5qkhBWvNPdqj9TCs3632LH62izc8wRakj5sa7FcwT2ieQKUf",
  "key42": "4gNapubWVccYwN19fJQKTW81X28iQoDByCtqkicc2B7vfbUvUruNM79kkbPpZGiFERAPxpvjZtJpEGysN2JDnKoX",
  "key43": "2gm5dFmjkcdtEKGhMUH1Poky2ZNL7TZmYRUNg5USwPXk2HY7V2QTPdHAZKWv1m2Uun3UcQXUyMmcEDwMXzkrFoem",
  "key44": "3wEY7wPEVvvjP9yxpwrscqEPto7euegxkh5h2kHoeDUTVxgzVMMECGehkWSkeGjnRwV8Sb2xNZnzVdea1Z9qGXxP",
  "key45": "3mcWXEVokXrcjUq1p43azwKE4CAtNN1piuc6LV9RbVhBSQ4KU324jPJuVoU17W3xQ95WbuG7ZkGrtPJAm7CX9CKr",
  "key46": "2M2yvmX6xaqSv3DZxs58T1ZF2pLvqJfAdskNhFJ8cF5aY7f2KJgD9c144ngBVQ8BeZicBxJNPerrPaRNjp8RFmxJ",
  "key47": "2q4hgNMjXucHE6MTWerWpdyrSsMSW9oNqp8cK8pn4DDWK2nD3Jxq4LZyfyqf7DmpyT9ZhS5mMjLqt8rgDsQkWyg"
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

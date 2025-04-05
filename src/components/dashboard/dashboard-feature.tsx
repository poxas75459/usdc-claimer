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
    "37c9v1Eyu997k6auBFYsbVqk3qWAHjdXxehLKJUy5km6xdkbiahoguRKizzLeXmjcgTqjsnXGgeKtz9TAsn4fEtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vgJ4zpZ2b8iCuFSPPy8m5AfhKm5yUyXFzASLee9bHuLP9xUJmGcLdwhtZAVVm8Bh6oKSpS71irtmbDXFvzTP5z5",
  "key1": "5Xpt35QgE6CQVJKs3fYuDmGeYJpdnvVL8kxuRLiMKXp8UamRmg3de6eiDDhuyqKfqdxeGht4mpDvhgpgrXNQn1Fg",
  "key2": "2sQhYjtx79neTiJPfEPhKEbZw3XD466EQ7D3yvzv1HCuwd83qi7vASGxPcMqp89TLV9CATHf8meo32HEs32VtwUZ",
  "key3": "56PyX2fUj3FGr9rX3rzdc31fszCK7o4mZJWME1pJhEiowynGV7GfjsNfkNEeYRTa3Lj7SaMRhjFg7Uvuz487crVj",
  "key4": "3MWFJiGXbLuu63PF3GrDk2NkEmYLyvknSuKPQYXkajQAkhrchxgzq4NFsv6mPFjfZo9UAKQomG16D1rUquSLB9SE",
  "key5": "4SSbDkwnR92XjXwHBMJQjfHFKeQB3DzkaxTugB6BUkfaqL9AZGzeCSPsL11bGzipzrEErngNfPqrJ6Y22DLNyjxS",
  "key6": "3swPkr3RzSjFw8CHRxj3gHwEX9xNjZJmeQKnEmfeFWx83b32giUWLUwp2MiZ9hz4JoJxD9TAYvXPwjUNMU3QzvJ8",
  "key7": "4acE4X8hv4NKqB9LphUpgaz6otQD6EmiHR9xHxtzVsDytXPJmyujUuEKaJNKiwv9pm9U7sEePj1svpLxpqg3AAVU",
  "key8": "3BfmouxnMPKN7K59s74FaVEFLbYTgV6GBvt3XzK1UuTQQCUVyC9r548E7qYe6uSHRa1iBQoYCmtqMedyxQkwo8bv",
  "key9": "59Abrjyn8Hn3awJtU1TBH9yYq5rxVqxFxVeK7NDTJzWrrTfra4guJbCDyJv77BE2seodDGrgiiAUAuAzeVtGW22w",
  "key10": "34N4cYKdUESeZYcnuYuvp2nwkmYhBDuE497ejnuMGVqtCx7piF5GXkEvdtpV89KTpyyNApCGhVxHeENLkPu4FFkx",
  "key11": "3dG47wMxdmAofveTktu7o6NRxX5HHsLU6c4prkYtBaFDQW7dSRaeKD8DN4TkMyBhuJocXjK2eADwowPdAR9tbJvL",
  "key12": "3tpkyL8nxHX7j7mkkFRhzgcWrMKxV3Ei3WUCxMKEH1M77JFb2TG7Lcyw7QXsyU4LCi44SriH2vZdyyg2sDaNxXpL",
  "key13": "4T42qeJg6wCGMwemRbvvihZzuVtYSRJkHyN9pb5bRLDhJVEgbrGgZAi2az1FYHpMVZgiJHAqeeyJ2xTe3MLbWGhL",
  "key14": "4MnZP324P9VVq3EGXW5MBc2wFKQ7ucPy9N7REc3bdTzgFXXf5FCavph1yPmorUMtRPUJ2uWCf3xka24LYHtW1dFg",
  "key15": "4aerLEFDc79iMGNNQurncomEa3ZV46Fj8P5r35991RY9RpYoHjRSp7hFhyzqhuvQVAijhaoSnDqAU2oAu25t1S3m",
  "key16": "5CMTS52gPs3DEBUvbknahAumjgZg4rnrNxCLcfr1BFabtyLKrfBfDzNaYJCmSMPBpwdk7izwEQyE2srzJXgaMUK3",
  "key17": "4jWAo7jcEvixiqDnLh1jktaoxeVqAewLGcww9JNUrjxJVg1avDDCQstLwTjY7QTdH2k81RM8BuB79G22bovJM8QC",
  "key18": "DPN55AmfuPjDcRQi9QdK9ygXXC8Cc8z8FEAs7yoSzT3wcCoQ7iDKYxiVZ6zeAS9fBYiNSvDDobqykTeEt1DJnth",
  "key19": "64vHEdeZa3ehGJw7y63BgYcRAr1Mjaj3BbUXvxQ8FmcL9QPWEQSGS6faMA23ric1NuqFQekJ6BENrUFmkR2u8cj",
  "key20": "4hoJFTT5vZxHWuYaPMcbuN5JxT4ZSeS8LMJS8StBLq98hnZAAefS1wYwNqrJsSwmsxbsykuLtxkQub9Gpd69V5H6",
  "key21": "2hd8knd6VAHFGx2Av4Tqh8134nQPXgNwNK2ozvXK5pnN1oFW8BCucY4CgRQtWwXvMbFMcUTbdMyQF6dFUuoNiK3Y",
  "key22": "59iV3sKgXmz9JrbB9BakAyirPRMFWLEhvbuH2Gv5Anwnkk2jfznZuMW83wrG4YKKV4dxPvdqySq3eHD6rCC76umS",
  "key23": "5pZRCTjgjAMCXSz3EZDmrprsA9ofALe4uHZzfw5Fqv4o4N93cf49THJ56C3Gj7aUJ3p3vwZFq7jJBgzdyiaNEAwG",
  "key24": "3BHf3R1NcE78K9iTbVrRqnNP1kncyCu38UbDAq6c2mVR1uyW8X6vv7Aid72QhorNmGqGF5KqjBTihVq9xiJBP7aj",
  "key25": "3ek4oYgTQiteqPiLL6sNrZpGPKGTQGJn8N7Y9FdDBKCgnq11EXwWyATKWKVamUydbJB9sfizDcoJRWYR2x6CnAJZ",
  "key26": "2KQu7dt3NMTQsfpaNM1DuXBpa5Ypr3H7EB3VSSXyUfwcnBhocmGgim2vAfvXjaQcKM1SJ3SqeedFwqdwodvz9FVF",
  "key27": "4hYjKH3UqeKKc7zLv2dwWq9Z2of3A5q4kLnx8omxVifG5o14M3sNeBUjqsnWVmQHaohkMCDFxVqe7SeyMQPvJPmZ",
  "key28": "4mjUykbcvLJx9sDUwT13Nu57ariVptCtyn3wqwLHRmeTzXHXJgvrwJnS94UMVWR4Aba3Eh68x5kg7zQG18BxtwrD",
  "key29": "5WHLaM1ZGUS1zTWuGTRBK6LeDFjcVhv69wFmXuE1jMZwvPLiq5fsBMe44SCmDtzaEvVuHauZJCi1ADVmAojYR45Z",
  "key30": "U7U9u3VfgXAEsgDBacPjAu6NCmbs8oS3khWpeUpHcAFqaPSHD85xqhVDk4hHT1V7Sg6ySC5gZSDcDz5myaCYY6p",
  "key31": "52HdUgcGKRRdeRBqH5HwWew8HNistudzXQDepHzHZQgbKLDWrSrYvQndJEoNBXieBFPxhWAM98X5zpWUf1Jo2vLN",
  "key32": "5jZhADTrzbQAxk9vXKevRbwEDEZ44JfSX6zEWhorkV478gEGShcLWQvNyEqtDM5jU9HFPfEMcieWD1GdF2mFTJSW",
  "key33": "36Jiz7KiwvRyVvN6Wcexpm3xZ47fQvFLmyENW9NZLcJWYqVFMH9nf3UMMaBjw1puYmodcdobZJ9WsSDHn397M3Sh",
  "key34": "3XjGoizkK8EWgqmxJ56MzRxLiRsMdnNeA47t6bzbWiZ7TAjyuSdRtpQBGQw5nBoBYCmAQriCqJWANBC1i3xZwVmN",
  "key35": "4V8isQRurN2GXnaV4C1pa72iKYGUoPrQAM6FmV4qwU1CUuAYHm9KazvGxBh5z9heMUxmoHaEcTrBwGbwHtppGSYn",
  "key36": "3EYyrjRiRpVD8rT7yadhYCQAeWvYMZ5d4XfVb82YZZ45UYARtxjbugQaKYtuC2ekrogKMK8szz3GEBZPfu5yN5vY",
  "key37": "4cgf7GDkH84uUCy4UW9aoYtNjdvKEkNLC2GQTxCp56Lgy5FhML2CePyGwEmBT6uoqkWHLNzA95CXQahTafLm2itf",
  "key38": "2sUxV3SJjwMFA5hzP7ERHDBZyqZvw6kDrXvTMnkE4qyCoUspATkjZeMG9y2ShmcnXujwE2BBhNxFJGkedVj8vDVr",
  "key39": "3RWG1YF2PFjspvJsBJg16x3Azgg9769syru9DzMAp7So1HtyirvkscpisY1QkPBsvb3xA5SNamn9xATTur7GCVhd",
  "key40": "R5kMY5CCFmGfnMydYaZKWxFmP6UwzF8sKookhKsqa2zkkz2f6c2uQTEEdZKbgaWhBAk2StUwQNUxhRGGq5QYVtb",
  "key41": "2JepYazxAABe4qtMWqMjTby2DpeehE4tN73Aj2X1MBE1VPpXaKnrYkUQ8T2bULYp1jsVosRKSgZ6CrLQSBimsQQn",
  "key42": "4aXm5XqzWqMoyeDyq6GC1e1axyhh6wi3cU8UFF1rycQ6eWWZBEPEq1s9qmpqP2hzCbQdB9AHfsZZMo9gSezzxfrX",
  "key43": "22hFeUNXSS1b3fK3Aeoih5fM1gJARfb8f9isdCejkRkkUktMKK2NEL9fjYj8woWntk4X6Agi5Q1RjZQRtNbnc39N"
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

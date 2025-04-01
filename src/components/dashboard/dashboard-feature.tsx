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
    "4G4LP4KD3sxJfm1j1raTQjVNN726isd1SBUGWs73B1YMXEiXmmty7ANCqkttZnML5aaZnHHLGiNhBJpzQvmANoRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w28cCyBr7RzAEyNq16TYSPAsroAqnaBTfYbfaqCEsYaEZ8w1xBJYfJSjieea4ct76zV9BYSmgwJ9u4djEdXMffb",
  "key1": "3ByUcQ9MfHtex17GsEKnAGUqEuAZC2xWpbYApxHCcQ7EwJYW8nm1vsebxhxC3J2tY5wXDu3925qmcVuP3K6Pc13",
  "key2": "2mGf9Pv54K8Awt1AuzXGZQEsFUAWcnWngBkjoqT77dwrXPMUM2FmvRREKyZ5jAULvdqNWFvRgf6xLcHh4h7MGQMe",
  "key3": "2KBKFPSa7UENKgs3DCWQ26CFrT4SyyHBWQhUvQXVooNQFxkdM5zcJD1mB1eMiRXPhguRXBX9gSDwtHrNN4N9KVL9",
  "key4": "3Cp3u47bRKmCj9E5Ks1czNkL7dv9xyBhFymwdPbVtbyjXdBZbQEkQLkJquhRsAhRqqZjx5BcjrYVC3oVHUjPYqtr",
  "key5": "5npnRFu7TnfD94XpU8Wm1JDBiAWzjkZ1DArGGd6udiAErUg4iDHUZgyLypvGtd7m4d5NHdKYMNcP9XreHFrsJiza",
  "key6": "5MnYYxTi1TQeBFdy8aVtnZk9nmRDRbb7xqEJ88sswGgoP6CY8nBwGbdxxVLTEBwqqycG3sJqze1psTam25FMFAbw",
  "key7": "jxG4Fx7usxfo9Ech6r4etEZEQvQEJq8cq8NCqfrsdy4SW86fzND22wg7LkfYRXXpMepoHE8X5a3XYkNWU63Ky1T",
  "key8": "5ke1pwoqNBmzF29WwyxxcpHoa6UMfvPU7FQZ8qXuyz3cn1uS5hg9RY82Qg8TRJ8xyCnCNWN99JLfhajCPdtpdvQ9",
  "key9": "5LsQENPaNhn8JcXydYw4FdBqAPfmrithTXbwBZPkapAGi8wxW1NjrW73etoTUmpQ2qMwhQ1T7k6cJKtDgsEeiCzw",
  "key10": "5SXV8rU31TS6RfRNQzg2VqvWB3u9hTzqdnkwAJ9Y8UPsAiwZbbtbWVxe98docR44hFEt71KRaZNrKpr9vWp8yhmN",
  "key11": "3gPVTfMYtiEhuJd6CgVVeGUdj9eUDJJrsBWMUFs9anXN51zUos57r2ZVFSMMBrfLhPoP7QRv3FV6iUrPUxZPjKWb",
  "key12": "Yc1Y6D75Epn1htGiVEMDUACafFDNxJSv5h3jniMG32zas4XtTxqGH7XULT1FZACfJomMiuFMeXyNbSBuPxMAjgk",
  "key13": "3nAV3TeBVsqYcBHhDJMZ9oNf9EHGNTvhnsr6Ttv6HpF8UQZHtjcUj15n8WtjD6ZPWXLMtnyRJnzWvSaL3kmFjqV8",
  "key14": "2cyiBtV1f3qJy2wk5xVqdChU5z4uSLcgrK91jmHTAYvMzF5jtsgDKANLBe8gYPooxRXACbKpFmiUTqf4vz6J7Yva",
  "key15": "2LqDQ2uotEikKrb2tvkazfcZ3vwQHxZsaMrNQQejdbKsKhZfkqYFToyHNsq8HweE1Uvfdb2picDYyfBu32EQGMDF",
  "key16": "3kSjAXMEZuDi5MmV1w8dMAwoUgYZki8cVS1viYR1p51aWtTcwU3yNeZSJanNmJukvbPVew3x4r5pz7MHjZVDZCqB",
  "key17": "3mx4naN5HaaqgyvzqHCfaDvkiokKbrNZGdbESV3CnX1AnE1cnD6HmSTDQLpJD4zgeuwG2LTgznxbqtj1KyY8JLCi",
  "key18": "3kEHKgpGegpZbuYtWdACkkwYDbKTc57GEMJD63NKADQ2PwdDFvewtucbF7UyoVwepwhYvVuWBLBJRJ4sbPDTxGRR",
  "key19": "p8aJMn4Q9J82Cb73UUaZis8UcMFhFRLCqgYdKtnmozuRwnUmNbz1AAcTZH2peutL59ti6iTC9mj7byAq4hTqA2i",
  "key20": "5BuWY3QnkTv13wAAoHLHi7CXZEGoo9gkiUd9bADfHmP5FuujerADQtCQKKsp3ssB52kXejikugFD2pwZ113JAsDX",
  "key21": "pYUbG5Qa9dZToQoADLBPoTVhJEajyQkznLLr32FvTVH9jGsYXLvHoSncaPTmmknhTb3NDwHuEPH9dEZ68EGnj5g",
  "key22": "4ds5yBn9sBc9cKXApsoUtmMQ6zsPEG37MtEETDzs2cCaXyVy3XXd2AoB9UG6R4E7eKDsBp4ejug9dda1jN58TTmr",
  "key23": "2eWT9xJ7PTyBjcb22j1K4SZDuEDMAfjDGncCFtCvvfZcneVUHQsG9H6P2TNtxCEANwrZgpraxwggxE7t4UYg9roN",
  "key24": "2XRBL8sHi8ufEb479NscXjC1ywjUWHBAdDcZEk26fh5awxa3BfZcDJtQU2r5sCFLErwAwzSQe6nBZmxkBeQ9fU1z",
  "key25": "37HhkeWYvgqt6PPdjQaXFvNEnhcZQhEoUZX3J9vbV1nK7n98NRpqjD628ykDHCp1Gtu78jfFh4DFZHcdDhZv5twR",
  "key26": "3xGzkERG1mMxTiNjgXZpXRTzvCemhAGYB94W56mAvqrRSh4BoeVTJwxUjJxnPb4962xDSQhC3VZiQP3cxPpZzwwD",
  "key27": "2AndHwKEEJqn3hhkWNw7hVttca4JmoGQhCoWW8Z2BEWD5XpwdfDo9HQp86FvSK4YfwuvG8PjyDEMCh78nWDkSfC4",
  "key28": "5nZiugfsqnWC14VX3GjhWEV2zkMcFLPmrkfAAAGfwYzYoW7ECsY5xQJKZUTDARod1jNw36hkCtbjxQ23inxQSr7V",
  "key29": "rP1rdWu71SKqty6trXgnFgDiMCAumuhD9sUJxCs9aPsou663wqzXxQtJArYe9ywF5AUSmbvV3JYuxyikW1RGG98",
  "key30": "5nHQTWtfQ3riZPtj8bXfmNzcWf94Sq1VCTgcYa2TpgD4adVw2oYMw7XF2xNkfd1CvEq6gX2c6uPnyUw8o6hHirk2",
  "key31": "46dcgqaTHYc4TZiXxz5Ynzr3cGpger6aiuQwH7cqekN3pEi8V54KTSL69tJ4h1aC7SoyRkuLVsQrr2QvT6jTHozd",
  "key32": "4NWPdPkwq9yBxGcZR437j3bCc3rUJjyeumKVaVGNDbqwqH4tAk5Z6UCzW1eJ7U6sVetfvzejYNKCN1m2QxmAKaLe",
  "key33": "3ma7MRFGCs73C2dt6bVv6DN7SaLQ4whCAYuK1MLs1pBkqUD3W1kRiWyG2YsVx8BjQfM5d98Sxoi7gLgKaGACCHSe",
  "key34": "4MouTMfCNUJ8Y5xNZ6rzt3ePPxxQpfkbdkUdJfofpPbEE9QJML22m1UAq4G5gr5gjN76GdvK3yV8qiqsCQJw39hr",
  "key35": "2iwvXCyDr62G4QkPxXwzNd4kLbuXCaBkyUjnUx2ofrTnPjB5e8sBKkftsMq8EL8KP2Cs92323r6rUhtCrFW1Gg1W",
  "key36": "4ycvCvm2EA4iw9y5Y4D8SMXhNBbVAwczm8ajvjiMYx6euUEowhT3G84ELb3tkuxyBHvLeX5Yen2jtRFnwLUUq393"
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

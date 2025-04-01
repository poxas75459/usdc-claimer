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
    "2uywRenAkkpfSCRHivX2F2DURpfWR72YVPBeCLpcWX88zAws9R4tS6DrDd2rure6Up1VmRH4eFPqZfCJu1D9rv4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nDbDBzSBnkfCWLw44cLf1vJiStBaqhY1w6aFqt4P56RbMoVtfcXznXwgCbXunE2Ca7rh2R3e65a6y7PcrqP2h4T",
  "key1": "gESTip7MFNdkWrGydmYmrA8jp3gc1xGoHhoxcHkSadpi3mdNHvxR35hoRtKUoySyLgEv8iJhCWro6ULvFkwKgWw",
  "key2": "4v2naKbRUhT5aZPfqHx9kmawiNcp7DfU5v27G8UQ5qxHd9q6UBygLF1t8UEF6U7r6NnXeukWVZtXyeyzHuXHJHpd",
  "key3": "42pw2E1pCQvDix3PQB7BZT6TQWyhxhmjNezyXWp7mTDdoBFhaXHT3TM9QfAQwxkbE6HGkTb9PtGYfayEQyZK1znY",
  "key4": "3pu2Y7F4B6EQunNTLza4oRJGSXqNX6EiYQtkFaAbnD8odFvSTp7gCpX9o17UUjsm4C7GUL9jJmVyjx122YztWPDL",
  "key5": "5coFKtZnCM2z5pzcNCSDFWzaCFPnjS4A8quboG67HpVK82kZ4BoBCsh79LThprvxAa6BnsaqqdhHbE4oep56DPfv",
  "key6": "25gvL8ZcMLWgxrgXpbBaZFrtGTHFfEfJQ6hhcu26bCeaArmDxYZb9ksuGKVKDBQCbfiC4iL7UjRHyx41EPtHrYrV",
  "key7": "bymEjUcXxmfAszzpe8gfw1s5pra7U8XhJR6NighoCSG689LZtUALsCKtgef6ev6k2nQM21zYnSZDkbevQMqxM1R",
  "key8": "3RWYtk2LtRSExvnbHei1ctFjAqM6PTXwGTkQshasicjG1VfTZBtyWKYo6SExKCThe5wmknJNn3j8cbJE6S3BNaXM",
  "key9": "4BWa6LbYgkfKKRmCWmhXs1dVDsHDHbQKKAwc2xBXbzxkAuBX61fDri9B39q1JNKQqnaE6AQGcH343xtzA3qS5d8G",
  "key10": "2Yye3CX2vB1e8PH1FnewXDEKBfRTziA84r7UD8GZD29GYXjASq3229y1nVyY18Yetf6JHtYtpHBbF7AnAm653CmD",
  "key11": "4Vr5ooMB9rtanR9zm7h9JqtaZpRHwoH6HRu4wgSRF68zzyAvSfkYtyoYYMJSes2ULLJ1oRLiGut1YFxetMTmTHQt",
  "key12": "2cAPvUjE1Gzsybg4jxpUGNGVMcwZVNTMzQRQiB3AQqzEC9jYctwhHVqr1j62rmTJyvnQsuXfa2aRmpxdHg42XX63",
  "key13": "5YtoPoUqhpu67z8o8F7JKYKaLq7Fx3BPUjRLBxGpzUzsmmH4DwVYbqFjU22WHRRqsBZKHXC8kkGmiNyLd3aymLdx",
  "key14": "2dMT48vek1keZPhwZ68kxiRrSxWanS4ydL4EPHMB7AadLYdJvEgyRqSoz7ShHZtEKs8q3h4nu59twQGdshD3jQtz",
  "key15": "4nS5goWkNqmuffNH4E8K7HKFR3cYCWGix4aqbBKAtXH4y1PMs7bQjMkmdotGbpjzvGS4bcxoVoarutZTJLNzBPHY",
  "key16": "3Qf5Yf7TgMBmEtc1gk8yUwhnN1pnvxmGAK7U7BvkiqnG4Ce7E7m5yeWPgyikrfnCQ3r7ZyFh9yWBS1itTFL7Fzjq",
  "key17": "4KrfCWwY9bPn7H9fnrEHPdibmoDAtZssi19oSymdbTWpboprbnxeyAVLkSyK1WxsjGRLq9NhwfapZPF5qzikhEEc",
  "key18": "5FEMpXLrq7TCyoBmNxSjYrLKRft5Biq8oN9QvcC6xKvg7UDAvN56r3doZhxkrmQk7L7x2d9YH7paE65GtKqfMfkz",
  "key19": "eUUmH4BFzu6go2QyuHoa6Wfn9hV7eSAZ1aYxog44YZn5DHKi3uXvTh3cUr4F9rGEBS28pf8rkpoXm6YAT3UPtnW",
  "key20": "3KPdLfhAP1HgkKBkH585ejKjaaUEFWnhKyerqChRqBwX8E49TjT2kzMB86vkkijTbVqkqg9mcKjhskK9fWiu6AXX",
  "key21": "4QnoV2HNp8KUiTcBqX1Fv9s5F1pUZUyUqMRdETMgPJ8tAZDCisijCifK8eKMRj3GWM3TwW35MTqqXYB4pjbKuQLS",
  "key22": "3RoeJEQyixHW1ZMsfMb7PvQud9aXR5Tw1zzGvbDVjY8ZJ7qAF61dSZ9aLptL3k7FreACqZEgB5BnXuC9YdwAFbaE",
  "key23": "3gupY9icCGSYMduTM8KdLfAZCK8NUBKuySXzmPLzbaKQDpEWQVVvWLssAVhJL1D1PaKwV24S41QdebXY91QHxG7x",
  "key24": "42U94zibUC5roJKVzMBdAw6bxo7fAsuLddBqmzWoSSGVLkcjDd9GkCKSEVAvPeJx3UWX7GwGjZ7G5WMhoXT5SexG",
  "key25": "s97vrkiWKraBqB56HhEXhvPBseXdjh98iq3zVwZnJky395vgA8jpN6n3o7jxviJ7DHNt1JhpLmVr9HoDZoUe3ry",
  "key26": "3CFErKr8ud1yCMEPE4doQxYsG1pyFWekYRFZpYr9Ry63e4MzWd2jQwAAX46o9M1dS1MbqoeLr2zqYZQZSxLge4k8",
  "key27": "2RcYXpkkQV7ARgDWrBzW9XSDcVgBfGdba5xxaFp6RSzGBdnCFv1ym2hCMSAtbCyCfGDDx2z8XVrRwRpxDbdBaH3h",
  "key28": "5drXBX86vWygwkaTzLY66kZRup72pBDM7PmtLnMJrEYMwXZWhU3UwyRgPPFzrJirM9jmjhwLsPJ8FNQHjCvcvLca",
  "key29": "4VUj5GA5ktEobyEJJzwEGda6NHNsmsqQuZfQfaEgrFigSzrQ4u9hEWZY4YTK2nbDpB8Hp1ZZa8xBzr299CZ8Vmac",
  "key30": "5nEfKy3KJhiiFnKp9iYis762jE7dBkZWvHDAaSyJ7Vg6yu8cnG8KjmvZ2SsrmehkgJbnX7SUNHoWpP3qYNZt9JAN",
  "key31": "3YUmcALFd7yhxWvPH8eFKKVwXQiFv8WijLE6w1i2DuvUrQzBPpw8RcCaDfy3TrBNfNhMjMAYCazXoUyXo9gSXRJz",
  "key32": "9L7spdm3Z9DtCsDzY5cpsCtE4jKqjFbRPi5UGNauAJkUQVcBAZXgSVQibXDKxU4MnPCvdMmy35nGE8JTfcG9NJr",
  "key33": "23SK7PXggqxk4DtoeLjCRpLBLvtNFoWXv5s5gQThCpSqFfFR629MDRfTi9PRrbZTSjy1oGqujGE11LD8JVoj4HiX"
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

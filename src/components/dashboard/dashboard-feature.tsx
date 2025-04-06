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
    "4dHCse53XUxhUCZk5fGxnNYNFsJr4EdhpfQPEgujwix1zjTFdQE7TgeRgcbz5KsF7jWsv1NQVo6QqFh2m5LM7brT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCg3pTYYzNKPQcm9xKJTqdC5NtMUCDUNNaB5BE9vhGfGEgUsnNBk7Nv3CjvMxYQn1xDUw9LbtqTbkt8PJtatktF",
  "key1": "4nZwy9K6J5iFTAxESYv5YY1U9X3DGyLfS6AARKNrWDsn1DjGe7JrP5pMQMrWnrLF8iyceL9bdrBjBwV5EstjUL97",
  "key2": "54jCwTgq82JmeTpbRoL3zgJta25tq6xU7AAeMVTHvxjsN8wtPmWXu9NTcRix6cio2PQudJ8jidTzHwD1Xo7QK8x9",
  "key3": "4Nr9Qd54w5brp6JdUTXaEDcufeAyXFGvbz9t5ZKperpXU66fXaJXdn5BVWuyuuY6KfkhqxJj86DmHS54V6uEhSvD",
  "key4": "4TySpG2PTBnnhrvkC8hQswSKsCTMPJ67UgonseGN5XoNf4RMvdKstse3Z1nroPWGDcqdCBGAg31nxunUeM96qQJL",
  "key5": "24DmtWwo8cmSWqMaHxBNzfmZXZAyvmhHxF96CjFK8ExhDZLGtGP7Vge3QvvyUSybmvveaXQgERQfpftHrShLmkjk",
  "key6": "JiCWCy5gTzxGq59u7eHA3kYa3EvK47iTEk3DUuwuNKtGvWJ6zs5HHKxMSZ8MG7tdwyuzKwXx7By8ZEYwBYpwbhC",
  "key7": "4MfZHB6YdQvrhtQj6U7sqgkoFUajwD5ERHSpwQT6qnQrw1rgZhQEy6bgmsahrSZaGLf8rJfxbEYshy1RarP9nenf",
  "key8": "2gBWbsdQwdPWvPuDWVPYEHTwmiLk8KFqECe29fFhBe2WNkN1CaKK2ijTeACb6CcLgUU2bN6tPRy6McjJcywyW7ac",
  "key9": "3saFSEmVB23SuRigi3e69ErVu3wExBWnDFGevaNYa4rBTdzLC7Mvmd993qrD7PaydHbVCCpK4g5mctAm6vnsh11u",
  "key10": "2hvY1BLt59eorA6fpXWhKXawkDD6DTSKFi7WhqheHhaKLTmaGGUTdaq9qjHTrjgBcbhNb6r5nHbHgeLL5mQyTUKk",
  "key11": "2mGKnPU1F2XWtNT477TuKzT8n5ghhqzQREjzkGWxe3xYyJprLcVn6Q8pHwtNmehGbXngmmkAeN1vYtafB3Ee4y7x",
  "key12": "2kKHQfCv27pgqxxmhtJRLfKmP6dZm1TmezTgFwuhAaX9nhPMpZKWF65LbEQo169zDk1wDoiXheZj9XRZ8iqwuj8m",
  "key13": "4Xvndvh1kDw6bnsn3vQVSxKCAP5ULVJHR9UyuS6zu7RrxgNJn7UE3F5qyjHNpz6J9gEhPrygzWDQZzQMe8ZjfUKX",
  "key14": "59htS2SCxyf7cVn1pwjWZyDqAhQMBLP51u4S5qkohigcyGSRR9Rbo2SgQccf28VdkND9MUdMVsdSHr2dX1jSp4Qa",
  "key15": "224RjmfZD8kizjzNsK9eBJJF3cgxwmmgvQ92m6TgSCdFjdSciXB1GuR78gkgFQVwhRyA4CZjpbrywAmWY3EptSvD",
  "key16": "5Fb5iUi86jm4Ebi2er8JNrjTgJfx23v7Y9DZb1ZzQyhsuBaC8WPaLEd84iiHJ5QX55ZpPYWcvV9FdA4acC7YUvkc",
  "key17": "oLcZ9NzsXhTADEzbui6s5txEAZpLWYT35wXiCuS2tHXSiqneyLiej73HNxfqxKKkT2HhdyCUgGUUgWqFT8HMEP9",
  "key18": "3bmLMLpoX7exNfkKCGKhPWCtbYLkzaHSWGAGRN2HijSckzWzWmxD514BLSjnXr9kL6LrW6h2QHyyeuDJqR1oxmyy",
  "key19": "3QPGPgsGHpQ8MTHN8FWY5DWy39r7MaHXCZWoUJuUZWWVFjM2neV8fVMrH2MWt4Qndecjimf6fQmNmjAzY1p8oCVp",
  "key20": "358ydQqYW6ZP8HnEa5XfeoTjqyVhCpMiYpUpdDtnz5oJmiK2HdfW1ETfsQghSkNMo2muGMBXnDvfcm1v2m8n4b5y",
  "key21": "5e7GB2WtHRxdYu9bZG7Cwtd9AuR7uvtzHAex4khuCXCqHNDrfq9MXFkdtV2ZkeStAMjLWiSfbQPTg6Xji4Y5372y",
  "key22": "53bdDvZoPobDMM4P2vKSjvtwnCq8Z959H2uDJ8mLVNShW9DqftqMqEVT9tWnLJPdKgoUYeiSzCRrtQUpqnrbvqBN",
  "key23": "5z1mL4gKGoRqhXenvhQJjzR6GqiCqfzvtVwnmSymWapCKVZmVEJnvAHmR5V33y1VRZ1S94ooCfdnTZEa9BnXgWpt",
  "key24": "bEwowWnXr1HTSSeuxB97CvjUnRPjYPMPWK6mFPrLkNWiVAWUNFLB65uStsgD9339N3pAcTvcW2PdVc79QFLuFjZ",
  "key25": "mukKpMM7fw9RmvsVqm3jhyxGHoeEzDYnT8RhvJHyPjpaPUHQrA7Wr3eG4cqrktdSF4tCNuUnhnmzQopHGNjm4tU",
  "key26": "5UonGtJdBneVQi76HYSmpqLjJ6aBpSBQmAMpv2Ghu5Kj42BMLq4DnG75FxRo37vTd9KX9ebNgrwvPmASb8qpmSTM",
  "key27": "LbXsgYPXZZ8d3Zxatw7iFn37qpRihUzRuK7jWFMBVzv2HvT2VXVXKbSecyg2qWectUwymdRoceceCcRNjVp2Dgt",
  "key28": "2LfHSnBKKq1rejLSiWSvHBmceJPDWfBEbpWL5QrT7Nu3J1RpHvaW11FqBwcE56CDJFV5p5ukHKYyE9MgkFfKwcMb",
  "key29": "5K4KWcdNUE2tPrciW1Hfp1mZQ2i93JqaYGJsnPhH8PP4xZ3dD6GKyQpHuMkK3KaJrG3KJsoXBHJq3U9Z1C1BZh31",
  "key30": "4yia7jos6Ce6nLepqy6L47JamG8ZTDE5AtL6vBWh3xqLJUawmLLRngFYo9tv1KoXpZc8hAZxse2CrT1RR5gWpeRF",
  "key31": "vMezx3ZY7kXwxe4vS143FfKiscDJyeaNq8k2HVncLq1Wkw9J7XaZG7tdXDHzyJkeduNGZPToBYRrS9q8Xg8ryvd",
  "key32": "4dM2L8oPppQ2NNtSeLYCxZuP7dzQV3VXEPZbf3DRavhkYFU5PqLksG7MrYhXWCDpAwUMnaxUZxi1PtT3n7eQ7GwY"
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

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
    "3SZKBHCLQUpziFpsZw8pJRkjs6bCshZqAfdG3iQTaaTiHBYqUEUoWguxdzMuVbQZaYgsmR2sajBC6YguiegDvDqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5ux73MTRj2oDc6FURpmwaW9Upyh7MxGZtxWyV15GdrZwfx3G92sfP8DymkNN9MbXPwmNvgjstbEo6kGL4nuuUZ",
  "key1": "2iPWExwD4dVKgY56aupxEybRcyEyfThoWFwS72sGkoL7cuesroy965gzdzZrW6yCUhgqGumkFWpVT4238SCCtDkM",
  "key2": "5BjJDpVt2tN2KKNs1qKysDGEdKBxrn4mfR5NwgjfNBAoqKoBbdRiZPCm1B6cM8sETr6VGZTTVqnF4pPay5uY6i1c",
  "key3": "447JY1ntTFGSsceibVQGErFGXkafaP7Ygg1GwT62eY3vrAdr3qrnjaDvHjw5duZKXNtgncdwy2Kc7WcxHyUjk9Dc",
  "key4": "37venxKZfSgFAbtLvbE15CQr6nH8kTqRQYMeoJEAcRy1rjyxL8X5cAr482R9i7dsJXjV5RpAjnnZXfmyA7ATK7w2",
  "key5": "27sUAnzwwNJW9BV6AKj87Qt225JRafWMvYkoQGzauguWfzJgBtQHs2Edp4yLGHS4W8HVZMq7tx7wZB7rKa7hPak1",
  "key6": "zpkrZ1RfdQLytvMMdAD51gzkV9zWSVz6wUhmfFnMeWyLj9VCpA4mmhchrfjRLXZjNNnu3QBqxuEiGwaKKFM9Cpk",
  "key7": "cFj6ghATP6xeL4wGoDdUY9bKxMUbaVKh1dQ4NEouuczYP85YAncPTsfPS84FWszNuB5E3ERjRpcBENZLPcXeH8A",
  "key8": "5xQiW2mQLTq3pNRJzcwmGALz7aDmvKSGg7zvtGad6K1yDad3aF2TzHEtWGZKcNCZMkV3BvPQQJezvZX5hCVxf6dK",
  "key9": "58Cko3JCtk9JBGyKZReWqg6xbRSdZp4P8FadK4ABGCggrTCDPgh5F4QW6YEmeCAeGNBuVNPj6V9RM1tjsCWbkq4s",
  "key10": "2BjjzsuBTZbwFekAJh5ahwf8Nosf6E3sXveT6Tr9yPPsQgCevQDPb7RCbCvEW8Y4K2d6rSetFLpbNCuQAtiALUiB",
  "key11": "5ifnDuAy8SHk1d1fif4NrSwEQ5FP9v3hZNRMSVLQyEPhvoUh6HTTB8GmJJ14cfab3Em9cXt9YMJ3gVBG8pVHG6Xh",
  "key12": "4ERh4htrANHLmjimYUXJg8HXRFV3F9k7B6jAKX6zr5RDn7gTuwkdo2ZV8WHu6f428WpyU6owByWCE51eGUUWuXTv",
  "key13": "5XCNEZUYLFEr7asCVDog2tpPZcu3uqEvdzZn97smewRceMCZ17wdQADhbE5VdNtxNe1QWztKNmYq43Q6TjUehYQr",
  "key14": "2BZd84D5Z5bnyLNYYLPt3KHsAtaPgeMa4ZoEN6aRhMoPJpREmaybdDfPN3BpoFVjmt6eLbdCPya8sqFVZZptgLvU",
  "key15": "51zDHFY9fdSVXPd6AN61j83s51wo5iaFLYfy4K8QQjs6FZTU4d8ZQRzXQj6NepHfZ9FF5zZM8rJxoCn17mdwdwXQ",
  "key16": "5C9w7jXVBh38wNQztTheEyAQimewtQNy2FHrrTsM1JRZkLNWcYSPP7e7x3NdZixJ5JcNSAfj1mVajM39b5J4GW4d",
  "key17": "Ke9QoU9kihW3rX49SQueDCSAhGLR52FMPXoEAkQjh4kdnhdCa2bgK77GGPzz6Qjs1cmhi6MyU78jadnPbWcuUeB",
  "key18": "4aik1aTCbSXQGMBUp7moiZzKHts1jtkx2USJpwtPqnXAaSs56zwuETYCaY9N2pneJxJ2D2mGtcCeWPHTRWtfXwri",
  "key19": "5h4T9qKYGXhnZGY73d4E44UmAWvGnNdrxVF4dyRy1zB8JktMx64Z5n1rBLpaZBq6Fc6TtDLxX1a13K9iGUjNxmu7",
  "key20": "5VNH6wzqvrE96hX8aSDjthQ7E5F9bFY53Snt7AHKimCZsSWD1VQjd65PAY1JAdHHj54aiWh2zrKAsKvcgZeKHh2k",
  "key21": "4g3gCzui4DzTW8hEUNUTfH5FLiWYMKgB8kJfAhx4gRG9Q4D2yaq7SnXC5ZN8yEsJfSgCi9FtmB7jCvj8yKJy9pVm",
  "key22": "JwS7RLubboa5wQNQA9RePr61oSmw1rTPDwC4qFrMCeaxoXHd4JsN2NmGXt5ecHzDwSAk6zDRYgC2shNwBxTPpre",
  "key23": "2yQmdXcTGxwKdLR4kTKthYahBZKGsFAQxguJUDNKgadPJc4ijGTHqNhNTLftf8FBaSm6Df1sCa56ottxbxCNEL4R",
  "key24": "M5HLmSmYA7kDSHirmjVm6w8om6ZATD4UuPtc9PLmvunZ76H5Ds2eSni7CkS1v9mbPsEY6cqzGut3eSrTgJwo8sv",
  "key25": "5jkhEJLG7fw9E3fZhQtFBWx39hN7Drgz85TjsuTBJJR5XoxfnJTbhTf6zn6MpGBye9CVeVezLVmCUWZbnkrWQy31",
  "key26": "2F4muabG8Qg3dotLyXFfpCWAyrVE5DLWULHooEuH9KjX2yRn89PmUq9xgK9kU7K7peZ6gJ7HjPcCRtfJF1u4nVeb",
  "key27": "3m2QsNryKoR9f4HFVLMKM5dfQpVbdfhA1dLDGxKzT35BDdx1DTrfiTKQ7VNLDuQFxGqnNHzRNgZWPCZdRNZAYwJp",
  "key28": "Tqw1ZVgPhBPrvjpf9R4qUfLWH4P79TLsTAD6dJAvxkE1xawo96w1avUkpJyWjm6sS2B21EfxYnX8A2AsA6JnDKU"
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

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
    "3TTeKhDbj35mNQcgh9EprVDyKA2C8H8etZtH2SFohtS3LdKNVNno44cNiwkoDcHStcKyBDBmSHKYe7UzTag7UPVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XHvin4uCf8Xon37RFJPMhf1QdoGGxaN8nv2NbmUmew3XUJj4oq6ri9rpssjn95MVCpEsefDAyEgnCFBrTLErRx3",
  "key1": "57cD9ScPoFCXep4jUu9ywLmNdMUKAhuBE6KyC343eeSoT9ziHGhQgKrvgeC1jayvQqHr2ssxry6Hkk14VWgP5njA",
  "key2": "4pH4dhq7ZiTrxDP96j8KwLmBvMKkFb9R1BPvwEkZ55aMfwF36R2NLy5exSvRHVKbzNuSMAN92jjJkoF34tuhAtBv",
  "key3": "3A49YtR9rYpJrDXQKgHPQevpBCPK4iZySgxnaitLQVTb73ggLXewCEAgYEST52RN92HvBxzdDX6bUig8Z8JkFAv7",
  "key4": "2qTXrTfvnHFVKZqJ1DfdZQpGJ8ys823N1usMdCbT8e6FqrHExjSxKu3QPpaktysBpem9QnWqrLwnCsJLg52Xfb3r",
  "key5": "4kGMpn7ndjSPNAEddJqRqko2L2wvERKS2xEVNes23qnyn3yMkvQQy6oNu9BJyXqkDBbyMiZzomqLUPxF7PE5aWDb",
  "key6": "611ao44ZkyeaPCbqvGGhFuViJX8XMEenUJuDNCQ4YFZSUSD8TqWiJ1VLGEE5sQpHEKBc7Qoj77632pu5ruB6Ktoh",
  "key7": "4izuF4ar8cpfg7F4bVoc9zua4B6f28d18QVhe1KEddxQHtSEE9yJbuZQTwpiLFhGWk7AfdbGBHPoJAPwBcgM6Kjr",
  "key8": "57iU9zL3nBPXaao3dVmar1sxhJmpPK3P6WqLaYXFeX8LzvrmBmD8ZLrusyqYV8z9WyHYKMWGuX8FXHDtmd5ReHo8",
  "key9": "5pGinqPDJLJhMjUfyasAtDLkkFDkWNdaTQhYZiW24Ru6u3odkvuCvmdbhmNfJ8K1gCHh8AmboWbVsG2tqkcDtLDL",
  "key10": "35uwv4fRd8xfdyt8pMa2hkL2rSeLJ8bL1UnAKJZ8JjRDSWEpKAkMmymmBwQvhSXpLFc7VJfKrTeQhXukLvnvz8eK",
  "key11": "64YG1wZDWsdPg7ohWtgVmSzCsrZ3mVhM2zUJnSu5fHjsPukwUwnNTkvxz8d5fHra7CAywCcL8kDrF2toaFsEozX8",
  "key12": "3GBjBcAEgx6cVRrDap2CdKcfn5bDtYaWXi32fGZwtypNjfpK3mWo2yZhBLgr2b32U9bFHLgVouwYHagVvNx8eUkV",
  "key13": "53G3XtiV8JNTTM2YCpJ4bzU5W6GfhdS2a4SfptSBsRj25Pjq8ShuaE5tPrnPtS8NgEnLPNcXvXXB6ZX9CAuC8Exu",
  "key14": "2uJzEKeiTB4DQFufA6sNPovC9Sff1YNUrQfsbdbPbfGzcBPeuURffFUSAvbbB4w9hftzW5ZwHoJNirb8KvzCNb7n",
  "key15": "5WN4BQiYsGrNBdSaU4YsRsjtT9pbPM9v6oZkqiB2553Sv3QAhEdTNC5EGyJqS7UnnoQT1z2w4xKT4QvUBkSEwXR",
  "key16": "bP9Rg6ptTZvefKXupNkknEGQXV8ghrACqVLgFs1fvoZFWVxr9Jrv5LEPSdxoCbWJV7oZKgJDgvBYhfP2jw3jS5E",
  "key17": "bxvKrfw6CaL4ZtpSj66vpeZtCWkp4ygWMDxRbfCXpA6TiWGcN9dRtMLNAosKr5eRjbpuLT5gdokdgoRHjj7ctSr",
  "key18": "5HqMpTyLaN8DNjBmYVnkUvkwLibFNrLJS1e2ZPG5ZKAWTqTQ5Kb675khjvMX7u6VSmtY9sAboirp5Q9CBZFRT3RL",
  "key19": "5GoLdTWq7azcRZzVHM6hoMYfdm1Tqt8vYYPXDKrsrSeUf3LBNrpHb8dCv6Ppm2QkrXTVrVe6aQw9W1y91Masrnck",
  "key20": "Z6iGpbkK5ehp9njGquRCYNtUvaf9V3aiE3qUxXvMng9ZqNR3219wnDLPttxgppJZnd5SpEf1kv2LRbKuW5ryCeK",
  "key21": "8QN7kQ3ifz2jZ8KCiFxZDZ6gLTaBPtPhqH4ZtAX18Y8BXHLRgF96amXiDih9MYjpYqoBuQGrJEh287dfBriL9Tw",
  "key22": "4PFyzrx9ZXZEwCq1RkjiFSnVmw1EzRFBWkQr72EeozuicRtEgihy5cGCBhrH8L5kWs72Ctkj675wXU6oiVGWbsWi",
  "key23": "47DgdhFdmqtCtxNDkCdSqSynEfJDw2TvDPUGRpj3yJZwQseHigerf7yqoZazs6HGapC9UwgyNji9jwFoTi1gDQW3",
  "key24": "jQmrDZx1vcAGydxm8aPhzvPZCUbiQhozZh88J9opBK3zfSjSdu1UBh3LZudG8mSW6tV6ZSk2kAW57uEFGDErMBj",
  "key25": "4k4FSCmT86tXpxsCxGp7akd7DQmBLoFU6wzf99EhYXJDSg5NFUh34cxJJi1A235JsrGjjhmstHiXwa57d1FMMigT",
  "key26": "5JTp7MPnyjeTFxwjq2q1hDSQjn9tQd4konQHBoBCw53NHjwAvdtNB32xysCWs3bNqns7ZJK2chbXTXPGB7p4WTd2",
  "key27": "5CoTvVX14EJvVtGfG8HtUPQmW16wa9A3NR44z1Gz72u2kaBkLhtQthXv7jXgzuVVXMePHSV2kxxQJtP6i5fVNdS3",
  "key28": "f6T8AfVUqyuDKj4FHQuEggSkR1qBLE7fVeGqYZvtznBkqmZcR245wAFo44purCvRULGKboJ6jv9e1CSLREN3roE",
  "key29": "154FCSzE9VqwBNLJaiVjdD3vYmoXu5sf418r6fgc78saLZrR91DZfMBZTsbEcg1WH54efMpdHe5GuHmdhSfPimv",
  "key30": "621atXuBhtf1um41SBzU4bKGFvjBhAfWfrTY3NQDac1s41BGAXg3HVFGsFy93aRL8jBNmk5aSXcnMNFB4HoZvyKR",
  "key31": "3k2gUiaXWDiZXNbk55t7j6ZszwGr5hots5zQAnkB8D8W8MS4yXgxBz5esm3gzksvtVcDHD4obXiJM5GQkebcyoA4",
  "key32": "5SbVyDqdshioH7DMMmVuzkRNF9ZrUJo7wKdTmaVw8CqFCZb1a5y41NM4L1KvEcpGMme9noxa7641MpdM9CrqogUj"
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

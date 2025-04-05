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
    "2QYueaAYgdLXto9mNWbRzjL3nXPPNkECKFNdBSUtiGv5rB7Nbz74MKHVj99xRABHTSdxEJmm7PUejVe3cQi3a1Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DGRh7QkaMQuahtUr2aUYeRqS1MbHSAAKq8zET8M9uPErQy3D6NFxZQEh4KDGRmBqAZ6JtEYnYCDiyXPqZxkKTZ",
  "key1": "FzqCfMn7SSqQJySh4Wtvf2nTgdv2CvDGW5LJsT9BrZWoKL2t7eRFdYZQQcBDijA2aBdjFsC6HXNuAPcLYL49eQJ",
  "key2": "42DML8hdxi8J54TB5rXJuyvSLZvS6kESshjcf5NwtuzvoFS149ruk3gU9P4ff6NB9BbH7AN7sD83bpAivmmna72Y",
  "key3": "2RiZizJbQ9uqactPuhDzrdiV8JeqbgvJprAu6y9puzuwBKzNE4n9tdEaWDBD85WXtEf8PUhtuYb8esLmXnaM4qYq",
  "key4": "4E8H45BqxY1tayJxr4Gszjaok65bMcas1hZWK7Y2dR2TvHscjNNDerzN7gVXDXUHEpRw3FvM1p2fjmhb5Hrbkc6r",
  "key5": "4dYY1BDNTfery4uRNGA3hnhsVkdrZu7F2NTyFprTFYyQBeQp39kK52Sh4j7tdG2k12y3GiFz8ogdvhgnrRjKSwEu",
  "key6": "3grA9fzYJPwJHkobDHQ1Fztgi3A4HUdp9xUB1vSoh4bUWbUpBqiqhZ5HUpb1RnSdDdEV3oSniAQpkEBySWnMdSUX",
  "key7": "3nXgy22Rq3Ptg6VodxgGPMoLZxUioVhA2RduH123JoedaGmtfnMebRy6r2Y8bVRsVLHyQdyM97oe9WC8Ami5UURm",
  "key8": "5eGc9MZGF8DPhPcJ4XWgqUJs2zLQ9ofgVtrcN9UqwZCAauCXDht7E7wzfuTthe3XYfmTR5tYTEMgQoiYieo1eRyx",
  "key9": "4nRY7bqA5Ya5sNwhDWDxUHhCeF2gyfFoUjCwCPWoMCWAPcoNnMefcVxRbbDLuW74o1EXyLgSbZ7S1FbCnAZ5me9",
  "key10": "2MShfSCWvbzyEY4Pr4wEeRQohHkhWMEL5FP44nuHfSF1VwU8z4CR3E9Wz4fhQ4buwtSGay5tGL39LRBAyfs5T2Vt",
  "key11": "3xM4CMFatjKW6TVNxecjkPyM5nJVfXphHySHPjbYt3ScoqodT11WwgJm5S4fTwgTnhXMuocyDUnNBXskc273jQce",
  "key12": "zF7749WdCJeWtT3JpdRaMVjznPkfxu93bwStKb7SsJTG7n97SPnWn6kHvsd45WEJPx1uMujagLRFbqWJWGLiMVd",
  "key13": "rgE4faR3qVCCwBk2Ay129LtH47heCsg9jKAdDc122KbqPzYJv9hzga8ozvDdvhuHLSwDd7AixBDp7VQ6b2nMcop",
  "key14": "2CdYvpZ85rid2KM5XH4SkqQrQvG2ph1C8c9yDUNm7Yu1crBxDZeXLUEm1QdJRbZzEUpMZiQhJP4TuzkiwJBAoEVr",
  "key15": "4XpiXKcvRpbDTB8vKCVot32P51v4hz2kbpG3iQUFdVjHKq2KKLm35KrXLVhtCwNfFhLsCA93y2mnboV4tXjo18rp",
  "key16": "ro1hzsEbtAbygQANKpNnFpQSxYUCATJG3DFn6Sv5GMTBq3QPA6NA6iayb7byfUynLe3yk8a4cfd559MMKwMRx7d",
  "key17": "XWM8Kiwyu8pW66er72KR78kGJzmTad3QaVmpXPWY1pEkfdG75fwQXKQZETFCpv3VqCMZcQdwrtaHK858jvRyuvG",
  "key18": "2vvTqQ8NBfK2yBpWsEwsyW8KxAQQDBKHWwUxxLZ3MPAmpmt6JhjJjjsrGb9xPXHaNAjttCR1VpgCxxBVxsDAvR3e",
  "key19": "3ay9YC5DQ2bHsewbZPY2dY8YE1x8u2nsoBUpGopoyjxYiUajkY8NivzrSzaaH3Zujf27L9dy1CkYq9XUknk5NdTc",
  "key20": "3Tawvyewe3wY1Sd9aiJyf1xrhhYzn37yUusViXa95Cvdir7jmE3jj1qFj2eS41e9XAJfcUjG98S1TQjdYm6cd3QU",
  "key21": "DFVcc1mtoiFz7oHDTNGGCX4rAFn9nJrtj2mVHHCoJHbbuNvZQ5Jv9RYRpPaRXFeYHm2TM7Xa1bwz65WAqvanw91",
  "key22": "5xDWiXsZgsWQ8x6K1Fmbkc7QTi1EsXXTiM4AGn76ek5hqL7Y6SzELv9AQixnv5AV1KBqiq8QVUhJBnAd6kNJrFsC",
  "key23": "59oKaUWCqZf2Yv6MX6V4o6YRT65fMXvjrg2VVPFgapRdgRJ1whky4scLNPs73ikUSdQsnEmiSeJnfhqnoLMwY3Vk",
  "key24": "3nngNNLQKvL63k8kn5KLTZdv84JZ2n37F49xGrPejXC9rAZrGWNKGoywhvAPHyXBm5V24jAmS6jMjz42uofMVW9M",
  "key25": "5EzCWF9qMjDhy9ftTLkL21syf3g6ZqMRAkgtJaDovFgh2yZRbLjVYsYGvdt2zDfdmUYc4piuYx4NQhv9ystvZgnD",
  "key26": "5cStZLgDdNXU1WaiB9yskeg13GfuSdK3QRJvkhyiTpzQoTXgKVHpNxZZrt646mRNbz8KzDii2YMFgsH2jCfRBrA7",
  "key27": "4mgofZo8MU2SrMREt1wJzgbRFhaQXfvT9g8UFoU9iqynMXMvFiMXyTqWukUhXSBKxRsndhUsCfa2yMLupjN8oN3H",
  "key28": "2UwDSgguou9VhPZXpLoobmWwZPEZQXvuY14SDKNqqa7gzvjnLA2PT8RYgadFWhDQUUVqEoM571cq84sH75hqybuR",
  "key29": "BEnfKNjHR88FoWUaEBrxuMaDqw2DEuibdPgkL19gn4u3yhKVLuvDJVBECQVkXsYyo3arvTzbHGvRHzZxaj6onLt",
  "key30": "5fTKoXnLG5LFJqADg84kZEAoLgnHemXNPuQhyzgKUFbXptxWfeuWqJuUY9SsmFkKXbmXiFmdeZViKg6WEdXWXEzW",
  "key31": "4FjgX5s6HDYBHfE4VUq7i8SicB78fP2q4GPPWytpghmpjNP9qX6MfBKumSkobULpNphPhRYXEMF2RLwUmpQK3d4V",
  "key32": "53WxRAH8eLzFGqSzcRcWzxhgmAd24e8h5nSo84QdYmaohYcSBiQAUvamYRoUvnimMGWiHNdsPWAa7mdVH8obZ7tX",
  "key33": "2a8oXiY2Mq1mtvzLRArUqCWFRjVXMtqMJkBgMQFwasCM1sr5i3Yx8QmB5aK3qvz3YEBkvMNWBtwNxtq6dUh6BNHi",
  "key34": "4nxUJ3kKEnhcVQFPmKf8PPZyr8gDc5hZJBVEhyLVKAzGQoQAU4sMix6TCp8VphM5P2CzhY9MVFstk6MPF9pxmJhm",
  "key35": "3Ue2iumDWQAKYtk9YuusFQERmdDP54iWB4uyBaXwchumBjVxNtvJksSo8RGQMgxYnANoeWojsn28H7DvD7VNJ7S8",
  "key36": "2d2QS4Zq3gdWL9HcxiTnUeKistGNt7e3CYX1ZpN9wnfP1qiPJTN3nzJ6VcNfZ2qXXJyc3WpouWaHbjZ6zPqrwnNq"
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

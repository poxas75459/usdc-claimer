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
    "3k1QVtB7GecgzfVyDvTK8whYfhKheyANoYkngGvaQbcXcbpfvvBfea4NZ6uMuLmPKHKvQ4dvUpt7YRHtZnwEovCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "383gSRcFVr9QXP4CVNvFGFYv5MgDAs9ECqxM2GGWRwiysLCt3msnv2kGecYdsR99MU4xzA878aCNAN7AjUeyBwze",
  "key1": "h6CKn7jeVta68fo4DeXPi3nyYUhX2fLMKwPJUqpJ6LEAXz4rm41GjJvZE7UcifXCSPkJwY3FEA3Mi565Maj1A1r",
  "key2": "4t9NrxVH9i4zrFmAHKABUiz6bWGoRmTFBEdtmRpzXYeAD5DjUoTkt8axpzHHr5QytZg7znYAdMbv6aWVbZeARkg",
  "key3": "V1Asdp2JdaKK5grEdmBFBi6ovDqQqpzscuc3TxAFkZ6qz9giaxjMEYJH9mUR8HiQnttduE9kK6uyTY9BJgBKFgh",
  "key4": "2aSftucyPYmfrFy4nrU6VXwHvKRs1an6WPWuptwNyhGBaZHZiBC4vsJTwVqpv6k7Z9bRvJGjo7AYjz4VB4XavdoC",
  "key5": "3qupHKE4XEKSwuJQQ8FvA2sECoEGS7js5No2ac15WyvAyNPP7nkwmcvRyz8wcyDXVGsXqBcq9FreBa6bb7hvbqnJ",
  "key6": "4igt1P9xxEsLo7Z4QkK3yqsnndHy4ckm8pNFyVFfu21fhr4r6JupCGYDBMgsCiJ6d1xqJXMPJ94Wqp89f2VwVbj1",
  "key7": "PLEmUGmCZXTVgtDrDtc5HWSmGD1BavfL9PJgFtYdvxn1kfKtkPuu6S38W1mgZVoBWha5ct5n3hKZDuc3Q9pjPfS",
  "key8": "4DJtbJWBVxXV7nJ3qE1y8VqYFdxK4dpdAEjv8uLxGoaNTH249kmSTwPP2t2zZ1vDs3Dpxr5yjmwQ2ZrBXrCBzTam",
  "key9": "4qxQnB7zF2Hnd5Vhi8LP5K9XnQTknQGkDGnNhed2TAjxsW9UYJjJExwLNV1QyDnZXeUd3vAvHvPCEiPsVjAXk3VJ",
  "key10": "TFkYpoNj1RTfWuiJFsM6BVom6pGrAdf21sjDpTZBf8ZParvTGE46ABXaiHwM7kM8JuqHktbhPzhCGRrs76xjkug",
  "key11": "2gB9dJv4GHTxX3Xojzc1NH1rzdfUj7EdmuekGoXeXaoTTUQNv4cAsdCF4tLBHekMF9ypoHiL8ajeYgbZQNH9iXz2",
  "key12": "2AS89FTjvBBKSgjDZv3yA4brbrXzKXapKnPtpL8DUfZnyKg9zBFwBRcnerYVu6NZ9JopRKHBY2x5PmzYroxycCEn",
  "key13": "2sxr1558qxJThkK3ehu85ersnBzKpJv1oUjGhbZzedGyYjuG85wY1ThnFUV3hpA9t2vTWYKtRQi7J8i4B8PhV6A",
  "key14": "4M2wvVkwMYef7HtYeZbZHz2aTbmtU2SHdu1NHCHFsbkBReU7Mq8xwxM8drH7bEwwwSGwLHoC7X2mrBrRX2AHZV2U",
  "key15": "ihdjYkF6SuBjeGceFWR52wmkdDmqyqmmNrsG8EQfmhmABRgysZYsDozAqLBpcBBwUhKDSaxwaygcnLy6q5opM9V",
  "key16": "4QnX5YidJNcD63u62bWp7NtqS1bX3RanorLVLpfcfWMRfswDCgVUYiusTCdbFWF5rg27DfUonQ5pM6xUcpdLREVq",
  "key17": "4Z6gPjb9cYGb5nt1PsqVS5tT8MjqMWXB7E6QDrKz4hrvFUjcw1Y67tFveoLYA2tXnYZuL2PPQFEr2hAMhaeBgfdD",
  "key18": "47dbE32ngLLAbz6TwDujVDx1Ydxrd4gLNR8wCjZVc98uCSuYKzY4rV2ps3VeTbYbXanoGMQB1pa4cBi6CrDdJx2T",
  "key19": "5CGfXZs6YvjdrJ2Dtsgyan1ci3J7G8i7Zxf5Gbtrf7h6orSG1nykF2Vn6cyMowZnmaQe3XfGdxFLLNNFFNxMPLRV",
  "key20": "3Y5bUuCjGbjc3z4MwgBNGWgEiejPpCvkokNw9zimLsacz9kwKu7yjuwf4RNzZgXMX9RfR9mgSzBzXFpRLKRUGpzS",
  "key21": "4ZVvmXgcgrzYUD2oHYJdagUgL6rqRD9EA8znJhEXoxKRTDMPqXDveZxqff2fGyb4rKK2BFmWyUmyb7axfi1G1xod",
  "key22": "64oL9utM8Qw1adLXASVbFfHXXcBcfkzRhtnkkdtA4wq3kQyLVPmVoYB3fhxdErjc7hY4rHhaaK6KisUB3LuNvxoc",
  "key23": "21aTfCtZWS6zjFUV189wrCUTzNQDUo7chwNdPd5BZ3YiSvTu2z1KLGenaoV9tHNSJHtcu2aTt9PnmE1i6v4EdjMW",
  "key24": "uzvodz8S6c6Cnyn9P62j6HVKXL2JmcimaTkZZzZBmaBGsAqLDtpWUm4u6UCikFUhgGd3iYjLLUDKvq76UcuwHAQ",
  "key25": "51jtxGNDP6LRGENFgCuBr2gGKsspU8SSbaDaRc6FG6P4e5B9v5AQoeTHQia311odCtQFiwMhio7SuHERd15yV6FV",
  "key26": "4j5yTBB1k9n1XduGa2HSg5gCBgus1rKdZyhdzw9nbsdTmSsM9MsPkWdfm4oBsymXHj6WApFodWxAVpSjNi1drFH9",
  "key27": "2qNBBtyvzGcukyygqut91JuEadXiyv78gcoLmwo5hfbbb7MkgQjGdpELN1pdvVNPBo8xcv6NAu5tYcmEZE73JRLk",
  "key28": "21HqjFXibYAP9ChBGfYz23Z4rL7dy79KBzkhv62E2sh7hkvfCVdNRpoAb8ctHLbM3Nmv68imqFiM3DGdXnDa2uLN",
  "key29": "2JVGPbxYGQkGE4qRm7KUmFh7p6VDLadNg7Qbg6Nihy4viHEXC3KzG6uCaUxC4rS62PWeEPCtxhXmhbjfgYaxqBwT",
  "key30": "3Cjjvz5XUaWvro4e3EAaLnrNH56C97HtkFFjcfN67hV5drNFvzLjhkSfZQid3Rs3kn8DzifWPeuYPCLhRuN1NCT2",
  "key31": "3SF6udwWpjcxZvh63NuBzrKRy7r7QygoKq1QPEuCVNhzQq9GDqwKFAoPc1SL72LGoHwT9UbRXBkuBSpiZH85RXbF",
  "key32": "5nEra3KeVw2z3gmM1zSbQKbDBX7LfVbTAErtRqCdYD7YQ4tcZvPHmbU2k1hg1kg1qGWaMf6BS4DVy6ZV5k4jDZik",
  "key33": "5Fi4PvfWdZz6Y6ACmUJVDzCUeupdGQevPfjfiWXpFsav9EHSjc8KDoyNjneS7gbJc3HucDZwcAZkSNiKNPGfBoet",
  "key34": "5CuqVgccqAvuQTcCytpdEbcM9ChzLThoRTknmbtQgEKyYFS9eTNwwt19CPbHnYSjte9diPLrAo9wVkME1JBEMA9s",
  "key35": "38q2WMxd7HTvrbscXRzywxz83bFWEWP7QvBdaFLmhNgkGWbCSznBG4jPouohNDohs1C3KLhjFD8t8KCzP757HJE2",
  "key36": "3Q7yFudxvsN2M3QYwuCbp7bQGCUAzmUDxG2ufmu8LcY1owaJCnVxhZz3o11MGCyYMCbcYHHwtkAumxZx2tEkbB4G",
  "key37": "2zim98zXwupHHNn19CDEnWdWwCpUcqsj7kFsWZf7fLmJH8HQGtZjTewA6UTxXYPD5wPoULRSn3vTuz4vKDyHo4V7",
  "key38": "63yPc4QKYmvMH2hpS3JEZnRKZjKNLanJL2bJHMJgx9sKpEFcMiia3AEp34tRqb9fzcZUdp12WWBqjyYHwGAMAkLW",
  "key39": "4DdwjecbAMCbbMjJLWmjwpwDVs1uwAEP3KRRb52f9pZTNaBr8KgcrabbxyRnFLYbToTAQRNYqbGNELPQtLAjsC44"
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

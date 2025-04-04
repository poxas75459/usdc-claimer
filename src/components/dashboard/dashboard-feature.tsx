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
    "jnorjBuT5qt7FbE4xMZakKx66gJQok3rtmdjAZ7topsTs5JRE1Qkb5C7My99V2tmxG6UapaTknaaSxLoVPzkot8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vamhS8DovoJv6Tye9aaZLpxCLM61zYp1v2Lz4TFhwrZGi9CUwjeefSisy2eWhbT1Y3suEDwggVdbsMyvVUTyevt",
  "key1": "2G7ez1KTinjiqWTv7bKGSBjybBuAKih8UUYZV111JYv6rpFru5cMqhYK1PhBP5iy5DL2cJ43cEmY6i8PkVdJ4Wjv",
  "key2": "4mnjWvLmJB1BaMdmfh6yvzoH75tFkitGptnfPMiy268KZfsmbQLd6sCDu4c7trLpXgZ1BcNSZwttRAZqdRTbmnYq",
  "key3": "G7SfQJjSsG78raYmNK1q7XYAXxfeXwyuhpFgFGUKJbuD1eq6ZsFj8ZK84nfzEnoP5dRSw4WhYVwkNGnpmEWKeQH",
  "key4": "52m3H6yjLVdNopJr4UKvihwzFjQQzCRZEGbLwsLpX2BcWSbCT7q8QMsuozCcuEeejoi6CmrLVfu9qesC36U9ZbAq",
  "key5": "2Fii3Wdnt8r8iqZKUVH2aviXD2jNSSZGnqoeiyW1TB1wJGqnefDWHh9kVobXKymSEoraWL8UupKgbgoX4JyvrDox",
  "key6": "2tz2rMBwKZBMqfVXgRmDFEYxb7dg5FdPoTfBNidz7sBqYg3gJovQZF5H2R7qwK5fbWSM2GQ9BcVcyhac9SARzdmw",
  "key7": "fEERoN8MwochNCWnD39vUbCYwA8h9Jp3SiWmyN2kZPXz2xujecP7bdU9GW7XqzndXEUsdYn3WqxTraexatFGno3",
  "key8": "Y9PZLjUeE1AQfuJU9ukdeNu8tycFZa5hn7yMBWLGRVR1BTGpQPkmZzP5ZcHLD4ZErQHfGXvVFZdHZ3k8se9PezX",
  "key9": "2BTmpgEYLvW6DzuEfZK3RZCFCE9PSqV7UbG6Tgzdbu2vdXysmAwKdaCCgmd88KkB2R41zx15NfRkR1iQi4DGn5qf",
  "key10": "5jbDkgP3JGvSSigi1U3KtDBdMyrZXGZwk3mvofhLL8uMNXv9YwXxJvP2Hy4KjcpCeodHrTYJ7XWGsoaieMihLP2",
  "key11": "4AhtsKgkDHvD3fNXixBhJjVvtPcCbLT2XRLrWGJyyhEZPKAtWD93mDt8jXVFVBbzgXpfxw1tMojMRr6A8Bj6NPqJ",
  "key12": "AkJjymSNB7bSZxcMefeekngVd8ioGrmGj772RacZM97yEq88XeqAYq9XjqvGHH1H3K9dd15YnNJSxS3a1bc7wDp",
  "key13": "3xTNVifHKsWi88N2fySL3EpjkNzQMy3vkZdsZTQ1sREhf5hQKcrb2WEm6xWX4GSHqcUXYpCEvrajjiVzXFhK4dLU",
  "key14": "3zfUEB9ZnAYDG8XKhFQTmDQ9rhtrP7tLRYqTo68uvpMzukZrMie2C4bdq6b4Gdy87qxmqzjaanmZC6NnHivtKzXY",
  "key15": "3geAdJqj918n1S96CrLfuQNsLrZzSSLSzWmUmesQpi13Jg8xEtP6nf5jjVBS58Hjp4h1fqtpUdSi2xXDS53Q6741",
  "key16": "QJGW32Ef6AhxSEReY2NEfvrV6nQFvUBcpacEdzcSwsqXwodSsGCKN58ykD6eEVw8XueC1NNmNw6czZS6yWWUFgJ",
  "key17": "5iYVDJvZfscM2BWKjC3amqkLTmXrXLPua6jGh3o1doNiXTy63YGHUbALY7rwMGztoN4pZuxsjPjerm1msaAFyU5r",
  "key18": "2ULMB5RZzuzPct7fWVNfgDGtNbyWnAAYKpk5r9SpRbDLW5CVUheSTjLiy4A5e84qsZPAK39B6TqsDyQMWRJBvcEo",
  "key19": "5XMVwAZBZHZcbXBgUAdej7sdt62ybzhh6fwAKxuVd1fn4xhK7mvZkR3zv2wkkyssP9BMUf5qEMm3Yq4FYANLEZZv",
  "key20": "3gbsH2YinRY2EHUhLpSWMdzZpfrEFvtsMTKs1RVn6QtF1Y35PjZQVGzL8zxoVnA2cmfMjsRY34Z3yLBMNy9syn72",
  "key21": "3wXHuRHLQmMwMd3LHxCuJ9JBC2cJBye6cWB6Lwb45LfxUVfQahh4dPTW9D83DgSjEhkx2HLmUVBiaZGWKZvSqabr",
  "key22": "45LNAC9senMTp3CaVhgsuHj2rbpiCURe6RT4zjLWUfK9okYLs5p9cD7HTXKcs6FhTwNje3r1gTnHDfaaLqkU9bM8",
  "key23": "3PDuZ1BqfpkM66ryxjp1zvjAmANqauwMgsGPkqbaExKjQB4vFGJPyBHN2wJJxooiqMfseAyUazUC4cLoeUHZju49",
  "key24": "5Tb8A5GYbqBJCdonS98kvKeT39iTRSRxDen4bPAofo5P34eFzLL1cDCmCWhKm2Rc8wWNR2XQAdzJQVyt4b8YreVk",
  "key25": "5H1Ha1S6sRVk1xwzs4vy8UkkQntDmBjhgK2QXMcjCpoDWTtSxjq52XnW6DuEjbWEocK5N5WjQGWzpRApnzU9WHZi",
  "key26": "2ThxKszhf15SSt2NWVuHkMx844NnpoUxU6R6VS1nPebBpNh4LGpeZLxbqmorX39YwQjdPnNhDXndwdtepCqyHao8",
  "key27": "2QMULq5dSVJQphxjKNhepNofFEbkHvZNhxkWNK137KLYpXXGpTA8KWHBiiQdKLjphgtoHvysYgFR5WsoohnkD8U1",
  "key28": "2T311yrrXR3nNm46Mdp2XS1WvKoHFBNjV9pgggxQD1YbdyzfTuqke2rbb6veXQkqp6pt37Dp7RkDBHR78mTYg6Gf",
  "key29": "3NbmJh5T9LckA8U83hog6TwJVzLtkeDXyXEyrKLtn4FEN5kKKGRyR3B9LRifgixBhu2VHEUkWfp7xUsxiz9hnipU",
  "key30": "7SneBzX5zQAWARq3zFd4HAKqN6FC5jjgcZp1qdSFTSJrRvnqy8GjKQ5kGG2Z9ggHMu3u5FbdDH9tWNdd8NWzZu3",
  "key31": "4Gs78TP4wy46RJFa2Q9NBjMTYsiBnakbwwMBFw8bRgkyxRMf2vdyp1JVY8aaYGQX8m6554LCWujz57ssJGNGftZP",
  "key32": "3weSbiiASxSmf9zg4Uy2YqM6iYTMQX2VVDERP6DWAeX7Qrj18XaU9KhKRVu4dM4dxAqbv8JcajraRKiLDqwiFFg6",
  "key33": "329u1dQz6pfu2hhHL4eXGqnPB5ahoqZb59U6FNmpGob1ChevbSWn4JUAYt5GCXWhhNc2Mj21WNwJ8VHTfiPYzWyt",
  "key34": "4Ds9iektkZjeS3KC2HXUzRF7AMvy8hnBh4Ff3aGMsCgXaYSwhAgm2wQHYbo8mrvHWarf5SzTz3BfoH4YBCHcsLaM",
  "key35": "M79QWgFAXheX8qVaB5XHYJyja3pJ7DuCFi8bnNhj38FcUZMoas1dYT7Y7tCzmJfbmzTwrxzPVEf28SNMthyWbgC",
  "key36": "5jzYWH9xjwNXbLq4KCuh1WJCNHwSBTSE4h6uKL8guHrJ4GKbV9V9zgC9tvjKsUYZ1LkfmyWpE2VacaamD5AUZW7m",
  "key37": "4sXGkYya3sDswTC3ezjpEyJZ25z7ULM7Jz42Lq8yGCC3qtef3VkJGSVZukuQfpM7aDTVKdQV7c2WzRa6KeZArVb5",
  "key38": "5vHdTuiSBGsPJN78g6aGEZz3RqvcnbJZAEktrWYyikhWvLQJnRV4HUy68i2fgSg78aCctGbqY4Vtq2gZBGyjN2RE",
  "key39": "qnwjvp186uVBjRvisLvd6gNfS7D5Gxe6efBgHPP1LT4b4wGgUWmqerNtM2Sd4BhsjAi6yBUiYe8QgUjNvrE4DEe",
  "key40": "3qPE8HNGoMVcnjk2qt4pwdBSEqzQA63qKjdaHuVcFiANxigzw2id1hjeifBcieU6pybjY3khaBnvoec3zMT5SCyw",
  "key41": "4vv9GKMgNxX1jpsn7Thc1WTaKZxes3TPhCKwSTNVzARRsgAjd5LocmppMmDrYgyM8HZ9NiAzTAnrXFG36NwEaJmH",
  "key42": "3qoj7ErWiP7ipxmFgVGYtsbHPyZYAzUhrxfTSFSNZa214qcKbpiK9y9BpxwWy4RbXBqZ3ofCAN9xTT8oZ6xjmDdc",
  "key43": "4d2EYU27Ys22zkc1i21yuEFkMug6skQ98wu3hJZYsCoFTWYoY1NZidQWbCqjJz4QSxbNWQfALictyFTjoxZhmszU"
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

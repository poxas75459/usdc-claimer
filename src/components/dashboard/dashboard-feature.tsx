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
    "4cq2Xhk7MByhDfmNSDudfYbbtrDLQ44EzSSBNMTqXGPdwLC1ZJZzBaUaBpCAWygQfzXwsEdAB4cfmjVovta9g71d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ksiNFTe7Utris6XNJPkoeUW1JriHHsAhRJYZ6TuiNKY5mffNxgyBEsFpziGqUZ6hQpX81pGUkn1EqNFXF8LMvJ",
  "key1": "M6vezoTiUxbBQqWHXK8CYaz3mVNq6pUrSS8VhrZJCryDWsNVwqfX6HTufStyWGqKNZeyYdCpZHfFQk15XsfcBBK",
  "key2": "4fbstGtbERutA6PbnTXR2NrTzpJNKt3ypz98wMz5w27uQRfBTsh5hE8Limb84mHT7yE7cBdVEpb8ejKyU7RSW1hC",
  "key3": "2XfFKNUeL5ta3siTgcC2rxhGwzFX4RjkMUYxLUM2Yhe6QGzZ6rNYME9QBJojQ2oQoMP4jJX6ZgGEBBJBey6PRTqj",
  "key4": "5bF7pBZm5AoCk6ArnQeKXGwxJhjRNZi25ite48MBi7ncy5DVzeNMgdNkkaVnjrVsFggm6KFJT3b5yx7BTMkjHJ9M",
  "key5": "3qFCQXXcFoMk7pNuZL8vYv2WMqdBwz5NdtJWh2MPVKE7oWxkzfiMEUcht6QZKLKUk9AMJBDXq2MjzPU4bz6mgsPD",
  "key6": "32RxsgVTSzNp9Eg5v7Z7ZXY5RXS97WaGvJrahq8PHYc4WatUGKQo44NhtkstwQuQvMJYmFhRwQbAGwHc7UASv8P",
  "key7": "3NDLVsVjLUNLvKka3UdihC3byGNPX7YMZ2YGwLBZuNBAZcAzTKKSp5geCTDuuYqXURfQEosRHfRbwgK6uJnYJQQd",
  "key8": "2PBz69CbnqPcTrpty6HQyWwjpYa26mw7deBXj2FsY5Nkqsow5SwD6SR3kxqRLwbuTEmFTFRNnsymBoVks4YyfQVZ",
  "key9": "ehipWru8EBLf3byj4CnyJyaj3eynuzox7ujLPCbuZK3EAoN3sm3aqmDB5oyGYyv6gG34iN7bQJZo1BkpYWpD4pB",
  "key10": "4Z9abatgv4koJ3LTXwRhobkJdkz8Gky7xbxDQ2mRtMmr8JeCN1J8MTiVZkyGbZZvcWzvytukdvNE365fNDMmuwxX",
  "key11": "2Z5GXt9x911EShqAx6ar7WjDNjAe53mGVqq4JhwyR3TphrCxf73ib2jLdzCSopN8ry2WJcqV3ibBqmgsqTACmVjV",
  "key12": "5h15WxnwfWXSk8nXtbsj9NshCWUnYEhknVDjmLJJDpZ9tiYv3PuLFjkAkTcyrJVhip5QbLqLGFyfm4aNXTRSNMfy",
  "key13": "21GUGpiiQA8FwqVZfV4qwaokjefMkqCJdvhVRjycWknvtTajYd14Xv8zhWcM7ZuNh1rhSoVtictsYpvyvV4cfvcj",
  "key14": "4q39y3VvtwMVatwvGJ2oSpUEede6TamwYUVU5vaQnuVSXf5UQUWSRtwh5UmWRq9oyZ43SF3o2vD11zXDqxMUYewL",
  "key15": "437Tmn4PewCsswpZxE6gqixMB9vgpcStEfXpQch59zFG5CA6YKDgyesRefcnktycAn1GFmMGRrxe35EGVrrvFGyE",
  "key16": "mJ5u1GZZ7VAW3mGFVLczEyNqDzXkbk6o1SYagsZegfVhkGRMSpw25VjbsQHpxoJZ8abWdo1gyApm6fCrbtbWsGe",
  "key17": "3A21WP8FMY253pJWsuEc2zLZrbTbPuJcuR6AGc2DCgdrdMmEmwFQv8iWyGTnwkwLmzv5muHFnFLFMLcN6pepeQZj",
  "key18": "62saHTGBjWtkW33us6Y46mKsEeXE1YXkKFiqhuA5ed9Y99aNu6KECsJHXE8KHAJJdwXWfZ7Yn4mtH9XNqdsCaMP2",
  "key19": "5Ee1NjLi7419xzy9RTuUtR33onoSNRqfKSQygv3Dms6uLTdVfet3ue7vTDDxm86hReyRDgEGLXJv18Li99HQVGHk",
  "key20": "25kWFCnJXXtKFAEbT5DZLEBT4UWQQXio5KqyMVVbE6vs5MY6KWfAYFVCsWoaiT1xFNPfjK3bJL8Hm7tGQJFbGhZw",
  "key21": "26rU1XD4RwbubyS6HXUbjnFwW2P12LSGkZMFqEZtb33R1naMkVg6gxBBSY34nxp95mbZFZdknbjNRr7DATE2R3Kh",
  "key22": "RWWFxnpumm42ixoZ6z847Hj1XJiapEBAvWgP6cpkKz8SYmzfBxpTvx5pnCXjN4UeRx8Rr7zdhpkgurWeLxR5BmY",
  "key23": "2pmujJSjiwrFSkMfRgQXJvj42HsVuyPgXTLAYBJKYigPZFE9vbBZ1xSgFiv1mzpdwXCtSzNMyiXr5PKrDhM8Jm4k",
  "key24": "3C7N8XBBexo7cuE3ywZbnesARAwd5XvQsQJzAbhBEQtx1iNVV2JxGyTR7pKh38ZSpZkZNxKWpmMV3BajaQ2dDRGV",
  "key25": "3JCToUv5r5vWBt1UT5ZXPH9beAJwgPX5QL8Whk7Wwh7wkKpXRk9PorqUd9jKHnBBwNwXCNq8aRSriHgLYstK3XXB",
  "key26": "zvArsU4eJHbDqGrx5yyQyQRQyzet3CUWmbhnJbwu7iftTeFUBCZBcZyLEXiBV64WANyucS8hxyTtA7RJ7vJHbLj",
  "key27": "398wge5MQVak6sSnyjok5HRtogzBdpYxe2epdDMG1JUCyr7HYcTyQzzpNiXQnUk62TmmHjfnd9kHd5mgKWKdp3aC",
  "key28": "4wXRAmCSTXbzv9RxBdtyKSV81xG7N8ViarQTsTANTbJmv7jJ2msCsHvrV6uRNaCRC4yZTSTsw8HH1jVXfravetPg",
  "key29": "5KkJRDoEouT1fAAzXBtCAoeUh4u9aqTBrxh4kqztoxPNFvADjyxRp4aYj7gLdKibegJGrAqt4j4rLik2nbPGbLH1",
  "key30": "62VjognCwJycEshmvHNbar6UhpUxmqFeKCn63dYJLrLaUG7ofRyozPWVtSpaMAKs4Mda1UZA2zNKwRAhtyUTZrCH",
  "key31": "ScjXmQAdb6YFV2GiHAbmzYp2qn4QN3HtXmF5GwRqeJDwyv8JLGXYToYv6x1f6uUhEgJftj7kK5YK5EERBHngAjm",
  "key32": "2MVgCoRin48Lrmi1Dx6VkWxQLoAv683z3hrMcWvKa9AXTq9KeuJwHjAFLuuNpWN1NxvN7GFmKFrKPggGNwZXXvgn",
  "key33": "3sfzouKFQSCcU9uoSP1SfLjFFYrajggdN6sQDzYL3fqVcVwbUXtEioucUqeyawdZNTQH3W1HUAWtnN7yU3JHiNHV",
  "key34": "5qUoyDkzVxJos1J225ctekKhLZpwzAnZa6MUkSED7U2ops1p39G3Su2h6E29hvNz1W9e74ii4BiZFauDjUU3y26Z",
  "key35": "bb8qXEpCTu9zLU2jH5DHHPoBaMN9JU2CG5mdZgateJoXMUZ8Ar8jGMLVmPZKL9wcyvsUkxVv4mpXBNDHJwabkPs",
  "key36": "2fPGGdg39iwFTeqmbNxM8zaWiNEFwEGStAdG37CnD4xuxvpj8r2oW3TGoxE6ntrsSBu6jysyNoHDiRsNPQhtoRLa",
  "key37": "24Feg8gYzMojQ9jTBEsMhin2XrYNrUkXNc7fd9fmvK3X7kzH7XUCPLtgiU8n65dpo2vR2tL3sqJ9uHxZW8Q9EfyE"
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

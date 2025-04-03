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
    "4qpBGJSzWQDtQjPhqrMC77oQFC4KtNGQQ6ztjJQaJu5nQcrgt6pXdCcWi71y1F7EyZ9CmYhp9fgWyVmbbjpxyuu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cd2yDWVfUTjdy81BaRRMSgrbSajyDNfbdCRHDgawQnGi6EFKqYC6ZSmXdkUJ8F11Qa2noKCQtyvHmFjQkZMGj5W",
  "key1": "jqwYKEXnzVDyYFP7suLFrkqHMLaZQVvnaCaKV7b2uYrLbxkghpKjDRb1V63qsTBZvwDtQbs6GTMgRtrZnhWPhKQ",
  "key2": "5ijBHwLs1btsAu2cDCjgDXcokXoZC57UPQK4CAUpNzzJjv2EJkzeqt52STMfk7eKNSiYQSVqBmqQCRkzxCr529MD",
  "key3": "3zdo81krHHovMjjkhMjwabCqtjRsxVAvz7fhLX36fywFRt41qvCwqeWUL3WyM5MaoP9btAN4J4BxctAxi1dDsfAf",
  "key4": "648sih5AbKYbTk7VqjUuBMWDQpWkUCzF598de8mMxPmUpFh8zNhAVfd9Qm31Zh8jepMqxvdJEr8uXjqLhutAAECb",
  "key5": "3ZWYb6niZ2rabzEY11deFM68GQwpgwF31ELGnf2XmDNfXkJLd4wViKN5jESLnPqXYAyKqzGP8fEFAGGkJEuQUec",
  "key6": "66cfhxowdT6Y6j93h7VBefYi6m8kbZ4DGh4LzDhSt1ua1Qwn7dJW3a6AvtXWEsjhmJTBhyYDZMfqMpdQGHk6HKSe",
  "key7": "2yRxhV28AsaQpzSrQcNg4AkydJmPZrvHUY7LMn4gNNbgH3zVQZXUUnvpWaS1GhBVbhn2qAdVPwTo5PNbaTxFMFUV",
  "key8": "8achtwV1AhDiJNw8L6dAxTKn2Xa81KzTKLMxQtyTUR3BHbxQa81ynovoSnCduos8o25uJQUrKi631ysoeRhba8f",
  "key9": "HxQMJ9L78tEeTAwbY2i6ak24sdZkY6R5FjKvzSi9SboiECVwvpKgitDBMgewbKocicbSpxSG5WDB9m4sFkS2nst",
  "key10": "4bVium4gUwyiEm6oqK4QEhaiXzY6aPaVnVSsvAKDoLUow6hcyp6ZBdMuefPHCnRzNqpgcatc12tzasw3eAsWUZtz",
  "key11": "3VpFmmhehcKnWqC75PLokv2vTqu4SrgBAvwqqnEnWrteZgvp6YL5H6Hf4W35Ubxjzqeq5yNT9E32xc2jBnBaoPok",
  "key12": "2rGdXc5WNacEgWRU3Y3B9fwafe77fqpGE1sZqJosgm9xh7SxWSF5iF1jUwWopvCBsC7BMYST52yFK3G9Wb293f2h",
  "key13": "3DmcB7JCABEvtp5udrPi7nHshadqKRAZD6K15pwXQqi9FfzgDd2kBXMD3bbbfRVrDzKYNeU9xBmqv9NnrYQfGoKA",
  "key14": "5xqqSXN8qhrEk2reVzkPPS3xYcLuwV5Kotz4MXma7gsZ5NCGHqk8sBvtxLvUsc6HdZVu6ifTwaNRNeGz7LEy13wX",
  "key15": "2beP6i2Mue2zfPeXXA7m16f788Wyb4BMytBsUCcJ9Lp82XPiroYjqp7ASxbVsp3RsRhRqbHN1rx7bwE7v799tUG8",
  "key16": "3686HeLW9SRFvQSyHZza6WeBCcdgEmHp9B8uPShs1Ha49tEbfzBEQioEZUdU7fngDMc4FhCbme915DRQhvPQbnZc",
  "key17": "4t1JRshmgZmGbe4knm5BXGnjdcxE1RjLNZLTbX9BtF7e7ZFrNimfkTrRbL4YsxUkwsTB5SduVAGkoQVEx8aNAwCg",
  "key18": "41nA5JyowBWY84E6ZLibFY3Dt7UHKZEkmhFrpMQe6tJrZJvvFKrstGsXVSCpfXDtYbiT19xVu17aYW5aUn6qqdcU",
  "key19": "4XgsVmRRUcBWr7zkmieE9LfYCwoqaW27ohqpFw9GV7irn2ufsBznVoRRJeeyte4ZzuUcFcLnce1fGFyrG1wVoG1Y",
  "key20": "483LXvwmF3G8dHwjtaHVPawcCDKGjrJJnMFaXQZq9nXTL5NCv8G9tfbG1qDP4LWvVgP4nXNhFugWU7RdGvnFSDC5",
  "key21": "3uQcFwf8P9Y5w1Dpuq6KeJ6ZoRdMcr7XbXGmwtWFMPqM4wwewuFFPbNk5Yd2vz8wc2qxmGdM5BAVUKaKaSSToNVJ",
  "key22": "38Kh2tUTABJeLjeH3ZVKyXF4n8b5X58fEpCHn52SYLHxZuzQ8T6ACcYK6kstpdSnDJnYfcsSR7bzQb4j2yA6X6BJ",
  "key23": "4SAtM8BMNM4tLAvQZtoG2xTW8guMAt2SKQzryLYw9FWXKbSrWvXbDwPHNWjdgUG1jouTGCup3kV1ZRQMg8YsDKUB",
  "key24": "31ghs8AJE43zZdrzHAp48FjV7qCPhEmVgzf8Ky6oeuu8LSczTXC7KFfMf9NN555ERykyKyeJYvkts2w2evHxDsL9",
  "key25": "4UtLhRK1KBkDVBM4WoAHP6Zi3F6HDQ1p87pAyXBbQpBoc4EECmP4TUH6E9Z94VRrPgvQBLrUn5CZ7kjTDv4BigpZ",
  "key26": "3G9ektjFgk3rfKHrEYjY8gfg5reSkWpPftpv6WWgcxJjnHXiPJ3btFFXNaSWLzAb52DBj5A4mS9EjfB6VptKnhnM",
  "key27": "3ZsgUFyzFvN15ozSduP6fKybGQAR8r9DVEMVDHmUs6zbBBbX35WV2NkfwK3J2KCvMLV3RMFMwcs43vd8F7kXWuND",
  "key28": "4xb5cwpemN7g4fXnLyULJmHNZqujpnGUqtap1qAYJJfC7cPX7LQGKi3xtMe2iDxz6BD9qu49NDrf3YdkRdGWs5Aq",
  "key29": "5RDh6kCLovHkdTodrBYDdWVUvykrkdKGAVK5mejWB9QyTBqdH6JqES826riBDVED6NV5fjFVzWxTwNqDYFJ7hPnS",
  "key30": "3ujFurqRGLjoaekHbJeFQqJ4G4HWYp8SP1axf9r1jGAnf2isjWWwhH51qtnP8Ks2kpiC8WpcJqKo2MvoDQ8cm8HV",
  "key31": "2XF3gnJNvv7QBJZzEfLxFMZx34bmPQ5h7VT7sh21oLupqzGYZ4BqZVF4mGzLSrUJZhmgrgJ4ffGT49pdAvCVQpud",
  "key32": "3ybzaDCTSfkvsHRYRsVNptcSML4UkgEEJwtVPZ627FmE88TwFSwDquhfj1GtJtDvt6CKdqfXWWjqGfZcyQguWCUa",
  "key33": "4zVkDmJetUTAfECtPFCtRHae7JCAjKs4t69NgREBmvAaPZbgJ43WU6upvSyToz7npyK7iXQLYuAoLcHWNxvhwqu3",
  "key34": "5F2ErHRKRFoCwGxqGpmv5HvbGBRe8tDNjNr3Ko3eyekZTFmhgq9z5VZNmEeAbn23fE33XZVhpiKuzyMAvfJf5MnH",
  "key35": "5XBofCa6cDsMKWiCH5VReEV8T8zpm3cWQqMezaCCsL4eBnTifXyJrRHZNvwiygMQH1QM5Q5Tbk39NnagLMtidWHm",
  "key36": "57sivfCP8HrKQYxF9rKLyJJHZQSzmHtyzH6LcL4kNQEJgVrnaYg7eJuxj8YBLNYynMWu7B3aFdkD3sQjnt4Lr1xt",
  "key37": "zfcd9C5yGLfkbf1FJjtvKgeNtAD28haum7oCYY4SBQzKXW6js5ME5sL9azcvJjdo3y22pbj1MkUfmxkLLKwtwyD",
  "key38": "5yffHw2Cy2yDxaDpPo2QcgRp93t3Uau2S3VVEw4kPEYCdBkx78F1inWyWBB3GWrSybmDabAGf4DAnLJTLDJj4FXr",
  "key39": "5pCGda3YzM85Z45EAUDSpWuJB5BBZAi5Q4cpY6bX9zV41v7d3TV2m36Y9EyFwQzzcqYPhwrtHp8DBN2frZqYAgk8",
  "key40": "66hwy4cFooDWZgHqtBEZYfxW42ZtpqgDz5av9EaRsnvyKvwKGJEhaPWT8FGXbLQoT9egakZP7e8bmEcGkX8qxN8a",
  "key41": "oMwni9jFhnBSz8C64H4DUmZ3hyfLBNyM3GQMsYgayGWAHWCEVEDWvnEVwCriLdaJRh4YvuLAGiGBhAJ4mZ1LNQ1",
  "key42": "121Pc2p1GyqDr7SuB2n24ogLyTjfosAdt7KEEymCjz8ngaXd7rV2C1pGdxqL9ft2YyZiy6gGxWNZPwPuzPJ8BmzZ",
  "key43": "4cPUDxziVyQ5Qa4zwogzrgMFKNXPVvzY1iCRbYVeQbRboJCzY8PRAqPwDPhxQdCu4n5JQE6pQdsrr5nVUEmywYRz",
  "key44": "4vooz9F2PLgMZCerXKJXTvrZVESkJFZSVrQheknyQSXJjV3pqjz6HmZzeTV3GjC2fznmR27WC6RHUc2TqdN8oe9Y",
  "key45": "3ZzSyvUHosdbE1og6UZhffnbpt1jqcqGehdGySQRomyPaKprJspDgVs38HVAnY8wZZzKPWQbt5xhk13oniKxs8rz",
  "key46": "54wTDU2TywCzGYRivQhcbvm1FBxAupRgK3PS7BGyp3AEAnAKCy6Q1Lo1kmLFASJVDDaBcnSzCASgcqpGJQJVXZGG"
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

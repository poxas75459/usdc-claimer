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
    "4JUsk9c32xh437k5J4Nrkt8N6dT23NXKen2kBqpcNT2tNU3W5MpWic54C8U4WELakES4xCuhG4hhvi5X6W7QEhqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxNRzJ9LocqCoSgtKQY74KRyAWS8KjLxNkzvxFsrzGX2wZiESd9A4RdQR5LBBHMqvo1wAJoku1PEngJcBnXVv3W",
  "key1": "4VreFg4RSc8c7MaduP3v1dcFjXYrrv19Sn5Z6G2CrzstcqtEJbCZHeMYiKiLZEYfQNFjyBpgqymVq4FzizuxE73G",
  "key2": "5kDrn7NTJbUDixmX3M5ys4kxLKkGiUo8C7fKqhqSNXYKZNp7nW1cZwL6Qn16pbzvyDh4czxzdJmzoV4APUawGeTJ",
  "key3": "64jm7ikyBCZfh1wQgc85NipMFVrnbj6f8sv8U126YoL7pM5XakLRJ9BcLcvm4y3jVBtJpuYt4kVm1zT7d5pBkzDG",
  "key4": "2D5yao68astSCXyLLT2koQWAxWBLDy7Fg1qAoCvgjYqnzUUtT5EPx871eWG6HaGE9ZxJrMUVbDYQ3RYxcAWLFAh7",
  "key5": "3U36LZ68Xoy1UhVArfYyFPhqB6myhpRf1zxqu844T9rKGaTHk3AT7Ndkqkmn7xSFETsNJuZ1wPFBxeQah59E1sKH",
  "key6": "TjxCbahjvu8rwZgHsNcFbYZTbp8WR48LWVX8FHPrRP2XfrtpqHKXvarq8cXkW3QYXAmgLc7mJwgs2Hf5iCRT2qv",
  "key7": "o7PZHJiVmZJFg3JUdZWzDGqbxjjs3JTF4cvdyGP8ifbrHhDPArWSF8Wq9ZabKJPFQhrXJxhfJBBnGz9yXdwKdgw",
  "key8": "oYJWqKGe3VGojLCK661Pryq6kXrvMtXk1R7H9cieM7jKoozQLmcG643rvejkKvJd3JCSaxd7e38AiM3jcvtsDSZ",
  "key9": "5bonAWqu3y7cHrYada4LeApXGqJzwtYFMpibEys15phMQnSTQU3MNfxqfo4XX9t2kPAorCa1ZNc7xiF8zrztHeUW",
  "key10": "34UyfjCDWyEqgvTbQwx4WSeMYTcAFa6X32QtE7TCDiV2R97VMEcP8Z7ByG6qMeeFUq5Nz2izTjvNZpeztnxdmPEb",
  "key11": "YYdSsqvS9WnUYo3P13BoW7WiDVAheb1jxF7aV7WjHDf1sUDGSv2TaFLi92sKLQNVKKC1cbhEEvW7b3iVJfLDCoA",
  "key12": "4UeY1cnr9FNSSVTqfooZ9mvdVSYVyiPmrdK1oziN7W9T7Zdhd1mfVSU49ACWEzxgDDex12YyWqTsCNTvYYJCucWt",
  "key13": "5gt4b1SbymqBSerPrZG5ng16oNipFudP2UWGfEkS73uJKTmf82BynWeK5CEZkANLAJpupvXeADjnyP4F9z3Wj1cC",
  "key14": "R3h3hcrWHx2tuZS24mHreR46qdHutkUCZsrZRLGPcAABjCQXfkSi3Hmg4C6erYeFwQtQgSFz4S5q9hdr4pXHA6f",
  "key15": "5a5hBkceR2n1zd65qpGq3nUfk3qZBntXoZjd9WQfoSBcScCCjefonPEzXe5A3stRJQYbRAMJvptnpkedByML9Mbj",
  "key16": "5z7nNq84JtRtVg9TsmrHPDi8SaGvU8sgBDbJUuynSa6Y8LveN4PDEePKeJyhPXe6jWM1uQFMCTKSvqWtWcQEWhJL",
  "key17": "5cRg8epLoy7vRh53gsoej2LxpfygaKrqQFEjY5bXm7GCChS8ZMscDDseQzs7Q3rmAyfaGViZy6Gm365qT8V59v86",
  "key18": "41NVnGdkGTzTRQvm2PucTBXDhNbsMx5e4zGguP4T6JyEEMbU5Ew87CZg33sm9xSMGr7jtEfLZdotvc1E83xerKnW",
  "key19": "FQ4fTkSxDhd21nipHQohbKY9GHReP8WDhPswWqoC2JzmVVv9YRsByi5q2yExrSiytP6u4wXpFvkaJD38adnndrZ",
  "key20": "34sZhnWqF7Gasf2RMYVTaQJWjU62TJJn6d2QAFWckGeNQ7MTEzZznwhKAWiJG4UFbKRVg3yiS2fwjtRuLwfTL99C",
  "key21": "Lp6LqyqERVJVkXEi9xyLfFnhBhVQYFesVSsTPGeQTfYyLVCgEcnefT7bYyeYjLTVndS1uP3Qropx7mU7bqgGqke",
  "key22": "4kf986ChxavqD9Um1wpF4gmvXEk4FBsBF6totvnxPmy5fGQRWmzV9Z8FxxgmXPeKtaXStKRTHb6iMgy1BRhYicNV",
  "key23": "3rUpuqRuB3GHenajuoH4cp7K2JxZvgFse5vPggXek8qCkzFdM8ebXiBWFWZE3VCH9ACcomV1QTu4ZsACHmhry8B9",
  "key24": "18rC15HqjJeL8TRKh4Mtf2DgrtNsafWkMKJs9fmD1bwLdxshbR8tXzPKjBbQdzeNDE6ksXzC4oPCZ6CP3FVMb3f",
  "key25": "61uzywHkAxdXF6F7xSK2sSmAM5QhxVZr7BUmwQkdG1MJ33aZmBegBuPvXNiLSzmdubmSRE2ocLEYK3XHAm4GgEd9",
  "key26": "5suLNWJhNX8MqpAdZPqeNdQwQw4pv3NqE1sie3Ui8CBsa7BdK2MsgDCx5d7xQugi4ph5rVfyqMRmucARQX8jUx7d",
  "key27": "6sNGSy95XpEVcFJ6xnurMboKwNudWAYArsFwqGwZ73Hi6GyQmgHaZGKxiZVqCc8ZgMQPqfxgyS4uXMSMXr6KjNy",
  "key28": "57JEZ4Byo161VcFJVgtqSFh4LfnFDj2vzjXZBTNXgvq41LP23qbRFZXKgjr52YYRN7tQtPwcHFZWKMxoZwiLyeBC",
  "key29": "B7kAS7xWU3bDkWH5pNNoqJGJ1ndKj5rZW2gYxtDFqPFxewDQkSXEz5QKfYVQqyHqjzsVkY8DeHLqtJmuuyGifjx",
  "key30": "2JMkytj8v9oM6fNX8mXSHA32fyyTmMQqSEXjKXLxUnkCk76suTHy9yAAEmnd2NoNYcNw8FSLuxYCmdHXwxEvv7Yi",
  "key31": "2fWU9Zjn3CjniXSg8vMw9gjhSo82wJi9H5PJv8xh1aEACLR5Yt8Dsio9ZXhwE7WvqyDPudYJDfMmFtBem6ECWWmo",
  "key32": "4EaUMrHv5TrsogkXnSDpV6m2xc95Nrvk8Vvg8vEk2ysg3XcBe5TwAYuwxscKkZJiUd4eokC7rKiYAZiCZkNueyS",
  "key33": "2pqcCgtLcifXQc9VAog8nWM3yeXUvetBcihyTaXgmLGXnxv99DeznByY7bLsrPKwRyVY3h6XPd5bmdH9oN4YvBgy",
  "key34": "21HhGD71bpdcQssVoadshWETub3UKvC4kFeLvG885VKvFZyYQcFJMwXMxi5Y9EaQvLYruneqkv48SaThjDvbWkPj",
  "key35": "4A8AevPUmdw1dCXQsaqGfcqApx93MrYtf7SZqUbARaxS2A4hYfaxK8azNhgA87agAXJh7YbDzyfcYUSTpAAHYASm"
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

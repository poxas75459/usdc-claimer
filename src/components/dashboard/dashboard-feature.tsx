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
    "28aedhpxtsEuYbZBadiPbKbFatAqAFFsnFDVf99hGWECUBPj61ftM2GwCKEn5gn9rpEEPiML3S6xVGkwa9mCbsuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BqAzkQyGSCHq9W58E1LD465nNZpfVhViFzWvmqFzAhK9scfDZ5D8qfSHpvkn8pnqDjJpST94w2u99SH9Xxee31",
  "key1": "4z3P46BjCVApyPrXrtdB1u9czJ17Mqrr6dUYSGVx8jweXqD8v4bguY63cGVBqCSYuaQAsSWDr8LfUNa7jcfqqzhP",
  "key2": "4bScwcLXrNiGKCiLxuncxKpeXxmLkFKYEpjtUZTGcGLNmosK3Vi5g8sseAixcadt5PPBTep33kZV7hscsaXVY4aD",
  "key3": "39pM49icsxNvdoQT95ZQAojxcRWKj5sQvqMDSTXpprs2UfGYexB3m7oR6Sbdb4nx5FwEWdyCwbEgpNCytruHPsfD",
  "key4": "347fdF6qoiaHTa4HZT94QeeyNGgpf2c5YoKDEtPJsMveeuyKuU6vvGrbVKCyVYhjASpjvqgyWTHDNvE6YhkUHbs6",
  "key5": "4kmavGMSd79no6tHaz3jSUxpo6NR29uyYRbKuUyh4JywPpiL7FB9dAERFzeQVWXGY5s2Gp3Z46BTWJSK1aogQ5v5",
  "key6": "2UNa56JjF9gM97mYJNvr5DF6c67duK4zBcSbEmbaSMQqU9GihK4odEreVmaxRJnERqX64TNzsnwq5bNuXxK7PSHH",
  "key7": "9yyky5KsM1Qv9uhoWDZo6yAVYtPid42XZyCF6V1rWpR5RMstmKPGHyuLj3QU4F3HFJv74JYJZrQ4kzYgVRgcYhd",
  "key8": "67R6734S1YBctMtkjZfVYD4dC39wzegM6c5Jwjf9qhmcbWZfGBzHWGD2LYxvHrhqJnajcv9G2yYvbwLyKhDUyskm",
  "key9": "oWg2oQRkVM84KS63E6NWHu3UdW3KehF6tNHQYJLctSnkskcyrNFeqaS4ZWiQZNPJR4uharQwRtQ1vdP3qPEG4NJ",
  "key10": "4Mhe7MkgHBx3proQhANKgEJnji72bHwQZg7LddhKCHJWuZPGZke65rQoq6dB3vJpbGmnXL8PHMnDsiFFjpesF9vr",
  "key11": "4VZUfNhZDEgJK3umY43oP3eVRMMo3REAmZMce9YzfxwMtpfqPLgrdp3GhHasWvgWdxETyRNzApt4oCZnHNgQDZVV",
  "key12": "4QqnCn7USWMfuSYCtFABamQE6mN2gGta7SYnmtcTzvPeJxRzjnmBPHWeg3g4qmR9bR5YDudwSknpzfuYfxkFKZte",
  "key13": "5kdr8ZXVF4WdYNCXKvCM6MENGWmez1RMTx6Wp6zb5Z5n81yeNNCw7irj4FuZr94dMRn9agePwmZEhCoS5u1q2LJ",
  "key14": "4y6WKbTaEAEjswnfjW4PYkdfweyeqrVWMiYQ8GjyQpBFYcQzFzg1boaDhWY2DA1RbWME5RxFZNTRdjRgAk9aBJJw",
  "key15": "5cf9FrUXqNFSWcvDQ8Y18pDYP5mRFD8BirkyXPFot8eqhMAR3nnFzy8g1Ta8oRrtBvSGQHMvoLawnmzeSBaSZmQh",
  "key16": "5vF4Lbq4AGE6xMMHaMZD3Lk3a938oMnwgDosK3pwXmKMHh6xKksTiZS6cMRTdNLZcYexrvcqGTiJCrDCZ4iGwq7S",
  "key17": "2Vmm6RYEZ5hVVRHFd7cv92G2GySDW1cu9L4BaK4mkSSL7PfnzdEhpu1KftESyDnCfgxbhABuSsFCWFxpTZ2jFb6M",
  "key18": "37auy5kY7niAhh2uhEjcboG8TVDz53XRLevWDcWpKFs9nse4aCtLRitcWAdhm1V1pJUniLh6rM1WD7Lsw2WDjALk",
  "key19": "4S9CY5pddGngmi2ohL2zT8S6DzUfxCyHQm1hBQ7MxvbKZgygc7x7Y6VMwauDDWHh1vHZxmCRJKHHbr7LyMoRWsQG",
  "key20": "rNqAth9ze4ND2br4Y2nYeMNpUtkgns6eXXvg9fvMM4EaqWE1dabiVGnfceX6fZCTPjiZ2sQdMKCVh1cz8e9jk8e",
  "key21": "otyqfp6FBA3rEPhU4S77yxPP67NUqDU9MW89cH2KMMa6E1JdcWmhF5rX67R73gxVfG23KQLwYeA6oSkRRnkv5XS",
  "key22": "651WT3AwT3QLC5o6ooAm7fKLr14nqHTv4KTHkDpzvRxdpnVdVWEzKwyivEyQAjgRVM8Y5kcDPF512sHPusXi1ehd",
  "key23": "3a6D7ygMrTFWa24zXEyWa3WaC4uRYPaU7o6cFQRQhDzPj7kQioNXY9x6itw5GWxKRZsbATQi4pWxAbrj6jbvFHFK",
  "key24": "5o93cZq3jNUQVrxrkzvTZqW5b2G5bkHDA7kJRp7CfFeABQUmVX9QF41XY6JD42QXNZ1GhM6rVKhHtN4xngLLjF4B",
  "key25": "43HTq2bRfGTLxsK9QKnK63YYHivGFPPP7tUxexTqddJULudj2s9ypwj6iTUdNukgnXdy85bTh83msmePGCm82Z5o",
  "key26": "3v6hRwZZbMii12kK7emjvBPQ4WCxa3U4Ff6g5YTpuu1cVztyxm5ngwLwr4H1My9aPj9GzGc1WFF2u97cyNioC7KJ",
  "key27": "3V6Y9C4ukaJkLHwS2MBb6CoQd3JfrD3pvSTto1xtMNDEEUgZguBdS7NPQnAE4epw2TaTybxHqW8qPHMJq9y92mpY",
  "key28": "4MkLjxQCnxydX6AU9KjZZXzfXZXLNXQNMQnSuPeVcY9PL5ZAwkit3pxfMj9hcksDEKtZrwfxehUd9qKZAfeRviK7",
  "key29": "4j8CP7UntG7pjt5GRUGwqoECYQpW5rADQLLzWNFritbsYXw68cZAmC5DNXhNvmChmy6Yok1TwoUwgfmWkQ6j3udx"
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

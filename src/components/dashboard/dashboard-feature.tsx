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
    "2EbxBWJ9EskXPRdjxRGd16rPTtBFHdKPuz85aTsU3ufZy2Hb4ixR9zT8bLSnSYG4rnT8Q1aSdyswLmgM1HSyuDHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AFPSKLnWVnaakeNHW7VfMjB7MKq99uMZMh9jMgJuYhpmzh3QEjE45Ray7gwRmTPSXB54Uc23C1vXwtnnzK1gLaV",
  "key1": "rYcZyWhcmmEi6kFmDPcHggp2fepBFiVV3LSaLZAc5gDmfGFXYwBCDEVgZJ2xjQm2KQVotBWEvYFu7Hpz2MC53Gk",
  "key2": "5MFcVGCufyQMhD35u8dGNhMVNnce9kY1heHznGgmRZkFwmaimF3pqa1rrjxuZwkuoMWcNkv1xxUkEBPyspEvzC4A",
  "key3": "3eK7Ks8MLxjtvcv8TDuP57tJt6rK3Au622RXGeo2yRn6L9tvvjDjEGxfpvGWrNsDWq8GxfCnyYkHFypAqoqHBfzW",
  "key4": "2dYsPG5cTDpUntyeewp4Fk41dpuEuXKvaYXYd53d3FiiP34ao2ix2fJEPSkQJAgr35EGK9uSNu77ExKR38xRw7ZK",
  "key5": "Tr9tWvdgv2NVmDZd6omzkW3iiBpuqunrp8QrhNrhivLdgo1ir5NtVyDGin45sTLD99r68JdyREyNoS92BsxkBJa",
  "key6": "5Pa2CbWZRPHhyZNMtC5nbT4Q4gesQKncPR7triiLePkeM5Kf89uScLcpEFx1hvUWgk2uyY8x3HdfpeuPxXNEWifA",
  "key7": "qjY1FJ1oauht1db18voEq98Rfd2pZqfnuGikkKSHGw7oAQNhpMGQ3X72uNwhe83Q5iqFDrXWfwoqN6d2ownkZHf",
  "key8": "3c1hC2ArXaBbSDcgjQsSa6c3biwHY7fPcmx3G7R7FVDubJdoMgfXVztr7CCJycpkbiGygjbJ4ZACRPjrspMbTbkC",
  "key9": "3VVukSNnaTEvbzAR4TgiTYNmgKgSw39MuCEh7M6qbhGju1GyT77qqhWtC2kS92S4FN8HuvU3vEteeVSQHVS8jDmu",
  "key10": "3pAdeo6RbMs7yEDv17LEBhbwPhNMqbm3Cwj3fHa8yAzHGcVaz8ifLofLhNbKbZFQLvghNAiSkgcv2zCHua1JHdxm",
  "key11": "ttNBgMjZSS69rPwUyuF9K5DkusZHHJadGYLx1Mggq1fkvdURzDLoE9BwEDMLd8nfxrdD3o8ysBcSsXu92xNbFGr",
  "key12": "8nHASKWuGhVGPaqkTdnNAwDYzRujoxM4NxRRuTtfC5k8su9f3wyojxSBEzSGm9wHXWy1oRagrPVSmdTZ7Pu6BXJ",
  "key13": "3mbGPPSrWrz5we8wXB3D7PWmtxVBTmxuavVgTWJHbyp8c44D67KZYmdGUo7nxbCFSFsjcfTfYBuy8UYktfV91MNZ",
  "key14": "2N5xWNjx8qx86bnKuGhXgQ7utyvsL2BtxNYMzFpCgFsCeeLjKbcp5FhmZPxmsVe7PWLqVFyuCezTfZdszxyG71nb",
  "key15": "5AnY1ZjNE7UZUZgg8CTxN5xU6zeBfkP4Cnae1eQFh5Uyoq74WKwyWTyZLo29sg3SK9FvMb4meHwtdMmFTUAAVj2e",
  "key16": "4rh3Ja7p9JkrhRFGzBBh8eJskF4fGyn24qqjdhApaPjTGHHUNGE9P5wWrGFZFFJnVLVZaSJgvUg2JULAFR2Yt7Wh",
  "key17": "4kw6CMFiJN69D5M1JDGFdE8LiDGkCBxkEXzY1DYHYwByByvwxLvfyBMGv5xV9w9ZHkqMBetWyRX4cZiYXuy7fzZz",
  "key18": "3M57kzjUL8BmE7ob4asigcRraiTrm33PTvnp8Qn8qCkUqQHWsiEiJrumvMzHKk4qgYcQa9nPBeoYVe4ifpW83Xxp",
  "key19": "419ksUHz341kGgia1dhNwrF7tiQCpuVybkPRfucQmKbPsMzVRFYe1V4BWghVuch4tLvdoLRyD2omPCm8QApfHZm8",
  "key20": "xdJ7kA7ArLNxUNLdKbFHjVvi3af4noE1aRRyAW2xnPuqio8nJDbuaaTFjCbvV2fZXQL2zwv1zGJxuzBrq2dp6tH",
  "key21": "wwmba63zfiLX9a5beabJwAwGzk9Es1hW8gUzftJhz5U9xfN8USzfdt5o6Nh2xSmWm1NHbspZ1Sac49mEqRxUvR7",
  "key22": "VDj653k8QDvMVKA4WcWBAYpW9X48r1S8WvPJyhYBLFghL1RFETm6W1vfEmnePgYmLnr9gvWLyve8yc5Mjg3sand",
  "key23": "4fJfBQPKpfwPTmLVWiEUAGvesVzbYUkTkhP2pdYKJ9iJNZRm2YGAoCLe6iZf7UEn3dfAGjTRD12k2NZ243Q6Rr6k",
  "key24": "5q6Jq7EZecfFKmXyJRBf4EN9tJzaoSNWUrsNd2Ww9b8zuP2ReaTCGckVyxspMihkCau9rBL36oLyAGiN7rxFsWEN",
  "key25": "5yK1Y8BaMaCcqGeqNz6ijjBVYgTEk56EzUoiozkodzpofzV8KhU5vcPGr7RmBYt2yP36VREknSa2wAUUQAKLKfFE",
  "key26": "2GVYp3m69CuhNMANRxRDnvMQXSDmgjPBmums2PkwZKKmnUuCv5RcXmYZV72s79bCELoVV7SU3HVsdtCrRH9YZjdR",
  "key27": "2BhZ46ro9TeN4Hg3fQPtdFue7gYXnZpQvuMcYFf1p8B1NjG8gLjce3ALY4rs4UXyxw94ZCwAjnsoytf8oCM3nVVh",
  "key28": "4Cj29at2sFdhMWc85VjMV7ek9jS2TP6J4gNEAQkwgAwkYu9jBm2YrnxUnhN6FebCKC1DwvTp8oTKQUj8LVDYbZa9",
  "key29": "4pEHDhw72e9YZjgzvEgqquxZw5RbeAT9YE6UiJSAGLVDGXtHbKxnaSRsjd8DdAHpXqPytp1FdrNf2SuFn9VRcf7P",
  "key30": "5Ta4sTUmRtDGhfDW1uG8PrCfMAgHjpvZKRdvRaaMFnStptvAuNAk2ySPGKR9YEfexef1yGau7S9WZRDrE593Gfyb",
  "key31": "j1MrN6spyY4fV7r9RTJ1bqVsqLgFy8YNX7fV6rJrBjYRXQuMsT9k6wgqtJbzhYYMszFro3fm5i5dabpZB1cMrKa",
  "key32": "42xevFvYo8izN8V1kQ2pALs1NamvvcFDLnm4rsbzgnCD1Nhx6rTwsEPb4CNK25exHdn5dYzwxJhbNx46t9NZe1Eg",
  "key33": "4V5BupzHnchyifDsmA5Q7arvhkHmTMkJoYyoGgdEQyyEJXSnmtL9vsvvUwijWHPny4y4mAPSRw8xy5L7d4be5huA",
  "key34": "3WTC8RW9wuo9CgXd8Cjx37WDreKW9b8vtFkyu44Syx2ZQjvr3uCTXt2rCk7rmAgM6a8bhmBQo1rtWYsGAX3HsR5Y",
  "key35": "5pWT5fTg6gy4XGzzwVoPxRaMeJpp3wm4AWw3iDV99FhJvHaJbi6f8KjJjvP6VsQdijdWNDSnFz7BTp3XHRyHWqgz",
  "key36": "4VZY7Fo1JoUCfXjDp9te6pwMH9JGAngzxJzR6TLJiKVSd1mxWXmUJJMEcct9CFUYHJ97KJohMR8pLiJrjjHgs3mM",
  "key37": "3p4M4QGr1c1rTPobjWzHrnCDisEKKwtLGeDjx6xSeWQMV2it6o3t5cGm19akU4QWpQpW74JNfmXkwekJMQ617YZm",
  "key38": "4PZFu4DxH2HiFvurVW7yNMgqKZEpDSv2fbtwrpYovn5VS2Zdc7b46YVPsTqBb55R5Xx3uPwTQUpt1VJwcnKNBRGB",
  "key39": "3B42L1jAZ4xNf7nofWeSdwFaVRUmChUshPjaAACgji6kkk35qRQgwxSZRU4Tehqkt7t5odREqRiV9ed7g366yqaq"
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

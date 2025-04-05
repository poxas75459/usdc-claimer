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
    "KREBCrT88bU84DkToZrVVFk5FLRbBKukyrMQ2NBYHWLGKxzwaSkPwH6E8dVTjyfMb5oZyxrimrsKa7Ncuh7Nm74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wthBxiU7mZWzFkKVdqy1ud61L5wwXeV1ovtHi55pn1cdQdEmpYjZ9pqhTyLqya9GBhNqjBGBYpu53ZS8gr7mKPL",
  "key1": "49KEVUvjgFFSYn3fU9LFAzEvAZRecXqPcgkRgPgYPbmuqPS9BBpwZnME3rBJk7uxo31XQvdDXdAN4RYpCfDe7b3w",
  "key2": "5bFrtDVrdaSKtu15UJPwMJChGBkj3iLW5UfzBiyqeFewBYQGBBPiHa372Z4jyYRnk8t6L2Se5TTGrinThTBi1JuQ",
  "key3": "2zHx2VxkwAerEqMMJazd6xGptiodh28UjbpyBunE24fXtfYv1u24ZKmZhChyT8AURXE6xLHVqRSXJrCtiitwKM8Y",
  "key4": "67EJ1bL7kWLZRZX21hHPNbJRWGyUtyt1Lpowwv2f3QpFjcvetzvNYBRJvaFWyzP1iiha7zRdxFs7dES3o8iwmZvz",
  "key5": "snUt61L75ojE7tUvoB1mmErG5ZVTmLTvRXywtGemPeojB7VRgt7MamhBYu6RUQR8BMvGXewvP7h8qqgpAep8fSb",
  "key6": "3xXAhiiebuXqpjWjQq2ivEaLs6uESRH4ifRM27yzSjwDFebdWuCgK2oa6qa1rSFKdbgrd8htFd6kPoLocbQz2dS7",
  "key7": "5v9uiqUqLjwZDbGy8dMDzGNH1ZHbHsyJ2ECKr1zZypLPDMSMZp1otLeAGySQJBPy4oYGhy9yEiAtyiKjqKXTSxsT",
  "key8": "VytgYShMwp6Ut65FZ1jWojRWvxeWKVcV6Ck6DyD8DYNXApph3p29uCswsbdkmpaF7qt5nQn21oxVEZ4hhiS149A",
  "key9": "55oPbkmoesE1jWFGFjqa7v7knkQiknTb9Sv3auhn1YHzxs9NjqNyreuzyY96F7dFV3RgcvNRzeWh3REaUDfZgMu4",
  "key10": "4SJCGh6a6FsbTZCW3cEs8gKGVBJyur2cWVwsaXiEn9EmEJ4m1pVW8ARP2UMp5k6yCzkd1T8eVt5HEbo9GQhor2LD",
  "key11": "2HuAZE2Cg1vesMFqg4fnfTvw4eqEu7ZQzmKTMruDyp8xEQsfDUXJk25TXR4dyAmLGucE6FJAZk7e8P6QjYPaBSaW",
  "key12": "55vMmbeKZvKRhYqf46BMYj8T2Veg8nSAb9JwLrwBowyesKtKLbS7oBPo1MADrzc1vGoZ2mK9zPVY85mxgsPCDd7z",
  "key13": "4HV9WumGJ2RUkRmTvXkSm75dBoSC8VWmjkVkynzuL5HhnQWUJH6L31mxCsomnXubXgM4T7miK9F1SPyXtjjdJfw9",
  "key14": "3qRGoyRhzPCRoMtgc4V68iG3ktoN7V5nkH7ZroRHZLhnH3wCeTJcW2xXYsHx8pdSFgpPHekoCk2rUVc8p6Buv66T",
  "key15": "2SqXN5D1sCtCjwrCVDbpQ9rqesiHi7LV6quvM5TVbaAcJLhqXV6qmCKKk6L62jZdhqkivWjtGvQ1rZgDxwwjUSJW",
  "key16": "5KGQwnH7g254YQxQSFsXZ6JekNUPLs6d3PwLGE63ByrU4zHCK7T9TMVi9F51GmhshFRWpYmKQ5C3BSn1kd48tG69",
  "key17": "4jJ7wPvjfQbe6q7cBk4wHqZxk9S9vVNYrfx6ckKd9awYvur6CiRajUDFB2BzdCFDLbryjV7h5Wh8QxXBpfpq9MBm",
  "key18": "pa5FBeHPdoN98hgTmVh5FjoXwGsqFnxBEuPpTikrEZ2W8phi8FuPB3peKN8fx3zoAHXN5i2uUPvyXvArsDo6Wki",
  "key19": "3fBRm1Et6pAkuuM1Yu4WaCz3C8VdpFWgAf9hRWnRr1hfo7bXb8cFkZcf9TwaJNGxHTX5UG6BrNhcTTmVy1zjQQeh",
  "key20": "5f4UmtUexYNf8dBYxchRd4nTg8pcSFVNrqJhVtd8HME3zF9KRS2EB7GvsgKSfEEWgAPQrGy6bZbE68KMm2T4zSXu",
  "key21": "45sSA2Pzc9AHb1Y6MjNofsGwQfKTTNeYoMCZ3DzWkiFC4nBJaf7ZcJf4tVbH6LjyYCXGVuCr3xWGgNKybNB5oaRA",
  "key22": "4wGaptZmQ7oF7t6sgXkBeh97ysoq1NLVPexZfogGQzNgy2QboWNgaWSKmwr6s22nmXwLnSmrKSJfW7FXRsZfgT6",
  "key23": "5etqEqGAUf1uTAZa4eRBCJTs9pfJA9TjmYKtRBmMjkoDfzaARLyn651Mc9AeiDprMH453GFYgAfj5bvSz2rX3t3i",
  "key24": "5TAJ2Er6RTTgTz8q1RQcJXRyjqmSsaRJQ1iysKs5VtqNEGEXTnf23NGoTerpCMcPuE4jMGfaRcG4kd5wPeKFsVBa",
  "key25": "24NZoVnAhHzDjM9jKrmCqc2iMRxVjSNmvauTwNLKYmvGSTsNTFyfDr8vAKz7pZJDsD4oppzmz85syZPWX8MYZbkw",
  "key26": "fN2FXHk6Bi3yPr7rq9BaDTfyvNNv9Sg5eH1SuEd2Wm5vcUmbiBRKj2qfU95v6SrUEqaWNsBWJzgyndb8BosEZ8v",
  "key27": "5Cdrwy6VTUggEZNUuaYuQ4yJxGU1UuDXcu41cJ3113zqsrRuQizLhvH6LEqBDP9w2heqtLx2jQjw3FmagCX4JeUR",
  "key28": "3LNg3rFMEV4kkbbhKr4Hg2bmSkMg8mpak8sft5vRp6hgjHw6LnB9jdPzPabUmuHTgnu2CBMEAUp1KDBYwDctoji3",
  "key29": "4Nwwm76rpBNhhK7YZFu39HK3eeEvVG8HFS4gsLQfxK8n6Cou8ww4jt3Bm8oL3cVPCemuG2v38kjhKxrgUw97aWr7",
  "key30": "4dRN7Qx71yD723hrgFWeXDzL9Av9gAp5WTPVpaQ3iqcQ49kFYWUsbcTcWeHaLmYvGfrrrd2zfywxDoPMF7RMNnii",
  "key31": "2L3GGmAdXikU8wbuFC41MzJdrAv6hGVWvRijVRwd6zTkdkpP35JCciRXNiRgAxBvb7Z29Gwr6N5GaknvvzYetxsk",
  "key32": "4crw1FTyyRRni4iXu7cx5DCVR5i5xKLGnXEgjvtmDH71D9YaDx42GDiQJHJqMJqrEhjqAZE8FbG62GCzJyUaBs5a",
  "key33": "4AVXW4sQNjo4wEnGEtGDh7GE7ChLieXk7P74r6C4zSsrBKfNiYGHLUjXqQrydu8EgFzfe4kAmmyh3re2N9T2xK4s",
  "key34": "2DJGTtYRQCW9f4pQZEjAEm5mDXkUHjNtWCgWzyp9HAtaQPWEombDvZVHYHmb7Ww9D7TWaoV3TobTXyzjF9Nw1XmU",
  "key35": "4KM1B7C2x36pUa4R4NJnV4GAihExXUowQwZxsksurox79oN88GRyXKJXdhiKBQqNQYxmgEsPm2Tbbw3dPdUps29G",
  "key36": "aNHmWJoK8siyhPgy8UJHcHYxcQvTGgLvsh99gPkXnqcznKJT5z8fprr97iTUjKDN6NnLb2CvzY6hKjeG3S8NLjn",
  "key37": "31xzBe4Q3yxcdGGE3JwQWoDDy8yPoFe28z2R8hLgNphTZHq5zS9qJzu6M2WbVwB9hsp6sovMee6jwBJCAGfrmPfs",
  "key38": "5vxDd4XBfNVegEuamQMXRPLgEnvFfafRnKcVFWvPKSLtN9WPrdt6NiJNFwSrmCfhs2gQ3XQZG7hTfaj6LymA2ogM",
  "key39": "LWwU5JbL56k44aEE4UQPFYcS77DYhiC1pU4RPS1VgcqGkFcK4Z1uvRqRyAoaNT7gfMMX9qCtA3jQjTf95QVp4Zx",
  "key40": "2Q7YfdQFugRM4B728ezsLgEAM8xTmQ4WpSZiBcNBvWVmw7ByhRuTdnPDrWmquk7pxF1gYsSxx5rQYin9gLfPP5Z9",
  "key41": "65oBkfAZpFBuH4NSJeuxbF2wgq74gqqreZ4fYVrck7CnowfTC5HHdAHr7UY6sM5bMKg7NzDaqHVorU5RqX8o5d1S",
  "key42": "3r9pUvxcc59cW9xaj1pyhwgSJ7o7s8fT3EYwed7gb8LYRunKjateQuKg6Yf86feP41Tsf1Zy5iFhpFE9iGfnZjxQ",
  "key43": "59FBqyh8mp1pPT9sySTBQNz3DT9fFxzMi9DsEGcTiukK9nJRJnVVjqXdb1Hk1Qg2NJBbhe2aQTaauPDcyvkjvxnM",
  "key44": "4ZqEqCp5Gw32LC8C9BaYqNJxonaDE7KsN27TcFhhe4YieQmWkg2acx64i7rDqMCNdZjBsdQbCzygnJ2zwzR9HjGJ",
  "key45": "HQ25n19aszvazkQb29VYfeeR5mHiKcbn8k678Fu2CoZxW1AE17izAkHiywCYr3zGvXgdYtbjnhBL9owMEjUaLox",
  "key46": "2n7gqHJTdySQmQFoJPJM7pu146i1DdBa55xQqzkBFuXCz1tn7LfVzQcGfBs1YVWdpmsvtb175a1jXnFD22SNUhbv",
  "key47": "4KCsCmAdaAsxAqk5XS2VZxBjtjxxCLmJwW7VSBUdjWP4e6MzSi6g5GzZUXwXKsg8reniPm3R8Bjnw3XByUEMUy8U",
  "key48": "33NWwnY4UZZ7tNpKEfhn2NehYtreZ9ug1t1BdkaZQpqY5b2bPv4NKAqk17qoSSabwHXKPE34vRvgt9oFzxn5Fx8f"
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

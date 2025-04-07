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
    "4KRtNBPjC92Ms7TNRt7oxE5UUJeBLV2hGp6LVqaJ82SSNnMXzmvnfKWDZXaoXJ6AXmSiPv1S6UnpxTBkQ4GmB331"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kQaigNomFQuobR2jakqTL3YetqQxL1Yro9kanbkZh9s8mVFEC686kDrPfrtDFhZKW7RmoScsVQn1fPDEj2Hfa27",
  "key1": "3DAnJhLQwicp46goSuRiAuEKCpJznfXiBof59dKAniGDh9vPis3bQWkcBsyT6Svh8eZv3y1a1NRCr2Y4ZxEGxAva",
  "key2": "YNHRaYvh7T3ut4ajN74rEYiP6TmJ3FqMBthHPjqzFtzyqhiNvmbrqRYxBRyCgFvZEY5BgfTiymgidEVtHCneixL",
  "key3": "29UTDQKDwjdnFdMdBCv9aPZC2sKzRp9QpPzHLvSxrJWEoRwQXni3zgUbZeKmN8Zms5CoKS4JjBfLW2LUEk1GjWZQ",
  "key4": "4HT6BuQHi2QvSZon2Tmn4neTcFeNCjkyWqpuK629hNAvLvDxHLWDXDdQKSYWJtbg437cBd17n3uLt7isH6ijQobH",
  "key5": "44XQQ7GHtFPk4FqABfWtgA8xHyDepVSZCU6xnzpid2wih6eFaQose8Jvozhs4SL8YDpibkyvZCCyFYBoVzCBbn8d",
  "key6": "3T5jQ7SJVnZTjSeXGoT1vcjbZQUaoGEHYB3S2YNDR5FfXEXYLsgMYkr8p3zbMnL3UAAps63qBcHyKy5L62TPu6dP",
  "key7": "P5G877W46JNDz5PwaBQnzcYPFrH6r1onxhykNULuUY9jDGzmLUYPKYXXgdKGSGkgGnJYwLfimxyhnJinjpXwsbA",
  "key8": "32KkQhRtc4XPyhofWAGYqV7qSj14mibTwHhbwyjbJTJhsKB8cNQNaom5QGjweYyqAv11Y7faqxjka9hvSN8oQKpd",
  "key9": "3snGbBnRVqjbDxVzhPi2GbStZY5auQjVU5eA9suFuRfWWeXN8TbteARGMQWYC5qKwbg3QqpFznEjbir5Vohe2oH7",
  "key10": "5xN7A9abPq2DNWYdYXaDCYV4bcTMfaaJfLEdetiH2hU8o5VjZufPzyAuwqPXuFcQu4AS3rgCiw5wij2RP5s6fARk",
  "key11": "23f3XxrQjcedbdgzqTSYNTfgUK6xRzbeHm8TyN1dATR3vq8XrX7up7HehqErZCVzAAtTgAvhG3hBxGBtMdAvTvk8",
  "key12": "4edw2Zi7yNUts8XBMv7V1nGKT38ovQtpKXwkiheFMhPYg6W36yHwj9xuEEuhK4Q7f1Cktmqq7rJJ9U5LRpAtv4xG",
  "key13": "2k4URrZjDEXuPsfpgTW8wrhvh34PQgQuex9hfnL44HefSkcAqDD2UasnbNcUFWsAbS4ye98KhSCF7QySLSqzgXzJ",
  "key14": "4Nfi7y4PXzimZ3Acq3WbEfQpHQaqQhapm7w1sT4sPVyuqyBTdJdauvLFAirUWW2ctqXkuwthSF3eYUBNuJBjNYwo",
  "key15": "2qFREgs5SQy9SHwt7CQvhSwVTuEJhnZMGwmoUVU3ZRXaCJQ6iLDm54wgEwpFpQt3u96c1N7VToexbQ6vs2D8aytG",
  "key16": "24aqzHkxdU82TjATFSvWX6wG1ZxfbpXiP1VMwhuCfvjYXgottaVacg2dFGgvDzEpFcm8AE5XNhjKXmbYDSmUz5qR",
  "key17": "Tcy6j4vpjQiG5abCN7t2sxv9qLa4w3a4mEsBsXxf8iJ6iEwvwCYqewLPdytWPGQXTkHvEPwiVWuwZtbCpKaDDCT",
  "key18": "4PHDL5i2mVujyKrb2VKh6ytKJCKrYSScNDYCabaSgarVqtrsibDN59eMug8TYY9nLB11epmisQq4coCJGvw2h2gS",
  "key19": "XBtfDaXdRNrzHJYUfaHtGrJr7AfCFk8fwbMnBNVT8LuyjF2U6Jz4uBXoMxwc8ntzXajPGuX1xonTEZJQncqGr1i",
  "key20": "4i4PkaV7xBg1VEMLSFHiK62cip4KZfZC3QgiQud4hXaPLhYgZFub5E8tMdf6a7zzWbjJfvzf3t9Rw8vymYPomSX4",
  "key21": "RwUDrEUZJiuKbL9pV1xCgCijgQE5WxWJ2RkzqsbcnyP2NK18iHQBnPLotZrvfMJN4YtnSSSfKV7noLgoULqXcQV",
  "key22": "3dqYFkZVnSBVpwydViYg9ru32kZ1GHFUtNn4bLqW1zdadWHW9cWNYPajN3yj7E6HZ1HzfYFyGF4a6vbuZHHCuxFw",
  "key23": "4sGQkduqbYrLbx5drkpeL7MzpT728hoySYvbqzxhssCBxQAKEvTLHjpAzkiyrxrkikmeBFMh3sEEKaVUccSGw7xs",
  "key24": "2gT6hVAEY75EiwTLqhvp16JYedNR3xR48GMJwgtBpbg2dTHRcvtEeVhTLghxdGUpQEx577Ynxq2kBYWwAug8cAVr",
  "key25": "3vf7So3HfAqKEovPwqHgppxQ21pwqs2NwKLehizQ2aMPZU21y1LhWjAMss81Ysrnno6NktUN8bjjZkTaCXAqrurM",
  "key26": "2EaegsDWwo4E7RiRMFZzu93neXxJnEYn1T7LrVJwmgsbHwepBK3xQPwegVhZkpgkAP3ejCTWUVNgjiZE2JJgazeN",
  "key27": "2sjnTUKQUDyt81ifTczHeyrtKXYY7Vc7rhv17hUbmoS1h99JSghLwUoCPyuAwoTTNypHQtW7Sy4xz8xK91fxxom",
  "key28": "4cJYu2bmkYybxiQr44K3BubDsAd5VvBrDPfUhDwocNr3QBPUc1n6csjpsJPTqbwpWMAeXa6uaY5nVV9hRxvwGQdc",
  "key29": "AJevWCdMZXcY84G2td8JkGyQvDnnnKdvVcufDQQkVU5zcVE8Ki14oyNkrs8boG5ovFF579DjYmt46Efxva3eofF",
  "key30": "2DkTchnwW9eHAtFR9df4SZManzsb7eVGJGXiMLHk4JCadvzW11ih9TT2uXvoeDbs1EdqZWHujuuvN9GM9aVsCV5E",
  "key31": "4wPVr8LYFwZgANm7KxSKki7MCKfyMjujKWfAxaVKYoJmtKKpcAYwFRoYGdea9JRT25nUdEC4zNxAV7mUrH8giMZC",
  "key32": "4pE2ngtoE6G9ZQ9veM1fFpPoqnvE68RWXHJ6mEBYheSj5ffPiDTV6LYzZ4mpkUB8N6kCwCP5nbytEeh9wjo8sqt9",
  "key33": "2L7BbPi8FAdqpXT2PJzBCVP6jzxnZNKp6mfPnm73Xo4qguFJosy5DPDGsVnvhF4H8WAMtuJnKzSYpwmGKwhbm5ks",
  "key34": "7y5TtBEnkH5KpMfnojc6V52PsNzNGihdMXUQbT7gLHycjZvXnhKupin2ALQdhAu9RE3jAPBfaYozczPrs6fkV5X"
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

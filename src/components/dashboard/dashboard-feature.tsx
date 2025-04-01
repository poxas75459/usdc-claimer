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
    "JJxpMGYjcecWYPX3bsbDfTAkStbgDhepCkmNTKwKeqm8Uu1GrUPz7DTihLQ5f2tWdWoN6jcAv2gGJ8XKwzzBapF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cD7XVFYEQfC55diVRePzDU6PxuT9RK4Za5keappGUdiRWWKv9JKkKLn2e7vFbZ3MNNejLdFcRQsjUWvQF7rwHt7",
  "key1": "u1SmLou26WRkqK7MUZq1bNd45pyCfww8kGdQ7zgxBZZvHjargjFqo9h7mfZdbBdvqg3aCCDH9mxEgp4kd5U4gCG",
  "key2": "Gu8PGYhFayPvJDj98TzXanamGGQzfuYCosvG81tjHPDhdHh3oHNTJH582kKKHS9WJYX5XGnbnNjYaCncJmfaQ7G",
  "key3": "3WQAdAFEeXpCuT7PzNM4M6et1p5m9y7D66ydUzg4BPbzwJVgbdoTCtiZz8x57xyfQieXFdBw5tAvMMAQ9Jp9Ai9G",
  "key4": "5aJQba72RUrdgvMArHYXXRpPTrY8iAMNGB4z7gcCy8NunkF1HQa5z9edzWfK7xbfJeC4iRTT1UaVmycYf34jvq7S",
  "key5": "2j9avhWJmSY3vUi3kHyyVH6Xvs6gd3Mxfj6NW3wfzFJNgtdXQNvJcF1CY186ZuPsi38u8LHNu4KS4WFFMUmhLDnU",
  "key6": "PhC114q9hotx6GaeoF3K8BYHfDvm45D1N5QxT4quPxJ9QM7JjHGV6kYAE9CwwkS7GDHvHb1etPQ9UCibbU9pkNW",
  "key7": "5KborKr4egBNAR3Wy63UiMAHDRdHGYXQjs6LSYUuwQujKutjpsDyF33i5SpxCz6JY3zdaRDTRcQfxaDhoxjgywuY",
  "key8": "3meb7QaAGiZhYMk9KL7SB8f99dAjd6d5srxE34GRhpxFMrnP3cKxNtnexroHusWv1Q7YHzhT4ayynJQh4hGKo5gz",
  "key9": "3JzZtHHo6EPaybxyYV2xtdYPUGq6ryQkgMVbzG6K7tEjN3uoT5iJHBdVYQpn3TstW9Gm1hBrVWtzZpUKSbZwh15w",
  "key10": "4PKjrTGSeoHQHEmUMEF38FvemNeN3Xpp2n7Qt14oJC9A1sdPMRVAhZMYjEYkzWKytpXqBYZhSvqCyZXtE16sLpnD",
  "key11": "TZ8Dxvc7WrmMvjFPbQXerHMP6QDu9wdvvSjdym4VL1y9ApEmHYfgtEJ3TV6XBtNxqHvEbTavuB4yF3CyfMUmh58",
  "key12": "3zEeKiwziYu631EanVEy3yZ2fnJ8yo4F7bXHkAWEPVnLwLySm1PrjsrEiNcVUR9rWtZvXdY55JfcpyxCvfQRdS2i",
  "key13": "2tGpEFnmncRAEjtPKM7eZ9qdbNWo1vZ4xHyvRWrWJCP6nt6qxiuQqA8Mnv6sJb1R6siyFfYZAxvaA5dUaW76RoVb",
  "key14": "5b5QT7cyjHPiJQjx4DWzHSQNyXwkZ9hJipZHvLoasUU8mESFpQ25g7424tKD96c3Hqt5bp7KUYonwgATbx6YhVdo",
  "key15": "4JY2CVv7mCsUBzhz5o5nzuqyXNWeZkDjnWNMZjTg4gtazQEgtFxWC3to55qJ4tWPp6zuoZCw2PaaTxNwSMCoFb6a",
  "key16": "5QcMcCfzHjB3DQH6TkSsFewApunj1uh8ubLQT8oeqGEp6UdaWVw4LWCytR4q9GLF4DEvek9st9C174VFxPfgzFM6",
  "key17": "4GfBjfzHx6wvZovNbsQt7TBJ5GRZuf2ULtxmL19rMHVJx3Zatj81Wo69HQs73G71wDpdKsxWBG1kfFcgxjoYDHvo",
  "key18": "33AvY6SRMDXHtoy6MPoF545Y4aNgt3BB9ffbjEFaxUL5nyGYiZSiiqNmbqpY6841XqH8DovMfRQ5D6K9LHzyR5dP",
  "key19": "34BXFvm4KGKJxyS2df7AUaE8Qg9AbhebCbf5PrkcejScLk9GkFFgYK2t3b8XS2h6wfvcQoZch1XSao7y7U56Gi6W",
  "key20": "4KUdNY3pAa3vE2S6TsEojwqEBvh4mYwDs9VTq9WHtUkvemSHiagJKKpWXR6AQdUTCM1Sa6GvY2CyWJgKkqLfxmtY",
  "key21": "3yvdEFogcg9BKkrTXm8pMiL8MoeX8kCvpkTVPBdnLJPBctDeH7tjf5phRVSoLyAFfmB7gykGC9W8zVkynFEKzcE4",
  "key22": "4aM3YGynhjXPGMkcmvs99qQwT5Mkkb8TYrneNuYy1jR3uUuzYm8nHoUxRjMRXmqBev9zmBN1fC9UZZoTHizBekbW",
  "key23": "45ax6HEgJeVC2CfjKdooyVc65a1UVrPjPtjWKLZPo9ZYQopXAnj4CETAaB8GF8TEYVWb8PJhF68BSegnwDyEjxFG",
  "key24": "4MXb43QjfAjx1Bm5X52n8BJy5BQ5kReySHKUFbd97xMd4ohPGjWDY9shiPFRoAbC8MsdWqfSfzcbxkvbA2ZkAzWp",
  "key25": "2xcfC4QWVot9kkTgvGGTDa88LC2ptgMbrLPY3UF9gvuixXsVoM4FNFkWTcWmdeeQtPgWDQ57Ne46mCnEEtRinvCc",
  "key26": "5j5WFYnQTBDG15CwjvEB8GRs4g4M38MxFpWKAYygQSxfx3A5goro5tP82cGw7FjfbiFNcX2YjMgucg8Y13ei4fpP",
  "key27": "5vT9Hy5vj7aPnuaNiV7k12mTe8QhqHPAjVGeYzAsxzz5hGZABr9bVQzZG5AV7CyzpWEK1mPN2Ac5A7iK6S6Wiej4",
  "key28": "56ADiMYjXw6q188AyVLmsVe8EnJDbpp6eZxBqYsmEdbp7iLGgjp1KGnvcjiQdpfPbBdLC2j1GYepguNphsTinJA1",
  "key29": "5VGxVHhH9XK9CYYiPqeDZUTGtFP4Ba2rH7JQwZuPMZ4yR8oaVfmU9iKRPbDuuHe2rJGGnhzjkgCpL6ppZRvzFtaW",
  "key30": "5ZxBb8SFWy9gTiJqyk4wMYvvxMyNWUfpNVpUeupEAzjfgoDebJGYaMHLyjQt6o1fUZaFe3KVaZwZQHbwFQ1UYbLB",
  "key31": "4pjoQKQPJtL2kADZfx5CcAgYB1jCP2y9ntAFCSbpVUTHJryFAjesYmaN4AdJvpUsJcYuwyntdj9P32uDYnnYySCP",
  "key32": "2qBJWvEYykkb5oCAtaecNMbf8nc69xRjxod4S3kBbcaSFMXfKNRmYUaddCxNePx8hU5mDkZtHgWMhRBCtZmi3KUJ",
  "key33": "4r3tAeqBVsDtgKKNqm4phvP1JaomuHLgPujx37CtAP7QQtkG2WDuRYZmnvpUUQE5GuXhMWGkcES9DyB4jZPN6dAq",
  "key34": "wfoT51Y3YXX2PXf59sjv6j3SqxAGWRQBQ8NXJSSroorMJpyVQVN6LRCFowFYG5CiBxvxTW4wSWhyYefw5p6vyUq",
  "key35": "5FchFwo4TUR75nxxdFrQ1WheM2rh5EpJao9ZWRicNE1dLNyGmpeuG1fmzS9g7FdX3c5Z2PJdNdQwKWJN4aD5B3XG",
  "key36": "xrXeJhipiXqFRGw1rcrWnWVfZ7JP667g3mSK1SCHRmYTf1u8JfYrWU2JGmWKVkWveN1PSPgHB1btTXLWgV3j8LB",
  "key37": "gugo5QbHBzDuQ43d5uNedtS33ady9VJFmorJUnh8NUoXNXGNuZhiDyGJp7A36C5xBMf56T8kxqsCQ9o5Qz5gYK1",
  "key38": "5mbc8EyjT1vfrDayCqgkZiBJPAvYrg7YYvjbRM1mZm1SQGQuYZYCivHByJza3zWCjtuD6q3KJhHShJ6xWECF3rpe",
  "key39": "4c7mEdVhGDnx1tWUbYDM3j4N6BAdaroeVbqp6siq76Et2tnx57d4ppNJyEmudhJcB1ShYGsxLyzE6bGCaGXGufuE",
  "key40": "3JgWQUsDmc2dzjzcVmrnNNjbSKBEsm9jcDXnyFPAUZsf4ToBfyPYVhr3HHQ446uUKUrD36jZEEzHqP96V5WnmNvn",
  "key41": "5Rhstz3nyPKYQ1kC5ugktsYzefZqwJUKrWWnLtNfwUtbVQADSfLHbzJFTY3duPeuGXTg9RtKiSdr2Zwpm6J5xN9F",
  "key42": "3graKPnnLpwsjH6CUDYfgixQeHspN7ptHAnEqY16aMLhmriCrKdUJqyqDGimMsGpEjE9XB4AAVAj73nGE5PCnbWc",
  "key43": "3zinVNPmFTxXEEwmpZE3Mdz1hgSW5c9MvbD7c8XiQaQuD17FFQhRU88F18KJn8agwSAwaDAdTRxqiJ5h5JZi8B3v",
  "key44": "5jDgoZYWVyBfyxgWJ5gaWZwkatVeWCooXWMvoFMUXZpZB3Phx8WTdNmT69UpUEUGcD5MDMwcjFmZTBw6vrrkba8H",
  "key45": "iErHEjNFLYTTPyFgFGwDiwgxyxk7wctTNU95T7q7SaMGtadmpD9hzcVYydmb7iemNfww8EDuz3o2qLhq8yEpTV2",
  "key46": "3gYH3XjmLoky6S1PxL6fjPa8qL5oQsWDjUCQJDHKcJBBAwqUcpLPd7gv6mgB4JdnhtXcABacJXqs791JshrFSwdB",
  "key47": "5FXFdadgEswaAc7RCFw1gQEfNkpXXMi79aJeh9DPFSboaD4taSDpczhQTyLkp98582CA2HTTArXcctBMeRsEVPQe",
  "key48": "51NStanrU8PoMQvo1Vfcv7dYGkC2jmZJex8jqEXtuD3QkkLhiABHVUkTgefS4jMpi4qYVk2qfTocSxjFxmywd91T"
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

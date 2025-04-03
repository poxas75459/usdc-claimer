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
    "4EvAL1wzPy16ap5f6AKeD5xAw3DTf89zydRsSwB8qbbEZj8mn5jQfQxZDwJw5zpNduW1TqMsQ6LXsgDzvp97eThT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fvkksiyr5viPaBpDHaMPFhuoXvZmB1EcyEouqK6niR1oxVzSEc6Eh6nJqExHfbBWEf8NXvXwFym2fadxkSJvfcY",
  "key1": "CNk47NENNDTYoUwrYXmvJRYUhFHFe9NeFmL7m8LiGjPkiCMiS841btrAvM52gGLkaxv2x1jbrdgMHFFKimeMK3Z",
  "key2": "2oZiwGMkg4BRotcsUUuhj4dCiFiquQCPFkeAvtZAUxqrTcPKeMPDhNGCPBD27hgPu8KJMQkCqUi549GKo4qnk9aB",
  "key3": "2tr9FEnR6TWxC2qJtFALhg6jhyhYCyT8mWGPcK8AFE9RGCBZZBxjHNedwaFZjZZzv1HXDMs98Mpg2CBPWBMC7MDk",
  "key4": "qXeLG4QrnCoFqNZeo8NPAMaAq999JLuBAArhFGQvfs5yqfLzK3wnw7UewiUj4YFZwMBM26SRuBakaWYfFyXCfFo",
  "key5": "2jwATU7ekeE9uXdLxnD4qFc9upLRf7kDUTwyCt6s3RBruceN4J3ZM5tKNtPt6auyCiY5Y3oe4MQ1i8LtaBC13ruh",
  "key6": "2Rg7GEH4ZvQQm3ZeyyjYCn6agY3hPhZtYuBcQR7NhAY1ChjV3DJYLbJ1GE2cSrWhDzCRgksAJYbU7WWejnGkLWUu",
  "key7": "39xUUWaGBSLWJiz2d54FPQjM2s88MkfcKe1o2KWrDmaYMRZks6Cph7VrLL9WSmuNQvLUWhzEuYy7nuXTgKvDo6pX",
  "key8": "5eKVHWWB8hFG23bsm2Upcr5RVjRRSp15yyuXxhRtd4onnEEdqMYB2Suwun4mkPGBXkB2JWLZawhEhLgc1fL5Yzw4",
  "key9": "voLh9k9QYQXpv1VWYBJ1f3XasngiwtNCjk1iv2igKFJgXpHcBjDf6Lt4dMKMLjJr2PcWiQoVD7zxx5nHkzwcsC3",
  "key10": "28AW2dKbNcfmukqJhKMBu7P22noGx3JAFzy2bdi3eoJm3kWhFQa1VaJe9PUcKVTdbNWF1vxui4bpEoHXZfQeFe1d",
  "key11": "4vLKMreNzJxjJh2VabWXHKpmLoNpsDRZgkWQiuW9V44VSvs1F75Tb534L393DaBpLNT2dBxZLBMy6h7e7BXV5RPR",
  "key12": "5t3tRnrRZkqMN9fvQis2w9CxB5MhJFN8oinoR8DoZyMfMf7gRif2P1FWAMHs2DeM6mmwv3D7TMXNShxpmmgE2n69",
  "key13": "53yrDbjUqSGgAQtChv1gS4uFPmfAFUg5WdHEJi678bk2BMSqEMd9H1vyW3pnoQJDeL7vg9axEvtQzTtAWJBLNdWt",
  "key14": "4YBDH3Epmju7QmFmKoCfAc2CiCYKfa7oG1NdqefaBu2GXF1DrUF5fYpuNetkHSdosj3JY8pRiQrWt4fjvKFn6EhF",
  "key15": "2ufMxPB1nDjcg5wfCbE5Zkh8JaSFqVRaMbZ3JvAXQjHWVf7EUeA3jUYDj4sM9fJBZW9PAdRp6ssFyFiB5AmUnVRi",
  "key16": "2Td9gF3D9Jxr4JLFM8aYAWZhbL8Hrtrrn7u3AK7iY7WJfEz6V8AfUpJNUdNqHD821kvtKrcKq7L2c4AeYUmDAv49",
  "key17": "2wSxFaeC92V4kpo6Atrg7NwMLpBAdMJPGwbcXpjGsiEm651M8baYbAhZoxpnHrU8i6EeKuvHmTLZMKJiozgALtCv",
  "key18": "5s1duKFUP3hdwP5UowjweMCjbEzjR3xaRLvmjafYmHj3weehrhsdjrShTQxbGYuPVWC97tvZYKvLL7oeFLm7qE2e",
  "key19": "2WuLoamcbwSqBCRW3JuqJhLNFddKW39bcaF3A6U3HqCBP6ySdrhxtFMykjcBP99ZhJBsDenFjttAsfnDy78DeqpA",
  "key20": "8qoLBZsuB8N212fGhZ2FwgBq926NqYcnqefPMc9yN8TvX8dQyPyLgu3NkKqwjotwQ1fuG16Ro2k2eiEi2eVaaKu",
  "key21": "2ofaR8FKKE1F2z7KPN9joBSFETPWaieY87Cx5Uw6NhvnmMBDRfZTTjgXT8su7LRTpwPXq9sWZXaec12az3FVVLuh",
  "key22": "2soWHgUTwJNBkEvLUFmdLiXifn73sY2FLZ9EAyWsGsCeVXTKq9qGo1YXnUaGt4GPhvj8EzLjTJkmcSW77FiAwDCL",
  "key23": "2fUAomRDnesbxcGeFbuLjfMNyHWzj6fqW2faXvkRcypLnWgSqqr7hRZYUB9rZ2Ri4HowWmKJRabgozWuo3aoS5HE",
  "key24": "3Shzzmfxnzv2trzCJ8mJSvBZfJBpuqt6qgczaxE5wM3CF8Y7RR4F9s2SU9w1UzPhBbEjNnXPGmWzYtZKLmyNjB3q",
  "key25": "2eFRGM3wo4xCrXFHUnAqTCba64zoczknRmsr53Mx3nci9iXoHuMh1bYez2NANKQwxB84WTjgLxsbdeAAZQsPuv5L",
  "key26": "THZYJbtgCBCHjvK796bP4WKkfdQCxbiuHjC5DRkYuiQ8PwaTZHveRvqqxXQXWNRhaSK7DHffhHxMN1Vu523naMu",
  "key27": "384mpmDpKeHskcdnNywCGVY5s7VQ8c2XAtHvRK5A6RHec5JukksyA65gDkQKbTtnFLcJu6AzUuJLzE8HsjxW5Ccz",
  "key28": "3B16bgpDEu9nfsJKhPZkQWGu4cfV7A5vQyTMgBVosRa4s96jRiUVTCZtry14wcPo1smUSVQAjBao6c2rn6Tn7U6",
  "key29": "3yDeg2AtdFbHPpNJeEKUrRuLQCcQL39HtUJmi88P6hmJrxAcfA86u8UN7WVYdoTSsbs6jLtjtLytbJtVTW2RGEra",
  "key30": "Sbe8rQytwBNthqUnE3SfCLaAhwZNwmTRb2zBYk98wvwbnC2JJrdZ6dZFMfkEYCnXQNNCrLoz7R6JPkz94GA2xBR",
  "key31": "2iK5wdoXcn7UoDXyESMmecvQNJuEUe5EkrEsMXdmiLomBrUEV1dDRwe7xyP36nS3XD2tvSHZRTrUD2ErHLUZ6MZu",
  "key32": "4ZYpdS9i86UQQ2gSCfuNF16qmD9ULAgbLWdAUqefxtdqCxkQ7s2SNEhFU39y74ZAuGrQEm24pKdL4BhQE2SNzabh",
  "key33": "4zoNcgr6kwCZZY7esioHbiqu2mhWZhwacAd2yPRS3xKJ5KcsCdU7W8B9qfv3QZKn7erHWq4kfRQixPqrjxVRwaR6",
  "key34": "5ULW6qUSt8qB4z3GvfwWhjsM3vZ9mErs6vexTKoVU64bLf1g9iRg4hJoywXQd8nXK8DtpL8ggKAQeNVPrSYYiFwW",
  "key35": "5RfEfDji1JLVJN8DXx4KDUCH8tbuMZoj6oN38uLcNNb7f2E6xuV8ohtxvJs88qSybYvvdignxXGAcUKnfjG2jYxV",
  "key36": "22KUEGvVHqQpJU3jKeHQnA4TxJXD22wQwRwN4S3DkaxGnqnMrr24ovf9cBQuYQKZUumvXZxwEy2vTTxLY76rmjcp",
  "key37": "3o7Rnc9cS5HifDS7ZymCobR4dpVrfyv3z1cX49c8zqxxiFiKJF5fpcPTHuvS51v2QaSiRz7P2WVssjeibMiGjZJF",
  "key38": "4SYgSRjvjBPoNvfc6kmSdGgbTLwR3J8KQ2SmuDKJotWZimYZbMHyaubBooXd18HvVhw5M5Ro8o1EkmERtjPdbLGH",
  "key39": "YvtwjBLh3VEnXdGUAijPzqSa2xFDh9k6iYp9qqGHfsEm1nAFXxYvcSvdvsko2SPukmc5areuhE3AKnXnWqbMVhn",
  "key40": "3f2RdzgXpRvpiVtnUSJoVwUbmzGvhFviNhPTabMjUPRzs2cCsfG2hQb2RxTvCtFaFQD2ifjMepDx3thd4JGEKoss",
  "key41": "2B4QMGri33yf3zpWYxdMJ5ZhqUotwA83hdsD6nUYjTuYdks9GM7d6nWeruDVuYprWdVNMr6LuaND4ELNc8uYWec2",
  "key42": "2Z4GwChL1hCL156tMeCjC1JxHzqmhUX66RHNg8AvCjQVpaKRfwVg7NzyHbpVHaA7Ua9yTm77DX9vpsENK1FB3DSA",
  "key43": "4wVTeSCPd6cidcNjP5UEEkVF2E87VQdi9SZXcEa1EuDS1AQ96Cky2yWaDyWu9jgYSmmPBtfrBP4dEdXimELuM82"
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

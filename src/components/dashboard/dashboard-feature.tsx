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
    "2ipEdJ7PjtYf2ALj2qnr8zKV6nTKxEsBACQow7e8V9ZEuQa9dsgzPwycGS6HFYWTaD6HM1X9MyNQ9UzMgg9ESDRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DsTWqLsq4xheDBsEkGVCJ7KntTR9rADfN2Ca727h1qQEUVFRsSsqH89vXnhiBXnaSfxxKuy1umUbZa2EsGcRsp",
  "key1": "2G2rEuukwppPRvKfqGEQmJtWrcMmjFid1tSEgAVYp6VmFjcL5Hu2eHMCZXpAaQdFT1sFYfLZr8rSV8Ada9rbNik",
  "key2": "3tvSZqvpo8FWQNZd1f4oCAahzMovsPo7UYny5QPRMbZMWdMmwEkSrTitinkVuRkJm16cds1ii7jbCdVaGCkDEWrf",
  "key3": "2NUpbzdbF7BAjFwEx3xFjtGz8NwYtu1KeuECWrQwqQmGzeYPhmFNAihbARyk2YHNCJJDHgXvCmScib5L6vMu9kYE",
  "key4": "5og5uQCm1edmirSLHcFtKz6PaMBQ178LmsQVw7r66xYbJdcp5KHWM9N3vwNAoTDsR8HAbHs6Vz5qB6F8d9ZnDf4t",
  "key5": "2zeSc8u9bTwx9xVzQYz8dXeLuB3q6KAGUva6CzaTpaCYC4e5pW4BqGfWHYeVd8q9y6fTBuKpaXhcyrCCKQe1xSSa",
  "key6": "HwriRq1nX8DhFq3jC9moKrKcTp4iazxQTMefbtpDac2xwnv3DXv9rDRmodb4pous7AiFwVUmYygqkN4U1wDDuYj",
  "key7": "vkm3GynMr5ho9C47QmjVyTv8HFq6DU4xP26onxJFtiYzGGJwrPwwHvtwZ7RFuTughzg6Hzym9647kwhdZNvu2ZF",
  "key8": "MUnYb8fm71cMoYNDrB58wM6RChgjqGNMYfNp1DCDrrRFxfword1t7jzpxShAi6RddTe2amZKznTY1DFS82m2DNN",
  "key9": "3jjz4wD1JyzSeaBm8j3XDPbw6NNfLgYtTnDYjdmPVEeDeP2ToK1TenPk8kQfDNz1idgEfdFSRAPn44whvCiJmNxA",
  "key10": "3jzzfpN76Kc5JjNxKbU3G1HqyEN4y5yfMsCxJU8uSougKh5RXPC2cqCh4TP3j58ff3ZwHAKdhwMys9bhetyJVC9r",
  "key11": "4HTsiCRhdbaFDitKV4KG9runYw32AfrxeQcWRuf4fFoYZ23dMiZrsqwd6TN6VHHcKaNz1V2uEai7cLZufytCbea4",
  "key12": "zrqVgMaWkiQ6hbVhjUG26EXr4BYWNjopanSjS1Ki4nWdmT3juPYYCSYYSVKwQy8m5R1q3bJhcscE73sF6LomUBx",
  "key13": "46cpCBsecoY9XF4w9qbDJzLgVaZjYgvHp4QsexsJ2M7YiqYJQHSMJEwxCvuBfhmf6ae7kwT4uPyXYbS5fdwdgmXe",
  "key14": "5GUXGMUgKX69Q8nzKNq2EBTkYojUebVBvgncEW2qFECYDBDKNBzfkG3vk7MMGFvD66BRNwEp5YPzLoeqFwLUACQ6",
  "key15": "2Rdq7f6B3ABPkGGfxPKVc21XmoiBUcYdJtvz3jRfw25dqksseTptTR4wcrVv5cgGyznA7eYzKC8iLA38DA7cFVZi",
  "key16": "3TxDnohSjj2dnNjWLDMSTJrgSTqSiMKTDywtkdV1bCVrUDjWz641xd7QGMerqsLhJwFUF5fvzNaWSaEqS2Aj1rjy",
  "key17": "5Cscq2JmtPMmExtdRWfpehuMLirRQfkoCTv2FEihhXC7H3jPskhi8f9LuWWzQei8H36cGpfL8iprCEwijD7kR8Ar",
  "key18": "23p8Ev4a23wjFVroTDtd6bk8LsmC2zmSTxdT5btY6AD7MtrWundV1L2orYKPLabXXHLxMFHHsq4qxxkKXx4uxjVw",
  "key19": "3xSDYJDV5JRoq8bAKkjd27aNxx6i3Y5ZuvkdcMnShEohdpBU2gMSHDXorvA93AFKfcgbRMiUnL1MviXydR8tqhrr",
  "key20": "65WgiKtQvTaueb5otiuPbXro6ZBubXn9extS5WqvVYuuvYxCTericezMowbYkUoeKsBeBq7h53QJJx3L9tZLbgQx",
  "key21": "5Zr6WQjiMMZtGH8yjawnzeYwJc93WxLA1j1i1mRMPAXjwDgZ9rrNLLQ5T5xrFeCdGEKCMxwmrHivzwUqLp7VeHhr",
  "key22": "2wtYGVNk4u9zaVgrynZU2dvqdeQgQDVzWhtmasuN27yLGY4aApnBmzZbfXAj2d1bxnyYtDADQWhykx3BLL5dk7J",
  "key23": "2M1kBm3RiVeSa7BeZFoVAVHd1v9JvU1Y66tFdTeMaDXjzDabJYonqsihgpwUj5AKX7HGeTY3MRtDWrkVTW8d7vQw",
  "key24": "5UkyZDJEjkhhqtGXphbFKPY5fFsukx2kkmXrc3DP1Ve7dQ6rL9BJWit8CT1BjCGLfU4SrbJqDZyZUWGzzEVB54Ys",
  "key25": "efk3Jz3WqbW2BuDNTKKoYwxT6J2v6oH4xNkHojiFL4yo3cieuFiU8yy5y7E33A3AUzd5ATciUupsMxpoS6EWq1C",
  "key26": "32QLdtzSXps3WB72c5BHE37Wv7fvDyYApHUi7vUzuyDem1QB1SD9y6VSXBxVZGtUrDpjsgML9BNERgNSedioKieQ",
  "key27": "2tpiYzhX393Y96aEmaAJXUiPEENrt4E6NqfL2tGs39EXd1tAf14oiAuARtaH94mWqeTaXoCSsJrvjWZoWLVBVJx7",
  "key28": "2deQPA81yn5jdMCfy69G87Z3YGCrR1JaLDvHBgvLFxD5zHKK7FSrg4shtKoBvkJq8SxJek1m4mDu3MjWE8Grij6x",
  "key29": "pu9DbTuJkxZfDsXEr5i1WNwAznjBe4MRHNvYAQmpUFpQwR7QZ4GT9aVgYKrzMzqMGh9WhJzXbgm6CYznSafb99G",
  "key30": "2xTfgudCEyv8Z5KMRVw79gbqfntPw7B3CBjjxsnErXfaANLNqBYHkVdjaaEuBn1tYKCecgm7RNmAXFHGjvAejxiP",
  "key31": "3cEYPFRuFiTqH5RKHCakW5ipiVEUXD2UtZeRCY3Syf7xYnaypsgQybwAxQMDGJVcG4xTcw4ezX1Cg5Rv7AAqn8bL",
  "key32": "3AvJ1ecMwDXfsWx9Nmj4dt8NXKBbYbkWPTSe4km12GDaVRtJ2cN6jkWVdZ9UrneRCNhDR5qWXxU9SkVbha91ULnU",
  "key33": "5YFhEVQ51yQV1xSkWayjcbC1xef6ssZ1Kmarc6UpKtrT7PmY9kJiZaSvu4Rypr3hXq3iNrQoBCh1rVGXDXYbrvp4",
  "key34": "d9kaFDERaQok3CLfQEALiJLaE1FkS4dbY8MxC2LENEde1arGEwN9p9p58Cc9oUa8YXjAU677SXT6DzXUKiVVLLZ",
  "key35": "47j4LPFzCUsZFtmenTLSvN4vmy5ELN6ijAbdKsWzRNoxvQGmHB4RSScSjx8wqaPqKe3FdLi3gRRm6HD5LB125mcM",
  "key36": "3DbujfsnAiDUPCGoskGtRrUGM52UiyggfTMpXsY9kiXjCQF8UarHP1vY33XaWhgpYT34zb9Q8kWDFMtEsQhhNJun",
  "key37": "WsDF3YgXXBRuuQbiigNQkLMHKzJZMzxhQySA99p2czSyYsQRobHauMn7SK4H6w8Hix12Tp3s9v1kvrssPgmqqbZ",
  "key38": "eZJdzDX8Xe9paG5twCBNe52x5UR8oR1xn8QWp9HaSoQxW32uMwJUgxoemWCqbakPpmHGaJAZu3ayHXg4bgcsKKB",
  "key39": "51wFWM37qCth7i8CFD6Way1pFsyt4ppVvkw489yk68WQxDnfJ76VgSMgWEXVCMr4gjmYCNLCwpuvgQWJRNiVBxWC",
  "key40": "3AbxWWFBewfSsVHqGxYmb9Xd1S8WjQv7uvL5Lj8WoLPMkTRKDLkpERfo1bPbfGJvLycY2sf2T7LaajqSKSLjVNEY",
  "key41": "3GCfXCReR7LZENuaied4K9LT2U7vMAmysHx3kBq72st7wAdYL5VH1xzePBWXRRDQmZk2R3GF8ig2J6oyHfBZH3Hd",
  "key42": "4CYfCRdsEsovmmdHYYawuLGt2miE8hFv8cAHZ2i4vbnnnBUC1FGYJF7DV899bbrwKxfUJaiZBaAzSGSN735kFBnA",
  "key43": "5W97a6R9hqCorAsGyUutJSYWvSByguZP4AMUACETVLfXQLujoCPNhatPaBPXQeyy1BAThKZYefY6SJjbknw2S3k5",
  "key44": "43mG6MLZCHneBJozbpzbWZgdvEbnwzaaz4g3YEapWHVstoQQLxkb7fofUfVsedZ5oVJp4yW9gGCN5zjXKMtpWZsY",
  "key45": "4UJMZquL4e5XeBNWEQSZYFQaVFVuC2LBbteyWtYthck6XuFVCsqb6VewpMJoz4tqG52rapJeA6pYg4J7kng9QUYa",
  "key46": "5h5xaER4rs7dSzdYUHYXnimv7tQAmEqayevGB4nUSXC3Xerq7vNCz5FA4qgFToV61bUbRa8z9whkYdyK78KWjWVa",
  "key47": "5axuuqWzoNsPVeyrXiEpKLViaG7bbaiB4B6C8JhQ7LYyKTyXtysTD2Ynkn6dZCMksunGsB8xcp6Se8doBFmVRPYd"
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

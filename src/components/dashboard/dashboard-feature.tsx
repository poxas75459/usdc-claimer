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
    "4b5rbB5FfkkeagH7tF5LfEYkc34m15X9UdQkig67EkhwN4XV7vYcJxaFyYfhwbYLcQ48WqUuF2JwjPwXj7V1Rtws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxJRvkAw7fy8LdWr8RkNwYDcsVUANda9Zar9oW8oUA8WYzwhrbox7deyjfYQbnHGWjWwvecQa7J16pEjtoXnj7B",
  "key1": "jYHLNPACNwAcmkBwt7H8pjJQuGX6rbUPnvr9P3KXD28EPcjeB6XPEBLJR9MNA5feU2STozsgiD2VyE8DjRXZG8y",
  "key2": "mQut2jnaQwDHT4Zc9rpQN4yAv3Zu6fbByupmdf7BNXgB19z8YD97zEH3wSXjbB4q6dqREXuzWNLjSBJoGBD1SUq",
  "key3": "5aW5v3WHErJEi8sriS9DJLEUEDJhVHQ6jmmuPqL9b4sxYNzjiBPcprtieR8YFuqRxPpMnuFpUoPasvKXpVqCqgMw",
  "key4": "2cTjvoGJ7MUpN6giVa8ynXouxhgKuwZVPA4R2bs5e47sa8UBvcv9BUccKgh6s2FB8SRs3JjRpkxEkY3biufvVPS7",
  "key5": "4AqyXRkKmXN9xQVQwMe7xGyx85AimSHEFRfod8ZAaNLzJrSZacqG98zoDZ1YeCwyhkK5We3hPJijN25RK3BhQnF8",
  "key6": "4V2z58BBEeae9PJsjZCYN3WuQuET2MJ9HkAXwsJrBXtsr3KvhMKMPGVTwnHNxE8nRWgdZzo3FvmdCujHady3nDkP",
  "key7": "4AJijTGFfryzSZEm3AufWiRQoe8MG3dmXQ4QywbP4Y59B9hSd4VdTZi98TySZyRRHRi5JaPyuUmomHiCLMz3DL9X",
  "key8": "4ebdWYejebKzhWj6bhwVV6uDvCnoQeTTDj75B8Hg8aqSf6D15D62qDqPv71JsNrEFaC9uVt2xEUePjwe7Etdc1FN",
  "key9": "4UThTo7oqrFNdHg7wMM4DdEP436VhqWPcSgi8GS7nB8zuE8v7c1H2JSoQ11FHrC3Tf88YwLXnUFexQYhJrAtL6ky",
  "key10": "37z72UzH3KWnSg1xGRah6VbFfoDgaK1URq4tCGftdBAaVCeAAEKiETs7JsXoCDqcmx3qTpN3N8DPGJiNknaJ3Dr8",
  "key11": "2Vb5PLL3QnQxRLV1S1nTLsEJp3hv9eCGfq1ALivtjuvrhsQxJcqWcwTHNSyysWHBSdsBbzTpx5L4LtKBkEZH6oyG",
  "key12": "5SdyS2VJXznUNXKRKfWkvMiSFbxZDCPdMqDxFY7EtYDpLURGKzxDLdNu1vKLwxAS7YsRGJP1JPDMR8VogYwpmq6u",
  "key13": "3WTqY7w4wzTMxvFpWKBqZse7mqZrmnCwcBxLKSgcyqgXeqvBKhHwLMZWbjyw3UEh6t2hw9nm2HukSAegxssbNgcH",
  "key14": "34CceweDdeT1DEFPsxZYv2j46wCTf54t6xoQmYVxYmR5ySLE7wEdPd17M7tesxPN7LfjGnBvriuaYJS71PCRCrq1",
  "key15": "57bFiQYRq55H5XXXNLtWzhAxzC8hoGvH83bBCU9vwLcuYH2XTq41C2pEeeZFRQqCYHppkm8qna8KrLzWynU6ZhbG",
  "key16": "5o1ueDvqtEE7iU8Rf3KAdbnA3BCGkX9RvCzW2mcwgLfDjG5858Hseqchz69Qb2DSUgSczVi59MEJCsdAdwKFP5Gd",
  "key17": "q9rhUXff4ryrbXRBLLE8Gc3Q862mvfvxSJNr13qnNHvR1YEnduijCWiMfjZ3KCJxV3PiuJJDN3u2iQTBFShKN4u",
  "key18": "CSbowXvNTnkNmnqCJpXjYp8XFZWVrHEsutA8U5nECL5ig1JbHwHUVRPFPiA4fHzpvHAUds7Py7CzmirDJ3TnwaG",
  "key19": "2V9XBZcy9ATVNabppawVSBCTZeMWgpk53vkrSJfAFYxwafTst2t8txvZQDaA3o1mFzJYiEGGVZeUJEGrprXNH5pt",
  "key20": "i29ZLayt178r8dXMBfYmw6zQqJHqQN2HwXBgGV1tCaotcNVc1FknaJnHnNgjkAcaepS37UJ3YR7a8zotWy3ebHK",
  "key21": "3LF3MtRBZNtxVGe1vnFxUuoUBnHSsDjLAsF2U1EjKWXtjdLK5K9P2AksTDJ1oHPYRS5YGantx4UZS8k4pH6gjszF",
  "key22": "4oz9PgrQ6LQK8bJFe5XcRREhM3ycM4ctAbsDG87uEwwBMCynUUiwX9ma5fHY5bXr1tGvT7czkDeDVRkwofxodb8r",
  "key23": "QNRnzeL7wq9gJiYRhW7EYWuQ4ttVcHgDMs414i2s4rx3JdVKcWfApSizK1BZMxyeyXNZhrddcRDxZAtvjTTAKk7",
  "key24": "P9sHkTuzCC5BsSG9TJJTb3ZXrBmN3shh6Y33ACruXEZMKg2mmxfB6iirbcc9GR4CMPTxKP5LGqNU93DUK6pb3vT",
  "key25": "3iHmGkmXpnHcQb4tRFfvBkkqNLWaagbUXjLhCML7VBXGWD1AKmr2RhwwAuAD8BT1rckknpCf6zvH54d5TXBSKERZ",
  "key26": "cD5voBrdjqLH3NMaFWMCyWHxTafNA3p8KYnQuYijuLqHCHkghp1p8QREaSPUNphwkfFHUcbm8MAcYVXEvaxiQHh",
  "key27": "65wepf5Q14u8AgWhTJejLHxCbKzsHwYPJuuZLJLMtpYmqNmMmBKUMDPuMs8W1Ttgk7ao6ecBSTVgVeBpHZzZALAk",
  "key28": "3BXYv2oxMYz87zYq8KjQXQoqKfaDSzvH8BCJ6u4BGjpv4LogmwAhYGyoqpfDoyCmWLmCjLYveAQtsPNeUsiU1wQM",
  "key29": "5k7fDTkBJu5mMNknb83hdbGb4iBiePQaZH66kP7rcM27k2Xq3WFJUUZQBLYJe4ayN3eozzwksUXzjyiqFJDLgbA3",
  "key30": "4Hbd26vBomSuYaNfACrpxpYZRhTnWFG5Pudqua54EqmKgYfhnZY1t1qzw47coM1YC3t1d5rXPza19SzFsGnDrjtp",
  "key31": "5i4oihq1z1tsTojrTVXtzHceVoEDr56iXhwPx2tMmFsTuC2AJEy6hFeF6uaQ1sCXVkPrJaiH5ojr3QMyAVcAA6yj",
  "key32": "2Y4w7kGRvKoJk5D5XLoZaAyE1nBhZbdSXvTXKzsMu7Yj6YmXanf7FsevyXrqJtiXZyhhRpZocnHMHCvEZ8NxgFF",
  "key33": "21eSTDwmAc1GZHjAbwroadYeL7aHdoHo2iNB8MqLjiCdv2HwSjAeQP56dJ4uJZDrWTUp7z6b3HAXTEQEYF3bmxsq",
  "key34": "616Hf9pojAw43sX4KnM6AeQZvZMSFY6YASU2K5Xu9KHDH3FLUaGXANfA7kcP1iKDndkqXWCHEY8QUSnYWDHcs5cb",
  "key35": "4yPsTNYXXocNzMQ4WFECeK4zQG7K8xqX6ZmuUZ5pW9jk8pQBLXxgRFCsk5ZhZ2kVCF7HcYwtqJym9WNFdjS6JmrK",
  "key36": "2pPoJb15ztaAtgNr3BiHVFwntR1D67A8hVfxa9etU8D2QKgS8HVqjXQHMqTVhhC8u12qCGKeZE5c4ZiN7xiLmM9q",
  "key37": "24rQthDAWNCGXuzSLzanzgKPp4WtyJ4ZNM3j8nFzjv3yZThjNmz2Pq5KzUqfawJpgknynJ4wt2FC4RyqfuUHa1n3",
  "key38": "orkJUXLXeygTm6BqnJ3jWCFmhpfbYokksEpsJLJ2FBktdP85vdGq8qkFuWgLbH2iHSY4ezwC7m7E85X8VKwyDP6",
  "key39": "4ptPE3WKo8BusavPKTpPywajhVoiKpThffX6tBXdDMutkDDrFVJyMo67DwGQ8M1N7etKM31WFPk9MScgByw6jrWe",
  "key40": "4tUoAUZXmbbb2F1TDPCuXrwbHkicssuC197qmsMQiBpB3oauYFbf1cEckfMXaqUTFLAAehNUhJVqkXEsRXkR2kbW",
  "key41": "4DyZSdbhAMJo5Dydp1HjTZzSvjiFzZH5f3aahErygv7H2HPMzLWcQGupnEQhTRZeVp5LURKRizrc1ovMedc1exyv",
  "key42": "2ZQ3qcWH9X19hc3rhVd1duQQ9svzBhsXw5djFG5jr2BnC14xuRUszCWGsjrEx29gK1j6izG7bnzbNxAf6ZK8xq8j",
  "key43": "55QhMQA6R8ihnW1vM7xfwba1mT7DSrDgQWGsjN4U2NRRqPh5nA6jkUTvwKC2BxFqS15f35Ko58SMA7itTG5zV321",
  "key44": "4eZnxWVEEq4QzkhaiPBmQDoARpxG8pZb9iJbewzjZgbu7AWUVyeqACkPpYcH9K6bCETUKQFFrW6EdMq2VCR21iZ2",
  "key45": "3xvG1NqEfuSfrmXFgR1MEsNxgfUBfAfUr6FRLVehKGzJX6wLJtt2UYcin1NykTrdzWCkCsXvJWRevSQgvWLkRcg4",
  "key46": "624LMJZRUzUMcebTNVoNRB3qQvAHzB3BvPPMeR9VErAzUF2VQzkdPbmmXj1DYMZ4Y9VFXFNxMZYk2vqvaGa28tfe"
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

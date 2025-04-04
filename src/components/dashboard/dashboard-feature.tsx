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
    "KtUsBxMehk21Cjq53is2deF4DZrh97QXm3Sy887VRd6hqbexxLTdXgzc3y1QADsBeKwn2L8XZJaBpQEmAPLHLeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22L1FQYwmmfhhkxhegKMCdvKnPVtV94r7vbAd2YWoxFDL5E6kC86NjgvpcMqJuzfjGVDvAHbMsJjzM7sPKpKxZwk",
  "key1": "5Aar4TpFDU6HN1sX1kCmUjKrWpM2SWnXsb1dh3YJCjkGVupH98A6mJkU2hqShPWZZCLEq5UvVUgCGYGLPZTH8f9k",
  "key2": "4NBJuRUfyCwQvHPDXjvqwwNAe56sGXwNXJDJHkHwYYFsNQcuNmngYCdCGdwH6tuGgPVpLPB6WP6CoG6mqqqeJFAx",
  "key3": "3gfr1zmBt47ZtR33nB9gwxcR34uMswh7p4VzCXphjdun6qjxqRGgpBmkc1fFbu3kmcg6bQ7J5MYdtvcozAHbJs1z",
  "key4": "2mRfCxVmRHMKuBuNHE78PWcMJMkVjiuP5fe9p2c3BXV6TiRcDu7icc4dyKPhn9hYQLDT8sNwjZUwqTyBr4ZuQDjR",
  "key5": "4xngXMJuqmMXsMq9XPhf6RH66x1Wg5PSU3Tqc7pdqKv9doaWTEWHE9sHnp31SGu2DWhK8dXC2tHDPMUmWk75RdbS",
  "key6": "4AdYDz7DzzUaCjAUDoB537U6kLMp17Eovgk3bCWSjhGSs5TqcbzAvcWhJeaTQTXjAsDWZH8rX7ukwU5eJ5s5ze2r",
  "key7": "3N8L6egEuf9V9sm3GTv7GiDM9gEUsJmY9EbWqQsnRVYJujqS41LYqBjHPoThtdBFF6jMiqtxzVP8yxEjfgr5S87x",
  "key8": "4aM4Sw8z1JfmUjqAbFfTRNazJqFh3dqscusqyt8VgWukT7zs6BdpUkdjzgjjo96DBikCDub3362c6N14rKwKo3a9",
  "key9": "iHMPa3eJTc63sV2TwQzbWeEkRTXSm7XHh1BmUtUp1tdP5aw4Ayg4zUVT6FBktbZK4mWGxPSft2uAbKtpU3xnUvq",
  "key10": "uCGhLPmHoarCoAo8nTQA58Nv2tdGx7fE5rCdyn74d9azDuuxSzY7WrEsvU3ZpPcTd51EGmyYT1B3nEYr1ZAMAw8",
  "key11": "27trCQvTM56Q6eVbc3pEgpijgW4AC8yQqtR9nT7DMXf87CDvLgq5KAcy3cxCtTgUsjDBm3Esh9WZGh5hK9yhF3ot",
  "key12": "48tT75Nd1W7xFaPFtcc5zfJjC3CDwYzi7E6tj3UADyYS5RcrZcUQNhAN1v4QYKXALqVTawqbZG9KNHKdZrQW4oj3",
  "key13": "35XxNSY6aQgzViuWxttpXcdBaMrLCMsAzFcHQ456SMtuuhVcDTuzYpoN94ye9zbQo8mys7iEWc8F3SEd5DSGnpPb",
  "key14": "4QPRPjFcAfwExYbZRd1P7DE4zEHcDxJ82mqQ1yMojXCndqECt1uVwmm314jd4Tx4mtRX1fUF64AvpU1EPP6ntFXp",
  "key15": "4RpYe1nu2ZXCkjQrPoQEGyg2waaE8upPEtyoe3c2LBranX8qwENipxTfVYMWWjRwHgrzFLqudXPiR5XuHHLU9GFX",
  "key16": "5VkKmQwVwp4Cfu2f7qAUPBvLMRTHshpxv44vBKZU8rPSQa8FRhG3TdTnh57ssRayYoFP9tgu92THpJcVqZ459Rih",
  "key17": "3oFPbTBfApfihqrVYKQNzQ7Fgf4oQzCRYxyCEqnv7zzSc585nj4bty1wEc3M4pAAkXo8f5kqKUo3Ub7PADzqRN1B",
  "key18": "QGGnTgupCfDTkcnZSeKUM7cotFjsDYUXLiDjMxvETuAGDThJJKhY3B9BmuR4ucvnYX7RByZd7NJzcpK4MT9pkFy",
  "key19": "4dcMWD6cvHxEeDgLnb5JrwnKY8D56YjobReW4idfvDRQwjwBScYMM8Gf22RFfBzrQhmPbArV9HRvowZNRTpQMTB4",
  "key20": "3abwm9oqGve4cr5BnZBMiihKiGaJJ15eDRQyuz6TXuNuo2NY5kVjx4aVHdT5KdMXnKQKLeL8cYdkJN7XniwMCRF2",
  "key21": "2emNga41MdrJN4u2JQUDSP3F8TqV7EKn2mDKQS3hbmTbS8nQHmxFswkmkrJzcqiJSGEb1qKnePedLRgyrTMVWgU4",
  "key22": "56tH6Eud8VDfV354K8KpMhmNrLbmUCurVc2FX9wgDwZBmJSxnEv2J6cunPmUYJKqBR8QXTfyz5vm1nnVjhNbPJMS",
  "key23": "3HTtYxivCJcAgSaNoMPjt4Xsxf3HAwvsYFQ8t6WJ8ypj8eJuUMgF5wLcvT5QXzkzLPJUgzfv64bX1YuTDSpb7ur9",
  "key24": "p9pnvfn4NBtq2RvpCDhW5yaEiuH5HVbe9UPigFy3Un34op785dSbKzJJMw5EsCbRYL3VkYYWbGMWqHSoxeqZhwK",
  "key25": "2WgdyH11Accp1dWHKNRwF28URVPHjAp51PbkAFr5eF2jJu4VyucSYbAnHND7QpP16v7rnmA2Tu3AQr43mNoa7zee",
  "key26": "49Bk44TQvAiDdL8tHx1PHrjRMMv5mpXUBkh1PmAY5y7UK56GJYxvQC4sVX33vB79bh8G7NgZko5S7VyAYXWGxgk8",
  "key27": "3BX3NDwxi7FBjNHkK65xWJ2zAMCWgFxnhxSGVwNBVPQcpuz9Wj7LXbvpiiDN7UbJwENcvS8ZbBc9s8WQah7awFUj",
  "key28": "25MFugJKMY3DyLD4wB4zfJaFeLH8R14aZnCNNK2rBdUJ5yNvCfTDp79QehaYKzyPcydmZJZ6hPkDQbeWGRHftAtU",
  "key29": "5bSocfrW2A16DLvdZVjdC7L8gi4irXMaSeqVht2ruFPfJzRsyXXBvyHkVXxait74E9cetVTRFwy53S8gcg8qo9zq",
  "key30": "5XmZfDUCx4JdrjvdKFt6MDEMgJ4Yxwme95itd4A3FK6CNWwyLmiFz7GSchv8HUc5UTUiAzDdBNFAvTEe1kCxCfLf",
  "key31": "V5EhhnHzsm2u423tumNUj3Tmdw55n3L9ZHMYzU2mK8V5MrSCVoD74ovESYKgPdimrta2NCUSq2og4bubPJP5ZEF",
  "key32": "TDvdJ9355QTrmiDw7eK9ac7akRodkjcvGaNgCEPDkp7SabVyExzaXCcc2knYJHiYKmWJFX1NGPr4X9j8fT8e8c2",
  "key33": "3ojmFxRv6dHPQLQwRsbuzuZ9pv9twnet1fN7Zcj6geCRUzDqjSDfHUpWSbAs5Dm4CPC16K6W7edcYGKAswFDi9tP",
  "key34": "4UneotypiFwnpwPrq4WYLXVuHr31enHhBXUPHBMUzbYejwa9HNsG9BRsky8UzkJG3MdCh1F4xj6xTeMukjxPgyoZ",
  "key35": "rG9F1kYfCCQtkwA5Lo1hRoqYw6sZgVSJ66xYdEW7DbcU35j7QfKR9NCvDCo8RGyLTgR8QzANxDz6BvJNfKpN7bM",
  "key36": "4yegYZxJHFjwFButNwawfzGF6uihCjEdVkM5K56X3p5ZvABs22jruyVvNpvyjP8uJqBSZJHHRpyM5mzCD4TCx8VR",
  "key37": "B5AzpAGfU1Bi5D8YDthX76w3wZHQToxMYAiLtE6VFvvJLCef8xyQHuQMb1nPsQ8bQ6JdCJ5mN8vLgyurzNdFgAN",
  "key38": "2mgoxomcEhT2VYeAyeBnuf3iwes55c2AoUZRtfYqjVo5UkiFXMf5weLcWjoM4be7E7dHMcoouviodSKknyDUuV2F",
  "key39": "42GU2HeQqMwCr8cSzqYLTjEP9ytfUzdtTz6p7xDv5mcY2xBRNkoUQtSN4u41mCRLe8Hn9WQFCW5xQ8qDJdhXmc3C",
  "key40": "5SeEqnWVdM5K2Qx56mMixy2kEP5m7NpEZAazAhuMtTny83Gqjq3B6x1GZcbyjzXHwf95ALevx7TRCtDMtaeyN2Ym"
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

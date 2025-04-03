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
    "53ND88mRp5YwNXm1kR4ocMpKpJQoF4kzz4WHCjSxVSC5YBA5pWWbJNEAaqzCuymLiimWVsZLXmpjrMirtJbkmqM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UDM8q4kyeTTTvabJeRMCnzSWa17rnJRbegz487XKQXgK3vjaGv5LDDRd8tU6SpWGCxjW2vtHtKP4pZpMyfb2s2",
  "key1": "DdFPjLNgu8eQszL77H7kGmwqk2XrvzUeZamsAdygiysHWeJwfBABzcYpj3qJbGdFhDnWBLiz9UEV2UMM9iUYfES",
  "key2": "2YF3BfzRdFKjyt5hgq98wGJHbbVSy2TMDw2aBQnFTUqXn3sjybCMd5BjPXaAURKhhUD9pALga9CvPocFD9eq1gGy",
  "key3": "3m9hsdeUvYvgGXgmkp2PM76MqQg3Nkz873saW7eQaZoXk3P83RMhgwaLSGJpLYUKqhc3U3DzSmyKL4xF16ABo4mx",
  "key4": "4PgzrqpGLCFVLwJpEzcm9FSA9pUAdhzYPNMoj8WuejrgHn16BUrcib4JAWGjTeUeB2GUCbZzszonpp2Dgph4ZWeY",
  "key5": "4i78pugQWPydLBuu5f261XCYRsmshBzYjt4VjtMUh983eYCDaHoNZccAvbYxrj563MqNJBqfypNunM8sRUWobtfE",
  "key6": "3vsNzNr998yx2KPAGs5QmwWxvA9mscz9bzLMrvFX17K3NVmKXNLmuGPt4kq2B8xpJfs7MfUrUHeKz2SrsJZBoG82",
  "key7": "5CNbZpu7vXpD4NJpeBaxnTxowrFMvkLfx4twSHFz124AHRArqLDwxtKvh9Dum3VFdJCDRpPC6NDNZF2nC4JKUHD2",
  "key8": "2JNRDnAXStLqUvHQoGNVmNv9nhG8kpMgs9fBHykguXGrMsxURMmAkmLvZ15sVRePNv44kMoKW3rp9rVWEngjAua3",
  "key9": "5Ee1HW4Ddq35rBeLoTAFpR1NyoptnEQcK9RTzFMrdgWNUXVwoW5VNCofh6x8HFneeE5TRiQneh2Pp49giWYXjA2a",
  "key10": "4z1aTRu4fGdeVeVbD7qKzyzpUCbeGHuehYN2n9yWLefK7YHFxCX9oS5yvfjNeiqipySt926XU91Ym1cCUj1FEQfS",
  "key11": "4MYVDNv3DfPL8KpWhfxRSYQcNeSbw1HPEfWNKWG1LJpVwURvf9BEhSSTvqzRAprabcwdqvBXd5j2Y1GQ3C42jmka",
  "key12": "2LzJP264frG1ejwkJ8kgkgrTg5rvVk3qwvQxM8zUe576zLCcyQ7nJVEJCvAXMaU3iNzx34nZ53hWdj73pPY79Zs4",
  "key13": "445nkV4edPRtKn46iiUz96UBRf5jzTPF4nD1pcqau7uKhaAzXYaZF6oHMXNbtu5T7gPonLvW3vLhLhPrfqDLYRqQ",
  "key14": "5YfY7ELy58qb2s8MEypZWxuH358uHhwxdnvcY6ZKmkUPe6ToH1GQupr5xAyUNU7bR6ckmQBZM55FPp5GEtP17fs2",
  "key15": "5dmX519MquAczBuwThLL9GC5XWS6SUqbpoupcWWHhb3f6U5FLTWSyiCoH8kpAZwtiEup8cGpDN5Ko68pbuyW7x2s",
  "key16": "4VbpkuWGZU4gbzCwDw4r5uHwzZjhE4rKYtqPPYLrQuNjGYZrWj7Qt6YU1eJEvnW8aTTnTCSHc4m9X11CeVAejqp9",
  "key17": "2RZwYJhbD85gvKuiJY8Ez5s5YWf9nszso7N63PYPe9vneozehvkstAQFA8sbwN51jNzgLPtt8YtFtxYXTyaPDGhu",
  "key18": "QybjFjtNUxyWyTuDsKF6dLFAfzeUzmmKNWTsrNxC6LYohSHeQvG7ubUkr2Z2bMjVW588RkiSkz1rPuTowdBPdNb",
  "key19": "3v3wscagZvNY71D6kco4bBd2dcz1hAMFB9Ys5PURtF2T4QjRMdManfhREB5gDxVmHYuxBg4RQkEZQmAh1sNBqToe",
  "key20": "VR7E5ZbwAAVc3t81fa6K7SfM3kzuxMyH843Qv73uMgfxpkspBSxV2dHeiqfk98koSfMEGty7WCfKo6zpAHDPeZo",
  "key21": "4MUGHLg3R1e3tH5HCsYUxQqAGjHa8zWkMRL55DaU2uHPDqcE5Qb3A6qWG2ebKBcNRGuvP9A1TdQBqhgorXsDdUeW",
  "key22": "5YKTLizPGxH5eNunUbyZABYV1GeafyT1K9CMLgXPH4187AAPMbBypWg6jd2ShPQe1z8vJd4cqLVbuBnEkbykD899",
  "key23": "2rnJGZBpqpytXpvTP3o9Ck1yHD6vk2W1QGJEaKhSfobuwg1NiPyh2JnnRASMzwpRfLPBRc8TfPSdUhQMzbL1evtT",
  "key24": "gEhRsZve94nMU69wG53XW8JWGBTCR3196jNhXs67wqXBUAQFHLfGpcSFD8BVv1otB6Ri5VHBdNroBJXgRKpRHNN",
  "key25": "4L5ZFtaVMFtf2dcxXUfBuciXkzGy7D3oqmFuFLAUc6xr1MnsQhvidoLzYMVXnQPyraLF4zMu6SzrHaUqiHw47By6",
  "key26": "5uxZsRcbLeL3KRBfCnfT4xgvV7aqgrTLk4v7YBfsqZhbb6wJ1UkhhN89PcoCLmJUVMhSu38YiahY2EmxrWPAeyYL",
  "key27": "2WaTgQDuhut3EXhLtomUaMiiusbjjNH3CmQnqjXbWuGTLcQpWb2Ku5Bdg4Nve6snKdL6mtS6co3Q5wjMYeUMmTkZ",
  "key28": "vGnvvqt1QMGswfNNfy6GcwXbmb1u9p1eQG1KQ74r7bt1r3oNjXZhkFX4JbVi22siLco6V39XyVCYHkHg8FF6GFD",
  "key29": "28brrVKoaUDy8b8hwPxtjsfjBnrUPG9uowufg9gHwMkVNzffH1kGH7e85aG9LYsk8EKCGB49VMWWmY9jP9FdZ3pd",
  "key30": "3GBpCsJHt5WiZJzXUYCNioji9nkR3N1AUqGLL94HznwdjTStQ8skjvVUPZt1t18QZcY5RsdqyjcKBaU23WqMQJJ1",
  "key31": "5fDCEWnHs5ngv11XqAdKgGW61ZiyknzF9p7WUqkr3JWAYQbu5NZ3zF3ik9GXDYHKzijLkKCDydUMjC6a4fCtNUzf",
  "key32": "3uCnd9gKignoPnHDbuqGSV894aqoUEVP7BpW5xujGssikncguimk3gqFYmVAaJSkq8PSvRXxAfjsmfRwbg6SJPc2",
  "key33": "5sLbrZcjnxVcWv9wGvS5NwWEYGq6bzjVPuAPqLWNRbTMiZYFtr3ng75aEFKBR7h9k93nyaqLRLxxf54veF3CxCyo",
  "key34": "3HpBFeQ2tcwkjEpbyA3hpfqdsY4UDANaUk3dJPhdFEvbrRfkoZs8NTmfAWuz6v8RgdLV9FrmSfx2pitxCPD1qk6X",
  "key35": "5sx1SksJBX9XPdSBrLbja9u4BxUmJjFvTvNCtL7M3fPvcZBuMtySxXEBvW1LP9NH6HomzrToXTDh3E2n4f71Dd1d",
  "key36": "2tR6S9xwxzSwpXoJMiK2MDaz1aRzy4PHmLjSTG2oDBjJ1Zp1KZsYfAEGCvxjbBKVEVMxeL6WQ6b3JFKvwFqBnic9",
  "key37": "3K3AYFoQpPMra8zaZtJxfRkRk4MgYA943sxCWJES3MxG5nEAPiXaRYFQM4sp7TpGGKUQ9E5MWWgaqfLnjQEJVWbg",
  "key38": "qsmCxZ8VyKrb5DktRiYGuRiTE6AucMHr3nAcbCdY756dk5QsiPJMeffEgZgoYpozCUuH56A4rdj4qfLVDge3haJ",
  "key39": "5pWL6qf5uxEd36tWXeomrav9mBHDGbNkRV9cqtMCbTVubjX9iUWSftVuokdy5jrhi4YDEk8kf2wyp4Ca5hJDwH9g",
  "key40": "2bMsneK1CqJ68U94QvFqriA8PBjwKGRqNj3BafjUnNawTSNhpH3TpuNJXoDAeoSXfXtuHKii4FAj6A8W45m34cBd",
  "key41": "64xGTPVoYDUb8bNusattCvCLDCJVRuNeeuSSKDW3zP59LBmb91K6cJd2dovgho7VpjDY5zfwy29X6jfFk7xZkLfQ",
  "key42": "4Bu5ZvwAWa4JRP3tXUQbkHP2gGm5qh5gJuof3ugJpVtJWXBiwpowaWdTCGVJojrTAznXWrp6Zq8rVxSRuAqfhAPd",
  "key43": "4mfKYjLNwW2whVh9K5p8Cd3a9ecEcvRZZNbEHDLniRVoN9XFqLomLxFoE5hsVmToBE5bqbSW6ZtLAPeLtecN4rJG"
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

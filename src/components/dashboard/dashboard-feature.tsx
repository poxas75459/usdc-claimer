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
    "3YavGF8YEUQtryx1uYYviSBFnXfJmos1oUumqPXzwCDr6igTt59MPLxmr5KQyd9v5KFDteRYtpv8G8U78MNorpSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PXnPZd3YZkFwEHMLTgX1GBFoj7MD85wrcSpnxQsdvbvWyoUeop1nhnjQBNcWpB6cPkj2pUDuBDrkPj9ffJjNe5",
  "key1": "3FaiRTmwFeiUjbGQ4zXm5Z9xGVaAjuT7xUbeUeMC3HZDrobVvUgAyyfxKWtFrKsk4CMRL8WNU5SCZ8ec3HcpZV8B",
  "key2": "3Btos81cgtr5Yf3mYCStcXjBPEgdqTaScKWNu1K778nuy4TP8GtKpZa3EmwoZ2f9yFGzXKcXg8dgtVDxP3HKXN2N",
  "key3": "5kepBo2zpt1U4SipNCgqpFFDYgL69EaiNo1KcofSxjGJPQ3s2z3MZdwQx3UtsLaY7WEubKeraK1ZLU9w6TEH6yWe",
  "key4": "yYCefxQDyY58YVBWNS2w28nKm5TS1fRzmAvxaXLmo1bdg4QmGfYSDsFWM275u7iBLxhD47a7UTckAZK38L2qsTk",
  "key5": "3LvRMboRiz4KECKr7v7AL55TDoXV1LmikJSwCJqe4ubFACccXDQvsPUQmhnLMFwZub4M7bEBP6c4bVCbybV6zDvS",
  "key6": "4XzHd881YjQworyGekTUCdKZudojAVj2FapdtKVb5eMohLHHFtMeTxsataVsQHZoiiSFbrvvwxw5VeoCrhaWWEf9",
  "key7": "3tPR9tJYAvj2NyXyJjTk4Ytgb9XKBYkWoBq84GLB5EwzdziuH319fy9pJBDjNW3k3dqtDH17iNhDcrpeQENkrjL8",
  "key8": "45A7a29Ne7zgMDGMRyTprTU1QEuKhDZo1ve5egWp3Eg9tRkFVXtgEeUiMXjcAzTbeTpuqSJCNCW7kdCHMvVBgd6c",
  "key9": "4PcrfPxPff9LbEzoSxPKM1K9TCENXu6m8XSVsEP72t4Hxtmv2aifmdLK8aaC8XM3ixh1JiwpoFzZf6WY1mHowHuH",
  "key10": "5QwkfCE8bKRZ2WEe22FbLkzfUNR8Wy6J1YLRDMCwArR1iMTD5dRmwMv7HEwAf9gNiE5NnTZ7rKqLd18yoECWEgc5",
  "key11": "3esuV84jhK5Cdjga863LKeCqzu8NUix65MA8ULphVuvYWrNMFQmeSuxVUG7qBUEUevNcKbKDdEdogjj9a6pSuk9Z",
  "key12": "31LteTqn14NUU4eB4XWsNAia2cDSxGDDSLuXNTf2NqzwZDajqBxQUXHsVXr3aj5bM4UVP1vgRyjX8GEpSVMXgofM",
  "key13": "49PjuGyiDj1dktZvpf2ZiMLhoB7mouAPAD4ZMQqnH1sWLFqx5QuVcjHxzQbjrkjTkBuxki5WRjKiyzXsfXuzeJk9",
  "key14": "ke7v7w5M88qgHP9AQZVchKgsoX2xHSuhfzLgqVs2YuV38esyndHoQKevxJTtgPYAyDmUbtEUTGkMxNKxHNRMufU",
  "key15": "3yiueLG4k2yoM1bqEq4gH9RyLTzjXE24ikXAJA1zAM4S3aHQGGKCmT6nFibrs8iQt2hdgHJ8m9RBP6SqsS5e1AvW",
  "key16": "3FueTqBXUNw7MpJbo3ZyvdBW3ufCuWbt64vn9fzJJfMSMfGJGyvpNPsW74sxm8gZqA9GoX31can9axTcoDTk1yRN",
  "key17": "5CawghNwnkCHFkTvcnBV6r8wk5oohE4pUeQvF6McCKJq2nR1YefJe5h6xexLkvADtNHvJuiqotgiJ7pbMzb3yTyE",
  "key18": "2JPoJGtFGumsBMhJejozfeFy6ev2SgSvfJhb1SRm8j5QcRScUrv34pQqERCwtU93vKQpTcLhfSS4w9Aptx8yqCRi",
  "key19": "5Z93PGd4YQjbmJbXqJNaJNvJnJvY9MKfH7Yd5DyPWnmzNayuMF1V5pLtahhAGCDPFnWrXbHLYTTqzpJnofjsAbHV",
  "key20": "58T9KHLUndYGy3cdp9cYGsvDdkwjTYNWPvHH1k9frQjYWG2ppkLbJxAu8hwCkQAyidy5YsboJn2DBLPtPkdHYeka",
  "key21": "58M3gMt6z7S922kqq2K31LquCvBYJhnaLhqQmA4WRfT5xARrNwhzTT4SFSR81m6q5Ez5wUbFixqZKMoqj7zojQPQ",
  "key22": "4VpHToyLDa2j993M9Pgz1PBMKAbJ1qJPPzNSpQc1zZyuLuPyZYHjHh7SKYf4CU7Vr5vDbSF1nb7Sq85j3JBUUtHQ",
  "key23": "3auHaQ91mtf7PVuFT7ZpoU1jsMCzmkcwKoW9ffwwJsUthwwmWTLaiVsHMWUF7J76hE8D2pLFn39RoqMFHGPX9x5b",
  "key24": "5hUyD4mxEsHL7JC3t6ZtyDiCT17xVoxA23kHMLAEE6PzYbNkRZvpuk9WzH5cF6tHma6LHmSKtCdCX8ocQkYRmNcz",
  "key25": "4dPpgNychvtpe8a9RoxkFamvXZQn8m95EsymUBBjLxztekXx7XNEBVpG3fvFfnUTMPLzYrCB11CbvmnN162H7W8n",
  "key26": "UZigbg7AbTtZLxkcmq2aWDyehaxsDHxGZx5gkbVjBG37K15AmoDwwon3T9nynXpp5EC7rESTWTkfxDjacKXSLr1",
  "key27": "2SZRmaCEBF1YgmwNN1QmfAupAPmsbMSfYNPGa39JVRgWFdyHKPWAZPPRnFCYx9TRaoeQwgxNDFwtzwLagnkLoAQW",
  "key28": "2dMMJvWkrP3AviRpZhgkyXpDdmsUT7tHHKbZioRkc3GCjQH5gb3Jct1nePUEe6awe6SyuAdD4PrG4cPg9vJcAbtQ",
  "key29": "64jp7HzHh3Kz5PScU8wGjuYTV8ZU5cHYbTJpDfNhxABeyqAiZkbajwhpQ3ms2F8VEfjSXfNeiaakCTC7kW1sKrKT",
  "key30": "42pxbeGtk8sYXtqcL9A7g5cr9nYA3TsLBVKDCtUksbP58vB5hbL8qh7jut7HHrMrYoxCus1kEzvCfydLs3M7E8hC",
  "key31": "3G6jvUyiopsVQXvd5Hf39WUHgX5yZRuhRmoTHUkaqBM85cXhuChuzCxkydJJtvdX7bJtoqNVKfMNdEL1ntTaAvoG",
  "key32": "4wKqgRDZasJAcnLDBkEffnvpYF1VaCuC5pWEcpjB4qmoMvdo24FUHatGrygH2ZUtbYgE6EMnCx5ACr9wLnro8ChZ",
  "key33": "56tgBjbcF7hMRc18voyasSZgUyvm41zmaLGJeX7pTa2V8147RqjjFfJoToMSH8ifoXfjarc5AovJ3rNwEts6uoG6",
  "key34": "5y7x7fq58va6yHXxejNbZFUeppi1PyL2eRuHJQ5scMBRazejDM83qG4TEDG82rQ2Rr8s7fKpqNisvmnnwvZ3ug9M",
  "key35": "EyV8JH8ipsjFmCb9eDCta55Evj3qzrWUQs7Cj1HMcZe9yCUVPDXwvh3BSqF8Ec5jTpNmnP4Qa9chqbsJtd5ijeM",
  "key36": "4VJRrYz27ish5hK9FjfDubTcCkcmHwjapdXqNMuBsdpwsvRx2GP7MyLepw7nGCcwXcuaEM8zjSMFj6hw94xfqMPx",
  "key37": "57oinx8TWAW5w53VNRLV2iqYgy3d9AvVEx5BzY1U33WJnW9FBrw8NamZiviMZjyqf44LuskooG45tXbNznQj7BVL",
  "key38": "4BVuCUxAPNmefr94PQeXwUwTfDHmsBBSXeLLjm1yCGCsNpFxUMCkyKoasAQvnMN1K6VV2UB7D9pF1UKrV2TmUr4J",
  "key39": "3z4XXKQynreiWGT4xzQrCtx5zEvSNEd9PBTKX1tRHnLHD2uiwT9yQUseeZ7bErbLtQvqwXBUa3tbzyhMeGqyXqJZ",
  "key40": "5m2btnubugS77jnKrWEr5j31pTWKWyoyaqK5DEgwTSEQT738ym6Q7Kd1zPPRaX7o1G2gpwdbhYWECY59VPRjzAyn",
  "key41": "rwQkTkEqsKb3d8Kp5Nr5XTbmFbN4GAfGDpCtpUcq5kwXyWG5jfz7bvkA5uVFqY9qo4Jc4ifsMnfdhnhpSsBepBh"
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

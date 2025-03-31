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
    "4ZGmpUyEuSxVnsThKQvVGhRRNvkKaMjnnncUS7hCy81cJTTveJXsUtbLxDmygjqeDpotPb2pbQBQBkts3EHeD6UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JY3SUJQQxEDtbm8zDEqY7gH9HjVJm2YNgp1zYLeMA3d76RvqjEAUPq1oWtgXfTs6nj2vCVqR5BTz3ysT6XTNKwn",
  "key1": "fZbJ5NkjjpjjyaiVmKTBq2FDhmzqKeJApLRfuBEzXtKL8d5LRX46gLbCT4szukA7L6vyayjNSnjg7eJi8gAJW9c",
  "key2": "3xFXYqq3W3PXQczz5dhgogkQ99C3qzH4Nv6k6B21e5EgGHW7ZbU7Ez9VP2gPjuioLpGLMTFL3yg3t16k73wPYSRZ",
  "key3": "3ZJTd4vDZ3WQ7Gg6f83YUfyThJBApTmyoGaUtDCKevZzpjExDtVx8twx5cHKjE1DbFzR8pHHp48aSmAGzfA1ZEk3",
  "key4": "z4RHMvjqScVqrDVf7R7WsPYuVYXM7fP6qcag8PQMJmSff3XYR4j1TAZaSeKHk984WqeNWEPJg4oMCMFiSmo5qLj",
  "key5": "4UQBNzpvCJ5EJKUndV6fWHeT46v41ikn5MjSQ6zuWhMUmUtAY9FZHdUP1GVyqapouMCgf6Gdktj5kEgfCYgJupb5",
  "key6": "4ZiSRFMv9NTW583WrHJ4tAgnMWTuVmd79sApGPY3i671ovGLySomGErV17iVaDyeZtu2XmvddA3EDZjDraorB6Rz",
  "key7": "7yZD7QSRGbDgHrMamw9usVoChYvyf46s7fYEhFH9GWex3m5LB8rQcmeX5NpDZ46WqWyzcQTKo5LSEcjMwcwnfUW",
  "key8": "2kCYbiD8SPXJvuW35hkwvxQyZ8xvtFoxinaBcKwTpMWMU9rK7x3JT9hJDnk13dFuD8dngKPhDevPqLJLUV3SC3Xx",
  "key9": "2fiPK7drvKRBu9yd12qx29xs2YeAWnhEG7K7u4A473tFUJVhVz5mJk4bqPgpFU5EmnExBbQmCR254T9eTwsZv2yT",
  "key10": "2tS49rcNo5jymP6gjnXumn5kxDbP3B4a19w9dL3ZgcGXPB1FeamoLYM57Kg7PoWNK3iie1zBRVVdohZQJJXCyZPo",
  "key11": "64tARffTcSBbQKs8Z7VQSCSsPVV7wQmBigpaf4p5oGXwMh1hZimHrYXXYKWsjDnsUn2oGfAjJQdXXNiRzcoRu98x",
  "key12": "4VXALpHdJmcSWxKYk8dqLsHir4Dw1ojNweYz9mS6YtcLKjsSGTy9bHY5fAd5Wn8DY1z8C8JtJjtrev2Vcfz1dALb",
  "key13": "4La9Yr6YJKLAsq5soMeq11tm5VArVEg1YbK2xXHeXbefH4irVFnMVMtKymD7eGX9qkNVyEhJUncvqf4GNSsxsxso",
  "key14": "E7P59yPNczw1XQidnYJKuWfPVFAbFnh4qHpHsYFVD9AEkV8Lkm5QuW7tUw3Xf9d76jq3iUC8pneSQSuDE493Knp",
  "key15": "a3sszSCLQByphdYrKz3LRCahAJvs8XPbYRrH1KGsQmpRAqg2caJvPigR36sdoVzGppDNxVawg5P59xkYPQwxxG2",
  "key16": "2yDkcyF6NKsFwJ79J1zJeYxsBmcPTEE5d3Rj4iyPmyT6qP1L7b1t8FeYMyZ4YkHBgGdo9a4BRe3SGBqeycTFK99X",
  "key17": "5hJLNBuf35yEMi9p9NknBBozCpUEcnSAiPmQSaXgNk4LBzvXWsYaS2ZqM9K7v2jttDoo512GwPcW8214SswjiAnh",
  "key18": "2TBL5BWn94D25ijGXVUbEhY1nNu8yRKbno8FtHf8CP4QYyscnBNzcN1tDSGcinbmbx5djeJ2ikj6DLbWWkaS1e3j",
  "key19": "5485vt6QL9mVnQdhVdfdJ2WfMg4tNvp1bzTEFo2HhvQoV4Ao66eT4owHmgdyD4BaybLAxXC7avPfeZ5Md8dipRiW",
  "key20": "4MbMPFyRAHRpo7CgbysbanrPcnEHMctHkba1syVGqA7TweMR5YnaN1h2Cc4PD7TFJB8YLvHUc6dKih6CuuasHugL",
  "key21": "3eH7nTt34aZrdNKXP9RZgK4LQev3iuWE6vfGUfnxFMTZuWsAyXwXnbAHQrS1XFJQ5FjqrZThXWS3xShGdWQEUpwN",
  "key22": "4KVmqkVfzDR1JDcyGTxZcPfpA3K6VweEasVbPFGVCuMgdjrQvbYnD4UQJit2GteqruqLGm9qqqfHi8QU2zQs8abR",
  "key23": "wgAgGkTo2cuVYPcwTJXNnRRGDYWmM6VjBqe65Ef7mtCTfyWv3Q7j8iLH2H5vpUzcccFuKaeyRvCH7veVPHeXzW7",
  "key24": "4xkbkqG3f1xV8VnnyCcRcaJRVFjn8quZMjscoTyKSbH4yQ6Dz8VP6k69sFStha3tbfEYbGTN6bMBXj2X7RGvP6pp",
  "key25": "26dLWzgscCYHpiYcq8sKWeqqF8TUZdMpd11NN9hat2upeL8CTiZhmc3koVmimfCoA8aLoZncLo9aMmJZFKXu4VqF",
  "key26": "HMRh5Kw3XCY81cCWxHFYtQaafMrkVobDBGAGQR9Pv6sAHMv3daF37pDsEdkMMTZ4Bm45cMjmiKADPqmDWCfr1uV",
  "key27": "KT7LmLRT58fLpQGPhJnC8N3cLoukTC4EkSss7f4QvghbasY2zDSctZCncmkBp3WQUbft6ydFmoqqf1zQd89DR3y",
  "key28": "4pHm3DkBLrBdqLGMwG79AC7o7o4Hmnocz5hitQNxjFEifkvtFs8rXL8zJ3u7hWrNKNU8w8Tdr19RTfYYjvHJq6DL",
  "key29": "3aCwsbs1EYTTa8Q1u2UiHGbvaoGHZk86iSmMyJzMSmtnVkxg1DrUt5WvaGXUZWhvNzDDKZZFKBqW2r5UubwqzUqE",
  "key30": "5t6PQf6BwwCUd1yczEoVrk7vuq6M44N9ohnc9hwtoph6baaFpqBr6x2cRxdu8Wkrz1cAzGy4eub9sw13jUTeehHN",
  "key31": "5ozkpUacZFvM4WeKM1x1DgdAbxXTf5tjNRdKMiW8kehmbzeJXVEgUzSBZhZ1fAJszCt5FGkYQpBYTNfPGNCYyHbr",
  "key32": "3kdN4JH9EFBUsUN1f9XQx5KaFH2bGV8pF55nZN3HHXA9HK5TUb617GB2o3B5fEBB41rMgENt4pt1Y3K7HMtL3TQy",
  "key33": "4G1P6BJm8ZVFfe8mY7tKmVcWLbqDRCszmYLV5amsLf4EQXYyCbLEe9ZSVjp3oiTaoxnKjUbpgjekhoHThNJ93eDd",
  "key34": "3rnapE4z2mGjTob2A9eYQNwiu7iA9HE19GXbvW7xLahNbYdJu3358QCLL9jkzmTXfQJMFBLUFMdDEiS8PUvnvLKY",
  "key35": "AUc8H2mgpUAGWxhxnpgdXzoKboY9LPeAk1Q9beacRyU2kn6sojzCSPfLYd366TseyVfAEThQdhwZFRsUK1kx3x1",
  "key36": "3omuVJ2eJMi98DnJyATJysf76gmBjc8BW2cEo6AjhGriEvvYiSo69G1FNdrK7fvanrLietRM861ndrgvJWgz1rBn",
  "key37": "2LfiALj5R9mtnRyCprBUQHf6h6DiBxyjgyge5PGhVibpDkNAYpQUoFdoMNSKD6X5pCwJgBMmrjgau63bPp3fAw8E",
  "key38": "5ZFjByQdz599s4ZzY9mYNsuQu9m6qpHE7hzLnAen3AEPMjM9cHxzjKCjrS1AvKCCTZ8pkCrxxN5eexicJhfSAnjL",
  "key39": "3uDzawFq96XFpD689ENZVVnJFNBrJsfR2NqNppBdrVH1n7bc3vTYjewFNF5kR9xD933L2KKwAKZMHNZC52Tbk5g3",
  "key40": "4RZ2sohcph9GzaH5a14Kq883hMSBmgfFsHBL9CQ5gFfakUKP2LGoGSXuqCDvsdZjTvjshfRiVuPiWVKyUAsZ7NzB",
  "key41": "51KKAsJsDYHAJVwSwKrMpWnh81MtnM7J5dhQdFrcSm7KmAm7hTZmFjNnWDiDaDtxphMeXWJqXYXFiCTCmCA261Uh",
  "key42": "GR3wVcVz7Au36MMoFtJVdMGQta3ehGtimMVN71kWDqdXT7aDZGz5fvM1ezDSGfHf7vAs8sXcSQfNLJUTqRC2vMY",
  "key43": "4WZDKP3Ca5sRdLqt423T1GAWSmL6QwbARYedv18ARAL45G5Un5wpa9iivkjamR7YJq7gr2u68nxvY2cHZEcbrjGU",
  "key44": "2dH6HHFUuAPgvFnvhK23cav858jhd8QSDn28G758yBmhE1wB9dWkeLThaj9rDaAtRbUmJLK85tyxqE6oP93BtT9K",
  "key45": "yAVRGeLeYw3jbDoQQvaYtx28WHAVLTPQ2fXVvv16jVzzzEtf7wQtuuywmtrummxJ3ADj2oYEJKHFUH1gzjJyfie",
  "key46": "3HgFF2JWoJxztW9XEnZiU6bDHDLogpTd9SDfJnURBweMdX2MYsnjrxTdgP1ztZq9AYNbfVFoLE24wM1xNxiqKY2p",
  "key47": "4BCLEesn6p29EiipS69iK9p29U21gVsMxYmhC8saUdCo2r4YxrRVn9nf5eXarWkjj3dVps5bde5TUmmPMASW2R6z",
  "key48": "3284hQMkupnzGWu7tHuHnMyTDG8jhgQb3uK6WVf5pUf7yXr5QvkkMb7V48W4D2nQHNVtRLY4YMcu8MgSMjKr5Tvd"
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

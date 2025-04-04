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
    "2ZPZhvPj8R7gK1iLsigbhaWggFw5W1fo8i7QTti5CjHsC8TJJS9K6xtHJFnihu1C7ssAa9p2jDdh6miiki4adzmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVTkQ3j6qicaxKBFidJey7YLP38V7nAfNDnkVYxCCejioSbHfVCnojHYjHjx5BwvFrDA9xycLMEHGxtLCWoXs7n",
  "key1": "3tZsmye5mtuJBeicQ4xrjQkwjQfJPq4dJrNKhAXVL8dkYRRbb2gPzu61ovDAVnBpsAd6rFjFRafkeDNn5UowH6Fi",
  "key2": "2xqBzQG9j6GguXdCiSLkYKb4wmcPpLZrsprerZyc7k971VcDgSiqXPmDsHdX5E21jm3638eNg2c6SfGetg9ujPnL",
  "key3": "5Y6twVtCFyVvAp2oqMb6th3RkN7ZV31QoQ8CwoYWmddNRn2h78qeHMoXPQYfsbEuLzZBb8uw6EKdqpZRtAbXtStJ",
  "key4": "4jziS5q4HRg3tcpXYgjfk6rpQuqZiqhGj7YjyoTJfe7Reas9fZnXLgzwoip2wLaCropzmTaedQEJXZqcXf2rBhyu",
  "key5": "4Yp9HaXgMD6nZE6jtsU4PQGC5rrw8Q3WAFev7wiQcsHJvJPVvhXuVyXKvfwrcGjw1av2cMnwxCKeHk7uEujWUZjQ",
  "key6": "5aoqtgnMpBaGvv5oxjnFHeM7HnZwQNNr8c3mFiAGyc7G68PS8cmqZxCAKHsAFBRBWVisdhmFWkQneEBC4S1UaD3G",
  "key7": "3sXAqM3xaMpHKPXYokqJADp67ayeb3W7dSDhGmZu4xZP8yBBCEfDDVgu5FpVBhLnVttSFN7cLK9fSWLW5JNcjy79",
  "key8": "HR1rXvX3wBmS6VGTUKRmVacHbrAypSQiJdmet4F93G8QnFuBbzx2VpTFXEWuFgamuGjPtq2YYC1bxpB4UbS2yz6",
  "key9": "4au6i4xB2dgQSkGujj4EXzU2uTHfnanJAUADL3hmr7A9mikSsmzTd8sQiX8rZ4r68V9w7AmfbEDhuhZn84eM6LCg",
  "key10": "5Cdr2DcqTUy7dnbQVQfF9kNpb5WYYmV7w5RohUXBw3qoGqWr7g586fb7NpVFUCJ1UkgxbTjTDJPHzPDsUp6okBdq",
  "key11": "3d2F16GF7mKGMMYNi1PW7CYrNhqCXGTakqS6UJ4VXk9ZSXd66X1txh5Pm58PmWkUxoU3f16nnTLjRKxzjem1q7PU",
  "key12": "3SZrWyotchqYvUR8YZ9REF3XSCfWxysPRNm5JXByjjtXbfMs82eBnh1zrk8vM59BJJHeT9sqdW6ZHawqF2TnzpU2",
  "key13": "49CCURCN1giNB162fN2dCTYN3LUDPzUmf4KRGT2EJpxbsw9BFia2pdg7mNLy16oTC7a9wQ17XtaEqR5V2RRoNecx",
  "key14": "5STozjRywbCSjkUwkenZ2xzhKfSuCSGiE9TScU6ye66DDFV5w69BQAcrVrVhpbobCEmyrNwT6KpoKVzAdUxS7uKD",
  "key15": "3gbxKWs6X1XGgEHXJ7Ua35c53yNcBs7Fg8X9dBX1TneA7azWXCQvMqUJivGUBtE2GtTR1udDcXtjA3h1WPn2vRM3",
  "key16": "5sfwGRheTw22PbX4YUrvDZRfWTdrTN2ChJxmuFaMaJBuUnUwwwYDhR5632pZjHHmaf9S4Ha816yjB2wJLgjfLMsS",
  "key17": "2Q5VdazYqm2oMpLZJeyjpE31NBNR9bqYAngRmonTSmYayq2nn5yTW4Y1GHNp7BCBKxrJmNcbfYgbBZJ7T55QfYjt",
  "key18": "mkCdC3ui3P9kzHMPtAUAsGY8oHZGAD2SWh9Q3ZSYRSwFPxMNg3L1JVFExRTgoaZyMFSjYVrs8UHDotdNWJ5iB8n",
  "key19": "2me7mFtBac3WCBaR24S7Sg1rKisa8Y7RivhJbGac6AiNmHehWkN6aU1o72NYPAEh7JCq9EujV5W4fm2aLbEbGu2W",
  "key20": "fb5J1n27p5mFAJuGCRVeBRmpEUvWrDXmTBLWsWrScDsExEBqDvoJqHnAVAGx9SWsiCECAam5zbTwiAKHv1e9njE",
  "key21": "ohAoByLgDxkpAUEqBTy2AieDk4rRyb1aM8mySVtrzj62DpxQCP9uytyxffs5p2pxVXWRZVHGUpJWXimn6FKUSHf",
  "key22": "5Lf4u6kHs9ny2tzzy5pPxudnqMNngASnsEe1d9wJiaG9nLFdzowMJgXVhD91QUgTeQoVoYZHJ9jP5ByonQYcyRLk",
  "key23": "4wNLZzLDpFrnKnnykw1hRG5DHgKRCLXGEpeiU9LzXWFx9teDaYHSBvdU58t5TfkZ4Dz7oFnrig4aC1HMoLkFFA8a",
  "key24": "3GQmSacQTsi9iTAhaTyh1vtuMqYraJq7DqqARSvtG18FqAvvxCHXHqvq1uVKf7octpEQpyWhApXmNz74zBGtjaDP",
  "key25": "2HK6K6mwGAYzge8qUoudbb2ypEM3SRpAdGJa9jCP5YTRPnpScEEGprMnHYT4yG98jm6ftpNgHaygKu3WsFeK1JCR",
  "key26": "567Gz6Xs4JUCFVboDBbUeFD8KtV6p6HuQCjzZN3Xzjg7k6Hhjoyx87SmaCAzfu7ZvNUh3TXm4GtntDRStzdYQjUg",
  "key27": "2V5LuydL9fbAe4UERs9tuUpVA3E9hX5P8Yw462TMSuLV2X3Q8nwvHNGsYWoXf8WuDmgLnJHnhNTRpvjuLXsxELh8",
  "key28": "5MTixV2JVhPd7z9KV2cpEVDRCFwRPqY5VhxnTDCFoZkhPWn4fexSaRitbPYm32ZASuU3UFXz12Gs5bnpgpDSSHSx",
  "key29": "3Lj7CcgWPwvAEhVvCs1jth9U41octLQX4Ro7bepUWmtkcXbQc3xsvKhrQGenFqaKKVQqP6J7m1DZr8urSV3ZSqME",
  "key30": "5AkRrjnnkZGxi8br2agfzFo2RfZEkFs6fWkbtoBKcSNzAr4sTUJUM5bWx3Dp88cTr9FAPdYCM1EVAC4VZ76GesJR",
  "key31": "38F69Hys1UVgma911HEHpWSf4nEBUsFiKLx3t4C3JwiBYVaeuqaBXa1Kr3MGEuqkUkyWMv77Db8X4ia6ubxE3tsE",
  "key32": "5MPMnqqRpJcUwfC3uniNx3LHSVjCKSYMqQAEGrNFDCVobeNTvrZiHNNRoJZTfGbNyAkkVAHcyT46vc1dRMryaVv2",
  "key33": "ysc2HuHGGs4ksViwYgM6kEmr56wN3yYrTi6Eb3ijxi21WqCU2cyLZhjovWtBAbLXG9VEv8HF5wXEssAyQ47yUXd",
  "key34": "2aw6fvED2xS2yZtAW4otzt3JeUNzdS4x2Gu6LdjHRQmE1H8iHhaWje59eFJENi5LBWSFvsSq6VbX2Gi3A3DjrjMe",
  "key35": "3bR233mZWfyk4VehbBn3iU827nwijeVhzdiu4WeSYAipmymajoWGSMbYhmFECRvWrwRFeANG98nZsmmApkb7ooKt",
  "key36": "5waKxvNgQcKQXbnc29JLhwdEFZdsQtFKUQg5mGfaYXKXibfo8arVMggsGAUx8DmBun7fBBALztyZMfSztgQTENns",
  "key37": "65JJt7GWqDiAT9LwgaPuxJ1gy17FBpNPPPv5i5PCLRgZEA2cfhctvLnJEySLUgHXbLa6oXp5YKLiScuG5uhteSvG"
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

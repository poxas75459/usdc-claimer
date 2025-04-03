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
    "FTbgkRUAYLeNbc4fJxrPRPbSyFN3E7iqeWrs5WEzQVfQNjtiLp9fUYeqoW1naFhVKaMMVdcR1KNJnrSrpr8kSf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dShVNEyy5JMSS3T3QTQPTTtSWXcQy53cX3x12uxTzDRvteepAigVacqCSFMNPgXSQ249GXHGr3K8YaV8NZZ9WT3",
  "key1": "2ETvBA17ghBbF9gKq2EdtWmn8p1gPPZiHxmtWAxQTzuu3QGoj7s2Crg2SnsXJDHJgVTFJj57KALfWdeAVNLRcpbH",
  "key2": "2NCjVuTat8foGj2iabS7FMqxBR12YeM3C5niPMubzFHaWPhDugNfThXfyw4Vqwa4ZPfcJnaoGZRY6odAN9yKJAXE",
  "key3": "2U3TitVBNq1NepK2Megc1MmXX1bnwyNkA58dBkCXarh16xbJLcgar4zBAUfNM76xNFRMN9vvyn1wsPXeo61RbeQd",
  "key4": "4ZjHz3TjgGNFCzzteTH3DLcBSrcpP3fsXjC4uug1tmPK9MTwPjXne9PfFVFuxmEdHfa6czntz1cCC5q2EHm162Y5",
  "key5": "FeSydhMuQE391XuUEN3bZ8EjfhLQjVddZghaW1E6QZgJANzFrGfmdUpMFJ8KYh6K4SMg9p2vd5BFC2ZqW2xNutL",
  "key6": "3d7KM2PbE4hofwnnpoPqBJee2RvnaDCe61BsnTSChYF7bA6d1tAnRez5PkKWXbYQ9F8nrKzGk2KjDfajZT9MzCp9",
  "key7": "U4HujtgcQCzEBNX2GLYY4TsMPB4uz4SQnrpFhpkaaxqyEfa9WftiVAnXtZ1SAsqdeiERfBgFn9HAks4kfkey6mC",
  "key8": "3pEW8kgFkkb4jAWijmSjDqA3jMfXsVAe94gA4TU5LnJyuB9dHYjp8t4RnSoedf5uCwYGa48dR1QirJs2hKH6Qh9e",
  "key9": "5CQYrefMwKZvDveXW9YmiAzTH7vB4ZifK1WDd3HvbSBcfhADh66aGEooEmVofbZRBt1qtpaj3ArVnjgGRcJ4ZHnK",
  "key10": "3QS8E7osqhNrAkKZ5jo5mPYah1ZuBUkMBJttkWbvWM93xc3MPxw2ghergKeFBRWrJyHZG1Tkwt2rkG7sb7HjeFR",
  "key11": "61imdMFLeTcxksL2b326GLCgwLLrsnbXr5G64FNGtzpxpw2CS9Rq4HFzM5J3rMV7YHykdEbVn2HHXY8dGxgbgr8K",
  "key12": "588BcRNfRR5r9VrvnJgW93cA3zpwF4SVPTxAetZjiFgnuD2PVmEYabFQ5nLwUa8uwxmNhZET9DZXB2PXSEDG2YDL",
  "key13": "3kv8vrbvdGCzEZb3UCwpUgNNe5Tj62ZVwGSmdHU8fBzcSd9WZfoTvgEx2HXzEXoA6f16mvxS6rGnKnGL73oc2U1c",
  "key14": "27JPEAyLYrJS3jRdyhxv8Jr5qxJWHYj9sZeXRqM52nzTxawoZMVQp1oVw9k9WwkNSL6RVunRLxvx9anJnoJvibtD",
  "key15": "5kUmT3QZZJmwGJGt853KwuAVUqttDTg23NNzdiUx8D4amthd4Jtfv33FG1crjRYU8S8mnuUsSwY8mUjLXUq8TLM7",
  "key16": "2CLV6NBnjAEAir37QpveSyHPqk8jY1Vri7YYbfBPeRAV2Cn2NEFSmGLFCMkEz3FisVWBHKQu22f8nwP3hGwG3iTQ",
  "key17": "4JzqUuFFfCTyUHpd3CpXQ3CBd7VrzNEMfzMZyLmYusqj13rBiYtwB7erZ4bt6McKKpGZGvw5MLo8XLwsi9axex1R",
  "key18": "5JgnfMXrghxPoHaxJLryJscxrZviiSLEL1PSbFEWQyv7VTnjUDqrYsUMSwNh3arPe4EJnwjScPypKtY64FaXCPXR",
  "key19": "yfdby1mthVUE85L5ereVjVVLHFLTHuo4dvKf7VfdGTKwLpaHTvvGCN5t1rrWM6MGA97qdZizKiENtkGTNQ3snbJ",
  "key20": "2EkkDbLs7wpQowg1JBcu144J9NY7cmD8q5FGw2eaBSoPLGUEuj6ZkE7fv6gAC1XZQ6dhhdofasEmDFnqpFKvRKDp",
  "key21": "2KzHF8HRGdDxf7dpTYhCXDjGGmCNYWnTrrUtogompKiuMQA6RZ2NUtj3yP4kvq1Xg3SP1BL7w9D6HWeUoDzbnPHX",
  "key22": "5mCxGkT3GyPhqg7v9qQnaoiHS9PtGmXSNmv5Bqr1WBCcHnC4AHb7ku2PpsRHcZrL3vojVXxRxHGQwnBQWwJ6yJUq",
  "key23": "4X3Sf1RxQnBD7uf4bFs6MMFEh793Gad4Vj2BpLdEUZQ2TmGns4B21i3CVxY6w44PhGMpFcS6ZkANw3JkGkE7BWqJ",
  "key24": "35CiCJqmk3MvNtg68XU5WFWp2h22GuyUwDRGuXXr9WDV4SziA2m449ZkwhcSWnDhanwX24GQbYxe7DLTPmw343wX",
  "key25": "2odc9LwECez64RexBiVvv8Dd1GysFDP2Mj4REm89MG3H37Jyd28eTRcXGfQ2aKneE1pomijSy4DnEqD7PCCN3ipo",
  "key26": "3Fs8F4RTJNG2sh86QcuHriR2h3oxMdHGBXEdW8oCCL7QR35tv66w3UCpowzSVZJHftkRAxmjJ1cPbUUsRqDCYsLN",
  "key27": "4QHyzidkZSim2LGA1kzeP8uP2gjr4foM2mqujNQA6afj2kUZH43anU27B26ChF1BqBbu4ipkGDiaxhpWL3qQb5xp",
  "key28": "31U2thb2eYcrQMFeaKdTEvwqjsFCXvRKAxby69BSsfeBjFmtEJPP9kEV67BjezZxnH4Tw7JRz1ViDbZcSQL6kQdy",
  "key29": "461no7gQ3TWZsAkjYGg3Br7ijfFxW6UZASzaUokXcAxJb2aosc2j6kyVwHpVXQRiXgzstWKFwwz724bqqqvsmER5",
  "key30": "2PJFsDGyaQqU4xesik9FZ8tPGadw5HRyqHJBE4z2yijdJqDJ1dsofUbxhGB2F6Kx4JE4akWn5FezB6t34Lrarna9",
  "key31": "3NQYf6GcCuffEcWWB8tYT3g1n6ewXNBoZJveBZPrrohDWhtWmJdUNh1NEAnkVeUaq2Tpsej4Kw5aVfd2NU1o2AdB",
  "key32": "3DNYHdCssqZmz5v4NHqtxiXaK9zRbnPQg8dYNzcBGuAnizXnheUtduY84ha3ygvtg37T2QSoBuqTP2Z63EkyWijy",
  "key33": "T9U1cDwpxa3HPqZ1wVBM1ZzVtaaFNfU79Fc6i7YSkEQJ8BMF6ypevEh5tYPTi12vTrSZGQqZC3Wzr13rFzYNojE",
  "key34": "4hqg1J34ExyDmCMKSp8Jh9enLPcU6FxsYMie5x6AhFN1G6QY7CS6UeDaozRjXapqNTPZBXrobbZvqwH3z6JJ253R",
  "key35": "3vKwTY2LBAhyTMAt45qFoSPer84D3TPMPeembjrVsSMR1Vk5LMsQk3ThTTVcbSrtE4YNG5UFb4GhbpKgdko8fWQq",
  "key36": "5BLD29xkQGi3Qf3H23tTtxZqiGjjeH5BvjQjnM3UxLbMKdaG4KLNzBnpCrCZsbe4H9GGN13avsyVYF67Pw15N57A"
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

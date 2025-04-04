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
    "4EbEKPyw2ut4wxdJFzZqddnnHANK6BfkjybcpKYrgapm1jtM599HsNgoovFUb4nTyCXYz1t2ibfuADv2gRwmgqoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wjo8RGb8Fgcms1T9iABM6cEphAJeLAS4ed3f9k1R55UA41HWXTw3D7E1Czp9mGZ4twPKxhuQfumeZaQE4vwEFAd",
  "key1": "TqC9TAe2rmzrGeX29NNgBNZvX6BbT3YjZjTzpHZw1d5hsTN63XiJMaBPdiN5fv4HzV4XHLJ26Nf5ZPYaB5iVcVP",
  "key2": "JPVC8nYwudC5XF3EhPZCN8NGndh2R7AtzxaqBy5JorLtsd9p98vZUEcuTCV3pUEtw6rEVc6H5eZfXUdSV2hkkTA",
  "key3": "3Hn424z6LJwkD8CFFtu5Rj27CuaA5ygG3hHFBa4GMv6aU9pVMXjy5Y7gDUw2cY8WbmWmS37PMpMyeM6ifjZNmFMF",
  "key4": "2u3ZkBBRPdz7PBpE9XafN7HnspUGfTxpTjUheM2vZHrsCpPn8iyhUPPKZ45uK4qVKAbQ4TZSJrqbzRwdEFkDckpx",
  "key5": "Njp5hAnKgcaP2prs4R5ACJMUbMqpcA8UzE3s7YFvQMcLz55bxQQoCWo9s36s8E9EK73t5ypdqEWz8tHBhoqzGCx",
  "key6": "5Eu83nt8CHhVMukqxUGbQXQ22vjBKdJhJQSD9qiW4oJqqZ3NBF5UrLNZripMEWLZKFJz4mXGAPYWTYZg4UR5qcks",
  "key7": "2FKaf4jevPVhJZEUsAiV6e2RRP7CJfVQjX1uBQTdHBcmzhYTuXmB8rstgPaUS5aUwYgJumcqTipz8qJ7ToUaAYNB",
  "key8": "2DHQRJutbCZMfLqgCToNmHnsPWMpjjySCHFxyJg8suKnci3SpcSDVVpcexV25Vx7Jnu7kazLCCLKiz6cKo9gHY7h",
  "key9": "5on31DefbG8y7wuiUfP8xvmL5BRkACi18qevWHYnnRGNy2HvPc4Wiy4XVR3ah3aMMKcDf3ETQdwhjsUyNbUwkKNg",
  "key10": "5coHbQ8Sx5u6NMC892VuXAinKxHUAF7Fa2fKEuyb5x7UvPVHeiSqywBdRYCYtKGs5wDun2VDv4hjLaAuFqC8tnTJ",
  "key11": "62Ftq23k8sjMtZPFzzh58oeptg4B3Aq1eLuLfrMkTDfLC37MqMNa3DX4aezgBnjinebXYMhU95eaaFKgBRqT1nzw",
  "key12": "5kkejAKrjN6qLLYoN7g9XZ7CXPDRHJ4HRABV1bKWN5Rn4hGekzT4nuzpi1hf127f8f1yzTaCQiakfcDKa3iiw5ES",
  "key13": "286THndTSbusJu3M2WuMpLVUcWAT17QxBhsCPq5XNudxmLUaxPbSV3LDTtJs1vEWS6AauFzszugEofru9L9nvfu4",
  "key14": "3QjrtoPe7hnRuHzu4QBmFZ22tWeVyYmB9UoRHacc3tN7kPcWVESm87hoHVtKVUhHuc6NnJ8rW1ryJ2Xn3Sfhssgy",
  "key15": "63yzytjaysjQyxDJTuUbBdziuMi2tN45i8kq5sjis9hzaQPisM16EPZRx26RwRQmikfLaNaZL4P52hHNEn4nF4kM",
  "key16": "5967o4DKgdcLC8HdY3EL9nnStw6AcqsgeE94BSnZpULKMYd3i4xFBaAMg2QY6gHFnxJCnfYoM7NiWaj3y6n6Km1X",
  "key17": "3pgAwn2EdAzxAL9rHWc5cJC3ww7rne7Y5ttAuZTbzN3N4WCMSJR6AgmRFEmBmAQL6gX7xLLkofXGEepoAWahJ57r",
  "key18": "2PZF1T4hze8ah8PfAcP31i8is9GnHNk8XGCyvesaMiLyB1kXrj2VCXCoqhkVQGgWxUWJXj9ve323hnGpcTLMqBBj",
  "key19": "3sfB5EX7xfQ7kjbjdU7RQx8Mbr2csUDF7Z2Dm1ZK8NFsmxzCGnRWMS9zUTiVbEetRFsFhUih2yHscQmEpMGWvidh",
  "key20": "5daYLcA8HfAwL1BnWG6N3siDcWhCZLxHoNzmyPtJ2jFZkNc9FTjPdr9WQDJabRsmJ5LsvbiJDAKV6uLK7H3BJmHp",
  "key21": "2DMkyEHUfhe2Ke5Z5SwGkNPGjwyVBvnp6bsB5oDXJdbFZNXL5ASQ3wbyYbphQZKqgtfuXjXPwCXChdViw47gFKDW",
  "key22": "4bLzXP8jhB7HcpGZg8ZrHxBgyu5PpB13syVBMEt87ALzutwt1H1W4YrmDWuCmGDxpEsXsGEWLU1EiJfpq9diZ74H",
  "key23": "63qiYFUjizP57aarwVqDHHNjGykDaFrPSUQcs5ssa8qtKmx3dqptX65ahPZFQGa3qBeSdkZWFWTRcDkVJw8SAZrc",
  "key24": "5ZxnhqNBjThgvZGWynk8zfW86WbWjAKXkHjciRFvHM4vYByAxuwgLrcJUzec3xPbAjnr8rUGdCeaYdGaxVU2Awjp",
  "key25": "xPhYzztDu7NDJBK7Mp4oZgk89VBtEMR9dHWKTmSDHZspQSFmkCmDek3WJdsr7scmqPTJA8HGX1jqqMoS7reJzBe",
  "key26": "5CtZjx1Eu2iGugaQYpDnTgLywJkWzyPvTZ8mQyaFtfBNnCsYzdGgoTjghvjbELXSrF3tCA7ch5nJSfjysSty3Qq",
  "key27": "2uKPhfQUSmiF1vwdDLA5jkGqrNQuBGxv7QyKXuwcNriuSktsMLkuWTTJ7Xu7ZJDZDyE7AAK48rQan3oxTXcS8APZ",
  "key28": "dPHkYfE3o6q81UcGBCXqW8eTFFrs7zvK8DDJi8boXZ5seC7zGWH6tfPLTF9Vs5WR9n5yoUiLegsKj5LAKHPJQg8",
  "key29": "3UpmaF81RFtJh2cigVBuSYf6zFGg5fKQLSfHk93Pp9a2HXyQmf2qPVzGRFAekWBh1yNFq64Y95ALD3X49u6mzXrC",
  "key30": "54RDg26RieySbdVzTYsvadUxwLW6bN7g2ByaUFAzvRy9bfAGUCx9W6eapjQCRbsn2uJ2MGNsS1RX4Kc3QgCGZajv",
  "key31": "4gdwjLWVqhU7Trxp6Xn4eseEB5ZN9zAVBxrDo1EREKWyDySMSU3uWFrTAX5iWKWBkx2HNavuiw7tHLCkL6Dmkcbw",
  "key32": "4hKHkY4HwyRnwUr2yDyFNjGoFAFFb5DqKE7SQWDA1yaJFTV4iveZNV8EmVuUPTweCPLYK9q2kjuty6EGapnUZZJ",
  "key33": "DdwRb9mCY6AXMKMFu4h58JP9fmTMgy62qnB1MyLSpdG1qYURzvv12TNP8dQEcsVyeCFChg9ikTJVh99qetAns8k",
  "key34": "YRcSeXmMPCBD14cehdeLMePB3sgo3fTMo7iNRGBGRHE9qYeYttMyCLUuPP1aR3U3dwvjnuWsKmi4kHwWaT4f2iN",
  "key35": "4a1N1P7UkeDz5b5dpjGqaBQneT7MTSZCrzaHh2mT7qPdsKqDk3rfteds5qbAkELvFfkz6QGW4JAZ6g4a254w67JZ",
  "key36": "3unDco9N1n7KNKqshY8GaEax2pNKqm9w1AqXjYqwMnE3QDvddK22uSYwgfYQt5ReGus4gK3pjXoKDEGTX3oNcThr",
  "key37": "3Dnpi5Aw62mjD7mv2zWKfxezaggqkVfRhUT8CmDEGVdcN6cdZF9aqf23fAG31qMY2XzZic3mdWziSDn8ZU4r2beg",
  "key38": "3pXhPUcAp327QkbjacAN8S8gVXppZ2V8oMgTjMniaYb43mStiNo3BDCNmrJBdqycvxanvVw7jZNv9nQdjqEYsiP3",
  "key39": "e7wGtnezYFM3HvepzFUXGUn8QSyM5jsv7JdPjQabmNm8WLnKK2aSKXpvbZVKu8AvLyoFiPupMzbAEv63atxXgvm",
  "key40": "2MtPygVTQNP1GtJeth8K9i6RCcKfHeJwvsyEn2M1kLCtF3itWkKhSGGLtd4AV2KY5v1HxVZVQ3aFB5N9Lyx6V618",
  "key41": "61A6TbJ17GvSLRqWRdQaAgBTcp5Pqw759KbTzj21B5pvJ2Udbjco7eg7oGA2fYQcNc3wX2iWh4nzQ8VimM3KjP8R",
  "key42": "5kVmt4UQc3y5fyUa97xJ2c1sFKipq6ASgTPuQPDVudfqxWFspMAghfGfSn7KAKQPSNzrkoS5wNqsH3TZLw6nfyu9",
  "key43": "k3zVRBZ55PkKfDfxU6CQ226gunFPDiTdZXPEpma6QASjdb7x9pNTcCGMscyezi5qJfoMuwF1Yqwi7ufGX4vEcQL",
  "key44": "PQjyyhNvPcRVMRVLGR7t2ZZs5Qahn5q85rR1SX8LZzGDJLyPLycTe4oGdYEtQnVJT5izLcM7J2dWBhag836CNWd",
  "key45": "heWymGagGoVCKEFmx4QansgzcE6aypT7LEhaNjm4XWVJfBFVBqrBV6h8iavupxckYLLt8vp6saJHpRSHdY4dWm7",
  "key46": "2Fk8WbtTtN9JijMctYzBSuoCbCng3isZuJkoxpmWCEVyprPQz6xnwEEfu53Q2RzNFQamLB6nSSPYvkB6jmFFzMwU",
  "key47": "67RiPoBqdoS3Ymj2LjifYxViH9ARfaQMWWwh6P24woQudTGfaTw5PrFyVzVrxnibzKAnBjch8oZBV3gtj7MwaAKd"
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

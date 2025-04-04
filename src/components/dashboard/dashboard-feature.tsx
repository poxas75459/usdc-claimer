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
    "iEstKgaN2Y8UN9DFpJLsK4TBkpmqn7hwKLW7w4XbHN3nJKZCRi7U85Kjfy2XiuncurRXxaHZ6tWRMkkjWRgSjJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sf6t7rqHYawzkU6EixqSQMFXEYqYqQywhq5Axmkjw8TMJjp34CT45Zn8e3pZCRytrT6k5TUXwiswjb7NrJidCmW",
  "key1": "4VMdVQ4WA4J7p1oqALCqM4i2Kv8LVgW4BYDrXJWKjvMF3nvpZfp47jfZ1Wbfg83yYf8iDsGnTr5YrnL8a35ApJc1",
  "key2": "Ym9X56qhkupJdzBy8QHo9kxDL5mgn8yiKihb7rkSuZkzmvGktVKE3QnbCqk5vRNerxPV5eXMsMpruv5tFwf1uod",
  "key3": "4VatX4ndzwQhjARWHmuzVSPcR7yt3rV8mDWYniyPrL1EKEnTwgTbve3GucBTizZc6hMXum3XAAdVE2qKEad3EAEU",
  "key4": "3Abwg4PaQyTAT3CxY7mDEgJHSfbr9symW9ukmPz4axYMQrqzerDRgQ61rnM2GfJv9DiHgAbXnnyFrGiEj5e9bVfu",
  "key5": "2nuJEi9XY1iuFbvB9RBgr7x3wszkKt3HJxp5LTe19VVhtsRYm8QUVkWLWLcRifW1tyqX5V3CgQAXYyepWg4vjHmb",
  "key6": "4tLtnLvMt6v19YjSwcgjxsCs1i6s1aPZJE3XhtLhugejr84gca22En1z5VpwDF16ioERRzLRgqYKaS2AGpWCdYxq",
  "key7": "Zkamh2TymvW4qoKMQ7cJJ7WpJiupcoLQdZeesDdG81RxmZbW27WkNj7ti7eWXaRoaG6XLg3LTHQNuXmbAYXVzFG",
  "key8": "5zuj5DBvy33dHEcTtmJsfYbuhxffn8kSQqpnYxfRDVGL4iVSpatbXx4a45SPhb6GHJGVjosBBPZibjXA6r4tNzA3",
  "key9": "54h8LoewPNW37UFhLax8Pkjb4xZZmLYTEwRaBo9so2vfv7fzNCo7M8yiTRvaS4Ld36euDbhqmWnTARhy1454jgKq",
  "key10": "43W47oDbvderffrUiUsUAqMBVMZ5Z2kGpCGjxLDcC5he9S2p5KY9KD3RzY851YJb1v3sqrLfreQGjGkKmkKMwkVh",
  "key11": "4yu2ShERVtfwxwBpkYTxqekDC7AAtSKk3LjwVPC8TutawJ9i9QtX4qeqbsJuFTR2i7feY6BJovBSauAEosHWTiyk",
  "key12": "5W8CNPJRryj8LykeP3dUVJDJanHnMxGzfqnk8uesG2QmuKmNCTyr8iGGaDN7A2eMw3fKSg1omEZ4khw33TXyT8wf",
  "key13": "5MPyChxTPrAJkNioSJU3GSnhWezbJpReyJmbckXSFB7oLGy9ZoMD5UPsLRNPkiMzNnAD1RJNbUCxwA5trNQJdyfW",
  "key14": "3YRPvSQcsBtKmj5kiKdfPyMkp9BYz1z45Gpj5owuUeGqzvraipVReZkVUfo9iTEM2ZmSWDseHqyxybumJXWDE8Kh",
  "key15": "5ft64i98ear7u4EuXhYK3pejHRawToYuyqiPRpcbhkSgty6XBizJp1y8yCfr33M8t3K1PrdxJWYr1s9hLwmhw3Fi",
  "key16": "5s6Ls24NENY92WctkSQsDw6eAYDVF3D5x8nV3yomBG1rsLhxRLXBtq2NGJk9CVwy2teHDb6Q1c8PTLmF4Jd6DpaX",
  "key17": "4fiXAyQyjyo2XUYUnQDKdiw1GtKnp18s4NWxYpsmNSLz4xXLCuF7fRj1tVHDSbDrBtMSkc494tNisLrRa9Z6HAVc",
  "key18": "424PCVE4EX4eFaZhdcr1NrKRfxcN2GB3vVt3RWU5FuDLKFb7SJ1pPSJRKGhtoxSWVUqLpG6bdqQixH5SCUHozU7R",
  "key19": "ExKkkAwLZSs2RpmvkHNiDzkQ6GUV9f5EmCqUo5H8JoVTnEFdCHu15cLEo21T6iTAaK1qXtYnDML8HuXpZisKh2a",
  "key20": "5vbX7fzaXNLNV467ivN8CGAZbtJL2vYr4t6aNFCX5tVf9Nfo7ohvgkrMkPrXJFZnaFuQebCqy8wu6872skS9df3z",
  "key21": "YFn5NxFvsHRcZKabyqtggRGJBPGrdfP6H1N6AmvpjqpWApJauVfj4zNGF2guNHE1DfHUpC7ST7xj2fRngv2bPVx",
  "key22": "eVVUiGWTznsHLbChytvMHq4YYdqD8JGoBtbERjKvtdvNpdRauSoUHb9iDKSYfmdeY1iC7N6m7ywouG6B14PphTW",
  "key23": "S993v7PufJYKdT8BN372bSsR4S7hrBw7WZ5Aowu2ZDKkX4BCRfqaDDf6p6v7cc4yJbFBMna39QQjQX5vxnjZkez",
  "key24": "4szYE1S5thDHmdpS8cmsPBvHE2AQDeaEwXdqMmHvC7dYh9FAvxg2fYFUyG3TKxK1MtBXDCo5DNEJPEt4W1Kygtn1",
  "key25": "4r42Sv5etntqU8QdReiUQjH5EGjrXQhu4Y4n1LUYTMQXMxHJ7TrgoPATbmPnM1yZjcoANLDcVJQdkNSMtaom3Q8m",
  "key26": "5EDmYuFxzhpZmf4NQBcNeGdWhmbWiqWHW9Z3NB1EarachrDCf4mmTYbnn6BJ8xtfXYWARnsqaZ6Aene2XFdWkVE5",
  "key27": "44MVhdTw9ptdwi4hiASDsVi941fkxuRB8wL5xsJ3jPM4oXPgH8QAyG8PzCT8JVBLLJi6QRU4vEFuKd9sbUzQNDh3",
  "key28": "5yicra2qM9Jdop4NabZip7ia16Gf53UEcDUKTiQvvdH6LgjdiDrtj5iA4d8KfK2gbBg9ChfpRdhhe6dV4CMt9RyY",
  "key29": "4RB8sKxPf1poh6PxJHHgV2SoeLBPdEMY7qpZMshgVxPWRYydv5Ke4Dsce8U2GDHs7kttxvhBDCFVifUAN7vJCZRw",
  "key30": "4wjs6DQg1ktFudF546NqchGeckzpPoSaX64nbq46rzmd2ycmfMjUbDcCrvhSKcpagJFnxQDzBpKSGHoNgyMwmSSg",
  "key31": "66jpKtMbCQ3zK4jhmkuzpL4KD4Bv9xMFBYDo1rLFRLt4XmVQRCKXGUpqfLyZpvdJ9raoHdPVofBuDZa9Mp55SsrR",
  "key32": "29TH3vGLiGeqYBqynpwUiUXYpZFD55NLfxPE4Xv2xXr6yn5sRMgaPc75FLo45nreQ9DZvGyVK7orrsPJDJTEhpSv",
  "key33": "4RWsSW7VLJRLywfVnBfwhYUUnNM5ndDLHU1zU2d7AHhPUY2MBvxt5k41K9WZn7Vvac4QJ1BeRpTxdFvZsMeru8g2",
  "key34": "2xh71VsPCi5vY2QBf3SVmyEGYdQE5Ah6S351iYyTnLPKZ2K7EarzCWik2m9SJpAoHAQKduN1ZK8PHMyajwiM6Zp6",
  "key35": "3uqFdgppBPHHNF4a6tKSYyVRHncwhnxtZwit7RnVQL8KKHvePv8FibMKVBrigAmGQNXuX9pwZ7HXYVmbne889pCw"
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

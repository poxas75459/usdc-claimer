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
    "RJUjP4M7VufGNMsfqafkraVQeFcvuiAhEzUtQhqtSq7hiEVTq3dpSAG7Vcs7o4txRRFZXsFUvxN63manyc2xTtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t1mUGgGo8mQpBMVUpuFdZsQ4LThb7gem7WDdSQ2PiZZ1X3329zZPKVADEtMssvNzSrqrLrhsgXPqX2hnF6qdDGD",
  "key1": "27XjojuGAD6MqtphbFrHZX7xAKos8zGEcgkJLmvk6rcej2nAheT8hPWLYxpWXCxHC7gYYKLpk3mqbEQgPjKKz2v6",
  "key2": "mNEeKXKx1jRUggLXtZszCsAvptNcmhxiaZWwvHk1WpREqYVfZTXcNUjcSiAyKZtJyRCFoq49TSjujGndQnQt1kn",
  "key3": "Tjk4CckCC52ufTLjiy5458eL3bF8DiZheGM7nPaH7xnjKf55oGGAHxNpLmuV12JSQM16Uu1x9NKN4Vrxj4TNSCr",
  "key4": "2LWxpyRnKz2SWFQrfX5PoxDf5yYhgQL2GsVb2LTuk2ZCMBoFiKV9qFnuKKeMFXRouQhsaNzJwsSwFcyww1m1sxNL",
  "key5": "4BrGh6UDiyB1ni3v2icMFBtMZmGg2MMAckd7dTzHzPF1sdNGvFeY1eBMawghtqAXuj84AjjAGnfTD7cRq3Z6bgKk",
  "key6": "4jiNQKGom1EeWPF5fxbs9WTjYD7gnQskGfTL9UyQjeRsU2Mwxkqmb2G5MK8Wi6nALeL6Sjta3tYQMXG3exECFLRu",
  "key7": "565edgxWy6FUX6Ryf9PpTGr6tAGV299JYRerAp5Qqpe6Y4Mgzc5nTaCC5wz4VSfWyKFMXjJc6ZEvvHWuhPEUrav8",
  "key8": "62JE7KWCVEkXsGAS8cdsxmge5pPsc8KgbTpekMiHZKSA8B8j1377GGfzRGeEujYbKbWoh7iAhTCH5rwoxUHxNRxL",
  "key9": "62zqe1WTnjT1Mh7bryKyqRz7Ei69jEKMYyExnLhZACZax5h7iTPMpWM7VN2hT7kVdnDugrTDiQ41EqyM8xeZvXKt",
  "key10": "6rgFD3y8KJWD7y8mMQz33PdMmfKR1o6vidxXA8T58z4GBCWjnDsUshenZxoYBGB5HGD3uefberLg18eHSML22mV",
  "key11": "4saR3WZKKYNJdYQNxV7shpcJsuJ5gST5j5HDu8oCMgNw8amocky9nBqxaKNFY3UDyS24twLjQTguEdMwuTkfj1Be",
  "key12": "5LFevoiLrEcekhWpTgh92dN5BBNPAft7A8JMpXfahCZT9VG3UwmaxVMswqp1uZNSByWX2bB8Daa7J73TRTcmkAbz",
  "key13": "481s6ysMz8cyXdzdiKXyPeMdgDPjfx1PZ1akfougfrDgkAbrLjB3naWUwwM3km74VabXjp5CbUai1vB7tVNsMGzH",
  "key14": "3Rm1NMPSMXBcJwizDGGCREvoAp1JycfShRn5dHC8K9MnoXD4MmBvyq81ZviUtiAPaL7pe6tLR8RoMwvsYSjrhTEy",
  "key15": "3kh5HPFb1aVoLPz2RcMN3ZcpXBnQWYEAL7nGGtnGNLwsEHEd8PFNPDDesiMJemvW8n58AvCxNY1srbiDuNZcr2yj",
  "key16": "37cfUme3HNXmYLfWRSaPq77uysF9nMDDjdzHsPzfnDmEYSBBgZ4jc1Ra4Ra66tFYcbyUbjUTBkz8ucMcjVbkHhQe",
  "key17": "2WY4Fu7ZknCNUbZ9DmGDneDnLeooQxGCpoPRYjddfFcyUhrw9KrYy7cEw5GZy524Mx699pSVBDZKn6WjnoKTMhr4",
  "key18": "b1mMsxcgJuJ9jkU7xjCN4TGjkFuuM5dWv7Z64CMp1RcGoZhYPaG4nqRGYDPhL6cNDR1Hrqv44Wa6oXmumDgdp2Z",
  "key19": "5wUVB6XbrEw3BZm1ks4nR4x2xmhEvmaA4onMwFwM15CqEaqjsiH1GBrTjjkxQxah9tUEjjR5dJrchuvzbvmLgy9F",
  "key20": "47mZQvYQfEUdgrv7Gor74Y4gNxwiS3DNmD28J1zqicM7TidixP2yVz7oobAjCanKRKaJBzhLXw8emnA982rBgP4h",
  "key21": "4oQscYTwRrzayk5zrPGzofF9iiCh7RQids2U23KVaSWEP6BQ91vpsBZ8SqL5oL17fwcXhJ98Z7mAiY7di9cNW3zc",
  "key22": "3LtbzDEPf2NDRVEcB1UY9FidLEJzGyQfA9THNnymky1KHqNbB3VFeHwyDCx7SYLMn9SKUE59ydMKr9cYPtTV8bNK",
  "key23": "483cLhJqFo1bTBPQgn8pQhs9EMrBW5tJKNnnG819xJBg7NQiRCKypnFpZ7PYQPRhj3qDR3juTp77VoJgtbkXo7Th",
  "key24": "4b6kCD7GFsaY83SD3oRD2C1dZyPCJhcGuFVC3jdDMzMpoWSRzB6baUbYZQS1oXQEbhjHc1oumw8zN2adRM1KgazV",
  "key25": "4iAvt7GVm9vcNsVRVdBBZ4xBuzMZCCzoXPJujmFze9BeHdaQ56oTtGAVfbo5FpgLo7twWcvJ5qsLNokEMrjSASJa",
  "key26": "5HxDLyGeH753uCjRhDrcSf2sqD7B1jzR6kXUUqoHACiPJm1gAMgW5zyMCWNKP6RebXrW3fMWjZpks1D8QgibJB5S",
  "key27": "JTTZqBdThirvPR3qsBXs2m8hvw9C2tGuCTzNKaf5QZvDzRXiLAdGwZwkmkZH1gwGPnGaa8RX53CfD3vAQZ8iWgK",
  "key28": "64LFjUgtXTcCsQ9uBSpLLcfHZPtDJck47kQCxvHuvxQZxKVVqqidyRVSYgmwd1afxeM7ZZKeavBvbQRGsGWKpKW1",
  "key29": "G3wa7VFLYae6oKga6XFn2MTmhJKoxELHbyt3mCfu14q9MGpGG2gxYtMb5cejUH3XfbiP7Zgq1EVXtjC2ztFKSi4",
  "key30": "3eVELMABN8CNv74ufANgThtERxWYuvQqoFzJDguKhSFn4qfxyCaFFMmjxiiV2NtxWRyGQkrRzCTzmJE92zWmbZFU",
  "key31": "7Yc9AFRn5Fvzeog6j5w8cEQ9776bQerjecHyv5gQ1vyBu6dWa8S4yzWZz5jSat14mtkBd8Epho1kitoXzHx8h2Y",
  "key32": "2XD6qqm2M3CV6rmmsEAPzfCKgoJGzdYbLD35Kjt7rwpKMk2ui3bXq33xu7VEE2NaFYcJPHWkHq9i2LmriGFRYa8c",
  "key33": "3Gy7VdBJ7A867aAucQ5JGfZA6GgVgdnCeM3h929kPBgLX6fgTFYDiS8nLSN1RerAQUXn7JywybvUeHswwjq3RvgG",
  "key34": "xAo5PHRszSRfYQgSsQCRJMxesyY65EXC8oN4JHmmziXdDBVPEPQkcBxqGPwp9xsQvtStCFKzCAHHK9J4R53BtPu",
  "key35": "tZAkKCXCqmdfeSZQfcu5htNhd9WDAaPmuutaqq9xopGFHZBLTjcP1mvDpCxcXAZaGbZRHjF4kB1DcnQNs9pgHaD",
  "key36": "2x4DbaXZbFmXeyVQ5qxZtseVCKghZjGSGa8E7jYscRGkSKqLko27FHZgNRvdtUDaEvkFTki6sxtwRgLFd3J6xss9",
  "key37": "s3zqhZjdMCnSXT4gcSEeCwH7zZifHcNiBMWzZ5WS5MwkNFuWWYoTkLL5J4561fksGwAps7RVxTZs4H9JLHXAvTS",
  "key38": "4kZKdxssQteRddxFXwobM19rXQk36fu3M4n9CidnXywx58sYhZu57N9ZsA25KNjvRTMpr3EmXsPs7wEECcbiyjri",
  "key39": "EwwTGf5U21KDhc1XwkjRZiK9Tj4qbEhdEst5Zmm1RDFWk2eX2VT7T5ftyz5aRdQpVGYxASK3DNyfX5hy3dzfihW",
  "key40": "54xzCV44SqgjJabJbPyeAZEpZYD6ygtzSvy4vDvHV48eqa7src3X2j2nsrsvoRunkppBHP71fndBkvgZpr7m1722",
  "key41": "3zRqzJRrrDEFeHH2kUJGNBRvx92t7tSnuSuhh7kMPQRPum7dRf9TB5nK7Ek7py1jCeZYeDsBkR9wv3owiJMZbKww",
  "key42": "4hCxNXTNGREWJ3kCuikegLf7MGykJqmNKbaRC3Mb38FvNXoc1TiEk9ch7vDpVxfq1s8WujJwRpgpJmbv5m7RRRF7",
  "key43": "4Eri7Shfc87uVhos44BPpSt1iB8D88G9y9CeMdFFxYBLm7sWc5bu2rN5Bo4NP2WAFYPiSLNmTPTdk5AhPTaMVgCb",
  "key44": "3uTwNrpw2S86tpLbv6Gk8FR9pByNQ9dG36uMf5Qog2GntuZE3aS2G6eirqEq3frk38utCY7kh8wSyY3sK1tT4KvK",
  "key45": "2ar9YB4kHQXA7UM4B654t6498YPd4af1TxoBj9ZXBv8fqrvrhRxvtBs9P3KnRdobXeoRyVp1P9MASzNMbWSoW6qp",
  "key46": "5aEMQt5zTVUq6umyuXVgpGe7WGNVPo8mvrMacFoZBJZxmJj6NSsF9dpgeqzSbpVrpEvSFDifZqkV5C1zu958EMiS",
  "key47": "4Xs9JhhnPJYLaeqXznfoRSGZcRaWtXuXaGgKczHDukBXE8ZpRMzEXfLHNTP85j6QSDi28Z4uYg3ZzpytBWaRk7CA",
  "key48": "2z6YLd8dfGqdbcdtKzKHLuzoESsLbqn6s1YNSLEf7HzumUFsnx959YXQt3cQFqdnWNSdMN74gxYX33BFG2RyuvG7"
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

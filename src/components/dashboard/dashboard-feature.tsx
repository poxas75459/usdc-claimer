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
    "4oXCFanDdE6JC1WU3ZRtRb9yJcjzANEn9oJWYdfpQt5usyyrtvLQ61kGh8mYCM4AdGaxKm6Tpc2bHJ1ZMZFHc9HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Drotvy19kMoKyx2WCbLTfUF8FPrVgQLVw3pr1wf26ytJpbv3p81HTxeVD1mUdrPGWXeqZZSwRPMZoZBCCzn19QE",
  "key1": "4A4MEwAMJn7FCk82fWhr9DFU6BYz6M8kd1xmSUq9PaMzg3oLzrBePnSWwxWDNMfgsxdDPWq61StsoDYWxzY6nSin",
  "key2": "2Sfe2iD1PRGUgKs8hZo4c9N5ezMxrYi6DaeS6BnpSeZfbPJ2sfftGLXH8BDAjhjucEGdEkDPfWJeiaHqvu7fPvXk",
  "key3": "4aSPnSA5PAYyPSEfSjBtFLoapRWsZUVhicLY111Qmqko5PK9JbXPkgQTsSAEixhuWEZ8VneycBBLCe1Lmipu7BC7",
  "key4": "3egJ9sio6jpfcn4rQvGv5iSvzUEZEimRTQStF2fyt8AURgUPHoaZXLJUMk8gaf1UsG9xtDVYTn8CH2QnHmXRpbHB",
  "key5": "4uerbm9b8oT3y41x7B5oD9ezjk7jqxyTgav7aQxkvKUPbFdD1icStpTfNag5S5DJf5EKRqAbzcuSCpCMSvJqfF8G",
  "key6": "3HoQVBi7iHnkYbR4rKUd9Z7ohfAP7ZbvJd1LoAbhaGkxnynreiofJxXcV24NMM91bLhNeYQBu7GzobypNFUSfMLf",
  "key7": "2ZKVbwWugEZwMcLxjgMdENT87cgukzDh4mtL62xfvbuQhFakLVRG5KN52MtK1iGB3nDyGPDje3kQHqYJ15gLH3wc",
  "key8": "4srWPJWtE4N75FSifpe5hnbffEB68w3SsPKEkHd6MVPL3v3U2dTfZR4XJ7hNx1i4A7MkrUvtPtFE7yNgymbAFavu",
  "key9": "57YFpNFneXaBN2GKC4VgUrXbjU9jQ8aGGF2k8GNxnKgJUMGqdSqv5kv2obKtVerWP2CkaTXphUAREWCB4vYFau9z",
  "key10": "5MjTxqryLoCgsvpybZPd7rB13Wbs6FqftnDjz8NCyMrAJDNswtzLDc33bmYhkhQoVwqJwECE4s1Hr1UgbpMbDHzX",
  "key11": "4t4kCDysjq45RBHc6UXwhqJSDK9jPBUabLensJcWz2MtLLsnXUoxyjGFiR1mWCebCzwdaPa3sKHcbFBYPqr6P3Mk",
  "key12": "8qHiKK8a8AxemE38KoHJBewRgo9vw2r1qPep98izbXyfRCANicVJ34KrW64oQrNrRzrEaAw4SKs8AKoohqKiVi2",
  "key13": "5sQ5ntKpteQzBGDzS7gyqA33TCMS2ZrpsFuSS4cVEjaXL8ZQ8YkxSrGaXb8DiarX69z8hRPisgN9r42hRavW7Yvb",
  "key14": "4hAkCirwt5wHmViCch5DsM1xA8edtgVaopXj6U4L9QMLe7NXrqBsMrFHTjm4g2dHiVWmpy5qYso64PQ7oMgexceP",
  "key15": "3t4LoWafoScqyvLB6opbkvQ5uhjd23r5qzapKDtYVLsudcZxj3nmFw4iqRdq4mJ8V5Mp4aRi75cGzSPfTJtHnDwq",
  "key16": "3EBjCUoLfcNSr4gkdxYWVQTecqbNh6qsuDBWQU7zPCiyBgAurCyeFMFdnRyHY1WzojXW5wp1gP93ddUxmF3Z4cdi",
  "key17": "319r9BwLFt3Jc1WQDvQ8ocwhKM29xiBtHkqUYu8ia1KuuVjJ2FKpgrt1e7DdwtxRyiQBHw9X3zuDVe84UgcYkAPc",
  "key18": "J844gLgu4NnsDJ5x1vGnFq7J1WhPGRuyyTd5eq1qfd6HhxmhKNwiCW39QHVeAdzXx3N7wtqdDCg7VLj253FuwGp",
  "key19": "4jiZCXgaqtfqHD3ZXCLvS86a3TzmayBeRhK7sP6h9oWiHP58xX7jEUdgKRuPFvR4NebN8tz6JZwWKWEHaeH9mtFk",
  "key20": "6RoMdc8uMLJY3qnrpgf29AYUjxeyAG4Y7rauzjH3Fjtw1xp6fqPinEN6qCz2jj2911vSAFoiC65nxysXuYh8t3u",
  "key21": "45Z9oDvG4xtd9dzkJMCWa4FoGjqe7fBNmTLqBfAxqrfGJKasLkxSDSG3GRUuC4yvDiCK7FbGaKWVeetDwY8zWukA",
  "key22": "3Pfhh6Utmjyz63ipd7HPoXkszkgucX3y8cvfu73dkd4fk7bDeeEuNZyNKByZb4bhmtwfA81aRUs5HrnFuvq3k3dk",
  "key23": "4z7budXB3QxXyRJAeupmgFuBURkf2P3NG5cnXDZqK7osgTYsWdLGSeQL6i6PWCQZ6AK23FcF2P4RDxuzLFvLybtb",
  "key24": "3vpLyoaGbaKQaFF9j6JqnnzUATDMvS1a9VNTVQUufqE68WHWY2XrJWMmXUwtQSE2Q5Q5MkJNX5nAtom1sVdkaYKf",
  "key25": "5EUobFrH8FBtUrEq6XnoygN3AJ7FzGt77neELMr6GzoFL3gcf6sFRMqSLzgpLoNHK5XZw3Lgq2mBpPB3hSNB8Zn8",
  "key26": "3ZVpSFqjoQSThyRtfzFsDqXS9XRLEUYDtMz5s8KEC9ur83TnrqPKojc4b17MENVvqq4YDvHuoqwikcoxLPBXk4iF",
  "key27": "61eaHBP1KtKiJownrci2eAni3AMBJRukVienTesJnVMfboQiNmA63MiMr2o6TPr35c5pfvs1C8x2MFafohJ8xXki",
  "key28": "5oVvbCyREisdMx5xRDM3t8io8pcvkCDeauXPV7bmmgwNodPtwrCzVFecLkgRjexzZJzUTZtjRKy2zRQt1ux3S1jw",
  "key29": "bjDxd5MST4A5hyUVo3u5vtS7ownMjxtnmFLNej4JLGfrkMGFM6x9RTaHbpmMAoySWR8ZDHo7w6FTni7LYCDHkGp",
  "key30": "5QJbgdCV7wYDL2KqB8GviszrCV3F9zmg5dzW9xvTVvrDjnEAcWUWqB3YF1ATLzcZFjZdsRk9RdWQF18Q6orpXQLa",
  "key31": "zwnnDyHJqWbN6nWgmBkU5sBaexVriiTUUvJksABQxrjVRTrnsW29CT9BawmnUM8C9DugqTXvZrfS7nAbakLGznD",
  "key32": "5wb5jxq2PU5Uner4W3ADPFuvCFf7LancDhyMXaxnpCCEA845jYei2pFqYgb6QS1xQFsYNrfyACjwWyzmk4vnoy6A",
  "key33": "5SxQqCYoGGSgonM4degiuZBNyuv1Zy5xJo1AoyXcmVWC9xyEKoeYSNyx34b4R4P3ogMfTfgpx6YqXifJuuQLRHs1"
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

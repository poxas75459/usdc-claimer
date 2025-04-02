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
    "5Eg8msXQYa7DPqAiCwVgnuzew5g5vw8DW5ofczBbtxF37DprZPCroS4KVXmQPFpeGrKy76PXn1dYwr3wBo56pSLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rqNrbDrkLeR6yTHwVrY84V8nqbeWvTgbssoHTNMLv5nHPsinNrn1h9EdACACEyxQeF5UpV52s6rxaViThgS3RgR",
  "key1": "5FjsaokJBXvKUaGwSMwZbbvvnXimVfJZZdPo63zFVQ9e1ibqjmS6iPmKFAMNMbo8uGwZWbRXaSTbnzMsbcMYGi7E",
  "key2": "Zg82vfBXx4c6BUjfzQ9xhxhtdBkQy6Y9DWEaJSKwYWjYVh5ANF9WexuP56oMngRV76wJpXAiLgZzR1pfEU28vB6",
  "key3": "5TDNcJRo7t4HTB2Tp4czja2gzKMnG7Wjq4qEDTULgUFLsnmPWX8SYCwX23Chy5BZkr4vUPJEoLtM6Y2VHqLqxaHG",
  "key4": "48pqBfmyo4X5NdzN1E8NYaH5n2woANDdYEFxi93A3QtoeskkpXCPBhdhs2piZbdMtE2PkXQhM5iVkUmmhQ5vzNtJ",
  "key5": "4hJAWGfnGfZjpAqwZ6uUAE1MemqYLcNLKVx8ayFZbQF45MKQyCTq8YnAQgHrPAjaR4ZDSXF3wWiS6aDmk9phbKpJ",
  "key6": "349iXcHt5YWABV9xPCHF8Uz2t6NmemqHwhrarqtxfv8V58UatbAcye1u99kxujGCvh74Z9t3dxinoe5yLyMxomTJ",
  "key7": "4sjqq49FptuoG5h4jZWfq2YEhehjH36R1WS9kMMgd1G3cLmX8KLa3G7TpBhP3Ff4N9h8gzygN2EBPZGQS4qmNt4V",
  "key8": "4njqNUqtgH5kH4g31ogvja1K1ZKmuYmcgwJeXKz18icjsVZc1jmGHTfdXg6h2vdfHTbfxahs1sBYsAUQVhuPYHc",
  "key9": "qKyzy64ddFZtZL1WJ3vfNGiPhBmq9c7Ertsi6f3Vqw8YEu6QsK9WyXujmAysmRT53DJmRajaiAMAxHnETmCfXuc",
  "key10": "21yMNqZ6k8EvP2TR59Dr5yx4sqDTQzgMDH2GRWZW5y58aZGmuSfFgeWhuy5RdjydZ5CdL5MxdSkQdD1jMLRTBDi2",
  "key11": "5kWBsU5SDPCweeWUwLT82fyFv3NWTEs3Lvg8w1NTNyue4p8qRr2mRLRbHC6erL8NjFnqR9FyYG9R4Fx22uSwV8hm",
  "key12": "4zrvJvabXHBABSEKvjkkdfLzQPpskh1koynWkPDWVuJ43adQ1adC78qkZCBFik4edSJVMbRRH5owfwmFMa14Qp38",
  "key13": "5rjhpUUnJc3j6rZ3PNiFmvDwEcMXSmNGYLATrKCeAm9E4gCGpuRbreNTz5xg3CQJAzPnxqAXY8Y8yk31qWT4Xhf9",
  "key14": "5Yf3jRajXWVYHUmRo2yHf5c8XbixzJ1gPpUjyWWVg9iS3hbd37garLzqfiPWgepBH1a5HwBZcsRnUNPMSay64gFX",
  "key15": "yhK4x8DR5rrAA1A6wcnZirAh6Gi6kABNtqh15zyjPVugQwsTbPiEv33QitbdtymYT7xnSQ7rQFq1MQdrCRXGGhP",
  "key16": "1scSF5JdiVHWbuw9LsrXhzpaTeQbD2Lak8gen6pyQ2uCBF35ZJZGdS73F9QfD8eyFT8xCAtsfAGwQanJjetRLeY",
  "key17": "4cwXu9FzqYzHskfPRDWjznCUZA9d5hCXoyUoHGriqLiDqvsU3rqoj2dbkhWNGWjKbH2ssiah65V63Czv1rPxnM88",
  "key18": "4AuQzdFppXHXSU5kHksxEY2W7nVZwtLSapQyynRkLJna9dbwnHTzvRHaDZa5HZhceUSiBY6Bn14Krr7K7BKS1DNZ",
  "key19": "3hM9YJJHrKRq4kHFu9Y9TPJRWi21ZQi1onmFAjBMUcgD9N1mmTZpprv7ZNbWkAjtMfXT8hV34ZpYVy7Sm8J6EUjE",
  "key20": "ac9xbGexRYoNB3TRsuugpxx4MPDxPAmgexJrvPFVwxrmgxQg3S8HuRJc76PeRGKKuSRKJkRQ15Qu16WS25s3crD",
  "key21": "2Ynf74HnbSTupXVSQ4aGtnWjMznA9m2ZBTCaaFqvs8RgvixXu729osSRikfnRM5AEbNXxWwGwTteArtAhhqbxC7B",
  "key22": "2H3dgxLZMYEKWn8DGTZzi62ZpXwbTpygzsQLq6PJQM48AKWPoZRd9eGVoSQatC5YizMPDN9kzkqotmNRSXq4AtDx",
  "key23": "4Mfq2FbNVXq23skdMQtw4KSDfQNshstuo9GzAUNS9vPggt7VZHdnN84XpRz38X3zbdLEkMwfNicSL2SXXhGiMMpe",
  "key24": "4uBycL6CHXsX7Bi7tY213ncN3mhrNoqBqh8Tr4iuWCLGYXyBuh37stsYqELc1WJDfYJGApv8hKV9ruT3yPm1Duwa",
  "key25": "2n6YMUHgJod5JnZjdWswm5FQGZcjwuADzeH8NSadY5q5jz1UzvUBFXFUxrydxqnfP5SXpHbJgzCuWJZg1w6WW1xQ",
  "key26": "54f99XBzacJgbsEvubpr6y1o7GU6w5sErr2rf6HKGYqyRvNyWceLLDu2D644japrRRE7to1dK4ZshMKdEqMpG6Bk",
  "key27": "21rzREWErT24BVGZ21TT7w5XHSUTwJdJx8UDqvRto2TNCrKMAMt2W51rZfsEBXhchqn4vNs5BXxb38Nrhh2kZift",
  "key28": "24G2XxFhc8jedaW8PAHQUChgjG8JhesfN99DsqyWJDN3JhKfRCgKjcEkqhYj5UdwqDb3ndWXm7jH3o8ZgXRTJEV4",
  "key29": "HFPVowRuhketxa7EnwCq9VH4Yx6z21sMDAcNx18FGERWGUuZrsXC6HE4GH3D1iyuiguTv7Ft4fFCJJqQaWkYJrC",
  "key30": "5ybW5fUgvncSbrub9Mk54cpSWpRpMUCGPBDoboNVrGPNaiReV1ixSFPek5MXiEN1ogUhWhjMJ5vbNHVySbr4R7jY",
  "key31": "5oAbVjFZaPBv5hA8uya7cetZcWKiePFQQykFo624CT747ecCam9YYgjJRnuKkhBAPAX4nyXmL24DyJTm7B3dx3ph",
  "key32": "NmM6CgLP1k5nySahtPjYNZ4qtTUo51UEfvLJSRUrXdwnRsBqyMvkS6ReT8XRvxuV5HnC77wHQ3cvmEf1Fa93FWa",
  "key33": "2EJkZY9H8ZaXLwysHUmbn2PRDa5TauXVNiFJL2aVxiYoLmJp4JMwQHdSXYFz3LEKegSdQTTkXdch2b4BbjvGhBg7",
  "key34": "5P3SgctDhHMBbsiuA7aVwXekRoXeqJeB832WWUqVJN7L3dZypsb4K2zdNRntc7VhqdFFQ56XPDFyHMqsyEWXM5px",
  "key35": "4c5tmZ1VtEGnv9WF7i4QAgoCc6vZKzhJCQMcEDbw5w1dWoFWYLocb9socLbanGrDJF8qpGQdgQuU8TqZE4e3Bu6i"
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

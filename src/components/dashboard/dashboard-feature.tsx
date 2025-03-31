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
    "4APAu763KfHHboJ9JrmCGfyQwDNGcR4dX39WtSzE9no69KfwdU6Hn3h9T5Rk3KpyQkcHY3AzcJakdCyua6tCgBBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44f5sg9UQf2izk2mMgJQpKU6gTM9tCk1338FgxN7tFS8FfeckbedLYneVZH7u1pTfbhb5mRPpazy8s3eXFTaFiDg",
  "key1": "2swrr58Cqq4Nhtk6DQJAHw3Y6et6QxHgh6EU6vQ2AiP7qTGhhmj5aZVySbcpYtnSD5XdXLfs7os8Rt5ykhgCYwpW",
  "key2": "urkTG92qPVUuyN4kY6HY2J1eHhhnpgrkfYjMiesu8H1w6mn8d9zDmU93gLkH4ixVRm4ejdgJsqDfRug1LaB66F9",
  "key3": "eT3ydekHMQ1zxQvuPajcK52XAzcchYn9mkr41Hu4RbiHHv1VgJo9uvwyZbXgVxMdpGXyaxUamKMjTEo21BzWyk8",
  "key4": "41k2a32RwmFUoyuCzuyLvuaT5CBJ1wzA31gm6jNRAStutn2XbnM6yH11GJY94qQZnSLKTtEm1rWAb9vPaovvdAwT",
  "key5": "3mdGTaToVi6eRDtYDsh9pHMXbp7iJaCoSzKNU8FAvqnFm1ds5wjfTuPtJSbhMkU4eCTTZsnfvbYcy861HqBji9n6",
  "key6": "4ooxkcX2mgJxiV7htDH5v4diTTuAQxeURYszjBRcxrLHDQNPuS2KPzoUfseD23sGpnQ49nbGB3HfrpcX7fgqgaGi",
  "key7": "5iVzhsbHKrTeUC7pjBr4iHqhmNv25zSPD1VGggfLyZAbg4muLmKCmoCJAsZg5hErEmQRAUJMFKxKTNss5mZZeVrL",
  "key8": "5RkECvpX6bhNNW1tHCunJeYL5DzPiyqv8kcgMXwpX46Bmx3HSeC3453VjLi71d5CcCjdBSSu1GSkppdieobTvmLi",
  "key9": "2niuuzp7m8LEZYjCaYA4k3yspQdqiJEZLWH7oDtySdZKudUAZfLnPj6ykm2A8j8bs2w21oAXnnN6Po6ZTh2DzTtA",
  "key10": "5MQXcj2ACNXPGrZzXgkMDzXfTe1qkCG31DVicYcU3VCia3JKvB2Tt8vgvBzVe1efrTExG2Dfv8x9Ayb3oekFLMCL",
  "key11": "3ndTJA99hTaKEXKdRt3PGVhSYx1GMXFQJgGneovTS7YxTRQqyzVWBSur2G8dafbkxZd4nFnaDyKeVVDCT5SvmeQg",
  "key12": "5HqcbV8g3FaJSjkXtWHQcS2mD6eUkS9iUqBbu1UooJiSv6G67NiSPh8QPJHVzhxVhCgyscasVepV8znGnqbPSCxh",
  "key13": "3HP68LaaXsQM5q2jNXK5a3kGm7fcPiZ7ycHiohyPGNBWgTNvoLDetVkGmCXisVXBfqjKKZDGebH5SgobD1s1jb36",
  "key14": "2SV4LC8morgYweoyiyAs27mBeST1LaUops67tu5pcMVhMurcn8bLrdWAHpFTUUX5K5iTrABXdoQzBcuzADJcT991",
  "key15": "2K4o2Z2Z1dAWnyLPSTtxBL3cksQWfCeNFVhjzmUHejDiS1XpSruFvQU6WsWzcjiRZx9K1NhdoJ4fxYwGsScenY8R",
  "key16": "4yrdWPGeo2JrBj3qoQijjnqMxmXTnY6XCR8HzTsM7E5hA9vP5iYjWJr1e45LQjY3r6etJJfG6mSdJexfbyH6E7Nj",
  "key17": "4ASiNSLSzNQKxouJkavc734r6A94zC6LM8A5vrWK9NDZPwJzd5djQNw8AAvHGSnMjWx7xEp5iisRL3VT9fGvsrUt",
  "key18": "2dgqaLdvGp4aUFxX8Enpv8Kn3L3N7L1324umyYikW7GRKYZJehuuVas6QCFr8PqwiQkC6vUb2ngBykE6pAcvxphW",
  "key19": "3G2GsfTjAZ9KfSa3oDVtYszC9B3QRJeRWPwTxjb128ZLKEho32i3FadungKdCjbpbreAEQV129YJSYm8Xa32ygFh",
  "key20": "3S9YAMtbT4bT1ML5NeqCJDNEv2D7HTkVWZ8oXCXeDehi3EAeFsQUfGXuG2WMeeFe7S6RAF8uGBAEPUWJnqjA4qcS",
  "key21": "2svEeUnML3qM42UAbaaPQtVsk3WPqyErbXuR9AwaAVErQd2W2VsN2AtpCQ97zkf42umD6TQrpjsXbuCUTAhrsqUU",
  "key22": "2jidBeWuq21baAbEGFr81ND3VxzeZ6AfRBh9KbFbFptXUpeUnsUoc8gykzChmrPZxpP9f6xwojwRfM7x4dyQARER",
  "key23": "5ScRnSUCcSdKDuwcs1zfenWQ3qeFqnajp8FSp5J1pjTY1yKx9YjYqXytTJT6bpoTPujmtoiW4f9McTjFNBBcZRWY",
  "key24": "kfa1eed3jho3nsi31GpmX1gpyQxV8CSPJUA1pkucVqxeVAYB9jBcgD92Jxr92MQ6ws35wzhn1RXpYZxZBpNMNGY",
  "key25": "WVR7qKRk3NwwyXkvise52aNzV61ZPNehmaw2rwDPCKfmzNZu2Xz7TqU79URu3pBvb6SPBNCgWSZH1fmHhLBLvFx",
  "key26": "3rax7VA3VU6VDAVzdjRRXQrk1tqK3FRykWUb4BAprhzKKWsErdD1eaPBqFJW8qn1GNTgaHzTLxmt3Y9Lb1CDFfbk",
  "key27": "4EUq4ktYLidzprQGXhCRDZ33CbKYF5B2iuwbuBmmaywPcuY977j8g7wiLYaumiMMG6Ynsv4uW9gzMmnTSkSnfSCG",
  "key28": "JDxACMogumg8sB5yC8h1TMZbnxt4awo82jBC8BKE5iHeTBjzreyLavVAMKvyr7kmwj4oH7pqrNMX5BAuQTs9r37",
  "key29": "3or9wrEVvUn4faDZPMJynhCLqCpQt3GN5WL7PVjug6se3eBrVyXdvJpbUzhE7P4EPXjXBZzGap2tBEjVGxH5oG8d",
  "key30": "66r5NzcP4PwmRuAFEKrtNot9mappoFyavREhNycrirT85kfP7XrRiKJgxg1vYXziez8RWZ84iLfjbsLj8QPcUE1z",
  "key31": "3ZAULd2EZz38ynCWvDcr23HdKBecJoQJDrL9mJPUMU9n2jJr7QqZCQdE21vaG3ZmyRhupRp28wxFUWbENVBWYyWC",
  "key32": "67gxiXQu8q3cmbW4jY7dcW9kvvenX7qZMXLwnxaaECb6kSuXjsZz7CubH9QtFp6daX49Y6544LVv5NyvJy23eX6v",
  "key33": "3aat1Rg4x2LZY12ABnCqJjwqjw5nxESTMTZJA3iy45gDwPJk1wRbghCDEz5WihoMLy2Bk7RMX5CEZ9A7F87BD11N",
  "key34": "3rzUyqUyVganJdSsmap2qZYqpPTjC8PRUkqnsDKSxHDBxWAUfpo2cyUDHQafJVvN66yQz7kj3g3573vHSpf2puw",
  "key35": "5x6Y4SFRJ5tZHPuJHXWGzBVVFA7CRcTk5C3zxtE8rBhRXq6ErvWGxZBFXkKjp2LJYV5jjYHaC1xxbN7XaNz7gk8"
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

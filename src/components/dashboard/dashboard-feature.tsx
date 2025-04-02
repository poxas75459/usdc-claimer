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
    "4gYfTUrebQ77JthPpT1QJ3rdVPBxP7EsqttrnRoAujWFNSNA3R7TnGHHriFEDdN9nLnkEtTidR88M9DhDqCia1aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cdVDPZpoVJmcDQkLCaYHFf1CAzxXFJaDL8XjWecnGsMQ3U4MQE93HFUQocFwEYc28x37d8N6dizDAL8eNejFpjw",
  "key1": "3teYyWXQjrNrWWN6xybXqfwssnXEeyd1Jx44fBgWdLnH5UKL2MQEyuRHZjiwmeSBXcrh36pC3bNwT625SckxuBCt",
  "key2": "YRiF4PNK8as1HtDufeE7DqkqibU1HKZuwn2fYExJb1LjeyhfKSJQZ2msbjem4JWEzVYL9qhpHrCz7h1gcpZeGw9",
  "key3": "4KG528o7Lz6PKjnen2W8GwswbjMFpSm95Y8wLu7oYyeKT5uHaWiGHDxQTyueKZyd8boHk7GVgtrmfRpaMaxftC2h",
  "key4": "4rT4nZVG3XyAjTeiWVBb321pfZdS7jjkrcRDRfzNyYt8t4kGfwJ4BTpLVF8ZQCCEADRbm7RTUqj4LWgTU1tRuQEr",
  "key5": "WZh9abVJCGXiLDv1m7j4H7xFB6poe8ery1wk2rzbq9Z6sSt6USqpZnWbNs9MGQ9JhB1S62Fj121qSeNiczJK5PP",
  "key6": "4vC3v8bEAXZxDnFqZx79otDhvkMyMnM8AVzvw1WZMEnXJN6WyKXhcHFHGZMGZamCNkMy2bS71nCrtq9YWa7TiEu5",
  "key7": "u9w2E2JtSFEV6G1Rfb4DWqchhxnK5WJgZJrwTS8mVadU3gmrqirSYRSGu5CcvhpRz8GTbJY6sznAUSxLKqDaNbV",
  "key8": "5Zt4rYqYURr6B4PVC3QxpbxTCLWgHD7rWSzFGPDGSQH7GhVeF9RQNeL4p5bJGf9XFKKtWPhTuar2yL67a5Anfijc",
  "key9": "3X4p88VNxTPp8VVVzeJXrz3KQQMZHNUyunCsX6RyXMS6Q5VaTAXgEVFS2VHB4cuPD4EVMRiDmP7yHUAEs8E4YDS2",
  "key10": "wqUBefyjnEpZKGYpqxDcffJorDLmNjQHjviMWUius3y89BfvvCmjX7hJ8aY8FQCWL2XTWfHPFPudiHLFfutz2eh",
  "key11": "3RPZrsNNQwX4Qq1iZEh1cJ1xKRfFpUFCveqeTFsuQv8LsJLNA33D4iua65MZnRxrrzsAkTT5GhNi1JNTaa6bTnWj",
  "key12": "48zJvUTMPdyX2H2Zq4NvKXSCSqE7qEAaudzQ9VaQBaX1vYiY7WuGVh8Uh3qTyZoPp9TiQ6N9pR84SxNdjaxFVs4j",
  "key13": "2VNT3hVagxiNmLe3mbJsXszJHoMA7AA6CcPdyLpsMBVTbYvozye74U3JJ4YwphPzf1rBCmuc6tKnvnnx8LqZSjGU",
  "key14": "2wohTPehRyjan7dSJAhGALZihurmWAakE8aTysFkSUG2pEXaNpkv5VvHZc2TPVBhmFNZr79PqWcaHM1u9UnxWrt4",
  "key15": "31kTUwwSaf7ARSt2RcjWzzXZq5V8uaRo5Lg6ziymzeRT1U2FE6Fn9kKP6CsWfRtezXtP2piaWtoqxtaQcdaGr7EU",
  "key16": "i556tkGwsNBt3qJ7USkNjX3PEnBYfmFxukVmScYagrXBFKfnmeTu47qFnLo1N91Hjj2v3ctwgmXGZevn2mHigMN",
  "key17": "2FPsHkY11Jb9w5TnphjBEcVeQ7vWzHZZr4AfdoqQFmhfo6iMviPmwYqppUedfLEqsSPTMSiiLNpiBfb1j5h1gMZN",
  "key18": "2fH657XxRdT7f1S6EyNKCCojrwr6FP6uCgkjB5ffc8ehKfNPtoyAf6WpRGJ9td3c7WWTnheud9cgmgC7APg1m68m",
  "key19": "gZieQmQMi2KwGi7qCinfaEZTt8FwAWXAmBWtXnAa8SQTccSPLG2E3gUqmVxYQmXBYH347KLFJvXZU6CoWd1t6Ey",
  "key20": "5wxwsWRVJw79g1Yn7E7LFfNQp2RWGp6MpakS9xHdJvzeb28iwfk3edm9yUYaP2J4bgGFvoiGkLzgMmwFrPWJdNxq",
  "key21": "4TbGco4qAZkX5cyxQG86ZwbxULK5ea7rfQdejKknmPqfs3vKJWyZgJqU9fsQzSxFjQcwXsg1Y7XzTSPfvC6nvtwX",
  "key22": "4tW7sTGtyRR6P5rQ1iSvroWdWtQBptcittSNGtE11Tkje7fWg7JC4ZpL34R8ADdPebfgED3Aoufgo3wKvKgNiQas",
  "key23": "2xTU35P3f5X6MWhgqbZpnU45zuBoPCmDp5ETdKvs1LPhKhkcJMG97bqcgSNnkrgUgib6FiGa7fat9vGGqgeXGXSR",
  "key24": "bkZgzbj3XfdjLdHRKZafapGqmMds9mUnyLddNS3wKuJ1KtfE5YbwHGznzZSGkLHDSWUBNNxVZCcb6heANxczmYc",
  "key25": "2hmKEBdYd7m2fET6yRxKGkfcJ9yefaKYDdXViMRz75Av5BdbsrCQ8yLt4zgm6cywvWFRRG4ZoueQdX2XZc5kZmp",
  "key26": "49Pdw6iaJA9uX36i5UKs73LtHhRrd5nwCksrfopHtH2fvDgqrrwa7efDXrWQPm24Uz7EqtffVrXCBgrgXcoqZMxz",
  "key27": "9q7HJbuq8rUmFQXi7QLcK4yssL1QRy8YewP4qesS9QP2QcCK236VR2hXCWSrfyBUNjPN9LwNENYYP5Jv7MESqBt",
  "key28": "22nSYgMA6wv7Pt3Ktjz9tJKEhmrVQ296tmMrJgazrhXhWzqkouYckNHnoEisKjK1V7kjfaGTe61xeQFYXVUp73zQ",
  "key29": "26MvTwMCfZHc2UA6zvhaz2PTzxxA5prKHqPbAhcmHZ3Avutc3HZpAveP5NPXpBfMFXpkSVLu9ctFKUcVs3Q237uZ",
  "key30": "gyjF1YqkEPtK8YfXqKCbXPvEvg7eoyrCn1QjjRxuwhMGrRDrsZLNpjFEzX1nNWxVRF3DhCrkWpdTamCfKSmahaF",
  "key31": "4k5XsScCG8Ef5tFLMmemZSMpSZ2Qt8fZoEs6FXwmaj6mZiuztUT3CpggRMMipmmRYZzXmAs15Vqb8MTnTXeuPtTV",
  "key32": "2iRcxnczY2xZwi2XSomB1sJnfj4QLQJwu6vqHhSdXMqVXy8Pb3WS65KXmx6s4WqbuD89vGZ6xvpTy8L3kR1HQwN2",
  "key33": "2QJMxKMh28ayjQzwjHqQopdrqZyevFtPMadkUa1qBx2Swqq5tmV63VAkNCVoYzXUMf2W5suhsDdjFkhSTWkGv9zi",
  "key34": "3cQLGdbWYqdygseV58aM9BrNYyHPyJwkAnLe2kmknWZY9g5tjfV3nVvyT1Wpv3vmfJKKMzenGst1NJagqhLmktMt",
  "key35": "tCT3WBYR36d2KHqVnkAhNWjVomMSYk3wssCoUobyx4TDxzLuUq2o3VJpnGE9YQ3m2YurAoyf6Np3iJykE2QEXPk",
  "key36": "5jNuNJhqcFEyduaVm3uZEUt7PeFps1dgNz18pH5jAyQtgxSsDRtzifcRPfz2ft8NcLycWkfRZPPUkBdCwGFit35Z",
  "key37": "4N86rfzBALR8s5dgxYodGfuZbrFXvzMMGn7RAKaJ63Vr7C2WraheGZMyXLCyyQmyL8fsm9SHFHMX9VF1NwEiYrm",
  "key38": "57CH9ikgAcSYGPj5fDzhg4WH34SXf9T7TytE4eAEq8i2tDHLFQs58Hb74c2Lb5xYgvLGTxZgyQmwwsKvBSD4hCef",
  "key39": "4e4zsidRzKEoH6Vdgj1N3me2qyQLKsVGiFgmNkvKsEVG5hjsdhtT1ppTKwrF8mgKSCgMhWvvArMULgRh4FRFXzvD",
  "key40": "21fsDbtBJQpCXdxECvTcK4kZroksByxHboi6EgNuNzkqyXVGsVUUYjXmSCMJNNJfgyLQM9mtgZ3pVUbrR4V6gzTJ",
  "key41": "3KjXyiJiupTBQbbfDctH1oWQty7DRy424PP3Y7JuGG1VUjau1AwDKcFoK11KgrzTGJC61tDsontDpUto6ig5dAdh",
  "key42": "5rwtgccHxZ8iB9aAYkLdWLXekr25nhGVbARzfBXyr7CBv4Pp8CVaMmWZeaYDa9odH4KC2pEv7S4AoLxZwn72KWt3",
  "key43": "s6Ya3B6nTDBF9dJBJqnt7vSaV511ex4APGgZCCvj8BKYHivhvA4ZPNUkWYiqfcE9iL8NspACFxVRRWTodWo3VbW"
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

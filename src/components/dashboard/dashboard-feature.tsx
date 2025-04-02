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
    "24SdX5qfnkCr9dDB18PuCysGePscV5AQsUut9s6L7T28W35w4LHexkuBsu6c45bx4GFrHitFkF6JFTKL1xfnyxxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yF295E2Ufmxi2X9dbuoix9boNCBqqSdc4Fznaxn4N2xYRt5iPK9gBGFvSqiqChqNATqvDtu8jM7dqbAWB9bCEec",
  "key1": "52NFxpuFseRYzApWX9jEsf4akqFqPTyU1QzTDF6uXjgmCsbNXMScuoku3qxZVJEZqcsvsmaBgWmiVbLRzWY5SV5L",
  "key2": "3LXMwH51NeB1sayt8xSeHd7RGgoqcbtPQTdjXdSAJ5esafSfWVkkS6ii61QkhkgRACUbJJi9Lh6aoi3fvaugkxuR",
  "key3": "49JBVVLPH7P9m14v8wGY8gRCi7XSuQtmQP7QsQtNLNBYfjSjHUnYFCHqSTj96sUpY976ZCZT2RW4hTtg3vVjeuDL",
  "key4": "uL4bHtqFSJdA3ZWJTiupxdkrujDaDjb6EURGwNJQK1Sokvvgurj8Dv5peFijXsghagjuzzNnotJRfX64BjKBS7D",
  "key5": "4d99PBBjLHMv2iPF3GKBbGvSTyxkKVLswkHNjcmschj7nLMhQeJuuUyPDoe5GdLySKq9TDbVibQcvGWFz3Ap4n8x",
  "key6": "3xHWsFKX6jConesSKeNNWT6bVc7yDaCmCWATvUVkBbh1ctUhiRPoW54g2D8sTC8vSTjLEDEFGjURJgpynEqQgodg",
  "key7": "2DXEBKzjJG5NKPcSM8LSWMK4EqyWRUgdbPPDTbJ3nVq9Np5J7uBDch2kV4K22JdExwotaqz56aTuAUM7qcihAcH9",
  "key8": "2ChcjaAEfMMdNfFLnQrFivc7QwFjGktTMotwuA796WVyPNRY6VwGKtqYthujycQh73f2oie44d5ojQNi4Pe63i2i",
  "key9": "61CpUmHfCdqhNHkFByzT8x72aV5wdQWSxvi8B6NfCxu1eDre9DuKnhihS9824KZ7685nPmtKASTyLaw8o57kSyyz",
  "key10": "ppMGkTrjrWgYofpofnS9nK51UkdPk5tifrSC1d2rSfj2qhB4BKLH8dJhcxAgSrpKP8KJ9XBiDegSSEHVDfA41Jf",
  "key11": "FuYtH5ExVdFTnQrYyyDsXrYg8SCLQXxt3Y3up4441qcd43sgo65HKZRMcQznLX9HosfyXRS7aEQjsx58v5TMRsi",
  "key12": "D57MnucBxj6FcgdHYcpS7mMNXR9jr9P1HbBz2uNDiiF9389s9FmnPQ4KC1ek9hDGeHWiQXJM31CvbWdem2RV6rb",
  "key13": "2W4Fi1yCkB6tTq7UTp3Uy9Jbkn2KzPYojJHhTAkPtsf7ABZyixLvXFLMsCU3zkZUXpSoh3PWj6CB4T92VCmQScEi",
  "key14": "4JgV2wi7gW7tUmStqG4hChxUgksvnq8TjAvMNALvGqP2rXtznYACgD17EMomCqFSr6cTHV9H15cburQLL2Yq2smS",
  "key15": "5tbJtWaQ622Fz1HfgQhuHcHcaWtVndHbCNTpwoEwVxmk5nZYR6FY7MMvfXHz5BabMA3oCBW7F2rGjbzsV44DAwWm",
  "key16": "2dJtwtktZhkV7fcL1ddtJD7t3jmZqab868AzmjY1PUVsZsPT741X3w7SqJJNAcaUEvEjfSW9TATyhYUGSDMRyRvQ",
  "key17": "uEXiNNb8gGeUuDdb1iPfH4GqbxZNpereoY1prjgsYhKXvWSJ2fXav7rPqYKruKuqr5178AbPwfcLt5bZcYEWFpf",
  "key18": "3btY5RHyARKokJUMMdFS496hgLWN335EC3JX18T2KrZj3Ycp3TgCqQf4zr8H1muHTRUdpsdLVBcx1cbBUDcQgnPs",
  "key19": "4TtZXgmzpfrMhEjGXGimZM21KF8Ddegxeh7MdFsrX6djc95Gzik2WQov9H4NyS6fJqfREuJFqzPhxk3XmxNxjv8a",
  "key20": "5et4w6yYA2JkBUz3ypoypFBgqhaHw8xyM81ztkd1oM1SQ73Z2zAkhNZoTpX3ot77qqu1MWS5tuTpLBMB6BvYdB4b",
  "key21": "4KxC8ByRBZikKF1V11myYx7BWZWPRXfaSt58uf9wBd1RZJJCWibQ3aL9GrwWFknLt3shisjzUiCX6xDD6BhzaUzT",
  "key22": "2kqzRkvgNEZcQVZ6sdp7mSpjKHRvZFLfb3VRw8mVq4XwkVAHQmSnCBAcsVmkzXsWcWPvM7e9bd8cSVcazhc5QAST",
  "key23": "2AYCP2tiGw6L1QLTBbwFbn8Apa9yTbtJHSuVaKJ9avEjNY1kS3VcSFLbpDwFrd5dhWGjrdqDGK4fBR3zHxmYAnrW",
  "key24": "32X5q81kx253aGjBrmL1nJNYPJpwBEgUGxkU52qzRNE13mpxX2vtxVbvLxsu75q6UAAD6UsMXKEw8SWJiWA3YqMd",
  "key25": "4RENqXdF9raV7M2WVQZUZhMVQ4SiVRfnvwu7JnPTBw7u8RXdHHLVktGV5SJt8aJW4Ahmgatm4rZcXErjBZJ2w8xc",
  "key26": "4tWYAkqe5HdP9RrchaLPT7GqjBkof2CzXP3BeN3yVMk1GVEfivoj4X8b1vP7q3Jxuy5UmqgGyuQh9C3LkcDhy1Ms",
  "key27": "2HsEmVRg7zArTURTJLinqXvxizLGToCCoEGwpXCTYzWKDuYK8HhtuU4DjgYyNEB5VkaoChLr4QPMHUK2ykHmzTfa",
  "key28": "6Cwq8uv6H7Fs25cmmhfjdGb7cPB6VEjCyGLND91et1bjhSvsJqowMYJC3YL9WetdyaENKBkHcCTtb2bCKpiYzen",
  "key29": "4rAdQfyu7breraPZGvJdzTJX17rLCDDpDeRsijp5zYeJKsiG48DrtRQJuU4ZEMtzF1r9FB4ZmxDTSrvtSrmYRZKp",
  "key30": "eCCK4A14AmDn7pwmGFKZpQ3NY1gqSShxhyyB91GwhFvrAVCosuaUy83QWLPczWgRVVpHpN1NRD8BfqkLXADNuzq",
  "key31": "5iro21VZcsyZt6QphL1Txomh83bbjaDN86a4KT8QR1ayGPErDK9gbfFVerAYQT8QDWhqmw1xgYtNnDvndFZJC9ig",
  "key32": "2TJKuWWRTVTYKsZ7KUBYY7UbbCknbN5BigyDN27SScvYRuNivFFiNEkTcuoi1Eugr7a1XNPfJYm4SSW5csAXjpTt",
  "key33": "3XhgP1etUqWcv7oASFAqxn9YnFrdkZmzq7Q5AWqTzKHfL2Z7BhBKxaApmwvxTRqTBu2dpF1tXMB3nKmwwvDjenxs",
  "key34": "4WtQUneNJMLZs1ykkKhth5jumDE9kAYi8ZNMzdw4sgw5YKigcj2dp4ox443skqSwgugPxGrx5d8UBKL2uuoEcwAw",
  "key35": "2ixxWpPGxVKGtwQvpqjvREPypgya3R5nkbLg3ZP3ERYciaLf5ZdAbFMwoYAVPbJnBEeJZaKLzUrZeuDXCX7quzM4",
  "key36": "5pKrEsW416CXVjj4ZHDmBpF7GqBxSPUwRiy5xgS2Zh3r5iRZ5hQcDkmHnEhbxWnZvSqBNWFARHakiwj7nnecrGDy",
  "key37": "3tpKQKG8J82V6chkTH96EP8yPHEkYWC9H4gh6xqwf4uYTK9JbTnaQBwDBftQmESKwV2r35k4fsVUxtMV6CMvWEbo",
  "key38": "3FZtsrD1PxLGZ24bwLNs6fFsAcDTt4CBcTfqNwyu4Dx98X3rcDJtDuY6bGu2CHeZWqnFvVuk6GstL5MA4HNnYu1F",
  "key39": "2KvM1idthZzcDwAYXkwEDxZvC7P6YkvN1NsTu1vLDUJcpBCKFNgv8LbHszQnTr585QhgRFxXoFwCZEdecruPC8s",
  "key40": "4JhsbMEmFjwWsVq7KJabaUbhEYpwcrrurk7fK22ugwxG2d3MQf7cFt7W6eXmaUPMad4QuyCrNnSJLitRnnyAjt1T",
  "key41": "LFomckQ3fRZpctADfkMEZ2E2PaZM8MvzBTc275d2PDsa2MkCM8LPSPohJdSaDAAtKVavcry2dF5kC8Vzj2UdYBq",
  "key42": "2jRjwFXww1VjnW15MK3S9CUAgsSqGUPGRtRkHdhxV98SFgfyhroEGunQmoCHJg1Y3tTnVEM4p8eL6Ti246HTHhSp",
  "key43": "2TpPVfWmpJpb4wPtig7K6FgCxAktNNj2pCDYwcNoXjFVyy2yHYyETZYQAuWFGpS9oUTzPmBAHw51Gv1k5mpdyySn",
  "key44": "2hY6BByW1QH1C4ZoxVR47wXBvCc4ozFmYxQPpyaE1mpLD3rFZ2WYg3qfgNFQ4VyHexLNVDxZecdZbnrXfaPG6kdh",
  "key45": "4d1R1cQPPrCZCrRPY9h4TEqRjgckguy1ZwQ1aVzZs7tVrtjdsbRo3DKy1LYjKKAydQESoCb4eSrZQA9wW1gUdrrk",
  "key46": "2gzd9YmiaiADD9fVWSP8bE7w2DLNwzUEyzqU9vRt9eAb11SPAqmo7nWs2PrpreTxSh8b9VyJwNzYVoiVKHiRLCFH",
  "key47": "3AwxBxqYnbuNi3t2vvcnXZZafEPF7ST3fBLeAYZavFqrEndrZrE3urmgQE3rdnwUZzUcDaJjA4xyg5qagZ4Tzz5m",
  "key48": "4o3eNB1U9EpMcawbsTGtuh1hQ7SC4SBkyMPzbhhQwtuFjf9kyimHkjdZMAH1c7s6xNmNot76TTo8bnqFuh4n72NK"
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

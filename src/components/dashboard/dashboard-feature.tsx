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
    "4cyCrVRKVQjKMhSJJBd4HQxfq1q6KTZmzje8KEsHXGVPqnBcsgwjpmbUvGbgdeyCFvVFSmMahkuW6LereQnWSrM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3noPB1RFWYaYsc73qwT5QVCy8vCqBfKBxPM3LcobLJvQ9gZqFDksYWTqGfLdTPVKDHEHgaNDtYs8kDUrZa7ufUFG",
  "key1": "bc5CYP4yuqQiEMHqY8oUvpfc2Q5Atet9HkrpZUc9p7YiRF3G7fV51YMNi18Rpr4vVLokkzRUrLAxNpb2wV6Tu1y",
  "key2": "5rDZBVGUQfvz1f9HhxoJrJd642yz9ab5dYisaDbRGo13fvUkq7ojWzxfRynJxmRU9VgThjHkpAEpbSQaCNfmiWVD",
  "key3": "ChovLhXSp8gZ8CybWGH8Fut3v6gms99TJRhvkgc2bSnJp86FpsDhR49HYnBhMvyfiaLaAiB5JHjuaEzf7Ksx23r",
  "key4": "582gE61HPnJbuJJ8bmEVU6EL2hAhuhC8aGL5YcYKtSVdaFNpnzEHLmd18wvRkxdQ2CkQV8y6nFormgCiArJVjPLA",
  "key5": "2XWJRk4UBBdhkv4U2mts6DPsjGayo3gkh7YAVg6FgmXjrp6juvTHCgke6DRUwoqdQMyGihfnb2eMWyT2ZziznHm5",
  "key6": "52wjxsTnPWwXMDdnyejEaLQvCZ19GDY1ZnLEpbkFa7Kai6dtVjs63PyCjf4cDxACAqkQxdHvV9FZXS7EF9R4eK8e",
  "key7": "KBLtn9K6SZVLmf4dzUYu4ESwEMpSG5ktUvvrEbCPcVe3t8KjohdHEvyhfoJ2VNFbvyK4UfV3bbPm568GiJmPePz",
  "key8": "37eDwZtk9To2UZ5UWxoGDLZytN3vUiaroJzYpggFornYe4SD4hx6PcAg18ouToXBCYx5kM8HxR98GYjmeRBCCMMA",
  "key9": "2f9FcdoQe1qZCUa1VAEeJ1843GwN1HM5nFRD6beAJtsgupvscfVDMbULLfy6rVsso3uiATaEKSDwFtUeY6oKjQDa",
  "key10": "wEpTuudL2PQ7NQypdU7kpFx3zHgGDGdswMBEbiVXLUtmBn9V2SwP1TutJw8ie312GEp7KbiGs7tbGSaEJ3sCP1q",
  "key11": "36JWTuAnFrgWMC4mGgFHVSG7tayGKph3b5437eDp9CB4UpLL8jZmwwZkZYmKS9RqwWkPHajSbsmiVeLjTmALDzRE",
  "key12": "54aG5hvHFn35knZL51aNQXu45LWYY1eyDHsw1d3tVqZX5Qtfyfeczqt5yYereRcMFUxTLi6WjQohN7CboSDnY2iu",
  "key13": "5sbXVCcsKLuGn6FYuUeR2DiAGHVNt8sX3643UZCEnF7tfYbxekmaVg4W33qVHkueNuuN6cUWRsoUqtif59kYRbkM",
  "key14": "3tAPTuddus2dGiighnmqZCuea7gVRsKG5yNv44LpSaApaQgVEShegPxdyJU5qa4fLG9xURRKNLju7fvGLLjwsdu4",
  "key15": "5DKjQW5oQQtih7anBhXP2wGwp38mmai9iaZDzPFSZavo6WdD4UDtTTVAQSaN5Xyiqp8cUXBMvq3wwBSZM5fc9CJU",
  "key16": "5N8gAQLoWa8b9yiu7nt4JrfaHzJPnQP5HnMv4RKrujLosLbRSBix1GZpJ4TVwFKkwYbp9CLi7gSxwSU5Fo3D14cS",
  "key17": "2AEJBaY5MGeNmxeozdnTaYH3awk36AWgBx6iS2hGzEv4BBTUMkJsFQUWp5Jn2cn5VXM2oL3FVJUmfXxWfk1B7Fw6",
  "key18": "24YnE3zw6af6AETL55WPGrY2Y2DRWUiLRf7e4VpPSYCLeqVPCFjjRCKCA5Sf63gUGChZ8ZFbdJ4tiHhLCXAX9SaZ",
  "key19": "FsiDaSssrRWxFmcDRXEsGXwZjzjA7ZdVDCC93RzTHQ56eJPDCjU8QbWLQLVhYwiTv6N1K7DFNj13DNsbE36Soas",
  "key20": "4qWUeYswRourH1VrqRVphkeeKYb9JfnpqzAz9JJENNQZbVrBjGcMHE1pokvHnFi2UTfnuc3QFcedY3fwHTMRBtZ9",
  "key21": "7MSKn8zLqN4xawQN5w1y1KJL5cuX1bZvQUJ5Hbtu6zheJqaHvcbodxzE8HFehTWfUZCQnV4AsPPiaxt4ZjgBCXP",
  "key22": "5vcmq9GWfV6dSTCMDQKfAuDEiTNLM4rBfwzsbvqmrPRmjbcFeGrd1ZD8Bfn8gGWftQuYdgzNCgf8KdMX2VsQLpcW",
  "key23": "39vRPZnzFCGX8HzVGdh4qGA6HVsW8vVHT7ovkitsZa3sqtaP7UgFKrDM1yTbyYurcRpJXKK91NBrC4C8Z6Qx1daC",
  "key24": "2vVsyVrg8sEsdxYtWnhuopGJXrp7AgsJWRvRBHkxjB5uKv3skfj8Z2V7ehP2qBa5EvcpqN4nyB2MWLeAGPVNb5rk",
  "key25": "5nKa3qK1f9Miu5XqxbgdRzpawnhNnfvxre836hDB2hyySXieH6gXtNiBoCsyDNjiRybtxTrbuxYxrL4D3gdP9n8n",
  "key26": "5uwUinCaNzyAwiZwJUom5zfuirHC2SFg5f82izNhRS6iD2ZE2oPcwir3EaVfwss5mFtvYQwNk91PASwuUk6whFyY",
  "key27": "TSTKNQNaFTGU5n5hy4DxcL4h5XBhXas9oabwMMJFRKkdFmewbpFUREBbVYMhLzB9RyWZabroaLzXFrMX2LM1L27",
  "key28": "2X5oGo5roDZmfyu5fYSrDXjVA2Agn9LbTxRbJ1DZ8fAniTadynp18dpUTRrEKHvBJVZy5Sb4B9X5xQBuvocq5bQR",
  "key29": "265DiVvECcuGZqeBW7aAgFS61NuquvSHZEHnG8HwkESP65WGhB4BmauVdgjErLmyNfZpa3Prt2cVReLHU2vXhxsK",
  "key30": "22zq31YGVHagMo9W32S5tEnFrFyy7DjexBK5e7Jo7sDMZWtpivA9QQovRNgXzp3YCNuWSyxPzRGJapNRGzdFPQFu",
  "key31": "cmN8c8wUGz2on6P8zX4DzxKkYfeYdnHdy3khGUe2M8GbNKPT4tt8gUAUtguJ3LsA48cBJ7zQb7uVziC2hrQwLzA",
  "key32": "9YosSD8e448bxSCQxkXXSwMsnmsee8KUPcXMNknvnXShevihRrMdC3YwRE7gEkGaKv6KKNw16NQjcUFASkcGLa6",
  "key33": "JGDYjkws83aHLRoPKzW6UhxT5W5WtF5t67nFzgWY7rVE5fBDFtZbbTDxmw2QRRFxZbQgXFcPwCZAMQXUJ33p1nh",
  "key34": "3DzhyrAXsskx8ynrPvTNnYcA6zwX3oXZDMogZKKUfhLj3QzTg4jRdNA6CwYMrNu7h7agHvRMPDzbrmPYCpkdKXZV",
  "key35": "3pDzzBnFL9tG3nHqefXsshveBpLVhvEdKqbAXxd9MAsSeEsQM2v7qgFHVGBU2gJcbtmLy4UHFsZB9Njrf2Hbcz4f",
  "key36": "2BsTpzkNk1LiLMbCfm3e7U6vdoo4Lz6XbicYwWW2qkXwUrviQTDBPsFkf6FRY71KxNg2Z9my8TZs3t5Fzyu4NvMF",
  "key37": "ikeE76SSWMEgx2wNSqfzPsFmzzSZ6azG8BdsJxf3Hzr6hn46e1cyiPYvdSEavqwkCAngYMStxSiHaG9anuC9yM2",
  "key38": "22K5GbmCTBb7izfbenXiSyRFvWbPnV5hgTt24pz5s5g3kMSJKharq64Vh4kYvCd1mwWJa1w5QJ9HjoZHKh6yGLE2",
  "key39": "cwVt8i66iJqy55xWZ6RGP6Jxr6Wrwq38EkTPsxtGe3SAarmdt8GYp5hZGCJJWUKbdwG6bDTnbgasjm2uZQBoVvV",
  "key40": "wK5zU47NyD13u4WeF91GLv7CS8HA22wqNyogkK5f9fotbAB6gbVBcpsMM7Z8RAQgVUxWAMbcC7HVwzAJNutGFY7",
  "key41": "5gMSbEEpnmzPauM6MAxZRrNrXSKbYVmUxEajN53K6y3bZWBhQGKfszAmAjtZoQzxwbDb2esYuiZPjfuc4udt7s6v",
  "key42": "3vWjQSa7HsEMkDK1V8r5ETuU3CLGbrxWkfMD9RbG6uRLxy5wKvyKEfXCPqPoySGjLFFqvXDEkNMYDk4yuvFBypBn",
  "key43": "28M4CD7z3pDYEjzN7eL1RUg1EecACywTGKVgp7Z3WZMuvtcoyJSawErxNW2kF62j6K5N4kRAR7BitwCbwkdzdnSQ",
  "key44": "3Q5oTqbHowWrRrKRQpHefV8GBSXR6wrka8a9tBEBGz58UutXodMYWZZbTE8vcoKwb3qnS4N35hVo1ZHYmucytauf",
  "key45": "5ZR4WYa1davvXZgbNyxnqDVJgp9yCTnETNTvCTQnpoYayVh4ay2E33S3BYeKSExn5DQqY3zKK7SG56jmJCYas343",
  "key46": "tgX1E7jc2MBvUhiDNJjw2kBKDF3u1LrUak6F5ifCQodsMZQDw1UDWWXcgQTibdgAo3oySAtZQAAgshkrQLZo7SH"
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

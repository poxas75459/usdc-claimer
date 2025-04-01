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
    "2DHwKrbSjNgPWBmtGaFNmd6c8Z6QaGoeSrtaP3B34R8rrXSK6HpKR4mR6euKTqSzbQKHzasCfgmBQStm1xnYHfer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSARH1tfcuBaTyzhD349Xa9SAbqmB78QjwR7aig4Nwtui5XuTcVjbJ57FVzu58NuBY57m3H2EHSUhSY2TPNLfJ",
  "key1": "PtUypiFzVQii8m6qYK4929C9RxRQtWEPUL5fJYdWyjDxUApgtXBZctHontWJQkV8jbUHhgYXiAVxNXvDiPviE48",
  "key2": "3U7YubzLJGSuUwLHMmY1Pkhkwhff9qjihVJuBL3PHdLzq52ohRrA7ae4YXBxmcCENKhjPo7rUcptB2LoeZbotTBE",
  "key3": "4aHVE3C8eAMpc78xWTsuaFustFNzatbqCcH5Y46PZwi29qKCrt77urDhSGQKqd2DWjeDsfSvEnNDc48fPgiFHxmt",
  "key4": "c7LtXGPe9yAco47mh3KZ74YTz9AKJZaCimGVmu8fo3jSGW6p6MZFw16dZxPpURHfC9MrXWy1fhsRHermBr4eJBT",
  "key5": "5aovistbwYBFQ2f77jegHNq2xZPEdFE67BUo1CptnRs8GQPLTHbx1oeMJ86d4H1NN5HBrkkJZPb6GW4TFBBrPjQb",
  "key6": "2rV8jCAFaXxAst7siGTptVd7VNammg2MnmvGtsSaK4Hyxg4dWBB9z7N5Kt4cjk1sV1G8XzenSfHeocripEFkLoBo",
  "key7": "3e5bDkoWqcpyZNzPGpy1XzSsSdXSS5oQrEZHRX4v5KaFQ6sy9FVWKVGQ1oCBLMpxs59PDYBvQNFk14CtNURpekqN",
  "key8": "nEZRjSctNtNb5NHZnJBjURExzsmXagSvEwYkq6cvu2T4d4BKjfDA7QTJwMtQ8JxmVZXee8iYW6S9LA66MjaLPom",
  "key9": "44ph77JMQj5UjgFaHy6ikxCqVN4AbT6J86SSS7PN1dywkPjbEPcfLmvUusVQF9DCQEZXDiEDM1jgKdF81FCngCNC",
  "key10": "3vDVjnuqKsCn3eUi7i3JmEe9YmtbvKLwytpWKGfuJatdxjmUTEdMde8hs8hqSWSGwQJHtZDBCDoJCcTGJmKSzvFM",
  "key11": "4fcSXwdfurHYfCyTAZUs2TbrRRawLdKjRsq88M94SsazT46uYQRxk8dEVqcnoUBCXfKqJmihn6noaeK1xiuy6iGY",
  "key12": "38TbwRQZiqoRAtasX82op4GYQRzWGGaKvYbVwv1NLXihmn4L5CuQTcwupMjy5eyatJZkZJNtsb1UEJTtYQuwXF1f",
  "key13": "5y8wo27BMjzV2yfVT3zGq1wjrDEp5LjtXNQheKyCZ9EUooaybAH92ummsvoLgSYKKu1e7D5pmJTg7G8b7kBYg4Dh",
  "key14": "628r4A2FqvVe2F9DL7EvitNKxMSYbz6rCiDbzhMy1WFH94VDeb8pjEdYUsT5CL8fcbT4ncoa4GJzXjb2Yy1Jz1Wu",
  "key15": "3uE7oUrVAfMDHBbNZWi9CVtoKGuUjHniuBMqaCbm1KxYRUipfxdZJGTBRUaiKiEdQqT2sivJHC96k5FR8mdksndr",
  "key16": "XuSRPbcK7VtrRdn168wgP8nhWibnSNkCoTsRZ1ME3sBDEWkSEdLjZn5WuiViHKoEuGyxrA1NMuZLKH8oCv2qXFJ",
  "key17": "3oxKpqFxrkVom9pBQEd1XL7KwBpXdcpx1BxX6hk5P8a1T6E7dUL82xMmmSa7wJFzj387YvaNPMxEwYubsj29WQf5",
  "key18": "jFMCf5qvyL5EeVegbkexFDfYXGtgfTfTU7nP2uHScCM3UKgGHfmxoNoa5xyAs8mT32854A8fyLbdrLfLay5s5Wh",
  "key19": "3p9mKvXHE61T6NHTNoKBGzpMopCNRRjc5TcKLz71ihuYgCiWQFLQWW8itiWWYRm5AB8c64JRvTAhfH6Ugv5faKD5",
  "key20": "5BwXH5DkfJ9qjVaBwBX69p9yzPmHuo29tq8B2T3ZoLgXMKcwYmdmyy76uZhpARvuzC9xtsgoe7RGrs9Qek63o7GX",
  "key21": "5y4k6a9HN3wj1gGVDdUqsBunG96pj6PZ3xP41MYWsgrsLdAHKQcVzW3bhgSGFik8DZkyToBnvPUWmC7UbFdzY79z",
  "key22": "FpkQVr2e55MJkq65aXHFXzo91yoeyjR87Mf5WgDentxEi4wedMyeSYuip9aNwfwiCfMaBFd716AYS6XV4yHdXBv",
  "key23": "5TD716n5XUcvyGtAnCaKhd3A1jjhpipJkyb1fqZvPjNH7mXEKEKjCL8BgKe8XLDY29cabum1P17JCNbqTst2wmF8",
  "key24": "zGyTfZFr6S6e1Xqcbn46Sb7j4kLsjqi465hvuvj1pYyFAnxRuFBB6fYCH6CQgy91MvMet3orx4MdjLHHfYsC2hk",
  "key25": "45JCWu2PjztnLo1M51NXfCANC3a69PmBn6Khn8N3ZwAC4zt46bpWGcPu6CxGWmuGXfu3t11NFHX7vSDnBfzL6ftV",
  "key26": "322nPRLGo9S8eiW4NXpof3Aq2Q5BbJN45N5rt4bKSrW4Zwd9M9naTGFqBhPQ4XUCPXq8CMwKDB4TXwnZukHEEB4V"
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

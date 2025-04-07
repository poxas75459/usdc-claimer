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
    "3kyQgsckxM6csnbDvfaPKSx7BeG2Hh9VoqcbKrfBzbnaHYdapTdyUiFaHzB7yJt3zuLg2GDToegZmDswvvB4GKs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9xPk8XE8iQF7N7ho3MZK67aJ82TWFsTnbj2t3GaSbSqFDwMwv5ZUer1CLd9JSe5qFmCy37iuRgn1RT797nEa9a",
  "key1": "2BHKk52iwVGdn22yfq2t3KR5EWJvHn3QGBoMm55P8sHSXL2Tjm8o3zEATUBBjTxiHsEHTcpSbLHR7w3BtSRkrPrx",
  "key2": "5cTSLcLzfHmkdwJdrRUZGz1Vtyuq1H3d8fqM7nXZhjL5gunSivJZRDKQp5BpnPoML5EWN9PtXpb8KM5Ztx7baoot",
  "key3": "31AWKsTno5MxtDPd7C1ir9aNKRK2DHLwAV7ALxEVQ4hXpor3MXdJ7mwRbjtHP3Ygy5JAee96DeyyGTW7r9ZLh5xz",
  "key4": "3BnyHDfD1QxVgpPiAWeCH7yWoNMoFqmB9NcBeFMqRCt61hL1UU7vt5hxYZ3BjQyddA8ojt2FvuwRHjEjqE7DgJdY",
  "key5": "4YVoYBJXXH4DH9twh679sqJF2Z7GNwEVRTwdHMqCv8otybmbsedvBYtdbT4kzuKMnQ8UXuAG3eg3fdao6B9CUonk",
  "key6": "39gFtfyNLSCd64JbMRRBZDBMHkDUnH69s9WtdJkdPSQ79ZtUXadZhbivTxtYij3yReRR29F1z741TDUgDKyKLjHN",
  "key7": "4PMMGdsjNq2kia7JFSMYdno9zEbYRKMDRQuGNmYD5zSeDG6hdRuaSujvNU4zpFhBgpo9wChyR2wZ3TZqk74ozkgj",
  "key8": "CCRtRSTG14ypnW9bEsQQiYmQWvNjqVt2hAruWcAziVbg87DQqaVCn5Dh5HvcpdQ949M8oNPGjbksrsXHSuHbqEy",
  "key9": "4JKZGwvhn6dvmi2EoygrE6rX8NNtsfz1omo8Ra48RALDG29HiiLewvP8FAc7eq9LQZfUqifVZBBf7v2pgR99Fvif",
  "key10": "5TRXkpMV4YW4Q6M2ghTdPLuD8ph1huRsB7Xii9tHH19WzxGhgXpwEzmAZRCFdVtetmqeVPJne4pujgqw3JMD4yH3",
  "key11": "2i6d4YY47Hat5Su2fLXcvbEmdDGfWki6Me7WDZ5wA1pjmNBSEGqfha4D5tSymiq7ho8KytCmyFzpJWmGyPzGgJA4",
  "key12": "2KMA9X3MgTKpFawPfCUfMCiFUVCCpmmk38zthwCsFZFN97HorLdmrWUiGtQKEV4hsGJsnCzSCv5USiyfBCExY3TN",
  "key13": "2xnr7WrRTr8RZNVMvWCktpdfUNV3xmceeV7vma8NriEB9D5WvBtuvKVHPrAChpcPdXnyEpWhJNMjgYdBFpGNgifc",
  "key14": "zBjsSbsZAHwovhPgqTCBZ7m82PwAbYv5EWgb9MtouZj6cunMoHMzt8PQ5UQLJXuJnAQtbQmGEsCv4UZ4CAfeagP",
  "key15": "4HUfJcfmyEhHNUMvSYfbuhjb5md2qJ5nSgc6LibhYYa8a4JtWXBpJumLJWAUWFRFsx7PWQ4W5bhVmukeNSvgmZ5A",
  "key16": "38tSPgYJYfvUwE4oLKV4tiXiBS7czTikvKq5e5qJoQmZj5jVXxEYiafNPTv4H9RyF8dUxM59CsuvMUMnMyycAQ8W",
  "key17": "4JvrTkG8WfnzmPn7LMHTVQNyN1shafwVjv1o9EENmngKFQyFSfodUp6cfQq6vbo4J7QyKYdHZFHMkQYhmqnCzMJF",
  "key18": "cpbw1DCFj7zDWiUQuUBwcYV3EZagajqBCtZHkX19V3FCV6dQjqhm6FFNihxbnJu2vcms1MADXJvVHX6ABVEbT2x",
  "key19": "2WBprWSTaGA6VTDmdZqYAUagCiqz8g2REyyshcHLxsok19y1WSGqN76Xq3Cv2V7a4nMiyytp3LoQ99JEWnnsRC7i",
  "key20": "3oTByGjj3hGSzq3GZRxMeDJ7JkdVFTg1NscUbTpj3d2rDnAwLgSJB5Jt6EjKXnbHejGp8Nc5nsEgCkWifJAfKgd7",
  "key21": "4RX3xyBQG6apqbDJD6GKrRfZqMft7ARVoCd2yTu4vg9yZQVnx9YJusqoZqcZ9oa8M3S7uv6zfzCwSp3TgpwXcPUz",
  "key22": "r49HFTqQK8jtYHq84vHKVmEsUPbbiYVYiAYQ9ULW2girKbr6Ks4nj5FzdxLZR6tFfE9UAFyxJyqEr4RF5Vbx1eA",
  "key23": "3mkSJWNVXBwV1DcEftesxB6PWDieyjoH2R6UHWDT2ApfPS1JYF999hUsmMUS4vpuBdpTnZgRWCLBVPtYzYCcexCs",
  "key24": "2VgxLx9WswuLMFUHLWX3rSc9H98gmgbp2acPn2g79De8RbHcKcRN5d4qsEh3LmNNMpu3AULuQGLDE6KAhCicLSzn",
  "key25": "5yxVPJqHYuUbwfz46HqWwbrs5UB1gr2XGVsgE7e3psX41bxeDzcsjQg8TU88GJrcn65J7hdJ9vL55utFVfqHCprr",
  "key26": "39rDupb52Lf6MYoXGYhYwC2picHK27BSJ1Ua9f5pXUAXjB2PsJaWV1ZtsXP2zQDYtY6JoSU1oZ7YZjPVXQWeM1ES",
  "key27": "3z2NbJTg2A1cpxSAgwXQnDhKSNRFb9yiGb3n82AQ3ufGm3ZpxPdEkt9VgeD7dzQPvQkN6u6QWsxYaZD6x2HLu4F9",
  "key28": "3eQbg5HXGu2Qp335Z8fJsrC1RX8QusQH1xKcKeSLDamN73MMgERtrZ5y273UHtvkeTiMb5qK1WM7Uyu84TiQ3Cqp",
  "key29": "24vfwdNH4U4LPK3N2gK9RsbLr24jmwnCZB7fvS6pQi5g5aPbrK9w7ZK7FY42Xv6sFp8KgAUGeq1vWAPGcz82CdjJ",
  "key30": "57Ttz7DkegeqwBiupQey4hmgMyAZzzSnmWCEpnW2UAvC7in2Tq1KxpACeirpKjyaTd5J65sAf3rynNQP2RfjQjwh",
  "key31": "5dxwe226BhGzzUQPK5K22ZjHUxSThoVoCxa3AgoFQCdFYUfFQG4rWCpYkR1AM1KnNWMybTTSrNKpVE3AJFnyznPk",
  "key32": "2GQth2F2beGCqAenNr95YPR5yKvMiTdnKuW1SSyUhuk6QMSibEdiNFSitMNKAXyZkqJWL4PXkLMDMQgwCJzMCwGi",
  "key33": "4HZfY4TfaM5YXcu1tsKqNHJRrDqWQhoyFinG5kUo8irr5dNfkPMSXnUXaGSnEk4bLcC3aPZEGLVVmzpnp7CUAvhg",
  "key34": "4cfcT2trqkMsT21pv2xLh9gWKZVgj4T3yJcP3fhNYqReJk14LkvQmQ3x651HNccUToEtPnetPTLDccUFoCyxLAnQ",
  "key35": "3vdbfEZn5K3qJ5F18vPXzhtgdRUXvzNJiRktUHjzuMxEj64wvGjYtXMdNuLxhBobGGxYWQGM5fcNLfqMP6QRAQ4Y",
  "key36": "3Ft62eyocVLwkrGTMVKQ2ntyPjAp7UvMGRsZFwEsoTURmfC6dqSgXRMhnSKqQUq29sj6vyXBJ4xrCWn1tvdnJXQa",
  "key37": "mBxEf3RUpAfQvpJPyreNVH3C1jqEeFTMWjDGRKwceaDS4Bv126Ta3hHWWduQhGAg8uJUHcnnuKRcH9uE7jeFQKo"
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

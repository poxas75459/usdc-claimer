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
    "jSZMCVeVTLMZEbDfuhRdZSXHkB5zjG8dQYsu3ksPjeVWY6igdTLAcJFbihZzByrF62KhtXxcwUPAFr856fuFLaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9E3dmRwF8q14G2PKRPmE29mcNUgT1ACZMXxHBhRNRhYEtPfMAPc3EBZDn6Gqr4jkEELSsKRrXMmErxpvEHThbx",
  "key1": "5W6Rs8pqRfjJoGwKrd8ZQJhW2ZMWJBiWKASvrz2EZtLHTtseBMJrzzwcMAg6VY5CfkHnYwy6K4XD68BE8XCwcBrA",
  "key2": "1Aig1CqYX6AfttbyrfTvjymhrecDndLTKz4F8Vaa1NyFqafQLz2FuEoJBmuHTMsRzpvCRkunihyJq6BR7mD5Hqs",
  "key3": "5Y6NKSLjY16hNeecRh6K1xdw5aZz7kNa1Wb8D4anxEjxQzi12oT2rnQfQfXTNPQJCQt46XPC6GqSCjje3GaVR7pF",
  "key4": "4ppXwPduKXakJwRJNVeZU68Nnkg9zHyxdRagDmQYbwgEtoCnJTMeUXehkquksxcgMXhbVdtDNM7SwVjhhkefCTcn",
  "key5": "4KaknQcWgQCvKirz3mWG48qDDokvhY6ZcRdakURdUnXU6rFWeSd1N2WdhxKjRzamtB7HEqTFamye9zthXa7Hkh97",
  "key6": "5gkjxydXjo4XTwoZm7DU7yVHnWMMWSQPD5PaurLLgm1USCQsNvmwLaTWgcQxRXb8AFfC13GLXpAAXg7n79aayJZH",
  "key7": "TPxmX7g9yic7VG9Chm4NMLqaNcQR9ypgcJfbCE9NAd3Qy3MZPzLqGBoAbK1X657DskKUxAccrQmW57MA8iVi6qz",
  "key8": "5vguNL6FubiWe36jyWjQv9RiVQ2fQJDTJctECbGjKaTBc8bwHM3pEbS4T2z3sUD5z1h4BxHGZqcpQX2sbcSHsnUj",
  "key9": "5c93aoGdPWgdBpSFY4WVM7T7FPw1oHMyAAeWHyGxBkPepwfWSHTMx1QyuWLYEfdDGbaJQUUSXkDfVYn9vMLFuQ5",
  "key10": "5A1L4N5nCWkD76CcNB9mzGxkqPnt159V8B42Br43KTTnaPjDGhkNshcb7Kwi2UGVyhNxutw7CmffDL4SenjVSYRd",
  "key11": "4hhqPZTyW49ESUBYnadWxpEXxQnEAuECqZqrUQMeieJ8KKqwey1awsxEzJCiwcjwug9jDnjMSS2tMF3CoNFJw1oB",
  "key12": "DKzYmoY2iG7QmJM53BZc3TM6YSHgwrXgFfiToH7yZugtUkzNBbkA81qmAeU7rbf64ueNEkFbCT3yuq75x454Dxx",
  "key13": "5buttrhSPaWjKJMxcFzZ2Y4jK8k8ifNeJLfAXgjr1HAqsCmXTr4tLHV4Rn6WMTiUUG9skt5ZGPnr2paMkYukDTBK",
  "key14": "74rYupbfMizEGFmUU4Yt8YAN3KBph2W6XTCvqhW3noVM2FokcxgvR1d8Bws9tsETxFeSgBV5DeXuhT5S7ZFMbza",
  "key15": "4EVR4ZshLwCKfBbs7CeFsEQTgo7aJoJw68t7KDnyAF9f5A6G1nMeXsdZuPNhQD2SAvwcSabictZnU7MobVFJ3b4E",
  "key16": "VL9ik57fKivQoXS5RFB4zQYXf7YknWztWtePo6oBRJtizR9ooxxfF25twxVHsNv3uuRLUhr3K69FffeiSDnaoDU",
  "key17": "54XmYG554cbAqqLcstpq9dGa4xsaTf6TenbyN3FnDXvsiL1yEmZ8x3revNLHSJyFrmt2XZhS29KB9EHQRdcCBgxC",
  "key18": "3GMjeNB8yWd3jFtDAnchWuzo16PSLNeZ23BaQFnpSrjZpqyczz7DtZStTFmRk3AaFfQgnkVCJGPeNf2855eyCpDz",
  "key19": "5kSdmRe8hUjHTQ4ZYzwDuMXF3fCnNQrBXfqCBMewqoKbA3xiTztJMGzCZp5WCDaxMdvE9akGwsL9AAoSRTneS7ia",
  "key20": "2uV6ry7ZAWUCnRYQZcxuup8YbXxZWHFPQCEDPyqPQE3ogmYPguZLdqa9D9dE47VZWAWhLdr6SghrgF5JaX4yFfAW",
  "key21": "4y1rKBYPVjDLkJmKR5QTEc9y763ECqg6VALxSEziotJrL3UKuHmsUPcohdMg1Kj3CAxXwj7RtrvTc6JRwNk9b2BU",
  "key22": "3d2THScfxmvLKJXvoFpF5e5XryR7bDjVr1DyV4CnqKfTVZRm1T3xBScVk4PJyjJBnhgCjn3PGsjym45cfKnZ3g3k",
  "key23": "2R2wYW3K4zRtesmGdy8pdr6LS6ZqntuhcsE1oQYzQoZFvpjLTwDe6zVcoeaFupWZkNc2VcqHDSjdMmVHsXwFNMgC",
  "key24": "3CX2UEcMDuKYjTRJrtSrFQEoV9QD4EFS8kyM3MtFmS2jVF1F2dFGXPyRaqDiWMQzd5oZnYYQaAdny6nt6yM6r9cZ",
  "key25": "xw5XnADnQvrySUC4HCKQ2MTTbcesBtesmLRMgPnYZJnmtyMfEg4XjKYNpqbNVjXuQvMDdR3WquwVb5YvwzGB6zr",
  "key26": "ju1KiUUVzr46RAEsvXE3ENQuU4shigk3erACSPjgdDUYpbHV4r9efZDH8Lp3ucuWJbFZu8ARGdAHj1vUhW3XZxC",
  "key27": "3rmvLtaP8McJKc7h73EZ7zkqVfbcHQpfeo83WiLBTWkvXcFUZcZ6R4ZqLD6eHDxdMBAt8j14cPLYyJ6EfpNXh3gF",
  "key28": "4ySghMrCA2BAQLMdcZCNcWwEZ3x5WZTjwR1DxBMFE5qyk2gG6VxomkKLBtC9bQdg3756Nx89j2YGTpPT3RLozyuV",
  "key29": "3getmU8EAFfbpjGWp3kxCw8hPFdbFpYfTnGVVkusmLsXQHqGvqgPr3rRbQ5vB5XoYhy7hof2aR2ZqaZQouW2LPEy",
  "key30": "5c6kbowvW4H1Pp2jDYFwYgmSx1e3xS3o9UayEzhwtTKPDQt8cdnVHz2zfc6oYTgCcEtjzWDZrAknCSKgWNrad5c1",
  "key31": "1F22vBKpWuyxvVGPp2Q7XxGi2hofzbfZKDwJLeTkKWxHv2hzgeP6NWpBQwipr96EFidWmwCKWbARiKaTZ7cazXk",
  "key32": "4pKDdQSndieCHoDeqVjZZBWp7wpZHttxi4RP6Tqc81nBjpnCaLEDQwBbsbyaxKA7iB8p4Kx3GTgD7YBrDFjLQmy",
  "key33": "2TtyWuLoeCcqGcY49PLi2rSQzLJbUHFuDpuPTFAZAVKL2BjES67LDAAHcNSh7tDmcHD4shadLG8tFtbwfm2erv6t",
  "key34": "2FdPvBwn2vYfwCR349iA5XsNV2EYFC1SzaxiSXfPEKB19URi6HpobHRUkkdmdUvx9Nm4okur5jRjP6974LVouwhc",
  "key35": "2VtJz5noRvbafgBDwHCkjDiJyMzKSYaWt3DLSuS3mXVXMNN54Hd9UdHgyi7QvnmKBFiLy3hAJVihBDLrynDdE3wF",
  "key36": "2pQnSgVK2MUqGoqcDdh51FiZ5BSXKJagRRcvJetsv2ZvhyRmmVG8NLnJXCc6q5xeJ4Fc1Rve5y2geD3HJ5Dt9adb",
  "key37": "2hNpjinJvTCNohNrXZaCJ7zv8EXs4HkNQfsWnydkq2QuEBCotF4UXroTP9evAopQVWKg8y9d1CqmFtrexczYQ8Fx",
  "key38": "qwiH3FBrsuTF19v6ypgtxeCMVQYvebriQNs4d2RkQR1dVEgrfPex3YVHdypwgXBnS7gRCbGCKnvWMmjtrf2TJJx",
  "key39": "3FLnssHjUgpQDmvU6vJAD4L2iQQpif1a1v6zazT7JB3Q53wKsp6CFjkWfhYgXbxcrUUPYZ6tYvDVRsThY93eggf4",
  "key40": "p5N39xxBrb2qnw69pL8M8fjiVAcrpZbTGjAX8QJSvXHFDZ5sfVvRghVgbHXdqXGA6yP15XjeJMZzbLfsvbnSPF6",
  "key41": "3my69ufpfXBF2SqM64qWTrYFdQ6meWVWhyiLTCGw8TcanCXJSm44NeaFUcU53HYJGwEAL69K7jr1JY34QJjaH1wn",
  "key42": "3igmoA2En1BGPD6d67M6z7PCLUj8Q3nGKAzk41cgHVMbeNueViCXhhSUWLz4pCyG7s767f4VZrAWASwdQgZ69Dix",
  "key43": "22jXSkUA4QQ9rR1JRhrUvXuGoWK2WiGwXf7a8k4WqX17Gv62NQ4dFfvE9q76y3VywMbKM5UxYRNifeJybrF7SuTN"
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

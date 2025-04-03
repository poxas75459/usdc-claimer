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
    "4beW5JS2yP4syxmmju9b9FgP8gz2Wx3ifj1aQfSykvqZwhUxYTkDgtdqSaKX4qmT1QWTLtv53YeDpn2bN5gMReoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31VuRWadebWuTFmgzmHSsjXrDJpBGY8t1hebspMLhdDLz3tvyZyeKVJCkyuBDLc2AzucwwMKFnizoHtrbodBSjrg",
  "key1": "4c9YgA58oZfLX4Ai63ekc8zkQz2GfBxLLFKaNhezgPFQnoSc4xSUQoY11HyCdrHb6YvFGGd5xZbsGDQ7qv9Srcqc",
  "key2": "52RQY7idZRtePXnkeWEBWTb3efGwGkcs2QFQcmAa8RFCZSSjM7geBXYBhNFTtZ9QhkqffWmreuq4aCAvGeFpEGNo",
  "key3": "KYVVVKCwDyRvN5UBzb9PeWKERJKMGwDkE1kQySVYhVWvo5j5HHKEz2znZ8iCEnNB4yxgXcx3T6vVNUXV4nKctXW",
  "key4": "jLcwLNPHNpGxfm3jkobYnDHnbwRowXrBSBZruQUjeJBUisaCQYEHtR4YKL2W9ERBRmKkoZRhCYcThUeCRk6kAbQ",
  "key5": "R3b1CJNKgHFMt4aQti9vGLq5ctmwJkZJTgwh3him4AX3piVyjZFggdXoQzMPYXQVF78Th66KrmjvXS5zoDp6faF",
  "key6": "bQSFAspTCutewEaLHDi9WHbksPj9WFjMMKzGmx6KY8D7RvzvD21xpYqC3P3bZCeX2GFu6LrR7sHL1H3nsdYwgpa",
  "key7": "23KVGtw4qxULaRw9vkafQfvyy8k82prqEKjaFGQSRn8qzUkAZsssUEPB5LAiFLx1uVYHms66XKLxWSPBDpUMvnWF",
  "key8": "2De5L2nDrxyU817NFUK1qjQU5dKvVMNKNVNjketXc5hTnTgyu97hEG7TCmQUVvkc4WfPae91f5xigbTJBA8UdYrP",
  "key9": "3jGTBWayz3F2mjgaL2XBYoBENiGpGamkXbnE38D4xDZ98ysNQ1iP1KMRPW2mfPdgiqACTe6VteGdPCcsu7eQvCRu",
  "key10": "3JnqW5FUZyTwcQmohZgN3nzcmFL1WmwEdBjLwejfkdMuYMwwhPGDpqn6ydJAEVsYLTUSGtuQrg3yBYQx98aYxTUt",
  "key11": "4bSyNxXSDUR31GXjBfxUJE1ENRqKy5JuwDvq3cKdmU9SrBRTnWvoAvNwH2ai1GY2YFn27yQ7icWZqjf4T8ybBFZW",
  "key12": "592Lu86VpPVjuESsx8Pqv6z4yLZGhMUHsJmDinpu967EmNoxXgJGTyVecxM6VwFQbucATdgC2XLSy2a66jvC5GJn",
  "key13": "5Rf5LbSfccSMR9MCVF9B39ZhMuVYwUGniXyjs6DJAg61n1qYpFp1fouCCcAs8VqFvHxAA16iqz6TH4jBLMHFY2FX",
  "key14": "5AiYWpYCJm3Sqy6TsVkc9hX7n4VELrewsk8ys2eozRca6zXTtZRtGaurniZvffdZqTpbTu7g4KND8KoKaowoEQQx",
  "key15": "3uCM2P9hQKkHHdtqTQUDyh53UK7ETJuGXYD3PC1JbvYYSWjmfF4FJEGTABgb9bc8RaHx1T4W51RadEC62AsGjxCT",
  "key16": "5mdJ2hJg2fMH7bhU9hrL7BzqmVMEi1gDF75JbBJrCv1eG8GCWjiNRXY4DS3W3Bf3hjKggmC81pMM6NRkS9pRF6fc",
  "key17": "38WfjHpDj7tcPqUDKqbuhKzfcStqYu4XWQ4HnT3msdQ4yTuoTVpsPc1ozcUsmJwmm3EzurDq7LPcQhvCxe2Rd4EE",
  "key18": "2aU31snSZWEK96ovs1fj9sJWMeZs9j7dXnbycKRaBmpHwNGXTR9jyJLpRRREqDUWJ87yy2y9ETREucxBqE1Szir6",
  "key19": "4gV7jcD2v6XV6ptoioXuqqE2La6tC5cqpggNdDfgFJytWWHCe4eBEm4E4jrJWZQSZg3uPgmNPS9KhsKbPMHkg3qc",
  "key20": "3dkj5MraenMfsR6E8UErwTnFrHUzaFYfxm3ykXwyUmXYGQLXkgaPgFevGUAJeizKdp4CupuaSDuekSk9pi7wyg91",
  "key21": "3EycbNfcVCux9BzZLM4ybNSY3DVCWV9YAK9d8ULvtPWwRjUjbTPSanwL63W8zaJgCdAAVVyqk1zKJwmCMo7hcUFj",
  "key22": "YyYMN1RVAXU79YYqEdkYwdn8A3e8c38orUqYM4WMvvXihDMgZfNFbeqSbZWRPaFsoJxdsGEyYZ5UWrKDBQcrdcx",
  "key23": "zfsLSiknkPML2tbUM9mscHAiBvcS3bWgbNAs4uCT5PyC93iEvoH88TyNWH7tKi7tKED62nhwEVqzZB7zBSPNuxX",
  "key24": "wubvzJN3R7Xk1RCdPnpE5E2VUvxy9QrP1qcYoh9kdFMmP8htz9m7giUUaW28u1ASiWxbCCr9nNDA7Z9WTBuFtXY",
  "key25": "2Jc2PYPpJyYewzuNerbGzeXYxMiB37c2zKwR3xqnRFqPo8Hazour55abg2pBgCNriPEAfTifiz3p1fhCyGaVe2rS",
  "key26": "AaU1Bm2tcBTSCt1SLYiCY5pJaKJSBYaCTiyaRsroscj4HYsBZe6KEpipjeXuQeTPbgfurrU3T9TuhGVf8AzjmvB",
  "key27": "5Xoc3Q1vomvFP7wnZTcJNRX2xGu9xikwRUmki3Hy6FmsFwoXa8g3WujXu9UN7SxCE753Zdid49xTx5XuTroQDcwA",
  "key28": "5GkXDfhkEFhPwQTQEbHSGjbshpSYKKrzpCXMZ6SZe32tjAGchk7NfaiTvAAtsCPcQ2rxe9s4oKeYFjJ3tgJmEUz7",
  "key29": "2QKegu6Krik6aL3fAeohi2rDtpVyVHa438d4FRXNZX25RDRghmw6ycR8pbguk9hWRzTpyEeH2NGhiZpHKx2fLreg",
  "key30": "rfwNh1rt9z86ER13r5RmUN9oRf5CHNaRBWYtyTuRDSzWfnAAMfC3Hcr8LxXWcXTHMY7EBwNWQx4DYRKQ5aguZ14",
  "key31": "3utL1jeMo9FRYmqrxj76sQoofm5LQipor3QpJWFRv1EZWhEeAhLFdWFyeZE1jGxSppyTG6E3WcytDCE6ijbA2hgc",
  "key32": "3RQnbRwdJCHBpEAJzJyf99m8cMMdnwVLEPUBA3bCcwzW6k3AQVpYqaty9XUc2cf8jJjTGsrKb1tmKbKNwboyv2YE",
  "key33": "4sA3Dq9ZihD2HwXb2QBZam5kpoJMHdj2BST1n4jwzjFhZnuCMWnxnkmVkYzWeUfgffLzuc1SqWoruPJQkmU2YKqs",
  "key34": "51ZMNbufAhLiiSEB7BxqiZW2L3McD1h1XNhLeFf2KDZGP2PrxZJ15dB5L1ZFZm1gXCgiKe42jTkRwwup35yYYv9p",
  "key35": "3CbueJ4uePUVc3feKn8M7bjjg3nZDvEmk61hEwJpnu5GDFUrRDhdm4UzSBLgfhvToDPMncHgmhoGnEFiAm3m9LaB",
  "key36": "4KecF9LtwqhLvh3hKGCzFWUGrohouHLaczpBGkPbwY73v93Z6Dz5yNb7MkyAftqjt6tqmxPcft4NeDz5u8ivuiez",
  "key37": "3w27w2DAGVoSMDECehsCb3ukGU8LmYWVUGvuTfFto3tasZsevVxBWHqY2WNGxppJqumBXBJfPz7hSDvzmBJhXudm",
  "key38": "2RHGveKzAjMannxpW1oXYCJooeydt7SSPjbzmaGBcqKC7ynYeAx9NS73SGarz9nAYp12zsLu4fbenu4WAjHJHtte",
  "key39": "3nhFY365xFxtj8R5CaKreu5JQx4UpfLi7Ms9Py6dcvNMTZAPNzc869MeFK7KjGuMiPEmaJfPFyZZTYXW4Us95o1Y",
  "key40": "CJK7Ugg6KcjiiGU3H4sTGjrvNZSwHabFJQWEjz8Nvao3m7eB87a3v3QQEK51eTxApduw247FVJWgMuBqiNULG21",
  "key41": "3Gejps3c2KpiVchSmnXHoTics6JZFMLA67dpLwTLmvxpbtK2xREiaCtY8kGMVSuP3uKta6bqF1NH57cg66CNTneW",
  "key42": "26y7oqH72tNvnYPSzdi6NUex4q4XU6oxcmdFkN55U33hoX9ruyq9x7PbVwiHiCCnSAdYuiuCLtKnMmT8scuib4FR",
  "key43": "39WK6BczTjXdnzRx4bzqXVYU9RR4ridA5eip8BwYctGZPLmv1BWANdwVDFpixpnccqTiiGYiSsjz5AEWmvUw6Qja"
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

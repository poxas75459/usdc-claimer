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
    "2HayyCsjM6pgQLLZLzgZKsDbQb5Y1A87KiisRXGZTGCiJKDcbvLSzxAeTNHQwaojUB431zfNnGgALmqq8E7oFq7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tie85QVanYEWQwfyHXPghuxk5erA6C9Rg1nBP9gipJq9wSM7DHa1X3dCQ9LYXPqDRMADhwbHjFZSwaYwNYj169X",
  "key1": "3JeHyUQrKA7dUveQxW4ytmBYgoAQKFVBg4aQVXz5VE3TkJYFUhdWmno8UGuRfyt24yDAuECniJk5PX1Vizf3Xepd",
  "key2": "2wF3qHGcFqgCarxKGJQmMwkB4x8aK9zenBRTNYfqapaDFHckSJ3ZySQgNZXEhkhBaSshf9UgfiSwQvoV43cSqUom",
  "key3": "2T44rESzGXPfnqPPSd86C9SFXiEpPKvLErpTAodCZBa2zKxQCr5jATzD8X8wxyK3s5JbjwVRmNAYRKKFoad68LLT",
  "key4": "4yMVRt2bfrfsbZgJ9ScwRmeuRKhBve5VNqpuTXUkYwCrW6mfunthNMR77CTgWcrp2xKC3wR4gGdGdo2aRwc4uYgf",
  "key5": "6fQ7QACy4xz7yXdTvwsNQ8SMXMS1CnTQiXbEt3A7U3izQoM2J1thhDxtenpRHCwRfTN4psS69j4qviuvZUt5HU5",
  "key6": "3chgH7KKWcwv2ReCyKfPPRuiwaue8DcYeHFmu61LomZYYstHXSx2VKtxvQLXGCPD9HsKacSXcdQqRgXnhHrA94xG",
  "key7": "3LK9HMWBE6xUjsHbBBG4nb2Y18FVkfdd1JSeYXPidxQMZfA69Z88vRcBCkhXVNei3U7hxUCEwm1AF2WCQ3xYEQ9z",
  "key8": "2eurXRfGxWEetYh4TuahtSQg2fkHqd8yK1HCoSZx61WHg95hho56HY4VzxBX74JFzHaQQDR74mzWqpXcwJkM1sMG",
  "key9": "4D9eqSasXwD9piWtJAFh6n1Y4YDte9V6X6QW742cHFdjbhKX7MdXTUDS6dR6G73oaeTuusAQoHiT3NQXnawZxfyC",
  "key10": "5qEgssxvsUEQNuPLKvoKt8bWYKLSgfQtT9iKsmmCXWYzfYCHrARL4e97g9kWxmhoPXM17mHA6Ck5dgaYiQVWMX9U",
  "key11": "2uFqKk6xefFdwS1FKGqariqd3bdJkSp1CRbtYLXSXZAt5TBHVHGjoZ8tcPt3YXvnszsbhw5Rbcs9aHhHD4xjDuzJ",
  "key12": "cUuJzwid54eftVUe4Z1EdkAyw3uf9WHs1HCiLSh2udhKU6pCSwaPiyA4B13LyHbiZvkRC1UfGesZM89GTk61iBW",
  "key13": "7H6JsHetHaWqKy2LYg9gAvbB7uvY32cCK9JtVBZfg32Pr8mRHetVePXZwv6iY8qkg73W7S3qt1uii3ysHFoxKmn",
  "key14": "5gBVSB6vBryJNXtSCGzyxoWT9kmM9MJMqjwyq8FH5nZ5vni2PdVaGDfpRUabXkSg1FrynwotW1kA6RE5A4BX1aRo",
  "key15": "4J8UDFgMGwSrhCLVYtCjX7dLYVaroYgDQMmg97xAYUhhC91fMPMBDz2Wq4M4VenG9rRkwdLQGWUHF4CjmPEhkHrJ",
  "key16": "3oyLrFngHPP1hSZp9q1v958SW6Ao3txqXsnm7drdBvzjja3EjRik6vuaGq9wGDjGLWqHRH3VSRfP4SqgqWvUabBf",
  "key17": "2X4Gqi1SxHYmkVkAQRHEfQZneXGwLnWchQTogdqypCw1WeZJ8nTxfcL9RQ7fUXFTqyxPhZgbAKhMESsMMAE3rFdQ",
  "key18": "4N8ZDbEqffmw1rdjMivBSeQW2X73MYCRvjSvRKY6XFaYJDgCkhvQLUyPD28jCjuqjb1Vue4mrXBjo1U6DoyGL9Vu",
  "key19": "5zjMaNMzbGoRaHrnN7oAykXwV6hfFe9hnrySGygRs8cS1wDiN36dEnZy6t34ArmcHHLggozr4rX9XV5Tx4MwqaYK",
  "key20": "2ehvPfHH9JpUGxtNrzz3MjmPLHEMij8a7eKsKXK1FuPd59aKbooVqCZRozpkiw8aMHyGUyJHcsAFm967258jt4Yk",
  "key21": "3ZDGF4tctZE5Y9xge3gJ21iCjXfq62rJ3ZCGsQojqwPDxAmDEBZL4BcnRPxmoesiq8z3jP2fXUptzNsNBDZodCA4",
  "key22": "4dyMMfmSbBfh17UvyWMHjB8NLX5xMua7RbtrdfuXb4e5G357P7UYG794G2XiG6bte3zfcqgovFfmVw4D1XGBPMFj",
  "key23": "2fjPSfpMe6ahBuhLcNtKXru3tpfFwgwytfTFxha7VXs3WPvwX99pNeKsDyPW7Ebtdtkqf5YgBB9NUbp8Z2PCVLZS",
  "key24": "afmHKCkEWg2HFSUmjVmY7PtcHMdRnP5kMqwQGKCL828X5RrETbWAQ61oY61c1FabFgecpxuPSKErjSAY1vEha2G",
  "key25": "325LVpW6p8qY9q1SKGvxQsUTRgxHYUK3qajMJ1crmgpT7nHrCyeHqTPR6JZmg3JJKhoRZCN5hbw7did9s1fmPefo",
  "key26": "5jUYabdbf18p5GhSwrM6BeR6H37Pzj4ogaomU5HFpjRi4ZQ5dqMLMu9nPFaJtBvqSvbaxokt1zgPV5TMqdddfjZs",
  "key27": "5DBKH1Qmiu8ECUpXCEPaph4h97S4h2cjpbuvr5c3Vz9tTVe58z2c9KBVJeDU2DpGhrEGgU3oXFjR8FVqbcERVfnQ",
  "key28": "4hcvDfcYCPCKqTSS7XDNVDkffKjs7qCpaG6kWwfw9UBRAjYH8rLfKsXhSTQtupMNPyJUFMSn94vpjrCk6DEojMNG",
  "key29": "3zuGfNdBXnb116cGTuDCX4r7PrSTsdSAfCeoShLcQd8jAQz8gEv8qV2YFZw54Ec8PkrD5zeFpe5KoArVckhNXNHL",
  "key30": "5eBHAkxmwDSGpUosbNdxyZpaVFNuBJsCkkABG1s8zzjy1utDLWawhb3ps2Tdzy8DGywRGRNnq32vLk9NS93VgMGU",
  "key31": "5Ji72aLpAw3SJXubG1m8cG73YajJvZTR5KsNqzbusCHAXs7DsLaCGRXLU8DgD7pzswUQ1BTA26qCa8ZdMh7gh2ds",
  "key32": "4nfpiUU2gZLuk2dQWG7nA3o9SwM2AUJiQSzGjCHmL1xA9HL4P5k1j8hH8DU3TNnwjx9ZreasyzkVJzN4Ba36nUq2",
  "key33": "3NTbVWr2muwV354cZEyZQtpSzFzNDY5bjmhsgtRh9TBKvKL4EL4pCg3Y8itjZwiYJXGcJMvChwDipbBNruLfHCfq",
  "key34": "5WEPyCUbXgtfvv1oCLSaHEbGR4CidBKnuZP13BGu2mrYSPCEBZwGfjYWdsCH64gxe9Frij3Zf8gke7hJ65CgwdxB",
  "key35": "27UorPf4719ZrotB9qx2zxS4pJQS7rQDbMJFWS4kYkEmaj5waK69eXDYSUdYnyCAkyLq47yn2xPatLYqaMkuDV4f",
  "key36": "4qogNn8J2DRXF5QYDB1S191SMo7VchQURrYvKWX5fHWwMDf6vWEWRhJz7Tjzt9Nj84n4evNSQvqcvZNvWPV97kXw",
  "key37": "5jq8kiePXZ7eDtsW2QL9Mdp5froJv5mYD84d74Q2cdBFHMHRrkYabYbjiTDW6vBudCvXxfvQkcvCYP2ZdfH6pQW6",
  "key38": "54CUH1h1wnAFcMb3k4eR778rwwY24XdzZNUYSan6JjGB5KiU94YQLQWEMev4FpkJRUSA55bwAgUDrmTxQby4BHKp"
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

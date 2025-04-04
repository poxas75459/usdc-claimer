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
    "46obk8izNsKUoLaWW3n9njbjDVf6Yq6g69gi2GZT8WEQpvNktmC7kYDKa4NG7anz2BXBxBmPXWTvZWhSQB5LDAsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4179qKHjJSTYVQDFyeWKHNype8U8AguMUP738XoUWpUg5gp7CAN3UddDhsxukFdgdEdvWJQQpG5r5CTUZU3W8peR",
  "key1": "39EGnPVnWSxwVc77Z7m4bros6H2QhuFR9NQHbYitBGC8buaQ5dWdHdUg4bZCiCeKWNfAjTqCThFGFjuTePMDJchd",
  "key2": "34ggiv6iWMhGyDMNrAnen8oaFc47MpscYn39aUFtFym61MBevp3V1kvHn2AsW4WZKQ283QP4uJU53N2xb6X45ytS",
  "key3": "2TGzJPEQRT4v9DEPGVec3DEymuCRfpcMUVyqdWVFK7ZfMfyCu9f6g256DNeSmWgurBSRyZJyEbaQgpfxdKW1Mx9P",
  "key4": "489XMrDa4g5i9zZtjW8Rgsduk344zqJMatE37K26ee482axxiwQtfrzxvY9YtH3JWAkWh8GSqREPN6kLE6PvFmrK",
  "key5": "tfAaDLpwkCX9XGSeqU3oz8BJCcKfFpz4D3knhxkUQhHzV9YHSiT5u6gaE8SYPbXRaBP9Jx4Z3gpaQ4fDz1Kr96w",
  "key6": "8xuaVtJ4rzNDE4BUrxuFeXDuK8DnQ7XEdyqaiDt7YabLTXzAd5zcDizeNPfzkuh9b7DSc51ytPZdzaSQkdAohnE",
  "key7": "5DLr5cjXrkkrd5M4whHhAcczt6MdeUapkNw22b7e2xqkDWg7FrooKXULoD3sQzPAzsiw4vocnAJo1DQCDqSzPd3B",
  "key8": "2qmLKgiG7jHpZx6gRbYhWkHnH1qfqyy7uyhj6e4JJ2odvGgJUhS4iFVk6AnSxJYr2Xie5c1nTjgCgTv1UdfWEt5L",
  "key9": "2xZHNVdkmTvCUZmkwyyFEtiZkFzAw6Z8LdUWdnyxzNzBdwKoF5YHcqSQnCLYozWGHZocnt4Jifo1VKFiVnAQexMG",
  "key10": "PgQGNFJgscJPT36hytZwkAv1ARYCumuNGsy2in5HcugzUzo3TeNntD34xr15BHmBwdNNAnch4vdwHfTMEeMHrDC",
  "key11": "4oYecrJ15aTXMq3KodF4daxL6AJaE2kerXYDubXZpovCK5seC6y8Anejn7nvfr5tdsZApvpw7TQXfXFreLzUSQ6W",
  "key12": "5a11vxrdWkCQ3xw1zqiAiEtA35uYMxkzQoog6YpgC7eDjoVWpcVvwerHZSJjUWiYeBpLMEh3gXCLRnm6TLj4LyMv",
  "key13": "3PvfgCEAr4EuqaGQFBN8hEeSFPT8BXHZyYyte3aG9pSsx6cTDQBEATShDScpaUbTdf2VkZonDUJgkDmPfsxTc24Z",
  "key14": "5vqHnE3rV3fyCp2Acn8BozDsTaRb46fZViEF7wFJRuravAmCTTuALa63EQWZ7QercPcThaijuS9EXsE6Me6FGBWh",
  "key15": "62s9n1euArjr6xm8wfAEax57uSHbvw1VCmTpwHbWYYRL71ZfT9pDw2gNVyy5bGY9dwJJQPz8WpdAyKgrqd6MQeN9",
  "key16": "fpZgmHTcGJGd3SwsfKvpE7QFBvGAUMMYRzs6ooK2HfmcnN6EuKxSqnSHsjCvvnTphXeiDqs6FYYRjKPpvtvbQ7W",
  "key17": "3pHVvcMbPVtHNjibzBvPY1wKQ6KNsBGvdsKb8Jriw9HAMuhHvFYxQqxyJJix6xoauar4zqMBUkpgJD6SX4ZUE96p",
  "key18": "346GEtdeQ1m5FjUFT1BeEiGaaaokFnLtEY19nC2ReVugkzAhkdT833top3mG4aA4c8uHt7uBSmjyiK4Z5FcZgtnw",
  "key19": "25FT6gUBYwZPwxQmkoM3fSfq6ne6R77wzDVjkKg9DNbnNrwPmdn5dWKCZ6C7q1QXtBgcQ5J9jGUGReDY6B2tuK5s",
  "key20": "5HoFbpGnPFdNKSyZQpKrD88eSZ1NdNLu92NvEPV2rWNjWZyuqJVZXDoiyRtcGd6Q238GeFx4KAZuSJYe4CbSz6iU",
  "key21": "BTfSnFykGr2b7Xok664ExUNL5JBjjRN6zTH5dv241C8QYvPG5864RvLStpUKStiSiPdTVZjnig1TmVwrquq3vei",
  "key22": "3dtsEVWEx5na7jiFtjsr2dpKwEM6yjSYUaXuNGaiQsCiKDoE4crCP2xYzQX156pygXPtLns8zMAqr1eF9LuqfmNA",
  "key23": "3Ue8nSamKSf81Hy9xKYnGwHPcNh463tUgBVASvbbuXDjXtZ8QKmqERvXFrDGvGJJ6JjVWjgtLuf9k7buJA5VZw3C",
  "key24": "2y8mcw1ehQnmg51TNQYCdgxJ3GL5MtEEvAjHtwxk49BZq2QBNGCGAj9nhVFWGEupu1Nj3Cn4xruwDaKVmW2GH3mt",
  "key25": "2Zj6ykwgPcCQq19j5zcKmY2tnoXjtp4BDtdVwGT5J2Vos6UDz4h1Lu2BxUmrspDPwHETLmNyzvz4BZ4GcJ47jU24",
  "key26": "2RHJT8Pfv5jZJMUTGntCwiD9LMmD2tGh1fmchD7Wa7EDzmTpmcZint9Ed2hUN5t7pqpNW5DrcJf3pqHTVFzRN4xB",
  "key27": "MdXTdJuBKev2wUuuww1geZuUC26rs8jnZW8Ja6SyvYCUXBZxqxDz3XxTR2bJXfYtq4EkBau9pnKde1H68puDr6K",
  "key28": "ZsRUw1oPReev3n7s1AWdw4fitBJVQvJPsbLczgYsWj8AWB1UhBmnoGZ3PKtwbRjDYiZLC5p927DbVCU1pznD3ja",
  "key29": "5WVYpMwHq5h5kmwaLPPCZq9GaG7V9K6JtqqcCZ7jhPFGx5xo7xXmz2WQna2BDNYCMcAbT6FP7Ue588E27RfgxXGu",
  "key30": "4ShQ8P5xLBaPNMQ7DR2W8ZjueK2hqdAo5WT1qTc4d5786WeBnLpTQYiZQiwgxA4u2LQGK6j9RgwMSbBsZBMEzz1Y",
  "key31": "3stc4NQUzaTcKtwkh7MrLqzX4G4yifaUDbJ78a87BN4ieCMnM6fiUB7GHntx7RYowtsvfPcW6c71sXc9jfkxJGTv",
  "key32": "54vscQUVdjgzL2f6d9vVpU23YR9Nhw27roNVVUuXxATWEbmdBCm5S1AF1QtfNL4DFSFthbFPb1m4ZXKmXxjivpTc",
  "key33": "zgzLffKPWMrXXfurCGH3pzbrq66D9erpv6Shsz2Mw74ZANAXnakeKeLtTNVDoJ3WA7AAsgpHbgFQwpteTBox6MZ",
  "key34": "5RHeEZmDQFzyQ6ca1UVPqoesUe6sfDc6CEK1gRZvyxHVXHoWH5ACDaKFDfUhhWPaWDyerWNTccswwQAG8v1v3ixp",
  "key35": "2DySZxRT7fii3WdJTfhkPEEV76cw1oD5GZpzwx1hzoNq54fKrLwxQQtshSFQ2DdyygoaNNhyAfy9QUqdxUSrp2VH"
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

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
    "51jYxfivBFrxCRWU7Jg7nDhtDuoWTVN1SemqNaQc4rTZqoZq93PyNezMrF6YrkasiwSdAxwnRReukd4rotFegnK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pw6jdsXVpNz9xeKyNkMxwxURgKDhFngQpGBZcSndC6oBp1P9Gu4bouTeQ7TKhk8Ak6N1GMkjVqj9tVJzXnt683",
  "key1": "59Q8pdVx5YYxWXxRDtPNUupq6b6AjbEzsDkXaMwosANhawEfb8YYJn6AnsY4vR2DTnpTnjfknSSKAKDc4FAq4WQL",
  "key2": "5FhqFMcoSukdF5b9JzQvKK4gq5VG6BCD2Eg25vH3yTRWCwoGm4WDU152XquCZSuunMQVaC9tkht6McaqM8kUX6CY",
  "key3": "3U4zawJZWeoxkbhQZVcKZfQPoR26MJkxWmq5tj9zrjdt5zBNEh1mVDHthFCNG2NLXwx5PvjaD3PyokAis79j56L5",
  "key4": "5JUiuSAUCpxEFur9jjLm554sLdAXcXWEngzbAWgkCxdy3hDLnJcYSYy3cFsLi6vRpjE9S9GCuxLT8RxTv5QxD6Pj",
  "key5": "393YLNyyMK18yoWAuXNmFopszi7mczRG2dBnFa2hCATTGABDcht7RWEZ8xzP2fXn4xY6WsvyCzT3z9zqpQv5Cb12",
  "key6": "4Spc7sfJUCqr3YsxCAq499nvhQu9dyg1yzd7esyc7JoeQWSpA8poP6QnbV6WuLfhNZRj24srPwT8zoYAjYQNfChR",
  "key7": "2nccfZXoidPvh3xw2dqESxECoTVXP2CzSK9Sv7AMrKfRR7XunwX6CxJmQ8yv4Xj5JwFe6TnXXfzPG12ucoArqh1R",
  "key8": "esKk8XPKV3vqN7MQXMoWAEeyAEgBDWbWxzQ9cjtaAjJ47P86G8uLTs6nfsj8GDnHchASktyJZpAijCJEcohM2n1",
  "key9": "5V6Bf7xX5ThxyxtaBhXUSvCMx9RTGxXv4HuFdQPpEWdxSuWPFUxCkTTJigVsdvrnWsT3oGW6LZEJqymwSbnSZigw",
  "key10": "Z3NNYuCWjn2iy1Hfwtgj1UEdtFYdWBXAhR35zoe2chagT2qcLpQrXMHQbN8idsKYTHG4h8njau7SrV6D1WSsBvN",
  "key11": "QcoQRujwKqdyuJNqvQSj6kBkeDhNdkfSx7byUkA8m9YEgfoukkTTNk4tGFjuDLs3oA1TumMyBax5mtH1XNojjNE",
  "key12": "2K1eekijRE5tfTHa33JnfaRCW9XQd9A2Ry6WWD9dNxNNKUgktjsTLTGMiY7mSsm8T5jsNbVbgXFzjfM95EtdFooz",
  "key13": "3Y7PWEznBsUVqrkY7Eb5EPqFK2q9CFgXNcW2ok6L7Y99y5YN3kQXoCLF6mjSJDQ4gMTYJKz9Twu9yCADgHFYc5Jh",
  "key14": "24RGVo9o3LxSSAvBoYn6ourEq92AVUpQUpvzt1uM1gwf4PbUUgJjFd9Kz6txoKbRYW7nkE6WjjBj5K3xEKhSG4LT",
  "key15": "5YSm297JwBqyyRrr17dEqh96EVjRThMzwqes9JEsSxSZXMd89FzWRCn9GqNA333Ft4CxeYSgLcWhWpPMfpHMERxA",
  "key16": "4TCGrmxWamf7uyXfPeWE2NPEmmRD4VVo5yFa6L3wBPnKozhknJVkZmSPT21Bes5ComBkL3ygi8kMSzNfSLAxnqju",
  "key17": "3S3YdKgyp9wJh97RFdBe59gUUJHKpFeHFRSYq1TcwdDEDjcUVoczQmAhRtxkgUpSj9Q32k7BiWUhRn5LEMWUsK5u",
  "key18": "5jiyMgVc7atPtRvT4SYWrC9huzAgXGKxFY4EeMAdfv7dk6VqodB7y2VjSDZ6qxvPFz8fnzi3VESccnmPw527Szuq",
  "key19": "5ZubKMNqXt5L2i958HYv1S2NXUTCWsHXy7sQj7BbdHkL1tTVmJxsvzcS64o3SRdELpvUwJpEDDhdZVe21dxf3q1a",
  "key20": "RXruzpybbuSUyvRmvvHzr9HzktMtVE7tp4jfgA4uTNiJbmTBh9vYkLFa53gUu9rv5dPioJzJntQoU1A63VLBJno",
  "key21": "4r4MRmesnXRPa7hH7pHRa7Ycr9X7em1wA6jn71NpV13GH6PZKWy2EqEN5tuGnvSz5SniYK8WrgY3uv1ho4Uk9dQE",
  "key22": "5LWeKwHDEJmzDgjYweHPhh3n4uvvsPXv8op8uoeMdykFQn9qqKunESKASqeNA7xPKhEzJkmzz8hqYnKRi8AVdZ8f",
  "key23": "3FJLoYa3PRPHEajFpMWCEWvKzMttZjgLaerkMfvpMfNgdiiGTyta65bQbaMHeARabksu4i6Y123b1kUsN4jpfsNe",
  "key24": "2GfPUGRmDaFV2Gi2GegMZPMNi9r6RWqLpGjSdTvagGXCrU9cuV5MMgnKmEQj8VP23Q4MUMUjWQ9kYcEmpAonRM7s",
  "key25": "A3DtvuwTJjQNZ5a19TJUjhaCtCwAHGd8qX4cbzPqBTmLwiHC3qbgJCEuQsV68p6UvDvtekWvXtuGU7Ghus5vNNd",
  "key26": "gopaBQMqxdLzg3bNmvUT46mQoH4gxgXeLnGGsbnvUY8tDHjmzVjTr7swK2EVB8QDJmCUbf7hiotrmaeWSvQuMXp",
  "key27": "T8tVC6aK5Uk9k4Sca5EwXANhzczTBm3oqMWfe8MbyV668NLNuXstUL411vLZ6Wxq7mnnX5j5kaYWt3uApz33NfL",
  "key28": "4z19mDjR4YvSmZa8tn5FBZ84uSTBZDsVN8hm95VGroFivK6YorNRLhkfRp8txHEriAQ4vwmDh2aM37zzPVDJxnji",
  "key29": "3t8NFjJeQ5XXgmZxwFCMVGdvqRXmBawQtJjXU2iUeosBrPzAS2yT1DH6mjBf7o1j2LsqxTdVgSUmgbwaGcgsf16e",
  "key30": "2TXzQMC3XLLNEbkMThqMDKLvwLzsd2bbeB4jLmcArsspLn9czLaTaDJwYEXuKYfUjRX7efeJkGDGpe1qZeqMddcZ",
  "key31": "3MZR5cLgd8s8V945WnCxp3y5yau6ZJJYnYBbc1jv9smBzZeAc4wa4FWGhWvFAp9CbM6ouAx9Yk8px5vPvJEfA4DH",
  "key32": "5per7gtrZnqvBrEyt9iBchb1gi1sWhvy2wmx1ZqWiAD6gXAu4c3f2te9aRBd2S2U5fYki4tChteMHxJ7tdSuEQXT",
  "key33": "4C4smAsWHmXm5W1N2ZRsUNNQVUymr6WxdhriTvBLoj88MtTrAeT7K9VeAAS7W6D9KSVxgu29Lia6AehPWHWmw82K",
  "key34": "63owVw4ZyWXHzs8ntKx7T1Wz1uGkoixBVqqZKs3XGpPg6Rko5AfCvLFj3YTHx18FQ7vrChTUEo1bPECfkuKAAYB9",
  "key35": "4ayYMSaPAnktRRm6dHP1GxRjQHRH3pTopmpgfuggqXnKoqgafqqASsm6UF89msQjScmYYgYC72fS5cxhDHcSSHoj",
  "key36": "51H9KPaiNFxYB7RCqbG6MEWKLyMhnMS6ZBR7hQi3ysQ1c2vBvMsiwoftzARWsGNt9MYDW19q33N4rhfga2qrsoPL",
  "key37": "3K7mnMHBmzmQPMYEpwdGDy2L9jdJBgaKoyUDxSY9pt2HtdYYmT93xoMWZnBYAcDQDmVKVHnP7wvrAe5wWm1fymvX",
  "key38": "5XYyLABkRK299hqNvhz8ZQqADiND82XZG4GTipYbM6LLCdowhnmLFSWCqrBTen451ZFAX1wSPpuX5DsysmPEXJqJ",
  "key39": "S3PahL2pYAR64V7Bt92koexzCMBrd6rxDqbVE3a7W4p5sYxCwB8eVLutscoH14dkGVMSf18XMvTK4sGh7Xaj1mQ",
  "key40": "4m9gmCWh2UdR2DwfkE2bUymPziYeNcAtLuthgmb4Fbcx1kBVAbMYb5xgpAoh5J56XkjQ647XFiQEAwM3GjuhpvoC",
  "key41": "37GtewKFC22VkbR4bD2waiyh5hdozEwguiX9Q63Yhcj7HfvfdKeCGdX1aR5RHfvXfdAZqPmycgENGhWgEzz2q1cH"
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

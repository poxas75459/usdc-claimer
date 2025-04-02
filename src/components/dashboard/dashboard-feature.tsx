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
    "3Z7ABmCwVMVst8PcrCiTxrmFGCbDdAeBAAaeBAr6FMruJepogo61pJD6Hi9cqNAXsagaBEiqrH5C1nsXfxX6NsKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NNrMXkMHzXFewuYgMQHwCqqJwREErUvFFUhzUTUxgfjBG1PVp9nds3fiQ6X2iCYpEWETud7UknBrLfJx7PGEjy",
  "key1": "2EqPxhKFWHEnuMUUnfneQPCxXgz9VNBHJ464NX8ZdomZHMFGCaVUxP9zxkYZXEEwfLKefjy77c1U6TYPXoLapxyt",
  "key2": "5L8d5gQB51svvEsHbmEm2BAShunCPVFoDdnN42XVC1dcGMBAFaQNpnEch4yUZEdzgnL9BCMjTWDC4MuTsnZ1wHcY",
  "key3": "2bqCsKEGBFxyvZnZvKtdepNE87Ec941TP5rXbA9HhUVnaiY6TLbuEVQVFxtb9upMZojTLaRhCsTWWVcteZmJhXeQ",
  "key4": "5oBQTNmDb3UxtWuN2Ay7TyHyg4SXt1r7CS3SQczCBLaK4T5ZkbMwRhSCnaspdDsniUJhLYjXrV87ZLs9FqotbJyQ",
  "key5": "tdXP93FB6uejkiUfquqoUieCn7trrYRTrLpRdAR6Hmf5nPoYEnbHfocsyjtDPUxx8ghc8qw4VwLfX3JuSy9Yxum",
  "key6": "2q5L24qPMPoMB8ZQQsWVVraEQ5JYyGNf1FHebrS4nbVHc5LiT1xAYgDKfgYA1eLuJva23x4ddPbkpyhzTn4ifYZz",
  "key7": "4aE8wKVxT1v94CUk7fwRjzyK6Ei9m1AKD3TK6ZtNLyNdJ4TjErmaD9NyzwfMoVby5MegrDaTJxr5GmqACsVdNxsQ",
  "key8": "tFgyf5mLM7JSRZd9dMuTrZ65veL424AnorxryJiyzkKPxR7ANXetbfEFbfF1r5xVSH3qUG2mBqbKRdWBtVSXhQ3",
  "key9": "Xmj6k437cbKELYAThndNSjisZ9TNdw1kMymK9hS4LbqC5Dv2LJYUhsadHjYbqdYV93pWKcDA4d2KfTRKxxDRSMX",
  "key10": "2My5QKvVsBgCVz6k5eoU1khNEA15mnCC4sKaZMFADZ1wTqpx3U6nS6BXmYT3af32E9JVmN1jjDHjQfu2yUY734HC",
  "key11": "H7CWYtVU8QMaQUHt2TNsXZxZaaNRUsg8RDXkW7LrcTBTj43RnbQuzkbHEAa1d4z9DvoQhJe7x3H6Loga8V61V2q",
  "key12": "5cC8MXviYAFwdQ3tHxyhJJrh7jhNATfv9BRJ2kBECpNHwYBxZs54hECCkxrGJ5uEQnX1Rvv83cHzhwiPXiTqC6Q6",
  "key13": "353tEjSKatWDLxWZEdMHs1veppJdgW9AysLNZtTXjALSnpyQHsBTJnButy7SeFNwdqbpN6E2MdrsdUEXgQNQpbBh",
  "key14": "2xgsSc6gqwz8QEMK4yys4JYaqVaxxiNTC1NxFY6kMRgwK3tVApcmVyQtbEgbe7tMYagLkGXxGF5tmop2Sa89wcka",
  "key15": "4Lg9cfBasdWadA8jkyB12WHbWoUaoMkC8KmGyxfyMdQYCWrCLnVtGpSU5s73y6jnxCiugS94uVTPBE3sumucx9Nm",
  "key16": "3tXsHYoUdpMw3hBQY9JUVEKbma5v9VdKTaxW3kdncyyrV7xPcbJYHU2hXjCV8xqq3hsDiiuvUXppBTuU6xoYHsu8",
  "key17": "5nMNdFQzheSANi9QLUBYcfEUYVQtHmJBnAFfF1cH8HPXNPxYU927u5Hc2d43tpxPLV2HuwgmF7HYp4eAPAomByD6",
  "key18": "2ZMVa2JtTThVqaRY57uZ5szU8SRUzYJ5njQNBiCL4vKjb189fq685R5jE6xrmj42xEFtU5HWfrrkrTKBHnGjyYWd",
  "key19": "437uTXCXTLJxRmR2rkzNWKmPktcoYdc5BpdR7hyCSzkCNf5FMcEt4UCCDnDNWLRsnbNEeiEeAxRMRcHcydtJZyAh",
  "key20": "5syrQR2B56DKSFW5R92kxxeKwwkK8xcaH2tjX8d59VDnRMUtGRh6wUvKq8s3oyGfzCodskgJ29BYn3kkmiF2jeSc",
  "key21": "37Hg8qbr9CWA3vC4Ydpt3uyuUvyTbQ75SnxqZJFxYyCvsjKfZDBjpcmNQo8tB4mHN51GUcDpYH1HPVZpkL3AH2mp",
  "key22": "3pctJEXg4ZovWjzHK4kDizEbZtjYqUoM4fbYRaCxKzi5PZK2cKpc1zZYcYPZrPzKwVF3pDS6rK2Z1hS4oSskjFAz",
  "key23": "2FQjzShH4xfkCevEWpx8UpgrbJtWSQxY4nreymkCBnYdP4g7gZ62yyheSkfLcEh3XgjwRC68J2SQwRBHhxGK49tR",
  "key24": "5bPvtFiaZuFzcATygFoWgPLnVSne1uJtHbf6BjoG6dN69N9X4KENGBg2UL12Qx2W94Z8APy9mvaVQtiQyGnRq9Qu",
  "key25": "2m39cVemtkepfGFcYdVMg5CZP4EWfN5DP2ECXusMA7TuKbQjQSWNf1nhwftocrrobZqY31x45A1yNmXsQvVS4P2e",
  "key26": "4wjPgca2pYvJA4vqLMepAYwLwKzPCnDG5hfwtBVGfiP9TDndYKTaETwa1xroE8EUm4ADhFt7Q8eDd4RTcCNdGTeX",
  "key27": "3DDwMJh4tQVKA4WF9w6NsbAjMTvyFcteBRCT2QNtYMNTVKxR4qeeJaFFjZw2onZKCJ6S6GB3uEumkX2HCf6VD8qN",
  "key28": "4odRJA39tAK1JPnGaKiTDrfpQdXsV21K9TFjo3bSBUChRv92qSJAjsxAuck4t7arS55bV2Sq4oCXHbAx3Wxy89YT",
  "key29": "3ii2BU5BXtPXr4sqxYTRiu4NYyNZHfyBoDrvj658gDjS5BAgAJ4cmp6HZjqJiTTzJPHEqXNNypVW9RJh3EJvWeGp",
  "key30": "4NZx9sQ8Zv5FbKPHAjjY42va8pcyKYHBW98RZUrxdxZCuJc1CFvbYJMxH7KtbeVmwcViaGDX44bo7TJf8teTtHfJ",
  "key31": "CFgxdFMTnaNa7bgPLFvKbhYM1A8DM5nQ2CzvsnZZMALzd6xuXr3H2iB1BhZZJkJJ7qkEG8L4MPTFaz27QVXMXQA",
  "key32": "5kFw8EWbKAH7PUWQ9AthU6qMXSEt5RNRVsE63j97iNRgzeCw69ftxFTTWzsVB4FF8Hu2Wbu217KCUdjmPCYMynEX",
  "key33": "3vxthajvbgFvGWndGNvqy7AajR39uqviVk5cQspxNiEy12sppVwwbYadjEgpfHwoJ1yqF4VFcGq5kkU5Nz68FJ4h",
  "key34": "Z4A3F7DMWV9AmFpPdGDC4LGnTLs33kHrL4pwb66RLNJVLmqZXnndTB9qkN534eo2xWwBigcXZvwkVCEVbEmbSrc"
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

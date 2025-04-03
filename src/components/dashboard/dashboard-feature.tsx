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
    "2KV3bKAhJpPArDYKgof64bwmePMSTVF2u16CqA7rH7YzhrhVbdNFbqrybjBgsLfr48qnbkSzNEaMqsqXS4wiYyFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUxqdk14L2AMZhBcVGzsiMkvNJPZdA9LHwD9dBd7Ln21yncDnWDa3Vi7wJaEgyYMbzQuYJgibkvUdp4m8UdkP5U",
  "key1": "2YBvSNpKf1uqpw9KGmYajcGYcU3dubnTHVGF9WsRxCKMePV9DaVfNde1HS3YQGcWqR2wNcR9nZi1d1mGLAjfj1oa",
  "key2": "7QNJ7gE2uGj4cXboSpztp4odXigjMrKJ6k8BQjyKSVwCi6cez5QAAWc4T7F2UP1HNh34dXEobQdPD7wr8fvbZ5P",
  "key3": "3adTJuvFbsazhCtxNL8UGdXT3jve5XZaxjR7JN42ZhxbABhvJMqmFT96euGd34hPPnwW22Nnk6hfbPixTJAZD2EV",
  "key4": "232jsr7oH6AVVuscDmHM4VW9APT4r5NNCbyjEi3K7vNSXku5h16ffR8S7S4oQ7WBH9hZVY1JfVu1pjPSNB117BLM",
  "key5": "2722rzziyf32R6mgxEFPTUJ32HvD4mNkxoBW5RdmPWta3s7oRpymfMrRCt5bnMGGCfXfGoGrVcGEePzxHYSUoLCQ",
  "key6": "3hh4pD8jaBECunPWDaXSJkgBn78HBA5rF1Rgyi7dxgktfHT9iJPuVrZsmJCVMUs3MPAEkjYthVSQoRxjpworzC5j",
  "key7": "4cHWfEYX23XWQpCXVLozZ171i45Z53LoKwXYqNQRoGwTe7WyZ862uRz38L8e25E1yak2ZCrowxvcz8vZ4h2nYGpQ",
  "key8": "MXsE6BaJPRGef9hxrp3zaBNAJyhN3FUjiSSdsTheL8shJa48tSA2YhMAiUDtrbosZeNBTEEMfNMirdG6cTPkbYk",
  "key9": "31MF1qj2zx5s3RCuU3vpW1zxNxmiMYaf6Uc3eo7qba9R2whPDSSjVkuFaQbxWE5ovpqcur9ZoZJok1y76t6GTtWR",
  "key10": "4gtYDXN3dugRs1Xgp2xyRF1PQFzY8TAnvVKWLVJJKm9fqcGxQRP3HJFfm3R7HdGwdWnzGXx2bMJ7QQkoPDv7t77z",
  "key11": "LCgJ8BPnBLedaBNXNxdjuQahoxWHTjFWVkGYLZBjcyqZaTs94DzoQpct68CXBah9Ht6URReVP24wKAvwP8BAeEE",
  "key12": "4GdC17HJTVfo44Zo6G4oTFNth52ZpqqBEMUGS4cpHY7fo4TN14Rwf3GypNJ5UnnJ5YLLzAjeTYg8pVR7tasFPK3t",
  "key13": "4J4w5GdP9B8Vudt3SDym3R5aZV9tHhEpaPWGHz9hUYrvrRruhThjAFH74YXKhUCCyaeJuAXgVXgXuLvWjgZWzzWq",
  "key14": "393SLLXG9x7DGAfaLDGY2vmmqVD7yEoRybHTupUVMf3ggz9mzh44yX7UcQAdNC54Jg1CsbmZTtEKgEBmm7n7QuNM",
  "key15": "5B8daxMUdBHqbHxAnyu66b87xJ3cadGE3p2oJJ5uDUmSNQR4VJiFRZZvEqHsXm9Zzt7XSKLXhh6LVGPoxdnnWhtP",
  "key16": "3AueNPEUYLPAUMN8kUQuCM3SEkDoPsEnZvfdNhbFUyRAxmrEfq8UB6cbFvRpP3JZT2GRpHVZiNsScma9sV6URXfq",
  "key17": "4hE4cvdQqV8RsDHoojCNLQtineCCZRtgAaBjr3VS3i3UY5Yz46pRN6X2gq8cWFnzXF8fRxpiy9uF9TGjfTWJML8",
  "key18": "5wkZo7LMecT7VXivNDFjsXUysQt7iXP263nENbdiNqnAgDLMVj7obPhiKZrs2BHwjpb61PZAUJwGHxc8NNVkA99h",
  "key19": "4R2sa2qkk9SLmms9NoYUD3qC3gPYPtQcX7fPQyfBrGUCXtxtwYEbEQNkCMhtVQkAibXqQAYa6TAA39HKBicte1xk",
  "key20": "4ZA2M2G1LPDRD17tGHHdAiiCYhbE15cQk2KjiAuWmebw9wrMgfqJxsLRjJXHeN8Ly6x4APH5fAU1Qadr2FBFP9FB",
  "key21": "rFVfnafXiwsVHMpaRvdFubnjJfqiAGRcqnEa3xS2x74Sv5RWfg1Egn15Hk5pXkteAfpDry6rkZvfsev2P5i5RNk",
  "key22": "3RswiEQqat41f39HPNh4TLSWAZ84gW4n1xXMcxJZnn5UeLuketdd38joMRWT2mLDVpr41SJyRL6qa8cWstsTQkES",
  "key23": "2ZURQk6LJoKSbnk2x5qDtftGfdJKMbq9kz11Z4QbeYbAsqVe8vdX5jbTVh1BLuimPdwcgHJXzVquQgxP9qGweSwX",
  "key24": "YniUDcmcyk1nWfCqHznZAeANWFdACugJFzXc6BB11DPED2MoMXy8UGy2zcNx5dBybskf64ifdjkdtnzVBqNSujz",
  "key25": "61SiS7gFaQagKZqmubQfaW5pTV8Jd1d5XwzzAGdcKNq4XZ7ne1DeM8dsYA2X3VEWL5VQy5LTGbbLfZQ7Z5wXj2NB",
  "key26": "4Zuo5K9ZvY883JSJXzQSouTBP1xDdfo7RP8bG6i9bozo9gBV3WHy4szufNC1yiPsp3Z4vrYMgeuxXq5YFoR86MzE",
  "key27": "4v15WRJc9ar7G4YcDk8rC2rSj7pLjWAiAHCVeoiBBVTohQrQbbCtbnPYEQr4UpWPKN2etb1HCo4TMQFyEJ3ifFtT",
  "key28": "3okXoJGhdZ6RX1b7G828bmePpbz9EKNvWSxHZMqrKLzx9H3onEG627bsEcb7aoGdRnm36hsLZFTkkk4sJoS2B95j",
  "key29": "4zmvpoAPAUTSv3a3S4Sk9sV4mfhNGt8bnDzZe7j8mD6bsUtgrQuzG4yj7J2YkYXaFoaFV61HGBv5aaMbc4RWGSzn"
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

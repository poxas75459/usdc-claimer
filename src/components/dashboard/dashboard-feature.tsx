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
    "2cH6ZzAm1Cwjp9zSjqAC5BQLG2dXCiXyPC4aXJXZZ1wKuQMaKrCvGUDLUzKnfbju9mcRbTapEXgXnJBYjYBS7Baa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qynkTvdfJEtn2tx77HarCPZemaLS7s5pGdE5b1F2ZMSwNorMroagQgk2s5NC6nWSiLNi33nprAUJYMLYEBTFhB5",
  "key1": "nixHEdAtPHwf4XvuyCbMacJkrH557fcCKCA4GGKqdSnenQgAsaAf2SVoJ9dTMPwwUdjXViZjuHkjzocNo7ASNyL",
  "key2": "4yjCmFnsZQSE78BXAGrKmQw2P1RbauVJHPUYfyKcqgWZpMnrW9L4PbLUv6DxVqxwqsaYqdFwvkRBBDiarnjJwcUH",
  "key3": "5GpuALJciSN8EfabLFdVyjfAENairUg7oFJfeBmo4mWDwN3KSCh82ujVYHWDMerf283vxUEd8KUNq5dXzsBJxMUo",
  "key4": "3hsfviSdX27rw9a78LbqFZPT14Rvd4Arocrw6Wk2YkEEM33PNBq27VhGenJLf2vnXiq2BifQ9we7Q77xkFjMPRNS",
  "key5": "zRhHScJqpBm49V8yoQfyPa6TDVFig5798yzjCqRwousjGAsbjoenYe7ei6DyqCCFzhuYVrTCiwzZPWE2zozwmMN",
  "key6": "dq8cTYaSTqS7AeWg1iafgVz2st5zb5oGUw8Xr48yfUBXm2fB8MxUe2rQmEvrMKhrGUuYRZMqJwmiMYBw5hV1z5f",
  "key7": "4rJAsW9Dq64orSvXdsWe1JzrHoRPDquHrs6eZ9WzqTsBSwT8krHLwr7QqiZsyNfg7gV2MH1NrcvKWa8gstC3Qyzr",
  "key8": "3nd6P5UdadAQcQmTjMLci9nRthHQdw1L7fzgSdeVYwDtoTEo3KKFYmivZjk8pig6gJhEMsZsBkcjRniMX9Xm8g76",
  "key9": "sjSsCXurdHRbYHu2VzHQKoHr9Li1YPhRqHFYp34PktJezXEj9tBjzCaJWDVdvDeXk8PYQ15pza5WSbUSH1vSUo7",
  "key10": "2LGGBSQoKxo6PGFCzyucV7jixTvqxaiydCR4CgFtkJhV8uMzQhdLGEtNoB5nqUYBN3cLRAvvWXWR5PzrkGsuQUMJ",
  "key11": "4p41BtgQdgqHShLgJsjkA99p5jm629nnkCNZXy7iL9pRmpySzY1bCqdyrQ2hgYaqyCamLNUfeo5V621n8QEXtqzG",
  "key12": "33jUVp7GtEdFaZzJFF9JiBn5AoaUnUppqCTQVfSCJH8qYmcJ5ZXNJ3jHD6DKP4XL85EtXhxUDgUPvVty8P6Arg4J",
  "key13": "4eQRmBkH698GH676M4t21jtrY645TcenZqYpsnUwWqJ1A4Kr3F3LYbM5G4PLAiSWX43EmbASZ3SjiECpstC5MNKB",
  "key14": "2AjN1PDp7s7GRNhcWrRpEawHMs8wsWB66ENNX7Vg92mctTKbkfGWRsqi8wddzpv2vZkeLZkEhuxxEg4qFkXnCrgv",
  "key15": "63BTEq1pFNeR8bVakKMVb6HEoSo8nghdVyaho7jtammmUZC3zqdqsFiA2xo4oHB7iE3uBEeJxV9kC9CzpyNoq51K",
  "key16": "3whx9hi2TTkhzGGgrE73S2hAS3pwFg8au4EDhMixCiMBRo2XZkPKqDZdPWfbXZic8LMzswJJp1zga7eWMgEmGVMg",
  "key17": "3HDBsYxttKjCsPKaPHK7fnt4ChHS9VGBbLCQ7aTR2D5KctAKnBXUZMdrw1Sz2fYmaiRtgVdMSACX3FbSVc8d76kC",
  "key18": "5iakj9hEMF1SrXy8qLjxcJ8skrCwvST4y1TczAELSBYUNtFdhw3DxT8Trg3jz8L8o6hoMnAZMekiMMrHVhBNF7Nq",
  "key19": "4yo4bvJjcwtA6NeRtWRnCSyHnhoXkj8HjRjCV8Qa7Ly954MPrTL1kuyUaLJkNe5dWG9hcTqTXgxPpYthDmaDYCrC",
  "key20": "2pp6WqWtd9DWJXvYsCwWuDxCh3cYWeAB4LMXeGfXSqBwuJVZGgSLYqM5b11B75C8syHh4Bb7sd2zChpB4K2s3ran",
  "key21": "P9x7s3mDTsQzyzvndKMD8qALo249hzTNpBktaKLF3Fm9BTZEH4ahEx43YNVgrEXVcaqs2us9QfRRKCKiPXKYSgW",
  "key22": "4wXvCpTgSnNyidBeLog98obpoQ6djG3FtxDijZgp8trJBEPiKF32xwers2EF98ZCMZEM33UNhAGXRKWqDR3AEsUk",
  "key23": "29uigB9Rr4ecEzCxDNZbxqjLG77brgxdb6QjiAkJa17N2Don9g7cETJuvpayMWMjioecSajf5L715Do1YRsC5ehW",
  "key24": "3uLwc1o7i4XKwpBg4ugkMbgrqZZuZk8xFvLDB7kicb1das19bnBuGDFxAUzewRnmYcg8QvXe22521sxJ5cfj9qfy",
  "key25": "2yS3fFxWa4Bex3KRW7RBeBwfEKS4kLtNZPmVND9CKcv7JYvwChDMCwt2m5QUtnCgVfuKMpUcfn4V1hhpr69ju5Lr",
  "key26": "433cp3m6miex46i6aKJXEGGB3vptTJJZktP9MfLTzbcXKmJjMV7tUbFwtAHc8v4gEBuZDLRG2ohBoV7PfP5Y4Dwf",
  "key27": "124AFoKHPrgatj4zVNe6dudGMqhqAh4Dm5ktwj2UxqgHCyCgEb5MSJFptNf4LzDmbFgUdJdkeFgBY957d5TMERxh",
  "key28": "5xy18PZ2K9hXikx1x5kKMnh8A5qyoiik6rus7zJXTi8CJH7HVeRusQD4Ds4vtYdKdE6otdVufLQVT6mDyzQ2Lm7F",
  "key29": "PqhWNMhEDVpW119wSFKeMrPMYX8xsrkRCdqXFG2GJfPFzbAaXBCBFB1GLrtM661KrrYDUyWzhG7TMKShMQmxY72",
  "key30": "5rkTpaGNMma5Hx635qEsK9MuvaJCcMGvyKm1VB74YRkVShksDbnS8z9rMna6eEcYfb9VpBsv7FL1eZw4VAidXRzQ",
  "key31": "B8crbSPUcgDLdFsCyk75Na8dDJPPgUwf1uURHqjwzkGc2mhYtSVRgPgZWLmi4JSD4oiv9V6paK2TVRW1VWm8ov5"
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

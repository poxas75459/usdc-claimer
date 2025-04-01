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
    "5oD855yUQriLUJiaaB3FPDYmPMgKUzVjV5bYvDju7JqKLyS8W3ir1gyTYcRyKrXyPSEtNcqVQTFcjSfsEbDDbxqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UdpmekuvUtUrzgYUCDzGF7xZeBMfpJ68ff6Z8W4ttCRqqYoxdmbFnPtMJ2dKw1KsfztbPn8Rcco335mjoZAHk2H",
  "key1": "3dgZVB3k5KWNoyS2ZNfrwZZHZnME3ViLexEC9z55fLunXH6HB3w4nsoJxNZHUHGJC8TResuiUgbkWaqgVvuxkmRQ",
  "key2": "2JmqF1zuvp35DBbcTceDd8LapXo6J56q32PKpQoAwbambA3RCD9PxVv3VRAymeiRZxcZpaxESpWxsSxxrBwVBeFA",
  "key3": "3YkXJcNZQN5d4ciyAnmM7aeYnHL6w7G6sYEtJsr2PYuCY9ei1KHc3PfcdFfLVw6TTbMmkvTSRqATE4289cziGJRV",
  "key4": "54ywiF11KFx7B6PSHV4PcEUo2EdiZDBUScGabh96GeYsY5WJuhEQpdQ5m41MJeh1FnR8HrShquXyJuHsf6PQCW1z",
  "key5": "3CBZ5gko1ASXkQPfkaJLgkLNEt9pGTu97xJV9NLASY8QX65aPF6qW6FarRwX5sV855nBUxYFuFUq4NoEbRq73jrT",
  "key6": "1UwK3U852umw4TzCLmc7uZwUPDi6o5eFrYbxPgGsvzXn8AsRN6kVXBHLkbXt6MjSBAAKUgpJXkFgpNw2xedtTjH",
  "key7": "3uZX238N5z1zQeLzXRiTGwxtFSdygQrqdZApmV7iQMPeWTtNBZbEpLS5qEw441TwgYfpuK3iJY4vbzCdAkL8MjpC",
  "key8": "3zf2TWuA6cfCNkmQUeRAjaqdmLYkaRYBgJic1oNL6S7Qu1rE2duZKTnsLyUnq7ESa8fJKfSnhd9QoqSwYrSrZKYs",
  "key9": "4kYs59Gu7gRVpEhRCX4sFYt19sRV7g1q2wM8wuHzqce7ubf73rtgATq4wB3oJRsMHJ7ARV9dHS3srzjXvYXtpDY7",
  "key10": "zzmHSDdmqP8YLQ3TPvhM3KupBDNE8nr5LXCC1F3RnQnXxjNEixyJX1Vgo2rpfGbYVeVYZEW27WqvrwJJVovpE5d",
  "key11": "2xKZc7fMtCfEFL9YGPivJSfwxw3GAbYqVdGmi8rbhGomjCRHmyHRLR2RgQjN5YyUxFiYkYgV2i4ZGHs21RoHHz7v",
  "key12": "5jaaN9P3eiHU3N8PixQYF7YUU1ASdLs2vxGsEFuT7PBK2GHW7wfbmBPbPXJryEnV4GHCHggSkfFzfzGLkzWgkSgb",
  "key13": "5CxP3npYppUMeoaTh34H5hr8WE9Hrzr2PsQMMk7zc3WHS3odfZAUbUjwMS6DUbZTy9QTG3auZJ8Ciuo7MLwBTyaF",
  "key14": "4Q8Nxt2923zyRHHb5LgZkEx7Zx9ZembNXtuMYv8hn9zYub5k121xSVSE4Pr1W4TZVcsJKC462yX9UpXrpFQeK4Cp",
  "key15": "4gBS2haiviiTPaLniS2LnFyysySt1PYV6NtPtxN1gKhaei7jowqpQ5pai16naNLGwfG2oLScGfY9pofFEGGvnQg1",
  "key16": "4gbfmspe85nayEHaZRWrHzi7dLhmrKyzu4ezuFJi2LFUo97vzipY4nCwKyuRubTkV63QArrYT2xy67mec36uRq56",
  "key17": "5CsjVcPS1juH2c1KjR9f8G3c5DNiZCJqcuFX89jwrcpET29Tb5w4dCsk2e25EPmH3RuhY46V9tUjn4T9Tugqi8hm",
  "key18": "4oCeowWud1ikywzg6sg55MG9QiwVb4Xi4hDP5evi6dL95uaxCVPzTTtjvPYirFqmmM6BHdoBs96W61rGoukZzmms",
  "key19": "262pbiRQghVqptUBrmnTfEkqjEETsrngF4WSKQa5mtfgAAg1E6DS5737KfqfS9eJWYfdygtfoW7LXRKwLX2o6MaQ",
  "key20": "3W9hRAhasGSRZiK9EwpoydDAv64dtGAWkPCmG9DvSS31WDF75ZaUR6H1x7brZbC7CAdkqvjbufrkcnfvsFRjJLSH",
  "key21": "3uVMu7F6tdN216DuvFEQqxYYCsSiohN2T7zdv7Au3aUgpQ1Ubsftzzm2MtY67cgeKwKWF2C3DpMt3B9ZzQJzFfEZ",
  "key22": "2M8Vp3kTkYHqFpamjgPQ6mFvVrXQCEEg963Kx44cuBFdFNDX8fySB9KvhbGGh4HCdSZYPj2J24BDfnbtsdXzUvzj",
  "key23": "jFYFEUMUWek5fh2JyvgycYVvWQfJpocczSGE1xh3rMqRCYPxcFZF5Zd6V5woGrp6XgdMbxmyZqfyJQdhg11dPVj",
  "key24": "5YJiycz9RGsRZ1hwSisCv67NDscSNMBGoJe9npkUnZz6AJ7BTNHqP5bEgATFgK6Xhc9nqTJGegSBmADhFAJiEQSJ",
  "key25": "soDuBJUfgUNnyJnTp1Ff6fNqqAq8kMwjTyY9umbmCbyX5Zvo2pWbD9EBP2eZj4pHFBESB6YdNnyFDkZPDHwMmVU",
  "key26": "L29QiuX8gVNmoDHXGXDUo9GnVoA9mXLqRLfmVcnHZ4hhsgFPPp4u2gFBWvy4RsqwNUyQjb8QHGBHkjDchtogMFP",
  "key27": "gQ71qZ4h1Yd58cSS2yG9NiA4wQDEeAHxt8agMkkaHuvqC7YC4LCke1GMAdRhJddXprYs87M5qSUsxYSwWXJiLem",
  "key28": "2gc4bUpcaKiBKqSqesd6L1pXcCEiwWfCP8YqyJSTcFYdHhKAuArDjvmvS5Q4n346YdAbdLrV4rb6hBcnjbiXzigX",
  "key29": "4erKoenfhCnDzTtB2n2RKKyg9shb1bXur2Ejvauu8UWVRjrqHNLHrd5M9akhCyHU892uGQ2ttJE2RVpnmK5uABvW",
  "key30": "2wxJH9R5S9qUKeMJJTHdFPyWQteHDLyp5PWExwpMo1DdLLhBaJznpsJPzPToS1QFEXFhM91erJvZqqJXbSUDBRZS",
  "key31": "5jftNcERgLNRLucPWgUxmPbfgzHRWj8EZX74SYh4LYEzPPEy1va3X4cX6pmPzr5bfP9ANYgytCVtH5yB7FvCY2rm",
  "key32": "5YkngmHVogF3UdUAE4rxc6GdyuACtZb9nZh3xz5WxMhG16JAmBfMELXpfaSRe3G2hPkmZZM5sk8611pKqKvjeFqU",
  "key33": "2ksw2utS8BekqMXrY5L3dH4BeEXN4E6TS3ks1UDTHN6oZp8ZpDgQiTZprTBsTwcf57jwzNdu7sBRBNcGXQy9wcW5",
  "key34": "25qsUphuXTvMCaHrV3embg43UiyuYi3Jsd7Ht7464uBLwEPJv4K8X35fVc1MBgznst8nDVX2xuD8J5dB5qtAPxZq"
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

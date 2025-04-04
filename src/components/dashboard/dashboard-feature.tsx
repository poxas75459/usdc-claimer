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
    "vkSx3fXf2cbg2FsfxT34v1zu8eWavREYiBWkJHfKvFNeLDbqH1B5BsR8ieZtAfnZgUyJGcWbyTBQ4XLPH8u1sYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342Z73oMrY54ZHZCb1AKqJuqSRiT2KwieU3pFZUBCqNKLPRw4MjMExzHh8GAAfchGNCNm4KPTCGxFrQV5W1NJZND",
  "key1": "284Sefbow64nhw4qvhBb2LtBsDTZB6Yvz8FovRD94fcATpbDy4yubG7FrLHtpPQVTCnoC2w7873g4XnaAJeHaaPS",
  "key2": "5EFoncJtKCzyBGp3gaZ5A4Rz6AaFwXL7e38mKG969F32fTv8TdggbcPyTbhRiW55NDUAArYD5hp9EUa3B3p4nGmi",
  "key3": "3dq7rAt6JqpdwutiYyWh2UxvTmRxiYmmAgjxpJwQPzvASgKFLuzjxQvtX6KhUddmoKhWYLXyzdwGioGpq2Mh1tDe",
  "key4": "LXSCJ9BACNpxa1PzyNdMaSpcWNZ1E8f1ekdcP5g6NRoRo6wbiM9VDbybiB9DBRztWUCVRLJBSfCkpyscrH1pU9t",
  "key5": "2Z8eiwCAkEFu1VHiCynuyTkrmX1nSMcZJZsrF8keLtxcJY8WWtoC5CpRzbGaaF1MMGGNW8AWGAbpVqhNcvyZ5FKD",
  "key6": "5GNhgaHSZWQLLEtjSLujNzKDRMGjgww1P8LoiS1gVanc3VjLYkPYyFbpNSPZSTgaCpZcHFT6ohqW26h8ixVQAMwK",
  "key7": "SWnFACFJbHm8yM3AaQHUcRR3EFD6nBQgCLp8DP9uzo1S7GyRjXNJ3oo8MaDHMMwA8ALQFpZvqRA2qmZc6YKf83i",
  "key8": "4bD8ZuHroukzTZCoccHaWcydxXSE2LVDZc9LwKeoHPy9871EwiTpti1uDjaPCFBhgVEuZfF2QXC3hsyYS3PBAN2k",
  "key9": "44eRFxmWaJCVab7rNXnVuWUbeRZPr3ez1SAfpt659VSStLh4m7C291w2ceKvtJ1XdF8q1fujGj2sQ6nMA1oYFJaK",
  "key10": "3Pb6rMbt1cidr12ikitc1hoTHXU8N2zQtbh37xS7hA6wpzrxnH9zUgS4QHFNvKsPc4kkXPh3YTAjpX3fGBuJTL9u",
  "key11": "3bf9Eti7euWkQZcLQRmV7vcoLrZ4zRX6J6r6hkoyqtJMBwDrLjP1N3DF7wHRgB43dM2j1inncHaHoyHeENqpTg25",
  "key12": "4hAZasguwRXpJJNQaD2CVQS7RgPpK2b9VGZnijZ91Fi6ZNWqJsqn4wWDVfPU59wFao5AQ9UTroAwzRnBCSDppyC5",
  "key13": "mRv3NNsQAR313gUtTNCacMwGRHHnVV5cQB7xV5jWNWZUv6F9wLJMH2cdvJWSSqd1pyWYhXCMtJN4khEstrSRp9j",
  "key14": "zkf32hMLWmm39izjE7hH7GsGCDbcys9ubMxh72yTMn5L9YQr8KvCPtVDvg8n1tyF9i1jhykMSuAn9LAGxCwEWy4",
  "key15": "39njcZXYDw8TQsreLss2YBNz92FZpomitPgaCBpkspv4BPHVPYUGF4HAe6hqwrE6GT4KLBxsRHCRHAwU7Sd3a4d6",
  "key16": "38zHk3tNnfvnGX6ebEVc65LHT2HjRi6ngsFcvG5NvgAAyedW46ARQMzu5YJTrrrD9c27hatBBBkr6AVRypZGMyBy",
  "key17": "7nnLznCVcodbMRwUuYtMLUHrAUFhac5F7yP3LY3TZGHKMgJHC5Q7t5Gp6zPoxL2Efq5aBZsBoZebLh5p6mcxhRu",
  "key18": "5JHBRccGGvX6vAEacdCb4QySevzKksLZjqNBpbTzFVnsVwaUEfaq4ZBvWTxNCoSnpECh3zXJ13mRwuDLXFDG2vJV",
  "key19": "5Yjk9Tdw6vQHX4XTXAEtfuQKKJ4aHQBbcGNNjXXYYEdYReW7q3zc4hrxMTsxYSsDSo8jKver9cYN99UnSd73dhiT",
  "key20": "5n17zdL5Ex5LEeTVNrkWihX91UsZMUfnpKVeHK7hGVakgHcGhJC4XRxmewVyG3NkLbvJeSVFwzxPqQL4zwKSHkYt",
  "key21": "5nTjKU1sSxmGFyYxZL8x39wzneuiq6T5VL7Kv3CSUnjXC86hWvCujzcyLC5e1NQXh2SSYgFuZQ8r35CG1MP4BKx6",
  "key22": "2mrsfcsrEa4sEr2s1EzChA9LZAgC82c8sKuxpa47M4Ysw7QXrFhY34kr4BgJTMyLgAAohmGcFDNtdkhU7seTyofW",
  "key23": "2CeTqk6ACNRWvRup6EmBQoUqtGBkBZHR9s3Hv7QffQLHRZW21FokoZYRdFr3CzmNQVCHfmP5oc7YCYn8FubSrxMX",
  "key24": "65ADJJzR6yRnVMwh3CRvnvV8txAQcu6KrNqosCM65pbMtdouDqHGK9WANFVsThUAwLPjsDkfenyrhWxy1SNiNz1S",
  "key25": "2ZE3paeJKE7GFM1Rzr3p3GutbQzuA69X9e8cGRwLLEeS9MKM7B9VUP7dUc3LWyYrxyWxysRoAG42cdYCUfadUQZh",
  "key26": "qGZZdphQ4FwvrC3W22Vw4aMYP4QCxzoNuXFwCpm81xA4UX6f6CbyHBN7nRgu6wH8LM3y1QewtmAPBivDa12vcLT",
  "key27": "5qGMRca6B6tTXWWQe7bdaZoKAuEEbYd6UdwgRsK3YAQrNDzGq7wM1HmcR7cinMzjMJWiKWTWcEz2EgCWNpiE3VYr",
  "key28": "3Zj9f1xXYGD8UK8LWE7yGaGVLRVFexsMqgoBKgekJtTgTgd3YmpSyQiv22CUgbaYbcDcvzMZZeNQccpaKkyv6hja"
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

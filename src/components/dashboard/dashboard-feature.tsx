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
    "4fiJfaXFnixzqcG3VXtmJ2mzKsKmmjKnHUL2VnWswUg5ejmyLjLtwtkjQBg7x496wAng7d3ejezAuVY74fr1dcMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dxL8wERFN8YXMFFY2L5EGyw4YWf98Wt4iBxLhixMcsfALQChiBK3L7BcP2LnpR4rxhVsXw3D1oakotnaPFiggey",
  "key1": "JdQKAyoKG1gzXFi1Acu2ZHHGAYcwPjrWtiXoL4J5sqJfd1axGod9BLrLoa6kkTkCkBsP9Xjod4CxFRUQpNG37q4",
  "key2": "5rQ4BtCRUfGzc9TVMCW8yAR9BoEnf4eEQoaCFQzwDDxH5b7pgUoPckbTfAvSCjq2uanDzdvZfiHtn8CXNeFKKNjm",
  "key3": "5byLQftJUvstfzU6ShYbMCpSMpiUdc1xoA3pBrmrXrrPmnfyee1eirgCYenCfMrdiAh7aMoHnQ8Sak55dqAx96wN",
  "key4": "54YYM9pAgg8rxNSaSuWSJsaNETrwfpfxbAdV8vkJuY9EHa9wSWLEEVJ6rbeZKYVk2wfda1vbxPaZBqLUds6RLDjS",
  "key5": "5u1wCxntVEnvrcHg67cJUzbeBMTkrfoRAk4N4S4iJJ19PjSrFE9utc3UMce4vmSzvQizFU43TQc6QAAt4vGtvbqS",
  "key6": "4jbeJXVbvtFHzFBTowW7UNSaDaQZ9kAGYkfRXei2QK1BdKiPrRHaT9v3517qNQdjJojWfz6gdzSrW1YSVb9z9KZf",
  "key7": "3mJW6kTP1ikuu5V82KikBm26c2ZuEvteJTJzQEZRmK4vSNwDs9e7pdZwdzLfhvQkgdYPs8qfNaa26CSxfe1iH4n",
  "key8": "5GnMs3gQMC9Mcnp3cjaCgon8j9Pp4htMbTA5VLGZXAp5t9iBhkreT7cUeQcERYMFyGbrLJgDxwiMxzndFwf7siVk",
  "key9": "3xZRpdvSWSNz3XCJXv4ZCnu1TP5W3TUJS2aDkoAbQ1JLw3zhZZVErjJBSjxnTF4PiRwCJ2A1mV4CJgcjSeSD9tvh",
  "key10": "2ZJYfCGpQgBNstp1Dx3j4mHcEZworLt8gRNtS4bUos3hJFmtVfwnzLLTvGud5WnxGcvRnaAUAsHGEnM4MDjGpm8N",
  "key11": "2NFwrDUj97gPgvNz5Nf3yURm1g6TnPmvhqmZVr3bwmbMfiVyj7JJxzQFvifewt8xar4N1N8ArkFyVRDZ3q6qi2VG",
  "key12": "EWgoh7R7PCfT9JoVpRGtxkGqAMyrxDW8E6QmnbQgGk5BmFA5hJoXqa88DD2zJr3n7pioeZZ1sNtAw8rRdKE7EMV",
  "key13": "2i6h5LfkZXk4fHxhNxtwAzmP3PNhYhHQdJAvagVciNxFgN6NaHT45FtMsKgzWTiCXQd6maU7dKKAWTbXqhu3dEF6",
  "key14": "2fuvXt47NQFDQ5tceGevntbihKYVatY65JLqh5axmHu8czawbVcPKG8buqudheyqtf8bcoKqZ3eiY3DyoGq4xoQT",
  "key15": "2uLysqZaMHfXrUkbDA4wvsH8T7LkGVNubBwjZPZmmUNtmCmjN7qobD4GoBD3LfuYUaeNScDVpPWR5nZJtfqfJGth",
  "key16": "4D27jECGGqPdVydFcwh6dd8rLYj9QqQNs3auycxZKw4mZJBHAM6cRyUUELu7rLqaM16ESk1KKPWW6QphymRLs6px",
  "key17": "4wBgPvjzq1RfiHiSchHm8WMrWbCy3JtYzSrExbfcvyZMQLj4PSqiHABowSN6UKzNfcaUoCGeAmQBPREUWoKyCftE",
  "key18": "BHy4mEkEdA1fakwoeReTVmy8P8tkuzx4q6vX2k3DEPMbSfbpMkyLytSDndqNtqDsb6oxBP354ixscsb4wrby5ne",
  "key19": "5VBr38kxaw5GAdzuXoyWGBrqUyWtYQyRfhMHMbR4Vd1NmBwVTzTju4qjXe2dndwzN7B9G1geA9QfKTQRqxtiGMdV",
  "key20": "2f6JSWJBFEEvX944sWJSnY7uijR5iCRLxkxLmqbfhZ6AJu2shSCKvjcJ6KaDndNtDqy9zipir99gb8Dc4LMjWyw2",
  "key21": "2MzGASR11aUqSv1988DaPa9yh76RbpsMtVXH8XC3ypP8KNdtqXhY3Pt9gskfxt5sJQb3LAvTQo8F7HM6xo9cC9HR",
  "key22": "Qo5jKSc4Hh4PKZZY3CneeJmacp6m4GGbQ245Ygk2Hz8Ykg4Bq2QSbb89aJ2FvVzLQHETHzApQat2ZYQCA6s5Hon",
  "key23": "3ZjCupeDce8hhoURjNrDFanHuB25SENh3Vb6wYeVXxxfpyS3oV2DMqZ9Qg82vHB6Xez7pLLXTaHks3b6qGgzkMM7",
  "key24": "NeQNbrbjqLrdRegRs3xbnXzUYA4BKMPF3H9v5mmbQiPaBBmLGpMzCrSPrnT1DmebovnPkFNB1fHjcZPJnj1EedM",
  "key25": "3EZ8wtERDNKM2DcK9eeovTwqLox2WUScArxbofM1qbCQBeuTZh7rFGGZEKh6XzMiLMiHBNCaXU6zvvre2pp38jAc",
  "key26": "TW933z2MT8jJmXzVTspi3AoCLgo1iSCPMjqizy88x8d8t2YMYTQmFQhjW6xXNRUYQiBYhSQ19vJtBEzNBUH4bAa",
  "key27": "4mWhjaF1mFqtX5APoghLWVEte9ykUQDBebUqdvsPjYBx3jSDQhRk6iHxJEnbB28B6bwF1W4gKDpw76gAPaTcDD9Z",
  "key28": "mhcLnVHz2pYrfp6B7PyHa2iNc724MBFystaJ3Z8gWEvvDxkboM5eHHTGcCCR4y3SML2Nbx5CpGuT2pWcaZb4rT3",
  "key29": "5pWPRkt7LKrGf2ffDoU9g7AVhEGeteHv7CeUHGMV58oiuwBEbT53inD9SDJXP2BQWHfbdZvD3sUTWGwJVQhbVART",
  "key30": "423cssryHPeY6zPjjosK2o6VLSuM8RpjmaqEJ4qE5juT1AAgff6AeWzdetLVh5H7BJsZFFVSME8fGyrC57TKrRSR",
  "key31": "2AS1Tj9D1oRHBbnTRb7VgsU6iEUs6UwWGpfDdjgSMLc2kiznRGQbGHL5ZMCRkJVcAWQj4KVpvB3ac4LPM5QZ6RLS",
  "key32": "3fspUaovzPcsN3isazhaYc8VoxQczGrYy858mTefhkCwjrpRNGx6WX7WkWnda7RCiUuMu9hyyUg8brzJDLUuwA4Q",
  "key33": "23bdp4h9zZxTRaaNmm5F5Yye7aVvotjCw2mkQ8qB2N1B2W2dWVvkrUeWMSviuQKiATXPfWr4STQe2pA433bALjAq",
  "key34": "5jUECxNPMmDww3UHJKnarMFoBV7m7QQ9te8N3qVT58a92mHrjciP6DpCTxv2wnmUx2MUVcNGPEiQRpB6AvdpRZjX"
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

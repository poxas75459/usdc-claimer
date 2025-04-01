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
    "2AT2YtCzd58HqZmDWtpqLYEKJcif6wvLkmrSgTuSPmarh8MUTa8deS2qCvpQk8wFKi5EMJb9seVXXywFUB1q9G8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GG3Bg1NfPte2v42XC4RGWih7fX8GXn4tFwQAGd31r1k7GoxZrpeh3Zn1KUZVGceN1anm6FtygrdFhHrZCGWEAU3",
  "key1": "2GWNicJc7YTgbHrFK1AH3ATrjTNcdc8LdfCzPF9CNwY1aLifikRxbyKBe5Er75aMoXA3THuo6nfM5CM2Znw75kGh",
  "key2": "4PBKq1ZRgk6riEy7hiTJQY3hcF9Nx9AzAfQMzj4HUjc6ZK4UtrB5AZKtWRJZLTo3CwF7hHhbY4kLLZbVZoWoXczA",
  "key3": "7sRdadhMKJ4J2Gz5cEk3TvXiTsN6EpDnPo3gmK787Qm9vsSZPYVFgJLZzbET7pcqkswqdXpaxqypvMLoJk9N2Rg",
  "key4": "1mMFQMcAk2Pp5upjvkFRpvxccbbUefr6LpKxvQLksS7NdahTogKuRKYMPxz75yvBAW2ji5MNQDAXPeAXkVxmb9i",
  "key5": "4ecrQ6WFptAsqkHRWSfXbZjDdMkzfmFB6De1CuUKxFVHkgNoFy24KHJ6SbT3tjmuvgca7gEZngSZ7h5vKY4EhDSo",
  "key6": "4mfv78iopPG1Dhgr6ySrS6NCxK2AgPh5BtR2F94noESL36CPqadpcE8BhhR8N7L7zfk3auRjna32CY813URSQcNa",
  "key7": "kJAP3EMmQHrMMgX69jUjt7PHsMVXHbjCcfWvDw78cVH5TSterjJ8iBVLfrDAcBgjsfq7ux5aKFEH9DezcjEHyJr",
  "key8": "32sKJPEiqVvH5ox6bnxXjVtxX7tTJQ8smTDYzUp96BAdYD4xQsLK621SKcm6qqD8QmoEmJKVGoE3GW5jvuZtUW2h",
  "key9": "2ZfE326tFRWJYb5nq2r6AqVErmSmBQtTYR3XjDo72ZKAZhM35ZTF7SiQv5brTp5sZWdT9TAdzZTWbcycYjuarLjC",
  "key10": "22URuoczh1crPdvuV97Jkh6yZ3Aac7yHbC2AGe7UXdpYvK6cyjKFJrPzHXjA9PLjcggXJkSjJRgq9Z2RmoQBMcZ3",
  "key11": "2vyux4sqcnYNu3X4jhbVdXF37tJk9VsH3RrTJ2hsFE9Vk4cpyi9APaF5ozM9ikanAgsGo9qPZXc4xKHjdRUjovdq",
  "key12": "3BUdhQSdmNS5W42wCPCPDVuzbzuSRR28DftWDtdGyK4XuTzN4pnSDoNRYAvKuuWodgXCimDTazzm8xBdFWWWqy3d",
  "key13": "FVe6CtrGRFivYjckHFH623UXBgYkuVYaUPwBDT7ab6VbANj2e1txT5UDbLVrgnF3SywcaBdQF3Hem8A2xMzadA5",
  "key14": "W4v1B65b5XszUZywJuexXaiqDy2yLWyY4Aiq2V6kXzjZBVnrYbBHEBfQakZ7X7zzXwJNPTm43cMefnevsZcvtC8",
  "key15": "28mfhX5LaxbN9xchDq75Whbwoer9KCLG78vmMtwkfDPviEXkerWKhXKdRgijLZxAvsumoSaGysZ4qXpgp18QWwko",
  "key16": "57zcaZzThTRUhCirJ2936YWzHUNFhBsFxALjRuUFBUdhn6Km7C2WRMBJ8wkauYVWAs1oCdkZ5UG1h12YoefFXEQa",
  "key17": "2r2X1cTNdMGUAnnuVxvXNTZUNcqDFiYZVZLqyzF3ppJqW4ryKZkuQjhGVXuCRJyVFSzLKHEnwqX9sLKocsVbU4dQ",
  "key18": "53459hvTcU9stQAHbkWe8Uoc4ZJfkv3Q9Uv9Jf78QqWudi9cCXBZq5nW2W1vCUBMDwKmaGEW9WH4dssJMgUu6r87",
  "key19": "5NwF56zkzdvcmCpHeh6zbrxVtE6jp98EBGc3vxLo4pHYGJv5q4hmVPrttHe9SQVhxt1C9uhBMaTZaXnoU6LRt9WG",
  "key20": "hisA4k4qumpwLqmMdkxrZfsgnUYXSnMo2xLSML92QCELU4ffttogUvVi729DXA93VFeaep2JDoNj8egcSe9M3Fx",
  "key21": "3raiV34X6k2Pjtqcruq5bvzRdkikyMC9gBGR7WyA8a9TwzF8b7ohxxyRe7t4zgVCpx9kTGEymgmnJwvvtcMbGne7",
  "key22": "3mxDEvgU8sPZjr2aW8AHLvZiQsjD6Ri5d4yRnHAASej9fjHzJKLN6rGRomMHWF1gUVMtz86hnGwWHFzMtXnaAGHf",
  "key23": "5d6nEvRcZrkRN4Pvr7wPkJ1W7AaCDQESC2YBw59N3ypsYVNrXhe5QNGCKZo5WMPMEmDNe8begbaYisgwoGLGe6au",
  "key24": "6dYLEWJeb76N4HqYss2QTub4W3ioxpvjCys1aC5aEC3o3tVEzj8458VLcBHMN59ZYBe6i5xC4Y99QfW9BBj3ZVf",
  "key25": "3GvdBf31QX8gU3vbi6cqeVwegPNvpd4xa5WVTWCpbDtbBdT78V6gQeVuewjB8LrpNcc1msKU4qVReqkvVHn76rb1",
  "key26": "51Ux2GuYoM4MooqGHk5siywGXSwZhDcoH9yBz4jzjP4jZhqbJVRU27FEqppBCaDx7CXabGgJLEoVDZtR7zx9PsFX",
  "key27": "5JFpV7D3Y6FagFUBLffdKNa1DMaoSZ89GXgVHKcsGBBL2yqZ2pzgAJFXzPYSLgiTzut7Yx6YSS1YPzd9TQrLFVoD"
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

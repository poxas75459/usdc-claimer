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
    "5rcgX875MjQgdahB4tWudqZBpdmUFw5mLrfZAHifyvjR5nnQnmDBSJcjVDTRMgsaq8pw5bHXkJzCtyAwk81TT9UG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v8ijCFhvop3Skme1SeDHZD5QY6uW8zvXwTZJi73saGyYGDfacBLzjUah3K8uWmUmMbDe9EzJDMDNuhTXidz981U",
  "key1": "2kLnqC6hFevAygMxHQkwwgqyWAgYm8u5tftRpCZR2Cwrn3yzbGPy16us1RePQQYQPf9MASy6F9fCcai1kT2PUsH",
  "key2": "3Y69T85HZgAGDwLxV2fPxfSvZBH4iaNLUFPq1QL1oVpV4LWw9T8th6Y4wWvHSyrRemuATY2mYJWNeYNVCVLbLiXj",
  "key3": "3Nf8Phajekg3S4Neo1QvgmrgKM6Cg5NBjMe7EHm7e5BPak83o84G2rDDGofgpjkX3YxanFAtt6aKUx8ykdLGv1Eb",
  "key4": "3Q6SLz8d6BJsb3mDco56QC7fjBuv2CEL3ZCCK3sMWzRYFrJUWiVqe1Y9BRC87Umn92QEo4LxcCbmsrS8LfkAhzg5",
  "key5": "4VWXQmcfteWDz6wkoogKx7SR1uYqE3gXoyzFugtDjkwzyeEkYZ1Bkf6vPvBu76Ecmst9pCyMS94XYAEoSSuqouLh",
  "key6": "3p95YG4jP4f7rBwQkKpjNgzHNwUYrVQ2GRnqRoamjpACWS95K9fyWiPKAtxRMDXrNcMhiNxBqUSn7muyw2oepboH",
  "key7": "SUEEmCdmsBWKMUyyytaRwJCjizKpu5Tm9g1No1NTY3wnhkKcXxDsgLjzEbi5A4obMttNhg5fZv9ubiiHkDWTJz9",
  "key8": "5iQj2RkjvAYmr1RW5UpvgRPxE932Kxd1v3ykedUSUZ7EHPqJx6m5XjMsd7taAbSHmf6ukiTePbNZKTBVkRqVy7d",
  "key9": "46nthgx43QAkPU85cd3YbAnU6EGZqNDNowZzgiiUDVbdcaxe7HieJ8iexduzypwTHg7b6zqq1iNdgCPknv7tK7QP",
  "key10": "5V7vyM51FPbHwhYBADnuYmsh2LxfVRh1JfRw3nmV4LBwWGX4pWRLSw4uGPDyGwfixXZDvu3hBcougkFNtPZJ5sGf",
  "key11": "4AUBmEFR8KC56VdEQzsoF7yJAVU8QZPXbCH81YtZ6ytKZT7y96rrm1NVV9MB3AtSiBU5hoH3pQrRpY8nGDhd66DN",
  "key12": "5LeJUQfSXmHjVTKwo8qryg7dKRJDYhJG1MARmZSLnrPvfteAsvBtdsxi37f5tfoQh8ovuszsmV1xiF3UxUGFPXxw",
  "key13": "2V5NpKFD9y9ZEHxLfcaXY7Trk5SwkR5acQLkR9g6AM5WZMAMfpnoGNiamDPuRvC5brJFLSXKWuLGzZoPnqVRbhBs",
  "key14": "5F72KqTgwqwtMgRrk6Gp8SKjxiDb5ZSxucXXfHBm9DdaanS7yHcp5qjfbXCTrBQHjiDm3vUTd3g1Lji11KifbufW",
  "key15": "Uh13WQmPZZFx3qyD5qoSjKm6dP8fgtFeciH9YyVAxDYHQsZGQMqf8xffZGh9VqmGeYaYtbf74rUVVoezRjKixF2",
  "key16": "5oJvCeS31J4gFRJgvAaPEhmnnbrcy7xMQ6krqQ9eZMzEU6Di23TLnjs1TodPUHMwzWKKELF3Fxn1jEE2iawCCVr",
  "key17": "64XK9zidXgD3PSJEb51QUKvdMsrdKtD3mMvY2D6xnhK5omFPTTEGPMMPZNNPbu1TYij9eRoaeFYQGAeX6RAfDGtv",
  "key18": "2HoTyiAKie8XufE22VLXEQEqPpwaG1BQHv2mK1VkYKmqiW9yRSzaddahvcgDxDMsVsEegsibbZMFhrwJTRoDsCps",
  "key19": "5qJrbBHCAfEP8DjtxwaEgrbyjPgLZpd2ZMFtVsEBKuAu5gGepFApQpkehTg7Kd7RVQu8QEmYnDDiD66FXCHvoU2W",
  "key20": "yzrSfrELF4hofvRZ4FaRZ9u7r4NLpqkidH7MtesnMxk9LK182j73seiByHXuxs53QbMkKYoJGqtiuQF3NGEKubx",
  "key21": "3NhucxEbP1riw5Hswq8Z8RJPxnsNumNkzbpJ8zmirnu77jc6ubMf8raBBMDtDTvXj3JcAvWDzHe9NWeYH8oa3XfF",
  "key22": "32xLKBpt5QhzW9dULu4gXx3zwKJUPNn8f2taoyp3aZkMWjaGnSdtvoUq8TCnbfL4dZAYvDA71fzaxRSjTFM73yBE",
  "key23": "hBisSAqWJwzQvQKwBv7HXRBBPsDwSdiCkGdM4JTFpS8oiAJyLwvDqp9aKMKmqwf5gvWAb58LLJwC1zpv5onoe8B",
  "key24": "2G9w4UV1zHEcTNCB5ozJ3kRA8AezBy2ZqLQXQnRyYtdQuLgk1cgkGR9VrtZLBzmj5jzJuwjQeL8Bjn6StSgtDHfS",
  "key25": "59B2UTfxkhfVYYDhbmQbFcLDGF8w5JeXdpaaKKkZMQUEx9e8xCQouKP3ciraEoLi6JdncAANceJg8r6BGx4MmapZ",
  "key26": "38GXNWHsMHndgaswUzw9cJsY9NwPCtUvxqvKNqzoCFmLwm2yjH3YmPCB85dvU5JGt9zvhvqraFVb7XvxAG7ipABr",
  "key27": "3imAErL2nxw2iE6DRi1k8deXRp3NjPja4dGA25BagZcgj6oNwxD5TCufpfDBRXmVcBWGCdHAQKs8DBCoSV2ksW3p",
  "key28": "2hEgxZHGaeeN9sVjPQxTLGVeWVhmzBnmju1mxWs48RBdjJtgGxH9tVcVEj9EpAYCg4zpUUZNGLN6pmn7MfwXZV3k",
  "key29": "2qtMHA98mDQ2xNU9CR4Jurc9SC6v7DbgKYGwox9Z38epeNBkLbJ5ALepbXxr4J6hRq6F16dfdiqsiPTBhrCsZ6bU",
  "key30": "AAd4muU7PzUktUDaLB11m4EqcgqKJMVN1vRpWBGgCqi5pqRDvQtCjKwqU4LF24ZxAdj8mb1zGTPYXsMXTNTu46E",
  "key31": "4Mpj1ApyuZZYA51PqYb6kRE98sWdURbcAhMBvArkZC31VbMWwfRpd1ZHs1YXg7dgzvTQL1cpm7tYhEvWuFHr29S5",
  "key32": "2UzXsAnTHw6LPziZnSqs9MQoaKSAXwpPyJu7B1df4zUNhpuhHbhwKyAEhdBrsXV2Qk3SCBtsbeJDDoAKtSxqsRwP",
  "key33": "3Gr5KfZgK3tUjKFmFWEF4AynWVr9P6XMrcFzVmxdaPBNoRYD2448UEmHcJFFhUKQ71Pj1kpHwFqPpvTYUiNTUx9K",
  "key34": "2Fo81kLVsKJrhZK5Kmow6fLXLra1yNDG9dVzswKMY46mKcuocrNUEaqcX3Pa3PJ67Ed3vjXwJMD3ho83Nc2MAAvy",
  "key35": "5Fmi1nVP829otnZ74mAdA34n9EE8Hkow9pQngkjB7qWrG64vKV5EvdkKjC9Fu4yHSUvTE8WJ5LxFGyWdCX6fsL9H",
  "key36": "4Am42MNYYBAcye1Mxusar33hz9gX37AkdPHqXRzNvfFh8tSRvT4xZAegyrmfdUFYuL17BZ6meKfyJ61t7BbifKrb",
  "key37": "4bKtr5qpTpfqQWDZ22H4n9F3xpLksMMhcGPANJpjH1f7BmvkNjbVKssgrTUSRrQ2sKnjLxsPq2ZPyiMUAWXqDo2G"
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

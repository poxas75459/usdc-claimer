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
    "W32oF1zfbpdpo2eqct4EyfCyFSNdDZnwcKXkM9Gcm7nGiFY6ZyLUTnM4gLKyBS6Z1DqrRzC2LLXVPrfiwx4f9A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22A2VEJZBYnsFpviYWHbNvbunUKVn4kq1MgtmMpuQm6hmwwX4TKNHQPqpNy5G3QVdcuijcQosRDREcVrL5e3cDHU",
  "key1": "4LVgak4Sb5jj4pVx3CHPnRv462tqWtG523ysiuvkzBJayyNeq9FBNXs6KHtfMXMfKhKpqzMM5L8uMSa1h7mrxBC9",
  "key2": "41E2ZtfCozmQzvhUzrSdJDouGnz41BU3d518h37xSqbqow1XmXad9A6HzwQXbhLLkAngsn1adz682tk8NH3zSkoH",
  "key3": "3msbnYu1ETZfXEiEnF1CAPPXNpJRufcaC4p1bXUcDdiL83buS82NFggWV6rKj4FcVj3DDv6wmS7AEVypfCm43Q4S",
  "key4": "2fLMzrPDNm6uCbHUSmnxnj8CiK9qjYg9oPrkJvYv72jAQ2JjxHAsPw9unN9p6wZG5mS1Z7T7K2mmNivcnNw5GrMu",
  "key5": "2YMFKsP4FSjcWx2odZXzdNjVfaS68UNej8VhkvJ6kHyNNVeHDdkPbs5bQPt4EWJmHQmVcwdQp38rggZyRATDbnfS",
  "key6": "2XGKUat4fEbL8o88MJVRDH7CiM54YAzo9ZFJpvxwgYELQYSVZGtWRCaTQxZVdu5BGZKvdDgZnWDbUWhg4xVZkB59",
  "key7": "eBzNBHHrQymJVKQVsfHEN5AhefXHnRCpkuSPdqrw2akaDgm9wxKGBiZQBZ9oEQyYjZkZ2m2Zjgj1cHpmmeL4CEm",
  "key8": "4nMDtfF9hSFSM1RzF3ZfW3ntyWxGfrdU886WwhtXvxx3eBsJw9MPnhRdgA9VbwQQbssFZ2qbgA1mcoWHNKBJxkom",
  "key9": "2RRJAv12xwMN4cfCbxcbRXNe9XK7HyavcvHbBHcGp3kbdwr8HrJXeEg76BKK4pW5NjGBYjvbXXTxJmKMrAA21DHe",
  "key10": "5qxV1RUACt2HsJfncaZ3doy7y8iZEi3Lr8RiMLuiPcZ5TL9BwzB31kwVEkC2trJzZtyMYpHGhTbc7h8zmRmyqJFD",
  "key11": "2suexDwiymrmGpttuy2WW2afAgDb5baiyDg6GSzdqbfx5FXvy134Vpz2JYrVwfMdAK9UVq9sn4WA4xS46QAbHd4b",
  "key12": "3eUmp2gHUPN3ZcAfX6rMfGUxNnRowWK4wGVw6sW9B1sHVCuwD9UKrmWBZLZFfga6oQ2TAJUb5zYkvTeNoHCk2161",
  "key13": "5NhhhqVvZ91tjJDoMembfpxNZ7WEaWzFuQfx46DRqrVgqGZ3kTtjPfBQ23mooWKgd8vKSsQkvSSJy5ga8PAFM5X2",
  "key14": "5pBBxKfx4kNwsWu1dp2iWWvYQDYFo5nCTyjeHNQu1e5VPTZY1tWS4Bzz4vPP9RBsGWGDbeAVZf6eNySpCQHBg5P1",
  "key15": "5c6vBQ2dAYXTrnzyuHj8MMAzyp3WbkHHaXMomFdLNgCdA4Rie7GgcBDAQqeo2obK5Wk4DimPeuBo1swAXVVtvQyw",
  "key16": "5NqER2vKinRnfZKH6mgt9d8DAec8CjGSKd99LNZRZbqJhkspCpTrY4PtWBtPxP6JuanpzPm2JvADVra4jZdbBAM3",
  "key17": "2pEwcUKxmvPoVmxZkABFisEtRqzN3bpDGrNu3knpmnb79JSaHwqms928FaFFG2dTdSkWTprXva25VKKfmarVCpMM",
  "key18": "3H8EFagnGJEappSWn9qn7zW3hgP5cnybYqYzuevmMAtEJdufxghjaTbVUPdTEfjSipEmriL2RkK6P465DZ8ei79m",
  "key19": "N3JEmSRWfVCKa6ZMUdgzaCwtcZvAX1Sy5TKNo5yV6Ho1kXFseAJsTFx2c8VAd2pH2tw8XgU5YmA7MXSA7ADsTh7",
  "key20": "6EaVTEf1p1DUvAQAy818rTrwme61TYDBuWmW8hsNBqv3He4oKDZvaMsDY4V2gzZMyaYJXihJHQgfJi67EFmadEr",
  "key21": "63PACqnnb7nd6f37A89R5YCF6o1Y8wVFn4fxjYEBnWAuLHUmHxDMaCFjy6LsE4c1xMfNUwCF7pokUyf93k6Rr9mp",
  "key22": "nUVyUbMGSB8rqFYQ42dFKqtSydakcubd7MeBg9KMjR68nQbtKpuX8E3y8Y8SeizTVJRyCXUK75rjyxhjSzE64Zh",
  "key23": "29AgykDEUySFAfPYNnTTmLUC5HbFaR3FJQCHg9eP8G4EJ4YUi9638Jy7bd3rxxa4V6oqKYktR6JvNjvgoLgyi9dp",
  "key24": "p9BBQ9nif8s9cSbwBg9rfRnaWvyCiYJXNNKC2DNpWTuqgoYzqHtCFGjncyjSEaLdo9xRxdQiRzhfDGnwzsN57nM",
  "key25": "5kP8gYTMmQVeQVwWoa628US5F23LQBk529uxGDUsHUpRXn8p1T9wnbDVU49eeRMhmdqDhRSttzjbQwTYuEYhpP17",
  "key26": "87s8319wvjqNkFY3D38Bkw3JnpGi3TKHrqhcguywekJGbzfue5Vykg89sdh3j3MntiZKKjVwZCnLnLEUMfCfdLf",
  "key27": "47jdUW3SSxyNSCHXmvK96WkrHPKWcLdYFKsvGdwHUzcsoX9JJfWfD6ztUbkwqEsv2LZinAt14NVoZ2qpmCHJ3N1r",
  "key28": "kjyGcdZeMkeidBV2kMWwPQKyDPUpVUyQVQD3D5xTbvRMdMRyr3H5mxH6S6UeiZ1oAJ473LWQN8CcBprSsucZwdH",
  "key29": "5dFjDSm9yb2Y4YoGt93tR9625BGABCoFTaZ4aM1TvSWpjfWWWivyGuD8STynm55mswVAAvTCHcr19AevsCe6ZHsb",
  "key30": "2qEwFpyrxeQRguKK71TwGAEj5SbnUPTQGyAN9eFYh2ct5DHDR7ZtZvXUy9xLLkJVjVmFFTdJS2bVz2SE3gyoBn6W",
  "key31": "4JGLDydapB2HqcnP8d5w5j143XqNgu2gxjuud8LHqb79LLCEYx7skMeyUDk2QR54xdS1Cb3yxZT9MPpeza4qk21X",
  "key32": "3z7N98KLM4UtzzfBthMSSNqpLhA9mrEqo7Va8cR5vLCu2FQgYGHeq3QtC4CKLoEbcq8p8PNAEhYALmiqeXCzU82x",
  "key33": "k9wSz8Udrm2r4mBZTpsksgkw92eHx4VQGuGG1zaQiqriSvNJEmz1u8VeQeWE4CJVoXAJicGVqkCssodK2Z75Cky",
  "key34": "3x2Rv2hrtrBqtuVuGUAJCq9cAEo4i8Cpv7Byoo38vTcAeLzwMZcCfhzoQnD61Us4PikCNJnd88auoXUKFeusLQLG",
  "key35": "5Gnntf8jBZpRjP3mQsxjFJ9WCxZ6XwMGoRrgVkkmw1a8B5A8LhfQsVFL22Nzm4ApM8KahuHcdRmGD8w89qJh1Qge",
  "key36": "3b98WXSA8MBFLQMh3ex5KTmzMBJ124nfZztg3jVyVJJe3pw7Hzf8sRCjH1SgZ5woEKVtJC4PaGfmmVFGr69KfQ5F",
  "key37": "2Te5WxE8qQgUGJpPf6r1geYfUBLoc1iBeBWAvND5zkbsUztr5erCpEjTckMafKe3ZAcJ8x5nkUrDzq97jdTJ2Y9D",
  "key38": "4HkccYwyC8vkrGUaE1jxk1ZaRDwKqaDMWwtqoeF2CesE8E3cm9QmqtSLQgpW7t6gxoyagoHs814mwZcYu59pN9yB",
  "key39": "48pRtMPXXMgsosuwpkLZAnPdbn4ibh7iUuMonQy833zT8JATy5jcQ7ErEpuvQ7bPzxLD244qVRBXxHCbqCtgRXd",
  "key40": "4WakGjDnhFQc9fLrGaGQ5M4mpGZRXzweMXsWg9py5523vGwgx2bhWi9gjGGMuESwhfy81L51JKvPNLfcgoNuxo92",
  "key41": "4pt7UkdDTMXUJK8x8BFXpYqrrjRVr6yPnedNHFgxc6TgHjVb6ym6N3R8GeTVsp1fw2FRv2B1twBqdJLnHAaXH6p3",
  "key42": "3LjQ9vggnReoMP6umEN27qPDuS1xgA9A146RMA1UjwvmXoL6Ci5QJ4nc4oTdmUs8ehSXyvXkTWqnrzVtwNEJf5M9",
  "key43": "3iGD2nBNZxBwr4mnUzC2bXDPhSYgSyrneqqNdxaWQRKWvaxND1dk7pUi2MBsbTLfLXmmPZztJBmz1caUywcjYNEY",
  "key44": "2GMdeiDiFhidgJJnetknJPuzowcgNRfTftGC1cZcs89sJnnD1wQLJJKcscgRibGew1Qzf3eY3oQKYoKX3XSyWJqJ",
  "key45": "5EGAm2nbb2bPT7Q7uqg9bxvsiEbhqMaHLjvSdvTznL9jcP5WqkMFp5xum3Mu9TRhxqhoQ4ifK7JtrA33ALyYC1Ue",
  "key46": "3aQR7g4GcqAutNU8yLsRC917XoCtWRhH5uCtVZ18s5oN8zq3X4DY1gdQ8PCtqZHW2VW3uPwqN4SYASUZaVa19Awd",
  "key47": "2ynXSDxhjVuaJ6yLtpvDzfbDMVSTZ8FEytwv6Z3DLN3qCpfFiTt9Rw6MYPEv6zQx871uzpypHYXWnQGkAa6EiQSP",
  "key48": "4WmSSvTyj9gXy15mUkGrd6BAcyLPzBchgWwxmZgmN6h1y7sig77TAVQVSFstWvS2iLAhrzMtr8QnjSPYB4bngfUL",
  "key49": "4fc4vLMrPbPDRKhw3DrP7XqWWSo2BNyX5m5qtg9DzVvJ4ZKhH7LyUHeayodcWqL42BBAp8SczMr8rn43y1TExyyN"
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

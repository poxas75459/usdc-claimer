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
    "3GQ2hJaWAWkSLjvgJVmwa9iSENSaX4AiB7hh76ZAUV3bH9T598D7kfuVYnxd3rrPnM6xDF7WaN8vMfvHGeS8p1Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gPMvxptMLGNi6vchSg8gPmknjy4XXVXks1pWoQeVS9bX4bnkiuwhwLww21QoddmYRFCrr9DHK3ic89z3wpBJjQ1",
  "key1": "2fq6dZTzQx6VRHs5gdU5pNc1UjkuDzsvoFVn4E1tmTea7nKpNByGf7iPjncCQf1FtDD7RXSPg8XQ2YwbzVJH5QkD",
  "key2": "2mjkSS7V9PgYeUmtEnhhdKmSArCR3Y6FX7AyvpuU8ANcEGwfbiT8Kjg1cdfVxGpxYzMNJ22X4yg5tWJi8HNRAs8g",
  "key3": "4F26XV6EnBJZ9QPSHzuc3mcEu4jm3fj1rjQ3AspEzWyAuBaHMEhbDpHojeRNRaK6vSuoqHjMfpKfbADoUr83bomd",
  "key4": "5u69xS9mD7F2RUyNGVLeNLWVuNeS4stx1UvJVBAMS1XxTAya8zxxiJeRkY82XBKMoxPJg8UrSPu7nmFrPvffnAN3",
  "key5": "5V9CZSZmaaeh8u3w3tQjExoA8WQW8wqLsV8GSbBFjkkYftA6X9dx8uvPr8RY7sP94B5GETQNQCHTQgwVmYE8upsh",
  "key6": "bYbGbUyjm2r8ecteWH7wWDavPXLkz2r5fi2bLA3ct3eSrZzrd62WAkm4hAyZT8BHanzoFqCCGz1jJ4TeBbJVjzo",
  "key7": "23MyirpVVSaWZrUAUnKEH8B5STRvBL5kYzNPtxfGA6JWyaGXRrVQ7V5bBfbYyWHBMot4pHCsLjmVd6j1gL7gABbF",
  "key8": "5pBieWH2eBJvSrap6Z6GGop7oe3UnWJbQ8PRafECrmR1zeT113cxmt7ftW4aSdieeGx5BtW1ffdqjep17s4MEvoW",
  "key9": "3gCbtGz7cY57sd3h5qxf1nnQAybCRER28wtzuyq4sXp8TVNEEE6MtXCzwjtn9KFouKnDrwJgnvaWVg3mtuRBDsX1",
  "key10": "5YbiYqH6n9HmXzmh7ZFmcA79uvoux4wEyChK3DYiv81oN8VtEEGdKiCBy93YJyKRABrVCzwZf9DYBKpsW9HHjSXj",
  "key11": "7jYXQa9QH85caVGFG8wAaYBxUFF4LHXpnGmWkSxKAXgVZ9h7rvTChad4MY6DoNhreDHj2RTu4yxusKQgUTa4ttz",
  "key12": "29YkpaqQmq7N2rCBQgyr7mtrMVLdAiFb8nvrmQX6CJudYUf1NkSvuREL1CNSoCxM2o1TXEmVP4MfBPTzcsVtynrb",
  "key13": "4yqe4BeZJzsw7xkZMBodBegwa4CdSbi9LMKzLZHSeKqh19XBqzEM88GSZhxBRXY2sZJXwoiko2ZaXPgjiexD5H7o",
  "key14": "9KhZyA5FNuAiDeEzk7t85gxbYe88GEXWevkpeyXAEEJhKY9YzuRVFCXuAuznTP9ugz1sSENWFUsvy6HXNehNbcL",
  "key15": "3KuWPw9yV6BBdNCkF5xq4M2Qg9ziJNbf5wsGkYRmWwJAo2mPMF9k6GsuAHHKgQiYzvy1hdF9kuwTVWAotvF8ggxc",
  "key16": "3A1xqAzGpCJFyDSWWGPEVp3r4gZKtr5txrwJNKGpNL2z2AJo7vFjYVKJ31XypZ8ys1vVKvY2mKdyk6z17qSKfvCN",
  "key17": "3N1h4CcXm3Y3JdvsdJFZQaoGFqzZsMGyreLvBmANdU6UXAGg9fo9QAmyhFQwQ4uzk69EbABuMeNaBUTJukXctyoz",
  "key18": "52rpSsyPcJmoCsrkmuThJzcvm4cbb35UnNMs9hZ25T2m4fhjwDcfJqMncLtEFeQp4oF1CGoPnbVgg3PZLxVGuoqz",
  "key19": "56KbpdHHQdZQDavoYoQVNQCdFcX7rZFcGeE5HBNm4hdTcuPo2tjQqT3unbczbHCuHfL9cSMWK4w4uiW9hpMv5rQH",
  "key20": "2Nz38vbqcC6MP1uTfGVMQk28BzksSZV26UoS44eForvs6zFsQP5hHVaUPMZ8BXcyj1FLeqECoFuM8mwSMTtx6FAC",
  "key21": "48uPDttrtHMTNtBBq7Xb9CS9jZn87BoW2NiF3xx9DM1R3YAEBuUiJ6gSgALQ74Lch9ipGtqaCqzKjAoMGX9vRjqp",
  "key22": "4XaC5kiPeFymeZZEDGVmUFowh5n6zdGbK8FUXsEDSh6UWfubHz7uHghZtXbFNnUk25vvR2JquN83JPizRVwj1ADd",
  "key23": "5ZFpHqw14hCCGsM3AuhGuAknp1BQTPjRqsTueg6gZjKhzg5et1y8BXBKqo9tJaP65FTRUb8TXMN14rbGS473Savq",
  "key24": "QVpK7VmtpfXBeXVihk5eW4vjCiLtEPV3nhpHmRstktbNPqie58DhonoRfnSZqs25uTDpxjYVVDRK6QtnT9FhdNc",
  "key25": "34MkMLiuuhNdW9d4P6v6s2WAssbSKMnhwAuqyNxJCiQEeBjJq3fbYzKYJyMov69BWLMTnj7CMZbLjLNWPYSkRzB1",
  "key26": "59bRymnjNK9W8rUuvakMFDeAJQZgPHFUj1n5Bmnavyvv2bjefErVoULxUpSS9ZVyM8oPi5Y4AbqKdEP4jg25XJbz",
  "key27": "2gxaNwdNUVhwwMRqWSk5vzx6rMAmyNQ1bhzATWzfvkP5JNJaFvuoi8PK7xcDunaZR9TQ9ZWpxi51XSCMDo6mofsz",
  "key28": "3tGvBox3myhQEpj2B9PkoZPzi8eKaKt4vcVrK3wEEuhDzf3GA8quxcNki7iN9KZnY1qz5ZtM8U8Goudf3ozhDAHG",
  "key29": "3D3Zn468TXAh91ZC3sCNVjhYJJKeHMiR2aFQ2WeEp7s4wtHWy6xxMbWaPUM66XVGTwB1bz5Dy7e5HxxWvnqe7Hs8",
  "key30": "3b7LWerrLqEiqW9wWRtkjaAuzFYLvQhQ5iNZoVUpuvEn1EPsXadAMuhRv3VUGWe6FcwAMQamLyFpvH3dKPNMy2cc",
  "key31": "31zLsfJSi6D8FtXdBZTPqrZKAvpxpZNTTYNwYBpMpRgxYwvagvuwG3HEyAoBrDFcDP4yBLAKW6BAHxWLWYPTqCU6",
  "key32": "3ReGqyLiBQxi8ibUxv9F7mPQMEBtRsFUZ2pLNpiD5bZ5qTEFxh1LxAH1rwHaVcuvnLK7vFcX9aLSZYPegYq1BkvD",
  "key33": "2RRDtnF4aEW56mwodWWfyUsQcPF7ZasFZLpdhtUKFPX53k8R4kfkDdwfxEDdiZbmvkp4xxVtqvfosmKfrSuEfW7F",
  "key34": "3XbrJ2oAx3HZCQeg3hyAQT2ZEEpyppd3gMzpv6QmD3uyb13gCGxcqgkpcpXVJx21RF8cHys8gRYR8TLH4hHVoN4k",
  "key35": "5qnVsWUpd8r7kUYVTU8174Eh1ngqWgmo2gEVWrHuJxoMrEVqxNhGQMAfxUjWXWUJQqQsLRx8KGB4yKZB45KRmu87",
  "key36": "4UyKwiBC7MAe22FXLvrVCiqJQ4KBLNzRc9qB3J9FyYN4Lg41axU3C1bGoVQ5J1oUhNmc9DFf5mKGEMg1XxBuB3FE",
  "key37": "2pFQw4Jzb6ieknu92b99oUr1ETDzG9Bhh9pyT32gJirNcPjt7o84itnrn1rFTgwd1h9rUCRAFKGnew5ub3WAGwDA",
  "key38": "3e51wGvNqFpR8DAAuCTgwmEYFcgPWGvJPMVbBB5tX1p8mdiaAGsQN4xTipWVjKYY2TtRNUG8JPeLNNDP2u4XpGfE",
  "key39": "4ShbnTxY6Ugr2pe4zD47VKbd5hC7ETGoVjiK8kJXFUzMkfkgncAkp4ZUC5jZiHMLVMRjYNMLB3zMDQLgmbzqkiUR",
  "key40": "4Mm2EBWFvY7MoB6UcW2vLpTRUkUYq5XZU4GWmCmDM4xRJq3xWKHzq59AckrEnQMG148iGCtGU6FXnLagnj47LeUq",
  "key41": "4D8ABqicfX1irhJFaXM9MmUj7hcKw9BecQXVTCVLpzw7JH3TVcZmmciRnpbvd4Bwae6kwnwNJxj9uvoMq4UU8E6R",
  "key42": "3z44AzzpSSYW77ePo1KX75hJ1Gh6RNNSr2rgeqVwqxMouiAAuwNZvRiuqyQa8UNweP55MYxpqobbsTEVBnwSu93b",
  "key43": "3YWaEJDjez14np7tue6PSYe5nnxcx9SBRaSYN8eiijGGym6YhhAbwN5Vd54ky18jdPvSn6psWxMQKzgxXZmryu7N",
  "key44": "467noKQg3tcQRuzZhFy5P9tX4V1Xd9iYL9TSZ3HRU7R49CgXDtnar3MoE2ccE5ayVeNHpG79ynqReTi9AcXqi9Jc",
  "key45": "LFxupjmaXCZWHhTVPPysETQB5RxGrqBd4b7panYVw4MRn4KRTi8wG5XUCspt1TQW2q5zhGkcMcY8F1x1QANyfJc"
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

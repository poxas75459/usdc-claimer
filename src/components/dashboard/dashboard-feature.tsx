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
    "2zxHSkv37nD8kLCS7QF8UM7ToBdCFCKEKBZnq4AqrmU5sVxXrVKE7W51VWcspHPMrvCLmx8CS7imd6uWCRbb5D8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8DNgcR5mUchgKAmTJaLubiqpBDdGxTLdgRPpYg4MoRsw5ELrcJYsnc4o7gBog3cgK4ZbSUzvroods5daBwrtH1",
  "key1": "ahL8yD5rf9mGt7aw8DgkdtnBPYBBDEUyAtid9Xp8Qw219m5CdFgHgi1g8nGiQG3HLrLQEU43DMJDPf1H7ga33RQ",
  "key2": "37SQggnkXM3CdH1PFUB7rBHhRavJ1PzH6bJHUqtURAwqFJZL8rZ8atgh6EuxyxtSSXh9SQyF89YCEq114ZZULGVG",
  "key3": "2o3NsL5GX3U7J3fsZuGQtqyFpPa8tJnGH646xXX8AuuEyr3Z6z5b5RkTpxHPf1W98a3x3c9Q5J7cKKebPiRU6VBp",
  "key4": "3XfTxf4578s7mQKMH2fbpZ6JN8kUxvRLWiHXFfN1SuhtojBZypnSo4N1uFP8XRwZoK6Y4c2qPhKk6SRihiWHyYYf",
  "key5": "4CwZum24EFCUY8xXUpjtr7DZN3GdtBhbxWTZXcGr8vVVGrZLYPqAhk7qBF1UPL5PQ1rMLpm5bYTcrZmMv7aWdAGS",
  "key6": "vqPExXWR431m77xJDUn6A6vqz9cZ4wcBtzCt2UgcKvrewtmtfNjYNE2UccKGBcQMKYfELm71uAYQmLGJ5ZbuyEQ",
  "key7": "2V5vSn67oW6DNHVta5GKjnfEpbBwh2y1gtpDuGYLzrPhq8iz4CYvMbBicF3u2EWvEm7un7SvMmqjbKZbFvnrBvpw",
  "key8": "22y9LqV5L8kMPDrgoczciNKAxTnVMX8jPwWNptHRceFi3QbcerywzewcNu34EQdQVQX3f9LffHSTxHVCMGPF8bfg",
  "key9": "3SfM4MBZYgTjEMYwu7T2PJDfkupS6BCjhsLiiV6bNXmZP1RL1jeaqPJzxiLQXdU9T1eRV8euQnG1yd2DaHeyXuLq",
  "key10": "9iSa4PzytqEYQt6ftj9bHSvdusQyjqGziSQzgy4Kpi23mzQReMrxaRspzwX1gqyxcepooiontqGtUcAQrZW6ryH",
  "key11": "446t63Lpa3rG571tKdNkASmpyxsPaLSnborpBbeRMAb3Lx1MRv7DSKf8SP6X5Jv3PyRxBjpDjY7ZXmueiPDbGRKf",
  "key12": "26tpLUt4NsM6mVPmYMnGDpEAw8jVwrwhhVNwn6KvNRxmy2VfvoFCBFK6XbScVhBrBZpwxdnsLcP1FV44L95vyy49",
  "key13": "2CuN6ETQfk9Aq5pPYkAbuKFb2AEtiCJni2c1KWeVzHReifqXaHx6xGCnnjY8XwdF9cYKV1TH7wNK7ocNjnYXAJag",
  "key14": "3DoyiUj6576nmXZB8Kcfghpm5AhzqDdw34YeSFmRrXK7NTr9XX5KzMwEHckfhwTAuZQCsH9LmZ2bsddNUyCoG5vZ",
  "key15": "24kCd8XdRSn3DYFEBZh18GnbvMtsRMLkPoxz2XyR4QfZPmUUwdR8ThiG7N598vsREZHr7dXKLGsJ3mF9fMyzDcn5",
  "key16": "3viErHTQmKBa28DStMycZN88TgTffF7vVwgkC2HgbZgZBuzTbyagRKEbnTJADL2qR9DeZy4BaAAfF3RmuPZ8cFH3",
  "key17": "T3ZNUWeeNcvzUPzh3PA1SZwqx6NmT2fXFcUQ5C3xuzT5EyGzfJduprbyYYegzMhrVW6sq3xTeBYWjnypKpsM4to",
  "key18": "3nEzZyiPUarnnqyC83WawTYMwT1AfebSmzwqxGPb7zFrVBufJL5j9JgqvHP72yc7MMFVmNg7eM7XCTzUMx9zHBjc",
  "key19": "4aC93rMJMjAqnfGK6wA9wEZRS9DR3SLmCGD24g4wojUxMkrL7iYne2ewCVnXpe3AvvcBz9jkgUC83dXRerwmz7J8",
  "key20": "5Nyo7dFat7xNxbaTHEcMfA9LoMwUfEDmZYqiid4CDXYLhgdkABgohcxroLhzcjjUy7mp1N4hqaCdAFk7fCPQpDWw",
  "key21": "njQ4W263r1jazT7E43V2TcbXu9mC9JbKMcbqeQr5yrYyVfVPzNuJLH1vzCkieXoU3ahFK9feyrKvA6WsaxjroR2",
  "key22": "5pa7FLoaFhrmwcELd5B2VJ7YK5kBFmgpzw3aSBPtQNp5AUR46DSQ7iCLSNsE2TBbYVtmp8bQViSLrjwJTSjL9Z2t",
  "key23": "4FKnZAHu3Hv4q6EmzX7AyEKbShf8YxSYz6e7SE1iPGX783UNoZXTKo7PMQKqtmQYdCqz7L9wL7YvngScHDbxqkHG",
  "key24": "3ZppxdNRi2UMsyBCDnhoTPB6FmXGdoUY636SSU35zQGfhv22hCWkxjdVPC2xFM9ceetCnBGVt4uTPwf2hw11viSU",
  "key25": "22CrbWpaF93nxz6bp1Yot69DMDoQ1LmRNfkKXZXKLEdujNqm87vwYSftkUHTTVziCYb82suF8MvkWPdJpENG5MdM",
  "key26": "3rDaQ7o5VYZvW6YNn1L31wHEVb6vN7fGEpmLSGvzy84PChZGia8AAGesguR6TrYBvDZdGjgS21n5xXk7Q4sBNKpA",
  "key27": "4oBp6XTYEiAvinsJrYSN3QWXDQC8HMC8vU64RwBD5C4i6uVzoizQALYsj61FYwdShbLQEgtXf3HgZ4MvikwQvxiT",
  "key28": "514hBRqF9SsKtCSSD8GJUiSojNjx5p2u4LaBhvTGco8moVFRyzsiEbCazysKhMJhyqcCACjFwn7kTveFKNRYgm6d",
  "key29": "2XoV2wsCYBUpCowwreutpVYattcF6o9GxS4DhZGMGUDjuhBw2rgyeoWMxzyHSHNekuRxZ7FE7rfgN6eBuVXozuNj",
  "key30": "5sHK8P5rn8o3Kps9zqSiwzHXYAhhZXkb5FHW3PLvsQkFxqdvWjXg7gdCY6qqzh1AaeoirXvqnCSLg3oD7XhyLATS",
  "key31": "5oGCcYhijk9xyerQZ7QrG5FwaPXwVPHkBa7PTyKHeR8iZTXwuN4zhzrCZtpXJhLMu7CwBXtU9uTprJ9UdHyfvibD",
  "key32": "H2rYiiBESrJGeid6cmn8AZvPcpYDCVHyrWf4Ni33rEPL76j8d3fSKYxnzzy93TuLeG56AgDrN8nJvmSUV5Yq2Q4",
  "key33": "5GsrP3k9u3c3BJ7NYX2vWKwt4ekmbBKbreK9BkGpzUdQsgj9nwNo4UQ3KxZxbFif7SPcRGzDegh8gUYGVNdWWeJb",
  "key34": "3nPs8VWcBtPrniCwyLTjGXwftbUM7WxPPbVQoGWUYjmSU5AEmVFMvgUuqzqbVg8TkX3KRf17U2vXswWRsj7a4AGJ",
  "key35": "5BTN6Z5fMZ793rfqYoG6cCkeaAveTmve8BQP99XWRMpKYAYRFeKsucuRMRz5TmL31CheSppucnCKessD2boYo8Qz",
  "key36": "392aEzohaiRTVmJ8GQey6XcV1rRDUEqWXd1a1c9VNPFarANektuXpKoeQSUu9vUcWCzhMfC8J8RQc6dGNEBcQPVx",
  "key37": "4W2exstTsQL5mjCWmQZJKXVMrztwiJ15o8kjcRJq4cwkRxfbactT1PY4NxBRnjk6XeL6NqZAZwQLvoBJeLQa6jXZ",
  "key38": "3zeaxhBUuoxx5uRkyNP4wFgmZCzhhik28Z2WRsemFKkBQYGGtt4p5aGY93VRzcaPNSo2nXKSPiMmA4FUUdS49vz4",
  "key39": "66vfxxUaVt5zFpZ9sh8BGi4kd5FrRoiihxUR1kLXP1g4cC6nQFqXrnM4A8UgQy3vHERqhBkbwKkJkNfSJEurr4VX",
  "key40": "5RKsrrAogLzRYntgXoFSBbW5hyNDHiYjahZknsvS44LXw3GxWeMZfREm6sGRtt681KttujCvQkr8hRvXxk5woqhN",
  "key41": "3pcqQNhUZWozcX9joDD7BKJzX4hf6A8S9MtjWK9xDtan8X1GXikzLyr9MH2a1tD2NXvTGPE78E3Tfg2n41Eyz7PN",
  "key42": "Yu8KGcbi6LrjZ3rVnD9hfDMQABs1CyPwtMh7T9cnCvWz27oBfNLaweVX3Pf1Cz16WM33UcqpPQVuiauMaYJoB82",
  "key43": "2wKkbVJz1YCgfvCLmt7Cj9Eds19VgC5gJpTbnAJRAWT6jU2eoBr6yQq7futrskLHMWo3BZ7CLN2iBJxcs4V3MeFk",
  "key44": "5Krg3E8tJuvqqKUs96PWs2ZHa1tuSh9ogaaHZ2okuPdLy6N9XG3xGa5fcS2knimD8ReCYpLMFDZv9anovQWaij6m",
  "key45": "5bZriJk6J1EWN8JFuafxiVED4e95ZwXbn2R7tJSRBtpxwAGqehrqtwHZ7Nxc9V5cdACR9AgLYYAU5K8Zd3GXrGDz",
  "key46": "qnHm6qTkxTbMwDNqFE9tfdUpk415Rt1tJPd2LvC7LhQ2EKiNsCCDyjoYNRcHqyLSrjeyt3fh1epeZMPpQqcmQQx",
  "key47": "3N9neC2gxzKB3cfWToGS3mskVw1iLXxdnwd29xKwseYx5RgfGf8WWSYLCGuzaZSuBts5AZYtTzK2vNSqftvq3Z6C",
  "key48": "5EP2vHGupuEmANswhdSXB5zJ72cNzgJVDDaFHLbxs4NLDVQrLoBRUoYB1c15pNNZru1dvu3nDhhzYERedSgY1xC8",
  "key49": "5fjYLHphod5PyNfGBR21mig2Pk5hNAvp1aWiHGvWF9bjkSa8yDdp8PAworS8aB8LTJsbqvxX97jvL4Y8fhUN7iLL"
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

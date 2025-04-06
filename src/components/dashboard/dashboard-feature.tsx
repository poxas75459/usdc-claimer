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
    "v1vrsxZcQF8o6S4UDLJFGJDsqbremh61CKx7pQVbX7QkPrWU1M9LYFLcSQ2AV1D7yzdwPKGjVPRogf1HEprczrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WPjqcaW6ajc4A6yei2xMXakKMUfvJoNee3XyQjCg5Px68Wj7yNL7JXHaThknQxaQUBMf8ZTCik8hHvBxHPhiATn",
  "key1": "CFLtpNNmxUxvzjpuYd68S111nc8uHgyayDKwXXVcnEBgMxkiWQeHViSwCvW7TsMQbryybAcL9CR7YtMbTFA3SER",
  "key2": "3hvAnUZkfZzzV6qu15cjcLAPc4MnZyWrbawrWwi9PJn3FVGxDB4feFd5db162exDM6gqmu1A3YmjPQtWM2aYExki",
  "key3": "bdsPkZaEadZYsxppmNkbEyUGXNPQVj6uopKoKHYGswY4qjWsZkaudtfVMbMewbgYUHNJySTE4ptjUMydf3RDdaK",
  "key4": "dVQAZHXUbQY14Sb2meXtsHo1Hv8jniD2b5bw1yn9aHfnQNsy4C7Vk2R9hCuvFDVeKKEbQGH7M3C3VuoBRjvT2z6",
  "key5": "2V2zPy854pHf3hd1JG5TvFeJzaUE1WJdtt6PdxP2mHRUXNkuaCKxZ13m3hz2EbSRxUtDxHPjHEtw2bVWPaXKK9Xv",
  "key6": "51vnLQxFXRvv5BNy5NcmoVCKRPQQGmiKHeitU6Big1QpUJZqThY3ZoPpEBsDFFjAQcjjzcdTos22ShnTcCsiCczx",
  "key7": "424yKo2s5VznXvkHUmugGtt6PMBATdFQaWaAxZ5wR4KePNsyi6Ls9Rr5CtpjSGTSwK227e5gq7m4tm61ZVc71FEW",
  "key8": "2oTXTkC4bT1FdddKyq8knhgAPCUkgmTEmFG5eNEXL82FTo6bpH7Cy5oAKM6iaWwMyP3hA8CXQduewktdABwjJ82h",
  "key9": "4PZNi8mUyb5NESjfXw5v9V7kxZaTaMu6xMin5QDYVHPaqD73mmAMBUZGeSm36QwrkTb1vB6MaWsYZwzCaxp9MPFV",
  "key10": "VVJzqgwz8sRSrE26dVXPS9ARzB1PDbjHCwZqFXHgTeJxjEPjDXM8wBzz665JeW17Vy6jj3VoziiRtCzmAB8B6WB",
  "key11": "1moPQF2RCv1zfvPcWyBgZCXEiGCHEg5XUACXSTsrEGGXGwKnyGbrZkY1Mvn1Xyva3na4N1qyeFwgGa22BkFfEZL",
  "key12": "5ET5mTsbxPU2HN6mQkv3wrCLfQ6qhDeCBQ2eaHLFP98GGySJZAUpmrffnpaL1H1dNGzLtxfrcZSWzq7CkgbCFdiv",
  "key13": "66V6Qi9N3Kia5F7PprtuquceR6yBvrcefnFZ21bVZvZqpN489kkJMrVDhdKGNzE3XSABUAkn9LJ7aM8hRE1imwb",
  "key14": "23fvQyj6rhwjbJRc1zc5g4RwRL3VcfiSrSgJXL3GLLc96fjh4FWBzdkunkZK6MNaLE7nm6CJj8xFs8rX5qpyRqDm",
  "key15": "4Qkvo3p4mV4RYSkVyU5Lwq56qH73vugMjgZjLm89uTfTvaF7FrtMK2ydALqCsdhPgXwWB5NBGzrumvnJY2mM8AJv",
  "key16": "JNBuTtmQRg1nMCi2rd3RKDB6LhFbCT3j6Dkbf1BEv7paTAWesbLEEtEVFbqrHRqJA7qZRxVfoQfqd371xRxMTPW",
  "key17": "2tmhowG2ZCDSyXF9ihWqtkk8KMPt3iibGJ6EfKVRyK4z88VWx2HphJRbpKqbAdhensj39kdHG9uqMGHLge9CqmG4",
  "key18": "3WsiKkQn94BrUrcM8CWpnEqU5PVPRZDcCPJ3fE7rNaqRyB4C49R58yRZfApA1tGVNBjGaagz4BVuGgohcfERBykf",
  "key19": "4Sv7J2FXpuhH7zC1zwf5atHoa7XxN4JGrJvJ7GJQJNv8Yw8KMvMzqQtrmqdAL3xqCtEDLtMERXF9tYGk6V5mntnw",
  "key20": "5QUK2Jfg22Kzxrz2H8LpHnimYDHxSkrrkhY8FENzR679y3iDyRbmZre773psNVvyxzANBEVHeavjcKyTopKfVTBh",
  "key21": "5w9xsJkDmBN3epZKxNg2VNoDKnQA22MDTFKRu9cVQF1rYz719YhoBnimSMYTo658r2J5GaMPcWNACK4KriY2BQbv",
  "key22": "2PKGmz21cGiSi5VWCYCyTSbJq7awjbtPNVFC5xGaSqzV63KmHcgouLZ9h1iSM97LrTAqSx1zvGz5RX6kx9sMKQio",
  "key23": "4ghQ7Sd4mjZkSs2yc5yoxXb7FK3Zu97uT7i8bP6C9zA5oES5yDe2cYqC9vLsMsz6LMEXNpLqFpvKh1o7SJWcNo4N",
  "key24": "3LS6w4dM3p7zDAjZhiG2ubsamBJYUcs19oUV92QbcEV5ZCYx4Yag18wmtUJuGh2CHDfAFFYUw2armkyBjs4PKnFp",
  "key25": "4TqP3is9emgtJkgboxhksMHvC3zsa5LnaVg8UgJfRv3zMoXQrEHWH37Af2voU68zX33hWdxPpZZ9h4AfpcocumTP",
  "key26": "5fTSaKomDTzuqB9d7waUB4it3buMPJDt57QDe1z2HCTCw3h856oq14iJME1fU4vgbMsG9DYEkyhR1Td7vw2srAyf",
  "key27": "3mkWafZ2ZCJbmmcCwNuowZH8xzYj7TJ9RzsNpV4GPw2SgVCxxvrbwBNszKQtm83pf8n6z8f8kieTPHvHC6pUhzu4",
  "key28": "2SdANy3gtVCRWKZqucPsQDUbiJQJgXeuQyEw11p4VJHckMEL5uN4h7ugwFK6aKL1gosXEvZiKRVkacbqgVfUw5U8",
  "key29": "4Kf6Dh4b6aJeaNrgpsyazvF1pjYz9RALvvpu8a7bsbNvTPQoV2ujxXhLq96BDaoLiEToWsoiRdX7yYzmMHssMmeJ",
  "key30": "TVSy3nLmPBDgCRSmvc5AfjdM2GGkSm6fT5nmCSsgs5MN5Pb4fSzmVKYuKRmJdr6SfX4jjbaBE6mQa5v2PaEty3k",
  "key31": "FAHt4kNAKND5Qk9Pu1De7eDjxQUrti9sjrgCX46vSAGAqp9YduCizLWmyj9nKiMW6xccXA6dgpMsVCnKNxup9uf",
  "key32": "36meJTki67RmmKm33mjcp9LDWWDqKLMW6fQ9Aq8x89EiL91Lps1y8TFac4z3YEcH8gzhBZLJU88AcGYXBiMB7iGJ",
  "key33": "3LSEGE3mKNvgX7tJAcdMtsRWteT8uZvpnskBr5ha9Y3XfUXWqPbcV8fSfz8PWZtDpKPdZBCLZ3bSMEdy4TCKWEAN",
  "key34": "4gUCT7yggrQsE7yQi37TvyTW2VTEMAY55utsGUS6kXZZyUaEHzGt37Ksrg3ds6iimNR74gHLnwoEwaHcUuMuiYCp",
  "key35": "4swoFeR441gCqLzwkJ7PVUVYizBK6jThVAjdStq9YFs5yxgqGKqi7quMK5MpQHXvyG5rDdKq5i3YjTY8RTjChHCm",
  "key36": "48LG2J3BeAXJXNNGe8hRo7niJ5k5YuEuUejBFSQnZntaXnmNV98Jh4w5eM8fEQFZfLAZGtPubPpjbe6ttyx13Pta",
  "key37": "2pTh3T8yPfy2ye4SMy3CU7GAkjGZScM7ytrFkescEUEPGWZUgqdykcF3gxP7A1iALzfSjbktCR6c9qKz5kYZbsXQ",
  "key38": "5uRn6MAszQpKHc67k4i5AQ487RAC8ufedTVLTWcZ16ztad2n8YroEuKb2vH9idryKBALVNvuFV8VWvSzVuiPvFjn",
  "key39": "3kAisgiCWWiAkCS6bVWqMZDeEZWggKqjqkLTxMxd4fz3YtzSWaUvAGYPzocmA1pVAoq6P5ZMM7L5YzWDAk6sqv1a"
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

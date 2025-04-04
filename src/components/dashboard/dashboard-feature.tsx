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
    "2V1bGqJmkecNUgyfebC6dLXPG2NCVzVdDman9q5DqLHhQjjaij8grnUH8BAQKtt6BPVv4C9THbG6G5H3B7HkcjTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUADk1kAcRKBhfJymFMKv32rLDqgoDgeNW9qT3mEBiyPePV1JWg7RozYTyPrmvwwv2hFiByHG3ZTpqCPanJvFhK",
  "key1": "2fmDtwwgYgcHs9AtAx3kCuEBqj6VurDyTJRz9KmJKtN8dBBW7VNVu2RZVLpPb7Dh4osbcnxyL55NdKuZbL64XBeA",
  "key2": "496VEB6WyinK12wUHqHRG4vrWmRydxKXBW5hJxHcBqNYf8mWSjzg2LhR6sit6QVxEm3za72KQ26MFa7qBdsMyCW2",
  "key3": "4YmhFA6mhYWLUZJvj83tfpxQVPJBuAfZPGWRqejbDTBD3sAdTioarrgBXgZdkd5ZCsvWHuNaWSgLfq8pZ66k6h1F",
  "key4": "4v25NqSMre5X2V4XvSTWQo3uD2s8iSezd4rBsduUoymeYv6KWQoy3FktGddGRgjRrKmnSpwAjhZ6QmEGnahryqoj",
  "key5": "4C79QbBuzXSqLoC8P8hsHRuF9WiWwMexsfdaPQQicjVECsoaE57o7cWfSz4G8c8QJjWrvB2mz9HwtTMQf3RWpdfB",
  "key6": "2kz7d9CSzew2yoff3m542RahPwXXy9nuk84UZbdspBA7g4bSwu5Xsy9koa11gjkq4HdKRXk3uz15zpWMXpbMYiDR",
  "key7": "66JAENNzGsJMvkujag18iQx3nrexaVPCrQ2gsHyxdDPj83xeTsc8Mpso7cgdqznGzzcNVyw87tLNCqzXdx6KyUor",
  "key8": "3FFmFdxJZpx7A1CDTqvftb64bZGEnFoC6EhKmW1tVeYYBZD22mZVxnCbyc5fcdjMibQBcE2SQGxUPE7kihKb4bsc",
  "key9": "4A2cs24Bp4WAq3eDU7RXsHKUE2KCoKDByY4zpDgcS7xKdJpQHg2Ss2prXt9tL7BX9wujyaPdfEo93EX7J8MY7oYy",
  "key10": "7L9T1uFcFK8B319X8D9dQxU6LLJC2TMt2PiLoiHGXKQpomX6JQX41sbTRcx35gss7cSyqe2mUEvs16YmKwpxaHW",
  "key11": "2nybf1LRp6bxdaNxwmDLMDCTWYUjwb4ATuMqwx6fJc8iZfhMBUTyG74DRbV3k3ZyZqpgd67dH3QEkSDcRb2abR2m",
  "key12": "QmPy8kDmM7pnwnkKkCTkYShXAZHfoepubkgCgvKdLmuonzpDVuTETVuEy1ZQpPth8K5vHF5SgYpsF5ZQb3rvTLE",
  "key13": "35rAqvQB5Lr9w7oLJJPvk9oS7U9aCaGvVvA5Npknvag5u2LRBoFxDeykLpJo6ZJbAmXH2n1hpD3aZGUHmqF8qKVK",
  "key14": "3EsrcXxMj4mGFskak3bVcptyvVYTb7c6rC8caMNTn413EWBDLBT7cNSR2LsTgJEN4iMs9ToLEDdrRtd8o3bb8jEa",
  "key15": "36RmCjC6ygtmhnaXehT6p4r78cvPXEXMmUyawG85tw5GovgPxUoJZpTofv8YR6fhQv3rdFPtgU6BDxhfwmuBFwfE",
  "key16": "52UwexL361Li3vNh77KT88vEeh4vYiK36shTSJR82JRN93bCaRu3LnMAvZBJrs4sGmdtuf3xg6LctrGuKGwVz452",
  "key17": "2MiqHasRwL2rRkFo2SZVDjqp58P7HLVBMv6cjVPyFSmHiyqyC82hmxL83ccm9t6PQKU2i8a4KnoB5AokfW58aqSx",
  "key18": "4xxyuU4Mwe3sW5fxARPvejGFrXuueiPi7L6RQ4BGJ3UBN78dmm7vMEK95A2hNvRhTUzR2yJyxgsWLNofbcnVG1oc",
  "key19": "3s3Cx8hBgijDi53Jdo5eNdpq8jRaofShSxQhW26gd9b2JW5bCcTBgNtUEqZHkqKVaTMnQ74P3Uq1HTQes37abbiV",
  "key20": "5FHj2yNGF1GKJBjRcwp7s1hzLNkKDj3bjyYHDjjPatPRLhHBjfkpYa9xyiSZ3cdypNqVj5xnZwAKHWCS1ztsTHJp",
  "key21": "3KaKeQ195MeqVoiNnUGFyStxbKqX3BwDZxhs2caqu8p8LfMy44cUkcd9Uvr9YxLfxdrk1LLKgVnyXvzNDpDbtkX3",
  "key22": "4gUUgMUxtDPKHkxkUB15GhPPBzZQtMD3GJrWFD5LpMvPYzwh5tLkfK71tbQD6njoKTKL8iLt4xYXWAUMZ1SpA5LG",
  "key23": "4FDhTdoekzZWgaSFAeGtSKD8yEaWZQsS2E5aDJHEM6wfFFxBZftubueTMRuiRbdEk1r5VXtzvW1MvT9dEhoKyPed",
  "key24": "5dsajyR7RTpEXYafDVfGQeJhsMh8pz7Q5D7S7U9MtUfpyCXJzALmYStwto6JreWvnAiypQpj9StEeNbuaqNicSDe",
  "key25": "4pYhQMjsS2FptPqwd6w3kjSVH8BzWpWFGZ7XNznsdLxQ3EGP3AuGt9bpCJ25dWEonV52xdDArnuFg14YFonvqUTi",
  "key26": "2V1hxyitD88mZXEBfHkBNsD1BjKNwPB6MJUc99y1y1S2qqk6GBhxxFuUJN3fz7ghfz6xViHfYxMvBR3xYfMmD4rm",
  "key27": "434BL7u3fT9iRtxEb88DbZdimyW6WBxkpCgQysjEvQta9H51djXyNZMVyU3wZmiATpSh42YhXoAReKMgo3BZNLh6",
  "key28": "2PRJShE5CKpRSeCSY8obhz1MYrECXswQtXrVezzycfBap1hUYnyQh6QrurihFjitWHTCBP55gy7LJDBpyApZ2TKj",
  "key29": "2EhKxS9Mo9KZWzHEpQX9pZonxnGWRnBA2HoPD3wLWuE5yovdY1AZqAiGNiZwPtArqda1XY9vBKVhFwKUQGrk2KDt",
  "key30": "4j95uaP8eAVHTebqKbJqtgZ2GRZCa1PMp4T2yhTuq5jweiigomsfSkCShDWx4YjM1o7L65tEdRxWHo1UcTuc1hYA",
  "key31": "3PsG7idcN4dd59jvpuANpXyAYVF4WW7QW58BrcFzHS7hRCKJGEzTyooDoHWESNFzQLFwhNGdmiLWeNQMTeSEhg58",
  "key32": "5ahH5GV6gHiXbNimtH5bhXXDtARQPgxrZP3EAcyjN8oxUUw8LWLUUdev9TRouUVvN2LGqC8wrCCapWC1W2znajqA",
  "key33": "25EX9odiLYhdd1bG9FCejPJV8aJUp7tEmkk4iAXqjX4KXZSz6sZkx7dkePpuHpkvPvXxr9gkoz8FoGRg45YDhmJ7",
  "key34": "4zDgEMkrChiCZFPAgr5phTPVshhaMda6tWtS8FvW4bDAiSgETVgNbdkfrxCcp5vTpaScSCu4WavYHXnUHFsJAMab",
  "key35": "22BYwMHoV9h4dQSMwc56DH1MSodNx6d9Y6Y7KxWB8KuxrZjrZhwgZNisR4Z28C7t8JMTE7RW3HzB4akkrGESfj8j"
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

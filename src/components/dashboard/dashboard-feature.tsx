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
    "4s82tAW7VVfCydZGTkv2sKdSEkL1gS7izeySRLJruWGDxXGJzrLwkZw5FpnJjvJH7LhxNYbeEQZbhoyJrnbfNNXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MU5sDrTDaMmnQBjPYE2hyetun7GrrFx2Ma4R1uzz2vNi8USMqyGay5ALufuPrteTw6Fr543Z74rxp2FBGK224BY",
  "key1": "2TdbSNionJHeVhpFSVtgeiYaGsZ3jDMqPwk7X3inzNiSKSpj4Gi1Mz6G1VcqzhbNgACUjeuQYyTdRgmoGzuhPiWf",
  "key2": "5NwJx211a2Wxqve24qrgbZDF1rHdNbTxgH5GoiVevVpgMFCBjRNyAPs4SvsUQBQvt9qgybJZjyV91DGpswjUdng1",
  "key3": "6yQQSRMaPpKhhbE2g1Jt2YfjWjBNUNvUVsfr3kDa5kBCi78EnTSnuuvCLpacnnYNG2cikF1JZRuPwSUoj434x4q",
  "key4": "22GMbrKf9cbGFHWHk7m3rbQ9b7YuGDwoPqiueUDRQcTeyCF4g969i3QfBpVyc1zwUZv7pbL8JRuWHQWL8UzdztpG",
  "key5": "3Ph4NKDEJhmEApiA1bvrypmckp6CyL2jCff41cXKfGVXxob449p5qFY9B2ZB2o7gi16MrL7ViL9yTSXCVtTPCo9N",
  "key6": "59DmnhecQpVV1uQcKG4q9KWVkie46FSd6N43dELRQDXCbimqZpyufSQY9osNgxqbfWGcVzzuKHQeYtihGsvgNfri",
  "key7": "2fmLwP6S4MF17rX9ndh35xJqtFtCjkvrSEoZaSdDdtDomkPh4TVSRoW6x4sEUYnjKQN6oohPgMBLrW9McrW4Cbg6",
  "key8": "5jtczqDCGjkhRwX8p1szAkWCuMs5RpBJXaZk8HAfriyviRwzspKRwcimzfiTHJxWacB5TvXQ1k2BH7sMDy9SxY28",
  "key9": "43jvApTFGJFkrX2t2GnsSiEWCvP4FYoGiGwcUBQE8Z36gqbFH2Ze5rmFQCVd7LMeaT714tu7VxDygAT1qmjN232p",
  "key10": "2uo3PPfpSWEzWSRNwA5CjvtB3XnvrtmCCudLUo1bgL53Zjz8WtsyDyGQMqsA9uWTt3agYACri9VUYKvE2isweRPf",
  "key11": "HnfjBdSLbhx1mEnx6ePTgwtC2jePePEYbdYvsQzZ5eNeCmphCZBDdGzxh59SwJk4vJfRzSrwirVY2vnaTTFUrZW",
  "key12": "ZYB6S69xqw9sm8kC79z63odmPeXoVHzpECn3o4StUReYCEPEGF2CqZ5NfWxmHC5VDqR9ZEB5WJ3YS1TE7F9AiRw",
  "key13": "4Cnf7Q9bQA4hbJtamJkrPU2uSMdsQ7kbXrE3ytHXy515T9URprAXJmRMUSNPQaAwuH9rzNdorsrJqCLHd8BUq7WJ",
  "key14": "LDW7KpYwDM55UkUpTRS79aZSAjGfXR7zmEaYQswg19YxEEpHQ1MzfkojDq3eBqB8MwdYyAEZx1eMBRtghcyFr9M",
  "key15": "5ELZbvR73oMTEjCSSsQQNfze6tUn5oVn7D4QKBXh2pzKi95owhBg2yrasQ8cvQt1GTBhYjogRLfdDCpQhbacD95P",
  "key16": "2W5wQr865UqSJHZ4wpsQxKnbR1Bfj3KdYPDH3oM6qokRYQN8EQUJx4wjiXj3jM1KWhYXcDCTxiffF33bT1vxdPTy",
  "key17": "31s5fncn2fwTSGp67YNZPDn1NuqNneH2Dp85GiXKLHNSvPJqmmgc4Y5NxyLqHNfZNCf1kJ7xThDDLfR74nkuNcxn",
  "key18": "3NE3GreZjSNyCWZBwxrGeoK4yBdWhWYrwDR3USgisV5u7KN9DboX77DdXbe7zKrMgzvNQGTVUn2MZj2kp1bKRgip",
  "key19": "M6K8nHgujayuqyufLGB81Yi3DdsF3jBfwU6oEd4W6nFmB1PnPJrCcXTZecG6sBMTkc4fnxasiAvKARrKBwejfct",
  "key20": "41NAokPsQeGSRtFx3r8ic3dgg8kpAdjYtWYGBmi6qbkgUxJ8MqT4TX5wTugv71aQz4B66bToRR9LpknYx3PXMgYK",
  "key21": "6128Es2EYg2DU6M4yP3ikZNqDUqrErusKZgs5aSTuEWBvTfDioYcrBGftd7nL92YLNrXWRCKJdBPQYonHYgWNZZt",
  "key22": "4tTDGTcDYXinDTsN1Yv6hC72Z3uB1mVmRZdjoNNgukvbSDijWR4jFr2XayXmuADN85U381TMfLirHuCvT3PrUYmo",
  "key23": "4i5JiuUr3t5h45vCSg947Ymvoik2LhCikGmTCePN8MWTqUksWmgVUXVuevDJa6Sbqr45c4wqrrLaFHGKqgujWBfQ",
  "key24": "668aWyzxRosmrCozPrgwyN7q5roe9Z8hvaJRwWfUnWzn8aNBA9x5DGhDAtwceAD88DuJ8f8okavi2ipJV8YJ53Wj",
  "key25": "vRDqGzRpaSqh1R8iQqX4mT8emTpy2NKbzqt92kcVrts118Hx2zXY9rFdeDVTDRbESk4r74fWSwuTn9jqj6GUmKc",
  "key26": "4hCtYoY6Z4dSMdZWAiCym81sj1WFc25bZVekSX6bCbaP75S67vLaTby4LDwgirW1rWMHtsojyiYgLJhUT6RDT4RF",
  "key27": "2gnXLj5tLxT4ePzbsXBBEUfMZ1cNUaAvXKNhe6sBYFAndZLPEF8PNsrjLgepLz2jX9wndQrUB3JyPcADhv7Yi1xM",
  "key28": "75f3Xq4fMJdemJXmgtGp8CA4bpsNSSp5wNiu1A7b8UnuQeH78picx9o55uXgueUqXQVXH91Q2f7SA9h5BimuRYQ",
  "key29": "24m9Qr3Ywmak5Lzv2Z2GUAsYgR1WwiUTuK53gqrqJkTxGFmndm429GXW419CEKoR6VTUvrQXVDJGQexWrn4pGGEE",
  "key30": "3jh3FQsp7jYfLRK5ounNBc8L3THyd7GZ7hKYwTPMLCGo38VEQGLQE4Ztvx9wwhs6siAoXDjEMA5i7UU7dtMCqSFq",
  "key31": "5j9xZeBKHeYexQDjCCUBUbsn9dgrwcrLXJS4dLZ8kpb46DEcDgrguUYriHxmZrcgHKdCF2mYDHTXitZz8tm2niPB",
  "key32": "4pwERVFQbAWZ1uPZC2CkXLecL8CqiZryUgRZbdtoL23QPJXnNWJGmqTfm2YmGthXwj4BSvwjVCJRcTyCgrGsi696",
  "key33": "5FMWLHmzuBWkVkNm9GF9F2BgRWM6kyGYLzvbThUQzexniqtGG4MXAeL9vNQqURJYPJJNWwFfnu2Fj2MjkoTrdSou",
  "key34": "3NUBFkKodESZogqubADbbz15wwHy6HH8BR88G977v14CbXaQoE44Hux466DKHHm2tdZmtyBUKzT14z32vxgGG9z9",
  "key35": "2JR12g1oUMQP9EMuCZDdtSWDPveaanV9LmS17AUN35g6TWjbgQQirth21axDpV6ec2wran7gYm2L1sXZRygqpbdP"
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

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
    "LCBfcTLVnu28mgtTNPK9zh5ztvhAT25Y33Tbkkb8dDadzZFnuZqXybVrT1s5vqkYg7x7TRSftV1HYd6SZvgkyYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KgSTUsosT88bsQYc77PM9raGTAc8HMnWdZ9kRwiR78QvKvaEAmKb5gu8QQmwpWETKy5tyN4V2RrAnvwp4YWpcLM",
  "key1": "3T7S7aWh86FXhzTZLjtKKG1Y7xwZ75ET1BG6aUM27a8gGRHAc5KjonEXthbjjFaQLHV6hizqGLuA9kxooUwygyJ5",
  "key2": "5iRTGVTZZ76Lh4tkRR7XMa9UdwB3bMUvpVq7CS5VB7TJrPFSGkFSEJMGopi54mPSMs6NTYQwRn7bwzKDuePpcBCT",
  "key3": "3jxZqCdXt4qTLXGw5qGghVRVzRcWJRx7gVWefmyzrnpEFr1xxyWi5Pv3kMY9N5RAU3mM4UQLjAeBEEKXEPCzbFS3",
  "key4": "355aKehSmL4VYbHQTyemiCQ9UL7zRUkyq4pL3d7QPgF3PoxxvKp4i7RPSeMqNegEBNWW8v4HFfbLQJCmoQsm2UTx",
  "key5": "5U6JsK4VxPKkUUCFWNM1dUKRAYz75TPSDYxS5z4jfKEBVftuCfCSZtmQZDKpPwWq5K3kHwsDNafbcHmmPKJd9HvW",
  "key6": "5PMGZRzRz6G1CtmyZ3Zja1irvDTZgZTPzsuJ1pawv8qsWX9tqMEtTLGMyA4x99TnUDkCMpvXQvxJRwZLgRkTVxQW",
  "key7": "5JsoK47fotC1wn7dybL9PHkzk5XNaV8PhGaWkEtFzQ68K3wUspLKBTrB5hXBVouHSmV9QCbKaMaL7LCeFhLZaxPx",
  "key8": "StGu9dHLDmvW9vvWzzn4iJEDdotDKr9v6kstFUTDiX8BDnAKurbjwzKxmk6f3fNGGmFVxTsBabZLZ7ihxh88o4f",
  "key9": "4cSoZrru4s5cGxqfeksKdEUTUfBbfTG4hyntvWsrS2PSaCT8dnN7FMPQnrFYJa44PQ42kninWfW5EvKEipyRVM7t",
  "key10": "qn7PU8ESzfVFr7dvHM2kDq4KGapYv2nL9MUW1QmV1KNeL9nwygoTjMBuBoZcVH9Gvs2vapk7rwFa5W2XTKwDsdR",
  "key11": "3LUATA5PyUHYzjAZB24cV9nYPSr9K4JSH3QSUJAWonYWYzE974HoTqyKxiopvoMrwjBLm3GWmcuk6hyVGrZvW4rk",
  "key12": "5mmUR3XncKuyC8bfzxKF92Jzh94i6EqSUaVEvhHCCoCaguPpyUA4LMpQZV7hD1DynW9VHj5J3A2Eani4FJW4frK4",
  "key13": "4S7drHmDaZWVLsbWEM4had4TEnWFF9CwcEuNq2ydUGA3Z3kPAEWHhp8QcrrQWEmn6pougswck3kTK1sKqHVTkrf1",
  "key14": "51PAU6LTuKu3sWboTtsBJcufZLd9QikyFGA5ctewjxmjRhAo6WdeAMysPc36FWyfHZs25UhQDmPTNjUsFVv6Nkxb",
  "key15": "3Z3KFEVrENqEXcqmqRTMCCv4wgVCqmKoHjrr92qPJVkRMftJAGxQMTWpHFeaZJZeExNi8jNaEu8QJAraSYW8LKrF",
  "key16": "Tt64mcx7NrbhVyuous9PtnR784Y4sSjgGC1GAW5EFUGf7nkuSK8Lo1kHucrxpNyUX4QXqCL3mBXYPbCECzRoTup",
  "key17": "giFrVj49Z6dnUs4v7b9sBEpRdudP5J8nK6mVeU4jewQLQyjq4V3AJKmSg7TF66qdoMpLbWzmRqPjVZXdbjkTZab",
  "key18": "521Kj7kGMnju7bSjK5YDg1GvyEJwBf81kFWysb5Px8yGNiU84nfj2jeEiF6rHjTmqxLr6ygXem1R1SgxRPPrb18k",
  "key19": "cqdBF3YtsSm9qAQEZcGoYBonm8dwu9PsbzvtpD5QCAZ6uhfkurgiiniyMB7Fh5jRK84dvV6cfsVBy27ZuNzzbyG",
  "key20": "9xXtiivKjeYz1Gzqa11ZyTEyHdhvybWbkQiE86JSB6ghXHn816moR2apiZn8kc4CPjHDv3T3G5TMJtSXTjX4oGV",
  "key21": "3WANq4iRaMjdyR6v9ErJfuFtZfoawPtBsVb15DzwKUw7qmzMXtyTVKQzTs41cysUzCzfERmShRVPK5KQty3LbhH6",
  "key22": "51bpZgrPQcusRv8ud5D7TuTUU7pjdjWhNimdvYXi1NavebjZahZ1oZbhgdYMzZBo9c5JgjcKxsXn6kwqFrKhrQAV",
  "key23": "48GZYcdWR25apQGfwD3gVEecVdza1cZffXjNFpzB1h8pq7fNh5BSHusuL3Y2rrU6vdrzhQmJxeN2QVA6ZfheY3n2",
  "key24": "3dhMKtzBmwEbwaoa8LrjRK1cinMdnEwn4iYYSzWCYp83RafdgDzaCHKAkf2cKsKVERUpnQn1TFsDQpttEPBeqfBb",
  "key25": "2kC3opzUGV8x9Lk4GZHS5yGAaajUfS9qwc7DXHaypN5r41BnninLPxH6hTPGL2p4Ud2AVDWWQx6dTAxzKMNG1ACW",
  "key26": "58JDn1puj71PSqbNeCvR8xqp8axgX7PUhLCruJPDPq3jfjWGsewfEst1LZ5u8yqs3679w4GseJKtL7FX4CkwUj7g",
  "key27": "2vFWuqawYciDjA6chGuGaBVt954Z2X2Su5kgRYtshvzd3bjb2ZLxoUhnADNNio51D7btXRJDfVRGLMFjSieVSH7g",
  "key28": "2zRGCLneLrAo8m4P1Jmw1QDxVCZuoxy2sDK3TFxwNT7EgrGM1uMzQ2WcTq7nTYmpToWJmMK99noLw8pLD1Pedg6g",
  "key29": "3GdsUBorR8wDhB9VsRMPdHcjnrTf5WgJRcwaGKDanjJ8QRY2CguvZoAsaP2i38Pne5gHeJXc5KcvptJi2EHRCauD",
  "key30": "2tHDbSMt76KmfKwGsdG7VSsZLb6p7oV4zjeQq5EESmBzVmSYYnXjZuEu1heTPwgjbx6jfRJjSQnpjRgDz7CGYNWW",
  "key31": "65isgQYeXYutD9eQvwgYTYND9FSp5ExceRQdoDA8asjP46v1dqQ67TrMRaU93EmpE62QChhZHdc6TvcreYiBnSnG",
  "key32": "2oGtEViNoYQfwUnkszgRHuQ8zenCDsaP8vpKJgtJVgd6gE48U67jCorDN785LUGka2mCBA51PhM83dEfjZXS7o4o",
  "key33": "4MFybuKtauFm4o1DhbrAw1ZemJdvzAKZnqVJiyMpA2ZJTDtrC1fBaa2kEmnW8iB9ZD7d8ezVXL93v6GsrVNMfkXX",
  "key34": "4ZAC6GHvnrvt8Z1pGtcUANtDnFvbeNBAnWMpY219TCogy6rEkDMENwSXZ8W6itGHVtAfA2ca8wU72VcNKYZYRb12",
  "key35": "2JB7EdNQoKfDRfHyDW7mR8D62WWYpwqswQPFMpsykc9m2BGzx5B2uFvDVUDCdUoBNxok1PPL2hcDupjarhLppgby",
  "key36": "48Mrs1axvxpkPmv7HdKNp3Yo4VavDoApWdPTTX1trgtwMWaEw4x64Qd1meUmR5ivz2Q2tnFfGqYMktSsvRFWLyZL",
  "key37": "umXi8m65YoZPkttpeMP5k1oTepf24MhUEHeWosnF4U1M9tAP6BM4nybeZ2V5z2jehgsZ1xhejnobwmkSLumzt85",
  "key38": "2N9AygzjbJJFivb7ypsS1o2mimSRzzMV3zthX27vAUuNmgHUtX7CefxVNeFb4whKCWDTmHJ2fpzcbV2VtyjySLca",
  "key39": "BafivBUchpcARmGqgHVq8o75kcANX5tkJxboGGYnkG9RbUYymB57SX8eJ1EvDpBiKUT9s2LHhJXtKQSFpp97HWC",
  "key40": "624doir2cdasRT5hMxXx2cgrGR3uXTnp6ZUogPTBR14gH99zrLR4wGoL3PmPcFqYMcpJVKbpcqBPaBjKUsGbzTEr",
  "key41": "3kKRazg5qDNrt4CDd8d4SJmeSBUQpDkuHNBA12qQyX6e31Pht47jZM4EtHYZmuAFSYfbms1p729aT96TSfoGw7RL"
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

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
    "5suaEkfzqFHjsiBoeEarQXoX4fn79FizKqSp8jUVrvj7rtLtDYEab4kTur82KAdhEkmJ4j3ZLecnuv65QHvgmaJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HnQmzWeWCbqVwHBqeYeCo262AGQgmncDJyjBUqsrzWuANGoNNb1ZQHgyJRmy2hK5h7RxwcBX1AhNU7VZck6Hk8",
  "key1": "5wekNVsJrNMwoqBA7cSwzmaoNfTHXXt3AJL42DucNFEneYby5FZVdnCJnDTkZrYRiD13QzrR9Pz5nPs94icPS61N",
  "key2": "2CT2CFfh9ZfwkjaVwqhdyQD9dK1HJBmBEqHtP1KiipW1FhCDbaWy51wUrW23iUrEK8ZNY9P6CjMgQP3rqbr2zJu5",
  "key3": "szwywvKWWDa7QQssmSBFFko3trakB7vsVkQ68apb1eHBNVvMczjLopcvdP5JBSGqyYj2nMVfQWHXcUYJtv7UQtJ",
  "key4": "5XZMM9SNymaAL7kRR4Sz3wHcyFjebiZickHgPJPc74Sx8L1zD8pTwA3N6aQvKo6bKnDCE8mUrdq1Kwh2H6wz3vYh",
  "key5": "47o8LYBimxd1Nokm4tww3Zz7ZMULymcJwFeY5z52B2LRa3FUZTbiKwW9frSUP5rxeDxDy1Zu4XPVuiCZjF7c4r4V",
  "key6": "5PD4qRFnc48dUnQLvrmaMYGBuJao3YCmSGHsJTuSFEcGmWYSbuNsqyqx4YWwHp4ARdVYsiprUi99JNRWEZ2PgLKX",
  "key7": "2HNayomZAqfcinuFDiX52CQG8hiWgadPYnW2gJxgvC9sbVu8dJejYQ6DMGt8KsUsJu28BLt4wDuBYfADQ82sqv8x",
  "key8": "5W1iFtY7svi2nviKCRkd23HnLdyBcXEUVcQZt4qCPthaX5Mmt6zdoN47KZCt8zVWd9PLTP3wPKNcJ1fAEbN9r81e",
  "key9": "2SAauHK9PupMgru7H7WRxY4VWL3MhBrK24R9gyKLfkAa1M9jK444pxoJTafCAVEFPm5gW19BU3GL8YbnpegAQa4u",
  "key10": "on83XMCTbgfSwdyjQ61FDcA2fUpGdwNYSgFGEDQ7kF8qsL85A2DK8PWhLKz8sfsRmGNCpAE76X73dZFURp4tjPY",
  "key11": "4fxHskYiiPnLunWRA4pK8wKn37DYcjR72AXLTFNuDSqMWAsjgNWsWkssAvLiNGWmC7vTVtcT44CgSS1nVVNWum8u",
  "key12": "28z5c9htDmJ64Q4RRLsU4Wy3mhAsPE6ShmiDYMR7CXRcBwSyTz5CVWCcwVk9ZPEh5uEkGMqdyxNYdiA6P3J5K3Ay",
  "key13": "4DBeegaKfVLVMbV52ZEPntt4j6yhkDBCb38CXPDQZNeNLU5ft33wR8VxSqpswJLcy2jcSNw41eEZbEXR3Ymk9pqE",
  "key14": "bYGd9UbdsDRHDw3Ne6Z5SmrGKrcMA9gPtH7A6fcVik9k5u3HbaCAJDLjAJMH8SunYgj6zhtmBEWhY5jGWAPJryC",
  "key15": "5Hzy7yBc6484FhG7WX6UHwcmGbCAh9sp6TKs9mrXjpHLVkfk96Xkya3B4bowPLnAWizX8ZEwPXE4iQGKY8GGMnrh",
  "key16": "YJfBpGdgYnbTLNcGEytqo297Ks4MndJqPHPwLW9QR3ZTVZNLFGj5aUFR54HciaCD6QiGcXsfE9vf8nGboWDPoi4",
  "key17": "2wULvwGtfVbav1au69tb3ohGSrKByc5upuW7a8nSSN5MJoxRDcwm8pfEkNnbt55ETseSVC5P7nYWW7fnLY5aTo9c",
  "key18": "3scpMZGn4gtxjRXMCZRwSkp2UDHr1ETVihvB5395MXZLa2AzjHX5fEtqnXmYes6YcM1rxGV3yzVttKGX3YyxaeZW",
  "key19": "5ajMXipNV1SBGwjcCSCMWoGJYf6LFX65LrRgpprFGd2XWNN7ox5cnSQ9m5ttg2qxqQcyQ7ApiJw3U4MqTAZ1SpxY",
  "key20": "5yjUArpZUvt8Uf6SBELeCwG5gUdvwHXL9WqwvED3yrcHH3AutmxSDkTDRSfxAV2AvcSkjQpuAtypwJZNkdaqthcF",
  "key21": "5pYmQrjzDkuATBiwNKcyg9h2NphYVjGbovD6dqf7XZ9aW5mdzd8Cs951QsoUmcsJhDkG5ssR7qcPZ4XXFboNNme5",
  "key22": "4HZdSxwUWCBvVq81x8Kx3nJrxDHLfPX7DEdt2zuBYGkNviQxwQoC7dxUwLvXYMtGptKqtWpH7pJHzQz9koVnxqkE",
  "key23": "4Z6gud3nKZDh45xHFW33FP2LaMrXpEyqtqCm7hEoD26H1x5PL4uKJjb8paJbHG8YrVVztCFwzh6BLwZivSWvS41f",
  "key24": "4b23tejTGPb4E95ANPBYC4scpSACzqkKsr8gQMMXU1mV3mkEDUBfK2KpREskCsfEVR6A5owfFGq6EoCGCaR2RJyU",
  "key25": "4MDZkL3VU8eypeDCY8pdq8XHHHrgpaFs2auRPf9p9e747S2jpk2qiHtoiK6X6T1dhEyyJ3tpMypvFvgT2cf8ygA9",
  "key26": "3gBYKsEo54QUyupWzHhMiLUVjQPDRJMfknhnqbGRoSqaynGUXzqDxG4xYqpofJG1583atVwehDsd7daje9ZGcyJg",
  "key27": "23ma4ndZh3v22r9XPYYcJovcHfut19FJeh78qDUVJ2H593FBVdgxAgxyVMNH5sjGTGMPkUa6tk3TGTWbGA1rVkVU",
  "key28": "4tGmGeWh1K5EsYsDcknjy97THGhyiCdMSiTt1V3eQtEoyrzX2kRwYoqrWp4DigN6a8f1fZ8xSR18FS4LiyhmuKwR",
  "key29": "4doriKZYGPvYR9kP6imx8SSTBQg9r3DxySbqZDjv6vckHrSFsDaWNehRfTbNapSknG39zAbNmKEf4qi5RKRBRLa2",
  "key30": "vPSdqdNGeeEQDYNPZU9Hr3SsaJdj4cYaGYwNWtUn4adwMuFiicQPSpFmtS15dvtnLjKDV72iUs5ka8bEjZeHFzi",
  "key31": "4TGBYgT1vL3cRT64dJkFcVn6KqEdgmCXauWHuQTGwEEpmNuaAsJvfrR3NyDHBXXRN7hWmaYyCRMZTNVKsofbjXVM",
  "key32": "2df8ergKAo5hNEBQ7e437vXBPviSe2EFaWk5gUG2UkTAucNzKysUE5YU3qyzZTjuf95SChPMEN4h7UJxzNT6KZPM",
  "key33": "z7Cp4Ld2whXryXxzWWy8cpkny8HnsMVKHzQ9QZdAL1ho1M2nrztqimL5EdF4nN56nSY7meC6YbCYrNPECfyoZGn",
  "key34": "4CkmgJPXuWY5mogMuPvggjkK4TeGW5ajAsLDthQyBANVXEsRPDtvb7Pa6PKCVtqyBN67zPu2CpbFfg4S7hkRwed9",
  "key35": "2JzfNm4i1DCkfbDmHtzeoNjmBUrP5bkwTP5bbXLtxH3x2aKtdBkCYLJwZb6gj4CB2jFZNyhrjNvEi34SX6KxA3zh",
  "key36": "2jeeBAoexXhyRfPsCfQNdaM2oEbjYXo4KmXqbTpBM2iomecCKXeCRjWxVnJPCHxRCyAdYDPfDyksd6Z1Ap4mhJN2",
  "key37": "519WH7Va1qNP3ju8nGytnRhgF8UGdvYHELo6Js5tCLJQEurjG3sJfUbsP7uER6UWEG3gbAtLK49kYDtRZgtwD1Mq",
  "key38": "5XX5gD9E2SAN8vyXBZzTe1EBnrNFEQPWFncQztndia2AzA1tm1Y4HiUWf9xNmWpRJK2uFYjn14gidGncReu8wy6r",
  "key39": "4ruSfmChpAvkfctusK43aUKpSBU5sULBECvs8Js4JBLY1NK92EtNqwhajS6P8PPe7sQw91tiyEpRBvpCYWkxLYbh",
  "key40": "46vKWZEzgZnUSowPTD6CJqw8EaiAoHvZfyb8fwHt3s912jJyC92zh8bj9yR1jc55bm1SATCdak6d46SFBkD71mmd",
  "key41": "Jg6yCbydtQH9YdN7zPZq7U4vRKjeBkK9jdJ8mXfaNfGY1r6W5WdDfmjbYar3Sf5MNqDWueSGWATMnseDGRgrACi",
  "key42": "5gmJqQQQMs8vvSTQdxUdi8JpVEsJfEmbLnByAPa9szLZWNXbofv5Trx5VcHgmFfptxDp8CDp45wQoH3cwP2fpE5d",
  "key43": "4hPZL6UijKCFiytWaGCzZQN6hxhMqj3MuUo8Te1RnhddvN9Jh1tY5dzZEiiFSpD6t7E5LG7jRRddJ4ekWk565ChB"
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

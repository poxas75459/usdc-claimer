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
    "JdYG7iCPcQxaJ3ZTtHrUF3uwuVWfchKdJPc3S2iFHUSSGUhnchFFqYYUzVWsATkqoxr4svqwhnAR4X16MomSU16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evTRkXRsZrxWJxMLPkji72pR2LQoae4omBhQqBWQtQaxUAQ6jHk3poHX95T4sfVMxDMQeLAeJwp4CWtx5hgniQE",
  "key1": "4yhivCvJgbXBuriM2RQUhiuQNaZ9PCtZ7E7W4gvZnSWaQrGabCJcz9cN34tWjT1CpxCruLPriCtucFA7Uo8CCWk6",
  "key2": "Um4NzBVRJmTeB4yVZ2mMmB9k8WT6zdfSDBVtSdPr7fYDb3pXhSb2hr2GAWSEfm5DkF1yRgkXDNxM9kRmeFP7SyY",
  "key3": "38ifNwmesDRNR8Ssbbp971ip86CZhDDGiiNWSVWK6WBAWmzoXwPdVqQXGDqvKiGVghdaKidYFC9kHT7AmCRXYiaD",
  "key4": "54vqvAfegQ7Ys26VNgNB4kw7dxnwFVwyyDBdjv4Ewa8BS3WKGyBzXVYC3MSNEtnzbioWQkCFFU8G4kmZo1cWfbj4",
  "key5": "4cYtqFrQTiah3rju2mDK4MNDGttF7GdUZZZWUVYJtUCEJXF7aEgAHxpf8oYEdtk58VVroTPRswK9iHDVWTTWg1gp",
  "key6": "3pqTbNWi6unGMLrLwh6cTAVTQW5WiVKxt2vDzSGzXHVbFU4asMR51Dk6yVEVv1sduVJPgHoRYwcpi4AxvsLSMGKo",
  "key7": "4vnr2XLJD7Er36cWQ2oktDBkoZvzJJ85vZ99CLivUgrogtqVYmPkNa5U2v5aFF7GrFZ3dhJi1WQSc8FffyFQqR2m",
  "key8": "3hUvKJgPSDWAB5pAiWQmoMyGfJQXQBAdaY72xLkS4zVQfGwqa4SocDXe8Q1RHFxMRumWSZn2umtXjxvqigw1653k",
  "key9": "nSjDhASMnKpv9ELHx5iQX7LBMm2PuZA5GZzNG5vqjh8Q3rYvDWPEKywFtGjisnaFNZfyausNVX5qLgNhRcArakr",
  "key10": "5ivfZV8nhYCdxNbg6ZU3KkA3JNcFFT8vjYApFkA6ChJ8fcWxRGiRGx1abntVAABzkEGfoqpEbqCLXAixnpQ81EEs",
  "key11": "4aZDsS7BVhYEk32gpr5gVGfE237RfWFxW7GR82tNweh51D8nuvYfDmnhvbXzSGZdZX2LmqY8cVfxe86bWL61i2kZ",
  "key12": "RhShag9qLAapFx7a7MjGwTtXQkfspZYpg28H5wfV7Mki57kzJreweZU879Sb8jYvmGh9jNRdqTBWbhLQvFjYQMK",
  "key13": "3wJJozw8nSYG9ZijGeTrs3SN7vs2VnZrdBYr7QQQyA2m8GM4FbRdF7HCjxgd9Y2vFVuBDiohYtKRfsikAADWi6VA",
  "key14": "jsJzDSpiTaTqaE3UeAM5jrPeVAU5WC2beFc6QidJSj6yqUCypYGcqZiiDbztSpvBQwh6u6YhNdneJp8AELBLfEy",
  "key15": "4tGxuULH1RUBmp1m8yfSfNNhpvfGp63pSJjYxoM17aPu2oCP99iNnf3zsWXSedxtdBB2Y6Eok3jrxQrUn8CqcrVT",
  "key16": "FXfq7V5wrUmbp9MTCt6o8W6BJb1ha8B6Y7EbFYRJd46qK6gmryje22kSkt9Leuu2g2cn64z1SxX2X5YWxLP3e1P",
  "key17": "58PFsDwARN91PD9xLpE2NSFNuiD1c3HVBZvmeNjJDybRgbHERTWh8MdVXnjDpu7zxzNeHEeiiFjJvubVSfTRKUK8",
  "key18": "1KQx1RgX6D23etRGsnN2HLU7TvZAEKX9wNTHrQZEyozfq4HiuW1G9ZkdBHN6pSba3dqHQHWgk7wvJp2eKu23xXB",
  "key19": "2yZT9opaQKChywFxVpmsyyBAvMV1i9DSeyS1J7oeMLeUE6R87h2p16iJTj8DuAWzEtBdpVbYDQ2a9c42kpBvBTJm",
  "key20": "4S9wJZK6UyCiUa41gpiRu1cr8WPYaqPu96GytLk6dr7dgtpT6M8s9CNLQuomDEPCubetjS9uhnM23ztjiSJFysnE",
  "key21": "55kfxPuBdpE9cXNRBnjr9BXw777BddgFL8uAQuhNXUrXJH5py5E413QciRXSMz3QiZdiFzVtpy689injr9eVV2Tx",
  "key22": "3W4MHEYWp8gpSdbbo4enByigieDNox97QpGWKnm9fQuwqerGq95kx1i6HhY3JDmWFASCKK9QPyRb1YgJLgzFFJMo",
  "key23": "5iBLQKxsYydayRchWikqLiM1aorbyg9cYpQad5aVFRYDUrLxsbNPJw8wbvLPjfP5FeiWM2CF7CG6qt3wqNURAKfk",
  "key24": "2hikgDjZNtBYuMEaor6jhib1tu2AgGGwbxnavXmQdXPu5hWf2VJ1cTdSJdunaxRxQ6S9RvisRwCihERHz8MRYHpr",
  "key25": "2SN6sYGeVdSpi2L6dCxRcnG1DtyEZm9T37xziAHRnpLPMPhftKZEWJ6hLCLc7HpfMME9qKNeBDuJteoMdPYY786x",
  "key26": "32NqPCENyarPcaCcU4avLarPiy7atDrVVoyJiaVnEqt5UF7TKrJw3edmcAWvFAU4VB7EQ491Mpe2Uij7cMohyEmv",
  "key27": "2zEsL66ehw63CiL4v6ix263bZKGeAdUYJS8m36Eyg3KEBgfUPwHFfWrBX7ra3MzbibogyCAGFvFjYqck9vAvuyCx",
  "key28": "2Xj6xrLqpduaFDhQY4v4ve6TFFRzoNVPFmaTuQMJvNby6AikpH3rKh48We7owBRW4a4Gkca76uZQQfUyeKqkkUmE",
  "key29": "3rmdjfSm9DGXUKDAR35JfPuTkAzSrfacvzXCCoi8fnyXp4SjMWiV7ko56z9PTzrGtgQbuGFW26SupKGoYJyyKwKv",
  "key30": "5H5HXyaFK5HU61GuqLSxZkzKxAmiAZTfh3XSsXjChzQ7HJkJJ7y14KvowLuKLAnKFtKkJPY5Y7Vh4WtskQzhPGfV",
  "key31": "5u7GdUWkp6cKMPaDfwWWYDtjL53g8M19E8oe67ksmSbTVrRFxpTVmhr3mK8RjruWoiihoYMXLPdFQb92w9hsuZcU",
  "key32": "2fkCybEKvrJfcGo8w7wwfqYnv4yivtqX9pFvXiPzXU3sMibBVGASxq5wd8fouoyQuPdw6sMgk93uJRA7ADmh9R3G",
  "key33": "4gNh6cPSphwQEqhFThgjPgvYPqcJP9AoNckL1trXrH6dofq83YZK1fXGqZrvzCbryLna1Yc5v4cjz4VVGdCDPCkn",
  "key34": "5LKznj9K9DZA3Ppw6mDyThW6cdLweffbDBjmWYSaNe3v6mSKcPUCek5tpEts4ETpjAsNcn8UrFqgY5o2cTUGSxs8",
  "key35": "zs5WgqzMndoeQBVcXhwCsssuHmLnji6NoUENU2wKQeMEiiaF5TbPKRwdk2AKJYCo6bkW4zC9gCiasrNPjCeEG7q"
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

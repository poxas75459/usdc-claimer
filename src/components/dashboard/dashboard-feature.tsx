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
    "3xsVCRLmdaSKMtzVHJ9KEa9kdhoPG8uta9B46EC1noqybn47FKrrr7p91hhDdDGgTE4LQj5jP8jGKJjqy7rUZXq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgM5TQqz3fbAGcqFLqipGbXe1hVJpAdrTgXgRLTCLXMLp2HFr3YhPB9P4a6GkpAqibLwKLCvyY7BmRsm4bwHnHQ",
  "key1": "auKw8sP3FZqno2fEHKrbpUhNmiidBNnGmCT6rY3DXqKNjiaXysPXxQsT4Lx5edxn9dcHo3BQPUqp4ZJT8XSDbB7",
  "key2": "3iJpKBitWJn5QMTSrowdQtETqi5rBf4A5tidSATafYxnzo7qf2n5njM9HiVLC8e73a8DM3z3PCyL7YYoJKhzMwrG",
  "key3": "5WGR1tgdkMYiagxXC65zKHSKYbzSrxd8af4FRRFscdUPuzerL4Vy9Kd992aTNBXeFQDKPioYTZAPnu5XJ2PfjD1h",
  "key4": "MuTQPS47a1BG1sTA7CwRnSbPeqfbtt3u4RekXZ3291DsyxzfyQb5ifUnfrrahRYNxi4Y66AjHTQTcVoX6wzTreE",
  "key5": "2zgw3wr6eDaEPh42xPJQSSdJ84rfi66YUNUvMzgnknERLjCzfQ49L1CsAKxr2TdREEi7pNVL6iyH9J69G98HXWyT",
  "key6": "2ebdFcFkL4NEYXwqFr3yJ1TymL9VPxen14dDcz9qBC9YPNVLApSBXk9XErbij3Rombuq3y7Mp3PxTRcJfVvcYPib",
  "key7": "4bKhjDMgZHuxnjnwbh9GPcap9vtPjYRxExioVQHwJiB94eWyBwbAF9k6QPBSFe6yk2pQkNnzFSJkqu9cYoBpEwEy",
  "key8": "5vN7d91CwSsdYYaE8JX1UGC2FWP8MYGb3YgsvSepSGnF2QH7x71gMb4JiWsNs32iAyCWpT2Y8vnbmiRmLRio3ujg",
  "key9": "5XhcMighkmTTpxViNkmrZwsQJWiqZZbwbr7unyUXiHzuwxwS3VWjBcdq1Fpk1fmGkzRDMnbfVM6rqg818qjq9N61",
  "key10": "2v182k2z8kXMCfDJDk257fwkxgPgkrNV93Jw6y3HcSnRtVRtgQg4jouMw7KjSjMpctgjzTRnMsLkw5oiqGEeSEPM",
  "key11": "4kG7F6AGkBF1DMv8AzhRKHKFhb8ZkPSqx2f1xoNa5TQwhkpDhtc4mYKAErsfkjydAeVSdE6bhWh8zcyG3MqyZQvq",
  "key12": "2idRizFwGQS1PmkDENcEVK8QTFjLV9hSDifAsMJ2c6iEQLdVNrc1qMxGzcBnCY4NKFhyAuRQSVmk8sUmdJT9JKW1",
  "key13": "iBbCrW4zaVb4rQWvxwBjuASbjU4bxaxuT7kA7XZnFKVN2y9xyTv7RuRbBnDV8LP8suCMSi5PW57TY6UY6ysgyLq",
  "key14": "5NpbAyeimKShCSrrLVUhkpz2AAy9MSQLds3tqfcQGTgrgtya4qpTzKF8ZaWQ1DPxzikBFZu5hgS6K8y2xZJ59uh5",
  "key15": "ew3Fxr8XZH57ba4bNXVQs6hbHxZXuRj4ytktRsbe3wP2dxXPEg8K5QyfYJRe2pfEu7Ja8zhr6RCfg2L3AzeBckS",
  "key16": "3cRrdEpBpyTnwXbouMEmT9Xwb2h77kttRHniBjAkaqqo36LrwYztvtSkD3n6B26qnmWyUk62kcLHcR6RV1qwnaQJ",
  "key17": "2CCKB72SFiirpptBiiCW2W5VXqfKpAdwM47utzsgHzJkHjDY7wJHdJEf46t92FAFrqNr4NS88UhABodVKmuKqzwb",
  "key18": "8CncYRN2cfxNAvgKaC3AvzCnKHmHVKjVHdWRPTNNRsHzTq7n1ssscvqH7XQQnH59vZbAvewaLErZPHSttBsFb4n",
  "key19": "VJ971RzJRhFxaTDFLrAvAtwxTyH5LnxDLajJuRimwhCNymNkvS925pNCytZjjpCYB9bEMq99xf7yKy2cZ2voAwh",
  "key20": "2vAdASbpE58bDaRgdtjjjTk3jFZwV3p8HG1AucnM4e4YZc2ainTXG2thcrEbbEfLCRt6aS9VVFrQRUmPHkqo179b",
  "key21": "299xBx7x4nPX82YZLSTX5PJEP5mgwJemQ7fLcVXoPTrWwsQF3DJYxyEwGp89FEYQUcYqoLQ4YQwZdorF8aWGDRHN",
  "key22": "27NxphBh4ZPGbZoFYAaDLvY71orCPay72jXeBT8dP1sqCLKtH9DfXPSkvcEv9f1XHztaEo7kpEBKfgis67HzxJ14",
  "key23": "48D8Zq72JVNV4rjN5aHjvxaHFhLKqsgeEjp7LqduZ1Stx5R51GGUuGXejvpokyfqriVDzrZdnFfMYH5KBrp7ZmJi",
  "key24": "3A39ahLz9QwZStKnJp6UbkvkGdqHc2uCG1zcYrPwVip6hZ4JRPycw7558jSCNyWugYtksKz9AAKKzJqZAP9bg1BY",
  "key25": "5z2nAZ71SddNwyahNDueva92B7iVeSxmS9u5xL3PF3DeHbm65wLPuX3kA8jFTSh3yv2doytGKDCbZiidARG1DQP1",
  "key26": "4k5VsN2Xr6DxEUFBt4QxFCAJ2B8oaG4qUYrCHs94WeWEsHHzuNcTXbDGUEykM75bszbnF1XQCPuQ5eragmVFjGQt",
  "key27": "5MKrDee6hh3SBvYP1xXNzTCBpt857nnX9TiMN1rUE9XJXbzQQMg2oVAPkdwTxcvG1EtdZmgAZjRXmVqtyK7aq3UV"
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

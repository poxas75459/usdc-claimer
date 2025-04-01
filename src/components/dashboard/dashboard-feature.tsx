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
    "63DMGnG1qGPYJ8q7Zk7trVfoWMpCmrjTSdfgwzdFMKXvaSc1cFdAkJTEvrEutqGiSez73Ey5JhHLUaQi1mzsqnzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mivf97CTVFvHUq6F2DM8rk9CcRxWpMU8MppaHLbE78qiR6rPf5B7bttVapfUkjJQfptWZUoYXH3wUTSv4qexTBF",
  "key1": "2kkaotCovFAgSjLVAgnbmciroqJDDAhXfqr6bgzMX1YbNvbhAw8jSSbHY3U7ZMn95bz2ZFBUmxVJafC3ua4qAJmB",
  "key2": "2u2boizQs51enyEKvDCjD3inDhmPKnxVq1bAvEgpWEAES2sak6d85N2VaaevW17v5KS1ciDNeVJRgQJb1Gj6oTRj",
  "key3": "5umUmzK3WTtBQyTX6j9f4zJAiLZqnbyTCJXJDZQ9sGZ3j8KUFtE7ZTy4Ez1S49eYmU4Bk2kc5rKXBuZ3VbKFpzAF",
  "key4": "wecUs6tT8sfMnvufJw8PbSnxXNCzuEhLEYw8BUxeuxPv5iF1qD1qxqawxTrgeM79t35XRb7x5bevtDbPCxM7nqM",
  "key5": "2aKb7WcWZPRpW1LUkNa26uGpaLNhXKXfm5CNFCQruz9xJ3wTKadF9ymbKMbC6oosvNmcWHiFrGsReT9eE4PMJUSF",
  "key6": "5d5EFMe8HpS9h5H4AagSdE5Zh2rCQnpUi3jcmR3xa9PcnTWnmzkJ8u5dRrcstFvdVeyjiYYgQHnNZqkJ26gwBydT",
  "key7": "4kiXDBmmd6eFhCVWoN1kjJKF1Gm26WeeoKUENz6wUEe9mHSVGXwKo6uQZoDASzu6UHnb5DC7tzSHTRGm5nLqGtLV",
  "key8": "3DAcUeF7CYk8ujDHeBnaqYbvKg6U4h5yy85ceAHiFcemP6SZMhrNDCVbeDvqdC4Gfxnw97ZWR9FofBtFLEb6XPNQ",
  "key9": "5oBgvQrSz99gu8fLTfmC9JDH3ToeVNkH7eWwBvtpzMSCGURLoWhyotAMk6kYaJg3Eg2t7HRDJ2uRGGYG7Epz7qkN",
  "key10": "BRbUbCzc6gmgUEbicYfB2PqkZTJSPDqRq3UFNw3PiowkUJvd7K1LTHgrxboiFW8rX39pzjTztXZzZBvk58MkBn1",
  "key11": "BFZAo7mEfGLVyUBWbaSrWzRBVGQyChY9sBkMPqpon5vGHYvCKhu6MdueK8ubNBt7YZs5L6puqPURsymC4B1rUNU",
  "key12": "3APG7wFh26KH5kFqvsC4QUmJq5Dc5iHzdkLG9iD1A9SHcScAUSUTh6FmhtvnPfRG8AdQxrPBmvixcsPhEuL9nYtx",
  "key13": "2Cd8TBxT6Nbr6BseAumsK6JHG8yALXTTyNEURrhxpMXRZyUvTcrJ8MBkLNs7Evnm51MQrUXT5BCn6qrhnSd8ZBWC",
  "key14": "37j5upcrPc5dBQQgv9vonQetWrgGeoSBnvWMp8S1Hh59iWPk53WvrKfLa8z5FYrwdwXcefCkCh5tntXcoSmCaBSG",
  "key15": "3QaoMUYDDu5R2MxzWDwfNMV2Bv8zNGfVvP6QFrb2N3kmQM5PzLbva9VzUkNdtdhhRPRgF9hVpLgfZYM7PG6t2u6H",
  "key16": "2Hs5K4HsLVuJsr7dPCvB6AFrJnRUC1LcF3pgtnFdso6JeDCrHGd1DMzYN8PabwgJaTBest3EuYeJjEpyF52kfNwN",
  "key17": "122CXzfUPuMXyHiMMUJytakw5bseLgX6oZ1gRvL1cFLYiJXies7kjS6egjq9ENaGjnTzQEtcSLZQU3EuvTzsupML",
  "key18": "3YmRKJw7SXeHPJfhqRoDiJ5V1TBLurrJnQKqBfcGXx9szizYAK79oku28ansMwbxVaF4QSajxDkMb7UmU1r76R1s",
  "key19": "3PXCN1ktk6xLxp1rZuBuYXM6Fa1VQpUDeopLEpYSENRqLPJkayyHAcYwnxnWtGzLqtzzB16LQHna8EQnYhQWd7Ms",
  "key20": "3HHhimiZZtFa4ufp2RX23CFfGMXno5FF8dvtHqRxbhkqTEyEp87aGEMbtjfdGcy48yj4KVLmwbsvboTZt2XaDDPe",
  "key21": "2qbfWUHSXZaADhHAL5fqtqvoL1FPNe9bFUj1j8brdberrPvAoC7WxxEq5thNNE2KjjTJ6NRLiUx4F7UbN628mY1o",
  "key22": "4UwG4g85VmGkf4BGvo2bVXu1rAzYCPnBMWCFEGgV8ZV3ues4wtqm9scRUMtQrhf8T6WTj4h4Yw4oWz9dvWbfa15a",
  "key23": "59ev9GeHR3TzgRoayJ5rDNtTckjcr35HHqQy7G2HZYweG1ZRNDmBe4igYW9sQ3UMQw4YYJNssDMbnk2vajrYoDKf",
  "key24": "2fCuQhgHJooyHnHqngaAPjzfk6q1izu7sF6zcdP333TMVqVNmc1oNccLzxqvv9FjsmnYE5NRCKr1kmzThBsmuFRC",
  "key25": "47no5FrCooc2a19s79XDycL8cET4ia7LsMjpp5yxxHGLP9Kn98aWWVgBffqQjnB9ntJ8UP5pspoieUXynZ8FvLZB",
  "key26": "2eXJY3AZbEPYvWAoQZSo1DHR2buSGvhTmCqLeap5o6wpniXF4eSnjxSu97xaqF4FLsRop4Q5hkXnAvLhHzMoJJU"
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

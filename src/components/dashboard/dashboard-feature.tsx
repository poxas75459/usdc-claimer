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
    "65p4X9grtoQpqNkxEoYoZU8Jgt6YL1chmutFN1wjXtcwG8WHAs2vHByG9Pj2ouJxyejYj8LiD8puzNXm45XhaRHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zhyWSCDWKEcCB7aqiD44dB4apXaH3Z4FWjZ72wXgQVMJt4RmPSKenKRxQAbPdLixuPV2qPueqtpHyD5E7PvjDw4",
  "key1": "65TiYtWzkAy8BTFaumrNaj3BmkSdJ8RL9kq5qEfvKrvDNTpTgxZAeqcXYb411fqUh9cazpMLe9suiXuT8E4zkG4H",
  "key2": "5swtQoUDxBD7jwY1qjWdYf92SBAJquCfnmdzYfkp2qVrmBSr2jYKfj8tfe7iPammxTRjHzim8NvpBsdPfMe4pjgd",
  "key3": "gaRhMJhBsYbUKibYmN1wyDYcseSL22wxEfoDBuTz6xVUGLj53oreXbpRnatR9VvpSqoeRdPQw3h8fV4pARZfCu1",
  "key4": "5RDmKrbfAa82kWwbfRKcQ5CfsqmznhhzXfiKDtjnTfAy34TFPGWkMN7MYqN8g3JKUdvyhJjjVmydJoMhwGWyd9DC",
  "key5": "qr4Ltt1AUkC8ikTXXX9R9sKppSvrfPj57aqLtQQQrCDC6KRR4QDTWUwXTV4gSmuwaGcRZFBhzKdBHhbKsjuF3JS",
  "key6": "3GuxX3Zg9FRGg5Yg7XHHa6rWWiH3duyt7P6J2EiteMAwAUiZRU7Qyj8XZ6WB6RXsTKVXsDMfjpMULnFPKcJGEFwU",
  "key7": "PMYFRMvkJK4txXUwQ4RC48HXqo9bLJTfvMsiD3Pi2SZKBowZhCbVBEJgWWpHqRHMsfxw2S35MmRgdNLk4xfodxE",
  "key8": "5A5XmMQvP67b9JfesLy8HVC6js7aAjpZsafZyrwUKdjHs1RGP6xFUr7ydbxfG5GyJwEVYeiH3ejQTc8mN8Wr39kx",
  "key9": "4oqfCHVhp32BuhjFtWXXNKiLBv3gZLjDtQMiKuGA6XtxPS64AMZTQgCC1E8R9sNMogXeaKYHn1qCeuSeSetLGKqd",
  "key10": "2sexBZ883QrGvqM3eteeepDZf38Bqgr4niwEFEPKus59tewa4XBZDY1a158esaktQFAYRHNsRgWzNtF5MMZXtQMN",
  "key11": "32jF2knLGCxSXv5TxEDuzaE8Xbf37bw93MpYdxiQ1tURwqRCJ6y5YGZvBvrZM9A1jxMtLyzCwkmJpeqA5eUdQgTw",
  "key12": "26MdVKvwUFXv4Fhuu1E66itjoar6kCAjW57DRBBP9w12JNRgtpiiHtFaEGSBkcR4hDnA7fLBkcjKkJauB26VfVnC",
  "key13": "5ubmAsqpQq9AGznjpf99G6gbtu9bpft5796R5xnu1ftFB2wyeYRphCjarrrn8zo8HNJxgNssPev4Nu5ZxMRUmQFD",
  "key14": "5HsayK3QPhhJ7eBZ3FTFSFrVzYvs6FfXkSJwaVCYdEWj6JM6AHpNCUBpwH2FtV4BQb1RUsDZFtaYvi8HBTNrUVcx",
  "key15": "TPtxHXhbxDjkEBBZq5djY2fvb9SRYPCGA7mH8gtZ1zs9akANmiNjwUjfqYg6BUvDJj3387UNkWmKCkv4XQXZs9F",
  "key16": "5k46a3EEDFRBAifAQDGWSDfjLqCbJLBkxwd52N5hni81kFe1oPbaUbZB2VFvbNgfMgqRcNNMJ5WDEN1C9eMeivHt",
  "key17": "65zFoxTKFuXzxMkYR3J4riHM1a4JXm8MCwMJ2GYXxviTQMvYpB4intq15NgHgSZk9enzt33n56YacWKcpewQWBgF",
  "key18": "5P5VVTpytdWyNFKd74D7jYBadmHZgXJQTewaNs5i3fMNpDLoPeRcvqcN2NaYxiq3nimNV9aSXvmM8umQxXNK2xGj",
  "key19": "3cHPeNNrPc9Y2KLxB7Y2pjaMACVxSTEGtSDAftEgzZorAJKsPiyX4wB11dP6t2eYjanLF1pq7K2ogv4cwzjEWyfZ",
  "key20": "3xq6b8BS5x8927uwNTAKPGYLEcburZoPAQE7RnnJN387YKUoifyE7K9Vhr41xsnkv6C5N43CmL72t6J8J8mScKU9",
  "key21": "4bMwvzcz2gHcZCxWahwFXhrSkBAdNBsxc98jCKRmaPLU5kDHc3ginLQtPgXsTPD36Bxue2XDVa9NqCA1KWysAX4H",
  "key22": "MkuSZiojcqdskde4M6rfL6aaVstoTvtkh3indmH4VqfeW6cotpGeXuHNymLPbgTTMLwHavXBz9onuEtur7SE3Xh",
  "key23": "3JVsjWbTreiixdMQj8RE8qMCjR51oZYPxZU9C2Pvo2x69k93MpFQoVCTQ5nk67kBoitrV5bvQLKKjkUvH6tiudsJ",
  "key24": "3xW9Z1AveB9cdi6AnYDvQNLEc2SPpox7enabAYJS5SPo1Xpk3HofBg1VqM4XvTTYZtWwQsskDRbo2E5LsuAstouF",
  "key25": "4Soc8ZDVMEXRjg5vjESshwkCFJ6Hrx6RPzWcta4H358h1m1iBt9Qyc2H9minEkPw1WGWMZXNHuUevxHD5foApuUE",
  "key26": "t54ygfKEN7SJ1HAqEMiWjYKXFTdPnAX9JBUbb6kF1XerFfVdLwfFbgAdkJD8qmpVR5EhJLE66k9qk2Y7MS4RViw",
  "key27": "5ikxu8mELySSLSce9ApkWfY5nG9Nh5kfzPBv5uzqRLcgaa4kiPHdDNx4BuZssRp2UStiUR9eK4HKDPWDYQx3ZWsw"
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

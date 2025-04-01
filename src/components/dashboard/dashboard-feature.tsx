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
    "2weHV2fuaroBmeWdjxkuMwX6wUGoB3Z2381Zk4ojxQD7xLW7Jx2oEdU26E58tcVDtmCkoFh5dwKCN5YzBoLQf4sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhYRMEmbYo5ustwABRwrfp2vG1bnRmc9Xh3GSidrbsQd6mkZSwDnsm3UvMvYK2SRqrWWwyC6wURWhRoGcSSiBEG",
  "key1": "2F2yE2tkLwRiievuxBtyHYzapQ3UjFMxgesLWDjedBikq5AtQddskuZk8N8boH8uUoBy5JXudziE5F9y1WkgYug",
  "key2": "52c3Q1ZRBoMFQmmumcZDE9347GYsXD5gnbdukr4fE6YjAyJd2YWsci6ZWmiAFF3RdG1r9AcqimooEhckXNpcHrDq",
  "key3": "4XCb8zvnXQjwxoQn8qfDFcT2pTwbcmLt9pRr3SJp42QnfYDBwK2yhgCzxjTw8xoMxpiwesPj7PvGN8Y2sTdmigHb",
  "key4": "2RrJzxVWeQh3XFbnEDSyLvJmSY7LR3b6SRaHnDwr1dVEaa7hiMkmStbeCmC9STpbzZPf4m28dmrM8N2QRE1axv8V",
  "key5": "5pbQ8fhAbNEb758oBvCRN19HuYn5xEyCg8JpGwN2D5f62tENDnEHnUFEeqJNK12nYXFqMdZjKSgvtkJAKHEiRBPA",
  "key6": "4RQdeuPK5oULoELg7qg2ACHHapru6fmKeCqDhEnbNf9ujSPjT9ee1wiwSqCdSNJeCD6L7Rrvd72VkZLib1nK5gSp",
  "key7": "36ziveUiLVjVGkaDt88jgJtiHn35hgZ1x2KfTyyih2S4zf8WpWvaC3maYvMxJRVhYxrc76ednk4GVt8wLQbgkPuC",
  "key8": "ECcV3MRQWf7irBEgEt83QCukq9rwMCCCZ16V5tA2R2FSJBTtGFNvpCC3NeDWkduMb7w6yTi681kivQUpEADP9yP",
  "key9": "3gEXdZ5vqN5z2qo3oGmCmEXwLyXcid5KNV9BCkxof2JF7Ktn7PYb9YYF65s8qPpKHAR3VUVbWXVeappHFuSMrfGH",
  "key10": "2i2Md3rVgd7SW5N1v3UwuYsGKm4LAu51EC3KtFLpHMFFKeRk7qxWzjiprkHqVWWSP8xz6savF477aEvxToCtzm2J",
  "key11": "52LBLA8kGXKePZuRTaZwgQwbTdRDrhaVvwRH6s6idN58fz29CSxwtGhfBqG3f3GrycuxEX7H8mmtjnC8obTLRP7E",
  "key12": "2t7MX559XJ8uHjkFvEqj8ioEMq8gSw5aiX333S3GEdCJ1irJjfgDMc5jmASjdj27o5UghfkvwjyX1gY6uo1WjzFk",
  "key13": "44AKxM41TUZWtreJqZ9be6j3i65AwHrmbioSuGYCbrDC3vbaeY7e3SXwwGvX78dZSeKWXCmosc4rkJphzk1tFCGg",
  "key14": "5L7Ekviv3i5LrvS2WV9qyyhqTfqFgj8WVhgbfKN3CUT8dht9borJX8XunqNmRcijwULuaUiAsTFfXqtFgJScLzNp",
  "key15": "5NSx6rpo8AAq1fB5TCmQdmNG3Jg3txBbyjiGB8dsGAPj3fwQgkEjS9ovH18uxZz9XMqHrdiBirL7XuwJqowdF4XS",
  "key16": "2tEU89e9B8u6cYjNXn7xjqEARP8kcqLk2BcorB1kwCnwYx13tGmsxeQdPaJkXQu4iNfcFhTgLxazJbXWGoPAp8j6",
  "key17": "2p4gAW5Vw3SfjmmRcgpEqakXRPPpf7iCZoTJpsN2bmdWjbG6un2c52j21GVbEy7B1vZKfNgnUbn5C6tdDwsjoiSk",
  "key18": "2tMGBvJTMxv359sT7XfZcnYVEJifuWB2Ps9DCb8yfVVXGwUTTW1teFMDA4qi8Lhkxz99ZMPfhqrkdTDtFu3jBNuk",
  "key19": "4MWBfTEN3ANE85XkM9sU6xy5Wou4jUfGfHrqFo3ZpSJ7BadhSnpZvpxuaVHWB1Hg34MSgw9uoFA2bnMEZZth8nKy",
  "key20": "48kCTCm8vbxu2Bpsn6EovQDTf3cKJGpyAuVQiYxwSCAmd5rhJQsyLktQcz3zJ4DjpYW7YWqsHeqcFAHNLVA1e7rE",
  "key21": "4Ch5Kjo8zfxBanD8K7Bv6afed3Z2asRUSBwozxNXB6HjjPi2X1kJcrbnJp3VebFF2sKmqVTzF4NZzJ27riSVFewB",
  "key22": "5tj4e1a9ArGyUZNcKGsSbotP4TJpp7en3PsWArF9R8EB4GswHuYjdLjkXMNv5EttDzYf3fx8LR7ezmaQaQEyDPYE",
  "key23": "5XKwUvzPa2REXc7kN6UXmW9RCbNJ4Xe4AytgaDaAjhwCd2B8XMYjomAkgtXuHXYiMN4S7M8GswhgV73vi89EsMdq",
  "key24": "4KgYzwJ6EdoKwWgSyoYbUnGSpxZxC5SmcGs2vLHAPs5Y9CpTifRweDRe9VGS9DgYmNrEkV5Adyow26VnMQXTxvAb",
  "key25": "5qFmZRRWbz2PDdunoUa9Ebqm31SFJ9YAiEMbG1pKAxc16dY9u67TYRd1a2qcs97h2vUgsLwqGG6Ga2aNcBD5Vbxk",
  "key26": "3bHFzDrecYMKxDK19KGwuwtopUjqpGtBn26NGM3ufoLF6gAQeBXuBzp9CmMyoLZaGBTEULiQEvfmZTynoM5zZFZE"
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

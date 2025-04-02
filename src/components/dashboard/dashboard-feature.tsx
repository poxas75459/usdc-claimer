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
    "67bWJ5tSHnA28VDTJK6hJw4YbBHCgyknBoHgKJwWv6dpDMT5AnVVvfYahCUusmuBZ99Sc6tYKtMg1YkThe7SuiQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W4BHySWff2VUPzFNdWVcjjwWjtySVG89FraqPNXGVkc7i7V6xxzyVmSMdAF3L2a1VUSrYEDdifyHTncxFQ5jWd5",
  "key1": "2mCchMHzY2QhYzRZK3ULmMrWi1QXE1W6q2PQDJiRSUedGBcCmd9PcCRaVXbGMMdtXYTh5i1NZHKtZXjcAgqGfnQ5",
  "key2": "2kbZpoYCemVNuSZS7SNoVGWhxhhx17KrVBKGpQhDgwMpQ13oJ8UZnPtmT6GzpdU7YMYCynbUo6Sohs1BzuSJ3B46",
  "key3": "5LyuQQxDVvE8ZueBFUeXw3uFTJUuHV9onmAbT8ncMJqEJ5JmgLhxAmHbuiX8KRA1efigp5b8xVwHVR7C52S7eGVg",
  "key4": "4ppRveTxHWmZ4WX8fbgrxZiAGQ9vXzYXpxmw4quEv58L2WEjB4JynTUkd8hKLbC2QAy9aZp9LJAJUY6hsHFmsyPj",
  "key5": "YsoQeChrbjvUSpriyhBYNoVvn3KUeFE596aeEPPy5iFcFXLXuSWqSaABATy8SGVE53B7YjwNzNwF6CWhMj8jq5m",
  "key6": "WgQ3EifGwJS4LzTw32RQmbzvRTnJpNHZHKoBp5GpDQPopnpZ7bjQhvV1hNVYSCbZAA1nz8XauRAWy871Ng6J6zC",
  "key7": "4DcUx2MUhywxQ99P7LBpNoy1Vj7qHQmrshfKPH5FMp2xfiUaECxp2rPoW9otrwkTxSYWCb5AdrufuyndzAQCpdbf",
  "key8": "4ryx8tdyDmQd3ym9HrFqt3SLYt3DWC9RkdMhYezHXBL3QCSufGhfgaSUKf5tsCMj6tfHvkT45ni9XtnfjaFkieK6",
  "key9": "4miEtpGJYQDKUgVqGyo4y5aQAqYBAKHqXomus2WQo7G3kroADmo8QgZSDynuarf2FoMtsjcABRogUemt8KEDwNg8",
  "key10": "4xdpyyTynUVwqJjvnGz2zYyGJyRDQhbuJLVyF51cqoNbHvRqjyCB6dq9xn9ra5QPciMQpPLGxewPBmEXzmYSqo6i",
  "key11": "2gxb4wD5zMDiZ8BZHrgmT5yD2StJ9ekos1Aye51jUYRKkdPqYYe8mWWFiS1tzHKS3vPxCESf83DCaxV7YsC532t6",
  "key12": "3oEe21QHDUcbgPptfFUA4ovs8s8eiVNvFXWVeAUU1kR2h7K9nFxCwLnhB69kTAmdr7ZrtRtGqeHecUWsW2niF75n",
  "key13": "pkZ3KGjL3iPyy7hHxAaXhLTuAcuR8WcvuK1a1989sS6hzxD1DgcYNBrpsMZtwoa53qaySnoNKWVLrYonCYspYMH",
  "key14": "5xhDmN5nJy5V8BHz5jnWL2KmYy2pXGbQ5sWsFTRs38rhQTRpAqhknbFnqw16ERk89UWM2GYnY74f6t2V9xYNVPNB",
  "key15": "DhWkpz9monjQEtXP36dk9MeKKjtDZxBZni2s2wZnZW3G7KQNmgXwZWx1uzBACr6nYB3NYuwFHPeYHY3rXZC24NN",
  "key16": "49SPqvtWi2TWzezVSGe1zmiSTXreXqoSsg9R4nrucpRYnqudjQurrKMxoVtCwycA9U9v5CNntQ14TnNJGp2rtSvx",
  "key17": "2hez2Dh5GvCgcbPEA8fCRTPEFUH4LHvZ6kryx98P3N9vrLvvjrtXhdRJPPMMWaHuRu4Npy6Nx1Lc6QMBuCcTXAWZ",
  "key18": "31mgaTsFDtqPp12XcTkRkwRvp89LE5F5a74bXR751XxBGokhdjfCz7nwRFjyRCz7WGhCTeqPKgZ8ooziuhr3cnh1",
  "key19": "3TtA7as1VfV1t2nHbtDbLxz4VAGzebUde2CAHRtGrogwi9rTRcyPZ7wohhNYQpAA2JucwVvanFzWHvrvMe1kvb2d",
  "key20": "5VQcaz1a88AJdoewYvKAmosswvt8UXXpBBYaRw4JcuGNh4Z78Rof6Hd99hLizW44GxWkRfCpv8Jur7L9HuWQx8dx",
  "key21": "2kgzy7LGK8sN1kC4Hoymv53XgThn3b4Cu8ygXeqoe3vhhkcVcSqaZYEJDgXHBXS2HjFGQVoFKvq72iVn8KMgsJjV",
  "key22": "Xafig2QcpK1tTbM1N3i3ZXNBfWjhafMqLG2FhD6m3bc79bW9Awsrpe4XF2jG4NxoiukrTPCY5CkmfjYJoXJPyQv",
  "key23": "58JR6yLRZFR8oaFZdamf69Mss8UeB81rgQ1VChruxDMHtqSYNKBpzrQjpVPJwKp9fnuWyCoaYKYUbMK619YPWX63",
  "key24": "bjyR85fBwgj37T2pH1Q53wCD7N8xiY8mAhsTFGT4qabrS19qoxkFoEdgCJNjqjfxKwgQ9czMphFyPT9xbfFnBf4"
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

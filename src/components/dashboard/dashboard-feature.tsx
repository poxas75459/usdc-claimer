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
    "59LXrBDQsnukFJHqmeii1wvwEvNUPHKuUxjyMgGY6pfnfT4Bzrc27E5Qafq5aU971HZ9Vwhecb65X2HowcB8heCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRx9rriNsUBWGZ5UvpDyypZjXo2ESdMNNQLnfjrsU9taxZmrkFZGfasTaR1RHWMbgT4hon69w7J5FcVwqPMiVzH",
  "key1": "auoQqQAGfjvbhSmuVFtYfBJBw936uDDmws5jc3RDqQ7UWctcPAytAhZGATuGxSmJgpNNhmuzRqZVUQVU1XkZvpe",
  "key2": "41EuFLQCtj3jEfpUtjvGM1VafhmhjnRRoSrEDfeRCdJND8aUNkPQE5QjWMDhC2QxoQqJQgMPzYNkx4YHachNQ1aA",
  "key3": "4xAuv5fH4ye7An8JgDc2siZ9jFALEMaeVmmc4xnaEudt7QPcmhPJirUxwPZRq6RwJYnbqmBkHHmgRmk3Ez52v99T",
  "key4": "5Fv6VX9Wt4ZPCpBJtKHTRvhRbpvw1huDtc3Z4QBHNSfraX5FAZCgLCbBmnDNJZxbw6jYTFayniGKPcpkpb3giPts",
  "key5": "2hSpt4pP4dViMY6mSs358eduvtYSGukLDQf7iYpL8EKjsEW4BTfDYHMXnH2dT5XZuNkqDq7XiCA9URbZnZH3Ypsi",
  "key6": "2Pey4W9XwsaJhRTp6TFo1gwebufvhMsNxDjG6LuDaxyjdrW3VQgcmturkfMQykDhrs1ExhNQJXTPXxub71AiXZFB",
  "key7": "4VkhwMnhTHPZHpvW3GhLq7jj8jdCJ6EERAbmq82zvCPaE5N5bt3pQDkuC39BH6h3z41ApSzm6oAZQvt4KvKFMQjc",
  "key8": "4UzfsV2JFwGLQHvq8oMSaC7tayHBJ9hFTY2FV3zF7F4VjFeioCa9fK73Vwz7n7aQUdv7p5CFPhYYRfaMKXJw3AGU",
  "key9": "4oGVwXbYTZsmkR5yaVdriKaaeCCY3YZMqxhGuvNSLF94Ex2LHZBXxVSGajyVLTcmqpUuaJZdYP143hhXyeoZ9XTn",
  "key10": "4fVWGuiLD7sKkLuaxnRnFS2iGjXH7MmWdCcTxNa58FFWtR5N16xzrfScrdKfLt6n7WuJLdytPdn8WRdDkVY83Xyr",
  "key11": "461Fk8Thy9hhybbnSfWLMfqezAE2mry27JAhrck3gRrdJ7hTrmqmgD5DTWC1VfMYH5kX9qKNg1wVw9sPrHgMA7hh",
  "key12": "4tR45pAJTLCUwsc2ARJsxN6uHGuLm1mbocwTARBgVrbAebpvVkZKUfnn4vdU3qJofAmrwZZUs63uC6WjkLjvqdCZ",
  "key13": "Ddb7WwtjvACG5w6Xo6wKr7m9j2y9dtXmvjEHYeruJiNLvReDLGSx3ZssC12g2ZNS5LjEmutXqWLNBxuStmzzro3",
  "key14": "2dQ8PVYKtEsdEBtg7TMzcyzGJv59biG9e8s9vBs375Y1mqUGrMSiktyf8tzeeQJ8923ggMUuVbHW1PwUPXzyQUC5",
  "key15": "2MwPgb42GH3LrzRLexscXz6ghLLevUsy7hHquJ2hP6r7FKdADXm9JKsUWUAQPwcrDZK8PiBg6PvdDut8hJ7bsnsS",
  "key16": "4329GhH2RtZbHPwNGdTiJXksoyfoCXwtAJAomUi6vJmmpQ2ZrwPxwowqQNCAj6nxiJuJnHGnd8Jb9hUCuYCSjfVx",
  "key17": "4gjtnyDWoe5Txe5fSCbaquB9Jcpra7vXU72f7GLoB1rxNYQv4vw1WbH6kNSMNJXyYkrE3aCFMz6bKRzdjwZzToUU",
  "key18": "RqJTkBeRBuzNNuSC2D5oxQ8dhMGubHpba4WMnWQ3FXvSanVwKdGae9UWxSgrjit4md2u6otqG73GykKWBSEMpDK",
  "key19": "3bBwfKwjf74oYR4DTuijVoEJoBy2w6TV7R81SGbkTCHKtH51MisoQqxiY8qzsTPz3QMUdzkzocSdaFTMb7MQUtHY",
  "key20": "63poq4n1WxH2PpZt5XPH5enBhXbmHSTE9iSRG4Yrf2vZtr7Hvn4KGRnk5hQypgEXAnMGwBaicJqrntQ12ZY1C2Fk",
  "key21": "3NdEQqTDxZCQd7YmbVbwx6tFCjnCGxqTctRYmRQRhbaQVZ3Y51628xza1C5DGYCuUxqCqaX5ueLKLovn3gNbc9KE",
  "key22": "4Ufw587GLf9w7DRH8CxvgcrtbGHzZWJdpgg7GyJTcdotiCxg9Tomo6j9cBnZg8FLCiFhZDfCjPEFL7uKUNNXbpg9",
  "key23": "5KtxB9jWLqgtuQ2sfjk27AfmQLkgDhg8qPJBxhogtZwRDBsXStmcRjJt9uWSSuBSC5q9D3uYxAPvbX36HWkWZakT",
  "key24": "5XR7PYf4oLVDJagmEvxk9jndPNBDFUUTAxTHaXqJbv5yeevvKjtEMQcpvgP9vny8Zur8aWjBmQtdMY2tMx9EKxGD",
  "key25": "3qrsNbDKPTHXR9oaWst99uY22UwCX5hf6LnNZzkcoyU6RQ17TfZv4ts97tu1PZVEMMgbP3dYp9HdRmvhk7z9FqpJ",
  "key26": "4h9PN9vje6DmDuZHmdoBKZxpw1s6Q4gc26Ys8rYhHeirNnKRDLVbFZ3ksduobaWDCCpuiduoQYzPLzPQJ4LSXrom",
  "key27": "5aG5aXEfnuyyy47LLwR35MyvTSfTx61pMEo7C29eejVNU9XVcFTmNQGkiTFzpXGCfM4Bcnmr62RsNKeddUjxyLo2",
  "key28": "3AvPfLtEDHEfKvJVLUHUdAb1fceSusn5Lm3W8KxaKxTpKeMdCVvXq6mM2Nf1Ubr8XbPrRDfTHpv4drY5aCx7L1vq",
  "key29": "46krkpdo67uRPDxAd37bceGjjHujE894tDyDJPCqbDFhm6tmdWrkY92KcgSbCV1nze2noyWutqvTVUvGQR6GDyv7",
  "key30": "5brVsHVttpeHcoq22phhaKcLNCMuysij3wQZboEnjpFW5kiL65paDR6N7JJoiLG6cvNAU128Jc5YMFGS4DzngZqX",
  "key31": "4Ja6cXFp8wbvubjQzRmhfazcDMzj38EckXLxmQfLEbj1eNB7iKip8ybmkqHFU6YE3KD44a3HTK2n8RYedQEbPw6f",
  "key32": "5tL3PHduZYZzT4aDFiyWkBDdQHedjQBpVH5byb5PCuwSwj8oXC8k2wiXSQMNq8zykqFRvaJYjbJkW3zjLQKuK4Ao"
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

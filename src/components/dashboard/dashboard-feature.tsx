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
    "5QsXr9sQxCLETE9dRFyr2yctkANKrqpiFLZuY7JXtoVZGA427hH6m4eDA2siNqA5HiVogjqhF7H4XJBk2cvTVaLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHwy6Dd4rNEvhARDCYK9a9ZSYnfXAjFw3AjkirzLhZPFrG4BfX7ABGsAFrBZvvPonZf4ZC2spGZduRmsH2Wie7j",
  "key1": "5kfyJfP9wJZNdKGcxpdHnzQzvfcxTWmwcry8JnT5NrQXMQo1aGEbj4uv6nTf4zUtdjJCx4NfPgc1M3DWQ1SraW38",
  "key2": "3vC7m7DeymSQDeZndBHkp4qZoWFGhDUhiVoMuJeGNYJVazfvghPZCKy7iro35LKvChsRA5L6PgJBaGsM4sDk5rzd",
  "key3": "5ZALMtMa1y2by9JYjecjgbZgpftjRNjB1b5bEzsKDnkgsja7PJ6kp1uGc6HpWzsC78dsLSPdfo2mgHvT25HnfG2Y",
  "key4": "3Hie8ppaL24sufpF3RGhdrxVxDALXeZUfXQMkCCxd7XXAa9cazb6GZRvU6GvfnLGxH9RGqos9zfbB6JtSiZUVsoF",
  "key5": "EekzGZbvzihm1a9RJmMsP7wcU2FVqx1AuenveGbCzgVcgd7HztLrMZuZvZJ3fHn1mvo5pVn39gkJ7ZH7oxCx3NC",
  "key6": "36N2f9HeHbXX2e5WjJrF8JMxEybZdhWED3Dffx8Ydg7aP52a8ZutS2aj8cor9zyuTXFek6vtYgpDSZauHSXbaXMa",
  "key7": "3jFanC3GeDqSPZjNxnQtshxhBx735DeEx16Qojd3H3HuHvxqJgX3GbRtHjKjE1XPwk2HjDR1r8jQ4pKmo9tnBnoF",
  "key8": "gJPCm36QvBoWGGYcft726QZC1vgokLAnkvV2LH9g267J9U512jxC6VgFhVM3YBMMcXxGu3t54vUYcrvVkd7F9j5",
  "key9": "4EtXTRd2C8r9RwLMbbBws7Js1aKcrpkUGg8z6ec1KEKesaLSJijtxFxz4G6QMsdGjcEZbKH1oUFFBSg9wyuc2gwr",
  "key10": "56ePMwgjDHor9z9MvxAtZ7Ge73AsfnLf4RiEGCnwvZ34beYLUbQZBxMaiKuWbCNcPYmABM388kNBvqpvpGLLjSKS",
  "key11": "2mx3E1aapgow77jjsYHdxNJbXtR6SXxmZGXruxTPv2YTCgk76pVGohX7EiVgQfQqzmujSdiP7X4UQS4CXn4zx2Km",
  "key12": "4v6TNhHTknMPCZrAH9tXLT73TyteMRjjDK9YGSAFMSmCiFdSWBdRApZaBnC5YSFK6b5q5zq6XeKK9FfixB44riKt",
  "key13": "5zrHcaesUiQnPNrdWktQRk82WXCpXQM9Qo4BDERTQTSvDZAeGMFqKPL1bXBXfYSphkySNFMfEPSQW6hazqYxUxZF",
  "key14": "5LDouiz6uSc9gANhErqKkRRmL4paPovrXRfzztbPB6nQ5jFiNeXiGkpU4n7Nik8L1ygHtYZD1Dre88Dwrz5fstcJ",
  "key15": "2XZL4Z9voQvm6MTZ8RrtParTbYreuWBaiGWv2gKZkNPaMpCUPsKbJqwF1dnDx5ukQTzPsRJUSDKLDkg6kaZfs41m",
  "key16": "55UvhYigMFvEgEZepE5WqkBytBzFgj9MpPkyCWFD8huQ9h1p36XzWnAzaJzKuUGKmAasmiWeFy5yS74MxU2M5jo6",
  "key17": "215y65rENf6cLGBXDjToiHESsbzmHmy7W79pgMADyXX6hwYYZpVAvGeym85MAb4JyMT9tW1V8ti3md468rtJD966",
  "key18": "4MossxixygqyQUzXzJnFp8qCE6e4thpLE4tH8HZnmPs1F5iiSC69HSJqrv5Dg4FB346hYtVTNAmwMDU2P59VeMDw",
  "key19": "2v7CR1Dr8MXpjyLUm94D2DZm5fXDbzWqNpKjuQvWMUM3dAYDkN1XWSPzWwbBkNMCSm89DYEUXP5p7q2EjABbJ4AU",
  "key20": "2t14XSrC3oWVf8CgogHNjBhYVaNipoGumcm6T2Ln5kTkVBb218yiQ92HeVLum1aJPhq7LFqu5zvGVmwpmEgVhFKn",
  "key21": "2HqyFfMbeaD6p5hvWCgWP1ZnWcRzHcmoicaST2JNkbbsr3FgUqb7gCQ9BGkRwtkiRTysYwB9HoYeGu4A4XULjq3j",
  "key22": "2MzfH5w96o9d5xGwLLDN2zXc8yUcqgBKqGv7sQQiujyTK5huQmK7YUcm89ZjWCcqaQ6soQbAJb2m3ABBZFpbBsrX",
  "key23": "55MKHEvJnR7mDBHVCJYcQ1ZkshmsCbBGx2evnfBLCSMy1XSgxcahGpmLpLg46D4AKVydwNVDzJgjoLoiQoBNFCBy",
  "key24": "4StqouZQ3CqqQQwKLdPwYSQGomsnqcYum7wCsmcB73TikVJiLcCup2nKTdPMmL5LGyF32Mukqb79vr5sKTn3ggwp",
  "key25": "3ZMt9XMcFiFPYt8TTapxT2Y4EMhRsjYEfkwzzXiMNJn9bz1qhtNyx6kut2KxeoH9YFjH9QMYSCorSHj6zL5m2HxZ",
  "key26": "sLRfjnabCMYvnmsY8Pf6wkzaiUDvacjtWc57fNFgTVuMRwH3RDUFTbW9uvgtwGjUS2VZxwwhC5MRX3nfAhU5nHa"
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

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
    "3EqZtwdU6pWC19o9KwoPZNfbBm2UBMyFzHjvSd9T4CuWh72kyiCedWUnv7Umgx7PXtxKKGYAdygHEtv3zyJ9EsGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qg6zqGkAb6PFMHmhG8Awq5iQkAdnPpAQyUvnvJAnDhJXXS7bp4yiyhiaFsQmMgeZNodEdrXYP9oLgTsDaX5Nd1M",
  "key1": "4vw9Hiz5PvUL8JNjBEruc3GdR78H3sXwSfwfDgAeWf2u95Cfbrezx4Ry7xRaTPRJGYhHgJTESvSMCXJy3L9VYC4H",
  "key2": "2jWmp5b1TK5YSPAJsHnqWhkFmiGaR3SzxbtaTL177rvttpc6JBG4kQgTVxrs5h8eTHMJZc2MujcKWVN6MB2x9Vr9",
  "key3": "5hyyeXCkoHu41HMdjFYAvNbi9VXsW5mqssYzHxa38opTSPfW2RNwiUcLpAD8rLDmqagsZheP4L3sm76NPsYFdUBz",
  "key4": "2KzwjzqFCpLC1nd6nxWCCcwi4Jn5fgaotendQTYvB33uLh7Kg6U413pEg3jMwsQBPc9zMac8YvuDfvBJtthYvqcv",
  "key5": "3pV65x9p3jPZ3fE1PLK8jjYtr1H28aP9gdDN9GRz1QZgvWXePHiLLQAs6XSXcMV9buyBjdbcrZpLkKivhJELqP1",
  "key6": "3JoU7SgaSzKVV1PLEsGLtCJoFL7X9ayPDQAadyJUPd3wMevwRzvmgYtrVXz8XeGL9A6Kfi39j61yCGJhjyLRXuXz",
  "key7": "NdwU5C6ntauxfDYeh7MCTkWFipQRvjGTbBUHZrWYN57xHQqk8Hont1Y1F32nmeracQJyGtock39GHSZZSVmwZfk",
  "key8": "apkvYijpDBsVkjC115P2FSuLMFanL8AYVyKr1fvQ4G7ZGpj44CVLqAzCtpC3i776exzSzeJjvESA6qL7VvXnTWZ",
  "key9": "3VU4ZNcsRwkAbnWoE689d5v2fsjz4toaasWufXCjtqL6pxXBLNRmW12bqU2Zy6vAzLYxrLYXS2fEZifZpS41EWQo",
  "key10": "2TDRMHe9TvZchnoLaznoExCRivpHfMvmu61JtXpxeT1QVK7VZ8ZqpPchGg69TjRDgg1qyVQB1PbxLTfDpJ8epae1",
  "key11": "5Gax361adBm4AotBtehU4aqxhRUrqJ4af7AgVGzxhhJMRmic3DV65YZ9ArmYBSGPkCRXikTeTEPQK44epRE262yA",
  "key12": "3hq2d7XDiVpjDN2EL1vcEap6RXceLRGr384UJ9HvVBQgbuq7Nw9TnzKjfFNC4G83QGmchDdVhGm6H3q7RYEwgjtf",
  "key13": "5muzfj7gmgNL6m2p9gMRBZDrb9g9rR3CsYyupMwWzZi9sT5cEQV3WEJZLGiRyDxb62RsSBTM7WqjSUMzmamff2Yy",
  "key14": "3iUb2EQtWozNWGyuw7UKAVAYpkeYUm48cqHeUwBaWi1G82u28ESLDPoFqKMMmCi9RGRTjxbArqLMvBibwe6zyyxJ",
  "key15": "4a2qYBXj8M3fY6aeEg2tbfQbZUfk5hkLbdfokLYAGRZdPLS9VuTDK3r2XdWTu5jF7XxFqPmWj7kLdvkdJUjtngvj",
  "key16": "4gSZ4NbDLq4Wrb2B2KWAZBGF3GpgKhQrH14TYEvtHJd3TfEZ7VkXrF1nD373XnrCMf2fAnCoELaBE5zbXRRnwHff",
  "key17": "9yYavx61z3vNSaZghYAdmWMFvWtN8FziCenBG5JN5axeLE4FZHVVyfHDrth2p2E63PJp5q3G9M2Dmtyi82R1dKN",
  "key18": "63meoqkotoW7M8o24h6wzVFiPByTWG4nfiXYJqhXG4Xh2AGoBmRMQxSkgVm2jmKYhiHc5ktmP5mDiLNiqsLMUdDC",
  "key19": "hmkeUqKFghjwa7gCWcY3xN7qX2hctDwpibFRdgLcQNXSz36AgMgYzrSbKbTqdaWLsYQUHjsps8KgPrU5X8cGRQG",
  "key20": "5SHJvcfMCw3wS4FV6zQEPx9a1g7T7MounZCLvzWFrCUHhr91WbuPNUjQMrVHVyUzRkbTipn8kjb2zKfDj7ovxTGz",
  "key21": "4Prvx4CL1sZ7b8gjtJ7jZa23TA9wMoycxjW8QCUNLhCZCdeb8YPk9MDFpxskGzow3y9p1JSjf4VCZ5FjEVr1G122",
  "key22": "2LWV4sYjJH2uQsvWAboTP1FHVyYpJwnTqz28abA96qHJmAgsGvVf5QszKhJx2EWKWWSxpXDq72bTZu7UpTwUPAC2",
  "key23": "2DzEj3t9aW5MwrBHPzZiJY4fy3uW3RQi4UrLyPdg84LPeE6UVkMJhNcsEoZTvmgzzjCtoLmsjWWF7rKHNrWQENBh",
  "key24": "5PrqQNJxPRRctbyKuhydb7LbZ8NzhqdzmNMdSB1A1asLkM6C2kPBvGtKYRT7WTr5WXcB6bJADA4LrmZxjQ3wmDhD",
  "key25": "5Dqu6kETQSmoA6PpRqEj8zw4NsMsoJ4oj7saNNXiziiJKfbvGT4Yuo9x5pBiogNPVpWfJ98tLGPXpKZ6v7rHHDp8"
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

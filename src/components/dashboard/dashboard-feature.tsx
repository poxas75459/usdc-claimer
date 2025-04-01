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
    "5MB5pLrqaH23FBmJ5d2dGYMV7uk8w4c8nL5yKjQQhkEMCxAnvwqGwvHiXvenvgqUHBu3eBTfafGqeaiXyGE5jS5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7XVmnGkwQgzbqw4s8r9ewncG8K92YoNjVPjRagpcTdjb7pKnPdrS7jnK6k1ahFUfdjknoW7suPGnXoACc9xKU4",
  "key1": "62xSLK6JNrS7uPqMNuHLrS71BPkSDB4EQEsJybCo39kWQZebDTHBGHsmiCKdYEtxD6t8A3i6Y1987Yp15SzE3D6L",
  "key2": "mTmEQe1Q1VXRWa4Z78L8EhwXr2aZc29KacS36HSffDJXPYiKQuvdJqs82QYBwpTcR9zMV6gHuZoT44T3oMDThr7",
  "key3": "5CULg3D7QrDGK5jSZyfsCH2TT8MadTn5a3q3BsfxEevjeFYpBKrx3UHRmfyZYMKnq4CYAyGn6MPf5ZACyixeAsaX",
  "key4": "4f7sTe4LwSNk6hrDEJavVZUXEERsdoctTQVetYfU1YEMX2e1D6gqRz3FA3cJJBnvWWMAvQEjBnFbLL1WgiJkYd2R",
  "key5": "49C7zidrY5Auws6Rhb9PpjLQw5fk8ftZBzzwuiVZ6C9Jd9PSX2LTAwMghhu7TBVpMj8SvLGdUK2RYoeFkGpNiNVa",
  "key6": "3vMAWDioAYL7bkJ28kaJJAgHcMYvHVuxXJFJhtwmNR9UJK7XR1ZAWkVmFvXedYBda9czdEFG7RmXYqDjcfcS1kwb",
  "key7": "xrWHPQSmC66pHHGe1uhz9wSwx57PwffxSA3advy3VTNb9nH3DV2KygPb6KYCbYLeS8XUV1gnaY2UgDEuDDf2kVK",
  "key8": "dAZJr1MEkLQmvvQmAweT6Ci5riBKiiTnX3Xdux1ytCPnMLBb1N7kEeE2DmUP3rkCL4WwBAySygYgwmkRw3tv6Xb",
  "key9": "4ZZ78DDusc4SVtoX8ZzDKDPv4HTSvbmcNGQW3Qrnx2QVQMX4gM7YgTJgRR6HZtuMKFYFaebHkTW7fW8vTU4dxtr2",
  "key10": "sgbzMJKkUotn6LXe85EbwxeXSRUMEz5TWWF5NUmDPgDUy6trt29BWVBQzeg4spinCpQrpXVHxfTog4EKAQxSMj4",
  "key11": "29q11bT3tVLCpM7noCe1nSZecWgQWhc6ZCtZbXa6x7kBWVbdSLsWGGM4GNLgxFireGfzfvaDgUznZA2cqPdBJDhT",
  "key12": "2YGMQYDs9KsziaB7fRytzsqyU2ytB1zzDcQhRu2eaLvK2YaPKgnBi3xb6221ELhbnihtLriu3anSDzNmTirywQ2h",
  "key13": "5ZWxytoLyve15AQhBYBu3Cm7fY2TY4ps9wfmtVfL4mATDMDSy6zic5YCUc6aAFLT95GqqiyScdtkTKSJzr5FWarK",
  "key14": "bWVMSmXZsrvv18H6qenW6wQEr8ZDpN97zMQ5cC7KjegrpZdPBL1avHsHLJFxkycTc51CQzxZoLzM9XxGTGutumW",
  "key15": "4dHFyjWBrHgkpJ9MHwy1a673gKAYQKuUHmuGiMmN6h2kW1a1Wf4astcYBGxYNjH9HKuBefRLaboaLkveK5RFpzXL",
  "key16": "4DmZYzQKXS4zBKNXnPAnTL6cKenaWXXieoSxc28eEvR1JWruv2ncFXx9N1vQrwCmaEDMuF3L93gPssCoPDp5iADV",
  "key17": "2HUPpAr6PVGYNZjxjD5xAPsCWUt5nyEGnoncDzeRNadpTUqzbu64PAL1MzWDHt86wYhquDywSfY3EgkqvKpoPCTG",
  "key18": "3rFDwEvkqHd6AQta3Y8iZFAPeXgcHqDzZcgx9Bk2zEeKvLej5CvTxB4PnnfGdLppMcfikLhgp6aKKNhzGhKTojYw",
  "key19": "5ePSer4Eu95SiVZ4Zf3ikfgf87DjAq9MfjdcKDoQFhZb8QsiVjRVPbbDobwZ6R58uvYsK8A1cdDjbEqgHJw5EvrA",
  "key20": "4dKeoUQKaXaPmbs26F2JXPgVqYf9nGNXEycsWSZRGryNXfq8eGUt8JbPMgFt6DL95KUsUHeZgEuPFDZ2NbDnssKs",
  "key21": "2BphqzjQRwd5QA8bAVXCEeD3zNV3YSQwEYcqjLhk6RA2XgpRCMVfJhQMda5czkC8AXtChGamdkt5gM5w6mEcFuL5",
  "key22": "3qw4hr1jZjEGx6qxYh5CaHdVTtJNBEDfQ1kY1765aaRTUd27dzu9WELGdp2mGvFuojPnEQLtagnHpT9SprF1LSm7",
  "key23": "66QE7GsPG8PSoYFZfZiPpqfUXSYZgNqjwixSFYz3Z8f81LufXwDdtkzskG2t6K2wZeXTiKhQV4a2KqKFENqRZaaA",
  "key24": "exVpSHgkmsLhyyawK8hCHkVQNBq5EHifjGJ2f9Cpq45M47UzzPwz1cxuXFbYAa9qB82EAC2P9y4XqxCZnANuQi1",
  "key25": "4DNVHvjmdabJqFVPs1dFCrVoE6NTwwi4o5jgbXDaZD9xqdK1Yx4ToQkGgLYyux9sDsRuJV3TdUEiN7x2ubBeMRzB",
  "key26": "2Vsu7oGmwGZ3fGpCG7RUdv3LitMSmiFXhea9hQ6r58pqwpoZxvdptKPpLz3xt1aEcikuCHeiXUob8fg676CKmQw4",
  "key27": "2mEpqARZ2j7ggdRgGGS4oRyxRaUUXNRKtPkQuFotKxxrQKqPmMDARx2Y1VZQhshJXNVRKmVZd1EMK2EVQqGcpUde",
  "key28": "42YYEuEVwDZzDtWDCq233mY44bnANbhjouVKKjBoCWLhE9WUX5B4cEXtwpiZjuZzM8GDdQAA7JDYaybFDDP2GC3i",
  "key29": "35orCNGqcVfkrJUA9dtfGa49TuGBr6fTr6N6ToaE8vEwjL52W2zH66nbJ1wLD2dKSw22PvSBuCzuyAW9iPjEM22k",
  "key30": "5zsHb3aHuv5q97cYjr5j5g6PpWYrZwpKcbrV6wi2t1gP3dSq74MeMv1fKVWCZq4eAjR1NKhoZLFLjrwpsYbK9ZDX",
  "key31": "4KWfUvWuE3oxo7yQGqik9QZ147AvDYK4G98QmBFDkqp9XBLvBMusPC8T3cEj8ATjPCFDjuSFnQoECQweFZCoMYCr"
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

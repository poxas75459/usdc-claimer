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
    "55qNWZUT6kiuf7MYJSLRwhzJikxHa6MjVCvST1NCRVtuc3zXV8stCMcptXhs1V3M7G2jMCCjiWuEgkfHNdVZbHhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uxFNRu6qpcMejWE6zvvKHmxUF82ffsgPNf7FcBm3cJwyW2yNGM49YvMiMeD5wrSNLdUapme4tUKGjSwQHnQd8c",
  "key1": "4UBy57EEGah5FUSHp19x3sBDWUArNHV7TtJ1uS5dvuTEKovGiZZS627mjHCMNFJXNM3u4ZjX8yhR482JQSYcTyE6",
  "key2": "61c9puRMcPDjN4heRnjomsEnptQnYwHG7crXpzRoTHMxyxx6TTj7DiENns93vCiwmhBF1LRZw8KL4DZeiFw9Z9cb",
  "key3": "5qKrJEz4erXpamrTuNQo5FYp6Jqd5c6XccutgmP4HsWEscLnhV6EZyBaZdBvbtFzD1qEPdnuTBtM3zrag6G8y2n1",
  "key4": "JDrQjvddhQJN1svhvmRNesFq9vPH5qRewnZsvtY5nNv45GJWWUw8rq8whMyM84FsuB8RzpJSCkj6yTpr6ykJp1U",
  "key5": "3Ruw4XVkXPfnrBtLzi6SdbkCsbZspMoW93CSqsYS5D5kGNacqLZTEVTB2LHyHdDBoobHEtbT2LUZxH2XDasBS4a",
  "key6": "2YYetyEjb75u9uvQD1zuWbMsQZWQAtaKTaVW3xeqSUDBGZTSh2X7i5o8rvfkD8hes1suGbpE6RL28W3H2JBchVXF",
  "key7": "4i3KkhH3ijrHgptkeNwbysdyUd756bnZZo9SPDR5V2ZpQz7r7CVWuDnf4FX7RUqQFzhF31kz8FMarqeYbL2EZsyo",
  "key8": "547cxMG9fVQD1fR4itUwHEqSVFY7VVu9VhNW6RCQoQPw7PBooeKY5xbKDnUrEgdg3i9NDrjiTxnqx9URDo56M2DB",
  "key9": "wxLWptpf61au9SdVoXc4w8JgB6nEdSGPuq1xgZtivboiwHvp1nGLZybcPnTZrQDcqr2wdmgakkqTSzMX6xiWg7d",
  "key10": "5Dco2XddTPQXFtrT49saNFBqUZRYhEjAChWe3gSwSBZPMsQKsGXCXxHXXBACVBS8AS2DicnpKWaYLBQuQvBMZURA",
  "key11": "6y4KUCgx5FKGuJxmuEdU8f89ptmyMjT6bMEcv96HqHEV6DWAarLmStUyKGDQEdixFmTquX6MR6roYJZeDzRXG5x",
  "key12": "3Ek6G7gJFqMLnKpcmey5GTN9xt2bHkkdm7kCNmWd14rgbRBt9DEtw4ViVWxFqLjik2SDk9pw5SnSpGCKFjt4Q6CW",
  "key13": "3ZCscALbkcgJur225GYPRKsk8nWUtBo7NwxcByR1k7AZGboTgJoB4BzYQMx7u1f3BHFF8ueX9NcngMaWk7RRxxA6",
  "key14": "5p3QALqnkzyHctHWEtmeAjfYDPvMgdUh4o6Z3mQhXxSrBqGLQzdm2JjWYouKLdX439u1NqFDqp5s6bdz5Nu6XZGS",
  "key15": "5nt6TdsQFNKpLjwRFGhjQ7bgRbXXgftzptR8bUq4fM7RDNMAjjMnzPjtFSDi6ZmY3YSUwXFrk5R6pZeRDcVvuvXk",
  "key16": "5G7sbidQJG2YP7VkxUHrEjmCmX1oWsJX9wjGDHb2NH5hnSVBXsxb2j9gJ3RHjqDKCbPRkS2WgNW5pauxSWYHD6Aw",
  "key17": "qJgadfZ6jR7yFvpMY8fJkAdEYcX4nBHcbjkTHkiFXThr3dDHKjxtJXuDi4AVfgGQBUjxRmocm3HBj732konP9r9",
  "key18": "3Mm1EsD4S55mT8XU4Zx9oGqVJsu4cvu5usXz4jqZRp1QArBd7oZgmMkZ8dqgS9wDtfTQ8wUyDpQ729SSDK8agFWT",
  "key19": "4tfqY7yw1NkQ8tHwRFfQQRgjHqQNovu9j9TwvhXUmvETN6Yzoo8CW3d7f1AMFdzJ4TERUTfivB9KVLD13cJjnaNg",
  "key20": "MMatCx6Q8TUDQojbndpYjvw9FDzWYuYor9dXY43Tz2EHafRosTJn46bfw6Bww5pE5dLVAmM6rXinbH9cT3HqfDP",
  "key21": "2zsYz5CQ9bo7nr6DaRE4XS4JXRRSaru4cX1Nz8kV2SaGJcNC8SFh5hwjQ9AzJVhupp7vwA9p4GvBSeKVRzCfXv8C",
  "key22": "4vLyhjrRkCJdUsaRrZUgsym9Gv7wD43NQvh9uBoUKW3FMq9oj1PzL3kFvwrYQGG1uTfBGEG7982Hu1JQFzxS2oWR",
  "key23": "49wyFNAyakwipEHzdyDzzpK1iRefwEKEnyEAiX2Zv6Gy2YAc4TWriBqGccb51NzjoJCN2XydDEGU3iKoyhXYhXmT",
  "key24": "5dohh3UUVD6WGPJPgG4tqVMuqFzHLE23h9YozGpCs3kRBUSxXMHjWZKfRQ6RLef6fj9U1tqf2TSfsxvnEHhkLWtK",
  "key25": "34PQhX2Qn3aiyprXviANcmi357niP2PcQg7zUFfeQQXmTE2uiCXZiyCTnpqdFLRmfHyHDbsiSqEQR4vko7jRqqbC",
  "key26": "1DUnSnGrn211Y4MHDJuZds7jgcmsdzdrbwrVy45R4k59iSSMyJuQCWhVEDfqKHu4dwEZDzd1d6qF39qdm7XKe26",
  "key27": "3iLUzB36QdazfyTD64gSEvSANVrX8JoJvNssRKCNjxTQiMLtGvndREAaomFE3dPdVK6JCfC2bLTxNN2E1NCEJgK9",
  "key28": "4oBCThin977gCVgYWHCPD9YPGWsYXMN1dkXqiqYztRxjfEefVKPMmxYt9bJiBQDqj4rCCrTXccHoutQe6ToPncDF",
  "key29": "5gRpxJEXKjyiZiDo3KZzmRutf99B8sAigQMBqddYrrNdRPZWXhhua5Koyiwf2nURmYUFBzA6mYyH3dezYSjsMxNE"
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

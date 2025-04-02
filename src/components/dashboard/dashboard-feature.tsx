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
    "2Wd8roKuywLLPSUBgN7CQ1uFRNAHMgZ9KWBTyPWFjreq3LQSNfdHu4HApEwArA96DdzLFG6zPbDripvdZeT4hdaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVUkRCXS2sYz3xH6oXywSfDKTNzib2Sf1JZtvnSwP52TPfRNZARfDrtoz5HvdPsR6MjF6vVykCXEWeXfysTATv1",
  "key1": "YxiHBBVxKDSWfTn3aakbcjw6ufmB2TszfvE77ioYWPDcbYun6pf5rSwMkgz3YZCUquMXPCZqhHViKGNVRxXkNHy",
  "key2": "jkQJrPDuRQRup2hczJxAXG4FxkcjsojnuucsQsQY7GbXYawRVkEtRBa3uhRTNX7bLvjfH6M5WpnrckBv3VYKXFS",
  "key3": "5PFUhyb9gDXWyzJ8R7sEb1smGUvg6JMKUjJyx5ffZ4NXNUFTvhD3KMd5g33Vuec9AbuXAfUP6ZifAGEAgZVmBWJ",
  "key4": "21dhGuD7kdYFYpxFZ3VL2cVdC5aa2ENmEWHr2nE22uybYScHavCY7UCpUHz9gewbUuFiCkMVkyuN7unm9guMCPTm",
  "key5": "4uRJnXwcQXGnSDgvmYHo6P9jYLDRpZzrWoz7Zg7xFxuiamF5mkJaTXGyG1BfU5eH3Zvd47nvwhQqE8kRct7232Xc",
  "key6": "48cZCR5Go1hdGvRt8rw6Ww8DZ97W7LkcjE4PGAY65JguUWbgKKcchcQmN1rSoDDaTrgUqzoo3biWAcVng3mRXTgY",
  "key7": "wZXf3eXSZ3bqXDvR7hR9QBPj8HQDyYU6tABareZ87MfHnBmQ5ZfsLE7pGN4gxxESuu8Tqz4mycqFkqAcnpVCj5R",
  "key8": "iwMKVGRYvLGoWwFRj6pPCNR5H1TTuP4BWuKaxhfU9KY9k4FfoCzdsFsTrL9XKDg8ro1VKmaLyrGZXvUTki8HceJ",
  "key9": "4qJdYindknQraug2iZqn2TxbcibppQEGunSwdvySeFTSwStKYysqmwS6phdVAC4sLw82EA6LdeeFs6HozThJYLaU",
  "key10": "3K7KXus7ARbefDYEQcFnHZ7RwReNAPLP2izszPKzd1QmefQy75cWYTSpM67q4ExXJpgjRc5pGAjP7tHwbmHWV9Qj",
  "key11": "4enMcsvADiz6PJZ2VjSfKkaigHptYpV2yBxWTuJe1a4cGaxieNqJ1Lcr94SSn3a34C4RVA52MqYNPTcgVw38ieoZ",
  "key12": "42FXqAF3H69M9Ygcb6wWmMonEaGSSwbGY8nV3ui1iTMibMrWt2UDVRgW5CricX2LqCgHjtsEF6JBcgcJ1Trdb4at",
  "key13": "4PKbM9y2FuJRYa3spTyPg4fBLT926nKYa1PnYm5AQLUPUs7F8BFiSg2XEfMDBStGgF5nXeWKdyjqwZWDxEE7FSUf",
  "key14": "gqk1p4vxX6NKbtz3wkUHKGNFi65LobTuWnnd2TUCB6SJcwbi3vZiRf8FxXQq7BV2DL6zSqoqhNNVXL5rUkGUmC8",
  "key15": "2ty75RnmRzGcVbNGgw5Tyqqc5JUfQrJz1QkS13CFvDvQqate5ChwxPij3GaifsEJDRWV5Mi9a78vRWQKnDDGzXBR",
  "key16": "3LYNcG5vp7WzYUzc12Az54SGEnSoTgvSFduGiCJbq7NySjQgX6h72VW941XQixBPFnBhFuMkC1GS57HV38ynf5nB",
  "key17": "2U6sHHuu7sRPUiyrQ7hEwQGRss8AjPDd5UxbqvHV1owXEhe4pWRTE9cEWSM4jbvp3QhKUNU1KqEn9nM3hncnxNYh",
  "key18": "2RRgXKJSZpzrPANfZGCmErtMGnsP7DTwYNyXkAPH5jMSGF7dP4CQzqENY7sNxvPTkHD1aYyEgX2gyLFAs9PPNCrs",
  "key19": "5WTqKq75jmM2Km8HF6sR848t4RY22LgDzcsN2kQcEEdWf3G1boiQq94dXzJKTvFuBochaa7uvsDXaxxwGDjHescN",
  "key20": "3waNvB3X6B6yzcRqzeE24opFsCNEcC37CPugEh5tGwtCXhyg3CqfCZFPqztxkRSfZFPP2xWxkWoMRvBJpvhAAdgi",
  "key21": "4fVi7we9JZo179M1MMAugBYbS7Tc5NX7r8qLLw5DpRBd6fC6crwbfqdPEaFTzAWbmfLafjzPT5BxKnMCZYWXA2Zs",
  "key22": "4gYMS4dXpD2TAvdQiSxY21KmV7EiT6w6AZmijsRuCXnEtQYqjkenn2P71dSGD4tNsKv9ef7nb7ZRN6eC38CoAS7y",
  "key23": "35yKHFzGefXe5FEC2TEbePxHykfnKBU6c2mirYXw7LWDacMuCQsyhSPmabbocVnrUD5BcU977bqMUH23q4w3Ch38",
  "key24": "3JTytvfuNync3BM8dhckbJmVHUEk2cm8MT9nnoDsChYnufaesUwUS8zBaqx2EKJzVDMULpF7nCDDdnxWPXFG7tZV"
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

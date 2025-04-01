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
    "2M3vww3SaENZwMY14tMaBWaNeTBPKSeUWvuxscBWhkuapSJkrqYFHYC1XkD7qYRisNuy6CdHTqzHVcxSdA5Zg8SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k68PxpEpo5EndaZatHkcfV8tpRymnHwhWxm4XrhV92zRkNw1genXcYnUhVWKxTqykJozn9QeNirehU2PqBnwqqs",
  "key1": "3oMapG6TH6bMxMjE3eiykZzk8cRR6tQeZXvz8Tno4nqy5NehA7mdfw8k1HDU5MmQG44R5jWbC9u2suSGFabdhZt6",
  "key2": "4cAf3kgY45a5uKzMT22i93bj8MK25wwJHZysHwWp6JpQMK8Usb8yCj9KN6rM8v88ZczS71FV9PEwKsUYuQmiyCGS",
  "key3": "5kgE7GzTWKNp6mHP3hSG4pZmp1AxuNHRmDwZVpTzYujTHKGHFcbbBcX8z2dXu7P8dVxVjRhaoiu5mrKxQxzWc8G4",
  "key4": "539brj8BoxFgwZEGg1rJub2VhuEQdCeuN8K9ttGoWEUsbjKZi4aLp72rVdDbjdVZTtQxeGhcZyKU9XkBFDQF9RX9",
  "key5": "61K59yBNpVenMX5vJ6ms9HYWJEZQzTgpH1WrAxYQeA83BVNsYqaX9RG3bP6dJT2YKBXrSkuMyrW5iwxsWH9ZvNgX",
  "key6": "3ZjRkdWxLTLc4KLavGYiGCWtcu54RtxM6xq9AJ5U2Yu6tECKhMVFfeJhHwB27MbGkbezHBZkLX4todHP7gkjek7o",
  "key7": "3FNJ9NtuYNw2dN9fdckEJCyAxcXwEfZPKcLWBsgWaZm6NooCE5596Ma8dqxneKEH8gsUW7wVVRy1FLZZ8qqvoJWf",
  "key8": "bTEQsPMYuQgBNG1dTzerVk1Vbn3bgCkdxdjpebrSctyz1c51RCchTWNGvpBvd91eDghHzo3bUofdfadhvavcN9C",
  "key9": "2W8r98jNqkfq1zBJQbEec3vyEyftJAM4qKVQqvMxTw45cvLfqGNWfrYLWXgoo3sCF1EFbxaCnN2y5CNFjGtJAexd",
  "key10": "3p51UxY6bFACWnnSHZay4EghdS1w66SdjFjjSRpFefDFpbGmwmdeEezvEBzf5F4m7V7iqCR5j4pxEiAsx8K11z8P",
  "key11": "3KGuyuKyqQixnSCEu6yisHa2zotXJr8oNPi6ojy47wASv6tM11Uy1Y2vV8crXCcLZHctqBkedanYY2GbW1tvPXEn",
  "key12": "jvK9EPNTbDRi2kTthBnCJLdLhVcWwWfmHWyr9ZWqbsg1VxEKWJgXBussqoUGZzM7NMreHYhdBwJN3QQbMYqSzur",
  "key13": "5s1z3MFfS5Ag8MxWkvU38ezqqxz9jVZXACWo12W2uenZJ5cZR2bxUzyVmJZgaJSY9bxtpnV7C2BvG5uMKZSmuxbw",
  "key14": "54q4V2oJJsojL8PRkqsawHmVz2aZWzF7bQMDsXs1fEgYYCXGNertN2f6ipPUFfrFf4KqphA7EfsWYc1TCgWWCbTY",
  "key15": "57zAN3cg6oZe2y89Mn12cjaqF9m6tcf2ny8B3Dvg8gnFMJeEFdmDbB7SCwvZeWmRuAAEJxAHnzRUGCoLr4nDqS3p",
  "key16": "41QPv4SPDu1DgF8HUTnATc5eus4Y9pJFiWjMvjMZR5cS3Nxej93WVBombmt9JJrNMhwT6XSD29wu4tMXZ6UtVTWs",
  "key17": "2AbJAv1WJEsG6ASbweuoVBUjU1NJhA2pVAinNMp6wyYBrBdKotLBprprmUASXFc1v49MiCvCWP97N8pmDptexmsv",
  "key18": "5Qif1dycKTzvp11QypBZbKnvbd1M1W2WECGKDaSwjRGTtfqBHmLprESe1DXpMNi2DG5rECZ54HsxLQu9EE7TYuWS",
  "key19": "3dF22WVzfofvymckvnz5x2imtynTcPp1eBCXPEzYoTLZxsRxnVkqAQGZLcFxpDV9CvNQ3sa22KGtpgbwUoiJPUvQ",
  "key20": "4Wyuxipnxq6UYQsfvXrf5uwtiPSxZbKXX79US2e9WhzEY5mHZwGE1bdLH8bJNzgpEG6wXx1ZYUHDKtwfPZCjpHSs",
  "key21": "26HubLhxQzYGr2WkmbJpHPwjh4ZDfNWC3r1NegxyhQL9AGpEbPY8eEFKkeJGv3xJR9aaXJtJxgRNffkuRPQArMAd",
  "key22": "4DSaLxbCWCRG9g13bgsvMfccqNnaTsqFbm5uj6zsvC5jHCJ9rFfUvfzohhfWkZk5JLJBce8JMfVXpdVPhbW3RR8a",
  "key23": "5EmrVbmofG5ojhUCk7Ef8Y1FotwCfCHfVxQFoXxU3TR3W2aMMLBHawGnezjU3ndk1ke2Hb2kVa4dgmmGpqFDPDmE",
  "key24": "2o8FVJGYHa7Ft1xi2teQA7uYxkyfZch7ns5PWLnJPnySPb7B8btaCqfqocdmgBCyceXAuyAzV2Wz7kn1v6NTamx8",
  "key25": "zD2VK3MGUjqHG3RkdxNpzQhUDNGzVym4mmKFnAjh4hrwKrQKrT9L7ZFFs81soWtSQ5HpdBooCSRNSznyS6nQx3H",
  "key26": "3wdfyHmejKXFDcqkUKr6CSBhuGqpkumcRNHqHcfUwbU1YE5WTaTNrCwb7p7fYmAmNoRK624QTz1gL1HNRV7eeKiA",
  "key27": "47Qra3FKpy92nR5Mx3Kot3rjrdz2sWxDzjjEqB1PJr4kDtspCdX3iXQXMbdF5McD4SMEEUfUEmwKn1qgYurZBk32",
  "key28": "3iXxtSJq8bCjAXP7sFRtYvdDhUgZidbPv7xcZuynqLvfxmLBwLafVv65ZK7NJZHrxikqBc4pEjeXZEhWZeoEWHvU",
  "key29": "T9b9CEDUkHnSW887eypyXPKwpdVK5TXKLH4kpUuVtfEs2mR7r281deYat4aUW6E9vbaEY8aonAoJ8afQwRc1yXw",
  "key30": "4hTgD3pSgwy4nASvXV1hDyEmxnBPWrYLC2KjRYQz3s9rUXc2kY8MEaD157MV1z1J3Xq6p2FZ8yBtzTCnfRcBFUA9",
  "key31": "U7JSXWVSJSKYZRYTQJRhKnJK7zdzvVJ3iUbm697WzwyCo4pUfqr2R92H93XbHPVPFZ1RNSJtbVadVZnGusfT6bD",
  "key32": "2JGEGj3CyZeLhiTYgWTfd2SADq6onDEaRSoraL3t78jeDehYDPMyMkJSKfcZdkSPZxBJVNgcAzVQTZJLCPV8XKT6",
  "key33": "2Dy2wMAkv191Vs97iGVCHBq6BwZsB4cZiTPHtiW4PyjhrjGRx1dChFVR2m8xCn52x3tdBNgR4GCbBF3heSrwa3Tw",
  "key34": "5GeodfhuSM5fT73EnXc8VhLAsHr42zj2xLtn4ws5ZYALY5wXpLgZTcF5M8GFb2L9j6KV1XTdk45s9GqDJLvVHKN",
  "key35": "379hd7tWxAMScQ9DoGnp7icv57wHPde4ojvGUnm1yTq2oduxoVbtjTzfQ2aUPjkskUKfLpK6EKZZE8R3uRzt8bCS",
  "key36": "2i98JS2hH6ftPWJMfAaTQ7dvNGP2aEB7ZEPYR94z5Ut7q7aFPmhyBEEEZwvbcCphRyTnURmxTLEJXu55AkNnGnrY"
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

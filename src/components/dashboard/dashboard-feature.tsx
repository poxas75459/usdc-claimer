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
    "Aa8vNRmeaUnv5DSjQ5VeeAJXW1AbqLq4QKYyxGbmRnxJm9mtEqBXYEDdUj28xX7VJNTMLcLBoJJrTc7ANtETMcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aG8up8swSGYMimme7kU2cbyqbfDekxUW3PbyCSyoXTM2vbL7iEyBMsRteithwnJERh7VRoGKojNCZW1g6Utmhzb",
  "key1": "bTmbr7g4QhQS9b4sRfrMgrBC7p4AfiDs23i99dHNxu8mWQeRJwiFDm9RvdC1RwWK8EXR51Figu2L7fQ31LQgsL5",
  "key2": "3sSNJuka88gyagE9vw9ihSPtUtMf84EbTmnkWogsqxgZ9rf1tzdPMWZ7D8o3z719ByV8wZGpBnppqoo2PY8UqQEe",
  "key3": "2XhYagE9sJ4pK74RwXSHeVUAQc1zTSv9jPhrnin8zpSece1omHYkPPY1T5y24qkTyR7zjMCQSDZS2KvvgyyB9TF7",
  "key4": "59juyQ56nEK274k4NqZ5gKM2WMB9c31u5ghRoTBcsQoYJjYf78DVS4vm4ZvJuj1YCZ2z3Ztu3WB5g8VdoWUxgcS6",
  "key5": "5duz8vdtopMdtbxk9Gtm9JZBNB8yig4A9kmF7T11TbmeQbcqXukeyt6CWWBnKvDZuhFDqNhqSWMbxBCkjcH7L6NE",
  "key6": "4V24pwt6RCW1Ez6KkHuNgX7wo4aWnf383vRCF5mE6G2FBoPWSbmBJGsCtapTKoEi66VZuyuXqLNDcjfRjBXHb3ar",
  "key7": "5heEBCbPbUjACB8r8Y9QeDbP33MXnffAE8rAaiLyeqFQj8uu8iwbgbzF2m8BALBaBpituHLnG6LxDQZqh8xwnPLJ",
  "key8": "jG2VQULdsUsXzttyBRmLRNMAVkVzF7Au5oxCBTQEkAA4mz7z3KGNceU3Y2UWpQjBDDYtCfoRS2RJU9JgkDmettq",
  "key9": "3xYQUJ1L4FjrRaPLcuNmU49ptLTsfqjTP1q9PstHkY1q6XpyHuHc9FeiqnDVvAAhatc8dBzk3M3z53F9qSAY3fuq",
  "key10": "bXcxUhMjJsMVj2UwW1drYe7iXrNF6kmwywPtWyw2jsUyvxUjrj5vCcWETeMRtFYCq6i4YuQkuF4fbBdymiGMFdY",
  "key11": "YSqsX9PQL2jNE6XBVXg921hucJkfZtzUAEsGUn4Jg7H2bezXCgwyavEerU1YyqKsBHnyra6bTwHccQvzi8ndMCc",
  "key12": "2SdjmqgTGk9QXJo1zAPcto9qUAfrFAabU4mWABcpLYK6vyFUuGTuQ7jkkRdbA27DEiP5jnFz79sKmCb4DqPPZxZA",
  "key13": "2fAZpxpcdpqvQVyeTriaAkjyBJWVGTJQEVhDyuimSaSJ9m2RgEiZQetKeSvytZPNmKNeb3t5SyZtRmA2UyTFTRJk",
  "key14": "2tfRdPm6EZkSjjRDusah6Ced7ks9U1CM8nKUf1LS2qDpDpFAeC6DL9toSiydgQoZw6AfEMyrG5dWjF6maPUFFv2o",
  "key15": "58qwjcmBEeTfs1xsorf5tqLtuTaTT1kRDXNTCC5tHv4CqexL2ywEFUxA1Vs1QsmREw1Ky919t5cNsD5MphqQoCAM",
  "key16": "4unrH4495S7A5P7NXpvjFUhR5bp332wTR9JihWdH4EBvNALLsyN7z235AhHXX6B8ZwySij3S34jabzfKhapX4KFa",
  "key17": "5WhGgA9YYmaqWPTZdHcPzCZ8mhY2iHnYSR5m8UEf64pZZTn7d9SAJryxKtCS2aoRWgzEkhsRMY4N66W3g3c4HrCP",
  "key18": "43e35nNkwqChVMGEGuPqBxNTSNy22hMaXPmWLbEyHfBm6qhKCR9BgLM5NZHsdktUW5DYHJAiv1rhQ8gcQCYSv51o",
  "key19": "49ZQUxmcgJ9Wpy7CTZsKqHwJ9L7Esd5hJganBoA2jbvv9M2QTzW7N5iMCBwnf8ic4v5RqU5ebXLfr62M2kXfXkd2",
  "key20": "ZhJSgwqU4XeZKFHY8kCqXXBq6EetYYnzES9RgKMUPp2BrZFDcLecSKYJWfbkeXgu9PibvssLcEyk9TafWzSgGuw",
  "key21": "2cQoCgqWRo5YoSBvkBNkZPbhQYGjfW2bXmNQPMaBDQwF53J6LhWi8GzKuRE3NQAbbcafDheTRs2UmuVqTSvXGij2",
  "key22": "3AK5LW5Tok48GnNgMzfomjHbQy9ohQtcwK83rwa5qwgSJm5ipuFyv3w9ZtaTYv5c2XSudy77jAAJWZcPJrS81v8o",
  "key23": "5HRLPhNXxajSsHunouhDf8HyNzmujc594LVDwzNT91a6NuA2BwRjTnGTEoAe6oqhdzGfEqHaFRxuvQniV6mCtrMC",
  "key24": "nufD2ePAmdWy6BrKhgr8QZEgC8FRC27E421f6aJaWyD9ZQup5LUULMuzMXLquXRGgWeyqh9GyrqdKJth3JHSvsB",
  "key25": "sJ2F1fvejeCn3fUud1X6qnZcA2Z1dM8AdVXQ8ckxVXceZ9riXLhCEJgpXqWGpybjx1newuiJU5soFsh9ueJxCCe",
  "key26": "4CtTRodCc22XkB2gB7qAHZnFzkxuAwpf8Y5bLtfqLCHMNwPQoEwy82NXQiwvPdzUurKD44mqso69i1tLLYjz5f2e",
  "key27": "ViPjQ2YdPTZuXJfTmpNPWmKANk6uufpL99oDSLSHKkDUYqDRMEpXLfbgmqmS1b7NSYWC9gFA7Dfy2r4qX3bbN34",
  "key28": "5KSNLPQSfpQuH3BL2b37hRE7MhpnGvfiC3WWJbiSBTe2FjbZLzaCwYDXKSMZjVeZnbgWhFphgYtiyhaY2Cf3PAo2",
  "key29": "4m9GdaXWLw2njYFcPCmdjoVoqrRTNY7B4t26Khv1RHSYhW6fnzoEMvgKhyRAJSUr2Af7hA72BZMX311izRd6sCng",
  "key30": "ttbDCXf5GNGedUrgUCLJVNmFv436d9AGjXpEddaW1tuwuGKZdEJmDPkbnFWAwtGpL3KZnwM5KViALwzi26oU9Hf"
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

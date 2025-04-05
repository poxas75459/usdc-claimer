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
    "5pZ3yyuH2mrrse2b3BhSypwTHKg3x1ux71kwefJCdgHDXPpxESSd5erTJSZpugJWtcgoRQVbYgZJUYkBJ28PDCpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fwi99uiEH45wft7ThDQmLdUiCbZPrZfmJiovNZncC4XvGAo1zPTXeYNWLNdzqPeErN6Beey8SxBgr4cgFvYSkKX",
  "key1": "3juBpHqsrtdaxFHYbANEPgK1UvuhNNVMLr7SVLXmXZxeURbVM8jUc4Tgt8kXej31pMsBGfGNJoPpMB1YUhXrDPEN",
  "key2": "29daCzrTmYMk5d3zhe5c5mSk5rCoM9RUttLq87DUXFyGtyWvA9KWbVrUGGbQrWymLQjUQbzEGLZ7m4EPaqfoHRZo",
  "key3": "2XU3a5ivdiZBBbCSZCFokdb9Ri3NwGWDrhDgRBuJodENhUhNtrUwa6Yoh229kYkaNa13J5xeHfEEFS2mQJ6vp9jp",
  "key4": "2fYgizCL3BBeEaWkvWXJE5gjmGSTFrobEaW65ebU4ysWA9EWMk5fgJ118CCbTA2sw3YARKtGNN9jCYc1eL9QCVbQ",
  "key5": "4QScR7NZMFHKU5L7CmrC7m63PBsQ3he6rQ6Pwp32x38NRENnXgMixV3g2Spo6r6xGQZQ2UGSWpZz5PVDYC2vc7oa",
  "key6": "5DEiwXq9on92NXR9UKznvyv61Ce1Xqkz6wZC7eXJJn8wAgUHqLJ5fS1mE3NnvdEuV93EaXEWNvrRZ1Jony3ZJBXE",
  "key7": "2NjkbXT6AHnPLfy9pMid8wU6shgknbi4bE5inp9ZES6eXqV7dAyFNEHwV9EtLfKRVSbfDovXQv6HMPdFHD1ArNeV",
  "key8": "4oEoFKAfk5VU7H2SRhpx4uZ7WRvRDsPZLqnPp15JJ7BBJZWn1eVKKjoviURR5dBgkJQQtyodwG1goVR4LUhJG4ZP",
  "key9": "HrWe1HEsBjiNLYik8Xv9fFe4fKBbU4AMcQhBVaf6Dyto1mHpR7ir4zL8AfJGHLEqdwanAi89HZXd9jiL4BKZtaG",
  "key10": "FDXaBHP3cLQ1rjno3q1zR3xNRmq963Ym7z2ikX4V4ySkjAcWPca13DxWj9YZXop5v41pjupCNvzCBkbe17cxgTn",
  "key11": "HEEu6Fi4UbKSEa9p5fz1kyxBXc5EqG7Q2ixe4Tny7NAFMGkRbumFRDgLHKT71dznfVKHwhXH2kxUQPz3eE2PHGt",
  "key12": "4qfW4PzFBGnfoFweYkVxWf2dF12C6AQzWeD11Y8Ut38erZZP3N93DD3DT54wx7naSaMj4s8tSga2MqcP8hJXCkkQ",
  "key13": "D58hjqfLGYFMRDuMyopYKxX5bZk2HbXwiC6LGUxBodAyWZLjRywYN9dbJHYZWwZ9Cu6rn7i76MAQbgqAG9Qm59b",
  "key14": "3cyLtQoKv43jFpEu2aH9QCYs3n9SeqmuCJoEsJTFBevwV6Qc1T2kyGo9EcfcV3oq4DnEWaAXen4Gmt6Krj69pUEM",
  "key15": "35SNcd52j8tQvE3NzAxXo87nZZKUXXtFWGubVdRqdp95TWmdeJ7fTrAWMABkKd2UK7ZQjfmAeNivycpMQNahJyLY",
  "key16": "3JGE3s1mKQiRS2wU8RP2Ho5fJ2eZP5G1x8ZUiT1Ykysh7zxNRWxpRsrgpjZPZC1xDYGMwGFhAFburJnBQd3s8pvc",
  "key17": "PFa3ddP34jbaCdAEzBSq5rjZx3HeC1CrwSfHAX6ANfWbN5kBWFAAWCfJNXNifx5omH2Pn6JZGPqzHnFykgwzSwT",
  "key18": "AqfF9HwPBSuvKMD91kfebH6nkmECmHe1K6JbZDBM8CjSWzfGJrKWvzgLCKvStjGLhNV4cxGC8JnjocpHNA6pX6j",
  "key19": "1ZDp83j96YWUbdNZuQyKXYYtusYpZx9tjQ5HSqfAhmJVEJGXALVhcV2hAmiHTFvZtqtP3bDAhjrnb11w73XYJNu",
  "key20": "GRKBsTXfovYkmYXnAix6yaSqDDodBPCedhqSorb4D3xqkxk2dXSFQhQRxh8vtTf4PnZAYSSWfBYLF9fD6kDsBnJ",
  "key21": "4TzWQ7Ao3UF4fu2mNM21dxSMkbmxy7EGrUBtkFDNiub36FFb9wvD6kLNLhDVzWRTEBbWYiJYc7UDfXoqrzfSQURe",
  "key22": "3sW4ecmbEe8neZQp1tppJRCNiziZX26CywLkqBSAS1rSxVrEFYewHKKmc4Zw6hLmZLYvXwprq7Vp8NpZkGrxaNTT",
  "key23": "2EZHY6vpyhMabHLpFV9EuPRC8J5EZNpZnFqG4ACq2VQQYBCGvPvfJC2KAytaKipnNQeth8ywma2YoTMejLWP6PVt",
  "key24": "dxmpzerXzDoMgdg4wLVtNJRCfLq55YFo4zxNzkYSLoL6JnamnPBDBnu2joHdYG8uAtaXXYikrpyc3PosRtTpmC1",
  "key25": "FSCe4jf763NySENrvy5d1dDWMs2iXBsKrN946qgLUKSw8EE2i5hpX3M9SWiVR7YyW5MXSmGaqBfDJEfFTGZ5DqX",
  "key26": "5depDb8P7mHfhaopCJBn8qvTq26vhyHPytdUcYWCrF8uTkt8rcW2yY8YGNXW1Nyzq4Br1ZDidNe1b57k6YvLqwnD",
  "key27": "4UWo9jT4Rjj8qVrxLHWaFHEmSsabPYYYf3G9vUvMZgZDGvwhrRUxuTmuuJavjWFob2Hjo4Li4aoaVQC9MGbTGAhP",
  "key28": "4rmPrW27v9JmSWssLfZWAymqkzAU9QfKDkS39eUyNUf1Kc3V7N2un1LBZTF1HCyRFquxJx2JvNDb1MkkLZSSm6b6",
  "key29": "cHhFE1jE2d5Qk5XbxsXeaNae2FzrNT8gFqE7jVogxqGTkDei51kP64QYjfKGihEUF5hitC52MKb6i8ZHxqKkgmB",
  "key30": "3GcjYVtVowZXUbVkBpnPm5vm2iDJ5p3pHa3wEp3ZMaeGQv9xB6Ct1KdpdA4Cj4jZwJqXUq1HsXjEALpWd15XdeVz",
  "key31": "5ShNzmBtJ3ZNYGBv2uopcnPiv1fiHo6RFKxtXE8TGGWGXrYHJu4dAz3kLrV7ofV9ekWLrCeoyc6k7HyUbtupFMZj",
  "key32": "4EgMz4SUBgZqg3gcQhzt1kWYtSnscKG3r8nuKWxuHCURUzTjVKuSTkKDnv7bzPKxbmvvTFU2YX1qDRoMobTPZeWE",
  "key33": "iSudfdVZGnwq27TFtW7MNGqqLLrzYry2ZicDNj7d575xYJPa6TEzSdygaD6qpCyd5Bw2XBmwpPAZ5Yuu1jzymJJ",
  "key34": "5UwaqrCT5TRAuWEffRyNGdQ2fg8SM6dBHySqRpbsCxYNUgU3naScxsQuss9LCDvSkkFXoCS8HARoxVaXFfguUgrH"
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

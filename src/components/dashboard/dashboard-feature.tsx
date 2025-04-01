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
    "4eAT2W7UkSYwBi4VJajZEsBDUDUUFJB8jmrnAS7YNapeiLe4BCcLNQtcom4gTydX4y7nHf9RVk6WfarmfC3DYmHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBFBBVa3ho73dngSmd9bySF369YHeBVRArMK24fwjaZsHGbodP2CjG3ToGmgAjS5SPWmjeUogn6wi5a2cyRqNki",
  "key1": "2ujWtUGVviSP19SWKwJZrdCyi7YUME6nBJRC4YmgDcwPCsCPfKX1KBryhXxGTToSwHTokwPr7tTVE442MGSKy3AQ",
  "key2": "4HqiWhqrdrG8eb6EeY27AXzWFxmvJEEuBBZ82h7oLD6NzUxAF3d2PwMWriXdW3hxQyUepdLwJcaYaQ2M92aUM29a",
  "key3": "L5ELUapMfMcFJg5Lz6KkEzs1wrqrciodoZhRvx18Qys7tcDHC2fLQ162PKa1YEbgqvR6ydx1ufqtWHp7MofgBvL",
  "key4": "4ZyKeswNg9eVjYKGtz7unSbnrxjzkHQostrRsavJ7e43PZ8Ayq7Jw3qFPh6AqeoFwkxZSidBcabeLX6PpZ4ZeGJr",
  "key5": "CR2RgWqDw6xqdvhbZrPnCc1ARC4vLp2fvNJqyB22WV6rz651oikoBiT1P3FB4UAeaNsR5S422pz6Y7GHf6fpPPW",
  "key6": "3DLYJV1s56v5DQPA5VCbic5oUaZp8VZ9hDPycg7gGYfGP58Nipq3gipJrPrH8ZrVaMFkQr3Q9VcRGCYoHqrqeRLY",
  "key7": "4dr64aiahhMHJbJ7Fn6vwCyX6qjJ63M31HKueyGSwgJ57PNudrigTNgoWwt5CK1skcRa11i1RReMgzQQbsmZ2KZe",
  "key8": "4FvRz8p28sSsZm3japNCR897kncrXaSx2jyone3bEAvaBbEZcjHSAWed3CrBXyQT9dRTDaBBf15aqmNpmqwXNFs",
  "key9": "2yf24sG4a8usqy9JoLdBhzUNxRAg6ohSQHfUL38GvE1PgVi7QNsZoDmifSh5ARtaNjeZAXUL11bRwfnMNK1mYbjX",
  "key10": "2nkD4wFnHxF1yJ8ci7ueKEupEZCpqe33wSJ5GqLjLan1NtpoMJguppQgzShX4PWLTxy597eNVyEZL7xeLDRBtcbK",
  "key11": "4tHtrCcmfrVSPLeXUs2Co8wFs4cvXT9yAqe1jFvtkwwF1AvMhGSJPkDL2VJbNqmL7dAMCwYMGX2jrvcuqEjxaC1s",
  "key12": "q2Ha8aXGmx7cFbPPqgyZCPs9n1SDusCs62ZZU1u2bhVY8tr3QqhPxXVPM8eefDMe2MFYcr5TB68y1nASUvT7Nmq",
  "key13": "AKy741M5ktTGVRT1MNWFheah5m4QDoPx2c3c2KraniJPmhn3861H2dsrmwLoYqwtsmAZmh76qL9WmTEjaFJ15QA",
  "key14": "5wsjgM4iYrj53rFnwvJNk5f7ozPb7RMELYWfvgJn1xJL2MEt7igKfKP3YHNYFFxY4USZJC1n8fJL92juQsYU7qws",
  "key15": "5Ys1g1NRPUc1dSwippmGXSchFgi8qh3BpT9ZZdNnGZGYyU9Q6tkh2QBrMCMeH3zn2LpwRnwryzWnRZKpJe3szJhd",
  "key16": "4u38P5dsvqHm14DGXhqp6FTWrLas6LMGj1dguUxJatRb1PY8WReTHhYqdUdsCfAfTx6bVh4ghkmLUe4pwWGQhESi",
  "key17": "4A2SfGEAqFzPWsKXh1c5kzAxyLKek29UvUsPtDFVEja9zf6fgfRt4Ds6xT5V2KkZ1hYj7Dtp6mfLXJ9m8wA5Kahi",
  "key18": "2z2i7HWDb89seU7aiJ5DBpDXLy4G4sEfBsHcWv48Wg29hwdEGhRZrrGTrGH3HtepRhxJA5GAm7m23hVE18EgTZb",
  "key19": "3mMiDNvAQ64eAdPu75dYeqHuRJfnXbgE4xayb525sy6NH5tkz7VJR1s6g12iJ2heE2DjnZz6FHqEuDzmEiixbqfN",
  "key20": "52Abj845zhsb3ZYQaxkTxKU1SRQEjWJeh2P7eawZS6YDykeakhENMFnvaCAHzKxjxn3LtwyesrqvuURbhRh1BgBu",
  "key21": "3hAdinBnBwsKUpBRqxJqJqBFCNSZ2C9vr6R6iJkTwyAJQZZcUcW7BVcmrgqX5fKKuXmF8jyirgyz86qz9rGdt8wX",
  "key22": "L1eRBMu5KU9CzgX1X5e1RFmzfVzobEcHqfqSHku8hhEi56ePXwgT7f2p4BkkQ7pa75BTftqDyJmBRW2xQxwEzDh",
  "key23": "3fXuSzNRJDTwDc7cwY4ebvxn38z9bihQEPtgghgXaMP9McBa31Y2C1RADcDnjwwVbYnr5TjmwRdTYNZtbsDBY82x",
  "key24": "27sAGQfEVUFWQt9HHBw459h5paienpqD5LSdkHF8KqH96P1A1D44DhMhNCGoJv2firsMnefGLyPPk5yKWc92swtd",
  "key25": "NVb8s95gP1deJsCc6AGmETjcJMUZMXivv7vSYzNit1njtbmdcz8NiCehHn9MpFvkCuzaNrU2CGUvZLFKePkZP62",
  "key26": "4qwBU1RmUa2NoMyswQejYVFDnzXubNAEVQoZwk6a9jvXzpe14gdHQZ3KeiLyxUJEac3yVX1Bf1B6ZvYR1RY1zqaq",
  "key27": "2wYDGxX21m3p9RtjzgD2j6JJ8bAqhWe5HTjJKRRGCAhTtExgDcRt9GCRXHan2gThDz2yVhB1iv7EkXdmfybsNRK8",
  "key28": "2yesQ5ZE58ABGqoR6ZaoJDUbZGG9bEu5T66QVEsiqurFEAAp16fnGVFSPp66r8ZEUAwfRG83WQRZTvidUEjQiSwi",
  "key29": "3R37n9fmCXSJs1ZMAS95kNfd57nmbTWPVZTdqU32CWGgyrVjEgEFzZ7qmWF4fyR8ieCbzwd6K8du8vz26DTNoSgE",
  "key30": "jPnJ9MT8b9MFoxp2ZRpHnyV8R7g1sgZNFGYQDBseYqwbJkUiwVnPsdhnxAn8aAHvXKGfJ4ZwGziGwUUsXHfnBMd",
  "key31": "4Dp3RK8GGUSrXJGXdFKmX6hYMCdRhUzrBRucDmxr8sHdquMbm9B2yrXe9HuAym6hzqUHHX4evweoExh7ppx8R3Z6",
  "key32": "SdYZRRcNRHhUKEXD7SSyscXxjt2c8eXwkVsAgWy5RfdUS2XDNHVm4hTKsNmVURhtjfjWMtaQ8XTLEFfvmEsBb51",
  "key33": "5nxtwcnxqLwY6z9FeSV5NYSikZgiFD2DT1k2HqrfULFvptTMEx5tF6chtqKicrwn1UiVYnjms9hsCJMJ3uKWdHVo",
  "key34": "5866LikN3mSBzq4kHK22LD3yjjQEoNaaj26iraKWh5B8BnsW7Y1NFZtXk1wiheHrwavbr12wybvrL5mggyL7Xgej",
  "key35": "549jpkDXL2GzhyTJFjbxvgUL8CdVtGWKfQDGHwcvXW92eQ4wyBmLXucW5ajvigzn3wwCv4tq6VugtCotxshgwAgp",
  "key36": "2XthroZSJHchC12ayqXWhFHFaTYyLETRR44uLwqg9pXbRMNAiNPU67iZySqmnhvn6djZAvDmSaKHyUGw7muH96jF",
  "key37": "9CghDBWrUjD3qxfQ6sYVmNmu5Eq5FS5uDToxd8rQDUYzEFhuPoyzcj6dCCMd3UPcEMaXeXzH4BL3r5t71nzw5rq",
  "key38": "42c9rFsj2916h9MRaVL2CWfWTVb2AW4K8nWVVhJnmbyALVisnPooG9iTYoscYeuPbFGfHThppdu1vDzmNPNwCSDh",
  "key39": "jaVsUJTqbGs1vRFbrdUNB4ukSgTuk42jrvtJm6TBod6Mcp8pZT1CQnahMzv8pJb4iCRnigwdCFF1ANVYamJzKDf",
  "key40": "fAWVS7yKjsNgDb88VkduqDMub8ejegFVsHXSXxLhTgrKWHhPG35DK111igzZx4PpKGPPHnsoXmM6FbHCLoay34B",
  "key41": "2yAGHDFJC4igHZG8rZKUzMEiALgagizPTEXs7cE3773NHuGGS5w3ryk8YRfbRpGaA5zpBES4AbxrzXPDKxrxNBWh",
  "key42": "61qa9wn2t4CLdQQKDwfqFsYVVBRT2KSXWiRtQGkgVSTVyUbZTtBCYVqhZcpJRH5LFTKdNquh8tnqXuKvT1zpk8hU",
  "key43": "dxyhUb154nb1HSuHXVWsCbZYRACTKkTbm1r5Ta6YEF6sdoKnRMtHGkxqThPYED1c3wBLfc53moUcX47Pu6ob746",
  "key44": "62K1p5GKsajDoZ4KXVaotJjS3qGz6GFMxSeqwBdaAG2qWY252BNb3N1h7dzT4rd8uXVnVzUNUct3hX51ZAo15TZC"
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

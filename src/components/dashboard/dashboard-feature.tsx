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
    "4WAWepPYVhVDibmFE8hNMxtDBvNyDD7WGVsPafTPtieX1YbfoqEMc4YEfKuBUHY2rFu1MoWbfca778PRYcWWd7ZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHHnzAvoLo9J3YM7GTaPWFicSnqoWnNqfeDPdbsAkNU5RMz6E7f1JKpCw1q2kWP5jqVDSDPa2k1STHnBbA3GUus",
  "key1": "4g8rztHyWWTUmpwZwe33EmtnNxboE5o9CRRQgoPodkcd612p6xwtq9EPBE1TA6G5s5gdRfbJUDtBu6LSUgo3YTh8",
  "key2": "2psW5vkUnB7NfAmKdCq9EAdn9nPzcutMdhm3pU7eUX1yViVawcVjz8SyRTtXdpBcHV1Kj351v5NBz1JvSyELLHCv",
  "key3": "2SF8u65Yj8GVH2Yy9zNJpXN5pZqzL3p4F6wsx3FModKSairqQxikC5UJSsktQTTbnAWmjR4KfPUV5pGdyKr53ALW",
  "key4": "uv36FPv77CqD5NU65hxNHVkuHmZdzU7otYDt8L28XL4ucDPR9wRjJWuSXwg66X2YntFVq4p4eHTb5WK4npowmu2",
  "key5": "WxAEnFY1YwNJL44ALELXUFffmx3p2rxYchUDrGn8eQLiqqEJipC6bWnYB9vKTs1wJaZtYgJpdanB8hLvdPyrsYd",
  "key6": "4kxLYarnUmfZCEuL6zhXb16pZLvsfrztqDifzq65axcG6tMVRtamU4SBv6dF91rN3BMMj8jHBRrt49EXchb4G849",
  "key7": "4TNivo8cnX9RDZgHC79AiwzNvx7WQ3QdSJkBuYUMjndpZgwAEXfDnmAwSdR224rThACDkjD6JE8T6wT66gBeoXe4",
  "key8": "3Av23L5t6prjHokBqDc9toCXcBPjFW21yxu6mD6sGXBkuX7jnxpZQ4FgLfJuNKsEdZqK1MfwReWhSTuaZpyJ7cL9",
  "key9": "32Uj3QETVJsPrMp3uKShesBQoqDgLeMDUPLCNKXXZQL7wGLBJHc6dCFaQaj9gLq1cdwKfnkgdZWrPW6H5zsL9AK5",
  "key10": "3pcdS2Be2dKYKepwvPAmg1xdvNpQudDqDC7W6g12dedzCVDTTisohvGsdLNSWiAy8Eb2rrcURqCjfyfUNqUd35PQ",
  "key11": "3WbxuzinsctL1uS7aSfMfz3wjVGhqdgzw1rSBfPe2CbdftmoD9zgvrD96G2xyTtSdTPFWy5w5W631cqBo4qLEPDs",
  "key12": "2Vn2spy9NuGydr2Edmbuk4NAFEPxVpMarFnQZ3FZ14EPRdrrGuQMaJZn7kPzjPS98McZwHTaQxbr1Sp4BnLAJK5A",
  "key13": "3Gd4hVssWjybkV8DM9eUz8G8bXazZwUmNUGVRgxnGUHcmNG6H9Xs5H71T1UUjmqRufXTcpnnaGTuCSzwEbGRDshi",
  "key14": "4b5BmUsLi5YnVeF7eZoCYHb1oXu2xKXbi4sCax2Dda2BYDPia4DX8y4qusp19eXssqC7crPsR5tqomghRrKjRdks",
  "key15": "352UFQ9Q899pLWiJp7kASYNAVqQNR7SaiiCfqgkaPG1KvZ2fQ8dRfADcy4hXnPoht88KmuvNpej78oimU5chDEDW",
  "key16": "3f1QWSzxhNc2RwoZhysYbYaKBTozN2wHTqUfmrQTZYFDyJxPRabUQaBTfX814EkL656GtfVgTWdiWNxhCf8TrLTZ",
  "key17": "2i4F2RFz9yKGyptMozKEzjfhzDeuweENhHqNdGqyP1jLK4Dk3DH4iEottwqCGJP7K5G3HJUN15iPJweyntKoiZHt",
  "key18": "2rFxZ4LoBYEg7mwieM4LdSVChnv1ivMQLtYMdnd3AM5VZYHgaZXeGa85CGaReWPFyGkzdtTQktKtBRjmdKrHbfsu",
  "key19": "5PcXdEnZjaXCcVYexa3wTycWWdbw6T6WMiCVsyKhmww5CNorduSrqgLqPaEdiM1X1Ch4K3j54NGBBPe314vJRmJg",
  "key20": "7iQ2saoPWzqcjSeff6sX8xR76iWEreRmNCe3sXMXXyZwrZ4BBKXmEuqCNNJ9eVmVm9oEbeu9RvGHvMDFwj5Fdt1",
  "key21": "FeiuWhymibzg5Y2pNvAM4EmuZtzLUQUnvYUiXxxt4EJYnWNDLEdTq7ucnEmP1MyF6bdANuJFdPBAGeJrTKQC3ht",
  "key22": "BHKogkRakAGQ9UFZfgp6Afm4LwYFJa9rgbZQk9Q4wG8Jsm17iL9oE2igJb9LhgGCUa583Dqedrs4aXXSDN7MvTt",
  "key23": "4jCrgVvG42xwQFHQYYEyVExUWXoLPiyjCxcq6KJqieJQMotvE4d4Ji6d48KGRuSPDMPSsUWhnUvepyJUU2XdmnWb",
  "key24": "3gqbwwZ2k2Xvd7kCmd9HCcR8UJFxTND2Xwd1E8yji2WeSPuwmnawMLwj9u6C11x9ah9WB6LQJn2jJoi7J99TfLDh",
  "key25": "2VK81LtBFWMn5mF7XJ6725qYmawUUz6bmRQiQRRi9Xa4rsnwHQVzRPmvgALPWuchdbzmEFPNMcxgoRBgJQhfukBx",
  "key26": "2p3Z5PsyzjkokvC6nqBJKh5f2oUiDDuARLzhE6z9k65fLvRjeZ9u4ZoB4bMaD966hFFci7Mpfe68Co6VMnp9JRQu",
  "key27": "3QXhNhUijbXdWWRMqSuUM4UwqA46DfRt9JQMY6pqmbaHCQyUkB3M7Qaf2TqPZ6RPyhtnhNV8JdT7sYgCtbCzKBjY",
  "key28": "5KsQjxtXJwbAzjRgV6gJoqzo8VoTLpw8n8fwg6gQDWujc3qkoVJk4twgrEJVdKHQW8UHX7YTMRWCNw58H72tPmaQ",
  "key29": "3YKyv1XFmvtB7PQi4agLHfFV3qxuqHzGTxQgZY6bMV92rLgLx21JGrcVNEsgQQNESYJUkr8SpM6cjcMCRtLuUXuE",
  "key30": "3ZpDxUKHA9KzRDS9KwMvjFcCjX384Fv343nmKyYN1WGjNfABqpP5U1e7GCXGc4sQ6DpNAEjaHbHw6gfpAg63KXXJ",
  "key31": "5wHte9KWjet1a6DVeudnhL1A4ZoV8YEbH9aUdYPm4q6L3VuN8pg6JyWm2gyBU9pmVgt4rSo4v8dyWPmm5GVLciYK",
  "key32": "47zu5Zq95ZYstpZt5pAGijpf5HarmifLq9JFLsZ17DYGsSgdrxiPvHA8dAXsVgQ6e4eFDm11Jt6EE8KWXRWK34t2",
  "key33": "3vMrwSF7dBktKWDnzeErR1E75UN5AzA9cxci6hMPhGr7BhW1iiqn3XLBCam7uLDGzXa8Wb6vTNjTfHnd5jqkDsAZ",
  "key34": "66tyhhNUtuD8fxiNQ5m3sVG9Bjkv8YzoN1LaNxkYvyodSH3fVQvKD6e4HMKLdhcznomgez3SomQiYC8F3nZWdpg6",
  "key35": "2NudF9J5CRTQZ7myd5A91Dfs4XYRgY2DnG3SoQ3VeNFDqJfHTLzig1w2ayvqXnpXk3QzuW7fuMwwfSxnYsXgvHaC",
  "key36": "4n77T8MSHJ9NS5eG83jY8fFh1L9McCiuGGp66jHFmcBtXiUdiQAxr5Er4opkRTtRmz3kFZ2AZV9yKvQQoK1bLwKT",
  "key37": "38CjZ2EFKSL1KK5j7hu8BGp7YciiWjEmU2U6ihntZKgMZs27eSwfMwnsVMPLnf7T8zRE3QKC2gESyRc28c7ZK9g1",
  "key38": "6hUQ3EdLvjqJAXiU5kiuYe83cmf9i6nQ6787c7fwc73ksnc9LoPbx9TQHW6JqzTq3btrhFFjQ52qykqso4X1aTr",
  "key39": "3KKko7YwVbm8G5GfccuC8hy2dGvseSxGh88KPwS4g6SeWmZvWmxxB2j3Nnc5W6sVZFo2XLQ3ewkVjySY6LaRoapk",
  "key40": "3ScGqU1qLVnfPcDv4tVwFrccBFfHtwbXgWvazbQATtUcosNYdsy7UgvRgNyDPr11wbrbkUJmwNKxnrSyZAwbiiFN",
  "key41": "4yyFsphLFtvuPwiDPxYcDqQrQDNcdGeYRZzESvTzQVGc5CriwQ2LehF6shXyoQP2fgCZPh7Dbmqb76hKrDaZx8Z7",
  "key42": "21QedtUZdWHYYp5ngCUxBXVhzpCVep6VNf5JZtoQbpM3ozuVmhx7LtL5KRM1KtZSWa4W9XJoMEpuJX42Tck4m3JF"
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

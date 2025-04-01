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
    "3EnvgEC3QG5DN6TxVpdKEC9veCNtHRZLb3SDeTD9ShH37VdNwS7Wn9ChvCL4iuZqFc7CYtWHnAvRTXEyHhMbGTnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3towXPfzhNUgB2evKTAir2HSfgha516cSJhUeWbBgECkhLeTeygs9vxBhDd1BLdAnTQhRhz822sG4eGckHcmJKAz",
  "key1": "4Y55CMcSjUp2YyGbN8kP5dMnmALduEX4V9tLs4PfRSkTKCaraNGsxNMc77Gn9Dt8DQ2tVvnEeoC1hc24th91ZVYW",
  "key2": "3LVMfyKr1257sbjV4b1f6Yx79gy81zZwAm57c8aU7RapqjuChW91ear5EL3rYnGkCoFpU45p79kJi9pYqprMyemH",
  "key3": "5D4QttbjbuT6qK9gWWD2cT1ADKFEX1rcBjBMdkbm22aJgtzm1Nj9e7eq5YUbJiwarvNaVqyshDUpn774UxnNFb22",
  "key4": "4MFSVopeCWWAruSUZNiwrr16FaLP6c2NfqVscLKKXHKEZ7tqaZZ7KxxLNCPZV73muBcCN1Y364YZfKvQWrpG45fa",
  "key5": "3q9ydGcyKWDXx6cnSbgdxMRnVfYdGV3FezTCxW71mSP4G6DWrSuDwj15bf63aSqjvHQXzfH2CPuXHFehF5CrWc4V",
  "key6": "39gTgNwoNFDKrEcu7reqsBybE2StLgf8EejXQfXr7VKU3RqFcwNDJdza4apH1Vs76ssMM2LnC3gzq77nudrdt1yn",
  "key7": "2atps7tP1mjygMAxdQuNKxTq2ta79vt55VD31zM3JVwD6wnaRv4i9VmZHKPZDZKfGjSC1MYUFbAgxf2vcAqfVLDJ",
  "key8": "2msxcXk3ByzExNh3hKbvqMfEz9TUh3TgumsxWRP3gXkhDmYginkbDMR8oUFG4ZiFyYC7sZ6TsTNBXBhESZzse39H",
  "key9": "WoWJqRd3iMVv3XzJDALN8mK2iWBqCjrntvUdyfV7oKbDQ82d46F9mFfjHKj7RQQQyCgYWzjQ6TAroPPkFvcPA1z",
  "key10": "5QtK8SNupdusoyUnbNrbgjQQShQhGkm1M8um6r59JxHdx6JxpygtA6xqPfonjxN4Q9Rp4UYboKi1CLnPPTjfXyDt",
  "key11": "2Hxgbz1ppFojkR1nbsGSD5hWdLtJUULdp9SHXC8gr2Zd2zDMki6Y5nHcuCgx6mwq7FYyDkZ1EEULQMFSHPPCKWdc",
  "key12": "2QpJRxSCM5uwbrvU1odbbPknxzNLhYmeND8soQv4x3Wnsz23ub4p1Qm5CJXwpRiChTBTr3Unmy4XonsTHX7cynT9",
  "key13": "58DWdTVjRCZ7kdh1nSwZfwdrmBo4DoXgd9zYTtEsfPVZ4NBgLCWR6iEWqGNL9pb5BLidxmANG9SiVBny9cBqiZHV",
  "key14": "3VYtsNY6p3Qh31i4HJmmvtx9pVJSGwQvQFScCyM2RHgqRgM71E1pbPt2U21vWk6ii9MEQRC4zc8Jo9DyDqCkUFd7",
  "key15": "3JmmxoEi4soCojGekCk1bbQikEPMyM1FYFej7HoV8m38VLy2NfZUXTokNwc7V8GCuAVaMsmPzRN3tViJuYAMBvFF",
  "key16": "2jdKkya7AyAwRsobZ1RYJPN4XjyCLb9wpr14q4Z6eea7B9koNZtfnJa8EhT6RAvxzcDRSYz2LbdtwVQojxtzAma4",
  "key17": "XibxhnMREpR2XEiSaiiXc5ns5SzHH3DtUqMdVAXK86qGgujH17YK7Qhmm3KoLukrG3BawSBxwdKKDRp5n99nEGn",
  "key18": "3nGkxPoQZ1cSny5MFRkMnxyzU232rFtxxy6KqTi49F2dS5NDb4DBWRWz2myPvDaSSLSY26ZU6L57zcxJasrptPPc",
  "key19": "4RanduzGyTgR2mMxKDnsBAZrWXT1PHVLCSK96HGWsg7rjYLVXQwZRUiFrnpwfxDMcQKYtYzg8un3gyxJLjtFvGdU",
  "key20": "2oaFB2qnuG6y3JMnhfiR3WsaZxa2JWHw8QjMQutGDx1K8sRZvGUGaDzxcX9dEaYVDANUADgndsEH36VXxhA315So",
  "key21": "1bT91baD6mdNdhGh7ekzSYQFGDM2zg8amHxZbgtNx1sZJan6C74q7o6ceMfYb6nATknTDs1RYdgJbHBsEnm3Bzt",
  "key22": "3NsLTnbMoPyFmv5r3BcQP2f3cb4cBezxg5SexUPxfaPNJety1jCDSaogEtSwZCaiGruWio2B8S4XNWhUtqJkVuCj",
  "key23": "2g7ttfgst8xTtAQU8iJPG3BnrUQkgQED1HC8wBA6Tpb92632tYpXXp8nWuBUrNM8yiPQBn7KEoFCkZqQdCEgPq5M",
  "key24": "5VgnZD7Yecz23NL9r4bMgP9v4Jt6j4hGPwrCfaQpjoNAf65TSEbjt3N92gcrZ3vSKRNYAW5xNqtWeKqisEkzQiah",
  "key25": "3zUmd1XmPz97Laf8mAmYrqHSwxYgUYygRzUaJxSXFsV5ouCTEG1F7GtRcFkWSBgbNtTkuLgRFEhtX93euYaJyjU6",
  "key26": "56BjnvcQfRcVsp23v4LgUhb833rnw8TxQqAVheEMW3JL4qkUcM2h9t8LKz5ZQ1AbUC3XMJfSAk6B7Y2DEDVSriJy",
  "key27": "2X4f8wcFBPYurzRFap3CUYRQpVq7ePLaaoWxsTGpWDHTthguifWGTZb57njef7BLfJUdvg9ymm6JctNGgB2onwGq",
  "key28": "4j4JvcrgMdtcgAsDYZR8Nep7na64wsoe72us8TmC2EtGyYSJtpVgfB3ibJayHN8pEVAZoRkkzN8Na75iVYhd2x5r",
  "key29": "2su7kmKUYikYCpCrNq3ecqbXYyWhu4nU5anYrphTG5FWVaNWnkHd9A7LTjqgmtQJk5bfLeBBLuzecaFYmQvErsxX",
  "key30": "3SyPEv9an4bHLHpCs5XiN3eEZHNqRTi5s3iUkquafPsqs9GM46reyTCVVYiA2QGCAfC3rZyh3cauewB5ztgfNjMy",
  "key31": "5heXT2naNtNacFPNjLq9yLYYEYRvcrjt8zmiWS4oZTDcGX189txvmqrj4kBuAzqHpVpRXm5DCx1uXEaKmnvqMe4v",
  "key32": "2fKFwMWaQ6cpW8aBNCrWtbecTAe7FDffBQYspfYGCiz4igPuLUwjsrNzHvwqcib2cpbRuiYUsXCXwm8PnV7mBDoC",
  "key33": "3xnauax9aAQMAG2wST2esuNXcJF2hPND3rH7JiW3B1S9XKrVUfoPMdGDTk6wnAU5H1YJtpCmwZAWZzMRJeSF8sxD",
  "key34": "58shdEv67sCYhjv91HRYZpmQKaQPjvwuS5nRJXY2TvnxSRGLp9MwmEPHPNogDuL2m1KaWr2Q2vZCf7NQQTesJA6V"
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

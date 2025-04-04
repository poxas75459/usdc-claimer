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
    "4brse4C4RdSfp3wKTXV3bHHA7sR8jrDBbzxAtcV6kdZqNNxhyXgzr8SYyZbzi8pYRARjTcXgaYPfSCYiUXYHHw4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pqa2UxveDK44zDEPBst8fBeuPSvKjCwDJTzoVs61EgeCRZLhutxFnEp4cPfJfw2ruAF7K59bSBLgVKQiG3iEWJv",
  "key1": "65YDPpN9Tsq38SHHcLvWC4U2ieZEiFrw7EaMwiLpkw91tHmNWYxPByUD5GZyvHYEDv6DocKKHbc8C5gUQqgCwWTy",
  "key2": "35rBLrKvM3u9RGFZ88ZRGUHVZv1cPXwbbyFhkA6xLuqgsfWTHyCe3ZeVtgekQUUFBRmjMH1YjyZi7mqoE4kHFmgt",
  "key3": "5H9Kig1JA4FnrpnrfWAxgS2mQWr4dC9Hc2asMMi8TigGJdjtY8gzGzyVvCZVBB58fQ9ATLgU8fLFApdQxQFoQcJP",
  "key4": "2FzUaf2XSEqberEpKqmHoUewBrt9Zm7RqqA3CEjfQGjtfjjYRUf7AZ8CTCRamXAvwE5py635EocipxXRRQ95kMTa",
  "key5": "5qQRiPt7JhuUTNnndUdihajfHXuMGFzNTxsji6WiLcPqaPV27jDD4a7SHezcQUUwxJG89dRY4wVyVBc6nQuK85p5",
  "key6": "2HEKEChd58fnzx1WN9R7TdepVSa3ko3TBi9FBER5jmQjr9EGm1xKLGpuGTNzsZUYRYTa1eM6ZJEBvEP6DgK3Mt49",
  "key7": "2Ryg59jic7JhC7u5vQ7Kg5vFKn644JmzjLLGoL7AVfS5pADXvzgBQBbCzg4hYfEhbD2ho2wt3RKYMgz2pshg37GK",
  "key8": "4xqQf74J3PTzRyP2RTwst1PXRC1JS8YHEvNAbhkJmGT8wM5XikBh6fAaUmRaNTC76QCZy8XmUEogpGMvxzWnUrLh",
  "key9": "4PGU2A5BEkHYAsCWps1c9uMieFVzEZbXe8V183YdjywWxHhdZ5sisBPu2j1gonrsJAbTm1xrmkU41oQhX2EqnPnn",
  "key10": "4SKCWKNjRTYgLy6FL4wmyM7bi1opAcYjccHSuwWyTHYKaAHWkPDVD4CbnuBGVjArX9ut5jV94ZT25Nsj98KLYeax",
  "key11": "5QYxXUkVisbQDscVpT8eWQnQEzB2yMdTDiAkNb3HBmzbxnXnaDWAF7iGP3X7rEHtsxpekN4SZ27BWBeGeXdMFqna",
  "key12": "65hT9oChiG1P7tCpX53aBmfZxzZ3PR2dTec8VVrBRo6v2SFomuYApkyqhGxTSYQvZastPymWS6WnhxKwCQDHyhEM",
  "key13": "22ntgDon1V2vMrqgUY39mVxXkgnDC8Nox19qLUexJJk1i1NQG4puj6zKu813e67fxHUwwNU85MgUhGFBqLEz97Ep",
  "key14": "29zywRA25bezBAnY8eFJ747234qKXz9dgQSiHcWAwJaGvL9CfFUxE5EeZ9drBRXnjfHLFTYMxrnJM6k9p7dUMvsY",
  "key15": "2Qnm1Q95VEEc4uVVVE8BJU6N6ysZMJyNNY2mBoXDZ7qpDRybk4LfJbRQf8TWjjHystYSvH5fJWhf6or7QUzBUpVD",
  "key16": "4DR6HD74XvMKTjViFsCv1mErnW3PpJCNfPFqdnerfNKgcHLipijWMcXEkygDymFQLLs8p3UCTLvxF6LnM437EzKY",
  "key17": "2yNEsA55WYoR3Waa6d2yWq1SCfr9z4uHACNwFXVDoJ5gtGTcvhZ6vJ8CW5cghgzREfBQMasmFZCTBPKjXbumdxCv",
  "key18": "32sSJDtL6D7KnSp1h7BqVhKPCR3VSpjb75HiL2cTdi5x98nqqmJmxmGPQPueoguf5JSPnPXFFgRLMfJWSjYJLZvQ",
  "key19": "5MCYAncSFvsenZfKeH1xgYjq7VMHpVSxEyDBtuuRJC8kjb6wEykaTTn7MonBACXSgm89EJCDvPfgRKZzzUsbgUHA",
  "key20": "2fgALAyJG8Fr9S6FbHTnp7kNCygpedJQ9MyA2NLbvCuSJnPdqZwmUyTXPvFJq24q67Xc84ZLoEa14DQ7CQLrLRX2",
  "key21": "4tw2uebnrnGGHQEdwTTb6KwkTnkWjhtBAyZoL3UdXhGjqeYtuZaMc7cTagcijM379Vc3feEZgwvUv6TKc6YngNDH",
  "key22": "2yeMHjKbwYEGLGS8Zowo9jkHMsjjsbqfRFoBzRFRZMxTKJWnQBVD3AmcGpYr8zHdZnm4CDf5xMpKonSmyHB36M8W",
  "key23": "2GpxnQdw3p4fWPuNC3FzPHJdzqhnMtjLUqGKWZ1pn89Vz4DgfvxUybvKLGU1MBCWry4L1EeZyDU1TSahkB7Pihx",
  "key24": "5XnURJfnAJ5ihARJDEbbxfJdTbbc1s2YTVhzZNevaHfF27aievXYur7SsbVk4oBSqkGj1xVV3ZoP8kfWCAVFZk5w",
  "key25": "r2MW8EtnXyka979isLEDy6FcKWuu9gzTtd6smPkZoNyZTE7wWFszzMkKgYPr4cfycQ68Lmc32Y8kbLqMm2NV5wK",
  "key26": "3Q6JeuLRrZ3wLmvmeu1XMpygvZBy9xJ7K2w98Unxgs4NBYEdcvcCAiEGQWz6LAP2g3NvVxmibmRn6ZbGRmMD6QyJ",
  "key27": "41XdZiHdyEicL2ZxfVofegP9gsFRyubUe8YGqU7Wu5Q5wi5NgisG4Jb8i1h5QyzG1Y114YzUnqfTtnWkaoZjW8Nt",
  "key28": "4mYFkXtUofefhLkXXg8VcWxjHUs1LeKobMXnVEeeyTddGsXhwbhyKgBbpP7sCXVGoZwM3PJS5RoEFzNBXYa5L9M8",
  "key29": "3qYAS1ANAcwy13q3QTY4oDrsCHkCBAMiRfy5t3EHrc1Zx9HBP9v9BDqJvuZLB2kNsayHJsqcyd8Ewin5oehEY3me",
  "key30": "3fsRqLu9HihNaridBYnxvLshbWTaSvg9bmfhrRRCeqkC5CoGMG68xeGsrzYPr3VRLgRjWeizs8eGWcPA5ZkhKqZQ",
  "key31": "qUGrPxggNRmC6HxZDHvhHfpDb9pydq4qWESm3zBzMUyuQqx5zgy8RUREqJ7wvAb9rbaMwbUUMUug14LwXwDfdiS"
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

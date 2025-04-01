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
    "vnnuaN3pYwJdEn3fcxhmZkFRiEG5fyGXdLoMyfN9TCVdgTM1CM9ySsKiUDmvt7MkMmTpr74XLtMaj2Y85KkZWHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HEWwbo3gcMdpT1YRYokxkALLkEa488kRJSAiYTJDUDVFTtykz4VxSJtPmyGHQcBRTPEtcn3ocn2oeHdmYJeuRGh",
  "key1": "4xq8X7LSyzNCtF8F15fQm2LYFxraoRsHUbc7mhNQRBBuV6hsMsUrpVAmNanP7PRitWT8k7HYuZ1DeRbmwdAjKHc8",
  "key2": "3phFPYSygt6kxkjNYDghoPgq5h7DDBMvUJPQYBLyaxQbiGVAk3TnLLfXAX8JNnP1qsXrjZkJyG7PCtfRjJxYd8mV",
  "key3": "3Qgrg2wu6A92jqb7D8YxYGLq36CjaXxQbm5Je47rbudpHiCK7gPFj8BjWdtPJAAcjp2hiUkHpKAJxLxoskioBEAp",
  "key4": "32M4u1KpDq6WMVTCdVB4tpU92FqJBFq9nhrrmtwgLd4vDsaWtrG2neDcWwbUzXfAWA1qq2bxJjEkcbCSzxbMNpDr",
  "key5": "2YFLNKqPwQNwZcBmQojoBLHVJx9Li5mSXzkNtxUFSpGcJxqdzVCws7Y8WSM6G6V7mYyRyUjccUzvZorGp7KogoYC",
  "key6": "7UBuFufXFTwxV8xKtYxy2i4BsAmnnZAxiTjzbNUFn13WejbZKNjG1YcdQqkpRu77rk63cV3bt6oEx2WABCXE7pL",
  "key7": "2wHjFJdKpeji7sPd2kDJq7eaCiAxukkRnJYN8xdHy5A3zLLLpcc9HJafBcxpt71jTMGmHNMkCmFb9Zt4emdy8fbv",
  "key8": "3LmDsC4SF3zpJL5vWJtHPJtDnFp3QG9YMHjQ9a2eutVmDrDXn9Rm4eeFaZTBgEjAqg7LyauHyvSoSZcdHUuihbNC",
  "key9": "3RBh3oE5zcU5ShQ8TWoadYiagCaV3G4f2JZJM2t5JVxPSfMDT9zTKHotVijcnqqbfJGjJ6oRAsCwqC3cKcvFaZfC",
  "key10": "24qEESss7dumv7pVt41KWbdXGtwe8ft4CN61b7DAMEp8pSKGS6pnje2iazUBNpuaGUFLfYeg6GHn22GRCDpTd7At",
  "key11": "F515QsiTAp7yCq8fbFqokAWb1TcFDvGPT7cULXWsRUUbctNDxou2aZcjMvYb5JmXEpBGJheeyoQ3eXHYWwFaCQt",
  "key12": "4GTDK1VpV8Emi9rP2YNb3xYeKiQhwMz71tEgPZgJqCipsK9zH8MoXAP3UTfQ6Eh7UAfSEPn9T5sY4SkuiGvPzkcc",
  "key13": "4Yp3rLfgtaPxXf8V59sufxmL8Ei2FUMxgSYFuH9PnK77usRkTb696fo5ZopAWyKKyFkiqLR3sASbS6Grbn9DyN5F",
  "key14": "2HNNSsD5S32kAKMS8L3dR2LWH7ek2pWHkFdVuvnkNRt1C35m65mzRXdi67vQ6vi4yPQKH8ZTe5ywBtyKUk1dJFhQ",
  "key15": "49YpC2huqoreHSY3YPXdDtCKWhSnW6Aqm7jALpEbypS4ArVdimWoXmyyC26xDqNpz3gEMgSqCT8shiSkAfUQNfUz",
  "key16": "3Ra4Eh4sRtt3BnnpvABoMxfeykjENdbZiYuABPip2aU1aTFc1P4xeKj89HxngvA1dF1TocPx2QraHiE1255Ph6sW",
  "key17": "6umLboeCEKUr6WihmKCgfE3n5xXBcSwYBuhLvRn61bZoBVEHv7uijvWoezFtEFJzd2pfezhp1cvpmDfMSrRqafK",
  "key18": "3JvkhguR8NSpAKxi3hqut5quc1RaB2wrShyfBMxYN3sxafp6TRw1zXCHJM2pHVau5pNX8nHoQCnDgzDYvNNsXJQX",
  "key19": "cD2EuGtv5UN7wjUQitCF5BY1zg6X13PXyTPsQG4RwDSCDcLiHtkYNwRr4UieK4TuAMFY43WXY5YTA2QJ8L1HZv5",
  "key20": "3zpnZJWfUmhjLq1qk9XC3igMxAh45kudDtXptATAsrWcJKfn33Ld8wUnJJiRTnEteVzLYzr69gPgnKzdbitjZS6m",
  "key21": "2Hngry5DNXgXwBsxeKwUgURawFQmT8AZVVCNqNLfKpNAjPFAussFzkjBx35qeiM5Fi8j3ktmGtt1T8tNhKvxZnqw",
  "key22": "2cecTymXsWpstMxAPVK6gCURqPnx6P8cGqQDQMLS4N2ptjZNapDv1wAiK3iQgQ7ELo3dJZkDDurVbwwzoFtwAd7w",
  "key23": "3UJFxNBgBH6kbAzdPV5J2Pu8NL1gG2FZxkHJfj2zA49fGXXk915Tpnyfutu73Nsu3mdzN3K1nSdXVvD53awXtdL1",
  "key24": "YR8aLVoDgbfAvV3fy46wiNE2eyC1k6hpFdSLEfqYn699w6522dmX96m9CHqw2c4kMiCZzKduQrRRi6UvZJwKBff",
  "key25": "2HXSmGjMx5LdhPXkSR7749CAMNdSGqGEeyvdKYNw1z2DRyprYapxKVH6hAvZCT5rUGvfvUZUVu467WMuBVGwnCbp",
  "key26": "5ULWRNnHGxf5qv3wzPJzFMxGTTXWJz6q8L4N3cEV5wSoFKCpkcyWygv9eANK65QgrmQt81k18XbLxGkUnPzxCcxh",
  "key27": "4cNgG5NoFE9PBqj2oi1xfkJSptjDxaRtidLsSQaWzr9oqyfqvLfAZYCQnCD41Rhx7FNVi3ov2CKH5DDnix6mq7s7",
  "key28": "1JFHoc18prqZ2ESRo1EJhKpMGkH7nS8igHAdpbKG2PtVYpiaxknjK9ZJvZG8S9Va3ehTRo68ydUGneDA1HbLqCy",
  "key29": "66zKcEGUR6ZyTjsKeCojh9b65YNJVJBq9mUppHaTjZqnXmpUCUDAi7Wzj5br97LQ4f1YNWnNses3giKmH1WyzKRa",
  "key30": "5qENme2Nn7rDAUmD2xWnyjh87w3c3V7ztFiHMmhZDSNCY8SCd26GNE6ynqwC58NdjJuHo7F9t8NSaHrwUcaUbGda",
  "key31": "L9QUTUpti34Xys1ETCcyc2TffrfJWnM6jtbjbYHcfsuAscJ5dHZ7ves9dN7Yg1W7UMfBg2nesxhEHJJJPPgmCVn",
  "key32": "2sp5UWa2NbMRmFxwFJD7P2G34jxzHLjAwRweUQpAXsriJ8xAckF8A9PPx9Zexf8xduiHaashpy6nDTuswkCMC6rm",
  "key33": "4wWzu69VLTYM2odHr7j6cwN7UYLXn7SdJYLnzaCGECWA9qEaDpMLxn2HzRTjsd5aYY6oi48JHSUyBafKHDQtkrSR"
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

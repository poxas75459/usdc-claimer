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
    "3UWi8qAfZuk7SU3NfittXJHWFmHiLuo5Sau7J5kygTpyoJ5NaEpVmcdC7Q5YWLA44frhhi171nzE9UThD1vScUnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfwcLkpNWRyBGimN67VNYDgYxia2nvMTrrFcpbGbzeXWT6QdzkK7MVhBm3hFAKGg8g3PeAKTzYZaTJ27rykyYVK",
  "key1": "44FHuYBWvKepjoV69KdkyVGkvNBpWdMBRVsuM85ACjyozqmyCZYKn26nUmErHk1gWLRnwEw6kSJQvWwxMHkjLCbm",
  "key2": "3gM4Xo1ya8PQfHgv1uNebYCbCyoCg9YnxCHpYcdBRMr4pjyfHpNYiFhChFcSJ69N5YtBLv587eBvNXuAUjNs2GzN",
  "key3": "5dxfCWo6dPvXfMudxBZgWPUtjQJhD49yNtYNivcWaF5be5uMPWJwjSTFw2E2g98kEAt5kpWtRuJSB4Cuaxam6KkR",
  "key4": "2ruHrymdHjjuc2yFikG1BfcVkZeWqjWD2fqb3LFBRWb7EbMfMq4gfj6r8ut34achkR2hdq6AYdwXbURRjoaVGC2A",
  "key5": "4kvfV5xTzXqJKWc1z8BgVB68yrLfpWYfVEPE7nedbE2XPVVfdg1WBqKWAGAzZjaAs8hQxskYBBphZHNtgFQndU7W",
  "key6": "48GiqTkEZBe72c68VW8qXmwXc3Ubq6S6Qrv48q64NvY1g7r17C1mzjQKFSmWGVZGN9sFokxfgXyyBnTCJN8o4bre",
  "key7": "2g2QFs4K8PZSoiiETJkjDC94vyJGoBYY2vSjMgrUMyop4DXoYGYKkSkm8jTWakELgy3T3pXbfcHazDHAmQCS3caB",
  "key8": "3Zb1rNDTjqTz9HcE1dv9VXtvYMrJrxgmMbAqCPasnMYJ9b8BezKhMTtvMaeEJL9mBzf9T9Shca81hV7uzgHVWb9C",
  "key9": "2jpK7PDUckToYPpsRC6Y1478EwKz8j5ShXUZXLA6a4hTQzL1DvjVfRHg71hk8Y6YJu7tuzEFQRrug4w4RqVoJVjg",
  "key10": "5KvkpARESQNtoc587Da1KgFkppnqjaoJZHij7hPxUdmTLkvktgwaHjxmSEmZunZBNG8PutJ1gFYawaMTFA7VavXB",
  "key11": "y1iXiRwXuMcoZB9rQKtb6YmNutWPG2MxFiFsTDJfYrYvZusGQhoZiDFPpy4DzyeFgdT2hYGvRLH5YnxrjnvX96t",
  "key12": "23aJL4iubDaDGCRrYzdZCjU1ku9GLWjzWppvuuKDPSk9XdJcrMUf7LmRWcHr6aoivk9sxEMHy46EKYY4RXiEr4uy",
  "key13": "BTkVS8RmVFawKTgeeUVfpFbEq9n2Y5y5uoVTF4sMyYhA12q3wqYqFj7zNSiNiaDPTMxbHJPKFHyTQYjp6zGtTaL",
  "key14": "2kBx7kvBE7EXXJCPALHhiczSmGAdrRCMe9wjuhdqBHtX55RtUbCdijCCp5TapKUXPUzR2hbDrSpYH49YNnDxj3WC",
  "key15": "3HMYBqv35eR291wST9jBPqmULecizzjZx3PHfNqM2PPcF4QVy332Ps4pc35epQZ3Mdp2s8yxEoczKWNGgR7Jz2zp",
  "key16": "3rqAESzp3m5BXSHuF6wLeTJqwDVrxPQpKEvTN5KMGiAQwDCncz4VLGMKSbvjbCdA81McfffEQRxxN41WpQjBskYP",
  "key17": "5VP4W2PwSUwmiedSvRs3nLfeMuFe2afRekwRkH9Gk13TYFZ94CZN2BVPSn9L5LMSAMffwRSeV5pynaUqPT1ZqCAg",
  "key18": "23ac323Ek2m5gz8pQaM3ErW4CXbKhJFu4ykBpboiJATTHxoiteNNVCT2gC3qbsrQbFiXbH2PejwTt5QyGM9L88VU",
  "key19": "4gDEN8WWgYtb828D7WnPddERww54WxKxdRjyK3ngcgUyNWEPf8eUHUhAs7EsVPJaxRdMidehBBmqzAFKCaCWBM1W",
  "key20": "AnXg7d7b2YU8jLW4faopHvkqrJarzjwtecH2rHLxXr44fKqqoR12KVt2be8a4DBsTFeYWXj5E5KYSU9GcNX8g1H",
  "key21": "5MPRJPFt2kr41N1dPwgxGDfs2CqLVs3EXG2jVMKY2XedrwXRiHxRERCN87L9ibK4tz6MMasmEBsWpwvB4Kp5nsYS",
  "key22": "2ar7exscjmZ27nnJDbWVDF4q3LTmaAwxwfh1m4EEMf1GFH4nnXcetRfQxUjLmg7LpWPCVTHuC9UG9hMkDcUMSmsx",
  "key23": "eZqjPT4KmzihoXobqB9zXUksk4PgV2VRvf6VSus5q1JegUt8DLSNWh4VfRhoaXLguGVowpWYEax4BXGc3rqjVZ7",
  "key24": "HALrgbiZ5y3yGpZxNwrFWmhZrYLnaHijwDetxPTwAqcrVjNbPwgmcxzptJLrXQnVnPiwhVaZf37zVyJVs5rGbC1",
  "key25": "58z7PnZRZaB2G2PafcbqWABcnHQCyLCVtH9P4NnLaZZsndyEwnq4LemAhHGAfNK11r7mg4Yk1NzgJJcUyoaMdXWV",
  "key26": "3U2fg2aW6pZ5ncpFe44RdZ5TxjUzQMGLAKLwoJhiybGD7drCnhbN2ZhZBxzNWrT6Kmk7Cm4Vb74w4128hVWBBwDc",
  "key27": "2QZSYmBAN1CaAT5egyuoCGhVCkuPyRTwhZyaSyLZ3Hb63qsSdzDRUX8TDd8zHF8woZBsdqZaYf3CwDf6zXH1grsh",
  "key28": "54teBR9RNeJ5n7KSXLNRuwUzM6VDUpaNQdDYzkKBfbWieEqAxqjqZQWW6yytwBxJerZmVxPfznNz6XY3FEjzBaak",
  "key29": "3KgLdCPU2Tbvz5JbReenQPJqLwQzSmyBHuFYdj28hX9jSN5N8QASyA7PimNjPrkGjACUwQ3r7xqsoWDtsRerkDNP",
  "key30": "5XyhKH13ZsmDa4umH3sb8w55bHeDtSnm5CNRQSLb2iitxP9Gv9WYJaAhy3vQ3fyF8aBt4VhFELcPMLSxHJv36LGg",
  "key31": "2Udfbhu8Pm9dqCZLZVmeLo9puTxey87qNFP4eNdBeB5sGBTM683FQnjeaSJ7sgCNv4DUkSka8HskPHnwEzzVpkZB",
  "key32": "59ANjAVJX6jSNK3Z83KzSiaPapGU463jtzNGExRpVZ5aRYXVSdpNBUR6qxHHPHnkJvqUPZj9SKAbngn4wDhEtaSE",
  "key33": "3AuS7WrSUkxYwyvX9hYRoDvUT7tm3YYUvD3ECEVeCgTdHjVMAjR7AgmXuGRqqvXexG8o7Njvp5FaTbjxNqyeWTcf",
  "key34": "4F9iWyg27rjG5LNM3f4s9aSWiFfxXJS5c2X1erSFgdxm5QYt46kcaxB3iJaiewx1eDjxaL2hyRv6o1u6NvdS1sex",
  "key35": "3xYQrWkoDZuVJGoE5dGeBYk5PFL2Z66YVdDqfoQiDtfB7SBjZYxYWnvmMzxjp7sHjSMiuToGRGmT1Pont148mfBK",
  "key36": "vCgtqCzDpZxz6F4tc9v5S9mF2DARmZRYajUbKqfDCB7ovPfMwkkDFBAdbnS6AQX7EVyeXHCe7d7hbZYJMgjwmbQ"
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

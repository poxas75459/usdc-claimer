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
    "5Bw43ZeEsH3JL7c2LnRmcKXz3tzMw4oUW6C3i5CFJ3oXQbCLAK5TQwDSmhWFyZe6VTvFbuCkyx4Jd2yScHS3Pymx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hq9e6rJU3MfrGdH4KSQjNgN74LZa1379VwfHCadLRj4fhSB8wmzifFKEi2HodFLJDibmR89iNjgUYzMR5WMLxPe",
  "key1": "5wGpFQsbAq2cvREN2mDnjBuMYFeKuqotF3bFuvwCfYsmuPfHebkZxSnQYnt1XRtiywDyGUb7tDN14DfXtpWnxZSe",
  "key2": "3hbzx4cLrWqwkmyoWNgiXFisVovLN68J7rxefLY4yTRrG5tuDnrPLaxSmvuKV9vNW7oP9H1VWxBF4s74aMHDhVLh",
  "key3": "PzUyhu78XwYqnQbhzgB2n1ZGd4GX2kGjm2rfmKGQRCxVspp2wgGT1HuCYvzfoA8ZnKwEVRmrCSqvdMCKcnYsVi1",
  "key4": "3xv1VMuRsdy3iTBuDCipWC4WZUjiwrYqrDc5uK4JvShMtjW5TPuaLhvDaYyrRiL7CeT4sca9yMidiEb84TcZEoHk",
  "key5": "thYcbwGKwppV5xJS4qBUXMtDRMipnddcazztaraiSxakaXLAXcfPPvZpUNubFUSjVWGd2ShabqRjJ7z7u3XFY3E",
  "key6": "4PR65oRRSYZvHScH7EC5CvxCMPQbmhPvntH7NwmxvrJBKFaFwgjud6L5mPc9LqdhMmFxgZjfZfkB61vm1L44YMbp",
  "key7": "5qz3jqzyc5dVYbLwvgJtytAdXTRzz5DahYgokrpL8rbNgf5k5GVvdGuYrFC4n9e9ZAspAYmcSNKJCGZ5J876zstF",
  "key8": "2Jcp1vwjKj7GPyLyWbND19Gj5gq6sqyisYfgQ5rqoEKnBwnNz6xTYPuUB78xhYd9s1kJddQYkknhv58AcuqboN4M",
  "key9": "4aaWmjRjz7ejgjZGn4UjFL8YU4fGssJZ46J9VaLcnr3B3URzA34rVvfWVquGVMcAdEZ6nwsencnboVfB1hrFfUyj",
  "key10": "5Lnd1LAhh1d8kdk7wNLks7im6ASeUMbY3jhVBQH16Ssn3q9vZQicY2HLStXtZMaiA7nMYVWfpf8WvcP2mSsb5dqn",
  "key11": "4x6V4n1j3FtzJLmuFbT7TB4SVJXDw1jbWZdSLMDMC1Nk4vzab7D3vH4DNyaC1tcV6Jo4uRqhm7EuZagqL8DfUaCN",
  "key12": "4Qugf6Qdh6zrB7wypZjeHEP5g1n28wg7mfJLfQWcC4ZvTHRdinR8wVnhWPgAHCQEuWrfMP88WZWGcs1GuECECa3N",
  "key13": "4DhPeKBns2MMvYNsQ2eTF9JgejuLZ6Xh38AeCVG4AdjF7N7Fx8otYg125dSKjES9qoCSesUqs1jakMeG7HwgAcFf",
  "key14": "49oKuE68B1uzBD5XKien6pPg5h5p45j4tsa36oQzuJzsv8hFqaSvpfaB19kpyig9zXm6DrP4EoNonGGJ4exPAySm",
  "key15": "3r5p6iYuRNatrcHHjRUZX2FPefCiRQzjERMv8Dj8JiJTXeZTDEZ5YeMp6mv21Se9PNKPe8WhWHRWQNgZuuNbUrrV",
  "key16": "XgXQBta8dwzvbxuQShk1R6tbHwM3ucZVZEDaEZpWpCCpvVCHb7jtRA5EHDkxheb8PAGqxUXMx9hp6oXFDoF38yd",
  "key17": "3uf5FtEuTKBJCUN9i2XHh8eo586H9QMdKnTMCuz14xvdp2vQP5KoXbHjFF8h7XUxkYc5mtTo23bWS27JL5BkN8ss",
  "key18": "QDYpxz3fqkiievTiKsDQgJcnCYGpnKTcrMW7vLWRULtpg1VbZNcLwjBrUpo8em9ZcpfhqsK1h42aaYEvZJFiszC",
  "key19": "2zTKPxUBYZFGW8qP67BLbPpH5Xukrqt9t3zCDTMUT3LpkU1SDB9CK5t9vBZ81QpBPvYjd22Y1CFkrAuro47MiQyJ",
  "key20": "5bpSF17UsTVFurY1UrXXPoCviFeLSNhQdZfGjLm5tHZP6B3LtHGyFvdcs2aicsWWGp81ghxaQ5yKvxtRrbwFwFuC",
  "key21": "3uZrqSwJm86inLpHNt7MkMAFVQfAwEqR3pmgw7hSE6cNG1bcGZMN6K7d1s9ZKwpcKENKie22qArHmfKnZnANbBXm",
  "key22": "5FWSorqnAFKgTmB28Gdsii1Cxahp8LDqYCffPdL2s7u1yfBcV5Z51rSwtMJR2h8EGM6GHyvfbMD6j4ZAZQH1fnB5",
  "key23": "2sTYxX1a2FCGMSv443nSeJchhN1xGQWwegS7RZ4wVLwi8t7xcmHdV618THwRwJLwnprsNX3foDpx7dgZV8B739sL",
  "key24": "3LNQ3e5wWPPD5EhT8DwYZBSQChjfe1mCdLrGVXh9kY35kEUYY6wHrDxEwf9XdLHowzs6fJsWsqcvDXwp3rKMdfDb",
  "key25": "63giKXned35NtooXSCtFLExrq5ptPWDgUrLQwiqeHBx2ztwNxudT1ReiLJosB2UjLRTAJbeXBiBr4JogFCFQCTUX",
  "key26": "4dLtxbUmYjAkYYYHoLWn7mBNkcaYssYM9VvhAufYHD4572bvVjYBF6cDT6A15VbsYhqg1LxUfb3Bf88DbSyAqRiH",
  "key27": "2bhztyB1EW5QrpjPBb8JM42LyYz2X5J5EuMu7Z4WkS9VxFAACu18dFKE2PrZzUyuC7Z1HX8bnPCRsHtsS6xg9Qvx",
  "key28": "2E2fa6reJ8Cos2ppGG6vczy3RaU3zbk1zn2Yn78j5MeYcE5BZmP1ZE4QvRMZhFEGpfjKapHbcsPhRPZt77okcD1E",
  "key29": "3h97J7ZQExdL7X6iVzHTF6hQmL2NP6mb74KFk7Ee6zim8xEBbjd7ThykLBHPun8KsewEjwHBVgAQcPzMAmckom5E",
  "key30": "cTd4nzZmPzWnTQXvr7T3Z3QMgwT7CMSyhYYjxgzdAK4CfyRVJ9noj6KdnbMjXDcGpzrioozeFD6tB8SgHLsuxrB",
  "key31": "3rSpVB99GoPQEgu45aWm9UQ4LeDg7s4u9XPbAuiPrWJDEJCEExKqWU5NNZPQzhpW6RE3tLjuS2thf2dkMFDt8mVN",
  "key32": "5cjmR9zBhpLfrwnFP7JF8noDfzTr6HkDxVtYpzfeJKjrsw2UUp3xUYtGo48AmDg81bWJGmztvy8qK2zfYz7ydKMi",
  "key33": "5mMkCKJyYPr17XzHN1p3i38R69HXPWtTw3HKQ1qRHaRisyfiaT4L8adTTqCGn2YnFRmaGNHT73FmGTowfBjgnvuv",
  "key34": "5EcgBfNCyt1dc6TmzWSYkin8UnfDnxS7qNcg9h7tHS7xSbNKczznJFVfcAi8uq5Rtw8M59SEZLiWJoJqsUtcgzBG",
  "key35": "5DjdKrAPkApigvq7c8aWFmC1QdNgCf8F3e18NPrNW2nDbJNMfgvCB3jhL1jUGQRCGdN88bUV8tzZ7tsu3qDePuka"
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

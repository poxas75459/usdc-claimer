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
    "4oEsfuCrkXNZB3zwuuCir7odEaQAJgSKoaHnDZTxp31Z668cxQzQH9JzojdxJtRcjGWTuMD7nAwR6AoEM8bN6ptX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TZS6b8HeWPxkScmic8XWNyJxAKMyMVCdyqMMHfH7SShmJQHD9XPrUFv8ZqW7S9Fp38a7gfFdE4uFZwbWWt5SSv",
  "key1": "3SWdA3cm8HJq4mnA9qcoKHjJAB2GZ54Rx2KBQj53pXaSs8PYpDyMxLSbLHMMqWTromM4pRkiexppKJ2gjDMJKsfa",
  "key2": "LXeF2cqxWs3JviVY1u8UCNekcFTCCh2A2GhGEwjDjnBpsWjgPGnLN6LR8sMGuekSVXtQbVZxgQGyKSV9RtXorbf",
  "key3": "FE4jQxCkN8AbCLXh2SMtE84mTwqLoQ6svvaNJbwzMJzxhwQTtnc1ufuKjoJ48J2AxKehBCTt4zdAD29HK2rqhh3",
  "key4": "5JzLEoks1kqh4CWtv7w5iYRKnRxrQsLR6PDe8GaUguHvbnFwmQzCYbtxa4QDeyPNWNy1D1PcvK3vinA8JuqvXdwH",
  "key5": "2fEqjsXYnCpXyXLCK5wtutugpkyH6KVMvQDxhaHWUw6AGTKbVDewsTS3LhZR9CagCaPXGXs9j1MvywuTbX9zRSBH",
  "key6": "52Gegz27G5MoD72aQ4Xc8PF6azX71jBGWVSUp8arNPdSp2uUYJYWEW3Y9zXEGqnQR71zoMto12LnvmY8GWsXibx1",
  "key7": "2xHqfWdW8LpW93hVMSAhTA2nyVG6XsNpyQDTJTMN4SGjw9Y7XNKoEaAikVAjaszY3YigAJ49yMcuLoWExr8EhNAL",
  "key8": "25tCkzHULGSVVpWPwSMsRjA2Ff26ssRjYsLj8Zzum9X9LKWa4dxJKS67eNMs5BMZqWBZ8Ufss2xGdSh1d2NCX4L5",
  "key9": "3Jwxgdg58FCeWfkKw2gMMTySQMeR4hRTefoAxB2q322XJRY8dAs5r7hqCrU62UJt4t1BPPKesJ7jdUXJPT51wNrR",
  "key10": "mxc38JfkAM21eVJvYfS33XSynBcE6nHyiRPjaatmzB5tkxCmEA4cd64Wsd2ud2eom4NracqhYXMyVJKjkEvitip",
  "key11": "i6ecreA5pufUnVwECjW35VtTUeQGbJGQ4E3ey8zGxeWaHxZjk7h9AKcGxeqXZz5et38vJA5FkV4T3833hitZYFM",
  "key12": "2ZNBpmie7XpzY1LABDhauttWdhCdfWu7pESU6amEczXCV336JDaciXT41yoC6fM1Dx7PeiD9oCUmFshLHNE2DKmy",
  "key13": "2r9WDcKdVtmre8GbSMnhnAB8Yxv2hPJZyxrhhxkmwxRPEPZAG49q1gVZ9iLF7zxSoQ7BUmfkx2q6RdgCt14hB9H6",
  "key14": "3Y6TT6B7JFyxgTLemYcFtEC564AWekxFC13mQVfZZ6erGhTB23dhvta9sqCHyfmmUttXPakLsW7W29Ah9EUj86Qm",
  "key15": "5EqfHZooc3MSALtaB4mGt3VhEdAKFxYZXaxtzMcP6FbYw2UaAvt1wPnVHFN7FchRvtnLVpVftbz38YWEtApdgMiB",
  "key16": "5hS7Hvk1pKgSBxZAP783aZV7X9L1yiFy8uxW16pimSk1ge7zP1WAJJx3X925UVzegYw8qZqF6YFgbGxPafgvaYmC",
  "key17": "3GhGHhEZ1U7S2zwFVN6hTWqGkCbNbFkQRks4BC2Tkv2bp8jhKzXXR8Tpym6Jkjt3hDBPNtkuywB86PnXcx6q4DTV",
  "key18": "2jf9Sq5f1w7UWbKaeL2VkuW98ZyNw1b5mpE9D8rdQHGs85QfuB2GriSvbBqPQ6qCx5HokDnRT25TFZCYpPdtqRiZ",
  "key19": "49crGzaBt1sqQj1wVGM9XCEcQKrXvR5SLdywJTGKskrVfYoRbMxvayoCP6c3dFvN3S4GEGTPcA5ehxRmnEH6fsRy",
  "key20": "T8d1xuP4DDCyqQpv9fKBFofUv78HDQRkGGj7AmGHRyW6RcTexVPzNe7vXccCRiksd8SCqqVic63NbenRmnpYaqH",
  "key21": "3D1ykvc7xTYBVi2NsVRJ9fBdvCDipwhc1YYu2YR2zpuyKYhuWsLG3KEiAaiLUr9wRb2yZHTW9dSrsGgvCFCVw4A5",
  "key22": "61z21ypMHLEGdowRvCabSVVw8KbmRA2seDUfMFJD3oWmCjqzd49hxjvNrRHrZLL2AdCdywwpxDxisFwL3Bx7sszi",
  "key23": "3ykgRT2TPEKhxXoqffijHYy6eAgMZoNs8tcRPhpsBLNKNcrytzydcveKisLHVW4EWjPUKh5LWxdb5vKCcF79HKv7",
  "key24": "QQsro8BHJpyCf6TmuQkLTFnWpPbh2XEVaprt3zZ5EnfP8zaaGvxdWFmvocB3JsdZGoCXRyTtnehnFB7P7utw5La",
  "key25": "4Fw7jijASjA2soGGuZpBMDaeT5CKJi9oMPa15iJTjRvEyHTEEX4Z4UfvZT91pgVTdnXcHaXKBA7d76PznngnbrfN",
  "key26": "4WSr3G2iPZ3WJQVoBG3TRMdr4swN781bzo1tuPqXN5ebAWJMZZMksdcrVJYj33AKVarAqrckrvFEFE7hKJv9Fizh",
  "key27": "2hLgbx3Hq6aUJ8ZrZ5BJDEw9t4p27tDzY9sc1xDaqv3ZitgmTJJ78YbyNuEnwNjSQdkhDteUX5MRAXQgpeNRxHXA",
  "key28": "3DpysfVKYyAuaq7JbVnS9FC1kxnp29DzZiV43YVFk5oDyByNvshftrUpnLAsRwmXdA3h8K3JsoxR7Mw5TaAgHjDP",
  "key29": "zKUCHYHxuCoGBG1oj6vuL9AKHzBaioQfBTkGZZHQkQb9D9gdfyXryz3Zjyr69z9HAy82P7XRtinyXTN5uQ9BekC",
  "key30": "5GMtxhmNnp3deBTzcCTf4z2Yj9fSGdsVAm41QRUw3rfY3wadMi1sAxxWnA51jtCBMGZJYz9s4YxKkFWurEpnAcH4",
  "key31": "3cyPd86Gzor9ywmb7xaX9oA6QMPnaRcp2DD7Jv4dnBMEPdnovDK8hUU2MarD7TXhvBHwxMfMf1qGTZvaAuzhefZu",
  "key32": "4D1mYTBBbyMeAgTfK2wMHckGyCPowpjhpSz41HdWhs7jtW1btUBNWHx63T9qat9j4gbY15bBZExLagUiR7dDQiXh"
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

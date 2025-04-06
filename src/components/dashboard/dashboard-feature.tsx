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
    "2YBXrWk3y8EcXA46To6moPqrLew2phALy25hk2bdcNn2PdxUruHNDwXfCmheB6iedgRWpePPJxrxQ5hVoMnDV4nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wakLni9M2HEnm44Bp6tWCTEfGvzqKKzjtCLN8qRd3CrqbmdivD7rjSh1qLqsQxVeMAMYzHbK5muk1vhfACtoG7m",
  "key1": "5PRENLmNHAncBXM6cFDmALkzQhDhEMbthSuDhBbS2KKavzhjCr74LmMEoScVacteZkRss6cfmKZRchNx2xVmuDrw",
  "key2": "5ZHrpyZ8mZRra67hf6WAJixHUmw7ajW848epPTgAcTcWrG4UQBYBikgLjWcPkMh1qLEscyBvV765eCxEgZRX34uX",
  "key3": "HGGV5T5CrHMHdtKYEtf2huoABaNG9KTUVWZYbUdrvgTCTrtCWPWjK28PVBsycs76WMWnEqfEUm5pscJDcLSnmux",
  "key4": "2v5EG8n88Ry99wTuuXjy5PipDaQimLwKAyX3gvkpbujeE9fRNQPpC8KNLQQybMafybcuHzNF2AnJo9ou27cLgPNK",
  "key5": "5yvXtSPhLQkABuP1KBxoYjRKJ264gv7wrsZvp4ogkpg7sjJx6U7uEE2bVkVx5p4j6Ybj5wqd8fjepN52quw6KMFi",
  "key6": "5dGwJWtigWM6nhVst8nBQRny7wnc3qnReEWx62W55JwPxzyps9NWRL3iGztQGLS8ZVm59p1vaQhUjngPs5aE3YAv",
  "key7": "631ZJ8RKK7K5k5Y3uRTMsFWQ1ytV1EZ9q76U3MTsBU7jwArcECyxUkvAVwN4ioUkvhVkSdwVevcQTBLGz4hxcsYF",
  "key8": "363TSe2RsN1uXRZyBifCEM2YfsrsEck4jnU3QTojW4Cn8hkSdRqZrXxTJSvpz6Cq41spvHs3B86AzyRTGDvm3ZBs",
  "key9": "2KivvFgRdphoJMNcK8TYF3mMJAEdK4TYhHcrj16KD6d7ymmd57f2jCfWZePafwx6qm3ZpGfQE48SMzUe1M4YrXaV",
  "key10": "5mNvfux6XkxHjarMayhCXSh6NUzkp3ZSbFK57FwMKvwC8SRrGUFUEpbM89u7LQwmNSEDcNtW5oxpkGEwBoXWq5aJ",
  "key11": "3SEBzL6Ms5Ym13T8am6kXz5J1RbMAhMJJ952WAXNpgVEr1pMMF1rtcA6mWQ2Qr31dqFi9aEVrQdUeCTNASog2UEo",
  "key12": "5pAmzKNqsQ8mabnCZZ2tzs7XhuPM7yCVJBQoxoux8NuLD6z3RRj3xiJqWSusGJeUgnmTBMrPCYady5sNFypmC4jn",
  "key13": "4uCA5H2ehAyXPZcZRQbVC5xEQmz65yk93oHZV6Mxr9RTWSwm5ZfmSnNwgHS3GqPM6oNV1Ke3VunboeP76vCqQMPi",
  "key14": "5mxZ4VwRZFmc3VVoHXcTZPgbTzMtGZaXk6CExTDrVQXyeSgoKR3GAvMeyaAtgEcarkD5v4rdXrWJ2PS8pXviSW92",
  "key15": "5VDB7Nt4rM6ubiwFCpzG7bQL2NREHd32uiqL8MhyH5SAbMyabRk31UQrYvUFHgTcxnqxfKk2ZkvjjjWfazFquKCb",
  "key16": "4QFsARAEcf86snEHR4AvkBzf1cbXJqrgp8wqiRdoPS7E1ezAEueqrzGxspmu9w6vXFP6hS26vhPyS5o4BexP4sok",
  "key17": "3y2vWgqGJjWmf55fWFTHbwmajXco3VcBGkSYXbyydDBpjCAp8VRSLTH5JD8WNXSGRq6YveQvYrzNz5c58j4x89S1",
  "key18": "4r2LXZeLAyspRwdUDNgSNnnDfakWoKRFX3Y9CkoiJf1FvSJvBkUhesSbggU4xV9ALPXDCUUfoyawYGgNHNEc362Y",
  "key19": "4nmqDJbDz2MEiP3AbNuW9iE7JsGgwomEi8Z7yPBSQfzp8fkyXkzhEsQPDHSuueRGx75jeLiLwawMGbK4g7VJtSbU",
  "key20": "4KAgrmRuUMH7hi4zen3NVbWEbb4Sx6bbNDKQGZ15KLpiWcRkSvorV4VouM5TfZ9dWFop3KyNSGYMbErLLEXKvFi2",
  "key21": "5A35iwWtYiq6jPPHxRyjjkmNiPJgejom1tmQeKEiTD4ngBGuRuuqECYVCwuFP1RWAKbknySa637v4LLhFXj76KCx",
  "key22": "2YfGhWbrefsNP1aMNJxCWZPk5ph4C3gBGbH6TBo2M9MBdZCRPFVramYbT2WQjQPhUw6qBHdNm9Y8TBeCUDvhG46",
  "key23": "2wH4mYPfM9w2epJQHr5MTDrXKLtMvviQpHhNHH3qg2TrExpwm81Yj1vWbnm1gfAWMLLB1WdyLiGHX3gqc5R7eTYJ",
  "key24": "4VvuFnyrcBvtfXbzyC2zhmfUW95GnBXoUZTT2bQZ8B4u2JkK88cLgQwMffDt4Ff9KZ6HW2oFMwZcJLko6ExWKqXy",
  "key25": "2V7hjHrXMUUPNoAN1Bp6VzD3eVB5KwWHDpDF7quCL2SsJMXoENWXNxBFNmc86RSs6cxTNe7x8dGAtTMFnDg1mnys",
  "key26": "wb2P7e5YNm5spji5X42nJMFtrRP4op3S79AT5X337fYYCJNrZvH6NnzL5nUz95tunuut9nSMR8AejGYJihbseR2",
  "key27": "5rfim71uqixBVb66VtyraWa3kkMkbLexB8K1oqDYTcPkNbLa7V8u2AHPLiz2uC3rP3FnmXT4C421dxTwtdeK5Fvn",
  "key28": "51Ba4MMYLtj5wjt1PbJqE7ZcKLk7sNhBGebFZqbZXFjPQipjJrEbvF2VeHnLuVmVehXTpo743pZAS5S9i3omwqiY",
  "key29": "FR5TngN3bLxYWND96VSAogn45ix2KmhDxv164fadoEWEnavVgm2DK4GUJ9BbTZupby6um1xYJ4FvYijqgvuQM1f",
  "key30": "35JZfeVNQdaXPejKtxa2z7Vtaa248GsMbzDioNuRVnzetvqiWgBM1ymo2AtcTMWqNBq7dw7J3TPp4ogwP1spJsXS",
  "key31": "3M4L1DdyTuq3r8JyAxAueHEKw328QAddkRGnJHCUXctMWtGqeLwAYiimzVKrAzFXzZ3aNgVUXptFvqd5APpzF6mt",
  "key32": "3Ynsc2qx8BZdvRgVLaoGwcfQVd3sGeh7tyQ6WUBnDJ37hdA4JsUWWUmDebusMiZ7TsV3rcvjr5XPQMbBLjiERJhL",
  "key33": "4DJicTTkfrNdQ1GW14DSCR1fDWjqpULncg4KpXhjRKHD4VeTBByLYow8dhEnYs6CCDhJt6TpD8BBeTDEwdCbxRYT",
  "key34": "5UtAT76AKzPLxb3jz18YbqVMGxENpwLYPjNz7sh2jX4KEKw6KGnQeVhXYxXC4Kwig34fF1mUJAKpuSiWMNG7234B",
  "key35": "3jYTdhmGxX7bDZrLtuf7bJ3DVbZYwbcTdwP6EESLjWUxctFFcBWTkPFSSmMe95dMwAqAuJw6yPpcL7HDzwsyqDwC",
  "key36": "3Zqfp3uuwuQmMyR4ra1rsWcPvXcUVy83fzKf5RfTDpbPXcAFqJxeAmNhJgh4REfjJy3ftgZ1mbWGEWz9czRgmep9",
  "key37": "3kSEp2x8cysewrh5NY2xSfJy6P48HKJ91SjcG73ZgTWPU74bP1M6m99pnP9iyq4r6mchq1gESLQu9ME2BXrEiNLc",
  "key38": "4WiDQm2BU9b3hv2B8wTQ7K9KpFMAE2pHtjAqTHE46RRzCMLbYCrgvSnv6hpfccqHuodNtz9n1BsSXoyv2WW4cgRw",
  "key39": "5U1h9o4BG6MNGXdiHPjkaGPmFJKCDfHSNJ3uZFziiB59doYT6qJi2P5bDQv1HhuC6nXTTdtwAP1L1Ci8hQX8vQnW",
  "key40": "5XzQZNwz2Dt5boPkWTGXcn93xmpp1AdB6qc8kev5y4S4XdDFmAzjnWsNeY6fVLkzoWmSXXZRA4K9j14av2Z8vQPw",
  "key41": "dA81UXWpbzNaAHomKnKm3DGZB8Wv35wdx5eAjSdT4fnE11zuVdpPJvWuZ7aBorxivDRQxz6Y1Qp3DM4CGghWSrx"
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

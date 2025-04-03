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
    "4gf8g7xMbNhxHVhF5Dfuye8fZSgaEhyA1feJA7SAHrhfNvr8agk2vQ9yqgtapvXb6mwivfcQjtSYsqNQaVKBefiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21gWBZNVNAo4FGam8uYZX4jduJmirtpa8r8WMPqLxyx24nR41SQXwwExEmJsN5YEFC1dhScSouJCSFPveYVhdvhW",
  "key1": "2bbCrBNV3zZsz8zvN3u8vp65xHg2PkPTyaPvw8tchm32uiW54UhWesAZpu3FcQiQs1yKTTFfZpdV9L6x8EzaQL9j",
  "key2": "25J3sCfPScrDS8uE2k9suSxa83uUZdsiBHtH6ty95vT1vvteQxGDMHkpGHELK7d63a9DHsAmGXr2NUHDoay2hRD1",
  "key3": "a9hwhPjJzfznvNq4zv1uh2Kzf1DjKRH82xg6vGtDptZ5ARPLye3wNwy5ALaEbZVgHhwucE4S99JKWkBRL5eYNck",
  "key4": "U4pcgCQV5mL997SDypuG5dNsnaF4aLSN56Gxcj8zDacq4dD3qDhkZsBDm67bi9u4aHfv7PCPRkEkhTg9Xe9xXdC",
  "key5": "2N64eegghbjwJDrYWRWCNNPMnwbNHY9RUeeZNQFKTu5Th8jZsBJ67ZvDvSFP6PgYqRmK1eYC3tFb1XwNQRXgtLyt",
  "key6": "4C3tZcNjyw9qHSVLhjMwsHfGn4RosXSFii3DcGmQ7t6EzJxUEzhypBiBFNetHTdVXedXcydQQJrg6xnxhWK6WTMv",
  "key7": "66sJA82TVHLpFkXm5BfVkqxZxxH5XzTmhUk95Mmzx9QE7RDFhxsGczSzXCXzhptUFkzCVsoyieoFeuvDL8wqDwgy",
  "key8": "4DAN4UZva9mxqj1B272QDySAJPCfzqJAgBBXPM2EDQqeFDvrc13o1B1HGFy3JxszJC2WJuKNg3eJmJAKmqKBqjYm",
  "key9": "2uHnwnNzK3bmEbt6PSPt59ucxTihqKA1ytCJSozPJUVfjZUdewa3S7YWcf7TA6NrS495r6Tno4Di8y4ajSiqEVkx",
  "key10": "62EbnfwJunEGAEm1mtJFYVfxgj7XJyTsiNHNN78tB7gTmh5ZDtjipQUgTmZjTdiTUxZu9WNvfQ5pzWadbnoPxQoE",
  "key11": "5L63JHTUACvYTuqbDCEvUpEMXE5gxNwMUX2x6t97tRcWGmRUSWGDLWFNoTHk7n8ZFb7691fuYVmMf9TDmZHQVKA",
  "key12": "3Nz3XiS6uHPSXXh3VXuswHT6NPifm6K2izP9zACLR4GkPe1JZwQ3LcrwQs5QNfLtBC1FzRNRaiYcErUjXSJhQRfU",
  "key13": "eMqcsDBhWR3Tik73BCj2oe9U18QFmNQR2pZoCDM7Pcjbe9bdptx1uFKNyW6tuGZPZjatEEeRKPGWjDbWqbagSEZ",
  "key14": "5HPQ8uZrbE2MRhMS1cw8748dCVrbdqQYdHwUjayEbYN6UKrpzpGgDaqnPyQFWE3joGPdAwinFgZ5MLGhZuXhj3kh",
  "key15": "4U2HXqLjtCPEVvzJ6Q4ssmFeDMEGXRkFCzq9vK9tPr5UU21uAGqZts6B2KpMzsKcJUSq4L3yYKVYvNeztHMsG7rr",
  "key16": "Xb24VdVrVtjh4XXgdQcytT7rSeQ1XPhqMp7W9WrNs6xUuYrLRbhJroVxTek4JsRosDiFhvQL1uDsir5HT4kefmA",
  "key17": "5KYsJe9RjtnFHpPtqWUVtD6eCoRdBNwrafoU3sjakaB2mA6YyGcP3FZvVJWK1YacKajMBVdEqRZbP6k89YAWfw36",
  "key18": "3ePQUVPNEKucVbWxBnorQRdYPTG4cLPDdGajMsdM19FtGwZArXkcpYshZyCn7cc5GSBNX13Sx93t6KfeHjo2bvgC",
  "key19": "2HfDdfoSBpPG2aTE5UFnZwWMuED5nfZs2WJmUgnrrrTBi1U9UzBAxHHJJdYj6ovwRg3DadzE6wXHHJ3JB3sXGxPy",
  "key20": "YkK417ZDcMYxeZEGetnsWhWBRkQ5szDMdZY7cXKk8U5D4orcjMsepfKHHr6yfovoQkkDN9jcWc58krUJzxwkEcs",
  "key21": "TyfXDCgyLS397joA6aXXwNjXc6uq5ijVREeBWztWZqMBiTrmZFsYWbPxG4rxZ1jQdHGUaMVVAnq3dXFKX1gyzN6",
  "key22": "uuJTEAfEVd9uDSw5yWQWyfp7SAeP89NYz1zx1qj8Hdxum2AMjWQ4Wp2G4Aa8k7zv9GUNSGoWDKhdrd4JDKGDKUB",
  "key23": "3A99uibevVVENsvxWKBrqGy7FuJvRAyVh77HPgEKycdib77h6bH1H7xdeqX5wSfpNbCVmrPaHoYXPahfthGHzhQA",
  "key24": "ZMLN4tq3Ftuy5aEHDiXhtRR5xK9nzQq7YqG33bFE2zAu61Bfwy7jf5pLDKhwtQgY3XM9Q8KJKvaGk12o4Mp2zj8",
  "key25": "52xmufRSBUTmeCE3JDii8EC4BY1WqoSL5ipbshQwyLeLDekKvYSQSz5piYCXcYyZkyvgoD1khu1ACr5QJ42T9hTH",
  "key26": "7Ly6UetoEgyagWKDgtcDysYgRXgCYuGMXGjCs3rd7AyvAKkZpxRHUgJfqztA3i1nn9B8FZK92dzEVTD4r6XL13R",
  "key27": "4A5BxTE1JAuicgmrSaa4f3jpHtscGdn6TRyzytYmvQ31T9ckFz4KtqKKjUeNenCWhxpbTCqKLHGgWKYwNoVsyFBm",
  "key28": "5g2aoXz3iPgzKuUwucK53YxJ7sW9YgZF8cPiXMd8v2aStd1U2HUDTXHyBjZpCLyiVF4CdxxoRwa9cyHzzEh9rxUV",
  "key29": "5UrpgTw1BpYEpLfRyBbjCeChrQn56mzg7naaNCU41xmww9hUdmVdpr5dju3SvnCKT484Fo9bLBh1zukyuFJukgeX",
  "key30": "3FrUWQfNpdPiTnLJWtgRxVv7F3yseHnTy3vrDk5fxDTf33xnTMbb4rYSp9ikhnpu2HhzNpyWTmii1ThGrHugTdg5",
  "key31": "4QjLytvCb198ttmbkJx35fSWaJebm1S7zRkxUPcLq58nJQUWHYraMC7og1FLgV3mXHo37oeREGtSrTRi3uKKyJpy",
  "key32": "35kTq18kcXGkaAp1ei4uzPHAGF4wGu3EvSY6suJBP9zf5FcwLhRAxyzv2ak5n5FnqXVtS7PZQGpsm8juaNQpn8dZ",
  "key33": "LWeuiDXaiYN5R7DoKrMDz1ymbwxApVBPdf7YYrASkLdhwRFM8VFMk3yGz17tKWQrzoKAbXxpiARqUgaErA3D9eZ",
  "key34": "qQSHhN6q9FHV3nRpZSZLx1XwM36gg3udTC4ZrE4JZjJz7yDgjsBEWxMFKFABusXHsq1F1nPeZ7hVdtSiBVJ6FSm",
  "key35": "2RGvJSzfFVBYxz832RX9mUoRhCoWhmis3ar64wMX36Lp5cLCw14ArwiZND7YEcR2b96HYWBMtW6H9rhU7pbVrUXg",
  "key36": "4eTCq7Hicv2PBSW3ckkz6Dthx6ycsSng2Mnz4XjcRtkbj9NM23omoYijjj32rYDas28vuHNozYX3inEMBgJAUVtk",
  "key37": "5cm3yhy4Vu6wbTcxwaEDLpP57FgxjzhgdjoWQQTMAoGGW8qTL6qBwLrZrkx28MbAWVqQAEX5JPntSacKCKQSzdNs"
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

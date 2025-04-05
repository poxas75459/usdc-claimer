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
    "5ra9m4TiTTGhonqBKUBPGG4JM2FVh3oPUQXHFkipeky7eBxCX1oiEniqDqioddcq5NCKfZbn2QjdggNXBmkiM9G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1ktGAsyTzBomm2XSxkYozNEzamFFzNZuqYpqgxDXcyWjW58YQh3yLTEhHs43466Ae5XPgVq32qZzyrAVnJJud3",
  "key1": "42DCtBzU5YJVjQXR4Te58qJqZozXs6UFNrywbeHZVhCgfg3nmF92FcGt9Hc346CfPqoNnknGciWhcocWum4Yjj4V",
  "key2": "LVgn5ReMPoP6wisj9t79rVCN1dtcRWcsKADLGwBd4ubN3DdjQRcf6GzQux8ge8KqKtk3B6bopumHwF3G6XK1YYA",
  "key3": "2sRj9SSJkMrqN2QtdpMnGAjEfARzXp3RnW8sKkdjwJaDo6ZkxjS6dQEcqfopKHyVojZhuTLYGKpdVeNzQDnRH6Th",
  "key4": "5hza3Pob5uJTVC6iThwn1YqgiYacfrhP7VcDiDiEBfCMaD7CpB2uB8CrV5cH9XGvjQ67Rx7C6ntaH4zXopAYFofF",
  "key5": "5kcAXW4rtQi1aEXqDuT3unJj5Mx3XCJm2Fd13mhu5rR53cgXD7a1sWEqLGeUDy3dsqF45DsmiZyfXzwG1ziwZoiA",
  "key6": "2XbjtYoEFXhctEUc4x2M6UmgfKv2tRjpHVA9Xnk8FpT5pwrva8m9RVsqJmnucGaZcQ38tLyKj2shzwFJKM4HEMn7",
  "key7": "nvz9Sfm16iJk9YF5XAyrrHb8NRku468m6kNdP6REK3oq2LYwgTRgj4tQncmpgVzv9jxjc6dkiCkNNTiXwJujFhh",
  "key8": "4GvUymXvkCYpkiqLZGdLXjenDTBvSGXQwcevMprpeNjLVQ9HQy1hfGJzHDfBssxE62NYRYkJbuxuT1ACaiGhWNKw",
  "key9": "PAmgH8H4QLKf2Coe18MAiMGMFk7FH5q8bE7tAkan7hUXC3zm28pd2JD39EqP5oHehRsuSuTRxi63RyWsQTMUT2E",
  "key10": "24WfYkZYBowvwszeCQNPegScz5UmB4tXrcCwDST7TvqrwKf9xVcdVDU1FksBt43wKqWPqHuW9pdDhGov91o2mAtA",
  "key11": "4UHABRUQJgrLTYJqyv7bvuj19mMh9WRDNuZ4DAFF9jfn2VyqMRZ3RT9uRexy95LPpL33WVdKkAD3tmi9NMyJFu6Z",
  "key12": "J7yyLHvcRvnoWcNjcVjUx3xt4D64CybfrviKwWJtTsQA82rciAxdyTpvBKTdeijfPe8BEZCsWt282k8wu7A18iw",
  "key13": "JqYZdreTPpF7kjN6VFVXUZJzZNDBCWW2xScNCyjT5dFZ7tRNu4cu893ud1pJLZP3R4JGiX5hN9jQSYrVXdze25R",
  "key14": "24Lve7YdSNo2FW6eEafdTnxBbuTNCx6zCnH75Vt9UwpHBsNqwJzLkR92Q1rcQp7z839n4ha87835U8vRohDFjqfo",
  "key15": "5cAyiLccRduyHiPMRbP2dxMnv96sXXStMh3nofUtnPh4r5uiXJoBnwnaXVr6cYBwZKSAEaYt82a2yT3WmtMwcoX2",
  "key16": "4mnCBRsMtV4jBEqTfimxHTKZyemurMWPngiebWUbHhPBeL2tkq2dBVcMp7DZz6ZCRget84LC1oY3VvUZQm2F1uUB",
  "key17": "4NWJxbUVXS5fEcxNxEuuJWcbGHVoQZBN8REiZ79yPtAFGmxSN64HXNen14RhNRxKnxd3fbjwpSWgix5aiRWQmFcA",
  "key18": "4XnM6mVq6rfgtNb9RVnoVzG3Xdb3qYYGpF4hhhsPCgSWm9jQ1S64W3TCN13BffEKLmJy5P9SveGeivC8cEKXKaXU",
  "key19": "2zztybXRHoTH5xg1ch8p4Mvk1npgasaLvaKzvQeVHz3YTSVjczJXgJrFVw4P5Nvte89yqr9wCAHgNhLBqMTHn9ag",
  "key20": "2zr3ZFzWvUmVfgg5iWoTPKywzWhMNuE9L7GHRwGxE7b7HEAUaUczczYPc8CPQQEuq1Fvta4SCFQ6UF7EfG3AsFNY",
  "key21": "3RiPSj2Wc8eNrP41trMJgwjefBfbz6D5Gg3Z5SW5bLpdvHSB52SC6W2XThCBisKdfie6MK53yY4u7SEB7FG8713",
  "key22": "47eVwPUyPCbxhVJDBZ4omHLeKFmphpwVAHon1mHp1MAsKpSTR7Qpqt4nsja5KLosaam9zd7auL11LQchnqhwLEHH",
  "key23": "5o3n4KX9NmXV5oRUJYgYjKSutRK2vnkkA9QkZbZLHfKGoBKdRz2JYs7d6qBHUAUJFgnpd1b7im5L8FaRFL12UuRX",
  "key24": "4GBtkMRFmzbPY7LYnfRrDoS1qy41pfnbgtBwMWqVeB6ESE1q7oPc3veCWfyLH7oFEFDsxQcBjhFgctTiexXewJfZ",
  "key25": "3hoKLMkMMp69j9pp8b2RpZqyvwmq6FdLiYde8L12g3bBK1NM8sy2s4wzxhmkc9XuTFuu6ejrTqHUvMBFdpw9DdeT",
  "key26": "4mt4tjYgkppj8AKSSGEnDYGSgnj1ZugbmQDypFJTjZaLYPTZsKtpbQi42saEVcwu6atQWrzzfvFminaURpuk4k6f",
  "key27": "3TyGTUBfR7RsjQhq1EuuDYEtD7Ug8tzxuyzxXzAnywUrcC7N4pcMLSvm9dUBwS6K9Pi7qK4SCzTj3Q4DvcwQrguL",
  "key28": "2nXDu6Cu42gWTW7VRDcR7GyQ8yqntTUXMX4tMFhAxVcXQCoMTa8g6FgWYePAgbAF3JPgvD7sZjocK35FzEJpnGLF",
  "key29": "2irbo1WnRySUdQDyP7BnQwsVMP4jkZd7ZXVQr27HiDuKreBR5CpdtfRJB91TWyBBrYf5bDEbMdAeFnyV4x2K5e7B",
  "key30": "5J31VtMRamkqQAa9ZHNtBQuruVBQLXAj1FYLEb8LHauN1UmSEzFHWXZcHuQjFjLbzXYkFA68wHUyC11cQL9bYbJn",
  "key31": "5sjAWpdr3qEuWKSNeLZ1EsLMhrCYKaBhbNcgDhdzT297rMiWAe87LpCjVsoyifGniLWfsVJDyfyS64h34nFJWQFw",
  "key32": "3PQMyyT8cmxdrtN2E6HUj6fx3LXyC5tGrW6Nf4uqht5qho7c6HEfggU1afqMsKHKKBiKLQR9qE8F247qjaK6E7DX",
  "key33": "XtKVVrm6iy8viGi5w2cc9a5FCwpNA7AaryTozEmAuTxEjL7ATjZb3BAkXZTb6Zauu9aRB7j92yTESh1tnv9vBQW",
  "key34": "23se1M97Yqcq7e8Lhe7uxPMBzSD7t4gX2LhCC2dgSS8QfiVd5jCnZZBKJhZkaCPpFeKvLnNoVs7M3ZTYY4Sqbx1t",
  "key35": "2HtzdRmap9VPzcmmrFGnnZcpHyLUBfirrSDodhJgbypPcQRvbUNz57zrZ3Q919uX4QoyKcfkDLZ7ECJR5ByaqRhn",
  "key36": "vwfcnfAp5z6bF9v7YXCTRrtGYYmLf3dX5VGDESgAH5BcLza9s9c6KK8YsTbV9kNtxi5axh3dThmWD4632U68GAx",
  "key37": "vrV68jUHBEyCJqjL1Jc7k2TPk18UpELTBHkeDwEMCTvnxcKGiPFbrAfRHJUy9Rj4RLsxaZRvHg8tb44MfnnTED7",
  "key38": "5YLroWiFTdwYT3ZsShuP192X6k9rSe8P72mVLth9TahFW9ScvKaKTKTB5ceFHsvMCmxqKbzDBBaJMRpHoLKXypmo",
  "key39": "5d88ZX3ijvnChrga5K7EaxwsaC6SfpiMFapGQHCd7nUcXH5wke477uKPoqi3aJUBKYogQfb8gWCwykDyKSQJ1DWr",
  "key40": "4tzVEF11H7XpaKTEeyshfyeysKNQ6esegfikpmQfNkGFwY1EiRpvS1oHZtn3JZJ6mJWhktd8j78DrRz6UWnM85Dp",
  "key41": "26JWaZzH34PvgZBuKjtCYgaGt8YdZXqdMHDDQaxHmFx7XDy4wWtT8EntEGBeW2CsRVVUAdjPiQzZu71CdcNe6cfG",
  "key42": "58mAHFkwuWCuoVUEpfMVoxALopETfLvjVgVVu7afxBSgBd4JmEGn19RdqoYLSLdJeqU2dYT5PKnpkpLhAYEaZ8Ui"
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

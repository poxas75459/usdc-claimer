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
    "5UHzcQpCwnz3oiQh7yMDttqsvVesNfW6NQ1ogfVh1D5hFiqAG1rdSFZF31DExhDan2ViWLxrw6KXQmC9KxqUqeFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oSEM2KEPBVWya4cMTiwXHLQRsqRtJzuQwS3LE9gbruE1oDSv4JPiJfuXZ3UZ9xovTzMcfNz7pznxzim2RrJpARe",
  "key1": "2hJViX12iBmkXwDj2CmWYW1o993S45oZzm5jdCod7ewCXkBVxoUHYQWkqZGBTtrDUrphPtVzh2qrNo6wkQ8autFB",
  "key2": "2AGZiHzaRqKkRWb6zUfCAPPqTKwc5HyVow19djvgP9EStfrWoxX92Gj1vVmdNaQKv19HMmAEewLJLkM6Py9ps89F",
  "key3": "5mTmMQunCVrVJZk5yW7tG91CnRGdwkGZjzmyUZKxXsCE5wyDXcX4sYbZwHaGB22HHb9tRyAgYzZwGiBnCa5ReDFY",
  "key4": "xLJjSpzbNtPcvbjeoML5XJc6rSyuL4UeMT6QBicGBuroMdUqRZT1XVBKm4jMLEdnBoVfmcUJbaJaxh7hK1j1hxk",
  "key5": "2tECTNQdHXaWBGj26rot1PEd6Nz2EN6Ny8HGbGfeY4aibbLytaymfF6zmZwSHLescpBayYDmWUK5MHb2f1a6op1f",
  "key6": "4m66KKRpcjvFFXzfvsaMNbe7j5w66B6dH3v9hbF7tann2mqi5tM1jwVYzC1RSuCk4QZP6xEoNtNo6QcRrXk97XA7",
  "key7": "4gVafBDnEXMfV3wsy6RpnMMBZVaAQjtkomsPip2FWH191nn2YTsURVZJsPDFjABWjJ5DL2LePMxd9CMqTi5iGoBX",
  "key8": "4TRenKDxJ9EnGy3Jj5v4fC8bMMQHU7w9sGANcmrgkeNoddc6PCDNovdeiaWY1huSrbtK8u4gzuqgwKW2arZWfUoA",
  "key9": "3dbbNaFoxzBQa1w4jjkR2s4FJ2ixuiTB5qg1wYdn6tA4a9UVSULPXvDs1NkBbTtsDv7Y3f6vpXwN7qm84f6zHynL",
  "key10": "3dwniFkhBJoGXA3CWDQWkfQobiVqbM1KMqfozC187GBNhnsYw6ohYuS7tsh9kAyEDyZztrDvxqtiZwkYPMb9Msij",
  "key11": "3Z3Tfu3DP3Mcps2izwbu2LhmKtmfMPPHDTD6N2Gh32ACbJWKcg9dWjr7yP8XGjHh1rUpjAJsyH3vzze2KaEJLYe7",
  "key12": "24RhoDah5LJHw65vEahEEwsfLuq9rxKAWy6FTxARWoVRsiftX7yxUHAXdB8fyHeMapdUo5owvHhCcE69RcSST8HX",
  "key13": "2icZ7Dvt5ZBGeHiAvmATBLUDFtGygjcySnQkHhgtk5YaAwwRnDdVEZDbBjwS6bR2esHcvirQRB9Lx2pxHGdTaYyN",
  "key14": "5YyXxSt9wa1BCBxv4bj3Qs2vUF1brKRpdTXUtVFZTQGAP9XFPmauZHw4dVnPQZxJTrbWDRjEfUj8pUKS9yFS48Rj",
  "key15": "fEGAYw9qzLC8wfj1wfLJJMVPmDqeeezZ1PcjcqiStnSiD5TnijYk74HNGjbkEfNWxVTWmN1i81BsNUJkatZf8NJ",
  "key16": "3cnQFgUdf38dgjNwzkVkX3hrxKxBhKQTz5mrRcWsbjFL18x4dRpGxuMsARjCbZUdQcu3KW7Rt8UAJyGnx9MTqiEH",
  "key17": "3hDMeBn59iVGhSqPoECEZTqsBuzCfjosWYTuq7neNwG9B8NnfprtjDtQLVUGwLGbnUphRAaJZETwaXwwYMDiaX9k",
  "key18": "5gCLV2xeJ4Ugiztsm89AmGRjqs3XECHK6QM1fzLkRXvkBpt5urXPEpkD4NNJ3BVSSf3H1YXPJHtfUwUfDERnh4hE",
  "key19": "4pKJYbsPnSn61n3L7oKYymtR2Nn3xzSeyQRrJUQ7YL4uPkGLqAravCiDAB1RYdBgNUfzN2TK3FeeSLDytHHmqQDM",
  "key20": "3fdBkRgJXdxLTPrXiMfErAcC4C4Xb2Bc2jH4UkhtzetwviUrUTvnzHFVqpSfYuuRk9AvcvHAxi63FQ9FMRF6DTqm",
  "key21": "5LPvPreWvvNtmxn8sY3nwggARFXhiTGVZSP3abkDBwbkY7pRAb7Ar8wRM9hjbHNRxBCJY4E3eV97aq5kgaKgtfy9",
  "key22": "3ojuH9hLuAFfqbDzsT4FcNvPXbozswFbqfRp55chXqxF4oWniNLif1q5KVCY4PoVDyBkT8zXnuEEzPURBRbSG37m",
  "key23": "2W9Q2Jcq9ixwdYmbgmTmMiN45HdXiQbK3fJ7zabmVP8vNPYkie4ffxw4Kgd2ibNxn7qwfkWCWTVThJrvP7AnLgmk",
  "key24": "3ErhaFffDBkSJ8AX1DToCrDqBS5yBJbVakNdw9Rr6a5wC2x6k8XUh3kKEqGpL3j3qaK3qwXhfGQ5CjsPJeiVdADN",
  "key25": "3NFPSfGHcs4j29fkaKdbJSa8jvrNLAKBthMJrammauRRJ6iYXp4JoEC7bCPcH9wYAwAet4w2tH8PdNWYLG9niJcN",
  "key26": "3rWyMDgtrcTo5HEv2rrxB4pURthqkJXgnJEF8xtmCSL2TWPG6Bkt7fAzoH3U7ZtYKHi8VDPgFoHC3shMubx5qJ1m",
  "key27": "4YjAGvy5ziSze45Cv2e3cwgKoaLAQroeuGn1rcevm4vDdc45sLJuDmURZfUinwyTmmN6SeaNpxQmsX2mHwvXBJZL",
  "key28": "2oen3ukim7oA5TxXjtbvWSLAx8LbEyxeRwgo321UGtnHzZLoTWY5uw9yarWHhMQE5sLToRKm4J5T6pakY1VV9SWi",
  "key29": "3U96dAa2TQAnNAhC546F5WARdxThGFj7T3zyGMaqHPMXnLvzaNHKkfdcvbkozACDwpQbHCfWjHi9j21kqi9AUjPp",
  "key30": "4H4R13bQrCazQjAs16kxfNcXV1TmJSdBJHqTy4Szfv8r6uYfsQtHbQoLxjJ6ghmBpxG3HHkhhTmUnWDidiNx626t",
  "key31": "2e6nh76tUZgGBGgT2yckRytMUaf2NnRSi8rBLiAVBsVRdCwvgo7rbdCjhE9zp3KscS7pMCxQmMYM68dGvyjBqFZ9",
  "key32": "62U6B7MVDzy2t9Eh7rRNx5Rpsi4tB9j5GQJbNihQEL5pTptiRMAgZrCGMXCYFt8M6Lhr2kTwKwd5VuWMm48EcPzb"
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

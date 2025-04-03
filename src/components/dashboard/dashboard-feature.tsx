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
    "4nCNYP9BCT29jMo7NoHugs54TogqvAuGW8XyYTudkiG1QswSCpGHcLzdVioK1M9aYvRXTXr3ENnSAPkz6jbZ4PoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56a7Pgga4cP58uLVGMiUeZc8Ysecwww8FCmPrxBcMrhrXPGY3Ajkmbj4CXYW5od8ps67rBDBUY2UT75NnhTKmjCM",
  "key1": "4tJVAxJYzmzcksH4qBtSSq2mxesBFm4Cxf2qJd2AaqGUJGTPUzpeYECTsa4uvHsnmTH4dKcgxTbM7oA7G5Mxc1C8",
  "key2": "4HQyjooMRiYxWpupHDr1v3GUt81grthHXh7Vb52CnK5CoCyuNTQXdX7EJGEEQgeDcc1Aby2cJ5LHzFGNZFUugvuZ",
  "key3": "D1UbTbAaXXCaTCgFTkQ42uTU6Qb9g3r6kaGTsB98bDEtxB8s3wBRXNMzi8DVzdXyZ7pUtJdNfbzZozwWFcQxXY4",
  "key4": "53n4dKH3DhVTFE98z22VNi6Says5bc5ARYc3W2QP4kCVDGa2kovMsLWC2vwdqNRN1tyTRhCwzCMAM7FhRX9hAqcP",
  "key5": "5sctvPyrWDP5Frr1JxPYEdLsQUjDx9xYTEEwDQns7tKpBPp1C7KtM7h2GA5makP1J46rGV5Acb6MX822NqpRTsXk",
  "key6": "5ZWTvEt4Ryb4y56TkyCn3Sws4gmR7qQJwcUaM72XhPuFJXqNSB4mAbfi5rF2uQfHo6iQwVrYbkUvmLSq5fzYRTFY",
  "key7": "vpvnDw9kVoe5z843rZU7APkBbqdee61r6EQkLDy9NoCCgx6FYktpoBnCCg52AV1Eft3tFBTjwGATK4TFK8oGN9H",
  "key8": "8P3gsLXYAHzNmyc3zeC8jsFYVWspKfurhRueGDVnsVruGiFc3cxH12XJVgaQ1ehZEY9VjmxxBAhGSTit7W1eqLT",
  "key9": "2jtyfqxguMa5AouPoWCB8s8LEPfQ734TBAZaZUYoJcAR4JgCocXGjbkcB2Wyh4JRiUiuRXQBokGshDzxiH7kiZ6A",
  "key10": "2j4MEg7pXRP8AhKuTnn6qbhxjEu41HvsoPwWsw8Bc92XAgtzYtWMV9YMwdiDxA8DrH7kauDSK9r2hfxLmRHh4qmP",
  "key11": "3CUX9RK2B1P7tjet1LKcDF5THncT8cCoVk32XCCWU3qjwXGJgmbrgWWFzpRUX7PzcbGRPWaQEpRWHMQDikemuV4M",
  "key12": "kfn5QFExzqh5Yk4Kji1yKNVxyf1JStwivpQLTGp8JJhk23uLgQ14mJBNtZN7gKVmWfBt3nRvrr4qs3Zk94KeRX3",
  "key13": "2gme1hUDr46vffMqSbTbhGuUT98gLpqAMDJkrciSoUrXMwNLa5Xk1iV6ki25F6bnm2hzH76gbyGoCsBMjbDNaGmr",
  "key14": "67eResL4ug67DXUAhC52HjaDFbysCrDYHso2HcnF1w1V74FDUK7VhfvBUHLSy414WdWNm1csJMhLfrzRBZ7BM4ES",
  "key15": "ofM8YnSZXEt2qXr327JJj2pAEJNRqAtUKVucnSaCgdWPjWQ9kPE8iZRTkJTrwTgEBwqQ2W1aBKe5Pxs4UpZou9T",
  "key16": "5nMg47Kjz3NncBTBDSWctstpnqQ1vePbkSDd8EBweznmCumTeEoeDAZcvQRgsvJ5hgepLxeJYnik8pCqymowy2AR",
  "key17": "WpqXxGUgHGkNDx3ZFjsfNMWHKYtKWUt2m9GtdDoWvmDfeXNJTVLuyEvJL9sDMsoL66ZwweG1yDcwUnxGnUyg4yt",
  "key18": "3NWPzHPMsLmcLHacr4jz8QxL3AHhdmLWcaSvW25BWZZ91W3DMvMzAk6Ck7P8Q7stwoFA63nzLug3e3CX5KjotaD6",
  "key19": "RikCMbHyeUJvYFx91j1ZxjpFCLhFidryveWYSzKK2sQPJzjRVhbvmRf6yTsoKvoiwGGQbMWmWg4fiuEoY9wG2uM",
  "key20": "3CdJpXarifvg5mEXjRZSi521UW8iTxDg7DTWrLafUP9oK8EaKarg3zcgNwJiPcHGBCiWkJk5aFXTSBoNAeNaonUV",
  "key21": "5vMffuJYdMCXxDayFg1Ur9ftk6AyZzHszCQh3EzJEJgtSzjK5xbFGnVjkXYLRMMgcEot8KJVcBdjFxh5vKF54HWE",
  "key22": "4B5p95pTMDwbdeUMYJau7pZJgrrnUHvZ9Q99zjeSvcgNLNwUJMMjnzVmqVDH8DnUipr57JPbHUFixUoLBjfy1pGt",
  "key23": "2KU9DnzHFFEe19qgXBjqbkSki4Z6XEDWCexQ5zHdWPEPApqaUaBQ8mfAxYj8FAj6FkAdPijqLm78H2ywH2x5mqb6",
  "key24": "2nQstQuPkb2k7MVLHzQN3k1ymFGVJhBxkCRiXrBxbogCBVf6WaLe6UB9fcNUVcVzVjmZaafvtS3psfGi4nymaJZX",
  "key25": "554o5GFTQBHiXiUs74ArPSofz1EWc5fJNsNTNrq5PXS9ntcDs9y3JqY1yrBcN4uUNKWna588EDuvEDs3MmhFL4Z5",
  "key26": "324fCzSWW5cEs8UuKabQLRbEgiZvDMBKzNUV47gGPu4EbwFVHrAcAzaygh6udcDRRR3YrvVyjBc6QKJa5d1CZf8U",
  "key27": "3eHLihdYzrmYTEWkMPz6PPwvQw5ecmM8GkoJ67AYLa52Frdy3teUkUYFT3ZP1bjQRvXF441FUz1dinzpjxYbhLTf",
  "key28": "4x1s6geLWSwEeRFuMhtpWGxqsqF8eh48JDGGDM2c84XHqQHrWXckL1uZZSJNa25g8LdVZWUNRmVak4dfLT6pRsdF",
  "key29": "4CC2wbbFza7UU45TnHzmMN1wjYEStNWKYs277UbDaHsP2EzMHCvSJXNM59Xqp5nfh2UkqLsaQxDrJqrmCQLz4BrY",
  "key30": "ZxvFhF2QywsiDnKpHz18t3Pz5mCRFZ52QpFTmTzPVKxhAP2ct2dBRFCXuNVZq3PcLmqthNJHrpyEs77BxciTgmz",
  "key31": "4HN8iQPYFaGCrFrWY9mkrKpPDgE9pG6QbKH91U3dA9nK3EKcg75Mp1xgiCkdS2NAEDGsBtHoiyQo2XQhSDPSeWux",
  "key32": "3TATtoYbB1yvzjUz4St3p1ptjrywoF33SLVnMkBXyviMqCKwseTFwBTuhzxwqsPhgXJTJGWQijUTE727A2KMMocr",
  "key33": "8psu4tMgxBWhiPCXZCdf6eCMXS3gD6mjV1VPVTifZcYumds7ce8z5MZRDYuHwb7Uoy3NaXMUigATTGmxqTDz4E3",
  "key34": "2YWEjoKpXnYazGjETR9kdqBMGKvjmzhshut2azhYW7CLASEvXg91kTGn6Rh5PFPec7xumXKoBYuhvmEbgaYAfeeU"
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

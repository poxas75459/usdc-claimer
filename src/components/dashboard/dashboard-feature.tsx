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
    "pgdxjFdCn7wLegVehV5zWydwpFMv7Q2Wsj6jkHxRrc65jtgNwhaSiH3vYFAn4eizaGT9mLiijfM2RuvBvqNWER5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFZ4Q2peMK3gxVkGFTJ6aMfvW4PZzmg3eAmPVYvXvhSUoKrHNFn2USsCLJbscHrMPX3s8Lqb9uKH6tkK4eUDxqs",
  "key1": "5aYzhR6fMgVLxvTjCGCNd6ux1B4g6e7Fp4iGt34T89faX5rxcWgej23uumDFq7p8fUdyxpH391KDrKwKsqRe57Ao",
  "key2": "53As2KkUUjNQGpMspPPJvDR4NhR4GwYZeFiXQXoQyGorgFw5fhnh1SMwG3zEaWjZrkVVtpsmD6ynpi4KEHCqCzdH",
  "key3": "mnXe3mp6HqQE2FEbNxNav5YBsEgPYf6hZ1p3uAVsbCNUJBKpsphcURkkt7rzT7Hx3E2HXNbj5NUp9WeUxKVd9cx",
  "key4": "Wd9R33iAEwSrAhTtQoKxzbLwEfPuRru5Av71GDCZjuwCFTm8prjWs4uddLSpc9SXivWKAqpurpedYZgjsCNSoAq",
  "key5": "7RrXLXmAXSswKhPZWQQji6hM1TdkK8cV2jt6tXejhh7YshPao2GTczrjYKt487bzziCrghACyzENUp3FSRJgwTK",
  "key6": "4hi2yEKJCf93MdqfXENSdTH2zhCL9MYvVEQyRjZC7WvaMHwRQLBPaqTTipACd4DVZAiW59bjVuKRwAFjuSdA7uPT",
  "key7": "3cRDHJos2QkA3rGZVSNbWn87MDXjLGEMBgkeTSfHqj64b53GYdd7jZax6T8foBV2PZAFuRPWnQmfUGMeCCmMQaLh",
  "key8": "2nofTCpmjAgrsELLW6BZJmY3TK4NkXGuvKvLfSRKE9fnn22Ar6ARjMzruHjbjHGiRdK7AyojysGnSJFSGFpe1uri",
  "key9": "5QPeKuFLPZuKZxPUB7V7AQU9E1i6hNWqNyThkRETvvzkyjZLybqsvXGXTcPTmfPanM6hWYwR68gEMxTNs21by2Zp",
  "key10": "JHJx8Xwx5HRiZ9pit3A6395znNiForfZELcKfkRYkFiKizvtxQbmdhp5sHA7hRtuFWeCoAjbKAH5YkGeLTJFCYf",
  "key11": "A1aAkc5CZhf3ARMDg6NpWEtcTxSXn19oarC8KymnZ3yidmCMN8vupJmW5ASPMx3PhfpwZoFDixw9TZ3f45rDyMY",
  "key12": "2pbZcy2G8YKQdFBpiwiBJUhAiN8fSPUWZc1CuSdcc4YEjU4wfVxDN79UDYzJEhWEWEAmPcVXJNCE2ydhRe3Ewu75",
  "key13": "5CjRcCbaKL7Gavuo4d9zZaAbhhTwpmnZLnhTZKm1YUt2TWQW5QBVcqoziysYQiyJrHhMgQWd9bgxaUQV7L3mrUPP",
  "key14": "4EFScBBD6bpt8tJGkPmLj7iJdma4gerEKtvZKRHrQaPH4gbR2VFpnmmAgTg6JZVbSZnnQH1n4tuPynb4Dx7CEH13",
  "key15": "5ex25CSz2GrK9xthETofq5CKPVKZwaU8H6MGmNVi8U4SPiBQuh5hSXKDhg6ePcdStBQcEftJ1ipmRWzd6qKRSmm4",
  "key16": "4d316m4SEnzNz1c63cQ8vvAf4PuS3NJEwLZSBBGtpKtynzu1c46NyLqwJ2ePfb36HsHTobiJ8fenWaC64zWMXVXR",
  "key17": "5RTPWBc4bfc17fVYKeeQYEknRZDNEcMvtdXAad2NQQmxnVncXAQKnaFgDLTaZUGdtba2mTYNqJhTfDGf53bGWey",
  "key18": "5TotpbUvNDeEi1gAWR84jp9W6qNRYC2dGSAqUEXz2em7wDb7Nnhi6eDL1yWm3iDbe34XPX5xdJgfSuDkX7Zrcrt5",
  "key19": "rk25ApAQMrMHXvJ4g5YYAgcS9U4KniCiRYUk9pG6tQkjFB2566qiLVv3nzP8YmgF9DYFETVpysW8tY8rXvGHB8i",
  "key20": "nZsZfk6CBEPQfemDWNsm75BTzW8hEqoZp1QbTEVt3rx58hPDWzf7vvL1WsEMcPoADXuDbdd8aFDWcnPeQajHtrE",
  "key21": "3MrGELs1fX2CqztubYCiynUNtBsrdjhXQh1rXaaUvpensHjMwwTmgdFQLZDNvfbaWahcnMiVGpGaVFohEa1wxGgY",
  "key22": "Arc2v8hXJ3qbYm8N43sfbA341STm2ZXaxoaxFdbDEUpHJebyZwSUtqpBJxGMYZS2YaWbXCR1yPmPPsthZFgeEML",
  "key23": "zmiJ2tMLGQEvJ8BH4nweVy117xbuA5esXfhsCiqqdURqAgyMtEqECGR2SipqCQNkA7TnPyjeej6SNDKD6i7x3bo",
  "key24": "2tRNt9in1SUvdHx85pZj6zEzwMGKvPMyFqSCJsQHazhBP6Au1jyK17S8EmCRdnkQTgRwZBP7PC5aPMP676rzxuB8",
  "key25": "5SxsSy46TPjx7jJFc3mKu5BgNHqnpBbCtEdzuJcXXXBLPiRUGgoVENY5UPnre7FUMKTw9LYrvseVQpDvoqs1HTro",
  "key26": "28yEQdZYgjxJCeh2xmcXuAPNcPB5gmo8Yxpza1HwojKVyFWN5CRWtP9z9XXC8LGhpT84FdTnNdAeUEvK8kHrXNqQ",
  "key27": "3FTPacoVuPU7Xr7doTGNDuMFWjQuLKkqqs8zC2oJoqeALb2mTPf6Dwfnfc2Qn6t8jXRuCPtVAgY3hXTbuRygGtqU",
  "key28": "cRbifEo2iVRScKy6x2Yw7WmAUCGimQSaA78ySgZtoRwie4TrGvVNNTFW6RTLTYAmPQbJXu614bQoxZoa3RT3aw2",
  "key29": "3YRZpo1FiAUTWYwQpWeYambHuqbJVZCjqGx7x9ztQ8XsvAfL7xdLLzKhqaYExrPzQCGffrar8r3MxJhAVJzeZkUL",
  "key30": "3qJpTS3yTrsH1Dxe2vTXdNkRfC77bnd3Z6pfhsRmLLgD7DCFzzAojBAzw9Q98Q72bVW3G6eYu2QUomvdTLBeptDL",
  "key31": "pbzwGu5buCLvKKGePjSS3TeuSRNE13eTWEEQqxfKE1HCQ1jQzM8fVWrz3Xxx7Lsn4ny7VJYo1vi7ocrGgTxzSjS",
  "key32": "5DcoNPj1Qgdn5tVkHEE8tvBYUZaXr395ABinxiP4Uyr2WVToZkNDfEiDyfWPoyWAHUM1BUMJPip3FGemZwrNrWyc",
  "key33": "2Uwa8ZzjJh6b2B2WzZSbxsfVHANZAUG1ptJL2EqKeJEsNgV8SvWRofMjaCsidpgUH1S36tTaa3wGvieC4qBDfevy",
  "key34": "2399Sme8JWzHDJxYHkjC2TCMf1spShtfKbZ9qvhXAhowas9fa1fZRN9zJoac6LvBAQiGVWy1qSaruCm6bpn4gi6i",
  "key35": "3eDBJsxGBx8aPkVzuRvresUCskyMPhXbJ6cLWp2RrDdDPxLwBn4ZVcu8sBYuSSBGp3zh3vVURYV7dNfCZkN8NZve",
  "key36": "aeDAD1kVQ39dZoWeXiSJAPYBA6SkPgXZj1sPVBvL6uLREfZKPeHHufA6y7XkaMoPnVQTpyAJK7dczkwd2sjT6df",
  "key37": "2uD7mo2oX11juiSCBo7chzvPti9QsPAFut8k36gr6n3bJK25pZnmATRy296TBGPJs3K5UMHhW21PSMRoq1aoc9yf",
  "key38": "2FjUAuru99QqMzvnEz4SG2b7iQ1xqEBsRWgj4JRg9f6eTDZ79cFLsC1RS8ZpkwrruwUQXyL7FZgkET3peN9FFbKV",
  "key39": "Mk36CTKzHyAxfovahCipKSr1djXveGXDmRpv5afRyAFGVnQhcWvd1PgDYfV5QaW8Np8g7CiwukM77AyYbvKMftw"
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

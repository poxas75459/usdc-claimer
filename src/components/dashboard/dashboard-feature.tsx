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
    "4SdxrRWWLwYFUd7v9GKX8yF3SXfJLpWVCEfAJDT9tGgPSRC9zSjBh7u8gzGtyJGtoiUimv2XyPDCKP9oaRJiphhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FdGt3DH2tcMiGpkqhWPYdHfzhVZqqF58VFZxyQf9k4fg1FbaxYWSFQpFGWGW7yLwK4LnLo8nsAVuVLen2AyQNXY",
  "key1": "2nANVEzZLd3vesQqy5oRV7NT1N3eABQs4TuhFSjvfTYdqPdKYV7PwECpdipntBTJzwsZVARYxftbYrNHbCGdCoTB",
  "key2": "4MXoaVca3QWysGe38csHz3qWw5WCSQCnToq6ZkHJbmLUkQ7d6yUJEjridrmrn4edKJCzUyDXEmdNSUFG2ZBVumez",
  "key3": "5coNCrqHUhbU9Nt4LPnw6K76M2LXTYiEyMnwLXGEZS33sgHV2VAxi5yGxUfEpWWmtUFToEc8StrSTGdGYHecGQeR",
  "key4": "513iq1yAcJSAuTniRxoRSyW5fgVtB5PDYUS56ZvAJ2RU2Qe6PeJuVGuHux4D6bCxdq6DN1yqmN23XCuWP5t1Dkhp",
  "key5": "5KesvPnhQBsurq3HAaSpp4QUmzForJrFiDTeMoooxe3zdPFHdxRovnBbYHpJsf4cBTq2d3V886LY1T2sj8i54iHo",
  "key6": "5wYwMkeYcDwmNMwZj5SZEZZKWrEzBcq8WprMbr94V5ayEPygZiXN6ToPCQFcko6kcP1ZaiBJkd9kQ4JECyLgCzXZ",
  "key7": "3MVEZ4RmUa2L1wsio2A7CazCDNya5EUg2vAFPJKGRbM7f1CebY3KrzxiPUqiVNeWxsBsu2RiCXPrKnNNE6QyXduz",
  "key8": "5Ae1UgZNCijUVBW5V3FPLffdU3NTrkwHJ3Ab3WsqXRLbVzi88NX96S7qMCfKkJKpi4QTLhR2dcM7sac5qrKchH53",
  "key9": "4nSdcC1fZBqer3t1G3uuf4d68UGyUVXmd7utPiYktZjw58BuG289MkVwEuphQrwJaGBke4E6qYE7bhBKDJsJg3KR",
  "key10": "2Pu82gHH7WXbg8ydV6vQsmr2wcsoaGdbTtM2uE8ykEj6coTisiZUgf4yaskdCfWo2MH1KWjCrT831k6XTmyK84zN",
  "key11": "41T8hxgniPSRRgyBYtNWQSh1CpL21N1oM7gePCc1qn87W2WL5sePUBJ5kTDBfhLWWUAvwZFv6s9JMa31TpGSU3ik",
  "key12": "56ymXzZSGbRB2wScYY5S9KFtazyCiJcLZxGegbMSTKMxpBfNKrAXdQmsNc6Y9sGfsapRNeWorQBbdEmYZ2yrGB44",
  "key13": "2fvBbBypb1uCS2haoXFGQJtTqwwsj3CoG7BYZAHjUmhjTzueSV9Rsmvo9KpShMykfKYRAZmXBBzxvhEkvhjpzdfC",
  "key14": "3NPTPi3mFsjrswumb7GRf2DVRUFUw21NkVkzZSZhnWKih6u2pdd7XJYV1VKDSLqn1S1ScRGYMNEVYKWvmdYRcmZ",
  "key15": "AFiuUCyND7Aw5ZMFdr7yxpouyofcsgQ1quV5iHpXZh75gZ37CMZvfduAnhoBJeSpQmCH9RMZZawfs8C5xib5ZRV",
  "key16": "EQhBMe1pfPLZDv419EFxW5MEh3ZRuHMXF8h5TUMZZteYGDLvtPenFwSi7Hzb9uHwepx9QrMHRcYiT6hHFyzqXjq",
  "key17": "ZatnwBLmmk8oqPHioLjdhgWmbnSwe4ZHHDYfMntjDN1AaAjiW2BbAuJSVuyZtonZ1EMxiyAPtENKPPLGtWXBsYq",
  "key18": "5k9DaWHFzjkTRzWQZKfhFUu3JRZwk28kJ1k658M2YRyhq4f2aw7jHJwDGXtjW6bXoe4xJ6AqgaKQ5ueonxbnd43b",
  "key19": "mu9Ce7yJeNCCk8WUGv6SbB5a9gK7K51WjZbQTtSce6pY3MX6scN6JTqdHysMkXRTqM65hJhv6W2DQuaVCw8Fep8",
  "key20": "4ftPtzGkr5udtrsLmMSn5LcKW5xwttS8zyoiSgef8gh9zRSr1xVQhAPKy2RgTs5UqEDRkjY4j5mPARLY9R428JPa",
  "key21": "QHwptkcwZhw9pQA1DMWgnknMXu6na4tgfKsPjER3p2K4m7MJtY4K86emWZxD2kXZyPUL45Zy521CGkkTXv8uV3X",
  "key22": "vMDqQ1jMsNRGvynCxtpJR1cgL2wvyGREqSzPEKazLPzwesqCBnS9jVpMuJAq9Uqr1UrsFYH5fcYrx7JQbvM6cjT",
  "key23": "41mQJC7e5igsdygrgc7raHibEw5zPoKWw3JvJ3dvrEKqCCoi1uhaXjnZ2ueFYmR5Stj9SY1QFfDwibPRzNpmXEJN",
  "key24": "37T1P9uFrLLJu6QH6bmz55ZpB3jqt43u4QRshv8xrVwspUPftBqBnHqC6LLgVt8wySW2Rz43d2WM9MWK9rxPHbZZ",
  "key25": "3uwKTZboqLhw9fGdpXM6bxEeexxXMz9K9eG3oQ4YxG35ab1NEmBzmDrmAmqr9pnNEcH1te7uJR6WAQDrNJs3kg8K",
  "key26": "yNxK7ztopUgUbBxNDVpTXTDk7FP9FHvZbEBBCi5vDqVUxqueGHtc3Xen2bFQMhRHJU9Z4C1TGpytQU2nPGhQrSh",
  "key27": "5ibWtKX97Hm6CJiRjFq1koYBzf6NzaCTgWsQtRCXeybrtw5Mc9iCrRh5xu9BvDRnUuUXktSWq1j9MDT4PPJH3oq4",
  "key28": "3G354qLApeJ9cFNVpTC45vhz6MHNDcP6EbcCsjtfd3XM8mjfugqyoWangAz1etDKKaMsYXZKwjKCvBK3NCxwQ8MN",
  "key29": "5NTMRRtYmHmXSQJSn9SqhdWKyWrbc8sEv4ccLdR1LMXok2pkykvWZYADCwpzVJTUp2pwRsQXGUp154GJ13NKqQkh",
  "key30": "5qgUM26fHd7dEzLqSh8DM7wV1D6TnGmL7CZpLtPrktaSiZg1k8bRRdY44duwPU1RMWyRviDJHQvkYFmgPbtmiPa7",
  "key31": "WuoS7Hj3yboESCC9ru5bCoW4eYCgTHprjYMzadBn3E81e6G6sxJ88VWftKamwEUAnZK7W7yvEgyPYiQHNB16mmx",
  "key32": "3syGqq6ytb3ffri2Fzj7oJtST2iRos6catJfbbeXZ73pcbHS2Z5DX6NPMEnXq8bUwmAg3RueDkAbHtrLy16sG5SL",
  "key33": "4mDmyQixudK72pNZJSKWySEJURFyri6gKaBJpqK1gUYoq1kjH5Byfxcyz8Wmg5gPyq7a2LSRB663B6wSCfnRL8F2",
  "key34": "2M3pgaUZZ1idSAwcgbZwvCGsQV5xdfueRX5nnCtPdHCjff8cKjhzf8H1VUDdy2MpFYdmZQScxRLepehmhx51tdHt",
  "key35": "5XDGQpQk8ydXrgZYMU8kAGoeKidfDMLjrbf1JScXLTrkkNZkUAfucUHdFDSD4KiCpXg8QRFJ7oRc8FL18Fk9jw3y",
  "key36": "CGYMzaYMLf16PckzmepARyohfYVD8f4tzbvfr32mYLHJLSVp7G2b2YQcL8nVxD4E7aJVhy2SK6Sz7tvV5TT24S6",
  "key37": "5yTCBApE9Cg1pN8gSqe8xr6ayfQqTbk95NuCTjCjrHttTaU1tUvAKgJDdS4yd4NPM1vDPS2FwxWEabx9t1fqqSpi",
  "key38": "4JVikPp8ChqpFH4D5PWMMmDL2vdk7Ak7jjv5f9srxvnYW2McUEtWTkLJqiTsuzJFAukYKaouowzheJm2x3J8wyNV",
  "key39": "5YY4ZUXqy7uvY4jFC43QWVrkxGKk451L78Y6E9qRFrhzkB9gGySFeY4SSUrm5bDMuCqjuZ5qZygiq6xkSdEhhK1s",
  "key40": "2mpPQJUd15r6q63n7pnPKSXvkBKXv9VYzQBBNfeXcmd2g1Kkjk8T1grBvxNcNA136Vvnp4Jy9EcEoyV7j5uuwZM8",
  "key41": "4QPWcMkc3s8WZWXzLiv7oNnXUUSFjjdLws9RvmEPoS92t27YELnkiZmrmRKZRqESqcsbC1S7Ss5QnQ5sAUnEeeH",
  "key42": "46vAy6EryYxAe4bk8QCtXs63ZTWR2HqequeEuxA2RE1efcNkPGWoAJQBFUaoaZan7pP1EaS5EG1E5RKyvBXkKuTi",
  "key43": "2x9jBHimNXfER8rRxGDDTMRYbmUGWRNtdBqHvM2YRk2C5MahKzSEnjMMpM7ozyMe97NfmhDit1vedM942NTRxSbp",
  "key44": "5Z3CUyw1gXTQ4xrXnULJRdatxnXKvQkanoRBd5FJsqxbbzcoibfnqbMeg5ExJtM9bY9dVRMeWCwoVsbNtdKTDYGL",
  "key45": "2k6otnaD1uworfgt8nN1mgdaDGFTYeiJvmtntM7AevC8gGrV7FBScNoEVxjQ4p72J4ZLmdjYTNQbfRHV3gmqZRk7",
  "key46": "53ak3yHzze2hZb45BufAfhcyivWNUhcyZoKeWCMSLGUheiu8fzJmAh3MHdpwoiWapw8JrMxaRod28RynU1HvqGNX"
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

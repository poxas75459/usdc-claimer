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
    "fA32TFMjg18UCVa2r18ggHUpaLx1zE37Hk9BRAuzQ3sGkfoKTU3nAtJtWbAjgYrjXe94Rhx1ooiy5Y3n3niPunz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i6SZG8xM8HEM5KYq1PGKrfGWTZZnqYT33EDSzeCGa3Bu199aYxWbDKKgfgWJDH3rnAQGKXH9j8PWTTuzA7ZfMrQ",
  "key1": "3L4dSkr23jgSXuZshkU2gsWJUPWJ5Xv9LeWsAENapcyYNQJ1KQvCfh7b5X4SvtJDwvw1MNx8mNGwMxd83VpbbjeD",
  "key2": "4wL4YMumgAgZd54y36NwKyVp2U7JHPrqntchWav8Dokzg81BnsmBLfq4kZevXKrjKTwgd1DTmXMgqFtQMKwhbwg9",
  "key3": "4ine6rfeN8bFs2yBKexC7JKxgoVR7nHyoXMEN5eXz5KNZZ48XT7aWbV9nfPVkA2JTHGK2nJdgG2gRT9Sjbgk5VrH",
  "key4": "3jbtN3hqpaQyGXnhupWbdRTTuPLa7fwqp2xo27gP92LM1r4eoymf6U3XbkgNfbevYupdaDY5otHG5e4XTp4pyyS1",
  "key5": "x3nATg2qUv1GwE42C2vSWxLR2rLQnbHgY9PeWmcUgkxF2uAX3hm1Ggsm99SUNhFky9gc63LjRp8cKncSeyPX955",
  "key6": "32N2h8Y5HUSovAQ5x2voCMRYApkHiuxGo7fvYgyNVJrccM66NUJX8b5er2nzLdn1LebUKLskEhgS9PNPJiGx2BKu",
  "key7": "XdG1XdSprd1S5pHG61JuDxKGNPrj5R57ZYyP91sLJLL1M5YeVdWGZF2mSUXxxAxyPEJL73fH4nejKPpbYPTwLBb",
  "key8": "gEsTNu1HqNYH3cPG9zgq6XRKwrU9ocAn31b4nWsjmUV43V9kZcBudjj5p1rrx1GLxa2UXMkzGDsoJCnwd7tvzEZ",
  "key9": "3oJrJ3iCe1vxrt4swTvRrkpHa53gwBS7EEeDhN2WbJBCehDstPFj7AaeM9KLqWHQc9XR9E5h6rpeerNZugbaS4Es",
  "key10": "57wiyY2wjH8MdDFpxhcMRSqfba3LCEr2om7zt9kskrawtSH6WYa52Dykb9xJHFy5X3G6NZUbMAcP5PWpdeT7naeu",
  "key11": "5jg3T5457hG9Msj6e7whE64cTGLogMqPWUBdi48FCov6LBpRN4zSPidqJWtH64UTyfQETKiDgyBKMrvkS9SpSAk4",
  "key12": "2GTCSs8gJpbKYn47hxnyCRCX1EryzzFprKmY4mgsyzvRfZvZx1SgpbQQsnnx4UZdtkwa5YzqhR7G4Vn7vQrXYBxG",
  "key13": "281PPLNoadUa63Hrjj89PsNywMyPrnbGJFLpK5hXypJjP4Mexf763kKm3FyzqJvngZZpN6VaM9JLGXUsDUbFLcQj",
  "key14": "5MmVL8AKmWMCutGsS67sbZxgSv3qRy9nCumiEamwGcbTgaYpFKiDZ1h9Ftng9AgeAHoAbLUcyQAVb5ZyrjfvqCox",
  "key15": "5fYEYHbheKnT89qzokrgC1Ejv8cxivL5UzqGjExApeVfZQX2BFzEjWoLbGH52fwasL2TBaimVUHyMWaWdoqfj2wL",
  "key16": "3aWEiah1zuG5hjUL15jGTWJBNB587ch2XwKwxHEHNZyDPgVXS4zdGzUGX4VeNVy3YR1LMuD2gzgz26GzSMw1HcFb",
  "key17": "36hcvzBcs72bsTvMADDyGrpU15v2K8tyPSaL4XwY47Z3VhJsVqnf44asGjEFJcWB7ZPx8YWh835zKL8ntKAup9Lq",
  "key18": "4TcwCDXSsnhyq2NYqWmiWv7QVTVCk1kmRQhhcWiThL3KmySAzh5A2qwDoHbom4ibhBW9ziSf7BiYhV2kgF89vpQi",
  "key19": "4poPHUJzFjPJQs53KCSLb3hEBQgrJjycrwATc58sCYRGnzdHBop8Yhsz67SsQTGExfAfRUrPVSK72gexStfk4VqA",
  "key20": "CDnSK2chvpNzzXEBko9bHtkLXXuf1AGd2mcUYidv3QUWf8YT22RhXrb8k6vjtn51XX47hDhaVwQDcv4FrJ3wHDd",
  "key21": "55Cn45BEPcQurtjzSkQpKVJpYjszzdgBpotjFZBQDZCurUpigJsD8dZMa9Z4pEYuWoorRzsbCGAKymqGCxV7xFAT",
  "key22": "3aT2jiYWYvzgX8Rx9MrkiMybJFazpbJH2fZZGUkYwYomnp6kwjwWR2iN2TJiM9vU5Dhx8wdC6a3aDHJWhQAZmMZu",
  "key23": "3W6CUkHGhKBLv6aAQAzrrzHKP24ydnz3ps4f68r3urBztB58ErYBjjwzVVRKKHNXgVtrWa5mJ285sQ29aXjds1yZ",
  "key24": "2bf9ZQTwu9MZUTKZpqkpkccnQ84xh2YVcuj344jEfDLbXQPhVk2cpVqQD5p7LD4ANn7GWCw2UEWFgDznDfW3QeX7",
  "key25": "55v1XHjmkQkVeLFzwDYasRWJURCBY9hnpuWf1U7f2nDw5fZUVpFEMjNTqb1PG5GRQCv1XX5wfmJnvh7cRD2T84eL",
  "key26": "5oiN9BDJbir7Q2WR1TomWMtZRgUgmvf1rr3FdXtHdFsWGmbmNFDQnc6B32EEJvzsqvHt1KWVyWLWz9tbSfx9Wmb2",
  "key27": "vxMoEF6Qx3CvKyAk9gXj9r13LTFTaLPkZGpsHc5xuEFn7eQR8YPboPAJkUkffkrsNc5qU2WmuS5usSYYzTSAGTa",
  "key28": "3VSBmPnP4K4EmYrRm4CjGTDFciuPFhvqX5eaknYEjaZKEcvMH3j4KEcaiyCbRV4chPurdxeRpuopEUQ7AVb5U1e3",
  "key29": "4qEXxrz79sERztMbKvXXnYToKzBcpfeKWpJkFAai9WjKzJ6vSnWdpLVSDXt6VamxPwex25Rm3762K43JFQvKZVSK",
  "key30": "qDn7YT8HRAapbtw52FgjS2oWLFvygVFjfxTnB7ZwXsFFzVbjup75xtJnW78zXBs4VDZLSinLufA56S7JRSTtpmK",
  "key31": "2yAD5W2VDtLPFgPnt9RKNNUsjsrdih4Bcsv5HbSHkATfhKtKK29RgwKBYC1EgHNQLLoenJe3AyNni2E5CBGwu6se",
  "key32": "2iqdbgHSts6Y1qNNYo8eFZXdP91FSeyegtZUzWC7CpUxfh6oGXB24tbw5jiTHtDFLN8n9x7BbkpFK52QoQG652i6",
  "key33": "5WNE8caA9uuNPVVyZgu9Js88QmcTd1DPn62BUXqGZE53a9xjq4aEzWsMpWTaqdGLvUoMyQfUdrRQRmzq2rpo4GA3",
  "key34": "dP4c7LC8zqFhc8hzdtayM2oRGLbd4td3jshujrZ9sNuGazMF18xDTv4E9aqXTkH85zjxSGzZyG6hqV5kZqWHqJK",
  "key35": "5QXKDXACCZvm9RNJPKPbnReWLLmvoLNu8eVhzsPR1cVnwbxnFv7Fffpy3R6eBcYgTG3QRXrFybZSigC2Aabb7K5R",
  "key36": "wDFzi7y4wkRnfvYNAxpHQvNGT9pD6ToVQHngQePWtFbBE6ckdPXcdRfpjyfv6m6CW1btceigwQ4JEjkUrLR7DkL",
  "key37": "JtkogCAT5iJv9uSJniCvzbHVEhJjpNNJE7ZYWqS4mxgMmCzZWqoizr6qnEmbgvdGxeQaMwg5Lpm4tJqE8ZopbmN",
  "key38": "smL6MepaeoBa64Rc2gvg8REb934F9PLmoSD6vT3WCKoKLqT2iE6eUK5gmgvQLoPwDRGjtxqgAtDfDZqhHhrdw9g",
  "key39": "52BWLucTiPWGCXVj47XjbwmRCcrkCRPS6QJWe9gdSPxyHRaeAxzEq2Yag1uGJseS5cvUVuwdB7bPGrbetEz3ShfG",
  "key40": "4e9unemEpN4ybsgWf3sGQoyty5Lz9fDttTYuhC1oRAcs6q9f8cevmEBFmEnhYdaruBkVHxSG3YysHD7gWa6jFPPm",
  "key41": "5WjadiXAVfPo1pcpmuf4YyXXN3ZEQn3A4GrUzpguPBuPa8rLQcqBPWQRzfE2SCAwy3kJeNvwDGHs2oTFaCGQ2BDR",
  "key42": "65WcsYwFVRNaj8p3G2uSt5ZCDKGWjgr34QiPRoKc7v5FftNkXBEct4FAGi78nSLUMDsiKbx6BMUE794PQZcLoVee"
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

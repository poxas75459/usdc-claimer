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
    "56nmmDEAcDgEA1g5NSjSazmZkgj7brkH3iZJp3CTfAuToKXSoN43T2CGFkWxusMEQhwX2doUa3iWexeFiwWnVjbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Snba4wNfA3z78Sx6QJdXEWP3MSzt479BwJhDaG67gBVS3ZGy5geMKJtwmf4qYBdLkW8YpZNzc3AFdjXcgFqJn7S",
  "key1": "29PkhTj7tmkJqSLeoAixz29t3wC4tnwLqoXhJHdBU5RfuHAA5Ko3Qya8FCzE2RgZauVZbbaHRgnh8JWjsLmEinAN",
  "key2": "5VdhHshNPcZXZtkKPrns7BuuNswEJN7cu56v26eHnDN8Zri1NeUqkcPCNZS69nZeYijWALZdUUw2AeMUX7CcS8gK",
  "key3": "5zSHDd839ZnkTEQ9xFYgz21ifLGyZuJhLqenXmaMoXMLQr42Ln6FWkrT7tfNje2PYKQfQMixHmkhLhpuMpCLMLA9",
  "key4": "3RotZhkv3WfAnpNmyueNGpRjMes7wL2u3Hn34WKKw1RAkxgZHdBTiGXg57PbqPMyQyHegmX3aNxThCHs8acrhDPX",
  "key5": "3sPWD1cguxv5QufWMxZKiz7omY1wQpovaKhCB9r8izRG6W7AfzWTGqkzgoSKC4QhWC21iV2PaSszxuw7SK15c9ce",
  "key6": "YRCU9Guqmtn7PUykaCjZ1twKN2FmzY8vCCTHdiutQt9aLCRUj2DHiF4JRCCj3T5WyeHKX6EqBxifrNWEbWd1K6W",
  "key7": "24BhptP67Qb5kNtfDr7VFbXAb5m2SFty76cDx41iMZ9YgYg8t76Penp5HKYgdDrEnCseiq6TvdDQtzPiBrVFL5BY",
  "key8": "5SRcD1jwPg2TV5FTtGJ2AxSLUifuv8wE6mFPyqbsUpJZLQw6ywU4cyr7bc4hLUD33q1H68nRpoLQabroZ4NDBrjE",
  "key9": "3dQCeo64zjPzVDfmEre2zKh8DrcyCF33zoTV5m98X5p5T5fsGcB9j3FHzSCLzJEGJWUCcsrV7WV8ytyDJq5YnDe4",
  "key10": "59X8tGpzYtJ2X4ejXqhRJ5cXfeRYVvKoy2nBaozjiDEDLdjrEfVcxnR3uuxmdZXsL3zsHgyJ9rM1AuLycYzhxMb4",
  "key11": "7rdX1NTjrPYu2eQRR4aTVgyChgb92sJEaGRBK1FCrT98iUT157XfkS8bFKovNKv88NZyjDCdFySWrg2szvnUeEa",
  "key12": "ms3YydVCAcSF3oHLooYkv3P577gjx6trNNocMPvnkdv39xFHi3i97A5GwsmPH8aQVK1hSmVSqmmoD5mHqQVAwZN",
  "key13": "5N9LdoawQZdGPYgvrCvxNbzTvUrv9DomiA1BBeNzqhmocC8gboijcVc8FgZNvEUWQZuK2n6YrR1Fq3gzU64NcioV",
  "key14": "4N7B9Ev29DNw3CyjmjyhzXhozRRBmWg5GfzUQj9DHPLXHvKDBmPNfZhtk8nuCYFnhKhdHGNoKFRkc3coMXP2Yw3k",
  "key15": "3WSgVXrxzqLxzaxLeSUP6KEE376aMyf784UE8aAZGGGXR6wtHnh82dPBJGXuLewhgsbDRP6zRcfWQJPNh5c8v6Zu",
  "key16": "27xCEarbNugmUF2Qosy5VVLo7Eae2iJ5jqDASG7Tcf4s4PNHM6m3qZ7m7GetCzHb3whkjL4HLuQnBEQYNGZw2uDq",
  "key17": "4kAe5ea19wtMT1GP4pmCo4bpS46FrFRNiJicUmy4T2siYi5VHVaEqA5JM1cKss8JPS9aax9ce2gy618P2XGy6jSN",
  "key18": "5ge7UyM3hUs1KcJtmvKEJJTdbRPqnTZWFuGRGGr9rsb4ceWh9Ae18WJpjEzqr7ePECrrA9KvndMBMq2KCAcG45M6",
  "key19": "5Yk2AE1rHzDAB3CvFsWg7Md95xv7Bw2vX6USzbudxrPRpDn5cTc2GVUssf3BAHrDCUavsqXkBdjtDic869p4QCXg",
  "key20": "4Cgq1Ey1rZmom1s95dCDxK8Zb6ea6Ndv9Q2HbAVDZsfe6rQDWpUnMMh96iRrEpk5UgQVmHtANCK24nWdJmsskems",
  "key21": "5hPXkBrd433FwHfHJPVW3h94gLX6A74DnMw2TX74yiWipLxWgkQT5FdD4iTdrryL4A1ijYCmNHjf96Ntfi1eMt9D",
  "key22": "sLt55MrWq52yC261jYAEZqsRLj1MREn8YgsAQ2VwYFt2VaUGmRSvBTRNLXmacwEibG6mE1wYRZeX7vZhMUtiyDm",
  "key23": "ZicMfwDzsjjwXD2TNtraxXJhbBWGTNtPrsmWYtA4SoDRGN6JcPjYDYQipceJqZ3Hd42seRTPVxLuqzkkJJcfqxg",
  "key24": "HZnwyzCbrVgf6HLNSJQ7KpxxrLmUHrdSEs88QZwAPyAk2Y77MjMS37HCvsC34CLoqxye5ude8FQaCTjcKF9zjwD",
  "key25": "2y3MVWsAwdwZ4XYnN9yHBubxDiXMraX6BqswXrNchDX1k1zxu1Uh6S6FZrm9kj8oyhQuPj4hjPSPvuLQkKQ7UXp1",
  "key26": "xYHnSUXVpyvsEiZEK28QperUn6CSkH5e2w18MGNMUFSHbTkjiADMEiX9an7KnTRLHPe8KYYkDn62gnKQpCghLgx",
  "key27": "2scgvGcNmPsvnUNoxjWQd7kvCQepMG9MDZuQ64uzoVMPAVh7M6Vh5CSekh9QKjE4pwoYFhNLVBssnT3mPN5KUbUQ",
  "key28": "6zud1V87qBXViqRgKRGLGLxbpbt9vwRx79NNo2BYtdxkizB6Vzt37LgCNfgQHm6kKMA7KmLuQAs6idEW23f4wFy",
  "key29": "4RzubuFJw39F2NLj1NJ91YqswWth4WjUpudUGewixVpqAwVVZ1ktmV4sbvJMck9VfCYR9rub5FPVcuPjWbgQwN4",
  "key30": "5hayGJfrDM8Vgo6UJaS698i5rSr1dtAzwXg14XdoseVSmsJmt65aAvraZNFRyRDaSyRqE1XFSxLZpdx6KFegjpMu",
  "key31": "5fWcZqj98ToJgSsjsrYFWrrWpaynpfR8zZ77RkHpkim4kaJqPEuGtdau4bFdKPycKGeymXk1Vstdi6uNwjuENmdb",
  "key32": "24uF6vTdpbRx7TpSZEuq4q7pzG3cmCRH4v16cdK5xzj8w7iGn5rEhqLcrMrtxuW4UGgeKx8iL8GcaJakAUPVRCGW",
  "key33": "3BsAYjM49HsPgBYFCJuSDbC3xiK2mefQVNYk99wmQEyMhvBDoKBbkArnXtM5hF3TqXWDvRmfNLBrdZp57H8aWVZx",
  "key34": "2XppLwsMfbVRGWEtWka3xC9CFk2dTXrtmL25JBkpaofaa5dx7SbBJ24YwDP59AicYW3TSUC76iPQ9Xp2hcuRC4Lt",
  "key35": "RJWB9TPjTmm1sAjWg67TyVzTpVqKrAt9VR3yfin5WEKXwCexv1i2pLCbbKffwLNZbi1X3YALHCt9xUARRHvcoGr",
  "key36": "2wvKLCsjMxGtqsywW21aWyy5tjgKx2iFNMNEwTGeUYj2ScRfdf37sS1Lamd9RCWzd3d1LnqRjbCBgSVhU35nHdsC",
  "key37": "48a33J8CaZgDF2JaBrjcyuJ4hCNAZ2GJ9WXhfGPcdVQdNoPzUjXKJ8YNqKjgLZHcYLBaJ8tQvupyQKYWbuZ52NsW",
  "key38": "25mtP9xhjkdzRGnZqLNkJrNDKYYk3UrQ3KYe7r9rxrFhPD7MN3ndRTdjit1CCAhmGREdrceX4jnQhqEcdHag9hXS",
  "key39": "2wszJwHdxzdzSLoKPc1fMQBKs7AkHKmDPpncfsxrz3RhsB7AoNNDaXRiuBtjdziMm2zCJm26PCZiJ4qXT1bMYvsL",
  "key40": "2Lf3kWK5mX5DcYpkhAg9Zss5T2tWrpPWqXHx5u5gAxyWxCyGRFQiEC8R2bHCEwWYTuK3Cp6CoMA2vsSaF1bEeDeD"
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

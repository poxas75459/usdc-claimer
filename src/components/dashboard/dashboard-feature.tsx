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
    "4NBh6tsD22U3wdjrRA2DaCpxMRsFMbXzz8K4CBjTn1UBfqHSyr8nW2bHG9iGSwEkJxMGpg7ZUNJFnK4AjLk74ou1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SzPdpuzYwMMtwabo6Nw9hcqVVuzAvEaGrBWXB9dSfsq2XNfDrGbdruFLKohmGqFQUfLcPKqU5LbwJhV7jisHEpi",
  "key1": "2QLySE6jru6Q4fUuWx4fEQixfmxsHMDgoZQoX4DttJk4zxjTLYT1XTaCfoTk2TKBU9RWyprYg8n7qJ8DmpoqfHWg",
  "key2": "3zRyArx5vETK48Gm8gfRmFsJsCgCiqciXpHVPqGz6BBGEZD9uDUFWQWRM9mgCVPu1WYUNYPNusUxTe4UanyDJgfC",
  "key3": "4WzADvjBqvj56KcnyyMkGprqzoggMUzqfDy3vjng891tz6bQQ8eFU3iZSgHbA1J2UyNRvD3s4SernKD7a88PnfXp",
  "key4": "5G6LFH4nkmcqA65tP8So1wqXC6JjdyacJnM9iZeW1PXkxxQCP8BTitrJmmMFtc1xKE3rmp1Hc7ZigMjZtZi3woUh",
  "key5": "3x6eAwfq7BfFnofatrhyu4J1yQd5pkrsa8XuXDkJZn6KV1ktJWm3tvRZzQBEDMEECnzYUDarTWwK4gnTTcydYBKV",
  "key6": "3AZ4Nvkp2cnx4Qy9B2eqjGTmSqDh7kJciPvJbPcDMgctRQdSEHgs5ze2KBgSzxstRjnWoA8YoawqkzzSche2MGfU",
  "key7": "3DghShZnv8aMqt33yopjLRHNgzFy6VNsDpDYgZbUT4TUEGzAkL6g69D8LGTFJnG8zCaE2haVaBwc4Y7Fr3b2zavH",
  "key8": "2hUrJMVDy5yVSL9FAAizzD8V7FZRQryF5gA62MB5XtkHhwjY3PWM7NmcLUfQ7i7HfUwC7xakCyrTU523ReMEkyhz",
  "key9": "3Wr4jTxsY1bQ8eyVhvq339Co4TMSxSGu2c1wgsXVMS99e4JqQGRHXEyMKVWkmenN9z29FpprySGvDUmL3VFoqbwr",
  "key10": "5TquKGptG9txVnK8zGzEBrykDwoPJtPTEKFCUUtShhksany5o8XvbrJmajHafZBqKWNxVJMXdf6xXNu9bT24sMk1",
  "key11": "4bi9vsSHwEwFY6fTVn7VCUBD3LingxqexPnPpLbrwgS1LXSrCQ8AHL3YD7Z5XM9uAw9NAjyXqk62Bs2i4isPQJoj",
  "key12": "26YgfwvKLFF4WV6B6TXBRRPRfGNow3pR5gXxm3aGUyKFMZgWcKSQ7HFd3mLKGS1KdGxQYLzktNYiHFiUF3H3jjzk",
  "key13": "2bCzVgLgeLMCqPsWoRJ3D6HJUp8FgQHwfdBz3BbQxC4mVTqjPdw5UFqrMKyoX4iy427qZLzwFnriZ6cJVpUjKwt7",
  "key14": "ScUBKc6SRcCYtbABx1NBgVb5MHAu4vz2i3pPvDb5BqRKjhbiLLuaaQHF8u1Zm6xQfnWzsrAcgqqzCpg5t5QXCiq",
  "key15": "55nDmk9B61LuEr7PtJUyVThC4WWEr1bQadL1K6GTcosfwCMDX1kHKhgouj1j4QphSu467jRiaPBPvUTAZ5RhRrQ9",
  "key16": "4m6NTMMDGfSajHuVtY4A1SJ3WVCuZWSFscNDtRFTH5dkMBom1ZQk4kCAjHhuLUjvgifo7AT5eo3eSVEDbsX7Ps1G",
  "key17": "4WEsBMVSo5aJbmgC58eaJbWadNFoDY719fKuy6b6E1zZvivWGebcgxweP1KPCfqKqivrb1W27eRxocK2VcZFege7",
  "key18": "BZHeZqtcNbj7fEmo9WUe2dcXD9ifsjr14VDh8DheDJcu8EzZUM63WxkUQjCEw3pxwzeqUGVtfQMoAmAW2hUNudN",
  "key19": "bSopzKiHQqqCdnwijUaK38AGkMCphhn3Vqb5WLXEVzwuxCnR4iRWAxWwFZGx1oK6c5y6v51PktKhvFAsmGsrgm9",
  "key20": "t6YXV7AqEha99gQQ9rS4rzGK7eUAWgz3zjgsFbv5rJNqfo8cUg6632Fi7c6XgpbcArUgdYMB2ZwXftSUfFZs1Cy",
  "key21": "ksZy3u58XbCXywQiXuQAjk17gfjgkezdMxVYSUkyVf2rTVwn8eizJPFfoBxnTFWBrT1esKWXMnkSd7qNj271pNC",
  "key22": "4eJgY35Sahi5Hg3c2iUW1mZLQQXBt8JmJQBSnZTB192PEYSMkpUeLpqLmReRUEDQuvmKAop5Rr9CD8iHW4phGUnj",
  "key23": "2ZQSucToCbAyZWq41Lqvz65NCYZkGAqo2voAkHZbTkTwHeuWppB5jVMzE9ZGgNaN7HMCP9KKHC8f3KUWpnMaQhY4",
  "key24": "2Yb2AsD2ZUFubBVyBWYcWeGPvJHxwp1uwiyFnYFC6vuitp4uQNSqBhMUQUqx5B1iXWaK3LABiJRnZa9xYZmUN6s3",
  "key25": "2YaJpgkEeinBQzaGxtVkpFZG2Si9ViCrfeVejtWci4LEyh29ZqYHasUq7kFJe7UxTz1wkVtKHfu3ZjiZz8ZysMZH",
  "key26": "2PkiA9nWQoGy8jzzErgGRbBNKGa6cW25upkFdQgVhyfXoxYwyULhrL3CegmbQjSP4jQHKnoVmwmcU2tS8Zxh2ysW",
  "key27": "3NscXniDEe7zBCGQG5cDwoRngS995pZonwVUhkWEPcAvWQNrBxqSSmvzc288Yrxe84kiLwVc6q1zrmYaskaCw95w",
  "key28": "jLFbGmGmVGML7y2wSJhofaN8pvEeEHYuTHz877MB2yPbXGQYuqXMwbDANZ3yhbEYihH8CkeL9kAc79mkjJqkxDq",
  "key29": "5h1hY1TLWnMSaWmESatEfJqTC9VRxRBi2bUwqy96mAgornzZB9iZbLsFSAXrBsmmhiDmFoFu2sSCtMc1jfaRNLbn",
  "key30": "5z3bWYEQ3mKU85HePUD5Ln9reRfVG6PpD4EHopxN2PRYupk4R1qfQPa4U4rcEqiA2Zkdat3v3EpxJmzafVg6jJrh",
  "key31": "43Bj8z9yk78njxfougsY1DTGL6hzpNpmZroiHgYi7VddJmfP6rJB2r3QyH2SAMYSKtfirTMidZXHvdGtzfet4kUY",
  "key32": "424CMktqoEaYNkYdWMmMw8WQiZNQotUa5tq2Takm6vdsTYvZACGSEUQDdUYGr71DxVpuDxNv7dZBruZG3UYZ46GV",
  "key33": "3Ji9qinhs86eTxRDmFzoj7NfgqVjZa2bT1H8FcJEeF6UCbjL1qsfojpCVL3C7hg5LPwpCvbxEbhkeFd5bPa2AR7c",
  "key34": "4vECGyiigdDCHpa5RiRsQi6Jv4sYS7DFfazvgewV1miY9TcTLN4SWNnvzJqQb1RfzMHCyQ4vhzEDq8ozDed7W9YM",
  "key35": "4QYcGv1aUTk2hgqoQzSAhMr6MwkAU44ZqfCPdM9ysCV5KArG7d8JPh5MLaFcfLC4KwPhDuMQEtM47xW8sSEmXER6",
  "key36": "4WTo7cSXfFtw6kECc7x3iX69nfNMLvpar5GyeqSEoAFXCuhwtZxNKk6J8dgfdaYuW7tUNSo3g1JCtP6ukffGstqy",
  "key37": "4fjUAd3J3uni6XKUunNcwD4CBm1GLm1kHRNhiezBysQqEmD6iCnHqiijdQM7goRVjxsxDo1AxK6dng88gE5KXGhk",
  "key38": "3iuFcBy3xNRo2WrKwZG4NvczypyoE7HyWXBTxeQsy23zUc4DBhM1uHvWwtvWY2cNcx18dnPtoDR2qWDvhnmLoeaY",
  "key39": "Hvy2GAp61YT15EAUfKUwsSxxD8aUeLru7XrnR761tyPLjPqxZUqzWY4Kpofz43wE4Cfdd44EXE4XurDfuqdtDYv",
  "key40": "4Bu4a3gxP1k6BhtMLvng9RBqHsNDjqBdwwVZwxgfG6LceEz8SFVuoxLNeFSJG8xZqn45zUjmXbohuJomK5VV4vCL",
  "key41": "E1gGV24t9bSggAB9unhYDTFJaJYUYxV6ncxPNYMfMufJEnv4uYbWb7JQggxJvWnWoZ19vm1GeTmYjJY6kJDQP7R",
  "key42": "ojDT54CYCXKvr62QYT9rRCvv7bdmFfCmRZHwsPi1AVHJN4wDGHG3WRe7GZYe68eMdj9gRP9FUtJxDURBAvEmghb",
  "key43": "2kDuvLSDuGuw3Yyg5wMKn8c3J1pi2YgS6d6fB6evDP3oy3179TK1m9kHE7cM5a36z8Gr7v36bJWjrJ7DreF3Eg93"
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

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
    "22Y8qUGPZA78dw6ijCofPGLTDEc8316fPeeqSsCmGxHvnNEc8YDXSz3KbXNEJPwLCdXY48V8tDbTtMQyuoDwugfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VzWKso6bbGwK9KSWTkxup7MoPhvpU3ARhjQjC6SmSWGx7v71sLPh3MLoa7cvz8eZnnXCUBcb2vrEzETfwBkM9fr",
  "key1": "2BLGn4Fo4NwgCmb2yuDmTKvw8KpwSTCyChYG237dT4WsFtE8RPBupRugJPw4a74G1TSjfr5CgCXa27XQBjBADoqs",
  "key2": "1wNFUiNf3EFJS2gmM2CeYVtMUamrqRmkNwfNhFsDWzfyamPfnjhkkp3GP9ahE7BdznKFS35zUQqRiv7Pysf6Bkm",
  "key3": "2RyS69U3nmhxB5MeyaFgFTJ65d7XGfJV8SMmcrXPR6wazcQ9TuVSrLaMAxg5zM7oVSKCJer62hEgCdsRziTPeagi",
  "key4": "9Zmasjbcp2s88Watq9dkwSYSnfKqkXCkTUaVW6QfNSo7mF9DKAwK2Zk8psy3yKKKJS4AiBz9Sy4eAJKFw1tuMyw",
  "key5": "5BPPNTJjmeWufhyiQqiFQapSeSY15XprC3jaAfsjmPtqKSzBbCeRNwWGqbRrWb7ZBfbKDi6DHf1fNjSjhourSmEh",
  "key6": "bgKHJMZaFHCx77NUacw7yjHoXHRuHd4DDxWZqU3h9Q5K3CrBdJ2k2ma7xUxaaGJfYxdBjuJPY2DAsxsJvSHgWi9",
  "key7": "5XCFMfaEaNsEjH3yVYqWdHywPMTNEiw8rMjR6b66VoUhN76BYNGiNWS8Uaq9DqRmMVwQkX11WCGunBTiHyYNyUoG",
  "key8": "ZRiQbaZNjX8X5uz3Jd9PHP3YsQJ6GxMQqKWwfwmxFU5yRfCfotJsK97r6UuEeYmD5idm3J77LdQCQEjAv3eNveh",
  "key9": "GTKZ6vXdWrHhzexSUNurADT3Q9DafViHkkRQxddHx1eDLDzRus9GufdZUTSfLsLwrxc3QAMsumTtyKhjSxFfaHc",
  "key10": "4nsXTLo9PftuJWLMYCayiwWBh8m8DoCP7wpK47g7vMXP5DjfXBMfGKELN1YDCbWbHxXEVXAYs6fCYkUGHG9pZqUY",
  "key11": "38r5aQtK9fmvbUskoTLe2338mHp66EqasxmWJx3SJwfzm5PTVx6qsQFESd7XB1MBZdd9LiEzhgkzNq8szvYFMa3P",
  "key12": "4e9rbJePM4ooG5LTnhn1f1JuFb3kcSy3BeVmFMDZ2Z29Pm1UQ1r5BC8qWv7V5XjAHVXUDjBcNwamnShEVFaAFzf1",
  "key13": "2a4ku8vtAXD1RQB6rtCvULA83VgUPNYKKKgvSs4zQyVnfB7xcMWFuEwNgg8oFyM5okQKuGzegB5gQ1XV3tUy7ZYo",
  "key14": "2yVHZBKiudqwug75xknwSuNXERybCKKatcP5HVVaG2nPqGgD25MTjxr49kUwPyRRPdqsbUfj53QiLXYTwUGXCgNx",
  "key15": "55PZ9AFQPKfDSVkDEhrTwgs8dpKhoJy6zSBZEhMtYRi3src9gZVtjysnUPTrnfJMvX7sSBXqCZnUaUSXjwyncUGs",
  "key16": "gPRNj3PYvYgrR3uqyZBiqKjBryKC13F4GkyGWk9XwGHGZXGwMRsiDwTa1i2kGFUhPzmF5WyjfzJ94P8kB6UPzpT",
  "key17": "62LAFzAeGMWJiCGWq8WwqsfMDXbpd8RY4Q5HC8AmSSFUBhe1Chhedc2CnytsETvw3oT4XCjta6pYK2rFFjaqG1eq",
  "key18": "3GgF4M8Tpax5yLVaRm3dF4KwVmd51FaoZiTYVZHHL2pBBKXx623i6xajHcG4KSwCdevLC14HpF425PeECcCsTqEb",
  "key19": "466vKDnNEMgQYST57N31QgFC1atVA3rgKYEBQtZ8j24xQDrcZAfD2zi7FbYaerZe6f3abUj2kNotwtCLckNiHkYC",
  "key20": "3bDGUsHmHtgNLMXngJyN1HKyvRSBHCuJhAb1hi35ZZpGHrhim1EsAVsWKpWWnVLdKTKciBdsRUkXdvFUZENr1hYo",
  "key21": "Q4qxx1qAcynJiGWT9wEDmtexYWS5toNci6ZaS4JmagvgZb19znmKKNrVcyUkcEQ5p2VXCFCtuBiFuqW65b78J6P",
  "key22": "43aqzaNn3vzbf6p8BLXNWLxiB3WyRbTXCGoCvoEhyBAEeqnaqnrnd68YV2mp2nrwCEAC54DaED2dX6W57sBLaW6E",
  "key23": "5nHtAxiXqqN98jKDrJAmT2XDjZnK4GVPhx5LGRXgoX2pveYCascJaxwxWoocKhPFZKadpxiHahstUdfptf73jVaS",
  "key24": "2LBsh1swS7BXcWCXYmYFXkFmTLiVjFv3KR1C3t9CXYwKgeTdxNnpszRFkbZxZgJewDHeujKJHLLwPG8VB1SggK3j",
  "key25": "2vD96hkuRiymBeAn5zVg6BTKZweswirjLUJtb4RfjM1ccgjLPREcppjqMEdm283gjDHc8giPKXEKneFgEY7Ntgtn",
  "key26": "438zNkgLya7hRjoPfYq8zNYGRXtpdL6hpytBKkwFruK1uxnPsna8ic6ZvVPMVBTMTtvzheMbXGxZW76XScRKDR4t",
  "key27": "wVx7TBJKBkV2pLf7e9Ty3pePRinfrA2ArQQhsbFm7KNAcRvKXzcwYZLs1ZRps2grJhgdm9mAGBvzPbWAGCxbk1k",
  "key28": "Ji6Bj53GQ3pohBeuH2KokzXDdZU4GXczVsxEg8ieEFUjuDWdsPKTuG2D6KNHGv8RiuzJBCRrQBdk5htaLk16Z6H",
  "key29": "622Lx8oG9C8Yc8bcgLti6eXuMhsmYDsDFqrRQdjT26bhTUT79dBBToZUYymTzXpwpdq41KdrhuLTBL59kcTBCK3i",
  "key30": "5jYa2v4UtGLGixxdhSzWoJoLGT86AHT5Xs8C6DsYiPs3q1C1RNRb7MN36Bq1x91Ecj4msUJsZfgshBM6A9xLzttA",
  "key31": "2x95XNMhvk6n6TQG8tvG8z8TcRui4NTtLeeUqKRqxuz2pwtBZXYNkLvVvQbm4mjiwuZaNdDeHMJU8Gd6HBvsXdeA",
  "key32": "7FRAByeybSTEvda6hxpaSKAhZ5Qo9AapExL6AmbZ2WyN6vrQvqD6R7S22orQUJs3EraXpPsHrPzxwpSPgo7Y9VD",
  "key33": "24LZTxEegnn1BW7W2r9fH8bT6ktZwrcMUeMgCiJQVeqKXjVuvmbSAdmtLFoRqgAbrwiJMfKz3LxbpP8JAz6VpaCR",
  "key34": "5c9xEEf9zRRQerMDjkGfBtWmfkuT6gPfxKaGF7vKVhxxzEymW6mnBFHiLcE3Po18YKnFebDSYWXrJvVnDSrAkjW3",
  "key35": "2KK6wwYxKVRbWtP91EJ1Vf9wqkhX8iDXAwfETjMBSciAza6SkcE1KzpWnj2zjoE9mLJVTg2PVzcyQT4u3tYnymyo",
  "key36": "3dZdXR8fw45i95oz6D9rqxAgm3VePqcy6ZTTB5rWUxnfqqc7PrBkqgW3cEWdan44CjSY8x15dCD8JCJ6ge51FQCf",
  "key37": "ov2RvkEt8HnK6QH62iWNLB5Nw2CnrjCQ3Y6TQuaD7G5rNtM3nVxnM56VdKDbhhfTa3QdA6PMuSfHajVwPhWTpxG",
  "key38": "3Pod43gjDoC6mm6FP4wZPQY94pTqcSS1x7BaAETbFAV8VynwJrab998UTufFJrVJBEg51nqKrkYN22s85CPx74br",
  "key39": "5YdK9FwWTPQEQBQdjExnJfBkgmmx14sscufvodarVKGmx5x6myG3g73UQv1oDPwEEZh4kjoziNBt1HfGNvqXhmnC",
  "key40": "3Gv5jJ5MBW15ZiFX9tPcCVhQk2upjHbS7riMkZWKUp6FyhesauaBDA1ZJGMkyZ7mdLULmhXoKkPZ8pmXW6suSsx6",
  "key41": "3uHL68YEi1VF2eSVtaqpiJV3R1JJL8URCkPt3DTocx73KeyPxtpiGTb6stAsbyo79o4NqHhwzfnArG2gm2KdSvn1",
  "key42": "5EbRCCqiQs1As8zijUtnabR2ubFGbxwg1XVjB1L8RqkrV7Rd2P4U1SCUupFd3ZDz73tcnkHkirPCVC2XrnNaTF9L"
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

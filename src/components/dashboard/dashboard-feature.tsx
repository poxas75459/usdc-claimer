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
    "2a2SmBGs8Ws1WV8p6rxYeTVWdYPt9pNJkJa8L7vhFfjQNVmPga35Ufizd8DGujdX2gWpqxKYTA2R7BocbhHbJCmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwDq4RWAsaArVjGhzrgEstWSpAxJQpE3P96mA2ryUCDfBiQiEg776ox2tDUP9bTqtoQMhLBBNTq5cEx9Uv1ffLM",
  "key1": "2dTiHsXv3ponfkfXfpJF2hSdSzjMbVBDPyFXk87WEEbXH65icnD937EWHMhUhoLYXtBUDMT1A7dGihAARQmxK4TJ",
  "key2": "55axG7G6H8XwspQZ5Ltmgmd6zHPcqbxYt8v6QKzSzM3ykX9GYdTquHH84RLRMVCGRD1HWQg9zBuwh5qbMjebqPzn",
  "key3": "4TaupYc5uhK89WjwYz8J6d9MVwApCfF13UV8v7bbmGehgpWxVM1DB6tiu4n2En3R7k58PPXB9o1XCuJYiuhb6pW3",
  "key4": "3T7hdcYCndmQh7UVChDMeh1WsSbkGwy6FXV4CtBm8ePf21m8toVbQwhA9U4FYJofURwjRbPua8erC2ipRSvbjv2m",
  "key5": "WADmbVRLSiHZVPsKywkPKwwTMk2KqgJ7wrvMKWf9yeNhAuuBH23auA31B74AYZqcTamqtP8uJZLJS3F2LpHYYyQ",
  "key6": "2Vt67YVUQp9bjh5JJPqWTuEk9fdiy1oUWBCDThvnpZf4VzejgVzbA3ePn5ZXSSHQDJGCcEx6V1GZkE8wCqpYhn8F",
  "key7": "58NNRPjf3ffqoPLb984td8vyyRCMPkXjbp7VRM8BSdhCjc9fWdtC8BuupBtSW1ujcRRASv9WAWBGvB2r4e7FSMRh",
  "key8": "5hLvXeQgEbVKiTEm21bdVettkj4MMzeLA8nff5XELXNrs68K7Ge9qhmnnmLX6fQ4SSeatorzqB9bzNMCBDLqGB7R",
  "key9": "GDjVzJV7jKLVhGawJMmrMAFQcFRMjTficDz8BsmdwUC7pfDN4T4Mxx9kGm3MTy39yMBxE8JGUvcu69e5vQ6tGW7",
  "key10": "3SQgCbYfkfPzERMC5MMnGXjf4U4d2JYJuxmYeV1gtbvfkPTcbU5quXtuwfRPkhSBrgNAXLxCRSeVzXU84V2QBsa3",
  "key11": "2oZUhY27ozNoz9T9NGvU44BYfN6du2qsa6AjBaiTZUUbGBSVNsg5bCS7DGsFkvW5vv49W8ZxAnwYTEW88X4LoSX4",
  "key12": "5q3pYLh4fU2JiAiBsA5vBXxXEYNRwGA5QUvV1Fh2HbXgPSLx4FsLbvaXzXkXibJw7CagTyyQqfGedd91Wov75PPy",
  "key13": "46iJQ7n66tDQLJEe38faTqJtHaoDS3iA7K4ESvq8q4V7GH93aJjeodYQeudWiae1mCm9KZuxa7ghjqvbDwitTd3u",
  "key14": "ETPpqxBtREqxHsMpYspxgx24LgcA7pRyqk5coA8Pd1uJLnKNqeWDGB1WWm4MysCCjfZEJkm8DcRnxetwNNhy13a",
  "key15": "2buyF3QqCRTyxg1WfWrxGnb8QEoT2HBYRVigezeA1Rd7KZYtBnohpsqzsraApR4xuw9uFaEShMtqmiu4WmowEGM1",
  "key16": "4QoeWX2NPHiZhCTosvbjUMdyavo7or5EswuDCvXkRDBhtS9Ky4NGKM19W5yaEG8aMjJUdw2Ty7wNxYFacDrFyErg",
  "key17": "4uKkEBsnjc2UxijQ8w8XrrC2K8r1PzzUDqBoL55uNYmGtrd3x37ZfrAumbb1LU5eD3shwFcp2CbEcBK59kridJfb",
  "key18": "JQ5cPCgrDP9YNg3KG7DLmBEPtNBRfSU2v9Sr1ZRAj16zTyZYqiveFz6zfBUnzio593js7RBjSQ729g9babsEHEY",
  "key19": "4SdrkNB5TgpWBZapr4PjY7NTBazgZytYdbsRVZX6gjReTsURYB51jurtXmrYxeZnH3ZaRqAPUHrMTU6StiGpCSMC",
  "key20": "4cMJksnA3JtqFQbZAKxpiXyEyKkeBDpwgHLnFGTqCaMnqsA4yWLeB1rNG5mQgHXPQmb3f9WZJw3uf3si2Eb9K1c6",
  "key21": "UqHT1vbprRwVmWy1iTPrYukFoBkzam6wRR4BAUdNJM4EgAAe2S8ghq1pnYhikUhkxg57ZF2yaeCjVtpoUDGv8az",
  "key22": "3tiPbjiszzDboxzyuB1p8wfMNQCAuKNAGjAbMiZ8z7xutwjNZcCDyxCd4cdiAA5oNRDS9cmWdiXWpdgzM34582qn",
  "key23": "2CKQnnUrqyL7jpAVBekQDfBFexXzcu7bJQEHudSxuDzLx4bwawV7qbUzTGViwXKwUDWPRxTnZMXm7KzFgBaoARMj",
  "key24": "xSJ1goNyX6aM7eVsD3btX3vSgVGq5Co8i5dv3Rv8GFCdwqb1KUovqoogF8eWnRnT8QM9vrzgYRPqtWNDicqKBsG",
  "key25": "14mjEuuK3bCr7einxeoo9nnwdYo8KgFtkuETSzMAJE4D9Hyw2dn12nZ7ykfD3ga97Lt2sdqpXa1sssDGrMBXr5B",
  "key26": "2YVuhZRyrKkyvZCubTYhNcC8AwEDtin3zUFhNpo3oaCzXaA6iKUEijzHGdhmtK6eEWoDJ4WdHjU5wnwBuSf5YRtk",
  "key27": "4oLdDLF8xnved4iyKHrRTK2UFPDNgrfc6oMPrGXdJDhF4ByyKnXVETsBHMABB7gE8Gzn4rQh7i5sSDggo3gcA3j5",
  "key28": "2naWqjxKsqaqYnSEW3GaAoZbFixRHidjw4qZMMhYhJ8AsDE6VV163izCGpFpjZeLbrKPwjuWHje6reRJV2id4qRd",
  "key29": "yP8VSmiqqMjVMNFYGAXNEzithVaRaq9rCMJt26L7rPfzYyytDx35oCha5m7yJEPmpbWCviBgWX7AoTfw1NPY3z7",
  "key30": "3ugFcDdWwhZjK4H7zMfRSq5SZzTsjScgixi7QR7p4sucmDjfPJLRabQb8s1qBg7GQLo1PmUuxQDX72f8EdkUsgh9",
  "key31": "4ACWH6bzNF8f9hVmcdKp7mx3ZKorK5MkBXuiTY5ABpsUd2uEXp4pQxyuY2NitxXViTRMJ8EGNPeUizGFTKfTn4V4",
  "key32": "JNG2DB5syBebVSvSDCAB4nWZf1oU1vY9BvX356ryotWcgnHpfPsppc6hgh7iXGwEhCWVBxP77xHsrh52j4PoFHb",
  "key33": "4m61hrAQcQwT2Lq711wEKuTT3bpiMHyhPXHG5Wg4qWdtwXd5944fRZ92ep7BnDSHc65Hie98hMfWjFnJ5uq2RrJ8",
  "key34": "3JEd4Qf5X4bXwoE8YZwY1vDQQPTsi7u9HJZV5R5T4haBXeg7EZfsiPNuqmDXzhNVMVs37c522C8XuFJdN7Kc4neb",
  "key35": "5sUfH7U8uxCoakNxmK7UZDXjuk6hLabSgYD2uSqJrQgQQFBtqNkgrfaceoQykqwux1RjRnMhtBFdp8V7hJNnafwU",
  "key36": "ifTf2iRGNwLUbjk5uoY723CWQNhYHzrU2YSJN43iL8hDE8Qpb6t6StRFrK7z2MW8HL3fWSKyzrN9cowCWNb21Cn",
  "key37": "3gdD3UFgTtE8bCcZEZmY5GJRg55DBYpuK9qtSe6Jwwm1GUCq6z95kM3HCLpkomCNL2XEEdHxqiwBHXMDmCLRXDHB",
  "key38": "zsqiUNaPzh7ssWYiAhm5pUuziVrGqT2S4GJaHdYpqY3bKZMre4hqcxiy9ETww7WkhzRWnPu6Bb6LQfEMP56fcds",
  "key39": "4KRDp9dUW41YJURnXcomXXyfzkqSQfSzJaU55SWhAtFABnZBFHnaWQp7dUdjbB5wtfrNWDvr1Lnw49qrqf26fzBC",
  "key40": "5pLCEEoEm5dzU9oHJeq1Yxkq7ak49tuNJSDQjm2NatB2uvg3eaFtWHze6uT9wqXK6ssb7XpVMtbUAsWemYyrp3G2",
  "key41": "4Y9LKeMyh3jTBb457KHrUZHYNP8m8hP2iTd9H3W4s7hjD12nYo7K7NPAwbFtaSUk67NKa37g3ARdhktTv8Zii2Yd",
  "key42": "3sKeGxSJyQPmH4PxZfcSeocZGiXxSnuv3iVCwJDbwQrtfHSRZ8n4jha9yvbUuBb3j3BgaTCfQCxQ79rCskMX3okW",
  "key43": "27n2a1D45H6uoSjz8n7qEXJaYtRvRHRZPVtuHvqLbhFB9oz6ifC2h5ANBhmywmQH6vA9nXCNXrvmQ9QWyY82dXXh",
  "key44": "3BWaVmEds4ShpRuT8g7aJ9A2cMSWSJycC4cf3YW2wL89wg7fafxcK7piqm8D3wnqrZmy88beWBmY11QpSYG1sm1e",
  "key45": "WzEPW2ZPuMH9KYdo26z3LRRd2paYrSHBmpxN7UhAhRaGcxwDXd2r3W6KfkkDehvMz811KitaQC34GKDpFP7hiyn"
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

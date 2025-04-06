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
    "3vfgFug3a15Mao1cq5JFkEJzMbMSS8W8fHsQsqNAkNf495Vco8mDSCFm4Y84WbGs7aH1ZypoNrBJrATbcDt3ca32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b8pZL7yQShvcnpZkADviEJz9NXBES7MKawrvmmgTwaUQ3ALVs8wUEdjv75koZpd6G5Dv9XqViYhbbD76hCqrDmh",
  "key1": "4NNSx951UXb4P726MJ4PcZ5t7Fva8u4KWevGNESg2xnxjA33R6yXrkn5fmyUdhrcnyFSEP3wLVkaqZsw4yYShLFL",
  "key2": "3MfSpwYbKLLqaxvETFeReGne3vraJ6878TtYRPboQUPMDqMDFGWMjYTvqKMtWyR5u5gWbHmVn8ftQduD3F1kX3kd",
  "key3": "2cc8s924enrU7ZPuYMBkjQmZFETcRwZbzU2sMP4JAJNac8jQ8uHi4tGvtkwF7n1Gij1P6wQ3bhSWaXgRNnezp7v6",
  "key4": "5Hwu1DoPKZAq4Q9rze6sS74eMBdZ37FgN974gjzSagn6A9Fegg6KXBSaVsDJMtz9o1PMFfefqCHRrQ6Y69bv48Kb",
  "key5": "4o5GEN1RvkA69gzRmNa4qKxqvPkmCtumGV3dZzSzosdNLbed6wYy5HZQ8VUHjk2VXuafDPULNZPnJ9wKphCeG1aR",
  "key6": "55Qq7fA4TNTsXFhf6Eeaynx8bibwUoXT62xmvKvSwuLU19oBsFpcMG1WRSeGFwPC2f2dx15hFQCn2SWP8sb4peJB",
  "key7": "5m42DUjmoUEgAC2KNH9AtRRELnqY49E8J3mcHY6pFqwsbVStopR2kzMREwRAHN6powyurFKbN7CeJJBuy5uDUwCf",
  "key8": "5gRJWubaAt9RbXiUvKJPqVox2uS4JoANkGhibxKpzgTEHnukvvfcKQsL4RCAthYZhcWGpjtuZHxUTeTHDeo6Xn2U",
  "key9": "4r2P72PfaazH3mq2bBd4jurDgUW4F8SyDaCrpB2KWxKFgoW2MKBqzLv9XGycGaa3h6XRSuAjLMhKKFyeypbARQyw",
  "key10": "MrXxaK7zQM2NtSKnn18Yw9ACA8kfKKJjuMKPihXYLQmKqhyiGQQGwZ3CGWgYGBSAoFDXBe3BKCBhHqS6zB2nnKm",
  "key11": "5MBpYVgrgGHWJNaZSgpRiQGXrDENDdZebKj4YVNT5JGBWYzAfuRsRMngZswotRr21LRyKUw5y2qj2hoC2TswtqrK",
  "key12": "5QXo9bPMmGigEinF4hHgV6LgpDL3tWAXpELg8LYWY4EKRkzQXzj4T2csw4Qn8px9MQxqVUbYhAYsbCoL5dciR4XB",
  "key13": "3aTZLY1YV4fR25ykrEPxjZzdmbrQxqU9r6D9cwhNwJAx281xnowvEETQHjyhmVVrZ5Y3g4nQdCaYVGux8JxLC6vq",
  "key14": "3umghDM7as8z1PbBTJdw867GvzjBFdyoURDzo17iZ7hAxXWuXsw8rd5u1vKX88VcDoL2B4p1PambPm6C4AuqA5QU",
  "key15": "3K1Yndv8jsDtMXKcZvASs7kU1BBfpHYuSXAr8WGc6UB2buS256q6xNJ1xdgZ2GpxgDyi9m3pg9a4MxDDAkJ1QcpW",
  "key16": "1V2aZkECLPbRRzbjcJ8eSEVeJRcuXax2VTH1R2VMek6xEd91iQ3MKo3S22ALBFVcAXFM86i5Azw4oFQCt2ndD7Q",
  "key17": "3xRS28UzrrpHfShRJEomK9eMZX2vGWWp4rhVB5sSgeGqrxrryriKx3pge5vFhTvvhkSjEbqdU8VfYbTJp8Ydq4qS",
  "key18": "2ecVqQUxrs5268SoVMCdDAJ5oYgzSVURz6Tkf5zu3WJUBvXJyRkRYTBLRUw49WGKDWczUCkDAhdvxx3zHNuWo73U",
  "key19": "57cC1dVCW6WTqy4L5dKoVzZBq95b9uhcLdwyhNGWHqsBhFmtLSPQ53uwVmK5PQDXDh3KkBgouhBjxTsNajfY7bVk",
  "key20": "dDVwnCiTJnkREdt3KKEnGJ79cMGRBUmjVtja1Qsjkgpeq6gukw9rZ4WFAQGDaUGmovuLNNp1EfArS3cUMwhnTkE",
  "key21": "4ct2ZVBJGMjkknZoCa47BTM9BcJfFhst2K4964Egzj2EPxqFfqsUT4t5m7Uhc4GoqSYa2RtJM4Mjfmr8MFgKHYAX",
  "key22": "4VeCXgwGyBumbv9Yb3ZySChnvb8bU2SaA6gXk1fN8scHQgcgMksn12WnW1modU14VDnawhaiFSRmbeBGstJ7DKyA",
  "key23": "fJTFEpMRwHPbK847JnvwTkEQQ2EcntvH9xaT5mjBS9R7UZoqN2tBeygDmyynXYf64ovbAHkt7dEvybumemucyvP",
  "key24": "3jf72chokVFyPRg8fzjzrpsmGmHM3aenkbt5hm6ffeqWkLcoEDeuN11JvT2TkYs8jJaavGDxieNdaXGTEQNGbKdz",
  "key25": "4pJL5nPYEVZftt4rdgJkhWCYPZQ9R1Dw3ksyiaB5ugTL2KRD2DxSFtnnzvoyrqAS2b2vuPdj1YGyXnF3HSQ8dceP",
  "key26": "5Cgy1E7EfHSm4wqw12dQ6fFNyRsUAEWS27qXc9cGY4fmqoy8Rg7GRDviz6VBnr5TvhoUCraNjqm3FCZB5wcqRzi9",
  "key27": "YeXWZCSAoNJN7CkAewFeEmCiYXBuRKq59gkfuStgBAaqYiG7htTDNM5a92akALMErBfkLCufG4H12Yr9WuMiBAU",
  "key28": "4GMyFXax8vxpta43aZPbaGjugXw1U8UoCUuxc81c9KpdVpTGt8MrYmgKfiyWp27jscYXeQ9j5LW6RxTf4ZdQMTDq",
  "key29": "26KNvyAXEZhNzMKyJWEDTPfJZRYbeA7CbLT33oYiHgBvXGFNQ8rF88S7P8xYk3XB53545VovAGWF74LF98fnwvYU",
  "key30": "385P9pvccqemZi2ik14C1YPDwtEafXAtpeFGjM7ycvLqdrPLHqe3LVJHWB8QdSSqFX4fzKU2MZYCtzWnQ66Wj1Vt",
  "key31": "4BEKRDbFDfwK3swLZ6m4Ro7bLVchVM3uG1vnVrTz1sjGRvNLNa1LAAmaPfb1p7kqMGHmoUwZux4qRXDwgRJ4o3t5",
  "key32": "3t7KxvUFWJ6B2erYSRX3CCd7cv7wCVgRMFiCVAt5cVLXtTFwiKVn62Je8PE3RTXY6UHPXbSsM8DDbBY2F3keA6tg",
  "key33": "2K1uGX6A8pRKBH75XPimZ3i3rqkjuuLvP7aorQ3p4Q861KuM9SZ35SYTVNkcSZCbc7oByA7BKFaX8R2D4v3wKKHn",
  "key34": "s3hzEggTxCBWL13ZRYWZ6M2YeXhaY2W8Pdp1UU4mRxa78g28vGyCCxf4i7pKdss2hN7PvjuSm5JtniTK4fXH58s",
  "key35": "67WDMfPWEvS18m3weoUC54m7CZ9xkjtAKU8TjE4vDjqREd4AdktBgiVcqRKrUyJHQ6VR9CJTgFq1WSuqLWTV99JH",
  "key36": "3RWcMLPRX5UVgkYXFDPiRtJgb35nMibDgDgvVtWuUUzgXo24ZMBJndFf992nvpXeE2NVQMVagwEdY41uVejB3pTp",
  "key37": "5tnNpNEqzqAwfgNPiqXRA1upasEuW94uATMN3WgSUqUEnVG2DGdrzF6h8xfowmsGBjHwtTFZ1Esnhh55FrjiFgCn"
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

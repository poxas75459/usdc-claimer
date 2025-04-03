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
    "4AGTPjKQs9ko3HmZ3SFqqcaDJVoCACPhzKiE6GEEZ1GqFd3cHTtY18fQkRCGnipsJoGxJKs59ATeSBfvRGmMXWT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28bHhHzcpEQGu3TCVkQ8FKBiQ8PTtLoGQzGtJXDEDm8ZMDrDKt8LSB3x56f6xwwsyqjgREhyLBymaQynrKxnMAxK",
  "key1": "5EukSHB4hTe98USMpDR3NVLUWhtqgR97RSscWLMZsd9b9SfwA8nVygpc8XA2EJmp7rVcag3yHbvPrTGWHm6YJKrC",
  "key2": "3PCtgW2mCTiRRN8ys8WdcoNUzuaam13WRb9pyLzdukVq1TWvxgkGUvVRF9U4kuQPVTErMS8qiMsw8TSxCgT5bZX1",
  "key3": "2mXN5VmkycqeX3yGYwbqnXZBQyGpsLExdBDe6msJ59GVMgsY58n3s2dHZaCfEwb4qWh2gpRuWivqJ1GDWEesxYkJ",
  "key4": "4oGBWYMDAthDdvtZ3YhAgm1gSSjyV2wRVmoxZ2fsTPipT6bLa8dKsR51sJdRz9AAfaPVBxtJ82jLBgVjhvBZQTkP",
  "key5": "qVBNwpAPGTNf7m1ZLs2uQdMQDBScUKHNrh1C8LTpW4tQKYjtzkNwnjy2sBZuBoBEubvE7TLTzTr5ax5MP6tDmSG",
  "key6": "2RqFxJL9RX5wjcncwZdE8AQNY8xsDW8TjV9XxeBfLczNesKT8zFKPQcwoy9gNA4LverZTRm6M3cKexS6GvA6HmFf",
  "key7": "419gEa79MJgmcHVfMHyR5AsYUstMVQ6RmPjcjgSsoWQ3caKgr2JchX3NkX4FHJcaJeBDupJ9ua3fs2eWtAU6wEND",
  "key8": "5H9hXX2dMaxD9W9ECVpTBc8j1JASsxiY1DPGJUjNeAFzp43DTp6NKQjGis3G4wrKizbHJMJonSokucvrQYq35aTr",
  "key9": "5vjihYvWUG3yJ1URUUZiJdXQzHKugTJmuAG1sLiKxQFXCfJsagJK1VkCDgz2hMLEi9fBN1ccWvR3pgH97RVb8tcx",
  "key10": "3nRNcqiZYMXK25Pkf3VkMkJMd1ZFKmM2mo3kpQveeW7Ga2tjny1AiiJvPkdFQV3VaUGERYGw7iuwATAH5WGhZC4F",
  "key11": "CwmZ7mrDjoPVgzLc2vVWhbti8eEEU7n8pY4mvE39nKpCarFr8F88HwnP3Yk4A3dHNUE4hwwxKHQjzPiDrPaZQWs",
  "key12": "4jV5ozv2WSi1WWFseg4ZdtkRVScenbhQbLt2UWanDvUhjnipz7qNmSgDFYe31HsUcVKqn9G5CxciZ4WeixA7H7w1",
  "key13": "2cRcnLA2FAM33C2wxZgeAmLUdTieJHW3aFkPfzLJsn2KEAdRrdeao8nQMCBcPCExjh7gcCHG3SyRmY7qVeLRDpHF",
  "key14": "5Yj7yephGX6X5sczjbx2DYRNjBCG9k2A4r3reExrfniRirX9FYXmE3zh82dVNqa9fJdRiFqPCLdVAKDkZzpTDuy4",
  "key15": "5PtwFgG3judH2gZgQei25gKxD8gvLjkGoRsU7KHFLLhSJtqtSsSCWRScqGC6H7QBJQDQ6NWofUhim8cvWbVBpPDH",
  "key16": "2wncobVitDfZ88sfTumhx7b77qehW97WeJb5hw7YcDLvWZJsGP7tueihR1dukmaDxNJ59wRmWPNXpW1RL1JSYAKr",
  "key17": "2qS9TYmYiBkgcVDHD6QaeU3MWnuG6Fnia9K49s1Anex7EAeEPw7D4JzFW7WfQ53Cjo5qyHJFGSqU4yFriSBSf5P9",
  "key18": "3c48pPkbCjVw9TzYQdJVfYEjYRqFi3LKTAsBYXh8dJNxwuhpET9F33ew9vh3PFEBD9dtREYg1hBD1eU5jgEAXxmd",
  "key19": "38NW42JQk5wLSCfRiNeYTFyTyFfWsN4pyB9tfNic2xGSnuSmG6fduwhQLgiQo6B7EMC5ExvPGkyCotZjeFRDJKHp",
  "key20": "2UuuZ4Jv2DeVQ36Jq1HqStpYjPcBnsRZt4zf6GT2DsGNhMx24xaL9AWWHymTizvEUbY1Py4gx5BMCocVHWGwg4cP",
  "key21": "3ktJT39nH8bfbtTQ8r5i7rUmpEAap1PHBrhikRGFz9y2t7YQz52J18msmkGLKonzm16QKjCypwPagzVXGsDuGLyN",
  "key22": "5a6RDW1N9ccoUknDEJrVp5Yo3u6jtRG7YKJs7fe6pNZBZzdpTGtSW5L6iW6RGRyxXuSyBx4V6bF56n7una8brpqP",
  "key23": "3VfhDJqUFoJR79H6xmmktnHb4SLUnztm6HfUJwcTVANuHiRUNwkgHEXwLSkQVNpmp9vMrQc3XparwuoBb3X4FUiK",
  "key24": "2Z4FqiQFrcSGY7Vy3LVcbXNeYe887uazds8NjYtkX1SSb7eby5vQtBpEXpkSSNoxvCXb7efFKSLK3oJBtsSscx2d",
  "key25": "29nmNEv45kWUpuKxhqHn9nvk8tRFkNukYnsPbwzmdFHWi1RS8TbHvTNzcLCpJ21UjvQiXUhTSXhvW4gASsV3Xddf",
  "key26": "4ea9CvqkZBUZ9c6NgJT9iMFtkciQMZfbrpx8Vnq9e7S1QrHuKJXGYEuuHZ19MmrBHfufVHggpuvrxjw8z3d8E3aZ",
  "key27": "33c4hsfQH9GpJ9C2ru7c7G5Kepb4f3tGKgBa1UkA1Bei8TAg8iDUPtU3jKyAzmKkvWF32hK4SEb6UsxW34YpkFjk",
  "key28": "2dTHSK9qpUKaLmCTXeLTqG1zMG9yCSYXgM6bcBGqKn4227wNNzfErUvjTtxpGSRsAw615d87QNQPNHqs4TRG2qRC",
  "key29": "HkwZ4oAmKgP2taLSSpfEXkHR5x72KTqk2QeUdgWmbr6dLNXfQDmhSHCQDsRrLBcfUUzQ1Lx9G1WDSHrVchnfz1P",
  "key30": "chyuRvdYC5ewQAvVJEKZx2pdhfy5i3G2mgnf5R2erurXtjBJHTAwWHN1BAKR4ipkqS944dbVRRD5yeWvWDS7xas",
  "key31": "28MoT25oAdV9MmAwiBLxnS3u9zBHXhHqBuowgeL2vj2CfJngypYvvPhu2v6VgDzGcWLMRH7H9gaDYiJz1k2aJKvy",
  "key32": "26CiHpgYHeB62oZxGCc4SQXh9BCTQ2sTsvmTNkncKr8BnsEtjYQRHUUerjBcsC5HP8eCY8336fv8mFtyX9LTeHiu",
  "key33": "573DTa6hfaMG5fBXsTKdQL12EwWDgz3u1i6Sz1dTB4yhCqgGg3xHDSiRzAfv9pdg3UxrLdWEaaqYixk63sUT96oT",
  "key34": "2YZS8Jcyhj33v7X1p2dnSzjSPvurikhtHBF86c5rYAQJWVg3Uj7LYegcU3ECbSs7e9sixRMd3arX2N71NVEQujDL",
  "key35": "J5hU8cKvQY2G1A4KaVuhGCXArbgNzcBJoMk2W3WoLf3uWetPTvxBjvpyNRKEqQ7choMCfAa8csD4tzqr3zg1PVr",
  "key36": "4hFqG9LBPaWWDm5okwY6xT97LGm2FYT1dsyYFjqWs8nT1T22zTWQ8L5PLRNiqA6QU9s9X4nav2Mb4T2Pxn3US2bJ"
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

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
    "qEKsLn2nVZcFdKmZwxSradSLgnsyz5bM6HAa8tF9R8ocQNKD9mfBiB23wWaot7kNxCyte7xBkS1WeC9WNZvE69J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wZTcUm8UxALXbafQs9eak44tQCWySAxgJShPe4JdavjZT4i1oLfwEnb9USdqB9BBX4UBUcq8Q6Up1L2syuzTUw8",
  "key1": "5xvEPUdn3FMxgok2yuzvZGPwyG13d5ocb8vFNSqDGCGk5NuxQaLEemcr3D2meWo9UCp1kRgy4rvCgqcGrWgfkmij",
  "key2": "2wqniZsFwGzowaRNeTwzmzCF7U8nrbtdoG1bibXcn3yjxCeekaZVu5k2U5tKa5JSwTqKARBaaehq1YDopu5t6ahW",
  "key3": "y3EbV97FfV4KLw8nKsYqwU27KEBri6FSWUChCGxH2wkuPDi5Wh7tdEBgc7in3fgBPz214x8sMqngnp6sJMSDh1r",
  "key4": "QRPinaH5DBog6FsTbUQXH8MyPmzvDAnuewC6kMLapFDzabeAhEBSPvDmAJnDNMKmxR7TAEWEcmXauBCjaqrJcbw",
  "key5": "4RZGfDvK7iRYpPt4fSy7rngVAMHLBnAiEig1A9RRyJKPdkCzQ1AqJuP45MoW9L3EzCavpWaUsJ5ozvUZa2C2Mz6U",
  "key6": "9eGegxhDqtSTGt6TeuWrwGrYoycegTJ2c26uKB2v6KHNMgN67NGiDTaxHootWXY279xRZjTUwsjEGSdSnhsjx1R",
  "key7": "4tiFky1BzoCoyq3KkAkiwJubmNPXxHtR5T3DzrtUgFteaNFd386tRKcwz7cbdXHNrZF1fRzoPsHpshSm2yMsS1Zp",
  "key8": "3M6BET2CT25vKNtj9aNXGfRWWrYT2ufY6czVYeXXYpgvpamr2eWWyEspeuRggi9xXFAXyDMse7eCCSeRG4YfFHcG",
  "key9": "5cSNuPw76Y9jNQVd63UVhbpaU2ZxY2THhDpbw5KhxnwHaUENa6JYLPvX5TfpMnWdV2wZyEKN9CEZ9EPEtaBvTGU1",
  "key10": "5jiPnSqVypfC1GtU4FLYrbyeAHS189fMiU2asnTQujarybwYpWc5XyUaixjfcdVsyZ4ES4vQ4JWgCmEhdT5PScAz",
  "key11": "5eimq3TvqU3cZNVaU9u6T88qPg87nDDJPcfN7ifMJhwaXGECSNrf2Z9NtqSRv326m2DPA4aU3yZPYPUpGfx9T7aa",
  "key12": "7TUWtXbr47g55rtzAngyHzWHaHvpFBxXotL3o32L7S9ZePrqMDzoyam7V7Uf3moaeXUwrCKNwdfco56iJkMxZiF",
  "key13": "652CA5qGRiWrA1pyAn2oTCLCcZEAFrihTipEE9vCm9QcZVPopEJ1U3y6ZdXqwaebny4VjDhhDqp42M4SDyRAWrWg",
  "key14": "24RR2Z3vbscBJ7QRY6kWcVg1axVRovdkgFb9sivcEuyZV62et8yopwqdLuYYGLiBdbc5o5hww1v2d2UU4knH5TjR",
  "key15": "5hnPM6paj99wqWuuQ9nEECfcyWYbGL62LX9YNJuAkGjJjtgfT3iMLwZnNDon5PDnjKECtjEfjrkWoZpKCJYrQjKd",
  "key16": "4GuXLk4RpZjVQPLdCkmPDutLUX3yiVEqHLtq5tszqffikHxet3RUa7FwVzZLPV2x9ybYpEnbFnTp4sJP5WbZw1w7",
  "key17": "3M34wQLBLi5ZzGhPFEBCYUboNUZpBMGKwqSe3qdsoJTVLBWGgrjtMR8uNfYg2YN7iZHkPXSuxjRypuzs94vNkSU",
  "key18": "2oo8dxbsNjLyRHDNKLtjTPht4AzPUSsCbHGGpnfEpRefvh7tc5MDYYa1E2ktBZSjFFFS3wtoAr9rh3fWtdRK1Zdc",
  "key19": "bJwfQyC9qUvnmMpghcJFpzqqpzGo2E7g7B4EnWCaPT7MTrnvrwHzQSThuxfQS3WUJJ5XyiqQsVdLKwMsRrvc9Fa",
  "key20": "4f1bvFAbexhHsN86j9SbvpfSDo6TcRdLBe2ttWsFPHhKenUoSpUqwJADco1pCE89gbMZu19Q4RMGVAWTb8Dqe8rh",
  "key21": "4Hs69aM5wtBrcttExHu4VA7gELTpzHLWQ9VsxVTsK8hwbyTVNY7u1ak91hzvMi8ZY4AD1MeW52RZBUeBesAxwHqt",
  "key22": "5Y3mwckuvpxdUoQNmNw8nQMVSZp7fktBfnsc3zUURKzJ4K81wd8KdCxGPrWf7PiyJ18CNt32ZJUgrTqoeK68RPgb",
  "key23": "5ePU4AHtGCiD7WJjwX2XiLo579hByrAckP27Yc1fKnaFnEjMaCMYapt2dbnQQSxKpmpGq69zPYeQXp7EAwLmYYVp",
  "key24": "jiuqPGKq81fSLg5PW1SU6qMqBND8nEk6sqqAcL74wabrXHV3VPtAGWWSPDdHAkwhRv1GV4CZPPccLz798dUHM9C",
  "key25": "3hx4F4emEeKyvNva9fhaGpZJmDoYoxek8uhFscfbHsQc6ocHRocutetorFboa8QxzXHaM2Z3LePGkpJtDcSQpkGR",
  "key26": "3HR7d5MaoTX2fKzHQe4SWkqrnKyE8wZHUuwxQSFKamn14rvjf2ur4PJJ2fQwijxWYYP4yLCz9etJ3FSnXAicfqcF",
  "key27": "Ukz6SUodc2FnDBEzsjD8BYmjS4kaoXKE7sL9oLR4g8hYsxgm4qtrWYt3UcN9gtnH6dhJD4xTsvZiniTkKW1sovf",
  "key28": "mdXkXKacuZvgwgmJjsmR1DvVdYHeYV31BEU3qCYua76XbXCurxSU7Uq88hbVGwBgfqM4de7e9Npf5488xA1eFG1",
  "key29": "2ZvfmLDpQ6y1gYY8SXYX4WFkeVz128pucq84fyKY2JPcM7zjpikEv9uue8kS88qsddNScQoqnhihcypSm9GRBhV",
  "key30": "4jsRnoHRC1Fd6rghvwBwLbS3GzGmr6DjGTS7iSFG39uxnF9kuKxy9KV7xsxrq71hZnSeDDofyGvMd8kkRCpNBsKE",
  "key31": "55xhbfDrCsKXmybwzLwJ6VkDv8sbUmP2WnWEWjK4aXfCWpCoXhuKKKPh5gfuP7xavdw5fbFESHWVznLNp1fbt2Xh",
  "key32": "3En4RWchofAfrT3C1xqHXXgLuHEJ4aTxNhDQQXmoUng2DXhhJeRF7dcso6QYaW1oUTvdQUAFuSSbZGEQg7uBmpzh",
  "key33": "Fb8vUCVeMALKqiRZwe3of1dgeTue3AYaM2u1AXAPZQF2AWAK3Qi4Mrq47ncN6rzVEPcUBg2nk4asRuC5SKYu3BL",
  "key34": "2i9UziHtpKozYuRzUQJvF6KB2uwDmqVx1AgeTujvYqphxWuJD7y8z74WQRnDkubBKgHBgYpNTqRP4Xs4HoFG9dGj",
  "key35": "2SvpgDZF56Es4MwsLHG4NhutJoN3e1gR7TK33CuE9yPkeFncPTcT2QaNVtE6bynyQdAedynRe7aDn2Zzm5Dzm7jM",
  "key36": "yPvLisQfnKvz2nn8GEEVTRKrf1EMadEgMD3n7VG2xvprEe2RxSjKCYZJ8v4eEEjMcChH7bKxQiUJsSVPKkaPJus",
  "key37": "26TGtsjHEbXmcKDfhXFErVkUeDVv3c1KDxx1UKVt7jjJJW6r4nVzVPrb8AEAbNPQw6894HZjogYnwL3h8KAejaiR",
  "key38": "3r9DrZeNF39tt1MWZviFTqY2XadeLiFGpmALLkvcJ4YrL8UPS9qpUDyowXYX1Nmanr1C3QkWhJvjHZ48o9uqpTgZ",
  "key39": "iVU1Lg3Td4Y2jYeR2uVgoKNZ6ywBmM9hjxVYu3FxxTr6WR86nWb1MqKYxWCA9psAn8NeZhqx9FAQjUY1cxWpqSX",
  "key40": "4ECYQDHqmmpTZgJTvYisV7tqURGJZMZLtxeKm9pEGqgnxtrxEZ2PTe37CgbXNyygmeCTJAZzKv3X29cJqyyL9rcn",
  "key41": "3LvAVsPQ2kHmUAxtcpzmAtaDtyDh6x7fTEWSYN662GGBVVHFBsWw29kbYWKGJXS7crAweavcmyAYs55T4gVRNxDJ",
  "key42": "5Q3NcB9ZKH2HGVu3miRUSB5ZnNghetpQR26p2zwwaFQxoERHpBFLhjnagxEfDE4tPB8fp7vxKNrSQfMnxsnJNgG6"
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

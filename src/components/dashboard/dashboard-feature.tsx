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
    "4yeuQrBYKVeCmheSnmDUhJcMgWxeCoCKjZmndZ1ub2r2h2AkxrteHSrqpmCz1xkMFAEpAYDbw1wAKNHyJAXvR4Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VY8FG4Fm6DjquT66oMNWyUDh8e8erjX8zrida99vgNnoENk4G8bRBeVK8SqX8isk1q4vvzLQ9XqFd1N1MYpkHv",
  "key1": "xkFMEiz9JmFoNPFBpBHvp9pA5iEpoE6zkGvoNWB7Si6SWQpTKmKHbCxYsgS4SPWRWL54punHT22T93fbULbkmfP",
  "key2": "5w2QHTGckEzuiDimFph2m5AJQNfJJoXVSQLR68s22VwF9nCafQeyXe3kCD85sYCSFiVKvkneHZDfWFBsXRzA5CV5",
  "key3": "5ZjsQsAeUuLFuTKkkoY6BiDd94kqwvJPY63p2KorZ2e4rJdrTSv457fVnJixyfFcnpAfgWscKGQMvDDDHhwtsX4W",
  "key4": "35kT2DpeUunQfLsaZNJQe9vpBono3kKi7RUe8QQ7AKGx5GRethMHMcMQLdmnXe6GPtCRefYdPCX9BwBEA8bRzKY1",
  "key5": "4RNoLxu3uxeGegJWMrF7yeWpNcH1TVXU7Z9Nrtk5Dv18RCqhmqvLXak1jUQH1FyjxboC2Lmw3Qe2bjWJUs56UPpF",
  "key6": "2v19bdwWq3iofURGQbcPWvAYM8A14A9nqCKRBdY5RRg33jN2GAzUjQiwoTjPvAZYg9qaAw2cG7VR9MxvqXL3VGnd",
  "key7": "4u8Ek8Qhn1x4Jb16Rjsa2R5HCGYAB3TvM8onoBCUPJTesLhzEtyXrDDP5ciB82BwkxHRdRS8c4UhYSWhr98exr8Z",
  "key8": "5sqdW1a3P258sh8L7QUwRGiozzykFfjW7Tb5KQxRszXNUiL4EQPQrrZAaqDunpQZpWtm5b8NdxcywQe3JUPQmykJ",
  "key9": "4HmVoLkfmfquWuKb4Lbch1JQJUyeuxwWMf9mbkvThFsVyT8eYXmHEb6s4tmCvtAL7epezp4GKu9g2122jaAGqP7q",
  "key10": "35hi91bitiyHKpUtkq6sdoK1A8fBM1WpvXoM2rQfDuBg4D6fezXdzRSEKZkeAWA5dnXsHCWDWaQ8qyBnTGKBq86r",
  "key11": "3KWnrp7sAZ9tJLeVu3Wmdf6BhHZd7tFY1zU2PoTUHnYM7nodLgGwKsJtUe7JURFK5z96NvWdzUEXmvNNGfentzfT",
  "key12": "5QtUte5ySvhniyCSj7VA6LbapiW59PLhBAKoC1S4uYAQYH4un88zFad79sGu5MUjdL5tPoqutQxbb6AVQoNhoMM7",
  "key13": "5RPKavaGwDLC8pmDifcbxK8Ezu8qaC9Y6uvHbEGx3NJiUcjhashLqfr54T9JPFZ4WuhxetWyHQuXxnk2WvxsaCqb",
  "key14": "oqHHRf4nRq5bDcWnt2jecipw4scphKFJNR3xR9qQWQWi2BsTuJ8YVe5VNrRZ4vdFQKGEZKo1GhCezJSpyfnpnLz",
  "key15": "4rWJH7vQ4ryW4eAqWybEcJt2ug7MybUioxkKP3qQyCaMLESit81iTDgVDTLrdYZiMiMYCALx9N8cSkKNX252U1Nr",
  "key16": "3ete5e7zbzr7BL4pXtUC2TWPZWhWvot1GZHwAQAhhjxfGBrxACHMU2CcCpSoaMyjDWmWJHSiezkXbPBCopvDgdJL",
  "key17": "ZPKQdmoinWgkZnejLa3T3EW1o4befBto33sqcGKXqeUoABnsuezKj6stJ3CN58QTR9XfZKGazFRUHddjt5d1maw",
  "key18": "4TPF5iQCGMyavzWNpTqTBz2xbKBpL4jDwC1cdBH8baY2iiRshr6cfbYt6aECx4S6ypWCGdrqCHSHJfNmHwQyWPaU",
  "key19": "4sLvtfVKke9yMwhho3RcpGNNQnNverL6aaoztyv7AP9dV4rs6dssmyDCNawCut7c2YBfbwrHqV9nXDjP5QKabs96",
  "key20": "2NNTNq714F6xRZ6AfdBQ5do9RB6sdbhDHpUn2dHf4dD1BqbgfsCuqeQxifAFEUzG7iHKuTTHuVGTH6MdoLewFvwN",
  "key21": "346CJgQYzn5ECwbz6Ws2WVXUCFVFQinrnejRRpD3mqgZkmSE9ZjgCoBWGMW95qL8K64cDFR8eAiD1AKdV4Vw5ddU",
  "key22": "325W25PXUnPBc9QajzKui2LFSjaUuSnXEDjp3Lc3QH4JEES9rdSENHLcRosMRkuqdRf6W6tJnrbRreezue2o5tDa",
  "key23": "4PTvuh93CnWs1uoQbBwxAxBnoTzR6tH4NGsF2N58b2c1PGtWAjDGZZoixcMQXgWomt4AkNYQkNdC7quCSGxJ64pD",
  "key24": "Wr7k4fPU7PCjAUBVsDWC7JoxHbAdM4kLZ74Ujnuw5rDibNo2BmzBEid4U1b3UQBjh1F9kXfWvKaCPmauW7Eqbip",
  "key25": "4PHmZLjqKyB686rsmyVPCy2GLfXJVWEVAWaPRoWuyPG71r4MM1b6tCinuZBbHM8bJkf8BuEA3gYRiVEhaDNxdCb1",
  "key26": "MaxStDjJ2XLqEmuK9V3u7dYDvR6qkMFGFmh7LGzCgNHRPbXviVbXNAPxraR15ojWcAAttYyFR8NzPyyHaUSLRCb",
  "key27": "5AJbNZNPdNrWbj2t88e9zjpWcHPVLFVvFGY9bk38jtC3FQryvTtkcW53pFEd9u9VoACGzsdZ1bwAJ3WFuz8hicra",
  "key28": "9S1CVtueGRx6iJPiByArz28LEWEXmnswwjn6noVQnGETj6j6iVeuHm3SXSazohXbykzkfUD7hq3Sj4j1Dcaq4nL",
  "key29": "5KiM4PxnqTqwF7JS6amEyH7Zy65G58wHwnBrgTCvFDa9oioBfyDcMTXZvevHxqXNRMAbnLugNNyG6pZHMUtGTjQh",
  "key30": "3odtfRLKEUsQHHjht4AtEwiWWL2qgNfF14jLiEo4W62aBYTpqG5T76oiymEi7H4tCKFm94pmkat9YjSKQ1P5q7DW",
  "key31": "2zscsDG4bMAmDEvQstseaR1zoDXKbsaiHxueLfcQDY6gLfJpJwfD6Q41rRmfMRSsJz1Y73jvCjzDkP98K3zN4vz2",
  "key32": "5Zyq9HSXDCqxxxpn7SiFNw66ne1e3HA9msEHYZwnc3Wsrq4foUc12Fb3bwNH4qBGUaUwS56u7fbkW6rMycPoxR2R",
  "key33": "RGB6UaQzXuF4ysWAJZQfFugydDjXyfCTKa9hYTV8zj1m7DhkJmg79t5eXaxGuxU1csSDKaY1RBKNZjwdohFLoUT",
  "key34": "2DyDJU33Q68zYmQQJJyqjaZfLD6AKyxMx9FBqBbmcudbNqDEexnaXFCEGeYZRayxZQHA8BKr3qU9DhhNiVESdX3c",
  "key35": "5CtUuaTd8wGoUuhHP4oPFto3njV8WaURKsV5e3fNoEdXA5Vf3XrofoL7FfLq9kabT6Tz1teYNPWdcNECDrriidzs",
  "key36": "3PzR48gDTpXC3oGyKoP9cr6PBsEDmq6hYMzrZQ9GYBNjHzQpw2EVTbmJpx4GgyKt8N2tHW6cWpuxxseKi8oDSEHV",
  "key37": "5q842BCQ4X6EbqjfLi9SxFWMcRvSzN2j6r6Ju47GR67j1mHeuTW5HPTt4UuSVWBnzFhLVPmAvquHeb26YQEZ8R2Q",
  "key38": "5scYxVv9iDtbHYs8MN2uh8Tyw19kSi3V7WTLUvWc8LouZv7hrrRpoVZhCGxmrtFXxDjAQ2pnzHumJUj76gsGei1W",
  "key39": "2Gypdw1Y5u8PCmbmj55EbpKf1AmNAAwZbRwLyiaRUHpeWVoBepyjeLKs5MkUvsWoxXY2j1WXfenCKiJZiUsAhMJb",
  "key40": "5KPRPQwWrLZjusTEhbfdvwqNay8CZsYf62ddgQEhTs5yz7Q9nEe3sEwiYcM4dgRWmTyvjUFHkKizAosfurKL2HkW",
  "key41": "2T6GrBnN7x7JLLtCzQH6kwR9RRd7cCPnWY3sQZSKye6APtdxFF7trKVrSEK3PMvEeLAudF7p6yWGJBEm1CxVo5z",
  "key42": "4PgEr7mjA5seaSSgtA1m5ZT48zy8SHZiicuwWZbfyajDoSDEaEQxZeeBCgyW5jBGCTncgVwt5D5jnoR2b4kzK2zu",
  "key43": "3zphe5LFH33sDuFbrnGWYyPcbA9ynSg7ZZ5AfJwm25ELNruddVSzaGx8gidh1tp5LuDjrRwWFxVt9GysGj4mwc8i",
  "key44": "3kZL2EdAKR9gWLResCw1iTY4FTJn146Amtn5kYBPGJAdUULu72Pj1GJsWD5J4mU56LzASU8qqSzvpbVd8cEVKugW",
  "key45": "HXUioopyaXaa77YtEQSmm1K6yRpd6KfSUSzkpu8CKeFhb76xhwi1RFxXr8av6B7BFBDfj2UtTrEMgCVV2tCtph4",
  "key46": "KbHnFvFdeQRRmGMAEPBEWRhsC2oA6p1a6pw6cwuHJMsYTurRNsWZC5GjfbiJ6AX8et7QjY69oknfJjTUHbydDRk"
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

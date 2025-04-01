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
    "582LZTCJdtSyvMkFg7Q6i1Egqwukbbuvc2XwhVHwmoRsYjyJg15wT63Kt2MMUvP9SNp8pCQRxhECs2ZjVXqEniw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPbyRgqsy892BN7UUKaXVX2GBABNRDqcY9PxyK8SCe1fDVCPV4QEncWV8aLeW5E6dcXY8VFoyFr5tBPxppw2rnA",
  "key1": "3rTwUsxXCTNVHhkELau5okGQQ9zDxtxyETkjPY35nkEw7jasLpnU4xCqnm4PtRxxCTH1fvUFDmaTTffLxByzdGSR",
  "key2": "5Kbqj7hid6pRVLthRa652yhhMuFAmzt3ZpSu4hMxXNn2WmWadzMw58K765jX1xbWg6QWxoArH1FbXRRxgZSL5CUp",
  "key3": "25wHCLcDCKdfmfB2QhKB1HJ5PjpqKRhCrGfXrjP2kXZyBP32WKAmUDiRbjvCc84iP4PwazVccn9AudsujbNbWvgu",
  "key4": "mtvmwEpxUoi1XfTKpyBvAkeTuPkCCGWJWPDAjKomAa3v4RogRLmezQBLMJUQRhpZmz3e1Hb8TWKfK6arTRtj1ie",
  "key5": "95PCmmbStAwUhGq2VyhpbsFjcyz2jRufiA1py6NFBSJ7PCiGVDdUZj5JUnmkuxYwqWg21pUrJankqcNrpcK5PtE",
  "key6": "2Lp3L8fDxCyxCKCXTGY7a7icFe1QG8dtKfjhQWMyjTDxX7g2Sq4ht5K44HnCVaJJwWVvaqGV9xkPGUGwM4aPUFq9",
  "key7": "5ixkShTPmxKeK9CVJ64dFFCddHnWkT7D6NuqZ5LSqYg2XCaGnZTgDxqMhdMDgydqcFvNNDYJfnnkpizpj2wKUFNs",
  "key8": "v3aB219qnhBaCqP6oP8KhuetzNpsk5BBRSBPRumwi3cKu7qTvQg947dMVTy7byUyxpbY9Kw4mwhgY9PggQmggSP",
  "key9": "2k1zjBkjsWh76rVBYNnMPDHcS4R4Qy2kUekeiZYJgutNN9saeK7RwTxkFg3ij3j2ATX967Ly6KbrNYYH4PiWr7gq",
  "key10": "tGs6HigYcbtXKt5RKtRKiL3APRgd1urPVDM4aXnTpT4KRaBJWHNCyugra9bnLo9ArocFmQ8MqEs1DYSv4thtLnz",
  "key11": "4N7jrBhiUuNoNAA1WZHbWN1J6RoNPqU1AkKDabYjGk4NY3uWNGd6xjzxCjZkJidrYKMwNXN6UNh7m628goBqBSMB",
  "key12": "5PWrNNmQstrZoVro7es9UpnYfbtSn5RmDcMhiknz9UunVfQHPdf8uNvcTMFF7MZK8PPvcRYWn7NuPdG7g8YVu5Uw",
  "key13": "4RsFTHrA9yBdgFox9xMkeHRqGT3GYJaXcWQcqDcVaoHvTcusEHdQbjaVQKBsoDMRu5Uwzxx8nixWEpj6Ticvn842",
  "key14": "3rJHcPC79EEinBQnJSKX6vUXbAexVFe4858RndxkUJ58EPKnviv84msXxeX64w3K8HYghWFrgjeWS9cLozJGrDZY",
  "key15": "hUeJeQm14mofPZg5nUMV2Sm1K7hap8zn5F6WRLmJSSvcu8KTfBiw5tsN1UxyKjEg42HqnmQ5avzhmpf4p9SkmBy",
  "key16": "fwVzZ6tc1FYZzDMdRvfdr76QCXJnyHwhUQptYyykjspAZQUzkT6RibgJgxeuc4mGqs2eB9uXKi3vCkgFjxPCkiJ",
  "key17": "6TN3tU7t7eWANfWewEy8sgaW6sAAvYCvRwLCZBxMFgSYjTSHbd7erh656sJbwFLJLZnLotGPcYh8CJ1rG5VvrS6",
  "key18": "3mac5f9uimpKTymcShkaGiczD5r3yMr7Vsc24QG6vCc1CitSALzHmZh7kBBXWQDbEjDx4SbSxcZmsN6DgY93mpi8",
  "key19": "ueDtUzuByRsPxpqKQZ782vEeZfcqp4pU6PtXAcctGZMwG3DzdMgffiS7Bp1Z3AByJLgEPdjodhttofhvSeXn6Ep",
  "key20": "GLS4qo3sfR1EynU3d53KwFbo1H7z84GzcVR335dqFauVnf661tgUYWFjGSPTNd8eLZfofbLFVZF8GBjsobCk5Kp",
  "key21": "3n8M1Wc7WigYQG4aferke8mXUfeTfzCPo4E7YLGJZ3gdF6Wb9szjMVDiNhZy5gxy87ASQEMFjQoVNMG5FHTP83fo",
  "key22": "g4852jSkDR1FYE8RvfawAfngJBk5Wt54yidzyS7Y9DGML6z7pTiYagLQyb9Si15s4gU2EcLHdUkusRqDFD9SWXs",
  "key23": "49PUY8B63o1EP15NhAqZBez7XkjokwUu3m8LwyNJzQrpfp6CypgoeBT3MvZ18SWhgNJVQM9s3ewBPCRLZn7dE4su",
  "key24": "5hNBLiSmpGinFogPRYm7nRcYXT7gu1PRsn4UfpNDdrgPpN4gP1xMm5AnEHURRpT4mvuDZhUZiFJvboxNFkwQPiYB",
  "key25": "3ZQMGwnHN5UfGhSqoXffemyZr1CBKi5rTLFuyegDZMqN7Z4dr4oDZ7o68EkJza9cUL2eRMGjuYG3owJjEWVzDmma",
  "key26": "441fSWtXEJYq7aFuMke6cs4UfL6nU8bcWyBiAsfLEMSJR4iNr29ksRfSP2LyiUqdF1WdmGAVQCB9twBtVR8Eurc2",
  "key27": "9AAWCyoLBe2xLXzoQJXy9BceqC1DXa8B8njUGrErN46umZZiZTQZx1cqjJgUpTf2QxR29zn2kUceBZbMhynSivQ",
  "key28": "5m1M5sqtvEYuxq1Cxg7PzLmGAAsMo9x2vieWW6hTkHCBjRQaLExUY3HPY5ztPcPi1XxAWDFJd6t4ThrPz88aMYTM",
  "key29": "3BKaW2mkruarUatskXP4hUGdB7ChmvSaMec21Uo1LtiHjfojVLboXsNvz9izBQw5e5WmX5XFnPibTTv9zsa43XVF",
  "key30": "3nEdegNUsdkGVhfGT1iWUuHvMFcHxyVYgKdtwiMLwwetqpuYvmQbaxH3TnzsfHDvmyADtXoXPXTkXqt6sLAzsH2G",
  "key31": "eh6kKEuFTQjKj1VXZHwsG6oPwypbrqW1d3DdC92ts5kxLrchSqMWFSAJ56hdr2VBu7rwEdvYAvBj8dvR4jimHfB",
  "key32": "TJA5gJfLJhcpajJKtp1mvgTpbJ1Kp53p34McU3s4vUWhZ4z1HBU4iEkvz5mehKnuDPqX8B9iXa1LnXBmTPmhbyx",
  "key33": "3WJwZ79xHxcBo2oJwqTjHVP6AkYK6NwwJP3ot9ADxUX1AkXfvpGZ5n8Q18f99b48Lj4PDTJHhxbrt6rP3YLPSpHe",
  "key34": "4dNo75TkFUucx9AqbA6z71eUuxFj8ZCUR8zHi29RxAsBYuGGmAbSXz5VApDd8d435Y7zqgVXjRcPPn13tsVsW3uQ",
  "key35": "nFiahLAJGUqTooH5BkujYGezCsAP3sGL45kRsiWHawtNZbYy4CYsCuwkGDpERrMqhpnUPRU4hqdfkG8UfMmii67",
  "key36": "2kfSt6vF1HmTdQPnjtgv6vuT5Kzvftt3wCYP4XGzFc4RSQuQoJkojF6tc1dJkWVz32DJfYQ4UbtVhNTiFwzdbe91",
  "key37": "5CacMVbZLnXyRm5KMdw3gWPwwsvdSy1VaqQT7PG1iywTvhAKSd8Ygi3cQ1mR22CyxXCE4nFZVKiWwjGq153hvyg2",
  "key38": "4EsgsNMMonsHP9XjdPrsTF4MUGeGQAZgCLadV17fXzxxZTescchKfGCmjoSsbCvaVKQysWW9N4iArFdz1v36odLf",
  "key39": "wivqdKuHBoiFYvYmHo4DRnP5ME7WpuAxze7GrzGSoUPycWorhkmmmQEDMP6HULNnF8D9stkLTLwJBfvHkWzXXfg"
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

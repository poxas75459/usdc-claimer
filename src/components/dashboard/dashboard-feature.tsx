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
    "rEaNM32pHWB7NVVohF1Sw61FV36E2dM9uBxGRponGSg4NyzChWfuPAWXGnFJL5RSx8TPFZJGL6CcEd31YtQTj9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S8uRLtGFNHHaT74rR2MSEvDL59462woxWKfBymzJvoRqzwE5BGqkJLHfRGvfCRbRYzu1Lr5A5FDWkKPfMEz2RwW",
  "key1": "T2dMwnEY6AB3xHATjur6AMeQLtXv71MJfjnzJFR89t83FFTpnHQ87jaRJ1VsWRRWpmyaDYZmXnVRLEsSfsrTDjC",
  "key2": "3kNXNetmVFx3WAM1VVk8gLWd39HX5UfVRhAfF9s3jzdEpkVj6bTUJik3TiSnnSgUEqcxyc3uH9odyZ2wuUnyECdB",
  "key3": "5yF3Fwo15rJZJHcvy8xy7Ce4DRtHXPAXxgyiMHMznAieCtrttMnSzy1D4WQeCYrvAScxf9r5txNaj7Q2g23VgM4n",
  "key4": "2raBLNiDLxpYrPusojSSPS622Q28BNCM8p2Aqd9pneU5XitY3Sy6e2Pm8Tt6evTNRys6WrSmzA4Pve8eB1pwUEhk",
  "key5": "4kt4iQpb4pdahnyoKADYEDfiE2fjpT9hqvJ7Qj8tdfGY6pFBnDBGQLTRrgJqZ1iLbqUHyBUHSnmB8BBMUXPEAovb",
  "key6": "2hbzMA1GFGE2PoUJyYZbUhDcz78Fd4a6sEgKnHmKmS4Euv6Y4QgwunmN1FVWr8GDGSLhwhMyVz2kbKQPZPoLapvX",
  "key7": "XqKcXMfDo4qvym87MY4JDjHKmXBmLTo4wmkXeyTVcRbDn7w3wir6ueNiKf8vNCv76ytFqiBFzyf6JGdPEF3xdEB",
  "key8": "3nQ1SMM3js418vozzKpLbvCq9MBgf6cNScRcgfwX6xmyfQ9jqX9HVdfLpxzrJMkbrW2cxhBLqzTtactQSUQhVjZk",
  "key9": "5LTMK3hRY1U14xuWVDpd3XnAkaBBCqP4HdJNiASc5waSTMb11vXYfKm99jXiWBsvDmGwuANbPCYhFLrC1nGN2xh2",
  "key10": "4i2JVYYvdo1qByvjGGgFTxLmKFRS1Cy7mA1224K67DdHCpEW7CwwRFNKqL8iGVYa18UzWAMsgx8vJjiC3CdvcLtr",
  "key11": "535furST863sHHwyZZfAcmTksacAcDdwbu5oq3d43M3X35gs2S6ovXumnTWdG1R5m7oPPHnyJxbqh2Jc3QwJiTMV",
  "key12": "5JwW7NvJUP8Ak442DLsv8dPBRtYEdvGy26zWxtwe9fQ1zQiiaCkKBW4fhJmZTsrsB96dg4fBupkeGA9PdDQ6asjs",
  "key13": "4YWYi9J4eUj84DeufpXdKXB6VgHnvr9otAiq77By82HRt1toAQCHqCUBrPBCoCFZPWPVwvtHCA7JgwsMptiGe6Ls",
  "key14": "56i9f5MSvsSufnkSqxrrK84y2hmo1bA5hxxAxtqxCswyRGKw21ehf5N4gHGDy3Kefk1TRkMkH9SV3FUf5kz4of96",
  "key15": "66Jz9fu5RRLiTnrxaEt3teqfEcpL9hQX5rVyyMeYhnj44HcHH5cz8vd1kWcaxS4KcEY2NMUsfWZSwJKAmXEq1NGm",
  "key16": "P9HzMf17ecYUWh8quTyVxCnNioWko432Fq8VfcKop17ArHy3dHRveQPk5m2weUzh4YKWwtUBzDDdYChuyQ74dpy",
  "key17": "dsuVJyJR7WohmyUahUySvspXgKXx8mjF5mrGVzcFa6yq92qqfnXoRbiTPxoF94yDHD1ULVqmx3o5dMboLKHhCUb",
  "key18": "vAJicohBrWnqqm3iJys6wtKwrXFpfVpPWXzjaHQhTfduf6Yd7JYsFepWkiYyjNhsR6NYnmZDvJ45854Y5mUkY8b",
  "key19": "3i9ReGWdM4JmwHkdUAsGfePgFCRPLAHMVvbnZr7f7ySc3FT5qQ1KdfDYYoRiqjL1nHBeH4nb8yAxJJYssEAhzHqE",
  "key20": "2SQ7H4511thU6NH6pYxH2xPHNHmqFaiku9AL8Ag4GNgJbs1sBVKEMW8NSS6RDrwSVRaenrVCAeQqj77eHQCKjR63",
  "key21": "4dG8u1XbFnd6HsP1vLBWBTXmGkgsG5V3a9yqycYzY2LzXNEgTZt6E4ocd4RRvXxzeMKTeS8UCJCpfsXNJRWb8a4m",
  "key22": "3Vs1gE6djtMg4uKF4krKfutfrzubvakGR7kx7M1r14XDv5ihrdDrMxaU7oX4Ba8rXFR978cxPaF3EvmkAy2rDP4b",
  "key23": "KBPq45nmYTn3uDbhDmsCsFnKXPMf8WW7Tvd6MSbHCUmCZrQaYP6W62wm28cDzyp9iEHsyWyJJD5pQfM6aFERvzM",
  "key24": "KK4kafAXDMFUj5Hh6o3YqmptSxz13dgmdFvDQZ6e6zFz8GCRcPGRQNunMaGs6cqML4eMkfRQL1EZ3xm3qLzLjg3",
  "key25": "ASogqCsii6FXYxtSnCsrYjiweqzjP4XYGhngtkjPvyMkVRbPzudxcSWap1hJhMJtJWoCurc5DRLLUJt6mA6YAhG",
  "key26": "3mQsf45wUaZTHzfijfG2hk2WuTUfrnui2apzadieUHcWHLP4DcM7uRiMau7q5tshLthem85jiWSQkuLcHKjXUC1w",
  "key27": "4ZnJmDWbtnMkwRrmk13ev2Lh6wcgYDuzNkLvHu4PPZ7gbSACogrxgFBuexStCsHiQGcRPLnTo6paNK8HSUqxrLm8",
  "key28": "2i5aajZePcFpehPSJkC6jXJyqpTQABK9SG1TRL8m5G3rXFCnaJLWcCcYD51tWFpa4zBLnkLPJnWnPULhgBC6kzDv",
  "key29": "2egkKtU92P3cBP52KJx9zCu72EhZycLFyVMqGmfctZfgcNn3WAhQiHcDUAZrxJtqRWzi17D3z8ZB8pEQB958WiZP",
  "key30": "4PSRe5tDesAcSCNR3FxToz2n5n2gg4o7sXffRiumrjKyc5767ay1yKStPg8GapDvkXaPpYFVj6Sbc3kpEY9VBpPb",
  "key31": "49j8GZLDY6maEcGqEXnPLonawn7qfjngdAGs5zEzhVRmtXfBhE6tZDSxy4UfxYqTu7iEYE8i3jSfJPKG77S3K1M1",
  "key32": "5QZmFqXWAWCxv5fyPx5Qy6JpFBTfTt6nuPeXRTYc6GMxfvXKqdFt1xLtLboxgQSGcE93NKpRSGQ7aafhjLYaajg1",
  "key33": "2pZvXy1kssyk6hqWauhAoGVUVo69W3JJHZRbK73WFNkaM54Z2rh8qBD5GwDUveCQt9gDSQPBpERUXq75VWZwHMX9",
  "key34": "65f3vJReQ2qAgXWYtsVRBa3ZzrCLDyfJZomaDAy3QwUe3anaskaQiRHvkx9eXLoqPxZYyUTPHnqBos92ondSrZsJ",
  "key35": "3VDaSnvjeYooCHve3QkoPpHeUqa9sPgbHywNAeTReXW1o1KjxWJTwArhTC2Wvhbzkitf29vgn6hXZZF3oY4V3D4g",
  "key36": "43QknGNazJpKPTRhRWbCGT1QUDJj9vZct2RF4DJGxSoQtB5eMTFFKp2NxjaRuNJKLRYqKnTnK8N33B1c8sBK3PKT"
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

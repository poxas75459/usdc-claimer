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
    "3QcaQsuB42H1tMs8y884JSfzY3BZUqdAKiBJ2riNs5ygbi86RKxJwZoVSRC89kb2T8esTojx3Mt6WKeuDKGoQwng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbC2dEKvEwKszDZWe8nsVcJVeMjqhmL8noQv4DzMrrpBLvgNqBatQidCoUm6MPonaKES8m6cCqsv6iT7gEwqRMh",
  "key1": "3sKQuJircLYsoy2tGje7pAcSJ6fKfx1KcDSxskVFjoFavtCdQcQE1RebSD9RY943gEMFuTRWYSz6tdPaRdX9EZPC",
  "key2": "dup8f4kakhE9VTqAoEFr2ycGncxPAoMAEhs2UduBsrVLAwYBB822UGLr6kt5w8CV5TtuH7MmDfd3Tni7EdhcuXW",
  "key3": "4kgYnxD7XdRRhUpCGUBNQhV58JXm89WLi2S14NtKoNA5S3tGRxwY6Cxea45SrbzFWvHQQ2GZJgyU3SZVqDXkDsMS",
  "key4": "5scYZ9Vp2d9DwfwH95pLRuBhzksXsYL5VGn6U5ua5EoHggnVXsYQo9pGXLjF5jA8eQzWbCM4zG5FpZcTLrw6BEqP",
  "key5": "44sw9CRAfZxrhtu8sRrt3ooY459cTdhHd6bemvRpG43PVzEFR8hK824Qe6h3wFEhtYXEpDQxUxumuNU26k5WYoYJ",
  "key6": "3XTYCLAFHhzCdmK9oeMZk6e3pEe39b4TE6E8mnavqVFL31LmkywcaydcbZ4XVW2vdHVdZbKKvCw7gXgxt13msKEy",
  "key7": "Bqih2FbTgtRPiJPHFM4ZbfqovuUAVGsMMAXGB9WK6Ci8CH8H3LAraavWLw6sBjnPVmSMQauTDzgqqBUD7aNsSty",
  "key8": "2Yy1zPxpDvZ4qpJT62r3NzwCQcAY5LVzSuX1AzAKzYn7TiGRFdZJtP6xkThUiqGuHA7h9odQTtpjvBu5QYBXEAdf",
  "key9": "YW67H492PtiidnxnihyFxbVewF3xvyA6RG2ic1oPXCrqMDHXaf8eHFammF5qUhp9h6YSFDzKxhXDpyaikcpMpTR",
  "key10": "4nrXQY658q8zZd4yQYWCQAW5vjtAHv8aPUEHErpLE2a53s3Riso5WFwkTQmFA47iQsTfBpk5VdEzXP2nBUeVHTKg",
  "key11": "5HT7Wo82L3FS9FK9uhsr34km2b3MKF7uqYpcaCeqZf2Q9nyrtzmzvmKQ7BoRje58JxZNdX3nGRGMYk48Rwev6mC7",
  "key12": "5nHB5ssemed47wvNfJ9uYbbYwXAMEWtSAHAET4xs8tRpR8ZbiPpxz5jP9QY782KbK8pEdSH29MKxEihojmstKR8D",
  "key13": "2QnUzpiwRSCTXUg7BS8XXtre8JZWUTxz51stkBsZL71zJ7mqr1eoxjb8Uxppw8rxgeXnC2puyk1k8WrNrvcMaiqB",
  "key14": "3p3bKrqSWg6ccamE4PqqE6tpWpWGxS1SVoaAtChmHEz6V3D48qZQ5qSHqf7xCG5wrDRdRuNcQbMnKJnYW1Y5rEYU",
  "key15": "2pdw3rvqnpWfa3zFEZ6uPK8d3CPyEna99tJ2HS3xfZf5gctoC5Sr3XZDDt187SyZcH2y6XYmLauchmk1JtPhLbvq",
  "key16": "smCimPD3ErsCc37imzfr7XKQKQRAx4NLY57jRWN7W6jpfiko5FFMjVXBTUxgTppeNVDAt9krKRGcVsA6CQZyxeF",
  "key17": "2TT7Rg38TnwYqhkaXN69bXeConbJ41kr2WBs4nEt5JW4FXFSvyKkPVzMgQ2Uq3DwNR221Z8J9qxecAg2GofUvwXi",
  "key18": "49pr1Ga7dNi5mhLhLFqaBWxvRY8nPKu2mYNgx34BRij4N7pfe8bLJe8RomGDbAhTP4zPhMNyqKbwatCHus4Ud8mY",
  "key19": "4dsx19s36QJ97VHBZNjnowZJ29szZbpmCofrAveY3xsjWr3Q2b6ChSZMsG6h7EHvmCspZ6LxKJAcbhNapU4venEK",
  "key20": "587bVCqnoPDmubUcnB8Zet8Lq473CBPdZa4NCHMGtWSy3GtfrsJ1FJ18tG6xXfMpNGLiayTyj4wZXAstwRa9bvE9",
  "key21": "kSMGQqVjuiM9s4cGAtTJ1NghZBzE7ycYTECGFiaAA8SM3D726m7Z5pBW6TrxVegNTeHnjQhNPHLvPFKvmKLruGH",
  "key22": "2HDLD1xUZ4anSWuiy2hg183A8SLavTxjFxZxoeePUvfD8MrEBvGqzp4ERj3u6c5mBwWrRs73V6XMyqetHmDfXepQ",
  "key23": "g5oyfbjEXjZVKM78WwVBGqdeMgzf6Q5CzgiFEu7kyG4akwWZMSJDaPMsne3Lk6rMnFU3DU9egYwM42AEGgBgvXE",
  "key24": "heSNCPJx14DhZxdySF2wTkJDeqRgZyARYHqnPEvJQpnMv9y8qXnY9KhVDhpLCsK6rzNXLWJSRCfNJVTwU5RpF6E",
  "key25": "4EZxi62tPagxGWV88c9rUgF8MxV4sp32NESoLtc1oncAzb1nvWxYYCbxtTnMjUWHoz8mDHarSRLT9qpFBtgjtytc",
  "key26": "4sBFRzdJkJn7Yr71ArxbzSQs1ofM5Fjdf17LzTaNH879Fyz8KGGkbqxUdhja5mXt6SAxpZCfp3uAihvzN8cCR4C9",
  "key27": "4UvHwUrRTCk8JLw6Hs3XXUSwxaw4burjNYz1dkey33YCgkt4AvBNf7a3MucnLEJ25A6CvQBdQoB8FNZS57JyFWab",
  "key28": "2oARPX8MdrHCFCJn6jUUKNyGFTjgx1PB9AoFXExdgogYb3MQZ5QV7mqmEuQkTos6wurgGYrxaaRVb2jedZKeMRvy",
  "key29": "5s4JCfJq1wo6mtmLD74FuYeAKyahKZb8xKUswaR4Ufc7E4qqe4Zz66fEKvQ375P48rzshDLVH4eEggFuXFeAjFvW",
  "key30": "3pW1iYLrfCJym4khveNLiNErRsyLnpdQVcuAXf4czGCKifpB4DnP5LzgJyqrpHxtBq5EXj7Z6NbvybUP42Djsora",
  "key31": "5cWhEQ3gjYzUFUaQgrWWfxj1dC7btmQ7jFWg5wmNN1pnKVx4Y8urS3nUeZR7uzcHZU7jzjih9eHye2evUjxdTp4u",
  "key32": "49GHfjyFcfnx76HNUyb28c8hfNrqUaYM8ppUXW7oTFFgGzSSpbiHbjQA7ASWjfizJCTktWqMrYGKuAiGyJkeALFu"
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

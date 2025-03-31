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
    "xq3GzjFQHDeKTaGdRZLjhzr8Edtxf8c9Hr8GRcv9WSeJ2ExmxsQMykmVn8DXzKFCZProvyRozP6XPSa26hjpdYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sABTY6ubL8DqPomKjGyKpzA8QkUeUupSPRGqY9GU6WPXMaqjrTze4mrhpKZ2ydjRuGfU7vzzfUPUVsSrchCoBGd",
  "key1": "CAXWUPpg31nvJom5hndURNCz9JsMZAxM7JU7wEZxdu9x21CGiy8cZBDCDCpH6emqPTaTuWsozF957gbnNacnbiG",
  "key2": "CVuLWKdN1AYWGgtpXD397LjxJVheBYVSqnfj6N6caJiAGYGzvxo9R8dCbkWeynA7Cv3s62wxCP1FMbUY3vvK2ny",
  "key3": "3jk3CyBdUj8sk5tXBGFEjeZ5axkSnfjoTCruHQxpZwodXC9MsX1k5REZyHMbYsP9gdcDJtbtSiiRvhQXpFXwmp8X",
  "key4": "4dNY4Yxe8mYv7TT3hBWBQDveZNcZFJj2PukLXPALHTPEJ3qgzm3yUHcCSfqXBkz8arhDCon1m4AswHb86MEFhXJD",
  "key5": "2y6es6tH5NYeHXXxUpjmFSGHMBmBFMBTJzP8wzQakdT3oaBTcEufJdFn6pdeTHY9Y2TEi3tG5CuemyVx27xXMy3E",
  "key6": "3zXQri73yAE3HE7xyydeusbD8kxENQT74U2HqDe4VusAU1qHmst4E1q7LxMzxAo4Uc57ZhqnokT9Ls4cu1ccJCDT",
  "key7": "4BnhnzWWffxrMkPgz7zj719Q5CsihNwb6vEFV1QerENkfk78qxVFF2oxMAoLq4C7ME3hJQQ2aULpve2eZPhzd4cS",
  "key8": "4w6e8wKKt7KL1aW9YKrX5du7AcVFQgXWF4diPy9yyyLeh6EfEgwYqjbPSTFxndBSgZzfMK1nqTeNycML9exHSyxF",
  "key9": "42573CPEQNrnaDd7nz27YCtP19U4wWNVP1NfsphjBNwMqsgexc7AUY1QwYEVT9fzmSxz7pZi8rR6YZcExbhG1atT",
  "key10": "61vDqsTCek9wGWinTVXAGzrzGQ5t6AfZB9RFVsJqcc9AStSd76rwRWfPqJ2sTqD4x2E65YmM4ieJGJhsiSNwQQ61",
  "key11": "2wL8pcdQ4TChn4nxa46E73vwhog1LS7arS7Kj4KSLo6wTYdVT6WzGEu8QUkG5hvjS4CzGKrqtww49MSdcMwk6qzF",
  "key12": "28xLYMaxTm61Hszphwkp8kBi7zWJfSgW3ysxynqv5GMehzFhxCgx7uvqwuy4xx3Uv5uHEkDqLSEuC7LUsHB2iH3d",
  "key13": "2NMN7E8t17cbiFeDtJbcoseB1N23vWRyrPDg94mhmsjPE7agSJiDEHeKatJD5i6WRgcTtSSacs9j7pgXEgisgA8C",
  "key14": "g1u8pHdNuvTwtAY3NDew4xBAZcLkRPo8KETEPhwUw7noBN8BpGN7DzdUxgE2DbjonDHGFp597R6TbfZPYjkpnoH",
  "key15": "3wxovkJ4Y6g4F1Mmm1EMTySCFyA5dtnG9DJ4WThWgGVuDqfoDR2e3PkPRXjNPxcqLPhWaUa6CSyZbHaFEvh3pdzy",
  "key16": "2euNQT3hHFH9b7BcrNJncreWdXJReU5dLYucov9eYDiRMHoZEnRqvtHyWsigPvAuyLbC4BL1RFftud6roVFD7XqZ",
  "key17": "5rCKBjcFKVuahjudcpHVaigx57mKKMAjijK8tmq6ewU7QGwAZD99vkxKzEYmAnk2ZQ8LrRgrmAEVhYRgHn6VcqbH",
  "key18": "t35V9UDcqZDTVZYBMZ8q6iL6JqRdK4oHJb1ZpZj2TdcSAzCUqBSNFf1rGZV9Db39gqeXsjCNTgJLsvhTqhJkBcN",
  "key19": "4MmiB6uwx4VGXEK12gHV7AxykcpBjQS7qSXYxXakyyLSYriorBcy6HWf9e3isPyqBhhLTVSw76Z47xmdZ6mVe6bm",
  "key20": "dpbT8hYH3XZf3ZeUokkBf9tLFpSvTyPk4NKi2wxECzdQoen6gyxxk4MfbUQCKzQgnndzBVj1m7jK2ZZimgN7i8G",
  "key21": "2h2Q2ngxtFmwdKdg6ygtAaLyFH2TA4oTR3vftb22CynzUbTdSwevxCJZweJ6hDESQkRcz6HzWUbsMuTNQnRC9hLX",
  "key22": "34p7etSWjyz11nAqXzcQwt17k3XRvi2U73gKPr69gEPQbbw8SbarsqJyvMYxdnRuwDS5xpBjB7rbkssSZueDDiDQ",
  "key23": "5qXP23nZVnRMvLkP5A2reXf5ZaL31AV114wkRz6MdGqmn2e3zk5yB7YStedyrFFxGohRYkLT1xpUn6QQQH5v322F",
  "key24": "4ZQxRRzfZi1fUZaAvXNrpEpAu1oqA7xZsYwhn3X4mvZqQFngUbfeHC3rKPpP8vtogaDQdTXHW7QMCrs7u4oYateP",
  "key25": "28S99Pj5aYDDr6y58TSsvqpzYZSsoSwj1xRxhSDZkHmUHmE1SYB3B5uiYmT72Bihwt2xRSxNHohxvofYXpVaTNdW",
  "key26": "4K5dHBxpHcyTPhQfkJiQ4LBGCnkNdWnC1N4vRCTwdbvKK2S17qVAGVbvB5poJWEBDfpLEHZAssFfoTdsqSdJmH17",
  "key27": "mpQpG7xTKX6HraTn2PSZ223a3xMtG5ZFtdmRsvB4D6hpMtpsdA5btVR43uapEUHtYaUVC2YoG4ATWSCZorTXer7",
  "key28": "sMFSG9w3xUXb3GU5pkr2BVP7uMnbg5gxx9NZoV17V3Bmvq3rK5kQ6ChjHMKBgNB5W5kHtqxBSzSNipTZpUQscNv",
  "key29": "5xMnTVz5kqtcsf29hqEZZTkeZpcTZWmJ2n9sNukoqPZamx64vBsaeScG8QW7B3xCYMxj2D2sY7UWGMFEG79P57n3",
  "key30": "2g13v5Mk9nopVDCXMcmVqhFkabtKLP5ENeH189UuaDiRucKcV2ET61VbLnUAh4PWYTFhwjh9NYejXhw7xq6j6oRi",
  "key31": "4kmNdiN9cE6Q2n7oiPv2HeaFEWfoW8rCbHBkCWhPVYUPXyeC7o1FAGcMth9to1ehYff2qodJM7oyLPY1eBRtNjCo",
  "key32": "4actmJ7c5eFk9TZqENW9T1ZKhPsGcjWPXhTG3nUv6kp3yPvt2aQASk6HQ4FrFfrCKk14bTHHo6raVHWXXodHPc5a",
  "key33": "5ysVU6sxfhserg9MmGyafwy9jdGPSh9FSJPEcYf5hmWV5AoGGqBAycfoR7cmrCAGpdLht3KFSZwJf3FDfhA294fk",
  "key34": "2tQNdivt5crhhHFspZ6iCWNU5N37vpu4iij4BAMRrkVrLNkHohmXLJqffDa1mAr2PmjuCp3K9dyEZCqxWqE5uveD",
  "key35": "4mFT5UjcJRSoNoMnm9eUx3UiUz5S8J53s75dVcZQu1ahgsp4op7fEZqMk8v1TxVFADxjav9s2CrCoxeZRLuBCJKp",
  "key36": "455KPuFtpFGEnvYC2MsG3RjLHLZwcS5FThvBCNPf9MWPTA5g1kgJtYFrAb4noT4BzgUwsxmbJGTD1P2yp39d4tGn",
  "key37": "2S6GGQZeCcYt5nLoPDpd2RmkJYp5G7swhi7vkTkjPZKUGG3BfiwzDqvA6qPab7cTZ628euBVgecjZyZpFznnSoGd",
  "key38": "5KXt4MNKMpRKYuDL8tnkjCyN5fg8ez36d9AhSoFRR5yEHm485rZvZ5Yb1avR2U4MARCiLKz4nhaCz1PTibmnaqvX",
  "key39": "4L2zkMZ9taw6BiSLKqg1Sr98RCWm1FYUy97Emc2gRb3QDgzT25kvpE6eJ24RANBxhutgxpM7uNcs5aVyYphe2YFY",
  "key40": "2cj4rTqDH7YBKFNmJT2e1m2w5o3ziueon2rPeFWYkkZ8RSd8Z7Y8GXQQ7R4fFybqLyM6yDtKrTDrbGZJMxanWePb",
  "key41": "3qB182dqaPiJ4jqSAfBeqcBUNRUdGpfD6HThA5DcpNjBEBscEWoX19qUQqad1vmZyR3Nh2ognU8y3WRiUxGpAayP",
  "key42": "3HM7MLS7jEzTf9ooqp9hmDNvSi5CNTpADGz3suTSW4LpbZZbBizxkVEyo4XMR3zNzi1TC7Ts5Z641SkJYw5uid3w",
  "key43": "4QTLq5An7hPrCeAY1JQiLimwNeLZZkfvaBNzbp1Wei92NmF7gKpiHHWyzHEmHAQ8Muu8tBHdR3NMLTxvwyB3uMp3",
  "key44": "4qcUfuzLyZxwQ7QH6W9Br2bdtV5PTdzrRdfWiWTsCtGdStQBQJDnpogw69psJ3Dn1AZUtmxv3oBWtL612ETaq6Go"
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

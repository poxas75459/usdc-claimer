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
    "5xQCLsfadvzEuzj8mHGpaAtSHzmvnVtoHmPS4MaK4qFiEQx2oq6HgWCx1hB9YxrgpBoYGSn7deLgPENuUdkSdUsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJeyn7vScir5sYYi6a4YgE4tvW7HNCRXeqULp1e7mzPurn5X8kjGrQ9X4ccffZGyxk7ST8gnUrGQVGPUiijZwEf",
  "key1": "3jSr1WPvjUz2TsMsZYxQwQe3WxRmtLeCHTrUMWFJeEsHGkW7qnrwWKKSrMh8j8TX3rYxivoUm2497i475pZFTVWh",
  "key2": "2sqAGDCMJYmZYwCdSfqvuhFuyBjcT5TU8NSFpA6vAwEqqJVjLYiVBQSS9xBDKNrhw9ueaHrPT7EXn8Dkj2qsiDcF",
  "key3": "3Vn9nGM9KrLppo19iCSMnj4baQpoeCrvp7VV9za6kL2NJMbPSkvh7yqpYoHaAFYJy4Gb3nkoJu1NMzvNyGN2YWbd",
  "key4": "q6gq6VnDrCybqZwSbaKK4vDMHz5K1EkbTwZsbgmnXcpSJqficEJrdUNVwUmTra6V3K22iTRuCxt5VBXnNNUxXVg",
  "key5": "2MU44DWrC5VHjFQgefLNiXZxgXZHfwQzmYSxmoikohESDYc6BbnK6LQRyGm9JTyvVzGQJtveR2haSEKPnyr87UQC",
  "key6": "543NpVZjNj7RaJAUJ7s8Q5kzf2iuYeEDQ7tuTcmUigUvqpwFp1Jz4TDHBMRq6pi9kLBpTRH9y4GiaKESzUixwuqV",
  "key7": "2TS3LkyE2Jj3fyZeXwX1p34cFopovPJc6ttHvt1PE9L6uABZMoELpx1gG416KY9ZLd6pXRy7HSZ5SC5Xa56XKDCd",
  "key8": "4JczuxRkRPeVCb4rZS3vzRxUW8Pg63MZPkaWZovaMABkpc7CWMBFPxuvepBUPiCyMsCm2kGe9F7toxScS4yewAJ9",
  "key9": "3vtQFUMEVce5HEsjChuPtSYXnRiuVEw1J83KaLwpDFbcmmavd91Rr7mFM6tb1kU2E32T7AdPkAe5R3AsL1PWDVfH",
  "key10": "4qiAPnjyudrd7pLi9AYqpyS6YNWoxjW8khGtUcK3pS7AKQWLkypFiwnVsr9JhGS5Xh3w4rkz4R7JYaREYZvbTvnG",
  "key11": "57TqGzPCkWkR7Z6vmeZXf998MjG9E7WzZjVXoszENG7MTsZmrFp9bCN2w264Vdciz22xX4UevrVdrL8hRfJ8912m",
  "key12": "3o2uboCzkaQVTDZdGrVBbnjhxBoDzPwkb2kDQ5Y8YgqfCcQvoHzRQy2phg3zayFH47nFiU1hNHLZp6t6hYJazwzq",
  "key13": "3VAz4PaAoDmt2XE4VmQss6CNG6SdwtXVCNu3qdcCyKS8tAModQE3knBtxWyDomtrZTHxQ1pojAh3QAbC5kJgD6WY",
  "key14": "2jBDMfwWcJydBakniDhnAy2aW1SQFWL5RPjMjSxbvWVpXXaTgmeMoSNmXBuFsrWPCokhjsreJvZURVR4YwCdc2Cg",
  "key15": "3RhPTZHJoo4ichLGKvatcDK4MWTLFyJ51N5sTGqC4SpNH1gYa3iSdkQvQnoV9VcDomUJnjmsJFC2FmXsWg9V4t8o",
  "key16": "5di3obJyFnKtM7UgsmmhXeCjGzHpfrqys5j92f5ZkupNnt2v3nTK2qwNr7pMpTTvxDUQtHoWUDsynm7BAvK3WCvX",
  "key17": "3veQ6K2FuWJHG19roJ2ND1xCmAiUmKvaR1F6v4Wdts832MqhHVgR2ULUys3AevVb5wVZmf4QY6FSfFDtggG2oAG9",
  "key18": "3dcxL4XUDQyDvf7SUwPTUjXinddCcABLnLwLVvHT5zo9JQ8RRFprBwvuCigCapsLdcMoor6vbM9NahH9ZrdxUtBU",
  "key19": "2eKG73YmowYzkWD6NxqJRcVPtaxSAY64nhXRydQsCrq15kUVw6rozDZzN8U7LMfWUxQPPDRNA4YQW8q7LMrSsSN9",
  "key20": "39RoHjsMVWGK8gK6t3eTjMXDon1kanZ4C9du3dUawnM2SZSKvCBBsrPFsnwf5nEQybzJTrEjS2k4igLuwJuSxutN",
  "key21": "3mpy3AXDTUsKU9i9249eBe5vCqtX5UGir3ar7q4Ak6DPur4brJc7v4DhBAHNkojviGQ5SrVa5DHdKmMYZfw2pxLX",
  "key22": "2pxziyBVvA3MowH9kEPhZhRcVNSgr7o5MUY4tMVaoaMB4GmTANub3YwsAqRci6X95GeXQPiA75oJGPDBsVrg9aKd",
  "key23": "4ZGsd93eVJEELgvknr9PpYqCUcSxwZqh8zJDehRREpeGu1Ux1YFhT6yk9CKtbGj9D3hzQRGosDhEyi9AJr8RSEo2",
  "key24": "5JXaGUD69Uqaq5dntasq11WW9w8kthbuJcwc2aZ5uQEys1BdifreZFkbLVQ8Ez9ZfkpMx3ATtqftnfGZbHpTh1Z6",
  "key25": "u7RiihZfoc4dk7c5ki8Q2FNf8p55w2Q5pnQHhkVrzUc76iqsgoZJMdtSRp3rqk3545gDDD5xUDZ7XNbBnFa9fZF",
  "key26": "5UUNMH4yjsYQov9PM4YriD9ptKKBGJm6oEDzLVx5GA5f5bqwXCmrJDxEmxMmepRPHAYHDZFN3SPVKLYPtH4G1N67",
  "key27": "AvGGSLCJee2EXo98hhTbUneu34JexLQA2HgAsmRtEk5QNAbKeEjTpRAWKYmBBqrKBBfvm9EkvSVw4t8E167uqD6",
  "key28": "3yN34AHRbyarVJttCAiHjv39BrBb9a8kC8NhbFLuBvgSxadxu1LTsZJAwHcPtbfnPfAentBPMUH9kow3oryuCsf8",
  "key29": "5kKS4v4gErZwMAKetLwYwjewpAgCt5vmytpLkC5hsDiP75L4v9iBSMfhmK2im5cmvSfBt2Tv3REh79xaZR1fEsu5",
  "key30": "497YffMjcGrTjTSu8Ripp5AGdDpJ2iw1tsYhSMmV4tyNkQ1bgimvcz339JcPav9tiosGJyyaaJB1pUrAHYCZw8kf",
  "key31": "4bKZwFW7B2wS4PozFMfqhPHub8a4ZDtFnxNo3vAsdX6VZ4FMbysM3fhvdQd4P2F6HcNsyFDpjvzJF4LmUjJm8BHf",
  "key32": "2vywwG9P8w5qSY5ANqtiyeHQe2zCB6jpvmok32ipK7wB4h1VKsAQm78bjeQ2aZegWmmszHpY4BcmdWrCQYLBPnS3",
  "key33": "5AS9HvybCAH6BcvZWEqz57pJeEoWoctPt2xgm6243k78JdUe8AYv8N6RXmozHQQ6RSK3rfwrXCxLt9ZB32nVezSt",
  "key34": "taA1SbCStdDFaXs7ekvZGe3Kz5PJB2D2hC6KNd66kLwTynwVJV3EEKbao1h8avU69BCq9RcW1QmFDEocHW4HLoN"
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

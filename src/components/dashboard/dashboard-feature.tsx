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
    "nKRNbpDBApptBJdsXxxzgwRcif2UVr7oMiNoCLCStQU31EWppJewWPP92xMPG6quVALDemh2nDv2kVRdRzr18Rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56AF83FgmvLGabp3W44SvPQBrxovjDxnhEyLSfEfCZkwt5kjiU5HxE7Uq7rZMYNRsuqGfWVmvn37mUeUZcxpVuPn",
  "key1": "5LWhVnm5pa26toh4QF6UWmaGWxWZpXD43cUuztoztFAwom229aTyPhWdZFvqz8YCtkekbZcYZhjzzF25H7PYp26s",
  "key2": "2ACX1EVrafJPwWA5z2Tz3sGQMkdfuzc5rDcAnUjWc3Cyr3iJS3QaT9Dg99uh3NXMtcNTQsrpmpxUDiUvETuTSuj5",
  "key3": "2coaZUomcFWCi1wk1veTDsi9PK3N2tVEHZKghNiELVGRnbGxPVhyXFV6FdYwRvB1VRntS7AbfhyJmLmnCmZuhrXq",
  "key4": "5S2Cu3AKy13kmMzQTscLTT1FkJWVEY5yeNRjiZw8Xz1JEQVW9w1ajFGu4qBkjW8FMZgTKKo8rH3TvFyuHUmwSWHi",
  "key5": "eydXNR51moruhZRZ22diWEuSfWEiMpbvbgV6KRWjDMfuLrL3az5TTRjwd1DvkkYh82k9TC318gASpw5KF9QbVSd",
  "key6": "3TpBXLmp44HwNgU5oexFD3GSYHGU63pwFC2Nf1bsorGi78t3NPut4Npw1SwrVCCJUF2AmcDwH4i7hUGsjpk7gSGN",
  "key7": "22LtDYqmmBgpuwFpMiuP9thUyxRdibSdRi1ZFdNjatoP1Tj45pXdp3o8D9BGxWg3K9YPPXAdksnJghKjVEemtfFn",
  "key8": "4N1rrGRaQNTfo7g4xWeWddHw1W3N5xcqw4Mi5drPxMuw8F6FDsKVXo9SEotjJEqSAE1h5fZQz62u62m8qhDXXep7",
  "key9": "3yAPjTttsDu5ihhk6iQjQiFmgaHNSs54B8aFKhDeRq2R1SVPtq3FSS2K4FxbMQtUi2HctZoqMVGNKn2diQJsj4Ca",
  "key10": "5wmLxsRxaiExf63ZtrcCVNoWH9P3zmEfWBCMGQzQ2iuPvaFmw2Wq5JS4wEjSP5fkJRDMwzcbbBWD9ZZ2iqPStoTb",
  "key11": "4xxKD5YY88oigUaK9pKbCJnCdXD2o3JChkZ6Zg44E97eLq3PyYogGGr3TsKpipLUZfg8ejv1UMemvmQNAUe1WpDJ",
  "key12": "2QryRtq3pNHx4Evs2smrcAiBen8odCYqSM4RSdng4eABgh73cx8wc6bXrHSP1xwDTHCjSxTmX2K8ug2kLnb6wg3Z",
  "key13": "5W9MJ99b3q28TYH3L1s31KG4QWcdASBdKoEgoYi9QygugSYFmV73PARmKJdSarQfqLZKJpVoYPfpoRMfKAmaPw5U",
  "key14": "61kKtrHL1LsMoUQxniXLKHaZq5QswUnr6wvKkNmmkEJjCjWrLS1pPvdY3qTaJSCAPR34BHgLKWqr4ok1hszjtg5Y",
  "key15": "5Rq6vTpcNSFnMArtwRUH95DxqqaQ96m3beZ9tX44hiw6K5dA5f5VwsP2XKdNTQNZkmUUpbqxTH3LhZxoCNEH573H",
  "key16": "zLKMMCTe45kBTRFmevugeZXGSW7DRMaWsfc4vJe7k9PgMjWDHYa693yZHaofhy4SJDWdXtCKbmfZrw5e8oZ4rPg",
  "key17": "375iXnR7CPeVE2zMXV95ekuWKmcTh6is5fNG7uuQZFWyuFYC4RTuYFALWQdDfJZc99AAQdqGUngkj7cyp4pYzdpe",
  "key18": "4Apmu5xikooyh7TRNm6PZNrjtsY6591TbVFH7nZfhoaeiRPxnm7svQGY6RbZmJ8wMifUbet44mpshBAz8idthJ2X",
  "key19": "gsBwk1w4W16s3Hm9B78jtN3PST39wanX5Jy5FbtA87PB3TvRMbdbzWKfEtyvFBuaa849E8PzqM1WipXhWLjWHND",
  "key20": "5krdR4jbn2kAYe3qUa1RahrD4ZioEscjVQNE8XJBGSUMYRvmeZk9UHWvoLSBkyzuYmJynYVu76dAtcGvXtmn48nm",
  "key21": "3ym1KgjnjioTEkB3RhYDynUnYXxtkroCpU8Fash4mkF1X6sWfaVt8bQ1JGdRbB1vUW1xhjSxwJvTapTZfWg9s8Ao",
  "key22": "5tzvYVCpP6ovy4ByjWRAidhFVFbtr6hgan6rPd8VW5qATL36YP7jq6SVW6bBL661kqJxTQVQxJHv6L1Lt9Za9CfZ",
  "key23": "4ZPF1sRvvEG1cVVzz8Bdr5bfTX9izegNNVajiN3zo2aX1pdFCf2EiLiropimPs784viK6zwS639obvE8vQ6gp94M",
  "key24": "ochedtsHWQxdu8RwwiWby3mUFJDhUrFrhLPsWDbFegMQKU4Nhci41HdvrR8kK9D31bBb8RLoj5XqHqbBHoTi5TQ",
  "key25": "4nTxHLu4grqYaZfrqSXLUko9Y9PMTvBrcpi7BParv324gnB1Rb9oLhRvud6DVjLnH6MvFyjtGdEdm464LotmLTgN",
  "key26": "2MW8hDoi6NzKrTDfXMLDjAdopDvYckmU2nLnmYejVneW1kwyffjRdnkysdtjy1abdNkdQ3M2HJFGkrHCpRJewbaC",
  "key27": "5N7Lmx5oPuAHrBBp6sUxATEVy1Jm9K6rHbLYr8RcmZiEhK4NpxfvHtHe23vxFqp3NooNGecNvW1Ra6DpMtsU9NGJ",
  "key28": "32E6cmZfghoy1v4BQnLccG7TW9KfpD5hANMZVABz2Jyn7Hys6CxgR29rBz8CpLwjEysnTQzfy9yW6qBv8rpQV63D",
  "key29": "3S3MwHmRK1AQFPEHFD5ziGfrrQXiPdjqKbYNkuzxANWycv1X9i7ZuHXpoojzjC7VggrYUJmse6ghsA6m3qgWSDcd",
  "key30": "3h4cLPeKWWPBMnf2uSXoqEub1woqe7AvTgvmTvAUQSPafxrwH1t7PTtsWiQwKn91QNej63KFwkidrsx8h99xuzrd"
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

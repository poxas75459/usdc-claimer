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
    "3e7mZYELWaYDuLM98VYrVQT3mmHDCyDKn7Y99H2dQXsc2Lm5on8NknuStg43thdJK1dvLdZLVe6pHjyuTGinSUjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p4t759bdD6WZvLX1NxhV4ecmhFs3rVQVzB6p8AyxgbNjJ5AfiRFj1EqLnKqHAAjnrvHie5Ebp2N4ftqUaGbYEen",
  "key1": "4hwYhHY4TJTvCbBBPLzoFMN7MD6ab7e2pmKZzyz9uEUQFV9Hh9stnGx8r9uRoKBLqGukBVNDaTugzMhzovEbEoHh",
  "key2": "51gXDBSwBsBYp9JffHhFd1f9axQ9m5SN42jQY4tqwmSmD8inJzxz2wihFu3foXwFJQdGhzydZ1iJdmz96tJwJJnh",
  "key3": "3P5fyV3ADbbyvmrfv47YnySZM3bYvcWe8ui3kZfw8p5gsHzqUCyi1qHsTNeMFez7jFB4kHzVMnyCxHJnvAASbZFt",
  "key4": "3gCBvHhhJhe3oRtsJm9diQFQ8Dr8UFrrfeVYURsNG3HGScdmhn9zJtm6DgUUbcN1Zf4kuwUq35BykzC2syQdhZwr",
  "key5": "4RLbq5fDhdG9W4kqHfKLKmLJUQGWMPfGyMwBmycLUom9NCW9jmdHCSZwVWGtEFTUSW1ksbU8JNtTQqZPv8dGm3Fx",
  "key6": "3CRmdponPKQs7H7dmhFaoAGddEdXAFgMd6hXwZzZKbudyfyQzYiN5DedmLZBq4saTvke8cLvUUAchz6umsLMonho",
  "key7": "32BabNmEezP7qYx6DNY7uYPbBmiLNkdFDLkSjjTCZp4f5zn79fBSN8971WR9MHe3L9har3wc8LRsGErDyUAeF63r",
  "key8": "5ZY2D9N4nCWbMpAEHMXFPegTziAtp85mTuUPjM8YiSSwRVWeaco3vkA2RFXVFTNb8VyMQ3mn58ev37DYNBSmxH8g",
  "key9": "Eg89eJhHb6TfooAMpZGdcCQfzp4j1AsuXPHiw4hPDx2zgBJBUHYCi6EGKHcEvBQDdFS6rPpQsEd7FEACXvG7e48",
  "key10": "TVnicUFghj9EJ9hEbcKnkyRNb929ibUqJj7QJUanUid6D9b36g3zVCrWVyycBftNbfrUw8rUSii2KKQoUevqgd3",
  "key11": "4JNqrKa7B3mhY43csRnizdLnN7MNDmsLAZnhUVdTgfdSyCFAuqSRSLz54PB5wugQACLXhvcAMPHtzS4veRSfkNAt",
  "key12": "2BaiPwV8qYCbwtTHBw7pjrEPXKVZ6BHi7bDNLeUu7wW71Z6GmckiGQk8K6fjDkraYgpE8FxrnkBxjdAJqURGjQwZ",
  "key13": "62oEkiixuPRFr5G4DzBfrNmiEDKr4zWkPTsyy6WuGLMvqQxusGe2apqMSqA6MDPuMsJmM57mPmYQAwsQNmTxPHwF",
  "key14": "H8wEtPuadyP1Vxuhhdv6m4ZtDRtsug1gZbBmmmp658cZsukFRNx5y1TqebL7oFbWrJGr5VYBQvxKW4nyQSr9Ryt",
  "key15": "5Rb743oFsNzpM6DH7Z1t1CHZPeAfVgjCkhpxiA8Jr4JoTvJksbBBiw2QMGMQCAuKRVyatc3BmiEbxk2fXEVmfpyd",
  "key16": "q4DvRqHUUru8a9CSRfQUV13U7hoTNEL1Ai1mZanYzhfQdAacywAfAVAetVvSCRUvJtAAF6oyhofXDvjweZFABgD",
  "key17": "5g32TnaFGfg1HXnQHcN16abKJXwaUq1aXNVTH234qxmitymnYsjwW8XPe5fTNm8CdDrm98fmM8t3cr6sqrqYBvKo",
  "key18": "3Kr2rwoXTarmbpq6jrkhG2YMXCDLhf3T5S5DT3t5NXxbHfRzktpHM2j27jgEMCBCBte8wnvbxT18aRgetMBwseYo",
  "key19": "3TAFCy1g4h7PGZ2sfHGeFhEUQ14UNvTFva61HCCTydjLem9SysAfunXtW5W89TY51sdDi3QAEL7EE4G5HC6R1qdL",
  "key20": "4gkgBn3SkpP158Vd71iAqJFDQZg1UDiEFxbF9CsATr4NgvBTHUsN8fQVWUGtGKg3uqheQXCkXxNbyzNVENapvhWd",
  "key21": "3Gm2dGnSRNwGijrQN6rBgx7AbbiDKJ7AZo7tF7n24tXdPFrUVkCR4KJgmtAs77nVxF3iZWGtqdJCWLqHtZazT3QH",
  "key22": "2zs2Qw4qFjKF3eRar1oijTGrK2Sb5RVMkrHB4PSiZVhd3SonHt9q9K4xmS3UJ48YHnwkTAPqo6exAQ6dPmD6pUXf",
  "key23": "5h5W8r3UnRMz1Qcd1fhFN2RUHTE5VwexBsEgwRiBe94gmdy3rQk2RhPhnRDcGMQzyDDFM2hpytUxLwyboA1Epuij",
  "key24": "3Zni5GPegdNdqBHoQfuHhgmvgxScLMzo7MNEXXzVX6eLfi9Qwyk4NU7JsudXoaLZe5VCjvrJgpp9oV2UH1EptTyx",
  "key25": "4qv4Pyn1gCARhVVNP895NvLkjEWTP7Cq4jhzcoDzyUrLP3UagnCZUzq3iKZqzHfdVXpYm9CAuv1uW11t7YubgsjY",
  "key26": "4jNiVpiGjBy2x613hUvwXBqeUBzWvGT1sGqNzvpaatLCXMLXSLUHstB3sLy5fgN56o7Tyy6SZ6tQctz4ECT6T9Ep",
  "key27": "jTtzY8nVieWnvckxWVFk1KdiTrGvieikLUaKEAXyj77EgtJR45wfG1RYueZDHX6LqRKv3tvWkgfKPW4BhpRNiNe",
  "key28": "5km49xY3HDghQuYkfu15oYjuZMdAEh6QT9xWfKV5ZfThUfJtFRoVWXsfofpRX7U6QHiyEkzBrWV4cPo8zeMoYCkB",
  "key29": "3qPcEjcJinhL8XzFqwUpHURqZ2yyYtWf3T9C5EcAiymRPHdttgeXEGjfJHAqmqS6AbAE29NCTEgQ5GLd1rheysyh",
  "key30": "iGo9NP2jTV5QfDTrzw3sjbCnZAeXmjtPN4FrMEmsXL3WLrqQH7h3xDMXRFNMsHYS9AnXqhLf6ccFRKV6Cum1TL3",
  "key31": "4VwVbSsiEuFPMwxVHC1UErbtmjnbe4cp24iaFeW39wNC2oqWC5DYT7cpUmAJ5Qkoi7tijsgs38cEmQXbPXeh5BRt",
  "key32": "27tXv64JwDxKzUMD6Wxb9cgQmvhD4ATDUFrGQPiR471UZwAx2C2ABWD7RusurquHpJ7KMTP16QQnFaWxyQSdnn9G",
  "key33": "4mVrmqPS643oHqEVJck1XfJhm139YS62zt7jyRDShmZa68W9SwUvwxaYWHFZLbF4bqEwpnJrMUVJuzBbwKN2Kmee",
  "key34": "4r3WMdHfiVgTPfhd9pWX5UfAtd9NrrYz7uuiMVxLdufhUCG2maiWkvPSHdWCM7ssFJAdRaW4dHPSkSHkLcTsJXAo",
  "key35": "4JmmqXWo6xSqusPnSN8zQX1hTymDUMWmDQvCgcCTX8YMjwVTtLTGz7LmqwNrXLgnxdWhmhPdtamrLnavM6TkktJD",
  "key36": "3xdsaiAnC7cWKCr7w2RgSz11ZMFCtiYjKb9aHEaJBayB24Wg8Kdu7XmdtJPrzt8p1shPS21f6ycXdWv9qsQjUMB",
  "key37": "46g3HESNvpTxaM8MuUsVXtGZhpUMhBzWL6QCxinoehmNC5rVxqT76P5TRWPEa2axY5K2wc8x63zNirMahmvoqjfv",
  "key38": "61VjiVVA5x7mumrvBW1Qo51LnBcqkd6pk7ZNUdAxTdUbqc6DAgsmfknpRY2mqmaE1UqH1xo8c7E7bWUtv1DFM1AY",
  "key39": "562f34MNbvkB5dpCswpeFJ11D8mE1q2KPCYwb24EQciVzg5JRtCTU5icSVS3Ra9qo15YSE7NfCnnndLs6m8hJ5yW",
  "key40": "26BndrmUvcMJvTuxi5yNgYL7L1wNzQqBRdFPNM774ozj2vV5tET9CDjrPHY1QqRSp37HKSSundaqgQCP7oFLWUWr",
  "key41": "5qnf7MpQyFSrbvTBs4p87uuZNxJjRqbBNBBAJiUtw4wPknC6zZr1tQDWsTJYLxXLpSYRmRq43thhNbeoNoJcT94V",
  "key42": "5NP8hwKzXQMpNb7YiWaUb4pNDyiXWPhrzmrpUtFptpMrUiPxiC2a9RzvEaqcAhGrvD7aUu3wrNuFTS3t3j52HTKg",
  "key43": "2BbyHjx5i9Jekge3TWe6oXuss8VNh36hcEsKfgiiC4cYtyxSRfgqfYN2XXgwNRvjjt2bi1VJja7aWWiRVwkQqWrv",
  "key44": "3uRe2Yf2aka9he2RZg4jy2ES2v9Qq723SZ6Bx9sJv9tMMVYhb8paEePN1SizqHewXsLq48am4WV1NKfpzck4UzfX"
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

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
    "49AqduS6FLcTyYBkR39JeKiERK4yUEVUYYwpZU7ApuFwAGC8fSWPMxfmwxDYLJYaTaDYHJ6mSRdRKdM5yAXupkek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6w8W9yH2vSpuoRSnok9uiPU7uQtmQ4W42pKZw9c7tG7EMK9kUMziswk9J9UzHfGiG3jvdrzgq1KAVd38z9NT94",
  "key1": "44hLtMCRAU3TkriGNsoVVFXcfSKXfqgBi3pgbMJZHwUNMJWPXQgu9b545mACmKpMyQC8iuZZnXnKorjJCJyVd1Rx",
  "key2": "3HjJD5UoFeHwuXXeajrLYWJqf6dGKgh9FpmxbR5nqCFsfu98APU8SuA8ANFGhF2sXhNU9PPAEJNnxh7g8SmF21y7",
  "key3": "24wR8YqBgHUhiMhNhDgNzbM5KKYBBuGwaDttczFkfdDANs5j4qdLKBLneHtAHrEGXcMztCnGTU3fNYb9obojYemw",
  "key4": "5YzH9iMwVjmBH1zVwbs86z7aMQ2KV86NAzTsWu9sFYRg4TAof68BoCqJ5DNQ8aFg9JJs2cGRrrMcHaJ5rxbBrvsj",
  "key5": "2oqQNNnpVvGoAdJdvpnAhKNWXRZyB2L9L3mUmC4f1ToRhvyT1F77PW36JZfQV4bQRqyxYGdJ3n3AL1A9z2cso5dw",
  "key6": "PP9hpoQrjchdz9YYUCfp8WR2PQGWhaoFmcJ7LuyoXMrAdcyuKVFohCZWs3qz1iYbGyZbajtbYhqSprgEhedfHpt",
  "key7": "ZmopbueUfBLFAWgJpontYPbyeZ2o2wvAurq494s8UZ4qpKceki3hH5mJrSnu8RTQ8fq6cevnZQehABFPacwWBAT",
  "key8": "CoQh9uxUi3iwV3KDULHwGVKyhJ2x7nSph8ZEytyxn8SjxySr8tYHmxN8Nsv9hgEM84VLPij7e8E2YvNeGRoUthk",
  "key9": "4HukQzcLneHjHr6a3ampBnmraVGLUduFeXqLMFhWKuDGokzfMZdfiqL1Sw14pE3V1PqqgsGnwypTGTQeMsn7nP7f",
  "key10": "47kbhkZetXPp6eHEohv5gE8MNuBPeFJ9XS1txbJgwApCu2YsR3jaucVmTA3gk3rERDUCfEknXfard54mb1i2t9vW",
  "key11": "pVVprh6Z7h8jdBqAPELs8o9QkVg5PnQaAhNYJdZDAQ9XLDn2eu5W6vhMtPBzMkHHF9qb39amyKPhnhMJt3377BZ",
  "key12": "akNGByKUCtmusZ5Pt3aPwxgdhkxjz59j4ncg8ZkfrDTRP8wqGW8Zk1UHwsX98v8y3zADYwvMRea45EfHPWU95B5",
  "key13": "5ZbVTgRvvownq1G2KKuKgjZuNUj6U9Q4Kaib17Kv3jz6zHaY77wCceEFUDJdhKmqBzA96vXX7GUKb9SC5JRJYcbD",
  "key14": "2Ln2DtTh4nuFNbeZDmUHiBE4pP2T5hNFzjmv6BdhB41qS2MERKcQRhuVjog1hcZ4C3BWsJBeDZwiFXjF1Srw5Xqq",
  "key15": "5TQmpRCxggWdVvVXpKYSiL96JpQftg35FtdGzERLHwYrXwcinMKt6rnbuUd6xFAkxvxkCwKaTj1x3nRhnKH37jEV",
  "key16": "f7DyRt5Bsk2MeYfqNbcLi4voNLWJZCjJMEMpApHh4MB6bE8emkMYdZHWRJ3c3b8DDvg6SiMWD2rnkTH9BQGjXkA",
  "key17": "3WiiXppk8JmSmF6gUMTw9xbPvnCtCbi9fozcKr9LjJzHX8NziEjTJsN6ourmhxQEy4UvJCYtSKsUHDsNbouxZmXk",
  "key18": "2M8LyqWSttjePABfHSKUWLbpPt3D9MmhciHGf1GM6ZiLimXBPgjph2VPKHEhrNkzsu3cqTBSnGrUcyti5DvaAMXJ",
  "key19": "61j53iDgP2wDS49JzzsnMDbUxUVmCZqkqpcnHVMRSbRJaud9MFoCVdFo4KH4TsD6ABWz6g9Rc1Bi1dHJWP1SzuRS",
  "key20": "3SnX3gkz1yz6mvKKd4xikCjVeQGSWkU2yFxvAfymyNfsskyy99q2dm6XGCXXa575E8ux69a5KbS8ZfjpoMF6uZzp",
  "key21": "3Y5F5qzYitS987YcY9v3TJoPwd66tXkB1KkGYLcCMAeiH2WVg2Ji9sbCZzsRhj9cvWikzkpgm79Uox6px7q7GSmK",
  "key22": "2BfFpf5iHmowVSBcg7oBATDHN85qrYXgVGoboXoaNiMYt4iCyJgJgvsqALgsXG6Rk8tmoBptpou1PrjMTCTSd9if",
  "key23": "2iKF4d4HiGeetWebouP8M9GVZv74Gt3UK47HPu64gqVvRMGBgUTtSr7EWrD51mKVk8MDC2bw1qxu4X27dNasA7jA",
  "key24": "3Cu1kBmbWTzaoauV9LkW2VhzhqzLCYcsWAtk9UNinQBRTUU2adv72jgwzcArCR96NNEM9GrVYMQ7qhwcVYw8xZvy",
  "key25": "2BBCau5gZJ9GXG3AmVB7qxV3z6wWbcZQQmoT3NKNhLJWDNwvkgvvmWVEcFfweimvd3FZnSD5hR5NDngBQfuGD8Zi",
  "key26": "46b4B8jPadNtarFjCuZTjbjUD1anexdVtcD4kttCBpjsbqiErGtixUwJbtgMHRBwDNCiq232BZ1HJc7QKpm15yL5",
  "key27": "52ooyBM1tMp2sp2XHeAZCXT2g2rp54gymKd1PnTo3XLi1KX7mEq4Ui8DfbXkv9E4Tuotes3X9GqeBWTuyHtwY8rS",
  "key28": "3vighPivyJbhDeoMeUj9xyHzgNL4GmgbMAADZtFks6RU8gmWQwGYgbKGpwxRW5aHg9k9bjbej184FkBEHb1GDyoi",
  "key29": "2ywpoxsnYne7vtWKStsVgxoYyfd6sqgMJFXNbr2imR8FkpXTds7RDezhkapgWy1wNCKGiDsUZju6GkfvgP7WzCfn",
  "key30": "3JzLH3BiasrUSpKBuPBXMAt8YPHmQfP6irXDBk7kGAzSQk6uq1D5b4hr8xqnCpH9stoYw99srLjLUCymvUNoDve2",
  "key31": "2rf3GctXTDRjCXVwKdi8rznTFjxKKaxr6DPfNkdKSjbF9QEDT3vDDYVu4ekgbWmHXYhjwLfzSTiXEA1SvQesXxjh",
  "key32": "3dYNhiygYshV2BcKvM7tuY58DY6pViuU7Wus7mSd8PCfG3d3GeZAAtGZSKU85hNYMZewfTeZQPhKd6kRXTdoXeDs",
  "key33": "4RSycKbk7BohngFozFEwxRwoMjVDjmmnAk5bmvr5d83mzhUAmkL4qyCwscLQFfreSc3m6MXZTVt4gstJH1iroq1s",
  "key34": "t7o7eaZocB5vyF1NWexknWVc7sTQbmToaxDNLgEe83B7RJV3FLDxfUiGSY7tqVzSWQYHNCdFHrjErVsURdyjcSx",
  "key35": "5opgdXrRfZQCN1XnYYUngD8VKE9XX32o65VFbsPo76TXYhTxyVFu5nGksVKsvLvhXN9VA97UaEZg78na35pJRLM8",
  "key36": "2VVbFxfsyoeCvukFytF1X2bxo35uM6Y9ukuAGUBFWuedFheJz6bcoNrmXqpW92m1Ku4TLGTMikiHgHbPJenwKvpy",
  "key37": "3RuaoGjNREon6e7aRL35cHqNLNaszF4cXitjrojum1H3yVduniQTNz4c1ucZLyBb8SjBjL4yKsjdL77gV9meWzre"
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

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
    "5nXdHJzkcH96ZppPm8mAe4nrAQ72v158koFHPs4Buv7bDxfYzMuKS3hCEpFe3LpbD5wHx3CTrS4w9Kq5TA4AqHth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJ9pKujAtZ9eU7BVDYtwoTJCAxt4Yjv1UHQvVRNqaihj3LhMyU3ecWENFfzysr3iwcKfQBighGWJyagWhsMuLFR",
  "key1": "2DBxW62ULkyhxH1c6iZEYGA6FnHXhfM6mxDDbcjA13kRPVtq7uYBPRUtRUvoX8BF8mHNbgC5T5YQYcvr3tjSY1g",
  "key2": "42BsBBCSf981SopuZ2mV6gLAsBp1DNKmsdG9DLD9F7MXY3tCsY3vcys2ZrP5x7rqMW5S6SMhbZi1j6oenDiXaJe7",
  "key3": "46PbW43paGgyHUse1CvVL7YnWx2EhJbtDHim4xTTmGktQRZzhfqKMqCtrtiyppuYSRPqQ6KaHy3ctAftmXaN1HTn",
  "key4": "ka1HDonZ5ZMPQZQ6dKnDZp6kKZPVGW2vcnHxXXwXtnvMYSYri1iao3yj6fGv3rbNZxi3JAKUPTqeS1MwvjfGjKw",
  "key5": "gWTW7LBWvTD94J4KBM7KKRTtWzLLYY4PoxfjTjUqaHsDsHiRfWr3ivUwMTmaCT77iJnpARDPiUy8ZR1VjxbZJ3u",
  "key6": "67c5m2j9xw8UoqxPRbDwGr8Guzhu7Be8ghf3jRbi74Fjajkzek12tb7V5G8Z2YPRY7uuoiRjJ2uFg9GbnLftBpPP",
  "key7": "2TsZh32RtHgxkyTA7VWzC1VMRaPpY3HZDGDH2CUxwcSsLRcaCsqzxLpkwPBbyeHfejgqge3uPp1JQQiUTaLChL7v",
  "key8": "28hVF2VjJSsTPxrbivhM59Dd6K1a5UjEP7tGKsLzzjKzvRtRgjBw6j3eSrgvfg4oe2rD9TGW7NCRoDbgNnSHL7Wd",
  "key9": "4mQ6JhqHhzdDyWKNQ3qHU9EMys4YnE4hmweb9VTSv11mVvM1yTiNvvFaVgjqmvAf1smS1M3DnUVez8nHcpSekq6k",
  "key10": "4oTjk6QhbDFmmh1ER2RFkiYG6XUAwGDB7b68tmMg54ZHgru5fMqwFLqKYEyxijTAjWJT1zQnMuUECK8J3fcg2aqp",
  "key11": "5wkcwLB5FoAj7DhpabevdSHTbS4yWH54zwA62Upbe9wodnxrNY75zs4DvwRDQEGiskZ7MwKHum2yVJhSu3PcDSCY",
  "key12": "3KzmiACgdhgpvG3DHSGFiaNxXRN4cHqfjVXG4m7ukXTrsmAABCaEi5kFe9i8FJtG4A9RsNFj3k64PDaAQxnwgJkZ",
  "key13": "MXXvgquMjg5cigG5z14ou29Z2uNUhzTHjtQpY5euYADD8YwQKVRmf4Swx8qBxxoMEi9PyBNsP7XJsZNsC3DjpWc",
  "key14": "62EspUDrGeHMaM37HYjiLFZPsGoCtewq1gsqUdg4FEpSeZfUTvJZVJaR7SNxzRq3Uo6P1yp3UR9q5xaNuutwhCJf",
  "key15": "3kLJUA7V6Y7CGJ7VYK4tpWd5eDyfjjMe1mJn1MFdzWNcqtvWMvHthYiwhW1NZD6bTj2QTUDDRcaDUQtmRxbtRRPP",
  "key16": "4rP9UV63syezDd4GujHBUuzCmyG12KqT5zPmNJNuvdGk6DhSxN9ezfVcwTkvPrsa21DdLNekkKmWRSfSEwhRZcZi",
  "key17": "hrGp5YieFDcfMvxFbdvHbPjGenVHqxoSzicDyq3dE3Nk4CdKzXsYWXJQUpjQqUvzq4iSDNSdP5scZNbhJ9kn9NY",
  "key18": "3yfaJDUg33Y9hwDytNPLHUcDatiyT7tdvbL8qxenHt645rZH8QaPbGUsA2wDCwU7Wr5JbdU71rUiviBv37u9mTA9",
  "key19": "63Ze5Gm5T9UBSqNBfrWkdpheLdMgSD5nh1jrFQXauJBzbmCGbYqRdQNGeQzWQp9vpznehwUKY8KaK3PZGB1LUmY7",
  "key20": "5G5kquvrtrK3Bt6ryB7ETr6Pg5pVfNMwG9DEUPiCiwx7b1TvQcW2dY6f1qufFm8JbDGWyLtHr5sL8tqRhTa52Zok",
  "key21": "3ZK4drsLU4y24j2csTRvNzZjTwCBVAWDCpaJeS3dpR2c3VzBWwdTwueFDc6fUWwpFUtg93bQwAptFkWgF1iz9xhN",
  "key22": "5jmrwt4dy5NYKV5EpLfUEQ8CfrHJph5orLd9u3rdFU4G5V18hYAgeeQb5FauagCCBj8qPjuKP4DAAAxqoeu6KZsv",
  "key23": "3HgNiaXyxu4w3ETAed6q5HMMxVuiV1ZXRgxVsGd1oL1GQrtgkfLpUMaiwiqQqzaRzoSMjvsrw6nycoj9oYtMcCnk",
  "key24": "4qSDqFtSmwv8fps8goaHNPzmobDCPopwRxhND5gXgd3A1hgxRLFxHzXmUpeh5pu9q7LUTwyjAtjrWmSPBfiSczDS",
  "key25": "2mKi7knkfMF3ifPEs6WkNzGEu58SKx517tsX888R2oYkeyEp3dQXptRGoqrUuPP4sAsYusAuy8mxDJU5s1fgBbXY",
  "key26": "GNzDmRsgwwNHnBwmsN3DmJHbtJy4DdLB39ZxYGhfwZi6PsuYSS5VgTW8QQJ1Epd3i6sMDPGhZby6xuyVh6R6cLG",
  "key27": "3b6PyJsdyuoQdivsESis5ZSHi2Uh4Sf65fo7AvNSpe3oyJjku3fTAZhszsBPsGkZXvpiz8JdvLF33WsS69FHhKE9",
  "key28": "2R1X99WY7kGcmQZXnjHoh6YVgnuHLJz3VYP3hczQ17KheYt4YPYCnRDm3b3MkeS2dqKbZYmpv964j2VxSwuroJfo",
  "key29": "3sHCUugiNPeKytpfGzHpTpHJRPbpVpTNxFFEb4ZTJwV1UJKQWZzf9Avw32V9f4a4jNJRjxMdSmPmtbeRZCcVRWRs",
  "key30": "5qRZmyxSDpTCbgsDavvwbDPjfEMStMsANjRJLW6g8DVYYfVuMnqrKSAWK9KhYHJpMPuYd6m2Rx2BELVuRYUQkfAj",
  "key31": "2CYNcHfB1PbMfA5fEg1HQGHrYhNaQ4198zqPjexiAfNZf1g8nkYo2buSRbCiZFCX2Cd2Jsk9u5hv4AcUgyoh6jNi",
  "key32": "36W6HNttw6A6ka7T1C54oMcc9RbMm6hhciAqesC6g13RM1rJxWuVuiyxnHr1mYgLkfiFbecqfH5t1Jj19DwukXNr",
  "key33": "6BETaj9LZ5vtCbj57jYHUxv2nUtXcanCp8SwfauabbZ1kTnQmdTR9cHShCs1wgJCnoAdDZw58Pa2KCgXAFoGS2q",
  "key34": "4Bfni5awhn8L2RhXMBiEc5y17623V7wxj62UsaCeMvfChyF8zYfYxMj9v4Gf59uAxN6RevySCxWQxNxyXWjtP5o8",
  "key35": "5xxUa8fEPz8DgZMyewbp1CMcYriZ61CQSz54btouvk3UWuzkQpap3RkVxQmKivTWwsvSVvxtpTn7SDXiGPoSKPWy",
  "key36": "5wgGkMBLdKrkq872eGxy9vHSLJEBHvtypjwntBcn9RZf4U6DDy7owEn56bHXoxfT9Zrht8Dr5xXbjTQ33wHG2vTH",
  "key37": "3fVUbuu7ozC81trqJfsbhiM2JrQ9satHk1EMaaSmrnjEWbw6vK9k7v59ckkKJopnSaeL2E6BwkbqqQewPaR5Kkye",
  "key38": "2NfzQhW7DnRoGBUcCg8mfrKKqyTwQQ9b3PDjsXjqQhNuycrLETbrqsoo39RFnuAhp6nu9YTT7B3Qu8cx24CgTc5u",
  "key39": "3cAk2waBuWfNSopT83RRtSn1xpqEstz2NVmCp2mW5i7PJnASd7MWeAvph9Ki8yhTjiwefEWTsuoda862FwG7MpRE",
  "key40": "6DmQzfqk5T5Qvr3SW1zhfRMowRi8W4K3QXKZXtSjMHwKA1wqmZZca1V1QuUvV61vGiHNqwdiRFXuixUrZwUD3E4",
  "key41": "4dWiePs6m7QxygMojLh9kYgJ4kQ1TVH8zjJPgUpe4Ej3Pt23kqLvym9P5YeprruxQFr2psbkmapDRNE5K8CX1FVh"
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

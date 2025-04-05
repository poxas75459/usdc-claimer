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
    "6AiEtLZr194WZXKitL7uggoq7NVoc8ny9ttvkHhJ9FzrFxWbEGzVLuqFHX8c8FtKW3cjGC7WQe74SLWhnVtoMhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6ZkDfHSgD2r6wD4A4H9M1Hmmf96zG9yMEMPhxuCHwGY8cXJPr9y13mk82hn6ezVHDxH5MbmdtwovjEFeiRzqNJ",
  "key1": "D4TrDeTN4zjAkRR3mddfWkaAjvRu3p8kU1Epmi9MU24KDDnU4pwtx8mVhyuFrVMbMSNbH2fhzCzpyNzQDpPajrp",
  "key2": "31wKqAW4E7eB81JMMLCgyhFMJbCe4dG5mCcev2PnykFk7kh2dNHLwHSmcfS8pj5QdvqNp6awbz81cWFXfj8upGdT",
  "key3": "41bAB2DxA1mNXiVLWJH3iKApkum4xqj6xzkMDhna2ShCvhPjksWxyrwsQH8PqZJEFSL3VyQc2dTfqADJVL8Nff2v",
  "key4": "qzzVuqDmJ7A4ezkxXE2FoVZU5BvPojVMJRW2Fr1sQ5HLyqp7aPRFt874YD2EnyXPCckPHdhFyP9Ftr7XRDcNXEC",
  "key5": "5kNu5QWMbkanjLhB4KcoXAKRrNWN1dWpEQDmdbqyh9tqNG6jea7dg7fstiE74BeYSs7QcyN12UMTvmSvgwABDtBF",
  "key6": "679zA778q6SDvr1Ypj9747LBzixZtqYxUWJNSQLGAz1stLpNYqcwC5cQgD59HTZBbMdJLhJ1xtk3pckyTXacDgiF",
  "key7": "5d3Wu7EAJFhEVS4RM12n7cu84rENuBkXfUDAMyRakjDVGhFzi7ov7pAibRr5d5PTSm3cEYqmcNj27oUKMVRcEJzd",
  "key8": "2Cff5FDZqi4n6uk3y8Zkhf4rSvgTVWwr51HJGUwqqpsvzsLsKWT1WDM5NXuDS6QuTXogtp7CL1LdzWCFSnwK5gcu",
  "key9": "tLgSW1Gtj2FQUyRvPziZMs9GWmLNe9HAvV968XytWWykSZeSztD2sicTLVJNYiwycXpVyU2hF6qmT5Nw7f2FyAx",
  "key10": "49QaQBva1Lv7w2TgtAroEqvj4k96EwYHtdLuEPjL58Vsu41yZW69WhGLPAqV18QAQ4mQ49sf6n2UaazrxZV48xro",
  "key11": "5VULkXQqrcAQoi9Wd5kGYgTLfQAmNipZrLRdWk6bNLSCV2RwRbPFgyY9YyekEgvynrEQWykhqgnhNX8h5o9G5gJs",
  "key12": "3CJRFC1wwvGr96yxDTWy9VX2nx4C52BEkah9faA7qrr7hhfiWno4UzLJP4f8hVybcjfmtHstHi3C78MpBYf5qfxS",
  "key13": "4S2vrTMvjAmo8DDo3TYNmua9NVUNmDktMjf2MYv6GqZKaX4Np9waArYz2LMAVjh2kgMJCANeBn5qAqaabCvpTuzx",
  "key14": "4B3Mq8aoHCz3hnpyCegSNur4bTXU1z1yF1UodAX5fSDcn8Z1Bmp18G8dEYdQcSjGSro8AeaM7cS2QTBoRkee4ywh",
  "key15": "5WynnNAHNf9UxbY9NeJbuismiuk9CY4okc1aanAzbPtpDvBDx8WoZfRkRKtksu9ExKsgQXk5CxagKoEcDjgHZJdX",
  "key16": "46bcUZTZVXTugQC1JjbX5qAE35PrefpAQkn5YB6Yyt9HgDVHBNXd1aiSdokSCcguVWFmPH4F3N9e87u8y1cLyKvW",
  "key17": "3m1Cmk63nvy2pAntQadatda9KrjAHML1pSCfepS8nqCc9MdBYV64KiEwUkeiiarfQoLUDGSKe2RSCx26dJXk377X",
  "key18": "aXwTPVRvrmYKxBZoMU3KDDKBSjKCqEaK37a97CwTaerdnbfbr8L36iMCTRLVrad1Uc1FPrQ29ZRrQdY5tziaQ4Q",
  "key19": "45aZgUMPJnTbXsS75QN57uaQHUab91dyW7TohdLWz9S2JUJXHvGX8LoCyNcCzhJNKMgGeosNyVT6WYD8aHMjbPCz",
  "key20": "fZmKxhfnSLZop2WSaPnnYQkJ66Vj34i8mDgAK1vhWYT8TEPRUBmrTThe4fPGdpSFsyYsyBo8wKNnQ9Wz7UV7hte",
  "key21": "4Gw7nLHB3FJjJNMf9YMc5TbjTo1gh9VrAAjWELuPjMaFDxqu29yxyQkoYWNWWYdwjia2auybq1gZz7WxtSwCSnu4",
  "key22": "5nZHKctus3ghZsUAoh6Bzyjdff6z6gUJg1LdTpiRr8mry4SThMAgMkQ2UBcd178Fk66jcFGwySYZbDikfg8sBkwy",
  "key23": "4uHgzUpzCjuSTXUbeX5RHbNdSXdEhEvt4DvNLeFFpCvY82PZuUr5oTtWkK4dT5C8dx4Gyr8eRLDM7yVxaS45MDNW",
  "key24": "2xt3sk7CPssdSZGh5ULFDgnydHpshymkGnkf333GpXrdAqgHBmrv8dTSwJSU4yr2M6y3p36Jgy54wna87sJpNSj8",
  "key25": "mThDcBm1EvCKWwVeqWq8gXPqQQ9iQYiae9c3MyGNU3t19kAzgukhY7fWESizriCudVabgwN7dq13WRCxnok1HFo",
  "key26": "4KnbfMvNjH3Fi4QK5mT6yfYk7UjKHBLvDnpF4KQWV7eVK2SU7MWtRQSCxogwHkxhv9CWiqsdMgmZziZkjNPCETVU",
  "key27": "WX8uErJtheqi8CNcBLyYnoWU5FfKzLVNXj1jKkVFhpfY46PNsMmb4tDm92VnipQsaPMXH96fmr552GmZi9NQZ5v",
  "key28": "2RpLcRxktTuB4XXZ35JtDCRbhMQdfrN2yR4gzzPUWNpWXGkLtCuULAzBcJ1pADHKbWt1ajEbkZzfd9AkH5LjK6Sd"
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

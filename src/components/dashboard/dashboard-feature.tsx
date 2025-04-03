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
    "33hbDm6BashJNYZxJN7rXKMCxcs7soTj7tXb8yc4fVHfQK1aitqVKThWRTMdhWzsLeSnDs9vE79DuTpLGsCrdMV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wC9AeJKkxw3doVm6cgBcZnzj2CggdFstjdtePw2agWFjtvAWqUJezmDxgXkXx9PMrkk4cWFtsBceuhMZ3T5w6Lr",
  "key1": "K9WSUTv5pMtZqLwVcBHhzGtseMHcs6e1MTC7QAbSFvsmZHaRahqxRfP1UnpVmAyrSFJqgnuL4XoUENbDhQ1gMcE",
  "key2": "62aJp6AkqLk2H3DcSzJuacCR9h2Z7Vq3tF45ArqmHmhj7kigWdzFDiWMUutVw7mnfDRFSvFYRpuatFitXRyAQBFx",
  "key3": "4Nk9STbUUf9cxWqNpomjrm8hK1dRQ12WYNm257nZGRyF3NCBoTxNzFUMX5a9DHH4GVt2Gxjhj8d4WcWNWGQgooRR",
  "key4": "5V3t2wyEvbSs5Vr8idRdnEMez6NGAqdVKDhaWpXx2MUgzPZeoZrYVG1keppPkH8kV3nT61KFV6TH8VJfA1CDQHbR",
  "key5": "gsisvRKFk9xHn6DKfJHkoeSkiibeUE6XLWpCTZZ7hYJuDqfVrC1TL55TruwHDhz3b3EhMDmgqyqdmzXjMNUkk6Y",
  "key6": "2W59W2bJRK7K65kwXMkj86oJ7ew6TiEf8HkpyzSnU7862g5eo3uT7CcZtD5VTvL991ZFfVd2JQc4vGGKEgxd2QNA",
  "key7": "3We923EWw4VhVLjuPrAvvgELTvDyzoHx58F3o8sMn8Tv8ijHav89Fo8SiBmWrUKdLvX5mzWcCpbUPWEBrUhL59dJ",
  "key8": "3bHMSkRnbAEKYVwQ48485TwKFbU4W6o4nxoJv5ATn1zhHsG1eVqAma3pL7gmWdAsuxP2n8ME95fJepDS4sU6izUs",
  "key9": "3cdzazSojMsfW366PGvv68ZBFZgG4SKXzT57AFaUGZ68xc5vZYrV3vWgGUwGixE2m7uFYtbFgs5UssFeARC57mQG",
  "key10": "5QhAYUXdAzyGzCzzQQhDRDQwVPQySbQ2HgEJjVUH8xAD4ob6LWSnVSR3zTgnUb5GRaACAJmcwKtn8FiYJXNmfx58",
  "key11": "5PYPx9J6KovKxiUHriYnhbDhMgTmsuVQpp5TNKkncxXfQpHJD8omr5FkZnBugqDU6vuH8737TEZCAEQnTjdx8vT9",
  "key12": "66myxTtYNdyvFLXNdfXKRv7aHci62jzv7UAGEQnrUu8nUcGc33id6DKEeazYjkRdCTR3w8Wf5jQhRcr9u7bNzwqo",
  "key13": "5F6cRt7hRh762rMChiy9vq2mCRhJt2HYF5fFisJWYn7mzpBZhYK1RkD4HqbcGp61SLPs91jrHYnFMRpMMkazg3Vj",
  "key14": "3Uue1vkvjuccusGKDigobKgznSAQd7WBTKhbLrebRwYCUKJacNcJChKQRUrmfMfmr8YAshr3wHYJjiSgeM6WYgTn",
  "key15": "75GbvSgjjboUaE1K1GH1WBAXh78EY1StJNkK5bGPCqPyTPJC4FQ5jqo9Mx8UaQanHhsjZhRA86MXzJfXf8Np3sE",
  "key16": "4otU373SS5dnamHQQgcUSiv7S97uUmWRJd2VSQLNwjPvkedTMBpQE6jyfjtnuYn7y64zZpee1MRAmCsNwMoCDAw4",
  "key17": "5BeH5JUqm39r34jSLZ474tCQg7AdFSr826JSesE9jiS3HsLSLSwihSJ4VXEr8MU1j3QQ7uSqdHFQdnv8tp9mFNsw",
  "key18": "9aiwPLyb4VxeBEHZD2ZAD9vGL79VbF7EvjfHendawX5SQugW9VepYYrp8jCVLvE3zsdBJTJkURV2gxg3Sm4MKqd",
  "key19": "67otQYe8FkgXj3nX3bQYpj5pLgRc2nwvxRrmoJ7bS7qmZkmbkLQFkLZrBq1btPNkzN19PCWuk1PuiNWD1DbwW3W3",
  "key20": "58wMdiVNcX5XD2mgDLvmsBthz28oTj9WGFqXy6YZJuR4N9jGW4fSE7nuVLDKDLKnGg1ERcjxvsioFCoJ3oC9M8dz",
  "key21": "Z5qzn81D8mp45qeSpdLBLHWfryheTr4RX1L5UNEuKB6YUBWaRo4x8rb48LZHAS7JqQrLVxp5iPYXjUNXYpopSV7",
  "key22": "61wi7hsDNvWDZqrwh3qZo685AA4xNrvMkbGHihy7NoVMmPmZxUZRE5NVPSraeUYg8EC4mFGvTi4rE7C9f2PxZmyJ",
  "key23": "55WxyJaDv536wj8MnUuqbRYQyjgnAYAYmLghZ99xutYU8WWhVvVSba5stXnskDpvfEBv2FKs14GYDrCwphZVnBKe",
  "key24": "2eYu6iL4pZ3LUUFEuJFByNnSCphgC1FxneDn8jpgEKRVZGxYT7sDdTmShiptvhhnGoKdEmVv6BYW5fvXaKTrK2yu",
  "key25": "aRLWCW9sT9dWyMaojK1xekZ8RSj6mMga9GjKmqCvU6UHwqS8dfpAyoedk4iMrWnszfAXnRNhzu4AwpJWAn8XR2r",
  "key26": "5g5V3y4GTQj3z2dKAD8o84ERDFeaHMuuavWvMBqdXFE6SutHoPngsfK2o7VfRuK2PNHJYzNa8v9AnZZwCmdbETMN",
  "key27": "3VXheUAv51iLcorrmXz7YHf58A13Lkvg5EDCXZ42h3zpqHDNyDRUWJvqtuwMWvpaLeY8MzaNUzT1dYYNjVM5VgQY",
  "key28": "4E6y8XeNZbjK1xTBnJafkFSzh3LnhzByMwxvah2vEaQnia8Gy1zxQejD4hhV4SnZFi7qe9wxdEkXzUFLahig9fDE",
  "key29": "34jdGhLmzsXKcDNem2w9hNvcGg92AgEJEy3LzkRB53iqCpYvzgUqKRRb3sCLMuHqtZQiSYCVzeNerZZsX7iG6Cud",
  "key30": "4cu1qasrPaVkLip2jchTidEmXHAWxzsgfH1STkBtRpK3nq7kPKAF6m3PPGtRhTyf4PXQBZ1iBJ2FcffTD1sn4ihN",
  "key31": "3Rm8YFoX4qbQQ6HJ2toY6eLS8E3fAh5Gj61FXfEWQybjVTYxLdW8q45YeNA9neL1guN1whKWS8ARYeLJU4cwjTA9"
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

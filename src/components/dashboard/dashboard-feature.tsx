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
    "NXjLN2yhKAHNJdD3sUbJiJ56qLsfFswvVHTXWKLJ8XHSC57rkqHAgoCkxHhsbT39z9zLapa8pgjE7rutwuyRS9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RLcKa3CEkPAvsSUuRMz8dobeeF9b7BahkyH2mwrb8u2rjMmB25dVhpdMvRY95f6ytxnARn2kF2kt4pDbwNYc821",
  "key1": "NjPdB4YEKYAjFDvbHTCwkS2EtaaJBArSJzAW7CaywxSboFbvgizcXWwxZaSUt3g4hfhRquCXHbdsgFe7h8EngU1",
  "key2": "5VbPRcn46QzNxkmzH86YcdrVTHvcUuoMGKAFCaYPegG7MG26T8bqJ3CF8qKyKcqJ4hg7YDcn4sGtMdwzjBFi7989",
  "key3": "2YmeA8nKkzuGJ1u9mie7MPWi2yXGtnizbfFrF3bDUijzuKKYn8zBTgSbmwjJYsyaeqw7ncfam1VMFmZtTrNYpbiK",
  "key4": "3ovuUkCGQeohRv7K45PL81833eNHX5yXgCQpgbWTu1Y8LV4mpJYWAn9U4fDi61FmJKvCsUaKXKsti8ycbFGtNVBH",
  "key5": "5yH2kxgV1AaU4SsjytUC15PZ3ouXTz7DV93WnSU6Yueph1s77bc2SjmdztyhpR4qtEepBXRbRBbCCjrvWZJcxE6c",
  "key6": "5q3HZaXgpwKkS8N9vnZtDchEoQZrNK5HiEGzHqFCxSrDJjLPWDiExnKVyJFf8VA3sZCotyTYDWnfgHJithVrGki3",
  "key7": "2URwGv7idx1tVNNFU1eHEwBQ3ZHCBy5fa69QcsL6Ju3GUcv5Xdfi5KX5KGwD2XhntQuDtFE8SC74LgsTXW1cNg3q",
  "key8": "3sT5r4UQqSsJR5pp34KVKAGg8VF6Kiypqv5XTRjGBgLrUapjnxEFVC4y89ZLJh5DDAgEGFW8D5tM78KwjtMaDdQi",
  "key9": "5LYgYiLPAkAnMKMxrjAMoMFVUGviDa3WGzW9cfg442zLEK8uQ2qP6Zt3wUVo55TyWjEf2kZvRmf8NsWiePM13prM",
  "key10": "5vR5dgEoky2GKVWPqi7HseozKv6RCM6AG7i74CbTDpPynpRC5rArNkDosXZ8qnFSwYi8UWdAaAMHeywUTzVbXNZ2",
  "key11": "2YiLFGmgi83t9TzEXXPghKrpP7Bv2u7aWoJx9ckCAFTLNthvh26dZdxbuHjBVeR5y3MRNozcRGbHk58MHLLfAh3Z",
  "key12": "4nshudrgyLdHFbdZuWqqeZ1UtvQkfjMPcpZ2bUkrYteJK2GxPsQeXGoNmTWz6k2dht1gaFEjZCPPw6kjVLeonEEp",
  "key13": "4yRivBtNxeFyANkUcS3aW8Qfs1s27KmRMAsAbSRDE9nKLkxUd2AskrN9MECbzEsuwJZyLJ115uZH9Xgo8ahcYJKa",
  "key14": "xvhkP9nMB18NdSK8jDTPN7HYHQFLxHu8NsF8UECG144CB8BuBiaJMNW3HqPyKURx4L7xunqM6jn9FbFnXZ1h3dK",
  "key15": "4SiZAPjVBz3JahVPHsYXguqBcnX1wuzj4XNMQKYs1aCDnVqvzSZTA1QuppphkRe7pYhGHCby2tYEAZzjyf653gcx",
  "key16": "Qz89dH1e2d7zrgnt9riHJbt9rTmG9Sh5JfE172bdJAe214evU4B6YomfZPgjZ2DRZTdRVneW3uZnxTJ7xn5Cxeb",
  "key17": "5L92fFVBzQY3BrnqwWmoedVkRmKJLXP4ZBt1hvb9Jd34Yv6fer93sPFXDZqL8LFNP2nMwbbiWrTQvt5AMXWfvLVA",
  "key18": "7i5UNkkUmXb631k4VQBog19EZHMEMkSfzqofDMgAhT3RBxKjFN9d2kzPREKhpPaWWRTBak6WnLsHyXvFPt78aKB",
  "key19": "2RCddgDrEbqYBMNpanSeJvHugMPUYKmecqZtXd8Es8XTe67uw9rWd4WjTxSDi98WNFtPKTK8U59QmcGpsvPv5Lmt",
  "key20": "TpSMCqfk1dQKwzzTdyX6hTCuHzexbSgUyR9Qx55cWMkzfFcREpyE1GVJhUD5tM2mXeNkpDp4mDqXMozd6srcJqh",
  "key21": "22Qy6234sn7EL4oWTTyjbwWMeo8VdDuexb4qmgpBf9pJj2FkbFCbxhiegPqH6zLV7sb9SZt2FHWb9UaYPKK16PM6",
  "key22": "2aPXRR8SghGCX9fxfd1KGDKcdmk9Nj8JjTbyw4fSmAnxX4gyLWs4JAxF3ZHqWxauzsSMepNgk9CfraDSyFN7rMz4",
  "key23": "3bLYjXyhEkbFGMaNLbGoj9kt49pw3LyMHzfK4VGxtj6fept8N7eEjVZxbttAhFzBqSLjQevFREFeiEvXMFCxrGFP",
  "key24": "Mpf82k5qdjcoGTjAZBfXkF7sYf46hpvp1WkoD9Pc5iYDWvc9evysTdF2A6RZi2EhoJBe8eZRRgm6F59sinLW1Pg",
  "key25": "4GRo5k6VnVo4JszSbjfWWxjuPMjgRSFsyRdNujsru6FcJgWK8YvmEMEMt4CDPazqD4eKzwCsJjcasiK5Amf2DCKz",
  "key26": "4M9DyMrA9vHrd6GEjmfrrBJVDZSVWmFsg9JnftbZggg8DoR6QvbiTrdUxBLNVtycWyURdvtjdWwKCiitGWzZNhvD",
  "key27": "2wgeb4AZrdwKAWjvCAg5CkAsokq3TwZNUdbMA1Mg8RyFey4Q6M2AVu5YnwrJnjQHUdVdmFrM8Vor6u33UTd26aMr",
  "key28": "4W62jJBCbaikNbL6ixk1jpmAoJpd6Zn1sno2kqpj9dSTHpR4zhvDo8knRabAkuKmWc4oAru85fDaWRdy9W2FZ3ZG",
  "key29": "n18QXuf79fWwz4642QKXAa4rpK11phUsgp1i1UVjWRZ16jzveqUgeqV4nJH4HiwLBHthYmBWYmshHFYFYSTthZ5",
  "key30": "5zAW2Apde2NDybpCKXVmRd6qg7X4amVVAiGQWxDHuCWSbQvM8kx1orfXbS4idMPNCDv8aqbLGS4KCgYfzYFTN9Nb",
  "key31": "43ekLyZbMo1dwgZPKuDgesYV4HcAsft6ttSn4RzQWELeeAruEkkDap4eSSevc5c9wUYyxaR6oSeSw8bxAVWxLGJ6",
  "key32": "4tvtfkyqV9mvoSCc72deKLTPkJB75qynZ3HKwu1mQzgVebXHsvU7Czig7xUcEisoBFMVzAooHRAMx9egzXpm2Wim"
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

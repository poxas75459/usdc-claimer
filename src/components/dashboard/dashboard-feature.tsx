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
    "4tKWzT1iar7wyY7biB455XuNL122VNevhen8kGADt2mpuUaDuDVhm8scrZJ3XX8QAoQtce3L3LeyhbhKm5tZSMcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wz6PhF87VHMAZG1iRc81BnZ6x2Bo2gVprHr3sEpwLkQtnVvkmgiVQZU8rK55n7yxcgpdg93JFBsVXiVoUeG5ERR",
  "key1": "39wzArvMnQst8zqgAujxNnvCwgsYuDxKeqKMFLVVSvNV9MtCWcNXmEY9utyvU9FSr73gTdJkEGhCoR5rhr558cHy",
  "key2": "3foFSWs9eqJnSeyT8heQJbh1TfHGEdhjyQPFc7Xv1z597UUD71HGNJEgjbLoWQB5mTUxnQjZm3XdoamrpVKrmGQp",
  "key3": "5B6pQYRLjPc9mxFxdGtCBacah23sLawL74oYkaTPuPQzv3CMpNgGtwRMw4wTvRNsg9yoYhjX4Xk3M4KDEnwp5ect",
  "key4": "34qprw8G8ZXPGP5P9i7cYHwZtueNeNiTvmXo5z3FRAx1svoJHjzcivif2WRRcCVwNnnUhPAKcb3hW1tkbF5rczNK",
  "key5": "4vkVJ18hUMQGPqCCJ6Pgt41p3qhsprcWVLLfotbyp4ErUX61AemBDvxMvg9G5N5BBFBWfyEkCcChZzirKKShaVLW",
  "key6": "7GahwtPCZSqSv2bQcSfGMXnpZiqmWYqEbBYt2NjpVFxx31VtP92J8x7fcsNWZnAuyjMUmx6g51FBiBQZdhqZMGz",
  "key7": "5cr7GK6DqLa6N8m45JgihBFBn64SAqf9Xq3UcuZYMp8rNfBfzdZCnBAfvrpVsqiyDbwiPmUxJ99pUHTwhLpgcCeo",
  "key8": "5q9sLf3Zd422BztUHa3KQFCsBrLWXtYTEHci8UUNBYdcGuGef7ERFT1VjyjvtiMz2sYVFPeyRe4MYnVzaCVTNZ8G",
  "key9": "434jrcfzNaTRg9SSDaAB3EG39y8iYuPBwHty6yTwAZoirbuBWnRZMyfWX6N7i1bhQMBKK2o8VzhzQLJFDfMPk26E",
  "key10": "4TPTByCiUqFjUmQwbcSFZ5pcX7X8Ax6g3yKjwLqRZxamHWZQPDo6GVFsJw5P7cUf9J5SpxydkBb984k4RbzAXbkv",
  "key11": "3zoXnxkYQ68AYbpDwZngoxV6atAXs6hxTa5GLbmtuRR1fWWEqibxPURUtPmy3s5TkQNsNDDjxg8qiyGbdDt1ficS",
  "key12": "bgjbmg7pjh175bJjr2RkXAACBvNCaV2sSbX3FPw5UacxuC5zNmbvo4RFPx8gAFjYVMyrQS99n7UQ9YF2tidbUqd",
  "key13": "2MvhkK7ejsgTjus6PmRFpVf4vDXdvFzJF6E8scQXWdm7jyjsAi6KaZyWMgx5tp42stSWZAdu62emL7LuNe9nxStd",
  "key14": "iHfCwrJVLjo7mkUFaUiJukD1NyhTm3B6ZidTu1DpM9jwH7DbL14iJGbsSHM2Z1U43ctAKFfVeStZcjFvxHm6HC6",
  "key15": "2hcuaCqdrxK8HUQe1LZpf3fBQN9bwMHvpBbcS7r4Pt6xg6wmox8YS1mL2qfxVtTkFMp2fhDhDwatH4H3f7uKSCf9",
  "key16": "5ZiWbNYohyzqR1C7bmHfKNho3QvdnmjXDexyB7SJhwwpZGVxunZoHAE7XnJfmibTLugiFSTF9UwVtCXS3Uwo5LCb",
  "key17": "qdRHKak2Ln4Ny9LfiWBoe6Y1p62P94rvZX7sYfn5ZX2kZV9d4AEFbbYkJnw2rXHeoibWGneof1M6nP87vgEYXNA",
  "key18": "6545n7AGpV54pS5x4hAKAkJhXnM3BEG4S52d11uhwSL2KfM2DhMYqGYN6cAudH15iksWmEebXx7brNUn5w3paBHK",
  "key19": "4oisBVq2um6NRQcZkV2Qbb4Hh7MQS3yNoZ7WDceNuU3JH6gmWXAm5zvc9jmjhuiKoh2jjtmzRZsQfSwBba9oRBPS",
  "key20": "5CfiwuKW6D3H8hrcU8w1tfPh1KB6ptXymwGNzzvG7AEfxa8mnCcdu2v9mb8KmMEBc9bjw8jRqpz5Pu1dZm3hGs67",
  "key21": "1ZgDzwRoB4deX5qvyteA3WjTXQx3ToiCDfM27T7yZ9y9NR6Mq4MyWbCvcfuLAbrmcL8BeV2WjJ3K8eSzTYbMozJ",
  "key22": "5HDbHvhA2TDxfynEpX7yV2pK1DbgpFiwKMbhgGt5KkT5B9KqLmTm1u29ZNdQfDhBCQpCkSUqjyRpdZ8Xu2vY3ams",
  "key23": "5Xa34crNEBC5k6hh56nLCtjuQbtaDkjAchERVQ15dHrPehq96aTJmTAkZpQvh3c5KRaQiu9zBVnXwxE43hJ5yjYF",
  "key24": "3K8CqPBQQywi826Yss8pgU7JEzTwKdPJtBLC2SxhKG6GDzwtpzCwzqGDA27ypQaSbYX53Qpot7eXiyHSzXSx6Fbk",
  "key25": "4p2zSXLYZjQ187cvAN5QrP3in5nRc4tRGABcsUFkJ3G1PVTCedPQGSaLfZp1YByvN2WRgRjVLswZReD8XkELhyL5",
  "key26": "wCTkcKKeUKqGcY66cMm7mKt6RhUENVb1koXLfTS1yhHoBpvUR7ZXZpxLhbLQLgsdPKBYqh1ksdHg1MaYbaJgmXy",
  "key27": "4mZKx5wtEx7VGcPJpQeSqMW3De6ptbaozhtyu9dSk1arKLZmQCNqRLW44kYuXGfzTnXjuBiw7RhgXDRHbSEnqNfb",
  "key28": "5zeLmtSFEaZPn3aQfH8d3SNSbGegd9exqAXtisFLha8nXAbw9KZsGRpCegFZdLxgPUt2skG2DtUBVShj6vza34Z9",
  "key29": "28RLT8QVFXfbCnjdTmezj1bKgg93eRcuLxgJjoGzmdfkLzSTn6nF37XVkR7heLDfz2RQeT778jTDw43MubSsizfN",
  "key30": "4yPYAHdXWRU85oxMYm4YqjpUd1DCge5x4bTJ77QY4fb3foFNAswU6u3Yn5aNPjQnD9jjEuEz2dswBi4oEJ1rT6zE",
  "key31": "2hZ5RQ3m2qzyfPnUESVHkpUkga9U5fKdtTzAgnPkX4jPQHk8Pb1Sh5Bwv7D2QTcZbicx7ziPQTHJfrNktarARuYD",
  "key32": "63Pj8Uwhf7uasDFHLsrta7LKftqaqpiG9kUnZocnXWHuvgWkeE12qDtjRtAHHZa293gMbcCCWeBLHm35FHLvALFe",
  "key33": "4uiBaYG9pegjbUyTds4yg5h2X32QXDyxN11LR2G9fdiADzbATNuGvXtg9pcRn4ZEUmvAYRWvEySyTgJ8sSVzNPku",
  "key34": "5b693u5wqQEHkQgvcMGtcCky1D6iByvCc78MSN2BdHc8sEhuQHj6BptDkH9CpRcTUPaBiNsWdn9jZEVhaAKZxYS9",
  "key35": "4c1AmVcDGzi2mU2QRtnzsec2yTiJKKLhd6DpZ9mNhKbsEQM6vDAbyzCBYQMtm3XfezSc1VCo3UKwFzqgafSMoDs7",
  "key36": "33k6EUpkjHPK188uGnpPRec3HYrKrL5w2iBJarg3uK9kZKWPknfafL4fpjWDSwcobw8m5qX7zHUjj1UNskUDE4z1",
  "key37": "3P9A7D7zjrJGUcbiYtEepk9GRmoiWameEJjx4TSEDdRM8WAZZgAwMJfwtNoJ6bWBVhRBvRsi5dhVM18CPpsbBwqu",
  "key38": "2c7MmXMgrSkmw5gDV4bkBAEmyXPQ5YJ737xPn5eEYHFaxxwwZGrBcCKqEN4DWyDKMhbbQQEpEsZ4cEnyYvSxD6uT",
  "key39": "2aGg2ixUKGZdDnguHtfywBnXdQN78myeUcsgDe6GqrFBeSYxPFGAzZvrqSiwY5sQzhaT19ejvywfHz3Lpk1tvvov",
  "key40": "3citXYNQ36nH3CLgxHeSVZd2r6a57G3uRG7NggGRg4zYTVSpKsn1yb4qMWyrN2aaQtCP7DS83yjTGzqwbTusQryx",
  "key41": "5UMcyXH2ptfX4aZz4ik2ssNwdAtkLWd35FSWMJkeEyo4qy7Vs5qM4gH3miioofFhTB9NqoyjtBmXAgTuYWifT4Gb",
  "key42": "pKDXGJt9SEbgFBYrcmnUUd8fPgZqPpYtvBhfcrjQcU9pUwCbSRUqkyGpF2j2oBiC51bbv1PnAcNnmqRkwJv3qCu",
  "key43": "4LP2Mgo33pJSwNFUCWfTkhBsf8E6kY8TGwPMAnQW374kmMjSit75qotjpiHcfHrKCtj9MwuXUy3hr9BZ5fhSBx7p"
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

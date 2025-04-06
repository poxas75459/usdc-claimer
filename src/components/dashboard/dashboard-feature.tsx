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
    "3EyPBr8d5MsCULkc1Trc84ruPBMC9o4RoCYN2eHoS381YJABtpHHH7vftWqrDPgvvV7YtwZkoTdgrFsTxTqY4hLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TMVNyeLDMnS4KXoB1wbTgEXH3kgyDtErKDzMmHDZHzjjk8rn4wxGTZbeGwnbrkENpFahhZW4iKgMEwC5r8f7PBn",
  "key1": "5K2Hw5KTebcvUn7PkiacHXD6PMVTLc5LRHwqtZJdjiSv52pi3Nq35h86DwezbzuCZi8MFGzbxsX1Kd4SQUUC9wDi",
  "key2": "5Hzz6XrqamAeXciQ7ixdTJ4ieTDVdHvVMjL6EhP9wDpvCBvpUdq8HEnxusjA3sX9z84UURgHjsxEFhzBYmAUbTYo",
  "key3": "5CdwyzevxuHvZ91dcVTNrQyqvFrXeuNuSZ73BZ6nvd1PFRNkqE89GdPWKURsKfUcHz6jFnfWfYphwh2tvwRZNxi1",
  "key4": "5eTb71JDrbneobcftVaNBJuJfMLwH8nCXvisKXCT3R7C6CEJbYj9EgLqB7TWwve4JiPWqnHnBQFTTaoFYre4c1xw",
  "key5": "56pX6TWEy2jntY4YzKai3Qz9ZqUPSQDzECTptjCb3S3KoVGsWRtFof7Fb6ELTUaVmCfc8jXLxm1PE2fQLxzv16wS",
  "key6": "9KJaVMy8RDSdtAPQ5nLQB7X4TiWD1zPDmEGcAQ44yPgPWQrhNAyJMauqcreZhSQX9eiH4vpB9MGjZbAJbVJgWyv",
  "key7": "5CgEy6eAN88wkkpCnef5xWqWBRmjC5rqBTYtCk1Ew47RLYMViFb4TYseSUc8DWknrqELWrxbYBGiqKYBHaip8KF1",
  "key8": "4Xp8LmUcWGmgSJxiGvDPQxbWtN3JYsUprR6Z4R1KmZ9BoCii2W8FhajxBqnYpw8vn3iCpSaDw2EQAPmWtwZ6gBBP",
  "key9": "3GG8hN5wQcTrr858vhMS9rzhVi1ChsuDuAd5ysqecxGFqGD7xiLreKbov4sfAuBJFLe1jAvdHX1cpRvrRtuGQgog",
  "key10": "3iqDc37Viu5rZTm2HZS9T7okhmYNswgZZmDiF1XKKHTT5AZSNNUSQC3pJfA2gMcU7nX9xSEE5kP26pcmZpSX7m1N",
  "key11": "4PDjQcuEENtWGxVoaM6E3CyW7nrGEUJpbdk8cnpqbdBBVnRjdATbkLr3GwZsGgBng14ZCkkoJwxDGXSrmDCeMmW3",
  "key12": "4hNzrUSSRZRM7yn9wonZJT6N9czEyiqBY6eyMPuJKZdatk2vGpcqpLfQdSrxaQTGWvs7Mq6EB5kAUMnBVoAnMARj",
  "key13": "4GFwHW5K5BEp6RJqd6uMPHpE9iXUEjRkLDen7mpQ8BvrEJj8oAgrcF8dNcCkCXEnk9Ei3K9S8Vh89Npf2eWUxTkC",
  "key14": "5yMWVfqny1VFwdKY7K67EXHkwGZk6QBYAYhAMvPRPxLrpPvtfLHZw421nBF2GAfASkuKxSJBUK53ZvtKJZteeq49",
  "key15": "4bT8yE1C8YRqgyqKAnnpX9Pj6nuP4tSteqDHqhu8RvQ4Qb7rdpT3jap3mrWoaKifx2v8PAkvaKYqtdWACNXiafAh",
  "key16": "2P92kXaNSp8WqWkgpHqHa9sVAdE7eftBH19KWcndpKTKZXm9xFb71ZLK1atkdGoPykNjTjcU73kZgZSHUH9CCuvh",
  "key17": "2G9PiGGeYRdbRkvdjsFPbLsiZ56YStrdwRc4U2w8cGtra1UrEJCX4nTfBw9Wsh6d8zxbfMnDCYyPRAJNa5jX7ChZ",
  "key18": "3bcPD1cyMkNTuNVQLNRj2PhMuMYAoBvpF9NMYUCVHsBov2fJnP2W7okAVTpqppa2tjmscPYY6H1W6ZQ8DKYQaZLD",
  "key19": "ZgwSjPhJeiPd1r9uVmuqjWf9w5kWRp2FVfctkR5WUvPy6JEobAbER2NDrkW4TWoXuEhjEBzN9uVrbPmoHmavWHk",
  "key20": "3dJ8BR9GpS5J97Lu2qGBHD93L8VcptFE4xV9xgKVvg1qQy5zd6Rszvsw6cF8XxgMvjrKtXtCWMaxzSk9SB7VTF8m",
  "key21": "3RBS1o6mqoZ4Ka5EvyhW8Po8mAFxQFxqkETFNNfsgQvqXL13UmUyrjass94zsh9mEqfhafQAV66pAqzpZWNg2UJZ",
  "key22": "4WKabKRKDpmXjddqGmcWMgdkEByLgu1JhGJcLB74B3nQdd8mLzNTW6nzEbGcscWujCdhn2p6mymiZpuaftknzWTj",
  "key23": "3KMXzxrXKQug2whcGEfdHP85bbGKmvuArwovbCy7NTC1gxcvV7sTqQHd9ZBJ9oBCT9nCMPHrqgDxGyew4LofpRH6",
  "key24": "4G7go5ed9PB2yZHScH2iZTPakA2yWBJUWy7n7LLzev676e5WyCYmjtiRmZSqnq4Eb3eST4SesZ4peQLST9aJQ9gy",
  "key25": "25qNH1MVYxNfFPGyqMzEmSCX6UCFgxtNBQx3sMrw5ZV7jtuhxPxBpjiR9Agm9YHdSiHZNgTA32XzGrHNgrpz3Uug",
  "key26": "2cWzmM9dwRY4LEfdmkkebV2sEibt7CmXD4a5Jhwyk5aaatDnuKJj4n87htTTerLkUaAizhJeBC6gBkWDj99o3kqE",
  "key27": "5dVtUoVGVoaz7dFeEQ3nZCLXc2nGfttQ6p5ZWVmv9w4jx8nrTQHxCniKh197GUDh8HCz4sRLz69W27RcBf1PAj2j",
  "key28": "erDA8CrC61D5m72m7MwvyKrGH5UnrnPMsLdANHBRoedgwDHwqETCReDJZWzZZMqyoriTZdj3SgNQwiauZDyxNxt",
  "key29": "2zgMRGwH2DdwDRECdNjPMnZou2iFWyBrU4LHUBZSRmMT5ZHbYh1nSa1RoUDMX7L415vi622FfjSjxkZxGREWcUHx",
  "key30": "39vD2Apsaxo9RanDf6Tzzx99fxenH2QMYLUzWoCE1cUT7PB8DTr93MC5o5J4GbNt1qnW3quL8f3UohDaKvLPTX4k",
  "key31": "fFjRwsj59wJBm6wrKGRerSzUc2dGYS1cD2eFsKYTwxLV8He16wqNEsw9hh6WYmrvr9Adrb5nNeKbsBDdxTM9BHG",
  "key32": "3dDYXv7fnQuxhcdcQLFQBWvryjPepxgZsnx64ZRN9VHgpVQCjAY75s5T8Ehz2tn5KnJh6eRRoeVZNGwdZSkvT4vm",
  "key33": "2K4ebriFtCaSEA3BP7w9P9w1GfikjcKF9c7TJjZTL2cMdoX6djBgkTJCt1FKTZmpVnkQthhmNSnNpKs6tLv2uMKq",
  "key34": "2xmRdtw4UA2vwwiNWr6rw7un2XqW8YRNFbZKFSAnHHFtbpxmvGLgN9pcshTZ8j9fX25s1CUHQ3iWX89peRQkYEPH",
  "key35": "5EQCw5bUY461q5d3LFyZqVPrp7qpAuj981d9gSkfVTYUP1cbpASGhSjcCizu9uWtnCJpuKuGq8k87MrBqBnrsbCU",
  "key36": "2BK6e7iU2uSBxgzbkTqWAJNvzKffGKRvSmVPZa2AgKQYzcogbc9nmy1VTe5zhrpd7bn5DXZjQTBDHpmQedf7eFtJ",
  "key37": "3f4fAr9GUyZ3s9jiyH1mDoujEku58XcxkoSYd7QXfbjZYDQYxrnuBXsEBmXSyPPtobGEBrJnaYVerRj9ugJdip72"
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

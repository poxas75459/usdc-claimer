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
    "5duDTRTuomNL2Juktrxr5vWcZWstsSEcqyqaERQJtziPZqZATtRxd6X5LpWfYVP6j7e2azYpd5oSwmQCQJ9D8EBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcdtjGoGigtjq39Tw8u4XnN2pXYmxCJ6yofHq7UcpkypdeAshD4eA8xWjEeeH76ZiSZ7xXQXyyEPB9Nuhg65Zqj",
  "key1": "LXSeg1H1KMWNPbFH9ayyL18rsXvYAc6Ymqd9HwtkWfonaebh53zFM5vY3rZqo9ZQmw43e9ZcvBYf7JVC7La5FL9",
  "key2": "2U6JjwXmaFDzZL2TJsUAdaytne1nFFdBcxeaYZaQW9mtbu2diWNCeY9QybqSpWYab9oNhxJm3Ce5YTGzrNMtU5MT",
  "key3": "4bDj7u2e5gVd63qXvhY7aZCMWWXzxMv3BArwakYTzihpe6bPUHDrPXJaSU6s13v6htcG4SEuzmWTByZiF4V8uGPK",
  "key4": "2AgWh65eeNyz1GsprEdQ8ytqzx7QTCufvxuRDbBZdf8rYxGy6QqJkTRCFiiYb2cSx9FQxcMGfATE2B6TbSuN4S82",
  "key5": "3RxuU5op5MNDHhDKTivic1PSVt3EKqptr8iwaN7GLTGr4DcTQLP1x8eNmc2rU7qYuLaB9cvwks3nybUy84KS9UwE",
  "key6": "5wnvBLWqme1kjjr4ws1R3h8RWRe4aKDseanuaoMXUUcXSFMMpV3wXkvFbYSdsSAiBjomXjhf5gNMaDHazizoK6Rf",
  "key7": "4Wer6Zt8RrDtiUHVbRVdh62ueiZ6kHauYeLNYtNJu4PTp5qbMYRqe631vYCAfBLaP1KoKkTBbSYXQVJ6whEeGXvM",
  "key8": "26RkMAsVeSErZ6Wi6rgTEWdhR2rmHuzzupgxC4j1UfwuL22twPZQ52kd9XtuveeFmSovqmEnighZAFa4CWEVFa6t",
  "key9": "3SsZiP588Zd5icdzLpLVmhVneZ83JGpVQkP49GYqeXMBF11GvF3qMpykofxmWuLhmHDGnpVDDdwZPLoMuGfCPLuN",
  "key10": "nwg1cnYfxwmj7F6oxzQCn6sr14FpJQo8ctyHPh9JzTiR6KizpTJucatqA4sQpcCfcCYXsRX39oeLbMt6qa5ecWK",
  "key11": "5W4HswZWRkkN9VyP8ueygzAJs2jDAEoAXqHMSWspeVMtkuRN6XW1jJ5cCvCZZuERs5WrAzrBmaeQ8eviU1vHCWYG",
  "key12": "3MS5eNAyDAFKw5emjPzVENDdHNGVAywhBcm3vPX1R32VaPMJmTmamfrrEH39ivuz2mhe2bVu5VWSdnnGdSVveSS3",
  "key13": "3okZTX1q9TR1p9TqjHK1QM7JTYtSxhUVMt7AQzj51e6kYVq3B6M76F4t6S6MvecKE7PFz8qhbN1vrVbUqWWFgFcr",
  "key14": "2Ks2b9LFS6oYdMCk4yA3CSESRd28JqipQCiVA6YymK41yCMQqswDtRN56sd73hcNEFS1iG2drutg1hGzNQizTQ9A",
  "key15": "fHWtvSfH28XNxgQbWh1KRzGzWfcFw55UwfGc4nd6Vm4YRtFCbv2LUaLzGVxRjk9vSL9TD7A6cC97myMrmCdBfiX",
  "key16": "3HVEhpEKqJrCKDjHo7ZKyn7k5SHhdK2oFMkLfSndz6wS1Gvt811C1EbvqnpP7Y96B7zdDSmBvrgWVq52vSLKQXNi",
  "key17": "3YzPcjhUiQEC2ZEJ3JtPVWSExk5b6oyqH9b6aKGXD8d6yyjEffa9eJtC9zM5a1rWnfZnVQU4KLF8JSPRGHSJ5TF7",
  "key18": "5SB9htNMpBy8xbRhnTGGdxpzcr5ntFyGx4j9qoBHjY5n8St9soeNzznQ478MsVj4p7B6VURV8SkurByvr8bwneEq",
  "key19": "51o8htzKxg41NNFbZBQU2d4MVyuREayJLymczZgFd7C3NaEZFhz5pWvf8GMizdUW8NxXqQRG2jwutDgmXHoDfpae",
  "key20": "4Gzs2rUqsbwNC79eNAdTDcX1FVW2J1Jo3oSXSqEEMAUtcHtdMUXR4JH1gpkKKzCjZ8QtPe2qhbe38iArHxqNj1CY",
  "key21": "2CS2hsbjXpDTHWCQSz1xiqxHGig9osQQp3E2HWph8VNuGtcBYnCrzqHmrNTdNefbumGQjSWdTcjC5JzUCjfK2o3P",
  "key22": "3jJDN1n9vPjtdcnM4gnT4ZFwx97VmPjEXZg2dQchznTKzuGqkryqaZznwm98y9acK5AUxzj3x2EJoprkud66gGQc",
  "key23": "Y9CSbvEPAt7t2ScetNFkmSXUTBxoG9D95WNWxQCZi766xPkVkT6At76F2K9CXx3pGnGaUyi3MFAyNaDf316xMzb",
  "key24": "4dwK8UeYwcf9XSAAzU5gy5Wqh4chxbg2MZCDmF7yeRGHf1p2n3QmLiYFfLodCoTcdYQrPKHwMzmjNE6BYYbmdToo",
  "key25": "59BSiodvsFrVms5stHG7TDtTeMfieWaegD4iMnJhqBdzrX2AWdkc35a4aomgUzgFwneTCxiYn94cpjnEUYdGP9Qy",
  "key26": "2rRLoTwNrjEkCyWHCp7hyce4LvDh9moy7JszBT3opKxps25uCNEwSA6Zd6x1n5UN21xBVLmJ4KgiiJE2RCy9iFfJ",
  "key27": "5os1WUWc2J6Pw6t92htVnb7uhCnw2uowNSrY2LMS98jjnKVhwMWr2YKLs3DM5vrQ5TS6eVXxSYJ13hqRZqYtbXPg",
  "key28": "N4ggQw8bq4mrnj2tGScwNefCiz4tbto1drSSqk7MyY3S275J6E1L48tZ7xugmScyHTjgwdhfecMtG9SWzHoSmqR",
  "key29": "36a9GMrjkcgnUyEAt3JriELPEK9ncSwZTECsMbuQAMjJuDB2r8bravXiRYsLCCbzAmz1ssEGFsC29rHpSAZ1DpcB",
  "key30": "3sNWP3pkp6s4APq91DJ413QshrDyrLyfDPL5FRZ6HqMiHokpri6E9hpuJwkUCWvEe1PGrpV57HWfeBFTmW7x9pvh",
  "key31": "2Hk1zeXghhvNexvyEKew8MDbfkCzAZehpz3v3cPTmhLqtGSsQe4YamFY7JXKMur3P3TaGB7tevYMmFXoSyRkswSf",
  "key32": "54MNrGevy4ugHH6KGtDQja2gFD8i77fqgB81Fd8dtd2ya8q7UmQVfqDMPS2ozSmmcRzrzE8sMBwGcCRjPCWDHHw7",
  "key33": "7FCFLy5JG8iLUr1fvqZQXf1sPF2KzCkmYn3pUUy2NLgqyAPUkLWJbkc7V5sGMpFzmdWoJREkGJHHcgeZ3Ng9XKb",
  "key34": "3unJnZeSgtYBv1TiSgFn822qT1niN3vaVnw5p599jhidf2kwiqeDYoGStjCE4Mq7ptjkm5HfA5yeDQU8JjgbNvsN"
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

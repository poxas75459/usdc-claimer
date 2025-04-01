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
    "2aQM5UrAUESTNdeJAmwmAYQp3wuPvxAtx7hdwPuB3raHC3utN6ipMBHn5wHyrQXnLFmPKgBtJwdWUj8qUspNiqdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57SLwiYdAQZEnomngeqPHDz6Nms82NpAvdugsSaV4gXzbkH7BNrcbSmz6hLmbjFAjSG91s13sRyi67JTJ1tPLG7D",
  "key1": "62ASZvVZxG2ZZ76TAnJDVUKtabG8YXqFbxvyBk3k5t8adPHkNgyCqWqf3Eop1VoV4AaAKx6aSfDsgAT6wbCjVGx1",
  "key2": "3xqkwwPg4oHFCn7vfWzZR9uATcvxZVoX8K6B9RYHxKeRmbGdw4JmxyhC6K2mmTR5sPTsE7hX6Ju311dcA77J779Q",
  "key3": "fY4uXuhp1kCqa8HRD3REHYYt5VKMbag3thAhyfym8SyhaRjEur9tYJs2KZ35sWCXLovb1kcyruAxQW11Jug7rah",
  "key4": "R83xHD72oQzZ97MmZBwX4xkf5etoyeorcSNUkfWX9totXB9Rx8rYPVtinXAu9nCf4RVLJG91gobtLyidhpoS9va",
  "key5": "4X3XqZuPaV4oYbPRv2YzvanhrMkCeQBKqin82Vx47wUdUgyWNULgQtKz5PbmFPsTVHnwwThbNnHYfTJsSxpgDwW9",
  "key6": "5NP8FxQztmuyBwzYNUUAzmRHAmpc5vtpEWQ15aprLmwtBPpBPywW5FfBtWextn5eqqHGRYFhkYM8BCFNrk4yLotX",
  "key7": "5i6na5S6ucjCJxuCz17Rxi4foYy7zpVjyPXkfuUM7KATX8w2yk5dbSRZsAp33LXBHCWj9axenNbC51qNU7cfLu2r",
  "key8": "3xiWJE81E5aMVmdNib83wrSJ4TGn5EzXsVbCVd8ifiZobCbe5rZmPdjqkLM6qPd3nt15YRHhhDJAFfKq3bALPGZS",
  "key9": "2mFFb9eiT57BfvR9vSViKDPShCbTjpT5d92BQetk9pw3zFcMoYHUsPhhcxn97v1y22SFmP6wq2wtC1BzWeUfMV6J",
  "key10": "wYrhDRZsmvsyRfHgDBYWKQ3z8GyGKoh1oeFnz3PCu91CvUmeq74F9v4FNgETFKRH4HCD9cWsfy8PeaTdiwbGZue",
  "key11": "53nAz46zPLNo6hdB1ogs3QdkHwrjLBt9CCg3YFz56yXJJH1b4NsHiDeYaP9fiymEUfDvDrTfW1YPt9hZf1Y2jYNT",
  "key12": "5Rx7Xrx4zteaLGeshWgabni5AgDhLWR2mBucTLi1GHtndVbDAA4yFWFME1Sq693McQuMpAYLSraNNu5CvFuFECUG",
  "key13": "B9bXbrVC1BNyp9VzEU1BZtSjpvK7GWV9YGBrCFHPW21QuoymXkMn6ndJPU9RhyHgL2um9gpRtbhNXuUqMQbMkQo",
  "key14": "5tuf74gu99MxSCSt7xHqPt6Dcc1dQfGnBfJqdTCLBVBA1DRiYbo2HN3Qfjx9gnpuKFSGgdGTXXb4UVY4RMyCZCQr",
  "key15": "51kim3dHyGwuX1vcFb95QGH9HFSYBBkkScQiXp68BVavSwcJhcn8e1tqiWYUWrDvktBcJnknUrXBYkPmfnntwqv2",
  "key16": "44wfWSSKLsoeGXQcmSUsfYC6xNrMhsAAwHDYW5Ee1fBQcNNjnHqLweuVLX9Q1THxExwj6zcnQB9conJarHq7ZDBW",
  "key17": "AAP2L7Vkj6Rr8y2SadgeMo19FKAx9Md9BD5RnRV2YpJcKo2vFEWyMEeWdyoJaAKMhm5FaKSkEHJwm4GDcyo1SPo",
  "key18": "5Rvhy2YxzZa3hUSKwUAzL5Pqji7szXfEJVAh51teAx8FWyYmKJXHVAdSjzR6pEjVeoF28NUTfaGNWqyB4gFSzuY9",
  "key19": "3oTiLK9b2vz3Uhdg93BPNoMRAy4zLBtPUKy9zBmzaJF7kfCsy5KV285Ckc8Xff6FoM4aarWQXvFWxL2kvQYhqnP4",
  "key20": "3rfU5LSXLX7D5FE28ph9zvycLXiiUaCfszZT6S7C3LNvKpUuuxuwxnjhowWw4XRTNcwmsn4LEgp3NMcBLafFKJEq",
  "key21": "4YDfeVxv6qvF6bvyZp7ZR1Jp1LBmH3vDYoZoFtwZh1qYcbSgcsQVxgqvXcJehnGozuNzFqC3J4iRGebysJjFy2cZ",
  "key22": "4zYBfdW3bv58M6pudBiXg3CJcRkA4583SqnAQWNGN1QW1cp7qs7B9FLM3ivqKN4mhZBAUeCixo8YDNJRWXMn1AqD",
  "key23": "3rQaJnjJ7F6zHYodXeeeFzooLjE7grUo3D36TRrg4ccQuM5JAPjq3E7a4KHevmQ5AfYnH6gZmf58G574N5Y9i6oh",
  "key24": "3YvCciPbb4xWW2je1shXw3YQvqZtE1V44kqe8d93ABs4DnzEStGSBaysp7c8HoDnVRnYkLGyeBfhxxSKJbwvkGFF",
  "key25": "3jz1g3qGyEQnHHBaJmv5xtBVHhJS7TwkCMytL8WgRZ11yEdPJjzeo24QTmMUHEnKjPE5JFVar2tXqsRoUHgLbWtH",
  "key26": "2HtHfEe5VZ646tHCNu2ukkGNDxrkcSfx8M5tpU7EdPBKbQxTH5k8WfgffZaXXe5Np3WjXNGRURkSSoJ8EuAsUgAo",
  "key27": "GWfEv69Po94icGMciqx65XhggTp8fx2Dvv3WUGJjoVdQsseR5NLEfe256xikVjHi7CyMMiL3unpjdSn89hSxJAS",
  "key28": "3sHrXL1qxsfM9QivRLzRDFPNDykvQmq9QBgUbutGwFdc3ynCpYNfjAsCes5ZmZgx6dH7NZR9Jz9LZhTcWTMh6mff",
  "key29": "4epCUDgMpVfVcF6nkboi8UznjvRrdTzDRFUGo1rqvzjRTaEhgYjFVbztCnaog1H6DSgQgaaBD3AvxEa9xH7CxPa1",
  "key30": "33MM946k13jHM2fcjqKW9P8T6bu1CT6zMeuD7WEmQ9iC43sc6x6cbV8MaLYqNeXg9RLb38G4VkkDtKF3BDwBKhPP",
  "key31": "52JyPNSB2Y6aNVVf3hFfHv4Rmey8X7rF3b2CACpbBT8WTR4GwwnHJRSKxdnmZVxnNbWPVzh1EfR1cgLu9inBJhjC",
  "key32": "hn3jKYpSTY7zawGQ7Wkji8AcRmPgBiQdU6E1bjhK879DuQ2oosoXd2cpNWBuBfn6jCUz6BDu43RCnPNB9pxfcJN",
  "key33": "3nepbyViij4PSVKPeKQjBjbAkesj7G2GoQJE4Lp7YFdUboDjLUjwxe31YYQ79ad38p36mvcWVPvZD5zbEpkusEGr",
  "key34": "3FMq2uGSsqvrcfRnarAdF7RVasnAo6GBuJuPnzGngXqnmsC68D6yMAwEnQX6Q8w1LdwumZ3VrU6rQNn2dcCJtjXV",
  "key35": "4FJ5wtwWnsBQRDnw7eHnysjiwmJfiVjfY3dCwxwYe1DjMxLcmfyjPjDVdqah9xcCn3Egm2yHxxk4VpQMaJ9tNErM"
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

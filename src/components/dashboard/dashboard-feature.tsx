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
    "5LPCjAcTmRVA3B8mQNjVLyg3KBNJo8bdcu7rMHMrAz19zhQDCFK39Gp2KRLdqutxCUQfV2dKHsFc3TrtxEH9Jkpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sj9zPW54CqkhC5qdw5DFBtrHyp4YX6YwtjegPPpwbXfn2A67am1YnYSowYkvUZ52NhHsF3rKBmHeK3SxeZ17RnA",
  "key1": "5uMVyqRBe2vygjmK1tX849DcZ4WuHUUz6MUWpn1bJVpdRXsxrvxYGdmTcf1tSaG5qu2WzzEZGXYfnQM4AHEzWMof",
  "key2": "5NGRZb9yi48StPWCeMHq45gszEK1M9qvjcPVcuZhcBucmDaoSKoX5fACmF3nx7XFBz49YTRbdGi1N5GsH3NaTheP",
  "key3": "4jE44swXCLvMZtBSKV8Qwe2zZkRenP9srEPba9rA2S7pWxX94Zsez3LzPYo11SE11J8pxTauDspFjiGBNMX1SJUa",
  "key4": "4vQB9gvFYokRmT4Yh5yYgkahPHACd6CFyxDxrxunzsStBdbYCwgssDz1bypJ4zNwNWrhHckPHZq4Dsoaq4PUxLfo",
  "key5": "3qwM67HHVzs1iG9n58UgGEimF1XwEdNZSCQ4KoRh8AijYrwGqZzhmyUhMWaXE5F9bjN9xj4ESSXQeUTa65KBLU5b",
  "key6": "4VdsZ2PwWC1W1fWnSABvmuLF7gziwGuUUpZhf1Uo2X6swHCZRKUzyBo9aFc2owmLKXnW87zuYcxGNeL4uTF6Uawd",
  "key7": "4VxS9PvRPpXFq23T79rYDj4Tn6RpBzduYLhzFFbk4qMR1H62pbfePcFVnk7Ld7mt3QiNuVYee183j5ZEWD7AXxpj",
  "key8": "2nA1jKxbbCsdRsvNHq3iFHJuPWWpyZ84FrSaTaSgVdpzQ9QB1TuMDVXnz7H4pcraXpzbypWDLgBtFTiz7Hs5b9NL",
  "key9": "2ngW89Yt3sMguoiWXm5RhXqh2T96Fghv38SyuAV9YywMDcmu66qnRMgc2Nnd8VTNV35vWnYEhiErLf6tRMM67ztX",
  "key10": "5sb2bcaEeeKxyrtzSipE68xzXqcrSNi771JgtY4Bb5BL8Zs2YXxrRQ9Ax9UCSwvukVkKnemYUhwbgiRzvv5c4tYH",
  "key11": "2LukQFZsPxzLAM41N4RwSZsrhprDihMyVNmAWDvCoaA8iX9z7xP7AnKa4zwuqPhuuCobSSrs9wumGbDrmgV2HEDb",
  "key12": "2Far5wAM78LkUYf18exTyVW2qF3qGyrW4QAEjCP9EGhKG94VpUwFbr4SgEHvoAB2vwdHW15adxTBh1F61wogm6xz",
  "key13": "4Pwuac3dr6mWV7pmnCGXzchSFPf7xZBtVn4R2NQtM9Qiph2YK2BubB6u4MPuAyDBRUd834jA3xVjSNUbBDq5S8E6",
  "key14": "42KEnHaKyCBgSiy9KNmFaeiQbAMx58A8hQBPYyESbRuvw5QrsAy1P4w4pZuKVw927dA5nwdrmt4He676mb5acQUx",
  "key15": "uJFDe1Pjd1uRBbitubGqZMKXx2gzFN8NzyFSNjmELUWvJ1t85uyEfwyQAeT8Nok3VQVZGUGESYdEuFeR4xFcZuD",
  "key16": "3saBYv6aAariUDRs94aK7u41voHWLYUF1kpe5gebGREQ2cuHQ5zYy9o2ExG4LFBikMcchT31S2eter1Qm6KZz54P",
  "key17": "89opqHyqm23cGP1uhByKxECnN5vk92Sjkcg5V4dyCd3Q5vBociaM26DjH4dZUzMMEjDpFaiNW6AXnWNbUM4G1JB",
  "key18": "5hsMPfRVY6tu9SVTspHFXMrfbzCjkkhoAxhU8im1AjtAMNosbRdoQXkDnksbHqNAZVUZinDPfmCQnYNEuwhn57HK",
  "key19": "3rNZmKGaz2DE1ZWwgLpwjkr2bD2V8YNoUCKXD17uC11WgRXyyADA2gGWZ3pQfQAULrM8eopaFtawjKaDkWsZMUbk",
  "key20": "25DFVXqJrmcuiAN9EJTnjY4w5VWmJMQCzAmhMLsKYmxRmybFoQkkH9buFJQDtnwc5sxSQA7gMafViA4AeZ4dudoP",
  "key21": "bynfsTcKRLBo89zmKA9Zpz58rUr7JxbvBcbN39G3iDZFxHp7cWQEf4PVYitB2xsN4pDup1PhxvCDB3SHwcos9Qf",
  "key22": "5YwgZzYcbT567XmyzzQje7dtL9cU2CcmEUoVQFd2eGEjsr2YZ7mTAPSontH9osDEDKXXVvbksQGk52E3nW8iqrYy",
  "key23": "5HGDAWmwAwmK7vKbDWNDQgsZdmAoB77iJg74GbdrfzdmYV2FhMY3sLE9oPg1eSUtzdKtsp48Quf3Ttanm6kDJvBW",
  "key24": "5dyHZ3sG4zzAMC6gbqWT1aFVYBsmCDDo13u9Tf6G1LapMXjVHpGddMcofcptpCShgQGbFkaavoDBNxrR8CL1JAq3",
  "key25": "5Y7bbrQYmxxxL9CCjkNGcZ3qVGbUtF6HUhnKr162DaQeioqnUXh3zK2MctjCZUDEkwZBj3pVzCT2oUxsUWSJCi7P",
  "key26": "4hiSqMiouWQ6EenEzrKQTd92WhX5S7eTo7xJQMJ4VeDSdmadAXKpF4qL9Wwub6LvNqgraMgbZzY2odtYynzeRHgW",
  "key27": "41wMiyVskxtJqn8iYgn3eMXuLbFDtN6DKAKoqePpxDtN2WiVs8opYmFHfHPibyQ7Wt9cWAfj2NqB1SmTnF9hvRaS",
  "key28": "3s3v7aHMnh4RrudGuDR3eQXbQLuujb79EiJrF9NmZKnaxfzCWxXxKJZbLXzcoHNLoWNYaRDgo68ux9PT3euZcctK",
  "key29": "3whJGtzjPYjcFNPzbEYNAgNFdSzDuJHTLCTgKXGe7smN2wXCygiJYykxk5tqEHSVWsD4qmoMnvQzBq3qXho8kha6",
  "key30": "48k8q8TPY3pEs8gnWxsFu18qGuKXBMTqqzydwMUdEB4g9ibd9asnb1nrqgdtMArZLGhZxRrrEZW7qv79CnKLX7f7",
  "key31": "6QH2sxGu3vZRfp4ComZpWp1xsdt8h2fhM97qJnmeXEmQgXNmXsqh65nHGYkivyckXiBZc6sMeQkHbM3dE3Jurx5",
  "key32": "hvuNuUG5dUuvafhfwhg7emJGJLmBie9gjek6U21L6VhDXPUxiZB1uz8MZ6cmC4hqBbeUHqtBxssV9A8w6ubeTgX",
  "key33": "2xkRJALraJn27vj5gG7WP8ihQ35M4UD7SxyRPYYW5Tf1LtN4vR5gyHjJn4PSYKcNhCGEZvc9oqihzECpYuGBdQM3",
  "key34": "jt5M3iDF8NN4A1i85oLA2kfL4esu9ZkXHhidv1dRwbP6MCKd7ymkLjeTx26NhNKPzxZK4rDc4BZcei7hGn86Lfa",
  "key35": "e2N9i2Un2i34cqJKfLmsiuTjxbeBhVJu75YE5tDfLaDucq47yHSqNMnzPw5jhwDepNhS6trDVQQLGG3E1Kr4KaJ",
  "key36": "4Hj4prrDQP3bv2yGbRMkKV64LzTwTQej8bGZoRpgbkmkMpan4qD6DvpNjAZjTShQHGpvcfr6Yg3X83fyp3PZwP91",
  "key37": "4iQZNEZ5XBzHqTD7k97iwea9gbA57QMYD4UmcmDvHVyExngGGaMZdvNjSHxLCkB1W8ykmPWYqyytyhw4TusKbgwJ",
  "key38": "2rV5j3yB12ZgPppMh4zYsoTFDvtXCBCth3P4NxdLkYBde2TGkZMNqATpEDjXSVmitDcm9Dy9nnUzFcQULn6iJtTj",
  "key39": "5iXdAy5BdT4mBwBi1gAawWuPmyiNQNypkJYs8TdgtTtJBUxeHg8mbfstcTLyB3FMkvBZP3adTMmgWtbto5ATodYN",
  "key40": "3QGvpScw1GvRKMhP2kfGtAjXQps1RLUWcTvDj6fKwPj8FrU2QdgRXvewGbVZzyaLpFxwtkeo29zB4A5YuiknZT3m",
  "key41": "pGFhB327naPojP6MYc3rgkXpooT1KmRr18NqT4BLBrVDGqHm1rimbvz4xS6MH7YYGgDx2DMBDstnrTuPMGt7EBo",
  "key42": "XNXwzvsXfwwdvAFYLDr2xbmUbJ4UUvRqcoZ987EBTVwybxL2iabL4ujBzNw74guBYDac3cDNr7WLJKkWy7i3NrJ",
  "key43": "3FpcohfEDnLaeEApnAg5srUM8VQwtjtTui9WyamucM3oudAZgkYYimvi7AeURbaUZ3cx3rqE8oGmmezKXZt6JfGK"
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

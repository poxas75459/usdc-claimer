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
    "3b2FsiiwtSdR3PT79zgVECD6CXvK3ndYHcUKoZkjjxgbEc7BJf32dsqj8udY1UoPiCGbVCniKXHraQ6nDvnnFqY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLcZPHpTpR9FeraofheFcHdAqBxaHTe9Lnoh89tp1tgK4xvWNGxxmXFAJyMntJXKJpoMz4v7m2iVixUSoNeFu9P",
  "key1": "3wKmF3VARHjLVzaytLS9dzUFfc2zjjJrwKfQbU2WdL55hwYWcLBN9h33bMfdxuZDPMazEFB77GRMRAVMA4xuXTEd",
  "key2": "3Dggfj1mdSSAF4uTLsgSKZuEzeD2ySesTFUUnqgmxHf72ujCkxemG4MtC6bUKbHaJSX4gkWrgCjrYhksmgwrbAEq",
  "key3": "271ToYSVqyN8rwMjy9fxqmWBtW2DyhMY495bwQzANmGge3mTQ24Xu9sn4DFjZGufJ34EDr51K3rdYPsK4kvJVhqy",
  "key4": "UtPSHMs3q8VqdWpZ7AnThvfcw3UzuPSBNTk5dRb814FCtT4UHfoaD6fsw4G26jYnndbEBceEuh7eW8qrKDK3FFp",
  "key5": "5dYvwexg8ezPwCPtvPsHpEZgyE8wiW2FSEySgf32bVYU2VaNrSggq72npjsXvBLW3mRpWE65RvVR3c1MwWfeypyW",
  "key6": "3ECxqWFHZxAgvs3YGXE8JKfZMmy7Qw2NJaVQppXHgjKHLJQeC5RCZRqnLZKCMB8Vn2dUhoVZZ3t7eeyyBMkxDLvv",
  "key7": "ciKR4J6j3RABur8ws9bjNkkhWVFLvopUVipdFTGup3jyigHHyV6dadFznbTUkvKcnRiZe88JvDWuyBSNevLSvPF",
  "key8": "3LB4AbATz2qCQUzVDQfJoGePPFpgxb8ujacxjBaV1gUDCz5Rg1wKFaUgKjFWDkUEcrEw3pUyPqpR4F7ZXozkwjdm",
  "key9": "3joj816tXR1ySNp43JsvVYqmYxKBgsmDV1YPptypAYR2ju9Bah2cVFsFShnKi3SgKKXAQ5VE4LqUgbpDMByg1wHZ",
  "key10": "51LKETvEZpZsqLGFPv2g4jovH65cqBsRSdzVUbbUUj9ibkHNVHW4natwyCSkiZMa7hMtGFvZPUnboakxPr73TeaL",
  "key11": "42UgPJAXuQLDPsaxUmKeq5A45Ut8m5p8Sht918mrXbK7tGp8A6W4KmPXyEDkHgkjY8Tm5cqdSaQsQ9DmM7sBA2xR",
  "key12": "4WRoHdnAhV5FSqzHmhZ6aqdouGA4voELVx3LJpKAD3uDCvFYKEvgmWx64jGN5c16jQXgPah8ZKfheR7S18jUkabU",
  "key13": "5ic8hd2jscBHkqrPqtTARUFGcdGZSnTDdi1vesc8FnWa3reF347Mhhroo8etHetsDKso5wx2NzgRobbnu32ivPk2",
  "key14": "2xFroTpPfj5aMbJnRhEotSf7nTLnhtPZ3jVCvKQvDLbtEYH57v8SgoxMYh6hnrddPaXKDUJfumLGXMLoRuwaP2Xm",
  "key15": "5SS28fKtdr5BfJpEES6Bn5S5ZpMKezV1PM9VWGWFVToQwwAdDutWYyRbfCyK9mPdaU2jdWAqhALAFYPpNaYQqa7r",
  "key16": "5zhaCbqU6U5jbpQYT83QAL2pVUu2DZfSgQCbfe44GWqNw9CVT2itgGCtJLQ97Mvf5PaisizLfx2zgSmppGVxdete",
  "key17": "8GEBzhSQR3wk5Pf4XML53FaE7TmCTNvx47mp3JbDhM8n7ue6JZrix3RhmB5B4rPjocat2ENErWGedAK4c4TnZ7L",
  "key18": "3MmMoHmUqmBrCwP652r8Bf9PNzKznzteN3QkqZXY28GRy4aCe7puUnBghWJbvcPUbudAd9638sW45ueBFBNrp1hB",
  "key19": "gCBC8EPpmyt8bZnRcyAt55PLZnNt1yf2GPhJ5Acf1oP9ETan1o9WfsSYBwpbAbg2DNF1QEWSPR3vrkR4qoXjvuJ",
  "key20": "2Lh5ziuX8HmC7epjprBg32pyQKWj6FYYrcu39NtuT1D1p6FDsS1UZre8V6XJgEMy7p5kVKKB7P3VkAMDnz9jSCX4",
  "key21": "Nszmi31oPH6L1iy7Cx33N5N68s1bse3PFs262rszQgaF2Wp2UdKvgkKvzFogCA2fSqvTAJjpzgTT1jePczpDTX4",
  "key22": "5BF2TRf8VctqsWGq3fwYNBZY9TsrgXuJhd3nMC1xmEF6NwsiyZtRHMPtzNu6gGAWXLcAF2By1mc2dL8huk512L2e",
  "key23": "9mvKZ4a8TJ8aEDeboxXPQjTk5FfHqAo7E4dRFXb1sdtNGYmmG4ABhTXDor8hKguMSHEuD5KNYtrV6vBhjroRrUn",
  "key24": "C7JwSLpL7WL8QAL1792Y18H11rD7ybTtnbjcMgZtTpTDPjfckW4s5Fk8wzAbfCQhyvKZw5Ck32J5nHXUfCp6FZx",
  "key25": "3y12qmNWzqXYY1bAcTZHk6dfEYP9LyEvTPkQF3LkH5mHKVRbUJKEGk8bTut6oFUHPS4jsAsmk5XuvN3BStzCo9tH",
  "key26": "61wFQSguKSDkx4SC3iA5Ta8K3ZvjtNiD4L5enPE8uorTqgB26Fm6PcrH9k3NFxP8QVvg9Auqat7CStFcdzGePR78",
  "key27": "36ezLKEWttc5hAFAsGCPA5KP4QiYaiagq2efsi5dunz4N1Y5PJSVHuXsuNUgz7AtFL9HbRRXhFFhMGmJHVBUiyM7",
  "key28": "46auv8LRXxSJ9UNfrxMRuK8xrEMFbgLEE8Z2Ai7Kj7okwGEeP788uEQ9xw5N5Md7dGiR7xkFBMFfRirukHXcotkP",
  "key29": "637FAqD8EidYN97CLfHXVMYx9BjRu4X7WbwD5c6MJMa4q9paQby5KRLevMwUC4ZS9qMgyvd9XZMjmbUfVZR8hCYG",
  "key30": "JiP4fpJybEjgnhxk885MPTk9c2QNTmr9xEMPtkMM6RB3GQ9mXSModexXgGd5JVvsMiWrZiqbbJjG5WFfqwbZwqd",
  "key31": "nzbjMHQn7zxJQ5FtRXvsn3iQddMVzVgePJaqHiVGwqcq7DvXcCr8koBa3dZLdnG7kzpLLbyHCFu9owWKwVCSkMP",
  "key32": "34Rd6AqT5cZdBZHXkAHYsJTFB8jcYFqfbHTiMdA3VxfG8bK3MCNqKth4yCpc2WZfaAMcFzgLBZTuxKZYahrASTtt",
  "key33": "3gTWeN5bn8Z6Bj9xMZ9cweRBYgZvg5cNxnxyF5UkCrmJKTipkYpJt7x9dEAfU5CpapngCHYnHEBVUfgErHgsitNi",
  "key34": "5hqbq3pdF39Syp8EcyXDgyzDkmFuxfdVigZhNq7D5PxNq1jmAXuVNrmq6EJSfjvttc1mUy4KXB9YrfCFN9KVH171",
  "key35": "3jmHtrRhYudoZVZ3W6BNws6AxdhvdKSPZdgsw3YoFxESZRXctdP6WXqBMZpJNzKHSfnf5RtFu4xSnbuX3upJzWR7",
  "key36": "4QSgioYt2hB4iicF2SLBQcRxGTEAq6nUsDe4e8KaY1FQGkc3fvAUJsAC4biU2HP5ev59HkyQW1F9Evw8r68LmkuH",
  "key37": "61MfvG1QAAubvicykRoqiRcixmSskufoSBFFHdjomvi2hkndm6ub2Q3BtZJ7zXUJGddW1zDMqCxhX1H6sEwH8yG6",
  "key38": "3kvA8CUBGRGn87B5HMc9SWouKToDGtpVwSDLZp6xFELENgk4XN9yvGYauZ6JvnSMJSUrg9T5XTHUwFasvJ5nkzzo",
  "key39": "2SFm6LWbLR9S8fH8tAXnoF9PEDYYx6nqYhmCW8pNdu1AH6zP8jGzaYMBmBkxE7kXQyfUysZfvU85nc5sKbiJSXp6",
  "key40": "8YRPiafXz2AW8Hu1nyMAEcf4DkNdTRzxottgpXiHkxZq3bUZWpMxLfXLpvUmn8Avf8rNCvVJDr1gtGyDg7c1j82",
  "key41": "2UoqqrSy3efjFRtjC6w78Nw1PB1C6ntJ5VSuW2wurDS89gYBGTMdNMeyroCgbZnfbecKSTBqP2srmxQCgk4duuxq",
  "key42": "3qx9MJsMRg7LLmXySsam7bkMn6dR72P52efq7oUCT2zd2B6mwUp8ELriEwuaqWqvZNe9eNUQYAxCHzDSJC9eDmYd",
  "key43": "3AL99f3LxoMpiEPLTdsX1WGH7KTJCgGggEQdN6uL15WcddfiQtTZzymkjGrq2iwvUdBN3VVdrAWW64YMD4FpVDfc",
  "key44": "3Grde16zpPJ6b6PS122QAEUVVEau5DUHs3XtiYeGbwRHeNBva39j4iZCYFYA3sjpSs2WKYmW4Ngv277vkaKvAao",
  "key45": "V8sxcCZY7yAjcrAyfwhYg3dp2Xb2Nn8aPjnSexERM8Ufrm5Gd3YPZNZchsxwcrG8oeFEkeY1ZWgcnZLaQphKxHC",
  "key46": "GMFVZSvcUAMB4FanCqAQPj2B7T8pA79pJoedbkXyvjXAFGYeuSL3JDv8wJNGk1MUqStZJ6VsMQhF5bNrM5S7r7K",
  "key47": "3gxxG1PwYhNc1nCPn8oS9rXUvWZBc3zzFyDCrUmENYQigAtwwLkVWT76HJJ3u5ymgtrXA11yFrFZPVXCsd8EwXGw"
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

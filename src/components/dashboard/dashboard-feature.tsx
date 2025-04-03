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
    "41w1GStgeieweeY1RufyPjLGcDHt5nbP1yQAz3NXBdGgmHLV9x36niVYQsnMGkPbVoVqG1Ks7LAu6HXBAtpQzYT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLhooHRKKoo1p7g7sw7NBHuwSBamR9goDtptHMNZAY1mBm4nWhvodguWnzFMYxdm6zac6VhH3fwR1roE7HLct9Q",
  "key1": "eerz4qHL8SBYs5azhG9NPbcSj4FY9hJwaYbveGQmEXgmixn5pt9qPXnKF6vzr4C1PBJe8W6CFNzkjG1qgrbhkiZ",
  "key2": "54k7b5D9VjCqAvFKJRi1BYQBJzLAn1N5xDR6JLki35eiTU31gWt1zaFvU3nkak9WrexeQn3r3p9Pm4KCgA5UHTgu",
  "key3": "4iLfPy5sd6ww97TMEMEb3Us84sCo3jn7gs2LTqALNo1VhcQF93gf2Lq2prfAXcG82fEgg3Z5ReKuFCuUUuE18sg8",
  "key4": "2rAbRuuhh4M8uK4SeeeQckAwd1SBriv5NsW5W4zXKXsWAtuqg5Aq7B6sJYN2QsWQgebgZ1phDhsoXcbJDQ1sG4Ld",
  "key5": "4CH1CLPeZtZ3bJ3VmybnUPmi7rvbXNxbxVNf2YHzA11iGKfEdFwA5ESgnLPu6vwyYUJUkuDY4ATaoVixJsQnVK3i",
  "key6": "53CSZDbD8jib9Mua82mwa6XCBr4iqHm56NMKgEbJTM2zpUEMzWCaVcUbYqAdW6dfwvNMxtTFneYVc5SYzBdaPdaF",
  "key7": "49waefqFFzbigw99cXxrcNNZ1V4E7mQ1hXC7qnHy71YJHopgKRuqT18RhgUw6eqGfF5szovaTkaZ6BEfEbVRsV8v",
  "key8": "2Wi16kbkc9DD9TTi3o3ocxXsZVbhx5vDrn34uJLFSSwKUweW4rhswehagWwvZXHaA9e4s5FRoejb7PoJ26W8rr1U",
  "key9": "5fEe3y5MxErZ95qDtWLsnkpePSpS2MgHsvrLsAPk7vVVQjaq3wGxiCcQwrR1bUrvYqyxQAD2Q4uCZownJRfkMrik",
  "key10": "4yagqGV16nKfFteVHCSXGAWT9SAPfR1GCKHQhb5EaCYUgDySUrQ8JV4GCSNWE6DZ8PdGVCokxMhqfsKJnmHe3XBj",
  "key11": "4WSuHTbNipc817cNiKrjAse5vMru627TQCDa1WFUJELXHmrAj8AUAKu4xkcmU9PgAo4E1oeoQdn67Pn24apkxNvZ",
  "key12": "5DvW48Bd63T5AKYwXER1Gi22YrPs8REdePiEqxyvLVqpZuPs5L5voi3e5TiMeEoJUdm6UtW9L1u9GAk5iiczbVez",
  "key13": "3gJoDtLQJUutucozTwDvjD3juKuAWzLwZszZCkxyhQmRcrWv6G5iE1ZTDM1S6CHTA5rpjjRvoGYT3rkQvvcvdcQj",
  "key14": "42sc6smmNngcZK6qWzEg9Pd6RQGH8nWSoSr1wwxSWNJWFLvZXNQ1ARFSvcLw44o5ho9DEQbkwHqnuZb8tffFSApg",
  "key15": "23MQSQCma2os9BJjVfeR4C9YsjGawg7o3zauMLUxDAbMj3rGaXXyVqUox3aaeBS9kBtyMTtY6SE2sBdLE4nTASvc",
  "key16": "5qXP6xs8n2o6FQZDTUeRH8pnV4ivcz5czR5cHPauPvzWp5CXdNZvRGaHpc1UYV5Tvup5GbrgB1PCE7PVg3NNZdB7",
  "key17": "45N1D7UYhCZY5ZZ6d3csBaveKrgW31Ly5rjvswATyzEKoSuVaKabfJ3SLrN7rDNcFYWCkxYP5s5WN54PwqZir2eZ",
  "key18": "2bLeSdCnKyXcT3GojxnwuwjxJCSzShiFPxoiWfP2xXRgv4Q5L5VQhuhVgCSzX4yzAR5EiUwioZTZorDPHnJ9Y2Xg",
  "key19": "2cCMNSw11vezSQ8NiGq2BjDidKUNBJ1kbdUtJ8veBfNQDUyyEJDLQ4E9z1mxUbFcTtGhqqkTt4y3gCyQBVAwLMyU",
  "key20": "4hxkcs6cBbmR6qetD317XDcHYAefK3cBwmSjMgVQEtipk7Mevg3dCCBAMLtQAPQ7EwSxH9QJYk5EpRN6jvNbpd7U",
  "key21": "3P3b2XMUbXBNJF4QKmqCbgFBBoSBjHFnzgnVWGucwhzJs4jdLCuRdJNf1hTETEyWmJJ1YgosxpYfweTAtMThNvcw",
  "key22": "5e83jzKVmNZmn1QQ6QoM58WPmNaQnFv7xKbQ6Rw9dD8XCs2KUrLJPGruGBsbKuXuc6assNF3xTsq6Gf5WyraeDeT",
  "key23": "3Jt447hbtDzekGVqzZvH4ubhjkLJggBTG4kXsq5XbciYVs8XjBhb9Ux5CWEGQKgUmNtS57Wjoehgd4zc1HVPqfNx",
  "key24": "DsBDXTE1aiHuGV16tQsLPWKUhy7KYTrM93ZkPfUcGVw2dDNMaru5vvukAGWZA8gDKNDZPFheiZXTKLimzt5x3WY",
  "key25": "vWyjuMVnHq1wktQJ5PyZDd9ZKrFsrDuzY11zbCUWUjDXzTAtQazwxWbKR8THPA6s7yKZWw36kvEJcN7zj9PRrzk",
  "key26": "2VgwfKT1CPFhMy4bUPpJuyazpUVWBBEGoGRAEN8ZArhiPVyVUMohTJWR5HyKSo5rum7JcCyYmVhjreMt1iQAs2c9",
  "key27": "4zGmt6SQbmL1gsiZGxfQT1oZNqBbptKMACeWaPRwZrzpwt3j8UooVd1U8b7se69RemyXY2E7jQ73Rh23EKWyw3Ve",
  "key28": "45W2aHwpd6EPnENczobFg1Fhn28fxyibG5cw1y24JeDayTbufxaLL1ab3in6QfN2smd15Yi7aCRrM8xLRg9hGaH5",
  "key29": "eNtcsi8UnppJQLeEK3dABqmNR6hqak14W3GufmijUvcaV3GEhFsSZQKu7aEXBcnAsmmP3GbXb4FYFbz3qNSpVBj",
  "key30": "3vSEjpBdGtzueHfwDNq6iCw71raNTGh6jB6CzT5MXXJ3vvFKkwmsKmGV9RR9mk1V8KETyyUr75ytfpLQW32AQfne",
  "key31": "3avkT3WdVFqogTgPxtGVbCmNt6RYJcDDK4fEVShXnHpbXyy2Vxm2GqwuWMyK97jNgG2SrEMxhLEF81PLCVNpN4RP",
  "key32": "3b1Vqo43bXkP7bLEjzy4CqjzayQXACCSjRjLF4YqnSmumzxqzb7b943ZocCNW4coX3b3m6BiDdgceKakjujM3t9Q",
  "key33": "4YHvjiVbLLVbMo9yJ7uNNJivBH2DD57LBXuysJQEppkFmKTdTNavfT7GygZTfTnabSKNWyJFA2FFmEGdCaXsKxpL",
  "key34": "4h6UambfAmf5gLKP9sRLet7JJpcYEKarn2NwWBUJbigxWzv7bcZnv1dMnVepE92nP4eeTUgah1txRHrEB6seD9x"
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

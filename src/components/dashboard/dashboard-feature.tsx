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
    "3sPfysrRHfzg2Aq97BnuGmNEGKbPFikHaGYXXtUsio8jfSar6SGmtZQqZyNw9sjAMdQdM1JjhwnvsUw9V9snmkWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZXfbRCtBYts6jo5sPiEKYFVVi1yskWeyUueX2hXfFmu3FDV3Rq2aJNS32ZqxbhcvtnC8HFfmVUZvscSBt6fJNY",
  "key1": "46oCzshEiJiavJ7MrQafSa8pb81ozzh1Eea4df3CwuMNAxkHtxQVbJnNVLxewvWinUGSXVZEbq4yZP9fjRuDwLpG",
  "key2": "244gj2kvbQUCtP7LQivFuJjoKTDP9bKocwFZxRBqUNrcHaM2jmgHKQ9rwiFKuNCi2MJM7mpa4hVhE34V9Se5xTUp",
  "key3": "5oU15Zrkw2FGDqk4tSReQAPcWKcppZgsr98vNBF15cxXfrsjwLei6meDA4USTZTP3mdKxqshgn9GVRpwGKryNSsf",
  "key4": "4YafXbnfnBR4r9DPnrZyHHDc2UH3kGjNJx2vP2PyGwLufCP9NHyQ8octyhHbuWsBixUyjQNhrTgzpmXiu9Z81wPB",
  "key5": "JqRCKc8thR3survqgwcupvYAXk5ENe63hg3qSk5qSWQqWXuQw7Kr2EADuf7GEYN7R815Tm9i42MAgW55Qe2cxBk",
  "key6": "3mcihpmcB19WchU238whwygvCGp1Ef3Thf1F2bGrojmr7wvrT3JzatW55VKHkhFur3Ec3noyAuVdMLHUZBo9PRjD",
  "key7": "2vkAWkd9KVXiD7jcMxTHsPeckWpSnPDxPgtSMgpmPxnr8pjLaPBRVTLoGu5kMS1TARgSVi6EddWvoiPKvqobSj5H",
  "key8": "EPjRDMh2JHvkcYjv4PjzMMxwRt7PfhZ5nvxPpLzuuakQd6sE2HgY6VhS8GFqhbZy81f8U6drj4jUTcWzAih8s6H",
  "key9": "7E4koa2VpmQbsBnMQBpUmUtwJqLS6uJq5TSePeRnJ5Y976PonmGyAV58yVUk7HuGcMY599PCxVMtz6gMdWTwXuS",
  "key10": "3sMafLh2atXfziNLK7UspKGr6ECeehq9bwYQCJfAiDSwtZkSoFCr8Rh9D37r5gYpVWaSneHgArZuPgfKLPki6Vsb",
  "key11": "3C31S4b7H7PyfXicQGqcACJvWsxBYcpDUVYzCwVuzbV55TNMR9AjHZW7QthXsAjqzBmhNmmYgbQ1Ba4b6t86CkAL",
  "key12": "2G1n9zRH6WHKt5t9VbDA1DHgMXZpTuYhwzw8XY8bJDgy2cbqe4wJW8Vf3Jg7THCR2bDSu5ttrPSgaJfU2bTHQN2t",
  "key13": "2Zj5p8QQfKnSBEhuCcLkMzywjJhd2fTzNUUKqv47thH5WkGDEHfshU8Zv1dFLTXGGYWVhdo1sr8QihtUNBbzZ5nz",
  "key14": "4q9GtqcKoo4b8ZfV48UZGH8WDJGpkSiTYtaGkMCzhhK99vdf6XLHGEJisWBM7AGoEbpyZSqnjrQCLT5H28an49bo",
  "key15": "2ccxQA4kpVrLL8yx8GzHDbryXfE9oqMs679x93Pu9ib17Qm5j1XEtHMKioBM4vKrnzdghjhksZuYALpCZ5DqfRcN",
  "key16": "3sVRozQiDgNGNKgryKy1MTju26CygbAWj3tSjnJSnNaPVyHL7ApHswa5sWcuPbgCLLgEWrrU9texc3GPzMtbhNKr",
  "key17": "3Rv4AGcAkYephukgTqeMz6iXQvBBTEVaC3RqPjdL8uyPT6SCDrpW3q3JjtqzGubhanjXGNPaAnE9PoSWcQdfXj9L",
  "key18": "4zPfMLP4cUunDpmZd9EL4cbGrYGyBzcUpMp4ksKbPgYDvY5joQ5xRWgMiWTgY6FqVbbDaq5MDj3G56AAngqYXjYa",
  "key19": "2wXfdTPpEd6uaeVTZ6nHTndAqpaievsaZD3dnnHKSwNy3Pgnnp2z3QNwfiT8tJBXXv2qhzo6uYZZ1LtckeZkmyWr",
  "key20": "2jV6ZsvGLdEXhc2uNxY19vttXJeXwJGuGXDH7QSS1XsdhvByF9UuMeeHp84MqaLVFiHUAWuwMXYARs5SyosTYTSN",
  "key21": "61uNRq8ew4vEh8xck9xnZC4ac5qZ4EqoCGh42Yrgwm3jYPYxZm62iMW2mg1LmxNn18oRzDbWX5rhdhHi7kiYvRhB",
  "key22": "nLRNqqwnTb1hST4y8UDDx2GyZvGarqrYHTMEc5KM6UjhhJVqGTZgT36TbaDBcRcAN3ZY2LRyFzxTwwffNsSzsmc",
  "key23": "5krNep47kF87PoGUBGq8uVHg29t5uCQyteS3njGSbHVJ64jHD58C2HLsEgE4imY9gERAewKKPH4fgu46qNz8isNw",
  "key24": "23zK2ht3TU4e5ADAkbHLRqrsMjFrvDKDgPFycNTwNn7bTCQUprTU3Y7MmpDeWFCKVcVEyeRTkp9sHngk1WYN8WMP",
  "key25": "FwY1B4imxrMJzc8m3hqExQjFsHyr64mtgwd9zVg6xYcuwSS4keZHqFN53zVJjWyDqRkzw9SkD2zRND5637ZKjpc"
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

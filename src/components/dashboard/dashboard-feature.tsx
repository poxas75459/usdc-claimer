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
    "4TUadyhUScYkyqLwi6yPEk3zQQFUtssrcrGZmgQLGihwaTKPX68u8Gbgzc61vqoBk5JHQeEU46vRWbzsWK4bR8P9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFg4tNSMTb9UuHMfRUs1aDrKus637R8Bkt4Xtm4JJL2bL9vEbkjKA1pWXuLnVRroEGyD6FXoyUVmppQwSFDECAF",
  "key1": "D7WUHNs2Ch8D6ounyw8CADePP5SMnV6bPKuV7yBKooVm2XkjxaLBewmkhambaQJqjaeTU6nyNGRVjBwCME95GSt",
  "key2": "4ijtc97dDqnUyp9yK2g3CWUQzPvT8QVwEFRS8GqudXNLgvYXiuVgte34Zr2NGuiqnD2QmxsdrK3hLC363kp3MYv1",
  "key3": "sGGoqVPmxa6cPRBKhHM9jqZMMvzFp37vhCshqynHC4jBxgqGZdYUpQJ2XfUpnjoFprdsMNppAYuSCQN69h6FbdF",
  "key4": "4Hw2ctD5Rza6W87T6Zp8SzDBVpdXNe2SAJrKmJK8jV9Vh2zWq7yxDqRCBB2Nz1j8UuptbrX13qw8bEXNnbfi7WkN",
  "key5": "3CgRU4vbwBuRN2GMmtsm3QhRL8tynmyzuQmQZQcpJGs5TCvxzteFmANWnwbAv68uwkWtUXNr3WwoKX59SChDX8GT",
  "key6": "3zhssvJaRm7EdGUJzsQ3PjgtyuCr1r3coU7xd1tyFyvtuMg7JF4PyuZ5an7SA2R5cLv1gXNPBrXbJ8PBZAXjCfMs",
  "key7": "3oHaG9c2zdHiD1NnR47UbmwD9zHdRJe4UEU1QsBQQMdqvrNLA283JUYWPQEiTMYswPSU6MsLgTUVQqpTudc2Q1sh",
  "key8": "28thEFsVBDuMMSL8NsY7pbsVpkWRBcF52S1ojXZKWstRPm7z5g25nT731DnURfJkHcYk7R87rRrbC65hMN8nBuxu",
  "key9": "47HdtapszhsUXUnHXjwPzBEs2w8MERNM5zj7ceW4i8q2S16ZGgATaTznEPPF98GCBKC1wykJdkrRrXwzQjnTBW9s",
  "key10": "3v28QGFEVFKaxsXVU3d9seWZDLJx1jL7sbMypdg7jUXFp6sHRfCiDvCLtwcyZL27MqXqRfoKUDSd6xXj3osXvPYK",
  "key11": "y9EdohQsgVPXtMwDhhCVLNjoFuzeqp9SHfXekMeETodhCHZmntXikZoteG5c4NhuZHBbyFymADD5Va6xFxy8zqw",
  "key12": "5YeAgnrPAEDhCZbXac75NhTBSFXmFwCrBVytmDCQniSXmGPc94iaUfZ4oRv72F9tJxmUAGnzp8bsw6YDrhhCAevS",
  "key13": "5vzHvoZTiWqn94fmVUTDbTdTfJviPZW2dwu1ioTZjiGdooDDZqzxbPiDKQjwqk4nJs1zw8FwcCCpNTKT8cn9bfMR",
  "key14": "3DFGmEpoCDQv4dg7UNjzLt6v3KZyFpZXB9pvH2pG2Hnsmgnko4VreMQV7FuYD8SSmsrKKp3se5ixczgRQ6n9n5Zt",
  "key15": "5Hif37dsNEKaAk19M9L97G8JYMTswhXveT13bZxZ6mrsvtWyYgzqb7m3y9gq6w88pjVcmjN8zzoYeVxH2hPBJoRP",
  "key16": "446Doozg5dBnowQKjfGBv3K9cJEVK2R6QWRXxuMD8cqr2HvGyxZMuzGmwqH72ACZDNzV4QwbWF5sDq9ySiQ3Lps3",
  "key17": "4WDbTesoFoYvtyRQHaMVYGtvM6A8vBxQeuG6xb5Xa9wsaDqwUEMbLJkQSYsUQX6ipuNE5N6BrKgwA856vVRGfrqw",
  "key18": "4QHCPW5mxfgwvp3ynQixZ7Z6H2xpoxB5WmjUGbHLoynYhv82XcpFiuqdoWsAF9PnCWxd2emHKH4JiyWxck2RZymy",
  "key19": "551bh8JRJj2kagGRS2C36E96M5bgezkg4WKy7Hdh5aCuapBCstfCjEYZ7faRnN4hHnVQdBYwbYePFGnYAygkkDe",
  "key20": "29w2JBPLw9bpK2Rx8F9EfHuaD2sfVdB8eMVeiFbAGe29Mn3C7GHr3HLtCE3uhdKYNXWcTTRng2s7FuNQcB3UyF7n",
  "key21": "4r8xXQCZFGn48u3NAAsvAqHeVnyNDdXPMQXtduM8YE4EVkA3JQiAxx8XEz9i1GeQNLuejzkbYNUxqoRqXHK8cEk2",
  "key22": "2EKrWqoN71vUiro11QL3omxv88bfELwvEhsJZurYnypGReXA29uiTpGkwto9p9virz6pthTCupm1ieuwVgg4kM5w",
  "key23": "aApDjvjfWbaBo888WrThAFxM9KJstCrJdk86Kq84HhiBPT3PN7m6VYv4ihsNiEmZ1R22o2eSd9GXjM7F5ykxcL9",
  "key24": "jw5Mk4GkP7XieseJtV3dSYYsAWbTQWVq75zPLpRKLAgjqxgEyHByzdzRaLxWVhx9SWivLXzCP2PquQZbmvLymez",
  "key25": "JHdUEUpiGY3EGHdwtDArMYxvjqa3gLNab6nbEbnyB8JDSTqLrvURDSZWK8meBuYcbhG99J8d6pZH7Pmxs2C4sJK",
  "key26": "5jZqACdirmKEUsxcquDpzQDCvdp4Roc8j3iWnYU1LByEzA3QK33RpUM58mMCRoVfxKokyw5PD5LcvaWYx41DZgr2",
  "key27": "zWG29ZUEczQVSv56zk4QPdwe8DhjYzBSbwjjzVrJZcJQ7SFdMnHSDT1RQj6YNAUSsWpZ4G7nfa7VhC91nzPcL6o",
  "key28": "3LtResnh5wVhqFCriHmcp5AaMLbXa175pxYqnu1Bo7uRVQnbnNYa6szzuvqkwWYHdqsaQAuhg2gYuXPKL7Qfmn26",
  "key29": "3FQZicbofvdPEQctfXWpbg3WGpdnzj4SwZ3RJmJJ93znTSxJgrLBV5Hrsig6RVpRbMwzHZeWtT92WQZUv2FZWag9",
  "key30": "54Gz7iZKzXNhCe163QsVKLJV9YCKvrQzVDrcDJh4pFTM4y1Y6JtQh8JqZfpSatVX3P8B5VQBb4UWQ7rzMTr1ZnnZ",
  "key31": "3hYkk4e2uqWDfpFkY4rVPuDAsux1rwcwg9V9USxSdaeSuvJSsHczG3nWQGPFrvmSfNaBXrErqukywczTnx8YV4uQ",
  "key32": "3RMGBau9VQJvcJ2y5Y5Vv5sZagZHukyHtnpREWETZNRED5a6Who14B53EZNTYczDCoGveeDMo9pDdW321wgfr2SD",
  "key33": "5teTnwKgBWnbRTqbzX1B6a1qKgWUH89Ey4kcwVRpJRVm5re63ugegbyCvSgmEdNxurkfeQbASdntwss1eCd5u61i",
  "key34": "4ePvLMv1WJcdvweZp9GZB5xSyKLWZVt4FttWSeKB7aPufRhn31zRz1qHttFuquLp9N7CtYBBLW7FGnMfQicVJgQY",
  "key35": "2bgpVLmiyYui5ados2hn1HseAdSpKd4iMxAcJ9jVxEV921PHRBj1f4QPgWmBBq5YN7tsfyBjqCDfKgQ6XaTkxDCh",
  "key36": "Zi3P4LJtqcYwbCEvJk5JVM1oq7BVygNdjUDhC8eHnqHNGZ1GfdLCVpKXhFuvufoNuHFD4dzBn2hA2LcrmNE44bN",
  "key37": "2XaLobZGSvhJG7kiuaxDgVZMNWeXTxq7rQMLHAYzq7f6DmmF2EpjriSWfcuAa1yFmgRTgVYr9BKW4VhwjomQzeG3",
  "key38": "4cdSW2RZzdnsjmrTfvu2ndNMGgUSp8SSPsi3Rn4Dg5EeK4VsJcn3ygrEVvtVMwBEQYdA3ttnVxVPtNCJ44h4jSrQ",
  "key39": "3X6Y3QgXcgnowRbCmNo3VY43ZREcS71gqmopp43C6KmSmCuhZnYEp3G2bjHorBLDg6Dgd1tmHGZ2HJXfxsbazMJu",
  "key40": "32fEcdsiQq1YFzRryycoUSP2gz3hx4YTYmQ7Gbpxp6CYiPTsH5WZz5VXQZ9DVmdy2fXScA8rZhhrpLvthukzmLwU",
  "key41": "5xPoNJ4MEfHYzBT5oQaGxFnJJ1CEL3LzNxx6ELBYSD6hongxxwLh441GdFBAfSYepKnQ2Rkah4WSUwap1cZkZDhi",
  "key42": "3AZaXbnHJ6DSE2K599dZHAqCa9bNdBLpmxAidL3xHRHazHCoMyqvaqBmpMDKG7yu4rP96hnndfpni61j1WFVEmPY",
  "key43": "3XBZnd62wzVR2cX7qRQmi16HXa6k5hzn845UGR2cqWHeqVB3YU4kxb7ooCJSh1DqqnnYofJuu3BRBuDiMdthw38K",
  "key44": "4xzVz31A9ZGz8Lq77tHJrnqmGNQ7WwUTcT1TRshPGbVpMbz6ffjdjFQAfjBRvSW5Bz3E52kNxwMwpa8YWiGMgRoh",
  "key45": "5vsEypUNkoPpbdFofgxT4NmZuyjDfpW9LcCXNJribCGk46XKLhedrCATHf7yhq3h4HPM9ieuuco9H5bpE3iwMQpR"
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

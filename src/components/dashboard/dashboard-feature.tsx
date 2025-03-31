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
    "4FT8pgbyJ5Fn8naFcetqDHyDgbU1KWqVg3f5wqt2G8eSstX2i5FZmnvnV4qnWqQGem9UUvW4eSbmqYd5iM9QKNyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bzdWzuJpbHTnHRsHWDXSAmgy81Mnui58FPbkmYPsrp4GSBWngqwecMDLJXAmjGYVaoyjnjo5ei5eieADZjvsun",
  "key1": "4fMFLDdJVAbZPpxGe7mDcY36rMyCpr8jkivYY5auJg7UvbzfdKox7r4oP69uRijXfxjmVp8GgEWEyphb1v3S8g2v",
  "key2": "5eBALrhbp7Z5ERSnUfX7PyjQavF34SGaih3a7pBK43j8sWA4F7AwsuVgMvPugYSrFED1C318TxNaPnJfzFgpFyqo",
  "key3": "32Y2oqUDgwVTePhzcBEzPDzD5AfL1RQ84dpmcYvYr2NetFhJKd6LsddVHCoirm2qaQr9zDwf1CHUap6TEqGdB33S",
  "key4": "2fiZu83FfKxyKarcxstsPTScfApufuiNNdNTAKdxanUGdtXfuePg4DXCEpEHfmCs6eKr1kTaKBUYHwksdQgFJMof",
  "key5": "5uZZJQ73Xb6KPX33ghGLCJECjiCQyAWJkxcFcp6RrrsrJX7hzpB8YyRP5RqmEM88yaHaMDot1Kqnt6GdDQE5NaaL",
  "key6": "4qft8J95UKsqwFWFTPLkiZKmfvXxEu3iqa8N2BaRwKJBaG7QMvJ4SLNStPpyEPpgPxSi5JetF5kqSrtvocw75zBS",
  "key7": "31BLLGk6ChttqFhx64kn9QpiW9zAUf9xzj4crU7x4UTsbrswgr8cgU2AvHekwGsqPDfxyFwxSs8ZpPnPgTuvpk7J",
  "key8": "4uB7jZ17odrwS2ReAmSN9TxNKekxpZHVoFoFjP5NaF51whkxpE4u3BrSyK2XDYuDhsw7kDA5Fr5fickjJwGKxXZy",
  "key9": "bHgqkEJNadviKADD223fnvHCcNydKprLaorUgPLCYqvdu4vMFNccWBfftb3rJkL3Wje2Vcr2dG4fAm45sCWvRVs",
  "key10": "271wDn1Pf9sc1fsXHLdp9bfC8uEe7NWGPxbmiiPGc7qo58kkUeypRyFp4umF1QM4MixF5DmfPejUwQTkbmZFh1tE",
  "key11": "3XAunj6NDjxz2SbR8DmmaUqdbTtXESZKa2PgAVty5TcR5WRvxCii9f6M3pxEnw4NcvXE92YneNcdb1mrLQuuxFD5",
  "key12": "3cV4czyNhWnRXr1KLojNKKfBEiJLCkktEqzJ9yjLDRots188ca93NN1fr6Z98YnyQNp34WzmtgBt6vrNeMtGfmud",
  "key13": "23tpXzRkfNHyzfW51xcrvhv8N4eC8qHq4xVSyboEZVYLCjzAjAu25wrpQWpN4q2SbcyXVnPikb7dZ2nTSu6BNQMd",
  "key14": "3UMYLTXUXB3mKa2ihYDu5xTPy3d7JqaJaTAND6z24wqubJq3f4ND3MPYHGNqpDU1bXdqnpkQnxtcpRErfYZFerVj",
  "key15": "2qchxvatWGxq5gdmS8Nh1xHmvHSznc2mxg7YeUdNT9121BhD4gsdRyNznXHKgUwvC3rRUMCCgz5T8fKhCzBYqPoz",
  "key16": "aM6S279uaKRY7VMKpgQbc2deMrsBwQChCKK2B1kKDJaqiwvrx1xX7idsYkjFNoPjVri6fgxkYUrHksrnRroBRSi",
  "key17": "ZhU6QDqSL7WCh4HG38ZSkdcfurQA6nHik6ksY7pPEBpChxUG4b8fbrp3dosbNBA9V3DSbysSDWAKBnbvSah6wtt",
  "key18": "k6Gw9nGDKa7gT5mPz1YdL4wzsKooCuc22DVC81w3r2ZF5hzHFqqJcEPdGuoKLLkZHZSM3srBa1UBeT7EkujSTpy",
  "key19": "4QFKYpNggb5onhPdmqavmR63t72TSGr3K7MbgTeiPq2Ub35FSLpeaKWRoo6wKQNjAhEFR8kTHt4cqu8Q7m5LpR2i",
  "key20": "3nAUqwRkJR1w5HBjzFtJKDHvPPYxGbB5PWzuL4Gsjn5U91CXHyaAXvC5LGqjX4mryN6u45nCHfXQsjj6JG8fiVxD",
  "key21": "2or4HxuaaejTaGTQ7T5Hf8f3LwA5exb7kw5Sqvd28hPPdQqLi5PQwimbX4Dmm2YF2W834vunX4aPCiimM4qSXhrv",
  "key22": "2pW5N5CmDRmxrLgqSaigdAoMPUqb98o8RnrH7Zri5FJBa4Yp7KvDN2LYFZnFDDBD5KMEKY1wHvQJRXq6RQED7DUu",
  "key23": "4sXfMzqdiQ8ttj5s8kSdPBfGsaXGnwSSm83HaJqSq7XToWfWYvTy5k8KXmXzA8ceFDSfMwiM9ZsbeTosoZ8xEk4p",
  "key24": "5zvxHJoeJAhkHUn41yD1g3T3iBn8htHhmoEfkQ8TaKAuzB4Eq8hgijNbNkeNg6BHZyHqsHgMYiqDoT7Bp2yMxu5V",
  "key25": "vmxEykQezxmYrMnYS9ZyM9PC4njfHcwsVsZ79duZ9jx6Fya3dR1MZYUNqorszveQLEAsoCUi3afyFVt2vDyP8qS",
  "key26": "3f8Q2J2wbBFdCbueNrhV34XgSf914vpiWg88dqkf5ZBqU2sppKAyDsdziDwQvYwakNob7KeCSgNJfohHRkjJLxPi",
  "key27": "2uoPpcSSenbBr43JS2fyrR2sUF44LMNLEgeLtL9vbYMwLjBaSRdH4G2fmfV4MAQEnjShfKUsTHfxaLziw615MMzK",
  "key28": "2EALYg1CvfJbYCLQUxRxCnUT8Z8wfMfydzQDPxPvNn62HCC6rEizhPzP7MKsLKDvmXYHPzgP5TsfX1U5xdCqdBPt",
  "key29": "543MaphjVQmxWYRKjAL7yxTD3RyvJ6m4W9ipginFjUWsdxvc92SrM3UQvoqtHMeSiybcqPrHszvv9bj35bcjyNL5",
  "key30": "5N8vqcmnVBuBvmsisp7pfvg3KU5ztpywDNiNjHi9M8dj3y99J2g8yoQCnLcbf5kxs2KAUefNdr7WZ3r2PzPqazXb",
  "key31": "4V8LQzrUZ3GcaHT7dcV99RagsBkupuKV2WjTg5WNEwXqsruGyk892QJBWZP63FedLEtB57TzoePpb9FfRqoHT2Sn",
  "key32": "2GMiNeK9rpYUCQSL9CGX735u1f5KcbS7kWhwEkYdwt6AhS4KC8U58ek89HKz3TVJnrDcM1JFqoP3z1TLxiRfoz9o",
  "key33": "5p9UmPNLaHvzAmgCjd6Tyja5PADnkk4PQWnFS22a8NcqvRKmgzEY7Tc2y1X8PmokNtrpGr4GZ7uRQ7hq6fhP3xi8",
  "key34": "SfT58sMxtj3jJzHb2jALSSxsHpd3mX2XX78xX5bMwRGCNBY2vUKihSHVfwryeT68BZsfQzbU7KUaBGUMXPwKz5M",
  "key35": "3WyX6rExG2ep73J2fgRoBRb4gGqXHE3PJ6cTmvZqGesZ4rRCdHDbzKkHEBpbhv3ik5fDn2vbzip1xmocoxu4tyWC",
  "key36": "2oM7TmkFH5KhCG1RJDAcLfFBPTBLTrq4wFWB5TWiN21ZCSeEd3F5qVj9ksG4EVWz28roKmagvCpZBu1CAnb1p3Xw",
  "key37": "5vynUpDkpYJyYWx1Rnz6y4pvhjG9b9NXdwpPwNkoKZKUAfc4UgtPaADRciA3ARFNErhiVaBGn2NkHJaMGxMjwpGU",
  "key38": "LXNdsWWWvsmbSA5joY4gXUdbrhQLFSNd9qbzJT33NvNHQ3agh2GePavCxEnrUJWukx4wxi8EBAGpuD8AAkK9NxP",
  "key39": "2op48845n3yer83gi7hpbtyDM3DqEcDshfEwZdUqMRU7w3ykKhZbwQsiB3yRBN5oQHAvSpEzteJeudQQsY5o2de4",
  "key40": "2sbmB8HGK3zKDz89tGf6S3Jvjiz69bPsHsVmJRaHHk662WPEhGRaQ1jy2if4JwvPLJ4MA6UE32xS3fXUsiVu2sTC",
  "key41": "4fHbji5BCdupod169HgJmhdtExHqoHs4pPzjuS3zwTkk1248vPDXjWPi84RjAd1vkj9ZWywDT2RYB7GEQNNVetwp",
  "key42": "HSaxvdVLZ9nXxZ6fqUcrBSPrQASLhYCRTNhnC9ehBkfGVidRjcAuATRVzQTeeNbm5rvfpHxPoUXEZwsi8USHF5v",
  "key43": "4n9zqMhn71wGDa137XPq6BPPJVJdYCrHoLuZrQ8P8EJ5YuWrEK7sgxapyBioDEnUgybrEA3ngZZwCxa7k7xgg3Jf"
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

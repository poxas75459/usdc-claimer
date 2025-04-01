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
    "456eBj8LPT4bqzaYiBLXk6u3JefryoQCvB8P5huHb2fsmc5NhbynbCeBAvCJKBQyn9cNMrr8EAUTcMEVrTpgWssa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568eh1jGxCPeQkdpDYCYjvhm3NWbqTDJd53jUoMHzKsqCb95x2WN8JitoC5KcSavgw3RqpZwQoJzTEnomeWRQoRi",
  "key1": "HotKBiFWWep74fYfVaEngZ5F1sDo5YSdKNDsN2E7RyxYcL7yu8GJHquHRWXLWrA525GdCodB8qfTD4QntZt32Ju",
  "key2": "2pP9t6QfgdfszgsXMo4M7isNTydTPAgSH2i3BkDHsneMUTAfkRkLck2iyF6c4rqtp1RqjH5oXPhFmP9rebWnVZYF",
  "key3": "5nccr44grXw3LfYJUt2nmuqN2EtT2k6zwBZJZrSpKsiupgCxPmessJvzyTbiavyBZUUPvVGEPGHcUe8NacJLB7U8",
  "key4": "4tBCmmsvv6Ys1JJ39PETmVVRT1FRYiLsB5ivuvMf2Etomd718Q1kntvYAdtt5k3XajSKcomga3Ck6vp2fnVrKqkH",
  "key5": "2KPfTXQaNnGCRMnkK3ckf3p43xDr9rjamNReaKeQRT8qFnHwHyrNfAphrz3MjAzYALoSnxxKfw5BJkQGCtqfWnQU",
  "key6": "B46BNn6o2t21E6vtUCcELFG2ejwG4evcQDzPSaJeJ5hxz6JPRKqnyBGkB8cCnG9oGPeJo8JA6YzMmJd5h9bBJXm",
  "key7": "2DorQUM5BXCs4ek8LcmdprhrHLpY9VfEpyiETYNKphXEZyKoNg765miMnrjwDd8xrwEMgXee3MxeqnJB8C1fYvVE",
  "key8": "5aaBW8EyX9wN4aBE4gTzU4j2UsDWuEX9qq2JHYNF3tp8jcvAYFgA1BNzjCnBZeWjBiXv2c2uNYYag31NiXR57E9y",
  "key9": "2FAxSdgkiEYj4BZzagfqVN1GVXnm1U6jE2zoyCVnAwA3chPNPAeUwmPqNKUUgqKUfq4rKVKadq9tDpauV5aikxSY",
  "key10": "3QyAAs8bxfCZTfJtKAS6aS35aqyHT4dNAVFc1Wxm1XYcx8ie8RvUWESFtmxAT2hte6k8TupUrHsySvMtPbAPi4Hs",
  "key11": "35xFSLpPyjHRbDJJtMDADp347RHSGde9Xvk75wtWaZxmL6FQhnwyL9D3PZHJwNvKrzWvmURf1TPVVX92L5BksfyB",
  "key12": "5MAMa6RM3U4UNfgj5tnAfPVguLZWyEtjDNLTUPQszB8pP2LnCANY2oj1iytx9PCz22Xp1dSxkvEsbah46pv8x6S9",
  "key13": "7BhCY44BsMbEHH9hFKG1CZobVR4ukVnzYWZ45iCkYNsEWK5kXFLpXVofKHBKiTr67AnSvzDT69oeSX9wuFQ8LxR",
  "key14": "3y47H7LpdB8Xgs4noLjj5uZrzwCuywnLx5gJsSesozHQu8m5RomgdyX4QHavCGHLPjZ2fzdCPxMQWYN7rWfsMGY6",
  "key15": "3XpUmfVg6rbGonoY79z28eFzzUiTGzh9CwkYbFJ3cxWBsZZvy5wL2UXpY19prdVmyRHmuGz7a2RoYaDbGytGvQXr",
  "key16": "3edLdiwhHfjooy2fPM8YwW6oCMkgM2bRtKKTwHUiAYB4GQkPqrN9az8R967qFcW7tigjcuU1JFE8M1Myu6tZhSo1",
  "key17": "7ARMisqD2JfavRB4d5cLdkELLnrisqsoT67UZq3KBDRMmdj7yUtaxcrFCmMSqKXf3AoPYSMAkQkqztXP53eDAfB",
  "key18": "m3BA6PgHUqJMs6n1HsEQ7Z4MyuavttEhDzmFJtN8cLeTH7fduAKBGh18b9LtMB79H12pUX3rNG8B5e6jyN4ydUU",
  "key19": "3GshHYkaZyCLAi66vXU1KB7akLYASbr4op3AAmHJHtDsuW5tDiYDVTqnZ8sb2BSvobYyM6gxminstJ1u3x43YuT3",
  "key20": "5tFcSdz4MXknX4KHEpGJ1zRUmrjH2Wu6ybsEYtq9owYZvQH3BeMwwgArE7tZYSWwr8ZghQvYi6LQ6DcN1wLpEvxa",
  "key21": "4QndcCjcbzr6y4PSsoedPFLPkBWdMX2x4P2CALd4BXMzJn5x5qQNFCz4LKaTuKmVtkC8JDdDLxiLnnGJwkPUH83z",
  "key22": "2G7eFkcMHJnEnwWmFHtcugUeJt7sKHkLiVcJFDsr9tv45D3X2sf9B332NoRAV8xbmUPYYxFkBwWmj96Z5YALjvBG",
  "key23": "57LRhizXKXb4KB8zVRotvBvwB4RqEpejQ1o9HxX1NVb3kKcb9uJZGzywkhfHit5VWFyEg7BfdzPT3J6UuDBWmVzA",
  "key24": "65gDGZ9CT6BQrKay38zFXdRka1mvA6kMzkWxhcXJGBm7khTgE8eEewccD92dHNq7AWCkNbKFr3uwTZis6CbHqVoA",
  "key25": "2bdrvw6TnYZPJnhP9FYkYHnYS84Xcr7yLd5DdrgiJEZtB1T1WXjsjzDbBQ5p48jqh7zMWkA4fiDVnojrpdKZuvDp",
  "key26": "bossRhqiUdkxhWSgdpJxtSowmj4LREdpc5ewpbbYWUZcUee9qkktZjvM1m9Nm1sMrUZynAT2b25nUdpWGC6i3sh",
  "key27": "5XCzm2qKJYeXYfcXkLALwMyNaxPYPe6mc5tuCjfbqweeoEVQshWvmvpxTvBL5ReAyAAiK8t2bPfzhnQcdNP2ePJB",
  "key28": "4HAm86WNj8G28DCt5QF5tvVS8HvBEWY3CWm9zmAZ98HhfjeJLivRY1Nu1SgFiUbKamhoeaMFwb5XdEvNNGXGTUYN",
  "key29": "3uK3KiVHySxzqfRRroXWq3iePPLjvn2vUybmjFvcpiesShf6srF5DQngggeTvDdyhUoXZH3mVhVBGYbm5QQ47zkw",
  "key30": "2L57fu6pgYfv9toNM2xVQD6r4SQcxDgzKm1mJcXBWdNFoXqCgUNj5ygkZbs44oWkXTTpnS5Q6CRGkS4xJHiyVSPs",
  "key31": "5R465xyecxcYSQSZZEyWgd7nP8fUnMH51Z6NpeEvFuPFqef45wZiijhcSVfiqmgaAst3g3Xi6GZHzRbA6iVuEyyv",
  "key32": "2aFDaugfu3QACkKgmeQWuSbRNDVLRrR89JKMdxg8AAD7eZ4YUnm7hiYYYe2emu1mu69kzZK8t9mTYb78vSLyUWYY",
  "key33": "2PQ2qxyMYSTnpZJuygBwe4p2ojkUYgVtGKGZCioVXGV4Dmv3HcAuHX2BjfErvYJhViBiJMkyNj7uYbvnAmtSMzxL",
  "key34": "4H8V1ZoRc9VtjGRGhJS7z5ZLfHyK2VamwGwicmCpkZNG6FoWuVo9P1zhm7GCD72Maow17ovCfjHxPHdenX3x9a13",
  "key35": "Fep6DJNrytFaB5TiyNpWX5kdJa5JBGsqE1LR6Djuh1YsgsN61vkMydMseYhiiTcAfYXmSoQbiS4uejkj3Rxheht",
  "key36": "3SdxYJ6R4zZntuFdskbS1fABz9ZnWYjG8hSWdBDSRzKqardi6Ywbt78ZCpK5pvzg75DLub2YPgLzczqsxGvrrGBK",
  "key37": "5bCDrGuTUB6Djh9WkZen5LMrUnJV8ujWwq4DbQjogazibLoZMyTgh74tgJKNMDHScT9td8YQJZAQkEZe5bkCvmdy",
  "key38": "2B6HrPdtFdLqzorHgMso1aDhd6U7Bt4tz8fQiQNMniWJtkdaUmjtKGKQLKoRpZbafLg1yf3BuBRGt7W3jsJ1UkPi",
  "key39": "3m5y6am3CLmDmurzL3eY58yFmgrh4us5UoKrDQu5UFEhBxan59YxY9eDQ4Ls33bPgKMLjmiJ62nTUQGJpeegT878",
  "key40": "4LKE8hVTPVcMff7G3AeNQ7r22phhKJbpnXkL2UrDz1KEk2E8jUYBUHQJU8FoUwNtKdZktEpcvMYbRW13FrAhyxrU",
  "key41": "4Sy7MEHeduog4AM4RZLJWhgNmVsqXbjX8Cs2HPibD6uE48G3XmTLgvXjyob5pBzvVUyfvvbmdUaEiYfJD3ZKQbr2",
  "key42": "3fPKLt3rZfMoDBget9aHAVPRPi6kgzSVJpARqh3UVxSj3dEjUh8Ly5NBnRZ7kSgDSVdawVJxts9k714EM8zx8ysY",
  "key43": "3kntmq2PNxYDJb76qwEbQu5ttJKkDMEAGc38jdE5KmiKSMNcQjo2HxHiNJXc5LdbMmA6mTAisqDVVZ2FmtmcSpcF",
  "key44": "4QXFPT9GSXUcmdntteVV1m9jaA52C3wESo7i2MzLmjMUAzWDkqfK8i61gLqifB3hnvQxHJkcRg8XGeJ4xb4BPgeQ",
  "key45": "sNKmYbGBpJGzpYRjN9iEz9HZkR1v4Ld4KChnpgbLX73e94NPUpUmQrtQjLkvtFPg52gTCwY5SHWfYEGFE2qKRh6"
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

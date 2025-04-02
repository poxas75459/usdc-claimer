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
    "2gFkuvfbvQCERjdN9ohJ9Noxj5Nrbmggx3jLMBwTnLzkokFr21Cutc8DMEiEKbzTPRhJ4se2PSkdGeSLWsSxgz8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rg4uCrmpJ2VgcjoKa9FGywUtmGjTWgnvxPrCZFn4sRQc4TsE7wgrrbLXE56sjrfhLRihqaAbPJSq5rNsEJR3fDQ",
  "key1": "3WVEAtxK1juq9RiWapTW3u25bi1f3BgUeDhP952XU37UXhi9URnqTQXfabJHXZQRiHN5GYgY1ZcjSpWjQ4WXXavr",
  "key2": "LX4aiqJzNmfv7WYjrmfN6EX86UMABZ9aWdk9Fk2triGLDwe1oVKv3wqiTXjTHqKh2LL3WRSupGHq5MyCgV6dXpv",
  "key3": "4cjyesMpudCEAgSStMvrU345Jqs4x9QxCezjG7cz7YkShMKrxKqSdEiRMr6xehsWRtpKVdDBddj7xQyUcskJHVbC",
  "key4": "2EBdLPFnAESw5d6yoE4zz361x9WFjTzswh8b7oa2hX3haNPQH8e346H3ocu4HmJzH7mKGaGF2ciJ3FQWUnj8ZQLJ",
  "key5": "21o29fSmXeZVg3sG5RWavjQotPTKMUhqNpBmzNjmqfewqexTjK7cRVh92sH1r2oymc9cwoJhA7RovEYftuoUY6Jd",
  "key6": "k8KBqT1EMCmDzQvDmvug3mBKqh2uFePWf8UWAw6r2Y1XvmK5UAu2ThRHcdZfks9AvWggXaVnicF3rmyESLgaoUh",
  "key7": "5UzaKhs1qhk6AoCCuvBCU9mYm6b1d3FPfByDgVyNJ5mFHwYXvSrtqFp5wB7jE5tWv1K2GS33rNHCZ7KfLtUYpruz",
  "key8": "2sEux2x97wZZbnsovc2kArDekTZ4Y2kgVEjrSK21xPhSYc5vaJhem9NSCjzNsyKjUs228AnMsvV5yD2gwvhzXd2L",
  "key9": "4BdBTsHvCtxfbTJc8TzChtjFH6FkeBk4B1Qkg6p13PQY9anWPEE5mdGi2cMwM3meKVk1xX1ebrQK7AdxVkRyzunc",
  "key10": "2J32zkJQJthLCr5UNyNYYuzq3m6bEvsb1WCeTERosMQveAmx8rv49YgUCi2eynhQyjbGn8kEzSJdfmk4LHFB9krk",
  "key11": "42C4kvhFaFDdeKt3CTMXQZd9QRgpWer728f4dCg4H1jPTvcVGeQ2dNGmzvpBEo8rG6pJaHgSFTYrbvTWWKaS7yjk",
  "key12": "26uDWtKSg45d7NBg6uK8YDkKepgg4zmBnBswnwRgX48bRvHqeAdVQXZ6JBac6hzjUEHWoLgtysdm8bJk7fGAidkJ",
  "key13": "35iieZLsUUFrac8BDGnBCNJdK1bS2P2XCUk4ibzUJxPz8NrKv4MqWyNM9Q7Abi9r3zmVJULw9zf6rnBb8TQnTAZC",
  "key14": "5zGg4y4j6GsWpMj1EFqUTb9txhUXdhbhLCcxqViSM4CKX2VU8hXVKaPR8vVqWzntyd2uKTEHkFHr4ujySskwuSn1",
  "key15": "2LhVYJTNkMEeL3VRyrZAuenbbGQMzAZroi1NWM26QsVKEhkaNzKq44Xt1wEh48kcgmuF5JyFne6UegJABSRY5XUD",
  "key16": "paTGJY6yVuwvQnGoWcjuwgd6KWUwjdJMivYLx6nnFwjXzWXtiRwga71thEmr2XdCYWn6QhFANofT3Kkmss3Q9rn",
  "key17": "22kUmbUf4xxexyWfU6sSCtV9Sy22eUEwP2PkQBYATw4wmsMbq1TzCWzXBAfyXt96Dq91nYeS4FAzdGZC8W4gbeWW",
  "key18": "4NsdLE61FxzgXaNWG9miL7Cu9X66Hyb33wTEyRgR9RtycAgQBWTtYEKDiCryf4fMtBFgLsSK3SnQsikCG6oa5f62",
  "key19": "f6NC9KdLUGCpdmCAWieQAS1Uhiq6YxmkrgxtE3zAJPkfvGVUtqiRSQdZRpziLrSLhipan1NwRowpLMUdS3ePj5x",
  "key20": "3C2K3FD3k5cBVbeBQFb2Ur4Rf7T7wGKFSrWPddQ2t6SFK7hMTKxW8iTHLfKPnVcM2hdYyqaKSKx27Fyh5Tir7Qjm",
  "key21": "3FVS6EXPnao8rUwQiS6NTD92uKYomp2oytwq5ZgTFrUdFTm3oNg9RGeJ1NLGNwkwBUtwWaeutULcwnocN6bTCpvM",
  "key22": "2mfY9LdAtPah1cNbo3Fy8YsuEB5PB5asRqrvrg3Gucpoj39Pim7gT44SrmkHNgD3BQvLnKV4VPAAxaGqnWTVMxrb",
  "key23": "61kDErdPmo4vqdLQCypENvVvegeoDPtmofWNguTnDHhvag9pBG6vB2vgYfvoCXwUndRXxb6SR3LMZWsA2vtd2jzi",
  "key24": "5yzbsREnVVJgvSbJKzcbdvFCWRZTZ8QKx94zP9z2QLMFtt26Ruo2PvgkUWun3JCyQ2FYoHQsFXiJC63X2t5ngZ4P",
  "key25": "295xRCRqJ3GzmY4BrQN4A9oJDXKcRFM7uXigg8rJmgTEFhmHoBs7yCqUBVAGy2GKFJ26ku1nASBLGHp6kyAmEaRV",
  "key26": "4bjgHvSFp7dV1PpW3BzkgwRfRjkqFbNHEk2ijLdsLZce8hVjZW3HvtPm39JnfFxNwp5fY8DJFKkZ35xEWKAZmoQ5",
  "key27": "BYgWrs7JBYqFFjNEmMipFeBKjMayzub3q62BFmxJJM9F2VJszyxBQNxwqMmVg9vangkXPNj6F22VWwKkk32kafn",
  "key28": "4PMxB9uCFcxeP8Gj6QmMY2JoP41aRCTMq7T99S36eoN7NrA4BYcs3S75V5CV1ZMBQYV6ZftXie51hu5kmNhGXVQw",
  "key29": "xTYw25TxssFz1vQ9UQUe2ni9TZdbdtT1sFAm9QFrpjX9zMCmwkUvLYdcz8D6Z6dF6SShtTKFiiRV2qEBzTeu4e4",
  "key30": "5zMRPAFETB489ioa1oRVzrT4trFK9eH4Nwbo8JSPrn8cwu1qxkZ6pheVSPNiNtPh1hwWiQaTCjWrrPRhG99NQmjS",
  "key31": "2yPWgDLk2tw6k8PE2V2jvrtoZMKg6vrAfHGDiSkydxVt84Vty8niNVdC7vHvnTtS4T4N4H52aKLmgybYjwphKVvC",
  "key32": "3qFtEuMiPQUMBGVeU18V4RfDonos438yaxSWk8tmFFRqT5fbRUpG59fNUiKsB1FEn94puzdd7Uit3QsBWL9yUgzB",
  "key33": "txETmEVwUVoH26k1vCJS9VpYi3nCZRTcfA4qZ59dvAtVuucTsQhAdg1trxgB7wcVWyiwLmuqpKqXCPf12rcxfom",
  "key34": "2tPgKfCGKQcpHcPpa3QBp5Np8mPRnfKStrc3sVuBeovCAhFbNvJj99xRbZ7GNHzBTUu8QRNtjmygawV2S23pwgJv",
  "key35": "5CX6H6G499fg6Hm5AQZLo9EUCjR2pbJeonfbuaTTP8XdN5oRtJ1z14rMwZraMSYxVE3NfHgM1R8QvvnrhFfNyiN7",
  "key36": "3wknSUWhCNtXk5ePbwiFHdAgcNM3Zu8x4yk8Y6sYkxpzuwfLoE6AfSZPvVb5T8Lr3XXtGkSAEdwr9wp1EuGoCcmx",
  "key37": "5T6JQ2du3g6Dhd3ZMXV2nayqTf8m2iEGt8mszLZLRc4Qv4ooZ3knKGJopBx3XBNPkw8V7tkdNpeyt6rwsA2CsEaQ",
  "key38": "5nB8Wp7BADptKV6wkj2XGJiYyakNeuvvaY6Mr5mwLpGNHQcxRJncsW3uyWiTUAK1kG25oMZkCPjVuJjSbADiPd17",
  "key39": "4cG53HgLrbnWNnyAKsyZELsVqLEj4WSfJe8SCZwik6pnDNnDCkrRYf7YGemDFFcjbGZuo3P3gwtorFP3gE2jhrGx",
  "key40": "nDMgRVyBgvb71vyXWnKsayrkKB16MVu7ydLyV6X18wV5ZdPmAN7bkxyF4Qv2EUzupx66tn2Z2RFUFs9T156KFLD",
  "key41": "26ZYNQJxtCUgfp5Q1TceKMgivC9HGwfrqNi9EKqZr2gqCNzfvRKUbTxpYYVUdwaYhxChCsmfoPfDZ9Upr2kXc8be",
  "key42": "3TM83xPuTHeizBj8zxJdaXVDGERpCejNbxvAxhKtZLfXhH18wvLqNaL8DMSxwLg8jo3hkM6o8n3VWFf9SDGYJ29q",
  "key43": "37kU5tXjfKqjeRH1iNeM9sh8gfSPWBhaToaREc8syesNLu33DvBi9tyRKrASHNU4Lwq2sv3MZjaTuHHmHMaHUXVT"
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

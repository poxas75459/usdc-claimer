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
    "4GqW9nZht6awRHkoMrmGwQVa3Mj8VSwho6NkH562B5KqwMvA7AGVtASm2mKXLrPFrcbuyYx1NLzioMiyqUAtu8UN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59rechBK1joZvcyA4HZgWhSBtRWr36tToss6CLXwQKC9ipLmTidw6dreHQLj1uVmRQRhbqPibVULzDBMykm9QTGb",
  "key1": "4ftiFc5NBKibiU889gs36EmcStro7GPLoDgLz1vkFcAb1po6oq9b3nsL3CperjD6YCJYDSbrwYwFEvQ4a3wMwCoz",
  "key2": "4qLYcmcdCsPJJJx2HVmzeHJWrMWeZk1YmCWAQm5VqB1Ss4JyEKq63Yyai36HhvBbudXhksBjBroteeDGK3V2bq8G",
  "key3": "5cixTe5wT5xaTYkWVQzWMRrHKqypPE1bxixLpzBnq5s9yWm8UYmmG4KAi15yTkegyA2nMgU7czN2L9y2KYW4QyhT",
  "key4": "5JyiHPsheiWspyK8mHWGto3pKJVu7rvHmCrdndPKvCTh69XiTc84yfZSAzzZHER4xNMNGAFEw2oprg6mjH4DQh8y",
  "key5": "3ZiAe4ffvwrNdTW7KQMpPWBoYDhqhdbCYg9xxuhHk5MhGc5Pu3sxRLVj9LQxEicy9hfZFcK9ru7ik1h8JV7rFzfo",
  "key6": "7AVWrYm6sJfeQGREoNKcZR316Hc3DpsvYdvZGK6Ua8PFmJtC38jon8PznzDL5Sth6vCbfbzxw5E8Pb23mTnXcn5",
  "key7": "2gyktq8fqUgJbS2k3iCefmBaSCWdrGZivzptyynWYMNdariBE8Ci7p47xKB3TFrR41fYEHuAcWibVVunJkNpNFGb",
  "key8": "po6ccXoTUMTSn9Ej3JuFDNfWZD9AsWtwxhrRUU3QbiV9SFr2Y8RogxG6V4LWLUYv4fzGELCj92bzUuxmhhL6LS7",
  "key9": "ayavDpoBytvxBj8wCbR6vqFxAATcB2QgiNjck2BVttfqz8VKXzG5ZgJEvF35tSRiMMkQpaUanXyfD6ARRvx6D19",
  "key10": "4vhC5SNCDVkFKeM5RqkWkQNoS1QJSroo4Mg3JzvsmyjHqXVqC7MSNWTHZkfvDFE73MBaSKSkvfSPkvoaFjNbYcE",
  "key11": "28sAqRE1cQD9U8nSkoib1CZqSmjj5spt8wBzLmSUgKwbQmKTqYwc5TzfoJ5ygjykay7jTrZyqNyZvHA68iR1yXC5",
  "key12": "4JfjoJhXsqPZRg8qdXhtPiSdh2B34wDNsNEbRoMD5dCQZVUGDE4egsWW4SQNnH7TFbDzurxLfBQ3oc16Ucdd3ERN",
  "key13": "5FgUHK8fa8SKS97WDhVexWuuAzSyY1pAtHZVnUiUbnbAbt7JkMakNbPdYirCxxLM6bdQ4HurYcLqbN5HAZedfffs",
  "key14": "5CvD3mSxvkvEFtiDCCftxF2pYCM8d6VaP91vgVJtBJBSHw2ELenWv5qnUMhR2EqJzMZxUhEwqCg8TtFzdoTF3JRu",
  "key15": "59GMkaFu7VdyZRXydDnB6rjpTpGpgxjfzGrrpzgtZjwoY6e2MAmL5B4tHBiUrSSJEKw7Jz5TRUDMMYYnZ1DS9mCp",
  "key16": "5JVFRH1msi8NbXkZz3qmjrvyZSRLcfHn18fD6uer28mqK16D5TXGJDXL7WmH9BJeBdY4dLW3Q9sTgVBbHQaRPWAP",
  "key17": "37MGzBtWmvF8g2RYFj8XZc8uNRFdrkdGM1z1Ft6NvSzRL4mZnFHvMvKauJf3GEhRZbZaUzTebVPC3gmaCEKNPeZc",
  "key18": "44BHXAiuWUnTjdQdmTWv5rB6pXUydc3YCxyVcqdxE1QpTRBYrRpVVt2kM6MzWBkkf4n3BquxseodRwKKXZKBtqNo",
  "key19": "5d6KTCqcg4pkLu7NJT6bi84GtX2hpsCuKXZ7amYc2ExedcCgHvebbsv3ZiHuW7bF6F5cDxHsy9HHG3yp7jUrB4Wf",
  "key20": "46todHVBaUKfVNHVHWKkev2yJKKK7uBmGNUSfPJK37K4kxWYkkmZDA9WsWaDvV3nntF19fr7zcgLdtmRbBtZKDvX",
  "key21": "4UdHecPHHBvSHgrw72PGtoBubWnfz3uJz1nfADQejoNEieio1YCJLiktpCPxqsQBgsMh5Y5dvhEfbMbez6w5GyCt",
  "key22": "3TnUezmKskYkpjydUR3V7RAXDMhvufJ5GbnLJPy8FoBsy8S36FkDheH77QcbbaSMpuwsFYSvKuAp9Dt4tsRzA3WG",
  "key23": "42cixc6yB8ue8w9b6SjXmKafhTUwD6ERBd9rVPzVfmeLes5osdRN2kpnVtQQCG4e4iXZ133hpbAhgSHCD9R3ECmk",
  "key24": "wv9NQFMNximZojvUg5UVaup5bZnQujXt3XjBc83ZtbfrxNtag31fa11meZZMFwFpxHSYhMQiTti2ySuZX94T9CA",
  "key25": "WMvJhsReFH7aStDP8m14frYH99qLmpPU63jUntb4q2BkVLAna2pJiRwFtSAqny2STzAhXzvZnkWHZQHXkN13bU1",
  "key26": "3CKkR35gUXsKEV5epXaUZmkfjffAujJEBCecMQZYqVdoiqkaaeBS4E7yPNzvFe8TPyRxTNTKrfuQp6H574Hii21e",
  "key27": "uCFCCYQKxLzNN7sm4tMq6J6GVUYUbVWgBfjBYV1kRwna5NVzAxptDinJSFPgQiW1Mi2F3zKCE39cBTH5NG7TuY4",
  "key28": "5qZUZvjHu7iUs72YHnW8DVvzVyfAEdLZrwrLqTVivf52iyxVQDi9UDDrRgWGaiPJts7rLBX9x2gWvdWf3YCwqS1C",
  "key29": "5PgZMmQxuNcPz4M9x96ezeD4A3jW3GCZkkr1oBiKFjwK6UTPWcoDN33wM9DgFv3T2XnvW1v59fpUdqdCt8QZ7XK3",
  "key30": "3xiUMvNsaH2mYZdiMSUGMzwcdxT3AFPS3o8gWayxhV88oF1hVFfS82vEWcFNzeCZs842s4qn5t6YrKiLYfQijkrw",
  "key31": "37tmAWYd5cVjnJ6pNXk1rnjeGRGVqsqNF4NSY4s6UT3zuUTidCCJceXnYRw3tqQRbVijYhBcirxaUFrK5C41RL8j",
  "key32": "54sjqymrZCEnBR1hcMpGwxTaeijajqWDvpjQAcJP6fdZ3fn3KDQ9XkSqmptTnn2QuDmQk7oBBmPMWmkFVxoHrCQV",
  "key33": "47JwMkHQ9HWAQJBsPuurk1AHU2dtPuCjgshdiSuYfjao8YRZyBBmSn3L8o4mLqYhQ1BCZBZj4YFRmkXyZZ3YFYtB",
  "key34": "5ARysa8YdEreBnhPGt2tq8sWQbpzmWYPFLY8ncaByGgNvYFHYfxo2x83nKy3X2s2dpWU7BLshBspD8PtdQX3r1Dp",
  "key35": "46EEk3Zk4Qvpd4tChZZ79CNBcf1LMU9p5E9wDyeDVowMd9jeEkT44pj5sZCzLqpx7etadDWXPe5eDj5DkDDLVmT7",
  "key36": "oUmhjLtRGdjYNAduvKzYJsrPpKppUodZiDdBZLiGoJYpWwQsRCD1LhDz6HeBm5Sn4bTRFQFBk4pn8pgNG4vvasc",
  "key37": "24zciG52XJWDYmcix1QAha1w9Vj6w1urvH4eneyfmMKQuGZZAwVEuCteg3K61hkd2dgSQPWQV8191JPtnw54SY5F",
  "key38": "3UtyN3Ab2vWGSZurxg73MEZwHuvoEyE5Ptvo1UW9b5WzA5116o53SdxqSrPceKWSpinXr1AzNPzZn8YcXhu2gQc2",
  "key39": "2AXubZQjbG2fqMtVpESD1672yfo97TcKDm7A6m8vA5De2ieQyUNYus7DNhmZmsuegHbq34iFrT15voavHfNTcFtK"
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

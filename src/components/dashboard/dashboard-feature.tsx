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
    "3hSnJZVZxgVw423uGs9Qbyi2C2K7W6VXF7WkSMRNRh4LLMVF3azbv4nx2v7AYC26gXwp2dEb8C1qbBYWNG1XNzDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygqLoArjbAQQXVTrVFKXheFqbGcsdzQiWruJ9vRRNe1dWDrmsGpgkM92dSG9X76eYG5PEwXpBWhPHcBN1suV9zu",
  "key1": "319A5wRWvM4vv8UkEJAPuejyHJJcvHnpwdkpd96wEFdeywipX4jfbARoHQB8aprgDAsiVbd6K99n4gFvrYmTGiLJ",
  "key2": "3WdiWhMpzhFtquZwJzZAcgy97PWwb2iEQyQuDBSnvdPhGR76qkKPnxaghePKq9LFaS68aSPKqfvLBsP8sYJzgCoD",
  "key3": "3EbKgfHgwre6DVLRgJ6WAybvTWAiJfBNgUYMDtny5XQqHCaf7saqEmpMKtNp5aGo4DEEafJ9QsHLRAYQjmLziz6z",
  "key4": "2a61XGtDnkRmiUCRqRBNM5HTdUxr8UFEDxhm8y29Xg1UJchkvH6LaahcqwjYWTzd5rsLNKNc9rCij8SzTrduXuo2",
  "key5": "4ASnrxm9vhjP1prZ8UeMeoaYXmwvoVUQCiMzYFws8xVrrx2ftG4A7174AWAqJkdor7fdKHBz2eaGLD5aVyE3WLze",
  "key6": "2hyZ9DLbYCMKXtmXjZ5FUNNakQCzpBSHmkfTW3eshHrwhXKoFMsRMtHNyeP6K57ecMVgDNSdcyrhS75zMyefXQrW",
  "key7": "21MPs65HYFhcdsRsyb6HeuENWuMVyYkpRLQHzirSAVUhEVfDnRZ1UKBPEb3K9twvtb7UMToscA6PCT2xDPmXyxD2",
  "key8": "3UKVG5aqt48eQqpuMuTu125WSNqbW3fZYRGLRfQXMs8NfgFWnoNai1yLuLNV32r6AXaCgASNEn2sZ7sUGFfNQHVB",
  "key9": "uBiHuuSkGddFieNkXVPQZYzyATDMjUHYjkHt6qD21cAQep71vXSQC5Wnx9BJMhFJ17wGcvovZAcHc4V2MXS3vG8",
  "key10": "5Q3dmv1nst8KJLdHWfe5B8w3qBLXMBFMsUKjymQ63KA1wr2DZBPBQN8YUk3w2BSgpxZo7jV1EBQGeGdpLWfkeAjL",
  "key11": "3u1kbJ4iQ5omwvQnZamrFWQY98ch4Wi3QPLhz1edzv1hH3pUPReMrUR6H1UJ2pZK7B2JA4VD62T9ztfxbQYGELBH",
  "key12": "ZsUHRFCKn8cV5BPzk1FQx6zdF44YhBzSPtC5utT8MqHGdt5Uv4dnmuqqYbz1rYjuxVQwLf62DEt8yGmrMq86uMP",
  "key13": "4zqTFUAGtLmeVo8bhiC68mBT4oj1NbK2YP49KWzuwtoEgkgGkUxU9vsSxVunNaCJnh1Vzar3bSWjLXwtDUuEL2JE",
  "key14": "2ytcr5dCeW5soXJJ76Wnd45QpXD6MMfwfk5EgU5vyF9y55ZeBEeRd3pGhupPsvQRwoJxZ4LwkkEYjPimKAbb3AzY",
  "key15": "34TqA4yH7eCpTUyAXyXLhHZeEjfiTtXUjfnxXiQMCL84bGd2qzB9exFQjVWh7Ai4zg4LL3DSiL6EKtDbrVrx8xst",
  "key16": "cUSBYWHKsCbne3TF9TYzvz71qSwB7xWFcFiCmMQxHrQo1dVpT2WPK4ExSGCCvZtjuqrB4NMicPjpbEpzsQbNuLx",
  "key17": "6617UqCgsYnXyFM9LyFY5sU4rACo2R5yVtHufQyxe7hWNHiswQ58mh638HUFXxzx71wGaXU1JNnXEsZKrgY1nagu",
  "key18": "3RsvyFZ3HcCZb6u7XDVN2vL8WE8w3GuLmrNwXidkaaeTVcxMstk7yHo9my4LKSUReGxz8MdkxLE8wJto7MBb76Mg",
  "key19": "3Ut4YpghVMjyHMM3w6E3HibALsu7yNrBGSnyVDWrBH956ttK3k42qtpg3cHkLgYQMWK3nEjbdQvZjGkq6XyrH3j5",
  "key20": "3SHHAbd3vAjESLnZx6kkosy1i1Vb6Lzo9aq9fotDBUjjGtBjpJcjXeqPGVU1QwtE1Yr4QarcGnYVKAcVC4ZLooxy",
  "key21": "5mtpo3RdoZ3wBEc1fruz9Gc5pty7rTiVTjVptG2uinSWxSWAENcFhw1cEEJwKi82ezMKbg4VhjSiqhZFDwyhcSjU",
  "key22": "BH3rFdckixx3i6SsrkYH4WYrXWaoTak3EmXWyKkGpzTKuMVKfX9qApeh8HngmojtdA1GX1TJKjHqaAbzLZcSZK3",
  "key23": "2iDdfP3TVL6UUFDDNdMTxCAxCMpVgoytjMh5WGLap68un6c42s2MZeTRrqCd9kSfYJhqCoNc4mknzuB9s5mF2dS",
  "key24": "cjCes9gDDvH8MNFf72mJCvpXT9umB4BEQSUMu9wQPaDoMeuShCCxU7EmsZdFCNZKFi9wLJJnuPx276ySBFRD8PN",
  "key25": "4iGxUy79V7fLtkWo3ucu23yBMDDeRvvHBRk18ob8P7FXkCv7MBZXYt9SDfq1wEveUgt1TFgFH4CiGbzDyaaPKMW6",
  "key26": "nhZK5nH7YjsXB6PgpKuiusPfi2wjSyxhUbGV5hDESkr7GhK8y6YqVSzExoeij8QobSoC8UrhYL5KoaT74eFmvhY",
  "key27": "4Yx2ubAtjv3ogVFoZkJg4du7K46nqh4qzZq8s9Ue2A3qCJ3UH9jrAuGdokxEzLfvuEpu7ipM88ppowMASAe9kvns",
  "key28": "4xgNbugardx5fynP8txwyVP3eaYXS8ibNtVQQ3zke6Lx8P9sGrQ4KQSiHHzdsJCxiFpPZ3C4vC1etko6GMpz8z22",
  "key29": "2TNqt5d3C6o4TH7jvVbciv5PLrCJEBxjXRaCpqmE45xQA4k35VUEMgpKd6w56D5k77bqin4U5o9taTKxvSmdcYDh",
  "key30": "3LuaZW6Fzvj3sZVMx1JCb5QoTR1sx7QqL3BFeJRzaKpdawZafX2mmEwemjyMPAyX8AkNm1MzotMciNJaRS675AtD",
  "key31": "3fYfUCZ4wS1Yi8J97pDw9zbBb9wnCbcfeUXKoBfuEn2BtZkgaiYiHZWaf7iFExonREkq67nUhxVi8a2f8Eg7h2ef",
  "key32": "34JS7EjC8Uz9TscrrTo615ZyUCsHZfUR2sBdZ98S6FzxB7BKkWxRvMSkwBAy27eF4knUdQHWbYzKaUKmyeC7hegC",
  "key33": "ci5AANUvqoQhDStr3ihdHDQ42EQtUZVEDtAu6YRMs5FumyQ3NWYyMDCP43mexXZTMvySdLN4bgKpAvd3VF15pN7",
  "key34": "5LuXUE6zP1y5cTDqrYWCYDAMGUx5GMQe7bgJiiKXQmrRsTxnYzHfgh3Kkn65SmhFG5nmPeRB33snjtAqRzCj72S8",
  "key35": "21oumg6hsyvgCLoNZEY68FS9NQPhQeXpopaH9B9mXANn46GfvHMtqAVTKFSqzbpFboMe8r3Yc2uLwz2cBoPvaCYq",
  "key36": "3C23tyxP7aBuDube6yhSnwgzStaMg4BX1xLb5rdYJgyQZLx4N7Sc4Smy5Mf7ZgPyyQ1XrKYkWG385GKEEquQtc8e",
  "key37": "2BB2ZDJyZHu7kTRvj3ERxbCzGKXAAx9CXFGNyRtAzEq45W1mKB6xBenbmfxysFkqm4a98bYnAZ7owQ3f9YEeZYRc",
  "key38": "3h7SAdzg8KzzVuJ3aQnL7ydUpAXbQXZLsyn3dKDcTq9fJSPF6Qa5LHkvZVsUtcMp1ShEbTjcuQQbRWKx3qz7WsT5",
  "key39": "4stmTEkAgo9UAzeoXV31WAux8tB42Kuoef4yB52wajTgWnejFFuvxHMfu9dfD369hH4hE28yzna4xZ7UkBZELk5h",
  "key40": "33PkHa3gd29zbWtaTihynP1SyfTq5EfeDSvCsYYftThUDPcLssSaQTj6ugGy5GZqTZf1TyusSp3eLvUfw7eewjqG",
  "key41": "5eMMmWb13BQJedaSWNm9gzESw8RvScTtKuzXPyhmg4q8Gnt8ZznWKw2GCPY3aBw9UJza6T1YLuwyBYvmyCbZLNpg",
  "key42": "2xWFQQjL93mnevAXsvNzV2Tg1N4HF6nBG8CAMoqjiq23jMCh8ZRcDJXcpgoJv1iAqRNCHzpUM1krEb9EgsTVyaBu",
  "key43": "29ckxM5KyPK3ZWWeg4gty33FR47uFQoKCr36j55nMYQZasSTNrQYpheY3GjvRNxr7wuaoFcQRszUD4i5RP38H7qL",
  "key44": "EFSbtC4m1jhHP6XXnT2Mdq218ELrpyts2HNhKdFQ4xYMVzaHQCtrx55TBQQqYo1T5iYYzicEAnTQNsMw71vR3Ax",
  "key45": "5vc7Q6BVmY9hdy9TaxuXnsUd82kjjJeTmmbnwXN4FM2PUDBWJjhhYAtfziy2QXkXxgpoAFYKDkQUKL9HhPgp1zju",
  "key46": "jPnCpxaVnWY6KU9PkjM34KS66xVKA4vxyNyfexNj5LfDxCx7BzddYsqTUq6GXVjfcN9RdsTzDXqQnJs3ZHieKNT"
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

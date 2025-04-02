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
    "4NC71sc5FxCaB5HHrNc5YH8DmavqTgEwCVvwyhusKFu2HEjGEgRibB7RisSZUpwjHA2atZsxha4V9tA17XU2ycJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQSho4pc3S1iaVLxFPckG1GUQZaShv258dubvSs8C6Nv4BkTisBRWj8KAa7P2KBjMPJxN6jEStuvQZxSLLDW4g3",
  "key1": "5BntZFLidWCr81HiawA87yyaqkzHKB7R61BnNceh3Bqu4PPRGod6SewKz1Ut252cwByqF7gkyRrRXztGFchje6eZ",
  "key2": "5nkNaPtYjWykNXRbNcgUJRVVYyqKr2SP8dyWTtZkZvrepTzJXqbtpWPawYe5jD9kM1FtSiuvhVBURT7dvWpft33f",
  "key3": "464CKc6YaoTQZzLa3jx5RQn2NGMDGuhkpc6qsTEtjPz1sX9ziki5qtXjj3ChFuYzFuf8cAF5Gu9Aew4FCXEi9pq9",
  "key4": "5G9tHpMBakcGz6YYXbeZFGrGq2mL8nsM1u1bdusJhJumRgiYNZUVTruVGriGFjtBRpY7WQH2UgoLKkgqw9XYg4Rd",
  "key5": "5RKX34idXh8GMb97M28doQfMXULtPXXJg6BxyTRJgi8hgvHSxknWw7V7zQ1t7bA1gx1xYW8MkPJsJ4pr6RN8Qjcv",
  "key6": "KqBzx9i8jNVq8Vg2oSia9Um5ZKvxjrAaoXkmXVPiwKfctFxNRU4uXPEB1PrWcU9WCUemapDFc7R7AjMCobq1FRY",
  "key7": "57xiAKLWKAjennqVciqCQbJaaTu2QMfsK9P5ufWkvFviCCbDD5xqAwBp3otD55MfkrFJAvSJrNeczvTb6Ys7Ydyc",
  "key8": "4cLmWKHMQe7uvVcfZAESgqsX3UXXf19r9su55MGsiAxwvALHmmcmSdHyaiSnaK61wPodoLstfcZiCVXxRnB3w9rt",
  "key9": "2bWUXu5xtzdV5WQn5UrQvZC17jKW65CJTpW6VwLHYXRVnjamoU11isvAXTcy9W4idx7gMmbaFc5eAuoRpdgZ8M8n",
  "key10": "h5BJ3TNpKKfPjZF85hHabsYtMF67ux84eoBRgSg9QeSSLvB4Xg7MjcU47kofhE7YqUL9Ydq8nvGNaWvEQ4983Sb",
  "key11": "3VdDu4ZR6swGqTHHfNHzbx3QNrgPM7L1sGXaZRQazG8JkHvGFSiRcvWcpobPKCh2gvVLFoadzcsQHQ2ezYHQhVnR",
  "key12": "2R8aJReKfN79CntwU6YHwu9uDAVM5pvrMrGe7xnS8qokuZjDDK2ubLfcSyurRWzspMiu24VZV6zqqEnfZBB6g3WU",
  "key13": "5EK2sPnbkgfDh8ntQJje5Fn7o2TWfMdt5WygJFAauHNEcVmEf7ocK1fCa2vT9SDNeoWvhjHnXkLQy8Zepw8JLkYs",
  "key14": "3TBVfe8AHTstq6SXLnYZTzQuE5AjUZhqfzwyjY5hjY7avXRrh6DgZ8oGVMoSDrqDAXdyXYYJ2XTgdaidDhhncSKe",
  "key15": "2sgATe6M61pebfgZV1wzBZ2cDkgjhXD5XYjJRCEWu3NEDUa25Cu2t1RKP6rUTdLPmWEAh9KtUFU9XSvha1nk6HRb",
  "key16": "38kxxbn6wqPfKzt4gKHRWsh1igfonnfK6fBvs3j2viiCer6jtheMpqczznvcmEjBLRt7x2o3gG8hdthpuZ6m5rVD",
  "key17": "5nKrtiRbgstg2N1KDJeLijyCXohX4R5BrhTdWYPjDWJeLXpKsMf4unRKS2aU6kVgeMebBh5cjg47bEJgJk15aMt",
  "key18": "4Rm3YtcN7wH9wLGDMCeK9gUNPkGrf3BGKRc6vjxFRvYguBdM7rf82ri9ab31gCaojaYU3enBDJrNQ9RrTeR2naXA",
  "key19": "4RhRGZE3g1c9zSFtRqrnxZpcrJJfQWRZPbjwRnkv5Coz3yykCE9x9mNBzHXkBNWQ9jAhjf6o5rvjkPjdLBPywLuZ",
  "key20": "2wHQetbTZy8e4x82F3GHAgEbycKMWaUBiQ6ugrvmhFoEr2qoEQB6uwhp6gbWUNnZYQGhEHEB9B2vLAzTnjqMiH35",
  "key21": "5m5VsSsmUax6qXwY7MVdv5TQD8KjYcRUUCcczLLKrFAi2ALDQeNqX9itBoZwyLqrAhoUxdfHdFnT7u7one1jDSbG",
  "key22": "zwp5h5vQmcbU2ruoS8NkYLE6Yk5gF18udAc9rk6N1hd7WqF2GTNzAF4vwgiWj8oPfBjefCkEtAFrcC2rhvethGD",
  "key23": "4QD7SD3MGN5MtiBpoAgr1nRX5MKjs8vyq52gcSYp3L9JPh5HGKPdJYjHAdYkQq7xd7L5ZjWxtLEstGbopumz4MXW",
  "key24": "3pv1VEZqFRX92i5ZJ4o6SKpg4GDfYsVYwwUdjZowY4D5MeiGZybSzKJ2Z3ErXJhnZZQVcrtrNTRSfpeUJX6LPeo9",
  "key25": "rRkn4Gutvw4K9pRTJjVuEi1Vv4jKV5ioi3nLGWUKbU1qsqvLc4vwq2bTQxLERg3pRqWFGpWXoVXUVq3fXQnQ2WD",
  "key26": "39Dehhx3DPyhPjzURKSgAdiVLnfraLLBL8HcR6PA7T8MP7ay7DWbcwg7n5LWdmPDsAEib77zyoqjHyrs9krHfGRt",
  "key27": "2P7oeNejhyojgGVRQj2XrhRzg74FbcC2fdSmBVMCzwfgqpvg2bvF3yWQWaWSMiYE168twNXG6phRuwuPeHkmtjr7",
  "key28": "4ej6vwU7k3MFhJcH9TBB4SCSmR1p6531bRm7nHno84ZKFb8BXUPs6FxZ8KGPCUDJ1GAsdiwMBoPRASbhvA9ZwV2d",
  "key29": "5Q55HVfxzydc91Qnzt6Nz2HhpJwNfdatMfgJDKnxTubDfbLmTQNP2hsaDoW7VVncXFXXaTEs3QqKPzvQAy82hv5n",
  "key30": "2dm6QhEPcuHGBm4RaszVqp5w4bMk2KKJXjzybsqXiHdzuic7Rvo968AhsKoqdMjQPhUvjNga9p5PVK8yvxiXJJ8M",
  "key31": "4ZqKB8cqX786jqY7aGHZDyHDdob7qxfEUr98QNNPQehrPUcHHfowNA2cRzAU8WRq1BFb6NFWDNiqqYpUcTLqbcoA",
  "key32": "3yx8zqfHLaeKgXAT86un12oMew6wjRbFRCHrcKfbti6kr4iyncDpLFckFhKabWMwm1QW9vsrA7wZJjWqFrhRcE2Z",
  "key33": "583JK7v8WFnYYvCQKLw8mRzeiVLY7jpcZ2NwRVLKPVYyTFjVMYQfbaQLs1bmsVJ47XYuwu7GbBL7JjbDj7HtLVBF",
  "key34": "67MjsGLtRAs8RBYBvARpnTW9cUkSrSKdrkdb989thYoi85EBrCM66f5MunexqNn7wiFv3XeSB5PMTZnvdMzRnUGM",
  "key35": "2G8nCzwNhxjCVChmmL7NJDmfCXppeVQxAYuRTMCzWtte2guuMNwYt3KuZNp3Gw9TZKHEu7MgUSgnqvJnFHKxdef9",
  "key36": "5eRVirqWQUDQbhh1TvNmELCjPp7Euu7fhdnT2pVfUE9SdjwNtXSgJWhwUaKhpi4hihssPyNp6xbiFhpak1NmFYL5",
  "key37": "29obTKMLhxat7exnN4xWp3HouGx5FpJNDJUKxcRpFb23TpWsnRwbQA8jBWLTnvYRnetBPZu8ofSohuwzmT34A1mC",
  "key38": "3apzfMU2Jro7mCok7W47eEUCCGPgAvaYc6HcHH61XApdGeeEvZfQu1nR6Lj4JZGeY1K5Jw1NUJYvz794zgTVyPR2",
  "key39": "3ktxB2eeSHZUCBCbyFDA2ggJsij1DBajWNcmuusKUqEJe4b9bfUAPHvKqw2XLbwNJZBhZuCUqCN9wE2NTU5n7Wbh",
  "key40": "3ScKYUa7woP7BMz5KnXfXtxNQwU7YS9rXNN82g8yCZoxtu5xyu6nNzJa7mqWMwc7fAHQ89Yk79wgX6nYUSSCJyiT",
  "key41": "22WCSZEPy2dQX3WeULnyUhmKxiFBgvZeSgDprvrVqttTUpmpu7hF5L9UuwQZWJeaz67rQtpKPiYTEYXeSRYyWCLw",
  "key42": "cCJoV5VFaNPqa2usQEePTQJDKUPzz7h1XqBgJmshXgLLPS5BDf3ngojdLTZQjKaiAyms3onF7SntgXtLvbTrrjr",
  "key43": "2fM9M7w1Cp8PDZ7aXYd2LEZdJq4guwb2Fqy1qH2UYJyw38jKMzhTf42Ykpu66juSyfpN1FNdMSLWPw1g7tGA7vdo",
  "key44": "HFYDUFu9fJKn2wFC7TMuWwnEZ4bKwQqJtR86WJWSxB5wKG6iBrkygVxyvjYPhKC3ro147zD9yAjkXmQmBJFJU56",
  "key45": "2QT3UA1UcFBov2fyw1WQNB1sbiDMoJYGxewtwN6pRVnseUcUjF3ytozpvcJpPcaoKzUpq4CBdHdyyp4C2JMpvH4F",
  "key46": "2tvnNXbXZXkC7CEEbm5G8yyp2bQAyCMxK62Dcc71KjCjxmfNZWyRv7e6SSe84pCRcw7o1y7W9MkMe7JEGL37mdJb"
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

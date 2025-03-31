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
    "mwc5VrnsHz4P3KdcZgqu6va6rorFKPWxxxuZEGJK23qoMyHxJgZBYop3UZg45c5S4yKqPGdvb7wH9oEPYPuw2ir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMmHpXsCY3tMFg5SyLscetSV9BggmVaUfdnn6JQFN7AneJzkySvzVuAjgSZbbjNnbbNk8RCBJU8Df2EJrtvNa4s",
  "key1": "2rb4CtENwzhtbHsPu3Zw753ydYZiaje4nPeo5BVXSikgrhpHAjh4TvQKzkDd2p8hLiGunFpNQXmQ3q4N6mRKGecs",
  "key2": "pGNymUEj6tejCC8vZVb2NaKNASyWRqzE3EFCztvQViViwenNiZHYv39xd8ex64GdtgRd69yR1uDVJoQz89r9V9v",
  "key3": "4ujfyRh45SDXe4U5vkcXurwvhfg6cPyQ9UUVRTnp5xiCaPTGng6SAemdRYiFGXE5XZ1jMmQCagAyQhqkfdYZLiEY",
  "key4": "2MzyagZv9t8JP5CUStLFKhJ84TMEATw7mcoaMJWx6dZhx3qfVY72Ne4UJfWvpGEVohsrDfJZs3jj6sRAMT5QF5Z5",
  "key5": "CbVqi5e3phzLZwEc6aCWaiFma1hgGZhymeEeVahXZxur1vNbLES892wDvBRHzqMnChSAKVjPSKx3czB1b3KC1AB",
  "key6": "iWhSnALKtZJ3rYjevWXSW65rveNC5XwdobJttgAZvGs86FPpZLp1biUpTYrtEwUiYxAYv32RXY4oFDG1p1ihwTL",
  "key7": "2eincGAb8WTAF7oeBXcHMuRgP3ELQ5Ct9wut3VUnmyikyXpgNEt1b5bwb7jsNWUMTkzegJkELsxaYavTUfLQNfU2",
  "key8": "3XyQMZ6nZJia4sbTirLivbVh7D1JDw54EE47SbNxMgag3st2c6S6ZUwVS9iFTc9tw2KNdzyCCD28sCZveX72mxSV",
  "key9": "FVJSEpNWNmt7Bjwp6dLfgK8c4vA9mXdX5SVZ6saPQE5oH2QFbhDGzbYKJL5GtD7dbHaeHo9qWXYG99shcbtsWVn",
  "key10": "4WGA2rSaNRxKxiSvhL6YXVy8ZCtrMfvjdn4J1PUZrYKBNxBJRZdCUMswgwUPDB2aBjEL2BbdpU9eAfyuSb5hkHPx",
  "key11": "4aHU6gHSPyasNGN9jCXb37XJzdTtk7qzx8rbMQZ1vQ72mqKyxhLapEKTMS1t2gNNasVKkurQvXTXrQ6rjBfcQEc",
  "key12": "44mqJzzhXNb6f5TSDKrhyfNpUugo1HGtUrhmaswApeV25rrmmzUiD2JaEVxuthCRVbNB13wnJ1WgwecqW5xphkEx",
  "key13": "4Q5P1hqpG9RZeDCycEWkYgKnc7yi2F12hyH6CPhXutaUhakF8BmjcqXc1iyJLoRN9zdDnxb6fAnB4xVa5A8nnK77",
  "key14": "8X5oRc9ryXYaq8Ftz8pHV9uc2savnaddoMbbQii1gov3KBNhyCiZXSLBrwhF7dDaJoBy5NbP7diLvvx5LKKCgrD",
  "key15": "cDrZEhojsgV3rr33rGjbBmi9fa3U7G4etjmwKLVw1XWfpG6qCe8s9Mt343YCTKiShRfuSFH78GfyMmy8MxpsLMw",
  "key16": "5gkEX5xan6AkfgmX6o5jAghDSVyg6N1WbT4zgtDn4NeuUTFzDkyXm6nxPfPJ8qZj8psMLKzfxSpAi2ESGz5K7wu8",
  "key17": "3HNKcvpy6CfHGvRu21RTY61f1YR9RAkyNM68KP5P1V5FjrpH8cAv1MuCtEyt6LckyATjGm1iFxU4gbv1SHtCRheT",
  "key18": "4nqs7cjXreudosFtSdZFDkTeTVqQuLGcDsKidmjwUGqhZob69VnzVLP4rA4i2tuPMEv89F64d3qz2VecaRb5B6kk",
  "key19": "53X15ERabFv1bhUPTLpazpE1KSQ4RZQiWhXBbH7nV3spcudKx3YFWCYkHxTr5h9avMaKrjvfHhbESJaw7tMq3NHr",
  "key20": "35fWHGFbaDD7aej2YvGrV6yH2MXEudujPoGxokFBSoXEyZhkfqak2eUGvMxPTD8Jq8yz4UkGvKdPuEYQ7NMyP5J6",
  "key21": "4qje3iF4AZiPMHf4rx7UtorBYZRAHdEUtsnLWTtjbSSs8sTF4Qc2LH8cjVNYc78q8yveCPLLn4XTeYUozYBY846h",
  "key22": "5ZSQaEZsJBqQbtcBSHfppFdpbaS32HXMMk8gH2qHohKg3MiSJY2hd84ntGCRGsnoKJV26cW9ZCyyavtdCPdoKPE6",
  "key23": "2kyHcRy4H2DEVo2fqM67eATK6y3gbw7MgBabZFy3XGoa6NeGDhMBQfqr5f8twFHkut7GFKsqqCTb2oojWajxCDWV",
  "key24": "2xUSPstjXxBFSguLV8pQzPdNJaKGta55U56qHe2E4at4vNdiY7QfJGZTadbRVQX2hxxsmnw7ggpUKs6FCmbXqRGi",
  "key25": "4j8LRcA2BEekcZWG7d5W2i3SZpDDE45GJAT2363S2zvjz93V1YYSqa5xBdFdr8ZK3GTCst4GKJqVb4VZScpq6T4N",
  "key26": "4dbU3sMoy8kJuAV1gW5PZgRv67R4NzLh328H5zdgGouqZFPKTdchM6dayfziKc2hZ3KoG2PPS9nQKTC72e2ZDxZc",
  "key27": "cJK2SAPd9qZDLJQP2aJZucSpn4TurjkGMhtrWwVS66YrGhJKcM373WCqYL2Z5wCYkaBRBYJV2fvScTvkUAbGQGr",
  "key28": "4xeMpfPhBBGYqzvmHRyiiET9Cjm3zi3fb3P3jMjpSy3uaVWMHXivBnD9ixk8KKuWRTRHGt8J6mcDScYLwDmmQNpL",
  "key29": "5ucUPhu5bWZyMm1uxGLJAN4kDsZFVvDX7bNRhjhxw17JVjXtiE4vMDU1qozZswbWWyD7zzr1PZcmJzfVdAZwgo27",
  "key30": "R53MvD25Ujb92wsGPhSFnhZeF4SCZbf3AjokmrvV64vV98ToqbwyqmRNYvesZavCKcYbddhTQhUFkrAZAQqmV5n",
  "key31": "5TkWb4KKquGLN5ksy3kCFep5c1Bbrr1U7qS9L8awFoyppxnaDSYCctYGzkrJ8hf7HvEpH6C97FwrVARX3tjwu5mM",
  "key32": "2wPXAgTfUW4aSeVLxrEg7ofRHhUFnrsXUqNHRYP5EhxaqCuFJCeDkyEbCAtTWP9Pms5Y2X89zMCK65Cc4U3P61FY",
  "key33": "563vsSTBQWzTqbdrCdDx5Vw6UJWZU5hZVq2zVRXbaBzxLQBGZZLkQUAQd4j14Lv6w7HWJA6tvqnh4JuN8KZAfN26",
  "key34": "5mqA3CfXTyhXZXiUofEnQeZp8RgdPbvCcdKa59YudTqnT7fED9cUcibsMr3ohzVt31qGoCan39qg6H7ce9W67WY8",
  "key35": "3ttcQGUd9aPGhq4MVRoAxTX25t6YCtWCpoZGUzgTkkLEH1JRUi59VHDYP8pLwzqKekim6yaHgdVSdy3y5L6uWEpo",
  "key36": "WxjktEzf4tWs7FfkZaSMnPPKdTB66LgxRXzaphtHv8WxQ8NBRmZ62ZVd4ic7C77awUF42ofQQ4hPrgT2YbJ52VG",
  "key37": "3Uq5MiVErLaNhvhE1M4z3B3Ws7SZeRv9avaVTpfxrkxctQhj36CPmVkfcZnsJBtmFmrj9CQUAJp6vmzDUTjwipJF",
  "key38": "3oaLn6fbDkshqX31d9fMb33umZS2Jecegqg8poMwW2HYa4bsDMNZ1h3B7wPVLQ2EpFhwCw44PjxGxob1ZXK9H78v",
  "key39": "2oi2j2TwsM1rGFeyAFaaefHhXpHeuBHAbWmuzw5gGWLATvP6Z7kD3VgZzs171pCWS15SS9WAF7VnUUbwYU6TD9LZ"
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

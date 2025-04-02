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
    "4AXcqYLDM2HzGXgVQNxutYZqZcMBYkLnxm9NbVR1pVzVqEL7ixAnMHGokqG1GXkmpdfr9upUEsWGnWeozYZLvXG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAsj1VPH2mV3rkm7tTD7QVZeM8JzsNPDKeHXaMbXpfMRK24b1GMQxupWwC7AHcjfscLdfqaojkXGBzJ1Ss4zjkZ",
  "key1": "2EFB74gZcnMgY19uVCP5enYumq2TQGFGiTRFPjUd5ou3f579wEA7nW9eqsDsrJXcHhGqAfqt6KN76RGTBJESTenx",
  "key2": "qR2x4tUGKk6JFdSLhLdkruM9CLM5zMsNBv42zvjUfxAJFhgi1uHLtMi7wANQT5MZavfTP7A39iNXkVR5wAT4ojU",
  "key3": "24W32jJYyKZgsjiJrTYPKwv4sD7empvx2RZC2nFj8EWYPEr7TyJnZCE58NrXppEyr5nCVWQSMU8GwC5yiZV78KYM",
  "key4": "4KTuMpUrdQ1Sm7zuNBZwZZZySW5Hdeab5mabXm2Sd9V9kYgnvgguraG3vFKQygM2Dmh5RQMBea9mgTXMVuEhE9zh",
  "key5": "2C1xGtqHPFM8uGaSBUkw2gyQNFjDm6SQ2yY1Wsr5gJAgx25LevhTmup5kPhJCK4B4ZmPASaTnknhY3WgyswjKtb6",
  "key6": "4jPmmK24XTheoohhVPY2vre5ZK6MW4uLSy3j3RG59M51EnQpzTrsEum8w25L1xXJBADMzz6nq4UAPtFjSzMhJjFp",
  "key7": "3EpAJimj8XyEm6ByhGz1y6n25adu3RZijbRJvdn4ed5JWLpPUAVryH7SpUS8ux1X5UDfLEQg84GAkrYQgrQkJkw8",
  "key8": "p8pPw97h2ZsH8aKQmVKTv7F6LJCznia4KFmiqH9nz4GHTVjwDy98xaiSM9QFTQ8DcWpFkoAfa5waenLiKvvftMA",
  "key9": "3W4oVTgfsGZzRKbGyPC2Woyh9NYJzzaJenPnwbt2sMgzwY9YDZEeLsujE9rB6mvkq5gQ3Vhstmb4Akbxcm5Q4rzR",
  "key10": "4yy5o8HMFNQ6ZqFCaiDAQTaWQW71Ahc8RMyT1QuNfzSMP5j1nRjoFoejycsVyYok72PebuH3ttEecjjFmQwwL2pR",
  "key11": "5G3wgdJjXUM1P6JMuBnDJ9D1VHiq5qoMt4nDv7SuUNzLjs8kjzZB8sE1Uk8zF2guwnMCT8FZwSd93fNXMZTHC9vc",
  "key12": "4CZpkeWqqJ46xcgVyKX6ZUBreuTh1QH12Q3dPv4U9u3UVX93du6PrY93mSd5EmzZepXo1n5hXRWjASyC6egEyV8Y",
  "key13": "2sikaGYPNbCWZp6Hzs97c14P7dAG6HHrAndetKpNSejBwUUq2FrpeQRkU2z5BoUiix8GDkJvygbVdrwbyN9RQHPs",
  "key14": "3Z2EBk6HiqQvua4MsFBefU2Q1FfZj89gmgJHEP955WupTMaKQo3XRFRPJnihABHejeXHADxw1p8KUEDC3Uvo7QjZ",
  "key15": "2bZpdSiJw7fxptiQLDpQ2WG8pRAM5REEqc2FFUNHB5K6tLcgjRihEjqsVFiiu8HxtZXqoKjz6YFqpqbCXyGpvHH7",
  "key16": "8oQ9uauP7nsm9NunD5W248oMR3FDhmW6qj9ThvtnDYLYvEnjrToBj6CCoJWFGRkdeP9gQHXc2xvGsWgh8JpMq67",
  "key17": "4aD34ZUguGVviSgDPUUKqd1K3xN3y4ih4auCVXWxEFmh2o7px84vFbj8obtbug7xQRxuL2EkhxaR8uMw9ZFyJ5km",
  "key18": "5LTBYufdGjFpdA7AHwiDMCo2vraVAtHwA9MmdDbnhFLdMbRf3BJnoGHTkVUkgNSvDJ1h4fiKsLjXUAY35KC84rUK",
  "key19": "2ymTFdRZFDfxGssovRV8VJ2qBqDLp1DPRtRNdDVuToLS7cG4Ki6JQCNaXEhtbW5GzAjMyK5j2FpWcWdyMHqU6AnW",
  "key20": "4GyZiihxTHmHyn4yMaCyt4pW2VwzFHgX1jyzxA3jAxnB3RcmrAwqX1y8TJ5XSVEH8RrfUy2nRMhacrWTKbUrH76a",
  "key21": "5szY89YJTn91GF2CqWexBkkmfzr5MFs1JH4fPNUz91qrg7JpR4yujTAFgsiWxRK8pWkLwaZZjvrRCqFUHvb7DbDy",
  "key22": "3gkDb3QtkcM69wVnvih3CGLatKaDiQejLt2XgmrNkYxgPL7373u43Tkk1CQnhCxUvhvf7BbMdG5mrvzp3ttuza9i",
  "key23": "29dKFQbMqo7JxJXQ7vnovtq8fDjfhnKKFoyJqaBwtt2cphV8DTBd51mDdPUW1ww1JeVBk1wZJ5wLcCH3KaFqSt4t",
  "key24": "5oyS15pe7xFZ2QdYooktGstpAusaQ7ZjuvE637dqLdKP22cGS1F21wvSAwHLrbkJBqQifGqcp4KSduTTxpgXzgqs",
  "key25": "46Ahs7K8AyrganghYYiRZXS1NQRL8qVEW89pLjcJu8KB6pCPvKqBwoooniTo1FNAucMw61kQ9DZz3RXStomhnpU3",
  "key26": "4LoTwrpfQ5Uv6gwKYrGoS2F8ss1iiCAC4QSAgm5vGNkun2rBgnESCMnw9W1KWHZTPVCD7QXwtQPRSpjzi6znyHGF",
  "key27": "2rG4auWHschLYQXDFCoG9iL7z543GDrGj66F1kcBe9bFPK8PNAKU1EZbzARZJE5GYRHNciAhbnpn3eoyw8TZNJky",
  "key28": "TXoxewcXTKUh6Ju7TtTWGd6MBt3mnJaaF8b28bhyJQezy3oajHdQ12Z5bJy4o3Aw9r5ecq353jHFFkPn1z88TRP",
  "key29": "JoWHTCAq91h74AfpVGvBTGwwZVsDDq2S4S164zbRtc4ngpoYAyiGr7FhkS2cpX15uGGBE5J2fRPC5NK8jKpJiPw",
  "key30": "2i483CFSBByoQ47HLTfvPfgHjioJJHRYt2NEt7YtWAL6FFxCSBhCzK2W566ZavGtuHp6szScdjY8wC6VPh5oT2wT",
  "key31": "5yHGJCAwZ2b4kMoiW5NePLpQyDevmWGVSz6ELPiGYmimfVwVKS9X7qubDuzNHGbChK9ipTpBGAUSKGDZTvxZM44e",
  "key32": "5GY39cDUQUixD8MoXEk6Nrqc6esmr4qKFXe4sgZMf4FtQchByM8gt5b7Ev1THw1fNEMyZDrddLX61PxD5Q8GECvv",
  "key33": "2LbPFQCmWwfJ2WD2WQJYT6TRyjTSye6GsKtFKGaVnGMVRUhkwL2ka86oQS4f59K82vzEwzVEaJYcV7ak7vdqSwqJ",
  "key34": "2PCiAACjKjyo5yshGU4ZS275z1fS2UvELgrN8UoNd24rrJ2UvZeQA7c7BFd5CCp8SYMiwSvfBj1WgYcaKXPYE6gk",
  "key35": "5eDAqchg6djJnAFHgzE7dfTPynUeSe2mNseFQnUoGP8t88JsfGj2UzcS9Qv2v44uQePPNRXrwA93gir7uUbHfsam",
  "key36": "3kFHFQL3YHhFr8ZAiXnCLAwh3BxGFw92GULVc8iWYQmoS6uQQs2KNncLSV6YmxiriYuvjwCafyAcaPutH8xWCVWn",
  "key37": "3mG3ZqbqssWYciCVaPLd2KzQtU1SKCMLUqDqeUVLbCgqg2iZUJDTyLMt3N7UPwQYCK9tMtiWUbH63on75PBUz8vn",
  "key38": "5SGKirq6e1gAB5JiNsywGRatsNWq6RZPDjWqrChVmZt2eB27SKupSSnz3fqtyrmQ3vctZaYGir1o6wRVdnGHfMtx",
  "key39": "5Pfk4fXdBFaSYshwGSLK1j93txca5p4gKRuGZYiFe8ku4ni4ZJMafxCXT1emZiJYeRQMpDSKKq7cLUuaXqToYKMn",
  "key40": "vWaqTiSJfxkDCcHGMHrHjph8oGQndr88hyuDeYVvm7w1xjrZwTdpNpcPbmjJfQgRq9VxyRfW8C8kRiH9UH8MsDD",
  "key41": "3wSKj63whXkkG6sah3bQaLAJRg78NwfAmKxmLgrehrpfz28CVaCZkktzejL67v9mgJEcT2XvzCEfrfz1cfS455rj",
  "key42": "3MYm8EgMYf84qrmWBuLSWR4kv44STHYMHvEU66zgZmxHnU6beauXwh4NWppDpxEMigPDFcdjdkQHYTsPcA4gxVtY",
  "key43": "3evCkoMLFLJZCZSCQ6q6BPZK3WcyHPKnwgWQJRz44bL6mr5f4tg1fMQwGU2HF2gpJyBvMTARkef88zyGcxmmVGFU",
  "key44": "5Bc3amkLwk4H6Nknpc3NnJvaWCrVfRW9dHka1SWgpjZcNE64pit7mPzxBwQ9pNDyHgHAAnCnJuaqLch2vvQpTGdU",
  "key45": "P4C1c8GcBvS88XxaRCjj3hayEyvLCXf5JU1gqHtqRf7kGNWH2xYp5k5Pce58EVR4MRgg4B9UCRSYPa9W8ESoeY2",
  "key46": "3VhxVdMRRBMztK3AmkhrJhH8Tbw5SfiJgG76QfLk6QPR6Ldtfpk5jEFdPYpSnR8CFjxDf3cQ3ZjSjHX7JhbYa7ye",
  "key47": "jvaq97ivzTrsL1dLMAsVZC6dyijySzL8Bo1riSoDx5ZnQh6aX9425VFzFb2MPJZ7BjEx5WLm7RLYMupG7LWs9us",
  "key48": "3mbM8cB6PeVHsGe4GWRQtcCYEy8p9mmeZNE8VF9yqgjCH6qWQoqAgBQczD4C5LPQYqj9oZgFbsPgZb32HoJxR6m8",
  "key49": "4jXiW8iNf3X1jAAyvuFxrUsRNmyZ9ACq7HQ94vyAtMqiNfkXH3Q6f1UPcaHNiAr6R1bLxH7YKa2m97mSDXyJaTX1"
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

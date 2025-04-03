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
    "xUXaUzgTuNCCYkz4Ba98inRSvDorb7PqpvM9nT1MomSvmNSmdoZjN3fUaBH3X9xR18V4djdJVkio4b8zzo8hmUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hwmR48SGcVVJQurrAQsduLHYJmTa7NJwVZyB1gqj2XEzxswG87PVc4HKwwAMZNfAwr3sseKLvgwvojYMzYcHZZ5",
  "key1": "2r56z9eP9pafdqKadueLcRs2AFvCioyncHUbNGgN3vRk7GsaY2ypmev9sKgP45H6tWSKQuXBkHUiWN795C6FKV3y",
  "key2": "2V2L8CMte2Dx2J4UyoCV2R5wwH2VthYKWYFjMuaMbZUkigbVjNaE6f1LJZ5v1sCjKsmCaFpuuuk6UfXVCdRKfJyR",
  "key3": "2yQ9Nb27cXRPfi56EsCv1tXyWkTjyzMgRTnALy5H6yPj6HLhVdLhMgfJXWUwMgHSQtB8ojepL7RvVioq5MtmvBU2",
  "key4": "5T7unXboNZJaARaXwJPhR6HLXnMmaVNsPfZYZiyWX9WGP8pzkYfa3QdaACXTfWw5vXzMpViwXLmmA5KQj5yqPMQq",
  "key5": "4hGheY7UhMZTVuuPbiufiV4cjria4fnw87VyCSDB1zCT61JmKJpkrv6N2VGSGji9oZ2cx6SWsQ5TbpPj4QtQaJy1",
  "key6": "4tsUa25peveC1JAKz82MH8T4ALrQ5dvxk7ws88F7BdrZ7wwcJdiHsctgavBUwd4S3bnoKzJfvfghVj7LTFucdtvj",
  "key7": "5zypggTfLqVY8qZEtfe3dezxh4f5YEFYfxsafSMaVKRD4xnP62eNdoTtWt8za2ZiUwCUcdiyeXWqSkjXHH34413m",
  "key8": "5p6Cua6WLFrJPFRcBMcrMYNWGn5ZBUcFcFWpVampf1gcdk667T7vYnHwHGs48VuoBhvye15YwGKFiZqNbN1FdGz9",
  "key9": "E3FtxAjeDRqTA3dyKc7RZxpUv2KRSxVYCmFjcgaTuT84Q7bGBsh5zvTNBpW4pWx8QR8UZ9oghwD8Gn7e9odCFz6",
  "key10": "5vHedtYe8hx9b2g5WJMAkmUiisXFT4CJCqajHqKEhTnTtKG2PPod2oxdyMkexDk2quGXAYVgSoiP3nqJcmpcoytP",
  "key11": "4Qutj86RJFu2K6rdxbVZw4EYrovVjRsZBJQAsKG5MpQKww5PbpKHSjQ8LWiGbbvgKAQ7yHYnPx3ZhHCn1umNU6yy",
  "key12": "5JgrBgagCiqpsUKkShGFBQisJwsYiKKzUmbJgWofLizTU23cARwDXAoQBb5215q8wqKkmRuy3kUALMbKh97gVtEP",
  "key13": "51apSMLMxDKwC3tgr4HKYk3gPnNeCHPq3LVsK3iRVGiv3M3RUGiEpcvXnkX8LJiNRFx8PzUB1BybzERs1yj5i7Wf",
  "key14": "4YiZiNAPN3FXdU9jeeYmtWw4dgdtpGmz5e9gjMgjjUjVT4ZxqDtGA9XtAvKh3CvomtG8QcnY7S5mHzAP1zznQBfJ",
  "key15": "2xqjdYfb6KzdgbG8KWjYaEURSXhUPUrmVzuMqFKpn9amwVeQ87Zy7aSgqNywFEvoLeXfYyf1NE7TM9uEPKqXWeVq",
  "key16": "2kkQnDqXPqN1x9UvBkBTyjwc2ag4Hjzo7Xn2EBXU8EPNgiiGnLFwK1ALFRjz2NQjwC7BU88363XJuSwk17cZ731S",
  "key17": "2xe2urptqbNDC6Kc7xmEatdfe7BuAZhZfdKcXKWxTsrRu8QysmqWYhvwb55YEjBrcXgJWgtA2RbZyoid4WmRGeuM",
  "key18": "128NrQWcfPp5yeTc5nAsL4LUYfiUq9fgJTqVWcnTvV3k1Pcntw37XKgaaK8KTLSNmA1GGktVGqiattk5pCQ4LhuM",
  "key19": "2N5PbAZHeLrPoHD9Hv4Fw38hDahrWjBCDSUBYatUZqB51J7b1TZ171eQULWRTpAHLhcWJf2zEiMQVNakimHcL3gB",
  "key20": "3zSaQYkkYahFYV5LpUomDqfXPL397crhvXhdx4SZsXuDgSefuBsaWCBZw3WWkCa3L2z61p5vDRHY43qNByehipF2",
  "key21": "AC5gfPuhRtkZ9mXVntb4ZwXoYMg4gTsV3TCRXoT5eZxCFWvG9SoJeCta52bKH71mtPaQXMRJ33q9fPhXEb5wJWg",
  "key22": "2Vkwrsedji2HyyJ51prNgV2Xaxz5smcsMQxAGFajuxzLKwDHWXwuYD3us1a3CD5cq3msmxbVLuWkGWK4cxyi9Avx",
  "key23": "4EeqcrUzgNji2SdGk9SfpAsiXttyYQ387AacwHxGfepDBSqsmJqqeTavcCnMov1pkMCaytEbpJxq3vBB5kKWnR6j",
  "key24": "4P2V5FTauSneUg1RZvLWJcVPxqogEcGsDERNwdLVS2MUoT1uXt3WcqVHBr3WZfzvZZdjzbVFFFs1ag6JPoBwLiPH",
  "key25": "2zhDXG64J9xtefZWP7t454JJWcD516M62FvfBASshfrYKtWKJUsH1CrTvTdMWnveNzYjDZQpy8vcS4sbSWND2mnG",
  "key26": "4G2yUt89KkLPFC6g6jXybKRZ4KTaohNXXVBjp3YxMG7ZWUhjzLpnVJdGe9vVxmXfkQ2YBj31rYU7n8gXsMT1Wsjf",
  "key27": "4jpCd8fDEasmuSsCT4XwSBN76MVVunt4Lnbfg9zS2mCVZcrXGCvzoTmU3c4Mg3ceukJatht5syCmFeS2JSeYujKr",
  "key28": "36AH4WrN9PxuqSNM6UySrJxHhoE7ZaHAepA2ZxJursBC8SHLnF6S8p1HAcfziRHeoUxZpsmpUbTif6dJvKHBpinv",
  "key29": "4KppA7ycV569DUfwqpk3s8fEh9iJwJPhLEmWio8ZLd9acRQvzJxjcCPvzuzkjVzAVcrDpx7FWa9goaVrXdoUuY2i",
  "key30": "3NiqkwxwzqPNpHb1z4icN6LYUxUhzaC4zHiZpweF9tuiBFc3TdVYTPMjY2wmr4KEfR1RggetDBaWnxYwY8ixtPeH",
  "key31": "3Zfcs2XQeggxWTrRqtue7LwmjDdLT3rSZUtSAqfgx69ffwYJenKLCu9TKxA6eTj8p4GbHZLrirubLzgsUbUSjpdb",
  "key32": "42HULfVZ52SgBj73SexUmaSN6QjHpRQmnh2RKmUQaxwgutPATqXJbmhdvVXfjYMC5y6D4kjHmDGhKbMSffq2DvVQ",
  "key33": "hytKnEPXg5VrKFpraPYjQQdKuAzWVSbtj13CWFPP5SQ1mjnFhSjdjZ7oVFD4CP7guRsnD7hyqsUkcsRJC6MxETo",
  "key34": "34ScKDotvbFRdSAqcsWbBt6xEBMr6bT7rLsaHppYtgtcX4PdHvjmtKWUt991amCSvSxyyAGAVUYKbH1nKBvbqTAK",
  "key35": "5JYiUvTZtw3GdHoRNXzB3SBjomkWihtKiAvJLQH9RZBBgCcivWJvZ7TRMUhDc3XUaLxVMRWzGE69yk1HSuu9Uch",
  "key36": "K8ah97B9JB4iBuNUc11umetU5aCLcceXgU9oebaZkTkKUAondwQWsty8ZtVKFbdxdNpGTciPeMbbJeeTuVAJBo9",
  "key37": "3eM3MiKpFvQqeEx5dFD6T93sW52uH1cuUnHWzYBD4BU4ji5rgr9iCpXvW9qKgxLSjKVcn23ENFM1FXDqeprFmXaQ",
  "key38": "59FAsoWZNbYcJFqZQnmiQcyWUFKsGvDywG9NTBTxGis48BuvEYNKJjPGXWjYGj2s9312UudeJKqX6gWfv2ibtRqR",
  "key39": "2N9qXNZ4ANdUPxouYuk4uXZajwx8H3L3KbBvwzKLz7DeCZpfrncesNwgzXihLMiWNpnEEjw8mEy6UCd2BqGowQKj",
  "key40": "4CHcC1QJtuFKVmLCGNrpdaCPqUayFFBaUNWQcAGFRY82gaVUyEUqu6MsApjzwYrVTJkxXGREcZUGVtFLM647ALcS",
  "key41": "47H717Vit4mYqyXK3PDSbXHfj3wAu2wVMsf5qGPNn1xkmYNAruiazpQEEAU2VLU6Gt1pJmET2YrQxbdoaCHmeZDJ",
  "key42": "24Q4Jpe5NrDteVbQYFZJVUA4BZXUkdxiZw289kUsvH9Gcs4WBXUQCj4VGrAjjKvwzUsET7K5BV6WwdHVbw8SJKgY",
  "key43": "ZBF56MVMXxSYnHsu8MYzj9WCm5ABtYTLKC6Eg1H6LSf3dgbKDCHyjWKWcsff3JWd5mAsi419Geiifjw63U1KFKF",
  "key44": "ZXY6pVwxa5yaWEAx89tkDukwYiWpc9jfqtHezZXU7Rg1zZLAMfzvEXBna2ZeEvpU5RtAkPQY1yuTMFZzQXdfPgM",
  "key45": "4V4prg1eHQwT945Qgeu3JHjYAm3ELaX6N4Aeavm3vPsKDdYfMExa9SXU7gAfFbenkSzdX5tXa1V6B8JuHbeb1UQN",
  "key46": "4quMUD21fVY6TEMQ2FVwwGa15CaMKu3UQjXeHVUr43ysbUmFjtQqssbZLvFDEbvjmwhjeNXcXP7vS2p4jTrxCkJ5",
  "key47": "U793rEm7hXysP9bG4oyNwEgJ95NC77T4Q2igu7rsmzHuC875Ag5Xuox69F9LAnAipEcbuyJFpGwphUa4r9Aw3Jm",
  "key48": "5ddGMGbMkzH9KFgPEqQezjt8bpGnVDD4tWGMfSWMcHCqmZpApNy6TFjTRfKP6CZPNw3ZkvP8Mb7bZx73bfUWD9p5",
  "key49": "57aLTXb1BVbvjuLHcpCkFZJTLPvCwd3URDp4hhxHVWpMx4qiEw5mwefRQQSh3RHEeLHKAS1KUEEu8cja41SrXxPe"
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

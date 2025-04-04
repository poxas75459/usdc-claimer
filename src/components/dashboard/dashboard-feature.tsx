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
    "mnV97MFqZwBZgNf6hRnZcFxhYGQ39rXHMuWcMedSdw5HBMYu1ELTy1ksQdkYqD4yFsgFKr2cdSxr4fFGS5ubU6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xKz9MZHDVNDNwCVWFZXBv6p6iG8uaRLHSMZLceuV9aQSK2dc6rJTm5cT9r8EfnRd7sBqu7V5sApxqmyfh5TzJBY",
  "key1": "2XgJJfGvxWb9zB93h7yHgTx3RAz4xtgcWtnVLMapPCuoXgBZHwFE3pDJVCCNqsJqVQ4kTp5zdpxwcmA1satEsRLi",
  "key2": "5dJEt5zQzEVuyooszX7XanE7374m7rpRiupNJyrBXmSrYEaRYFBJz9Vpepx8aepwtFV8RqfXdeyuQ6EhxeutbJqa",
  "key3": "27bvV9G8TE9hbwe6PTgY6RBi6zqDsoG57Lf4kKCKaKas58nRSK6NAM9u2jp6DDgGtnTnDyCgQKAXTs6QZWR7kXRx",
  "key4": "9hcSpZtr3HRJWTiPPLqPfnEiwud3iWkC5ejdXnjiemEN9CE16c4wkPgzZVks2sqafa11wme23boH9WtuJRNASNN",
  "key5": "2zhCcWdxEzsxZGE3UnCeFNew1yXYrzHTnLYWe1uHo4uM8x3cnBkhCZCwWuyhqQjrV69EQ1aGmFzJ8deL5Y1SpPvP",
  "key6": "5ZAsM8syt98w5L8w67WEViuAQVe5yzwaVPJ5fTwvY59nJTGmkZJg3ce8op7vtXGD1YnEE7otmUCqx85yvenQ7wsM",
  "key7": "kTBVw9PxpaivM5iP3kN3PhF59RxSu1SbcWpuBfMj9y93RzuBSpiHP9iZNeoqKmphyFAbB3g65rs7rdowth5Q33L",
  "key8": "2Ac4mfq8QUXmKbzU3y9mi9sapkVeyYd1J4XKCHgS3hbMfxrFhH82Haj51jZMoAaDqEEv41urxVDya31Ry8Eve55g",
  "key9": "4w3sJ8qqruJ1NGPiYdTxXfh7UA6Jo3HyhwyQ5dzRTUJBddKiQQDSWHzEhbfC5rXs3iHoAAbARXkixbK7BAYKwkC8",
  "key10": "24z35L3wFTMxp9csdBZDym9W6Trsvr3ah59a9kTLzaSeavjZ9igjmqSbVQRyS2behVLDS3h6UVQ4zvPmtuMdJXmF",
  "key11": "31iyMjak2Z7kUk8qNcDfcRrx3AT7L7FMnCzuLAfPPThd3Xaeha5PgxKr2M7F5yLS2Rr6KD53Rsj74QL5WoCEP3md",
  "key12": "2BTSGW151EUeQabd977pVhaAFrUZAWbcaVTzaVGHPB6Yn8vWGyoHa5tgB74yV9G2N8DCAkvNN8FZ2Uo9e4wwEb3h",
  "key13": "4NCSsRfS3V8wiYMhbWLP4YsS1CaMNiuzUszJccyoe9eripbcjJxxv9Y5QW2VqtzR2HqFTxBHemTFyHL5kXmUPWwe",
  "key14": "4Nv6mgkepf3mMnkT9B7m4k1ucJdyuEnDKo6yzE3htXpLK3SYbNpBGsc5bxDiLFfKb17Y5aRTp7CsPFLFVw9es7Hk",
  "key15": "4ESweNP59JMmsJqdFcP38KLT7ifYfckyrna4wKFd1S8e46xwqX9QY1JJHxuQAx9cQd8QBoTFUNPMCmGB86X8R9aq",
  "key16": "26MJ2FBqaPP7XQAq719u6jGhbQKsbSTf1HtXKcLDJnGxvPP1hS8SU6Nj1rkb93ZzieYq6vxP8y7PErXN7BvTUGaf",
  "key17": "3EhBxDSfr4iiKk5QnC2xQN1wu5cPjBpmFobnAsoQ82uofDcYyyoYLUNUfU61rujt9Cz2q9aAy4CiHt2tDwy2v152",
  "key18": "25ob4LGcN36D4Bnn1g9ffjUEDwHN8EyoYNgD3SaKuJQDeoGNdaVCiMkvNudseMpJtWFxJQi7k44AKS2AVF397W7R",
  "key19": "3jFPnH6LWkKvyamPuwK82Wu4tgGQzqzmiRJiKaUQExbTb2qa7B3mmqe1E5pFmNssBQyhaiFGjZt73Z4NhMeSUAuB",
  "key20": "3KaXmZEnRhFNF7MX4oGkBCimTxm1owFTzdjqhttET7DA2nYZHwPYKzpRRLRd7DP1cBb1WoxCXurujkf5LpudbqQe",
  "key21": "2v7f7M62s1XiQoeNyksdrU3JW2zo5BcqVVh8n7pyap421RmQExfLTLBkQEefoeKT9hvihJqN5xfodtLLJDCrkPQ6",
  "key22": "Xk3zdZYp3kpqfTeTuhRLDJWrcKG9z5sTRRoXd2c9aweqiWuw7yBPUyUVxZEN4Ekbe8BBaPkkZnoRYAhXtZfzcuU",
  "key23": "3XEFJTSRQDzzxhxybX8XcxWe9LyxRsGk8GwF9kKp6DFcLTbSfk34xpkxVLLMo1BFKipkMywyhQgSEXwkYP7Vi42o",
  "key24": "4NYBExJsfxfVyibTxSLBktcQwqfLUZsuGaqn1fzfvttFFWV4MUW1LohTtGagaHDnFPY7pf1PufgHWuuCuQRihDh7",
  "key25": "5YgAeb5JkjudLv1rpci6kZguodeTPbvFN2QWKnzabto45oMKpwGuvf5bGbqYV5r4YfctChVbs5B4BtMb3ZHDtmbW",
  "key26": "u8ftrF6ZWXdnzGcVAhizanbhAz7w6gAivBRsHM6nsVJKMxTtF1f5T5WkDGpWn9v9VMyhXEQRtvQtDwJvdkwFGFZ",
  "key27": "38Qe7bWnXFtAqEELq5NwAsyweeSH45RbfQ22dyqigqoPPaVGq3soTEe2psz2vCWs2JzUdDwrxz4pHEMsX4KryYHR",
  "key28": "2P8NdsxJJ4vRfwjy59jwZT7DRSkgpEoditKGQF3F3NDxrDrcYUt9BZ3d6Ktg3VUN8vFW631wqPMTJjiBr4XzSfym",
  "key29": "3DXEFeaVTvTucMj51nokEgUCoGQWMKMpe14jkpXSoSaqAuE2un3qFETUNKwkspGANdtpoFA3gpkRguUZQjU1VMtq",
  "key30": "5ozmVorTiB8EvdK93w6Anjk17jMyncV7drE4LZq9YRiFnymYjEffPDHaEF83JAy4MsE68HfftQ5mQqVthz7yMGdC",
  "key31": "WQSoGCcHEfhq1pJDUk5pB3FwParx8wBUrKMSLGNGNkUyaQqq5vkUEn8annsx6xdrSoQJE7YvEuRYzMhNHyBbUjK",
  "key32": "5hZ2R1K3nPFWntDquzd31v2FbqvzZ9jPnE8AViKb4WH6jS1HpkGcZGm2zS31zUNqhHLQNVnQZWuiGrmvegNNw8RV",
  "key33": "AT4J5GT8SgCK7wj1F6Mw4QkpTZ5WJhB5MVSmzuN86CLbqPemvnXPjcg7oJF7uYYBQisAtaXdgzV88goteRFng1V",
  "key34": "4CtkVMyJ2vfMAD1eJ3otwjSsi6sRAU8SsAcpHmDjp3TQ3haZvWNZNiHn8KmhxssE8Q7n6L8FRFFAHG5Rc5DECP9u",
  "key35": "1CUyzfaRAitKP4DAp4gLzt5Byjt8xRLmy1LBFECk8qu58t1cE6qXebGJWTa5bJAbxhEfoUozbDu69QD9e1prtYK",
  "key36": "4EtSCvS4chwFQ8Gc7T1WZ2qPhR7q6BffuGjcKianc9B7HuS9C1XdWBTBioXeqskvitXPoSos9X5nfkEkoKEwVZB1",
  "key37": "4Y47YiHLd135spAsTLQ7DsbCxbZDxeUZwYajCL5FYkrfe9NwtYc2iHrp12Kzp8Q2j86aMUBXvE8AbyH8kn36WQvx",
  "key38": "cZBjvpgLS8TatQeXvZcPDfUeWoW8enx4ukv4cnBeSqLu8u4FUNuLRaeB9gHBcwAKVBvUVaU41rWr55hwPUwyQ35",
  "key39": "5KmEMgWkV8Xf9NtWTJhsJXoGw3uRd2B9WdJ6fKkJBf3YJVoZYqDQgGxicye1y3TxPrM43KXWxjJur68xemcJQF2u",
  "key40": "3AZYhoVBVS9qhSDoJ6hphgbmdbVAMiU6A41xvb2ebYzZzWGcfMCcPRT4nfhEM4S5AN4trLwzikHYQL3aG7xgq3Jt",
  "key41": "4MZb79EZktCtoxdxzfDdDKJ3CBf2pfa8qBk8LL7ZKzn8kiBh95Ac3yjSZsfjYPtdVktyE8oi6XjnGxhpbUS55gv4",
  "key42": "3EpwgHYzuh1MddEaypT6RYuw9txaXAKoEnqC4ivJv96W5xpBn2EHaUCd2CmXL93rhcgoePyt9oqmRdLt7rc4P9Ke",
  "key43": "5x46MgWGsu3vVCcdYrTPcZKkRyE9zcsYBt6ZRYNNmF1aZD3CoPJC1nzUsm3VFsvBxZfvisHEzAtxVjz6oEWgzCJH",
  "key44": "2HaB6ximAbk2Me7J5Ves9LoE2v4tL1NFkq3LfVL7bdph4wf3btg24ggRa99dEYUUxPRCwcmZXAh96VBRp45wnQQJ",
  "key45": "2umcZZtcd4gGyYjsakjU7dXuRyqhQorxLvA8GQWyy8iFBQiMrdcm1fxgBT6rZqkMxxJsFqDP4rfQgAvDh8xKgJx8",
  "key46": "4s8Jw1LfN3a1LX46VDwQzz4VeHsngeWWwyaerzLEe28HbAkNiAJ1k76VqDB7rxDx7ZHHL4cgUNRVW8mS5gwPYpTT",
  "key47": "4huyKQCpoeiqMPgqeK6ZsNogoVz8hsPFmSZpcLCqyUPbTihan3WKHy8PrWrMbfRKrzWhVCJUeYyzFhUgMnktFEUu"
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

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
    "2Jw832Y32owJK5EcFLEnhcZBUMS1yc1CWiWuAnS1RmXa1RhcQL1pW7WduXmcGditkFmX4WgwdcTeKpcHqg2LUZah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k6K4E5psPnPYQreqj9j1JRvZK1DpCCpuMvYXubSs7QzEeea3TXPfCGCrL8JcCsfJdAYf5DGqHdoDLShQzhZuQz2",
  "key1": "V4yGSPZTaVwRYN1FA88yJwdkKwEcd9BeGf8oMbapEymVtsxFUchSkLPbQg2cmWqU9AXZq8ipzzPDQHSygFv1fAq",
  "key2": "4QdRaw6R6BbuWZofebdCFSNbYFYJqXtLh2dDg7fCJsoCNH2mksVvAG8NQrYP2sQdaf1V1A8Qcisef5sJZER2TysG",
  "key3": "2cwPSimi5ZM8TTac71fie23EfneeGBVTc5soARM797BYwSLqsBfzU2gtWGuPVzizCoVMcPM6CRjEPwtibTPw1M7L",
  "key4": "5PZwXgrcnq2T6jfwj6aFfJVJUCbBfxzCyJbjm6b2Ct6rSU7DLjjXtkPqTGwvDDcTWwDjA9QVcgRPQNxxrNvm5XA8",
  "key5": "5v8WVLRg9cSSg6Qs4ew8M5BpDRp1np52EZtTL59qCd8Dnd9vFLph3ug8SkkoZufXs7VpbTKUcTCn72uAAdrGkq79",
  "key6": "33NebzRJGL96VHCNRDWSeXuovPjGfqM8tYYV8baisW129CiekZc82iED6UdtaqoD23c3YYxdYyGqvUh2Sqc33sFR",
  "key7": "4mkAqEEyn2ap6Df5fKRZicEP3x5ae6K4rcVVMgzsXaNHHTMBkPmZxbwarMwhdXALiopiLzLPhbPKb79yAB3r5MQy",
  "key8": "Fahtn4zCww3WaMB66CjruDroCeShgYgNazqNTEcL3WV93hgofuqQCSNPHvFEzKbiuHgNCcUP6Tog4vLAg8mv4mp",
  "key9": "2jnQLg4R9KHa6FgnDJ4MRu6oupejqE5qr4VWAgbr1BdLxJmCGRqP9Sfi6x1ibvWvbyaFUcBHCDriLNSLSktfozzj",
  "key10": "3UM9Ut4TceX3XMWYdnsLz5P6kfQd9A3vd82Qjx6fUWnnTwZURpZ6dfkEn8cH3ZRQ6zc335hg6gAFAQeRAc5rNXeN",
  "key11": "qxZpLLXqnY9hd5cMje2RnJmqej2ib9n4GM6oiJexHGiAfSaCRk9tqtmD1BXDDoow6tDWxSi9ZivdKRNxbmQNKTA",
  "key12": "5cKHYf6558ikyMcsBYYvvScWPzMSzfdnExxNpQBnTCufaEXT7KGe8ydZRNjyb1tPrF6Ui23az1YFcgPx7fBXEbrX",
  "key13": "53DvV2bJc5CCQTQZSmjFs6wV3WHHexZ3GMmobeEn7ewJ3Aq7Z7cGY1ZP6wYK5LzJKcd7Khn5awe4yeEpcrA3GUr4",
  "key14": "25TsfqdHG4E5fejGxBvCjV5qqpmV5wodj7BfKtiDYP7fbVKGwKMPoxj9pyTx53tx62G1vFZgFx1v5SRNoNkxwJm6",
  "key15": "3pX7WKmfmQfxNwuQKuHpRus2p4Z6mSURzBcB9E9oeLkx4HHAVxEbjDBGzLREPZDNzxizZbAeP8ojHR2SsiV5VGbz",
  "key16": "3q4WbABpaB49w7vxy4uwbVh4Pa3DoMmkF5qxWXG1CBhGEyKNR3jti43xV1EEhuqcago7XysUqi9B9kQph2utrNLd",
  "key17": "4LvfS73oKhWDB3JrioLDeNQzobEAYqg1vTVT3Dt83WevBFP1bQEmSMzJgyWEimsmHWhTi6sxNfb5UgFUjxXC66KR",
  "key18": "ffuZ6Tcox3Aatfig8FiMJYdm3FCNP2QnKTP4cHYF6adsD92TySWXDzVTUW82oVKWMfW9yS6xQz5eYFkhbQpebcr",
  "key19": "5SP9whEYMT9yWLfputCLMRsBkVpgPrvPHqxbZiGib3qAmvD2EkBRuJVzZeA2nB87MxjFiP5JmrNHfpV7fZMbu4yW",
  "key20": "5Nuy636jFikFd5sa7ENDo6b6kYpwhGutJYk6xZy1ZnCrQ92cDyKPGAyfHAGyv5TiLNp1BsigceMcKrZScBBa8W8K",
  "key21": "3VNtkAWLcYYCGDov184gBJoXeWkYtUvM1umhjLT44azNGduKnRKbbNfQrX7k4Bhar1Gzx57M1ubDJ9rhZbRoFysi",
  "key22": "3F7K4hxkRE22CJDFixcesxntVNFTypcnmbhahAVUyfNGvVWH7rpdFptRuQu1HUJzPf2ugYRxgEj4xk9bND5YRrQP",
  "key23": "tpSS1yhY3kQGS7tGnmgpYFJBJH9dPxHyUdwRp4H2jGNQSY4ViwzjpQKvcgtk6LVqqXeztJSZbAuKHMPFRUgPWJ9",
  "key24": "4WPSPz8FSydC3eCWfQd2b8Hg1zq87qyUNmaPhGGM91rKR2peg46re9PLHa347MkeaBFhCVMBL9Qpa8R4n6bHvECL",
  "key25": "4nQZxQertdB3HqnHp3E9QKGEWFr4TwUBxJz2576ZjAuWX2udMH9Vw6PTzZLsc8qCgGRgiNGiRdtd7FvAAKPdgTaB",
  "key26": "32ZpS5ZYfdE5xmprPHbQvNw8zagx7YAhxswvgsm1U5aVVrRSxmRpHzxEXhQKDHL6P2JN9DUZNoBehUS1zCkFBMWA",
  "key27": "3M8z59aS6zJBggZbHmmXUJqkY23o3Lvw3v5GMCFYFVN74v6jVLDYX65tRwS5vVAhaZd6NTLq4knGXSCcxgsE2RT",
  "key28": "5fGQCBS4JHLNciDz3HnbxBMAe8MvoV6jbwJKFR3rJvpTQLUW3y165Kptznhpyp1WrGzhDtyFPQabuQrxyoGNMST8",
  "key29": "61mK6Qgm13dQCNupdV3QUtcgQPgenTQiT29dS2Dcu7NpUEqtePGwTxTEYTNJ2sE7XCLC7Y2b1roGT1j6nesuXXQz",
  "key30": "2W72QikS9E4V6XtMVwHX87VzhkHsFP1yDJsNXo43am8gCrapdj7QqZn7E7W6ddCKstsRo6i8Fd6Fwo7nGATPRvUa",
  "key31": "4iGCEF5ghHda87eiGPk88EGS2ZACnJY99NRFMyRgcX48hMEqF1ZRRPVZmSc2z5N8KX2fVn2rSHvunviZFE7cGhQL",
  "key32": "4aspy2o686QsieAtSMN4ae1oVyEJs8VbsVMhjVfzbttfCMYDMsutFqFn4mRHrLgVr6nRcaVJcoFMPZMk2j3ecLGL",
  "key33": "Bagdkd45E9Ah436ftgZBa2GDoMTx6ebjKDwZAYkRs1Wez6fretXujXDV9N4Z5JDBrNJ9L1gzj2TQgDpLAgfKZEt",
  "key34": "dK41hXaacXUNJGr5CnwJUn79P3BtvgfSVy5GTVB116K16K5UnKHzxsFugNupE1gWN9aykTsRerXEk1unEWdR1Gi",
  "key35": "3rG2GbNnrSh5o13p2pPvsiMPodnTCoBdGQcUYqjZhEoDeivGJkSAkSuGoCwNrFZRHAnw65JuyTPnBVwKzEvP4Tkk",
  "key36": "559aqbHEfg8hgzpuRcpoBwNsquTcBpmRcp497oZvEMFdcN7Va7Fb5Hk3zxNgUqenad9QLaSxCb2tFYc2LWWpxY9a",
  "key37": "3Dnhv1FAKomEUGwjkmxLu8tpHRGVs5t4KVtgGn862XBVD5mUetbnx9vTkG5uPoGFuMmPfjAA97f2peCqjikfdou7",
  "key38": "5dYs2KQNbJ89MjJa4QGhamT7BoDCEc5u9nzHkGKq6wYML8F6Q9FEm5CUWkQmksNpWTnBhMPHyRffLV4Q3o3Arod8",
  "key39": "4UhFTqjsYyGdfh4JrULMzPyLAxmWSRx6AYR1ze8BcMEr1amtdN6ewa98L8N4ftsdEyA5Kk3o9zUN9DSbDsAAijth",
  "key40": "2mSrqm2BNbZitvD5fdrdrEWgtyepCYKRHEx2T86bkZJ5dnqL4AcJCy9WdRG3WxEAFvc9Kwec96L3P7kJQBK4TJ3C",
  "key41": "2MAwEznwzTXYHK9Co3bSpCxv92C8DmNRqL2hFhazBBZbHwsV3AKzNQdDrVYJtMWaixhmnLBfhXGgWBoGZpYZ4v38",
  "key42": "3hzZ9SVr3wZSBn1r4Q7pC2PRF5P1vMG4Y234EaZz5FeHJpCMG61kC1y32QR8ktjwoZTDtxr3maVhEvafz71U9Fco",
  "key43": "3kkmqbZC1LMRZzcxPAp6oymnjX1wx3M5esCKh1cx3m2wJYtXKfyGS6PQteCPfYLiVbxHfygrRprgKvEcVZXwZqeK",
  "key44": "3mZVP7R6biN5QiZetgGYUhTSwJmbRGdMaJzZNFeVCev5EbGjRGS1hqmd443vxxK9dHzFnXciBXQ2Ua1mTgdonbeR",
  "key45": "3y4gu4kMnDhVzyexWfpuENeteg7Hn7PcMUkF2uMbBUgswewEkkkbmB4tSTD8UeUAAGKxHd1UZriJSh1wdRQVHK6G",
  "key46": "2o13FiLpxqbmZXp1ZBjYRshj8xiRnnmbp9FvBg7aExptoiBScve2ggvkmY3v7Y4PYc4p8VDs14d39bMreWehbDGX",
  "key47": "53PZGnhuma5dy4fRbh77Cneeip5sHy2HgK6fNmowapKf7shbqJeSyFsWfCZ7LZF4tcmmyHWTwrpL1b9t2oDGp2ht"
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

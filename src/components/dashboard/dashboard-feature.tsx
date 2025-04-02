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
    "58jJrwbm5epzjgeiUPcpsUsoaT2TePZaW7yCgSEtzewQGV8vWpZj2qJpGBKqXZ2Jnt4fyZCHe4oAvmPt2SKucdY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35LCxRY9bDBnGwsvKit3NXYcskSyh8YNj73Fps55rjgWBiPMq2uGEZ6e7E9yr52n88avAkyfhLWPhRcQGZ2syY53",
  "key1": "5n4q6GdG4FVmDEUvbSA6EgFfYbfapguCqRYSbu47pgVcjhzcKwxacouY3DG4WFYr1M71HLBs84TPkNyMQb2oDrNu",
  "key2": "5unyksJ3ZESBTVUS6Le4nhxvmy8f965cVu46hPu3V1WPkRkbP6qCj7oGcgoib6WmWpCVeKtGJAWXSD1G78yquNe9",
  "key3": "3KRDLsbspEV1AeVnFMUWoGiwZJ49UeDmj9uuGUR1VuGLjT19ChYnS1KXgsfaR17G1qYVgLYW5Cv7Uh97Qs2vcvvz",
  "key4": "4HhZdHVboTfPrQUCvSyWUPF4RosKzMW3vYykfSBMNiQjyPUCiQZRaVv6okmSuyNEunnzk97sohWgmxrBxvtJdewa",
  "key5": "325aGCNXDxoxtVBfKRVKJhzAiynCGkHqw2feVxa1up4EFYwDNXNnDkiME5C8XtiEsYeDzwe2Cg97ccvmEPtWk9Vo",
  "key6": "ABLAoqXkDeY8QRb1mqWuT6HQaoCrPZECqAs22PmNGjih5tiSNBphBzVpAqySG4gipBY97KTsirJyNamoCw7soQJ",
  "key7": "61euYAXJT9dscWNNAmHTpAVcBtSUovP6zyJTR9kv8JvYDr8imArxs3wsTKWVKvXNPxcYinsyFHeDqFP4Ycd4KVtJ",
  "key8": "UiFz2dfZXfNAw4vyr5eSnfmD9Ft2Dk66Vkec3WVeHugGXA5rEJk7nG7uiaCBiREzoLBDtnVjnwABTRTN631W739",
  "key9": "XQN9spqYU39AThzEs6ogrx3M7nvQVViXLtF66Vqe6GKSDsxqkzJHhGuE7ah6K81mDMRC7UJBGsXoMXhc7sWrdiu",
  "key10": "4mar95X6jMmrEYsWwJXNQvgRpemqK5Wd16WZzJ43hfChmj9WVSUhH3q2DpkoDjzRrvXu8eQscBcy4D6rC4r9vBE1",
  "key11": "52FncLpH9u32teWTit51KnwJZEBNDvL6W8GKSFQ7h47xdJADWzqtxPfKJahQCMcxaKZWJXHpFQCinqdJAWd3qR7D",
  "key12": "2DYMGMArDAAszapJcyKhh6K4WL2AyU59FLqMS1rVJA2SQjNdEiK8GY8HK1guA1cVUKTomQ9DmLQD4ZEmQTvDhBzL",
  "key13": "42hqy9iiLj2UhxyLsq61fV2S2kaeMmRWSzns5c32bnQocC7mEszuxdhkLbCdSJ3S8uEZooJuKYuLncZNt1fzX4DV",
  "key14": "4AHYC8XoPDeK7KZqJWMR5zd3dsGz9Rm3Kg919MekBRxNnff52QnQ3xzVZ3MP7LpMLmr8tMkGHhCa5VMe8xwbvJfU",
  "key15": "hPGEo8YS7NjCNwRJjgHQT1SSw8QmpiYwMHzRTmomzrEyNoe1WJqxmXVq8Ni8va9jMqKiK67573UqMYzW42pXn7r",
  "key16": "4xo89XoHqaEGto4hVbQYPQLCNF7t892fLQw4tgRrZ2Huf7nbJLc6uoSDsSaAi6tSTWuaQg1Cgvmx7RgVdpgVpTHC",
  "key17": "nh3Rps6yuVXbvAKaXRnSUPUw8GCCaxddoWpgh86wpMzydrfgAAJtYdSgBD17StcEaeDgLpDhKjZ35Z186gzpCFk",
  "key18": "54GH2ML9vwn824WmqNjHgeefJnM8Fttp164GfjoBDayWpxk2XwWPoojZck8nMjrtZ6Ni5HBoT9gEPmNd1NNwyLzi",
  "key19": "3X3GM7ES2TsHFxtfvuofuXj8sdXbRPKZxETFavijakP74vEQuBZZ9LD58FfgzJbSu5C1DJWW4R4n7cT3PyrE93CF",
  "key20": "PcS52Ty84zdyFDvNwh8Gaa68opMLqimSsUWSLUzudWVB4kKBW1JcMgfUQWsKwwMyddxn7udWkwwu6EPFjkuxGXd",
  "key21": "2focTpSSAeXWsTMbLZ8voDvu4pnPfg95LNeRrBrav1adh6zrS3wSBQfdZm12ciSUzZ7c61nQmmgFGxZRWNTWsTvb",
  "key22": "4XdjPZp8voPVf3S7TQt4hLrbpxYGZEPNSUnL4DD2dEfVpPQsnmSdbYTN9CvERFw9BoXYLTosdAD6mJVtfjhPSZhM",
  "key23": "5mi1WrAB4JdWVMBsk932ZdRFTuXoLxS8wUhjXNV59tBqBGFJPDbihB357ux5BpmnjV5kDE1LcTk3QwFFKsHqYtrV",
  "key24": "2JNXnactU1HSKtQrwaoGpaEBzGzxob1hVJR2itmqMMXdupuvZPEGEPNjaq1K11ymnayX78mGbunduqfF48Sgw3N3",
  "key25": "NXNfZtxyYphU6UoJfvXrcQogy23RoyRnkrV79KqALGMQaRJNSWrfL4tstAmMKZLesnp8mBqwG73QvTXV7kmpmLR",
  "key26": "3JGyWW4UpkTUyZceCh6iLhaMAZNvy8E3SKVjuWGQkPFuQ6CUqTVZEtSsdqbHyeLH2BJdnC8peJeZGEF2QXYpdfCB",
  "key27": "63ZLK4TFdr5XpwGWDQHPz4J3UCvg6cY8zcFxhy5Sw2pP5JXc1jso52CKZxf7Xf9KAh9yZpDJ12uw8Q3ZEdnqn7QE",
  "key28": "5n7zNaPdaQcQpLBnvCCZrnpn6z1TxZ4DYu6q48kuejaHjC6WehYdxXS1hDV6YRXEm1bcSLLVY7ThX4LUdwnWy1qs",
  "key29": "3gtmFvhK8mQdXuAuLPnBaHcdRHjpyqKgxz3xaHiV2jDSFgTFN5qHeWZdvZgq1i9kYW7BEsw35U92Nho8ZcRF5kLr",
  "key30": "23GKMJMvVGibmEDurs3VKafeo3xkiKFosZzEPMdAJnsbfS1eshbqcrq7tVMTVciFhYhviaEGNdy5j9mr8NniXFYd",
  "key31": "2gHqWfvTPZxveLX7r9XNXk9uPWYR8jSpE15q1dHktCPNvFuibT3H9mziL5ibpJ2m4wqDGBGHFi8oTYB2HLsc6aZj",
  "key32": "hg4KpUzZEbXWxS1QWKcNAMZ3BbFnooBM6BcBwsEmjNazJQTcXTAYmgxvopkHDD7W3DJfGdmYbopempf3Y3t6kJx",
  "key33": "67MqNXxXGWaUXYNFUx3ZYrvCSNdr1dHzsdqR75Y5oRXVnTPDw5SYASBxAZpBbrXRzxUHVqKpvUvAKNHEfXWPJQWm",
  "key34": "5SyX98v5bm2sMEr9hd6o7yj3RQPwGGbEHfEHt2L3M7nFNjRedJFn3yjPNPYoJS1wB9wAWsMhPctcZEiw5sXtHEwi",
  "key35": "3PzM1KGY4VWXPiLR2SQnrczgLPsgSw8sXTw6L6eFksRaGSSbSjTTUu6rZ2GUsM1hgc8dji75arkBysAJR7ZcVF7B",
  "key36": "fftuwpM6gx8dbCDjZdusbdByVkfX184pSD2WCgoRz8CZ58rGQvAUo69M1m4we6Q3WMqk13mvbeWsHMTpwcCiwNU",
  "key37": "jjWp9ZsNKKTUFkWUtyZRAHs8RMDc6DP4ixPLrkycq1MRp2mAkiVTLEE4oe81zHjExqNYN3ga8SHPuToaou2iQgM",
  "key38": "23GkMoVjfGJTkb51KrPK1YWQUHXfr6pX7Q6ig4i1dTZZFr866XNxQW7B6RvsY4uk9D2qfweTsy2RAPuRtsowPHVB",
  "key39": "4F8LPNjpDRF6qJkCozuhYJXHXaKFe6vMNLHpYcgbp3SQYxhDkPKvoqQNZWxDSUHH4iE7nY6u6ijCXtssZ1reJW8D",
  "key40": "3KYqU4DGhN6NFmPRhDtynAy7LXeEW9Cyoh5TspnK8TxUuYHnza36Ld1iWFrVhtKNwp3rPYXc2rWFGLgJdPkMb4ap",
  "key41": "3aKuWxogBodiQenWUGdvroKYSouofBe3EU3PrPnJTffbc1Cubs8TcX2QoM3cC9ekmSppaqoSB97HuAb6mDoJUiBd",
  "key42": "5rE9MbSvrByX5yiRCE2RtWcfqsPbHFWybxsoF1TQ8dnrFVqXqxAMXmwPF38U79X8Bw1t72w358gEGCehq7BLwLGn",
  "key43": "5iBfrkNvqcpV3rkFMpSz9gDp1ftZp1YxaFkHjm1SvYoGAaBVYUSkV8SBhJkDW9SJNHJArNPKzaEmhXtcwCvBYHK2",
  "key44": "3HqGtTHA9nBEDMVYq3Vt9w7ktv9MY6H6dhDGKpWvfNDBjwy6J2gmLHotnbToJEq3KCxvdkVGm129zD3vfLwzup8Q"
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

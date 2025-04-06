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
    "2JeX67viFWpMtNXBAdFb7BPD7Sbvhm5Jt2BoCP3mACkgtUh9ih1CAQA4RjJTjnANGTqCJWbRFGh4jhgUHt45r2wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBsJofxSuG5Z4Zji7cFUSrNFVh8UbWZGbmqLefmMSBWXeswTK4SyBjxnJkr4V6UCwnyr3LHYyodoZPzfAKv6yXU",
  "key1": "2Dra7u75cgaL71YRZigTtjZPHJXpVfjENR8NFh3EVh28pReqfvBSSg2PgFY5avteKkNftwwnLRqyZvacett1jr3x",
  "key2": "4wnLkxf25Y6vffVeEnyBHnDDmjvwWarAAvcTroWo41CQNkMamyYoi5t4g2diygRwyswuedfU9uXkAgG6S6DoJAzg",
  "key3": "28UhfZXWnWCVmJPdv1SuFXW1GmP83pENQ4sMgzNHyZ14SXjs1iZ99amMpddG2BSMS6s8N1Cw1YTx9JZSN9JaFXK5",
  "key4": "56VbMPfXutxN6FXfEWUJj3ht5RUcwqvn28QnpBcs4mpEX9zr22K3X8iak1m5jinKf8VdDaZmQb12DRPntnrDxJhk",
  "key5": "5sruFVbaXLAVYRvowbamSvgqQtmiEAuEcoJ7PVg56AYUhdErVyYuwpwiphmT3WuJR13XjeBDrSj49PNmzs5oDWSz",
  "key6": "4Xasys8bfEAWCEKeFQpSr6kUD6wXijPQp2NQDZbJtswg8fHYMADGYKQUzQdpJ7M1vngR5eftsMgiN4HJxG5yrF67",
  "key7": "44XuAWBdWohgV8fgB15wXqfAFY47DHqZorRnTonPcKEjQhtobgQAY38qS7QYyDzLnhtJzWnciULMbCjmoqmutS85",
  "key8": "3kVf1HgJpDWYUKcsa7YJASAGptFbe5KVGbGHkTBfjVBzxmTZifeUn868vqK5zrYLpmbXubEKfbaeS9pfgtGG23Fm",
  "key9": "5FwVmiAgnPkf6x6Sus3y2Cudsp9b9EtrGBp1QQWocfL5RcuLP9Zv5A3VFcMvhYMjesTQ94iJ1BGTNCvWGpUrjmFf",
  "key10": "2sZb3UPtqYMXbdzjLbpDzjh6WVH5wStEgz4Z9qk7ABowm27YEvA3sdwZENwg16VLCbKtpv3WsmYh3yq8saAbsk4S",
  "key11": "5D728NYLDSYX8CitRkgi3WvvwJDvQjxu7KSsQEoJYcWj1X9c7G7VvMHEmZrcrpLSL58G2goAoHFtmsakp1HCYfqJ",
  "key12": "5ZYyaZjBdPhr65j5oFCywvvtUvoeEzzEeCLgMQ77K6TDWZujv5ZBmnpgghEFGfUjJx7yoTsNCvpcmGAfErt4M9uC",
  "key13": "2FtfgQufXanTsxSz7FjqAmLq3AaBi9REQnXTiRVsU7pFNBy4q8F5L1PtgDo87wBgu4bpyGbxJ3Ty9JWXhch82vck",
  "key14": "3VAjUSJbsPbhTw9bM1sojXQ2SaH72rxaJtLCeRR8ZNsbowRCLfmP8AgQ9r71kueAwGxEuhJgciSeokaqE6aMZLhW",
  "key15": "5KDfo8cQ1paE3TUMWgTxrskb9MghpWUqAHCR6jayLVG2JzmYhbzBEPch6ALwZ95qrKqGq4j4HC2L7szrusczKG2F",
  "key16": "31DqE5keRwS9X9L6pPXYfZAPEtK4fmpNjfqQXgXbebGu634zRmR76NWd6Uqsw4fnGCeC24PjEEviDb4bLYvS284v",
  "key17": "9WrXscZ8sPpKVnh7x9BFemvR4gizyassbdQjZdyGpXpGJEzkkDxa5kMMXMbrt2NSLYEgeaukWKrFTsJCq3hbQPx",
  "key18": "3zrXH5PPjUWat7JUKXdrz598Txrf3VmE68P7oeQWQmfVPAvr3QiQqZh12EkkmTX3sLfDH6K4dUpF1tCUDWVvaRXS",
  "key19": "4hro1r5QnxLH9BuytxDsmpssbj1L2EUJGnLaJmyYK7evLsKpHGvbATe7qW9wwv9bXNsHCdmeeNMrnohjtsotH1MT",
  "key20": "5vctAyDeMSu6FABAGSp7KiVZEE2GDdRn43XJdC17Q1xBYZX292ujs4TaHhHVgzPmea7k7QgYFzjwhtk25ZKZ25gj",
  "key21": "3odErF2Fbego3b9QYbtLvyci5pTEdhnZpiizb6DiQ4En1TFzPxJyVX3J9knCMGz5rRX8aiR66uxUqzXvzHzJpb4s",
  "key22": "4tgy3ANcKRMJ9XUCML5ZrCJDy2Miwx1a5LtSGfostWK6mAd98m15aKQWG7HPHP12aJx1F6EPdAGjEFkoikjjVMpY",
  "key23": "ZjL679qMdgCQ426TmkggM7FJDVGyx8YzCegyUjsbQM3XjC2RyytVRxAdDqWvDFrakKHdzMSbqrnrwbpxuDGoZaT",
  "key24": "5CdBNhtv7Xn5f7b6uLmsHAp6sFbZVR3ghSwX91JhT9zTFwivTTqdG5P3ZTRA51TTzneLCGG3Er4L7VehMF5NjAMq",
  "key25": "4RwUiUE9hkzs2y5qXq8XKYUKqaGC4q7GoUyoLpg1GeBrugVCThAhydUN17pfV5mkz1hjJLU4WUomDxZ73hLqUZ6",
  "key26": "3yqh7oUb3dGZwMTjQGJoim2P6qCJjdBVM5B6UPizQyXyXDYqW7Rcv3VmoGFa9hjRQPPDLFLoc4XxUoSvCRNHCPCb",
  "key27": "zUw76Sox6Az2NEXuxCRnytJ8Pyvt9ewrhD2vRegPaZikEKeQgoiAoTnVaxwqh6ACpttG8GsNEz6qaMxghXuPkrW",
  "key28": "3EY5nEJDBGbZwwP6TLUm8W2vdzsjur41sJauheBaVmwf44pxK24AZSsboPX7LU3vjrrEvsjh6YPgwyQYMYoD4fXF",
  "key29": "3xuKrEzCCFPfjvy894yPoP6KrDnu8kiKqRAD6cAtzGK2Cw5AiLChBdsDXkama988XLkRWsKvLJVjBSm4G7CbiGaA",
  "key30": "RQ1PTNz1pyv84eR81JsUt8NuZJg7ZyuMu6MXy2qoXjmbAcChyhYnFaeUqQruCkrKhTUvyy4JanJ7rsGXPvtd2qz",
  "key31": "2kc6CgGBpytEbzK1Wj2ZRsy2WAxaa3eEAxm7mSQ16wSjqzryoz2EAeFSEebYkYqPX5vsiXRB1kbP5kquSCYf4zZy",
  "key32": "ARnYk4jCNipYYpHYC1e8Y1cB3RnQjcPpZyLVfABvcAju4Dr29QS1AsTsy9EX4r2gYpsUZyCPC3TZeVsPWmX2SK9",
  "key33": "4MuvpWtVhULGhM1JMdHrQkZJb7jXqSk998kkRhfi8qhMTUPZdctM3dRKHHx8kcTWN41Ho2aA7iqTsF3QF4SkLsnK",
  "key34": "PuAbvsrSiFqCs1wwzLfeCbmgFYN6bQhpApiVrqtYyHk7NpmsJCqFUxPYKREnK6p2pfZQm3tzjbSnoj3gYUWfR4w",
  "key35": "3nR9EzKZxce7zz8jBM7PYRDfHqX3PU3eyuEudDkkJFB7po8MhntGcNLPjyWnBfo1S56jWR3PBZf4fe6tP7ADHVnr",
  "key36": "4rrPszseVPp5nLQLh318bBsF12MBcPXMUXq39JfBUgEsGjcCD6BGPG46EWwLvuvADETxFxqib5LDVGNKT7fwskJN",
  "key37": "65WsNoMsWxupUumT5tD4yaCHQBoFzMXoB91Evna5gNF4sveFpLB2r9BVkLAihCKpDby7TTzBg7vxjs59zaq9zRM6",
  "key38": "k4JA65tuYwxESQthwE3it2gSvHCH6QFet62XYMUZ2Zs3sRZEQdR3jRQ11VHAKeLiSAH3BwyAp1Fyar1B51bV1bJ",
  "key39": "48TZRJXf282qhDNjJ8RxWSZ1tgcb19Q1HRxWv3oWmHoTFbcYiHfbnTiwcHXxg5oo6evE9MXhsSoNZjW32eWh21bL"
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

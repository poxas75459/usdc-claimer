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
    "3f3A35FvpuKqcXWqEKdp2qPCusFybW7zWif5SPCmjqzvLq76Bqm8ktZkYQfYoz34yGL6u2BqAbGRsezVyEbuHRjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpyVktJxmbxuwfZaBeC56NdZn2m8JeVtrPPPtvxBavwNdHietTnC2FMeJkG8hKV82dRicQAgkZSbQpX7adJsgwb",
  "key1": "4jswnbKcyrAhNhE4pKrHP9X5a6pkx4evYQVUbuZ6vzxX3A66qmqAoP3uLakWGMPpYZPaZiK9CQ1BUmp5giiqff55",
  "key2": "61Lhxhx41js6zftXRd7Kc7HqMEQ4rpNR94FuuUWABfwy8wM5u1dSNdQn9WXaY8ghC68BTuLiLzBSR7Yb7Luwiw1w",
  "key3": "ZY512ogCeLngoejLTeqQkUooQFn9K8uBtVpVHwentToJpBaEYtJvRhTZRepBNoWLpY16KS8VHEgw5GKXRrwF3NB",
  "key4": "2NbJfoMDH7pU3c1jMCf8Z8QYZ9K9ADt8NBC2MQPeAqvNiTJNBwkKWjmNpQ917K7J6t3JWphA9rV66L7hvjkeepRq",
  "key5": "34DsEEuWnf42QD6GnUnwEY5Y9XTGGtEVLiAhwYiwSeEt2U4HhyPSjuDi6kp5QRHDhfoctakQJjy5VeSANCAHv3av",
  "key6": "VrasEFnDowzP4yuuMss5EHbZyGBPKRyAubP7QonYKY8tK7vbHrWaKspHL7uYTU6faNgpfUWWiUmayKubjYRse4H",
  "key7": "2VfkJhEPYJH9mqTRK6CYNwRSo2EvgzyScnsFQH6dZSbioQs1tehf7bGtjjejL1Hwgy9eVaBsPdricwJzNEHyFmQW",
  "key8": "D33zMrqJXS18gK49jMTBRau9S7KEizMUWDHeKmCQ4dJyfmRxmcf4mmiodwkAJdSBPhqMteL3cqWvYev7NPg6gHn",
  "key9": "3A7ehzEnUNrf3kKXJNfNx7q13FX9bbJRxZqcSCX9yaiNvF812yJdsz3x9y7D23xCNqWiun4wTnGrJp7s6B6Ajqv2",
  "key10": "5D5djiRuQk3fkH3akGwz1AXXLax5qKgoThoNpZkRWuvzAgEex1wdrDi5KboYtvseoMx76z49TcZR2zyrneqzmXtR",
  "key11": "2Z5cC5Ci4gGsEuC9SJUdBPZRL5sEFbkRosPgZoyrqDivHSWfiPtUxG7djcr8eXtYKnpCEJxtSXfmgXxx8oEeZfAB",
  "key12": "2gaYndDhWCjF7Qd3yBwxmkS14YqXQbJKEP6ubikCAc2JiPtZghhzJhTk6s4QpgHY6XH5gs9pXgF4rPA8u4wgKNZV",
  "key13": "5D23aBJERRgSW1wKoCxk1zfKJfnbkW5RuUqBkRiMX5Emafi8DTPGwCzAbJTPWqQTdGTxU5taDgGBKThBmis9sxim",
  "key14": "5ghjRdT6piKXYWcoezVh9KEFPY6HEXy1QQRrFfSMvZwDXkA5Upo64SfS2XWy5vBE9UcXvsUtD1SKYx2Vgq2BgHqs",
  "key15": "5zuESXjQ4iFUXDbLk6vQVPdGeiNetfyPxVNhccUWKv6haNwxwq6wFhMhPFsDvpKsL2ppbKxWJnTtbspCi2oYyWnB",
  "key16": "2X3RyJ8RUMsDFQtd4tdHUtvKBtREJDHTJSWgicF592uAxYx6QqRdiiJxvRfjb2udArV8yQh4wizCgZf7DVxx9P12",
  "key17": "36aED3A7ZgYgLqWu3AnCG3z4JeFpmc81PC6DFVSe2NbR7iYwCnj2eXRFnZoFuMpyKb3NWTwoTDW2LVSvibh8cxJP",
  "key18": "3fvPXLLwFiV7683433o88RESrpW5NXeNYHD87Lurv4qiW822ChHrWXxWLVqYCSGUYieZ9ih8k3V6rnYCimxNdam1",
  "key19": "42gWH5QuKrBuSVQXshykhEguMVzeGEAWoaDoRsgQb51QPz14CoidpY48cTZpQAfHtr68pBgWuEicXxTQi2MwHD1r",
  "key20": "4Qc5aqRUdcfXDzfo53aD42oajriQBcyDHg3HEmSdzP837RKRHrnDH72twxamxuaZFK9VEYDW7pRX2XVujzgjCqQa",
  "key21": "498nmK13E5SEBzxUjhESow7fhKw8isE1JgMZcSahe7wrG6at6yWjFrCZXhomMygKdx1UpRLa3hJYqx6ns67tttdP",
  "key22": "mpqWvqdLNcf8KKSgwHBUQEENobkrvtDoo5Cp5kNkVWjT3srRhhKcNzRSphdRVzkxbzEQgUKbogpkFXjzhQvp7pz",
  "key23": "2242EAJEhmK4u6F4hMQthSVxQRT8BqeNJcUmLRof2JxJW5KKLaJz5qG6CdpKQeuQ9QQjqvfCoyfwiPtz9t8HFWj6",
  "key24": "4seG94zzArcVrBo4CKMCpsjpdRWGThmEVmTcXffibfXJJQWogKogMczE7NNMGSGjTPijQ435rMEEZhz3g1BLPDvj",
  "key25": "3FBAzG7SwsMURhbrJtpvmBoZFdG2DhqHmfsCpUvH4G5qsutqSNTAgzP3j1bFtcV1Axk88KvdpU2VdLraJX9wrCdD",
  "key26": "mQvPuiZEL98nQUsSVF7kLSW79Tna3ZGMkg9SeVFWy2aUpVNeHkECt6uQre3r9CNRbXbgFTAxLHSNFBXDJRssyre",
  "key27": "3XpLwFktKd1xX7pBy4B1Jb6SMPBXUxwCT3LrJEKbxQMXhuWVuwDNkh7tS2EJyZbN4UkYfx3ZrtqNciVrM1NaywhW",
  "key28": "4sSPnEmnqyW1qTeg2vLCQrNhvHiV7Gmqp9wWqJnTBd4nsMia6n8uebb9XThUFriWc19cPbSKShjWAu8DyV41uktN",
  "key29": "3hxhGP3aUd5dvRvhJmaRzFBRrDPJG1ysxKTS7sGs5nGSFcLDFtRnZBCpjidYFxicc2ukgEeAd2aeRkgSnjcpQPcR",
  "key30": "5s82fyxQpCGnRR3zBGq6uLDBDzB8S4urZTeQDCnyvL2V6FaM46wZJHL17SuVReSKMsehd1UpGhVt4YoADByHUU8R",
  "key31": "3nsqT9dawVeYWooLjB1q542D6UTwmBVDhmvmRYkj7qWHDEgd3AMJfSzUa42So1AmNqetrEX3mJYEtwEZ44js9KTp",
  "key32": "35hsA7vzbvyrhcpmBtgeTz5YwkqqdTLjM8HUFqd4JfWFuq9kkw38wA4pKk9A6TVaKdvCweVqsJuLqyMYvs6HZcXP",
  "key33": "3NXxtyod4nupPwPfHj1obs8qRzba19Nj8oyi5UMiHsTSN6qZcaqx5weUoMxvjdncH9xtt66vH2LDBm2ccUmAoe8R",
  "key34": "5PwV3LEVpHcQMvqUSjMc3srHLvtTuo2ELZTP1pkohigSvj7FJz4RguZL2nFKyT3ksgDB3fcFoKCkjAiQhzXK7jgY",
  "key35": "5TQFBNWuqw74A6rb8TGAwRmnqBstfFs3oeYU19Lz6GuoZ1diZJExt8oqCnkmYkpdYpDAgp88CVsC4KGXgcgg99oL",
  "key36": "3b9cSoSiTMMS1C5kNEEoAnQpSaF3krj5aRkkRDWKSe4yR4b4vMAcny32qYZRpjFPPkMZJf59QbKwFhN1K5Sjscs2",
  "key37": "3C4yGC3vMn8RPoUvxt2YxCmtZDrnbgHpiLTkGqTfkoQ1FWkpgCcWE3BRVxWViZGWr5LN1g1XXve8RFsdqrT2BdHM",
  "key38": "3hY8Y8ZmA5QVGbcJCnztpU4rqe2ttNVZSbdE75QFxNio6kC4wvMtU3YYNY9MugW1LfvSiTYJdBCBD3Y9kBUvehaK",
  "key39": "3mwxKM8YGNiX9LpD51b3EJQ2eWLwgv6rbrcHySKvhbjiH9CNAVLH3T2XJn8LpMrLHRA8BxRxrQgimJqx3ESkEzgi",
  "key40": "5paQDTo6XmGCZaPyJv2Mu85baNedD9UUM4sPPEwf9cpxLaJwzF9sUwHfieZMEo6UHJ4Fstw7QMcQ52BBBr39VpEq",
  "key41": "4wEbt8g5RJeWqUeuK2B2TgsgX5uoZfGwpSSRyf5kMekQd5NU3vyFk5r3h8gdoR1pgZM1hY1RQrijyhY3mn6cKSPf",
  "key42": "4M8foXQQLcUQ75BFaT1EVGiS6N6iByAAxAKPnkZ4ecifuTYmTVXrYhKLecmziHHYLBRv2e4w3wcf711B1gLBspQk",
  "key43": "5Uoz8hCLtjFHk9CepW3xKLEY4zVZvc7eve4g1ZLcJ6PcxNeVqWeqUeyZURF3rpZU1wozey1qa7JafZyg4wFJUS4D",
  "key44": "4NAq4ttdAm4MtbnnkQNQk2QwHQoyZcDFDAQebpqGja8fHm2s8FNeduhZcBczfTeg12pdxAapbapYHTtPk6YwXyxh",
  "key45": "5ekXEcXiGf6kMcedQ6MJVqhTjSMVBBAzUJJJj12DHaMJXcuzb1RPvGBJG6kMEiZX1Az4yipLNs3oqw4sKr12JM6R"
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

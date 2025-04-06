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
    "395KN7N5u3tmjGVBUW383LHtcYH2nhbwnXabWLmXnChKaFUcGP3irRs1DZD27Wrqi2YWCQvKHwhiv5gk5DhqV2cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NwAjqrMekEAFkbMwSrad2iM33PaKPewtA2RnNr4ZUgmhEnqZJ3PrVs8CWFfP6TeWiA9TPCWymzcrd2eJCt3UdgZ",
  "key1": "2nXMSx11ScnfD8VXjf1mM4Q3udKRiz7pTnNiC7sRHmQCAWe5vBcuvduKdAcHqRGCacWXrQVUDPzwLkYDpLwP4e7i",
  "key2": "3pKYQD2Gg5g23yyMraSExV3nf2hFtnyWFEC7TUKURkfJ9TpuQLxTHeLdkpwcSm1v58BXdJLuZi2kXnva9AA4pvHJ",
  "key3": "HFCXr2NHmzwjds8hV4YqG5ZThRML8SL1aUS3CnMhpE1WNDEhjG2bqzzUBKZpZgNdQ33BJeJh23C7px3zbPikDju",
  "key4": "2KM9aNToexjvB3rmKNT3BxTaMLQ2vZTTaex79dmbxWtBHBrH9gjA7g1aedtYsRci6kVacJ66f4GD2RB7UkLFw25B",
  "key5": "5GRoGqMbNRgyz3cVUA56ZzdYmMoFha7prQTeuZAEK49ynAJX7MdUCtdfYEpUyiPXysDGWkHpiSgZUUR3VX7Wh4ew",
  "key6": "4Lsh9bjjKAwckVSSnNNG6jbj44vnfPVLQ1fpa7nenGjckUDkEuzJwrGFPvdn2nGD4JX2u7ZWe6AvQs2TQsxBsrTC",
  "key7": "2qibJhtVEvfQ3v6uUkxuCADctsaHt2woZykbwFXHrWSkgTCefDWRgArfZHXT59HZDX4wBE1XpfxhadExq6ZfAUbR",
  "key8": "3dVJPKH56FCLvzuKiBtabZjpMtUyUFzdNySv8J4ptHB2kMWG9zfJCj4LW97s6TKm7XVtYnDwsCc3rZW8Z7jL78u9",
  "key9": "uHsz5XogCViRp2ZDR7CUwbUke4uH4HCBW78gt7p1fj9yzvDvBop97nNyrUCwP16Z654WMGtKLx8CwDUQ565bTAd",
  "key10": "4uXFa4Zhz5Ts6X8yyNdSkVW2rAZtoGMsSamYfcoMeGtrujoieYKnVRTnUFTAy85bbCWC7YL4LYyEZE8ZykHDyCgo",
  "key11": "2nUZWhDwJzT7NCvRi3nLVUKAzaQRoevTbADMR2vujqcasVXbuNGWXWiKQaSwPyTbC3QeM7NVqtvzieSbqvLVejKL",
  "key12": "5YG9ydTxcTsbfaECLP2X5KMhyL47A2dYbTmy5UivSR2B5zUSWR52GTwfc5rAoUKazmdSgodZJZv8dXoYPPqsn2ji",
  "key13": "4t153a7oUyTM96Bobu76vFzf3Pp6jjHSffnHj3yVzzmk3FrQZgDk3AHPT7Ewm1ARsWAxnyRaANxxb67PqzGn53m9",
  "key14": "4qXfVyHyC294LC7YK3poCQ9dd6mQ2yzMwzX6XxgmspnTnTCbfXtLZsRSThP5EUiro19bKPDC3h1y64AtgEzkKXL8",
  "key15": "3S1cV4Mg554pk1XVof7RP1WKEfNYvXsC3umEkQWCRHKwn2fNRwN8H56DpVDVJrfFKvVW7M8FPp941FbSFM4vhfVp",
  "key16": "3wDkUHY4ZJPxSmU4mKK9x1jqGTaNd3ZrUE3DUtqvCb53P8LGaWTEqdCedCPfSJsoc3UtfurD8BptpyqSrVvbXpP7",
  "key17": "5ZqmcPLgR3NU8GRbKBkETwW6p6WFahW94Di6tJXKQtpMQ4G9Hh7tj69hGHHenNHR891RaiXYMAJGCmwV4dFhXzwY",
  "key18": "2mqwFqeQPM7kGMVpupDQ2Jji89GawAjacgEnjc9RerVCKxQUWmdRJqA9J5QqwLAfMLMKdpeXyY5qqeNe5pfV5HGt",
  "key19": "32UcgwtkcUiGLnbnTe4kUrEUJ3Q8WqenD38PytSAckE74aBYf81HiytKSJMzMsTb7fD688wvT7ocjVTVRsbmy2VM",
  "key20": "2uj73co2S4rKRZnAk8xeUEk93uwmB2HpgT4EBnLbbninHJ5T62QK3ufF731zwxyusvXb9nHD6WKhJsipJHtCnyBA",
  "key21": "25gUGSk4bkjDeRH17NWDUptDvyuRN3H2WoCsj2b6zgazTYpbHmzhyZFjPyhzATypEeLhTDx9fpR2fpxFfunKAeVm",
  "key22": "5gUxEd2NWdvQRf7XNJjTMN1qtd6JGcAvdZqhB8w4TPkK1AQfBZCE5NukHC8PAUQM4dd7oiByUkcyVcRVhQfwuhZH",
  "key23": "Sm5WAJxTUudhie9RVagoubuUqwFxUGvVi1HJ4dixsgnQEXzPiNqcs5qbKdMcy8jQ5akMavmXYAZuibVPZDFesbU",
  "key24": "4voue8jgaHDgBQjMHPc6krf65VdDDadivLfUvvqcJu6LuHz44ixdxAfQCTd7CWW5rjpg9tPmF6Mkw5yVXQBYTfYC",
  "key25": "4j3RNt4bQRgUkofiq3Tc7Drk1AhJoR8b3u97whYQ6xhf1t9iG993yL1xN8vDmg8JY2zM41phaVp6Zdcqj2jxtZdN",
  "key26": "3VCshzgzGc7UCZcKRg5CE1SQMiA9xYtLoehyLLLWoEanMnMhQ4YwH5Z8jCd3PMChkStiVMxSzh2rTYFo1mWiVTKB",
  "key27": "5U8SSMktDh5pc5zmfmNwL5devSvTs1RVuVWeBneNEeGXyV16b7wZKbjouT4A6nQE5Ad3bAzarGYxVmMkUT8637tW",
  "key28": "3xDaagWxmKu2dsn3qxdLjpXcm99tP1WkUVfVGTSAiKHqXkDFiX7deFTAvh2GhUUQjx3kXtV1QPbWVenJWWYQ5iFG",
  "key29": "46B7qd9PRcwwk2TQXoej6GpwWUWMsnmpERWHfQx1hUSL2PmZaEZfMEsHYMETyJoiAzz4HLaBtqwxs6L8tK9E27sj",
  "key30": "2DyeyrKxTBp8DdsHCTBmtAZ6QDFeZJu1DZKx5edLAvjQDCmxPdf3iFjDZJsfL9wwLKN4oNnyew3S7JdexpxjD1zr",
  "key31": "w9d8Gv6jk6j8X4DkZzsJDNFE39D7iLZnoSxmDsjyXpznW2PWcaoQqmePaeQ5ziV6BX3SiFV7ZzfR13jb27MMYAs",
  "key32": "3VXeMNwa2df5uf8cUy3pRkna1SgydiowHZdhczEZgC3HDx3rcQSfzVmMsUgKd8LKbEDcJhMc14CfVpL2nZcbJ5ss",
  "key33": "mfxyXQAbViG2XrNCsnA7s3b1MXmkNRmusdioonnYNmAsLXM3yDK6Jk11SYYdNwAM8HKwozK1CCsrgN6YfSpcFaN",
  "key34": "z3vbBiLTkQJkxpyGYkDyeiVtSDrrkDvpSTP7JaAMMS3nJjsowCf2H1qLFEDYrFvJB2hrU3TZ353aR3ViRXvR5pN",
  "key35": "28HXKH86CC5dGEmwBbqFDiqBZT9AroCMqDedU8iV5EzpFDJWCJPFsgncuKcUgsG1g4QDPCs6ym3MsvveaW52swxw",
  "key36": "QqvpvjxTGFkyVwAtpzMJtd8RWLii3TRqfLMN1VwDS2RKMKTJJGQZZqqavbV5reLtMtrwA7eXSmShvZUvWQQEb3p",
  "key37": "4xcRFMt4nxu7guhS235QjXicdNnLqyy9YF6yH1vMQbqyHUueN2XXQXvLN8yBKVxJzpTYGPQAnUiBAewD5UFC7AV2",
  "key38": "2XfXujVkXUSyNRPgLjVHTwAri7X7vDP5nX3m5apynQybwDZx6cpNhpFh8KaRhWAPPZNnJgHaVSGJ2fFvmfqknKb3",
  "key39": "5VZXvu6uULirJTUWGK2Cqf1guBT2noKYzB87fZ4ogTr7NQ1ggCyhF7wa44bYPk15PnUkoEcwqERWMW1boxUvzekg",
  "key40": "4H9oYysNUQf6xL8VfBWrpyjn9uWE5Pd4oMituEA9p51UD9uVApuyVtyCuJiGNgdkhQTmTmfiQS8K11WqnF2FsAxi",
  "key41": "4x6Bfdv4qEVuRqMM4iQmsMubSTtMXuRsxpfmqjnJfBkaGXu41gpR5VF7V2eqNGKJLT9oBPekccori5xJiN1hrNXX",
  "key42": "4j1JcvqeUYUc3FjDsxrGFTK1gfXjPrjoCHXqhWo6utcZ1Pw8jrXNgCZuJwuMHNBfNuwn8qwptANZUdqK59QSJ1Hw",
  "key43": "2xKWg4qub5JvTeJrkM93i5xQUNrfbDibznABPzuEzftvFKpz2L9s7r1FYbw9TR5XfTUwPcnQwXBZcWwswEdUrJwx",
  "key44": "2sFpx1xARpURNcEjARiJcghLHE7nbRDUqudfusP7owKhFNzkfvRvGZPpZR2VEi3mdLKEigctLYN45W7y4UwiPXDX"
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

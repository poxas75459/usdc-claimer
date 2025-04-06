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
    "3Qb5cXjbyLSJUfgY6EJCKoXWaZ3MH6xW4JSVjaGPmefFUTcX7DiiLkraMPs9kxSGYZBEWEmyu5zrP3awn5BXQgWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcK5JMqQzbyFbTzobHJvbP8J77fH7iPhocydkQmkmJ9vvNNWg8wEXfTJ6fTbMGvTqpcFNmeh61MzzankRgRr38U",
  "key1": "2FXvvfb7t35UYdKbQaxM8FFo8RCAd3iV4ibqKLF556EBp1xjj8BVD5gVRdDfvnsrCGRoHFrCiG4sgxx4x1DigUcK",
  "key2": "5LUwqWAyGNHAKWxCw9FRgrmnJE81u8jtiE1exEHNtzo23tiTPwNk84mYJhAJnxYuhFkr6JPvJboRsvarZAYtppNN",
  "key3": "631ave7oPBQu5WaQgThydX4dDFkZSLN3cSMiR1bNdMXsBtQ7siV9KVSpEAnMu9TCuKinP5e5Lrfcsv2rcShTbEBU",
  "key4": "5mSU5RSQxy7CHPHwGrABmiWvgWRiYzHchJwHSny8ydCd2YuR6PP1Z9B1V48xzfkgCkZVEp1P74wXYyzHsKmNnaEG",
  "key5": "5WoCjp4B9gAJA65aZEhhVoc26nu7TooUSD7Ph5dDjGoXaGMErTFjMxvQK7EBqEVgD26UGwrrsFNU3o3dbmvWtbaN",
  "key6": "64QXEE9VzzPsHoiPAFkEyjHwS2FgkpnKdFWdhJUH4JbAP9yANYTnMRgCzvW5MgnP3Nmd4YdSTV8ThtqvPeHusWsk",
  "key7": "5zNsmuvKjsrE6RsnEmtwYqzMa8zAxwbF71WhNSYF2sunWgbcaDXzahAgHxMdCK6qLPQU7dLiXgys3hEjjh8Y5KNe",
  "key8": "5v1MQAZZw1tXvGDsyD1Ud144A4pkGd5oLMJM2QSdC9s5Z5t2P1VQzm3jcJ7Lv693Zb32pjeEbGMxwEs5BM1bU4fJ",
  "key9": "5TA7i2GF2ZNfRt5pbrcubp9rCzonEhpqCZuJFZJJjANvNTpeFEGfsFDpN3ABWExBTCtvETxyiPA2KBBBsKW3zTRm",
  "key10": "5BaRJspGqLZ6sdE2547gECGh2ch18yyWz2rzL8MCXCpzwyF1aFRJwJqbYkfRw1PktS3g6U2Xd13zvPveCx53aisg",
  "key11": "2YC6N7y8J5M3ggzXimpKjA1jmkn6Ws5yrjAERrje8vFjT7xyC5W4nDism48WdcwGz8S3kaM7nvc2tSgjzqKdCFWo",
  "key12": "boVBcdz1pnq9PkCCjaxrhqCHCfEuTZAuxQKshkyhjxQWpQnnqUALqsWFz6dWpnnmqbskq2D7ucTjgA9ufT9SdAC",
  "key13": "4TcPFCuZGwsVbgJpS789u9vbfaWsiGWBhUGr9J9293i6hcDyHxrk2iKnM65WyAxFoQPxTQmtnNF7tkkTAtbsgGWz",
  "key14": "3ZLvYEQkvHnEXTkpmNBQNcGeB9BtszTrQqHtmBCAzNU5UP6JSkFxZqDEzLFzCSRR72ZJC67wqU4Xs3R1Pa9Bkj5Z",
  "key15": "5JvUTsQm9vmnEuw4PShnkfNejjL1x2SmUKgL3rWqdyPjMQoakYcA5ZHHYEXFbREjgRCSS3jrqQJEGXZhgqp2hB2",
  "key16": "3k1rZcgaWafQUX7Z8emT9hzdhu2AcbuMJbNWDt7f1A4T9PhpxmtPkzfuejpTEoDZcXMqgQCGtVgKSHWvPZjNAYzp",
  "key17": "31ZtLNPc6RMAhxKBNC2ZoHpkaCGg8jPKMiJZEFxRcGtPTvDsLwzKhL2QenszrzW2Q3BfFUyFrq7NP1xzpDrsJMDV",
  "key18": "5vPMyPgZpizjxHzhcCQcGAP6Yic2bNdEVy4HccciapJwstoVVYjJoTTrCWaUXgYZrUqgLvSUgMsx4um3H8UtWTmw",
  "key19": "27BrLPKzLMpM5tnUMqtiJbTuTGi5Duytty7wMTuhaHqZJwzvLPA8x7rSDc3LzJrZEzsD7Q8UQQSqtfu3JzKnQZbj",
  "key20": "eoZaaSMEYFTf5gT7GGW9DGZaZZvf5QNV5DvuMGzNeksH875tNNnGB3JvymdvW4bgdzYKdz1DgszeiRoVS1qJ14R",
  "key21": "22TZpj2bSEjoMecYXaPBgP3JPh4AWAf5CnihMUJHssrCZqonfEsUA257nw7DrrtAHs53LDpCtQSBidfAhuNthjFK",
  "key22": "55QxjRwSgih7TLHZU4Ks1JGoRevt4QBBhHsy3QEHCvgCnZZKqPyvpoy6ywMZHLnmmEsM3vs26cSbCusqE9m1Dyc7",
  "key23": "4iwGpg3sf6KKUZYc6hY2HFvrguGRwEY3nY75TgvH6U1UJuJvhSracPJCXQqoNoidugUsE3Uva1zMSm1A9BXpkPi",
  "key24": "2BAbCxHn5R1MSWsyDs9AovTbXQ3DgFFgpy3Dd1bRjGU7sZ6YqXWtYeep9v238MPFk17ULZdEG8vJAjduUD3dNrpX",
  "key25": "KghSFJQzYWeMp78zRdv6LNfYN4YKReoe9yka86B1pUhMSxE9pXR1BX3PyVdNma2JGN44KNrDEo6ZgApKerab39a",
  "key26": "3M876d6cKNau5kKMhZik7ZGUMKRJG3tujVVgzGW31xfwLqwoypY6PRdoEe3HH8HFnMU54ipBjXXnuozSep9dmZZT",
  "key27": "2xY3ZJL3o22vEdk99fZdW2YEDu9dsKcjZXPoJS4uiwqwmQJ4voGeZNMcWLQ6377i1syDoSLsZaKipukiBStCiir3",
  "key28": "4hUvHm6WLuVscGV2VoDzc6jNWVHxrrndx3WFFKDfVWoiqBUWDSbrwb45XhzdqmUHaEPXLPEvrQ7CaZ6zJd7HspnL",
  "key29": "3mMu4eS2aymgQZfa91zMJ6Mea2BbJ46neSgPREEyri6KRwwjMRTxoV2Xzk7zBr3TU9LEbKphrwUJXGY3LZyQSuN3",
  "key30": "4xnKnFgPRX2z53cJQPeHwTFYtpoX31HcBpvfazxyPuhamenpZRjuMQ7kZV9k1E8E4FhWzyGa6KHdPjAsLyembnBw",
  "key31": "2TgeXY2bdtp9Tu1Y5HJTyKZvxaj1ySb6D7eW15rMrDtjQ8PQUtXPdoMscGYX6txCNR6eXFFYmCKC49ptXTwwEGAR",
  "key32": "2rSej4irHNrquyGaDTRXEQSJjjNP1hgEMV97PCUyRCUuaEH8aeCjr3V9shkrk7j7kGtdMKiKhGB7UGQYhqjyAPuh",
  "key33": "PjMvvZmRm4Me9aFXfHphcRfmPLBQubtBV1vvrtVJkCPow5tj8KQwipMjDxYm2A17T89aKuWcaK3sojiuQRLyqDt",
  "key34": "28cejLNEkk3fUhRSq3bXsUm31CyyNbXTr3LxyxtkXG2orx3QoESPZGSY7MD8wfvwkmq8tPp18VvP74hUoRs7qPHR",
  "key35": "BYQYUK6VHBZBYTSSPuetS5nxw6DHqLVGB4QqLJJD1LykgSHseuTzGXRiAzZD3cUxLMCXe6cjtaJgnWhKyxvspsu",
  "key36": "5thdrw4xhXtdJFcPzK3LMPXz2jKryFcYL4Dc6n48m8nYggDKCjYRFUpu3TbyzAN1u3T6ZmkwF4Suwvb4Ze8VkXej",
  "key37": "2ozE1koxTFcCtUDZH5BWxYypmeQ3y1TL8jeznct8Q2e1Uen2ZnwNuFqEL5wSYeBpQhEUG9N9UAjX5QYVurU9Ukq7",
  "key38": "4o3PWWm8KdrBxRoC2Dup1quVrfBq3A1aajmQTP9cqxXWVaGptQbymbQwypv31j17j26wcdHgYSDML8ZfKsaFHJTt",
  "key39": "7CvFRBdWxF4w7oh6jjB3WHAPVjKxXPHVLMUMv3hhfACk3ktpH5ANLR4AL1YCjngMyRfyYqb2rcKimxtJguFiEeg",
  "key40": "iJAXmBH8MMkggjv9ayPMTnuAj9MPb1X3E5iRxWBw4cycLeGzbsujD3uF5cLgHVYEruN48mBQSH4qhn5RK2mD9bF",
  "key41": "3mwE9Buud9AJsrxEkdyqdhB2b2u9VsUmxfPpfFGQTonZHwpWWiPFy8hJTLfQJt4HhgkHrNUBcwNSbhxCoq8hRbMT",
  "key42": "5eTW9uAB5HtgLLMzWCHieKTiZG9drsLHfsqCw5Kq5KJofwNDJdEarPdMBba975cZv2gmsac1h5dV4ZzGrQ4hzSYs",
  "key43": "25hAvaxxgC2e4zvZbo8XtuV32PKd5iGgtzv42WaPYstUerK8tSJJFWmJ31GedmDySq3R5RCAYf7MWopyZvz8zQhC",
  "key44": "EaoFPZdd8LqAi9b5wpPoznJ9okt2JMT5PRdvTQ98PBw8mEDDGatQ2Nv55upzwaB397jUasikffTRusr2yV7NMj6",
  "key45": "5GHuL4T1oitvpahVfAwiV5jUzJNhiusx2mtkYEmrx3ZwoGBHPT7prFrvxgfrYyfj43YVuJ8DAoSzy9UEo9AVMZH",
  "key46": "2w9PToFjLFoLViUb8wqq9LWEhVcssYQicEy4yZVfnVaDUNzHRmq9tUiwvEvCgQomcWFQUcFEthex2gHX5w5EdzcJ",
  "key47": "Jn3EojcDrNedbkxj1BbrQbnmdXfLvcuT33nA3LbjfsV5FKJmnLC7Vk77jg1Yd1U99ioy9Ns5fatC2LTAu6KXMyQ"
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

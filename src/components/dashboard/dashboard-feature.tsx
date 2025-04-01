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
    "2x5EyNwDCiuvFWbBvM9kThghQrVthpZMsQQVMLXw8NZFeW17DSaPFtgbHjdbMHPvMjhfgcphc5hLgvTnGQMToax5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBdVg1ZW5ZKoPKhMdCCXATvrNLQAtXDWeknXBAkBX11nsy3DRcG5V4R8NDonCvj8tEkxXwr7JqZuiskYdeEmxFb",
  "key1": "54JpQvERZoVqePBcLTkgQSfu234o6F7WktJoUYyjLSf8JMrtiSDFanGBg4nCc23ijT7PpynBhDodWoM9iYwMzjy2",
  "key2": "3UFBSgyQHLgHxwtZyzg4bEnVAdcgx64Bypja2nrpG72Gd2Gn7Vf6YT5wohRbF76PSEHjSWVUoemcJw1S4NXCZJfg",
  "key3": "RoQeLqWyVryGBh77TvZEohVdZBL4jX97eDAVyBha89VTRmXiyxPscUZwXRQDijwojenhH14LbcABNRTAwmzKP23",
  "key4": "2rj91dt2r9UGUjYpdyjQe2gQaUhZHkkx51Hz56AiGGgZnoeqvkfWqd22dcdx5Yf3NquGAUYpJSPFVht5scXopJGc",
  "key5": "2eBYG22MTMqVHCjsBHuoEQX3tvJoHL6guf4ThDrghq1sfgZX9GMCtGW3shrNeVv9ZHZZ1TBoXaB8pHiVvnhQkKkV",
  "key6": "5VS1ZpBqbfUzJAiZg3GiG3EG1TG3cmPbJkKnfWQKENBE8991ND7y61AEULYTiwgShKEAcwgwDD5FHDQZsMGW4sMV",
  "key7": "5YMYxK5fn99eydmrxt69JWuJ9NN9otgnzStsvJPgW2FFvhhAFnzh5Z6ifLYGZWNDLQkMQ7pMfrJnVhgiMU2btM9S",
  "key8": "3GiP1noMnrQ6QDdtC6tWcbKc5UZQoCa6pzbYaRvanw3Y8WCSLkYzhWVgEGzv1kmnNApMT5hKoQa5ptdxU3tZhoZQ",
  "key9": "3mkFw4BnFd6pPSJ2FsfWXtjNNKcuhh4mioeRDkeSHCRBWqKqjTYY7aYh1PdDzCayP3FgZvcNCzb56LCALMnznRjN",
  "key10": "e3xLGnkcrHpguigG2PU5CioqinoVaj7tJoJCkUjaTjphZ1YsBw34FcU3Bj9yf1EYK1KAyi75JqAr1Egk6DgHTac",
  "key11": "2YsuC8wDgewqxRVgJ611Tnecg3MBV4g7Eqiab2JEFUmvK59pYEeimJuHBjgRCM5CWGFYB6HuHZ4JGS4dpF8ooHn",
  "key12": "3EHsqWC1GiSUtFfWtQFhz2vPk7L2c99N9eN8bUencvfeRUBrjjvoFrSuHTWQUuFut8whWt3taoqC3x5oav7sRS6V",
  "key13": "66afJGyzaa2TzgyQLmhGwqJX6CNEFmgA3kZ6PBFrDvMu9jGA5nt3s3U53wDFiu2jRSsXQPJSnHAWyeFX1Xsbic1V",
  "key14": "5xyWo3JPLbFPXFQtJsxPbqfK5WYgpNFY7P29h4hJxvY82HsyqvGYCHW4euWYxNLEQEorc7HgyEzHqRhRntEVpjp4",
  "key15": "2AQq49cc2TjsVkaLCjxD8wwQ2ToyM66cNHZkmPMnK5JfXMAXLtU3mjxLedQpebbGq6f99iikj5vXQejdnJHjrJLz",
  "key16": "5JSDqJp6j6ZzMyx4wQK5rbgNbypV7cjWKpxLuJFKUW1asYvzYaoEz73HCX5qu465iT64SLhQdEeS9hL1aWKJEciu",
  "key17": "tBJTkRRHVAot3NXxHYTD3q2MMvDeNcnUjjZUPRn5tWE5oBRPCicUcMEwQqDav9AT9szfJevwJ77SXUz1mptoovx",
  "key18": "4shiuUaejnzWSvpXxCrd5ucoTQNpCWGB13YJBtaeyDuXHQSzKpyRFwUTzGoWELhZCDLJittqQDgnNy1btLCU9yQr",
  "key19": "5Jy7eBKgWpjZjvo49xrA2iYrCbZe6QTvEsueVEVfRK3KHkF9HDFvmv8Xu1p47ZBdhS2Y5gfkMP9zpWn9dYhn7s5Y",
  "key20": "4t4hrXzF2sTurQ3K4hF4jMkMusZudyiPQeqgeMvTnwVSu7zZqvH6WXLoBEsS3s1342hFodvApZP73gDxJPkYCaBD",
  "key21": "2TyCZtLPZjBKzvnabds79q4zsNyaN4okt8ZNES6bsnbsGVK6F2R5qoruTzEVtw5QE1Jft2nKXazm7mJxXFpHeRwf",
  "key22": "3mo7uARqodb1Trwy7aoBxjT1vvyaCfFnAx93orbdx4FaNw5g561otYRzejpeKjmMSGZJr1jE3LK8zj2FboqvarRg",
  "key23": "67rLoEsyoLw8NMSbfcKbddoyWNtb1qYNuEjmW39vYjvH1tXee9xfjyCpiVAV9Jyjesw7KpSMSnxUaV3RBPSvwW19",
  "key24": "2ZFVgdGB84AyPxXAsMFDjrmBQaHwvcVXWH83WoBWYuACgWcTaAGW3pjaDxXp1QQXgLVq6pcJsQxsPYSYRDT69KVL",
  "key25": "52RLGEfN8ZND8qPGiCdNsbWYJndrrUY5hizmazZwB2EqKCNxVZW1zrViQAYTeYHJ33eAe9dQgQGUJipYChub1uNn",
  "key26": "4knTtZjMnNayf4MxiKgfvzhm27joMmqwpKfxkNp1ZpPWcobnprZSDfGnvjJhuf8Ltd2cwMeBnMj12jeyDbTtrzU1",
  "key27": "44Q7c6yM8eWQdpP7TzcREN4LCjFHiEnB49FyTEsLkZz11Fp9x55CiksPSZb2rCcvKGtRXDsf11NHd5pDdvS3QXEg",
  "key28": "2Sdy5DBUerD5oHqH5Ysny8g2rER7eHGSRkzqEuaMEs8A7RbN5QBat61qWGQFJVE3nwjJgxcBEf8YD5WXtN8ZrntK",
  "key29": "674yQD1ReVynE7mpjkbbm1DvWT58YzheeB8YRYMimVF5sx9QgpfgWwKKNdAbyJubnr4qqzZwJkDfB1wScQo7hUzX",
  "key30": "ByDNH4cfqA81vf31nXU437oPmBCucrYdpw58bTEaF6oBE2N9CfidGGeYuKTrBYgiLHFj9sLBV1JAPY8qofyiJ6z",
  "key31": "26MQrSEBbjaNGTBivEjTHu6erbiTgx1ucGWCdyLtxzc2LBU7UEhcYjgYrAEbb6cEJxx6juhPrD4vwQ32nmVwaGvX",
  "key32": "4aApmwDCXJW5kthiDxiDNHw5hG12xgYArkJz4aizeYQefNDBnE4BhnMk1DRpWPaJhCKbhUBFAWGFx7qoqL1D1U5H",
  "key33": "4K6SUt2gxyLBTsXNDZRb8S4QPnDjRXHeafnSJ1uaMuRbGZwy7B4dr3YRdAp4QnYoTdmrdQZ1S4rf1rEAzjHbtrgH",
  "key34": "3yHo17d3S6oZDzZTrkd9SP2HnfyrFaJ9fEudQnBqe9g6SaR51svhQUJEWLDGwhpRG61JniqxpX1ravqSHBnQs7mf",
  "key35": "4XftbycqmcQE1yU5VoXmJGqDTpcwQ2EDy1JzhcKzyQdKw8QCPQYDrJNMJ994Zgftd8VhRu8YFysRCHLSQ3ghGUz1",
  "key36": "ABeyuqJtnVcNK2rKBVr4Cv88bfUwek1d2mpKTADmVVmnJMgxG4yHEZZMVcYzQRhSYdkjcuK5BDVzZzUtNnFGqim",
  "key37": "4Sm2PzZfY7Nh3BAXirmj8wHDHVXSuLZChUcfdB9Vuk7ExA8deZovRX9C2zsQpTVU5bzHsnMbhz6Sg3FJVg7Ybozz",
  "key38": "3H7VERjntFWhVKvzix26XUgCfqmVt9DoR7UYzeWgcs5PHpCpquyJonGrziQxcJDm6uhrH3CdVtjo4Fvr92EYvyb4",
  "key39": "ekJC7tSYXtYD1r2BH6FZcqUs3zqmwQj7WTGNnpEuPKWGSyRbuH21qWAhQBjLyRSc2ERWvTzcuBkLjnUwnfudTGf",
  "key40": "ACubZghFhquNawUrLBjib7rxsA6BJQXiQZwGmAGppLV574ewwz3qKkGKuVXV4xq1aw26RC38S1grRea6uT9TgZC",
  "key41": "TbwG7QKiMfLKZMv3dAa9UxvjWnStY8ABRHubPQLvsFa6DB8x6cGLz4tmw3y1Vgar88qyinhEbvmGvZ6qxhKatSr"
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

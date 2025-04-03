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
    "2Ytk7TnMWtppBfNCnhTvuwyoSSb7fZZ6e8vWzvBHi7vgarRwsvPYvP9nMMXsLcKi5MDCGACyak5ZMQqGHBsVnr5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SD3MRWpNh5x7nviJaELVoLsu1SQybXeC67uHxqjCoGfwyi8kcYS6XaP6L474RWp97bgzHWFPX98k6pG7iZJ3sfK",
  "key1": "44d6XdN3rSgcMrBEzPo83yrPHdP82h7k9iAQFwomdEMMRNLkPZbnZ2HxT6WjrAq1MYtseWvtQRqs9SMeGWMwvRNB",
  "key2": "3YQGTUVWi6zDkbhebe9sjtUc5F671kysHAGRGyd9mN47b5r9cuQBerh7MkWEL96rprL3ErH9Qb8JeAZ24777ujQB",
  "key3": "4UFnj634GLAj59HA9M1YaDqTzJY2aNHEZAsVbppix7XPMWLsUxbHsYM86tmQA2TYsMPC16CtYpL9pvpEwAcJh95r",
  "key4": "2R2JyQoKtPrM6S6BjX83jB9dmiRnswVnW7KK1cLVronShox3tTYBsuNpL2t7pCUZDmcF6agwakt6DrFJAV8ikjcg",
  "key5": "3WBnDtpM4J7BcMcmro9o4ZLhCiGBoyrmCzPf8rvwz5JF1dFT5KVzcgWnL5eWUSVngg3Lp7oj4sAZTL8JP5HTr737",
  "key6": "4154Vfm5KjUfyriftZo3qxxim6u61gxxUvdKsJMqqiDXJx5rdHdbirtt32AyzrkxZKNky91o6h6nTvk3z29kxLdw",
  "key7": "3ppFTSNxJJx6ANiSFdKaYgQ7nwD5UYD6eZqh6Kg93RNUEg93zkBdNy3eERsgTkkASfzvsTAM68dBRB8fQ9np14rZ",
  "key8": "4nABAUDdPiMxyZpA5m6TkQWLUrMrbRS1jEDnZj3FDSvPkLLsGFcGhyZQsRtqztyLnTnWcB7zSwTrWokvR43cRuTN",
  "key9": "47J29mcriJ6Ne8Z6ZmRTMwr4xhMfhovqQShpfwnVekSne2HGL4yCYJP1PPa7cJqJoF2jx8c5ALDBbwjwEcuzFKsr",
  "key10": "2ZbQH1i8X6YpC7YZLpMRbkFiBgdXk6wHj8XFXxNeaLMUpqDaowGZBhaC8KREVhYLYWXsybprb31jBY61Et6UEPci",
  "key11": "ea6NGULy8tSAtfni8TJAnfwWr46oqRX3WbSWVQ2AynrZsXpASXtpk5fFHHmSjXp4UHGZm5Tm9QDZRh4CvhE9Wau",
  "key12": "3jYDmoJTbJLWUJ1Y4UdxmpotPX3tRXw32XXgeDb2uv2jkFjckgjoMioJqLNwSxEvFCvpPTC6XEQGJs7JpCjmH3AC",
  "key13": "UECrsZwQtSvJbhyVmDCD14Kp2vXTJ8b3u6VWfpntK7uZcU56nV6oHYSwJhyvMMduNtftW9Pfgx3foQedTUgkAcj",
  "key14": "5VUYYNeHLZi2zMwTLpAppMye92s5ETPPu8KVCbw8XALvhrc1GZV2oFa64cPnT3jmqp61k8gz4ZySaAnfgKkFthTn",
  "key15": "2UdrZze6oyGAEsyw8sheA6cwN7d8E7dx7qGS9Y4mUL6JbBfgp8rDi8kPno627iaW9gmAgZJpeBjuSRykDrmAEZvW",
  "key16": "2n8UMFHYQBARvuSLJUdGK2SUd4S6f8qjrUZJtws5UdxXnr3UQ8paXXfhhbc3Xtxo6cd7HS2v5AijcAyMKo8VWBE",
  "key17": "5jaP6zLGStt3wPPHJZgDAk6PgS2QTNctNSrgLhVnCzSADxViWaaSMrhP8HiWHX4f9DgCygrygjP7wSjnyykwinRy",
  "key18": "3j1hErYRFWucP4RGgJg8tmXEyZnSmKnXx4mUBr1HiQGR4noLtcuRNQcDDctqU9xnxAATWwzkxVas2qegQH4PFEbW",
  "key19": "2GYmQnrGWkvztuxtZTvfy1oYHPvztyMn6fNKJJyax6acYGzZU4BZLL5gNMBFRzKK8shid1kp3aiZ2DBrJsZrpMBX",
  "key20": "5t6BsTbTU2ttz6HkYwVkZU2EJ4SMuXdhuFEb4Bd9U11waDiiR61VUUnEMDKcgiLsM4mDbAGDMAqjMYpoFNba9aGE",
  "key21": "2QCEzEJst15GpmsPNpWyaQekcXbQMdC3s8VpyVyBTgzJAGBWruic7kVWyL7exxWbXeD9yMWCCsAgCoDStTHcVLPm",
  "key22": "3MLyCgDx1YM3CLJPVnWPosFavVaiLUVXKgiuft2SiR4nzByX7wCjYqSq7fTJTdErPi4EzrckiBu1R91CjGezssjL",
  "key23": "osSQfbhusRTtd3qA9Vgi5EAYg6noqKK89Sd4e9zqcCMTqNPpBNfJHujuJmwZicUXPWcV76rAqVJ1DHfRQ1QTauD",
  "key24": "53Q7HrTH5ufruMEUG4SqZJjYYBi1eFm2m5V2HL6Ai4cXXk3aeGXZ81MtRpyXqWZP57b2Zk7XHnddVn7XyezE8c2J",
  "key25": "4Sf5bqH5ZGvSpF4iUy4Z3L6YF6xXirRsRzyQNUPF4eZeHuvHVbrvRVKPeBd6QHa8zMB2unqy2XUGNfHLjqKmSgjA",
  "key26": "3hkACnVmvv2TgjQsQAyrE36w1Un57r82EDYTwUxjiCrzQCKJi9or9BKdpygXsKFFnB8bjiTiR2UmqjBoVYsP8LRv",
  "key27": "2dx1e22h4AXJKMALL7dy6NPtgGoq9xysCYkwsnijMWTYNau8v6T6UfLE1JhkTXXJs6Ka9RDkhsXb6RGfWSd2ZBEp",
  "key28": "4wsvBChnhy9nTdBf7TYqx1xeeZbthnn1BHtz8TXFJaAkd8kTmcDd7NNj11TtL5iwdx9NXKZnw1Xh2Pt25a3W4cxi",
  "key29": "3mWGWSBDiC8Ui3bkGzww1m8Y8ausQ1YtG18owxqJDTPYeiH9R5fpsWuewzh2Vdsj4MaHhwUntsM1q3JH3a4aDNpu",
  "key30": "2jWjeUP5TuwLWDcPUFXKDPFRTsTrpUryty9tJAznNf54KsXqd5x4QjTd9Y8QZ11NC41BTkAZ4hNDHwS8i9bo1kjd",
  "key31": "57vzUbWVSNSGocLPvBdjMMuEY8GPFwEuXoHR8woajbMqAresbfHUfBukTAEVCSckDWYW4Zf9rK6KbaezemAEx6Xu",
  "key32": "5NbXPJTUD8cHft6rNGuoHuZr46UNBMYYHSzaKtErUepkTuVL7Py2Fzp8QHdk4W1wKmAktv4icYPYhb6jsK2TzPkJ",
  "key33": "5J8zzMKjRnKXuouckJ6XAU6PLGqx6nPW4BhTFvatJHHMwzbPoT8nN8zyGhmKhR8e8mTvmSTQY8XhskjQqjP9DwGL",
  "key34": "3ThqSy1NZn3JgUAVdAGhV52ztuaxUcYp8VuEkKrpDZKhEmc9wVo4FvuhjZxedRkjrCKMpB5UUrFenaKS1kV1uYRf"
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

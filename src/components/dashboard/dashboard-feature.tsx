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
    "4WnQ7KzMqVTNuiWZ9oJLq2wRiJ8ZU1CrYDtJ7NuoYiVadC1wdgQvasd3H1S2P1b7XwLXbn7aa2h1sSGN4KWeW8Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTtReFwvRpDkHTstruANdbiyS5c56JUpxXiPi8Wr8s9hbVb9BsR7cumCnJ9o4kEfdQNdCQHDdQwnPshsaD5BWaz",
  "key1": "5F1Fik5DGSuE9z2dKZAVCsvuFmVPmxBe1QUdiRxpL4LNHsRnvUgxMTK5fKsqPuy4MYqk6ZR7zYWzLUkh6tPebMn3",
  "key2": "rjCL9y8ZdCDgzgkruU11KYr1jCNFRRiyooNM4B46LHn9QLpaNesjmLHyWZ3yVYTqJBgnUijXH6HVYwYgCvaJVHd",
  "key3": "2xS9xUsr6PvaDYZqnajbkiW3LQbdJZejRHnvwj1QGnD54ewENuVgHt9QW1CUGX2Ca8tPjXcEShicv5sdAQPi98Fh",
  "key4": "29nswXi7zcSNGJXtTdNUFXjWcHzLiLHJfvR6jeRCwVVLXg58hyZ58hVXxw3ekbmYkfHo8Jwi8UcLH5Zae8toBews",
  "key5": "473TiWyH9WFR7omTNCLC8A1ERixM9TrH3bPxeiNtTfkrH2kwpzLrPaWAeVdYezcY3Rpsgfjq1dGKWpfsBy7nXtk4",
  "key6": "qxFsjYhhHF1bhu7a8Gs5Q8vTa3nBeUVf9kR3o7B9U9kRdrpYhTshpXPBrWMjLEm67doVAdQGyzux7R5b237CLoW",
  "key7": "ELMhH5qB1XiL6Gc1wrTgMaMTsP1jRcahcwzvn6vh37Lkx4fvGM74Vm2drMKPDSk8QRes6qpjeeJBnCHrFe4v1on",
  "key8": "2agiq54stLDwqT5gJwPUP7yhfCnyeN7tWr8t7FryQRoUcKvr6DEcdzu5kQaiPYf4JSYdMHSiF6cZHuzrD5uyAQDX",
  "key9": "vdAwG6GQCW2UWUVuZMd87F5aY7k21MjsDvVZ17t9515xq45AuYmixjaDMqj2uy5jgrXoLVZ11svdUfc4xgcaqWm",
  "key10": "2c9WDLWU5i7QZtcZ4qmS4RqCvwmnFUvPb9jHS4XxpbqeC37YYWGDWdwAtToBsjmpaHdjbvS4hobDEyHuyezoL3RK",
  "key11": "3EkvuttW8jP9Gfhza7UC8NDnW9fE88gp1j7PviNh2w2stzK5RpTF3FJd2Pgis4n4aKwDYR4WMNVj8ZPyJ7iZqhqq",
  "key12": "3XyBfXA4VRKgfv6UhUFk9QCm6CV71kfpRytXFuk95kbCfnXmow9nB3XMdcKghxaZ1c7iMKSAAZ5EYFakZSWkHu2D",
  "key13": "2opLapGRPkpShD9xnL4VYYmgG9Sx8zGUxrEmzKTodBtV8v56HgWCGvq88AXg5o4StswCDSzWsb2mPEgGNHxH1Yi5",
  "key14": "5J7GXYNSouFo2mttMJQYzAs7UwVEzHpaNvr1WrPZEZEwkFM8AtzaHYY18TwPQTxEPZGcYcq45CSAvAdkeUinccZf",
  "key15": "2ucAQUjYefQvwscW8HBTGYHHQ8ZTTaXo9fA5Q3XfH1th9gxjd5aRd4cbodbxr3GPPGHpyLu1uHoPqNrDe5Xdvxq2",
  "key16": "66UvazqT8uupYqWYr3GEEEF9K4neDpHxPa7T4xFC8ePL1kz1KCNtdxofAFUrxq4wz7TTnKgoqS1GhFNUZvscmDmx",
  "key17": "3m4aauDbAc5eP6quiwFf6iS2uzP6w5t8HiDC4BMFaXZ6VgREQzvSdaa5ARGNoe86iaQBjPtyY2NxY9oHLqN1u45z",
  "key18": "4Aa7skW5NLPa85yVrybxbo3ppaEbVx59Ygx8t7rDARDS3WnLw5kX6GRUqHjuJh4e6k1f1gJ4Z2wm41H1BWqUbx7K",
  "key19": "5BgLaaLJFrErtzvTChsVkyvxLZ6xQhCmCBPzg7JQDBbXuPNu2LjviwcxiHV4C5UyEv5uY2hqbPNSp7vcacSeTF95",
  "key20": "3haHGaqjmMXGztdGCh6nD1eCFNGAzknB4G7YY9xmAwin6Z6ypWFMCo7yS8MBTQ8jVMJDyV3DRSt8wFFZHvvMRYQ6",
  "key21": "3X9kQsBjprX732e6eyaiGN255ZKS7XnTMFyBpXZVUAdw4Yi1W8YEy3GCFscxDkxpSxZvx719W3RW2Gtg4sc2qEAy",
  "key22": "4UT24CBoW6JgpoCVPNmwRMtQnE4Dpt52X2HRYJ3rw2t7Aufqk632EFU8PMRxR6jqWPKE5fZKvWHMGB1dVdxm1kk1",
  "key23": "GuLusZghfEERYEU3DWvqXSkbTX4sDkZnqX8CGuZCJj5NCcTxpVbFPoafVKq1jVdzPEN73Noennan9xFw3ZKgC1N",
  "key24": "5BRpB2tYgz98LW5XJuEEwUQcpTu6uMufrDhz5TsmAb5oViKRv5UTNgzTVmHgQjs6VfXkAAGXGs5oJrjtpsXJrChq",
  "key25": "23H6zqRgnddDDPvUe7Fm3579DHarxkYBkTLvFHJfFKu89w8RQK9DmJVHKX2i7xB8aUaH9oQSBf6c7umouNSehrfA",
  "key26": "3EyRRg5uyBe8FT4y66UbB5c2GeiXXdTS12quobUgjn7ZjJEnGKPvYaYvoy42CjdU1SXoSx6md53twDvbzZ1v6Aqz",
  "key27": "3PZBK1LRPPUp9zpkyJtWdJnf1cHRGBCCFKqhV6rGpsGgX4UB844EJUG6WAaQPZZGt67xuYNp78ieT1K4UnuP9mVP",
  "key28": "3Dm69JGrb2eSQBhbgAC4szi76KYgBKZeoJcRY93szTtnYS724EBHdzkJ5Z4ZzjdQHPo12AaNv8ksd3eDGr8MgVEV",
  "key29": "PhrDE8uhgCsEYheDaCYKzYFW9YQzTZMLesEcQVtm7Guxn4JfyXa1bgKomijBXU9LUXv61mj7ZjmsNACta4SHcTc",
  "key30": "5E8knKSpdaqzoJEfTsxWtNcxnLn9aJsFnfcLmpqD2G2HrwLNiYTffmriYrMabGDuem1titNePCxUw5MDvcSHi4LF",
  "key31": "28e7bY3JsJhzrA8Nd6MzJ4o9N6ei2ceXY6Mv1KqnzguMAYT3fYDJMsutf3smtMzacBm4DYdg8ykuFRBsC55pjQhF",
  "key32": "4HXJMrHkRk99Raun2ym29S2synpsghijqbWVwnmWDKGhmYZKpM4ZuuubKUUm1DW6oBZ1thidPDKYBWw1ccqXbzyD",
  "key33": "4CQ2b8PwvSAQ2aWcfhBPXTyeUvrnjbgn7vduE83Ey62x3tKgi1SHbNj46MRTszEiz2KHb4vQtDoWTm4tmuFcXFaL",
  "key34": "5XypdhR73m5frAasX6RmNdYVdiTHVqRcw8Qz6PkaEaFwReSeuxqWwcRMUbDtnEW5GAs7vXCemG4ibs7gfpxUaZ4S",
  "key35": "3kfJeXeXQFeSjwsS3gfvWyTqtzYEceGkAnM6qxNrQ9vVm3rFsNtQ9RsbCtQnjqR91tjgJHeixTow3T5dFJDeU9vL",
  "key36": "3EbjVEWnq6tMJNmbHfBtxXvnKz78vRRLQG6ep5R9SR4gWWYm17h5JZyVdJTJrXCPWF4vqfLmN6db5cjms8sTSZsp",
  "key37": "3f5TLaEAWd8YLG2ZAFikwLAo2QdZNW43eLJ2xVTqerW8Sh2nxK8Vw8aBvhv3WRPbm2XTmkZ5yrBSQzaUWnDYStHY",
  "key38": "2ZPbJUDX46tfQSgnB45BsNrZZHxwYYRJ6Kyk4ZByLMUdsLHVC2PPUefiMRu35VLaAapTN3Jn29nFddYjZaFdTJr",
  "key39": "3kQtSM4vMvyP3neG8FxAwpKz2kFBsNMz3SPNAwiMWJRfrbnexSbPCzaNc9EYDkHEUBdskBukgsS5vZ2P2dg4ZPBL",
  "key40": "QL7641eVffsUgoSZFJNHESV8rLNDbsmsbA89y8jXTqJ3Nh4xtL5Rzarfae6td2VK78gz24chY1yAN2S5ePBfNPF",
  "key41": "2Syc9zPrckwKHx6WKfDS57T9HEzA5W6tARpGj9eXm8aEygmDo8URFKTmJkGuFHuZumy2BrH17nL43aq5hzoRPHLp",
  "key42": "23WMRL48NqaworHQUcGn8D41j4tLv8ZZn3ngTwVxix9uDKtAA3bUrVuGTZZCsK4mqcCSUmFU6QzgbokchZNvK1s8",
  "key43": "t4NvvkBPE8VnqvCVwMc6MDuS1yDGn5YcDhoUTdGT8Nry69ELwdsZc5r5Kb6Qstt8BtnEoh8Pw5SaU8dLcwJGHLn",
  "key44": "2eCfcS9ZSz5HBng6hpCiikExWT7WU2iT2HgWbREkFAQQT7vHJf2bnjKXCeuHzQ7BCcJMaSfFznz5TPyhvKuktsLG",
  "key45": "58zdZX6jshMsEAz16Kgy8zF33XNmaWB6vZ2DctckgxbWiGr5PjXeGkb3boLjCGY19XzYX6ukEA3Gbv47bEE7uRnj",
  "key46": "2ouTMENX51WqmjVLw6D5Fy6Vtc87cifrGTbfNjmipGPvZxyCBRy74Hz7DT1NCJJaWS2yucd4hvxTRH5caL1aWG5M",
  "key47": "2abyHTMESRx2mS9Vbv741GKuH96F2W7p72Ku3QLtXhgRXJ2Bd1sqeRczMX4yjHM5MvMyktsKiBmyBgyeCagvuo4S",
  "key48": "5pjZckHN972PsHSzq5dtSx3QA4LgzcvxRqrF2W3XHrSafpZEzJr12Sxq8BegjkQ3Zi8mgtAdU4Ypxzhzr3fhEUgq"
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

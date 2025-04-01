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
    "L7uLiz9QBD3e3U6qVUFWWxgwyKCZJRpeu9V9UEnV6FY6zrcX4QE96LjUVsovXsA6hip7vvkFDfLSmsiGLeLVoz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iqQ2LAKYAZpkPreUH86jUgfUvc9VTKe7kjCP3VPAuUF3TH9tFMfdi2yUhe33LxYM2CX8uDBxeQ6KbVCQMrJ2zwU",
  "key1": "5NxJomVTyduDWnNdv9Q6t4yfmgGnydi58sttPTQqqZmaMKUfkKGnNv9tUnJWZNb54kSa2WEyLgq2eQEvstVZKx1J",
  "key2": "4Buk54XW4ccccNxENm4yefw6my9TczcB8MJX5GxSPPampsPtWdCWTt5Ux2eBRseq86jKcfymJwb7fpWhAVwRH4gX",
  "key3": "3sZnmGJcd5rHYDWqa5tDzPcfNESL3QaekZkuTjShfqCHvC7mSexzDnpV9pPdWcPqUNf5c1wS3wT7DP2uovDxJvwZ",
  "key4": "LWxdW9fit1Hi6XwrfsHmT84GEo7T6Bb3F5dpy2hQfqoLmb9baS78ebTcsJjopGY9tV1boarkwnca7T3Wt5Bs4Uz",
  "key5": "fYtjJWqiyabbHNVNXnfgjLC96Y1K9gkVvkiTkxsndo24MzHFBGkJZPVEKmyAqrvqGQKU6SPMiNCvYrnj67aTvT8",
  "key6": "2TUhp4Vgf3k1fZU1UsVkRzbstRZU1ToH6p4Lp4rmiAkp2WxgvJQpJsWwkuJ7ssE2Kyoevwx7HiZNaRgt1vs7Vzp5",
  "key7": "yaYaddk3bRArYqH8WMPciZtayavTLeoKbWZYHeL7GwkGNpBveusf4BnZK5Dnbab5yrXKkMGTUvuwLN9oU27R2iN",
  "key8": "2LHDa1Hik2fyPr3dvadhpLr5YwrcTQAQ4durXUEKP4qmiqs5u25pjcNyyh6YhhsfX7aw7vxrZ3SfUkEkJEiXecQy",
  "key9": "3oLU263wr1HrK1AMSY3ofPdPzfo9WEhWVxZUHzeByXfm3Y53QWbEhSc9nX6tKyvwpccABbYUMLkoP1LaCzzVMnQJ",
  "key10": "2yogdT6vRPaA7KboFdSxntbpCRwCJhbwfhuKWf4CyLM4ky9q9NwBkonjhZgGSWXbkAkCaUjEwqu54Cy9yeuyuaf6",
  "key11": "mtWkj1JLZuXuBvBfnFhySbhtTKSgKBLgFdxXjaJ5XDcesRRiYQ9i7CTFF9KbChWKmCZNqrEe6fP7Nes2LrUw6Gt",
  "key12": "5nzHPU7MSahgGCRgFWCyHHo6dMBDFSMkhArhPJbRFNvAbeBwZWRSftBvntwkt1XtyQQLQgRWM2rFG1xzdq4tQYGx",
  "key13": "2hYMWZ8KJKfVYB83JVn4VaaJDX3vLeKJiKPcafkx1mMzJvb5uSkmhUXSAdPHXYF4afBC4kSgMjogWWs54XRcUDr2",
  "key14": "b7qn9AXTktPqpcCSq9jLe9RYw93PdZVruwFEMLVodXCNa5c2apvrNipbBepxVJP21mLw25s3zUCV7YZQnhnMFeu",
  "key15": "54rPbZTQrtmSCuWTskLH92S1rV7ACHUqg9xFmYwTVw2PdhnVaYrp3F8e39KV7oHbghbEw5kkXMcVrJ6hYdwBJ1fy",
  "key16": "32Wh2owLDLR63Qq6299VXaYidGwAPKexnpgJxAemzwd2oVfGpVVcGDvCNHwRHvCf9jjQBFUnFHVHYZULW2brX7jZ",
  "key17": "2P1QkECijquzKntqV2DBmGyuq2rpNg15LerHwwkjWT5siMiD35z3qD8a9M5WbeognRjVezFd9rb6rxLm3Nd7FDza",
  "key18": "5mLQSqq2y4GkajAWH5AsoTHX5wQSW1MVTh7HGiM5obv3T7L88xUs8r3rtDb8BGndTq3ToraeyiDt4RM5xTZiF8gH",
  "key19": "3AVuSFgK9pLoQjKANreHuke6tLiDBTVnwsSPEUrFjJqsYvGuA5QYeK1bJhwu54Qux1yC8GhpywP9BeJueFaHE6RX",
  "key20": "5DVoDbgm8zM1F9MW6wen6YJPc2CyBkC5vpaEDhNEkpMoojWFpiiotpu4XcoeztYQ1HfquNtjtrauXCCVHWucDcAP",
  "key21": "465LB8zWVNHoo4H7BmKA65DXZSMGT7HuJpLS1twTYbmFi9xoQvDQQ85cErjpQDXzE2HshziaWMqe4Wm5cGNdUtgP",
  "key22": "3Htqanb1HPcuBn1Q5sHVE98HuchcuVbAxFeCGHXwmh5q5Hfeh4pGLYBqNod7MsufK975nBN97VFcFH393f1c4Z4k",
  "key23": "2VTVTTGSFth1pyymi9ZmrXcpdyzQBJwPZhTJqCBAT73iZQFVtMbHTPqE4yoW5S5dyfgSy5XDXR49xR2kEJgscp9w",
  "key24": "5JHMcNhA3hh4H4JiKMAeGgyTZBDnJtZRhUyLwuozf8JvuASpWasAMr1VazTwFDbianRYMT9Uv9CZsTdosYeMd24Y",
  "key25": "jHqG3FwDguAtznp2TESx1KChCffu3cMobnJHzp8t949E6fB4pQXjEghxfHaNjpWnD65qYFUb1Unk2YVeA9DKgat",
  "key26": "5tBrS1zhBTdkeuGzSB8iaSYf7egeb6zeQ6XsiEEzQHUJr8xrLKadnFXbsnDgeHaaqQdeGLLq3W56d1Y1Qn3T2TJC",
  "key27": "5bq6WBMn6D4dAtUoQxshjVnVYGCdxgtvoYE3964hPH2PJFfyNugeRwhFC3Sv58x4gAsyMxJdtdQWh1mFFq6poo2y",
  "key28": "27huWphCCo4XAvcb4AGLqXC1L5JLYRYKRXrZp2bEN9dMqA3vS7bVwKeXgv96xk16D1bAodGtEYRNJQdQGToenox4",
  "key29": "5joj3UevngpFpbgHS8vByQ9zqNFTF7KtZAEeVEawNtr9mmQHY3nYB1wFgmWAqKm7G1fustvD2CFVBopM4qCjxvC4",
  "key30": "5cFKGwLAwzqn2fDxyHxrm5a79E3tLdX3f1scKzUQJ5j19DYZmHaCByLHLqYCCuYyFVdfqP42RcmHd5wpNTCWrTZq",
  "key31": "3MWToEhgNtJRzR8AzzXBegHfsKnjqPPY15NKK9THaL53uThfrTHMMVgfYHrwnHoZgeejrzzmoZHDaXWKhvqUA9VG",
  "key32": "3Lx5GSey88YEMRxHQfbeUKUFM59MFQXK2g2CnDbGkggk2cK4VAwWtesvGfj36pAhA8ng1sh9k5Z7GsdN4k8knFAE",
  "key33": "48cc4NfENrxx37t7HLVcvhpxhb4aMYgvkPVdaGB5VXPBbkTrJT93A1afxeodGCzrfwQqALodJoX7uXanSEuNx1Br",
  "key34": "5pUT4PZDxKc6Rp7xwX3QafPJ6kUWf214eVCyEn4y9u65EjiF9ToRfvSWU4gGrESgQFgGAiZZy4Qe1LdAZLijK93v",
  "key35": "5eDgAothfbqzW6sWdAzY9rLvqXmnWcipQgsopUsVrkk1bzj7E4sJ7rqazJCnUAsheMQx7zHeLQjZphskgZZvvcDB",
  "key36": "4JfYMth3WFADyKGhLgKFPmsr85VrBdpdkxdsxEFeQEdJqw7QfjsxqkN6jqHwPeNi7zum2dHNBCQ8tGwwTak6ZBQv",
  "key37": "62sgas2vGmoApYF562HbMP1cC6ArSEexbMRXf21WvABv4Uh79VeDjj6eCzUmEKcbTQhVVnivG1zBoie6YcHycMur",
  "key38": "4v9Zkrw6T4SnooEUW3SANd9TZQB9ytF2PVSPh7BQyEn7mhqUZvjecchwNjjFfo64N4EdRtRducjQWBr1qzW6THQD",
  "key39": "5jkjcmCg26aeBCA4GdyLwrF9U8jaPp2wAmydNdWkP8R1WVyPjvyDDz6TvbD1CXMqkmixK48hsyhGM3G9hb7FGg9d",
  "key40": "2zmNRJi2Sb9jQ64fhHHmhadhY5jBuFBVHj94W56cceMWMqg8tsrTgfcdf2bz9krtCaEBcijvJPGdXwZDa6ZbPpC1",
  "key41": "4eZ456GmGqNQdyyrWAUQ3C3W7BUoyxo31BY8XdAsJKwVKcFtjzmBjy8hBSFnrFHN2h3tBSGooLvFXQ76LmANUcCJ",
  "key42": "2isxbkna2SH9ixig51pwLpQutsgmaxnioSakzfuAwJSALorpbsm89vWeb3Bik5yNjHm1h7KgksUsXRWxNLzunHPz",
  "key43": "3KtC9QA6WDeyUX8c5gvVvEFsucmnVf4178YQQGWtw5NdFV9EqSmkaBiiV5k59UZWkrbDZAfQTAJhWQF8A4BZQC75",
  "key44": "YtUW6cZ3FdBSKMg23NPRXs9uD3ECXLcZZT13heBmuw3CmMUPtCwoKwESzMYm81eCcrgRHRmN1ioihfzJZ6xFG4d",
  "key45": "J99d5RzmCkBjzmeu4p35nJUErUVNNDQbp91pc5jEBpXaYVu8pcyWR1XAHJgBcov8fWGkrDLsjwMN4ucwfgvpsEU",
  "key46": "W3K4HszEYK3cj9sfnBLAZ1vXyaWe1qdiPGe5utBYmzR6mdBhoM5a3AeuEhCArSNczEvsH1mayqCkYa6XatyMQw5",
  "key47": "66evbrBWucknHxeEpsYBqRUQdQVy7afeT3gA5XjQfxVq8iYaVpYvRvjYXsbviY5Cdk2gT7Sov3Wg4hnVKuDvfL5B"
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

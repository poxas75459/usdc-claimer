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
    "59JV5ZCmcdg1VxGixL2195YvsaGNJWgKAxPnpWmpvjx6CNTb7TmhMH6w2s4oDu3WvaHtT8gF3dibG21CWFFgNqYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suq2JRAh1Ee8i8ogFEijoJdYKrkVd4hrffe8VAmHc5iavxJNfLejy5SuYnLvLYwmDZWmau4DkuQPMADihaq5Mqb",
  "key1": "3LWPBHeGiKk5BEEGqP8Kkch6vUhqRirWtF4RsqED8MX6ZGnNAVE13pUhTF5t95gCunkiG6A21AZ1vzPMfmAQzeXB",
  "key2": "4NcS8iMUSTBNN15hkiFAWU8VEB7FtPEUzEVaGc2sq1LKuFZko9h3ZG6jd9EdSwB1HvTodnnLk5tzLunHmMbRZZ5L",
  "key3": "2C87WNGpu2oMjLvuGaVBzfguVkErPyDLfq1UGddiFZAyk4DBykkiSt9JWauHppyDFRDi9Bot5bQPFNG67djFpV2n",
  "key4": "2J6NbcqaZ4M3t5pfq6SYmhDDgHkYXDarQkFrShYJjqN6xGcky7iQkdEcGgvLN5DNNzvQSHZiVrPNm9fLLQskj5p5",
  "key5": "G6LTLWFCx9KzaJGXWcAACKWCY6KXGZ6JkKjBdzYH3FCvh6e5VJA9ELQAE6eSDMkJSKmQD3QMsEVZdvBfBUyrDYQ",
  "key6": "3rNySspRE7UxSPEi1LPPGcbuVnaebwChNmcC3HDmjapfbHuBTvj8kqEMto7QiYr3yVe9CvdNTg1JpxXCt98tF2tL",
  "key7": "4R9WrF35fiqXo2SmK5R5hvXhvqi4L2AE9jqusLCwYvzUvUL2h8ZnyEKpNikokYrqwCaZfLipTuzYBNAiNDiCBgaq",
  "key8": "3caxKQt1wKbL7Co4sADbYRfoLfGtfpNbVfofHHpUWzCzH2u5CVK2FhBARVL8ViNq9CNgpFFTAjnDRAHe7Xub9WZV",
  "key9": "5c2sMPida2rRtdNATVwGJqUf2f3jx8iKR1AHrPD98drtVsVnDNU2XiziTjVrr9UQnVeawqx3pD2kXUhoD8F8ZEAr",
  "key10": "3FePPZZBvnvqXTamHm69kTtnU8B5vESSYXuQSh7qvWuPoXyFUKT3zQsRXG1t19F7akEWpGCUXrSWNt3AwCEpEY8H",
  "key11": "2smjp2XzjxhLhRpkXR3JBZWbajeFGNamdifnPtw7mZ3cbBbYbZUXLQahwSZGgjWuYJKfFn7xZPt65U2CwYAP6bPZ",
  "key12": "3w2AXN5HvJKWBoLfivHVqxQNG24rWp5xMvDdcDnfHd2Kc5CuoYrv4AQDkhw4be4CupNADsoQ4CNkFVDW5PJ7FwTg",
  "key13": "iZBhGhVxtWx7aHofVjzJ1F6kE29Pmdsvtx5dy6UVNsrbLhVss1iNuPo2MKuepNw1V5RyNsw8HrLBa6WRvSQvBdY",
  "key14": "Sg7UofAeju1VgWJ9Bijs5ojZ57dgA6FteTHp2nkRVcPnHJDodJCUo1aBpBesFQ4RpLtgpv2RqyDoMeie6BuNPZR",
  "key15": "67WHRA5n3EjFmiruDfwyWtY2KFjNTHZQviQxGNYtgnEFK8jEwjCjvDvtwv3Afv2WCbRLexSK3yjiySnrjhNizUo9",
  "key16": "3UjVaePpY24qTPXhuScr5vL7KwGUbpknfuwFiK1C6SyJ1dfsPt6SZ35WSFFDrMkqMtUCi4qvJAdgdcJj9hxVz6UL",
  "key17": "64CAoAR4MULoMdmVzDSYGd1Q8HZBiv9szHXE7ygem9NtkM44W42iNW5JDmtfre2ZJUnod388gcDwbHEp3NRgD4Nw",
  "key18": "5C4rcSeYobt6sGm9WkQHKU9AKRb6fTKJ2sdsSniEK7yShqENEPLECvgJAEPfJx26e9oUHy1EbdjMEhRc5hJU7fqw",
  "key19": "2nrBUqiqfJT1MP6S4Q8ZnKCQU2ofNvp4u7GcUjMd5fLrQpycKtvcYhxAaTp2j3uH3gYiNAKbeJXZCsKxDxS6koim",
  "key20": "4VshSxU3bZanPLKMVT4mJPBEvCnbx2CvSa6vLa7sAczJFMhNiyrSyeCjmtPEHZtnjk2Fujvg8i7aWAxqZKMUAAz",
  "key21": "NBdU7KHpL3gThLzxDJupeVbPoHqprAvp4yrwdFP33TuxU6zZaYm7NH6uYHbjHtLy5Q4hencRaF8C7gn2FGPYDXg",
  "key22": "2pEoLhgVBix8SwgPJ9uWaAq7F86wDVKgQUEep57VPzQHBNHzVcwVB7z58eEavivNhZpZFACntzrPwrCsSC1bDDf4",
  "key23": "5JAb1K2XEMJcrQzAJNMG5pX4wEemzm5BUR7FeGLbPLQbbS527x6Q9d4AqLsHyDHUbfkFAFEMrxwQEWG2u7GpSbbY",
  "key24": "4vGe6QSFgH7a3cMoe72y7q7U8jS2u4UyBKhg91oSFhX9QvFCkxprnZ2663RWdP9N8EQEg6yzRiiboHWzKFzT7XBd",
  "key25": "2QnUAhknHfkbDgF3AicVD2nifhiLEx7mSsvwpiP9xedWHCZGti121aUpAMtw39WTJcJCx5CWRmRw7WDC5gxYyGct",
  "key26": "5qfkSbiZNrymNW49F7KA5UJHWJq9i7T9SpfAuPMipGDoyjRft6ZFGzY6eNLT7LSep3UASHDdpYnpg7UDoA8CWjA1",
  "key27": "3bV73eE8RiwrNKzSrE4xrXcjxH3NF2bkYxGHtsc3Yr2x2zkS816QkjgtW6zX6Z3nUokQiGrsVJXani3CMk8GzfUS",
  "key28": "588xQqgF6eU6wJWJbH3wuEr2Fxu7oanhZLyvFKeuu8AFKKEWkeFgAXCgoFWXLap2Cu8t4XWHd17HXmv3YYgbLmFm",
  "key29": "3RR2qNxHq1o8ETSSus41hEGrRZrspAei6csz3hymWPE6QPparNGidhDJ3UjDEvfNeCLb3FC4BMcYyYFEwLJKBCeM",
  "key30": "57u3piWpL8o6hwWWe26jHLz5rqeFbPjgaGRG1dHFST7ESQVcau6pPXwar6shvnUifLtu3DiJcLQbavnbB8PrwEDg"
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

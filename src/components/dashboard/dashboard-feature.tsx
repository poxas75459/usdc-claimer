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
    "g2RCZoc7ikZpgQUVrsWJdc8s3Sk194MjMteEB5QmQEqR7oPoAZqMMfratokPFLH4rueorD8pjmnGofYWQaK7gj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoBJ2c5Yhw3PfHN1jRmApxCuSCepcMwF8iiNLPZYqARNpWTRCK7Xsb2pAVEpyRVhftEwhrCiUjcQPz9DiaNHtam",
  "key1": "2YePE1p9X9AGq2JPSkqzUMkAVPgwvMRRakKSVtqCtGz4qQHngT8AcBYsj2vAJvFsMdWMcnQLiiauNU1MdpyXTzCc",
  "key2": "5bQ9Z8HwR2ZFcUunkFYBNTAtcsudpkt8cX8WWZUcPdRrsF1K9HNnZDD5zwGYfuKH5aTMHtJe8qBJ6pLo8EzyJfqw",
  "key3": "cvzQ8NsCG62kYCkYZDEhjQj4AbkaYjNpJKXHk9XUmK5mZucjNp4qtQ8CKp4zKkqN3qV83FcHUGa9TSyPSEpnazz",
  "key4": "tMpYArgdrr8wQe9qxg8zNbvWBmooACF2u6FaZhJWeNSRhe6DZS1DniWQHQzQvyPhbyF5XnLBq9jCKy7gRhKCV3G",
  "key5": "4z69Ym9t9r3jZ81pEgCTFtnV9Dn8xXx29JFdY7yGqvVsSPHhzxyGREi5rnSCK4cGMzpPD2uAmi7xXc5BkG3KpP3d",
  "key6": "9yvxTUpkXso6NU1NJEXS9M8qQ7SytaKUkt1K1dbQPLGf4i4pw9LTiUHK8fmjjQCcNvV7V69hS9nxR3wkwj1AQyG",
  "key7": "kBREijV4KspYyKgBzFYLBojiqTFwEDRZjqoxWtasCbXkFYi2DJZ87tKz273Asf9KPgCfkY9oTSCyTV6X36YTWq3",
  "key8": "25xSatQ8HsbUzsbS5f8Xuj6kVoqeehtEdt3ivoALK9y7FQZT6NjvWpBLwxCGUUXfihRbLmrteCe299QGHS9R6hJu",
  "key9": "5jTehxyfwtDVzGA6tpkQEcKxxtt9GdvxyssV73osBiCw9NaEWbeVJpWDNJHXMYdwWRrphoR7yEH39tC52Ka9t4FG",
  "key10": "2bHqvjbi62yA1L285CS6De1GTxXvLBWg5WHKJcymvJXvNqMAmBgVeYn7Mbmg3xQMtKaBCWPra2HjMyQWU7hbNwCc",
  "key11": "5sxK9qvd3NTP5XYvMhnB7fEo8AAWDwLYVN2hBzpt8komfVuV931G8vrp3JzXP9RgkLKSLkSy5daNyBUPuJVSkVTZ",
  "key12": "3w6PpEMgik6fsmZgvDiqBetqznMunAWRcbMEvAfuwr29pTPV8U1HY4eL8zD4qYeGnADMrJtTBBoEv1qVY7bpuf3w",
  "key13": "3dNyoTBXPd6enxeapdWY589han5Mr48zXtkH3RdUmwPLAbVZdAF9xrbuwJrL5WZRtSFU6WW8o9MmsHDgzSgHZs6E",
  "key14": "66L2gh5nfxPaByY4EjWkaV2NKEX8Hc49e8ZJWhhfH5UWXXRcUg3zJoWq3siMoqrpjt6wbbR5ZbivLCbDfmoYLqZw",
  "key15": "5yWmJoxCxnF4fTnBifVHRf5KPpHtyUeAAGgTUArTHY9BBYaLX3NHSo6nzGmpDw3oFu2nKYnLfkhCW4cXbSxLsUzc",
  "key16": "3vkDT7zBYizX2JGJVmdNuwZVqXicnL8picF8NRhcmZdrhNxn4TsH32wn7nF1Et7CdqHZYfJCps27s2E97Rr8b342",
  "key17": "5kvnvqgGtPjA3Zn88Hr7weVeujqwpZPTtugSH6Dr1iT9SNezHKk3QjqqS9qCD8p3vKzMmXUzqioXoTXa3joYHUus",
  "key18": "2Bir4URPdtRRVX9HXF48r94SdiMcoeUxiUgHB3KbhZjvgu8RTdjUTwQmZ58DEzxvg7myyaKj6cFWbAiLzaXuBpmu",
  "key19": "5SEmd5s9jybkfm1NuvXiZWgKDChHiGZCdFKou8r3xFFt6sZt454QrT3g8d5AanhqhNHnqGEuH8Ej5FExo6NiiyYZ",
  "key20": "4a5wch8qEM5VJsEKX5nxfsZ3DGFhMW2WuPt3jfxrPKi1EMgQCCQA9zCj8qdkyMDvMvY9pR1UDJHkbYYd6C2UxZpW",
  "key21": "3iW8vjLtMWKPxLLFvGW6xVJ6Rh44tDhWPank5AXH7io9s238xkx2uvqYKrfTEVDJPgBKfnHqgwpmgwTQLHPX12cF",
  "key22": "3ERC7L4LR56oNfZ2gYBz6PUkHcnxpc2c3cb4GoUW4nFWTkHGkHArx6NX3QBHswPAL3gTiNsbDWWvVYzzespraz9y",
  "key23": "5pCQcz1RuAgvXVd13QaLnaz5QCwYyzh5TrsRXSz3HVr61ai1gukcM46xqheXKvuFiUWwVDYMigCQqzNJxcAU6P4m",
  "key24": "4UDFDwd7r5kdsw882WK3aCpdV4Z6onqJdpUhuLDA3sJULmmbH3p5NfrEfNhrTEo67hNUy2vngasivwrvKYNyR5Ti",
  "key25": "3j2XWsiSKkDWyxo2izGN5q6PB1VUXPmS7bNjgEmMN8MkKHZ2VReGQ2DgcyRmA7Sy97SB6Qg2bkJy4xpS2vKTYMJz",
  "key26": "4ARLLtd77oT4DVA3UQHdVKLUvZPZcBNMZGeKc6DJBbRtmvrbd6WqZD11DvDwLpakjnYFTrj5cB4evtDDbkkEksZD",
  "key27": "59fk8exZQwPEbGeTZLnxM9TqwyeyoQzewYc4BjrSiBT3sr8nFY4D6MbbGQ8B4iiZJcsgTDpdoDn9N4kXc3iqYaf9",
  "key28": "2n6Pk2WGXwdwsA2TnU1sZFxFwgzJx4h2rNyZjtjNUX5Bdm25o4WwtH47TZEH3TVuWSLgyagVVPxDF9vfwkX439MN",
  "key29": "51jaDKNieAfg9LKzXgSji5CJ3KMJW5qKZhT4jnq3NsUNJ7xxefHACS7kwJf3A1sFxn8MziNccq24QbZWv9SkF2Ji",
  "key30": "iPNd1779J6Rdxrmq5cRwKZ5cJsCyFg2ZGAp99UgiP35tExuyYprfM8vsjWQgjWbuBPybEPkY7kb7utrBv5wRCqe",
  "key31": "3QtjXCCCpbCm1sWWa8EZSgiazY4tr588my3FPPFUSVDZjb7ksMRXPFJ6mMwRCNULEZ7Xu4RJHcCKXuzacrDjcFUe",
  "key32": "2qtTZavribJTXeVFwj2SuBAmhxhf3rhGjeL18BWoydhy6T8pU3eZcjxrQuBY2kwFPosnbQ6GR9ryPk7oTUU3DZjV",
  "key33": "5zBgwSeCnf1HEDoBV33BGTQUmfgmGMSuBCDc4tF3KNitaJmRVFC6kRTLog1mRkP83kojjeKeRo765mhW4KAbhnT5",
  "key34": "3FNpoWbiAFtZnrR9qp7J8uoJ6hBGNBWaKm8gW2ZgRGNjW8VGrr3NLAiSZFzQdidNF2yBrsCcjT3axiAyATEKKYMo",
  "key35": "2yURvudmDXGeNFiU5YzP6k9M6FJActXTG1YaDfqLPyG91wgVMNY895WdgsUuM2FfYJqWG8xnFwDEa4FJut5hxvba",
  "key36": "3LhJTuWatJJxToV7foWKtkVTVB1XGPumhPdxj2RsKaWsixWNgG651PrSC1pQJFisfDXzKdvogLsd69RFyv7s41x4",
  "key37": "4RL2zjtFehCb2FygAeWDgQF91Ds5EBJwDKeSzTCYv3y2fCLGYNZH8yyoN9gSdgAG19rXmVobBUJwBtss614D1kEF"
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

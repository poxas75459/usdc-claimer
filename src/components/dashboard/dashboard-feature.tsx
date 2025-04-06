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
    "2c1CaheFnA6WbDher2tiE9fNLejkApxPppgu7LHtKH8ZWRsYkaxTNWChMy8yyJJ8kwFZK81JSE6bD1HEGSYqiAAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLwRnYEDRmSvks9uPA4JNohQZ3HpgfK6eBHS4orNuw1sPx7MwntEZNPLMxAwkfkaCD3nJHwkFz9pW4Yfoc6xpYj",
  "key1": "D1hoo4jQpHmgEKiZtZvVw6ynN5dcmVjmrKnQ6kZMwbq3XDkFrPffS2q7sjUsped7yrAxiKZPT58PGrbyo6RYpad",
  "key2": "2FiZ2e29jZDuz32FSbzYcEXxMWq4jJZdLtqCv1JgjVz9qZCttibDWFPrSvmdQMDPvUa4XkRWocNgc3pAPERCQ5o9",
  "key3": "MiWKwimxFWz8Rif8CM16KHYQx6uLaufAwUwAmbX5SWrMaFneHUWkPM8kJGKJJBChp3BpdPi6pzcDUFCLDDSukcE",
  "key4": "5js6U9TMZN8jGZrBJf65qUCkiQ3E1LR5DyyDbun18Xbjp64AXAGdjEokGsEULyUbxs6BTMJer7F2EKcvhHS5UTtC",
  "key5": "3Aw2fu2G7N4j3ggaRz1sRsTfHXg3gBzzugouqE8GKPVxgvy68ko47dEtPBuNr7boC5CtNkYnZMfUAgkqnBUqMh1R",
  "key6": "4AxgR5YpoVzmHDFQWq9GiC6xfoxuUiGVu199aRqHrPezEjZoQ94FxhjfG8hw29V8RZhpLWLs9LDbUsDUsRikzfbq",
  "key7": "5H8yPX61kquT1XYVX4fbSMjwaDENj9yFTnRP1s2Keu48pKQDvgPL34bhFy2CMhCienWREMMaUCfdVZ8Jz2FTudnD",
  "key8": "28Yn8kqcucjSMES2otJQ3jZwA7btxDXXePbZv8X7JJXtbGwt1GrM2eN45ZSDZ4qFMsEcTNPKjsfEHTnAPrpQdbYs",
  "key9": "5VDyDk349PXwKqdDZ56ihtsPBfbrdyVHQtNx6TFR3czxAdaZEbMoAqFVuYWDm5gXtdzrMy3STSsohx9s5ZTPTa16",
  "key10": "26w8Q5oZBT136UUDbasFCbkWQ1toiHKVJGVWH8wYmjs12ST2785br6tPvaCwBTp9rKeefQPELLkAsrrdLqGbeGbS",
  "key11": "5zsotuTdbC5eVoxbbpVpvGGthvo9rq9hM5otkSDDdJijaXUdWKKBQEde8VXpqVoGKJSmBPjPxsjsQFzTkWQDdCpe",
  "key12": "53em2ywLQ67umZLxair7GkCH8KUmbs9U7wKwoziuvZdXSvJch9RbCM3JoYBSqHWjQMG9umBGomjgtfhxPvuXQevJ",
  "key13": "5cFnhgaRFSrCvsPh8pGvZwE2NvajKfKPHWjga94Z8DX3guyKZf7DbfS6TxyHecpjnCLvCowiwZKrtPYHFwANArPG",
  "key14": "3m8N3LJpSxfr415Msdor52xypj1hsCrHa9EiwvEwcQNwm6nCdzZ4fL7jHuKNm7c5gh2rpmSnPQQboXK8AmEvQHPa",
  "key15": "5AQjVvFiiubbq48bCHktHzaDA8ejMvBUbqx9DUxPckmeMNmes4edTAZDwFX29pAnkMyf6u18xqzTEEqM4JCd39pm",
  "key16": "3E97MQptqvTBU6kgV8vHMx5rE3NjmUzAdpJ8pYsjbeBTRW25sXquLuAQHiAer3qzNQudQD7sGdZbSXBkTJSEsGLS",
  "key17": "7GV4iKmnKF2CtfgWDvPfQTFATZ2z2EzfDpQCoaem3U8G11scPBSaLDxHr8sWbfRWQHYs4HRTJe2WWBZmcPwy2nn",
  "key18": "5xCswKXBiQUwqtSQWdhCaJxhznFmSUSM8jGYT1mGZ4T7xx3rBNEzwrUfUewqqAgFRPiBq1RUJJ3xXTexUec2dLU8",
  "key19": "2uUH5EAXhPE4PEtxBAzYeRakSwaHMvn8W1YSUCrx8vmwguUvdgUjZkQ2PPNfVUWdAgdxHLL5BkncNzen8KwADpvy",
  "key20": "29eHmFiy1vgBtei95a5CopamTkiHxNDCTHdeykrntpxChemf5dDJ4PEVhtEnDvrr2fzNfH8Y24Yywc2TZzDayhWp",
  "key21": "3KwXZhRCYe5CYFaegWNJkiZzMaKz7FNb8Pyegv2gMhZbDr3TW7QEaD9nYcjP1SAHNPsDDknQaEJTkQMuesyNEcFi",
  "key22": "2wJgL18eQp2thb5NhMnCVfzYhNLD93hvmFgk2xmM4ih6qHPek9xJz55NCEQBoFXusA9DXMmsEW2hUkDC5zbP2iXM",
  "key23": "4NJyrcvmXKYM8Ji9cgGy3K2sLWaNyvPmMKzQ4njYejTtC3dduDDzgWXL15qpBQTuoLhJdSE94oEfgUWGEcaQCNmH",
  "key24": "5YzNZQ2Yr2qHwtuq1YMb3gJFpfci9HdCp7CiATqmEjCmSKnFjQQFTfHsAJ8rfX5gqT3MppkXVKj4fmCdf2Ym2yZd",
  "key25": "4YoZU6gwrhBEWVUHf9gEkuhvvQjftnYsGk8WrcTsW3ys5U3g4kVHQgJVqPcjHM9FpwLKMcE8fDHH1xE63myRPLh9",
  "key26": "4VFSkbiagY5m2Fg5iK1nBR7Bg79y43s2BmJRptAzmMemCZC4r2VhJfz8iLkxsxui7aMknSV52cuNVpbYSWwg2AMm",
  "key27": "3A5nKmMd5b7eEPu1GKBJVoR1eUxbdcHbYuoopHY6yTWUakgwu9dZeYSSQXwv1YonuKaa4eNgJcjKZUviBpcMxqFT"
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

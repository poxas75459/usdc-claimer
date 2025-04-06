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
    "5sFhKDC64nL1S2qLH6zfMBitKTpGuRWzwvA6u8NWc3NX5wDwASVsrxiyZDyn4yNxGb2mqsEfFh5YQchC3PL2sMBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSuf16ekYozCE5N6VobeikHBQVpmVgKDZfg83rh1fLtw4Uu9sPwWWt11zsska6yu8vjLtGfJVdnrGpMuwBCvj3x",
  "key1": "4ApJVgw8EFP5mqhYPePPdNSTzvyDGsFHQDmPy8ebfrBkgvAQq9BDZcJUHqN9D3mFkuqgWpMvrDAqUofvVR1Cr1rd",
  "key2": "4LX1MxcFZD3Y3YinT4GKBEfWz8Gc5e42kZxDu3GDXrAXasi4aAqpM6q57eBVWwMuQu3yG5SAgcJaUHJnTzf6YeqP",
  "key3": "5rVaHq6HtTS7P5FzKjAN6uB7B27rdFeXNd8ngyRZ1wzc5Frx1zMk48KktJRTm1ezGafYC1tQxfTxwzGqEYh2kFbz",
  "key4": "ggYtHbBEuBMtDSDbkd9JAmnxC9dvd3q1tG9yQ5yebELuZjLL4GUYMU4kvkJnNt9KWKxvmpQwvZf4UA8Z9okPCjv",
  "key5": "2i3P9ePB7G7A8hyudZMN9bWTEWoYj1ZzEuG5DJJJjoWHucsBPgCfejxQki4LSSU3GnNnxhAVcc17wwDBDGvrr9KU",
  "key6": "5EurHNeirXqAEDZFgWzoDwLWMDDYbWVybuD7yrp3AYjf21EqAMytYzQ4TV4XgN4Px9Z1kXhAJ115jBTeqYoEvBRM",
  "key7": "2DTJDED56an3vh2DMyitcRjNCd9ytui11P2ptU1JRHLhh3Wadcr9APqen1FUgN2qFDNpDyBwhapfwjnFRrH8uDoB",
  "key8": "4xgBuoLiYULXDr3K5EzD1SSZa6ru1b5ZdZH849A4HGUtoGwd1xweupgswmLctjc4uVcuJLtu3YgGaGHcdZ37zXNo",
  "key9": "rWJDwnPgrnbmvPSCmxAdRSSeyE1gx9NdjwpJ8jti7rejiU4pnatL8kUz1exyQvWFfBRMRJ9p8K975zxivgz2iy4",
  "key10": "2iKHwJbeJFRj3ruL5bwnKopG1YAZoJYfXp79KrR7pK9ozpZNZY8y6fWGCduMRn4ro8mzJ3WSS94ibfwP5vXPRkW1",
  "key11": "5eBq2Rtyycn3C7L84qLQZKJuoURAcXkNHBXAoH5EM7Va5AicmFNn6ZEEhKd8Dkrxpf4kp5DRTpNZedfuBk4pK5NZ",
  "key12": "3KsYCFV2WZNQFrCphGmzY3CksW2tKptq4j1r1uY7UvR7MjCBn1s4UqVgbRXiTZNje9DoUtVG8gQGbse5xMwnSUq7",
  "key13": "2Ya1A7uXeRbgiTzjJsQUt3n67HUPNtf43Kwtemw25iKTMSEpPMHXyTScNQHkvbgK5i7UkWcwRCsng75p9Yffw8UU",
  "key14": "654FBkr5WrhdocDkp5ANdXeG1Mx1LFYerDCJN2nkSDQWi56B8voxAS5vyHe625s9tDmzM2X1pPjEmHrEYnJLNB7d",
  "key15": "3WrCWLdBh3vCAfh2Yrb1zcumBQiDxgkzMAqtUKqTHrrr79xDpw9y4UMtf3N4hyrzsag5QAkLv3WrdzgFDosQysjz",
  "key16": "2JYap3gx1zKakUtUgsjJYmntcMWMccWeM2H17ppQ53GzyUkmrnvu4NgdCA9WJ3VUnD4zwuSPfivLwFFDhR6QAYM9",
  "key17": "4hk988s9XDt9LLwhbNnSJiVLqusqNrkVAcLwYfzzZAzmYiuWWSPmcJkifkZYpM7QhztmxgQjzLytdnfZUHxgSwCe",
  "key18": "5deRcTaXqdZwXxuVbmc4dnSxUY8Joo6vnXypjawQXkPvTaYMoQ4sZgXVUd1AjvaEbybxnx1kwDA15fKedFefoCRG",
  "key19": "4SN9rSpyHkXd2uriQdUA94GonyYNprb2Zgw3qMPqcxYZ4GyoJ4bovUYot9JpaDRsfJabqwCusNVHxFBUT24FJHK3",
  "key20": "sWHqtC73dRZAdRbtijkpBtdSpkDYs2SRk8mvasXGeZivcMnYw9mvmrDbsNgqH7vZRnUKctYFfZmNtfzVj8zmtS3",
  "key21": "4jHxEHDvfAFdN7XhZ75K27CzfiNmobxaBLKtvGgm2biCZzXyiXHPemb1CstheQcXYuuownFA53zg8AN6aMdxiUzF",
  "key22": "3sQgmx5gAa7m3mLTqQVAefytPzT31fKEdyTEHeCjgWd9wHDTf5GTucRfNT7VJ8nPhD9aFvMetT4KU8ER47bVZSof",
  "key23": "64jbEgTRE1gZgJm9XQBZKSDwRgyEAn2TaG4AnRP6ECepkSMJyQFLmr1Sr45ocVYtihg3HTq9Zot1js6ftG3wCwhG",
  "key24": "2KLH3qKES14RHpyaXL7z9yK1BacGyR7JfjcyDZYzkNr7hdzTMjUq8dDL9uUY8wJMioHUafXywM9QruhjJmB8Gn2T",
  "key25": "2sdaKmnmwfUruyi5N7HRzFVTRxgBfs3HmoZjkwhhd4RocfSEjVFtfvKvjdFvo52rBbJmcWDWjUqCZ3Cqn33NKBS1",
  "key26": "5fKLx3ypqzr8WhCzqBjHrYq77fxNrNDAsunxrBBo1sQ2uNov33fnhzcokEvtnxmYRCiXPrbn1tMpo3XpR2rBYewt",
  "key27": "21QfxHfuQBjBszG98oNTU8Zpv9wGHWbgU1aaN6Kq3KtGX2CjxSu7eVVAHykVDSiyMsTgupc8P4Jt734aytHG6Bok"
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

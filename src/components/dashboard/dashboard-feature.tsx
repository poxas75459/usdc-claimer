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
    "2SFGE51A144SMkGtL6EfBT4R9S65FzX7QzEsnTCh89ZJgZd8Hp9H8aW7F2LxsdVcrk8STYBgDirkvcm6Lic53sqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phz7ZwE3nqFwLeW52Vyhaxo1jcGrXGNX1gRQ6MZHvHDLxJTmB9MDskQiRLUorUVmDCp7jjTby4BibBcKQBtesy7",
  "key1": "5tnhzqaqXXaYJVhnbHxKWyaEsQ9qeyJrkFbG3BzXZWz3p4aW3sZXTmCxsZvUyPMTFdagHg6xKuXzTeSRt7uvXhB",
  "key2": "5R49ES54Ahynmq8ckxqGJuyJbX8ds533dZ5ZEK5TQjpX5mkCPfn9uEKYURADsnJhh9VDTNzcGBaokafmrYPvwV7C",
  "key3": "3Jq12P2DkyceYH5MXSDvYqzkc9kKbP7G3hf9tCCg7zUeuQnBU1YawKprMJPgVHF7stKugRbYaLT6CthawknjDa8e",
  "key4": "623RYV3PaKR3rZjvwn9WcBYxP1ZonZDW3AghPYhVT9vNqN9zELGgaYeg5wwTDwt7j47jzxPEc55kvikscXoMMGdp",
  "key5": "4Pe9r4j276qeE28eFwtFhBo4hBs47saEh2JCv8NeD2tAuVHanU1so9DQTBcxZ7gbrTbhMXbPzGNJ8juMEcAtMop6",
  "key6": "5mKYJNtmAHgCWP3iWCAYTT9pkeJGRA4cDxrXTrTeBqNKBy6dcPT3PTXiztzhMvgxkTstvHVUegSvSWcgnV3Q7aWQ",
  "key7": "t3bnzdBVd3tHyUCeDyW3cA7mgBCdsbub2WKm31T8ahr3P1MDMsz7MLegw5pySnEx2DbqihJktq7nDXnsigs4biE",
  "key8": "3JszkXPcVbe8WnyMRegRknQnTeyVBRiahprM9PaNGycqE88ep2XrJSYxr8quJmtYpdhS4rxQD5kRqQjpux7MEc6S",
  "key9": "3ZK9KiCaSqx3KQp7iHW9G7W8Amf5aUXTVvckZzg78e28YXuGiCe5tyUEFNSPRZjtygwrrCTAiWPkUov9zoqAjH96",
  "key10": "5xMBWBHYG4wdUooyfLjW5QFjMcbsDNWFWDWZbXTdR3k2XBuk3qPf9wpHPNaAV96p5vQxmLMkEAr1f9F1Evf5zP4F",
  "key11": "2bqYdZsfhuxRJhLnH8K6WvYjVryUhkPkT6ihoBaA4gzSSLpUNvdS5WHx3NXr1yP7zpSE7Yq1cEhCwrfkyjzPwvBp",
  "key12": "5NXvHKcS7DjsPXLMy9TFNeER9BoDAbkkdGXT1GDSkzLWsewDrzaJu3AhsnyFEgWi8gj2EBc3fTLuskNJLx1zvvaA",
  "key13": "52jFiDz16HnuxxqWKNZyEd1mxxtVGuMkMzUU3xpKtJc6omZy9AkEc8tYXWHLAi4PCGcTXAaw1AdiibQxGBBsbc9p",
  "key14": "3Pmk5mvYws2uJFyWHKfR5vz7UyXYZy31aQbFjMjqzAA3NZNg4VgRKM4uxD5PMdVYjuFvDCb9szi7f89LwccAcXZh",
  "key15": "4fytEDWPJxd4dU92hrtZA9vUoUp2FNBNFj7x3jA2BTvWujC5TYdBHT5MsWVgsvwWjcBzTSfpajWTBcJMdpVKfmQa",
  "key16": "3LkNXAzNhvBge22Ajr2qCH2Ub5eqckp38gmstmhtH37guD5vx3NB4dY6wW1G1BiUZ2PVnx9LM8pbjF3AwLLUgfdF",
  "key17": "31FQinRhkUh5bkdhPRkWWM2himpm6hyNkEHixn6VrQHEm4C8nYSB9jRpMKVxc8SdqHCsdR1u4wgzFRdJQdzFpSMZ",
  "key18": "D81FQoECz1wjdQSY38uHzWY3T55aKw4er2wAis6HYQeDNAfuPT7kcgQ2w25eS7ov7s3XmsFhsqzuQZWJoyhMEWi",
  "key19": "5XSG8ShwtvBiqvG8FNZrFy7R6FheXrosd8mZ1Hmg9gpmUqQrbDAdgWoLegfkY86ioddwhwRnJKMbQuQgr6975XDd",
  "key20": "3r4qss1JCnD7ixsgFo1vG1GXG63oiSifQAYvr7qySEsaXDGTP2H4tyZVa8BhUNnvScuZDhG9mAP12X2wyqdQo3ak",
  "key21": "5wUNEwDo9zHBJKsjLji9cU12XmoQJFpGriNsjz1UEZPGNbywTcAKP4LutSccbjH2iKim4JTKTbJFbHBoskUBh4c7",
  "key22": "V4VZfd4vh1K7igiG9mm1S6LfHm1Ef7E5h9RKifme1XuSUoxm5uYzBYYFmSSN9suek5YoLfwKu2Qtq8xH3HZCPo4",
  "key23": "5RKagopHpUFxHmb62awYSHTQ7oewgVK4GS3D48yrPuvF1Zsr82DGiiCYaAQP8PtuJZZXunM3cGMv1wNMuQfxYBch",
  "key24": "LY2pUL5zpGKRwnwAaenj6FPXMxm31QonCUAQXAuEAWBxMVaF5MtzzzSnsazjTVPE9c7hd68mq2M4DWwvN91Z6Wz",
  "key25": "3pXRdi2HsqccBvBcQMUFVMLhxfrbv1VtUMYkNgW2EqLugJTPSFSaTASN6iQsA42fNUgATSEHdeiSqNWhSKYoDsgx",
  "key26": "272cvVQZ5UizsS916fkvdtucAvNWp75v31MHiTyjSEaM4GdXofixq6bViBRj3SBVgNUpBgtHkyuQHoD1xE5C7bHA",
  "key27": "5tbMLyF5Wo6SUWUnMYBHBXeKGbTnCtPrAySi22ie5X7xCzKKZ9kHLtadPZqWJF8UjbaMQa5xh614KcL3r47warqL",
  "key28": "3tUFX1pW2nsDSVwLsBDBvRzbRn7e9ywJBqYQ9fPfmraYhfK7nSNj2yAa6H8CjYrXe2VXwE1fQ2PnFrBGcnHThRA9",
  "key29": "4zhwqncksZ3dU8dcru7aE1yVcZaeJoqCQwA4C9dxgToFd7M1pr52zJ1q8P9Lo6hUUr3RCA2hVXiWExEkVejHDbze",
  "key30": "3cjBAResxwuV3geH3QpSDi4PUXTQ8LNXz8yZG7VHUcthP46XnyCfWSyAHcmzFi51mbyLcPzotRTqwHNyoUnKSVK5",
  "key31": "2rNsbfCgXojjP6iETTSajrdS35WDUngDNmXA1id7mMoBGJGvPEqQhAGFF7g2abvrYnkXsRXLW99HDimt96vS8BLL",
  "key32": "3rkFus96rVxbx2UFKTnMrxC8mjuBpAaVEBWGmbLMA7gFFckUWk6owLkeiuk1PekovvKkTv8piP37MXVjxURwrfoW",
  "key33": "wjamZSyEKzutB6Stdm5deHJD3HHXpwVL3T1purBqe9pb1vmfXzvyAYXJ8SQPKB4m2Z6ZPcwTxNmB94segDgC91y",
  "key34": "5PgZdPrbvhan8NctRqsdEo4JAxUvHj8nymgemRfqx4cyJSaum4Mw3miP5MZfpoYfpGqScZEvYnNhD4vTVZMRPdk7",
  "key35": "3XJzjZ5mEZnUsqxHneKmd3BFYUHVzNfq13uGNagWkC4af96nf4uCA87F4jScBWShpLoC6rB7heGxENWBp9BpQyZj",
  "key36": "iAtduLwt4mcVgg77kkNqYrb9JivQYoyD3mZwQF6u47gsTTA8k4b9Zct236ogsocynoAmpzDkFNaG8cmkTu3tVQQ",
  "key37": "JR2rjipZMr23j1k9xtrpuWetSafunto7ehaij9CiEqNSBnhB1Pp6cSV3Xo1kAet7ySW8Fu9FUu8qfpdphziX5d9"
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

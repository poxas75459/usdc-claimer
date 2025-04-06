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
    "2npLbgYSdUFef8gJWWKktT16WYaWgWqsBqf2eQ9Wgf7j55niJd5VaaSiBHootNLeuaahVcpLa5pfGAvi4Hq4foaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TGBFyjTogC2k3pYqx8JeVEuFSVt1WqPfXaCby3sScubEaQVyppTHnCcW1EkjfsTDuzhpskcnCN6obZfUJcbnxu",
  "key1": "TSKmKeZQ3vFSZD1E9vyD1L2FtZ55uqjcSQqTpNsmVaEdAvGfaDzuzygjmHoy7U1do4bCUXinRJmtgpFWGmnJCr1",
  "key2": "2M3DgtKsdyCLGU98KcT3TuJocznuk1dEH73mpXhkuemRKqcszVyWeGtyHrpf1osE4UdEUF8h2B8rEAN7jAg2y2DY",
  "key3": "3JvzFBG7ueNESMkuThRxa5MyckgADnu51Lk7pMvN87WuVkMrBZbs4mkHznviGR5ntWQeqUM8sSXttggBNTL8TbfB",
  "key4": "4GterkXTb1dckWWghvaHvRzYsBSXGMN941dmsni9V2MzR7dW2Wouz3gS9MoTavBT4UsmVkPKFrUktovTAVtaghkF",
  "key5": "JpmFxMjrvcxrXYtDvTpf96sTLkq99zjDk9nxkwhwFQ93xz3ttfEoQ7wJr6yRB4RJHXpe8BZ9HFpcpDQe3dEatRk",
  "key6": "2SXYPrxPp9jXAYiUkAqBQ4JfGzaMn9MfXw6jURRkas1xguVzwdSa9FSN69tcCQ2qknXpXoNKAtKWMkWvJ8L5JLqa",
  "key7": "4xRx8wzGTFzHhWJm2DhwEESsgny17Cy2EhAp6fYMtyLL3nbDnPRCFFPuaShW7fC3K1K16cCcnh6cCR9tyS5uHDxF",
  "key8": "3NdvP2UADdavEKBjXDwqYrmRhF7VnkzcxRUaanjfQPg9VM6NbcQ1mDs98JraPGzDACjNKfKEszaFXGGzgKdBw43f",
  "key9": "41AFu4GRBYmYdpngcnqX1jTJQmkbTJfpKnuotCmPuN1fvsWtbfKo3mtxCeuqUMYSTEJjYjTqtoiFeRUnse5T3sMq",
  "key10": "DSZut2EkyALXMRiY6BP1NV8Py1HwpeDe7L41W21rEea922PJ9DZBwcAm8gjQaTXMotNAg76S2deTy5aHa2tikdx",
  "key11": "4ffVyFQLB5GUDH9Md8P7R3rRL3E1MsEfX6R1S359yNAghz42JXnK1Gxj3GwwBgi4bdpm2S5s6Fnve93R6fJg5B2i",
  "key12": "3uK6HNCo62iRjEYp9A257kzisEiiYBGysLrhsjUBXtzT2Jhp4mugThtX6hF3AoFWHr7dVrkmgdchHuA74S9jJtHW",
  "key13": "5TtAeYfPDVt2RzNgQZ5XpDhQxrewcgEKJjfy7NKPy6xdNM4qanXG8Lv5yf99d5FwWoFtsFQv9y1DcsszF6yHWTbX",
  "key14": "LGTPPaQqh3hrvJLsJGRCPXxhZzcZnk4wiEBG9oNUPdv5jbEJnaQ3gNTTVb5xANopfe5VQndqFh3JnU11hGXNkXy",
  "key15": "ABksWpjtrcUn1x6dKCS3rN7HtnHKjTxKYT5wuHpFqtGoWHtDHuaSmT7eNBpCop6JqBpqM6fwkDDA8FogtdNKAUX",
  "key16": "cG8UKHDD2PSCAnsuxG1fL6BQhaKWF2hmof95ZDK53dQBzwY2tEk44vCbwwo8cYsMhMjmZuVaEED2Tc9Qy2hJELb",
  "key17": "66j7Ea3xmZbWMexWJeidRQ2WXAERBcNocWBHwZUduPGSSdSSZWQrmQ3fRVDvNKec8kuuRAbfh62Q8QkVr5iZB5Tk",
  "key18": "5sxMqn2Ggg1Jhh4eMpnYJ5ffUp8WwGPAgkng1iDoRCSBfajgaoRrSUFdydhAY91NwakcxrjcTxrjbvseYMtkqZk6",
  "key19": "3B9jPjhMb6UseHhXG2Gzrp4zVwXc32NiL99PZA7RXVh4Hvs2t77CvWfwKR7m1pqF737H4ixzzDzoBPTGnGCZG1C8",
  "key20": "57GXnT48B4ite6SBzd68i9fyU6KFfYeeHQ7wbmbhS3uHqkhXBbMz4CrefUyXueNCByoLdm8FNU9m7pBHatrPZu5r",
  "key21": "5fNmQwdAgau2cUaH7476RiDCFSd4KDE9f534RRfXu8jfqSaKaF9i4EKuLNBwr1GpBMfjw5QZ7z6WRTYho8VQgcmt",
  "key22": "4sjCnh1U6bWfGfmcjicEoheLvwSGRbQ9XbNB67YVBkEe9NxtExTZoqFz2wacvqY9GfEZRkwQbGgERk2D64jbjQAa",
  "key23": "2zP8R3ayDbaWFoAmN9qme9dzSLjnzNAHSknfV89R4GrZv54y6AumDF7RbfQkgdNJh1iuKMzqtw2z21T6GMHeyBC8",
  "key24": "58JWndA1wdUek4QmpBiXKCD3gXG1yVEggwgr3AfwKSvjimKmvEg9dzBpwxBeoqfQKeou1USbw7SvcWdQGcsYP79k",
  "key25": "5BcnNSj96qYUbtQArScy37JYUyRxgUYptPrqyq7XHoNsStYqFqTiuL4oWfe6y3sEqwjDZHUREZxevs7FUNRzyxJS",
  "key26": "51NbaFwKp5a8TqjB8wVX3eZutit8eTzuuSTLSfT7GYgzfMJpe7AvSujcQ6wWEbGEfnTjcusaGEmzh7puZVjSmBSs",
  "key27": "mGumbw1U4hggZWdRN5PTuELuzjo1MLkYRbpRwmSharBc7HoyxV4xtMwF9MP5VhGiYoPuopa139UbabS5FDhzPsE"
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

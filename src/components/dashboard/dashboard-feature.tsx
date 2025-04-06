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
    "MEfYAjGiqR86QUKiL1zvhFev3y4fvC16Emdasz6KQMPmgcQQnMuZz4PnoWVDyu2xcLiecEhEHybFbaxhCmHoDBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziq2hVL73vDcYf8KcSLD7J7v1NF19SToUcpgZx3sQXXoXowXghkFT335FRur95Dis3o9dQfYkMmqJ1BNQBoTAm6",
  "key1": "5upYBYB1Xd4SmRMgtWK5jcRC2fzXkF8qFxqSayYDcKEY9ybVafHkRHKrMwL6GHQ2aZ8tVKkWAn2U6JSw2tHEy4u7",
  "key2": "4rB7UpeQbheEfTwGwmpxy2oz6GDqnfDzgAkWtwP55MJz3hgMWUDZLPAPg4sUvPnE4PRBLuxsPBsyYh1zbMsPvLFw",
  "key3": "4FNK1mWzumhbHkSxB5AyVFLpmNmwRQwxdnnTFHUzpJzNFiroyXUeh6Rjoc6WygrkucBvLqpLfpTrkbKgouCWqGqS",
  "key4": "3Jy65gZdXCRQmDNQtuVHosVmrAX5rodkSVbJ6Vso4ussspLm3ezKyXUYqKHv8it5HdgUweKfTHdf6AuSb128TQvu",
  "key5": "3zgS6CjvQhgNYY1tY7v3wAyYjidT6xGEJYHyz8jXGwX8zTb5X9DgUkUtufbCCDfLYQUko8cEck74ku6MzksDh3SG",
  "key6": "66bTtj2ZV6UKwpwAjKAtKPgBMnsdwSufv39EJwDJse2DpognMtrBUX8udxrGiVroFBDJ1eqg5uFGv9LkBdUNJniy",
  "key7": "5Pm8CqfQtqszkhtwjSNZoQ42s6exiLsH3rFycpLHvASRRvGKPj3BjdZ63jCUJbVq3YjgUVHvW6LN6R9WAHK2CuBy",
  "key8": "5AM9VRdSX7TVaYpXUHSDrE3KFyGeM1t6KywBZ8NV1973LEg1kwWtEWAtdemf7VjUbg7Eu133uwNfN7ANC6vWCmuD",
  "key9": "5psE2uBbYAMFTGfQBvym5Dsm1BCWV63UemLepys7sQNJuoHo3NZFzULfvZw1KchEMPFdSf4zAPik54RhvhWQmrh1",
  "key10": "XJcKmzCesEP3NZ9sMgnUSLrADqPDy57FcV8Bzb3X6iKXJq4mLrmi26a6mJXnL4mdxDHHwDa7YzjaxvSLRysbtaN",
  "key11": "XAFe3RzBGgwYjNo4h9S8xNpi2sNwBxpYkLfXPwouMJyhkgc5YyiaAzVn5M36ypQXjLNZbatkrsSfQcENadeYzuE",
  "key12": "2N6bSYBXDKfcLLaDwV5uCqK5XWAzUBdLY7UKoLk7RUTRjgkPnT5xMUFt3Zc1b32FuVEZbeUyeLtJj2mxPGJ9AorB",
  "key13": "5yi8EtHAct9eGdLiHAMgzgRqJ84jnVNX6zKrEHtF6tSnBiCTz1L2Mh6UEBp66YFTnXDvCuKyJPDVpdtcUnmFyQRD",
  "key14": "23h4e9Nsr35HABGU6n6gMt6RDjFrvZm3ogNQq7v7UQCjcWu4t1o5FyKR47fUCLhyDwUjWBm1ZHfTnuEG4AMQc4rt",
  "key15": "4fwVk7ZUyytBRguk3x82RAWXjRMwjKdtgbJuFcNjrupJHDjwQKAd78ukm9r1ZfUoSRBa3mrDCJKSNTeanSRxWUDP",
  "key16": "3MVC8kXXFrq9wLDPpQL8dpyotFq5KxhmZ2tG8wd2iQJdDQ2j2moLi8SDkyChdPMafFkRtmWM3pytnpt7dqceZ2wW",
  "key17": "5jkBuGhPXnqU8DpQojTuVeHqRTay8VHa3LAdSq3FucQWGWyutzK4boNCGDs7eywHBmwnbqXT6GL4NiwL4hioRBaq",
  "key18": "3XPYAFsP9tFvYmnFuoA5nqAavmjXicUARajTb8zAAhQ5QG9gzFJG5sE1TJhPjA9YZUqYBFR9LtcwuHaMuEirP7MS",
  "key19": "4MUT2QUnBytfP8o3PSqRAMEzzRAjTZUJLnm4MzhNdCYSWDP88sqpXYKUB8vMvotksvy2WRfsQXgHCtwBUPxAcmkf",
  "key20": "3JLZqWrzV1BmQ9M2QrFRGxYvTUW6FS3D16TF4yZNCLTnSKAKmaobnMh11kA9dRQXGiT1T2GrokfMmFahijTeSSkt",
  "key21": "3WAtoWVkBeyzii6YJ7nfF7MrdM4xuu8ie5Q6c4WyvTTydC394UnEpF7kHQ5ChVgi3PJjTb75iMyvDTToWnnL2hw2",
  "key22": "5KfFragdzMhCnZTHTr9BEeL3bGxeydJjz6UfCnGcFftg4WLnyhiDGoF1qMTcYxCsfiueqoj7yPZgAQtSNePP1DY2",
  "key23": "3YSGpuGjUvNWZY7CUnqKPBNyMSQD7bmBV7CtbvSqUNjyDf7p82x9qeicY5QkRj7p2ckAu1Lhde7Hr1yvvdpZBi8P",
  "key24": "2Des8gXDjms8PWmrvt6WGQFJ3HHXqiFBrfiexkQ8kGbCHHw35SZdoNm3bq75yTtJ5DBuV2tqLss9PGUnt7oeBjVf",
  "key25": "swCVKdUf5TqRuuw4CN2nu6qQkVbEkDAE1JqDTBGrGFCZrd2oWhMwo9dsyPoA6jSQEK88ZEF52wLGpYofryLphiQ"
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

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
    "4ijxSyWKB62eEygz9G9qi7g2UPzYFHxpCkhEWeHjcKxpL55PscHsFNQconJ5LJN3tfaLtiwNdcbRJ15nXx9pvuCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o8RGRdJMwg8ojg6Cu4azkQMU6vAp9Da75VdGHYLHWHd1wwX8HoTpzASsDkhUrKwMVrHpsqx7YbtQFBGYBs69d8G",
  "key1": "5bML6KdbHSxkmmTBH6ZW12s2zfvCYhmU8PgS8znfZdGfgAUJo4xYAZ2Ph8CJmHyYCoKKJJN5aTTNLXbaud2nk83T",
  "key2": "63YSnZedrLfi9rBkVZjELpowzpMGJnK8WQAJZCRqa5mrYYF4UbdErLaX368S2CpfQ3a3Syng83KQQCcJftkQovgL",
  "key3": "3JwdbAAUC8drPfussNMCqtF9mLFVGEbmWgKVfqyLQf2A7HnH3UtXTjLu7yEeDh6R1gSikHA1FyexDeCoX2ssC3Az",
  "key4": "2Js5aRkqN58RePuCEnyPv3D6zdtcFoP8V2h5y2dHjKiCxm3sNBNuMW4EM7PkLnmGhhsBHF9kdVEGQh6JUto2kZWv",
  "key5": "4PWzoJVfKfLEopQ5tv6nX6vDqpAaBQwQFxKvBAJ5j6wMFrFaz9mPWNjoTWNgVX1PaGFgvezMFd4p8LhGA3KYSGpD",
  "key6": "bjFiaGNGAFhXpGCUqxWihbfp5YS5MLy6x44oVMuYZjwAAB6CQpXEhogYmyJLyaA6sXa1pwPbnxaNsJRZdjtyCLA",
  "key7": "3ecXmieLo3wggSs7zgDK9eqQecXbP8CYXVwc6VT8HToUeNfAb5m7B9erSePoG8WfoJm9UqTa1ezLCF1cdUwWfh8v",
  "key8": "2hD4TgGvGZwxtx9BqgTjtdU82FfJa45JEZQjMxSLXaBGA56JHsDdRbLZKQypUi3q1Sz66V1dmsALhyvRnYnFYKn5",
  "key9": "5JhFmbjJozh6P1h8WQkaJtQDGD3KuDU2G9C5AfP1zaoy6YDZr1cRfXAGoXFqwtxijK4ojVBqGSTchW8V1akXdmam",
  "key10": "4D6TWkHpstnymkK8LeHPqwtH3AQ4v2Ga3fc8R11Rj4sCPnz6sFeH2PPBZrK2vpd7MBdbyzGQsso6njcyLUA2XEen",
  "key11": "fst2vjMnMzhGGrJbnkpX8G68Fr61npYRejS1wK6qQqLGQXcr261EyhwGoDWP7XmsJspDN9X7qDurzUFLxSomFRT",
  "key12": "52UNHJyFxs8usTQT1xQJYtd3ZCDVPmiHTx1U15Zf65LSg3quozxUKFHnTb24Zskk1VocgbNiLtf6TaDjSAi6e5B7",
  "key13": "61hGxLYeJHnYDa6hQ499FVYHjfKSbGQPfbhxbBdt5onQQkw2qL5pvsPhKe7yfx4tqM5vahuRDeH9SSyefryyMVaU",
  "key14": "sRxPXZe6FrwMVWqiUw4grr6rbbEb3CH24m7WxHUewL2rfU8v36uzKY9qTBaus4Ygt5gn4VbpUmZiRQiLpToA537",
  "key15": "2WvQ9BURPgbnpsusQV9vorMGzv32TwLXu4oazDdEwbKjFFmnuLtfuDmgJwZ7HJ6BJ3kFDNTd9bWCuXCEwq6RYyPG",
  "key16": "2ErFnDEnoFuRp7MzyAXrGVojzDbU125gfJWX9G7SBry1uk4QScpJYhKY6pHuFFE3RuJMoAGjdogjVrf9SLZG6txR",
  "key17": "Gpg6oCaSbMteW8n7pVcuvMh7PyPhJo4hoybdQq78YmZQjomCiMufnPTyR8HPLWM15Cy3R4cF8ZLEeZVxSiAj6i3",
  "key18": "4q9npNdejSu9EtmBksvsVcP2zbAE4HtdF6RihcFfBV3nMCSaihbLfTtkap5dzKaH2ABhvmk6AM7mipYhBf6Tm7o6",
  "key19": "4E12Vw3RE1xo4usdriHa7cogYHmoNgFQRum2F9aEmTjjR6YsTRV8Fiqk5dFaEBa3vht9Y2o26ucjgpyXDGNgxs8K",
  "key20": "4127oY8zkn3JB6DisqjxaAmWabu4rSZbB1hXov9qxDiEgTtK3RS5EqziWUTqL4R45fsxkKMBsXiSBW3N5RgfYX5G",
  "key21": "3syjU8E9nW2G2z1L7zaMzkebQFTVK3aCE8PRQFrsC4KWdTiFvovX8j8NZ2w6fwmHkv3juTnzbAXJ227zdsHbwjna",
  "key22": "B6faGpZzHXuHChgWhdtjtnAby4SXBszUh4FefMWKmbxkKt9YhESrRGFgdnhVmBchUoKR6T1y2BQ2yjxfEtfBA5U",
  "key23": "2PcySPyY3eTpFHc2bEgau7F9LFjwAtkQaYrg3uiwBU1GYnuFdjk5YhqLtAJPMfZGd3GWCDC8PVvXCYFcS1VteERA",
  "key24": "3iCkcK7wQaapgndzmhsFD82jMmx4qYPwjMYLjBtvKTTEosiJWEV7fXQD7pJFVvmozTXaA6qB8Hw8U4MVAYUKaeku"
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

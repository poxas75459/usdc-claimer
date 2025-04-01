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
    "zraNLrhYaW1DYv2NaWKmy3fZqzxvxgjP8AXbXT7ti8f3j1Cc2AT5cFCmy8ARuoCNbMx7vzooWnuTBLD1Yk6u1vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwuwVjHUHAUtBTwC6gbAQ6qiiVgRD3uR97w3fh5x9rAqWgi7ANxZQCTBdhinDE5WSMy4m9HuXA1735Bx14PcKrp",
  "key1": "3qYEUNx5uVSBfeiwav8T6KQTWeTXMtKkzK84sa8TKdFWWwjibACm7BxqAvVLyW7DvQbMuNyaNesmPvhAQeof3T26",
  "key2": "3vjNQer8TjXFob6713PZXojSm81Hp5EgFTWzWDzN1vLoC6zXmwk4JxBkYcsN49w4dqa6JeTw82hUpB41Er2F5AwK",
  "key3": "59G8YhRxKzfDgJ9UffddnYnwtfgyJmQ6YoXh33s16AoyeiZPfi9VuxYxixDfmkQeR4fsMdLSoAG1APw6LyBjyywd",
  "key4": "zyP23J1onefsBut9yNmmhrBo2NDxDcMLzETYXw9qVqDPyqe2sUztdw2pPeLcZ2opaMuqNbBWqaqqSNhkEErYXzh",
  "key5": "2RC9MCdP6eHxi1PVpPLyQJok1dv26VQMcYjBMcBdQ2YNGMMWSasUUn3642w98Mu15KcDPB4aRPiJzYXQ7oyChQTB",
  "key6": "4EB9WozeS4PtxbwV63dy5RWkADtaSUPxZkNHYVLuaFLiKaRggr8rcsNhJaZrmXEyvCbJmEaq6WEDV7aB7ZXiKX8T",
  "key7": "4Q71wY1TdctFVeWp9sf6Tvf6pdQ97DQRCKFbXFAcny7oh42nWhDVD6CGsmCnoqMvxvysTjNJcM8XB7KTNCKr74p9",
  "key8": "4cdbZnd33cMSh53dB6DhxjY37YXNzCXvdUFcAiVNUGvEsYntBfpHmFr5kXYVyfDiNggHqr3cugV1uShvXdUckvad",
  "key9": "3kPWv7zsp5Bog1YGpaTLuF1icJprtd4Pvyzw5w99Lmr5RhgP2851TDDL5NZKuPJG6hwEdtquT8EMSD2fAUfVw9X8",
  "key10": "3yk9NjEztmaxYb7LEpj6su9PUs9bDTZnJsqQ8BH8sEGjtEMN51r699vwKk5n5fYE8Kryye1sFeksWm3ZLbDfp4iA",
  "key11": "62MAukAHNSSyes6MgmmMUxBrzMjJ6PTBHF8ZVooSR2yMNj8jqKVT2pNYt49nYprC75h4JkrenLqbZ7W99RViP1iM",
  "key12": "2hqU8iXkc9YQhZL8FYXCoV7r2D7VWmakJ54TmV4PyGZ11xujaqhruAGH2GsVdPtX7ntaGy7KD4aojnEEfvLJpKgW",
  "key13": "4WMUct55iWFiDBDni9g8Kg6ZeAPxgceTbsJGAfQd9KhwT6nnMZq4mmPnRii9nNTnd86RysUj1TZvvtan7CUPB8yU",
  "key14": "5FTBszKxWZANrvFnTCDmUTzPPWPKdfHrWHmqtuyLqSdBgmiMbp17oor2VkLHKV3CEF6qYvZJj9QbZuJcveZ4qXGi",
  "key15": "3QRkhnx28HvsdYWZ2p65nKRjo9uwSEKt7abMqqqq8DGKU7kVKE68XCmjV9mGEbxPpWCgPNCHxzTwRmza9S9a4jKY",
  "key16": "WTd4kMPwm48UFrWoBU6BRVbkzPuhpZ1tm2Dh3Tpc7FtTjp7JrXhGYBPJuFRiJwShDqvFNfQBeNqGN2vnLEA8SRS",
  "key17": "5xSBZicphdc895pBt7PHpJWy8U5VSXdwiyZKDqtL8mnXHQkU9L8mxKTDBiUeqvcCyS8FoJSL6sgCiGShKbxpK8mv",
  "key18": "3us24hiVSpmmd5Ju6fJNGaTv7X4hJr7BnMvTuX9eX1RUzpnaeVf6H2p8LZdEsM9zmvxK1MX9Duvf6ZV2gFaudgv9",
  "key19": "4zEkB8eB7kewv6N4uYBP4UvNy1SD9n4gV1t54v11ZQifkRnQCkdYN3uJNp8p6baEgxMHXVM3h3W8SCT63CRKwFug",
  "key20": "2Nf1BHXGgdy6Zemni7Kte6SCABrTQdCaP3AQdxzCMVzbZvR4Aamf8QQjPLJkgPEr2YBdL84jVrQ63mWgviHPMvdf",
  "key21": "5oswsnBRY3FeANgqwAB9EfSZcKfV5ZbmW2v2n3ddjRzTBWf52MNxA23iEAZHuG4unhBaUFxjis4sneLSsomrxSH7",
  "key22": "3M7sPVHNcMt3PtndUkZU96KJHWHXoYHsDUYTUH1EGZPhK9knuNo6tYEFHof6rehzyuUNcVsXPB1KRJfHmY1QctET",
  "key23": "3RcNba7KhtFrTZ8hjDaWPmVpGYi5hb6jZkvxm9kLZvLmFon3ose226CjUBkc9gUFKTrTWzzUjnqfubBMxNb5gC49",
  "key24": "31SPhh5ZAyH9mmLVFR1M2ZiqPeK5JuomKqbk8F9aTEpQHr8TEDTKEmv7RkGdrGbxGFo9jc772u2tmBgXGsnMVCpM",
  "key25": "3W6u4kfjq9uNBfs6mbUXrUHyWbHn7BwocR1CujTg7Vy1reHAwYu3LP3c3TQgY2XQog9ws9bDdcsZ6T9y2PYPos7F",
  "key26": "2RheMZEA7YT3dWZtHt1ABPoQw2oGa9Ub8PZyhDZjVPh8skf58VhUPQ5z4UuSZAV2yQyef7hswbDpmuyEFKnPprAr",
  "key27": "2UUS9pxt3XoDJd94QzVe6XpjzKKFcHrKMRuqa3yLgxnjBfMm64TebN4teuG1oPcDJzbRzmp4XbsxhG7MBSeYNCeP",
  "key28": "ZctGa4w2Wyt9HfbpFrnUpDXK2MtEWEdkGRxrNYN8q8M59GUoXhpxNpKzCx1vVumd994SRG8k1r8nRcA6cF64pMg",
  "key29": "5B32AFeJHyiagqVuqxLGxNeLFZehnasLAFnni6ydMZPjv97vJFNdCejunLs7WxkLTeoRSzSehsqx63adZdaGAzye"
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

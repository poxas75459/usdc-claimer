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
    "tTJLBxY1oHVDkvZbzKNowNLmw7nawf4sxrMYBc5o7eBBxkiGWzwVY3xC1sb1aKESeFsj4akKxBgTj2UiCu9ciQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACNoWQZYUsuYN616iiJZSimemkjZ2bCFdrGLzy99SZ8rsXG1EH3LzM7RTWp2S14uBieRd4aYa1B3w6eigdtD191",
  "key1": "4Qf1RWERZ8dBYXxFdy6LFVksYDSZoEfRgkmjTYs3bscAbz4h7wqTsb6Wo3tALWWMyhUYyB8M8KELspbk7AvES8ii",
  "key2": "62WxrTWCS5QNYntNY2LeU5o64nQTV5ECzBAd9mr47ZKcFQzMvnx5cPgzFEkenw9DiUdj5BBnYuVS7v4VDkotX5bL",
  "key3": "5wZXtvp4ouYHSAYsQoe2FtcU9ZakXAPVGUuMLjnUR2gMUC9WQt9kegdZEs8MfCu97PeY97hj9gVGhLVkGJuzc9kq",
  "key4": "2zJcp5887JjTKZu73kVH4tZi2ZBVu5jzsPgHGnKi2E2TrVjKMNx5TzcaT8e3TmXtzhmU6kyGzeGmn6UkTqfvWZYH",
  "key5": "3t44okWGnZaNfgAwDRfJHK6ba2vmZ1fT41qKPMoHeKoNWLshbyi3P5MB5gsWixaEFCxm6Nuf7aHh7XqF1YJi7ZnB",
  "key6": "2q2CQpyPMNZFkSQSFXAWEQZCHHEYgZkaKTgXpfBTuWuNToCmasoGkRXrGyx8TiEDpUBH7WVrJ7FnsUBbhruT6ttE",
  "key7": "4nzBXNuskANEbCvNxKBVgerSZzzvF6NsLb53vmTCTEMd3y5ofJrdY9Ee424uwEKUAKikXjbchChmGzXWwcAyFjTR",
  "key8": "3odFxp2WTSjW7NJogZKo2dFXvddLCuGgLXbANiXF8cdAXyAQepuWd2vnFmXmxECxSqf6GTQTnrhEhgZUxx8yxj8X",
  "key9": "46t4xUZkbq4Qdtmxd1BX3w6nGsv5nZRBui5jMPLjeXawjftx2B6Q3rNtt3KytTSoHje5WuLUFvZYwstXYvbroLGu",
  "key10": "2F6DayUdePvSWRQMKonr8mHz3qXKvGeE8FsTR76EUsCHMcEbeEiBkR279kPdZsBYB8TA5LvFJMZT2NeMm8mQhKsn",
  "key11": "5QPLVMvF4VkVgaYn1gwMpSSPb6GX5nMwNAQ3ieoxs5TfMhBNYNAueHrQ1UmEaviWxVB7JCGSWCBfAmxx9w6pHmE3",
  "key12": "2sjDi6aKaT51qbtve7gaBrKvJbLYmV4bmewaX8o3TbTo3PaRrxHDYxGhsyPzdZRDoK6iMsSnxFpzdZarrVXYEKWw",
  "key13": "4oi2My25p7eQXRNwCdChArc5zTfSmvcBfNAnWpLNaetw7vzEvghbcyBBqJcSUkm7cuGNCdBZW1G7TzyiojBHvabm",
  "key14": "AxHnNxoWAkmUg3wuSP8iUMLe6TTC2JArZBz5jrMAmcn14GrunvfraQrzYt6fnGr6nGNKrcJ2eTwvAiSiqQ1ABoc",
  "key15": "5gnJsgqMRpa3vCchjmVvPcAe35qFQDBuSjp8d3sLKejSCGMP8w6qWK7XZohVFmBEhMGYYqcxYkFmSVKhJVrbusCV",
  "key16": "2E8RQkYSXwQALFFKoMzTKXjMZBfwv4eeyBQVGJG3TpUY8x3b77wRTV3nzLyhPiCGMbXkzFBtNZafxdV8pLnsvC7L",
  "key17": "3wDmAtbbQ6sWtFfLGBSseaRx732fU9HCBjaGywdSFJjip4GkCp1fFJEBYLcoJhesnh9pkHnev2ZjkYjqqqeGn1L8",
  "key18": "5ULprmhnxZWcZHRxq5HXuhoPacTdyKZpZpNGmvLgBU6yfZWr6gddpAj3ufwdgJrdqPWJj2tJ5PdnAt9TM3q5kUtP",
  "key19": "dfj1m4cTJpqPGvMV2r5qkSB6rDZXw4BQD5wnNQwShxntff84vc5GywoEJCy4DrTraQnSmVKUFTjf6ErpK5JMoTg",
  "key20": "3G6MDqxr8edA5WsaBqvawtq9S8ARsx6u2vhRb1x3KrWCmR5SrCgDYsixqPaSwLFsY2k2VqW27w8aHu6XQQGpjMTQ",
  "key21": "3jcADQPyAbWLWx89GJQBGSLuRr1ewvfW1SGsoNZRprcApMi7dA3pQ1mb3tdR3JHedr1D8wi9CvniqMXgFKBurKci",
  "key22": "54BagL9w9B1AZjhau1ykHsBeCRKJCNidbJc7JbrtrvFg2NmwFYirxzxxtJjWaG1xVfqfvyMimTKrjNLHGcEornms",
  "key23": "5mTP738WLY1FcQkNCd8bp7p9ZRKw8RWHx4ceJ6YKtmcJf8vjhbKYWeeaM3E3fpyHaL7G8AP8dtJXpF94q1SSWFRV",
  "key24": "5K5WSeEhSSZQddarCCBzKxFKFwXSr7Srki5woZMv9LQj1Y9xG3C9EZpyMi3zqVxVvaUeNPqjKcmGBo2Nu7T9pPyT",
  "key25": "cEGSgoHg53q6RqwimGruGcV8SGv8FQof6w9CDn6DgxzoTb61J9oyfKQubae5BAJ3UDzyynEr6NJmnUVAno6Kh8z",
  "key26": "pWctGSBKx3xnF4r2jYoAKndiNCmwYKmP7bDszKR7npMNWTC7mug5rVwaEdTQQX6Gcq4UrDPXguhg9Pkb5nTreMx",
  "key27": "4Sj4HALmes22DbwSKBVxmFfTc36uxhjQq2AeGZgEBEzoKsGhEfNCsNq8KK5XCwZrXvzAXpgAHFrZzYXkHtHG4gnM",
  "key28": "nkn2xhc4ghWAtt8dRHQ4nDYdrqtjvt6ZRdRq6ZT583KJ3DJBqGmrsrEjn8TncJNaKeg3UfwJdaoijDYZzn1M1ma",
  "key29": "4VhPY68tm2nVaKymXHbc1x2ixo87KNNBVyL2DCsXavcdHUbVnGPmLFtWNKHSo6vn3swcqxtq3eEomrdNc9TPn6ci",
  "key30": "2QCgEWLT39g1CcRKC55BsHsHBukyikFv3wPLWQwkLFppUdi8qpH93d7NJPXGfy2y1t38JzzGypK7pwQCG3XsE7mu",
  "key31": "32w9CkhaLPDD5cs3LXSZuureFVweYZLYK21tXtny1GajkJ1pU395ywrcf72gGkkxn7QseidhZTsa179kxeDZrhPs",
  "key32": "ij33Q71rvPsQszVDm8NmFiyrgZJbqaB6tJs8rVhPPkDPmyum55RQgZ9hZ71oepq7fJZ4ihtDH9VfJ2LeSGA3eaY",
  "key33": "5EN2terF2MWyPsoNZdLhqGMxdjzKHKTfrqPjsvAz8CknPjkWoZC2Ud5aMtseQvEwvuLUaVTh26uzD1oPyHv8M32"
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

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
    "3rkX8i8UfL1Z7CChLm2ACKsAUzoDcTaV72TcqP4yh9RFBVYnQqVVsMtrMfB5i3Mpeh6JLvDjnF95pda7wtVxBe4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmu4qXTEgVNBdFKDVat4cLdxhLaytBDhF7dQGYCrTHScYDGXjtffV4mcKev85B3H8vJ7sVgmvoLZYQoNGhZf5mm",
  "key1": "4abAcF2JFtuT3NyTto3qsVJaP7dnRsRsj8c4q7P43h4CvGUacHk1qagDJz3H2nG8y68eeBJb2p7twjRkZPm2LGrE",
  "key2": "LHqXR36Z1NgSWbfcth2oLgP1j2gxENkkwxcmqkSXZMYkGc6VsJnZiNtG3PsRFwZ5WRie9keBDVsxMUL4nkkf7Ld",
  "key3": "5zsWXD5r12Ca7a2d9LNbBRF4aD24hXks7sov2nRXYRkSchWdRdjfPXr5pgwy8CSqAetmPvWryoN9JwtRusrL5fTX",
  "key4": "ovNYCQuyhA6ote9BZGgF5myQcQ3k1CvVvBQjEWXxut8bYYRqVE1qEbkyF6VgepSR2Jq8q3U2B4fHxytq94QWjSQ",
  "key5": "3T9HAMFJwfFTEm23N1AwYGGRKiM3pM17ctBFEWZSNDTTLgRKH6QbwQTN8rdYDfxBid73LXJqezTGqtdMHWBimFpf",
  "key6": "38v9LEpZeEhnSH2DkwFUyMb8qaWLE7nstsGQZHqYeJAx6YpKYxBLa5ZVuYbBsD7LLYVwRvYDmY9KjDJhqLbAdM84",
  "key7": "5g2zDjtC7iEc8NAuptAr8Gv3SKU3cQFykhsTycu7VdAAR6ebdRb1E5MXvrs2UMFLGfPno6mvFGzPeHksBnjyqSM5",
  "key8": "57uvGVLFa8ZyHqRAPErEbkzD9rJ5pL2Lx5eTV2XTHUkRmF5oQMmaUxUkqXRhbuzj3wQAiYR2Ado4e12jaLCZwQqi",
  "key9": "3xpcYWiTW4z8Z8LxytYbJhqdJwEBSZtvPfoME9Qg1ZQx7t9CYAVtGBFWdBxX1GSGHKVvjhnvC3PyiBYDtTsSuc4e",
  "key10": "j7F32woW7aXRLNqgsUA614DCpgqgm3uo8uCoJcGFknsijJB5nVAzVG3Kjs18zDdvuQznfbaefPimWWbBktWAEyT",
  "key11": "2Lx3o52WyRdWKPMYxu88tDeNxwVxLNDZ5gUH2d5WiMsQXFegB85VR7Epd2fEctr8LXapta26yM8eLqYzZyQ8JvZD",
  "key12": "AtktFjXuQMseCDqjqvhatBLDokTYYu4Caw6pouxuAR1fGPwRTiugv3vZoRiBmxCput8tcJmXWGY7aAjMCwpvKkQ",
  "key13": "56pPxHwSWRpBq78HsHbyhR51y3En62qpAvxgrseuat6BUDFK9WbJi9benFiQDrZdLpQshe26TSayX5YrAZyEBJGt",
  "key14": "Yxp8Xx2BzaZRr5fvjYg8F6vgTCWWB4KzQxVuQWafqcruNYu2TT5Q8nszcSAPYjcZm2Mp8cmKHbXRTC6xZLEXKof",
  "key15": "4WXay6pUAoGAtp6r1Zpo7aDqfHEHbYuiktb4EzixVMugL7u41dMjvjYu2EJ7n8RTWAxSSvc8Yq37H6ZUGs3gpT9",
  "key16": "4J8QkuDcE642d5atz96QYbgNmRnSLBMLb4wEP5pWrUP34jVk5hdXxsqEqSRa5o5ipDQ3eJZ6GzuQqnXZrYsDhNvb",
  "key17": "3xbyHEGjbTstLBtPD2MExsz7EiUFPrPL5cUU5G5e9UMrNJWLxGw6XS1SFFKw7boSsk1gwGEujoUbCeCxwk2WaurH",
  "key18": "2ZVjWuc8C6gRLkFxJ5Kf7GCxw4nuNNbfGr5Ch8LzeCy8psxTRHaN6F4b7c81CUdXTrxbX8VJjD9h89bcynrzPuZ7",
  "key19": "5aBPg2yChwW9nefKLJ2r7JmdHuvwSkJr1NPAcqPATnfnt93fPPuDQnMKFhLzaiwXKuWJXKtrKtoAqYMfHTtS1pYZ",
  "key20": "5y3dtvpgqyHrYq1YzqtrtNyFAy2p2g1h7TUKWJB3CM7pRe88r8yz64Te5rUbRm9gscUQWpb1nCrg4xWRhMbz1DVP",
  "key21": "27Coq9qzfTBV8BhGX9iZHgCKYiV7sEsfH4sM4CzePUXLsLi1mzVDufdBUQqxU9Cz1ZdFza1WqDvCeuhh6zmpXyCD",
  "key22": "3F6m2h3Szq7nunx2QMfXsyaP4F37G5oa45Rcd7YyPYJzpTSiBzuE1gAyP1x1Ui42JetCn9KxknhpJSZxU8WqE6r2",
  "key23": "3KjKf7pode4Ednwio7vcYUvBBpPZKefLqEpvR81aTvDvgbvpAEmSgte8s8ZKyTiHT7Hu8AmweHT8ajRRZ1ECq4zU",
  "key24": "5D2tJtUUHKAGrcauaLPApom2b5B3j1qWwRoohF7Q34MxQG6SRDNXSC7M3gE6NkG4fAeSpfMoFwTJsQqskRRd9cEV",
  "key25": "2C8oHDYJM6BzidLqqgMXPjxvcE1XeW3AU4TJ9YVZ9dJ22XQeMazxDHHqguQne9GBunh8dFF5FjzxEDsFvU3R4zaR",
  "key26": "5K34WmhhXdMWDFbwqJCc9RwbkvP3Wdzhe1vY6RrwW72WiCcUqNPPcgo8Abbu6KLVbnjvMLoz6LZMEb23sducbw5K",
  "key27": "43mkAQutqsbU3i1a6DRWQJqVK8ei9rgv1WPZM9cqsXYAU8jDQxT8kM1qEhxPtf2LC2FkkqchoKsekgpgtavCeAes",
  "key28": "aE71koEZgdzqndvW4ZGp9RedpQVg6NXrNswRnvEAiT3ngk9XzvBiovFhFBLxiVUkjsDNEc3y9kae2P8sW526H4t",
  "key29": "XUi7Xn2EWaNg8QMtN7w3ZDkLQvziHkLqMPtV4iPCHMRTiLX8nfKjVNbhn3viW6VtgSHBUZzC48Q198KjhPHViZm",
  "key30": "5VF89xzSQu7zWT2irhhZCkA1njhjVRvfqHwCWQi6CetnkpecCPdr3xzu3tXbjEBh87ULzFQvT9jqg2TwPJyA6ovi",
  "key31": "3u9b8qH1KVpGb2C3GknjZ1pSUUWmKwx4UmQFWmGstj25uYUAmLEzNQtnSmz9zYR53UfBQVzKrvfzRRe8nSSsxnN1",
  "key32": "4n9faW9G678Vp7BpnZpM6dnwbehJUmTrf3xyLCYmfBeTVCQeDA7gxwHDj1GeHhKQtjWStKWmZWTzuivKzBhgjpTV",
  "key33": "4Z7ikFbH4j5g7eToPv7Kd6EMzN5YPBg5K1XMF2eZSM2hkbXUZ9YYo9VMoqWxywD2L3RUYd9VwyqpAt95EV9Y8hGh",
  "key34": "3qq5sTz4yjGPaz8dnM5yRjdYPWEcCsRopUGxvf1ZAf1EnwyxTHyFYPin3Pdh9Lycfnit1ZHB9K73yVvw7sfAX8vX",
  "key35": "2q13N7AN9AUiopx6fPwJFigFZ8FFDC3TPSiwRxQzwwTwn9Ti4NEd84o5UBNJA26mbwjcDyaKmScG4xE7LCRYrWxS",
  "key36": "2iRu8wJkqtbBLm9sdkkVbZG335doHNZAfUvTYHiEtptiUgAKJ56Nwjwe3LTutnVxrTaHGdk2ifagXwSuEU9Eyp7k",
  "key37": "3HKwG7mU7twnDkBMxg2KYio2f52vcNDkd57NEGLoo4Q11sZQw11wMvEAnMVF1oT9uxt88hffpVxeEPfTgBsgvaBF",
  "key38": "4dBC3deaYUwk6bH5outw75FsAX1tXGm4tQeyx7k2J8ZB66Pp9iDdeisoKsVktZ2DTgCzCzVq8R9KQ5FC1Ud42Pj6",
  "key39": "4SYFxXRpoLFLKgjv7CJV26SrBV2uXPw2tgsEN6HVBeJa315C8cmM4ZiwsmmVBRfj2pUVCfA2VGzdHakfCb481GNN",
  "key40": "5j1wuMUmJeZS9pzq735sH2Ss4WQf3SnZ6khNHwNxQimTkqMP35i8Hgmk12jB7h4X6t3hVvdJ7c8XX1apZek1vvHq",
  "key41": "4q8xTETVQwycJQVqThDxH2tKmYAhbjzHwaXtkEHLTiFjV4HoxAwZB1d1WbrfHTXosHt4FDeniytyF6h2BR5k4etJ",
  "key42": "21YyEfdovET4gBo55TBnrP4xhkQ9hkVnXUGbUruDmRTK8eoS4t3aK2mNo3eMJbZHg8GWELF7AsFSGsVPuBahbRXt",
  "key43": "4AE5crDPYaea5PXsmd4c5XZ12RsBCCuYTFW4uZgLmgS65Re9jPxHvqm9oJ2PNsVB5XHC4GkArpmh4JkoQ8dh3J7j",
  "key44": "hib8aFYYtj9tG1JWoQo4k81SQL1ZNMUiqxNA5mxYXwDhqQD8dqYkf6E7Rma7N2V5UqAi1B5M8yko2ZLuyEU2RWa",
  "key45": "z6cFNMuxpYGj41MsnrUiWKyMe7d7fwsy2frTMoMsZ8KAADQRycTbFngTDnSugT1i5zSA6Zvb5uCEHVXQFfaAth2",
  "key46": "5aUpXRFFSXogJnWyb2ZkWYDeGkZnTDdjxkZctgLcBiDrLPA4jW52UtfNS24gAuckg95SPLNCcs5Z9tU4erHDTpce",
  "key47": "4TuZgQu242NJnZ4N6hpHz14JWMtip7SYka2Den1qUwratCH5FZYzwoQcbs1QJwYxUgyPcRnP95UXmMRDVEg29Tj9",
  "key48": "34ihu666fW863HeexUF6yXy1w3zAyuAB1XhTwoouAF9TSNAFg8ejrdmEsw3US7nqtcPRsGFwGPKPGQCc8vRB3k6U",
  "key49": "3DxxVXFhyLNMZBNNBPuZZrx6tiT5JFYxU84mZJpYuisD98HMkedXv5BHksUdZ7Xmz7aqtxTFUP3e85PNs9kDvx5s"
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

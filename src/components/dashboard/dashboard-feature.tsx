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
    "54gUd75K5nwj4MX2hhc3AfDhFXDMy4MVrDSiZZsiKrTL88AWWAtQPEyX96rM5g8FQstCFftKFdb1swE38zHSJW4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUMrvjq43u7zJ9R1W3m8a7eMGpn23vd8TtK5gQEKzpbMt5F1B5npXfU3Yn8RzudyFWDJw9Q3mbF3xnqibpr31Pn",
  "key1": "2dP7BA8Z6cpccUzS3Y7EpTR8SkZJ8WuKhYEvcGMfe1p2FY4y9w8wwQSmRFQ5XVQQBFqFjaQy5NnaVXnK778DsjTw",
  "key2": "37SVFJuBvi3ReQwgsoKaWZXTkVAzRSCvcSKVRUvme3p39SDe92BrKRFYAzn8X1Boo2taaQ6LnKCn8kTR88iWWJWH",
  "key3": "4KQugMqFyRXh3twoDbiTcQd7hkAZ17HCsY3nQUv55onjcrxFs4Nqz8Hk4NWdxztRMtm3b54mBypykZa5uBZqMAF8",
  "key4": "3eExpTaTj5m3dmQqRpbZKiX1tYmREwTpPkKbhqk1wSkLQR8SpJL3tnwgKkDY8h27wz39LhQ8KEd3mbHirus4vqhf",
  "key5": "47YpYUgpFEjZKcNeUQFxEpn4mYoe2CK47F3BL1xab9GoMdSqXEhKjXH9VYiGPvwkvY5Y5RsHVqx5RpqMEpVyi8Ms",
  "key6": "3c4NYXMLsDaoeZyQQ1g3qiPKvpMtGCFqW8W9JZ1uhzUvFmjGeeuzpEMPiMzjd7AZYWGuvKndKb5NZMgXqzpkEgH5",
  "key7": "5TQhHrUiHJfZFQnn9zfRC4bsWLXJh5EuwTJQQD9zgbnWVoYBmajeY4XTRttJiUDEVyoWu4PVdcGyrMxTAgkH6QhX",
  "key8": "3AmUb8Wo8HHmTvb1HHfgfPEq4fwF5W8pLxgT7JXVeV213fZ5ZNydP5dZPYVgpvq6cP5a32yGFQ8kxnGb8A4Uaqec",
  "key9": "59pg4wnKzZgxWzGZH3tfJdmau6wsxiwQUy4MNeLJwoXjs38Z1CDgaG3X2637tGuZ24XTtxHfrCZhHnjif65nTq1r",
  "key10": "5xZr2gTBVHmowrkvKHTcddXn3PWqS9GbBnXyvyJ1sn3jhXJCHL1FaM9xttjDqpLRdydG8zHSSrmYgin8M3QadBhs",
  "key11": "erQWY6heJzsL9LhyMFyQfahWhdbTPc9Vn3bFap3u4upiFRzVqB6rKQrGrpf9ordw6AdxCmzGqdXa36wgoFHygjf",
  "key12": "4dKr1kmDQcFao9hWvxxbKL9LUsFvsVgmyS64GWhqnEUC3FXdBLo266XAgAHshxAdZKCSLGnreo4og2cRnSj9yCwb",
  "key13": "faHHtoX5oB2Y7k5NVENodzuA2TfP1epppzxoPNchABmAVsR8A1J2XDUY3j1Bps4NCpULpz4NaNX4KVLZ329KX8w",
  "key14": "2g92JiLPL1B6UvD4ihuZdke961qhzv79AxVxUVkiWpvGJLk2TXBGh6cj5oVKaY8UKLn2Jus4EdBSHYgA582NVzxo",
  "key15": "unZprLRtbwucUC3JDnw3ZCMzKzwVE3bXF1rCfyG1hKXip8LAu8jwLvraKTfEAAFFytxMgqqJ9i7HZo5tPPBZyxZ",
  "key16": "xQ55wSNTKs2Wyn2TNrvbR2pyJoQAJnofQcbF5UxXPu1qs6bWw6DzP8an3Up1855cUVqBFJsNkmk468PEf3Nsacg",
  "key17": "51EATtgP3v65a9KEN1ELgMaY8qc2afy9x4dKbHdmC3mComKuukGHhfXtR35x2nHfkD789HVxHsM43FMbZezKGXpZ",
  "key18": "3MUFiDbcxMZq9p8UjYrN3HnzknK7yMGAaqvLd23h34Ys7idkuPByTg9Dpruvr1YJtCjCqXmGKLijGikfjUxvH8af",
  "key19": "5PTWYeXojBfNQGBrZi4QmJ3rgTQdPthUJiWsdCaEtjJz48tqJRj1UyzXeaTxhXNu6fRWtietFsGSZJjU6ujtZwEB",
  "key20": "35Yf8fTBbGSHjHHm5meTNZNEfYienGKcZEzHtrdbduxDRKH2k2JYWo52QNEoXoC1DF1xTy1MV7914XdeXGkBsL8r",
  "key21": "2DmCsH98QZdo21rQ1rS944LzKDzw2MXx1Sf3wX36V7ayT2ZPaJC9PBTkXAzc9687nQX44WZUA1bXoXEna8o9fNmy",
  "key22": "2nxFt7FBYfJujsFHaC3XZrf2tuN3c4j8QkncRZK1QsL3kFCBcPnRpLGbCXsLaoe8Yyvz9DFXvUZEHgkBs8qoAAc4",
  "key23": "5pdB5y42siMUFQJuMSLBqYXGknGvBtMnRfQe5YgsQAGJaFmF7Ya4TWSmDjYciVTAdtDfWQxXAX8XMZ7kVNX2aYsx",
  "key24": "4zHXM9V8CJZRRTB8Q6siBRYiQN9wUHccBt3FYyRyJ6RXDwAMEfSUUaPnnTjL4wnqBpjUco4VEDSLkMYjc7uZAcyZ",
  "key25": "2ppZ1wuzrBvksj6mVr7Mcu98BworLMW1j7wrySEobNs7KYMSvjAXVQWworAFRAjBqWMXmxCZFyL2ia99hbxJsnTd",
  "key26": "5qyrBHQ8GL55nFnrDsGJqYx92UUzGVtxTz7Z9Kr984gx5TyHtNNppwKN1tAbjG9ZaofmSVmsveo94KgZH2zeym8A",
  "key27": "nXPPKHYECLMF94q9YB1mfJqkB1S92QzpBgtx61U5hAbboitkgknDypv6NgZqVRWKxFPFXh1zevCmH3Y6kGZ8VsC",
  "key28": "4JKGnsPczsPyjoKvJ6T393yJchkGQULQxay87UF54rK9SMgNz6cxP6HtCjo7QSLXJNZr7cBptwuBW3fsviMA1dGr",
  "key29": "hAtefqAm4QkQARGNZdJTtvtXT6Nd8jU91F8xSyA5e5vstFd5GMyQ5vG27BUyyvEE1ed6VJH7SMsmBRjnNDyTeJZ",
  "key30": "VgVuM6kydohjudTmXG2iucgUkybr6sYwXstCsTLuvRsg65QytVgPzc62gGC6hueTUrxcPyzZ3GoT7YVgSyZm4qv",
  "key31": "2dw2WB4WcqctboBCVQXEWHSmgirxU2UuNvSWV4HTcv8vGTGTHVeNXykFHLzxpKxGRv5cQCMvU9edmQfoQt1Uo5mH",
  "key32": "4BEPXVpntsebo7p6KRFqAUcRfiJkbQhj9yGdszj8KKYcUkzBDaKxfmEyBpALLiYes2CVDYi7uWGMpVsDxL1L1mp7",
  "key33": "5P6VvXsTaX7CuuhrBVJEYBFxVFizkgwfNNovFw5TsmHDWqQ7EDjJW4byCwKHZTdsZgBnnEDRHqyNSYiP9rkGESCz",
  "key34": "2KhNpAENLNZVr3gn8r3LRxoPwzpDBcJv5DkoZGDdBis18nCUgrwbjH7Cup7rvSckh4eKP5ujYbbPbCPZWkuNeJNk",
  "key35": "4jxQfLgsCqV47CTJfVDr43cTwbamNPDPdaT99L517wvgU7UC6b67nY6bRJbgG9X4UCxZtfXvreVMcZSqwW26rAVb",
  "key36": "rVKY7PfLtw82sjRwonGkzDWekin7y7v7JhuuiHjAmfUjd5KqNxE5VCAELXVCXLSqhcxo9E9wJg2tkKU17XMxSBR"
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

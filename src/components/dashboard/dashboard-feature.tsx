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
    "2Fbn6ccHJ6GKSAxHej8jVwmvZb2Jytzkd2qqh6LkGRFRzg6Sfh2SMonbBY9jjRwv6Bzgo68iTZwUPzMUD1szBTDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kt3CjWgNTxnfKNpCNN9dzVUUR6G6gygNe7VX7nSxrRFyUH3wuBdC3JRy4SFQzPob5cEyM6LoggAfVhWXFhqAK9x",
  "key1": "5qCz4MV6qF6CuNHEvoV658GRsrz5FyPRfLU2iGaFtLE5FKhNG3YEb5yoSgCLQfmXz9JhvUNUAmxtQQc1D53UftGs",
  "key2": "2ZuUdpmCTXyyheEQ71PmVDDxYfr7wZKWGXFCwT12swigU4dgGexysrw7GTAmMQTXsRSLtnKxNZN5CmqPNjYvAV4q",
  "key3": "3fYMFfYPqrcsQSGZ17uSL3zD85RirUdrat5agxazBQMJ8QXsfj4C1vgSaWfE5pu7VkLDrNovCDD1tE7LFoaUMCc6",
  "key4": "2AKHQJGHZ6dPq7ZwBUenLC62EtMNEp9hDS7TtX7fnYTcqWFhtsNUjTdBPi5YMYxf1ScfEW2KQQnvBozxWFsQx13G",
  "key5": "3dbbnDjoWyaCukFEiPSdwNccGZdHC6n2BB1znoG3Yr8MX3kkX2eARmSKSDhTcryRGCKtsJqBS4sRA1h6Z7P8y7jJ",
  "key6": "5K6ZoZYZM43cJt8g2WKWfPE8d6TXUyHDzP1zb2XJ5oGSEwH696Z2U6nUrc1o7Ba7XhM5aeRYw8YGhuhWW86FpvPE",
  "key7": "5a66TRj5XqpMgScDEWoyKEVLgXoWtVCzZ9rg12xt4YA8DzELym2RXeWat55oNGnkP3aHQRNbWwNSir6FxUSJYUw5",
  "key8": "Y8ff55wjoM5gtrX7q2ZWpEA6aG5ALYopNuSPVmM5kcK3teyk5R9bQ5YFKRTYYQU51XeuvRKizpXDJPWyDcpCZgT",
  "key9": "5tHNFa84tG38myzRNjKEnF4F6yZPsFBehxm6m8LEBDMue6nKnKn3tYkGN5NDBEqNhCgrsezantusxTQBcBcRZrmm",
  "key10": "61RumntN9EUbNZHFS2WHeaw5y3JjBQKo4JoDH9AZn5fMZotTXxyoujhcjTHz9NMKAuTzdgUH4pBnC5XBzDxdUaEc",
  "key11": "5MmVK9MXRKRm2DLhZXWx3DS1ubiXsXVBTu2ywQveBP8XroKy79E9EK5cubinYricB8r92VANKenEAj1hjMsXLHHT",
  "key12": "gCcMNnojbZN72TGipX3c2ph5J9TJvHp5VLrkzi8FEVRW3v67fNeFM4Spi3kGPk4j4zb3tbVp5Vt4StmbrKg7vQn",
  "key13": "5725qgYeDxZgsLfhwGsfBwsH27nUbPjZe8NRKGckxk37tye7Z3XL95omdymHYTfabiT7e6PvQG67Eo8mfQTf47wW",
  "key14": "5QZYhbADjJtW7pwFBG4xbHwssAQgCBbbLFUB1TNyTozAFw4xPgbQ7yCb19GbPJMbxNTao7jJ8PA8vBBrpMzQE4FG",
  "key15": "4VtYGcNR9zqpTEBrjFGR3jnFeoGLEtBfpNqj7qyhVbzRywpGtieyuYc813ENtu93nv3tHQXUf6ibKoRzb3NEM4cv",
  "key16": "4VjYqJVZsK24SJheHCXnzxp2HvAy8r93WqUpAa7gm3qbu1soTApmNQrHS16nVA3ghyDrza8bLZ3kPePvBBuJDJtU",
  "key17": "5oN1W97PLdDH3RuFMwuEB9kjtH5Vu3V8T4mhLibJG3GXLW91Ypvd2AmLA1XBGynVBSWuCWG7V4SC7UMKsTdh8qoG",
  "key18": "5fFHzt9STW21yWByqKdFhjTL95Kte7oZJ3fogJ93CVpJXhu8nXPjHkWzbtC5zTkGpVUvJP5GyBvNyPxRn8EwGmqu",
  "key19": "5jTr7R7css9HZyDR3JBSQ8cFNLA9KiRck1uCS7Q22iTLf3sLxRvWWK54CUDv8xnXXqkxthQaMqtKJS1RD3LayE63",
  "key20": "33pr7CzBJG12Xfi5PKwTrnqDVxnYAtKkPyJnpQBf73yvuobVC39dveBfZwj9h15ZowQhkXks5TxvCfkiQSX1sE3L",
  "key21": "5j928RJyzutgdRT5VhqBv7BjSukhQ9yGbDHUxA6JG3tTh5f79mLFskWFYFmFvKiMJBc9Rz9mjhv9zpn6VXhUNQxF",
  "key22": "2yTiKqgXzDLPm3vQWMngkRpfy3cN79Tj2CT4yuQnJjNoTdsHT6zRE3xm6kq9kqydEcV84LSvuiUTyCEaasCvtikT",
  "key23": "4cujpBwzH1MiBHY8h4novqno3Zd7WYuvHgaafwctYmN6kQmBsTmEaVD4oeXKSUZJkpVEyBPG6JBHRG7KSbwxKYAn",
  "key24": "4pU8wxwgrZY7X6E7Ab9843hvFwh6KABZWz4G9VG7t59tomo74epZ5FEsRexmideBwD3i3Eni4TNzByy3FDyDThVM",
  "key25": "4ouZ56YWz8Y9U1BFLvWeJ3vWuvgBJYcoMx6rmHoo5YNDf8WQ8DxbcoCNrVQRVrzi9roCLfrgwkiQ6fE7x5JxqA3J",
  "key26": "47d2SKnp2q7RujmyJXrEyhoA7kbg4Wc7fXN5kAYoe1zpW4tbSKTzFf3k4q1qQDHf8ZfzY7W5QTXTBa78uCFDutGQ"
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

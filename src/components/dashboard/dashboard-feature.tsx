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
    "rkWuRSc7ABv9A37yZ4ZHEqsMSRbnEMzZ2GZsBKvUZuBYdg72s61wRqDcF1jDpkbD6RYwcYWYMFVz61LP5aJMpRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nt8Uo1Ha3VXuki5EFPxoGTPDH5Gi2at9gwFKyGG9ugWc3GReQ6k23DmMpNUib5zhhkKqkAhYERjuMK9Yp7eA54h",
  "key1": "49TQQxmWEYmpCNpadJnsnmrgQMj3CLGxhpq456jSdjYGwjtUoe8uySvG6GpYrSxWVJDgxUFNvkXQo4scQaAppW3o",
  "key2": "2jFkixSUiWDjehAApradh9fKCeD9Us1XCje7LVWPZdKWCc6qotrN3rSkWRDAPoD7x4EdyheJRDMUUCQmr3E4eSEy",
  "key3": "5vEbWJUNBP5asAh2YEYZDKpaFVfbwTyfv2TDycBJfLJchB6LbXMTnR5zUXa6vNaahuriHDUz5iS4bBf6wfa8YHVx",
  "key4": "5QXktF5ousQw7B5b4AA83B8KDr4SWLh6JZXSsATtyJAweBMpFah2syfTC9XxdkcswG9UBNp84GVCPVX3CaENWETu",
  "key5": "4mPMpC27U3A9FebSDXNBqih4vwfDszuM4ktA6VUL3GdtXnSDfkNZYoHKqD59tmqcsjCKWnYmQjhJ9wF2TYp1JMp8",
  "key6": "3rz43PPXBHvwZzMWjLiea3Cm6WAVnuVGa1AdAdAPkcMCUJNxD1eYygWvxtx9mejC6UfYhDKHbLn4c6pCmDvLXWsH",
  "key7": "4fCDGtm58RNPD7giXz6VEDXAkjT3k654q1vVZUkHocMqF7sBwVMJh97WWA6Hm4CM2RFgCGRjA6Pp51qgeWD6PbDX",
  "key8": "L11FSMF2ehTvhEz92KrM5F1G5cwPa8R4ZBKzB7wUL8MVfzcbpZCzmcVbRBhdNMTbeeDWgNzLQEb6kP13QzBwYFD",
  "key9": "RozuQVtcBpxADFHQ4Fca2dN4B44P4zHyGbsznWg9Zs39c9w34GGaMCAekcarQPeXi3gnkjtQSKn8Qe91qpJ7ahU",
  "key10": "587bmguo63pnDabpnyonDoQMVYkyMnCZh66ZnkZtyijdbHwn6xTx7TmRGiP4W2RfN4ueyqtDs8oQcijb9ptSJmau",
  "key11": "5H5ENNch4CuywQPD9ZfzvGjcNnVJC8FfVaqv44rpj2gB9u9WMgiHsnmxoVr2Bvcik1YmLvpbcGhKszDrvbpB9ZUC",
  "key12": "4yoR1rz6LYA3LoiyY5b2sESAxfHz74jG9MMwVXRAamve8ChA1sNuP2uWt3NAK8j5gHR2advFxg7cCjUM3vDBtEwH",
  "key13": "4P75kxg183aqgKPjmXKyDEjKkH3MWZ9r7xHXQWCyzfqZVLQn68yztpDsJ2RsffV6aR4zWF5HxJVpwgjBDLg4JCLS",
  "key14": "39iitH4TBYso5tpas2R3EuDLkxdUYqeYmYjSRDUMzjwuQs6sxUMzJKfAeXwgropiSoha5wR9rApMS8dNVUZUVCrm",
  "key15": "48mvcPgPGMtUmBo6XA9MKpteqzFiCMkWHVFM5K58AAAcZDqmyVavyEZ4i9dWBS2PgWu3t8gXC9JaBCYws1jdc6ts",
  "key16": "KCn1c1NbVmL5NGNVbU4NU6pZWFMN2NRjzVPfozDi6YJfAtdyomJYBZdPLbtJTQtGK6pMExrHqm1Y4dADRrjPVTF",
  "key17": "2yDRYKSPpqJtK8g3dvzAEJzgPtEafVt2HaSPEpaUCRUWDNsvuCjMQP8wgtugE6R8ithnLNARcSQcZj9MQpDjSRwU",
  "key18": "2btt4pGsTa2VXcjJtfndzfWF8yHwrSxMQKExwB98YiqA9R9WbtVhTUHLeSYEK3Gi3pDc5S5TFxdYbpPmxrXvz6Cb",
  "key19": "3wi1akYfcHkxg3zhZMtu3EeELMwz1XfaobxxVZPT1H4nwJBMwC73wRS9eQ4msEyDodDywd94JnTTUm4r7WrgCG9m",
  "key20": "2kviuL4Wnsj3uVUTUPXcmjTPkiGaVJr8F4iKzxV3HDUpTEUbyWDjyoZsfnmXCW1Nehk3S4AVh23ewkDe22B7LQsZ",
  "key21": "5zjAgJdqvueczX9QhPwixSrL9KG1HjoBFtVHTZa5ta6zD7hrQk1UXTHDu4EnBt2rN4SvSyvpDRb684p57jcACUqN",
  "key22": "2kQtxuxhg47S7WBQDbtNLrBkG4z149LREMFswS9PVoqyAP3CptREB3TBEXL2wrRaT65FCpX8kzEBppJFC4o3iZdQ",
  "key23": "uejcUWccy1AsenG7df5H8F7c1BYp7uYU7X4g41sxVgsXRjkYB3HnywrEd1FJpMyhYVnmitYi1K65AVsLAHsoJQa",
  "key24": "4Fw4bo5dBjVWZwLjsnV7WPp1oBesuiHyHxeG8zoM248upMrgNFUGhyNQosFa9bhDZpUGnSyiTHoB9z4xSHwhLCTq",
  "key25": "3udxchs4Cp4B3xicPjwaGyRRX9L2d6TnWp19DSN9uJN1dNuyAfJTMMSvBt87vCmpLnMFNZfuKtqvux2znTnDsLFa"
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

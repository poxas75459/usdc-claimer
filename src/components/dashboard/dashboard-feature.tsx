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
    "4YtFXpzaXKExXqkp617Rq6zM3dY3CvZfGFgaV7QpXxfjFzfy4QzaH6Ruw2juQdnMnYwhHqPTLXAHMYW6cj794G6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ykeyoikHirVus7xs8hZpm4YpDmDmS8CaMUyVNvD85H2352TTXJqULh89VWFx2hWc2L3aUy4HhKhi9NYL6fyW4Y",
  "key1": "5WbXmSTdwnKKdAof9mgmqoMgRt3tYoVjLvfampK7JRcwzy1WoSeSN9Eu28bqjbEqmqohs792xztDChMbz4qtoSVD",
  "key2": "3bS9v4Wy4mv6BdnzenU8aDMakgK9DHHu2HFpUxFF98aTTQ82LC4e6s1sHs35AcCvcXfQKrb2nvCZwuPyHJN7qW8Z",
  "key3": "5FX8f8Hi1CvdWXGSX3ACJ8VThsQGu54CWYmfRfRvdgVTrBDcvhWusgjz1B78KmvF679ay3RKdZfc6KmNbe5BpQYu",
  "key4": "PQ3Fa3EUzMjrd51XVqEsAPNMSpMDH9L8HoN1htHT3LeMyjYfUt1ddrgtsa892wAeKsk1ftqq9nB9pnAvaH9vupU",
  "key5": "3WkUu9wKWSArqE9c6rmsske455tSvWfebgvVSBPkGSDhxX8xmoK3jq2yJtULYbvvCc1iPbiqPudX5BSP4xUfi3Ce",
  "key6": "2npXKyvedvAZeazSZmkajFDBVsyRssSmf9ePjx9S3EmcPZebpWZhzTjXRgxFKKdKLch47sxn57XADZxeqarGbtkx",
  "key7": "2DDFEpDcvJaEPttXYgu8JjhzEYap6xsTYQU9D4nuj1zQ3b9z975es3NjzLgqdHRr2K2a3dymkLvtSVx9sxTRSVGq",
  "key8": "WA5kdMgje2TssKQZnfUxAqmyjba4LXqq9HNp7PaVWQeJTQdmeQ8fJhTJpDXtr2ikuJ4VW9ovuA2poRsMNTLGvhE",
  "key9": "3PXiKw8WLEAYaADETMTuFSXjix2cf4NVMxb2hoUPFVzBASb7tHxLWeopdXSAhroPuc1DxDBZciFPwtwEpg9yucpE",
  "key10": "23A6zjY4wBZkPU8D9WWSCLKickBdcga1tidVHa37aK2bdvvSuohdPUL2kZ1Fmkf5GqQaMALPK9zyi6Dm4Yd9siuy",
  "key11": "5t5nNDfKGdh5cWULJPXEwk49nZvvnMvGiLozg9QsBKLn152X7afmKb6cWJYH68g6hThcFwUNCip4U7iGxeN7BN4T",
  "key12": "46FyqwV3tDxzvG15BgJeyhHNEQh5VYRNniWRaiPRY6s4JmztDN4dUeHyBsb2yo5fJfEygGBEcnopiiDaswrTcPtG",
  "key13": "F1UdmQ2uU4UkfvhAR1quFo7bQnxkwyRmwnWLYjaFxLt5Jn59GAEBLXEgQ9Y9TtfKQSWjwQq8VDGVao2syzv2Aoa",
  "key14": "2B8EdHbBdPzz32d88dybT7SzFvdjwijJsP4EcLqG6e2aW7gdvz87A6hTwF3f4UZ5riSGsxx3Da2QDsFeNkRyrRaV",
  "key15": "2B2yYfXHQXU9n8aAmkpJtBRdzYDHYBAses3mH4wwNGzLqGAP19C75J5jkdnCVudmKTpGBTJ2VkTQ7Gzs3Jvjq5Mg",
  "key16": "3P1thdBfrzFbEM9sWgYsTQzEXCFKKBUxkriosRAtceztMDynMCC7B3yS9k4kHV2tHP1oZHX2DnEmowkGS7WbAcxj",
  "key17": "4TuFcWzaYUfnb3SrrHxD3RTTgw4NrwHMwSnJNecD2urSTZAfmuRiaNf6p4JThXNajqaioMjYtnHFoNUDYswJUBQs",
  "key18": "5SD47TNub8weuc26u65EexMuK8eguoEqxBnHWQAPzQAw4f8CDhsKm7L4ffR1ZXivkoqEmFHJebUvo9ALNJLXs9kZ",
  "key19": "3nMB4xmJnRGmcUJ2hNo7ZbLS8mrxTLtWnx29y5bq1fWCxE1sNTw6tGsBUcrYXNwhKYt6EzrkxeyZW92GxJ9TwwEu",
  "key20": "2Sr7pCrbH7ayN2gkPmUHwQfgAgbFtxscqigBZJuxtCfyC8p8BU2FrESHzcd8Gs5pMwt2HveMAwYEkLtYWFmTxJYU",
  "key21": "5P6cytR6S1NJubEk99AEC2PAhHSPPX3iNf8ppG37PVtBw2s5bas857eysgXP75spW86URxeaXAMrKRc3FLTztdQK",
  "key22": "2FXehzwV2jTXGmeBRWPo2rRYZjQE5rCidzbpNb8ME4xtWr3fAUB7rc2Eg2YrFrs2tkpGSmova99eTe9ehUd5PguV",
  "key23": "ACM9biiZ9ZbgYS4Msgg1T9KvEePRLRM7snWboWRWn7bJwQ7Lu64mx2MRUcxad4XeiuV7Ky38SittpREkx9Cc2CB",
  "key24": "4rTPBPqxLkre14tkYkdWrp5VByrjT5BFzaRFDnWe2bLxKeqDAbvqim22Mj4pcAzx2cBV4FPAhDUUWsPbiFnT1PZm",
  "key25": "3qC6pwFuzycnJSZx7eZZMX8Q7XLd6MTx5Dh9sDyBDQ2rCKLNXzocDoAds72Lbr9WpzwmcXQh23sYRGmjzpyZ7G2Y",
  "key26": "3tdyHRmtd7qc5t9SyLMRo8xXNvkBmenggydFiCHfwqt87Qt6wvBzgtJUnAXC56v2ThRejE3Rn7HWNZtfKFqn964m",
  "key27": "2odgikVCyT15YyhChDVvazhrpEu9hq2gUUfMr3vBFjEMSoJKtuZi6cponFPMmqYzpqZwFjZyZL63Uc9RUNKHfLxq"
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

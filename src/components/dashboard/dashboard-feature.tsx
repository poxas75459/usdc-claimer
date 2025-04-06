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
    "2zHaqXpuiHZ7arqgg7Q3fMkp3Gh1LqB1zxxi99P9UsrasfBbXKP7dcg3FsBNAQqqfJ53Cx71w84FM8rQttGqLLrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dd6XEvxYvhp17tZDbzEPHd46DFzLh38Af8SxtGvD3HqM9cC9p6TBoE8AkeUQBqo2EyVuHjriB2RjUAUXAHqg2YC",
  "key1": "3ip1NhQUeVNxY6pKUewtKaL3WHLdM8q9E9rhgAoZjcmYCUHv8P4E8f2goYPjUnm3uQskPdsfNaitBSXQPeCuc7od",
  "key2": "2iqgE5KenPTfsEb1Q7ZHhCUMngoFmf4bxTL7Cp7MQKRfgnZ1pJeR1K4cfHQnvJyqUjtnJKf84YBkkYbwmDwQRECx",
  "key3": "XdGf1mYcZYH1Dn4inkzD3pMVwz1cXxkYHv2um7p6Diec7Gy65ZMdCai88sgT5tTq3i2WcaXRuPNaFxzSCCwaWAf",
  "key4": "3gCBFg2qhzWB7t8vKJuUDDpsjFSMEXEhx5Z8Rv2zsEcPGXr6cSCTxPS3g4W2XrqYHQ6BYxnA9a36LChNHEE7cPwX",
  "key5": "3FLXTVjXqnLRCn2YXUWedyxCDRDWdrX8BqGwYr7WCpouyCpEHHP7dAs4AbmHnxfkANDx1ZrvWYedJMZduKgPbGrF",
  "key6": "4HKMNW99RYh6rJuoRaHroDwBX7rU2dBdxozjS2PXffh5wgqBDzvX1FSLMWGZQ8y6Yy9canyBUfGS5hSGNdWqawi6",
  "key7": "5qr1yMLuAmCPdXjyuEYi6tJUAz1eBDcT3DcR5er9MFecRFCyDd2BnE96vdAuT9jHz15rGeqL9HF8bUN4mYiyMRXr",
  "key8": "4R4Y4nhjWAM1TCaTZzE4p2Khyr37o4jLgyy7K5o6p9yDCJS7Grgzbevz2A32pwVPc45wo1D8fpPHGhxy7zbjceE9",
  "key9": "491dS6hD952qE1jRjk7s1rS3UQQL8dbmgUvXcmHH4M8sh1sFYzGjN9DbCazRgJkfNdFuX2GK2HLgvC9wzLLy7Dzf",
  "key10": "3J8rdDogXBGiHFGqMrPfHmqorBTwBXSSWW1UwyKiX7xa8xFCDNiciejXnYLi33UbEipXkGKYgeXoseAHrCHAsvh5",
  "key11": "UCGpecdeiCaBrT6ekfHUuF8FFQH2pFLYgmSZXfbZUq5YANNouURLg8mV9Uf76xoGqmT83maeiJJgCSj1bC4ZEFo",
  "key12": "STMdGfd521icjR69BmTtVLeUeQSGpve8AD5NmAvZGaaBMRuJfbqdUnBeZANtNvoX128c2cM8jePc9TccBQ6Kv9p",
  "key13": "4UYDspT8F13GQYqFcXCspV5sSsHvchMGeckVTCVASQ9k4t5ZPMcUCLQajp1ud5oTdStCeuL2mBL8byr1aDFhaHwZ",
  "key14": "3ihwp63HLWgNCSrhFpM2VGunrhqWER2SA6MCrLYpnDARe8PrjeU1oq2HKz7jG9G6e6Z5uT2488Gx5ww2tG8didfQ",
  "key15": "A33WxquyK2sdCMswSg7bg4sZJNQMkQFoUVufrskyqQRoLauEEeqcxCVPhXP6UQUFKryYHCWjnUC6QZaH8QY3nqL",
  "key16": "25mVFwoBif4iC8LkeJk6jrxL1i6xyKDj7n7p81haVQodaAKRAP96h2oiNrDLpQbLiXzrBoXfizaSQtgir1kvqXzW",
  "key17": "5vvrXKAmeSqkPgo3WuYsHqFEz3RQVntg9Cakr6NpFvhjJbuEHvrHeFCqiaMGPeCJD5FojXUkCLcXTGxY1a2YDTRa",
  "key18": "3MPmctaDbxmJWE4vGAV4TPCYirgto7Htx3fGxd6N1sM3qfrXPAsZevpnaZHXkqcCrWxi2j7htHBJXSgZacMcELRB",
  "key19": "33pf9vYkT5M9K2bMucXXX951GdGPNgfMj2XsnqQgSxb9wWgg2EE2MRrN2xLRRhpixS5zJPwdQMEFAkfgYLXCXgdy",
  "key20": "61fQhHPoZTUNTXZk7A4EhBZThcGXDpdTq5yqeTtaAh8xmsMKDAUKR9rgvzUKEWJNtBohRBypiMyxhrnjvkqKvJ7R",
  "key21": "eNSjMKAgnfJfDA5vNrXqJMdBKPcXvXXLmnRjjRb5EGuGtUbQPELejHohfQbxwxpi8z6gcV9hq8tWDSy6BGhE88B",
  "key22": "s8fSLUoEqoaqN3ynv4oMoY8iwzKynHhchCEDVd6phqaBocei3TCwhZjsdEUrpRgGC2cr1tCZiZXi65ehWeU26QL",
  "key23": "vVLoLgXuNR38JHhpXmBWjBwQKwbF7KJpehU6hAzVQ1keJuoz2b4G8iHdLrwAf2FB9xqpY5BMKoAbn1KeYX1jTED",
  "key24": "gmDrPRZmGrJV4zf9Uakvoh9AgLMmLieRmWUGqKUn38iE5wMfSE6TZC4hxxDPnbpd1ykPd639eiEUX1ZVNQ2jTFd",
  "key25": "2kJRC4QktUjLpDPHkyk5asHbZE2bbxZsfkcGgK4kVidDFdEz9dmAKf1rH8QXg9BXenSBwxxyzmra9LqkE7f3vBLr",
  "key26": "58ujHW6Byc8oN8A6K3EmRBeM5TRXuqWCeoiBhn1bZmP97ojnp59mJP6RwZ2Cta8Md3VAzn51ytJ1b5PejKshKVi7"
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

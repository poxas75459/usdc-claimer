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
    "5wietii144F7vYCPThT7XZzjnViZkeQrMbrzhpPYXAfVkBwrbWVnAVQuK8gYNeRd3w43eJG2J8FqRxR5mSM9Bytj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pUMvXPh8xPfG1h6FoPGMpAUGZbC55fJSqYJWfUdHnTyELH3hqpZpesHFMQibfJpTDDbKe4VR7eq8VSWCSoMWNA",
  "key1": "3R6jSnSTxeaB7sMmtqiVu1Em4G2chsWyPvcM4v8R3MeLUcbquAvn8eZCeHN8u1AxasoMjsbwTuXfdZ4UcpMgQnj4",
  "key2": "2mUwuHEB1dD2WBJyfGqLdqDFKh78VEaBbnZG6tyoZopfzW9ub4ny115rtufEt8aYcVzMnwjNeCSSYgZnh1PnvuAB",
  "key3": "3SFdFfLM4S7WfiLbRmSXD9MdW3MQqpngL7DXutDH8SipQAERHH6nFu7nybsNmQsSpByKQVnC4uAR7JdZZxRPd4vp",
  "key4": "ZFmE6LVbVjEDvcmGRSgxXyc44QGWq4kQkPwtaMSA1bjk7b8Zy9s2Ja13ft5VEifp192nhWTs9Twf5Y9MY8kjH6M",
  "key5": "3Fm1zafr4NgvMu9A3V7mFijenjynLjBiEcjBH3Wi5gemWEG67cCjRtVcSmjxzhBhghNMAUoVKfFRStFxesiGaD9U",
  "key6": "sMFSR3h7D6BWv7oUja6o2GzUswLr1HZj2J6J4xm8te3TVqz24Uf34BEJkZtf6sPjFCZNWrqaDL8aVGWNrWRiTCM",
  "key7": "5KUkMFvs5RNEEtuY8MAXUgwKAUvNsFyE2pi5D8Eo3yRf1RqMRJKzRCGvQsDyR5zix8EJ29jQj8kFtvcB362rGScs",
  "key8": "3uqtxs5q5esiTDwEaewj7DJhJJXDRdtxB2i3h4WXcXu1vb36es7Vtr65sfnFniHCfFEE9tjr8NZApg2wVeX57TQ5",
  "key9": "2CNNyUdJxe5S39JKNcUWiFj1piLoaq66Z1aVqS8NFqsSSs3zRfPtMZBGQGdiUU9QcCjz47QYwmrGhAbVVPj9rK9f",
  "key10": "5GPiruM5Fn5CLJK4Nq2sXg5vfSgbfHTbbkZVct2KWtGCEqL7R8DhhkSWUgEoqRpeGFtGdyfNSTcGrP64vhXRTZbE",
  "key11": "VU6BPj498Qt6PPRa2Whtprxhg9gTM5kPjgVdjvZainEdxNudVbYwinWhVtDeStuAsnQWRCvoETjxHD7DeoQRozX",
  "key12": "2tCoS8XRCRvLSQXPmXF9XHHEzaBdwh7XJGeyWk8JETatEsQsREWmJg5c5pEHqUrAzBSU2AnQoKFpkqa3RKcn5dX7",
  "key13": "3B2WJ54C7thWydiydLRoFRs1ggRhBWBcLchCPo899vbwZjtLEU23WUXKPaiK7pNVtMRtHtZCyZFXUkbqZU8v5ZHp",
  "key14": "2bo2rNNZPCz7nbTETjVCNcqxc9mMccF41YAUGuQZTFhWGoFtcvGxrqB8gsuw41hiDthSbPT9UM2FuGJRj7cgbG26",
  "key15": "RZ2SiUW6fED7fxh5MFEog19gSvxEJ4H5BLSRQW8Rm7ntzyQK3tuKwCX8BLfCJ9pgx2UaFfdFto4Ywvjh5SAk1yB",
  "key16": "4RVqsb5X1Ta2cBAexNNfHfsLxid1RAwu4ce6CSZ1sqiUUpYDYxd8mmZmF9mMcDL8G1RiFkpnmVVD3hViGsYiakYM",
  "key17": "63vsJinLvr6MSxw6VXdVUqsWuLtJvaE9hgUoukPLPWyiJ6CYDMEf7p34Sv6VMLhpx4ERExEqgo6W5G1z9xLhXkGp",
  "key18": "3ZG4xwDrJMohEzwSZUGmUYzkPvQpcHuuWjPjS6FW5GeR4LCnj2cKXmNYNsv2L9tPpvd6HrVC2eJVkaurayQTMEdy",
  "key19": "3HeuPScGd2ayGSvffVZDBFxubtLmK2oVQeHUzz8WHzpAsZfpFpGL42VanjiaX2jKQv4eD1TCqKx87KiyBpJWFeea",
  "key20": "5citjQM4axPcpDje7miHS4EATnnEmx5wbytafM7dKD6Du1zdaiUmHpqsUFTiwF4CS1Ro9E5JBYdpL1LAuaUPUyeN",
  "key21": "3LEz6AxhuzKW5jis8GNbCrKSBTZ8ztu1ZbnWZ2Y3nd6AEmSauRTEi1ejS3MvvvG1vUrMqx8CUuTDqqDBvw2Jp6Y5",
  "key22": "3pBgGtWmhsuYprj3v3E1JyVijFHzg5G6uwu5ezaMeteZmrFw9gLY3r2K4yBtauzz31yZtFffpcMiMiLqdYEzVtxL",
  "key23": "3xdcoQpoEqZbfQQCi3uRpyweAGk6PXKiucpDr4iFfHS9BhoyWhzTGjqukKpMhcBs6kJMfZLnbioxy82mojcDMUV8",
  "key24": "29xZi25r7tNNjDt5GKbetZCzNN4BR9QzTpBtNBWH69EWnFyor2TWF5N6fWrZatFHJCLFj4Lznw8sFmKVzduDy7Tx"
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

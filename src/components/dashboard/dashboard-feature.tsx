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
    "tZbPuAKYCqzsxJo7UVbsPRG1VY9v7VoRsodwu86bssdnpxZjiCnaNnmRUyuPXUyvaaj5RWBGi4Bo2cU2s6jG7gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fC7PHNbLzkPkVgp2jrSvREmMQgevbJ6GojJYUUDVn9FBoNLPQRykxEEzptDwLEwHijGbwYKQQEJLqW6PUKxYLfg",
  "key1": "4ZKsipruodgzAncZ8WGmebCW8vW7PmkfRzYcerdRqLXeKCgQGnFk7bhqGoHob8zUi2Vjz32oA4nGxGKJikMqL2y6",
  "key2": "5SMRnyG9CcRdiChsbVyKLgpte5fSXYUmXGBqFZBeCBuNYgKgf4qUqtxqLeGT1Z9MJC8iG5t6BjgMVKHqDAmADQGb",
  "key3": "4ueNMGPNdcaY2DiQsjVAvsmnEVz49j5hT6GfZAzZa7jVV91xRbRqgEmzkaidApxhexcxU4TgFa3HoTtNexzNZWxi",
  "key4": "yJurvMc143QD63prRxgE599TfnQiJSzzhWRbquBEAtt1E5NphsuhawRWrjSLZsg6SSwtacwFcRUfSQHHLEPpzJr",
  "key5": "2jkx19fU4QLJ471PYZ7HHyJ2k4stkgmHBECP1D5ecUAUUQ6v5ogeHW5QnFSPKhVUptt6wzBLnAk9ATYZ9JodwTXw",
  "key6": "2X9tfzEbLZ5eSrrhm25MKAgzxAEpDoev1FXoKrYc9gjLsQ7imLJu78GuRUvxstQWx8J7nbbrwsGyk3xQiyU1ZodK",
  "key7": "3iqXKUC18LuRFkTAfVGZyPmCJ8ViHd3nJJTocjQKSnhVcDfbqagpoUduAmCsMzJ3GcoE4Z13nx1X3eh9j1cHtkT3",
  "key8": "3J8WpfbYpGUia9s9dazS7UXauDybJAavPwMg54DfLfZHhMQjorX6wVjxTyRevMCXSfGtPtET2exwUgSa2omixFWG",
  "key9": "2zzHCYsno8rwHZHmJC4d9xu1pUGNMfUejgBT9MPsQiNsZH3XiPvLA4jNpvcc8rw3bAgsDWxJqfN4Xt1FC67RP2zw",
  "key10": "2FxtUsqBxjZP248kvpWnjPDvS1CUDKLLotQRe5ERnMKnQS4i7pdc2wqZAi6d19LQT25L152chT3SXxQ2xTJc8KNu",
  "key11": "vgSHPbYyLj2eTcaEeRzYRnEHLM4HjQVqoyzg8zFZVruRr7LvbshzNDpwpYCwkM4swFtrsLu5N9khjgehfS8cYBf",
  "key12": "4FnrSukS4FcutLaF2Ke261dP4DChUtbzrHTFbWTYoFA8cXby74HqcCShUAXNnYqc5ZncVouNGTAefFCcE5fS66KS",
  "key13": "2mRq19JyCaF98vDyFf7Na3tL6QhXWx3HPoct4qEDSZCtsphQcoQgU3xxa7tzmPNxnDYa281vKBZGaUoatQwB1WDJ",
  "key14": "3UJmhJd5D866p7ybrzB1GMCHyAXgRdFJBcbgdFQeWgWDPV9PAWu9tg9rBq5Qs61aQFehSpy7g3F1K1pm2kP7VQqF",
  "key15": "3cbvcCiYmsH3Mm89zTFjHPeWwiEejK1QoJBz3hs2QswLzbScMGPMSML6AdbHikmAAM2yNXidD9QyoZoRAyZQ5Bn5",
  "key16": "49qkXVvc2p3zCzRm8hcBfv8oowCYy8iFrCvGUqF1PShxujugR9N9uJMfMnECZ8NUmw7Xi7t6Pv5st81rDD8u5seE",
  "key17": "4jQ8JW78jvga8AH51HPbTpsWrbQioJdTVwuPbVCygjedk7j5XsfE28w1JukXznMbbepWw5HmyiHnQ4he3jLG9xdJ",
  "key18": "3rv7gFv6hKgccCQW4mhXjP7z2T1cvwceMgfnrQDUY8v7QoFwoggPMygPbG2SzSibniuPJiFGtE5MS3xDX4vrQsNG",
  "key19": "246cTqAywBUm11U36UbHfu55neFa1ZK5sKrjKwVr5J2EZhTE2XgfXk1PSWwaowFvsk7tpQxkGnxsqEfyi3348YXF",
  "key20": "2ZcuT4dZBaweHx4Grx1m7NrFsXHxwxv6qd2CNe67UxgSyr4MRVPMBNgSzcDUZd8rphK5C7t1r26rgJFAU81iCr54",
  "key21": "5DmH4tFA5RLVTJwEyiqT1bFX5vKkck6t5Z15XvfwtU2Tws5Svv4XEgRbC6Uvdz84F91GKCHpxvC9whDfdykhcrKf",
  "key22": "b4RD49FnJthgVswro8Z5WkAvoBAFEyXUSEs5CPrq2fWhMGZQ8BySnMQn1Tu1UcxHs4GHiA8uyTFVTSA1NcByGPT",
  "key23": "55xrabpTQXNLkkc4qX9PbEpY9f2CJN2HLNd9HHd6LV2SuzP4aSNBMEd7KJJKpKBm2J9N9245xqAsFrvpPLoqWmAW",
  "key24": "4oyFaPSRAKhscLjdkQBw41Y7oPpkuSmiY9VjWRi5gBuoryDP3gXiTUrUM662a1t6CncAbUE8Wf5CP36pqeFQNBc",
  "key25": "t4YsULCZQTDqihAoqt2gR2AuaCg6PWMaWoy3GkPazpYuV412RY5uHBNRKzAtLanKmRoGs8zPmzmigZnsPsiNMfD",
  "key26": "528KtfZCrNLbqH4rnHGaGdh17VBzzSoU69NsD3o5HbzJdjvksb6TCrXXTFBjHwjkpj66hiVjmuF2VwFzXhGcbb38",
  "key27": "3cxpA1dqAp9DWBxQL96uNmWjwhko1vjkpnkztZFNTj8dwZ8VXwit3dbmshfeMs8qhkvqu1rT4JBgSRPpSQqDgQ3B",
  "key28": "63qfBisAPKPzXYZkbCerLfhuBwUP2RNXxLXq4P5YWsoZAeZM4MjNefvAPs6RZzxbHKyuJ42F2BWEv8Gxf5JXZPYz",
  "key29": "4sjJHtvJhfNCTw6agTTDi6KvTYFTVz2c2NBpYNusAQuEMPpQveHuzrfTeALGpjYaZFDSKwfxvUU4Ga2na8VHqRdo",
  "key30": "4RBoqP8eeSxduoAmhyiMD51mxhYJg1APqEeEeCpnUiHwXTHp9MqYfMdgSpppjg93b17PzMTX6RGNJLoTCbnjb5p1"
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

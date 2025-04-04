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
    "5Fumv1kxkqjSQMZKnwsdUMUh41Z8Pt2kTGyJD1yx99bG6tmzZL1CM158jeFfxRGhf9NEYWtEhsyeDTmmhUkNkupQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCqT4DY9zwwubGasxKEgL3XV52GuSDQKkZpi3VXsz2ZUK7E42bzdZjQEGFTUgfcPWvhwAofX82JzopFFRV3729e",
  "key1": "QAP7w6LpVc3x3yGFpC6dcB5oMnWFX1QtSnmLNpPt6V5626T3pVBu8nCCKeMMEuM67m6GWtwnjFN3YasthxxUjqv",
  "key2": "2S8bm1Gy52AAzHWH6oo6Kt545UmmoSV2dhScgPBFUn8VghbK83A329chTFpTig2J62mQk3wP7ADJABgP9mtqNKS5",
  "key3": "3qE92AHtgH7zvDYv9ppcVRBg2aNABp8UdxkQ3xAPedevdjcvmjEuqAxdzJx1iCBojP8mG6FuFbG7msKAH4mzzM8A",
  "key4": "3zKNwWTEgDUD5YJc7qaJvii9CUQdFJWc8xPicpye4FuqyFmhrastKRxMhpdPph2TpvfgRq2qT9uMYNmz3tBGKGjW",
  "key5": "mBQQhW6AXY5dr5mq28bCxaXsUUajSjQT4sBa9W98BqggizkeB9QpjjdzJXdA7q3Tg8U1Sdv9J74WFVVEcVZYaRZ",
  "key6": "43iVb2Ah7PtrA7qJBC42WioF1FR8hiTv8SNUu1vSjFL1Q9L4zop48HX7SA7jjz2JByJF41hKsk7nDnAK9NTSz8NC",
  "key7": "4wzGG8YJ8npnr7qZg2qSQTz4LNyXJrcnVXYLtXJYrnDTMd94CowrViNXVMCkV1xd38vsuU1XS5DNm72hKMbmBGpQ",
  "key8": "5FXESatDGtDMMMtXfThT16sr8SY2njHMF3KqDbgfxkixq9zT9g38fetiCzUW2yiur1QxNY6rqU5sMfxQFvpt9LSD",
  "key9": "3by6vE5QtrrvrxzJuf2apAng4WVUDLmqpvR5JgTRmdWJtuX7MLrvjkfb58USC7RxTDYzr73g9Y2P8cxnTY2mmz3b",
  "key10": "3jjZUBcMocDsdCDNLKC2SZseqUYJ3VoWH4kE2RA7UDajHTBqws9xUmDbPHpXrvEPC6iseHcN4FjPfMK6Yg2vsd84",
  "key11": "3mKBZVJ7a7UZ6trcsWVgqtRzQA1LwXQS69ytAxSxUt6LsuTPdVcdyUvbAQPitGkDZmT9VGRf9yVDCD67q7v6bFPr",
  "key12": "2cfeWLzt4ZTukYKizqGLYkK6DKkyr18QnCwFyfhFqZK4bfv6fjBMb3ZXQXT9ozn27LJH85Fw7m5fK5gik9cshzGw",
  "key13": "3Qjpg6w4YhJqEAC4LAGRaNue7cecdjmx2zELY93gNjTyjdM6CULDtk1tjvYpeDeyer9afvUCAJ4NfSNMeg29ADkv",
  "key14": "hTQp3ygn1d1pzgJR1578ouQYCQJmwmoFe11WdZVKxhUKvpPXGwBorjPC8t8rL4336C8zPYDqiP6fznJDsbLfzqy",
  "key15": "5N5YaaFgLVwBpAzADhv1LkN6guduFjiyjiVRWQysAaCgbrVn4QtkgMJzNmHXHCHeV9MjLpJj7PcnHu6WP5UiSNp2",
  "key16": "2BGYhiULkQ4sww4T22npkDjsE4gkLRKzaUmvUDcHqB9eZCeSopbaVFjUrUvVW6NNwPuy4Z6hb9Kze4avyTH8zwX",
  "key17": "pkqwWtmFvokFzmW9SYSoS8Yrh4cthTuevYEbjiJViWupaxFm6jsd4v6qdV1zPyZQKY9D5QMsEkJSjNL7iwMM9WY",
  "key18": "3fmEtbGxCmYkSMMcQpH7xcPb8oYP9b8JDquWVnoJyjMdpVtq6c62jfXPExvL4xcHwF5uXKNyEpnj8EosFaUsdR9L",
  "key19": "3cF563Y6d13dDwQvG2CWMFZQL6n56PggFsKZNRMX5zdBk3WRfFtfCKuXQeaDHP1iHKroBquJPXm9dkF6LetCtk7q",
  "key20": "XBuVG6hxBWw3mGmsf7gzoYKWvnm562kRG1LizjkkXGsJDtEkmLCGxYYAbhAXnQq5vyypJ8h8akBMbDQtZHnQPGD",
  "key21": "Xgb4F7kwWvEcBnTZndnHx4hSBT48UFf41G1z6escpT5EvVyTvvHaSCEo4TYfpFeG3H8WApTN2UEHVLFRu1EdPip",
  "key22": "4zRvjbaakcj6vkFgTvAtjpeSQCbz6pCKNiGPDxgXLueJfkkoce6F1T4jmf77pmrHEf5jUbuL2snRdXmwxXib3QMQ",
  "key23": "53ZxsvtbR5YPmtRxSZaEhxepLQNZK4AtaKbZ63XTRrjDZp8KDdznP4PhmrRNnugMBm9ryrvQpLwEDFtFDjNKbuFT",
  "key24": "3j1KSx7F1VsaRLSX9QLu44UwcthRFfacL7jY35vEPF5Vyn1QyaqWXqnJ3pU3DoUndgiAwUaAUk3qaUVo3FyaApm7",
  "key25": "1MvzosCdkJKgxtRojDybWP4ySsZJVcCiPd2m6J5cL2b7zNgRPSvNL9AGDcvmHPs4u1We9rNyexvCLW8i2ysTQta",
  "key26": "2PnYxGakHrRmGVUcKbXk9jrC482Sv46D494WDeNLcCbR6RvdVMsrpJeyLkr94kz3ffgN92AkQqW5VaFEcHWMAKAW",
  "key27": "8wdnZWc7b7oydBxCt2WMTBCKBNHGUa5Eb3TV1L2eAXD2aMSUPgx9ky5v7n1jK6Nq16YXpryZ7jB2onssmaF4zJj",
  "key28": "632HrmefVLzDtLSXExQVA9iJtPvTYNYKScVtDUPsJ3jPkoteX5eDtxedPTzgAUiKp2vYCp2aeU6ktXRw5bx3XfAC"
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

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
    "41JVKvNPMHCiowSxecXgd2aCXCUN4gCA4h79sPEnh3GaHR9dEpvDCxL4xTboY2XNhKDJEMJRMSnGpoUBthKFduJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4bizqhxkqyWSKVjeDybYkAeWiDDmjiW9ULx3BuwvC1poWGL6WhD7UvHHipiB1MNBXP9KxrCRvsyifMNCVFRiwv",
  "key1": "4pq3ERMcAzxW6tffHnQBu961g4zgzhiLLQ16rnLwwtUukvknXGfytHRjuR7arykUyKyCaAtLkhdX3ay6bfjp2SW1",
  "key2": "4MBPLExQeZSzxd72Qq3Qqxb68EU94cGpEKVAyRS5hWCMVRB41puowkuMYXxzUHENMbW2zoQdgn33PLQsw31wM7sn",
  "key3": "5ZrASorsTfz7ndWguVJsCHPJtptx6YQ8ZyrFpFuAaTro2jAef29iFv71yqU9iA9QeyH4JvH3No3oW3yxsjZaMJAX",
  "key4": "5hf5D7boAumV8cmnhdh6wyaGi21meH8v54EUJimYr8jg8pCP8oaLTMvX3UU6gB3nqfxMfqHFRbaCpkMprZx75Avj",
  "key5": "24v7SbpX3hW8RLMaf8bzqRzcnqFr4E7MJsgJb7uZoA34HYQ5wU93meRhupE1zkXsVGjhYfDVrENLWsVZVqV6oyyK",
  "key6": "4G8mN83HeTJzMvbNa96rRvMUysZ3sEnZM6g4BrLAbsw2N97rJPX1SAvAADfbs71DwNmFDmM8qyD8a4eydKAVvdEj",
  "key7": "4CetbSZ6KUr5JMyoHAnfVkvGbPbLifR3D3wm3uBHNMBRYPWpzu25RjCRH7AqjUwDFxPJZMgpkxE8DTx1UQEUh8Rz",
  "key8": "2hNNNWdhrFNutSd7ZRV7jTXAs887vKLxx69z21H4DuN8rKWEqBUxosfsBDii3RLJgjy9QeLqhMqTgFCxrqfCEP6g",
  "key9": "4Witzb6tU9TNpXZEh4uSjHKsZ93jM2hR9oTTXXjCkrMoKRg2mNMWsYJaN9qZsiA544oaxhEVVA21NRV3zFMv8ZPY",
  "key10": "45Rbqy57xh2Kt2q214AgkSNmZzkgKFACiGScz4pqZ843zEbqDH89vG4bS2Ej3YwuWFzuGMxXSUjsLBWFpGAmRngS",
  "key11": "VhkeFQuiqyoBnQtY83snRGysyTAVHodqKxnYpKyyR6umN7agyytxBGj2Rb4cEr8YPthi5PgzRjcLer8sbfazM6Q",
  "key12": "3YZ5iqrGAzy8hJT3w15UCf7TjFEJ7q7WVbqjPTWxXEZLYkLLXjA4wtJUhy6XxTKMFaKAzKTMBejecf2wCgxYZabg",
  "key13": "5TBFLrnmPmGMWgyYqyuSdKdLdKMGVPKWNyaURjx7ehFWKixz8Fii6EdRc51vFAsYAiCtRKPAew7v7Qv9ULcxrbe8",
  "key14": "58jMduw6GdQhyLRF2HLihb5ag4vsTGVHKqLF8YgJVFaLCqxo5nzhiq1J8jn3ScwDZz1TqBwVmFbZj6dopur3uQXS",
  "key15": "5jjMZ4s5zPdhKjCBBHHpC9xLEYfcEsVFADoKJvnMbsmBeXyDpoLE5xnsLPDXPa8ECjNCEvhsEMitDxzd6yR9uk7N",
  "key16": "2aJh2wg4U7Zt4im4cwsHwQGJkdCYmscpPKTRaYz8eYCQu6ZBqiknxr9a1E1VnysZYVh7jkzSuY5eweshNi8xb7HQ",
  "key17": "7oJ9BkzTcGWds8eEi77d9oKqxKyD1uYKopo8VzAgyRoeRXMKFpxVEjkZmJNVsnXRHCVgB6a7Wg23v2Xs9b8U2Bt",
  "key18": "5GTJQfoagWn4EtEpiHCzjZtha9dqG8WTKkfBxg5MbeS6D513bkHkCsL8obyawGXUCNQvxp3zRtaDDuVSgqzjEx4F",
  "key19": "3f1NMCW9y5dXwJsxgvFkWcEEHWe5DHzDsiNV5xXKYycHCfx5Ynnj1MuDFgQt8xdgBDBjE85GCUgvwyWa8e7J1seH",
  "key20": "5zvRbgpvhFZT8hR6htjbUwE1VDUqVzpE1k76oTrqgtySHj9eh17vyERh55edNc5oBT8wm6DE7wgZpR71uHGssfD7",
  "key21": "YtjZd6mouRJSGW1queF94T25X8ahiyUFiTFabUmiMnvZvVmSeumHNcRAdjnT7BbpFhCfLAMxEu3SMSfxMTk5ynb",
  "key22": "4yN5PKdDessvmVJoypJESmERYwpaFspPwS6qNMvjHVpqUkS5au7JhtDhB1e8ZxnrNwDSDQkVrvqdq2n1ikL2FPNW",
  "key23": "5Lr9L1DCHZATNmEYYmH1QMwLLmvmNT8sZBNUFbfjwFEAx4ifEPHFPcj2jhPYuDVehY1hMXmxE9BSBjssJnHqD3j7",
  "key24": "3xsABTy3QVMLFrM6boAyE7Lxe26LvCatD41BZcYTawZSmsDSyyXYyM9ozAJaaaCb54mRPT8sLeDs7SSPFYbmxqn2",
  "key25": "3YuWkkwQHY7gov1siiHppQ9PxFy6MCw6vuu3aGVHERGsE5vqpxhJikRvVzpgTbXVE11pkCc4ysBtP8ghXYCEtAUy",
  "key26": "4NTkm8DMvT4sJxfx4wepkjHsVs8BnumxPbamMjBzD7wWSkGtf9CL7bTqCw4CRbY2T6VrsciwvH7ztFN1pxRhPfGz",
  "key27": "3RxJcM8QCB3pTwBwb4XM4EcAsGSYpvDcpQvaNsvPgUUCqM9EomvjKhke3azVfd8qGB3L73fSMN9aeBR8nz2M3ht",
  "key28": "3SpUP7AiDQmUYQtYUdxZEu8DLYfQdyQfez7yFmUs6Djx8Svjve3DC6pwchy7jnmqbCCGj4Ve3ZVzhAMTM7AErNTX",
  "key29": "5jE6r4yriwtQYrPbXHJtTMUEZkqtvwnNkpumsxt8rgGaoQbCZ8y57uYXdFovAnkWy9Mxdck6bfnpiFZhDhe7BPtb",
  "key30": "4JcGPntwLdujNBCYLVbkU5LEBAxAQr9mfZ28QxWPFxDDNZGmSEv1wz8sYZ6joZ6ryn4XEeDW15qwRF1NA7AE4AZL",
  "key31": "46ZFQkxxvUVzvka7vk8mDozJrXpjMLHNoF4McxxDprR7rFpwwLUyMqzPwMZf5age2A4ZLjqAjsb6Ymva32SiRnsh",
  "key32": "2sAfdEidjvckDmPiMJqs82RNZ6AuGpHJJ5xahRvraPup9LVfidfg5Lzkx48SXWMVgBXLxobpXFXn195LYgwBZw1o",
  "key33": "4Pcg6PyrxjFAEbobQ9yHegCVF85R6X7c2VYKWSqevwbsJmiBaP6YpVDhU6aeDoYDrH7JPEe58uihZdJZBeCS8Gbn",
  "key34": "229Y6D4Qi6HB2FvM28yhCoUJd63CZffcepL9q8FvUUu4pL6RmyJcRuRVmjJJYa2cd2pzAWNJDdbHZm7hjHLCdsKo",
  "key35": "3hZGpRx2rYFYrpBJhLtN1jEy5FCLJN9w9EbkjPJHAp7UZpgjaqh167z5NWt6hk1M8p4mJdkGyDycogAK29gs3jhw",
  "key36": "5XiRfN58zituNi8xQZY3S7VLC6YS4Tm8GpY5HeYfr6N2YybSMrQn4PhyDi1m9Ty91riokdvtKnewvC14LvzKRuX6",
  "key37": "2vzv836dszyqBaMy7mWShbLfrcADCxXTTbHKBA1uhxNsxYmxg12QbQVk6eLXqCBmo4yF9aom7A3zpgLXWHvHn4po",
  "key38": "2NxqtydKpVscLA1efRdkZp2JoY8dohsTEUGSFCkLcUWoDqy1ckbH8ynJBPrPAqDKMpuDfCAFU4pCCMe6jV3yRqZy",
  "key39": "2MNcdBpsnsDyiroFPsPRoMyQsErnR8EMG4bRQC7DqVmPgMnheooFtwm7EgRfDrh6ru1GtSNzwHuUFmKAmq4R6Nkp",
  "key40": "aZHTKFsLqEh8Xhgr1GU673dBu36EZJ6z6UfYZz5vbrMA4ATspUbA2S1PXVTfhaBJPM1sPx8qKmQhkavoFpXuq71",
  "key41": "4BgXoBV6QBZizwdHe74eftHceSjDf1cAhgyu3FBDB7QmQRgrdXsvzPzY8Sk9FHCvKzEVFCAsdkYrxdXvM8erah4P",
  "key42": "5RG9ekhXUhrgQr244zMuzzVimr1LuSrKsMSCYTsgWYmRNs9qFJ6yFx7Uvdbg6hmUu2aTYCVS257v6PKc3uQB8Jy4",
  "key43": "4s1NN2Quf5ZNj6Q4MTvA6W7iEytCaeQrwxc5Gg12ojDyHdcjzfczSoJA1v7PodcqWVdoSikS9MPeEjMwH38pizQx",
  "key44": "5sPExwGMhNoNgvazp2rkD3nqj3ofkZTZgMYDN56BprtBaMdB5iJFMhsbMVuvHorm7cLuTRiwvdDYJppg1VQAweHe",
  "key45": "3fwL9UbbTH9iVCfCPKz16BK4hQy2khroZ4CjfU3AobUaBvoevCxY4xKRavaw7NHE9fFMWX6RvaEs2e57MGFkcvUv",
  "key46": "2RBCRNZuZk92YFnFutpthoA4JJ5VAiUGNZ7qaRQR9HxzjSBgzi8MN1oPywjgtjLgNq3mNy9MpAghC18GwNZ888cA",
  "key47": "2tHoBMw8sUYgcZZtKf5for345fHtKcwtjnX37nQZMtnFeZ9B317Fa7VNG35Q4Le3H2cNmGwWNJuQXVKXdjDUnxkP"
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

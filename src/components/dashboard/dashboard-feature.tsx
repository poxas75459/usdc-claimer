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
    "3nSog4eQbnskF7WLcPc18wRSDF4DwELLUsYVa6bci3mmVddtVboqhiDrYXjnGxYSgcwM1n95AWQNxJ8RVXfD1xUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31FousRHr6BTcvdGXrwK3MbvXxC7zNWoPojttEGekKVHbSxqDnBCb8SWsQ5UeVxTMgW3v6NWJ4uSE9zs6XZxV1KA",
  "key1": "vmonFJh5bq9UG41w7wu8DerBYN8mbLPdLZLWM3Ywn3Kvkn3ouEqJrvuLznNoV7MLACnJR1RxAQ622Z5Pz6GyJSm",
  "key2": "4J7J2kXZFSVAENERAMyAeyF3xB3cWBG8L5X4FUiZ4KbDxHoPhXeSAFqAHXKSnJyAJ66pMBwnVypm3DTvriFDHT5y",
  "key3": "4nGuirziEZ3Xw7cFemHbvtShCDSTgeEnGdjLxzMSRRiy9Atnh6NtRGhzdgfYYJJXKodqLn5rTNyE7K9QLH7hLDBZ",
  "key4": "3Z1mQhNqsJJasDuDqXm7Lbw82FF9tkbk2ZN9co1D8tjqXt5yCDaG93xvXotf5fYMVUXtL8qFur4Pft6xP9JGXEqp",
  "key5": "2SH2PxkhvFpVtkeC2jJAg8XVk7mCCFCqUBgbDWuLYCu8AdqmH7djTtQY1QDUmE3MZ8VpV4Jsd8PHSgTzSSBZDDZZ",
  "key6": "5v8CyDmzESqHgRW8VzEfen6VH4zJMf8TXnMjdwqaZ3Eoba4xB4xH1pALumYAPVYpSTXHQts1JqvSrkvdHPiSUub1",
  "key7": "4YezY68ExRAUAh9JQLWsayB1t3cp63AgCQBtNhrZbLjJTYfiaVRUizmRSn3vephQoWfqoMjYWDsrF4U18ZGDDRix",
  "key8": "2FgfxD2pWQqj3y5H4sBdGrSXLTH8teCtPLBjJFFUUpFXYcrLZAsXWC9JCDL3rHL1TvkS2tu7LPMJnaAT1HFkkUR4",
  "key9": "3TgkokMxo8qRFsYarGwHP4EmNKvfpR6PRKLPsxbHx1zcpQt14E6rshhcY9joHTGo59iAwnop6t1aMR9UozujuJ7n",
  "key10": "axxuCAdWu3qJg1We1ALZswyrtyXjnuyzvNiBitd5JPtDx6uEmou9KC41jpXXWdFZzAv1dSzY8LAu7VMDu979yFz",
  "key11": "5foFFNLxSeHdbu8wGcCnWggG1FHHS7ohhbNfHrpAHhdV143UQVxFxy23xkC7fXhXc6bNjLbgh7sUFr54NPVwJh7H",
  "key12": "4zTsdrq44zyeruADYWtGcSrJDeUZ5t9qZqLqswMk1JuwRks8oip9WcC414WAxuPwHLTd5HEN1TpGhz5y2DeBsMRA",
  "key13": "4DF9JRTTeeccMeDghJjv9gBXHnxLpu6SNadN2fY56zxpMn9v5o5e9zTfq2GnfLdRAU7yLYQJSEaMkbn7Rvn4FFxs",
  "key14": "j5m8TTUrxxqVbNvdEtZrMuMf9DpsDXUpLDugKe1xs8JQ5v383LdVvgXYKJKUvWPfQxXFsAzQ6CoctVZERLWyQML",
  "key15": "46HqBQuSTmQu7DyubTT8KEuJZNsiGZyazbzd68f1idPAzFf7DXegCPvMACZmDjtcN8beQVg6k6NgM3r2ArxgydU9",
  "key16": "4kz6vyGwfPZ7697jTaQjoMhKgZVnAyTwhCq52GiyhS21uqoHFi9mpPBxds2SScayRZj3PwVHQ8mNc9FSqoU9G7Uy",
  "key17": "ZpUJpmz2k1zJn32jk1K9b1XHhajsJRmgyavUmzJxv5VvCeBayDMXMjVG1ZUrR5dxpDsq8pgrcZS9r4CLPsukL6s",
  "key18": "5RLBgs2vzBZW73CDP1sVXKQW2Hhj4SHeb5rwq5jHqoFQMXUoxfBW8EbgpzcG62hfqAJGKKoH4JqrobSVDE51y1v8",
  "key19": "hw8AVF3zN9xTvpz9Tq7QYpYq9WG1vjQ2ABapKV7D7GC9tb2N3MYNzxfq3Rq1RaxFTr5zHhhC6mFVvxpffWe5G7W",
  "key20": "5z4T5M2FGw9XyV9gdVPGgUeqZ2JiZ3ywo2gqnXDMSQtxoUW7aMbUx3L31XqhVSQ2vjV4JM2vsVde84QN7nFu2qeC",
  "key21": "2Wd4m4umGoGJcx4VPwzDeDWiE1iRNc4Qwz5ndfaM6QdiNeTef6nCmEaEBzKigJub8A3uFLj9uWkQFQY9k5T91yWY",
  "key22": "3vLS1hxuacjLcf7RFZpKvDGfp9xTfWpZMWHLEaAmiBhhSs8evuP66x5nKLFgpZjkTSAY1gN3tVj1K3iuMx4LkY9M",
  "key23": "2SNnZiTsGaUnV8x4dSCyyNWRBL8Qq1Lqg9m4xCTdbjikYD4wEJ3QbN5eeiTBzDBv5kxRkKQLsQqpZSLCqNPNv29p",
  "key24": "r2itQu8oF4pYRTVbWhLULvjHeFYzRbm6dMENwCW3JqHin6T4qmqixoFvPbzcUXNqvKaWtGSAAXv2PP6Wf63upNy",
  "key25": "3PYQCLkdyLdfBBELGL6TNzLmJTC5AB9vQZwTNxyZFc6UwqAiSvfetdhGs81VpmFsR4UDzzRvj5zGZVUGakdyYgVX",
  "key26": "3ajdQrhdJt5wdPFXouzbfJSdct2NagXaNEiV7MqVJEhQ2osnq99TKnZ26MUAqvurSeXxp1edtcBKxwaeChjsiqqF",
  "key27": "4zJrZerd4LhigebfTVw2usgsCftpzsGB5Hz5ZAix39gzafJhBB43hap4subdHCCzgfyHbqDpQfK2AjMM6cPs97tR",
  "key28": "2gUiVCHyGfS6K2Mm4VTgjqMEBXPH4QN5hgrGnqEzkLWACsRnADdGAhg4x1ZR1qXs8Pp163C6MEe7iCMgoyAbaPM4"
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

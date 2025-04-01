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
    "3H5td2G4cNUcJXri5Fua3irFn1jo2GwGvwJf3Hp8ULbRrXk6ZErQSgyhuB3JN9W1v9gShqjToaWFZTvrEjK3fX7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5wnqc7BPNPSkTwifPFkrw119qiC7HwFaqZnPs6ykaVNZuGhzPada2VjDbG456oipkyCkdr95q22aQ4KVQVpJNe",
  "key1": "d7hYLJQbKawAo9Y7bsPcJDGEA9bn7fwQKssRVFnw4xStbV5HFKBujuzF6xsQPp74pYPm1LRGYmkPhszdGLDXnUP",
  "key2": "4cBaWPKSgSFpNLiWURwmUbUS1idCy7FwM2875ZHaSwcdppmmTCQL1xDNWxLjkCNLE951WmUNZFoh59hgnSmFPnU1",
  "key3": "2U3gaq9G6QmFbooWMQNEufmmkCruSKd2gs7krS5LYw3wfazNCu1ygkGGnkD9T6jkCv2UyjyAjqauwETEXkj4e2Qr",
  "key4": "4SUic2Ma4Fd3Aa1tfDj8yN5jEZVX3wQPVriSKQSdfiApEvNSSEShHujApwvp3pRKibtT3sSTTxqRsTXju1M7DmrA",
  "key5": "3hE8S9TFF854e6QgwtZyvskYFwsu2KyoHxAmpkychnGLfdBY7R2TfGRSbqYPJDn3rPKB3e9weEycfARx1tpkuhsg",
  "key6": "4zK6SaUU5gSnfufGERvK97XsCPNcueJszTwME5ogYmkQrGzWpYHD3xvz15JCpqNm4RHKk1bBRZqAw5irBXS9hP2h",
  "key7": "5dpaW5H8BCY1M4PeGRVoYm9k2cHvpQDRymDeXzts1wT6wEVnkryZUShesvXpJ59DPkDzo9G956DUcN7qtsEQrPV1",
  "key8": "3RpcxZWASqPJJQnmfCGjihSeKY3s8wX8zu5zSrcQ4uCBEueeUpRfyr8FHLUgdsBBJqJzVESVEsDDCxbh4qwrQZzr",
  "key9": "GpQjBqm6J3nqE7DKJByLAwDpKDLLc1tmChVyyNfby5aPP81E1CuYnuHjhRaJoPQeoeGHduFaH75eP3PUr8EgnEN",
  "key10": "5wGYpjZGhDbRP6WnjStp4CW5AopJDiGd3CznaKNY5Siw3M3skLYKzFidaR64h16qZJeKHQ2qJxjDu43RgSiFcPt9",
  "key11": "3UHFkFKALmTQK4zXRiChkSzbhxExHputeyL1RpFWzg2M7jUZDg6c5SZKiaMiigNYBGZuccR3E7MXSMjBfCcDtBpW",
  "key12": "2C2Ewk4mdE1c8dEJLHBT3GLbZyYuG2sdosxkY7SQynJjBtsMsF4HKoWcqspLAiP6YVqLBMHZgQM5QRqPqqfRQQJ",
  "key13": "4qMGxdPRw8UXfrdLHQfsFM8Ym2QMQvbufT6GkTzHryHFtwWEtoczWDEfzhVoSwBZVTM2pCmqdniFB5LjuCNmacSP",
  "key14": "3w7zYT9nBXnXMJzzKAr1LMU6J8maYDBFZ2d1iqZFeZhhCZkKcNwH9d2QLdtg9h2tm3TcAmQgQ7PaEuCbB18W5R4w",
  "key15": "4kecbSMsVx59JkzYCJvV751d8Z2S7JV9e2LZWqkQ7fwudupCHbCURAqhGdgydqtMcimkkL2KdMmdQUe12JUVd2jC",
  "key16": "bCLPvQqa7p4nbGsbBWBhQpcz9YE824LS3q2mirAcgPCZim8tFuXNQJpWEdhLQfpvQirKM9AeasHqNbWRrFSBvgV",
  "key17": "5v9nGW8GXvaWX7ScVzF8bycyyv7nmLB2FoJfC2Yb2m2Tu2p7X5FLgjm9kEzLwQpi9NBdTk4Yqc8kwCHpByVoj4kU",
  "key18": "3tFvhGMvW4xqvBRREB6FnWbPLKQAaMehUn6omJ2MUfeyK3a77NWjS2FWBunUVsK1f57BMg3eRynXAB5ZYBkujRjf",
  "key19": "4CttAyUGZAH6KmGWdLpgJqrAY6QNSZ1HDeSMdzzKnMPS2UEWiJzJVcfzHHRuAcDZ8PL8dRcrCJUpjZowdqqkTz9A",
  "key20": "2PpP22GbP3yK9LzgBG7pkyGN7D76VvZ7b83yMzWTGfkenavMStPnP1VoMKCoHfnWfGgS4pq5VGL8AqxY8DB14XXD",
  "key21": "2xFwZtfukkr9MwjL1xexLHk6Rkm57r2S3Jk2UQdhMFHfroVE5185Ap8k3pFT41A3wkqQgqeaSmY1XnwGRFWEknhY",
  "key22": "2nTm7VtnVR4VfevMNEkK3LRJaPTAWrRRsZhXzFseuCNBq1oxeRkeAjUxgQCbhaFEF4HnnPQDk1nBU9LxJoKQutfZ",
  "key23": "24S4mPtmXCzBYhW74BqXUbdXJWjGuKYsf1WG74AjXXihnrHw5csNx6sf2KXrtFNDrzDErVF8PHkzAiJbtep66i1v",
  "key24": "65q8xuez4mdQxNNXw31NTLcCjw5oo9SBwTaZfxn8RtRzirnqj8V54f6cLKjCBs4bM124XC1oJxsunNUkyJDyK8wq",
  "key25": "5iaBgDnWrZzZVTtnpZTg5zUzpTamT6EFL3WebQU8VG2h72SdttmjVazaAQyjkbTvUit4ydsTHmiTHgFyomicRbq7",
  "key26": "3FSKxPCLtc3VBe1LfUbnYMrfhXg5zn4FaRqqWPVepNmXaUToYbEVG5LpgMTRVEpeMaE8FkVExTLRYGKzewttaxeX",
  "key27": "3qehWdeZNpY2cNpZfuF3bnG4vfoDQvnvw1zt17sJecVxDquX3zw1Xe5LvuXu5TFuLaeX7nXHdE1Afr3NA45hTrkg",
  "key28": "2aWykrovUFV9viDiY6pxGdhw6KycgUZRQ6A4ox2dw25bDh5ReP97Ay7s6B2nDmutdEUrxpK6T6dSf6sHjAxyceLZ",
  "key29": "5oJBWW3kFrAhodQsfEsUvuWqhTFcxTC2HzDQ6gzqx4F2jkTZq4eMKQETAzDdPSW5ghnae43XtqDL4Qv57ksZNzdb",
  "key30": "2dQxSnV7Quy4tKSL4N4gF37cayhAS6Aiahp6ARmqXcnfpRRcQ5mpJkCCNx3ercT5qESjGqPYC2paTkJbjhGEQQ9h",
  "key31": "5m5z9idiApKopH45pwrXXWQ4kxUFbYjUmaSw74zcADiRLypah4Fco1f1Gfc4ic8Y8NnbvP8AE7QgaKBfJLJ5fRud",
  "key32": "5BmBHfuBkoESVqLWA2Ddzhjoc1EWwhx8H69rwxcJGKmyxDwzKMmUuQ2CsGsU1QKmpE1KYoq3JVgVdT6yVxzHA73B"
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

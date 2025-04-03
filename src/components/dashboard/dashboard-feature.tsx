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
    "2LXAnUqu9roxbckRZFfGPXFvw4Z5F7K34EB2m2YCBCUcYc1AYXKQvBEmgDtWskaHThy7EkXYsQVnzWsL3xitPgij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sG6We3SLCuwR9VpZ7Kv1poAiymCFkmntRSbzHDxXdbVBVoszL1RSY84kwmdKgph1xytMWA4Zhkemg3LDd9gxyVa",
  "key1": "5CWPd8sReFPDKDFekNztgyFkgmpQ1iRASvCuCkfGEwKnXxNACSv9qaXrKR7nN6eNSxNExrYYXGXpU12JDku6aPzr",
  "key2": "EfZWtm6uKm4rS5QSNfmYEr5KmEsEUS3c8eqNJyha8dXZPQBrHQx9sEjciXNUhwEkxwYoZENZavQu7Qw1g4ei8fE",
  "key3": "4CLpLKDKuEQcKFYYEezD6sSnetZYZnp4xScFsUYCy82htVDqg2a6P74QwQgBajx3FWq1pxLRktDPVB9b5uQWmfMo",
  "key4": "NNgjpNa7mhaynkGpNEc1aPvaEq9LTdMRebYaMW3paXTrcd9pDQBV9FWFijAZdMhPYEzg2GALSrtJyFGTeHAdMRF",
  "key5": "nnW1EhBYTt7qEqzBFdVtubqbEPwYXWZkuNmhmpGxCSqAAAdMKg7DpLrD6qexXCxXCaKw1rpygLWsP9wPZjN6Zgm",
  "key6": "5k15heBi2PAvTwVQNuzE1uTFUJAVKuFW2nHpyMk2pkWvAW98jhPGdPNoUfMUN73k65MdEmxEToCwQ1cZfJLhcFrG",
  "key7": "4EDYijngA3HP9jbgVg6L4XYWyEKoR3bgxocAFjeQBL1Ctj1UyZaSaHXdxUUGhJu6tN1DkcGxF2ixWR5j4N2rpam4",
  "key8": "5GcFzUhrbJLS3T6cLeHwMyqzWPrjjUAu5fDZbPUezTiCFtetCJGJwonuTo59QBxz6g12QJq2QZarxz4kTGA765rw",
  "key9": "3YKst3aPmgKVrHk2ASi9g7sGV5E6BY2b82wH1Fbi69yezyLXAJi4GfrjFoCxgGRthkDJevShgNS9wQEv8tR5unTf",
  "key10": "3VSTNxJFftgiu8kQbDLMqeWMTSbPksdfmkNrcc2TZ1qYjYcas1pJjPL3wjEcXxUfGWC3xKdikwiJ5AxuyTD1VKcw",
  "key11": "4TP1mEWfsBVFGxnDWGPuRRus1gozpWSgeAKhtGJ5BcbC8doAM1dPfUkPutm4QdsmLunf9pYHSa9WnB4YPEhwxXPh",
  "key12": "5ohfNe7Mb2jbY6w6McfHtoFftLNFxTgaaPmNz512VNtTGrTgogmdgkf5qJzeX5GeF4G2c76XCY1DEyNXuGPwWmcx",
  "key13": "63WtGRpCxAMAjse9YK9srXtMdbC2ZsVr41biz9MNcaJ1Nz3X9pSsBe9zLmci8stF6GZebd7quRb58v5WSeAkqk36",
  "key14": "64ri5zEzWVQZBqHXGPiZYq9ydX6UTnxNXFWGH1m7gDoSVQ6RhX6Gmuub4vKWND1Xz3xZNx3EUYg2btGVqcjX5kF1",
  "key15": "5i41J1gRgenkC97PPxhSVyNTtTiEkiWThGKt86M5nJto6zrPnDM72F5VqxSut5TgXZaunSbYdS4DF5BrGNetS1i8",
  "key16": "3DDtarEAnQfFzTqqaz4vCLffTU7PKTkpPzcDFCWNYA8nHrBUDSpYPMp9z9BhsVAEQ4U5nzAnetfxLDQStwhizQMY",
  "key17": "BzbRk2bJwwo2MSDM4Cwm9sr5T1pMrCquvj2kXfkAv61C2ej6FPEVJ3SUsjDEEtRQSE5W7S45Ds8MAjXyWvD32ZD",
  "key18": "5PiaemqVRDnxJ2aFxKdxBreb3PepAzWHzUjTvfcp9KczQ21R7mdMJq3r1oLQz4BXTUGPcs2ZG1fau8aD7KQDbza7",
  "key19": "2UB5GNPFHhMPDzRVD3nKF2ojtXu3xHseG5QsLTSxEGbaqsZu5iusrzwRtNh5TxTysMdaYFpB9TTnDGSzmyHPjgrD",
  "key20": "4EpDHLpCQKHVM1Mn6uLrBTvJ4nWSgNubjtLsQQZXuQhBJX8hsCBxUJNLrpZn91Avd2YzASgchZ7kqMGdovrQwN7T",
  "key21": "37XY6bNQW5cdFQmtdBB7NvVjJwaUk7HqVCGAzQuJKaCGxdpGegcuf7xpJyEUiaZVmvqVJWbGsXYoZS55EAubfZsm",
  "key22": "5tFX6j6kM8XZoogxLZUP7yKd1ocoRsEgXFYXcjMzp6DXWjvo45Jn7qfV2SnzwS4wma1tEngFSJ9CP3QPepwdquKf",
  "key23": "71aTDSNPqCX6dcX4XadyQwfJApfkgHvhttDjFHcoVJ6qAN449xL4fQmUvDBcWJUn92KMRqZN1dBodmgbonfiUrB",
  "key24": "5oXA5hjRBgVzKYYg9nnT5ZubjJbhaW3PFQ9my9fxGtCtKKh3udzSqrwWEAkFz6zoz9uazxQCMVzNxw7D18wYWpvC",
  "key25": "3SSFXdkCqrKuPgCp6933fRqgbL1JL7MUJ84xy6wCx3Bpm2nwgph3PekH65b6dXYEChXmWnrnBDaYCnfT2Ra1i3dk",
  "key26": "3fcByWJsARiRxjwMp3p7JwFteYyCN1WKYjHjMzB6Bg7kTEGoMJNAMHanTaKCf9cwZo2V9pyA13mHf8QtoWekMYHz",
  "key27": "2BGLka9VwZ2Q4HWikCN92r8uM7P7Z5xgNRmH7rRG2aSt6bBhX18YRpcrwCji6r2citunRrLTfpYW4Zq3jqK2qwnM",
  "key28": "5Lx4twTniYxoH9BoNWhWeH6a2BpSn8HDcnUPaPw7euGJdxR7L5ED6ZmYGUqortdWiznNAC7iV7Hr9JLUsbjbs7k9",
  "key29": "2uHy4bv33AfpssdQg97dGi2bjJq5XCPW32GeaXtb62qrHVm4vqjQipqFrkwErJiSKcRKuzi1twyMf5Wy18ByLwzd",
  "key30": "i7iTMm1fQgkBaEg433u9LZfPm2xu6uFyduzfHMK9vY8bcgmtAbAA634KHGBqQEs9RaeQuw34rdBM7gfyxffDM33",
  "key31": "smfXtDKVoDNr3w3TxiB5M1XQ6t8hppfLwdhvGgRiajEnnqEpTAxtwXPyiMgW1bFC9Tzp5zCr7wAxLh87iNgodKd",
  "key32": "PTiWipwpu6zXTdBw9N3XR6WeNjMfJ3G74x2ZCRnkMoguK1Gy8e5jAu5styrLQnh4iYovoGVd1FF6kd7EoqpavUk"
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

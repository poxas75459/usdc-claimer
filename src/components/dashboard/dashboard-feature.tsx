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
    "5iwUWAzuYMK3HVMHDVBfhZXRHevve1ZHdTRqRTxtbHQbPagsXFHUR1nr4UDaM23Khdg7AM4szNDhCxqA9UshKSfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sHTagGp3zDF1d5wb2UZNdXz824rdo6wm8iPju6q5HGkvP1Kv9CYdvRZZnj5ka4EzvN5AZ4kKYkhoCWHJQFcxFhN",
  "key1": "5bXJZpABqZETXKAwUWnWMsVTwdj7sqcxbutsertacuMqqr6hz4ftDV3Us4a9PhWQC9ph8sDrTGBBSaeLTkrS8t1v",
  "key2": "3aWs8fVJwsHFdedjcxk7kBo7TfUpwtq9XoTXGV8QkHAU4z9uNBjETHfpUM6wq5dqahnEwKWgtsm5sVeRnsWqJEQA",
  "key3": "31rUshP6uBbmiGMLZZr4EVxjoVDeYo3ahUrTwNr7SpJf1ee5S6RX5XmbWkYj7Z29NKHRDPCMPg7Sgog4WQ8MVDqc",
  "key4": "2pjLSzZGAXop8XyxgmwR4WXstd7gc7ra75qJFxVQT2VKEGvCvzubwbV2HFDekZmnoUj4pwh5vo4tqhjtVHeXgsGb",
  "key5": "5QJPHxbX5EZpfTZryJhZQjH8wsmEVbVWiSzvS49LT4XhSQ9EWvcbirp1jM5K7EuFPVrY1FTuAGwN5yHXvKV5f1Tt",
  "key6": "p55oQdyrrsVoHxEisdvmew37TzYdg1pntLyKav7xB3Hy7LfJWoHuwj2Mz4Q8aEt8Zr7yvF6ggu2zsbpoAioJxT6",
  "key7": "GyvhVwwYk9xA3aSS2t3xvFYrLmmpH51aWDfeehhQPAv7TGsyS2BVig1WYt5ZpDGRja28qbMNhQLMscALzLqqegL",
  "key8": "3pHUazB6m3gqTtZQU2UrfSKUMjoRTHUqzRVp18Ci34hWyr1Aia3RWiBicDAKjySHDAuR5dppmAhmZScU5HqGXcm5",
  "key9": "3YZEFNjk2vorGaPW3yfGyqydrSLRfX94fYnj9iU5RymTfqW2qdGUP6DagS2By5vHx1tiQ4UxvBJ58wfcAa2VgAp4",
  "key10": "2hNWzh9UPGmUSA8PCaeXpkZYLisWod3kTDWp16MVq1DyhMSund4Xe89Bm7QyzCjFaWq523K2RGUp3xXtjiWAKUZt",
  "key11": "3jbXGKSo3YPU2vcaW2gHDFaAccRkTPQWVHXn5JGpaWyGdQwxjRCBWqax36mNKNQUXN2Zzhs8x7SbsBP5BVjN6bW4",
  "key12": "3DnfBACjdEu1cbRmVjkbi52UYPJPQWmAiEcXntiKqajRNNEkxd9oc8tXs9QcfsSCVoNUAPCixXmSBtZ96CzQiahN",
  "key13": "266yS7FPgH47LPSkfFK96EtU8ao6Qs9b1gDm3YV7NNSgAPPi9ndcgbPGXBEvENgRLkVL5R1spNEb396R4j2hi79X",
  "key14": "KnwRuN1KznA7XVyq4wdp5QEV8YstAgXouL9TxUu1FdU5gdiuxKA1tpAKZJvVTJGpRaXXgsTFNtubzAujXHJXMwq",
  "key15": "JXwv8hDKDCWHgwaLwiBTkzQe5Sa1qZp8dM48v579TBZEcmQhQX8vyHgSTMJuzzaZqZRJrC7YvtueFA9JpKjDcK9",
  "key16": "dCGM8cQAqAv2eqWSmYmS6NyqMNdByDCKebQCufv9mjG36JrPWWaARDVM2D8HMZJLJicTg3uXNrGVEaGKNjkeNZ1",
  "key17": "4gu6Kke2DngeWNU1RGqZpU81yGAP9mDCpVr1smfgpnAcmUoVWzRxYuamAd8NhgSU2rA7Eq5j1WpDKxPY4K3DiDTw",
  "key18": "31BLVkDLzmYxu8qxceQN7iYU8psh8A5LYB1CtJ4Zih5gaQR9iTKM6h7trq6LVH4e4gvVe88PVCGnZ9okas8q5P7a",
  "key19": "48xTmVquyEAAmbdrWEFm58P9mtqE7TGFNBhc9pj9ctVMG9GmJwin3mWkujd65CdkY6StjRvZbRkMyBhY9yMjR3nv",
  "key20": "43UXncDNrDcYL9jmnvt4K31Lwvy9vdLCKHGygejnJEZTKYMsXJsk8HGb63PigkwCqKLaz8mhq5artTGv4eLkMn7a",
  "key21": "2bJ8JgFGUy9xdA3Jw4rLjKUL8B3FLU4gTg8ipEpFzCBGkWYJRfTfyn9wXEW3Nx82QVumjDxktNQPV5d6WQ53Tiu",
  "key22": "32wWK6cAbP5nfDbDcEv3gV452teXGdbrpTQLnMA8aMexrr5z2EDUbivJou1xzogpJRfMNWQJqV5rm8UzhiPRZzEy",
  "key23": "Bkc2uAU6mftEGbgjxaMWfq6aNQP49DBcNmPAK6td4rUxvoqje18uHXbsEq5Tc18PBicTFGAU8LyTmb89w7XdDyU",
  "key24": "e6CdDLaVjNTq1kzbBPe9cnhgjPGEqa3cFyMRh4BV7ndJLAeccdiHjY8jWx9aKANH12fQne7qPMfcx9DJ9EN6sS9",
  "key25": "3EuLFNBnT61XJsei3RBJPJc9ioTqhZwCLRC3Nkzucyth5fiDkFLhLc3F1C5GA2uXZ87CJAhvpc7f8rxr7y51D8ku",
  "key26": "5HTexN9ybe9aLWW2vJWGGJSb9B7PX9UjGXwujWDw3QKCu1MthNVSk7uPDek9pvoLdRoqUayABPcTG88XQojSFV9T",
  "key27": "1HkGb1AMcftaQ1Yig1pMqbpY97R1g8Rkberep5WfiYTpWZxiFbVWScc2HjTBzQ1Msc8xwvAfrJ6dXBna7UsLdDM",
  "key28": "5KLGiLbVhf4rek6AezmvtQyCZ2PoX2sqM3RafPcQspdNghkWSsVtvCo4xQ6guuMwLmMnoVi9WeMja3bAbHrMjgnL",
  "key29": "2TA81gUs64NC5BDUfUSGkr5tHLwphmqS84pSx4XLcfPsocJghcvgFZMQQ8mBuS2CRrrJGxoNpKqWAAEE6YpJt8fd",
  "key30": "MTKB7NA2TiES3PweQg4jRd55wczQMXZ8H9FifzUgF8aayBU59o7xSrHKyHSfxEiRPVuP1LeopCFnJLHNfhWAhwy",
  "key31": "L87A7bNCej3xUceoLbc5aGgo65fTkiJn3BxbwvU9v5wPuLnCs4sGb5hejGUSE4jDuyxnwdjS1vaCBthjYQ1oua8",
  "key32": "2wgfdtUZv3KdrRzemh2GacmSPbnH1yUMS6fpvXq2JFeNGB2vJavPxwPHcDAbGpuuqdXHEbBmHxmevHkqfWr47u5Y",
  "key33": "4XKMHNMM7fhVoB1AXyTDFBqvK9yJzZqKiez6UV1zMg87gNUFr7vEateGWs8yhbVGcN4YLY9hNb6FWMguEMWRB8GY",
  "key34": "22s87e6yT7T2J6dN4A7tp5yPKuE7G8rpJeh9pga7gA5wRiftR66pG2cMpq5kZM82eQ9CdBQxvVh9CyAxLL5XwQv6",
  "key35": "4e7fp2792n3EzQqvhdyUPULEKcyTTHKd7rQC5soWuw63Nxaa4qbEwF1WUWLwPbB57HgN2YidXGpjGktGmcHdhiBt",
  "key36": "4eBSrNXCqFkTGC3ncfnbgmoyYcsArRMUTTyyDff9df4r5uZgPzQvipztNP78tU4VVEa7aTUkc6voF89gYBGMUiG4",
  "key37": "5WLiNEWZjjEUhDi4GE9HdGwab5y8isstcgS7mYiCAuaDKJwuCK21XzZy6RLLhYHgZYJSoUwrPo2WArDh6mr4FDa1",
  "key38": "4dvj3sfX5q8RYezD29XMUkwj9PKUWPBbmE6mtUucfcSrAY6mitUSnzJLgsQ1JvxGPRQ3jYG76zYkqmWWhJ1zqXwX",
  "key39": "57azvQDEauCTT2FkJxzWYQKDWeTDD2d2Qc41F87AVQTDctX114oZviqbTfKg9RgR3ts414n1iBydmjRijfzwZGnF",
  "key40": "4mUh9TSbn8g57c7Z2DMMHdP2JypZczkAZ3rj6NSCGc7xPLsnrNYkxJETmCAmNqwoHVxFbHDQnF6p3m4e8d5sf4dK",
  "key41": "3VGaunBUL45Ybg9nz6qEwJXW5CCUPkWp3mJZiFgWTxyxaiJNsFUXzWjEo8KQxSRYqkoFuBAQaHiX55HTTmxCumEc",
  "key42": "3TYsvY3DEPSfM9V78hQYjisA8LbBUT2DBkaxEQmUvHSvMccssdvkfqDtCZZ5GqigmkxLsizsPdTFVqJ1JeJDQGJ7",
  "key43": "5VqwbFNVYZCsnPzSBNypDfy5FMKw2gPePpMFtmBZYcS1La6SW78DDjgycbvxHvtD9KL5h6QhK6FX5HaW8PHQ1FAE",
  "key44": "3HEq5ZwsJgC5H5ydSQqGa2JdvtvEWLsqeH9Lc5CtMqZKw23ncPzTu3rX4VTh8t6aJZZ7PY5ysTvhmXuFHFTrACfw",
  "key45": "4z7pTpx71QwE7uBR95Mt7P2fnPJhwDpnvqD8LutbPzxC263i6aCqVdopevd4dCi8L8ixT3xLQKxs6oEpVxUFW15L",
  "key46": "1vJkzVY87BRSZvDJ3rWP3XM42tuojnymw26TMCP1tLBfdqdufuUnnDMWeArMPGsomuK4HAEGDcrXWkuPXXBwSh9"
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

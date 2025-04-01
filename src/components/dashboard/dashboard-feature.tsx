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
    "4oSUMAYVzauWtzd1s4CUQ3RqcoGApLxg5Mjsy6qh95axeATnqpBgs73rGDo5QGJnhzQwrrVcb4BoEmfnSEaubAHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CzT8CPkfmrbE152d9uuxHw9GvH6A8LgRFUWbips4qbCqrnDhJQi3AmL4pq8zWiZUgc9Jxr89guZs1zAuV5SbQMK",
  "key1": "F2r8g8yN3Y7ExiXAbw4K2NPjNR2oWnwiFUTbzCA2S33terA7GhQoYJ5Md2gumfbWyHFf5FCaetPKatKMNyZjtuA",
  "key2": "35r6yeJb9dSY4a32YBnXVjHqFtYY7NowcLuEQNtLVtZt75FL5Uh9ZWBHJ1u975DpqzLYD6r9SQWAV9DQe6F8mJnm",
  "key3": "3QEBSU31sdU8oMXVZVtAKEDjVVAhJ2C6bceTdhMTUvs3NF6J96GWFpj5QnCZ8ixYZo7zLruRjPqggSh4DdV8MwEo",
  "key4": "482Qt1bS9snQvMFZgtEc1LxVovtLfNipoUF7sdDwsnPjtddrDafTa1ipY4R9a7Q1yh5z2GZuSd7UHsG1qN6LWr1h",
  "key5": "21jGPTiK5sxR5pTLG4sPBZHJy9oZLSd5Ku7iJN9eAZ7BYuXUQWbPwRavo7UK5RF5gVTJr5jX3wrMMvhx8nBY6Lgc",
  "key6": "inADfxY4tfgB5cNuNffnBxLtJU6p1e2VW2yKyHVrvZai9F3Vvvp9gkTfiCkSr5NFAPBnwtLBPnzee5ug7q5Ki1L",
  "key7": "3o3JLFSFtUxYUJL15jgko7Ymq3uhWRNh9ju8wkjHKon6ycoGCetfufhTKjxrVg7C85D6GWCfBcPdLLtUj8XY9pFR",
  "key8": "2KTo2kzcWZ2DLLatsrCTgHgB9Caz5VaMbuwNNHos6JviixntrQhDLRfTHh5hmjtwyi2fYDM9YJAhKXk7Kbc53h8k",
  "key9": "3RLdbwnZyRqkyfmVMFuEy2WRX8AbX1UmFvkXZ56KVCTePm9sottgKTZKLuFsi4Ut683S69KtjppkhBqEcWRimiwp",
  "key10": "xQaN2q219zigqr7giDqM2wVjT211hA9KUYdF2zhQbsV5T7qjNFqZ44K2gGDSd89R8NkrXyvzDJmJwEVCkzKdYHF",
  "key11": "3P7PXN322ckM9gSz2sEwG233A15Y6eb7h6EWVeibyeYwsuR344ud3iD541TcB8XXbB3gPhG2iyKThdRA9LQyFRnN",
  "key12": "2viXiw1KjmYqsfZRREo2HcquxqKxZotHFHVpRGgngz3hdLjfQ7qMbpfnU5RAq5Mp5Hy8j1vHoK6eFbigZA9Bqr3D",
  "key13": "2UoZdpV6TTTD386rvkFwTSsDurn8KemaSPr1wZdh5Nc9hbNNeKD8bLqAiGbG9FeDcp6dMyc4nPj56JquezhXN8Bf",
  "key14": "2LveEdWi3ZRBeueRgvNGBqYrGTxexZ7x8KKmT6twvg2h8y6hm4NnLQ8VGJNhdb7H7xhA2ksv5hphWC8U84rNCRha",
  "key15": "2VeQd79q5g2GZxhkXKfHZgEthnhLEDqckeusar9xVWjRCNeMBqVXE6RM9SG1xs4tmgTTf4TwgiL7VRXCTQMHjps8",
  "key16": "2iqxBXqVmCzzfP6g7wu2sMngMNssEMyHWvk1Z1g8bPktT4RqRuJuTU81RZhvwTnDdSvYVttYdqvMdfLvhL5KNCRe",
  "key17": "HH63dVwyFUN2BgfMqhbwxBn72HUu1VDeg283WdnatXJoSCxLEMMTp29TeAd7gVXgM5WeKmD2DjpnSZ9qSx5Z9Lt",
  "key18": "5Whrp8aFJAXAiwN75FeF4Sjb1YnqdG6uZHT9akqttQNy3exvcMZvVXeKcupnbRHp2UHBcuhMR65XffyTbx7ZcZEm",
  "key19": "SBG3oNaSztGpzXqDV7nm2rRpTyoD6HhYw4LmsiCd3cMrGqAzud3PSVLyVNpuEbPQoi2Bv93fMPhPCtXFWmsYXwt",
  "key20": "4Jsr8LHfWnayg2BWWKg6Ud4rC3TFHhu5J8d53gZ4PeAr9dYaWX6sHCq7cm7o6FVsoRenFRkRThiigSCMJn7XY549",
  "key21": "2wtMVNP2wLjKCvTn2EbDbLUSM8sHZzyb33LH8nxEVrsHL77GvnuNhyZnJZp6PkGpG9Buzfa2ggHcB7JYLaeHd51T",
  "key22": "5iDPwhLpyTj1TREDLvZt64ErKwTPGQpyE6sWwweL7iCHXjhYuDTnpucqYXSWjgnfPuQn17CSrGKhheBAsLndKXTB",
  "key23": "4uLTyKrHMXypyksgWF2F6EUPwj2L8VyDtfEUKnU2gdupzBvTq5VHxWtbzzQ783gwqvGgoA9R2hasnwkpjgGHUG3f",
  "key24": "55Kn2kcDiKD8S6HkvDcDrntxfVwvap9ahAD1i8HS435jEcK2eGffiJqM72yRKnbSDNMJRYyLKKuNi2fpoXa2sxR3",
  "key25": "2ERs34ngzN9u5Kzxuj4iHJqeKd6Qzn4Ldc2H1YBbzL1mQcWzNkMv6hG7tSf4tKFcBbSSLu6ixMyMdWSUxiySnJZS",
  "key26": "3CkPrruG4anYbEhAcGhdgqN7gyEBpAcgSXinnJ25aRKUML34RqRfjJpezCNh2SSDt6Uv9qectQGGKCWfiiuZZ9Sn"
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

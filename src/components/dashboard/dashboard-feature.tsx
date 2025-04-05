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
    "5XhTEsCySRvyXtpAgBoVMEfdBvmgH54AEyRQSX2Tf7DnMEbaAMawxvqEyUF2YoXjg7kriQqstymGFb2rS1auwWnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyU3aLtd3hYGdj9V8VztV9i8EWAvsAyeiBLWnC3KfhxqpST338DEcgq9dSVp6Ygwiif38LpbqFGfpnDbdCXn24S",
  "key1": "5V6r59yL7eq9FwgBrVaZEY9kwfTzVFvjP6oUP5LQj3ZM2bwoBjM1zEqU3Z6KPxCuHtSSAmRDwLA51VJMhXWBtXMu",
  "key2": "4XnJfhMceyduHb8qBe8Ex4jWBq4k2ycCPDteVqUPhPUFazmGpE1MYnSFBhxmV5TxWazHT5yb9oTwKagYX1Tu5vRn",
  "key3": "pmDDSMgX6kta7JjYwfr4QXw8cz3YUdg9ze6Redra86jSerwNnZgtfAyE75ULCQCDmjvvBTwYKPQWhMmja1KhJQY",
  "key4": "5r2dsBDTx2VSyAKLtbb34pZXSPfVrZsotzRmEEHJJGDZr1oHEkuN6P5UHrmU3yCUixQqMwsUhZDbtA6h1qsT2qdn",
  "key5": "5N4wGkNLQkm9sNM5Ksb9iqQ1ikJvzZZ4Zd3o1EXRibnVHYDPCvroXpumgQgqPe3Q2QmjT3HDgEb4zzvYgttMqQMU",
  "key6": "njWr8pQcKut8TTBL1qbYWV3VW2To2svgwEYPfaD9Xt2pwsPa5r4669jb6PwcMFaMcmvVhQ7vm1KVafzHhY1tdvR",
  "key7": "sYg2H1zuBUHowS5LKwiimLwffYwHCPsNy3HwjC29AoTL6fyDcoCHV9gfvNZvFXZNPhj6UJxZT2rBDqXnnCAoqcF",
  "key8": "2HPyXUnUhPoKrJBBADfLnyKCT4raPWcrBxSqDkW3fuUpqwyphjVQyrUuzLcSrFsUStF1HnyuQRA6Yfg83DJ2Ecyz",
  "key9": "3aAunR5FiYibwk1xhWA7u9VkPSsPyh35q1Wpce2PSrT2AJndApd8AEpRKUE3DxRdM1w6TPqhP8ooh1zLvDHFxdum",
  "key10": "5eENkEUm9jUyqTputnLQHbwkbvLbjSShP6wJuzxFSJSezgsL4eTzEvZhSE14MUsAu7bPG9uoq6kbzdB48CgUFgBN",
  "key11": "3mZsjfyTNKc39TDQVtVX72uaxZFuFRAjvc5gvLtNa3tERJ38aUQoN1bXgm41RA7JtXTj7texTVjwhvqcY8GA197r",
  "key12": "2X42L9zkKG8EzKE8Lzf4affSaTXgy65kgiu6FqQDH46BrrUac6bEqvCiG9eZNjXyYMshZSvN8KMQLSpze6pDAyDP",
  "key13": "5Y5SWb2kyG6fa4z2kccu6LZhX443cdvgvQGwbq1CSx6Xq7kVgsWmR6ZCuFVW9BELyG88RW4yxCBj9XMc1AJjEyyf",
  "key14": "4sKhJysdz6prfhAbWVLK52SP8iUvjLzsHD9kJVy9YmVekxvAxUqHtjMgknuChFXMfgtmEFCdg8T7MsBH9uDkm8or",
  "key15": "kRGV9E6c819cM7GCyDMagUmXAzx2gmt7D87qF993N3Mt3GVcrW1ZqfSfAUYqJLRo2TFjqh3Szmi1nNDB39qXGwc",
  "key16": "24aTCNiyHCp51hmiJAU188BTK3LadezNinLYa2r8FVuGkHwy4M6m9oBuALhBWVcjx957TBgrSLocUu2U9HLLDcu6",
  "key17": "3W6FpqhtQRqUc6g8t7DLifa5nhVVsAygzPhXejCamCQDUiFSAAgiP7CvVLwbo5qi2TNY72yxYSNyzvKXP7BRAPRA",
  "key18": "KNt8xAb5KRVjmsFEtNAcvJEEhECTszSERz12WwKEz6qqdUq4aDWHWFxxNvyAs9y7PpAQbe7c7QmodzAVY7aoc5t",
  "key19": "32g96Q3HAworUBZ4nMp6e5CVeqLni3HwT2FAWgQSNBKvNawv5nbgLSz4Su7XLP57nZX8ixBtZE3KiTKZkurEak35",
  "key20": "tJmmBhoPghpYQHCEULqEAUT7GwbuaLFBBbr8vZW4MKXjw6ywj2GdL1GHzsFt8M5BQKSHfyJuCw23mdEDbEmiALm",
  "key21": "2xAtMwRz17uwbpRcn9CjiinwA9bpMwXjNZ1AnUkT6XhM9tq9hkDeb5uNZBavX2PhpzWMRBjXDJ2KykMVmBPV3n24",
  "key22": "36ZyWCHjZmyGunNNWT3HUJbj8tRjfZJCtc5wR7rhuobiQJp4ABaxEnCDsMnSGw6wdh7HQt5EEkCorxsCU9wqusoQ",
  "key23": "ey8rQBNs2PcKZYPkW7Ei3YHrvos81biJ9u1drFNfFEQAyBA64sewdjPrn87YsC6vnvZ9NSXc4FcUk86dYwhAxAq",
  "key24": "5JhEkE6dmDtyzvwRycHMjbu9oZxvqCaA2iYDmQzVYzCexXemEwSm4rdzyaF7nmT9reQGL1Mv26iwU6Mj6GoNQoUi",
  "key25": "2m1QyuHmqrSJqW9Kd9ThGZ7Y6pvwyvnmHcNNo2zwxGn4ZCiueYcnE9kMA6ABnQTcyjr1eYngcZssQQEuD5FF34bG",
  "key26": "4brQtVsd4GbBGr1mrUGG8rPj4qyKEck8SDLGfriQ3f3SKuKZR1kqkfED4Rk9HG6YoQW3kXZ4tCrDsixswRq22vjy",
  "key27": "2HHpDPXaJgd3E5eiEfKNDaTnpC6ePovq7QyvWdP1bectXYWBCY2y7qWq8UnQUpByh6gDtETaHW4Ckty5CFM5zHVV",
  "key28": "2kUUD1uUcJzojh6dSxySf8SHoTJqtrFHve6nM8wZ12nvRi8DDiqqNpGtKEcsyp4HfiFE6p25y9oazskZzPZwCJSN",
  "key29": "tZdQGMm5Wsexm2WxcTmoNKS6ySPBq3WU2uq7PuHrCfRgqZtBHD548j4vU4QhEqyjmN2mxGzS8HuCwPQUr4PqGYY",
  "key30": "3TVt1L4LGg5rpyFChEaUQcmaYuTG9JhE53tVDfDt2jQqGeRx1CNoTLEz7sdig4aytZBQsw7Zu9v48Xbc1WUUgLYh",
  "key31": "9SjyuBkU1ByxRuR7wLfVqS3AK9meFQ6XXFNJNztmsk6iyDzXexVhzY4oTBAafSr9tRSvNK3wdZbawskASjyr8fz",
  "key32": "5bvRHHjfrYZKMBjX8LDnYpANAd8XY8CCHUg7ccUx6erFNdFsUnuKiDzsyzHUok7cagZEZSNdRFAH1N3zH98yxsVF",
  "key33": "2BPhQrbGpw4KGFssjFpEMqWFbZfbnkaUUkCobWdrE8KZc1wcqRiDoKWUQeDwV8DyRG3CY7gkap3CVyF9PGAcdBA8",
  "key34": "2SUx5RAoGhskQxw5krKX1kyCDvfAUhrKKfJLNvA616wueSgvN4C2BFqZ7foKUSE3kzrufhLpMpaUKLYaeob5vffZ",
  "key35": "5QEmwuAfadatxYCsk4AWmdhxpAzFGGPEpFShvx32SQZ1Ya6Gd6ueTUhWmw6mNNoTuVsSBVQ35YTnniT4KS78iyNH",
  "key36": "3dhuqH4AqkfNygAFs1wE46Mp3xDAH4z936MVXrd2AJQ2VfW4qEsKGPaXAsfrqjk4PqNm8eGAA2hLaxzhZDCHNHe1",
  "key37": "5aQL5DNHDp7LnzeYKqV41jCvDRFgNxuukQGsiTak6exXaZHXimu9SMbzHHGxCa6k4oK9EH7Ew2c5pUHtPLQ2HppU",
  "key38": "3GJMehzSeoqDLWMWPECwzetHEMp8kms7SDyN1HDRp1c7VKXAzxWRkuiX12vMobiZx4rG3W5N49oUfU7T2A8KwZvx",
  "key39": "5nYYto2RHfFvR7hihH8sz6UbXqpDrW4umYErSmegagnfhxLvvFRQhhLLDGy68QvzGqorGMCsjhJyBezVg7cA3L5W",
  "key40": "nwPYSphv18Vvk1c6xZwTKiP6pPeWBGSZYTzKE4yENxTSTKgFrGhqjDGja5amy49Km5BdFFw3qZmAsKATUYXmdsk",
  "key41": "27LjxVCuBtNU3zheK6ta3KFKrBKUqV2BdEDEJNyiokhohMXXCQ7XBySFGfLrvnX888ry7iM4zH44vJRqjH4hTkfQ",
  "key42": "2gbyzq7XorRfbmnggKNbrMH5PnFQ1QH6ev5uDvtBogs8r7pEP3stayaikZEwTcBwWqGMEHd9Na5b5tvpCDNpoF6o",
  "key43": "4VeNokKSNqzHy2pD9741byaA8coa8kxvxuPfss7wBXZL4Ep1QVUaZst4MsuUWMSqgBYRyirAJP69R5aRZz2N7azD",
  "key44": "5KVk1Dm6MteB5iE19xgNj1gaJiWWfhQk5ipYANztsHV7WTC9pHQHZauRXqfz8Gyguw4tQrsSRBW7DUKxCu1rvk4U",
  "key45": "4orQKEWRQk5Wb5hWUiZvZswQCNhh2V7Hz1FRKXueykUWaKNXZNNofXhYvy6s97HEra9Lseqa3XrGdcMr9GsgQ1jD",
  "key46": "2ojRNeQdicRKgbsTmAQWDRg3ktpHR3k3MDsc7h9H737mqCRzuFB88V1vmai7UNPsXdnnTrzqmsoQqv56tjPyAJ3p"
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

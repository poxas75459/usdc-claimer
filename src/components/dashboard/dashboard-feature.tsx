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
    "3UWZUzhwgGj2tvbTZounMZtw2if9hN5FHBnBbmsdT8Ri55V4bxbTyWhReZV9oW88koCQQWy7U7mkxG89QjDvmPFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZz8DZXjddtwe5jXQQrD7uQX49FpYnfP2Qv57MNDGoJuonuP7tcxqCFthKA94yoyhP73ywRHJ1Z5TXqiUkhehD",
  "key1": "3GpiTrUi7RkwmASk5X653u3rwyLUnu71TbEzXDBFaRRV1N49HbhPYEURSYkQ2Mvefn6xGqeUFpadJEHcpT961WaN",
  "key2": "2Xdm2UQEyeCTDYrt5JgnZdQ9oVrqtq153adeng3dxewCeMJrM35JdAMAFqi8zy4jQ1MXnFTVeqoJWhNLS882fw59",
  "key3": "65p3GFTgQy1qJKfau2GLwaQDYp46783nZnKixFEmfVdJAzjJ31ddXmRNVeJ7MTrgHv5Dr1gAVwHgtebpQQHifG3n",
  "key4": "4Q4b4EJgX3BXbnLZE11BaWg262Ek8uUdnR6iPUqksBb2hhUpwJiXHyJ7q7CPxhw1gedidPBfy8mLHwdveGgi8mvs",
  "key5": "6E4wxekpdT1sFBaGewEKALgC4PsQbyBd3jZFD5QwhhCVkyYC5vREdMr6WN62SRF8LGRe6AcNjtffgBPYRqxB57T",
  "key6": "4SidcuGSm4uuGXQw7Atyi4MFFqbdKndgrMZY1Mjxyjs4Fpd4mz8A8pn79WBxdrQ9Bj4ker2Bqc2KQdJrj77Z8t3h",
  "key7": "5hVxwtFD3zKMd4HHFutKSxdmZv5ALTVcWybWYmL6ohh6zuQmyiBTuLUL23ka8QjxrH95r3TNDEv7VyvWtvMW7Lr4",
  "key8": "4vGRS18TMHykwiXStm4JeDSZXtNnSsTaAUrdTDTKw2AVrrhNanuTzeXq3H4tCfyqxLcu8swMDDUsCGKBmsfMKNEN",
  "key9": "3o9QzpjSDQCPJpYTQ2kjkVJKDnwzUyZRX8APqdYowKHg26nd495DHYvjrdm2vUWXKQ37tyuXZaUk6SWxSan85SRT",
  "key10": "2E36GZen1gKN9Zk6bWUiUFfZs8gd5ptsz2TA83L9ru5To29h2CgiALMSqbaavdouMAVjzqn3RGuMM9iL2Xy9P3oP",
  "key11": "4vNFa95KfUfr236sWwGFqgcBH9cNcK8Y1jBUVsWnnzo83PWHkoSznHiRsS9W2QwkWpHwSsBdR2JGNVWTvmF2i6ha",
  "key12": "K8C8s4vhfzV8dyukK31zBkanELc86ywiyjmTxR7P4pgX1TEaLyM6spMq3ZPhNmn7ciVyu1Nxp7UGDSopWjtzv6k",
  "key13": "3KGq6BRgucuzFYB1horpAgXQw6EQzz29CtBWZwdgzTr6PHKwRZvQAQJXB44mcVJFWPB9AB26hAYwkaNUTKRNx3L4",
  "key14": "2DhGRQAkBZktVBGfokk8afcGJ8fWxnhDuUqVnBAH5HF959MVsJ3i5BXZ1MTjqeuqBQFrSKSkgrT3ohJDpXjKyMkF",
  "key15": "vAUp2oS4S1bwfMCGTpyKR7pDH3gDfQARm5Wi2bQLG3Xb4V2KtwiqFLpCPa3P6o2HGXf3udkmtcH7ZP4R7JaoMTj",
  "key16": "SLrzbbZceZkkhwiJmdE5FJFmvdL6otjL43aMNDAWxKGkekrkuwW3ZDJYGg2MwvdnnoNRxxtL4hupudA9BRFuBUF",
  "key17": "BrF8zjaq7ikxmaKv6oAmy6aapy3EnWe9PGbbsP1g7zPUmb9vr2sfxgmPAQbdzppaH6Ln3b7ck9zQPemS3vegQ1o",
  "key18": "4ZgM883xj88j5W9tMv6RNWtbnqK8tWqZRSohAt5ZsNWd3GjC8FR9bczpZnGfxdTPfBxbBjLBZktzdF63rfSCNat9",
  "key19": "5Y7LFbjg6bdk8eLUsyn8p4ndw1ioYdt5KvfWTXUwiYcA2P6qrHc1bhLFz86QSohZHnPzANd73dFPNFgtr5q4i4X",
  "key20": "5d4EM4DpauXqKs2EL5RHKMp3zXyBidwFDFPLXqwbi5WJTiGabYEESSyfQMkfWYZNYsgdbaiQq8qqgtdrGEkiuAx3",
  "key21": "5csHsZWjoSaM4SFzfAJMjxkDfbD25oU9AeGPsMJNFmozjU8rEAr4LidwuXwQmBha7BJ6FikGhPSxTpwuMx7dZYHe",
  "key22": "5fLXBPo2rzyakRrbTe74LruiJYXoE4SBEPwNUbYWzCcKW3k3ZGA8wvfUcwqpARiMtau3TZFgtbF5Zkq45SWrezT3",
  "key23": "65KApJVJhFv9r8uHGqRhsCdCfXtju8VD5XzngHA61jGXTy9fbdWxKXL3sWgaYmryz5rcP5ffj9GAQpX6x1xh5rzN",
  "key24": "2ZvkytHbjgTZowxCrYseGqfq3pvpK4fVKZbpEELmM8RCUWBk77GYAUr6dpRre6pvPQAZ7evkp3GkVy2UkGkZVteE",
  "key25": "fixufft25tGXA2uwyKbYtkwVJaZ5ahtiR4PM9AaWpQPGUozg5c2TsutRDNEZR4w2DqB8mB2vq1L9P9YTyAVWxf6",
  "key26": "4DVC9KJALbjypVYgHVuv8moG4wxYdsmhBEQQvZ6LN6ewGwLVNSZcPuKBDcf6aKGDtrKpEp8MSESJuhrcbbZWffbo",
  "key27": "mRSiFJ7SsGNZ1rMtnhZCpPuYxM3ZcicGKwh5fdzQ8PB171KjbambrnuwXMryPkaaMGzS6GBLDL7GhQK4x1AoSPb",
  "key28": "2wHgWxL4cazXvjJLhD3AtamVpD5XkCzvfTuHgarDgBZTfRtt1ZiVvokgxzJUmB2hm6zCT6Zrr8Ct9M2BAC5rXyHZ",
  "key29": "48XXG8yfX1DR1nsAxtzMZYiKtbfD5acVPPmq7yFzrs7CDRDkH7SAgdygq9hWi18G9LYSm6PVYyLgKiA8VvXD3tJJ",
  "key30": "5ppMDTq9jHxcagQY8rSnKy83syqe7n6T9NYdZSznbtRD3tqkZN6SfuE7zg1uRPv5sp5k5GbLLqXr8z8zv6BF6sUy",
  "key31": "3KwXAX3YKr5j4RYzMmnbzxsgtQgsfg3hqM2DnPke6zsfyFRw7Q56WqcncYCbxcwSRmAqCqPonPRK6nHMUZTERmMP",
  "key32": "4TD3RLv99dQbJ2Y16Z89dRQt2iy4eZYkXyXravHmHjyCyWdfs8XNoPAf7uBzY8TsggjkR3UQHFTc3wZHATtnqCsE",
  "key33": "4nydDUUVgMn1VKN5goRZGuiZwwhewoyZi4HskQUz2thz99ghJg1qK5CCEtf6jzXxb77giZfLGFeXMaEVHA2euDm",
  "key34": "4tgzdRzFcWX2GmKNSKcpjmVygfBNfkTkLurPVhM4CXXrQ6mYmB1dXVaXWCTUR95wL9RemrXmzPZWutx3r4f4CV7v",
  "key35": "5UnBqJbshprWByw4kgiWpMj9MaihaxJ4jkBLRrwokNWXL9ASi1rxsHhTMQcf8A7cv1usM71Lv41a2MXwfdMSw4ms",
  "key36": "643cmmoqJFidrvViaLAzKZK19BnNnjRt3AC2BkFphutnF57p83fQeXxRPCarqag83QS4fX7srpsuDxHCfdyfYY4P"
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

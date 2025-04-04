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
    "5AaRWxLafgR5AQN7FhDWyomhpXcmQVPNJJTg5ejtRpTvcKaukERBe7anceB6GeQiq5yRJm6nNHpYaCAYeo6SzJBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eHFYgVBJfbNbyifFLfB4ZASqeF3uUiCbTWxaJjVMbPcGMrYvbMYN8CpNhDDwQxTmhFNpiD4SjXVNRM1ow4fPRy3",
  "key1": "3NbQDQeSAHvqFmk8UEHMCNuYDtPGpGkyQZC4h9xR4Ni5yqvbMoRVTPfLV9JadSpg4AbUxbgQiXwpix8Rcvwahx2D",
  "key2": "3EdWr4Sabo1HWLm9N6TYPuuAdt4Ct1jYMp3sWBmajkgyeEjxMCoEMtGHLxefLqr3qd5vTSXEU2dMXtYE1RKFUc8G",
  "key3": "5qhZW6xoYbCRPDMhzRen5xr1t3X4Qjuy4GY1F1jyBk6BfbtNvErp27uAMZVgsmfCgfcHbpBTyf47hEuEr1FokgcG",
  "key4": "5BuaCGYVoQfJnnD2RC7LbDfHLzPeDVFe2UWGCrmrg5xC4mD2Bt1SwdTj7FGri3k3rcLaTjGGdwdhjYXaAu2kuopQ",
  "key5": "Ri5dJpTUXKmEgQGNTbvybjRcXjbgnWFne9TgdbKGPZcMfHpxP5M1Loi6X1FzHuJyYEcAoBBWFhJ18h5WiB2Pn6h",
  "key6": "PXsxHfdGxYe1gFypsJHRJenkxuZ2fUaJ456GajewVkBci6kmeoBGKUz3vbuJuxNRG97twjU2xe42SYadb3akEdu",
  "key7": "2LwiBiumi7NXM23KhALqHNJBGiDSpki8FtvBS9vYE9B6znc1jvYcuoxD5Zv7uKVerzvHGVpJTVrSc5dxHMYfLB8b",
  "key8": "28WTSf4QB485hnuYAWTom52kRGnRmR8CJ8HBzpiJrAopfVAa8FsrHmacFJZ5tHbdNUuSSkyMFaNBXQEHixLVJeMQ",
  "key9": "duuUUZXZYD4Ty3pdTVRFhMPttFK2PU4a4WRiSFabVMQ12jnYJGqryaKATEN2Bo4oXmZk9yzBUWBXX153DTYrgdq",
  "key10": "4KaG3pncSuTGtcSLfSkQY8KjMebf3a3pkzrvo8kx84aggCSVJHSJEAretbsLSSeoBka3t3gUHgrBWfzL42uaRNNk",
  "key11": "2bmytjEMJX5eSzJXaFaifTiS53ADcbvP8BiBMBaM7qGJvDRHjJ31JXXdpDoWoWAZCSXmiTfQRzLZgdCyeApt3jJi",
  "key12": "37wAC7bfHCzMA9wp8cze2ZD1V2uEKXzUn1Ge6t3ExMtLQM36WMVoWSd5q6SvBP7Y4k7oDDDZfqkNC1dTiAqSdZYA",
  "key13": "3LKSBCktMRbsRsCDvSvx7RoKffzLDciiv7fBoJibPhennXnUYStDXdvTwC74EzursS3Ts7WQaCiPEjEa3BNV9t7e",
  "key14": "5wrodjDfSZnq4gQ8hH8kj6XWNqVu636v5tqhAbCR77g5xgX7wBQEx6ThKaEn7PUPGnibvdsv3Jvn33TvaJfYBoi1",
  "key15": "5adhUY7nHyNY3Jm38J2aP7pCqyDBdtSEXd6CHhz3DvNT5vtocrBidowmJKbUS9fUypA8jVHyUYKHn2ZJyDtfTpWm",
  "key16": "5nPp82puZKBbLnFnZPmQVJLLqFjmYFyef43WNVuP5H8b6LYRXJD7ZFvt9AVzbAMzzgTMqjwVxLVndMgMLT2cACkk",
  "key17": "TH1R6wjMCRsxHtMj6u5UrLM7jwgRxDdFRx45juDCc8WKRFzTQacMmxidctWn2444aSFuojUfGtX4xfsg1du8EDs",
  "key18": "3wRfMUiHt7c8CNnBTbP8T3KnZ8S7cakrYR35WTqx9HmXvCCJktgLdvYQaRErtSqjKQKiAHTAX1dv2NPdsVWn5Dvo",
  "key19": "5b6JarQvm1mHe3rCLyZWD92rkkzG9z4aA7GjAiUs1CTQM9kEcQyfihXrQWbJYVkBga9YwnteMxG5sok9vY8a145r",
  "key20": "kyP2w1iTz9RRE2C7Hbsc7pWfAPQLUGbL5FtJRquh1BDahim2RWYzYMpbhNDtRyq3ZQjWN7hTXLhjibsbYUWBXJC",
  "key21": "274ZuWV3XREkxjjJ2DTL2RbRHQHQsY7VoNZmQDPto7FFa8UjVSvsYbTQzYCxn6M3L9u4CDiDvekH2SrgFtqCVcgm",
  "key22": "3mYf5NtTJkt8S9a1mMVyEV2DVGynFpMgVNWQNTLBoHDf8qcW79BqgyzBCwv6rcWKCjWzfWsd75jTNETjaHx4sFEy",
  "key23": "5MUrkNLxRSdLEdP3vqYh6mi2yp27CpyVJVC2ejFiFMcUKK41vJPQwAUqmwL9AKKnm3d4NhQGDPgufs3GeMSroDig",
  "key24": "3kVvidDzg6zLghQKrok6tMZQo29BAYXhZgeKuGm7WiDmy7frrskXW5ea89LvAJz1VUa6pS4ZyKs36X35in5NSDEv",
  "key25": "LLjSmcYgLCikamoLQhoHaKx7tGNrbw3ddZAk6QPeTBL1pTQGvUsZQ192myVFGd1MeMBCK1G2ULN9VHh2T3pV8yU",
  "key26": "2BE6b62gFTVzuhmQZXa3QTdVcmYhXaVEDoxq8q8Vfz8ZS8CN9oJ8zhf6f1rjyRgPLeJydXx3VHj1hqLz6oGZEJwQ",
  "key27": "5ULq8SaQTSJN3KtYh1sFd33K15v8Re2a3DE4hmVxZ6HeePiuLztSKMwJ872uJcvaoHs3TYcYr52Wm8hBAxVXB6r5",
  "key28": "2jdFjbLVt7HVdCeqoKW6v6chFhUZNrbbZNsoqtjGitPK9HGXyQEoRKHEceCrByJGLrqeLt9sRWJZAmVCtg8B217Q",
  "key29": "3igRkNSKuX9nNuKBQwS7eEoZdhC4Zd2epx1d3gBRCWvgFidyzJHB9oiJQbDMEQ6D6iarm1EwnFcJF7g7xYL6SzZA",
  "key30": "4Sr2nDxPdMmqG8obAhgQ1vDYQtkS1UBpKwKcWbneN2T5ySe5rzDBfDPDuF7mXJ3m8AmYyGuMKaAZWurTnmQw4aSS",
  "key31": "2YQzx1zXf6XBsxMBPtfWNFNcBH3h3usZfVRHDDHadZA9DeaXEVivhYxZy1taXbefAcz9sv9eBib9CbghkP6NKQhi",
  "key32": "25C9tVJ8h1G1tfdPSAANbyK4jDQ9QToGnQ3J2R4jJwdxnnTHzwjF8f5VbmjDKtdsNZCVtApWCLMUAQkczD2j1kKB"
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

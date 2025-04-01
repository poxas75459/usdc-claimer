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
    "ftrpDZRxH3NbboJWwdTM95wzBVr4FX8sqUzeD6WpzmeqMgWYvyqHUCvB1XwB8tCb9KLyVqBgxPBxSsCe1uZ9rPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vc4uiYPuNiKRty1XMTFsACwnxoZLXNT7CQPbpnbzzuirbvCGfKkV5BMb8CUDK9jo5HeUPpoWaY7cL2KuXkKpL2m",
  "key1": "5uXdWiMVEyHYWdtZRRim7J1VbmVs8Vko7ciiQPE7y6woL3PHv2qGZdoqHmrXdqg8cY6E757nTfqj1G8c9BRxtRt5",
  "key2": "4iwxBXzkVazNP2bX5QkAsNhwBtEHZJGea83yzrboD7k6kRx8e3ynJp4fxtbPR55na6UDKXvRDgaqw5VU85EhGEgb",
  "key3": "4SUmnLWN6gw9wR48UkX4iEx5RT6RAZcLR4bt365xiYrmbGCuLefS8XejCN16MC7GPCubxNC2tysE7jL9m96KMoEA",
  "key4": "4yasohHuwaSg3sLho4wi2gWHTcSByzk5xgzQCyW5agL1LV8FKVnpCpNXEiBnHqcHiFpE6Pzyz4ZSky9Kkz4x9hx5",
  "key5": "3Tp9brBnmrERFjabVximUgm6bm5fKsXizDYRrdWqJUBDdbsmuZHN9HF3YQkTV5hBmbESKw9RU6x2VRGx9prnQ5wP",
  "key6": "3LbQX9eUzcnxB5qDX3VzZcqzhV2ZgzCp2S7h8bCLFJJDyRV8Sqt42vsMiYdxoigqXFqs6qRzr4fnjnamLbEQ1YGR",
  "key7": "4ai4YAKSSSwmnJF1P8tsyshGAAwCJgDSK2ftU1sUxh3BgQKd7vD1iA9NTmSkF5bRsEo95ep4xHeCUCfTsgGsfGgs",
  "key8": "2nG56boQv8pHffXbPQDRZ4aW57AgQTKcHLYqfewBLSb1tGDhVmEbG72TcpDwyhitq6GvrXNFjzj2Xrf3k6oyRFcF",
  "key9": "3UgPTaKYKZ19k6qRCVVtWkLi25xmQN8AtkAXyebfVLjMec7HPVhwqMXviCVbV8rSfyeboMeZ3kFDCWZhdFd7CBHL",
  "key10": "4NofzyBmpBjbWAUKg5WEUPhugMznhaq2xima5sS97skhNQdkb7XHu2M1W4BHw62GgQrQGQJHAsXdDhKjQGku6vwD",
  "key11": "vfTD5FPsdL36PEbxNyYiLcvcx33s1mC7B2prkAWBvJpGqv4AcREhxe76xgtXSmV8NjL3c9QhP9pCkTajssUtUFZ",
  "key12": "2KAsVFsc5j1x9UScM5nxDW5T8xFQq5A3xErzDye7pZEooQXww8aBPqQvWHrFGksNy1exsTVEgDyXnjX28i93emmo",
  "key13": "4nsbnCyk7MmPsmPAMhKFPPGfB4zdCBsRyf5SNxXQaVjGBAKoH5PkXGTvaYgdFWrbwyggwc5tLHoDiQkaWd74PLzc",
  "key14": "2X9XVB6xoGGAKoZB25m7LXfbWQhXdC8gAFmESK4k4ekMvQ6oMaBLz1rSokYx1PXRZ52627Lx9pVvadLUUuL7JkTs",
  "key15": "gRfCk8j7XzKUxDpnMPLgTseYp63Nbm6hixMwgcCcfoXUUn4AM2TrN3C6bc7TWr2U4Dhrofjv3Rk297BPdSoAoha",
  "key16": "65KcVdBcttMpBZe9GovBo8oFwk2vK5tTyg5eTAPiDfvGaMkZrLFHk8buihxqFysTeyjQWdwp42gps8gXM6MQ9G8f",
  "key17": "xmVLsgw3RRpAV2Dh42NfWQhw2ji7kevuzxBTeVppDE3HH7gthCKVzedAcDEZsNjeV5ryXof41z9tggvK7fKZ714",
  "key18": "Hvh4pZZq2waJv7kT7doBSDEzskWvBNk2PECyXSzbkomWf6WGcLombqS7zhwEDqG6vgkZit5Gb7zbkzEeYPuNZvG",
  "key19": "3DTjDwm2DJNpxV8FNCwYRwNpvKDrY5QSFz8DPs3e4UPoPxmx8kLMKid6KfcZa489AteNfPEncBU8F6HSYkKtyGU3",
  "key20": "RvF63eqi4io1AE2BsTzgtyeBZwCnvUHFycqSUbG2wd6uRfftFhG34q2BJqQBduvRCSqCiy9f66rHH7BrvtYwnoU",
  "key21": "4s9riwRRckimNJznSd8Z1EbKcF4gG67M6y9AfkFyZddUDujion7M7d6Z3ShnjyisyHGvCdQcyhsXZnSs8QaXMZci",
  "key22": "32soQLLmXAvbo63nvz7H4sg9eGtVUznT4vfZuWaDpb1ZCa3a1Y7JLbqo7QAKpNEHb7aNhCNDM2o7RddfJfXmSfQb",
  "key23": "3HPQcGghkFRCpkf7Ykq9LZEuTvGX1nRTBLTpsFFSPLQ3WEtHB2j1DNYZ3tbAvjLFcM2hGh9TnyP4giT9ZkfDksPe",
  "key24": "u3W3ueEL78TkVP3ZztU4ziQCninGsfonZzv3ChuujnC4AE54f49XTVmvV69reNJL49nBqpHyocbVv4uhKEz1L9y",
  "key25": "YTC3GufUX3PUGvrFjrcwuRdCYfvNjFabWUr6Hu1aPoQUhKfa4CK3y3Qe1NEBMDCgRdLJAAVRnjAjSfQEVu6xwtW"
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

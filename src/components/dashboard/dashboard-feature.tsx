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
    "5VxEJG9cwvrdrPoNnDFpHZaT4BGREo4fyn9feSGWDaNH3nV1XBjs3yWFSo2QFKitueWdvDCzDNHsTQdLR3RFYuEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PqGucvPP8bv7z2gGSEnSrJeA8xKXa3YvRu3eZNdZJuor69mDTi4aAVyiH5DfPs5D2oWLNe7DjJcfhV6Ka8omGLV",
  "key1": "3TpCVMuxmo2b5LsAbxYnFbrp1uHoMSn9t4X6UG4vnFYqwFR8C9ESucrMDoMWSXxhsPdNuVYJUNLBUf61HcX36DKs",
  "key2": "2ZBUynGLcn6QNZjjTkASNbJh2nUhaEVh5pyKmUhgqWq7ohaPSt2dubFi7GV27nQ9a4o853s4hQnHUF5uBb9oNuVw",
  "key3": "5vSK9CdcAbhqUthK7aEagLGZvCvqs1eqsgCLwUcKMseWRkzbMo993McP1NGWrtL5dyBhf5pqhUWQeBLTGttib3o8",
  "key4": "Y9e7efFLd1tdrbTsVvx3yLQoAS7v8VKNSRpkQpj3MwkeXSWrARYCmoDBx66u1qKwx9xFfr5QDLJUFs89P2dSaxJ",
  "key5": "wsPpTtU3TXarhvxEbbD6VyKcf8B4BukYSSedKj84z33S75KvEjhrRSYncpKyohVuaZFH5eRGJZ3bpqsYaQUzj2s",
  "key6": "4q4gVJjzTHmvUKZEdZz8uuRmDKWWG1jyBTykW5SVm8LcHBL6YrgNbYMoJGmdT36uxWkYbHosSt3xgC9YtxmquVWn",
  "key7": "4WdwZEZRn26DiHh3Pz8s4wVfYPSuGXCQiNy1yD87EeAmtvhogffL73AD5tHEX3rWE36tv7QsYY9kdCf2a3sKXzDN",
  "key8": "5RpkCNzLLXfnCwczYN85yUs4fzs9hRXa4kxZ9qmhY8QkCZmtSGBQseVoWh1MutHiMTBWse9ox89425dFhEEfisCz",
  "key9": "2ADBHEYX2G1cBKx8BdpjayFAgNKu5nZmarNndMUEPJbiCP8WqexxoAkN3qyq8ARi6KAJY9WjVxipYw31JcjeX4Tv",
  "key10": "4ehhyNjTGPocHwDbudafByp8aFSMWTrAWsNbiA2Qvc4npUukbo7Cii1tTsA5d1pC39p7nWz6QMNh9Vxs76YKB6Nu",
  "key11": "2zbR9nCJjNyBVS1JCDU24hbkA1h9aFibyXigCTLDJat3MzNHJiaa3g6JyVhdXHnFAC1DyVe3xa4sHHNmLRkm81E1",
  "key12": "4mCBM33dSc8UdWPu8iGxFzq9a3FeHcpHH2FnJGBvtaNoA1rxAkY6TfLc7mRFbyi2FWJmgvMnf6XBcPcomtisYrST",
  "key13": "2tjMwS1a7wBKBCWLFjEL2SfSSkyQ7JzEUGvhJNtJoPKUZBUuwVA88w2REm2Y8wMdU2dcGfs6G2kbFGFWwQGefjxS",
  "key14": "umS5aPpPnCnQ1DjSDPzgQr2JgQDWFBkPnPAGsB8MvpW5mZnCbmogpGVpNUdFBa1ZEuT3vkmB5HHoQBMMrpyBjnh",
  "key15": "26x27Bhoqkx6oP8YmU79MMybjuJ4HS5CG8bKwJkfyQLNZjCQw3HZfMkuCSmcencx9rqXXhBrxCQw1Ef1R2M4SBJm",
  "key16": "4RrQxcubrbtjRop75PPY6JXgoezm67LmERTsCM3BULpAtDbY6me6vjKTAbZTpdHMaudUvMZrRBtAWBUijNm18EBu",
  "key17": "5KdMgtHAqS5BAd53HUwqDRQ6a4r35B74SFwQCp7318S5K6T1uMeiDGqDszpgufdwoZDcbaKQQi9FiXfsa5emKsJe",
  "key18": "3RJsPxHmhwX4c3uGffYkN2XrCKJFH9RhvtKifv9A4pQjDmgLyaqzdgJonV9XZEhqEtkH388XE1ej8HEr4TmyZUdf",
  "key19": "2wu9RhHdjEvNBRjuunWrWHkUqsuo7cuzgDZ88B6UHmKhAE8SH7hN5tX2jUpyUwvqkhKvWH8x3E4Qk51f9dArDd7X",
  "key20": "2no81DUZiHR2nHHbcwkNBRKXKzdUXYbF9dSyr39CrKLvCwKoJ8mC8gUGDNyzDFnz9yrMf8FSjVWypAcrfc3ZpwpK",
  "key21": "29izWVitjvHVwmiDoBkVPcHHH4aiE3QR1tRghe2USgzqi6mxtqg8DtS4Ye96Y9renWLhji2VbrpTPd8xwQva2PoE",
  "key22": "3JqizvmLHCWMyxRP4oqm24DxxdZRHiesyz2zKod9oqERj9wBtTB7uSBWY4mvhWbmzYpaa61YFGLtfWzY6w3Ebqa",
  "key23": "4fNynk7Dtz6tK1ojMY7MPpkg7PhDYsUyUVK1Pf3StSLzb2vcVsbjyQ6v3fgmGo3WxMoBseC64YUqNq2MHKbK3uLP",
  "key24": "3WotKYum4p7k5J1QATe2s3PprZ2DxLCARiRfzYrTSgSgLmLY1gsJq8E54cQ4VFSrBt93MNTmEX76Ev5uBpSWrzKb",
  "key25": "NwjbJp7xbHsHeB7oGtJ9wiRtX7EyUwtM5om4AHb9UtzvFnuatT54RrMAM7j1Q9mSm3FRz1eMVg1dmGKRPjsXdaA",
  "key26": "ZwMMkU2fPf8JZUpfiRBoTtLdkHCV3g7fEtoxHQ2B2H9KwhioChjNJpbkMrCZFbVnRv45Kywy221ktt6qgCS3EmX",
  "key27": "5jfbi36zfnrW1NW4GmHu1Qgg3MmgAKoTwzeawfLC1AfD1Ucm4BKnsr5QhKuCPpXMsD3Q7ErBsNjUstrQodN5Qh3Z",
  "key28": "458Jkoa5XG3FdtFNe2mR6ByzvgU8xqK55zKVESLk238AYhcKjn8J56cCdZZuhwmffWZtomJb3oE618ZA3XwiYrEo",
  "key29": "3R1zCQRybw8mSxgWM2YJ8pG1zRfs992Z6EPvwoKFQxv2NffNkPbPJBRx7LNTTmjJT8Dcbu9kB8KLehEhxQgojTrf",
  "key30": "5PUxqmrpTBEVuiADJB2b6MtNTKNbhujwWebhszutLmcQxUp3MyNTWQf2HN5BHi3f4JXmUD2PiARbDx9ZH6Fu9Xm6",
  "key31": "2oYofTDYVGvBD5g7B4t1BkPvNTAuQN9xJh2MCHi5mdk8VdfALdeD2W42EwtaCATw1pAdX6njEtcC3ZrBF2CWeFAX"
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

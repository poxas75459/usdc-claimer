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
    "2n4yr4yCkN8usCv2o5yZjVAGDWaekiRUQQGdyKjX6SuoVM9QfVJngcYJyAzhTwowNY8hUXnAQ3VaJdGyUHjUR8ZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKYtwFTESG6i7RHmfZgFmtBGN9WGiK7D6P4ySdHiCM9nDTWL8vEbditzqBLR1qa99xUZPcrZTo7NN1QjuAwr8qc",
  "key1": "5MP6HHSHtfbacx1nLKhwoH7EstULk3JLhAWg7u7y9ZZjbehGMxNZiJ1mowKCzVNmX7Dt1o5hyyre5NhpPbam2dZw",
  "key2": "4rFL4MjdWGxo5J2E8QXCv8iF3mPsourJkAudGESYmFLej1exdE6i2wEJBGCeYNcxqYvYG4h2eBmz85qVypTtJwKp",
  "key3": "5yXX9BfkbfTBCcs6cQaCuoasxVoeb4VQBbguXd332ZJhoHmWd4QRsCBv8UWgZZ8zwiyHrTBPZXfMZaPpFZXPXjtB",
  "key4": "2Admn1d9AgxbSBqUL4XptEML5SqKm6mjkEEiZnSBYX7t4Wcj28iJBhwYYuvKsGoZBmRaoVpLoidKxrM1VFaHQmE",
  "key5": "4oh7ewPFDNNBji62Lw5T9cozGCe21yyEHvU3oDyHLREtEtB6YS2Cr3tamaZ6MiRwjYpWWnMAtnNqpoFf3a1udujM",
  "key6": "3fvaVsg2C3WA1WSP9smRwew3cPBCQcjMHDx7UoG7k5F6TwhjNJ1d5diKCq1MNaTgDUNJpcCp3A1SY8qYmuiGveqo",
  "key7": "4gTLs5Cn7g4MorxsvKv3NPeUSXGR2ujczgdQg6PnyGG1WDjEVWw5GvzjFPa7QFdPezcxSNKhJLLVBzGy2gNiMZYL",
  "key8": "2sSChvYt5TqWd9gWFUPE8SrXbZFzu9eGtUKSK8ZuUh3CRk11tP8DKMq4shw7tgFGxkvgQuyiHvx6La9J1grJHKzu",
  "key9": "5RLzs2NDxjZmFEeXp287mNFPvTjExmfFS4F43A8JNeGTHCYSmRmAuqmcLPu6PVkKnfndXrJ9ZDHzyabvp4bRvSVJ",
  "key10": "3LGSbbHBPg3X3YyTQfx9yxU6sLjFpuaz2C1EMquArNbszgvjyc59VDrR26vRK7uoVp9djYHmNhBTxnBddt2dbRBX",
  "key11": "JeVEcUArtnDaZxf7dQYUAbTK3LUiRUUFaxncgj1RBRFjc1yteiFxEcmckfuhdeEDiZyscPKrLkQupqMC4SozMnK",
  "key12": "2Yd4gsJJppUTNRCr22sVjWasiG8EyqsHXXusieEVixnu4dcozFjKZcVwZyBDj1BgQEVJiUsdkbhyV4n1bxtrE3Hp",
  "key13": "42DXw5St2KgGvB1DpfG4RQAqxbHxw9d8SCRbwdfYzF4oC4azGnqbGxmHaYTH2bLwbJZdHGCTuh3m6DdPicofG27b",
  "key14": "4HwAQr96WKHuy1yf42d7Xho7HHouDgbxqftnYBD6GqwGoSk9GWQzY19cFTxEoWRwhYhDnL8syLTJFcpz3hU6u3n7",
  "key15": "4Mv9xAJcwHCz2ghq2Aui2Ly5w9aa8Gmco1QyJToxaZ4ozDcye3fg4HrkcnTBK1qu9LhhZn19CKRVDrE9Rsfc7Zzf",
  "key16": "5uqDtRw6SseaUAJbUw1j5j3h9zVcyZyoLg8gSNeufxneittTK1WFHfHL9qpmDwvTPx8ZEMgLo57Ny9Dg2BgVkxm9",
  "key17": "27sLE4A8F74CaENesFJX4dRbCEHcDhJqpZcsQnw4sC2fGiT8QKk44vXKBqEyaCkc6DMxMGNC5CeiACwkMM4fxmy4",
  "key18": "7PqK1eSVx8gcDawNT3hY9PqcQZd7uciXKuZRDHDtVbksbEBwjT6GEtJC2j2CJpxDa98VaiKg3WDjbfnuMi38ZLM",
  "key19": "4isVSL2XEsGkBuSw6cgdE1XZPTrw2y7wW6GTkbo4SAfoE1zWGhY369KzBQYgzD71vfn3vCKjnaG3ewJGv4kKMaGW",
  "key20": "vxjHorTrF325cTGfpZoqo1bF4PtpvGvnud351tsMQRpwMcNTyAZEzN6RBWoQm5tXazSjYku59i43ux8bfKsTQS7",
  "key21": "5zkmekC7z4iEBFv4ptAtXeXTJPTueZ2b1S41SLeyXhkdqURTDsLjkMY5wY5wYC1iGXzkqvMWQ7tB24reBSJyGVaZ",
  "key22": "5kPXyUAjqbJRmzdWeE1VjMtMr59qGTSnxFWa9UXqfi1R4jWDc2kNN1DvVxbpJa7NMzryuB8Y4tN5y24fA7JPnBwk",
  "key23": "2KmHsrJS8Y6H8QTpiDTasNJer4xBUynAQ8j2Pkbe2KgfYMWGV9P9LKi6LoMBt5rzuua3F4SRb37FUoKEUX8zgkjP",
  "key24": "yx5LBs8oAaWLMwTcNUBDiuQjVjema6j3q3GU6Cq3sz1bfXB26Soa76wRyfp9xw2K4aURRx8st9HWzSxYt5ejvMk",
  "key25": "2D6X6NjwbmCTGgvXixJ6yEaTHJmrwxnuSePWnP5BsWNHWcPtg8o1TcBgpLfduvyYhUxDpMa6duQxysH1M6VpKpfa",
  "key26": "5pRQ8oznPvi7MNzPZi8GN9LwpLVN6YzUpdNERzqbCHU6XJH9ZjmE5fSf17uHzc59L2dh5fzRY82deM7MnUQ58iYJ",
  "key27": "cN3XK8exXeYd7TAx5KscCZf6juuWG7SVRFrpepsnsHyvbgDwX5KBhRP4mbj5AUQxJEptf74RHGQzysb1EP8iWVg",
  "key28": "wdPgFuF8Y49mT4bENSUW9U32AFbUudrva8chDc5bmjUiMtx2XbySg6bx3PFWFH4YjBXhKffoPJ5rp8KzKZpcvpv",
  "key29": "2eGGJQcbo8ob6mDp4ruLQeCN8C8Vcv5DSARGYjXNHjjCDr9wiW71kqPTsHeHBdZEzAFe9AzvKiaq5HasQMnFA4cL",
  "key30": "3tTLXiBi5Nn2WemPN33D6UoT6gN85czqiCKAiDB1fqDSA6oqGAsANU4r6CZYxx4fw8zVpoKAFCKCXJG7Jnq4KcRa"
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

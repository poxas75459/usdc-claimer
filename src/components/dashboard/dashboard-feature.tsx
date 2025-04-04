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
    "41rDknM1W1c16Ee4R4pQGMoh6vHtsTmPBRUekRhBgcgcc4bVyZZhhuRQQYxSc5Ut7mJi16ofcELLX8ai5Wk4nVXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FpZmKPoVuE1pP8kmtZEhJNJZqhteFHj2tC7ckqgdwEdAfzzAsmAqM8wryFtR1y9SFRMHtpQXVQ75jHoKhsdpkAr",
  "key1": "PvAQFPN651MF2Tv3VTTcUWJEuav7pYwaxcDehaz3H6VDUzyzGZ4PW9rkGsPoknMjVV4cUKmsUk1s34SLTMsJUN2",
  "key2": "ziKA3TEcLM8LFjWcc5ftyVBMZ7A9WuVnZfQY9pJ11eUShiMMLuyQqEuXsCE6PZ31S3jgo35EUaVrH4qrqktDjFn",
  "key3": "5ZVdhu77SgSuN3cFWGuLsHj3pVRM5onbpjeMBTbjDxGh41NX6ZPEryhKhWQjwViAhTvhUqrjbonZABeBnkVBpVvB",
  "key4": "qsYXKjeVaCgcMErNK1jLDfQuQZYCX7TKr74Ybs1joHVs8KBYu1J3rurR7oCsBPg2aEaEVjXhhJuca1aA698hQAm",
  "key5": "3NHcvjTxDfaqk52XganGDUhw65phYQnwjjj8vQp1Dig9fLrp611od1Po2uubgt7DLzVV17gbYZbRj7UfQSFCn2UC",
  "key6": "3ZF74PTECePEBibXdyCzrBChiCFomYGbb1akxyfody9dCuTuoce3VGjL6AfiNLbu5FpZx2iBKqzV6WnKzXwE3AA7",
  "key7": "3Hhtm2BCphVAMNz5fe6eP4ouHkmjSECS8gejdyDtsPzXDjLzmkSbgMEyye5TreYyfu5ArpLJqEowmcEvDdBUCKyq",
  "key8": "tjv7uVEMjtnCEcdvYCdM41ijXeqKzryAhRFtqXEEs6u1GgZsFiyHgGvcYo1YC9Cc22JeVogo1EkTWSNUcmF557j",
  "key9": "kkN8TtTZCyrJzzUka1hAd4XDEqwFNqBpYbooW6ED8B2uZC1SSbB91UWgyMHu135eUicDmCMBkSmjqkCpjW2q87s",
  "key10": "3iXQPoRXNRvv9RMCvyPBEomYM8zoXC27WYKBoJPKpWvc6GrHZy4oKEzt1UqSmF2FGr3hoi1cmSsZXSwvWPPCxCoF",
  "key11": "5KWZgTmNuoNfDH8VCxz26UMyaUgk4hkdpQJNDvEHYcGz4jVPmAE6xEbwg5uJEiRmc9FLSUoY7MHZEcLdbDXmm1qK",
  "key12": "4xLCzUjpNkTF83cLkfaTfVnt2mu835E9BWPEu5D9SsCvkvwuRPYwqBcjALRspL8nwYukKF3Fz5ihQqRPRWm2uq7W",
  "key13": "pLjayrsCcckTzxfPYP8eyqnfM1MXZx1oDus5B92brh7mXaCW1BQrwXgzdpdF1yeLqrZjiwUrwiHzqzXVU2BD8TT",
  "key14": "4iE5yo9Emg6JAq21Ur8vvAHsAew7qUw2J3EzsVto67UZ4PxaZpvQz1rRCQCw885bCtErQVBMh5wRwJgTHrRuW4UC",
  "key15": "37Kc5eZoavxuRoTTvNa6QNELWQWdcYRWTTXDBwi9XCjs2N75StRGWUT1eCvCMCtJf1WArgZd8M6fYRUcV8xv8BLh",
  "key16": "4GLvdoUmvci6gwwEsmSreJiAsovvAqxeExtbwRLtJAmfR5VaXREKzEDLfjB8KneSvUidBWtf1HTTwsAfBmZHVx5E",
  "key17": "tWREHPMqnf5WDDov3z3EymBSz7phG7RmoXB1ywEhsad1bduDLQFnxfUdLpTixrEEkytLqMHCVgUMuRvp7oiyFtq",
  "key18": "2BPocAnVyM6h22UL4Ke2L5WbCoFpmBM3NUMcgxLk2WCAsBmmCgFuGT8r9ky8c85R6GuYGHtyjTG469oXMHLMeezB",
  "key19": "EDp2eXghKt6DH4GarpLjSw9JY38G8AQffCmk1Bq8YRiuZuW6MhegZLNNrKLrp1qfLFernM3Lb6NkFKxKjVk56WR",
  "key20": "4ofGpZNNbGMwffCPBhA4Vee3KViQJzpPHaU9TTWPzo6P7kha9vUWwcE28xn3iEgqBZJcXVTT1AYDNJfZeyz6iqLB",
  "key21": "3R8J6qVwFL9sF51hrgCok2mzpWWrLQsnnXTNuQqx9LBZsnnWFQm5c7CUSgisTrbSBcNrt8KFrxPbp3FzXWNT5DCj",
  "key22": "5LTq7p8LK7Nqyu983ACwjpb28R6ffAp1pmr2SCHU752kK9wRGov3UWKv8YJU6dpg9GNCW7QsW9eECPrwnqms2d5L",
  "key23": "4qjNFTdo9imKs1CabEodLRfDxiuGNrGcKyuHNhBKbYDgWDZcA3FDq9WouLWmyRHero6StdUw1EzCWBer1vwP1dXy",
  "key24": "3EqdR8F4yrGpkuhcRhpNwGbhAX1z75QXrjzrndcG381iueYPB3GkLwFWKRJcdiRY8BgzH2QZLRxNrXLYefdsEqmG",
  "key25": "EbCUf5ZVN1aUojYw6x1tDUy84zbuSDuKhViwggA46CFK26ED6yyEcQsgd1c2NRsxsej9E6A9FQTmnPdH5nuGi86",
  "key26": "3TJUSSXbq9YWp9QmKR721vRTJ8sRpbbCf8iackMeaZpWTzPsrZrKfz1wLLXtiN2nvdPToiyfZRKUNkrF2r4TgktJ",
  "key27": "3sZxyRCWspxF9PqQ8EFydv4w9fquu3LfXQbFTFw8QcEgnes659dsM7XCbfKRPktDp6sSpDxjV23gzdY5Fm7iQ1ch",
  "key28": "2MNGnApzLCgXS18K5fpRu2s3oGudWe7a9iC1izfzesoUiNdErMPdQ7fNdqcwzAwXLB2WLx99xuPXTv2bXSoPPcW2",
  "key29": "5YZna1xyTJ2Q9yPmJX3XpxfVtX5Bd1Eq4Co1CAhocr17xDfXoj9iHGwmD3dMK8cYQQx2RvyptG2jB73FJ1qLYXTw",
  "key30": "4nLx95o6kt8Z86h2W4SU1nLA5JrSiWZnjUEBbi5VQ3FxPYCGRAN7WKv9geqEzrmCqMrjjNud5V7bs7HjSA85VHmt",
  "key31": "LcyEG51Ki8RVwHutLYCH6DdW1PRv5axjxyb534P9VoAaXArGHruc58pPoUyiNn2TC5i1AYi4PRNRA71LY6FxNhC",
  "key32": "o5X1CXRaJTL3msKWSEQMfb5RFQqoURpaBBupz16sTM29RfLPW1RDmvGrgHEftVq5JpFibssZgyYPWNJaehvWBJ3",
  "key33": "2DLBFm6DDENiEc2F33NwkVyj55fvBBxpLiDjyUBCoR4ErxmikKDW9CgE1bub7v8dBqB1JRAPe42F8sAzQnRNXxtE",
  "key34": "cvnqB4EoLzmkhhm6pxrFzyCGKRY1qw226LBraNCuBbMidTcdMbjkcChroUw7oJ92pV6Ng1koQSXqKEHoZ1HaJuK",
  "key35": "4HLTqPtfGKANMpTF5Ezxd2yGxzi5m82Wv8WBLgyarNq4CQfUbajg4n5yqrYi642Z1tHyoodgTADiXdQpJhdkUnjR",
  "key36": "2nyxUZGdQmibBajMgVqbG1a4mwpf4ajaWKDixsHfoj5EtG2wRLypZq9zqCmWDs9VpVeBXj5jkm5t62pR9hMVyfdS",
  "key37": "3yuHkTtzcvGCr4N2Nau23e5dWmShLkEiVW9SwQSohpS1CBGM7oEDt96Mh5chzhPjbX8pG6SQQ4cfnPtzXMCsFs2h",
  "key38": "b9awZnGr8n7e5HLjRdtNVx8AEJqVyYVM1CTfZGpi6LVxXFt7CDaHDsHF789z5woAEcDFA6Aw3Mqtv8SNzbk4jGL",
  "key39": "5HTQAapzkU9p8ZHFoQQf8t3tKAW1bQ5xHFWHtjPY7ghu8AzL53CsCKDR7xTk3BPd4ftabWdkcm3XencMuJZjwtmL"
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

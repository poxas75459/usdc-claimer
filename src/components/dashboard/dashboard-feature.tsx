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
    "4nmsLqjVAJD1uEFSYGpwCvdhDppsourq4p3BscMAHF4w61bNUbMCdnuNEapu8aeVnhLSKLA7s5TwHoGLeavSr4bN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2DRyytJ3XJtMVU49RpmufpKZRBVVrsm3BjKdd1vXJKEDTPCzidCdT4upaXxfvqMhaJGJvsUgKXpaTJzoD58hWQ",
  "key1": "3cLhCf7dBaZ3tgKd1yUcJ554sTMfQdSb1BcJZsmsweoGm3HnRE9UrKTZVEXw9yNzAC5hooUD8qTds4uL4u8Kz7QS",
  "key2": "4xvwbaMhwHsKTB91qB3Jizgs9K93UUCY4GBYCKMCHHFzPt9Su2KsVpJ4NH5ibUPktG4Ysdrkb2MZJQioSsYSYqzr",
  "key3": "4vxge9vVaZrv6aVy7RoHi7pbFxiQ8bJU4YJvVrCWnyUQrYango3AZ6s7ayiKkvQpNTQYMRVeurfiymVNUbguoXjL",
  "key4": "3tZ2vKzfPQR9LPTWgsGTypG4LMnSZ58SXR3PvFL6PNMQG1H6ggsG7pnvD8yRkEjzFBo9iNK7HYpo2hBgXXkktbVD",
  "key5": "4MviVzVE5PJ2PfHDojcf8LuAEYnGD7goASxE9LXak2nLwzDoVSgajL4SGVhRgQKf8tk2SgytgRph6PMkmL1zsAny",
  "key6": "53YyW9UqXJw2awoekcrfoNe4j69ZPgaT9kskfgkettMdikJg9DRdwxzUisMPoPwEWsUMEH6pSk5RnXhhwbkfBRjr",
  "key7": "5GZZD9kcHYRF21Kn6LN2MDxBTaWPbHDE2RjSn18PtVANhA9dErnBsVjp3vyjbYNfbrrrGcNY566nku3oH4PsjPai",
  "key8": "4dU1nfSJbajdwjwEn5rR4QkicDqePPUMyFza7YcXR82t3LdnqDC9r5WMUQNczjgNxsSj1Kodzig9d1tTYxg1E8u9",
  "key9": "2zrMdRRRpa9NF8mRyTZGSuruHAa6yZEZkzPqWZzJjwNR53ksS3RJGZr6rJggidMTBq4ePBsQ1AMV5KmGgYwpCVBh",
  "key10": "AF3jDFYP4sRmfaPKEUj5BTFFz2zwLdb5BB7RtuZoTxyfHPAYYGuGh31ef8HZsjaHMXx3i1CfT2LZ1qeNwChANa3",
  "key11": "ZgB9aLUshYMBoME923exW5EjrFyzNMxR5gxsSYkTLUciQy1Aux2L7TxEYWXjToeEho9XBfp8YCnvQ58FZg7G95c",
  "key12": "4SBZYrxXbt9rTbdVta5tGpmuEdKDC6y1FBusoLv9b62iccVUwpJGnGZrNx9RudwXqcTfZiqbEcDaLFz12cwTpf4p",
  "key13": "5LoNY7CAJmZsHntVyFsURY6TsgepJmj6Cz2HMUjTKNCaAU8Mff94Cjq9ZSa2cfXvBWTabbShD8sbMyYgXWCbppyi",
  "key14": "8Cjovj4aRprVX8sPyoAk7wZhw77KeGAM2LuX9ursM12vsgBjHonhnqeZfqS9KMFH6hMCudyRMoKTUD66zZcxSSt",
  "key15": "57EYxKv3LRA4r4tEUWfGBX6ZiLEDGmsGRX1EzFCWvaLr2n715Dhs8iesVbyzUjSpXp2er5AbY784E4S4UumHVYiu",
  "key16": "5LErz3QtVuFrNgtGvX3YfagWkMyLBMW8UivBkFE8k742KkcJiSnJ4Gv3Xo2PHz14qwmcV6a43f5XRHTGovyrgnwj",
  "key17": "5yaV67CVHTdiWZ9yg8V6RL6MQpcs3MKtj3VPdq7CAQfbEK6LF3Riip6A87bWfd1gpBdUk8AW37Lo4PwmtB1yuzPe",
  "key18": "2y9X4pCQCTUx6L5XNLM5yojEDxvYngnNhg6356aG7uXGdVECLMCRPnYMehFhoWC7jFMdmDocwxtzxxoyyiS4f1xr",
  "key19": "qbftYTXMbGjdDu64VaAzy3uiTxeJN17cWzJAg6rbM2XqsD6A1STPVUmw7cKzGozUHCHjcazLUACTJKzUUrKZQD6",
  "key20": "37i1XhHFsa7c8y82hMqymE3EXcK7WBQR5EJkJRfbbgmhbuk18YtcvuB3kPtgJ3bKMUwUSFnmsp8bVPBFpadzQmVd",
  "key21": "5QB2nFEFvVqynzC6PNDJxoSBbpEZ6M2wpUcP118qhQ6A7TZpgrWs9rwY98a6EoXstzLb6GSiMNRFve9YbKPyjYEu",
  "key22": "59tSMWg46a2AsD2vmQau3FRKXCvTSBvtXydN6t6bpUTC4GqaKL7p7w7gSpdC9cg33fc4CKTMaJwps1PCz7bBYyQw",
  "key23": "2DLk6yG6fTmgkpr1cswTFwcG2iP4RgLVCaGuTsXMLd7nznXCx7BNbsSRR49qtDG7mYhy3wbr1GEEJe1NKdzVN6Ue",
  "key24": "32b5YFuqdZZJvgKdiM4gctDtTi1bzC5edBRBm6LUHd27gwZaPPhVy2PdERAMsf1TMJnTY2QCKzXJKvrQATTUrBrj",
  "key25": "26Y8BhAzxEysT43HWYdXJo5mmcVPLDcKLqKCsfsf4ydttFvRzNJzoAwsJ8rna1PpeWStSzfq1CroBTwxo9v5Pg4p",
  "key26": "5ZAFBr5ipSdhL3d7WTAPh3hrVf2czPz4zE5CzYENmHhtD8975kEtRWjjpUwPzF986w9Wv9pLxoSNVCysuPHGn2cD",
  "key27": "5J6Qy8sdpMRFaqPdHTvbPFMnpqgzRXUmt9caqsc9ySAzLoQ9qddDYsgAa8nJC5qF5kJHoR3vaBQbkZhSsWkBBh5k",
  "key28": "4VtvHtQox3RUKmNMUxwFdMTWt1z9RNftsyXmFv8zXpMAur5M55XhhCLSPfWJVksdGMvBuEAQvBn8TaqZ94xizL41",
  "key29": "4Ug73Jv3NtRfoE6swgWJNt8umfWTQVjv9WL4iJwdjaF1FVuzFZQiSLWmDczYvsmfqgnCw3CpSKhbwgTGTG2asZiA",
  "key30": "2wuK5rCfvCE2UXUqQrQeTW9p7wT5mpFfq9TZrNyAhBWW3ooRkVpd5ktN538Sj4sTAkwzCNWm3DQokaV3A8s4GQjW",
  "key31": "2xERYTEwhw2xFSKo9WFF9k3WzrmStnHDAQC3WsdrU3MLY5BJSBjSGYDeKGehRD8SXvNmughPoDe4ECig97UrDUXB",
  "key32": "9LxeXEy4Q8agbu3A2xXK3nVGzdQAiSJHiJAEqfT3HeFdhtzY5rB1byZwzesUmEQZkiKnhWyDzexZFzpWr5jhAgo",
  "key33": "2huHYthXwR1NJTS3XZhAs52JbJgRybtQeBFgVVDHystf4js8K8t9bACwVvXX3arPGsBKpKGRTC1XD7dtHNhFFjed",
  "key34": "323XHNff4CfnR55eEnr6co36drtahgTx2r875PmR4wKvhHizCreadfzNJBth3HiwBZPgi2NMuUbtkerZBmiX4SYw",
  "key35": "5MjDwHfCiC8x7JqpriEsa5x8B2sjKDT3HLXiiXHaFjk8jwSWLTkzT3DuH7Hr2nmpwmdm9zXk5yqsP6XdXuL4WqiG",
  "key36": "56mhXTyN4hTdwDP1qgyXWLB7sY9S8y84M5wj2mLksSSuKDxoj8MEFBnjVw666XQC3tXosCy86z7EpxdrcuiEpv9n",
  "key37": "2Aa8z7uB7Y72CwpDKaqRvx1zj4r7GzqFh6SnKd7M8uNVkvL4PT4DctfghZsGFZZKLP8xwhNNCUasUoHgd9vTYuqv",
  "key38": "5LXiTPc17PwFCEMhtGFYxCTdkjQPNQK5NKEf4RTjVzoeXRhWbMy7mLTLwiKPrTbbLu9Ru2fgttwi23Bcm7bd4sf3"
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

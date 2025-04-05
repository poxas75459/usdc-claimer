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
    "3ipgZCFpWfzeQjwu63yMET1Ya37AFJv27Yj3KapTtfmWDjdxUf2C14DBbMDiEurfTvgU3P2BEtyDaSei6xGsaU9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wnDBStsKVP3U4shGA1hDm7SpBQ9iptgcTbEkSQgifpwZwiYcLedHLQRMbQjcJEMtvvHhJa477owzqQ6DrHzfzz3",
  "key1": "2yw2dMsM89huRquccCSosTRqnxBjpXf1rEnekVG7f3YKuRAUx1EDp6aDyVzz3BH6GteQADZn6N4URYaeCmQpytpP",
  "key2": "2WPiBrs28MMo4G2Z51H2PE3pJBZtxCAXGrRfuiQPBhwbZmFsdvDPm1qBCam3mJKgJzqL3jPUmwfqLPqcrFpMRbp4",
  "key3": "323CHeHSbNNqSvQaB1KxUWyrJ5QCS5MoDYZz3CNEtwdWyQW1hFZyqbmjaor11ZB6sJVVsGfvzVBYtkmvDu7NErmn",
  "key4": "2iBFxGfR7s55s8GbURXqsQS4Se5F6mm48znfWqnqqz19Mk44LtKbt4wQF1wAm5dbjEHuQos5UpK45oGPq9Q7yuSp",
  "key5": "3QjoddrysXd9AQvNxv59RYEQQFhPchBdv7oTBVVnvEuT66uootgiRJDkCKwDhJBfKmeJtifFR737L1M111aFxo2E",
  "key6": "2EUSRVQRhJ4fqLdifNCTDFBRZoxUQ3RHPeFMkQpn9R1YG8CzdjCLmQ3XHpbZCESsghx72AQzd2XtunXzmwVMmGpk",
  "key7": "Rgpfg54nijKZ1dB52K9ZF31AXcNyDEjzYuHA1sfAPDiGFo2XtTrT5HvP7D1jBYURf67Bfm31boPSsM3u5y4rRZr",
  "key8": "5CEcM5UY16VJyz971GpJQXVZD44PD755NX5t2xDC2jKSS2R6uF7tGnodychqhtJtHLqAWphzrE5g4ioR1iVxTLny",
  "key9": "4KBhseveeJabN43cgvzpZHhzQ4godWaptA9dcuk2iErPnrkhppWFZHbEYuXomhmgudJR9s7fEwFPTPxEQUatEh8p",
  "key10": "3DFz4M79qtx1kyWhvbhKBt94wWgAx7UXtBdvtPLwpLDxxUHRzytb5mxpm57odMVmp3FptnhhAhi8ttExSPjbgaA3",
  "key11": "2Fc7EbkQscYa7ZVCpK77wVfsngo2eMNKTgsQ2VYNbQFhDyBAjCPcVM5FgfsqFcmhd6wccxp5PmYkNrUGYmitfndo",
  "key12": "2LvS6xGxcQgHLe5NFdFfkyXuQhnSxAqw8oyMu5w898yz2FUMCsKX2KmP6GwysNxLDeXzWaHjxLifdAGuJufRsxUJ",
  "key13": "3pFVzQJqDHf1NUCvV7BYjNJPBR4y52z58JJDQRoS57cnbm2uNgi3SWWcG7AC6b3CXVUJLrx3pByXLRkRN7689Qm6",
  "key14": "2YDVSKtp3ZbD5fGqTgQ8hZe3hZksHiTv5ykAHBoinmmfdU2ttkZBFGDwh41DDV6YPsaT5SQuwiTY1chZWcDbBDus",
  "key15": "45AZYKRS9GayEn4zXreJSacWDF7rCrErxqr5oHbtNKygEZM5ADQcBfoePCDhXqXZVjhs8xFUZ9ShgkxSNE1ptXWT",
  "key16": "3r34RHVTxgvhgxgnaPL22fGSK1JSDr9SM1t5mcc2aCztC7hYMC2p2UBRcafsmmV45Q2PJbYBdTyMStrcqiaxy7Hh",
  "key17": "5gyqsrm9q58caChBqpu8HEkM7Z7YYCbqTZVbnq2tby5joWjc3FBuUTZVBkCBvnxgY7YnCWA69ggPpBf2KP3S8DLw",
  "key18": "4WXvTDVcPRWidggHf5cqTAckYQuMUvpCDLVPM3aH3c2narjATA1ApuZPb4nAkwvZZX767UjJgYCzKFTmC5RMfCxy",
  "key19": "5HcDuVLdCDbf2QiuqzRoMMagdepunZwtyrABkVbwCMoFqW3ZwvcnxrPZt3Hcbk4PVE7xa6Jq8kA99SUgZ1Akdo13",
  "key20": "4KWEtt6Q6mc6AohZGwzhAgKBXBnZwUuPbPctWeHmwhTX6D7AnS5qxGS3485qA57Wxg8uRzdZ3oQL58GjYzq74nb5",
  "key21": "2TeZhfeaDNNYT8E5uwM2hggpYgLV3KSYQbMH3XrqJora6TymihJdFzTjE4H6HCnM1DzS41kmjqV2bQrB17QdyKF2",
  "key22": "4potPCXX14qvwp6vC4YBo8RdyxKuzbSH3BSEEQ2RYAiBu5HPEfyvLfxgw7RLowSjR8NTFVKN6icMEr5WYuv3fKhG",
  "key23": "CMnma5f5W2GU4oprA3LRBvXxg5du6DfkHm9BNx5GRVfiZ6xhvpFhfvJa6TYQPpKMoKStWzPFQarSRZtzVfjo3vp",
  "key24": "VaTanWtp7CfNeYfw6xfTceC7M2TVLNqUW1ptc9Ubh3U7RkK62isTauVXwWNUzxUNVJDYLvoNotB8Dek28tzn7pg",
  "key25": "1HiP4Z227iqLmossac1Wz3xSKGf55B5PJGdftNacwxvpEn9DvhbSWqjT2gzvvox44nRxEoahoSE7YxewLiJpKCq",
  "key26": "5QbXGDoKy7B5dZxTvrSqZ6JMGrTzTtaEbeoUTv5BmvddG5eHjrdqbZfiaq6xvtAE7FCiPnkLKFUnMbU8TVcGq61f"
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

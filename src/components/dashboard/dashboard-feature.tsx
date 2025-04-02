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
    "4P3G7FiEoS8nkBTavcgvgzJFw8o92hRu3G5r8gcS989nFYHvhT9Kys3UAuRTer4ijuYzTYrMY4tKwSnc7iJ2cMyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BC2QkNQAYFAi6Roy9BmHjCBeAzsCNAv9T6tzFYRxLXfBE4aq37XmQ12kfLMZCxWgqhwzkrfkoxtywffxBwV8jAw",
  "key1": "2Vf4U5kQMdBQsH4wKCp2DRWoovRu2hfS4VjyuaN6GegqTrxrjE3f4RGJDD3KLDncgxk2Q2dFzZFerYYsw59gjFz3",
  "key2": "c72BJ7nst4UmLJaM8zpoo6tMfyUisjrAyJaMUjo29j1JdcNnHVCPDFniKfCBqBskcbP6GnivgpuNP3YeY7WN5X1",
  "key3": "2EpNkbTKbfanuBMsp664ZNPiZmF5tGuysidqngspB1o59WtBhtTJTxzW15f2gTogNcMQaDFvDY4fti9aZU3JHryy",
  "key4": "5phZ24wP8SGj99JtF8nYo973C2k3keYXojA75Y6g5tCQEtpnhebybx5qeouuF1rwqBjVmgoYgQyX9UQquyh4EAYh",
  "key5": "ndFM9i1UxCPDgnxrVPNoU71SeA2yYsytNH42cwbbZnMu1nAXdiuRP2ATBMWi2Vs8Ma2zNnj46zx5Q9hqDvSxqtN",
  "key6": "5CqUyj5eoU6SvJJwQ711CKWFyv673MP9LEyzj1Pu9UnjMFhCccGrxgdVTuNihsdYrXppzrnaEPzmVckqRr3wTnZF",
  "key7": "5Puo1qhbdCBmePi3nDgwiEbmq7vupbPczpdcQWCRZKaCPmgDPk4SwRs4ds9L7qSUVwcxwQcKR6fqYQTdrXtB2oPx",
  "key8": "31mjf3dTYDWhPHk3Lzbo2KzuTX7rAcpBH81xFAsrjVVkyf63x4ajxYQVoiCHRqx5nRkdVi82QyAYCyiXffDDx5g",
  "key9": "4jXZb1nKJ6T6LWbP6pypPzr6a5k1sQT6PU8Q9swvKN1K65TBhwA61xZXDj6iufKE5VB1D5xDn2uofjxGJoVrRcLL",
  "key10": "3RdBRJQx8952ojv96E9iorPrUy1ot3DPbveKNscove6qrjNGE4coGh4QeWfEpPt1DE1qWEvN2tJgoDMiUaLNwzFm",
  "key11": "2oso81jYhahXjnKcu5TUYBoiJ7acrczNKcMC9ToF9BDAixykATLMU4cbooybmTjnCJBc6jqLPPs95SVKCcsGfoBw",
  "key12": "3jwmBV1MZtuHhq2QES5tiB6FFR5vW8Z1JDRcRmg5cSdmhEuzmVZiH9fiDJiM4nfBcpF3gta7pbjrqoWdbGBqS7S8",
  "key13": "4N48MTxbKfqRPzaGmzZQv3DUmBwuDvFU5CVwEXSu9MMGufUK3rvwuhNFuSjFEcg4VSEZNnTrutimQLBXxKWAYcjT",
  "key14": "4bXofPZE7vAAPFJKWmXjguBj7GBc8Zw4vvM172mGeWRo934HAo9f688NjNQvNP9q4ac8GCsEREg3b4e3QNSps2Cb",
  "key15": "5eGs4L1HE7XeVKcYAvgMLqjCDB8BWpxZ2fVphQBzyhVqRgQ4wCCUKy5xQ4pPvWCZegkUEtcLADrtoKrKvpMcmPLk",
  "key16": "nEBMMYFHkk1QnkBsgPksyuMJBpQeMDK8yA11suvLEd4h25YKRu4SjtLa5hCqVSQpqaEyMKEzzN1ZxHreib2WHHx",
  "key17": "56YHnGLammASpejv6cMxBn9XWtB3vsFcHgE4hp5jMKjHpLk3m1mLzkKaffo2hyYaQQarPvYpCfNYkFgVeJD7TGf5",
  "key18": "4tf2TTv4Eyj4aSviikfXVQ9MxYC9TjBEHMW2zQuEVQAXHkn4144J12XuXEMH34vGHCvZaLH4446DL6PRSbj6tJXd",
  "key19": "5ZP8z3u4NBKLteibSW4TZnmbnq5oU4bkS3spgHA9m5erZ1trpxh8FPt3mzmYo6ioHR7JZjLdbNPN9S2F6aLSvcj3",
  "key20": "218xevrxXmpXoqzUQ7oYntgf5DTr1uvkzL2ceDn3EAYNCxYLPR4iXMjAZN8RGHtfqDzVJi36cMDR6NiW49zEzmFa",
  "key21": "3wFUmjwyJ7RwWGiwZ9cfx5rZqF2dqYVi9BSdt6FDWWzo5nWwP9Mrb8Maqs5a98rsXCuVQuFz8ga8JZGgpEjZrMgd",
  "key22": "3D6wqSeC29SmqbRidC5kMDaCVvyGVzTtRnpLteKxdmqVZVGEecAZBiWCaJEu8SsaNM1hNCzfxKWpVJw11mRmGAgS",
  "key23": "32qMjdaUKtN7aNpTcRCi9VZveCfrxwFHsa8UWMhCaGADjjVjtJKuUnJXSjvLSwJwFhUtoAWhg7yrroK2eG3BVQk3",
  "key24": "4LHUJqQ9uRDUdfe4S5GGa5RyrEbnzakMTrrVp3vEHtUPoJMdgknvsdinvQjUJD46p2ghUDRrXE5H79rVc91WUUi8",
  "key25": "4UKpHndK2Vdhe8gD9s412cS2aB3gZxGUbqkN7N9w1TU24qZDdEB3ofJfgvw2icPFwQ2XQtLaQH66Lrn197gzJx6T",
  "key26": "5ZrpTQd9Tc82u7ioP765PSCz5kPnowoXYyMhjp3QJtqbiFYPLuDU5CdK7zsN4FxG3ecrP1F9JHxsU5LLmAoBV9Aw",
  "key27": "4tcXdZxqdfckrs8sLbG9BkJCJNTBEg5mSXm278a2GSBgHazmwSTyLyP2bhDUzfqtcvjzUeSwQnjnvNLpfNk5fHzG",
  "key28": "2whqXEW11JKsS8uMfEG9V5XXEnTm5WvntfuabCWC7QVC5ztrw2Y6xFiAToKxcRh2PviJutLYUhdFwyKtLsRV8V7p",
  "key29": "4YP81eMrUBrqTBCa51CN8EtbojGa2uGj8KgcEdrxUj5H3dNTZeZigkYkU1RGiHq8vVqejKCX1c4F9Yvx3hLJVn6W",
  "key30": "2zPo6VVh3Qd5Ay1AGv2Xx7zMsDYT2oeYjnEn6zSaotKhNQfTKCLTgL4wU6EWBBCVeAoXFpSpSvcGjTf8BfcX72pF",
  "key31": "3996KeqHR4vrtuw5uPxv19YiyYY6oRNi1U9AiP5uaTUepbmNdL4mGnBCDRvzhEDGDtijmGgPxT6Fmr3kBkAMziE9",
  "key32": "2Rd1PfCN6sK7zKJiXhYnCgVAft2oHmAcArNgRmq17q69jNUK2PpeyCSbdGW4tRX9FaJTmWnVMPLyuPveo6hSeXia",
  "key33": "2srEctTLkzSMxFaxmm7cHQxhM2URk8xes7nNJpWnCaxRxzS1qiuyGRM3i5uHKyUC3RV4BSSrXqLhTb8pnzkqEtxY"
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

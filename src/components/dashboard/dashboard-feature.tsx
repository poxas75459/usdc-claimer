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
    "4c1xmFfETczanubXVPN2zpYBEqhs7wtDoMbyun8PtjXFtadUCmY8Y4ak7TCrJMQcmvxMWTd8SNC5ejVHWMScqHHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gj3ZCHCggES9WrhQ3FCamSQGGwgq14RA3rHWVEe3xPJDGwYBwfZkoAnxpgXhjXn1S3rVrmNxZBAuMkt8FbeWxWF",
  "key1": "Q8k3QzRTn3jWpJbSZSSkVJnwqrwgCTAajyoKuD7oZNTWFh77oKkz49jNUPzL21YpY1c7UwAUXKQNk4YnyL56BJb",
  "key2": "35KnqLREJWQtgU4tmWhY9opG7ruVRmNxrx2ndVunBnheFBq4hUsXD1gg4S2SqMu1QFuJ7ywKotSVNyZaRpbASTht",
  "key3": "3c4W56nyDsKatLeLv1wjDDnHoUhZXfoLKsMxNXihyJ86e7YzGAUcCzH9PXhKkkDjz2CroN8Q6HMaAXVkNFSyps3w",
  "key4": "5A6YNZFkj3m4UoVAJZx7MqvuDiFCVcMZwS8DzWvRwCsaNK8PoCMLpRmwKyDQSJrsHSpA1tbExCFj3g3DuXniByP9",
  "key5": "5thbXAS1DztdAdgdbqzwSNKAqXdg2nrGBJQyFpmNMq2vTTZhYLCsHczwV4HE9ftZ1E8CShduPuDqS3mP8Ao5Yq9C",
  "key6": "ajaCoJ5SsmXmE8GS6wy4Z66CuqhFQfbdztjugJgFcyHKcuWaHNZJ45kvr652ggAmQtkwMg7UWjQcfxobN5wW31x",
  "key7": "tRZskAhxzWPG6Wx3syTThFUmy6w5dVLoMNFWMn15mngFikyMBkJ7a6N3CoHVNaa5xEWSEHWQQFFNRsMBJt3myyV",
  "key8": "2fZv2nr2K2wuTkB6a74Ude9jfnVG3vX7UFkJhQyPvqhMs1QjkNoovtRUL6ne9gNbjz7BQ85PW3wUFMT8nmgbiFMU",
  "key9": "2Zn2k4DNq3KC8i8zTatbyvaf1dxr3K6rnTFnGtrUy56WPazJSwvmGfvRMfem39XbH7ZE3GAofsYm9CHsyHBUXeVS",
  "key10": "2EG2xxcR9Em4QCf4eKnEdGEZqH9w4EKc2pDwv2mFQ65W3n6eqPdZREtXSuvLSDRMhkNZeKSrbEkve7zsFxD9B2j",
  "key11": "xCNvyS6Fg3ceVi66z4wrx95k9dDgj83DFSAp6HAntP28wwzMX1F5JDxFVgixZ7m4czPC8kXMdsXaeqFyubWVfVa",
  "key12": "3AzveJZs15o3TFNLuYQnhbHreh3AFPxhTViR6KAwtsU5h1BXwEBkgHoYo7HYvfD2hhZ6XUppw7owfrzN4XEsPEww",
  "key13": "4sq4WW4FtD1EFKJioGVpwHhotXipLAfBxe8eHqGuHtBeRXfEH739151hftpedajaHV1WqmuS7n2hMLmuXAbN4NYy",
  "key14": "44M3tHzC3m9n6bnQ4KFve8PzfXHsaJrCHHgX1n7UfyvTdyv2f3EqKTqNsK6BLV9WNjbLT6jexZp9MPFeRAfrNo57",
  "key15": "UMXtGqEdHW8M2TBijhK8m5Y9xfi7BHx5FCsXdQCPsoqByNsQ4UCJh6xd2xjn8c3uaSvGipC3igrYdq9Q5CqRUAv",
  "key16": "4hLNujtemCUAZt8gePAB5SuxQAMg6CbgeJTDNtWQYhdwhfXL8g7roeGQZ6jTeQKbS3p6ekupsqUhvPDtLQxq1rWK",
  "key17": "3ywN1Ug5cA4FgtNy7X5qEB4AW9egUF7FvMq29pH1fcxCAzR2y4oXxCyBSydtx74jFYHfGRo3sT87qTmWvFzqyMuN",
  "key18": "4AANoDf3QREDVDKNthSmDmQqhNDVXhML9CvdoHh92QssDEd1K6keg4MgJo93nNsVrVK1g4N7f9cSLUAs5DLoEmCN",
  "key19": "3YpBturCM9EPDUQLEhCzEFfikFLym6KVQmq5t9P969V6Bys16HassKNsEQWDe6rG55N67mQrN6Ry7zjCmrEgSwbi",
  "key20": "3pPnXcryqSsVYTs9KuvEetwhTHtyHT5aKCyCcC4JvQTqmJZBib7JzQVM71fu4uf4jwAD4EWtEsSJzvBsFJYmBatk",
  "key21": "3Z8jd8U1Jj6YTfnn61yBmdktUEtQndjogiivy2e6esVzKTi9Zm5CHjUxdDxbRijSTTJppWvi6ApuBMf6zPiLt3nR",
  "key22": "3Y4eEx3pfi4XrXixv2FueDJGXiu3M3aD64kYbZCnYMoGEt1yTxfXTcFwcBAfyDuCmcy4BEAbPy7T6bNTFK5m8zuw",
  "key23": "5PwNKkx2kThfgSH3k1GALggGnQEd4KeTxSxtqdCqnNh9waZgocrxjLRN1342Yv8gXyBLcfQbq4Dw4nB5QXQRL7uQ",
  "key24": "4Qp3jsw6uVmzZKgLhuT9GXjxWbtFWhFJxPL6Y636S3ksbjhWbRdJVV9pen4U1wetCqq9idpaqW2kGFjEh6fStSR6",
  "key25": "3wQAF8JcXgoG9Gb9yu5gbxWLXqsyhr3R3ZawseQwC24U4MWNL5VvEFc2osjE3ajLyjLTxDmMLjXbKKCE1jCqyyD2",
  "key26": "4X3pJySKd6AxHjzU4c7cEYCLCEwtechqdxiV1bobirRSi6bF5ZeeHgFxrYoSxFmQ7rPmdH6ensvrzz525s4BgHLu",
  "key27": "3XQfY4jx2PZV7t2qbUH8JURVQZAAG3qtVhwh5mRXQ6Kuq6pzxuAVsNEQKqjNxTS9NfqV5RJjAuRq7FNndViKXppQ",
  "key28": "5Pa6AC7htzwdhxaPTYU7cKN6YsyddZn5ubH5kzs2zEaWpp64ZfbgiaRE9otHdtm6uQgSWv9ALGzUGJjTvx5KpVC6",
  "key29": "26XWZp7m5cDfvU2Js8T21yQTW7m7RsubrLSyk2ST48vsSAsdiXMHJHMKAPfwuHiejRCSjXZPpMJWkSc226RXT4wR",
  "key30": "5NXGUnLNmuSyQQPCMbuYwnvS9K5QzA1CnYeNbqnAB6wiFXwsckqQU76W89t2JX7Wi4E3PMkdB9Nb3hpeVXxWiyVm",
  "key31": "3bKkSh39b9k9Y245qwe5kVx9FnLEW4b3d5rzeeVFJ8CCGjYdqdLts1ZxMvFUQ5JijC8B8X9gwrGg8tdKva82uHwu",
  "key32": "2eN66smcK8AYfKSSKcEpZq8ueDBvsuozV15mQk2hpajNq9xmnjXcHEKGGwo2AcCu1Ke9uuVuYf39dVMbmqap2at2"
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

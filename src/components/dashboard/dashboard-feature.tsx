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
    "zRu4c81nG8pj2gWoFAFdkeh7t1CZEvaGk1x7Z1waySD1vVzurVgZf2W6fmXURxhkGgnDtob2353bWXbFatfYThv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WuGQPTzYMPWT5wqk4kZ733QEG33uZJ1aybqS9EMhMD6qh5sohuJ84X3ugFxwEXMKqXU6YPZzef5o1fHJ4vK7ico",
  "key1": "4PK2haEnd7drHSfpSN6Eudgx8KAf35cGGzQCe43UpnFYuCaCpuXXLmn3VY4cY2aUhHxUEEq8e1zq7NSPsEjr9qht",
  "key2": "5JGyg6HKi6W5YKUXUz61HeYsdrkThnT6Xz7gg4hhHd2V8TyPyzGExWvE6u8kLZCc5228CyH6hpobmgvUmjcpJkyE",
  "key3": "4LHTpTXzhvqsL5ac7xqVFEqiQNyQnqTc91WyMfRoNzFp8QwtqaJRABh84ZaPkYc3wUxs2AHYsiQG14Uj2FrQc5sC",
  "key4": "58GYmXU5TjRYPh5WDFVQ2y5wbs786rzte2jahLfLR5NnZ6iM22BTJKiedcd7HDt92bwHxC36B6fqgQ7KAtgozTho",
  "key5": "5hEjYfiz3YYmihennvyWkkV3Xtjrqr3aeBTLqZZNsUGCq32xdHSSGKCG5nGUMwPMVqVApKD6xXyzPi7kTraabNjt",
  "key6": "5gm96oxsDQ1G3mAPEGPr4AiMfu6RJgKgvRNGbCDPjuxeg17xY463qGuqVQRf4LE1UWFFRj5Aing9QK3nQXt5jzq4",
  "key7": "5PdyuSiM1HNm9onbx4dYNyn4QqdmJXUgSpMmXmojoTvstdinarHWzuhuiBnBM5MAWVMDcE4JRiPwopBLuWQP6ddk",
  "key8": "2xJunUuHnck5JDm9CT5fVkwpVYRSLDYfkd34Er8i2VRLcDrNcynNuetdP1UtQj4MZFyWZuBv8ZMN669U173hH6jk",
  "key9": "Fpd5EmSGSYE56gCZSgM2indbuLdnXFdxNTw8eyvBXJJpxL8jBkKF71zaxYvGG69DBRxxbmyUjuKw98VRdifnVTJ",
  "key10": "3mnBPdhx68EHLH62ssCi6M7pYpD7NHA8CUPZqNx1ytgR18nAdfS24eFwkZRCZvRvZLWfczcSa9wNgF7aFqdsRGdr",
  "key11": "2SMQjRXDVLKjcp1hNuZNPi4mNb7QCgb3p1GsUQ1zT91LRx7r8ZFBnMNLARWFgJmhXMJjSFTmsx3i7AfBkhDcWCpu",
  "key12": "53Df29geAgqeRvc1nTwuktEfPGovmXHADu6AGj6iDkJwUwWe9D1BDsvJZZg75b4JXYsk7BSXJaDXVhbb8xRmMZAA",
  "key13": "2pHdSiGW1Vj3uMwajhTiGHi9ewWCfhdxDQJiFaFfb4CMwBBoP18sLgUBiskuQ3hjzDxK9GKhe64AnqwFw3CpcVmS",
  "key14": "BijkqpDf5iFdA5obxDnPu8mztZ1dUCxnWtVDCHaMLtYKt9U15XpMjLAArhNMgydi3hA4ZNhAxW6YXMmzZwCujq7",
  "key15": "3BHmwjjSNaJB3CR7an7E1VwUDpcA2s16JbCkDPbQru41YRSBV9iEFBvidyu4nbfzuvu7YPnqAJfQy27vHfgTrTP7",
  "key16": "2Jydq1LNhu2oK1nPNcVYxcWtJXtXxYFam6K9F8PjakQkRmGDsPQ5HroTDgcE8Cj3n3yhvdnLakUdkYfa6PaqwhVh",
  "key17": "422bPmJNFJRHG7eA8PimAe2Re4kBVfdcRwQXYn5nzoa82k2wa4Y7AD2e2KAZpdi2boJ3hTWfY2HBYKu8iATzLorE",
  "key18": "2MPsUuhzmtidusUZQoGWZyjCW1yH9Bc1q8v6CvmW7NwSH8ECC9SAqqi3Lxd5wCdRYsPdZGwUMfWCM6KoeJNBaBQw",
  "key19": "4noiaddMaHtiw1XqgSigyPgPxocP9afrSamgnnMqLozsUBmM7uTdb7HYHHWCkP3cmeXeNWijzoNELmb5KiNiDQzd",
  "key20": "3457PkWpyTU9oUnRbB474jMSfcg6B53p2trhCSRDkPbXCJ8m6C6B41ppKUXGXTs5mHoZ7TdrjNkU9aBzJxxA5FVk",
  "key21": "4XJvsMrktnWpacxHdpMnnSAUDS2dFMy9VbaV5XQWPg6wToDb8siwz1YC7pKG2ZKf3upKfAbLjaf549q4m77xXM8R",
  "key22": "3XK2jJumgkb1cfaECv2sTdGApYoK8Jxwb8QRcm6jBu9ahmvnY818DvsDibxZor6YCrossuyLCxMLRKjJ7wQRBB5N",
  "key23": "5wYX2mXmrjLerVBF7PkcoRYTWUHNJPVd1wEGc3DcawLnN3Tk9jMfMaPBQcQxCF4T5gkTcEMHtWoSg5hZSR7TzRmM",
  "key24": "3VF4nsnFJHKHhPaodqKSHeCHTEUSsxafvRbwb7RZUhEPQB84Guxypkuy5oxarUgqjmVvhdE33svi5HDf55PRPwo6",
  "key25": "cvM5FyE6ppzZfL2uicCVsxkfQLFcJKCWrMzVmmvTdFFqoVuXsBJFmR6v2wdf5wAYhTFTbsZksYRCHwuKuriWcyJ",
  "key26": "3hDsScSkJpWna2KYou7S25CYeufTvnpNGJHbXfu92MbxfmdLDMmADNozKmyK8LgF8KXUZXZ4m6oDv2GmKLjmVnQF",
  "key27": "3VJmCXQyAiqBq2tBQFXmDLZ9egnTWRrQa5SV72poiiKVHLEqf6fXjLuLDo9SMNGRHW5XhphEuMkfyW5ckcPNL2dE",
  "key28": "2yyCRDGMW9vvuMbHrGJP8WuWnMK1HXBAh9YQLaxJVtE8Ew3NJPD269iCPwJkNDVrN3FzUdghT5cHYVdvo5SPViyT",
  "key29": "2Xb8v3XUau8qFtWohzTcsrrTK9QEEbx4MgpiTSY2r5A9zTikfdWbjbrWo33keQNrPif3ArgGvnSmD2V4DJNoyp3w",
  "key30": "3yPRHHHdCP8vFsYiZaKrkKS5U4iAYSikRYsvLJriuRLNpn7YLMAMTx2EDdRrt86YSayw4TFF8dR2PBo6neWA6F6B",
  "key31": "54WizUUKH8HEjqDTcKx7ku5bavitxEervtnSxQW15TDgsWsPLJuAVTXCKbpzPfJqMXFtS3irtSD7UH3WVAtHigZF",
  "key32": "3vBJMkvrKfoia2y2bdwcZta5vnNpiUFdSsjPo43Yttz3QaN2KiRd17MDnB6hrQvXk1vYUPGKyMHAUBLB5tfbtVYV",
  "key33": "42kzi1rSbQ8p2VacJCxodXu5uJhWncmE7rBqpPydXBasbZSvu7t1q1mJX4utspRPSFeYJ5K4S3doKDctGmpkaKE4",
  "key34": "36auBvfSjZBNTUm1nArykmhiRci8QSHaxo31od6Ca51PR3jswJD6ot7qUxBgenQEd3KCnzoBuPjVHab9q9Piz8Hb"
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

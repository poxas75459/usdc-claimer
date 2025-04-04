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
    "2a4F8MX4uEhxxJDKBe232dZrU6cxPUkCWygrtmnk6YBBnMbYh5cdDGxDyUiXB3VZNRtAQYAn7rvqtp9ARnJCd8YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49XVkLHjpbLPjsy3QSDRthfLfaECFEcHEWTyXDmXyTbpub7VjJrEutMciTWHvYrefTi2MnE31dRJM7kyjQZFLjV",
  "key1": "54L7EHPEiGichzu1H2KvQePzMxE8hc8Gn29jk6jhKPbMdzctnuTxbLoVkHtXnUmc7njkYvcref5XCAViFnsQgmWP",
  "key2": "3YX7BqFDii79ij5sWueYaJGCXzQuMdt9utoXCm64qEhTj4vqbbeDFcqiA9iowY7FZKMbhN24gyYLyVjnE9XKgvuY",
  "key3": "4uMC6W6VfreBYDyVBDjmZy97gVRLFYvXzF2UptFsdmjs6c8MQ2ydutMJXYVSBv2V1Tf9xnh3LcKknwxuaBcP3KqH",
  "key4": "5cgf7VtgD9scDxNrBx3qaTZZtnnm8TCrM3MsmFqEdgG89Tc7Y6Uj8zmFqfN58F64NGMZGtXF67JVagN9jJyfFPn3",
  "key5": "5F2jbRucmqE69NMk4GuSfpSBc6UhbRy66gD2QpmKVqT91B7oM6xRFBAjkDw7BKEoKcJemmqfUinE9W5sHojgc1sZ",
  "key6": "5F6gyPd91w8ankjRG4s7paBuBPoEZvwLgPokZ1YhkUAgK2ZBM57uYcLS2eGJ43NkyfLBExjWbQkQg6vEE4sTz4py",
  "key7": "g4gNruafrb1zwCLtf57ZRs5WqVG4nGM3w72ZDooxkjyhecHXSu1hjTomyUFvhGCycgaAQvUN2o91iN7nLvqhGzP",
  "key8": "3eadmVAai94Z1yVd1LHrvWG7iuTXSgjESYpYLZQ4xu8wiDWirAjSPeggBbndFivVLYtYxxpWChZumqSLxw1HSYaj",
  "key9": "3d1sNmyjG8KVrJ2NeEo62bmgD8pc1X5WpR7NrM233RxNFtRLAAmp3nWDMQb3TB71L5M3YF6346QLzv8SdEkGSb29",
  "key10": "ihQg6ekg8z2w4fMCqq3JXUsWY5rRXNPujYwfPxX5p2YRX1ZHa3y8xREzjMCEmiP3M2b3v4HMmnYWAd9F7WD2HQk",
  "key11": "46BTkkSRbxRLAqRnYCs4TreNhMwu1TRuYsNAhRjCLJXXWjHBqmpKJ63PZ3hKo2YbL64rdH6UjGkW4yxRts7MtbpP",
  "key12": "4KphBvgxsCpPvMs7XPzfs9P6hRRSA3JtRY1ueg8nyr5qbyxWvH9EgqLWkvtaZUDDzBVQrVVFE5nfxb558smFinSU",
  "key13": "6DBpbxiq4V4MhNhSxzEFyb8R11VEPK7hAinrdQJ22WTAfayKNxNStrpDgy7MT3NzasvwWE6Uo7jHFmdFsNMJ2bw",
  "key14": "4Jmjfe9gRVvmvyX3iybd6frQDyT37idyoesQT4nAVRFcdhccLA6JQtn6ue2UD1aw43FYAPwpr3211m9YRLESEG2g",
  "key15": "658fpv3CAJQfixSfjnzPfPkSdk89hdLrNcPJQRueZEXMYvdTjKfBDiHFghAvZtJS9iUwU5USWH517HZDe6xWg4kF",
  "key16": "2cHwdu71SegJLX92AW4Ym3beEACezuEMzrzEaztXbDBdReeXrNw9cPLd4fK7TE2NoeWqgbHFgHNNLFvMBUkZz58",
  "key17": "PnaqUXkEQinMK5nz5TknhLUvMsE5HSqukCrMuBK6ANwUutPkLkA4FcZm85Q57ubUDKMviuEk5dLVWJo51UHx1bq",
  "key18": "3aHxtUR5FtpjgCBjUSVXKJYM8YTmvhQ6asDSq2EYggLPvKV5pbx4zqJitwrP4aHuBHgqD6qcXy7JYRSFPStRfiQL",
  "key19": "2bTgupqZpoRtKzmocmm4sYm4U9M8RW1jf25DjA3HgvuxhLkGFYKXbYyyn4JEra1etyAePVGZUzFXvNm4LTHyd4GC",
  "key20": "3XBnxRRoT3jrEtL77HunTwNix3YdQXENccnjwgsNKFmKSjFABcB8mMkkLUTPMyKeYo9EoQpLEZCdW8qcSnNPAsB1",
  "key21": "2VJnH1Tm7xUgFhUBvP2vvcNxGbntRtS998gmmoco32kDY7RMgBE6ecsw2tUX4KoeWpuMgfsdaVtaYxegbf4tWYeW",
  "key22": "spwU5yH9NrLiPdPvKxyd3RnjPTrxixH1hqFGvsMBzciCyD5QSoBVopziT8Bw9rro32fQHVCuQ6HNuuUxVAX2WfV",
  "key23": "2XESv9g6a2bpKT7rhfaQTQCphUc9E5Aftw5T9gVCWBhwuCNUMz8EEpGAcmCtTt7p2HuSh9roTEwG6zJvYBdvp1LP",
  "key24": "5foNVjQJmozgD7UQy4vcNdTK1i2cqao19vKCdfVLYSNXaMHZTZ2fVUCa9okDSnrGMv5ATA9zZLLNn8AnZM7ebWng",
  "key25": "5mxouMb6WhGr8QddmpuHgKyJe3qrCsKh5gvSzqpNovCSqNkPQiCmZ9M7Xd2kKmQZ2Qy9gqpiATzktrDjYymJ1TAV"
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

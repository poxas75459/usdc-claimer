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
    "tUcwj6Pdc2cARSysL2zbsydM2pXoisssTgkAtmoD2fMZ8ak75EsEREoDeSkRjH2bK73XNNZ4JD5LgQUT8MTe7z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8MFTecCTUBxcoBGHohP6g3H6GxAsfX9BZNPv8cdxmEmMiVUdcAZ3HTQwu3epediC3rLQMZ2vXbZPtpwbCHTh8T",
  "key1": "2Y4sjr98sdbF2MdkAzVK8egnPziqiiyLG3DhXy6LEPVAStNEB9P15BtrTFeQpTqZNiD4Eia55pKKMywUJMQS2fKx",
  "key2": "3amZqLk6frr7ima15ARbMq1jFqB5XovQCFDEr4rnaSQfJ57geQ9qToWZYgaAfkuha4CULjJuEHR7AExujAWGKUM2",
  "key3": "UaPieaiqhFxxM1HV2ZGPfTqiR1J7pebyFr6c5YYai8Bh2L1Je2VCimPfSPPG7iivGbRydxZNp9TmwU2ZoD2XVDv",
  "key4": "5CHPiVKSkq8SkjMqrjLvBGcUibGhsaXc5LJt3p6B9J56Nt11zvqWy2bdW4qL6jTdKhmvVkbiS2F2uFZ3iocqMiSc",
  "key5": "5yT3P9zj8DTdTDPg3ajnJcYieZ5qxL877SvpEfoTr9TCq1gAEWEeiWpFLq43NBeC3ZQKGqUXvTvgVDX1q53mkVf2",
  "key6": "5sKuRZky7MNiatmSbXpGLcSa5GjkTLgg3qsJszk1CUcVEEaopAS3XhkTrqPCRXpf9BgMskPvgZ2246F8hB6NmQdc",
  "key7": "23KDi1RBeQQLgJA4VsJxRziprCcYqX2tztT7bJZBrmfeVaM26WfvkKRaSX7UUySW85eBmwNnWHRv9Eaik2ENBerT",
  "key8": "5AB5P8Rg4VAhLARHjkj1DSAshBS18CYxgAWDtShGgiqs2BTJuoeHgXSqJbfcQT5uUQhsWs5Dn76KwUaEvRcT83C3",
  "key9": "57v9Z23CeLH1dm3rbr7jmLdLVdZe6fYC7o8mpnqG4YafK85ygePNdEuedG98dkFgXH2x8gpeVKEPEsLib4QMgywk",
  "key10": "KUTRnmJ4nKFzSxVAWo3UPcq8dty4EQ5Bqk22pD9ktSfTPz8E7kR5tHrcCAyJ53QkMhAGqMbR62MbnQoLn87foqJ",
  "key11": "3GQouemxcR78b6cUC2bbKMemPhDz6KPwq9iwW5L7oMetPjY1kAocp7W87pkeJbnzx2qDZ3XozyLC5vTK1vbs1vn",
  "key12": "3fB6jy4J14XCVDbRxKiVAuJwH7b8rLf5vcriAT92kACqYgwb5XDBwqnosjdkp9reqAqAk8tzXp1bYykg3NFyLMVi",
  "key13": "4oxxTNYMxDKtD1cqq1vQKYQHWGBD93396cApjLJkmNVrEjUAKXVormLTmw5Ho6AtYT1egtUTkoDw4RzmLyJWDcsB",
  "key14": "3Tua9diNGLpVA8K1NAgeW87U5mcVg5jdXwCoboewBHBzHzeAbzoV8FCpBpgPR1uwVfQPw7ufGrWcxnUNPmN5CRTe",
  "key15": "3ccJoSCLw48zz7WMnehJGb3AVFgWJNVYbF3UtS4j2nwxZTtYL5b2T6LyaoZSwK6NHbP41umA4JPYKg16HPPULBWj",
  "key16": "2wGHJjU7hyAALuq1U2VxpiK1csfYCMd5zSRgcPGqnwrszf7G4A9Lci7LMghox9G5f5Ep5joZmV7Amh7Nv1XhfGUY",
  "key17": "2Muh9uY236Bw3LKzkcL6ErEVuRA4pHqzMNQLfNeQVWWfNeidZSNDmSTSHNZe8Dfj4LVq85N1sS6vMKPBFZHBUiXD",
  "key18": "pnGDk2LwWNTn9VxhekbRmT8nKdryc49WVNeBu559KXcatjvVfS6UbagPuRmYoWk6KcbtS5qwHNWTLW6eF6nAawn",
  "key19": "uPk7aQghvL673YL5J6emu3RGshVFfHx12mnTjS2aSkJ68yDPJwzYuJkcgQZhs3f8if6bvrUUVbgTFvAFoi7DR31",
  "key20": "3wfW1qG8o3yBTCbx4gLjLR9SHxyLgMHGcRVYuWqbAtyqHNgvosb8B1XXzGMVeJU73uRGrSWpE4XYYSg8TLD3w7q3",
  "key21": "3mmwADcW5ZrSHUPV499oYVMdMBAwXmNQK3xEEcVty5rE55yukZtULGc6ekwGRJ7ZzLfRLAxqsxg8rUTv34VmHugM",
  "key22": "3eRFHKEYDBjDpZ3uNRHbULV9ynz3qt9o4dkGpvLag9ad8fY2Q4t4wXDQN8kj6fG2phsUyaUKbwdrsnNefvVfs5PQ",
  "key23": "319ZyrsnfaHyYmoGheoMyb9adtKG7gJpYfqbi33bSQdSvEC7esMvmjxoQWDFtoZ3WPuNzbn4QVSUzN1VxfAR7qjD",
  "key24": "Qtder3f9Xu8QQ9gtTZ44jVpKvHSv5roy374ZGhduDzB3gAjjosnHtUuj712wUmrCFZqQhGMWC53bnM6951rz7kv"
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

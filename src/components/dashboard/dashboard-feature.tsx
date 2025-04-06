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
    "22HSq5V2w8tbJZCBSQzqc88KubqHMKsj3ax5YLTvuamubzeWbagWxYcP3y3a72qcZ4JckMHR9BRTEoUuD3cxFghr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UiKQTDXTjqcHUqG93iGzboT2Dn6UdQREC7sH78vAuYey3RQNffRRMJ51TKTDq1tBnBrr8FP5tb4gPs2sAMtr9mJ",
  "key1": "4WrojMAQhva6AGKTD2RaU88piaqqHtRHCo4roWEsa1RMB3ucBSukkisG27UAvbwbqVZDBPHFby9BVHBg1kfdZ6Lu",
  "key2": "GDoBcxyCu7uVJZ4qPHr83WykoR1qtgYWek7KwiQLg8RuY26HRdo5vPGAvipjCwtKXMPA27d4sZnGufN2E2ou3Kt",
  "key3": "2XPDXmXruJYcv7m8Unrokkcfr6MS2q2LvVjpozknuRgeDqjuyDWpevxgJTvUX5da41nFMeEVDHX47k4s9uwLUSLv",
  "key4": "1cFaLvPd54PC6mHahkNGEgB7tgV8fBBLTXfJk2EKq4RibRyMXdiaaRzM5krGk57aBZAUrNpscPWyXFgozDftsjN",
  "key5": "5h629fGyEkzHaRWQCtyFnp76sznAnUb7Agz8FPCGPH2WC9c9eZPfu2h7QzRTKmHwwp6hFHzz58MXQdVDWEs3up1f",
  "key6": "dgYPDy4tLa4twVYLVhNwu5xQmGgvX4MGJ29HQfHvd5wh6CaVTjAUwaxYbNPmxRcJN5Bc7rdeDjCenGHWJRj75Sp",
  "key7": "463wtihgW3WC5SL8WidvYG5kiDtetD5VPg9zjsgUDvn41UcbataYoBxLWNijz4dHSD89x1gjxmCpyfwhcfxo4uoR",
  "key8": "4Ldo6tL5BKs4GDVFcr1wZgQcbDmHygLKseATECzspHxGd8vxmLUhuEmGvmSQUkTA9mTSNiuT7Qy6PU5pwuBoQ8Yd",
  "key9": "2FSH4CdJhJaEW7V8EAf3LPBHxHFLVezUHz8qd8M2XJ1icU4mxZwWC5fJxtDbQD8rNaToaGFcYGp3AC1w4CGoTZ5t",
  "key10": "3ztRv98HFuRpQRSAUyDBDr5QoDEohM714czeo9FGXmxEazJnasuwhD3azqyca7zrFHEmpGqqENkZLitGVEosXBgJ",
  "key11": "3yovGFDCVQw7Umt5XRttDm7c5wFBQW7YVUM5QKuC8UkWhjD2VJskG7CMnw18y1KJryxi5FUR7LFadrA7UEvExvx6",
  "key12": "3uvNNYLgKp9tzmYFMjgCeu61J5d3HNNYQJa1WcJroNGxBK7DKJA7kQvh8RnkupKy29pWJpNZQfyxKu3Cztd3gW1D",
  "key13": "Ew61h45XpAsZ5x9Phx7nqL3xE4h3D6UMjAxBhHtf8ue6pe2tMoUWs5f7oePqHL9we9pwn5rKhSF4nDcc9eJPQYq",
  "key14": "PLm8A1wDR3xsaUArTySywPSjxjB6yrekQp4nDCFvDE6SQtBcXv6dbkUM5qbt2LW343bM9RrZ9fa9ubdjyrzJ828",
  "key15": "ttUCnCYKVNSe8ZNPqGcmnHhwVGLwbgqDVGdNi8ERzgfA5LQ6So5jkgSXnJkYq7fYpxUzJr8sxK83FV4L6fu8d8r",
  "key16": "zU9586SuNH3c69hU3KCmPkvvZkiP7am7PGUHrS5mx13mAam1StTjMnHtqNv8ghFF2po65ErvPBNVkYumWDJ51hH",
  "key17": "3sRisBYhawaBJ75qhiPsDuenQuc4Uu4cJ5K6qwbK23UdxjhAKQrwSKGQ4PPTry5Jmxffb79Rws88me7YnG3YA7zr",
  "key18": "rYGHsmo8UmTmRKXuisLouneXD2hfRvUGnFfuYueRWoTRY9bKWWP2SK54ZVPQb2G73TdxqL548Xtaoq2YURQkaE6",
  "key19": "aHWgKTyfMQAffC282LQDGkRDPioxeXR9x8u31DVh67MsG9HKHzTMsV13k7ZQQRTsjnLTvVJu9pnHPCgZ8q26DEq",
  "key20": "482pdEQNHgVWvTRxuoG2WGH5ocE8TYH6XwwJfpWZKNQ43SK6J89akbPRpdpddkcSzc15ruQoKS35Ey1ZsjVEyHwT",
  "key21": "hJZzCKakyrYukEAJSic9ufFiPYRw3FPAXZYoJ8xA7h6jcieA867gYg1cCH8Vss8s3ZUXgfEPRVnugHH4hNeX8nW",
  "key22": "4XGN7DFiS7swSkoFkkCZ9dqxzb4u4anyvXL5YG62Xw6hhXKzFXDoZAK1no4ddsX46VhCXJuvnvN88s7tEA6yhNFJ",
  "key23": "2Zykgr3bzbyEL3HtsXqZGpxCPhxy2s9MFjSonYF5A5HJnCTamxWwNgD4w3uebji9XUvuVHS4qXipwTV9AKcMfPHQ",
  "key24": "3ELdBwKD2NuqECae4isgLCYR9aV93pZB4R5URfBeRBpZT1iU4GdZE8zB8wJFyczvDjHjRXzRE6CFEzhepUNGqoDi",
  "key25": "4ocJJTc9rAGbpymwjvzA7c6ZBA9j6UjFX6MY4CMznnGYvfA8A1y3RcZdPd7t8eddheqBTXdMj2riYambisMzWNwy",
  "key26": "52ConKpMnfZaE6Nh6MEfi89KRiVL6WFjbSRUQepTEuDwfRfNNDhXf8H9gZjowbYchmaBdNRsoboXEKwa6pPj7PtU",
  "key27": "GEvN7An5ZG3iMGrgrB7YfPCPgxsDpF1tDBhuhLnDz6fhixrE8RHFSqV2EZHxYreeX8K8XPKxGmPvyXazqp3Nj1d",
  "key28": "5eMKRjs5fThvCYag8JQPQzL27svMDJcqz3u6qkWr7kviQXcxpBr2uU3yF75vPUjFdS9beKpxsPrsFyABoj3vpJvD",
  "key29": "2fEfsvCeGY9Wi3dhu7WN8wBivb3BZTaeWxkP2PMbaHVDm5ra9QjYb134VmofaCtUYibL3AcjCww8dpVDpeNCiwcJ",
  "key30": "3eAQaocuvejAoGA223DjLxCQPrZFxaPo8xpn5u9587BY7n4wGYDBtUsThAHQSG4PtcEdPUwv7gjoue18f6xiDdDn",
  "key31": "267DBRgR7zGQLMtb95iJNgbmFdGeuWc7VnZhKbTfZRmTgEAh81qZzWLi43YKeq64TqJRMpamQhRbj8hra4oeHRmV",
  "key32": "F24mL8ShLFRQZfB6JXpW8zWE65MFW4VX9i3PuqqFEWMDjCsvh3pKcPy43yUn3hAjEnTc1hSiE752vyKWfRF9ewR"
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

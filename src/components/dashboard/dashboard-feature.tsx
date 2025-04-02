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
    "2eW4oEBR9ViqGsWd4ErECo49cDuJxUZzzrRkJNMShqssCE34nFf8itk2Z57cP4vz1BE9UWAHkMez1ewR5vrcjGnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v4crsrFyBAJ8mfhfRXtZ83wfN47K8U6UQ4kapZGEiULw8iBuDboanvwkwMcp2eoDLFXGWLVnp74G2oc8Lakm49b",
  "key1": "2Lkbfk8LAvZTuSqRff58YiETpQcLZriyY7bXn9KGRjChiY5hDxwpyEhDmMDTi8eYwoR3nhu2sAfQt7WBAxBzz7Hh",
  "key2": "5nw68NBcF6zJxP572ByDQdqDtizbRsdrvTCupckRmNpnrHv4pEejjV99fYmMmA8S5Y6fzi6nmiYe9gzwYTQLH5n9",
  "key3": "593NAoz4bFbX2gXZtK6qKhSWaJcx7eUQ2sgK8hezDWk7a2tqV5mhHy1unGPJ9kiGEu7FASzTP96AdxYrpeZnGJpN",
  "key4": "35fvpXAQ5t48HtZhi5XXQieXSFhG7g8RqPAnJ6qKybbLZ6jSvcJitAeqsJowV4Sf5jfVggCDWrpYoM3jxrgwN3aK",
  "key5": "2fXPiKAuet11g1mCdGywDjHjchTEFEtFqCYK5kCEvz9w1QVCdWyMmSB4ADZCeGhGKf7DuP8AuULVuFpjgke5ooem",
  "key6": "e9Bw9vQAqkccHuuQukfitB41sQDkLN24Eae4gdAu5DaeRwnEwkSC8QeTrUkxcJeGQ4gbQh89JSxSEq7YpCPndSM",
  "key7": "65KErPZUS7uiXYGiuzqBkDMGgUdU6TZTtfLuENmkLx5bpKMnnxyAHo1fFazZ1d3tgy4hsmEGEuQA2Af2w7zSjVms",
  "key8": "BzQvX3M9RzB31n3PBSFXHRMCzfCVyyMGrKAnAm8BNhFPBmvHkdQP3uVnwmtiXa51qx6M7Muik7Q6DD4XaQPuPgt",
  "key9": "2w4TF64L6nagYRozxRJMcL1R9sqbhN3givzsfvuzdkxoAzM5GgdoRq8AamsqkBnWth7X4oDEacGptJXtACY7wScu",
  "key10": "5FksYRdPfjv5jjhyBf33Fdgr1czHhgRbX4JMY8Ng5daS52Rb5QPBKjpTYYH2mG5PWCHsf2AQm7ZD5rrnCZ8jr7nW",
  "key11": "YtZC3Tp7P5BYrMEjUn7jznjUfJySt6MRB1CMB8Q6crKb8vYKc5kg9RtqpqLNDbtWiz2NMU3y2CAGd1wDGEdhfrc",
  "key12": "KV17wqdJ6XLEGwh2V2Aae9nZBLoFJBp9P9h94MG6G9t62obHsTSLd79pxNMfxY8ZwiVGnAxaNXqzYh66WGeBF3c",
  "key13": "5zi6F3k2VNmUKpHBHRXkibGPbs2cWeUzkhRjKbgxzt74ZT54QYpcLXyrqHd9FoWD4er851rvDMALCJeDbPYq4LpM",
  "key14": "5EbMzzAKpqutP96PD5ULwcS67BkG1Dz6AJrwQXknT1NkoRKSjwVUnAzxm3Sq1VTunmSwZtgKtyh2xcGw3bXmp16g",
  "key15": "wrZ7w3HSX1jESE3AKLRLBsFQgrcZKrgtadMYyCy3GQBbmsQkBm1LCBeF4GTo6qq5XjtxfhedgALkDFjWBiqoGt4",
  "key16": "2wv13P3k9Y4i13pdiYAabvMikA5QFfqRpNqLXGa7tNsw5vRaP5vV2vH5podDy5HKs6kmSKJvpQf7s6vb3YUBFPjq",
  "key17": "547p8tqikW1w8jioy2Rca3ckgH1rnyhsixPhNxMya1By2hdSh7HRKSQgJoPP856F5XmbCZgcEo7edzLMR7AfBUVP",
  "key18": "5D5mfCXpdUtjmbSswuVfFVLxe6hCUYZx7ePZxAj7w5mxFabW2djA2o3WotJSHBCdcawHeorgP4ZdjhHqxN1j4WGZ",
  "key19": "YCajjAcashouEzjS7D8z7cEYKCUUSMmjE5iYi8KQNqksQ6o6w6B14GxPghR3SSFHTQgJJfJcjRd6jnZgAiMMF8m",
  "key20": "25rj67CA6QC1iPeS3SYHsEFLX9EDNWgRH5unHjLDyAWgz8Dg1bTx81zfM7Ff7ZCGL7rQtohycRGcMKm318BxKP8s",
  "key21": "4RdExpXMp17G8wRNEtuv9cT2RH7hufQa5hVNxjQhsSEj17KTAbNAVwgxNt7gkwhoZAQNbq7ywTR2QoaJpHbew89F",
  "key22": "YKH7DggZJzcCc2eT53ZdYUgeFBnLPxkvt9RuZB818oe15P8dvnk31V96pZhYicmHJQNndaQGh7ryuJGbkZkLXJj",
  "key23": "LkEo6U484Dkv5wk6qmxsiCncKcdqZZRxNqZ3Z1GPnEGrmdaWqfy8SQsK8DeitYkH7WgGHdhUqQ1rE2wWRN2eCqN",
  "key24": "66sAzKA7wKTX5ePCRw8nMiwqxr4YVqA18mQBR9x22FPNBkTWkTjTSvqwz1C6vPxJQeWpASvsreNZM5SzMe5Qh9Lp",
  "key25": "ukuyQEogWEMFM6NHfqxTBp5KzBrGFvngqykacqfxuokAbFyJnV5nkRFUBdn6rYaMLTDNY9skKocp6tEcMmjaagw",
  "key26": "4q6U1SZZGsWmzwDw8SKRMVmL9oaSoDmhGYiN3uMJU3mjwkcw5czWPcsoFK75mw48sHTVE8kVqLCru9CZGQ8eyvi3",
  "key27": "434bJjvjDyeSvz5UTiXd6d7zBd4T7srxNSX5eAGDBznNTASVMCWQhhDKTnU7DbaXo1djGmQ6vJ4sXWmQYp5RJBEB",
  "key28": "64yDqYDmT8SQJSnCV4eZiEYGtnrwJzQouPDuAMD56gKF37As59zwiYVEXWCLiaD5pCEqsD4gH5dG1AorXYLcTBdc",
  "key29": "5m3vgvBDyHqs8ZA4N4Hzu7vfnvPYBtjBHtwZnMgtYyrmdo6dzWs3zn8Er2v6wV2SdfLKwU91fJAmGbGrKXd1ZJPb",
  "key30": "5dPLYGWM46DH1T65XqHCUfmHETBFvePtc3CjkaHNxk1DtaGyGtfMrCkycEehuPu3GM9gnzPYALEJDdjJeqWtwCE4",
  "key31": "41hNUqoYUxBPRfDCZZNyPLmBQPk3MpWu7ugQimsbXyDPbu75SjZMQ1gJrMqZAgpPM2EPB63GTcX6HpXj2JkymhVs",
  "key32": "3N7bA5XKaD4HFmj3ERUY14xYKms4uVYFAFkv1LYk3ByBtXstK3yVw16R4kokKo9ujGJJoJ1e7kGTjscaFFhtExqM",
  "key33": "3t5wWbFDWPDWZUPFHQRX3rygGEyGGtdHj2KCXBQBUxXg2ryGJLdbykhdSNCsQeHTsG6gaRcN5awygpcGEysz6hF8",
  "key34": "4QEMtncqVXJP2zwbs7C9rjCHpv1NLZZLeY4oPmHeSdZmqaWzb7cNssVKq7j48tafHN1wwSjwRBrHRTBrd7Z7NaZn",
  "key35": "4VfhfocGS3Lh2q23iQ3cohyxSetjyZ2YqREZ5T9QVDzwjuUMLs6QxNqH8wQJvbj7vJtEdNHsm7Dsps6CyTQ43xvG",
  "key36": "sc5YxD143yF9aHAgcKeQ3KEiiBCPJuYkydcXus7xNHE18BYMk2wgKLT12FRfQLPKW8y5GZCzrgVp9wHUuV25qoD",
  "key37": "3rRd6d7fjJQdcv7HprJu5Uzh9AT4fG1W184Txp4XLquJX6WumrnbikLJuRmyw1SVApX8ZLPRLDgS8etGcB9pdFa2",
  "key38": "43oRqVWxDrfBFhLqkJNNRoF9eypkpP3feFG15Tzn46gmX3AdajpGCtABHJyifcd71ZrbeTk9H63Jgr5wjAgRctaR"
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

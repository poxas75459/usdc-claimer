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
    "3q8Rzb2tKzNL1JE5J53m1TsjKRUJFc6h3gYbj67dTaGuNX4AVHoxxk3TbYZFZwT4pbRcrtsMrXDTBNQCTWXzW1tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ptvHuQoTd1PHieWbJcJMCokJ6rcjb3qhinW7VRn1yU6KfiP8ugRreqzzbR4pxCTnfWWZnc2XtGJN6tKaVdSfZHN",
  "key1": "2onq9gMYLMicy9MtfpwhvYLGwqhoJTjjuLNby1YDqqXkXNDRapuq61LW3Lz6Vpcx9Tpdwdq8ZRGWpqc8qLrEvvs7",
  "key2": "zeNYmSBj2h31ChCrtTHweZoxQMpWusoRttoQaQxfTEUxHwfgGTk3M5TCkxSZwt53wiWuru7LtaR1i68pn9rzG8X",
  "key3": "39r7YhsZ1ff6Eqf3N41AAJis5cPay4KfHfZ7LePd1Zr6Vnya3gPiYGHi323qdsFS1yooLpGBUaa6Ukf3UXyUTcuQ",
  "key4": "4RoGiTX7Av47sST1b9geMswLqGEJ5JKVJnGesdHeXdfbkLqTKxERkBTaJtRy9guWdPwRdD4ckSgw9xJVn3bLQ1ck",
  "key5": "2SuHXftR8ibVvZtQUk3HbMnpJzB6siJnTWrVYMMdGu6BDdk9Q8py72JuMYaF1K8e4UjnfqkKXzwBaMpXsavKExTe",
  "key6": "29otMk76kSW3Qo9CBCq89jf8aZ3QyBpqHVtNCzcUfDeWorrneD5MNbAwX1yMnhEz5cpgumUGNW5QpVoAqJJj9x3G",
  "key7": "4vphi1GnsDqPoVVhuY6321hpaRz2zuTnSx6A4u2Vr8Ye7AjnGre2eZkV5zjoK1evpNZ1hbi7nZz2DPdpXze2hdU7",
  "key8": "5k8JdWycEbqNncamKDDiaE9aVyxBuoTtTLeu9ThQqHQLqBg2y16oKFSgcLP52HujkJiL2Qr3APi2MJe2Cio3PzWo",
  "key9": "6PTfyfAz3ooFUvsvEdr31gXkKasGmEnj6s91DHXS1JkWnGcAYp9SHyrneKvtqR8vUayT2n61DWc3fdd3VwQ8s6k",
  "key10": "3wEc6MT9JzaMcjVxLQQCQ6h3YvyHp2NSiXXtfzv4zXFxtdTDPMTGgaCpzu5taiS9f4t2FthsbuWnATE3Vcp3kzWP",
  "key11": "HnSJA57LTr9o2znuKghmcqCKuQwxc89cB6QCjmNPhdajFZp7D2ro1wGXWnh9wsP8sdyeGwG1dVFCZfS4n4X3HHT",
  "key12": "oATxq3aRdUVeSHpTuCH9Ldx56dm8Yc56TDJbG4Ap88UUtBcaXtkEBKG5cQHVqdDeF8GwXWrhQqjBiy1En4JFfQ8",
  "key13": "58Ka9enUgFPgZu1ghiVhNTKqePVQenCZaewtcEHyuhsJu3thFzooS6LRwV9b9MSet6nj9tD5VRmg8pJvmJkQmftV",
  "key14": "3UdoKJ7NKG8bn4ykmirsKEQZEdxePxN41FJNEFL1B6jwnAtNmF8c7mQPZLPtWv9eyw82tHgEJmHnYLNWHgn2v5i6",
  "key15": "4XPFKCPrSEH7fMwdkwXnJwbdonF7MqabrPgmvS9kNpKZkWf3NoQ8Y7MdJNFcFFGwzSkavJwFqWDuPMkEsj868hLJ",
  "key16": "3xssV4Yts7iNQDWJfKMMfZKtFFSkFcCz6bssBfUQbhBfbFgSykACaGbPGvTkX7a9aFgnVZ1GMvv2S696bQAj8Hiu",
  "key17": "2ffbGEv4f49Zsfv1gscHRizjrYX6eg3QeuyuakDf7KNw61MaKG9M75puqAyMYPRgsNapHSSJFGY8cMJVmZG65DRQ",
  "key18": "4EUd7hbsTdWH2AHV86zHMMWXrVRjhezBQ4kCHCVtpRiAvCQsADNPHFbLpyqz7ZnmMUCxhBtdAfdpi8mSX1rRmJvN",
  "key19": "59fUtcHnfYfRbVhqwBjqGfFCunE2qYQKf7DFEWh9j2bThKetwUogkWWaEmtLzmhwRQkGMukwhgupT8j2ZeqrGQA",
  "key20": "3UQsRuC1UaGRx5MANKDuSf6frhQEahsg94UUNtbvLbcSPNafoGoqEP2Jf2HudsXDkWQtDBsRwdsvbVQQbQD1KPrK",
  "key21": "5GEgWNcsJp3ur9QFzTm6P9Xo92oi6oraLePYHoZ6YS2DJ7YEF2a7hchUZ4ugLn9hiWojGsERZGocqUe84q7NUXKK",
  "key22": "DwaWpc9MdUnTBF5WhMfX5S5MtwFeXDkkhZrgaCBPimMKRn9wqgH4Fr9vD6eBFiD5H965RN1FBW6pHju6nYF9Vix",
  "key23": "3eU2Yy5NjBMDGtAqvcyjgmaceFC5NcpDe182LRmHTmT91G3TN4eBWur5kfmGQpYGNgjWqtJ5UAe3WeVQMGuQXNqF",
  "key24": "5X2Un2Xqw3aiGnWwQz48fJ377rJedQCvWeePSqKEqwT7w3pLMX46Djyv4LEYkDiap4jjq7b3KPmdj9xQnq4fbyv8",
  "key25": "CMyjwuFyyC1M13ApNscgNPmwS1g1fMjb5przqvMZrxjDpNCUPNRDKRUZxAF8zkr3BoN9GJ64QkRBvmN9h9fFFeR",
  "key26": "3jYAmucXd2d1kB4Jkx2AQXdBA4QKo7g5FDfEYd2DRJsqeuwbDCCsWf8mFUAmKXR1P4DHkwvVDTDGgvukg3573zSy",
  "key27": "Rzk8nTgYEaNsGbUwGN49YbHLs9wRgrVSZjiezacSXWZcRNiokuPSdcyvxKNGZMWvKNkwDY4Cr53FEeHXPaWT4vz",
  "key28": "3RXWgSRutabb1Jd89qAQveid1noyetBCnt7qPpuhbd3y9GEKftBErVhLdteB3mif7TEw6PDewPq2UM5NmGbN1oZq",
  "key29": "3VgLTCNZ8KnPYJoNE2CHEbc9tUToba9aTnFv6okeNPJuQaV8yHv9Zqq6xs9WKVGPih1mrLpwpBuZLLEML5HwCJCN",
  "key30": "3fiuF8N1kzfW5R5YT7r9yMktEcjCdn2VWDGxqpiotc4SEdQWaQqM1cfUnAfMeEGCDxp3hXKZK9ZSjxHRtYmL37wf"
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

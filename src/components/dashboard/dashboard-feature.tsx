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
    "3t8ieSN1G8R4efZTjhx3P1k4vNqdaYJTQETxoF6oPTQKfPbeoVQTzHyF4CV5jRo6Xc5VNdrjcQ5cyadPa4aW52xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApmTarHirQ2dM7ewVXqiQ86gbfE1upbtSwtEopgEoqJRPLLa1WfDaeFWujHSsgKv47KXhMtqMr5tsj4TH5YKafD",
  "key1": "4WVGkYzj9AYD3cTijUYJvBBwvJbnMjodApiUSkZA5cEuaSR1YUfexSiuimyrp2XSuc1WV5Hh26BfA3DyfLR6hbC5",
  "key2": "5yqmB3ddpjMBnFA2kPjtvBBNDPQ2dnrZVaHrr4quJ3UNP5t4s4QcRtXJMBUFkousD2WCnhFnXP6hCFSGsTHau8iy",
  "key3": "2YhFKCVDAMU4ZAcpgBA8jd7XHL8rmT5GK874F84cKbaGyw1j6ocdKw2grE4jxb78XCofX3UV3wEciPFgM9Du7Jst",
  "key4": "51qJTE88ickbPMSaoRQv3HpvThiVAqd8K8hCiv4uWk8PVp6tr8YUtiieSgMxaVhHV1dSRr4HtgxXesUBhLUDTVbx",
  "key5": "2JNEHD93MiVNNsdkgZC2voZRnYUmVHPqfLaEsLPkGZDy936mPzALSyQRyrSzwGSjxNTtk8r78pcTMmy5iZc5Wegg",
  "key6": "58L9kWj4cpRSjjqcyfMTWiBG5wKUDRfpFX7sZqX8owq5FVLNrxNDpFX1rdQzEEGRygSRbj5Fht8tRmjeFiPAroX6",
  "key7": "2uXJJyMqJG5uFXBpyBn5XtYQHrZeWim7njMM7MTAEQHy2M55iKo3VU3eueE8UsXvcfQNLxpWFXqrVh8EPfY7LV39",
  "key8": "3HgDq28GXesyDz3zqBU2XrgdfQqgYxGMWxRNL4LtqQ8Zgr9xRyNLabSmDv9U7wARqBHeWz7nxKo98sHwEtVHwnXn",
  "key9": "5vAFaaJgH3RZnHHBVu1K4fVw58GcNooDfWCfgRLmdMrK8v8qBWzEDm9sVeZiUT21Max4KWAX9MQNaDgmdeJqkGbB",
  "key10": "3ZZ6K69mcxE7Max5LxVKu7GC431X53SzUqvseSgn7cowmcy1cHF8R9xRww1qS26cFaeCcM86V8EEL27GUCuoyyUC",
  "key11": "EvQwUcmgmi3R65wDJEYZ4kAsMugMzWiGseqpVgzvtmgQGUj7e78nnkGcaimv4dEZdVdEAKMnuQiuRTLeqAg2Ftw",
  "key12": "DKWrYsPwcHaGsdD2p3XHTmmxmewVAJhidAnSmD4Z5byXbhqviXGMzSCLuQwcDNXZaJSfvQskqeVxvEetvzhs3tH",
  "key13": "5bRp9cpdohzTKQGyVp6d2QpPCuQJLTyq8jsmZafTvSHhcHcvfo6Gpvjd95aRbT7hE1vRbwMWAdbHGDo8CmPvpPft",
  "key14": "2ExmXHWWxSqDMmXZa72ANMY4J8ntP79NCmoiFU6a3mviwSKrbgQa7WK8Fd853Xji787WnBmbar2i9rjhgCAoARzD",
  "key15": "5W91ugzNG2bLe1w5456Cnz9RW5YA7d4DfWf6Pu46daTaRZNmSTiw9AEzwDVKXrDxHDEEtLUbYVK8eUDA86icEuLQ",
  "key16": "3dAX8LX9VCxiTL7WtRoFGVc44X2Jh4roSA1cXfsVacyUEv8KUUiG8gxGmDD8S4xEYPzgLTAN9Q43gEyem3uEryDQ",
  "key17": "24pKqEZ6D9jnu2E7tDbQZPLeWJCHVxgQakoPhqvSh4j2146hmbKuW1NAkTuSwvZWx6xvkBFNkbavheMUBw57aJM2",
  "key18": "3rj3wDyBgpBWAN8Zyb1vf7LpPw2RQvo77QJroyGtaBmZ5zhmvjkvghr7CekfQKQoywY58sgKzK6DPb2csMWJtdcM",
  "key19": "2oP6QKvZsDxZYgVQCXLNzDnCxWN5fqsUB4vBitMUb9qe98nVmij71N14LysJwNq3GEsuunSg4rt7jwk4T5L46M3m",
  "key20": "2KUx5DT2E4HKpaxvHjoXYKXPEX9Hg67wKfz7ffd7oi3sM9MULSSP2ewuCU8B5x3DJ3Mcvzw2kK1jvdRz2aQLnLDX",
  "key21": "46g2ema3PQjznxD2TXMeBCvWJ4Y1njZ4haEokF65ZYBGmvCx55pr9vArWSV3sSwhUtqqaC8tHCxVN75s4SLBQH1F",
  "key22": "4fq4QYPHqyAMLLTumBTYPqFk1XNrQHkhoTCymXMrVpvKKFDByqWYhX5DuuDdpAtZzYDSv2eWEyRdNrCSGDPMeepu",
  "key23": "4XKzHcrDm6kExDLw5vn5rBCi9zXsER49FcWneJrRSHCjaQnwoyWRxna5DLFDAkxBbBfPbCjVRaUyvB933YnsCU11",
  "key24": "DcDvURG9JNWyxbPwjjcEAMxxUMxypMA6CSmrt2V8MnsGkMBMczYyWRagJZKzwPHsTD9FUy2e6ihFww1ijcCfwQN",
  "key25": "h8sH7m6Rq2Y8kTJopMLAwJ29NmTdeb1qm8JzN28NjDuU8sKX3bZwSGjY2ELU7XyEWrAJau1bYqTT8pUbn6neRwE",
  "key26": "2zsCgWgjFddLfDEUAEgdNggJxAkgBbVYFXKz59hLhHwMmMXVWGhnba5Dmcs56vydEvDyKwS3wiNkCjtiNNLihGvy",
  "key27": "4gfiH7AKqcqk4xqGdchAsJfBToHyyu3dqRKjbAcSrQyPNpBXdMyV6L6ACdCF3zP6CAvyjYutggHrdWc4SpHiz42J",
  "key28": "5mtYbRGQkYiDZRVTheEw1KfvotyRKCz6uoGApuKWed8CrNcwaT3NbrELWashLTxP9m2bWGJdDKt6PYRy6Z4GUrWQ",
  "key29": "5EKmS27mBawstq1QT8bribdv1WZPCSxLdMiWwBnC4BH3Ty12hC71MiNR9uG66kf3DaHrazGxHsSajyCjA8cUsA2w",
  "key30": "2nind3MvixWBhsDc3Cortz6ySX7QjiR8gibSdQSKXrBqGUErcnQPX7h3qz79rbiqRK62fDSVQt98EHaPcCYFgZQe",
  "key31": "87xzxkLQLSXaimSQAykN4mBRp7mbzUswVhe4T6EvUVJMKptYTu14CFAqBBMehS7rC7U9cn9N7ZNZ1CyTxCiBo3p"
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

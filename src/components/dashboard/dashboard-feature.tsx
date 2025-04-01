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
    "5TQge3M3ofLNdy3uGoyC5xcgCxYp7cWiEcUMApktkwJaGc6bxXdkDpo4JZbGeL8gLFL4An4nfB2trf3AfyPgD1XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbzXqBZkx2FZfh1FBSx8ywrmKRN1L1oroESJiPCogWztPcUv4Yzq5xJCktJwH2HQLEW4vdzbyP861SCR2pkWBEX",
  "key1": "2xcf2W1bhqJnVMdUbsK8HP4aJu3hE2UC1HUBpD2dSTphy8cTZzoDQcC5J4it2jEhCaULFadCv1AjXJMorFa24FCJ",
  "key2": "22rnLHJEdMNVAW9Sb2oMqzmAmfSFaUH8eUwLnbzgPqKVNkaZk3bc7pCY62jNMpoBLXUSR25nyok9tdEUsckdsqK8",
  "key3": "62aRkdRHXyWVLDkKMGzYEsAZ3GbKALka2eTYbk93b7uGrSM3bi9FidJ9TqmU9JxP5SGgT8jCcDCxoeMXPGwHzXmx",
  "key4": "9Bgdo1Qk9Tkp2rtBpwD2mH2NoKysa7mwcJZkEQhor17dkVXwwPZD7dTAnK6FCakMfM9NiYttgX1RtDfTeCBMXf6",
  "key5": "C5q8Va2t7frDywVLp6HMz1Zo8Y9Hwp3e6avi617dZ79HSBEdY7CtbmYmGKu19NRoZ3wsY7cds84YW7H8f7h7DEK",
  "key6": "4Gx75ctibr1UaKjKD32GWYLN8im1yQ6Cw1t8SfUrohp4njSRR1sT6sT3TXpHoEE7Kdj7nb5tqcL3CXE5wtLT6TjX",
  "key7": "2StTYz1CcwmHgXewPMgSaAtKNh9nNG37ZEBiSfy26hJLvmGdnmWKyzZu9o1zfuKGn9YA9BXbpLvZpNKa3ZTkiSg7",
  "key8": "55h2TPHWECVS7J31s88dBqrrGvqzWiZ9XtFvdbeCeQ8jQNtw1TyRgPuKzMEehsBpRcGukufjFWi56MQWFE4cX2Bv",
  "key9": "4n25JmvaKt622YryjCJqDMSwgtAMaNmuPSisHzxNDZV98xAi1MeiiBWe7oSE5HxBzCsYZd8eKG93AU8RNuuYKaJg",
  "key10": "3yGwJBjvwC38NR5a6KgjguHf8XxrhzL1yi6ZpNDAyyocrC3vN4Cvx23Q6jKBvx8uA8uzRvjxMuEs38u78FeadyDJ",
  "key11": "5hGfwyFhcNoNQpJ5yj8VnuoFdEmfmyUxpggBfXPTr9CSMCY3A3wNNXxirPHJxJxYguv3g6WACaTzTvMR4wKTCebE",
  "key12": "2DHhfv5vunJzjVherhpaM4QKLStJ7zZrAo6H2KuEpUVVcqR1XzuJno3fCQqMy2kEdVNvRbXphbMLVMtvYbxNsAFy",
  "key13": "jrycxnk8oqMu2vXoYdnWkddg6Wbw8DSaVkGbvMiZUtCzu5dpDfrqHKoL1vp7MK4u8v8FMBSV7PfFiU2N3eHQDNh",
  "key14": "3Eww2KQWoK47HMkiZPeHdywoHx3dLVxMha2fmxo8f1bvM1emFBop5mWCWtFfcJPvEBVXDdkmuUBbdr8HXkTPvijT",
  "key15": "Z8WdaP2cKbpZ6GcGFhX9Ef7jWqtLErrDH6n72EY8oFkMP3CKS1yRMDAr3xaWnLBT7oCnvZc6ce1FCg4gRhtGaMA",
  "key16": "3C68QoV9wkatjH1KNH8v91qpCnEN6vDLyaqN1iDKVLBBUAzQyRXFYBjQPjUgj2KBYWPDzZ1qfVFXN8MQfHKzbCqp",
  "key17": "DMaV3vggPJT8mkD4tRzccrE6TVH7JT1ZkK8QhwSFYv9D9aAXwJcGLrX6uPaFDsNFDmnwXWxhcRDeCeAnxAThZpA",
  "key18": "5ynK4qmzPfGTJRxeDs2cwnDUGPpdcvHQWG7z9SquUdc3czhbdo3zTaSbSeS7Y46AhuXmwscEKpC7gnmwDvBLxP8K",
  "key19": "5ZwFV9hkJTJsnnZFakgkGJjjU9nkNmmEWACPKrYPoFo7iDNgPjpsrRr81BHB9rGzW7Vt584RQpbJn7Nf9TENKRKS",
  "key20": "8J9mT9MKVHFeEARY2BpYm6znQrrLZFwEDKbM36XLbcwFX8YrHCLsbJkpp3Bo32wEMfsYtVdPg9ySiowX6TjiDjs",
  "key21": "3c8C1QV4f1Uciif5XJS8x43Q4BrF9iqSyHTneH5qzTcSiZQhsVstm8TNkD9GkFa3GLu3qMSUZbQziUfwVnBR6sFZ",
  "key22": "3UZgR6sRqMPTqcwHhpAMCUrHKG4aZ7KTPJMxmb17TEQaJ5jrirKBx7F1cFuLePKzecCXwe4i9ZUp8N4vsA2PwxYq",
  "key23": "28No2WTmkrS4qmsZsVjEGeFSoGZhe7CzQt79cnhJhPLMABktUJY7zUiudXjkkMUd63v7dAQyRJaEbDiPXZiLjfhr",
  "key24": "5o7Z2X7BMm4dkb2C7p6Aoa8mwojmTLC8pwrQGqgzDTWq7ewEpFBXdHdBX7bYfFuMmSFjqE9mhE2qrXRrkE8T4bH4",
  "key25": "4D2nkhrxbMm13m2cTkMSWgNWqAZktJon7kwreu7RhBr2ekTJiXuW4hxBJn8peWcTiZnTgXskJGwJqzcCiKVo1mXX",
  "key26": "3FYsBVVFrPKzYfuQ1zk5ra7udXUrLrGewQWL6UjVykw8eQCdY5H6Afue34wk1PkYf4nhn7gikEaCF5VBobQWPDaU",
  "key27": "3XE5VKPezvpf7tfnojxvTT7W3pK8TTprrKWmY9FPbZAhEskRoQ2zaJj9LLSDju2KSnde7jhHMAKJgqEHNgsic5oY",
  "key28": "4huppQVaux2WtWT4iLbTBGQpza4wZu8dqjXpQkQSvqNJTCBxQY77LW7iv7Yjcwy8Geu2xZM8W48CKHhPCPQdQhpj",
  "key29": "LfjXrGAJFBEWuJW1FdXC2K8NgWV9kVmT3Pm8gFPHBvPrJk7TfgANU8HiuTtpajneM3DJHBCjGijhYnwXDWNut6s",
  "key30": "4E36LvSBYFFTyuNYZdjYddWubjwtvaWyqdvDAXo2fEgs3dwDkMWTKPYPKsHD6jbwKTDRdzeRMZMiN2FbXCWM1pjz",
  "key31": "2gHaptQrWa9R3dtpcuiNRsRekhqonRHmE1q9PVZJFwePj1xbqiTkEngsSUAjAnbHeKJvWtWPJJmMXVekErjJcoD7",
  "key32": "6X3xA5RgweKmXUvFW7Knokm6Z4PGzNZ57d1VRYW3rnc115VU9LkasvhzVygHN3Rc1S5PLAGJLg3FPrJTfJiDZ6q",
  "key33": "2n7RvA5ZjB3uzs6cPkRSWUkXZydqai87hj75T8qRAXLexK9BAhCaEpQUhXGz6KAcCuT9U9sFnWFwrZGtErAPPL6j",
  "key34": "5CD5Mr1SpysbdAeympHFpMhpNgo2JfJVFNjqXUZPYTCiHFNXuzpRwfsBs1HqGtZ8hnRZSJAUYHnv8CrYreEhHNNV",
  "key35": "4b2AVf8XHvsBRLR96d31TU7NVoFzjZPZdboXXEEhCLNRwR9woeD2hyJH4R8WUeehnPriDrpy8vPbCtL4T4L1trnR",
  "key36": "3CugXYXMzdovZeJEoHHhJemTWXYB85vaViDiS4uRj61G94Eu5rcUDs7145fQ3vxtksCBaEs7YBqZpKCsw5sJtXCk",
  "key37": "2yXGPWbXPGtmU3QkKfQk1CFGspBLzcCAKbL5EN4m2ZSQgwJpxhhjSkLeb8JxiaaxsgJxCmJNttM38TgfedkafrSw",
  "key38": "4wZmFYPoardHJGt5KncWxb7Fn2jS7UFBEmJNGc8nP7YPeYSGrVqpe8PYTqpXPhvJ81H1G4w5VEKiWkKXGRoj6iHh",
  "key39": "62oRK2djF5FCTuomFN2SZHickRsyagGErvEtMHBp9JqS6PUfd5cTVe3SiDDy3SEkeKkzzVHWZicLQjNquoETJnqC",
  "key40": "48MUopPyWQsexaQh7eg7WPKWpjnZAKtrerRSpUDcmhx1jBVh1xikZxZBHa9psfAtiMjJCefs8FcVSM4gNtTKoW1t",
  "key41": "4GKARcG9bVDoJaBHtuPT1Yvg5caqqVVfFb7f94V7aam2nX3JUssdSTSn1WSj7DL7N1k7Ty34ajYjRrqVuU4qzmRB",
  "key42": "3HRYzD2F3yhpVtTEWi2cATP1ZWe68fLLjsvamfZundx46qskGGdU6n58ozHotpSmY7jHxfqHEyZ77fcyaWEAVVXE",
  "key43": "5kXjUA5KiC7VCBTUdArt9sH7R1RowXcxiJYV6NFKEMTnv4S5Lunyx7FKDxJZiZphf8mrG9tBmLLNbLJJCgxVL3Dc"
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

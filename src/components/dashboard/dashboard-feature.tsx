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
    "5gfgt5CAqR3XShK2bzAHy3JdDmKWsvo4r7WQAdi4DkiSct1WMxixekJTo1C9dFZkTK3paNkszewC1HA8CSwLDAAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obfpJhYpUbqg7NEoCSc5dfYjJWebAw3MM93CRi1b92E8bav1NaGyUR2dniaJyhA5GUkHuGTjeaSej5q2RF3zH7d",
  "key1": "3JEDoVCMDjKPYrdYDZoDNZCRx7BUjvuba93fPvm9NaCycVHe8FLFCjenmUfEmV9t4WCRkFMoHFyr6AEfZFQyjEGD",
  "key2": "3cSXjoA6BQNq5BpXAxD6KSXz8NLNQXWBrWGhy5a2V3ZdXiFn4ghgy3hugtTVPP6uPDLG22CvMUoQV5bYuQEDXMuX",
  "key3": "2zwgik5BUyGvLYSuTJehPv9bunZJUnMPGt5eJjKWYDXbLZvhqiruRNeUby4PcYAriSJiFs18ybSoHvAcoTajB3Eq",
  "key4": "3ucyB6cGn4Ri4RRwjk5hvspYThggaJ6mVqLPorHRXxqzdmVqXigBjp6jemFZm14BmxWVFbsFQ8v1KZJgyiriiHpA",
  "key5": "62qSHxvNB7cBPE6gY6ZLLnGHxHoNwwBDEKfPvahV3idsGEnz2t13cVmJQrepZk5t6QExmYaLWwi74FjEa9UKtTAH",
  "key6": "32vZTYYKN6ZLfjNdoEpTWQK5YMWJi8x5ZTQghU8X7jY5kzi4zxE1WQLLbVLiEBbuT1DAk3jQAGB7GuWMHCng3DVT",
  "key7": "4KFBcoikJjHnTqfAkWcNS92xmagKjP46eKfpP2q3yWFFPve5FCK6t632ELzf1MqzEP51vgu3v8MAi13sRmTGmFX2",
  "key8": "tQwUUJwFJQ5jM1183VwVTYKcrGLzci7HQRN4134yTqZBTxUYJ5NTdqe8dF8AkSxEhefWtAgfYmUzGY4L3XMWWnL",
  "key9": "2eMk4jAG9iFyDVXTvqSmCsMqfAXweTprX8SGMQ2SGxfHrmT9gB4K5tgcC65b4r5YVwqhb2Ga9R99wkYn1vsJDdct",
  "key10": "41C54PdNKVTynfoNwtqJ1cofixE7R1PWGcRQFLUVMruRJxVyBGPUipfi8tFDkPxhJxDaPJa1m5XBDn4gDseCbPwk",
  "key11": "3SgjFvcrdRhgkisYUMipv8qzAUEQGAz9d5P6ZbWtbo8V6JGrjdz2eviEbbmvjhzsLCzNdWd9S9zXxtGYue5dckK1",
  "key12": "4t8v3Rcvv5qBCRdNS4NdJjXC6Lz6xi74LLf55aRxWjLJHwAY7hZ2NbkRdnthKBcFEc6p1gz9sRfeGuEZyTYSC3W3",
  "key13": "5MzCr4jBxypWh9mLVRFeqbSPJgZjGQwYPrp25imbWMPFNpG2mp8AYEMJrM4sYhgXbtEeEhxgWFqFBxAp68sMYhSH",
  "key14": "275SMyQAgfrULEXVaB7cbQTWhYRjjeLySMT6jfJqMgnunyE1ZXgYXuQEuM5ZwPPS3gajQcGoougRxwqgE3B8AG4L",
  "key15": "TM5txm1XwbXFuoYB21AkMBcUFEqszzfiudNNmXxzjrMYSVkdcwJzAxiuW2cK7rbuUiqZwUy5qfyyb1vqioz3MsJ",
  "key16": "2rGXXf25hZ2s6caLZbhTZDJG2k1ea5PuVrVm9wRRtCxM5HhrrH9dXLgvngLr2z4DKx8JMnGK2rPYaZFjLSGE9J2W",
  "key17": "53BKS5X1WnarJkX2fhPvDG7qd46uCFnJ1h6riRCtkBQrabZxwc8g57z2Vcg2GkTcGQL4muwUwbe2uUDoBoJTkweL",
  "key18": "EssHxFzbjn8fufYp4RjYiTjt1dUd4fYEnCoQ8VWncQutBd57F9ghyx1JDYFbyCyc8DQQLXdJGLBFwQeL6Qqr1qK",
  "key19": "2jiZTvmRuyg6Ja5CFsvSazGJo85E7wxZFCFK15XaYT33bJhVXV6eNdnhHcz3Cm512gJbhnHAHn3mpXHnFPE7QVzj",
  "key20": "5LCUoVb2xhokz8P7bZfGzTbks6cs5gYegsHtSzvj5cpWsXK1pQt2XcpQ7vmPUtwXvbyxY7aSXtKkmKB71fzmjPJy",
  "key21": "FmSsxEFhSrDLcuWR1RgwZjFsZjkGumN3TPEgCc8LG5D5qG4zDbXdvhJbHFeP55FcEtAadVJH2XXfgyotbPuqBkB",
  "key22": "5Wj7DSPxbnr3DfG1U7zsphrEtHaYHfPYSc1QhyqmrjXu47RXetJ2LwpGnriTmMiysB2npAeALoTyriX1ibuJmtUX",
  "key23": "5RTP9kNESjFzxTccBQezbCL1hRj7MKNF1RKqSbghNDt7YGBHbFckRVpdeugRUHVoSDzcjN7MGHqdM1VJLQsZgk2i",
  "key24": "2wujzoCaxwzgJFTdMQzNe6uHtgRn3ZGmzB2Zu9SdAEw17RAYgNyFgJbzBW567XVhD2ca4dCmYE9bG7v8ruhCp9qt",
  "key25": "qzYzK3GZA48KeyeQMm2WEVRqjhKoJuSTf6iFuiuFYyewqgAWGWLT6fzUPWuUKYuRszxKB4hxSAQPy4UES2eXHix",
  "key26": "4Q2YkDWZH2Rhca34kTXdZraNBjYZjofNS7hoB7xufxjbt131T7CZgVr8TTnnfwsh2QZ6C94prPkc9UTvdCv7RrXY",
  "key27": "3c9o3huMXPrzG9pYVWZCWPVbi1xW7iykUa5ergdj3Rg59XhzTA4o8NYkUvuVnXavXUaHEjiKFDGF7p3ZiLzFhb3t",
  "key28": "hyHrfYnRhimaMmhGqekS1gZW1zp11Rabym1h7PVaQrLQA1fXyRKucHvzkzXmg3FD1QvPz1S31QAWp7jShMymjQL"
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

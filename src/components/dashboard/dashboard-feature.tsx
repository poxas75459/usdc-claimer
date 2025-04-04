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
    "2qBZsdQN2o59j8cYcUjz6TVPE5ifP4T7KRU24uaN9yQa8MY1jtaXVQDsBKgPqYFKCUafrj2AZwFEia6U95MaMP6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FN4q4aumz8UNHiAr5kxVM63yvXxpRnkNBsq1Hzrq2UsQYS7666nYRPsBhvkdrQFZNCeymbuk5t9TDsAmsaMy8Fo",
  "key1": "4QKhyqtsSgsqf7GFbmqvnPhRhJpeZV36ofWDZhhRPDmto9c4QjBw4pmNnJtyP1MioCysxiiNHbYeaikUPZgz2Xd7",
  "key2": "3Do9istebKShhY9nyFeKrD8jJ1kTz9A2o2MMTEZmnv1jVmZj7JW6zpbhqj1Je2ymAA92jpMYpHMqu6TYNsYAFAb4",
  "key3": "4sjbNoXQgKLgZTPZrRZxhMH98bUye7t3oAExnVAQJozS2vChGzEbHsvu6KYJP3B1tY6MnDwS5d2RCjWevSP6BrLf",
  "key4": "5CBc3xr3Z6PDYMM19DRkkyCMEEf3zED8W6UCRbLsEdbTjCsA4czLj9sCFx9XRjfNfdz5a8sEPCMWFvJoaZiF3YiH",
  "key5": "srFct1sAdeBxK1VrXcQLfKxap798RJUufRLfHvCLLwjyndKJEfRTUPWf5pJDS8xXCtc86vw2LK3ZL59oz2dSUZE",
  "key6": "EqCs9JMmzLzstio1j78TeVnWtcMV4GayatMvHmq4CSv6KFZXoXp4gqg6DoXQ2DjYza93dzNVDNc4YUd9L6P7cv4",
  "key7": "5DxzQ5Uf5ATCsTB5Mo2URorM3bWopsjoTaUP9PVT1yUP655w2gbtTX1BrJyRa7hPvL7PkHWEyvtXNrU42tdK6oqP",
  "key8": "5TXPf9WVyY4bjApa7pJp7JjoK4xjEJbmef7U5gPSMLocHkJJSbJUBckEPB8NazqDVPqZiDytTjnyJzhUhdHTktPu",
  "key9": "5mHqHUMswRN5PZ9EASaXFGFfXLdYNmP14Q1wu4HBDDQaZ8b8nbjCjnP8P5yvSga5VBR9GXFPyZZPvfTUxVX2Zu9p",
  "key10": "5CvHeVvL9AEPB5woAKuNBP2p4eCUDQNdXMdW1BkyTKs7dw19WWR2PRMoyPtRSgZ71K7reKY2wk8WbUk3jkfWQBty",
  "key11": "fMp3fVq1Jjx8RpXRQLHEUqawFpFVPNU5ey7FpY9k8sqoFLEeR6Qg39YXCbQPCXh3QpHBx4WZCv1FntJgDjBeHb7",
  "key12": "2FyaYXHesf9YFxP4ghBKgJ6nK7BxriUCpcaiVYVUUT6UXpo8ab9KX7cm5ApBhSMbUejKuq7czD2TuRqW4Lc4fqmr",
  "key13": "yt3WP9HnzHT3yqg5hEEGcBhf4BggWJshxzsE6yWCQpLMWmKPFpbpMeBZzUyuT1NszcafhULFdoBTS7hxvhqc7c8",
  "key14": "41wbmFaVGRzxxR2Tzk1zS9EwBg5jcuGLRN22FEqUofeipRm8uJKPyc5AdwxvSzUWVu6TEjR1ET5XbjtCcyxQf2Er",
  "key15": "aK5sTywgTK7vYR5CQwRiVgtqwoCsQcnNBij4VTb7Zg6wmandSYzYA3r5XGeER6nYgVCKWjwGw67eqj1FU2uEZ7V",
  "key16": "2M16xnLj5TjEn3kC1jkstmKLZNazNPSPJw2BBVqsG5Rr1aJG4GTnq6oP46XoFzGVmNn3E8dMeJ9h2b44n7mHcu5a",
  "key17": "38CnKeX7BNg2hnKLffLWnCoXysvA9hRhtvbgNoWWivXWbSbDGvLKCg7imfw5zJPkKuUATtazTLLMcnpnaLThq7CW",
  "key18": "2MQeSEtLpgeEGB2pr4edWR2X9hDsEfTPXMUcQ6ViW7gX9znwidu2JGjgsu95vFEqiFrvWCCF7f5kyt4xKFG3BMLU",
  "key19": "4s56Zuozgt7iS2SAAjY4gHyaSGb8r41xEBRJvTNnBo6jXGMHkf5K5kvW192A9pikbA2AKockjHMewHzgfz6Wm8JB",
  "key20": "RgKcNJ7tiNKMJfuMqWnyuUMWsiGmSanWZ24GJjhvFpG7qEYBjKrC7URQkumwZe9ew4V5ivUjnKLmquEcm79WeJk",
  "key21": "3htVhUiF7UJLM1iLRnocC6kCSM8izAsa97TA1rcPc1Keao267fvrw3c6y6Pm4kDWJZW5fTa8AW6c6WmXEJJW3FgM",
  "key22": "3TiHT52zPBLpa2LQNvBcTX57yUCwLQSBenci854Cxg8qh3zPHqGZPRxkNrcHWBPsWdnuiVud6tzkeFMEPtyyn1hv",
  "key23": "wwdFt8fXBZsU2Rgqaa37hQMv8KUc6ccaN458Ebdh1jMzEToJB9EYFZoTbccX8F4M35d5LiCN3zd9yeDDARdRkU9",
  "key24": "ZeokDwk8pWUPb4DnPibp1o1XbVd4eRaX2gDhR57r1rfh5ZXTsJ2GK8CFcRjEaov8cEPcgt2Nxza3TABtNcwoBwY",
  "key25": "3i7DsPHLemhZT4LEdvQ67MamHfhM98HGQtYSyDC7AEMJYxaebBD6uqYeAyuqXdefQHzeys7NRseCrrygxGXq97yJ",
  "key26": "Hs9uUNy8EAsGKZgnaajgSu1B151KsQXDaBqLEXa8URRpfki8oP9zL2GLj9SiAQCdhwhtNvNuwvZp7ABRXdoSw2F",
  "key27": "jDc4Tdzvvoux6aswTmULbhknk94Eryg9m3B1ZipPScgHzMjuWVPJ133d1yVZRBCCohMHN7KnuiJ67jtXeoCgr9S",
  "key28": "54RErK7xbmb7rF8kdpxKN6h8YfMfLm3cXNCnLSjEh6cyA7Ax6taymk5A59XhjoGW3qGoqyQcdgtVBN9Lqs2RY8hf",
  "key29": "5LxCX1SYHBtphSF8j4mJRkyNXSVDnhvzHejyHqiScnvDTqioHSfpTgX7HnHxqKLoyCmCPYiJ9EiFzGt94BQBD3LX",
  "key30": "4XUwK2rDikhEJUEWCeu77H4Vr64NxNpDgizdiwwB1edi9ET7bLFtw5qqFVjmy37iwjEeVEqHfLtPynarkm2TPDfk",
  "key31": "4NEhZkKTGyzEbaw5eH4JUGuyy9AYxipKc8Q2Fd28ygTZGNbcvbLBW4JsWCFcfAH5nC3UeXZo3Kzd4LxgdTfx36J3",
  "key32": "53cFFpjXkDUABcKLxuwhhab6cPZu7S2uFtDKh2hELDytdBXZ3UfrYwBYawdy4GPxgZbxrrB6L1NZi6Ba2rhqe84h"
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

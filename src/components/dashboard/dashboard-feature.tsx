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
    "673NnuAwtUMDZksLxoMZdogriMLqjEjkmmDtTpDxT9emWUUiJ72CsG5aPPUJBzhCdxZZruAxvZHw6NTtFejnxkF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRq25Mq3kUUYgtdGy7B2BAg5mzk9crH2NrsjmqkyXUChjrYKDK1mFeM98E9FXQMsUSRjaQqisYDJ2XgmmSa1Mmc",
  "key1": "5Ebxh2znSaYkXWExkQ2kZXkCTMMfPfHySTyzTrwM4nhgAcyvVrWuiVeBs7B5cxyJmD7N3j77Gorap1KzmykgNaGs",
  "key2": "58WdFMYXWEcTi9tkZULd9rogHqFyUczb9oSTXxLWxkQzRyWDXhft2DKSrsrSzGrUiQyRvdCweknKuBzdbcx7FBwk",
  "key3": "2wCizXcMEJmbdXf5RqFKCXengPAqsCttpCFJqTPgtKUNqJZuGkWH5FzE3VNzMUgj2mN85XZgJKiag3oGczWDfgKq",
  "key4": "2Q6exm1qm7R7AcKEDCX7iLDmhYLvmsjtE9uR9eFa2c423apNJLQ5VpCMfY7a38Y1EEqSdT14rWFKRPnanfrhgvQA",
  "key5": "3KAvSCz1XufvUJ3AFFAjNxcnrb9H32jMYFm4aJUezbmwvVgA9m4UB4s5L1FZA17Ak8wJe2jXN61woTmscVfgefBt",
  "key6": "2vVJjTfGYgLYpChvUf9vJFYaSuCTaNB1xtLeV68WV2UA9Fg3Bu2dBueLLfx7t17F5AtDggmsRnsKKy9nRKcF8Q3W",
  "key7": "3is71cqY5cWnQ35taWsoTh4fVHD3vctj6UMUXEVWYdsv11EvyJomaFFpVFucFcLKu6qCwYHQqaDGr9UquYhpu2Wb",
  "key8": "3xNG2XZ5sKqcPHVCXLf2zyo3drbX98B5AXuo5SSAC6HV7KA3vhsNSANekLR9yCTNPUfsjPieFWE1pKD3GTVvf65o",
  "key9": "3CUvpdodfk9bKjqg89KF5L2No7fXDXJPYzwx9pUeuvTejZPLwPHzsWVfWMboVRyK3UBPZEADYQzv5fV4C8eAnxfA",
  "key10": "s4rpeEUZGNEJKwcAoVPxbFDe567rMkWMt5wQizdHjf1RzFKXvpb4bUomKHp3pW6asR7VKyz1CJNMxvDfsjQzTrh",
  "key11": "2RoDbSxZDVfQDhXzBszfm3Ny8x8FMX4PqYnRdTK9M3ZrDviD2bsCgFipHArqRh2s6RzD2xxCvD7bQMzyu3TnwmSd",
  "key12": "21BsfZZ46ScbfzpT1m2n9xVQdYaAg1SnQtigQhtTBELcPk4N6tAoDtdwS6sooy293LzLUzhVmX8yvHwdP1vxGZYY",
  "key13": "2Wu5zpiWNb767pedLD4UqcjsuWLBJuJyEkAhax7KEmCzi7uTAKyY5TKbf4dp7hfP2emLXmhSARUGfMmTDF1ybMdK",
  "key14": "3pk7fLntr1uD2DeaKGREjVPXe2agCMDgdKNvegKP5mLd3qYSo9jPnoPLQnDpbH2a1E2o7cSWxNYvSYrcij7FjVjt",
  "key15": "2XYEZSrpR6bxqpgoS1BNr5tmGENuSjgH1ddpy11UePhBADhEuptCmXBscB4Pj7xHjXbPsPj6BQQXwVvHDorLRvEf",
  "key16": "5pi79US9ExKrQX2YGPvgRTqKwUa9EocC7mWdkaRmWtgghzdYqn3sju6T3x6QBsnS24VaCEQDn79dwmRZzKLvJema",
  "key17": "oKPo1rspKQaxaxQ5dGvnD7KdyouT6qVxZutF4MXQGWmHUXQBBh5nQ9C62Nir3rrVSQcaZCPGGeUqkXf3z6UpWjP",
  "key18": "bQBeFosMRY5cP5TW7mAUzRGRtjyCzuUocA9UbVzinUMekAULp3mNTfouw7VFCeb9PzZ5miLTaGBAJXoTLUfZz1M",
  "key19": "Ad1A78dXBHs3RYRXVz6pWraVrULJKP7daT2TqaD8YkRWraxvqAWqvcc9mdMSJDVk3RX6VJE5vaCbMQMi5yjoVTQ",
  "key20": "5AeuXkfQ9p8FxSVhFXLKaKEavbkP2tXxVkXm9s2tZm1v3nstGaHGpXTGnMaiScwL5zGynoT99DeNPcncXxPB6fTe",
  "key21": "3vHtP4S2efo61fhfGnXtfxzaHWFbZHeqYLsGfgQSVNZXYCSguaLADjhXEdpkre2Ld65HDyW1aEb77tURss72az7z",
  "key22": "3tbMTeTavBwwjZvmkK9QRRUQu2MNB4vFqCM8K7ibKnverenyRoHQoCJhjJkpBRjwFt4KmXVPRJ6FZurVFpjCfmw4",
  "key23": "4wKHCjh8Z5XvfaZzeaykEzojYpkjSbjncAy1xDjqsxDEWa4bEbhrKzj2LSQY2xFmVEoQor5C2M74RyT7ZpkruHEj",
  "key24": "2N749hh9Lv6w93uzULpMEa4s8tGRqoNiRuxXN8grLLfpbMLKZDnMtUAh7HKr4fakwC6Nd8VLNDS6ZEdAVCDpYmWX",
  "key25": "sEGnxrWJspvRWxqU6Mv84zifzWfPDwUnZwjZkYUokrbhdnCFRBHMpbFoZPCt2RNCSfKEjRbwBczfxtHChBT7t4n",
  "key26": "5SmUJnGjs74CdGLuiXrA5Qku2wgc9L6hD7HJeeNQtQQMu7n73SURkKzLQEny4rLwRUEHxt6zeeaVKkzMjzLEYhSc",
  "key27": "5LTKSQvwtKrALTAwuCaa7CLEPKw4kYCYDHpCogEyBndR6bRecQr7wcfuERtHKeeYihwdqTsCpB187U6PtZDHQ3rE",
  "key28": "5NPKc2A47tkakJNmrMuzR2i1vbU59Epu2RDitwp51BvSdgvqWotFvMMtsKVrMwTj2mCp4QuoNEh8irbj3qu8ZeXr",
  "key29": "3U1CC9youSUvG7QawcHRWvb5FbVDeJBgTRhiL5t44Vca4BRELpJVwrST2wwF5BXyTDV7LCZj8HF6cWEkUJzXHja5",
  "key30": "4dBiLtkwRrEDMdecxhcehbxFeGjwME6ePi5g6p7TAM6GHyERuy6ofJHgT4MvhpydRXV69L8Kvto6ev26fyNdh4gK"
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

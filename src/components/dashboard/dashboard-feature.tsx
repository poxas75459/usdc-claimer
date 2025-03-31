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
    "5yYAoKg5wB58Ux2tiU5Z794vvWDiJhKFEA88DfimDfYuvj3nyynpwQbePWnwHeSgkEj7DJfGiRHDN67o5tmD12c2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddjVJJBEVgWE88xHjucusv48d4VRpMKW8dapvtdH8Nt92yVsH1GkssjteE4JmpNHVH1zn49Dw2VADZCXpCoXajo",
  "key1": "33yUGGBKEMWR5pt8c2kRkdNaRZT3DBzj7NcFXp8Bkzbpuw7xBA2zxTpgTFwaLxk4vpktnvM4dUymt7pGnzxXfEvM",
  "key2": "2FhJRFCGAFBi42BzuHmgDr1GR56bHdCmK8nfsQ1fH1D49NsBpEvVbp3sxpwMn5Ntdw5bEBuJhKMZFMWdfBQeiqa1",
  "key3": "63BkmxGH9hxsDw4HMUKuvfPSZWFqKZVS4cqDGYz1Qs1ecRRnVPH6uiYENZbGiaa7CqDW4ZqJ6z9EYRTNGNhFy225",
  "key4": "2849Rox6iEcWW5jmv9h4Fb1eNoR9HWagwYEYtBcPcro8F7T7x3g7cRHKcKgpJHeg3XLK77hGHUtmeWMqu9nSyGCc",
  "key5": "5NbXXw5zUny8UwS8SfHvnW4N6PpLuCv4roXYwprsECwnufDdVvB1A35RHCvvUmrfWGY7QuMLAmWWRsEVQuETnqZR",
  "key6": "5n8SSMVJt4aFKcMztHDChNFyfzR1VBD7w8YiFbyAVRGdMZuEumc4aiqBX5AiLocQMfABbGzEYHJ5gDWmFYMH5tEu",
  "key7": "4U8nUWgzsxFis5EnZbPvvQJwLyGwv3Phsf2vTUdcE4PS4yxY8MMVYfNLV2kSFsZ1Q27wME73XigJgUHQ2CBUm7cg",
  "key8": "VUqu9Zp5hoWJ6FaJbUWp5hGcHim8JUCPQCs8UX9oYfAiBzrP3kzanYXJb58SKpWE2CRHq7CEHrsEeNrnsuak6WT",
  "key9": "4A9YMDDZum5UqLKZRZ4B3a4Gd4ZQEqKppDnEiS6aANYLboCFysmmFPS3j5JCrjR9yZ8AaUsS4fBhVM7r4LcQ8fhk",
  "key10": "2gDuU8CvXUVxT2h7ZmqdJdTJLUb44PY5JKh2yCdZCYGksKEyHS79vLtK1GLc4jmwjzRowAExbYUHW7sUN5yznJcC",
  "key11": "4o8PF6YkKLehjYNKGcf2sBaSpXH6gBunwQKnFvgxL1SUNP8mGGVJLcSFdCfoNPjomoRbCpFVoWKWPNNVayASoam",
  "key12": "pCEwSTmfwjEFJn6iKDdNmAjpp8dMpeJMeqXdwJ5zzrJehxkNui7njwbCMvTfStW8QaRKBoeFRKx9E3Aar2EhWBb",
  "key13": "4zth5nBTt3b6hHM4u7v8RmVAFXewTZZi36Y3diaajH9epjMUZ44H7j9L8mB5J3FcrYqW8t9APtUD88jgLCfrPSi4",
  "key14": "35CYhMTYEM6No1okWqXriRxrnoo8zeTnMYsWoTnR2UeecJ25T7VJnu4zJf4uwn6sMa1kMACava5LPUH4JwDrpTrA",
  "key15": "24yvVTLDboi8nerwKV3i8iny9fa7NRc1HWqaivS2g8ZTtkojSoTWXiJG3sJEoKbmU9LSAs9BBTYdRwgAYnS9ynop",
  "key16": "2fouMofkyBusCLqpSUgedBh4UsVZHHMNWBEHX3jfgqVgbZmqAxtQB7vqEbsJ8QS6bDBku5udbqTASWNF6XzR1tj9",
  "key17": "JZ6RfM1N1SuuzDnb4xwXv4wugc7Je9VZJznTzCfq4WZ64EdoEzAT7vhgfvBE4TN9eioQSwzkySNhZ95EZETSzCS",
  "key18": "4ZxfNMNu6wgpeDFZnGuVjBuK41tjd2ZMSMCkwbWQ14fNHMYLeb7GpaBCLCzrAXMYaMfBqLPu1T3WLGHvWBizWUpz",
  "key19": "4PV1Ku9oJtYpfpnpx3xzWkWR31BM8u2ZLEg1GbRcnpZe8GnMURVECtx891ComnP2pZ5gqqcMrMcMuJWi1Jne28Mh",
  "key20": "3CUHCPg6cTaWBjmxQVHTuZh5KC7gy5dzQBLapNuWgcSBgUGS1c31Dugvoiht8D8x2HjEmmCi4nsttJnECgL7SCig",
  "key21": "RKzu8koctFDE94d2XViSiFVBLgPucCQ6s5X6anMugXS3Y733FVvYyUNRA1KqUysVvHg6sM44j5MqPoavMbUdxhh",
  "key22": "2Tk6AvcqpBSCpMBAJLDtpVka1BY4N49tPBeanQvSYmo7cvuzjzLJG4y7fduDEbzVS7VHWUKYyuWDrBVMi5TWThWJ",
  "key23": "2vbYpnoCveArWMG3x9vYnHsNUDgL15fnprL8aTFXypmZWhSD3147pH9ohBbKAnTiX4mDh9F3LtwH6RCquotrRrDm",
  "key24": "LTc67FFNpLfcfiHZVS5qKvKpaodaC5fWAZXqiVjLUanxi4qP7jj3B2u8c3pqPWJwm3oz8ZrbwPqDhHbKR84MdgX",
  "key25": "4WBi88ysKteoWZ3wuqcmB3YRBjLiPi6Z2nnmjfcrhkudBJwyZefaM1KmYhZGnbi1XJxCMf7ERB5pjiuPqdtTRcU5",
  "key26": "5b8EfbMdD6hqGqZ6v6QpsxEeJcgfDdXh7gG9wmwmcKaZ45CYAeN92eTbdJNmuUvuHkL3nL37sTxLe36P7kQMAnc5",
  "key27": "2Qkk8GHF12s9egPmb9bxgz67bnSoq3eNZB7SiRsu8fYQuyMAtrRhXoP2T5KrmND1wcCwuZmvTt4qwsVSp9YEL6wx"
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

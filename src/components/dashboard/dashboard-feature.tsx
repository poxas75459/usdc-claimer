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
    "5hoenGGTMU35J27o3LFvjikzhxnawz98QStT4SX8rjcJG8kxDgFABU7NY2iu47B71SozmDMd1yjGMhjZm8vA2PFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTFU9Pccxd3PfXpinksfXXbdddok334ENCyazNrKn7x3fYWgr8UdAR9mynxWWr2ybMQFZHcEA7QZ2inLVM77VFR",
  "key1": "3paZVVhmziV3EALySCuxLnt1hxnwq6Uktvxparsv5rYTuhf1qY9V93xWTj2GSK7YN1LxhmSRzkxJQQHjMUP3BVgu",
  "key2": "3LdsCj8C2XL8tveYzC4cZuMidyXgrWin5HAzxE9Zoc7fvjx9DNsf7mBsqyVcCXyAuMiba8PPsEETaiMZbzCuzHiD",
  "key3": "ArGCsRwdPG78aNvzfUoDj5RTniyZL7uyGivTc1TrGccsASdFZbFeFHcowSmxhoNgJvhJXAfDoAy3xB6Fi27RvBF",
  "key4": "MVuSg4mvBH37MhDEyCQQm2sLFwzs1nPQ4k3KEvii7S1ZBvqHM9BjRZdJ2yYE4LvF463J6X2GDTuscJAPjXZUK7z",
  "key5": "2RXDAWXevc4ZuX7CYahdDk2haVP3ioVN9UJxj5wwiQQx8sCGrqM2SkBaoCWrfpaWgdJv6PUQkuKDooXAPogquEy7",
  "key6": "2qxsxGnQGPzt8mwpPGphduvGPotbCtJqMirgAnrbjXdT7EXtqx89vfhfsmeNJTQkZdGnN73U13jPEqok2ivEfw4T",
  "key7": "4bJAxbqC6MxMkJYAAGc6WeEixz53gMDp7My2sYtRwxvDrYW44S1uCuWyhYmFNk5QBNjEeiQYK9XryZzSvCg1TPpe",
  "key8": "YV1jsbzUxxPgExiu2GQrToZcLGxzS64LrX5jNAhDzJN3aahgEWTc3hA4yuvivaZ8g9RexeaV6P4PavvfEBNXbCs",
  "key9": "dWkGKypHZ1YkaWNZvQ5ZFkgMBb9B88eJEWvkeDXWLRa3oekjrFhAHoPMvpYVU1Pbxq9515bHxwUB3EnFAZJP21v",
  "key10": "NKn2WnsnJqW2y27AZBrNQZWukC7Y1eUdXBcB3VNNntoHv5mCLMpuBrGuiU7cmCj4NWLriDzaj8eKPNjQdUwAKfB",
  "key11": "3dGEggJ1ThPQxmpgxo4eMro5rNcL3BvXV1MSL7m9TbBp57sfXAABRzrDWAknHaCQNQV14vwTSxfbtVcPn1cXmtqR",
  "key12": "21cXDqVfxQC5coxQMNVQ3ZCwUQhF85RYdjNvRdjUH5uG1erM1nFmU5Jd4jVeiJnVLCJ63AjgypFPnMWbmgxKT1zb",
  "key13": "ifTYu1K4vs2uum1hpzX4bFj2ketqkR3UMHHru2YqxKixvM8vmFQBdgd8DC1HkhRebwKuguRTS8y63PRW61E96T7",
  "key14": "RDaTKwngLSQivD15uZoDj3WuBKbHiz5RDk1w7XXgngGuCAqDek8UjX2ikb7dPaho5mgfdvSfBoeURa6qpudDrjK",
  "key15": "3syLCmPJJACPGjZEQAYjz37Ht8JqbhaQPM8fn7hMDV22aPwdGcopYXMRFK4a2jtc9xREG1iDPzJvy2SoyM4pjZWB",
  "key16": "iGS7w4XASNxnmnWm1LUUdczyC8VRpKUN7nDrWwQQExhfQnLwPyxXsDJrXRnCSEyigZdMNCY8U5RLVdj9D2HprRd",
  "key17": "2yTbV28DCC4V7xKVCNzEBMdPcdFDwFV651LQUX2a7RyPBMMML2fMdVnnLU5Bucv1dKZ5Yvu6WT9uzA7B8TwmohJV",
  "key18": "4PYLuJemUMig4DRzNidaYHdnXxzTnzsyc5f1ChaNRWqcA8B9DnAAgBmcv16oq1VGuSwr9zZ4YfzG31MoqZkWwtBw",
  "key19": "37C1HntjzoD3gPrGuJpc8qw1HeZkdqrcyvC9fVYfxK1yGnbK2BZwRob2uMLZnEacz8z1sWP4DBiQWuSw4sfVmuVq",
  "key20": "4ir3katkdwJJHv9h87AHL7UPwe9MJWMPVb1ovLmQWf3TdjRPiRLinvLAY2QZWaABnHA2D1FjbajHxjSdrt6UwSzi",
  "key21": "3ReF8p4rCGK4ba5qH8qWPiCYdUCjxmKrGZzaCHtkuEC4cSWRWR8pGVARVH1Bcc5WWCDokgvwp9LCWaWnCFyBEema",
  "key22": "BQshXJb4t2Cm3u6tzG2uTFg4WsALVHt9BzZEBm1mDN4zTihb45VZCRJfx4kd7uydNg6xngaB72PCLQxmUbEzYpF",
  "key23": "3tobsdQefEmcQADiBiKWNCf8sGabPAGiyB63JzxvRNcSpHo3WFYHw7ApMcuPYinRHioomouN9KFPofCvSq4uXrT9",
  "key24": "5TEk2vQKsYzLWwsvsv4V2CZfkX3FrpmBspTAk8hVbzqomF88yi5MjkSnP4bnd4xwyh1UAuNqvMfBHvwbqsxfZLd4",
  "key25": "5BiStPYtfewf6UTFchCwQd2edzksXdBEFALGULTc7jyvDVCq6HREykV5ohF9ddKhyY43RwRxK2aaWU4KNLweUoWG",
  "key26": "4xDfcVTvVnEhVYx3hWXqrdYTPSzucrAuALKTQdefDnERYbiC86r6fA1erYJFaCNsDSEZ7ztthVgi5a962YDipa8y"
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

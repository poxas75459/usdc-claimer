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
    "4MRNaMxAhex29LAcAaddN4LTFWHBBo4PEtxGtffHPH68aKhtY3vbTZUtRfdncwW4Bjymszns9VLrqrAMCwC8ehWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gXGQVPopPMv7apLG1zETUEXei93LYSCsYpDVkNJqr2U57rBMx2gULWZVvNmADHcSXqBKpq2JuWzPGkr8uTnJTYZ",
  "key1": "5wZHkw6AXEUwu4DjUAmSAVfUQ5UTJEVeaAShG2ob7LQRHjhAEAk5ZJHYvchRMYFnpMXQZrxvUmCAtXkiJsEjiYea",
  "key2": "5BKN4WQ6FnT5RLaPm4rXvfcCCuqowEfS2JsXSsXiXcyJVter2hSBkNjU4hJE7tY7jK118fJtzs6H52p56rstJ1p5",
  "key3": "22kzoxz22d5pcnhxFGtTFqxwQVYpnPqXaNnsFHL1CFAtwdWqckNRqJ37g8tW2gqo9zyMyhBHmm7TRmexQ6oqAUNd",
  "key4": "2UjCzT5q8UNjPFDwgPFava2iTjAuLyNWvPAa5R3uXzJxH4V7dXokxEjUdAJkUeQ6siQz2Titt9qkmCc7PuMKZyMm",
  "key5": "52xXjj4EYoar6vUaBw7sKKFC66VfmJRdFWkNWd9FWmD6uy65KajX8v6U59ozskmc1LYAgs2LVNT3gLRMV9Jbbz14",
  "key6": "3VVx1aX6e2rs3VQduxo9PcpZ6UXQxpJzqNVF66TjyVzJLq1eWwsUaMXiMStE7YPAtpuK6iR1TwKbVbMisybKTeED",
  "key7": "4CaB5ec2ES6iAgECYThu9we5bC4PJjP2nhhLvx8KjUASeoyEEYCZdUuQQ2kgyzM4RV4YmgiMeRw3Djaqwo4GkBE2",
  "key8": "3Kbowz77kS3ZyfMnfLEERcUo6ft8wdShTw281m2go343Seo9DpJmJQLMvEFeuQzuprFU1BANms3JU38NpA2Svrmk",
  "key9": "2A1vmPXKGuQ4rsFpf3KZ4AjsvY6riG3BPCKYb5V6Q6jiRScvNc1rGD98DU1FDLHtPnzwXhrwtfC8Lw4PRW3XqAF6",
  "key10": "41MQeSYhzJwic5WJgiLhWpWAgNKVq1PB2jF88KvbxnvrxsVE95uSngYr4dG16m7bMdw7ViNd2AFtzLQdMDjVR8Ca",
  "key11": "57jgEjqCRZS6jvKrbKmrshs4maNDT3F2iaYsVcHwRjFJm7uBWUDbYjzxGvTzd11NC7y55Q9AwhaBpdytLNqnu63K",
  "key12": "fFNCSpMRqUtpJ3z1F4287ARXu6snnCVTZ9k6jjo5J7X9iB444tCcLnqqy2fgbFe6xtZZaY2pBcACEVdWNRezyMg",
  "key13": "vQWxxtvvDsTT1DjRwqxyHtUYVF9Ut2w7bLWtcWmCQv9pai4orFEmtXaq7FEPZRMV37zsS4VtXz8xyHfVTVmzC8n",
  "key14": "2eQos7fGR6Fui9rMMsAJoe3LfMVgXeiKrR5RqBAixSAinMS25JmamC97AEGfMLVF6ipTKhFpcfsmhgRDPniTar15",
  "key15": "49UaHcJoinNDxdz4DJMwuNez8VZqyvkA9AuoRP7PrePfV3f3mChc4wdr7bKWn5727qhF3rtDuXKLgcywFwjQJ9Ds",
  "key16": "QJ7yX4sCqzd9jv6zKRyGGPi85B45sQRRLKFRhBefzKbgvVmEqqfXFiKvWvc6qsZKGzQEi9Zp7XgiN5ujLjNeEZ8",
  "key17": "PTBi4FCAgcqenGxCtZQkzjVCs7ufmkkhBrM2U3r5868iPtK65La6o2b1kGwAYNKARm5bx5k5jwQbCNJXxPoEpsT",
  "key18": "d397FwR72KmbSBjMWQNoYU94r4gD9pLLRDzSbUr1Cnv4LsrTogivW335WqisGdaXBXE9hT9Egn8viGvkxxe7jSv",
  "key19": "5Uv2dgbquKSM542dYvZEY1b1JfLKf1kcRXsPsKE3Txaofr82N4F8K9Xis3jgZ7Dibp6Dv5rMLJuVzefG5eNtCQ8e",
  "key20": "5V5vm6F2zXtgwEZsBhKmbJumAHWe7chgpUmV7YNiAmERtF7aPg8Z32b8d9QfSUGutrqsVtRP4EH51HsPdPD5wcP9",
  "key21": "hsrBt1syJyq1sCVZ4gcjLutGPQ9coSyJsGG4nVUXZoyfKZkL9NZBQCnB5ZS27BWLXmZucRxRe9xN9AquT9T3kgi",
  "key22": "2AG243nYaN9onXFh3gBi2Jiqm756MaQsKPzWwwmDsHMDXGQYdb7ihk9ESfqMCrY8GCaJ1z5zF7rGATQwFzDvR61o",
  "key23": "62q1ai9XqV7HtvU1zRHmA23ewcgXCeo1Y1LYo11jNfdx6ZxvZD2JLkabjufaijKaYPSNzQ1VHARp7SHWvwWBccr4",
  "key24": "59tPbGaMsRdmGxjMSqz5T6E1hvVQVikMbuWLGFQSAdrHUta1PUf5ndZfN2Y3E9ydNEU6HePbfLTk6yE6wBCPL5bq"
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

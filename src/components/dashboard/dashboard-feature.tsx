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
    "3wjzKJVeet92Cb8nRAk65fgej7v1daP3CdLyo6L69HLQP6iDXSJC8sShSCL3KrXC5b7bvN4iztiiQpsftD5fmxFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HpVxBtb2cscMRxGCXfh1s19PycqZJGHhMxEmkxQZqJ8inm22g9HFdawCfb9AfdMcLB2Yc29shmhFWQdZEB84Kfz",
  "key1": "3vKj8nA7icCHuXSirHvHXnioyoyXWAHjR7d2UCU3WDLL8E2scdCuMJoYVGVWgVyTz9xEWjRTJjSz2zfhn9B2XRLj",
  "key2": "TPFbaMpafsN3gYucps5WsWK8aXEJxxadWcCFWKWmY1VQ42zFHGNR2nFkJq157xThqoTuuXACJk8fMCQGGxEnVrz",
  "key3": "3LUfAgW9ceYzhop1RP6rtNr41JvmvywZnvKvhXJ9yZPkC5ys1GPVbcXjHBPcEVkQQZJtvzPqrKYxdPx15ckWRQ8t",
  "key4": "5doMMxmYDYLhYgrFXbmAzAzYWvMz6L8X3pZpN46aG9suutCYeEQJM1amU9trFy6S7N5y3Xz2h9DZYTC7Zki7QciB",
  "key5": "21hGydrLf35Bv3LPDmi3ijSoPq5bKinPfAJosBcvA9PMq3tngC19qUHXU1EEt9MVhtfozZQ6mdhwXU4uC3M2aBdC",
  "key6": "jfXqnDtpKV7hCoAcAUrZfyNLYLA4euscpRMCrsWBT44Et4GKckeMBmXo5DrWu5qAZHkPvrFteaLTpJPKoSUE2xj",
  "key7": "GybJGxWQSKip8K8HmbLjeyuwVz8igFszszeuCbUmK3XSYNy5kNJ77pJwyXJQZfPSEem17xHjKBprq4V8zBdgg88",
  "key8": "jCKienmeZhMkqHdJkWWV4wFYjyPc2VzGaU1ncfYRagFYA6SRKhurFXsqsB9q6EMBRyWsubopyURt2cdsnrFrzV6",
  "key9": "5mbbf7YkkjSXeQVLEVYT6uV3Uhhozb2qgcN2oH3ffSDVhLJq5CLBXsJAApnM8L8p5vsaBmy5Sj2Bu2ruXFFxXKa2",
  "key10": "EZ1kGRzBLwFvDebK8DGJwAAzyuoGsf7hCh88YzJM2ZtVD3RyKMeWUUd7hNecmbhirPkVrU3rG2fTS8toEBkKjWy",
  "key11": "kGSa27etwRvb1JfVpQ6LKPVMWsVCHJvCN3nrNP5eqGqR83Ku4a3Ue1YUHJVJbHLnu8B2bDRNf3ne8yAoaXfi5AH",
  "key12": "Qs9AvnUsSihxTMxmr2Q3g3U492TuFrrFd92Dg7YL9ghPjg4BiNAVedAp9Lo7kikUsGaYpC34iqAMfupxM9yrzV4",
  "key13": "48qXiLN63dbpfA5tbyJzZAKjXY2R93Qv9X2JYaymX2sTq6n65g4z9CLwmwMLrpR76L2DZcZgVFYWQ54NUAWN5vut",
  "key14": "46KnH1thfcwdMeRt4AsYAWuECg8LJtH8VuWMWRtLv8F58P2zRdmXcxmt1pZaNGghw4fpL5tS1eUCXpXf7jusVNHU",
  "key15": "5LJBRfrasgYHQ4rJvNHKM7xYrTdaRQarAoYCUrF7pGoAZsNvEnFqvD3np85g3X342BuQg6iQJRwxGp2q1bLs2o1h",
  "key16": "uZ45JeTwKqHTnD9fuVh51mqmurCfCXVyVEVehU4bZekbRht1KeBsGRBLcfF3hktHtLpHvj3H7HJ7331Nttx9DSH",
  "key17": "55zCrAJv418xuC8PqpP1P4VhuJ3r5rt8pohL78KUA8GMoYmcFSPzVqJbSSceJNsefgVBLeV8Uh1aE4dPcgGLdVBt",
  "key18": "5cTEReHKQWsivLi4BCUh2zknYe9oLbVXJDPLv49TW3Eua1xUGJBXP55jDrU9TdSLYA2WoAYEJzLZ7pM3hD56wix6",
  "key19": "3VjPwK75US5SqZfPjV8gHK7vTLgdwn9NF5m3MqAYMMCVDVhQzZM9e4dXPbDWuhaXZQBjLSjWdWVRVKGvtxeu4mm2",
  "key20": "4QuehEUu4R2rtY3G9LEvQZpbXznFq3MAqt6aKLobCskSZzqse8T1E3g8kvScuT6PY36zofSS3z8a7wyE6MDoBYsU",
  "key21": "2yVYTNXa6JYw6djWCkShGgLjTriVZZ8EqK1xQXu24HF8sC8RqUwUyHP2wvHRCPZxaBUWfFYEy7F8FTbobdCQ4YbX",
  "key22": "4RMmdx7iFQFqYsJHNFux5FRR7FER5sAyPDBcsNbcnsuzy7vERutYpWE53Feeipw8xy85RnsFWmVmmnsLbMYUo5e1",
  "key23": "5fJhMcisGDf2ZsXPtByiDgsHHuZSHYXEyxaTkKzLsYifHsUdUzUhfFkVotm6awsJJ5dkQUgH2Wu6qkfgz66FqV5k",
  "key24": "31KUyuZQsXoiivXWp6G9t6Sxy2QxSSYJ4ScTuqDnt8HYjDwA1hcWUkJftKF8JrWZeP8fJafP9zsfDCyhkvwpfDZf",
  "key25": "W8EbNWjUAi53ATmDTtq2EUp4JnLcKyvynz6qtNghfTeJAwiTt9Y64EdRcEaukiuwouLjNA21yYrBpJzuAZ9C8aP"
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

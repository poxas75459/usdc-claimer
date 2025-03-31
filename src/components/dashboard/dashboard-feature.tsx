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
    "2EtX84j4AeaJFEoGVQcQssySxscHxPbJtSyrkNBRRm8Y1RANWxWL523zHUpdXNsvS4zpLnPpmboHFx6gyftm79C7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFjBqfAhKE9x4o1jj5zV53UNtq5K6dXQ8VL1HfrZVLF4F67XFVHzVJAPpWR4auHpzNDQBLnYTDqQ3pNK6FnsERC",
  "key1": "5CTjRLhgkakYEEckKsWp7pmHczA6XsvcdaFVHNfxiPsAChJm7K6DRmv2YwxyuDEFK8yE9e6q6UBCRRB9U5vo5Q4U",
  "key2": "RkYLXfza35deYAFKHNUybUBJoAhCxNpMjCFVvYxVFsehxm4TkJHJy84Gpi9uZpZcyPhnsteRT8SA32hRJkDdhS1",
  "key3": "2P4kyFuJtWkzVd6fywUnAmZGcRhMkeCB1gMN9TayyUjemxAYqST3yvV5GAWzTPFHHQR7e8xvphAat1BRS8ivuYcJ",
  "key4": "u7eHXhJks8umrQnSVxrGa9BwE9zJDzCwDgfprcF7ar64VQQ6gpGHSCWew2xzoGh8Swm6oEGEzLa1xLZSQRsyXG8",
  "key5": "gLgxAi2tzoE6DyHterW2Z7N7BeH6FvM6VMj4tjnxydDp5j9jw67CzYVWVpXY1teVLSwvactkWqGaoRafTVXVwp2",
  "key6": "2RGmYfsFNaJDd6fL3Nnz6B9BDEzdetNX84iWbDZRXu9DVwY8j2b2QKUAqRcfeb1WTDmKe6qvVJphQUJn3kXZMGxA",
  "key7": "3tc1XXy64oAcUN9CnH8jMYRHGr2QYzrLijVvg64CvssURbGnrvagcvVL9BiAdcpdh6y3J6W121yyugHKVwR7xG6E",
  "key8": "evwwA3MeTpwo5cwrR8fYCnE4WVpsVUXRpu1zVgZMNziinNPAwHZVNdrh7wc7KsusWupaMaqZmi1beBzqXTXXFhs",
  "key9": "2PSjhhVFJhk5d9hMnjbVGRv1KutMyugHRaPCKHEjUTnP5cs6nEfVBBJDjzUpY7AFy8MFTriv1Kc5LhfXNsmKmKwS",
  "key10": "5UFw6RCDVFsFriZABsS54KZeiNgjEZec7ShDu6HAjhMk4SUJPP9jR97hA8YeUfY8XrFAAK825wgmhUGFF5d31UPH",
  "key11": "4NqMJUxRRE5RwQ63BUzmYbqVNVrrBAV42t64VBJYv7HvotKsafJsEpj3McLF429JCwYzNbC7DQzx8X9gcTLEHPiE",
  "key12": "4e9G9EdeRfAWRTqc8aZKQQdx5KUkSuMinwis8RAXJNRFvf5y12mNhb9EZmp3TBaYVioVv5x4atdLyC9jUvRFMHWJ",
  "key13": "2Jh7euGB8bUNrWkck1u5iGWoexNUz1n7z7npDf4JjXFUzB8w6TeuccFLMfMHpWwcafSHMZMcAgdoWa6BseokBYW",
  "key14": "3RPM1wwGF2vBM4eC6bmEFA71erVv1xRwztz1tbt6XQNjzqBGVa4YLPCUJtWzSkoBbbsEaofAC1fHf5LrzKyoWJmW",
  "key15": "2XUQcMxeGNCsXT626u29MBVkUT6ootSoNzJEPdwhHoTJmUGVbea1W2KS1NcPScCxp9rmYPMnqQHrJqF1kmGG6nzx",
  "key16": "5auwVLRGNaDfzJ3QRt8NQJqDG5UrVjbD3owbUTQznY1JpdBZGT9eP3HRGzW1SkvzhEqhMhhZuyBKtYALW3pqGk9u",
  "key17": "5hGSd91UfFGNtNVUhSBrcoG6FaPgKVEtq6yi6GfxRHHni7gEes7ozmJ1NpFN2d5E2D8CEFf1FE5VkUGCuQtKa29Y",
  "key18": "55wLzaxNM36DK5dV9ruJ3xhdAsLJFEJ1j2fkxdDvSQcFbVEyGjXKiEgYWhFLfGM8L6He6PvVEnwUaVcPRH3Q6wq2",
  "key19": "3ZWTRL89r7F3k81JRHb799qS8shyH38Vgd8GCFgPFVg5K5G1PcJEfwvoDDeBdLkXeWhczh14AbFy3JxfsbK6mDHw",
  "key20": "2AVUqUHny1e9D5HjGTC3SJFVu5rRDmvjh41Kbgz4KKvRpw1zwfwaYGR6pQNzxWQFphD2qaESt29pQFDbypYp7hmM",
  "key21": "2T5zzJQHYaRLtu7iYjwJHM1iM1Rt1h52PqsUnidDs6NR7FjzYeHQSLK4PCLpXg8HUN4vXDCP7VM3PC1JUzcAnuLe",
  "key22": "2rvMHGAj2kMYnenEVfzsACty2XdH8pN5fWoGsKwUqjt55nyChesMYQLat2SPKg7WHuoehTjDKvKeLmFyHuupnD4Q",
  "key23": "4T5qvQgEAWHiCR2JEtVpbnhyJwFfwhEnz6bEfqV4kiTWHpapHMF4e99ffKYxwKCoURRbXNT7MVK8eKAvnMkrpFNa",
  "key24": "u2RpSJ2RdhaD82ne244XaG2copJ87KKfzaLCJL4QEFUp2bfZm3uXjTaTG4bpkCjmGgBbD4YVBPXV1N5Ls5J5UyF",
  "key25": "3jfJjHuiJinikAzTX5PHnLE1aesVmH146yN72WNd5Hv5nUoKenM2miAk3DrCM67cRVcb5QdqWSnZR88gvWYsHh68",
  "key26": "54UHrypVRHVJo3NMV9bEbLpUEkxf6noFSdzkcQxizVY2rxRWDPWUopfXoav793XXdfjM27yEDRsCboXD8NXHGw5P"
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

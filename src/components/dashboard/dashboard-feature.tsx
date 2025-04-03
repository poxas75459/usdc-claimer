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
    "ys3e9MUppPvYsqJgctrcPYd4V98CzAA3wWYJiRqtNCJcZ8DsGDs8PZkehNV6MfCjwgRMprCBhuYozUGPeD2KuLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GZdiQEwPBPraucGmhGVtLLvJJviBJFh8ixAcMcVBQnWZwca3r9NwoQ3wUzz7RC3RMg31hJmqsRu4kvQWdxF2Lt",
  "key1": "5Ni9aBcGMBgQ5LfKSB78pkZtgQooGwPTJ61sYqL5GCRPCKCa7Ux1fNXxWKowbTErr1GMKH9V4CNNosnXP8xzRWQi",
  "key2": "2UzwqPJ6s2ZfFYybXbKRE8ngae3K8FDwfdLDwdfTgPuqfSDqyBsNYvNKUTDdwYy7wJvfqVMjLor5ZwhXgG6ziEuN",
  "key3": "2wQ9HeJD29FkvVRSQBF5BfYYtHS8kgm9MffRWvTFNBmre4PNWScseKeJujpayKQEYpDj8SLqPppHnBoHdrRtT2dF",
  "key4": "33HKa83Z7j8X2oKnnEc5w93nvzR4XBF3XwUGY3L3iSbRrpVeebeDnAnY9Ezd7aWRouU11av5DhL85uWjELmnex97",
  "key5": "gVgjrbdDu8opfFMaPo3ZxeBsiLob4nTzJQJe6pw9rZ3PCnCJWXAcjjbvFNATBxSHeiz8Bdi5E5eUAu8ZnMswVND",
  "key6": "3jZSYM9VMVTy4Sa2vq1kkkR3zrHHwg3KqAZ8Yq2E9ZkXDZVyfzcwUYEx4aUpFNqRpSB2BzzVpHrhipebvXAjQu3G",
  "key7": "37oLVakT49Use5o4NAvvekUXWGqsXGLt8zLH9aiMQgEbeN96jXECrHcdxoGLgFzLUzxSzA9XVZgJ5zVJBTXBb2Vn",
  "key8": "3xXtTkysN45PZXGG2e3b7wQ9iGpr6o2JnKZeGCpMw6VwbLwh1h94MLLxVDFEVFSuu6JTzvsQ97E4eUwyyfhQA1Wu",
  "key9": "36DUkGBo94Z3qBjpdbkrWPS3EnP4SGuwjTVHAbouVFoDfhvaH9g7X8zNnmwzSUbC11PF9XTAqfcvZi4ZUXqVgPKd",
  "key10": "5Rasa9jubPXvS4LRZAQsLVFAreC92WSje7Ub13Fz9DKgqN7u5i8UWQTd9Mzuke81ox7c8Af7Cir8NSuzQs5rFdt2",
  "key11": "3stfeMkBNPYKW4Mtpu4NbqRyNfRczRtDx5SB3Nq4UGnzhsK3AogS8X26dXL2mDnmpcUxWC6eDZUBtjQjnhSiTcyU",
  "key12": "4ubW1t7dbwxBQbE2TJnXWTJgwzhYcTpFRQd8rJrmicnS7a3NpV9aeevLuUuZuiMvjPgr4XpiGRnhVfeNLXJFwS71",
  "key13": "49AxpDSaKBJUruzHrWgpBDsENw5jXZME5TsknK9Wu6QSj69AAv8Nx38V7UwkkRVGRffmy7b9fRD43y5vc8ChNH7g",
  "key14": "4b7Bf88Dh9c9cQFwDY3tgkVB9Qyy1En38PQQKV1tq6jJieU8pREQE6Yw7LXyRfJKJX9ZWNQmL1RYYcjGzn1fJPTM",
  "key15": "3ttLYn2CFNM6U4erFPY7dSkLNfxQyVMVjs9D8dbQKGu85HXfyak57pXVojmGE2m3pMiyFcgQbRgHTdjiwBR8DTeC",
  "key16": "2VgFLhRaox13LHuENAHjZMtBX8Nm8BisNjmDArk9XBzby7AwDwbBYFFkNyKznKJxjEvFAbA7z9tY2h8vayPjcGUV",
  "key17": "3RkY4XMQZSmHRAKkG2ZVtK3arTGqmD9hWMG5c9vjQLoJXGEHHDhwgTKigcwwXmy7yim4rtmYbBLqjc9kyyV3WUsb",
  "key18": "3kMYhBxWPETwW2yytMzzfXRq5AWhYGpk2sW5rNQerPHEEZ6fhQRL77F7Tk8BRGrPCE1DBSLDHrSJoeYw4KmDQLjc",
  "key19": "4DKL65dKo1b7XZhssUWt4u7DuzfTi8Pvz5CTdPZTw7cqChUDNb99M4VwLYHq4xskeuHwHwMS3XUyuCRA2a8sBpU8",
  "key20": "4cDbw129u4Fv5J9rzhvTpRCj2XqSeGD8qS4Hd51gZNhoALSwqZuYmtqXFL48DJK5KfiFMY4aarnjaAq2bK5zarW4",
  "key21": "2zUAdvmHHvTo4MoCfkZCMxtQCzxgiZ7bRpRW9ZDVCCqWS2wLzrvny9w3FLdz4RmXWwMwRiLQfxB2RNcaPMHMWjkW",
  "key22": "3S96mvm8xWgLkKDXkim3UmHqNWbZdTg4dMoswSVztHskJPEjhYWRjwCjkzf5Sq6mt48cXbLFYcZy3uid1Gg6Sn1K",
  "key23": "3eKyDa54VDqs4dWgDBi9GRkcmDBbGuHqvQRiYcuQLL8qxmCHbUBS87Fr282LVvLzUQqVFE31earZHhyQ4Ly4VJNT",
  "key24": "5RRTUS1QXQazT31MeKHozxuPzGHTPKMRPiEAvHmBqfQ2kGrmA5pACoKyHtYzna9CJF1ByDXuLWjMdN2r38axBRMe",
  "key25": "4awHJKkpdmXU21L7gUqWRasSP9TG4KnVaWKjboneQ7J6dHR8aBrwgUuzm4qMhacDqHqpw6fpbVMPXqR7XhTgk2uX",
  "key26": "2Wj6JFLz8cAnQyiWZTEMu7ckqPBu5AwTLNWwzFYbGrfiib38P119gojiwHWiqN5gcLydPEsZP5qccDoVZ8S7uZcV",
  "key27": "9HFA1RYYbz7vxLGK9uqDUiikTdgxmMjmLz5Qi4sCbz8fLYYdpTu8oQfy8d7CjwE1hAVeGw1cpEXFTeMkD263DXr",
  "key28": "2MqmcaMGR2akDeSRgAUb6DUvsMbNJz3crh4NsyEmbjXnjY5jPAapkNZFxs9hmwffRA14HNAKYLz7z8BMTJjaWQww",
  "key29": "UGYGBwACXW55tfzirx6Rk3gkBcpjbiNXzt2YWzUoQMGvTvVJ6oV2BiGuXQVrrzHFqqz9qDH2M31AmqqLdKwMcPm",
  "key30": "4fr9odXtBNNBsGmM6jCLp3hQtWQiohdiif7acupc3J3TJ7DtGhnxCeXQiZ21ZbJ1P3QQiFFXBCWbo9XcHSqPjT9i",
  "key31": "5oZBt4rDZr5g4gMF6vDZCBE3FQ8NzzBv4ka8tFAdF5wa7RaztDvTuFSYdf7hfAgZhJ6dweGM2FuPWbRzRu2MkzDm",
  "key32": "47DVkNE6g5ZAQ3L5PyBmAwvp5xwirurWEsRNki5EmD34mw83Fs8MUzcvdL7Tck7PQDBsiy6HgUTZ1MSqwLLUL9Ar",
  "key33": "2tRYHioU9BT7B5ckjL2Dh3dhavnYimhH8pe2JAcmuHNTmoAJdUicvavj6ozX6iCQ6JN2jXxR16zFwiJ5yBLJ4Sqa"
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

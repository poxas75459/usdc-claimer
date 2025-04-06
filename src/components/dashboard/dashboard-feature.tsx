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
    "qB84VS27fg2yejyjndKt7GT7z9UiKtf1QfFfngBsYFZAWU3D1EZUgufP8J54oCjLv5f4JCgYXu4vqfmLiebdjpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fksjhVZTjiZiEYdenWgxXrw43p4p7sRDJsiyoNMhuaAJ7DHE5bsVLy7c7rYfo27Yg9BqqMWGW1mZ49kszMiNFSe",
  "key1": "5G63VJmvkWdVorT2NxsuAtJ7b1n3VnEKK8i76pUbAyv7y7SrkkTSqQWTVRQSmN2xCCWqr55gPnF4Q274LVa5BdPc",
  "key2": "MAczahbCzmSA11PmgHu5bsfpih7Vx3xJkvSPmu2HvzegEVPVwETL6b95c1Rffmm32cNoK38ejGZdQ3mHkM29fU4",
  "key3": "2Y8tdVw7tHs9UKB7KoVLj6JhfJ52WaBdb5r2DS3dtwjEcGnWt6dHne7X3atPbfc28sNWofaQUQBiRQNph6ZkJGhr",
  "key4": "U3K2Wjs79zXfYDypPY2zFyKjaiP5hjwDLmR25utPRr3nBzXhfn2exrGomxLm2tGSLMAzGVtYZYUR1MJ1unPESnc",
  "key5": "3rkRUKfAbDiZKkaaeK8JmhiF6CmVSiNDjPJftbQ6QCE1W5ZYMwMDwQgty769g1dTqZArca3zULyKnJ1gkuAoPNRG",
  "key6": "jtVUXHGFs1FJmAg2QZzGCBxUyV58tEiX3nP7zuE2UdENd5BB4QKYmWGPR9eRTgGZk9NLQhHVY6acUBS59cQDZMS",
  "key7": "4jxUKuVp4pJRFmRVSBKMVGy12zMDTvvHAsNsY69zRgNSSoEsAsTDz2LLmTYTQztdU3Cb8pPUhkiHyUR2gtZ4jyaW",
  "key8": "4fNnGznJcwKrQrxpwxEks6g1X3K7MToVmTPjeKiSpFj1NnyqC6mXPzo7L8FR5yQxMD3JnM189vhLYXwa3FThyJuG",
  "key9": "4ZXykHfwp9LeKUpnmG2kuv98qNNKh6FEnJf3ajPVeTPGB2T2NjEn3RLN6qy55YWheBPXwYaeTNu7zHcghqixvW1s",
  "key10": "4vpV25SoerYtD9Wy3rpwXBh4K7bspMdPMDttohvcN6xqiZ7RSDdn6TJH6e8vZXH6cW2CdHeZqRDsUt7ARkYGcfoh",
  "key11": "4CfsMnhffufYdmg2QGXaB3ZZULsv9hEQW1M5AyDFwonja6518x8DNzyXzymDJiPF4jWwE9Mk8duv9WzhoRv9aAGh",
  "key12": "4RM2bZztLujKeYmfpZXmFBdzz6cyJDdztfatdZe3R8FDQAhAGRghnsNKdBvGQYcvTNhKUZPfpVNXj6uSWw5KqFzS",
  "key13": "3dJJcWo2k2B9bqkbW4YKncdqeUUixRe6mDq5uGTGfnrJjitneP9pARctbbkds6MSg2mQBMWAZLccRJLFujHpUC9R",
  "key14": "2mTet4dFvxKaFckt4J1aM3hxrEsBcBvTdG1SCuY6dcaHDvd6wee38i5PkCccGm4ivqAS2hsbrAMUk4G41dGGmEtp",
  "key15": "3E6rks4cyEnMgZJPNvmsA2NSZjn3MSiWutwUdTjF7MFqpKBRAmp1PWMHLpEatrBPHvggkrzhRyhs6vvdAR7wQR9y",
  "key16": "4qJgnkPSr8c4fwvrY2sqQqB5icBqXxtx4ABV3JDf3t4KDFMo4b8CQDzmo3LLgqHqJnhVMryLHfE4PF6Qc3PoPVYw",
  "key17": "nrJXnNvNS3YZYtFyujRVTPVN75WVAkQYnDZKc17y966MTXMF5YMRrj87vJ5oTUYEkYpTBMKeptCzMwJR9oTzKyR",
  "key18": "3dpN1fQm3z71cV4UzMasouobLvwWEh81vwSerqckJ2Cr8AEm6QtJaNDVnjcg29WmxKvr71bLHSUYSrVcWpkDaRVo",
  "key19": "3QxQdN1JGtstjyJGWMGmki9qnYMCeP4PRxCjqnhSVyCHSyHEYL4kkvrL5LLjZqxJwYU1XwQvL54YccTZSJW4YjLo",
  "key20": "Z7AH1dhPw1Ysi9NU7ADvJnH9mF9TkKUhYV3FrBg4fserKREKZxvprAreDeQ7mDcj6yCFrp91gNTkbqE28PeB6Zn",
  "key21": "3TUQm5UL8qync5yX36hAgBUb2zfcoefmudmK35GuNSD9bJpspdmu7vUvmZk3q1oKosM7ZmjvVGT2EQ9gpiqVyFqW",
  "key22": "2Ec1FVo7LboBLuZ7WKjGCwsFKepxSHdK2Q2q6NUpcj4T5jmbwzgMbLnSKzny2sfX2iAwshKm2weBtBbVUX6ZDJFs",
  "key23": "5qzuepfidqv5SK7eyQbYropUSBDtQMTMMmUVDi61eLQjrRnbhNCASpPjHmG5nnQYh7z81orQhC2FDFnvGHTTRvtt",
  "key24": "41ncvs5QKiqDvYPW4QaAV8VcfUWT1f3bNctLoTaMsfCEXBxUS5kq5F9Pg5NyjogjNjqWuv6o3DaLXaE9Y8oYt9r4",
  "key25": "4KGFcBAj9SJjE6fkbt71Yus3rB1qPofmYQAX3YwPwVT5ioU3j8pQWMMBwLYEec5roMWmfkMJmDdHo7b7VJtgVb5Z",
  "key26": "448d2Aw3QE4VHV5kjZdZma3oWvyN8nUKUsFnkXdJci5eCvisZXaM6S9gWDRfcV6C3hMuRfasMHhTccEa25HYafF4",
  "key27": "4c3CX95Sr9HssuNWJ7zhx4c7iaAR9qQ3dZaCiwDEKMqNMqLELTQ3GveyevuRNYJmXTzoVed9xT4u1L8CxbeztE32",
  "key28": "8owk9N9eGz7qAFzeQZx5jpZwWudX5SQzYEwrj3zRcif2yZhYv8LdNAZsaLHgW8fv8t9kV8aaUEx2Mf1TEMjtxp2",
  "key29": "2ez19gepkb4MoL5GGDZDgXf3scH8KdBcq57STBmV6LYdjpGbzKuaB73UUmEB5zskHnzMY6UqvUheBL7B6aew8qDq",
  "key30": "4stMBuozTUxyhnrEeAQL5wqebbQ3CSR2BTZ28xj7X186t7MNEuTh3eEKpqA4UM31rgxzssWEHiBZEpmQkGq41usn",
  "key31": "3AEHgZepDmu2zshLx42xwsfLj2JWrTH6iAD1EKCAj677yYqBp1qdvDDyD8VmFVNrBcD1UQGNge72YrnjgJ8n1msW",
  "key32": "3xAaXbr7qbpuzWA3vhq6nNLBbtjTkhWfQXvjYVUYS5EenUTtouEMFvk74rowUTrFv689j7giyAFwwyiHw75ZS246",
  "key33": "2msxZKzs4gAU8GHcBSSMApvSPXWUCZ98V1U2wHwgW1HB1RmdKQbdMvTvTF7oaW59yJBYbc5JYJjf18K6K3vLKV7M",
  "key34": "2pcBU7Fv3KPbntzD78TgpeKf31qk2r3czzkGaMt1CtBjUqFvW6xjvFpmm8FT6YuoR6Rw8aQjWT5RCSAceFaTDTUa",
  "key35": "56jN5PF9Zmv5a5rzt8dV3VadYCLCsiyX7HGjSu6ePATLj2ZKLy3TGrC32gqkH1VPAqP2bBiAL7wHzpo93QvqaYbi",
  "key36": "2QsXLJ3ztE23H8Y5Ng274fw2LNNVvYQje6wLAReGCzsqwjR3zanp2AsmYVtDtPa2pBkHBwjG7END7QGGWFaXgDPy",
  "key37": "43E35g7E5awVAsYCw6kBy9e8xddJmg1Sx3Yp2SU71ABdzrf6hmBuJCMod5WUKhZCVLRDww7UL3ugPtVZhR7nAZuD"
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

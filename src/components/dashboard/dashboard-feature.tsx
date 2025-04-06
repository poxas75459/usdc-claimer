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
    "5CfJraB2DKQ6pk4H5Kq5uv2BPq9fgVGfiMj5DvgFDatNYRAPbqgN1bohgBpLDCtfKTSCyLRzVzRkNKf9xTysxcpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313CfVQ7G65MNmbuio6jRojM6LY2DwDiGLcM1NFiQaeCEJLQvj9SEkejLh9fZZK7gWxmdPLC6eAVXQ8HrTm39QxM",
  "key1": "x6LSN2Q679bUYJZTDsD8iSW6ZJNUzA834UYEoq1bsB3hjYnNL9t3rFLdQc21YMW2YuBkzE9wXRfYvYb3Ldrmdyx",
  "key2": "3JJFWhXwJF2iCqvRyFVTfBH1FXSMaFHSt8bpVSLsvcpMrK9nx83L9qeFq15zDeN5MrseKn3op66BiciiBzCHMqTM",
  "key3": "4PbBLqYrgxMjDyGwVL563LRnUFHSrhvTTuLDaG28vssTC9xeSfnr2hbuUtdfSGjR7boqYxn6u1Zfzw5udTzWu5Ru",
  "key4": "Dz9iZHxptRb1UvZqujvGgzFJr3351K5vhcN4iv1GPKUN3UioNRpPGq2fQVZw3CWAtUoTdN219YZEtZZEHZSBAzC",
  "key5": "3b1tYRe8TEG5qh9HyKcDd7ndpeY5Qqjh3NNoVPayB64q4bBWRi8pXfSuZLXC2NTyot4UZBreZn13uxBVZ7NwpSNY",
  "key6": "4QYzCRLc3UmcUR291Z5UvqKdx689mPHa84RPi3exeXnsjENo95Jyq6gQWzM5xB5dmRegQiKqaWnmvCgGCgtUCHsZ",
  "key7": "JsATtkT7mPxgEWephYxWGeGjhpPjs9MBWaL7yfSWtoJWEnkrwzX9XMdui4Bp9MJXQ9cTtiRyH2yDDHkjT5uTNw6",
  "key8": "63zstw2ktcxvRxKMr74RvJwv7ZynJ4wpwFhdVC9L1UU3h5nbGvo5uQVRkxcDy8dHTrn5nHj1cayTNxe7JdwGxHLN",
  "key9": "2aE4K4CRPpicu85LHZximrhK8EJHArUFxmbcCYxhp6YP1cvPzCFNAKavNgsc3Li6JkavR7gUsudwEuzsbY3LkjgE",
  "key10": "2fnjhBBXSo3dKJyGumztUjH5CfdXTRB3t1NA1yxXmdKQAsUyYQ89SaeKVAeNwYVXGSz4pULim2SaT7r2MgR15ZKz",
  "key11": "5TTH6a4osqJ6xQdepS6BsgF5ZmQLugzyq24vk2L6YpPqNgL11FuA1miZ53dVMgf78MqQHxTuqjCmpQCUoyvH4MMh",
  "key12": "5kD8DeLUHNAyteFLvmDREoF3RnQyBHhTXLyFuqGdRfhsiakYVqSem8Au1aShWsrvLw2LDFkZHDFL1Ys7WgTiVWbs",
  "key13": "hCRHA489jc7XyJ8ADTAbgxNZkJQaByALRPR48xq7Eu13iLZRyhsh2bgeoXdUZkFKghnBZk5VXNLBHWMR9HWJnZZ",
  "key14": "4Lgum1ByQrHikBhwcNJW3ZPpJV1QUJRgpNadBRTqa8AemX9kTWhJrk8fX2bBZkNyBSWe6uoEPg1KpxamSeRTXv37",
  "key15": "3wtUwKva99o9R37gpL5MBBjZsTKVsfx7CyjYSa159LxsunCN2VETUW98jj3crSjvrM2iRGVZbNcApZWqBjZ7fo4B",
  "key16": "53AMYH4EVamXDxy5fahgasJBSga2LAFgSMa2kbKYYvYoe627Nacp3qq2bDfv78zdcaEXvKg2va8u9KxSQQSjk4f7",
  "key17": "55zYCiAs5NNKGfxy2NkufiVr3edAA7saAhqUJJSAoXYRQsDSdwdB9z6PYHN6TiuJPiSKJmwT1TMsXHCbXcCcFCNe",
  "key18": "5fhK3rGo7S3UACJt2E9LmEgqxGENadLP2DuGcAnbBrX6Mzu3sy3HZpTKD1g4PDjbn5H9HxK8sVAn3qnmUUzBj2Di",
  "key19": "2ZH3JcWZQNVRqoNVLr1uddswaSbzNF75na7ATjZZHQHTKjb4YLbuwK3NKzd3UyN8TJuEg8zGFuSezFEyrZM4ea7X",
  "key20": "3dhnhSEgQmhqyqLt5zZgV1xmtcfnuiFduVwboiidvDH6yWoDGpZMaXN4WpdJZDXXFgZrCaHCnuHRqSatkzxz7B5c",
  "key21": "4RzSzNspj7CntpyNgbV9AaLZAudcyf5Eghne9jwPnKyUVzUUJKi37WVFzWRYLoZ7krzcDBRb37QQpH9CoreQeksT",
  "key22": "4ggptNhSC2F7yGcgrEzJ8LcCyZMtUWiksqSCkDxoHQvsae196MMyd1QRLjMCvyqatZB5XeTGLbYT3TqrhYLPhPTQ",
  "key23": "3t47VpjGdwGPrvj3oJXXB7JAhB4xj4NQXUqxr1aeFMSaeMfJJRRwchhURDpkqSioxDqYRdoD1YVM8SEUaXJFtHLY",
  "key24": "3nN6aECyq8qRwomcgtVcoa7mzbFx5W3ojiTKCKC3CQuYVqxCQhy9DTfvEQDKv2Tz2XqaDoxktZnYoQGa2ifx83JZ",
  "key25": "57VH2WxiDg8t97GJ9Aox3JdfWKCDdvsfNG8V8ZjPPG3zwWh7cTvTabSDpgPiQoysfPSQH7QnR3kVgNfvxutewCvg",
  "key26": "49CPfTLcGV2Ki7Y7gk4BrXgHHvi922XsK1tSBtKzrZfvW8fuUcRwkDw5vFYh9XS4HnubqcohqpSVUDj2DKgcSmWc",
  "key27": "5FLXxPjhwPW2R9qSmC8oec3ijQeKRzPbFwnFsEnB6NDBGoS8G133q1HriwjpKpRNuHnSrQpdmE9UuYE5C9b6UreL",
  "key28": "3iEooLq42o69sQgwwnFQnpw6bR3qFRqeVYNc4CVWGeukkGCGkkiKb2QpJSosP4vvNu4pEnuhNzss71BCw9ca19jq",
  "key29": "5oQTQubAY9rxJpwVJvdJ3g3UL6zC4y8HutX7xBmtg9a2Jrk6ojAcPE6ZMsCTwapkcrDS5WqaJUCAiA2zyjq1WfBj",
  "key30": "KZhR8kTJGkLzeqRjWbC2wahy393hgyJREqHaTC8edV2APhRfEomw84ada2MBXgM4ikoGxvzUjGJDK1CBkMwHdfQ",
  "key31": "4mChdXB5hM8fH7bN5oYj3DUG8iMyVik9thjPr1GBgDjcMAkBcquYBgySnaVLiuwYrGUueDGUv7tusY4ddk7TzXxS",
  "key32": "4MWJ8e8Kd8hEuiRnmW8cczLcdg3T7pM4awsZYiZ8gCEj4TXQfKBWKwPj5aEwfpb7ixsTtZ5YqawCWdNep8k3aoin",
  "key33": "59fCRuAntgh7GG5PYcCVRuEDEmcHLSfrfMDJ2GMpLmputdM7i8mPFbidjYCZnmVhb8KyzgeaHXpoWE76UdogpaWn",
  "key34": "3rw77iVTtkHtiYoaTL7pzUrBJx6cBekqr9XwzJ5G94pqoKfkmn4hZ2Ae9q5KnFMkkXs3p1vDN4YPNq7XX185nCdt",
  "key35": "4YP1y7XvXRCcJh4XgJKKYAuBneabM4qWyuT3YkcBRWkw9HYs9qVFsospxKdCTm6YudoHc1K8HKMfx9xnYFYPxnFk"
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

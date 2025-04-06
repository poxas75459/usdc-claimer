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
    "3zJ6o7V78EWu8gmPoRK5w4sd5ZKXUjsQf8pCdLuj441BgjoKkw4pEwDukNQeUFy3fPt66Q3QeFkffdcuSmxWcxn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZUf5mgPmjqiRjqj2s55gMGoJ1eTsok1bZRoNfLVJx2Y5RthqiNLYVKpofhEtCKcDWHr8MhL2nbzMnu9nydD3zH",
  "key1": "2ZTm2rpoCgNQv9vW6d1HUeyks1PVaxGaDnDXsbVVi5pnZRvosJu2oyRUdCQ7Ddpn7zUSzZC7YWZpLFXnYdYgBGvj",
  "key2": "5eLLPBgYhbGNRvvJAVSjm16nbxX5akiw4jmSXQekepiy9hFZsVWUWmaActX71im4VezaWu2jcBJGuxvQZ5obGXbu",
  "key3": "4TJdHKVLLUB6iZsR6t8kM6cmPoZmKx4QdmMNcqMfwKqFtXvmVn9MRYHysWU4UgEJZazSuszGnMts8FeHAH3QvRC1",
  "key4": "M5r33LyuZQK59oCm4N6eqzjhw9r5ABqNpE76SJxcdgaocuyrW6B7vrrz9yqTANfru4MvKFiZ9uGJxrjnegdqHZT",
  "key5": "3LUwje5GZeDaPYhHJKWsbw7pn3VeWYGkjbVeqzEViVaMKZqBkvnTPuRWCrauPPVD73ApEAg4XKPKkDJ7PETLaJvH",
  "key6": "3DvfAG8sAs4CLf3efS7NEECR6gGcNgL3PCe2w8Z5CAde9Vj6swxqkwQREyFg5rzqeZ3dkt1yonhiEZPyFtiyAemb",
  "key7": "kPRmFrz3SEW25rs42cv1tX2qiseuugYUniCzfkD7w2mDxmvF2KuiRBcmJ5mxARu8CpyJjWCsmSiwRtLN7XZpFQ3",
  "key8": "3EnoEFGpoLYhv9Yuu9TLR4oG9hZXJEQFodnixaTdkJQsjF7QMeLBRkfbxjeFkZH45RX7phKin6hqJG31WGm1u2SC",
  "key9": "3C8wwGENiJZBpjx6xCLEAsoWjheLfnstRJX7XDjLGpStPC7qB5NcYAA4vWBxngf6x9dPAqooA4y8C1woTNXoRUWs",
  "key10": "5Zf611kXbh58fPEQ4CdDtxBjqQMZkuVogKd1iRKfkWDYYX7BhRZ1gNNMYUB2NdYWg2fTpvDs6Dh4u6TwXhadUzyy",
  "key11": "3mDccz8kUZ6JSpseMsfiAf4hMjH3rQzWobEGVZMuqHvJC9gEHEab9ASt5w5hSqvqcZhssR7iwyKCPakgreY5v4v7",
  "key12": "5YzRxCMP26LSSh84Z1K1uBY2Rxax6a1s7buP5uhC2FEXp7J43KAXnNopaH3BXkHvBNaZ1PLYziXg4WfmLff5CN34",
  "key13": "3fWBWbBrT8fNM97h2hx2bkGizk84s1aA2C8Be2GKuQBtYnKdQY8W8Fbf4d5x3Vbes5QQiPZXeWRtJRQiexDbmXTs",
  "key14": "5XJizfuTBhqJjCPy1HLBUbV2TjcYhK1Kf8r5d7hDTFPWsr2GyjK9BaophhdaDNi1LUD9gEjeGPv69HRj3wnb32Rg",
  "key15": "5TECNdiYzDWv2UxfM5mcyvjPLF6bbnvRZhCT3iMZqP2UrgjH6kZrhdWt9iE7uTeHKGQfFQTXUb5fkBNKRFfn7D1L",
  "key16": "s2bjkndT8vX4J2uqDHJ9doPRmQxw1AtFzVXkEDXEqZLpGjpX5ebZ8JG9F8yM32pfuedfg81pK2mSfpjiDgYpVeT",
  "key17": "2et6FJmeHCeoK2Xkzdqkfr8yhMiXX41v6z3AG3bjyCkCagzSoJSDxo1njzMmShbz2gd45xjbsHL1nwMBL1A4ruTV",
  "key18": "5Q6BRveyfpysZPfVLbcEM1SVMsHduz2gMYsXkHiJyCmC6ZMZz8XwiUEHngS1sqHdPMtZyi23hXKLBw3Apvrqz8be",
  "key19": "ArVR6ziQyXdmp3A31hSqD2Ysbavz1wkdYGWBvmKSs9KcbfohFRhM3FtqJWpC9SHMXQ5oBcwamCJ7gxpQFryDx2x",
  "key20": "5jBh4zU4ZPsadXYqe4ERwaWbQWXRjcsKhNk5CgbLHno6HsaKUKXMMcgQY2bWb4dkrgB33iAHYkWKQsVnbGVeQLr3",
  "key21": "2ixrRhSEnJAKtzq92bq2NJ67AECj4xCg2VvFH3UW9pvntZyw6r8Jw5KSWr5vMGQocqJKSb6XSQhecKtLZaeezN5w",
  "key22": "qA2xGEjHpVLFyvmyeUSBoNWuNvwMVKTVwhTqWjjMfJ9pD1cTs8K5SWGBtrNmY8cZ6RQpTb1w6Nm7gQVYba5T2fQ",
  "key23": "3AB1QSfx3ZyTUxag6LLkg562Tcn5Qeraj8LWQcSxWVxH8FZNuk1iwHrY6jbcmywh1wzsW7fLJEk1scZFHz6tn5TE",
  "key24": "3919AWjv86DNN3w1hKAP9J5ND7MFaiVzk87VYCXLgPJ93Zu1gmjVtkPM4SFfNRQeUZ5ySHxCCxA2MpZT7z7V3i6s",
  "key25": "4WdP24JQE2sYVcK7QNtCyVbD6V6QTB2nEAdortCHMhGTGHDNupZ7yHNcNTnzs3Cn3nRt23c3Ci6LtQzVpk6K99RH",
  "key26": "43HmajqvTKNLCPND8P7ZD5uqRFMEjeY6W7A4WqSyHZpf3k8SsEfpMvnXrkW3HwktbaJAfmhp8THPKL4GVG4iHEhH",
  "key27": "5wQcuuGdMi8CauvTtwspUdjA5Pe8iRFSj4epRCFED9GSMCTa4EprNgLFYPpPSnUVywu3yDDJwEBXA2Qzih29mJfx",
  "key28": "2UD72aKsJ9nUQzUMEFMzMBgnFz3Wz8inp9mnpNteuzPoDii3h3sXFARggBRhnxTncJseHfYLuJbjQc5c1kCo7G7A",
  "key29": "4sd8VM2a6fdF1nqq9TWoCBqPxNCjCh33QMQxNbCD479MXtjG5d8xCoTg6dA6EKw9Vrxxaf2ehTzhGJPKydBd5ER5",
  "key30": "zFK2oRzf9u5vPN4qMJ6Lj9f2a8BipCEAG4pMwKD6dvVusBP29m6djXkPpfQKbNCWbJp8bzqGsALyLXBmz6qVBki",
  "key31": "3xGfrR8sqwV8nsoLpDKaXkfH94irhVzmVXmLfbto4sNSCjEx5gg8vNN2fmaj3pqyNm4C2N1TwhU4xFMXggWpPtLh",
  "key32": "4guP768NuAk6AjDQsTk18wu59PHKJ3d9So9ufZuDBCn1cpvHFbu6che556FrX5vGQD5Cq76cJLcBM5SJJw3ZJJ7H",
  "key33": "3uiPAoQRBjjkKKnu8KYnVFWfZNmGNvxEPTJ5aHFmCuRgFPnwvBYydKz3UZ9jdxaQceJkFcTi1xvGsx5JG2vWPp6a"
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

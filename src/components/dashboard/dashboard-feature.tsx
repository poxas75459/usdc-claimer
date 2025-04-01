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
    "4JX3CFS3VpqTJtRaUj3cpfEtXkdW8dnCLxSkzAxra6qeWjZXgvBRUwsVzXDhNz1kXkjm4ZR7MjAd6orTtKaJfMyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DkVCCihA84r2BgT6SJK9eqr1sCoS8XGuvpgYwjVfXFjBGoq8sAahmYRb2uS8d29GF6NYWerFot123nDcLbwgtUQ",
  "key1": "2vsszM7mWNqP4jD7KSZHAwRTDzeWcLzdyLVZBALqZdc7YbvjaaQikuSTkeZUemguaukvrHxD8LmU49fFatVDbrJ2",
  "key2": "5GbbRUpnwAG8YX7eZoDKNdp3dP4kpk2C6XAuvmzTC7ViAZhn79HezDResfxcfSMXKMCT225dV8b7Spmr9wuJyDR6",
  "key3": "36uzRYBe2uAe2fFUvFqhNTRHHSnqjyNrTtzDm2m1hYL3cEuHzU3m41r7hYcAv9ij4HpGXKyiNUmtZ87egAfhTof4",
  "key4": "438pSu3ykUeGz4XYy2by2jftcsWB7VN5mo3qo5eeefYi6HtUfWaUcYk987Ctej8uoeMNaca9oxVaiDETw2JbKRRt",
  "key5": "G5N7z5NLeW3duuSoEAQaxdPHaKXd2Z4VrpWGy2C2e2VedwpTePN4WdjbA9XNpsFQfUTxjYjPjTj8zevueNfz1oJ",
  "key6": "24QF7x9mQPtHeAsuYAVZHhX1qWPEUNqwZC8oGahcgvNzYsEJrHm6gPNNtVUBaDsHHKheuwwTkWiN7wDSMpRrzeVT",
  "key7": "3x9gLJNvHmnQFEBSwZTue7bozj91WZa3vs7oHAhMfY5TmwYro7gMZN8tGx465TYHAgm8vroQaL6nFpxpfwGGEZue",
  "key8": "4LtZTNq2oSJSuGhQuDEANFZDxufbrjwDbtZgqJojqkiomk8YFsMf5t5WQhHr2G5Wt7hHrYoUVRMHcFPxwEEzsPNZ",
  "key9": "42WQCitok4xqFGrWYemTU3pqP4ypoNK5PaGNTLVzai9uDrzahcXUM89rzseNTDKRMkPGsgW7TD8WspQzV8nPqxWa",
  "key10": "2zV2T6BcSKaLNPTEvdMwaWe3ih338z5BPSXy2qcYVKUK6RzPGw5Fu2r4ctACXkyYX7zQpSWVoV2iHaLXmsNpoJn6",
  "key11": "4XxWPLNEuSHQrnPUdga5Q52SACWtrgzKNu2UTm9K3XQtQ2zy1gW4SQXq9m6NpstbyZ7sP2inRybvRYuNKWRdVunA",
  "key12": "59rmBdQuKsgMtpZTjjFviTqiz9A7YDsJojWM7JqMDNHFE4DrktcEzJ2j8pMsVo2ewpHxpf5c3btLe8WEagmCmYRW",
  "key13": "cqbwVaXo7ixDnAtqXeX6kPbcMrVoFeSNxiwqPtE1n6WEAMtLHdCCbjBjcu3ZLpWhbvu37xNiV3EeLxv7mHadHT1",
  "key14": "411C26GmGaZCjc8ZNeTfHACJQWUHDfPyLwRytnSZbBrXVmn6Xsj7C9iwpjZRrc9dUx3PrTrabGqXnjGVv9pC748m",
  "key15": "4AjSqKx3trcQ6QAWHHg4xbJBGewYxLV68sMGgbHKH3NUfxhynVe4FJwy5pKs7DqE6NchLyWKknThnmJffWb3fWTM",
  "key16": "5TWhaGu3itvEQjzqM1aZgH8BPQrHMu7jLjK2buLBQwjSYpvG6urmtP3QNtp8g8JHMcMcCdSJMiau2zWBvbsNr2un",
  "key17": "3kNSkZ9Vyib29BNh4Z6Vfe28WNCGMmJqVv1zNJ9P5NT2ZSrX8pQXk8TLHZvi3Fi9jTvN1E6oTxKsxw4ZithKL38d",
  "key18": "5wgaZyv9bUk885b8fGJSDkDbiUfmyE5zsTuXWCYgjNsnonNJ5fFK1NH7iuiNnqq9BukmREtvPfAsbka8oBKH4VPK",
  "key19": "27x5Zhf8b8HJ7dKbNNVdvZ9Vij9SjEriPiX9VuvAZJbzy5sTRAdPjK3jeS2RWkhDfLV95uSetyG7jkh61PTTFNYt",
  "key20": "5x7PAdHVhxQVqJ3QsEmoZaK1tF6YJRqYpYNXU2EbUsGvNR96G7LoSCEqxQsVCFpi2E5UeTr4gspDPCbi5NFVNQZW",
  "key21": "3t2i69nnFMAoy5iaE3AHP1JCxvv8vopkRZeTfXm4QQddvUddFmAPkAqn6Fsiuzpm9WBJCJEj3BK2kxMhgQFey9uG",
  "key22": "38uqf12FHzUpMf25XeiMURWzLK6a5SfmYTqh8rCSe6ykWosQ2UNGVGXRCDM59qvnegwLT2rSpJoDwaJMUbmbVWgS",
  "key23": "49QC6QTXc8neBYig1abGBHdRdK9KPKmTAtLcZXo1eFZHhnVhmcTxEeqrmeAEQL5bAKuYyvNv88cjM6ucx4pV3kyV",
  "key24": "4NN29AiAR7N7Uyd7jeraNdhKobWgjsqFzUNzWJArxAvfH7qGd271E4BBMcyxt9Q6xQ7ZrMxWP8GL8EuMWBu8FRLF",
  "key25": "5vjWiATCURwLn47v5ERftdSJkE5Tb37hurXZVrVB76bsPksMYPtpdp5cYFpvXjBWqegiiEAyvAyKzP8FqomA873f",
  "key26": "43uggkp7CMN7gSwTGg211E4eXKoTYQP6nK1tBGp9KCc5t3F8wBq6diXZNK4VtJ8b7nu4GJbzWyMeLuoWoBCSUrWL",
  "key27": "4WfoRANDZRKFCB2n8ppqmxqiKGpAcAj4w1uP8NssgVqjqCeKZ3D7DqED2gzJg6aLnLJzg1kVf3nuaVdW65XEsN87",
  "key28": "5qaEBaWpCTi3N9LgpptGz7pxFMC2dwm1Zhd7v6dpH1yKMTbYJ5s9Agj7LKebqKzSBRX9eMndUjPTNyCftHRtt7EH",
  "key29": "5NQjfmFQWG9QgkFn4ufHeMZMffMGjS7dUdApDAnn9ydpprjre2JkTrjatPVUaVk3ksSj1jXbacEZnn8M66ogGhFL",
  "key30": "4xF7QSk1dS1LCYiZHzD6NKn7PF3T9Jv9nTXLNQFm8Cua8oAGDXR6cLZafQopExg8rcGxYVJKn8ADB97n4d9zKBZd",
  "key31": "3ByUR6APXETrSwDsPPdRtbLdtWX6LxTLVKZtPaFBK9Qe4QcivZfFKHMFhpanLzM27RSKb3bHqy9t96XJQC2nJtnA",
  "key32": "5pvmdTRSiGgAfzudk8uYZSU5CMT692zLsUun7YEY8rBqyd69Xu9V9jsijftpQAXxHM3RNd7P6EofjHG7h79jzCDB",
  "key33": "cWKFPQiMKCm85mMxiNWQ5VEz67dmEsdzun5PeRR8fux4HLtpwaVxFm5syjQxjoh9ezWuHtGeAd185V2NET4fxUs",
  "key34": "3t8sKyN2Hr5D5xF5i3hQHwAi7mtYgmjWPbLjVtHNWYmDYoQVoDvKm2ocwXkCmPuFj5EXYN7hgbeXnTgMmSrnyh3f",
  "key35": "2e1yZcVDFRC64HhFvpZYPXdUT7783TLfP6AKTfQUUFKeztc6u8b5hcU29fTvevKdNFHSv54xLkgSp2T22fWjwoFn",
  "key36": "4zBhoJVYvXFXN6f1nyYrYZEVeimPV5EKGVceH3DcECnvBvvja3YD8dDnwtGCip1RbyzSEeyorvkagvAmAocpNBdA",
  "key37": "2hi4sdjgKaJKjhBGYaAsU2oG9JdppbCAxwX2BAcE2MFTS7y9j9GbKRfv93DWcSapjFzfgNrrAwgdP6rGCgWus7k4"
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

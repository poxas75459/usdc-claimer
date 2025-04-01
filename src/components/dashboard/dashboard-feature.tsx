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
    "5j1bae1AQ4v8BreGMoz2MjAfiBiFfgPMALr7aL7bNL52FubGyESjEm12TJQamzASHc3cRNb1gNTV4URsiS7SWSZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2S2XPCGjxPQ2yYSSYLA45mddQJYa642CPiScQAenzW4zF1bJkTPgQNquJkAShMc8ByvTBkczDNqWUUpPPQoZYU",
  "key1": "3mW9iQoxFRjB5gXeFLidcngDCJv1yC4qGcYRk57G81VHBNU458JGcVdxdu43tURYBW5xkcnQiUaZqHiJijJSwbSx",
  "key2": "5WKw19VkyTNDxyDsiaJaR8e3w6WhQ5SmPoCmvfCjjbtQbaJoH1buz4GDbisPYgcumJ4ycsEFQRTw8KD4yHLr2ESY",
  "key3": "2f1u2NqTQiMvyu6seNFYzB3ZRehFMB8yEB8bkeaStbzLwoBWvEj4up6qAjwogRnZ2rHxAw21U1TDG2qD8caPbrC4",
  "key4": "459sTjebjhqaetRhQ4dgK9GxAqweUUZHZCAYaMNPWbCTeLZPHJ8t1TdgLMzXMp32EEyoE8o1oWrMQMHaBuwy1JzQ",
  "key5": "49a7kQLWqCNYMh66D7RuBPgdSMaKP9Vntof9dXX2vSjkFsDjkFFjzYjyQJ17taf3vCbXCWEHuG6MsqVUpJNRGKtf",
  "key6": "4h5hmGKETCCzswHyDKrm2fB9Bb3JLjFitCMM5qpu8HNYfiBHGH4f7yX3MSyWCLXS3NvZD4WNDpm95snMc6eWLcKN",
  "key7": "3otWgQMaua2xqntDdwmRmpjhvEGpGFySJBQigHaJdm2LWDE7ccupBtvRFSyLhswxQPXAJmgyhm7wr1x6HWncpgxM",
  "key8": "2SX4hGAdLDEaVpFSCtipwyd4oUNZQrUDnod2T2JPurdGaiVdryyoVQKAMPX8mujH5ijKbfU9v5TATPsw38UCLBbX",
  "key9": "44J3EyawFuXXUgMfbM6zox3KVeKkSKfakTV46wrXNwJ3Gx64C6UzXoTr4T61EqunTAWoPSkaKEcvgpjkSJdLy9V4",
  "key10": "4LnzoLg7hKQZLLdAfc7HQfbJTu4yC3jmfWjU1vxRoJK7Wq1mFPvmgKNnGz1AyWXTtUZXzKfrs7RXSyeDrwdvfn58",
  "key11": "3jmcQ8e961waMptaNis6797bbacoj2yLBFNNzLULi7JwfmvMdodSxhD6E84duSHPdyE7McoriZhuh7z9iz3ouMsn",
  "key12": "oxjiMH8a13apYg2E5atYubNVzVX3tisBWHVEChQrYSp64fZ5Qi2uJPhuPrbR8khDcG7gUFxAQbk2twXpM99KW4H",
  "key13": "4TtVFkmPsMBoCfquigNrrr7xUaK8Ds47Ytdxc3wYEyU8P9y3zbiB2nNYqAzEDSB9ZRJgKsDMVEewj463D4f4s1gJ",
  "key14": "5EdwMBWa32TJZQcEXhGtkg4JC7sUb2wMMWqwPycCXF68RaBsrj8u1oZiHsZByFhEr5oGebaJTTa28C9p22Gq1oYS",
  "key15": "5yy5Hz887UsA7CnVV8Sw4mAzX3MPBrAR8Rye5ccoScBPZvUo3zmfxw8geeFC61LhN8WgxYAwqgbDvDi8j9wu5PqT",
  "key16": "rhcJ9Snp2KbXaujxFKrrSDRLfj5zNiBrjz6gxracVNuYex4W8F9M7heKEQTXWagFLorn5osS2Yr2vE2xxDkjZ9y",
  "key17": "257zSqX6z9Gonaz42Djnes4WLaonztLVUjqvTSfL2diKjqmtTmZJMjtnvySmuhJWrrSFpF6KVYuf14zkPZpzYSND",
  "key18": "3dtbPqJXKDQ7ywXMYUDJ8F5YSwsSCQBSMDVZkccNpm6yQdH4ACkPhzyGh7JT11AtK2MGZQXyrohyuDuycanhPh6U",
  "key19": "5nAxfWLP6GpVpb61foBFfUyQqFYqNNnTfYMJR34RsRnj7CiEm45zivB5gXeYRayuxnH2tF2F44ukMK242pq4BZNC",
  "key20": "3VjSsckuXwQuGWoq2jusveYFqZge5JbvfGPgTzEoPQWCMgXiJvBtgp3WPHudTirTAzE6ztsw37rAdMCvJ9jU93ah",
  "key21": "H4a4dP9Wrmjt5kySNMPSs2NXZwWwgJ8xEkcr5ARCGv9ogBqybcRkJQLh2nqZGzefqA8unnKtyMzFB4jxf5vjn6R",
  "key22": "5pcjSsDxhfH7ti9TueReYXMvYxKQ5ujsJZuTrC89ujKcMuYn4Fcfs2mqxRjrQm6sFDrceRSwUZ7sZ5zgKdRcmZw",
  "key23": "3cEYGkP8tY3k6cL83Bgw1V5AogjeaheQAB6JBabrko1fCWoLhd5zf4XoSrafdb1L93A52hKh6xuZ9cmSawhuap3u",
  "key24": "4atXLN7Kgmqh8SpdFB8ChgDknxoRRvZfGKaNda5Tx3tpdGRjKh7FamRr1iccL7TAFFK7eT6DYqfPhLs6NyfExGSM",
  "key25": "4wHa8uFyvmt2jeh9aMUVhSkURCSJSTPRjwZR4NorPEq6FvAfpTR4FGin5khso2yFDuc8BsuyVJDRJ3VDw1yMXyj4"
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

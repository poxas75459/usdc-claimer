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
    "vfMVYjpSXw3Y3wsGAjPMNUvEFFm5V8K3WoxQZfB5XHhpQMHn92dYK3y9Bf76Buv8As8kM4MPYhGjvvhKLF5ZKdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6EgoQR3pjiv3tR96Jc5J2MKZGdbmcc2c28Fmm8qJ2tmfFAZv95UQ2U3beHjP6jhsNp7e5zudZCp2CBJV6zpVHZg",
  "key1": "4DTwyHb59YRT2cCLoTzpRdzZtXaNVRJAMitBAkVg4SgiVJfbmcsphrmxwPFF9NmaVi1NJLaJpekoV5J82y9Z2YH6",
  "key2": "4LvPQrCfwbMJQqb8YBKVtCLVHznSQGcSiPtGHSRsNEGA86NFYDeAK59G1SsYMSGTstE5fKUxbBzkfussb4v7U5DY",
  "key3": "2zi2Tcedt6vTZCXWkvDWWS4odxXUDd755PpWJqrvnMnKCtCsokybgfdN6A1BJMAoxFiJF7B1evymVvdVHCDFfvYm",
  "key4": "3eTp7z74eEjZDUrwy63Sra7qwbNaqGkHSaHB4u9wADfZPzcZNfiYYCx3Lw8cBcbyzezfcJEMeDaVWUjt3HiemE9X",
  "key5": "TPA1Dm23ozg3tvTyV3mmp4USiYfvtWzrxvPcyckuEoHN9eZpVNcUU4V4o4pYUKVu7aPHF4DTThiw47X6QnCYrrE",
  "key6": "3SGjacCa6uTGfAMHF6BLdnbShz4Ne6Vb4Zukzcztrg9o7LQ4LEQGcJQ2iTPqYoKM7SFL5HZTJbwDBtybVQC2e4KG",
  "key7": "pQjV8s5pwwxKLhcHWn2vHbfFPs41S6qn6V7ZQFybHfPV3kzH3oHQ53MN1DT6qm6GUqMGUVk31uhbPnYPMm63NhD",
  "key8": "4PVL6k62ybVg5D82PgxQrhwT2LQRjuJ5EN2RGVuDzgUrcDJkPCNVQAqvFZmY3pZGHvwUwqtPTbVPdorrgVcwJ6P5",
  "key9": "37QoT7NjpN99R4tqMDGUjGimCq3AGLdRKSMrnDqqBapwyYqVjHgEJW7w5o16VbxwyxUPfaFogodeA8UGcekRzsi5",
  "key10": "3Yw7j97AW56eQMjzpw7aeWQwq39a3B8MgPqAaqpcYHeisKDcNMJ5pxSHmFZxZkURakBJ7rPiZWMKc7LUVy1bkqWz",
  "key11": "4hzFdq8NSgKL7rqMwbXWYKBQHQXTtqxCfR9ehiTD6imMPiWuLVu6B4p3eTyADSCzgrCeJKF5wevbMMazXrcRabon",
  "key12": "5vvtzfk4RQucFUdKLZcFCttZ5RPyW44rtyiDwSuXTagzZZ1eZm6J3jc2376Fibnuk4xE4sKCWnK67XsUvD6nzSp3",
  "key13": "3omJYWXZ8sxByAhtH8wZcFcfWZUQgm4K2kTToU5v6BQ3SW3cNgJkb7MNTFMh1kFy3gYCJkCdJhyQHWrnoNqQKZVp",
  "key14": "2ZS3vqsXfyrmzsWq2Dpqtewyv9UcDGzFgBvmiajrHsEBzkZR9sPmFy3x59SvTkwXq9VE3sUtBFTuWszCf5UxReep",
  "key15": "42CYu6SArAs9Q5J4GFsbJsE4YFW9wgCMu9YAPheGcdfmD9QRyymTPtN4fM9sbRogMmJ8aMW3a74X3cmQMTVmygob",
  "key16": "4ZDAqxKVkaJLveuErFoiKt2rcUiLcBds1UP736kiizgsTNZLAAwt7WQtVZ45tsvzaNCmWCG3sKbHA5AC31n5dAs1",
  "key17": "4NU3fjNy6me4GJLXjJd4n8jFJNAkFtDE56XrvqtKZSLZ9UixL2TtiNydi8JNYjMtc3heF8uNu6qGoU4yT19xjdQd",
  "key18": "QsG9KRAmBDmXJo6cHM4Nd4hKEzWupf7DQjFpz3UJi3vd79DH3g4iyQDBPfTzEexYCd5u2QJCXmqGzkpXvt9Fuea",
  "key19": "2aMN4L4aNT2tFXXivHK7U4NnqDdm5MLRTFd2gjNgEBtEKSRqBmMFUXHChaRqtHcicsgHYDiZ83qQzDH5UzdzajUZ",
  "key20": "2Moj2C47Z65qzV9AS8RSzKgrh9uhC7iJRSd87uGFHHn7XS339K53wpcAj5W4mZMYPNnqHvoYwkKbVJA95ozcwWS",
  "key21": "3dnW6s48viikrQh82otdHqZj4q8v5ATijEYcWRMBDD4Q7nFwd9uk8TC8cubBtNkcwqss7obaaRis7s9bomevux7L",
  "key22": "5B6bW2L7ehSxHWgeZfGTCec1YUoizhK6Fqd41R5m7kBQLrkqH7rGkmGffQUoqNKi9h9cS9Gj7DSDn7cxvoY33ewa",
  "key23": "28kdao86LmvmWGyRFhiGEFSK1cAHSn2iyQivD85UnNx4E3srEGuVpHeuFZ86xtjXr6gcPfjCgLa7W7Ry3pwc1ZHj",
  "key24": "3Z3Cih9KDWc7et2sB48A5yHY5jhrsaQHXLLrrKcvaGARMuobJe8oVbD8VMzoQPw92PKEBScNhjVYXqJNSsPAsM5P"
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

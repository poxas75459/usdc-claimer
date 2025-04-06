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
    "bvYQFaDWiE3wZQ8uHRSMKkYkD2rta6Zh56aQLs878SmSBcsPMpQVLAAY76BGiehawn7W9ZXnpcTvrt1JSCzeWKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMaMVhdAmLHhMKdVdiXRvrEujHjfv6cNZDojsZYvkV2N9LdywVP6uSTJ2qwrGjXDVGUPF3LvyDESSk8YQXww61t",
  "key1": "2uL7V7a3mxh2NGCMk6WH5u9AFaCUkxwn6gFJGPxTJnHbrhhfmmhUifDZEVhmk2iZgJeZU88833XaeKfezhmJGVrD",
  "key2": "5FedNPChe8aspJfyNBh4Ki4BxqkjW2td8KJyM7XxUVFmVssS5bMHLxMbMSFNj99FBx4LZaxKmNchJwJr6jTFU3Q4",
  "key3": "ixFeoXpqpppC5bf6yN9VBq7x31hmfqs2jgPD9fYpF9s3XKRB7XJUr5ZfMnZZg4XajmeB8HJMiRo27iCUtvfsNE2",
  "key4": "2DT7z5GGEKN3Ek3KuqLM3SkX6R8SrbRcmKdHX3svzK8aKuY59YhmfXi2nTVgcbe34LCbphaTh6cvgbJvHyerteQq",
  "key5": "jeRoaLMm1tut9VjKfvADP9dS1YRubHkcSbXWUMZMQVz1xZf18QruW2hJrdp28A95LHUSJrp2Re6At4aJ9Ac8eNr",
  "key6": "3pMfeqM4u2PXsMKuQnMjvh2RdrvqsatVLhD1zhgbBfnk361ZqPtvDzu1VjcqEpN7QdkybCpWdC7AGwdVtFuUqg5x",
  "key7": "3CMjt8AU3db6v1WLb3BcwpepGT3tP3J8eruSNKWmmakui81oyzUKTVpztTZLJKxXLf5vMoXvBqNiJ1ae7ANpTBjJ",
  "key8": "3ooKieUc34FV8r3pfbZzeNqGEdwhYMoPBUnPi3BdT3cBCpGgMnYde2KqF3JZhsQmJn5onn13DvFF8TMFHjrdh5B6",
  "key9": "23Vq8jCEjRSqyscrk2i4AUxfCv828JEkVq9xwz3tppcNP5fNohidxGK6atdgUc25pz1LTVW6CC8FwRxLxuu8gcju",
  "key10": "4pvAYzWZV2LXEbCH9CqofGeiEF3aAQbYrSBtxP8HwreUWb2v7f1WSqzqUjYWWcLTcBVb1Xxhn8PvYVFyzLUAUr7k",
  "key11": "RK799C33Qa4MxZknBjqEisf3rNjR43W2vqyfJQ9YrQuTpwziiqU4CZNZ8NDTkY3W7u3AKtpLp54LyeJVmWp1usG",
  "key12": "Rq12zh3FsAximuLbJg39SBWt4gCP3oxR3Nndkkhva4yAb53geAwKP3vYgDYC75Ep9ZeTb6eZHw63Gb8ZqtHBN5o",
  "key13": "61MFEiKPzgEPeQu8kqtsEDvgW6d1jwCWne5vBnFgo43S4AHTBUpFnd4fkKUmQdGRUSmN9VACx5fLkkmtLUGYSz33",
  "key14": "2vXngVTkRii6x3d9wsmec331mehJ4SpmPzgFa3DNc1FrX77BHW1y4sDo1a8u3mVjrrR5JWUfwcsgBKnkcKTtVvQa",
  "key15": "3sruwXgrAjzLnLBsV7RmxaScjkveKCw5FUEWRtGADzE7Xr6Mmr1Sti9CKH8N9sELshtSnwggp2T58n8CbNmt2hqS",
  "key16": "4B6V3Ds8nqqBkpZyoR1WatbQLbU3DHzMdCu1W85sAYrerRYCR8meq6ubaKgdh3bDE3D7se1QKJgzHDSv3T5rdyc1",
  "key17": "3v6UQvSMUDdnFMFQk47StnPae1tpvDjNL45AXtEKnZaut6j7h5q3j1woBRsAxLbegnbBkDhUJ6L6ujP21ayHHuM2",
  "key18": "58tRynAgmEWc5hVA8kzNHJULzs7jnBib1vyFqVjayj98o9DWLZNMY7yp2uDrm42iQbtjmQg1dSBGNvi4rRbNKD3W",
  "key19": "VAUoXf1zwnrJuZm8QnK1QMhES4X1Lz9XBPjPYq5nTT47FjC2CQqiAeHKC69wayKy4GxooLEoJYBiQJczxinzNWu",
  "key20": "561k5ptuwuU3KUHhjPCZ7Ujkca1U4QFwPHQ4LwYUJZBMhJz4tbr8bFPKwiqynHUXC5M2S9Phgx867rTK5DFn1KjK",
  "key21": "Yt8u3FvXTi7jU8fzErCZX1CJxhzJzU21Mti18vfqkfV9WY2B9AMqqhPkrgoDrtE2iSepNsjwmXZ1ZSvxPVrEkjX",
  "key22": "2FUErfvzDfWAxbZg7W8h5Louw5g7N2spb5BsN3w1WxPA2npJmdsm6Q8KtpwwP1ZRyWtac18ps6cwgsSMaZZ7rQVW",
  "key23": "5rqA6MTW6QozRxomPoh7SPnikFEQj2LGERXB1ZDZLupaXRo6KMobdQR9tmfuSwuShedbRPGbvcLnaitGmBz6bscA",
  "key24": "5ZqVz936L8WWZTDuhrNbcKG6EqbPEKLgpyvNtteswr3HRm2KpUe2bzhA1jW3g2ys5dHw78TJCWYVB5F2SrLwMyFb",
  "key25": "27JjwP7L7cw37sp1Cm2VTp185PQsnk1mJKHu65D1M7FdPfynNZkqEMEL1kqKxyX8VzTb7jm1G64FuAkLeLWXbXGK",
  "key26": "2RL2T7LqEFY4JrH2CEknTwU5gFo7M7yJKm7FZyRK3BshbhQWufbs1jtWvzkzpbQxmXT5KxSf8muUVVMTfwbp1btQ",
  "key27": "3edupiJj6KbJb3BvXJvvmyBdo8rD2H5fUdhbpvXmHNUrXw3eUGoFyQhqDFnLuADz9b1gZkcu5neyfRUEZHT8gKZ5",
  "key28": "2qvgcD6SDSggrcNcaHix4gcsG7nNPvwG4XUNX9aybmEKEaHFcauRsn6p8VB1jdngEMtGtTKQ7hqpMtMYd3tY9qdx",
  "key29": "2dmGTj2bVs7fCtJCcGqwgGRKbmU7hrR5cmSdyo1wmNYNFNK6WaWYKmyHTs37yExuTSxhDwFA3KdceS5xeg5ctKY8",
  "key30": "2dxT9aLLgJZ7XU2wKff6xsB1v3MLueZVsuKumiPC4ZrBffWLD6dwLK11kiJBFSMWMhJM7YxvSKeXi7AerqAvP7pc",
  "key31": "3nSCw4QeQjLkcCi8kqQusFsRnCE1Qb8f8P79gyXeR6KqgpBK8MqTmMiTCeaXg7cXeny2BowRodM4tuWLw33vgCg7",
  "key32": "3BbTusYkvBMFPfPCL4tYLJKNoSvQU4pfdT9qi6VxCB7mpzXVMNfeLDsDbXSAKWBjRWgKzfehETA5mMQtLs2tdH32",
  "key33": "pReNgaD4GZCbDgkMN6B64PRiVGH6kcEBsUkVbP2PhPtHJjaNUHMNMY32rHrytpXTAiTZuMq266tXzmKLdvDD6Cq"
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

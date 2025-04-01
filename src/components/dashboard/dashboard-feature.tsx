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
    "2SyuewEXN4Qz8jqTwFCXpiafubq8Ssap9ATPZmErEsDB4wEyo1XMcREBFtndR8otLCtF7V1rzcDwT5xtBPnFXtZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRLmH8BrA42UZiaisoFkSRjUq8zNZNDzAdQ88kv6Bhzr97GjGmDmT7CzYcn9KhrykaP7ow6Fzk4inGeXdc7QGPA",
  "key1": "oVhKSs7huoteuhMuxMqyC9Z8rax1baYG36etTsduQhT9yRt8Dkqn61GfEKS2EU5MyWt1J1fbzb8FAcNuood9kaw",
  "key2": "5Wd6R9RhLRXX4ocMtyKY8mGieFvtiu8HqtFj5QWa73VEUP8FEugEsgj4V9ChXmNJquW6uBN8Fv1KoQvZyKNWeZb4",
  "key3": "1mLqFd9xcKynERiLBHznSwxUgiPkERLKTzPAXqqW9YnhYzkRZX861urjZpRwBr7vVJbYeoQzsKLmJkheEoYzxxE",
  "key4": "4WAucVrHSdpySRPSULNyBJu7snJwXkF5wM6EMxspbKNFc3hL7gE7M24fKrz9cqvJ95BvWGGoFvRPFvZ5U7F8KxbT",
  "key5": "3saGEBtyDRSBWmSZrNdyW32Z79V4Tp51HD8STCj9wntaDevKXuULyDDkiM4VQa5rmFLJz8aNc4AGWDTnjMrG1Ndr",
  "key6": "2Pb1Vkc6KTHdq8yuPY4AB5Hy4MyuGtpuCqrm1jKUVkLj8xFSY5QqRjd9Z1tFbdigqNrj7DgHuToCbtSM7zRQfYud",
  "key7": "3Sy1gGYcGA8UzxK3DEXqsaiBoZotWugw5wjZ1bfMZWetndhA2SPSdTtBuE1No8rwwDhrGDxV7fuHeAbtPKbFwXBT",
  "key8": "4rMnUxGqJDVSV15N31dQ72mQv3j4iAYMyYdPRimkNM5BejmtqDUDi1paVudemx3AatXVrzP7P9oSX3HYhKuQXwAX",
  "key9": "4stWG6bkQEfykUqvpRm2FuMxjdfT8GhA6ao5VYjeLWnQqs7TySxgPXC5mX76YZyJMCevZDJi76ziPrpnpD3fWWnY",
  "key10": "5Z3WFGEABw1MABHE9Fw5WYxfb52w97dF1uaVnUGHTyDLam2UpExLK8U7RQVkVdt7USpCVjKLTrZYCDmyjTsNM3oM",
  "key11": "2vYL2rvAkLBxBcXaFMPvZ7V6WoZHJRhhFSYVBjdKdXw7gJWkyoR8UnBN7hKum6xSyswJzUPVUQJMJiYqNL4HiQQL",
  "key12": "4LnVscCZv4CmAX1Q8aBgHPcQnEsYjbbc94M52g3yDT4vtu9GUVyQzcx29uL3wdGqYPeoVgWTA5KS3HMgHkNchKbZ",
  "key13": "SeuBLe8TVg8MsPTa7apFE64i4MNP5KM8Mwgi6bK9GVWDopy18EKKoQxbHbuyPSzXPVQpfb5QMEXaeAuDcs62Z7u",
  "key14": "5CCJj3xZ376mEyDMnHKtw183f3buV1wWwLqdKZVFJCJBZm9jDQj4CpTtEzkTqfnyom66bL5d1mHHJoMfJHaUMw7j",
  "key15": "2ybLeSWXvpnLjoUE9Tzg9GQmxuWy7ZGDiuaSsDzjegVCnAdSBJLDSVfTrYPuKqGUr3dR2r7WUe9qrZUT8Ayy9mtg",
  "key16": "5ZTeQszkCNrCD1TdSZsFxYeWWbXoCkA2TXXtdVmjMkWzJ7Qi6YCkbCDehLHb9RMePavfeMZytfLFuEXkRTruqkXi",
  "key17": "2jXQQaxXCA6YecZkXW4zBEc6HD1XA6FLsCps7SxYtYWQmAtqDAVe2jn5Q6PGAMWrZufUt2tnNtVXwpkUTQRVoEx7",
  "key18": "2Ced4RkqLuqHXoVBhA1WVEqoLeT7ojig47BDDMtfu89sFzHC4X1DAAiDqwQJ4Lm588dzqV4emFTQLfbosevYpTjo",
  "key19": "R6rJLNW99sN2JxYwnke6R1DPssza6p2uzv8tzsTqRbeUzkJ8JwDVENmjmfWks1RDPU2H2oxs2zC81jVr5FVkqFU",
  "key20": "3VQvxQvrCTG8uY2g77BAFr95LE75vKkzd6rfVpFnrrc7A5pAwUkd2RpYWBPMtjF3FVEQnTeBboGnbF8VZuHbxMCz",
  "key21": "4N1BnZkKGD2oyyWMYMGrbA71A1MvvfLwzphGLU2gxKo9eA9d5r7Ws3qJYLk24jM8b6KMUazcbU56dqJ3gXJTieUq",
  "key22": "3HSTijUHQjjm5mAnni1cm9tjCmNoB1KvAQfHA2J28zN6UxwiqZi4D8aRnxKGiUqUr26o8fnKbsRn4D7SKe3X2MDn",
  "key23": "5VckhvXAh4PAudHdvftmUq3RfrYXrahLRMTWV8QHRBdXTA2jXziKTwsMbnWmC7odEbsDLFhSh7aqr4uU17Kmpu7c",
  "key24": "5M1TYSquwMjNoEgXocfZTzicyQs6c9nv19ZtRdFEZargTQdBEz3Ve7J6S7WVBRmk34Zr9yhEfTqq9Y7LJM9h9szS",
  "key25": "5JwnKZydik6e6F1iSTmJiuXcV2GAFMUhiVRULzGbVCdFPhTrJohAziTiuuv7hfpyRD41T19Qf6fGuKeB6e8rJH3D",
  "key26": "3faBp4tboEkCv2EQfZ8AVd3rg5kDX9hJd7m54pUQPiadFPDNFAoAv2vkpAQzNMGJYUP1K31HcKJ3jTRbxQZTrQwD",
  "key27": "4ZJiCgs8e8fCh2Tt71FBjsM2QdhW13nwp3Emc53V6W5hjXLMyikQ5Fxd68AXsBy7AV1EXdu79777FuoX5S7T2VYY",
  "key28": "455YLNV2NHUpbKW3SCf8F2eDTxyk5YzGHLMUnU8jfYMEwxEeE2xC83WuBFMWkaKqKad6K2uaPqVW8oS4ui6UjBw5",
  "key29": "4vJhX3nu9YndcVLaMCA34rb7N2aKCVYdqAoJyRNbqgJGjJcPyy8Unz3V4APcX3GwUh1fmMGqXR4Cx2giXFsRDzwR",
  "key30": "pPXYfiNnJKL751sM4PtDQpSCTY9jh7kn6dRaf78vqpzXrj8ZXvShDtKkUZEWQ5hW5FzmwJLpt9EeespSozPWDEs",
  "key31": "tcU23gY3UEWv8jLdRFB3vF1f6GP4eFXrstm1R5k4sVWJbXouS5mTAguDrcfFxN5skku82UBMAQ3hswpQcKxZXnE",
  "key32": "fWZXbAcGqDSG9d5k5WC4ux3WFXqpzcJ3PXAo8xmYA4SjHfdHdqRypxeWha6yzhS1ZEoLRqUbz27mm2DVhTqYP3t",
  "key33": "3gNCq3KULPHF6WMPGUuhnPRj2g5Vz6pjWXBsf27YswYMac52neGm2w66xt8kbZU8CPXevTSkzJdUekgYxK3z7Lpc",
  "key34": "3drWeuDCu6YHbPXGMv1fAnLrq3uQTRZZw2EZTtmU8v5JvKb72LBmNbgfbpbAELC6gDZqoVkHGJ3hkiL737maUn2u",
  "key35": "35B4YKUS3SnZe3B4yRb4XCGnm2nhf3CcVndZ1u7gzcoC3fZf5ADv7Z2wLxCQ3FBECV79TANmL4AJwKp3StbWj8F7",
  "key36": "2KFDitgjkTpGFt2HjSZSSrqbj3greM165oQjLXXKUxiWf5Pbo9Cf3y65fsvJcsXzUFM4nvSn16y7wUj6vTSGA19G",
  "key37": "3FfkQP8TX2YPSfFbq7LTsdz5JKBhYkQGeCkVvJainCAwoLVzKa3mMbuyFfjCigdADfTNJBWmnhprRquL6RC7UohB",
  "key38": "66PeeT49FReKXbKBMz5pbTcavWqq8s7dt7q3rZ4dZ5S5EQoHYxWt2w1v5PePqTjL4LfWDVHYCX3oK2jXYX1DxR3d",
  "key39": "5E1moz8e5wmv1P3qdCDSC1GeaVmoJY9MggqFDQSG4RyFsfyWbSCqVZKdpQifT3yU6EmvE3PrHVHPNqpaoQSuJ4bN",
  "key40": "63AX71ophDR8SgDDEtcDDpbhtm24mwoCv4kerQ4JSfXy6tpqGMwMFRv39JVomJtPoaA4QWXEEfNi7oYqTRBNnWa6"
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

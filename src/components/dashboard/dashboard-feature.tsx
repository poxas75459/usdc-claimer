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
    "37hL8TQ9G76gwK8VCSZYXTxeBNW8hbDp5o2UzQXBzxtRBaQCdNYJk8e61CAFDwEcggGGbZSg2toVnMZsVwqL2L21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzoxLB3MWpDDUBTmt3bLUiw1EY2FEQfTQHrZsiN1DoW17rU92VvReudTqmTDKy9mHRXu3TpfT3vZQSSnSvhkBca",
  "key1": "2YXu3BA6Z24ayJUZhRzWmh6YQo4UTqxD675BBpgVGJ4r3GkC6wBnAoe7F3haA9SVRrSoxxX3RuuCyprG4VshngKe",
  "key2": "4sQnJQvwaSDRKUWo7vPFxEGUsD87NtFcRD5sZuuMM5cq31KNZUnievTWbe48ibAn9mmSjcYjKtknEy9DxE2cXpA4",
  "key3": "4g67nzN83YfM898x4QBAwLrSb16uUmGUCEZw8UiqR8Um7ue9hje7zKYw8m5EUHPRXLJYiU1qak6rdckh3wj8jxVi",
  "key4": "5WXGLKeBJy4vuA5YeKutmd1rHNPPaajHcWYkqRP8P4Ut6Wuu2mDVNcGrZPHYL9XFAs7esWSYVMqhHJscMReDrXDt",
  "key5": "5JELAnU6up86oS9gbqDJKoMsoyKeiSW2FT8UywUo8HPJYLUyp5uKn6pZ6nC9M3hkVobZHtvY7qfjAThkdr6wUKNp",
  "key6": "55pyVpchFNyw3KBxqZ81i4k5f5psYdfETA9SDJL9VMs7yN4z98Mdo5BUScQxVdw9C5fk4CfyqE3hvEPMwtBdMsbA",
  "key7": "4X2W6RCjuQXhHeMtzAqDDC1ZUPDFFksBLXC3jWxQdFp7gx1YdMEkvoZwpkEfjgur9t35BrRozGYSVdHe4zwjt28h",
  "key8": "2quUiUHBq1ZT5QJP31UuNUkomdaUSDigjNbuS5oWotSUpH3nRGGzvQzJHnPKKNRWzFMwk6k4WpDGnRXdV11iLKf8",
  "key9": "4VCVQVVcewypzrjpfNDUsPbVQJzgnrpyvDjHYhSKduEHZM6uPCmfyZd7BJUpwoiNC5peBaJTGE3Erppt37DdeYcX",
  "key10": "2hgZpCY3y8gmd2Lp83Gec5J3vhgjEGjWH1GqmsKfhiLYSUTiTfGrSvdw6eXSQhC5eWUsEMWNvCVzFJaBiMRX4ptU",
  "key11": "3zFY7w1GkaSo6ockCTexT74AMj3dRyzZMKsqMBjvLZV3oquKUVXF6GpBs2Hy6aYHgEbSz1dqXtyM9e7LwSMExZg7",
  "key12": "AeM7qWrzMRF16cgU9CQMBSjndjZwBLXDaC4c6RwrR9VSwKiaQA6UqGz4TjR1Wqx9yCwLT6v47XVR7Ybnvtv8hPC",
  "key13": "21GMBo69WjkBhFUuA79HTBDpmoUXqhkPR6spSfNAhghVjA5jCv3K6BHTPFD9e5xLs7pbDxB5Guh6xQckEphQP8A5",
  "key14": "5xEyuwKH3PJVJF37UAX8sRTNW1SyxS6BCCRDNGb7VZZRNJryHV1VXUHumQJNcPd4LBnQAujbdQvf4yjqEbf5KGiw",
  "key15": "4ZKjiXEUCQeqvZc9FKrSLGvSZVtagvR5UBQdcvNpLddRi1P3EdB3Fg8esrfjyZ8vV9AAbNvpTbbc6ZMa6K2nyZd2",
  "key16": "5PsyBoteTUbJxfq1JRhB46NE6uxrr7J14G84XgbD5vJgwWeUCUxpNSPF3VihgV9QZyYqu5UBNda9f5KVexvZjD7T",
  "key17": "4zu3xz5Fx26Qpkrxvdic7dfzEpRUwHwWVDqAqXKqEYcLnQeLDZYABZRCsx1Y76Df5U7R6qHMT3QfkEKyYgPyYoqF",
  "key18": "2qcZNMatHynHZEnRHcNN6V9fTDvHi4EfZjiEGQ6S6w2pk6PxSCQFVaHKVQHwQZ7VwcsfJpNF1B947AMAjTJkj2oq",
  "key19": "5txSS7hGn1fsPfNAtmHLNtGnvN6Vf5JAJvictVFX8FcsueG5Av3rkAYfRDiqPuTkABkkEs5WPvXF68VoPoP7Pbje",
  "key20": "3y1yCwqTz5zFfT3izi2Hr9x3BquKM1mQY2wz55Xhmr7gHz5hWbe4Ggib7PB7sQkUrX1fripRyATTFyfrnu5jxHQ2",
  "key21": "31Bp8DM4L56HVvhimFDUgp7PYi7AiQcmfkNhys3cU4dXPXutdj2XXsngw7sGhJrAC2uTxr7rudV6FZMRX6E6dLsA",
  "key22": "Ppmh6de2zTCBh7REP45rkMAZPWJ4YQx3W6WAH5Eu9dyfMiZVNEGZL6BPbzceeUmym5hHcys2sFDXAcwpeearS9J",
  "key23": "johW2AEYxNZUu4ApZC3eN2pGBTE2iFc7VZtk5TB5GQcm2cZRKyDpkmMiBAyv1up8JtQbcFYNbtEWciBrsta7ZMc",
  "key24": "5aqdZrUbW6xTobTuJRLq4LkhZ5utD2MNS1UpoYJGT43KQjHsHEto6zD8W88Sb99iey2NtDDzddzeFwVEZHFMECHh"
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
